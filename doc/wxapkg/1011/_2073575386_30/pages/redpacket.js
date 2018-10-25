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

function c(a, b, c) {
    return b in a ? Object.defineProperty(a, b, {
        value: c,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[b] = c, a;
}

function d(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

function f(a, b) {
    if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return b && ("object" == typeof b || "function" == typeof b) ? b : a;
}

function g(a, b) {
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

var h = function() {
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, 
        c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
    };
}(), e = require("./../npm/wepy/lib/wepy.js"), i = a(e), j = require("./../mixins/share.js"), k = a(j), l = require("./../mixins/getAdver.js"), m = a(l), n = require("./../service/Request.js"), o = a(n), p = require("./../service/utils.js"), q = a(p), r = require("./../service/Toast.js"), u = a(r), s = require("./../components/header.js"), v = a(s), t = require("./../components/redpacket/withdrawdeposit.js"), w = a(t), x = require("./../components/redpacket/exchangeList.js"), y = a(x), z = require("./../components/redpacket/luckWheel.js"), A = a(z), B = require("./../components/card/exchange.js"), C = a(B), D = require("./../components/card/historyList.js"), E = a(D), F = require("./../components/boast.js"), G = a(F), H = require("./../components/loading.js"), I = a(H), J = function(a) {
    function j() {
        var b, e, g, h, a;
        d(this, j);
        for (var l = arguments.length, i = Array(l), n = 0; n < l; n++) i[n] = arguments[n];
        return g = h = f(this, (b = j.__proto__ || Object.getPrototypeOf(j)).call.apply(b, [ this ].concat(i))), 
        h.mixins = [ k.default, m.default ], h.$repeat = {}, h.$props = {
            withdrawdeposit: {
                "xmlns:v-bind": "",
                "v-bind:rebBalance.sync": "rebBalance"
            },
            header: {
                title: "我的红包",
                method: "redpacket",
                fontColor: "white"
            },
            exchangelist: {
                "v-bind:exchangeList.sync": "exchangeList",
                "v-bind:goldNum.sync": "goldNum"
            },
            luckWheel: {
                "v-bind:status.sync": "isExchange",
                "v-bind:wheelData.sync": "wheelData",
                "v-bind:wheelCost.sync": "wheel_cost",
                "v-bind:token.sync": "token",
                "v-bind:user.sync": "wheel_user"
            },
            exchange: {
                "v-bind:content.sync": "content"
            },
            historylist: {
                "v-bind:historylist.sync": "historylist"
            },
            boast: {
                class: "boast",
                "v-bind:broadcast.sync": "adverList",
                type: "3",
                marqueeMargin: "0",
                "v-bind:isSquare.once": "isSquare",
                "v-bind:boastImg.once": "boastImg"
            },
            loading: {}
        }, h.$events = {}, h.components = {
            withdrawdeposit: w.default,
            header: v.default,
            exchangelist: y.default,
            luckWheel: A.default,
            exchange: C.default,
            historylist: E.default,
            boast: G.default,
            loading: I.default
        }, h.data = (e = {
            isSquare: !1,
            boastImg: "https://res.xingqiu123.com/hall/index/trump.png",
            token: "",
            goldNum: 0,
            rebBalance: 0,
            isExchange: !0,
            isTurnTable: !1,
            isShowToast: !1,
            isShowHistoryList: !1,
            adverList: [],
            exchangeList: [],
            historylist: [],
            wheelData: [],
            wheel_cost: 0,
            wheel_user: {}
        }, c(e, "isSquare", !1), c(e, "marqueeMargin", 70), c(e, "marqueeWidth", 570), c(e, "type", "7,8"), 
        c(e, "content", {
            title: "",
            content: {},
            type: "",
            btn1: "cancel",
            btn2: "getRedp"
        }), c(e, "isLoading", !1), e), h.customData = {
            page: 1,
            exchangeFlag: !1
        }, h.methods = {
            isExchange: function() {
                this.isExchange = !0, this.isTurnTable = !1;
            },
            isTurnTable: function() {
                this.isExchange = !1, this.isTurnTable = !0;
            }
        }, h.events = {
            hasZero: function() {
                u.default.showWarning("已售罄~");
            },
            getRecordList: function(a) {
                this.customData.page = 1, this.customData.historyListFlag = !0, this.getHistoryList(a);
            },
            exchangeRedpacked: function(a) {
                this.content.content = a, this.content.type = 1, this.content.title = "限量兑换", this.isShowToast = !0;
            },
            cancel: function() {
                this.isShowToast = !1;
            },
            getRedp: function(a) {
                this.exchange(a);
            },
            goToPlayGame: function() {
                this.isShowToast = !1, q.default.navigateToMiniProgram({
                    appId: "wx17e66e26685ed5d0"
                });
            },
            historyListClose: function() {
                this.historylist = [], this.isShowHistoryList = !1;
            },
            lodingMore: function(a) {
                0 < this.customData.page && (console.log("成功获取新代码", a), this.getHistoryList(a));
            },
            updateUser: function(a, b) {
                "gold" === a ? this.goldNum = this.$parent.globalData.userInfo.member_gold = parseInt(b) : "rmb" === a ? this.rebBalance = this.$parent.globalData.userInfo.member_rmb = parseFloat(b).toFixed(2) : void 0;
            }
        }, a = g, f(h, a);
    }
    return g(j, a), h(j, [ {
        key: "onLoad",
        value: function() {
            console.log("状态1", this.isExchange), this.token = this.$parent.globalData.userInfo.token, 
            this.getExchangeList(), this.rebBalance = this.$parent.globalData.userInfo.member_rmb, 
            this.goldNum = this.$parent.globalData.userInfo.member_gold, this.getWheelData(), 
            this.getAdver("adverList", this.type);
        }
    }, {
        key: "onShow",
        value: function() {
            console.log("状态2", this.isExchange), this.$parent.update_chips(), this.rebBalance = this.$parent.globalData.userInfo.member_rmb, 
            this.goldNum = this.$parent.globalData.userInfo.member_gold, this.$apply();
        }
    }, {
        key: "getExchangeList",
        value: function() {
            var a = b(regeneratorRuntime.mark(function a() {
                var b;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return b = {
                            user_token: this.$parent.globalData.userInfo.token
                        }, a.prev = 1, a.next = 4, o.default.GET("exchangeList", b, this);

                      case 4:
                        this.exchangeList = a.sent, console.log("获取红包列表成功"), a.next = 10;
                        break;

                      case 8:
                        a.prev = 8, a.t0 = a.catch(1);

                      case 10:
                        this.$apply();

                      case 11:
                      case "end":
                        return a.stop();
                    }
                }, a, this, [ [ 1, 8 ] ]);
            }));
            return function() {
                return a.apply(this, arguments);
            };
        }()
    }, {
        key: "getWheelData",
        value: function() {
            var a = b(regeneratorRuntime.mark(function a() {
                var b, c, d;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        b = this.$parent.globalData.configList, c = b.game.wheel_config, d = [], console.log("获取转盘信息成功", c), 
                        c.map(function(a) {
                            var b = {};
                            a = a.split("-"), b.num = parseFloat(a[0]), b.type = parseInt(a[1]), b.angle = a[2], 
                            d.push(b);
                        }), this.wheelData = d, this.wheel_cost = b.game.wheel_cost, this.wheel_user.gold = this.goldNum, 
                        this.wheel_user.rmb = this.rebBalance, console.log("用户资产信息", this.wheel_user), this.$apply();

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
        key: "exchange",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function b(c) {
                var d, f, g, a;
                return regeneratorRuntime.wrap(function(b) {
                    for (;;) switch (b.prev = b.next) {
                      case 0:
                        if (this.customData.exchangeFlag = !1, d = {
                            user_token: this.$parent.globalData.userInfo.token,
                            id: this.content.content.id
                        }, f = this.$parent.globalData.userInfo.member_gold, g = c.content.gold, !(f >= g)) {
                            b.next = 32;
                            break;
                        }
                        return b.prev = 5, b.prev = 6, b.next = 9, o.default.POST("exchange", d, this);

                      case 9:
                        a = b.sent, this.rebBalance = this.wheel_user.rmb = this.$parent.globalData.userInfo.member_rmb = 1 * this.$parent.globalData.userInfo.member_rmb + 1 * c.content.rmb, 
                        this.goldNum = this.wheel_user.gold = this.$parent.globalData.userInfo.member_gold = f - g, 
                        this.customData.exchangeFlag = !0, this.content.type = 3, this.content.title = "提示", 
                        console.log("兑换成功"), this.getExchangeList(), this.$apply(), b.next = 22;
                        break;

                      case 20:
                        b.prev = 20, b.t0 = b.catch(6);

                      case 22:
                        b.next = 30;
                        break;

                      case 24:
                        b.prev = 24, b.t1 = b.catch(5), this.isShowToast = !1, console.log("单日奖励达到上限"), 
                        u.default.showError("单日奖励达到上限"), this.$apply();

                      case 30:
                        b.next = 35;
                        break;

                      case 32:
                        console.log("豆子不足"), this.content.type = 2, this.content.title = "提示";

                      case 35:
                        this.customData.exchangeFlag;

                      case 36:
                      case "end":
                        return b.stop();
                    }
                }, b, this, [ [ 5, 24 ], [ 6, 20 ] ]);
            }));
            return a;
        }()
    }, {
        key: "getHistoryList",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function b(c) {
                var d, f, g;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return this.historylist = [], d = {
                            user_token: this.$parent.globalData.userInfo.token,
                            type: parseInt(c),
                            page: this.customData.page
                        }, a.next = 4, o.default.GET("historyList", d, this);

                      case 4:
                        for (f = a.sent, console.log("历史记录", f), 15 == f.length ? ++this.customData.page : this.customData.page = -1, 
                        g = 0; g < f.length; g++) f[g].redType = c, this.historylist.push(f[g]);
                        this.isShowHistoryList = !0, this.$apply();

                      case 10:
                      case "end":
                        return a.stop();
                    }
                }, b, this);
            }));
            return a;
        }()
    }, {
        key: "onShareAppMessage",
        value: function(a) {
            return this.shareCard(a);
        }
    } ]), j;
}(i.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(J, "pages/redpacket"));