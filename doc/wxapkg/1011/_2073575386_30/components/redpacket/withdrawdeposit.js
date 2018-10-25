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
        for (var j = arguments.length, a = Array(j), i = 0; i < j; i++) a[i] = arguments[i];
        return e = f = c(this, (d = g.__proto__ || Object.getPrototypeOf(g)).call.apply(d, [ this ].concat(a))), 
        f.data = {
            rebB: 0
        }, f.props = {
            rebBalance: {
                default: [],
                twoWay: !0
            }
        }, f.computed = {
            rebBalance: function() {
                if (this.rebBalance) {
                    var a = this.rebBalance;
                    if (console.log(a), 1e8 <= a) return a = (this.rebBalance / 1e8).toFixed(2), void (this.rebB = a + "亿");
                    if (1e4 < a) return a = (this.rebBalance / 1e4).toFixed(2), void (this.rebB = a + "万");
                    this.rebB = (+a).toFixed(2);
                }
            }
        }, h = e, c(f, h);
    }
    return a(g, f), d(g, [ {
        key: "onLoad",
        value: function() {}
    } ]), g;
}(f.default.component);

exports.default = g;