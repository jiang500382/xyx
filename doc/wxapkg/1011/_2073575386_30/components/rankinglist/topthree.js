function a(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

function b(a, b) {
    if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return b && ("object" == typeof b || "function" == typeof b) ? b : a;
}

function c(a, b) {
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
        var c, d, e, g;
        a(this, f);
        for (var h = arguments.length, j = Array(h), k = 0; k < h; k++) j[k] = arguments[k];
        return d = e = b(this, (c = f.__proto__ || Object.getPrototypeOf(f)).call.apply(c, [ this ].concat(j))), 
        e.data = {
            bouOne: [],
            bouTwo: [],
            bouThree: [],
            selected: !0
        }, e.props = {
            rankThree: {}
        }, e.events = {
            selected1: function(a) {
                this.selected = a;
            }
        }, e.computed = {
            rankThree: function() {
                this.rankThree && (this.bouOne = this.rankThree[0], this.bouTwo = this.rankThree[1], 
                this.bouThree = this.rankThree[2]);
            }
        }, g = d, b(e, g);
    }
    return c(f, d), f;
}(e.default.component);

exports.default = f;