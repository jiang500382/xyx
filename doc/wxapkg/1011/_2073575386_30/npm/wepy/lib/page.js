function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

function b(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

function c(a, b) {
    if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return b && ("object" == typeof b || "function" == typeof b) ? b : a;
}

function d(a, b) {
    if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
    a.prototype = Object.create(b && b.prototype, {
        constructor: {
            value: a,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
    return typeof a;
} : function(a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
}, g = function() {
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, 
        c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
    };
}(), h = function b(c, d, e) {
    null === c && (c = Function.prototype);
    var f = Object.getOwnPropertyDescriptor(c, d);
    if (void 0 === f) {
        var g = Object.getPrototypeOf(c);
        return null === g ? void 0 : b(g, d, e);
    }
    if ("value" in f) return f.value;
    var a = f.get;
    if (void 0 !== a) return a.call(e);
}, e = require("./native.js"), j = a(e), i = require("./component.js"), k = a(i), l = require("./util.js"), m = a(l), n = function(a) {
    function k() {
        var d, e, f, g;
        b(this, k);
        for (var h = arguments.length, a = Array(h), i = 0; i < h; i++) a[i] = arguments[i];
        return e = f = c(this, (d = k.__proto__ || Object.getPrototypeOf(k)).call.apply(d, [ this ].concat(a))), 
        f.$isComponent = !1, f.$preloadData = void 0, f.$prefetchData = void 0, g = e, c(f, g);
    }
    return d(k, a), g(k, [ {
        key: "$init",
        value: function(a, b) {
            this.$parent = b, this.$root = this, b.$wxapp || (b.$wxapp = getApp()), this.$wxapp = b.$wxapp, 
            h(k.prototype.__proto__ || Object.getPrototypeOf(k.prototype), "$init", this).call(this, a, this);
        }
    }, {
        key: "onLoad",
        value: function() {
            h(k.prototype.__proto__ || Object.getPrototypeOf(k.prototype), "onLoad", this).call(this);
        }
    }, {
        key: "onUnload",
        value: function() {
            h(k.prototype.__proto__ || Object.getPrototypeOf(k.prototype), "onUnload", this).call(this);
        }
    }, {
        key: "$preload",
        value: function(a, b) {
            if ("object" === (void 0 === a ? "undefined" : f(a))) {
                for (var c in a) this.$preload(c, a[c]);
            } else (this.$preloadData ? this.$preloadData : this.$preloadData = {})[a] = b;
        }
    }, {
        key: "$route",
        value: function(b, c) {
            var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            if ("string" == typeof c) {
                var f = c + "?";
                if (d) {
                    for (var g in d) f += g + "=" + d[g] + "&";
                }
                f = f.substring(0, f.length - 1), c = {
                    url: f
                };
            } else d = m.default.$getParams(c.url);
            this.$parent.__route__ || (this.$parent.__route__ = getCurrentPages()[0].__route__, 
            this.$parent.__wxWebviewId__ = getCurrentPages()[0].__wxWebviewId__);
            var h = "/" === this.$parent.__route__[0] ? this.$parent.__route__ : "/" + this.$parent.__route__, a = m.default.$resolvePath(h, c.url.split("?")[0]), i = this.$parent.$pages[a];
            if (i && i.onPrefetch) {
                var k, n = this.$parent.__prevPage__;
                n && n.$preloadData && (k = n.$preloadData), i.$prefetchData = i.onPrefetch(d, {
                    from: this,
                    preload: k
                });
            }
            return j.default[b](c);
        }
    }, {
        key: "$redirect",
        value: function(a, b) {
            return this.$route("redirectTo", a, b);
        }
    }, {
        key: "$navigate",
        value: function(a, b) {
            return this.$route("navigateTo", a, b);
        }
    }, {
        key: "$switch",
        value: function(a) {
            return "string" == typeof a && (a = {
                url: a
            }), j.default.switchTab(a);
        }
    }, {
        key: "$back",
        value: function(a) {
            var b = a || {};
            return "number" == typeof b && (b = {
                delta: b
            }), b.delta || (b.delta = 1), j.default.navigateBack(b);
        }
    } ]), k;
}(k.default);

exports.default = n;