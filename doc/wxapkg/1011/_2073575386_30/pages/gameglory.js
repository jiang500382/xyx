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
}(), e = require("./../npm/wepy/lib/wepy.js"), h = a(e), i = require("./../service/Request.js"), j = a(i), k = require("./../service/utils.js"), l = a(k), m = require("./../service/Toast.js"), n = a(m), o = require("./../components/header.js"), p = a(o), q = require("./../config.js"), r = a(q), s = require("./../components/gameglory/glorylist.js"), v = a(s), t = require("./../components/loading.js"), w = a(t), u = function(a) {
    function h() {
        var f, e, g, k;
        c(this, h);
        for (var l = arguments.length, i = Array(l), a = 0; a < l; a++) i[a] = arguments[a];
        return e = g = d(this, (f = h.__proto__ || Object.getPrototypeOf(h)).call.apply(f, [ this ].concat(i))), 
        g.$repeat = {
            gameList: {
                com: "glorylist",
                props: "item"
            }
        }, g.$props = {
            glorylist: {
                "xmlns:v-bind": {
                    value: "",
                    for: "gameList",
                    item: "item",
                    index: "index",
                    key: "key"
                },
                "v-bind:item.once": {
                    value: "item",
                    type: "item",
                    for: "gameList",
                    item: "item",
                    index: "index",
                    key: "key"
                },
                "v-bind:index.once": {
                    value: "index",
                    type: "index",
                    for: "gameList",
                    item: "item",
                    index: "index",
                    key: "key"
                }
            },
            header: {
                title: "游戏荣耀",
                method: "information"
            },
            loading: {}
        }, g.$events = {}, g.components = {
            glorylist: v.default,
            header: p.default,
            loading: w.default
        }, g.data = {
            gameList: [],
            token: "",
            isLoading: !1
        }, g.methods = {
            shareImg: function() {
                var a = b(regeneratorRuntime.mark(function a() {
                    var b, c;
                    return regeneratorRuntime.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return b = {
                                user_token: wx.getStorageSync("token")
                            }, a.next = 3, j.default.GET("getImageHallUserRecord", b, this);

                          case 3:
                            c = a.sent, wx.previewImage({
                                urls: [ c ]
                            }), this.$apply();

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
        }, k = e, d(g, k);
    }
    return f(h, a), g(h, [ {
        key: "onLoad",
        value: function() {
            this.getRecord();
        }
    }, {
        key: "getRecord",
        value: function() {
            var a = b(regeneratorRuntime.mark(function a() {
                var b;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return b = {
                            user_token: wx.getStorageSync("token")
                        }, a.next = 3, j.default.GET("getHallUserRecord", b, this);

                      case 3:
                        this.gameList = a.sent, this.$apply();

                      case 5:
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
        key: "onShareAppMessage",
        value: function(a) {
            return this.shareCard(a);
        }
    } ]), h;
}(h.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(u, "pages/gameglory"));