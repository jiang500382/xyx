function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

function b(a) {
    return function() {
        var b = a.apply(this, arguments);
        return new Promise(function(c, a) {
            function d(e, f) {
                try {
                    var g = b[e](f), h = g.value;
                } catch (b) {
                    return void a(b);
                }
                return g.done ? void c(h) : Promise.resolve(h).then(function(a) {
                    d("next", a);
                }, function(a) {
                    d("throw", a);
                });
            }
            return d("next");
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
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, 
        c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
    };
}(), e = require("./../npm/wepy/lib/wepy.js"), h = a(e), i = require("./../config.js"), j = a(i), k = require("./../mixins/mtaAnalysis.js"), l = a(k), m = require("./../mixins/share.js"), p = a(m), n = require("./../mixins/getAdver.js"), q = a(n), o = require("./../service/UserService.js"), r = a(o), s = require("./../service/Request.js"), v = a(s), t = require("./../service/utils.js"), w = a(t), u = require("./../service/Toast.js"), x = a(u), y = require("./../components/card/subscribe.js"), z = a(y), A = require("./../components/boast.js"), B = a(A), C = require("./../components/index/gamelist.js"), D = a(C), E = require("./../components/index/guide.js"), F = a(E), G = require("./../components/loading.js"), H = a(G), I = function(a) {
    function j() {
        var b, e, f, g;
        c(this, j);
        for (var h = arguments.length, i = Array(h), k = 0; k < h; k++) i[k] = arguments[k];
        return e = f = d(this, (b = j.__proto__ || Object.getPrototypeOf(j)).call.apply(b, [ this ].concat(i))), 
        f.mixins = [ p.default, q.default ], f.$repeat = {}, f.$props = {
            subscribe: {
                "v-bind:content.sync": "orderContent"
            },
            boast: {
                class: "boast",
                "xmlns:v-bind": "",
                "v-bind:broadcast.sync": "adverList",
                type: "1",
                "v-bind:isSquare.once": "isSquare",
                "v-bind:boastImg.once": "boastImg"
            },
            gamelist: {
                "v-bind:gameList.sync": "gameList"
            },
            guide: {},
            loading: {}
        }, f.$events = {}, f.components = {
            subscribe: z.default,
            boast: B.default,
            gamelist: D.default,
            guide: F.default,
            loading: H.default
        }, f.data = {
            getSomeBeans: !1,
            sureShare: !0,
            isShowSubscribe: !1,
            gameList: [],
            userInfo: {},
            token: "",
            orderContent: {},
            boastImg: "https://res.xingqiu123.com/hall/index/trump.png",
            brokenStatus: !1,
            giftBing: 20,
            orderText: [ "游戏预约", "", "该游戏即将上线,预约后将第一时间通知您" ],
            adverList: [],
            type: "1,2,4,5,7,8",
            isTall: "",
            mTop: 0,
            isFirstLogin: !1,
            code: null,
            isNotLogin: !0,
            isLoading: !1,
            isPort: !1
        }, f.events = {
            showSubscribe: function(a) {
                this.isShowSubscribe = !0, this.orderContent = {
                    title: this.orderText[0],
                    contentOne: this.orderText[1],
                    contentTwo: this.orderText[2],
                    tappass: "tappass",
                    tapbook: "tapbook",
                    gameId: a
                };
            },
            tapbook: function() {
                this.isShowSubscribe = !1, wx.showToast({
                    title: "预约成功",
                    icon: "../images/common/success.png"
                }), this.$apply();
            },
            tappass: function() {
                this.isShowSubscribe = !1, this.$apply();
            },
            getBeans: function() {
                this.guideCollect = !0, this.$apply();
            },
            logining: function(a) {
                var b = this;
                if (console.log(a), -1 < a.detail.errMsg.indexOf("fail")) x.default.showModal("提示", "您需要打开授权才能登录，是否打开授权设置？", "去设置", function() {
                    r.default.goToSetting();
                }); else {
                    this.isNotLogin = !0, this.isFirstLogin = !1;
                    var c = this.$parent.globalData.options;
                    r.default.loginWithUserInfo(this.code, function(a) {
                        b.userLogin(a);
                    }, a.detail, c, this);
                }
            }
        }, f.methods = {
            prevent: function() {},
            guideCollect: function() {
                this.getSomeBeans = !1;
            },
            closeGuide: function() {
                this.guideCollect = !1;
            },
            hiddenBroken: function() {
                this.brokenStatus = !1;
            }
        }, g = e, d(f, g);
    }
    return f(j, a), g(j, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {
            var a = b(regeneratorRuntime.mark(function a() {
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        if (812 <= wx.getSystemInfoSync().screenHeight && (this.isTall = "tall", this.mTop = 2, 
                        this.$apply()), console.log("第一次登入？", wx.getStorageSync("3.5guide") ? "否" : "是"), 
                        !wx.getStorageSync("3.5guide")) {
                            a.next = 7;
                            break;
                        }
                        this.$parent.globalData.userInfo.token && (this.getGameList(2), this.getDailyRed(), 
                        this.$parent.update_chips(), this.getBeans(), this.userInfo = this.$parent.globalData.userInfo, 
                        this.userInfo.getRecharge = !1, this.$apply()), this.gamelist || this.gameList.length || this.logining(), 
                        a.next = 14;
                        break;

                      case 7:
                        return console.log("获取jScode"), a.next = 10, h.default.login();

                      case 10:
                        this.code = a.sent, this.isNotLogin = !1, this.isFirstLogin = !0, this.$apply();

                      case 14:
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
        key: "logining",
        value: function() {
            var a = this, b = this.$parent.globalData.options, c = this;
            r.default.login(b, function(b) {
                a.isNotLogin = !0, a.userLogin(b);
            }, function(b) {
                a.code = b, c.isFirstLogin = !0, c.isNotLogin = !1, c.$apply();
            }, this);
        }
    }, {
        key: "userLogin",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function a(b) {
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        console.log("登入成功"), b && (this.userInfo = b, this.$parent.globalData.userInfo = this.userInfo, 
                        wx.setStorageSync("userInfo", this.userInfo), this.$parent.globalData.configList = b.config_list, 
                        wx.setStorageSync("token", this.userInfo.token), this.$parent.globalData.isReview = this.userInfo.is_review, 
                        console.log("是否审核通过", this.userInfo.is_review ? "否" : "是"), wx.getStorageSync("tokenFromOthers") && wx.removeStorageSync("tokenFromOthers"), 
                        wx.setStorageSync("3.5guide", "3.5guide"), this.isFirstLogin = !1, 5 > this.userInfo.member_gold && this.getBroken(), 
                        this.isNotLogin = !1, this.getGameList(this), this.getAdver("adverList", this.type, 1), 
                        this.getDailyRed(), this.goTorepacket(), this.getRecharge(), this.getBeans(), this.$apply());

                      case 2:
                      case "end":
                        return a.stop();
                    }
                }, a, this);
            }));
            return a;
        }()
    }, {
        key: "getGameList",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function a(b) {
                var c, d, f, g, h = this;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        if (c = new Date().getTime(), console.log("getGameList", b), d = wx.getStorageSync("upDateGameList"), 
                        f = d && 6e4 >= c - d, 2 == b && f) {
                            a.next = 15;
                            break;
                        }
                        return g = {
                            user_token: this.userInfo.token
                        }, a.next = 8, v.default.GET("gameList", g, b);

                      case 8:
                        this.gameList = a.sent, console.log(this.gameList), this.gameList.forEach(function(a) {
                            return h.userInfo.is_review ? void (a.gameOwner = 1) : 2 < Math.floor(a.id / 1e3) ? void (a.gameOwner = 0) : a.is_online && !a.match_info.is_jump ? (console.log(a.match_info.is_jump), 
                            void (a.gameOwner = 1)) : void (a.gameOwner = 0);
                        }), this.$parent.globalData.gameList = this.gameList, wx.setStorageSync("upDateGameList", c), 
                        console.log("列表刷新"), this.$apply();

                      case 15:
                      case "end":
                        return a.stop();
                    }
                }, a, this);
            }));
            return a;
        }()
    }, {
        key: "getDailyRed",
        value: function() {
            var a = b(regeneratorRuntime.mark(function a() {
                var b, c;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return console.log("请求好友助力"), b = null, c = {
                            user_token: this.userInfo.token,
                            type: 1
                        }, console.log(c), a.next = 5, v.default.GET("get_red_info", c, 2);

                      case 5:
                        b = a.sent, console.log("22", b), this.isPort = !!b.is_show, this.$apply();

                      case 9:
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
        key: "getBeans",
        value: function() {
            var a = b(regeneratorRuntime.mark(function b() {
                var c, d, f, g, h, j, k, a;
                return regeneratorRuntime.wrap(function(b) {
                    for (;;) switch (b.prev = b.next) {
                      case 0:
                        if (c = wx.getStorageSync("count"), console.log("第" + c + "次登入"), d = wx.getSystemInfoSync(), 
                        f = w.default.compareVersion(d.version, "6.7.0"), g = "ios" == d.platform, h = this.$parent.globalData.isFromMyCollect, 
                        j = 0 < f && g && !h, c ? (2 != c || h || j && (this.guideCollect = !0), wx.setStorageSync("count", c + 1)) : wx.setStorageSync("count", 2), 
                        k = {
                            user_token: this.userInfo.token,
                            type: 2
                        }, !h) {
                            b.next = 15;
                            break;
                        }
                        return b.next = 12, v.default.POST("paoGoldDay", k, 2);

                      case 12:
                        a = b.sent, console.log("canGet", a), a && (console.log("获得豆子" + a + "个"), this.giftBing = a, 
                        this.getSomeBeans = !0, this.$parent.globalData.userInfo.member_gold += a);

                      case 15:
                        this.$apply();

                      case 16:
                      case "end":
                        return b.stop();
                    }
                }, b, this);
            }));
            return function() {
                return a.apply(this, arguments);
            };
        }()
    }, {
        key: "getBroken",
        value: function() {
            var a = b(regeneratorRuntime.mark(function a() {
                var b, c;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return b = {
                            user_token: this.userInfo.token,
                            type: 1
                        }, a.next = 3, v.default.POST("paoGoldDay", b, this);

                      case 3:
                        c = a.sent, c && (console.log("破产保护发放" + c + "豆子"), this.brokenStatus = !0, this.$parent.globalData.userInfo.member_gold = this.userInfo.member_gold += parseInt(c), 
                        this.$apply());

                      case 5:
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
        key: "goTorepacket",
        value: function() {
            this.$parent.globalData.options.to && 1 == this.$parent.globalData.options.to && (wx.navigateTo({
                url: "./redpacket"
            }), console.log("小游戏跳转红包页成功"));
        }
    }, {
        key: "getRecharge",
        value: function() {
            this.$parent.globalData.options.to && 2 == this.$parent.globalData.options.to && (wx.navigateTo({
                url: "./personalDetail"
            }), console.log("小游戏跳转个人信息成功"));
        }
    }, {
        key: "onShareAppMessage",
        value: function(a) {
            return this.shareCard(a);
        }
    } ]), j;
}(h.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(I, "pages/index"));