function e(e, t) {
    var i = {};
    for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
    return i;
}

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];
        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    }
    return e;
}, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, n = require("../utils/common.js"), o = require("../api/systemApi.js"), a = require("../api/shareApi.js"), r = require("../utils/validator.js"), s = (require("../utils/weixinHelper.js"), 
require("../config/errorenum.js"), require("../config/urienum.js")), c = require("../utils/cacheHepler.js"), u = require("../utils/memoryHelper.js"), l = require("../config/appsetting.js"), h = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../utils/deepAssign.js")), f = require("../api/adApi.js"), d = require("../config/scopeenum.js"), p = require("../utils/authorizeHelper.js"), g = require("../api/profileApi.js");

require("../config/appsetting.js");

module.exports = {
    basePage: function(m) {
        var y = {
            shareoption: {
                title: null,
                image: null,
                titleField: "",
                imageField: "",
                path: "/pages/index/index",
                reLaunch: !1
            },
            showLoading: function(e, t) {
                wx.showLoading({
                    title: e,
                    mask: !0
                });
            },
            hideLoading: function() {
                wx.hideLoading();
            },
            getMemory: u.getMemory,
            setMemory: u.setMemory,
            getCache: c.getCache,
            setCache: c.setCache,
            isValids: r.isValids,
            isEmpty: n.isEmpty,
            getLocalUser: c.getLocalUser,
            data: {
                adid: l.adid,
                imageBase: s.imageBase,
                videoBase: s.videoBase
            }
        }, v = (m.withShareTicket, e(m, [ "withShareTicket" ])), w = {
            submitFormId: function(e) {
                "object" == (void 0 === e ? "undefined" : i(e)) && e.detail && e.detail.formId ? (0, 
                o.addFormId)(e.detail.formId) : "string" == typeof e && (0, o.addFormId)(e);
            },
            navigateSubmit: function(i) {
                this.submitFormId(i);
                var o = i.currentTarget.dataset, a = o.type, r = void 0 === a ? "navigateTo" : a, s = o.url, c = e(o, [ "type", "url" ]);
                wx.hasOwnProperty(r) && !(0, n.isEmpty)(s) && wx[r](t({
                    url: s
                }, c));
            },
            onLoad: function(e) {
                var i = this;
                this.selectComponent && null == this.notification && (this.notification = this.selectComponent("#notification"));
                var o = e.fromUser, r = e.fromTime;
                i.loadSystem(), i.listenCapture(), i.listenNetwork(), i.checkVersion();
                var s = (0, u.getMemoryUser)();
                (0, n.isEmpty)(s) ? (0, u.registerLoadUserCallback)(function() {
                    i.data.isInitialize || (0, n.isFunction)(m.onInit) && m.onInit.call(i, t({}, e)), 
                    (0, n.isEmpty)(o) || (0, a.responseShare)({
                        end_time: (0, n.getTimestamp)(),
                        share_user_id: o,
                        share_time: r
                    }, function(e) {
                        console.log("responseShare", e);
                    });
                }) : i.data.isInitialize || (0, n.isFunction)(m.onInit) && m.onInit.call(i, t({}, e));
            },
            onReady: function(e) {
                this.selectComponent && null == this.notification && (this.notification = this.selectComponent("#notification")), 
                (0, n.isFunction)(m.onReady) && m.onReady.call(this, e);
            },
            onShow: function(e) {
                (0, n.isFunction)(m.onPageShow) && m.onPageShow.call(this, e);
            },
            reLaunch2Index: function() {
                this.shareoption.reLaunch && wx.reLaunch({
                    url: "../index/index"
                });
            },
            loadSystem: function() {
                var e = this;
                wx.getSystemInfo({
                    success: function(t) {
                        console.log("res.SDKVersion", t.SDKVersion), e.setData({
                            isNewNav: t.SDKVersion > "2.0.7"
                        });
                    }
                });
            },
            listenCapture: function() {
                wx.onUserCaptureScreen && wx.onUserCaptureScreen(function() {
                    for (var e = getCurrentPages(), t = e[e.length - 1].route, i = (0, u.getMemoryShareOption)(), n = 0; n < i.black_user_page_url.length; n++) i.black_user_page_url[n] == t && !0;
                });
            },
            listenNetwork: function() {
                var e = this, t = function(t) {
                    if ("none" == t.networkType) {
                        e.notification ? e.notification.showToast("当前网络状态不佳，可能会影响您体验") : wx.showToast({
                            title: "当前网络状态不佳，可能会影响您体验",
                            icon: "none",
                            duration: 4e3
                        });
                    }
                };
                wx.getNetworkType({
                    success: function(e) {
                        t(e);
                    },
                    complete: function() {
                        wx.onNetworkStatusChange(function(e) {
                            t(e);
                        });
                    }
                });
            },
            checkVersion: function() {
                if (wx.getUpdateManager) {
                    var e = wx.getUpdateManager();
                    e.onCheckForUpdate(function(t) {
                        t.hasUpdate && that.notification.showDialog("发现新版本", {
                            showCancel: !1,
                            confirmText: "使用最新版本",
                            onConfirm: function() {
                                e.applyUpdate();
                            }
                        });
                    }), e.onUpdateReady(function() {
                        that.notification.showDialog("新版本已经准备好，是否重启应用？", {
                            showCancel: !1,
                            onConfirm: function() {
                                e.applyUpdate();
                            }
                        });
                    }), e.onUpdateFailed(function() {});
                }
            },
            navigateStatistics: function(e) {
                var t = e.currentTarget.dataset, i = t.toid;
                t.appid, t.path, t.extardata, t.version;
                (0, f.addStatistics)(i);
            },
            navigate2Mini: function(e) {
                console.log("navigate2Mini");
                var t = e.currentTarget.dataset, i = t.toid, n = t.appid, o = t.path, a = t.extardata, r = t.version;
                wx.navigateToMiniProgram({
                    appId: n,
                    path: o,
                    extarData: {
                        channel: a,
                        data: a
                    },
                    envVersion: r,
                    success: function(e) {
                        (0, f.addStatistics)(i);
                    }
                });
            },
            add2Clipboard: function(e, t) {
                var i = this, o = e.currentTarget.dataset.value;
                (0, n.isEmpty)(o) || wx.setClipboardData({
                    data: o,
                    success: function(e) {
                        i.notification ? i.notification.showToast("已复制") : wx.showToast({
                            icon: "none",
                            title: "已复制"
                        }), (0, n.isFunction)(t) && t();
                    }
                });
            },
            loadAuthorize: function() {
                var e = this;
                (0, p.checkAuthorize)(d.SCOPE_ENUM.USER_INFO, function(i) {
                    var n = {};
                    if (i) {
                        var o = e.getLocalUser();
                        o ? Object.assign(n, {
                            avatarUrl: o.avatarUrl,
                            nickName: o.nickName
                        }) : i = !1;
                    }
                    e.setData(t({
                        isAuthorize: !!i
                    }, n)), console.log("userinfo", n);
                });
            },
            getWxUserInfo: function(e, t) {
                var i = this;
                e.detail.userInfo ? ((0, c.saveLocalUser)(e.detail.userInfo), (0, g.updateProfile)(e.detail.userInfo, function(e) {
                    1 !== e.data.user_status && saveMemoryBlack(1);
                }), this.loadAuthorize()) : (0, p.reAuthorize)(d.SCOPE_ENUM.USER_INFO, function(e) {
                    wx.getUserInfo({
                        success: function(e) {
                            (0, c.saveLocalUser)(e.userInfo), (0, g.updateProfile)(e.userInfo, function(e) {
                                1 !== e.data.user_status && saveMemoryBlack(1);
                            }), i.loadAuthorize();
                        }
                    });
                }, function() {
                    i.notification.showToast("获取用户信息失败！");
                });
            },
            loadConfig: function(e) {
                var t = this;
                (0, o.getConfig)(function(i) {
                    "404" == i.statusCode && t.loadConfig(e), (0, u.saveMemoryShareOption)(i.data), 
                    (0, u.setAppConfig)(i.data), e();
                });
            },
            addShareCount: function(e) {
                var t = (0, u.getMemoryShareOption)(), i = this;
                (0, a.addShare)(e, function(o) {
                    (0, n.isFunction)(i.shareoption.completed) && i.shareoption.completed(i, i), 1 == o.data.status ? 1 == o.data.chance_num ? i.notification.showDialog((0, 
                    n.isEmpty)(e.shareTicket) ? t.share_to_user_success_text : t.share_to_group_success_text, {
                        showCancel: !1,
                        onConfirm: function() {
                            i.reLaunch2Index();
                        },
                        onCancel: function() {
                            i.reLaunch2Index();
                        }
                    }) : 0 != o.data.chance_num || 1 != o.data.diff && e.shareTicket ? 0 == o.data.diff && e.shareTicket && i.notification.showDialog(t.share_to_group_repeat_text, {
                        showCancel: !1,
                        onConfirm: function() {}
                    }) : i.notification.showDialog((0, n.isEmpty)(e.shareTicket) ? t.share_to_user_limit_text : t.share_to_group_limit_text, {
                        showCancel: !1,
                        onConfirm: function() {
                            i.reLaunch2Index();
                        }
                    }) : i.notification.showDialog("糟糕，好像出了点问题", {
                        showCancel: !1,
                        onConfirm: function() {}
                    });
                });
            },
            onShareAppMessage: function(e) {
                var t = this;
                if ("menu" == e.from || e.target && "notChance" == e.target.id || 1 === (0, u.getMemoryBlack)()) return {
                    title: "我发现了一个有趣小程序，赶紧来看看吧",
                    path: "/pages/index/index"
                };
                var i = (0, u.getMemoryShareOption)();
                wx.showShareMenu({
                    withShareTicket: !0
                });
                var o = (0, n.getTimestamp)(), a = (0, n.format)("{0}?fromUser={1}&fromTime={2}", t.shareoption.path, (0, 
                u.getMemoryUser)(), o);
                t.setData({
                    shareTime: o
                });
                var r = "", s = "", c = i[t.shareoption.titleField];
                if (c instanceof Array) {
                    h = (0, u.getShareTitleIndex)();
                    c.length - 1 < h && (h = 0), r = c[h], (0, u.setShareTitleIndex)(h + 1);
                } else r = (0, n.isEmpty)(c) ? "我发现了一个有趣小程序，赶紧来看看吧" : c;
                var l = i[t.shareoption.imageField];
                if (l instanceof Array) {
                    var h = (0, u.getShareImageIndex)();
                    l.length - 1 < h && (h = 0), s = l[h], (0, u.setShareImageIndex)(h + 1);
                } else s = (0, n.isEmpty)(l) ? "" : l;
                return {
                    title: r,
                    path: a,
                    imageUrl: s,
                    success: function(e) {
                        var i = e.shareTickets;
                        if (null == i) t.addShareCount({
                            share_type: 1
                        }); else {
                            wx.checkSession({
                                success: function(e) {
                                    console.log("checkSession ok ", e), n();
                                },
                                fail: function(e) {
                                    console.log("checkSession fail ", e), userLogin(function(e) {
                                        n();
                                    });
                                }
                            });
                            var n = function() {
                                wx.getShareInfo({
                                    shareTicket: i[i.length - 1],
                                    success: function(e) {
                                        var n = e.encryptedData, o = void 0 === n ? "" : n, a = e.iv, r = void 0 === a ? "" : a;
                                        t.addShareCount({
                                            shareTicket: i[i.length - 1],
                                            encryptedData: o,
                                            iv: r,
                                            share_type: 2
                                        });
                                    }
                                });
                            };
                        }
                    }
                };
            },
            onPullDownRefresh: function(e) {
                var t = this;
                t.setData({
                    page: 1
                }), console.log("onPullDownRefresh"), (0, n.isFunction)(m.onRefresh) && m.onRefresh.call(t, e), 
                wx.stopPullDownRefresh();
            }
        };
        return (0, h.default)(y, v, w);
    }
};