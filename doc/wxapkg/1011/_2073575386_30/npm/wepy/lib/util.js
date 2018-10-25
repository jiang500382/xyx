function b(a) {
    return a && "object" === (void 0 === a ? "undefined" : d(a)) && !![ "@@__IMMUTABLE_ITERABLE__@@", "@@__IMMUTABLE_KEYED__@@", "@@__IMMUTABLE_INDEXED__@@", "@@__IMMUTABLE_ORDERED__@@", "@@__IMMUTABLE_RECORD__@@" ].filter(function(b) {
        return a[b];
    }).length;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
    return typeof a;
} : function(a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
};

exports.default = {
    $isEmpty: function(a) {
        return 0 === Object.keys(a).length;
    },
    $isEqual: function(a, c, f, g) {
        if (b(a)) return a.equals(c);
        if (b(c)) return c.equals(a);
        if (a === c) return 0 !== a || 1 / a == 1 / c;
        if (a !== a) return c !== c;
        if (!a || !c) return a === c;
        var h = void 0 === a ? "undefined" : d(a);
        return ("function" === h || "object" === h || "object" === (void 0 === c ? "undefined" : d(c))) && this.$isDeepEqual(a, c, f, g);
    },
    $isDeepEqual: function(g, h, j, k) {
        b(g) && (g = g.toJS()), b(h) && (h = h.toJS());
        var m = this, n = toString.call(g);
        if (n !== toString.call(h)) return !1;
        switch (n) {
          case "[object RegExp]":
          case "[object String]":
            return "" + g == "" + h;

          case "[object Number]":
            return +g == +g ? 0 == +g ? 1 / +g == 1 / h : +g == +h : +h != +h;

          case "[object Date]":
          case "[object Boolean]":
            return +g == +h;

          case "[object Symbol]":
            var i = "undefined" == typeof Symbol ? null : Symbol.prototype;
            return i.valueOf.call(g) === i.valueOf.call(h);
        }
        var o = "[object Array]" === n;
        if (!o) {
            if ("object" !== (void 0 === g ? "undefined" : d(g)) || "object" !== (void 0 === h ? "undefined" : d(h))) return g === h;
            var q = g.constructor, r = h.constructor;
            if (q !== r && !("function" == typeof q && q instanceof q && "function" == typeof r && r instanceof r) && "constructor" in g && "constructor" in h) return !1;
        }
        j = j || [], k = k || [];
        for (var u = j.length; u--; ) if (j[u] === g) return k[u] === h;
        if (j.push(g), k.push(h), o) {
            if ((u = g.length) !== h.length) return !1;
            for (;u--; ) if (!m.$isEqual(g[u], h[u], j, k)) return !1;
        } else {
            var f, s = Object.keys(g);
            if (u = s.length, Object.keys(h).length !== u) return !1;
            for (;u--; ) if (f = s[u], !m.$has(h, f) || !m.$isEqual(g[f], h[f], j, k)) return !1;
        }
        return j.pop(), k.pop(), !0;
    },
    $has: function(a, b) {
        if ("[object Array]" !== toString.call(b)) return a && hasOwnProperty.call(a, b);
        for (var c, d = b.length, e = 0; e < d; e++) {
            if (c = b[e], !a || !hasOwnProperty.call(a, c)) return !1;
            a = a[c];
        }
        return !!d;
    },
    $extend: function() {
        var b, g, e, h, j, k, i = arguments[0] || {}, m = 1, c = arguments.length, a = !1, l = this;
        for ("boolean" == typeof i && (a = i, i = arguments[m] || {}, m++), "object" !== (void 0 === i ? "undefined" : d(i)) && "function" != typeof i && (i = {}), 
        m === c && (i = this, m--); m < c; m++) if (b = arguments[m]) for (g in b) e = i[g], 
        h = b[g], i !== h && (a && h && (l.$isPlainObject(h) || (j = Array.isArray(h))) ? (j ? (j = !1, 
        k = e && Array.isArray(e) ? e : []) : k = e && l.$isPlainObject(e) ? e : {}, i[g] = l.$extend(a, k, h)) : i[g] = h);
        return i;
    },
    $copy: function(a) {
        var c = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
        return Array.isArray(a) ? this.$extend(c, [], a) : "null" == "" + a ? a : "object" === (void 0 === a ? "undefined" : d(a)) ? b(a) ? a : this.$extend(c, {}, a) : a;
    },
    $isPlainObject: function(a) {
        var b, c;
        return a && "[object Object]" === Object.prototype.toString.call(a) && (!(b = Object.getPrototypeOf(a)) || "function" == typeof (c = Object.prototype.hasOwnProperty.call(b, "constructor") && b.constructor) && Object.prototype.hasOwnProperty.toString.call(c) === Object.prototype.hasOwnProperty.toString.call(Object));
    },
    $resolvePath: function(a, b) {
        if (!b) return a;
        if ("/" === b[0]) return b = b.substr(1), this.$resolvePath("", b);
        if ("." !== b[0]) return this.$resolvePath(a, "./" + b);
        var c = a.split("/");
        return "." === b[0] && "/" === b[1] ? (b = b.substr(2), "." === b[0] ? this.$resolvePath(c.join("/"), b) : (c.length ? c[c.length - 1] = b : c = [ b ], 
        1 === c.length ? "/" + c[0] : c.join("/"))) : "." === b[0] && "." === b[1] && "/" === b[2] ? (b = b.replace(/^\.*/gi, ""), 
        c.pop(), this.$resolvePath(c.join("/"), "." + b)) : "." === b[0] ? this.$resolvePath(a, b.substr(1)) : void 0;
    },
    $getParams: function(a) {
        var b = {}, c = a.indexOf("?");
        if (-1 !== c) {
            var d, e = a.substr(c + 1);
            e.split("&").forEach(function(a) {
                d = a.split("="), b[d[0]] = decodeURIComponent(d[1]);
            });
        }
        return b;
    },
    isImmutable: b,
    hyphenate: function(a) {
        return a.replace(/([^-])([A-Z])/g, "$1-$2").replace(/([^-])([A-Z])/g, "$1-$2").toLowerCase();
    },
    camelize: function(a) {
        return a.replace(/-(\w)/g, function(a, b) {
            return b ? b.toUpperCase() : "";
        });
    }
};