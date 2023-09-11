!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.CodeMirror = t());
})(this, function () {
  "use strict";
  function e(e) {
    return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
  }
  function t(e) {
    for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
    return e;
  }
  function r(e, r) {
    return t(e).appendChild(r);
  }
  function n(e, t, r, n) {
    var i = document.createElement(e);
    if (
      (r && (i.className = r), n && (i.style.cssText = n), "string" == typeof t)
    )
      i.appendChild(document.createTextNode(t));
    else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
    return i;
  }
  function i(e, t, r, i) {
    var o = n(e, t, r, i);
    return o.setAttribute("role", "presentation"), o;
  }
  function o(e, t) {
    if ((3 == t.nodeType && (t = t.parentNode), e.contains))
      return e.contains(t);
    do {
      if ((11 == t.nodeType && (t = t.host), t == e)) return !0;
    } while ((t = t.parentNode));
  }
  function l() {
    var e;
    try {
      e = document.activeElement;
    } catch (t) {
      e = document.body || null;
    }
    for (; e && e.shadowRoot && e.shadowRoot.activeElement; )
      e = e.shadowRoot.activeElement;
    return e;
  }
  function s(t, r) {
    var n = t.className;
    e(r).test(n) || (t.className += (n ? " " : "") + r);
  }
  function a(t, r) {
    for (var n = t.split(" "), i = 0; i < n.length; i++)
      n[i] && !e(n[i]).test(r) && (r += " " + n[i]);
    return r;
  }
  function u(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return function () {
      return e.apply(null, t);
    };
  }
  function c(e, t, r) {
    t || (t = {});
    for (var n in e)
      !e.hasOwnProperty(n) ||
        (!1 === r && t.hasOwnProperty(n)) ||
        (t[n] = e[n]);
    return t;
  }
  function h(e, t, r, n, i) {
    null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
    for (var o = n || 0, l = i || 0; ; ) {
      var s = e.indexOf("\t", o);
      if (s < 0 || s >= t) return l + (t - o);
      (l += s - o), (l += r - (l % r)), (o = s + 1);
    }
  }
  function f(e, t) {
    for (var r = 0; r < e.length; ++r) if (e[r] == t) return r;
    return -1;
  }
  function d(e, t, r) {
    for (var n = 0, i = 0; ; ) {
      var o = e.indexOf("\t", n);
      -1 == o && (o = e.length);
      var l = o - n;
      if (o == e.length || i + l >= t) return n + Math.min(l, t - i);
      if (((i += o - n), (i += r - (i % r)), (n = o + 1), i >= t)) return n;
    }
  }
  function p(e) {
    for (; wo.length <= e; ) wo.push(g(wo) + " ");
    return wo[e];
  }
  function g(e) {
    return e[e.length - 1];
  }
  function v(e, t) {
    for (var r = [], n = 0; n < e.length; n++) r[n] = t(e[n], n);
    return r;
  }
  function m() {}
  function y(e, t) {
    var r;
    return (
      Object.create
        ? (r = Object.create(e))
        : ((m.prototype = e), (r = new m())),
      t && c(t, r),
      r
    );
  }
  function b(e) {
    return (
      /\w/.test(e) ||
      (e > "" && (e.toUpperCase() != e.toLowerCase() || xo.test(e)))
    );
  }
  function w(e, t) {
    return t ? !!(t.source.indexOf("\\w") > -1 && b(e)) || t.test(e) : b(e);
  }
  function x(e) {
    for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
    return !0;
  }
  function C(e) {
    return e.charCodeAt(0) >= 768 && Co.test(e);
  }
  function S(e, t, r) {
    for (; (r < 0 ? t > 0 : t < e.length) && C(e.charAt(t)); ) t += r;
    return t;
  }
  function L(e, t, r) {
    for (var n = t > r ? -1 : 1; ; ) {
      if (t == r) return t;
      var i = (t + r) / 2,
        o = n < 0 ? Math.ceil(i) : Math.floor(i);
      if (o == t) return e(o) ? t : r;
      e(o) ? (r = o) : (t = o + n);
    }
  }
  function k(e, t) {
    if ((t -= e.first) < 0 || t >= e.size)
      throw new Error(
        "There is no line " + (t + e.first) + " in the document."
      );
    for (var r = e; !r.lines; )
      for (var n = 0; ; ++n) {
        var i = r.children[n],
          o = i.chunkSize();
        if (t < o) {
          r = i;
          break;
        }
        t -= o;
      }
    return r.lines[t];
  }
  function T(e, t, r) {
    var n = [],
      i = t.line;
    return (
      e.iter(t.line, r.line + 1, function (e) {
        var o = e.text;
        i == r.line && (o = o.slice(0, r.ch)),
          i == t.line && (o = o.slice(t.ch)),
          n.push(o),
          ++i;
      }),
      n
    );
  }
  function M(e, t, r) {
    var n = [];
    return (
      e.iter(t, r, function (e) {
        n.push(e.text);
      }),
      n
    );
  }
  function N(e, t) {
    var r = t - e.height;
    if (r) for (var n = e; n; n = n.parent) n.height += r;
  }
  function O(e) {
    if (null == e.parent) return null;
    for (
      var t = e.parent, r = f(t.lines, e), n = t.parent;
      n;
      t = n, n = n.parent
    )
      for (var i = 0; n.children[i] != t; ++i) r += n.children[i].chunkSize();
    return r + t.first;
  }
  function A(e, t) {
    var r = e.first;
    e: do {
      for (var n = 0; n < e.children.length; ++n) {
        var i = e.children[n],
          o = i.height;
        if (t < o) {
          e = i;
          continue e;
        }
        (t -= o), (r += i.chunkSize());
      }
      return r;
    } while (!e.lines);
    for (var l = 0; l < e.lines.length; ++l) {
      var s = e.lines[l].height;
      if (t < s) break;
      t -= s;
    }
    return r + l;
  }
  function W(e, t) {
    return t >= e.first && t < e.first + e.size;
  }
  function D(e, t) {
    return String(e.lineNumberFormatter(t + e.firstLineNumber));
  }
  function H(e, t, r) {
    if ((void 0 === r && (r = null), !(this instanceof H)))
      return new H(e, t, r);
    (this.line = e), (this.ch = t), (this.sticky = r);
  }
  function F(e, t) {
    return e.line - t.line || e.ch - t.ch;
  }
  function P(e, t) {
    return e.sticky == t.sticky && 0 == F(e, t);
  }
  function E(e) {
    return H(e.line, e.ch);
  }
  function z(e, t) {
    return F(e, t) < 0 ? t : e;
  }
  function I(e, t) {
    return F(e, t) < 0 ? e : t;
  }
  function R(e, t) {
    return Math.max(e.first, Math.min(t, e.first + e.size - 1));
  }
  function B(e, t) {
    if (t.line < e.first) return H(e.first, 0);
    var r = e.first + e.size - 1;
    return t.line > r
      ? H(r, k(e, r).text.length)
      : (function (e, t) {
          var r = e.ch;
          return null == r || r > t ? H(e.line, t) : r < 0 ? H(e.line, 0) : e;
        })(t, k(e, t.line).text.length);
  }
  function G(e, t) {
    for (var r = [], n = 0; n < t.length; n++) r[n] = B(e, t[n]);
    return r;
  }
  function U(e, t, r) {
    (this.marker = e), (this.from = t), (this.to = r);
  }
  function V(e, t) {
    if (e)
      for (var r = 0; r < e.length; ++r) {
        var n = e[r];
        if (n.marker == t) return n;
      }
  }
  function K(e, t) {
    for (var r, n = 0; n < e.length; ++n)
      e[n] != t && (r || (r = [])).push(e[n]);
    return r;
  }
  function j(e, t) {
    if (t.full) return null;
    var r = W(e, t.from.line) && k(e, t.from.line).markedSpans,
      n = W(e, t.to.line) && k(e, t.to.line).markedSpans;
    if (!r && !n) return null;
    var i = t.from.ch,
      o = t.to.ch,
      l = 0 == F(t.from, t.to),
      s = (function (e, t, r) {
        var n;
        if (e)
          for (var i = 0; i < e.length; ++i) {
            var o = e[i],
              l = o.marker;
            if (
              null == o.from ||
              (l.inclusiveLeft ? o.from <= t : o.from < t) ||
              (o.from == t &&
                "bookmark" == l.type &&
                (!r || !o.marker.insertLeft))
            ) {
              var s = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);
              (n || (n = [])).push(new U(l, o.from, s ? null : o.to));
            }
          }
        return n;
      })(r, i, l),
      a = (function (e, t, r) {
        var n;
        if (e)
          for (var i = 0; i < e.length; ++i) {
            var o = e[i],
              l = o.marker;
            if (
              null == o.to ||
              (l.inclusiveRight ? o.to >= t : o.to > t) ||
              (o.from == t &&
                "bookmark" == l.type &&
                (!r || o.marker.insertLeft))
            ) {
              var s =
                null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);
              (n || (n = [])).push(
                new U(l, s ? null : o.from - t, null == o.to ? null : o.to - t)
              );
            }
          }
        return n;
      })(n, o, l),
      u = 1 == t.text.length,
      c = g(t.text).length + (u ? i : 0);
    if (s)
      for (var h = 0; h < s.length; ++h) {
        var f = s[h];
        if (null == f.to) {
          var d = V(a, f.marker);
          d ? u && (f.to = null == d.to ? null : d.to + c) : (f.to = i);
        }
      }
    if (a)
      for (var p = 0; p < a.length; ++p) {
        var v = a[p];
        if ((null != v.to && (v.to += c), null == v.from)) {
          V(s, v.marker) || ((v.from = c), u && (s || (s = [])).push(v));
        } else (v.from += c), u && (s || (s = [])).push(v);
      }
    s && (s = X(s)), a && a != s && (a = X(a));
    var m = [s];
    if (!u) {
      var y,
        b = t.text.length - 2;
      if (b > 0 && s)
        for (var w = 0; w < s.length; ++w)
          null == s[w].to &&
            (y || (y = [])).push(new U(s[w].marker, null, null));
      for (var x = 0; x < b; ++x) m.push(y);
      m.push(a);
    }
    return m;
  }
  function X(e) {
    for (var t = 0; t < e.length; ++t) {
      var r = e[t];
      null != r.from &&
        r.from == r.to &&
        !1 !== r.marker.clearWhenEmpty &&
        e.splice(t--, 1);
    }
    return e.length ? e : null;
  }
  function Y(e) {
    var t = e.markedSpans;
    if (t) {
      for (var r = 0; r < t.length; ++r) t[r].marker.detachLine(e);
      e.markedSpans = null;
    }
  }
  function _(e, t) {
    if (t) {
      for (var r = 0; r < t.length; ++r) t[r].marker.attachLine(e);
      e.markedSpans = t;
    }
  }
  function q(e) {
    return e.inclusiveLeft ? -1 : 0;
  }
  function $(e) {
    return e.inclusiveRight ? 1 : 0;
  }
  function Z(e, t) {
    var r = e.lines.length - t.lines.length;
    if (0 != r) return r;
    var n = e.find(),
      i = t.find(),
      o = F(n.from, i.from) || q(e) - q(t);
    if (o) return -o;
    var l = F(n.to, i.to) || $(e) - $(t);
    return l || t.id - e.id;
  }
  function Q(e, t) {
    var r,
      n = Lo && e.markedSpans;
    if (n)
      for (var i = void 0, o = 0; o < n.length; ++o)
        (i = n[o]).marker.collapsed &&
          null == (t ? i.from : i.to) &&
          (!r || Z(r, i.marker) < 0) &&
          (r = i.marker);
    return r;
  }
  function J(e) {
    return Q(e, !0);
  }
  function ee(e) {
    return Q(e, !1);
  }
  function te(e, t, r, n, i) {
    var o = k(e, t),
      l = Lo && o.markedSpans;
    if (l)
      for (var s = 0; s < l.length; ++s) {
        var a = l[s];
        if (a.marker.collapsed) {
          var u = a.marker.find(0),
            c = F(u.from, r) || q(a.marker) - q(i),
            h = F(u.to, n) || $(a.marker) - $(i);
          if (
            !((c >= 0 && h <= 0) || (c <= 0 && h >= 0)) &&
            ((c <= 0 &&
              (a.marker.inclusiveRight && i.inclusiveLeft
                ? F(u.to, r) >= 0
                : F(u.to, r) > 0)) ||
              (c >= 0 &&
                (a.marker.inclusiveRight && i.inclusiveLeft
                  ? F(u.from, n) <= 0
                  : F(u.from, n) < 0)))
          )
            return !0;
        }
      }
  }
  function re(e) {
    for (var t; (t = J(e)); ) e = t.find(-1, !0).line;
    return e;
  }
  function ne(e, t) {
    var r = k(e, t),
      n = re(r);
    return r == n ? t : O(n);
  }
  function ie(e, t) {
    if (t > e.lastLine()) return t;
    var r,
      n = k(e, t);
    if (!oe(e, n)) return t;
    for (; (r = ee(n)); ) n = r.find(1, !0).line;
    return O(n) + 1;
  }
  function oe(e, t) {
    var r = Lo && t.markedSpans;
    if (r)
      for (var n = void 0, i = 0; i < r.length; ++i)
        if ((n = r[i]).marker.collapsed) {
          if (null == n.from) return !0;
          if (
            !n.marker.widgetNode &&
            0 == n.from &&
            n.marker.inclusiveLeft &&
            le(e, t, n)
          )
            return !0;
        }
  }
  function le(e, t, r) {
    if (null == r.to) {
      var n = r.marker.find(1, !0);
      return le(e, n.line, V(n.line.markedSpans, r.marker));
    }
    if (r.marker.inclusiveRight && r.to == t.text.length) return !0;
    for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
      if (
        (i = t.markedSpans[o]).marker.collapsed &&
        !i.marker.widgetNode &&
        i.from == r.to &&
        (null == i.to || i.to != r.from) &&
        (i.marker.inclusiveLeft || r.marker.inclusiveRight) &&
        le(e, t, i)
      )
        return !0;
  }
  function se(e) {
    for (var t = 0, r = (e = re(e)).parent, n = 0; n < r.lines.length; ++n) {
      var i = r.lines[n];
      if (i == e) break;
      t += i.height;
    }
    for (var o = r.parent; o; r = o, o = r.parent)
      for (var l = 0; l < o.children.length; ++l) {
        var s = o.children[l];
        if (s == r) break;
        t += s.height;
      }
    return t;
  }
  function ae(e) {
    if (0 == e.height) return 0;
    for (var t, r = e.text.length, n = e; (t = J(n)); ) {
      var i = t.find(0, !0);
      (n = i.from.line), (r += i.from.ch - i.to.ch);
    }
    for (n = e; (t = ee(n)); ) {
      var o = t.find(0, !0);
      (r -= n.text.length - o.from.ch),
        (r += (n = o.to.line).text.length - o.to.ch);
    }
    return r;
  }
  function ue(e) {
    var t = e.display,
      r = e.doc;
    (t.maxLine = k(r, r.first)),
      (t.maxLineLength = ae(t.maxLine)),
      (t.maxLineChanged = !0),
      r.iter(function (e) {
        var r = ae(e);
        r > t.maxLineLength && ((t.maxLineLength = r), (t.maxLine = e));
      });
  }
  function ce(e, t, r) {
    var n;
    ko = null;
    for (var i = 0; i < e.length; ++i) {
      var o = e[i];
      if (o.from < t && o.to > t) return i;
      o.to == t && (o.from != o.to && "before" == r ? (n = i) : (ko = i)),
        o.from == t && (o.from != o.to && "before" != r ? (n = i) : (ko = i));
    }
    return null != n ? n : ko;
  }
  function he(e, t) {
    var r = e.order;
    return null == r && (r = e.order = To(e.text, t)), r;
  }
  function fe(e, t) {
    return (e._handlers && e._handlers[t]) || Mo;
  }
  function de(e, t, r) {
    if (e.removeEventListener) e.removeEventListener(t, r, !1);
    else if (e.detachEvent) e.detachEvent("on" + t, r);
    else {
      var n = e._handlers,
        i = n && n[t];
      if (i) {
        var o = f(i, r);
        o > -1 && (n[t] = i.slice(0, o).concat(i.slice(o + 1)));
      }
    }
  }
  function pe(e, t) {
    var r = fe(e, t);
    if (r.length)
      for (
        var n = Array.prototype.slice.call(arguments, 2), i = 0;
        i < r.length;
        ++i
      )
        r[i].apply(null, n);
  }
  function ge(e, t, r) {
    return (
      "string" == typeof t &&
        (t = {
          type: t,
          preventDefault: function () {
            this.defaultPrevented = !0;
          },
        }),
      pe(e, r || t.type, e, t),
      xe(t) || t.codemirrorIgnore
    );
  }
  function ve(e) {
    var t = e._handlers && e._handlers.cursorActivity;
    if (t)
      for (
        var r =
            e.curOp.cursorActivityHandlers ||
            (e.curOp.cursorActivityHandlers = []),
          n = 0;
        n < t.length;
        ++n
      )
        -1 == f(r, t[n]) && r.push(t[n]);
  }
  function me(e, t) {
    return fe(e, t).length > 0;
  }
  function ye(e) {
    (e.prototype.on = function (e, t) {
      No(this, e, t);
    }),
      (e.prototype.off = function (e, t) {
        de(this, e, t);
      });
  }
  function be(e) {
    e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
  }
  function we(e) {
    e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
  }
  function xe(e) {
    return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue;
  }
  function Ce(e) {
    be(e), we(e);
  }
  function Se(e) {
    return e.target || e.srcElement;
  }
  function Le(e) {
    var t = e.which;
    return (
      null == t &&
        (1 & e.button
          ? (t = 1)
          : 2 & e.button
          ? (t = 3)
          : 4 & e.button && (t = 2)),
      ro && e.ctrlKey && 1 == t && (t = 3),
      t
    );
  }
  function ke(e) {
    if (null == fo) {
      var t = n("span", "​");
      r(e, n("span", [t, document.createTextNode("x")])),
        0 != e.firstChild.offsetHeight &&
          (fo = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(Ki && ji < 8));
    }
    var i = fo
      ? n("span", "​")
      : n(
          "span",
          " ",
          null,
          "display: inline-block; width: 1px; margin-right: -1px"
        );
    return i.setAttribute("cm-text", ""), i;
  }
  function Te(e) {
    if (null != po) return po;
    var n = r(e, document.createTextNode("AخA")),
      i = lo(n, 0, 1).getBoundingClientRect(),
      o = lo(n, 1, 2).getBoundingClientRect();
    return t(e), !(!i || i.left == i.right) && (po = o.right - i.right < 3);
  }
  function Me(e) {
    if ("string" == typeof e && Po.hasOwnProperty(e)) e = Po[e];
    else if (e && "string" == typeof e.name && Po.hasOwnProperty(e.name)) {
      var t = Po[e.name];
      "string" == typeof t && (t = { name: t }), ((e = y(t, e)).name = t.name);
    } else {
      if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
        return Me("application/xml");
      if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
        return Me("application/json");
    }
    return "string" == typeof e ? { name: e } : e || { name: "null" };
  }
  function Ne(e, t) {
    t = Me(t);
    var r = Fo[t.name];
    if (!r) return Ne(e, "text/plain");
    var n = r(e, t);
    if (Eo.hasOwnProperty(t.name)) {
      var i = Eo[t.name];
      for (var o in i)
        i.hasOwnProperty(o) &&
          (n.hasOwnProperty(o) && (n["_" + o] = n[o]), (n[o] = i[o]));
    }
    if (
      ((n.name = t.name),
      t.helperType && (n.helperType = t.helperType),
      t.modeProps)
    )
      for (var l in t.modeProps) n[l] = t.modeProps[l];
    return n;
  }
  function Oe(e, t) {
    c(t, Eo.hasOwnProperty(e) ? Eo[e] : (Eo[e] = {}));
  }
  function Ae(e, t) {
    if (!0 === t) return t;
    if (e.copyState) return e.copyState(t);
    var r = {};
    for (var n in t) {
      var i = t[n];
      i instanceof Array && (i = i.concat([])), (r[n] = i);
    }
    return r;
  }
  function We(e, t) {
    for (var r; e.innerMode && (r = e.innerMode(t)) && r.mode != e; )
      (t = r.state), (e = r.mode);
    return r || { mode: e, state: t };
  }
  function De(e, t, r) {
    return !e.startState || e.startState(t, r);
  }
  function He(e, t, r, n) {
    var i = [e.state.modeGen],
      o = {};
    Ge(
      e,
      t.text,
      e.doc.mode,
      r,
      function (e, t) {
        return i.push(e, t);
      },
      o,
      n
    );
    for (
      var l = r.state,
        s = function (n) {
          r.baseTokens = i;
          var s = e.state.overlays[n],
            a = 1,
            u = 0;
          (r.state = !0),
            Ge(
              e,
              t.text,
              s.mode,
              r,
              function (e, t) {
                for (var r = a; u < e; ) {
                  var n = i[a];
                  n > e && i.splice(a, 1, e, i[a + 1], n),
                    (a += 2),
                    (u = Math.min(e, n));
                }
                if (t)
                  if (s.opaque)
                    i.splice(r, a - r, e, "overlay " + t), (a = r + 2);
                  else
                    for (; r < a; r += 2) {
                      var o = i[r + 1];
                      i[r + 1] = (o ? o + " " : "") + "overlay " + t;
                    }
              },
              o
            ),
            (r.state = l),
            (r.baseTokens = null),
            (r.baseTokenPos = 1);
        },
        a = 0;
      a < e.state.overlays.length;
      ++a
    )
      s(a);
    return { styles: i, classes: o.bgClass || o.textClass ? o : null };
  }
  function Fe(e, t, r) {
    if (!t.styles || t.styles[0] != e.state.modeGen) {
      var n = Pe(e, O(t)),
        i =
          t.text.length > e.options.maxHighlightLength &&
          Ae(e.doc.mode, n.state),
        o = He(e, t, n);
      i && (n.state = i),
        (t.stateAfter = n.save(!i)),
        (t.styles = o.styles),
        o.classes
          ? (t.styleClasses = o.classes)
          : t.styleClasses && (t.styleClasses = null),
        r === e.doc.highlightFrontier &&
          (e.doc.modeFrontier = Math.max(
            e.doc.modeFrontier,
            ++e.doc.highlightFrontier
          ));
    }
    return t.styles;
  }
  function Pe(e, t, r) {
    var n = e.doc,
      i = e.display;
    if (!n.mode.startState) return new Ro(n, !0, t);
    var o = (function (e, t, r) {
        for (
          var n,
            i,
            o = e.doc,
            l = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100),
            s = t;
          s > l;
          --s
        ) {
          if (s <= o.first) return o.first;
          var a = k(o, s - 1),
            u = a.stateAfter;
          if (
            u &&
            (!r || s + (u instanceof Io ? u.lookAhead : 0) <= o.modeFrontier)
          )
            return s;
          var c = h(a.text, null, e.options.tabSize);
          (null == i || n > c) && ((i = s - 1), (n = c));
        }
        return i;
      })(e, t, r),
      l = o > n.first && k(n, o - 1).stateAfter,
      s = l ? Ro.fromSaved(n, l, o) : new Ro(n, De(n.mode), o);
    return (
      n.iter(o, t, function (r) {
        Ee(e, r.text, s);
        var n = s.line;
        (r.stateAfter =
          n == t - 1 || n % 5 == 0 || (n >= i.viewFrom && n < i.viewTo)
            ? s.save()
            : null),
          s.nextLine();
      }),
      r && (n.modeFrontier = s.line),
      s
    );
  }
  function Ee(e, t, r, n) {
    var i = e.doc.mode,
      o = new zo(t, e.options.tabSize, r);
    for (o.start = o.pos = n || 0, "" == t && ze(i, r.state); !o.eol(); )
      Ie(i, o, r.state), (o.start = o.pos);
  }
  function ze(e, t) {
    if (e.blankLine) return e.blankLine(t);
    if (e.innerMode) {
      var r = We(e, t);
      return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0;
    }
  }
  function Ie(e, t, r, n) {
    for (var i = 0; i < 10; i++) {
      n && (n[0] = We(e, r).mode);
      var o = e.token(t, r);
      if (t.pos > t.start) return o;
    }
    throw new Error("Mode " + e.name + " failed to advance stream.");
  }
  function Re(e, t, r, n) {
    var i,
      o,
      l = e.doc,
      s = l.mode,
      a = k(l, (t = B(l, t)).line),
      u = Pe(e, t.line, r),
      c = new zo(a.text, e.options.tabSize, u);
    for (n && (o = []); (n || c.pos < t.ch) && !c.eol(); )
      (c.start = c.pos),
        (i = Ie(s, c, u.state)),
        n && o.push(new Bo(c, i, Ae(l.mode, u.state)));
    return n ? o : new Bo(c, i, u.state);
  }
  function Be(e, t) {
    if (e)
      for (;;) {
        var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
        if (!r) break;
        e = e.slice(0, r.index) + e.slice(r.index + r[0].length);
        var n = r[1] ? "bgClass" : "textClass";
        null == t[n]
          ? (t[n] = r[2])
          : new RegExp("(?:^|s)" + r[2] + "(?:$|s)").test(t[n]) ||
            (t[n] += " " + r[2]);
      }
    return e;
  }
  function Ge(e, t, r, n, i, o, l) {
    var s = r.flattenSpans;
    null == s && (s = e.options.flattenSpans);
    var a,
      u = 0,
      c = null,
      h = new zo(t, e.options.tabSize, n),
      f = e.options.addModeClass && [null];
    for ("" == t && Be(ze(r, n.state), o); !h.eol(); ) {
      if (
        (h.pos > e.options.maxHighlightLength
          ? ((s = !1), l && Ee(e, t, n, h.pos), (h.pos = t.length), (a = null))
          : (a = Be(Ie(r, h, n.state, f), o)),
        f)
      ) {
        var d = f[0].name;
        d && (a = "m-" + (a ? d + " " + a : d));
      }
      if (!s || c != a) {
        for (; u < h.start; ) i((u = Math.min(h.start, u + 5e3)), c);
        c = a;
      }
      h.start = h.pos;
    }
    for (; u < h.pos; ) {
      var p = Math.min(h.pos, u + 5e3);
      i(p, c), (u = p);
    }
  }
  function Ue(e) {
    (e.parent = null), Y(e);
  }
  function Ve(e, t) {
    if (!e || /^\s*$/.test(e)) return null;
    var r = t.addModeClass ? Ko : Vo;
    return r[e] || (r[e] = e.replace(/\S+/g, "cm-$&"));
  }
  function Ke(e, t) {
    var r = i("span", null, null, Xi ? "padding-right: .1px" : null),
      n = {
        pre: i("pre", [r], "CodeMirror-line"),
        content: r,
        col: 0,
        pos: 0,
        cm: e,
        trailingSpace: !1,
        splitSpaces: (Ki || Xi) && e.getOption("lineWrapping"),
      };
    t.measure = {};
    for (var o = 0; o <= (t.rest ? t.rest.length : 0); o++) {
      var l = o ? t.rest[o - 1] : t.line,
        s = void 0;
      (n.pos = 0),
        (n.addToken = Xe),
        Te(e.display.measure) &&
          (s = he(l, e.doc.direction)) &&
          (n.addToken = (function (e, t) {
            return function (r, n, i, o, l, s, a) {
              i = i ? i + " cm-force-border" : "cm-force-border";
              for (var u = r.pos, c = u + n.length; ; ) {
                for (
                  var h = void 0, f = 0;
                  f < t.length && !((h = t[f]).to > u && h.from <= u);
                  f++
                );
                if (h.to >= c) return e(r, n, i, o, l, s, a);
                e(r, n.slice(0, h.to - u), i, o, null, s, a),
                  (o = null),
                  (n = n.slice(h.to - u)),
                  (u = h.to);
              }
            };
          })(n.addToken, s)),
        (n.map = []);
      !(function (e, t, r) {
        var n = e.markedSpans,
          i = e.text,
          o = 0;
        if (!n) {
          for (var l = 1; l < r.length; l += 2)
            t.addToken(t, i.slice(o, (o = r[l])), Ve(r[l + 1], t.cm.options));
          return;
        }
        for (
          var s, a, u, c, h, f, d, p = i.length, g = 0, v = 1, m = "", y = 0;
          ;

        ) {
          if (y == g) {
            (u = c = h = f = a = ""), (d = null), (y = 1 / 0);
            for (var b = [], w = void 0, x = 0; x < n.length; ++x) {
              var C = n[x],
                S = C.marker;
              "bookmark" == S.type && C.from == g && S.widgetNode
                ? b.push(S)
                : C.from <= g &&
                  (null == C.to ||
                    C.to > g ||
                    (S.collapsed && C.to == g && C.from == g))
                ? (null != C.to &&
                    C.to != g &&
                    y > C.to &&
                    ((y = C.to), (c = "")),
                  S.className && (u += " " + S.className),
                  S.css && (a = (a ? a + ";" : "") + S.css),
                  S.startStyle && C.from == g && (h += " " + S.startStyle),
                  S.endStyle &&
                    C.to == y &&
                    (w || (w = [])).push(S.endStyle, C.to),
                  S.title && !f && (f = S.title),
                  S.collapsed && (!d || Z(d.marker, S) < 0) && (d = C))
                : C.from > g && y > C.from && (y = C.from);
            }
            if (w)
              for (var L = 0; L < w.length; L += 2)
                w[L + 1] == y && (c += " " + w[L]);
            if (!d || d.from == g)
              for (var k = 0; k < b.length; ++k) Ye(t, 0, b[k]);
            if (d && (d.from || 0) == g) {
              if (
                (Ye(
                  t,
                  (null == d.to ? p + 1 : d.to) - g,
                  d.marker,
                  null == d.from
                ),
                null == d.to)
              )
                return;
              d.to == g && (d = !1);
            }
          }
          if (g >= p) break;
          for (var T = Math.min(p, y); ; ) {
            if (m) {
              var M = g + m.length;
              if (!d) {
                var N = M > T ? m.slice(0, T - g) : m;
                t.addToken(
                  t,
                  N,
                  s ? s + u : u,
                  h,
                  g + N.length == y ? c : "",
                  f,
                  a
                );
              }
              if (M >= T) {
                (m = m.slice(T - g)), (g = T);
                break;
              }
              (g = M), (h = "");
            }
            (m = i.slice(o, (o = r[v++]))), (s = Ve(r[v++], t.cm.options));
          }
        }
      })(l, n, Fe(e, l, t != e.display.externalMeasured && O(l))),
        l.styleClasses &&
          (l.styleClasses.bgClass &&
            (n.bgClass = a(l.styleClasses.bgClass, n.bgClass || "")),
          l.styleClasses.textClass &&
            (n.textClass = a(l.styleClasses.textClass, n.textClass || ""))),
        0 == n.map.length &&
          n.map.push(0, 0, n.content.appendChild(ke(e.display.measure))),
        0 == o
          ? ((t.measure.map = n.map), (t.measure.cache = {}))
          : ((t.measure.maps || (t.measure.maps = [])).push(n.map),
            (t.measure.caches || (t.measure.caches = [])).push({}));
    }
    if (Xi) {
      var u = n.content.lastChild;
      (/\bcm-tab\b/.test(u.className) ||
        (u.querySelector && u.querySelector(".cm-tab"))) &&
        (n.content.className = "cm-tab-wrap-hack");
    }
    return (
      pe(e, "renderLine", e, t.line, n.pre),
      n.pre.className && (n.textClass = a(n.pre.className, n.textClass || "")),
      n
    );
  }
  function je(e) {
    var t = n("span", "•", "cm-invalidchar");
    return (
      (t.title = "\\u" + e.charCodeAt(0).toString(16)),
      t.setAttribute("aria-label", t.title),
      t
    );
  }
  function Xe(e, t, r, i, o, l, s) {
    if (t) {
      var a,
        u = e.splitSpaces
          ? (function (e, t) {
              if (e.length > 1 && !/  /.test(e)) return e;
              for (var r = t, n = "", i = 0; i < e.length; i++) {
                var o = e.charAt(i);
                " " != o ||
                  !r ||
                  (i != e.length - 1 && 32 != e.charCodeAt(i + 1)) ||
                  (o = " "),
                  (n += o),
                  (r = " " == o);
              }
              return n;
            })(t, e.trailingSpace)
          : t,
        c = e.cm.state.specialChars,
        h = !1;
      if (c.test(t)) {
        a = document.createDocumentFragment();
        for (var f = 0; ; ) {
          c.lastIndex = f;
          var d = c.exec(t),
            g = d ? d.index - f : t.length - f;
          if (g) {
            var v = document.createTextNode(u.slice(f, f + g));
            Ki && ji < 9 ? a.appendChild(n("span", [v])) : a.appendChild(v),
              e.map.push(e.pos, e.pos + g, v),
              (e.col += g),
              (e.pos += g);
          }
          if (!d) break;
          f += g + 1;
          var m = void 0;
          if ("\t" == d[0]) {
            var y = e.cm.options.tabSize,
              b = y - (e.col % y);
            (m = a.appendChild(n("span", p(b), "cm-tab"))).setAttribute(
              "role",
              "presentation"
            ),
              m.setAttribute("cm-text", "\t"),
              (e.col += b);
          } else
            "\r" == d[0] || "\n" == d[0]
              ? ((m = a.appendChild(
                  n("span", "\r" == d[0] ? "␍" : "␤", "cm-invalidchar")
                )).setAttribute("cm-text", d[0]),
                (e.col += 1))
              : ((m = e.cm.options.specialCharPlaceholder(d[0])).setAttribute(
                  "cm-text",
                  d[0]
                ),
                Ki && ji < 9 ? a.appendChild(n("span", [m])) : a.appendChild(m),
                (e.col += 1));
          e.map.push(e.pos, e.pos + 1, m), e.pos++;
        }
      } else
        (e.col += t.length),
          (a = document.createTextNode(u)),
          e.map.push(e.pos, e.pos + t.length, a),
          Ki && ji < 9 && (h = !0),
          (e.pos += t.length);
      if (
        ((e.trailingSpace = 32 == u.charCodeAt(t.length - 1)),
        r || i || o || h || s)
      ) {
        var w = r || "";
        i && (w += i), o && (w += o);
        var x = n("span", [a], w, s);
        return l && (x.title = l), e.content.appendChild(x);
      }
      e.content.appendChild(a);
    }
  }
  function Ye(e, t, r, n) {
    var i = !n && r.widgetNode;
    i && e.map.push(e.pos, e.pos + t, i),
      !n &&
        e.cm.display.input.needsContentAttribute &&
        (i || (i = e.content.appendChild(document.createElement("span"))),
        i.setAttribute("cm-marker", r.id)),
      i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
      (e.pos += t),
      (e.trailingSpace = !1);
  }
  function _e(e, t, r) {
    (this.line = t),
      (this.rest = (function (e) {
        for (var t, r; (t = ee(e)); )
          (e = t.find(1, !0).line), (r || (r = [])).push(e);
        return r;
      })(t)),
      (this.size = this.rest ? O(g(this.rest)) - r + 1 : 1),
      (this.node = this.text = null),
      (this.hidden = oe(e, t));
  }
  function qe(e, t, r) {
    for (var n, i = [], o = t; o < r; o = n) {
      var l = new _e(e.doc, k(e.doc, o), o);
      (n = o + l.size), i.push(l);
    }
    return i;
  }
  function $e(e, t) {
    var r = fe(e, t);
    if (r.length) {
      var n,
        i = Array.prototype.slice.call(arguments, 2);
      jo
        ? (n = jo.delayedCallbacks)
        : Xo
        ? (n = Xo)
        : ((n = Xo = []), setTimeout(Ze, 0));
      for (
        var o = function (e) {
            n.push(function () {
              return r[e].apply(null, i);
            });
          },
          l = 0;
        l < r.length;
        ++l
      )
        o(l);
    }
  }
  function Ze() {
    var e = Xo;
    Xo = null;
    for (var t = 0; t < e.length; ++t) e[t]();
  }
  function Qe(e, t, r, n) {
    for (var i = 0; i < t.changes.length; i++) {
      var o = t.changes[i];
      "text" == o
        ? (function (e, t) {
            var r = t.text.className,
              n = et(e, t);
            t.text == t.node && (t.node = n.pre);
            t.text.parentNode.replaceChild(n.pre, t.text),
              (t.text = n.pre),
              n.bgClass != t.bgClass || n.textClass != t.textClass
                ? ((t.bgClass = n.bgClass),
                  (t.textClass = n.textClass),
                  tt(e, t))
                : r && (t.text.className = r);
          })(e, t)
        : "gutter" == o
        ? rt(e, t, r, n)
        : "class" == o
        ? tt(e, t)
        : "widget" == o &&
          (function (e, t, r) {
            t.alignable && (t.alignable = null);
            for (var n = t.node.firstChild, i = void 0; n; n = i)
              (i = n.nextSibling),
                "CodeMirror-linewidget" == n.className && t.node.removeChild(n);
            it(e, t, r);
          })(e, t, n);
    }
    t.changes = null;
  }
  function Je(e) {
    return (
      e.node == e.text &&
        ((e.node = n("div", null, null, "position: relative")),
        e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
        e.node.appendChild(e.text),
        Ki && ji < 8 && (e.node.style.zIndex = 2)),
      e.node
    );
  }
  function et(e, t) {
    var r = e.display.externalMeasured;
    return r && r.line == t.line
      ? ((e.display.externalMeasured = null), (t.measure = r.measure), r.built)
      : Ke(e, t);
  }
  function tt(e, t) {
    !(function (e, t) {
      var r = t.bgClass
        ? t.bgClass + " " + (t.line.bgClass || "")
        : t.line.bgClass;
      if ((r && (r += " CodeMirror-linebackground"), t.background))
        r
          ? (t.background.className = r)
          : (t.background.parentNode.removeChild(t.background),
            (t.background = null));
      else if (r) {
        var i = Je(t);
        (t.background = i.insertBefore(n("div", null, r), i.firstChild)),
          e.display.input.setUneditable(t.background);
      }
    })(e, t),
      t.line.wrapClass
        ? (Je(t).className = t.line.wrapClass)
        : t.node != t.text && (t.node.className = "");
    var r = t.textClass
      ? t.textClass + " " + (t.line.textClass || "")
      : t.line.textClass;
    t.text.className = r || "";
  }
  function rt(e, t, r, i) {
    if (
      (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
      t.gutterBackground &&
        (t.node.removeChild(t.gutterBackground), (t.gutterBackground = null)),
      t.line.gutterClass)
    ) {
      var o = Je(t);
      (t.gutterBackground = n(
        "div",
        null,
        "CodeMirror-gutter-background " + t.line.gutterClass,
        "left: " +
          (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) +
          "px; width: " +
          i.gutterTotalWidth +
          "px"
      )),
        e.display.input.setUneditable(t.gutterBackground),
        o.insertBefore(t.gutterBackground, t.text);
    }
    var l = t.line.gutterMarkers;
    if (e.options.lineNumbers || l) {
      var s = Je(t),
        a = (t.gutter = n(
          "div",
          null,
          "CodeMirror-gutter-wrapper",
          "left: " +
            (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) +
            "px"
        ));
      if (
        (e.display.input.setUneditable(a),
        s.insertBefore(a, t.text),
        t.line.gutterClass && (a.className += " " + t.line.gutterClass),
        !e.options.lineNumbers ||
          (l && l["CodeMirror-linenumbers"]) ||
          (t.lineNumber = a.appendChild(
            n(
              "div",
              D(e.options, r),
              "CodeMirror-linenumber CodeMirror-gutter-elt",
              "left: " +
                i.gutterLeft["CodeMirror-linenumbers"] +
                "px; width: " +
                e.display.lineNumInnerWidth +
                "px"
            )
          )),
        l)
      )
        for (var u = 0; u < e.options.gutters.length; ++u) {
          var c = e.options.gutters[u],
            h = l.hasOwnProperty(c) && l[c];
          h &&
            a.appendChild(
              n(
                "div",
                [h],
                "CodeMirror-gutter-elt",
                "left: " +
                  i.gutterLeft[c] +
                  "px; width: " +
                  i.gutterWidth[c] +
                  "px"
              )
            );
        }
    }
  }
  function nt(e, t, r, n) {
    var i = et(e, t);
    return (
      (t.text = t.node = i.pre),
      i.bgClass && (t.bgClass = i.bgClass),
      i.textClass && (t.textClass = i.textClass),
      tt(e, t),
      rt(e, t, r, n),
      it(e, t, n),
      t.node
    );
  }
  function it(e, t, r) {
    if ((ot(e, t.line, t, r, !0), t.rest))
      for (var n = 0; n < t.rest.length; n++) ot(e, t.rest[n], t, r, !1);
  }
  function ot(e, t, r, i, o) {
    if (t.widgets)
      for (var l = Je(r), s = 0, a = t.widgets; s < a.length; ++s) {
        var u = a[s],
          c = n("div", [u.node], "CodeMirror-linewidget");
        u.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"),
          (function (e, t, r, n) {
            if (e.noHScroll) {
              (r.alignable || (r.alignable = [])).push(t);
              var i = n.wrapperWidth;
              (t.style.left = n.fixedPos + "px"),
                e.coverGutter ||
                  ((i -= n.gutterTotalWidth),
                  (t.style.paddingLeft = n.gutterTotalWidth + "px")),
                (t.style.width = i + "px");
            }
            e.coverGutter &&
              ((t.style.zIndex = 5),
              (t.style.position = "relative"),
              e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + "px"));
          })(u, c, r, i),
          e.display.input.setUneditable(c),
          o && u.above
            ? l.insertBefore(c, r.gutter || r.text)
            : l.appendChild(c),
          $e(u, "redraw");
      }
  }
  function lt(e) {
    if (null != e.height) return e.height;
    var t = e.doc.cm;
    if (!t) return 0;
    if (!o(document.body, e.node)) {
      var i = "position: relative;";
      e.coverGutter &&
        (i += "margin-left: -" + t.display.gutters.offsetWidth + "px;"),
        e.noHScroll && (i += "width: " + t.display.wrapper.clientWidth + "px;"),
        r(t.display.measure, n("div", [e.node], null, i));
    }
    return (e.height = e.node.parentNode.offsetHeight);
  }
  function st(e, t) {
    for (var r = Se(t); r != e.wrapper; r = r.parentNode)
      if (
        !r ||
        (1 == r.nodeType && "true" == r.getAttribute("cm-ignore-events")) ||
        (r.parentNode == e.sizer && r != e.mover)
      )
        return !0;
  }
  function at(e) {
    return e.lineSpace.offsetTop;
  }
  function ut(e) {
    return e.mover.offsetHeight - e.lineSpace.offsetHeight;
  }
  function ct(e) {
    if (e.cachedPaddingH) return e.cachedPaddingH;
    var t = r(e.measure, n("pre", "x")),
      i = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
      o = { left: parseInt(i.paddingLeft), right: parseInt(i.paddingRight) };
    return isNaN(o.left) || isNaN(o.right) || (e.cachedPaddingH = o), o;
  }
  function ht(e) {
    return go - e.display.nativeBarWidth;
  }
  function ft(e) {
    return e.display.scroller.clientWidth - ht(e) - e.display.barWidth;
  }
  function dt(e) {
    return e.display.scroller.clientHeight - ht(e) - e.display.barHeight;
  }
  function pt(e, t, r) {
    if (e.line == t) return { map: e.measure.map, cache: e.measure.cache };
    for (var n = 0; n < e.rest.length; n++)
      if (e.rest[n] == t)
        return { map: e.measure.maps[n], cache: e.measure.caches[n] };
    for (var i = 0; i < e.rest.length; i++)
      if (O(e.rest[i]) > r)
        return {
          map: e.measure.maps[i],
          cache: e.measure.caches[i],
          before: !0,
        };
  }
  function gt(e, t, r, n) {
    return yt(e, mt(e, t), r, n);
  }
  function vt(e, t) {
    if (t >= e.display.viewFrom && t < e.display.viewTo)
      return e.display.view[Kt(e, t)];
    var r = e.display.externalMeasured;
    return r && t >= r.lineN && t < r.lineN + r.size ? r : void 0;
  }
  function mt(e, t) {
    var n = O(t),
      i = vt(e, n);
    i && !i.text
      ? (i = null)
      : i && i.changes && (Qe(e, i, n, Rt(e)), (e.curOp.forceUpdate = !0)),
      i ||
        (i = (function (e, t) {
          var n = O((t = re(t))),
            i = (e.display.externalMeasured = new _e(e.doc, t, n));
          i.lineN = n;
          var o = (i.built = Ke(e, i));
          return (i.text = o.pre), r(e.display.lineMeasure, o.pre), i;
        })(e, t));
    var o = pt(i, t, n);
    return {
      line: t,
      view: i,
      rect: null,
      map: o.map,
      cache: o.cache,
      before: o.before,
      hasHeights: !1,
    };
  }
  function yt(e, t, i, o, l) {
    t.before && (i = -1);
    var s,
      a = i + (o || "");
    return (
      t.cache.hasOwnProperty(a)
        ? (s = t.cache[a])
        : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
          t.hasHeights ||
            (!(function (e, t, r) {
              var n = e.options.lineWrapping,
                i = n && ft(e);
              if (!t.measure.heights || (n && t.measure.width != i)) {
                var o = (t.measure.heights = []);
                if (n) {
                  t.measure.width = i;
                  for (
                    var l = t.text.firstChild.getClientRects(), s = 0;
                    s < l.length - 1;
                    s++
                  ) {
                    var a = l[s],
                      u = l[s + 1];
                    Math.abs(a.bottom - u.bottom) > 2 &&
                      o.push((a.bottom + u.top) / 2 - r.top);
                  }
                }
                o.push(r.bottom - r.top);
              }
            })(e, t.view, t.rect),
            (t.hasHeights = !0)),
          (s = (function (e, t, i, o) {
            var l,
              s = bt(t.map, i, o),
              a = s.node,
              u = s.start,
              c = s.end,
              h = s.collapse;
            if (3 == a.nodeType) {
              for (var f = 0; f < 4; f++) {
                for (; u && C(t.line.text.charAt(s.coverStart + u)); ) --u;
                for (
                  ;
                  s.coverStart + c < s.coverEnd &&
                  C(t.line.text.charAt(s.coverStart + c));

                )
                  ++c;
                if (
                  (l =
                    Ki && ji < 9 && 0 == u && c == s.coverEnd - s.coverStart
                      ? a.parentNode.getBoundingClientRect()
                      : wt(lo(a, u, c).getClientRects(), o)).left ||
                  l.right ||
                  0 == u
                )
                  break;
                (c = u), (u -= 1), (h = "right");
              }
              Ki &&
                ji < 11 &&
                (l = (function (e, t) {
                  if (
                    !window.screen ||
                    null == screen.logicalXDPI ||
                    screen.logicalXDPI == screen.deviceXDPI ||
                    !(function (e) {
                      if (null != Ho) return Ho;
                      var t = r(e, n("span", "x")),
                        i = t.getBoundingClientRect(),
                        o = lo(t, 0, 1).getBoundingClientRect();
                      return (Ho = Math.abs(i.left - o.left) > 1);
                    })(e)
                  )
                    return t;
                  var i = screen.logicalXDPI / screen.deviceXDPI,
                    o = screen.logicalYDPI / screen.deviceYDPI;
                  return {
                    left: t.left * i,
                    right: t.right * i,
                    top: t.top * o,
                    bottom: t.bottom * o,
                  };
                })(e.display.measure, l));
            } else {
              u > 0 && (h = o = "right");
              var d;
              l =
                e.options.lineWrapping && (d = a.getClientRects()).length > 1
                  ? d["right" == o ? d.length - 1 : 0]
                  : a.getBoundingClientRect();
            }
            if (Ki && ji < 9 && !u && (!l || (!l.left && !l.right))) {
              var p = a.parentNode.getClientRects()[0];
              l = p
                ? {
                    left: p.left,
                    right: p.left + It(e.display),
                    top: p.top,
                    bottom: p.bottom,
                  }
                : Yo;
            }
            for (
              var g = l.top - t.rect.top,
                v = l.bottom - t.rect.top,
                m = (g + v) / 2,
                y = t.view.measure.heights,
                b = 0;
              b < y.length - 1 && !(m < y[b]);
              b++
            );
            var w = b ? y[b - 1] : 0,
              x = y[b],
              S = {
                left: ("right" == h ? l.right : l.left) - t.rect.left,
                right: ("left" == h ? l.left : l.right) - t.rect.left,
                top: w,
                bottom: x,
              };
            l.left || l.right || (S.bogus = !0);
            e.options.singleCursorHeightPerLine ||
              ((S.rtop = g), (S.rbottom = v));
            return S;
          })(e, t, i, o)).bogus || (t.cache[a] = s)),
      {
        left: s.left,
        right: s.right,
        top: l ? s.rtop : s.top,
        bottom: l ? s.rbottom : s.bottom,
      }
    );
  }
  function bt(e, t, r) {
    for (var n, i, o, l, s, a, u = 0; u < e.length; u += 3)
      if (
        ((s = e[u]),
        (a = e[u + 1]),
        t < s
          ? ((i = 0), (o = 1), (l = "left"))
          : t < a
          ? (o = (i = t - s) + 1)
          : (u == e.length - 3 || (t == a && e[u + 3] > t)) &&
            ((i = (o = a - s) - 1), t >= a && (l = "right")),
        null != i)
      ) {
        if (
          ((n = e[u + 2]),
          s == a && r == (n.insertLeft ? "left" : "right") && (l = r),
          "left" == r && 0 == i)
        )
          for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft; )
            (n = e[2 + (u -= 3)]), (l = "left");
        if ("right" == r && i == a - s)
          for (
            ;
            u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft;

          )
            (n = e[(u += 3) + 2]), (l = "right");
        break;
      }
    return {
      node: n,
      start: i,
      end: o,
      collapse: l,
      coverStart: s,
      coverEnd: a,
    };
  }
  function wt(e, t) {
    var r = Yo;
    if ("left" == t)
      for (var n = 0; n < e.length && (r = e[n]).left == r.right; n++);
    else for (var i = e.length - 1; i >= 0 && (r = e[i]).left == r.right; i--);
    return r;
  }
  function xt(e) {
    if (
      e.measure &&
      ((e.measure.cache = {}), (e.measure.heights = null), e.rest)
    )
      for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
  }
  function Ct(e) {
    (e.display.externalMeasure = null), t(e.display.lineMeasure);
    for (var r = 0; r < e.display.view.length; r++) xt(e.display.view[r]);
  }
  function St(e) {
    Ct(e),
      (e.display.cachedCharWidth =
        e.display.cachedTextHeight =
        e.display.cachedPaddingH =
          null),
      e.options.lineWrapping || (e.display.maxLineChanged = !0),
      (e.display.lineNumChars = null);
  }
  function Lt() {
    return _i && eo
      ? -(
          document.body.getBoundingClientRect().left -
          parseInt(getComputedStyle(document.body).marginLeft)
        )
      : window.pageXOffset ||
          (document.documentElement || document.body).scrollLeft;
  }
  function kt() {
    return _i && eo
      ? -(
          document.body.getBoundingClientRect().top -
          parseInt(getComputedStyle(document.body).marginTop)
        )
      : window.pageYOffset ||
          (document.documentElement || document.body).scrollTop;
  }
  function Tt(e) {
    var t = 0;
    if (e.widgets)
      for (var r = 0; r < e.widgets.length; ++r)
        e.widgets[r].above && (t += lt(e.widgets[r]));
    return t;
  }
  function Mt(e, t, r, n, i) {
    if (!i) {
      var o = Tt(t);
      (r.top += o), (r.bottom += o);
    }
    if ("line" == n) return r;
    n || (n = "local");
    var l = se(t);
    if (
      ("local" == n ? (l += at(e.display)) : (l -= e.display.viewOffset),
      "page" == n || "window" == n)
    ) {
      var s = e.display.lineSpace.getBoundingClientRect();
      l += s.top + ("window" == n ? 0 : kt());
      var a = s.left + ("window" == n ? 0 : Lt());
      (r.left += a), (r.right += a);
    }
    return (r.top += l), (r.bottom += l), r;
  }
  function Nt(e, t, r) {
    if ("div" == r) return t;
    var n = t.left,
      i = t.top;
    if ("page" == r) (n -= Lt()), (i -= kt());
    else if ("local" == r || !r) {
      var o = e.display.sizer.getBoundingClientRect();
      (n += o.left), (i += o.top);
    }
    var l = e.display.lineSpace.getBoundingClientRect();
    return { left: n - l.left, top: i - l.top };
  }
  function Ot(e, t, r, n, i) {
    return n || (n = k(e.doc, t.line)), Mt(e, n, gt(e, n, t.ch, i), r);
  }
  function At(e, t, r, n, i, o) {
    function l(t, l) {
      var s = yt(e, i, t, l ? "right" : "left", o);
      return l ? (s.left = s.right) : (s.right = s.left), Mt(e, n, s, r);
    }
    function s(e, t, r) {
      var n = 1 == a[t].level;
      return l(r ? e - 1 : e, n != r);
    }
    (n = n || k(e.doc, t.line)), i || (i = mt(e, n));
    var a = he(n, e.doc.direction),
      u = t.ch,
      c = t.sticky;
    if (
      (u >= n.text.length
        ? ((u = n.text.length), (c = "before"))
        : u <= 0 && ((u = 0), (c = "after")),
      !a)
    )
      return l("before" == c ? u - 1 : u, "before" == c);
    var h = ce(a, u, c),
      f = ko,
      d = s(u, h, "before" == c);
    return null != f && (d.other = s(u, f, "before" != c)), d;
  }
  function Wt(e, t) {
    var r = 0;
    (t = B(e.doc, t)), e.options.lineWrapping || (r = It(e.display) * t.ch);
    var n = k(e.doc, t.line),
      i = se(n) + at(e.display);
    return { left: r, right: r, top: i, bottom: i + n.height };
  }
  function Dt(e, t, r, n, i) {
    var o = H(e, t, r);
    return (o.xRel = i), n && (o.outside = !0), o;
  }
  function Ht(e, t, r) {
    var n = e.doc;
    if ((r += e.display.viewOffset) < 0) return Dt(n.first, 0, null, !0, -1);
    var i = A(n, r),
      o = n.first + n.size - 1;
    if (i > o)
      return Dt(n.first + n.size - 1, k(n, o).text.length, null, !0, 1);
    t < 0 && (t = 0);
    for (var l = k(n, i); ; ) {
      var s = (function (e, t, r, n, i) {
          i -= se(t);
          var o = mt(e, t),
            l = Tt(t),
            s = 0,
            a = t.text.length,
            u = !0,
            c = he(t, e.doc.direction);
          if (c) {
            var h = (
              e.options.lineWrapping
                ? function (e, t, r, n, i, o, l) {
                    var s = Ft(e, t, n, l),
                      a = s.begin,
                      u = s.end;
                    /\s/.test(t.text.charAt(u - 1)) && u--;
                    for (var c = null, h = null, f = 0; f < i.length; f++) {
                      var d = i[f];
                      if (!(d.from >= u || d.to <= a)) {
                        var p = 1 != d.level,
                          g = yt(
                            e,
                            n,
                            p ? Math.min(u, d.to) - 1 : Math.max(a, d.from)
                          ).right,
                          v = g < o ? o - g + 1e9 : g - o;
                        (!c || h > v) && ((c = d), (h = v));
                      }
                    }
                    c || (c = i[i.length - 1]);
                    c.from < a && (c = { from: a, to: c.to, level: c.level });
                    c.to > u && (c = { from: c.from, to: u, level: c.level });
                    return c;
                  }
                : function (e, t, r, n, i, o, l) {
                    var s = L(
                        function (s) {
                          var a = i[s],
                            u = 1 != a.level;
                          return Et(
                            At(
                              e,
                              H(r, u ? a.to : a.from, u ? "before" : "after"),
                              "line",
                              t,
                              n
                            ),
                            o,
                            l,
                            !0
                          );
                        },
                        0,
                        i.length - 1
                      ),
                      a = i[s];
                    if (s > 0) {
                      var u = 1 != a.level,
                        c = At(
                          e,
                          H(r, u ? a.from : a.to, u ? "after" : "before"),
                          "line",
                          t,
                          n
                        );
                      Et(c, o, l, !0) && c.top > l && (a = i[s - 1]);
                    }
                    return a;
                  }
            )(e, t, r, o, c, n, i);
            (u = 1 != h.level),
              (s = u ? h.from : h.to - 1),
              (a = u ? h.to : h.from - 1);
          }
          var f,
            d,
            p = null,
            g = null,
            v = L(
              function (t) {
                var r = yt(e, o, t);
                return (
                  (r.top += l),
                  (r.bottom += l),
                  !!Et(r, n, i, !1) &&
                    (r.top <= i && r.left <= n && ((p = t), (g = r)), !0)
                );
              },
              s,
              a
            ),
            m = !1;
          if (g) {
            var y = n - g.left < g.right - n,
              b = y == u;
            (v = p + (b ? 0 : 1)),
              (d = b ? "after" : "before"),
              (f = y ? g.left : g.right);
          } else {
            u || (v != a && v != s) || v++,
              (d =
                0 == v
                  ? "after"
                  : v == t.text.length
                  ? "before"
                  : yt(e, o, v - (u ? 1 : 0)).bottom + l <= i == u
                  ? "after"
                  : "before");
            var w = At(e, H(r, v, d), "line", t, o);
            (f = w.left), (m = i < w.top || i >= w.bottom);
          }
          return (v = S(t.text, v, 1)), Dt(r, v, d, m, n - f);
        })(e, l, i, t, r),
        a = ee(l),
        u = a && a.find(0, !0);
      if (!a || !(s.ch > u.from.ch || (s.ch == u.from.ch && s.xRel > 0)))
        return s;
      i = O((l = u.to.line));
    }
  }
  function Ft(e, t, r, n) {
    n -= Tt(t);
    var i = t.text.length,
      o = L(
        function (t) {
          return yt(e, r, t - 1).bottom <= n;
        },
        i,
        0
      );
    return (
      (i = L(
        function (t) {
          return yt(e, r, t).top > n;
        },
        o,
        i
      )),
      { begin: o, end: i }
    );
  }
  function Pt(e, t, r, n) {
    r || (r = mt(e, t));
    return Ft(e, t, r, Mt(e, t, yt(e, r, n), "line").top);
  }
  function Et(e, t, r, n) {
    return !(e.bottom <= r) && (e.top > r || (n ? e.left : e.right) > t);
  }
  function zt(e) {
    if (null != e.cachedTextHeight) return e.cachedTextHeight;
    if (null == Uo) {
      Uo = n("pre");
      for (var i = 0; i < 49; ++i)
        Uo.appendChild(document.createTextNode("x")), Uo.appendChild(n("br"));
      Uo.appendChild(document.createTextNode("x"));
    }
    r(e.measure, Uo);
    var o = Uo.offsetHeight / 50;
    return o > 3 && (e.cachedTextHeight = o), t(e.measure), o || 1;
  }
  function It(e) {
    if (null != e.cachedCharWidth) return e.cachedCharWidth;
    var t = n("span", "xxxxxxxxxx"),
      i = n("pre", [t]);
    r(e.measure, i);
    var o = t.getBoundingClientRect(),
      l = (o.right - o.left) / 10;
    return l > 2 && (e.cachedCharWidth = l), l || 10;
  }
  function Rt(e) {
    for (
      var t = e.display,
        r = {},
        n = {},
        i = t.gutters.clientLeft,
        o = t.gutters.firstChild,
        l = 0;
      o;
      o = o.nextSibling, ++l
    )
      (r[e.options.gutters[l]] = o.offsetLeft + o.clientLeft + i),
        (n[e.options.gutters[l]] = o.clientWidth);
    return {
      fixedPos: Bt(t),
      gutterTotalWidth: t.gutters.offsetWidth,
      gutterLeft: r,
      gutterWidth: n,
      wrapperWidth: t.wrapper.clientWidth,
    };
  }
  function Bt(e) {
    return (
      e.scroller.getBoundingClientRect().left -
      e.sizer.getBoundingClientRect().left
    );
  }
  function Gt(e) {
    var t = zt(e.display),
      r = e.options.lineWrapping,
      n = r && Math.max(5, e.display.scroller.clientWidth / It(e.display) - 3);
    return function (i) {
      if (oe(e.doc, i)) return 0;
      var o = 0;
      if (i.widgets)
        for (var l = 0; l < i.widgets.length; l++)
          i.widgets[l].height && (o += i.widgets[l].height);
      return r ? o + (Math.ceil(i.text.length / n) || 1) * t : o + t;
    };
  }
  function Ut(e) {
    var t = e.doc,
      r = Gt(e);
    t.iter(function (e) {
      var t = r(e);
      t != e.height && N(e, t);
    });
  }
  function Vt(e, t, r, n) {
    var i = e.display;
    if (!r && "true" == Se(t).getAttribute("cm-not-content")) return null;
    var o,
      l,
      s = i.lineSpace.getBoundingClientRect();
    try {
      (o = t.clientX - s.left), (l = t.clientY - s.top);
    } catch (t) {
      return null;
    }
    var a,
      u = Ht(e, o, l);
    if (n && 1 == u.xRel && (a = k(e.doc, u.line).text).length == u.ch) {
      var c = h(a, a.length, e.options.tabSize) - a.length;
      u = H(
        u.line,
        Math.max(0, Math.round((o - ct(e.display).left) / It(e.display)) - c)
      );
    }
    return u;
  }
  function Kt(e, t) {
    if (t >= e.display.viewTo) return null;
    if ((t -= e.display.viewFrom) < 0) return null;
    for (var r = e.display.view, n = 0; n < r.length; n++)
      if ((t -= r[n].size) < 0) return n;
  }
  function jt(e) {
    e.display.input.showSelection(e.display.input.prepareSelection());
  }
  function Xt(e, t) {
    void 0 === t && (t = !0);
    for (
      var r = e.doc,
        i = {},
        o = (i.cursors = document.createDocumentFragment()),
        l = (i.selection = document.createDocumentFragment()),
        s = 0;
      s < r.sel.ranges.length;
      s++
    )
      if (t || s != r.sel.primIndex) {
        var a = r.sel.ranges[s];
        if (
          !(
            a.from().line >= e.display.viewTo ||
            a.to().line < e.display.viewFrom
          )
        ) {
          var u = a.empty();
          (u || e.options.showCursorWhenSelecting) && Yt(e, a.head, o),
            u ||
              (function (e, t, r) {
                function i(e, t, r, i) {
                  t < 0 && (t = 0),
                    (t = Math.round(t)),
                    (i = Math.round(i)),
                    a.appendChild(
                      n(
                        "div",
                        null,
                        "CodeMirror-selected",
                        "position: absolute; left: " +
                          e +
                          "px;\n                             top: " +
                          t +
                          "px; width: " +
                          (null == r ? h - e : r) +
                          "px;\n                             height: " +
                          (i - t) +
                          "px"
                      )
                    );
                }
                function o(t, r, n) {
                  function o(r, n) {
                    return Ot(e, H(t, r), "div", d, n);
                  }
                  function l(t, r, n) {
                    var i = Pt(e, d, null, t),
                      l = ("ltr" == r) == ("after" == n) ? "left" : "right";
                    return o(
                      "after" == n
                        ? i.begin
                        : i.end - (/\s/.test(d.text.charAt(i.end - 1)) ? 2 : 1),
                      l
                    )[l];
                  }
                  var a,
                    u,
                    d = k(s, t),
                    p = d.text.length,
                    g = he(d, s.direction);
                  return (
                    (function (e, t, r, n) {
                      if (!e) return n(t, r, "ltr", 0);
                      for (var i = !1, o = 0; o < e.length; ++o) {
                        var l = e[o];
                        ((l.from < r && l.to > t) || (t == r && l.to == t)) &&
                          (n(
                            Math.max(l.from, t),
                            Math.min(l.to, r),
                            1 == l.level ? "rtl" : "ltr",
                            o
                          ),
                          (i = !0));
                      }
                      i || n(t, r, "ltr");
                    })(g, r || 0, null == n ? p : n, function (e, t, s, d) {
                      var v = "ltr" == s,
                        m = o(e, v ? "left" : "right"),
                        y = o(t - 1, v ? "right" : "left"),
                        b = null == r && 0 == e,
                        w = null == n && t == p,
                        x = 0 == d,
                        C = !g || d == g.length - 1;
                      if (y.top - m.top <= 3) {
                        var S = (f ? w : b) && C,
                          L = (f ? b : w) && x ? c : (v ? m : y).left,
                          k = S ? h : (v ? y : m).right;
                        i(L, m.top, k - L, m.bottom);
                      } else {
                        var T, M, N, O;
                        v
                          ? ((T = f && b && x ? c : m.left),
                            (M = f ? h : l(e, s, "before")),
                            (N = f ? c : l(t, s, "after")),
                            (O = f && w && C ? h : y.right))
                          : ((T = f ? l(e, s, "before") : c),
                            (M = !f && b && x ? h : m.right),
                            (N = !f && w && C ? c : y.left),
                            (O = f ? l(t, s, "after") : h)),
                          i(T, m.top, M - T, m.bottom),
                          m.bottom < y.top && i(c, m.bottom, null, y.top),
                          i(N, y.top, O - N, y.bottom);
                      }
                      (!a || _t(m, a) < 0) && (a = m),
                        _t(y, a) < 0 && (a = y),
                        (!u || _t(m, u) < 0) && (u = m),
                        _t(y, u) < 0 && (u = y);
                    }),
                    { start: a, end: u }
                  );
                }
                var l = e.display,
                  s = e.doc,
                  a = document.createDocumentFragment(),
                  u = ct(e.display),
                  c = u.left,
                  h =
                    Math.max(l.sizerWidth, ft(e) - l.sizer.offsetLeft) -
                    u.right,
                  f = "ltr" == s.direction;
                var d = t.from(),
                  p = t.to();
                if (d.line == p.line) o(d.line, d.ch, p.ch);
                else {
                  var g = k(s, d.line),
                    v = k(s, p.line),
                    m = re(g) == re(v),
                    y = o(d.line, d.ch, m ? g.text.length + 1 : null).end,
                    b = o(p.line, m ? 0 : null, p.ch).start;
                  m &&
                    (y.top < b.top - 2
                      ? (i(y.right, y.top, null, y.bottom),
                        i(c, b.top, b.left, b.bottom))
                      : i(y.right, y.top, b.left - y.right, y.bottom)),
                    y.bottom < b.top && i(c, y.bottom, null, b.top);
                }
                r.appendChild(a);
              })(e, a, l);
        }
      }
    return i;
  }
  function Yt(e, t, r) {
    var i = At(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
      o = r.appendChild(n("div", " ", "CodeMirror-cursor"));
    if (
      ((o.style.left = i.left + "px"),
      (o.style.top = i.top + "px"),
      (o.style.height =
        Math.max(0, i.bottom - i.top) * e.options.cursorHeight + "px"),
      i.other)
    ) {
      var l = r.appendChild(
        n("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor")
      );
      (l.style.display = ""),
        (l.style.left = i.other.left + "px"),
        (l.style.top = i.other.top + "px"),
        (l.style.height = 0.85 * (i.other.bottom - i.other.top) + "px");
    }
  }
  function _t(e, t) {
    return e.top - t.top || e.left - t.left;
  }
  function qt(e) {
    if (e.state.focused) {
      var t = e.display;
      clearInterval(t.blinker);
      var r = !0;
      (t.cursorDiv.style.visibility = ""),
        e.options.cursorBlinkRate > 0
          ? (t.blinker = setInterval(function () {
              return (t.cursorDiv.style.visibility = (r = !r) ? "" : "hidden");
            }, e.options.cursorBlinkRate))
          : e.options.cursorBlinkRate < 0 &&
            (t.cursorDiv.style.visibility = "hidden");
    }
  }
  function $t(e) {
    e.state.focused || (e.display.input.focus(), Qt(e));
  }
  function Zt(e) {
    (e.state.delayingBlurEvent = !0),
      setTimeout(function () {
        e.state.delayingBlurEvent && ((e.state.delayingBlurEvent = !1), Jt(e));
      }, 100);
  }
  function Qt(e, t) {
    e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
      "nocursor" != e.options.readOnly &&
        (e.state.focused ||
          (pe(e, "focus", e, t),
          (e.state.focused = !0),
          s(e.display.wrapper, "CodeMirror-focused"),
          e.curOp ||
            e.display.selForContextMenu == e.doc.sel ||
            (e.display.input.reset(),
            Xi &&
              setTimeout(function () {
                return e.display.input.reset(!0);
              }, 20)),
          e.display.input.receivedFocus()),
        qt(e));
  }
  function Jt(e, t) {
    e.state.delayingBlurEvent ||
      (e.state.focused &&
        (pe(e, "blur", e, t),
        (e.state.focused = !1),
        uo(e.display.wrapper, "CodeMirror-focused")),
      clearInterval(e.display.blinker),
      setTimeout(function () {
        e.state.focused || (e.display.shift = !1);
      }, 150));
  }
  function er(e) {
    for (
      var t = e.display, r = t.lineDiv.offsetTop, n = 0;
      n < t.view.length;
      n++
    ) {
      var i = t.view[n],
        o = void 0;
      if (!i.hidden) {
        if (Ki && ji < 8) {
          var l = i.node.offsetTop + i.node.offsetHeight;
          (o = l - r), (r = l);
        } else {
          var s = i.node.getBoundingClientRect();
          o = s.bottom - s.top;
        }
        var a = i.line.height - o;
        if (
          (o < 2 && (o = zt(t)),
          (a > 0.005 || a < -0.005) && (N(i.line, o), tr(i.line), i.rest))
        )
          for (var u = 0; u < i.rest.length; u++) tr(i.rest[u]);
      }
    }
  }
  function tr(e) {
    if (e.widgets)
      for (var t = 0; t < e.widgets.length; ++t) {
        var r = e.widgets[t],
          n = r.node.parentNode;
        n && (r.height = n.offsetHeight);
      }
  }
  function rr(e, t, r) {
    var n = r && null != r.top ? Math.max(0, r.top) : e.scroller.scrollTop;
    n = Math.floor(n - at(e));
    var i = r && null != r.bottom ? r.bottom : n + e.wrapper.clientHeight,
      o = A(t, n),
      l = A(t, i);
    if (r && r.ensure) {
      var s = r.ensure.from.line,
        a = r.ensure.to.line;
      s < o
        ? ((o = s), (l = A(t, se(k(t, s)) + e.wrapper.clientHeight)))
        : Math.min(a, t.lastLine()) >= l &&
          ((o = A(t, se(k(t, a)) - e.wrapper.clientHeight)), (l = a));
    }
    return { from: o, to: Math.max(l, o + 1) };
  }
  function nr(e) {
    var t = e.display,
      r = t.view;
    if (t.alignWidgets || (t.gutters.firstChild && e.options.fixedGutter)) {
      for (
        var n = Bt(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
          i = t.gutters.offsetWidth,
          o = n + "px",
          l = 0;
        l < r.length;
        l++
      )
        if (!r[l].hidden) {
          e.options.fixedGutter &&
            (r[l].gutter && (r[l].gutter.style.left = o),
            r[l].gutterBackground && (r[l].gutterBackground.style.left = o));
          var s = r[l].alignable;
          if (s) for (var a = 0; a < s.length; a++) s[a].style.left = o;
        }
      e.options.fixedGutter && (t.gutters.style.left = n + i + "px");
    }
  }
  function ir(e) {
    if (!e.options.lineNumbers) return !1;
    var t = e.doc,
      r = D(e.options, t.first + t.size - 1),
      i = e.display;
    if (r.length != i.lineNumChars) {
      var o = i.measure.appendChild(
          n("div", [n("div", r)], "CodeMirror-linenumber CodeMirror-gutter-elt")
        ),
        l = o.firstChild.offsetWidth,
        s = o.offsetWidth - l;
      return (
        (i.lineGutter.style.width = ""),
        (i.lineNumInnerWidth = Math.max(l, i.lineGutter.offsetWidth - s) + 1),
        (i.lineNumWidth = i.lineNumInnerWidth + s),
        (i.lineNumChars = i.lineNumInnerWidth ? r.length : -1),
        (i.lineGutter.style.width = i.lineNumWidth + "px"),
        Fr(e),
        !0
      );
    }
    return !1;
  }
  function or(e, t) {
    var r = e.display,
      n = zt(e.display);
    t.top < 0 && (t.top = 0);
    var i =
        e.curOp && null != e.curOp.scrollTop
          ? e.curOp.scrollTop
          : r.scroller.scrollTop,
      o = dt(e),
      l = {};
    t.bottom - t.top > o && (t.bottom = t.top + o);
    var s = e.doc.height + ut(r),
      a = t.top < n,
      u = t.bottom > s - n;
    if (t.top < i) l.scrollTop = a ? 0 : t.top;
    else if (t.bottom > i + o) {
      var c = Math.min(t.top, (u ? s : t.bottom) - o);
      c != i && (l.scrollTop = c);
    }
    var h =
        e.curOp && null != e.curOp.scrollLeft
          ? e.curOp.scrollLeft
          : r.scroller.scrollLeft,
      f = ft(e) - (e.options.fixedGutter ? r.gutters.offsetWidth : 0),
      d = t.right - t.left > f;
    return (
      d && (t.right = t.left + f),
      t.left < 10
        ? (l.scrollLeft = 0)
        : t.left < h
        ? (l.scrollLeft = Math.max(0, t.left - (d ? 0 : 10)))
        : t.right > f + h - 3 && (l.scrollLeft = t.right + (d ? 0 : 10) - f),
      l
    );
  }
  function lr(e, t) {
    null != t &&
      (ur(e),
      (e.curOp.scrollTop =
        (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t));
  }
  function sr(e) {
    ur(e);
    var t = e.getCursor();
    e.curOp.scrollToPos = {
      from: t,
      to: t,
      margin: e.options.cursorScrollMargin,
    };
  }
  function ar(e, t, r) {
    (null == t && null == r) || ur(e),
      null != t && (e.curOp.scrollLeft = t),
      null != r && (e.curOp.scrollTop = r);
  }
  function ur(e) {
    var t = e.curOp.scrollToPos;
    if (t) {
      e.curOp.scrollToPos = null;
      cr(e, Wt(e, t.from), Wt(e, t.to), t.margin);
    }
  }
  function cr(e, t, r, n) {
    var i = or(e, {
      left: Math.min(t.left, r.left),
      top: Math.min(t.top, r.top) - n,
      right: Math.max(t.right, r.right),
      bottom: Math.max(t.bottom, r.bottom) + n,
    });
    ar(e, i.scrollLeft, i.scrollTop);
  }
  function hr(e, t) {
    Math.abs(e.doc.scrollTop - t) < 2 ||
      (Bi || Hr(e, { top: t }), fr(e, t, !0), Bi && Hr(e), Or(e, 100));
  }
  function fr(e, t, r) {
    (t = Math.min(
      e.display.scroller.scrollHeight - e.display.scroller.clientHeight,
      t
    )),
      (e.display.scroller.scrollTop != t || r) &&
        ((e.doc.scrollTop = t),
        e.display.scrollbars.setScrollTop(t),
        e.display.scroller.scrollTop != t &&
          (e.display.scroller.scrollTop = t));
  }
  function dr(e, t, r, n) {
    (t = Math.min(
      t,
      e.display.scroller.scrollWidth - e.display.scroller.clientWidth
    )),
      ((r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) &&
        !n) ||
        ((e.doc.scrollLeft = t),
        nr(e),
        e.display.scroller.scrollLeft != t &&
          (e.display.scroller.scrollLeft = t),
        e.display.scrollbars.setScrollLeft(t));
  }
  function pr(e) {
    var t = e.display,
      r = t.gutters.offsetWidth,
      n = Math.round(e.doc.height + ut(e.display));
    return {
      clientHeight: t.scroller.clientHeight,
      viewHeight: t.wrapper.clientHeight,
      scrollWidth: t.scroller.scrollWidth,
      clientWidth: t.scroller.clientWidth,
      viewWidth: t.wrapper.clientWidth,
      barLeft: e.options.fixedGutter ? r : 0,
      docHeight: n,
      scrollHeight: n + ht(e) + t.barHeight,
      nativeBarWidth: t.nativeBarWidth,
      gutterWidth: r,
    };
  }
  function gr(e, t) {
    t || (t = pr(e));
    var r = e.display.barWidth,
      n = e.display.barHeight;
    vr(e, t);
    for (
      var i = 0;
      (i < 4 && r != e.display.barWidth) || n != e.display.barHeight;
      i++
    )
      r != e.display.barWidth && e.options.lineWrapping && er(e),
        vr(e, pr(e)),
        (r = e.display.barWidth),
        (n = e.display.barHeight);
  }
  function vr(e, t) {
    var r = e.display,
      n = r.scrollbars.update(t);
    (r.sizer.style.paddingRight = (r.barWidth = n.right) + "px"),
      (r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + "px"),
      (r.heightForcer.style.borderBottom = n.bottom + "px solid transparent"),
      n.right && n.bottom
        ? ((r.scrollbarFiller.style.display = "block"),
          (r.scrollbarFiller.style.height = n.bottom + "px"),
          (r.scrollbarFiller.style.width = n.right + "px"))
        : (r.scrollbarFiller.style.display = ""),
      n.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter
        ? ((r.gutterFiller.style.display = "block"),
          (r.gutterFiller.style.height = n.bottom + "px"),
          (r.gutterFiller.style.width = t.gutterWidth + "px"))
        : (r.gutterFiller.style.display = "");
  }
  function mr(e) {
    e.display.scrollbars &&
      (e.display.scrollbars.clear(),
      e.display.scrollbars.addClass &&
        uo(e.display.wrapper, e.display.scrollbars.addClass)),
      (e.display.scrollbars = new $o[e.options.scrollbarStyle](
        function (t) {
          e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
            No(t, "mousedown", function () {
              e.state.focused &&
                setTimeout(function () {
                  return e.display.input.focus();
                }, 0);
            }),
            t.setAttribute("cm-not-content", "true");
        },
        function (t, r) {
          "horizontal" == r ? dr(e, t) : hr(e, t);
        },
        e
      )),
      e.display.scrollbars.addClass &&
        s(e.display.wrapper, e.display.scrollbars.addClass);
  }
  function yr(e) {
    (e.curOp = {
      cm: e,
      viewChanged: !1,
      startHeight: e.doc.height,
      forceUpdate: !1,
      updateInput: null,
      typing: !1,
      changeObjs: null,
      cursorActivityHandlers: null,
      cursorActivityCalled: 0,
      selectionChanged: !1,
      updateMaxLine: !1,
      scrollLeft: null,
      scrollTop: null,
      scrollToPos: null,
      focus: !1,
      id: ++Zo,
    }),
      (function (e) {
        jo
          ? jo.ops.push(e)
          : (e.ownsGroup = jo = { ops: [e], delayedCallbacks: [] });
      })(e.curOp);
  }
  function br(e) {
    !(function (e, t) {
      var r = e.ownsGroup;
      if (r)
        try {
          !(function (e) {
            var t = e.delayedCallbacks,
              r = 0;
            do {
              for (; r < t.length; r++) t[r].call(null);
              for (var n = 0; n < e.ops.length; n++) {
                var i = e.ops[n];
                if (i.cursorActivityHandlers)
                  for (
                    ;
                    i.cursorActivityCalled < i.cursorActivityHandlers.length;

                  )
                    i.cursorActivityHandlers[i.cursorActivityCalled++].call(
                      null,
                      i.cm
                    );
              }
            } while (r < t.length);
          })(r);
        } finally {
          (jo = null), t(r);
        }
    })(e.curOp, function (e) {
      for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
      !(function (e) {
        for (var t = e.ops, r = 0; r < t.length; r++)
          !(function (e) {
            var t = e.cm,
              r = t.display;
            (function (e) {
              var t = e.display;
              !t.scrollbarsClipped &&
                t.scroller.offsetWidth &&
                ((t.nativeBarWidth =
                  t.scroller.offsetWidth - t.scroller.clientWidth),
                (t.heightForcer.style.height = ht(e) + "px"),
                (t.sizer.style.marginBottom = -t.nativeBarWidth + "px"),
                (t.sizer.style.borderRightWidth = ht(e) + "px"),
                (t.scrollbarsClipped = !0));
            })(t),
              e.updateMaxLine && ue(t);
            (e.mustUpdate =
              e.viewChanged ||
              e.forceUpdate ||
              null != e.scrollTop ||
              (e.scrollToPos &&
                (e.scrollToPos.from.line < r.viewFrom ||
                  e.scrollToPos.to.line >= r.viewTo)) ||
              (r.maxLineChanged && t.options.lineWrapping)),
              (e.update =
                e.mustUpdate &&
                new Qo(
                  t,
                  e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos },
                  e.forceUpdate
                ));
          })(t[r]);
        for (var i = 0; i < t.length; i++)
          !(function (e) {
            e.updatedDisplay = e.mustUpdate && Wr(e.cm, e.update);
          })(t[i]);
        for (var o = 0; o < t.length; o++)
          !(function (e) {
            var t = e.cm,
              r = t.display;
            e.updatedDisplay && er(t);
            (e.barMeasure = pr(t)),
              r.maxLineChanged &&
                !t.options.lineWrapping &&
                ((e.adjustWidthTo =
                  gt(t, r.maxLine, r.maxLine.text.length).left + 3),
                (t.display.sizerWidth = e.adjustWidthTo),
                (e.barMeasure.scrollWidth = Math.max(
                  r.scroller.clientWidth,
                  r.sizer.offsetLeft +
                    e.adjustWidthTo +
                    ht(t) +
                    t.display.barWidth
                )),
                (e.maxScrollLeft = Math.max(
                  0,
                  r.sizer.offsetLeft + e.adjustWidthTo - ft(t)
                )));
            (e.updatedDisplay || e.selectionChanged) &&
              (e.preparedSelection = r.input.prepareSelection());
          })(t[o]);
        for (var s = 0; s < t.length; s++)
          !(function (e) {
            var t = e.cm;
            null != e.adjustWidthTo &&
              ((t.display.sizer.style.minWidth = e.adjustWidthTo + "px"),
              e.maxScrollLeft < t.doc.scrollLeft &&
                dr(
                  t,
                  Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft),
                  !0
                ),
              (t.display.maxLineChanged = !1));
            var r = e.focus && e.focus == l();
            e.preparedSelection &&
              t.display.input.showSelection(e.preparedSelection, r);
            (e.updatedDisplay || e.startHeight != t.doc.height) &&
              gr(t, e.barMeasure);
            e.updatedDisplay && Pr(t, e.barMeasure);
            e.selectionChanged && qt(t);
            t.state.focused && e.updateInput && t.display.input.reset(e.typing);
            r && $t(e.cm);
          })(t[s]);
        for (var a = 0; a < t.length; a++)
          !(function (e) {
            var t = e.cm,
              r = t.display,
              i = t.doc;
            e.updatedDisplay && Dr(t, e.update);
            null == r.wheelStartX ||
              (null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos) ||
              (r.wheelStartX = r.wheelStartY = null);
            null != e.scrollTop && fr(t, e.scrollTop, e.forceScroll);
            null != e.scrollLeft && dr(t, e.scrollLeft, !0, !0);
            if (e.scrollToPos) {
              var o = (function (e, t, r, n) {
                null == n && (n = 0);
                var i;
                e.options.lineWrapping ||
                  t != r ||
                  (r =
                    "before" ==
                    (t = t.ch
                      ? H(
                          t.line,
                          "before" == t.sticky ? t.ch - 1 : t.ch,
                          "after"
                        )
                      : t).sticky
                      ? H(t.line, t.ch + 1, "before")
                      : t);
                for (var o = 0; o < 5; o++) {
                  var l = !1,
                    s = At(e, t),
                    a = r && r != t ? At(e, r) : s,
                    u = or(
                      e,
                      (i = {
                        left: Math.min(s.left, a.left),
                        top: Math.min(s.top, a.top) - n,
                        right: Math.max(s.left, a.left),
                        bottom: Math.max(s.bottom, a.bottom) + n,
                      })
                    ),
                    c = e.doc.scrollTop,
                    h = e.doc.scrollLeft;
                  if (
                    (null != u.scrollTop &&
                      (hr(e, u.scrollTop),
                      Math.abs(e.doc.scrollTop - c) > 1 && (l = !0)),
                    null != u.scrollLeft &&
                      (dr(e, u.scrollLeft),
                      Math.abs(e.doc.scrollLeft - h) > 1 && (l = !0)),
                    !l)
                  )
                    break;
                }
                return i;
              })(
                t,
                B(i, e.scrollToPos.from),
                B(i, e.scrollToPos.to),
                e.scrollToPos.margin
              );
              !(function (e, t) {
                if (!ge(e, "scrollCursorIntoView")) {
                  var r = e.display,
                    i = r.sizer.getBoundingClientRect(),
                    o = null;
                  if (
                    (t.top + i.top < 0
                      ? (o = !0)
                      : t.bottom + i.top >
                          (window.innerHeight ||
                            document.documentElement.clientHeight) && (o = !1),
                    null != o && !Qi)
                  ) {
                    var l = n(
                      "div",
                      "​",
                      null,
                      "position: absolute;\n                         top: " +
                        (t.top - r.viewOffset - at(e.display)) +
                        "px;\n                         height: " +
                        (t.bottom - t.top + ht(e) + r.barHeight) +
                        "px;\n                         left: " +
                        t.left +
                        "px; width: " +
                        Math.max(2, t.right - t.left) +
                        "px;"
                    );
                    e.display.lineSpace.appendChild(l),
                      l.scrollIntoView(o),
                      e.display.lineSpace.removeChild(l);
                  }
                }
              })(t, o);
            }
            var l = e.maybeHiddenMarkers,
              s = e.maybeUnhiddenMarkers;
            if (l)
              for (var a = 0; a < l.length; ++a)
                l[a].lines.length || pe(l[a], "hide");
            if (s)
              for (var u = 0; u < s.length; ++u)
                s[u].lines.length && pe(s[u], "unhide");
            r.wrapper.offsetHeight &&
              (i.scrollTop = t.display.scroller.scrollTop);
            e.changeObjs && pe(t, "changes", t, e.changeObjs);
            e.update && e.update.finish();
          })(t[a]);
      })(e);
    });
  }
  function wr(e, t) {
    if (e.curOp) return t();
    yr(e);
    try {
      return t();
    } finally {
      br(e);
    }
  }
  function xr(e, t) {
    return function () {
      if (e.curOp) return t.apply(e, arguments);
      yr(e);
      try {
        return t.apply(e, arguments);
      } finally {
        br(e);
      }
    };
  }
  function Cr(e) {
    return function () {
      if (this.curOp) return e.apply(this, arguments);
      yr(this);
      try {
        return e.apply(this, arguments);
      } finally {
        br(this);
      }
    };
  }
  function Sr(e) {
    return function () {
      var t = this.cm;
      if (!t || t.curOp) return e.apply(this, arguments);
      yr(t);
      try {
        return e.apply(this, arguments);
      } finally {
        br(t);
      }
    };
  }
  function Lr(e, t, r, n) {
    null == t && (t = e.doc.first),
      null == r && (r = e.doc.first + e.doc.size),
      n || (n = 0);
    var i = e.display;
    if (
      (n &&
        r < i.viewTo &&
        (null == i.updateLineNumbers || i.updateLineNumbers > t) &&
        (i.updateLineNumbers = t),
      (e.curOp.viewChanged = !0),
      t >= i.viewTo)
    )
      Lo && ne(e.doc, t) < i.viewTo && Tr(e);
    else if (r <= i.viewFrom)
      Lo && ie(e.doc, r + n) > i.viewFrom
        ? Tr(e)
        : ((i.viewFrom += n), (i.viewTo += n));
    else if (t <= i.viewFrom && r >= i.viewTo) Tr(e);
    else if (t <= i.viewFrom) {
      var o = Mr(e, r, r + n, 1);
      o
        ? ((i.view = i.view.slice(o.index)),
          (i.viewFrom = o.lineN),
          (i.viewTo += n))
        : Tr(e);
    } else if (r >= i.viewTo) {
      var l = Mr(e, t, t, -1);
      l ? ((i.view = i.view.slice(0, l.index)), (i.viewTo = l.lineN)) : Tr(e);
    } else {
      var s = Mr(e, t, t, -1),
        a = Mr(e, r, r + n, 1);
      s && a
        ? ((i.view = i.view
            .slice(0, s.index)
            .concat(qe(e, s.lineN, a.lineN))
            .concat(i.view.slice(a.index))),
          (i.viewTo += n))
        : Tr(e);
    }
    var u = i.externalMeasured;
    u &&
      (r < u.lineN
        ? (u.lineN += n)
        : t < u.lineN + u.size && (i.externalMeasured = null));
  }
  function kr(e, t, r) {
    e.curOp.viewChanged = !0;
    var n = e.display,
      i = e.display.externalMeasured;
    if (
      (i && t >= i.lineN && t < i.lineN + i.size && (n.externalMeasured = null),
      !(t < n.viewFrom || t >= n.viewTo))
    ) {
      var o = n.view[Kt(e, t)];
      if (null != o.node) {
        var l = o.changes || (o.changes = []);
        -1 == f(l, r) && l.push(r);
      }
    }
  }
  function Tr(e) {
    (e.display.viewFrom = e.display.viewTo = e.doc.first),
      (e.display.view = []),
      (e.display.viewOffset = 0);
  }
  function Mr(e, t, r, n) {
    var i,
      o = Kt(e, t),
      l = e.display.view;
    if (!Lo || r == e.doc.first + e.doc.size) return { index: o, lineN: r };
    for (var s = e.display.viewFrom, a = 0; a < o; a++) s += l[a].size;
    if (s != t) {
      if (n > 0) {
        if (o == l.length - 1) return null;
        (i = s + l[o].size - t), o++;
      } else i = s - t;
      (t += i), (r += i);
    }
    for (; ne(e.doc, r) != r; ) {
      if (o == (n < 0 ? 0 : l.length - 1)) return null;
      (r += n * l[o - (n < 0 ? 1 : 0)].size), (o += n);
    }
    return { index: o, lineN: r };
  }
  function Nr(e) {
    for (var t = e.display.view, r = 0, n = 0; n < t.length; n++) {
      var i = t[n];
      i.hidden || (i.node && !i.changes) || ++r;
    }
    return r;
  }
  function Or(e, t) {
    e.doc.highlightFrontier < e.display.viewTo &&
      e.state.highlight.set(t, u(Ar, e));
  }
  function Ar(e) {
    var t = e.doc;
    if (!(t.highlightFrontier >= e.display.viewTo)) {
      var r = +new Date() + e.options.workTime,
        n = Pe(e, t.highlightFrontier),
        i = [];
      t.iter(
        n.line,
        Math.min(t.first + t.size, e.display.viewTo + 500),
        function (o) {
          if (n.line >= e.display.viewFrom) {
            var l = o.styles,
              s =
                o.text.length > e.options.maxHighlightLength
                  ? Ae(t.mode, n.state)
                  : null,
              a = He(e, o, n, !0);
            s && (n.state = s), (o.styles = a.styles);
            var u = o.styleClasses,
              c = a.classes;
            c ? (o.styleClasses = c) : u && (o.styleClasses = null);
            for (
              var h =
                  !l ||
                  l.length != o.styles.length ||
                  (u != c &&
                    (!u ||
                      !c ||
                      u.bgClass != c.bgClass ||
                      u.textClass != c.textClass)),
                f = 0;
              !h && f < l.length;
              ++f
            )
              h = l[f] != o.styles[f];
            h && i.push(n.line), (o.stateAfter = n.save()), n.nextLine();
          } else
            o.text.length <= e.options.maxHighlightLength && Ee(e, o.text, n),
              (o.stateAfter = n.line % 5 == 0 ? n.save() : null),
              n.nextLine();
          if (+new Date() > r) return Or(e, e.options.workDelay), !0;
        }
      ),
        (t.highlightFrontier = n.line),
        (t.modeFrontier = Math.max(t.modeFrontier, n.line)),
        i.length &&
          wr(e, function () {
            for (var t = 0; t < i.length; t++) kr(e, i[t], "text");
          });
    }
  }
  function Wr(e, r) {
    var n = e.display,
      i = e.doc;
    if (r.editorIsHidden) return Tr(e), !1;
    if (
      !r.force &&
      r.visible.from >= n.viewFrom &&
      r.visible.to <= n.viewTo &&
      (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) &&
      n.renderedView == n.view &&
      0 == Nr(e)
    )
      return !1;
    ir(e) && (Tr(e), (r.dims = Rt(e)));
    var s = i.first + i.size,
      a = Math.max(r.visible.from - e.options.viewportMargin, i.first),
      u = Math.min(s, r.visible.to + e.options.viewportMargin);
    n.viewFrom < a &&
      a - n.viewFrom < 20 &&
      (a = Math.max(i.first, n.viewFrom)),
      n.viewTo > u && n.viewTo - u < 20 && (u = Math.min(s, n.viewTo)),
      Lo && ((a = ne(e.doc, a)), (u = ie(e.doc, u)));
    var c =
      a != n.viewFrom ||
      u != n.viewTo ||
      n.lastWrapHeight != r.wrapperHeight ||
      n.lastWrapWidth != r.wrapperWidth;
    !(function (e, t, r) {
      var n = e.display;
      0 == n.view.length || t >= n.viewTo || r <= n.viewFrom
        ? ((n.view = qe(e, t, r)), (n.viewFrom = t))
        : (n.viewFrom > t
            ? (n.view = qe(e, t, n.viewFrom).concat(n.view))
            : n.viewFrom < t && (n.view = n.view.slice(Kt(e, t))),
          (n.viewFrom = t),
          n.viewTo < r
            ? (n.view = n.view.concat(qe(e, n.viewTo, r)))
            : n.viewTo > r && (n.view = n.view.slice(0, Kt(e, r)))),
        (n.viewTo = r);
    })(e, a, u),
      (n.viewOffset = se(k(e.doc, n.viewFrom))),
      (e.display.mover.style.top = n.viewOffset + "px");
    var h = Nr(e);
    if (
      !c &&
      0 == h &&
      !r.force &&
      n.renderedView == n.view &&
      (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)
    )
      return !1;
    var d = (function (e) {
      if (e.hasFocus()) return null;
      var t = l();
      if (!t || !o(e.display.lineDiv, t)) return null;
      var r = { activeElt: t };
      if (window.getSelection) {
        var n = window.getSelection();
        n.anchorNode &&
          n.extend &&
          o(e.display.lineDiv, n.anchorNode) &&
          ((r.anchorNode = n.anchorNode),
          (r.anchorOffset = n.anchorOffset),
          (r.focusNode = n.focusNode),
          (r.focusOffset = n.focusOffset));
      }
      return r;
    })(e);
    return (
      h > 4 && (n.lineDiv.style.display = "none"),
      (function (e, r, n) {
        function i(t) {
          var r = t.nextSibling;
          return (
            Xi && ro && e.display.currentWheelTarget == t
              ? (t.style.display = "none")
              : t.parentNode.removeChild(t),
            r
          );
        }
        var o = e.display,
          l = e.options.lineNumbers,
          s = o.lineDiv,
          a = s.firstChild;
        for (var u = o.view, c = o.viewFrom, h = 0; h < u.length; h++) {
          var d = u[h];
          if (d.hidden);
          else if (d.node && d.node.parentNode == s) {
            for (; a != d.node; ) a = i(a);
            var p = l && null != r && r <= c && d.lineNumber;
            d.changes &&
              (f(d.changes, "gutter") > -1 && (p = !1), Qe(e, d, c, n)),
              p &&
                (t(d.lineNumber),
                d.lineNumber.appendChild(
                  document.createTextNode(D(e.options, c))
                )),
              (a = d.node.nextSibling);
          } else {
            var g = nt(e, d, c, n);
            s.insertBefore(g, a);
          }
          c += d.size;
        }
        for (; a; ) a = i(a);
      })(e, n.updateLineNumbers, r.dims),
      h > 4 && (n.lineDiv.style.display = ""),
      (n.renderedView = n.view),
      (function (e) {
        if (
          e &&
          e.activeElt &&
          e.activeElt != l() &&
          (e.activeElt.focus(),
          e.anchorNode &&
            o(document.body, e.anchorNode) &&
            o(document.body, e.focusNode))
        ) {
          var t = window.getSelection(),
            r = document.createRange();
          r.setEnd(e.anchorNode, e.anchorOffset),
            r.collapse(!1),
            t.removeAllRanges(),
            t.addRange(r),
            t.extend(e.focusNode, e.focusOffset);
        }
      })(d),
      t(n.cursorDiv),
      t(n.selectionDiv),
      (n.gutters.style.height = n.sizer.style.minHeight = 0),
      c &&
        ((n.lastWrapHeight = r.wrapperHeight),
        (n.lastWrapWidth = r.wrapperWidth),
        Or(e, 400)),
      (n.updateLineNumbers = null),
      !0
    );
  }
  function Dr(e, t) {
    for (
      var r = t.viewport, n = !0;
      ((n && e.options.lineWrapping && t.oldDisplayWidth != ft(e)) ||
        (r &&
          null != r.top &&
          (r = { top: Math.min(e.doc.height + ut(e.display) - dt(e), r.top) }),
        (t.visible = rr(e.display, e.doc, r)),
        !(
          t.visible.from >= e.display.viewFrom &&
          t.visible.to <= e.display.viewTo
        ))) &&
      Wr(e, t);
      n = !1
    ) {
      er(e);
      var i = pr(e);
      jt(e), gr(e, i), Pr(e, i), (t.force = !1);
    }
    t.signal(e, "update", e),
      (e.display.viewFrom == e.display.reportedViewFrom &&
        e.display.viewTo == e.display.reportedViewTo) ||
        (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo),
        (e.display.reportedViewFrom = e.display.viewFrom),
        (e.display.reportedViewTo = e.display.viewTo));
  }
  function Hr(e, t) {
    var r = new Qo(e, t);
    if (Wr(e, r)) {
      er(e), Dr(e, r);
      var n = pr(e);
      jt(e), gr(e, n), Pr(e, n), r.finish();
    }
  }
  function Fr(e) {
    var t = e.display.gutters.offsetWidth;
    e.display.sizer.style.marginLeft = t + "px";
  }
  function Pr(e, t) {
    (e.display.sizer.style.minHeight = t.docHeight + "px"),
      (e.display.heightForcer.style.top = t.docHeight + "px"),
      (e.display.gutters.style.height =
        t.docHeight + e.display.barHeight + ht(e) + "px");
  }
  function Er(e) {
    var r = e.display.gutters,
      i = e.options.gutters;
    t(r);
    for (var o = 0; o < i.length; ++o) {
      var l = i[o],
        s = r.appendChild(n("div", null, "CodeMirror-gutter " + l));
      "CodeMirror-linenumbers" == l &&
        ((e.display.lineGutter = s),
        (s.style.width = (e.display.lineNumWidth || 1) + "px"));
    }
    (r.style.display = o ? "" : "none"), Fr(e);
  }
  function zr(e) {
    var t = f(e.gutters, "CodeMirror-linenumbers");
    -1 == t && e.lineNumbers
      ? (e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]))
      : t > -1 &&
        !e.lineNumbers &&
        ((e.gutters = e.gutters.slice(0)), e.gutters.splice(t, 1));
  }
  function Ir(e) {
    var t = e.wheelDeltaX,
      r = e.wheelDeltaY;
    return (
      null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
      null == r && e.detail && e.axis == e.VERTICAL_AXIS
        ? (r = e.detail)
        : null == r && (r = e.wheelDelta),
      { x: t, y: r }
    );
  }
  function Rr(e) {
    var t = Ir(e);
    return (t.x *= el), (t.y *= el), t;
  }
  function Br(e, t) {
    var r = Ir(t),
      n = r.x,
      i = r.y,
      o = e.display,
      l = o.scroller,
      s = l.scrollWidth > l.clientWidth,
      a = l.scrollHeight > l.clientHeight;
    if ((n && s) || (i && a)) {
      if (i && ro && Xi)
        e: for (var u = t.target, c = o.view; u != l; u = u.parentNode)
          for (var h = 0; h < c.length; h++)
            if (c[h].node == u) {
              e.display.currentWheelTarget = u;
              break e;
            }
      if (n && !Bi && !qi && null != el)
        return (
          i && a && hr(e, Math.max(0, l.scrollTop + i * el)),
          dr(e, Math.max(0, l.scrollLeft + n * el)),
          (!i || (i && a)) && be(t),
          void (o.wheelStartX = null)
        );
      if (i && null != el) {
        var f = i * el,
          d = e.doc.scrollTop,
          p = d + o.wrapper.clientHeight;
        f < 0
          ? (d = Math.max(0, d + f - 50))
          : (p = Math.min(e.doc.height, p + f + 50)),
          Hr(e, { top: d, bottom: p });
      }
      Jo < 20 &&
        (null == o.wheelStartX
          ? ((o.wheelStartX = l.scrollLeft),
            (o.wheelStartY = l.scrollTop),
            (o.wheelDX = n),
            (o.wheelDY = i),
            setTimeout(function () {
              if (null != o.wheelStartX) {
                var e = l.scrollLeft - o.wheelStartX,
                  t = l.scrollTop - o.wheelStartY,
                  r =
                    (t && o.wheelDY && t / o.wheelDY) ||
                    (e && o.wheelDX && e / o.wheelDX);
                (o.wheelStartX = o.wheelStartY = null),
                  r && ((el = (el * Jo + r) / (Jo + 1)), ++Jo);
              }
            }, 200))
          : ((o.wheelDX += n), (o.wheelDY += i)));
    }
  }
  function Gr(e, t) {
    var r = e[t];
    e.sort(function (e, t) {
      return F(e.from(), t.from());
    }),
      (t = f(e, r));
    for (var n = 1; n < e.length; n++) {
      var i = e[n],
        o = e[n - 1];
      if (F(o.to(), i.from()) >= 0) {
        var l = I(o.from(), i.from()),
          s = z(o.to(), i.to()),
          a = o.empty() ? i.from() == i.head : o.from() == o.head;
        n <= t && --t, e.splice(--n, 2, new rl(a ? s : l, a ? l : s));
      }
    }
    return new tl(e, t);
  }
  function Ur(e, t) {
    return new tl([new rl(e, t || e)], 0);
  }
  function Vr(e) {
    return e.text
      ? H(
          e.from.line + e.text.length - 1,
          g(e.text).length + (1 == e.text.length ? e.from.ch : 0)
        )
      : e.to;
  }
  function Kr(e, t) {
    if (F(e, t.from) < 0) return e;
    if (F(e, t.to) <= 0) return Vr(t);
    var r = e.line + t.text.length - (t.to.line - t.from.line) - 1,
      n = e.ch;
    return e.line == t.to.line && (n += Vr(t).ch - t.to.ch), H(r, n);
  }
  function jr(e, t) {
    for (var r = [], n = 0; n < e.sel.ranges.length; n++) {
      var i = e.sel.ranges[n];
      r.push(new rl(Kr(i.anchor, t), Kr(i.head, t)));
    }
    return Gr(r, e.sel.primIndex);
  }
  function Xr(e, t, r) {
    return e.line == t.line
      ? H(r.line, e.ch - t.ch + r.ch)
      : H(r.line + (e.line - t.line), e.ch);
  }
  function Yr(e) {
    (e.doc.mode = Ne(e.options, e.doc.modeOption)), _r(e);
  }
  function _r(e) {
    e.doc.iter(function (e) {
      e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
    }),
      (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
      Or(e, 100),
      e.state.modeGen++,
      e.curOp && Lr(e);
  }
  function qr(e, t) {
    return (
      0 == t.from.ch &&
      0 == t.to.ch &&
      "" == g(t.text) &&
      (!e.cm || e.cm.options.wholeLineUpdateBefore)
    );
  }
  function $r(e, t, r, n) {
    function i(e) {
      return r ? r[e] : null;
    }
    function o(e, r, i) {
      !(function (e, t, r, n) {
        (e.text = t),
          e.stateAfter && (e.stateAfter = null),
          e.styles && (e.styles = null),
          null != e.order && (e.order = null),
          Y(e),
          _(e, r);
        var i = n ? n(e) : 1;
        i != e.height && N(e, i);
      })(e, r, i, n),
        $e(e, "change", e, t);
    }
    function l(e, t) {
      for (var r = [], o = e; o < t; ++o) r.push(new Go(u[o], i(o), n));
      return r;
    }
    var s = t.from,
      a = t.to,
      u = t.text,
      c = k(e, s.line),
      h = k(e, a.line),
      f = g(u),
      d = i(u.length - 1),
      p = a.line - s.line;
    if (t.full)
      e.insert(0, l(0, u.length)), e.remove(u.length, e.size - u.length);
    else if (qr(e, t)) {
      var v = l(0, u.length - 1);
      o(h, h.text, d),
        p && e.remove(s.line, p),
        v.length && e.insert(s.line, v);
    } else if (c == h)
      if (1 == u.length)
        o(c, c.text.slice(0, s.ch) + f + c.text.slice(a.ch), d);
      else {
        var m = l(1, u.length - 1);
        m.push(new Go(f + c.text.slice(a.ch), d, n)),
          o(c, c.text.slice(0, s.ch) + u[0], i(0)),
          e.insert(s.line + 1, m);
      }
    else if (1 == u.length)
      o(c, c.text.slice(0, s.ch) + u[0] + h.text.slice(a.ch), i(0)),
        e.remove(s.line + 1, p);
    else {
      o(c, c.text.slice(0, s.ch) + u[0], i(0)), o(h, f + h.text.slice(a.ch), d);
      var y = l(1, u.length - 1);
      p > 1 && e.remove(s.line + 1, p - 1), e.insert(s.line + 1, y);
    }
    $e(e, "change", e, t);
  }
  function Zr(e, t, r) {
    function n(e, i, o) {
      if (e.linked)
        for (var l = 0; l < e.linked.length; ++l) {
          var s = e.linked[l];
          if (s.doc != i) {
            var a = o && s.sharedHist;
            (r && !a) || (t(s.doc, a), n(s.doc, e, a));
          }
        }
    }
    n(e, null, !0);
  }
  function Qr(e, t) {
    if (t.cm) throw new Error("This document is already in use.");
    (e.doc = t),
      (t.cm = e),
      Ut(e),
      Yr(e),
      Jr(e),
      e.options.lineWrapping || ue(e),
      (e.options.mode = t.modeOption),
      Lr(e);
  }
  function Jr(e) {
    ("rtl" == e.doc.direction ? s : uo)(e.display.lineDiv, "CodeMirror-rtl");
  }
  function en(e) {
    (this.done = []),
      (this.undone = []),
      (this.undoDepth = 1 / 0),
      (this.lastModTime = this.lastSelTime = 0),
      (this.lastOp = this.lastSelOp = null),
      (this.lastOrigin = this.lastSelOrigin = null),
      (this.generation = this.maxGeneration = e || 1);
  }
  function tn(e, t) {
    var r = { from: E(t.from), to: Vr(t), text: T(e, t.from, t.to) };
    return (
      sn(e, r, t.from.line, t.to.line + 1),
      Zr(
        e,
        function (e) {
          return sn(e, r, t.from.line, t.to.line + 1);
        },
        !0
      ),
      r
    );
  }
  function rn(e) {
    for (; e.length; ) {
      if (!g(e).ranges) break;
      e.pop();
    }
  }
  function nn(e, t, r, n) {
    var i = e.history;
    i.undone.length = 0;
    var o,
      l,
      s = +new Date();
    if (
      (i.lastOp == n ||
        (i.lastOrigin == t.origin &&
          t.origin &&
          (("+" == t.origin.charAt(0) &&
            e.cm &&
            i.lastModTime > s - e.cm.options.historyEventDelay) ||
            "*" == t.origin.charAt(0)))) &&
      (o = (function (e, t) {
        return t
          ? (rn(e.done), g(e.done))
          : e.done.length && !g(e.done).ranges
          ? g(e.done)
          : e.done.length > 1 && !e.done[e.done.length - 2].ranges
          ? (e.done.pop(), g(e.done))
          : void 0;
      })(i, i.lastOp == n))
    )
      (l = g(o.changes)),
        0 == F(t.from, t.to) && 0 == F(t.from, l.to)
          ? (l.to = Vr(t))
          : o.changes.push(tn(e, t));
    else {
      var a = g(i.done);
      for (
        (a && a.ranges) || ln(e.sel, i.done),
          o = { changes: [tn(e, t)], generation: i.generation },
          i.done.push(o);
        i.done.length > i.undoDepth;

      )
        i.done.shift(), i.done[0].ranges || i.done.shift();
    }
    i.done.push(r),
      (i.generation = ++i.maxGeneration),
      (i.lastModTime = i.lastSelTime = s),
      (i.lastOp = i.lastSelOp = n),
      (i.lastOrigin = i.lastSelOrigin = t.origin),
      l || pe(e, "historyAdded");
  }
  function on(e, t, r, n) {
    var i = e.history,
      o = n && n.origin;
    r == i.lastSelOp ||
    (o &&
      i.lastSelOrigin == o &&
      ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) ||
        (function (e, t, r, n) {
          var i = t.charAt(0);
          return (
            "*" == i ||
            ("+" == i &&
              r.ranges.length == n.ranges.length &&
              r.somethingSelected() == n.somethingSelected() &&
              new Date() - e.history.lastSelTime <=
                (e.cm ? e.cm.options.historyEventDelay : 500))
          );
        })(e, o, g(i.done), t)))
      ? (i.done[i.done.length - 1] = t)
      : ln(t, i.done),
      (i.lastSelTime = +new Date()),
      (i.lastSelOrigin = o),
      (i.lastSelOp = r),
      n && !1 !== n.clearRedo && rn(i.undone);
  }
  function ln(e, t) {
    var r = g(t);
    (r && r.ranges && r.equals(e)) || t.push(e);
  }
  function sn(e, t, r, n) {
    var i = t["spans_" + e.id],
      o = 0;
    e.iter(Math.max(e.first, r), Math.min(e.first + e.size, n), function (r) {
      r.markedSpans &&
        ((i || (i = t["spans_" + e.id] = {}))[o] = r.markedSpans),
        ++o;
    });
  }
  function an(e) {
    if (!e) return null;
    for (var t, r = 0; r < e.length; ++r)
      e[r].marker.explicitlyCleared
        ? t || (t = e.slice(0, r))
        : t && t.push(e[r]);
    return t ? (t.length ? t : null) : e;
  }
  function un(e, t) {
    var r = (function (e, t) {
        var r = t["spans_" + e.id];
        if (!r) return null;
        for (var n = [], i = 0; i < t.text.length; ++i) n.push(an(r[i]));
        return n;
      })(e, t),
      n = j(e, t);
    if (!r) return n;
    if (!n) return r;
    for (var i = 0; i < r.length; ++i) {
      var o = r[i],
        l = n[i];
      if (o && l)
        e: for (var s = 0; s < l.length; ++s) {
          for (var a = l[s], u = 0; u < o.length; ++u)
            if (o[u].marker == a.marker) continue e;
          o.push(a);
        }
      else l && (r[i] = l);
    }
    return r;
  }
  function cn(e, t, r) {
    for (var n = [], i = 0; i < e.length; ++i) {
      var o = e[i];
      if (o.ranges) n.push(r ? tl.prototype.deepCopy.call(o) : o);
      else {
        var l = o.changes,
          s = [];
        n.push({ changes: s });
        for (var a = 0; a < l.length; ++a) {
          var u = l[a],
            c = void 0;
          if ((s.push({ from: u.from, to: u.to, text: u.text }), t))
            for (var h in u)
              (c = h.match(/^spans_(\d+)$/)) &&
                f(t, Number(c[1])) > -1 &&
                ((g(s)[h] = u[h]), delete u[h]);
        }
      }
    }
    return n;
  }
  function hn(e, t, r, n) {
    if (n) {
      var i = e.anchor;
      if (r) {
        var o = F(t, i) < 0;
        o != F(r, i) < 0 ? ((i = t), (t = r)) : o != F(t, r) < 0 && (t = r);
      }
      return new rl(i, t);
    }
    return new rl(r || t, t);
  }
  function fn(e, t, r, n, i) {
    null == i && (i = e.cm && (e.cm.display.shift || e.extend)),
      mn(e, new tl([hn(e.sel.primary(), t, r, i)], 0), n);
  }
  function dn(e, t, r) {
    for (
      var n = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0;
      o < e.sel.ranges.length;
      o++
    )
      n[o] = hn(e.sel.ranges[o], t[o], null, i);
    mn(e, Gr(n, e.sel.primIndex), r);
  }
  function pn(e, t, r, n) {
    var i = e.sel.ranges.slice(0);
    (i[t] = r), mn(e, Gr(i, e.sel.primIndex), n);
  }
  function gn(e, t, r, n) {
    mn(e, Ur(t, r), n);
  }
  function vn(e, t, r) {
    var n = e.history.done,
      i = g(n);
    i && i.ranges ? ((n[n.length - 1] = t), yn(e, t, r)) : mn(e, t, r);
  }
  function mn(e, t, r) {
    yn(e, t, r), on(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r);
  }
  function yn(e, t, r) {
    (me(e, "beforeSelectionChange") ||
      (e.cm && me(e.cm, "beforeSelectionChange"))) &&
      (t = (function (e, t, r) {
        var n = {
          ranges: t.ranges,
          update: function (t) {
            this.ranges = [];
            for (var r = 0; r < t.length; r++)
              this.ranges[r] = new rl(B(e, t[r].anchor), B(e, t[r].head));
          },
          origin: r && r.origin,
        };
        return (
          pe(e, "beforeSelectionChange", e, n),
          e.cm && pe(e.cm, "beforeSelectionChange", e.cm, n),
          n.ranges != t.ranges ? Gr(n.ranges, n.ranges.length - 1) : t
        );
      })(e, t, r));
    bn(
      e,
      xn(
        e,
        t,
        (r && r.bias) ||
          (F(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1),
        !0
      )
    ),
      (r && !1 === r.scroll) || !e.cm || sr(e.cm);
  }
  function bn(e, t) {
    t.equals(e.sel) ||
      ((e.sel = t),
      e.cm &&
        ((e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0), ve(e.cm)),
      $e(e, "cursorActivity", e));
  }
  function wn(e) {
    bn(e, xn(e, e.sel, null, !1));
  }
  function xn(e, t, r, n) {
    for (var i, o = 0; o < t.ranges.length; o++) {
      var l = t.ranges[o],
        s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
        a = Sn(e, l.anchor, s && s.anchor, r, n),
        u = Sn(e, l.head, s && s.head, r, n);
      (i || a != l.anchor || u != l.head) &&
        (i || (i = t.ranges.slice(0, o)), (i[o] = new rl(a, u)));
    }
    return i ? Gr(i, t.primIndex) : t;
  }
  function Cn(e, t, r, n, i) {
    var o = k(e, t.line);
    if (o.markedSpans)
      for (var l = 0; l < o.markedSpans.length; ++l) {
        var s = o.markedSpans[l],
          a = s.marker;
        if (
          (null == s.from ||
            (a.inclusiveLeft ? s.from <= t.ch : s.from < t.ch)) &&
          (null == s.to || (a.inclusiveRight ? s.to >= t.ch : s.to > t.ch))
        ) {
          if (i && (pe(a, "beforeCursorEnter"), a.explicitlyCleared)) {
            if (o.markedSpans) {
              --l;
              continue;
            }
            break;
          }
          if (!a.atomic) continue;
          if (r) {
            var u = a.find(n < 0 ? 1 : -1),
              c = void 0;
            if (
              ((n < 0 ? a.inclusiveRight : a.inclusiveLeft) &&
                (u = Ln(e, u, -n, u && u.line == t.line ? o : null)),
              u && u.line == t.line && (c = F(u, r)) && (n < 0 ? c < 0 : c > 0))
            )
              return Cn(e, u, t, n, i);
          }
          var h = a.find(n < 0 ? -1 : 1);
          return (
            (n < 0 ? a.inclusiveLeft : a.inclusiveRight) &&
              (h = Ln(e, h, n, h.line == t.line ? o : null)),
            h ? Cn(e, h, t, n, i) : null
          );
        }
      }
    return t;
  }
  function Sn(e, t, r, n, i) {
    var o = n || 1,
      l =
        Cn(e, t, r, o, i) ||
        (!i && Cn(e, t, r, o, !0)) ||
        Cn(e, t, r, -o, i) ||
        (!i && Cn(e, t, r, -o, !0));
    return l || ((e.cantEdit = !0), H(e.first, 0));
  }
  function Ln(e, t, r, n) {
    return r < 0 && 0 == t.ch
      ? t.line > e.first
        ? B(e, H(t.line - 1))
        : null
      : r > 0 && t.ch == (n || k(e, t.line)).text.length
      ? t.line < e.first + e.size - 1
        ? H(t.line + 1, 0)
        : null
      : new H(t.line, t.ch + r);
  }
  function kn(e) {
    e.setSelection(H(e.firstLine(), 0), H(e.lastLine()), mo);
  }
  function Tn(e, t, r) {
    var n = {
      canceled: !1,
      from: t.from,
      to: t.to,
      text: t.text,
      origin: t.origin,
      cancel: function () {
        return (n.canceled = !0);
      },
    };
    return (
      r &&
        (n.update = function (t, r, i, o) {
          t && (n.from = B(e, t)),
            r && (n.to = B(e, r)),
            i && (n.text = i),
            void 0 !== o && (n.origin = o);
        }),
      pe(e, "beforeChange", e, n),
      e.cm && pe(e.cm, "beforeChange", e.cm, n),
      n.canceled
        ? null
        : { from: n.from, to: n.to, text: n.text, origin: n.origin }
    );
  }
  function Mn(e, t, r) {
    if (e.cm) {
      if (!e.cm.curOp) return xr(e.cm, Mn)(e, t, r);
      if (e.cm.state.suppressEdits) return;
    }
    if (
      !(me(e, "beforeChange") || (e.cm && me(e.cm, "beforeChange"))) ||
      (t = Tn(e, t, !0))
    ) {
      var n =
        So &&
        !r &&
        (function (e, t, r) {
          var n = null;
          if (
            (e.iter(t.line, r.line + 1, function (e) {
              if (e.markedSpans)
                for (var t = 0; t < e.markedSpans.length; ++t) {
                  var r = e.markedSpans[t].marker;
                  !r.readOnly ||
                    (n && -1 != f(n, r)) ||
                    (n || (n = [])).push(r);
                }
            }),
            !n)
          )
            return null;
          for (var i = [{ from: t, to: r }], o = 0; o < n.length; ++o)
            for (var l = n[o], s = l.find(0), a = 0; a < i.length; ++a) {
              var u = i[a];
              if (!(F(u.to, s.from) < 0 || F(u.from, s.to) > 0)) {
                var c = [a, 1],
                  h = F(u.from, s.from),
                  d = F(u.to, s.to);
                (h < 0 || (!l.inclusiveLeft && !h)) &&
                  c.push({ from: u.from, to: s.from }),
                  (d > 0 || (!l.inclusiveRight && !d)) &&
                    c.push({ from: s.to, to: u.to }),
                  i.splice.apply(i, c),
                  (a += c.length - 3);
              }
            }
          return i;
        })(e, t.from, t.to);
      if (n)
        for (var i = n.length - 1; i >= 0; --i)
          Nn(e, {
            from: n[i].from,
            to: n[i].to,
            text: i ? [""] : t.text,
            origin: t.origin,
          });
      else Nn(e, t);
    }
  }
  function Nn(e, t) {
    if (1 != t.text.length || "" != t.text[0] || 0 != F(t.from, t.to)) {
      var r = jr(e, t);
      nn(e, t, r, e.cm ? e.cm.curOp.id : NaN), Wn(e, t, r, j(e, t));
      var n = [];
      Zr(e, function (e, r) {
        r || -1 != f(n, e.history) || (Pn(e.history, t), n.push(e.history)),
          Wn(e, t, null, j(e, t));
      });
    }
  }
  function On(e, t, r) {
    if (!e.cm || !e.cm.state.suppressEdits || r) {
      for (
        var n,
          i = e.history,
          o = e.sel,
          l = "undo" == t ? i.done : i.undone,
          s = "undo" == t ? i.undone : i.done,
          a = 0;
        a < l.length &&
        ((n = l[a]), r ? !n.ranges || n.equals(e.sel) : n.ranges);
        a++
      );
      if (a != l.length) {
        for (i.lastOrigin = i.lastSelOrigin = null; (n = l.pop()).ranges; ) {
          if ((ln(n, s), r && !n.equals(e.sel)))
            return void mn(e, n, { clearRedo: !1 });
          o = n;
        }
        var u = [];
        ln(o, s),
          s.push({ changes: u, generation: i.generation }),
          (i.generation = n.generation || ++i.maxGeneration);
        for (
          var c = me(e, "beforeChange") || (e.cm && me(e.cm, "beforeChange")),
            h = function (r) {
              var i = n.changes[r];
              if (((i.origin = t), c && !Tn(e, i, !1)))
                return (l.length = 0), {};
              u.push(tn(e, i));
              var o = r ? jr(e, i) : g(l);
              Wn(e, i, o, un(e, i)),
                !r && e.cm && e.cm.scrollIntoView({ from: i.from, to: Vr(i) });
              var s = [];
              Zr(e, function (e, t) {
                t ||
                  -1 != f(s, e.history) ||
                  (Pn(e.history, i), s.push(e.history)),
                  Wn(e, i, null, un(e, i));
              });
            },
            d = n.changes.length - 1;
          d >= 0;
          --d
        ) {
          var p = h(d);
          if (p) return p.v;
        }
      }
    }
  }
  function An(e, t) {
    if (
      0 != t &&
      ((e.first += t),
      (e.sel = new tl(
        v(e.sel.ranges, function (e) {
          return new rl(
            H(e.anchor.line + t, e.anchor.ch),
            H(e.head.line + t, e.head.ch)
          );
        }),
        e.sel.primIndex
      )),
      e.cm)
    ) {
      Lr(e.cm, e.first, e.first - t, t);
      for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++)
        kr(e.cm, n, "gutter");
    }
  }
  function Wn(e, t, r, n) {
    if (e.cm && !e.cm.curOp) return xr(e.cm, Wn)(e, t, r, n);
    if (t.to.line < e.first)
      An(e, t.text.length - 1 - (t.to.line - t.from.line));
    else if (!(t.from.line > e.lastLine())) {
      if (t.from.line < e.first) {
        var i = t.text.length - 1 - (e.first - t.from.line);
        An(e, i),
          (t = {
            from: H(e.first, 0),
            to: H(t.to.line + i, t.to.ch),
            text: [g(t.text)],
            origin: t.origin,
          });
      }
      var o = e.lastLine();
      t.to.line > o &&
        (t = {
          from: t.from,
          to: H(o, k(e, o).text.length),
          text: [t.text[0]],
          origin: t.origin,
        }),
        (t.removed = T(e, t.from, t.to)),
        r || (r = jr(e, t)),
        e.cm
          ? (function (e, t, r) {
              var n = e.doc,
                i = e.display,
                o = t.from,
                l = t.to,
                s = !1,
                a = o.line;
              e.options.lineWrapping ||
                ((a = O(re(k(n, o.line)))),
                n.iter(a, l.line + 1, function (e) {
                  if (e == i.maxLine) return (s = !0), !0;
                }));
              n.sel.contains(t.from, t.to) > -1 && ve(e);
              $r(n, t, r, Gt(e)),
                e.options.lineWrapping ||
                  (n.iter(a, o.line + t.text.length, function (e) {
                    var t = ae(e);
                    t > i.maxLineLength &&
                      ((i.maxLine = e),
                      (i.maxLineLength = t),
                      (i.maxLineChanged = !0),
                      (s = !1));
                  }),
                  s && (e.curOp.updateMaxLine = !0));
              (function (e, t) {
                if (
                  ((e.modeFrontier = Math.min(e.modeFrontier, t)),
                  !(e.highlightFrontier < t - 10))
                ) {
                  for (var r = e.first, n = t - 1; n > r; n--) {
                    var i = k(e, n).stateAfter;
                    if (i && (!(i instanceof Io) || n + i.lookAhead < t)) {
                      r = n + 1;
                      break;
                    }
                  }
                  e.highlightFrontier = Math.min(e.highlightFrontier, r);
                }
              })(n, o.line),
                Or(e, 400);
              var u = t.text.length - (l.line - o.line) - 1;
              t.full
                ? Lr(e)
                : o.line != l.line || 1 != t.text.length || qr(e.doc, t)
                ? Lr(e, o.line, l.line + 1, u)
                : kr(e, o.line, "text");
              var c = me(e, "changes"),
                h = me(e, "change");
              if (h || c) {
                var f = {
                  from: o,
                  to: l,
                  text: t.text,
                  removed: t.removed,
                  origin: t.origin,
                };
                h && $e(e, "change", e, f),
                  c &&
                    (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(f);
              }
              e.display.selForContextMenu = null;
            })(e.cm, t, n)
          : $r(e, t, n),
        yn(e, r, mo);
    }
  }
  function Dn(e, t, r, n, i) {
    if ((n || (n = r), F(n, r) < 0)) {
      var o;
      (r = (o = [n, r])[0]), (n = o[1]);
    }
    "string" == typeof t && (t = e.splitLines(t)),
      Mn(e, { from: r, to: n, text: t, origin: i });
  }
  function Hn(e, t, r, n) {
    r < e.line ? (e.line += n) : t < e.line && ((e.line = t), (e.ch = 0));
  }
  function Fn(e, t, r, n) {
    for (var i = 0; i < e.length; ++i) {
      var o = e[i],
        l = !0;
      if (o.ranges) {
        o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
        for (var s = 0; s < o.ranges.length; s++)
          Hn(o.ranges[s].anchor, t, r, n), Hn(o.ranges[s].head, t, r, n);
      } else {
        for (var a = 0; a < o.changes.length; ++a) {
          var u = o.changes[a];
          if (r < u.from.line)
            (u.from = H(u.from.line + n, u.from.ch)),
              (u.to = H(u.to.line + n, u.to.ch));
          else if (t <= u.to.line) {
            l = !1;
            break;
          }
        }
        l || (e.splice(0, i + 1), (i = 0));
      }
    }
  }
  function Pn(e, t) {
    var r = t.from.line,
      n = t.to.line,
      i = t.text.length - (n - r) - 1;
    Fn(e.done, r, n, i), Fn(e.undone, r, n, i);
  }
  function En(e, t, r, n) {
    var i = t,
      o = t;
    return (
      "number" == typeof t ? (o = k(e, R(e, t))) : (i = O(t)),
      null == i ? null : (n(o, i) && e.cm && kr(e.cm, i, r), o)
    );
  }
  function zn(e) {
    (this.lines = e), (this.parent = null);
    for (var t = 0, r = 0; r < e.length; ++r)
      (e[r].parent = this), (t += e[r].height);
    this.height = t;
  }
  function In(e) {
    this.children = e;
    for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
      var i = e[n];
      (t += i.chunkSize()), (r += i.height), (i.parent = this);
    }
    (this.size = t), (this.height = r), (this.parent = null);
  }
  function Rn(e, t, r) {
    se(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) && lr(e, r);
  }
  function Bn(e, t, r, n, o) {
    if (n && n.shared)
      return (function (e, t, r, n, i) {
        (n = c(n)).shared = !1;
        var o = [Bn(e, t, r, n, i)],
          l = o[0],
          s = n.widgetNode;
        return (
          Zr(e, function (e) {
            s && (n.widgetNode = s.cloneNode(!0)),
              o.push(Bn(e, B(e, t), B(e, r), n, i));
            for (var a = 0; a < e.linked.length; ++a)
              if (e.linked[a].isParent) return;
            l = g(o);
          }),
          new ll(o, l)
        );
      })(e, t, r, n, o);
    if (e.cm && !e.cm.curOp) return xr(e.cm, Bn)(e, t, r, n, o);
    var l = new ol(e, o),
      s = F(t, r);
    if ((n && c(n, l, !1), s > 0 || (0 == s && !1 !== l.clearWhenEmpty)))
      return l;
    if (
      (l.replacedWith &&
        ((l.collapsed = !0),
        (l.widgetNode = i("span", [l.replacedWith], "CodeMirror-widget")),
        n.handleMouseEvents ||
          l.widgetNode.setAttribute("cm-ignore-events", "true"),
        n.insertLeft && (l.widgetNode.insertLeft = !0)),
      l.collapsed)
    ) {
      if (
        te(e, t.line, t, r, l) ||
        (t.line != r.line && te(e, r.line, t, r, l))
      )
        throw new Error(
          "Inserting collapsed marker partially overlapping an existing one"
        );
      Lo = !0;
    }
    l.addToHistory && nn(e, { from: t, to: r, origin: "markText" }, e.sel, NaN);
    var a,
      u = t.line,
      h = e.cm;
    if (
      (e.iter(u, r.line + 1, function (e) {
        h &&
          l.collapsed &&
          !h.options.lineWrapping &&
          re(e) == h.display.maxLine &&
          (a = !0),
          l.collapsed && u != t.line && N(e, 0),
          (function (e, t) {
            (e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t]),
              t.marker.attachLine(e);
          })(e, new U(l, u == t.line ? t.ch : null, u == r.line ? r.ch : null)),
          ++u;
      }),
      l.collapsed &&
        e.iter(t.line, r.line + 1, function (t) {
          oe(e, t) && N(t, 0);
        }),
      l.clearOnEnter &&
        No(l, "beforeCursorEnter", function () {
          return l.clear();
        }),
      l.readOnly &&
        ((So = !0),
        (e.history.done.length || e.history.undone.length) && e.clearHistory()),
      l.collapsed && ((l.id = ++il), (l.atomic = !0)),
      h)
    ) {
      if ((a && (h.curOp.updateMaxLine = !0), l.collapsed))
        Lr(h, t.line, r.line + 1);
      else if (l.className || l.title || l.startStyle || l.endStyle || l.css)
        for (var f = t.line; f <= r.line; f++) kr(h, f, "text");
      l.atomic && wn(h.doc), $e(h, "markerAdded", h, l);
    }
    return l;
  }
  function Gn(e) {
    return e.findMarks(H(e.first, 0), e.clipPos(H(e.lastLine())), function (e) {
      return e.parent;
    });
  }
  function Un(e) {
    for (
      var t = function (t) {
          var r = e[t],
            n = [r.primary.doc];
          Zr(r.primary.doc, function (e) {
            return n.push(e);
          });
          for (var i = 0; i < r.markers.length; i++) {
            var o = r.markers[i];
            -1 == f(n, o.doc) && ((o.parent = null), r.markers.splice(i--, 1));
          }
        },
        r = 0;
      r < e.length;
      r++
    )
      t(r);
  }
  function Vn(e) {
    var t = this;
    if ((Kn(t), !ge(t, e) && !st(t.display, e))) {
      be(e), Ki && (ul = +new Date());
      var r = Vt(t, e, !0),
        n = e.dataTransfer.files;
      if (r && !t.isReadOnly())
        if (n && n.length && window.FileReader && window.File)
          for (
            var i = n.length,
              o = Array(i),
              l = 0,
              s = function (e, n) {
                if (
                  !t.options.allowDropFileTypes ||
                  -1 != f(t.options.allowDropFileTypes, e.type)
                ) {
                  var s = new FileReader();
                  (s.onload = xr(t, function () {
                    var e = s.result;
                    if (
                      (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""),
                      (o[n] = e),
                      ++l == i)
                    ) {
                      var a = {
                        from: (r = B(t.doc, r)),
                        to: r,
                        text: t.doc.splitLines(o.join(t.doc.lineSeparator())),
                        origin: "paste",
                      };
                      Mn(t.doc, a), vn(t.doc, Ur(r, Vr(a)));
                    }
                  })),
                    s.readAsText(e);
                }
              },
              a = 0;
            a < i;
            ++a
          )
            s(n[a], a);
        else {
          if (t.state.draggingText && t.doc.sel.contains(r) > -1)
            return (
              t.state.draggingText(e),
              void setTimeout(function () {
                return t.display.input.focus();
              }, 20)
            );
          try {
            var u = e.dataTransfer.getData("Text");
            if (u) {
              var c;
              if (
                (t.state.draggingText &&
                  !t.state.draggingText.copy &&
                  (c = t.listSelections()),
                yn(t.doc, Ur(r, r)),
                c)
              )
                for (var h = 0; h < c.length; ++h)
                  Dn(t.doc, "", c[h].anchor, c[h].head, "drag");
              t.replaceSelection(u, "around", "paste"), t.display.input.focus();
            }
          } catch (e) {}
        }
    }
  }
  function Kn(e) {
    e.display.dragCursor &&
      (e.display.lineSpace.removeChild(e.display.dragCursor),
      (e.display.dragCursor = null));
  }
  function jn(e) {
    if (document.getElementsByClassName)
      for (
        var t = document.getElementsByClassName("CodeMirror"), r = 0;
        r < t.length;
        r++
      ) {
        var n = t[r].CodeMirror;
        n && e(n);
      }
  }
  function Xn() {
    cl ||
      (!(function () {
        var e;
        No(window, "resize", function () {
          null == e &&
            (e = setTimeout(function () {
              (e = null), jn(Yn);
            }, 100));
        }),
          No(window, "blur", function () {
            return jn(Jt);
          });
      })(),
      (cl = !0));
  }
  function Yn(e) {
    var t = e.display;
    (t.lastWrapHeight == t.wrapper.clientHeight &&
      t.lastWrapWidth == t.wrapper.clientWidth) ||
      ((t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
      (t.scrollbarsClipped = !1),
      e.setSize());
  }
  function _n(e) {
    var t = e.split(/-(?!$)/);
    e = t[t.length - 1];
    for (var r, n, i, o, l = 0; l < t.length - 1; l++) {
      var s = t[l];
      if (/^(cmd|meta|m)$/i.test(s)) o = !0;
      else if (/^a(lt)?$/i.test(s)) r = !0;
      else if (/^(c|ctrl|control)$/i.test(s)) n = !0;
      else {
        if (!/^s(hift)?$/i.test(s))
          throw new Error("Unrecognized modifier name: " + s);
        i = !0;
      }
    }
    return (
      r && (e = "Alt-" + e),
      n && (e = "Ctrl-" + e),
      o && (e = "Cmd-" + e),
      i && (e = "Shift-" + e),
      e
    );
  }
  function qn(e) {
    var t = {};
    for (var r in e)
      if (e.hasOwnProperty(r)) {
        var n = e[r];
        if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue;
        if ("..." == n) {
          delete e[r];
          continue;
        }
        for (var i = v(r.split(" "), _n), o = 0; o < i.length; o++) {
          var l = void 0,
            s = void 0;
          o == i.length - 1
            ? ((s = i.join(" ")), (l = n))
            : ((s = i.slice(0, o + 1).join(" ")), (l = "..."));
          var a = t[s];
          if (a) {
            if (a != l) throw new Error("Inconsistent bindings for " + s);
          } else t[s] = l;
        }
        delete e[r];
      }
    for (var u in t) e[u] = t[u];
    return e;
  }
  function $n(e, t, r, n) {
    var i = (t = ei(t)).call ? t.call(e, n) : t[e];
    if (!1 === i) return "nothing";
    if ("..." === i) return "multi";
    if (null != i && r(i)) return "handled";
    if (t.fallthrough) {
      if ("[object Array]" != Object.prototype.toString.call(t.fallthrough))
        return $n(e, t.fallthrough, r, n);
      for (var o = 0; o < t.fallthrough.length; o++) {
        var l = $n(e, t.fallthrough[o], r, n);
        if (l) return l;
      }
    }
  }
  function Zn(e) {
    var t = "string" == typeof e ? e : hl[e.keyCode];
    return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t;
  }
  function Qn(e, t, r) {
    var n = e;
    return (
      t.altKey && "Alt" != n && (e = "Alt-" + e),
      (so ? t.metaKey : t.ctrlKey) && "Ctrl" != n && (e = "Ctrl-" + e),
      (so ? t.ctrlKey : t.metaKey) && "Cmd" != n && (e = "Cmd-" + e),
      !r && t.shiftKey && "Shift" != n && (e = "Shift-" + e),
      e
    );
  }
  function Jn(e, t) {
    if (qi && 34 == e.keyCode && e.char) return !1;
    var r = hl[e.keyCode];
    return null != r && !e.altGraphKey && Qn(r, e, t);
  }
  function ei(e) {
    return "string" == typeof e ? gl[e] : e;
  }
  function ti(e, t) {
    for (var r = e.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
      for (var o = t(r[i]); n.length && F(o.from, g(n).to) <= 0; ) {
        var l = n.pop();
        if (F(l.from, o.from) < 0) {
          o.from = l.from;
          break;
        }
      }
      n.push(o);
    }
    wr(e, function () {
      for (var t = n.length - 1; t >= 0; t--)
        Dn(e.doc, "", n[t].from, n[t].to, "+delete");
      sr(e);
    });
  }
  function ri(e, t, r) {
    var n = S(e.text, t + r, r);
    return n < 0 || n > e.text.length ? null : n;
  }
  function ni(e, t, r) {
    var n = ri(e, t.ch, r);
    return null == n ? null : new H(t.line, n, r < 0 ? "after" : "before");
  }
  function ii(e, t, r, n, i) {
    if (e) {
      var o = he(r, t.doc.direction);
      if (o) {
        var l,
          s = i < 0 ? g(o) : o[0],
          a = i < 0 == (1 == s.level) ? "after" : "before";
        if (s.level > 0 || "rtl" == t.doc.direction) {
          var u = mt(t, r);
          l = i < 0 ? r.text.length - 1 : 0;
          var c = yt(t, u, l).top;
          (l = L(
            function (e) {
              return yt(t, u, e).top == c;
            },
            i < 0 == (1 == s.level) ? s.from : s.to - 1,
            l
          )),
            "before" == a && (l = ri(r, l, 1));
        } else l = i < 0 ? s.to : s.from;
        return new H(n, l, a);
      }
    }
    return new H(n, i < 0 ? r.text.length : 0, i < 0 ? "before" : "after");
  }
  function oi(e, t) {
    var r = k(e.doc, t),
      n = re(r);
    return n != r && (t = O(n)), ii(!0, e, n, t, 1);
  }
  function li(e, t) {
    var r = k(e.doc, t),
      n = (function (e) {
        for (var t; (t = ee(e)); ) e = t.find(1, !0).line;
        return e;
      })(r);
    return n != r && (t = O(n)), ii(!0, e, r, t, -1);
  }
  function si(e, t) {
    var r = oi(e, t.line),
      n = k(e.doc, r.line),
      i = he(n, e.doc.direction);
    if (!i || 0 == i[0].level) {
      var o = Math.max(0, n.text.search(/\S/)),
        l = t.line == r.line && t.ch <= o && t.ch;
      return H(r.line, l ? 0 : o, r.sticky);
    }
    return r;
  }
  function ai(e, t, r) {
    if ("string" == typeof t && !(t = vl[t])) return !1;
    e.display.input.ensurePolled();
    var n = e.display.shift,
      i = !1;
    try {
      e.isReadOnly() && (e.state.suppressEdits = !0),
        r && (e.display.shift = !1),
        (i = t(e) != vo);
    } finally {
      (e.display.shift = n), (e.state.suppressEdits = !1);
    }
    return i;
  }
  function ui(e, t, r, n) {
    var i = e.state.keySeq;
    if (i) {
      if (Zn(t)) return "handled";
      if (
        (/\'$/.test(t)
          ? (e.state.keySeq = null)
          : ml.set(50, function () {
              e.state.keySeq == i &&
                ((e.state.keySeq = null), e.display.input.reset());
            }),
        ci(e, i + " " + t, r, n))
      )
        return !0;
    }
    return ci(e, t, r, n);
  }
  function ci(e, t, r, n) {
    var i = (function (e, t, r) {
      for (var n = 0; n < e.state.keyMaps.length; n++) {
        var i = $n(t, e.state.keyMaps[n], r, e);
        if (i) return i;
      }
      return (
        (e.options.extraKeys && $n(t, e.options.extraKeys, r, e)) ||
        $n(t, e.options.keyMap, r, e)
      );
    })(e, t, n);
    return (
      "multi" == i && (e.state.keySeq = t),
      "handled" == i && $e(e, "keyHandled", e, t, r),
      ("handled" != i && "multi" != i) || (be(r), qt(e)),
      !!i
    );
  }
  function hi(e, t) {
    var r = Jn(t, !0);
    return (
      !!r &&
      (t.shiftKey && !e.state.keySeq
        ? ui(e, "Shift-" + r, t, function (t) {
            return ai(e, t, !0);
          }) ||
          ui(e, r, t, function (t) {
            if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion)
              return ai(e, t);
          })
        : ui(e, r, t, function (t) {
            return ai(e, t);
          }))
    );
  }
  function fi(e) {
    var t = this;
    if (((t.curOp.focus = l()), !ge(t, e))) {
      Ki && ji < 11 && 27 == e.keyCode && (e.returnValue = !1);
      var r = e.keyCode;
      t.display.shift = 16 == r || e.shiftKey;
      var n = hi(t, e);
      qi &&
        ((yl = n ? r : null),
        !n &&
          88 == r &&
          !Do &&
          (ro ? e.metaKey : e.ctrlKey) &&
          t.replaceSelection("", null, "cut")),
        18 != r ||
          /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) ||
          (function (e) {
            function t(e) {
              (18 != e.keyCode && e.altKey) ||
                (uo(r, "CodeMirror-crosshair"),
                de(document, "keyup", t),
                de(document, "mouseover", t));
            }
            var r = e.display.lineDiv;
            s(r, "CodeMirror-crosshair");
            No(document, "keyup", t), No(document, "mouseover", t);
          })(t);
    }
  }
  function di(e) {
    16 == e.keyCode && (this.doc.sel.shift = !1), ge(this, e);
  }
  function pi(e) {
    var t = this;
    if (
      !(
        st(t.display, e) ||
        ge(t, e) ||
        (e.ctrlKey && !e.altKey) ||
        (ro && e.metaKey)
      )
    ) {
      var r = e.keyCode,
        n = e.charCode;
      if (qi && r == yl) return (yl = null), void be(e);
      if (!qi || (e.which && !(e.which < 10)) || !hi(t, e)) {
        var i = String.fromCharCode(null == n ? r : n);
        "\b" != i &&
          ((function (e, t, r) {
            return ui(e, "'" + r + "'", t, function (t) {
              return ai(e, t, !0);
            });
          })(t, e, i) ||
            t.display.input.onKeyPress(e));
      }
    }
  }
  function gi(e) {
    var t = this,
      r = t.display;
    if (!(ge(t, e) || (r.activeTouch && r.input.supportsTouch())))
      if ((r.input.ensurePolled(), (r.shift = e.shiftKey), st(r, e)))
        Xi ||
          ((r.scroller.draggable = !1),
          setTimeout(function () {
            return (r.scroller.draggable = !0);
          }, 100));
      else if (!yi(t, e)) {
        var n = Vt(t, e),
          i = Le(e),
          o = n
            ? (function (e, t) {
                var r = +new Date();
                return xl && xl.compare(r, e, t)
                  ? ((wl = xl = null), "triple")
                  : wl && wl.compare(r, e, t)
                  ? ((xl = new bl(r, e, t)), (wl = null), "double")
                  : ((wl = new bl(r, e, t)), (xl = null), "single");
              })(n, i)
            : "single";
        window.focus(),
          1 == i && t.state.selectingText && t.state.selectingText(e),
          (n &&
            (function (e, t, r, n, i) {
              var o = "Click";
              "double" == n
                ? (o = "Double" + o)
                : "triple" == n && (o = "Triple" + o);
              return (
                (o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o),
                ui(e, Qn(o, i), i, function (t) {
                  if (("string" == typeof t && (t = vl[t]), !t)) return !1;
                  var n = !1;
                  try {
                    e.isReadOnly() && (e.state.suppressEdits = !0),
                      (n = t(e, r) != vo);
                  } finally {
                    e.state.suppressEdits = !1;
                  }
                  return n;
                })
              );
            })(t, i, n, o, e)) ||
            (1 == i
              ? n
                ? (function (e, t, r, n) {
                    Ki ? setTimeout(u($t, e), 0) : (e.curOp.focus = l());
                    var i,
                      o = (function (e, t, r) {
                        var n = e.getOption("configureMouse"),
                          i = n ? n(e, t, r) : {};
                        if (null == i.unit) {
                          var o = no ? r.shiftKey && r.metaKey : r.altKey;
                          i.unit = o
                            ? "rectangle"
                            : "single" == t
                            ? "char"
                            : "double" == t
                            ? "word"
                            : "line";
                        }
                        (null == i.extend || e.doc.extend) &&
                          (i.extend = e.doc.extend || r.shiftKey);
                        null == i.addNew &&
                          (i.addNew = ro ? r.metaKey : r.ctrlKey);
                        null == i.moveOnDrag &&
                          (i.moveOnDrag = !(ro ? r.altKey : r.ctrlKey));
                        return i;
                      })(e, r, n),
                      s = e.doc.sel;
                    e.options.dragDrop &&
                    Oo &&
                    !e.isReadOnly() &&
                    "single" == r &&
                    (i = s.contains(t)) > -1 &&
                    (F((i = s.ranges[i]).from(), t) < 0 || t.xRel > 0) &&
                    (F(i.to(), t) > 0 || t.xRel < 0)
                      ? (function (e, t, r, n) {
                          var i = e.display,
                            o = !1,
                            l = xr(e, function (t) {
                              Xi && (i.scroller.draggable = !1),
                                (e.state.draggingText = !1),
                                de(document, "mouseup", l),
                                de(document, "mousemove", s),
                                de(i.scroller, "dragstart", a),
                                de(i.scroller, "drop", l),
                                o ||
                                  (be(t),
                                  n.addNew ||
                                    fn(e.doc, r, null, null, n.extend),
                                  Xi || (Ki && 9 == ji)
                                    ? setTimeout(function () {
                                        document.body.focus(), i.input.focus();
                                      }, 20)
                                    : i.input.focus());
                            }),
                            s = function (e) {
                              o =
                                o ||
                                Math.abs(t.clientX - e.clientX) +
                                  Math.abs(t.clientY - e.clientY) >=
                                  10;
                            },
                            a = function () {
                              return (o = !0);
                            };
                          Xi && (i.scroller.draggable = !0);
                          (e.state.draggingText = l),
                            (l.copy = !n.moveOnDrag),
                            i.scroller.dragDrop && i.scroller.dragDrop();
                          No(document, "mouseup", l),
                            No(document, "mousemove", s),
                            No(i.scroller, "dragstart", a),
                            No(i.scroller, "drop", l),
                            Zt(e),
                            setTimeout(function () {
                              return i.input.focus();
                            }, 20);
                        })(e, n, t, o)
                      : (function (e, t, r, n) {
                          function i(t) {
                            if (0 != F(m, t))
                              if (((m = t), "rectangle" == n.unit)) {
                                for (
                                  var i = [],
                                    o = e.options.tabSize,
                                    l = h(k(u, r.line).text, r.ch, o),
                                    s = h(k(u, t.line).text, t.ch, o),
                                    a = Math.min(l, s),
                                    g = Math.max(l, s),
                                    v = Math.min(r.line, t.line),
                                    y = Math.min(
                                      e.lastLine(),
                                      Math.max(r.line, t.line)
                                    );
                                  v <= y;
                                  v++
                                ) {
                                  var b = k(u, v).text,
                                    w = d(b, a, o);
                                  a == g
                                    ? i.push(new rl(H(v, w), H(v, w)))
                                    : b.length > w &&
                                      i.push(new rl(H(v, w), H(v, d(b, g, o))));
                                }
                                i.length || i.push(new rl(r, r)),
                                  mn(u, Gr(p.ranges.slice(0, f).concat(i), f), {
                                    origin: "*mouse",
                                    scroll: !1,
                                  }),
                                  e.scrollIntoView(t);
                              } else {
                                var x,
                                  C = c,
                                  S = vi(e, t, n.unit),
                                  L = C.anchor;
                                F(S.anchor, L) > 0
                                  ? ((x = S.head), (L = I(C.from(), S.anchor)))
                                  : ((x = S.anchor), (L = z(C.to(), S.head)));
                                var T = p.ranges.slice(0);
                                (T[f] = (function (e, t) {
                                  var r = t.anchor,
                                    n = t.head,
                                    i = k(e.doc, r.line);
                                  if (0 == F(r, n) && r.sticky == n.sticky)
                                    return t;
                                  var o = he(i);
                                  if (!o) return t;
                                  var l = ce(o, r.ch, r.sticky),
                                    s = o[l];
                                  if (s.from != r.ch && s.to != r.ch) return t;
                                  var a =
                                    l +
                                    ((s.from == r.ch) == (1 != s.level)
                                      ? 0
                                      : 1);
                                  if (0 == a || a == o.length) return t;
                                  var u;
                                  if (n.line != r.line)
                                    u =
                                      (n.line - r.line) *
                                        ("ltr" == e.doc.direction ? 1 : -1) >
                                      0;
                                  else {
                                    var c = ce(o, n.ch, n.sticky),
                                      h =
                                        c - l ||
                                        (n.ch - r.ch) * (1 == s.level ? -1 : 1);
                                    u = c == a - 1 || c == a ? h < 0 : h > 0;
                                  }
                                  var f = o[a + (u ? -1 : 0)],
                                    d = u == (1 == f.level),
                                    p = d ? f.from : f.to,
                                    g = d ? "after" : "before";
                                  return r.ch == p && r.sticky == g
                                    ? t
                                    : new rl(new H(r.line, p, g), n);
                                })(e, new rl(B(u, L), x))),
                                  mn(u, Gr(T, f), yo);
                              }
                          }
                          function o(t) {
                            var r = ++b,
                              s = Vt(e, t, !0, "rectangle" == n.unit);
                            if (s)
                              if (0 != F(s, m)) {
                                (e.curOp.focus = l()), i(s);
                                var c = rr(a, u);
                                (s.line >= c.to || s.line < c.from) &&
                                  setTimeout(
                                    xr(e, function () {
                                      b == r && o(t);
                                    }),
                                    150
                                  );
                              } else {
                                var h =
                                  t.clientY < y.top
                                    ? -20
                                    : t.clientY > y.bottom
                                    ? 20
                                    : 0;
                                h &&
                                  setTimeout(
                                    xr(e, function () {
                                      b == r &&
                                        ((a.scroller.scrollTop += h), o(t));
                                    }),
                                    50
                                  );
                              }
                          }
                          function s(t) {
                            (e.state.selectingText = !1),
                              (b = 1 / 0),
                              be(t),
                              a.input.focus(),
                              de(document, "mousemove", w),
                              de(document, "mouseup", x),
                              (u.history.lastSelOrigin = null);
                          }
                          var a = e.display,
                            u = e.doc;
                          be(t);
                          var c,
                            f,
                            p = u.sel,
                            g = p.ranges;
                          n.addNew && !n.extend
                            ? ((f = u.sel.contains(r)),
                              (c = f > -1 ? g[f] : new rl(r, r)))
                            : ((c = u.sel.primary()), (f = u.sel.primIndex));
                          if ("rectangle" == n.unit)
                            n.addNew || (c = new rl(r, r)),
                              (r = Vt(e, t, !0, !0)),
                              (f = -1);
                          else {
                            var v = vi(e, r, n.unit);
                            c = n.extend
                              ? hn(c, v.anchor, v.head, n.extend)
                              : v;
                          }
                          n.addNew
                            ? -1 == f
                              ? ((f = g.length),
                                mn(u, Gr(g.concat([c]), f), {
                                  scroll: !1,
                                  origin: "*mouse",
                                }))
                              : g.length > 1 &&
                                g[f].empty() &&
                                "char" == n.unit &&
                                !n.extend
                              ? (mn(
                                  u,
                                  Gr(g.slice(0, f).concat(g.slice(f + 1)), 0),
                                  { scroll: !1, origin: "*mouse" }
                                ),
                                (p = u.sel))
                              : pn(u, f, c, yo)
                            : ((f = 0), mn(u, new tl([c], 0), yo), (p = u.sel));
                          var m = r;
                          var y = a.wrapper.getBoundingClientRect(),
                            b = 0;
                          var w = xr(e, function (e) {
                              Le(e) ? o(e) : s(e);
                            }),
                            x = xr(e, s);
                          (e.state.selectingText = x),
                            No(document, "mousemove", w),
                            No(document, "mouseup", x);
                        })(e, n, t, o);
                  })(t, n, o, e)
                : Se(e) == r.scroller && be(e)
              : 2 == i
              ? (n && fn(t.doc, n),
                setTimeout(function () {
                  return r.input.focus();
                }, 20))
              : 3 == i && (ao ? bi(t, e) : Zt(t)));
      }
  }
  function vi(e, t, r) {
    if ("char" == r) return new rl(t, t);
    if ("word" == r) return e.findWordAt(t);
    if ("line" == r) return new rl(H(t.line, 0), B(e.doc, H(t.line + 1, 0)));
    var n = r(e, t);
    return new rl(n.from, n.to);
  }
  function mi(e, t, r, n) {
    var i, o;
    if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
    else
      try {
        (i = t.clientX), (o = t.clientY);
      } catch (t) {
        return !1;
      }
    if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right))
      return !1;
    n && be(t);
    var l = e.display,
      s = l.lineDiv.getBoundingClientRect();
    if (o > s.bottom || !me(e, r)) return xe(t);
    o -= s.top - l.viewOffset;
    for (var a = 0; a < e.options.gutters.length; ++a) {
      var u = l.gutters.childNodes[a];
      if (u && u.getBoundingClientRect().right >= i) {
        return pe(e, r, e, A(e.doc, o), e.options.gutters[a], t), xe(t);
      }
    }
  }
  function yi(e, t) {
    return mi(e, t, "gutterClick", !0);
  }
  function bi(e, t) {
    st(e.display, t) ||
      (function (e, t) {
        if (!me(e, "gutterContextMenu")) return !1;
        return mi(e, t, "gutterContextMenu", !1);
      })(e, t) ||
      ge(e, t, "contextmenu") ||
      e.display.input.onContextMenu(t);
  }
  function wi(e) {
    (e.display.wrapper.className =
      e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
      e.options.theme.replace(/(^|\s)\s*/g, " cm-s-")),
      St(e);
  }
  function xi(e) {
    Er(e), Lr(e), nr(e);
  }
  function Ci(e, t, r) {
    if (!t != !(r && r != Cl)) {
      var n = e.display.dragFunctions,
        i = t ? No : de;
      i(e.display.scroller, "dragstart", n.start),
        i(e.display.scroller, "dragenter", n.enter),
        i(e.display.scroller, "dragover", n.over),
        i(e.display.scroller, "dragleave", n.leave),
        i(e.display.scroller, "drop", n.drop);
    }
  }
  function Si(e) {
    e.options.lineWrapping
      ? (s(e.display.wrapper, "CodeMirror-wrap"),
        (e.display.sizer.style.minWidth = ""),
        (e.display.sizerWidth = null))
      : (uo(e.display.wrapper, "CodeMirror-wrap"), ue(e)),
      Ut(e),
      Lr(e),
      St(e),
      setTimeout(function () {
        return gr(e);
      }, 100);
  }
  function Li(e, t) {
    var o = this;
    if (!(this instanceof Li)) return new Li(e, t);
    (this.options = t = t ? c(t) : {}), c(Sl, t, !1), zr(t);
    var l = t.value;
    "string" == typeof l &&
      (l = new al(l, t.mode, null, t.lineSeparator, t.direction)),
      (this.doc = l);
    var s = new Li.inputStyles[t.inputStyle](this),
      a = (this.display = new (function (e, t, r) {
        var o = this;
        (this.input = r),
          (o.scrollbarFiller = n("div", null, "CodeMirror-scrollbar-filler")),
          o.scrollbarFiller.setAttribute("cm-not-content", "true"),
          (o.gutterFiller = n("div", null, "CodeMirror-gutter-filler")),
          o.gutterFiller.setAttribute("cm-not-content", "true"),
          (o.lineDiv = i("div", null, "CodeMirror-code")),
          (o.selectionDiv = n(
            "div",
            null,
            null,
            "position: relative; z-index: 1"
          )),
          (o.cursorDiv = n("div", null, "CodeMirror-cursors")),
          (o.measure = n("div", null, "CodeMirror-measure")),
          (o.lineMeasure = n("div", null, "CodeMirror-measure")),
          (o.lineSpace = i(
            "div",
            [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv],
            null,
            "position: relative; outline: none"
          ));
        var l = i("div", [o.lineSpace], "CodeMirror-lines");
        (o.mover = n("div", [l], null, "position: relative")),
          (o.sizer = n("div", [o.mover], "CodeMirror-sizer")),
          (o.sizerWidth = null),
          (o.heightForcer = n(
            "div",
            null,
            null,
            "position: absolute; height: " + go + "px; width: 1px;"
          )),
          (o.gutters = n("div", null, "CodeMirror-gutters")),
          (o.lineGutter = null),
          (o.scroller = n(
            "div",
            [o.sizer, o.heightForcer, o.gutters],
            "CodeMirror-scroll"
          )),
          o.scroller.setAttribute("tabIndex", "-1"),
          (o.wrapper = n(
            "div",
            [o.scrollbarFiller, o.gutterFiller, o.scroller],
            "CodeMirror"
          )),
          Ki &&
            ji < 8 &&
            ((o.gutters.style.zIndex = -1),
            (o.scroller.style.paddingRight = 0)),
          Xi || (Bi && to) || (o.scroller.draggable = !0),
          e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)),
          (o.viewFrom = o.viewTo = t.first),
          (o.reportedViewFrom = o.reportedViewTo = t.first),
          (o.view = []),
          (o.renderedView = null),
          (o.externalMeasured = null),
          (o.viewOffset = 0),
          (o.lastWrapHeight = o.lastWrapWidth = 0),
          (o.updateLineNumbers = null),
          (o.nativeBarWidth = o.barHeight = o.barWidth = 0),
          (o.scrollbarsClipped = !1),
          (o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null),
          (o.alignWidgets = !1),
          (o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null),
          (o.maxLine = null),
          (o.maxLineLength = 0),
          (o.maxLineChanged = !1),
          (o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null),
          (o.shift = !1),
          (o.selForContextMenu = null),
          (o.activeTouch = null),
          r.init(o);
      })(e, l, s));
    (a.wrapper.CodeMirror = this),
      Er(this),
      wi(this),
      t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"),
      mr(this),
      (this.state = {
        keyMaps: [],
        overlays: [],
        modeGen: 0,
        overwrite: !1,
        delayingBlurEvent: !1,
        focused: !1,
        suppressEdits: !1,
        pasteIncoming: !1,
        cutIncoming: !1,
        selectingText: !1,
        draggingText: !1,
        highlight: new ho(),
        keySeq: null,
        specialChars: null,
      }),
      t.autofocus && !to && a.input.focus(),
      Ki &&
        ji < 11 &&
        setTimeout(function () {
          return o.display.input.reset(!0);
        }, 20),
      (function (e) {
        function t() {
          o.activeTouch &&
            ((l = setTimeout(function () {
              return (o.activeTouch = null);
            }, 1e3)),
            ((s = o.activeTouch).end = +new Date()));
        }
        function i(e, t) {
          if (null == t.left) return !0;
          var r = t.left - e.left,
            n = t.top - e.top;
          return r * r + n * n > 400;
        }
        var o = e.display;
        No(o.scroller, "mousedown", xr(e, gi)),
          Ki && ji < 11
            ? No(
                o.scroller,
                "dblclick",
                xr(e, function (t) {
                  if (!ge(e, t)) {
                    var r = Vt(e, t);
                    if (r && !yi(e, t) && !st(e.display, t)) {
                      be(t);
                      var n = e.findWordAt(r);
                      fn(e.doc, n.anchor, n.head);
                    }
                  }
                })
              )
            : No(o.scroller, "dblclick", function (t) {
                return ge(e, t) || be(t);
              });
        ao ||
          No(o.scroller, "contextmenu", function (t) {
            return bi(e, t);
          });
        var l,
          s = { end: 0 };
        No(o.scroller, "touchstart", function (t) {
          if (
            !ge(e, t) &&
            !(function (e) {
              if (1 != e.touches.length) return !1;
              var t = e.touches[0];
              return t.radiusX <= 1 && t.radiusY <= 1;
            })(t) &&
            !yi(e, t)
          ) {
            o.input.ensurePolled(), clearTimeout(l);
            var r = +new Date();
            (o.activeTouch = {
              start: r,
              moved: !1,
              prev: r - s.end <= 300 ? s : null,
            }),
              1 == t.touches.length &&
                ((o.activeTouch.left = t.touches[0].pageX),
                (o.activeTouch.top = t.touches[0].pageY));
          }
        }),
          No(o.scroller, "touchmove", function () {
            o.activeTouch && (o.activeTouch.moved = !0);
          }),
          No(o.scroller, "touchend", function (r) {
            var n = o.activeTouch;
            if (
              n &&
              !st(o, r) &&
              null != n.left &&
              !n.moved &&
              new Date() - n.start < 300
            ) {
              var l,
                s = e.coordsChar(o.activeTouch, "page");
              (l =
                !n.prev || i(n, n.prev)
                  ? new rl(s, s)
                  : !n.prev.prev || i(n, n.prev.prev)
                  ? e.findWordAt(s)
                  : new rl(H(s.line, 0), B(e.doc, H(s.line + 1, 0)))),
                e.setSelection(l.anchor, l.head),
                e.focus(),
                be(r);
            }
            t();
          }),
          No(o.scroller, "touchcancel", t),
          No(o.scroller, "scroll", function () {
            o.scroller.clientHeight &&
              (hr(e, o.scroller.scrollTop),
              dr(e, o.scroller.scrollLeft, !0),
              pe(e, "scroll", e));
          }),
          No(o.scroller, "mousewheel", function (t) {
            return Br(e, t);
          }),
          No(o.scroller, "DOMMouseScroll", function (t) {
            return Br(e, t);
          }),
          No(o.wrapper, "scroll", function () {
            return (o.wrapper.scrollTop = o.wrapper.scrollLeft = 0);
          }),
          (o.dragFunctions = {
            enter: function (t) {
              ge(e, t) || Ce(t);
            },
            over: function (t) {
              ge(e, t) ||
                (!(function (e, t) {
                  var i = Vt(e, t);
                  if (i) {
                    var o = document.createDocumentFragment();
                    Yt(e, i, o),
                      e.display.dragCursor ||
                        ((e.display.dragCursor = n(
                          "div",
                          null,
                          "CodeMirror-cursors CodeMirror-dragcursors"
                        )),
                        e.display.lineSpace.insertBefore(
                          e.display.dragCursor,
                          e.display.cursorDiv
                        )),
                      r(e.display.dragCursor, o);
                  }
                })(e, t),
                Ce(t));
            },
            start: function (t) {
              return (function (e, t) {
                if (Ki && (!e.state.draggingText || +new Date() - ul < 100))
                  Ce(t);
                else if (
                  !ge(e, t) &&
                  !st(e.display, t) &&
                  (t.dataTransfer.setData("Text", e.getSelection()),
                  (t.dataTransfer.effectAllowed = "copyMove"),
                  t.dataTransfer.setDragImage && !$i)
                ) {
                  var r = n(
                    "img",
                    null,
                    null,
                    "position: fixed; left: 0; top: 0;"
                  );
                  (r.src =
                    "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                    qi &&
                      ((r.width = r.height = 1),
                      e.display.wrapper.appendChild(r),
                      (r._top = r.offsetTop)),
                    t.dataTransfer.setDragImage(r, 0, 0),
                    qi && r.parentNode.removeChild(r);
                }
              })(e, t);
            },
            drop: xr(e, Vn),
            leave: function (t) {
              ge(e, t) || Kn(e);
            },
          });
        var a = o.input.getField();
        No(a, "keyup", function (t) {
          return di.call(e, t);
        }),
          No(a, "keydown", xr(e, fi)),
          No(a, "keypress", xr(e, pi)),
          No(a, "focus", function (t) {
            return Qt(e, t);
          }),
          No(a, "blur", function (t) {
            return Jt(e, t);
          });
      })(this),
      Xn(),
      yr(this),
      (this.curOp.forceUpdate = !0),
      Qr(this, l),
      (t.autofocus && !to) || this.hasFocus()
        ? setTimeout(u(Qt, this), 20)
        : Jt(this);
    for (var h in Ll) Ll.hasOwnProperty(h) && Ll[h](o, t[h], Cl);
    ir(this), t.finishInit && t.finishInit(this);
    for (var f = 0; f < kl.length; ++f) kl[f](o);
    br(this),
      Xi &&
        t.lineWrapping &&
        "optimizelegibility" == getComputedStyle(a.lineDiv).textRendering &&
        (a.lineDiv.style.textRendering = "auto");
  }
  function ki(e, t, r, n) {
    var i,
      o = e.doc;
    null == r && (r = "add"),
      "smart" == r && (o.mode.indent ? (i = Pe(e, t).state) : (r = "prev"));
    var l = e.options.tabSize,
      s = k(o, t),
      a = h(s.text, null, l);
    s.stateAfter && (s.stateAfter = null);
    var u,
      c = s.text.match(/^\s*/)[0];
    if (n || /\S/.test(s.text)) {
      if (
        "smart" == r &&
        ((u = o.mode.indent(i, s.text.slice(c.length), s.text)) == vo ||
          u > 150)
      ) {
        if (!n) return;
        r = "prev";
      }
    } else (u = 0), (r = "not");
    "prev" == r
      ? (u = t > o.first ? h(k(o, t - 1).text, null, l) : 0)
      : "add" == r
      ? (u = a + e.options.indentUnit)
      : "subtract" == r
      ? (u = a - e.options.indentUnit)
      : "number" == typeof r && (u = a + r),
      (u = Math.max(0, u));
    var f = "",
      d = 0;
    if (e.options.indentWithTabs)
      for (var g = Math.floor(u / l); g; --g) (d += l), (f += "\t");
    if ((d < u && (f += p(u - d)), f != c))
      return (
        Dn(o, f, H(t, 0), H(t, c.length), "+input"), (s.stateAfter = null), !0
      );
    for (var v = 0; v < o.sel.ranges.length; v++) {
      var m = o.sel.ranges[v];
      if (m.head.line == t && m.head.ch < c.length) {
        var y = H(t, c.length);
        pn(o, v, new rl(y, y));
        break;
      }
    }
  }
  function Ti(e) {
    Tl = e;
  }
  function Mi(e, t, r, n, i) {
    var o = e.doc;
    (e.display.shift = !1), n || (n = o.sel);
    var l = e.state.pasteIncoming || "paste" == i,
      s = Ao(t),
      a = null;
    if (l && n.ranges.length > 1)
      if (Tl && Tl.text.join("\n") == t) {
        if (n.ranges.length % Tl.text.length == 0) {
          a = [];
          for (var u = 0; u < Tl.text.length; u++)
            a.push(o.splitLines(Tl.text[u]));
        }
      } else
        s.length == n.ranges.length &&
          e.options.pasteLinesPerSelection &&
          (a = v(s, function (e) {
            return [e];
          }));
    for (var c, h = n.ranges.length - 1; h >= 0; h--) {
      var f = n.ranges[h],
        d = f.from(),
        p = f.to();
      f.empty() &&
        (r && r > 0
          ? (d = H(d.line, d.ch - r))
          : e.state.overwrite && !l
          ? (p = H(
              p.line,
              Math.min(k(o, p.line).text.length, p.ch + g(s).length)
            ))
          : Tl &&
            Tl.lineWise &&
            Tl.text.join("\n") == t &&
            (d = p = H(d.line, 0))),
        (c = e.curOp.updateInput);
      var m = {
        from: d,
        to: p,
        text: a ? a[h % a.length] : s,
        origin: i || (l ? "paste" : e.state.cutIncoming ? "cut" : "+input"),
      };
      Mn(e.doc, m), $e(e, "inputRead", e, m);
    }
    t && !l && Oi(e, t),
      sr(e),
      (e.curOp.updateInput = c),
      (e.curOp.typing = !0),
      (e.state.pasteIncoming = e.state.cutIncoming = !1);
  }
  function Ni(e, t) {
    var r = e.clipboardData && e.clipboardData.getData("Text");
    if (r)
      return (
        e.preventDefault(),
        t.isReadOnly() ||
          t.options.disableInput ||
          wr(t, function () {
            return Mi(t, r, 0, null, "paste");
          }),
        !0
      );
  }
  function Oi(e, t) {
    if (e.options.electricChars && e.options.smartIndent)
      for (var r = e.doc.sel, n = r.ranges.length - 1; n >= 0; n--) {
        var i = r.ranges[n];
        if (
          !(i.head.ch > 100 || (n && r.ranges[n - 1].head.line == i.head.line))
        ) {
          var o = e.getModeAt(i.head),
            l = !1;
          if (o.electricChars) {
            for (var s = 0; s < o.electricChars.length; s++)
              if (t.indexOf(o.electricChars.charAt(s)) > -1) {
                l = ki(e, i.head.line, "smart");
                break;
              }
          } else
            o.electricInput &&
              o.electricInput.test(
                k(e.doc, i.head.line).text.slice(0, i.head.ch)
              ) &&
              (l = ki(e, i.head.line, "smart"));
          l && $e(e, "electricInput", e, i.head.line);
        }
      }
  }
  function Ai(e) {
    for (var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++) {
      var i = e.doc.sel.ranges[n].head.line,
        o = { anchor: H(i, 0), head: H(i + 1, 0) };
      r.push(o), t.push(e.getRange(o.anchor, o.head));
    }
    return { text: t, ranges: r };
  }
  function Wi(e, t) {
    e.setAttribute("autocorrect", "off"),
      e.setAttribute("autocapitalize", "off"),
      e.setAttribute("spellcheck", !!t);
  }
  function Di() {
    var e = n(
        "textarea",
        null,
        null,
        "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"
      ),
      t = n(
        "div",
        [e],
        null,
        "overflow: hidden; position: relative; width: 3px; height: 0px;"
      );
    return (
      Xi ? (e.style.width = "1000px") : e.setAttribute("wrap", "off"),
      Ji && (e.style.border = "1px solid black"),
      Wi(e),
      t
    );
  }
  function Hi(e, t, r, n, i) {
    function o(n) {
      var o;
      if (
        null ==
        (o = i
          ? (function (e, t, r, n) {
              var i = he(t, e.doc.direction);
              if (!i) return ni(t, r, n);
              r.ch >= t.text.length
                ? ((r.ch = t.text.length), (r.sticky = "before"))
                : r.ch <= 0 && ((r.ch = 0), (r.sticky = "after"));
              var o = ce(i, r.ch, r.sticky),
                l = i[o];
              if (
                "ltr" == e.doc.direction &&
                l.level % 2 == 0 &&
                (n > 0 ? l.to > r.ch : l.from < r.ch)
              )
                return ni(t, r, n);
              var s,
                a = function (e, r) {
                  return ri(t, e instanceof H ? e.ch : e, r);
                },
                u = function (r) {
                  return e.options.lineWrapping
                    ? ((s = s || mt(e, t)), Pt(e, t, s, r))
                    : { begin: 0, end: t.text.length };
                },
                c = u("before" == r.sticky ? a(r, -1) : r.ch);
              if ("rtl" == e.doc.direction || 1 == l.level) {
                var h = (1 == l.level) == n < 0,
                  f = a(r, h ? 1 : -1);
                if (
                  null != f &&
                  (h ? f <= l.to && f <= c.end : f >= l.from && f >= c.begin)
                ) {
                  var d = h ? "before" : "after";
                  return new H(r.line, f, d);
                }
              }
              var p = function (e, t, n) {
                  for (
                    var o = function (e, t) {
                      return t
                        ? new H(r.line, a(e, 1), "before")
                        : new H(r.line, e, "after");
                    };
                    e >= 0 && e < i.length;
                    e += t
                  ) {
                    var l = i[e],
                      s = t > 0 == (1 != l.level),
                      u = s ? n.begin : a(n.end, -1);
                    if (l.from <= u && u < l.to) return o(u, s);
                    if (
                      ((u = s ? l.from : a(l.to, -1)),
                      n.begin <= u && u < n.end)
                    )
                      return o(u, s);
                  }
                },
                g = p(o + n, n, c);
              if (g) return g;
              var v = n > 0 ? c.end : a(c.begin, -1);
              return null == v ||
                (n > 0 && v == t.text.length) ||
                !(g = p(n > 0 ? 0 : i.length - 1, n, u(v)))
                ? null
                : g;
            })(e.cm, a, t, r)
          : ni(a, t, r))
      ) {
        if (
          n ||
          !(function () {
            var n = t.line + r;
            return (
              !(n < e.first || n >= e.first + e.size) &&
              ((t = new H(n, t.ch, t.sticky)), (a = k(e, n)))
            );
          })()
        )
          return !1;
        t = ii(i, e.cm, a, t.line, r);
      } else t = o;
      return !0;
    }
    var l = t,
      s = r,
      a = k(e, t.line);
    if ("char" == n) o();
    else if ("column" == n) o(!0);
    else if ("word" == n || "group" == n)
      for (
        var u = null,
          c = "group" == n,
          h = e.cm && e.cm.getHelper(t, "wordChars"),
          f = !0;
        !(r < 0) || o(!f);
        f = !1
      ) {
        var d = a.text.charAt(t.ch) || "\n",
          p = w(d, h)
            ? "w"
            : c && "\n" == d
            ? "n"
            : !c || /\s/.test(d)
            ? null
            : "p";
        if ((!c || f || p || (p = "s"), u && u != p)) {
          r < 0 && ((r = 1), o(), (t.sticky = "after"));
          break;
        }
        if ((p && (u = p), r > 0 && !o(!f))) break;
      }
    var g = Sn(e, t, l, s, !0);
    return P(l, g) && (g.hitSide = !0), g;
  }
  function Fi(e, t, r, n) {
    var i,
      o = e.doc,
      l = t.left;
    if ("page" == n) {
      var s = Math.min(
          e.display.wrapper.clientHeight,
          window.innerHeight || document.documentElement.clientHeight
        ),
        a = Math.max(s - 0.5 * zt(e.display), 3);
      i = (r > 0 ? t.bottom : t.top) + r * a;
    } else "line" == n && (i = r > 0 ? t.bottom + 3 : t.top - 3);
    for (var u; (u = Ht(e, l, i)).outside; ) {
      if (r < 0 ? i <= 0 : i >= o.height) {
        u.hitSide = !0;
        break;
      }
      i += 5 * r;
    }
    return u;
  }
  function Pi(e, t) {
    var r = vt(e, t.line);
    if (!r || r.hidden) return null;
    var n = k(e.doc, t.line),
      i = pt(r, n, t.line),
      o = he(n, e.doc.direction),
      l = "left";
    if (o) {
      l = ce(o, t.ch) % 2 ? "right" : "left";
    }
    var s = bt(i.map, t.ch, l);
    return (s.offset = "right" == s.collapse ? s.end : s.start), s;
  }
  function Ei(e, t) {
    return t && (e.bad = !0), e;
  }
  function zi(e, t, r) {
    var n;
    if (t == e.display.lineDiv) {
      if (!(n = e.display.lineDiv.childNodes[r]))
        return Ei(e.clipPos(H(e.display.viewTo - 1)), !0);
      (t = null), (r = 0);
    } else
      for (n = t; ; n = n.parentNode) {
        if (!n || n == e.display.lineDiv) return null;
        if (n.parentNode && n.parentNode == e.display.lineDiv) break;
      }
    for (var i = 0; i < e.display.view.length; i++) {
      var l = e.display.view[i];
      if (l.node == n)
        return (function (e, t, r) {
          function n(t, r, n) {
            for (var i = -1; i < (h ? h.length : 0); i++)
              for (var o = i < 0 ? c.map : h[i], l = 0; l < o.length; l += 3) {
                var s = o[l + 2];
                if (s == t || s == r) {
                  var a = O(i < 0 ? e.line : e.rest[i]),
                    u = o[l] + n;
                  return (n < 0 || s != t) && (u = o[l + (n ? 1 : 0)]), H(a, u);
                }
              }
          }
          var i = e.text.firstChild,
            l = !1;
          if (!t || !o(i, t)) return Ei(H(O(e.line), 0), !0);
          if (t == i && ((l = !0), (t = i.childNodes[r]), (r = 0), !t)) {
            var s = e.rest ? g(e.rest) : e.line;
            return Ei(H(O(s), s.text.length), l);
          }
          var a = 3 == t.nodeType ? t : null,
            u = t;
          a ||
            1 != t.childNodes.length ||
            3 != t.firstChild.nodeType ||
            ((a = t.firstChild), r && (r = a.nodeValue.length));
          for (; u.parentNode != i; ) u = u.parentNode;
          var c = e.measure,
            h = c.maps;
          var f = n(a, u, r);
          if (f) return Ei(f, l);
          for (
            var d = u.nextSibling, p = a ? a.nodeValue.length - r : 0;
            d;
            d = d.nextSibling
          ) {
            if ((f = n(d, d.firstChild, 0))) return Ei(H(f.line, f.ch - p), l);
            p += d.textContent.length;
          }
          for (var v = u.previousSibling, m = r; v; v = v.previousSibling) {
            if ((f = n(v, v.firstChild, -1))) return Ei(H(f.line, f.ch + m), l);
            m += v.textContent.length;
          }
        })(l, t, r);
    }
  }
  var Ii = navigator.userAgent,
    Ri = navigator.platform,
    Bi = /gecko\/\d/i.test(Ii),
    Gi = /MSIE \d/.test(Ii),
    Ui = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Ii),
    Vi = /Edge\/(\d+)/.exec(Ii),
    Ki = Gi || Ui || Vi,
    ji = Ki && (Gi ? document.documentMode || 6 : +(Vi || Ui)[1]),
    Xi = !Vi && /WebKit\//.test(Ii),
    Yi = Xi && /Qt\/\d+\.\d+/.test(Ii),
    _i = !Vi && /Chrome\//.test(Ii),
    qi = /Opera\//.test(Ii),
    $i = /Apple Computer/.test(navigator.vendor),
    Zi = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(Ii),
    Qi = /PhantomJS/.test(Ii),
    Ji = !Vi && /AppleWebKit/.test(Ii) && /Mobile\/\w+/.test(Ii),
    eo = /Android/.test(Ii),
    to =
      Ji || eo || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(Ii),
    ro = Ji || /Mac/.test(Ri),
    no = /\bCrOS\b/.test(Ii),
    io = /win/i.test(Ri),
    oo = qi && Ii.match(/Version\/(\d*\.\d*)/);
  oo && (oo = Number(oo[1])), oo && oo >= 15 && ((qi = !1), (Xi = !0));
  var lo,
    so = ro && (Yi || (qi && (null == oo || oo < 12.11))),
    ao = Bi || (Ki && ji >= 9),
    uo = function (t, r) {
      var n = t.className,
        i = e(r).exec(n);
      if (i) {
        var o = n.slice(i.index + i[0].length);
        t.className = n.slice(0, i.index) + (o ? i[1] + o : "");
      }
    };
  lo = document.createRange
    ? function (e, t, r, n) {
        var i = document.createRange();
        return i.setEnd(n || e, r), i.setStart(e, t), i;
      }
    : function (e, t, r) {
        var n = document.body.createTextRange();
        try {
          n.moveToElementText(e.parentNode);
        } catch (e) {
          return n;
        }
        return (
          n.collapse(!0),
          n.moveEnd("character", r),
          n.moveStart("character", t),
          n
        );
      };
  var co = function (e) {
    e.select();
  };
  Ji
    ? (co = function (e) {
        (e.selectionStart = 0), (e.selectionEnd = e.value.length);
      })
    : Ki &&
      (co = function (e) {
        try {
          e.select();
        } catch (e) {}
      });
  var ho = function () {
    this.id = null;
  };
  ho.prototype.set = function (e, t) {
    clearTimeout(this.id), (this.id = setTimeout(t, e));
  };
  var fo,
    po,
    go = 30,
    vo = {
      toString: function () {
        return "CodeMirror.Pass";
      },
    },
    mo = { scroll: !1 },
    yo = { origin: "*mouse" },
    bo = { origin: "+move" },
    wo = [""],
    xo =
      /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
    Co =
      /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
    So = !1,
    Lo = !1,
    ko = null,
    To = (function () {
      function e(e) {
        return e <= 247
          ? r.charAt(e)
          : 1424 <= e && e <= 1524
          ? "R"
          : 1536 <= e && e <= 1785
          ? n.charAt(e - 1536)
          : 1774 <= e && e <= 2220
          ? "r"
          : 8192 <= e && e <= 8203
          ? "w"
          : 8204 == e
          ? "b"
          : "L";
      }
      function t(e, t, r) {
        (this.level = e), (this.from = t), (this.to = r);
      }
      var r =
          "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
        n =
          "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111",
        i = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
        o = /[stwN]/,
        l = /[LRr]/,
        s = /[Lb1n]/,
        a = /[1n]/;
      return function (r, n) {
        var u = "ltr" == n ? "L" : "R";
        if (0 == r.length || ("ltr" == n && !i.test(r))) return !1;
        for (var c = r.length, h = [], f = 0; f < c; ++f)
          h.push(e(r.charCodeAt(f)));
        for (var d = 0, p = u; d < c; ++d) {
          var v = h[d];
          "m" == v ? (h[d] = p) : (p = v);
        }
        for (var m = 0, y = u; m < c; ++m) {
          var b = h[m];
          "1" == b && "r" == y
            ? (h[m] = "n")
            : l.test(b) && ((y = b), "r" == b && (h[m] = "R"));
        }
        for (var w = 1, x = h[0]; w < c - 1; ++w) {
          var C = h[w];
          "+" == C && "1" == x && "1" == h[w + 1]
            ? (h[w] = "1")
            : "," != C || x != h[w + 1] || ("1" != x && "n" != x) || (h[w] = x),
            (x = C);
        }
        for (var S = 0; S < c; ++S) {
          var L = h[S];
          if ("," == L) h[S] = "N";
          else if ("%" == L) {
            var k = void 0;
            for (k = S + 1; k < c && "%" == h[k]; ++k);
            for (
              var T =
                  (S && "!" == h[S - 1]) || (k < c && "1" == h[k]) ? "1" : "N",
                M = S;
              M < k;
              ++M
            )
              h[M] = T;
            S = k - 1;
          }
        }
        for (var N = 0, O = u; N < c; ++N) {
          var A = h[N];
          "L" == O && "1" == A ? (h[N] = "L") : l.test(A) && (O = A);
        }
        for (var W = 0; W < c; ++W)
          if (o.test(h[W])) {
            var D = void 0;
            for (D = W + 1; D < c && o.test(h[D]); ++D);
            for (
              var H = "L" == (W ? h[W - 1] : u),
                F = H == ("L" == (D < c ? h[D] : u)) ? (H ? "L" : "R") : u,
                P = W;
              P < D;
              ++P
            )
              h[P] = F;
            W = D - 1;
          }
        for (var E, z = [], I = 0; I < c; )
          if (s.test(h[I])) {
            var R = I;
            for (++I; I < c && s.test(h[I]); ++I);
            z.push(new t(0, R, I));
          } else {
            var B = I,
              G = z.length;
            for (++I; I < c && "L" != h[I]; ++I);
            for (var U = B; U < I; )
              if (a.test(h[U])) {
                B < U && z.splice(G, 0, new t(1, B, U));
                var V = U;
                for (++U; U < I && a.test(h[U]); ++U);
                z.splice(G, 0, new t(2, V, U)), (B = U);
              } else ++U;
            B < I && z.splice(G, 0, new t(1, B, I));
          }
        return (
          "ltr" == n &&
            (1 == z[0].level &&
              (E = r.match(/^\s+/)) &&
              ((z[0].from = E[0].length), z.unshift(new t(0, 0, E[0].length))),
            1 == g(z).level &&
              (E = r.match(/\s+$/)) &&
              ((g(z).to -= E[0].length), z.push(new t(0, c - E[0].length, c)))),
          "rtl" == n ? z.reverse() : z
        );
      };
    })(),
    Mo = [],
    No = function (e, t, r) {
      if (e.addEventListener) e.addEventListener(t, r, !1);
      else if (e.attachEvent) e.attachEvent("on" + t, r);
      else {
        var n = e._handlers || (e._handlers = {});
        n[t] = (n[t] || Mo).concat(r);
      }
    },
    Oo = (function () {
      if (Ki && ji < 9) return !1;
      var e = n("div");
      return "draggable" in e || "dragDrop" in e;
    })(),
    Ao =
      3 != "\n\nb".split(/\n/).length
        ? function (e) {
            for (var t = 0, r = [], n = e.length; t <= n; ) {
              var i = e.indexOf("\n", t);
              -1 == i && (i = e.length);
              var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
                l = o.indexOf("\r");
              -1 != l
                ? (r.push(o.slice(0, l)), (t += l + 1))
                : (r.push(o), (t = i + 1));
            }
            return r;
          }
        : function (e) {
            return e.split(/\r\n?|\n/);
          },
    Wo = window.getSelection
      ? function (e) {
          try {
            return e.selectionStart != e.selectionEnd;
          } catch (e) {
            return !1;
          }
        }
      : function (e) {
          var t;
          try {
            t = e.ownerDocument.selection.createRange();
          } catch (e) {}
          return (
            !(!t || t.parentElement() != e) &&
            0 != t.compareEndPoints("StartToEnd", t)
          );
        },
    Do = (function () {
      var e = n("div");
      return (
        "oncopy" in e ||
        (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy)
      );
    })(),
    Ho = null,
    Fo = {},
    Po = {},
    Eo = {},
    zo = function (e, t, r) {
      (this.pos = this.start = 0),
        (this.string = e),
        (this.tabSize = t || 8),
        (this.lastColumnPos = this.lastColumnValue = 0),
        (this.lineStart = 0),
        (this.lineOracle = r);
    };
  (zo.prototype.eol = function () {
    return this.pos >= this.string.length;
  }),
    (zo.prototype.sol = function () {
      return this.pos == this.lineStart;
    }),
    (zo.prototype.peek = function () {
      return this.string.charAt(this.pos) || void 0;
    }),
    (zo.prototype.next = function () {
      if (this.pos < this.string.length) return this.string.charAt(this.pos++);
    }),
    (zo.prototype.eat = function (e) {
      var t = this.string.charAt(this.pos);
      if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t)))
        return ++this.pos, t;
    }),
    (zo.prototype.eatWhile = function (e) {
      for (var t = this.pos; this.eat(e); );
      return this.pos > t;
    }),
    (zo.prototype.eatSpace = function () {
      for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); )
        ++this.pos;
      return this.pos > e;
    }),
    (zo.prototype.skipToEnd = function () {
      this.pos = this.string.length;
    }),
    (zo.prototype.skipTo = function (e) {
      var t = this.string.indexOf(e, this.pos);
      if (t > -1) return (this.pos = t), !0;
    }),
    (zo.prototype.backUp = function (e) {
      this.pos -= e;
    }),
    (zo.prototype.column = function () {
      return (
        this.lastColumnPos < this.start &&
          ((this.lastColumnValue = h(
            this.string,
            this.start,
            this.tabSize,
            this.lastColumnPos,
            this.lastColumnValue
          )),
          (this.lastColumnPos = this.start)),
        this.lastColumnValue -
          (this.lineStart ? h(this.string, this.lineStart, this.tabSize) : 0)
      );
    }),
    (zo.prototype.indentation = function () {
      return (
        h(this.string, null, this.tabSize) -
        (this.lineStart ? h(this.string, this.lineStart, this.tabSize) : 0)
      );
    }),
    (zo.prototype.match = function (e, t, r) {
      if ("string" != typeof e) {
        var n = this.string.slice(this.pos).match(e);
        return n && n.index > 0
          ? null
          : (n && !1 !== t && (this.pos += n[0].length), n);
      }
      var i = function (e) {
        return r ? e.toLowerCase() : e;
      };
      if (i(this.string.substr(this.pos, e.length)) == i(e))
        return !1 !== t && (this.pos += e.length), !0;
    }),
    (zo.prototype.current = function () {
      return this.string.slice(this.start, this.pos);
    }),
    (zo.prototype.hideFirstChars = function (e, t) {
      this.lineStart += e;
      try {
        return t();
      } finally {
        this.lineStart -= e;
      }
    }),
    (zo.prototype.lookAhead = function (e) {
      var t = this.lineOracle;
      return t && t.lookAhead(e);
    }),
    (zo.prototype.baseToken = function () {
      var e = this.lineOracle;
      return e && e.baseToken(this.pos);
    });
  var Io = function (e, t) {
      (this.state = e), (this.lookAhead = t);
    },
    Ro = function (e, t, r, n) {
      (this.state = t),
        (this.doc = e),
        (this.line = r),
        (this.maxLookAhead = n || 0),
        (this.baseTokens = null),
        (this.baseTokenPos = 1);
    };
  (Ro.prototype.lookAhead = function (e) {
    var t = this.doc.getLine(this.line + e);
    return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t;
  }),
    (Ro.prototype.baseToken = function (e) {
      if (!this.baseTokens) return null;
      for (; this.baseTokens[this.baseTokenPos] <= e; ) this.baseTokenPos += 2;
      var t = this.baseTokens[this.baseTokenPos + 1];
      return {
        type: t && t.replace(/( |^)overlay .*/, ""),
        size: this.baseTokens[this.baseTokenPos] - e,
      };
    }),
    (Ro.prototype.nextLine = function () {
      this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
    }),
    (Ro.fromSaved = function (e, t, r) {
      return t instanceof Io
        ? new Ro(e, Ae(e.mode, t.state), r, t.lookAhead)
        : new Ro(e, Ae(e.mode, t), r);
    }),
    (Ro.prototype.save = function (e) {
      var t = !1 !== e ? Ae(this.doc.mode, this.state) : this.state;
      return this.maxLookAhead > 0 ? new Io(t, this.maxLookAhead) : t;
    });
  var Bo = function (e, t, r) {
      (this.start = e.start),
        (this.end = e.pos),
        (this.string = e.current()),
        (this.type = t || null),
        (this.state = r);
    },
    Go = function (e, t, r) {
      (this.text = e), _(this, t), (this.height = r ? r(this) : 1);
    };
  (Go.prototype.lineNo = function () {
    return O(this);
  }),
    ye(Go);
  var Uo,
    Vo = {},
    Ko = {},
    jo = null,
    Xo = null,
    Yo = { left: 0, right: 0, top: 0, bottom: 0 },
    _o = function (e, t, r) {
      this.cm = r;
      var i = (this.vert = n(
          "div",
          [n("div", null, null, "min-width: 1px")],
          "CodeMirror-vscrollbar"
        )),
        o = (this.horiz = n(
          "div",
          [n("div", null, null, "height: 100%; min-height: 1px")],
          "CodeMirror-hscrollbar"
        ));
      e(i),
        e(o),
        No(i, "scroll", function () {
          i.clientHeight && t(i.scrollTop, "vertical");
        }),
        No(o, "scroll", function () {
          o.clientWidth && t(o.scrollLeft, "horizontal");
        }),
        (this.checkedZeroWidth = !1),
        Ki &&
          ji < 8 &&
          (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
    };
  (_o.prototype.update = function (e) {
    var t = e.scrollWidth > e.clientWidth + 1,
      r = e.scrollHeight > e.clientHeight + 1,
      n = e.nativeBarWidth;
    if (r) {
      (this.vert.style.display = "block"),
        (this.vert.style.bottom = t ? n + "px" : "0");
      var i = e.viewHeight - (t ? n : 0);
      this.vert.firstChild.style.height =
        Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
    } else
      (this.vert.style.display = ""), (this.vert.firstChild.style.height = "0");
    if (t) {
      (this.horiz.style.display = "block"),
        (this.horiz.style.right = r ? n + "px" : "0"),
        (this.horiz.style.left = e.barLeft + "px");
      var o = e.viewWidth - e.barLeft - (r ? n : 0);
      this.horiz.firstChild.style.width =
        Math.max(0, e.scrollWidth - e.clientWidth + o) + "px";
    } else
      (this.horiz.style.display = ""),
        (this.horiz.firstChild.style.width = "0");
    return (
      !this.checkedZeroWidth &&
        e.clientHeight > 0 &&
        (0 == n && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
      { right: r ? n : 0, bottom: t ? n : 0 }
    );
  }),
    (_o.prototype.setScrollLeft = function (e) {
      this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
        this.disableHoriz &&
          this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
    }),
    (_o.prototype.setScrollTop = function (e) {
      this.vert.scrollTop != e && (this.vert.scrollTop = e),
        this.disableVert &&
          this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
    }),
    (_o.prototype.zeroWidthHack = function () {
      var e = ro && !Zi ? "12px" : "18px";
      (this.horiz.style.height = this.vert.style.width = e),
        (this.horiz.style.pointerEvents = this.vert.style.pointerEvents =
          "none"),
        (this.disableHoriz = new ho()),
        (this.disableVert = new ho());
    }),
    (_o.prototype.enableZeroWidthBar = function (e, t, r) {
      function n() {
        var i = e.getBoundingClientRect();
        ("vert" == r
          ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2)
          : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) !=
        e
          ? (e.style.pointerEvents = "none")
          : t.set(1e3, n);
      }
      (e.style.pointerEvents = "auto"), t.set(1e3, n);
    }),
    (_o.prototype.clear = function () {
      var e = this.horiz.parentNode;
      e.removeChild(this.horiz), e.removeChild(this.vert);
    });
  var qo = function () {};
  (qo.prototype.update = function () {
    return { bottom: 0, right: 0 };
  }),
    (qo.prototype.setScrollLeft = function () {}),
    (qo.prototype.setScrollTop = function () {}),
    (qo.prototype.clear = function () {});
  var $o = { native: _o, null: qo },
    Zo = 0,
    Qo = function (e, t, r) {
      var n = e.display;
      (this.viewport = t),
        (this.visible = rr(n, e.doc, t)),
        (this.editorIsHidden = !n.wrapper.offsetWidth),
        (this.wrapperHeight = n.wrapper.clientHeight),
        (this.wrapperWidth = n.wrapper.clientWidth),
        (this.oldDisplayWidth = ft(e)),
        (this.force = r),
        (this.dims = Rt(e)),
        (this.events = []);
    };
  (Qo.prototype.signal = function (e, t) {
    me(e, t) && this.events.push(arguments);
  }),
    (Qo.prototype.finish = function () {
      for (var e = 0; e < this.events.length; e++)
        pe.apply(null, this.events[e]);
    });
  var Jo = 0,
    el = null;
  Ki ? (el = -0.53) : Bi ? (el = 15) : _i ? (el = -0.7) : $i && (el = -1 / 3);
  var tl = function (e, t) {
    (this.ranges = e), (this.primIndex = t);
  };
  (tl.prototype.primary = function () {
    return this.ranges[this.primIndex];
  }),
    (tl.prototype.equals = function (e) {
      if (e == this) return !0;
      if (
        e.primIndex != this.primIndex ||
        e.ranges.length != this.ranges.length
      )
        return !1;
      for (var t = 0; t < this.ranges.length; t++) {
        var r = this.ranges[t],
          n = e.ranges[t];
        if (!P(r.anchor, n.anchor) || !P(r.head, n.head)) return !1;
      }
      return !0;
    }),
    (tl.prototype.deepCopy = function () {
      for (var e = [], t = 0; t < this.ranges.length; t++)
        e[t] = new rl(E(this.ranges[t].anchor), E(this.ranges[t].head));
      return new tl(e, this.primIndex);
    }),
    (tl.prototype.somethingSelected = function () {
      for (var e = 0; e < this.ranges.length; e++)
        if (!this.ranges[e].empty()) return !0;
      return !1;
    }),
    (tl.prototype.contains = function (e, t) {
      t || (t = e);
      for (var r = 0; r < this.ranges.length; r++) {
        var n = this.ranges[r];
        if (F(t, n.from()) >= 0 && F(e, n.to()) <= 0) return r;
      }
      return -1;
    });
  var rl = function (e, t) {
    (this.anchor = e), (this.head = t);
  };
  (rl.prototype.from = function () {
    return I(this.anchor, this.head);
  }),
    (rl.prototype.to = function () {
      return z(this.anchor, this.head);
    }),
    (rl.prototype.empty = function () {
      return (
        this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
      );
    }),
    (zn.prototype = {
      chunkSize: function () {
        return this.lines.length;
      },
      removeInner: function (e, t) {
        for (var r = e, n = e + t; r < n; ++r) {
          var i = this.lines[r];
          (this.height -= i.height), Ue(i), $e(i, "delete");
        }
        this.lines.splice(e, t);
      },
      collapse: function (e) {
        e.push.apply(e, this.lines);
      },
      insertInner: function (e, t, r) {
        (this.height += r),
          (this.lines = this.lines
            .slice(0, e)
            .concat(t)
            .concat(this.lines.slice(e)));
        for (var n = 0; n < t.length; ++n) t[n].parent = this;
      },
      iterN: function (e, t, r) {
        for (var n = e + t; e < n; ++e) if (r(this.lines[e])) return !0;
      },
    }),
    (In.prototype = {
      chunkSize: function () {
        return this.size;
      },
      removeInner: function (e, t) {
        this.size -= t;
        for (var r = 0; r < this.children.length; ++r) {
          var n = this.children[r],
            i = n.chunkSize();
          if (e < i) {
            var o = Math.min(t, i - e),
              l = n.height;
            if (
              (n.removeInner(e, o),
              (this.height -= l - n.height),
              i == o && (this.children.splice(r--, 1), (n.parent = null)),
              0 == (t -= o))
            )
              break;
            e = 0;
          } else e -= i;
        }
        if (
          this.size - t < 25 &&
          (this.children.length > 1 || !(this.children[0] instanceof zn))
        ) {
          var s = [];
          this.collapse(s),
            (this.children = [new zn(s)]),
            (this.children[0].parent = this);
        }
      },
      collapse: function (e) {
        for (var t = 0; t < this.children.length; ++t)
          this.children[t].collapse(e);
      },
      insertInner: function (e, t, r) {
        (this.size += t.length), (this.height += r);
        for (var n = 0; n < this.children.length; ++n) {
          var i = this.children[n],
            o = i.chunkSize();
          if (e <= o) {
            if ((i.insertInner(e, t, r), i.lines && i.lines.length > 50)) {
              for (
                var l = (i.lines.length % 25) + 25, s = l;
                s < i.lines.length;

              ) {
                var a = new zn(i.lines.slice(s, (s += 25)));
                (i.height -= a.height),
                  this.children.splice(++n, 0, a),
                  (a.parent = this);
              }
              (i.lines = i.lines.slice(0, l)), this.maybeSpill();
            }
            break;
          }
          e -= o;
        }
      },
      maybeSpill: function () {
        if (!(this.children.length <= 10)) {
          var e = this;
          do {
            var t = new In(e.children.splice(e.children.length - 5, 5));
            if (e.parent) {
              (e.size -= t.size), (e.height -= t.height);
              var r = f(e.parent.children, e);
              e.parent.children.splice(r + 1, 0, t);
            } else {
              var n = new In(e.children);
              (n.parent = e), (e.children = [n, t]), (e = n);
            }
            t.parent = e.parent;
          } while (e.children.length > 10);
          e.parent.maybeSpill();
        }
      },
      iterN: function (e, t, r) {
        for (var n = 0; n < this.children.length; ++n) {
          var i = this.children[n],
            o = i.chunkSize();
          if (e < o) {
            var l = Math.min(t, o - e);
            if (i.iterN(e, l, r)) return !0;
            if (0 == (t -= l)) break;
            e = 0;
          } else e -= o;
        }
      },
    });
  var nl = function (e, t, r) {
    if (r) for (var n in r) r.hasOwnProperty(n) && (this[n] = r[n]);
    (this.doc = e), (this.node = t);
  };
  (nl.prototype.clear = function () {
    var e = this.doc.cm,
      t = this.line.widgets,
      r = this.line,
      n = O(r);
    if (null != n && t) {
      for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
      t.length || (r.widgets = null);
      var o = lt(this);
      N(r, Math.max(0, r.height - o)),
        e &&
          (wr(e, function () {
            Rn(e, r, -o), kr(e, n, "widget");
          }),
          $e(e, "lineWidgetCleared", e, this, n));
    }
  }),
    (nl.prototype.changed = function () {
      var e = this,
        t = this.height,
        r = this.doc.cm,
        n = this.line;
      this.height = null;
      var i = lt(this) - t;
      i &&
        (N(n, n.height + i),
        r &&
          wr(r, function () {
            (r.curOp.forceUpdate = !0),
              Rn(r, n, i),
              $e(r, "lineWidgetChanged", r, e, O(n));
          }));
    }),
    ye(nl);
  var il = 0,
    ol = function (e, t) {
      (this.lines = []), (this.type = t), (this.doc = e), (this.id = ++il);
    };
  (ol.prototype.clear = function () {
    if (!this.explicitlyCleared) {
      var e = this.doc.cm,
        t = e && !e.curOp;
      if ((t && yr(e), me(this, "clear"))) {
        var r = this.find();
        r && $e(this, "clear", r.from, r.to);
      }
      for (var n = null, i = null, o = 0; o < this.lines.length; ++o) {
        var l = this.lines[o],
          s = V(l.markedSpans, this);
        e && !this.collapsed
          ? kr(e, O(l), "text")
          : e && (null != s.to && (i = O(l)), null != s.from && (n = O(l))),
          (l.markedSpans = K(l.markedSpans, s)),
          null == s.from &&
            this.collapsed &&
            !oe(this.doc, l) &&
            e &&
            N(l, zt(e.display));
      }
      if (e && this.collapsed && !e.options.lineWrapping)
        for (var a = 0; a < this.lines.length; ++a) {
          var u = re(this.lines[a]),
            c = ae(u);
          c > e.display.maxLineLength &&
            ((e.display.maxLine = u),
            (e.display.maxLineLength = c),
            (e.display.maxLineChanged = !0));
        }
      null != n && e && this.collapsed && Lr(e, n, i + 1),
        (this.lines.length = 0),
        (this.explicitlyCleared = !0),
        this.atomic &&
          this.doc.cantEdit &&
          ((this.doc.cantEdit = !1), e && wn(e.doc)),
        e && $e(e, "markerCleared", e, this, n, i),
        t && br(e),
        this.parent && this.parent.clear();
    }
  }),
    (ol.prototype.find = function (e, t) {
      null == e && "bookmark" == this.type && (e = 1);
      for (var r, n, i = 0; i < this.lines.length; ++i) {
        var o = this.lines[i],
          l = V(o.markedSpans, this);
        if (null != l.from && ((r = H(t ? o : O(o), l.from)), -1 == e))
          return r;
        if (null != l.to && ((n = H(t ? o : O(o), l.to)), 1 == e)) return n;
      }
      return r && { from: r, to: n };
    }),
    (ol.prototype.changed = function () {
      var e = this,
        t = this.find(-1, !0),
        r = this,
        n = this.doc.cm;
      t &&
        n &&
        wr(n, function () {
          var i = t.line,
            o = O(t.line),
            l = vt(n, o);
          if (
            (l &&
              (xt(l), (n.curOp.selectionChanged = n.curOp.forceUpdate = !0)),
            (n.curOp.updateMaxLine = !0),
            !oe(r.doc, i) && null != r.height)
          ) {
            var s = r.height;
            r.height = null;
            var a = lt(r) - s;
            a && N(i, i.height + a);
          }
          $e(n, "markerChanged", n, e);
        });
    }),
    (ol.prototype.attachLine = function (e) {
      if (!this.lines.length && this.doc.cm) {
        var t = this.doc.cm.curOp;
        (t.maybeHiddenMarkers && -1 != f(t.maybeHiddenMarkers, this)) ||
          (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
      }
      this.lines.push(e);
    }),
    (ol.prototype.detachLine = function (e) {
      if (
        (this.lines.splice(f(this.lines, e), 1),
        !this.lines.length && this.doc.cm)
      ) {
        var t = this.doc.cm.curOp;
        (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
      }
    }),
    ye(ol);
  var ll = function (e, t) {
    (this.markers = e), (this.primary = t);
    for (var r = 0; r < e.length; ++r) e[r].parent = this;
  };
  (ll.prototype.clear = function () {
    if (!this.explicitlyCleared) {
      this.explicitlyCleared = !0;
      for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
      $e(this, "clear");
    }
  }),
    (ll.prototype.find = function (e, t) {
      return this.primary.find(e, t);
    }),
    ye(ll);
  var sl = 0,
    al = function (e, t, r, n, i) {
      if (!(this instanceof al)) return new al(e, t, r, n, i);
      null == r && (r = 0),
        In.call(this, [new zn([new Go("", null)])]),
        (this.first = r),
        (this.scrollTop = this.scrollLeft = 0),
        (this.cantEdit = !1),
        (this.cleanGeneration = 1),
        (this.modeFrontier = this.highlightFrontier = r);
      var o = H(r, 0);
      (this.sel = Ur(o)),
        (this.history = new en(null)),
        (this.id = ++sl),
        (this.modeOption = t),
        (this.lineSep = n),
        (this.direction = "rtl" == i ? "rtl" : "ltr"),
        (this.extend = !1),
        "string" == typeof e && (e = this.splitLines(e)),
        $r(this, { from: o, to: o, text: e }),
        mn(this, Ur(o), mo);
    };
  (al.prototype = y(In.prototype, {
    constructor: al,
    iter: function (e, t, r) {
      r
        ? this.iterN(e - this.first, t - e, r)
        : this.iterN(this.first, this.first + this.size, e);
    },
    insert: function (e, t) {
      for (var r = 0, n = 0; n < t.length; ++n) r += t[n].height;
      this.insertInner(e - this.first, t, r);
    },
    remove: function (e, t) {
      this.removeInner(e - this.first, t);
    },
    getValue: function (e) {
      var t = M(this, this.first, this.first + this.size);
      return !1 === e ? t : t.join(e || this.lineSeparator());
    },
    setValue: Sr(function (e) {
      var t = H(this.first, 0),
        r = this.first + this.size - 1;
      Mn(
        this,
        {
          from: t,
          to: H(r, k(this, r).text.length),
          text: this.splitLines(e),
          origin: "setValue",
          full: !0,
        },
        !0
      ),
        this.cm && ar(this.cm, 0, 0),
        mn(this, Ur(t), mo);
    }),
    replaceRange: function (e, t, r, n) {
      Dn(this, e, (t = B(this, t)), (r = r ? B(this, r) : t), n);
    },
    getRange: function (e, t, r) {
      var n = T(this, B(this, e), B(this, t));
      return !1 === r ? n : n.join(r || this.lineSeparator());
    },
    getLine: function (e) {
      var t = this.getLineHandle(e);
      return t && t.text;
    },
    getLineHandle: function (e) {
      if (W(this, e)) return k(this, e);
    },
    getLineNumber: function (e) {
      return O(e);
    },
    getLineHandleVisualStart: function (e) {
      return "number" == typeof e && (e = k(this, e)), re(e);
    },
    lineCount: function () {
      return this.size;
    },
    firstLine: function () {
      return this.first;
    },
    lastLine: function () {
      return this.first + this.size - 1;
    },
    clipPos: function (e) {
      return B(this, e);
    },
    getCursor: function (e) {
      var t = this.sel.primary();
      return null == e || "head" == e
        ? t.head
        : "anchor" == e
        ? t.anchor
        : "end" == e || "to" == e || !1 === e
        ? t.to()
        : t.from();
    },
    listSelections: function () {
      return this.sel.ranges;
    },
    somethingSelected: function () {
      return this.sel.somethingSelected();
    },
    setCursor: Sr(function (e, t, r) {
      gn(this, B(this, "number" == typeof e ? H(e, t || 0) : e), null, r);
    }),
    setSelection: Sr(function (e, t, r) {
      gn(this, B(this, e), B(this, t || e), r);
    }),
    extendSelection: Sr(function (e, t, r) {
      fn(this, B(this, e), t && B(this, t), r);
    }),
    extendSelections: Sr(function (e, t) {
      dn(this, G(this, e), t);
    }),
    extendSelectionsBy: Sr(function (e, t) {
      dn(this, G(this, v(this.sel.ranges, e)), t);
    }),
    setSelections: Sr(function (e, t, r) {
      if (e.length) {
        for (var n = [], i = 0; i < e.length; i++)
          n[i] = new rl(B(this, e[i].anchor), B(this, e[i].head));
        null == t && (t = Math.min(e.length - 1, this.sel.primIndex)),
          mn(this, Gr(n, t), r);
      }
    }),
    addSelection: Sr(function (e, t, r) {
      var n = this.sel.ranges.slice(0);
      n.push(new rl(B(this, e), B(this, t || e))),
        mn(this, Gr(n, n.length - 1), r);
    }),
    getSelection: function (e) {
      for (var t, r = this.sel.ranges, n = 0; n < r.length; n++) {
        var i = T(this, r[n].from(), r[n].to());
        t = t ? t.concat(i) : i;
      }
      return !1 === e ? t : t.join(e || this.lineSeparator());
    },
    getSelections: function (e) {
      for (var t = [], r = this.sel.ranges, n = 0; n < r.length; n++) {
        var i = T(this, r[n].from(), r[n].to());
        !1 !== e && (i = i.join(e || this.lineSeparator())), (t[n] = i);
      }
      return t;
    },
    replaceSelection: function (e, t, r) {
      for (var n = [], i = 0; i < this.sel.ranges.length; i++) n[i] = e;
      this.replaceSelections(n, t, r || "+input");
    },
    replaceSelections: Sr(function (e, t, r) {
      for (var n = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
        var l = i.ranges[o];
        n[o] = {
          from: l.from(),
          to: l.to(),
          text: this.splitLines(e[o]),
          origin: r,
        };
      }
      for (
        var s =
            t &&
            "end" != t &&
            (function (e, t, r) {
              for (
                var n = [], i = H(e.first, 0), o = i, l = 0;
                l < t.length;
                l++
              ) {
                var s = t[l],
                  a = Xr(s.from, i, o),
                  u = Xr(Vr(s), i, o);
                if (((i = s.to), (o = u), "around" == r)) {
                  var c = e.sel.ranges[l],
                    h = F(c.head, c.anchor) < 0;
                  n[l] = new rl(h ? u : a, h ? a : u);
                } else n[l] = new rl(a, a);
              }
              return new tl(n, e.sel.primIndex);
            })(this, n, t),
          a = n.length - 1;
        a >= 0;
        a--
      )
        Mn(this, n[a]);
      s ? vn(this, s) : this.cm && sr(this.cm);
    }),
    undo: Sr(function () {
      On(this, "undo");
    }),
    redo: Sr(function () {
      On(this, "redo");
    }),
    undoSelection: Sr(function () {
      On(this, "undo", !0);
    }),
    redoSelection: Sr(function () {
      On(this, "redo", !0);
    }),
    setExtending: function (e) {
      this.extend = e;
    },
    getExtending: function () {
      return this.extend;
    },
    historySize: function () {
      for (var e = this.history, t = 0, r = 0, n = 0; n < e.done.length; n++)
        e.done[n].ranges || ++t;
      for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++r;
      return { undo: t, redo: r };
    },
    clearHistory: function () {
      this.history = new en(this.history.maxGeneration);
    },
    markClean: function () {
      this.cleanGeneration = this.changeGeneration(!0);
    },
    changeGeneration: function (e) {
      return (
        e &&
          (this.history.lastOp =
            this.history.lastSelOp =
            this.history.lastOrigin =
              null),
        this.history.generation
      );
    },
    isClean: function (e) {
      return this.history.generation == (e || this.cleanGeneration);
    },
    getHistory: function () {
      return { done: cn(this.history.done), undone: cn(this.history.undone) };
    },
    setHistory: function (e) {
      var t = (this.history = new en(this.history.maxGeneration));
      (t.done = cn(e.done.slice(0), null, !0)),
        (t.undone = cn(e.undone.slice(0), null, !0));
    },
    setGutterMarker: Sr(function (e, t, r) {
      return En(this, e, "gutter", function (e) {
        var n = e.gutterMarkers || (e.gutterMarkers = {});
        return (n[t] = r), !r && x(n) && (e.gutterMarkers = null), !0;
      });
    }),
    clearGutter: Sr(function (e) {
      var t = this;
      this.iter(function (r) {
        r.gutterMarkers &&
          r.gutterMarkers[e] &&
          En(t, r, "gutter", function () {
            return (
              (r.gutterMarkers[e] = null),
              x(r.gutterMarkers) && (r.gutterMarkers = null),
              !0
            );
          });
      });
    }),
    lineInfo: function (e) {
      var t;
      if ("number" == typeof e) {
        if (!W(this, e)) return null;
        if (((t = e), !(e = k(this, e)))) return null;
      } else if (null == (t = O(e))) return null;
      return {
        line: t,
        handle: e,
        text: e.text,
        gutterMarkers: e.gutterMarkers,
        textClass: e.textClass,
        bgClass: e.bgClass,
        wrapClass: e.wrapClass,
        widgets: e.widgets,
      };
    },
    addLineClass: Sr(function (t, r, n) {
      return En(this, t, "gutter" == r ? "gutter" : "class", function (t) {
        var i =
          "text" == r
            ? "textClass"
            : "background" == r
            ? "bgClass"
            : "gutter" == r
            ? "gutterClass"
            : "wrapClass";
        if (t[i]) {
          if (e(n).test(t[i])) return !1;
          t[i] += " " + n;
        } else t[i] = n;
        return !0;
      });
    }),
    removeLineClass: Sr(function (t, r, n) {
      return En(this, t, "gutter" == r ? "gutter" : "class", function (t) {
        var i =
            "text" == r
              ? "textClass"
              : "background" == r
              ? "bgClass"
              : "gutter" == r
              ? "gutterClass"
              : "wrapClass",
          o = t[i];
        if (!o) return !1;
        if (null == n) t[i] = null;
        else {
          var l = o.match(e(n));
          if (!l) return !1;
          var s = l.index + l[0].length;
          t[i] =
            o.slice(0, l.index) +
              (l.index && s != o.length ? " " : "") +
              o.slice(s) || null;
        }
        return !0;
      });
    }),
    addLineWidget: Sr(function (e, t, r) {
      return (function (e, t, r, n) {
        var i = new nl(e, r, n),
          o = e.cm;
        return (
          o && i.noHScroll && (o.display.alignWidgets = !0),
          En(e, t, "widget", function (t) {
            var r = t.widgets || (t.widgets = []);
            if (
              (null == i.insertAt
                ? r.push(i)
                : r.splice(
                    Math.min(r.length - 1, Math.max(0, i.insertAt)),
                    0,
                    i
                  ),
              (i.line = t),
              o && !oe(e, t))
            ) {
              var n = se(t) < e.scrollTop;
              N(t, t.height + lt(i)),
                n && lr(o, i.height),
                (o.curOp.forceUpdate = !0);
            }
            return !0;
          }),
          $e(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : O(t)),
          i
        );
      })(this, e, t, r);
    }),
    removeLineWidget: function (e) {
      e.clear();
    },
    markText: function (e, t, r) {
      return Bn(this, B(this, e), B(this, t), r, (r && r.type) || "range");
    },
    setBookmark: function (e, t) {
      var r = {
        replacedWith: t && (null == t.nodeType ? t.widget : t),
        insertLeft: t && t.insertLeft,
        clearWhenEmpty: !1,
        shared: t && t.shared,
        handleMouseEvents: t && t.handleMouseEvents,
      };
      return (e = B(this, e)), Bn(this, e, e, r, "bookmark");
    },
    findMarksAt: function (e) {
      var t = [],
        r = k(this, (e = B(this, e)).line).markedSpans;
      if (r)
        for (var n = 0; n < r.length; ++n) {
          var i = r[n];
          (null == i.from || i.from <= e.ch) &&
            (null == i.to || i.to >= e.ch) &&
            t.push(i.marker.parent || i.marker);
        }
      return t;
    },
    findMarks: function (e, t, r) {
      (e = B(this, e)), (t = B(this, t));
      var n = [],
        i = e.line;
      return (
        this.iter(e.line, t.line + 1, function (o) {
          var l = o.markedSpans;
          if (l)
            for (var s = 0; s < l.length; s++) {
              var a = l[s];
              (null != a.to && i == e.line && e.ch >= a.to) ||
                (null == a.from && i != e.line) ||
                (null != a.from && i == t.line && a.from >= t.ch) ||
                (r && !r(a.marker)) ||
                n.push(a.marker.parent || a.marker);
            }
          ++i;
        }),
        n
      );
    },
    getAllMarks: function () {
      var e = [];
      return (
        this.iter(function (t) {
          var r = t.markedSpans;
          if (r)
            for (var n = 0; n < r.length; ++n)
              null != r[n].from && e.push(r[n].marker);
        }),
        e
      );
    },
    posFromIndex: function (e) {
      var t,
        r = this.first,
        n = this.lineSeparator().length;
      return (
        this.iter(function (i) {
          var o = i.text.length + n;
          if (o > e) return (t = e), !0;
          (e -= o), ++r;
        }),
        B(this, H(r, t))
      );
    },
    indexFromPos: function (e) {
      var t = (e = B(this, e)).ch;
      if (e.line < this.first || e.ch < 0) return 0;
      var r = this.lineSeparator().length;
      return (
        this.iter(this.first, e.line, function (e) {
          t += e.text.length + r;
        }),
        t
      );
    },
    copy: function (e) {
      var t = new al(
        M(this, this.first, this.first + this.size),
        this.modeOption,
        this.first,
        this.lineSep,
        this.direction
      );
      return (
        (t.scrollTop = this.scrollTop),
        (t.scrollLeft = this.scrollLeft),
        (t.sel = this.sel),
        (t.extend = !1),
        e &&
          ((t.history.undoDepth = this.history.undoDepth),
          t.setHistory(this.getHistory())),
        t
      );
    },
    linkedDoc: function (e) {
      e || (e = {});
      var t = this.first,
        r = this.first + this.size;
      null != e.from && e.from > t && (t = e.from),
        null != e.to && e.to < r && (r = e.to);
      var n = new al(
        M(this, t, r),
        e.mode || this.modeOption,
        t,
        this.lineSep,
        this.direction
      );
      return (
        e.sharedHist && (n.history = this.history),
        (this.linked || (this.linked = [])).push({
          doc: n,
          sharedHist: e.sharedHist,
        }),
        (n.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }]),
        (function (e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r],
              i = n.find(),
              o = e.clipPos(i.from),
              l = e.clipPos(i.to);
            if (F(o, l)) {
              var s = Bn(e, o, l, n.primary, n.primary.type);
              n.markers.push(s), (s.parent = n);
            }
          }
        })(n, Gn(this)),
        n
      );
    },
    unlinkDoc: function (e) {
      if ((e instanceof Li && (e = e.doc), this.linked))
        for (var t = 0; t < this.linked.length; ++t) {
          if (this.linked[t].doc == e) {
            this.linked.splice(t, 1), e.unlinkDoc(this), Un(Gn(this));
            break;
          }
        }
      if (e.history == this.history) {
        var r = [e.id];
        Zr(
          e,
          function (e) {
            return r.push(e.id);
          },
          !0
        ),
          (e.history = new en(null)),
          (e.history.done = cn(this.history.done, r)),
          (e.history.undone = cn(this.history.undone, r));
      }
    },
    iterLinkedDocs: function (e) {
      Zr(this, e);
    },
    getMode: function () {
      return this.mode;
    },
    getEditor: function () {
      return this.cm;
    },
    splitLines: function (e) {
      return this.lineSep ? e.split(this.lineSep) : Ao(e);
    },
    lineSeparator: function () {
      return this.lineSep || "\n";
    },
    setDirection: Sr(function (e) {
      "rtl" != e && (e = "ltr"),
        e != this.direction &&
          ((this.direction = e),
          this.iter(function (e) {
            return (e.order = null);
          }),
          this.cm &&
            (function (e) {
              wr(e, function () {
                Jr(e), Lr(e);
              });
            })(this.cm));
    }),
  })),
    (al.prototype.eachLine = al.prototype.iter);
  for (
    var ul = 0,
      cl = !1,
      hl = {
        3: "Enter",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        106: "*",
        107: "=",
        109: "-",
        110: ".",
        111: "/",
        127: "Delete",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert",
      },
      fl = 0;
    fl < 10;
    fl++
  )
    hl[fl + 48] = hl[fl + 96] = String(fl);
  for (var dl = 65; dl <= 90; dl++) hl[dl] = String.fromCharCode(dl);
  for (var pl = 1; pl <= 12; pl++) hl[pl + 111] = hl[pl + 63235] = "F" + pl;
  var gl = {};
  (gl.basic = {
    Left: "goCharLeft",
    Right: "goCharRight",
    Up: "goLineUp",
    Down: "goLineDown",
    End: "goLineEnd",
    Home: "goLineStartSmart",
    PageUp: "goPageUp",
    PageDown: "goPageDown",
    Delete: "delCharAfter",
    Backspace: "delCharBefore",
    "Shift-Backspace": "delCharBefore",
    Tab: "defaultTab",
    "Shift-Tab": "indentAuto",
    Enter: "newlineAndIndent",
    Insert: "toggleOverwrite",
    Esc: "singleSelection",
  }),
    (gl.pcDefault = {
      "Ctrl-A": "selectAll",
      "Ctrl-D": "deleteLine",
      "Ctrl-Z": "undo",
      "Shift-Ctrl-Z": "redo",
      "Ctrl-Y": "redo",
      "Ctrl-Home": "goDocStart",
      "Ctrl-End": "goDocEnd",
      "Ctrl-Up": "goLineUp",
      "Ctrl-Down": "goLineDown",
      "Ctrl-Left": "goGroupLeft",
      "Ctrl-Right": "goGroupRight",
      "Alt-Left": "goLineStart",
      "Alt-Right": "goLineEnd",
      "Ctrl-Backspace": "delGroupBefore",
      "Ctrl-Delete": "delGroupAfter",
      "Ctrl-S": "save",
      "Ctrl-F": "find",
      "Ctrl-G": "findNext",
      "Shift-Ctrl-G": "findPrev",
      "Shift-Ctrl-F": "replace",
      "Shift-Ctrl-R": "replaceAll",
      "Ctrl-[": "indentLess",
      "Ctrl-]": "indentMore",
      "Ctrl-U": "undoSelection",
      "Shift-Ctrl-U": "redoSelection",
      "Alt-U": "redoSelection",
      fallthrough: "basic",
    }),
    (gl.emacsy = {
      "Ctrl-F": "goCharRight",
      "Ctrl-B": "goCharLeft",
      "Ctrl-P": "goLineUp",
      "Ctrl-N": "goLineDown",
      "Alt-F": "goWordRight",
      "Alt-B": "goWordLeft",
      "Ctrl-A": "goLineStart",
      "Ctrl-E": "goLineEnd",
      "Ctrl-V": "goPageDown",
      "Shift-Ctrl-V": "goPageUp",
      "Ctrl-D": "delCharAfter",
      "Ctrl-H": "delCharBefore",
      "Alt-D": "delWordAfter",
      "Alt-Backspace": "delWordBefore",
      "Ctrl-K": "killLine",
      "Ctrl-T": "transposeChars",
      "Ctrl-O": "openLine",
    }),
    (gl.macDefault = {
      "Cmd-A": "selectAll",
      "Cmd-D": "deleteLine",
      "Cmd-Z": "undo",
      "Shift-Cmd-Z": "redo",
      "Cmd-Y": "redo",
      "Cmd-Home": "goDocStart",
      "Cmd-Up": "goDocStart",
      "Cmd-End": "goDocEnd",
      "Cmd-Down": "goDocEnd",
      "Alt-Left": "goGroupLeft",
      "Alt-Right": "goGroupRight",
      "Cmd-Left": "goLineLeft",
      "Cmd-Right": "goLineRight",
      "Alt-Backspace": "delGroupBefore",
      "Ctrl-Alt-Backspace": "delGroupAfter",
      "Alt-Delete": "delGroupAfter",
      "Cmd-S": "save",
      "Cmd-F": "find",
      "Cmd-G": "findNext",
      "Shift-Cmd-G": "findPrev",
      "Cmd-Alt-F": "replace",
      "Shift-Cmd-Alt-F": "replaceAll",
      "Cmd-[": "indentLess",
      "Cmd-]": "indentMore",
      "Cmd-Backspace": "delWrappedLineLeft",
      "Cmd-Delete": "delWrappedLineRight",
      "Cmd-U": "undoSelection",
      "Shift-Cmd-U": "redoSelection",
      "Ctrl-Up": "goDocStart",
      "Ctrl-Down": "goDocEnd",
      fallthrough: ["basic", "emacsy"],
    }),
    (gl.default = ro ? gl.macDefault : gl.pcDefault);
  var vl = {
      selectAll: kn,
      singleSelection: function (e) {
        return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), mo);
      },
      killLine: function (e) {
        return ti(e, function (t) {
          if (t.empty()) {
            var r = k(e.doc, t.head.line).text.length;
            return t.head.ch == r && t.head.line < e.lastLine()
              ? { from: t.head, to: H(t.head.line + 1, 0) }
              : { from: t.head, to: H(t.head.line, r) };
          }
          return { from: t.from(), to: t.to() };
        });
      },
      deleteLine: function (e) {
        return ti(e, function (t) {
          return {
            from: H(t.from().line, 0),
            to: B(e.doc, H(t.to().line + 1, 0)),
          };
        });
      },
      delLineLeft: function (e) {
        return ti(e, function (e) {
          return { from: H(e.from().line, 0), to: e.from() };
        });
      },
      delWrappedLineLeft: function (e) {
        return ti(e, function (t) {
          var r = e.charCoords(t.head, "div").top + 5;
          return {
            from: e.coordsChar({ left: 0, top: r }, "div"),
            to: t.from(),
          };
        });
      },
      delWrappedLineRight: function (e) {
        return ti(e, function (t) {
          var r = e.charCoords(t.head, "div").top + 5,
            n = e.coordsChar(
              { left: e.display.lineDiv.offsetWidth + 100, top: r },
              "div"
            );
          return { from: t.from(), to: n };
        });
      },
      undo: function (e) {
        return e.undo();
      },
      redo: function (e) {
        return e.redo();
      },
      undoSelection: function (e) {
        return e.undoSelection();
      },
      redoSelection: function (e) {
        return e.redoSelection();
      },
      goDocStart: function (e) {
        return e.extendSelection(H(e.firstLine(), 0));
      },
      goDocEnd: function (e) {
        return e.extendSelection(H(e.lastLine()));
      },
      goLineStart: function (e) {
        return e.extendSelectionsBy(
          function (t) {
            return oi(e, t.head.line);
          },
          { origin: "+move", bias: 1 }
        );
      },
      goLineStartSmart: function (e) {
        return e.extendSelectionsBy(
          function (t) {
            return si(e, t.head);
          },
          { origin: "+move", bias: 1 }
        );
      },
      goLineEnd: function (e) {
        return e.extendSelectionsBy(
          function (t) {
            return li(e, t.head.line);
          },
          { origin: "+move", bias: -1 }
        );
      },
      goLineRight: function (e) {
        return e.extendSelectionsBy(function (t) {
          var r = e.cursorCoords(t.head, "div").top + 5;
          return e.coordsChar(
            { left: e.display.lineDiv.offsetWidth + 100, top: r },
            "div"
          );
        }, bo);
      },
      goLineLeft: function (e) {
        return e.extendSelectionsBy(function (t) {
          var r = e.cursorCoords(t.head, "div").top + 5;
          return e.coordsChar({ left: 0, top: r }, "div");
        }, bo);
      },
      goLineLeftSmart: function (e) {
        return e.extendSelectionsBy(function (t) {
          var r = e.cursorCoords(t.head, "div").top + 5,
            n = e.coordsChar({ left: 0, top: r }, "div");
          return n.ch < e.getLine(n.line).search(/\S/) ? si(e, t.head) : n;
        }, bo);
      },
      goLineUp: function (e) {
        return e.moveV(-1, "line");
      },
      goLineDown: function (e) {
        return e.moveV(1, "line");
      },
      goPageUp: function (e) {
        return e.moveV(-1, "page");
      },
      goPageDown: function (e) {
        return e.moveV(1, "page");
      },
      goCharLeft: function (e) {
        return e.moveH(-1, "char");
      },
      goCharRight: function (e) {
        return e.moveH(1, "char");
      },
      goColumnLeft: function (e) {
        return e.moveH(-1, "column");
      },
      goColumnRight: function (e) {
        return e.moveH(1, "column");
      },
      goWordLeft: function (e) {
        return e.moveH(-1, "word");
      },
      goGroupRight: function (e) {
        return e.moveH(1, "group");
      },
      goGroupLeft: function (e) {
        return e.moveH(-1, "group");
      },
      goWordRight: function (e) {
        return e.moveH(1, "word");
      },
      delCharBefore: function (e) {
        return e.deleteH(-1, "char");
      },
      delCharAfter: function (e) {
        return e.deleteH(1, "char");
      },
      delWordBefore: function (e) {
        return e.deleteH(-1, "word");
      },
      delWordAfter: function (e) {
        return e.deleteH(1, "word");
      },
      delGroupBefore: function (e) {
        return e.deleteH(-1, "group");
      },
      delGroupAfter: function (e) {
        return e.deleteH(1, "group");
      },
      indentAuto: function (e) {
        return e.indentSelection("smart");
      },
      indentMore: function (e) {
        return e.indentSelection("add");
      },
      indentLess: function (e) {
        return e.indentSelection("subtract");
      },
      insertTab: function (e) {
        return e.replaceSelection("\t");
      },
      insertSoftTab: function (e) {
        for (
          var t = [], r = e.listSelections(), n = e.options.tabSize, i = 0;
          i < r.length;
          i++
        ) {
          var o = r[i].from(),
            l = h(e.getLine(o.line), o.ch, n);
          t.push(p(n - (l % n)));
        }
        e.replaceSelections(t);
      },
      defaultTab: function (e) {
        e.somethingSelected()
          ? e.indentSelection("add")
          : e.execCommand("insertTab");
      },
      transposeChars: function (e) {
        return wr(e, function () {
          for (var t = e.listSelections(), r = [], n = 0; n < t.length; n++)
            if (t[n].empty()) {
              var i = t[n].head,
                o = k(e.doc, i.line).text;
              if (o)
                if (
                  (i.ch == o.length && (i = new H(i.line, i.ch - 1)), i.ch > 0)
                )
                  (i = new H(i.line, i.ch + 1)),
                    e.replaceRange(
                      o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
                      H(i.line, i.ch - 2),
                      i,
                      "+transpose"
                    );
                else if (i.line > e.doc.first) {
                  var l = k(e.doc, i.line - 1).text;
                  l &&
                    ((i = new H(i.line, 1)),
                    e.replaceRange(
                      o.charAt(0) +
                        e.doc.lineSeparator() +
                        l.charAt(l.length - 1),
                      H(i.line - 1, l.length - 1),
                      i,
                      "+transpose"
                    ));
                }
              r.push(new rl(i, i));
            }
          e.setSelections(r);
        });
      },
      newlineAndIndent: function (e) {
        return wr(e, function () {
          for (var t = e.listSelections(), r = t.length - 1; r >= 0; r--)
            e.replaceRange(
              e.doc.lineSeparator(),
              t[r].anchor,
              t[r].head,
              "+input"
            );
          t = e.listSelections();
          for (var n = 0; n < t.length; n++)
            e.indentLine(t[n].from().line, null, !0);
          sr(e);
        });
      },
      openLine: function (e) {
        return e.replaceSelection("\n", "start");
      },
      toggleOverwrite: function (e) {
        return e.toggleOverwrite();
      },
    },
    ml = new ho(),
    yl = null,
    bl = function (e, t, r) {
      (this.time = e), (this.pos = t), (this.button = r);
    };
  bl.prototype.compare = function (e, t, r) {
    return this.time + 400 > e && 0 == F(t, this.pos) && r == this.button;
  };
  var wl,
    xl,
    Cl = {
      toString: function () {
        return "CodeMirror.Init";
      },
    },
    Sl = {},
    Ll = {};
  (Li.defaults = Sl), (Li.optionHandlers = Ll);
  var kl = [];
  Li.defineInitHook = function (e) {
    return kl.push(e);
  };
  var Tl = null,
    Ml = function (e) {
      (this.cm = e),
        (this.lastAnchorNode =
          this.lastAnchorOffset =
          this.lastFocusNode =
          this.lastFocusOffset =
            null),
        (this.polling = new ho()),
        (this.composing = null),
        (this.gracePeriod = !1),
        (this.readDOMTimeout = null);
    };
  (Ml.prototype.init = function (e) {
    function t(e) {
      if (!ge(i, e)) {
        if (i.somethingSelected())
          Ti({ lineWise: !1, text: i.getSelections() }),
            "cut" == e.type && i.replaceSelection("", null, "cut");
        else {
          if (!i.options.lineWiseCopyCut) return;
          var t = Ai(i);
          Ti({ lineWise: !0, text: t.text }),
            "cut" == e.type &&
              i.operation(function () {
                i.setSelections(t.ranges, 0, mo),
                  i.replaceSelection("", null, "cut");
              });
        }
        if (e.clipboardData) {
          e.clipboardData.clearData();
          var r = Tl.text.join("\n");
          if (
            (e.clipboardData.setData("Text", r),
            e.clipboardData.getData("Text") == r)
          )
            return void e.preventDefault();
        }
        var l = Di(),
          s = l.firstChild;
        i.display.lineSpace.insertBefore(l, i.display.lineSpace.firstChild),
          (s.value = Tl.text.join("\n"));
        var a = document.activeElement;
        co(s),
          setTimeout(function () {
            i.display.lineSpace.removeChild(l),
              a.focus(),
              a == o && n.showPrimarySelection();
          }, 50);
      }
    }
    var r = this,
      n = this,
      i = n.cm,
      o = (n.div = e.lineDiv);
    Wi(o, i.options.spellcheck),
      No(o, "paste", function (e) {
        ge(i, e) ||
          Ni(e, i) ||
          (ji <= 11 &&
            setTimeout(
              xr(i, function () {
                return r.updateFromDOM();
              }),
              20
            ));
      }),
      No(o, "compositionstart", function (e) {
        r.composing = { data: e.data, done: !1 };
      }),
      No(o, "compositionupdate", function (e) {
        r.composing || (r.composing = { data: e.data, done: !1 });
      }),
      No(o, "compositionend", function (e) {
        r.composing &&
          (e.data != r.composing.data && r.readFromDOMSoon(),
          (r.composing.done = !0));
      }),
      No(o, "touchstart", function () {
        return n.forceCompositionEnd();
      }),
      No(o, "input", function () {
        r.composing || r.readFromDOMSoon();
      }),
      No(o, "copy", t),
      No(o, "cut", t);
  }),
    (Ml.prototype.prepareSelection = function () {
      var e = Xt(this.cm, !1);
      return (e.focus = this.cm.state.focused), e;
    }),
    (Ml.prototype.showSelection = function (e, t) {
      e &&
        this.cm.display.view.length &&
        ((e.focus || t) && this.showPrimarySelection(),
        this.showMultipleSelections(e));
    }),
    (Ml.prototype.showPrimarySelection = function () {
      var e = window.getSelection(),
        t = this.cm,
        r = t.doc.sel.primary(),
        n = r.from(),
        i = r.to();
      if (
        t.display.viewTo == t.display.viewFrom ||
        n.line >= t.display.viewTo ||
        i.line < t.display.viewFrom
      )
        e.removeAllRanges();
      else {
        var o = zi(t, e.anchorNode, e.anchorOffset),
          l = zi(t, e.focusNode, e.focusOffset);
        if (
          !o ||
          o.bad ||
          !l ||
          l.bad ||
          0 != F(I(o, l), n) ||
          0 != F(z(o, l), i)
        ) {
          var s = t.display.view,
            a = (n.line >= t.display.viewFrom && Pi(t, n)) || {
              node: s[0].measure.map[2],
              offset: 0,
            },
            u = i.line < t.display.viewTo && Pi(t, i);
          if (!u) {
            var c = s[s.length - 1].measure,
              h = c.maps ? c.maps[c.maps.length - 1] : c.map;
            u = {
              node: h[h.length - 1],
              offset: h[h.length - 2] - h[h.length - 3],
            };
          }
          if (a && u) {
            var f,
              d = e.rangeCount && e.getRangeAt(0);
            try {
              f = lo(a.node, a.offset, u.offset, u.node);
            } catch (e) {}
            f &&
              (!Bi && t.state.focused
                ? (e.collapse(a.node, a.offset),
                  f.collapsed || (e.removeAllRanges(), e.addRange(f)))
                : (e.removeAllRanges(), e.addRange(f)),
              d && null == e.anchorNode
                ? e.addRange(d)
                : Bi && this.startGracePeriod()),
              this.rememberSelection();
          } else e.removeAllRanges();
        }
      }
    }),
    (Ml.prototype.startGracePeriod = function () {
      var e = this;
      clearTimeout(this.gracePeriod),
        (this.gracePeriod = setTimeout(function () {
          (e.gracePeriod = !1),
            e.selectionChanged() &&
              e.cm.operation(function () {
                return (e.cm.curOp.selectionChanged = !0);
              });
        }, 20));
    }),
    (Ml.prototype.showMultipleSelections = function (e) {
      r(this.cm.display.cursorDiv, e.cursors),
        r(this.cm.display.selectionDiv, e.selection);
    }),
    (Ml.prototype.rememberSelection = function () {
      var e = window.getSelection();
      (this.lastAnchorNode = e.anchorNode),
        (this.lastAnchorOffset = e.anchorOffset),
        (this.lastFocusNode = e.focusNode),
        (this.lastFocusOffset = e.focusOffset);
    }),
    (Ml.prototype.selectionInEditor = function () {
      var e = window.getSelection();
      if (!e.rangeCount) return !1;
      var t = e.getRangeAt(0).commonAncestorContainer;
      return o(this.div, t);
    }),
    (Ml.prototype.focus = function () {
      "nocursor" != this.cm.options.readOnly &&
        (this.selectionInEditor() ||
          this.showSelection(this.prepareSelection(), !0),
        this.div.focus());
    }),
    (Ml.prototype.blur = function () {
      this.div.blur();
    }),
    (Ml.prototype.getField = function () {
      return this.div;
    }),
    (Ml.prototype.supportsTouch = function () {
      return !0;
    }),
    (Ml.prototype.receivedFocus = function () {
      function e() {
        t.cm.state.focused &&
          (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, e));
      }
      var t = this;
      this.selectionInEditor()
        ? this.pollSelection()
        : wr(this.cm, function () {
            return (t.cm.curOp.selectionChanged = !0);
          }),
        this.polling.set(this.cm.options.pollInterval, e);
    }),
    (Ml.prototype.selectionChanged = function () {
      var e = window.getSelection();
      return (
        e.anchorNode != this.lastAnchorNode ||
        e.anchorOffset != this.lastAnchorOffset ||
        e.focusNode != this.lastFocusNode ||
        e.focusOffset != this.lastFocusOffset
      );
    }),
    (Ml.prototype.pollSelection = function () {
      if (
        null == this.readDOMTimeout &&
        !this.gracePeriod &&
        this.selectionChanged()
      ) {
        var e = window.getSelection(),
          t = this.cm;
        if (
          eo &&
          _i &&
          this.cm.options.gutters.length &&
          (function (e) {
            for (var t = e; t; t = t.parentNode)
              if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
            return !1;
          })(e.anchorNode)
        )
          return (
            this.cm.triggerOnKeyDown({
              type: "keydown",
              keyCode: 8,
              preventDefault: Math.abs,
            }),
            this.blur(),
            void this.focus()
          );
        if (!this.composing) {
          this.rememberSelection();
          var r = zi(t, e.anchorNode, e.anchorOffset),
            n = zi(t, e.focusNode, e.focusOffset);
          r &&
            n &&
            wr(t, function () {
              mn(t.doc, Ur(r, n), mo),
                (r.bad || n.bad) && (t.curOp.selectionChanged = !0);
            });
        }
      }
    }),
    (Ml.prototype.pollContent = function () {
      null != this.readDOMTimeout &&
        (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
      var e = this.cm,
        t = e.display,
        r = e.doc.sel.primary(),
        n = r.from(),
        i = r.to();
      if (
        (0 == n.ch &&
          n.line > e.firstLine() &&
          (n = H(n.line - 1, k(e.doc, n.line - 1).length)),
        i.ch == k(e.doc, i.line).text.length &&
          i.line < e.lastLine() &&
          (i = H(i.line + 1, 0)),
        n.line < t.viewFrom || i.line > t.viewTo - 1)
      )
        return !1;
      var o, l, s;
      n.line == t.viewFrom || 0 == (o = Kt(e, n.line))
        ? ((l = O(t.view[0].line)), (s = t.view[0].node))
        : ((l = O(t.view[o].line)), (s = t.view[o - 1].node.nextSibling));
      var a,
        u,
        c = Kt(e, i.line);
      if (
        (c == t.view.length - 1
          ? ((a = t.viewTo - 1), (u = t.lineDiv.lastChild))
          : ((a = O(t.view[c + 1].line) - 1),
            (u = t.view[c + 1].node.previousSibling)),
        !s)
      )
        return !1;
      for (
        var h = e.doc.splitLines(
            (function (e, t, r, n, i) {
              function o() {
                u && ((a += c), (u = !1));
              }
              function l(e) {
                e && (o(), (a += e));
              }
              function s(t) {
                if (1 == t.nodeType) {
                  var r = t.getAttribute("cm-text");
                  if (null != r)
                    return void l(r || t.textContent.replace(/\u200b/g, ""));
                  var a,
                    h = t.getAttribute("cm-marker");
                  if (h) {
                    var f = e.findMarks(
                      H(n, 0),
                      H(i + 1, 0),
                      (function (e) {
                        return function (t) {
                          return t.id == e;
                        };
                      })(+h)
                    );
                    return void (
                      f.length &&
                      (a = f[0].find(0)) &&
                      l(T(e.doc, a.from, a.to).join(c))
                    );
                  }
                  if ("false" == t.getAttribute("contenteditable")) return;
                  var d = /^(pre|div|p)$/i.test(t.nodeName);
                  d && o();
                  for (var p = 0; p < t.childNodes.length; p++)
                    s(t.childNodes[p]);
                  d && (u = !0);
                } else 3 == t.nodeType && l(t.nodeValue);
              }
              for (
                var a = "", u = !1, c = e.doc.lineSeparator();
                s(t), t != r;

              )
                t = t.nextSibling;
              return a;
            })(e, s, u, l, a)
          ),
          f = T(e.doc, H(l, 0), H(a, k(e.doc, a).text.length));
        h.length > 1 && f.length > 1;

      )
        if (g(h) == g(f)) h.pop(), f.pop(), a--;
        else {
          if (h[0] != f[0]) break;
          h.shift(), f.shift(), l++;
        }
      for (
        var d = 0, p = 0, v = h[0], m = f[0], y = Math.min(v.length, m.length);
        d < y && v.charCodeAt(d) == m.charCodeAt(d);

      )
        ++d;
      for (
        var b = g(h),
          w = g(f),
          x = Math.min(
            b.length - (1 == h.length ? d : 0),
            w.length - (1 == f.length ? d : 0)
          );
        p < x &&
        b.charCodeAt(b.length - p - 1) == w.charCodeAt(w.length - p - 1);

      )
        ++p;
      if (1 == h.length && 1 == f.length && l == n.line)
        for (
          ;
          d &&
          d > n.ch &&
          b.charCodeAt(b.length - p - 1) == w.charCodeAt(w.length - p - 1);

        )
          d--, p++;
      (h[h.length - 1] = b.slice(0, b.length - p).replace(/^\u200b+/, "")),
        (h[0] = h[0].slice(d).replace(/\u200b+$/, ""));
      var C = H(l, d),
        S = H(a, f.length ? g(f).length - p : 0);
      return h.length > 1 || h[0] || F(C, S)
        ? (Dn(e.doc, h, C, S, "+input"), !0)
        : void 0;
    }),
    (Ml.prototype.ensurePolled = function () {
      this.forceCompositionEnd();
    }),
    (Ml.prototype.reset = function () {
      this.forceCompositionEnd();
    }),
    (Ml.prototype.forceCompositionEnd = function () {
      this.composing &&
        (clearTimeout(this.readDOMTimeout),
        (this.composing = null),
        this.updateFromDOM(),
        this.div.blur(),
        this.div.focus());
    }),
    (Ml.prototype.readFromDOMSoon = function () {
      var e = this;
      null == this.readDOMTimeout &&
        (this.readDOMTimeout = setTimeout(function () {
          if (((e.readDOMTimeout = null), e.composing)) {
            if (!e.composing.done) return;
            e.composing = null;
          }
          e.updateFromDOM();
        }, 80));
    }),
    (Ml.prototype.updateFromDOM = function () {
      var e = this;
      (!this.cm.isReadOnly() && this.pollContent()) ||
        wr(this.cm, function () {
          return Lr(e.cm);
        });
    }),
    (Ml.prototype.setUneditable = function (e) {
      e.contentEditable = "false";
    }),
    (Ml.prototype.onKeyPress = function (e) {
      0 != e.charCode &&
        (e.preventDefault(),
        this.cm.isReadOnly() ||
          xr(this.cm, Mi)(
            this.cm,
            String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode),
            0
          ));
    }),
    (Ml.prototype.readOnlyChanged = function (e) {
      this.div.contentEditable = String("nocursor" != e);
    }),
    (Ml.prototype.onContextMenu = function () {}),
    (Ml.prototype.resetPosition = function () {}),
    (Ml.prototype.needsContentAttribute = !0);
  var Nl = function (e) {
    (this.cm = e),
      (this.prevInput = ""),
      (this.pollingFast = !1),
      (this.polling = new ho()),
      (this.hasSelection = !1),
      (this.composing = null);
  };
  (Nl.prototype.init = function (e) {
    function t(e) {
      if (!ge(i, e)) {
        if (i.somethingSelected())
          Ti({ lineWise: !1, text: i.getSelections() });
        else {
          if (!i.options.lineWiseCopyCut) return;
          var t = Ai(i);
          Ti({ lineWise: !0, text: t.text }),
            "cut" == e.type
              ? i.setSelections(t.ranges, null, mo)
              : ((n.prevInput = ""), (l.value = t.text.join("\n")), co(l));
        }
        "cut" == e.type && (i.state.cutIncoming = !0);
      }
    }
    var r = this,
      n = this,
      i = this.cm,
      o = (this.wrapper = Di()),
      l = (this.textarea = o.firstChild);
    e.wrapper.insertBefore(o, e.wrapper.firstChild),
      Ji && (l.style.width = "0px"),
      No(l, "input", function () {
        Ki && ji >= 9 && r.hasSelection && (r.hasSelection = null), n.poll();
      }),
      No(l, "paste", function (e) {
        ge(i, e) || Ni(e, i) || ((i.state.pasteIncoming = !0), n.fastPoll());
      }),
      No(l, "cut", t),
      No(l, "copy", t),
      No(e.scroller, "paste", function (t) {
        st(e, t) || ge(i, t) || ((i.state.pasteIncoming = !0), n.focus());
      }),
      No(e.lineSpace, "selectstart", function (t) {
        st(e, t) || be(t);
      }),
      No(l, "compositionstart", function () {
        var e = i.getCursor("from");
        n.composing && n.composing.range.clear(),
          (n.composing = {
            start: e,
            range: i.markText(e, i.getCursor("to"), {
              className: "CodeMirror-composing",
            }),
          });
      }),
      No(l, "compositionend", function () {
        n.composing &&
          (n.poll(), n.composing.range.clear(), (n.composing = null));
      });
  }),
    (Nl.prototype.prepareSelection = function () {
      var e = this.cm,
        t = e.display,
        r = e.doc,
        n = Xt(e);
      if (e.options.moveInputWithCursor) {
        var i = At(e, r.sel.primary().head, "div"),
          o = t.wrapper.getBoundingClientRect(),
          l = t.lineDiv.getBoundingClientRect();
        (n.teTop = Math.max(
          0,
          Math.min(t.wrapper.clientHeight - 10, i.top + l.top - o.top)
        )),
          (n.teLeft = Math.max(
            0,
            Math.min(t.wrapper.clientWidth - 10, i.left + l.left - o.left)
          ));
      }
      return n;
    }),
    (Nl.prototype.showSelection = function (e) {
      var t = this.cm.display;
      r(t.cursorDiv, e.cursors),
        r(t.selectionDiv, e.selection),
        null != e.teTop &&
          ((this.wrapper.style.top = e.teTop + "px"),
          (this.wrapper.style.left = e.teLeft + "px"));
    }),
    (Nl.prototype.reset = function (e) {
      if (!this.contextMenuPending && !this.composing) {
        var t = this.cm;
        if (t.somethingSelected()) {
          this.prevInput = "";
          var r = t.getSelection();
          (this.textarea.value = r),
            t.state.focused && co(this.textarea),
            Ki && ji >= 9 && (this.hasSelection = r);
        } else
          e ||
            ((this.prevInput = this.textarea.value = ""),
            Ki && ji >= 9 && (this.hasSelection = null));
      }
    }),
    (Nl.prototype.getField = function () {
      return this.textarea;
    }),
    (Nl.prototype.supportsTouch = function () {
      return !1;
    }),
    (Nl.prototype.focus = function () {
      if (
        "nocursor" != this.cm.options.readOnly &&
        (!to || l() != this.textarea)
      )
        try {
          this.textarea.focus();
        } catch (e) {}
    }),
    (Nl.prototype.blur = function () {
      this.textarea.blur();
    }),
    (Nl.prototype.resetPosition = function () {
      this.wrapper.style.top = this.wrapper.style.left = 0;
    }),
    (Nl.prototype.receivedFocus = function () {
      this.slowPoll();
    }),
    (Nl.prototype.slowPoll = function () {
      var e = this;
      this.pollingFast ||
        this.polling.set(this.cm.options.pollInterval, function () {
          e.poll(), e.cm.state.focused && e.slowPoll();
        });
    }),
    (Nl.prototype.fastPoll = function () {
      function e() {
        r.poll() || t
          ? ((r.pollingFast = !1), r.slowPoll())
          : ((t = !0), r.polling.set(60, e));
      }
      var t = !1,
        r = this;
      (r.pollingFast = !0), r.polling.set(20, e);
    }),
    (Nl.prototype.poll = function () {
      var e = this,
        t = this.cm,
        r = this.textarea,
        n = this.prevInput;
      if (
        this.contextMenuPending ||
        !t.state.focused ||
        (Wo(r) && !n && !this.composing) ||
        t.isReadOnly() ||
        t.options.disableInput ||
        t.state.keySeq
      )
        return !1;
      var i = r.value;
      if (i == n && !t.somethingSelected()) return !1;
      if (
        (Ki && ji >= 9 && this.hasSelection === i) ||
        (ro && /[\uf700-\uf7ff]/.test(i))
      )
        return t.display.input.reset(), !1;
      if (t.doc.sel == t.display.selForContextMenu) {
        var o = i.charCodeAt(0);
        if ((8203 != o || n || (n = "​"), 8666 == o))
          return this.reset(), this.cm.execCommand("undo");
      }
      for (
        var l = 0, s = Math.min(n.length, i.length);
        l < s && n.charCodeAt(l) == i.charCodeAt(l);

      )
        ++l;
      return (
        wr(t, function () {
          Mi(
            t,
            i.slice(l),
            n.length - l,
            null,
            e.composing ? "*compose" : null
          ),
            i.length > 1e3 || i.indexOf("\n") > -1
              ? (r.value = e.prevInput = "")
              : (e.prevInput = i),
            e.composing &&
              (e.composing.range.clear(),
              (e.composing.range = t.markText(
                e.composing.start,
                t.getCursor("to"),
                { className: "CodeMirror-composing" }
              )));
        }),
        !0
      );
    }),
    (Nl.prototype.ensurePolled = function () {
      this.pollingFast && this.poll() && (this.pollingFast = !1);
    }),
    (Nl.prototype.onKeyPress = function () {
      Ki && ji >= 9 && (this.hasSelection = null), this.fastPoll();
    }),
    (Nl.prototype.onContextMenu = function (e) {
      function t() {
        if (null != l.selectionStart) {
          var e = i.somethingSelected(),
            t = "​" + (e ? l.value : "");
          (l.value = "⇚"),
            (l.value = t),
            (n.prevInput = e ? "" : "​"),
            (l.selectionStart = 1),
            (l.selectionEnd = t.length),
            (o.selForContextMenu = i.doc.sel);
        }
      }
      function r() {
        if (
          ((n.contextMenuPending = !1),
          (n.wrapper.style.cssText = c),
          (l.style.cssText = u),
          Ki && ji < 9 && o.scrollbars.setScrollTop((o.scroller.scrollTop = a)),
          null != l.selectionStart)
        ) {
          (!Ki || (Ki && ji < 9)) && t();
          var e = 0,
            r = function () {
              o.selForContextMenu == i.doc.sel &&
              0 == l.selectionStart &&
              l.selectionEnd > 0 &&
              "​" == n.prevInput
                ? xr(i, kn)(i)
                : e++ < 10
                ? (o.detectingSelectAll = setTimeout(r, 500))
                : ((o.selForContextMenu = null), o.input.reset());
            };
          o.detectingSelectAll = setTimeout(r, 200);
        }
      }
      var n = this,
        i = n.cm,
        o = i.display,
        l = n.textarea,
        s = Vt(i, e),
        a = o.scroller.scrollTop;
      if (s && !qi) {
        i.options.resetSelectionOnContextMenu &&
          -1 == i.doc.sel.contains(s) &&
          xr(i, mn)(i.doc, Ur(s), mo);
        var u = l.style.cssText,
          c = n.wrapper.style.cssText;
        n.wrapper.style.cssText = "position: absolute";
        var h = n.wrapper.getBoundingClientRect();
        l.style.cssText =
          "position: absolute; width: 30px; height: 30px;\n      top: " +
          (e.clientY - h.top - 5) +
          "px; left: " +
          (e.clientX - h.left - 5) +
          "px;\n      z-index: 1000; background: " +
          (Ki ? "rgba(255, 255, 255, .05)" : "transparent") +
          ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
        var f;
        if (
          (Xi && (f = window.scrollY),
          o.input.focus(),
          Xi && window.scrollTo(null, f),
          o.input.reset(),
          i.somethingSelected() || (l.value = n.prevInput = " "),
          (n.contextMenuPending = !0),
          (o.selForContextMenu = i.doc.sel),
          clearTimeout(o.detectingSelectAll),
          Ki && ji >= 9 && t(),
          ao)
        ) {
          Ce(e);
          var d = function () {
            de(window, "mouseup", d), setTimeout(r, 20);
          };
          No(window, "mouseup", d);
        } else setTimeout(r, 50);
      }
    }),
    (Nl.prototype.readOnlyChanged = function (e) {
      e || this.reset(), (this.textarea.disabled = "nocursor" == e);
    }),
    (Nl.prototype.setUneditable = function () {}),
    (Nl.prototype.needsContentAttribute = !1),
    (function (e) {
      function t(t, n, i, o) {
        (e.defaults[t] = n),
          i &&
            (r[t] = o
              ? function (e, t, r) {
                  r != Cl && i(e, t, r);
                }
              : i);
      }
      var r = e.optionHandlers;
      (e.defineOption = t),
        (e.Init = Cl),
        t(
          "value",
          "",
          function (e, t) {
            return e.setValue(t);
          },
          !0
        ),
        t(
          "mode",
          null,
          function (e, t) {
            (e.doc.modeOption = t), Yr(e);
          },
          !0
        ),
        t("indentUnit", 2, Yr, !0),
        t("indentWithTabs", !1),
        t("smartIndent", !0),
        t(
          "tabSize",
          4,
          function (e) {
            _r(e), St(e), Lr(e);
          },
          !0
        ),
        t("lineSeparator", null, function (e, t) {
          if (((e.doc.lineSep = t), t)) {
            var r = [],
              n = e.doc.first;
            e.doc.iter(function (e) {
              for (var i = 0; ; ) {
                var o = e.text.indexOf(t, i);
                if (-1 == o) break;
                (i = o + t.length), r.push(H(n, o));
              }
              n++;
            });
            for (var i = r.length - 1; i >= 0; i--)
              Dn(e.doc, t, r[i], H(r[i].line, r[i].ch + t.length));
          }
        }),
        t(
          "specialChars",
          /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,
          function (e, t, r) {
            (e.state.specialChars = new RegExp(
              t.source + (t.test("\t") ? "" : "|\t"),
              "g"
            )),
              r != Cl && e.refresh();
          }
        ),
        t(
          "specialCharPlaceholder",
          je,
          function (e) {
            return e.refresh();
          },
          !0
        ),
        t("electricChars", !0),
        t(
          "inputStyle",
          to ? "contenteditable" : "textarea",
          function () {
            throw new Error(
              "inputStyle can not (yet) be changed in a running editor"
            );
          },
          !0
        ),
        t(
          "spellcheck",
          !1,
          function (e, t) {
            return (e.getInputField().spellcheck = t);
          },
          !0
        ),
        t("rtlMoveVisually", !io),
        t("wholeLineUpdateBefore", !0),
        t(
          "theme",
          "default",
          function (e) {
            wi(e), xi(e);
          },
          !0
        ),
        t("keyMap", "default", function (e, t, r) {
          var n = ei(t),
            i = r != Cl && ei(r);
          i && i.detach && i.detach(e, n), n.attach && n.attach(e, i || null);
        }),
        t("extraKeys", null),
        t("configureMouse", null),
        t("lineWrapping", !1, Si, !0),
        t(
          "gutters",
          [],
          function (e) {
            zr(e.options), xi(e);
          },
          !0
        ),
        t(
          "fixedGutter",
          !0,
          function (e, t) {
            (e.display.gutters.style.left = t ? Bt(e.display) + "px" : "0"),
              e.refresh();
          },
          !0
        ),
        t(
          "coverGutterNextToScrollbar",
          !1,
          function (e) {
            return gr(e);
          },
          !0
        ),
        t(
          "scrollbarStyle",
          "native",
          function (e) {
            mr(e),
              gr(e),
              e.display.scrollbars.setScrollTop(e.doc.scrollTop),
              e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
          },
          !0
        ),
        t(
          "lineNumbers",
          !1,
          function (e) {
            zr(e.options), xi(e);
          },
          !0
        ),
        t("firstLineNumber", 1, xi, !0),
        t(
          "lineNumberFormatter",
          function (e) {
            return e;
          },
          xi,
          !0
        ),
        t("showCursorWhenSelecting", !1, jt, !0),
        t("resetSelectionOnContextMenu", !0),
        t("lineWiseCopyCut", !0),
        t("pasteLinesPerSelection", !0),
        t("readOnly", !1, function (e, t) {
          "nocursor" == t && (Jt(e), e.display.input.blur()),
            e.display.input.readOnlyChanged(t);
        }),
        t(
          "disableInput",
          !1,
          function (e, t) {
            t || e.display.input.reset();
          },
          !0
        ),
        t("dragDrop", !0, Ci),
        t("allowDropFileTypes", null),
        t("cursorBlinkRate", 530),
        t("cursorScrollMargin", 0),
        t("cursorHeight", 1, jt, !0),
        t("singleCursorHeightPerLine", !0, jt, !0),
        t("workTime", 100),
        t("workDelay", 100),
        t("flattenSpans", !0, _r, !0),
        t("addModeClass", !1, _r, !0),
        t("pollInterval", 100),
        t("undoDepth", 200, function (e, t) {
          return (e.doc.history.undoDepth = t);
        }),
        t("historyEventDelay", 1250),
        t(
          "viewportMargin",
          10,
          function (e) {
            return e.refresh();
          },
          !0
        ),
        t("maxHighlightLength", 1e4, _r, !0),
        t("moveInputWithCursor", !0, function (e, t) {
          t || e.display.input.resetPosition();
        }),
        t("tabindex", null, function (e, t) {
          return (e.display.input.getField().tabIndex = t || "");
        }),
        t("autofocus", null),
        t(
          "direction",
          "ltr",
          function (e, t) {
            return e.doc.setDirection(t);
          },
          !0
        );
    })(Li),
    (function (e) {
      var t = e.optionHandlers,
        r = (e.helpers = {});
      (e.prototype = {
        constructor: e,
        focus: function () {
          window.focus(), this.display.input.focus();
        },
        setOption: function (e, r) {
          var n = this.options,
            i = n[e];
          (n[e] == r && "mode" != e) ||
            ((n[e] = r),
            t.hasOwnProperty(e) && xr(this, t[e])(this, r, i),
            pe(this, "optionChange", this, e));
        },
        getOption: function (e) {
          return this.options[e];
        },
        getDoc: function () {
          return this.doc;
        },
        addKeyMap: function (e, t) {
          this.state.keyMaps[t ? "push" : "unshift"](ei(e));
        },
        removeKeyMap: function (e) {
          for (var t = this.state.keyMaps, r = 0; r < t.length; ++r)
            if (t[r] == e || t[r].name == e) return t.splice(r, 1), !0;
        },
        addOverlay: Cr(function (t, r) {
          var n = t.token ? t : e.getMode(this.options, t);
          if (n.startState) throw new Error("Overlays may not be stateful.");
          !(function (e, t, r) {
            for (var n = 0, i = r(t); n < e.length && r(e[n]) <= i; ) n++;
            e.splice(n, 0, t);
          })(
            this.state.overlays,
            {
              mode: n,
              modeSpec: t,
              opaque: r && r.opaque,
              priority: (r && r.priority) || 0,
            },
            function (e) {
              return e.priority;
            }
          ),
            this.state.modeGen++,
            Lr(this);
        }),
        removeOverlay: Cr(function (e) {
          for (var t = this.state.overlays, r = 0; r < t.length; ++r) {
            var n = t[r].modeSpec;
            if (n == e || ("string" == typeof e && n.name == e))
              return t.splice(r, 1), this.state.modeGen++, void Lr(this);
          }
        }),
        indentLine: Cr(function (e, t, r) {
          "string" != typeof t &&
            "number" != typeof t &&
            (t =
              null == t
                ? this.options.smartIndent
                  ? "smart"
                  : "prev"
                : t
                ? "add"
                : "subtract"),
            W(this.doc, e) && ki(this, e, t, r);
        }),
        indentSelection: Cr(function (e) {
          for (var t = this.doc.sel.ranges, r = -1, n = 0; n < t.length; n++) {
            var i = t[n];
            if (i.empty())
              i.head.line > r &&
                (ki(this, i.head.line, e, !0),
                (r = i.head.line),
                n == this.doc.sel.primIndex && sr(this));
            else {
              var o = i.from(),
                l = i.to(),
                s = Math.max(r, o.line);
              r = Math.min(this.lastLine(), l.line - (l.ch ? 0 : 1)) + 1;
              for (var a = s; a < r; ++a) ki(this, a, e);
              var u = this.doc.sel.ranges;
              0 == o.ch &&
                t.length == u.length &&
                u[n].from().ch > 0 &&
                pn(this.doc, n, new rl(o, u[n].to()), mo);
            }
          }
        }),
        getTokenAt: function (e, t) {
          return Re(this, e, t);
        },
        getLineTokens: function (e, t) {
          return Re(this, H(e), t, !0);
        },
        getTokenTypeAt: function (e) {
          e = B(this.doc, e);
          var t,
            r = Fe(this, k(this.doc, e.line)),
            n = 0,
            i = (r.length - 1) / 2,
            o = e.ch;
          if (0 == o) t = r[2];
          else
            for (;;) {
              var l = (n + i) >> 1;
              if ((l ? r[2 * l - 1] : 0) >= o) i = l;
              else {
                if (!(r[2 * l + 1] < o)) {
                  t = r[2 * l + 2];
                  break;
                }
                n = l + 1;
              }
            }
          var s = t ? t.indexOf("overlay ") : -1;
          return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1);
        },
        getModeAt: function (t) {
          var r = this.doc.mode;
          return r.innerMode
            ? e.innerMode(r, this.getTokenAt(t).state).mode
            : r;
        },
        getHelper: function (e, t) {
          return this.getHelpers(e, t)[0];
        },
        getHelpers: function (e, t) {
          var n = [];
          if (!r.hasOwnProperty(t)) return n;
          var i = r[t],
            o = this.getModeAt(e);
          if ("string" == typeof o[t]) i[o[t]] && n.push(i[o[t]]);
          else if (o[t])
            for (var l = 0; l < o[t].length; l++) {
              var s = i[o[t][l]];
              s && n.push(s);
            }
          else
            o.helperType && i[o.helperType]
              ? n.push(i[o.helperType])
              : i[o.name] && n.push(i[o.name]);
          for (var a = 0; a < i._global.length; a++) {
            var u = i._global[a];
            u.pred(o, this) && -1 == f(n, u.val) && n.push(u.val);
          }
          return n;
        },
        getStateAfter: function (e, t) {
          var r = this.doc;
          return (
            (e = R(r, null == e ? r.first + r.size - 1 : e)),
            Pe(this, e + 1, t).state
          );
        },
        cursorCoords: function (e, t) {
          var r,
            n = this.doc.sel.primary();
          return (
            (r =
              null == e
                ? n.head
                : "object" == typeof e
                ? B(this.doc, e)
                : e
                ? n.from()
                : n.to()),
            At(this, r, t || "page")
          );
        },
        charCoords: function (e, t) {
          return Ot(this, B(this.doc, e), t || "page");
        },
        coordsChar: function (e, t) {
          return (e = Nt(this, e, t || "page")), Ht(this, e.left, e.top);
        },
        lineAtHeight: function (e, t) {
          return (
            (e = Nt(this, { top: e, left: 0 }, t || "page").top),
            A(this.doc, e + this.display.viewOffset)
          );
        },
        heightAtLine: function (e, t, r) {
          var n,
            i = !1;
          if ("number" == typeof e) {
            var o = this.doc.first + this.doc.size - 1;
            e < this.doc.first
              ? (e = this.doc.first)
              : e > o && ((e = o), (i = !0)),
              (n = k(this.doc, e));
          } else n = e;
          return (
            Mt(this, n, { top: 0, left: 0 }, t || "page", r || i).top +
            (i ? this.doc.height - se(n) : 0)
          );
        },
        defaultTextHeight: function () {
          return zt(this.display);
        },
        defaultCharWidth: function () {
          return It(this.display);
        },
        getViewport: function () {
          return { from: this.display.viewFrom, to: this.display.viewTo };
        },
        addWidget: function (e, t, r, n, i) {
          var o = this.display,
            l = (e = At(this, B(this.doc, e))).bottom,
            s = e.left;
          if (
            ((t.style.position = "absolute"),
            t.setAttribute("cm-ignore-events", "true"),
            this.display.input.setUneditable(t),
            o.sizer.appendChild(t),
            "over" == n)
          )
            l = e.top;
          else if ("above" == n || "near" == n) {
            var a = Math.max(o.wrapper.clientHeight, this.doc.height),
              u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
            ("above" == n || e.bottom + t.offsetHeight > a) &&
            e.top > t.offsetHeight
              ? (l = e.top - t.offsetHeight)
              : e.bottom + t.offsetHeight <= a && (l = e.bottom),
              s + t.offsetWidth > u && (s = u - t.offsetWidth);
          }
          (t.style.top = l + "px"),
            (t.style.left = t.style.right = ""),
            "right" == i
              ? ((s = o.sizer.clientWidth - t.offsetWidth),
                (t.style.right = "0px"))
              : ("left" == i
                  ? (s = 0)
                  : "middle" == i &&
                    (s = (o.sizer.clientWidth - t.offsetWidth) / 2),
                (t.style.left = s + "px")),
            r &&
              (function (e, t) {
                var r = or(e, t);
                null != r.scrollTop && hr(e, r.scrollTop),
                  null != r.scrollLeft && dr(e, r.scrollLeft);
              })(this, {
                left: s,
                top: l,
                right: s + t.offsetWidth,
                bottom: l + t.offsetHeight,
              });
        },
        triggerOnKeyDown: Cr(fi),
        triggerOnKeyPress: Cr(pi),
        triggerOnKeyUp: di,
        triggerOnMouseDown: Cr(gi),
        execCommand: function (e) {
          if (vl.hasOwnProperty(e)) return vl[e].call(null, this);
        },
        triggerElectric: Cr(function (e) {
          Oi(this, e);
        }),
        findPosH: function (e, t, r, n) {
          var i = 1;
          t < 0 && ((i = -1), (t = -t));
          for (
            var o = B(this.doc, e), l = 0;
            l < t && !(o = Hi(this.doc, o, i, r, n)).hitSide;
            ++l
          );
          return o;
        },
        moveH: Cr(function (e, t) {
          var r = this;
          this.extendSelectionsBy(function (n) {
            return r.display.shift || r.doc.extend || n.empty()
              ? Hi(r.doc, n.head, e, t, r.options.rtlMoveVisually)
              : e < 0
              ? n.from()
              : n.to();
          }, bo);
        }),
        deleteH: Cr(function (e, t) {
          var r = this.doc.sel,
            n = this.doc;
          r.somethingSelected()
            ? n.replaceSelection("", null, "+delete")
            : ti(this, function (r) {
                var i = Hi(n, r.head, e, t, !1);
                return e < 0
                  ? { from: i, to: r.head }
                  : { from: r.head, to: i };
              });
        }),
        findPosV: function (e, t, r, n) {
          var i = 1,
            o = n;
          t < 0 && ((i = -1), (t = -t));
          for (var l = B(this.doc, e), s = 0; s < t; ++s) {
            var a = At(this, l, "div");
            if (
              (null == o ? (o = a.left) : (a.left = o),
              (l = Fi(this, a, i, r)).hitSide)
            )
              break;
          }
          return l;
        },
        moveV: Cr(function (e, t) {
          var r = this,
            n = this.doc,
            i = [],
            o = !this.display.shift && !n.extend && n.sel.somethingSelected();
          if (
            (n.extendSelectionsBy(function (l) {
              if (o) return e < 0 ? l.from() : l.to();
              var s = At(r, l.head, "div");
              null != l.goalColumn && (s.left = l.goalColumn), i.push(s.left);
              var a = Fi(r, s, e, t);
              return (
                "page" == t &&
                  l == n.sel.primary() &&
                  lr(r, Ot(r, a, "div").top - s.top),
                a
              );
            }, bo),
            i.length)
          )
            for (var l = 0; l < n.sel.ranges.length; l++)
              n.sel.ranges[l].goalColumn = i[l];
        }),
        findWordAt: function (e) {
          var t = k(this.doc, e.line).text,
            r = e.ch,
            n = e.ch;
          if (t) {
            var i = this.getHelper(e, "wordChars");
            ("before" != e.sticky && n != t.length) || !r ? ++n : --r;
            for (
              var o = t.charAt(r),
                l = w(o, i)
                  ? function (e) {
                      return w(e, i);
                    }
                  : /\s/.test(o)
                  ? function (e) {
                      return /\s/.test(e);
                    }
                  : function (e) {
                      return !/\s/.test(e) && !w(e);
                    };
              r > 0 && l(t.charAt(r - 1));

            )
              --r;
            for (; n < t.length && l(t.charAt(n)); ) ++n;
          }
          return new rl(H(e.line, r), H(e.line, n));
        },
        toggleOverwrite: function (e) {
          (null != e && e == this.state.overwrite) ||
            ((this.state.overwrite = !this.state.overwrite)
              ? s(this.display.cursorDiv, "CodeMirror-overwrite")
              : uo(this.display.cursorDiv, "CodeMirror-overwrite"),
            pe(this, "overwriteToggle", this, this.state.overwrite));
        },
        hasFocus: function () {
          return this.display.input.getField() == l();
        },
        isReadOnly: function () {
          return !(!this.options.readOnly && !this.doc.cantEdit);
        },
        scrollTo: Cr(function (e, t) {
          ar(this, e, t);
        }),
        getScrollInfo: function () {
          var e = this.display.scroller;
          return {
            left: e.scrollLeft,
            top: e.scrollTop,
            height: e.scrollHeight - ht(this) - this.display.barHeight,
            width: e.scrollWidth - ht(this) - this.display.barWidth,
            clientHeight: dt(this),
            clientWidth: ft(this),
          };
        },
        scrollIntoView: Cr(function (e, t) {
          null == e
            ? ((e = { from: this.doc.sel.primary().head, to: null }),
              null == t && (t = this.options.cursorScrollMargin))
            : "number" == typeof e
            ? (e = { from: H(e, 0), to: null })
            : null == e.from && (e = { from: e, to: null }),
            e.to || (e.to = e.from),
            (e.margin = t || 0),
            null != e.from.line
              ? (function (e, t) {
                  ur(e), (e.curOp.scrollToPos = t);
                })(this, e)
              : cr(this, e.from, e.to, e.margin);
        }),
        setSize: Cr(function (e, t) {
          var r = this,
            n = function (e) {
              return "number" == typeof e || /^\d+$/.test(String(e))
                ? e + "px"
                : e;
            };
          null != e && (this.display.wrapper.style.width = n(e)),
            null != t && (this.display.wrapper.style.height = n(t)),
            this.options.lineWrapping && Ct(this);
          var i = this.display.viewFrom;
          this.doc.iter(i, this.display.viewTo, function (e) {
            if (e.widgets)
              for (var t = 0; t < e.widgets.length; t++)
                if (e.widgets[t].noHScroll) {
                  kr(r, i, "widget");
                  break;
                }
            ++i;
          }),
            (this.curOp.forceUpdate = !0),
            pe(this, "refresh", this);
        }),
        operation: function (e) {
          return wr(this, e);
        },
        startOperation: function () {
          return yr(this);
        },
        endOperation: function () {
          return br(this);
        },
        refresh: Cr(function () {
          var e = this.display.cachedTextHeight;
          Lr(this),
            (this.curOp.forceUpdate = !0),
            St(this),
            ar(this, this.doc.scrollLeft, this.doc.scrollTop),
            Fr(this),
            (null == e || Math.abs(e - zt(this.display)) > 0.5) && Ut(this),
            pe(this, "refresh", this);
        }),
        swapDoc: Cr(function (e) {
          var t = this.doc;
          return (
            (t.cm = null),
            Qr(this, e),
            St(this),
            this.display.input.reset(),
            ar(this, e.scrollLeft, e.scrollTop),
            (this.curOp.forceScroll = !0),
            $e(this, "swapDoc", this, t),
            t
          );
        }),
        getInputField: function () {
          return this.display.input.getField();
        },
        getWrapperElement: function () {
          return this.display.wrapper;
        },
        getScrollerElement: function () {
          return this.display.scroller;
        },
        getGutterElement: function () {
          return this.display.gutters;
        },
      }),
        ye(e),
        (e.registerHelper = function (t, n, i) {
          r.hasOwnProperty(t) || (r[t] = e[t] = { _global: [] }), (r[t][n] = i);
        }),
        (e.registerGlobalHelper = function (t, n, i, o) {
          e.registerHelper(t, n, o), r[t]._global.push({ pred: i, val: o });
        });
    })(Li);
  var Ol = "iter insert remove copy getEditor constructor".split(" ");
  for (var Al in al.prototype)
    al.prototype.hasOwnProperty(Al) &&
      f(Ol, Al) < 0 &&
      (Li.prototype[Al] = (function (e) {
        return function () {
          return e.apply(this.doc, arguments);
        };
      })(al.prototype[Al]));
  return (
    ye(al),
    (Li.inputStyles = { textarea: Nl, contenteditable: Ml }),
    (Li.defineMode = function (e) {
      Li.defaults.mode || "null" == e || (Li.defaults.mode = e),
        function (e, t) {
          arguments.length > 2 &&
            (t.dependencies = Array.prototype.slice.call(arguments, 2)),
            (Fo[e] = t);
        }.apply(this, arguments);
    }),
    (Li.defineMIME = function (e, t) {
      Po[e] = t;
    }),
    Li.defineMode("null", function () {
      return {
        token: function (e) {
          return e.skipToEnd();
        },
      };
    }),
    Li.defineMIME("text/plain", "null"),
    (Li.defineExtension = function (e, t) {
      Li.prototype[e] = t;
    }),
    (Li.defineDocExtension = function (e, t) {
      al.prototype[e] = t;
    }),
    (Li.fromTextArea = function (e, t) {
      function r() {
        e.value = a.getValue();
      }
      if (
        ((t = t ? c(t) : {}),
        (t.value = e.value),
        !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
        !t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
        null == t.autofocus)
      ) {
        var n = l();
        t.autofocus =
          n == e || (null != e.getAttribute("autofocus") && n == document.body);
      }
      var i;
      if (e.form && (No(e.form, "submit", r), !t.leaveSubmitMethodAlone)) {
        var o = e.form;
        i = o.submit;
        try {
          var s = (o.submit = function () {
            r(), (o.submit = i), o.submit(), (o.submit = s);
          });
        } catch (e) {}
      }
      (t.finishInit = function (t) {
        (t.save = r),
          (t.getTextArea = function () {
            return e;
          }),
          (t.toTextArea = function () {
            (t.toTextArea = isNaN),
              r(),
              e.parentNode.removeChild(t.getWrapperElement()),
              (e.style.display = ""),
              e.form &&
                (de(e.form, "submit", r),
                "function" == typeof e.form.submit && (e.form.submit = i));
          });
      }),
        (e.style.display = "none");
      var a = Li(function (t) {
        return e.parentNode.insertBefore(t, e.nextSibling);
      }, t);
      return a;
    }),
    (function (e) {
      (e.off = de),
        (e.on = No),
        (e.wheelEventPixels = Rr),
        (e.Doc = al),
        (e.splitLines = Ao),
        (e.countColumn = h),
        (e.findColumn = d),
        (e.isWordChar = b),
        (e.Pass = vo),
        (e.signal = pe),
        (e.Line = Go),
        (e.changeEnd = Vr),
        (e.scrollbarModel = $o),
        (e.Pos = H),
        (e.cmpPos = F),
        (e.modes = Fo),
        (e.mimeModes = Po),
        (e.resolveMode = Me),
        (e.getMode = Ne),
        (e.modeExtensions = Eo),
        (e.extendMode = Oe),
        (e.copyState = Ae),
        (e.startState = De),
        (e.innerMode = We),
        (e.commands = vl),
        (e.keyMap = gl),
        (e.keyName = Jn),
        (e.isModifierKey = Zn),
        (e.lookupKey = $n),
        (e.normalizeKeyMap = qn),
        (e.StringStream = zo),
        (e.SharedTextMarker = ll),
        (e.TextMarker = ol),
        (e.LineWidget = nl),
        (e.e_preventDefault = be),
        (e.e_stopPropagation = we),
        (e.e_stop = Ce),
        (e.addClass = s),
        (e.contains = o),
        (e.rmClass = uo),
        (e.keyNames = hl);
    })(Li),
    (Li.version = "5.32.0"),
    Li
  );
});
