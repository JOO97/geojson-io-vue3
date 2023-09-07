import { hint } from '@mapbox/geojsonhint';
import rewind from 'geojson-rewind';

/**
 * 处理错误行数
 * @param line
 * @param message
 * @returns number
 */
function handleLine(line: number, message: string): number {
	return message.indexOf('line') !== -1 ? parseInt(message.split(':')[0].split('line ')[1]) : line;
}

/**
 * 创建错误标记
 * @param msg
 */
function makeMarker(msg: string) {
	var marker = document.createElement('abbr');
	marker.title = msg;
	marker.className = 'editor-error-marker';
	marker.style.color = '#dd6688';
	marker.innerHTML = `●`;
	return marker;
}

/**
 * 处理编辑器错误(单个)
 * @param msg
 * @param editor
 */
function handleError(msg: string, editor: any) {
	const match = msg.match(/line (\d+)/);
	if (match && match[1]) {
		editor.doc.clearGutter('error');
		editor.setGutterMarker(parseInt(match[1], 10) - 1, 'error', makeMarker(msg));
	}
}

/**
 * 处理编辑器错误
 * @param errors
 * @param editor
 */
function handleErrors(errors: any[], editor: any) {
	editor.doc.clearGutter('error');
	errors.forEach(function (e) {
		editor.setGutterMarker(e.line, 'error', makeMarker(e.message));
	});
}

/**
 * 校验编辑器中的数据
 * @param editor
 * @param callback
 */
const validateEditorValue = (editor: any, callback: any) => {
	var err = hint(editor.getValue());
	editor.doc.clearGutter('error');
	if (err instanceof Error) {
		handleError(err.message, editor);
		const { message, line } = err as typeof err & { line: number };
		return callback({
			class: 'icon-circle-blank',
			title: 'invalid JSON',
			message,
			line: handleLine(line, message),
		});
	} else if (err.length) {
		handleErrors(err, editor);
		const { message, line } = err[0];
		return callback({
			class: 'icon-circle-blank',
			title: 'invalid GeoJSON',
			message,
			line: handleLine(line, message),
		});
	} else {
		var gj = JSON.parse(editor.getValue());

		try {
			return callback(null, gj);
		} catch (e) {
			//TODO editor错误类型3 未复现
			return callback({
				class: 'icon-circle-blank',
				title: 'invalid GeoJSON',
				message: 'invalid GeoJSON',
			});
		}
	}
};

/**
 * 校验geojson
 * @param source
 */
export const geojsonValidate = (source: string) => {
	const r = {
		messages: [],
		valid: true,
	};
	const err = hint(source);
	if (err && err.length) {
		r.valid = false;
		r.messages = err.map((e: { message: string; line: number }) => e.message);
	}
	return r;
};

export const geojsonRewind = rewind;
export const geojsonHint = hint;

export default validateEditorValue;
