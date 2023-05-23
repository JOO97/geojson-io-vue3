const registerSplit = (L: any) => {
	L.SplitToolbar.Split = L.Handler.extend({
		statics: {
			TYPE: 'split',
		},

		// @method intialize(): void
		initialize: function (map: any, options: { featureGroup: any }) {
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

			this._map.on('contextmenu.hide', () => {
				// console.log('contextmenu.hide');
			});
		},

		// @method enable(): void
		// Enable the edit toolbar
		enable: function () {
			// this._map.unbindContextmenu(this)
			if (this._enabled || !this._hasAvailableLayers()) {
				return;
			}
			this.fire('enabled', { handler: this.type });
			//this disable other handlers
			this._map.fire(L.Draw.Event.EDITSTART, { handler: this.type });
			//allow drawLayer to be updated before beginning edition.
			L.Handler.prototype.enable.call(this);

			this._featureGroup
				.on('layeradd', this._enableLayerEdit, this)
				.on('layerremove', this._disableLayerEdit, this);
		},

		disable: function () {
			this._map.contextmenu.hideAllItems();
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
					//   .on('MSPointerMove', this._onMouseMove, this)
					.on(L.Draw.Event.EDITVERTEX, this._updateTooltip, this);
				// .on(L.Draw.Event.SPLIT, this.split, this)
			}
		},
		split: function (payload: { ploy: { _leaflet_id: any }; items: any[] }) {
			this._featureGroup.eachLayer(
				(layer: { _leaflet_id: any; edited: boolean; remove: () => void }) => {
					if (layer && layer._leaflet_id === payload.ploy._leaflet_id) {
						layer.edited = false;
						layer.remove();
					}
				}
			);
			payload.items.forEach((item) => {
				this._featureGroup.addLayer(new L.Polyline(item));
			});

			// this.disable()
			// this.enable()
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
					//   .off('MSPointerMove', this._onMouseMove, this)
					.off(L.Draw.Event.EDITVERTEX, this._updateTooltip, this);
			}
		},

		// @method revertLayers(): void
		// Revert each layer's geometry changes
		revertLayers: function () {
			this._featureGroup.eachLayer(function () {
				// this._revertLayer(layer)
			}, this);
		},

		// @method save(): void
		// Save the layer geometries
		save: function () {
			var editedLayers = new L.LayerGroup();
			this._featureGroup.eachLayer(function (layer: { remove: () => void; edited: boolean }) {
				layer.remove();
				if (layer.edited) {
					editedLayers.addLayer(layer);
					layer.edited = false;
				}
			});
			this._map.fire(L.Draw.Event.EDITED, { layers: editedLayers });
		},

		_backupLayer: function (layer: {
			getLatLngs: () => any;
			getLatLng: () => any;
			getRadius: () => any;
		}) {
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

		_revertLayer: function (layer: {
			edited: boolean;
			setLatLngs: (arg0: any) => void;
			setLatLng: (arg0: any) => void;
			setRadius: (arg0: any) => void;
			fire: (arg0: string, arg1: { layer: any }) => void;
		}) {
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

		_enableLayerEdit: function (e: { layer: any; target: any }) {
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
				this._map.fire('draw:splittingstart');
				layer.splitting.enable();
			}
		},

		_disableLayerEdit: function (e: { layer: any; target: any }) {
			var layer = e.layer || e.target || e;
			if (this._map.contextmenu) {
				this._map.contextmenu.removeAllItems();
			}
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
			if (layer instanceof L.Polyline && !(layer instanceof L.Polygon)) {
				layer.splitting.disable();
				this._map.fire('draw:splittingfinished');
			}
		},

		_onMouseMove: function (e: { latlng: any }) {
			this._tooltip.updatePosition(e.latlng);
		},

		_onMarkerDragEnd: function (e: { target: any }) {
			var layer = e.target;
			layer.edited = true;
			this._map.fire(L.Draw.Event.EDITMOVE, { layer: layer });
		},

		_onTouchMove: function (e: {
			originalEvent: { changedTouches: any[] };
			target: { setLatLng: (arg0: any) => void };
		}) {
			var touchEvent = e.originalEvent.changedTouches[0],
				layerPoint = this._map.mouseEventToLayerPoint(touchEvent),
				latlng = this._map.layerPointToLatLng(layerPoint);
			e.target.setLatLng(latlng);
		},

		_hasAvailableLayers: function () {
			return this._featureGroup.getLayers().length !== 0;
		},
	});
};

export default registerSplit;
