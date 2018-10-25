var t = Object.assign || function(t) {
    for (var i = 1; i < arguments.length; i++) {
        var e = arguments[i];
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
}, i = require("../../core/basePage.js"), e = require("../../api/giftApi.js");

getApp(), require("../../utils/md5.js"), new Date().getTime();

Page((0, i.basePage)({
    data: {
        currentTab: 0,
        write_addres: !1,
        gift_list_slice: [],
        linqu_list: [],
        linqu_limit: 0,
        address: "",
        true_name: "",
        phone_num: "",
        goods_id: 0
    },
    onInit: function(t) {
        this.loadPrize();
    },
    onPageShow: function(t) {
        var i = this;
        this.data.linqu_list && i.loadPrize();
    },
    loadPrize: function() {
        var t = this;
        (0, e.getPrize)(function(i) {
            t.setData({
                gift_list_slice: i.data.prize_list,
                linqu_list: i.data.user_prize_list,
                linqu_limit: i.data.prize_num_can_receive
            });
        });
    },
    swiperTab: function(t) {
        this.setData({
            currentTab: t.detail.current
        });
    },
    clickTab: function(t) {
        var i = this;
        if (this.data.currentTab === t.target.dataset.current) return !1;
        i.setData({
            currentTab: t.target.dataset.current
        });
    },
    linqu_click: function(t) {
        var i = this;
        i.data.linqu_limit < 1 ? this.notification.showToast("您没有可领取的次数哦") : i.setData({
            write_addres: !0,
            goods_id: t.currentTarget.dataset.id
        });
    },
    cancel: function() {
        this.setData({
            write_addres: !1
        });
    },
    validate: function(t) {
        var i = {
            address: {
                required: !0,
                maxLength: 200
            },
            phone_num: {
                required: !0,
                mobile: !0
            },
            true_name: {
                required: !0,
                maxLength: 200
            }
        }, e = {
            address: {
                required: "请输入收货地址",
                maxLength: "收货地址最多{0}个字"
            },
            phone_num: {
                required: "请输入联系电话",
                mobile: "请输入正确的联系电话"
            },
            true_name: {
                required: "请输入姓名",
                maxLength: "姓名最多{0}个字"
            }
        }, a = this.isValids(t, i, e);
        return !!this.isEmpty(a) || (this.notification.showToast(a), !1);
    },
    formSubmit: function(i) {
        var a = this, r = this, n = t({}, i.detail.value, {
            goods_id: r.data.goods_id
        });
        this.validate(n) && (0, e.receive)(n, function(t) {
            a.notification.showToast("领取成功", {
                onHide: function() {
                    r.setData({
                        write_addres: !1
                    }), r.loadPrize();
                }
            });
        }, function() {
            a.notification.showToast("糟糕，好像出了点问题");
        });
    }
}));