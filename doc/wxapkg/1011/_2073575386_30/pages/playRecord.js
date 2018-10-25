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
}(), e = require("./../npm/wepy/lib/wepy.js"), h = a(e), i = require("./../service/Request.js"), j = a(i), k = require("./../service/utils.js"), l = a(k), m = require("./../components/header.js"), p = a(m), n = require("./../components/loading.js"), q = a(n), o = function(a) {
    function h() {
        var b, e, f, g;
        c(this, h);
        for (var j = arguments.length, a = Array(j), i = 0; i < j; i++) a[i] = arguments[i];
        return e = f = d(this, (b = h.__proto__ || Object.getPrototypeOf(h)).call.apply(b, [ this ].concat(a))), 
        f.$repeat = {}, f.$props = {
            header: {
                title: "对战记录",
                method: "record"
            },
            loading: {}
        }, f.$events = {}, f.components = {
            header: p.default,
            loading: q.default
        }, f.data = {
            mTop: 0,
            user: {},
            token: "",
            record: {},
            isLoading: !1
        }, g = e, d(f, g);
    }
    return f(h, a), g(h, [ {
        key: "onLoad",
        value: function() {
            var a = 0;
            812 <= wx.getSystemInfoSync().screenHeight && (a = 1), this.mTop = 18 * a, this.$apply();
        }
    }, {
        key: "onShow",
        value: function() {
            this.$parent.globalData.userInfo && (this.user = this.$parent.globalData.userInfo, 
            this.token = this.$parent.globalData.userInfo.token, this.getList()), this.$apply();
        }
    }, {
        key: "getList",
        value: function() {
            var a = b(regeneratorRuntime.mark(function a() {
                var b, c;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return b = null, c = {
                            user_token: this.$parent.globalData.userInfo.token
                        }, a.next = 3, j.default.GET("gameRecord", c, this);

                      case 3:
                        b = a.sent, b.map(function(a) {
                            a.otherIcon = l.default.fullyIcon(a.otherIcon, 2);
                            var b = new Date(1e3 * a.createDate), c = l.default.dataFormat(b.getMonth() + 1, 1, "0", 2), d = l.default.dataFormat(b.getDate(), 1, "0", 2);
                            a.day = c + "月" + d + "日", console.log(a.day);
                        }), this.record = b, this.$apply();

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
    } ]), h;
}(h.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(o, "pages/playRecord"));