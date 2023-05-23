const registerSplitPoly = (L: any) => {
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

		initialize: function (poly: any, latlngs: any, options: { drawError: any }) {
			//NOTE: toolbar添加mouseenter事件
			const toolbar = document.getElementsByClassName('leaflet-draw')[0];
			if (toolbar) {
				toolbar.addEventListener('mouseenter', (e) => {
					this._map.fire('contextmenu.hide', { contextmenu: this });
					this._map.contextmenu.removeAllItems();
				});
			}

			// if touch, switch to touch icon
			if (L.Browser.touch) {
				this.options.icon = this.options.touchIcon;
			}
			this._poly = poly;
			this._splitItems = [];

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
						poly.options.original.className.split(' ').forEach(function (className: any) {
							L.DomUtil.removeClass(path, className);
						});
					}
					poly.options.editing.className.split(' ').forEach(function (className: any) {
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
				if (!this._splittedGroup) {
					this._initSplittedItems();
				}
				this._poly._map.addLayer(this._splittedGroup);
			}
		},

		// @method removeHooks(): void
		// Remove listener hooks from this handler.
		removeHooks: function () {
			var poly = this._poly;
			var path = poly._path;

			if (path) {
				if (poly.options.editing && poly.options.editing.className) {
					poly.options.editing.className.split(' ').forEach(function (className: any) {
						L.DomUtil.removeClass(path, className);
					});
					if (poly.options.original.className) {
						poly.options.original.className.split(' ').forEach(function (className: any) {
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

		_initSplittedItems: function () {
			if (!this._splittedGroup) {
				this._splittedGroup = new L.LayerGroup();
			}
			this._splittedLines = [];
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
				this._markers.push(marker);
			}

			var markerLeft, markerRight;

			for (i = 0, j = len - 1; i < len; j = i++) {
				if (i === 0 && !(L.Polygon && this._poly instanceof L.Polygon)) {
					continue;
				}

				markerLeft = this._markers[j];
				markerRight = this._markers[i];

				this._updatePrevNext(markerLeft, markerRight);
			}
			for (i = 0, len = latlngs.length; i < len; i++) {
				this._contextMenuDisabled(this._markers[i]);
			}
		},

		_createMarker: function (latlng: any, index: any) {
			var marker = new L.Marker.Touch(latlng, {
				draggable: false,
				icon: this.options.icon,
				contextmenu: true,
				contextmenuWidth: 140,
				contextmenuItems: [
					{
						text: '删除',
						disabled: false,
						value: 'remove',
						callback: (e: { relatedTarget: any }) => {
							this._removeMarker(e.relatedTarget);
						},
					},
					{
						separator: true,
					},
					{
						text: '由此拆分',
						value: 'split',
						disabled: false,
						callback: (e: { relatedTarget: any }) => {
							this._splitPolyline(e.relatedTarget);
						},
					},
				],
			});

			marker._origLatLng = latlng;
			marker._index = index;
			// marker._map = this._map

			marker.addTo(this._markerGroup);
			marker.on('contextmenu', this._onContextMenu, this);
			return marker;
		},

		_onMarkerDragStart: function () {
			this._poly.fire('editstart');
		},

		_spliceLatLngs: function () {
			const argumentsTyped: any = arguments;
			var latlngs = this._defaultShape();
			var removed = [].splice.apply(latlngs, argumentsTyped);
			this._poly._convertLatLngs(latlngs, true);
			// this._poly.setLatLngs(latlngs)
			this._poly.redraw();
			return removed;
		},

		_removeMarker: function (marker: {
			_index: any;
			off: (
				arg0: string,
				arg1: any,
				arg2: any
			) => {
				(): any;
				new (): any;
				off: {
					(arg0: string, arg1: any, arg2: any): {
						(): any;
						new (): any;
						off: {
							(arg0: string, arg1: any, arg2: any): {
								(): any;
								new (): any;
								off: {
									(arg0: string, arg1: any, arg2: any): {
										(): any;
										new (): any;
										off: {
											(arg0: string, arg1: any, arg2: any): {
												(): any;
												new (): any;
												off: {
													(arg0: string, arg1: any, arg2: any): {
														(): any;
														new (): any;
														off: {
															(arg0: string, arg1: any, arg2: any): {
																(): any;
																new (): any;
																unbindContextMenu: { (arg0: any): void; new (): any };
															};
															new (): any;
														};
													};
													new (): any;
												};
											};
											new (): any;
										};
									};
									new (): any;
								};
							};
							new (): any;
						};
					};
					new (): any;
				};
			};
		}) {
			var i = marker._index;

			this._markerGroup.removeLayer(marker);
			this._markers.splice(i, 1);
			this._spliceLatLngs(i, 1);
			this._updateIndexes(i, -1);
			this._markers.forEach((marker: any) => {
				this._contextMenuDisabled(marker);
			});
			//抛出删除事件
			this._map.fire(L.Draw.Event.PolylineMarkerRemove, {
				poly: this._poly,
			});
			marker
				.off('dragstart', this._onMarkerDragStart, this)
				.off('drag', this._onMarkerDrag, this)
				.off('dragend', this._fireEdit, this)
				.off('touchmove', this._onMarkerDrag, this)
				.off('touchend', this._fireEdit, this)
				// .off('click', this._onMarkerClick, this)
				.off('MSPointerMove', this._onTouchMove, this)
				.off('MSPointerUp', this._fireEdit, this)
				.unbindContextMenu(this);
		},

		_fireEdit: function () {
			this._poly.edited = true;
			this._poly.fire('edit');
			this._poly._map.fire(L.Draw.Event.EDITVERTEX, {
				layers: this._markerGroup,
				poly: this._poly,
			});
		},

		_onMarkerDrag: function (e: { target: any }) {
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

			//refresh the bounds when draging
			this._poly._bounds._southWest = L.latLng(Infinity, Infinity);
			this._poly._bounds._northEast = L.latLng(-Infinity, -Infinity);
			var latlngs = this._poly.getLatLngs();
			this._poly._convertLatLngs(latlngs, true);
			this._poly.redraw();
			this._poly.fire('editdrag');
		},

		_onMarkerClick: function (e: { target: any }) {
			var minPoints = L.Polygon && this._poly instanceof L.Polygon ? 4 : 3,
				marker = e.target;

			if (this._defaultShape().length < minPoints) {
				return;
			}

			// remove the marker
			this._removeMarker(marker);

			// update prev/next links of adjacent markers
			this._updatePrevNext(marker._prev, marker._next);

			// create a ghost marker in place of the removed one
			if (marker._prev && marker._next) {
				// this._createMiddleMarker(marker._prev, marker._next)
			} else if (!marker._prev) {
				marker._next._middleLeft = null;
			} else if (!marker._next) {
				marker._prev._middleRight = null;
			}

			this._fireEdit();
		},
		/**
		 * 设置contextMenu disabled
		 */
		_contextMenuDisabled(marker: {
			_next: any;
			_prev: { _prev: any };
			options: { contextmenuItems: { disabled: any }[] };
		}) {
			var minPoints = L.Polygon && this._poly instanceof L.Polygon ? 4 : 3;
			const delDisabled = this._defaultShape().length < minPoints ? true : false;
			const isFirstOrScendOrLast =
				!marker._next || !marker._prev || (marker._prev && !marker._prev._prev);
			marker.options.contextmenuItems[0].disabled = delDisabled;
			marker.options.contextmenuItems[2].disabled = delDisabled || isFirstOrScendOrLast;
			L.Util.setOptions(this, marker.options);
		},
		/**
		 * onContextMenu
		 */
		_onContextMenu: function (e: { target: any }) {
			// this._map.contextmenu.hide()
			var marker = e.target;
			//设置右键菜单项的disabled属性
			this._contextMenuDisabled(marker);
		},
		/**
		 * splitPolyline
		 */
		_splitPolyline: function (e: { _index: any }) {
			const pos = e._index;
			const lines = this._defaultShape();
			const item1 = lines.slice(0, pos);
			const item2 = lines.slice(pos, lines.length);
			this._poly._map.fire(L.Draw.Event.SPLIT, {
				poly: this._poly,
				items: [item1, item2],
				layers: this._markerGroup,
			});
			// const removeList = []
			// this._markers.forEach((marker) => {
			//   removeList.push(marker)
			// })
			// removeList.forEach((marker) => this._removeMarker(marker))
			// const newPoly = new L.Polyline(item1, this._poly.defaultOptions)
			// const newPoly2 = new L.Polyline(item2, this._poly.defaultOptions)
			// this._splittedGroup.addLayer(newPoly)
			// this._splittedGroup.addLayer(newPoly2)
			// new L.Split.Poly(newPoly).enable()
			// new L.Split.Poly(newPoly2).enable()
			// this._splittedGroup.clearLayers()
		},

		_onTouchMove: function (e: { originalEvent: { touches: any[] }; target: any }) {
			var layerPoint = this._map.mouseEventToLayerPoint(e.originalEvent.touches[0]),
				latlng = this._map.layerPointToLatLng(layerPoint),
				marker = e.target;

			L.extend(marker._origLatLng, latlng);

			this._poly.redraw();
			this.updateMarkers();
		},

		_updateIndexes: function (index: number, delta: any) {
			this._markerGroup.eachLayer(function (marker: { _index: number }) {
				if (marker._index > index) {
					marker._index += delta;
				}
			});
		},

		_updatePrevNext: function (marker1: { _next: any }, marker2: { _prev: any }) {
			if (marker1) {
				marker1._next = marker2;
			}
			if (marker2) {
				marker2._prev = marker1;
			}
		},
	});
};

export default registerSplitPoly;
