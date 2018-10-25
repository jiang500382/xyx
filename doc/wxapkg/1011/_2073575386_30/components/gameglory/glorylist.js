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
    function g() {
        var c, d, e, h;
        a(this, g);
        for (var j = arguments.length, k = Array(j), i = 0; i < j; i++) k[i] = arguments[i];
        return d = e = b(this, (c = g.__proto__ || Object.getPrototypeOf(g)).call.apply(c, [ this ].concat(k))), 
        e.data = {
            color: [ "64b2ff", "e489ff", "92b5ff", "87d4ff" ]
        }, h = d, b(e, h);
    }
    return c(g, d), g;
}(e.default.component);

exports.default = f;