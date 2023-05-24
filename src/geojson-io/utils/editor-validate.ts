import geojsonhint from 'geojsonhint';

/**
 * 校验编辑器中的数据
 */
export default (editor: any, callback: any) => {
	var err = geojsonhint.hint(editor.getValue());
	editor.doc.clearGutter('error');
	if (err instanceof Error) {
		handleError(err.message);
		const { message, line } = err as typeof err & { line: number };
		return callback({
			class: 'icon-circle-blank',
			title: 'invalid JSON',
			message,
			line: handleLine(line, message),
		});
	} else if (err.length) {
		handleErrors(err);
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
			console.log(3, gj);
			return callback({
				class: 'icon-circle-blank',
				title: 'invalid GeoJSON',
				message: 'invalid GeoJSON',
			});
		}
	}
	function handleError(msg: string) {
		var match = msg.match(/line (\d+)/);
		if (match && match[1]) {
			editor.doc.clearGutter('error');
			editor.setGutterMarker(parseInt(match[1], 10) - 1, 'error', makeMarker(msg));
		}
	}

	function handleErrors(errors: any[]) {
		editor.doc.clearGutter('error');
		errors.forEach(function (e) {
			editor.setGutterMarker(e.line, 'error', makeMarker(e.message));
		});
	}
	//创建错误标记
	function makeMarker(msg: string) {
		var marker = document.createElement('abbr');
		marker.title = msg;
		marker.className = 'editor-error-marker';
		marker.style.color = '#dd6688';
		marker.innerHTML = `●`;
		return marker;
	}

	/**
	 * 处理错误行数
	 */
	function handleLine(line: number, message: string): number {
		return message.indexOf('line') !== -1
			? parseInt(message.split(':')[0].split('line ')[1])
			: line;
	}
};
