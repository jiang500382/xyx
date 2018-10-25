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

var d = require("./../../npm/wepy/lib/wepy.js"), e = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(d), f = function(d) {
    function f() {
        var d, e, g, h;
        b(this, f);
        for (var j = arguments.length, i = Array(j), k = 0; k < j; k++) i[k] = arguments[k];
        return e = g = c(this, (d = f.__proto__ || Object.getPrototypeOf(f)).call.apply(d, [ this ].concat(i))), 
        g.data = {
            goldN: 0,
            list: []
        }, g.props = {
            exchangeList: {
                default: null,
                twoWay: !0
            },
            goldNum: {
                default: [],
                twoWay: !0
            }
        }, g.computed = {
            goldNum: function() {
                if (0 < this.goldNum) {
                    var a = this.goldNum;
                    this.goldN = a;
                }
            },
            exchangeList: function() {
                console.log(this.exchangeList), this.list = this.exchangeList;
            }
        }, g.events = {
            goToPlayGame: function() {
                this.$emit("goToPlayGame");
            }
        }, g.methods = {
            getRecordList: function() {
                this.$emit("getRecordList", 7);
            },
            exchangeRedpacked: function(a) {
                this.$emit("exchangeRedpacked", a);
            },
            hasZero: function() {
                this.$emit("hasZero");
            }
        }, h = e, c(g, h);
    }
    return a(f, d), f;
}(e.default.component);

exports.default = f;