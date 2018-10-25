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
}(), e = require("./../npm/wepy/lib/wepy.js"), h = a(e), i = require("./../service/Request.js"), j = a(i), k = require("./../mixins/share.js"), l = a(k), m = require("./../components/header.js"), o = a(m), n = require("./../components/redpacket/withdrawtishi.js"), p = a(n), q = require("./../components/card/fail.js"), v = a(q), r = function(a) {
    function h() {
        var f, e, g, a;
        c(this, h);
        for (var i = arguments.length, k = Array(i), m = 0; m < i; m++) k[m] = arguments[m];
        return e = g = d(this, (f = h.__proto__ || Object.getPrototypeOf(h)).call.apply(f, [ this ].concat(k))), 
        g.mixins = [ l.default ], g.$repeat = {}, g.$props = {
            withdrawtishi: {
                "xmlns:v-bind": "",
                "v-bind:value.sync": "value"
            },
            header: {
                title: "提现",
                method: "withdraw"
            },
            fail: {}
        }, g.$events = {}, g.components = {
            withdrawtishi: p.default,
            header: o.default,
            fail: v.default
        }, g.data = {
            modalBox: !1,
            member_rmb: 0,
            allbalance: 0,
            canWithDraw: !1,
            withdrawTips: "",
            value: "请输入提现金额",
            iswithDraw: !0,
            isShowWithDrawdepositFail: !1
        }, g.methods = {
            formSubmit: function() {
                function a() {
                    return c.apply(this, arguments);
                }
                var c = b(regeneratorRuntime.mark(function b(c) {
                    var d, f, a;
                    return regeneratorRuntime.wrap(function(b) {
                        for (;;) switch (b.prev = b.next) {
                          case 0:
                            if (d = c.detail.value.money, f = {
                                money: c.detail.value.money,
                                type: 2,
                                game_app_id: 0,
                                user_token: wx.getStorageSync("token")
                            }, "" != d) {
                                b.next = 6;
                                break;
                            }
                            return b.abrupt("return");

                          case 6:
                            if ("请输入提现金额" != d) {
                                b.next = 10;
                                break;
                            }
                            return b.abrupt("return");

                          case 10:
                            if (!(5 > d || 100 < d)) {
                                b.next = 14;
                                break;
                            }
                            return b.abrupt("return");

                          case 14:
                            if (!(d > 1 * this.member_rmb)) {
                                b.next = 16;
                                break;
                            }
                            return b.abrupt("return");

                          case 16:
                            return a = {}, b.prev = 17, b.next = 20, j.default.POST("wx_withdraw", f, 1);

                          case 20:
                            a = b.sent, console.log(1 * a.new_balance), this.$parent.globalData.userInfo.member_rmb = (+a.new_balance).toFixed(2), 
                            this.member_rmb = (+a.new_balance).toFixed(2), console.log("提现成功剩余金额为" + this.member_rmb), 
                            this.modalBox = !0, this.$apply(), b.next = 33;
                            break;

                          case 29:
                            b.prev = 29, b.t0 = b.catch(17), this.isShowWithDrawdepositFail = !0, this.$apply();

                          case 33:
                          case "end":
                            return b.stop();
                        }
                    }, b, this, [ [ 17, 29 ] ]);
                }));
                return a;
            }(),
            allwithdraw: function() {
                this.value = this.member_rmb, this.iswithDraw = !1;
                var a = {
                    detail: {
                        value: this.member_rmb
                    }
                };
                this.handleInputChange(a);
            }
        }, g.events = {
            closefail: function() {
                this.isShowWithDrawdepositFail = !1, this.$apply();
            }
        }, a = e, d(g, a);
    }
    return f(h, a), g(h, [ {
        key: "onLoad",
        value: function() {
            console.log("getCurrentPages()", getCurrentPages());
        }
    }, {
        key: "onShow",
        value: function() {
            this.member_rmb = (+this.$parent.globalData.userInfo.member_rmb).toFixed(2), this.modalBox = !1, 
            this.iswithDraw = !0, this.value = "请输入提现金额", this.$apply();
        }
    }, {
        key: "handleInputChange",
        value: function(b) {
            var c = b.detail.value, d = "", e = !1, a = +c;
            this.data.member_rmb < a ? d = "输入金额超过余额" : 5 > a ? d = "最低提现金额5元" : 100 < a ? d = "单次提现金额不得超过100元" : e = !0, 
            this.allbalance = c, this.canWithDraw = e, this.withdrawTips = d, this.value = b.detail.value;
        }
    }, {
        key: "focusInputEvent",
        value: function(a) {
            a.detail.value, "请输入提现金额" == this.value && (this.iswithDraw = !1, this.value = "");
        }
    }, {
        key: "blurInputEvent",
        value: function() {
            "" == this.value && (this.value = "请输入提现金额", this.iswithDraw = !0);
        }
    }, {
        key: "onShareAppMessage",
        value: function(a) {
            return this.shareCard(a);
        }
    } ]), h;
}(h.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(r, "pages/withdraw"));