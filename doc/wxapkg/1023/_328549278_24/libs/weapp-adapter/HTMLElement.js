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

var d = function() {
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, 
        c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
    };
}(), e = require("./Element"), f = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(e), g = require("./util/index.js"), h = require("./WindowProperties"), i = function(e) {
    function f() {
        var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
        a(this, f);
        var d = b(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this));
        return d.className = "", d.childern = [], d.style = {
            width: h.innerWidth + "px",
            height: h.innerHeight + "px"
        }, d.insertBefore = g.noop, d.innerHTML = "", d.tagName = c.toUpperCase(), d;
    }
    var i = Number.isNaN;
    return c(f, e), d(f, [ {
        key: "setAttribute",
        value: function(a, b) {
            this[a] = b;
        }
    }, {
        key: "getAttribute",
        value: function(a) {
            return this[a];
        }
    }, {
        key: "getBoundingClientRect",
        value: function() {
            return {
                top: 0,
                left: 0,
                width: h.innerWidth,
                height: h.innerHeight
            };
        }
    }, {
        key: "focus",
        value: function() {}
    }, {
        key: "clientWidth",
        get: function() {
            var a = parseInt(this.style.fontSize, 10) * this.innerHTML.length;
            return i(a) ? 0 : a;
        }
    }, {
        key: "clientHeight",
        get: function() {
            var a = parseInt(this.style.fontSize, 10);
            return i(a) ? 0 : a;
        }
    } ]), f;
}(f.default);

exports.default = i, module.exports = exports["default"];