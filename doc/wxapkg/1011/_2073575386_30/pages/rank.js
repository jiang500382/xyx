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
}(), e = require("./../npm/wepy/lib/wepy.js"), h = a(e), i = require("./../mixins/share.js"), j = a(i), k = require("./../service/Request.js"), l = a(k), m = require("./../service/utils.js"), o = a(m), n = require("./../service/Toast.js"), p = a(n), q = require("./../components/header.js"), u = a(q), r = require("./../components/rankinglist/myrank.js"), v = a(r), s = require("./../components/rankinglist/tabcut.js"), w = a(s), t = require("./../components/rankinglist/topthree.js"), x = a(t), y = require("./../components/rankinglist/rankitem.js"), z = a(y), A = require("./../components/loading.js"), B = a(A), C = function(a) {
    function h() {
        var b, e, f, g;
        c(this, h);
        for (var i = arguments.length, a = Array(i), k = 0; k < i; k++) a[k] = arguments[k];
        return e = f = d(this, (b = h.__proto__ || Object.getPrototypeOf(h)).call.apply(b, [ this ].concat(a))), 
        f.mixins = [ j.default ], f.$repeat = {
            allRankList: {
                com: "rankitem",
                props: "item"
            }
        }, f.$props = {
            rankitem: {
                "v-bind:item.once": {
                    value: "item",
                    type: "item",
                    for: "allRankList",
                    item: "item",
                    index: "index",
                    key: "{{index}}"
                }
            },
            header: {
                title: "排行榜",
                method: "rank"
            },
            myrank: {
                "xmlns:v-bind": "",
                "v-bind:user.sync": "allUser"
            },
            tabcut: {
                "v-bind:selected.sync": "selected"
            },
            topthree: {
                "v-bind:rankThree.sync": "rankThree"
            },
            loading: {
                "xmlns:wx": ""
            }
        }, f.$events = {}, f.components = {
            header: u.default,
            myrank: v.default,
            tabcut: w.default,
            topthree: x.default,
            rankitem: z.default,
            loading: B.default
        }, f.data = {
            selected: !0,
            bounslist: [],
            winroundlist: [],
            allRankList: [],
            user: {},
            userWin: {},
            allUser: {},
            bounsListThree: [],
            winroundListThree: [],
            rankThree: [],
            rankCfg: [],
            isLoading: !1
        }, f.events = {
            selected: function(a, b) {
                this.$broadcast("selected1", a, b), console.log(a, b), a == this.rankCfg.type && b == this.rankCfg.time || this.getRank(a ? 3 : 4, b);
            }
        }, g = e, d(f, g);
    }
    return f(h, a), g(h, [ {
        key: "onLoad",
        value: function() {
            var a = b(regeneratorRuntime.mark(function a() {
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        this.getRank(3, "week");

                      case 1:
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
        key: "ranktoggle",
        value: function(a) {
            a ? (this.allRankList = this.bounslist, this.allUser = this.user, this.rankThree = this.bounsListThree, 
            console.log(this.allUser)) : (this.allRankList = this.winroundlist, this.allUser = this.userWin, 
            this.rankThree = this.winroundListThree);
        }
    }, {
        key: "getRank",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function a(b, c) {
                var d, f;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return c = c ? "week" : "", d = null, f = {
                            type: b,
                            time: c,
                            user_token: wx.getStorageSync("token")
                        }, a.next = 4, l.default.GET("hallLeaderboard", f, this);

                      case 4:
                        d = a.sent, this.rankCfg.type = 3 == b, this.rankCfg.time = c, this.bounsListThree = d.total_list.slice(0, 3), 
                        this.bounslist = d.total_list.slice(3, d.total_list.length), this.user = {
                            icon: d.avstar,
                            name: o.default.formatName(d.nickname),
                            rank: d.rank,
                            score: d.rank_score
                        }, d.total_list.forEach(function(a) {
                            a.nickname && (a.nickname = o.default.formatName(a.nickname));
                        }), this.ranktoggle(!0), this.$apply();

                      case 13:
                      case "end":
                        return a.stop();
                    }
                }, a, this);
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

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(C, "pages/rank"));