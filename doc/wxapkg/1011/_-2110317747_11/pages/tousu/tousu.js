var i = require("../../core/basePage.js");

Page((0, i.basePage)({
    data: {
        items: [ "色情", "骚扰", "欺诈", "诱导", "内容不符", "侵权" ],
        submit_value: 0
    },
    radioChange: function(i) {
        this.setData({
            submit_value: i.detail.value
        });
    },
    validate: function(i) {
        var t = {
            submit_value: {
                required: !0
            }
        }, a = {
            submit_value: {
                required: "请选择投诉类型"
            }
        }, e = this.isValids(i, t, a);
        return !!this.isEmpty(e) || (this.notification.showToast(e), !1);
    },
    submit: function() {
        this.validate(this.data) && this.notification.showToast("投诉成功", {
            onHide: function() {
                wx.navigateBack({
                    delta: 1
                });
            }
        });
    }
}));