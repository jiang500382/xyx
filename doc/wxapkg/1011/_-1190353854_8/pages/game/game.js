var t = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
}, a = require("../../core/basePage.js"), e = require("../../api/gameApi.js"), i = (require("../../api/shareApi.js"), 
require("../../utils/memoryHelper.js")), s = require("../../api/systemApi.js"), n = (require("../../config/appsetting.js"), 
require("../../api/adApi.js")), o = (getApp(), require("../../utils/md5.js")), r = (require("../../utils/base64.js"), 
wx.createInnerAudioContext()), u = wx.createInnerAudioContext();

Page((0, a.basePage)({
    shareoption: {
        titleField: "game_end_share_title_arr",
        imageField: "game_end_share_img_arr",
        reLaunch: !0
    },
    data: {
        level: 0,
        questionArr: [],
        questionNum: 0,
        time_width: 100,
        challege_id: 0,
        timeOver: !1,
        musicOff: !1,
        tk_win: "hide",
        tk_fail: "hide",
        bar_status: "",
        jinduTime: "",
        mask_btn: !0,
        startPacket: !1,
        game_ad: {},
        adShow: !1,
        black_user: 0
    },
    onQuestion: function(t, a) {
        console.log("onQuestion questionArray", t, "challegeId", a);
    },
    onShare: function(t) {
        this.setData({
            tk_win: "hide",
            tk_fail: "hide"
        });
    },
    bind2Profile: function() {
        var t = this;
        t.setData({
            startPacket: !0
        }), setTimeout(function() {
            t.setData({
                startPacket: !1,
                success_status: "hide"
            }), wx.redirectTo({
                url: "/pages/packet/index?money=" + t.data.amount
            });
        }, 2e3);
    },
    onInit: function(a) {
        var e = this, s = (0, i.getAdvertisement)(), n = (0, i.getMemoryShareOption)();
        e.setData(t({
            shareOptions: n,
            questionArr: (0, i.getQuestionArr)(),
            challege_id: (0, i.getChallegeId)(),
            questionNum: (0, i.getQuestionNum)()
        }, s)), e.gameAudioPlay(), e.loadAd(), e.setBlack();
    },
    setBlack: function() {
        var t = this;
        1 === (0, i.getMemoryBlack)() && (t.setData({
            black_user: 1
        }), wx.setNavigationBarTitle({
            title: "学拼音大师"
        }));
    },
    loadAd: function() {
        var a = this;
        (0, n.getIndex)(function(e) {
            a.setData(t({}, e));
        });
    },
    jinduFun: function() {
        var t = this;
        t.data.jinduTime = setTimeout(function() {
            t.setData({
                mask_btn: !1,
                bar_status: "over"
            }), setTimeout(function() {
                u.pause(), t.faildAudioPlay(), t.feedback(0), t.setData({
                    tk_fail: "show",
                    adShow: !0,
                    timeOver: !0
                });
            }, 1e3);
        }, 1e3 * t.data.questionArr[t.data.level].time_limit);
    },
    select: function(t) {
        var a = this;
        if (a.data.mask_btn) {
            a.setData({
                mask_btn: !1
            }), clearTimeout(a.data.jinduTime);
            var e = o.md5(t.currentTarget.dataset.txt).substring(10, 20).toUpperCase();
            "play" == a.data.bar_status ? a.setData({
                bar_status: "play stop"
            }) : a.setData({
                bar_status: "replay stop"
            }), e == a.data.questionArr[a.data.level].valid ? (a.setData({
                right_status: t.currentTarget.dataset.id
            }), a.rightAudioPlay(), a.data.level + 1 == a.data.questionNum ? setTimeout(function() {
                a.successAudioPlay(), a.feedback(1);
            }, 1e3) : setTimeout(function() {
                "play stop" == a.data.bar_status ? a.setData({
                    bar_status: "replay"
                }) : a.setData({
                    bar_status: "play"
                }), a.setData({
                    level: a.data.level + 1,
                    right_status: 100,
                    mask_btn: !0
                }), a.jinduFun();
            }, 500)) : (a.wrongAudioPlay(), a.setData({
                wrong_status: t.currentTarget.dataset.id,
                bar_status: "play stop",
                mask_btn: !1
            }), setTimeout(function() {
                u.pause(), a.setData({
                    tk_fail: "show",
                    adShow: !0
                }), a.faildAudioPlay(), a.feedback(0);
            }, 1e3));
        }
    },
    feedback: function(t) {
        var a = this;
        (0, e.addFeedback)({
            type_: t,
            level: a.data.level,
            challege_id: (0, i.getChallegeId)()
        }, function(e) {
            console.log("addFeedback", e), 1 == t && (isNaN(e.data.amount) ? a.setData({
                amount: 0,
                tk_win: "show",
                adShow: !0
            }) : (u.pause(), a.setData({
                amount: e.data.amount,
                tk_win: "show",
                adShow: !0
            })));
        }, function() {
            a.notification.showDialog("网络连接中断，建议在WiFi中获取更好的产品体验", {
                showCancel: !1,
                confirmText: "重新挑战",
                onConfirm: function() {
                    wx.navigateBack({});
                }
            });
        });
    },
    closeTk: function() {
        wx.reLaunch({
            url: "../index/index"
        });
    },
    musicSet: function() {
        var t = this;
        t.setData({
            musicOff: !t.data.musicOff
        }), u.paused ? u.pause() : u.play();
    },
    gameAudioPlay: function() {
        (u = wx.createInnerAudioContext()).autoplay = !0, u.loop = !0, u.src = "/audio/music.mp3";
    },
    readyAudioPlay: function() {
        (r = wx.createInnerAudioContext()).autoplay = !0, r.src = "/audio/readygo.mp3";
    },
    rightAudioPlay: function() {
        (r = wx.createInnerAudioContext()).autoplay = !0, r.src = "/audio/right.mp3";
    },
    wrongAudioPlay: function() {
        (r = wx.createInnerAudioContext()).autoplay = !0, r.src = "/audio/wrong.mp3";
    },
    faildAudioPlay: function() {
        (r = wx.createInnerAudioContext()).autoplay = !0, r.src = "/audio/faild.mp3";
    },
    successAudioPlay: function() {
        (r = wx.createInnerAudioContext()).autoplay = !0, r.src = "/audio/success.mp3";
    },
    moreGame: function(t) {
        console.log(t);
        wx.navigateToMiniProgram({
            appId: t.currentTarget.dataset.appid,
            path: t.currentTarget.dataset.path,
            success: function() {
                (0, s.moregames)({
                    app_id: t.currentTarget.dataset.appid
                });
            }
        });
    },
    onUnload: function() {
        this.isEmpty(u) || (u.stop(), u.destroy(), u = null), this.isEmpty(r) || (r.stop(), 
        r.destroy(), r = null);
    },
    blackUserListener: function(t) {
        var a = this;
        wx.onUserCaptureScreen(function(t) {
            (0, i.getMemoryUser)();
            (0, i.saveMemoryBlack)(1), a.setData({
                black_user: 1
            }), (0, s.addBlackUser)(), wx.setNavigationBarTitle({
                title: "学拼音大师"
            });
        });
    }
}));