function b(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = function() {
    function b(b, c) {
        for (var d, a = 0; a < c.length; a++) d = c[a], d.enumerable = d.enumerable || !1, 
        d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(b, d.key, d);
    }
    return function(c, d, e) {
        return d && b(c.prototype, d), e && b(c, e), c;
    };
}(), c = function() {
    function c(d, e, f) {
        b(this, c), this.active = !0, this.name = d, this.source = e, this.type = f;
    }
    return a(c, [ {
        key: "$destroy",
        value: function() {
            this.active = !1;
        }
    }, {
        key: "$transfor",
        value: function(a) {
            var b = 0;
            for (b in a) this[b] = a[b];
        }
    } ]), c;
}();

exports.default = c;