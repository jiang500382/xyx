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
        g.props = {
            content: {
                default: "",
                twoWay: !0
            }
        }, g.methods = {
            cancel: function() {
                var a = this.content.btn1;
                this.$emit(a);
            },
            getRedp: function(a) {
                var b = this.content.btn2;
                this.$emit(b, a);
            },
            goToPlayGame: function() {
                this.$emit("goToPlayGame");
            }
        }, h = e, c(g, h);
    }
    return a(f, d), f;
}(e.default.component);

exports.default = f;