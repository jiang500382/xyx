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

var f = function() {
    function b(b, c) {
        for (var d, a = 0; a < c.length; a++) d = c[a], d.enumerable = d.enumerable || !1, 
        d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(b, d.key, d);
    }
    return function(c, d, e) {
        return d && b(c.prototype, d), e && b(c, e), c;
    };
}(), e = require("./../npm/wepy/lib/wepy.js"), g = a(e), h = require("./../service/utils.js"), j = a(h), i = require("./../config.js"), k = a(i), l = function(a) {
    function e() {
        return b(this, e), c(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
    }
    return d(e, a), f(e, [ {
        key: "shareCard",
        value: function(b) {
            if (!this.$parent.globalData.configList) return {
                title: k.default.shareTitle,
                path: "/pages/index?share_type=0&share_id=0",
                imageUrl: k.default.shareImg
            };
            var c = this.$parent.globalData.configList.game;
            if (!b.target) {
                var d = c.share_list, e = c.share_img, a = 0 < d.length ? d[j.default.rand(0, d.length - 1)] : configlist.homeTaskShare, g = e[j.default.rand(0, e.length - 1)];
                return {
                    title: a,
                    path: "/pages/index?share_type=0&share_id=" + this.$parent.globalData.userInfo.id,
                    imageUrl: g
                };
            }
            var m = b.target.dataset.sharetype;
            if (10 > m) {
                var d = c.share_list, e = c.share_img, p = 0 < d.length ? d[j.default.rand(0, d.length - 1)] : configlist.homeTaskShare, q = e[j.default.rand(0, e.length - 1)];
                return {
                    title: p,
                    path: "/pages/index?share_type=0&share_id=" + this.$parent.globalData.userInfo.id,
                    imageUrl: q
                };
            }
            if (10 <= m) {
                var r = b.target.dataset.x, d = c.withdraw_task_share.replace(/X/g, r).split(";"), e = c.withdraw_task_share_image.split(";"), s = 0 < d.length ? d[j.default.rand(0, d.length - 1)] : configlist.homeTaskShare, t = e[j.default.rand(0, e.length - 1)];
                return {
                    title: s,
                    path: "/pages/index?share_type=0&share_id=" + this.$parent.globalData.userInfo.id,
                    imageUrl: t
                };
            }
        }
    } ]), e;
}(g.default.mixin);

exports.default = l;