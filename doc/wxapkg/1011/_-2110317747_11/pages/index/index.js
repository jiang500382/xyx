var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
}, t = (require("../../utils/common.js"), require("../../core/basePage.js")), a = require("../../api/indexApi.js"), i = require("../../utils/memoryHelper.js"), r = require("../../api/systemApi.js"), o = (require("../../config/appsetting.js"), 
require("../../api/adApi.js")), n = require("../../config/globalenum.js"), s = require("../../utils/cacheHepler.js"), d = require("../../utils/authorizeHelper.js"), u = require("../../api/profileApi.js"), l = require("../../config/scopeenum.js"), c = require("../../utils/base64.js");

Page((0, t.basePage)({
    shareoption: {
        titleField: "index_share_title_arr",
        imageField: "index_share_img_arr",
        completed: function(e) {
            e.setData({
                tkShow: "hide"
            });
        }
    },
    data: {
        donghua: "show",
        adShow: !1,
        tkShow: "hide",
        ruleTk: "hide",
        topHight: 0,
        topScorll: [],
        ruleList: [],
        index_middle_txt: "",
        index_middle_img_txt_hei: "",
        float_ad: {},
        index_ad: {},
        index_other_appid: "",
        index_other_path: "",
        black_user: 0
    },
    onInit: function(e) {
        var t = this;
        0 != (0, i.getMemoryUser)() && (t.setData({
            donghua: "hide"
        }), t.loadHomeData()), t.loadRule(), t.loadAd(), t.setBlack();
    },
    onPageShow: function(e) {
        var t = this;
        t.setBlack(), t.blackUserListener();
    },
    loadRedirect: function() {
        var e = this, t = !1, a = (0, s.isFirstRedirect)();
        0 === (0, i.getMemoryBlack)() && (a == n.FIRST_TYPE.REDIRECT && !e.isEmpty(e.data.index_other_appid) || a == n.FIRST_TYPE.NOT_OPEN && !e.isEmpty(e.data.index_other_appid)) && (t = !0), 
        e.setData({
            isRedirect: t
        });
    },
    setBlack: function() {
        var e = this;
        1 === (0, i.getMemoryBlack)() && (e.setData({
            black_user: 1
        }), wx.setNavigationBarTitle({
            title: "学拼音"
        }));
    },
    loadAd: function() {
        var t = this;
        (0, o.getIndex)(function(a) {
            t.setData(e({}, a));
        });
    },
    loadHomeData: function() {
        var t = this;
        (0, a.getHomeData)(function(a) {
            setInterval(function() {
                a.data.faker_list.length > 1 && (t.setData({
                    topHight: t.data.topHight - 35
                }), t.data.topHight == -35 * a.data.faker_list.length && t.setData({
                    topHight: 0
                }));
            }, 3e3), (0, i.setAdvertisement)(a.data.advertisement_list);
            var r = (0, i.getAdvertisement)();
            t.setData(e({}, r, {
                topScorll: a.data.faker_list,
                index_middle_txt: a.data.index_info.index_middle_img_txt ? a.data.index_info.index_middle_img_txt : "",
                index_middle_img_txt_hei: a.data.index_info.index_middle_img_txt_hei ? a.data.index_info.index_middle_img_txt_hei : ""
            }, a.data.index_info)), (0, i.saveMemoryShareOption)(a.data.index_info), t.loadRedirect();
        });
    },
    loadRule: function() {
        var e = this;
        (0, a.getRule)(function(t) {
            e.setData({
                ruleList: t.data.readme
            });
        });
    },
    onShare: function(e) {
        this.setData({
            share_status: "hide"
        });
    },
    onRefresh: function() {},
    getWxUserInfo: function(e, t) {
        var a = this;
        e.detail.userInfo ? ((0, s.saveLocalUser)(e.detail.userInfo), (0, u.updateProfile)(e.detail.userInfo, function(e) {
            1 !== e.data.user_status && ((0, i.saveMemoryBlack)(1), a.setBlack());
        }), this.loadAuthorize(), a.goGame()) : (0, d.reAuthorize)(l.SCOPE_ENUM.USER_INFO, function(e) {
            wx.getUserInfo({
                success: function(e) {
                    (0, s.saveLocalUser)(e.userInfo), (0, u.updateProfile)(e.userInfo, function(e) {
                        1 !== e.data.user_status && ((0, i.saveMemoryBlack)(1), a.setBlack());
                    }), a.loadAuthorize(), a.goGame();
                }
            });
        }, function() {
            a.notification.showToast("获取用户信息失败！");
        }, "您点击了拒绝授权,将无法开始挑战,点击确定重新获取授权。");
    },
    goGame: function(e) {
        var t = this, r = (0, s.isFirstRedirect)(), o = (0, i.getMemoryShareOption)();
        if (0 === (0, i.getMemoryBlack)() && (r == n.FIRST_TYPE.REDIRECT && !t.isEmpty(o.index_other_appid) || r == n.FIRST_TYPE.NOT_OPEN && !t.isEmpty(o.index_other_appid))) return t.navigate2Mini({
            currentTarget: {
                dataset: {
                    toid: o.index_other_appid,
                    appid: o.index_other_appid,
                    path: o.index_other_path
                }
            }
        }), void (0, a.checkRedirectNum)();
        t.loadGameData();
    },
    loadGameData: function() {
        var e = this;
        (0, a.startGame)(function(t) {
            if (e.hideLoading(), 1 == t.data.status) {
                for (var a = 0; a < t.data.words.length; a++) [ "primary", "pinyin", "caution", "intro" ].forEach(function(i) {
                    var r = c.decode(t.data.words[a][i]);
                    t.data.words[a][i] = e.isEmpty(r) ? "" : r;
                });
                (0, i.setQuestion)(t.data.words, t.data.challege_id), wx.navigateTo({
                    url: "../game/game"
                });
            } else 0 == t.data.status && e.setData({
                tkShow: "show"
            });
        }, function() {
            e.hideLoading();
        });
    },
    closeRuleTk: function() {
        this.setData({
            ruleTk: "hide"
        });
    },
    closeTk: function() {
        this.setData({
            tkShow: "hide"
        });
    },
    openRuleTk: function() {
        this.setData({
            ruleTk: "show"
        });
    },
    goGift: function() {
        this.data.index_middle_txt.length && wx.switchTab({
            url: "../gift/gift"
        });
    },
    moreGame: function(e) {
        var t = e.currentTarget.dataset, a = t.id, i = t.appid, o = t.path;
        wx.navigateToMiniProgram({
            appId: i,
            path: o,
            success: function() {
                (0, r.moregames)({
                    app_id: a
                });
            }
        });
    },
    blackUserListener: function(e) {
        var t = this;
        wx.onUserCaptureScreen(function(e) {
            (0, i.getMemoryUser)();
            (0, i.saveMemoryBlack)(1), t.setData({
                black_user: 1
            }), (0, r.addBlackUser)(), wx.setNavigationBarTitle({
                title: "学拼音"
            });
        });
    }
}));