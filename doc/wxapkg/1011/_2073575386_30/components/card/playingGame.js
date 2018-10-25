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

var e = require("./../../npm/wepy/lib/wepy.js"), f = a(e), g = require("./../networkimage.js"), h = a(g), i = require("./../../mixins/mtaAnalysis.js"), j = a(i), k = function(a) {
    function f() {
        var d, e, g, h;
        b(this, f);
        for (var j = arguments.length, i = Array(j), k = 0; k < j; k++) i[k] = arguments[k];
        return e = g = c(this, (d = f.__proto__ || Object.getPrototypeOf(f)).call.apply(d, [ this ].concat(i))), 
        g.methods = {
            closePlaying: function() {
                this.$emit("closePlaying");
            }
        }, h = e, c(g, h);
    }
    return d(f, a), f;
}(f.default.component);

exports.default = k;