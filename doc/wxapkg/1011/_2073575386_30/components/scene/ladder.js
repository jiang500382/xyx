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
}), exports.default = void 0;

var g = function() {
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, 
        c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
    };
}(), e = require("./../../npm/wepy/lib/wepy.js"), h = a(e), i = require("./../../service/utils.js"), j = a(i), k = require("./../../service/Request.js"), l = a(k), m = require("./../pop/invite.js"), p = a(m), n = function(a) {
    function h() {
        var b, e, f, g;
        c(this, h);
        for (var i = arguments.length, k = Array(i), a = 0; a < i; a++) k[a] = arguments[a];
        return e = f = d(this, (b = h.__proto__ || Object.getPrototypeOf(h)).call.apply(b, [ this ].concat(k))), 
        f.data = {
            ladderId: 0,
            ladderClass: "",
            slideType: 1,
            ladderIndex: 0,
            isModal: !1,
            modalData: {}
        }, f.$repeat = {}, f.$props = {
            invitePop: {
                "xmlns:wx": "",
                "xmlns:v-bind": "",
                "v-bind:modalData.sync": "modalData"
            }
        }, f.$events = {}, f.components = {
            invitePop: p.default
        }, f.props = {
            list: {
                type: Array,
                default: [],
                twoWay: !0
            },
            config: {
                type: Object,
                default: {},
                twoWay: !0
            }
        }, f.watch = {
            list: function() {
                var a = 0;
                this.list.map(function(b) {
                    return (b.icon = j.default.fullyIcon(b.icon, 2), !b.gift_box) ? void (b.gift_box = 0) : void (a = b.gift_box.indexOf("-"), 
                    b.gift_box = b.gift_box.slice(a + 1));
                });
            }
        }, f.methods = {
            _checkItem: function(a) {
                var b = a.target.dataset;
                console.log(b), 0 < b.status && (this.ladderId = b.id, this.$emit("myLadderChoice", this.ladderId % 1e3 - 1), 
                this.$apply());
            }
        }, f.events = {
            modalRecieve: function() {
                this.isModal = !1, this.$emit("updateInfo");
            },
            upDateCfg: function() {
                this.loadCfg();
            }
        }, g = e, d(f, g);
    }
    return f(h, a), g(h, [ {
        key: "openLadderBox",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function b(c) {
                var d, f, g, h, i;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return console.log(this.$parent), console.log(this.$parent.token), d = null, f = {
                            user_token: this.$parent.token,
                            game_app_id: this.$parent.game_id,
                            ladder_id: c
                        }, a.next = 5, l.default.POST("receive_ladder_gift", f);

                      case 5:
                        d = a.sent, g = d.reward.split(","), h = [], i = 0, g.map(function(a) {
                            switch (i = a.indexOf("-"), parseInt(a.slice(0, i))) {
                              case 1:
                                h.push({
                                    note: "×" + a.slice(i + 1),
                                    text_align: "center",
                                    position: 0
                                });
                                break;

                              case 2:
                                h.push({
                                    note: "×" + a.slice(i + 1) + "元",
                                    text_align: "center",
                                    position: -100
                                });
                            }
                        }), this.modalData = {
                            text: h,
                            imageConfig: {
                                width: 149,
                                size: 200
                            },
                            image: "http://paopao.hi-hai.com/img/xcx/gameHall/activity/bubble_icon.png",
                            title: "段位礼包",
                            intro: "恭喜您，达到『" + this.list[c % 1e3 - 1].name + "』段位并获得该段位的专属礼包:",
                            introAlign: "initial"
                        }, this.isModal = !0, this.$apply();

                      case 12:
                      case "end":
                        return a.stop();
                    }
                }, b, this);
            }));
            return a;
        }()
    }, {
        key: "loadCfg",
        value: function() {
            var a = this.config;
            console.log("内部ladder", a);
            var b = a.ladderInfo.ladder_id;
            console.log(b), a.ladderInfo.is_reward && (console.log("可领取段位礼包"), this.openLadderBox(b)), 
            this.ladderIndex = b % 1e3 - 1, a.status ? (console.log("新版天梯"), b % 1e3 <= parseInt(a.status) ? this.list.map(function(a) {
                a.class = 0, b == a.id && (a.class = 1);
            }) : this.list.map(function(c, d) {
                return c.class = 0, d < parseInt(a.status) ? void (c.class = -1) : b >= c.id ? void (c.class = 1) : void 0;
            })) : (console.log("旧版天梯"), this.list.map(function(a) {
                a.class = 0, 0 == Math.abs(a.id - b) && (a.class = 2);
            })), this.$apply();
        }
    } ]), h;
}(h.default.component);

exports.default = n;