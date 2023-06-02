/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.17.1.
 * Original file: /npm/codemirror@6.0.1/dist/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import {
	lineNumbers as o,
	highlightActiveLineGutter as r,
	highlightSpecialChars as m,
	drawSelection as e,
	dropCursor as i,
	rectangularSelection as p,
	crosshairCursor as t,
	highlightActiveLine as c,
	keymap as l,
} from '/npm/@codemirror/view@6.12.0/+esm';
export { EditorView } from '/npm/@codemirror/view@6.12.0/+esm';
import { EditorState as f } from '/npm/@codemirror/state@6.2.1/+esm';
import {
	foldGutter as n,
	indentOnInput as s,
	syntaxHighlighting as a,
	defaultHighlightStyle as d,
	bracketMatching as u,
	foldKeymap as w,
} from '/npm/@codemirror/language@6.7.0/+esm';
import {
	history as x,
	defaultKeymap as b,
	historyKeymap as g,
} from '/npm/@codemirror/commands@6.2.4/+esm';
import {
	highlightSelectionMatches as k,
	searchKeymap as v,
} from '/npm/@codemirror/search@6.4.0/+esm';
import {
	closeBrackets as h,
	autocompletion as E,
	closeBracketsKeymap as M,
	completionKeymap as S,
} from '/npm/@codemirror/autocomplete@6.7.1/+esm';
import { lintKeymap as V } from '/npm/@codemirror/lint@6.2.1/+esm';
const j = (() => [
		o(),
		r(),
		m(),
		x(),
		n(),
		e(),
		i(),
		f.allowMultipleSelections.of(!0),
		s(),
		a(d, { fallback: !0 }),
		u(),
		h(),
		E(),
		p(),
		t(),
		c(),
		k(),
		l.of([...M, ...b, ...v, ...g, ...w, ...S, ...V]),
	])(),
	q = (() => [m(), x(), e(), a(d, { fallback: !0 }), l.of([...b, ...g])])();
export { j as basicSetup, q as minimalSetup };
export default null;
//# sourceMappingURL=/sm/849588e169756f76a58560f9c999fe7d46b40ab3d71000d17003c442941a860b.map
