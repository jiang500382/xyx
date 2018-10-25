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
    function b(b, c) {
        for (var d, a = 0; a < c.length; a++) d = c[a], d.enumerable = d.enumerable || !1, 
        d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(b, d.key, d);
    }
    return function(c, d, e) {
        return d && b(c.prototype, d), e && b(c, e), c;
    };
}(), e = require("./../npm/wepy/lib/wepy.js"), f = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(e), g = function(f) {
    function g() {
        var d, e, f, a;
        b(this, g);
        for (var h = arguments.length, j = Array(h), i = 0; i < h; i++) j[i] = arguments[i];
        return e = f = c(this, (d = g.__proto__ || Object.getPrototypeOf(g)).call.apply(d, [ this ].concat(j))), 
        f.data = {
            message: [],
            method: "indexbroadcast",
            marquee_time: 0,
            orientation: "left",
            marqueeDistance: 0
        }, f.methods = {
            jumpToChat: function() {
                this.$emit("jumpToChat");
            }
        }, f.props = {
            type: {
                default: "nothing",
                twoWay: !0
            },
            showType: {
                default: 1,
                toWay: !0
            },
            broadcast: {
                default: "nothing",
                twoWay: !0
            },
            interval: {
                default: 0,
                twoWay: !0
            },
            duration: {
                default: 35e3,
                twoWay: !0
            },
            autoplay: {
                default: !0,
                twoWay: !0
            },
            vertical: {
                default: !0,
                twoWay: !0
            },
            circular: {
                default: !0,
                twoWay: !0
            },
            isSquare: {
                default: !1,
                twoWay: !0
            },
            boastImg: {
                default: "https://res.xingqiu123.com/hall/boast/broadcast.png",
                twoWay: !0
            },
            marqueeWidth: {
                default: 660,
                toWay: !0
            },
            marqueeMargin: {
                default: 5,
                toWay: !0
            }
        }, f.computed = {
            broadcast: function() {
                if (this.broadcast) {
                    var a = this.broadcast;
                    this.message = a, this.marquee_time = 4 * a.length, 0 < a.length && a[a.length - 1].boastType && 3 == a[a.length - 1].boastType && (this.method = "temp");
                }
            }
        }, a = e, c(f, a);
    }
    return a(g, f), d(g, [ {
        key: "onLoad",
        value: function() {
            1 == this.type && (this.method = "indexbroadcast"), 2 == this.type && (this.method = "chatbroadcast"), 
            3 == this.type && (this.method = "temp"), 4 == this.type && (this.method = "invite");
        }
    } ]), g;
}(f.default.component);

exports.default = g;