var e = require("../../core/basePage.js"), a = require("../../api/profileApi.js"), t = require("../../api/systemApi.js"), i = (require("../../api/shareApi.js"), 
require("../../config/scopeenum.js"), require("../../utils/authorizeHelper.js"), 
require("../../utils/cacheHepler.js"), require("../../utils/memoryHelper.js")), r = require("../../api/adApi.js"), o = require("../../utils/common.js");

getApp(), require("../../utils/md5.js");

Page((0, e.basePage)({
    shareoption: {
        titleField: "user_index_share_title",
        imageField: "user_index_share_img",
        completed: function(e) {
            e.setData({
                tkShow: "hide"
            }), e.loadUserInfo();
        }
    },
    data: {
        tkShow: "hide",
        avatarUrl: "",
        imgLogo: "../../image/user_logo.jpg",
        nickName: "蒙面人",
        chance_num: 0,
        challenge_num: 0,
        success_num: 0,
        prize_num: 0,
        moreGame: [],
        reload: 0,
        amount: 0,
        black_user: 0
    },
    onInit: function() {
        this.setData({
            init: !0
        }), this.loadUserInfo(), this.loadMore(), this.setBlack();
    },
    setBlack: function() {
        var e = this;
        1 === (0, i.getMemoryBlack)() && e.setData({
            black_user: 1
        });
    },
    onShow: function() {
        this.data.init && this.loadUserInfo();
    },
    loadMore: function() {
        var e = this;
        (0, r.getMore)(function(a) {
            e.setData({
                moreGames: a.data.link_list
            });
        });
    },
    loadUserInfo: function() {
        var e = this;
        e.loadProfile(), e.loadAuthorize();
    },
    loadProfile: function() {
        var e = this, t = this;
        console.log("loadProfile start"), (0, a.getProfile)(function(e) {
            (0, i.setWidthdrawTip)(e.data.wen_xin_ti_shi), t.setData({
                withdraw_limit: e.data.withdraw_limit,
                amount: e.data.record.amount,
                chance_num: e.data.record.chance_num ? e.data.record.chance_num : 0,
                challenge_num: e.data.record.challenge_num ? e.data.record.challenge_num : 0,
                success_num: e.data.record.success_num ? e.data.record.success_num : 0,
                prize_num: e.data.record.prize_num ? e.data.record.prize_num : 0
            });
            var a = e.data.redpacket_list;
            if (a.length > 0) for (var r = 0; r < a.length; r++) a[r].create_time = (0, o.formatTime)(a[r].create_time, "Y-M-D h:m:s");
            t.setData({
                recordList: a
            });
        }, function() {
            e.data.reload <= 1 && (e.setData({
                reload: e.data.reload + 1
            }), t.loadProfile(), console.log("loadProfile fail"));
        });
    },
    upUserData: function(e) {
        (0, a.updateProfile)(e, function(e) {});
    },
    more_games: function(e) {
        var a = e.currentTarget.dataset, i = a.id, r = a.appid, o = a.path;
        wx.navigateToMiniProgram({
            appId: r,
            path: o,
            success: function() {
                (0, t.moregames)({
                    app_id: i
                });
            }
        });
    },
    bindWithdraw: function() {
        wx.navigateTo({
            url: (0, o.format)("/pages/transfer/transfer?money={0}&withdraw_limit={1}", this.data.amount, this.data.withdraw_limit)
        });
    },
    openTk: function() {
        this.setData({
            tkShow: "show"
        });
    },
    closeTk: function() {
        this.setData({
            tkShow: "hide"
        });
    },
    goGift: function() {
        wx.switchTab({
            url: "../gift/gift"
        });
    },
    tousu: function() {
        wx.navigateTo({
            url: "../tousu/tousu"
        });
    }
}));