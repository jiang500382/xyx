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
}(), e = require("./../npm/wepy/lib/wepy.js"), h = a(e), i = require("./../mixins/share.js"), j = a(i), k = require("./../service/Request.js"), l = a(k), m = require("./../service/utils.js"), n = a(m), o = require("./../service/UserService.js"), p = a(o), q = require("./../service/Toast.js"), s = a(q), r = require("./../components/header.js"), u = a(r), t = require("./../components/pop/invite.js"), v = a(t), w = require("./../components/dailyredp/dailyRed.js"), x = a(w), y = require("./../components/loading.js"), z = a(y), A = function(a) {
    function j() {
        var f, e, g, i;
        c(this, j);
        for (var k = arguments.length, a = Array(k), l = 0; l < k; l++) a[l] = arguments[l];
        return e = g = d(this, (f = j.__proto__ || Object.getPrototypeOf(j)).call.apply(f, [ this ].concat(a))), 
        g.$repeat = {}, g.$props = {
            header: {
                method: "dailyRedp",
                title: "每日红包"
            },
            invitePop: {
                "xmlns:wx": "",
                "xmlns:v-bind": "",
                "v-bind:modalData.sync": "modalData"
            },
            dailyred: {
                "xmlns:v-bind": "",
                "v-bind:redList.sync": "redList",
                "v-bind:redStutas.once": "redStutas"
            }
        }, g.$events = {}, g.components = {
            header: u.default,
            invitePop: v.default,
            dailyred: x.default,
            loading: z.default
        }, g.data = {
            mTop: 0,
            token: null,
            redList: [],
            frdList: [],
            redStutas: 1,
            isLoading: !1,
            isShow: !0,
            isModal: !1,
            modalData: {},
            isInvite: !1,
            isLoginBox: !1
        }, g.customData = {
            redL: [],
            inviteId: 0,
            shareList: []
        }, g.methods = {
            _hideInvite: function() {
                this.isShow && (this.isInvite = !1, this.$apply());
            },
            _login: function() {
                function a() {
                    return c.apply(this, arguments);
                }
                var c = b(regeneratorRuntime.mark(function a(b) {
                    var c, d, f = this;
                    return regeneratorRuntime.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            if (console.log(b), !(-1 < b.detail.errMsg.indexOf("fail"))) {
                                a.next = 5;
                                break;
                            }
                            s.default.showModal("提示", "您需要打开授权才能登录，是否打开授权设置？", "去设置", function() {
                                p.default.goToSetting();
                            }), a.next = 10;
                            break;

                          case 5:
                            return c = this.$parent.globalData.options, a.next = 8, h.default.login();

                          case 8:
                            d = a.sent, p.default.loginWithUserInfo(d, function(a) {
                                f.isLoginBox = !1, f.$apply(), f.loadLogin(a);
                            }, b.detail, c, this);

                          case 10:
                          case "end":
                            return a.stop();
                        }
                    }, a, this);
                }));
                return a;
            }()
        }, g.events = {
            modalRecieve: function() {
                this.isModal = !1;
            },
            openBox: function(a) {
                switch (a.status) {
                  case 1:
                    console.log("任务未完成"), this.onShareAppMessage();
                    break;

                  case 2:
                    console.log("满足条件，领取礼包"), this.openAward(a.id);
                    break;

                  case 3:
                    console.log("红包已领取过");
                    var b = this.customData.redL[a.id], c = [];
                    0 < b.pao_gold && c.push({
                        note: "×" + b.pao_gold,
                        text_align: "center",
                        position: 0
                    }), 0 < b.rmb && c.push({
                        note: "×" + b.rmb + "元",
                        text_align: "center",
                        position: -100
                    }), this.modalData = {
                        text: c,
                        imageConfig: {
                            width: 149,
                            size: 200
                        },
                        image: "http://paopao.hi-hai.com/img/xcx/gameHall/activity/bubble_icon.png",
                        title: "恭喜您获得奖励",
                        introAlign: "initial"
                    }, this.isModal = !0, this.$apply();
                }
            }
        }, i = e, d(g, i);
    }
    return f(j, a), g(j, [ {
        key: "onLoad",
        value: function(a) {
            var b = 0;
            812 <= wx.getSystemInfoSync().screenHeight && (b = 2), this.mTop = b, console.log("进入好友助力", a), 
            this.token = this.$parent.globalData.userInfo.token ? this.$parent.globalData.userInfo.token : 0, 
            a.share_id && a.share_id != this.$parent.globalData.userInfo.id && (this.customData.inviteId = a.share_id, 
            this.requestLogin(this.$parent.globalData.userInfo.is_new));
        }
    }, {
        key: "onShow",
        value: function() {
            this.token ? (console.log("页面onshow"), this.loadData(this.token)) : (console.log("未登录"), 
            this.isLoginBox = !0, this.isInvite = !0);
        }
    }, {
        key: "onShareAppMessage",
        value: function() {
            var a = this.customData.shareList, b = n.default.rand(0, a.length - 1);
            return this.isInvite = !1, this.$apply(), {
                title: a[b].massage,
                path: "/pages/dailyRedPacket?share_type=7&share_id=" + this.$parent.globalData.userInfo.id,
                imageUrl: a[b].img
            };
        }
    }, {
        key: "loadData",
        value: function(a) {
            console.log(a), this.getRedPacket();
        }
    }, {
        key: "loadLogin",
        value: function(a) {
            this.$parent.globalData.userInfo && Object.keys(this.$parent.globalData.userInfo).length || (this.$parent.globalData.userInfo = a, 
            this.token = a.token ? a.token : 0), this.customData.inviteId && this.customData.inviteId != a.id ? this.requestLogin(a.is_new) : this.isInvite = !1, 
            this.loadData();
        }
    }, {
        key: "requestLogin",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function a(b) {
                var c, d;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        if (console.log("助力：" + this.token), !this.token) {
                            a.next = 10;
                            break;
                        }
                        return c = {
                            user_token: this.token,
                            share_id: this.customData.inviteId,
                            is_new: b
                        }, console.log(c), a.next = 6, l.default.POST("red_share", c);

                      case 6:
                        d = a.sent, console.log("好友助力成功", d), this.isInvite = !0, this.$apply();

                      case 10:
                      case "end":
                        return a.stop();
                    }
                }, a, this);
            }));
            return a;
        }()
    }, {
        key: "getRedPacket",
        value: function() {
            var a = b(regeneratorRuntime.mark(function a() {
                var b, c;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return b = null, c = {
                            user_token: this.token,
                            type: 0
                        }, a.next = 3, l.default.GET("get_red_info", c, this);

                      case 3:
                        b = a.sent, this.isShow = b.is_show, b.is_show ? (b.red_list = n.default.arrIdKey(b.reward_info_list, "red_id"), 
                        this.customData.redL = b.red_list, this.customData.shareList = b.share_info_list, 
                        this.redList = b.reward_info_list, this.frdList = b.friend_list, console.log("拿红包数据成功，数据渲染完成")) : (console.log("无活动权限，退出"), 
                        this.isInvite = !0), this.$apply();

                      case 7:
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
        key: "upDateRed",
        value: function() {
            var a = b(regeneratorRuntime.mark(function a() {
                var b, c;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return b = null, c = {
                            user_token: this.token,
                            type: 2
                        }, a.next = 3, l.default.GET("get_red_info", c, this);

                      case 3:
                        b = a.sent, b.red_list = n.default.arrIdKey(b.reward_info_list, "red_id"), this.customData.redL = b.red_list, 
                        this.redList = b.reward_info_list, this.$apply(), console.log("红包数据已更新");

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
        key: "openAward",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function b(c) {
                var d, f, g, h;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return c = parseInt(c), d = null, f = [], g = "", h = {
                            user_token: this.token,
                            red_id: c
                        }, a.next = 4, l.default.POST("receive_red_reward", h, 2);

                      case 4:
                        d = a.sent, 0 < d.pao_gold && (f.push({
                            note: "×" + d.pao_gold,
                            text_align: "center",
                            position: 0
                        }), g = "领取成功，豆子已到账"), 0 < d.rmb && (f.push({
                            note: "×" + d.rmb + "元",
                            text_align: "center",
                            position: -100
                        }), g = "恭喜获得现金红包"), Object.keys(d).length && (this.modalData = {
                            text: f,
                            imageConfig: {
                                width: 149,
                                size: 200
                            },
                            image: "http://paopao.hi-hai.com/img/xcx/gameHall/activity/bubble_icon.png",
                            title: "恭喜您获得奖励",
                            intro: g,
                            introAlign: "center"
                        }, this.isModal = !0, this.$apply(), this.upDateRed());

                      case 8:
                      case "end":
                        return a.stop();
                    }
                }, b, this);
            }));
            return a;
        }()
    } ]), j;
}(h.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(A, "pages/dailyRedPacket"));