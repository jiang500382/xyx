function a(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var b = function() {
    function b(b, c) {
        for (var d, f = 0; f < c.length; f++) d = c[f], d.enumerable = d.enumerable || !1, 
        d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(b, d.key, d);
    }
    return function(c, d, a) {
        return d && b(c.prototype, d), a && b(c, a), c;
    };
}(), c = require("./../mixins/mtaAnalysis.js"), d = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(c), e = function() {
    function c() {
        a(this, c);
    }
    return b(c, null, [ {
        key: "setup",
        value: function(a) {
            d.default.App.init({
                appID: "500624769",
                eventID: "500624782",
                lauchOpts: a
            });
        }
    }, {
        key: "track",
        value: function(a) {}
    } ]), c;
}();

exports.default = e;