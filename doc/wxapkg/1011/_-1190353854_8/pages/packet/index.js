var e = require("../../core/basePage.js");

require("../../api/giftApi.js");

Page((0, e.basePage)({
    data: {
        money: "*.**"
    },
    onInit: function(e) {
        this.setData({
            money: e.money ? parseFloat(e.money).toFixed(2) : "0.00"
        });
    },
    bind2Profile: function() {
        wx.switchTab({
            url: "/pages/user/user"
        });
    },
    onReady: function() {},
    onShow: function() {}
}));