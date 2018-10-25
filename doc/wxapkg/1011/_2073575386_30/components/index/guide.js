function b(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

function c(a, b) {
    if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return b && ("object" == typeof b || "function" == typeof b) ? b : a;
}

function a(a, b) {
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
}), exports.default = void 0;

var d = function() {
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, 
        c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
    };
}(), e = require("./../../npm/wepy/lib/wepy.js"), f = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(e), g = function(f) {
    function g() {
        var d, e, f, h;
        b(this, g);
        for (var i = arguments.length, j = Array(i), a = 0; a < i; a++) j[a] = arguments[a];
        return e = f = c(this, (d = g.__proto__ || Object.getPrototypeOf(g)).call.apply(d, [ this ].concat(j))), 
        f.data = {
            imgUrls: [ "https://res.xingqiu123.com/img/xcx/Hall/3.5/guide/1.png?imageView2/2/600", "https://res.xingqiu123.com/img/xcx/Hall/3.5/guide/2.png?imageView2/2/600", "https://res.xingqiu123.com/img/xcx/Hall/3.5/guide/3.png?imageView2/2/600" ],
            indicatorDots: !1,
            autoplay: !0,
            interval: 5e3,
            duration: 200,
            margintop: null
        }, f.methods = {
            Stop: function(a) {
                this.autoplay = 2 != a.detail.current, this.$apply();
            },
            logining: function(a) {
                wx.reportAnalytics("guide_click", {
                    index: parseInt(a.currentTarget.dataset.index)
                }), this.$emit("logining", a);
            }
        }, h = e, c(f, h);
    }
    return a(g, f), d(g, [ {
        key: "onLoad",
        value: function() {}
    } ]), g;
}(f.default.component);

exports.default = g;