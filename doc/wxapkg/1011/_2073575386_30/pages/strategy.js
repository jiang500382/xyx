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

var f = function() {
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, 
        c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
    };
}(), e = require("./../npm/wepy/lib/wepy.js"), g = a(e), h = require("./../mixins/share.js"), i = a(h), j = require("./../components/header.js"), k = a(j), l = function(a) {
    function g() {
        var d, e, f, h;
        b(this, g);
        for (var a = arguments.length, j = Array(a), i = 0; i < a; i++) j[i] = arguments[i];
        return e = f = c(this, (d = g.__proto__ || Object.getPrototypeOf(g)).call.apply(d, [ this ].concat(j))), 
        f.data = {
            gameList: []
        }, f.$repeat = {}, f.$props = {
            header: {
                title: "游戏攻略",
                method: "information"
            }
        }, f.$events = {}, f.components = {
            header: k.default
        }, h = e, c(f, h);
    }
    return d(g, a), f(g, [ {
        key: "onLoad",
        value: function() {
            var a = this;
            this.$parent.globalData.gameList.forEach(function(b) {
                1 == (0 | b.id / 1e3) && a.gameList.push(b);
            });
        }
    }, {
        key: "onShareAppMessage",
        value: function(a) {
            return this.shareCard(a);
        }
    } ]), g;
}(g.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(l, "pages/strategy"));