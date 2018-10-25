function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

function b(a) {
    return function() {
        var b = a.apply(this, arguments);
        return new Promise(function(c, d) {
            function a(e, f) {
                try {
                    var g = b[e](f), h = g.value;
                } catch (a) {
                    return void d(a);
                }
                return g.done ? void c(h) : Promise.resolve(h).then(function(b) {
                    a("next", b);
                }, function(b) {
                    a("throw", b);
                });
            }
            return a("next");
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
        for (var d, f = 0; f < c.length; f++) d = c[f], d.enumerable = d.enumerable || !1, 
        d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(b, d.key, d);
    }
    return function(c, d, a) {
        return d && b(c.prototype, d), a && b(c, a), c;
    };
}(), e = require("./../npm/wepy/lib/wepy.js"), h = a(e), i = require("./../mixins/share.js"), j = a(i), k = require("./../service/Request.js"), l = a(k), m = require("./../service/utils.js"), n = a(m), o = require("./../mixins/mtaAnalysis.js"), p = a(o), q = require("./../components/header.js"), u = a(q), r = require("./../components/scene/secen.js"), v = a(r), s = require("./../components/scene/pass.js"), w = a(s), t = require("./../components/card/recharge.js"), x = a(t), y = require("./../components/card/playingGame.js"), z = a(y), A = require("./../components/scene/ladder.js"), B = a(A), C = require("./../components/loading.js"), D = a(C), E = function(a) {
    function h() {
        var f, e, a, g;
        c(this, h);
        for (var i = arguments.length, k = Array(i), m = 0; m < i; m++) k[m] = arguments[m];
        return e = a = d(this, (f = h.__proto__ || Object.getPrototypeOf(h)).call.apply(f, [ this ].concat(k))), 
        a.mixins = [ j.default ], a.data = {
            isReview: 0,
            token: "",
            ordinaryList: null,
            game_id: 0,
            game_config: null,
            isQuick: !1,
            isPass: !1,
            isShare: !1,
            isLadder: !1,
            promotionCost: null,
            myBeans: 0,
            sceneN: {},
            ladderList: null,
            ladderConfig: {},
            gate: {},
            onlinePerson: null,
            currentScene: "新手场",
            title: "",
            appId: null,
            eligible: !1,
            passMatchCost: 0,
            tip: 0,
            canPlayp: !1,
            friendParams: {
                to: 4001,
                token: ""
            },
            multiParams: {
                to: 2003,
                token: ""
            },
            ordinaryParams: {
                to: 1002,
                p: {},
                token: ""
            },
            passParams: {
                to: 1002,
                token: ""
            },
            chargeParams: {
                to: 5001,
                token: ""
            },
            isTooMuch: !1,
            isPlayLower: !1,
            isNeedRecharge: !1,
            isPlaying: !1,
            myBeansTop: 138,
            isLoading: !1
        }, a.$repeat = {}, a.$props = {
            header: {
                method: "scene",
                "xmlns:v-bind": "",
                "v-bind:title.sync": "title",
                fontColor: "littleTop"
            },
            scene: {
                "v-bind:ordinaryList.sync": "ordinaryList",
                "v-bind:onlinePerson.sync": "onlinePerson",
                "v-bind:gameId.sync": "game_id"
            },
            pass: {
                "v-bind:gate.sync": "gate"
            },
            ladder: {
                "v-bind:list.sync": "ladderList",
                "v-bind:config.sync": "ladderConfig"
            },
            recharge1: {
                type: "2",
                "v-bind:isPlayLower.sync": "isPlayLower"
            },
            recharge2: {
                type: "3"
            },
            playinggame: {},
            loading: {}
        }, a.$events = {}, a.components = {
            header: u.default,
            scene: v.default,
            pass: w.default,
            ladder: B.default,
            recharge1: x.default,
            recharge2: x.default,
            playinggame: z.default,
            loading: D.default
        }, a.events = {
            goStart: function() {
                var a = b(regeneratorRuntime.mark(function b() {
                    var c, d, a;
                    return regeneratorRuntime.wrap(function(b) {
                        for (;;) switch (b.prev = b.next) {
                          case 0:
                            return c = {
                                user_token: this.$parent.globalData.userInfo.token,
                                game_id: this.game_id,
                                gate_type: 1
                            }, b.next = 3, l.default.GET("get_morra_again", c, this);

                          case 3:
                            if (d = b.sent, console.log("morraList", d), "running" != d.gate_status) {
                                b.next = 9;
                                break;
                            }
                            return this.isPlaying = !0, this.$apply(), b.abrupt("return");

                          case 9:
                            if (!(this.myBeans < this.passMatchCost)) {
                                b.next = 14;
                                break;
                            }
                            return this.isNeedRecharge = !0, this.isPlayLower = !0, this.$apply(), b.abrupt("return");

                          case 14:
                            a = {
                                appId: this.appId,
                                extraData: this.passParams
                            }, n.default.navigateToMiniProgram(a, "isAll"), p.default.Event.stat("game" + this.game_id, {});

                          case 17:
                          case "end":
                            return b.stop();
                        }
                    }, b, this);
                }));
                return function() {
                    return a.apply(this, arguments);
                };
            }(),
            judgeJump: function(b) {
                if (console.log(b), -1 != b.limit.indexOf("-")) {
                    var c = b.limit.split("-");
                    if (this.myBeans < c[0]) return this.isPlayLower = !(this.myBeans > this.ordinaryList[0].limit.split("-")[0]), 
                    void (this.isNeedRecharge = !0);
                    if (this.myBeans > c[1]) return void (this.isTooMuch = !0);
                } else if (this.myBeans < b.limit) return this.isPlayLower = !(this.myBeans > this.ordinaryList[0].limit.split("-")[0]), 
                void (this.isNeedRecharge = !0);
                this.ordinaryParams.p = {
                    matchTypeId: b.id
                };
                var d = {
                    appId: this.appId,
                    extraData: this.ordinaryParams
                };
                console.log(d), n.default.navigateToMiniProgram(d, "isAll"), p.default.Event.stat("game" + this.game_id, {});
            },
            closePlaying: function() {
                this.isPlaying = !1, this.$apply();
            },
            closeRechargeModel: function(a) {
                2 == a ? this.isNeedRecharge = !1 : 3 == a && (this.isTooMuch = !1), this.$apply();
            },
            goToSenior: function() {
                var b = this;
                this.ordinaryList.forEach(function(c, d) {
                    if (-1 != b.ordinaryList[d].limit.indexOf("-")) {
                        var a = b.ordinaryList[d].limit.split("-");
                        a[0] <= b.myBeans && a[1] >= b.myBeans && (b.ordinaryParams.p = {
                            matchTypeId: b.ordinaryList[d].id
                        });
                    } else b.ordinaryList[d].limit < b.myBeans && (b.ordinaryParams.p = {
                        matchTypeId: b.ordinaryList[d].id
                    });
                });
                var a = {
                    appId: this.appId,
                    extraData: this.ordinaryParams
                };
                console.log(a), n.default.navigateToMiniProgram(a, "isAll"), p.default.Event.stat("game" + this.game_id, {}), 
                this.isTooMuch = !1, this.$apply();
            },
            goToGameCharge: function() {
                var a = {
                    appId: this.appId,
                    extraData: this.chargeParams
                };
                n.default.navigateToMiniProgram(a, "isAll"), p.default.Event.stat("game" + this.game_id, {});
            },
            myLadderChoice: function(b) {
                console.log(b);
                var c = this.ladderList[b];
                if (console.log(c), this.myBeans < c.match_cost + c.bunko_cost) return this.isNeedRecharge = !0, 
                void (this.isPlayLower = !0);
                this.ordinaryParams.p = {
                    joinLadderId: c.id
                };
                var d = {
                    appId: this.appId,
                    extraData: this.ordinaryParams
                };
                n.default.navigateToMiniProgram(d, "isAll");
            },
            updateInfo: function() {
                var a = b(regeneratorRuntime.mark(function b() {
                    var c, d;
                    return regeneratorRuntime.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return c = {
                                user_token: this.$parent.globalData.userInfo.token,
                                game_id: this.game_id
                            }, a.next = 3, l.default.GET("update_chips", c, this);

                          case 3:
                            d = a.sent, this.myBeans = this.$parent.globalData.userInfo.member_gold = d.pao_gold, 
                            this.$apply();

                          case 6:
                          case "end":
                            return a.stop();
                        }
                    }, b, this);
                }));
                return function() {
                    return a.apply(this, arguments);
                };
            }()
        }, a.methods = {
            jumpToOrider: function(a) {
                console.log(a);
                var b = {};
                "friend" == a ? b = {
                    appID: this.appId,
                    extraData: this.friendParams
                } : "multi" == a ? b = {
                    appID: this.appId,
                    extraData: this.multiParams
                } : "rondom" == a && (b = {
                    appID: this.appId,
                    extraData: this.ordinaryParams
                }), console.log(b), n.default.navigateToMiniProgram(b), p.default.Event.stat("game" + this.game_id, {});
            },
            tip: function() {
                this.isPlayLower = !0, this.isNeedRecharge = !0, this.$apply();
            }
        }, g = e, d(a, g);
    }
    return f(h, a), g(h, [ {
        key: "onLoad",
        value: function(a) {
            812 <= wx.getSystemInfoSync().screenHeight && (this.myBeansTop = 188), console.log(a), 
            this.game_id = parseInt(a.id), this.game_config = JSON.parse(a.obj), this.appId = a.appId, 
            this.isReview = this.$parent.globalData.isReview, this.friendParams.token = this.$parent.globalData.userInfo.token, 
            this.multiParams.token = this.$parent.globalData.userInfo.token, this.passParams.token = this.$parent.globalData.userInfo.token, 
            this.ordinaryParams.token = this.$parent.globalData.userInfo.token, this.chargeParams.token = this.$parent.globalData.userInfo.token, 
            this.$apply();
        }
    }, {
        key: "onShow",
        value: function() {
            this.isNeedRecharge = !1, this.token = this.$parent.globalData.userInfo.token, this.game_config && this.getConfig(), 
            this.$apply();
        }
    }, {
        key: "getConfig",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function b() {
                var c, a, d, f = this;
                return regeneratorRuntime.wrap(function(b) {
                    for (;;) switch (b.prev = b.next) {
                      case 0:
                        return c = {
                            user_token: this.$parent.globalData.userInfo.token,
                            game_id: this.game_id
                        }, b.next = 3, l.default.GET("update_chips", c, this);

                      case 3:
                        return a = b.sent, this.myBeans = this.$parent.globalData.userInfo.member_gold = a.pao_gold, 
                        b.next = 7, l.default.GET("config_list_new", c, this);

                      case 7:
                        d = b.sent, console.log(d, a), this.game_config.ladder && this.ladderConfigDetail(d), 
                        this.game_config.ordinary && this.ordinaryConfig(d), this.game_config.pass && this.passConfig(d), 
                        this.game_config.promotion && d.game.promotion_list.forEach(function(a) {
                            5 == a.key && (f.promotionCost = a.match_cost);
                        }), this.canPlayp = this.myBeans >= this.promotionCost, console.log("多人赛花费豆子数", this.promotionCost), 
                        this.isShare = !!this.game_config.share, this.$apply();

                      case 17:
                      case "end":
                        return b.stop();
                    }
                }, b, this);
            }));
            return a;
        }()
    }, {
        key: "ladderConfigDetail",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function b(c) {
                var d, a, f;
                return regeneratorRuntime.wrap(function(b) {
                    for (;;) switch (b.prev = b.next) {
                      case 0:
                        return d = {
                            user_token: this.$parent.globalData.userInfo.token,
                            game_id: this.game_id
                        }, this.isQuick = !0, this.title = "选择段位", a = {}, this.ladderList = c.game.ladder_config, 
                        a.status = c.game.new_ladder || 0, b.next = 8, l.default.GET("get_ladder_info", d, this);

                      case 8:
                        f = b.sent, console.log("ladder_info", f), a.ladderInfo = f, this.ladderConfig = a, 
                        this.ordinaryParams = {
                            to: 3002,
                            p: {
                                joinLadderId: f.quick_limit
                            },
                            token: this.$parent.globalData.userInfo.token
                        }, this.currentScene = this.ladderList[f.quick_limit % 1e3 - 1].name, this.eligible = this.ladderList[f.quick_limit % 1e3 - 1].match_cost + this.ladderList[f.quick_limit % 1e3 - 1].bunko_cost <= this.myBeans, 
                        this.isLadder = !0, this.$apply(), this.$broadcast("upDateCfg");

                      case 18:
                      case "end":
                        return b.stop();
                    }
                }, b, this);
            }));
            return a;
        }()
    }, {
        key: "ordinaryConfig",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function b(c) {
                var d, a, f, g = this;
                return regeneratorRuntime.wrap(function(b) {
                    for (;;) switch (b.prev = b.next) {
                      case 0:
                        return d = {
                            user_token: this.$parent.globalData.userInfo.token,
                            game_id: this.game_id
                        }, this.isQuick = !0, this.title = "选择场次", this.ordinaryList = this.game_config.ordinary ? c.game.match_type : null, 
                        b.next = 6, l.default.GET("get_match_type_count", d, this);

                      case 6:
                        a = b.sent, this.onlinePerson = a.list, console.log("随机赛在线人数", a), f = [ "新手场", "初级场", "中级场" ], 
                        this.ordinaryList.forEach(function(b, c) {
                            if (-1 != g.ordinaryList[c].quick_limit.indexOf("-")) {
                                var d = g.ordinaryList[c].quick_limit.split("-");
                                d[0] <= g.myBeans && d[1] >= g.myBeans && (g.ordinaryParams.p = {
                                    matchTypeId: g.ordinaryList[c].id
                                }, g.currentScene = f[c], g.eligible = g.myBeans >= g.ordinaryList[c].cost + g.ordinaryList[c].entry_fee);
                            } else g.ordinaryList[c].quick_limit < g.myBeans && (g.ordinaryParams.p = {
                                matchTypeId: g.ordinaryList[c].id
                            }, g.currentScene = f[c], g.eligible = g.myBeans >= g.ordinaryList[c].cost + g.ordinaryList[c].entry_fee);
                        }), this.$apply();

                      case 12:
                      case "end":
                        return b.stop();
                    }
                }, b, this);
            }));
            return a;
        }()
    }, {
        key: "passConfig",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function b(c) {
                var d, a;
                return regeneratorRuntime.wrap(function(b) {
                    for (;;) switch (b.prev = b.next) {
                      case 0:
                        return this.isQuick = !1, this.isPass = !0, this.gate.isReview = this.isReview, 
                        this.gate.appId = this.appId, d = {
                            user_token: this.$parent.globalData.userInfo.token,
                            game_id: this.game_id
                        }, this.passMatchCost = c.game.jsonconfig.match_cost, b.next = 8, l.default.GET("get_morra_home", d, this);

                      case 8:
                        a = b.sent, this.gate = a, this.$apply(), console.log("泡泡猜拳配置", a);

                      case 12:
                      case "end":
                        return b.stop();
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
    } ]), h;
}(h.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(E, "pages/scene"));