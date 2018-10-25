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
        a(this, c);
    }
    return b(c, null, [ {
        key: "show",
        value: function(b, c) {
            var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, f = arguments[3], g = {
                title: b,
                icon: c,
                image: d
            };
            f && (g.duration = 1e3 * f), wx.showToast(g);
        }
    }, {
        key: "showError",
        value: function(a) {
            this.show(a, "../images/common/error.png");
        }
    }, {
        key: "showWarning",
        value: function(a) {
            this.show(a, "none");
        }
    }, {
        key: "showSuccess",
        value: function(a) {
            this.show(a, "../images/common/success.png");
        }
    }, {
        key: "showLoading",
        value: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", b = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            wx.showLoading({
                title: a,
                mask: b
            });
        }
    }, {
        key: "hideLoading",
        value: function() {
            wx.hideLoading();
        }
    }, {
        key: "showModal",
        value: function(b, c) {
            var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "知道了", f = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "", g = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : null;
            wx.showModal({
                title: b || "提示",
                content: c || "",
                showCancel: !!e,
                cancelText: e,
                confirmText: d,
                success: function(a) {
                    a.confirm && f && f(), a.cancel && g && g();
                }
            });
        }
    } ]), c;
}();

c.showImage = function(a, b) {
    this.show(null, null, a, b);
}, c.hide = function() {
    wx.hideToast();
}, exports.default = c;