function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var b = require("./event.js"), g = a(b), c = require("./util.js"), d = a(c), f = [ "onLoad", "onReady", "onShow", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onTabItemTap" ], h = [ "onLaunch", "onShow", "onHide", "onError", "onPageNotFound" ], i = function b(c, j, e) {
    j.$prefix = d.default.camelize(e || ""), Object.getOwnPropertyNames(j.components || {}).forEach(function(d) {
        var a = j.components[d], f = new a();
        f.$initMixins(), f.$name = d;
        var g = e ? e + f.$name + "$" : "$" + f.$name + "$";
        j.$com[d] = f, b(c, f, g);
    }), Object.getOwnPropertyNames(j.constructor.prototype || []).forEach(function(a) {
        "constructor" !== a && -1 === f.indexOf(a) && (c[a] = function() {
            j.constructor.prototype[a].apply(j, arguments), j.$apply();
        });
    });
    var h = Object.getOwnPropertyNames(j.methods || []);
    return j.$mixins.forEach(function(a) {
        h = h.concat(Object.getOwnPropertyNames(a.methods || []));
    }), h.forEach(function(b) {
        c[j.$prefix + b] = function(e) {
            for (var k = arguments.length, m = Array(1 < k ? k - 1 : 0), a = 1; a < k; a++) m[a - 1] = arguments[a];
            var o = new g.default("system", this, e.type);
            o.$transfor(e);
            var i, n, q, f = [], p = 0;
            if (e.currentTarget && e.currentTarget.dataset) {
                for (i = e.currentTarget.dataset; void 0 !== i["wpy" + b.toLowerCase() + (n = String.fromCharCode(65 + p++))]; ) f.push(i["wpy" + b.toLowerCase() + n]);
                void 0 !== i.comIndex && (q = i.comIndex);
            }
            if (void 0 !== q) {
                q = ("" + q).split("-");
                for (var c = q.length, l = c; 0 < c--; ) {
                    l = c;
                    for (var h = j; 0 < l--; ) h = h.$parent;
                    h.$setIndex(q.shift());
                }
            }
            m = m.concat(f);
            var d, r, s = j.methods[b];
            return s && (d = s.apply(j, m.concat(o))), j.$mixins.forEach(function(a) {
                a.methods[b] && (r = a.methods[b].apply(j, m.concat(o)));
            }), j.$apply(), s ? d : r;
        };
    }), c;
};

exports.default = {
    $createApp: function(a, b) {
        var c = {}, d = new a();
        return this.$instance || (d.$init(this, b), this.$instance = d, this.$appConfig = b), 
        2 === arguments.length && !0 === arguments[1] && (c.$app = d), d.$wxapp = getApp(), 
        h = h.concat(b.appEvents || []), f = f.concat(b.pageEvents || []), h.forEach(function(b) {
            c[b] = function() {
                for (var c = arguments.length, e = Array(c), f = 0; f < c; f++) e[f] = arguments[f];
                var a;
                return !d.$wxapp && (d.$wxapp = getApp()), d[b] && (a = d[b].apply(d, e)), a;
            };
        }), c;
    },
    $createPage: function(b, c) {
        var d = this, g = {}, h = new b();
        return "string" == typeof c && (this.$instance.$pages["/" + c] = h), h.$initMixins(), 
        ("boolean" == typeof c && c || 3 === arguments.length && !0 === arguments[2]) && (g.$page = h), 
        g.onLoad = function() {
            for (var a = arguments.length, c = Array(a), e = 0; e < a; e++) c[e] = arguments[e];
            "options" in this || (this.options = c.length ? c[0] : {}), h.$name = b.name || "unnamed", 
            h.$init(this, d.$instance, d.$instance);
            var f = d.$instance.__prevPage__, g = {};
            g.from = f || void 0, f && f.$preloadData && (g.preload = f.$preloadData, f.$preloadData = void 0), 
            h.$prefetchData && (g.prefetch = h.$prefetchData, h.$prefetchData = void 0), c.push(g), 
            h.$onLoad.apply(h, c), h.$apply();
        }, g.onUnload = function() {
            for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
            h.$onUnload.apply(h, b);
        }, g.onShow = function() {
            for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
            d.$instance.__prevPage__ = h, [].concat(h.$mixins, h).forEach(function(a) {
                a.onShow && a.onShow.apply(h, b);
            });
            var e = getCurrentPages(), f = e[e.length - 1].__route__, g = e[e.length - 1].__wxWebviewId__;
            d.$instance.__wxWebviewId__ !== g && (h.$wxpage = this, d.$instance.__route__ = f, 
            d.$instance.__wxWebviewId__ = g, [].concat(h.$mixins, h).forEach(function(a) {
                a.onRoute && a.onRoute.apply(h, b);
            })), h.$apply();
        }, f.forEach(function(a) {
            "onLoad" !== a && "onUnload" !== a && "onShow" !== a && (g[a] = function() {
                for (var b = arguments.length, c = Array(b), d = 0; d < b; d++) c[d] = arguments[d];
                var e;
                return "onShareAppMessage" === a ? (h[a] && (e = h[a].apply(h, c)), e) : ([].concat(h.$mixins, h).forEach(function(b) {
                    b[a] && b[a].apply(h, c);
                }), "onPageScroll" != a && h.$apply(), e);
            });
        }), h.onShareAppMessage || delete g.onShareAppMessage, -1 === [].concat(h.$mixins, h).findIndex(function(a) {
            return a.onPageScroll;
        }) && delete g.onPageScroll, i(g, h, "");
    }
};