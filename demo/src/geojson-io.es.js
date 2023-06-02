import { defineComponent as mn, ref as te, computed as xi, watch as ga, onMounted as va, nextTick as ya, onBeforeUnmount as ba, openBlock as mr, createElementBlock as La, getCurrentInstance as xa, createBlock as wa, unref as We, normalizeStyle as So, withCtx as Io, createVNode as Ao } from "vue";
import { ElMessage as Ta, ElRow as Ea, ElCol as Ma } from "element-plus";
var re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ka(l) {
  var i = l.default;
  if (typeof i == "function") {
    var r = function u() {
      if (this instanceof u) {
        var o = [null];
        o.push.apply(o, arguments);
        var a = Function.bind.apply(i, o);
        return new a();
      }
      return i.apply(this, arguments);
    };
    r.prototype = i.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(l).forEach(function(u) {
    var o = Object.getOwnPropertyDescriptor(l, u);
    Object.defineProperty(r, u, o.get ? o : {
      enumerable: !0,
      get: function() {
        return l[u];
      }
    });
  }), r;
}
var Pa = { exports: {} };
(function(l, i) {
  (function(r, u) {
    u();
  })(re, function() {
    function r(v, y) {
      return typeof y > "u" ? y = { autoBom: !1 } : typeof y != "object" && (console.warn("Deprecated: Expected third argument to be a object"), y = { autoBom: !y }), y.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(v.type) ? new Blob(["\uFEFF", v], { type: v.type }) : v;
    }
    function u(v, y, x) {
      var T = new XMLHttpRequest();
      T.open("GET", v), T.responseType = "blob", T.onload = function() {
        p(T.response, y, x);
      }, T.onerror = function() {
        console.error("could not download file");
      }, T.send();
    }
    function o(v) {
      var y = new XMLHttpRequest();
      y.open("HEAD", v, !1);
      try {
        y.send();
      } catch {
      }
      return 200 <= y.status && 299 >= y.status;
    }
    function a(v) {
      try {
        v.dispatchEvent(new MouseEvent("click"));
      } catch {
        var y = document.createEvent("MouseEvents");
        y.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), v.dispatchEvent(y);
      }
    }
    var c = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof re == "object" && re.global === re ? re : void 0, f = c.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), p = c.saveAs || (typeof window != "object" || window !== c ? function() {
    } : "download" in HTMLAnchorElement.prototype && !f ? function(v, y, x) {
      var T = c.URL || c.webkitURL, W = document.createElement("a");
      y = y || v.name || "download", W.download = y, W.rel = "noopener", typeof v == "string" ? (W.href = v, W.origin === location.origin ? a(W) : o(W.href) ? u(v, y, x) : a(W, W.target = "_blank")) : (W.href = T.createObjectURL(v), setTimeout(function() {
        T.revokeObjectURL(W.href);
      }, 4e4), setTimeout(function() {
        a(W);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(v, y, x) {
      if (y = y || v.name || "download", typeof v != "string")
        navigator.msSaveOrOpenBlob(r(v, x), y);
      else if (o(v))
        u(v, y, x);
      else {
        var T = document.createElement("a");
        T.href = v, T.target = "_blank", setTimeout(function() {
          a(T);
        });
      }
    } : function(v, y, x, T) {
      if (T = T || open("", "_blank"), T && (T.document.title = T.document.body.innerText = "downloading..."), typeof v == "string")
        return u(v, y, x);
      var W = v.type === "application/octet-stream", nt = /constructor/i.test(c.HTMLElement) || c.safari, ot = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((ot || W && nt || f) && typeof FileReader < "u") {
        var Z = new FileReader();
        Z.onloadend = function() {
          var z = Z.result;
          z = ot ? z : z.replace(/^data:[^;]*;/, "data:attachment/file;"), T ? T.location.href = z : location = z, T = null;
        }, Z.readAsDataURL(v);
      } else {
        var H = c.URL || c.webkitURL, C = H.createObjectURL(v);
        T ? T.location = C : location.href = C, T = null, setTimeout(function() {
          H.revokeObjectURL(C);
        }, 4e4);
      }
    });
    c.saveAs = p.saveAs = p, l.exports = p;
  });
})(Pa);
function Da(l) {
  throw new Error('Could not dynamically require "' + l + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var sn = { exports: {} };
const Ca = {}, Sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ca
}, Symbol.toStringTag, { value: "Module" })), Oo = /* @__PURE__ */ ka(Sa);
(function(l, i) {
  var r = function() {
    var u = function(H, C, z, V) {
      for (z = z || {}, V = H.length; V--; z[H[V]] = C)
        ;
      return z;
    }, o = [1, 12], a = [1, 13], c = [1, 9], f = [1, 10], p = [1, 11], v = [1, 14], y = [1, 15], x = [14, 18, 22, 24], T = [18, 22], W = [22, 24], nt = {
      trace: function() {
      },
      yy: {},
      symbols_: { error: 2, JSONString: 3, STRING: 4, JSONNumber: 5, NUMBER: 6, JSONNullLiteral: 7, NULL: 8, JSONBooleanLiteral: 9, TRUE: 10, FALSE: 11, JSONText: 12, JSONValue: 13, EOF: 14, JSONObject: 15, JSONArray: 16, "{": 17, "}": 18, JSONMemberList: 19, JSONMember: 20, ":": 21, ",": 22, "[": 23, "]": 24, JSONElementList: 25, $accept: 0, $end: 1 },
      terminals_: { 2: "error", 4: "STRING", 6: "NUMBER", 8: "NULL", 10: "TRUE", 11: "FALSE", 14: "EOF", 17: "{", 18: "}", 21: ":", 22: ",", 23: "[", 24: "]" },
      productions_: [0, [3, 1], [5, 1], [7, 1], [9, 1], [9, 1], [12, 2], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [15, 2], [15, 3], [20, 3], [19, 1], [19, 3], [16, 2], [16, 3], [25, 1], [25, 3]],
      performAction: function(C, z, V, K, G, X, dt) {
        var w = X.length - 1;
        switch (G) {
          case 1:
            this.$ = C.replace(/\\(\\|")/g, "$1").replace(/\\n/g, `
`).replace(/\\r/g, "\r").replace(/\\t/g, "	").replace(/\\v/g, "\v").replace(/\\f/g, "\f").replace(/\\b/g, "\b");
            break;
          case 2:
            this.$ = Number(C);
            break;
          case 3:
            this.$ = null;
            break;
          case 4:
            this.$ = !0;
            break;
          case 5:
            this.$ = !1;
            break;
          case 6:
            return this.$ = X[w - 1];
          case 13:
            this.$ = {}, Object.defineProperty(this.$, "__line__", {
              value: this._$.first_line,
              enumerable: !1
            });
            break;
          case 14:
          case 19:
            this.$ = X[w - 1], Object.defineProperty(this.$, "__line__", {
              value: this._$.first_line,
              enumerable: !1
            });
            break;
          case 15:
            this.$ = [X[w - 2], X[w]];
            break;
          case 16:
            this.$ = {}, this.$[X[w][0]] = X[w][1];
            break;
          case 17:
            this.$ = X[w - 2], X[w - 2][X[w][0]] !== void 0 && (this.$.__duplicateProperties__ || Object.defineProperty(this.$, "__duplicateProperties__", {
              value: [],
              enumerable: !1
            }), this.$.__duplicateProperties__.push(X[w][0])), X[w - 2][X[w][0]] = X[w][1];
            break;
          case 18:
            this.$ = [], Object.defineProperty(this.$, "__line__", {
              value: this._$.first_line,
              enumerable: !1
            });
            break;
          case 20:
            this.$ = [X[w]];
            break;
          case 21:
            this.$ = X[w - 2], X[w - 2].push(X[w]);
            break;
        }
      },
      table: [{ 3: 5, 4: o, 5: 6, 6: a, 7: 3, 8: c, 9: 4, 10: f, 11: p, 12: 1, 13: 2, 15: 7, 16: 8, 17: v, 23: y }, { 1: [3] }, { 14: [1, 16] }, u(x, [2, 7]), u(x, [2, 8]), u(x, [2, 9]), u(x, [2, 10]), u(x, [2, 11]), u(x, [2, 12]), u(x, [2, 3]), u(x, [2, 4]), u(x, [2, 5]), u([14, 18, 21, 22, 24], [2, 1]), u(x, [2, 2]), { 3: 20, 4: o, 18: [1, 17], 19: 18, 20: 19 }, { 3: 5, 4: o, 5: 6, 6: a, 7: 3, 8: c, 9: 4, 10: f, 11: p, 13: 23, 15: 7, 16: 8, 17: v, 23: y, 24: [1, 21], 25: 22 }, { 1: [2, 6] }, u(x, [2, 13]), { 18: [1, 24], 22: [1, 25] }, u(T, [2, 16]), { 21: [1, 26] }, u(x, [2, 18]), { 22: [1, 28], 24: [1, 27] }, u(W, [2, 20]), u(x, [2, 14]), { 3: 20, 4: o, 20: 29 }, { 3: 5, 4: o, 5: 6, 6: a, 7: 3, 8: c, 9: 4, 10: f, 11: p, 13: 30, 15: 7, 16: 8, 17: v, 23: y }, u(x, [2, 19]), { 3: 5, 4: o, 5: 6, 6: a, 7: 3, 8: c, 9: 4, 10: f, 11: p, 13: 31, 15: 7, 16: 8, 17: v, 23: y }, u(T, [2, 17]), u(T, [2, 15]), u(W, [2, 21])],
      defaultActions: { 16: [2, 6] },
      parseError: function(C, z) {
        if (z.recoverable)
          this.trace(C);
        else {
          let V = function(K, G) {
            this.message = K, this.hash = G;
          };
          throw V.prototype = Error, new V(C, z);
        }
      },
      parse: function(C) {
        var z = this, V = [0], K = [null], G = [], X = this.table, dt = "", w = 0, B = 0, tt = 2, R = 1, j = G.slice.call(arguments, 1), F = Object.create(this.lexer), Y = { yy: {} };
        for (var J in this.yy)
          Object.prototype.hasOwnProperty.call(this.yy, J) && (Y.yy[J] = this.yy[J]);
        F.setInput(C, Y.yy), Y.yy.lexer = F, Y.yy.parser = this, typeof F.yylloc > "u" && (F.yylloc = {});
        var $ = F.yylloc;
        G.push($);
        var E = F.options && F.options.ranges;
        typeof Y.yy.parseError == "function" ? this.parseError = Y.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
        for (var I = function() {
          var xt;
          return xt = F.lex() || R, typeof xt != "number" && (xt = z.symbols_[xt] || xt), xt;
        }, k, O, A, Q, et = {}, st, g, yt, Lt; ; ) {
          if (O = V[V.length - 1], this.defaultActions[O] ? A = this.defaultActions[O] : ((k === null || typeof k > "u") && (k = I()), A = X[O] && X[O][k]), typeof A > "u" || !A.length || !A[0]) {
            var mt = "";
            Lt = [];
            for (st in X[O])
              this.terminals_[st] && st > tt && Lt.push("'" + this.terminals_[st] + "'");
            F.showPosition ? mt = "Parse error on line " + (w + 1) + `:
` + F.showPosition() + `
Expecting ` + Lt.join(", ") + ", got '" + (this.terminals_[k] || k) + "'" : mt = "Parse error on line " + (w + 1) + ": Unexpected " + (k == R ? "end of input" : "'" + (this.terminals_[k] || k) + "'"), this.parseError(mt, {
              text: F.match,
              token: this.terminals_[k] || k,
              line: F.yylineno,
              loc: $,
              expected: Lt
            });
          }
          if (A[0] instanceof Array && A.length > 1)
            throw new Error("Parse Error: multiple actions possible at state: " + O + ", token: " + k);
          switch (A[0]) {
            case 1:
              V.push(k), K.push(F.yytext), G.push(F.yylloc), V.push(A[1]), k = null, B = F.yyleng, dt = F.yytext, w = F.yylineno, $ = F.yylloc;
              break;
            case 2:
              if (g = this.productions_[A[1]][1], et.$ = K[K.length - g], et._$ = {
                first_line: G[G.length - (g || 1)].first_line,
                last_line: G[G.length - 1].last_line,
                first_column: G[G.length - (g || 1)].first_column,
                last_column: G[G.length - 1].last_column
              }, E && (et._$.range = [
                G[G.length - (g || 1)].range[0],
                G[G.length - 1].range[1]
              ]), Q = this.performAction.apply(et, [
                dt,
                B,
                w,
                Y.yy,
                A[1],
                K,
                G
              ].concat(j)), typeof Q < "u")
                return Q;
              g && (V = V.slice(0, -1 * g * 2), K = K.slice(0, -1 * g), G = G.slice(0, -1 * g)), V.push(this.productions_[A[1]][0]), K.push(et.$), G.push(et._$), yt = X[V[V.length - 2]][V[V.length - 1]], V.push(yt);
              break;
            case 3:
              return !0;
          }
        }
        return !0;
      }
    }, ot = function() {
      var H = {
        EOF: 1,
        parseError: function(z, V) {
          if (this.yy.parser)
            this.yy.parser.parseError(z, V);
          else
            throw new Error(z);
        },
        // resets the lexer, sets new input
        setInput: function(C, z) {
          return this.yy = z || this.yy || {}, this._input = C, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
        },
        // consumes and returns one char from the input
        input: function() {
          var C = this._input[0];
          this.yytext += C, this.yyleng++, this.offset++, this.match += C, this.matched += C;
          var z = C.match(/(?:\r\n?|\n).*/g);
          return z ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), C;
        },
        // unshifts one char (or a string) into the input
        unput: function(C) {
          var z = C.length, V = C.split(/(?:\r\n?|\n)/g);
          this._input = C + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - z), this.offset -= z;
          var K = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), V.length - 1 && (this.yylineno -= V.length - 1);
          var G = this.yylloc.range;
          return this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: V ? (V.length === K.length ? this.yylloc.first_column : 0) + K[K.length - V.length].length - V[0].length : this.yylloc.first_column - z
          }, this.options.ranges && (this.yylloc.range = [G[0], G[0] + this.yyleng - z]), this.yyleng = this.yytext.length, this;
        },
        // When called from action, caches matched text and appends it on next action
        more: function() {
          return this._more = !0, this;
        },
        // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
        reject: function() {
          if (this.options.backtrack_lexer)
            this._backtrack = !0;
          else
            return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
              text: "",
              token: null,
              line: this.yylineno
            });
          return this;
        },
        // retain first n characters of the match
        less: function(C) {
          this.unput(this.match.slice(C));
        },
        // displays already matched input, i.e. for error messages
        pastInput: function() {
          var C = this.matched.substr(0, this.matched.length - this.match.length);
          return (C.length > 20 ? "..." : "") + C.substr(-20).replace(/\n/g, "");
        },
        // displays upcoming input, i.e. for error messages
        upcomingInput: function() {
          var C = this.match;
          return C.length < 20 && (C += this._input.substr(0, 20 - C.length)), (C.substr(0, 20) + (C.length > 20 ? "..." : "")).replace(/\n/g, "");
        },
        // displays the character position where the lexing error occurred, i.e. for error messages
        showPosition: function() {
          var C = this.pastInput(), z = new Array(C.length + 1).join("-");
          return C + this.upcomingInput() + `
` + z + "^";
        },
        // test the lexed token: return FALSE when not a match, otherwise return token
        test_match: function(C, z) {
          var V, K, G;
          if (this.options.backtrack_lexer && (G = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done
          }, this.options.ranges && (G.yylloc.range = this.yylloc.range.slice(0))), K = C[0].match(/(?:\r\n?|\n).*/g), K && (this.yylineno += K.length), this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: K ? K[K.length - 1].length - K[K.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + C[0].length
          }, this.yytext += C[0], this.match += C[0], this.matches = C, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(C[0].length), this.matched += C[0], V = this.performAction.call(this, this.yy, this, z, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), V)
            return V;
          if (this._backtrack) {
            for (var X in G)
              this[X] = G[X];
            return !1;
          }
          return !1;
        },
        // return next match in input
        next: function() {
          if (this.done)
            return this.EOF;
          this._input || (this.done = !0);
          var C, z, V, K;
          this._more || (this.yytext = "", this.match = "");
          for (var G = this._currentRules(), X = 0; X < G.length; X++)
            if (V = this._input.match(this.rules[G[X]]), V && (!z || V[0].length > z[0].length)) {
              if (z = V, K = X, this.options.backtrack_lexer) {
                if (C = this.test_match(V, G[X]), C !== !1)
                  return C;
                if (this._backtrack) {
                  z = !1;
                  continue;
                } else
                  return !1;
              } else if (!this.options.flex)
                break;
            }
          return z ? (C = this.test_match(z, G[K]), C !== !1 ? C : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        },
        // return next match that has a token
        lex: function() {
          var z = this.next();
          return z || this.lex();
        },
        // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
        begin: function(z) {
          this.conditionStack.push(z);
        },
        // pop the previously active lexer condition state off the condition stack
        popState: function() {
          var z = this.conditionStack.length - 1;
          return z > 0 ? this.conditionStack.pop() : this.conditionStack[0];
        },
        // produce the lexer rule set which is active for the currently active lexer condition state
        _currentRules: function() {
          return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
        },
        // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
        topState: function(z) {
          return z = this.conditionStack.length - 1 - Math.abs(z || 0), z >= 0 ? this.conditionStack[z] : "INITIAL";
        },
        // alias for begin(condition)
        pushState: function(z) {
          this.begin(z);
        },
        // return the number of states currently on the stack
        stateStackSize: function() {
          return this.conditionStack.length;
        },
        options: {},
        performAction: function(z, V, K, G) {
          switch (K) {
            case 0:
              break;
            case 1:
              return 6;
            case 2:
              return V.yytext = V.yytext.substr(1, V.yyleng - 2), 4;
            case 3:
              return 17;
            case 4:
              return 18;
            case 5:
              return 23;
            case 6:
              return 24;
            case 7:
              return 22;
            case 8:
              return 21;
            case 9:
              return 10;
            case 10:
              return 11;
            case 11:
              return 8;
            case 12:
              return 14;
            case 13:
              return "INVALID";
          }
        },
        rules: [/^(?:\s+)/, /^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/, /^(?:"(?:\\[\\"bfnrt\/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/, /^(?:\{)/, /^(?:\})/, /^(?:\[)/, /^(?:\])/, /^(?:,)/, /^(?::)/, /^(?:true\b)/, /^(?:false\b)/, /^(?:null\b)/, /^(?:$)/, /^(?:.)/],
        conditions: { INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], inclusive: !0 } }
      };
      return H;
    }();
    nt.lexer = ot;
    function Z() {
      this.yy = {};
    }
    return Z.prototype = nt, nt.Parser = Z, new Z();
  }();
  typeof Da < "u" && (i.parser = r, i.Parser = r.Parser, i.parse = function() {
    return r.parse.apply(r, arguments);
  }, i.main = function(o) {
    o[1] || (console.log("Usage: " + o[0] + " FILE"), process.exit(1));
    var a = Oo.readFileSync(Oo.normalize(o[1]), "utf8");
    return i.parser.parse(a);
  }, require.main === l && i.main(process.argv.slice(1)));
})(sn, sn.exports);
var gr = {};
function zo(l) {
  var i = 0;
  if (l.length > 2)
    for (var r, u, o = 0; o < l.length - 1; o++)
      r = l[o], u = l[o + 1], i += (u[0] - r[0]) * (u[1] + r[1]);
  return i >= 0;
}
function Ro(l) {
  if (l && l.length > 0) {
    if (zo(l[0]))
      return !1;
    var i = l.slice(1, l.length);
    if (!i.every(zo))
      return !1;
  }
  return !0;
}
function Ia(l) {
  if (l.type === "Polygon")
    return Ro(l.coordinates);
  if (l.type === "MultiPolygon")
    return l.coordinates.every(Ro);
}
var Aa = function(i, r) {
  Ia(i) || r.push({
    message: "Polygons and MultiPolygons should follow the right-hand rule",
    level: "message",
    line: i.__line__
  });
}, Bo = Aa;
function Oa(l, i) {
  var r = [], u = 0, o = 10, a = 6;
  function c(w) {
    if ((!i || i.noDuplicateMembers !== !1) && w.__duplicateProperties__ && r.push({
      message: "An object contained duplicate members, making parsing ambigous: " + w.__duplicateProperties__.join(", "),
      line: w.__line__
    }), !p(w, "type", "string"))
      if (X[w.type])
        w && X[w.type](w);
      else {
        var B = dt[w.type.toLowerCase()];
        B !== void 0 ? r.push({
          message: "Expected " + B + " but got " + w.type + " (case sensitive)",
          line: w.__line__
        }) : r.push({
          message: "The type " + w.type + " is unknown",
          line: w.__line__
        });
      }
  }
  function f(w, B) {
    return w.every(function(tt) {
      return tt !== null && typeof tt === B;
    });
  }
  function p(w, B, tt) {
    if (typeof w[B] > "u")
      return r.push({
        message: '"' + B + '" member required',
        line: w.__line__
      });
    if (tt === "array") {
      if (!Array.isArray(w[B]))
        return r.push({
          message: '"' + B + '" member should be an array, but is an ' + typeof w[B] + " instead",
          line: w.__line__
        });
    } else {
      if (tt === "object" && w[B] && w[B].constructor !== Object)
        return r.push({
          message: '"' + B + '" member should be ' + tt + ", but is an " + w[B].constructor.name + " instead",
          line: w.__line__
        });
      if (tt && typeof w[B] !== tt)
        return r.push({
          message: '"' + B + '" member should be ' + tt + ", but is an " + typeof w[B] + " instead",
          line: w.__line__
        });
    }
  }
  function v(w) {
    if (T(w), W(w), w.properties !== void 0 && r.push({
      message: 'FeatureCollection object cannot contain a "properties" member',
      line: w.__line__
    }), w.coordinates !== void 0 && r.push({
      message: 'FeatureCollection object cannot contain a "coordinates" member',
      line: w.__line__
    }), !p(w, "features", "array")) {
      if (!f(w.features, "object"))
        return r.push({
          message: "Every feature must be an object",
          line: w.__line__
        });
      w.features.forEach(G);
    }
  }
  function y(w, B) {
    if (!Array.isArray(w))
      return r.push({
        message: "position should be an array, is a " + typeof w + " instead",
        line: w.__line__ || B
      });
    if (w.length < 2)
      return r.push({
        message: "position must have 2 or more elements",
        line: w.__line__ || B
      });
    if (w.length > 3)
      return r.push({
        message: "position should not have more than 3 elements",
        level: "message",
        line: w.__line__ || B
      });
    if (!f(w, "number"))
      return r.push({
        message: "each element in a position must be a number",
        line: w.__line__ || B
      });
    if (i && i.precisionWarning) {
      if (u === o)
        return u += 1, r.push({
          message: "truncated warnings: we've encountered coordinate precision warning " + o + " times, no more warnings will be reported",
          level: "message",
          line: w.__line__ || B
        });
      u < o && w.forEach(function(tt) {
        var R = 0, j = String(tt).split(".")[1];
        if (j !== void 0 && (R = j.length), R > a)
          return u += 1, r.push({
            message: "precision of coordinates should be reduced",
            level: "message",
            line: w.__line__ || B
          });
      });
    }
  }
  function x(w, B, tt, R) {
    if (R === void 0 && w.__line__ !== void 0 && (R = w.__line__), tt === 0)
      return y(w, R);
    if (tt === 1 && B) {
      if (B === "LinearRing") {
        if (!Array.isArray(w[w.length - 1]))
          return r.push({
            message: "a number was found where a coordinate array should have been found: this needs to be nested more deeply",
            line: R
          }), !0;
        if (w.length < 4 && r.push({
          message: "a LinearRing of coordinates needs to have four or more positions",
          line: R
        }), w.length && (w[w.length - 1].length !== w[0].length || !w[w.length - 1].every(function(F, Y) {
          return w[0][Y] === F;
        })))
          return r.push({
            message: "the first and last positions in a LinearRing of coordinates must be the same",
            line: R
          }), !0;
      } else if (B === "Line" && w.length < 2)
        return r.push({
          message: "a line needs to have two or more coordinates to be valid",
          line: R
        });
    }
    if (!Array.isArray(w))
      r.push({
        message: "a number was found where a coordinate array should have been found: this needs to be nested more deeply",
        line: R
      });
    else {
      var j = w.map(function(F) {
        return x(F, B, tt - 1, F.__line__ || R);
      });
      return j.some(function(F) {
        return F;
      });
    }
  }
  function T(w) {
    if (w.crs) {
      var B = "urn:ogc:def:crs:OGC:1.3:CRS84";
      typeof w.crs == "object" && w.crs.properties && w.crs.properties.name === B ? r.push({
        message: "old-style crs member is not recommended, this object is equivalent to the default and should be removed",
        line: w.__line__
      }) : r.push({
        message: "old-style crs member is not recommended",
        line: w.__line__
      });
    }
  }
  function W(w) {
    if (w.bbox) {
      if (Array.isArray(w.bbox))
        return f(w.bbox, "number") || r.push({
          message: "each element in a bbox member must be a number",
          line: w.bbox.__line__
        }), w.bbox.length === 4 || w.bbox.length === 6 || r.push({
          message: "bbox must contain 4 elements (for 2D) or 6 elements (for 3D)",
          line: w.bbox.__line__
        }), r.length;
      r.push({
        message: "bbox member must be an array of numbers, but is a " + typeof w.bbox,
        line: w.__line__
      });
    }
  }
  function nt(w) {
    w.properties !== void 0 && r.push({
      message: 'geometry object cannot contain a "properties" member',
      line: w.__line__
    }), w.geometry !== void 0 && r.push({
      message: 'geometry object cannot contain a "geometry" member',
      line: w.__line__
    }), w.features !== void 0 && r.push({
      message: 'geometry object cannot contain a "features" member',
      line: w.__line__
    });
  }
  function ot(w) {
    T(w), W(w), nt(w), p(w, "coordinates", "array") || y(w.coordinates);
  }
  function Z(w) {
    T(w), W(w), !p(w, "coordinates", "array") && (x(w.coordinates, "LinearRing", 2) || i && i.ignoreRightHandRule === !0 || Bo(w, r));
  }
  function H(w) {
    T(w), W(w), !p(w, "coordinates", "array") && (x(w.coordinates, "LinearRing", 3) || i && i.ignoreRightHandRule === !0 || Bo(w, r));
  }
  function C(w) {
    T(w), W(w), p(w, "coordinates", "array") || x(w.coordinates, "Line", 1);
  }
  function z(w) {
    T(w), W(w), p(w, "coordinates", "array") || x(w.coordinates, "Line", 2);
  }
  function V(w) {
    T(w), W(w), p(w, "coordinates", "array") || x(w.coordinates, "", 1);
  }
  function K(w) {
    T(w), W(w), p(w, "geometries", "array") || (f(w.geometries, "object") || r.push({
      message: "The geometries array in a GeometryCollection must contain only geometry objects",
      line: w.__line__
    }), w.geometries.length === 1 && r.push({
      message: "GeometryCollection with a single geometry should be avoided in favor of single part or a single object of multi-part type",
      line: w.geometries.__line__
    }), w.geometries.forEach(function(B) {
      B && (B.type === "GeometryCollection" && r.push({
        message: "GeometryCollection should avoid nested geometry collections",
        line: w.geometries.__line__
      }), c(B));
    }));
  }
  function G(w) {
    T(w), W(w), w.id !== void 0 && typeof w.id != "string" && typeof w.id != "number" && r.push({
      message: 'Feature "id" member must have a string or number value',
      line: w.__line__
    }), w.features !== void 0 && r.push({
      message: 'Feature object cannot contain a "features" member',
      line: w.__line__
    }), w.coordinates !== void 0 && r.push({
      message: 'Feature object cannot contain a "coordinates" member',
      line: w.__line__
    }), w.type !== "Feature" && r.push({
      message: "GeoJSON features must have a type=feature member",
      line: w.__line__
    }), p(w, "properties", "object"), p(w, "geometry", "object") || w.geometry && c(w.geometry);
  }
  var X = {
    Point: ot,
    Feature: G,
    MultiPoint: V,
    LineString: C,
    MultiLineString: z,
    FeatureCollection: v,
    GeometryCollection: K,
    Polygon: Z,
    MultiPolygon: H
  }, dt = Object.keys(X).reduce(function(w, B) {
    return w[B.toLowerCase()] = B, w;
  }, {});
  return typeof l != "object" || l === null || l === void 0 ? (r.push({
    message: "The root of a GeoJSON object must be an object.",
    line: 0
  }), r) : (c(l), r.forEach(function(w) {
    ({}).hasOwnProperty.call(w, "line") && w.line === void 0 && delete w.line;
  }), r);
}
gr.hint = Oa;
var za = sn.exports, Ra = gr;
function Ba(l, i) {
  var r, u = [];
  if (typeof l == "object")
    r = l;
  else if (typeof l == "string")
    try {
      r = za.parse(l);
    } catch (c) {
      var o = c.message.match(/line (\d+)/), a = parseInt(o[1], 10);
      return [{
        line: a - 1,
        message: c.message,
        error: c
      }];
    }
  else
    return [{
      message: "Expected string or object as input",
      line: 0
    }];
  return u = u.concat(Ra.hint(r, i)), u;
}
var Ua = Ba;
const Na = (l) => {
  const i = {
    messages: [],
    valid: !0
  }, r = Ua(l);
  return r && r.length && (i.valid = !1, i.messages = r.map((u) => u.message)), i;
};
var Ha = typeof global == "object" && global && global.Object === Object && global;
const vr = Ha;
var Fa = typeof self == "object" && self && self.Object === Object && self, Ga = vr || Fa || Function("return this")();
const Xt = Ga;
var ja = Xt.Symbol;
const Pe = ja;
var yr = Object.prototype, Za = yr.hasOwnProperty, Va = yr.toString, Ye = Pe ? Pe.toStringTag : void 0;
function Wa(l) {
  var i = Za.call(l, Ye), r = l[Ye];
  try {
    l[Ye] = void 0;
    var u = !0;
  } catch {
  }
  var o = Va.call(l);
  return u && (i ? l[Ye] = r : delete l[Ye]), o;
}
var Ya = Object.prototype, Xa = Ya.toString;
function $a(l) {
  return Xa.call(l);
}
var qa = "[object Null]", Ka = "[object Undefined]", Uo = Pe ? Pe.toStringTag : void 0;
function pe(l) {
  return l == null ? l === void 0 ? Ka : qa : Uo && Uo in Object(l) ? Wa(l) : $a(l);
}
function se(l) {
  return l != null && typeof l == "object";
}
var Ja = "[object Symbol]";
function Qa(l) {
  return typeof l == "symbol" || se(l) && pe(l) == Ja;
}
var tl = Array.isArray;
const $e = tl;
var el = /\s/;
function il(l) {
  for (var i = l.length; i-- && el.test(l.charAt(i)); )
    ;
  return i;
}
var nl = /^\s+/;
function ol(l) {
  return l && l.slice(0, il(l) + 1).replace(nl, "");
}
function Nt(l) {
  var i = typeof l;
  return l != null && (i == "object" || i == "function");
}
var No = 0 / 0, rl = /^[-+]0x[0-9a-f]+$/i, sl = /^0b[01]+$/i, al = /^0o[0-7]+$/i, ll = parseInt;
function hl(l) {
  if (typeof l == "number")
    return l;
  if (Qa(l))
    return No;
  if (Nt(l)) {
    var i = typeof l.valueOf == "function" ? l.valueOf() : l;
    l = Nt(i) ? i + "" : i;
  }
  if (typeof l != "string")
    return l === 0 ? l : +l;
  l = ol(l);
  var r = sl.test(l);
  return r || al.test(l) ? ll(l.slice(2), r ? 2 : 8) : rl.test(l) ? No : +l;
}
var Ho = 1 / 0, cl = 17976931348623157e292;
function Fo(l) {
  if (!l)
    return l === 0 ? l : 0;
  if (l = hl(l), l === Ho || l === -Ho) {
    var i = l < 0 ? -1 : 1;
    return i * cl;
  }
  return l === l ? l : 0;
}
function br(l) {
  return l;
}
var ul = "[object AsyncFunction]", dl = "[object Function]", fl = "[object GeneratorFunction]", pl = "[object Proxy]";
function gn(l) {
  if (!Nt(l))
    return !1;
  var i = pe(l);
  return i == dl || i == fl || i == ul || i == pl;
}
var _l = Xt["__core-js_shared__"];
const nn = _l;
var Go = function() {
  var l = /[^.]+$/.exec(nn && nn.keys && nn.keys.IE_PROTO || "");
  return l ? "Symbol(src)_1." + l : "";
}();
function ml(l) {
  return !!Go && Go in l;
}
var gl = Function.prototype, vl = gl.toString;
function _e(l) {
  if (l != null) {
    try {
      return vl.call(l);
    } catch {
    }
    try {
      return l + "";
    } catch {
    }
  }
  return "";
}
var yl = /[\\^$.*+?()[\]{}|]/g, bl = /^\[object .+?Constructor\]$/, Ll = Function.prototype, xl = Object.prototype, wl = Ll.toString, Tl = xl.hasOwnProperty, El = RegExp(
  "^" + wl.call(Tl).replace(yl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ml(l) {
  if (!Nt(l) || ml(l))
    return !1;
  var i = gn(l) ? El : bl;
  return i.test(_e(l));
}
function kl(l, i) {
  return l == null ? void 0 : l[i];
}
function me(l, i) {
  var r = kl(l, i);
  return Ml(r) ? r : void 0;
}
var Pl = me(Xt, "WeakMap");
const an = Pl;
var jo = Object.create, Dl = function() {
  function l() {
  }
  return function(i) {
    if (!Nt(i))
      return {};
    if (jo)
      return jo(i);
    l.prototype = i;
    var r = new l();
    return l.prototype = void 0, r;
  };
}();
const Cl = Dl;
function Lr(l, i, r) {
  switch (r.length) {
    case 0:
      return l.call(i);
    case 1:
      return l.call(i, r[0]);
    case 2:
      return l.call(i, r[0], r[1]);
    case 3:
      return l.call(i, r[0], r[1], r[2]);
  }
  return l.apply(i, r);
}
function xr(l, i) {
  var r = -1, u = l.length;
  for (i || (i = Array(u)); ++r < u; )
    i[r] = l[r];
  return i;
}
var Sl = 800, Il = 16, Al = Date.now;
function Ol(l) {
  var i = 0, r = 0;
  return function() {
    var u = Al(), o = Il - (u - r);
    if (r = u, o > 0) {
      if (++i >= Sl)
        return arguments[0];
    } else
      i = 0;
    return l.apply(void 0, arguments);
  };
}
function zl(l) {
  return function() {
    return l;
  };
}
var Rl = function() {
  try {
    var l = me(Object, "defineProperty");
    return l({}, "", {}), l;
  } catch {
  }
}();
const Li = Rl;
var Bl = Li ? function(l, i) {
  return Li(l, "toString", {
    configurable: !0,
    enumerable: !1,
    value: zl(i),
    writable: !0
  });
} : br;
const Ul = Bl;
var Nl = Ol(Ul);
const Hl = Nl;
function Fl(l, i) {
  for (var r = -1, u = l == null ? 0 : l.length; ++r < u && i(l[r], r, l) !== !1; )
    ;
  return l;
}
var Gl = 9007199254740991, jl = /^(?:0|[1-9]\d*)$/;
function wr(l, i) {
  var r = typeof l;
  return i = i ?? Gl, !!i && (r == "number" || r != "symbol" && jl.test(l)) && l > -1 && l % 1 == 0 && l < i;
}
function vn(l, i, r) {
  i == "__proto__" && Li ? Li(l, i, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : l[i] = r;
}
function wi(l, i) {
  return l === i || l !== l && i !== i;
}
var Zl = Object.prototype, Vl = Zl.hasOwnProperty;
function Tr(l, i, r) {
  var u = l[i];
  (!(Vl.call(l, i) && wi(u, r)) || r === void 0 && !(i in l)) && vn(l, i, r);
}
function Qe(l, i, r, u) {
  var o = !r;
  r || (r = {});
  for (var a = -1, c = i.length; ++a < c; ) {
    var f = i[a], p = u ? u(r[f], l[f], f, r, l) : void 0;
    p === void 0 && (p = l[f]), o ? vn(r, f, p) : Tr(r, f, p);
  }
  return r;
}
var Zo = Math.max;
function Wl(l, i, r) {
  return i = Zo(i === void 0 ? l.length - 1 : i, 0), function() {
    for (var u = arguments, o = -1, a = Zo(u.length - i, 0), c = Array(a); ++o < a; )
      c[o] = u[i + o];
    o = -1;
    for (var f = Array(i + 1); ++o < i; )
      f[o] = u[o];
    return f[i] = r(c), Lr(l, this, f);
  };
}
function Er(l, i) {
  return Hl(Wl(l, i, br), l + "");
}
var Yl = 9007199254740991;
function Mr(l) {
  return typeof l == "number" && l > -1 && l % 1 == 0 && l <= Yl;
}
function Ti(l) {
  return l != null && Mr(l.length) && !gn(l);
}
function kr(l, i, r) {
  if (!Nt(r))
    return !1;
  var u = typeof i;
  return (u == "number" ? Ti(r) && wr(i, r.length) : u == "string" && i in r) ? wi(r[i], l) : !1;
}
function Xl(l) {
  return Er(function(i, r) {
    var u = -1, o = r.length, a = o > 1 ? r[o - 1] : void 0, c = o > 2 ? r[2] : void 0;
    for (a = l.length > 3 && typeof a == "function" ? (o--, a) : void 0, c && kr(r[0], r[1], c) && (a = o < 3 ? void 0 : a, o = 1), i = Object(i); ++u < o; ) {
      var f = r[u];
      f && l(i, f, u, a);
    }
    return i;
  });
}
var $l = Object.prototype;
function yn(l) {
  var i = l && l.constructor, r = typeof i == "function" && i.prototype || $l;
  return l === r;
}
function ql(l, i) {
  for (var r = -1, u = Array(l); ++r < l; )
    u[r] = i(r);
  return u;
}
var Kl = "[object Arguments]";
function Vo(l) {
  return se(l) && pe(l) == Kl;
}
var Pr = Object.prototype, Jl = Pr.hasOwnProperty, Ql = Pr.propertyIsEnumerable, th = Vo(function() {
  return arguments;
}()) ? Vo : function(l) {
  return se(l) && Jl.call(l, "callee") && !Ql.call(l, "callee");
};
const ln = th;
function eh() {
  return !1;
}
var Dr = typeof exports == "object" && exports && !exports.nodeType && exports, Wo = Dr && typeof module == "object" && module && !module.nodeType && module, ih = Wo && Wo.exports === Dr, Yo = ih ? Xt.Buffer : void 0, nh = Yo ? Yo.isBuffer : void 0, oh = nh || eh;
const bn = oh;
var rh = "[object Arguments]", sh = "[object Array]", ah = "[object Boolean]", lh = "[object Date]", hh = "[object Error]", ch = "[object Function]", uh = "[object Map]", dh = "[object Number]", fh = "[object Object]", ph = "[object RegExp]", _h = "[object Set]", mh = "[object String]", gh = "[object WeakMap]", vh = "[object ArrayBuffer]", yh = "[object DataView]", bh = "[object Float32Array]", Lh = "[object Float64Array]", xh = "[object Int8Array]", wh = "[object Int16Array]", Th = "[object Int32Array]", Eh = "[object Uint8Array]", Mh = "[object Uint8ClampedArray]", kh = "[object Uint16Array]", Ph = "[object Uint32Array]", bt = {};
bt[bh] = bt[Lh] = bt[xh] = bt[wh] = bt[Th] = bt[Eh] = bt[Mh] = bt[kh] = bt[Ph] = !0;
bt[rh] = bt[sh] = bt[vh] = bt[ah] = bt[yh] = bt[lh] = bt[hh] = bt[ch] = bt[uh] = bt[dh] = bt[fh] = bt[ph] = bt[_h] = bt[mh] = bt[gh] = !1;
function Dh(l) {
  return se(l) && Mr(l.length) && !!bt[pe(l)];
}
function Ln(l) {
  return function(i) {
    return l(i);
  };
}
var Cr = typeof exports == "object" && exports && !exports.nodeType && exports, Xe = Cr && typeof module == "object" && module && !module.nodeType && module, Ch = Xe && Xe.exports === Cr, on = Ch && vr.process, Sh = function() {
  try {
    var l = Xe && Xe.require && Xe.require("util").types;
    return l || on && on.binding && on.binding("util");
  } catch {
  }
}();
const De = Sh;
var Xo = De && De.isTypedArray, Ih = Xo ? Ln(Xo) : Dh;
const Sr = Ih;
var Ah = Object.prototype, Oh = Ah.hasOwnProperty;
function Ir(l, i) {
  var r = $e(l), u = !r && ln(l), o = !r && !u && bn(l), a = !r && !u && !o && Sr(l), c = r || u || o || a, f = c ? ql(l.length, String) : [], p = f.length;
  for (var v in l)
    (i || Oh.call(l, v)) && !(c && // Safari 9 has enumerable `arguments.length` in strict mode.
    (v == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (v == "offset" || v == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (v == "buffer" || v == "byteLength" || v == "byteOffset") || // Skip index properties.
    wr(v, p))) && f.push(v);
  return f;
}
function Ar(l, i) {
  return function(r) {
    return l(i(r));
  };
}
var zh = Ar(Object.keys, Object);
const Rh = zh;
var Bh = Object.prototype, Uh = Bh.hasOwnProperty;
function Nh(l) {
  if (!yn(l))
    return Rh(l);
  var i = [];
  for (var r in Object(l))
    Uh.call(l, r) && r != "constructor" && i.push(r);
  return i;
}
function xn(l) {
  return Ti(l) ? Ir(l) : Nh(l);
}
function Hh(l) {
  var i = [];
  if (l != null)
    for (var r in Object(l))
      i.push(r);
  return i;
}
var Fh = Object.prototype, Gh = Fh.hasOwnProperty;
function jh(l) {
  if (!Nt(l))
    return Hh(l);
  var i = yn(l), r = [];
  for (var u in l)
    u == "constructor" && (i || !Gh.call(l, u)) || r.push(u);
  return r;
}
function ti(l) {
  return Ti(l) ? Ir(l, !0) : jh(l);
}
var Zh = me(Object, "create");
const qe = Zh;
function Vh() {
  this.__data__ = qe ? qe(null) : {}, this.size = 0;
}
function Wh(l) {
  var i = this.has(l) && delete this.__data__[l];
  return this.size -= i ? 1 : 0, i;
}
var Yh = "__lodash_hash_undefined__", Xh = Object.prototype, $h = Xh.hasOwnProperty;
function qh(l) {
  var i = this.__data__;
  if (qe) {
    var r = i[l];
    return r === Yh ? void 0 : r;
  }
  return $h.call(i, l) ? i[l] : void 0;
}
var Kh = Object.prototype, Jh = Kh.hasOwnProperty;
function Qh(l) {
  var i = this.__data__;
  return qe ? i[l] !== void 0 : Jh.call(i, l);
}
var tc = "__lodash_hash_undefined__";
function ec(l, i) {
  var r = this.__data__;
  return this.size += this.has(l) ? 0 : 1, r[l] = qe && i === void 0 ? tc : i, this;
}
function fe(l) {
  var i = -1, r = l == null ? 0 : l.length;
  for (this.clear(); ++i < r; ) {
    var u = l[i];
    this.set(u[0], u[1]);
  }
}
fe.prototype.clear = Vh;
fe.prototype.delete = Wh;
fe.prototype.get = qh;
fe.prototype.has = Qh;
fe.prototype.set = ec;
function ic() {
  this.__data__ = [], this.size = 0;
}
function Ei(l, i) {
  for (var r = l.length; r--; )
    if (wi(l[r][0], i))
      return r;
  return -1;
}
var nc = Array.prototype, oc = nc.splice;
function rc(l) {
  var i = this.__data__, r = Ei(i, l);
  if (r < 0)
    return !1;
  var u = i.length - 1;
  return r == u ? i.pop() : oc.call(i, r, 1), --this.size, !0;
}
function sc(l) {
  var i = this.__data__, r = Ei(i, l);
  return r < 0 ? void 0 : i[r][1];
}
function ac(l) {
  return Ei(this.__data__, l) > -1;
}
function lc(l, i) {
  var r = this.__data__, u = Ei(r, l);
  return u < 0 ? (++this.size, r.push([l, i])) : r[u][1] = i, this;
}
function ee(l) {
  var i = -1, r = l == null ? 0 : l.length;
  for (this.clear(); ++i < r; ) {
    var u = l[i];
    this.set(u[0], u[1]);
  }
}
ee.prototype.clear = ic;
ee.prototype.delete = rc;
ee.prototype.get = sc;
ee.prototype.has = ac;
ee.prototype.set = lc;
var hc = me(Xt, "Map");
const Ke = hc;
function cc() {
  this.size = 0, this.__data__ = {
    hash: new fe(),
    map: new (Ke || ee)(),
    string: new fe()
  };
}
function uc(l) {
  var i = typeof l;
  return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? l !== "__proto__" : l === null;
}
function Mi(l, i) {
  var r = l.__data__;
  return uc(i) ? r[typeof i == "string" ? "string" : "hash"] : r.map;
}
function dc(l) {
  var i = Mi(this, l).delete(l);
  return this.size -= i ? 1 : 0, i;
}
function fc(l) {
  return Mi(this, l).get(l);
}
function pc(l) {
  return Mi(this, l).has(l);
}
function _c(l, i) {
  var r = Mi(this, l), u = r.size;
  return r.set(l, i), this.size += r.size == u ? 0 : 1, this;
}
function Ce(l) {
  var i = -1, r = l == null ? 0 : l.length;
  for (this.clear(); ++i < r; ) {
    var u = l[i];
    this.set(u[0], u[1]);
  }
}
Ce.prototype.clear = cc;
Ce.prototype.delete = dc;
Ce.prototype.get = fc;
Ce.prototype.has = pc;
Ce.prototype.set = _c;
function Or(l, i) {
  for (var r = -1, u = i.length, o = l.length; ++r < u; )
    l[o + r] = i[r];
  return l;
}
var mc = Ar(Object.getPrototypeOf, Object);
const wn = mc;
var gc = "[object Object]", vc = Function.prototype, yc = Object.prototype, zr = vc.toString, bc = yc.hasOwnProperty, Lc = zr.call(Object);
function xc(l) {
  if (!se(l) || pe(l) != gc)
    return !1;
  var i = wn(l);
  if (i === null)
    return !0;
  var r = bc.call(i, "constructor") && i.constructor;
  return typeof r == "function" && r instanceof r && zr.call(r) == Lc;
}
function wc() {
  this.__data__ = new ee(), this.size = 0;
}
function Tc(l) {
  var i = this.__data__, r = i.delete(l);
  return this.size = i.size, r;
}
function Ec(l) {
  return this.__data__.get(l);
}
function Mc(l) {
  return this.__data__.has(l);
}
var kc = 200;
function Pc(l, i) {
  var r = this.__data__;
  if (r instanceof ee) {
    var u = r.__data__;
    if (!Ke || u.length < kc - 1)
      return u.push([l, i]), this.size = ++r.size, this;
    r = this.__data__ = new Ce(u);
  }
  return r.set(l, i), this.size = r.size, this;
}
function ge(l) {
  var i = this.__data__ = new ee(l);
  this.size = i.size;
}
ge.prototype.clear = wc;
ge.prototype.delete = Tc;
ge.prototype.get = Ec;
ge.prototype.has = Mc;
ge.prototype.set = Pc;
function Dc(l, i) {
  return l && Qe(i, xn(i), l);
}
function Cc(l, i) {
  return l && Qe(i, ti(i), l);
}
var Rr = typeof exports == "object" && exports && !exports.nodeType && exports, $o = Rr && typeof module == "object" && module && !module.nodeType && module, Sc = $o && $o.exports === Rr, qo = Sc ? Xt.Buffer : void 0, Ko = qo ? qo.allocUnsafe : void 0;
function Br(l, i) {
  if (i)
    return l.slice();
  var r = l.length, u = Ko ? Ko(r) : new l.constructor(r);
  return l.copy(u), u;
}
function Ic(l, i) {
  for (var r = -1, u = l == null ? 0 : l.length, o = 0, a = []; ++r < u; ) {
    var c = l[r];
    i(c, r, l) && (a[o++] = c);
  }
  return a;
}
function Ur() {
  return [];
}
var Ac = Object.prototype, Oc = Ac.propertyIsEnumerable, Jo = Object.getOwnPropertySymbols, zc = Jo ? function(l) {
  return l == null ? [] : (l = Object(l), Ic(Jo(l), function(i) {
    return Oc.call(l, i);
  }));
} : Ur;
const Tn = zc;
function Rc(l, i) {
  return Qe(l, Tn(l), i);
}
var Bc = Object.getOwnPropertySymbols, Uc = Bc ? function(l) {
  for (var i = []; l; )
    Or(i, Tn(l)), l = wn(l);
  return i;
} : Ur;
const Nr = Uc;
function Nc(l, i) {
  return Qe(l, Nr(l), i);
}
function Hr(l, i, r) {
  var u = i(l);
  return $e(l) ? u : Or(u, r(l));
}
function Hc(l) {
  return Hr(l, xn, Tn);
}
function Fc(l) {
  return Hr(l, ti, Nr);
}
var Gc = me(Xt, "DataView");
const hn = Gc;
var jc = me(Xt, "Promise");
const cn = jc;
var Zc = me(Xt, "Set");
const un = Zc;
var Qo = "[object Map]", Vc = "[object Object]", tr = "[object Promise]", er = "[object Set]", ir = "[object WeakMap]", nr = "[object DataView]", Wc = _e(hn), Yc = _e(Ke), Xc = _e(cn), $c = _e(un), qc = _e(an), de = pe;
(hn && de(new hn(new ArrayBuffer(1))) != nr || Ke && de(new Ke()) != Qo || cn && de(cn.resolve()) != tr || un && de(new un()) != er || an && de(new an()) != ir) && (de = function(l) {
  var i = pe(l), r = i == Vc ? l.constructor : void 0, u = r ? _e(r) : "";
  if (u)
    switch (u) {
      case Wc:
        return nr;
      case Yc:
        return Qo;
      case Xc:
        return tr;
      case $c:
        return er;
      case qc:
        return ir;
    }
  return i;
});
const En = de;
var Kc = Object.prototype, Jc = Kc.hasOwnProperty;
function Qc(l) {
  var i = l.length, r = new l.constructor(i);
  return i && typeof l[0] == "string" && Jc.call(l, "index") && (r.index = l.index, r.input = l.input), r;
}
var tu = Xt.Uint8Array;
const or = tu;
function Mn(l) {
  var i = new l.constructor(l.byteLength);
  return new or(i).set(new or(l)), i;
}
function eu(l, i) {
  var r = i ? Mn(l.buffer) : l.buffer;
  return new l.constructor(r, l.byteOffset, l.byteLength);
}
var iu = /\w*$/;
function nu(l) {
  var i = new l.constructor(l.source, iu.exec(l));
  return i.lastIndex = l.lastIndex, i;
}
var rr = Pe ? Pe.prototype : void 0, sr = rr ? rr.valueOf : void 0;
function ou(l) {
  return sr ? Object(sr.call(l)) : {};
}
function Fr(l, i) {
  var r = i ? Mn(l.buffer) : l.buffer;
  return new l.constructor(r, l.byteOffset, l.length);
}
var ru = "[object Boolean]", su = "[object Date]", au = "[object Map]", lu = "[object Number]", hu = "[object RegExp]", cu = "[object Set]", uu = "[object String]", du = "[object Symbol]", fu = "[object ArrayBuffer]", pu = "[object DataView]", _u = "[object Float32Array]", mu = "[object Float64Array]", gu = "[object Int8Array]", vu = "[object Int16Array]", yu = "[object Int32Array]", bu = "[object Uint8Array]", Lu = "[object Uint8ClampedArray]", xu = "[object Uint16Array]", wu = "[object Uint32Array]";
function Tu(l, i, r) {
  var u = l.constructor;
  switch (i) {
    case fu:
      return Mn(l);
    case ru:
    case su:
      return new u(+l);
    case pu:
      return eu(l, r);
    case _u:
    case mu:
    case gu:
    case vu:
    case yu:
    case bu:
    case Lu:
    case xu:
    case wu:
      return Fr(l, r);
    case au:
      return new u();
    case lu:
    case uu:
      return new u(l);
    case hu:
      return nu(l);
    case cu:
      return new u();
    case du:
      return ou(l);
  }
}
function Gr(l) {
  return typeof l.constructor == "function" && !yn(l) ? Cl(wn(l)) : {};
}
var Eu = "[object Map]";
function Mu(l) {
  return se(l) && En(l) == Eu;
}
var ar = De && De.isMap, ku = ar ? Ln(ar) : Mu;
const Pu = ku;
var Du = "[object Set]";
function Cu(l) {
  return se(l) && En(l) == Du;
}
var lr = De && De.isSet, Su = lr ? Ln(lr) : Cu;
const Iu = Su;
var Au = 1, Ou = 2, zu = 4, jr = "[object Arguments]", Ru = "[object Array]", Bu = "[object Boolean]", Uu = "[object Date]", Nu = "[object Error]", Zr = "[object Function]", Hu = "[object GeneratorFunction]", Fu = "[object Map]", Gu = "[object Number]", Vr = "[object Object]", ju = "[object RegExp]", Zu = "[object Set]", Vu = "[object String]", Wu = "[object Symbol]", Yu = "[object WeakMap]", Xu = "[object ArrayBuffer]", $u = "[object DataView]", qu = "[object Float32Array]", Ku = "[object Float64Array]", Ju = "[object Int8Array]", Qu = "[object Int16Array]", td = "[object Int32Array]", ed = "[object Uint8Array]", id = "[object Uint8ClampedArray]", nd = "[object Uint16Array]", od = "[object Uint32Array]", vt = {};
vt[jr] = vt[Ru] = vt[Xu] = vt[$u] = vt[Bu] = vt[Uu] = vt[qu] = vt[Ku] = vt[Ju] = vt[Qu] = vt[td] = vt[Fu] = vt[Gu] = vt[Vr] = vt[ju] = vt[Zu] = vt[Vu] = vt[Wu] = vt[ed] = vt[id] = vt[nd] = vt[od] = !0;
vt[Nu] = vt[Zr] = vt[Yu] = !1;
function bi(l, i, r, u, o, a) {
  var c, f = i & Au, p = i & Ou, v = i & zu;
  if (r && (c = o ? r(l, u, o, a) : r(l)), c !== void 0)
    return c;
  if (!Nt(l))
    return l;
  var y = $e(l);
  if (y) {
    if (c = Qc(l), !f)
      return xr(l, c);
  } else {
    var x = En(l), T = x == Zr || x == Hu;
    if (bn(l))
      return Br(l, f);
    if (x == Vr || x == jr || T && !o) {
      if (c = p || T ? {} : Gr(l), !f)
        return p ? Nc(l, Cc(c, l)) : Rc(l, Dc(c, l));
    } else {
      if (!vt[x])
        return o ? l : {};
      c = Tu(l, x, f);
    }
  }
  a || (a = new ge());
  var W = a.get(l);
  if (W)
    return W;
  a.set(l, c), Iu(l) ? l.forEach(function(Z) {
    c.add(bi(Z, i, r, Z, l, a));
  }) : Pu(l) && l.forEach(function(Z, H) {
    c.set(H, bi(Z, i, r, H, l, a));
  });
  var nt = v ? p ? Fc : Hc : p ? ti : xn, ot = y ? void 0 : nt(l);
  return Fl(ot || l, function(Z, H) {
    ot && (H = Z, Z = l[H]), Tr(c, H, bi(Z, i, r, H, l, a));
  }), c;
}
var rd = 1, sd = 4;
function ad(l) {
  return bi(l, rd | sd);
}
function ld(l) {
  return function(i, r, u) {
    for (var o = -1, a = Object(i), c = u(i), f = c.length; f--; ) {
      var p = c[l ? f : ++o];
      if (r(a[p], p, a) === !1)
        break;
    }
    return i;
  };
}
var hd = ld();
const cd = hd;
function dn(l, i, r) {
  (r !== void 0 && !wi(l[i], r) || r === void 0 && !(i in l)) && vn(l, i, r);
}
function ud(l) {
  return se(l) && Ti(l);
}
function fn(l, i) {
  if (!(i === "constructor" && typeof l[i] == "function") && i != "__proto__")
    return l[i];
}
function dd(l) {
  return Qe(l, ti(l));
}
function fd(l, i, r, u, o, a, c) {
  var f = fn(l, r), p = fn(i, r), v = c.get(p);
  if (v) {
    dn(l, r, v);
    return;
  }
  var y = a ? a(f, p, r + "", l, i, c) : void 0, x = y === void 0;
  if (x) {
    var T = $e(p), W = !T && bn(p), nt = !T && !W && Sr(p);
    y = p, T || W || nt ? $e(f) ? y = f : ud(f) ? y = xr(f) : W ? (x = !1, y = Br(p, !0)) : nt ? (x = !1, y = Fr(p, !0)) : y = [] : xc(p) || ln(p) ? (y = f, ln(f) ? y = dd(f) : (!Nt(f) || gn(f)) && (y = Gr(p))) : x = !1;
  }
  x && (c.set(p, y), o(y, p, u, a, c), c.delete(p)), dn(l, r, y);
}
function kn(l, i, r, u, o) {
  l !== i && cd(i, function(a, c) {
    if (o || (o = new ge()), Nt(a))
      fd(l, i, c, r, kn, u, o);
    else {
      var f = u ? u(fn(l, c), a, c + "", l, i, o) : void 0;
      f === void 0 && (f = a), dn(l, c, f);
    }
  }, ti);
}
function Wr(l, i, r, u, o, a) {
  return Nt(l) && Nt(i) && (a.set(i, l), kn(l, i, void 0, Wr, a), a.delete(i)), l;
}
var pd = Xl(function(l, i, r, u) {
  kn(l, i, r, u);
});
const _d = pd;
var md = Er(function(l) {
  return l.push(void 0, Wr), Lr(_d, void 0, l);
});
const gd = md;
var vd = Math.floor, yd = Math.random;
function bd(l, i) {
  return l + vd(yd() * (i - l + 1));
}
var Ld = parseFloat, xd = Math.min, wd = Math.random;
function Td(l, i, r) {
  if (r && typeof r != "boolean" && kr(l, i, r) && (i = r = void 0), r === void 0 && (typeof i == "boolean" ? (r = i, i = void 0) : typeof l == "boolean" && (r = l, l = void 0)), l === void 0 && i === void 0 ? (l = 0, i = 1) : (l = Fo(l), i === void 0 ? (i = l, l = 0) : i = Fo(i)), l > i) {
    var u = l;
    l = i, i = u;
  }
  if (r || l % 1 || i % 1) {
    var o = wd();
    return xd(l + o * (i - l + Ld("1e-" + ((o + "").length - 1))), i);
  }
  return bd(l, i);
}
var Pn = {}, ki = {};
ki.RADIUS = 6378137;
ki.FLATTENING = 1 / 298.257223563;
ki.POLAR_RADIUS = 63567523142e-4;
var hr = ki;
Pn.geometry = Yr;
Pn.ring = pn;
function Yr(l) {
  var i = 0, r;
  switch (l.type) {
    case "Polygon":
      return cr(l.coordinates);
    case "MultiPolygon":
      for (r = 0; r < l.coordinates.length; r++)
        i += cr(l.coordinates[r]);
      return i;
    case "Point":
    case "MultiPoint":
    case "LineString":
    case "MultiLineString":
      return 0;
    case "GeometryCollection":
      for (r = 0; r < l.geometries.length; r++)
        i += Yr(l.geometries[r]);
      return i;
  }
}
function cr(l) {
  var i = 0;
  if (l && l.length > 0) {
    i += Math.abs(pn(l[0]));
    for (var r = 1; r < l.length; r++)
      i -= Math.abs(pn(l[r]));
  }
  return i;
}
function pn(l) {
  var i, r, u, o, a, c, f, p = 0, v = l.length;
  if (v > 2) {
    for (f = 0; f < v; f++)
      f === v - 2 ? (o = v - 2, a = v - 1, c = 0) : f === v - 1 ? (o = v - 1, a = 0, c = 1) : (o = f, a = f + 1, c = f + 2), i = l[o], r = l[a], u = l[c], p += (rn(u[0]) - rn(i[0])) * Math.sin(rn(r[1]));
    p = p * hr.RADIUS * hr.RADIUS / 2;
  }
  return p;
}
function rn(l) {
  return l * Math.PI / 180;
}
var Ed = Pn, Md = _n;
function _n(l, i) {
  switch (l && l.type || null) {
    case "FeatureCollection":
      return l.features = l.features.map(Xr(_n, i)), l;
    case "Feature":
      return l.geometry = _n(l.geometry, i), l;
    case "Polygon":
    case "MultiPolygon":
      return kd(l, i);
    default:
      return l;
  }
}
function Xr(l, i) {
  return function(r) {
    return l(r, i);
  };
}
function kd(l, i) {
  return l.type === "Polygon" ? l.coordinates = ur(l.coordinates, i) : l.type === "MultiPolygon" && (l.coordinates = l.coordinates.map(Xr(ur, i))), l;
}
function ur(l, i) {
  i = !!i, l[0] = dr(l[0], i);
  for (var r = 1; r < l.length; r++)
    l[r] = dr(l[r], !i);
  return l;
}
function dr(l, i) {
  return Pd(l) === i ? l : l.reverse();
}
function Pd(l) {
  return Ed.ring(l) >= 0;
}
var Je = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
(function(l, i) {
  (function(r, u) {
    u(i);
  })(re, function(r) {
    var u = "1.9.4";
    function o(t) {
      var e, s, h, d;
      for (s = 1, h = arguments.length; s < h; s++) {
        d = arguments[s];
        for (e in d)
          t[e] = d[e];
      }
      return t;
    }
    var a = Object.create || function() {
      function t() {
      }
      return function(e) {
        return t.prototype = e, new t();
      };
    }();
    function c(t, e) {
      var s = Array.prototype.slice;
      if (t.bind)
        return t.bind.apply(t, s.call(arguments, 1));
      var h = s.call(arguments, 2);
      return function() {
        return t.apply(e, h.length ? h.concat(s.call(arguments)) : arguments);
      };
    }
    var f = 0;
    function p(t) {
      return "_leaflet_id" in t || (t._leaflet_id = ++f), t._leaflet_id;
    }
    function v(t, e, s) {
      var h, d, m, b;
      return b = function() {
        h = !1, d && (m.apply(s, d), d = !1);
      }, m = function() {
        h ? d = arguments : (t.apply(s, arguments), setTimeout(b, e), h = !0);
      }, m;
    }
    function y(t, e, s) {
      var h = e[1], d = e[0], m = h - d;
      return t === h && s ? t : ((t - d) % m + m) % m + d;
    }
    function x() {
      return !1;
    }
    function T(t, e) {
      if (e === !1)
        return t;
      var s = Math.pow(10, e === void 0 ? 6 : e);
      return Math.round(t * s) / s;
    }
    function W(t) {
      return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
    }
    function nt(t) {
      return W(t).split(/\s+/);
    }
    function ot(t, e) {
      Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? a(t.options) : {});
      for (var s in e)
        t.options[s] = e[s];
      return t.options;
    }
    function Z(t, e, s) {
      var h = [];
      for (var d in t)
        h.push(encodeURIComponent(s ? d.toUpperCase() : d) + "=" + encodeURIComponent(t[d]));
      return (!e || e.indexOf("?") === -1 ? "?" : "&") + h.join("&");
    }
    var H = /\{ *([\w_ -]+) *\}/g;
    function C(t, e) {
      return t.replace(H, function(s, h) {
        var d = e[h];
        if (d === void 0)
          throw new Error("No value provided for variable " + s);
        return typeof d == "function" && (d = d(e)), d;
      });
    }
    var z = Array.isArray || function(t) {
      return Object.prototype.toString.call(t) === "[object Array]";
    };
    function V(t, e) {
      for (var s = 0; s < t.length; s++)
        if (t[s] === e)
          return s;
      return -1;
    }
    var K = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function G(t) {
      return window["webkit" + t] || window["moz" + t] || window["ms" + t];
    }
    var X = 0;
    function dt(t) {
      var e = +new Date(), s = Math.max(0, 16 - (e - X));
      return X = e + s, window.setTimeout(t, s);
    }
    var w = window.requestAnimationFrame || G("RequestAnimationFrame") || dt, B = window.cancelAnimationFrame || G("CancelAnimationFrame") || G("CancelRequestAnimationFrame") || function(t) {
      window.clearTimeout(t);
    };
    function tt(t, e, s) {
      if (s && w === dt)
        t.call(e);
      else
        return w.call(window, c(t, e));
    }
    function R(t) {
      t && B.call(window, t);
    }
    var j = {
      __proto__: null,
      extend: o,
      create: a,
      bind: c,
      get lastId() {
        return f;
      },
      stamp: p,
      throttle: v,
      wrapNum: y,
      falseFn: x,
      formatNum: T,
      trim: W,
      splitWords: nt,
      setOptions: ot,
      getParamString: Z,
      template: C,
      isArray: z,
      indexOf: V,
      emptyImageUrl: K,
      requestFn: w,
      cancelFn: B,
      requestAnimFrame: tt,
      cancelAnimFrame: R
    };
    function F() {
    }
    F.extend = function(t) {
      var e = function() {
        ot(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
      }, s = e.__super__ = this.prototype, h = a(s);
      h.constructor = e, e.prototype = h;
      for (var d in this)
        Object.prototype.hasOwnProperty.call(this, d) && d !== "prototype" && d !== "__super__" && (e[d] = this[d]);
      return t.statics && o(e, t.statics), t.includes && (Y(t.includes), o.apply(null, [h].concat(t.includes))), o(h, t), delete h.statics, delete h.includes, h.options && (h.options = s.options ? a(s.options) : {}, o(h.options, t.options)), h._initHooks = [], h.callInitHooks = function() {
        if (!this._initHooksCalled) {
          s.callInitHooks && s.callInitHooks.call(this), this._initHooksCalled = !0;
          for (var m = 0, b = h._initHooks.length; m < b; m++)
            h._initHooks[m].call(this);
        }
      }, e;
    }, F.include = function(t) {
      var e = this.prototype.options;
      return o(this.prototype, t), t.options && (this.prototype.options = e, this.mergeOptions(t.options)), this;
    }, F.mergeOptions = function(t) {
      return o(this.prototype.options, t), this;
    }, F.addInitHook = function(t) {
      var e = Array.prototype.slice.call(arguments, 1), s = typeof t == "function" ? t : function() {
        this[t].apply(this, e);
      };
      return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(s), this;
    };
    function Y(t) {
      if (!(typeof L > "u" || !L || !L.Mixin)) {
        t = z(t) ? t : [t];
        for (var e = 0; e < t.length; e++)
          t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
      }
    }
    var J = {
      /* @method on(type: String, fn: Function, context?: Object): this
       * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
       *
       * @alternative
       * @method on(eventMap: Object): this
       * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
       */
      on: function(t, e, s) {
        if (typeof t == "object")
          for (var h in t)
            this._on(h, t[h], e);
        else {
          t = nt(t);
          for (var d = 0, m = t.length; d < m; d++)
            this._on(t[d], e, s);
        }
        return this;
      },
      /* @method off(type: String, fn?: Function, context?: Object): this
       * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
       *
       * @alternative
       * @method off(eventMap: Object): this
       * Removes a set of type/listener pairs.
       *
       * @alternative
       * @method off: this
       * Removes all listeners to all events on the object. This includes implicitly attached events.
       */
      off: function(t, e, s) {
        if (!arguments.length)
          delete this._events;
        else if (typeof t == "object")
          for (var h in t)
            this._off(h, t[h], e);
        else {
          t = nt(t);
          for (var d = arguments.length === 1, m = 0, b = t.length; m < b; m++)
            d ? this._off(t[m]) : this._off(t[m], e, s);
        }
        return this;
      },
      // attach listener (without syntactic sugar now)
      _on: function(t, e, s, h) {
        if (typeof e != "function") {
          console.warn("wrong listener type: " + typeof e);
          return;
        }
        if (this._listens(t, e, s) === !1) {
          s === this && (s = void 0);
          var d = { fn: e, ctx: s };
          h && (d.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(d);
        }
      },
      _off: function(t, e, s) {
        var h, d, m;
        if (this._events && (h = this._events[t], !!h)) {
          if (arguments.length === 1) {
            if (this._firingCount)
              for (d = 0, m = h.length; d < m; d++)
                h[d].fn = x;
            delete this._events[t];
            return;
          }
          if (typeof e != "function") {
            console.warn("wrong listener type: " + typeof e);
            return;
          }
          var b = this._listens(t, e, s);
          if (b !== !1) {
            var P = h[b];
            this._firingCount && (P.fn = x, this._events[t] = h = h.slice()), h.splice(b, 1);
          }
        }
      },
      // @method fire(type: String, data?: Object, propagate?: Boolean): this
      // Fires an event of the specified type. You can optionally provide a data
      // object — the first argument of the listener function will contain its
      // properties. The event can optionally be propagated to event parents.
      fire: function(t, e, s) {
        if (!this.listens(t, s))
          return this;
        var h = o({}, e, {
          type: t,
          target: this,
          sourceTarget: e && e.sourceTarget || this
        });
        if (this._events) {
          var d = this._events[t];
          if (d) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var m = 0, b = d.length; m < b; m++) {
              var P = d[m], D = P.fn;
              P.once && this.off(t, D, P.ctx), D.call(P.ctx || this, h);
            }
            this._firingCount--;
          }
        }
        return s && this._propagateEvent(h), this;
      },
      // @method listens(type: String, propagate?: Boolean): Boolean
      // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
      // Returns `true` if a particular event type has any listeners attached to it.
      // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
      listens: function(t, e, s, h) {
        typeof t != "string" && console.warn('"string" type argument expected');
        var d = e;
        typeof e != "function" && (h = !!e, d = void 0, s = void 0);
        var m = this._events && this._events[t];
        if (m && m.length && this._listens(t, d, s) !== !1)
          return !0;
        if (h) {
          for (var b in this._eventParents)
            if (this._eventParents[b].listens(t, e, s, h))
              return !0;
        }
        return !1;
      },
      // returns the index (number) or false
      _listens: function(t, e, s) {
        if (!this._events)
          return !1;
        var h = this._events[t] || [];
        if (!e)
          return !!h.length;
        s === this && (s = void 0);
        for (var d = 0, m = h.length; d < m; d++)
          if (h[d].fn === e && h[d].ctx === s)
            return d;
        return !1;
      },
      // @method once(…): this
      // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
      once: function(t, e, s) {
        if (typeof t == "object")
          for (var h in t)
            this._on(h, t[h], e, !0);
        else {
          t = nt(t);
          for (var d = 0, m = t.length; d < m; d++)
            this._on(t[d], e, s, !0);
        }
        return this;
      },
      // @method addEventParent(obj: Evented): this
      // Adds an event parent - an `Evented` that will receive propagated events
      addEventParent: function(t) {
        return this._eventParents = this._eventParents || {}, this._eventParents[p(t)] = t, this;
      },
      // @method removeEventParent(obj: Evented): this
      // Removes an event parent, so it will stop receiving propagated events
      removeEventParent: function(t) {
        return this._eventParents && delete this._eventParents[p(t)], this;
      },
      _propagateEvent: function(t) {
        for (var e in this._eventParents)
          this._eventParents[e].fire(t.type, o({
            layer: t.target,
            propagatedFrom: t.target
          }, t), !0);
      }
    };
    J.addEventListener = J.on, J.removeEventListener = J.clearAllEventListeners = J.off, J.addOneTimeEventListener = J.once, J.fireEvent = J.fire, J.hasEventListeners = J.listens;
    var $ = F.extend(J);
    function E(t, e, s) {
      this.x = s ? Math.round(t) : t, this.y = s ? Math.round(e) : e;
    }
    var I = Math.trunc || function(t) {
      return t > 0 ? Math.floor(t) : Math.ceil(t);
    };
    E.prototype = {
      // @method clone(): Point
      // Returns a copy of the current point.
      clone: function() {
        return new E(this.x, this.y);
      },
      // @method add(otherPoint: Point): Point
      // Returns the result of addition of the current and the given points.
      add: function(t) {
        return this.clone()._add(k(t));
      },
      _add: function(t) {
        return this.x += t.x, this.y += t.y, this;
      },
      // @method subtract(otherPoint: Point): Point
      // Returns the result of subtraction of the given point from the current.
      subtract: function(t) {
        return this.clone()._subtract(k(t));
      },
      _subtract: function(t) {
        return this.x -= t.x, this.y -= t.y, this;
      },
      // @method divideBy(num: Number): Point
      // Returns the result of division of the current point by the given number.
      divideBy: function(t) {
        return this.clone()._divideBy(t);
      },
      _divideBy: function(t) {
        return this.x /= t, this.y /= t, this;
      },
      // @method multiplyBy(num: Number): Point
      // Returns the result of multiplication of the current point by the given number.
      multiplyBy: function(t) {
        return this.clone()._multiplyBy(t);
      },
      _multiplyBy: function(t) {
        return this.x *= t, this.y *= t, this;
      },
      // @method scaleBy(scale: Point): Point
      // Multiply each coordinate of the current point by each coordinate of
      // `scale`. In linear algebra terms, multiply the point by the
      // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
      // defined by `scale`.
      scaleBy: function(t) {
        return new E(this.x * t.x, this.y * t.y);
      },
      // @method unscaleBy(scale: Point): Point
      // Inverse of `scaleBy`. Divide each coordinate of the current point by
      // each coordinate of `scale`.
      unscaleBy: function(t) {
        return new E(this.x / t.x, this.y / t.y);
      },
      // @method round(): Point
      // Returns a copy of the current point with rounded coordinates.
      round: function() {
        return this.clone()._round();
      },
      _round: function() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
      },
      // @method floor(): Point
      // Returns a copy of the current point with floored coordinates (rounded down).
      floor: function() {
        return this.clone()._floor();
      },
      _floor: function() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
      },
      // @method ceil(): Point
      // Returns a copy of the current point with ceiled coordinates (rounded up).
      ceil: function() {
        return this.clone()._ceil();
      },
      _ceil: function() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
      },
      // @method trunc(): Point
      // Returns a copy of the current point with truncated coordinates (rounded towards zero).
      trunc: function() {
        return this.clone()._trunc();
      },
      _trunc: function() {
        return this.x = I(this.x), this.y = I(this.y), this;
      },
      // @method distanceTo(otherPoint: Point): Number
      // Returns the cartesian distance between the current and the given points.
      distanceTo: function(t) {
        t = k(t);
        var e = t.x - this.x, s = t.y - this.y;
        return Math.sqrt(e * e + s * s);
      },
      // @method equals(otherPoint: Point): Boolean
      // Returns `true` if the given point has the same coordinates.
      equals: function(t) {
        return t = k(t), t.x === this.x && t.y === this.y;
      },
      // @method contains(otherPoint: Point): Boolean
      // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
      contains: function(t) {
        return t = k(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
      },
      // @method toString(): String
      // Returns a string representation of the point for debugging purposes.
      toString: function() {
        return "Point(" + T(this.x) + ", " + T(this.y) + ")";
      }
    };
    function k(t, e, s) {
      return t instanceof E ? t : z(t) ? new E(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new E(t.x, t.y) : new E(t, e, s);
    }
    function O(t, e) {
      if (t)
        for (var s = e ? [t, e] : t, h = 0, d = s.length; h < d; h++)
          this.extend(s[h]);
    }
    O.prototype = {
      // @method extend(point: Point): this
      // Extends the bounds to contain the given point.
      // @alternative
      // @method extend(otherBounds: Bounds): this
      // Extend the bounds to contain the given bounds
      extend: function(t) {
        var e, s;
        if (!t)
          return this;
        if (t instanceof E || typeof t[0] == "number" || "x" in t)
          e = s = k(t);
        else if (t = A(t), e = t.min, s = t.max, !e || !s)
          return this;
        return !this.min && !this.max ? (this.min = e.clone(), this.max = s.clone()) : (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(s.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(s.y, this.max.y)), this;
      },
      // @method getCenter(round?: Boolean): Point
      // Returns the center point of the bounds.
      getCenter: function(t) {
        return k(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          t
        );
      },
      // @method getBottomLeft(): Point
      // Returns the bottom-left point of the bounds.
      getBottomLeft: function() {
        return k(this.min.x, this.max.y);
      },
      // @method getTopRight(): Point
      // Returns the top-right point of the bounds.
      getTopRight: function() {
        return k(this.max.x, this.min.y);
      },
      // @method getTopLeft(): Point
      // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
      getTopLeft: function() {
        return this.min;
      },
      // @method getBottomRight(): Point
      // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
      getBottomRight: function() {
        return this.max;
      },
      // @method getSize(): Point
      // Returns the size of the given bounds
      getSize: function() {
        return this.max.subtract(this.min);
      },
      // @method contains(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle contains the given one.
      // @alternative
      // @method contains(point: Point): Boolean
      // Returns `true` if the rectangle contains the given point.
      contains: function(t) {
        var e, s;
        return typeof t[0] == "number" || t instanceof E ? t = k(t) : t = A(t), t instanceof O ? (e = t.min, s = t.max) : e = s = t, e.x >= this.min.x && s.x <= this.max.x && e.y >= this.min.y && s.y <= this.max.y;
      },
      // @method intersects(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds
      // intersect if they have at least one point in common.
      intersects: function(t) {
        t = A(t);
        var e = this.min, s = this.max, h = t.min, d = t.max, m = d.x >= e.x && h.x <= s.x, b = d.y >= e.y && h.y <= s.y;
        return m && b;
      },
      // @method overlaps(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds
      // overlap if their intersection is an area.
      overlaps: function(t) {
        t = A(t);
        var e = this.min, s = this.max, h = t.min, d = t.max, m = d.x > e.x && h.x < s.x, b = d.y > e.y && h.y < s.y;
        return m && b;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this.min && this.max);
      },
      // @method pad(bufferRatio: Number): Bounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(t) {
        var e = this.min, s = this.max, h = Math.abs(e.x - s.x) * t, d = Math.abs(e.y - s.y) * t;
        return A(
          k(e.x - h, e.y - d),
          k(s.x + h, s.y + d)
        );
      },
      // @method equals(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle is equivalent to the given bounds.
      equals: function(t) {
        return t ? (t = A(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight())) : !1;
      }
    };
    function A(t, e) {
      return !t || t instanceof O ? t : new O(t, e);
    }
    function Q(t, e) {
      if (t)
        for (var s = e ? [t, e] : t, h = 0, d = s.length; h < d; h++)
          this.extend(s[h]);
    }
    Q.prototype = {
      // @method extend(latlng: LatLng): this
      // Extend the bounds to contain the given point
      // @alternative
      // @method extend(otherBounds: LatLngBounds): this
      // Extend the bounds to contain the given bounds
      extend: function(t) {
        var e = this._southWest, s = this._northEast, h, d;
        if (t instanceof st)
          h = t, d = t;
        else if (t instanceof Q) {
          if (h = t._southWest, d = t._northEast, !h || !d)
            return this;
        } else
          return t ? this.extend(g(t) || et(t)) : this;
        return !e && !s ? (this._southWest = new st(h.lat, h.lng), this._northEast = new st(d.lat, d.lng)) : (e.lat = Math.min(h.lat, e.lat), e.lng = Math.min(h.lng, e.lng), s.lat = Math.max(d.lat, s.lat), s.lng = Math.max(d.lng, s.lng)), this;
      },
      // @method pad(bufferRatio: Number): LatLngBounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(t) {
        var e = this._southWest, s = this._northEast, h = Math.abs(e.lat - s.lat) * t, d = Math.abs(e.lng - s.lng) * t;
        return new Q(
          new st(e.lat - h, e.lng - d),
          new st(s.lat + h, s.lng + d)
        );
      },
      // @method getCenter(): LatLng
      // Returns the center point of the bounds.
      getCenter: function() {
        return new st(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      // @method getSouthWest(): LatLng
      // Returns the south-west point of the bounds.
      getSouthWest: function() {
        return this._southWest;
      },
      // @method getNorthEast(): LatLng
      // Returns the north-east point of the bounds.
      getNorthEast: function() {
        return this._northEast;
      },
      // @method getNorthWest(): LatLng
      // Returns the north-west point of the bounds.
      getNorthWest: function() {
        return new st(this.getNorth(), this.getWest());
      },
      // @method getSouthEast(): LatLng
      // Returns the south-east point of the bounds.
      getSouthEast: function() {
        return new st(this.getSouth(), this.getEast());
      },
      // @method getWest(): Number
      // Returns the west longitude of the bounds
      getWest: function() {
        return this._southWest.lng;
      },
      // @method getSouth(): Number
      // Returns the south latitude of the bounds
      getSouth: function() {
        return this._southWest.lat;
      },
      // @method getEast(): Number
      // Returns the east longitude of the bounds
      getEast: function() {
        return this._northEast.lng;
      },
      // @method getNorth(): Number
      // Returns the north latitude of the bounds
      getNorth: function() {
        return this._northEast.lat;
      },
      // @method contains(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle contains the given one.
      // @alternative
      // @method contains (latlng: LatLng): Boolean
      // Returns `true` if the rectangle contains the given point.
      contains: function(t) {
        typeof t[0] == "number" || t instanceof st || "lat" in t ? t = g(t) : t = et(t);
        var e = this._southWest, s = this._northEast, h, d;
        return t instanceof Q ? (h = t.getSouthWest(), d = t.getNorthEast()) : h = d = t, h.lat >= e.lat && d.lat <= s.lat && h.lng >= e.lng && d.lng <= s.lng;
      },
      // @method intersects(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
      intersects: function(t) {
        t = et(t);
        var e = this._southWest, s = this._northEast, h = t.getSouthWest(), d = t.getNorthEast(), m = d.lat >= e.lat && h.lat <= s.lat, b = d.lng >= e.lng && h.lng <= s.lng;
        return m && b;
      },
      // @method overlaps(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
      overlaps: function(t) {
        t = et(t);
        var e = this._southWest, s = this._northEast, h = t.getSouthWest(), d = t.getNorthEast(), m = d.lat > e.lat && h.lat < s.lat, b = d.lng > e.lng && h.lng < s.lng;
        return m && b;
      },
      // @method toBBoxString(): String
      // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
      toBBoxString: function() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
      },
      // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
      // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(t, e) {
        return t ? (t = et(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e)) : !1;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this._southWest && this._northEast);
      }
    };
    function et(t, e) {
      return t instanceof Q ? t : new Q(t, e);
    }
    function st(t, e, s) {
      if (isNaN(t) || isNaN(e))
        throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
      this.lat = +t, this.lng = +e, s !== void 0 && (this.alt = +s);
    }
    st.prototype = {
      // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
      // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(t, e) {
        if (!t)
          return !1;
        t = g(t);
        var s = Math.max(
          Math.abs(this.lat - t.lat),
          Math.abs(this.lng - t.lng)
        );
        return s <= (e === void 0 ? 1e-9 : e);
      },
      // @method toString(): String
      // Returns a string representation of the point (for debugging purposes).
      toString: function(t) {
        return "LatLng(" + T(this.lat, t) + ", " + T(this.lng, t) + ")";
      },
      // @method distanceTo(otherLatLng: LatLng): Number
      // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
      distanceTo: function(t) {
        return Lt.distance(this, g(t));
      },
      // @method wrap(): LatLng
      // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
      wrap: function() {
        return Lt.wrapLatLng(this);
      },
      // @method toBounds(sizeInMeters: Number): LatLngBounds
      // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
      toBounds: function(t) {
        var e = 180 * t / 40075017, s = e / Math.cos(Math.PI / 180 * this.lat);
        return et(
          [this.lat - e, this.lng - s],
          [this.lat + e, this.lng + s]
        );
      },
      clone: function() {
        return new st(this.lat, this.lng, this.alt);
      }
    };
    function g(t, e, s) {
      return t instanceof st ? t : z(t) && typeof t[0] != "object" ? t.length === 3 ? new st(t[0], t[1], t[2]) : t.length === 2 ? new st(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new st(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === void 0 ? null : new st(t, e, s);
    }
    var yt = {
      // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
      // Projects geographical coordinates into pixel coordinates for a given zoom.
      latLngToPoint: function(t, e) {
        var s = this.projection.project(t), h = this.scale(e);
        return this.transformation._transform(s, h);
      },
      // @method pointToLatLng(point: Point, zoom: Number): LatLng
      // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
      // zoom into geographical coordinates.
      pointToLatLng: function(t, e) {
        var s = this.scale(e), h = this.transformation.untransform(t, s);
        return this.projection.unproject(h);
      },
      // @method project(latlng: LatLng): Point
      // Projects geographical coordinates into coordinates in units accepted for
      // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
      project: function(t) {
        return this.projection.project(t);
      },
      // @method unproject(point: Point): LatLng
      // Given a projected coordinate returns the corresponding LatLng.
      // The inverse of `project`.
      unproject: function(t) {
        return this.projection.unproject(t);
      },
      // @method scale(zoom: Number): Number
      // Returns the scale used when transforming projected coordinates into
      // pixel coordinates for a particular zoom. For example, it returns
      // `256 * 2^zoom` for Mercator-based CRS.
      scale: function(t) {
        return 256 * Math.pow(2, t);
      },
      // @method zoom(scale: Number): Number
      // Inverse of `scale()`, returns the zoom level corresponding to a scale
      // factor of `scale`.
      zoom: function(t) {
        return Math.log(t / 256) / Math.LN2;
      },
      // @method getProjectedBounds(zoom: Number): Bounds
      // Returns the projection's bounds scaled and transformed for the provided `zoom`.
      getProjectedBounds: function(t) {
        if (this.infinite)
          return null;
        var e = this.projection.bounds, s = this.scale(t), h = this.transformation.transform(e.min, s), d = this.transformation.transform(e.max, s);
        return new O(h, d);
      },
      // @method distance(latlng1: LatLng, latlng2: LatLng): Number
      // Returns the distance between two geographical coordinates.
      // @property code: String
      // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
      //
      // @property wrapLng: Number[]
      // An array of two numbers defining whether the longitude (horizontal) coordinate
      // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
      // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
      //
      // @property wrapLat: Number[]
      // Like `wrapLng`, but for the latitude (vertical) axis.
      // wrapLng: [min, max],
      // wrapLat: [min, max],
      // @property infinite: Boolean
      // If true, the coordinate space will be unbounded (infinite in both axes)
      infinite: !1,
      // @method wrapLatLng(latlng: LatLng): LatLng
      // Returns a `LatLng` where lat and lng has been wrapped according to the
      // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
      wrapLatLng: function(t) {
        var e = this.wrapLng ? y(t.lng, this.wrapLng, !0) : t.lng, s = this.wrapLat ? y(t.lat, this.wrapLat, !0) : t.lat, h = t.alt;
        return new st(s, e, h);
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring
      // that its center is within the CRS's bounds.
      // Only accepts actual `L.LatLngBounds` instances, not arrays.
      wrapLatLngBounds: function(t) {
        var e = t.getCenter(), s = this.wrapLatLng(e), h = e.lat - s.lat, d = e.lng - s.lng;
        if (h === 0 && d === 0)
          return t;
        var m = t.getSouthWest(), b = t.getNorthEast(), P = new st(m.lat - h, m.lng - d), D = new st(b.lat - h, b.lng - d);
        return new Q(P, D);
      }
    }, Lt = o({}, yt, {
      wrapLng: [-180, 180],
      // Mean Earth Radius, as recommended for use by
      // the International Union of Geodesy and Geophysics,
      // see https://rosettacode.org/wiki/Haversine_formula
      R: 6371e3,
      // distance between two geographical points using spherical law of cosines approximation
      distance: function(t, e) {
        var s = Math.PI / 180, h = t.lat * s, d = e.lat * s, m = Math.sin((e.lat - t.lat) * s / 2), b = Math.sin((e.lng - t.lng) * s / 2), P = m * m + Math.cos(h) * Math.cos(d) * b * b, D = 2 * Math.atan2(Math.sqrt(P), Math.sqrt(1 - P));
        return this.R * D;
      }
    }), mt = 6378137, xt = {
      R: mt,
      MAX_LATITUDE: 85.0511287798,
      project: function(t) {
        var e = Math.PI / 180, s = this.MAX_LATITUDE, h = Math.max(Math.min(s, t.lat), -s), d = Math.sin(h * e);
        return new E(
          this.R * t.lng * e,
          this.R * Math.log((1 + d) / (1 - d)) / 2
        );
      },
      unproject: function(t) {
        var e = 180 / Math.PI;
        return new st(
          (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
          t.x * e / this.R
        );
      },
      bounds: function() {
        var t = mt * Math.PI;
        return new O([-t, -t], [t, t]);
      }()
    };
    function jt(t, e, s, h) {
      if (z(t)) {
        this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
        return;
      }
      this._a = t, this._b = e, this._c = s, this._d = h;
    }
    jt.prototype = {
      // @method transform(point: Point, scale?: Number): Point
      // Returns a transformed point, optionally multiplied by the given scale.
      // Only accepts actual `L.Point` instances, not arrays.
      transform: function(t, e) {
        return this._transform(t.clone(), e);
      },
      // destructive transform (faster)
      _transform: function(t, e) {
        return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t;
      },
      // @method untransform(point: Point, scale?: Number): Point
      // Returns the reverse transformation of the given point, optionally divided
      // by the given scale. Only accepts actual `L.Point` instances, not arrays.
      untransform: function(t, e) {
        return e = e || 1, new E(
          (t.x / e - this._b) / this._a,
          (t.y / e - this._d) / this._c
        );
      }
    };
    function Dt(t, e, s, h) {
      return new jt(t, e, s, h);
    }
    var ve = o({}, Lt, {
      code: "EPSG:3857",
      projection: xt,
      transformation: function() {
        var t = 0.5 / (Math.PI * xt.R);
        return Dt(t, 0.5, -t, 0.5);
      }()
    }), _t = o({}, ve, {
      code: "EPSG:900913"
    });
    function $t(t) {
      return document.createElementNS("http://www.w3.org/2000/svg", t);
    }
    function Se(t, e) {
      var s = "", h, d, m, b, P, D;
      for (h = 0, m = t.length; h < m; h++) {
        for (P = t[h], d = 0, b = P.length; d < b; d++)
          D = P[d], s += (d ? "L" : "M") + D.x + " " + D.y;
        s += e ? rt.svg ? "z" : "x" : "";
      }
      return s || "M0 0";
    }
    var Ht = document.documentElement.style, _ = "ActiveXObject" in window, M = _ && !document.addEventListener, S = "msLaunchUri" in navigator && !("documentMode" in document), N = Zt("webkit"), it = Zt("android"), ft = Zt("android 2") || Zt("android 3"), wt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), Ct = it && Zt("Google") && wt < 537 && !("AudioNode" in window), Et = !!window.opera, At = !S && Zt("chrome"), ie = Zt("gecko") && !N && !Et && !_, ei = !At && Zt("safari"), Ie = Zt("phantom"), Dn = "OTransition" in Ht, Jr = navigator.platform.indexOf("Win") === 0, Cn = _ && "transition" in Ht, Pi = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !ft, Sn = "MozPerspective" in Ht, Qr = !window.L_DISABLE_3D && (Cn || Pi || Sn) && !Dn && !Ie, Ae = typeof orientation < "u" || Zt("mobile"), ts = Ae && N, es = Ae && Pi, In = !window.PointerEvent && window.MSPointerEvent, An = !!(window.PointerEvent || In), On = "ontouchstart" in window || !!window.TouchEvent, is = !window.L_NO_TOUCH && (On || An), ns = Ae && Et, os = Ae && ie, rs = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, ss = function() {
      var t = !1;
      try {
        var e = Object.defineProperty({}, "passive", {
          get: function() {
            t = !0;
          }
        });
        window.addEventListener("testPassiveEventSupport", x, e), window.removeEventListener("testPassiveEventSupport", x, e);
      } catch {
      }
      return t;
    }(), as = function() {
      return !!document.createElement("canvas").getContext;
    }(), Di = !!(document.createElementNS && $t("svg").createSVGRect), ls = !!Di && function() {
      var t = document.createElement("div");
      return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
    }(), hs = !Di && function() {
      try {
        var t = document.createElement("div");
        t.innerHTML = '<v:shape adj="1"/>';
        var e = t.firstChild;
        return e.style.behavior = "url(#default#VML)", e && typeof e.adj == "object";
      } catch {
        return !1;
      }
    }(), cs = navigator.platform.indexOf("Mac") === 0, us = navigator.platform.indexOf("Linux") === 0;
    function Zt(t) {
      return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
    }
    var rt = {
      ie: _,
      ielt9: M,
      edge: S,
      webkit: N,
      android: it,
      android23: ft,
      androidStock: Ct,
      opera: Et,
      chrome: At,
      gecko: ie,
      safari: ei,
      phantom: Ie,
      opera12: Dn,
      win: Jr,
      ie3d: Cn,
      webkit3d: Pi,
      gecko3d: Sn,
      any3d: Qr,
      mobile: Ae,
      mobileWebkit: ts,
      mobileWebkit3d: es,
      msPointer: In,
      pointer: An,
      touch: is,
      touchNative: On,
      mobileOpera: ns,
      mobileGecko: os,
      retina: rs,
      passiveEvents: ss,
      canvas: as,
      svg: Di,
      vml: hs,
      inlineSvg: ls,
      mac: cs,
      linux: us
    }, zn = rt.msPointer ? "MSPointerDown" : "pointerdown", Rn = rt.msPointer ? "MSPointerMove" : "pointermove", Bn = rt.msPointer ? "MSPointerUp" : "pointerup", Un = rt.msPointer ? "MSPointerCancel" : "pointercancel", Ci = {
      touchstart: zn,
      touchmove: Rn,
      touchend: Bn,
      touchcancel: Un
    }, Nn = {
      touchstart: gs,
      touchmove: ii,
      touchend: ii,
      touchcancel: ii
    }, ye = {}, Hn = !1;
    function ds(t, e, s) {
      return e === "touchstart" && ms(), Nn[e] ? (s = Nn[e].bind(this, s), t.addEventListener(Ci[e], s, !1), s) : (console.warn("wrong event specified:", e), x);
    }
    function fs(t, e, s) {
      if (!Ci[e]) {
        console.warn("wrong event specified:", e);
        return;
      }
      t.removeEventListener(Ci[e], s, !1);
    }
    function ps(t) {
      ye[t.pointerId] = t;
    }
    function _s(t) {
      ye[t.pointerId] && (ye[t.pointerId] = t);
    }
    function Fn(t) {
      delete ye[t.pointerId];
    }
    function ms() {
      Hn || (document.addEventListener(zn, ps, !0), document.addEventListener(Rn, _s, !0), document.addEventListener(Bn, Fn, !0), document.addEventListener(Un, Fn, !0), Hn = !0);
    }
    function ii(t, e) {
      if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
        e.touches = [];
        for (var s in ye)
          e.touches.push(ye[s]);
        e.changedTouches = [e], t(e);
      }
    }
    function gs(t, e) {
      e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && It(e), ii(t, e);
    }
    function vs(t) {
      var e = {}, s, h;
      for (h in t)
        s = t[h], e[h] = s && s.bind ? s.bind(t) : s;
      return t = e, e.type = "dblclick", e.detail = 2, e.isTrusted = !1, e._simulated = !0, e;
    }
    var ys = 200;
    function bs(t, e) {
      t.addEventListener("dblclick", e);
      var s = 0, h;
      function d(m) {
        if (m.detail !== 1) {
          h = m.detail;
          return;
        }
        if (!(m.pointerType === "mouse" || m.sourceCapabilities && !m.sourceCapabilities.firesTouchEvents)) {
          var b = Wn(m);
          if (!(b.some(function(D) {
            return D instanceof HTMLLabelElement && D.attributes.for;
          }) && !b.some(function(D) {
            return D instanceof HTMLInputElement || D instanceof HTMLSelectElement;
          }))) {
            var P = Date.now();
            P - s <= ys ? (h++, h === 2 && e(vs(m))) : h = 1, s = P;
          }
        }
      }
      return t.addEventListener("click", d), {
        dblclick: e,
        simDblclick: d
      };
    }
    function Ls(t, e) {
      t.removeEventListener("dblclick", e.dblclick), t.removeEventListener("click", e.simDblclick);
    }
    var Si = ri(
      ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
    ), Oe = ri(
      ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
    ), Gn = Oe === "webkitTransition" || Oe === "OTransition" ? Oe + "End" : "transitionend";
    function jn(t) {
      return typeof t == "string" ? document.getElementById(t) : t;
    }
    function ze(t, e) {
      var s = t.style[e] || t.currentStyle && t.currentStyle[e];
      if ((!s || s === "auto") && document.defaultView) {
        var h = document.defaultView.getComputedStyle(t, null);
        s = h ? h[e] : null;
      }
      return s === "auto" ? null : s;
    }
    function pt(t, e, s) {
      var h = document.createElement(t);
      return h.className = e || "", s && s.appendChild(h), h;
    }
    function Tt(t) {
      var e = t.parentNode;
      e && e.removeChild(t);
    }
    function ni(t) {
      for (; t.firstChild; )
        t.removeChild(t.firstChild);
    }
    function be(t) {
      var e = t.parentNode;
      e && e.lastChild !== t && e.appendChild(t);
    }
    function Le(t) {
      var e = t.parentNode;
      e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
    }
    function Ii(t, e) {
      if (t.classList !== void 0)
        return t.classList.contains(e);
      var s = oi(t);
      return s.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(s);
    }
    function ht(t, e) {
      if (t.classList !== void 0)
        for (var s = nt(e), h = 0, d = s.length; h < d; h++)
          t.classList.add(s[h]);
      else if (!Ii(t, e)) {
        var m = oi(t);
        Ai(t, (m ? m + " " : "") + e);
      }
    }
    function Mt(t, e) {
      t.classList !== void 0 ? t.classList.remove(e) : Ai(t, W((" " + oi(t) + " ").replace(" " + e + " ", " ")));
    }
    function Ai(t, e) {
      t.className.baseVal === void 0 ? t.className = e : t.className.baseVal = e;
    }
    function oi(t) {
      return t.correspondingElement && (t = t.correspondingElement), t.className.baseVal === void 0 ? t.className : t.className.baseVal;
    }
    function Rt(t, e) {
      "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && xs(t, e);
    }
    function xs(t, e) {
      var s = !1, h = "DXImageTransform.Microsoft.Alpha";
      try {
        s = t.filters.item(h);
      } catch {
        if (e === 1)
          return;
      }
      e = Math.round(e * 100), s ? (s.Enabled = e !== 100, s.Opacity = e) : t.style.filter += " progid:" + h + "(opacity=" + e + ")";
    }
    function ri(t) {
      for (var e = document.documentElement.style, s = 0; s < t.length; s++)
        if (t[s] in e)
          return t[s];
      return !1;
    }
    function ae(t, e, s) {
      var h = e || new E(0, 0);
      t.style[Si] = (rt.ie3d ? "translate(" + h.x + "px," + h.y + "px)" : "translate3d(" + h.x + "px," + h.y + "px,0)") + (s ? " scale(" + s + ")" : "");
    }
    function kt(t, e) {
      t._leaflet_pos = e, rt.any3d ? ae(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
    }
    function le(t) {
      return t._leaflet_pos || new E(0, 0);
    }
    var Re, Be, Oi;
    if ("onselectstart" in document)
      Re = function() {
        lt(window, "selectstart", It);
      }, Be = function() {
        gt(window, "selectstart", It);
      };
    else {
      var Ue = ri(
        ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
      );
      Re = function() {
        if (Ue) {
          var t = document.documentElement.style;
          Oi = t[Ue], t[Ue] = "none";
        }
      }, Be = function() {
        Ue && (document.documentElement.style[Ue] = Oi, Oi = void 0);
      };
    }
    function zi() {
      lt(window, "dragstart", It);
    }
    function Ri() {
      gt(window, "dragstart", It);
    }
    var si, Bi;
    function Ui(t) {
      for (; t.tabIndex === -1; )
        t = t.parentNode;
      t.style && (ai(), si = t, Bi = t.style.outlineStyle, t.style.outlineStyle = "none", lt(window, "keydown", ai));
    }
    function ai() {
      si && (si.style.outlineStyle = Bi, si = void 0, Bi = void 0, gt(window, "keydown", ai));
    }
    function Zn(t) {
      do
        t = t.parentNode;
      while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
      return t;
    }
    function Ni(t) {
      var e = t.getBoundingClientRect();
      return {
        x: e.width / t.offsetWidth || 1,
        y: e.height / t.offsetHeight || 1,
        boundingClientRect: e
      };
    }
    var ws = {
      __proto__: null,
      TRANSFORM: Si,
      TRANSITION: Oe,
      TRANSITION_END: Gn,
      get: jn,
      getStyle: ze,
      create: pt,
      remove: Tt,
      empty: ni,
      toFront: be,
      toBack: Le,
      hasClass: Ii,
      addClass: ht,
      removeClass: Mt,
      setClass: Ai,
      getClass: oi,
      setOpacity: Rt,
      testProp: ri,
      setTransform: ae,
      setPosition: kt,
      getPosition: le,
      get disableTextSelection() {
        return Re;
      },
      get enableTextSelection() {
        return Be;
      },
      disableImageDrag: zi,
      enableImageDrag: Ri,
      preventOutline: Ui,
      restoreOutline: ai,
      getSizedParentNode: Zn,
      getScale: Ni
    };
    function lt(t, e, s, h) {
      if (e && typeof e == "object")
        for (var d in e)
          Fi(t, d, e[d], s);
      else {
        e = nt(e);
        for (var m = 0, b = e.length; m < b; m++)
          Fi(t, e[m], s, h);
      }
      return this;
    }
    var Vt = "_leaflet_events";
    function gt(t, e, s, h) {
      if (arguments.length === 1)
        Vn(t), delete t[Vt];
      else if (e && typeof e == "object")
        for (var d in e)
          Gi(t, d, e[d], s);
      else if (e = nt(e), arguments.length === 2)
        Vn(t, function(P) {
          return V(e, P) !== -1;
        });
      else
        for (var m = 0, b = e.length; m < b; m++)
          Gi(t, e[m], s, h);
      return this;
    }
    function Vn(t, e) {
      for (var s in t[Vt]) {
        var h = s.split(/\d/)[0];
        (!e || e(h)) && Gi(t, h, null, null, s);
      }
    }
    var Hi = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel"
    };
    function Fi(t, e, s, h) {
      var d = e + p(s) + (h ? "_" + p(h) : "");
      if (t[Vt] && t[Vt][d])
        return this;
      var m = function(P) {
        return s.call(h || t, P || window.event);
      }, b = m;
      !rt.touchNative && rt.pointer && e.indexOf("touch") === 0 ? m = ds(t, e, m) : rt.touch && e === "dblclick" ? m = bs(t, m) : "addEventListener" in t ? e === "touchstart" || e === "touchmove" || e === "wheel" || e === "mousewheel" ? t.addEventListener(Hi[e] || e, m, rt.passiveEvents ? { passive: !1 } : !1) : e === "mouseenter" || e === "mouseleave" ? (m = function(P) {
        P = P || window.event, Zi(t, P) && b(P);
      }, t.addEventListener(Hi[e], m, !1)) : t.addEventListener(e, b, !1) : t.attachEvent("on" + e, m), t[Vt] = t[Vt] || {}, t[Vt][d] = m;
    }
    function Gi(t, e, s, h, d) {
      d = d || e + p(s) + (h ? "_" + p(h) : "");
      var m = t[Vt] && t[Vt][d];
      if (!m)
        return this;
      !rt.touchNative && rt.pointer && e.indexOf("touch") === 0 ? fs(t, e, m) : rt.touch && e === "dblclick" ? Ls(t, m) : "removeEventListener" in t ? t.removeEventListener(Hi[e] || e, m, !1) : t.detachEvent("on" + e, m), t[Vt][d] = null;
    }
    function he(t) {
      return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this;
    }
    function ji(t) {
      return Fi(t, "wheel", he), this;
    }
    function Ne(t) {
      return lt(t, "mousedown touchstart dblclick contextmenu", he), t._leaflet_disable_click = !0, this;
    }
    function It(t) {
      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
    }
    function ce(t) {
      return It(t), he(t), this;
    }
    function Wn(t) {
      if (t.composedPath)
        return t.composedPath();
      for (var e = [], s = t.target; s; )
        e.push(s), s = s.parentNode;
      return e;
    }
    function Yn(t, e) {
      if (!e)
        return new E(t.clientX, t.clientY);
      var s = Ni(e), h = s.boundingClientRect;
      return new E(
        // offset.left/top values are in page scale (like clientX/Y),
        // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
        (t.clientX - h.left) / s.x - e.clientLeft,
        (t.clientY - h.top) / s.y - e.clientTop
      );
    }
    var Ts = rt.linux && rt.chrome ? window.devicePixelRatio : rt.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
    function Xn(t) {
      return rt.edge ? t.wheelDeltaY / 2 : (
        // Don't trust window-geometry-based delta
        t.deltaY && t.deltaMode === 0 ? -t.deltaY / Ts : (
          // Pixels
          t.deltaY && t.deltaMode === 1 ? -t.deltaY * 20 : (
            // Lines
            t.deltaY && t.deltaMode === 2 ? -t.deltaY * 60 : (
              // Pages
              t.deltaX || t.deltaZ ? 0 : (
                // Skip horizontal/depth wheel events
                t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : (
                  // Legacy IE pixels
                  t.detail && Math.abs(t.detail) < 32765 ? -t.detail * 20 : (
                    // Legacy Moz lines
                    t.detail ? t.detail / -32765 * 60 : (
                      // Legacy Moz pages
                      0
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    function Zi(t, e) {
      var s = e.relatedTarget;
      if (!s)
        return !0;
      try {
        for (; s && s !== t; )
          s = s.parentNode;
      } catch {
        return !1;
      }
      return s !== t;
    }
    var Es = {
      __proto__: null,
      on: lt,
      off: gt,
      stopPropagation: he,
      disableScrollPropagation: ji,
      disableClickPropagation: Ne,
      preventDefault: It,
      stop: ce,
      getPropagationPath: Wn,
      getMousePosition: Yn,
      getWheelDelta: Xn,
      isExternalTarget: Zi,
      addListener: lt,
      removeListener: gt
    }, $n = $.extend({
      // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
      // Run an animation of a given element to a new position, optionally setting
      // duration in seconds (`0.25` by default) and easing linearity factor (3rd
      // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
      // `0.5` by default).
      run: function(t, e, s, h) {
        this.stop(), this._el = t, this._inProgress = !0, this._duration = s || 0.25, this._easeOutPower = 1 / Math.max(h || 0.5, 0.2), this._startPos = le(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date(), this.fire("start"), this._animate();
      },
      // @method stop()
      // Stops the animation (if currently running).
      stop: function() {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function() {
        this._animId = tt(this._animate, this), this._step();
      },
      _step: function(t) {
        var e = +new Date() - this._startTime, s = this._duration * 1e3;
        e < s ? this._runFrame(this._easeOut(e / s), t) : (this._runFrame(1), this._complete());
      },
      _runFrame: function(t, e) {
        var s = this._startPos.add(this._offset.multiplyBy(t));
        e && s._round(), kt(this._el, s), this.fire("step");
      },
      _complete: function() {
        R(this._animId), this._inProgress = !1, this.fire("end");
      },
      _easeOut: function(t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      }
    }), ut = $.extend({
      options: {
        // @section Map State Options
        // @option crs: CRS = L.CRS.EPSG3857
        // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
        // sure what it means.
        crs: ve,
        // @option center: LatLng = undefined
        // Initial geographic center of the map
        center: void 0,
        // @option zoom: Number = undefined
        // Initial map zoom level
        zoom: void 0,
        // @option minZoom: Number = *
        // Minimum zoom level of the map.
        // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
        // the lowest of their `minZoom` options will be used instead.
        minZoom: void 0,
        // @option maxZoom: Number = *
        // Maximum zoom level of the map.
        // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
        // the highest of their `maxZoom` options will be used instead.
        maxZoom: void 0,
        // @option layers: Layer[] = []
        // Array of layers that will be added to the map initially
        layers: [],
        // @option maxBounds: LatLngBounds = null
        // When this option is set, the map restricts the view to the given
        // geographical bounds, bouncing the user back if the user tries to pan
        // outside the view. To set the restriction dynamically, use
        // [`setMaxBounds`](#map-setmaxbounds) method.
        maxBounds: void 0,
        // @option renderer: Renderer = *
        // The default method for drawing vector layers on the map. `L.SVG`
        // or `L.Canvas` by default depending on browser support.
        renderer: void 0,
        // @section Animation Options
        // @option zoomAnimation: Boolean = true
        // Whether the map zoom animation is enabled. By default it's enabled
        // in all browsers that support CSS3 Transitions except Android.
        zoomAnimation: !0,
        // @option zoomAnimationThreshold: Number = 4
        // Won't animate zoom if the zoom difference exceeds this value.
        zoomAnimationThreshold: 4,
        // @option fadeAnimation: Boolean = true
        // Whether the tile fade animation is enabled. By default it's enabled
        // in all browsers that support CSS3 Transitions except Android.
        fadeAnimation: !0,
        // @option markerZoomAnimation: Boolean = true
        // Whether markers animate their zoom with the zoom animation, if disabled
        // they will disappear for the length of the animation. By default it's
        // enabled in all browsers that support CSS3 Transitions except Android.
        markerZoomAnimation: !0,
        // @option transform3DLimit: Number = 2^23
        // Defines the maximum size of a CSS translation transform. The default
        // value should not be changed unless a web browser positions layers in
        // the wrong place after doing a large `panBy`.
        transform3DLimit: 8388608,
        // Precision limit of a 32-bit float
        // @section Interaction Options
        // @option zoomSnap: Number = 1
        // Forces the map's zoom level to always be a multiple of this, particularly
        // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
        // By default, the zoom level snaps to the nearest integer; lower values
        // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
        // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
        zoomSnap: 1,
        // @option zoomDelta: Number = 1
        // Controls how much the map's zoom level will change after a
        // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
        // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
        // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
        zoomDelta: 1,
        // @option trackResize: Boolean = true
        // Whether the map automatically handles browser window resize to update itself.
        trackResize: !0
      },
      initialize: function(t, e) {
        e = ot(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = c(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== void 0 && this.setView(g(e.center), e.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = Oe && rt.any3d && !rt.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), lt(this._proxy, Gn, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      },
      // @section Methods for modifying map state
      // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) with the given
      // animation options.
      setView: function(t, e, s) {
        if (e = e === void 0 ? this._zoom : this._limitZoom(e), t = this._limitCenter(g(t), e, this.options.maxBounds), s = s || {}, this._stop(), this._loaded && !s.reset && s !== !0) {
          s.animate !== void 0 && (s.zoom = o({ animate: s.animate }, s.zoom), s.pan = o({ animate: s.animate, duration: s.duration }, s.pan));
          var h = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, s.zoom) : this._tryAnimatedPan(t, s.pan);
          if (h)
            return clearTimeout(this._sizeTimer), this;
        }
        return this._resetView(t, e, s.pan && s.pan.noMoveStart), this;
      },
      // @method setZoom(zoom: Number, options?: Zoom/pan options): this
      // Sets the zoom of the map.
      setZoom: function(t, e) {
        return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : (this._zoom = t, this);
      },
      // @method zoomIn(delta?: Number, options?: Zoom options): this
      // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomIn: function(t, e) {
        return t = t || (rt.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
      },
      // @method zoomOut(delta?: Number, options?: Zoom options): this
      // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomOut: function(t, e) {
        return t = t || (rt.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
      },
      // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified geographical point on the map
      // stationary (e.g. used internally for scroll zoom and double-click zoom).
      // @alternative
      // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
      setZoomAround: function(t, e, s) {
        var h = this.getZoomScale(e), d = this.getSize().divideBy(2), m = t instanceof E ? t : this.latLngToContainerPoint(t), b = m.subtract(d).multiplyBy(1 - 1 / h), P = this.containerPointToLatLng(d.add(b));
        return this.setView(P, e, { zoom: s });
      },
      _getBoundsCenterZoom: function(t, e) {
        e = e || {}, t = t.getBounds ? t.getBounds() : et(t);
        var s = k(e.paddingTopLeft || e.padding || [0, 0]), h = k(e.paddingBottomRight || e.padding || [0, 0]), d = this.getBoundsZoom(t, !1, s.add(h));
        if (d = typeof e.maxZoom == "number" ? Math.min(e.maxZoom, d) : d, d === 1 / 0)
          return {
            center: t.getCenter(),
            zoom: d
          };
        var m = h.subtract(s).divideBy(2), b = this.project(t.getSouthWest(), d), P = this.project(t.getNorthEast(), d), D = this.unproject(b.add(P).divideBy(2).add(m), d);
        return {
          center: D,
          zoom: d
        };
      },
      // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets a map view that contains the given geographical bounds with the
      // maximum zoom level possible.
      fitBounds: function(t, e) {
        if (t = et(t), !t.isValid())
          throw new Error("Bounds are not valid.");
        var s = this._getBoundsCenterZoom(t, e);
        return this.setView(s.center, s.zoom, e);
      },
      // @method fitWorld(options?: fitBounds options): this
      // Sets a map view that mostly contains the whole world with the maximum
      // zoom level possible.
      fitWorld: function(t) {
        return this.fitBounds([[-90, -180], [90, 180]], t);
      },
      // @method panTo(latlng: LatLng, options?: Pan options): this
      // Pans the map to a given center.
      panTo: function(t, e) {
        return this.setView(t, this._zoom, { pan: e });
      },
      // @method panBy(offset: Point, options?: Pan options): this
      // Pans the map by a given number of pixels (animated).
      panBy: function(t, e) {
        if (t = k(t).round(), e = e || {}, !t.x && !t.y)
          return this.fire("moveend");
        if (e.animate !== !0 && !this.getSize().contains(t))
          return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
        if (this._panAnim || (this._panAnim = new $n(), this._panAnim.on({
          step: this._onPanTransitionStep,
          end: this._onPanTransitionEnd
        }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
          ht(this._mapPane, "leaflet-pan-anim");
          var s = this._getMapPanePos().subtract(t).round();
          this._panAnim.run(this._mapPane, s, e.duration || 0.25, e.easeLinearity);
        } else
          this._rawPanBy(t), this.fire("move").fire("moveend");
        return this;
      },
      // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) performing a smooth
      // pan-zoom animation.
      flyTo: function(t, e, s) {
        if (s = s || {}, s.animate === !1 || !rt.any3d)
          return this.setView(t, e, s);
        this._stop();
        var h = this.project(this.getCenter()), d = this.project(t), m = this.getSize(), b = this._zoom;
        t = g(t), e = e === void 0 ? b : e;
        var P = Math.max(m.x, m.y), D = P * this.getZoomScale(b, e), U = d.distanceTo(h) || 1, q = 1.42, at = q * q;
        function ct(Pt) {
          var yi = Pt ? -1 : 1, fa = Pt ? D : P, pa = D * D - P * P + yi * at * at * U * U, _a = 2 * fa * at * U, en = pa / _a, Co = Math.sqrt(en * en + 1) - en, ma = Co < 1e-9 ? -18 : Math.log(Co);
          return ma;
        }
        function Ot(Pt) {
          return (Math.exp(Pt) - Math.exp(-Pt)) / 2;
        }
        function St(Pt) {
          return (Math.exp(Pt) + Math.exp(-Pt)) / 2;
        }
        function Ut(Pt) {
          return Ot(Pt) / St(Pt);
        }
        var zt = ct(0);
        function ke(Pt) {
          return P * (St(zt) / St(zt + q * Pt));
        }
        function ha(Pt) {
          return P * (St(zt) * Ut(zt + q * Pt) - Ot(zt)) / at;
        }
        function ca(Pt) {
          return 1 - Math.pow(1 - Pt, 1.5);
        }
        var ua = Date.now(), Po = (ct(1) - zt) / q, da = s.duration ? 1e3 * s.duration : 1e3 * Po * 0.8;
        function Do() {
          var Pt = (Date.now() - ua) / da, yi = ca(Pt) * Po;
          Pt <= 1 ? (this._flyToFrame = tt(Do, this), this._move(
            this.unproject(h.add(d.subtract(h).multiplyBy(ha(yi) / U)), b),
            this.getScaleZoom(P / ke(yi), b),
            { flyTo: !0 }
          )) : this._move(t, e)._moveEnd(!0);
        }
        return this._moveStart(!0, s.noMoveStart), Do.call(this), this;
      },
      // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
      // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
      flyToBounds: function(t, e) {
        var s = this._getBoundsCenterZoom(t, e);
        return this.flyTo(s.center, s.zoom, e);
      },
      // @method setMaxBounds(bounds: LatLngBounds): this
      // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
      setMaxBounds: function(t) {
        return t = et(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
      },
      // @method setMinZoom(zoom: Number): this
      // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
      setMinZoom: function(t) {
        var e = this.options.minZoom;
        return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
      },
      // @method setMaxZoom(zoom: Number): this
      // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
      setMaxZoom: function(t) {
        var e = this.options.maxZoom;
        return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
      },
      // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
      // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
      panInsideBounds: function(t, e) {
        this._enforcingBounds = !0;
        var s = this.getCenter(), h = this._limitCenter(s, this._zoom, et(t));
        return s.equals(h) || this.panTo(h, e), this._enforcingBounds = !1, this;
      },
      // @method panInside(latlng: LatLng, options?: padding options): this
      // Pans the map the minimum amount to make the `latlng` visible. Use
      // padding options to fit the display to more restricted bounds.
      // If `latlng` is already within the (optionally padded) display bounds,
      // the map will not be panned.
      panInside: function(t, e) {
        e = e || {};
        var s = k(e.paddingTopLeft || e.padding || [0, 0]), h = k(e.paddingBottomRight || e.padding || [0, 0]), d = this.project(this.getCenter()), m = this.project(t), b = this.getPixelBounds(), P = A([b.min.add(s), b.max.subtract(h)]), D = P.getSize();
        if (!P.contains(m)) {
          this._enforcingBounds = !0;
          var U = m.subtract(P.getCenter()), q = P.extend(m).getSize().subtract(D);
          d.x += U.x < 0 ? -q.x : q.x, d.y += U.y < 0 ? -q.y : q.y, this.panTo(this.unproject(d), e), this._enforcingBounds = !1;
        }
        return this;
      },
      // @method invalidateSize(options: Zoom/pan options): this
      // Checks if the map container size changed and updates the map if so —
      // call it after you've changed the map size dynamically, also animating
      // pan by default. If `options.pan` is `false`, panning will not occur.
      // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
      // that it doesn't happen often even if the method is called many
      // times in a row.
      // @alternative
      // @method invalidateSize(animate: Boolean): this
      // Checks if the map container size changed and updates the map if so —
      // call it after you've changed the map size dynamically, also animating
      // pan by default.
      invalidateSize: function(t) {
        if (!this._loaded)
          return this;
        t = o({
          animate: !1,
          pan: !0
        }, t === !0 ? { animate: !0 } : t);
        var e = this.getSize();
        this._sizeChanged = !0, this._lastCenter = null;
        var s = this.getSize(), h = e.divideBy(2).round(), d = s.divideBy(2).round(), m = h.subtract(d);
        return !m.x && !m.y ? this : (t.animate && t.pan ? this.panBy(m) : (t.pan && this._rawPanBy(m), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(c(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
          oldSize: e,
          newSize: s
        }));
      },
      // @section Methods for modifying map state
      // @method stop(): this
      // Stops the currently running `panTo` or `flyTo` animation, if any.
      stop: function() {
        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
      },
      // @section Geolocation methods
      // @method locate(options?: Locate options): this
      // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
      // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
      // and optionally sets the map view to the user's location with respect to
      // detection accuracy (or to the world view if geolocation failed).
      // Note that, if your page doesn't use HTTPS, this method will fail in
      // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
      // See `Locate options` for more details.
      locate: function(t) {
        if (t = this._locateOptions = o({
          timeout: 1e4,
          watch: !1
          // setView: false
          // maxZoom: <Number>
          // maximumAge: 0
          // enableHighAccuracy: false
        }, t), !("geolocation" in navigator))
          return this._handleGeolocationError({
            code: 0,
            message: "Geolocation not supported."
          }), this;
        var e = c(this._handleGeolocationResponse, this), s = c(this._handleGeolocationError, this);
        return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, s, t) : navigator.geolocation.getCurrentPosition(e, s, t), this;
      },
      // @method stopLocate(): this
      // Stops watching location previously initiated by `map.locate({watch: true})`
      // and aborts resetting the map view if map.locate was called with
      // `{setView: true}`.
      stopLocate: function() {
        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
      },
      _handleGeolocationError: function(t) {
        if (this._container._leaflet_id) {
          var e = t.code, s = t.message || (e === 1 ? "permission denied" : e === 2 ? "position unavailable" : "timeout");
          this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
            code: e,
            message: "Geolocation error: " + s + "."
          });
        }
      },
      _handleGeolocationResponse: function(t) {
        if (this._container._leaflet_id) {
          var e = t.coords.latitude, s = t.coords.longitude, h = new st(e, s), d = h.toBounds(t.coords.accuracy * 2), m = this._locateOptions;
          if (m.setView) {
            var b = this.getBoundsZoom(d);
            this.setView(h, m.maxZoom ? Math.min(b, m.maxZoom) : b);
          }
          var P = {
            latlng: h,
            bounds: d,
            timestamp: t.timestamp
          };
          for (var D in t.coords)
            typeof t.coords[D] == "number" && (P[D] = t.coords[D]);
          this.fire("locationfound", P);
        }
      },
      // TODO Appropriate docs section?
      // @section Other Methods
      // @method addHandler(name: String, HandlerClass: Function): this
      // Adds a new `Handler` to the map, given its name and constructor function.
      addHandler: function(t, e) {
        if (!e)
          return this;
        var s = this[t] = new e(this);
        return this._handlers.push(s), this.options[t] && s.enable(), this;
      },
      // @method remove(): this
      // Destroys the map and clears all related event listeners.
      remove: function() {
        if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
          throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch {
          this._container._leaflet_id = void 0, this._containerId = void 0;
        }
        this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), Tt(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (R(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
        var t;
        for (t in this._layers)
          this._layers[t].remove();
        for (t in this._panes)
          Tt(this._panes[t]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      },
      // @section Other Methods
      // @method createPane(name: String, container?: HTMLElement): HTMLElement
      // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
      // then returns it. The pane is created as a child of `container`, or
      // as a child of the main map pane if not set.
      createPane: function(t, e) {
        var s = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), h = pt("div", s, e || this._mapPane);
        return t && (this._panes[t] = h), h;
      },
      // @section Methods for Getting Map State
      // @method getCenter(): LatLng
      // Returns the geographical center of the map view
      getCenter: function() {
        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
      },
      // @method getZoom(): Number
      // Returns the current zoom level of the map view
      getZoom: function() {
        return this._zoom;
      },
      // @method getBounds(): LatLngBounds
      // Returns the geographical bounds visible in the current map view
      getBounds: function() {
        var t = this.getPixelBounds(), e = this.unproject(t.getBottomLeft()), s = this.unproject(t.getTopRight());
        return new Q(e, s);
      },
      // @method getMinZoom(): Number
      // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
      getMinZoom: function() {
        return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
      },
      // @method getMaxZoom(): Number
      // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
      getMaxZoom: function() {
        return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
      },
      // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
      // Returns the maximum zoom level on which the given bounds fit to the map
      // view in its entirety. If `inside` (optional) is set to `true`, the method
      // instead returns the minimum zoom level on which the map view fits into
      // the given bounds in its entirety.
      getBoundsZoom: function(t, e, s) {
        t = et(t), s = k(s || [0, 0]);
        var h = this.getZoom() || 0, d = this.getMinZoom(), m = this.getMaxZoom(), b = t.getNorthWest(), P = t.getSouthEast(), D = this.getSize().subtract(s), U = A(this.project(P, h), this.project(b, h)).getSize(), q = rt.any3d ? this.options.zoomSnap : 1, at = D.x / U.x, ct = D.y / U.y, Ot = e ? Math.max(at, ct) : Math.min(at, ct);
        return h = this.getScaleZoom(Ot, h), q && (h = Math.round(h / (q / 100)) * (q / 100), h = e ? Math.ceil(h / q) * q : Math.floor(h / q) * q), Math.max(d, Math.min(m, h));
      },
      // @method getSize(): Point
      // Returns the current size of the map container (in pixels).
      getSize: function() {
        return (!this._size || this._sizeChanged) && (this._size = new E(
          this._container.clientWidth || 0,
          this._container.clientHeight || 0
        ), this._sizeChanged = !1), this._size.clone();
      },
      // @method getPixelBounds(): Bounds
      // Returns the bounds of the current map view in projected pixel
      // coordinates (sometimes useful in layer and overlay implementations).
      getPixelBounds: function(t, e) {
        var s = this._getTopLeftPoint(t, e);
        return new O(s, s.add(this.getSize()));
      },
      // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
      // the map pane? "left point of the map layer" can be confusing, specially
      // since there can be negative offsets.
      // @method getPixelOrigin(): Point
      // Returns the projected pixel coordinates of the top left point of
      // the map layer (useful in custom layer and overlay implementations).
      getPixelOrigin: function() {
        return this._checkIfLoaded(), this._pixelOrigin;
      },
      // @method getPixelWorldBounds(zoom?: Number): Bounds
      // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
      // If `zoom` is omitted, the map's current zoom level is used.
      getPixelWorldBounds: function(t) {
        return this.options.crs.getProjectedBounds(t === void 0 ? this.getZoom() : t);
      },
      // @section Other Methods
      // @method getPane(pane: String|HTMLElement): HTMLElement
      // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
      getPane: function(t) {
        return typeof t == "string" ? this._panes[t] : t;
      },
      // @method getPanes(): Object
      // Returns a plain object containing the names of all [panes](#map-pane) as keys and
      // the panes as values.
      getPanes: function() {
        return this._panes;
      },
      // @method getContainer: HTMLElement
      // Returns the HTML element that contains the map.
      getContainer: function() {
        return this._container;
      },
      // @section Conversion Methods
      // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
      // Returns the scale factor to be applied to a map transition from zoom level
      // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
      getZoomScale: function(t, e) {
        var s = this.options.crs;
        return e = e === void 0 ? this._zoom : e, s.scale(t) / s.scale(e);
      },
      // @method getScaleZoom(scale: Number, fromZoom: Number): Number
      // Returns the zoom level that the map would end up at, if it is at `fromZoom`
      // level and everything is scaled by a factor of `scale`. Inverse of
      // [`getZoomScale`](#map-getZoomScale).
      getScaleZoom: function(t, e) {
        var s = this.options.crs;
        e = e === void 0 ? this._zoom : e;
        var h = s.zoom(t * s.scale(e));
        return isNaN(h) ? 1 / 0 : h;
      },
      // @method project(latlng: LatLng, zoom: Number): Point
      // Projects a geographical coordinate `LatLng` according to the projection
      // of the map's CRS, then scales it according to `zoom` and the CRS's
      // `Transformation`. The result is pixel coordinate relative to
      // the CRS origin.
      project: function(t, e) {
        return e = e === void 0 ? this._zoom : e, this.options.crs.latLngToPoint(g(t), e);
      },
      // @method unproject(point: Point, zoom: Number): LatLng
      // Inverse of [`project`](#map-project).
      unproject: function(t, e) {
        return e = e === void 0 ? this._zoom : e, this.options.crs.pointToLatLng(k(t), e);
      },
      // @method layerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding geographical coordinate (for the current zoom level).
      layerPointToLatLng: function(t) {
        var e = k(t).add(this.getPixelOrigin());
        return this.unproject(e);
      },
      // @method latLngToLayerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the [origin pixel](#map-getpixelorigin).
      latLngToLayerPoint: function(t) {
        var e = this.project(g(t))._round();
        return e._subtract(this.getPixelOrigin());
      },
      // @method wrapLatLng(latlng: LatLng): LatLng
      // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
      // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
      // CRS's bounds.
      // By default this means longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees.
      wrapLatLng: function(t) {
        return this.options.crs.wrapLatLng(g(t));
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring that
      // its center is within the CRS's bounds.
      // By default this means the center longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees, and the majority of the bounds
      // overlaps the CRS's bounds.
      wrapLatLngBounds: function(t) {
        return this.options.crs.wrapLatLngBounds(et(t));
      },
      // @method distance(latlng1: LatLng, latlng2: LatLng): Number
      // Returns the distance between two geographical coordinates according to
      // the map's CRS. By default this measures distance in meters.
      distance: function(t, e) {
        return this.options.crs.distance(g(t), g(e));
      },
      // @method containerPointToLayerPoint(point: Point): Point
      // Given a pixel coordinate relative to the map container, returns the corresponding
      // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
      containerPointToLayerPoint: function(t) {
        return k(t).subtract(this._getMapPanePos());
      },
      // @method layerPointToContainerPoint(point: Point): Point
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding pixel coordinate relative to the map container.
      layerPointToContainerPoint: function(t) {
        return k(t).add(this._getMapPanePos());
      },
      // @method containerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the map container, returns
      // the corresponding geographical coordinate (for the current zoom level).
      containerPointToLatLng: function(t) {
        var e = this.containerPointToLayerPoint(k(t));
        return this.layerPointToLatLng(e);
      },
      // @method latLngToContainerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the map container.
      latLngToContainerPoint: function(t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(g(t)));
      },
      // @method mouseEventToContainerPoint(ev: MouseEvent): Point
      // Given a MouseEvent object, returns the pixel coordinate relative to the
      // map container where the event took place.
      mouseEventToContainerPoint: function(t) {
        return Yn(t, this._container);
      },
      // @method mouseEventToLayerPoint(ev: MouseEvent): Point
      // Given a MouseEvent object, returns the pixel coordinate relative to
      // the [origin pixel](#map-getpixelorigin) where the event took place.
      mouseEventToLayerPoint: function(t) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
      },
      // @method mouseEventToLatLng(ev: MouseEvent): LatLng
      // Given a MouseEvent object, returns geographical coordinate where the
      // event took place.
      mouseEventToLatLng: function(t) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
      },
      // map initialization methods
      _initContainer: function(t) {
        var e = this._container = jn(t);
        if (e) {
          if (e._leaflet_id)
            throw new Error("Map container is already initialized.");
        } else
          throw new Error("Map container not found.");
        lt(e, "scroll", this._onScroll, this), this._containerId = p(e);
      },
      _initLayout: function() {
        var t = this._container;
        this._fadeAnimated = this.options.fadeAnimation && rt.any3d, ht(t, "leaflet-container" + (rt.touch ? " leaflet-touch" : "") + (rt.retina ? " leaflet-retina" : "") + (rt.ielt9 ? " leaflet-oldie" : "") + (rt.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var e = ze(t, "position");
        e !== "absolute" && e !== "relative" && e !== "fixed" && e !== "sticky" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      },
      _initPanes: function() {
        var t = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), kt(this._mapPane, new E(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (ht(t.markerPane, "leaflet-zoom-hide"), ht(t.shadowPane, "leaflet-zoom-hide"));
      },
      // private methods that modify map state
      // @section Map state change events
      _resetView: function(t, e, s) {
        kt(this._mapPane, new E(0, 0));
        var h = !this._loaded;
        this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
        var d = this._zoom !== e;
        this._moveStart(d, s)._move(t, e)._moveEnd(d), this.fire("viewreset"), h && this.fire("load");
      },
      _moveStart: function(t, e) {
        return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
      },
      _move: function(t, e, s, h) {
        e === void 0 && (e = this._zoom);
        var d = this._zoom !== e;
        return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), h ? s && s.pinch && this.fire("zoom", s) : ((d || s && s.pinch) && this.fire("zoom", s), this.fire("move", s)), this;
      },
      _moveEnd: function(t) {
        return t && this.fire("zoomend"), this.fire("moveend");
      },
      _stop: function() {
        return R(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function(t) {
        kt(this._mapPane, this._getMapPanePos().subtract(t));
      },
      _getZoomSpan: function() {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _panInsideMaxBounds: function() {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function() {
        if (!this._loaded)
          throw new Error("Set map center and zoom first.");
      },
      // DOM event handling
      // @section Interaction events
      _initEvents: function(t) {
        this._targets = {}, this._targets[p(this._container)] = this;
        var e = t ? gt : lt;
        e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), rt.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      },
      _onResize: function() {
        R(this._resizeRequest), this._resizeRequest = tt(
          function() {
            this.invalidateSize({ debounceMoveend: !0 });
          },
          this
        );
      },
      _onScroll: function() {
        this._container.scrollTop = 0, this._container.scrollLeft = 0;
      },
      _onMoveEnd: function() {
        var t = this._getMapPanePos();
        Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
      },
      _findEventTargets: function(t, e) {
        for (var s = [], h, d = e === "mouseout" || e === "mouseover", m = t.target || t.srcElement, b = !1; m; ) {
          if (h = this._targets[p(m)], h && (e === "click" || e === "preclick") && this._draggableMoved(h)) {
            b = !0;
            break;
          }
          if (h && h.listens(e, !0) && (d && !Zi(m, t) || (s.push(h), d)) || m === this._container)
            break;
          m = m.parentNode;
        }
        return !s.length && !b && !d && this.listens(e, !0) && (s = [this]), s;
      },
      _isClickDisabled: function(t) {
        for (; t && t !== this._container; ) {
          if (t._leaflet_disable_click)
            return !0;
          t = t.parentNode;
        }
      },
      _handleDOMEvent: function(t) {
        var e = t.target || t.srcElement;
        if (!(!this._loaded || e._leaflet_disable_events || t.type === "click" && this._isClickDisabled(e))) {
          var s = t.type;
          s === "mousedown" && Ui(e), this._fireDOMEvent(t, s);
        }
      },
      _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
      _fireDOMEvent: function(t, e, s) {
        if (t.type === "click") {
          var h = o({}, t);
          h.type = "preclick", this._fireDOMEvent(h, h.type, s);
        }
        var d = this._findEventTargets(t, e);
        if (s) {
          for (var m = [], b = 0; b < s.length; b++)
            s[b].listens(e, !0) && m.push(s[b]);
          d = m.concat(d);
        }
        if (d.length) {
          e === "contextmenu" && It(t);
          var P = d[0], D = {
            originalEvent: t
          };
          if (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup") {
            var U = P.getLatLng && (!P._radius || P._radius <= 10);
            D.containerPoint = U ? this.latLngToContainerPoint(P.getLatLng()) : this.mouseEventToContainerPoint(t), D.layerPoint = this.containerPointToLayerPoint(D.containerPoint), D.latlng = U ? P.getLatLng() : this.layerPointToLatLng(D.layerPoint);
          }
          for (b = 0; b < d.length; b++)
            if (d[b].fire(e, D, !0), D.originalEvent._stopped || d[b].options.bubblingMouseEvents === !1 && V(this._mouseEvents, e) !== -1)
              return;
        }
      },
      _draggableMoved: function(t) {
        return t = t.dragging && t.dragging.enabled() ? t : this, t.dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      },
      _clearHandlers: function() {
        for (var t = 0, e = this._handlers.length; t < e; t++)
          this._handlers[t].disable();
      },
      // @section Other Methods
      // @method whenReady(fn: Function, context?: Object): this
      // Runs the given function `fn` when the map gets initialized with
      // a view (center and zoom) and at least one layer, or immediately
      // if it's already initialized, optionally passing a function context.
      whenReady: function(t, e) {
        return this._loaded ? t.call(e || this, { target: this }) : this.on("load", t, e), this;
      },
      // private methods for getting map state
      _getMapPanePos: function() {
        return le(this._mapPane) || new E(0, 0);
      },
      _moved: function() {
        var t = this._getMapPanePos();
        return t && !t.equals([0, 0]);
      },
      _getTopLeftPoint: function(t, e) {
        var s = t && e !== void 0 ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
        return s.subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function(t, e) {
        var s = this.getSize()._divideBy(2);
        return this.project(t, e)._subtract(s)._add(this._getMapPanePos())._round();
      },
      _latLngToNewLayerPoint: function(t, e, s) {
        var h = this._getNewPixelOrigin(s, e);
        return this.project(t, e)._subtract(h);
      },
      _latLngBoundsToNewLayerBounds: function(t, e, s) {
        var h = this._getNewPixelOrigin(s, e);
        return A([
          this.project(t.getSouthWest(), e)._subtract(h),
          this.project(t.getNorthWest(), e)._subtract(h),
          this.project(t.getSouthEast(), e)._subtract(h),
          this.project(t.getNorthEast(), e)._subtract(h)
        ]);
      },
      // layer point of the current center
      _getCenterLayerPoint: function() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      // offset of the specified place to the current center in pixels
      _getCenterOffset: function(t) {
        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
      },
      // adjust center for view to get inside bounds
      _limitCenter: function(t, e, s) {
        if (!s)
          return t;
        var h = this.project(t, e), d = this.getSize().divideBy(2), m = new O(h.subtract(d), h.add(d)), b = this._getBoundsOffset(m, s, e);
        return Math.abs(b.x) <= 1 && Math.abs(b.y) <= 1 ? t : this.unproject(h.add(b), e);
      },
      // adjust offset for view to get inside bounds
      _limitOffset: function(t, e) {
        if (!e)
          return t;
        var s = this.getPixelBounds(), h = new O(s.min.add(t), s.max.add(t));
        return t.add(this._getBoundsOffset(h, e));
      },
      // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
      _getBoundsOffset: function(t, e, s) {
        var h = A(
          this.project(e.getNorthEast(), s),
          this.project(e.getSouthWest(), s)
        ), d = h.min.subtract(t.min), m = h.max.subtract(t.max), b = this._rebound(d.x, -m.x), P = this._rebound(d.y, -m.y);
        return new E(b, P);
      },
      _rebound: function(t, e) {
        return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
      },
      _limitZoom: function(t) {
        var e = this.getMinZoom(), s = this.getMaxZoom(), h = rt.any3d ? this.options.zoomSnap : 1;
        return h && (t = Math.round(t / h) * h), Math.max(e, Math.min(s, t));
      },
      _onPanTransitionStep: function() {
        this.fire("move");
      },
      _onPanTransitionEnd: function() {
        Mt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function(t, e) {
        var s = this._getCenterOffset(t)._trunc();
        return (e && e.animate) !== !0 && !this.getSize().contains(s) ? !1 : (this.panBy(s, e), !0);
      },
      _createAnimProxy: function() {
        var t = this._proxy = pt("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(t), this.on("zoomanim", function(e) {
          var s = Si, h = this._proxy.style[s];
          ae(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), h === this._proxy.style[s] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function() {
        Tt(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      },
      _animMoveEnd: function() {
        var t = this.getCenter(), e = this.getZoom();
        ae(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
      },
      _catchTransitionEnd: function(t) {
        this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      },
      _tryAnimatedZoom: function(t, e, s) {
        if (this._animatingZoom)
          return !0;
        if (s = s || {}, !this._zoomAnimated || s.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
          return !1;
        var h = this.getZoomScale(e), d = this._getCenterOffset(t)._divideBy(1 - 1 / h);
        return s.animate !== !0 && !this.getSize().contains(d) ? !1 : (tt(function() {
          this._moveStart(!0, s.noMoveStart || !1)._animateZoom(t, e, !0);
        }, this), !0);
      },
      _animateZoom: function(t, e, s, h) {
        this._mapPane && (s && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, ht(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
          center: t,
          zoom: e,
          noUpdate: h
        }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(c(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && Mt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
      }
    });
    function Ms(t, e) {
      return new ut(t, e);
    }
    var Ft = F.extend({
      // @section
      // @aka Control Options
      options: {
        // @option position: String = 'topright'
        // The position of the control (one of the map corners). Possible values are `'topleft'`,
        // `'topright'`, `'bottomleft'` or `'bottomright'`
        position: "topright"
      },
      initialize: function(t) {
        ot(this, t);
      },
      /* @section
       * Classes extending L.Control will inherit the following methods:
       *
       * @method getPosition: string
       * Returns the position of the control.
       */
      getPosition: function() {
        return this.options.position;
      },
      // @method setPosition(position: string): this
      // Sets the position of the control.
      setPosition: function(t) {
        var e = this._map;
        return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this;
      },
      // @method getContainer: HTMLElement
      // Returns the HTMLElement that contains the control.
      getContainer: function() {
        return this._container;
      },
      // @method addTo(map: Map): this
      // Adds the control to the given map.
      addTo: function(t) {
        this.remove(), this._map = t;
        var e = this._container = this.onAdd(t), s = this.getPosition(), h = t._controlCorners[s];
        return ht(e, "leaflet-control"), s.indexOf("bottom") !== -1 ? h.insertBefore(e, h.firstChild) : h.appendChild(e), this._map.on("unload", this.remove, this), this;
      },
      // @method remove: this
      // Removes the control from the map it is currently active on.
      remove: function() {
        return this._map ? (Tt(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
      },
      _refocusOnMap: function(t) {
        this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
      }
    }), He = function(t) {
      return new Ft(t);
    };
    ut.include({
      // @method addControl(control: Control): this
      // Adds the given control to the map
      addControl: function(t) {
        return t.addTo(this), this;
      },
      // @method removeControl(control: Control): this
      // Removes the given control from the map
      removeControl: function(t) {
        return t.remove(), this;
      },
      _initControlPos: function() {
        var t = this._controlCorners = {}, e = "leaflet-", s = this._controlContainer = pt("div", e + "control-container", this._container);
        function h(d, m) {
          var b = e + d + " " + e + m;
          t[d + m] = pt("div", b, s);
        }
        h("top", "left"), h("top", "right"), h("bottom", "left"), h("bottom", "right");
      },
      _clearControlPos: function() {
        for (var t in this._controlCorners)
          Tt(this._controlCorners[t]);
        Tt(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      }
    });
    var qn = Ft.extend({
      // @section
      // @aka Control.Layers options
      options: {
        // @option collapsed: Boolean = true
        // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
        collapsed: !0,
        position: "topright",
        // @option autoZIndex: Boolean = true
        // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
        autoZIndex: !0,
        // @option hideSingleBase: Boolean = false
        // If `true`, the base layers in the control will be hidden when there is only one.
        hideSingleBase: !1,
        // @option sortLayers: Boolean = false
        // Whether to sort the layers. When `false`, layers will keep the order
        // in which they were added to the control.
        sortLayers: !1,
        // @option sortFunction: Function = *
        // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
        // that will be used for sorting the layers, when `sortLayers` is `true`.
        // The function receives both the `L.Layer` instances and their names, as in
        // `sortFunction(layerA, layerB, nameA, nameB)`.
        // By default, it sorts layers alphabetically by their name.
        sortFunction: function(t, e, s, h) {
          return s < h ? -1 : h < s ? 1 : 0;
        }
      },
      initialize: function(t, e, s) {
        ot(this, s), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
        for (var h in t)
          this._addLayer(t[h], h);
        for (h in e)
          this._addLayer(e[h], h, !0);
      },
      onAdd: function(t) {
        this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
        for (var e = 0; e < this._layers.length; e++)
          this._layers[e].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      },
      addTo: function(t) {
        return Ft.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
      },
      onRemove: function() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var t = 0; t < this._layers.length; t++)
          this._layers[t].layer.off("add remove", this._onLayerChange, this);
      },
      // @method addBaseLayer(layer: Layer, name: String): this
      // Adds a base layer (radio button entry) with the given name to the control.
      addBaseLayer: function(t, e) {
        return this._addLayer(t, e), this._map ? this._update() : this;
      },
      // @method addOverlay(layer: Layer, name: String): this
      // Adds an overlay (checkbox entry) with the given name to the control.
      addOverlay: function(t, e) {
        return this._addLayer(t, e, !0), this._map ? this._update() : this;
      },
      // @method removeLayer(layer: Layer): this
      // Remove the given layer from the control.
      removeLayer: function(t) {
        t.off("add remove", this._onLayerChange, this);
        var e = this._getLayer(p(t));
        return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this;
      },
      // @method expand(): this
      // Expand the control container if collapsed.
      expand: function() {
        ht(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var t = this._map.getSize().y - (this._container.offsetTop + 50);
        return t < this._section.clientHeight ? (ht(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : Mt(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      },
      // @method collapse(): this
      // Collapse the control container if expanded.
      collapse: function() {
        return Mt(this._container, "leaflet-control-layers-expanded"), this;
      },
      _initLayout: function() {
        var t = "leaflet-control-layers", e = this._container = pt("div", t), s = this.options.collapsed;
        e.setAttribute("aria-haspopup", !0), Ne(e), ji(e);
        var h = this._section = pt("section", t + "-list");
        s && (this._map.on("click", this.collapse, this), lt(e, {
          mouseenter: this._expandSafely,
          mouseleave: this.collapse
        }, this));
        var d = this._layersLink = pt("a", t + "-toggle", e);
        d.href = "#", d.title = "Layers", d.setAttribute("role", "button"), lt(d, {
          keydown: function(m) {
            m.keyCode === 13 && this._expandSafely();
          },
          // Certain screen readers intercept the key event and instead send a click event
          click: function(m) {
            It(m), this._expandSafely();
          }
        }, this), s || this.expand(), this._baseLayersList = pt("div", t + "-base", h), this._separator = pt("div", t + "-separator", h), this._overlaysList = pt("div", t + "-overlays", h), e.appendChild(h);
      },
      _getLayer: function(t) {
        for (var e = 0; e < this._layers.length; e++)
          if (this._layers[e] && p(this._layers[e].layer) === t)
            return this._layers[e];
      },
      _addLayer: function(t, e, s) {
        this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
          layer: t,
          name: e,
          overlay: s
        }), this.options.sortLayers && this._layers.sort(c(function(h, d) {
          return this.options.sortFunction(h.layer, d.layer, h.name, d.name);
        }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      },
      _update: function() {
        if (!this._container)
          return this;
        ni(this._baseLayersList), ni(this._overlaysList), this._layerControlInputs = [];
        var t, e, s, h, d = 0;
        for (s = 0; s < this._layers.length; s++)
          h = this._layers[s], this._addItem(h), e = e || h.overlay, t = t || !h.overlay, d += h.overlay ? 0 : 1;
        return this.options.hideSingleBase && (t = t && d > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this;
      },
      _onLayerChange: function(t) {
        this._handlingClick || this._update();
        var e = this._getLayer(p(t.target)), s = e.overlay ? t.type === "add" ? "overlayadd" : "overlayremove" : t.type === "add" ? "baselayerchange" : null;
        s && this._map.fire(s, e);
      },
      // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
      _createRadioElement: function(t, e) {
        var s = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>", h = document.createElement("div");
        return h.innerHTML = s, h.firstChild;
      },
      _addItem: function(t) {
        var e = document.createElement("label"), s = this._map.hasLayer(t.layer), h;
        t.overlay ? (h = document.createElement("input"), h.type = "checkbox", h.className = "leaflet-control-layers-selector", h.defaultChecked = s) : h = this._createRadioElement("leaflet-base-layers_" + p(this), s), this._layerControlInputs.push(h), h.layerId = p(t.layer), lt(h, "click", this._onInputClick, this);
        var d = document.createElement("span");
        d.innerHTML = " " + t.name;
        var m = document.createElement("span");
        e.appendChild(m), m.appendChild(h), m.appendChild(d);
        var b = t.overlay ? this._overlaysList : this._baseLayersList;
        return b.appendChild(e), this._checkDisabledLayers(), e;
      },
      _onInputClick: function() {
        if (!this._preventClick) {
          var t = this._layerControlInputs, e, s, h = [], d = [];
          this._handlingClick = !0;
          for (var m = t.length - 1; m >= 0; m--)
            e = t[m], s = this._getLayer(e.layerId).layer, e.checked ? h.push(s) : e.checked || d.push(s);
          for (m = 0; m < d.length; m++)
            this._map.hasLayer(d[m]) && this._map.removeLayer(d[m]);
          for (m = 0; m < h.length; m++)
            this._map.hasLayer(h[m]) || this._map.addLayer(h[m]);
          this._handlingClick = !1, this._refocusOnMap();
        }
      },
      _checkDisabledLayers: function() {
        for (var t = this._layerControlInputs, e, s, h = this._map.getZoom(), d = t.length - 1; d >= 0; d--)
          e = t[d], s = this._getLayer(e.layerId).layer, e.disabled = s.options.minZoom !== void 0 && h < s.options.minZoom || s.options.maxZoom !== void 0 && h > s.options.maxZoom;
      },
      _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expandSafely: function() {
        var t = this._section;
        this._preventClick = !0, lt(t, "click", It), this.expand();
        var e = this;
        setTimeout(function() {
          gt(t, "click", It), e._preventClick = !1;
        });
      }
    }), ks = function(t, e, s) {
      return new qn(t, e, s);
    }, Vi = Ft.extend({
      // @section
      // @aka Control.Zoom options
      options: {
        position: "topleft",
        // @option zoomInText: String = '<span aria-hidden="true">+</span>'
        // The text set on the 'zoom in' button.
        zoomInText: '<span aria-hidden="true">+</span>',
        // @option zoomInTitle: String = 'Zoom in'
        // The title set on the 'zoom in' button.
        zoomInTitle: "Zoom in",
        // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
        // The text set on the 'zoom out' button.
        zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
        // @option zoomOutTitle: String = 'Zoom out'
        // The title set on the 'zoom out' button.
        zoomOutTitle: "Zoom out"
      },
      onAdd: function(t) {
        var e = "leaflet-control-zoom", s = pt("div", e + " leaflet-bar"), h = this.options;
        return this._zoomInButton = this._createButton(
          h.zoomInText,
          h.zoomInTitle,
          e + "-in",
          s,
          this._zoomIn
        ), this._zoomOutButton = this._createButton(
          h.zoomOutText,
          h.zoomOutTitle,
          e + "-out",
          s,
          this._zoomOut
        ), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), s;
      },
      onRemove: function(t) {
        t.off("zoomend zoomlevelschange", this._updateDisabled, this);
      },
      disable: function() {
        return this._disabled = !0, this._updateDisabled(), this;
      },
      enable: function() {
        return this._disabled = !1, this._updateDisabled(), this;
      },
      _zoomIn: function(t) {
        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _zoomOut: function(t) {
        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _createButton: function(t, e, s, h, d) {
        var m = pt("a", s, h);
        return m.innerHTML = t, m.href = "#", m.title = e, m.setAttribute("role", "button"), m.setAttribute("aria-label", e), Ne(m), lt(m, "click", ce), lt(m, "click", d, this), lt(m, "click", this._refocusOnMap, this), m;
      },
      _updateDisabled: function() {
        var t = this._map, e = "leaflet-disabled";
        Mt(this._zoomInButton, e), Mt(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (ht(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (ht(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"));
      }
    });
    ut.mergeOptions({
      zoomControl: !0
    }), ut.addInitHook(function() {
      this.options.zoomControl && (this.zoomControl = new Vi(), this.addControl(this.zoomControl));
    });
    var Ps = function(t) {
      return new Vi(t);
    }, Kn = Ft.extend({
      // @section
      // @aka Control.Scale options
      options: {
        position: "bottomleft",
        // @option maxWidth: Number = 100
        // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
        maxWidth: 100,
        // @option metric: Boolean = True
        // Whether to show the metric scale line (m/km).
        metric: !0,
        // @option imperial: Boolean = True
        // Whether to show the imperial scale line (mi/ft).
        imperial: !0
        // @option updateWhenIdle: Boolean = false
        // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
      },
      onAdd: function(t) {
        var e = "leaflet-control-scale", s = pt("div", e), h = this.options;
        return this._addScales(h, e + "-line", s), t.on(h.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), s;
      },
      onRemove: function(t) {
        t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      },
      _addScales: function(t, e, s) {
        t.metric && (this._mScale = pt("div", e, s)), t.imperial && (this._iScale = pt("div", e, s));
      },
      _update: function() {
        var t = this._map, e = t.getSize().y / 2, s = t.distance(
          t.containerPointToLatLng([0, e]),
          t.containerPointToLatLng([this.options.maxWidth, e])
        );
        this._updateScales(s);
      },
      _updateScales: function(t) {
        this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
      },
      _updateMetric: function(t) {
        var e = this._getRoundNum(t), s = e < 1e3 ? e + " m" : e / 1e3 + " km";
        this._updateScale(this._mScale, s, e / t);
      },
      _updateImperial: function(t) {
        var e = t * 3.2808399, s, h, d;
        e > 5280 ? (s = e / 5280, h = this._getRoundNum(s), this._updateScale(this._iScale, h + " mi", h / s)) : (d = this._getRoundNum(e), this._updateScale(this._iScale, d + " ft", d / e));
      },
      _updateScale: function(t, e, s) {
        t.style.width = Math.round(this.options.maxWidth * s) + "px", t.innerHTML = e;
      },
      _getRoundNum: function(t) {
        var e = Math.pow(10, (Math.floor(t) + "").length - 1), s = t / e;
        return s = s >= 10 ? 10 : s >= 5 ? 5 : s >= 3 ? 3 : s >= 2 ? 2 : 1, e * s;
      }
    }), Ds = function(t) {
      return new Kn(t);
    }, Cs = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Wi = Ft.extend({
      // @section
      // @aka Control.Attribution options
      options: {
        position: "bottomright",
        // @option prefix: String|false = 'Leaflet'
        // The HTML text shown before the attributions. Pass `false` to disable.
        prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (rt.inlineSvg ? Cs + " " : "") + "Leaflet</a>"
      },
      initialize: function(t) {
        ot(this, t), this._attributions = {};
      },
      onAdd: function(t) {
        t.attributionControl = this, this._container = pt("div", "leaflet-control-attribution"), Ne(this._container);
        for (var e in t._layers)
          t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
        return this._update(), t.on("layeradd", this._addAttribution, this), this._container;
      },
      onRemove: function(t) {
        t.off("layeradd", this._addAttribution, this);
      },
      _addAttribution: function(t) {
        t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", function() {
          this.removeAttribution(t.layer.getAttribution());
        }, this));
      },
      // @method setPrefix(prefix: String|false): this
      // The HTML text shown before the attributions. Pass `false` to disable.
      setPrefix: function(t) {
        return this.options.prefix = t, this._update(), this;
      },
      // @method addAttribution(text: String): this
      // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
      addAttribution: function(t) {
        return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this;
      },
      // @method removeAttribution(text: String): this
      // Removes an attribution text.
      removeAttribution: function(t) {
        return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
      },
      _update: function() {
        if (this._map) {
          var t = [];
          for (var e in this._attributions)
            this._attributions[e] && t.push(e);
          var s = [];
          this.options.prefix && s.push(this.options.prefix), t.length && s.push(t.join(", ")), this._container.innerHTML = s.join(' <span aria-hidden="true">|</span> ');
        }
      }
    });
    ut.mergeOptions({
      attributionControl: !0
    }), ut.addInitHook(function() {
      this.options.attributionControl && new Wi().addTo(this);
    });
    var Ss = function(t) {
      return new Wi(t);
    };
    Ft.Layers = qn, Ft.Zoom = Vi, Ft.Scale = Kn, Ft.Attribution = Wi, He.layers = ks, He.zoom = Ps, He.scale = Ds, He.attribution = Ss;
    var Wt = F.extend({
      initialize: function(t) {
        this._map = t;
      },
      // @method enable(): this
      // Enables the handler
      enable: function() {
        return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
      },
      // @method disable(): this
      // Disables the handler
      disable: function() {
        return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
      },
      // @method enabled(): Boolean
      // Returns `true` if the handler is enabled
      enabled: function() {
        return !!this._enabled;
      }
      // @section Extension methods
      // Classes inheriting from `Handler` must implement the two following methods:
      // @method addHooks()
      // Called when the handler is enabled, should add event hooks.
      // @method removeHooks()
      // Called when the handler is disabled, should remove the event hooks added previously.
    });
    Wt.addTo = function(t, e) {
      return t.addHandler(e, this), this;
    };
    var Is = { Events: J }, Jn = rt.touch ? "touchstart mousedown" : "mousedown", ne = $.extend({
      options: {
        // @section
        // @aka Draggable options
        // @option clickTolerance: Number = 3
        // The max number of pixels a user can shift the mouse pointer during a click
        // for it to be considered a valid click (as opposed to a mouse drag).
        clickTolerance: 3
      },
      // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
      // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
      initialize: function(t, e, s, h) {
        ot(this, h), this._element = t, this._dragStartTarget = e || t, this._preventOutline = s;
      },
      // @method enable()
      // Enables the dragging ability
      enable: function() {
        this._enabled || (lt(this._dragStartTarget, Jn, this._onDown, this), this._enabled = !0);
      },
      // @method disable()
      // Disables the dragging ability
      disable: function() {
        this._enabled && (ne._dragging === this && this.finishDrag(!0), gt(this._dragStartTarget, Jn, this._onDown, this), this._enabled = !1, this._moved = !1);
      },
      _onDown: function(t) {
        if (this._enabled && (this._moved = !1, !Ii(this._element, "leaflet-zoom-anim"))) {
          if (t.touches && t.touches.length !== 1) {
            ne._dragging === this && this.finishDrag();
            return;
          }
          if (!(ne._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches) && (ne._dragging = this, this._preventOutline && Ui(this._element), zi(), Re(), !this._moving)) {
            this.fire("down");
            var e = t.touches ? t.touches[0] : t, s = Zn(this._element);
            this._startPoint = new E(e.clientX, e.clientY), this._startPos = le(this._element), this._parentScale = Ni(s);
            var h = t.type === "mousedown";
            lt(document, h ? "mousemove" : "touchmove", this._onMove, this), lt(document, h ? "mouseup" : "touchend touchcancel", this._onUp, this);
          }
        }
      },
      _onMove: function(t) {
        if (this._enabled) {
          if (t.touches && t.touches.length > 1) {
            this._moved = !0;
            return;
          }
          var e = t.touches && t.touches.length === 1 ? t.touches[0] : t, s = new E(e.clientX, e.clientY)._subtract(this._startPoint);
          !s.x && !s.y || Math.abs(s.x) + Math.abs(s.y) < this.options.clickTolerance || (s.x /= this._parentScale.x, s.y /= this._parentScale.y, It(t), this._moved || (this.fire("dragstart"), this._moved = !0, ht(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), ht(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(s), this._moving = !0, this._lastEvent = t, this._updatePosition());
        }
      },
      _updatePosition: function() {
        var t = { originalEvent: this._lastEvent };
        this.fire("predrag", t), kt(this._element, this._newPos), this.fire("drag", t);
      },
      _onUp: function() {
        this._enabled && this.finishDrag();
      },
      finishDrag: function(t) {
        Mt(document.body, "leaflet-dragging"), this._lastTarget && (Mt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), gt(document, "mousemove touchmove", this._onMove, this), gt(document, "mouseup touchend touchcancel", this._onUp, this), Ri(), Be();
        var e = this._moved && this._moving;
        this._moving = !1, ne._dragging = !1, e && this.fire("dragend", {
          noInertia: t,
          distance: this._newPos.distanceTo(this._startPos)
        });
      }
    });
    function Qn(t, e, s) {
      var h, d = [1, 4, 2, 8], m, b, P, D, U, q, at, ct;
      for (m = 0, q = t.length; m < q; m++)
        t[m]._code = ue(t[m], e);
      for (P = 0; P < 4; P++) {
        for (at = d[P], h = [], m = 0, q = t.length, b = q - 1; m < q; b = m++)
          D = t[m], U = t[b], D._code & at ? U._code & at || (ct = li(U, D, at, e, s), ct._code = ue(ct, e), h.push(ct)) : (U._code & at && (ct = li(U, D, at, e, s), ct._code = ue(ct, e), h.push(ct)), h.push(D));
        t = h;
      }
      return t;
    }
    function to(t, e) {
      var s, h, d, m, b, P, D, U, q;
      if (!t || t.length === 0)
        throw new Error("latlngs not passed");
      Bt(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
      var at = g([0, 0]), ct = et(t), Ot = ct.getNorthWest().distanceTo(ct.getSouthWest()) * ct.getNorthEast().distanceTo(ct.getNorthWest());
      Ot < 1700 && (at = Yi(t));
      var St = t.length, Ut = [];
      for (s = 0; s < St; s++) {
        var zt = g(t[s]);
        Ut.push(e.project(g([zt.lat - at.lat, zt.lng - at.lng])));
      }
      for (P = D = U = 0, s = 0, h = St - 1; s < St; h = s++)
        d = Ut[s], m = Ut[h], b = d.y * m.x - m.y * d.x, D += (d.x + m.x) * b, U += (d.y + m.y) * b, P += b * 3;
      P === 0 ? q = Ut[0] : q = [D / P, U / P];
      var ke = e.unproject(k(q));
      return g([ke.lat + at.lat, ke.lng + at.lng]);
    }
    function Yi(t) {
      for (var e = 0, s = 0, h = 0, d = 0; d < t.length; d++) {
        var m = g(t[d]);
        e += m.lat, s += m.lng, h++;
      }
      return g([e / h, s / h]);
    }
    var As = {
      __proto__: null,
      clipPolygon: Qn,
      polygonCenter: to,
      centroid: Yi
    };
    function eo(t, e) {
      if (!e || !t.length)
        return t.slice();
      var s = e * e;
      return t = Rs(t, s), t = zs(t, s), t;
    }
    function io(t, e, s) {
      return Math.sqrt(Fe(t, e, s, !0));
    }
    function Os(t, e, s) {
      return Fe(t, e, s);
    }
    function zs(t, e) {
      var s = t.length, h = typeof Uint8Array != void 0 + "" ? Uint8Array : Array, d = new h(s);
      d[0] = d[s - 1] = 1, Xi(t, d, e, 0, s - 1);
      var m, b = [];
      for (m = 0; m < s; m++)
        d[m] && b.push(t[m]);
      return b;
    }
    function Xi(t, e, s, h, d) {
      var m = 0, b, P, D;
      for (P = h + 1; P <= d - 1; P++)
        D = Fe(t[P], t[h], t[d], !0), D > m && (b = P, m = D);
      m > s && (e[b] = 1, Xi(t, e, s, h, b), Xi(t, e, s, b, d));
    }
    function Rs(t, e) {
      for (var s = [t[0]], h = 1, d = 0, m = t.length; h < m; h++)
        Bs(t[h], t[d]) > e && (s.push(t[h]), d = h);
      return d < m - 1 && s.push(t[m - 1]), s;
    }
    var no;
    function oo(t, e, s, h, d) {
      var m = h ? no : ue(t, s), b = ue(e, s), P, D, U;
      for (no = b; ; ) {
        if (!(m | b))
          return [t, e];
        if (m & b)
          return !1;
        P = m || b, D = li(t, e, P, s, d), U = ue(D, s), P === m ? (t = D, m = U) : (e = D, b = U);
      }
    }
    function li(t, e, s, h, d) {
      var m = e.x - t.x, b = e.y - t.y, P = h.min, D = h.max, U, q;
      return s & 8 ? (U = t.x + m * (D.y - t.y) / b, q = D.y) : s & 4 ? (U = t.x + m * (P.y - t.y) / b, q = P.y) : s & 2 ? (U = D.x, q = t.y + b * (D.x - t.x) / m) : s & 1 && (U = P.x, q = t.y + b * (P.x - t.x) / m), new E(U, q, d);
    }
    function ue(t, e) {
      var s = 0;
      return t.x < e.min.x ? s |= 1 : t.x > e.max.x && (s |= 2), t.y < e.min.y ? s |= 4 : t.y > e.max.y && (s |= 8), s;
    }
    function Bs(t, e) {
      var s = e.x - t.x, h = e.y - t.y;
      return s * s + h * h;
    }
    function Fe(t, e, s, h) {
      var d = e.x, m = e.y, b = s.x - d, P = s.y - m, D = b * b + P * P, U;
      return D > 0 && (U = ((t.x - d) * b + (t.y - m) * P) / D, U > 1 ? (d = s.x, m = s.y) : U > 0 && (d += b * U, m += P * U)), b = t.x - d, P = t.y - m, h ? b * b + P * P : new E(d, m);
    }
    function Bt(t) {
      return !z(t[0]) || typeof t[0][0] != "object" && typeof t[0][0] < "u";
    }
    function ro(t) {
      return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Bt(t);
    }
    function so(t, e) {
      var s, h, d, m, b, P, D, U;
      if (!t || t.length === 0)
        throw new Error("latlngs not passed");
      Bt(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
      var q = g([0, 0]), at = et(t), ct = at.getNorthWest().distanceTo(at.getSouthWest()) * at.getNorthEast().distanceTo(at.getNorthWest());
      ct < 1700 && (q = Yi(t));
      var Ot = t.length, St = [];
      for (s = 0; s < Ot; s++) {
        var Ut = g(t[s]);
        St.push(e.project(g([Ut.lat - q.lat, Ut.lng - q.lng])));
      }
      for (s = 0, h = 0; s < Ot - 1; s++)
        h += St[s].distanceTo(St[s + 1]) / 2;
      if (h === 0)
        U = St[0];
      else
        for (s = 0, m = 0; s < Ot - 1; s++)
          if (b = St[s], P = St[s + 1], d = b.distanceTo(P), m += d, m > h) {
            D = (m - h) / d, U = [
              P.x - D * (P.x - b.x),
              P.y - D * (P.y - b.y)
            ];
            break;
          }
      var zt = e.unproject(k(U));
      return g([zt.lat + q.lat, zt.lng + q.lng]);
    }
    var Us = {
      __proto__: null,
      simplify: eo,
      pointToSegmentDistance: io,
      closestPointOnSegment: Os,
      clipSegment: oo,
      _getEdgeIntersection: li,
      _getBitCode: ue,
      _sqClosestPointOnSegment: Fe,
      isFlat: Bt,
      _flat: ro,
      polylineCenter: so
    }, $i = {
      project: function(t) {
        return new E(t.lng, t.lat);
      },
      unproject: function(t) {
        return new st(t.y, t.x);
      },
      bounds: new O([-180, -90], [180, 90])
    }, qi = {
      R: 6378137,
      R_MINOR: 6356752314245179e-9,
      bounds: new O([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
      project: function(t) {
        var e = Math.PI / 180, s = this.R, h = t.lat * e, d = this.R_MINOR / s, m = Math.sqrt(1 - d * d), b = m * Math.sin(h), P = Math.tan(Math.PI / 4 - h / 2) / Math.pow((1 - b) / (1 + b), m / 2);
        return h = -s * Math.log(Math.max(P, 1e-10)), new E(t.lng * e * s, h);
      },
      unproject: function(t) {
        for (var e = 180 / Math.PI, s = this.R, h = this.R_MINOR / s, d = Math.sqrt(1 - h * h), m = Math.exp(-t.y / s), b = Math.PI / 2 - 2 * Math.atan(m), P = 0, D = 0.1, U; P < 15 && Math.abs(D) > 1e-7; P++)
          U = d * Math.sin(b), U = Math.pow((1 - U) / (1 + U), d / 2), D = Math.PI / 2 - 2 * Math.atan(m * U) - b, b += D;
        return new st(b * e, t.x * e / s);
      }
    }, Ns = {
      __proto__: null,
      LonLat: $i,
      Mercator: qi,
      SphericalMercator: xt
    }, Hs = o({}, Lt, {
      code: "EPSG:3395",
      projection: qi,
      transformation: function() {
        var t = 0.5 / (Math.PI * qi.R);
        return Dt(t, 0.5, -t, 0.5);
      }()
    }), ao = o({}, Lt, {
      code: "EPSG:4326",
      projection: $i,
      transformation: Dt(1 / 180, 1, -1 / 180, 0.5)
    }), Fs = o({}, yt, {
      projection: $i,
      transformation: Dt(1, 0, -1, 0),
      scale: function(t) {
        return Math.pow(2, t);
      },
      zoom: function(t) {
        return Math.log(t) / Math.LN2;
      },
      distance: function(t, e) {
        var s = e.lng - t.lng, h = e.lat - t.lat;
        return Math.sqrt(s * s + h * h);
      },
      infinite: !0
    });
    yt.Earth = Lt, yt.EPSG3395 = Hs, yt.EPSG3857 = ve, yt.EPSG900913 = _t, yt.EPSG4326 = ao, yt.Simple = Fs;
    var Gt = $.extend({
      // Classes extending `L.Layer` will inherit the following options:
      options: {
        // @option pane: String = 'overlayPane'
        // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
        pane: "overlayPane",
        // @option attribution: String = null
        // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
        attribution: null,
        bubblingMouseEvents: !0
      },
      /* @section
       * Classes extending `L.Layer` will inherit the following methods:
       *
       * @method addTo(map: Map|LayerGroup): this
       * Adds the layer to the given map or layer group.
       */
      addTo: function(t) {
        return t.addLayer(this), this;
      },
      // @method remove: this
      // Removes the layer from the map it is currently active on.
      remove: function() {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      // @method removeFrom(map: Map): this
      // Removes the layer from the given map
      //
      // @alternative
      // @method removeFrom(group: LayerGroup): this
      // Removes the layer from the given `LayerGroup`
      removeFrom: function(t) {
        return t && t.removeLayer(this), this;
      },
      // @method getPane(name? : String): HTMLElement
      // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
      getPane: function(t) {
        return this._map.getPane(t ? this.options[t] || t : this.options.pane);
      },
      addInteractiveTarget: function(t) {
        return this._map._targets[p(t)] = this, this;
      },
      removeInteractiveTarget: function(t) {
        return delete this._map._targets[p(t)], this;
      },
      // @method getAttribution: String
      // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
      getAttribution: function() {
        return this.options.attribution;
      },
      _layerAdd: function(t) {
        var e = t.target;
        if (e.hasLayer(this)) {
          if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
            var s = this.getEvents();
            e.on(s, this), this.once("remove", function() {
              e.off(s, this);
            }, this);
          }
          this.onAdd(e), this.fire("add"), e.fire("layeradd", { layer: this });
        }
      }
    });
    ut.include({
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the map
      addLayer: function(t) {
        if (!t._layerAdd)
          throw new Error("The provided object is not a Layer.");
        var e = p(t);
        return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this);
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the map.
      removeLayer: function(t) {
        var e = p(t);
        return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the map
      hasLayer: function(t) {
        return p(t) in this._layers;
      },
      /* @method eachLayer(fn: Function, context?: Object): this
       * Iterates over the layers of the map, optionally specifying context of the iterator function.
       * ```
       * map.eachLayer(function(layer){
       *     layer.bindPopup('Hello');
       * });
       * ```
       */
      eachLayer: function(t, e) {
        for (var s in this._layers)
          t.call(e, this._layers[s]);
        return this;
      },
      _addLayers: function(t) {
        t = t ? z(t) ? t : [t] : [];
        for (var e = 0, s = t.length; e < s; e++)
          this.addLayer(t[e]);
      },
      _addZoomLimit: function(t) {
        (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) && (this._zoomBoundLayers[p(t)] = t, this._updateZoomLevels());
      },
      _removeZoomLimit: function(t) {
        var e = p(t);
        this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels());
      },
      _updateZoomLevels: function() {
        var t = 1 / 0, e = -1 / 0, s = this._getZoomSpan();
        for (var h in this._zoomBoundLayers) {
          var d = this._zoomBoundLayers[h].options;
          t = d.minZoom === void 0 ? t : Math.min(t, d.minZoom), e = d.maxZoom === void 0 ? e : Math.max(e, d.maxZoom);
        }
        this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, s !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      }
    });
    var xe = Gt.extend({
      initialize: function(t, e) {
        ot(this, e), this._layers = {};
        var s, h;
        if (t)
          for (s = 0, h = t.length; s < h; s++)
            this.addLayer(t[s]);
      },
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the group.
      addLayer: function(t) {
        var e = this.getLayerId(t);
        return this._layers[e] = t, this._map && this._map.addLayer(t), this;
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the group.
      // @alternative
      // @method removeLayer(id: Number): this
      // Removes the layer with the given internal ID from the group.
      removeLayer: function(t) {
        var e = t in this._layers ? t : this.getLayerId(t);
        return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the group.
      // @alternative
      // @method hasLayer(id: Number): Boolean
      // Returns `true` if the given internal ID is currently added to the group.
      hasLayer: function(t) {
        var e = typeof t == "number" ? t : this.getLayerId(t);
        return e in this._layers;
      },
      // @method clearLayers(): this
      // Removes all the layers from the group.
      clearLayers: function() {
        return this.eachLayer(this.removeLayer, this);
      },
      // @method invoke(methodName: String, …): this
      // Calls `methodName` on every layer contained in this group, passing any
      // additional parameters. Has no effect if the layers contained do not
      // implement `methodName`.
      invoke: function(t) {
        var e = Array.prototype.slice.call(arguments, 1), s, h;
        for (s in this._layers)
          h = this._layers[s], h[t] && h[t].apply(h, e);
        return this;
      },
      onAdd: function(t) {
        this.eachLayer(t.addLayer, t);
      },
      onRemove: function(t) {
        this.eachLayer(t.removeLayer, t);
      },
      // @method eachLayer(fn: Function, context?: Object): this
      // Iterates over the layers of the group, optionally specifying context of the iterator function.
      // ```js
      // group.eachLayer(function (layer) {
      // 	layer.bindPopup('Hello');
      // });
      // ```
      eachLayer: function(t, e) {
        for (var s in this._layers)
          t.call(e, this._layers[s]);
        return this;
      },
      // @method getLayer(id: Number): Layer
      // Returns the layer with the given internal ID.
      getLayer: function(t) {
        return this._layers[t];
      },
      // @method getLayers(): Layer[]
      // Returns an array of all the layers added to the group.
      getLayers: function() {
        var t = [];
        return this.eachLayer(t.push, t), t;
      },
      // @method setZIndex(zIndex: Number): this
      // Calls `setZIndex` on every layer contained in this group, passing the z-index.
      setZIndex: function(t) {
        return this.invoke("setZIndex", t);
      },
      // @method getLayerId(layer: Layer): Number
      // Returns the internal ID for a layer
      getLayerId: function(t) {
        return p(t);
      }
    }), Gs = function(t, e) {
      return new xe(t, e);
    }, qt = xe.extend({
      addLayer: function(t) {
        return this.hasLayer(t) ? this : (t.addEventParent(this), xe.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
      },
      removeLayer: function(t) {
        return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), xe.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
      },
      // @method setStyle(style: Path options): this
      // Sets the given path options to each layer of the group that has a `setStyle` method.
      setStyle: function(t) {
        return this.invoke("setStyle", t);
      },
      // @method bringToFront(): this
      // Brings the layer group to the top of all other layers
      bringToFront: function() {
        return this.invoke("bringToFront");
      },
      // @method bringToBack(): this
      // Brings the layer group to the back of all other layers
      bringToBack: function() {
        return this.invoke("bringToBack");
      },
      // @method getBounds(): LatLngBounds
      // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
      getBounds: function() {
        var t = new Q();
        for (var e in this._layers) {
          var s = this._layers[e];
          t.extend(s.getBounds ? s.getBounds() : s.getLatLng());
        }
        return t;
      }
    }), js = function(t, e) {
      return new qt(t, e);
    }, we = F.extend({
      /* @section
       * @aka Icon options
       *
       * @option iconUrl: String = null
       * **(required)** The URL to the icon image (absolute or relative to your script path).
       *
       * @option iconRetinaUrl: String = null
       * The URL to a retina sized version of the icon image (absolute or relative to your
       * script path). Used for Retina screen devices.
       *
       * @option iconSize: Point = null
       * Size of the icon image in pixels.
       *
       * @option iconAnchor: Point = null
       * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
       * will be aligned so that this point is at the marker's geographical location. Centered
       * by default if size is specified, also can be set in CSS with negative margins.
       *
       * @option popupAnchor: Point = [0, 0]
       * The coordinates of the point from which popups will "open", relative to the icon anchor.
       *
       * @option tooltipAnchor: Point = [0, 0]
       * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
       *
       * @option shadowUrl: String = null
       * The URL to the icon shadow image. If not specified, no shadow image will be created.
       *
       * @option shadowRetinaUrl: String = null
       *
       * @option shadowSize: Point = null
       * Size of the shadow image in pixels.
       *
       * @option shadowAnchor: Point = null
       * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
       * as iconAnchor if not specified).
       *
       * @option className: String = ''
       * A custom class name to assign to both icon and shadow images. Empty by default.
       */
      options: {
        popupAnchor: [0, 0],
        tooltipAnchor: [0, 0],
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the tiles.
        // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1
      },
      initialize: function(t) {
        ot(this, t);
      },
      // @method createIcon(oldIcon?: HTMLElement): HTMLElement
      // Called internally when the icon has to be shown, returns a `<img>` HTML element
      // styled according to the options.
      createIcon: function(t) {
        return this._createIcon("icon", t);
      },
      // @method createShadow(oldIcon?: HTMLElement): HTMLElement
      // As `createIcon`, but for the shadow beneath it.
      createShadow: function(t) {
        return this._createIcon("shadow", t);
      },
      _createIcon: function(t, e) {
        var s = this._getIconUrl(t);
        if (!s) {
          if (t === "icon")
            throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var h = this._createImg(s, e && e.tagName === "IMG" ? e : null);
        return this._setIconStyles(h, t), (this.options.crossOrigin || this.options.crossOrigin === "") && (h.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), h;
      },
      _setIconStyles: function(t, e) {
        var s = this.options, h = s[e + "Size"];
        typeof h == "number" && (h = [h, h]);
        var d = k(h), m = k(e === "shadow" && s.shadowAnchor || s.iconAnchor || d && d.divideBy(2, !0));
        t.className = "leaflet-marker-" + e + " " + (s.className || ""), m && (t.style.marginLeft = -m.x + "px", t.style.marginTop = -m.y + "px"), d && (t.style.width = d.x + "px", t.style.height = d.y + "px");
      },
      _createImg: function(t, e) {
        return e = e || document.createElement("img"), e.src = t, e;
      },
      _getIconUrl: function(t) {
        return rt.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
      }
    });
    function Zs(t) {
      return new we(t);
    }
    var Ge = we.extend({
      options: {
        iconUrl: "marker-icon.png",
        iconRetinaUrl: "marker-icon-2x.png",
        shadowUrl: "marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      },
      _getIconUrl: function(t) {
        return typeof Ge.imagePath != "string" && (Ge.imagePath = this._detectIconPath()), (this.options.imagePath || Ge.imagePath) + we.prototype._getIconUrl.call(this, t);
      },
      _stripUrl: function(t) {
        var e = function(s, h, d) {
          var m = h.exec(s);
          return m && m[d];
        };
        return t = e(t, /^url\((['"])?(.+)\1\)$/, 2), t && e(t, /^(.*)marker-icon\.png$/, 1);
      },
      _detectIconPath: function() {
        var t = pt("div", "leaflet-default-icon-path", document.body), e = ze(t, "background-image") || ze(t, "backgroundImage");
        if (document.body.removeChild(t), e = this._stripUrl(e), e)
          return e;
        var s = document.querySelector('link[href$="leaflet.css"]');
        return s ? s.href.substring(0, s.href.length - 11 - 1) : "";
      }
    }), lo = Wt.extend({
      initialize: function(t) {
        this._marker = t;
      },
      addHooks: function() {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new ne(t, t, !0)), this._draggable.on({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).enable(), ht(t, "leaflet-marker-draggable");
      },
      removeHooks: function() {
        this._draggable.off({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).disable(), this._marker._icon && Mt(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function(t) {
        var e = this._marker, s = e._map, h = this._marker.options.autoPanSpeed, d = this._marker.options.autoPanPadding, m = le(e._icon), b = s.getPixelBounds(), P = s.getPixelOrigin(), D = A(
          b.min._subtract(P).add(d),
          b.max._subtract(P).subtract(d)
        );
        if (!D.contains(m)) {
          var U = k(
            (Math.max(D.max.x, m.x) - D.max.x) / (b.max.x - D.max.x) - (Math.min(D.min.x, m.x) - D.min.x) / (b.min.x - D.min.x),
            (Math.max(D.max.y, m.y) - D.max.y) / (b.max.y - D.max.y) - (Math.min(D.min.y, m.y) - D.min.y) / (b.min.y - D.min.y)
          ).multiplyBy(h);
          s.panBy(U, { animate: !1 }), this._draggable._newPos._add(U), this._draggable._startPos._add(U), kt(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = tt(this._adjustPan.bind(this, t));
        }
      },
      _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      },
      _onPreDrag: function(t) {
        this._marker.options.autoPan && (R(this._panRequest), this._panRequest = tt(this._adjustPan.bind(this, t)));
      },
      _onDrag: function(t) {
        var e = this._marker, s = e._shadow, h = le(e._icon), d = e._map.layerPointToLatLng(h);
        s && kt(s, h), e._latlng = d, t.latlng = d, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
      },
      _onDragEnd: function(t) {
        R(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
      }
    }), hi = Gt.extend({
      // @section
      // @aka Marker options
      options: {
        // @option icon: Icon = *
        // Icon instance to use for rendering the marker.
        // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
        // If not specified, a common instance of `L.Icon.Default` is used.
        icon: new Ge(),
        // Option inherited from "Interactive layer" abstract class
        interactive: !0,
        // @option keyboard: Boolean = true
        // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
        keyboard: !0,
        // @option title: String = ''
        // Text for the browser tooltip that appear on marker hover (no tooltip by default).
        // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
        title: "",
        // @option alt: String = 'Marker'
        // Text for the `alt` attribute of the icon image.
        // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
        alt: "Marker",
        // @option zIndexOffset: Number = 0
        // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
        zIndexOffset: 0,
        // @option opacity: Number = 1.0
        // The opacity of the marker.
        opacity: 1,
        // @option riseOnHover: Boolean = false
        // If `true`, the marker will get on top of others when you hover the mouse over it.
        riseOnHover: !1,
        // @option riseOffset: Number = 250
        // The z-index offset used for the `riseOnHover` feature.
        riseOffset: 250,
        // @option pane: String = 'markerPane'
        // `Map pane` where the markers icon will be added.
        pane: "markerPane",
        // @option shadowPane: String = 'shadowPane'
        // `Map pane` where the markers shadow will be added.
        shadowPane: "shadowPane",
        // @option bubblingMouseEvents: Boolean = false
        // When `true`, a mouse event on this marker will trigger the same event on the map
        // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
        bubblingMouseEvents: !1,
        // @option autoPanOnFocus: Boolean = true
        // When `true`, the map will pan whenever the marker is focused (via
        // e.g. pressing `tab` on the keyboard) to ensure the marker is
        // visible within the map's bounds
        autoPanOnFocus: !0,
        // @section Draggable marker options
        // @option draggable: Boolean = false
        // Whether the marker is draggable with mouse/touch or not.
        draggable: !1,
        // @option autoPan: Boolean = false
        // Whether to pan the map when dragging this marker near its edge or not.
        autoPan: !1,
        // @option autoPanPadding: Point = Point(50, 50)
        // Distance (in pixels to the left/right and to the top/bottom) of the
        // map edge to start panning the map.
        autoPanPadding: [50, 50],
        // @option autoPanSpeed: Number = 10
        // Number of pixels the map should pan by.
        autoPanSpeed: 10
      },
      /* @section
       *
       * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
       */
      initialize: function(t, e) {
        ot(this, e), this._latlng = g(t);
      },
      onAdd: function(t) {
        this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
      },
      onRemove: function(t) {
        this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
      },
      getEvents: function() {
        return {
          zoom: this.update,
          viewreset: this.update
        };
      },
      // @method getLatLng: LatLng
      // Returns the current geographical position of the marker.
      getLatLng: function() {
        return this._latlng;
      },
      // @method setLatLng(latlng: LatLng): this
      // Changes the marker position to the given point.
      setLatLng: function(t) {
        var e = this._latlng;
        return this._latlng = g(t), this.update(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
      },
      // @method setZIndexOffset(offset: Number): this
      // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
      setZIndexOffset: function(t) {
        return this.options.zIndexOffset = t, this.update();
      },
      // @method getIcon: Icon
      // Returns the current icon used by the marker
      getIcon: function() {
        return this.options.icon;
      },
      // @method setIcon(icon: Icon): this
      // Changes the marker icon.
      setIcon: function(t) {
        return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
      },
      getElement: function() {
        return this._icon;
      },
      update: function() {
        if (this._icon && this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(t);
        }
        return this;
      },
      _initIcon: function() {
        var t = this.options, e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), s = t.icon.createIcon(this._icon), h = !1;
        s !== this._icon && (this._icon && this._removeIcon(), h = !0, t.title && (s.title = t.title), s.tagName === "IMG" && (s.alt = t.alt || "")), ht(s, e), t.keyboard && (s.tabIndex = "0", s.setAttribute("role", "button")), this._icon = s, t.riseOnHover && this.on({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && lt(s, "focus", this._panOnFocus, this);
        var d = t.icon.createShadow(this._shadow), m = !1;
        d !== this._shadow && (this._removeShadow(), m = !0), d && (ht(d, e), d.alt = ""), this._shadow = d, t.opacity < 1 && this._updateOpacity(), h && this.getPane().appendChild(this._icon), this._initInteraction(), d && m && this.getPane(t.shadowPane).appendChild(this._shadow);
      },
      _removeIcon: function() {
        this.options.riseOnHover && this.off({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && gt(this._icon, "focus", this._panOnFocus, this), Tt(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      },
      _removeShadow: function() {
        this._shadow && Tt(this._shadow), this._shadow = null;
      },
      _setPos: function(t) {
        this._icon && kt(this._icon, t), this._shadow && kt(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
      },
      _updateZIndex: function(t) {
        this._icon && (this._icon.style.zIndex = this._zIndex + t);
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
        this._setPos(e);
      },
      _initInteraction: function() {
        if (this.options.interactive && (ht(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), lo)) {
          var t = this.options.draggable;
          this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new lo(this), t && this.dragging.enable();
        }
      },
      // @method setOpacity(opacity: Number): this
      // Changes the opacity of the marker.
      setOpacity: function(t) {
        return this.options.opacity = t, this._map && this._updateOpacity(), this;
      },
      _updateOpacity: function() {
        var t = this.options.opacity;
        this._icon && Rt(this._icon, t), this._shadow && Rt(this._shadow, t);
      },
      _bringToFront: function() {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function() {
        this._updateZIndex(0);
      },
      _panOnFocus: function() {
        var t = this._map;
        if (t) {
          var e = this.options.icon.options, s = e.iconSize ? k(e.iconSize) : k(0, 0), h = e.iconAnchor ? k(e.iconAnchor) : k(0, 0);
          t.panInside(this._latlng, {
            paddingTopLeft: h,
            paddingBottomRight: s.subtract(h)
          });
        }
      },
      _getPopupAnchor: function() {
        return this.options.icon.options.popupAnchor;
      },
      _getTooltipAnchor: function() {
        return this.options.icon.options.tooltipAnchor;
      }
    });
    function Vs(t, e) {
      return new hi(t, e);
    }
    var oe = Gt.extend({
      // @section
      // @aka Path options
      options: {
        // @option stroke: Boolean = true
        // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
        stroke: !0,
        // @option color: String = '#3388ff'
        // Stroke color
        color: "#3388ff",
        // @option weight: Number = 3
        // Stroke width in pixels
        weight: 3,
        // @option opacity: Number = 1.0
        // Stroke opacity
        opacity: 1,
        // @option lineCap: String= 'round'
        // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
        lineCap: "round",
        // @option lineJoin: String = 'round'
        // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
        lineJoin: "round",
        // @option dashArray: String = null
        // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
        dashArray: null,
        // @option dashOffset: String = null
        // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
        dashOffset: null,
        // @option fill: Boolean = depends
        // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
        fill: !1,
        // @option fillColor: String = *
        // Fill color. Defaults to the value of the [`color`](#path-color) option
        fillColor: null,
        // @option fillOpacity: Number = 0.2
        // Fill opacity.
        fillOpacity: 0.2,
        // @option fillRule: String = 'evenodd'
        // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
        fillRule: "evenodd",
        // className: '',
        // Option inherited from "Interactive layer" abstract class
        interactive: !0,
        // @option bubblingMouseEvents: Boolean = true
        // When `true`, a mouse event on this path will trigger the same event on the map
        // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
        bubblingMouseEvents: !0
      },
      beforeAdd: function(t) {
        this._renderer = t.getRenderer(this);
      },
      onAdd: function() {
        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
      },
      onRemove: function() {
        this._renderer._removePath(this);
      },
      // @method redraw(): this
      // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
      redraw: function() {
        return this._map && this._renderer._updatePath(this), this;
      },
      // @method setStyle(style: Path options): this
      // Changes the appearance of a Path based on the options in the `Path options` object.
      setStyle: function(t) {
        return ot(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
      },
      // @method bringToFront(): this
      // Brings the layer to the top of all path layers.
      bringToFront: function() {
        return this._renderer && this._renderer._bringToFront(this), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all path layers.
      bringToBack: function() {
        return this._renderer && this._renderer._bringToBack(this), this;
      },
      getElement: function() {
        return this._path;
      },
      _reset: function() {
        this._project(), this._update();
      },
      _clickTolerance: function() {
        return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
      }
    }), ci = oe.extend({
      // @section
      // @aka CircleMarker options
      options: {
        fill: !0,
        // @option radius: Number = 10
        // Radius of the circle marker, in pixels
        radius: 10
      },
      initialize: function(t, e) {
        ot(this, e), this._latlng = g(t), this._radius = this.options.radius;
      },
      // @method setLatLng(latLng: LatLng): this
      // Sets the position of a circle marker to a new location.
      setLatLng: function(t) {
        var e = this._latlng;
        return this._latlng = g(t), this.redraw(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
      },
      // @method getLatLng(): LatLng
      // Returns the current geographical position of the circle marker
      getLatLng: function() {
        return this._latlng;
      },
      // @method setRadius(radius: Number): this
      // Sets the radius of a circle marker. Units are in pixels.
      setRadius: function(t) {
        return this.options.radius = this._radius = t, this.redraw();
      },
      // @method getRadius(): Number
      // Returns the current radius of the circle
      getRadius: function() {
        return this._radius;
      },
      setStyle: function(t) {
        var e = t && t.radius || this._radius;
        return oe.prototype.setStyle.call(this, t), this.setRadius(e), this;
      },
      _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      },
      _updateBounds: function() {
        var t = this._radius, e = this._radiusY || t, s = this._clickTolerance(), h = [t + s, e + s];
        this._pxBounds = new O(this._point.subtract(h), this._point.add(h));
      },
      _update: function() {
        this._map && this._updatePath();
      },
      _updatePath: function() {
        this._renderer._updateCircle(this);
      },
      _empty: function() {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t) {
        return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
      }
    });
    function Ws(t, e) {
      return new ci(t, e);
    }
    var Ki = ci.extend({
      initialize: function(t, e, s) {
        if (typeof e == "number" && (e = o({}, s, { radius: e })), ot(this, e), this._latlng = g(t), isNaN(this.options.radius))
          throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      },
      // @method setRadius(radius: Number): this
      // Sets the radius of a circle. Units are in meters.
      setRadius: function(t) {
        return this._mRadius = t, this.redraw();
      },
      // @method getRadius(): Number
      // Returns the current radius of a circle. Units are in meters.
      getRadius: function() {
        return this._mRadius;
      },
      // @method getBounds(): LatLngBounds
      // Returns the `LatLngBounds` of the path.
      getBounds: function() {
        var t = [this._radius, this._radiusY || this._radius];
        return new Q(
          this._map.layerPointToLatLng(this._point.subtract(t)),
          this._map.layerPointToLatLng(this._point.add(t))
        );
      },
      setStyle: oe.prototype.setStyle,
      _project: function() {
        var t = this._latlng.lng, e = this._latlng.lat, s = this._map, h = s.options.crs;
        if (h.distance === Lt.distance) {
          var d = Math.PI / 180, m = this._mRadius / Lt.R / d, b = s.project([e + m, t]), P = s.project([e - m, t]), D = b.add(P).divideBy(2), U = s.unproject(D).lat, q = Math.acos((Math.cos(m * d) - Math.sin(e * d) * Math.sin(U * d)) / (Math.cos(e * d) * Math.cos(U * d))) / d;
          (isNaN(q) || q === 0) && (q = m / Math.cos(Math.PI / 180 * e)), this._point = D.subtract(s.getPixelOrigin()), this._radius = isNaN(q) ? 0 : D.x - s.project([U, t - q]).x, this._radiusY = D.y - b.y;
        } else {
          var at = h.unproject(h.project(this._latlng).subtract([this._mRadius, 0]));
          this._point = s.latLngToLayerPoint(this._latlng), this._radius = this._point.x - s.latLngToLayerPoint(at).x;
        }
        this._updateBounds();
      }
    });
    function Ys(t, e, s) {
      return new Ki(t, e, s);
    }
    var Kt = oe.extend({
      // @section
      // @aka Polyline options
      options: {
        // @option smoothFactor: Number = 1.0
        // How much to simplify the polyline on each zoom level. More means
        // better performance and smoother look, and less means more accurate representation.
        smoothFactor: 1,
        // @option noClip: Boolean = false
        // Disable polyline clipping.
        noClip: !1
      },
      initialize: function(t, e) {
        ot(this, e), this._setLatLngs(t);
      },
      // @method getLatLngs(): LatLng[]
      // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
      getLatLngs: function() {
        return this._latlngs;
      },
      // @method setLatLngs(latlngs: LatLng[]): this
      // Replaces all the points in the polyline with the given array of geographical points.
      setLatLngs: function(t) {
        return this._setLatLngs(t), this.redraw();
      },
      // @method isEmpty(): Boolean
      // Returns `true` if the Polyline has no LatLngs.
      isEmpty: function() {
        return !this._latlngs.length;
      },
      // @method closestLayerPoint(p: Point): Point
      // Returns the point closest to `p` on the Polyline.
      closestLayerPoint: function(t) {
        for (var e = 1 / 0, s = null, h = Fe, d, m, b = 0, P = this._parts.length; b < P; b++)
          for (var D = this._parts[b], U = 1, q = D.length; U < q; U++) {
            d = D[U - 1], m = D[U];
            var at = h(t, d, m, !0);
            at < e && (e = at, s = h(t, d, m));
          }
        return s && (s.distance = Math.sqrt(e)), s;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return so(this._defaultShape(), this._map.options.crs);
      },
      // @method getBounds(): LatLngBounds
      // Returns the `LatLngBounds` of the path.
      getBounds: function() {
        return this._bounds;
      },
      // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
      // Adds a given point to the polyline. By default, adds to the first ring of
      // the polyline in case of a multi-polyline, but can be overridden by passing
      // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
      addLatLng: function(t, e) {
        return e = e || this._defaultShape(), t = g(t), e.push(t), this._bounds.extend(t), this.redraw();
      },
      _setLatLngs: function(t) {
        this._bounds = new Q(), this._latlngs = this._convertLatLngs(t);
      },
      _defaultShape: function() {
        return Bt(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
      _convertLatLngs: function(t) {
        for (var e = [], s = Bt(t), h = 0, d = t.length; h < d; h++)
          s ? (e[h] = g(t[h]), this._bounds.extend(e[h])) : e[h] = this._convertLatLngs(t[h]);
        return e;
      },
      _project: function() {
        var t = new O();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
      },
      _updateBounds: function() {
        var t = this._clickTolerance(), e = new E(t, t);
        this._rawPxBounds && (this._pxBounds = new O([
          this._rawPxBounds.min.subtract(e),
          this._rawPxBounds.max.add(e)
        ]));
      },
      // recursively turns latlngs into a set of rings with projected coordinates
      _projectLatlngs: function(t, e, s) {
        var h = t[0] instanceof st, d = t.length, m, b;
        if (h) {
          for (b = [], m = 0; m < d; m++)
            b[m] = this._map.latLngToLayerPoint(t[m]), s.extend(b[m]);
          e.push(b);
        } else
          for (m = 0; m < d; m++)
            this._projectLatlngs(t[m], e, s);
      },
      // clip polyline by renderer bounds so that we have less to render for performance
      _clipPoints: function() {
        var t = this._renderer._bounds;
        if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var e = this._parts, s, h, d, m, b, P, D;
          for (s = 0, d = 0, m = this._rings.length; s < m; s++)
            for (D = this._rings[s], h = 0, b = D.length; h < b - 1; h++)
              P = oo(D[h], D[h + 1], t, h, !0), P && (e[d] = e[d] || [], e[d].push(P[0]), (P[1] !== D[h + 1] || h === b - 2) && (e[d].push(P[1]), d++));
        }
      },
      // simplify each clipped part of the polyline for performance
      _simplifyPoints: function() {
        for (var t = this._parts, e = this.options.smoothFactor, s = 0, h = t.length; s < h; s++)
          t[s] = eo(t[s], e);
      },
      _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function() {
        this._renderer._updatePoly(this);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t, e) {
        var s, h, d, m, b, P, D = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(t))
          return !1;
        for (s = 0, m = this._parts.length; s < m; s++)
          for (P = this._parts[s], h = 0, b = P.length, d = b - 1; h < b; d = h++)
            if (!(!e && h === 0) && io(t, P[d], P[h]) <= D)
              return !0;
        return !1;
      }
    });
    function Xs(t, e) {
      return new Kt(t, e);
    }
    Kt._flat = ro;
    var Te = Kt.extend({
      options: {
        fill: !0
      },
      isEmpty: function() {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return to(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function(t) {
        var e = Kt.prototype._convertLatLngs.call(this, t), s = e.length;
        return s >= 2 && e[0] instanceof st && e[0].equals(e[s - 1]) && e.pop(), e;
      },
      _setLatLngs: function(t) {
        Kt.prototype._setLatLngs.call(this, t), Bt(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function() {
        return Bt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function() {
        var t = this._renderer._bounds, e = this.options.weight, s = new E(e, e);
        if (t = new O(t.min.subtract(s), t.max.add(s)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var h = 0, d = this._rings.length, m; h < d; h++)
            m = Qn(this._rings[h], t, !0), m.length && this._parts.push(m);
        }
      },
      _updatePath: function() {
        this._renderer._updatePoly(this, !0);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(t) {
        var e = !1, s, h, d, m, b, P, D, U;
        if (!this._pxBounds || !this._pxBounds.contains(t))
          return !1;
        for (m = 0, D = this._parts.length; m < D; m++)
          for (s = this._parts[m], b = 0, U = s.length, P = U - 1; b < U; P = b++)
            h = s[b], d = s[P], h.y > t.y != d.y > t.y && t.x < (d.x - h.x) * (t.y - h.y) / (d.y - h.y) + h.x && (e = !e);
        return e || Kt.prototype._containsPoint.call(this, t, !0);
      }
    });
    function $s(t, e) {
      return new Te(t, e);
    }
    var Jt = qt.extend({
      /* @section
       * @aka GeoJSON options
       *
       * @option pointToLayer: Function = *
       * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
       * called when data is added, passing the GeoJSON point feature and its `LatLng`.
       * The default is to spawn a default `Marker`:
       * ```js
       * function(geoJsonPoint, latlng) {
       * 	return L.marker(latlng);
       * }
       * ```
       *
       * @option style: Function = *
       * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
       * called internally when data is added.
       * The default value is to not override any defaults:
       * ```js
       * function (geoJsonFeature) {
       * 	return {}
       * }
       * ```
       *
       * @option onEachFeature: Function = *
       * A `Function` that will be called once for each created `Feature`, after it has
       * been created and styled. Useful for attaching events and popups to features.
       * The default is to do nothing with the newly created layers:
       * ```js
       * function (feature, layer) {}
       * ```
       *
       * @option filter: Function = *
       * A `Function` that will be used to decide whether to include a feature or not.
       * The default is to include all features:
       * ```js
       * function (geoJsonFeature) {
       * 	return true;
       * }
       * ```
       * Note: dynamically changing the `filter` option will have effect only on newly
       * added data. It will _not_ re-evaluate already included features.
       *
       * @option coordsToLatLng: Function = *
       * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
       * The default is the `coordsToLatLng` static method.
       *
       * @option markersInheritOptions: Boolean = false
       * Whether default Markers for "Point" type Features inherit from group options.
       */
      initialize: function(t, e) {
        ot(this, e), this._layers = {}, t && this.addData(t);
      },
      // @method addData( <GeoJSON> data ): this
      // Adds a GeoJSON object to the layer.
      addData: function(t) {
        var e = z(t) ? t : t.features, s, h, d;
        if (e) {
          for (s = 0, h = e.length; s < h; s++)
            d = e[s], (d.geometries || d.geometry || d.features || d.coordinates) && this.addData(d);
          return this;
        }
        var m = this.options;
        if (m.filter && !m.filter(t))
          return this;
        var b = ui(t, m);
        return b ? (b.feature = pi(t), b.defaultOptions = b.options, this.resetStyle(b), m.onEachFeature && m.onEachFeature(t, b), this.addLayer(b)) : this;
      },
      // @method resetStyle( <Path> layer? ): this
      // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
      // If `layer` is omitted, the style of all features in the current layer is reset.
      resetStyle: function(t) {
        return t === void 0 ? this.eachLayer(this.resetStyle, this) : (t.options = o({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
      },
      // @method setStyle( <Function> style ): this
      // Changes styles of GeoJSON vector layers with the given style function.
      setStyle: function(t) {
        return this.eachLayer(function(e) {
          this._setLayerStyle(e, t);
        }, this);
      },
      _setLayerStyle: function(t, e) {
        t.setStyle && (typeof e == "function" && (e = e(t.feature)), t.setStyle(e));
      }
    });
    function ui(t, e) {
      var s = t.type === "Feature" ? t.geometry : t, h = s ? s.coordinates : null, d = [], m = e && e.pointToLayer, b = e && e.coordsToLatLng || Ji, P, D, U, q;
      if (!h && !s)
        return null;
      switch (s.type) {
        case "Point":
          return P = b(h), ho(m, t, P, e);
        case "MultiPoint":
          for (U = 0, q = h.length; U < q; U++)
            P = b(h[U]), d.push(ho(m, t, P, e));
          return new qt(d);
        case "LineString":
        case "MultiLineString":
          return D = di(h, s.type === "LineString" ? 0 : 1, b), new Kt(D, e);
        case "Polygon":
        case "MultiPolygon":
          return D = di(h, s.type === "Polygon" ? 1 : 2, b), new Te(D, e);
        case "GeometryCollection":
          for (U = 0, q = s.geometries.length; U < q; U++) {
            var at = ui({
              geometry: s.geometries[U],
              type: "Feature",
              properties: t.properties
            }, e);
            at && d.push(at);
          }
          return new qt(d);
        case "FeatureCollection":
          for (U = 0, q = s.features.length; U < q; U++) {
            var ct = ui(s.features[U], e);
            ct && d.push(ct);
          }
          return new qt(d);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function ho(t, e, s, h) {
      return t ? t(e, s) : new hi(s, h && h.markersInheritOptions && h);
    }
    function Ji(t) {
      return new st(t[1], t[0], t[2]);
    }
    function di(t, e, s) {
      for (var h = [], d = 0, m = t.length, b; d < m; d++)
        b = e ? di(t[d], e - 1, s) : (s || Ji)(t[d]), h.push(b);
      return h;
    }
    function Qi(t, e) {
      return t = g(t), t.alt !== void 0 ? [T(t.lng, e), T(t.lat, e), T(t.alt, e)] : [T(t.lng, e), T(t.lat, e)];
    }
    function fi(t, e, s, h) {
      for (var d = [], m = 0, b = t.length; m < b; m++)
        d.push(e ? fi(t[m], Bt(t[m]) ? 0 : e - 1, s, h) : Qi(t[m], h));
      return !e && s && d.length > 0 && d.push(d[0].slice()), d;
    }
    function Ee(t, e) {
      return t.feature ? o({}, t.feature, { geometry: e }) : pi(e);
    }
    function pi(t) {
      return t.type === "Feature" || t.type === "FeatureCollection" ? t : {
        type: "Feature",
        properties: {},
        geometry: t
      };
    }
    var tn = {
      toGeoJSON: function(t) {
        return Ee(this, {
          type: "Point",
          coordinates: Qi(this.getLatLng(), t)
        });
      }
    };
    hi.include(tn), Ki.include(tn), ci.include(tn), Kt.include({
      toGeoJSON: function(t) {
        var e = !Bt(this._latlngs), s = fi(this._latlngs, e ? 1 : 0, !1, t);
        return Ee(this, {
          type: (e ? "Multi" : "") + "LineString",
          coordinates: s
        });
      }
    }), Te.include({
      toGeoJSON: function(t) {
        var e = !Bt(this._latlngs), s = e && !Bt(this._latlngs[0]), h = fi(this._latlngs, s ? 2 : e ? 1 : 0, !0, t);
        return e || (h = [h]), Ee(this, {
          type: (s ? "Multi" : "") + "Polygon",
          coordinates: h
        });
      }
    }), xe.include({
      toMultiPoint: function(t) {
        var e = [];
        return this.eachLayer(function(s) {
          e.push(s.toGeoJSON(t).geometry.coordinates);
        }), Ee(this, {
          type: "MultiPoint",
          coordinates: e
        });
      },
      // @method toGeoJSON(precision?: Number|false): Object
      // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
      // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
      toGeoJSON: function(t) {
        var e = this.feature && this.feature.geometry && this.feature.geometry.type;
        if (e === "MultiPoint")
          return this.toMultiPoint(t);
        var s = e === "GeometryCollection", h = [];
        return this.eachLayer(function(d) {
          if (d.toGeoJSON) {
            var m = d.toGeoJSON(t);
            if (s)
              h.push(m.geometry);
            else {
              var b = pi(m);
              b.type === "FeatureCollection" ? h.push.apply(h, b.features) : h.push(b);
            }
          }
        }), s ? Ee(this, {
          geometries: h,
          type: "GeometryCollection"
        }) : {
          type: "FeatureCollection",
          features: h
        };
      }
    });
    function co(t, e) {
      return new Jt(t, e);
    }
    var qs = co, _i = Gt.extend({
      // @section
      // @aka ImageOverlay options
      options: {
        // @option opacity: Number = 1.0
        // The opacity of the image overlay.
        opacity: 1,
        // @option alt: String = ''
        // Text for the `alt` attribute of the image (useful for accessibility).
        alt: "",
        // @option interactive: Boolean = false
        // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
        interactive: !1,
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the image.
        // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1,
        // @option errorOverlayUrl: String = ''
        // URL to the overlay image to show in place of the overlay that failed to load.
        errorOverlayUrl: "",
        // @option zIndex: Number = 1
        // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
        zIndex: 1,
        // @option className: String = ''
        // A custom class name to assign to the image. Empty by default.
        className: ""
      },
      initialize: function(t, e, s) {
        this._url = t, this._bounds = et(e), ot(this, s);
      },
      onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (ht(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      },
      onRemove: function() {
        Tt(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
      },
      // @method setOpacity(opacity: Number): this
      // Sets the opacity of the overlay.
      setOpacity: function(t) {
        return this.options.opacity = t, this._image && this._updateOpacity(), this;
      },
      setStyle: function(t) {
        return t.opacity && this.setOpacity(t.opacity), this;
      },
      // @method bringToFront(): this
      // Brings the layer to the top of all overlays.
      bringToFront: function() {
        return this._map && be(this._image), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all overlays.
      bringToBack: function() {
        return this._map && Le(this._image), this;
      },
      // @method setUrl(url: String): this
      // Changes the URL of the image.
      setUrl: function(t) {
        return this._url = t, this._image && (this._image.src = t), this;
      },
      // @method setBounds(bounds: LatLngBounds): this
      // Update the bounds that this ImageOverlay covers
      setBounds: function(t) {
        return this._bounds = et(t), this._map && this._reset(), this;
      },
      getEvents: function() {
        var t = {
          zoom: this._reset,
          viewreset: this._reset
        };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      // @method setZIndex(value: Number): this
      // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
      setZIndex: function(t) {
        return this.options.zIndex = t, this._updateZIndex(), this;
      },
      // @method getBounds(): LatLngBounds
      // Get the bounds that this ImageOverlay covers
      getBounds: function() {
        return this._bounds;
      },
      // @method getElement(): HTMLElement
      // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
      // used by this overlay.
      getElement: function() {
        return this._image;
      },
      _initImage: function() {
        var t = this._url.tagName === "IMG", e = this._image = t ? this._url : pt("img");
        if (ht(e, "leaflet-image-layer"), this._zoomAnimated && ht(e, "leaflet-zoom-animated"), this.options.className && ht(e, this.options.className), e.onselectstart = x, e.onmousemove = x, e.onload = c(this.fire, this, "load"), e.onerror = c(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (e.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
          this._url = e.src;
          return;
        }
        e.src = this._url, e.alt = this.options.alt;
      },
      _animateZoom: function(t) {
        var e = this._map.getZoomScale(t.zoom), s = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
        ae(this._image, s, e);
      },
      _reset: function() {
        var t = this._image, e = new O(
          this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
          this._map.latLngToLayerPoint(this._bounds.getSouthEast())
        ), s = e.getSize();
        kt(t, e.min), t.style.width = s.x + "px", t.style.height = s.y + "px";
      },
      _updateOpacity: function() {
        Rt(this._image, this.options.opacity);
      },
      _updateZIndex: function() {
        this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function() {
        this.fire("error");
        var t = this.options.errorOverlayUrl;
        t && this._url !== t && (this._url = t, this._image.src = t);
      },
      // @method getCenter(): LatLng
      // Returns the center of the ImageOverlay.
      getCenter: function() {
        return this._bounds.getCenter();
      }
    }), Ks = function(t, e, s) {
      return new _i(t, e, s);
    }, uo = _i.extend({
      // @section
      // @aka VideoOverlay options
      options: {
        // @option autoplay: Boolean = true
        // Whether the video starts playing automatically when loaded.
        // On some browsers autoplay will only work with `muted: true`
        autoplay: !0,
        // @option loop: Boolean = true
        // Whether the video will loop back to the beginning when played.
        loop: !0,
        // @option keepAspectRatio: Boolean = true
        // Whether the video will save aspect ratio after the projection.
        // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
        keepAspectRatio: !0,
        // @option muted: Boolean = false
        // Whether the video starts on mute when loaded.
        muted: !1,
        // @option playsInline: Boolean = true
        // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
        playsInline: !0
      },
      _initImage: function() {
        var t = this._url.tagName === "VIDEO", e = this._image = t ? this._url : pt("video");
        if (ht(e, "leaflet-image-layer"), this._zoomAnimated && ht(e, "leaflet-zoom-animated"), this.options.className && ht(e, this.options.className), e.onselectstart = x, e.onmousemove = x, e.onloadeddata = c(this.fire, this, "load"), t) {
          for (var s = e.getElementsByTagName("source"), h = [], d = 0; d < s.length; d++)
            h.push(s[d].src);
          this._url = s.length > 0 ? h : [e.src];
          return;
        }
        z(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, e.playsInline = !!this.options.playsInline;
        for (var m = 0; m < this._url.length; m++) {
          var b = pt("source");
          b.src = this._url[m], e.appendChild(b);
        }
      }
      // @method getElement(): HTMLVideoElement
      // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
      // used by this overlay.
    });
    function Js(t, e, s) {
      return new uo(t, e, s);
    }
    var fo = _i.extend({
      _initImage: function() {
        var t = this._image = this._url;
        ht(t, "leaflet-image-layer"), this._zoomAnimated && ht(t, "leaflet-zoom-animated"), this.options.className && ht(t, this.options.className), t.onselectstart = x, t.onmousemove = x;
      }
      // @method getElement(): SVGElement
      // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
      // used by this overlay.
    });
    function Qs(t, e, s) {
      return new fo(t, e, s);
    }
    var Yt = Gt.extend({
      // @section
      // @aka DivOverlay options
      options: {
        // @option interactive: Boolean = false
        // If true, the popup/tooltip will listen to the mouse events.
        interactive: !1,
        // @option offset: Point = Point(0, 0)
        // The offset of the overlay position.
        offset: [0, 0],
        // @option className: String = ''
        // A custom CSS class name to assign to the overlay.
        className: "",
        // @option pane: String = undefined
        // `Map pane` where the overlay will be added.
        pane: void 0,
        // @option content: String|HTMLElement|Function = ''
        // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
        // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
        content: ""
      },
      initialize: function(t, e) {
        t && (t instanceof st || z(t)) ? (this._latlng = g(t), ot(this, e)) : (ot(this, t), this._source = e), this.options.content && (this._content = this.options.content);
      },
      // @method openOn(map: Map): this
      // Adds the overlay to the map.
      // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
      openOn: function(t) {
        return t = arguments.length ? t : this._source._map, t.hasLayer(this) || t.addLayer(this), this;
      },
      // @method close(): this
      // Closes the overlay.
      // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
      // and `layer.closePopup()`/`.closeTooltip()`.
      close: function() {
        return this._map && this._map.removeLayer(this), this;
      },
      // @method toggle(layer?: Layer): this
      // Opens or closes the overlay bound to layer depending on its current state.
      // Argument may be omitted only for overlay bound to layer.
      // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
      toggle: function(t) {
        return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this;
      },
      onAdd: function(t) {
        this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && Rt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && Rt(this._container, 1), this.bringToFront(), this.options.interactive && (ht(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      },
      onRemove: function(t) {
        t._fadeAnimated ? (Rt(this._container, 0), this._removeTimeout = setTimeout(c(Tt, void 0, this._container), 200)) : Tt(this._container), this.options.interactive && (Mt(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
      },
      // @namespace DivOverlay
      // @method getLatLng: LatLng
      // Returns the geographical point of the overlay.
      getLatLng: function() {
        return this._latlng;
      },
      // @method setLatLng(latlng: LatLng): this
      // Sets the geographical point where the overlay will open.
      setLatLng: function(t) {
        return this._latlng = g(t), this._map && (this._updatePosition(), this._adjustPan()), this;
      },
      // @method getContent: String|HTMLElement
      // Returns the content of the overlay.
      getContent: function() {
        return this._content;
      },
      // @method setContent(htmlContent: String|HTMLElement|Function): this
      // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
      // The function should return a `String` or `HTMLElement` to be used in the overlay.
      setContent: function(t) {
        return this._content = t, this.update(), this;
      },
      // @method getElement: String|HTMLElement
      // Returns the HTML container of the overlay.
      getElement: function() {
        return this._container;
      },
      // @method update: null
      // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
      update: function() {
        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
      },
      getEvents: function() {
        var t = {
          zoom: this._updatePosition,
          viewreset: this._updatePosition
        };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      // @method isOpen: Boolean
      // Returns `true` when the overlay is visible on the map.
      isOpen: function() {
        return !!this._map && this._map.hasLayer(this);
      },
      // @method bringToFront: this
      // Brings this overlay in front of other overlays (in the same map pane).
      bringToFront: function() {
        return this._map && be(this._container), this;
      },
      // @method bringToBack: this
      // Brings this overlay to the back of other overlays (in the same map pane).
      bringToBack: function() {
        return this._map && Le(this._container), this;
      },
      // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
      _prepareOpen: function(t) {
        var e = this._source;
        if (!e._map)
          return !1;
        if (e instanceof qt) {
          e = null;
          var s = this._source._layers;
          for (var h in s)
            if (s[h]._map) {
              e = s[h];
              break;
            }
          if (!e)
            return !1;
          this._source = e;
        }
        if (!t)
          if (e.getCenter)
            t = e.getCenter();
          else if (e.getLatLng)
            t = e.getLatLng();
          else if (e.getBounds)
            t = e.getBounds().getCenter();
          else
            throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(t), this._map && this.update(), !0;
      },
      _updateContent: function() {
        if (this._content) {
          var t = this._contentNode, e = typeof this._content == "function" ? this._content(this._source || this) : this._content;
          if (typeof e == "string")
            t.innerHTML = e;
          else {
            for (; t.hasChildNodes(); )
              t.removeChild(t.firstChild);
            t.appendChild(e);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function() {
        if (this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng), e = k(this.options.offset), s = this._getAnchor();
          this._zoomAnimated ? kt(this._container, t.add(s)) : e = e.add(t).add(s);
          var h = this._containerBottom = -e.y, d = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
          this._container.style.bottom = h + "px", this._container.style.left = d + "px";
        }
      },
      _getAnchor: function() {
        return [0, 0];
      }
    });
    ut.include({
      _initOverlay: function(t, e, s, h) {
        var d = e;
        return d instanceof t || (d = new t(h).setContent(e)), s && d.setLatLng(s), d;
      }
    }), Gt.include({
      _initOverlay: function(t, e, s, h) {
        var d = s;
        return d instanceof t ? (ot(d, h), d._source = this) : (d = e && !h ? e : new t(h, this), d.setContent(s)), d;
      }
    });
    var mi = Yt.extend({
      // @section
      // @aka Popup options
      options: {
        // @option pane: String = 'popupPane'
        // `Map pane` where the popup will be added.
        pane: "popupPane",
        // @option offset: Point = Point(0, 7)
        // The offset of the popup position.
        offset: [0, 7],
        // @option maxWidth: Number = 300
        // Max width of the popup, in pixels.
        maxWidth: 300,
        // @option minWidth: Number = 50
        // Min width of the popup, in pixels.
        minWidth: 50,
        // @option maxHeight: Number = null
        // If set, creates a scrollable container of the given height
        // inside a popup if its content exceeds it.
        // The scrollable container can be styled using the
        // `leaflet-popup-scrolled` CSS class selector.
        maxHeight: null,
        // @option autoPan: Boolean = true
        // Set it to `false` if you don't want the map to do panning animation
        // to fit the opened popup.
        autoPan: !0,
        // @option autoPanPaddingTopLeft: Point = null
        // The margin between the popup and the top left corner of the map
        // view after autopanning was performed.
        autoPanPaddingTopLeft: null,
        // @option autoPanPaddingBottomRight: Point = null
        // The margin between the popup and the bottom right corner of the map
        // view after autopanning was performed.
        autoPanPaddingBottomRight: null,
        // @option autoPanPadding: Point = Point(5, 5)
        // Equivalent of setting both top left and bottom right autopan padding to the same value.
        autoPanPadding: [5, 5],
        // @option keepInView: Boolean = false
        // Set it to `true` if you want to prevent users from panning the popup
        // off of the screen while it is open.
        keepInView: !1,
        // @option closeButton: Boolean = true
        // Controls the presence of a close button in the popup.
        closeButton: !0,
        // @option autoClose: Boolean = true
        // Set it to `false` if you want to override the default behavior of
        // the popup closing when another popup is opened.
        autoClose: !0,
        // @option closeOnEscapeKey: Boolean = true
        // Set it to `false` if you want to override the default behavior of
        // the ESC key for closing of the popup.
        closeOnEscapeKey: !0,
        // @option closeOnClick: Boolean = *
        // Set it if you want to override the default behavior of the popup closing when user clicks
        // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
        // @option className: String = ''
        // A custom CSS class name to assign to the popup.
        className: ""
      },
      // @namespace Popup
      // @method openOn(map: Map): this
      // Alternative to `map.openPopup(popup)`.
      // Adds the popup to the map and closes the previous one.
      openOn: function(t) {
        return t = arguments.length ? t : this._source._map, !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, Yt.prototype.openOn.call(this, t);
      },
      onAdd: function(t) {
        Yt.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof oe || this._source.on("preclick", he));
      },
      onRemove: function(t) {
        Yt.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof oe || this._source.off("preclick", he));
      },
      getEvents: function() {
        var t = Yt.prototype.getEvents.call(this);
        return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
      },
      _initLayout: function() {
        var t = "leaflet-popup", e = this._container = pt(
          "div",
          t + " " + (this.options.className || "") + " leaflet-zoom-animated"
        ), s = this._wrapper = pt("div", t + "-content-wrapper", e);
        if (this._contentNode = pt("div", t + "-content", s), Ne(e), ji(this._contentNode), lt(e, "contextmenu", he), this._tipContainer = pt("div", t + "-tip-container", e), this._tip = pt("div", t + "-tip", this._tipContainer), this.options.closeButton) {
          var h = this._closeButton = pt("a", t + "-close-button", e);
          h.setAttribute("role", "button"), h.setAttribute("aria-label", "Close popup"), h.href = "#close", h.innerHTML = '<span aria-hidden="true">&#215;</span>', lt(h, "click", function(d) {
            It(d), this.close();
          }, this);
        }
      },
      _updateLayout: function() {
        var t = this._contentNode, e = t.style;
        e.width = "", e.whiteSpace = "nowrap";
        var s = t.offsetWidth;
        s = Math.min(s, this.options.maxWidth), s = Math.max(s, this.options.minWidth), e.width = s + 1 + "px", e.whiteSpace = "", e.height = "";
        var h = t.offsetHeight, d = this.options.maxHeight, m = "leaflet-popup-scrolled";
        d && h > d ? (e.height = d + "px", ht(t, m)) : Mt(t, m), this._containerWidth = this._container.offsetWidth;
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center), s = this._getAnchor();
        kt(this._container, e.add(s));
      },
      _adjustPan: function() {
        if (this.options.autoPan) {
          if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
            this._autopanning = !1;
            return;
          }
          var t = this._map, e = parseInt(ze(this._container, "marginBottom"), 10) || 0, s = this._container.offsetHeight + e, h = this._containerWidth, d = new E(this._containerLeft, -s - this._containerBottom);
          d._add(le(this._container));
          var m = t.layerPointToContainerPoint(d), b = k(this.options.autoPanPadding), P = k(this.options.autoPanPaddingTopLeft || b), D = k(this.options.autoPanPaddingBottomRight || b), U = t.getSize(), q = 0, at = 0;
          m.x + h + D.x > U.x && (q = m.x + h - U.x + D.x), m.x - q - P.x < 0 && (q = m.x - P.x), m.y + s + D.y > U.y && (at = m.y + s - U.y + D.y), m.y - at - P.y < 0 && (at = m.y - P.y), (q || at) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([q, at]));
        }
      },
      _getAnchor: function() {
        return k(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      }
    }), ta = function(t, e) {
      return new mi(t, e);
    };
    ut.mergeOptions({
      closePopupOnClick: !0
    }), ut.include({
      // @method openPopup(popup: Popup): this
      // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
      // @alternative
      // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
      // Creates a popup with the specified content and options and opens it in the given point on a map.
      openPopup: function(t, e, s) {
        return this._initOverlay(mi, t, e, s).openOn(this), this;
      },
      // @method closePopup(popup?: Popup): this
      // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
      closePopup: function(t) {
        return t = arguments.length ? t : this._popup, t && t.close(), this;
      }
    }), Gt.include({
      // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
      // Binds a popup to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindPopup: function(t, e) {
        return this._popup = this._initOverlay(mi, this._popup, t, e), this._popupHandlersAdded || (this.on({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !0), this;
      },
      // @method unbindPopup(): this
      // Removes the popup previously bound with `bindPopup`.
      unbindPopup: function() {
        return this._popup && (this.off({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !1, this._popup = null), this;
      },
      // @method openPopup(latlng?: LatLng): this
      // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
      openPopup: function(t) {
        return this._popup && (this instanceof qt || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
      },
      // @method closePopup(): this
      // Closes the popup bound to this layer if it is open.
      closePopup: function() {
        return this._popup && this._popup.close(), this;
      },
      // @method togglePopup(): this
      // Opens or closes the popup bound to this layer depending on its current state.
      togglePopup: function() {
        return this._popup && this._popup.toggle(this), this;
      },
      // @method isPopupOpen(): boolean
      // Returns `true` if the popup bound to this layer is currently open.
      isPopupOpen: function() {
        return this._popup ? this._popup.isOpen() : !1;
      },
      // @method setPopupContent(content: String|HTMLElement|Popup): this
      // Sets the content of the popup bound to this layer.
      setPopupContent: function(t) {
        return this._popup && this._popup.setContent(t), this;
      },
      // @method getPopup(): Popup
      // Returns the popup bound to this layer.
      getPopup: function() {
        return this._popup;
      },
      _openPopup: function(t) {
        if (!(!this._popup || !this._map)) {
          ce(t);
          var e = t.layer || t.target;
          if (this._popup._source === e && !(e instanceof oe)) {
            this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng);
            return;
          }
          this._popup._source = e, this.openPopup(t.latlng);
        }
      },
      _movePopup: function(t) {
        this._popup.setLatLng(t.latlng);
      },
      _onKeyPress: function(t) {
        t.originalEvent.keyCode === 13 && this._openPopup(t);
      }
    });
    var gi = Yt.extend({
      // @section
      // @aka Tooltip options
      options: {
        // @option pane: String = 'tooltipPane'
        // `Map pane` where the tooltip will be added.
        pane: "tooltipPane",
        // @option offset: Point = Point(0, 0)
        // Optional offset of the tooltip position.
        offset: [0, 0],
        // @option direction: String = 'auto'
        // Direction where to open the tooltip. Possible values are: `right`, `left`,
        // `top`, `bottom`, `center`, `auto`.
        // `auto` will dynamically switch between `right` and `left` according to the tooltip
        // position on the map.
        direction: "auto",
        // @option permanent: Boolean = false
        // Whether to open the tooltip permanently or only on mouseover.
        permanent: !1,
        // @option sticky: Boolean = false
        // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
        sticky: !1,
        // @option opacity: Number = 0.9
        // Tooltip container opacity.
        opacity: 0.9
      },
      onAdd: function(t) {
        Yt.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
      },
      onRemove: function(t) {
        Yt.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
      },
      getEvents: function() {
        var t = Yt.prototype.getEvents.call(this);
        return this.options.permanent || (t.preclick = this.close), t;
      },
      _initLayout: function() {
        var t = "leaflet-tooltip", e = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = pt("div", e), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + p(this));
      },
      _updateLayout: function() {
      },
      _adjustPan: function() {
      },
      _setPosition: function(t) {
        var e, s, h = this._map, d = this._container, m = h.latLngToContainerPoint(h.getCenter()), b = h.layerPointToContainerPoint(t), P = this.options.direction, D = d.offsetWidth, U = d.offsetHeight, q = k(this.options.offset), at = this._getAnchor();
        P === "top" ? (e = D / 2, s = U) : P === "bottom" ? (e = D / 2, s = 0) : P === "center" ? (e = D / 2, s = U / 2) : P === "right" ? (e = 0, s = U / 2) : P === "left" ? (e = D, s = U / 2) : b.x < m.x ? (P = "right", e = 0, s = U / 2) : (P = "left", e = D + (q.x + at.x) * 2, s = U / 2), t = t.subtract(k(e, s, !0)).add(q).add(at), Mt(d, "leaflet-tooltip-right"), Mt(d, "leaflet-tooltip-left"), Mt(d, "leaflet-tooltip-top"), Mt(d, "leaflet-tooltip-bottom"), ht(d, "leaflet-tooltip-" + P), kt(d, t);
      },
      _updatePosition: function() {
        var t = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(t);
      },
      setOpacity: function(t) {
        this.options.opacity = t, this._container && Rt(this._container, t);
      },
      _animateZoom: function(t) {
        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
        this._setPosition(e);
      },
      _getAnchor: function() {
        return k(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      }
    }), ea = function(t, e) {
      return new gi(t, e);
    };
    ut.include({
      // @method openTooltip(tooltip: Tooltip): this
      // Opens the specified tooltip.
      // @alternative
      // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
      // Creates a tooltip with the specified content and options and open it.
      openTooltip: function(t, e, s) {
        return this._initOverlay(gi, t, e, s).openOn(this), this;
      },
      // @method closeTooltip(tooltip: Tooltip): this
      // Closes the tooltip given as parameter.
      closeTooltip: function(t) {
        return t.close(), this;
      }
    }), Gt.include({
      // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
      // Binds a tooltip to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindTooltip: function(t, e) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(gi, this._tooltip, t, e), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      },
      // @method unbindTooltip(): this
      // Removes the tooltip previously bound with `bindTooltip`.
      unbindTooltip: function() {
        return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
      },
      _initTooltipInteractions: function(t) {
        if (!(!t && this._tooltipHandlersAdded)) {
          var e = t ? "off" : "on", s = {
            remove: this.closeTooltip,
            move: this._moveTooltip
          };
          this._tooltip.options.permanent ? s.add = this._openTooltip : (s.mouseover = this._openTooltip, s.mouseout = this.closeTooltip, s.click = this._openTooltip, this._map ? this._addFocusListeners() : s.add = this._addFocusListeners), this._tooltip.options.sticky && (s.mousemove = this._moveTooltip), this[e](s), this._tooltipHandlersAdded = !t;
        }
      },
      // @method openTooltip(latlng?: LatLng): this
      // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
      openTooltip: function(t) {
        return this._tooltip && (this instanceof qt || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
      },
      // @method closeTooltip(): this
      // Closes the tooltip bound to this layer if it is open.
      closeTooltip: function() {
        if (this._tooltip)
          return this._tooltip.close();
      },
      // @method toggleTooltip(): this
      // Opens or closes the tooltip bound to this layer depending on its current state.
      toggleTooltip: function() {
        return this._tooltip && this._tooltip.toggle(this), this;
      },
      // @method isTooltipOpen(): boolean
      // Returns `true` if the tooltip bound to this layer is currently open.
      isTooltipOpen: function() {
        return this._tooltip.isOpen();
      },
      // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
      // Sets the content of the tooltip bound to this layer.
      setTooltipContent: function(t) {
        return this._tooltip && this._tooltip.setContent(t), this;
      },
      // @method getTooltip(): Tooltip
      // Returns the tooltip bound to this layer.
      getTooltip: function() {
        return this._tooltip;
      },
      _addFocusListeners: function() {
        this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
      },
      _addFocusListenersOnLayer: function(t) {
        var e = typeof t.getElement == "function" && t.getElement();
        e && (lt(e, "focus", function() {
          this._tooltip._source = t, this.openTooltip();
        }, this), lt(e, "blur", this.closeTooltip, this));
      },
      _setAriaDescribedByOnLayer: function(t) {
        var e = typeof t.getElement == "function" && t.getElement();
        e && e.setAttribute("aria-describedby", this._tooltip._container.id);
      },
      _openTooltip: function(t) {
        if (!(!this._tooltip || !this._map)) {
          if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
            this._openOnceFlag = !0;
            var e = this;
            this._map.once("moveend", function() {
              e._openOnceFlag = !1, e._openTooltip(t);
            });
            return;
          }
          this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0);
        }
      },
      _moveTooltip: function(t) {
        var e = t.latlng, s, h;
        this._tooltip.options.sticky && t.originalEvent && (s = this._map.mouseEventToContainerPoint(t.originalEvent), h = this._map.containerPointToLayerPoint(s), e = this._map.layerPointToLatLng(h)), this._tooltip.setLatLng(e);
      }
    });
    var po = we.extend({
      options: {
        // @section
        // @aka DivIcon options
        iconSize: [12, 12],
        // also can be set through CSS
        // iconAnchor: (Point),
        // popupAnchor: (Point),
        // @option html: String|HTMLElement = ''
        // Custom HTML code to put inside the div element, empty by default. Alternatively,
        // an instance of `HTMLElement`.
        html: !1,
        // @option bgPos: Point = [0, 0]
        // Optional relative position of the background, in pixels
        bgPos: null,
        className: "leaflet-div-icon"
      },
      createIcon: function(t) {
        var e = t && t.tagName === "DIV" ? t : document.createElement("div"), s = this.options;
        if (s.html instanceof Element ? (ni(e), e.appendChild(s.html)) : e.innerHTML = s.html !== !1 ? s.html : "", s.bgPos) {
          var h = k(s.bgPos);
          e.style.backgroundPosition = -h.x + "px " + -h.y + "px";
        }
        return this._setIconStyles(e, "icon"), e;
      },
      createShadow: function() {
        return null;
      }
    });
    function ia(t) {
      return new po(t);
    }
    we.Default = Ge;
    var je = Gt.extend({
      // @section
      // @aka GridLayer options
      options: {
        // @option tileSize: Number|Point = 256
        // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
        tileSize: 256,
        // @option opacity: Number = 1.0
        // Opacity of the tiles. Can be used in the `createTile()` function.
        opacity: 1,
        // @option updateWhenIdle: Boolean = (depends)
        // Load new tiles only when panning ends.
        // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
        // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
        // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
        updateWhenIdle: rt.mobile,
        // @option updateWhenZooming: Boolean = true
        // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
        updateWhenZooming: !0,
        // @option updateInterval: Number = 200
        // Tiles will not update more than once every `updateInterval` milliseconds when panning.
        updateInterval: 200,
        // @option zIndex: Number = 1
        // The explicit zIndex of the tile layer.
        zIndex: 1,
        // @option bounds: LatLngBounds = undefined
        // If set, tiles will only be loaded inside the set `LatLngBounds`.
        bounds: null,
        // @option minZoom: Number = 0
        // The minimum zoom level down to which this layer will be displayed (inclusive).
        minZoom: 0,
        // @option maxZoom: Number = undefined
        // The maximum zoom level up to which this layer will be displayed (inclusive).
        maxZoom: void 0,
        // @option maxNativeZoom: Number = undefined
        // Maximum zoom number the tile source has available. If it is specified,
        // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
        // from `maxNativeZoom` level and auto-scaled.
        maxNativeZoom: void 0,
        // @option minNativeZoom: Number = undefined
        // Minimum zoom number the tile source has available. If it is specified,
        // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
        // from `minNativeZoom` level and auto-scaled.
        minNativeZoom: void 0,
        // @option noWrap: Boolean = false
        // Whether the layer is wrapped around the antimeridian. If `true`, the
        // GridLayer will only be displayed once at low zoom levels. Has no
        // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
        // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
        // tiles outside the CRS limits.
        noWrap: !1,
        // @option pane: String = 'tilePane'
        // `Map pane` where the grid layer will be added.
        pane: "tilePane",
        // @option className: String = ''
        // A custom class name to assign to the tile layer. Empty by default.
        className: "",
        // @option keepBuffer: Number = 2
        // When panning the map, keep this many rows and columns of tiles before unloading them.
        keepBuffer: 2
      },
      initialize: function(t) {
        ot(this, t);
      },
      onAdd: function() {
        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
      },
      beforeAdd: function(t) {
        t._addZoomLimit(this);
      },
      onRemove: function(t) {
        this._removeAllTiles(), Tt(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      },
      // @method bringToFront: this
      // Brings the tile layer to the top of all tile layers.
      bringToFront: function() {
        return this._map && (be(this._container), this._setAutoZIndex(Math.max)), this;
      },
      // @method bringToBack: this
      // Brings the tile layer to the bottom of all tile layers.
      bringToBack: function() {
        return this._map && (Le(this._container), this._setAutoZIndex(Math.min)), this;
      },
      // @method getContainer: HTMLElement
      // Returns the HTML element that contains the tiles for this layer.
      getContainer: function() {
        return this._container;
      },
      // @method setOpacity(opacity: Number): this
      // Changes the [opacity](#gridlayer-opacity) of the grid layer.
      setOpacity: function(t) {
        return this.options.opacity = t, this._updateOpacity(), this;
      },
      // @method setZIndex(zIndex: Number): this
      // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
      setZIndex: function(t) {
        return this.options.zIndex = t, this._updateZIndex(), this;
      },
      // @method isLoading: Boolean
      // Returns `true` if any tile in the grid layer has not finished loading.
      isLoading: function() {
        return this._loading;
      },
      // @method redraw: this
      // Causes the layer to clear all the tiles and request them again.
      redraw: function() {
        if (this._map) {
          this._removeAllTiles();
          var t = this._clampZoom(this._map.getZoom());
          t !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update();
        }
        return this;
      },
      getEvents: function() {
        var t = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd
        };
        return this.options.updateWhenIdle || (this._onMove || (this._onMove = v(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      // @section Extension methods
      // Layers extending `GridLayer` shall reimplement the following method.
      // @method createTile(coords: Object, done?: Function): HTMLElement
      // Called only internally, must be overridden by classes extending `GridLayer`.
      // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
      // is specified, it must be called when the tile has finished loading and drawing.
      createTile: function() {
        return document.createElement("div");
      },
      // @section
      // @method getTileSize: Point
      // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
      getTileSize: function() {
        var t = this.options.tileSize;
        return t instanceof E ? t : new E(t, t);
      },
      _updateZIndex: function() {
        this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function(t) {
        for (var e = this.getPane().children, s = -t(-1 / 0, 1 / 0), h = 0, d = e.length, m; h < d; h++)
          m = e[h].style.zIndex, e[h] !== this._container && m && (s = t(s, +m));
        isFinite(s) && (this.options.zIndex = s + t(-1, 1), this._updateZIndex());
      },
      _updateOpacity: function() {
        if (this._map && !rt.ielt9) {
          Rt(this._container, this.options.opacity);
          var t = +new Date(), e = !1, s = !1;
          for (var h in this._tiles) {
            var d = this._tiles[h];
            if (!(!d.current || !d.loaded)) {
              var m = Math.min(1, (t - d.loaded) / 200);
              Rt(d.el, m), m < 1 ? e = !0 : (d.active ? s = !0 : this._onOpaqueTile(d), d.active = !0);
            }
          }
          s && !this._noPrune && this._pruneTiles(), e && (R(this._fadeFrame), this._fadeFrame = tt(this._updateOpacity, this));
        }
      },
      _onOpaqueTile: x,
      _initContainer: function() {
        this._container || (this._container = pt("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      },
      _updateLevels: function() {
        var t = this._tileZoom, e = this.options.maxZoom;
        if (t !== void 0) {
          for (var s in this._levels)
            s = Number(s), this._levels[s].el.children.length || s === t ? (this._levels[s].el.style.zIndex = e - Math.abs(t - s), this._onUpdateLevel(s)) : (Tt(this._levels[s].el), this._removeTilesAtZoom(s), this._onRemoveLevel(s), delete this._levels[s]);
          var h = this._levels[t], d = this._map;
          return h || (h = this._levels[t] = {}, h.el = pt("div", "leaflet-tile-container leaflet-zoom-animated", this._container), h.el.style.zIndex = e, h.origin = d.project(d.unproject(d.getPixelOrigin()), t).round(), h.zoom = t, this._setZoomTransform(h, d.getCenter(), d.getZoom()), x(h.el.offsetWidth), this._onCreateLevel(h)), this._level = h, h;
        }
      },
      _onUpdateLevel: x,
      _onRemoveLevel: x,
      _onCreateLevel: x,
      _pruneTiles: function() {
        if (this._map) {
          var t, e, s = this._map.getZoom();
          if (s > this.options.maxZoom || s < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (t in this._tiles)
            e = this._tiles[t], e.retain = e.current;
          for (t in this._tiles)
            if (e = this._tiles[t], e.current && !e.active) {
              var h = e.coords;
              this._retainParent(h.x, h.y, h.z, h.z - 5) || this._retainChildren(h.x, h.y, h.z, h.z + 2);
            }
          for (t in this._tiles)
            this._tiles[t].retain || this._removeTile(t);
        }
      },
      _removeTilesAtZoom: function(t) {
        for (var e in this._tiles)
          this._tiles[e].coords.z === t && this._removeTile(e);
      },
      _removeAllTiles: function() {
        for (var t in this._tiles)
          this._removeTile(t);
      },
      _invalidateAll: function() {
        for (var t in this._levels)
          Tt(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
        this._removeAllTiles(), this._tileZoom = void 0;
      },
      _retainParent: function(t, e, s, h) {
        var d = Math.floor(t / 2), m = Math.floor(e / 2), b = s - 1, P = new E(+d, +m);
        P.z = +b;
        var D = this._tileCoordsToKey(P), U = this._tiles[D];
        return U && U.active ? (U.retain = !0, !0) : (U && U.loaded && (U.retain = !0), b > h ? this._retainParent(d, m, b, h) : !1);
      },
      _retainChildren: function(t, e, s, h) {
        for (var d = 2 * t; d < 2 * t + 2; d++)
          for (var m = 2 * e; m < 2 * e + 2; m++) {
            var b = new E(d, m);
            b.z = s + 1;
            var P = this._tileCoordsToKey(b), D = this._tiles[P];
            if (D && D.active) {
              D.retain = !0;
              continue;
            } else
              D && D.loaded && (D.retain = !0);
            s + 1 < h && this._retainChildren(d, m, s + 1, h);
          }
      },
      _resetView: function(t) {
        var e = t && (t.pinch || t.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
      },
      _animateZoom: function(t) {
        this._setView(t.center, t.zoom, !0, t.noUpdate);
      },
      _clampZoom: function(t) {
        var e = this.options;
        return e.minNativeZoom !== void 0 && t < e.minNativeZoom ? e.minNativeZoom : e.maxNativeZoom !== void 0 && e.maxNativeZoom < t ? e.maxNativeZoom : t;
      },
      _setView: function(t, e, s, h) {
        var d = Math.round(e);
        this.options.maxZoom !== void 0 && d > this.options.maxZoom || this.options.minZoom !== void 0 && d < this.options.minZoom ? d = void 0 : d = this._clampZoom(d);
        var m = this.options.updateWhenZooming && d !== this._tileZoom;
        (!h || m) && (this._tileZoom = d, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), d !== void 0 && this._update(t), s || this._pruneTiles(), this._noPrune = !!s), this._setZoomTransforms(t, e);
      },
      _setZoomTransforms: function(t, e) {
        for (var s in this._levels)
          this._setZoomTransform(this._levels[s], t, e);
      },
      _setZoomTransform: function(t, e, s) {
        var h = this._map.getZoomScale(s, t.zoom), d = t.origin.multiplyBy(h).subtract(this._map._getNewPixelOrigin(e, s)).round();
        rt.any3d ? ae(t.el, d, h) : kt(t.el, d);
      },
      _resetGrid: function() {
        var t = this._map, e = t.options.crs, s = this._tileSize = this.getTileSize(), h = this._tileZoom, d = this._map.getPixelWorldBounds(this._tileZoom);
        d && (this._globalTileRange = this._pxBoundsToTileRange(d)), this._wrapX = e.wrapLng && !this.options.noWrap && [
          Math.floor(t.project([0, e.wrapLng[0]], h).x / s.x),
          Math.ceil(t.project([0, e.wrapLng[1]], h).x / s.y)
        ], this._wrapY = e.wrapLat && !this.options.noWrap && [
          Math.floor(t.project([e.wrapLat[0], 0], h).y / s.x),
          Math.ceil(t.project([e.wrapLat[1], 0], h).y / s.y)
        ];
      },
      _onMoveEnd: function() {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function(t) {
        var e = this._map, s = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(), h = e.getZoomScale(s, this._tileZoom), d = e.project(t, this._tileZoom).floor(), m = e.getSize().divideBy(h * 2);
        return new O(d.subtract(m), d.add(m));
      },
      // Private method to load tiles in the grid's active zoom level according to map bounds
      _update: function(t) {
        var e = this._map;
        if (e) {
          var s = this._clampZoom(e.getZoom());
          if (t === void 0 && (t = e.getCenter()), this._tileZoom !== void 0) {
            var h = this._getTiledPixelBounds(t), d = this._pxBoundsToTileRange(h), m = d.getCenter(), b = [], P = this.options.keepBuffer, D = new O(
              d.getBottomLeft().subtract([P, -P]),
              d.getTopRight().add([P, -P])
            );
            if (!(isFinite(d.min.x) && isFinite(d.min.y) && isFinite(d.max.x) && isFinite(d.max.y)))
              throw new Error("Attempted to load an infinite number of tiles");
            for (var U in this._tiles) {
              var q = this._tiles[U].coords;
              (q.z !== this._tileZoom || !D.contains(new E(q.x, q.y))) && (this._tiles[U].current = !1);
            }
            if (Math.abs(s - this._tileZoom) > 1) {
              this._setView(t, s);
              return;
            }
            for (var at = d.min.y; at <= d.max.y; at++)
              for (var ct = d.min.x; ct <= d.max.x; ct++) {
                var Ot = new E(ct, at);
                if (Ot.z = this._tileZoom, !!this._isValidTile(Ot)) {
                  var St = this._tiles[this._tileCoordsToKey(Ot)];
                  St ? St.current = !0 : b.push(Ot);
                }
              }
            if (b.sort(function(zt, ke) {
              return zt.distanceTo(m) - ke.distanceTo(m);
            }), b.length !== 0) {
              this._loading || (this._loading = !0, this.fire("loading"));
              var Ut = document.createDocumentFragment();
              for (ct = 0; ct < b.length; ct++)
                this._addTile(b[ct], Ut);
              this._level.el.appendChild(Ut);
            }
          }
        }
      },
      _isValidTile: function(t) {
        var e = this._map.options.crs;
        if (!e.infinite) {
          var s = this._globalTileRange;
          if (!e.wrapLng && (t.x < s.min.x || t.x > s.max.x) || !e.wrapLat && (t.y < s.min.y || t.y > s.max.y))
            return !1;
        }
        if (!this.options.bounds)
          return !0;
        var h = this._tileCoordsToBounds(t);
        return et(this.options.bounds).overlaps(h);
      },
      _keyToBounds: function(t) {
        return this._tileCoordsToBounds(this._keyToTileCoords(t));
      },
      _tileCoordsToNwSe: function(t) {
        var e = this._map, s = this.getTileSize(), h = t.scaleBy(s), d = h.add(s), m = e.unproject(h, t.z), b = e.unproject(d, t.z);
        return [m, b];
      },
      // converts tile coordinates to its geographical bounds
      _tileCoordsToBounds: function(t) {
        var e = this._tileCoordsToNwSe(t), s = new Q(e[0], e[1]);
        return this.options.noWrap || (s = this._map.wrapLatLngBounds(s)), s;
      },
      // converts tile coordinates to key for the tile cache
      _tileCoordsToKey: function(t) {
        return t.x + ":" + t.y + ":" + t.z;
      },
      // converts tile cache key to coordinates
      _keyToTileCoords: function(t) {
        var e = t.split(":"), s = new E(+e[0], +e[1]);
        return s.z = +e[2], s;
      },
      _removeTile: function(t) {
        var e = this._tiles[t];
        e && (Tt(e.el), delete this._tiles[t], this.fire("tileunload", {
          tile: e.el,
          coords: this._keyToTileCoords(t)
        }));
      },
      _initTile: function(t) {
        ht(t, "leaflet-tile");
        var e = this.getTileSize();
        t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = x, t.onmousemove = x, rt.ielt9 && this.options.opacity < 1 && Rt(t, this.options.opacity);
      },
      _addTile: function(t, e) {
        var s = this._getTilePos(t), h = this._tileCoordsToKey(t), d = this.createTile(this._wrapCoords(t), c(this._tileReady, this, t));
        this._initTile(d), this.createTile.length < 2 && tt(c(this._tileReady, this, t, null, d)), kt(d, s), this._tiles[h] = {
          el: d,
          coords: t,
          current: !0
        }, e.appendChild(d), this.fire("tileloadstart", {
          tile: d,
          coords: t
        });
      },
      _tileReady: function(t, e, s) {
        e && this.fire("tileerror", {
          error: e,
          tile: s,
          coords: t
        });
        var h = this._tileCoordsToKey(t);
        s = this._tiles[h], s && (s.loaded = +new Date(), this._map._fadeAnimated ? (Rt(s.el, 0), R(this._fadeFrame), this._fadeFrame = tt(this._updateOpacity, this)) : (s.active = !0, this._pruneTiles()), e || (ht(s.el, "leaflet-tile-loaded"), this.fire("tileload", {
          tile: s.el,
          coords: t
        })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), rt.ielt9 || !this._map._fadeAnimated ? tt(this._pruneTiles, this) : setTimeout(c(this._pruneTiles, this), 250)));
      },
      _getTilePos: function(t) {
        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function(t) {
        var e = new E(
          this._wrapX ? y(t.x, this._wrapX) : t.x,
          this._wrapY ? y(t.y, this._wrapY) : t.y
        );
        return e.z = t.z, e;
      },
      _pxBoundsToTileRange: function(t) {
        var e = this.getTileSize();
        return new O(
          t.min.unscaleBy(e).floor(),
          t.max.unscaleBy(e).ceil().subtract([1, 1])
        );
      },
      _noTilesToLoad: function() {
        for (var t in this._tiles)
          if (!this._tiles[t].loaded)
            return !1;
        return !0;
      }
    });
    function na(t) {
      return new je(t);
    }
    var Me = je.extend({
      // @section
      // @aka TileLayer options
      options: {
        // @option minZoom: Number = 0
        // The minimum zoom level down to which this layer will be displayed (inclusive).
        minZoom: 0,
        // @option maxZoom: Number = 18
        // The maximum zoom level up to which this layer will be displayed (inclusive).
        maxZoom: 18,
        // @option subdomains: String|String[] = 'abc'
        // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
        subdomains: "abc",
        // @option errorTileUrl: String = ''
        // URL to the tile image to show in place of the tile that failed to load.
        errorTileUrl: "",
        // @option zoomOffset: Number = 0
        // The zoom number used in tile URLs will be offset with this value.
        zoomOffset: 0,
        // @option tms: Boolean = false
        // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
        tms: !1,
        // @option zoomReverse: Boolean = false
        // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
        zoomReverse: !1,
        // @option detectRetina: Boolean = false
        // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
        detectRetina: !1,
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the tiles.
        // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1,
        // @option referrerPolicy: Boolean|String = false
        // Whether the referrerPolicy attribute will be added to the tiles.
        // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
        // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
        // (e.g. to validate an API token).
        // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
        referrerPolicy: !1
      },
      initialize: function(t, e) {
        this._url = t, e = ot(this, e), e.detectRetina && rt.retina && e.maxZoom > 0 ? (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), typeof e.subdomains == "string" && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove);
      },
      // @method setUrl(url: String, noRedraw?: Boolean): this
      // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
      // If the URL does not change, the layer will not be redrawn unless
      // the noRedraw parameter is set to false.
      setUrl: function(t, e) {
        return this._url === t && e === void 0 && (e = !0), this._url = t, e || this.redraw(), this;
      },
      // @method createTile(coords: Object, done?: Function): HTMLElement
      // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
      // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
      // callback is called when the tile has been loaded.
      createTile: function(t, e) {
        var s = document.createElement("img");
        return lt(s, "load", c(this._tileOnLoad, this, e, s)), lt(s, "error", c(this._tileOnError, this, e, s)), (this.options.crossOrigin || this.options.crossOrigin === "") && (s.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (s.referrerPolicy = this.options.referrerPolicy), s.alt = "", s.src = this.getTileUrl(t), s;
      },
      // @section Extension methods
      // @uninheritable
      // Layers extending `TileLayer` might reimplement the following method.
      // @method getTileUrl(coords: Object): String
      // Called only internally, returns the URL for a tile given its coordinates.
      // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
      getTileUrl: function(t) {
        var e = {
          r: rt.retina ? "@2x" : "",
          s: this._getSubdomain(t),
          x: t.x,
          y: t.y,
          z: this._getZoomForUrl()
        };
        if (this._map && !this._map.options.crs.infinite) {
          var s = this._globalTileRange.max.y - t.y;
          this.options.tms && (e.y = s), e["-y"] = s;
        }
        return C(this._url, o(e, this.options));
      },
      _tileOnLoad: function(t, e) {
        rt.ielt9 ? setTimeout(c(t, this, null, e), 0) : t(null, e);
      },
      _tileOnError: function(t, e, s) {
        var h = this.options.errorTileUrl;
        h && e.getAttribute("src") !== h && (e.src = h), t(s, e);
      },
      _onTileRemove: function(t) {
        t.tile.onload = null;
      },
      _getZoomForUrl: function() {
        var t = this._tileZoom, e = this.options.maxZoom, s = this.options.zoomReverse, h = this.options.zoomOffset;
        return s && (t = e - t), t + h;
      },
      _getSubdomain: function(t) {
        var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
        return this.options.subdomains[e];
      },
      // stops loading all tiles in the background layer
      _abortLoading: function() {
        var t, e;
        for (t in this._tiles)
          if (this._tiles[t].coords.z !== this._tileZoom && (e = this._tiles[t].el, e.onload = x, e.onerror = x, !e.complete)) {
            e.src = K;
            var s = this._tiles[t].coords;
            Tt(e), delete this._tiles[t], this.fire("tileabort", {
              tile: e,
              coords: s
            });
          }
      },
      _removeTile: function(t) {
        var e = this._tiles[t];
        if (e)
          return e.el.setAttribute("src", K), je.prototype._removeTile.call(this, t);
      },
      _tileReady: function(t, e, s) {
        if (!(!this._map || s && s.getAttribute("src") === K))
          return je.prototype._tileReady.call(this, t, e, s);
      }
    });
    function _o(t, e) {
      return new Me(t, e);
    }
    var mo = Me.extend({
      // @section
      // @aka TileLayer.WMS options
      // If any custom options not documented here are used, they will be sent to the
      // WMS server as extra parameters in each request URL. This can be useful for
      // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        // @option layers: String = ''
        // **(required)** Comma-separated list of WMS layers to show.
        layers: "",
        // @option styles: String = ''
        // Comma-separated list of WMS styles.
        styles: "",
        // @option format: String = 'image/jpeg'
        // WMS image format (use `'image/png'` for layers with transparency).
        format: "image/jpeg",
        // @option transparent: Boolean = false
        // If `true`, the WMS service will return images with transparency.
        transparent: !1,
        // @option version: String = '1.1.1'
        // Version of the WMS service to use
        version: "1.1.1"
      },
      options: {
        // @option crs: CRS = null
        // Coordinate Reference System to use for the WMS requests, defaults to
        // map CRS. Don't change this if you're not sure what it means.
        crs: null,
        // @option uppercase: Boolean = false
        // If `true`, WMS request parameter keys will be uppercase.
        uppercase: !1
      },
      initialize: function(t, e) {
        this._url = t;
        var s = o({}, this.defaultWmsParams);
        for (var h in e)
          h in this.options || (s[h] = e[h]);
        e = ot(this, e);
        var d = e.detectRetina && rt.retina ? 2 : 1, m = this.getTileSize();
        s.width = m.x * d, s.height = m.y * d, this.wmsParams = s;
      },
      onAdd: function(t) {
        this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[e] = this._crs.code, Me.prototype.onAdd.call(this, t);
      },
      getTileUrl: function(t) {
        var e = this._tileCoordsToNwSe(t), s = this._crs, h = A(s.project(e[0]), s.project(e[1])), d = h.min, m = h.max, b = (this._wmsVersion >= 1.3 && this._crs === ao ? [d.y, d.x, m.y, m.x] : [d.x, d.y, m.x, m.y]).join(","), P = Me.prototype.getTileUrl.call(this, t);
        return P + Z(this.wmsParams, P, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + b;
      },
      // @method setParams(params: Object, noRedraw?: Boolean): this
      // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
      setParams: function(t, e) {
        return o(this.wmsParams, t), e || this.redraw(), this;
      }
    });
    function oa(t, e) {
      return new mo(t, e);
    }
    Me.WMS = mo, _o.wms = oa;
    var Qt = Gt.extend({
      // @section
      // @aka Renderer options
      options: {
        // @option padding: Number = 0.1
        // How much to extend the clip area around the map view (relative to its size)
        // e.g. 0.1 would be 10% of map view in each direction
        padding: 0.1
      },
      initialize: function(t) {
        ot(this, t), p(this), this._layers = this._layers || {};
      },
      onAdd: function() {
        this._container || (this._initContainer(), ht(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
      },
      onRemove: function() {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      },
      getEvents: function() {
        var t = {
          viewreset: this._reset,
          zoom: this._onZoom,
          moveend: this._update,
          zoomend: this._onZoomEnd
        };
        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
      },
      _onAnimZoom: function(t) {
        this._updateTransform(t.center, t.zoom);
      },
      _onZoom: function() {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      },
      _updateTransform: function(t, e) {
        var s = this._map.getZoomScale(e, this._zoom), h = this._map.getSize().multiplyBy(0.5 + this.options.padding), d = this._map.project(this._center, e), m = h.multiplyBy(-s).add(d).subtract(this._map._getNewPixelOrigin(t, e));
        rt.any3d ? ae(this._container, m, s) : kt(this._container, m);
      },
      _reset: function() {
        this._update(), this._updateTransform(this._center, this._zoom);
        for (var t in this._layers)
          this._layers[t]._reset();
      },
      _onZoomEnd: function() {
        for (var t in this._layers)
          this._layers[t]._project();
      },
      _updatePaths: function() {
        for (var t in this._layers)
          this._layers[t]._update();
      },
      _update: function() {
        var t = this.options.padding, e = this._map.getSize(), s = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
        this._bounds = new O(s, s.add(e.multiplyBy(1 + t * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      }
    }), go = Qt.extend({
      // @section
      // @aka Canvas options
      options: {
        // @option tolerance: Number = 0
        // How much to extend the click tolerance around a path/object on the map.
        tolerance: 0
      },
      getEvents: function() {
        var t = Qt.prototype.getEvents.call(this);
        return t.viewprereset = this._onViewPreReset, t;
      },
      _onViewPreReset: function() {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function() {
        Qt.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function() {
        var t = this._container = document.createElement("canvas");
        lt(t, "mousemove", this._onMouseMove, this), lt(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), lt(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
      },
      _destroyContainer: function() {
        R(this._redrawRequest), delete this._ctx, Tt(this._container), gt(this._container), delete this._container;
      },
      _updatePaths: function() {
        if (!this._postponeUpdatePaths) {
          var t;
          this._redrawBounds = null;
          for (var e in this._layers)
            t = this._layers[e], t._update();
          this._redraw();
        }
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          Qt.prototype._update.call(this);
          var t = this._bounds, e = this._container, s = t.getSize(), h = rt.retina ? 2 : 1;
          kt(e, t.min), e.width = h * s.x, e.height = h * s.y, e.style.width = s.x + "px", e.style.height = s.y + "px", rt.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
        }
      },
      _reset: function() {
        Qt.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
      },
      _initPath: function(t) {
        this._updateDashArray(t), this._layers[p(t)] = t;
        var e = t._order = {
          layer: t,
          prev: this._drawLast,
          next: null
        };
        this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast;
      },
      _addPath: function(t) {
        this._requestRedraw(t);
      },
      _removePath: function(t) {
        var e = t._order, s = e.next, h = e.prev;
        s ? s.prev = h : this._drawLast = h, h ? h.next = s : this._drawFirst = s, delete t._order, delete this._layers[p(t)], this._requestRedraw(t);
      },
      _updatePath: function(t) {
        this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
      },
      _updateStyle: function(t) {
        this._updateDashArray(t), this._requestRedraw(t);
      },
      _updateDashArray: function(t) {
        if (typeof t.options.dashArray == "string") {
          var e = t.options.dashArray.split(/[, ]+/), s = [], h, d;
          for (d = 0; d < e.length; d++) {
            if (h = Number(e[d]), isNaN(h))
              return;
            s.push(h);
          }
          t.options._dashArray = s;
        } else
          t.options._dashArray = t.options.dashArray;
      },
      _requestRedraw: function(t) {
        this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || tt(this._redraw, this));
      },
      _extendRedrawBounds: function(t) {
        if (t._pxBounds) {
          var e = (t.options.weight || 0) + 1;
          this._redrawBounds = this._redrawBounds || new O(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
        }
      },
      _redraw: function() {
        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
      },
      _clear: function() {
        var t = this._redrawBounds;
        if (t) {
          var e = t.getSize();
          this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
        } else
          this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
      },
      _draw: function() {
        var t, e = this._redrawBounds;
        if (this._ctx.save(), e) {
          var s = e.getSize();
          this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, s.x, s.y), this._ctx.clip();
        }
        this._drawing = !0;
        for (var h = this._drawFirst; h; h = h.next)
          t = h.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
        this._drawing = !1, this._ctx.restore();
      },
      _updatePoly: function(t, e) {
        if (this._drawing) {
          var s, h, d, m, b = t._parts, P = b.length, D = this._ctx;
          if (P) {
            for (D.beginPath(), s = 0; s < P; s++) {
              for (h = 0, d = b[s].length; h < d; h++)
                m = b[s][h], D[h ? "lineTo" : "moveTo"](m.x, m.y);
              e && D.closePath();
            }
            this._fillStroke(D, t);
          }
        }
      },
      _updateCircle: function(t) {
        if (!(!this._drawing || t._empty())) {
          var e = t._point, s = this._ctx, h = Math.max(Math.round(t._radius), 1), d = (Math.max(Math.round(t._radiusY), 1) || h) / h;
          d !== 1 && (s.save(), s.scale(1, d)), s.beginPath(), s.arc(e.x, e.y / d, h, 0, Math.PI * 2, !1), d !== 1 && s.restore(), this._fillStroke(s, t);
        }
      },
      _fillStroke: function(t, e) {
        var s = e.options;
        s.fill && (t.globalAlpha = s.fillOpacity, t.fillStyle = s.fillColor || s.color, t.fill(s.fillRule || "evenodd")), s.stroke && s.weight !== 0 && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = s.opacity, t.lineWidth = s.weight, t.strokeStyle = s.color, t.lineCap = s.lineCap, t.lineJoin = s.lineJoin, t.stroke());
      },
      // Canvas obviously doesn't have mouse events for individual drawn objects,
      // so we emulate that by calculating what's under the mouse on mousemove/click manually
      _onClick: function(t) {
        for (var e = this._map.mouseEventToLayerPoint(t), s, h, d = this._drawFirst; d; d = d.next)
          s = d.layer, s.options.interactive && s._containsPoint(e) && (!(t.type === "click" || t.type === "preclick") || !this._map._draggableMoved(s)) && (h = s);
        this._fireEvent(h ? [h] : !1, t);
      },
      _onMouseMove: function(t) {
        if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
          var e = this._map.mouseEventToLayerPoint(t);
          this._handleMouseHover(t, e);
        }
      },
      _handleMouseOut: function(t) {
        var e = this._hoveredLayer;
        e && (Mt(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
      },
      _handleMouseHover: function(t, e) {
        if (!this._mouseHoverThrottled) {
          for (var s, h, d = this._drawFirst; d; d = d.next)
            s = d.layer, s.options.interactive && s._containsPoint(e) && (h = s);
          h !== this._hoveredLayer && (this._handleMouseOut(t), h && (ht(this._container, "leaflet-interactive"), this._fireEvent([h], t, "mouseover"), this._hoveredLayer = h)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, t), this._mouseHoverThrottled = !0, setTimeout(c(function() {
            this._mouseHoverThrottled = !1;
          }, this), 32);
        }
      },
      _fireEvent: function(t, e, s) {
        this._map._fireDOMEvent(e, s || e.type, t);
      },
      _bringToFront: function(t) {
        var e = t._order;
        if (e) {
          var s = e.next, h = e.prev;
          if (s)
            s.prev = h;
          else
            return;
          h ? h.next = s : s && (this._drawFirst = s), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t);
        }
      },
      _bringToBack: function(t) {
        var e = t._order;
        if (e) {
          var s = e.next, h = e.prev;
          if (h)
            h.next = s;
          else
            return;
          s ? s.prev = h : h && (this._drawLast = h), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t);
        }
      }
    });
    function vo(t) {
      return rt.canvas ? new go(t) : null;
    }
    var Ze = function() {
      try {
        return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
          return document.createElement("<lvml:" + t + ' class="lvml">');
        };
      } catch {
      }
      return function(t) {
        return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    }(), ra = {
      _initContainer: function() {
        this._container = pt("div", "leaflet-vml-container");
      },
      _update: function() {
        this._map._animatingZoom || (Qt.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function(t) {
        var e = t._container = Ze("shape");
        ht(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = Ze("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[p(t)] = t;
      },
      _addPath: function(t) {
        var e = t._container;
        this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
      },
      _removePath: function(t) {
        var e = t._container;
        Tt(e), t.removeInteractiveTarget(e), delete this._layers[p(t)];
      },
      _updateStyle: function(t) {
        var e = t._stroke, s = t._fill, h = t.options, d = t._container;
        d.stroked = !!h.stroke, d.filled = !!h.fill, h.stroke ? (e || (e = t._stroke = Ze("stroke")), d.appendChild(e), e.weight = h.weight + "px", e.color = h.color, e.opacity = h.opacity, h.dashArray ? e.dashStyle = z(h.dashArray) ? h.dashArray.join(" ") : h.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = h.lineCap.replace("butt", "flat"), e.joinstyle = h.lineJoin) : e && (d.removeChild(e), t._stroke = null), h.fill ? (s || (s = t._fill = Ze("fill")), d.appendChild(s), s.color = h.fillColor || h.color, s.opacity = h.fillOpacity) : s && (d.removeChild(s), t._fill = null);
      },
      _updateCircle: function(t) {
        var e = t._point.round(), s = Math.round(t._radius), h = Math.round(t._radiusY || s);
        this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + s + "," + h + " 0," + 65535 * 360);
      },
      _setPath: function(t, e) {
        t._path.v = e;
      },
      _bringToFront: function(t) {
        be(t._container);
      },
      _bringToBack: function(t) {
        Le(t._container);
      }
    }, vi = rt.vml ? Ze : $t, Ve = Qt.extend({
      _initContainer: function() {
        this._container = vi("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = vi("g"), this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function() {
        Tt(this._container), gt(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          Qt.prototype._update.call(this);
          var t = this._bounds, e = t.getSize(), s = this._container;
          (!this._svgSize || !this._svgSize.equals(e)) && (this._svgSize = e, s.setAttribute("width", e.x), s.setAttribute("height", e.y)), kt(s, t.min), s.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update");
        }
      },
      // methods below are called by vector layers implementations
      _initPath: function(t) {
        var e = t._path = vi("path");
        t.options.className && ht(e, t.options.className), t.options.interactive && ht(e, "leaflet-interactive"), this._updateStyle(t), this._layers[p(t)] = t;
      },
      _addPath: function(t) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
      },
      _removePath: function(t) {
        Tt(t._path), t.removeInteractiveTarget(t._path), delete this._layers[p(t)];
      },
      _updatePath: function(t) {
        t._project(), t._update();
      },
      _updateStyle: function(t) {
        var e = t._path, s = t.options;
        e && (s.stroke ? (e.setAttribute("stroke", s.color), e.setAttribute("stroke-opacity", s.opacity), e.setAttribute("stroke-width", s.weight), e.setAttribute("stroke-linecap", s.lineCap), e.setAttribute("stroke-linejoin", s.lineJoin), s.dashArray ? e.setAttribute("stroke-dasharray", s.dashArray) : e.removeAttribute("stroke-dasharray"), s.dashOffset ? e.setAttribute("stroke-dashoffset", s.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), s.fill ? (e.setAttribute("fill", s.fillColor || s.color), e.setAttribute("fill-opacity", s.fillOpacity), e.setAttribute("fill-rule", s.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
      },
      _updatePoly: function(t, e) {
        this._setPath(t, Se(t._parts, e));
      },
      _updateCircle: function(t) {
        var e = t._point, s = Math.max(Math.round(t._radius), 1), h = Math.max(Math.round(t._radiusY), 1) || s, d = "a" + s + "," + h + " 0 1,0 ", m = t._empty() ? "M0 0" : "M" + (e.x - s) + "," + e.y + d + s * 2 + ",0 " + d + -s * 2 + ",0 ";
        this._setPath(t, m);
      },
      _setPath: function(t, e) {
        t._path.setAttribute("d", e);
      },
      // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
      _bringToFront: function(t) {
        be(t._path);
      },
      _bringToBack: function(t) {
        Le(t._path);
      }
    });
    rt.vml && Ve.include(ra);
    function yo(t) {
      return rt.svg || rt.vml ? new Ve(t) : null;
    }
    ut.include({
      // @namespace Map; @method getRenderer(layer: Path): Renderer
      // Returns the instance of `Renderer` that should be used to render the given
      // `Path`. It will ensure that the `renderer` options of the map and paths
      // are respected, and that the renderers do exist on the map.
      getRenderer: function(t) {
        var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
        return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e;
      },
      _getPaneRenderer: function(t) {
        if (t === "overlayPane" || t === void 0)
          return !1;
        var e = this._paneRenderers[t];
        return e === void 0 && (e = this._createRenderer({ pane: t }), this._paneRenderers[t] = e), e;
      },
      _createRenderer: function(t) {
        return this.options.preferCanvas && vo(t) || yo(t);
      }
    });
    var bo = Te.extend({
      initialize: function(t, e) {
        Te.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
      },
      // @method setBounds(latLngBounds: LatLngBounds): this
      // Redraws the rectangle with the passed bounds.
      setBounds: function(t) {
        return this.setLatLngs(this._boundsToLatLngs(t));
      },
      _boundsToLatLngs: function(t) {
        return t = et(t), [
          t.getSouthWest(),
          t.getNorthWest(),
          t.getNorthEast(),
          t.getSouthEast()
        ];
      }
    });
    function sa(t, e) {
      return new bo(t, e);
    }
    Ve.create = vi, Ve.pointsToPath = Se, Jt.geometryToLayer = ui, Jt.coordsToLatLng = Ji, Jt.coordsToLatLngs = di, Jt.latLngToCoords = Qi, Jt.latLngsToCoords = fi, Jt.getFeature = Ee, Jt.asFeature = pi, ut.mergeOptions({
      // @option boxZoom: Boolean = true
      // Whether the map can be zoomed to a rectangular area specified by
      // dragging the mouse while pressing the shift key.
      boxZoom: !0
    });
    var Lo = Wt.extend({
      initialize: function(t) {
        this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
      },
      addHooks: function() {
        lt(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function() {
        gt(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function() {
        return this._moved;
      },
      _destroy: function() {
        Tt(this._pane), delete this._pane;
      },
      _resetState: function() {
        this._resetStateTimeout = 0, this._moved = !1;
      },
      _clearDeferredResetState: function() {
        this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
      },
      _onMouseDown: function(t) {
        if (!t.shiftKey || t.which !== 1 && t.button !== 1)
          return !1;
        this._clearDeferredResetState(), this._resetState(), Re(), zi(), this._startPoint = this._map.mouseEventToContainerPoint(t), lt(document, {
          contextmenu: ce,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseMove: function(t) {
        this._moved || (this._moved = !0, this._box = pt("div", "leaflet-zoom-box", this._container), ht(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
        var e = new O(this._point, this._startPoint), s = e.getSize();
        kt(this._box, e.min), this._box.style.width = s.x + "px", this._box.style.height = s.y + "px";
      },
      _finish: function() {
        this._moved && (Tt(this._box), Mt(this._container, "leaflet-crosshair")), Be(), Ri(), gt(document, {
          contextmenu: ce,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseUp: function(t) {
        if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(c(this._resetState, this), 0);
          var e = new Q(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          );
          this._map.fitBounds(e).fire("boxzoomend", { boxZoomBounds: e });
        }
      },
      _onKeyDown: function(t) {
        t.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
      }
    });
    ut.addInitHook("addHandler", "boxZoom", Lo), ut.mergeOptions({
      // @option doubleClickZoom: Boolean|String = true
      // Whether the map can be zoomed in by double clicking on it and
      // zoomed out by double clicking while holding shift. If passed
      // `'center'`, double-click zoom will zoom to the center of the
      //  view regardless of where the mouse was.
      doubleClickZoom: !0
    });
    var xo = Wt.extend({
      addHooks: function() {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function() {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function(t) {
        var e = this._map, s = e.getZoom(), h = e.options.zoomDelta, d = t.originalEvent.shiftKey ? s - h : s + h;
        e.options.doubleClickZoom === "center" ? e.setZoom(d) : e.setZoomAround(t.containerPoint, d);
      }
    });
    ut.addInitHook("addHandler", "doubleClickZoom", xo), ut.mergeOptions({
      // @option dragging: Boolean = true
      // Whether the map is draggable with mouse/touch or not.
      dragging: !0,
      // @section Panning Inertia Options
      // @option inertia: Boolean = *
      // If enabled, panning of the map will have an inertia effect where
      // the map builds momentum while dragging and continues moving in
      // the same direction for some time. Feels especially nice on touch
      // devices. Enabled by default.
      inertia: !0,
      // @option inertiaDeceleration: Number = 3000
      // The rate with which the inertial movement slows down, in pixels/second².
      inertiaDeceleration: 3400,
      // px/s^2
      // @option inertiaMaxSpeed: Number = Infinity
      // Max speed of the inertial movement, in pixels/second.
      inertiaMaxSpeed: 1 / 0,
      // px/s
      // @option easeLinearity: Number = 0.2
      easeLinearity: 0.2,
      // TODO refactor, move to CRS
      // @option worldCopyJump: Boolean = false
      // With this option enabled, the map tracks when you pan to another "copy"
      // of the world and seamlessly jumps to the original one so that all overlays
      // like markers and vector layers are still visible.
      worldCopyJump: !1,
      // @option maxBoundsViscosity: Number = 0.0
      // If `maxBounds` is set, this option will control how solid the bounds
      // are when dragging the map around. The default value of `0.0` allows the
      // user to drag outside the bounds at normal speed, higher values will
      // slow down map dragging outside bounds, and `1.0` makes the bounds fully
      // solid, preventing the user from dragging outside the bounds.
      maxBoundsViscosity: 0
    });
    var wo = Wt.extend({
      addHooks: function() {
        if (!this._draggable) {
          var t = this._map;
          this._draggable = new ne(t._mapPane, t._container), this._draggable.on({
            dragstart: this._onDragStart,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
        }
        ht(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      },
      removeHooks: function() {
        Mt(this._map._container, "leaflet-grab"), Mt(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      moving: function() {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function() {
        var t = this._map;
        if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
          var e = et(this._map.options.maxBounds);
          this._offsetLimit = A(
            this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
            this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
          ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
        } else
          this._offsetLimit = null;
        t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
      },
      _onDrag: function(t) {
        if (this._map.options.inertia) {
          var e = this._lastTime = +new Date(), s = this._lastPos = this._draggable._absPos || this._draggable._newPos;
          this._positions.push(s), this._times.push(e), this._prunePositions(e);
        }
        this._map.fire("move", t).fire("drag", t);
      },
      _prunePositions: function(t) {
        for (; this._positions.length > 1 && t - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function() {
        var t = this._map.getSize().divideBy(2), e = this._map.latLngToLayerPoint([0, 0]);
        this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
      },
      _viscousLimit: function(t, e) {
        return t - (t - e) * this._viscosity;
      },
      _onPreDragLimit: function() {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var t = this._draggable._newPos.subtract(this._draggable._startPos), e = this._offsetLimit;
          t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t);
        }
      },
      _onPreDragWrap: function() {
        var t = this._worldWidth, e = Math.round(t / 2), s = this._initialWorldOffset, h = this._draggable._newPos.x, d = (h - e + s) % t + e - s, m = (h + e + s) % t - e - s, b = Math.abs(d + s) < Math.abs(m + s) ? d : m;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = b;
      },
      _onDragEnd: function(t) {
        var e = this._map, s = e.options, h = !s.inertia || t.noInertia || this._times.length < 2;
        if (e.fire("dragend", t), h)
          e.fire("moveend");
        else {
          this._prunePositions(+new Date());
          var d = this._lastPos.subtract(this._positions[0]), m = (this._lastTime - this._times[0]) / 1e3, b = s.easeLinearity, P = d.multiplyBy(b / m), D = P.distanceTo([0, 0]), U = Math.min(s.inertiaMaxSpeed, D), q = P.multiplyBy(U / D), at = U / (s.inertiaDeceleration * b), ct = q.multiplyBy(-at / 2).round();
          !ct.x && !ct.y ? e.fire("moveend") : (ct = e._limitOffset(ct, e.options.maxBounds), tt(function() {
            e.panBy(ct, {
              duration: at,
              easeLinearity: b,
              noMoveStart: !0,
              animate: !0
            });
          }));
        }
      }
    });
    ut.addInitHook("addHandler", "dragging", wo), ut.mergeOptions({
      // @option keyboard: Boolean = true
      // Makes the map focusable and allows users to navigate the map with keyboard
      // arrows and `+`/`-` keys.
      keyboard: !0,
      // @option keyboardPanDelta: Number = 80
      // Amount of pixels to pan when pressing an arrow key.
      keyboardPanDelta: 80
    });
    var To = Wt.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173]
      },
      initialize: function(t) {
        this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
      },
      addHooks: function() {
        var t = this._map._container;
        t.tabIndex <= 0 && (t.tabIndex = "0"), lt(t, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.on({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      removeHooks: function() {
        this._removeHooks(), gt(this._map._container, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.off({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      _onMouseDown: function() {
        if (!this._focused) {
          var t = document.body, e = document.documentElement, s = t.scrollTop || e.scrollTop, h = t.scrollLeft || e.scrollLeft;
          this._map._container.focus(), window.scrollTo(h, s);
        }
      },
      _onFocus: function() {
        this._focused = !0, this._map.fire("focus");
      },
      _onBlur: function() {
        this._focused = !1, this._map.fire("blur");
      },
      _setPanDelta: function(t) {
        var e = this._panKeys = {}, s = this.keyCodes, h, d;
        for (h = 0, d = s.left.length; h < d; h++)
          e[s.left[h]] = [-1 * t, 0];
        for (h = 0, d = s.right.length; h < d; h++)
          e[s.right[h]] = [t, 0];
        for (h = 0, d = s.down.length; h < d; h++)
          e[s.down[h]] = [0, t];
        for (h = 0, d = s.up.length; h < d; h++)
          e[s.up[h]] = [0, -1 * t];
      },
      _setZoomDelta: function(t) {
        var e = this._zoomKeys = {}, s = this.keyCodes, h, d;
        for (h = 0, d = s.zoomIn.length; h < d; h++)
          e[s.zoomIn[h]] = t;
        for (h = 0, d = s.zoomOut.length; h < d; h++)
          e[s.zoomOut[h]] = -t;
      },
      _addHooks: function() {
        lt(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function() {
        gt(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function(t) {
        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
          var e = t.keyCode, s = this._map, h;
          if (e in this._panKeys) {
            if (!s._panAnim || !s._panAnim._inProgress)
              if (h = this._panKeys[e], t.shiftKey && (h = k(h).multiplyBy(3)), s.options.maxBounds && (h = s._limitOffset(k(h), s.options.maxBounds)), s.options.worldCopyJump) {
                var d = s.wrapLatLng(s.unproject(s.project(s.getCenter()).add(h)));
                s.panTo(d);
              } else
                s.panBy(h);
          } else if (e in this._zoomKeys)
            s.setZoom(s.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
          else if (e === 27 && s._popup && s._popup.options.closeOnEscapeKey)
            s.closePopup();
          else
            return;
          ce(t);
        }
      }
    });
    ut.addInitHook("addHandler", "keyboard", To), ut.mergeOptions({
      // @section Mouse wheel options
      // @option scrollWheelZoom: Boolean|String = true
      // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
      // it will zoom to the center of the view regardless of where the mouse was.
      scrollWheelZoom: !0,
      // @option wheelDebounceTime: Number = 40
      // Limits the rate at which a wheel can fire (in milliseconds). By default
      // user can't zoom via wheel more often than once per 40 ms.
      wheelDebounceTime: 40,
      // @option wheelPxPerZoomLevel: Number = 60
      // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
      // mean a change of one full zoom level. Smaller values will make wheel-zooming
      // faster (and vice versa).
      wheelPxPerZoomLevel: 60
    });
    var Eo = Wt.extend({
      addHooks: function() {
        lt(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      },
      removeHooks: function() {
        gt(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function(t) {
        var e = Xn(t), s = this._map.options.wheelDebounceTime;
        this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date());
        var h = Math.max(s - (+new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(c(this._performZoom, this), h), ce(t);
      },
      _performZoom: function() {
        var t = this._map, e = t.getZoom(), s = this._map.options.zoomSnap || 0;
        t._stop();
        var h = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), d = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(h)))) / Math.LN2, m = s ? Math.ceil(d / s) * s : d, b = t._limitZoom(e + (this._delta > 0 ? m : -m)) - e;
        this._delta = 0, this._startTime = null, b && (t.options.scrollWheelZoom === "center" ? t.setZoom(e + b) : t.setZoomAround(this._lastMousePos, e + b));
      }
    });
    ut.addInitHook("addHandler", "scrollWheelZoom", Eo);
    var aa = 600;
    ut.mergeOptions({
      // @section Touch interaction options
      // @option tapHold: Boolean
      // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
      tapHold: rt.touchNative && rt.safari && rt.mobile,
      // @option tapTolerance: Number = 15
      // The max number of pixels a user can shift his finger during touch
      // for it to be considered a valid tap.
      tapTolerance: 15
    });
    var Mo = Wt.extend({
      addHooks: function() {
        lt(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function() {
        gt(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function(t) {
        if (clearTimeout(this._holdTimeout), t.touches.length === 1) {
          var e = t.touches[0];
          this._startPos = this._newPos = new E(e.clientX, e.clientY), this._holdTimeout = setTimeout(c(function() {
            this._cancel(), this._isTapValid() && (lt(document, "touchend", It), lt(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e));
          }, this), aa), lt(document, "touchend touchcancel contextmenu", this._cancel, this), lt(document, "touchmove", this._onMove, this);
        }
      },
      _cancelClickPrevent: function t() {
        gt(document, "touchend", It), gt(document, "touchend touchcancel", t);
      },
      _cancel: function() {
        clearTimeout(this._holdTimeout), gt(document, "touchend touchcancel contextmenu", this._cancel, this), gt(document, "touchmove", this._onMove, this);
      },
      _onMove: function(t) {
        var e = t.touches[0];
        this._newPos = new E(e.clientX, e.clientY);
      },
      _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      },
      _simulateEvent: function(t, e) {
        var s = new MouseEvent(t, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          // detail: 1,
          screenX: e.screenX,
          screenY: e.screenY,
          clientX: e.clientX,
          clientY: e.clientY
          // button: 2,
          // buttons: 2
        });
        s._simulated = !0, e.target.dispatchEvent(s);
      }
    });
    ut.addInitHook("addHandler", "tapHold", Mo), ut.mergeOptions({
      // @section Touch interaction options
      // @option touchZoom: Boolean|String = *
      // Whether the map can be zoomed by touch-dragging with two fingers. If
      // passed `'center'`, it will zoom to the center of the view regardless of
      // where the touch events (fingers) were. Enabled for touch-capable web
      // browsers.
      touchZoom: rt.touch,
      // @option bounceAtZoomLimits: Boolean = true
      // Set it to false if you don't want the map to zoom beyond min/max zoom
      // and then bounce back when pinch-zooming.
      bounceAtZoomLimits: !0
    });
    var ko = Wt.extend({
      addHooks: function() {
        ht(this._map._container, "leaflet-touch-zoom"), lt(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function() {
        Mt(this._map._container, "leaflet-touch-zoom"), gt(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function(t) {
        var e = this._map;
        if (!(!t.touches || t.touches.length !== 2 || e._animatingZoom || this._zooming)) {
          var s = e.mouseEventToContainerPoint(t.touches[0]), h = e.mouseEventToContainerPoint(t.touches[1]);
          this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), e.options.touchZoom !== "center" && (this._pinchStartLatLng = e.containerPointToLatLng(s.add(h)._divideBy(2))), this._startDist = s.distanceTo(h), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), lt(document, "touchmove", this._onTouchMove, this), lt(document, "touchend touchcancel", this._onTouchEnd, this), It(t);
        }
      },
      _onTouchMove: function(t) {
        if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
          var e = this._map, s = e.mouseEventToContainerPoint(t.touches[0]), h = e.mouseEventToContainerPoint(t.touches[1]), d = s.distanceTo(h) / this._startDist;
          if (this._zoom = e.getScaleZoom(d, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && d < 1 || this._zoom > e.getMaxZoom() && d > 1) && (this._zoom = e._limitZoom(this._zoom)), e.options.touchZoom === "center") {
            if (this._center = this._startLatLng, d === 1)
              return;
          } else {
            var m = s._add(h)._divideBy(2)._subtract(this._centerPoint);
            if (d === 1 && m.x === 0 && m.y === 0)
              return;
            this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(m), this._zoom);
          }
          this._moved || (e._moveStart(!0, !1), this._moved = !0), R(this._animRequest);
          var b = c(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
          this._animRequest = tt(b, this, !0), It(t);
        }
      },
      _onTouchEnd: function() {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        this._zooming = !1, R(this._animRequest), gt(document, "touchmove", this._onTouchMove, this), gt(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      }
    });
    ut.addInitHook("addHandler", "touchZoom", ko), ut.BoxZoom = Lo, ut.DoubleClickZoom = xo, ut.Drag = wo, ut.Keyboard = To, ut.ScrollWheelZoom = Eo, ut.TapHold = Mo, ut.TouchZoom = ko, r.Bounds = O, r.Browser = rt, r.CRS = yt, r.Canvas = go, r.Circle = Ki, r.CircleMarker = ci, r.Class = F, r.Control = Ft, r.DivIcon = po, r.DivOverlay = Yt, r.DomEvent = Es, r.DomUtil = ws, r.Draggable = ne, r.Evented = $, r.FeatureGroup = qt, r.GeoJSON = Jt, r.GridLayer = je, r.Handler = Wt, r.Icon = we, r.ImageOverlay = _i, r.LatLng = st, r.LatLngBounds = Q, r.Layer = Gt, r.LayerGroup = xe, r.LineUtil = Us, r.Map = ut, r.Marker = hi, r.Mixin = Is, r.Path = oe, r.Point = E, r.PolyUtil = As, r.Polygon = Te, r.Polyline = Kt, r.Popup = mi, r.PosAnimation = $n, r.Projection = Ns, r.Rectangle = bo, r.Renderer = Qt, r.SVG = Ve, r.SVGOverlay = fo, r.TileLayer = Me, r.Tooltip = gi, r.Transformation = jt, r.Util = j, r.VideoOverlay = uo, r.bind = c, r.bounds = A, r.canvas = vo, r.circle = Ys, r.circleMarker = Ws, r.control = He, r.divIcon = ia, r.extend = o, r.featureGroup = js, r.geoJSON = co, r.geoJson = qs, r.gridLayer = na, r.icon = Zs, r.imageOverlay = Ks, r.latLng = g, r.latLngBounds = et, r.layerGroup = Gs, r.map = Ms, r.marker = Vs, r.point = k, r.polygon = $s, r.polyline = Xs, r.popup = ta, r.rectangle = sa, r.setOptions = ot, r.stamp = p, r.svg = yo, r.svgOverlay = Qs, r.tileLayer = _o, r.tooltip = ea, r.transformation = Dt, r.version = u, r.videoOverlay = Js;
    var la = window.L;
    r.noConflict = function() {
      return window.L = la, this;
    }, window.L = r;
  });
})(Je, Je.exports);
const fr = Je.exports;
(function(l, i, r) {
  function u(o, a) {
    for (; (o = o.parentElement) && !o.classList.contains(a); )
      ;
    return o;
  }
  L.drawVersion = "1.0.4", L.Draw = {}, L.drawLocal = {
    draw: {
      toolbar: {
        actions: { title: "Cancel drawing", text: "Cancel" },
        finish: { title: "Finish drawing", text: "Finish" },
        undo: { title: "Delete last point drawn", text: "Delete last point" },
        buttons: {
          polyline: "Draw a polyline",
          polygon: "Draw a polygon",
          rectangle: "Draw a rectangle",
          circle: "Draw a circle",
          marker: "Draw a marker",
          circlemarker: "Draw a circlemarker"
        }
      },
      handlers: {
        circle: { tooltip: { start: "Click and drag to draw circle." }, radius: "Radius" },
        circlemarker: { tooltip: { start: "Click map to place circle marker." } },
        marker: { tooltip: { start: "Click map to place marker." } },
        polygon: {
          tooltip: {
            start: "Click to start drawing shape.",
            cont: "Click to continue drawing shape.",
            end: "Click first point to close this shape."
          }
        },
        polyline: {
          error: "<strong>Error:</strong> shape edges cannot cross!",
          tooltip: {
            start: "Click to start drawing line.",
            cont: "Click to continue drawing line.",
            end: "Click last point to finish line."
          }
        },
        rectangle: { tooltip: { start: "Click and drag to draw rectangle." } },
        simpleshape: { tooltip: { end: "Release mouse to finish drawing." } }
      }
    },
    edit: {
      toolbar: {
        actions: {
          save: { title: "Save changes", text: "Save" },
          cancel: { title: "Cancel editing, discards all changes", text: "Cancel" },
          clearAll: { title: "Clear all layers", text: "Clear All" }
        },
        buttons: {
          edit: "Edit layers",
          editDisabled: "No layers to edit",
          remove: "Delete layers",
          removeDisabled: "No layers to delete"
        }
      },
      handlers: {
        edit: {
          tooltip: {
            text: "Drag handles or markers to edit features.",
            subtext: "Click cancel to undo changes."
          }
        },
        remove: { tooltip: { text: "Click on a feature to remove." } }
      }
    }
  }, L.Draw.Event = {}, L.Draw.Event.CREATED = "draw:created", L.Draw.Event.EDITED = "draw:edited", L.Draw.Event.DELETED = "draw:deleted", L.Draw.Event.DRAWSTART = "draw:drawstart", L.Draw.Event.DRAWSTOP = "draw:drawstop", L.Draw.Event.DRAWVERTEX = "draw:drawvertex", L.Draw.Event.EDITSTART = "draw:editstart", L.Draw.Event.EDITMOVE = "draw:editmove", L.Draw.Event.EDITRESIZE = "draw:editresize", L.Draw.Event.EDITVERTEX = "draw:editvertex", L.Draw.Event.EDITSTOP = "draw:editstop", L.Draw.Event.DELETESTART = "draw:deletestart", L.Draw.Event.DELETESTOP = "draw:deletestop", L.Draw.Event.TOOLBAROPENED = "draw:toolbaropened", L.Draw.Event.TOOLBARCLOSED = "draw:toolbarclosed", L.Draw.Event.MARKERCONTEXT = "draw:markercontext", L.Draw = L.Draw || {}, L.Draw.Feature = L.Handler.extend({
    initialize: function(o, a) {
      this._map = o, this._container = o._container, this._overlayPane = o._panes.overlayPane, this._popupPane = o._panes.popupPane, a && a.shapeOptions && (a.shapeOptions = L.Util.extend({}, this.options.shapeOptions, a.shapeOptions)), L.setOptions(this, a);
      var c = L.version.split(".");
      parseInt(c[0], 10) === 1 && parseInt(c[1], 10) >= 2 ? L.Draw.Feature.include(L.Evented.prototype) : L.Draw.Feature.include(L.Mixin.Events);
    },
    enable: function() {
      this._enabled || (L.Handler.prototype.enable.call(this), this.fire("enabled", { handler: this.type }), this._map.fire(L.Draw.Event.DRAWSTART, { layerType: this.type }));
    },
    disable: function() {
      this._enabled && (L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.DRAWSTOP, { layerType: this.type }), this.fire("disabled", { handler: this.type }));
    },
    addHooks: function() {
      var o = this._map;
      o && (L.DomUtil.disableTextSelection(), o.getContainer().focus(), this._tooltip = new L.Draw.Tooltip(this._map), L.DomEvent.on(this._container, "keyup", this._cancelDrawing, this));
    },
    removeHooks: function() {
      this._map && (L.DomUtil.enableTextSelection(), this._tooltip.dispose(), this._tooltip = null, L.DomEvent.off(this._container, "keyup", this._cancelDrawing, this));
    },
    setOptions: function(o) {
      L.setOptions(this, o);
    },
    _fireCreatedEvent: function(o) {
      this._map.fire(L.Draw.Event.CREATED, { layer: o, layerType: this.type });
    },
    _cancelDrawing: function(o) {
      o.keyCode === 27 && (this._map.fire("draw:canceled", { layerType: this.type }), this.disable());
    }
  }), L.Draw.Polyline = L.Draw.Feature.extend({
    statics: { TYPE: "polyline" },
    Poly: L.Polyline,
    options: {
      allowIntersection: !0,
      repeatMode: !1,
      drawError: { color: "#b00b00", timeout: 2500 },
      icon: new L.DivIcon({
        iconSize: new L.Point(8, 8),
        className: "leaflet-div-icon leaflet-editing-icon"
      }),
      touchIcon: new L.DivIcon({
        iconSize: new L.Point(20, 20),
        className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"
      }),
      guidelineDistance: 20,
      maxGuideLineLength: 4e3,
      shapeOptions: {
        stroke: !0,
        color: "#3388ff",
        weight: 4,
        opacity: 0.5,
        fill: !1,
        clickable: !0
      },
      metric: !0,
      feet: !0,
      nautic: !1,
      showLength: !0,
      zIndexOffset: 2e3,
      factor: 1,
      maxPoints: 0
    },
    initialize: function(o, a) {
      L.Browser.touch && (this.options.icon = this.options.touchIcon), this.options.drawError.message = L.drawLocal.draw.handlers.polyline.error, a && a.drawError && (a.drawError = L.Util.extend({}, this.options.drawError, a.drawError)), this.type = L.Draw.Polyline.TYPE, L.Draw.Feature.prototype.initialize.call(this, o, a);
    },
    addHooks: function() {
      L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._markers = [], this._markerGroup = new L.LayerGroup(), this._map.addLayer(this._markerGroup), this._poly = new L.Polyline([], this.options.shapeOptions), this._tooltip.updateContent(this._getTooltipText()), this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), {
        icon: L.divIcon({
          className: "leaflet-mouse-marker",
          iconAnchor: [20, 20],
          iconSize: [40, 40]
        }),
        opacity: 0,
        zIndexOffset: this.options.zIndexOffset
      })), this._mouseMarker.on("mouseout", this._onMouseOut, this).on("mousemove", this._onMouseMove, this).on("mousedown", this._onMouseDown, this).on("mouseup", this._onMouseUp, this).addTo(this._map), this._map.on("mouseup", this._onMouseUp, this).on("mousemove", this._onMouseMove, this).on("zoomlevelschange", this._onZoomEnd, this).on("touchstart", this._onTouch, this).on("zoomend", this._onZoomEnd, this));
    },
    removeHooks: function() {
      L.Draw.Feature.prototype.removeHooks.call(this), this._clearHideErrorTimeout(), this._cleanUpShape(), this._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers, this._map.removeLayer(this._poly), delete this._poly, this._mouseMarker.off("mousedown", this._onMouseDown, this).off("mouseout", this._onMouseOut, this).off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this), this._map.removeLayer(this._mouseMarker), delete this._mouseMarker, this._clearGuides(), this._map.off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this).off("zoomlevelschange", this._onZoomEnd, this).off("zoomend", this._onZoomEnd, this).off("touchstart", this._onTouch, this).off("click", this._onTouch, this);
    },
    deleteLastVertex: function() {
      if (!(this._markers.length <= 1)) {
        var o = this._markers.pop(), a = this._poly, c = a.getLatLngs(), f = c.splice(-1, 1)[0];
        this._poly.setLatLngs(c), this._markerGroup.removeLayer(o), a.getLatLngs().length < 2 && this._map.removeLayer(a), this._vertexChanged(f, !1);
      }
    },
    addVertex: function(o) {
      if (this._markers.length >= 2 && !this.options.allowIntersection && this._poly.newLatLngIntersects(o))
        return void this._showErrorTooltip();
      this._errorShown && this._hideErrorTooltip(), this._markers.push(this._createMarker(o)), this._poly.addLatLng(o), this._poly.getLatLngs().length === 2 && this._map.addLayer(this._poly), this._vertexChanged(o, !0);
    },
    completeShape: function() {
      this._markers.length <= 1 || !this._shapeIsValid() || (this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable());
    },
    _finishShape: function() {
      var o = this._poly._defaultShape ? this._poly._defaultShape() : this._poly.getLatLngs(), a = this._poly.newLatLngIntersects(o[o.length - 1]);
      if (!this.options.allowIntersection && a || !this._shapeIsValid())
        return void this._showErrorTooltip();
      this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable();
    },
    _shapeIsValid: function() {
      return !0;
    },
    _onZoomEnd: function() {
      this._markers !== null && this._updateGuide();
    },
    _onMouseMove: function(o) {
      var a = this._map.mouseEventToLayerPoint(o.originalEvent), c = this._map.layerPointToLatLng(a);
      this._currentLatLng = c, this._updateTooltip(c), this._updateGuide(a), this._mouseMarker.setLatLng(c), L.DomEvent.preventDefault(o.originalEvent);
    },
    _vertexChanged: function(o, a) {
      this._map.fire(L.Draw.Event.DRAWVERTEX, { layers: this._markerGroup }), this._updateFinishHandler(), this._updateRunningMeasure(o, a), this._clearGuides(), this._updateTooltip();
    },
    _onMouseDown: function(o) {
      if (!this._clickHandled && !this._touchHandled && !this._disableMarkers) {
        this._onMouseMove(o), this._clickHandled = !0, this._disableNewMarkers();
        var a = o.originalEvent, c = a.clientX, f = a.clientY;
        this._startPoint.call(this, c, f);
      }
    },
    _startPoint: function(o, a) {
      this._mouseDownOrigin = L.point(o, a);
    },
    _onMouseUp: function(o) {
      var a = o.originalEvent, c = a.clientX, f = a.clientY;
      this._endPoint.call(this, c, f, o), this._clickHandled = null;
    },
    _endPoint: function(o, a, c) {
      if (this._mouseDownOrigin) {
        var f = L.point(o, a).distanceTo(this._mouseDownOrigin), p = this._calculateFinishDistance(c.latlng);
        this.options.maxPoints > 1 && this.options.maxPoints == this._markers.length + 1 ? (this.addVertex(c.latlng), this._finishShape()) : p < 10 && L.Browser.touch ? this._finishShape() : Math.abs(f) < 9 * (l.devicePixelRatio || 1) && this.addVertex(c.latlng), this._enableNewMarkers();
      }
      this._mouseDownOrigin = null;
    },
    _onTouch: function(o) {
      var a, c, f = o.originalEvent;
      !f.touches || !f.touches[0] || this._clickHandled || this._touchHandled || this._disableMarkers || (a = f.touches[0].clientX, c = f.touches[0].clientY, this._disableNewMarkers(), this._touchHandled = !0, this._startPoint.call(this, a, c), this._endPoint.call(this, a, c, o), this._touchHandled = null), this._clickHandled = null;
    },
    _onMouseOut: function() {
      this._tooltip && this._tooltip._onMouseOut.call(this._tooltip);
    },
    _calculateFinishDistance: function(o) {
      var a;
      if (this._markers.length > 0) {
        var c;
        if (this.type === L.Draw.Polyline.TYPE)
          c = this._markers[this._markers.length - 1];
        else {
          if (this.type !== L.Draw.Polygon.TYPE)
            return 1 / 0;
          c = this._markers[0];
        }
        var f = this._map.latLngToContainerPoint(c.getLatLng()), p = new L.Marker(o, {
          icon: this.options.icon,
          zIndexOffset: 2 * this.options.zIndexOffset
        }), v = this._map.latLngToContainerPoint(p.getLatLng());
        a = f.distanceTo(v);
      } else
        a = 1 / 0;
      return a;
    },
    _updateFinishHandler: function() {
      var o = this._markers.length;
      o > 1 && this._markers[o - 1].on("click", this._finishShape, this), o > 2 && this._markers[o - 2].off("click", this._finishShape, this);
    },
    _createMarker: function(o) {
      var a = new L.Marker(o, {
        icon: this.options.icon,
        zIndexOffset: 2 * this.options.zIndexOffset
      });
      return this._markerGroup.addLayer(a), a;
    },
    _updateGuide: function(o) {
      var a = this._markers ? this._markers.length : 0;
      a > 0 && (o = o || this._map.latLngToLayerPoint(this._currentLatLng), this._clearGuides(), this._drawGuide(this._map.latLngToLayerPoint(this._markers[a - 1].getLatLng()), o));
    },
    _updateTooltip: function(o) {
      var a = this._getTooltipText();
      o && this._tooltip.updatePosition(o), this._errorShown || this._tooltip.updateContent(a);
    },
    _drawGuide: function(o, a) {
      var c, f, p, v = Math.floor(Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2))), y = this.options.guidelineDistance, x = this.options.maxGuideLineLength, T = v > x ? v - x : y;
      for (this._guidesContainer || (this._guidesContainer = L.DomUtil.create(
        "div",
        "leaflet-draw-guides",
        this._overlayPane
      )); T < v; T += this.options.guidelineDistance)
        c = T / v, f = {
          x: Math.floor(o.x * (1 - c) + c * a.x),
          y: Math.floor(o.y * (1 - c) + c * a.y)
        }, p = L.DomUtil.create("div", "leaflet-draw-guide-dash", this._guidesContainer), p.style.backgroundColor = this._errorShown ? this.options.drawError.color : this.options.shapeOptions.color, L.DomUtil.setPosition(p, f);
    },
    _updateGuideColor: function(o) {
      if (this._guidesContainer)
        for (var a = 0, c = this._guidesContainer.childNodes.length; a < c; a++)
          this._guidesContainer.childNodes[a].style.backgroundColor = o;
    },
    _clearGuides: function() {
      if (this._guidesContainer)
        for (; this._guidesContainer.firstChild; )
          this._guidesContainer.removeChild(this._guidesContainer.firstChild);
    },
    _getTooltipText: function() {
      var o, a, c = this.options.showLength;
      return this._markers.length === 0 ? o = { text: L.drawLocal.draw.handlers.polyline.tooltip.start } : (a = c ? this._getMeasurementString() : "", o = this._markers.length === 1 ? { text: L.drawLocal.draw.handlers.polyline.tooltip.cont, subtext: a } : { text: L.drawLocal.draw.handlers.polyline.tooltip.end, subtext: a }), o;
    },
    _updateRunningMeasure: function(o, a) {
      var c, f, p = this._markers.length;
      this._markers.length === 1 ? this._measurementRunningTotal = 0 : (c = p - (a ? 2 : 1), f = L.GeometryUtil.isVersion07x() ? o.distanceTo(this._markers[c].getLatLng()) * (this.options.factor || 1) : this._map.distance(o, this._markers[c].getLatLng()) * (this.options.factor || 1), this._measurementRunningTotal += f * (a ? 1 : -1));
    },
    _getMeasurementString: function() {
      var o, a = this._currentLatLng, c = this._markers[this._markers.length - 1].getLatLng();
      return o = L.GeometryUtil.isVersion07x() ? c && a && a.distanceTo ? this._measurementRunningTotal + a.distanceTo(c) * (this.options.factor || 1) : this._measurementRunningTotal || 0 : c && a ? this._measurementRunningTotal + this._map.distance(a, c) * (this.options.factor || 1) : this._measurementRunningTotal || 0, L.GeometryUtil.readableDistance(
        o,
        this.options.metric,
        this.options.feet,
        this.options.nautic,
        this.options.precision
      );
    },
    _showErrorTooltip: function() {
      this._errorShown = !0, this._tooltip.showAsError().updateContent({ text: this.options.drawError.message }), this._updateGuideColor(this.options.drawError.color), this._poly.setStyle({ color: this.options.drawError.color }), this._clearHideErrorTimeout(), this._hideErrorTimeout = setTimeout(
        L.Util.bind(this._hideErrorTooltip, this),
        this.options.drawError.timeout
      );
    },
    _hideErrorTooltip: function() {
      this._errorShown = !1, this._clearHideErrorTimeout(), this._tooltip.removeError().updateContent(this._getTooltipText()), this._updateGuideColor(this.options.shapeOptions.color), this._poly.setStyle({ color: this.options.shapeOptions.color });
    },
    _clearHideErrorTimeout: function() {
      this._hideErrorTimeout && (clearTimeout(this._hideErrorTimeout), this._hideErrorTimeout = null);
    },
    _disableNewMarkers: function() {
      this._disableMarkers = !0;
    },
    _enableNewMarkers: function() {
      setTimeout(
        function() {
          this._disableMarkers = !1;
        }.bind(this),
        50
      );
    },
    _cleanUpShape: function() {
      this._markers.length > 1 && this._markers[this._markers.length - 1].off("click", this._finishShape, this);
    },
    _fireCreatedEvent: function() {
      var o = new this.Poly(this._poly.getLatLngs(), this.options.shapeOptions);
      L.Draw.Feature.prototype._fireCreatedEvent.call(this, o);
    }
  }), L.Draw.Polygon = L.Draw.Polyline.extend({
    statics: { TYPE: "polygon" },
    Poly: L.Polygon,
    options: {
      showArea: !1,
      showLength: !1,
      shapeOptions: {
        stroke: !0,
        color: "#3388ff",
        weight: 4,
        opacity: 0.5,
        fill: !0,
        fillColor: null,
        fillOpacity: 0.2,
        clickable: !0
      },
      metric: !0,
      feet: !0,
      nautic: !1,
      precision: {}
    },
    initialize: function(o, a) {
      L.Draw.Polyline.prototype.initialize.call(this, o, a), this.type = L.Draw.Polygon.TYPE;
    },
    _updateFinishHandler: function() {
      var o = this._markers.length;
      o === 1 && this._markers[0].on("click", this._finishShape, this), o > 2 && (this._markers[o - 1].on("dblclick", this._finishShape, this), o > 3 && this._markers[o - 2].off("dblclick", this._finishShape, this));
    },
    _getTooltipText: function() {
      var o, a;
      return this._markers.length === 0 ? o = L.drawLocal.draw.handlers.polygon.tooltip.start : this._markers.length < 3 ? (o = L.drawLocal.draw.handlers.polygon.tooltip.cont, a = this._getMeasurementString()) : (o = L.drawLocal.draw.handlers.polygon.tooltip.end, a = this._getMeasurementString()), { text: o, subtext: a };
    },
    _getMeasurementString: function() {
      var o = this._area, a = "";
      return o || this.options.showLength ? (this.options.showLength && (a = L.Draw.Polyline.prototype._getMeasurementString.call(this)), o && (a += "<br>" + L.GeometryUtil.readableArea(o, this.options.metric, this.options.precision)), a) : null;
    },
    _shapeIsValid: function() {
      return this._markers.length >= 3;
    },
    _vertexChanged: function(o, a) {
      var c;
      !this.options.allowIntersection && this.options.showArea && (c = this._poly.getLatLngs(), this._area = L.GeometryUtil.geodesicArea(c)), L.Draw.Polyline.prototype._vertexChanged.call(this, o, a);
    },
    _cleanUpShape: function() {
      var o = this._markers.length;
      o > 0 && (this._markers[0].off("click", this._finishShape, this), o > 2 && this._markers[o - 1].off("dblclick", this._finishShape, this));
    }
  }), L.SimpleShape = {}, L.Draw.SimpleShape = L.Draw.Feature.extend({
    options: { repeatMode: !1 },
    initialize: function(o, a) {
      this._endLabelText = L.drawLocal.draw.handlers.simpleshape.tooltip.end, L.Draw.Feature.prototype.initialize.call(this, o, a);
    },
    addHooks: function() {
      L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._mapDraggable = this._map.dragging.enabled(), this._mapDraggable && this._map.dragging.disable(), this._container.style.cursor = "crosshair", this._tooltip.updateContent({ text: this._initialLabelText }), this._map.on("mousedown", this._onMouseDown, this).on("mousemove", this._onMouseMove, this).on("touchstart", this._onMouseDown, this).on("touchmove", this._onMouseMove, this), i.addEventListener("touchstart", L.DomEvent.preventDefault, { passive: !1 }));
    },
    removeHooks: function() {
      L.Draw.Feature.prototype.removeHooks.call(this), this._map && (this._mapDraggable && this._map.dragging.enable(), this._container.style.cursor = "", this._map.off("mousedown", this._onMouseDown, this).off("mousemove", this._onMouseMove, this).off("touchstart", this._onMouseDown, this).off("touchmove", this._onMouseMove, this), L.DomEvent.off(i, "mouseup", this._onMouseUp, this), L.DomEvent.off(i, "touchend", this._onMouseUp, this), i.removeEventListener("touchstart", L.DomEvent.preventDefault), this._shape && (this._map.removeLayer(this._shape), delete this._shape)), this._isDrawing = !1;
    },
    _getTooltipText: function() {
      return { text: this._endLabelText };
    },
    _onMouseDown: function(o) {
      this._isDrawing = !0, this._startLatLng = o.latlng, L.DomEvent.on(i, "mouseup", this._onMouseUp, this).on(i, "touchend", this._onMouseUp, this).preventDefault(o.originalEvent);
    },
    _onMouseMove: function(o) {
      var a = o.latlng;
      this._tooltip.updatePosition(a), this._isDrawing && (this._tooltip.updateContent(this._getTooltipText()), this._drawShape(a));
    },
    _onMouseUp: function() {
      this._shape && this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable();
    }
  }), L.Draw.Rectangle = L.Draw.SimpleShape.extend({
    statics: { TYPE: "rectangle" },
    options: {
      shapeOptions: {
        stroke: !0,
        color: "#3388ff",
        weight: 4,
        opacity: 0.5,
        fill: !0,
        fillColor: null,
        fillOpacity: 0.2,
        clickable: !0
      },
      showArea: !0,
      metric: !0
    },
    initialize: function(o, a) {
      this.type = L.Draw.Rectangle.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.rectangle.tooltip.start, L.Draw.SimpleShape.prototype.initialize.call(this, o, a);
    },
    disable: function() {
      this._enabled && (this._isCurrentlyTwoClickDrawing = !1, L.Draw.SimpleShape.prototype.disable.call(this));
    },
    _onMouseUp: function(o) {
      if (!this._shape && !this._isCurrentlyTwoClickDrawing)
        return void (this._isCurrentlyTwoClickDrawing = !0);
      this._isCurrentlyTwoClickDrawing && !u(o.target, "leaflet-pane") || L.Draw.SimpleShape.prototype._onMouseUp.call(this);
    },
    _drawShape: function(o) {
      this._shape ? this._shape.setBounds(new L.LatLngBounds(this._startLatLng, o)) : (this._shape = new L.Rectangle(
        new L.LatLngBounds(this._startLatLng, o),
        this.options.shapeOptions
      ), this._map.addLayer(this._shape));
    },
    _fireCreatedEvent: function() {
      var o = new L.Rectangle(this._shape.getBounds(), this.options.shapeOptions);
      L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, o);
    },
    _getTooltipText: function() {
      var o, a, c, f = L.Draw.SimpleShape.prototype._getTooltipText.call(this), p = this._shape, v = this.options.showArea;
      return p && (o = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), a = L.GeometryUtil.geodesicArea(o), c = v ? L.GeometryUtil.readableArea(a, this.options.metric) : ""), { text: f.text, subtext: c };
    }
  }), L.Draw.Marker = L.Draw.Feature.extend({
    statics: { TYPE: "marker" },
    options: { icon: new L.Icon.Default(), repeatMode: !1, zIndexOffset: 2e3 },
    initialize: function(o, a) {
      this.type = L.Draw.Marker.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.marker.tooltip.start, L.Draw.Feature.prototype.initialize.call(this, o, a);
    },
    addHooks: function() {
      L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._tooltip.updateContent({ text: this._initialLabelText }), this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), {
        icon: L.divIcon({
          className: "leaflet-mouse-marker",
          iconAnchor: [20, 20],
          iconSize: [40, 40]
        }),
        opacity: 0,
        zIndexOffset: this.options.zIndexOffset
      })), this._mouseMarker.on("click", this._onClick, this).addTo(this._map), this._map.on("mousemove", this._onMouseMove, this), this._map.on("click", this._onTouch, this));
    },
    removeHooks: function() {
      L.Draw.Feature.prototype.removeHooks.call(this), this._map && (this._map.off("click", this._onClick, this).off("click", this._onTouch, this), this._marker && (this._marker.off("click", this._onClick, this), this._map.removeLayer(this._marker), delete this._marker), this._mouseMarker.off("click", this._onClick, this), this._map.removeLayer(this._mouseMarker), delete this._mouseMarker, this._map.off("mousemove", this._onMouseMove, this));
    },
    _onMouseMove: function(o) {
      var a = o.latlng;
      this._tooltip.updatePosition(a), this._mouseMarker.setLatLng(a), this._marker ? (a = this._mouseMarker.getLatLng(), this._marker.setLatLng(a)) : (this._marker = this._createMarker(a), this._marker.on("click", this._onClick, this), this._map.on("click", this._onClick, this).addLayer(this._marker));
    },
    _createMarker: function(o) {
      return new L.Marker(o, {
        icon: this.options.icon,
        zIndexOffset: this.options.zIndexOffset
      });
    },
    _onClick: function() {
      this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable();
    },
    _onTouch: function(o) {
      this._onMouseMove(o), this._onClick();
    },
    _fireCreatedEvent: function() {
      var o = new L.Marker.Touch(this._marker.getLatLng(), { icon: this.options.icon });
      L.Draw.Feature.prototype._fireCreatedEvent.call(this, o);
    }
  }), L.Draw.CircleMarker = L.Draw.Marker.extend({
    statics: { TYPE: "circlemarker" },
    options: {
      stroke: !0,
      color: "#3388ff",
      weight: 4,
      opacity: 0.5,
      fill: !0,
      fillColor: null,
      fillOpacity: 0.2,
      clickable: !0,
      zIndexOffset: 2e3
    },
    initialize: function(o, a) {
      this.type = L.Draw.CircleMarker.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.circlemarker.tooltip.start, L.Draw.Feature.prototype.initialize.call(this, o, a);
    },
    _fireCreatedEvent: function() {
      var o = new L.CircleMarker(this._marker.getLatLng(), this.options);
      L.Draw.Feature.prototype._fireCreatedEvent.call(this, o);
    },
    _createMarker: function(o) {
      return new L.CircleMarker(o, this.options);
    }
  }), L.Draw.Circle = L.Draw.SimpleShape.extend({
    statics: { TYPE: "circle" },
    options: {
      shapeOptions: {
        stroke: !0,
        color: "#3388ff",
        weight: 4,
        opacity: 0.5,
        fill: !0,
        fillColor: null,
        fillOpacity: 0.2,
        clickable: !0
      },
      showRadius: !0,
      metric: !0,
      feet: !0,
      nautic: !1
    },
    initialize: function(o, a) {
      this.type = L.Draw.Circle.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.circle.tooltip.start, L.Draw.SimpleShape.prototype.initialize.call(this, o, a);
    },
    _drawShape: function(o) {
      if (L.GeometryUtil.isVersion07x())
        var a = this._startLatLng.distanceTo(o);
      else
        var a = this._map.distance(this._startLatLng, o);
      this._shape ? this._shape.setRadius(a) : (this._shape = new L.Circle(this._startLatLng, a, this.options.shapeOptions), this._map.addLayer(this._shape));
    },
    _fireCreatedEvent: function() {
      var o = new L.Circle(this._startLatLng, this._shape.getRadius(), this.options.shapeOptions);
      L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, o);
    },
    _onMouseMove: function(o) {
      var a, c = o.latlng, f = this.options.showRadius, p = this.options.metric;
      if (this._tooltip.updatePosition(c), this._isDrawing) {
        this._drawShape(c), a = this._shape.getRadius().toFixed(1);
        var v = "";
        f && (v = L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(a, p, this.options.feet, this.options.nautic)), this._tooltip.updateContent({ text: this._endLabelText, subtext: v });
      }
    }
  }), L.Edit = L.Edit || {}, L.Edit.Marker = L.Handler.extend({
    initialize: function(o, a) {
      this._marker = o, L.setOptions(this, a);
    },
    addHooks: function() {
      var o = this._marker;
      o.dragging.enable(), o.on("dragend", this._onDragEnd, o), this._toggleMarkerHighlight();
    },
    removeHooks: function() {
      var o = this._marker;
      o.dragging.disable(), o.off("dragend", this._onDragEnd, o), this._toggleMarkerHighlight();
    },
    _onDragEnd: function(o) {
      var a = o.target;
      a.edited = !0, this._map.fire(L.Draw.Event.EDITMOVE, { layer: a });
    },
    _toggleMarkerHighlight: function() {
      var o = this._marker._icon;
      o && (o.style.display = "none", L.DomUtil.hasClass(o, "leaflet-edit-marker-selected") ? (L.DomUtil.removeClass(o, "leaflet-edit-marker-selected"), this._offsetMarker(o, -4)) : (L.DomUtil.addClass(o, "leaflet-edit-marker-selected"), this._offsetMarker(o, 4)), o.style.display = "");
    },
    _offsetMarker: function(o, a) {
      var c = parseInt(o.style.marginTop, 10) - a, f = parseInt(o.style.marginLeft, 10) - a;
      o.style.marginTop = c + "px", o.style.marginLeft = f + "px";
    }
  }), L.Marker.addInitHook(function() {
    L.Edit.Marker && (this.editing = new L.Edit.Marker(this), this.options.editable && this.editing.enable());
  }), L.Edit = L.Edit || {}, L.Edit.Poly = L.Handler.extend({
    initialize: function(o) {
      this.latlngs = [o._latlngs], o._holes && (this.latlngs = this.latlngs.concat(o._holes)), this._poly = o, this._poly.on("revert-edited", this._updateLatLngs, this);
    },
    _defaultShape: function() {
      return L.Polyline._flat ? L.Polyline._flat(this._poly._latlngs) ? this._poly._latlngs : this._poly._latlngs[0] : this._poly._latlngs;
    },
    _eachVertexHandler: function(o) {
      for (var a = 0; a < this._verticesHandlers.length; a++)
        o(this._verticesHandlers[a]);
    },
    addHooks: function() {
      this._initHandlers(), this._eachVertexHandler(function(o) {
        o.addHooks();
      });
    },
    removeHooks: function() {
      this._eachVertexHandler(function(o) {
        o.removeHooks();
      });
    },
    updateMarkers: function() {
      this._eachVertexHandler(function(o) {
        o.updateMarkers();
      });
    },
    _initHandlers: function() {
      this._verticesHandlers = [];
      for (var o = 0; o < this.latlngs.length; o++)
        this._verticesHandlers.push(
          new L.Edit.PolyVerticesEdit(this._poly, this.latlngs[o], this._poly.options.poly)
        );
    },
    _updateLatLngs: function(o) {
      this.latlngs = [o.layer._latlngs], o.layer._holes && (this.latlngs = this.latlngs.concat(o.layer._holes));
    }
  }), L.Edit.PolyVerticesEdit = L.Handler.extend({
    options: {
      icon: new L.DivIcon({
        iconSize: new L.Point(8, 8),
        className: "leaflet-div-icon leaflet-editing-icon"
      }),
      touchIcon: new L.DivIcon({
        iconSize: new L.Point(20, 20),
        className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"
      }),
      drawError: { color: "#b00b00", timeout: 1e3 }
    },
    initialize: function(o, a, c) {
      L.Browser.touch && (this.options.icon = this.options.touchIcon), this._poly = o, c && c.drawError && (c.drawError = L.Util.extend({}, this.options.drawError, c.drawError)), this._latlngs = a, L.setOptions(this, c);
    },
    _defaultShape: function() {
      return L.Polyline._flat ? L.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0] : this._latlngs;
    },
    addHooks: function() {
      var o = this._poly, a = o._path;
      o instanceof L.Polygon || (o.options.fill = !1, o.options.editing && (o.options.editing.fill = !1)), a && o.options.editing && o.options.editing.className && (o.options.original.className && o.options.original.className.split(" ").forEach(function(c) {
        L.DomUtil.removeClass(a, c);
      }), o.options.editing.className.split(" ").forEach(function(c) {
        L.DomUtil.addClass(a, c);
      })), o.setStyle(o.options.editing), this._poly._map && (this._map = this._poly._map, this._markerGroup || this._initMarkers(), this._poly._map.addLayer(this._markerGroup));
    },
    removeHooks: function() {
      var o = this._poly, a = o._path;
      a && o.options.editing && o.options.editing.className && (o.options.editing.className.split(" ").forEach(function(c) {
        L.DomUtil.removeClass(a, c);
      }), o.options.original.className && o.options.original.className.split(" ").forEach(function(c) {
        L.DomUtil.addClass(a, c);
      })), o.setStyle(o.options.original), o._map && (o._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers);
    },
    updateMarkers: function() {
      this._markerGroup.clearLayers(), this._initMarkers();
    },
    _initMarkers: function() {
      this._markerGroup || (this._markerGroup = new L.LayerGroup()), this._markers = [];
      var o, a, c, f, p = this._defaultShape();
      for (o = 0, c = p.length; o < c; o++)
        f = this._createMarker(p[o], o), f.on("click", this._onMarkerClick, this), f.on("contextmenu", this._onContextMenu, this), this._markers.push(f);
      var v, y;
      for (o = 0, a = c - 1; o < c; a = o++)
        (o !== 0 || L.Polygon && this._poly instanceof L.Polygon) && (v = this._markers[a], y = this._markers[o], this._createMiddleMarker(v, y), this._updatePrevNext(v, y));
    },
    _createMarker: function(o, a) {
      var c = new L.Marker.Touch(o, { draggable: !0, icon: this.options.icon });
      return c._origLatLng = o, c._index = a, c.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._fireEdit, this).on("touchmove", this._onTouchMove, this).on("touchend", this._fireEdit, this).on("MSPointerMove", this._onTouchMove, this).on("MSPointerUp", this._fireEdit, this), this._markerGroup.addLayer(c), c;
    },
    _onMarkerDragStart: function() {
      this._poly.fire("editstart");
    },
    _spliceLatLngs: function() {
      var o = this._defaultShape(), a = [].splice.apply(o, arguments);
      return this._poly._convertLatLngs(o, !0), this._poly.redraw(), a;
    },
    _removeMarker: function(o) {
      var a = o._index;
      this._markerGroup.removeLayer(o), this._markers.splice(a, 1), this._spliceLatLngs(a, 1), this._updateIndexes(a, -1), o.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._fireEdit, this).off("touchmove", this._onMarkerDrag, this).off("touchend", this._fireEdit, this).off("click", this._onMarkerClick, this).off("MSPointerMove", this._onTouchMove, this).off("MSPointerUp", this._fireEdit, this);
    },
    _fireEdit: function() {
      this._poly.edited = !0, this._poly.fire("edit"), this._poly._map.fire(L.Draw.Event.EDITVERTEX, {
        layers: this._markerGroup,
        poly: this._poly
      });
    },
    _onMarkerDrag: function(o) {
      var a = o.target, c = this._poly, f = L.LatLngUtil.cloneLatLng(a._origLatLng);
      if (L.extend(a._origLatLng, a._latlng), c.options.poly) {
        var p = c._map._editTooltip;
        if (!c.options.poly.allowIntersection && c.intersects()) {
          L.extend(a._origLatLng, f), a.setLatLng(f);
          var v = c.options.color;
          c.setStyle({ color: this.options.drawError.color }), p && p.updateContent({ text: L.drawLocal.draw.handlers.polyline.error }), setTimeout(function() {
            c.setStyle({ color: v }), p && p.updateContent({
              text: L.drawLocal.edit.handlers.edit.tooltip.text,
              subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
            });
          }, 1e3);
        }
      }
      a._middleLeft && a._middleLeft.setLatLng(this._getMiddleLatLng(a._prev, a)), a._middleRight && a._middleRight.setLatLng(this._getMiddleLatLng(a, a._next)), this._poly._bounds._southWest = L.latLng(1 / 0, 1 / 0), this._poly._bounds._northEast = L.latLng(-1 / 0, -1 / 0);
      var y = this._poly.getLatLngs();
      this._poly._convertLatLngs(y, !0), this._poly.redraw(), this._poly.fire("editdrag");
    },
    _onMarkerClick: function(o) {
      var a = L.Polygon && this._poly instanceof L.Polygon ? 4 : 3, c = o.target;
      this._defaultShape().length < a || (this._removeMarker(c), this._updatePrevNext(c._prev, c._next), c._middleLeft && this._markerGroup.removeLayer(c._middleLeft), c._middleRight && this._markerGroup.removeLayer(c._middleRight), c._prev && c._next ? this._createMiddleMarker(c._prev, c._next) : c._prev ? c._next || (c._prev._middleRight = null) : c._next._middleLeft = null, this._fireEdit());
    },
    _onContextMenu: function(o) {
      var a = o.target;
      this._poly, this._poly._map.fire(L.Draw.Event.MARKERCONTEXT, {
        marker: a,
        layers: this._markerGroup,
        poly: this._poly
      }), L.DomEvent.stopPropagation;
    },
    _onTouchMove: function(o) {
      var a = this._map.mouseEventToLayerPoint(o.originalEvent.touches[0]), c = this._map.layerPointToLatLng(a), f = o.target;
      L.extend(f._origLatLng, c), f._middleLeft && f._middleLeft.setLatLng(this._getMiddleLatLng(f._prev, f)), f._middleRight && f._middleRight.setLatLng(this._getMiddleLatLng(f, f._next)), this._poly.redraw(), this.updateMarkers();
    },
    _updateIndexes: function(o, a) {
      this._markerGroup.eachLayer(function(c) {
        c._index > o && (c._index += a);
      });
    },
    _createMiddleMarker: function(o, a) {
      var c, f, p, v = this._getMiddleLatLng(o, a), y = this._createMarker(v);
      y.setOpacity(0.6), o._middleRight = a._middleLeft = y, f = function() {
        y.off("touchmove", f, this);
        var x = a._index;
        y._index = x, y.off("click", c, this).on("click", this._onMarkerClick, this), v.lat = y.getLatLng().lat, v.lng = y.getLatLng().lng, this._spliceLatLngs(x, 0, v), this._markers.splice(x, 0, y), y.setOpacity(1), this._updateIndexes(x, 1), a._index++, this._updatePrevNext(o, y), this._updatePrevNext(y, a), this._poly.fire("editstart");
      }, p = function() {
        y.off("dragstart", f, this), y.off("dragend", p, this), y.off("touchmove", f, this), this._createMiddleMarker(o, y), this._createMiddleMarker(y, a);
      }, c = function() {
        f.call(this), p.call(this), this._fireEdit();
      }, y.on("click", c, this).on("dragstart", f, this).on("dragend", p, this).on("touchmove", f, this), this._markerGroup.addLayer(y);
    },
    _updatePrevNext: function(o, a) {
      o && (o._next = a), a && (a._prev = o);
    },
    _getMiddleLatLng: function(o, a) {
      var c = this._poly._map, f = c.project(o.getLatLng()), p = c.project(a.getLatLng());
      return c.unproject(f._add(p)._divideBy(2));
    }
  }), L.Polyline.addInitHook(function() {
    this.editing || (L.Edit.Poly && (this.editing = new L.Edit.Poly(this), this.options.editable && this.editing.enable()), this.on("add", function() {
      this.editing && this.editing.enabled() && this.editing.addHooks();
    }), this.on("remove", function() {
      this.editing && this.editing.enabled() && this.editing.removeHooks();
    }));
  }), L.Edit = L.Edit || {}, L.Edit.SimpleShape = L.Handler.extend({
    options: {
      moveIcon: new L.DivIcon({
        iconSize: new L.Point(8, 8),
        className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move"
      }),
      resizeIcon: new L.DivIcon({
        iconSize: new L.Point(8, 8),
        className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize"
      }),
      touchMoveIcon: new L.DivIcon({
        iconSize: new L.Point(20, 20),
        className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move leaflet-touch-icon"
      }),
      touchResizeIcon: new L.DivIcon({
        iconSize: new L.Point(20, 20),
        className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize leaflet-touch-icon"
      })
    },
    initialize: function(o, a) {
      L.Browser.touch && (this.options.moveIcon = this.options.touchMoveIcon, this.options.resizeIcon = this.options.touchResizeIcon), this._shape = o, L.Util.setOptions(this, a);
    },
    addHooks: function() {
      var o = this._shape;
      this._shape._map && (this._map = this._shape._map, o.setStyle(o.options.editing), o._map && (this._map = o._map, this._markerGroup || this._initMarkers(), this._map.addLayer(this._markerGroup)));
    },
    removeHooks: function() {
      var o = this._shape;
      if (o.setStyle(o.options.original), o._map) {
        this._unbindMarker(this._moveMarker);
        for (var a = 0, c = this._resizeMarkers.length; a < c; a++)
          this._unbindMarker(this._resizeMarkers[a]);
        this._resizeMarkers = null, this._map.removeLayer(this._markerGroup), delete this._markerGroup;
      }
      this._map = null;
    },
    updateMarkers: function() {
      this._markerGroup.clearLayers(), this._initMarkers();
    },
    _initMarkers: function() {
      this._markerGroup || (this._markerGroup = new L.LayerGroup()), this._createMoveMarker(), this._createResizeMarker();
    },
    _createMoveMarker: function() {
    },
    _createResizeMarker: function() {
    },
    _createMarker: function(o, a) {
      var c = new L.Marker.Touch(o, { draggable: !0, icon: a, zIndexOffset: 10 });
      return this._bindMarker(c), this._markerGroup.addLayer(c), c;
    },
    _bindMarker: function(o) {
      o.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._onMarkerDragEnd, this).on("touchstart", this._onTouchStart, this).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onTouchEnd, this).on("MSPointerUp", this._onTouchEnd, this);
    },
    _unbindMarker: function(o) {
      o.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._onMarkerDragEnd, this).off("touchstart", this._onTouchStart, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onTouchEnd, this).off("MSPointerUp", this._onTouchEnd, this);
    },
    _onMarkerDragStart: function(o) {
      o.target.setOpacity(0), this._shape.fire("editstart");
    },
    _fireEdit: function() {
      this._shape.edited = !0, this._shape.fire("edit");
    },
    _onMarkerDrag: function(o) {
      var a = o.target, c = a.getLatLng();
      a === this._moveMarker ? this._move(c) : this._resize(c), this._shape.redraw(), this._shape.fire("editdrag");
    },
    _onMarkerDragEnd: function(o) {
      o.target.setOpacity(1), this._fireEdit();
    },
    _onTouchStart: function(o) {
      if (L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, o), typeof this._getCorners == "function") {
        var a = this._getCorners(), c = o.target, f = c._cornerIndex;
        c.setOpacity(0), this._oppositeCorner = a[(f + 2) % 4], this._toggleCornerMarkers(0, f);
      }
      this._shape.fire("editstart");
    },
    _onTouchMove: function(o) {
      var a = this._map.mouseEventToLayerPoint(o.originalEvent.touches[0]), c = this._map.layerPointToLatLng(a);
      return o.target === this._moveMarker ? this._move(c) : this._resize(c), this._shape.redraw(), !1;
    },
    _onTouchEnd: function(o) {
      o.target.setOpacity(1), this.updateMarkers(), this._fireEdit();
    },
    _move: function() {
    },
    _resize: function() {
    }
  }), L.Edit = L.Edit || {}, L.Edit.Rectangle = L.Edit.SimpleShape.extend({
    _createMoveMarker: function() {
      var o = this._shape.getBounds(), a = o.getCenter();
      this._moveMarker = this._createMarker(a, this.options.moveIcon);
    },
    _createResizeMarker: function() {
      var o = this._getCorners();
      this._resizeMarkers = [];
      for (var a = 0, c = o.length; a < c; a++)
        this._resizeMarkers.push(this._createMarker(o[a], this.options.resizeIcon)), this._resizeMarkers[a]._cornerIndex = a;
    },
    _onMarkerDragStart: function(o) {
      L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, o);
      var a = this._getCorners(), c = o.target, f = c._cornerIndex;
      this._oppositeCorner = a[(f + 2) % 4], this._toggleCornerMarkers(0, f);
    },
    _onMarkerDragEnd: function(o) {
      var a, c, f = o.target;
      f === this._moveMarker && (a = this._shape.getBounds(), c = a.getCenter(), f.setLatLng(c)), this._toggleCornerMarkers(1), this._repositionCornerMarkers(), L.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this, o);
    },
    _move: function(o) {
      for (var a, c = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), f = this._shape.getBounds(), p = f.getCenter(), v = [], y = 0, x = c.length; y < x; y++)
        a = [c[y].lat - p.lat, c[y].lng - p.lng], v.push([o.lat + a[0], o.lng + a[1]]);
      this._shape.setLatLngs(v), this._repositionCornerMarkers(), this._map.fire(L.Draw.Event.EDITMOVE, { layer: this._shape });
    },
    _resize: function(o) {
      var a;
      this._shape.setBounds(L.latLngBounds(o, this._oppositeCorner)), a = this._shape.getBounds(), this._moveMarker.setLatLng(a.getCenter()), this._map.fire(L.Draw.Event.EDITRESIZE, { layer: this._shape });
    },
    _getCorners: function() {
      var o = this._shape.getBounds();
      return [o.getNorthWest(), o.getNorthEast(), o.getSouthEast(), o.getSouthWest()];
    },
    _toggleCornerMarkers: function(o) {
      for (var a = 0, c = this._resizeMarkers.length; a < c; a++)
        this._resizeMarkers[a].setOpacity(o);
    },
    _repositionCornerMarkers: function() {
      for (var o = this._getCorners(), a = 0, c = this._resizeMarkers.length; a < c; a++)
        this._resizeMarkers[a].setLatLng(o[a]);
    }
  }), L.Rectangle.addInitHook(function() {
    L.Edit.Rectangle && (this.editing = new L.Edit.Rectangle(this), this.options.editable && this.editing.enable());
  }), L.Edit = L.Edit || {}, L.Edit.CircleMarker = L.Edit.SimpleShape.extend({
    _createMoveMarker: function() {
      var o = this._shape.getLatLng();
      this._moveMarker = this._createMarker(o, this.options.moveIcon);
    },
    _createResizeMarker: function() {
      this._resizeMarkers = [];
    },
    _move: function(o) {
      if (this._resizeMarkers.length) {
        var a = this._getResizeMarkerPoint(o);
        this._resizeMarkers[0].setLatLng(a);
      }
      this._shape.setLatLng(o), this._map.fire(L.Draw.Event.EDITMOVE, { layer: this._shape });
    }
  }), L.CircleMarker.addInitHook(function() {
    L.Edit.CircleMarker && (this.editing = new L.Edit.CircleMarker(this), this.options.editable && this.editing.enable()), this.on("add", function() {
      this.editing && this.editing.enabled() && this.editing.addHooks();
    }), this.on("remove", function() {
      this.editing && this.editing.enabled() && this.editing.removeHooks();
    });
  }), L.Edit = L.Edit || {}, L.Edit.Circle = L.Edit.CircleMarker.extend({
    _createResizeMarker: function() {
      var o = this._shape.getLatLng(), a = this._getResizeMarkerPoint(o);
      this._resizeMarkers = [], this._resizeMarkers.push(this._createMarker(a, this.options.resizeIcon));
    },
    _getResizeMarkerPoint: function(o) {
      var a = this._shape._radius * Math.cos(Math.PI / 4), c = this._map.project(o);
      return this._map.unproject([c.x + a, c.y - a]);
    },
    _resize: function(o) {
      var a = this._moveMarker.getLatLng();
      L.GeometryUtil.isVersion07x() ? radius = a.distanceTo(o) : radius = this._map.distance(a, o), this._shape.setRadius(radius), this._map.editTooltip && this._map._editTooltip.updateContent({
        text: L.drawLocal.edit.handlers.edit.tooltip.subtext + "<br />" + L.drawLocal.edit.handlers.edit.tooltip.text,
        subtext: L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(radius, !0, this.options.feet, this.options.nautic)
      }), this._shape.setRadius(radius), this._map.fire(L.Draw.Event.EDITRESIZE, { layer: this._shape });
    }
  }), L.Circle.addInitHook(function() {
    L.Edit.Circle && (this.editing = new L.Edit.Circle(this), this.options.editable && this.editing.enable());
  }), L.Map.mergeOptions({ touchExtend: !0 }), L.Map.TouchExtend = L.Handler.extend({
    initialize: function(o) {
      this._map = o, this._container = o._container, this._pane = o._panes.overlayPane;
    },
    addHooks: function() {
      L.DomEvent.on(this._container, "touchstart", this._onTouchStart, this), L.DomEvent.on(this._container, "touchend", this._onTouchEnd, this), L.DomEvent.on(this._container, "touchmove", this._onTouchMove, this), this._detectIE() ? (L.DomEvent.on(this._container, "MSPointerDown", this._onTouchStart, this), L.DomEvent.on(this._container, "MSPointerUp", this._onTouchEnd, this), L.DomEvent.on(this._container, "MSPointerMove", this._onTouchMove, this), L.DomEvent.on(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.on(this._container, "touchcancel", this._onTouchCancel, this), L.DomEvent.on(this._container, "touchleave", this._onTouchLeave, this));
    },
    removeHooks: function() {
      L.DomEvent.off(this._container, "touchstart", this._onTouchStart, this), L.DomEvent.off(this._container, "touchend", this._onTouchEnd, this), L.DomEvent.off(this._container, "touchmove", this._onTouchMove, this), this._detectIE() ? (L.DomEvent.off(this._container, "MSPointerDown", this._onTouchStart, this), L.DomEvent.off(this._container, "MSPointerUp", this._onTouchEnd, this), L.DomEvent.off(this._container, "MSPointerMove", this._onTouchMove, this), L.DomEvent.off(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.off(this._container, "touchcancel", this._onTouchCancel, this), L.DomEvent.off(this._container, "touchleave", this._onTouchLeave, this));
    },
    _touchEvent: function(o, a) {
      var c = {};
      if (o.touches !== void 0) {
        if (!o.touches.length)
          return;
        c = o.touches[0];
      } else if (o.pointerType !== "touch" || (c = o, !this._filterClick(o)))
        return;
      var f = this._map.mouseEventToContainerPoint(c), p = this._map.mouseEventToLayerPoint(c), v = this._map.layerPointToLatLng(p);
      this._map.fire(a, {
        latlng: v,
        layerPoint: p,
        containerPoint: f,
        pageX: c.pageX,
        pageY: c.pageY,
        originalEvent: o
      });
    },
    _filterClick: function(o) {
      var a = o.timeStamp || o.originalEvent.timeStamp, c = L.DomEvent._lastClick && a - L.DomEvent._lastClick;
      return c && c > 100 && c < 500 || o.target._simulatedClick && !o._simulated ? (L.DomEvent.stop(o), !1) : (L.DomEvent._lastClick = a, !0);
    },
    _onTouchStart: function(o) {
      this._map._loaded && this._touchEvent(o, "touchstart");
    },
    _onTouchEnd: function(o) {
      this._map._loaded && this._touchEvent(o, "touchend");
    },
    _onTouchCancel: function(o) {
      if (this._map._loaded) {
        var a = "touchcancel";
        this._detectIE() && (a = "pointercancel"), this._touchEvent(o, a);
      }
    },
    _onTouchLeave: function(o) {
      this._map._loaded && this._touchEvent(o, "touchleave");
    },
    _onTouchMove: function(o) {
      this._map._loaded && this._touchEvent(o, "touchmove");
    },
    _detectIE: function() {
      var o = l.navigator.userAgent, a = o.indexOf("MSIE ");
      if (a > 0)
        return parseInt(o.substring(a + 5, o.indexOf(".", a)), 10);
      if (o.indexOf("Trident/") > 0) {
        var c = o.indexOf("rv:");
        return parseInt(o.substring(c + 3, o.indexOf(".", c)), 10);
      }
      var f = o.indexOf("Edge/");
      return f > 0 && parseInt(o.substring(f + 5, o.indexOf(".", f)), 10);
    }
  }), L.Map.addInitHook("addHandler", "touchExtend", L.Map.TouchExtend), L.Marker.Touch = L.Marker.extend({
    _initInteraction: function() {
      return this.addInteractiveTarget ? L.Marker.prototype._initInteraction.apply(this) : this._initInteractionLegacy();
    },
    _initInteractionLegacy: function() {
      if (this.options.clickable) {
        var o = this._icon, a = [
          "dblclick",
          "mousedown",
          "mouseover",
          "mouseout",
          "contextmenu",
          "touchstart",
          "touchend",
          "touchmove"
        ];
        this._detectIE ? a.concat(["MSPointerDown", "MSPointerUp", "MSPointerMove", "MSPointerCancel"]) : a.concat(["touchcancel"]), L.DomUtil.addClass(o, "leaflet-clickable"), L.DomEvent.on(o, "click", this._onMouseClick, this), L.DomEvent.on(o, "keypress", this._onKeyPress, this);
        for (var c = 0; c < a.length; c++)
          L.DomEvent.on(o, a[c], this._fireMouseEvent, this);
        L.Handler.MarkerDrag && (this.dragging = new L.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable());
      }
    },
    _detectIE: function() {
      var o = l.navigator.userAgent, a = o.indexOf("MSIE ");
      if (a > 0)
        return parseInt(o.substring(a + 5, o.indexOf(".", a)), 10);
      if (o.indexOf("Trident/") > 0) {
        var c = o.indexOf("rv:");
        return parseInt(o.substring(c + 3, o.indexOf(".", c)), 10);
      }
      var f = o.indexOf("Edge/");
      return f > 0 && parseInt(o.substring(f + 5, o.indexOf(".", f)), 10);
    }
  }), L.LatLngUtil = {
    cloneLatLngs: function(o) {
      for (var a = [], c = 0, f = o.length; c < f; c++)
        Array.isArray(o[c]) ? a.push(L.LatLngUtil.cloneLatLngs(o[c])) : a.push(this.cloneLatLng(o[c]));
      return a;
    },
    cloneLatLng: function(o) {
      return L.latLng(o.lat, o.lng);
    }
  }, function() {
    var o = { km: 2, ha: 2, m: 0, mi: 2, ac: 2, yd: 0, ft: 0, nm: 2 };
    L.GeometryUtil = L.extend(L.GeometryUtil || {}, {
      geodesicArea: function(a) {
        var c, f, p = a.length, v = 0, y = Math.PI / 180;
        if (p > 2) {
          for (var x = 0; x < p; x++)
            c = a[x], f = a[(x + 1) % p], v += (f.lng - c.lng) * y * (2 + Math.sin(c.lat * y) + Math.sin(f.lat * y));
          v = 6378137 * v * 6378137 / 2;
        }
        return Math.abs(v);
      },
      formattedNumber: function(a, c) {
        var f = parseFloat(a).toFixed(c), p = L.drawLocal.format && L.drawLocal.format.numeric, v = p && p.delimiters, y = v && v.thousands, x = v && v.decimal;
        if (y || x) {
          var T = f.split(".");
          f = y ? T[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + y) : T[0], x = x || ".", T.length > 1 && (f = f + x + T[1]);
        }
        return f;
      },
      readableArea: function(a, c, x) {
        var p, v, y, x = L.Util.extend({}, o, x);
        return c ? (v = ["ha", "m"], y = typeof c, y === "string" ? v = [c] : y !== "boolean" && (v = c), p = a >= 1e6 && v.indexOf("km") !== -1 ? L.GeometryUtil.formattedNumber(1e-6 * a, x.km) + " km²" : a >= 1e4 && v.indexOf("ha") !== -1 ? L.GeometryUtil.formattedNumber(1e-4 * a, x.ha) + " ha" : L.GeometryUtil.formattedNumber(a, x.m) + " m²") : (a /= 0.836127, p = a >= 3097600 ? L.GeometryUtil.formattedNumber(a / 3097600, x.mi) + " mi²" : a >= 4840 ? L.GeometryUtil.formattedNumber(a / 4840, x.ac) + " acres" : L.GeometryUtil.formattedNumber(a, x.yd) + " yd²"), p;
      },
      readableDistance: function(a, c, f, p, x) {
        var y, x = L.Util.extend({}, o, x);
        switch (c ? typeof c == "string" ? c : "metric" : f ? "feet" : p ? "nauticalMile" : "yards") {
          case "metric":
            y = a > 1e3 ? L.GeometryUtil.formattedNumber(a / 1e3, x.km) + " km" : L.GeometryUtil.formattedNumber(a, x.m) + " m";
            break;
          case "feet":
            a *= 3.28083, y = L.GeometryUtil.formattedNumber(a, x.ft) + " ft";
            break;
          case "nauticalMile":
            a *= 0.53996, y = L.GeometryUtil.formattedNumber(a / 1e3, x.nm) + " nm";
            break;
          case "yards":
          default:
            a *= 1.09361, y = a > 1760 ? L.GeometryUtil.formattedNumber(a / 1760, x.mi) + " miles" : L.GeometryUtil.formattedNumber(a, x.yd) + " yd";
        }
        return y;
      },
      isVersion07x: function() {
        var a = L.version.split(".");
        return parseInt(a[0], 10) === 0 && parseInt(a[1], 10) === 7;
      }
    });
  }(), L.Util.extend(L.LineUtil, {
    segmentsIntersect: function(o, a, c, f) {
      return this._checkCounterclockwise(o, c, f) !== this._checkCounterclockwise(a, c, f) && this._checkCounterclockwise(o, a, c) !== this._checkCounterclockwise(o, a, f);
    },
    _checkCounterclockwise: function(o, a, c) {
      return (c.y - o.y) * (a.x - o.x) > (a.y - o.y) * (c.x - o.x);
    }
  }), L.Polyline.include({
    intersects: function() {
      var o, a, c, f = this._getProjectedPoints(), p = f ? f.length : 0;
      if (this._tooFewPointsForIntersection())
        return !1;
      for (o = p - 1; o >= 3; o--)
        if (a = f[o - 1], c = f[o], this._lineSegmentsIntersectsRange(a, c, o - 2))
          return !0;
      return !1;
    },
    newLatLngIntersects: function(o, a) {
      return !!this._map && this.newPointIntersects(this._map.latLngToLayerPoint(o), a);
    },
    newPointIntersects: function(o, a) {
      var c = this._getProjectedPoints(), f = c ? c.length : 0, p = c ? c[f - 1] : null, v = f - 2;
      return !this._tooFewPointsForIntersection(1) && this._lineSegmentsIntersectsRange(p, o, v, a ? 1 : 0);
    },
    _tooFewPointsForIntersection: function(o) {
      var a = this._getProjectedPoints(), c = a ? a.length : 0;
      return c += o || 0, !a || c <= 3;
    },
    _lineSegmentsIntersectsRange: function(o, a, c, f) {
      var p, v, y = this._getProjectedPoints();
      f = f || 0;
      for (var x = c; x > f; x--)
        if (p = y[x - 1], v = y[x], L.LineUtil.segmentsIntersect(o, a, p, v))
          return !0;
      return !1;
    },
    _getProjectedPoints: function() {
      if (!this._defaultShape)
        return this._originalPoints;
      for (var o = [], a = this._defaultShape(), c = 0; c < a.length; c++)
        o.push(this._map.latLngToLayerPoint(a[c]));
      return o;
    }
  }), L.Polygon.include({
    intersects: function() {
      var o, a, c, f, p = this._getProjectedPoints();
      return !this._tooFewPointsForIntersection() && (!!L.Polyline.prototype.intersects.call(this) || (o = p.length, a = p[0], c = p[o - 1], f = o - 2, this._lineSegmentsIntersectsRange(c, a, f, 1)));
    }
  }), L.Control.Draw = L.Control.extend({
    options: { position: "topleft", draw: {}, edit: !1 },
    initialize: function(o) {
      if (L.version < "0.7")
        throw new Error(
          "Leaflet.draw 0.2.3+ requires Leaflet 0.7.0+. Download latest from https://github.com/Leaflet/Leaflet/"
        );
      L.Control.prototype.initialize.call(this, o);
      var a;
      this._toolbars = {}, L.DrawToolbar && this.options.draw && (a = new L.DrawToolbar(this.options.draw), this._toolbars[L.DrawToolbar.TYPE] = a, this._toolbars[L.DrawToolbar.TYPE].on("enable", this._toolbarEnabled, this)), L.EditToolbar && this.options.edit && (a = new L.EditToolbar(this.options.edit), this._toolbars[L.EditToolbar.TYPE] = a, this._toolbars[L.EditToolbar.TYPE].on("enable", this._toolbarEnabled, this)), L.toolbar = this;
    },
    onAdd: function(o) {
      var a, c = L.DomUtil.create("div", "leaflet-draw"), f = !1;
      for (var p in this._toolbars)
        this._toolbars.hasOwnProperty(p) && (a = this._toolbars[p].addToolbar(o)) && (f || (L.DomUtil.hasClass(a, "leaflet-draw-toolbar-top") || L.DomUtil.addClass(a.childNodes[0], "leaflet-draw-toolbar-top"), f = !0), c.appendChild(a));
      return c;
    },
    onRemove: function() {
      for (var o in this._toolbars)
        this._toolbars.hasOwnProperty(o) && this._toolbars[o].removeToolbar();
    },
    setDrawingOptions: function(o) {
      for (var a in this._toolbars)
        this._toolbars[a] instanceof L.DrawToolbar && this._toolbars[a].setOptions(o);
    },
    _toolbarEnabled: function(o) {
      var a = o.target;
      for (var c in this._toolbars)
        this._toolbars[c] !== a && this._toolbars[c].disable();
    }
  }), L.Map.mergeOptions({ drawControlTooltips: !0, drawControl: !1 }), L.Map.addInitHook(function() {
    this.options.drawControl && (this.drawControl = new L.Control.Draw(), this.addControl(this.drawControl));
  }), L.Toolbar = L.Class.extend({
    initialize: function(o) {
      L.setOptions(this, o), this._modes = {}, this._actionButtons = [], this._activeMode = null;
      var a = L.version.split(".");
      parseInt(a[0], 10) === 1 && parseInt(a[1], 10) >= 2 ? L.Toolbar.include(L.Evented.prototype) : L.Toolbar.include(L.Mixin.Events);
    },
    enabled: function() {
      return this._activeMode !== null;
    },
    disable: function() {
      this.enabled() && this._activeMode.handler.disable();
    },
    addToolbar: function(o) {
      var a, c = L.DomUtil.create("div", "leaflet-draw-section"), f = 0, p = this._toolbarClass || "", v = this.getModeHandlers(o);
      for (this._toolbarContainer = L.DomUtil.create("div", "leaflet-draw-toolbar leaflet-bar"), this._map = o, a = 0; a < v.length; a++)
        v[a].enabled && this._initModeHandler(v[a].handler, this._toolbarContainer, f++, p, v[a].title);
      if (f)
        return this._lastButtonIndex = --f, this._actionsContainer = L.DomUtil.create("ul", "leaflet-draw-actions"), c.appendChild(this._toolbarContainer), c.appendChild(this._actionsContainer), c;
    },
    removeToolbar: function() {
      for (var o in this._modes)
        this._modes.hasOwnProperty(o) && (this._disposeButton(
          this._modes[o].button,
          this._modes[o].handler.enable,
          this._modes[o].handler
        ), this._modes[o].handler.disable(), this._modes[o].handler.off("enabled", this._handlerActivated, this).off("disabled", this._handlerDeactivated, this));
      this._modes = {};
      for (var a = 0, c = this._actionButtons.length; a < c; a++)
        this._disposeButton(this._actionButtons[a].button, this._actionButtons[a].callback, this);
      this._actionButtons = [], this._actionsContainer = null;
    },
    _initModeHandler: function(o, a, c, f, p) {
      var v = o.type;
      this._modes[v] = {}, this._modes[v].handler = o, this._modes[v].button = this._createButton({
        type: v,
        title: p,
        className: f + "-" + v,
        container: a,
        callback: this._modes[v].handler.enable,
        context: this._modes[v].handler
      }), this._modes[v].buttonIndex = c, this._modes[v].handler.on("enabled", this._handlerActivated, this).on("disabled", this._handlerDeactivated, this);
    },
    _detectIOS: function() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !l.MSStream;
    },
    _createButton: function(o) {
      var a = L.DomUtil.create("a", o.className || "", o.container), c = L.DomUtil.create("span", "sr-only", o.container);
      a.href = "#", a.appendChild(c), o.title && (a.title = o.title, c.innerHTML = o.title), o.text && (a.innerHTML = o.text, c.innerHTML = o.text);
      var f = this._detectIOS() ? "touchstart" : "click";
      return L.DomEvent.on(a, "click", L.DomEvent.stopPropagation).on(a, "mousedown", L.DomEvent.stopPropagation).on(a, "dblclick", L.DomEvent.stopPropagation).on(a, "touchstart", L.DomEvent.stopPropagation).on(a, "click", L.DomEvent.preventDefault).on(a, f, o.callback, o.context), a;
    },
    _disposeButton: function(o, a) {
      var c = this._detectIOS() ? "touchstart" : "click";
      L.DomEvent.off(o, "click", L.DomEvent.stopPropagation).off(o, "mousedown", L.DomEvent.stopPropagation).off(o, "dblclick", L.DomEvent.stopPropagation).off(o, "touchstart", L.DomEvent.stopPropagation).off(o, "click", L.DomEvent.preventDefault).off(o, c, a);
    },
    _handlerActivated: function(o) {
      this.disable(), this._activeMode = this._modes[o.handler], L.DomUtil.addClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"), this._showActionsToolbar(), this.fire("enable");
    },
    _handlerDeactivated: function() {
      this._hideActionsToolbar(), L.DomUtil.removeClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"), this._activeMode = null, this.fire("disable");
    },
    _createActions: function(o) {
      var a, c, f, p, v = this._actionsContainer, y = this.getActions(o), x = y.length;
      for (c = 0, f = this._actionButtons.length; c < f; c++)
        this._disposeButton(this._actionButtons[c].button, this._actionButtons[c].callback);
      for (this._actionButtons = []; v.firstChild; )
        v.removeChild(v.firstChild);
      for (var T = 0; T < x; T++)
        "enabled" in y[T] && !y[T].enabled || (a = L.DomUtil.create("li", "", v), p = this._createButton({
          title: y[T].title,
          text: y[T].text,
          container: a,
          callback: y[T].callback,
          context: y[T].context
        }), this._actionButtons.push({ button: p, callback: y[T].callback }));
    },
    _showActionsToolbar: function() {
      var o = this._activeMode.buttonIndex, a = this._lastButtonIndex, c = this._activeMode.button.offsetTop - 1;
      this._createActions(this._activeMode.handler), this._actionsContainer.style.top = c + "px", o === 0 && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"), L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-top")), o === a && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"), L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-bottom")), this._actionsContainer.style.display = "block", this._map.fire(L.Draw.Event.TOOLBAROPENED);
    },
    _hideActionsToolbar: function() {
      this._actionsContainer.style.display = "none", L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"), L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"), L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-top"), L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-bottom"), this._map.fire(L.Draw.Event.TOOLBARCLOSED);
    }
  }), L.Draw = L.Draw || {}, L.Draw.Tooltip = L.Class.extend({
    initialize: function(o) {
      this._map = o, this._popupPane = o._panes.popupPane, this._visible = !1, this._container = o.options.drawControlTooltips ? L.DomUtil.create("div", "leaflet-draw-tooltip", this._popupPane) : null, this._singleLineLabel = !1, this._map.on("mouseout", this._onMouseOut, this);
    },
    dispose: function() {
      this._map.off("mouseout", this._onMouseOut, this), this._container && (this._popupPane.removeChild(this._container), this._container = null);
    },
    updateContent: function(o) {
      return this._container ? (o.subtext = o.subtext || "", o.subtext.length !== 0 || this._singleLineLabel ? o.subtext.length > 0 && this._singleLineLabel && (L.DomUtil.removeClass(this._container, "leaflet-draw-tooltip-single"), this._singleLineLabel = !1) : (L.DomUtil.addClass(this._container, "leaflet-draw-tooltip-single"), this._singleLineLabel = !0), this._container.innerHTML = (o.subtext.length > 0 ? '<span class="leaflet-draw-tooltip-subtext">' + o.subtext + "</span><br />" : "") + "<span>" + o.text + "</span>", o.text || o.subtext ? (this._visible = !0, this._container.style.visibility = "inherit") : (this._visible = !1, this._container.style.visibility = "hidden"), this) : this;
    },
    updatePosition: function(o) {
      var a = this._map.latLngToLayerPoint(o), c = this._container;
      return this._container && (this._visible && (c.style.visibility = "inherit"), L.DomUtil.setPosition(c, a)), this;
    },
    showAsError: function() {
      return this._container && L.DomUtil.addClass(this._container, "leaflet-error-draw-tooltip"), this;
    },
    removeError: function() {
      return this._container && L.DomUtil.removeClass(this._container, "leaflet-error-draw-tooltip"), this;
    },
    _onMouseOut: function() {
      this._container && (this._container.style.visibility = "hidden");
    }
  }), L.DrawToolbar = L.Toolbar.extend({
    statics: { TYPE: "draw" },
    options: {
      polyline: {},
      polygon: {},
      rectangle: {},
      circle: {},
      marker: {},
      circlemarker: {}
    },
    initialize: function(o) {
      for (var a in this.options)
        this.options.hasOwnProperty(a) && o[a] && (o[a] = L.extend({}, this.options[a], o[a]));
      this._toolbarClass = "leaflet-draw-draw", L.Toolbar.prototype.initialize.call(this, o);
    },
    getModeHandlers: function(o) {
      return [
        {
          enabled: this.options.polyline,
          handler: new L.Draw.Polyline(o, this.options.polyline),
          title: L.drawLocal.draw.toolbar.buttons.polyline
        },
        {
          enabled: this.options.polygon,
          handler: new L.Draw.Polygon(o, this.options.polygon),
          title: L.drawLocal.draw.toolbar.buttons.polygon
        },
        {
          enabled: this.options.rectangle,
          handler: new L.Draw.Rectangle(o, this.options.rectangle),
          title: L.drawLocal.draw.toolbar.buttons.rectangle
        },
        {
          enabled: this.options.circle,
          handler: new L.Draw.Circle(o, this.options.circle),
          title: L.drawLocal.draw.toolbar.buttons.circle
        },
        {
          enabled: this.options.marker,
          handler: new L.Draw.Marker(o, this.options.marker),
          title: L.drawLocal.draw.toolbar.buttons.marker
        },
        {
          enabled: this.options.circlemarker,
          handler: new L.Draw.CircleMarker(o, this.options.circlemarker),
          title: L.drawLocal.draw.toolbar.buttons.circlemarker
        }
      ];
    },
    getActions: function(o) {
      return [
        {
          enabled: o.completeShape,
          title: L.drawLocal.draw.toolbar.finish.title,
          text: L.drawLocal.draw.toolbar.finish.text,
          callback: o.completeShape,
          context: o
        },
        {
          enabled: o.deleteLastVertex,
          title: L.drawLocal.draw.toolbar.undo.title,
          text: L.drawLocal.draw.toolbar.undo.text,
          callback: o.deleteLastVertex,
          context: o
        },
        {
          title: L.drawLocal.draw.toolbar.actions.title,
          text: L.drawLocal.draw.toolbar.actions.text,
          callback: this.disable,
          context: this
        }
      ];
    },
    setOptions: function(o) {
      L.setOptions(this, o);
      for (var a in this._modes)
        this._modes.hasOwnProperty(a) && o.hasOwnProperty(a) && this._modes[a].handler.setOptions(o[a]);
    }
  }), L.EditToolbar = L.Toolbar.extend({
    statics: { TYPE: "edit" },
    options: {
      edit: {
        selectedPathOptions: {
          dashArray: "10, 10",
          fill: !0,
          fillColor: "#fe57a1",
          fillOpacity: 0.1,
          maintainColor: !1
        }
      },
      remove: {},
      poly: null,
      featureGroup: null
    },
    initialize: function(o) {
      o.edit && (o.edit.selectedPathOptions === void 0 && (o.edit.selectedPathOptions = this.options.edit.selectedPathOptions), o.edit.selectedPathOptions = L.extend(
        {},
        this.options.edit.selectedPathOptions,
        o.edit.selectedPathOptions
      )), o.remove && (o.remove = L.extend({}, this.options.remove, o.remove)), o.poly && (o.poly = L.extend({}, this.options.poly, o.poly)), this._toolbarClass = "leaflet-draw-edit", L.Toolbar.prototype.initialize.call(this, o), this._selectedFeatureCount = 0;
    },
    getModeHandlers: function(o) {
      var a = this.options.featureGroup;
      return [
        {
          enabled: this.options.edit,
          handler: new L.EditToolbar.Edit(o, {
            featureGroup: a,
            selectedPathOptions: this.options.edit.selectedPathOptions,
            poly: this.options.poly
          }),
          title: L.drawLocal.edit.toolbar.buttons.edit
        },
        {
          enabled: this.options.remove,
          handler: new L.EditToolbar.Delete(o, { featureGroup: a }),
          title: L.drawLocal.edit.toolbar.buttons.remove
        }
      ];
    },
    getActions: function(o) {
      var a = [
        {
          title: L.drawLocal.edit.toolbar.actions.save.title,
          text: L.drawLocal.edit.toolbar.actions.save.text,
          callback: this._save,
          context: this
        },
        {
          title: L.drawLocal.edit.toolbar.actions.cancel.title,
          text: L.drawLocal.edit.toolbar.actions.cancel.text,
          callback: this.disable,
          context: this
        }
      ];
      return o.removeAllLayers && a.push({
        title: L.drawLocal.edit.toolbar.actions.clearAll.title,
        text: L.drawLocal.edit.toolbar.actions.clearAll.text,
        callback: this._clearAllLayers,
        context: this
      }), a;
    },
    addToolbar: function(o) {
      var a = L.Toolbar.prototype.addToolbar.call(this, o);
      return this._checkDisabled(), this.options.featureGroup.on("layeradd layerremove", this._checkDisabled, this), a;
    },
    removeToolbar: function() {
      this.options.featureGroup.off("layeradd layerremove", this._checkDisabled, this), L.Toolbar.prototype.removeToolbar.call(this);
    },
    disable: function() {
      this.enabled() && (this._activeMode.handler.revertLayers(), L.Toolbar.prototype.disable.call(this));
    },
    _save: function() {
      this._activeMode.handler.save(), this._activeMode && this._activeMode.handler.disable();
    },
    _clearAllLayers: function() {
      this._activeMode.handler.removeAllLayers(), this._activeMode && this._activeMode.handler.disable();
    },
    _checkDisabled: function() {
      var o, a = this.options.featureGroup, c = a.getLayers().length !== 0;
      this.options.edit && (o = this._modes[L.EditToolbar.Edit.TYPE].button, c ? L.DomUtil.removeClass(o, "leaflet-disabled") : L.DomUtil.addClass(o, "leaflet-disabled"), o.setAttribute(
        "title",
        c ? L.drawLocal.edit.toolbar.buttons.edit : L.drawLocal.edit.toolbar.buttons.editDisabled
      )), this.options.remove && (o = this._modes[L.EditToolbar.Delete.TYPE].button, c ? L.DomUtil.removeClass(o, "leaflet-disabled") : L.DomUtil.addClass(o, "leaflet-disabled"), o.setAttribute(
        "title",
        c ? L.drawLocal.edit.toolbar.buttons.remove : L.drawLocal.edit.toolbar.buttons.removeDisabled
      ));
    }
  }), L.EditToolbar.Edit = L.Handler.extend({
    statics: { TYPE: "edit" },
    initialize: function(o, a) {
      if (L.Handler.prototype.initialize.call(this, o), L.setOptions(this, a), this._featureGroup = a.featureGroup, !(this._featureGroup instanceof L.FeatureGroup))
        throw new Error("options.featureGroup must be a L.FeatureGroup");
      this._uneditedLayerProps = {}, this.type = L.EditToolbar.Edit.TYPE;
      var c = L.version.split(".");
      parseInt(c[0], 10) === 1 && parseInt(c[1], 10) >= 2 ? L.EditToolbar.Edit.include(L.Evented.prototype) : L.EditToolbar.Edit.include(L.Mixin.Events);
    },
    enable: function() {
      !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", { handler: this.type }), this._map.fire(L.Draw.Event.EDITSTART, { handler: this.type }), L.Handler.prototype.enable.call(this), this._featureGroup.on("layeradd", this._enableLayerEdit, this).on("layerremove", this._disableLayerEdit, this));
    },
    disable: function() {
      this._enabled && (this._featureGroup.off("layeradd", this._enableLayerEdit, this).off("layerremove", this._disableLayerEdit, this), L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.EDITSTOP, { handler: this.type }), this.fire("disabled", { handler: this.type }));
    },
    addHooks: function() {
      var o = this._map;
      o && (o.getContainer().focus(), this._featureGroup.eachLayer(this._enableLayerEdit, this), this._tooltip = new L.Draw.Tooltip(this._map), this._tooltip.updateContent({
        text: L.drawLocal.edit.handlers.edit.tooltip.text,
        subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
      }), o._editTooltip = this._tooltip, this._updateTooltip(), this._map.on("mousemove", this._onMouseMove, this).on("touchmove", this._onMouseMove, this).on("MSPointerMove", this._onMouseMove, this).on(L.Draw.Event.EDITVERTEX, this._updateTooltip, this));
    },
    removeHooks: function() {
      this._map && (this._featureGroup.eachLayer(this._disableLayerEdit, this), this._uneditedLayerProps = {}, this._tooltip.dispose(), this._tooltip = null, this._map.off("mousemove", this._onMouseMove, this).off("touchmove", this._onMouseMove, this).off("MSPointerMove", this._onMouseMove, this).off(L.Draw.Event.EDITVERTEX, this._updateTooltip, this));
    },
    revertLayers: function() {
      this._featureGroup.eachLayer(function(o) {
        this._revertLayer(o);
      }, this);
    },
    save: function() {
      var o = new L.LayerGroup();
      this._featureGroup.eachLayer(function(a) {
        a.edited && (o.addLayer(a), a.edited = !1);
      }), this._map.fire(L.Draw.Event.EDITED, { layers: o });
    },
    _backupLayer: function(o) {
      var a = L.Util.stamp(o);
      this._uneditedLayerProps[a] || (o instanceof L.Polyline || o instanceof L.Polygon || o instanceof L.Rectangle ? this._uneditedLayerProps[a] = { latlngs: L.LatLngUtil.cloneLatLngs(o.getLatLngs()) } : o instanceof L.Circle ? this._uneditedLayerProps[a] = {
        latlng: L.LatLngUtil.cloneLatLng(o.getLatLng()),
        radius: o.getRadius()
      } : (o instanceof L.Marker || o instanceof L.CircleMarker) && (this._uneditedLayerProps[a] = { latlng: L.LatLngUtil.cloneLatLng(o.getLatLng()) }));
    },
    _getTooltipText: function() {
      return {
        text: L.drawLocal.edit.handlers.edit.tooltip.text,
        subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
      };
    },
    _updateTooltip: function() {
      this._tooltip.updateContent(this._getTooltipText());
    },
    _revertLayer: function(o) {
      var a = L.Util.stamp(o);
      o.edited = !1, this._uneditedLayerProps.hasOwnProperty(a) && (o instanceof L.Polyline || o instanceof L.Polygon || o instanceof L.Rectangle ? o.setLatLngs(this._uneditedLayerProps[a].latlngs) : o instanceof L.Circle ? (o.setLatLng(this._uneditedLayerProps[a].latlng), o.setRadius(this._uneditedLayerProps[a].radius)) : (o instanceof L.Marker || o instanceof L.CircleMarker) && o.setLatLng(this._uneditedLayerProps[a].latlng), o.fire("revert-edited", { layer: o }));
    },
    _enableLayerEdit: function(o) {
      var a, c, f = o.layer || o.target || o;
      this._backupLayer(f), this.options.poly && (c = L.Util.extend({}, this.options.poly), f.options.poly = c), this.options.selectedPathOptions && (a = L.Util.extend({}, this.options.selectedPathOptions), a.maintainColor && (a.color = f.options.color, a.fillColor = f.options.fillColor), f.options.original = L.extend({}, f.options), f.options.editing = a), f instanceof L.Marker ? (f.editing && f.editing.enable(), f.dragging.enable(), f.on("dragend", this._onMarkerDragEnd).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onMarkerDragEnd, this).on("MSPointerUp", this._onMarkerDragEnd, this)) : f.editing.enable();
    },
    _disableLayerEdit: function(o) {
      var a = o.layer || o.target || o;
      a.edited = !1, a.editing && a.editing.disable(), delete a.options.editing, delete a.options.original, this._selectedPathOptions && (a instanceof L.Marker ? this._toggleMarkerHighlight(a) : (a.setStyle(a.options.previousOptions), delete a.options.previousOptions)), a instanceof L.Marker ? (a.dragging.disable(), a.off("dragend", this._onMarkerDragEnd, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onMarkerDragEnd, this).off("MSPointerUp", this._onMarkerDragEnd, this)) : a.editing.disable();
    },
    _onMouseMove: function(o) {
      this._tooltip.updatePosition(o.latlng);
    },
    _onMarkerDragEnd: function(o) {
      var a = o.target;
      a.edited = !0, this._map.fire(L.Draw.Event.EDITMOVE, { layer: a });
    },
    _onTouchMove: function(o) {
      var a = o.originalEvent.changedTouches[0], c = this._map.mouseEventToLayerPoint(a), f = this._map.layerPointToLatLng(c);
      o.target.setLatLng(f);
    },
    _hasAvailableLayers: function() {
      return this._featureGroup.getLayers().length !== 0;
    }
  }), L.EditToolbar.Delete = L.Handler.extend({
    statics: { TYPE: "remove" },
    initialize: function(o, a) {
      if (L.Handler.prototype.initialize.call(this, o), L.Util.setOptions(this, a), this._deletableLayers = this.options.featureGroup, !(this._deletableLayers instanceof L.FeatureGroup))
        throw new Error("options.featureGroup must be a L.FeatureGroup");
      this.type = L.EditToolbar.Delete.TYPE;
      var c = L.version.split(".");
      parseInt(c[0], 10) === 1 && parseInt(c[1], 10) >= 2 ? L.EditToolbar.Delete.include(L.Evented.prototype) : L.EditToolbar.Delete.include(L.Mixin.Events);
    },
    enable: function() {
      !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", { handler: this.type }), this._map.fire(L.Draw.Event.DELETESTART, { handler: this.type }), L.Handler.prototype.enable.call(this), this._deletableLayers.on("layeradd", this._enableLayerDelete, this).on("layerremove", this._disableLayerDelete, this));
    },
    disable: function() {
      this._enabled && (this._deletableLayers.off("layeradd", this._enableLayerDelete, this).off("layerremove", this._disableLayerDelete, this), L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.DELETESTOP, { handler: this.type }), this.fire("disabled", { handler: this.type }));
    },
    addHooks: function() {
      var o = this._map;
      o && (o.getContainer().focus(), this._deletableLayers.eachLayer(this._enableLayerDelete, this), this._deletedLayers = new L.LayerGroup(), this._tooltip = new L.Draw.Tooltip(this._map), this._tooltip.updateContent({ text: L.drawLocal.edit.handlers.remove.tooltip.text }), this._map.on("mousemove", this._onMouseMove, this));
    },
    removeHooks: function() {
      this._map && (this._deletableLayers.eachLayer(this._disableLayerDelete, this), this._deletedLayers = null, this._tooltip.dispose(), this._tooltip = null, this._map.off("mousemove", this._onMouseMove, this));
    },
    revertLayers: function() {
      this._deletedLayers.eachLayer(function(o) {
        this._deletableLayers.addLayer(o), o.fire("revert-deleted", { layer: o });
      }, this);
    },
    save: function() {
      this._map.fire(L.Draw.Event.DELETED, { layers: this._deletedLayers });
    },
    removeAllLayers: function() {
      this._deletableLayers.eachLayer(function(o) {
        this._removeLayer({ layer: o });
      }, this), this.save();
    },
    _enableLayerDelete: function(o) {
      (o.layer || o.target || o).on("click", this._removeLayer, this);
    },
    _disableLayerDelete: function(o) {
      var a = o.layer || o.target || o;
      a.off("click", this._removeLayer, this), this._deletedLayers.removeLayer(a);
    },
    _removeLayer: function(o) {
      var a = o.layer || o.target || o;
      this._deletableLayers.removeLayer(a), this._deletedLayers.addLayer(a), a.fire("deleted");
    },
    _onMouseMove: function(o) {
      this._tooltip.updatePosition(o.latlng);
    },
    _hasAvailableLayers: function() {
      return this._deletableLayers.getLayers().length !== 0;
    }
  });
})(window, document);
(function(l) {
  var i = function() {
    var r = l.documentMode;
    return "onhashchange" in l && (r === void 0 || r > 7);
  }();
  L.Hash = function(r) {
    this.onHashChange = L.Util.bind(this.onHashChange, this), r && this.init(r);
  }, L.Hash.parseHash = function(r) {
    r.indexOf("#") === 0 && (r = r.substr(1));
    var u = r.split("/");
    if (u.length == 3) {
      var o = parseInt(u[0], 10), a = parseFloat(u[1]), c = parseFloat(u[2]);
      return isNaN(o) || isNaN(a) || isNaN(c) ? !1 : {
        center: new L.LatLng(a, c),
        zoom: o
      };
    } else
      return !1;
  }, L.Hash.formatHash = function(r) {
    var u = r.getCenter(), o = r.getZoom(), a = Math.max(0, Math.ceil(Math.log(o) / Math.LN2));
    return "#" + [
      o,
      u.lat.toFixed(a),
      u.lng.toFixed(a)
    ].join("/");
  }, L.Hash.prototype = {
    map: null,
    lastHash: null,
    parseHash: L.Hash.parseHash,
    formatHash: L.Hash.formatHash,
    init: function(r) {
      this.map = r, this.lastHash = null, this.onHashChange(), this.isListening || this.startListening();
    },
    removeFrom: function(r) {
      this.changeTimeout && clearTimeout(this.changeTimeout), this.isListening && this.stopListening(), this.map = null;
    },
    onMapMove: function() {
      if (this.movingMap || !this.map._loaded)
        return !1;
      var r = this.formatHash(this.map);
      this.lastHash != r && (location.replace(r), this.lastHash = r);
    },
    movingMap: !1,
    update: function() {
      var r = location.hash;
      if (r !== this.lastHash) {
        var u = this.parseHash(r);
        u ? (this.movingMap = !0, this.map.setView(u.center, u.zoom), this.movingMap = !1) : this.onMapMove(this.map);
      }
    },
    // defer hash change updates every 100ms
    changeDefer: 100,
    changeTimeout: null,
    onHashChange: function() {
      if (!this.changeTimeout) {
        var r = this;
        this.changeTimeout = setTimeout(function() {
          r.update(), r.changeTimeout = null;
        }, this.changeDefer);
      }
    },
    isListening: !1,
    hashChangeInterval: null,
    startListening: function() {
      this.map.on("moveend", this.onMapMove, this), i ? L.DomEvent.addListener(l, "hashchange", this.onHashChange) : (clearInterval(this.hashChangeInterval), this.hashChangeInterval = setInterval(this.onHashChange, 50)), this.isListening = !0;
    },
    stopListening: function() {
      this.map.off("moveend", this.onMapMove, this), i ? L.DomEvent.removeListener(l, "hashchange", this.onHashChange) : clearInterval(this.hashChangeInterval), this.isListening = !1;
    }
  }, L.hash = function(r) {
    return new L.Hash(r);
  }, L.Map.prototype.addHash = function() {
    this._hash = L.hash(this);
  }, L.Map.prototype.removeHash = function() {
    this._hash.removeFrom();
  };
})(window);
var Dd = { exports: {} };
/**
 * L.Modal v0.2.0
 * Modal/dialog window inside leaflet map
 *
 * @author Alexander Milevski <info@w8r.name>
 * @license MIT
 * @preserve
 */
(function(l, i) {
  (function(r, u) {
    l.exports = u(Je.exports);
  })(re, function(r) {
    r = r && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r, r.Map.Modal = r.Handler.extend(
      /** @lends {L.Map.Hadler.prototype} */
      {
        includes: r.Evented ? r.Evented.prototype : r.Mixin.Events,
        /**
         * @static
         * @type {Object}
         */
        statics: {
          BASE_CLS: "leaflet-modal",
          HIDE: "modal.hide",
          SHOW_START: "modal.showStart",
          SHOW: "modal.show",
          CHANGED: "modal.changed",
          /**
           * "foo bar baz" -> ".foo.bar.baz"
           * @param  {String} classString
           * @return {String}
           */
          classNameToSelector: function(o) {
            return (" " + o).split(" ").join(".").replace(/^\s+|\s+$/g, "");
          }
        },
        /**
         * @type {Object}
         */
        options: {
          OVERLAY_CLS: "overlay",
          MODAL_CLS: "modal",
          MODAL_CONTENT_CLS: "modal-content",
          INNER_CONTENT_CLS: "modal-inner",
          SHOW_CLS: "show",
          CLOSE_CLS: "close",
          closeTitle: "close",
          zIndex: 1e4,
          transitionDuration: 300,
          wrapperTemplate: [
            '<div class="{OVERLAY_CLS}"></div>',
            '<div class="{MODAL_CLS}"><div class="{MODAL_CONTENT_CLS}">',
            '<span class="{CLOSE_CLS}" title="{closeTitle}">&times;</span>',
            '<div class="{INNER_CONTENT_CLS}">{_content}</div>',
            "</div></div>"
          ].join(""),
          template: "{content}",
          content: ""
        },
        /**
         * @constructor
         * @param  {L.Map}   map
         * @param  {Object=} options
         */
        initialize: function(o, a) {
          r.Handler.prototype.initialize.call(this, o), r.Util.setOptions(this, a), this._visible = !1;
          var c = this._container = r.DomUtil.create("div", r.Map.Modal.BASE_CLS, o._container);
          c.style.zIndex = this.options.zIndex, c.style.position = "absolute", this._map._controlContainer.appendChild(c), r.DomEvent.disableClickPropagation(c).disableScrollPropagation(c), r.DomEvent.on(c, "contextmenu", r.DomEvent.stopPropagation), this.enable();
        },
        /**
         * Add events and keyboard handlers
         */
        addHooks: function() {
          r.DomEvent.on(document, "keydown", this._onKeyDown, this), this._map.on({ modal: this._show }, this);
        },
        /**
         * Disable handlers
         */
        removeHooks: function() {
          r.DomEvent.off(document, "keydown", this._onKeyDown, this), this._map.off({ modal: this._show }, this);
        },
        /**
         * @return {L.Map.Modal}
         */
        hide: function() {
          return this._hide(), this;
        },
        /**
         * @return {Boolean}
         */
        isVisible: function() {
          return this._visible;
        },
        /**
         * Show again, or just resize and re-position
         * @param  {Object=} options
         */
        update: function(o) {
          o ? this._show(o) : this._updatePosition();
        },
        /**
         * @param {String} content
         */
        setContent: function(o) {
          this._getInnerContentContainer().innerHTML = o, this.update();
        },
        /**
         * Update container position
         */
        _updatePosition: function() {
          var o = this._getContentContainer(), a = this._map.getSize(), c = a.y, f = o.offsetHeight;
          f < c ? o.style.marginTop = (c - f) / 2 + "px" : o.style.marginTop = "";
        },
        /**
         * @param  {Object} options
         */
        _show: function(o) {
          var a = this;
          this._visible && this._hide(), o = r.Util.extend({}, this.options, o), this._render(o), this._setContainerSize(o), this._updatePosition(), r.Util.requestAnimFrame(function() {
            var v = a._getContentContainer();
            r.DomEvent.on(v, "transitionend", a._onTransitionEnd, a), r.DomEvent.disableClickPropagation(v), r.DomUtil.addClass(a._container, a.options.SHOW_CLS), r.Browser.any3d || r.Util.requestAnimFrame(a._onTransitionEnd, a);
          });
          var c = this._container, f = c.querySelector("." + this.options.CLOSE_CLS);
          f && r.DomEvent.on(f, "click", this._onCloseClick, this);
          var p = c.querySelector("." + this.options.MODAL_CLS);
          p && r.DomEvent.on(p, "mousedown", this._onMouseDown, this), typeof o.onShow == "function" && this._map.once(r.Map.Modal.SHOW, o.onShow), typeof o.onHide == "function" && this._map.once(r.Map.Modal.HIDE, o.onHide), this._map.fire(r.Map.Modal.SHOW_START, { modal: this });
        },
        /**
         * Show transition ended
         * @param  {TransitionEvent=} e
         */
        _onTransitionEnd: function(o) {
          var a = { modal: this }, c = this._map;
          this._visible ? c.fire(r.Map.Modal.CHANGED, a) : r.DomUtil.hasClass(this._container, this.options.SHOW_CLS) ? (this._visible = !0, c.fire(r.Map.Modal.SHOW, a)) : c.fire(r.Map.Modal.HIDE, a);
        },
        /**
         * @param  {L.MouseEvent} evt
         */
        _onCloseClick: function(o) {
          r.DomEvent.stop(o), this._hide();
        },
        /**
         * Render template
         * @param  {Object} options
         */
        _render: function(o) {
          if (this._container.innerHTML = r.Util.template(
            o.wrapperTemplate,
            r.Util.extend({}, o, {
              _content: r.Util.template(o.template, o)
            })
          ), o.element) {
            var a = this._container.querySelector(
              r.Map.Modal.classNameToSelector(this.options.MODAL_CONTENT_CLS)
            );
            a && a.appendChild(o.element);
          }
        },
        /**
         * @return {Element}
         */
        _getContentContainer: function() {
          return this._container.querySelector(
            r.Map.Modal.classNameToSelector(this.options.MODAL_CONTENT_CLS)
          );
        },
        /**
         * Inner content, don't touch destroy button
         * @return {Element}
         */
        _getInnerContentContainer: function() {
          return this._container.querySelector(
            r.Map.Modal.classNameToSelector(this.options.INNER_CONTENT_CLS)
          );
        },
        /**
         * @param {Object} options
         * @param {Number} options.width
         * @param {Number} options.height
         */
        _setContainerSize: function(o) {
          var a = this._getContentContainer();
          o.width && (a.style.width = o.width + "px"), o.height && (a.style.height = o.height + "px");
        },
        /**
         * Hide blocks immediately
         */
        _hideInternal: function() {
          this._visible = !1, r.DomUtil.removeClass(this._container, this.options.SHOW_CLS);
        },
        /**
         * Hide modal
         */
        _hide: function() {
          this._visible && (this._hideInternal(), r.Util.requestAnimFrame(this._onTransitionEnd, this));
        },
        /**
         * Mouse down on overlay
         * @param  {L.MouseEvent} evt
         */
        _onMouseDown: function(o) {
          r.DomEvent.stop(o);
          var a = o.target || o.srcElement;
          r.DomUtil.hasClass(a, this.options.MODAL_CLS) && this._hide();
        },
        /**
         * Key stroke(escape)
         * @param  {KeyboardEvent} evt
         */
        _onKeyDown: function(o) {
          var a = o.keyCode || o.which;
          a === 27 && this._hide();
        }
      }
    ), r.Map.addInitHook("addHandler", "modal", r.Map.Modal), r.Map.include(
      /** @lends {L.Map.prototype} */
      {
        /**
         * @param  {Object} options
         * @return {L.Map}
         */
        openModal: function(o) {
          return this.fire("modal", o);
        },
        /**
         * @return {L.Map}
         */
        closeModal: function() {
          return this.modal.hide(), this;
        }
      }
    );
    var u = r.Map.Modal;
    return u;
  });
})(Dd);
var pr = { exports: {} };
(function(l, i) {
  (function(u) {
    u.L.Toolbar2 = (L.Layer || L.Class).extend({ statics: { baseClass: "leaflet-toolbar" }, options: { className: "", filter: function() {
      return !0;
    }, actions: [] }, initialize: function(a) {
      L.setOptions(this, a), this._toolbar_type = this.constructor._toolbar_class_id;
    }, addTo: function(a) {
      return this._arguments = [].slice.call(arguments), a.addLayer(this), this;
    }, onAdd: function(a) {
      var c = a._toolbars[this._toolbar_type];
      this._calculateDepth() === 0 && (c && a.removeLayer(c), a._toolbars[this._toolbar_type] = this);
    }, onRemove: function(a) {
      this._calculateDepth() === 0 && delete a._toolbars[this._toolbar_type];
    }, appendToContainer: function(a) {
      var c, f, p, v, y = this.constructor.baseClass + "-" + this._calculateDepth() + " " + this.options.className;
      for (this._container = a, this._ul = L.DomUtil.create("ul", y, a), this._disabledEvents = ["click", "mousemove", "dblclick", "mousedown", "mouseup", "touchstart"], f = 0, v = this._disabledEvents.length; f < v; f++)
        L.DomEvent.on(this._ul, this._disabledEvents[f], L.DomEvent.stopPropagation);
      for (c = 0, p = this.options.actions.length; c < p; c++)
        new (this._getActionConstructor(this.options.actions[c]))()._createIcon(this, this._ul, this._arguments);
    }, _getActionConstructor: function(a) {
      var c = this._arguments, f = this;
      return a.extend({ initialize: function() {
        a.prototype.initialize.apply(this, c);
      }, enable: function(p) {
        f._active && f._active.disable(), f._active = this, a.prototype.enable.call(this, p);
      } });
    }, _hide: function() {
      this._ul.style.display = "none";
    }, _show: function() {
      this._ul.style.display = "block";
    }, _calculateDepth: function() {
      for (var a = 0, c = this.parentToolbar; c; )
        a += 1, c = c.parentToolbar;
      return a;
    } }), L.Evented || L.Toolbar2.include(L.Mixin.Events), L.toolbar = {};
    var o = 0;
    L.Toolbar2.extend = function(a) {
      var c = L.extend({}, a.statics, { _toolbar_class_id: o });
      return o += 1, L.extend(a, { statics: c }), L.Class.extend.call(this, a);
    }, L.Map.addInitHook(function() {
      this._toolbars = {};
    }), L.Toolbar2.Action = L.Handler.extend({ statics: { baseClass: "leaflet-toolbar-icon" }, options: { toolbarIcon: { html: "", className: "", tooltip: "" }, subToolbar: new L.Toolbar2() }, initialize: function(a) {
      var c = L.Toolbar2.Action.prototype.options.toolbarIcon;
      L.setOptions(this, a), this.options.toolbarIcon = L.extend({}, c, this.options.toolbarIcon);
    }, enable: function(a) {
      a && L.DomEvent.preventDefault(a), this._enabled || (this._enabled = !0, this.addHooks && this.addHooks());
    }, disable: function() {
      this._enabled && (this._enabled = !1, this.removeHooks) && this.removeHooks();
    }, _createIcon: function(a, c, f) {
      var p = this.options.toolbarIcon;
      this.toolbar = a, this._icon = L.DomUtil.create("li", "", c), this._link = L.DomUtil.create("a", "", this._icon), this._link.innerHTML = p.html, this._link.setAttribute("href", "#"), this._link.setAttribute("title", p.tooltip), L.DomUtil.addClass(this._link, this.constructor.baseClass), p.className && L.DomUtil.addClass(this._link, p.className), L.DomEvent.on(this._link, "click", this.enable, this), this._addSubToolbar(a, this._icon, f);
    }, _addSubToolbar: function(a, c, f) {
      var p = this.options.subToolbar, v = this.addHooks, y = this.removeHooks;
      p.parentToolbar = a, 0 < p.options.actions.length && ((f = [].slice.call(f)).push(this), p.addTo.apply(p, f), p.appendToContainer(c), this.addHooks = function(x) {
        typeof v == "function" && v.call(this, x), p._show();
      }, this.removeHooks = function(x) {
        typeof y == "function" && y.call(this, x), p._hide();
      });
    } }), L.toolbarAction = function(a) {
      return new L.Toolbar2.Action(a);
    }, L.Toolbar2.Action.extendOptions = function(a) {
      return this.extend({ options: a });
    }, L.Toolbar2.Control = L.Toolbar2.extend({ statics: { baseClass: "leaflet-control-toolbar " + L.Toolbar2.baseClass }, initialize: function(a) {
      L.Toolbar2.prototype.initialize.call(this, a), this._control = new L.Control.Toolbar(this.options);
    }, onAdd: function(a) {
      this._control.addTo(a), L.Toolbar2.prototype.onAdd.call(this, a), this.appendToContainer(this._control.getContainer());
    }, onRemove: function(a) {
      L.Toolbar2.prototype.onRemove.call(this, a), this._control.remove ? this._control.remove() : this._control.removeFrom(a);
    } }), L.Control.Toolbar = L.Control.extend({ onAdd: function() {
      return L.DomUtil.create("div", "");
    } }), L.toolbar.control = function(a) {
      return new L.Toolbar2.Control(a);
    }, L.Toolbar2.Popup = L.Toolbar2.extend({ statics: { baseClass: "leaflet-popup-toolbar " + L.Toolbar2.baseClass }, options: { anchor: [0, 0] }, initialize: function(a, c) {
      L.Toolbar2.prototype.initialize.call(this, c), this._marker = new L.Marker(a, { icon: new L.DivIcon({ className: this.options.className, iconAnchor: [0, 0] }) });
    }, onAdd: function(a) {
      this._map = a, this._marker.addTo(a), L.Toolbar2.prototype.onAdd.call(this, a), this.appendToContainer(this._marker._icon), this._setStyles();
    }, onRemove: function(a) {
      a.removeLayer(this._marker), L.Toolbar2.prototype.onRemove.call(this, a), delete this._map;
    }, setLatLng: function(a) {
      return this._marker.setLatLng(a), this;
    }, _setStyles: function() {
      for (var a, c, f = this._container, p = this._ul, v = L.point(this.options.anchor), y = p.querySelectorAll(".leaflet-toolbar-icon"), x = [], T = 0, W = 0, nt = y.length; W < nt; W++)
        y[W].parentNode.parentNode === p && (x.push(parseInt(L.DomUtil.getStyle(y[W], "height"), 10)), T = (T += Math.ceil(parseFloat(L.DomUtil.getStyle(y[W], "width")))) + Math.ceil(parseFloat(L.DomUtil.getStyle(y[W], "border-right-width"))));
      p.style.width = T + "px", this._tipContainer = L.DomUtil.create("div", "leaflet-toolbar-tip-container", f), this._tipContainer.style.width = T + Math.ceil(parseFloat(L.DomUtil.getStyle(p, "border-left-width"))) + "px", this._tip = L.DomUtil.create("div", "leaflet-toolbar-tip", this._tipContainer), c = Math.max.apply(void 0, x), p.style.height = c + "px", a = parseInt(L.DomUtil.getStyle(this._tip, "width"), 10), c = new L.Point(T / 2, c + 1.414 * a), f.style.marginLeft = v.x - c.x + "px", f.style.marginTop = v.y - c.y + "px";
    } }), L.toolbar.popup = function(a) {
      return new L.Toolbar2.Popup(a);
    };
  })(window);
  var r = function() {
    function u(_, M, S) {
      return Math.max(_, Math.min(M, S));
    }
    function o(_) {
      return { _, loadContentsOf: function(M) {
        g = this._.gl, this._.loadContentsOf(M);
      }, destroy: function() {
        g = this._.gl, this._.destroy();
      } };
    }
    function a(_) {
      return o(jt.fromElement(_));
    }
    function c(_, M, S) {
      return this._.isInitialized && _._.width == this.width && _._.height == this.height || function(N, it) {
        var ft = g.UNSIGNED_BYTE;
        if (g.getExtension("OES_texture_float") && g.getExtension("OES_texture_float_linear")) {
          var wt = new jt(100, 100, g.RGBA, g.FLOAT);
          try {
            wt.drawTo(function() {
              ft = g.FLOAT;
            });
          } catch {
          }
          wt.destroy();
        }
        this._.texture && this._.texture.destroy(), this._.spareTexture && this._.spareTexture.destroy(), this.width = N, this.height = it, this._.texture = new jt(N, it, g.RGBA, ft), this._.spareTexture = new jt(N, it, g.RGBA, ft), this._.extraTexture = this._.extraTexture || new jt(0, 0, g.RGBA, ft), this._.flippedShader = this._.flippedShader || new _t(null, "uniform sampler2D texture;varying vec2 texCoord;void main(){gl_FragColor=texture2D(texture,vec2(texCoord.x,1.0-texCoord.y));}"), this._.isInitialized = !0;
      }.call(this, M || _._.width, S || _._.height), _._.use(), this._.texture.drawTo(function() {
        _t.getDefaultShader().drawRect();
      }), this;
    }
    function f() {
      return this._.texture.use(), this._.flippedShader.drawRect(), this;
    }
    function p(_, M, S, N) {
      (S || this._.texture).use(), this._.spareTexture.drawTo(function() {
        _.uniforms(M).drawRect();
      }), this._.spareTexture.swapWith(N || this._.texture);
    }
    function v(_) {
      return _.parentNode.insertBefore(this, _), _.parentNode.removeChild(_), this;
    }
    function y() {
      var _ = new jt(this._.texture.width, this._.texture.height, g.RGBA, g.UNSIGNED_BYTE);
      return this._.texture.use(), _.drawTo(function() {
        _t.getDefaultShader().drawRect();
      }), o(_);
    }
    function x() {
      var _ = this._.texture.width, M = this._.texture.height, S = new Uint8Array(4 * _ * M);
      return this._.texture.drawTo(function() {
        g.readPixels(0, 0, _, M, g.RGBA, g.UNSIGNED_BYTE, S);
      }), S;
    }
    function T(_) {
      return function() {
        return g = this._.gl, _.apply(this, arguments);
      };
    }
    function W(_, M, S, N, it, ft, wt, Ct) {
      var Et = S - it, At = N - ft, ie = wt - it, ei = Ct - ft, Ie = Et * ei - ie * At;
      return [S - _ + (ie = ((it = _ - S + it - wt) * ei - ie * (ft = M - N + ft - Ct)) / Ie) * S, N - M + ie * N, ie, wt - _ + (Et = (Et * ft - it * At) / Ie) * wt, Ct - M + Et * Ct, Et, _, M, 1];
    }
    function nt(_) {
      var M = _[0], S = _[1], N = _[2], it = _[3], ft = _[4], wt = _[5], Ct = _[6], Et = _[7], At = M * ft * (_ = _[8]) - M * wt * Et - S * it * _ + S * wt * Ct + N * it * Et - N * ft * Ct;
      return [(ft * _ - wt * Et) / At, (N * Et - S * _) / At, (S * wt - N * ft) / At, (wt * Ct - it * _) / At, (M * _ - N * Ct) / At, (N * it - M * wt) / At, (it * Et - ft * Ct) / At, (S * Ct - M * Et) / At, (M * ft - S * it) / At];
    }
    function ot(_) {
      var M = _.length;
      this.xa = [], this.ya = [], this.u = [], this.y2 = [], _.sort(function(ft, wt) {
        return ft[0] - wt[0];
      });
      for (var S = 0; S < M; S++)
        this.xa.push(_[S][0]), this.ya.push(_[S][1]);
      for (this.u[0] = 0, this.y2[0] = 0, S = 1; S < M - 1; ++S) {
        _ = this.xa[S + 1] - this.xa[S - 1];
        var N = (this.xa[S] - this.xa[S - 1]) / _, it = N * this.y2[S - 1] + 2;
        this.y2[S] = (N - 1) / it, this.u[S] = (6 * ((this.ya[S + 1] - this.ya[S]) / (this.xa[S + 1] - this.xa[S]) - (this.ya[S] - this.ya[S - 1]) / (this.xa[S] - this.xa[S - 1])) / _ - N * this.u[S - 1]) / it;
      }
      for (this.y2[M - 1] = 0, S = M - 2; 0 <= S; --S)
        this.y2[S] = this.y2[S] * this.y2[S + 1] + this.u[S];
    }
    function Z(_, M) {
      return new _t(null, _ + "uniform sampler2D texture;uniform vec2 texSize;varying vec2 texCoord;void main(){vec2 coord=texCoord*texSize;" + M + "gl_FragColor=texture2D(texture,coord/texSize);vec2 clampedCoord=clamp(coord,vec2(0.0),texSize);if(coord!=clampedCoord){gl_FragColor.a*=max(0.0,1.0-length(coord-clampedCoord));}}");
    }
    function H(_) {
      return g.noise = g.noise || new _t(null, "uniform sampler2D texture;uniform float amount;varying vec2 texCoord;float rand(vec2 co){return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);}void main(){vec4 color=texture2D(texture,texCoord);float diff=(rand(texCoord)-0.5)*amount;color.r+=diff;color.g+=diff;color.b+=diff;gl_FragColor=color;}"), p.call(this, g.noise, { amount: u(0, _, 1) }), this;
    }
    function C(_) {
      return g.vibrance = g.vibrance || new _t(null, "uniform sampler2D texture;uniform float amount;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);float average=(color.r+color.g+color.b)/3.0;float mx=max(color.r,max(color.g,color.b));float amt=(mx-average)*(-amount*3.0);color.rgb=mix(color.rgb,vec3(mx),amt);gl_FragColor=color;}"), p.call(this, g.vibrance, { amount: u(-1, _, 1) }), this;
    }
    function z(_, M) {
      return g.vignette = g.vignette || new _t(null, "uniform sampler2D texture;uniform float size;uniform float amount;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);float dist=distance(texCoord,vec2(0.5,0.5));color.rgb*=smoothstep(0.8,size*0.799,dist*(amount+size));gl_FragColor=color;}"), p.call(this, g.vignette, { size: u(0, _, 1), amount: u(0, M, 1) }), this;
    }
    function V(_) {
      g.denoise = g.denoise || new _t(null, "uniform sampler2D texture;uniform float exponent;uniform float strength;uniform vec2 texSize;varying vec2 texCoord;void main(){vec4 center=texture2D(texture,texCoord);vec4 color=vec4(0.0);float total=0.0;for(float x=-4.0;x<=4.0;x+=1.0){for(float y=-4.0;y<=4.0;y+=1.0){vec4 sample=texture2D(texture,texCoord+vec2(x,y)/texSize);float weight=1.0-abs(dot(sample.rgb-center.rgb,vec3(0.25)));weight=pow(weight,exponent);color+=sample*weight;total+=weight;}}gl_FragColor=color/total;}");
      for (var M = 0; M < 2; M++)
        p.call(this, g.denoise, { exponent: Math.max(0, _), texSize: [this.width, this.height] });
      return this;
    }
    function K(_, M) {
      return g.brightnessContrast = g.brightnessContrast || new _t(null, "uniform sampler2D texture;uniform float brightness;uniform float contrast;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);color.rgb+=brightness;if(contrast>0.0){color.rgb=(color.rgb-0.5)/(1.0-contrast)+0.5;}else{color.rgb=(color.rgb-0.5)*(1.0+contrast)+0.5;}gl_FragColor=color;}"), p.call(this, g.brightnessContrast, { brightness: u(-1, _, 1), contrast: u(-1, M, 1) }), this;
    }
    function G(_) {
      _ = new ot(_);
      for (var M = [], S = 0; S < 256; S++)
        M.push(u(0, Math.floor(256 * _.interpolate(S / 255)), 255));
      return M;
    }
    function X(_, M, S) {
      _ = G(_), arguments.length == 1 ? M = S = _ : (M = G(M), S = G(S));
      for (var N = [], it = 0; it < 256; it++)
        N.splice(N.length, 0, _[it], M[it], S[it], 255);
      return this._.extraTexture.initFromBytes(256, 1, N), this._.extraTexture.use(1), g.curves = g.curves || new _t(null, "uniform sampler2D texture;uniform sampler2D map;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);color.r=texture2D(map,vec2(color.r)).r;color.g=texture2D(map,vec2(color.g)).g;color.b=texture2D(map,vec2(color.b)).b;gl_FragColor=color;}"), g.curves.textures({ map: 1 }), p.call(this, g.curves, {}), this;
    }
    function dt(_, M) {
      return g.unsharpMask = g.unsharpMask || new _t(null, "uniform sampler2D blurredTexture;uniform sampler2D originalTexture;uniform float strength;uniform float threshold;varying vec2 texCoord;void main(){vec4 blurred=texture2D(blurredTexture,texCoord);vec4 original=texture2D(originalTexture,texCoord);gl_FragColor=mix(blurred,original,1.0+strength);}"), this._.extraTexture.ensureFormat(this._.texture), this._.texture.use(), this._.extraTexture.drawTo(function() {
        _t.getDefaultShader().drawRect();
      }), this._.extraTexture.use(1), this.triangleBlur(_), g.unsharpMask.textures({ originalTexture: 1 }), p.call(this, g.unsharpMask, { strength: M }), this._.extraTexture.unuse(1), this;
    }
    function w(_) {
      return g.sepia = g.sepia || new _t(null, "uniform sampler2D texture;uniform float amount;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);float r=color.r;float g=color.g;float b=color.b;color.r=min(1.0,(r*(1.0-(0.607*amount)))+(g*(0.769*amount))+(b*(0.189*amount)));color.g=min(1.0,(r*0.349*amount)+(g*(1.0-(0.314*amount)))+(b*0.168*amount));color.b=min(1.0,(r*0.272*amount)+(g*0.534*amount)+(b*(1.0-(0.869*amount))));gl_FragColor=color;}"), p.call(this, g.sepia, { amount: u(0, _, 1) }), this;
    }
    function B(_, M) {
      return g.hueSaturation = g.hueSaturation || new _t(null, "uniform sampler2D texture;uniform float hue;uniform float saturation;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);float angle=hue*3.14159265;float s=sin(angle),c=cos(angle);vec3 weights=(vec3(2.0*c,-sqrt(3.0)*s-c,sqrt(3.0)*s-c)+1.0)/3.0;float len=length(color.rgb);color.rgb=vec3(dot(color.rgb,weights.xyz),dot(color.rgb,weights.zxy),dot(color.rgb,weights.yzx));float average=(color.r+color.g+color.b)/3.0;if(saturation>0.0){color.rgb+=(average-color.rgb)*(1.0-1.0/(1.001-saturation));}else{color.rgb+=(average-color.rgb)*(-saturation);}gl_FragColor=color;}"), p.call(this, g.hueSaturation, { hue: u(-1, _, 1), saturation: u(-1, M, 1) }), this;
    }
    function tt(_, M, S) {
      return g.zoomBlur = g.zoomBlur || new _t(null, "uniform sampler2D texture;uniform vec2 center;uniform float strength;uniform vec2 texSize;varying vec2 texCoord;" + $t + "void main(){vec4 color=vec4(0.0);float total=0.0;vec2 toCenter=center-texCoord*texSize;float offset=random(vec3(12.9898,78.233,151.7182),0.0);for(float t=0.0;t<=40.0;t++){float percent=(t+offset)/40.0;float weight=4.0*(percent-percent*percent);vec4 sample=texture2D(texture,texCoord+toCenter*percent*strength/texSize);sample.rgb*=sample.a;color+=sample*weight;total+=weight;}gl_FragColor=color/total;gl_FragColor.rgb/=gl_FragColor.a+0.00001;}"), p.call(this, g.zoomBlur, { center: [_, M], strength: S, texSize: [this.width, this.height] }), this;
    }
    function R(_, M, S, N, it, ft) {
      g.tiltShift = g.tiltShift || new _t(null, "uniform sampler2D texture;uniform float blurRadius;uniform float gradientRadius;uniform vec2 start;uniform vec2 end;uniform vec2 delta;uniform vec2 texSize;varying vec2 texCoord;" + $t + "void main(){vec4 color=vec4(0.0);float total=0.0;float offset=random(vec3(12.9898,78.233,151.7182),0.0);vec2 normal=normalize(vec2(start.y-end.y,end.x-start.x));float radius=smoothstep(0.0,1.0,abs(dot(texCoord*texSize-start,normal))/gradientRadius)*blurRadius;for(float t=-30.0;t<=30.0;t++){float percent=(t+offset-0.5)/30.0;float weight=1.0-abs(percent);vec4 sample=texture2D(texture,texCoord+delta/texSize*percent*radius);sample.rgb*=sample.a;color+=sample*weight;total+=weight;}gl_FragColor=color/total;gl_FragColor.rgb/=gl_FragColor.a+0.00001;}");
      var wt = S - _, Ct = N - M, Et = Math.sqrt(wt * wt + Ct * Ct);
      return p.call(this, g.tiltShift, { blurRadius: it, gradientRadius: ft, start: [_, M], end: [S, N], delta: [wt / Et, Ct / Et], texSize: [this.width, this.height] }), p.call(this, g.tiltShift, { blurRadius: it, gradientRadius: ft, start: [_, M], end: [S, N], delta: [-Ct / Et, wt / Et], texSize: [this.width, this.height] }), this;
    }
    function j(_, M, S) {
      g.lensBlurPrePass = g.lensBlurPrePass || new _t(null, "uniform sampler2D texture;uniform float power;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);color=pow(color,vec4(power));gl_FragColor=vec4(color);}");
      var N = "uniform sampler2D texture0;uniform sampler2D texture1;uniform vec2 delta0;uniform vec2 delta1;uniform float power;varying vec2 texCoord;" + $t + "vec4 sample(vec2 delta){float offset=random(vec3(delta,151.7182),0.0);vec4 color=vec4(0.0);float total=0.0;for(float t=0.0;t<=30.0;t++){float percent=(t+offset)/30.0;color+=texture2D(texture0,texCoord+delta*percent);total+=1.0;}return color/total;}";
      g.lensBlur0 = g.lensBlur0 || new _t(null, N + "void main(){gl_FragColor=sample(delta0);}"), g.lensBlur1 = g.lensBlur1 || new _t(null, N + "void main(){gl_FragColor=(sample(delta0)+sample(delta1))*0.5;}"), g.lensBlur2 = g.lensBlur2 || new _t(null, N + "void main(){vec4 color=(sample(delta0)+2.0*texture2D(texture1,texCoord))/3.0;gl_FragColor=pow(color,vec4(power));}").textures({ texture1: 1 }), N = [];
      for (var it = 0; it < 3; it++) {
        var ft = S + 2 * it * Math.PI / 3;
        N.push([_ * Math.sin(ft) / this.width, _ * Math.cos(ft) / this.height]);
      }
      return _ = Math.pow(10, u(-1, M, 1)), p.call(this, g.lensBlurPrePass, { power: _ }), this._.extraTexture.ensureFormat(this._.texture), p.call(this, g.lensBlur0, { delta0: N[0] }, this._.texture, this._.extraTexture), p.call(this, g.lensBlur1, { delta0: N[1], delta1: N[2] }, this._.extraTexture, this._.extraTexture), p.call(this, g.lensBlur0, { delta0: N[1] }), this._.extraTexture.use(1), p.call(this, g.lensBlur2, { power: 1 / _, delta0: N[2] }), this;
    }
    function F(_) {
      return g.triangleBlur = g.triangleBlur || new _t(null, "uniform sampler2D texture;uniform vec2 delta;varying vec2 texCoord;" + $t + "void main(){vec4 color=vec4(0.0);float total=0.0;float offset=random(vec3(12.9898,78.233,151.7182),0.0);for(float t=-30.0;t<=30.0;t++){float percent=(t+offset-0.5)/30.0;float weight=1.0-abs(percent);vec4 sample=texture2D(texture,texCoord+delta*percent);sample.rgb*=sample.a;color+=sample*weight;total+=weight;}gl_FragColor=color/total;gl_FragColor.rgb/=gl_FragColor.a+0.00001;}"), p.call(this, g.triangleBlur, { delta: [_ / this.width, 0] }), p.call(this, g.triangleBlur, { delta: [0, _ / this.height] }), this;
    }
    function Y(_) {
      return g.edgeWork1 = g.edgeWork1 || new _t(null, "uniform sampler2D texture;uniform vec2 delta;varying vec2 texCoord;" + $t + "void main(){vec2 color=vec2(0.0);vec2 total=vec2(0.0);float offset=random(vec3(12.9898,78.233,151.7182),0.0);for(float t=-30.0;t<=30.0;t++){float percent=(t+offset-0.5)/30.0;float weight=1.0-abs(percent);vec3 sample=texture2D(texture,texCoord+delta*percent).rgb;float average=(sample.r+sample.g+sample.b)/3.0;color.x+=average*weight;total.x+=weight;if(abs(t)<15.0){weight=weight*2.0-1.0;color.y+=average*weight;total.y+=weight;}}gl_FragColor=vec4(color/total,0.0,1.0);}"), g.edgeWork2 = g.edgeWork2 || new _t(null, "uniform sampler2D texture;uniform vec2 delta;varying vec2 texCoord;" + $t + "void main(){vec2 color=vec2(0.0);vec2 total=vec2(0.0);float offset=random(vec3(12.9898,78.233,151.7182),0.0);for(float t=-30.0;t<=30.0;t++){float percent=(t+offset-0.5)/30.0;float weight=1.0-abs(percent);vec2 sample=texture2D(texture,texCoord+delta*percent).xy;color.x+=sample.x*weight;total.x+=weight;if(abs(t)<15.0){weight=weight*2.0-1.0;color.y+=sample.y*weight;total.y+=weight;}}float c=clamp(10000.0*(color.y/total.y-color.x/total.x)+0.5,0.0,1.0);gl_FragColor=vec4(c,c,c,1.0);}"), p.call(this, g.edgeWork1, { delta: [_ / this.width, 0] }), p.call(this, g.edgeWork2, { delta: [0, _ / this.height] }), this;
    }
    function J(_, M, S) {
      return g.hexagonalPixelate = g.hexagonalPixelate || new _t(null, "uniform sampler2D texture;uniform vec2 center;uniform float scale;uniform vec2 texSize;varying vec2 texCoord;void main(){vec2 tex=(texCoord*texSize-center)/scale;tex.y/=0.866025404;tex.x-=tex.y*0.5;vec2 a;if(tex.x+tex.y-floor(tex.x)-floor(tex.y)<1.0)a=vec2(floor(tex.x),floor(tex.y));else a=vec2(ceil(tex.x),ceil(tex.y));vec2 b=vec2(ceil(tex.x),floor(tex.y));vec2 c=vec2(floor(tex.x),ceil(tex.y));vec3 TEX=vec3(tex.x,tex.y,1.0-tex.x-tex.y);vec3 A=vec3(a.x,a.y,1.0-a.x-a.y);vec3 B=vec3(b.x,b.y,1.0-b.x-b.y);vec3 C=vec3(c.x,c.y,1.0-c.x-c.y);float alen=length(TEX-A);float blen=length(TEX-B);float clen=length(TEX-C);vec2 choice;if(alen<blen){if(alen<clen)choice=a;else choice=c;}else{if(blen<clen)choice=b;else choice=c;}choice.x+=choice.y*0.5;choice.y*=0.866025404;choice*=scale/texSize;gl_FragColor=texture2D(texture,choice+center/texSize);}"), p.call(this, g.hexagonalPixelate, { center: [_, M], scale: S, texSize: [this.width, this.height] }), this;
    }
    function $(_, M, S, N) {
      return g.colorHalftone = g.colorHalftone || new _t(null, "uniform sampler2D texture;uniform vec2 center;uniform float angle;uniform float scale;uniform vec2 texSize;varying vec2 texCoord;float pattern(float angle){float s=sin(angle),c=cos(angle);vec2 tex=texCoord*texSize-center;vec2 point=vec2(c*tex.x-s*tex.y,s*tex.x+c*tex.y)*scale;return(sin(point.x)*sin(point.y))*4.0;}void main(){vec4 color=texture2D(texture,texCoord);vec3 cmy=1.0-color.rgb;float k=min(cmy.x,min(cmy.y,cmy.z));cmy=(cmy-k)/(1.0-k);cmy=clamp(cmy*10.0-3.0+vec3(pattern(angle+0.26179),pattern(angle+1.30899),pattern(angle)),0.0,1.0);k=clamp(k*10.0-5.0+pattern(angle+0.78539),0.0,1.0);gl_FragColor=vec4(1.0-cmy-k,color.a);}"), p.call(this, g.colorHalftone, { center: [_, M], angle: S, scale: Math.PI / N, texSize: [this.width, this.height] }), this;
    }
    function E(_) {
      return g.ink = g.ink || new _t(null, "uniform sampler2D texture;uniform float strength;uniform vec2 texSize;varying vec2 texCoord;void main(){vec2 dx=vec2(1.0/texSize.x,0.0);vec2 dy=vec2(0.0,1.0/texSize.y);vec4 color=texture2D(texture,texCoord);float bigTotal=0.0;float smallTotal=0.0;vec3 bigAverage=vec3(0.0);vec3 smallAverage=vec3(0.0);for(float x=-2.0;x<=2.0;x+=1.0){for(float y=-2.0;y<=2.0;y+=1.0){vec3 sample=texture2D(texture,texCoord+dx*x+dy*y).rgb;bigAverage+=sample;bigTotal+=1.0;if(abs(x)+abs(y)<2.0){smallAverage+=sample;smallTotal+=1.0;}}}vec3 edge=max(vec3(0.0),bigAverage/bigTotal-smallAverage/smallTotal);gl_FragColor=vec4(color.rgb-dot(edge,edge)*strength*100000.0,color.a);}"), p.call(this, g.ink, { strength: _ * _ * _ * _ * _, texSize: [this.width, this.height] }), this;
    }
    function I(_, M, S, N) {
      return g.dotScreen = g.dotScreen || new _t(null, "uniform sampler2D texture;uniform vec2 center;uniform float angle;uniform float scale;uniform vec2 texSize;varying vec2 texCoord;float pattern(){float s=sin(angle),c=cos(angle);vec2 tex=texCoord*texSize-center;vec2 point=vec2(c*tex.x-s*tex.y,s*tex.x+c*tex.y)*scale;return(sin(point.x)*sin(point.y))*4.0;}void main(){vec4 color=texture2D(texture,texCoord);float average=(color.r+color.g+color.b)/3.0;gl_FragColor=vec4(vec3(average*10.0-5.0+pattern()),color.a);}"), p.call(this, g.dotScreen, { center: [_, M], angle: S, scale: Math.PI / N, texSize: [this.width, this.height] }), this;
    }
    function k(_, M, S) {
      if (g.matrixWarp = g.matrixWarp || Z("uniform mat3 matrix;uniform bool useTextureSpace;", "if(useTextureSpace)coord=coord/texSize*2.0-1.0;vec3 warp=matrix*vec3(coord,1.0);coord=warp.xy/warp.z;if(useTextureSpace)coord=(coord*0.5+0.5)*texSize;"), (_ = Array.prototype.concat.apply([], _)).length == 4)
        _ = [_[0], _[1], 0, _[2], _[3], 0, 0, 0, 1];
      else if (_.length != 9)
        throw "can only warp with 2x2 or 3x3 matrix";
      return p.call(this, g.matrixWarp, { matrix: M ? nt(_) : _, texSize: [this.width, this.height], useTextureSpace: 0 | S }), this;
    }
    function O(_, M, S, N) {
      return g.swirl = g.swirl || Z("uniform float radius;uniform float angle;uniform vec2 center;", "coord-=center;float distance=length(coord);if(distance<radius){float percent=(radius-distance)/radius;float theta=percent*percent*angle;float s=sin(theta);float c=cos(theta);coord=vec2(coord.x*c-coord.y*s,coord.x*s+coord.y*c);}coord+=center;"), p.call(this, g.swirl, { radius: S, center: [_, M], angle: N, texSize: [this.width, this.height] }), this;
    }
    function A(_, M, S, N) {
      return g.bulgePinch = g.bulgePinch || Z("uniform float radius;uniform float strength;uniform vec2 center;", "coord-=center;float distance=length(coord);if(distance<radius){float percent=distance/radius;if(strength>0.0){coord*=mix(1.0,smoothstep(0.0,radius/distance,percent),strength*0.75);}else{coord*=mix(1.0,pow(percent,1.0+strength*0.75)*radius/distance,1.0-percent);}}coord+=center;"), p.call(this, g.bulgePinch, { radius: S, strength: u(-1, N, 1), center: [_, M], texSize: [this.width, this.height] }), this;
    }
    function Q(_, M) {
      return M = W.apply(null, M), _ = W.apply(null, _), M = nt(M), this.matrixWarp([M[0] * _[0] + M[1] * _[3] + M[2] * _[6], M[0] * _[1] + M[1] * _[4] + M[2] * _[7], M[0] * _[2] + M[1] * _[5] + M[2] * _[8], M[3] * _[0] + M[4] * _[3] + M[5] * _[6], M[3] * _[1] + M[4] * _[4] + M[5] * _[7], M[3] * _[2] + M[4] * _[5] + M[5] * _[8], M[6] * _[0] + M[7] * _[3] + M[8] * _[6], M[6] * _[1] + M[7] * _[4] + M[8] * _[7], M[6] * _[2] + M[7] * _[5] + M[8] * _[8]]);
    }
    var et, st, g, yt = {};
    function Lt() {
    }
    try {
      var mt = document.createElement("canvas").getContext("experimental-webgl");
    } catch {
    }
    mt && mt.getSupportedExtensions().indexOf("OES_texture_float_linear") === -1 && function(_) {
      var M, S, N, it;
      if (_.getExtension("OES_texture_float"))
        return M = _.createFramebuffer(), S = _.createTexture(), _.bindTexture(_.TEXTURE_2D, S), _.texParameteri(_.TEXTURE_2D, _.TEXTURE_MAG_FILTER, _.NEAREST), _.texParameteri(_.TEXTURE_2D, _.TEXTURE_MIN_FILTER, _.NEAREST), _.texParameteri(_.TEXTURE_2D, _.TEXTURE_WRAP_S, _.CLAMP_TO_EDGE), _.texParameteri(_.TEXTURE_2D, _.TEXTURE_WRAP_T, _.CLAMP_TO_EDGE), _.texImage2D(_.TEXTURE_2D, 0, _.RGBA, 1, 1, 0, _.RGBA, _.UNSIGNED_BYTE, null), _.bindFramebuffer(_.FRAMEBUFFER, M), _.framebufferTexture2D(_.FRAMEBUFFER, _.COLOR_ATTACHMENT0, _.TEXTURE_2D, S, 0), M = _.createTexture(), _.bindTexture(_.TEXTURE_2D, M), _.texParameteri(_.TEXTURE_2D, _.TEXTURE_MAG_FILTER, _.LINEAR), _.texParameteri(_.TEXTURE_2D, _.TEXTURE_MIN_FILTER, _.LINEAR), _.texParameteri(_.TEXTURE_2D, _.TEXTURE_WRAP_S, _.CLAMP_TO_EDGE), _.texParameteri(_.TEXTURE_2D, _.TEXTURE_WRAP_T, _.CLAMP_TO_EDGE), _.texImage2D(_.TEXTURE_2D, 0, _.RGBA, 2, 2, 0, _.RGBA, _.FLOAT, new Float32Array([2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), S = _.createProgram(), N = _.createShader(_.VERTEX_SHADER), it = _.createShader(_.FRAGMENT_SHADER), _.shaderSource(N, "attribute vec2 vertex;void main(){gl_Position=vec4(vertex,0.0,1.0);}"), _.shaderSource(it, "uniform sampler2D texture;void main(){gl_FragColor=texture2D(texture,vec2(0.5));}"), _.compileShader(N), _.compileShader(it), _.attachShader(S, N), _.attachShader(S, it), _.linkProgram(S), N = _.createBuffer(), _.bindBuffer(_.ARRAY_BUFFER, N), _.bufferData(_.ARRAY_BUFFER, new Float32Array([0, 0]), _.STREAM_DRAW), _.enableVertexAttribArray(0), _.vertexAttribPointer(0, 2, _.FLOAT, !1, 0, 0), N = new Uint8Array(4), _.useProgram(S), _.viewport(0, 0, 1, 1), _.bindTexture(_.TEXTURE_2D, M), _.drawArrays(_.POINTS, 0, 1), _.readPixels(0, 0, 1, 1, _.RGBA, _.UNSIGNED_BYTE, N), N[0] === 127 || N[0] === 128;
    }(mt) && (et = WebGLRenderingContext.prototype.getExtension, st = WebGLRenderingContext.prototype.getSupportedExtensions, WebGLRenderingContext.prototype.getExtension = function(_) {
      return _ === "OES_texture_float_linear" ? (this.$OES_texture_float_linear$ === void 0 && Object.defineProperty(this, "$OES_texture_float_linear$", { enumerable: !1, configurable: !1, writable: !1, value: new Lt() }), this.$OES_texture_float_linear$) : et.call(this, _);
    }, WebGLRenderingContext.prototype.getSupportedExtensions = function() {
      var _ = st.call(this);
      return _.indexOf("OES_texture_float_linear") === -1 && _.push("OES_texture_float_linear"), _;
    }), yt.canvas = function() {
      var _ = document.createElement("canvas");
      try {
        g = _.getContext("experimental-webgl", { premultipliedAlpha: !1 });
      } catch {
        g = null;
      }
      if (g)
        return _._ = { gl: g, isInitialized: !1, texture: null, spareTexture: null, flippedShader: null }, _.texture = T(a), _.draw = T(c), _.update = T(f), _.replace = T(v), _.contents = T(y), _.getPixelArray = T(x), _.brightnessContrast = T(K), _.hexagonalPixelate = T(J), _.hueSaturation = T(B), _.colorHalftone = T($), _.triangleBlur = T(F), _.unsharpMask = T(dt), _.perspective = T(Q), _.matrixWarp = T(k), _.bulgePinch = T(A), _.tiltShift = T(R), _.dotScreen = T(I), _.edgeWork = T(Y), _.lensBlur = T(j), _.zoomBlur = T(tt), _.noise = T(H), _.denoise = T(V), _.curves = T(X), _.swirl = T(O), _.ink = T(E), _.vignette = T(z), _.vibrance = T(C), _.sepia = T(w), _;
      throw "This browser does not support WebGL";
    }, yt.splineInterpolate = G, Dt.fromElement = function(_) {
      var M = new Dt(0, 0, g.RGBA, g.UNSIGNED_BYTE);
      return M.loadContentsOf(_), M;
    }, Dt.prototype.loadContentsOf = function(_) {
      this.width = _.width || _.videoWidth, this.height = _.height || _.videoHeight, g.bindTexture(g.TEXTURE_2D, this.id), g.texImage2D(g.TEXTURE_2D, 0, this.format, this.format, this.type, _);
    }, Dt.prototype.initFromBytes = function(_, M, S) {
      this.width = _, this.height = M, this.format = g.RGBA, this.type = g.UNSIGNED_BYTE, g.bindTexture(g.TEXTURE_2D, this.id), g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, _, M, 0, g.RGBA, this.type, new Uint8Array(S));
    }, Dt.prototype.destroy = function() {
      g.deleteTexture(this.id), this.id = null;
    }, Dt.prototype.use = function(_) {
      g.activeTexture(g.TEXTURE0 + (_ || 0)), g.bindTexture(g.TEXTURE_2D, this.id);
    }, Dt.prototype.unuse = function(_) {
      g.activeTexture(g.TEXTURE0 + (_ || 0)), g.bindTexture(g.TEXTURE_2D, null);
    }, Dt.prototype.ensureFormat = function(_, M, S, N) {
      var it;
      arguments.length == 1 && (_ = (it = arguments[0]).width, M = it.height, S = it.format, N = it.type), _ == this.width && M == this.height && S == this.format && N == this.type || (this.width = _, this.height = M, this.format = S, this.type = N, g.bindTexture(g.TEXTURE_2D, this.id), g.texImage2D(g.TEXTURE_2D, 0, this.format, _, M, 0, this.format, this.type, null));
    }, Dt.prototype.drawTo = function(_) {
      if (g.framebuffer = g.framebuffer || g.createFramebuffer(), g.bindFramebuffer(g.FRAMEBUFFER, g.framebuffer), g.framebufferTexture2D(g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, this.id, 0), g.checkFramebufferStatus(g.FRAMEBUFFER) !== g.FRAMEBUFFER_COMPLETE)
        throw Error("incomplete framebuffer");
      g.viewport(0, 0, this.width, this.height), _(), g.bindFramebuffer(g.FRAMEBUFFER, null);
    }, xt = null, Dt.prototype.fillUsingCanvas = function(_) {
      return _(ve(this)), this.format = g.RGBA, this.type = g.UNSIGNED_BYTE, g.bindTexture(g.TEXTURE_2D, this.id), g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, g.RGBA, g.UNSIGNED_BYTE, xt), this;
    }, Dt.prototype.toImage = function(_) {
      this.use(), _t.getDefaultShader().drawRect();
      var M = 4 * this.width * this.height, S = new Uint8Array(M), N = ve(this), it = N.createImageData(this.width, this.height);
      g.readPixels(0, 0, this.width, this.height, g.RGBA, g.UNSIGNED_BYTE, S);
      for (var ft = 0; ft < M; ft++)
        it.data[ft] = S[ft];
      N.putImageData(it, 0, 0), _.src = xt.toDataURL();
    }, Dt.prototype.swapWith = function(_) {
      var M = _.id;
      _.id = this.id, this.id = M, M = _.width, _.width = this.width, this.width = M, M = _.height, _.height = this.height, this.height = M, M = _.format, _.format = this.format, this.format = M;
    };
    var xt, jt = Dt;
    function Dt(_, M, S, N) {
      this.gl = g, this.id = g.createTexture(), this.width = _, this.height = M, this.format = S, this.type = N, g.bindTexture(g.TEXTURE_2D, this.id), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.LINEAR), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE), _ && M && g.texImage2D(g.TEXTURE_2D, 0, this.format, _, M, 0, this.format, this.type, null);
    }
    function ve(_) {
      return (xt = xt ?? document.createElement("canvas")).width = _.width, xt.height = _.height, (_ = xt.getContext("2d")).clearRect(0, 0, xt.width, xt.height), _;
    }
    ot.prototype.interpolate = function(_) {
      for (var M = 0, S = this.ya.length - 1; 1 < S - M; ) {
        var N = S + M >> 1;
        this.xa[N] > _ ? S = N : M = N;
      }
      N = this.xa[S] - this.xa[M];
      var it = (this.xa[S] - _) / N;
      return _ = (_ - this.xa[M]) / N, it * this.ya[M] + _ * this.ya[S] + ((it * it * it - it) * this.y2[M] + (_ * _ * _ - _) * this.y2[S]) * N * N / 6;
    }, Ht.prototype.destroy = function() {
      g.deleteProgram(this.program), this.program = null;
    }, Ht.prototype.uniforms = function(_) {
      for (var M in g.useProgram(this.program), _)
        if (_.hasOwnProperty(M)) {
          var S = g.getUniformLocation(this.program, M);
          if (S !== null) {
            var N = _[M];
            if (Object.prototype.toString.call(N) == "[object Array]")
              switch (N.length) {
                case 1:
                  g.uniform1fv(S, new Float32Array(N));
                  break;
                case 2:
                  g.uniform2fv(S, new Float32Array(N));
                  break;
                case 3:
                  g.uniform3fv(S, new Float32Array(N));
                  break;
                case 4:
                  g.uniform4fv(S, new Float32Array(N));
                  break;
                case 9:
                  g.uniformMatrix3fv(S, !1, new Float32Array(N));
                  break;
                case 16:
                  g.uniformMatrix4fv(S, !1, new Float32Array(N));
                  break;
                default:
                  throw `dont't know how to load uniform "` + M + '" of length ' + N.length;
              }
            else {
              if (Object.prototype.toString.call(N) != "[object Number]")
                throw 'attempted to set uniform "' + M + '" to invalid value ' + (N || "undefined").toString();
              g.uniform1f(S, N);
            }
          }
        }
      return this;
    }, Ht.prototype.textures = function(_) {
      for (var M in g.useProgram(this.program), _)
        _.hasOwnProperty(M) && g.uniform1i(g.getUniformLocation(this.program, M), _[M]);
      return this;
    }, Ht.prototype.drawRect = function(_, M, S, N) {
      var it = g.getParameter(g.VIEWPORT);
      M = M !== void 0 ? (M - it[1]) / it[3] : 0, _ = _ !== void 0 ? (_ - it[0]) / it[2] : 0, S = S !== void 0 ? (S - it[0]) / it[2] : 1, N = N !== void 0 ? (N - it[1]) / it[3] : 1, g.vertexBuffer == null && (g.vertexBuffer = g.createBuffer()), g.bindBuffer(g.ARRAY_BUFFER, g.vertexBuffer), g.bufferData(g.ARRAY_BUFFER, new Float32Array([_, M, _, N, S, M, S, N]), g.STATIC_DRAW), g.texCoordBuffer == null && (g.texCoordBuffer = g.createBuffer(), g.bindBuffer(g.ARRAY_BUFFER, g.texCoordBuffer), g.bufferData(g.ARRAY_BUFFER, new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]), g.STATIC_DRAW)), this.vertexAttribute == null && (this.vertexAttribute = g.getAttribLocation(this.program, "vertex"), g.enableVertexAttribArray(this.vertexAttribute)), this.texCoordAttribute == null && (this.texCoordAttribute = g.getAttribLocation(this.program, "_texCoord"), g.enableVertexAttribArray(this.texCoordAttribute)), g.useProgram(this.program), g.bindBuffer(g.ARRAY_BUFFER, g.vertexBuffer), g.vertexAttribPointer(this.vertexAttribute, 2, g.FLOAT, !1, 0, 0), g.bindBuffer(g.ARRAY_BUFFER, g.texCoordBuffer), g.vertexAttribPointer(this.texCoordAttribute, 2, g.FLOAT, !1, 0, 0), g.drawArrays(g.TRIANGLE_STRIP, 0, 4);
    }, Ht.getDefaultShader = function() {
      return g.defaultShader = g.defaultShader || new Ht(), g.defaultShader;
    };
    var _t = Ht, $t = "float random(vec3 scale,float seed){return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453+seed);}";
    function Se(_, M) {
      if (_ = g.createShader(_), g.shaderSource(_, M), g.compileShader(_), g.getShaderParameter(_, g.COMPILE_STATUS))
        return _;
      throw "compile error: " + g.getShaderInfoLog(_);
    }
    function Ht(_, M) {
      if (this.texCoordAttribute = this.vertexAttribute = null, this.program = g.createProgram(), M = "precision highp float;" + (M = M || "uniform sampler2D texture;varying vec2 texCoord;void main(){gl_FragColor=texture2D(texture,texCoord);}"), g.attachShader(this.program, Se(g.VERTEX_SHADER, _ = _ || "attribute vec2 vertex;attribute vec2 _texCoord;varying vec2 texCoord;void main(){texCoord=_texCoord;gl_Position=vec4(vertex*2.0-1.0,0.0,1.0);}")), g.attachShader(this.program, Se(g.FRAGMENT_SHADER, M)), g.linkProgram(this.program), !g.getProgramParameter(this.program, g.LINK_STATUS))
        throw "link error: " + g.getProgramInfoLog(this.program);
    }
    return yt;
  }();
  l.exports = r, function() {
    function u(Z) {
      return Z instanceof u ? Z : this instanceof u ? void (this.EXIFwrapped = Z) : new u(Z);
    }
    var o = !1, a = ((i = l.exports ? l.exports = u : i).EXIF = u, u.Tags = { 36864: "ExifVersion", 40960: "FlashpixVersion", 40961: "ColorSpace", 40962: "PixelXDimension", 40963: "PixelYDimension", 37121: "ComponentsConfiguration", 37122: "CompressedBitsPerPixel", 37500: "MakerNote", 37510: "UserComment", 40964: "RelatedSoundFile", 36867: "DateTimeOriginal", 36868: "DateTimeDigitized", 37520: "SubsecTime", 37521: "SubsecTimeOriginal", 37522: "SubsecTimeDigitized", 33434: "ExposureTime", 33437: "FNumber", 34850: "ExposureProgram", 34852: "SpectralSensitivity", 34855: "ISOSpeedRatings", 34856: "OECF", 37377: "ShutterSpeedValue", 37378: "ApertureValue", 37379: "BrightnessValue", 37380: "ExposureBias", 37381: "MaxApertureValue", 37382: "SubjectDistance", 37383: "MeteringMode", 37384: "LightSource", 37385: "Flash", 37396: "SubjectArea", 37386: "FocalLength", 41483: "FlashEnergy", 41484: "SpatialFrequencyResponse", 41486: "FocalPlaneXResolution", 41487: "FocalPlaneYResolution", 41488: "FocalPlaneResolutionUnit", 41492: "SubjectLocation", 41493: "ExposureIndex", 41495: "SensingMethod", 41728: "FileSource", 41729: "SceneType", 41730: "CFAPattern", 41985: "CustomRendered", 41986: "ExposureMode", 41987: "WhiteBalance", 41988: "DigitalZoomRation", 41989: "FocalLengthIn35mmFilm", 41990: "SceneCaptureType", 41991: "GainControl", 41992: "Contrast", 41993: "Saturation", 41994: "Sharpness", 41995: "DeviceSettingDescription", 41996: "SubjectDistanceRange", 40965: "InteroperabilityIFDPointer", 42016: "ImageUniqueID" }), c = u.TiffTags = { 256: "ImageWidth", 257: "ImageHeight", 34665: "ExifIFDPointer", 34853: "GPSInfoIFDPointer", 40965: "InteroperabilityIFDPointer", 258: "BitsPerSample", 259: "Compression", 262: "PhotometricInterpretation", 274: "Orientation", 277: "SamplesPerPixel", 284: "PlanarConfiguration", 530: "YCbCrSubSampling", 531: "YCbCrPositioning", 282: "XResolution", 283: "YResolution", 296: "ResolutionUnit", 273: "StripOffsets", 278: "RowsPerStrip", 279: "StripByteCounts", 513: "JPEGInterchangeFormat", 514: "JPEGInterchangeFormatLength", 301: "TransferFunction", 318: "WhitePoint", 319: "PrimaryChromaticities", 529: "YCbCrCoefficients", 532: "ReferenceBlackWhite", 306: "DateTime", 270: "ImageDescription", 271: "Make", 272: "Model", 305: "Software", 315: "Artist", 33432: "Copyright" }, f = u.GPSTags = { 0: "GPSVersionID", 1: "GPSLatitudeRef", 2: "GPSLatitude", 3: "GPSLongitudeRef", 4: "GPSLongitude", 5: "GPSAltitudeRef", 6: "GPSAltitude", 7: "GPSTimeStamp", 8: "GPSSatellites", 9: "GPSStatus", 10: "GPSMeasureMode", 11: "GPSDOP", 12: "GPSSpeedRef", 13: "GPSSpeed", 14: "GPSTrackRef", 15: "GPSTrack", 16: "GPSImgDirectionRef", 17: "GPSImgDirection", 18: "GPSMapDatum", 19: "GPSDestLatitudeRef", 20: "GPSDestLatitude", 21: "GPSDestLongitudeRef", 22: "GPSDestLongitude", 23: "GPSDestBearingRef", 24: "GPSDestBearing", 25: "GPSDestDistanceRef", 26: "GPSDestDistance", 27: "GPSProcessingMethod", 28: "GPSAreaInformation", 29: "GPSDateStamp", 30: "GPSDifferential" }, p = u.IFD1Tags = { 256: "ImageWidth", 257: "ImageHeight", 258: "BitsPerSample", 259: "Compression", 262: "PhotometricInterpretation", 273: "StripOffsets", 274: "Orientation", 277: "SamplesPerPixel", 278: "RowsPerStrip", 279: "StripByteCounts", 282: "XResolution", 283: "YResolution", 284: "PlanarConfiguration", 296: "ResolutionUnit", 513: "JpegIFOffset", 514: "JpegIFByteCount", 529: "YCbCrCoefficients", 530: "YCbCrSubSampling", 531: "YCbCrPositioning", 532: "ReferenceBlackWhite" }, v = u.StringValues = { ExposureProgram: { 0: "Not defined", 1: "Manual", 2: "Normal program", 3: "Aperture priority", 4: "Shutter priority", 5: "Creative program", 6: "Action program", 7: "Portrait mode", 8: "Landscape mode" }, MeteringMode: { 0: "Unknown", 1: "Average", 2: "CenterWeightedAverage", 3: "Spot", 4: "MultiSpot", 5: "Pattern", 6: "Partial", 255: "Other" }, LightSource: { 0: "Unknown", 1: "Daylight", 2: "Fluorescent", 3: "Tungsten (incandescent light)", 4: "Flash", 9: "Fine weather", 10: "Cloudy weather", 11: "Shade", 12: "Daylight fluorescent (D 5700 - 7100K)", 13: "Day white fluorescent (N 4600 - 5400K)", 14: "Cool white fluorescent (W 3900 - 4500K)", 15: "White fluorescent (WW 3200 - 3700K)", 17: "Standard light A", 18: "Standard light B", 19: "Standard light C", 20: "D55", 21: "D65", 22: "D75", 23: "D50", 24: "ISO studio tungsten", 255: "Other" }, Flash: { 0: "Flash did not fire", 1: "Flash fired", 5: "Strobe return light not detected", 7: "Strobe return light detected", 9: "Flash fired, compulsory flash mode", 13: "Flash fired, compulsory flash mode, return light not detected", 15: "Flash fired, compulsory flash mode, return light detected", 16: "Flash did not fire, compulsory flash mode", 24: "Flash did not fire, auto mode", 25: "Flash fired, auto mode", 29: "Flash fired, auto mode, return light not detected", 31: "Flash fired, auto mode, return light detected", 32: "No flash function", 65: "Flash fired, red-eye reduction mode", 69: "Flash fired, red-eye reduction mode, return light not detected", 71: "Flash fired, red-eye reduction mode, return light detected", 73: "Flash fired, compulsory flash mode, red-eye reduction mode", 77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected", 79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected", 89: "Flash fired, auto mode, red-eye reduction mode", 93: "Flash fired, auto mode, return light not detected, red-eye reduction mode", 95: "Flash fired, auto mode, return light detected, red-eye reduction mode" }, SensingMethod: { 1: "Not defined", 2: "One-chip color area sensor", 3: "Two-chip color area sensor", 4: "Three-chip color area sensor", 5: "Color sequential area sensor", 7: "Trilinear sensor", 8: "Color sequential linear sensor" }, SceneCaptureType: { 0: "Standard", 1: "Landscape", 2: "Portrait", 3: "Night scene" }, SceneType: { 1: "Directly photographed" }, CustomRendered: { 0: "Normal process", 1: "Custom process" }, WhiteBalance: { 0: "Auto white balance", 1: "Manual white balance" }, GainControl: { 0: "None", 1: "Low gain up", 2: "High gain up", 3: "Low gain down", 4: "High gain down" }, Contrast: { 0: "Normal", 1: "Soft", 2: "Hard" }, Saturation: { 0: "Normal", 1: "Low saturation", 2: "High saturation" }, Sharpness: { 0: "Normal", 1: "Soft", 2: "Hard" }, SubjectDistanceRange: { 0: "Unknown", 1: "Macro", 2: "Close view", 3: "Distant view" }, FileSource: { 3: "DSC" }, Components: { 0: "", 1: "Y", 2: "Cb", 3: "Cr", 4: "R", 5: "G", 6: "B" } };
    function y(Z) {
      return Z.exifdata;
    }
    function x(Z) {
      var H = new DataView(Z);
      if (H.getUint8(0) != 255 || H.getUint8(1) != 216)
        return !1;
      for (var C = 2, z = Z.byteLength; C < z; ) {
        if (H.getUint8(C) != 255)
          return !1;
        if (w = H.getUint8(C + 1), w == 225) {
          var V, K, G, X, dt, w = H, B = C + 4;
          if (H.getUint16(C + 2), nt(w, B, 4) != "Exif")
            return !1;
          if (B += 6, w.getUint16(B) == 18761)
            V = !1;
          else {
            if (w.getUint16(B) != 19789)
              return !1;
            V = !0;
          }
          if (w.getUint16(B + 2, !V) != 42)
            return !1;
          var tt = w.getUint32(B + 4, !V);
          if (tt < 8)
            return !1;
          if ((K = W(w, B, B + tt, c, V)).ExifIFDPointer)
            for (G in X = W(w, B, B + K.ExifIFDPointer, a, V)) {
              switch (G) {
                case "LightSource":
                case "Flash":
                case "MeteringMode":
                case "ExposureProgram":
                case "SensingMethod":
                case "SceneCaptureType":
                case "SceneType":
                case "CustomRendered":
                case "WhiteBalance":
                case "GainControl":
                case "Contrast":
                case "Saturation":
                case "Sharpness":
                case "SubjectDistanceRange":
                case "FileSource":
                  X[G] = v[G][X[G]];
                  break;
                case "ExifVersion":
                case "FlashpixVersion":
                  X[G] = String.fromCharCode(X[G][0], X[G][1], X[G][2], X[G][3]);
                  break;
                case "ComponentsConfiguration":
                  X[G] = v.Components[X[G][0]] + v.Components[X[G][1]] + v.Components[X[G][2]] + v.Components[X[G][3]];
              }
              K[G] = X[G];
            }
          if (K.GPSInfoIFDPointer)
            for (G in dt = W(w, B, B + K.GPSInfoIFDPointer, f, V))
              G === "GPSVersionID" && (dt[G] = dt[G][0] + "." + dt[G][1] + "." + dt[G][2] + "." + dt[G][3]), K[G] = dt[G];
          return K.thumbnail = function(R, j, F, Y) {
            if (F = function(I, k, O) {
              var A = I.getUint16(k, !O);
              return I.getUint32(k + 2 + 12 * A, !O);
            }(R, j + F, Y), !F)
              return {};
            if (F > R.byteLength)
              return {};
            var J = W(R, j, j + F, p, Y);
            if (J.Compression)
              switch (J.Compression) {
                case 6:
                  var $, E;
                  J.JpegIFOffset && J.JpegIFByteCount && ($ = j + J.JpegIFOffset, E = J.JpegIFByteCount, J.blob = new Blob([new Uint8Array(R.buffer, $, E)], { type: "image/jpeg" }));
                  break;
                case 1:
                  console.log("Thumbnail image format is TIFF, which is not implemented.");
                  break;
                default:
                  console.log("Unknown thumbnail image format '%s'", J.Compression);
              }
            else
              J.PhotometricInterpretation == 2 && console.log("Thumbnail image format is RGB, which is not implemented.");
            return J;
          }(w, B, tt, V), K;
        }
        C += 2 + H.getUint16(C + 2);
      }
    }
    var T = { 120: "caption", 110: "credit", 25: "keywords", 55: "dateCreated", 80: "byline", 85: "bylineTitle", 122: "captionWriter", 105: "headline", 116: "copyright", 15: "category" };
    function W(Z, H, C, z, V) {
      for (var K, G, X = Z.getUint16(C, !V), dt = {}, w = 0; w < X; w++)
        !(G = z[Z.getUint16(K = C + 12 * w + 2, !V)]) && o && console.log("Unknown tag: " + Z.getUint16(K, !V)), dt[G] = function(B, tt, R, j) {
          var F, Y, J, $, E, I, k = B.getUint16(tt + 2, !j), O = B.getUint32(tt + 4, !j), A = B.getUint32(tt + 8, !j) + R;
          switch (k) {
            case 1:
            case 7:
              if (O == 1)
                return B.getUint8(tt + 8, !j);
              for (F = 4 < O ? A : tt + 8, Y = [], $ = 0; $ < O; $++)
                Y[$] = B.getUint8(F + $);
              return Y;
            case 2:
              return nt(B, F = 4 < O ? A : tt + 8, O - 1);
            case 3:
              if (O == 1)
                return B.getUint16(tt + 8, !j);
              for (F = 2 < O ? A : tt + 8, Y = [], $ = 0; $ < O; $++)
                Y[$] = B.getUint16(F + 2 * $, !j);
              return Y;
            case 4:
              if (O == 1)
                return B.getUint32(tt + 8, !j);
              for (Y = [], $ = 0; $ < O; $++)
                Y[$] = B.getUint32(A + 4 * $, !j);
              return Y;
            case 5:
              if (O == 1)
                return E = B.getUint32(A, !j), I = B.getUint32(A + 4, !j), (J = new Number(E / I)).numerator = E, J.denominator = I, J;
              for (Y = [], $ = 0; $ < O; $++)
                E = B.getUint32(A + 8 * $, !j), I = B.getUint32(A + 4 + 8 * $, !j), Y[$] = new Number(E / I), Y[$].numerator = E, Y[$].denominator = I;
              return Y;
            case 9:
              if (O == 1)
                return B.getInt32(tt + 8, !j);
              for (Y = [], $ = 0; $ < O; $++)
                Y[$] = B.getInt32(A + 4 * $, !j);
              return Y;
            case 10:
              if (O == 1)
                return B.getInt32(A, !j) / B.getInt32(A + 4, !j);
              for (Y = [], $ = 0; $ < O; $++)
                Y[$] = B.getInt32(A + 8 * $, !j) / B.getInt32(A + 4 + 8 * $, !j);
              return Y;
          }
        }(Z, K, H, V);
      return dt;
    }
    function nt(Z, H, C) {
      var z = "";
      for (n = H; n < H + C; n++)
        z += String.fromCharCode(Z.getUint8(n));
      return z;
    }
    function ot(Z) {
      var H = {};
      if (Z.nodeType == 1) {
        if (0 < Z.attributes.length) {
          H["@attributes"] = {};
          for (var C = 0; C < Z.attributes.length; C++) {
            var z = Z.attributes.item(C);
            H["@attributes"][z.nodeName] = z.nodeValue;
          }
        }
      } else if (Z.nodeType == 3)
        return Z.nodeValue;
      if (Z.hasChildNodes())
        for (var V = 0; V < Z.childNodes.length; V++) {
          var K, G = Z.childNodes.item(V), X = G.nodeName;
          H[X] == null ? H[X] = ot(G) : (H[X].push == null && (K = H[X], H[X] = [], H[X].push(K)), H[X].push(ot(G)));
        }
      return H;
    }
    u.enableXmp = function() {
      u.isXmpEnabled = !0;
    }, u.disableXmp = function() {
      u.isXmpEnabled = !1;
    }, u.getData = function(Z, H) {
      return !((self.Image && Z instanceof self.Image || self.HTMLImageElement && Z instanceof self.HTMLImageElement) && !Z.complete || (y(Z) ? H && H.call(Z) : function(C, z) {
        function V(B) {
          var tt = x(B);
          C.exifdata = tt || {}, tt = function(R) {
            var j = new DataView(R);
            if (j.getUint8(0) != 255 || j.getUint8(1) != 216)
              return !1;
            for (var F = 2, Y = R.byteLength; F < Y; ) {
              var J;
              if (function($, E) {
                return $.getUint8(E) === 56 && $.getUint8(E + 1) === 66 && $.getUint8(E + 2) === 73 && $.getUint8(E + 3) === 77 && $.getUint8(E + 4) === 4 && $.getUint8(E + 5) === 4;
              }(j, F))
                return (J = j.getUint8(F + 7)) % 2 != 0 && (J += 1), function($, E, I) {
                  for (var k, O, A = new DataView($), Q = {}, et = E; et < E + I; )
                    A.getUint8(et) === 28 && A.getUint8(et + 1) === 2 && (O = A.getUint8(et + 2)) in T && (k = A.getInt16(et + 3), O = T[O], k = nt(A, et + 5, k), Q.hasOwnProperty(O) ? Q[O] instanceof Array ? Q[O].push(k) : Q[O] = [Q[O], k] : Q[O] = k), et++;
                  return Q;
                }(R, F + 8 + (J = J === 0 ? 4 : J), J = j.getUint16(F + 6 + J));
              F++;
            }
          }(B), C.iptcdata = tt || {}, u.isXmpEnabled && (tt = function(R) {
            if ("DOMParser" in self) {
              var j = new DataView(R);
              if (j.getUint8(0) != 255 || j.getUint8(1) != 216)
                return !1;
              for (var F, Y, J = 2, $ = R.byteLength, E = new DOMParser(); J < $ - 4; ) {
                if (nt(j, J, 4) == "http")
                  return F = J - 1, Y = j.getUint16(J - 2) - 1, Y = (F = nt(j, F, Y)).indexOf("xmpmeta>") + 8, Y = (F = F.substring(F.indexOf("<x:xmpmeta"), Y)).indexOf("x:xmpmeta") + 10, F = F.slice(0, Y) + 'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" ' + F.slice(Y), function(I) {
                    try {
                      var k = {};
                      if (0 < I.children.length)
                        for (var O = 0; O < I.children.length; O++) {
                          var A, Q = I.children.item(O), et = Q.attributes;
                          for (A in et) {
                            var st = et[A], g = st.nodeName, yt = st.nodeValue;
                            g !== void 0 && (k[g] = yt);
                          }
                          var Lt, mt = Q.nodeName;
                          k[mt] === void 0 ? k[mt] = ot(Q) : (k[mt].push === void 0 && (Lt = k[mt], k[mt] = [], k[mt].push(Lt)), k[mt].push(ot(Q)));
                        }
                      else
                        k = I.textContent;
                      return k;
                    } catch (xt) {
                      console.log(xt.message);
                    }
                  }(E.parseFromString(F, "text/xml"));
                J++;
              }
            }
          }(B), C.xmpdata = tt || {}), z && z.call(C);
        }
        var K, G, X, dt, w;
        C.src ? /^data\:/i.test(C.src) ? V(function(B, tt) {
          tt = tt || B.match(/^data\:([^\;]+)\;base64,/im)[1] || "", B = B.replace(/^data\:([^\;]+)\;base64,/gim, "");
          for (var R = atob(B), j = R.length, F = (tt = new ArrayBuffer(j), new Uint8Array(tt)), Y = 0; Y < j; Y++)
            F[Y] = R.charCodeAt(Y);
          return tt;
        }(C.src)) : /^blob\:/i.test(C.src) ? ((G = new FileReader()).onload = function(B) {
          V(B.target.result);
        }, X = C.src, dt = function(B) {
          G.readAsArrayBuffer(B);
        }, (w = new XMLHttpRequest()).open("GET", X, !0), w.responseType = "blob", w.onload = function(B) {
          this.status != 200 && this.status !== 0 || dt(this.response);
        }, w.send()) : ((K = new XMLHttpRequest()).onload = function() {
          if (this.status != 200 && this.status !== 0)
            throw "Could not load image";
          V(K.response), K = null;
        }, K.open("GET", C.src, !0), K.responseType = "arraybuffer", K.send(null)) : self.FileReader && (C instanceof self.Blob || C instanceof self.File) && ((G = new FileReader()).onload = function(B) {
          V(B.target.result);
        }, G.readAsArrayBuffer(C));
      }(Z, H), 0));
    }, u.getTag = function(Z, H) {
      if (y(Z))
        return Z.exifdata[H];
    }, u.getIptcTag = function(Z, H) {
      if (y(Z))
        return Z.iptcdata[H];
    }, u.getAllTags = function(Z) {
      if (!y(Z))
        return {};
      var H, C = Z.exifdata, z = {};
      for (H in C)
        C.hasOwnProperty(H) && (z[H] = C[H]);
      return z;
    }, u.getAllIptcTags = function(Z) {
      if (!y(Z))
        return {};
      var H, C = Z.iptcdata, z = {};
      for (H in C)
        C.hasOwnProperty(H) && (z[H] = C[H]);
      return z;
    }, u.pretty = function(Z) {
      if (!y(Z))
        return "";
      var H, C = Z.exifdata, z = "";
      for (H in C)
        C.hasOwnProperty(H) && (typeof C[H] == "object" ? C[H] instanceof Number ? z += H + " : " + C[H] + " [" + C[H].numerator + "/" + C[H].denominator + `]\r
` : z += H + " : [" + C[H].length + ` values]\r
` : z += H + " : " + C[H] + `\r
`);
      return z;
    }, u.readFromBinaryFile = x;
  }.call(re);
})(pr, pr.exports);
/*! For license information please see leaflet.distortableimage.js.LICENSE.txt */
(function() {
  var l = { 636: function() {
    function i(c) {
      return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
        return typeof f;
      } : function(f) {
        return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
      }, i(c);
    }
    function r() {
      r = function() {
        return c;
      };
      var c = {}, f = Object.prototype, p = f.hasOwnProperty, v = Object.defineProperty || function(E, I, k) {
        E[I] = k.value;
      }, y = typeof Symbol == "function" ? Symbol : {}, x = y.iterator || "@@iterator", T = y.asyncIterator || "@@asyncIterator", W = y.toStringTag || "@@toStringTag";
      function nt(E, I, k) {
        return Object.defineProperty(E, I, { value: k, enumerable: !0, configurable: !0, writable: !0 }), E[I];
      }
      try {
        nt({}, "");
      } catch {
        nt = function(I, k, O) {
          return I[k] = O;
        };
      }
      function ot(E, I, k, O) {
        var A = I && I.prototype instanceof C ? I : C, Q = Object.create(A.prototype), et = new Y(O || []);
        return v(Q, "_invoke", { value: tt(E, k, et) }), Q;
      }
      function Z(E, I, k) {
        try {
          return { type: "normal", arg: E.call(I, k) };
        } catch (O) {
          return { type: "throw", arg: O };
        }
      }
      c.wrap = ot;
      var H = {};
      function C() {
      }
      function z() {
      }
      function V() {
      }
      var K = {};
      nt(K, x, function() {
        return this;
      });
      var G = Object.getPrototypeOf, X = G && G(G(J([])));
      X && X !== f && p.call(X, x) && (K = X);
      var dt = V.prototype = C.prototype = Object.create(K);
      function w(E) {
        ["next", "throw", "return"].forEach(function(I) {
          nt(E, I, function(k) {
            return this._invoke(I, k);
          });
        });
      }
      function B(E, I) {
        function k(A, Q, et, st) {
          var g = Z(E[A], E, Q);
          if (g.type !== "throw") {
            var yt = g.arg, Lt = yt.value;
            return Lt && i(Lt) == "object" && p.call(Lt, "__await") ? I.resolve(Lt.__await).then(function(mt) {
              k("next", mt, et, st);
            }, function(mt) {
              k("throw", mt, et, st);
            }) : I.resolve(Lt).then(function(mt) {
              yt.value = mt, et(yt);
            }, function(mt) {
              return k("throw", mt, et, st);
            });
          }
          st(g.arg);
        }
        var O;
        v(this, "_invoke", { value: function(A, Q) {
          function et() {
            return new I(function(st, g) {
              k(A, Q, st, g);
            });
          }
          return O = O ? O.then(et, et) : et();
        } });
      }
      function tt(E, I, k) {
        var O = "suspendedStart";
        return function(A, Q) {
          if (O === "executing")
            throw new Error("Generator is already running");
          if (O === "completed") {
            if (A === "throw")
              throw Q;
            return { value: void 0, done: !0 };
          }
          for (k.method = A, k.arg = Q; ; ) {
            var et = k.delegate;
            if (et) {
              var st = R(et, k);
              if (st) {
                if (st === H)
                  continue;
                return st;
              }
            }
            if (k.method === "next")
              k.sent = k._sent = k.arg;
            else if (k.method === "throw") {
              if (O === "suspendedStart")
                throw O = "completed", k.arg;
              k.dispatchException(k.arg);
            } else
              k.method === "return" && k.abrupt("return", k.arg);
            O = "executing";
            var g = Z(E, I, k);
            if (g.type === "normal") {
              if (O = k.done ? "completed" : "suspendedYield", g.arg === H)
                continue;
              return { value: g.arg, done: k.done };
            }
            g.type === "throw" && (O = "completed", k.method = "throw", k.arg = g.arg);
          }
        };
      }
      function R(E, I) {
        var k = I.method, O = E.iterator[k];
        if (O === void 0)
          return I.delegate = null, k === "throw" && E.iterator.return && (I.method = "return", I.arg = void 0, R(E, I), I.method === "throw") || k !== "return" && (I.method = "throw", I.arg = new TypeError("The iterator does not provide a '" + k + "' method")), H;
        var A = Z(O, E.iterator, I.arg);
        if (A.type === "throw")
          return I.method = "throw", I.arg = A.arg, I.delegate = null, H;
        var Q = A.arg;
        return Q ? Q.done ? (I[E.resultName] = Q.value, I.next = E.nextLoc, I.method !== "return" && (I.method = "next", I.arg = void 0), I.delegate = null, H) : Q : (I.method = "throw", I.arg = new TypeError("iterator result is not an object"), I.delegate = null, H);
      }
      function j(E) {
        var I = { tryLoc: E[0] };
        1 in E && (I.catchLoc = E[1]), 2 in E && (I.finallyLoc = E[2], I.afterLoc = E[3]), this.tryEntries.push(I);
      }
      function F(E) {
        var I = E.completion || {};
        I.type = "normal", delete I.arg, E.completion = I;
      }
      function Y(E) {
        this.tryEntries = [{ tryLoc: "root" }], E.forEach(j, this), this.reset(!0);
      }
      function J(E) {
        if (E) {
          var I = E[x];
          if (I)
            return I.call(E);
          if (typeof E.next == "function")
            return E;
          if (!isNaN(E.length)) {
            var k = -1, O = function A() {
              for (; ++k < E.length; )
                if (p.call(E, k))
                  return A.value = E[k], A.done = !1, A;
              return A.value = void 0, A.done = !0, A;
            };
            return O.next = O;
          }
        }
        return { next: $ };
      }
      function $() {
        return { value: void 0, done: !0 };
      }
      return z.prototype = V, v(dt, "constructor", { value: V, configurable: !0 }), v(V, "constructor", { value: z, configurable: !0 }), z.displayName = nt(V, W, "GeneratorFunction"), c.isGeneratorFunction = function(E) {
        var I = typeof E == "function" && E.constructor;
        return !!I && (I === z || (I.displayName || I.name) === "GeneratorFunction");
      }, c.mark = function(E) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(E, V) : (E.__proto__ = V, nt(E, W, "GeneratorFunction")), E.prototype = Object.create(dt), E;
      }, c.awrap = function(E) {
        return { __await: E };
      }, w(B.prototype), nt(B.prototype, T, function() {
        return this;
      }), c.AsyncIterator = B, c.async = function(E, I, k, O, A) {
        A === void 0 && (A = Promise);
        var Q = new B(ot(E, I, k, O), A);
        return c.isGeneratorFunction(I) ? Q : Q.next().then(function(et) {
          return et.done ? et.value : Q.next();
        });
      }, w(dt), nt(dt, W, "Generator"), nt(dt, x, function() {
        return this;
      }), nt(dt, "toString", function() {
        return "[object Generator]";
      }), c.keys = function(E) {
        var I = Object(E), k = [];
        for (var O in I)
          k.push(O);
        return k.reverse(), function A() {
          for (; k.length; ) {
            var Q = k.pop();
            if (Q in I)
              return A.value = Q, A.done = !1, A;
          }
          return A.done = !0, A;
        };
      }, c.values = J, Y.prototype = { constructor: Y, reset: function(E) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(F), !E)
          for (var I in this)
            I.charAt(0) === "t" && p.call(this, I) && !isNaN(+I.slice(1)) && (this[I] = void 0);
      }, stop: function() {
        this.done = !0;
        var E = this.tryEntries[0].completion;
        if (E.type === "throw")
          throw E.arg;
        return this.rval;
      }, dispatchException: function(E) {
        if (this.done)
          throw E;
        var I = this;
        function k(g, yt) {
          return Q.type = "throw", Q.arg = E, I.next = g, yt && (I.method = "next", I.arg = void 0), !!yt;
        }
        for (var O = this.tryEntries.length - 1; O >= 0; --O) {
          var A = this.tryEntries[O], Q = A.completion;
          if (A.tryLoc === "root")
            return k("end");
          if (A.tryLoc <= this.prev) {
            var et = p.call(A, "catchLoc"), st = p.call(A, "finallyLoc");
            if (et && st) {
              if (this.prev < A.catchLoc)
                return k(A.catchLoc, !0);
              if (this.prev < A.finallyLoc)
                return k(A.finallyLoc);
            } else if (et) {
              if (this.prev < A.catchLoc)
                return k(A.catchLoc, !0);
            } else {
              if (!st)
                throw new Error("try statement without catch or finally");
              if (this.prev < A.finallyLoc)
                return k(A.finallyLoc);
            }
          }
        }
      }, abrupt: function(E, I) {
        for (var k = this.tryEntries.length - 1; k >= 0; --k) {
          var O = this.tryEntries[k];
          if (O.tryLoc <= this.prev && p.call(O, "finallyLoc") && this.prev < O.finallyLoc) {
            var A = O;
            break;
          }
        }
        A && (E === "break" || E === "continue") && A.tryLoc <= I && I <= A.finallyLoc && (A = null);
        var Q = A ? A.completion : {};
        return Q.type = E, Q.arg = I, A ? (this.method = "next", this.next = A.finallyLoc, H) : this.complete(Q);
      }, complete: function(E, I) {
        if (E.type === "throw")
          throw E.arg;
        return E.type === "break" || E.type === "continue" ? this.next = E.arg : E.type === "return" ? (this.rval = this.arg = E.arg, this.method = "return", this.next = "end") : E.type === "normal" && I && (this.next = I), H;
      }, finish: function(E) {
        for (var I = this.tryEntries.length - 1; I >= 0; --I) {
          var k = this.tryEntries[I];
          if (k.finallyLoc === E)
            return this.complete(k.completion, k.afterLoc), F(k), H;
        }
      }, catch: function(E) {
        for (var I = this.tryEntries.length - 1; I >= 0; --I) {
          var k = this.tryEntries[I];
          if (k.tryLoc === E) {
            var O = k.completion;
            if (O.type === "throw") {
              var A = O.arg;
              F(k);
            }
            return A;
          }
        }
        throw new Error("illegal catch attempt");
      }, delegateYield: function(E, I, k) {
        return this.delegate = { iterator: J(E), resultName: I, nextLoc: k }, this.method === "next" && (this.arg = void 0), H;
      } }, c;
    }
    function u(c, f, p, v, y, x, T) {
      try {
        var W = c[x](T), nt = W.value;
      } catch (ot) {
        return void p(ot);
      }
      W.done ? f(nt) : Promise.resolve(nt).then(v, y);
    }
    function o(c) {
      return function() {
        var f = this, p = arguments;
        return new Promise(function(v, y) {
          var x = c.apply(f, p);
          function T(nt) {
            u(x, v, y, T, W, "next", nt);
          }
          function W(nt) {
            u(x, v, y, T, W, "throw", nt);
          }
          T(void 0);
        });
      };
    }
    var a = [];
    L.DistortableCollection = L.FeatureGroup.extend({ options: { editable: !0, exportOpts: { exportStartUrl: "//export.mapknitter.org/export", statusUrl: "//export.mapknitter.org", exportUrl: "http://export.mapknitter.org/" } }, initialize: function(c) {
      L.setOptions(this, c), L.FeatureGroup.prototype.initialize.call(this, c), L.Utils.initTranslation.call(this), this.editable = this.options.editable;
    }, onAdd: function(c) {
      L.FeatureGroup.prototype.onAdd.call(this, c), this._map = c, this.editable && this.editing.enable(), this.on("layeradd", this._addEvents, this), this.on("layerremove", this._removeEvents, this);
    }, onRemove: function() {
      this.editing && this.editing.disable(), this.off("layeradd", this._addEvents, this), this.off("layerremove", this._removeEvents, this);
    }, _addEvents: function(c) {
      var f = c.layer;
      L.DomEvent.on(f, { dragstart: this._dragStartMultiple, drag: this._dragMultiple }, this), L.DomEvent.on(f.getElement(), { mousedown: this._deselectOthers, contextmenu: this._longPressMultiSelect }, this);
    }, _removeEvents: function(c) {
      var f = c.layer;
      L.DomEvent.off(f, { dragstart: this._dragStartMultiple, drag: this._dragMultiple }, this), L.DomEvent.off(f.getElement(), { mousedown: this._deselectOthers, contextmenu: this._longPressMultiSelect }, this);
    }, _longPressMultiSelect: function(c) {
      var f = this;
      this.editable && (c.preventDefault(), this.eachLayer(function(p) {
        var v = p.editing;
        p.getElement() === c.target && v.enabled() && (L.DomUtil.toggleClass(p.getElement(), "collected"), f.anyCollected() ? (p.deselect(), f.editing._addToolbar()) : f.editing._removeToolbar());
      }));
    }, isCollected: function(c) {
      return L.DomUtil.hasClass(c.getElement(), "collected");
    }, anyCollected: function() {
      return this.getLayers().some(this.isCollected.bind(this));
    }, _toggleCollected: function(c, f) {
      c.shiftKey && f.editing.enabled() && (L.DomUtil.toggleClass(c.target, "collected"), a.every(function(p) {
        return p._leaflet_id !== f._leaflet_id;
      }) ? a.push(f) : a.splice(a.indexOf(f), 1)), this.anyCollected() ? f.deselect() : this.editing._removeToolbar();
    }, _deselectOthers: function(c) {
      var f = this;
      this.editable && (this.eachLayer(function(p) {
        p.getElement() !== c.target ? p.deselect() : f._toggleCollected(c, p);
      }), c && L.DomEvent.stopPropagation(c));
    }, _dragStartMultiple: function(c) {
      var f, p = c.target, v = this._map;
      this.isCollected(p) && this.eachLayer(function(y) {
        for (y._dragStartPoints = {}, y.deselect(), f = 0; f < 4; f++) {
          var x = y.getCorner(f);
          y._dragStartPoints[f] = v.latLngToLayerPoint(x);
        }
      });
    }, _dragMultiple: function(c) {
      var f = c.target, p = this._map;
      if (this.isCollected(f)) {
        var v = p.latLngToLayerPoint(f.getCorner(0)), y = f._dragStartPoints[0].subtract(v);
        this._updateCollectionFromPoints(y, f);
      }
    }, _toRemove: function() {
      var c = this;
      return this.getLayers().filter(function(f) {
        var p = f.editing._mode;
        return c.isCollected(f) && p !== "lock";
      });
    }, _toMove: function(c) {
      var f = this;
      return this.getLayers().filter(function(p) {
        var v = p.editing._mode;
        return p !== c && f.isCollected(p) && v !== "lock";
      });
    }, _updateCollectionFromPoints: function(c, f) {
      var p, v = this._toMove(f), y = new L.Transformation(1, -c.x, 1, -c.y);
      v.forEach(function(x) {
        var T = {};
        for (p = 0; p < 4; p++)
          T[p] = y.transform(x._dragStartPoints[p]);
        x.setCornersFromPoints(T);
      });
    }, _getAvgCmPerPixel: function(c) {
      return c.reduce(function(f, p) {
        return f + p.cm_per_pixel;
      }, 0) / c.length;
    }, fetchRemoteJson: function(c) {
      return o(r().mark(function f() {
        var p, v, y;
        return r().wrap(function(x) {
          for (; ; )
            switch (x.prev = x.next) {
              case 0:
                return p = 0, v = [], x.prev = 2, x.next = 5, axios.get(c);
              case 5:
                if (!(y = x.sent).data.hasOwnProperty("avg_cm_per_pixel")) {
                  x.next = 14;
                  break;
                }
                if (!(y.data.collection.length > 1)) {
                  x.next = 10;
                  break;
                }
                return y.data.collection.forEach(function(T) {
                  v[p] = T, p++;
                }), x.abrupt("return", { avg_cm_per_pixel: y.data.avg_cm_per_pixel, imgCollectionProps: v });
              case 10:
                return v[p] = y.data.collection, x.abrupt("return", { avg_cm_per_pixel: y.data.avg_cm_per_pixel, imgCollectionProps: v });
              case 14:
                if (!(y.data.length > 1)) {
                  x.next = 17;
                  break;
                }
                return y.data.forEach(function(T) {
                  v[p] = T, p++;
                }), x.abrupt("return", { imgCollectionProps: v });
              case 17:
                return v[p] = y.data, x.abrupt("return", { imgCollectionProps: v });
              case 19:
                x.next = 24;
                break;
              case 21:
                x.prev = 21, x.t0 = x.catch(2), console.log("err", x.t0);
              case 24:
              case "end":
                return x.stop();
            }
        }, f, null, [[2, 21]]);
      }))();
    }, recreateImagesFromJsonUrl: function(c) {
      var f = this;
      return o(r().mark(function p() {
        var v;
        return r().wrap(function(y) {
          for (; ; )
            switch (y.prev = y.next) {
              case 0:
                if (v = {}, !c) {
                  y.next = 6;
                  break;
                }
                return y.next = 4, f.fetchRemoteJson(c);
              case 4:
                return v = y.sent, y.abrupt("return", v);
              case 6:
                return y.abrupt("return", v);
              case 8:
              case "end":
                return y.stop();
            }
        }, p);
      }))();
    }, generateExportJson: function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], f = { images: [] };
      return this.eachLayer(function(p) {
        if (c || this.isCollected(p)) {
          var v = p._image.src.split("/"), y = v[v.length - 1], x = p.getCorners(), T = [{ lat: x[0].lat, lon: x[0].lng || x[0].lon }, { lat: x[1].lat, lon: x[1].lng || x[1].lon }, { lat: x[3].lat, lon: x[3].lng || x[3].lon }, { lat: x[2].lat, lon: x[2].lng || x[2].lon }];
          f.images.push({ id: p._leaflet_id, src: p._image.src, width: p._image.width, height: p._image.height, tooltipText: p.getTooltipText(), image_file_name: y, nodes: T, cm_per_pixel: L.ImageUtil.getCmPerPixel(p) });
        }
      }, this), f.images = f.images.reverse(), f.avg_cm_per_pixel = this._getAvgCmPerPixel(f.images), f;
    } }), L.distortableCollection = function(c, f) {
      return new L.DistortableCollection(c, f);
    };
  }, 719: function() {
    L.DistortableImageOverlay = L.ImageOverlay.extend({ options: { height: 200, crossOrigin: !0, edgeMinWidth: 50, editable: !0, mode: "distort", selected: !1, interactive: !0, tooltipText: "" }, initialize: function(i, r) {
      L.setOptions(this, r), L.Utils.initTranslation.call(this), this.edgeMinWidth = this.options.edgeMinWidth, this.editable = this.options.editable, this._selected = this.options.selected, this._url = i, this.rotation = {}, this.interactive = this.options.interactive, this.tooltipText = this.options.tooltipText;
    }, onAdd: function(i) {
      var r = this;
      this._map = i, this.getElement() || this._initImage(), i.on("viewreset", this._reset, this), this.options.corners && (this._corners = this.options.corners, i.options.zoomAnimation && L.Browser.any3d && i.on("zoomanim", this._animateZoom, this)), L.DomEvent.on(this.getElement(), "load", function() {
        if (r.getPane().appendChild(r.getElement()), r._initImageDimensions(), r.options.rotation) {
          var u = r.options.rotation.deg >= 0 ? "deg" : "rad";
          r.setAngle(r.options.rotation[u], u);
        } else
          r.rotation = { deg: 0, rad: 0 }, r._reset();
        r._corners || i.options.zoomAnimation && L.Browser.any3d && i.on("zoomanim", r._animateZoom, r);
        var o = r._eventParents;
        o ? (r.eP = o[Object.keys(o)[0]], r.eP.editable && r.editing.enable()) : (r.editable && r.editing.enable(), r.eP = null);
      }), L.DomEvent.on(this.getElement(), "click", this.select, this), L.DomEvent.on(i, { singleclickon: this._singleClickListeners, singleclickoff: this._resetClickListeners, singleclick: this._singleClick }, this), i.doubleClickZoom.enabled() || i.doubleClickLabels.enabled() || L.DomEvent.on(i, "click", this.deselect, this), this.fire("add"), L.DomEvent.on(this.getElement(), "mousemove", this.activateTooltip, this), L.DomEvent.on(this.getElement(), "mouseout", this.closeTooltip, this);
    }, onRemove: function(i) {
      L.DomEvent.off(this.getElement(), "click", this.select, this), L.DomEvent.off(i, { singleclickon: this._singleClickListeners, singleclickoff: this._resetClickListeners, singleclick: this._singleClick }, this), L.DomEvent.off(i, "click", this.deselect, this), this.editing && this.editing.disable(), this.fire("remove"), L.ImageOverlay.prototype.onRemove.call(this, i), L.DomEvent.on(this.getElement(), "mouseout", this.closeTooltip, this), L.DomEvent.off(this.getElement(), "mousemove", this.deactivateTooltip, this);
    }, _initImageDimensions: function() {
      var i = this._map, r = L.DomUtil.getStyle(this.getElement(), "width"), u = L.DomUtil.getStyle(this.getElement(), "height"), o = parseInt(r) / parseInt(u), a = this.options.height, c = parseInt(o * a), f = i.project(i.getCenter()), p = L.point(c, a).divideBy(2);
      this.options.corners ? this._corners = this.options.corners : this._corners = [i.unproject(f.subtract(p)), i.unproject(f.add(L.point(p.x, -p.y))), i.unproject(f.add(L.point(-p.x, p.y))), i.unproject(f.add(p))], this._initialDimensions = { center: f, offset: p, zoom: i.getZoom() }, this.setBounds(L.latLngBounds(this.getCorners()));
    }, _singleClick: function(i) {
      i.type === "singleclick" && this.deselect();
    }, _singleClickListeners: function() {
      var i = this._map;
      L.DomEvent.off(i, "click", this.deselect, this), L.DomEvent.on(i, "singleclick", this.deselect, this);
    }, _resetClickListeners: function() {
      var i = this._map;
      L.DomEvent.on(i, "click", this.deselect, this), L.DomEvent.off(i, "singleclick", this.deselect, this);
    }, isSelected: function() {
      return this._selected;
    }, deselect: function() {
      var i = this.editing;
      if (i.enabled())
        return i._removeToolbar(), i._hideMarkers(), this._selected = !1, this.fire("deselect"), this;
    }, select: function(i) {
      var r = this.editing, u = this.eP;
      if (r.enabled()) {
        if (i && L.DomEvent.stopPropagation(i), this._programmaticGrouping(), this._selected = !0, r._addToolbar(), r._showMarkers(), this.fire("select"), !u || !u.anyCollected())
          return this;
        this.deselect();
      }
    }, _programmaticGrouping: function() {
      this._map.eachLayer(function(i) {
        i instanceof L.DistortableImageOverlay && i.deselect();
      });
    }, setCorner: function(i, r) {
      var u = this.editing;
      return this._corners[i] = r, this.setBounds(L.latLngBounds(this.getCorners())), this.fire("update"), u.toolbar && u.toolbar instanceof L.DistortableImage.PopupBar && u._updateToolbarPos(), this.edited = !0, this;
    }, _cornerExceedsMapLats: function(i, r, u) {
      return u.options.crs.Simple != L.CRS.Simple && (i === 0 ? (o = u.project(r).y < 2, a = u.project(r).y >= 255) : (o = u.project(r).y / i < 2, a = u.project(r).y / Math.pow(2, i) >= 255), o || a);
      var o, a;
    }, activateTooltip: function() {
      this._selected || this.bindTooltip(this.tooltipText, { direction: "top" }).openTooltip();
    }, closeToolTip: function() {
      this.closeTooltip();
    }, deactivateTooltip: function() {
      this.unbindTooltip();
    }, getTooltipText: function() {
      return this.tooltipText;
    }, setCorners: function(i) {
      var r = this._map, u = r.getZoom(), o = this.editing, a = 0;
      for (var c in i)
        if (this._cornerExceedsMapLats(u, i[c], r))
          return this.setBounds(L.latLngBounds(this.getCorners())), void this.fire("update");
      for (var f in i)
        this._corners[a] = i[f], a += 1;
      return this.setBounds(L.latLngBounds(this.getCorners())), this.fire("update"), o.toolbar && o.toolbar instanceof L.DistortableImage.PopupBar && o._updateToolbarPos(), this.edited = !0, this;
    }, setCornersFromPoints: function(i) {
      var r = this._map, u = r.getZoom(), o = this.editing, a = 0;
      for (var c in i) {
        var f = r.layerPointToLatLng(i[c]);
        if (this._cornerExceedsMapLats(u, f, r))
          return this.setBounds(L.latLngBounds(this.getCorners())), void this.fire("update");
      }
      for (var p in i)
        this._corners[a] = r.layerPointToLatLng(i[p]), a += 1;
      return this.setBounds(L.latLngBounds(this.getCorners())), this.fire("update"), o.toolbar && o.toolbar instanceof L.DistortableImage.PopupBar && o._updateToolbarPos(), this.edited = !0, this;
    }, scaleBy: function(i) {
      var r, u, o = this._map, a = o.project(this.getCenter()), c = {};
      if (i !== 0) {
        for (r = 0; r < 4; r++)
          u = o.project(this.getCorner(r)).subtract(a).multiplyBy(i).add(a), c[r] = o.unproject(u);
        return this.setCorners(c), this;
      }
    }, getAngle: function() {
      var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "deg", r = this.getElement().style[L.DomUtil.TRANSFORM].split("matrix3d")[1].slice(1, -1).split(","), u = r[0], o = r[1], a = r[4], c = u * r[5] - o * a, f = L.TrigUtil.calcAngle(u, o, "rad");
      return c < 0 && (f += f < 0 ? Math.PI : -Math.PI), f < 0 && (f = 2 * Math.PI + f), i === "deg" ? Math.round(L.TrigUtil.radiansToDegrees(f)) : L.Util.formatNum(f, 2);
    }, setAngle: function(i) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "deg", u = i - this.getAngle(r);
      return this.rotateBy(u, r), this;
    }, rotateBy: function(i) {
      var r, u, o, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "deg", c = this._map, f = c.project(this.getCenter()), p = {};
      for (a === "deg" && (i = L.TrigUtil.degreesToRadians(i)), r = 0; r < 4; r++)
        u = c.project(this.getCorner(r)).subtract(f), o = L.point(Math.cos(i) * u.x - Math.sin(i) * u.y, Math.sin(i) * u.x + Math.cos(i) * u.y), p[r] = c.unproject(o.add(f));
      return this.setCorners(p), this;
    }, dragBy: function(i, r) {
      var u, o, a = this._map, c = {}, f = a.project(i).subtract(a.project(r));
      for (u = 0; u < 4; u++)
        o = a.project(this.getCorner(u)).subtract(f), c[u] = a.unproject(o);
      this.setCorners(c);
    }, restore: function() {
      for (var i = this._map, r = this._initialDimensions.center, u = this._initialDimensions.offset, o = this._initialDimensions.zoom, a = [r.subtract(u), r.add(L.point(u.x, -u.y)), r.add(L.point(-u.x, u.y)), r.add(u)], c = 0; c < 4; c++)
        i.unproject(a[c], o).equals(this.getCorner(c)) || this.setCorner(c, i.unproject(a[c], o));
      return this.edited = !1, this.fire("restore"), this;
    }, _getTranslateString: function(i) {
      var r = L.Browser.webkit3d, u = (r ? ",0" : "") + ")";
      return "translate" + (r ? "3d" : "") + "(" + i.x + "px," + i.y + "px" + u;
    }, _reset: function() {
      var i = this._map, r = this.getElement(), u = L.bind(i.latLngToLayerPoint, i), o = this._calculateProjectiveTransform(u), a = u(this.getCorner(0)), c = L.DomUtil.getMatrixString(o), f = this._getTranslateString(a);
      r._leaflet_pos = a, r.style[L.DomUtil.TRANSFORM] = [f, c].join(" "), r.style[L.DomUtil.TRANSFORM + "-origin"] = "0 0 0", this.rotation.deg = this.getAngle(), this.rotation.rad = this.getAngle("rad");
    }, _animateZoom: function(i) {
      var r = this._map, u = this.getElement(), o = function(v) {
        return r._latLngToNewLayerPoint(v, i.zoom, i.center);
      }, a = this._calculateProjectiveTransform(o), c = o(this.getCorner(0)), f = L.DomUtil.getMatrixString(a), p = this._getTranslateString(c);
      u._leaflet_pos = c, u.style[L.DomUtil.TRANSFORM] = [p, f].join(" ");
    }, getCorners: function() {
      return this._corners;
    }, getCorner: function(i) {
      return this._corners[i];
    }, getCenter: function() {
      var i = this._map, r = this.getCorners().reduce(function(u, o) {
        return u.add(i.project(o));
      }, L.point(0, 0));
      return i.unproject(r.divideBy(4));
    }, _calculateProjectiveTransform: function(i) {
      var r, u = i(this.getCorner(0)), o = this.getElement().offsetWidth || 500, a = this.getElement().offsetHeight || 375, c = [];
      for (r = 0; r < 4; r++)
        c.push(i(this.getCorner(r))._subtract(u));
      return L.MatrixUtil.general2DProjection(0, 0, c[0].x, c[0].y, o, 0, c[1].x, c[1].y, 0, a, c[2].x, c[2].y, o, a, c[3].x, c[3].y);
    } }), L.distortableImageOverlay = function(i, r) {
      return new L.DistortableImageOverlay(i, r);
    }, L.Map.addInitHook(function() {
      L.DomUtil.hasClass(this.getContainer(), "ldi") || L.DomUtil.addClass(this.getContainer(), "ldi");
    });
  }, 80: function() {
    var i = this;
    L.DomUtil = L.DomUtil || {}, L.DistortableImage = L.DistortableImage || {}, L.distortableImage = L.DistortableImage, L.DistortableImage.Keymapper = L.Handler.extend({ options: { position: "topright" }, initialize: function(r, u) {
      this._map = r, L.setOptions(this, u);
    }, addHooks: function() {
      this._keymapper || (this._container = this._buildContainer(), this._scrollWrapper = this._wrap(), this._toggler = this._createButton(), this._setMapper(this._container, this._scrollWrapper, this._toggler), L.DomEvent.on(this._toggler, "click", this._toggleKeymapper, this), L.DomEvent.disableClickPropagation(this._container), L.DomEvent.disableScrollPropagation(this._container));
    }, removeHooks: function() {
      this._keymapper && (L.DomEvent.off(this._toggler, "click", this._toggleKeymapper, this), L.DomUtil.remove(this._toggler), L.DomUtil.remove(this._scrollWrapper), L.DomUtil.remove(this._container), this._keymapper = !1);
    }, _buildContainer: function() {
      var r = L.DomUtil.create("div", "ldi-keymapper-hide");
      r.setAttribute("id", "ldi-keymapper");
      var u = L.DomUtil.create("br", "divider");
      return r.appendChild(u), r;
    }, _createButton: function() {
      var r = L.DomUtil.create("a", "");
      return r.innerHTML = L.IconUtil.create("keyboard_open"), r.setAttribute("id", "toggle-keymapper"), r.setAttribute("href", "#"), r.setAttribute("title", "Show keymap"), r.setAttribute("role", "button"), r.setAttribute("aria-label", "Show keymap"), r;
    }, _wrap: function() {
      var r = L.DomUtil.create("div", "");
      return r.setAttribute("id", "keymapper-wrapper"), r.style.display = "none", r;
    }, _setMapper: function(r, u, o) {
      this._keymapper = L.control({ position: this.options.position }), this._keymapper.onAdd = function() {
        return r.appendChild(u), u.insertAdjacentHTML("beforeend", '<table><tbody><hr id="keymapper-hr"><tr><td><div class="left"><span>Rotate Mode</span></div><div class="right"><kbd>R</kbd></div></td></tr><tr><td><div class="left"><span>RotateScale Mode</span></div><div class="right"><kbd>r</kbd></div></td></tr><tr><td><div class="left"><span>Scale Mode</span></div><div class="right"><kbd>s</kbd></div></td></tr><tr><td><div class="left"><span>Distort Mode</span></div><div class="right"><kbd>d</kbd></div></td></tr><tr><td><div class="left"><span>Drag Mode</span></div><div class="right"><kbd>D</kbd></div></td></tr><tr><td><div class="left"><span>Lock (Mode) / Unlock Image</span></div><div class="right"><kbd>l</kbd> <kbd>u</kbd></div></td></tr><tr><td><div class="left"><span>Stack up / down</span></div><div class="right"><kbd>q</kbd> <kbd>a</kbd></div></td></tr><tr><td><div class="left"><span>Add / Remove Image Border</span></div><div class="right"><kbd>b</kbd></div></td></tr><tr><td><div class="left"><span>Toggle Opacity</span></div><div class="right"><kbd>o</kbd></div></td></tr><tr><td><div class="left"><span>Deselect All</span></div><div class="right"><kbd>esc</kbd></div></td></tr><tr><td><div class="left"><span>Delete Image(s)</span></div><div class="right"><kbd>delete</kbd> <kbd>backspace</kbd></div></td></tr><tr><td><div class="left"><span>Export Image(s)</span></div><div class="right"><kbd>e</kbd></div></td></tr></tbody></table>'), r.appendChild(o), r;
      }, this._keymapper.addTo(this._map);
    }, _toggleKeymapper: function(r) {
      r.preventDefault(), this._container.className = this._container.className === "ldi-keymapper leaflet-control" ? "ldi-keymapper-hide leaflet-control" : "ldi-keymapper leaflet-control", this._scrollWrapper.style.display = this._scrollWrapper.style.display === "none" ? "block" : "none", this._toggler.innerHTML = this._toggler.innerHTML === "close" ? L.IconUtil.create("keyboard_open") : "close", L.IconUtil.toggleTitle(this._toggler, "Show keymap", "Hide keymap"), L.DomUtil.toggleClass(this._toggler, "close-icon");
    }, _injectIconSet: function() {
      if (!document.querySelector("#keymapper-iconset")) {
        var r = L.DomUtil.create("div", "");
        r.id = "keymapper-iconset", r.setAttribute("hidden", "hidden"), this._iconset = new L.KeymapperIconSet().render(), r.innerHTML = this._iconset, document.querySelector(".leaflet-control-container").appendChild(r);
      }
    } }), L.DistortableImage.Keymapper.addInitHook(function() {
      L.DistortableImage.Keymapper.prototype._n = L.DistortableImage.Keymapper.prototype._n ? L.DistortableImage.Keymapper.prototype._n + 1 : 1, L.DistortableImage.Keymapper.prototype._n !== 1 || L.Browser.mobile || (i.enable(), i._injectIconSet());
    }), L.distortableImage.keymapper = function(r, u) {
      return new L.DistortableImage.Keymapper(r, u);
    };
  }, 247: function() {
    L.DistortableImage = L.DistortableImage || {}, L.DistortableCollection.Edit = L.Handler.extend({ options: { keymap: L.distortableImage.group_action_map }, initialize: function(i, r) {
      this._group = i, this._exportOpts = i.options.exportOpts, L.setOptions(this, r), L.distortableImage.group_action_map.Escape = "_decollectAll";
    }, addHooks: function() {
      var i = this._group._map;
      this.editActions = this.options.actions, this.runExporter = L.bind(L.Utils.getNestedVal(this, "_exportOpts", "exporter") || this.startExport, this), L.DomEvent.on(document, "keydown", this._onKeyDown, this), i.doubleClickZoom.enabled() || i.doubleClickLabels.enabled() || L.DomEvent.on(i, "click", this._decollectAll, this), L.DomEvent.on(i, { singleclickon: this._singleClickListeners, singleclickoff: this._resetClickListeners, singleclick: this._singleClick, boxcollectend: this._addCollections }, this), this._group.editable = !0, this._group.eachLayer(function(r) {
        return r.editing.enable();
      });
    }, removeHooks: function() {
      var i = this._group._map;
      L.DomEvent.off(document, "keydown", this._onKeyDown, this), i.doubleClickZoom.enabled() || i.doubleClickLabels.enabled() || L.DomEvent.off(i, "click", this._decollectAll, this), L.DomEvent.off(i, { singleclickon: this._singleClickListeners, singleclickoff: this._resetClickListeners, singleclick: this._singleClick, boxcollectend: this._addCollections }, this), this._decollectAll(), this._group.editable = !1, this._group.eachLayer(function(r) {
        return r.editing.disable();
      });
    }, enable: function() {
      return this._enabled = !0, this.addHooks(), this;
    }, disable: function() {
      return this._enabled = !1, this.removeHooks(), this;
    }, _onKeyDown: function(i) {
      var r = this.options.keymap[i.key];
      this[r] && this._group.anyCollected() && this[r].call(this);
    }, _singleClick: function(i) {
      i.type === "singleclick" && this._decollectAll(i);
    }, _singleClickListeners: function() {
      var i = this._group._map;
      L.DomEvent.off(i, "click", this._decollectAll, this), L.DomEvent.on(i, "singleclick", this._decollectAll, this);
    }, _resetClickListeners: function() {
      var i = this._group._map;
      L.DomEvent.on(i, "click", this._decollectAll, this), L.DomEvent.off(i, "singleclick", this._decollectAll, this);
    }, _decollectAll: function(i) {
      var r;
      i && (r = i.originalEvent), r && (r.shiftKey || r.target instanceof HTMLImageElement) || (this._group.eachLayer(function(u) {
        L.DomUtil.removeClass(u.getElement(), "collected"), u.deselect();
      }), this._removeToolbar(), i && L.DomEvent.stopPropagation(i));
    }, _unlockGroup: function() {
      var i = this;
      this.hasTool(L.UnlockAction) && this._group.eachLayer(function(r) {
        i._group.isCollected(r) && (r.editing._unlock(), r.deselect());
      });
    }, _lockGroup: function() {
      var i = this;
      this.hasTool(L.LockAction) && this._group.eachLayer(function(r) {
        i._group.isCollected(r) && (r.editing._lock(), L.DomUtil.addClass(r.getElement(), "collected"));
      });
    }, _addCollections: function(i) {
      var r = this, u = i.boxCollectBounds, o = this._group._map;
      this._group.eachLayer(function(a) {
        var c = a.editing;
        a.isSelected() && a.deselect();
        var f = o.getZoom(), p = o.getCenter(), v = L.latLngBounds(a.getCorner(2), a.getCorner(1));
        v = o._latLngBoundsToNewLayerBounds(v, f, p), u.intersects(v) && c.enabled() && (r.toolbar || r._addToolbar(), L.DomUtil.addClass(a.getElement(), "collected"));
      });
    }, _removeGroup: function(i) {
      var r = this;
      if (this.hasTool(L.DeleteAction)) {
        var u = this._group._toRemove(), o = u.length;
        o !== 0 && (L.DomUtil.confirmDeletes(o) && (u.forEach(function(a) {
          r._group.removeLayer(a);
        }), this._group.anyCollected() || this._removeToolbar()), i && L.DomEvent.stopPropagation(i));
      }
    }, cancelExport: function() {
      this.customCollection || (this._exportOpts.collection = void 0), clearInterval(this.updateInterval);
    }, _addToolbar: function() {
      var i = this._group, r = i._map;
      i.options.suppressToolbar || this.toolbar || (this.toolbar = L.distortableImage.controlBar({ actions: this.editActions, position: "topleft" }).addTo(r, i));
    }, _removeToolbar: function() {
      var i = this._group._map;
      if (!this.toolbar)
        return !1;
      i.removeLayer(this.toolbar), this.toolbar = !1;
    }, hasTool: function(i) {
      return this.editActions.some(function(r) {
        return r === i;
      });
    }, addTool: function(i) {
      return i.baseClass !== "leaflet-toolbar-icon" || this.hasTool(i) || (this._removeToolbar(), this.editActions.push(i), this._addToolbar()), this;
    }, removeTool: function(i) {
      var r = this;
      return this.editActions.some(function(u, o) {
        return r.editActions[o] === i && (r._removeToolbar(), r.editActions.splice(o, 1), r._addToolbar(), !0);
      }), this;
    }, startExport: function() {
      var i = this;
      if (this.hasTool(L.ExportAction))
        return new Promise(function(r) {
          var u, o = i._exportOpts;
          o.resolve = r, i.updateInterval = null, i.customCollection = !!o.collection, i.customCollection || (o.collection = i._group.generateExportJson().images), o.frequency = o.frequency || 3e3, o.scale = o.scale || 100, o.updater = o.updater || function(a) {
            (a = JSON.parse(a)).status_url && (u !== a.status_url && a.status_url.match(".json") && (u = a.status_url), a.status === "complete" && (clearInterval(i.updateInterval), i.customCollection || (i._exportOpts.collection = void 0), r(), a.jpg !== null && alert("Export succeeded. " + o.exportUrl + a.jpg)), console.log(a));
          }, o.handleStatusRes = o.handleStatusRes || function(a) {
            u = o.statusUrl + a, i.updateInterval = setInterval(function() {
              var c = new Request("".concat(u, "?").concat(Date.now()), { method: "GET" });
              fetch(c).then(function(f) {
                if (f.ok)
                  return f.text();
              }).then(o.updater);
            }, o.frequency);
          }, o.fetchStatusUrl = o.fetchStatusUrl || function(a) {
            var c = new FormData();
            c.append("collection", JSON.stringify(a.collection)), c.append("scale", a.scale), c.append("upload", !0);
            var f = { method: "POST", body: c }, p = new Request(a.exportStartUrl, f);
            fetch(p).then(function(v) {
              if (v.ok)
                return v.text();
            }).then(a.handleStatusRes);
          }, o.fetchStatusUrl(o);
        });
    } }), L.distortableCollection.edit = function(i, r) {
      return new L.DistortableCollection.Edit(i, r);
    };
  }, 754: function() {
    L.DistortableImage = L.DistortableImage || {}, L.DistortableImage.Edit = L.Handler.extend({ options: { opacity: 0.5, outline: "1px solid red", keymap: L.distortableImage.action_map }, initialize: function(i, r) {
      this._overlay = i, this._toggledImage = !1, this._mode = i.options.mode, this._transparent = !1, this._outlined = !1, this._opacity = r.opacity, L.setOptions(this, r), L.distortableImage.action_map.Escape = "_deselect";
    }, addHooks: function() {
      var i = this._overlay;
      this.editActions = this.options.actions, i.bringToFront(), this._initModes(), this._initHandles(), this._appendHandlesandDragable(), i.isSelected() && !i.options.suppressToolbar && this._addToolbar(), this.parentGroup = !!i.eP && i.eP, L.DomEvent.on(i.getElement(), { dblclick: this.nextMode }, this), L.DomEvent.on(window, "keydown", this._onKeyDown, this);
    }, removeHooks: function() {
      var i = this._overlay, r = this.parentGroup;
      for (var u in this._disableDragging(), this.toolbar && this._removeToolbar(), this._handles)
        L.DomUtil.remove(u);
      L.DomUtil.hasClass(i.getElement(), "collected") && L.DomUtil.removeClass(i.getElement(), "collected"), r && !r.anyCollected() && r.editing.toolbar && r.editing._removeToolbar(), L.DomEvent.off(i.getElement(), { dblclick: this.nextMode }, this), L.DomEvent.off(window, "keydown", this._onKeyDown, this);
    }, disable: function() {
      return this._enabled ? (this._overlay.deselect(), this._enabled = !1, this.removeHooks(), this) : this;
    }, _initModes: function() {
      for (var i in this._modes = {}, L.DistortableImage.Edit.MODES) {
        var r = L.DistortableImage.Edit.MODES[i];
        this.editActions.indexOf(r) !== -1 && (this._modes[i] = r);
      }
      this._modes[this._mode] || (this._mode = Object.keys(this._modes)[0]);
    }, _initHandles: function() {
      var i, r = this._overlay;
      for (this._dragHandles = L.layerGroup(), i = 0; i < 4; i++)
        this._dragHandles.addLayer(L.dragHandle(r, i));
      for (this._scaleHandles = L.layerGroup(), i = 0; i < 4; i++)
        this._scaleHandles.addLayer(L.scaleHandle(r, i));
      for (this._distortHandles = L.layerGroup(), i = 0; i < 4; i++)
        this._distortHandles.addLayer(L.distortHandle(r, i));
      for (this._rotateHandles = L.layerGroup(), i = 0; i < 4; i++)
        this._rotateHandles.addLayer(L.rotateHandle(r, i));
      for (this._freeRotateHandles = L.layerGroup(), i = 0; i < 4; i++)
        this._freeRotateHandles.addLayer(L.freeRotateHandle(r, i));
      for (this._lockHandles = L.layerGroup(), i = 0; i < 4; i++)
        this._lockHandles.addLayer(L.lockHandle(r, i, { draggable: !1 }));
      this._handles = { drag: this._dragHandles, scale: this._scaleHandles, distort: this._distortHandles, rotate: this._rotateHandles, freeRotate: this._freeRotateHandles, lock: this._lockHandles };
    }, _appendHandlesandDragable: function() {
      var i = this._overlay;
      this._mode ? (this._updateHandle(), !i.isSelected() && this.currentHandle && this.currentHandle.eachLayer(function(r) {
        r.setOpacity(0), r.dragging && r.dragging.disable();
      }), this.isMode("lock") || this._enableDragging()) : this._enableDragging();
    }, _onKeyDown: function(i) {
      var r = this.options.keymap[i.key], u = this._overlay, o = this.parentGroup;
      o && o.anyCollected() || this[r] === void 0 || u.options.suppressToolbar || u.isSelected() && this.toolbar && this[r].call(this);
    }, replaceTool: function(i, r) {
      var u = this;
      return r.baseClass !== "leaflet-toolbar-icon" || this.hasTool(r) || this.editActions.some(function(o, a) {
        if (o === i) {
          for (var c in u._removeToolbar(), u.editActions[a] = r, u._addToolbar(), L.DistortableImage.Edit.MODES)
            L.DistortableImage.Edit.MODES[c] === i ? (delete u._modes[c], u._nextOrNone(c)) : L.DistortableImage.Edit.MODES[c] === r && (u._modes[c] = r);
          return !0;
        }
      }), this;
    }, addTool: function(i) {
      if (i.baseClass === "leaflet-toolbar-icon" && !this.hasTool(i)) {
        for (var r in this._removeToolbar(), this.editActions.push(i), this._addToolbar(), L.DistortableImage.Edit.MODES)
          L.DistortableImage.Edit.MODES[r] === i && (this._modes[r] = i);
        this._overlay.isSelected() || this._removeToolbar();
      }
      return this;
    }, hasTool: function(i) {
      return this.editActions.some(function(r) {
        return r === i;
      });
    }, removeTool: function(i) {
      var r = this;
      return this.editActions.some(function(u, o) {
        if (u === i) {
          for (var a in r._removeToolbar(), r.editActions.splice(o, 1), r._addToolbar(), L.DistortableImage.Edit.MODES)
            L.DistortableImage.Edit.MODES[a] === i && (delete r._modes[a], r._nextOrNone(a));
          return !0;
        }
      }), this._overlay.isSelected() || this._removeToolbar(), this;
    }, _nextOrNone: function(i) {
      this.isMode(i) && (Object.keys(this.getModes()).length >= 1 ? this.nextMode() : (i === "lock" && this._enableDragging(), this._mode = "", this._updateHandle()));
    }, _removeToolbar: function() {
      var i = this._overlay._map;
      this.toolbar && (i.removeLayer(this.toolbar), this.toolbar = !1);
    }, _enableDragging: function() {
      var i = this, r = this._overlay, u = r._map;
      this.dragging = new L.Draggable(r.getElement()), this.dragging.enable(), this.dragging.on("dragstart", function() {
        r.fire("dragstart"), i._removeToolbar();
      }), this.dragging._updatePosition = function() {
        var o, a, c = r.getCorner(0), f = this._newPos.subtract(u.latLngToLayerPoint(c)), p = {};
        for (this.fire("predrag"), a = 0; a < 4; a++)
          o = u.latLngToLayerPoint(r.getCorner(a)), p[a] = u.layerPointToLatLng(o.add(f));
        r.setCorners(p), r.fire("drag"), this.fire("drag");
      }, this.dragging.on("dragend", function() {
        r.fire("dragend");
      });
    }, _disableDragging: function() {
      this.dragging && (this.dragging.disable(), delete this.dragging);
    }, _dragMode: function() {
      this.setMode("drag");
    }, _scaleMode: function() {
      this.setMode("scale");
    }, _distortMode: function() {
      this.setMode("distort");
    }, _rotateMode: function() {
      this.setMode("rotate");
    }, _freeRotateMode: function() {
      this.setMode("freeRotate");
    }, _toggleLockMode: function() {
      this.isMode("lock") ? this._unlock() : this._lock();
    }, _toggleOpacity: function() {
      var i = this._overlay.getElement();
      if (this.hasTool(L.OpacityAction)) {
        this._transparent = !this._transparent;
        var r = this._transparent ? this.options.opacity : 1;
        L.DomUtil.setOpacity(i, r), i.setAttribute("opacity", r), this._refresh();
      }
    }, _setOpacities: function(i) {
      var r = this._overlay.getElement();
      this._opacity = i, this.hasTool(L.OpacitiesAction) && (this._opacity < 1 ? this._transparent = !0 : this._transparent = !1, L.DomUtil.setOpacity(r, this._opacity), r.setAttribute("opacity", this._opacity), this._refresh());
    }, _toggleBorder: function() {
      var i = this._overlay.getElement();
      if (this.hasTool(L.BorderAction)) {
        this._outlined = !this._outlined;
        var r = this._outlined ? this.options.outline : "none";
        i.style.outline = r, this._refresh();
      }
    }, _toggleOrder: function() {
      this._toggledImage ? this._stackUp() : this._stackDown();
    }, _removeOverlay: function() {
      var i = this._overlay, r = this.parentGroup;
      !this.isMode("lock") && this.hasTool(L.DeleteAction) && L.DomUtil.confirmDelete() && (this._removeToolbar(), r ? r.removeLayer(i) : i._map.removeLayer(i));
    }, _getExport: function() {
      var i = this._overlay, r = i._map, u = i.getElement();
      if (this.hasTool(L.ExportAction)) {
        var o = new Image();
        o.id = o.id || "tempId12345", document.body.appendChild(o), o.onload = function() {
          var a = o.height, c = o.width, f = r.latLngToLayerPoint(i.getCorner(0)), p = r.latLngToLayerPoint(i.getCorner(1)), v = r.latLngToLayerPoint(i.getCorner(2)), y = r.latLngToLayerPoint(i.getCorner(3));
          o.onload = function() {
            L.DomUtil.remove(o);
          }, window && window.hasOwnProperty("warpWebGl") && warpWebGl(o.id, [0, 0, c, 0, c, a, 0, a], [f.x, f.y, p.x, p.y, y.x, y.y, v.x, v.y], !0);
        }, o.src = i.options.fullResolutionSrc || u.src;
      }
    }, _stackUp: function() {
      this._toggledImage && this.hasTool(L.StackAction) && (this._toggledImage = !1, this._overlay.bringToFront(), this._refresh());
    }, _stackDown: function() {
      !this._toggledImage && this.hasTool(L.StackAction) && (this._toggledImage = !0, this._overlay.bringToBack(), this._refresh());
    }, _unlock: function() {
      var i = this._overlay, r = i._map, u = this.parentGroup;
      this.isMode("lock") && ((!u || u.isCollected(i)) && u || this.hasTool(L.LockAction)) && (this.currentHandle && r.removeLayer(this.currentHandle), i.options.mode !== "lock" && this.hasMode(i.options.mode) ? this._mode = i.options.mode : (this._mode = "", this.currentHandle = ""), this._updateHandle(), this._enableDragging(), this._refresh());
    }, _lock: function() {
      var i = this._overlay, r = i._map, u = this.parentGroup;
      this.isMode("lock") || ((!u || u.isCollected(i)) && u || this.hasTool(L.LockAction)) && (this.currentHandle && r.removeLayer(this.currentHandle), this._mode = "lock", this._updateHandle(), this._disableDragging(), this._refresh());
    }, _deselect: function() {
      this._overlay.deselect();
    }, _showMarkers: function(i) {
      var r = this.parentGroup;
      this.currentHandle && (!this.isMode("lock") && r && r.anyCollected() || this.currentHandle.eachLayer(function(u) {
        u.setOpacity(1), u.dragging && u.dragging.enable(), L.DomUtil.addClass(u.getElement(), "leaflet-interactive");
      }));
    }, _hideMarkers: function() {
      var i = this._overlay, r = this.parentGroup;
      this._handles || this._initHandles(), this.currentHandle && (this.isMode("lock") && r && r.isCollected(i) || this.currentHandle.eachLayer(function(u) {
        u.setOpacity(0), u.dragging && u.dragging.disable(), L.DomUtil.removeClass(u.getElement(), "leaflet-interactive");
      }));
    }, _updateHandle: function() {
      var i = this._overlay._map, r = this.getMode();
      this.currentHandle && i.removeLayer(this.currentHandle), this.currentHandle = r === "" ? "" : this._handles[r], this.currentHandle !== "" && i.addLayer(this.currentHandle);
    }, _addToolbar: function() {
      var i = this._overlay, r = this.parentGroup, u = i._map, o = i.getCorners(), a = -1 / 0;
      if (r && r.anyCollected())
        r.editing._addToolbar();
      else if (!i.options.suppressToolbar && !this.toolbar) {
        for (var c = 0; c < o.length; c++)
          o[c].lat > a && (a = o[c].lat);
        var f = i.getCenter();
        f.lat = a, this.toolbar = L.distortableImage.popupBar(f, { actions: this.editActions }).addTo(u, i), i.fire("toolbar:created");
      }
    }, _refresh: function() {
      this.toolbar && this._removeToolbar(), this._addToolbar();
    }, _updateToolbarPos: function() {
      var i = this._overlay, r = i.getCorners(), u = this.toolbar, o = -1 / 0;
      if (u && u instanceof L.DistortableImage.PopupBar) {
        for (var a = 0; a < r.length; a++)
          r[a].lat > o && (o = r[a].lat);
        var c = i.getCenter();
        c.lat = o, i.options.suppressToolbar || this.toolbar.setLatLng(c);
      }
    }, hasMode: function(i) {
      return !!this._modes[i];
    }, getMode: function() {
      if (this.enabled())
        return this._mode;
    }, getModes: function() {
      return this._modes;
    }, isMode: function(i) {
      return !!this.enabled() && this._mode === i;
    }, setMode: function(i) {
      var r = this._overlay, u = this.parentGroup;
      if (this.getMode() !== i && this.hasMode(i) && this.enabled())
        return this.toolbar && this.toolbar.clickTool(i), this.isMode("lock") && !this.dragging && this._enableDragging(), this._mode = i, this.isMode("lock") && this._disableDragging(), this._updateHandle(), this._refresh(), u && u.isCollected(r) && r.deselect(), this;
    }, nextMode: function(i) {
      var r = this.getMode(), u = this.parentGroup, o = Object.keys(this.getModes()), a = o.indexOf(r), c = o[(a + 1) % o.length];
      if (i) {
        if (u && u.anyCollected())
          return;
        L.DomEvent.stop(i);
      }
      return this.setMode(c);
    } }), L.distortableImage.edit = function(i, r) {
      return new L.DistortableImage.Edit(i, r);
    };
  }, 811: function() {
    L.BorderAction = L.EditAction.extend({ initialize: function(i, r, u) {
      var o, a, c = r.editing, f = c._mode;
      c._outlined ? (o = "border_outer", a = r.options.translation.removeBorder) : (o = "border_clear", a = r.options.translation.addBorder), (u = u || {}).toolbarIcon = { svg: !0, html: o, tooltip: a, className: f === "lock" ? "disabled" : "" }, L.DistortableImage.action_map.b = f === "lock" ? "" : "_toggleBorder", L.EditAction.prototype.initialize.call(this, i, r, u);
    }, addHooks: function() {
      var i = this._overlay.editing;
      L.IconUtil.toggleXlink(this._link, "border_clear", "border_outer"), L.IconUtil.toggleTitle(this._link, "Remove Border", "Add Border"), i._toggleBorder();
    } });
  }, 698: function() {
    L.DeleteAction = L.EditAction.extend({ initialize: function(i, r, u) {
      var o, a = r.editing;
      a instanceof L.DistortableImage.Edit ? (o = r.options.translation.deleteImage, L.DistortableImage.action_map.Backspace = a._mode === "lock" ? "" : "_removeOverlay") : (o = r.options.translation.deleteImages, L.DistortableImage.group_action_map.Backspace = a._mode === "lock" ? "" : "_removeGroup"), (u = u || {}).toolbarIcon = { svg: !0, html: "delete_forever", tooltip: o, className: a._mode === "lock" ? "disabled" : "" }, L.EditAction.prototype.initialize.call(this, i, r, u);
    }, addHooks: function() {
      var i = this._overlay.editing;
      i instanceof L.DistortableImage.Edit ? i._removeOverlay() : i._removeGroup();
    } });
  }, 824: function() {
    L.DistortAction = L.EditAction.extend({ initialize: function(i, r, u) {
      (u = u || {}).toolbarIcon = { svg: !0, html: "distort", tooltip: r.options.translation.distortImage, className: "distort" }, L.DistortableImage.action_map.d = "_distortMode", L.EditAction.prototype.initialize.call(this, i, r, u);
    }, addHooks: function() {
      this._overlay.editing._distortMode();
    } });
  }, 459: function() {
    L.DragAction = L.EditAction.extend({ initialize: function(i, r, u) {
      (u = u || {}).toolbarIcon = { svg: !0, html: "drag", tooltip: r.options.translation.dragImage, className: "drag" }, L.DistortableImage.action_map.D = "_dragMode", L.EditAction.prototype.initialize.call(this, i, r, u);
    }, addHooks: function() {
      this._overlay.editing._dragMode();
    } });
  }, 309: function() {
    L.DistortableImage = L.DistortableImage || {}, L.distortableImage = L.DistortableImage, L.DistortableImage.action_map = {}, L.EditAction = L.Toolbar2.Action.extend({ options: { toolbarIcon: { svg: !1, html: "", className: "", tooltip: "" } }, initialize: function(i, r, u) {
      this._overlay = r, this._map = i, L.setOptions(this, u), L.Toolbar2.Action.prototype.initialize.call(this, u), this._injectIconSet();
    }, _createIcon: function(i, r, u) {
      var o = this, a = this.options.toolbarIcon, c = a.className, f = this._overlay.editing, p = this.options.toolbarIcon.style;
      this.toolbar = i, this._icon = L.DomUtil.create("li", "", r), this._link = L.DomUtil.create("a", "", this._icon), a.svg ? this._link.innerHTML = L.IconUtil.create(a.html) : this._link.innerHTML = a.html, this._link.setAttribute("href", "#"), this._link.setAttribute("title", a.tooltip), p && this._link.setAttribute("style", p), this._link.setAttribute("role", "button"), L.DomUtil.addClass(this._link, this.constructor.baseClass), c && (L.DomUtil.addClass(this._link, c), c === "disabled" && L.DomUtil.addClass(this._icon, c), c === f._mode ? L.DomUtil.addClass(this._link, "selected-mode") : L.DomUtil.removeClass(this._link, "selected-mode")), L.DomEvent.on(this._link, "click", this.enable, this), L.DomEvent.on(this._overlay, "update", function() {
        var v = o._link.innerHTML.match(/xlink:href="#restore"/);
        v && v.length === 1 && o._enableAction();
      }), this._addSubToolbar(i, this._icon, u);
    }, _injectIconSet: function() {
      if (!document.querySelector("#iconset")) {
        var i = document.createElement("div");
        i.id = "iconset", i.setAttribute("hidden", "hidden"), i.innerHTML = new L.ToolbarIconSet().render(), document.querySelector(".leaflet-marker-pane").appendChild(i);
      }
    }, _enableAction: function() {
      L.DomUtil.removeClass(this._link.parentElement, "disabled"), L.DomUtil.removeClass(this._link, "disabled");
    }, _disableAction: function() {
      L.DomUtil.addClass(this._link.parentElement, "disabled"), L.DomUtil.addClass(this._link, "disabled");
    } }), L.editAction = function(i, r, u) {
      return new L.EditAction(i, r, u);
    };
  }, 106: function() {
    L.ExportAction = L.EditAction.extend({ initialize: function(i, r, u) {
      var o, a = r.editing;
      this.isExporting = !1, this.mouseLeaveSkip = !0, this.isHooksExecuted = !1, a instanceof L.DistortableImage.Edit ? (L.DistortableImage.action_map.e = "_getExport", o = r.options.translation.exportImage) : (L.DistortableImage.group_action_map.e = "runExporter", o = r.options.translation.exportImages), (u = u || {}).toolbarIcon = { svg: !0, html: "get_app", tooltip: o }, L.EditAction.prototype.initialize.call(this, i, r, u);
    }, addHooks: function() {
      var i = this._overlay.editing;
      if (i instanceof L.DistortableImage.Edit)
        i._getExport();
      else if (!this.isHooksExecuted) {
        this.isHooksExecuted = !0;
        var r = this._link.parentElement;
        this.mouseEnterHandler = this.handleMouseEnter.bind(this), this.mouseLeaveHandler = this.handleMouseLeave.bind(this), L.DomEvent.on(r, "click", function() {
          if (this.isExporting) {
            if (this.mouseLeaveSkip)
              return;
            this.resetState(), this.detachMouseEventListeners(r), i.cancelExport();
          } else
            this.isExporting = !0, this.renderExportIcon(), setTimeout(this.attachMouseEventListeners.bind(this, r), 100), i.runExporter().then(function() {
              this.resetState(), this.detachMouseEventListeners(r);
            }.bind(this));
        }, this);
      }
    }, resetState: function() {
      this.renderDownloadIcon(), this.isExporting = !1, this.mouseLeaveSkip = !0;
    }, attachMouseEventListeners: function(i) {
      i.addEventListener("mouseenter", this.mouseEnterHandler), i.addEventListener("mouseleave", this.mouseLeaveHandler);
    }, detachMouseEventListeners: function(i) {
      i.removeEventListener("mouseenter", this.mouseEnterHandler), i.removeEventListener("mouseleave", this.mouseLeaveHandler);
    }, handleMouseEnter: function() {
      this.renderCancelIcon();
    }, handleMouseLeave: function() {
      this.mouseLeaveSkip ? this.mouseLeaveSkip = !1 : this.renderExportIcon();
    }, renderDownloadIcon: function() {
      L.IconUtil.toggleXlink(this._link, "get_app", "spinner"), L.IconUtil.toggleTitle(this._link, "Export Images", "Loading..."), L.DomUtil.removeClass(this._link.firstChild, "loader");
    }, renderExportIcon: function() {
      L.IconUtil.toggleXlink(this._link, "spinner"), L.IconUtil.toggleTitle(this._link, "Export Images", "Loading..."), L.IconUtil.addClassToSvg(this._link, "loader");
    }, renderCancelIcon: function() {
      L.IconUtil.toggleXlink(this._link, "cancel"), L.IconUtil.toggleTitle(this._link, "Cancel Export", "Loading..."), L.DomUtil.removeClass(this._link.firstChild, "loader");
    } });
  }, 208: function() {
    L.FreeRotateAction = L.EditAction.extend({ initialize: function(i, r, u) {
      (u = u || {}).toolbarIcon = { svg: !0, html: "crop_rotate", tooltip: r.options.translation.freeRotateImage, className: "freeRotate" }, L.DistortableImage.action_map.f = "_freeRotateMode", L.EditAction.prototype.initialize.call(this, i, r, u);
    }, addHooks: function() {
      this._overlay.editing._freeRotateMode();
    } });
  }, 750: function() {
    L.GeolocateAction = L.EditAction.extend({ initialize: function(i, r, u) {
      var o = r.editing;
      (u = u || {}).toolbarIcon = { svg: !0, html: "explore", tooltip: r.options.translation.geolocateImage, className: o._mode === "lock" ? "disabled" : "" }, L.EditAction.prototype.initialize.call(this, i, r, u);
    }, addHooks: function() {
      var i = this._overlay.getElement();
      EXIF.getData(i, L.EXIF(i));
    } });
  }, 366: function() {
    L.LockAction = L.EditAction.extend({ initialize: function(i, r, u) {
      var o, a, c = r.editing;
      c instanceof L.DistortableImage.Edit ? (L.DistortableImage.action_map.u = "_unlock", L.DistortableImage.action_map.l = "_lock", a = r.options.translation.lockMode, o = c.isMode("lock") ? "lock" : "unlock") : (L.DistortableImage.group_action_map.l = "_lockGroup", a = r.options.translation.lockImages, o = "lock"), (u = u || {}).toolbarIcon = { svg: !0, html: o, tooltip: a, className: "lock" }, L.EditAction.prototype.initialize.call(this, i, r, u);
    }, addHooks: function() {
      var i = this._overlay.editing;
      i instanceof L.DistortableImage.Edit ? i._toggleLockMode() : i._lockGroup();
    } });
  }, 107: function() {
    var i = [100, 80, 60, 40, 20, 0], r = new CSSStyleSheet();
    r.replaceSync(`.leaflet-toolbar-icon-vertical {
        box-sizing: border-box !important;
        display: block !important;
        width: 30px !important;
        height: 30px !important;
        line-height: 30px !important;
        padding: 0 !important;
        text-align: center !important;
        text-decoration: none !important;
        background-color: #fff;
        border: inset 0.5px lightgray !important;
        font-size: 12px !important;
        font-weight: bold !important;
        color:#0087A8 !important;
        float: none !important;
        margin: auto !important;
        z-index:900 !important;
      }
    `), r.insertRule(`.leaflet-toolbar-1 li:first-child a {
        border-radius: 4px 4px 0px 0px !important;
    }`), document.adoptedStyleSheets = [r], i = i.map(function(u) {
      return (isNaN(u) || u > 100) && (u = 100), u < 0 && (u = 0), L.EditAction.extend({ options: { toolbarIcon: { html: u, tooltip: "Opacity " + u + "%", className: "leaflet-toolbar-icon-vertical", style: "background-color:rgb(" + (100 - u) + "%," + (100 - u) + "%," + (100 - u) + "%);" } }, addHooks: function() {
        this._overlay.editing._setOpacities(u / 100);
      } });
    }), L.OpacitiesToolbar2 = L.Toolbar2.extend({ options: { className: "", filter: function() {
      return !0;
    }, actions: [], style: "translate(-1px, -".concat(30 * (i.length + 1), "px)") }, appendToContainer: function(u) {
      var o, a, c, f, p = this.constructor.baseClass + "-" + this._calculateDepth() + " " + this.options.className;
      for (this._container = u, this._ul = L.DomUtil.create("ul", p, u), this._ul.style.transform = this.options.style ? this.options.style : "", this._disabledEvents = ["click", "mousemove", "dblclick", "mousedown", "mouseup", "touchstart"], a = 0, f = this._disabledEvents.length; a < f; a++)
        L.DomEvent.on(this._ul, this._disabledEvents[a], L.DomEvent.stopPropagation);
      for (o = 0, c = this.options.actions.length; o < c; o++)
        new (this._getActionConstructor(this.options.actions[o]))()._createIcon(this, this._ul, this._arguments);
    } }), L.OpacitiesAction = L.EditAction.extend({ initialize: function(u, o, a) {
      var c = o.editing._mode;
      (a = a || {}).toolbarIcon = { svg: !0, html: "opacities", tooltip: "Set custom opacity", className: c === "lock" ? "disabled" : "" }, a.subToolbar = new L.OpacitiesToolbar2({ actions: i }), L.DistortableImage.action_map.o = c === "lock" ? "" : "_setOpacities", L.EditAction.prototype.initialize.call(this, u, o, a);
    }, addHooks: function() {
      var u = this, o = this._link;
      L.DomUtil.hasClass(o, "subtoolbar_enabled") ? (L.DomUtil.removeClass(o, "subtoolbar_enabled"), setTimeout(function() {
        u.options.subToolbar._hide();
      }, 100)) : L.DomUtil.addClass(o, "subtoolbar_enabled"), L.IconUtil.toggleXlink(o, "opacities", "cancel"), L.IconUtil.toggleTitle(o, "Make Image Transparent", "Cancel");
    } });
  }, 122: function() {
    L.OpacityAction = L.EditAction.extend({ initialize: function(i, r, u) {
      var o, a, c = r.editing, f = c._mode;
      c._transparent ? (o = "opacity_empty", a = r.options.translation.makeImageOpaque) : (o = "opacity", a = r.options.translation.makeImageTransparent), (u = u || {}).toolbarIcon = { svg: !0, html: o, tooltip: a, className: f === "lock" ? "disabled" : "" }, L.DistortableImage.action_map.o = f === "lock" ? "" : "_toggleOpacity", L.EditAction.prototype.initialize.call(this, i, r, u);
    }, addHooks: function() {
      var i = this._overlay.editing, r = this._link;
      L.IconUtil.toggleXlink(r, "opacity", "opacity_empty"), L.IconUtil.toggleTitle(r, "Make Image Transparent", "Make Image Opaque"), i._toggleOpacity();
    } });
  }, 350: function() {
    L.RestoreAction = L.EditAction.extend({ initialize: function(i, r, u) {
      var o = L.Utils.getNestedVal(r, "editing", "_mode"), a = r.edited;
      (u = u || {}).toolbarIcon = { svg: !0, html: "restore", tooltip: r.options.translation.restoreImage, className: a && o !== "lock" ? "" : "disabled" }, L.EditAction.prototype.initialize.call(this, i, r, u);
    }, addHooks: function() {
      var i = this._overlay;
      L.DomEvent.on(i, { edit: this._enableAction, restore: this._disableAction }, this), i.restore();
    } });
  }, 626: function() {
    L.RotateAction = L.EditAction.extend({ initialize: function(i, r, u) {
      (u = u || {}).toolbarIcon = { svg: !0, html: "rotate", tooltip: r.options.translation.rotateImage, className: "rotate" }, L.DistortableImage.action_map.r = "_rotateMode", L.EditAction.prototype.initialize.call(this, i, r, u);
    }, addHooks: function() {
      this._overlay.editing._rotateMode();
    } });
  }, 680: function() {
    L.ScaleAction = L.EditAction.extend({ initialize: function(i, r, u) {
      (u = u || {}).toolbarIcon = { svg: !0, html: "scale", tooltip: r.options.translation.scaleImage, className: "scale" }, L.DistortableImage.action_map.s = "_scaleMode", L.EditAction.prototype.initialize.call(this, i, r, u);
    }, addHooks: function() {
      this._overlay.editing._scaleMode();
    } });
  }, 725: function() {
    L.StackAction = L.EditAction.extend({ initialize: function(i, r, u) {
      var o, a, c = r.editing;
      c._toggledImage ? (o = "flip_to_back", a = r.options.translation.stackToFront) : (o = "flip_to_front", a = r.options.translation.stackToBack), (u = u || {}).toolbarIcon = { svg: !0, html: o, tooltip: a, className: c._mode === "lock" ? "disabled" : "" }, L.DistortableImage.action_map.q = c._mode === "lock" ? "" : "_stackUp", L.DistortableImage.action_map.a = c._mode === "lock" ? "" : "_stackDown", L.EditAction.prototype.initialize.call(this, i, r, u);
    }, addHooks: function() {
      var i = this._overlay.editing;
      L.IconUtil.toggleXlink(this._link, "flip_to_front", "flip_to_back"), L.IconUtil.toggleTitle(this._link, "Stack to Front", "Stack to Back"), i._toggleOrder();
    } });
  }, 53: function() {
    L.UnlockAction = L.EditAction.extend({ initialize: function(i, r, u) {
      (u = u || {}).toolbarIcon = { svg: !0, html: "unlock", tooltip: r.options.translation.unlockImages }, L.DistortableImage.group_action_map.u = "_unlockGroup", L.EditAction.prototype.initialize.call(this, i, r, u);
    }, addHooks: function() {
      this._overlay.editing._unlockGroup();
    } });
  }, 797: function() {
    L.EXIF = function(i) {
      if (Object.keys(EXIF.getAllTags(i)).length !== 0) {
        console.log(EXIF.getAllTags(i));
        var r = EXIF.getAllTags(i);
        r.GPSLatitude !== void 0 && r.GPSLongitude !== void 0 && (r.GPSLatitude[0], r.GPSLatitude[1], r.GPSLatitude[2], r.GPSLongitude[0], r.GPSLongitude[1], r.GPSLongitude[2], r.GPSLatitudeRef, r.GPSLongitudeRef), r.GPSImgDirectionRef === "T" || r.GPSImgDirectionRef === "M" ? (r.GPSImgDirection.numerator, r.GPSImgDirection.denominator) : console.log("No compass data found"), console.log("Orientation:", r.Orientation), r.Orientation === 6 || r.Orientation === 8 || r.Orientation, r.GPSAltitude !== void 0 && r.GPSAltitudeRef !== void 0 && r.GPSAltitude !== void 0 && r.GPSAltitudeRef !== void 0 && (r.GPSAltitude.numerator, r.GPSAltitude.denominator, r.GPSAltitudeRef);
      } else
        alert("EXIF initialized. Press again to view data in console.");
    };
  }, 176: function() {
    L.DistortHandle = L.EditHandle.extend({ options: { TYPE: "distort", icon: L.icon({ iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAklEQVR4AewaftIAAAChSURBVO3BIU4DURgGwNkvL2B6AkQTLBqP4QCoSm7DDXoBLBZHDbfgICAIZjEV3YTn9uVHdMZZtcnCfI13bIzxg0emg6Nm6QVbYz3jylEsXRrvwommb49X67jFkz80fR9Mb1YxTzqiWBSLYlEsikWxKBbFolgUi2JRLIpFsSgWxaJY03fHHOu40dH07bAzWCx9Ge/TiWbpHgdsjPGNB2f/yS+7xRCyiiZPJQAAAABJRU5ErkJggg==", iconSize: [32, 32], iconAnchor: [16, 16] }) }, _onHandleDrag: function() {
      this._handled.setCorner(this._corner, this.getLatLng());
    }, updateHandle: function() {
      this.setLatLng(this._handled.getCorner(this._corner));
    } }), L.distortHandle = function(i, r, u) {
      return new L.DistortHandle(i, r, u);
    };
  }, 342: function() {
    L.DragHandle = L.EditHandle.extend({ options: { TYPE: "drag", icon: L.icon({ iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAsVJREFUeNrMVztLXEEUvnNVFAVBAhY2aRKbTZEHJNpYabuNjSgYg/GxdsmPSJkUAa/ZdVEX8mgWYVutbHxAHkVskjQBuUUgBISVhCQk3wnfwMlk1rusN1wHPubOzJlzvjlz5sxc01Ma/hUEwQnwDIjqc7uvgv9YYO86qgIwCXQbdNTlQ8kcCBHgBch8TcloF6oJGr6phk6EQAkfdz3zvgDr9Mr7Fg1fptEZoM8jsmrokpfsiIFO4IIjuE2v1EDmR4LRdlR5Gh51hj8D34ABtm8YTtqna0TgklIw5CgQguKxIojEjmFROg/MKQO27NkFAB+4wAPouGUJiIvWKHwbAxX2XyWRKWkqhT+pbJntJZJuUzISW0+5hW+obxrVBsfvoH/dqCCJuU97GBh2VteLSiYvArmErT8EVoAK9Bw7enbpVYmvAQlyowYforrH5jXL2rPHI/TKONDB7u9AlavdaTBPvPmazUeQuy8f7UomUgTEwIJPEQ3sQGE/6ll2l9H/KcEzBcfWn2IclluM3DpddJxSHujlFkscbUPvmB0LHVnLrId7nlaZVkEc6QGXQI1MAwZcWmVRHeNaQwJMMiU2cwy4s7p/RJ2ckpvIQs+cIs+5GzitloLKHUV3MPREuXbTOKO91dX387gGTONxIgEWm+E61FFrpcyqXLHsEwiDjEsjAksqw5XPoL9MHVrn6QR4q+XZrDaR4RoWzq2ymafuRA/Mq1stSsHLVkcbdf9VjOcx8ZH3+SFWcCWlVPyWuUBOwUWdC1wP5NVjYiXFWLO69PZ6CRTUY6KSIoEKdf6T3IzzgHxnsyHctNBEkmn6Oob8ExUDg/ahGybd177cDjzH5xHwgDiSvoS7I/LZyvxJZj0wod7tkX5G0XVC7rEyLhfLJjBGbKoLLEfZWObyKeZ6oY82g+yf5Zn/mJyHX7PMf04z/T3/LcAAu4E6iiyJqf0AAAAASUVORK5CYII=", iconSize: [32, 32], iconAnchor: [16, 16] }) }, _onHandleDrag: function() {
      var i = this._handled, r = i.getCorner(this._corner), u = this.getLatLng();
      i.dragBy(r, u);
    }, updateHandle: function() {
      this.setLatLng(this._handled.getCorner(this._corner));
    } }), L.dragHandle = function(i, r, u) {
      return new L.DragHandle(i, r, u);
    };
  }, 664: function() {
    L.EditHandle = L.Marker.extend({ initialize: function(i, r, u) {
      var o = i.getCorner(r);
      L.setOptions(this, u), this._handled = i, this._corner = r;
      var a = { draggable: !0, zIndexOffset: 10 };
      u && u.hasOwnProperty("draggable") && (a.draggable = u.draggable), L.Marker.prototype.initialize.call(this, o, a);
    }, onAdd: function(i) {
      L.Marker.prototype.onAdd.call(this, i), this._bindListeners(), this.updateHandle();
    }, onRemove: function(i) {
      this._unbindListeners(), L.Marker.prototype.onRemove.call(this, i);
    }, _onHandleDragStart: function() {
      this._handled.fire("editstart");
    }, _onHandleDragEnd: function() {
      this._fireEdit();
    }, _fireEdit: function() {
      this._handled.edited = !0, this._handled.fire("edit");
    }, _bindListeners: function() {
      this.on({ contextmenu: L.DomEvent.stop, dragstart: this._onHandleDragStart, drag: this._onHandleDrag, dragend: this._onHandleDragEnd }, this), this._handled._map.on("zoomend", this.updateHandle, this), this._handled.on("update", this.updateHandle, this);
    }, _unbindListeners: function() {
      this.off({ contextmenu: L.DomEvent.stop, dragstart: this._onHandleDragStart, drag: this._onHandleDrag, dragend: this._onHandleDragEnd }, this), this._handled._map.off("zoomend", this.updateHandle, this), this._handled.off("update", this.updateHandle, this);
    }, _calculateScalingFactor: function(i, r) {
      var u = this._handled, o = u._map, a = o.latLngToLayerPoint(u.getCenter()), c = o.latLngToLayerPoint(i), f = o.latLngToLayerPoint(r), p = this._d2(a, c), v = this._d2(a, f);
      return Math.sqrt(v / p);
    }, _d2: function(i, r) {
      var u = i.x - r.x, o = i.y - r.y;
      return Math.pow(u, 2) + Math.pow(o, 2);
    }, calculateAngleDelta: function(i, r) {
      var u = this._handled, o = u._map, a = o.latLngToLayerPoint(u.getCenter()), c = o.latLngToLayerPoint(i), f = o.latLngToLayerPoint(r), p = Math.atan2(a.y - c.y, a.x - c.x);
      return Math.atan2(a.y - f.y, a.x - f.x) - p;
    } });
  }, 278: function() {
    L.FreeRotateHandle = L.EditHandle.extend({ options: { TYPE: "freeRotate", icon: L.icon({ iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAklEQVR4AewaftIAAAHiSURBVMXBa3HbShgA0PMp/1sCCo8oCEpgTaCXgIXAJiDzyCJoAUTm4UVQAns1Y8+snWnTvJyeE16hkjDgDrfoNTMKcpC9UPiLSo8JyetkjEHxjPCMyoS199kFoz8Iv1HpMaN3qWDCHoegOKkkRwnJpRmroHgiPFEZ8IBekzEGxQtUEhKSS/fB7Ew4U+lxcGkVZG9QWWPSFAxBcdK59KApuA+yNwp2uEdx1GN25sZJZULSfAtm77SlbNjju6MvG75u+WHRWVR6rDVjMPsgwYyVZl3pLTpHkyYHOx8syMiayaJzlDTZ9YyaZNFVkiYH2ZUEBcVJJXVImuz6Js3Qofe59pq7DoOTILu+g+a288mCouk7/1iH4qTS+2QdDppbV1ZJmrnDXnPnc5UOs2Z0fUmTuyBr+krvSioJyUmQO0dZM7mepMkWnaNRkyrJB6uskTSjxY3Fll8bvmJwlDb83FJ8gMqAB80uyBY3Trb82PAfvjj6vuHnluIdKgMeNXOwctK5NKBoHitrb1RJeHRp5Ux4ojLg0aWMHGQvUOkxIWkKVsHsTPiNSo8HDC5lZIsgO6n0uMUdRvQuFQxB8UR4RmXC2vvsgtEfhL+o9JiQvE7GGBTPCK9QSUjoMWgKDthjDrIX+h/k0I7gth6N5gAAAABJRU5ErkJggg==", iconSize: [32, 32], iconAnchor: [16, 16] }) }, _onHandleDrag: function() {
      var i = this._handled, r = i._map, u = i.getCorner(this._corner), o = this.getLatLng(), a = this.calculateAngleDelta(u, o), c = this._calculateScalingFactor(u, o);
      a !== 0 && i.rotateBy(a, "rad");
      var f = i.edgeMinWidth;
      f || (f = 50);
      var p = r.latLngToContainerPoint(i.getCorner(0)), v = r.latLngToContainerPoint(i.getCorner(1)), y = Math.abs(p.x - v.x), x = Math.abs(p.y - v.y);
      Math.sqrt(y * y + x * x) > f || c > 1 ? i.scaleBy(c) : i.scaleBy(1);
    }, updateHandle: function() {
      this.setLatLng(this._handled.getCorner(this._corner));
    } }), L.freeRotateHandle = function(i, r, u) {
      return new L.FreeRotateHandle(i, r, u);
    };
  }, 66: function() {
    L.LockHandle = L.EditHandle.extend({ options: { TYPE: "lock", interactive: !1, icon: L.icon({ iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAklEQVR4AewaftIAAAD8SURBVO3BPU7CYAAA0AdfjIcQlRCQBG7C3gk2uIPG2RC3Dk16Gz0FTO1WZs/gwGCMP/2+xsSl7+n1er1Iz9LtRQjaPeMeO+TinLDCJV78YqjdA04YodKuxhUaPGoRxMmxwRQZSt87Yo4KExGCeAUyLLFB4bMacxywEClIU2KDKXbInTUYo8JCgoFuGoxQO5uiwY1EA91VmDqrcKeDoX8WdNNgjApvmGGLXKIgXY0xGkxQYItrrFFIEKQ5Yo4KEx9yrDFDhlKkIF6NOQ5Y+KpAhiXWKEQI4pxwiwoLPyuxwQw75FoE7fZYocFEuwI7jHCBV39gL92TXq/Xi/AOcmczZmaIMScAAAAASUVORK5CYII=", iconSize: [32, 32], iconAnchor: [16, 16] }) }, onRemove: function(i) {
      this.unbindTooltip(), L.EditHandle.prototype.onRemove.call(this, i);
    }, _bindListeners: function() {
      var i = this.getElement();
      L.EditHandle.prototype._bindListeners.call(this), L.DomEvent.on(i, { mousedown: this._tooltipOn, mouseup: this._tooltipOff }, this), L.DomEvent.on(document, "pointerleave", this._tooltipOff, this);
    }, _unbindListeners: function() {
      var i = this.getElement();
      L.EditHandle.prototype._bindListeners.call(this), L.DomEvent.off(i, { mousedown: this._tooltipOn, mouseup: this._tooltipOff }, this), L.DomEvent.off(document, "pointerleave", this._tooltipOff, this);
    }, _onHandleDrag: function() {
    }, updateHandle: function() {
      this.setLatLng(this._handled.getCorner(this._corner));
    }, _tooltipOn: function(i) {
      var r = this._handled.parentGroup, u = r ? r.editing : this._handled.editing;
      if (!i.shiftKey && (this._handled.isSelected() || !r || r.isCollected(this._handled))) {
        var o = u._lockHandles;
        this._timer = setTimeout(L.bind(function() {
          this._timeout && clearTimeout(this._timeout), this.getTooltip() ? o.eachLayer(function(a) {
            this !== a && a.closeTooltip();
          }) : this.bindTooltip("Locked!", { permanent: !0 }), this.openTooltip();
        }, this), 500);
      }
    }, _tooltipOff: function(i) {
      var r = this._handled.parentGroup, u = r ? r.editing : this._handled.editing;
      if (!i.shiftKey && (this._handled.isSelected() || !r || r.isCollected(this._handled))) {
        var o = u._lockHandles;
        i.currentTarget === document && o.eachLayer(function(a) {
          a.closeTooltip();
        }), this._timer && clearTimeout(this._timer), this._timeout = setTimeout(L.bind(function() {
          this.closeTooltip();
        }, this), 400);
      }
    } }), L.lockHandle = function(i, r, u) {
      return new L.LockHandle(i, r, u);
    };
  }, 416: function() {
    L.RotateHandle = L.EditHandle.extend({ options: { TYPE: "rotate", icon: L.icon({ iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAklEQVR4AewaftIAAAHiSURBVMXBa3HbShgA0PMp/1sCCo8oCEpgTaCXgIXAJiDzyCJoAUTm4UVQAns1Y8+snWnTvJyeE16hkjDgDrfoNTMKcpC9UPiLSo8JyetkjEHxjPCMyoS199kFoz8Iv1HpMaN3qWDCHoegOKkkRwnJpRmroHgiPFEZ8IBekzEGxQtUEhKSS/fB7Ew4U+lxcGkVZG9QWWPSFAxBcdK59KApuA+yNwp2uEdx1GN25sZJZULSfAtm77SlbNjju6MvG75u+WHRWVR6rDVjMPsgwYyVZl3pLTpHkyYHOx8syMiayaJzlDTZ9YyaZNFVkiYH2ZUEBcVJJXVImuz6Js3Qofe59pq7DoOTILu+g+a288mCouk7/1iH4qTS+2QdDppbV1ZJmrnDXnPnc5UOs2Z0fUmTuyBr+krvSioJyUmQO0dZM7mepMkWnaNRkyrJB6uskTSjxY3Fll8bvmJwlDb83FJ8gMqAB80uyBY3Trb82PAfvjj6vuHnluIdKgMeNXOwctK5NKBoHitrb1RJeHRp5Ux4ojLg0aWMHGQvUOkxIWkKVsHsTPiNSo8HDC5lZIsgO6n0uMUdRvQuFQxB8UR4RmXC2vvsgtEfhL+o9JiQvE7GGBTPCK9QSUjoMWgKDthjDrIX+h/k0I7gth6N5gAAAABJRU5ErkJggg==", iconSize: [32, 32], iconAnchor: [16, 16] }) }, _onHandleDrag: function() {
      var i = this._handled, r = i.getCorner(this._corner), u = this.getLatLng(), o = this.calculateAngleDelta(r, u);
      i.rotateBy(o, "rad");
    }, updateHandle: function() {
      this.setLatLng(this._handled.getCorner(this._corner));
    } }), L.rotateHandle = function(i, r, u) {
      return new L.RotateHandle(i, r, u);
    };
  }, 24: function() {
    L.ScaleHandle = L.EditHandle.extend({ options: { TYPE: "scale", icon: L.icon({ iconUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI0NTkiIGhlaWdodD0iNDY0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iIj48cmVjdCBpZD0iYmFja2dyb3VuZHJlY3QiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHg9IjAiIHk9IjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgY2xhc3M9IiIgc3R5bGU9IiIvPjxnIGNsYXNzPSJjdXJyZW50TGF5ZXIiIHN0eWxlPSIiPjx0aXRsZT5MYXllciAxPC90aXRsZT48cGF0aCBkPSJNNDU5LjA0OTE1OTUzMDQ3MTM0LDg2LjkyNjIzNDUxMjU1MDAyIFYwIGgtODUuNzE0NTczMzU2MzEyMDkgdjI3LjA0MzcxNzQwMzkwNDQ1MiBIODUuNzE0NTczMzU2MzEyMDMgVjAgSDAgdjg2LjkyNjIzNDUxMjU1MDAyIGgyNS43MTQzNzIwMDY4OTM2MjYgdjI4OS43NTQxMTUwNDE4MzM0IEgwIHY4Ni45MjYyMzQ1MTI1NTAwMiBoODUuNzE0NTczMzU2MzEyMDkgdi0yNy4wNDM3MTc0MDM5MDQ0NTIgaDI4NS43MTUyNDQ1MjEwNDAzIHYyNy4wNDM3MTc0MDM5MDQ0NTIgaDg1LjcxNDU3MzM1NjMxMjA5IHYtODYuOTI2MjM0NTEyNTUwMDIgaC0yMy44MDk2MDM3MTAwODY2OSBWODYuOTI2MjM0NTEyNTUwMDIgSDQ1OS4wNDkxNTk1MzA0NzEzNCB6TTM4NC43NjMxOTU5NTUwMDA5LDEyLjU1NjAxMTY1MTgxMjc4MSBoNjEuOTA0OTY5NjQ2MjI1Mzk2IHY2Mi43ODAwNTgyNTkwNjM5MSBoLTYxLjkwNDk2OTY0NjIyNTM5NiBWMTIuNTU2MDExNjUxODEyNzgxIHpNMTIuMzgwOTkzOTI5MjQ1MDUsMTIuNTU2MDExNjUxODEyNzgxIGg2MS45MDQ5Njk2NDYyMjUzOTYgdjYyLjc4MDA1ODI1OTA2MzkxIEgxMi4zODA5OTM5MjkyNDUwNSBWMTIuNTU2MDExNjUxODEyNzgxIHpNNzQuMjg1OTYzNTc1NDcwNTMsNDUxLjA1MDU3MjQxNTEyMDY2IEgxMi4zODA5OTM5MjkyNDUwNSB2LTYyLjc4MDA1ODI1OTA2MzkxIGg2MS45MDQ5Njk2NDYyMjUzOTYgVjQ1MS4wNTA1NzI0MTUxMjA2NiB6TTQ0NS43MTU3ODE0NTI4MjI3NCw0NTEuMDUwNTcyNDE1MTIwNjYgaC02Mi44NTczNTM3OTQ2Mjg4NjQgdi02Mi43ODAwNTgyNTkwNjM5MSBoNjIuODU3MzUzNzk0NjI4ODY0IFY0NTEuMDUwNTcyNDE1MTIwNjYgek00MDcuNjIwNDE1NTE2Njg0MjYsMzc2LjY4MDM0OTU1NDM4MzQ0IGgtMzYuMTkwNTk3NjM5MzMxNzcgdjMyLjgzODc5OTcwNDc0MTEyIEg4NS43MTQ1NzMzNTYzMTIwMyB2LTMyLjgzODc5OTcwNDc0MTEyIEg0OS41MjM5NzU3MTY5ODAzMiBWODYuOTI2MjM0NTEyNTUwMDIgaDM2LjE5MDU5NzYzOTMzMTc3IFY1MC4yMjQwNDY2MDcyNTExMjUgaDI4Ny42MjAwMTI4MTc4NDcyIHYzNi43MDIxODc5MDUyOTg5IGgzNC4yODU4MjkzNDI1MjQ4MzUgVjM3Ni42ODAzNDk1NTQzODM0NCB6IiBpZD0ic3ZnXzIiIGNsYXNzPSIiIGZpbGw9IiMxYTFhZWIiIGZpbGwtb3BhY2l0eT0iMSIvPjwvZz48L3N2Zz4=", iconSize: [32, 32], iconAnchor: [16, 16] }) }, _onHandleDrag: function() {
      var i = this._handled, r = i._map, u = i.edgeMinWidth, o = i.getCorner(this._corner), a = this.getLatLng(), c = this._calculateScalingFactor(o, a);
      u || (u = 50);
      var f = r.latLngToLayerPoint(i.getCorner(0)), p = r.latLngToLayerPoint(i.getCorner(1)), v = Math.abs(f.x - p.x), y = Math.abs(f.y - p.y);
      Math.sqrt(v * v + y * y) > u || c > 1 ? i.scaleBy(c) : i.scaleBy(1);
    }, updateHandle: function() {
      this.setLatLng(this._handled.getCorner(this._corner));
    } }), L.scaleHandle = function(i, r, u) {
      return new L.ScaleHandle(i, r, u);
    };
  }, 784: function() {
    L.distortableImage = L.DistortableImage || {}, L.distortableImage = L.DistortableImage, L.DistortableImage.group_action_map = {}, L.DistortableImage.ControlBar = L.Toolbar2.Control.extend({}), L.distortableImage.controlBar = function(i) {
      return new L.DistortableImage.ControlBar(i);
    }, L.DistortableCollection.addInitHook(function() {
      this.ACTIONS = [L.ExportAction, L.DeleteAction, L.LockAction, L.UnlockAction], L.DistortableCollection.Edit.MODES = { lock: L.LockAction, unlock: L.UnlockAction };
      var i = this.options.actions ? this.options.actions : this.ACTIONS;
      this.editing = L.distortableCollection.edit(this, { actions: i });
    });
  }, 514: function() {
    L.DistortableImage = L.DistortableImage || {}, L.distortableImage = L.DistortableImage, L.DistortableImage.action_map = {}, L.DistortableImage.PopupBar = L.Toolbar2.Popup.extend({ options: { anchor: [0, -10] }, initialize: function(i, r) {
      L.setOptions(this, r), L.Toolbar2.Popup.prototype.initialize.call(this, i, r);
    }, addHooks: function(i, r) {
      this.map = i, this.ov = r;
    }, tools: function() {
      if (this._ul)
        return this._ul.children;
    }, clickTool: function(i) {
      for (var r = this.tools(), u = 0; u < r.length; u++) {
        var o = r.item(u).children[0];
        if (L.DomUtil.hasClass(o, i))
          return o.click(), o;
      }
      return !1;
    } }), L.distortableImage.popupBar = function(i, r) {
      return new L.DistortableImage.PopupBar(i, r);
    }, L.DistortableImageOverlay.addInitHook(function() {
      this.ACTIONS = [L.DragAction, L.ScaleAction, L.DistortAction, L.RotateAction, L.FreeRotateAction, L.LockAction, L.OpacityAction, L.OpacitiesAction, L.BorderAction, L.ExportAction, L.DeleteAction], L.DistortableImage.Edit.MODES = { drag: L.DragAction, scale: L.ScaleAction, distort: L.DistortAction, rotate: L.RotateAction, freeRotate: L.FreeRotateAction, lock: L.LockAction };
      var i = this.options.actions ? this.options.actions : this.ACTIONS;
      this.editing = L.distortableImage.edit(this, { actions: i });
    });
  }, 876: function() {
    L.IconSet = L.Class.extend({ _svg: '<svg xmlns="http://www.w3.org/2000/svg">', _symbols: "", render: function() {
      return this.addSymbols(this._symbols), this._svg;
    }, addSymbols: function(i) {
      this._svg += i;
    } });
  }, 16: function() {
    L.KeymapperIconSet = L.IconSet.extend({ _symbols: '<symbol viewBox="0 0 25 25" id="keyboard_open"><path d="M12 23l4-4H8l4 4zm7-15h-2V6h2v2zm0 3h-2V9h2v2zm-3-3h-2V6h2v2zm0 3h-2V9h2v2zm0 4H8v-2h8v2zM7 8H5V6h2v2zm0 3H5V9h2v2zm1-2h2v2H8V9zm0-3h2v2H8V6zm3 3h2v2h-2V9zm0-3h2v2h-2V6zm9-3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></symbol>' });
  }, 928: function() {
    L.ToolbarIconSet = L.IconSet.extend({ _symbols: '<symbol viewBox="0 0 18 18" id="border_clear"><path d="M5.25 3.75h1.5v-1.5h-1.5v1.5zm0 6h1.5v-1.5h-1.5v1.5zm0 6h1.5v-1.5h-1.5v1.5zm3-3h1.5v-1.5h-1.5v1.5zm0 3h1.5v-1.5h-1.5v1.5zm-6 0h1.5v-1.5h-1.5v1.5zm0-3h1.5v-1.5h-1.5v1.5zm0-3h1.5v-1.5h-1.5v1.5zm0-3h1.5v-1.5h-1.5v1.5zm0-3h1.5v-1.5h-1.5v1.5zm6 6h1.5v-1.5h-1.5v1.5zm6 3h1.5v-1.5h-1.5v1.5zm0-3h1.5v-1.5h-1.5v1.5zm0 6h1.5v-1.5h-1.5v1.5zm0-9h1.5v-1.5h-1.5v1.5zm-6 0h1.5v-1.5h-1.5v1.5zm6-4.5v1.5h1.5v-1.5h-1.5zm-6 1.5h1.5v-1.5h-1.5v1.5zm3 12h1.5v-1.5h-1.5v1.5zm0-6h1.5v-1.5h-1.5v1.5zm0-6h1.5v-1.5h-1.5v1.5z"/></symbol><symbol viewBox="0 0 18 18" id="border_outer"><path d="M9.75 5.25h-1.5v1.5h1.5v-1.5zm0 3h-1.5v1.5h1.5v-1.5zm3 0h-1.5v1.5h1.5v-1.5zm-10.5-6v13.5h13.5V2.25H2.25zm12 12H3.75V3.75h10.5v10.5zm-4.5-3h-1.5v1.5h1.5v-1.5zm-3-3h-1.5v1.5h1.5v-1.5z"/></symbol><symbol viewBox="0 0 18 18" id="cancel"><path d="M13.279 5.779l-1.058-1.058L9 7.942 5.779 4.721 4.721 5.779 7.942 9l-3.221 3.221 1.058 1.058L9 10.057l3.221 3.222 1.058-1.058L10.057 9z"/></symbol><symbol viewBox="0 0 18 18" id="crop_rotate"><path d="M5.603 16.117C3.15 14.947 1.394 12.57 1.125 9.75H0C.383 14.37 4.245 18 8.963 18c.172 0 .33-.015.495-.023L6.6 15.113l-.997 1.005zM9.037 0c-.172 0-.33.015-.495.03L11.4 2.888l.998-.998a7.876 7.876 0 0 1 4.477 6.36H18C17.617 3.63 13.755 0 9.037 0zM12 10.5h1.5V6A1.5 1.5 0 0 0 12 4.5H7.5V6H12v4.5zM6 12V3H4.5v1.5H3V6h1.5v6A1.5 1.5 0 0 0 6 13.5h6V15h1.5v-1.5H15V12H6z"/></symbol><symbol viewBox="0 0 18 18" id="delete_forever"><path d="M4.5 14.25c0 .825.675 1.5 1.5 1.5h6c.825 0 1.5-.675 1.5-1.5v-9h-9v9zm1.845-5.34l1.058-1.058L9 9.443l1.59-1.59 1.058 1.058-1.59 1.59 1.59 1.59-1.058 1.058L9 11.558l-1.59 1.59-1.058-1.058 1.59-1.59-1.597-1.59zM11.625 3l-.75-.75h-3.75l-.75.75H3.75v1.5h10.5V3h-2.625z"/></symbol><symbol viewBox="0 0 18 18" id="distort"><path d="M1.7 1.4H6v1.4h5.8V1.4h4.3v4.3h-1.4v5.8h1.4v4.4h-4.3v-1.5H6v1.5H1.7v-4.4h1.4V5.7H1.7V1.4zm10.1 4.3V4.3H6v1.4H4.6v5.8H6V13h5.8v-1.5h1.4V5.7h-1.4zM3.1 2.8v1.5h1.5V2.8H3.1zm10.1 0v1.5h1.5V2.8h-1.5zM3.1 13v1.4h1.5V13H3.1zm10.1 0v1.4h1.5V13h-1.5z"/></symbol><symbol viewBox="0 0 18 18" id="explore"><path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 4.14 3.36 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5 0-4.14-3.36-7.5-7.5-7.5zM9 15c-3.308 0-6-2.693-6-6 0-3.308 2.692-6 6-6 3.307 0 6 2.692 6 6 0 3.307-2.693 6-6 6zm-4.125-1.875l5.633-2.617 2.617-5.633-5.633 2.617-2.617 5.633zM9 8.175c.457 0 .825.367.825.825A.823.823 0 0 1 9 9.825.823.823 0 0 1 8.175 9c0-.457.367-.825.825-.825z"/></symbol><symbol viewBox="0 0 18 18" id="flip_to_back"><path d="M6.75 5.25h-1.5v1.5h1.5v-1.5zm0 3h-1.5v1.5h1.5v-1.5zm0-6a1.5 1.5 0 0 0-1.5 1.5h1.5v-1.5zm3 9h-1.5v1.5h1.5v-1.5zm4.5-9v1.5h1.5c0-.825-.675-1.5-1.5-1.5zm-4.5 0h-1.5v1.5h1.5v-1.5zm-3 10.5v-1.5h-1.5a1.5 1.5 0 0 0 1.5 1.5zm7.5-3h1.5v-1.5h-1.5v1.5zm0-3h1.5v-1.5h-1.5v1.5zm0 6c.825 0 1.5-.675 1.5-1.5h-1.5v1.5zm-10.5-7.5h-1.5v9a1.5 1.5 0 0 0 1.5 1.5h9v-1.5h-9v-9zm7.5-1.5h1.5v-1.5h-1.5v1.5zm0 9h1.5v-1.5h-1.5v1.5z"/></symbol><symbol viewBox="0 0 18 18" id="flip_to_front"><path d="M2.25 9.75h1.5v-1.5h-1.5v1.5zm0 3h1.5v-1.5h-1.5v1.5zm1.5 3v-1.5h-1.5a1.5 1.5 0 0 0 1.5 1.5zm-1.5-9h1.5v-1.5h-1.5v1.5zm9 9h1.5v-1.5h-1.5v1.5zm3-13.5h-7.5a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h7.5c.825 0 1.5-.675 1.5-1.5v-7.5c0-.825-.675-1.5-1.5-1.5zm0 9h-7.5v-7.5h7.5v7.5zm-6 4.5h1.5v-1.5h-1.5v1.5zm-3 0h1.5v-1.5h-1.5v1.5z"/></symbol><symbol viewBox="0 0 18 18" id="get_app"><path d="M14.662 6.95h-3.15v-4.5H6.787v4.5h-3.15L9.15 12.2l5.512-5.25zM3.637 13.7v1.5h11.025v-1.5H3.637z"/></symbol><symbol viewBox="0 0 18 18" id="lock"><path d="M13.5 6h-.75V4.5C12.75 2.43 11.07.75 9 .75 6.93.75 5.25 2.43 5.25 4.5V6H4.5C3.675 6 3 6.675 3 7.5V15c0 .825.675 1.5 1.5 1.5h9c.825 0 1.5-.675 1.5-1.5V7.5c0-.825-.675-1.5-1.5-1.5zM6.75 4.5A2.247 2.247 0 0 1 9 2.25a2.247 2.247 0 0 1 2.25 2.25V6h-4.5V4.5zM13.5 15h-9V7.5h9V15zM9 12.75c.825 0 1.5-.675 1.5-1.5s-.675-1.5-1.5-1.5-1.5.675-1.5 1.5.675 1.5 1.5 1.5z"/></symbol><symbol viewBox="0 0 18 18" id="opacity"><path d="M13.245 6L9 1.763 4.755 6A6.015 6.015 0 0 0 3 10.23c0 1.5.585 3.082 1.755 4.252a5.993 5.993 0 0 0 8.49 0A6.066 6.066 0 0 0 15 10.23c0-1.5-.585-3.06-1.755-4.23zM4.5 10.5c.008-1.5.465-2.453 1.32-3.3L9 3.952l3.18 3.285c.855.84 1.313 1.763 1.32 3.263h-9z"/></symbol><symbol viewBox="0 0 14 18" id="opacity_empty"><path stroke="#0078A8" stroke-width="1.7" d="M10.708 6.25A5.113 5.113 0 0 1 12.2 9.846c0 1.275-.497 2.62-1.492 3.614a5.094 5.094 0 0 1-7.216 0A5.156 5.156 0 0 1 2 9.846c0-1.275.497-2.601 1.492-3.596L7.1 2.648l3.608 3.602zm0 0L7.1 2.648 3.492 6.25A5.113 5.113 0 0 0 2 9.846c0 1.275.497 2.62 1.492 3.614a5.094 5.094 0 0 0 7.216 0A5.156 5.156 0 0 0 12.2 9.846a5.113 5.113 0 0 0-1.492-3.596z"/></symbol><symbol viewBox="0 0 14 18" id="opacities"><g fill="#0078a8"><path d="m2.1 10.85c.2.98.68 1.89 1.39 2.61 0 0 .01.01.01.01.99.99 2.3 1.49 3.6 1.49h.01c1.3 0 2.6-.5 3.59-1.5.73-.73 1.19-1.66 1.39-2.61z" opacity=".75"/><path d="m2 9.85c0 .34.04.68.1 1.01h9.99c.07-.34.11-.67.11-1.01 0-1.13-.4-2.21-1.08-3.09h-8.04c-.7.91-1.08 2.01-1.08 3.09z" opacity=".5"/><path d="m3.08 6.75h8.03c-.13-.17-.26-.35-.41-.5l-3.6-3.6-3.61 3.6c-.15.16-.27.33-.41.5z" opacity=".25"/></g><path d="m10.71 6.25c.95.96 1.49 2.25 1.49 3.6 0 1.27-.5 2.62-1.49 3.61-1.99 1.99-5.21 2-7.2.01 0 0-.01-.01-.01-.01-.96-.96-1.5-2.26-1.5-3.61 0-1.27.5-2.6 1.49-3.6l3.61-3.6z" fill="none" stroke="#0078a8" stroke-width=".1"/><path d="m10.71 6.25c.95.96 1.49 2.25 1.49 3.6 0 1.27-.5 2.62-1.49 3.61-1.99 1.99-5.21 2-7.2.01 0 0-.01-.01-.01-.01-.96-.96-1.5-2.26-1.5-3.61 0-1.27.5-2.6 1.49-3.6l3.61-3.6z" fill="none" stroke="#0078a8" stroke-width="1.7"/></symbol><symbol viewBox="0 0 18 18" id="restore"><path d="M15.67 3.839a.295.295 0 0 0-.22.103l-5.116 3.249V4.179a.342.342 0 0 0-.193-.315.29.29 0 0 0-.338.078L3.806 7.751v-4.63h-.002l.002-.022c0-.277-.204-.502-.456-.502h-.873V2.6c-.253 0-.457.225-.457.503l.002.026v10.883h.005c.021.257.217.454.452.455l.016-.002h.822c.013.001.025.004.038.004.252 0 .457-.225.457-.502a.505.505 0 0 0-.006-.068V9.318l6.001 3.811a.288.288 0 0 0 .332.074.34.34 0 0 0 .194-.306V9.878l5.12 3.252a.288.288 0 0 0 .332.073.34.34 0 0 0 .194-.306V4.18a.358.358 0 0 0-.09-.24.296.296 0 0 0-.218-.1z"/></symbol><symbol viewBox="0 0 18 18" id="rotate"><path d="M5.505 4.808L.645 9.675l4.867 4.86 4.868-4.86-4.875-4.868zM2.768 9.675L5.513 6.93 8.25 9.675 5.505 12.42 2.768 9.675zM14.52 4.98A6.713 6.713 0 009.75 3V.57L6.57 3.75l3.18 3.18V4.5a5.23 5.23 0 013.713 1.537 5.255 5.255 0 010 7.426 5.23 5.23 0 01-5.843 1.08L6.503 15.66a6.76 6.76 0 003.247.84c1.725 0 3.457-.66 4.77-1.98a6.735 6.735 0 000-9.54z"/></symbol><symbol viewBox="0 0 18 18" id="scale"><path d="M8.25 9h-6a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-6A.75.75 0 008.25 9zm-.75 6H3v-4.5h4.5V15zm8.94-13.035a.75.75 0 00-.405-.405.75.75 0 00-.285-.06h-4.5a.75.75 0 000 1.5h2.692L9.967 6.968a.75.75 0 000 1.064.75.75 0 001.065 0L15 4.057V6.75a.75.75 0 101.5 0v-4.5a.75.75 0 00-.06-.285z" /></symbol><symbol viewBox="0 0 18 18" id="spinner"><path d="M9 6.48c-.216 0-.36-.144-.36-.36V3.24c0-.216.144-.36.36-.36s.36.144.36.36v2.88c0 .216-.144.36-.36.36z"/><path d="M9 15.12c-.216 0-.36-.144-.36-.36v-2.88c0-.216.144-.36.36-.36s.36.144.36.36v2.88c0 .216-.144.36-.36.36zm1.44-8.28c-.072 0-.108 0-.18-.036-.144-.108-.216-.288-.108-.468l1.44-2.484c.108-.144.288-.216.468-.108.144.108.216.288.108.468l-1.44 2.484c-.072.072-.18.144-.288.144zm-4.32 7.488c-.072 0-.108 0-.18-.036-.144-.108-.216-.288-.108-.468l1.44-2.484c.108-.144.288-.216.468-.108.144.108.216.288.108.468l-1.44 2.484c-.072.072-.18.144-.288.144z" opacity=".3"/><path d="M7.56 6.84c-.108 0-.216-.072-.288-.18l-1.44-2.484c-.108-.144-.036-.36.108-.468.144-.108.36-.036.468.108L7.848 6.3c.108.144.036.36-.108.468-.072.072-.108.072-.18.072z" opacity=".93"/><path d="M11.88 14.328c-.108 0-.216-.072-.288-.18l-1.44-2.484c-.108-.144-.036-.36.108-.468.144-.108.36-.036.468.108l1.44 2.484c.108.144.036.36-.108.468-.072.036-.108.072-.18.072z" opacity=".3"/><path d="M6.12 9.36H3.24c-.216 0-.36-.144-.36-.36s.144-.36.36-.36h2.88c.216 0 .36.144.36.36s-.144.36-.36.36z" opacity=".65"/><path d="M14.76 9.36h-2.88c-.216 0-.36-.144-.36-.36s.144-.36.36-.36h2.88c.216 0 .36.144.36.36s-.144.36-.36.36z" opacity=".3"/><path d="M6.516 7.884c-.072 0-.108 0-.18-.036l-2.484-1.44c-.144-.108-.216-.288-.108-.468.108-.144.288-.216.468-.108l2.484 1.44c.144.108.216.288.108.468a.327.327 0 01-.288.144z" opacity=".86"/><path d="M14.004 12.204c-.072 0-.108 0-.18-.036l-2.484-1.44c-.144-.108-.216-.288-.108-.468.108-.144.288-.216.468-.108l2.484 1.44c.144.108.216.288.108.468a.327.327 0 01-.288.144z" opacity=".3"/><path d="M3.996 12.204c-.108 0-.216-.072-.288-.18-.108-.144-.036-.36.108-.468l2.484-1.44c.144-.108.36-.036.468.108.108.144.036.36-.108.468l-2.484 1.44c-.036.072-.108.072-.18.072z" opacity=".44"/><path d="M11.484 7.884c-.108 0-.216-.072-.288-.18-.108-.144-.036-.36.108-.468l2.484-1.44c.144-.108.36-.036.468.108.108.144.036.36-.108.468l-2.484 1.44c-.072.072-.108.072-.18.072z" opacity=".3"/></symbol><symbol viewBox="0 0 18 18" id="drag"><path d="M2.3 16.5c-0.2 0-0.4-0.1-0.5-0.2 -0.2-0.2-0.3-0.5-0.2-0.8l2.5-6.5 -2.5-6.5C1.5 2.3 1.5 2 1.7 1.8c0.2-0.2 0.5-0.3 0.8-0.2l6.5 2.5 6.5-2.5c0.3-0.1 0.6 0 0.8 0.2 0.2 0.2 0.3 0.5 0.2 0.8l-2.5 6.5 2.5 6.5c0.1 0.3 0 0.6-0.2 0.8 -0.2 0.2-0.5 0.3-0.8 0.2l-6.5-2.5 -6.5 2.5C2.4 16.5 2.3 16.5 2.3 16.5zM3.6 3.6l2 5.1c0.1 0.2 0.1 0.4 0 0.5l-2 5.1 5.1-2c0.2-0.1 0.4-0.1 0.5 0l5.1 2L12.4 9.3c-0.1-0.2-0.1-0.4 0-0.5l2-5.1L9.3 5.6c-0.2 0.1-0.4 0.1-0.5 0L3.6 3.6z" /></symbol><symbol viewBox="0 0 18 18" id="unlock"><path d="M13.5 6h-.75V4.5C12.75 2.43 11.07.75 9 .75 6.93.75 5.25 2.43 5.25 4.5h1.5A2.247 2.247 0 0 1 9 2.25a2.247 2.247 0 0 1 2.25 2.25V6H4.5C3.675 6 3 6.675 3 7.5V15c0 .825.675 1.5 1.5 1.5h9c.825 0 1.5-.675 1.5-1.5V7.5c0-.825-.675-1.5-1.5-1.5zm0 9h-9V7.5h9V15zM9 12.75c.825 0 1.5-.675 1.5-1.5s-.675-1.5-1.5-1.5-1.5.675-1.5 1.5.675 1.5 1.5 1.5z"/></symbol>' });
  }, 871: function() {
    L.Map.mergeOptions({ boxCollector: !0, boxZoom: !1 }), L.Map.BoxCollector = L.Map.BoxZoom.extend({ initialize: function(i) {
      this._map = i, this._container = i._container, this._pane = i._panes.overlayPane, this._resetStateTimeout = 0, i.on("unload", this._destroy, this);
    }, addHooks: function() {
      L.DomEvent.on(this._container, "mousedown", this._onMouseDown, this);
    }, removeHooks: function() {
      L.DomEvent.off(this._container, "mousedown", this._onMouseDown, this);
    }, moved: function() {
      return this._moved;
    }, _destroy: function() {
      L.DomUtil.remove(this._pane), delete this._pane;
    }, _resetState: function() {
      this._resetStateTimeout = 0, this._moved = !1;
    }, _clearDeferredResetState: function() {
      this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
    }, _onMouseDown: function(i) {
      if (!i.shiftKey || i.which !== 1 && i.button !== 1)
        return !1;
      this._clearDeferredResetState(), this._resetState(), L.DomUtil.disableTextSelection(), L.DomUtil.disableImageDrag(), this._startPoint = this._map.mouseEventToContainerPoint(i), L.DomEvent.on(document, { contextmenu: L.DomEvent.stop, mousemove: this._onMouseMove, mouseup: this._onMouseUp }, this);
    }, _onMouseMove: function(i) {
      this._moved || (this._moved = !0, this._box = L.DomUtil.create("div", "leaflet-zoom-box", this._container), L.DomUtil.addClass(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(i), this._bounds = L.bounds(this._startPoint, this._point);
      var r = this._bounds.getSize();
      L.DomUtil.setPosition(this._box, this._bounds.min), this._box.style.width = r.x + "px", this._box.style.height = r.y + "px";
    }, _finish: function() {
      this._moved && (L.DomUtil.remove(this._box), L.DomUtil.removeClass(this._container, "leaflet-crosshair")), L.DomUtil.enableTextSelection(), L.DomUtil.enableImageDrag(), L.DomEvent.off(document, { contextmenu: L.DomEvent.stop, mousemove: this._onMouseMove, mouseup: this._onMouseUp }, this);
    }, _onMouseUp: function(i) {
      if ((i.which === 1 || i.button === 1) && (this._finish(), this._moved)) {
        this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(L.Util.bind(this._resetState, this), 0);
        var r = L.latLngBounds(this._map.containerPointToLatLng(this._bounds.getBottomLeft()), this._map.containerPointToLatLng(this._bounds.getTopRight())), u = this._map.getZoom(), o = this._map.getCenter();
        r = this._map._latLngBoundsToNewLayerBounds(r, u, o), this._map.fire("boxcollectend", { boxCollectBounds: r });
      }
    } }), L.Map.addInitHook("addHandler", "boxCollector", L.Map.BoxCollector);
  }, 464: function() {
    L.Map.mergeOptions({ doubleClickLabels: !0 }), L.Map.DoubleClickLabels = L.Map.DoubleClickZoom.extend({ enable: function() {
      var i = this._map;
      return this._enabled || (i.doubleClickZoom.enabled() && i.doubleClickZoom.disable(), this._map.fire("singleclickon"), this._enabled = !0, this.addHooks()), this;
    }, disable: function() {
      return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
    }, _fireIfSingle: function(i) {
      var r = this._map, u = i.originalEvent;
      u && u.shiftKey || (r._clicked += 1, this._map._clickTimeout = setTimeout(function() {
        r._clicked === 1 ? (r._clicked = 0, r.fire("singleclick", { type: "singleclick" })) : L.Browser.touch && u && u.sourceCapabilities.firesTouchEvents && r.fire("dblclick");
      }, 250));
    }, _onDoubleClick: function() {
      var i = this._map, r = i._labels;
      setTimeout(function() {
        i._clicked = 0, clearTimeout(i._clickTimeout);
      }, 0), r && (r.options.opacity === 1 ? (r.options.opacity = 0, r.setOpacity(0)) : (r.options.opacity = 1, r.setOpacity(1)));
    } }), L.Map.addInitHook("addHandler", "doubleClickLabels", L.Map.DoubleClickLabels);
  }, 622: function() {
    L.Map.DoubleClickZoom.include({ addHooks: function() {
      this._map.on({ click: this._fireIfSingle, dblclick: this._onDoubleClick }, this);
    }, removeHooks: function() {
      this._map.off({ click: this._fireIfSingle, dblclick: this._onDoubleClick }, this);
    }, enable: function() {
      return this._enabled || this._map.doubleClickLabels && this._map.doubleClickLabels.enabled() || (this._map.fire("singleclickon"), this._enabled = !0, this.addHooks()), this;
    }, disable: function() {
      return this._enabled ? (this._map.fire("singleclickoff"), this._enabled = !1, this.removeHooks(), this) : this;
    }, _fireIfSingle: function(i) {
      var r = this._map, u = i.originalEvent;
      u && u.shiftKey || (r._clicked += 1, this._map._clickTimeout = setTimeout(function() {
        r._clicked === 1 ? (r._clicked = 0, r.fire("singleclick", { type: "singleclick" })) : L.Browser.touch && u && u.sourceCapabilities.firesTouchEvents && r._fireDOMEvent(u, "dblclick", [r]);
      }, 250));
    }, _onDoubleClick: function(i) {
      var r = this._map, u = i.originalEvent;
      if (setTimeout(function() {
        r._clicked = 0, clearTimeout(r._clickTimeout);
      }, 0), !u)
        return !1;
      var o = r.getZoom(), a = r.options.zoomDelta, c = u.shiftKey ? o - a : o + a;
      r.options.doubleClickZoom === "center" ? r.setZoom(c) : r.setZoomAround(i.containerPoint, c);
    } });
  }, 557: function() {
    L.Map.include({ _clicked: 0, addGoogleMutant: function(i) {
      return (i = this.mutantOptions = L.extend({ mutantOpacity: 0.8, maxZoom: 24, maxNativeZoom: 20, minZoom: 0, labels: !0, labelOpacity: 1, doubleClickLabels: !0 }, i)).labels || (this.mutantOptions = L.extend(this.mutantOptions, { labelOpacity: i.labels ? 1 : void 0, doubleClickLabels: !!i.labels || void 0 })), this._googleMutant = L.tileLayer("http://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", { maxZoom: i.maxZoom, maxNativeZoom: i.maxNativeZoom, minZoom: i.minZoom, opacity: i.mutantOpacity }).addTo(this), i.labels ? this._addLabels(i) : this.doubleClickLabels = void 0, this;
    }, _addLabels: function(i) {
      return i.labelOpacity !== 0 && i.labelOpacity !== 1 && (i.labelOpacity = 1), this._labels = L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}", { attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', subdomains: "abcd", interactive: !1, opacity: i.labelOpacity, maxZoom: i.maxZoom, maxNativeZoom: i.maxNativeZoom, minZoom: i.minZoom, ext: "png" }).addTo(this), this.mutantOptions.doubleClickLabels && this.doubleClickLabels.enable(), this;
    } }), L.Map.addInitHook(function() {
      this.doubleClickLabels.disable(), this.doubleClickZoom.enable();
    });
  }, 443: function() {
    L.DomUtil = L.extend(L.DomUtil, { initTranslation: function(i) {
      this.translation = i;
    }, getMatrixString: function(i) {
      var r = L.Browser.webkit3d || L.Browser.gecko3d || L.Browser.ie3d, u = [i[0], i[3], 0, i[6], i[1], i[4], 0, i[7], 0, 0, 1, 0, i[2], i[5], 0, i[8]], o = r ? "matrix3d(" + u.join(",") + ")" : "";
      return r || console.log("Your browser must support 3D CSS transformsin order to use DistortableImageOverlay."), o;
    }, toggleClass: function(i, r) {
      var u = r;
      return this.hasClass(i, u) ? this.removeClass(i, u) : this.addClass(i, u);
    }, confirmDelete: function() {
      return window.confirm(this.translation.confirmImageDelete);
    }, confirmDeletes: function(i) {
      if (i === 1)
        return this.confirmDelete();
      var r, u = this.translation.confirmImagesDeletes;
      return r = typeof u == "function" ? u(i) : u, window.confirm(r);
    } });
  }, 256: function() {
    L.IconUtil = { create: function(i) {
      return /^#/.test(i) && (i = i.replace(/^#/, "")), '<svg class="ldi-icon ldi-' + i + '"role="img" focusable="false"><use xlink:href="#' + i + '"></use></svg>';
    }, addClassToSvg: function(i, r) {
      var u = i.querySelector("svg");
      u && L.DomUtil.addClass(u, r);
    }, toggleXlink: function(i, r, u) {
      /^#/.test(r) || (r = "#" + r), /^#/.test(u) || (u = "#" + u);
      var o = i.querySelector("use");
      if (o) {
        var a = o.getAttribute("xlink:href") === r ? u : r;
        return o.setAttribute("xlink:href", a), a;
      }
      return !1;
    }, toggleTitle: function(i, r, u) {
      var o = i.getAttribute("title") === r ? u : r;
      return i.setAttribute("title", o), i.hasAttribute("aria-label") && i.setAttribute("aria-label", o), o;
    } };
  }, 303: function() {
    L.ImageUtil = { getCmPerPixel: function(i) {
      var r = i._map;
      return 100 * r.latLngToLayerPoint(i.getCorner(0)).distanceTo(r.latLngToLayerPoint(i.getCorner(1))) / i.getElement().width;
    } };
  }, 75: function() {
    L.MatrixUtil = { adj: function(i) {
      return [i[4] * i[8] - i[5] * i[7], i[2] * i[7] - i[1] * i[8], i[1] * i[5] - i[2] * i[4], i[5] * i[6] - i[3] * i[8], i[0] * i[8] - i[2] * i[6], i[2] * i[3] - i[0] * i[5], i[3] * i[7] - i[4] * i[6], i[1] * i[6] - i[0] * i[7], i[0] * i[4] - i[1] * i[3]];
    }, multmm: function(i, r) {
      var u, o = [];
      for (u = 0; u < 3; u++)
        for (var a = 0; a < 3; a++) {
          for (var c = 0, f = 0; f < 3; f++)
            c += i[3 * u + f] * r[3 * f + a];
          o[3 * u + a] = c;
        }
      return o;
    }, multmv: function(i, r) {
      return [i[0] * r[0] + i[1] * r[1] + i[2] * r[2], i[3] * r[0] + i[4] * r[1] + i[5] * r[2], i[6] * r[0] + i[7] * r[1] + i[8] * r[2]];
    }, multsm: function(i, r) {
      for (var u = [], o = 0, a = r.length; o < a; o++)
        u.push(i * r[o]);
      return u;
    }, basisToPoints: function(i, r, u, o, a, c, f, p) {
      var v = [i, u, a, r, o, c, 1, 1, 1], y = L.MatrixUtil.multmv(L.MatrixUtil.adj(v), [f, p, 1]);
      return L.MatrixUtil.multmm(v, [y[0], 0, 0, 0, y[1], 0, 0, 0, y[2]]);
    }, project: function(i, r, u) {
      var o = L.MatrixUtil.multmv(i, [r, u, 1]);
      return [o[0] / o[2], o[1] / o[2]];
    }, general2DProjection: function(i, r, u, o, a, c, f, p, v, y, x, T, W, nt, ot, Z) {
      var H = L.MatrixUtil.basisToPoints(i, r, a, c, v, y, W, nt), C = L.MatrixUtil.basisToPoints(u, o, f, p, x, T, ot, Z), z = L.MatrixUtil.multmm(C, L.MatrixUtil.adj(H));
      return L.MatrixUtil.multsm(1 / z[8], z);
    } };
  }, 274: function() {
    L.TrigUtil = { calcAngle: function(i, r) {
      return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "deg") === "deg" ? this.radiansToDegrees(Math.atan2(r, i)) : Math.atan2(r, i);
    }, radiansToDegrees: function(i) {
      return 180 * i / Math.PI;
    }, degreesToRadians: function(i) {
      return i * Math.PI / 180;
    } };
  }, 820: function() {
    L.Utils = { initTranslation: function() {
      var i = { deleteImage: "Delete Image", deleteImages: "Delete Images", distortImage: "Distort Image", dragImage: "Drag Image", exportImage: "Export Image", exportImages: "Export Images", removeBorder: "Remove Border", addBorder: "Add Border", freeRotateImage: "Free rotate Image", geolocateImage: "Geolocate Image", lockMode: "Lock Mode", lockImages: "Lock Images", makeImageOpaque: "Make Image Opaque", makeImageTransparent: "Make Image Transparent", restoreImage: "Restore Natural Image", rotateImage: "Rotate Image", scaleImage: "Scale Image", stackToFront: "Stack to Front", stackToBack: "Stack to Back", unlockImages: "Unlock Images", confirmImageDelete: "Are you sure? This image will be permanently deleted from the map.", confirmImagesDeletes: "Are you sure? These images will be permanently deleted from the map." };
      if (this.options.translation)
        for (var r in i)
          this.options.translation.hasOwnProperty(r) || (this.options.translation[r] = i[r]);
      else
        this.options.translation = i;
      L.DomUtil.initTranslation(this.options.translation);
    }, getNestedVal: function(i, r, u) {
      return [r, u].reduce(function(o, a) {
        return o && o[a];
      }, i);
    } };
  } };
  l[443](), l[256](), l[303](), l[75](), l[274](), l[820](), l[719](), l[636](), l[797](), l[664](), l[176](), l[342](), l[278](), l[66](), l[416](), l[24](), l[876](), l[16](), l[928](), l[309](), l[811](), l[698](), l[824](), l[459](), l[106](), l[208](), l[750](), l[366](), l[107](), l[122](), l[350](), l[626](), l[680](), l[725](), l[53](), l[514](), l[784](), l[754](), l[247](), l[80](), l[622](), l[871](), l[464](), l[557]();
})();
var Cd = { exports: {} };
/*
	Leaflet.contextmenu, a context menu for Leaflet.
	(c) 2015, Adam Ratcliffe, GeoSmart Maps Limited

	@preserve
*/
(function(l) {
  (function(i) {
    var r;
    r = Je.exports, l.exports = i(r);
  })(function(i) {
    i.Map.mergeOptions({
      contextmenuItems: []
    }), i.Map.ContextMenu = i.Handler.extend({
      _touchstart: i.Browser.msPointer ? "MSPointerDown" : i.Browser.pointer ? "pointerdown" : "touchstart",
      statics: {
        BASE_CLS: "leaflet-contextmenu"
      },
      initialize: function(f) {
        i.Handler.prototype.initialize.call(this, f), this._items = [], this._visible = !1;
        var p = this._container = i.DomUtil.create("div", i.Map.ContextMenu.BASE_CLS, f._container);
        p.style.zIndex = 1e4, p.style.position = "absolute", f.options.contextmenuWidth && (p.style.width = f.options.contextmenuWidth + "px"), this._createItems(), i.DomEvent.on(p, "click", i.DomEvent.stop).on(p, "mousedown", i.DomEvent.stop).on(p, "dblclick", i.DomEvent.stop).on(p, "contextmenu", i.DomEvent.stop);
      },
      addHooks: function() {
        var f = this._map.getContainer();
        i.DomEvent.on(f, "mouseleave", this._hide, this).on(document, "keydown", this._onKeyDown, this), i.Browser.touch && i.DomEvent.on(document, this._touchstart, this._hide, this), this._map.on({
          contextmenu: this._show,
          mousedown: this._hide,
          movestart: this._hide,
          zoomstart: this._hide
        }, this);
      },
      removeHooks: function() {
        var f = this._map.getContainer();
        i.DomEvent.off(f, "mouseleave", this._hide, this).off(document, "keydown", this._onKeyDown, this), i.Browser.touch && i.DomEvent.off(document, this._touchstart, this._hide, this), this._map.off({
          contextmenu: this._show,
          mousedown: this._hide,
          movestart: this._hide,
          zoomstart: this._hide
        }, this);
      },
      showAt: function(f, p) {
        f instanceof i.LatLng && (f = this._map.latLngToContainerPoint(f)), this._showAtPoint(f, p);
      },
      hide: function() {
        this._hide();
      },
      addItem: function(f) {
        return this.insertItem(f);
      },
      insertItem: function(f, p) {
        p = p !== void 0 ? p : this._items.length;
        var v = this._createItem(this._container, f, p);
        return this._items.push(v), this._sizeChanged = !0, this._map.fire("contextmenu.additem", {
          contextmenu: this,
          el: v.el,
          index: p
        }), v.el;
      },
      removeItem: function(f) {
        var p = this._container;
        return isNaN(f) || (f = p.children[f]), f ? (this._removeItem(i.Util.stamp(f)), this._sizeChanged = !0, this._map.fire("contextmenu.removeitem", {
          contextmenu: this,
          el: f
        }), f) : null;
      },
      removeAllItems: function() {
        for (var f = this._container.children, p; f.length; )
          p = f[0], this._removeItem(i.Util.stamp(p));
        return f;
      },
      hideAllItems: function() {
        var f, p, v;
        for (p = 0, v = this._items.length; p < v; p++)
          f = this._items[p], f.el.style.display = "none";
      },
      showAllItems: function() {
        var f, p, v;
        for (p = 0, v = this._items.length; p < v; p++)
          f = this._items[p], f.el.style.display = "";
      },
      setDisabled: function(f, p) {
        var v = this._container, y = i.Map.ContextMenu.BASE_CLS + "-item";
        isNaN(f) || (f = v.children[f]), f && i.DomUtil.hasClass(f, y) && (p ? (i.DomUtil.addClass(f, y + "-disabled"), this._map.fire("contextmenu.disableitem", {
          contextmenu: this,
          el: f
        })) : (i.DomUtil.removeClass(f, y + "-disabled"), this._map.fire("contextmenu.enableitem", {
          contextmenu: this,
          el: f
        })));
      },
      isVisible: function() {
        return this._visible;
      },
      _createItems: function() {
        var f = this._map.options.contextmenuItems, p, v;
        for (p = 0, v = f.length; p < v; p++)
          this._items.push(this._createItem(this._container, f[p]));
      },
      _createItem: function(f, p, v) {
        if (p.separator || p === "-")
          return this._createSeparator(f, v);
        var y = i.Map.ContextMenu.BASE_CLS + "-item", x = p.disabled ? y + " " + y + "-disabled" : y, T = this._insertElementAt("a", x, f, v), W = this._createEventHandler(T, p.callback, p.context, p.hideOnSelect), nt = this._getIcon(p), ot = this._getIconCls(p), Z = "";
        return nt ? Z = '<img class="' + i.Map.ContextMenu.BASE_CLS + '-icon" src="' + nt + '"/>' : ot && (Z = '<span class="' + i.Map.ContextMenu.BASE_CLS + "-icon " + ot + '"></span>'), T.innerHTML = Z + p.text, T.href = "#", i.DomEvent.on(T, "mouseover", this._onItemMouseOver, this).on(T, "mouseout", this._onItemMouseOut, this).on(T, "mousedown", i.DomEvent.stopPropagation).on(T, "click", W), i.Browser.touch && i.DomEvent.on(T, this._touchstart, i.DomEvent.stopPropagation), i.Browser.pointer || i.DomEvent.on(T, "click", this._onItemMouseOut, this), {
          id: i.Util.stamp(T),
          el: T,
          callback: W
        };
      },
      _removeItem: function(f) {
        var p, v, y, x, T;
        for (y = 0, x = this._items.length; y < x; y++)
          if (p = this._items[y], p.id === f)
            return v = p.el, T = p.callback, T && (i.DomEvent.off(v, "mouseover", this._onItemMouseOver, this).off(v, "mouseover", this._onItemMouseOut, this).off(v, "mousedown", i.DomEvent.stopPropagation).off(v, "click", T), i.Browser.touch && i.DomEvent.off(v, this._touchstart, i.DomEvent.stopPropagation), i.Browser.pointer || i.DomEvent.on(v, "click", this._onItemMouseOut, this)), this._container.removeChild(v), this._items.splice(y, 1), p;
        return null;
      },
      _createSeparator: function(f, p) {
        var v = this._insertElementAt("div", i.Map.ContextMenu.BASE_CLS + "-separator", f, p);
        return {
          id: i.Util.stamp(v),
          el: v
        };
      },
      _createEventHandler: function(f, p, v, nt) {
        var x = this, T = this._map, W = i.Map.ContextMenu.BASE_CLS + "-item-disabled", nt = nt !== void 0 ? nt : !0;
        return function(ot) {
          i.DomUtil.hasClass(f, W) || (nt && x._hide(), p && p.call(v || T, x._showLocation), x._map.fire("contextmenu.select", {
            contextmenu: x,
            el: f
          }));
        };
      },
      _insertElementAt: function(f, p, v, y) {
        var x, T = document.createElement(f);
        return T.className = p, y !== void 0 && (x = v.children[y]), x ? v.insertBefore(T, x) : v.appendChild(T), T;
      },
      _show: function(f) {
        this._showAtPoint(f.containerPoint, f);
      },
      _showAtPoint: function(f, p) {
        if (this._items.length) {
          var v = this._map, y = v.containerPointToLayerPoint(f), x = v.layerPointToLatLng(y), T = i.extend(p || {}, { contextmenu: this });
          this._showLocation = {
            latlng: x,
            layerPoint: y,
            containerPoint: f
          }, p && p.relatedTarget && (this._showLocation.relatedTarget = p.relatedTarget), this._setPosition(f), this._visible || (this._container.style.display = "block", this._visible = !0), this._map.fire("contextmenu.show", T);
        }
      },
      _hide: function() {
        this._visible && (this._visible = !1, this._container.style.display = "none", this._map.fire("contextmenu.hide", { contextmenu: this }));
      },
      _getIcon: function(f) {
        return i.Browser.retina && f.retinaIcon || f.icon;
      },
      _getIconCls: function(f) {
        return i.Browser.retina && f.retinaIconCls || f.iconCls;
      },
      _setPosition: function(f) {
        var p = this._map.getSize(), v = this._container, y = this._getElementSize(v), x;
        this._map.options.contextmenuAnchor && (x = i.point(this._map.options.contextmenuAnchor), f = f.add(x)), v._leaflet_pos = f, f.x + y.x > p.x ? (v.style.left = "auto", v.style.right = Math.min(Math.max(p.x - f.x, 0), p.x - y.x - 1) + "px") : (v.style.left = Math.max(f.x, 0) + "px", v.style.right = "auto"), f.y + y.y > p.y ? (v.style.top = "auto", v.style.bottom = Math.min(Math.max(p.y - f.y, 0), p.y - y.y - 1) + "px") : (v.style.top = Math.max(f.y, 0) + "px", v.style.bottom = "auto");
      },
      _getElementSize: function(f) {
        var p = this._size, v = f.style.display;
        return (!p || this._sizeChanged) && (p = {}, f.style.left = "-999999px", f.style.right = "auto", f.style.display = "block", p.x = f.offsetWidth, p.y = f.offsetHeight, f.style.left = "auto", f.style.display = v, this._sizeChanged = !1), p;
      },
      _onKeyDown: function(f) {
        var p = f.keyCode;
        p === 27 && this._hide();
      },
      _onItemMouseOver: function(f) {
        i.DomUtil.addClass(f.target || f.srcElement, "over");
      },
      _onItemMouseOut: function(f) {
        i.DomUtil.removeClass(f.target || f.srcElement, "over");
      }
    }), i.Map.addInitHook("addHandler", "contextmenu", i.Map.ContextMenu), i.Mixin.ContextMenu = {
      bindContextMenu: function(f) {
        return i.setOptions(this, f), this._initContextMenu(), this;
      },
      unbindContextMenu: function() {
        return this.off("contextmenu", this._showContextMenu, this), this;
      },
      addContextMenuItem: function(f) {
        this.options.contextmenuItems.push(f);
      },
      removeContextMenuItemWithIndex: function(f) {
        for (var p = [], v = 0; v < this.options.contextmenuItems.length; v++)
          this.options.contextmenuItems[v].index == f && p.push(v);
        for (var y = p.pop(); y !== void 0; )
          this.options.contextmenuItems.splice(y, 1), y = p.pop();
      },
      replaceContextMenuItem: function(f) {
        this.removeContextMenuItemWithIndex(f.index), this.addContextMenuItem(f);
      },
      _initContextMenu: function() {
        this._items = [], this.on("contextmenu", this._showContextMenu, this);
      },
      _showContextMenu: function(f) {
        var p, v, y, x, T;
        if (this._map.contextmenu) {
          for (v = i.extend({ relatedTarget: this }, f), y = this._map.mouseEventToContainerPoint(f.originalEvent), this.options.contextmenuInheritItems || this._map.contextmenu.hideAllItems(), x = 0, T = this.options.contextmenuItems.length; x < T; x++)
            p = this.options.contextmenuItems[x], this._items.push(this._map.contextmenu.insertItem(p, p.index));
          this._map.once("contextmenu.hide", this._hideContextMenu, this), this._map.contextmenu.showAt(y, v);
        }
      },
      _hideContextMenu: function() {
        var f, p;
        for (f = 0, p = this._items.length; f < p; f++)
          this._map.contextmenu.removeItem(this._items[f]);
        this._items.length = 0, this.options.contextmenuInheritItems || this._map.contextmenu.showAllItems();
      }
    };
    var r = [i.Marker, i.Path], u = {
      contextmenu: !1,
      contextmenuItems: [],
      contextmenuInheritItems: !0
    }, o, a, c;
    for (a = 0, c = r.length; a < c; a++)
      o = r[a], o.prototype.options ? o.mergeOptions(u) : o.prototype.options = u, o.addInitHook(function() {
        this.options.contextmenu && this._initContextMenu();
      }), o.include(i.Mixin.ContextMenu);
    return i.Map.ContextMenu;
  });
})(Cd);
const Sd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=", Id = {
  draw: {
    toolbar: {
      actions: {
        title: "取消绘制",
        text: "取消"
      },
      finish: {
        title: "完成绘制",
        text: "完成"
      },
      undo: {
        title: "删除上一个绘制点",
        text: "删除上一个绘制点"
      },
      buttons: {
        polyline: "绘制线",
        polygon: "绘制多边形",
        rectangle: "绘制矩形",
        circle: "绘制圆",
        marker: "绘制标记",
        circlemarker: "Draw a circlemarker",
        image: "贴图"
      }
    },
    handlers: {
      circle: {
        tooltip: {
          start: "单击并拖动以绘制圆"
        },
        radius: "半径"
      },
      circlemarker: {
        tooltip: {
          start: "."
        }
      },
      marker: {
        tooltip: {
          start: "单击“地图”以放置圆标记"
        }
      },
      polygon: {
        tooltip: {
          start: "单击以开始绘制形状",
          cont: "单击以继续绘制形状",
          end: "单击第一个点以关闭此形状"
        }
      },
      polyline: {
        error: "<strong>错误:</strong> 形状边缘不能交叉!",
        tooltip: {
          start: "单击以开始绘制直线",
          cont: "单击以继续绘制直线",
          end: "单击“最后一个点”以完成绘制"
        }
      },
      rectangle: {
        tooltip: {
          start: "单击并拖动以绘制矩形"
        }
      },
      simpleshape: {
        tooltip: {
          end: "释放鼠标完成绘图"
        }
      },
      image: {
        tooltip: {
          start: "点击导入图片"
        }
      }
    }
  },
  edit: {
    toolbar: {
      actions: {
        save: {
          title: "保存更改",
          text: "保存"
        },
        cancel: {
          title: "取消编辑，放弃所有更改",
          text: "取消"
        },
        clearAll: {
          title: "清除所有绘制元素",
          text: "清除所有"
        }
      },
      buttons: {
        edit: "编辑元素",
        editDisabled: "当前无可编辑的元素",
        remove: "删除元素",
        removeDisabled: "当前无可删除的元素"
      }
    },
    handlers: {
      edit: {
        tooltip: {
          text: "拖动控制柄或标记以编辑要素",
          subtext: "单击“取消”撤消更改"
        }
      },
      remove: {
        tooltip: {
          text: "单击要删除的元素"
        }
      }
    }
  },
  split: {
    toolbar: {
      actions: {
        save: {
          title: "split保存更改",
          text: "保存"
        },
        cancel: {
          title: "退出Split模式",
          text: "退出"
        }
      },
      buttons: {
        split: "拆分线元素",
        splitDisabled: "当前无可拆分的线元素"
      }
    },
    handlers: {
      split: {
        tooltip: {
          text: "拆分后的两条线需要至少包含2个坐标点",
          subtext: "在右键菜单中选择拆分Polyline"
        }
      }
    }
  }
}, Ad = {
  deleteImage: "删除",
  deleteImages: "删除当前所有图片",
  distortImage: "变形",
  dragImage: "拖拽",
  exportImage: "Export Image",
  exportImages: "Export Images",
  removeBorder: "Remove Border",
  addBorder: "Add Border",
  freeRotateImage: "旋转缩放",
  geolocateImage: "Geolocate Image",
  lockMode: "锁定",
  lockImages: "锁定所有图片",
  makeImageOpaque: "还原透明度",
  makeImageTransparent: "降低透明度",
  restoreImage: "Restore Natural Image",
  rotateImage: "旋转",
  scaleImage: "缩放",
  stackToFront: "Stack to Front",
  stackToBack: "Stack to Back",
  unlockImages: "解锁",
  confirmImageDelete: "是否删除当前选择的图片? ",
  confirmImagesDeletes: "是否删除当前添加的所有图片?"
};
function Od(l, i, r = {}) {
  if (Object.prototype.toString.call(r) !== "[object Object]")
    throw TypeError();
  const { img: u, center: o, ratio: a, height: c } = r, f = i.project(o), p = c, v = (a * p).toFixed(0);
  var y = l.point(v, p).divideBy(2);
  const x = [
    i.unproject(f.subtract(y)),
    i.unproject(f.add(l.point(y.x, -y.y))),
    i.unproject(f.add(l.point(-y.x, y.y))),
    i.unproject(f.add(y))
  ];
  l.distortableImageOverlay(u, {
    height: c,
    corners: x,
    actions: [l.FreeRotateAction, l.LockAction, l.OpacityAction, l.DeleteAction],
    translation: Ad
  }).addTo(i);
}
function zd(l) {
  return {
    statics: {
      TYPE: "image"
    },
    options: {
      shapeOptions: {
        clickable: !0
      }
    },
    //初始化
    initialize: function(i, r) {
      this.type = l.Draw.Image.TYPE, this._initialLabelText = l.drawLocal.draw.handlers.image.tooltip.start, l.Draw.SimpleShape.prototype.initialize.call(this, i, r), this._template = "", this._templateBounds = [
        [0, 0],
        [100, 100]
      ], this._svgViewBox = !1, this._svgFitBounds = !1, this._scale = 1, this._ratio = 1, this._lastLatlng = "", this._height = 100;
    },
    //放置贴图
    _fireCreatedEvent: function() {
      Od(l, this._map, {
        img: this._template,
        center: this._lastLatlng,
        //鼠标位置
        ratio: this._ratio,
        //实际宽高比
        height: this._height
        //默认设定的图片高度
      });
    },
    //鼠标移动事件: 图片跟随鼠标移动
    _onMouseMove: function(i) {
      let r = i.latlng;
      if (this._lastLatlng = r, this._tooltip.updatePosition(r), this._shape)
        this._shape.setLatLng(r);
      else {
        const o = l.icon({
          iconUrl: this._template,
          iconSize: [this._height * this._ratio, this._height]
        });
        this._shape = new l.Marker(r, {
          icon: o
        }), this._map.addLayer(this._shape);
      }
      let u = "";
      this._tooltip.updateContent({
        text: this._endLabelText,
        subtext: u
      });
    }
  };
}
const Rd = (l) => {
  l.SplitToolbar.Split = l.Handler.extend({
    statics: {
      TYPE: "split"
    },
    // @method intialize(): void
    initialize: function(i, r) {
      if (l.Handler.prototype.initialize.call(this, i), l.setOptions(this, r), this._featureGroup = r.featureGroup, !(this._featureGroup instanceof l.FeatureGroup))
        throw new Error("options.featureGroup must be a L.FeatureGroup");
      this._uneditedLayerProps = {}, this.type = l.SplitToolbar.Split.TYPE;
      var u = l.version.split(".");
      parseInt(u[0], 10) === 1 && parseInt(u[1], 10) >= 2 ? l.SplitToolbar.Split.include(l.Evented.prototype) : l.SplitToolbar.Split.include(l.Mixin.Events), this._map.on("contextmenu.hide", () => {
      });
    },
    // @method enable(): void
    // Enable the edit toolbar
    enable: function() {
      this._enabled || !this._hasAvailableLayers() || (this.fire("enabled", { handler: this.type }), this._map.fire(l.Draw.Event.EDITSTART, { handler: this.type }), l.Handler.prototype.enable.call(this), this._featureGroup.on("layeradd", this._enableLayerEdit, this).on("layerremove", this._disableLayerEdit, this));
    },
    disable: function() {
      this._map.contextmenu.hideAllItems(), this._enabled && (this._featureGroup.off("layeradd", this._enableLayerEdit, this).off("layerremove", this._disableLayerEdit, this), l.Handler.prototype.disable.call(this), this._map.fire(l.Draw.Event.EDITSTOP, { handler: this.type }), this.fire("disabled", { handler: this.type }));
    },
    addHooks: function() {
      var i = this._map;
      i && (i.getContainer().focus(), this._featureGroup.eachLayer(this._enableLayerEdit, this), this._tooltip = new l.Draw.Tooltip(this._map), this._tooltip.updateContent({
        text: l.drawLocal.split.handlers.split.tooltip.text,
        subtext: l.drawLocal.split.handlers.split.tooltip.subtext
      }), i._editTooltip = this._tooltip, this._updateTooltip(), this._map.on("mousemove", this._onMouseMove, this).on("touchmove", this._onMouseMove, this).on(l.Draw.Event.EDITVERTEX, this._updateTooltip, this));
    },
    split: function(i) {
      this._featureGroup.eachLayer(
        (r) => {
          r && r._leaflet_id === i.ploy._leaflet_id && (r.edited = !1, r.remove());
        }
      ), i.items.forEach((r) => {
        this._featureGroup.addLayer(new l.Polyline(r));
      });
    },
    // @method removeHooks(): void
    // Remove listener hooks for this handler
    removeHooks: function() {
      this._map && (this._featureGroup.eachLayer(this._disableLayerEdit, this), this._uneditedLayerProps = {}, this._tooltip.dispose(), this._tooltip = null, this._map.off("mousemove", this._onMouseMove, this).off("touchmove", this._onMouseMove, this).off(l.Draw.Event.EDITVERTEX, this._updateTooltip, this));
    },
    // @method revertLayers(): void
    // Revert each layer's geometry changes
    revertLayers: function() {
      this._featureGroup.eachLayer(function() {
      }, this);
    },
    // @method save(): void
    // Save the layer geometries
    save: function() {
      var i = new l.LayerGroup();
      this._featureGroup.eachLayer(function(r) {
        r.remove(), r.edited && (i.addLayer(r), r.edited = !1);
      }), this._map.fire(l.Draw.Event.EDITED, { layers: i });
    },
    _backupLayer: function(i) {
      var r = l.Util.stamp(i);
      this._uneditedLayerProps[r] || (i instanceof l.Polyline || i instanceof l.Polygon || i instanceof l.Rectangle ? this._uneditedLayerProps[r] = {
        latlngs: l.LatLngUtil.cloneLatLngs(i.getLatLngs())
      } : i instanceof l.Circle ? this._uneditedLayerProps[r] = {
        latlng: l.LatLngUtil.cloneLatLng(i.getLatLng()),
        radius: i.getRadius()
      } : (i instanceof l.Marker || i instanceof l.CircleMarker) && (this._uneditedLayerProps[r] = {
        latlng: l.LatLngUtil.cloneLatLng(i.getLatLng())
      }));
    },
    _getTooltipText: function() {
      return {
        text: l.drawLocal.split.handlers.split.tooltip.text,
        subtext: l.drawLocal.split.handlers.split.tooltip.subtext
      };
    },
    _updateTooltip: function() {
      this._tooltip.updateContent(this._getTooltipText());
    },
    _revertLayer: function(i) {
      var r = l.Util.stamp(i);
      i.edited = !1, this._uneditedLayerProps.hasOwnProperty(r) && (i instanceof l.Polyline || i instanceof l.Polygon || i instanceof l.Rectangle ? i.setLatLngs(this._uneditedLayerProps[r].latlngs) : i instanceof l.Circle ? (i.setLatLng(this._uneditedLayerProps[r].latlng), i.setRadius(this._uneditedLayerProps[r].radius)) : (i instanceof l.Marker || i instanceof l.CircleMarker) && i.setLatLng(this._uneditedLayerProps[r].latlng), i.fire("revert-edited", { layer: i }));
    },
    _enableLayerEdit: function(i) {
      var r = i.layer || i.target || i, u, o;
      this._backupLayer(r), this.options.poly && (o = l.Util.extend({}, this.options.poly), r.options.poly = o), this.options.selectedPathOptions && (u = l.Util.extend({}, this.options.selectedPathOptions), u.maintainColor && (u.color = r.options.color, u.fillColor = r.options.fillColor), r.options.original = l.extend({}, r.options), r.options.editing = u), r instanceof l.Polyline && !(r instanceof l.Polygon) && (this._map.fire("draw:splittingstart"), r.splitting.enable());
    },
    _disableLayerEdit: function(i) {
      var r = i.layer || i.target || i;
      this._map.contextmenu && this._map.contextmenu.removeAllItems(), r.edited = !1, r.splitting && r.splitting.disable(), delete r.options.editing, delete r.options.original, this._selectedPathOptions && (r instanceof l.Marker ? this._toggleMarkerHighlight(r) : (r.setStyle(r.options.previousOptions), delete r.options.previousOptions)), r instanceof l.Polyline && !(r instanceof l.Polygon) && (r.splitting.disable(), this._map.fire("draw:splittingfinished"));
    },
    _onMouseMove: function(i) {
      this._tooltip.updatePosition(i.latlng);
    },
    _onMarkerDragEnd: function(i) {
      var r = i.target;
      r.edited = !0, this._map.fire(l.Draw.Event.EDITMOVE, { layer: r });
    },
    _onTouchMove: function(i) {
      var r = i.originalEvent.changedTouches[0], u = this._map.mouseEventToLayerPoint(r), o = this._map.layerPointToLatLng(u);
      i.target.setLatLng(o);
    },
    _hasAvailableLayers: function() {
      return this._featureGroup.getLayers().length !== 0;
    }
  });
}, Bd = (l) => {
  l.Split = l.Split || {}, l.Split.Poly = l.Edit.Poly.extend({
    _initHandlers: function() {
      this._verticesHandlers = [];
      for (var i = 0; i < this.latlngs.length; i++)
        this._verticesHandlers.push(
          new l.Split.PolyVerticesEdit(this._poly, this.latlngs[i], this._poly.options.poly)
        );
    }
  }), l.Split.PolyVerticesEdit = l.Handler.extend({
    options: {
      icon: new l.DivIcon({
        iconSize: new l.Point(8, 8),
        className: "leaflet-div-icon leaflet-editing-icon"
      }),
      touchIcon: new l.DivIcon({
        iconSize: new l.Point(20, 20),
        className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"
      }),
      drawError: {
        color: "#b00b00",
        timeout: 1e3
      }
    },
    initialize: function(i, r, u) {
      const o = document.getElementsByClassName("leaflet-draw")[0];
      o && o.addEventListener("mouseenter", (a) => {
        this._map.fire("contextmenu.hide", { contextmenu: this }), this._map.contextmenu.removeAllItems();
      }), l.Browser.touch && (this.options.icon = this.options.touchIcon), this._poly = i, this._splitItems = [], u && u.drawError && (u.drawError = l.Util.extend({}, this.options.drawError, u.drawError)), this._latlngs = r, l.setOptions(this, u);
    },
    _defaultShape: function() {
      return l.Polyline._flat ? l.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0] : this._latlngs;
    },
    addHooks: function() {
      var i = this._poly, r = i._path;
      i instanceof l.Polygon || (i.options.fill = !1, i.options.editing && (i.options.editing.fill = !1)), r && i.options.editing && i.options.editing.className && (i.options.original.className && i.options.original.className.split(" ").forEach(function(u) {
        l.DomUtil.removeClass(r, u);
      }), i.options.editing.className.split(" ").forEach(function(u) {
        l.DomUtil.addClass(r, u);
      })), i.setStyle(i.options.editing), this._poly._map && (this._map = this._poly._map, this._markerGroup || this._initMarkers(), this._poly._map.addLayer(this._markerGroup), this._splittedGroup || this._initSplittedItems(), this._poly._map.addLayer(this._splittedGroup));
    },
    // @method removeHooks(): void
    // Remove listener hooks from this handler.
    removeHooks: function() {
      var i = this._poly, r = i._path;
      r && i.options.editing && i.options.editing.className && (i.options.editing.className.split(" ").forEach(function(u) {
        l.DomUtil.removeClass(r, u);
      }), i.options.original.className && i.options.original.className.split(" ").forEach(function(u) {
        l.DomUtil.addClass(r, u);
      })), i.setStyle(i.options.original), i._map && (i._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers);
    },
    // @method updateMarkers(): void
    // Clear markers and update their location
    updateMarkers: function() {
      this._markerGroup.clearLayers(), this._initMarkers();
    },
    _initSplittedItems: function() {
      this._splittedGroup || (this._splittedGroup = new l.LayerGroup()), this._splittedLines = [];
    },
    _initMarkers: function() {
      this._markerGroup || (this._markerGroup = new l.LayerGroup()), this._markers = [];
      var i = this._defaultShape(), r, u, o, a;
      for (r = 0, o = i.length; r < o; r++)
        a = this._createMarker(i[r], r), this._markers.push(a);
      var c, f;
      for (r = 0, u = o - 1; r < o; u = r++)
        r === 0 && !(l.Polygon && this._poly instanceof l.Polygon) || (c = this._markers[u], f = this._markers[r], this._updatePrevNext(c, f));
      for (r = 0, o = i.length; r < o; r++)
        this._contextMenuDisabled(this._markers[r]);
    },
    _createMarker: function(i, r) {
      var u = new l.Marker.Touch(i, {
        draggable: !1,
        icon: this.options.icon,
        contextmenu: !0,
        contextmenuWidth: 140,
        contextmenuItems: [
          {
            text: "删除",
            disabled: !1,
            value: "remove",
            callback: (o) => {
              this._removeMarker(o.relatedTarget);
            }
          },
          {
            separator: !0
          },
          {
            text: "由此拆分",
            value: "split",
            disabled: !1,
            callback: (o) => {
              this._splitPolyline(o.relatedTarget);
            }
          }
        ]
      });
      return u._origLatLng = i, u._index = r, u.addTo(this._markerGroup), u.on("contextmenu", this._onContextMenu, this), u;
    },
    _onMarkerDragStart: function() {
      this._poly.fire("editstart");
    },
    _spliceLatLngs: function() {
      const i = arguments;
      var r = this._defaultShape(), u = [].splice.apply(r, i);
      return this._poly._convertLatLngs(r, !0), this._poly.redraw(), u;
    },
    _removeMarker: function(i) {
      var r = i._index;
      this._markerGroup.removeLayer(i), this._markers.splice(r, 1), this._spliceLatLngs(r, 1), this._updateIndexes(r, -1), this._markers.forEach((u) => {
        this._contextMenuDisabled(u);
      }), this._map.fire(l.Draw.Event.PolylineMarkerRemove, {
        poly: this._poly
      }), i.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._fireEdit, this).off("touchmove", this._onMarkerDrag, this).off("touchend", this._fireEdit, this).off("MSPointerMove", this._onTouchMove, this).off("MSPointerUp", this._fireEdit, this).unbindContextMenu(this);
    },
    _fireEdit: function() {
      this._poly.edited = !0, this._poly.fire("edit"), this._poly._map.fire(l.Draw.Event.EDITVERTEX, {
        layers: this._markerGroup,
        poly: this._poly
      });
    },
    _onMarkerDrag: function(i) {
      var r = i.target, u = this._poly, o = l.LatLngUtil.cloneLatLng(r._origLatLng);
      if (l.extend(r._origLatLng, r._latlng), u.options.poly) {
        var a = u._map._editTooltip;
        if (!u.options.poly.allowIntersection && u.intersects()) {
          l.extend(r._origLatLng, o), r.setLatLng(o);
          var c = u.options.color;
          u.setStyle({ color: this.options.drawError.color }), a && a.updateContent({
            text: l.drawLocal.draw.handlers.polyline.error
          }), setTimeout(function() {
            u.setStyle({ color: c }), a && a.updateContent({
              text: l.drawLocal.edit.handlers.edit.tooltip.text,
              subtext: l.drawLocal.edit.handlers.edit.tooltip.subtext
            });
          }, 1e3);
        }
      }
      this._poly._bounds._southWest = l.latLng(1 / 0, 1 / 0), this._poly._bounds._northEast = l.latLng(-1 / 0, -1 / 0);
      var f = this._poly.getLatLngs();
      this._poly._convertLatLngs(f, !0), this._poly.redraw(), this._poly.fire("editdrag");
    },
    _onMarkerClick: function(i) {
      var r = l.Polygon && this._poly instanceof l.Polygon ? 4 : 3, u = i.target;
      this._defaultShape().length < r || (this._removeMarker(u), this._updatePrevNext(u._prev, u._next), u._prev && u._next || (u._prev ? u._next || (u._prev._middleRight = null) : u._next._middleLeft = null), this._fireEdit());
    },
    /**
     * 设置contextMenu disabled
     */
    _contextMenuDisabled(i) {
      var r = l.Polygon && this._poly instanceof l.Polygon ? 4 : 3;
      const u = this._defaultShape().length < r, o = !i._next || !i._prev || i._prev && !i._prev._prev;
      i.options.contextmenuItems[0].disabled = u, i.options.contextmenuItems[2].disabled = u || o, l.Util.setOptions(this, i.options);
    },
    /**
     * onContextMenu
     */
    _onContextMenu: function(i) {
      var r = i.target;
      this._contextMenuDisabled(r);
    },
    /**
     * splitPolyline
     */
    _splitPolyline: function(i) {
      const r = i._index, u = this._defaultShape(), o = u.slice(0, r), a = u.slice(r, u.length);
      this._poly._map.fire(l.Draw.Event.SPLIT, {
        poly: this._poly,
        items: [o, a],
        layers: this._markerGroup
      });
    },
    _onTouchMove: function(i) {
      var r = this._map.mouseEventToLayerPoint(i.originalEvent.touches[0]), u = this._map.layerPointToLatLng(r), o = i.target;
      l.extend(o._origLatLng, u), this._poly.redraw(), this.updateMarkers();
    },
    _updateIndexes: function(i, r) {
      this._markerGroup.eachLayer(function(u) {
        u._index > i && (u._index += r);
      });
    },
    _updatePrevNext: function(i, r) {
      i && (i._next = r), r && (r._prev = i);
    }
  });
}, Ud = (l) => {
  l.Draw.Event.SPLIT = "draw:split", l.Draw.Event.PolylineMarkerRemove = "draw:polyline_marker_remove", l.SplitToolbar = l.EditToolbar.extend({
    statics: {
      TYPE: "split"
    },
    getModeHandlers: function(i) {
      var r = this.options.featureGroup;
      return [
        {
          enabled: this.options.edit,
          handler: new l.SplitToolbar.Split(i, {
            featureGroup: r,
            selectedPathOptions: this.options.edit.selectedPathOptions,
            poly: this.options.poly
          }),
          title: l.drawLocal.split.toolbar.buttons.split
        }
      ];
    },
    getActions: function() {
      var i = [
        // {
        //   title: L.drawLocal.split.toolbar.actions.save.title,
        //   text: L.drawLocal.split.toolbar.actions.save.text,
        //   callback: this._save,
        //   context: this
        // },
        {
          title: l.drawLocal.split.toolbar.actions.cancel.title,
          text: l.drawLocal.split.toolbar.actions.cancel.text,
          callback: this.disable,
          context: this
        }
      ];
      return i;
    },
    _save: function() {
      this._activeMode.handler.save(), this._activeMode && this._activeMode.handler.disable();
    },
    _checkDisabled: function() {
      var i = this.options.featureGroup, r = i.getLayers().length !== 0, u;
      this.options.edit && (u = this._modes[l.SplitToolbar.Split.TYPE].button, r ? l.DomUtil.removeClass(u, "leaflet-disabled") : l.DomUtil.addClass(u, "leaflet-disabled"), u.setAttribute(
        "title",
        r ? l.drawLocal.split.toolbar.buttons.split : l.drawLocal.split.toolbar.buttons.splitDisabled
      ));
    }
  }), Rd(l), Bd(l), l.Polyline.addInitHook(function() {
    this.splitting || (l.Edit.Poly && (this.splitting = new l.Split.Poly(this), this.options.editable && this.splitting.enable()), this.on("add", function() {
      this.splitting && this.splitting.enabled() && this.splitting.addHooks();
    }), this.on("remove", function() {
      this.splitting && this.splitting.enabled() && this.splitting.removeHooks();
    }));
  });
}, _r = { Image: zd }, Nd = (l) => {
  if (Ud(l), !(!l || Object.prototype.toString.call(l) !== "[object Object]" || !l.Draw || Object.prototype.toString.call(l.Draw) !== "[object Object]"))
    for (const i in _r)
      l.Draw[i] = l.Draw.SimpleShape.extend(_r[i](l));
}, Hd = 25 / 41, Fd = (l) => {
  const i = fr, r = l.options.markerSize;
  i.Toolbar.include({
    _createButton: function(o) {
      const a = i.DomUtil.create("a", o.className || "", o.container), c = i.DomUtil.create("span", "sr-only", o.container);
      a.href = "javascript:void(0);", a.appendChild(c), o.title && (a.title = o.title, c.innerHTML = o.title), o.text && (a.innerHTML = o.text, c.innerHTML = o.text);
      const f = this._detectIOS() ? "touchstart" : "click";
      return i.DomEvent.on(a, "click", i.DomEvent.stopPropagation).on(a, "mousedown", i.DomEvent.stopPropagation).on(a, "dblclick", i.DomEvent.stopPropagation).on(a, "touchstart", i.DomEvent.stopPropagation).on(a, f, o.callback, o.context), a;
    }
  }), Nd(fr), i.CONSTANT = {
    precision: 6
  };
  const u = i.icon({
    iconUrl: Sd,
    // shadowUrl: iconShadow,
    // iconRetinaUrl: icon,
    iconSize: [r * Hd, r],
    iconAnchor: [r * 12 / r, r],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28]
    // shadowSize: [SIZE, SIZE]
  });
  return i.Marker.prototype.options.icon = u, i.Draw.Marker.prototype.options.icon = u, i.drawLocal = Id, i.Control.Draw.mergeOptions({
    split: !0
  }), i.Control.Draw.addInitHook(function() {
    if (i.SplitToolbar && this.options.split) {
      const o = new i.SplitToolbar(this.options.split);
      this._toolbars[i.SplitToolbar.TYPE] = o, this._toolbars[i.SplitToolbar.TYPE].on("enable", this._toolbarEnabled, this);
    }
  }), i.DrawToolbar.include({
    options: {
      polyline: {},
      polygon: {},
      rectangle: {},
      marker: {},
      image: {}
      //新增
    },
    // @method getModeHandlers(): object
    getModeHandlers: function(o) {
      return [
        {
          enabled: this.options.polyline,
          handler: new i.Draw.Polyline(o, this.options.polyline),
          title: i.drawLocal.draw.toolbar.buttons.polyline
        },
        {
          enabled: this.options.polygon,
          handler: new i.Draw.Polygon(o, this.options.polygon),
          title: i.drawLocal.draw.toolbar.buttons.polygon
        },
        {
          enabled: this.options.rectangle,
          handler: new i.Draw.Rectangle(o, this.options.rectangle),
          title: i.drawLocal.draw.toolbar.buttons.rectangle
        },
        {
          enabled: this.options.marker,
          handler: new i.Draw.Marker(o, this.options.marker),
          title: i.drawLocal.draw.toolbar.buttons.marker
        },
        {
          enabled: this.options.image,
          //新增
          handler: new i.Draw.Image(o, this.options.image),
          title: i.drawLocal.draw.toolbar.buttons.image
        }
      ];
    }
  }), i.Draw.Image.include({
    enable: function() {
      let o = this;
      this._map.fire("modal", {
        title: "导入图片",
        content: [
          "选择需要导入的图片<br>",
          "<table>",
          "  <tr>",
          '    <td>文件:</td><td><input type="file" id="file-input" /></td>',
          "  <tr></tr>",
          "  </tr>",
          "</table><br>"
        ].join(""),
        template: [
          '<div class="modal-header"><h2>{title}</h2></div>',
          "<hr>",
          '<div class="modal-body">{content}</div>',
          '<div class="modal-footer">',
          '  <button class="topcoat-button--large {OK_CLS}">{okText}</button>',
          '  <button class="topcoat-button--large {CANCEL_CLS}">{cancelText}</button>',
          "</div>"
        ].join(""),
        okText: "确定",
        cancelText: "取消",
        OK_CLS: "modal-ok",
        CANCEL_CLS: "modal-cancel",
        width: 300,
        onShow: function(a) {
          let c = a.modal, f = null;
          i.DomEvent.on(
            c._container.querySelector("#file-input"),
            "change",
            function(p) {
              let v = p.target.files[0];
              if (!v)
                return;
              let y = new FileReader();
              y.onload = function(x) {
                var W;
                f = (W = x.target) == null ? void 0 : W.result;
                const T = new Image();
                T.src = f, T.onload = () => {
                  o._scale = 100 / T.width, o._ratio = T.width / T.height;
                };
              }, y.readAsDataURL(v);
            }
          ).on(c._container.querySelector(".modal-ok"), "click", () => {
            f != null && (o._svgViewBox = "calculate", o._svgFitBounds = !0, o._template = f, i.Draw.SimpleShape.prototype.enable.call(o)), c.hide();
          }).on(c._container.querySelector(".modal-cancel"), "click", () => {
            c.hide();
          });
        }
      });
    }
  }), i;
};
const $r = {
  base: {
    center: [24.46, 118.1],
    zoom: 13,
    maxZoom: 20,
    attributionControl: !1,
    contextmenu: !0
  },
  draw: {
    image: !0
  },
  markerSize: 40,
  hash: !1
}, Gd = {
  data: {
    type: String,
    default: `{
  "type": "FeatureCollection",
  "features": []
}`
  },
  options: {
    type: Object,
    default: () => $r
  }
}, jd = /* @__PURE__ */ mn({
  props: Gd,
  emits: ["update"],
  setup(l, { expose: i, emit: r }) {
    const u = l, o = Fd(u), c = ((R = 5e9, j = 59999999999) => Td(R, j > R ? j : R + 9999999999).toString())(), f = o.tileLayer(
      // wprd01
      "http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scl=1&style=8&x={x}&y={y}&z={z}",
      {
        tms: !1,
        maxNativeZoom: 18,
        minZoom: 3,
        maxZoom: 20,
        attribution: "高德地图 AutoNavi.com",
        subdomains: "1234"
      }
    );
    let p = "default";
    const v = te(null), y = te(null), x = te(null), T = xi(() => gd(ad(u.options), $r));
    ga(
      () => u.data,
      () => {
        H();
      }
    );
    const W = () => {
      const R = new o.Map(v.value, T.value.base), j = o.featureGroup().addTo(R);
      y.value = R, x.value = j, T.value.hash && o.hash(R), o.control.scale().setPosition("bottomright").addTo(R), o.control.layers(
        {
          // google: GOOGLE_MAP.addTo(mapIns),
          // 高德: A_MAP.addTo(mapIns)
        },
        { 显示绘制元素: j },
        { position: "bottomleft", collapsed: !1 }
      ).addTo(R), f.addTo(R), H(), R.addControl(
        new o.Control.Draw({
          edit: {
            featureGroup: j
          },
          draw: {
            polygon: {
              showArea: !0
            },
            rectangle: { showArea: !0 },
            image: T.value.draw.image
          },
          split: { featureGroup: j }
        })
      ), R.on("draw:created", nt), R.on("draw:edited", ot).on("draw:deleted", ot), R.on("draw:drawstart", (F) => {
        F.layerType;
      }), R.on("popupopen", (F) => z(F)), R.on("draw:splittingstart", () => p = "splitting"), R.on("draw:splittingfinished", () => p = "default"), R.on(o.Draw.Event.SPLIT, (F) => w(F)), R.on(o.Draw.Event.PolylineMarkerRemove, (F) => B(F));
    };
    function nt(R) {
      console.log("e", R), x.value && x.value.addLayer(R.layer), ot();
    }
    function ot() {
      y.value && y.value.closePopup();
      let R = x.value.toGeoJSON(o.CONSTANT.precision);
      R = Md(R), r("update", R);
    }
    function Z(R) {
      if (!x.value)
        return;
      x.value.clearLayers();
      let j = 0;
      o.geoJson(R, {
        style: { color: "#000" },
        pointToLayer: function(Y, J) {
          return o.marker(J);
        }
      }).eachLayer(F);
      function F(Y) {
        Y.customIndex = j++, console.log(";", Y), Y.bindPopup(
          o.popup(
            {
              maxWidth: 500,
              maxHeight: 400,
              minWidth: 200,
              autoPanPadding: [5, 45],
              className: "popup"
            },
            Y
          ).setContent(X(Y))
        ), Y.addTo(x.value);
      }
    }
    function H() {
      const { valid: R } = Na(u.data);
      let j = JSON.parse(u.data);
      R || (j = {
        type: "FeatureCollection",
        features: []
      }), Z(j), j.features && j.features.length && p === "default" && y.value && C();
    }
    function C() {
      if (!x.value || !y.value)
        return;
      const R = x.value.getBounds();
      R.isValid() && y.value.fitBounds(R, { maxZoom: 18 });
    }
    function z(R) {
      const j = document.getElementById(`popup-save-${c}`), F = document.getElementById(`popup-cancel-${c}`), Y = document.getElementById(`popup-add-${c}`);
      F && F.addEventListener("click", () => {
        y.value.closePopup();
      }), j && j.addEventListener("click", () => {
        const J = document.querySelectorAll(`#popup-content-${c} tr`), $ = {};
        Array.from(J).forEach((E) => {
          const [I, k] = Array.from(E.childNodes), [O] = Array.from(I.childNodes), [A] = Array.from(k.childNodes), Q = O, et = A;
          Q && Q.value && et && et.value && ($[Q.value] = et.value);
        }), R.popup._source.feature.properties = $, ot();
      }), Y && Y.addEventListener("click", () => {
        const J = document.querySelectorAll(`#popup-content-${c} tbody`)[0], $ = document.createElement("tr");
        $.className = "el-row el-row--flex", J.appendChild($), $.innerHTML = G("", "");
      });
    }
    const V = (R) => {
      y.value.eachLayer(function(j) {
        j.customIndex === R && j.openPopup();
      });
    };
    function K(R, j = !1) {
      let F = "";
      Object.keys(R).length || (R = {});
      for (const Y in R)
        F += `<tr class="el-row el-row--flex">${G(Y, R[Y], j)}</tr>`;
      return F;
    }
    function G(R, j, F = !1) {
      const Y = [
        `<th class="el-col el-col-8 el-input el-input--mini"><input class="el-input__inner" type="text" value="${R}" `
      ];
      return F && Y.push("disabled"), Y.push(
        `></th><td class="el-col el-col-14 el-input el-input--mini"><input class="el-input__inner" type="text" value="${j}"></td>`
      ), Y.join("");
    }
    function X(R) {
      const {
        properties: j,
        geometry: { type: F }
      } = R.feature, Y = {
        _name: j._name,
        _gid: j._gid
      }, J = {};
      return Object.keys(j).forEach((E) => {
        Object.keys(Y).includes(E) || (J[E] = j[E]);
      }), `
       <div class="popup">
		<div class="title">属性</div>
        <div class="content">
          <table class="marker-properties" id="popup-content-${c}">
            <tbody>
			  ${K(Y, !0)}
              ${K(J)}
            </tbody>
          </table>
          <button id="popup-add-${c}">
          +新增属性
          </button>
        </div>
		<div class="bottom">
          <button id="popup-save-${c}" class="border primary">保存</button>
          <button id="popup-cancel-${c}" class="border">取消</button>
      </div>
		</div>
      `;
    }
    function dt() {
      y.value.invalidateSize();
    }
    function w(R) {
      const {
        poly: { feature: j, customIndex: F },
        items: [Y, J]
      } = R;
      let { coordinates: $ } = j.geometry;
      if ($.length, Y.length < 2 || J.length < 2)
        return Ta.warning("操作失败: 拆分后的每段线数据需要包含至少2个坐标点");
      const E = JSON.parse(u.data).features[F], I = [
        {
          ...E,
          geometry: {
            ...E.geometry,
            coordinates: Y.map(({ lat: O, lng: A }) => [A, O])
          }
        },
        {
          ...E,
          geometry: {
            ...E.geometry,
            coordinates: J.map(({ lat: O, lng: A }) => [A, O])
          }
        }
      ], k = JSON.parse(u.data);
      k.features.splice(F, 1, ...I), r("update", k);
    }
    function B(R) {
      const {
        poly: { _latlngs: j, customIndex: F }
      } = R, Y = JSON.parse(u.data);
      Y.features[F].geometry.coordinates = j.map(
        ({ lat: J, lng: $ }) => [$, J]
      ), r("update", Y);
    }
    const tt = (R, j) => {
      !R || !R.length || R instanceof Array && (R[0] instanceof Array ? y.value.flyToBounds(R, {
        maxZoom: j
      }) : y.value.flyTo(R, j));
    };
    return va(() => ya(() => W())), ba(() => {
      y.value.remove(), y.value = null, x.value = null;
    }), i({
      invalidateSize: dt,
      flyTo: tt,
      openPopup: V,
      fitView: C
    }), (R, j) => (mr(), La("div", {
      ref_key: "mapRef",
      ref: v,
      class: "mapView"
    }, null, 512));
  }
});
const qr = (l, i) => {
  const r = l.__vccOpts || l;
  for (const [u, o] of i)
    r[u] = o;
  return r;
}, Zd = /* @__PURE__ */ qr(jd, [["__scopeId", "data-v-b6d91919"]]), Vd = (l) => l, Wd = `{
  "type": "FeatureCollection",
  "features": []
}`, Kr = {
  UPDATE: "update:modelValue"
}, Yd = {
  modelValue: {
    type: Vd([String, Number, Object]),
    default: ""
  },
  height: {
    type: String,
    default: "500px"
  },
  width: {
    type: String,
    default: "500px"
  },
  // 是否使用编辑面板
  editorView: {
    type: Boolean,
    default: !1
  }
}, Xd = (l) => {
  const i = te(Wd), { emit: r } = xa();
  return {
    model: xi({
      get() {
        return l.modelValue ?? i.value;
      },
      set(o) {
        r(Kr.UPDATE, o), i.value = o;
      }
    })
  };
}, $d = (l, { model: i }) => ({ mapRef: te(null), updateMapItems: (o) => {
  console.log("updateMapItems", o), i.value = o ? JSON.stringify(o, null, 4) : "";
} }), qd = (l, { model: i, mapRef: r }) => {
  const u = te(null), o = te("json"), a = te(!1), c = te(""), f = xi(() => ({ left: a.value ? `-${180 + 46}px` : "8px", top: a.value ? 0 : "-1px" })), p = () => {
    a.value = !a.value, setTimeout(() => {
      var W;
      (W = r.value) == null || W.invalidateSize(!0);
    }, 20);
  }, v = (W) => {
    o.value === "json" ? i.value = W : c.value = W;
  }, y = () => {
    c.value = "", o.value = "json";
  };
  return {
    editorRef: u,
    fold: a,
    foldItemStyle: f,
    activeTab: o,
    errorGeojson: c,
    handleEditorChange: v,
    toggleFold: p,
    removeErrorTab: y,
    clearEditor: () => {
      u.value && u.value.reset();
    },
    handleTabRemove: (W) => {
      W === "geojsonValidate" && y();
    }
  };
}, Kd = mn({
  name: "geojson-io"
}), Jd = /* @__PURE__ */ mn({
  ...Kd,
  props: Yd,
  emits: [Kr.UPDATE],
  setup(l, { expose: i }) {
    const r = l, { model: u } = Xd(r), { mapRef: o, updateMapItems: a } = $d(r, { model: u }), {
      editorRef: c,
      fold: f,
      foldItemStyle: p,
      activeTab: v,
      errorGeojson: y,
      toggleFold: x,
      removeErrorTab: T,
      clearEditor: W,
      handleTabRemove: nt
    } = qd(r, { model: u, mapRef: o }), ot = xi(() => !r.editorView || f.value ? 24 : 16);
    return i({
      flyTo: (C, z) => {
        var V;
        return (V = o.value) == null ? void 0 : V.flyTo(C, z);
      },
      openPopup: (C) => {
        var z;
        return (z = o.value) == null ? void 0 : z.openPopup(C);
      }
    }), (C, z) => (mr(), wa(We(Ea), {
      class: "geojson-main",
      style: So({ height: C.height, width: C.width })
    }, {
      default: Io(() => [
        Ao(We(Ma), {
          class: "map-view",
          span: We(ot)
        }, {
          default: Io(() => [
            Ao(Zd, {
              ref_key: "mapRef",
              ref: o,
              style: So({ height: C.height }),
              onUpdate: We(a),
              data: We(u)
            }, null, 8, ["style", "onUpdate", "data"])
          ]),
          _: 1
        }, 8, ["span"])
      ]),
      _: 1
    }, 8, ["style"]));
  }
});
const ef = /* @__PURE__ */ qr(Jd, [["__scopeId", "data-v-5b9eb5c9"]]);
export {
  ef as default
};
