import registerSplit from './handler/SplitToolbar.Split';
import registerSplitPoly from './handler/Split.Poly';

const SplitToolbar = (L: any) => {
	L.Draw.Event.SPLIT = 'draw:split';
	L.Draw.Event.PolylineMarkerRemove = 'draw:polyline_marker_remove';

	L.SplitToolbar = L.EditToolbar.extend({
		statics: {
			TYPE: 'split',
		},

		getModeHandlers: function (map: any) {
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

		getActions: function () {
			var actions = [
				// {
				// 	title: L.drawLocal.split.toolbar.actions.save.title,
				// 	text: L.drawLocal.split.toolbar.actions.save.text,
				// 	callback: this._save,
				// 	context: this,
				// },
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

	registerSplit(L);
	registerSplitPoly(L);

	// NOTE: polyline 扩展splitting
	L.Polyline.addInitHook(function (this: any) {
		if (this.splitting) {
			return;
		}

		if (L.Edit.Poly) {
			this.splitting = new L.Split.Poly(this);

			if (this.options.editable) {
				this.splitting.enable();
			}
		}

		this.on('add', function (this: any) {
			if (this.splitting && this.splitting.enabled()) {
				this.splitting.addHooks();
			}
		});

		this.on('remove', function (this: any) {
			if (this.splitting && this.splitting.enabled()) {
				this.splitting.removeHooks();
			}
		});
	});
};

export default SplitToolbar;
