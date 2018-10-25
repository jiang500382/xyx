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
}(), e = require("./../npm/wepy/lib/wepy.js"), h = a(e), i = require("./../service/Request.js"), j = a(i), k = require("./../service/Toast.js"), l = a(k), m = require("./../service/utils.js"), o = a(m), n = require("./../mixins/share.js"), p = a(n), q = require("./../components/header.js"), u = a(q), r = require("./../components/boast.js"), v = a(r), s = require("./../components/pop/popup.js"), w = a(s), t = require("./../components/pop/invite.js"), x = a(t), y = require("./../components/loading.js"), z = a(y), A = function(a) {
    function h() {
        var b, e, f, a;
        c(this, h);
        for (var g = arguments.length, i = Array(g), j = 0; j < g; j++) i[j] = arguments[j];
        return e = f = d(this, (b = h.__proto__ || Object.getPrototypeOf(h)).call.apply(b, [ this ].concat(i))), 
        f.mixins = [ p.default ], f.$repeat = {}, f.$props = {
            header: {
                title: "邀请有奖",
                method: "purple"
            },
            boast: {
                class: "boast",
                "xmlns:v-bind": "",
                "v-bind:broadcast.sync": "broadcast",
                type: "4",
                "v-bind:isSquare.once": "isSquare",
                "v-bind:boastImg.once": "boastImg"
            },
            pop: {
                "xmlns:wx": "",
                "xmlns:v-bind": "",
                "v-bind:modalData.sync": "modalData"
            },
            invitePop: {
                "xmlns:wx": "",
                "xmlns:v-bind": "",
                "v-bind:modalData.sync": "modalData"
            },
            loading: {
                "xmlns:wx": ""
            }
        }, f.$events = {}, f.components = {
            header: u.default,
            boast: v.default,
            pop: w.default,
            invitePop: x.default,
            loading: z.default
        }, f.data = {
            scrollToggle: !1,
            boxData: [],
            shareCount: 0,
            token: "",
            userData: [],
            broadcast: [],
            isSquare: !1,
            boastImg: "http://paopao.hi-hai.com/img/xcx/voice.png?imageMogr2/gravity/South/crop/36x30",
            isModal: !1,
            isInviteModal: !1,
            tipModal: {
                title: "活动规则",
                type: 1,
                text: [ {
                    note: "邀请得奖活动限时开启啦！",
                    text_align: "center"
                }, {
                    note: "成功邀请新小伙伴来泡泡游戏即可开启红包得现金与豆子奖励！",
                    text_align: "center"
                } ],
                Checkbox: {
                    disp: !1
                }
            },
            modalData: {},
            boxModal: [ {
                title: "已获取",
                btnText: "确认",
                status: 0
            }, {
                title: "打开宝箱随机获取",
                btnText: "打开",
                status: 1
            }, {
                title: "提示",
                btnText: "好的",
                status: 0
            }, {
                title: "活动规则",
                btnText: "确认",
                status: 0
            } ],
            isLoading: !1
        }, f.activeConfig = {
            beginTime: "",
            endTime: ""
        }, f.methods = {
            showRule: function() {
                this.modalData = this.tipModal, this.isModal = !0;
            },
            boxPress: function(a) {
                var b = a.currentTarget.dataset, c = "";
                switch (parseInt(b.type)) {
                  case 1:
                    c = {
                        activityId: 1,
                        type: b.id,
                        user_token: this.token
                    }, this.openBox(c);
                    break;

                  case 2:
                    this.modalData = this.boxModal[parseInt(b.type)], this.modalData.type = 1, this.modalData.text = [ {
                        note: b.item,
                        text_align: "center"
                    } ], console.log(this.modalData), this.isModal = !0;
                    break;

                  case 0:
                    c = {
                        type: b.id,
                        user_token: this.token
                    }, this.showAward(c);
                }
                this.$apply();
            },
            share: function() {
                this.share();
            }
        }, f.events = {
            modalRecieve: function() {
                this.isModal = this.isInviteModal = !1;
            }
        }, a = e, d(f, a);
    }
    return f(h, a), g(h, [ {
        key: "onLoad",
        value: function() {
            this.token = this.$parent.globalData.userInfo.token, this.token ? (console.log(1), 
            this.loadData(this.token)) : (console.log("未登录"), wx.navigateTo({
                url: "index"
            }));
        }
    }, {
        key: "onShow",
        value: function() {
            console.log(this.$parent.globalData), this.share();
        }
    }, {
        key: "onShareAppMessage",
        value: function() {
            return {
                title: this.shareTitle,
                path: "/pages/index?share_id=" + this.$parent.globalData.userInfo.id,
                imageUrl: "http://paopao.hi-hai.com/img/xcx/gameHall/activity/share_" + o.default.rand(0, 5) + ".png?new"
            };
        }
    }, {
        key: "loadData",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function a(b) {
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        console.log(b), this.ActivityInfo();

                      case 2:
                      case "end":
                        return a.stop();
                    }
                }, a, this);
            }));
            return a;
        }()
    }, {
        key: "ActivityInfo",
        value: function() {
            var a = b(regeneratorRuntime.mark(function a() {
                var b, c;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return b = null, c = {
                            activityId: 1,
                            user_token: this.token
                        }, a.next = 3, j.default.GET("getActivityInfo", c, this);

                      case 3:
                        b = a.sent, console.log(b), parseInt(b.state) ? (this.getInvited(), this.getScroll(), 
                        console.log(this), this.activeConfig.beginTime = o.default.formatTime(new Date(1e3 * b.date_begin)), 
                        this.activeConfig.endTime = o.default.formatTime(new Date(1e3 * b.date_end)), this.boxData = b.box, 
                        this.shareCount = b.count, this.$apply()) : (l.default.show("活动已结束"), setTimeout(function() {
                            wx.navigateTo({
                                url: "/pages/index"
                            });
                        }, 1e3));

                      case 6:
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
        key: "getInvited",
        value: function() {
            var a = b(regeneratorRuntime.mark(function a() {
                var b, c;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return b = null, c = {
                            user_token: this.token
                        }, a.next = 3, j.default.GET("getActivityInviteUser", c, this);

                      case 3:
                        b = a.sent, this.userData = b, this.$apply(), console.log(this.userData.length);

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
        key: "getScroll",
        value: function() {
            var a = b(regeneratorRuntime.mark(function a() {
                var b, c;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return b = null, c = {
                            activityId: 1,
                            user_token: this.token
                        }, a.next = 3, j.default.GET("getActivityRewardUser", c, this);

                      case 3:
                        b = a.sent, b.map(function(a) {
                            a.type = -1;
                        }), this.broadcast = b, this.$apply();

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
        key: "openBox",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function a(b) {
                var c;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return c = null, a.next = 3, j.default.POST("activityShareReward", b, this);

                      case 3:
                        c = a.sent, this.modalData = this.boxModal[1], this.modalData.text = [ {
                            note: c.gold,
                            text_align: "center",
                            position: 0
                        }, {
                            note: c.rmb + "元",
                            text_align: "center",
                            position: "-100"
                        } ], this.modalData.image = "http://paopao.hi-hai.com/img/xcx/gameHall/activity/bubble_icon.png", 
                        this.modalData.imageConfig = {
                            width: 149,
                            size: 200
                        }, this.isInviteModal = !0, this.updateChip(), this.loadData(this.token), this.$apply();

                      case 12:
                      case "end":
                        return a.stop();
                    }
                }, a, this);
            }));
            return a;
        }()
    }, {
        key: "showAward",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function a(b) {
                var c;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return c = null, a.next = 3, j.default.GET("getActivityBoxDetail", b, this);

                      case 3:
                        c = a.sent, this.modalData = this.boxModal[0], this.modalData.text = [ {
                            note: c.gold,
                            text_align: "center",
                            position: 0
                        }, {
                            note: c.rmb + "元",
                            text_align: "center",
                            position: "-100"
                        } ], this.modalData.image = "http://paopao.hi-hai.com/img/xcx/gameHall/activity/bubble_icon.png", 
                        this.modalData.imageConfig = {
                            width: 149,
                            size: 200
                        }, this.isInviteModal = !0, this.$apply();

                      case 10:
                      case "end":
                        return a.stop();
                    }
                }, a, this);
            }));
            return a;
        }()
    }, {
        key: "updateChip",
        value: function() {
            var a = b(regeneratorRuntime.mark(function a() {
                var b, c;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return b = null, c = {
                            user_token: this.token
                        }, a.next = 3, j.default.GET("update_chips", c, this);

                      case 3:
                        b = a.sent, console.log(b), this.$parent.globalData.userInfo.member_gold = b.pao_gold, 
                        this.$parent.globalData.userInfo.member_rmb = b.rmb, this.$apply(), console.log("1--", this.$parent.globalData.userInfo);

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
        key: "share",
        value: function() {
            var a = b(regeneratorRuntime.mark(function a() {
                var b, c;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return b = null, c = {
                            user_token: this.token,
                            activityId: 1
                        }, a.next = 3, j.default.GET("getActivityShareTitle", c, this);

                      case 3:
                        b = a.sent, this.shareTitle = b.title, this.$apply();

                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a, this);
            }));
            return function() {
                return a.apply(this, arguments);
            };
        }()
    } ]), h;
}(h.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(A, "pages/invited"));