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
}(), e = require("./../../npm/wepy/lib/wepy.js"), h = a(e), i = require("./../../mixins/mtaAnalysis.js"), j = a(i), k = require("./../../service/utils.js"), l = a(k), m = function(a) {
    function h() {
        var b, e, f, g;
        c(this, h);
        for (var i = arguments.length, a = Array(i), k = 0; k < i; k++) a[k] = arguments[k];
        return e = f = d(this, (b = h.__proto__ || Object.getPrototypeOf(h)).call.apply(b, [ this ].concat(a))), 
        f.data = {}, f.props = {
            gameList: {
                type: Object,
                default: {},
                twoWay: !0
            },
            token: {
                type: String,
                default: 0,
                twoWay: !0
            }
        }, f.methods = {
            _nvg: function(a) {
                var b = this.$parent.$parent.globalData.isReview, c = a.currentTarget.dataset.item;
                wx.reportAnalytics("game_click", {
                    game_id: c.id,
                    app_id: c.appId
                }), c.is_online ? b ? wx.previewImage({
                    urls: [ l.default.fullyIcon("img/xcx/gameHall/index/intro_" + c.id + ".png", !0) ]
                }) : c.gameOwner ? wx.navigateTo({
                    url: "scene?id=" + c.id + "&appId=" + c.appId + "&obj=" + JSON.stringify(c.match_info)
                }) : (l.default.navigateToMiniProgram({
                    appId: c.appId
                }), j.default.Event.stat("game" + c.id, {})) : this.orderGame(c.id);
            }
        }, g = e, d(f, g);
    }
    return f(h, a), g(h, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "orderGame",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function a(b) {
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        this.$emit("showSubscribe", b);

                      case 1:
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