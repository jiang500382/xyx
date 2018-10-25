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

var e = require("./../../npm/wepy/lib/wepy.js"), f = a(e), g = require("./../../mixins/mtaAnalysis.js"), h = a(g), i = function(a) {
    function f() {
        var d, e, g, j;
        b(this, f);
        for (var k = arguments.length, i = Array(k), l = 0; l < k; l++) i[l] = arguments[l];
        return e = g = c(this, (d = f.__proto__ || Object.getPrototypeOf(f)).call.apply(d, [ this ].concat(i))), 
        g.data = {
            mon: 0
        }, g.props = {
            money: {
                type: String
            }
        }, g.computed = {
            money: function() {
                var b = Math.pow;
                if (this.money) {
                    var c = parseInt(this.money) + "";
                    if (1 <= this.money / 1e7) {
                        var d = 9 - c.length, e = c.slice(0, 2) / b(10, d);
                        return void (this.mon = e + "千万");
                    }
                    if (1 <= this.money / 1e4) {
                        var f = 6 - c.length, g = c.slice(0, 2) / b(10, f);
                        return void (this.mon = g + "万");
                    }
                    var h = parseInt(1e4 * this.money) + "", i = 8 - h.length, j = h.slice(0, 4) / b(10, i);
                    this.mon = j;
                }
            }
        }, g.methods = {
            ranklistTap: function() {
                h.default.Event.stat("button2001", {});
            },
            redpacketTap: function() {
                h.default.Event.stat("button1001", {});
            }
        }, j = e, c(g, j);
    }
    return d(f, a), f;
}(f.default.component);

exports.default = i;