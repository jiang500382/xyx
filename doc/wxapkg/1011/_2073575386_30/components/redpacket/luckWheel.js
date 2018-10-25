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
}(), e = require("./../../npm/wepy/lib/wepy.js"), h = a(e), i = require("./../../service/Request.js"), j = a(i), k = require("./../pop/popup.js"), l = a(k), m = function(a) {
    function h() {
        var b, e, f, g;
        c(this, h);
        for (var j = arguments.length, a = Array(j), i = 0; i < j; i++) a[i] = arguments[i];
        return e = f = d(this, (b = h.__proto__ || Object.getPrototypeOf(h)).call.apply(b, [ this ].concat(a))), 
        f.$repeat = {}, f.$props = {
            popUp: {
                "xmlns:wx": "",
                "xmlns:v-bind": "",
                "v-bind:modalData.sync": "modalData"
            }
        }, f.$events = {}, f.components = {
            popUp: l.default
        }, f.data = {
            angle: 0,
            style: "",
            statud: 0,
            modalData: {
                title: "消耗提醒",
                text: [],
                Checkbox: {
                    disp: !0,
                    status: !0,
                    key: "luckWheel",
                    note: "下次不再提醒"
                }
            },
            modalArr: [ {
                title: "消耗提醒",
                text: [],
                isFunc: !0,
                type: 1,
                Checkbox: {
                    disp: !0,
                    status: !0,
                    key: "luckWheel",
                    note: "下次不再提醒"
                }
            }, {
                title: "消耗提醒",
                text: [ {
                    note: "没有足够的豆子换取抽奖券",
                    text_align: "center"
                } ],
                type: 2,
                isFunc: !1,
                Checkbox: {
                    disp: !1,
                    status: !1,
                    key: "luckWheel",
                    note: "下次不再提醒"
                }
            } ],
            isModal: !1,
            rewardToggle: !1,
            isButtonTap: !0,
            wheelArr: {
                1: {
                    title: "泡豆",
                    text: "个",
                    image: "http://paopao.hi-hai.com/img/xcx/Hall/redpacket/bean.png"
                },
                2: {
                    title: "红包",
                    text: "元",
                    image: "http://paopao.hi-hai.com/img/xcx/Hall/redpacket/hb.png"
                },
                3: {
                    title: "谢谢惠顾",
                    text: "谢谢参与",
                    image: "http://paopao.hi-hai.com/img/xcx/Hall/redpacket/emojih.png"
                },
                4: {
                    title: "iphone X",
                    text: "iphone X",
                    image: "http://paopao.hi-hai.com/img/xcx/Hall/redpacket/mobile.png"
                }
            },
            rewardModal: {},
            user: {}
        }, f.customData = {
            isButtonTap: !0,
            isTips: ""
        }, f.props = {
            wheelCost: Number,
            token: String,
            wheelData: {
                default: [],
                twoWay: !0
            },
            user: {
                default: [],
                twoWay: !0
            },
            status: {
                type: Boolean,
                default: !1
            }
        }, f.computed = {
            status: function() {
                console.log(this.status), this.statud = this.status ? 0 : 1;
            }
        }, f.events = {
            goToPlayGame: function() {},
            modalRecieve: function() {
                console.log("下次是否提醒", this.modalData.Checkbox.status), this.isModal = !1, this.modalData.isFunc ? (this.modalData.Checkbox.status && (wx.setStorageSync("isModal", "skip"), 
                this.customData.isTips = "skip"), this.wheelStart()) : this.isButtonTap = !0;
            }
        }, f.methods = {
            _getRecordList: function() {
                this.$emit("getRecordList", 8);
            },
            _openAward: function() {
                var a = this;
                if (a.isButtonTap) {
                    if (a.isButtonTap = !1, !a.customData.isTips) return a.modalData = a.modalArr[0], 
                    a.modalData.text = [ {
                        note: "你将消耗价值" + a.wheelCost + "豆子的抽奖券进行抽奖",
                        text_align: "initial"
                    } ], void (a.isModal = !0);
                    a.wheelStart();
                }
            },
            _hiddenReward: function() {
                this.rewardToggle = !1;
            }
        }, g = e, d(f, g);
    }
    return f(h, a), g(h, [ {
        key: "onLoad",
        value: function() {
            this.customData.isTips = wx.getStorageSync("isModal");
        }
    }, {
        key: "wheelStart",
        value: function() {
            var a = b(regeneratorRuntime.mark(function b() {
                var c, d, f, g, h;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        console.log("剩余豆子", this.user.gold), !this.user.gold || this.user.gold < this.wheelCost ? (this.modalData = this.modalArr[1], 
                        this.isModal = !0) : (c = this, d = 0, f = {}, c.angle += 1800, g = {
                            user_token: c.token,
                            activityId: 3,
                            type: 0
                        }, h = c.openWheelAward(g), h.then(function(a) {
                            f = a, d = 360 - a.angle, c.angle += a.angle, c.style = "transform:rotate(" + c.angle + "deg)", 
                            c.$apply();
                        }), setTimeout(function() {
                            c.isButtonTap = !0, c.angle += d, c.ResPop(f), c.$apply();
                        }, 5e3));

                      case 2:
                      case "end":
                        return a.stop();
                    }
                }, b, this);
            }));
            return function() {
                return a.apply(this, arguments);
            };
        }()
    }, {
        key: "openWheelAward",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function a(b) {
                var c, d;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return c = {}, a.next = 3, j.default.POST("activityShareReward", b, 2);

                      case 3:
                        return d = a.sent, this.user.gold -= this.wheelCost, this.$emit("updateUser", "gold", this.user.gold), 
                        d = d.result.split("-"), c.num = parseFloat(d[0]), c.type = parseInt(d[1]), c.angle = parseInt(d[2]), 
                        a.abrupt("return", c);

                      case 11:
                      case "end":
                        return a.stop();
                    }
                }, a, this);
            }));
            return a;
        }()
    }, {
        key: "ResPop",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function a(b) {
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        1 == b.type ? (this.user.gold += b.num, this.$emit("updateUser", "gold", this.user.gold)) : 2 == b.type && (this.user.rmb = 1 * this.user.rmb + 1 * b.num, 
                        this.$emit("updateUser", "rmb", this.user.rmb)), this.rewardModal = {
                            type: 3 == b.type ? 0 : 1,
                            img: this.wheelArr[b.type].image,
                            note: (0 < b.num ? b.num : "") + this.wheelArr[b.type].text
                        }, this.rewardToggle = !0;

                      case 3:
                      case "end":
                        return a.stop();
                    }
                }, a, this);
            }));
            return a;
        }()
    } ]), h;
}(h.default.component);

exports.default = m;