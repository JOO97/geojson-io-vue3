import L from 'leaflet';
import './LeafletDraw'; //NOTE: 源码有bug, 改为本地引入
import 'leaflet-hash';
import 'leaflet-modal/dist/L.Modal.min.js';
import 'leaflet-distortableimage/dist/vendor';
import 'leaflet-distortableimage';
import 'leaflet-contextmenu/dist/leaflet.contextmenu.min.js';

// leaflet style
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-modal/dist/leaflet.modal.min.css';
import 'leaflet-distortableimage/dist/leaflet.distortableimage.css';
import 'leaflet-contextmenu/dist/leaflet.contextmenu.min.css';

//marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png'

import drawLocal from '../local';
import controlRegister from './controls';

const RADIO = 25 / 41;

export const useLeaflet = (props: any) => {
	const newL = L as typeof L & any;

	const SIZE = props.options.markerSize;

	newL.Toolbar.include({
		_createButton: function (options: any) {
			const link = newL.DomUtil.create('a', options.className || '', options.container);
			// Screen reader tag
			const sr = newL.DomUtil.create('span', 'sr-only', options.container);
			link.href = 'javascript:void(0);';
			link.appendChild(sr);

			if (options.title) {
				link.title = options.title;
				sr.innerHTML = options.title;
			}

			if (options.text) {
				link.innerHTML = options.text;
				sr.innerHTML = options.text;
			}

			/* iOS does not use click events */
			const buttonEvent = this._detectIOS() ? 'touchstart' : 'click';

			newL.DomEvent.on(link, 'click', newL.DomEvent.stopPropagation)
				.on(link, 'mousedown', newL.DomEvent.stopPropagation)
				.on(link, 'dblclick', newL.DomEvent.stopPropagation)
				.on(link, 'touchstart', newL.DomEvent.stopPropagation)
				// .on(link, 'click', newL.DomEvent.preventDefault)
				.on(link, buttonEvent, options.callback, options.context);

			return link;
		},
	});
	//注册自定义控件
	controlRegister(L);

	newL.CONSTANT = {
		precision: 6,
	};

	//解决默认图标加载失败的问题
	const DefaultIcon = newL.icon({
		iconUrl: icon,
		// shadowUrl: iconShadow,
		// iconRetinaUrl: icon,
		iconSize: [SIZE * RADIO, SIZE],
		iconAnchor: [(SIZE * 12) / SIZE, SIZE],
		popupAnchor: [1, -34],
		tooltipAnchor: [16, -28],
		// shadowSize: [SIZE, SIZE]
	});
	newL.Marker.prototype.options.icon = DefaultIcon;
	newL.Draw.Marker.prototype.options.icon = DefaultIcon;

	//替换英文说明信息
	newL.drawLocal = drawLocal;

	// 开启拆分线段Control
	newL.Control.Draw.mergeOptions({
		split: true,
	});
	newL.Control.Draw.addInitHook(function (this: any) {
		if (newL.SplitToolbar && this.options.split) {
			const toolbar = new newL.SplitToolbar(this.options.split);
			this._toolbars[newL.SplitToolbar.TYPE] = toolbar;
			this._toolbars[newL.SplitToolbar.TYPE].on('enable', this._toolbarEnabled, this);
		}
	});

	newL.DrawToolbar.include({
		options: {
			polyline: {},
			polygon: {},
			rectangle: {},
			marker: {},
			image: {}, //新增
		},
		// @method getModeHandlers(): object
		getModeHandlers: function (map: any) {
			return [
				{
					enabled: this.options.polyline,
					handler: new newL.Draw.Polyline(map, this.options.polyline),
					title: newL.drawLocal.draw.toolbar.buttons.polyline,
				},
				{
					enabled: this.options.polygon,
					handler: new newL.Draw.Polygon(map, this.options.polygon),
					title: newL.drawLocal.draw.toolbar.buttons.polygon,
				},
				{
					enabled: this.options.rectangle,
					handler: new newL.Draw.Rectangle(map, this.options.rectangle),
					title: newL.drawLocal.draw.toolbar.buttons.rectangle,
				},
				{
					enabled: this.options.marker,
					handler: new newL.Draw.Marker(map, this.options.marker),
					title: newL.drawLocal.draw.toolbar.buttons.marker,
				},
				{
					enabled: this.options.image, //新增
					handler: new newL.Draw.Image(map, this.options.image),
					title: newL.drawLocal.draw.toolbar.buttons.image,
				},
			];
		},
	});

	//触发图片控件
	newL.Draw.Image.include({
		enable: function () {
			let drawsvg = this;
			// 导入图片的弹窗
			this._map.fire('modal', {
				title: '导入图片',
				content: [
					'选择需要导入的图片<br>',
					'<table>',
					'  <tr>',
					'    <td>文件:</td><td><input type="file" id="file-input" /></td>',
					'  <tr></tr>',
					'  </tr>',
					'</table><br>',
				].join(''),
				template: [
					'<div class="modal-header"><h2>{title}</h2></div>',
					'<hr>',
					'<div class="modal-body">{content}</div>',
					'<div class="modal-footer">',
					'  <button class="topcoat-button--large {OK_CLS}">{okText}</button>',
					'  <button class="topcoat-button--large {CANCEL_CLS}">{cancelText}</button>',
					'</div>',
				].join(''),

				okText: '确定',
				cancelText: '取消',
				OK_CLS: 'modal-ok',
				CANCEL_CLS: 'modal-cancel',
				width: 300,
				onShow: function (evt: any) {
					let modal = evt.modal;
					let imported: any = null;

					newL.DomEvent.on(
						modal._container.querySelector('#file-input'),
						'change',
						function (e: MouseEvent) {
							let file = (e.target as typeof e.target & { files: Blob[] }).files[0] as Blob;
							if (!file) {
								return;
							}
							let reader = new FileReader();
							reader.onload = function (e) {
								imported = e.target?.result;
								//创建图片对象，获取图片尺寸信息
								const imgEl = new Image();
								imgEl.src = imported;
								imgEl.onload = () => {
									drawsvg._scale = 100 / imgEl.width;
									drawsvg._ratio = imgEl.width / imgEl.height;
								};
							};
							reader.readAsDataURL(file);
						}
					)
						.on(modal._container.querySelector('.modal-ok'), 'click', () => {
							if (imported != null) {
								drawsvg._svgViewBox = 'calculate';
								drawsvg._svgFitBounds = true;
								drawsvg._template = imported;
								newL.Draw.SimpleShape.prototype.enable.call(drawsvg);
							}
							modal.hide();
						})
						.on(modal._container.querySelector('.modal-cancel'), 'click', () => {
							modal.hide();
						});
				},
			});
		},
	});

	return newL;
};
