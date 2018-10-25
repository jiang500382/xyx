var a = Object.assign || function(a) {
    for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];
        for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (a[e] = i[e]);
    }
    return a;
}, t = require("../../core/basePage.js"), i = require("../../api/walletApi.js"), e = require("../../utils/common.js"), s = require("../../utils/memoryHelper.js");

Page((0, t.basePage)({
    data: {
        user_amount: "",
        withdraw: "",
        withdraw_limit: 3,
        successfully: !1,
        bg: !1,
        goto: !1
    },
    onInit: function(t) {
        var i = this, e = (0, s.getMemoryShareOption)();
        i.setData(a({}, t, {
            shareOptions: e,
            widthdrawTips: (0, s.getWidthdrawTip)(),
            user_amount: parseFloat(t.money).toFixed(2),
            balance: parseFloat(t.money).toFixed(2)
        }));
    },
    checkMoney: function(a) {
        var t = this, i = a.detail.value;
        i > 0 && i > t.data.balance ? t.setData({
            disabled: !0,
            isWrong: !0
        }) : i > 0 && i <= t.data.balance ? t.setData({
            disabled: !1,
            isWrong: !1
        }) : 0 == i && t.setData({
            disabled: !0,
            isWrong: !1
        });
    },
    bindWithdrawAll: function() {
        this.setData({
            withdraw: this.data.user_amount
        });
    },
    bindWithdraw: function(t) {
        var s = this;
        s.showLoading("正在提交"), (0, i.withdraw)(t, function(i) {
            if (s.hideLoading(), 1 == i.data.status) {
                var o = (0, e.parseMoney)(s.data.user_amount - t.amount);
                s.setData(a({}, i.data, {
                    user_amount: o,
                    withdraw: o,
                    successfully: !0,
                    bg: !0
                }));
            } else s.notification.showToast("提现失败");
        }, function(a) {
            s.hideLoading();
        });
    },
    validate: function(a) {
        var t = {
            amount: {
                required: !0,
                maxValue: this.data.balance,
                minValue: this.data.withdraw_limit
            }
        }, i = {
            amount: {
                required: "请输入提现金额",
                maxValue: "余额不足",
                minValue: (0, e.format)("最小提现金额{0}元", this.data.withdraw_limit)
            }
        }, s = this.isValids(a, t, i);
        return !!this.isEmpty(s) || (this.notification.showToast(s), !1);
    },
    formSubmit: function(a) {
        var t = {
            amount: parseFloat(a.detail.value.amount)
        };
        this.validate(t) && this.bindWithdraw(t);
    },
    closeTk: function() {
        this.setData({
            successfully: !1,
            bg: !1,
            goto: !1
        });
    },
    add2ClipboardandGoto: function(a) {
        var t = this;
        t.add2Clipboard(a, function() {
            t.setData({
                bg: !1,
                goto: !0
            });
        });
    }
}));