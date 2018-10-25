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
}(), e = require("./../../npm/wepy/lib/wepy.js"), g = a(e), h = require("./../../service/utils.js"), i = a(h), j = function(a) {
    function g() {
        var a, d, e, f;
        b(this, g);
        for (var h = arguments.length, i = Array(h), j = 0; j < h; j++) i[j] = arguments[j];
        return d = e = c(this, (a = g.__proto__ || Object.getPrototypeOf(g)).call.apply(a, [ this ].concat(i))), 
        e.data = {
            list: [],
            type: 0
        }, e.props = {
            historylist: {
                default: [],
                twoWay: !0
            }
        }, e.methods = {
            historyListClose: function() {
                this.$emit("historyListClose");
            },
            lower: function() {
                this.$emit("lodingMore", this.type);
            }
        }, e.watch = {
            historylist: function() {
                var a = this.historylist;
                if (a && 0 < a.length) {
                    this.type = a[0].redType;
                    for (var b, c = 0; c < a.length; c++) b = this.getLocalTime(a[c].createDate), a[c].newDate = b;
                    this.list = a;
                } else this.list = [];
                this.$apply();
            }
        }, f = d, c(e, f);
    }
    return d(g, a), f(g, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "getLocalTime",
        value: function(a) {
            var b = new Date(1e3 * parseInt(a));
            return i.default.formatTime(b).split("年")[1];
        }
    } ]), g;
}(g.default.component);

exports.default = j;