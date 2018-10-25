var t = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var i = arguments[a];
        for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]);
    }
    return t;
}, a = require("../../core/basePage.js"), i = require("../../api/walletApi.js");

require("../../utils/common.js"), require("../../utils/memoryHelper.js");

Page((0, a.basePage)({
    data: {
        user_amount: "",
        withdraw: "",
        withdraw_limit: 3,
        successfully: !1
    },
    onInit: function(t) {
        this.loadList();
    },
    loadList: function() {
        var a = this;
        (0, i.withdrawList)(function(i) {
            a.setData(t({}, i.data));
        });
    },
    add2ClipboardandGoto: function(t) {
        var a = this;
        a.add2Clipboard(t, function() {
            a.setData({
                goto: !0
            });
        });
    },
    closeTk: function() {
        this.setData({
            goto: !1
        });
    }
}));