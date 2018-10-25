function e(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

var n = function() {
    function e(e, n) {
        for (var o = 0; o < n.length; o++) {
            var t = n[o];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
            Object.defineProperty(e, t.key, t);
        }
    }
    return function(n, o, t) {
        return o && e(n.prototype, o), t && e(n, t), n;
    };
}(), o = require("./tracker/wxapm.min.js"), t = require("./library/file-util.js"), c = require("./hortor-sdk/sdk.min.js"), a = require("./hortor-sdk/sdk-conf.js"), i = require("./cross-sdk/cross-sdk-conf.js"), u = require("./cross-sdk/cross-sdk.min.js"), r = require("./wall-sdk/wall-sdk-conf.js"), s = require("./wall-sdk/wall-sdk.min.js"), l = function() {
    function o() {
        e(this, o);
    }
    return n(o, [ {
        key: "sdkInit",
        value: function(e, n, o, t) {
            "https://" != e && (a.Server_URL = e), n && (a.gameId = n), o && (a.getSdkSetting = o), 
            t && (a.env = t), a.gameVersion = "v1.0.0", c.init(a);
        }
    }, {
        key: "crossSdkInit",
        value: function(e, n, o, t) {
            n && (i.gameId = n), e && (i.version = e), t && (i.openId = t), o && (i.env = o), 
            u.init(i);
        }
    }, {
        key: "crossSdkCreateAd",
        value: function(e, n, o) {
            u.createAd({
                adsId: e,
                success: n,
                fail: o
            });
        }
    }, {
        key: "crossSdkShowAd",
        value: function(e) {
            u.showAd({
                adsId: e
            });
        }
    }, {
        key: "wallSdkInit",
        value: function(e, n, o, t, c, a) {
            e && (r.version = e), n && (r.gameId = n), o && (r.key = o), c && (r.openId = c), 
            t && (r.env = t), r.sex = a, r.gameServerId = "", s.init(r);
        }
    }, {
        key: "wallSdkSetLogind",
        value: function(e, n) {
            s.setLogind(e, n, "");
        }
    }, {
        key: "wallSdkLogOpenTaskPanel",
        value: function() {
            s.logOpenTaskPanel();
        }
    }, {
        key: "wallSdkGetTasks",
        value: function(e, n, o) {
            s.getTasks({
                success: e,
                fail: n,
                complete: o
            });
        }
    }, {
        key: "wallSdkGoTask",
        value: function(e, n, o, t) {
            s.goTask(e, {
                success: n,
                fail: o,
                complete: t
            });
        }
    }, {
        key: "wallSdkGetAward",
        value: function(e, n, o) {
            s.getAward(e, {
                success: n,
                fail: o
            });
        }
    }, {
        key: "login",
        value: function(e, n) {
            c.login(function(n, o, t) {
                console.log("user=>>", n), console.log("error=>>", o), console.log("ckSession=>>", t), 
                e(n, o);
            }, n);
        }
    }, {
        key: "weakLogin",
        value: function(e, n) {
            c.weakLogin(function(n, o, t) {
                console.log("user=>>", n), console.log("error=>>", o), console.log("ckSession=>>", t), 
                e(n, o);
            }, n);
        }
    }, {
        key: "getSystemInfo",
        value: function(e, n, o) {
            wx.getSystemInfo({
                success: function(n) {
                    e && e(n);
                },
                fail: function(e) {
                    n && n(e);
                },
                complete: function(e) {
                    o && o(e);
                }
            });
        }
    } ]), o;
}(), f = function() {
    function o() {
        e(this, o);
    }
    return n(o, [ {
        key: "showShareMenu",
        value: function(e, n, o) {
            wx.showShareMenu({
                withShareTicket: !0,
                success: function(n) {
                    e && e(n);
                },
                fail: function(e) {
                    n && n(e);
                },
                complete: function(e) {
                    o && o(e);
                }
            });
        }
    }, {
        key: "hideShareMenu",
        value: function(e, n, o) {
            wx.hideShareMenu({
                withShareTicket: !0,
                success: function(n) {
                    e && e(n);
                },
                fail: function(e) {
                    n && n(e);
                },
                complete: function(e) {
                    o && o(e);
                }
            });
        }
    }, {
        key: "onShareAppMessage",
        value: function(e, n, o, t, a, i, u) {
            c.onShareAppMessage(function() {
                return u(), {
                    title: e,
                    imageUrl: n,
                    query: o,
                    success: t,
                    fail: a,
                    complete: i
                };
            });
        }
    }, {
        key: "offShareAppMessage",
        value: function(e) {
            wx.offShareAppMessage(e);
        }
    }, {
        key: "shareAppMessage",
        value: function(e, n, o, t, a, i) {
            var u = {
                title: e,
                imageUrl: n,
                query: o,
                success: t,
                fail: a,
                complete: i
            };
            c.shareAppMessage(u);
        }
    }, {
        key: "getShareDecryptInfo",
        value: function(e, n, o, t) {
            var a = {
                shareTicket: e,
                userId: n,
                gameId: o
            };
            console.log("ticket === ", e), console.log("userId === ", n), console.log("gameId === ", o), 
            c.getShareInfo(a, function(e) {
                console.log("data ====", e), console.log("callback ==", t), t && t(e);
            });
        }
    } ]), o;
}(), d = function() {
    function a() {
        e(this, a);
    }
    return n(a, [ {
        key: "onShow",
        value: function(e) {
            wx.onShow(function(n) {
                e && e(n);
            });
        }
    }, {
        key: "onHide",
        value: function(e) {
            wx.onHide(function(n) {
                e && e(n);
            });
        }
    }, {
        key: "payByOrder",
        value: function(e, n) {
            c.pay(e, function(e) {
                n(e);
            });
        }
    }, {
        key: "QRCodePay",
        value: function(e, n) {
            c.QRCodePay(e, function(e) {
                n(e);
            });
        }
    }, {
        key: "reportFailOrders",
        value: function(e, n) {
            c.reportFailOrders({
                success: function(n) {
                    e && e(n);
                },
                fail: function(e) {
                    n && n(e);
                }
            });
        }
    }, {
        key: "refreshCache",
        value: function(e) {
            console.log("更新缓存中, new version=", e), t.fs.refreshCache(e), t.fs.clearCache();
        }
    }, {
        key: "clearCache",
        value: function() {
            t.fs.clearCache();
        }
    }, {
        key: "onCheckForUpdate",
        value: function(e) {
            if (t.fs.isNewCacheVersion(e) && this.refreshCache(e), "function" == typeof wx.getUpdateManager) {
                var n = wx.getUpdateManager();
                n.onCheckForUpdate(function(e) {
                    console.log("onCheckForUpdate->>>", e.hasUpdate);
                }), n.onUpdateReady(function() {
                    console.log("onUpdateReady->>>新的版本已经下载好，调用 applyUpdate 应用新版本并重启"), n.applyUpdate();
                }), n.onUpdateFailed(function() {
                    console.log("onUpdateFailed->>>新的版本下载失败");
                });
            }
        }
    }, {
        key: "onError",
        value: function(e) {
            wx.onError(function(n) {
                e(n);
            });
        }
    }, {
        key: "offError",
        value: function() {
            wx.offError(function(e) {
                console.log("取消小游戏监听出错");
            });
        }
    }, {
        key: "apmSdkInit",
        value: function(e, n, t) {
            o.init({
                gameId: n,
                gameVersion: e,
                env: t
            });
        }
    }, {
        key: "apmSetUserInfo",
        value: function(e) {
            o.setUserInfo(e);
        }
    }, {
        key: "creatFeedbackBtn",
        value: function(e, n) {
            c.feedbackBtn.create({
                type: "image",
                image: e,
                style: n
            });
        }
    }, {
        key: "showFeedback",
        value: function() {
            c.feedbackBtn.show();
        }
    }, {
        key: "hideFeedback",
        value: function() {
            c.feedbackBtn.hide();
        }
    }, {
        key: "showModal",
        value: function(e, n, o, t, c, a, i, u, r, s) {
            var l = {
                title: e,
                content: n,
                showCancel: o,
                cancelText: t,
                cancelColor: c || "#000000",
                confirmText: a,
                confirmColor: i || "#3cc51f",
                success: u,
                fail: r,
                complete: s
            };
            wx.showModal(l);
        }
    }, {
        key: "setClipboardData",
        value: function(e, n, o, t) {
            wx.setClipboardData({
                data: e,
                success: function(e) {
                    n && n(e);
                },
                fail: function(e) {
                    o && o(e);
                },
                complete: function(e) {
                    t && t(e);
                }
            });
        }
    }, {
        key: "getClipboardData",
        value: function(e, n, o) {
            wx.getClipboardData({
                success: function(n) {
                    e && e(n);
                },
                fail: function(e) {
                    n && n(e);
                },
                complete: function(e) {
                    o && o(e);
                }
            });
        }
    }, {
        key: "showToast",
        value: function(e, n, o, t, c, a, i) {
            wx.showToast({
                title: e,
                icon: n,
                image: o,
                duration: t,
                success: function(e) {
                    c && c(e);
                },
                fail: function(e) {
                    a && a(e);
                },
                complete: function(e) {
                    i && i(e);
                }
            });
        }
    }, {
        key: "checkSetUserStorage",
        value: function() {
            return !!wx.setUserCloudStorage;
        }
    }, {
        key: "setUserCloudStorage",
        value: function(e, n, o, t) {
            wx.setUserCloudStorage({
                KVDataList: e,
                success: function(e) {
                    n && n(e);
                },
                fail: function(e) {
                    o && o(e);
                },
                complete: function(e) {
                    t && t(e);
                }
            });
        }
    }, {
        key: "showLoading",
        value: function(e, n, o, t, c) {
            wx.showLoading({
                title: e || "加载中",
                mask: n || !1,
                success: function(e) {
                    o && o(e);
                },
                fail: function(e) {
                    t && t(e);
                },
                complete: function(e) {
                    c && c(e);
                }
            });
        }
    }, {
        key: "hideLoading",
        value: function(e, n, o) {
            wx.hideLoading({
                success: function(n) {
                    e && e(n);
                },
                fail: function(e) {
                    n && n(e);
                },
                complete: function(e) {
                    o && o(e);
                }
            });
        }
    }, {
        key: "exitMiniProgram",
        value: function(e, n, o) {
            wx.exitMiniProgram({
                success: function(n) {
                    e && e(n);
                },
                fail: function(e) {
                    n && n(e);
                },
                complete: function(e) {
                    o && o(e);
                }
            });
        }
    }, {
        key: "previewImage",
        value: function(e, n, o, t) {
            wx.previewImage({
                urls: e,
                success: function(e) {
                    n && n(e);
                },
                fail: function(e) {
                    o && o(e);
                },
                complete: function(e) {
                    t && t(e);
                }
            });
        }
    }, {
        key: "checkVideoAd",
        value: function(e, n, o) {
            var t = wx.createRewardedVideoAd({
                adUnitId: e
            });
            t.onLoad(function(e) {
                n && n(), t.offError();
            }), t.onError(function(e) {
                console.log("checkVideoAd-error:", e), o && o(), t.offError();
            });
        }
    }, {
        key: "createRewardedVideoAd",
        value: function(e, n, o) {
            var t = wx.createRewardedVideoAd({
                adUnitId: e
            });
            t.load().then(function() {
                return t.show();
            }).catch(function(e) {
                return console.log(e.errMsg);
            }), t.onClose(function(e) {
                console.log("onClose:", e), n && n(e), t.offClose(), t.offError();
            }), t.onError(function(e) {
                console.log("createRewardedVideoAd-error:", e), o && o(), t.offError();
            });
        }
    }, {
        key: "createUserInfoButton",
        value: function(e) {
            return c.getGetUserInfoBtn(e);
        }
    }, {
        key: "checkRest",
        value: function(e, n) {
            c.checkRest(e, n);
        }
    }, {
        key: "checkIP",
        value: function(e, n) {
            c.checkIP(e, n);
        }
    }, {
        key: "statLog",
        value: function(e) {
            c.statLog(e);
        }
    }, {
        key: "onLineReportStart",
        value: function(e) {
            c.onLineReportStart(e);
        }
    }, {
        key: "onLineReportStop",
        value: function() {
            c.onLineReportStop();
        }
    } ]), a;
}(), k = {
    user: new l(),
    share: new f(),
    common: new d()
};

window.platform = k;