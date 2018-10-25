function a(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var b = function() {
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, 
        c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
    };
}(), c = new WeakMap(), d = function() {
    function d() {
        a(this, d), c.set(this, {});
    }
    return b(d, [ {
        key: "addEventListener",
        value: function(a, b) {
            var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, e = c.get(this);
            e || (e = {}, c.set(this, e)), e[a] || (e[a] = []), e[a].push(b), d.capture, d.once, 
            d.passive;
        }
    }, {
        key: "removeEventListener",
        value: function(a, b) {
            var d = c.get(this)[a];
            if (d && 0 < d.length) for (var e = d.length; e--; 0 < e) if (d[e] === b) {
                d.splice(e, 1);
                break;
            }
        }
    }, {
        key: "dispatchEvent",
        value: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, b = c.get(this)[a.type];
            if (b) for (var d = 0; d < b.length; d++) b[d](a);
        }
    } ]), d;
}();

exports.default = d, module.exports = exports["default"];