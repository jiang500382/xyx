var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, t = require("./memoryHelper.js"), n = require("../config/globalenum.js"), o = {
    setCache: function(t, n) {
        try {
            "object" == (void 0 === n ? "undefined" : e(n)) ? wx.setStorageSync(t, JSON.stringify(n)) : wx.setStorageSync(t, n);
        } catch (e) {
            console.log("cache push error ", e);
        }
    },
    getCache: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, o = wx.getStorageSync(e);
        return null != o && 0 != o.length || null != (o = n) ? t ? JSON.parse(o) : o : null;
    },
    getLocalUser: function() {
        var e = o.getCache("__userinfo");
        return e ? JSON.parse(e) : null;
    },
    saveLocalUser: function(t) {
        "object" == (void 0 === t ? "undefined" : e(t)) ? wx.setStorageSync("__userinfo", JSON.stringify(t)) : wx.setStorageSync("__userinfo", t);
    },
    isFirstRedirect: function() {
        var e = (0, t.getMemoryShareOption)();
        if (0 == e.tiaozhuankongzhi) return n.FIRST_TYPE.CONTINUE;
        if (1 == e.tiaozhuankongzhi && e.success_num >= e.allow_success_num) {
            var r = o.getCache("__frist_redirect"), i = new Date(), u = parseInt(i.getTime() / 864e5);
            return null == r || r < u ? (o.setCache("__frist_redirect", u), n.FIRST_TYPE.REDIRECT) : n.FIRST_TYPE.CONTINUE;
        }
        return 2 == e.tiaozhuankongzhi && e.success_num >= e.allow_success_num ? n.FIRST_TYPE.NOT_OPEN : void 0;
    }
};

module.exports = o;