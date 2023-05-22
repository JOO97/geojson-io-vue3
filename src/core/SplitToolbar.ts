const SplitToolbar = (L) => {
	L.Draw.Event.SPLITCONTEXT = 'draw:splitcontext';

	// NOTE: polyline 扩展splitting
	L.Polyline.addInitHook(function () {
		if (this.splitting) {
			return;
		}

		if (L.Edit.Poly) {
			this.splitting = new L.Split.Poly(this);

			if (this.options.editable) {
				this.splitting.enable();
			}
		}

		this.on('add', function () {
			if (this.splitting && this.splitting.enabled()) {
				this.splitting.addHooks();
			}
		});

		this.on('remove', function () {
			if (this.splitting && this.splitting.enabled()) {
				this.splitting.removeHooks();
			}
		});
	});

	//1. SplitToolbar
	L.SplitToolbar = L.EditToolbar.extend({
		statics: {
			TYPE: 'split',
		},

		getModeHandlers: function (map) {
			var featureGroup = this.options.featureGroup;
			return [
				{
					enabled: this.options.edit,
					handler: new L.SplitToolbar.Split(map, {
						featureGroup: featureGroup,
						selectedPathOptions: this.options.edit.selectedPathOptions,
						poly: this.options.poly,
					}),
					title: L.drawLocal.split.toolbar.buttons.split,
				},
			];
		},

		getActions: function (handler) {
			var actions = [
				{
					title: L.drawLocal.split.toolbar.actions.cancel.title,
					text: L.drawLocal.split.toolbar.actions.cancel.text,
					callback: this.disable,
					context: this,
				},
			];

			return actions;
		},

		_save: function () {
			this._activeMode.handler.save();
			if (this._activeMode) {
				this._activeMode.handler.disable();
			}
		},

		_checkDisabled: function () {
			var featureGroup = this.options.featureGroup,
				hasLayers = featureGroup.getLayers().length !== 0,
				button;

			if (this.options.edit) {
				button = this._modes[L.SplitToolbar.Split.TYPE].button;

				if (hasLayers) {
					L.DomUtil.removeClass(button, 'leaflet-disabled');
				} else {
					L.DomUtil.addClass(button, 'leaflet-disabled');
				}
				// 按钮title
				button.setAttribute(
					'title',
					hasLayers
						? L.drawLocal.split.toolbar.buttons.split
						: L.drawLocal.split.toolbar.buttons.splitDisabled
				);
			}
		},
	});
	//2. SplitToolbar.Split
	L.SplitToolbar.Split = L.Handler.extend({
		statics: {
			TYPE: 'split',
		},

		// @method intialize(): void
		initialize: function (map, options) {
			L.Handler.prototype.initialize.call(this, map);

			L.setOptions(this, options);

			// Store the selectable layer group for ease of access
			this._featureGroup = options.featureGroup;

			if (!(this._featureGroup instanceof L.FeatureGroup)) {
				throw new Error('options.featureGroup must be a L.FeatureGroup');
			}

			this._uneditedLayerProps = {};

			// Save the type so super can fire, need to do this as cannot do this.TYPE :(
			this.type = L.SplitToolbar.Split.TYPE;

			var version = L.version.split('.');
			//If Version is >= 1.2.0
			if (parseInt(version[0], 10) === 1 && parseInt(version[1], 10) >= 2) {
				L.SplitToolbar.Split.include(L.Evented.prototype);
			} else {
				L.SplitToolbar.Split.include(L.Mixin.Events);
			}
		},

		// @method enable(): void
		// Enable the edit toolbar
		enable: function () {
			if (this._enabled || !this._hasAvailableLayers()) {
				return;
			}
			this.fire('enabled', { handler: this.type });
			//this disable other handlers
			console.log('this.type', this.type);
			this._map.fire(L.Draw.Event.EDITSTART, { handler: this.type });
			//allow drawLayer to be updated before beginning edition.
			console.log('enable', this);
			L.Handler.prototype.enable.call(this);

			this._featureGroup
				.on('layeradd', this._enableLayerEdit, this)
				.on('layerremove', this._disableLayerEdit, this);
		},

		disable: function () {
			if (!this._enabled) {
				return;
			}
			this._featureGroup
				.off('layeradd', this._enableLayerEdit, this)
				.off('layerremove', this._disableLayerEdit, this);
			L.Handler.prototype.disable.call(this);
			this._map.fire(L.Draw.Event.EDITSTOP, { handler: this.type });
			this.fire('disabled', { handler: this.type });
		},

		addHooks: function () {
			console.log('addHooks');
			var map = this._map;

			if (map) {
				map.getContainer().focus();

				this._featureGroup.eachLayer(this._enableLayerEdit, this);

				this._tooltip = new L.Draw.Tooltip(this._map);
				this._tooltip.updateContent({
					text: L.drawLocal.split.handlers.split.tooltip.text,
					subtext: L.drawLocal.split.handlers.split.tooltip.subtext,
				});

				// Quickly access the tooltip to update for intersection checking
				map._editTooltip = this._tooltip;

				this._updateTooltip();

				this._map
					.on('mousemove', this._onMouseMove, this)
					.on('touchmove', this._onMouseMove, this)
					.on('MSPointerMove', this._onMouseMove, this)
					.on(L.Draw.Event.EDITVERTEX, this._updateTooltip, this);
			}
		},

		// @method removeHooks(): void
		// Remove listener hooks for this handler
		removeHooks: function () {
			if (this._map) {
				// Clean up selected layers.
				this._featureGroup.eachLayer(this._disableLayerEdit, this);

				// Clear the backups of the original layers
				this._uneditedLayerProps = {};

				this._tooltip.dispose();
				this._tooltip = null;

				this._map
					.off('mousemove', this._onMouseMove, this)
					.off('touchmove', this._onMouseMove, this)
					.off('MSPointerMove', this._onMouseMove, this)
					.off(L.Draw.Event.EDITVERTEX, this._updateTooltip, this);
			}
		},

		// @method revertLayers(): void
		// Revert each layer's geometry changes
		revertLayers: function () {
			this._featureGroup.eachLayer(function (layer) {
				this._revertLayer(layer);
			}, this);
		},

		// @method save(): void
		// Save the layer geometries
		save: function () {
			var editedLayers = new L.LayerGroup();
			this._featureGroup.eachLayer(function (layer) {
				if (layer.edited) {
					editedLayers.addLayer(layer);
					layer.edited = false;
				}
			});
			this._map.fire(L.Draw.Event.EDITED, { layers: editedLayers });
		},

		_backupLayer: function (layer) {
			var id = L.Util.stamp(layer);

			if (!this._uneditedLayerProps[id]) {
				// Polyline, Polygon or Rectangle
				if (
					layer instanceof L.Polyline ||
					layer instanceof L.Polygon ||
					layer instanceof L.Rectangle
				) {
					this._uneditedLayerProps[id] = {
						latlngs: L.LatLngUtil.cloneLatLngs(layer.getLatLngs()),
					};
				} else if (layer instanceof L.Circle) {
					this._uneditedLayerProps[id] = {
						latlng: L.LatLngUtil.cloneLatLng(layer.getLatLng()),
						radius: layer.getRadius(),
					};
				} else if (layer instanceof L.Marker || layer instanceof L.CircleMarker) {
					// Marker
					this._uneditedLayerProps[id] = {
						latlng: L.LatLngUtil.cloneLatLng(layer.getLatLng()),
					};
				}
			}
		},

		_getTooltipText: function () {
			return {
				text: L.drawLocal.split.handlers.split.tooltip.text,
				subtext: L.drawLocal.split.handlers.split.tooltip.subtext,
			};
		},

		_updateTooltip: function () {
			this._tooltip.updateContent(this._getTooltipText());
		},

		_revertLayer: function (layer) {
			var id = L.Util.stamp(layer);
			layer.edited = false;
			if (this._uneditedLayerProps.hasOwnProperty(id)) {
				// Polyline, Polygon or Rectangle
				if (
					layer instanceof L.Polyline ||
					layer instanceof L.Polygon ||
					layer instanceof L.Rectangle
				) {
					layer.setLatLngs(this._uneditedLayerProps[id].latlngs);
				} else if (layer instanceof L.Circle) {
					layer.setLatLng(this._uneditedLayerProps[id].latlng);
					layer.setRadius(this._uneditedLayerProps[id].radius);
				} else if (layer instanceof L.Marker || layer instanceof L.CircleMarker) {
					// Marker or CircleMarker
					layer.setLatLng(this._uneditedLayerProps[id].latlng);
				}

				layer.fire('revert-edited', { layer: layer });
			}
		},

		_enableLayerEdit: function (e) {
			var layer = e.layer || e.target || e,
				pathOptions,
				poly;

			// Back up this layer (if haven't before)
			this._backupLayer(layer);

			if (this.options.poly) {
				poly = L.Util.extend({}, this.options.poly);
				layer.options.poly = poly;
			}

			// Set different style for editing mode
			if (this.options.selectedPathOptions) {
				pathOptions = L.Util.extend({}, this.options.selectedPathOptions);

				// Use the existing color of the layer
				if (pathOptions.maintainColor) {
					pathOptions.color = layer.options.color;
					pathOptions.fillColor = layer.options.fillColor;
				}

				layer.options.original = L.extend({}, layer.options);
				layer.options.editing = pathOptions;
			}
			//layer为Polyline可进入编辑模式
			if (layer instanceof L.Polyline && !(layer instanceof L.Polygon)) {
				layer.splitting.enable();
			}
		},

		_disableLayerEdit: function (e) {
			var layer = e.layer || e.target || e;

			layer.edited = false;
			if (layer.splitting) {
				layer.splitting.disable();
			}

			delete layer.options.editing;
			delete layer.options.original;
			// Reset layer styles to that of before select
			if (this._selectedPathOptions) {
				if (layer instanceof L.Marker) {
					this._toggleMarkerHighlight(layer);
				} else {
					// reset the layer style to what is was before being selected
					layer.setStyle(layer.options.previousOptions);
					// remove the cached options for the layer object
					delete layer.options.previousOptions;
				}
			}

			if (layer instanceof L.Marker) {
				layer.dragging.disable();
				layer
					.off('dragend', this._onMarkerDragEnd, this)
					.off('touchmove', this._onTouchMove, this)
					.off('MSPointerMove', this._onTouchMove, this)
					.off('touchend', this._onMarkerDragEnd, this)
					.off('MSPointerUp', this._onMarkerDragEnd, this);
			} else {
				layer.splitting.disable();
			}
		},

		_onMouseMove: function (e) {
			this._tooltip.updatePosition(e.latlng);
		},

		_onMarkerDragEnd: function (e) {
			var layer = e.target;
			layer.edited = true;
			this._map.fire(L.Draw.Event.EDITMOVE, { layer: layer });
		},

		_onTouchMove: function (e) {
			var touchEvent = e.originalEvent.changedTouches[0],
				layerPoint = this._map.mouseEventToLayerPoint(touchEvent),
				latlng = this._map.layerPointToLatLng(layerPoint);
			e.target.setLatLng(latlng);
		},

		_hasAvailableLayers: function () {
			return this._featureGroup.getLayers().length !== 0;
		},
	});

	//3. L.Split
	L.Split = L.Split || {};
	L.Split.Poly = L.Edit.Poly.extend({
		_initHandlers: function () {
			this._verticesHandlers = [];
			for (var i = 0; i < this.latlngs.length; i++) {
				this._verticesHandlers.push(
					new L.Split.PolyVerticesEdit(this._poly, this.latlngs[i], this._poly.options.poly)
				);
			}
		},
	});

	L.Split.PolyVerticesEdit = L.Handler.extend({
		options: {
			icon: new L.DivIcon({
				iconSize: new L.Point(8, 8),
				className: 'leaflet-div-icon leaflet-editing-icon',
			}),
			touchIcon: new L.DivIcon({
				iconSize: new L.Point(20, 20),
				className: 'leaflet-div-icon leaflet-editing-icon leaflet-touch-icon',
			}),
			drawError: {
				color: '#b00b00',
				timeout: 1000,
			},
		},

		// @method intialize(): void
		initialize: function (poly, latlngs, options) {
			// if touch, switch to touch icon
			if (L.Browser.touch) {
				this.options.icon = this.options.touchIcon;
			}
			this._poly = poly;

			if (options && options.drawError) {
				options.drawError = L.Util.extend({}, this.options.drawError, options.drawError);
			}

			this._latlngs = latlngs;

			L.setOptions(this, options);
		},

		_defaultShape: function () {
			if (!L.Polyline._flat) {
				return this._latlngs;
			}
			return L.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0];
		},

		addHooks: function () {
			console.log('s');
			var poly = this._poly;
			var path = poly._path;

			if (!(poly instanceof L.Polygon)) {
				poly.options.fill = false;
				if (poly.options.editing) {
					poly.options.editing.fill = false;
				}
			}

			if (path) {
				if (poly.options.editing && poly.options.editing.className) {
					if (poly.options.original.className) {
						poly.options.original.className.split(' ').forEach(function (className) {
							L.DomUtil.removeClass(path, className);
						});
					}
					poly.options.editing.className.split(' ').forEach(function (className) {
						L.DomUtil.addClass(path, className);
					});
				}
			}

			poly.setStyle(poly.options.editing);

			if (this._poly._map) {
				this._map = this._poly._map; // Set map

				if (!this._markerGroup) {
					this._initMarkers();
				}
				this._poly._map.addLayer(this._markerGroup);
			}
		},

		// @method removeHooks(): void
		// Remove listener hooks from this handler.
		removeHooks: function () {
			var poly = this._poly;
			var path = poly._path;

			if (path) {
				if (poly.options.editing && poly.options.editing.className) {
					poly.options.editing.className.split(' ').forEach(function (className) {
						L.DomUtil.removeClass(path, className);
					});
					if (poly.options.original.className) {
						poly.options.original.className.split(' ').forEach(function (className) {
							L.DomUtil.addClass(path, className);
						});
					}
				}
			}

			poly.setStyle(poly.options.original);

			if (poly._map) {
				poly._map.removeLayer(this._markerGroup);
				delete this._markerGroup;
				delete this._markers;
			}
		},

		// @method updateMarkers(): void
		// Clear markers and update their location
		updateMarkers: function () {
			this._markerGroup.clearLayers();
			this._initMarkers();
		},

		_initMarkers: function () {
			if (!this._markerGroup) {
				this._markerGroup = new L.LayerGroup();
			}
			this._markers = [];

			var latlngs = this._defaultShape(),
				i,
				j,
				len,
				marker;

			for (i = 0, len = latlngs.length; i < len; i++) {
				marker = this._createMarker(latlngs[i], i);
				marker.on('click', this._onMarkerClick, this);
				marker.on('contextmenu', this._onContextMenu, this);
				this._markers.push(marker);
			}

			var markerLeft, markerRight;

			for (i = 0, j = len - 1; i < len; j = i++) {
				if (i === 0 && !(L.Polygon && this._poly instanceof L.Polygon)) {
					continue;
				}

				markerLeft = this._markers[j];
				markerRight = this._markers[i];

				// this._createMiddleMarker(markerLeft, markerRight)
				this._updatePrevNext(markerLeft, markerRight);
			}
		},

		_createMarker: function (latlng, index) {
			// Extending L.Marker in TouchEvents.js to include touch.
			var marker = new L.Marker.Touch(latlng, {
				draggable: false,
				icon: this.options.icon,
			});

			marker._origLatLng = latlng;
			marker._index = index;

			//   marker
			//     .on('dragstart', this._onMarkerDragStart, this)
			//     .on('drag', this._onMarkerDrag, this)
			//     .on('dragend', this._fireEdit, this)
			//     .on('touchmove', this._onTouchMove, this)
			//     .on('touchend', this._fireEdit, this)
			//     .on('MSPointerMove', this._onTouchMove, this)
			//     .on('MSPointerUp', this._fireEdit, this)

			this._markerGroup.addLayer(marker);

			return marker;
		},

		_onMarkerDragStart: function () {
			this._poly.fire('editstart');
		},

		_spliceLatLngs: function () {
			var latlngs = this._defaultShape();
			var removed = [].splice.apply(latlngs, arguments);
			this._poly._convertLatLngs(latlngs, true);
			this._poly.redraw();
			return removed;
		},

		_removeMarker: function (marker) {
			var i = marker._index;

			this._markerGroup.removeLayer(marker);
			this._markers.splice(i, 1);
			this._spliceLatLngs(i, 1);
			this._updateIndexes(i, -1);

			marker
				.off('dragstart', this._onMarkerDragStart, this)
				.off('drag', this._onMarkerDrag, this)
				.off('dragend', this._fireEdit, this)
				.off('touchmove', this._onMarkerDrag, this)
				.off('touchend', this._fireEdit, this)
				.off('click', this._onMarkerClick, this)
				.off('MSPointerMove', this._onTouchMove, this)
				.off('MSPointerUp', this._fireEdit, this);
		},

		_fireEdit: function () {
			this._poly.edited = true;
			this._poly.fire('edit');
			this._poly._map.fire(L.Draw.Event.EDITVERTEX, {
				layers: this._markerGroup,
				poly: this._poly,
			});
		},

		_onMarkerDrag: function (e) {
			var marker = e.target;
			var poly = this._poly;

			var oldOrigLatLng = L.LatLngUtil.cloneLatLng(marker._origLatLng);
			L.extend(marker._origLatLng, marker._latlng);
			if (poly.options.poly) {
				var tooltip = poly._map._editTooltip; // Access the tooltip

				// If we don't allow intersections and the polygon intersects
				if (!poly.options.poly.allowIntersection && poly.intersects()) {
					L.extend(marker._origLatLng, oldOrigLatLng);
					marker.setLatLng(oldOrigLatLng);
					var originalColor = poly.options.color;
					poly.setStyle({ color: this.options.drawError.color });
					if (tooltip) {
						tooltip.updateContent({
							text: L.drawLocal.draw.handlers.polyline.error,
						});
					}

					// Reset everything back to normal after a second
					setTimeout(function () {
						poly.setStyle({ color: originalColor });
						if (tooltip) {
							tooltip.updateContent({
								text: L.drawLocal.edit.handlers.edit.tooltip.text,
								subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext,
							});
						}
					}, 1000);
				}
			}

			if (marker._middleLeft) {
				marker._middleLeft.setLatLng(this._getMiddleLatLng(marker._prev, marker));
			}
			if (marker._middleRight) {
				marker._middleRight.setLatLng(this._getMiddleLatLng(marker, marker._next));
			}

			//refresh the bounds when draging
			this._poly._bounds._southWest = L.latLng(Infinity, Infinity);
			this._poly._bounds._northEast = L.latLng(-Infinity, -Infinity);
			var latlngs = this._poly.getLatLngs();
			this._poly._convertLatLngs(latlngs, true);
			this._poly.redraw();
			this._poly.fire('editdrag');
		},

		_onMarkerClick: function (e) {
			var minPoints = L.Polygon && this._poly instanceof L.Polygon ? 4 : 3,
				marker = e.target;

			// If removing this point would create an invalid polyline/polygon don't remove
			if (this._defaultShape().length < minPoints) {
				return;
			}

			// remove the marker
			this._removeMarker(marker);

			// update prev/next links of adjacent markers
			this._updatePrevNext(marker._prev, marker._next);

			// remove ghost markers near the removed marker
			if (marker._middleLeft) {
				this._markerGroup.removeLayer(marker._middleLeft);
			}
			if (marker._middleRight) {
				this._markerGroup.removeLayer(marker._middleRight);
			}

			// create a ghost marker in place of the removed one
			if (marker._prev && marker._next) {
				this._createMiddleMarker(marker._prev, marker._next);
			} else if (!marker._prev) {
				marker._next._middleLeft = null;
			} else if (!marker._next) {
				marker._prev._middleRight = null;
			}

			this._fireEdit();
		},

		_onContextMenu: function (e) {
			var marker = e.target;
			var poly = this._poly;
			this._poly._map.fire(L.Draw.Event.SPLITCONTEXT, {
				marker: marker,
				layers: this._markerGroup,
				poly: this._poly,
			});
			L.DomEvent.stopPropagation;
		},

		_onTouchMove: function (e) {
			var layerPoint = this._map.mouseEventToLayerPoint(e.originalEvent.touches[0]),
				latlng = this._map.layerPointToLatLng(layerPoint),
				marker = e.target;

			L.extend(marker._origLatLng, latlng);

			if (marker._middleLeft) {
				marker._middleLeft.setLatLng(this._getMiddleLatLng(marker._prev, marker));
			}
			if (marker._middleRight) {
				marker._middleRight.setLatLng(this._getMiddleLatLng(marker, marker._next));
			}

			this._poly.redraw();
			this.updateMarkers();
		},

		_updateIndexes: function (index, delta) {
			this._markerGroup.eachLayer(function (marker) {
				if (marker._index > index) {
					marker._index += delta;
				}
			});
		},

		_createMiddleMarker: function (marker1, marker2) {
			var latlng = this._getMiddleLatLng(marker1, marker2),
				marker = this._createMarker(latlng),
				onClick,
				onDragStart,
				onDragEnd;

			marker.setOpacity(0.6);

			marker1._middleRight = marker2._middleLeft = marker;

			onDragStart = function () {
				marker.off('touchmove', onDragStart, this);
				var i = marker2._index;

				marker._index = i;

				marker.off('click', onClick, this).on('click', this._onMarkerClick, this);

				latlng.lat = marker.getLatLng().lat;
				latlng.lng = marker.getLatLng().lng;
				this._spliceLatLngs(i, 0, latlng);
				this._markers.splice(i, 0, marker);

				marker.setOpacity(1);

				this._updateIndexes(i, 1);
				marker2._index++;
				this._updatePrevNext(marker1, marker);
				this._updatePrevNext(marker, marker2);

				this._poly.fire('editstart');
			};

			onDragEnd = function () {
				marker.off('dragstart', onDragStart, this);
				marker.off('dragend', onDragEnd, this);
				marker.off('touchmove', onDragStart, this);

				this._createMiddleMarker(marker1, marker);
				this._createMiddleMarker(marker, marker2);
			};

			onClick = function () {
				onDragStart.call(this);
				onDragEnd.call(this);
				this._fireEdit();
			};

			marker
				.on('click', onClick, this)
				.on('dragstart', onDragStart, this)
				.on('dragend', onDragEnd, this)
				.on('touchmove', onDragStart, this);

			this._markerGroup.addLayer(marker);
		},

		_updatePrevNext: function (marker1, marker2) {
			if (marker1) {
				marker1._next = marker2;
			}
			if (marker2) {
				marker2._prev = marker1;
			}
		},

		_getMiddleLatLng: function (marker1, marker2) {
			var map = this._poly._map,
				p1 = map.project(marker1.getLatLng()),
				p2 = map.project(marker2.getLatLng());

			return map.unproject(p1._add(p2)._divideBy(2));
		},
	});
};

export default SplitToolbar;
