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
}(), e = require("./../npm/wepy/lib/wepy.js"), h = a(e), i = require("./../service/Request.js"), j = a(i), k = require("./../mixins/share.js"), l = a(k), m = require("./../components/header.js"), p = a(m), n = require("./../components/loading.js"), q = a(n), o = function(a) {
    function h() {
        var b, e, f, g;
        c(this, h);
        for (var a = arguments.length, j = Array(a), i = 0; i < a; i++) j[i] = arguments[i];
        return e = f = d(this, (b = h.__proto__ || Object.getPrototypeOf(h)).call.apply(b, [ this ].concat(j))), 
        f.mixins = [ l.default ], f.$repeat = {}, f.$props = {
            header: {
                title: "个人",
                method: "information"
            },
            loading: {
                "xmlns:wx": ""
            }
        }, f.$events = {}, f.components = {
            header: p.default,
            loading: q.default
        }, f.data = {
            userInfo: {},
            hallInfo: {}
        }, g = e, d(f, g);
    }
    return f(h, a), g(h, [ {
        key: "onLoad",
        value: function() {
            var a = b(regeneratorRuntime.mark(function a() {
                var b;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return this.userInfo = this.$parent.globalData.userInfo, b = {
                            user_token: wx.getStorageSync("token")
                        }, a.next = 4, j.default.GET("getHallUserInfo", b, this);

                      case 4:
                        this.hallInfo = a.sent, this.$apply();

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
        key: "bindDateChange",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function b(c) {
                var d, f, g, a, h;
                return regeneratorRuntime.wrap(function(b) {
                    for (;;) switch (b.prev = b.next) {
                      case 0:
                        return console.log(c.detail.value), d = this, f = new Date(), f = f.getTime(), g = new Date(c.detail.value).getTime(), 
                        a = Math.floor((f - g) / 31536e6), h = {
                            user_token: this.$parent.globalData.userInfo.token,
                            birth: c.detail.value
                        }, b.next = 5, j.default.POST("updateHallUserAge", h, this);

                      case 5:
                        d.hallInfo.age = a, this.$apply();

                      case 7:
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

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(o, "pages/information"));