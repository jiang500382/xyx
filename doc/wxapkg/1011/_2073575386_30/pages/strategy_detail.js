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
}(), e = require("./../npm/wepy/lib/wepy.js"), g = a(e), h = require("./../mixins/share.js"), j = a(h), i = require("./../components/header.js"), k = a(i), l = function(a) {
    function g() {
        var d, e, f, h;
        b(this, g);
        for (var a = arguments.length, l = Array(a), i = 0; i < a; i++) l[i] = arguments[i];
        return e = f = c(this, (d = g.__proto__ || Object.getPrototypeOf(g)).call.apply(d, [ this ].concat(l))), 
        f.mixins = [ j.default ], f.$repeat = {}, f.$props = {
            header: {
                "xmlns:v-bind": "",
                "v-bind:title.sync": "title",
                method: "information"
            }
        }, f.$events = {}, f.components = {
            header: k.default
        }, f.data = {
            game_detail: [],
            title: ""
        }, h = e, c(f, h);
    }
    return d(g, a), f(g, [ {
        key: "onLoad",
        value: function(a) {
            this.game_detail = a, console.log(a.title), this.title = a.title + "攻略", this.$apply();
        }
    }, {
        key: "onShareAppMessage",
        value: function(a) {
            return this.shareCard(a);
        }
    } ]), g;
}(g.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(l, "pages/strategy_detail"));