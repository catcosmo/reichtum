console.info('Dev by http://kevinchassagne.com');
! function(t) {
    function e(n) { if (i[n]) return i[n].exports; var s = i[n] = { exports: {}, id: n, loaded: !1 }; return t[n].call(s.exports, s, s.exports, e), s.loaded = !0, s.exports } var i = {}; return e.m = t, e.c = i, e.p = "", e(0) }([function(t, e, i) {
    (function(t) { "use strict";

        function e(t) { return t && t.__esModule ? t : { default: t } }
        i(2), i(3); var n = i(4),
            s = (e(n), i(5)),
            r = (e(s), i(6)),
            o = (e(r), i(7)),
            a = e(o);
        window.app = {}, t(function() { window.app = new a.default, window.app.init(),
                function t() { window.app.update(), window.requestAnimationFrame(t) }() }) }).call(e, i(1)) }, function(t, e) { var i = t.exports = function() {
        function t(t) { return null == t ? String(t) : q[U.call(t)] || "object" }

        function e(e) { return "function" == t(e) }

        function i(t) { return null != t && t == t.window }

        function n(t) { return null != t && t.nodeType == t.DOCUMENT_NODE }

        function s(e) { return "object" == t(e) }

        function r(t) { return s(t) && !i(t) && Object.getPrototypeOf(t) == Object.prototype }

        function o(t) { return "number" == typeof t.length }

        function a(t) { return $.call(t, function(t) { return null != t }) }

        function l(t) { return t.length > 0 ? k.fn.concat.apply([], t) : t }

        function h(t) { return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase() }

        function u(t) { return t in j ? j[t] : j[t] = new RegExp("(^|\\s)" + t + "(\\s|$)") }

        function c(t, e) { return "number" != typeof e || A[h(t)] ? e : e + "px" }

        function d(t) { var e, i; return I[t] || (e = E.createElement(t), E.body.appendChild(e), i = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == i && (i = "block"), I[t] = i), I[t] }

        function f(t) { return "children" in t ? C.call(t.children) : k.map(t.childNodes, function(t) { if (1 == t.nodeType) return t }) }

        function p(t, e, i) { for (x in e) i && (r(e[x]) || G(e[x])) ? (r(e[x]) && !r(t[x]) && (t[x] = {}), G(e[x]) && !G(t[x]) && (t[x] = []), p(t[x], e[x], i)) : e[x] !== w && (t[x] = e[x]) }

        function y(t, e) { return null == e ? k(t) : k(t).filter(e) }

        function g(t, i, n, s) { return e(i) ? i.call(t, n, s) : i }

        function v(t, e, i) { null == i ? t.removeAttribute(e) : t.setAttribute(e, i) }

        function m(t, e) { var i = t.className || "",
                n = i && i.baseVal !== w; return e === w ? n ? i.baseVal : i : void(n ? i.baseVal = e : t.className = e) }

        function b(t) { try { return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? k.parseJSON(t) : t) : t } catch (e) { return t } }

        function _(t, e) { e(t); for (var i = 0, n = t.childNodes.length; i < n; i++) _(t.childNodes[i], e) } var w, x, k, S, O, P, T = [],
            C = T.slice,
            $ = T.filter,
            E = window.document,
            I = {},
            j = {},
            A = { "column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1 },
            L = /^\s*<(\w+|!)[^>]*>/,
            M = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            R = /^(?:body|html)$/i,
            z = /([A-Z])/g,
            F = ["val", "css", "html", "text", "data", "width", "height", "offset"],
            V = ["after", "prepend", "before", "append"],
            H = E.createElement("table"),
            N = E.createElement("tr"),
            D = { tr: E.createElement("tbody"), tbody: H, thead: H, tfoot: H, td: N, th: N, "*": E.createElement("div") },
            B = /complete|loaded|interactive/,
            X = /^[\w-]*$/,
            q = {},
            U = q.toString,
            W = {},
            Q = E.createElement("div"),
            Z = { tabindex: "tabIndex", readonly: "readOnly", for: "htmlFor", class: "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
            G = Array.isArray || function(t) { return t instanceof Array }; return W.matches = function(t, e) { if (!e || !t || 1 !== t.nodeType) return !1; var i = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector; if (i) return i.call(t, e); var n, s = t.parentNode,
                r = !s; return r && (s = Q).appendChild(t), n = ~W.qsa(s, e).indexOf(t), r && Q.removeChild(t), n }, O = function(t) { return t.replace(/-+(.)?/g, function(t, e) { return e ? e.toUpperCase() : "" }) }, P = function(t) { return $.call(t, function(e, i) { return t.indexOf(e) == i }) }, W.fragment = function(t, e, i) { var n, s, o; return M.test(t) && (n = k(E.createElement(RegExp.$1))), n || (t.replace && (t = t.replace(Y, "<$1></$2>")), e === w && (e = L.test(t) && RegExp.$1), e in D || (e = "*"), o = D[e], o.innerHTML = "" + t, n = k.each(C.call(o.childNodes), function() { o.removeChild(this) })), r(i) && (s = k(n), k.each(i, function(t, e) { F.indexOf(t) > -1 ? s[t](e) : s.attr(t, e) })), n }, W.Z = function(t, e) { return t = t || [], t.__proto__ = k.fn, t.selector = e || "", t }, W.isZ = function(t) { return t instanceof W.Z }, W.init = function(t, i) { var n; if (!t) return W.Z(); if ("string" == typeof t)
                if (t = t.trim(), "<" == t[0] && L.test(t)) n = W.fragment(t, RegExp.$1, i), t = null;
                else { if (i !== w) return k(i).find(t);
                    n = W.qsa(E, t) }
            else { if (e(t)) return k(E).ready(t); if (W.isZ(t)) return t; if (G(t)) n = a(t);
                else if (s(t)) n = [t], t = null;
                else if (L.test(t)) n = W.fragment(t.trim(), RegExp.$1, i), t = null;
                else { if (i !== w) return k(i).find(t);
                    n = W.qsa(E, t) } } return W.Z(n, t) }, k = function(t, e) { return W.init(t, e) }, k.extend = function(t) { var e, i = C.call(arguments, 1); return "boolean" == typeof t && (e = t, t = i.shift()), i.forEach(function(i) { p(t, i, e) }), t }, W.qsa = function(t, e) { var i, s = "#" == e[0],
                r = !s && "." == e[0],
                o = s || r ? e.slice(1) : e,
                a = X.test(o); return n(t) && a && s ? (i = t.getElementById(o)) ? [i] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : C.call(a && !s ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e)) }, k.contains = E.documentElement.contains ? function(t, e) { return t !== e && t.contains(e) } : function(t, e) { for (; e && (e = e.parentNode);)
                if (e === t) return !0;
            return !1 }, k.type = t, k.isFunction = e, k.isWindow = i, k.isArray = G, k.isPlainObject = r, k.isEmptyObject = function(t) { var e; for (e in t) return !1; return !0 }, k.inArray = function(t, e, i) { return T.indexOf.call(e, t, i) }, k.camelCase = O, k.trim = function(t) { return null == t ? "" : String.prototype.trim.call(t) }, k.uuid = 0, k.support = {}, k.expr = {}, k.map = function(t, e) { var i, n, s, r = []; if (o(t))
                for (n = 0; n < t.length; n++) i = e(t[n], n), null != i && r.push(i);
            else
                for (s in t) i = e(t[s], s), null != i && r.push(i); return l(r) }, k.each = function(t, e) { var i, n; if (o(t)) { for (i = 0; i < t.length; i++)
                    if (e.call(t[i], i, t[i]) === !1) return t } else
                for (n in t)
                    if (e.call(t[n], n, t[n]) === !1) return t; return t }, k.grep = function(t, e) { return $.call(t, e) }, window.JSON && (k.parseJSON = JSON.parse), k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) { q["[object " + e + "]"] = e.toLowerCase() }), k.fn = { forEach: T.forEach, reduce: T.reduce, push: T.push, sort: T.sort, indexOf: T.indexOf, concat: T.concat, map: function(t) { return k(k.map(this, function(e, i) { return t.call(e, i, e) })) }, slice: function() { return k(C.apply(this, arguments)) }, ready: function(t) { return B.test(E.readyState) && E.body ? t(k) : E.addEventListener("DOMContentLoaded", function() { t(k) }, !1), this }, get: function(t) { return t === w ? C.call(this) : this[t >= 0 ? t : t + this.length] }, toArray: function() { return this.get() }, size: function() { return this.length }, remove: function() { return this.each(function() { null != this.parentNode && this.parentNode.removeChild(this) }) }, each: function(t) { return T.every.call(this, function(e, i) { return t.call(e, i, e) !== !1 }), this }, filter: function(t) { return e(t) ? this.not(this.not(t)) : k($.call(this, function(e) { return W.matches(e, t) })) }, add: function(t, e) { return k(P(this.concat(k(t, e)))) }, is: function(t) { return this.length > 0 && W.matches(this[0], t) }, not: function(t) { var i = []; if (e(t) && t.call !== w) this.each(function(e) { t.call(this, e) || i.push(this) });
                else { var n = "string" == typeof t ? this.filter(t) : o(t) && e(t.item) ? C.call(t) : k(t);
                    this.forEach(function(t) { n.indexOf(t) < 0 && i.push(t) }) } return k(i) }, has: function(t) { return this.filter(function() { return s(t) ? k.contains(this, t) : k(this).find(t).size() }) }, eq: function(t) { return t === -1 ? this.slice(t) : this.slice(t, +t + 1) }, first: function() { var t = this[0]; return t && !s(t) ? t : k(t) }, last: function() { var t = this[this.length - 1]; return t && !s(t) ? t : k(t) }, find: function(t) { var e, i = this; return e = t ? "object" == typeof t ? k(t).filter(function() { var t = this; return T.some.call(i, function(e) { return k.contains(e, t) }) }) : 1 == this.length ? k(W.qsa(this[0], t)) : this.map(function() { return W.qsa(this, t) }) : k() }, closest: function(t, e) { var i = this[0],
                    s = !1; for ("object" == typeof t && (s = k(t)); i && !(s ? s.indexOf(i) >= 0 : W.matches(i, t));) i = i !== e && !n(i) && i.parentNode; return k(i) }, parents: function(t) { for (var e = [], i = this; i.length > 0;) i = k.map(i, function(t) { if ((t = t.parentNode) && !n(t) && e.indexOf(t) < 0) return e.push(t), t }); return y(e, t) }, parent: function(t) { return y(P(this.pluck("parentNode")), t) }, children: function(t) { return y(this.map(function() { return f(this) }), t) }, contents: function() { return this.map(function() { return C.call(this.childNodes) }) }, siblings: function(t) { return y(this.map(function(t, e) { return $.call(f(e.parentNode), function(t) { return t !== e }) }), t) }, empty: function() { return this.each(function() { this.innerHTML = "" }) }, pluck: function(t) { return k.map(this, function(e) { return e[t] }) }, show: function() { return this.each(function() { "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = d(this.nodeName)) }) }, replaceWith: function(t) { return this.before(t).remove() }, wrap: function(t) { var i = e(t); if (this[0] && !i) var n = k(t).get(0),
                    s = n.parentNode || this.length > 1; return this.each(function(e) { k(this).wrapAll(i ? t.call(this, e) : s ? n.cloneNode(!0) : n) }) }, wrapAll: function(t) { if (this[0]) { k(this[0]).before(t = k(t)); for (var e;
                        (e = t.children()).length;) t = e.first();
                    k(t).append(this) } return this }, wrapInner: function(t) { var i = e(t); return this.each(function(e) { var n = k(this),
                        s = n.contents(),
                        r = i ? t.call(this, e) : t;
                    s.length ? s.wrapAll(r) : n.append(r) }) }, unwrap: function() { return this.parent().each(function() { k(this).replaceWith(k(this).children()) }), this }, clone: function() { return this.map(function() { return this.cloneNode(!0) }) }, hide: function() { return this.css("display", "none") }, toggle: function(t) { return this.each(function() { var e = k(this);
                    (t === w ? "none" == e.css("display") : t) ? e.show(): e.hide() }) }, prev: function(t) { return k(this.pluck("previousElementSibling")).filter(t || "*") }, next: function(t) { return k(this.pluck("nextElementSibling")).filter(t || "*") }, html: function(t) { return 0 in arguments ? this.each(function(e) { var i = this.innerHTML;
                    k(this).empty().append(g(this, t, e, i)) }) : 0 in this ? this[0].innerHTML : null }, text: function(t) { return 0 in arguments ? this.each(function(e) { var i = g(this, t, e, this.textContent);
                    this.textContent = null == i ? "" : "" + i }) : 0 in this ? this[0].textContent : null }, attr: function(t, e) { var i; return "string" != typeof t || 1 in arguments ? this.each(function(i) { if (1 === this.nodeType)
                        if (s(t))
                            for (x in t) v(this, x, t[x]);
                        else v(this, t, g(this, e, i, this.getAttribute(t))) }) : this.length && 1 === this[0].nodeType ? !(i = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : i : w }, removeAttr: function(t) { return this.each(function() { 1 === this.nodeType && t.split(" ").forEach(function(t) { v(this, t) }, this) }) }, prop: function(t, e) { return t = Z[t] || t, 1 in arguments ? this.each(function(i) { this[t] = g(this, e, i, this[t]) }) : this[0] && this[0][t] }, data: function(t, e) { var i = "data-" + t.replace(z, "-$1").toLowerCase(),
                    n = 1 in arguments ? this.attr(i, e) : this.attr(i); return null !== n ? b(n) : w }, val: function(t) { return 0 in arguments ? this.each(function(e) { this.value = g(this, t, e, this.value) }) : this[0] && (this[0].multiple ? k(this[0]).find("option").filter(function() { return this.selected }).pluck("value") : this[0].value) }, offset: function(t) { if (t) return this.each(function(e) { var i = k(this),
                        n = g(this, t, e, i.offset()),
                        s = i.offsetParent().offset(),
                        r = { top: n.top - s.top, left: n.left - s.left }; "static" == i.css("position") && (r.position = "relative"), i.css(r) }); if (!this.length) return null; var e = this[0].getBoundingClientRect(); return { left: e.left + window.pageXOffset, top: e.top + window.pageYOffset, width: Math.round(e.width), height: Math.round(e.height) } }, css: function(e, i) { if (arguments.length < 2) { var n, s = this[0]; if (!s) return; if (n = getComputedStyle(s, ""), "string" == typeof e) return s.style[O(e)] || n.getPropertyValue(e); if (G(e)) { var r = {}; return k.each(e, function(t, e) { r[e] = s.style[O(e)] || n.getPropertyValue(e) }), r } } var o = ""; if ("string" == t(e)) i || 0 === i ? o = h(e) + ":" + c(e, i) : this.each(function() { this.style.removeProperty(h(e)) });
                else
                    for (x in e) e[x] || 0 === e[x] ? o += h(x) + ":" + c(x, e[x]) + ";" : this.each(function() { this.style.removeProperty(h(x)) }); return this.each(function() { this.style.cssText += ";" + o }) }, index: function(t) { return t ? this.indexOf(k(t)[0]) : this.parent().children().indexOf(this[0]) }, hasClass: function(t) { return !!t && T.some.call(this, function(t) { return this.test(m(t)) }, u(t)) }, addClass: function(t) { return t ? this.each(function(e) { if ("className" in this) { S = []; var i = m(this),
                            n = g(this, t, e, i);
                        n.split(/\s+/g).forEach(function(t) { k(this).hasClass(t) || S.push(t) }, this), S.length && m(this, i + (i ? " " : "") + S.join(" ")) } }) : this }, removeClass: function(t) { return this.each(function(e) { if ("className" in this) { if (t === w) return m(this, "");
                        S = m(this), g(this, t, e, S).split(/\s+/g).forEach(function(t) { S = S.replace(u(t), " ") }), m(this, S.trim()) } }) }, toggleClass: function(t, e) { return t ? this.each(function(i) { var n = k(this),
                        s = g(this, t, i, m(this));
                    s.split(/\s+/g).forEach(function(t) {
                        (e === w ? !n.hasClass(t) : e) ? n.addClass(t): n.removeClass(t) }) }) : this }, scrollTop: function(t) { if (this.length) { var e = "scrollTop" in this[0]; return t === w ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() { this.scrollTop = t } : function() { this.scrollTo(this.scrollX, t) }) } }, scrollLeft: function(t) { if (this.length) { var e = "scrollLeft" in this[0]; return t === w ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() { this.scrollLeft = t } : function() { this.scrollTo(t, this.scrollY) }) } }, position: function() { if (this.length) { var t = this[0],
                        e = this.offsetParent(),
                        i = this.offset(),
                        n = R.test(e[0].nodeName) ? { top: 0, left: 0 } : e.offset(); return i.top -= parseFloat(k(t).css("margin-top")) || 0, i.left -= parseFloat(k(t).css("margin-left")) || 0, n.top += parseFloat(k(e[0]).css("border-top-width")) || 0, n.left += parseFloat(k(e[0]).css("border-left-width")) || 0, { top: i.top - n.top, left: i.left - n.left } } }, offsetParent: function() { return this.map(function() { for (var t = this.offsetParent || E.body; t && !R.test(t.nodeName) && "static" == k(t).css("position");) t = t.offsetParent; return t }) } }, k.fn.detach = k.fn.remove, ["width", "height"].forEach(function(t) { var e = t.replace(/./, function(t) { return t[0].toUpperCase() });
            k.fn[t] = function(s) { var r, o = this[0]; return s === w ? i(o) ? o["inner" + e] : n(o) ? o.documentElement["scroll" + e] : (r = this.offset()) && r[t] : this.each(function(e) { o = k(this), o.css(t, g(this, s, e, o[t]())) }) } }), V.forEach(function(e, i) { var n = i % 2;
            k.fn[e] = function() { var e, s, r = k.map(arguments, function(i) { return e = t(i), "object" == e || "array" == e || null == i ? i : W.fragment(i) }),
                    o = this.length > 1; return r.length < 1 ? this : this.each(function(t, e) { s = n ? e : e.parentNode, e = 0 == i ? e.nextSibling : 1 == i ? e.firstChild : 2 == i ? e : null; var a = k.contains(E.documentElement, s);
                    r.forEach(function(t) { if (o) t = t.cloneNode(!0);
                        else if (!s) return k(t).remove();
                        s.insertBefore(t, e), a && _(t, function(t) { null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML) }) }) }) }, k.fn[n ? e + "To" : "insert" + (i ? "Before" : "After")] = function(t) { return k(t)[e](this), this } }), W.Z.prototype = k.fn, W.uniq = P, W.deserializeValue = b, k.zepto = W, k }();! function(t) {
        function e(t) { return t._zid || (t._zid = d++) }

        function i(t, i, r, o) { if (i = n(i), i.ns) var a = s(i.ns); return (g[e(t)] || []).filter(function(t) { return t && (!i.e || t.e == i.e) && (!i.ns || a.test(t.ns)) && (!r || e(t.fn) === e(r)) && (!o || t.sel == o) }) }

        function n(t) { var e = ("" + t).split("."); return { e: e[0], ns: e.slice(1).sort().join(" ") } }

        function s(t) { return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)") }

        function r(t, e) { return t.del && !m && t.e in b || !!e }

        function o(t) { return _[t] || m && b[t] || t }

        function a(i, s, a, l, u, d, f) { var p = e(i),
                y = g[p] || (g[p] = []);
            s.split(/\s/).forEach(function(e) { if ("ready" == e) return t(document).ready(a); var s = n(e);
                s.fn = a, s.sel = u, s.e in _ && (a = function(e) { var i = e.relatedTarget; if (!i || i !== this && !t.contains(this, i)) return s.fn.apply(this, arguments) }), s.del = d; var p = d || a;
                s.proxy = function(t) { if (t = h(t), !t.isImmediatePropagationStopped()) { t.data = l; var e = p.apply(i, t._args == c ? [t] : [t].concat(t._args)); return e === !1 && (t.preventDefault(), t.stopPropagation()), e } }, s.i = y.length, y.push(s), "addEventListener" in i && i.addEventListener(o(s.e), s.proxy, r(s, f)) }) }

        function l(t, n, s, a, l) { var h = e(t);
            (n || "").split(/\s/).forEach(function(e) { i(t, e, s, a).forEach(function(e) { delete g[h][e.i], "removeEventListener" in t && t.removeEventListener(o(e.e), e.proxy, r(e, l)) }) }) }

        function h(e, i) { return !i && e.isDefaultPrevented || (i || (i = e), t.each(S, function(t, n) { var s = i[t];
                e[t] = function() { return this[n] = w, s && s.apply(i, arguments) }, e[n] = x }), (i.defaultPrevented !== c ? i.defaultPrevented : "returnValue" in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = w)), e }

        function u(t) { var e, i = { originalEvent: t }; for (e in t) k.test(e) || t[e] === c || (i[e] = t[e]); return h(i, t) } var c, d = 1,
            f = Array.prototype.slice,
            p = t.isFunction,
            y = function(t) { return "string" == typeof t },
            g = {},
            v = {},
            m = "onfocusin" in window,
            b = { focus: "focusin", blur: "focusout" },
            _ = { mouseenter: "mouseover", mouseleave: "mouseout" };
        v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents", t.event = { add: a, remove: l }, t.proxy = function(i, n) { var s = 2 in arguments && f.call(arguments, 2); if (p(i)) { var r = function() { return i.apply(n, s ? s.concat(f.call(arguments)) : arguments) }; return r._zid = e(i), r } if (y(n)) return s ? (s.unshift(i[n], i), t.proxy.apply(null, s)) : t.proxy(i[n], i); throw new TypeError("expected function") }, t.fn.bind = function(t, e, i) { return this.on(t, e, i) }, t.fn.unbind = function(t, e) { return this.off(t, e) }, t.fn.one = function(t, e, i, n) { return this.on(t, e, i, n, 1) }; var w = function() { return !0 },
            x = function() { return !1 },
            k = /^([A-Z]|returnValue$|layer[XY]$)/,
            S = { preventDefault: "isDefaultPrevented", stopImmediatePropagation: "isImmediatePropagationStopped", stopPropagation: "isPropagationStopped" };
        t.fn.delegate = function(t, e, i) { return this.on(e, t, i) }, t.fn.undelegate = function(t, e, i) { return this.off(e, t, i) }, t.fn.live = function(e, i) { return t(document.body).delegate(this.selector, e, i), this }, t.fn.die = function(e, i) { return t(document.body).undelegate(this.selector, e, i), this }, t.fn.on = function(e, i, n, s, r) { var o, h, d = this; return e && !y(e) ? (t.each(e, function(t, e) { d.on(t, i, n, e, r) }), d) : (y(i) || p(s) || s === !1 || (s = n, n = i, i = c), (p(n) || n === !1) && (s = n, n = c), s === !1 && (s = x), d.each(function(c, d) { r && (o = function(t) { return l(d, t.type, s), s.apply(this, arguments) }), i && (h = function(e) { var n, r = t(e.target).closest(i, d).get(0); if (r && r !== d) return n = t.extend(u(e), { currentTarget: r, liveFired: d }), (o || s).apply(r, [n].concat(f.call(arguments, 1))) }), a(d, e, s, n, i, h || o) })) }, t.fn.off = function(e, i, n) { var s = this; return e && !y(e) ? (t.each(e, function(t, e) { s.off(t, i, e) }), s) : (y(i) || p(n) || n === !1 || (n = i, i = c), n === !1 && (n = x), s.each(function() { l(this, e, n, i) })) }, t.fn.trigger = function(e, i) { return e = y(e) || t.isPlainObject(e) ? t.Event(e) : h(e), e._args = i, this.each(function() { e.type in b && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, i) }) }, t.fn.triggerHandler = function(e, n) { var s, r; return this.each(function(o, a) { s = u(y(e) ? t.Event(e) : e), s._args = n, s.target = a, t.each(i(a, e.type || e), function(t, e) { if (r = e.proxy(s), s.isImmediatePropagationStopped()) return !1 }) }), r }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) { t.fn[e] = function(t) { return 0 in arguments ? this.bind(e, t) : this.trigger(e) } }), t.Event = function(t, e) { y(t) || (e = t, t = e.type); var i = document.createEvent(v[t] || "Events"),
                n = !0; if (e)
                for (var s in e) "bubbles" == s ? n = !!e[s] : i[s] = e[s]; return i.initEvent(t, n, !0), h(i) } }(i),
    function(t) {
        function e(e, i, n) { var s = t.Event(i); return t(e).trigger(s, n), !s.isDefaultPrevented() }

        function i(t, i, n, s) { if (t.global) return e(i || m, n, s) }

        function n(e) { e.global && 0 === t.active++ && i(e, null, "ajaxStart") }

        function s(e) { e.global && !--t.active && i(e, null, "ajaxStop") }

        function r(t, e) { var n = e.context; return e.beforeSend.call(n, t, e) !== !1 && i(e, n, "ajaxBeforeSend", [t, e]) !== !1 && void i(e, n, "ajaxSend", [t, e]) }

        function o(t, e, n, s) { var r = n.context,
                o = "success";
            n.success.call(r, t, o, e), s && s.resolveWith(r, [t, o, e]), i(n, r, "ajaxSuccess", [e, n, t]), l(o, e, n) }

        function a(t, e, n, s, r) { var o = s.context;
            s.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), i(s, o, "ajaxError", [n, s, t || e]), l(e, n, s) }

        function l(t, e, n) { var r = n.context;
            n.complete.call(r, e, t), i(n, r, "ajaxComplete", [e, n]), s(n) }

        function h() {}

        function u(t) { return t && (t = t.split(";", 2)[0]), t && (t == k ? "html" : t == x ? "json" : _.test(t) ? "script" : w.test(t) && "xml") || "text" }

        function c(t, e) { return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?") }

        function d(e) { e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = c(e.url, e.data), e.data = void 0) }

        function f(e, i, n, s) { return t.isFunction(i) && (s = n, n = i, i = void 0), t.isFunction(n) || (s = n, n = void 0), { url: e, data: i, success: n, dataType: s } }

        function p(e, i, n, s) { var r, o = t.isArray(i),
                a = t.isPlainObject(i);
            t.each(i, function(i, l) { r = t.type(l), s && (i = n ? s : s + "[" + (a || "object" == r || "array" == r ? i : "") + "]"), !s && o ? e.add(l.name, l.value) : "array" == r || !n && "object" == r ? p(e, l, n, i) : e.add(i, l) }) } var y, g, v = 0,
            m = window.document,
            b = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            _ = /^(?:text|application)\/javascript/i,
            w = /^(?:text|application)\/xml/i,
            x = "application/json",
            k = "text/html",
            S = /^\s*$/,
            O = m.createElement("a");
        O.href = window.location.href, t.active = 0, t.ajaxJSONP = function(e, i) { if (!("type" in e)) return t.ajax(e); var n, s, l = e.jsonpCallback,
                h = (t.isFunction(l) ? l() : l) || "jsonp" + ++v,
                u = m.createElement("script"),
                c = window[h],
                d = function(e) { t(u).triggerHandler("error", e || "abort") },
                f = { abort: d }; return i && i.promise(f), t(u).on("load error", function(r, l) { clearTimeout(s), t(u).off().remove(), "error" != r.type && n ? o(n[0], f, e, i) : a(null, l || "error", f, e, i), window[h] = c, n && t.isFunction(c) && c(n[0]), c = n = void 0 }), r(f, e) === !1 ? (d("abort"), f) : (window[h] = function() { n = arguments }, u.src = e.url.replace(/\?(.+)=\?/, "?$1=" + h), m.head.appendChild(u), e.timeout > 0 && (s = setTimeout(function() { d("timeout") }, e.timeout)), f) }, t.ajaxSettings = { type: "GET", beforeSend: h, success: h, error: h, complete: h, context: null, global: !0, xhr: function() { return new window.XMLHttpRequest }, accepts: { script: "text/javascript, application/javascript, application/x-javascript", json: x, xml: "application/xml, text/xml", html: k, text: "text/plain" }, crossDomain: !1, timeout: 0, processData: !0, cache: !0 }, t.ajax = function(e) { var i, s = t.extend({}, e || {}),
                l = t.Deferred && t.Deferred(); for (y in t.ajaxSettings) void 0 === s[y] && (s[y] = t.ajaxSettings[y]);
            n(s), s.crossDomain || (i = m.createElement("a"), i.href = s.url, i.href = i.href, s.crossDomain = O.protocol + "//" + O.host != i.protocol + "//" + i.host), s.url || (s.url = window.location.toString()), d(s); var f = s.dataType,
                p = /\?.+=\?/.test(s.url); if (p && (f = "jsonp"), s.cache !== !1 && (e && e.cache === !0 || "script" != f && "jsonp" != f) || (s.url = c(s.url, "_=" + Date.now())), "jsonp" == f) return p || (s.url = c(s.url, s.jsonp ? s.jsonp + "=?" : s.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(s, l); var v, b = s.accepts[f],
                _ = {},
                w = function(t, e) { _[t.toLowerCase()] = [t, e] },
                x = /^([\w-]+:)\/\//.test(s.url) ? RegExp.$1 : window.location.protocol,
                k = s.xhr(),
                P = k.setRequestHeader; if (l && l.promise(k), s.crossDomain || w("X-Requested-With", "XMLHttpRequest"), w("Accept", b || "*/*"), (b = s.mimeType || b) && (b.indexOf(",") > -1 && (b = b.split(",", 2)[0]), k.overrideMimeType && k.overrideMimeType(b)), (s.contentType || s.contentType !== !1 && s.data && "GET" != s.type.toUpperCase()) && w("Content-Type", s.contentType || "application/x-www-form-urlencoded"), s.headers)
                for (g in s.headers) w(g, s.headers[g]); if (k.setRequestHeader = w, k.onreadystatechange = function() { if (4 == k.readyState) { k.onreadystatechange = h, clearTimeout(v); var e, i = !1; if (k.status >= 200 && k.status < 300 || 304 == k.status || 0 == k.status && "file:" == x) { f = f || u(s.mimeType || k.getResponseHeader("content-type")), e = k.responseText; try { "script" == f ? (0, eval)(e) : "xml" == f ? e = k.responseXML : "json" == f && (e = S.test(e) ? null : t.parseJSON(e)) } catch (t) { i = t }
                            i ? a(i, "parsererror", k, s, l) : o(e, k, s, l) } else a(k.statusText || null, k.status ? "error" : "abort", k, s, l) } }, r(k, s) === !1) return k.abort(), a(null, "abort", k, s, l), k; if (s.xhrFields)
                for (g in s.xhrFields) k[g] = s.xhrFields[g]; var T = !("async" in s) || s.async;
            k.open(s.type, s.url, T, s.username, s.password); for (g in _) P.apply(k, _[g]); return s.timeout > 0 && (v = setTimeout(function() { k.onreadystatechange = h, k.abort(), a(null, "timeout", k, s, l) }, s.timeout)), k.send(s.data ? s.data : null), k }, t.get = function() { return t.ajax(f.apply(null, arguments)) }, t.post = function() { var e = f.apply(null, arguments); return e.type = "POST", t.ajax(e) }, t.getJSON = function() { var e = f.apply(null, arguments); return e.dataType = "json", t.ajax(e) }, t.fn.load = function(e, i, n) { if (!this.length) return this; var s, r = this,
                o = e.split(/\s/),
                a = f(e, i, n),
                l = a.success; return o.length > 1 && (a.url = o[0], s = o[1]), a.success = function(e) { r.html(s ? t("<div>").html(e.replace(b, "")).find(s) : e), l && l.apply(r, arguments) }, t.ajax(a), this }; var P = encodeURIComponent;
        t.param = function(e, i) { var n = []; return n.add = function(e, i) { t.isFunction(i) && (i = i()), null == i && (i = ""), this.push(P(e) + "=" + P(i)) }, p(n, e, i), n.join("&").replace(/%20/g, "+") } }(i),
    function(t) { t.fn.serializeArray = function() { var e, i, n = [],
                s = function(t) { return t.forEach ? t.forEach(s) : void n.push({ name: e, value: t }) }; return this[0] && t.each(this[0].elements, function(n, r) { i = r.type, e = r.name, e && "fieldset" != r.nodeName.toLowerCase() && !r.disabled && "submit" != i && "reset" != i && "button" != i && "file" != i && ("radio" != i && "checkbox" != i || r.checked) && s(t(r).val()) }), n }, t.fn.serialize = function() { var t = []; return this.serializeArray().forEach(function(e) { t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value)) }), t.join("&") }, t.fn.submit = function(e) { if (0 in arguments) this.bind("submit", e);
            else if (this.length) { var i = t.Event("submit");
                this.eq(0).trigger(i), i.isDefaultPrevented() || this.get(0).submit() } return this } }(i),
    function(t) { "__proto__" in {} || t.extend(t.zepto, { Z: function(e, i) { return e = e || [], t.extend(e, t.fn), e.selector = i || "", e.__Z = !0, e }, isZ: function(e) { return "array" === t.type(e) && "__Z" in e } }); try { getComputedStyle(void 0) } catch (t) { var e = getComputedStyle;
            window.getComputedStyle = function(t) { try { return e(t) } catch (t) { return null } } } }(i) }, function(module, exports, __webpack_require__) {
    (function(__webpack_provided_window_dot_Zepto) {
        "object" != typeof JSON && (JSON = {}),
            function() { "use strict";

                function f(t) { return t < 10 ? "0" + t : t }

                function quote(t) { return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function(t) { var e = meta[t]; return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + t + '"' }

                function str(t, e) { var i, n, s, r, o, a = gap,
                        l = e[t]; switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)), "function" == typeof rep && (l = rep.call(e, t, l)), typeof l) {
                        case "string":
                            return quote(l);
                        case "number":
                            return isFinite(l) ? String(l) : "null";
                        case "boolean":
                        case "null":
                            return String(l);
                        case "object":
                            if (!l) return "null"; if (gap += indent, o = [], "[object Array]" === Object.prototype.toString.apply(l)) { for (r = l.length, i = 0; i < r; i += 1) o[i] = str(i, l) || "null"; return s = 0 === o.length ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + a + "]" : "[" + o.join(",") + "]", gap = a, s } if (rep && "object" == typeof rep)
                                for (r = rep.length, i = 0; i < r; i += 1) "string" == typeof rep[i] && (n = rep[i], s = str(n, l), s && o.push(quote(n) + (gap ? ": " : ":") + s));
                            else
                                for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (s = str(n, l), s && o.push(quote(n) + (gap ? ": " : ":") + s)); return s = 0 === o.length ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + a + "}" : "{" + o.join(",") + "}", gap = a, s } } "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(t) { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(t) { return this.valueOf() }); var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    gap, indent, meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
                    rep; "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, i) { var n; if (gap = "", indent = "", "number" == typeof i)
                        for (n = 0; n < i; n += 1) indent += " ";
                    else "string" == typeof i && (indent = i); if (rep = e, !e || "function" == typeof e || "object" == typeof e && "number" == typeof e.length) return str("", { "": t }); throw new Error("JSON.stringify") }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                    function walk(t, e) { var i, n, s = t[e]; if (s && "object" == typeof s)
                            for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (n = walk(s, i), void 0 !== n ? s[i] = n : delete s[i]); return reviver.call(t, e, s) } var j; if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j; throw new SyntaxError("JSON.parse") }) }(),
            function(t, e) { "use strict"; var i = t.History = t.History || {},
                    n = __webpack_provided_window_dot_Zepto; if ("undefined" != typeof i.Adapter) throw new Error("History.js Adapter has already been loaded...");
                i.Adapter = { bind: function(t, e, i) { new n(t).bind(e, i) }, trigger: function(t, e) { new n(t).trigger(e) }, extractEventData: function(t, i) { var n = i && i[t] || e; return n }, onDomLoad: function(t) { new n(t) } }, "undefined" != typeof i.init && i.init() }(window),
            function(t, e) {
                "use strict";
                var i = t.document,
                    n = t.setTimeout || n,
                    s = t.clearTimeout || s,
                    r = t.setInterval || r,
                    o = t.History = t.History || {};
                if ("undefined" != typeof o.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
                o.initHtml4 = function() {
                    return "undefined" == typeof o.initHtml4.initialized && (o.initHtml4.initialized = !0, o.enabled = !0, o.savedHashes = [], o.isLastHash = function(t) { var e, i = o.getHashByIndex(); return e = t === i }, o.isHashEqual = function(t, e) { return t = encodeURIComponent(t).replace(/%25/g, "%"), e = encodeURIComponent(e).replace(/%25/g, "%"), t === e }, o.saveHash = function(t) { return !o.isLastHash(t) && (o.savedHashes.push(t), !0) }, o.getHashByIndex = function(t) { var e = null; return e = "undefined" == typeof t ? o.savedHashes[o.savedHashes.length - 1] : t < 0 ? o.savedHashes[o.savedHashes.length + t] : o.savedHashes[t] }, o.discardedHashes = {}, o.discardedStates = {}, o.discardState = function(t, e, i) { var n, s = o.getHashByState(t); return n = { discardedState: t, backState: i, forwardState: e }, o.discardedStates[s] = n, !0 }, o.discardHash = function(t, e, i) { var n = { discardedHash: t, backState: i, forwardState: e }; return o.discardedHashes[t] = n, !0 }, o.discardedState = function(t) { var e, i = o.getHashByState(t); return e = o.discardedStates[i] || !1 }, o.discardedHash = function(t) { var e = o.discardedHashes[t] || !1; return e }, o.recycleState = function(t) { var e = o.getHashByState(t); return o.discardedState(t) && delete o.discardedStates[e], !0 }, o.emulated.hashChange && (o.hashChangeInit = function() { o.checkerFunction = null; var e, n, s, a, l = "",
                            h = Boolean(o.getHash()); return o.isInternetExplorer() ? (e = "historyjs-iframe", n = i.createElement("iframe"), n.setAttribute("id", e), n.setAttribute("src", "#"), n.style.display = "none", i.body.appendChild(n), n.contentWindow.document.open(), n.contentWindow.document.close(), s = "", a = !1, o.checkerFunction = function() { if (a) return !1;
                            a = !0; var e = o.getHash(),
                                i = o.getHash(n.contentWindow.document); return e !== l ? (l = e, i !== e && (s = i = e, n.contentWindow.document.open(), n.contentWindow.document.close(), n.contentWindow.document.location.hash = o.escapeHash(e)), o.Adapter.trigger(t, "hashchange")) : i !== s && (s = i, h && "" === i ? o.back() : o.setHash(i, !1)), a = !1, !0 }) : o.checkerFunction = function() { var e = o.getHash() || ""; return e !== l && (l = e, o.Adapter.trigger(t, "hashchange")), !0 }, o.intervalList.push(r(o.checkerFunction, o.options.hashChangeInterval)), !0 }, o.Adapter.onDomLoad(o.hashChangeInit)), o.emulated.pushState && (o.onHashChange = function(e) { var i, n = e && e.newURL || o.getLocationHref(),
                            s = o.getHashByUrl(n),
                            r = null,
                            a = null; return o.isLastHash(s) ? (o.busy(!1), !1) : (o.doubleCheckComplete(), o.saveHash(s), s && o.isTraditionalAnchor(s) ? (o.Adapter.trigger(t, "anchorchange"), o.busy(!1), !1) : (r = o.extractState(o.getFullUrl(s || o.getLocationHref()), !0), o.isLastSavedState(r) ? (o.busy(!1), !1) : (a = o.getHashByState(r), i = o.discardedState(r), i ? (o.getHashByIndex(-2) === o.getHashByState(i.forwardState) ? o.back(!1) : o.forward(!1), !1) : (o.pushState(r.data, r.title, encodeURI(r.url), !1), !0)))) }, o.Adapter.bind(t, "hashchange", o.onHashChange), o.pushState = function(e, i, n, s) {
                        if (n = encodeURI(n).replace(/%25/g, "%"), o.getHashByUrl(n)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                        if (s !== !1 && o.busy()) return o.pushQueue({ scope: o, callback: o.pushState, args: arguments, queue: s }), !1;
                        o.busy(!0);
                        var r = o.createStateObject(e, i, n),
                            a = o.getHashByState(r),
                            l = o.getState(!1),
                            h = o.getHashByState(l),
                            u = o.getHash(),
                            c = o.expectedStateId == r.id;
                        return o.storeState(r), o.expectedStateId = r.id, o.recycleState(r), o.setTitle(r), a === h ? (o.busy(!1), !1) : (o.saveState(r), c || o.Adapter.trigger(t, "statechange"), !o.isHashEqual(a, u) && !o.isHashEqual(a, o.getShortUrl(o.getLocationHref())) && o.setHash(a, !1), o.busy(!1), !0)
                    }, o.replaceState = function(e, i, n, s) { if (n = encodeURI(n).replace(/%25/g, "%"), o.getHashByUrl(n)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors)."); if (s !== !1 && o.busy()) return o.pushQueue({ scope: o, callback: o.replaceState, args: arguments, queue: s }), !1;
                        o.busy(!0); var r = o.createStateObject(e, i, n),
                            a = o.getHashByState(r),
                            l = o.getState(!1),
                            h = o.getHashByState(l),
                            u = o.getStateByIndex(-2); return o.discardState(l, r, u), a === h ? (o.storeState(r), o.expectedStateId = r.id, o.recycleState(r), o.setTitle(r), o.saveState(r), o.Adapter.trigger(t, "statechange"), o.busy(!1)) : o.pushState(r.data, r.title, r.url, !1), !0 }), o.emulated.pushState && o.getHash() && !o.emulated.hashChange && o.Adapter.onDomLoad(function() { o.Adapter.trigger(t, "hashchange") }), void 0)
                }, "undefined" != typeof o.init && o.init()
            }(window),
            function(t, e) { "use strict"; var i = t.console || e,
                    n = t.document,
                    s = t.navigator,
                    r = t.sessionStorage || !1,
                    o = t.setTimeout,
                    a = t.clearTimeout,
                    l = t.setInterval,
                    h = t.clearInterval,
                    u = t.JSON,
                    c = t.alert,
                    d = t.History = t.History || {},
                    f = t.history; try { r.setItem("TEST", "1"), r.removeItem("TEST") } catch (t) { r = !1 } if (u.stringify = u.stringify || u.encode, u.parse = u.parse || u.decode, "undefined" != typeof d.init) throw new Error("History.js Core has already been loaded...");
                d.init = function(t) { return "undefined" != typeof d.Adapter && ("undefined" != typeof d.initCore && d.initCore(), "undefined" != typeof d.initHtml4 && d.initHtml4(), !0) }, d.initCore = function(p) { if ("undefined" != typeof d.initCore.initialized) return !1; if (d.initCore.initialized = !0, d.options = d.options || {}, d.options.hashChangeInterval = d.options.hashChangeInterval || 100, d.options.safariPollInterval = d.options.safariPollInterval || 500, d.options.doubleCheckInterval = d.options.doubleCheckInterval || 500, d.options.disableSuid = d.options.disableSuid || !1, d.options.storeInterval = d.options.storeInterval || 1e3, d.options.busyDelay = d.options.busyDelay || 250, d.options.debug = d.options.debug || !1, d.options.initialTitle = d.options.initialTitle || n.title, d.options.html4Mode = d.options.html4Mode || !1, d.options.delayInit = d.options.delayInit || !1, d.intervalList = [], d.clearAllIntervals = function() { var t, e = d.intervalList; if ("undefined" != typeof e && null !== e) { for (t = 0; t < e.length; t++) h(e[t]);
                                d.intervalList = null } }, d.debug = function() {
                            (d.options.debug || !1) && d.log.apply(d, arguments) }, d.log = function() { var t, e, s, r, o, a = "undefined" != typeof i && "undefined" != typeof i.log && "undefined" != typeof i.log.apply,
                                l = n.getElementById("log"); for (a ? (r = Array.prototype.slice.call(arguments), t = r.shift(), "undefined" != typeof i.debug ? i.debug.apply(i, [t, r]) : i.log.apply(i, [t, r])) : t = "\n" + arguments[0] + "\n", e = 1, s = arguments.length; e < s; ++e) { if (o = arguments[e], "object" == typeof o && "undefined" != typeof u) try { o = u.stringify(o) } catch (t) {}
                                t += "\n" + o + "\n" } return l ? (l.value += t + "\n-----\n", l.scrollTop = l.scrollHeight - l.clientHeight) : a || c(t), !0 }, d.getInternetExplorerMajorVersion = function() { var t = d.getInternetExplorerMajorVersion.cached = "undefined" != typeof d.getInternetExplorerMajorVersion.cached ? d.getInternetExplorerMajorVersion.cached : function() { for (var t = 3, e = n.createElement("div"), i = e.getElementsByTagName("i");
                                    (e.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->") && i[0];); return t > 4 && t }(); return t }, d.isInternetExplorer = function() { var t = d.isInternetExplorer.cached = "undefined" != typeof d.isInternetExplorer.cached ? d.isInternetExplorer.cached : Boolean(d.getInternetExplorerMajorVersion()); return t }, d.options.html4Mode ? d.emulated = { pushState: !0, hashChange: !0 } : d.emulated = { pushState: !Boolean(t.history && t.history.pushState && t.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(s.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(s.userAgent)), hashChange: Boolean(!("onhashchange" in t || "onhashchange" in n) || d.isInternetExplorer() && d.getInternetExplorerMajorVersion() < 8) }, d.enabled = !d.emulated.pushState, d.bugs = { setHash: Boolean(!d.emulated.pushState && "Apple Computer, Inc." === s.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(s.userAgent)), safariPoll: Boolean(!d.emulated.pushState && "Apple Computer, Inc." === s.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(s.userAgent)), ieDoubleCheck: Boolean(d.isInternetExplorer() && d.getInternetExplorerMajorVersion() < 8), hashEscape: Boolean(d.isInternetExplorer() && d.getInternetExplorerMajorVersion() < 7) }, d.isEmptyObject = function(t) { for (var e in t)
                                if (t.hasOwnProperty(e)) return !1;
                            return !0 }, d.cloneObject = function(t) { var e, i; return t ? (e = u.stringify(t), i = u.parse(e)) : i = {}, i }, d.getRootUrl = function() { var t = n.location.protocol + "//" + (n.location.hostname || n.location.host); return n.location.port && (t += ":" + n.location.port), t += "/" }, d.getBaseHref = function() { var t = n.getElementsByTagName("base"),
                                e = null,
                                i = ""; return 1 === t.length && (e = t[0], i = e.href.replace(/[^\/]+$/, "")), i = i.replace(/\/+$/, ""), i && (i += "/"), i }, d.getBaseUrl = function() { var t = d.getBaseHref() || d.getBasePageUrl() || d.getRootUrl(); return t }, d.getPageUrl = function() { var t, e = d.getState(!1, !1),
                                i = (e || {}).url || d.getLocationHref(); return t = i.replace(/\/+$/, "").replace(/[^\/]+$/, function(t, e, i) { return /\./.test(t) ? t : t + "/" }) }, d.getBasePageUrl = function() { var t = d.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(t, e, i) { return /[^\/]$/.test(t) ? "" : t }).replace(/\/+$/, "") + "/"; return t }, d.getFullUrl = function(t, e) { var i = t,
                                n = t.substring(0, 1); return e = "undefined" == typeof e || e, /[a-z]+\:\/\//.test(t) || (i = "/" === n ? d.getRootUrl() + t.replace(/^\/+/, "") : "#" === n ? d.getPageUrl().replace(/#.*/, "") + t : "?" === n ? d.getPageUrl().replace(/[\?#].*/, "") + t : e ? d.getBaseUrl() + t.replace(/^(\.\/)+/, "") : d.getBasePageUrl() + t.replace(/^(\.\/)+/, "")), i.replace(/\#$/, "") }, d.getShortUrl = function(t) { var e = t,
                                i = d.getBaseUrl(),
                                n = d.getRootUrl(); return d.emulated.pushState && (e = e.replace(i, "")), e = e.replace(n, "/"), d.isTraditionalAnchor(e) && (e = "./" + e), e = e.replace(/^(\.\/)+/g, "./").replace(/\#$/, "") }, d.getLocationHref = function(t) { return t = t || n, t.URL === t.location.href ? t.location.href : t.location.href === decodeURIComponent(t.URL) ? t.URL : t.location.hash && decodeURIComponent(t.location.href.replace(/^[^#]+/, "")) === t.location.hash ? t.location.href : t.URL.indexOf("#") == -1 && t.location.href.indexOf("#") != -1 ? t.location.href : t.URL || t.location.href }, d.store = {}, d.idToState = d.idToState || {}, d.stateToId = d.stateToId || {}, d.urlToId = d.urlToId || {}, d.storedStates = d.storedStates || [], d.savedStates = d.savedStates || [], d.normalizeStore = function() { d.store.idToState = d.store.idToState || {}, d.store.urlToId = d.store.urlToId || {}, d.store.stateToId = d.store.stateToId || {} }, d.getState = function(t, e) { "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = !0); var i = d.getLastSavedState(); return !i && e && (i = d.createStateObject()), t && (i = d.cloneObject(i), i.url = i.cleanUrl || i.url), i }, d.getIdByState = function(t) { var e, i = d.extractId(t.url); if (!i)
                                if (e = d.getStateString(t), "undefined" != typeof d.stateToId[e]) i = d.stateToId[e];
                                else if ("undefined" != typeof d.store.stateToId[e]) i = d.store.stateToId[e];
                            else { for (; i = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), "undefined" != typeof d.idToState[i] || "undefined" != typeof d.store.idToState[i];);
                                d.stateToId[e] = i, d.idToState[i] = t } return i }, d.normalizeState = function(t) { var e, i; return t && "object" == typeof t || (t = {}), "undefined" != typeof t.normalized ? t : (t.data && "object" == typeof t.data || (t.data = {}), e = {}, e.normalized = !0, e.title = t.title || "", e.url = d.getFullUrl(t.url ? t.url : d.getLocationHref()), e.hash = d.getShortUrl(e.url), e.data = d.cloneObject(t.data), e.id = d.getIdByState(e), e.cleanUrl = e.url.replace(/\??\&_suid.*/, ""), e.url = e.cleanUrl, i = !d.isEmptyObject(e.data), (e.title || i) && d.options.disableSuid !== !0 && (e.hash = d.getShortUrl(e.url).replace(/\??\&_suid.*/, ""), /\?/.test(e.hash) || (e.hash += "?"), e.hash += "&_suid=" + e.id), e.hashedUrl = d.getFullUrl(e.hash), (d.emulated.pushState || d.bugs.safariPoll) && d.hasUrlDuplicate(e) && (e.url = e.hashedUrl), e) }, d.createStateObject = function(t, e, i) { var n = { data: t, title: e, url: i }; return n = d.normalizeState(n) }, d.getStateById = function(t) { t = String(t); var i = d.idToState[t] || d.store.idToState[t] || e; return i }, d.getStateString = function(t) { var e, i, n; return e = d.normalizeState(t), i = { data: e.data, title: t.title, url: t.url }, n = u.stringify(i) }, d.getStateId = function(t) { var e, i; return e = d.normalizeState(t), i = e.id }, d.getHashByState = function(t) { var e, i; return e = d.normalizeState(t), i = e.hash }, d.extractId = function(t) { var e, i, n, s; return s = t.indexOf("#") != -1 ? t.split("#")[0] : t, i = /(.*)\&_suid=([0-9]+)$/.exec(s), n = i ? i[1] || t : t, e = i ? String(i[2] || "") : "", e || !1 }, d.isTraditionalAnchor = function(t) { var e = !/[\/\?\.]/.test(t); return e }, d.extractState = function(t, e) { var i, n, s = null; return e = e || !1, i = d.extractId(t), i && (s = d.getStateById(i)), s || (n = d.getFullUrl(t), i = d.getIdByUrl(n) || !1, i && (s = d.getStateById(i)), !s && e && !d.isTraditionalAnchor(t) && (s = d.createStateObject(null, null, n))), s }, d.getIdByUrl = function(t) { var i = d.urlToId[t] || d.store.urlToId[t] || e; return i }, d.getLastSavedState = function() { return d.savedStates[d.savedStates.length - 1] || e }, d.getLastStoredState = function() { return d.storedStates[d.storedStates.length - 1] || e }, d.hasUrlDuplicate = function(t) { var e, i = !1; return e = d.extractState(t.url), i = e && e.id !== t.id }, d.storeState = function(t) { return d.urlToId[t.url] = t.id, d.storedStates.push(d.cloneObject(t)), t }, d.isLastSavedState = function(t) { var e, i, n, s = !1; return d.savedStates.length && (e = t.id, i = d.getLastSavedState(), n = i.id, s = e === n), s }, d.saveState = function(t) { return !d.isLastSavedState(t) && (d.savedStates.push(d.cloneObject(t)), !0) }, d.getStateByIndex = function(t) { var e = null; return e = "undefined" == typeof t ? d.savedStates[d.savedStates.length - 1] : t < 0 ? d.savedStates[d.savedStates.length + t] : d.savedStates[t] }, d.getCurrentIndex = function() { var t = null; return t = d.savedStates.length < 1 ? 0 : d.savedStates.length - 1 }, d.getHash = function(t) { var e, i = d.getLocationHref(t); return e = d.getHashByUrl(i) }, d.unescapeHash = function(t) { var e = d.normalizeHash(t); return e = decodeURIComponent(e) }, d.normalizeHash = function(t) { var e = t.replace(/[^#]*#/, "").replace(/#.*/, ""); return e }, d.setHash = function(t, e) { var i, s; return e !== !1 && d.busy() ? (d.pushQueue({ scope: d, callback: d.setHash, args: arguments, queue: e }), !1) : (d.busy(!0), i = d.extractState(t, !0), i && !d.emulated.pushState ? d.pushState(i.data, i.title, i.url, !1) : d.getHash() !== t && (d.bugs.setHash ? (s = d.getPageUrl(), d.pushState(null, null, s + "#" + t, !1)) : n.location.hash = t), d) }, d.escapeHash = function(e) { var i = d.normalizeHash(e); return i = t.encodeURIComponent(i), d.bugs.hashEscape || (i = i.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), i }, d.getHashByUrl = function(t) { var e = String(t).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2"); return e = d.unescapeHash(e) }, d.setTitle = function(t) { var e, i = t.title;
                            i || (e = d.getStateByIndex(0), e && e.url === t.url && (i = e.title || d.options.initialTitle)); try { n.getElementsByTagName("title")[0].innerHTML = i.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ") } catch (t) {} return n.title = i, d }, d.queues = [], d.busy = function(t) { if ("undefined" != typeof t ? d.busy.flag = t : "undefined" == typeof d.busy.flag && (d.busy.flag = !1), !d.busy.flag) { a(d.busy.timeout); var e = function() { var t, i, n; if (!d.busy.flag)
                                        for (t = d.queues.length - 1; t >= 0; --t) i = d.queues[t], 0 !== i.length && (n = i.shift(), d.fireQueueItem(n), d.busy.timeout = o(e, d.options.busyDelay)) };
                                d.busy.timeout = o(e, d.options.busyDelay) } return d.busy.flag }, d.busy.flag = !1, d.fireQueueItem = function(t) { return t.callback.apply(t.scope || d, t.args || []) }, d.pushQueue = function(t) { return d.queues[t.queue || 0] = d.queues[t.queue || 0] || [], d.queues[t.queue || 0].push(t), d }, d.queue = function(t, e) { return "function" == typeof t && (t = { callback: t }), "undefined" != typeof e && (t.queue = e), d.busy() ? d.pushQueue(t) : d.fireQueueItem(t), d }, d.clearQueue = function() { return d.busy.flag = !1, d.queues = [], d }, d.stateChanged = !1, d.doubleChecker = !1, d.doubleCheckComplete = function() { return d.stateChanged = !0, d.doubleCheckClear(), d }, d.doubleCheckClear = function() { return d.doubleChecker && (a(d.doubleChecker), d.doubleChecker = !1), d }, d.doubleCheck = function(t) { return d.stateChanged = !1, d.doubleCheckClear(), d.bugs.ieDoubleCheck && (d.doubleChecker = o(function() { return d.doubleCheckClear(), d.stateChanged || t(), !0 }, d.options.doubleCheckInterval)), d }, d.safariStatePoll = function() { var e, i = d.extractState(d.getLocationHref()); if (!d.isLastSavedState(i)) return e = i, e || (e = d.createStateObject()), d.Adapter.trigger(t, "popstate"), d }, d.back = function(t) { return t !== !1 && d.busy() ? (d.pushQueue({ scope: d, callback: d.back, args: arguments, queue: t }), !1) : (d.busy(!0), d.doubleCheck(function() { d.back(!1) }), f.go(-1), !0) }, d.forward = function(t) { return t !== !1 && d.busy() ? (d.pushQueue({ scope: d, callback: d.forward, args: arguments, queue: t }), !1) : (d.busy(!0), d.doubleCheck(function() { d.forward(!1) }), f.go(1), !0) }, d.go = function(t, e) { var i; if (t > 0)
                                for (i = 1; i <= t; ++i) d.forward(e);
                            else { if (!(t < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed."); for (i = -1; i >= t; --i) d.back(e) } return d }, d.emulated.pushState) { var y = function() {};
                        d.pushState = d.pushState || y, d.replaceState = d.replaceState || y } else d.onPopState = function(e, i) { var n, s, r = !1,
                            o = !1; return d.doubleCheckComplete(), n = d.getHash(), n ? (s = d.extractState(n || d.getLocationHref(), !0), s ? d.replaceState(s.data, s.title, s.url, !1) : (d.Adapter.trigger(t, "anchorchange"), d.busy(!1)), d.expectedStateId = !1, !1) : (r = d.Adapter.extractEventData("state", e, i) || !1, o = r ? d.getStateById(r) : d.expectedStateId ? d.getStateById(d.expectedStateId) : d.extractState(d.getLocationHref()), o || (o = d.createStateObject(null, null, d.getLocationHref())), d.expectedStateId = !1, d.isLastSavedState(o) ? (d.busy(!1), !1) : (d.storeState(o), d.saveState(o), d.setTitle(o), d.Adapter.trigger(t, "statechange"), d.busy(!1), !0)) }, d.Adapter.bind(t, "popstate", d.onPopState), d.pushState = function(e, i, n, s) { if (d.getHashByUrl(n) && d.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors)."); if (s !== !1 && d.busy()) return d.pushQueue({ scope: d, callback: d.pushState, args: arguments, queue: s }), !1;
                        d.busy(!0); var r = d.createStateObject(e, i, n); return d.isLastSavedState(r) ? d.busy(!1) : (d.storeState(r), d.expectedStateId = r.id, f.pushState(r.id, r.title, r.url), d.Adapter.trigger(t, "popstate")), !0 }, d.replaceState = function(e, i, n, s) { if (d.getHashByUrl(n) && d.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors)."); if (s !== !1 && d.busy()) return d.pushQueue({ scope: d, callback: d.replaceState, args: arguments, queue: s }), !1;
                        d.busy(!0); var r = d.createStateObject(e, i, n); return d.isLastSavedState(r) ? d.busy(!1) : (d.storeState(r), d.expectedStateId = r.id, f.replaceState(r.id, r.title, r.url), d.Adapter.trigger(t, "popstate")), !0 }; if (r) { try { d.store = u.parse(r.getItem("History.store")) || {} } catch (t) { d.store = {} }
                        d.normalizeStore() } else d.store = {}, d.normalizeStore();
                    d.Adapter.bind(t, "unload", d.clearAllIntervals), d.saveState(d.storeState(d.extractState(d.getLocationHref(), !0))), r && (d.onUnload = function() { var t, e, i; try { t = u.parse(r.getItem("History.store")) || {} } catch (e) { t = {} }
                        t.idToState = t.idToState || {}, t.urlToId = t.urlToId || {}, t.stateToId = t.stateToId || {}; for (e in d.idToState) d.idToState.hasOwnProperty(e) && (t.idToState[e] = d.idToState[e]); for (e in d.urlToId) d.urlToId.hasOwnProperty(e) && (t.urlToId[e] = d.urlToId[e]); for (e in d.stateToId) d.stateToId.hasOwnProperty(e) && (t.stateToId[e] = d.stateToId[e]);
                        d.store = t, d.normalizeStore(), i = u.stringify(t); try { r.setItem("History.store", i) } catch (t) { if (t.code !== DOMException.QUOTA_EXCEEDED_ERR) throw t;
                            r.length && (r.removeItem("History.store"), r.setItem("History.store", i)) } }, d.intervalList.push(l(d.onUnload, d.options.storeInterval)), d.Adapter.bind(t, "beforeunload", d.onUnload), d.Adapter.bind(t, "unload", d.onUnload)), d.emulated.pushState || (d.bugs.safariPoll && d.intervalList.push(l(d.safariStatePoll, d.options.safariPollInterval)), "Apple Computer, Inc." !== s.vendor && "Mozilla" !== (s.appCodeName || "") || (d.Adapter.bind(t, "hashchange", function() { d.Adapter.trigger(t, "popstate") }), d.getHash() && d.Adapter.onDomLoad(function() { d.Adapter.trigger(t, "hashchange") }))) }, (!d.options || !d.options.delayInit) && d.init() }(window)
    }).call(exports, __webpack_require__(1))
}, function(t, e) {! function(t) { for (var e = 0, i = ["webkit", "moz"], n = t.requestAnimationFrame, s = t.cancelAnimationFrame, r = i.length; --r >= 0 && !n;) n = t[i[r] + "RequestAnimationFrame"], s = t[i[r] + "CancelAnimationFrame"];
        n && s || (n = function(t) { var i = +new Date,
                n = Math.max(e + 16, i); return setTimeout(function() { t(e = n) }, n - i) }, s = clearTimeout), t.requestAnimationFrame = n, t.cancelAnimationFrame = s }(window) }, function(t, e, i) {
    var n, s;
    (function(i) {
        ! function(i, r) {
            "use strict";
            var o = {},
                a = i.document,
                l = i.GreenSockGlobals = i.GreenSockGlobals || i;
            if (l.TweenLite) return l.TweenLite;
            var h, u, c, d, f, p = function(t) { var e, i = t.split("."),
                        n = l; for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {}; return n },
                y = p("com.greensock"),
                g = 1e-10,
                v = function(t) { var e, i = [],
                        n = t.length; for (e = 0; e !== n; i.push(t[e++])); return i },
                m = function() {},
                b = function() { var t = Object.prototype.toString,
                        e = t.call([]); return function(i) { return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e) } }(),
                _ = {},
                w = function(i, a, h, u) { this.sc = _[i] ? _[i].sc : [], _[i] = this, this.gsClass = null, this.func = h; var c = [];
                    this.check = function(d) { for (var f, y, g, v, m = a.length, b = m; --m > -1;)(f = _[a[m]] || new w(a[m], [])).gsClass ? (c[m] = f.gsClass, b--) : d && f.sc.push(this); if (0 === b && h) { if (y = ("com.greensock." + i).split("."), g = y.pop(), v = p(y.join("."))[g] = this.gsClass = h.apply(h, c), u)
                                if (l[g] = o[g] = v, "undefined" != typeof t && t.exports)
                                    if (i === r) { t.exports = o[r] = v; for (m in o) v[m] = o[m] } else o[r] && (o[r][g] = v);
                            else n = [], s = function() { return v }.apply(e, n), !(void 0 !== s && (t.exports = s)); for (m = 0; m < this.sc.length; m++) this.sc[m].check() } }, this.check(!0) },
                x = i._gsDefine = function(t, e, i, n) { return new w(t, e, i, n) },
                k = y._class = function(t, e, i) { return e = e || function() {}, x(t, [], function() { return e }, i), e };
            x.globals = l;
            var S = [0, 0, 1, 1],
                O = k("easing.Ease", function(t, e, i, n) { this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? S.concat(e) : S }, !0),
                P = O.map = {},
                T = O.register = function(t, e, i, n) { for (var s, r, o, a, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                        for (r = l[h], s = n ? k("easing." + r, null, !0) : y.easing[r] || {}, o = u.length; --o > -1;) a = u[o], P[r + "." + a] = P[a + r] = s[a] = t.getRatio ? t : t[a] || new t };
            for (c = O.prototype, c._calcEnd = !1, c.getRatio = function(t) { if (this._func) return this._params[0] = t, this._func.apply(null, this._params); var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t); return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2 }, h = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], u = h.length; --u > -1;) c = h[u] + ",Power" + u, T(new O(null, null, 1, u), c, "easeOut", !0), T(new O(null, null, 2, u), c, "easeIn" + (0 === u ? ",easeNone" : "")), T(new O(null, null, 3, u), c, "easeInOut");
            P.linear = y.easing.Linear.easeIn, P.swing = y.easing.Quad.easeInOut;
            var C = k("events.EventDispatcher", function(t) { this._listeners = {}, this._eventTarget = t || this });
            c = C.prototype, c.addEventListener = function(t, e, i, n, s) { s = s || 0; var r, o, a = this._listeners[t],
                    l = 0; for (this !== d || f || d.wake(), null == a && (this._listeners[t] = a = []), o = a.length; --o > -1;) r = a[o], r.c === e && r.s === i ? a.splice(o, 1) : 0 === l && r.pr < s && (l = o + 1);
                a.splice(l, 0, { c: e, s: i, up: n, pr: s }) }, c.removeEventListener = function(t, e) { var i, n = this._listeners[t]; if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1) }, c.dispatchEvent = function(t) { var e, i, n, s = this._listeners[t]; if (s)
                    for (e = s.length, e > 1 && (s = s.slice(0)), i = this._eventTarget; --e > -1;) n = s[e], n && (n.up ? n.c.call(n.s || i, { type: t, target: i }) : n.c.call(n.s || i)) };
            var $ = i.requestAnimationFrame,
                E = i.cancelAnimationFrame,
                I = Date.now || function() { return (new Date).getTime() },
                j = I();
            for (h = ["ms", "moz", "webkit", "o"], u = h.length; --u > -1 && !$;) $ = i[h[u] + "RequestAnimationFrame"], E = i[h[u] + "CancelAnimationFrame"] || i[h[u] + "CancelRequestAnimationFrame"];
            k("Ticker", function(t, e) { var i, n, s, r, o, l = this,
                    h = I(),
                    u = !(e === !1 || !$) && "auto",
                    c = 500,
                    p = 33,
                    y = "tick",
                    v = function(t) { var e, a, u = I() - j;
                        u > c && (h += u - p), j += u, l.time = (j - h) / 1e3, e = l.time - o, (!i || e > 0 || t === !0) && (l.frame++, o += e + (e >= r ? .004 : r - e), a = !0), t !== !0 && (s = n(v)), a && l.dispatchEvent(y) };
                C.call(l), l.time = l.frame = 0, l.tick = function() { v(!0) }, l.lagSmoothing = function(t, e) { return arguments.length ? (c = t || 1 / g, void(p = Math.min(e, c, 0))) : c < 1 / g }, l.sleep = function() { null != s && (u && E ? E(s) : clearTimeout(s), n = m, s = null, l === d && (f = !1)) }, l.wake = function(t) { null !== s ? l.sleep() : t ? h += -j + (j = I()) : l.frame > 10 && (j = I() - c + 5), n = 0 === i ? m : u && $ ? $ : function(t) { return setTimeout(t, 1e3 * (o - l.time) + 1 | 0) }, l === d && (f = !0), v(2) }, l.fps = function(t) { return arguments.length ? (i = t, r = 1 / (i || 60), o = this.time + r, void l.wake()) : i }, l.useRAF = function(t) { return arguments.length ? (l.sleep(), u = t, void l.fps(i)) : u }, l.fps(t), setTimeout(function() { "auto" === u && l.frame < 5 && "hidden" !== (a || {}).visibilityState && l.useRAF(!1) }, 1500) }), c = y.Ticker.prototype = new y.events.EventDispatcher, c.constructor = y.Ticker;
            var A = k("core.Animation", function(t, e) { if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, K) { f || d.wake(); var i = this.vars.useFrames ? J : K;
                    i.add(this, i._time), this.vars.paused && this.paused(!0) } });
            d = A.ticker = new y.Ticker, c = A.prototype, c._dirty = c._gc = c._initted = c._paused = !1, c._totalTime = c._time = 0, c._rawPrevTime = -1, c._next = c._last = c._onUpdate = c._timeline = c.timeline = null, c._paused = !1;
            var L = function() { f && I() - j > 2e3 && ("hidden" !== (a || {}).visibilityState || !d.lagSmoothing()) && d.wake(); var t = setTimeout(L, 2e3);
                t.unref && t.unref() };
            L(), c.play = function(t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, c.pause = function(t, e) { return null != t && this.seek(t, e), this.paused(!0) }, c.resume = function(t, e) { return null != t && this.seek(t, e), this.paused(!1) }, c.seek = function(t, e) { return this.totalTime(Number(t), e !== !1) }, c.restart = function(t, e) { return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0) }, c.reverse = function(t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, c.render = function(t, e, i) {}, c.invalidate = function() { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this }, c.isActive = function() { var t, e = this._timeline,
                    i = this._startTime; return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7 }, c._enabled = function(t, e) { return f || d.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1 }, c._kill = function(t, e) { return this._enabled(!1, !1) }, c.kill = function(t, e) { return this._kill(t, e), this }, c._uncache = function(t) { for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline; return this }, c._swapSelfInParams = function(t) { for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this); return i }, c._callback = function(t) { var e = this.vars,
                    i = e[t],
                    n = e[t + "Params"],
                    s = e[t + "Scope"] || e.callbackScope || this,
                    r = n ? n.length : 0; switch (r) {
                    case 0:
                        i.call(s); break;
                    case 1:
                        i.call(s, n[0]); break;
                    case 2:
                        i.call(s, n[0], n[1]); break;
                    default:
                        i.apply(s, n) } }, c.eventCallback = function(t, e, i, n) { if ("on" === (t || "").substr(0, 2)) { var s = this.vars; if (1 === arguments.length) return s[t];
                    null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = b(i) && i.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(i) : i, s[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e) } return this }, c.delay = function(t) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay }, c.duration = function(t) { return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration) }, c.totalDuration = function(t) { return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration }, c.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time }, c.totalTime = function(t, e, i) { if (f || d.wake(), !arguments.length) return this._totalTime; if (this._timeline) { if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) { this._dirty && this.totalDuration(); var n = this._totalDuration,
                            s = this._timeline; if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                            for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline }
                    this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (F.length && et(), this.render(t, e, !1), F.length && et()) } return this }, c.progress = c.totalProgress = function(t, e) { var i = this.duration(); return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio }, c.startTime = function(t) { return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime }, c.endTime = function(t) { return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale }, c.timeScale = function(t) { if (!arguments.length) return this._timeScale; var e, i; for (t = t || g, this._timeline && this._timeline.smoothChildTiming && (e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline; return this }, c.reversed = function(t) { return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, c.paused = function(t) { if (!arguments.length) return this._paused; var e, i, n = this._timeline; return t != this._paused && n && (f || t || d.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this };
            var M = k("core.SimpleTimeline", function(t) { A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0 });
            c = M.prototype = new A, c.constructor = M, c.kill()._gc = !1, c._first = c._last = c._recent = null, c._sortChildren = !1, c.add = c.insert = function(t, e, i, n) { var s, r; if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), s = this._last, this._sortChildren)
                    for (r = t._startTime; s && s._startTime > r;) s = s._prev; return s ? (t._next = s._next, s._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = s, this._recent = t, this._timeline && this._uncache(!0), this }, c._remove = function(t, e) { return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }, c.render = function(t, e, i) { var n, s = this._first; for (this._totalTime = this._time = this._rawPrevTime = t; s;) n = s._next, (s._active || t >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n }, c.rawTime = function() { return f || d.wake(), this._totalTime };
            var Y = k("TweenLite", function(t, e, n) { if (A.call(this, e, n), this.render = Y.prototype.render, null == t) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : Y.selector(t) || t; var s, r, o, a = t.jquery || t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType),
                        l = this.vars.overwrite; if (this._overwrite = l = null == l ? G[Y.defaultOverwrite] : "number" == typeof l ? l >> 0 : G[l], (a || t instanceof Array || t.push && b(t)) && "number" != typeof t[0])
                        for (this._targets = o = v(t), this._propLookup = [], this._siblings = [], s = 0; s < o.length; s++) r = o[s], r ? "string" != typeof r ? r.length && r !== i && r[0] && (r[0] === i || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(s--, 1), this._targets = o = o.concat(v(r))) : (this._siblings[s] = it(r, this, !1), 1 === l && this._siblings[s].length > 1 && st(r, this, null, 1, this._siblings[s])) : (r = o[s--] = Y.selector(r), "string" == typeof r && o.splice(s + 1, 1)) : o.splice(s--, 1);
                    else this._propLookup = {}, this._siblings = it(t, this, !1), 1 === l && this._siblings.length > 1 && st(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === e && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -g, this.render(Math.min(0, -this._delay))) }, !0),
                R = function(t) { return t && t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType) },
                z = function(t, e) { var i, n = {}; for (i in t) Z[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!U[i] || U[i] && U[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n };
            c = Y.prototype = new A, c.constructor = Y, c.kill()._gc = !1, c.ratio = 0, c._firstPT = c._targets = c._overwrittenProps = c._startAt = null, c._notifyPluginsOfEnabled = c._lazy = !1, Y.version = "1.20.5", Y.defaultEase = c._ease = new O(null, null, 1, 1), Y.defaultOverwrite = "auto", Y.ticker = d, Y.autoSleep = 120, Y.lagSmoothing = function(t, e) { d.lagSmoothing(t, e) }, Y.selector = i.$ || i.jQuery || function(t) { var e = i.$ || i.jQuery; return e ? (Y.selector = e, e(t)) : (a || (a = i.document), a ? a.querySelectorAll ? a.querySelectorAll(t) : a.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t) };
            var F = [],
                V = {},
                H = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                N = /[\+-]=-?[\.\d]/,
                D = function(t) { for (var e, i = this._firstPT, n = 1e-6; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : e < n && e > -n && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next },
                B = function(t, e, i, n) { var s, r, o, a, l, h, u, c = [],
                        d = 0,
                        f = "",
                        p = 0; for (c.start = t, c.end = e, t = c[0] = t + "", e = c[1] = e + "", i && (i(c), t = c[0], e = c[1]), c.length = 0, s = t.match(H) || [], r = e.match(H) || [], n && (n._next = null, n.blob = 1, c._firstPT = c._applyPT = n), l = r.length, a = 0; a < l; a++) u = r[a], h = e.substr(d, e.indexOf(u, d) - d), f += h || !a ? h : ",", d += h.length, p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1), u === s[a] || s.length <= a ? f += u : (f && (c.push(f), f = ""), o = parseFloat(s[a]), c.push(o), c._firstPT = { _next: c._firstPT, t: c, p: c.length - 1, s: o, c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - o) || 0, f: 0, m: p && p < 4 ? Math.round : 0 }), d += u.length; return f += e.substr(d), f && c.push(f), c.setRatio = D, N.test(e) && (c.end = null), c },
                X = function(t, e, i, n, s, r, o, a, l) { "function" == typeof n && (n = n(l || 0, t)); var h, u = typeof t[e],
                        c = "function" !== u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                        d = "get" !== i ? i : c ? o ? t[c](o) : t[c]() : t[e],
                        f = "string" == typeof n && "=" === n.charAt(1),
                        p = { t: t, p: e, s: d, f: "function" === u, pg: 0, n: s || e, m: r ? "function" == typeof r ? r : Math.round : 0, pr: 0, c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - d || 0 }; if (("number" != typeof d || "number" != typeof n && !f) && (o || isNaN(d) || !f && isNaN(n) || "boolean" == typeof d || "boolean" == typeof n ? (p.fp = o, h = B(d, f ? parseFloat(p.s) + p.c + (p.s + "").replace(/[0-9\-\.]/g, "") : n, a || Y.defaultStringFilter, p), p = { t: h, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: s || e, pr: 0, m: 0 }) : (p.s = parseFloat(d), f || (p.c = parseFloat(n) - p.s || 0))), p.c) return (p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p },
                q = Y._internals = { isArray: b, isSelector: R, lazyTweens: F, blobDif: B },
                U = Y._plugins = {},
                W = q.tweenLookup = {},
                Q = 0,
                Z = q.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1,
                    yoyoEase: 1
                },
                G = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
                J = A._rootFramesTimeline = new M,
                K = A._rootTimeline = new M,
                tt = 30,
                et = q.lazyRender = function() { var t, e = F.length; for (V = {}; --e > -1;) t = F[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    F.length = 0 };
            K._startTime = d.time, J._startTime = d.frame, K._active = J._active = !0, setTimeout(et, 1), A._updateRoot = Y.render = function() { var t, e, i; if (F.length && et(), K.render((d.time - K._startTime) * K._timeScale, !1, !1), J.render((d.frame - J._startTime) * J._timeScale, !1, !1), F.length && et(), d.frame >= tt) { tt = d.frame + (parseInt(Y.autoSleep, 10) || 120); for (i in W) { for (e = W[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete W[i] } if (i = K._first, (!i || i._paused) && Y.autoSleep && !J._first && 1 === d._listeners.tick.length) { for (; i && i._paused;) i = i._next;
                        i || d.sleep() } } }, d.addEventListener("tick", A._updateRoot);
            var it = function(t, e, i) { var n, s, r = t._gsTweenID; if (W[r || (t._gsTweenID = r = "t" + Q++)] || (W[r] = { target: t, tweens: [] }), e && (n = W[r].tweens, n[s = n.length] = e, i))
                        for (; --s > -1;) n[s] === e && n.splice(s, 1); return W[r].tweens },
                nt = function(t, e, i, n) { var s, r, o = t.vars.onOverwrite; return o && (s = o(t, e, i, n)), o = Y.onOverwrite, o && (r = o(t, e, i, n)), s !== !1 && r !== !1 },
                st = function(t, e, i, n, s) { var r, o, a, l; if (1 === n || n >= 4) { for (l = s.length, r = 0; r < l; r++)
                            if ((a = s[r]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                            else if (5 === n) break; return o } var h, u = e._startTime + g,
                        c = [],
                        d = 0,
                        f = 0 === e._duration; for (r = s.length; --r > -1;)(a = s[r]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || rt(e, 0, f), 0 === rt(a, h, f) && (c[d++] = a)) : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && ((f || !a._initted) && u - a._startTime <= 2e-10 || (c[d++] = a))); for (r = d; --r > -1;)
                        if (a = c[r], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) { if (2 !== n && !nt(a, e)) continue;
                            a._enabled(!1, !1) && (o = !0) }
                    return o },
                rt = function(t, e, i) { for (var n = t._timeline, s = n._timeScale, r = t._startTime; n._timeline;) { if (r += n._startTime, s *= n._timeScale, n._paused) return -100;
                        n = n._timeline } return r /= s, r > e ? r - e : i && r === e || !t._initted && r - e < 2 * g ? g : (r += t.totalDuration() / t._timeScale / s) > e + g ? 0 : r - e - g };
            c._init = function() { var t, e, i, n, s, r, o = this.vars,
                    a = this._overwrittenProps,
                    l = this._duration,
                    h = !!o.immediateRender,
                    u = o.ease; if (o.startAt) { this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {}; for (n in o.startAt) s[n] = o.startAt[n]; if (s.data = "isStart", s.overwrite = !1, s.immediateRender = !0, s.lazy = h && o.lazy !== !1, s.startAt = s.delay = null, s.onUpdate = o.onUpdate, s.onUpdateParams = o.onUpdateParams, s.onUpdateScope = o.onUpdateScope || o.callbackScope || this, this._startAt = Y.to(this.target || {}, 0, s), h)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== l) return } else if (o.runBackwards && 0 !== l)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else { 0 !== this._time && (h = !1), i = {}; for (n in o) Z[n] && "autoCSS" !== n || (i[n] = o[n]); if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && o.lazy !== !1, i.immediateRender = h, this._startAt = Y.to(this.target, 0, i), h) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null) }
                if (this._ease = u = u ? u instanceof O ? u : "function" == typeof u ? new O(u, o.easeParams) : P[u] || Y.defaultEase : Y.defaultEase, o.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (r = this._targets.length, t = 0; t < r; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0); if (e && Y._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = o.onUpdate, this._initted = !0 }, c._initProps = function(t, e, n, s, r) { var o, a, l, h, u, c; if (null == t) return !1;
                V[t._gsTweenID] && et(), this.vars.css || t.style && t !== i && t.nodeType && U.css && this.vars.autoCSS !== !1 && z(this.vars, t); for (o in this.vars)
                    if (c = this.vars[o], Z[o]) c && (c instanceof Array || c.push && b(c)) && c.join("").indexOf("{self}") !== -1 && (this.vars[o] = c = this._swapSelfInParams(c, this));
                    else if (U[o] && (h = new U[o])._onInitTween(t, this.vars[o], this, r)) { for (this._firstPT = u = { _next: this._firstPT, t: h, p: "setRatio", s: 0, c: 1, f: 1, n: o, pg: 1, pr: h._priority, m: 0 }, a = h._overwriteProps.length; --a > -1;) e[h._overwriteProps[a]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u) } else e[o] = X.call(this, t, o, "get", c, o, 0, null, this.vars.stringFilter, r); return s && this._kill(s, t) ? this._initProps(t, e, n, s, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && st(t, this, e, this._overwrite, n) ? (this._kill(e, t), this._initProps(t, e, n, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (V[t._gsTweenID] = !0), l) }, c.render = function(t, e, i) { var n, s, r, o, a = this._time,
                    l = this._duration,
                    h = this._rawPrevTime; if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && t >= -1e-7 || h === g && "isPause" !== this.data) && h !== t && (i = !0, h > g && (s = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t : g);
                else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0) && (s = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== g || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || h === t ? t : g)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) { var u = t / l,
                        c = this._easeType,
                        d = this._easePower;
                    (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === d ? u *= u : 2 === d ? u *= u * u : 3 === d ? u *= u * u * u : 4 === d && (u *= u * u * u * u), 1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : t / l < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2 } else this.ratio = this._ease.getRatio(t / l); if (this._time !== a || i) { if (!this._initted) { if (this._init(), !this._initted || this._gc) return; if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, F.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) } for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (t < 0 && this._startAt && t !== -1e-4 && this._startAt.render(t, !0, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), s && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === l && this._rawPrevTime === g && o !== g && (this._rawPrevTime = 0))) } }, c._kill = function(t, e, i) { if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : Y.selector(e) || e; var n, s, r, o, a, l, h, u, c, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline; if ((b(e) || R(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                else { if (this._targets) { for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) { a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all"; break } } else { if (e !== this.target) return !1;
                        a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all" } if (a) { if (h = t || a, u = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill), i && (Y.onOverwrite || this.vars.onOverwrite)) { for (r in h) a[r] && (c || (c = []), c.push(r)); if ((c || !t) && !nt(this, i, e, c)) return !1 } for (r in h)(o = a[r]) && (d && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[r]), u && (s[r] = 1);!this._firstPT && this._initted && this._enabled(!1, !1) } } return l }, c.invalidate = function() { return this._notifyPluginsOfEnabled && Y._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -g, this.render(Math.min(0, -this._delay))), this }, c._enabled = function(t, e) { if (f || d.wake(), t && this._gc) { var i, n = this._targets; if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = it(n[i], this, !0);
                    else this._siblings = it(this.target, this, !0) } return A.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && Y._onPluginEvent(t ? "_onEnable" : "_onDisable", this) }, Y.to = function(t, e, i) { return new Y(t, e, i) }, Y.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new Y(t, e, i) }, Y.fromTo = function(t, e, i, n) { return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new Y(t, e, n) }, Y.delayedCall = function(t, e, i, n, s) { return new Y(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: n, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: s, overwrite: 0 }) }, Y.set = function(t, e) { return new Y(t, 0, e) }, Y.getTweensOf = function(t, e) { if (null == t) return [];
                t = "string" != typeof t ? t : Y.selector(t) || t; var i, n, s, r; if ((b(t) || R(t)) && "number" != typeof t[0]) { for (i = t.length, n = []; --i > -1;) n = n.concat(Y.getTweensOf(t[i], e)); for (i = n.length; --i > -1;)
                        for (r = n[i], s = i; --s > -1;) r === n[s] && n.splice(i, 1) } else if (t._gsTweenID)
                    for (n = it(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1); return n || [] }, Y.killTweensOf = Y.killDelayedCallsTo = function(t, e, i) { "object" == typeof e && (i = e, e = !1); for (var n = Y.getTweensOf(t, e), s = n.length; --s > -1;) n[s]._kill(i, t) };
            var ot = k("plugins.TweenPlugin", function(t, e) { this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = ot.prototype }, !0);
            if (c = ot.prototype, ot.version = "1.19.0", ot.API = 2, c._firstPT = null, c._addTween = X, c.setRatio = D, c._kill = function(t) { var e, i = this._overwriteProps,
                        n = this._firstPT; if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1); for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next; return !1 }, c._mod = c._roundProps = function(t) { for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next }, Y._onPluginEvent = function(t, e) { var i, n, s, r, o, a = e._firstPT; if ("_onInitAllProps" === t) { for (; a;) { for (o = a._next, n = s; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : r) ? a._prev._next = a: s = a, (a._next = n) ? n._prev = a : r = a, a = o }
                        a = e._firstPT = s } for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next; return i }, ot.activate = function(t) { for (var e = t.length; --e > -1;) t[e].API === ot.API && (U[(new t[e])._propName] = t[e]); return !0 }, x.plugin = function(t) { if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition."; var e, i = t.propName,
                        n = t.priority || 0,
                        s = t.overwriteProps,
                        r = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                        o = k("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() { ot.call(this, i, n), this._overwriteProps = s || [] }, t.global === !0),
                        a = o.prototype = new ot(i);
                    a.constructor = o, o.API = t.API; for (e in r) "function" == typeof t[e] && (a[r[e]] = t[e]); return o.version = t.version, ot.activate([o]), o }, h = i._gsQueue) { for (u = 0; u < h.length; u++) h[u](); for (c in _) _[c].func || i.console.log("GSAP encountered missing dependency: " + c) }
            f = !1
        }("undefined" != typeof t && t.exports && "undefined" != typeof i ? i : this || window, "TweenLite")
    }).call(e, function() { return this }())
}, function(t, e, i) {
    var n, s, r;
    (function(o) {
        var a = "undefined" != typeof t && t.exports && "undefined" != typeof o ? o : this || window;
        (a._gsQueue || (a._gsQueue = [])).push(function() {
                "use strict";
                a._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                    var i, n, s, r, o = function() { t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio },
                        l = a._gsDefine.globals,
                        h = {},
                        u = o.prototype = new t("css");
                    u.constructor = o, o.version = "1.20.5", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, u = "px", o.suffixMap = { top: u, right: u, bottom: u, left: u, width: u, height: u, fontSize: u, padding: u, margin: u, perspective: u, lineHeight: "" };
                    var c, d, f, p, y, g, v, m, b = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                        _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                        w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                        x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                        k = /(?:\d|\-|\+|=|#|\.)*/g,
                        S = /opacity *= *([^)]*)/i,
                        O = /opacity:([^;]*)/i,
                        P = /alpha\(opacity *=.+?\)/i,
                        T = /^(rgb|hsl)/,
                        C = /([A-Z])/g,
                        $ = /-([a-z])/gi,
                        E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                        I = function(t, e) { return e.toUpperCase() },
                        j = /(?:Left|Right|Width)/i,
                        A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                        L = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                        M = /,(?=[^\)]*(?:\(|$))/gi,
                        Y = /[\s,\(]/i,
                        R = Math.PI / 180,
                        z = 180 / Math.PI,
                        F = {},
                        V = { style: {} },
                        H = a.document || { createElement: function() { return V } },
                        N = function(t, e) { return H.createElementNS ? H.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : H.createElement(t) },
                        D = N("div"),
                        B = N("img"),
                        X = o._internals = { _specialProps: h },
                        q = (a.navigator || {}).userAgent || "",
                        U = function() { var t = q.indexOf("Android"),
                                e = N("a"); return f = q.indexOf("Safari") !== -1 && q.indexOf("Chrome") === -1 && (t === -1 || parseFloat(q.substr(t + 8, 2)) > 3), y = f && parseFloat(q.substr(q.indexOf("Version/") + 8, 2)) < 6, p = q.indexOf("Firefox") !== -1, (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(q)) && (g = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) }(),
                        W = function(t) { return S.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 },
                        Q = function(t) { a.console },
                        Z = "",
                        G = "",
                        J = function(t, e) { e = e || D; var i, n, s = e.style; if (void 0 !== s[t]) return t; for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === s[i[n] + t];); return n >= 0 ? (G = 3 === n ? "ms" : i[n], Z = "-" + G.toLowerCase() + "-", G + t) : null },
                        K = ("undefined" != typeof window ? window : H.defaultView || { getComputedStyle: function() {} }).getComputedStyle,
                        tt = o.getStyle = function(t, e, i, n, s) { var r; return U || "opacity" !== e ? (!n && t.style[e] ? r = t.style[e] : (i = i || K(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(C, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == s || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : s) : W(t) },
                        et = X.convertToPixels = function(t, i, n, s, r) { if ("px" === s || !s && "lineHeight" !== i) return n; if ("auto" === s || !n) return 0; var a, l, h, u = j.test(i),
                                c = t,
                                d = D.style,
                                f = n < 0,
                                p = 1 === n; if (f && (n = -n), p && (n *= 100), "lineHeight" !== i || s)
                                if ("%" === s && i.indexOf("border") !== -1) a = n / 100 * (u ? t.clientWidth : t.clientHeight);
                                else { if (d.cssText = "border:0 solid red;position:" + tt(t, "position") + ";line-height:0;", "%" !== s && c.appendChild && "v" !== s.charAt(0) && "rem" !== s) d[u ? "borderLeftWidth" : "borderTopWidth"] = n + s;
                                    else { if (c = t.parentNode || H.body, tt(c, "display").indexOf("flex") !== -1 && (d.position = "absolute"), l = c._gsCache, h = e.ticker.frame, l && u && l.time === h) return l.width * n / 100;
                                        d[u ? "width" : "height"] = n + s }
                                    c.appendChild(D), a = parseFloat(D[u ? "offsetWidth" : "offsetHeight"]), c.removeChild(D), u && "%" === s && o.cacheWidths !== !1 && (l = c._gsCache = c._gsCache || {}, l.time = h, l.width = a / n * 100), 0 !== a || r || (a = et(t, i, n, s, !0)) }
                            else l = K(t).lineHeight, t.style.lineHeight = n, a = parseFloat(K(t).lineHeight), t.style.lineHeight = l; return p && (a /= 100), f ? -a : a },
                        it = X.calculateOffset = function(t, e, i) { if ("absolute" !== tt(t, "position", i)) return 0; var n = "left" === e ? "Left" : "Top",
                                s = tt(t, "margin" + n, i); return t["offset" + n] - (et(t, e, parseFloat(s), s.replace(k, "")) || 0) },
                        nt = function(t, e) { var i, n, s, r = {}; if (e = e || K(t, null))
                                if (i = e.length)
                                    for (; --i > -1;) s = e[i], s.indexOf("-transform") !== -1 && Et !== s || (r[s.replace($, I)] = e.getPropertyValue(s));
                                else
                                    for (i in e) i.indexOf("Transform") !== -1 && $t !== i || (r[i] = e[i]);
                            else if (e = t.currentStyle || t.style)
                                for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace($, I)] = e[i]); return U || (r.opacity = W(t)), n = Bt(t, e, !1), r.rotation = n.rotation, r.skewX = n.skewX, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, jt && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r },
                        st = function(t, e, i, n, s) { var r, o, a, l = {},
                                h = t.style; for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (r = i[o]) || s && s[o]) && o.indexOf("Origin") === -1 && ("number" != typeof r && "string" != typeof r || (l[o] = "auto" !== r || "left" !== o && "top" !== o ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[o] || "" === e[o].replace(x, "") ? r : 0 : it(t, o), void 0 !== h[o] && (a = new bt(h, o, h[o], a)))); if (n)
                                for (o in n) "className" !== o && (l[o] = n[o]); return { difs: l, firstMPT: a } },
                        rt = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                        ot = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                        at = function(t, e, i) { if ("svg" === (t.nodeName + "").toLowerCase()) return (i || K(t))[e] || 0; if (t.getCTM && Ht(t)) return t.getBBox()[e] || 0; var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                                s = rt[e],
                                r = s.length; for (i = i || K(t, null); --r > -1;) n -= parseFloat(tt(t, "padding" + s[r], i, !0)) || 0, n -= parseFloat(tt(t, "border" + s[r] + "Width", i, !0)) || 0; return n },
                        lt = function(t, e) { if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                            null != t && "" !== t || (t = "0 0"); var i, n = t.split(" "),
                                s = t.indexOf("left") !== -1 ? "0%" : t.indexOf("right") !== -1 ? "100%" : n[0],
                                r = t.indexOf("top") !== -1 ? "0%" : t.indexOf("bottom") !== -1 ? "100%" : n[1]; if (n.length > 3 && !e) { for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(lt(n[i])); return t.join(",") } return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && (s + "").indexOf("=") === -1) && (s = "50%"), t = s + " " + r + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = s.indexOf("%") !== -1, e.oyp = r.indexOf("%") !== -1, e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(x, "")), e.oy = parseFloat(r.replace(x, "")), e.v = t), e || t },
                        ht = function(t, e) { return "function" == typeof t && (t = t(m, v)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0 },
                        ut = function(t, e) { return "function" == typeof t && (t = t(m, v)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0 },
                        ct = function(t, e, i, n) { var s, r, o, a, l, h = 1e-6; return "function" == typeof t && (t = t(m, v)), null == t ? a = e : "number" == typeof t ? a = t : (s = 360, r = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (t.indexOf("rad") === -1 ? 1 : z) - (l ? 0 : e), r.length && (n && (n[i] = e + o), t.indexOf("short") !== -1 && (o %= s, o !== o % (s / 2) && (o = o < 0 ? o + s : o - s)), t.indexOf("_cw") !== -1 && o < 0 ? o = (o + 9999999999 * s) % s - (o / s | 0) * s : t.indexOf("ccw") !== -1 && o > 0 && (o = (o - 9999999999 * s) % s - (o / s | 0) * s)), a = e + o), a < h && a > -h && (a = 0), a },
                        dt = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
                        ft = function(t, e, i) { return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0 },
                        pt = o.parseColor = function(t, e) { var i, n, s, r, o, a, l, h, u, c, d; if (t)
                                if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                                else { if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), dt[t]) i = dt[t];
                                    else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), s = t.charAt(2), r = t.charAt(3), t = "#" + n + n + s + s + r + r), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                    else if ("hsl" === t.substr(0, 3))
                                        if (i = d = t.match(b), e) { if (t.indexOf("=") !== -1) return t.match(_) } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, s = l <= .5 ? l * (a + 1) : l + a - l * a, n = 2 * l - s, i.length > 3 && (i[3] = Number(i[3])), i[0] = ft(o + 1 / 3, n, s), i[1] = ft(o, n, s), i[2] = ft(o - 1 / 3, n, s);
                                    else i = t.match(b) || dt.transparent;
                                    i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3])) }
                            else i = dt.black; return e && !d && (n = i[0] / 255, s = i[1] / 255, r = i[2] / 255, h = Math.max(n, s, r), u = Math.min(n, s, r), l = (h + u) / 2, h === u ? o = a = 0 : (c = h - u, a = l > .5 ? c / (2 - h - u) : c / (h + u), o = h === n ? (s - r) / c + (s < r ? 6 : 0) : h === s ? (r - n) / c + 2 : (n - s) / c + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i },
                        yt = function(t, e) { var i, n, s, r = t.match(gt) || [],
                                o = 0,
                                a = ""; if (!r.length) return t; for (i = 0; i < r.length; i++) n = r[i], s = t.substr(o, t.indexOf(n, o) - o), o += s.length + n.length, n = pt(n, e), 3 === n.length && n.push(1), a += s + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")"; return a + t.substr(o) },
                        gt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                    for (u in dt) gt += "|" + u + "\\b";
                    gt = new RegExp(gt + ")", "gi"), o.colorStringFilter = function(t) { var e, i = t[0] + " " + t[1];
                        gt.test(i) && (e = i.indexOf("hsl(") !== -1 || i.indexOf("hsla(") !== -1, t[0] = yt(t[0], e), t[1] = yt(t[1], e)), gt.lastIndex = 0 }, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
                    var vt = function(t, e, i, n) { if (null == t) return function(t) { return t }; var s, r = e ? (t.match(gt) || [""])[0] : "",
                                o = t.split(r).join("").match(w) || [],
                                a = t.substr(0, t.indexOf(o[0])),
                                l = ")" === t.charAt(t.length - 1) ? ")" : "",
                                h = t.indexOf(" ") !== -1 ? " " : ",",
                                u = o.length,
                                c = u > 0 ? o[0].replace(b, "") : ""; return u ? s = e ? function(t) { var e, d, f, p; if ("number" == typeof t) t += c;
                                else if (n && M.test(t)) { for (p = t.replace(M, "|").split("|"), f = 0; f < p.length; f++) p[f] = s(p[f]); return p.join(",") } if (e = (t.match(gt) || [r])[0], d = t.split(e).join("").match(w) || [], f = d.length, u > f--)
                                    for (; ++f < u;) d[f] = i ? d[(f - 1) / 2 | 0] : o[f]; return a + d.join(h) + h + e + l + (t.indexOf("inset") !== -1 ? " inset" : "") } : function(t) { var e, r, d; if ("number" == typeof t) t += c;
                                else if (n && M.test(t)) { for (r = t.replace(M, "|").split("|"), d = 0; d < r.length; d++) r[d] = s(r[d]); return r.join(",") } if (e = t.match(w) || [], d = e.length, u > d--)
                                    for (; ++d < u;) e[d] = i ? e[(d - 1) / 2 | 0] : o[d]; return a + e.join(h) + l } : function(t) { return t } },
                        mt = function(t) { return t = t.split(","),
                                function(e, i, n, s, r, o, a) { var l, h = (i + "").split(" "); for (a = {}, l = 0; l < 4; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0]; return s.parse(e, a, r, o) } },
                        bt = (X._setPluginRatio = function(t) { this.plugin.setRatio(t); for (var e, i, n, s, r, o = this.data, a = o.proxy, l = o.firstMPT, h = 1e-6; l;) e = a[l.v], l.r ? e = l.r(e) : e < h && e > -h && (e = 0), l.t[l.p] = e, l = l._next; if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod.call(this._tween, a.rotation, this.t, this._tween) : a.rotation), 1 === t || 0 === t)
                                for (l = o.firstMPT, r = 1 === t ? "e" : "b"; l;) { if (i = l.t, i.type) { if (1 === i.type) { for (s = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) s += i["xn" + n] + i["xs" + (n + 1)];
                                            i[r] = s } } else i[r] = i.s + i.xs0;
                                    l = l._next } }, function(t, e, i, n, s) { this.t = t, this.p = e, this.v = i, this.r = s, n && (n._prev = this, this._next = n) }),
                        _t = (X._parseToProxy = function(t, e, i, n, s, r) { var o, a, l, h, u, c = n,
                                d = {},
                                f = {},
                                p = i._transform,
                                y = F; for (i._transform = null, F = e, n = u = i.parse(t, e, n, s), F = y, r && (i._transform = p, c && (c._prev = null, c._prev && (c._prev._next = null))); n && n !== c;) { if (n.type <= 1 && (a = n.p, f[a] = n.s + n.c, d[a] = n.s, r || (h = new bt(n, "s", a, h, n.r), n.c = 0), 1 === n.type))
                                    for (o = n.l; --o > 0;) l = "xn" + o, a = n.p + "_" + l, f[a] = n.data[l], d[a] = n[l], r || (h = new bt(n, l, a, h, n.rxp[l]));
                                n = n._next } return { proxy: d, end: f, firstMPT: h, pt: u } }, X.CSSPropTween = function(t, e, n, s, o, a, l, h, u, c, d) { this.t = t, this.p = e, this.s = n, this.c = s, this.n = l || e, t instanceof _t || r.push(this.n), this.r = h ? "function" == typeof h ? h : Math.round : h, this.type = a || 0, u && (this.pr = u, i = !0), this.b = void 0 === c ? n : c, this.e = void 0 === d ? n + s : d, o && (this._next = o, o._prev = this) }),
                        wt = function(t, e, i, n, s, r) { var o = new _t(t, e, i, n - i, s, -1, r); return o.b = i, o.e = o.xs0 = n, o },
                        xt = o.parseComplex = function(t, e, i, n, s, r, a, l, h, u) { i = i || r || "", "function" == typeof n && (n = n(m, v)), a = new _t(t, e, 0, 0, a, u ? 2 : 1, null, !1, l, i, n), n += "", s && gt.test(n + i) && (n = [i, n], o.colorStringFilter(n), i = n[0], n = n[1]); var d, f, p, y, g, w, x, k, S, O, P, T, C, $ = i.split(", ").join(",").split(" "),
                                E = n.split(", ").join(",").split(" "),
                                I = $.length,
                                j = c !== !1; for (n.indexOf(",") === -1 && i.indexOf(",") === -1 || ((n + i).indexOf("rgb") !== -1 || (n + i).indexOf("hsl") !== -1 ? ($ = $.join(" ").replace(M, ", ").split(" "), E = E.join(" ").replace(M, ", ").split(" ")) : ($ = $.join(" ").split(",").join(", ").split(" "), E = E.join(" ").split(",").join(", ").split(" ")), I = $.length), I !== E.length && ($ = (r || "").split(" "), I = $.length), a.plugin = h, a.setRatio = u, gt.lastIndex = 0, d = 0; d < I; d++)
                                if (y = $[d], g = E[d] + "", k = parseFloat(y), k || 0 === k) a.appendXtra("", k, ht(g, k), g.replace(_, ""), !(!j || g.indexOf("px") === -1) && Math.round, !0);
                                else if (s && gt.test(y)) T = g.indexOf(")") + 1, T = ")" + (T ? g.substr(T) : ""), C = g.indexOf("hsl") !== -1 && U, O = g, y = pt(y, C), g = pt(g, C), S = y.length + g.length > 6, S && !U && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(E[d]).join("transparent")) : (U || (S = !1), C ? a.appendXtra(O.substr(0, O.indexOf("hsl")) + (S ? "hsla(" : "hsl("), y[0], ht(g[0], y[0]), ",", !1, !0).appendXtra("", y[1], ht(g[1], y[1]), "%,", !1).appendXtra("", y[2], ht(g[2], y[2]), S ? "%," : "%" + T, !1) : a.appendXtra(O.substr(0, O.indexOf("rgb")) + (S ? "rgba(" : "rgb("), y[0], g[0] - y[0], ",", Math.round, !0).appendXtra("", y[1], g[1] - y[1], ",", Math.round).appendXtra("", y[2], g[2] - y[2], S ? "," : T, Math.round), S && (y = y.length < 4 ? 1 : y[3], a.appendXtra("", y, (g.length < 4 ? 1 : g[3]) - y, T, !1))), gt.lastIndex = 0;
                            else if (w = y.match(b)) { if (x = g.match(_), !x || x.length !== w.length) return a; for (p = 0, f = 0; f < w.length; f++) P = w[f], O = y.indexOf(P, p), a.appendXtra(y.substr(p, O - p), Number(P), ht(x[f], P), "", !(!j || "px" !== y.substr(O + P.length, 2)) && Math.round, 0 === f), p = O + P.length;
                                a["xs" + a.l] += y.substr(p) } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + g : g; if (n.indexOf("=") !== -1 && a.data) { for (T = a.xs0 + a.data.s, d = 1; d < a.l; d++) T += a["xs" + d] + a.data["xn" + d];
                                a.e = T + a["xs" + d] } return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a },
                        kt = 9;
                    for (u = _t.prototype, u.l = u.pr = 0; --kt > 0;) u["xn" + kt] = 0, u["xs" + kt] = "";
                    u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function(t, e, i, n, s, r) { var o = this,
                            a = o.l; return o["xs" + a] += r && (a || o["xs" + a]) ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = s, o["xn" + a] = e, o.plugin || (o.xfirst = new _t(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, s, o.pr), o.xfirst.xs0 = 0), o) : (o.data = { s: e + i }, o.rxp = {}, o.s = e, o.c = i, o.r = s, o)) : (o["xs" + a] += e + (n || ""), o) };
                    var St = function(t, e) { e = e || {}, this.p = e.prefix ? J(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || vt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0 },
                        Ot = X._registerComplexSpecialProp = function(t, e, i) { "object" != typeof e && (e = { parser: i }); var n, s, r = t.split(","),
                                o = e.defaultValue; for (i = i || [o], n = 0; n < r.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, s = new St(r[n], e) },
                        Pt = X._registerPluginProp = function(t) { if (!h[t]) { var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                                Ot(t, { parser: function(t, i, n, s, r, o, a) { var u = l.com.greensock.plugins[e]; return u ? (u._cssRegister(), h[n].parse(t, i, n, s, r, o, a)) : (Q("Error: " + e + " js file not loaded."), r) } }) } };
                    u = St.prototype, u.parseComplex = function(t, e, i, n, s, r) { var o, a, l, h, u, c, d = this.keyword; if (this.multi && (M.test(i) || M.test(e) ? (a = e.replace(M, "|").split("|"), l = i.replace(M, "|").split("|")) : d && (a = [e], l = [i])), l) { for (h = l.length > a.length ? l.length : a.length, o = 0; o < h; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, d && (u = e.indexOf(d), c = i.indexOf(d), u !== c && (c === -1 ? a[o] = a[o].split(d).join("") : u === -1 && (a[o] += " " + d)));
                            e = a.join(", "), i = l.join(", ") } return xt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, s, r) }, u.parse = function(t, e, i, n, r, o, a) { return this.parseComplex(t.style, this.format(tt(t, this.p, s, !1, this.dflt)), this.format(e), r, o) }, o.registerSpecialProp = function(t, e, i) { Ot(t, { parser: function(t, n, s, r, o, a, l) { var h = new _t(t, s, 0, 0, o, 2, s, !1, i); return h.plugin = a, h.setRatio = e(t, n, r._tween, s), h }, priority: i }) }, o.useSVGTransformAttr = !0;
                    var Tt, Ct = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                        $t = J("transform"),
                        Et = Z + "transform",
                        It = J("transformOrigin"),
                        jt = null !== J("perspective"),
                        At = X.Transform = function() { this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(o.defaultForce3D === !1 || !jt) && (o.defaultForce3D || "auto") },
                        Lt = a.SVGElement,
                        Mt = function(t, e, i) { var n, s = H.createElementNS("http://www.w3.org/2000/svg", t),
                                r = /([a-z])([A-Z])/g; for (n in i) s.setAttributeNS(null, n.replace(r, "$1-$2").toLowerCase(), i[n]); return e.appendChild(s), s },
                        Yt = H.documentElement || {},
                        Rt = function() { var t, e, i, n = g || /Android/i.test(q) && !a.chrome; return H.createElementNS && !n && (t = Mt("svg", Yt), e = Mt("rect", t, { width: 100, height: 50, x: 100 }), i = e.getBoundingClientRect().width, e.style[It] = "50% 50%", e.style[$t] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(p && jt), Yt.removeChild(t)), n }(),
                        zt = function(t, e, i, n, s, r) { var a, l, h, u, c, d, f, p, y, g, v, m, b, _, w = t._gsTransform,
                                x = Dt(t, !0);
                            w && (b = w.xOrigin, _ = w.yOrigin), (!n || (a = n.split(" ")).length < 2) && (f = t.getBBox(), 0 === f.x && 0 === f.y && f.width + f.height === 0 && (f = { x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0, y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0, width: 0, height: 0 }), e = lt(e).split(" "), a = [(e[0].indexOf("%") !== -1 ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (e[1].indexOf("%") !== -1 ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]), i.xOrigin = u = parseFloat(a[0]), i.yOrigin = c = parseFloat(a[1]), n && x !== Nt && (d = x[0], f = x[1], p = x[2], y = x[3], g = x[4], v = x[5], m = d * y - f * p, m && (l = u * (y / m) + c * (-p / m) + (p * v - y * g) / m, h = u * (-f / m) + c * (d / m) - (d * v - f * g) / m, u = i.xOrigin = a[0] = l, c = i.yOrigin = a[1] = h)), w && (r && (i.xOffset = w.xOffset, i.yOffset = w.yOffset, w = i), s || s !== !1 && o.defaultSmoothOrigin !== !1 ? (l = u - b, h = c - _, w.xOffset += l * x[0] + h * x[2] - l, w.yOffset += l * x[1] + h * x[3] - h) : w.xOffset = w.yOffset = 0), r || t.setAttribute("data-svg-origin", a.join(" ")) },
                        Ft = function(t) { var e, i = N("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                                n = this.parentNode,
                                s = this.nextSibling,
                                r = this.style.cssText; if (Yt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try { e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ft } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox()); return s ? n.insertBefore(this, s) : n.appendChild(this), Yt.removeChild(i), this.style.cssText = r, e },
                        Vt = function(t) { try { return t.getBBox() } catch (e) { return Ft.call(t, !0) } },
                        Ht = function(t) { return !(!Lt || !t.getCTM || t.parentNode && !t.ownerSVGElement || !Vt(t)) },
                        Nt = [1, 0, 0, 1, 0, 0],
                        Dt = function(t, e) { var i, n, s, r, o, a, l = t._gsTransform || new At,
                                h = 1e5,
                                u = t.style; if ($t ? n = tt(t, Et, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(A), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !$t || !(a = !K(t) || "none" === K(t).display) && t.parentNode || (a && (r = u.display, u.display = "block"), t.parentNode || (o = 1, Yt.appendChild(t)), n = tt(t, Et, null, !0), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, r ? u.display = r : a && Wt(u, "display"), o && Yt.removeChild(t)), (l.svg || t.getCTM && Ht(t)) && (i && (u[$t] + "").indexOf("matrix") !== -1 && (n = u[$t], i = 0), s = t.getAttribute("transform"), i && s && (s = t.transform.baseVal.consolidate().matrix, n = "matrix(" + s.a + "," + s.b + "," + s.c + "," + s.d + "," + s.e + "," + s.f + ")", i = 0)), i) return Nt; for (s = (n || "").match(b) || [], kt = s.length; --kt > -1;) r = Number(s[kt]), s[kt] = (o = r - (r |= 0)) ? (o * h + (o < 0 ? -.5 : .5) | 0) / h + r : r; return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s },
                        Bt = X.getTransform = function(t, i, n, s) {
                            if (t._gsTransform && n && !s) return t._gsTransform;
                            var r, a, l, h, u, c, d = n ? t._gsTransform || new At : new At,
                                f = d.scaleX < 0,
                                p = 2e-5,
                                y = 1e5,
                                g = jt ? parseFloat(tt(t, It, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0,
                                v = parseFloat(o.defaultTransformPerspective) || 0;
                            if (d.svg = !(!t.getCTM || !Ht(t)), d.svg && (zt(t, tt(t, It, i, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")), Tt = o.useSVGTransformAttr || Rt), r = Dt(t), r !== Nt) { if (16 === r.length) { var m, b, _, w, x, k = r[0],
                                        S = r[1],
                                        O = r[2],
                                        P = r[3],
                                        T = r[4],
                                        C = r[5],
                                        $ = r[6],
                                        E = r[7],
                                        I = r[8],
                                        j = r[9],
                                        A = r[10],
                                        L = r[12],
                                        M = r[13],
                                        Y = r[14],
                                        R = r[11],
                                        F = Math.atan2($, A);
                                    d.zOrigin && (Y = -d.zOrigin, L = I * Y - r[12], M = j * Y - r[13], Y = A * Y + d.zOrigin - r[14]), d.rotationX = F * z, F && (w = Math.cos(-F), x = Math.sin(-F), m = T * w + I * x, b = C * w + j * x, _ = $ * w + A * x, I = T * -x + I * w, j = C * -x + j * w, A = $ * -x + A * w, R = E * -x + R * w, T = m, C = b, $ = _), F = Math.atan2(-O, A), d.rotationY = F * z, F && (w = Math.cos(-F), x = Math.sin(-F), m = k * w - I * x, b = S * w - j * x, _ = O * w - A * x, j = S * x + j * w, A = O * x + A * w, R = P * x + R * w, k = m, S = b, O = _), F = Math.atan2(S, k), d.rotation = F * z, F && (w = Math.cos(F), x = Math.sin(F), m = k * w + S * x, b = T * w + C * x, _ = I * w + j * x, S = S * w - k * x, C = C * w - T * x, j = j * w - I * x, k = m, T = b, I = _), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY = 180 - d.rotationY), F = Math.atan2(T, C), d.scaleX = (Math.sqrt(k * k + S * S + O * O) * y + .5 | 0) / y, d.scaleY = (Math.sqrt(C * C + $ * $) * y + .5 | 0) / y, d.scaleZ = (Math.sqrt(I * I + j * j + A * A) * y + .5 | 0) / y, k /= d.scaleX, T /= d.scaleY, S /= d.scaleX, C /= d.scaleY, Math.abs(F) > p ? (d.skewX = F * z, T = 0, "simple" !== d.skewType && (d.scaleY *= 1 / Math.cos(F))) : d.skewX = 0, d.perspective = R ? 1 / (R < 0 ? -R : R) : 0, d.x = L, d.y = M, d.z = Y, d.svg && (d.x -= d.xOrigin - (d.xOrigin * k - d.yOrigin * T), d.y -= d.yOrigin - (d.yOrigin * S - d.xOrigin * C)) } else if (!jt || s || !r.length || d.x !== r[4] || d.y !== r[5] || !d.rotationX && !d.rotationY) { var V = r.length >= 6,
                                        H = V ? r[0] : 1,
                                        N = r[1] || 0,
                                        D = r[2] || 0,
                                        B = V ? r[3] : 1;
                                    d.x = r[4] || 0, d.y = r[5] || 0, l = Math.sqrt(H * H + N * N), h = Math.sqrt(B * B + D * D), u = H || N ? Math.atan2(N, H) * z : d.rotation || 0, c = D || B ? Math.atan2(D, B) * z + u : d.skewX || 0, d.scaleX = l, d.scaleY = h, d.rotation = u, d.skewX = c, jt && (d.rotationX = d.rotationY = d.z = 0, d.perspective = v, d.scaleZ = 1), d.svg && (d.x -= d.xOrigin - (d.xOrigin * H + d.yOrigin * D), d.y -= d.yOrigin - (d.xOrigin * N + d.yOrigin * B)) }
                                Math.abs(d.skewX) > 90 && Math.abs(d.skewX) < 270 && (f ? (d.scaleX *= -1, d.skewX += d.rotation <= 0 ? 180 : -180, d.rotation += d.rotation <= 0 ? 180 : -180) : (d.scaleY *= -1, d.skewX += d.skewX <= 0 ? 180 : -180)), d.zOrigin = g; for (a in d) d[a] < p && d[a] > -p && (d[a] = 0) }
                            return n && (t._gsTransform = d, d.svg && (Tt && t.style[$t] ? e.delayedCall(.001, function() { Wt(t.style, $t) }) : !Tt && t.getAttribute("transform") && e.delayedCall(.001, function() { t.removeAttribute("transform") }))), d
                        },
                        Xt = function(t) { var e, i, n = this.data,
                                s = -n.rotation * R,
                                r = s + n.skewX * R,
                                o = 1e5,
                                a = (Math.cos(s) * n.scaleX * o | 0) / o,
                                l = (Math.sin(s) * n.scaleX * o | 0) / o,
                                h = (Math.sin(r) * -n.scaleY * o | 0) / o,
                                u = (Math.cos(r) * n.scaleY * o | 0) / o,
                                c = this.t.style,
                                d = this.t.currentStyle; if (d) { i = l, l = -h, h = -i, e = d.filter, c.filter = ""; var f, p, y = this.t.offsetWidth,
                                    v = this.t.offsetHeight,
                                    m = "absolute" !== d.position,
                                    b = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                                    _ = n.x + y * n.xPercent / 100,
                                    w = n.y + v * n.yPercent / 100; if (null != n.ox && (f = (n.oxp ? y * n.ox * .01 : n.ox) - y / 2, p = (n.oyp ? v * n.oy * .01 : n.oy) - v / 2, _ += f - (f * a + p * l), w += p - (f * h + p * u)), m ? (f = y / 2, p = v / 2, b += ", Dx=" + (f - (f * a + p * l) + _) + ", Dy=" + (p - (f * h + p * u) + w) + ")") : b += ", sizingMethod='auto expand')", e.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1 ? c.filter = e.replace(L, b) : c.filter = b + " " + e, 0 !== t && 1 !== t || 1 === a && 0 === l && 0 === h && 1 === u && (m && b.indexOf("Dx=0, Dy=0") === -1 || S.test(e) && 100 !== parseFloat(RegExp.$1) || e.indexOf(e.indexOf("Alpha")) === -1 && c.removeAttribute("filter")), !m) { var x, O, P, T = g < 8 ? 1 : -1; for (f = n.ieOffsetX || 0, p = n.ieOffsetY || 0, n.ieOffsetX = Math.round((y - ((a < 0 ? -a : a) * y + (l < 0 ? -l : l) * v)) / 2 + _), n.ieOffsetY = Math.round((v - ((u < 0 ? -u : u) * v + (h < 0 ? -h : h) * y)) / 2 + w), kt = 0; kt < 4; kt++) O = ot[kt], x = d[O], i = x.indexOf("px") !== -1 ? parseFloat(x) : et(this.t, O, parseFloat(x), x.replace(k, "")) || 0, P = i !== n[O] ? kt < 2 ? -n.ieOffsetX : -n.ieOffsetY : kt < 2 ? f - n.ieOffsetX : p - n.ieOffsetY, c[O] = (n[O] = Math.round(i - P * (0 === kt || 2 === kt ? 1 : T))) + "px" } } },
                        qt = X.set3DTransformRatio = X.setTransformRatio = function(t) { var e, i, n, s, r, o, a, l, h, u, c, d, f, y, g, v, m, b, _, w, x, k, S, O = this.data,
                                P = this.t.style,
                                T = O.rotation,
                                C = O.rotationX,
                                $ = O.rotationY,
                                E = O.scaleX,
                                I = O.scaleY,
                                j = O.scaleZ,
                                A = O.x,
                                L = O.y,
                                M = O.z,
                                Y = O.svg,
                                z = O.perspective,
                                F = O.force3D,
                                V = O.skewY,
                                H = O.skewX; if (V && (H += V, T += V), ((1 === t || 0 === t) && "auto" === F && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !F) && !M && !z && !$ && !C && 1 === j || Tt && Y || !jt) return void(T || H || Y ? (T *= R, k = H * R, S = 1e5, i = Math.cos(T) * E, r = Math.sin(T) * E, n = Math.sin(T - k) * -I, o = Math.cos(T - k) * I, k && "simple" === O.skewType && (e = Math.tan(k - V * R), e = Math.sqrt(1 + e * e), n *= e, o *= e, V && (e = Math.tan(V * R), e = Math.sqrt(1 + e * e), i *= e, r *= e)), Y && (A += O.xOrigin - (O.xOrigin * i + O.yOrigin * n) + O.xOffset, L += O.yOrigin - (O.xOrigin * r + O.yOrigin * o) + O.yOffset, Tt && (O.xPercent || O.yPercent) && (g = this.t.getBBox(), A += .01 * O.xPercent * g.width, L += .01 * O.yPercent * g.height), g = 1e-6, A < g && A > -g && (A = 0), L < g && L > -g && (L = 0)), _ = (i * S | 0) / S + "," + (r * S | 0) / S + "," + (n * S | 0) / S + "," + (o * S | 0) / S + "," + A + "," + L + ")", Y && Tt ? this.t.setAttribute("transform", "matrix(" + _) : P[$t] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix(" : "matrix(") + _) : P[$t] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + I + "," + A + "," + L + ")"); if (p && (g = 1e-4, E < g && E > -g && (E = j = 2e-5), I < g && I > -g && (I = j = 2e-5), !z || O.z || O.rotationX || O.rotationY || (z = 0)), T || H) T *= R, v = i = Math.cos(T), m = r = Math.sin(T), H && (T -= H * R, v = Math.cos(T), m = Math.sin(T), "simple" === O.skewType && (e = Math.tan((H - V) * R), e = Math.sqrt(1 + e * e), v *= e, m *= e, O.skewY && (e = Math.tan(V * R), e = Math.sqrt(1 + e * e), i *= e, r *= e))), n = -m, o = v;
                            else { if (!($ || C || 1 !== j || z || Y)) return void(P[$t] = (O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) translate3d(" : "translate3d(") + A + "px," + L + "px," + M + "px)" + (1 !== E || 1 !== I ? " scale(" + E + "," + I + ")" : ""));
                                i = o = 1, n = r = 0 }
                            u = 1, s = a = l = h = c = d = 0, f = z ? -1 / z : 0, y = O.zOrigin, g = 1e-6, w = ",", x = "0", T = $ * R, T && (v = Math.cos(T), m = Math.sin(T), l = -m, c = f * -m, s = i * m, a = r * m, u = v, f *= v, i *= v, r *= v), T = C * R, T && (v = Math.cos(T), m = Math.sin(T), e = n * v + s * m, b = o * v + a * m, h = u * m, d = f * m, s = n * -m + s * v, a = o * -m + a * v, u *= v, f *= v, n = e, o = b), 1 !== j && (s *= j, a *= j, u *= j, f *= j), 1 !== I && (n *= I, o *= I, h *= I, d *= I), 1 !== E && (i *= E, r *= E, l *= E, c *= E), (y || Y) && (y && (A += s * -y, L += a * -y, M += u * -y + y), Y && (A += O.xOrigin - (O.xOrigin * i + O.yOrigin * n) + O.xOffset, L += O.yOrigin - (O.xOrigin * r + O.yOrigin * o) + O.yOffset), A < g && A > -g && (A = x), L < g && L > -g && (L = x), M < g && M > -g && (M = 0)), _ = O.xPercent || O.yPercent ? "translate(" + O.xPercent + "%," + O.yPercent + "%) matrix3d(" : "matrix3d(", _ += (i < g && i > -g ? x : i) + w + (r < g && r > -g ? x : r) + w + (l < g && l > -g ? x : l), _ += w + (c < g && c > -g ? x : c) + w + (n < g && n > -g ? x : n) + w + (o < g && o > -g ? x : o), C || $ || 1 !== j ? (_ += w + (h < g && h > -g ? x : h) + w + (d < g && d > -g ? x : d) + w + (s < g && s > -g ? x : s), _ += w + (a < g && a > -g ? x : a) + w + (u < g && u > -g ? x : u) + w + (f < g && f > -g ? x : f) + w) : _ += ",0,0,0,0,1,0,", _ += A + w + L + w + M + w + (z ? 1 + -M / z : 1) + ")", P[$t] = _ };
                    u = At.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, Ot("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", { parser: function(t, e, i, n, r, a, l) { if (n._lastParsedTransform === l) return r;
                            n._lastParsedTransform = l; var h, u = l.scale && "function" == typeof l.scale ? l.scale : 0; "function" == typeof l[i] && (h = l[i], l[i] = e), u && (l.scale = u(m, t)); var c, d, f, p, y, g, b, _, w, x = t._gsTransform,
                                k = t.style,
                                S = 1e-6,
                                O = Ct.length,
                                P = l,
                                T = {},
                                C = "transformOrigin",
                                $ = Bt(t, s, !0, P.parseTransform),
                                E = P.transform && ("function" == typeof P.transform ? P.transform(m, v) : P.transform); if ($.skewType = P.skewType || $.skewType || o.defaultSkewType, n._transform = $, E && "string" == typeof E && $t) d = D.style, d[$t] = E, d.display = "block", d.position = "absolute", E.indexOf("%") !== -1 && (d.width = tt(t, "width"), d.height = tt(t, "height")), H.body.appendChild(D), c = Bt(D, null, !1), "simple" === $.skewType && (c.scaleY *= Math.cos(c.skewX * R)), $.svg && (g = $.xOrigin, b = $.yOrigin, c.x -= $.xOffset, c.y -= $.yOffset, (P.transformOrigin || P.svgOrigin) && (E = {}, zt(t, lt(P.transformOrigin), E, P.svgOrigin, P.smoothOrigin, !0), g = E.xOrigin, b = E.yOrigin, c.x -= E.xOffset - $.xOffset, c.y -= E.yOffset - $.yOffset), (g || b) && (_ = Dt(D, !0), c.x -= g - (g * _[0] + b * _[2]), c.y -= b - (g * _[1] + b * _[3]))), H.body.removeChild(D), c.perspective || (c.perspective = $.perspective), null != P.xPercent && (c.xPercent = ut(P.xPercent, $.xPercent)), null != P.yPercent && (c.yPercent = ut(P.yPercent, $.yPercent));
                            else if ("object" == typeof P) { if (c = { scaleX: ut(null != P.scaleX ? P.scaleX : P.scale, $.scaleX), scaleY: ut(null != P.scaleY ? P.scaleY : P.scale, $.scaleY), scaleZ: ut(P.scaleZ, $.scaleZ), x: ut(P.x, $.x), y: ut(P.y, $.y), z: ut(P.z, $.z), xPercent: ut(P.xPercent, $.xPercent), yPercent: ut(P.yPercent, $.yPercent), perspective: ut(P.transformPerspective, $.perspective) }, y = P.directionalRotation, null != y)
                                    if ("object" == typeof y)
                                        for (d in y) P[d] = y[d];
                                    else P.rotation = y;
                                    "string" == typeof P.x && P.x.indexOf("%") !== -1 && (c.x = 0, c.xPercent = ut(P.x, $.xPercent)), "string" == typeof P.y && P.y.indexOf("%") !== -1 && (c.y = 0, c.yPercent = ut(P.y, $.yPercent)), c.rotation = ct("rotation" in P ? P.rotation : "shortRotation" in P ? P.shortRotation + "_short" : "rotationZ" in P ? P.rotationZ : $.rotation, $.rotation, "rotation", T), jt && (c.rotationX = ct("rotationX" in P ? P.rotationX : "shortRotationX" in P ? P.shortRotationX + "_short" : $.rotationX || 0, $.rotationX, "rotationX", T), c.rotationY = ct("rotationY" in P ? P.rotationY : "shortRotationY" in P ? P.shortRotationY + "_short" : $.rotationY || 0, $.rotationY, "rotationY", T)), c.skewX = ct(P.skewX, $.skewX), c.skewY = ct(P.skewY, $.skewY) } for (jt && null != P.force3D && ($.force3D = P.force3D, p = !0), f = $.force3D || $.z || $.rotationX || $.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, f || null == P.scale || (c.scaleZ = 1); --O > -1;) w = Ct[O], E = c[w] - $[w], (E > S || E < -S || null != P[w] || null != F[w]) && (p = !0, r = new _t($, w, $[w], E, r), w in T && (r.e = T[w]), r.xs0 = 0, r.plugin = a, n._overwriteProps.push(r.n)); return E = P.transformOrigin, $.svg && (E || P.svgOrigin) && (g = $.xOffset, b = $.yOffset, zt(t, lt(E), c, P.svgOrigin, P.smoothOrigin), r = wt($, "xOrigin", (x ? $ : c).xOrigin, c.xOrigin, r, C), r = wt($, "yOrigin", (x ? $ : c).yOrigin, c.yOrigin, r, C), g === $.xOffset && b === $.yOffset || (r = wt($, "xOffset", x ? g : $.xOffset, $.xOffset, r, C), r = wt($, "yOffset", x ? b : $.yOffset, $.yOffset, r, C)), E = "0px 0px"), (E || jt && f && $.zOrigin) && ($t ? (p = !0, w = It, E = (E || tt(t, w, s, !1, "50% 50%")) + "", r = new _t(k, w, 0, 0, r, -1, C), r.b = k[w], r.plugin = a, jt ? (d = $.zOrigin, E = E.split(" "), $.zOrigin = (E.length > 2 && (0 === d || "0px" !== E[2]) ? parseFloat(E[2]) : d) || 0, r.xs0 = r.e = E[0] + " " + (E[1] || "50%") + " 0px", r = new _t($, "zOrigin", 0, 0, r, -1, r.n), r.b = d, r.xs0 = r.e = $.zOrigin) : r.xs0 = r.e = E) : lt(E + "", $)), p && (n._transformType = $.svg && Tt || !f && 3 !== this._transformType ? 2 : 3), h && (l[i] = h), u && (l.scale = u), r }, prefix: !0 }), Ot("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), Ot("borderRadius", { defaultValue: "0px", parser: function(t, e, i, r, o, a) { e = this.format(e); var l, h, u, c, d, f, p, y, g, v, m, b, _, w, x, k, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                O = t.style; for (g = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < S.length; h++) this.p.indexOf("border") && (S[h] = J(S[h])), d = c = tt(t, S[h], s, !1, "0px"), d.indexOf(" ") !== -1 && (c = d.split(" "), d = c[0], c = c[1]), f = u = l[h], p = parseFloat(d), b = d.substr((p + "").length), _ = "=" === f.charAt(1), _ ? (y = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), y *= parseFloat(f), m = f.substr((y + "").length - (y < 0 ? 1 : 0)) || "") : (y = parseFloat(f), m = f.substr((y + "").length)), "" === m && (m = n[i] || b), m !== b && (w = et(t, "borderLeft", p, b), x = et(t, "borderTop", p, b), "%" === m ? (d = w / g * 100 + "%", c = x / v * 100 + "%") : "em" === m ? (k = et(t, "borderLeft", 1, "em"), d = w / k + "em", c = x / k + "em") : (d = w + "px", c = x + "px"), _ && (f = parseFloat(d) + y + m, u = parseFloat(c) + y + m)), o = xt(O, S[h], d + " " + c, f + " " + u, !1, "0px", o); return o }, prefix: !0, formatter: vt("0px 0px 0px 0px", !1, !0) }), Ot("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function(t, e, i, n, r, o) { return xt(t.style, i, this.format(tt(t, i, s, !1, "0px 0px")), this.format(e), !1, "0px", r) }, prefix: !0, formatter: vt("0px 0px", !1, !0) }), Ot("backgroundPosition", { defaultValue: "0 0", parser: function(t, e, i, n, r, o) { var a, l, h, u, c, d, f = "background-position",
                                p = s || K(t, null),
                                y = this.format((p ? g ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                                v = this.format(e); if (y.indexOf("%") !== -1 != (v.indexOf("%") !== -1) && v.split(",").length < 2 && (d = tt(t, "backgroundImage").replace(E, ""), d && "none" !== d)) { for (a = y.split(" "), l = v.split(" "), B.setAttribute("src", d), h = 2; --h > -1;) y = a[h], u = y.indexOf("%") !== -1, u !== (l[h].indexOf("%") !== -1) && (c = 0 === h ? t.offsetWidth - B.width : t.offsetHeight - B.height, a[h] = u ? parseFloat(y) / 100 * c + "px" : parseFloat(y) / c * 100 + "%");
                                y = a.join(" ") } return this.parseComplex(t.style, y, v, r, o) }, formatter: lt }), Ot("backgroundSize", { defaultValue: "0 0", formatter: function(t) { return t += "", "co" === t.substr(0, 2) ? t : lt(t.indexOf(" ") === -1 ? t + " " + t : t) } }), Ot("perspective", { defaultValue: "0px", prefix: !0 }), Ot("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), Ot("transformStyle", { prefix: !0 }), Ot("backfaceVisibility", { prefix: !0 }), Ot("userSelect", { prefix: !0 }), Ot("margin", { parser: mt("marginTop,marginRight,marginBottom,marginLeft") }), Ot("padding", { parser: mt("paddingTop,paddingRight,paddingBottom,paddingLeft") }), Ot("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function(t, e, i, n, r, o) { var a, l, h; return g < 9 ? (l = t.currentStyle, h = g < 8 ? " " : ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(tt(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, r, o) } }), Ot("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), Ot("autoRound,strictUnits", { parser: function(t, e, i, n, s) { return s } }), Ot("border", { defaultValue: "0px solid #000", parser: function(t, e, i, n, r, o) { var a = tt(t, "borderTopWidth", s, !1, "0px"),
                                l = this.format(e).split(" "),
                                h = l[0].replace(k, ""); return "px" !== h && (a = parseFloat(a) / et(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(a + " " + tt(t, "borderTopStyle", s, !1, "solid") + " " + tt(t, "borderTopColor", s, !1, "#000")), l.join(" "), r, o) }, color: !0, formatter: function(t) { var e = t.split(" "); return e[0] + " " + (e[1] || "solid") + " " + (t.match(gt) || ["#000"])[0] } }), Ot("borderWidth", { parser: mt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), Ot("float,cssFloat,styleFloat", { parser: function(t, e, i, n, s, r) { var o = t.style,
                                a = "cssFloat" in o ? "cssFloat" : "styleFloat"; return new _t(o, a, 0, 0, s, -1, i, !1, 0, o[a], e) } });
                    var Ut = function(t) { var e, i = this.t,
                            n = i.filter || tt(this.data, "filter") || "",
                            s = this.s + this.c * t | 0;
                        100 === s && (n.indexOf("atrix(") === -1 && n.indexOf("radient(") === -1 && n.indexOf("oader(") === -1 ? (i.removeAttribute("filter"), e = !tt(this.data, "filter")) : (i.filter = n.replace(P, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"), n.indexOf("pacity") === -1 ? 0 === s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace(S, "opacity=" + s)) };
                    Ot("opacity,alpha,autoAlpha", { defaultValue: "1", parser: function(t, e, i, n, r, o) { var a = parseFloat(tt(t, "opacity", s, !1, "1")),
                                l = t.style,
                                h = "autoAlpha" === i; return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), h && 1 === a && "hidden" === tt(t, "visibility", s) && 0 !== e && (a = 0), U ? r = new _t(l, "opacity", a, e - a, r) : (r = new _t(l, "opacity", 100 * a, 100 * (e - a), r), r.xn1 = h ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = o, r.setRatio = Ut), h && (r = new _t(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), r.xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r } });
                    var Wt = function(t, e) { e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(C, "-$1").toLowerCase())) : t.removeAttribute(e)) },
                        Qt = function(t) { if (this.t._gsClassPT = this, 1 === t || 0 === t) { this.t.setAttribute("class", 0 === t ? this.b : this.e); for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Wt(i, e.p), e = e._next;
                                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null) } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e) };
                    Ot("className", { parser: function(t, e, n, r, o, a, l) { var h, u, c, d, f, p = t.getAttribute("class") || "",
                                y = t.style.cssText; if (o = r._classNamePT = new _t(t, n, 0, 0, o, 2), o.setRatio = Qt, o.pr = -11, i = !0, o.b = p, u = nt(t, s), c = t._gsClassPT) { for (d = {}, f = c.data; f;) d[f.p] = 1, f = f._next;
                                c.setRatio(1) } return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), h = st(t, u, nt(t), l, d), t.setAttribute("class", p), o.data = h.firstMPT, t.style.cssText = y, o = o.xfirst = r.parse(t, h.difs, o, a) } });
                    var Zt = function(t) { if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) { var e, i, n, s, r, o = this.t.style,
                                a = h.transform.parse; if ("all" === this.e) o.cssText = "", s = !0;
                            else
                                for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], h[i] && (h[i].parse === a ? s = !0 : i = "transformOrigin" === i ? It : h[i].p), Wt(o, i);
                            s && (Wt(o, $t), r = this.t._gsTransform, r && (r.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform)) } };
                    for (Ot("clearProps", { parser: function(t, e, n, s, r) { return r = new _t(t, n, 0, 0, r, 2), r.setRatio = Zt, r.e = e, r.pr = -10, r.data = s._tween, i = !0, r } }), u = "bezier,throwProps,physicsProps,physics2D".split(","), kt = u.length; kt--;) Pt(u[kt]);
                    u = o.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function(t, e, a, l) { if (!t.nodeType) return !1;
                        this._target = v = t, this._tween = a, this._vars = e, m = l, c = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, s = K(t, ""), r = this._overwriteProps; var u, p, g, b, _, w, x, k, S, P = t.style; if (d && "" === P.zIndex && (u = tt(t, "zIndex", s), "auto" !== u && "" !== u || this._addLazySet(P, "zIndex", 0)), "string" == typeof e && (b = P.cssText, u = nt(t, s), P.cssText = b + ";" + e, u = st(t, u, nt(t)).difs, !U && O.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, P.cssText = b), e.className ? this._firstPT = p = h.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = p = this.parse(t, e, null), this._transformType) { for (S = 3 === this._transformType, $t ? f && (d = !0, "" === P.zIndex && (x = tt(t, "zIndex", s), "auto" !== x && "" !== x || this._addLazySet(P, "zIndex", 0)), y && this._addLazySet(P, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : P.zoom = 1, g = p; g && g._next;) g = g._next;
                            k = new _t(t, "transform", 0, 0, null, 2), this._linkCSSP(k, null, g), k.setRatio = $t ? qt : Xt, k.data = this._transform || Bt(t, s, !0), k.tween = a, k.pr = -1, r.pop() } if (i) { for (; p;) { for (w = p._next, g = b; g && g.pr > p.pr;) g = g._next;
                                (p._prev = g ? g._prev : _) ? p._prev._next = p: b = p, (p._next = g) ? g._prev = p : _ = p, p = w }
                            this._firstPT = b } return !0 }, u.parse = function(t, e, i, r) { var o, a, l, u, d, f, p, y, g, b, _ = t.style; for (o in e) { if (f = e[o], "function" == typeof f && (f = f(m, v)), a = h[o]) i = a.parse(t, f, o, this, i, r, e);
                            else { if ("--" === o.substr(0, 2)) { this._tween._propLookup[o] = this._addTween.call(this._tween, t.style, "setProperty", K(t).getPropertyValue(o) + "", f + "", o, !1, o); continue }
                                d = tt(t, o, s) + "", g = "string" == typeof f, "color" === o || "fill" === o || "stroke" === o || o.indexOf("Color") !== -1 || g && T.test(f) ? (g || (f = pt(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = xt(_, o, d, f, !0, "transparent", i, 0, r)) : g && Y.test(f) ? i = xt(_, o, d, f, !0, null, i, 0, r) : (l = parseFloat(d), p = l || 0 === l ? d.substr((l + "").length) : "", "" !== d && "auto" !== d || ("width" === o || "height" === o ? (l = at(t, o, s), p = "px") : "left" === o || "top" === o ? (l = it(t, o, s), p = "px") : (l = "opacity" !== o ? 0 : 1, p = "")), b = g && "=" === f.charAt(1), b ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), y = f.replace(k, "")) : (u = parseFloat(f), y = g ? f.replace(k, "") : ""), "" === y && (y = o in n ? n[o] : p), f = u || 0 === u ? (b ? u + l : u) + y : e[o], p !== y && ("" === y && "lineHeight" !== o || (u || 0 === u) && l && (l = et(t, o, l, p), "%" === y ? (l /= et(t, o, 100, "%") / 100, e.strictUnits !== !0 && (d = l + "%")) : "em" === y || "rem" === y || "vw" === y || "vh" === y ? l /= et(t, o, 1, y) : "px" !== y && (u = et(t, o, u, y), y = "px"), b && (u || 0 === u) && (f = u + l + y))), b && (u += l), !l && 0 !== l || !u && 0 !== u ? void 0 !== _[o] && (f || f + "" != "NaN" && null != f) ? (i = new _t(_, o, u || l || 0, 0, i, -1, o, !1, 0, d, f), i.xs0 = "none" !== f || "display" !== o && o.indexOf("Style") === -1 ? f : d) : Q("invalid " + o + " tween value: " + e[o]) : (i = new _t(_, o, l, u - l, i, 0, o, c !== !1 && ("px" === y || "zIndex" === o), 0, d, f), i.xs0 = y)) }
                            r && i && !i.plugin && (i.plugin = r) } return i }, u.setRatio = function(t) { var e, i, n, s = this._firstPT,
                            r = 1e-6; if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                            if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                                for (; s;) { if (e = s.c * t + s.s, s.r ? e = s.r(e) : e < r && e > -r && (e = 0), s.type)
                                        if (1 === s.type)
                                            if (n = s.l, 2 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                            else if (3 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                    else if (4 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                    else if (5 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                    else { for (i = s.xs0 + e + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                        s.t[s.p] = i } else s.type === -1 ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                                    else s.t[s.p] = e + s.xs0;
                                    s = s._next } else
                                    for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
                            else
                                for (; s;) { if (2 !== s.type)
                                        if (s.r && s.type !== -1)
                                            if (e = s.r(s.s + s.c), s.type) { if (1 === s.type) { for (n = s.l, i = s.xs0 + e + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                                    s.t[s.p] = i } } else s.t[s.p] = e + s.xs0;
                                    else s.t[s.p] = s.e;
                                    else s.setRatio(t);
                                    s = s._next } }, u._enableTransforms = function(t) { this._transform = this._transform || Bt(this._target, s, !0), this._transformType = this._transform.svg && Tt || !t && 3 !== this._transformType ? 2 : 3 };
                    var Gt = function(t) { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0) };
                    u._addLazySet = function(t, e, i) { var n = this._firstPT = new _t(t, e, 0, 0, this._firstPT, 2);
                        n.e = i, n.setRatio = Gt, n.data = this }, u._linkCSSP = function(t, e, i, n) { return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t }, u._mod = function(t) { for (var e = this._firstPT; e;) "function" == typeof t[e.p] && (e.r = t[e.p]), e = e._next }, u._kill = function(e) { var i, n, s, r = e; if (e.autoAlpha || e.alpha) { r = {}; for (n in e) r[n] = e[n];
                            r.opacity = 1, r.autoAlpha && (r.visibility = 1) } for (e.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next; return t.prototype._kill.call(this, r) };
                    var Jt = function(t, e, i) { var n, s, r, o; if (t.slice)
                            for (s = t.length; --s > -1;) Jt(t[s], e, i);
                        else
                            for (n = t.childNodes, s = n.length; --s > -1;) r = n[s], o = r.type, r.style && (e.push(nt(r)), i && i.push(r)), 1 !== o && 9 !== o && 11 !== o || !r.childNodes.length || Jt(r, e, i) };
                    return o.cascadeTo = function(t, i, n) { var s, r, o, a, l = e.to(t, i, n),
                            h = [l],
                            u = [],
                            c = [],
                            d = [],
                            f = e._internals.reservedProps; for (t = l._targets || l.target, Jt(t, u, d), l.render(i, !0, !0), Jt(t, c), l.render(0, !0, !0), l._enabled(!0), s = d.length; --s > -1;)
                            if (r = st(d[s], u[s], c[s]), r.firstMPT) { r = r.difs; for (o in n) f[o] && (r[o] = n[o]);
                                a = {}; for (o in r) a[o] = u[s][o];
                                h.push(e.fromTo(d[s], i, a, r)) }
                        return h }, t.activate([o]), o
                }, !0)
            }), a._gsDefine && a._gsQueue.pop()(),
            function(o) { "use strict"; var l = function() { return (a.GreenSockGlobals || a)[o] }; "undefined" != typeof t && t.exports ? (i(4), t.exports = l()) : (s = [i(4)], n = l, r = "function" == typeof n ? n.apply(e, s) : n, !(void 0 !== r && (t.exports = r))) }("CSSPlugin")
    }).call(e, function() { return this }())
}, function(t, e, i) { var n, s, r;
    (function(o) { var a = "undefined" != typeof t && t.exports && "undefined" != typeof o ? o : this || window;
        (a._gsQueue || (a._gsQueue = [])).push(function() { "use strict";
                a._gsDefine("easing.Back", ["easing.Ease"], function(t) { var e, i, n, s, r = a.GreenSockGlobals || a,
                        o = r.com.greensock,
                        l = 2 * Math.PI,
                        h = Math.PI / 2,
                        u = o._class,
                        c = function(e, i) { var n = u("easing." + e, function() {}, !0),
                                s = n.prototype = new t; return s.constructor = n, s.getRatio = i, n },
                        d = t.register || function() {},
                        f = function(t, e, i, n, s) { var r = u("easing." + t, { easeOut: new e, easeIn: new i, easeInOut: new n }, !0); return d(r, t), r },
                        p = function(t, e, i) { this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t) },
                        y = function(e, i) { var n = u("easing." + e, function(t) { this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1 }, !0),
                                s = n.prototype = new t; return s.constructor = n, s.getRatio = i, s.config = function(t) { return new n(t) }, n },
                        g = f("Back", y("BackOut", function(t) { return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1 }), y("BackIn", function(t) { return t * t * ((this._p1 + 1) * t - this._p1) }), y("BackInOut", function(t) { return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2) })),
                        v = u("easing.SlowMo", function(t, e, i) { e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0 }, !0),
                        m = v.prototype = new t; return m.constructor = v, m.getRatio = function(t) { var e = t + (.5 - t) * this._p; return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e }, v.ease = new v(.7, .7), m.config = v.config = function(t, e, i) { return new v(t, e, i) }, e = u("easing.SteppedEase", function(t, e) { t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0 }, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function(t) { return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1 }, m.config = e.config = function(t, i) { return new e(t, i) }, i = u("easing.ExpoScaleEase", function(t, e, i) { this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i }, !0), m = i.prototype = new t, m.constructor = i, m.getRatio = function(t) { return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2 }, m.config = i.config = function(t, e, n) { return new i(t, e, n) }, n = u("easing.RoughEase", function(e) { e = e || {}; for (var i, n, s, r, o, a, l = e.taper || "none", h = [], u = 0, c = 0 | (e.points || 20), d = c, f = e.randomize !== !1, y = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --d > -1;) i = f ? Math.random() : 1 / c * d, n = g ? g.getRatio(i) : i, "none" === l ? s = v : "out" === l ? (r = 1 - i, s = r * r * v) : "in" === l ? s = i * i * v : i < .5 ? (r = 2 * i, s = r * r * .5 * v) : (r = 2 * (1 - i), s = r * r * .5 * v), f ? n += Math.random() * s - .5 * s : d % 2 ? n += .5 * s : n -= .5 * s, y && (n > 1 ? n = 1 : n < 0 && (n = 0)), h[u++] = { x: i, y: n }; for (h.sort(function(t, e) { return t.x - e.x }), a = new p(1, 1, null), d = c; --d > -1;) o = h[d], a = new p(o.x, o.y, a);
                        this._prev = new p(0, 0, 0 !== a.t ? a : a.next) }, !0), m = n.prototype = new t, m.constructor = n, m.getRatio = function(t) { var e = this._prev; if (t > e.t) { for (; e.next && t >= e.t;) e = e.next;
                            e = e.prev } else
                            for (; e.prev && t <= e.t;) e = e.prev; return this._prev = e, e.v + (t - e.t) / e.gap * e.c }, m.config = function(t) { return new n(t) }, n.ease = new n, f("Bounce", c("BounceOut", function(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }), c("BounceIn", function(t) { return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }), c("BounceInOut", function(t) { var e = t < .5; return t = e ? 1 - 2 * t : 2 * t - 1, t < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5 })), f("Circ", c("CircOut", function(t) { return Math.sqrt(1 - (t -= 1) * t) }), c("CircIn", function(t) { return -(Math.sqrt(1 - t * t) - 1) }), c("CircInOut", function(t) { return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) })), s = function(e, i, n) { var s = u("easing." + e, function(t, e) { this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (t < 1 ? t : 1), this._p3 = this._p2 / l * (Math.asin(1 / this._p1) || 0), this._p2 = l / this._p2 }, !0),
                            r = s.prototype = new t; return r.constructor = s, r.getRatio = i, r.config = function(t, e) { return new s(t, e) }, s }, f("Elastic", s("ElasticOut", function(t) { return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1 }, .3), s("ElasticIn", function(t) { return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) }, .3), s("ElasticInOut", function(t) { return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1 }, .45)), f("Expo", c("ExpoOut", function(t) { return 1 - Math.pow(2, -10 * t) }), c("ExpoIn", function(t) { return Math.pow(2, 10 * (t - 1)) - .001 }), c("ExpoInOut", function(t) { return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1))) })), f("Sine", c("SineOut", function(t) { return Math.sin(t * h) }), c("SineIn", function(t) { return -Math.cos(t * h) + 1 }), c("SineInOut", function(t) { return -.5 * (Math.cos(Math.PI * t) - 1) })), u("easing.EaseLookup", { find: function(e) { return t.map[e] } }, !0), d(r.SlowMo, "SlowMo", "ease,"), d(n, "RoughEase", "ease,"), d(e, "SteppedEase", "ease,"), g }, !0) }), a._gsDefine && a._gsQueue.pop()(),
            function() { "use strict"; var o = function() { return a.GreenSockGlobals || a }; "undefined" != typeof t && t.exports ? (i(4), t.exports = o()) : (s = [i(4)], n = o, r = "function" == typeof n ? n.apply(e, s) : n, !(void 0 !== r && (t.exports = r))) }() }).call(e, function() { return this }()) }, function(t, e, i) {
    (function(t, n) {
        "use strict";

        function s(t) { return t && t.__esModule ? t : { default: t } }

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            a = i(9),
            l = s(a),
            h = i(10),
            u = s(h),
            c = i(13),
            d = s(c),
            f = i(31),
            p = s(f),
            y = i(32),
            g = s(y),
            v = i(36),
            m = s(v),
            b = i(37),
            _ = s(b),
            w = function() {
                function e() { r(this, e), this.title = d.default.title, this.config = d.default, this.navLayerY = 0, this._navLayerY = 0, this.nextEase = .05, this.hasNextHidden = !0, this.navigate = !1, this.timelinelNav = !1, this.window = t(window), this.html = t("html"), this.body = t(document.body), this.document = t(document), this.container = t("#main"), this.$intro = t("#intro"), this.$navLayer = t("#nav-layer"), this.$navLayerLogo = this.$navLayer.find(".logo"), this.$navLayerLoader = this.$navLayer.find(".loader"), this.device = this.html.attr("data-device"), this.isSafari = this.body.hasClass("is-safari"), this.sucksBrowser = void 0 !== window.safari || this.body.hasClass("ie"), this._onUpdate = new n.Signal, this._onResize = new n.Signal, this.handlers = { hasViewAnimatedIn: this.hasViewAnimatedIn.bind(this) } }
                return o(e, [{ key: "init", value: function() { this.router = new p.default, this.viewController = new _.default, this.header = new g.default("#header"), this.footer = new m.default("#footer"), this.$intro.length && (this.intro = new u.default(this.$intro)), this.resize(), this.bind() } }, { key: "bind", value: function() { this.window.on("resize", this.resize.bind(this)), this.viewController._viewAnimatedIn.add(this.onViewAnimatedIn.bind(this)) } }, { key: "onViewAnimatedIn", value: function() { var t = this;
                        this.header.onCloseTimelineClick(), this.viewController.currentView._isAnimatedIn.add(this.handlers.hasViewAnimatedIn), "year" !== this.viewController.currentView.id && "not-found" !== this.viewController.currentView.id || this.timelinelNav || setTimeout(function() { t._navLayerY = t.navLayerY = 2 * -window.innerHeight }, 0) } }, { key: "hasViewAnimatedIn", value: function() { this.viewController.currentView._isAnimatedIn.remove(this.handlers.hasViewAnimatedIn), this._navLayerY = this.navLayerY = 0, this.$navLayer.removeClass("animated").addClass("hidden"), this.navigate = this.goToNext = !1, this.timelinelNav = !1 } }, {
                    key: "update",
                    value: function() {
                        this._onUpdate.dispatch();
                        var t = this.viewController.currentView.height - this.h;
                        if (!this.viewController.currentView.y || this.navigate || app.header.isOpen || this.viewController.currentView.disableNext || (this.goToNext ? (this._navLayerY = -this.h, (this.navLayerY - .5 | 0) !== -this.h || this.navigate || (this.viewController.currentView.goToNextPage(), this.$navLayer.addClass("animated"), this.navigate = !0)) : (-this.viewController.currentView.y + .5 | 0) < t ? (this._navLayerY = 0, this.hasNextHidden || (this.$navLayer.addClass("hidden"), this.hasNextHidden = !0)) : (-this.viewController.currentView.y + .5 | 0) >= t && (this._navLayerY = this.sucksBrowser ? 6 * -this.viewController.currentView._deltaY : -this.viewController.currentView._deltaY, this.hasNextHidden && (this.$navLayer.removeClass("hidden"), this.hasNextHidden = !1)), !this.animate && this.navLayerY < -40 && (this.viewController.currentView.scrollLocked = this.goToNext = !0, this._navLayerY = -this.h, this.nextEase = .1)), this.navLayerY += (this._navLayerY - this.navLayerY) * this.nextEase, this.navLayerY = (1e3 * this.navLayerY | 0) / 1e3, this.$navLayer.length) {
                            l.default.transform(this.$navLayer[0], "translate3d(0, " + this.navLayerY + "px, 0)");
                            var e = this.navLayerY < -this.h ? -this.h : this.navLayerY;
                            l.default.transform(this.$navLayerLogo[0], "translate3d(0, " + (this.h / 2 + e / 2) + "px, 0)"),
                                l.default.transform(this.$navLayerLoader[0], "translate3d(0, " + (this.h + e) + "px, 0)")
                        }
                    }
                }, { key: "resize", value: function() { this.w = this.window.width(), this.h = this.window.height(), this._onResize.dispatch() } }]), e
            }();
        e.default = w
    }).call(e, i(1), i(8))
}, function(t, e, i) { var n;! function(s) {
        function r(t, e, i, n, s) { this._listener = e, this._isOnce = i, this.context = n, this._signal = t, this._priority = s || 0 }

        function o(t, e) { if ("function" != typeof t) throw new Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", e)) }

        function a() { this._bindings = [], this._prevParams = null; var t = this;
            this.dispatch = function() { a.prototype.dispatch.apply(t, arguments) } }
        r.prototype = { active: !0, params: null, execute: function(t) { var e, i; return this.active && this._listener && (i = this.params ? this.params.concat(t) : t, e = this._listener.apply(this.context, i), this._isOnce && this.detach()), e }, detach: function() { return this.isBound() ? this._signal.remove(this._listener, this.context) : null }, isBound: function() { return !!this._signal && !!this._listener }, isOnce: function() { return this._isOnce }, getListener: function() { return this._listener }, getSignal: function() { return this._signal }, _destroy: function() { delete this._signal, delete this._listener, delete this.context }, toString: function() { return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]" } }, a.prototype = { VERSION: "1.0.0", memorize: !1, _shouldPropagate: !0, active: !0, _registerListener: function(t, e, i, n) { var s, o = this._indexOfListener(t, i); if (o !== -1) { if (s = this._bindings[o], s.isOnce() !== e) throw new Error("You cannot add" + (e ? "" : "Once") + "() then add" + (e ? "Once" : "") + "() the same listener without removing the relationship first.") } else s = new r(this, t, e, i, n), this._addBinding(s); return this.memorize && this._prevParams && s.execute(this._prevParams), s }, _addBinding: function(t) { var e = this._bindings.length;
                do --e; while (this._bindings[e] && t._priority <= this._bindings[e]._priority);
                this._bindings.splice(e + 1, 0, t) }, _indexOfListener: function(t, e) { for (var i, n = this._bindings.length; n--;)
                    if (i = this._bindings[n], i._listener === t && i.context === e) return n;
                return -1 }, has: function(t, e) { return this._indexOfListener(t, e) !== -1 }, add: function(t, e, i) { return o(t, "add"), this._registerListener(t, !1, e, i) }, addOnce: function(t, e, i) { return o(t, "addOnce"), this._registerListener(t, !0, e, i) }, remove: function(t, e) { o(t, "remove"); var i = this._indexOfListener(t, e); return i !== -1 && (this._bindings[i]._destroy(), this._bindings.splice(i, 1)), t }, removeAll: function() { for (var t = this._bindings.length; t--;) this._bindings[t]._destroy();
                this._bindings.length = 0 }, getNumListeners: function() { return this._bindings.length }, halt: function() { this._shouldPropagate = !1 }, dispatch: function(t) { if (this.active) { var e, i = Array.prototype.slice.call(arguments),
                        n = this._bindings.length; if (this.memorize && (this._prevParams = i), n) { e = this._bindings.slice(), this._shouldPropagate = !0;
                        do n--; while (e[n] && this._shouldPropagate && e[n].execute(i) !== !1) } } }, forget: function() { this._prevParams = null }, dispose: function() { this.removeAll(), delete this._bindings, delete this._prevParams }, toString: function() { return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]" } }; var l = a;
        l.Signal = a, n = function() { return l }.call(e, i, e, t), !(void 0 !== n && (t.exports = n)) }(this) }, function(t, e) { "use strict";

    function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(e, "__esModule", { value: !0 }); var n = function() {
            function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
        s = function() {
            function t() { i(this, t), this.vendors = { Webkit: "webkit", Moz: "moz", O: "o" }, this.prefix = "" } return n(t, [{ key: "init", value: function() { var e = document.createElement("div"); if (void 0 !== e.style.transitionProperty) this.prefix = "";
                    else
                        for (var i in this.vendors)
                            if (void 0 !== e.style[i + "TransitionProperty"]) return t.prefix = "-" + i.toLowerCase() + "-", !1;
                    e = null } }], [{ key: "transform", value: function(t, e) { t && (t.style.transform = e, t.style.webkitTransform = e, t.style.mozTransform = e) } }, { key: "transformOrigin", value: function(t, e) { t && (t.style.transformOrigin = e, t.style.webkitTransformOrigin = e, t.style.mozTransformOrigin = e) } }, { key: "transition", value: function(t, e) { t && (t.style.transition = e, t.style.webkitTransition = e, t.style.mozTransition = e) } }, { key: "getMatrix", value: function(t) { var e = window.getComputedStyle(t, null),
                        i = e.getPropertyValue("transform") || e.getPropertyValue("-webkit-transform") || e.getPropertyValue("-moz-transform") || e.getPropertyValue("-ms-transform") || e.getPropertyValue("-o-transform"),
                        n = /^\w*\((((\d+)|(\d*\.\d+)),\s*)*((\d+)|(\d*\.\d+))\)/i,
                        s = []; if (n.test(i)) { var r = i.replace(/^\w*\(/, "").replace(")", "");
                        s = r.split(/\s*,\s*/) } return s } }]), t }();
    e.default = s }, function(t, e, i) { "use strict";

    function n(t) { return t && t.__esModule ? t : { default: t } }

    function s(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(e, "__esModule", { value: !0 }); var r = function() {
            function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
        o = i(11),
        a = n(o),
        l = i(12),
        h = n(l),
        u = function() {
            function t(e) { s(this, t), this.domElem = e, this.isSkipped = !1, this.init() } return r(t, [{ key: "init", value: function() { this.setSelectors(), this.bind() } }, { key: "setSelectors", value: function() { this.$videoWrapper = this.domElem.find(".video-wrapper"), this.$video = this.$videoWrapper.find("video"), this.$skip = this.$videoWrapper.find("a"), this.$logo = this.domElem.find(".logo"), this.$circle = this.$logo.find(".circle"), this.$backgrounds = this.domElem.find(".background"), this.$background = this.domElem.find(".background.yellow") } }, { key: "bind", value: function() { app._onResize.add(this.resize, this), app._onUpdate.add(this.update, this), this.video = new h.default(this.$video[0], { togglePlay: !1, load: !0, playsinline: !0 }), this.video._onEnd.add(this.onSkipVideo.bind(this)), app.viewController.currentView._isAnimatedIn.add(this.onViewAnimatedIn, this), this.$skip.on("click", this.onSkipVideo.bind(this)), this.$background.on("transitionend", this.video.play.bind(this.video)) } }, { key: "unbind", value: function() { app._onResize.remove(this.resize, this), app._onUpdate.remove(this.update, this), app.viewController.currentView._isAnimatedIn.remove(this.onViewAnimatedIn, this), this.$skip.off("click"), this.$background.off("transitionend") } }, { key: "onViewAnimatedIn", value: function(t) { this._y = this.y = 0, window.scrollTo(0, 0); for (var e = this.$backgrounds.length - 1; e >= 0; e--) this.$backgrounds[e].style = "";
                    this.$videoWrapper[0].style = "", this.$video[0].style = "", this.$logo[0].style = "", this.$circle[0].style = "", this.domElem.addClass("shown") } }, { key: "onSkipVideo", value: function(t) { t && (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation()), this.isSkipped = !0, this.domElem.addClass("hidden"), setTimeout(function() { app.viewController.currentView.shown() }, 1250) } }, { key: "resize", value: function() { this.domElem.height(app.h), a.default.setAsCover(this.$video[0]) } }, { key: "update", value: function() {!this.isPaused && this.video.currentTime > this.video.duration - 3.5 && !this.isSkipped && this.onSkipVideo() } }, { key: "destroy", value: function() { this.unbind(), this.video.destroy(), this.domElem.remove() } }]), t }();
    e.default = u }, function(t, e, i) {
    (function(t) { "use strict";

        function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 }); var n = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            s = function() {
                function e() { i(this, e) } return n(e, null, [{ key: "openShare", value: function(t) { t.preventDefault(), t.stopPropagation(); var e = (app.w - 600) / 2,
                            i = (app.h - 300) / 2;
                        window.open(t.currentTarget.href, "", "left=" + e + ",top=" + i + ",width=600,height=300") } }, { key: "setAsCover", value: function(e) { var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window,
                            n = t(e),
                            s = t(i); if ("objectFit" in document.documentElement.style == !1) { n.css({ transform: "" }); var r = void 0,
                                o = void 0,
                                a = void 0,
                                l = e.offsetWidth,
                                h = e.offsetHeight,
                                u = l / h;
                            i === window ? (o = app.w, a = app.h) : (o = s.width(), a = s.height()); var c = o / a;
                            r = c > u ? o / l : a / h, n.css({ top: "50%", left: "50%", width: "auto", height: "auto", transform: "translate(-50%, -50%) scale(" + r + ")" }) } else n.css({ top: 0, left: 0, transform: "", width: "100%", height: "100vh", objectFit: "cover" }) } }, { key: "setCookie", value: function(t, e, i) { var n = new Date;
                        n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3); var s = "expires=" + n.toUTCString();
                        document.cookie = t + "=" + e + ";" + s + ";path=/" } }, { key: "getCookie", value: function(t) { for (var e = t + "=", i = decodeURIComponent(document.cookie), n = i.split(";"), s = 0; s < n.length; s++) { for (var r = n[s];
                                " " == r.charAt(0);) r = r.substring(1); if (0 == r.indexOf(e)) return r.substring(e.length, r.length) } return "" } }]), e }();
        e.default = s }).call(e, i(1)) }, function(t, e, i) {
    (function(t, n) { "use strict";

        function s(t) { return t && t.__esModule ? t : { default: t } }

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 }); var o = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            a = i(9),
            l = s(a),
            h = function() {
                function e(i) { var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { togglePlay: !0, controls: !1, play: !1, mute: !1, loop: !1, load: !1, playsinline: !0 };
                    r(this, e), this.video = i, this.$video = t(i), this.id = Math.random().toString(36).substr(2), this.buffer = 0, this.progress = 0, this.hideDelay = 1e3, this.isLoaded = !1, this.isReady = !1, this.isEnded = !1, this.hasError = !1, this.isFullscreen = !1, this.firstPlay = !0, this.isPaused = !0, this.hasTogglePlay = s.togglePlay, this.isMuted = s.mute, this.hasLoop = s.loop, this.hasLoader = s.load, this.directPlay = s.play, this.hasControls = s.controls, this.playsinline = s.playsinline, this.$container = s.container || this.$video.parent(), this.$videoOverlay = this.$container.find(".video-overlay"), this._onPlay = new n.Signal, this._onPause = new n.Signal, this._onLoaded = new n.Signal, this._onEnd = new n.Signal, this._onFullscreen = new n.Signal, this._onShowControls = new n.Signal, this.handlers = { update: this.update.bind(this) }, this.init() } return o(e, [{ key: "init", value: function() { this.hasLoader ? this.load() : this.initPlayer() } }, { key: "initPlayer", value: function() { this.initAttr(), this.hasControls && this.createControls(), this.bind(), this.directPlay && this.play() } }, { key: "initAttr", value: function() { this.isMuted && (this.video.muted = 1), this.hasLoop && (this.video.loop = 1), this.playsinline && (this.playsinline = 1) } }, { key: "load", value: function() { this.$video.on("canplaythrough." + this.id, this.onVideoLoaded.bind(this)), this.video.load() } }, { key: "bind", value: function() { app._onUpdate.add(this.handlers.update), this.$video.on("error." + this.id, this.onError.bind(this)).on("ready." + this.id, this.onVideoCanPlay.bind(this)).on("ended." + this.id, this.onVideoEnd.bind(this)), this.hasTogglePlay && this.$video.on("click." + this.id, this.togglePlay.bind(this)), this.$videoOverlay.length && this.$videoOverlay.on("click." + this.id, this.play.bind(this)), this.hasControls && (this.togglePlayBtn.on("click." + this.id, this.togglePlay.bind(this)), this.progressBarContainer.on("click." + this.id, this.onProgressClick.bind(this)), this.toggleFullScreenBtn.on("click." + this.id, this.toggleFullscreen.bind(this))), this.$video.on("webkitfullscreenchange." + this.id, this.onFullscreenChange.bind(this)), this.$video.on("mozfullscreenchange." + this.id, this.onFullscreenChange.bind(this)), this.$video.on("fullscreenchange." + this.id, this.onFullscreenChange.bind(this)), app.window.on("MSFullscreenChange." + this.id, this.onFullscreenChange.bind(this)), app.window.on("mozfullscreenchange." + this.id, this.onFullscreenChange.bind(this)) } }, { key: "play", value: function() { this.video.play(), this.firstPlay && (this.firstPlay = !1, this.showHideControls(!0), "desktop" === app.device && this.$container.on("mousemove." + this.id, this.onMouseMove.bind(this))), this.$videoOverlay.addClass("hidden"), this.hasControls && this.videoControls && this.togglePlayBtn.addClass("pause"), this.isPaused = !1, this.isEnded = !1, this._onPlay.dispatch() } }, { key: "togglePlay", value: function() { this.isPaused ? this.play() : this.pause() } }, { key: "pause", value: function() { this.video.pause(), this.hasControls && this.videoControls && this.togglePlayBtn.removeClass("pause"), this.isPaused = !0, this._onPause.dispatch() } }, { key: "stop", value: function() { this.isPaused || this.pause(), this.hasControls && this.videoControls && this.togglePlayBtn.removeClass("pause"), this.$videoOverlay.removeClass("hidden"), this.isEnded = !0, this.seek(0) } }, { key: "toggleMute", value: function() { this.isMuted ? this.volume = 1 : this.volume = 0, this.isMuted = !this.isMuted } }, { key: "seek", value: function(t) { this.video.currentTime = t } }, { key: "toggleFullscreen", value: function(t) { this.isFullscreen ? document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen() : this.video.requestFullScreen ? this.video.requestFullScreen() : this.video.mozRequestFullScreen ? this.video.mozRequestFullScreen() : this.video.webkitRequestFullScreen ? this.video.webkitRequestFullScreen() : this.$container[0].msRequestFullscreen && this.$container[0].msRequestFullscreen() } }, { key: "update", value: function() { this.hasControls && 4 === this.video.readyState && (this.updateBuffer(), this.updateProgress()) } }, { key: "updateProgress", value: function() { var t = this.currentTime / this.duration;
                        this.progress += t - this.progress, this.progressBar && l.default.transform(this.progressBar[0], "scaleX(" + this.progress + ")") } }, { key: "updateBuffer", value: function() { var t = this.video.buffered,
                            e = this.video.seekable,
                            i = t.end(0),
                            n = e.end(0),
                            s = (i / n).toFixed(2);
                        this.buffer += .1 * (s - this.buffer), this.bufferBar && l.default.transform(this.bufferBar[0], "scaleX(" + this.buffer + ")") } }, { key: "unbind", value: function() { app._onUpdate.remove(this.handlers.update), this.$video.off(), this.$videoOverlay.length && this.$videoOverlay.off("click" + this.id), "desktop" === app.device && this.$container.off("mousemove." + this.id), this.hasControls && this.videoControls && (this.togglePlayBtn.off("click." + this.id), this.progressBarContainer.off("click." + this.id)), this.$video.off("webkitfullscreenchange." + this.id), this.$video.off("mozfullscreenchange." + this.id), this.$video.off("fullscreenchange." + this.id), app.window.off("MSFullscreenChange." + this.id), app.window.off("mozfullscreenchange." + this.id) } }, { key: "destroy", value: function() { this.unbind(), this.hasControls && this.videoControls && this.destroyControls(), this.video.src = "" } }, { key: "onError", value: function(t) { this.hasError = !0 } }, { key: "onVideoLoaded", value: function() { this.$video.off("canplaythrough." + this.id), this._onLoaded.dispatch(), this.isLoaded = !0, this.initPlayer() } }, { key: "onVideoCanPlay", value: function() { this.hasLoader || setTimeout(this._onLoaded.dispatch.bind(this), 0), this.ready || (this.isReady = !0) } }, { key: "onVideoEnd", value: function() { this.hasLoop || this.stop(), this.isFullscreen && this.toggleFullscreen(), this._onEnd.dispatch() } }, { key: "onFullscreenChange", value: function() { this.isFullscreen = !this.isFullscreen, this._onFullscreen.dispatch(this.isFullscreen) } }, { key: "onEndFullscreen", value: function() { this.isFullscreen = !1, this._onFullscreen.dispatch(this.isFullscreen) } }, { key: "onMouseMove", value: function() { var t = this;
                        this.hasEmitShow || (this._onShowControls.dispatch("showControls"), this.hasControls && this.showHideControls(!0), this.hasEmitShow = !0), clearTimeout(this.hideTimeout), this.hideTimeout = setTimeout(function() { t._onShowControls.dispatch("hideControls"), t.hasControls && t.showHideControls(!1), t.hasEmitShow = !1 }, this.hideDelay) } }, { key: "createControls", value: function() { this.videoControls = t("<div/>", { class: "video-controls hidden" }), this.togglePlayBtn = t("<button/>", { class: "controls-toggle controls-toggle-play" }), this.progressBarContainer = t("<div/>", { class: "controls-bar" }), this.bufferBar = t("<span/>", { class: "controls-bar-buffer" }), this.progressBar = t("<span/>", { class: "controls-bar-progress" }), this.toggleFullScreenBtn = t("<button/>", { class: "controls-toggle controls-toggle-fullscreen" }), this.videoControls.append(this.toggleFullScreenBtn), this.progressBarContainer.append(this.progressBar).append(this.bufferBar), this.videoControls.append(this.togglePlayBtn).append(this.progressBarContainer), this.$container.append(this.videoControls) } }, { key: "showHideControls", value: function(t) { this.hasControls && (t ? this.videoControls.removeClass("hidden") : this.videoControls.addClass("hidden")) } }, { key: "destroyControls", value: function() { this.videoControls.remove(), delete this.videoControls, this.hasControls = !1 } }, { key: "onProgressClick", value: function(t) { t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(); var e = t.clientX,
                            i = this.progressBar.offset().left,
                            n = this.progressBar[0].offsetWidth,
                            s = e - i,
                            r = this.duration * s / n;
                        this.seek(r) } }, { key: "timeTotext", value: function(t) { var e = t / 60 | 0,
                            i = t % 60 | 0; return i < 10 && (i = "0" + i), e + ":" + i } }, { key: "currentTimeText", get: function() { return this.timeTotext(this.currentTime) } }, { key: "currentTime", get: function() { return this.video.currentTime } }, { key: "durationText", get: function() { return this.timeTotext(this.duration) } }, { key: "duration", get: function() { return this.video.duration } }, { key: "volume", get: function() { return this.video.volume }, set: function(t) { this.video.volume = t } }]), e }();
        e.default = h }).call(e, i(1), i(8)) }, function(t, e, i) { "use strict"; var n = { title: "redbull", debug: "8888" === window.location.port || "3000" === window.location.port || /\.dev$/.test(window.location.host), paths: { videos: "../../library/videos/", sounds: "../../library/sounds/", json: "../../library/json/", img: "../../library/img/" }, sitemap: { view: { class: i(14).default }, home: { class: i(16).default }, year: { class: i(28).default }, credits: { class: i(29).default }, "not-found": { class: i(30).default } } };
    t.exports = n }, function(t, e, i) { "use strict";

    function n(t) { return t && t.__esModule ? t : { default: t } }

    function s(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function r(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

    function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
    Object.defineProperty(e, "__esModule", { value: !0 }); var a = function() {
            function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
        l = function t(e, i, n) { null === e && (e = Function.prototype); var s = Object.getOwnPropertyDescriptor(e, i); if (void 0 === s) { var r = Object.getPrototypeOf(e); return null === r ? void 0 : t(r, i, n) } if ("value" in s) return s.value; var o = s.get; if (void 0 !== o) return o.call(n) },
        h = i(15),
        u = n(h),
        c = i(9),
        d = n(c),
        f = function(t) {
            function e(t) { s(this, e); var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)); return i.progress = 0, i.vy = 0, i._deltaY = 0, i.scrollDelta = 0, i.progressHeight = window.innerHeight, i.y = i._y = i._oy = document.body.scrollTop, i.easing = .55, i.friction = .2, i.scrollLocked = !1, i.firstScroll = !0, i } return o(e, t), a(e, [{ key: "init", value: function() { l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this), this.dom = this.domElem[0], this.domElem.addClass("scrollable"), this.dom.style.position = "fixed", this.dom.style.willChange = "transform", this.dummy = document.createElement("div"), this.domElem.parent().append(this.dummy), this.resize() } }, { key: "bind", value: function() { l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "bind", this).call(this), this.wheelEvent = "onwheel" in window ? "wheel." + this.uniqID : void 0 !== document.onmousewheel ? "mousewheel." + this.uniqID : "DOMMouseScroll." + this.uniqID, app.window.on(this.wheelEvent + " scroll." + this.uniqID, this.onScroll.bind(this)) } }, { key: "unbind", value: function() { l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "unbind", this).call(this), this.dummy.parentNode.removeChild(this.dummy), app.window.off(this.wheelEvent + " scroll." + this.uniqID) } }, { key: "onScroll", value: function(t) { return t && this.scrollLocked ? void t.preventDefault() : (this._y = window.scrollY || window.pageYOffset, t && this.firstScroll && (this.y = this._oy = -this._y, this.firstScroll = !1, this.update(!0)), void(!this.disableNext && t && t.deltaY && (this._deltaY = 1 === t.deltaMode ? 20 * t.deltaY : t.deltaY))) } }, { key: "resize", value: function() { l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "resize", this).call(this), this.height = this.domElem.height(), this.progressHeight = this.height - window.innerHeight, this.dummy && (this.dummy.style.height = this.height + "px"), this.onScroll(), this.update(!0) } }, { key: "update", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.scrollLocked || (this.vy -= (this._y + this.y) * (t ? 1 : this.easing), this.y += this.vy *= this.friction, this.vy = (1e3 * this.vy | 0) / 1e3, this.y = (1e3 * this.y | 0) / 1e3, (this._oy !== this.y || t) && d.default.transform(this.dom, "translate3d(0, " + this.y + "px, 0)"), this._oy = this.y, this.progress = -this.y / this.progressHeight, !this.disableNext && app.sucksBrowser && (this._deltaY = app.hasNextHidden || app.navigate ? 0 : this._y + this.y)) } }]), e }(u.default);
    e.default = f }, function(t, e, i) {
    (function(t) { "use strict";

        function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 }); var n = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            s = function() {
                function e(n) { i(this, e), this.id = n, this.uniqID = this.id + "-" + Math.random().toString(36).substr(2), this.domElem = app.container.find("#" + n), this._isAnimatedIn = new t.Signal, this._isAnimatedOut = new t.Signal, this.handlers = { update: this.update.bind(this), resize: this.resize.bind(this) }, this.vy = 0, this.progress = 0, this.progressHeight = window.innerHeight, this.y = this._y = this._oy = document.body.scrollTop, this.init() } return n(e, [{ key: "init", value: function() { this.bind() } }, { key: "bind", value: function() { app._onUpdate.add(this.handlers.update), app._onResize.add(this.handlers.resize) } }, { key: "unbind", value: function() { app._onUpdate.remove(this.handlers.update), app._onResize.remove(this.handlers.resize) } }, { key: "animateIn", value: function() { window.scrollTo(0, 0), this._y = this.y = 0, this.domElem[0].style.display = "block", this.domElem[0].style.opacity = 1, this.onCompleteAnimateIn() } }, { key: "onCompleteAnimateIn", value: function() { this.resize(), this._isAnimatedIn.dispatch() } }, { key: "animateOut", value: function() { this.unbind(), this._isAnimatedOut.dispatch() } }, { key: "update", value: function() { this.y = -(window.scrollY || window.pageYOffset), this.progress = -this.y / this.progressHeight } }, { key: "resize", value: function() { this.progressHeight = this.height - window.innerHeight } }]), e }();
        e.default = s }).call(e, i(8)) }, function(t, e, i) {
    (function(t) {
        "use strict";

        function n(t) { return t && t.__esModule ? t : { default: t } }

        function s(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function r(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var a = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            l = function t(e, i, n) { null === e && (e = Function.prototype); var s = Object.getOwnPropertyDescriptor(e, i); if (void 0 === s) { var r = Object.getPrototypeOf(e); return null === r ? void 0 : t(r, i, n) } if ("value" in s) return s.value; var o = s.get; if (void 0 !== o) return o.call(n) },
            h = i(9),
            u = n(h),
            c = i(14),
            d = n(c),
            f = i(17),
            p = n(f),
            y = i(18),
            g = n(y),
            v = i(19),
            m = n(v),
            b = i(25),
            _ = n(b),
            w = i(22),
            x = n(w),
            k = function(e) {
                function i(t) { s(this, i); var e = r(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t)); return e.iconRotate = 0, e._iconRotate = 0, e.scrollLocked = !0, e }
                return o(i, e), a(i, [{ key: "init", value: function() { this.setSelectors(), l(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "init", this).call(this) } }, { key: "setSelectors", value: function() { this.$headHome = this.domElem.find(".head-home"), this.$homeImg = this.$headHome.find(".img-wrapper"), this.$homeImgShadow1 = this.$homeImg.find(".shadow-1"), this.$homeImgShadow2 = this.$homeImg.find(".shadow-2"), this.$title = this.$headHome.find(".title"), this.$stroke1 = this.$title.find(".stroke-1"), this.$stroke2 = this.$title.find(".stroke-2"), this.$yearWrapper = this.domElem.find(".year-wrapper"), this.year = this.$yearWrapper.attr("data-year"), this.nextYear = this.$yearWrapper.attr("data-next-year"), this.$head = this.domElem.find(".head"), this.$icon = this.domElem.find(".icon"), this.$img = this.$head.find(".img-wrapper"), this.$imgShadow1 = this.$img.find(".shadow-1"), this.$imgShadow2 = this.$img.find(".shadow-2"), this.$titleSpan = this.$head.find(".title span"), this.$yearI = this.$head.find(".year i"), this.$text = this.$head.find(".text"), this.$blockYoutube = this.domElem.find(".block-youtube"), this.$blockYoutubeQuote = this.domElem.find(".block-youtube-quote"), this.$videoWrapper = this.domElem.find(".block-youtube .video-wrapper, .block-youtube-quote .video-wrapper"), this.$videoYoutube = this.domElem.find(".video-youtube"), this.$videoOverlay = this.domElem.find(".block-youtube .video-wrapper .video-overlay"), this.$bigVideoOverlay = this.domElem.find(".block-youtube-quote .video-wrapper .video-overlay"), this.$blockquote = this.domElem.find(".blockquote"), this.$imgLandscape = this.domElem.find(".block-img-landscape .img-wrapper"), this.$audioPlayer = this.domElem.find(".block-audioplayer"), this.$currentInfo = this.domElem.find(".current-info"), this.$news = this.domElem.find(".block-news .min-wrapper"), this.$openModal = this.$news.find(".open-modal"), this.$modalContent = t(".modal-youtube-content"), this.$shareLilou = this.domElem.find(".share-lilou a"), this.$nextPage = this.domElem.find(".next-page"), this.$nextPageLink = this.$nextPage.find("a"), this.nextPage = this.$nextPage.attr("data-src") } }, { key: "bind", value: function() { if (l(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "bind", this).call(this), this.$homeImgShadow1.length && this.$homeImgShadow2.length && (this.homeImgShadow1 = new g.default(this.$homeImgShadow1[0], { animVelocity: .1 }), this.homeImgShadow2 = new g.default(this.$homeImgShadow2[0], { animVelocity: .1 })), this.stroke1 = [], this.stroke2 = [], this.$stroke1.length && this.$stroke2.length) { for (var t = this.$stroke1.length - 1; t >= 0; t--) this.stroke1[t] = new g.default(this.$stroke1[t], { animVelocity: .1 }); for (var t = this.$stroke2.length - 1; t >= 0; t--) this.stroke2[t] = new g.default(this.$stroke2[t], { animVelocity: .1 }) }
                        this.$imgShadow1.length && (this.imgShadow1 = new g.default(this.$imgShadow1[0], { animVelocity: .2 })), this.$imgShadow2.length && (this.imgShadow2 = new g.default(this.$imgShadow2[0], { animVelocity: .2 })), this.$icon.length && (this.icon = new g.default(this.$icon[0])), this.yearI = []; for (var t = this.$yearI.length - 1; t >= 0; t--) this.yearI[t] = new g.default(this.$yearI[t], { dist: t ? 0 : -50 });
                        this.titleSpan = []; for (var t = this.$titleSpan.length - 1; t >= 0; t--) this.titleSpan[t] = new g.default(this.$titleSpan[t], { reveal: { dist: 0 === t ? .001 : 40 * t, s: -.8, e: .2 } });
                        this.$text.length && (this.text = new g.default(this.$text[0], { reveal: { dist: 125, s: -.8, e: .2 } })), this.blockYoutube = []; for (var t = this.$blockYoutube.length - 1; t >= 0; t--) this.blockYoutube[t] = new g.default(this.$blockYoutube[t], { needShow: .2 });
                        this.blockYoutubeQuote = []; for (var t = this.$blockYoutubeQuote.length - 1; t >= 0; t--) this.blockYoutubeQuote[t] = new g.default(this.$blockYoutubeQuote[t], { needShow: .2 }); if (this.videoYoutube = [], this.$videoYoutube.length)
                            for (var t = this.$videoYoutube.length - 1; t >= 0; t--) this.videoYoutube[t] = { animable: new g.default(this.$videoYoutube.eq(t).parent()[0]) }; if (this.$videoWrapper.on("click", this.onVideoYoutubeClick.bind(this)), this.videoOverlay = [], this.bigVideoOverlay = [], this.$videoOverlay.length)
                            for (var t = this.$videoOverlay.length - 1; t >= 0; t--) this.videoOverlay[t] = new g.default(this.$videoOverlay[t]); if (this.$bigVideoOverlay.length)
                            for (var t = this.$bigVideoOverlay.length - 1; t >= 0; t--) this.bigVideoOverlay[t] = new g.default(this.$bigVideoOverlay[t]); if (this.blockquote = [], this.$blockquote.length)
                            for (var t = this.$blockquote.length - 1; t >= 0; t--) this.blockquote[t] = new g.default(this.$blockquote[t], { needShow: .1 }); if (this.imgLandscape = [], this.$imgLandscape.length)
                            for (var t = this.$imgLandscape.length - 1; t >= 0; t--) this.imgLandscape[t] = new g.default(this.$imgLandscape[t], { dist: -60 }); if (this.audioPlayer = [], this.$audioPlayer.length)
                            for (var t = this.$audioPlayer.length - 1; t >= 0; t--) this.audioPlayer[t] = new m.default(this.$audioPlayer[0]); if (this.news = [], this.$news.length)
                            for (var t = this.$news.length - 1; t >= 0; t--) this.news[t] = new p.default(this.$news[t]);
                        this.$openModal.on("click", this.onOpenModalClick.bind(this)), this.$nextPageLink.on("click", this.onNextPageClick.bind(this)), this.disableNext = !!this.$shareLilou.length } }, { key: "unbind", value: function() { if (l(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "unbind", this).call(this), this.$videoWrapper.off("click"), this.videoYoutube.length)
                            for (var t = this.videoYoutube.length - 1; t >= 0; t--) "undefined" != typeof this.videoYoutube[t].player && this.videoYoutube[t].player.destroy(); if (this.audioPlayer.length)
                            for (var t = this.audioPlayer.length - 1; t >= 0; t--) this.audioPlayer[t].destroy();
                        this.$openModal.off("click"), this.$nextPageLink.off("click"), this.modal && this.modal.destroy(), this.$nextPageLink.off("click") } }, { key: "onVideoYoutubeClick", value: function(e) { var i = t(e.currentTarget),
                            n = this.$videoWrapper.index(i); "undefined" == typeof this.videoYoutube[n].player && (this.videoYoutube[n].player = new x.default(this.$videoYoutube[n], { play: !0, controls: !0 })) } }, { key: "onOpenModalClick", value: function(e) { e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(); var i = t(e.currentTarget),
                            n = i.attr("data-youtube-id"),
                            s = i.attr("data-square"),
                            r = this.$modalContent.clone()[0];
                        i.addClass("clicked"), r.style.display = "", this.modal || (this.modal = new _.default(n, s, r), this.modal._onClose.add(this.onModalClose, this), this.modal.open()) } }, { key: "onModalClose", value: function() { this.$openModal.removeClass("clicked"), this.modal._onClose.removeAll(), this.modal = null } }, { key: "onNextPageClick", value: function(t) { t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), this.scrollLocked = app.goToNext = !0, app.$navLayer.removeClass("hidden"), app._navLayerY = -this.h, app.nextEase = .1 } }, { key: "goToNextPage", value: function() { History.pushState(null, document.title, this.nextPage) } }, {
                    key: "update",
                    value: function() {
                        l(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "update", this).call(this);
                        var t = this.vy > 50 ? 50 : this.vy < -50 ? -50 : this.vy;
                        if (this.isAnimated && this.homeImgShadow1 && this.homeImgShadow2 && (this.homeImgShadow1.update(-this.y, 2 * t), this.homeImgShadow2.update(-this.y, 4 * t)), this.isAnimated && this.stroke1 && this.stroke2) { for (var e = this.stroke1.length - 1; e >= 0; e--) this.stroke1[e].update(-this.y, t); for (var e = this.stroke2.length - 1; e >= 0; e--) this.stroke2[e].update(-this.y, 2 * t) }
                        if (this.imgShadow1 && this.imgShadow1.update(-this.y, 2 * t), this.imgShadow2 && this.imgShadow2.update(-this.y, 4 * t), this.icon && (this.icon.update(-this.y), this.icon.isInViewport && (this._iconRotate -= .5 + -this.vy / 6,
                                this.iconRotate += .1 * (this._iconRotate - this.iconRotate), this.iconRotate = (1e3 * this.iconRotate | 0) / 1e3, u.default.transform(this.icon.elem, "rotateZ(" + this.iconRotate + "deg"))), this.yearI)
                            for (var e = this.yearI.length - 1; e >= 0; e--) this.yearI[e].update(-this.y);
                        if (this.titleSpan)
                            for (var e = this.titleSpan.length - 1; e >= 0; e--) this.titleSpan[e].update(-this.y, t);
                        if (this.text && this.text.update(-this.y, t), this.blockYoutube)
                            for (var e = this.blockYoutube.length - 1; e >= 0; e--) this.blockYoutube[e].update(-this.y, t);
                        if (this.blockYoutubeQuote)
                            for (var e = this.blockYoutubeQuote.length - 1; e >= 0; e--) this.blockYoutubeQuote[e].update(-this.y, t);
                        if (this.videoYoutube)
                            for (var e = this.videoYoutube.length - 1; e >= 0; e--) this.videoYoutube[e].animable.update(-this.y), this.videoYoutube[e].animable.isInViewport || !this.videoYoutube[e].player || this.videoYoutube[e].player.isPaused || this.videoYoutube[e].player.pause();
                        if (this.videoOverlay)
                            for (var e = this.videoOverlay.length - 1; e >= 0; e--)
                                if (this.videoOverlay[e].update(-this.y), this.videoOverlay[e].ratio >= 0 && this.videoOverlay[e].ratio <= 1) { var n = 1 + (1 - this.videoOverlay[e].ratio) / 5;
                                    n = (1e3 * n | 0) / 1e3, u.default.transform(this.videoOverlay[e].elem, "translate3d(0, 0, 0) scale(" + n + ")") }
                        if (this.bigVideoOverlay)
                            for (var e = this.bigVideoOverlay.length - 1; e >= 0; e--)
                                if (this.bigVideoOverlay[e].update(-this.y), this.bigVideoOverlay[e].ratio >= 0 && this.bigVideoOverlay[e].ratio <= 1) { var s = 100 * (1 - this.bigVideoOverlay[e].ratio);
                                    s = (1e3 * s | 0) / 1e3, u.default.transform(this.bigVideoOverlay[e].elem, "translate3d(0, " + -s + "px, 0)") }
                        if (this.blockquote)
                            for (var e = this.blockquote.length - 1; e >= 0; e--) this.blockquote[e].update(-this.y);
                        if (this.imgLandscape)
                            for (var e = this.imgLandscape.length - 1; e >= 0; e--) this.imgLandscape[e].update(-this.y);
                        if (this.audioPlayer)
                            for (var e = this.$audioPlayer.length - 1; e >= 0; e--) this.audioPlayer[e].update();
                        if (this.news)
                            for (var e = this.news.length - 1; e >= 0; e--) this.news[e].update(-this.y, t)
                    }
                }, { key: "resize", value: function() { if (l(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "resize", this).call(this), this.homeImgShadow1 && this.homeImgShadow2 && (this.homeImgShadow1.resize(), this.homeImgShadow2.resize()), this.stroke1 && this.stroke2) { for (var t = this.stroke1.length - 1; t >= 0; t--) this.stroke1[t].resize(); for (var t = this.stroke2.length - 1; t >= 0; t--) this.stroke2[t].resize() } if (this.imgShadow1 && this.imgShadow1.resize(), this.imgShadow2 && this.imgShadow2.resize(), this.icon && this.icon.resize(), this.yearI)
                            for (var t = this.yearI.length - 1; t >= 0; t--) this.yearI[t].resize(); if (this.titleSpan)
                            for (var t = this.titleSpan.length - 1; t >= 0; t--) this.titleSpan[t].resize(); if (this.text && this.text.resize(), this.blockYoutube)
                            for (var t = this.blockYoutube.length - 1; t >= 0; t--) this.blockYoutube[t].resize(); if (this.blockYoutubeQuote)
                            for (var t = this.blockYoutubeQuote.length - 1; t >= 0; t--) this.blockYoutubeQuote[t].resize(); if (this.videoYoutube)
                            for (var t = this.videoYoutube.length - 1; t >= 0; t--) this.videoYoutube[t].animable.resize(); if (this.videoOverlay)
                            for (var t = this.videoOverlay.length - 1; t >= 0; t--) this.videoOverlay[t].resize(); if (this.bigVideoOverlay)
                            for (var t = this.bigVideoOverlay.length - 1; t >= 0; t--) this.bigVideoOverlay[t].resize(); if (this.blockquote)
                            for (var t = this.blockquote.length - 1; t >= 0; t--) this.blockquote[t].resize(); if (this.imgLandscape)
                            for (var t = this.imgLandscape.length - 1; t >= 0; t--) this.imgLandscape[t].resize(); if (this.audioPlayer)
                            for (var t = this.audioPlayer.length - 1; t >= 0; t--) this.audioPlayer[t].resize(); if (this.news)
                            for (var t = this.news.length - 1; t >= 0; t--) this.news[t].resize() } }, { key: "shown", value: function() { var t = this;
                        this.domElem.addClass("shown"), setTimeout(function() { app.$intro.length && (app.intro.destroy(), app.$intro = []), t.domElem.addClass("animated"), t.scrollLocked = !1, t.isAnimated = !0, t.resize() }, 1300) } }, { key: "onCompleteAnimateIn", value: function() { var t = this;
                        this.resize(), app.$intro.length || this.shown(), setTimeout(function() { t._isAnimatedIn.dispatch(), app.header.scrollable.goTo(0) }, 1300) } }]), i
            }(d.default);
        e.default = k
    }).call(e, i(1))
}, function(t, e, i) { "use strict";

    function n(t) { return t && t.__esModule ? t : { default: t } }

    function s(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function r(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

    function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
    Object.defineProperty(e, "__esModule", { value: !0 }); var a = function() {
            function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
        l = function t(e, i, n) { null === e && (e = Function.prototype); var s = Object.getOwnPropertyDescriptor(e, i); if (void 0 === s) { var r = Object.getPrototypeOf(e); return null === r ? void 0 : t(r, i, n) } if ("value" in s) return s.value; var o = s.get; if (void 0 !== o) return o.call(n) },
        h = i(9),
        u = n(h),
        c = i(18),
        d = n(c),
        f = function(t) {
            function e(t) { var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { listVelocity: !1, velocityElems: null };
                s(this, e); var n = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)); return n.vy = 0, n.listVelocity = i.listVelocity, n.velocityElems = i.velocityElems, n.animVelocity = n.listVelocity || 0, n.setSelectors(), n } return o(e, t), a(e, [{ key: "setSelectors", value: function() { if (this.colDist = [], this.$col = this.$elem.find(".parallax-col"), this.listVelocity) { this.colChilds = []; for (var t = this.$col.length - 1; t >= 0; t--) this.colChilds[t] = this.$col.eq(t).children() } } }, { key: "update", value: function(t, i) { if (l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this, t, i), this.$col.length)
                        for (var n = this.$col.length - 1; n >= 0; n--) { var s = this.ratio * this.colDist[n];
                            s = (1e3 * s | 0) / 1e3, u.default.transform(this.$col[n], "translate3d(0," + s + "px, 0px)") }
                    if (this.listVelocity && this.velocityElems)
                        for (var n = this.velocityElems.length - 1; n >= 0; n--)
                            for (var r = this.velocityElems[n].length - 1; r >= 0; r--) 0 === n ? u.default.transform(this.velocityElems[n][r], "translate3d(" + this.vy / 2 + "px, " + this.vy / 2 + "px, 0px)") : u.default.transform(this.velocityElems[n][r], "translate3d(" + this.vy + "px," + this.vy + "px, 0px)") } }, { key: "resize", value: function() { if (l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "resize", this).call(this), this.$col.length)
                        for (var t = this.$col.length - 1; t >= 0; t--) this.colDist[t] = this.height - this.$col.eq(t).height() } }]), e }(d.default);
    e.default = f }, function(t, e, i) {
    (function(t) { "use strict";

        function n(t) { return t && t.__esModule ? t : { default: t } }

        function s(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            o = i(9),
            a = n(o),
            l = function() {
                function e(i) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { dist: 0, reveal: 0, simpleParallax: !1, animVelocity: !1, needShow: !1 };
                    s(this, e), this.elem = i, this.$elem = t(i), this.dist = n.dist || !1, this.reveal = n.reveal || !1, this.needShow = n.needShow || !1, this.animVelocity = n.animVelocity || !1, this.simpleParallax = n.simpleParallax || !1, this.isFixed = !1, this.isShown = !1, this.revealY = 0, this.vy = 0 } return r(e, [{ key: "shown", value: function() { this.$elem.addClass("shown"), this.isShown = !0 } }, { key: "update", value: function(t, e) { if (this.y = t, this.vy += (e - this.vy) * this.animVelocity, this.vy = (1e3 * this.vy | 0) / 1e3, this.needShow && !this.isShown && this.isInViewport && this.ratio > this.needShow && this.shown(), this.isInViewport && this.dist || this.simpleParallax && this.ratio <= 1) { if (this.isInViewport && this.dist) var t = this.ratio * this.dist;
                            else if (this.simpleParallax) var t = -this.y * this.simpleParallax;
                            t = (1e3 * t | 0) / 1e3, a.default.transform(this.elem, "translate3d(0," + t + "px, 0)") } if (this.reveal && this.ratio >= this.reveal.s - .1 && this.ratio <= this.reveal.e + .1) { var i = this.reveal.e - this.reveal.s,
                                n = this.ratio < this.reveal.s ? 0 : this.ratio > this.reveal.e ? i : this.ratio - this.reveal.s,
                                s = this.reveal.dist * (1 - n);
                            s = (1e3 * s | 0) / 1e3, this.revealY += .2 * (s - this.revealY), a.default.transform(this.elem, "translate3d(0," + this.revealY + "px, 0)") }
                        this.isInViewport && this.animVelocity && a.default.transform(this.elem, "translate3d(0," + this.vy + "px, 0)"), this.isFixed && (t = (1e3 * t | 0) / 1e3, a.default.transform(this.elem, "translate3d(0," + t + "px, 0)")) } }, { key: "resize", value: function() { this.top = this.$elem.offset().top + (this.y || 0) - app.window.scrollTop(), this.height = this.$elem.height() } }, { key: "isInViewport", get: function() { return this.y + window.innerHeight > this.top && this.y < this.top + this.height + this.dist } }, { key: "ratio", get: function() { return (this.y + window.innerHeight - this.top) / (window.innerHeight + this.height + this.dist) } }, { key: "fixed", get: function() { return this.isFixed }, set: function(t) { this.isFixed = t } }]), e }();
        e.default = l }).call(e, i(1)) }, function(t, e, i) {
    (function(t) { "use strict";

        function n(t) { return t && t.__esModule ? t : { default: t } }

        function s(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
            o = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            a = i(9),
            l = (n(a), i(20)),
            h = n(l),
            u = i(21),
            c = n(u),
            d = i(23),
            f = n(d),
            p = function() {
                function e(i) { s(this, e), this.index = 0, this.player = [], this.container = i, this.$container = t(i), this.init() } return o(e, [{ key: "init", value: function() { this.setSelectors(), this.bind() } }, { key: "setSelectors", value: function() { this.$slideshow = this.$container.find(".slideshow"), this.$slides = this.$slideshow.find(".block--slideshow"), this.$videoWrapper = this.$slideshow.find(".video-wrapper"), this.$videoYoutube = this.$slideshow.find(".audio-youtube"), this.$prev = this.$container.find(".prev"), this.$next = this.$container.find(".next"), this.$progressWrapper = this.$container.find(".left"), this.$playBtn = this.$progressWrapper.find(".play"), this.$bars = this.$progressWrapper.find(".bar"), this.$progressBar = this.$bars.find(".progress-bar"), this.$musicList = this.$container.find(".right"), this.$musicListLi = this.$musicList.find("li:not(.sep)"), this.indexMax = this.$slides.length - 1, this.clipPathProgress = []; for (var t = this.$slides.length - 1; t >= 0; t--) this.clipPathProgress[t] = 0 } }, { key: "bind", value: function() { this.slideshow = new h.default(this.$slideshow[0]), this.slideshow._hasChanged.add(this.changeMusic.bind(this)), this.$musicListLi.on("click", this.onMusicListLiClick.bind(this)), this.$prev.on("click", this.onPrevNextClick.bind(this)), this.$next.on("click", this.onPrevNextClick.bind(this)), this.$playBtn.on("click", this.togglePlay.bind(this)), this.$videoWrapper.on("click", this.onLinkVideoClick.bind(this)), this.audioCursor = new f.default(this.$container[0]) } }, { key: "unbind", value: function() { this.$musicListLi.off("click"), this.$prev.off("click"), this.$next.off("click"), this.$playBtn.off("click"), this.$bars.eq(0).off("click"), this.$videoWrapper.off("click"), this.audioCursor && this.audioCursor.unbind() } }, { key: "onMusicListLiClick", value: function(e) { var i = t(e.currentTarget),
                            n = i.parent().index(),
                            s = i.index();
                        this.changeMusic(10 * n + s - 1) } }, { key: "changeMusic", value: function(t) { "object" === ("undefined" == typeof t ? "undefined" : r(t)) && (t = t.i), t = t > this.indexMax ? 0 : t < 0 ? this.indexMax : t, "undefined" != typeof this.player[this.index] && "undefined" != typeof this.player[this.index].player && (this.player[this.index].pause(), this.player[this.index].canUpdate = !1), this.index = t || 0 === t ? t : this.index + 1 > this.indexMax ? 0 : this.index + 1, this.slideshow.setIndexX(this.index), this.$musicListLi.removeClass("active").eq(this.index).addClass("active"), "undefined" == typeof this.player[this.index] ? (this.player[this.index] = new c.default(this.$videoYoutube[this.index], { play: !0, load: !0 }, this.$container), this.player[this.index]._onEnd.add(this.changeMusic, this)) : this.player[this.index].play() } }, { key: "onPrevNextClick", value: function(e) { var i = void 0,
                            n = t(e.currentTarget);
                        i = n.hasClass("prev") ? this.index - 1 : this.index + 1, this.changeMusic(i) } }, { key: "togglePlay", value: function() { "undefined" == typeof this.player[this.index] ? (this.player[this.index] = new c.default(this.$videoYoutube[0], { play: !0 }, this.$container), this.player[this.index]._onEnd.add(this.changeMusic, this)) : this.player[this.index].togglePlay() } }, { key: "onLinkVideoClick", value: function(t) { this.slideshow.isDragging || window.open(t.currentTarget.href, "_blank") } }, { key: "update", value: function() { this.slideshow && this.slideshow.update(), "undefined" == typeof this.player[this.index] || this.player[this.index].canUpdate || (this.player[this.index].canUpdate = !0), this.audioCursor && this.audioCursor.update() } }, { key: "resize", value: function() { this.slideshow && this.slideshow.resize(), this.audioCursor && this.audioCursor.resize() } }, { key: "destroy", value: function() { this.unbind(); for (var t = this.player.length - 1; t >= 0; t--) "undefined" != typeof this.player[t] && (this.player[t]._onEnd.removeAll(), this.player[t].destroy());
                        this.slideshow.destroy() } }]), e }();
        e.default = p }).call(e, i(1)) }, function(t, e, i) {
    (function(t, n) { "use strict";

        function s(t) { return t && t.__esModule ? t : { default: t } }

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 }); var o = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            a = i(9),
            l = s(a),
            h = function() {
                function e(i) { var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { grabContainer: null, fullscreen: !1, loop: !1, nav: !1, maxLock: !1, isLock: !1, mobile: !1, bullet: !1, autoPlay: !1, slideSpeed: 1, transformBlock: !1 };
                    r(this, e), this.DRAG_EASE = .4, this.SWITCH_VMIN = s.mobile ? 3 : 10, this.RELEASE_EASE = .115, this.DRAG_EASE_CONSTRAINS = .3, this.FRICTION_CONSTRAINS = .9, this.MAX_DELTA_X = 25, this.ox = 0, this.x = 0, this.initx = 0, this.vx = 0, this.initmx = 0, this.mx = 0, this.block = [], this._releaseDest = { x: 0 }, this.currentIndex = { x: 0 }, this.drag = { x: 0 }, this.delta = { x: 0 }, this.timer = null, this._running = !1, this._hasChanged = new t.Signal, this.slideSpeed = s.slideSpeed || 1.4, this.fullscreen = s.fullscreen, this.loop = s.loop, this.nav = s.nav, this.bullet = s.bullet, this.maxLock = s.maxLock, this.mobile = s.mobile, this.isLock = s.isLock, this.autoPlay = s.autoPlay, this.transformBlock = s.transformBlock, this.grabContainer = s.grabContainer, this.dom = n(i), this.id = Math.random().toString(36).substr(2), this.isMoving = !1, this.init() } return o(e, [{ key: "init", value: function() { this.setSelectors(), this.setGrabCursor(), this.loop && this.createLoop(), this.resize(), this.bind(), l.default.transform(this.container[0], "translate3d(" + -this.x + "px, 0, 0)") } }, { key: "setSelectors", value: function() { this.loop && this.dom.find(".block--slideshow.loop").remove(), this.container = this.dom.find(".slideshow-container").first(), this.slides = this.dom.find(".block--slideshow:not(.hidden)"), this.allSlides = this.dom.find(".block--slideshow"), this.nav && (this.$prev = this.dom.find(".prev-btn"), this.$next = this.dom.find(".next-btn")), this.bullet && (this.$bulletWrapper = this.dom.find(".bullet-wrapper"), this.$bullet = this.$bulletWrapper.find(".bullet--slideshow")), this.fullscreen ? (this.grabContainer = app.body, this.grabContainerElem = app.body[0]) : this.grabContainer ? (this.grabContainer = this.grabContainer, this.grabContainerElem = this.grabContainer[0]) : (this.grabContainer = this.container.parent(), this.grabContainerElem = this.container.parent()[0]) } }, { key: "createLoop", value: function() { this.container.append(this.slides.eq(0).clone().addClass("loop")), this.container.prepend(this.slides.eq(this.slides.length - 1).clone().addClass("loop")) } }, { key: "bind", value: function() { this.loop && this.resetIndexX(1), this.bullet && this.$bullet.on("click." + this.id, this.onBulletClick.bind(this)), this.autoPlay && this.setAutoPlay(), this.mobile ? this.grabContainer.on("touchstart." + this.id, this.touchStart.bind(this)) : this.grabContainer.on("mousedown." + this.id, this.touchStart.bind(this)), this.nav && (this.$prev.on("click", this.prev.bind(this)), this.$next.on("click", this.next.bind(this))) } }, { key: "setAutoPlay", value: function() { var t = this;
                        this.interval = setInterval(function() { t.next() }, this.autoPlay) } }, { key: "destroy", value: function() { this.timer = null, this.grabContainerElem.style.cursor = "", this.nav && (this.$prev.off("click"), this.$next.off("click")), this.bullet && this.$bullet.off("click." + this.id), this.grabContainer.off("touchstart." + this.id), this.grabContainer.off("mousedown." + this.id), this.grabContainer.off("touchend." + this.id), this.grabContainer.off("touchmove." + this.id), app.body.unbind("mouseup." + this.id), app.body.unbind("mousemove." + this.id) } }, { key: "prev", value: function(t) { if (!this.isLock) { var e = this.currentIndex.x;
                            this.currentIndex.x--, this.constrainIndexX(), e != this.currentIndex.x && (this._releaseDest.x = this._blockX[this.currentIndex.x], t === !0 && (this.x = this._releaseDest.x), this._hasChanged.dispatch({ i: this.currentIndex.x })) } } }, { key: "next", value: function(t) { if (!this.isLock) { var e = this.currentIndex.x;
                            this.currentIndex.x++, this.constrainIndexX(), e != this.currentIndex.x && (this._releaseDest.x = this._blockX[this.currentIndex.x], t === !0 && (this.x = this._releaseDest.x), this._hasChanged.dispatch({ i: this.currentIndex.x })) } } }, { key: "onBulletClick", value: function(t) { t.preventDefault(), t.stopPropagation(); var e = n(t.currentTarget),
                            i = e.index() + 1;
                        this.setIndexX(i), this._hasChanged.dispatch({ i: this.currentIndex.x }) } }, { key: "touchStart", value: function(t) { if (this.interval && clearInterval(this.interval), !this.isLock) { var e; if (this.isDragging = !1, this.mobile) { this.grabContainer.on("touchend." + this.id, this.touchUp.bind(this)), this.grabContainer.on("touchmove." + this.id, this.touchMove.bind(this)), t.originalEvent && (t = event.originalEvent); var i = t.touches[0] || t.changedTouches[0];
                                e = i.pageX } else t.preventDefault(), this.setGrabbingCursor(), app.body.on("mouseup." + this.id, this.touchUp.bind(this)), app.body.on("mousemove." + this.id, this.touchMove.bind(this)), e = t.pageX;
                            this.mx = e * this.slideSpeed, this.omx = this.mx, this.initmx = this.mx, this.initx = this.initmx + this.x, this.delta.x = this.vx < 0 ? this.vx * -1 : this.vx, this.vx = 0, this.vmx = 0, this.drag.x = !0, this._running || (this._running = !0, this.update()) } } }, { key: "touchUp", value: function(t) { var e = this; if (this.autoPlay && (this.interval && clearInterval(this.interval), this.setAutoPlay()), !this.isLock) { var i; if (setTimeout(function() { e.isDragging = !1 }, 0), this.mobile) { this.grabContainer.off("touchend." + this.id), this.grabContainer.off("touchmove." + this.id), t.originalEvent && (t = t.originalEvent); var n = t.touches[0] || t.changedTouches[0];
                                i = n.pageX } else this.setGrabCursor(), app.body.off("mouseup." + this.id), app.body.off("mousemove." + this.id), i = t.pageX; var s = this.currentIndex.x; if (this.loop) this.vx > this.SWITCH_VMIN ? this.currentIndex.x = this.x * this.length / this.width + 1 | 0 : this.vx < -this.SWITCH_VMIN ? this.currentIndex.x = this.x * this.length / this.width | 0 : this.currentIndex.x = Math.round(this.x * this.length / this.width);
                            else if (this.vmx > this.SWITCH_VMIN) this.currentIndex.x++;
                            else if (this.vmx < -this.SWITCH_VMIN) this.currentIndex.x--;
                            else { this.currentIndex.x = 0; for (var r = 0; r < this._blockX.length; r++) this.x >= this._blockX[r] - this._blockWidth[r] / 2 && (this.currentIndex.x = r) } if (Math.abs(this.initmx - i) > this.MAX_DELTA_X && (this.constrainIndexX(), this._releaseDest.x = this._blockX[this.currentIndex.x]), this.currentIndex.x != Math.round(s)) { if (this.currentIndex.x != s) { this._changedX = !0; var o = !1;
                                    this.currentIndex.x > s && (o = !0) }
                                this._hasChanged.dispatch({ i: this.currentIndex.x }) }
                            this.drag.x = !1 } } }, { key: "touchMove", value: function(t) { if (!this.isLock) { if (this.mobile || t.preventDefault(), this.mobile) { t.originalEvent && (t = t.originalEvent); var e = t.touches[0] || t.changedTouches[0];
                                this.mx = e.pageX } else this.mx = t.pageX;
                            this.mx *= this.slideSpeed, this.vmx = this.omx - this.mx, Math.abs(this.omx - this.mx) < 2 ? this.isDragging = !1 : this.isDragging = !0, this.omx = this.mx } } }, { key: "resize", value: function() { var t = this;
                        this.loop && (this.setSelectors(), this.createLoop()); var e = this.container.find(".block--slideshow:not(.hidden)");
                        this._blockWidth = [], this._blockX = [], this._contentWidth = 0, this._uniqueLenght = 0, this.length = e.length, this.loop && this.length <= 2 ? (this.isLock = !0, this.nav && (this.$prev.addClass("hidden"), this.$next.addClass("hidden"))) : this.nav && (this.$prev.removeClass("hidden"), this.$next.removeClass("hidden")); var i = 0; if (e.each(function(s, r) { var o = window.getComputedStyle(r),
                                    a = parseFloat(o.marginLeft) + parseFloat(o.marginRight);
                                t._blockWidth[s] = n(r).width() + a, s > 0 && s < e.length - 1 && (t._uniqueLenght += t._blockWidth[s]), t._contentWidth += t._blockWidth[s], t._blockX[s] = i, i = t._contentWidth }), this._containerWidth = this.container.width(), this.width = this._contentWidth, this.windowheight = this.dom.height(), this.height = e.height(), this.maxLockWidth = this._containerWidth, this._containerWidth > this._contentWidth && (this.maxLockWidth = this._contentWidth), this.maxLock)
                            for (var s = 0, r = e.length - 1; r >= 0; r--) { var o = window.getComputedStyle(e[r]),
                                    a = parseFloat(o.marginLeft) + parseFloat(o.marginRight);
                                s += e[r].offsetWidth + a, s <= this.maxLockWidth && (this.length = r + 1) }
                        if (this.container.attr("data-width", this._contentWidth), this.resetIndexX(this.currentIndex.x), this.transformBlock)
                            for (var r = this.slides.length - 1; r >= 0; r--) { var l = this.allSlides[r].getBoundingClientRect();
                                this.block[r] = { left: l.left + l.width / 2 } } } }, { key: "update", value: function() { if (this.drag.x) { this.x -= (this.mx - this.initx + this.x) * this.DRAG_EASE, this.vx = this.x - this.ox; var t = this.vx;
                            t < 0 && (t *= -1), this.delta.x += t, this.x < 0 ? (this.vx *= this.FRICTION_CONSTRAINS, this.x -= this.x * this.DRAG_EASE_CONSTRAINS) : this.x > this._blockX[this.length - 1] && (this.vx *= this.FRICTION_CONSTRAINS, this.x += (this._blockX[this.length - 1] - this.x) * this.DRAG_EASE_CONSTRAINS), this.loop && (this.x > this._blockX[this.length - 2] ? (this.x = this.ox = this.x - this._uniqueLenght, this.initx -= this._uniqueLenght, l.default.transform(this.container[0], "translate3d(" + -this.x + "px, 0, 0)")) : this.x < this._blockX[0] && (this.x = this.ox = this.x + this._uniqueLenght, this.initx += this._uniqueLenght, l.default.transform(this.container[0], "translate3d(" + -this.x + "px, 0, 0)"))) } else this.x += (this._releaseDest.x - this.x) * this.RELEASE_EASE, this.loop && ((this.x + .5 | 0) === this._blockX[this.length - 1] ? this.resetIndexX(1) : 0 === (this.x + .5 | 0) && this.resetIndexX(this.length - 2)), this.x > this._blockX[this.length - 1] && this._running && (this._running = !1);
                        this.ox != this.x ? (this.isMoving = !0, l.default.transform(this.container[0], "translate3d(" + -this.x + "px, 0, 0)")) : this.isMoving = !1; var e = this.x - this._releaseDest.x; if (e < 0 && (e *= -1), e < .01 && (this.x = this._releaseDest.x), this.ox = this.x, this.transformBlock)
                            for (var i = this.allSlides.length - 1; i >= 0; i--) { var n = -(this.x - this.block[i].left),
                                    s = n / app.w * 2 - 1;
                                s = s < 0 ? -s : s, s = (100 * s | 0) / 100; var r = 25 * s | 0;
                                l.default.transform(this.allSlides[i], "rotateX(-" + r + "deg) rotateY(-" + r + "deg) rotateZ(0deg)") } } }, { key: "setIndexX", value: function(t) { this.currentIndex.x = t, this.constrainIndexX(), this._releaseDest.x = this._blockX[this.currentIndex.x] } }, { key: "resetIndexX", value: function(t) { this.setIndexX(t), this.x = this._releaseDest.x, l.default.transform(this.container[0], "translate3d(" + -this.x + "px, 0, 0)") } }, { key: "constrainIndexX", value: function() { this.currentIndex.x >= this.length - 1 ? (this.currentIndex.x = this.length - 1, this.nav && !this.loop && (this.$next.addClass("hidden"), this.$prev.removeClass("hidden"))) : this.currentIndex.x <= 0 ? (this.currentIndex.x = 0, this.nav && !this.loop && (this.$prev.addClass("hidden"), this.$next.removeClass("hidden"))) : this.nav && !this.loop && (this.$prev.removeClass("hidden"), this.$next.removeClass("hidden")), 0 == this.currentIndex.x && this.currentIndex.x == this.length - 1 && this.nav && !this.loop && (this.$prev.addClass("hidden"), this.$next.addClass("hidden")), this.bullet && (this.$bullet.removeClass("active"), this.loop ? this.$bullet.eq(this.currentIndex.x - 1).addClass("active") : this.$bullet.eq(this.currentIndex.x).addClass("active")) } }, { key: "setGrabCursor", value: function() { this.grabContainerElem && (this.isLock ? this.grabContainerElem.style.cursor = "auto" : (this.grabContainerElem.style.cursor = "move", this.grabContainerElem.style.cursor = "-webkit-grab", this.grabContainerElem.style.cursor = "-moz-grab", this.grabContainerElem.style.cursor = "grab")) } }, { key: "setGrabbingCursor", value: function() { this.grabContainerElem && (this.isLock ? this.grabContainerElem.style.cursor = "auto" : (this.grabContainerElem.style.cursor = "ew-resize", this.grabContainerElem.style.cursor = "-webkit-grabbing", this.grabContainerElem.style.cursor = "-moz-grabbin", this.grabContainerElem.style.cursor = "grabbing")) } }]), e }();
        e.default = h }).call(e, i(8), i(1)) }, function(t, e, i) { "use strict";

    function n(t) { return t && t.__esModule ? t : { default: t } }

    function s(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function r(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

    function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
    Object.defineProperty(e, "__esModule", { value: !0 }); var a = function() {
            function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
        l = function t(e, i, n) { null === e && (e = Function.prototype); var s = Object.getOwnPropertyDescriptor(e, i); if (void 0 === s) { var r = Object.getPrototypeOf(e); return null === r ? void 0 : t(r, i, n) } if ("value" in s) return s.value; var o = s.get; if (void 0 !== o) return o.call(n) },
        h = i(9),
        u = (n(h), i(22)),
        c = n(u),
        d = function(t) {
            function e(t) { var i = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { controls: !1, play: !1, mute: !1, loop: !1, load: !1, playsinline: !1 }, arguments[2]);
                s(this, e); var n = r(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)); return n.$controlsContainer = i, n.radius = 58, n.circumference = 2 * Math.PI * n.radius, n.canUpdate = !0, n.setControls(), n } return o(e, t), a(e, [{ key: "setControls", value: function() { this.$bars = this.$controlsContainer.find(".bar"), this.$progressBar = this.$bars.find(".progress-bar"), this.$bufferBar = this.$bars.find(".buffer"), this.$playBtn = this.$controlsContainer.find(".play"), this.$current = this.$controlsContainer.find(".current"), this.$playTime = this.$current.find("span, i"), this.$endingTime = this.$controlsContainer.find(".ending") } }, { key: "play", value: function() { l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "play", this).call(this), this.$playBtn.removeClass("paused"), this.startTime = (new Date).getTime() } }, { key: "pause", value: function() { l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "pause", this).call(this), this.$playBtn.addClass("paused") } }, { key: "update", value: function() { if (this.canUpdate && ((this.isLoaded || this.isReady && "mobile" !== app.device) && this.updateProgress(), this.startTime && !this.isPaused)) { var t = (new Date).getTime() - this.startTime;
                        t /= 1e3, t > 1 && (this.$playTime && this.$playTime.text(this.timeTotext(this.currentTime)), this.startTime = (new Date).getTime()) } } }, { key: "updateProgress", value: function() { var t = this.currentTime / this.duration,
                        e = this.circumference * (1 - t); if (this.progress += e - this.progress, this.$progressBar)
                        for (var i = this.$progressBar.length - 1; i >= 0; i--) this.$progressBar[i].style.strokeDashoffset = this.progress } }, { key: "seek", value: function(t) { l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "seek", this).call(this, t), this.$playTime && this.$playTime.text(this.timeTotext(this.currentTime)) } }, { key: "timeTotext", value: function(t) { var e = t / 60 | 0,
                        i = t % 60 | 0; return i = i < 10 ? "0" + i : i, e = e < 10 ? "0" + e : e, e + ":" + i } }, { key: "onVideoCanPlay", value: function() { l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onVideoCanPlay", this).call(this), this.$endingTime && this.$endingTime.text(this.timeTotext(this.duration)) } }]), e }(c.default);
    e.default = d }, function(t, e, i) {
    "use strict";

    function n(t) { return t && t.__esModule ? t : { default: t } }

    function s(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function r(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

    function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = function() {
            function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
        l = function t(e, i, n) { null === e && (e = Function.prototype); var s = Object.getOwnPropertyDescriptor(e, i); if (void 0 === s) { var r = Object.getPrototypeOf(e); return null === r ? void 0 : t(r, i, n) } if ("value" in s) return s.value; var o = s.get; if (void 0 !== o) return o.call(n) },
        h = i(9),
        u = (n(h), i(12)),
        c = n(u),
        d = function(t) {
            function e(t) { arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { controls: !1, play: !1, mute: !1, loop: !1, load: !1, playsinline: !1 }; return s(this, e), r(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
            return o(e, t), a(e, [{ key: "init", value: function() { if (this.$container = this.$video.parent().parent(), this.$videoOverlay = this.$container.find(".video-overlay"), this.$dummyOverlay = this.$container.find(".dummy-overlay"), this.youtubeID = this.$video.data("id"), this.domID = this.$video[0].id, window.YT) this.onYouTubeIframeAPIReady();
                    else if (window.onYouTubeIframeAPIReady) this.previousHandler = window.onYouTubeIframeAPIReady, window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady.bind(this);
                    else { var t = document.createElement("script");
                        t.src = "https://www.youtube.com/iframe_api"; var e = document.getElementsByTagName("script")[0];
                        e.parentNode.insertBefore(t, e), window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady.bind(this) } } }, { key: "initAttr", value: function() { this.options = { width: "100%", height: "100%", videoId: this.youtubeID, playerVars: { autoplay: "mobile" !== app.device && this.directPlay, controls: "mobile" === app.device ? 1 : 0, loop: this.hasLoop, iv_load_policy: 3, showinfo: 0, rel: 0 }, events: { onError: this.onError.bind(this), onReady: this.onVideoCanPlay.bind(this), onStateChange: this.onPlayerStateChange.bind(this) } }, this.initPlayer() } }, { key: "initPlayer", value: function() { this.player = new YT.Player(this.domID, this.options), this.hasControls && this.createControls(), this.bind() } }, { key: "bind", value: function() { app._onUpdate.add(this.handlers.update), this.$videoOverlay.on("click." + this.id, this.play.bind(this)), this.$dummyOverlay.on("click." + this.id, this.togglePlay.bind(this)), this.hasControls && "mobile" !== app.device && (this.togglePlayBtn.on("click." + this.id, this.togglePlay.bind(this)), this.progressBarContainer.on("click." + this.id, this.onProgressClick.bind(this)), this.toggleFullScreenBtn.on("click." + this.id, this.toggleFullscreen.bind(this))), this.$container.on("webkitfullscreenchange." + this.id, this.onFullscreenChange.bind(this)), this.$container.on("mozfullscreenchange." + this.id, this.onFullscreenChange.bind(this)), this.$container.on("fullscreenchange." + this.id, this.onFullscreenChange.bind(this)), app.window.on("MSFullscreenChange." + this.id, this.onFullscreenChange.bind(this)), app.window.on("mozfullscreenchange." + this.id, this.onFullscreenChange.bind(this)) } }, {
                key: "play",
                value: function() {
                    this.player.playVideo(), this.$videoOverlay.addClass("hidden"), this.$container.addClass("is-playing"), this.firstPlay && (this.firstPlay = !1, this.showHideControls(!0), "desktop" === app.device && this.$container.on("mousemove." + this.id, this.onMouseMove.bind(this))), this.isPaused = !1, this.isEnded = !1, this._onPlay.dispatch()
                }
            }, { key: "pause", value: function() { this.player.pauseVideo(), this.$container.removeClass("is-playing"), this.isPaused = !0, this._onPause.dispatch() } }, { key: "seek", value: function(t) { "function" == typeof this.player.seekTo && this.player.seekTo(t) } }, { key: "toggleFullscreen", value: function(t) { this.isFullscreen ? document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen() : this.$container[0].requestFullScreen ? this.$container[0].requestFullScreen() : this.$container[0].mozRequestFullScreen ? this.$container[0].mozRequestFullScreen() : this.$container[0].webkitRequestFullScreen ? this.$container[0].webkitRequestFullScreen() : this.$container[0].msRequestFullscreen && this.$container[0].msRequestFullscreen() } }, { key: "update", value: function() { this.hasControls && (this.isLoaded || this.isReady) && "mobile" !== app.device && this.updateProgress() } }, { key: "unbind", value: function() { app._onUpdate.remove(this.handlers.update), "mobile" !== app.device && (this.$videoOverlay.off("click." + this.id), this.$dummyOverlay.off("click." + this.id)), "desktop" === app.device && this.$container.off("mousemove." + this.id), this.hasControls && this.videoControls && "mobile" !== app.device && (this.togglePlayBtn.off("click." + this.id), this.progressBarContainer.off("click." + this.id)), this.$container.off("webkitfullscreenchange." + this.id), this.$container.off("mozfullscreenchange." + this.id), this.$container.off("fullscreenchange." + this.id), app.window.off("MSFullscreenChange." + this.id), app.window.off("mozfullscreenchange." + this.id) } }, { key: "destroy", value: function() { l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this), this.player && this.player.destroy(), this.$videoOverlay.removeClass("hidden"), this.$container.removeClass("is-playing") } }, { key: "onYouTubeIframeAPIReady", value: function() { this.previousHandler && this.previousHandler(), this.initAttr() } }, { key: "onPlayerStateChange", value: function(t) { switch (t.data) {
                        case YT.PlayerState.BUFFERING:
                            break;
                        case YT.PlayerState.PLAYING:
                            this.hasControls && this.togglePlayBtn.addClass("pause"); break;
                        case YT.PlayerState.PAUSED:
                            this.hasControls && this.togglePlayBtn.removeClass("pause"); break;
                        case YT.PlayerState.ENDED:
                            this.onVideoEnd() } } }, { key: "onVideoCanPlay", value: function() { this.hasLoader || setTimeout(this._onLoaded.dispatch.bind(this), 0), this.ready || (this.isReady = !0), this.directPlay && this.play() } }, { key: "onFullscreenChange", value: function() { l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onFullscreenChange", this).call(this), this.isFullscreen ? this.$container.css({ width: "100%", height: "100%" }) : this.$container.css({ width: "", height: "" }) } }, { key: "onEndFullscreen", value: function() { l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onEndFullscreen", this).call(this), this.$container.css({ width: "", height: "" }) } }, { key: "currentTime", get: function() { if ("function" == typeof this.player.getCurrentTime) return this.player.getCurrentTime() } }, { key: "duration", get: function() { if ("function" == typeof this.player.getDuration) return this.player.getDuration() } }, { key: "volume", get: function() { if ("function" == typeof this.player.getVolume) return this.player.getVolume() }, set: function(t) { "function" == typeof this.player.setVolume && this.player.setVolume(t) } }]), e
        }(c.default);
    e.default = d
}, function(t, e, i) { "use strict";

    function n(t) { return t && t.__esModule ? t : { default: t } }

    function s(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function r(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

    function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
    Object.defineProperty(e, "__esModule", { value: !0 }); var a = function() {
            function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
        l = i(24),
        h = n(l),
        u = function(t) {
            function e(t) { s(this, e); var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)); return i._rotateX = 0, i.rotatex = 0, i._rotatey = 0, i.rotatey = 0, i.move = 10, i.ease = .5, i } return o(e, t), a(e, [{ key: "init", value: function() { this.resize(), this.setSelectors(), this.bind() } }, { key: "setSelectors", value: function() { this.$cover = this.$container.find(".video-wrapper") } }, { key: "update", value: function() { this._rotateY = (this.midXratio * this.move * 1e3 | 0) / 1e3, this._rotateX = (this.midYratio * this.move * 1e3 | 0) / 1e3, this.rotateY += (this._rotateY - this.rotateY) * this.ease, this.rotateX += (this._rotateX - this.rotateX) * this.ease, this.rotateY = (1e3 * this.rotateY | 0) / 1e3, this.rotateX = (1e3 * this.rotateX | 0) / 1e3; for (var t = this.$cover.length - 1; t >= 0; t--) TweenLite.set(this.$cover[t], { rotationX: this.rotateX, rotationY: this.rotateY, force3D: !0 }) } }]), e }(h.default);
    e.default = u }, function(t, e, i) {
    (function(t) { "use strict";

        function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 }); var n = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            s = function() {
                function e(n) { i(this, e), this.x = this.y = 0, this.xr = this.yr = 0, this.midXratio = 0, this.midYratio = 0, this.container = n, this.$container = t(n), this.init() } return n(e, [{ key: "init", value: function() { this.resize(), this.bind() } }, { key: "bind", value: function() { this.$container.on("mousemove", this.onMouseMove.bind(this)), this.$container.on("mouseleave", this.onMouseLeave.bind(this)) } }, { key: "unbind", value: function() { this.$container.off("mousemove"), this.$container.off("mouseleave") } }, { key: "onMouseMove", value: function(t) { t.preventDefault(); var e = t.currentTarget,
                            i = e.getBoundingClientRect();
                        this.x = t.clientX - i.left, this.y = t.clientY - i.top, this.xr = this.x / this.containerWidth, this.yr = this.y / this.containerHeight, this.midXratio = (this.x - this.midX) / this.midX, this.midYratio = (this.midY - this.y) / this.midY, this.x = (1e3 * this.x | 0) / 1e3, this.y = (1e3 * this.y | 0) / 1e3, this.xr = (1e3 * this.xr | 0) / 1e3, this.yr = (1e3 * this.yr | 0) / 1e3, this.midXratio = (1e3 * this.midXratio | 0) / 1e3, this.midYratio = (1e3 * this.midYratio | 0) / 1e3, this.midXratio = this.midXratio > 1 ? 1 : this.midXratio, this.midYratio = this.midYratio > 1 ? 1 : this.midYratio, this.hasCursor = !0 } }, { key: "onMouseLeave", value: function() { this.hasCursor = !1 } }, { key: "resize", value: function() { this.containerHeight = this.$container.height(), this.containerWidth = this.$container.width(), this.midX = this.containerWidth / 2, this.midY = this.containerHeight / 2 } }]), e }();
        e.default = s }).call(e, i(1)) }, function(t, e, i) {
    (function(t) { "use strict";

        function n(t) { return t && t.__esModule ? t : { default: t } }

        function s(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function r(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
        Object.defineProperty(e, "__esModule", { value: !0 }); var a = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            l = function t(e, i, n) { null === e && (e = Function.prototype); var s = Object.getOwnPropertyDescriptor(e, i); if (void 0 === s) { var r = Object.getPrototypeOf(e); return null === r ? void 0 : t(r, i, n) } if ("value" in s) return s.value; var o = s.get; if (void 0 !== o) return o.call(n) },
            h = i(26),
            u = n(h),
            c = i(22),
            d = n(c),
            f = function(e) {
                function i(t, e, n) { s(this, i); var o = r(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, n)); return o.youtubeID = t, o.square = e, o } return o(i, e), a(i, [{ key: "init", value: function() { this.setSelectors(), this.bind() } }, { key: "setSelectors", value: function() { this.$content = t(this.content), this.$close = this.$content.find(".close") } }, { key: "bind", value: function() { l(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "bind", this).call(this), this.$close.on("click", this.close.bind(this)) } }, { key: "build", value: function() { l(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "build", this).call(this), this.$contentHolder = t(this.contentHolder), this.$iframeWrapper = this.$contentHolder.find(".iframe-wrapper"), this.$videoYoutube = this.$contentHolder.find(".video-youtube"), this.square && this.$iframeWrapper.addClass("square"), this.$videoYoutube[0].id = "player-" + this.youtubeID + "-" + Math.random().toString(26).substr(2), this.$videoYoutube.attr("data-id", this.youtubeID), this.youtubePlayer = new d.default(this.$videoYoutube[0], { play: !0, controls: !0 }) } }, { key: "destroy", value: function() { this.youtubePlayer.destroy(), this.$close.off("click"), l(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "destroy", this).call(this) } }]), i }(u.default);
        e.default = f }).call(e, i(1)) }, function(t, e, i) { "use strict";

    function n(t) { return t && t.__esModule ? t : { default: t } }

    function s(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function r(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

    function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
    Object.defineProperty(e, "__esModule", { value: !0 }); var a = i(27),
        l = n(a),
        h = function(t) {
            function e(t) { return s(this, e), e.modal || (e.modal = document.querySelector(".modal"), e.modalOverlay = document.querySelector(".modal-overlay")), r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, e.modal, e.modalOverlay, t)) } return o(e, t), e }(l.default);
    e.default = h }, function(t, e, i) {
    (function(t, i) { "use strict";

        function n(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 }); var s = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            r = function() {
                function e(s, r, o) { n(this, e), this.modal = s, this.overlay = r, this.content = o, this.$modal = t(s), this._$overlay = t(r), this._onClose = new i.Signal, this.transitionEnd = this.transitionSelect() } return s(e, [{ key: "init", value: function() { this.bind() } }, { key: "open", value: function() { this.build(), window.getComputedStyle(this.contentHolder).height, this.modal.className = this.modal.className + " modal-open", this.overlay.className = this.overlay.className + " modal-open" } }, { key: "build", value: function() { "#document-fragment" === this.content.nodeName ? (this.contentHolder = document.createElement("div"), this.contentHolder.appendChild(this.content)) : "string" == typeof this.content ? (this.contentHolder = document.createElement("div"), this.contentHolder.innerHTML = this.content) : this.contentHolder = this.content, this.contentHolder.className = "modal-content", this.modal.appendChild(this.contentHolder), this.init() } }, { key: "bind", value: function() { this._$overlay.on("click", this.close.bind(this)), app.window.on("keydown.modal", this.onModalKeyDown.bind(this)) } }, { key: "transitionSelect", value: function() { var t = document.createElement("div"); return t.style.WebkitTransition ? "webkitTransitionEnd" : t.style.MozkitTransition ? "mozTransitionEnd" : t.style.OTransition ? "oTransitionEnd" : "transitionend" } }, { key: "onModalKeyDown", value: function(t) { 27 === t.which && this.close() } }, { key: "close", value: function(t) { t && t.preventDefault(), this.modal.className = "modal", this.overlay.className = "modal-overlay", this.$modal.on(this.transitionEnd, this.destroy.bind(this)) } }, { key: "destroy", value: function() { this.$modal.off(this.transitionEnd), this._onClose.dispatch(), this.overlay.className = "modal-overlay", this.modal.className = "modal", this.modal.innerHTML = "", this._$overlay.off("click"), app.window.off("keydown.modal") } }]), e }();
        e.default = r }).call(e, i(1), i(8)) }, function(t, e, i) {
    (function(t) { "use strict";

        function n(t) { return t && t.__esModule ? t : { default: t } }

        function s(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function r(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
        Object.defineProperty(e, "__esModule", { value: !0 }); var a = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            l = function t(e, i, n) { null === e && (e = Function.prototype); var s = Object.getOwnPropertyDescriptor(e, i); if (void 0 === s) { var r = Object.getPrototypeOf(e); return null === r ? void 0 : t(r, i, n) } if ("value" in s) return s.value; var o = s.get; if (void 0 !== o) return o.call(n) },
            h = i(9),
            u = n(h),
            c = i(11),
            d = n(c),
            f = i(14),
            p = n(f),
            y = i(17),
            g = n(y),
            v = i(18),
            m = n(v),
            b = i(19),
            _ = n(b),
            w = i(25),
            x = n(w),
            k = i(22),
            S = n(k),
            O = function(e) {
                function i(t) { s(this, i); var e = r(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t)); return e.iconRotate = 0, e._iconRotate = 0, e.scrollLocked = !0, e } return o(i, e), a(i, [{ key: "init", value: function() { this.setSelectors(), l(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "init", this).call(this) } }, { key: "setSelectors", value: function() { this.$yearWrapper = this.domElem.find(".year-wrapper"), this.year = this.$yearWrapper.attr("data-year"), this.nextYear = this.$yearWrapper.attr("data-next-year"), this.$head = this.domElem.find(".head"), this.$icon = this.domElem.find(".icon"), this.$img = this.$head.find(".img-wrapper"), this.$imgShadow1 = this.$img.find(".shadow-1"), this.$imgShadow2 = this.$img.find(".shadow-2"), this.$titleSpan = this.$head.find(".title span"), this.$yearI = this.$head.find(".year i"), this.$text = this.$head.find(".text"), this.$blockYoutube = this.domElem.find(".block-youtube"), this.$blockYoutubeQuote = this.domElem.find(".block-youtube-quote"), this.$videoWrapper = this.domElem.find(".block-youtube .video-wrapper, .block-youtube-quote .video-wrapper"), this.$videoYoutube = this.domElem.find(".video-youtube"), this.$videoOverlay = this.domElem.find(".block-youtube .video-wrapper .video-overlay"), this.$bigVideoOverlay = this.domElem.find(".block-youtube-quote .video-wrapper .video-overlay"), this.$blockquote = this.domElem.find(".blockquote"), this.$imgLandscape = this.domElem.find(".block-img-landscape .img-wrapper"), this.$audioPlayer = this.domElem.find(".block-audioplayer"), this.$currentInfo = this.domElem.find(".current-info"), this.$news = this.domElem.find(".block-news .min-wrapper"), this.$openModal = this.$news.find(".open-modal"), this.$shareLilou = this.domElem.find(".share-lilou a"), this.$nextPage = this.domElem.find(".next-page"), this.$nextPageLink = this.$nextPage.find("a"), this.nextPage = this.$nextPage.attr("data-src"), this.$modalContent = t(".modal-youtube-content") } }, { key: "bind", value: function() { l(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "bind", this).call(this), this.$imgShadow1.length && (this.imgShadow1 = new m.default(this.$imgShadow1[0], { animVelocity: .2 })), this.$imgShadow2.length && (this.imgShadow2 = new m.default(this.$imgShadow2[0], { animVelocity: .2 })), this.$icon.length && (this.icon = new m.default(this.$icon[0])), this.yearI = []; for (var t = this.$yearI.length - 1; t >= 0; t--) this.yearI[t] = new m.default(this.$yearI[t], { simpleParallax: t ? .2 : .4 });
                        this.titleSpan = []; for (var t = this.$titleSpan.length - 1; t >= 0; t--) this.titleSpan[t] = new m.default(this.$titleSpan[t], { reveal: { dist: 0 === t ? .001 : 40 * t, s: -.9, e: .1 } });
                        this.$text.length && (this.text = new m.default(this.$text[0], { reveal: { dist: 125, s: -.9, e: .1 } })), this.blockYoutube = []; for (var t = this.$blockYoutube.length - 1; t >= 0; t--) this.blockYoutube[t] = new m.default(this.$blockYoutube[t], { needShow: .2 });
                        this.blockYoutubeQuote = []; for (var t = this.$blockYoutubeQuote.length - 1; t >= 0; t--) this.blockYoutubeQuote[t] = new m.default(this.$blockYoutubeQuote[t], { needShow: .2 }); if (this.videoYoutube = [], this.$videoYoutube.length)
                            for (var t = this.$videoYoutube.length - 1; t >= 0; t--) this.videoYoutube[t] = { animable: new m.default(this.$videoYoutube.eq(t).parent()[0]) }; if (this.$videoWrapper.on("click", this.onVideoYoutubeClick.bind(this)), this.videoOverlay = [], this.bigVideoOverlay = [], this.$videoOverlay.length)
                            for (var t = this.$videoOverlay.length - 1; t >= 0; t--) this.videoOverlay[t] = new m.default(this.$videoOverlay[t]); if (this.$bigVideoOverlay.length)
                            for (var t = this.$bigVideoOverlay.length - 1; t >= 0; t--) this.bigVideoOverlay[t] = new m.default(this.$bigVideoOverlay[t]); if (this.blockquote = [], this.$blockquote.length)
                            for (var t = this.$blockquote.length - 1; t >= 0; t--) this.blockquote[t] = new m.default(this.$blockquote[t], { needShow: .1 }); if (this.imgLandscape = [], this.$imgLandscape.length)
                            for (var t = this.$imgLandscape.length - 1; t >= 0; t--) this.imgLandscape[t] = new m.default(this.$imgLandscape[t], { dist: -60 }); if (this.audioPlayer = [], this.$audioPlayer.length)
                            for (var t = this.$audioPlayer.length - 1; t >= 0; t--) this.audioPlayer[t] = new _.default(this.$audioPlayer[0]); if (this.news = [], this.$news.length)
                            for (var t = this.$news.length - 1; t >= 0; t--) this.news[t] = new g.default(this.$news[t]);
                        this.$openModal.on("click", this.onOpenModalClick.bind(this)), this.$nextPageLink.on("click", this.onNextPageClick.bind(this)), this.disableNext = !!this.$shareLilou.length, this.$shareLilou.on("click", d.default.openShare) } }, { key: "unbind", value: function() { if (l(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "unbind", this).call(this), this.$videoWrapper.off("click"), this.videoYoutube.length)
                            for (var t = this.videoYoutube.length - 1; t >= 0; t--) "undefined" != typeof this.videoYoutube[t].player && this.videoYoutube[t].player.destroy(); if (this.audioPlayer.length)
                            for (var t = this.audioPlayer.length - 1; t >= 0; t--) this.audioPlayer[t].destroy();
                        this.$openModal.off("click"), this.$nextPageLink.off("click"), this.$shareLilou.off("click"), this.modal && this.modal.destroy() } }, { key: "onVideoYoutubeClick", value: function(e) { var i = t(e.currentTarget),
                            n = this.$videoWrapper.index(i); "undefined" == typeof this.videoYoutube[n].player && (this.videoYoutube[n].player = new S.default(this.$videoYoutube[n], { play: !0, controls: !0 })) } }, { key: "onOpenModalClick", value: function(e) { e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(); var i = t(e.currentTarget),
                            n = i.attr("data-youtube-id"),
                            s = i.attr("data-square"),
                            r = this.$modalContent.clone()[0];
                        i.addClass("clicked"), r.style.display = "", this.modal || (this.modal = new x.default(n, s, r), this.modal._onClose.add(this.onModalClose, this), this.modal.open()) } }, { key: "onModalClose", value: function() { this.$openModal.removeClass("clicked"), this.modal._onClose.removeAll(), this.modal = null } }, { key: "onNextPageClick", value: function(t) { t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), this.scrollLocked = app.goToNext = !0, app.$navLayer.removeClass("hidden"), app._navLayerY = -this.h, app.nextEase = .1 } }, { key: "goToNextPage", value: function() { History.pushState(null, document.title, this.nextPage) } }, { key: "update", value: function() { l(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "update", this).call(this); var t = -this.vy > 50 ? 50 : -this.vy < -50 ? -50 : -this.vy; if (this.imgShadow1 && this.imgShadow1.update(-this.y, 2 * t), this.imgShadow2 && this.imgShadow2.update(-this.y, 4 * t), this.icon && (this.icon.update(-this.y), this.icon.isInViewport && (this._iconRotate -= .5 + -this.vy / 6, this.iconRotate += .1 * (this._iconRotate - this.iconRotate), this.iconRotate = (1e3 * this.iconRotate | 0) / 1e3, u.default.transform(this.icon.elem, "rotateZ(" + this.iconRotate + "deg"))), this.yearI)
                            for (var e = this.yearI.length - 1; e >= 0; e--) this.yearI[e].update(-this.y); if (this.titleSpan)
                            for (var e = this.titleSpan.length - 1; e >= 0; e--) this.titleSpan[e].update(-this.y, t); if (this.text && this.text.update(-this.y, t), this.blockYoutube)
                            for (var e = this.blockYoutube.length - 1; e >= 0; e--) this.blockYoutube[e].update(-this.y, t); if (this.blockYoutubeQuote)
                            for (var e = this.blockYoutubeQuote.length - 1; e >= 0; e--) this.blockYoutubeQuote[e].update(-this.y, t); if (this.videoYoutube)
                            for (var e = this.videoYoutube.length - 1; e >= 0; e--) this.videoYoutube[e].animable.update(-this.y), this.videoYoutube[e].animable.isInViewport || !this.videoYoutube[e].player || this.videoYoutube[e].player.isPaused || this.videoYoutube[e].player.pause(); if (this.videoOverlay)
                            for (var e = this.videoOverlay.length - 1; e >= 0; e--)
                                if (this.videoOverlay[e].update(-this.y), this.videoOverlay[e].ratio >= 0 && this.videoOverlay[e].ratio <= 1) { var n = 1 + (1 - this.videoOverlay[e].ratio) / 5;
                                    n = (1e3 * n | 0) / 1e3, u.default.transform(this.videoOverlay[e].elem, "translate3d(0, 0, 0) scale(" + n + ")") }
                        if (this.bigVideoOverlay)
                            for (var e = this.bigVideoOverlay.length - 1; e >= 0; e--)
                                if (this.bigVideoOverlay[e].update(-this.y), this.bigVideoOverlay[e].ratio >= 0 && this.bigVideoOverlay[e].ratio <= 1) { var s = 100 * (1 - this.bigVideoOverlay[e].ratio);
                                    s = (1e3 * s | 0) / 1e3, u.default.transform(this.bigVideoOverlay[e].elem, "translate3d(0, " + -s + "px, 0)") }
                        if (this.blockquote)
                            for (var e = this.blockquote.length - 1; e >= 0; e--) this.blockquote[e].update(-this.y); if (this.imgLandscape)
                            for (var e = this.imgLandscape.length - 1; e >= 0; e--) this.imgLandscape[e].update(-this.y); if (this.audioPlayer)
                            for (var e = this.$audioPlayer.length - 1; e >= 0; e--) this.audioPlayer[e].update(); if (this.news)
                            for (var e = this.news.length - 1; e >= 0; e--) this.news[e].update(-this.y, t) } }, { key: "resize", value: function() { if (l(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "resize", this).call(this), this.imgShadow1 && this.imgShadow1.resize(), this.imgShadow2 && this.imgShadow2.resize(), this.icon && this.icon.resize(), this.yearI)
                            for (var t = this.yearI.length - 1; t >= 0; t--) this.yearI[t].resize(); if (this.titleSpan)
                            for (var t = this.titleSpan.length - 1; t >= 0; t--) this.titleSpan[t].resize(); if (this.text && this.text.resize(), this.blockYoutube)
                            for (var t = this.blockYoutube.length - 1; t >= 0; t--) this.blockYoutube[t].resize(); if (this.blockYoutubeQuote)
                            for (var t = this.blockYoutubeQuote.length - 1; t >= 0; t--) this.blockYoutubeQuote[t].resize(); if (this.videoYoutube)
                            for (var t = this.videoYoutube.length - 1; t >= 0; t--) this.videoYoutube[t].animable.resize(); if (this.videoOverlay)
                            for (var t = this.videoOverlay.length - 1; t >= 0; t--) this.videoOverlay[t].resize(); if (this.bigVideoOverlay)
                            for (var t = this.bigVideoOverlay.length - 1; t >= 0; t--) this.bigVideoOverlay[t].resize(); if (this.blockquote)
                            for (var t = this.blockquote.length - 1; t >= 0; t--) this.blockquote[t].resize(); if (this.imgLandscape)
                            for (var t = this.imgLandscape.length - 1; t >= 0; t--) this.imgLandscape[t].resize(); if (this.audioPlayer)
                            for (var t = this.audioPlayer.length - 1; t >= 0; t--) this.audioPlayer[t].resize(); if (this.news)
                            for (var t = this.news.length - 1; t >= 0; t--) this.news[t].resize() } }, { key: "onCompleteAnimateIn", value: function() { var t = this;
                        this.resize(), this.domElem.addClass("shown"), setTimeout(function() { t.scrollLocked = !1, t._isAnimatedIn.dispatch(), t.domElem.addClass("animated"), setTimeout(function() { t.resize(); var e = 0 | t.year;
                                e < 100 && e > 90 ? e = e - 100 + app.header.liIn19 : e += app.header.liIn19, app.header.scrollable.goTo(e) }, 0) }, 1400) } }]), i }(p.default);
        e.default = O }).call(e, i(1)) }, function(t, e, i) { "use strict";

    function n(t) { return t && t.__esModule ? t : { default: t } }

    function s(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function r(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

    function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
    Object.defineProperty(e, "__esModule", { value: !0 }); var a = function() {
            function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
        l = function t(e, i, n) { null === e && (e = Function.prototype); var s = Object.getOwnPropertyDescriptor(e, i); if (void 0 === s) { var r = Object.getPrototypeOf(e); return null === r ? void 0 : t(r, i, n) } if ("value" in s) return s.value; var o = s.get; if (void 0 !== o) return o.call(n) },
        h = i(14),
        u = n(h),
        c = function(t) {
            function e(t) { s(this, e); var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)); return i.scrollLocked = !0, i } return o(e, t), a(e, [{ key: "init", value: function() { this.setSelectors(), l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this) } }, { key: "setSelectors", value: function() { this.$creditsLink = app.body.find("#footer .credits") } }, { key: "bind", value: function() { l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "bind", this).call(this), this.$creditsLink.addClass("active"), this.$creditsLink.on("click", this.onCreditsLinkClick.bind(this)) } }, { key: "unbind", value: function() { l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "unbind", this).call(this), this.$creditsLink.off("click") } }, { key: "onCreditsLinkClick", value: function(t) { t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation() } }, { key: "onCompleteAnimateIn", value: function() { var t = this;
                    this.resize(), this.domElem.addClass("shown"), setTimeout(function() { t._isAnimatedIn.dispatch() }, 1300) } }, { key: "animateOut", value: function() { this.$creditsLink.removeClass("active"), l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "animateOut", this).call(this) } }]), e }(u.default);
    e.default = c }, function(t, e, i) { "use strict";

    function n(t) { return t && t.__esModule ? t : { default: t } }

    function s(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function r(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

    function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
    Object.defineProperty(e, "__esModule", { value: !0 }); var a = function() {
            function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
        l = i(14),
        h = n(l),
        u = function(t) {
            function e(t) { s(this, e); var i = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)); return i.scrollLocked = !0, i } return o(e, t), a(e, [{ key: "onCompleteAnimateIn", value: function() { var t = this;
                    this.resize(), this.domElem.addClass("shown"), setTimeout(function() { t._isAnimatedIn.dispatch() }, 1300) } }]), e }(h.default);
    e.default = u }, function(t, e, i) {
    (function(t) { "use strict";

        function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 }); var n = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            s = function() {
                function e() { i(this, e), this._onStateChange = new t.Signal, "scrollRestoration" in history && (history.scrollRestoration = "manual"), this.bind() } return n(e, [{ key: "bind", value: function() { app.body.on("click.router", "a:not([target])", this.onClickLink.bind(this)), app.window.on("statechange", this.onStateChange.bind(this)) } }, { key: "onClickLink", value: function(t) { t.preventDefault(), this.previousUrl = window.location.href; var e = t.currentTarget.getAttribute("href"); /:3000/.test(e) && (e = this.getPathName(e)), History.pushState(null, document.title, e), window.ga && ga("send", "pageview") } }, { key: "onStateChange", value: function() { app.html.addClass("busy"); var t = History.getState();
                        this._onStateChange.dispatch({ state: t, path: t.url }) } }, { key: "getPathName", value: function(t) { var e = document.createElement("a"); return e.href = t, ("/" === e.pathname.substr(0, 1) ? e.pathname : "/" + e.pathname) + e.search } }]), e }();
        e.default = s }).call(e, i(8)) }, function(t, e, i) {
    (function(t) {
        "use strict";

        function n(t) { return t && t.__esModule ? t : { default: t } }

        function s(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            o = i(9),
            a = n(o),
            l = i(33),
            h = n(l),
            u = function() {
                function e(t) { s(this, e), this.domElem = app.body.find(t), this.thousandY = 0, this._thousandY = 0, this.isOpen = !1, this.init() }
                return r(e, [{ key: "init", value: function() { this.setSelectors(), this.bind() } }, { key: "setSelectors", value: function() { this.$background = this.domElem.find(".background"), this.$backgroundLi = this.$background.find("li"), this.$scrollable = this.domElem.find(".scrollable-container"), this.$scrollableUl = this.$scrollable.find("ul"), this.$scrollableLi = this.$scrollable.find("li"), this.$yearFill = this.$scrollableLi.find(".fill"), this.$yearStroke = this.$scrollableLi.find(".stroke"), this.$openTimeline = this.domElem.find(".open-timeline"), this.$timelineWrapper = this.domElem.find(".timeline-wrapper"), this.$closeTimeline = this.$timelineWrapper.find(".close"), this.$thousandHundreds = this.domElem.find(".thousand-hundreds-wrapper"), this.$thousand = this.$thousandHundreds.find(".thousand"), this.$hundred = this.$thousandHundreds.find(".hundred"), this.$progressWrapper = this.domElem.find(".progress-wrapper"), this.$currentYear = this.$progressWrapper.find(".current-year"), this.$nextYear = this.$progressWrapper.find(".next-year"), this.$progress = this.$progressWrapper.find(".progress") } }, { key: "bind", value: function() { app._onResize.add(this.resize, this), app._onUpdate.add(this.update, this), this.scrollable = new h.default(this.$scrollable[0], this.$timelineWrapper[0], { elem: this.$scrollableLi[0], count: this.$scrollableLi.length - 1, height: this.$scrollableLi.height(), ease: .1 }), this.scrollable._indexChanged.add(this.onIndexChange, this), this.$scrollableLi.on("click", this.onScrollableLiClick.bind(this)), this.$openTimeline.on("click", this.onOpenTimelineClick.bind(this)), this.$progressWrapper.on("click", this.onOpenTimelineClick.bind(this)), this.$closeTimeline.on("click", this.onCloseTimelineClick.bind(this)), app.viewController._viewAnimatedIn.add(this.onViewAnimatedIn, this), this.onViewAnimatedIn() } }, { key: "onIndexChange", value: function(t) { this.$scrollableLi.removeClass("active").eq(t).addClass("active"), this.$backgroundLi.removeClass("active").eq(t).addClass("active") } }, {
                    key: "onScrollableLiClick",
                    value: function(e) {
                        app.timelinelNav = !0, app.viewController.currentView.domElem[0].style.opacity = 0;
                        var i = t(e.currentTarget);
                        if (i.addClass("clicked"), !i.hasClass("active")) { var n = i.index();
                            this.scrollable.goTo(n) }
                    }
                }, { key: "onOpenTimelineClick", value: function() { this.isOpen = !0, app._navLayerY = 0, this.$scrollableLi.removeClass("clicked"), this.$timelineWrapper.addClass("open") } }, { key: "onCloseTimelineClick", value: function() { this.$timelineWrapper.removeClass("open"), this.isOpen = !1 } }, { key: "onViewAnimatedIn", value: function() { if (app.viewController.currentView) { var t = this.padYear(app.viewController.currentView.year),
                                e = this.padYear(app.viewController.currentView.nextYear);
                            this.$currentYear.text(t), this.$nextYear.text(e) } } }, { key: "padYear", value: function(t) { return t ? t > 90 && t < 100 ? "19" + t : "20" + t : "" } }, { key: "update", value: function() { if (app.viewController.currentView) { var t = (1e6 * (1 - app.viewController.currentView.progress) | 0) / 1e4;
                            this.$progress[0].style.webkitClipPath = "inset(0 " + t + "% 0 0)", this.$progress[0].style.clipPath = "inset(0 " + t + "% 0 0)" } var e = this.thousandEnd - this.thousandStart;
                        this._thousandY = this.scrollable.translateY < this.thousandStart ? 0 : this.scrollable.translateY > this.thousandEnd ? e : this.scrollable.translateY - this.thousandStart, this._thousandY = (1e3 * this._thousandY | 0) / 1e3, this.thousandY += .1 * (this._thousandY - this.thousandY), this.thousandY = (1e3 * this.thousandY | 0) / 1e3, a.default.transform(this.$thousand[0], "translate3d(0, " + -this.thousandY + "px, 0"), a.default.transform(this.$hundred[0], "translate3d(0, " + -this._thousandY + "px, 0") } }, { key: "resize", value: function() { var t = this;
                        this.liIn19 = 0, this.liHeight = this.$scrollableLi.height(), this.$scrollableUl.css("padding-bottom", app.h - this.liHeight); for (var e = this.$yearFill.length - 1; e >= 0; e--) { var i = 0 | this.$yearFill.eq(e).text();
                            i > 90 && i < 100 && this.liIn19++ }
                        this.thousandStart = this.liHeight * this.liIn19 - this.liHeight, this.thousandEnd = this.liHeight * this.liIn19, app.viewController.currentView.year && setTimeout(function() { var e = 0 | app.viewController.currentView.year;
                            e < 100 && e > 90 ? e = e - 100 + t.liIn19 : e += t.liIn19, t.scrollable.goTo(e) }, 0) } }]), e
            }();
        e.default = u
    }).call(e, i(1))
}, function(t, e, i) {
    (function(t) { "use strict";

        function n(t) { return t && t.__esModule ? t : { default: t } }

        function s(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function r(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
        Object.defineProperty(e, "__esModule", { value: !0 }); var a = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            l = function t(e, i, n) { null === e && (e = Function.prototype); var s = Object.getOwnPropertyDescriptor(e, i); if (void 0 === s) { var r = Object.getPrototypeOf(e); return null === r ? void 0 : t(r, i, n) } if ("value" in s) return s.value; var o = s.get; if (void 0 !== o) return o.call(n) },
            h = i(9),
            u = n(h),
            c = i(34),
            d = n(c),
            f = function(e) {
                function i(e, n) { var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { elem: null, count: 0, height: 0, ease: .1 };
                    s(this, i); var a = r(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments)); return a.serrated = o, a.translateY = 0, a._indexChanged = new t.Signal, a } return o(i, e), a(i, [{ key: "goTo", value: function(t) { this._y = t * this.serrated.height + this.serrated.height / 2 } }, { key: "update", value: function() { this.deltaY = this._y - this.y, this.vy += this.deltaY * this.easing, this.y += this.vy *= this.friction, this.y = (1e3 * this.y | 0) / 1e3, this.progress = (this.y / this.maxY * 1e3 | 0) / 1e3; var t = this.index;
                        this.index = this.progress * this.serrated.count + .5 | 0, t !== this.index && this._indexChanged.dispatch(this.index), this.thumb && this.thumb.update(this.progress), this.translateY += (this.index * this.serrated.height - this.translateY) * this.serrated.ease, this.translateY = (1e3 * this.translateY | 0) / 1e3, u.default.transform(this.$scrollable[0], "translate3d(0, " + -this.translateY + "px, 0)") } }, { key: "resize", value: function() { l(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "resize", this).call(this), this.serrated.height = this.serrated.elem.offsetHeight, this.maxY = this.serrated.count * this.serrated.height, this.deltaY = this._y = this.y = 0 } }]), i }(d.default);
        e.default = f }).call(e, i(8)) }, function(t, e, i) {
    (function(t) { "use strict";

        function n(t) { return t && t.__esModule ? t : { default: t } }

        function s(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            o = i(35),
            a = n(o),
            l = i(9),
            h = n(l),
            u = function() {
                function e(i, n) { s(this, e), this.easing = .6, this.friction = .2, this.y = this._y = this.vy = this.touchY = this.progress = 0, this.isActive = !1, this.container = i, this.$container = t(i), this.parent = n, this.$parent = t(n), this.wheelEvent = "onwheel" in window ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll", this.handlers = { update: this.update.bind(this), resize: this.resize.bind(this) }, this.init() } return r(e, [{ key: "init", value: function() { this.setSelectors(), this.bind() } }, { key: "setSelectors", value: function() { this.$scrollable = this.$container.find(".scrollable"), this.$thumb = this.$container.find(".thumb") } }, { key: "bind", value: function() { app._onResize.add(this.handlers.resize) } }, { key: "bindScrollable", value: function() { app._onUpdate.add(this.handlers.update), "desktop" === app.device ? this.$parent.length ? this.$parent.on(this.wheelEvent, this.onScroll.bind(this)) : this.$container.on(this.wheelEvent, this.onScroll.bind(this)) : this.$parent.length ? (this.$parent.on("touchstart", this.onTouchStart.bind(this)), this.$parent.on("touchmove", this.onTouchMove.bind(this))) : (this.$container.on("touchstart", this.onTouchStart.bind(this)), this.$container.on("touchmove", this.onTouchMove.bind(this))), this.thumb = new a.default(this.$thumb[0]), this.thumb.enabled = !0 } }, { key: "unbind", value: function() { app._onResize.remove(this.handlers.resize), this.unbindScrollable(), this.enabled = !1 } }, { key: "unbindScrollable", value: function() { app._onUpdate.remove(this.handlers.update), "desktop" === app.device ? this.$parent.length ? this.$parent.off(this.wheelEvent) : this.$container.off(this.wheelEvent) : this.$parent.length ? (this.$parent.off("touchstart"), this.$parent.off("touchmove")) : (this.$container.off("touchstart"), this.$container.off("touchmove")), this.y = this._y = this.vy = 0, this.thumb && (this.thumb.enabled = !1) } }, { key: "onScroll", value: function(t) { t.preventDefault(), t.stopPropagation(), this._y += t ? 1 === t.deltaMode ? 20 * t.deltaY : t.deltaY : 0, this._y = this._y < 0 ? 0 : this._y > this.maxY ? this.maxY : this._y, this.thumb && this.thumb.scroll() } }, { key: "onTouchStart", value: function(t) { t.stopPropagation(), t.stopImmediatePropagation(); var e = t.touches[0] || t.changedTouches[0];
                        this.touchY = e.pageY } }, { key: "onTouchMove", value: function(t) { t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(); var e = t.touches[0] || t.changedTouches[0],
                            i = this.touchY;
                        this.touchY = e.pageY, this._y += i - this.touchY, this._y = this._y < 0 ? 0 : this._y > this.maxY ? this.maxY : this._y, this.thumb && this.thumb.scroll() } }, { key: "update", value: function() { this.deltaY = this._y - this.y, this.vy += this.deltaY * this.easing, this.y += this.vy *= this.friction, this.y = (1e3 * this.y | 0) / 1e3, this.progress = (this.y / this.maxY * 1e3 | 0) / 1e3, h.default.transform(this.$scrollable[0], "translate3d(0, " + -this.y + "px, 0)"), this.thumb && this.thumb.update(this.progress) } }, { key: "resize", value: function() { this.containerHeight = this.$container.height(), this.scrollableHeight = this.$scrollable.height(), this.maxY = this.scrollableHeight - this.containerHeight, this.y > this.maxY && (this.y = this._y = this.vy = this.maxY), this.enabled = this.scrollableHeight > this.containerHeight, this.thumb && this.thumb.resize(this.containerHeight, this.scrollableHeight) } }, { key: "enabled", get: function() { return this.isActive }, set: function(t) { this.isActive = t, this.isActive ? this.bindScrollable() : this.unbindScrollable() } }]), e }();
        e.default = u }).call(e, i(1)) }, function(t, e, i) {
    (function(t) { "use strict";

        function n(t) { return t && t.__esModule ? t : { default: t } }

        function s(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            o = i(9),
            a = n(o),
            l = function() {
                function e(i) { s(this, e), this.y = 0, this.elem = i, this.$elem = t(i), this.isActive = !1, this.handlers = { update: this.update.bind(this), resize: this.resize.bind(this) } } return r(e, [{ key: "show", value: function() { this.$elem.removeClass("hidden") } }, { key: "hide", value: function() { this.$elem.addClass("hidden") } }, { key: "scroll", value: function() { var t = this;
                        this.show(), clearTimeout(this.hideTimeout), this.hideTimeout = setTimeout(function() { t.hide() }, 500) } }, { key: "update", value: function(t) { this.y = (this.containerHeight - this.thumbHeight) * t, a.default.transform(this.$elem[0], "translate3d(0, " + this.y + "px, 0)") } }, { key: "resize", value: function(t, e) { this.containerHeight = t, this.thumbHeight = t * (t / e), this.$elem.height(this.thumbHeight) } }, { key: "enabled", get: function() { return this.isActive }, set: function(t) { this.isActive = t } }]), e }();
        e.default = l }).call(e, i(1)) }, function(t, e, i) { "use strict";

    function n(t) { return t && t.__esModule ? t : { default: t } }

    function s(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
    Object.defineProperty(e, "__esModule", { value: !0 }); var r = function() {
            function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
        o = i(11),
        a = n(o),
        l = function() {
            function t(e) { s(this, t), this.domElem = app.body.find(e), this.init() } return r(t, [{ key: "init", value: function() { this.setSelectors(), this.bind() } }, { key: "setSelectors", value: function() { this.$shareLink = this.domElem.find(".share-nav a") } }, { key: "bind", value: function() { this.$shareLink.on("click", a.default.openShare) } }]), t }();
    e.default = l }, function(t, e, i) {
    (function(t, i) { "use strict";

        function n(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 }); var s = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            r = function() {
                function e() { n(this, e), this.currentView = null, this.prevView = null, this.nextView = null, this._viewAnimatedIn = new t.Signal, this.init() } return s(e, [{ key: "init", value: function() { app.router._onStateChange.add(this.onStateChange, this), this.currentView = app.container.children().attr("id"), this.ajaxify() } }, { key: "onStateChange", value: function(t) { var e = this,
                            n = t.state,
                            s = t.path;
                        n.data.silent || (this.prevView = this.currentView, this.xhr && this.xhr.abort(), this.xhr = i.ajax({ url: s, type: "GET", dataType: "html", success: function(t) { e.setContent(t), e.xhr = null }, error: function(t) { app.config.debug, 404 === t.status && (e.setContent(t.response), e.xhr = null) } })) } }, { key: "setContent", value: function(t) { var e = i("<div/>").html(t),
                            n = e.find("#main").children();
                        document.title = e.find("title").text(), this.nextView = n.attr("id"), this.currentView.id === this.nextView && (this.currentView.domElem[0].id = ""), n[0].style.opacity = 0, n[0].style.display = "none", app.container.append(n), this.ajaxify() } }, { key: "ajaxify", value: function() { if (this.nextView && app.config.sitemap[this.nextView]) { var t = app.config.sitemap[this.nextView].class;
                            this.currentView = new t(this.nextView) } else if (app.config.sitemap[this.currentView]) { var e = app.config.sitemap[this.currentView].class;
                            this.currentView = new e(this.currentView) } else { var i = app.config.sitemap.view.class;
                            this.nextView ? this.currentView = new i(this.nextView) : this.currentView = new i(this.currentView) }
                        this.prevView ? (this.prevView._isAnimatedOut.addOnce(this.animateCurrentView, this), this.currentView._isAnimatedIn.addOnce(this.removeOldContent, this), this.prevView.animateOut()) : this.animateCurrentView() } }, { key: "removeOldContent", value: function() { this.prevView.domElem.remove(), this.prevView = null } }, { key: "animateCurrentView", value: function() { this._viewAnimatedIn.dispatch(), this.currentView.animateIn(), app.html.removeClass("busy") } }]), e }();
        e.default = r }).call(e, i(8), i(1)) }]);