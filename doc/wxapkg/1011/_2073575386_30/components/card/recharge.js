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
}), exports.default = void 0;

var f = function() {
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, 
        c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
    };
}(), e = require("./../../npm/wepy/lib/wepy.js"), g = a(e), h = require("./../networkimage.js"), i = a(h), j = require("./../../mixins/mtaAnalysis.js"), k = a(j), l = function(a) {
    function g() {
        var d, e, f, h;
        b(this, g);
        for (var j = arguments.length, i = Array(j), a = 0; a < j; a++) i[a] = arguments[a];
        return e = f = c(this, (d = g.__proto__ || Object.getPrototypeOf(g)).call.apply(d, [ this ].concat(i))), 
        f.data = {
            playLower: !1,
            isAndroid: !1
        }, f.props = {
            type: {
                default: 1,
                twoWay: !0
            },
            isPlayLower: Boolean
        }, f.computed = {
            isPlayLower: function() {
                void 0 != this.isPlayLower && (this.playLower = this.isPlayLower);
            }
        }, f.methods = {
            closeRechargeModel: function(a) {
                this.$emit("closeRechargeModel", a);
            },
            goToSenior: function() {
                this.$emit("goToSenior");
            },
            goToGameCharge: function() {
                this.$emit("goToGameCharge");
            }
        }, h = e, c(f, h);
    }
    return d(g, a), f(g, [ {
        key: "onLoad",
        value: function() {
            this.isAndroid = -1 != wx.getSystemInfoSync().system.indexOf("Android"), this.$apply();
        }
    } ]), g;
}(g.default.component);

exports.default = l;