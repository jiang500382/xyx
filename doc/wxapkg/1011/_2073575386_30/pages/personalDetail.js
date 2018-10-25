function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

function b(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

function c(a, b) {
    if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return b && ("object" == typeof b || "function" == typeof b) ? b : a;
}

function d(a, b) {
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

var f = function() {
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, 
        c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
    };
}(), e = require("./../npm/wepy/lib/wepy.js"), g = a(e), h = require("./../mixins/mtaAnalysis.js"), i = a(h), j = require("./../mixins/share.js"), k = a(j), l = require("./../components/header.js"), m = a(l), n = require("./../components/personDetail/prosonInfoList.js"), p = a(n), o = require("./../components/card/recharge.js"), q = a(o), r = require("./../components/loading.js"), u = a(r), s = function(a) {
    function g() {
        var d, e, f, h;
        b(this, g);
        for (var i = arguments.length, j = Array(i), k = 0; k < i; k++) j[k] = arguments[k];
        return e = f = c(this, (d = g.__proto__ || Object.getPrototypeOf(g)).call.apply(d, [ this ].concat(j))), 
        f.data = {
            isAndroid: !1,
            isRecharge: !1,
            info: {},
            rmb: 0,
            gold: 0,
            isLoading: !1,
            invete: [ {
                icon: "../images/index/invite.gif",
                bigicon: "bigicon",
                text: "邀请红包",
                url: "/pages/invited",
                class: "tabIvt"
            } ],
            benefitListe: [ {
                icon: "https://res.xingqiu123.com/image/userInfo/pnggift.png",
                text: "关注有礼",
                type: "contact",
                tip: "回复2领礼包",
                class: "tabFlw"
            }, {
                icon: "https://res.xingqiu123.com/image/userInfo/pngrecharge.png",
                text: "充值",
                type: "contact",
                tip: "回复1充豆子",
                class: "tabPay"
            } ],
            benefitListw: [ {
                icon: "https://res.xingqiu123.com/image/userInfo/pnggift.png",
                text: "关注有礼",
                type: "contact",
                tip: "回复2领礼包",
                class: "tabFlw"
            } ],
            playList: [ {
                icon: "https://res.xingqiu123.com/image/userInfo/pnghonor.png",
                text: "荣耀",
                url: "/pages/gameglory",
                class: "tabHon"
            }, {
                icon: "https://res.xingqiu123.com/image/userInfo/pngstrategy.png",
                text: "攻略",
                url: "/pages/strategy",
                class: "tabstg"
            }, {
                icon: "https://res.xingqiu123.com/image/userInfo/pnghistory.png",
                text: "对战记录",
                url: "/pages/playRecord",
                class: "tabRcd"
            } ]
        }, f.$repeat = {}, f.$props = {
            header: {
                title: "个人中心",
                method: "info"
            },
            benefitlist: {
                "xmlns:wx": "",
                "v-bind:list.once": "benefitListe"
            },
            benefitlist1: {
                "v-bind:list.once": "benefitListw"
            },
            playlist: {
                "v-bind:list.once": "playList"
            },
            invite: {
                "xmlns:v-bind": "",
                "v-bind:list.once": "invete"
            },
            recharge: {},
            loading: {}
        }, f.$events = {}, f.components = {
            header: m.default,
            benefitlist: p.default,
            benefitlist1: p.default,
            playlist: p.default,
            invite: p.default,
            recharge: q.default,
            loading: u.default
        }, f.events = {
            closeRechargeModel: function() {
                this.isRecharge = !1, this.$apply();
            }
        }, f.methods = {
            recharge: function() {
                this.isRecharge = !0, this.$apply();
            },
            gotoWithDraw: function() {
                wx.navigateTo({
                    url: "./redpacket"
                });
            }
        }, h = e, c(f, h);
    }
    return d(g, a), f(g, [ {
        key: "onLoad",
        value: function() {
            this.isAndroid = -1 != wx.getSystemInfoSync().system.indexOf("Android"), this.$apply();
        }
    }, {
        key: "onShow",
        value: function() {
            console.log(this.$parent.globalData.userInfo), this.$parent.globalData.userInfo ? (console.log(this.$parent), 
            this.$parent.update_chips(), this.isRecharge = !1, this.info = this.$parent.globalData.userInfo, 
            this.gold = this.info.member_gold, this.rmb = (+this.info.member_rmb).toFixed(2), 
            this.isLoading = !1) : this.isLoading = !0, this.$apply();
        }
    } ]), g;
}(g.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(s, "pages/personalDetail"));