function a(b, c) {
    if (!(b instanceof c)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var b = function() {
    function b(b, c) {
        for (var a, d = 0; d < c.length; d++) a = c[d], a.enumerable = a.enumerable || !1, 
        a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(b, a.key, a);
    }
    return function(c, a, d) {
        return a && b(c.prototype, a), d && b(c, d), c;
    };
}(), c = function() {
    function c() {
        a(this, c);
    }
    return b(c, null, [ {
        key: "update",
        value: function() {
            if (wx.getUpdateManager) {
                var a = wx.getUpdateManager();
                a.onCheckForUpdate(function(a) {
                    console.log("当前【" + (a.hasUpdate ? "是" : "否") + "】新版本");
                }), a.onUpdateReady(function() {
                    wx.showModal({
                        title: "提示",
                        content: "新版本已更新完毕，请重启后继续使用",
                        showCancel: !1,
                        confirmText: "确定",
                        success: function() {
                            a.applyUpdate();
                        }
                    });
                });
            }
        }
    } ]), c;
}();

exports.default = c;