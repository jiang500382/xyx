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
}(), c = function() {
    function c() {
        a(this, c), this.data = {}, this.computed = {}, this.components = {}, this.methods = {}, 
        this.events = {};
    }
    return b(c, [ {
        key: "$init",
        value: function(a) {
            var b = this;
            Object.getOwnPropertyNames(this).concat(Object.getOwnPropertyNames(Object.getPrototypeOf(this))).forEach(function(c) {
                "on" !== c[0] + c[1] && "constructor" !== c && (a[c] || (a[c] = b[c]));
            }), [ "data", "computed", "events", "components" ].forEach(function(c) {
                Object.getOwnPropertyNames(b[c]).forEach(function(d) {
                    "init" === d || a[c][d] || (a[c][d] = b[c][d]);
                });
            });
        }
    } ]), c;
}();

exports.default = c;