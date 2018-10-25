function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

function b(a) {
    return function() {
        var b = a.apply(this, arguments);
        return new Promise(function(c, d) {
            function f(a, e) {
                try {
                    var g = b[a](e), h = g.value;
                } catch (a) {
                    return void d(a);
                }
                return g.done ? void c(h) : Promise.resolve(h).then(function(a) {
                    f("next", a);
                }, function(a) {
                    f("throw", a);
                });
            }
            return f("next");
        });
    };
}

function c(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

function d(a, b) {
    if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return b && ("object" == typeof b || "function" == typeof b) ? b : a;
}

function f(a, b) {
    if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
    a.prototype = Object.create(b && b.prototype, {
        constructor: {
            value: a,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var g = function() {
    function b(b, c) {
        for (var d, a = 0; a < c.length; a++) d = c[a], d.enumerable = d.enumerable || !1, 
        d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(b, d.key, d);
    }
    return function(c, d, e) {
        return d && b(c.prototype, d), e && b(c, e), c;
    };
}(), e = require("./npm/wepy/lib/wepy.js"), h = a(e);

require("./npm/wepy-async-function/index.js");

var i = require("./config.js"), j = a(i), k = require("./mixins/mtaAnalysis.js"), l = a(k), m = require("./service/DataTrack.js"), n = a(m), o = require("./service/UpdateManager.js"), p = a(o), q = require("./service/UserService.js"), r = a(q), s = require("./service/Request.js"), u = a(s), t = function(a) {
    function i() {
        c(this, i);
        var a = d(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
        return a.config = {
            pages: [ "pages/index", "pages/strategy", "pages/strategy_detail", "pages/information", "pages/redpacket", "pages/rank", "pages/gameglory", "pages/moneystrategy", "pages/withdraw", "pages/personalDetail", "pages/scene", "pages/playRecord", "pages/invited", "pages/dailyRedPacket" ],
            window: {
                backgroundTextStyle: "light",
                navigationBarBackgroundColor: "#fff",
                navigationBarTitleText: "泡泡游乐园",
                navigationBarTextStyle: "black",
                navigationStyle: "custom"
            },
            tabBar: {
                color: "#323232",
                selectedColor: "#a171eb",
                backgroundColor: "#ffffff",
                borderStyle: "black",
                list: [ {
                    pagePath: "pages/index",
                    text: "游戏",
                    iconPath: "./images/game.png",
                    selectedIconPath: "./images/game_active.png"
                }, {
                    pagePath: "pages/personalDetail",
                    text: "个人",
                    iconPath: "./images/friend.png",
                    selectedIconPath: "./images/friend_active.png"
                } ]
            }
        }, a.globalData = {
            isFromMyCollect: !1,
            userInfo: [],
            configList: null,
            options: {},
            extraData: {}
        }, a.update_chips = b(regeneratorRuntime.mark(function a() {
            var b, c;
            return regeneratorRuntime.wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return b = null, c = {
                        user_token: this.globalData.userInfo.token
                    }, a.next = 3, u.default.GET("update_chips", c, 2);

                  case 3:
                    b = a.sent, this.globalData.userInfo.member_gold = b.pao_gold, this.globalData.userInfo.member_rmb = b.rmb;

                  case 6:
                  case "end":
                    return a.stop();
                }
            }, a, this);
        })), a.use("requestfix"), a.use("promisify"), a;
    }
    return f(i, a), g(i, [ {
        key: "onLaunch",
        value: function(a) {
            wx.setStorageSync("options", a), console.log("来自" + a.scene), n.default.setup(a);
        }
    }, {
        key: "onShow",
        value: function(a) {
            this.globalData.options = a.query, this.globalData.isFromMyCollect = !1, console.log("params", a), 
            1104 != a.scene && 1089 != a.scene || (this.globalData.isFromMyCollect = !0), a.referrerInfo && a.referrerInfo.extraData && a.referrerInfo.extraData.token && (u.default.token = a.referrerInfo.extraData.token, 
            wx.setStorageSync("tokenFromOthers", a.referrerInfo.extraData.token));
            var b = a.query;
            b && b.share_type && 5 == b.share_type && (this.globalData.share_type = b.share_type || 0, 
            this.globalData.share_id = b.share_id || 0, this.globalData.isLogin = !1), console.log(0 == j.default.url.indexOf("https") ? "正式服" : "测试服"), 
            p.default.update(), r.default.fakeLogin(b);
        }
    }, {
        key: "testAsync",
        value: function() {
            var a = b(regeneratorRuntime.mark(function a() {
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                      case "end":
                        return a.stop();
                    }
                }, a, this);
            }));
            return function() {
                return a.apply(this, arguments);
            };
        }()
    }, {
        key: "getUserInfo",
        value: function(a) {
            var b = this;
            return b.globalData.userInfo ? this.globalData.userInfo : void h.default.getUserInfo({
                success: function(c) {
                    b.globalData.userInfo = c.userInfo, a && a(c.userInfo);
                }
            });
        }
    } ]), i;
}(h.default.app);

App(require("./npm/wepy/lib/wepy.js").default.$createApp(t, {
    noPromiseAPI: [ "createSelectorQuery", "request" ]
}));