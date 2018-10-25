var t = Object.assign || function(t) {
    for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];
        for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
    }
    return t;
}, n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, o = require("../../utils/common.js"), e = require("../../config/urienum.js");

Component({
    properties: {},
    data: {
        isHide: !0,
        isShowDialog: !1,
        timeoutInstance: null,
        imageBase: e.imageBase
    },
    methods: {
        showToast: function(t, e) {
            var i = this;
            i.data.timeoutInstance && clearTimeout(i.data.timeoutInstance);
            var a = "";
            if ("string" == typeof t) a = t; else if ("object" == (void 0 === t ? "undefined" : n(t))) for (var s in t) {
                a = t[s];
                break;
            }
            wx.showToast({
                title: a,
                icon: "none",
                duration: 2e3
            }), i.data.timeoutInstance = setTimeout(function() {
                clearTimeout(i.data.timeoutInstance), e && (0, o.isFunction)(e.onHide) && e.onHide();
            }, 2e3);
        },
        showDialog: function(n, o) {
            var e = Object.assign({}, {
                title: "提示",
                showCancel: !0,
                cancelText: "取消",
                confirmText: "确认",
                onConfirm: function() {},
                onCancel: function() {}
            }, o);
            this.onConfirm = e.onConfirm, this.onCancel = e.onCancel, this.setData(t({}, e, {
                isShowDialog: !0,
                content: n
            }));
        },
        _confirmEvent: function(t, n) {
            this.setData({
                isShowDialog: !1
            }), this.onConfirm(), this.triggerEvent("onConfrm");
        },
        _cancelEvent: function(t, n) {
            this.setData({
                isShowDialog: !1
            }), this.onCancel(), this.triggerEvent("onCancel");
        }
    }
});