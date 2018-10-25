function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

function b(a) {
    return function() {
        var b = a.apply(this, arguments);
        return new Promise(function(a, c) {
            function d(e, f) {
                try {
                    var g = b[e](f), h = g.value;
                } catch (a) {
                    return void c(a);
                }
                return g.done ? void a(h) : Promise.resolve(h).then(function(a) {
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
}(), e = require("./../npm/wepy/lib/wepy.js"), h = a(e), i = require("./../service/Request.js"), j = a(i), k = function(a) {
    function e() {
        return c(this, e), d(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
    }
    return f(e, a), g(e, [ {
        key: "getAdver",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function a(b, c, d) {
                var f, g;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return f = {
                            user_token: this.$parent.globalData.userInfo.token,
                            type: c
                        }, g = [], a.prev = 1, a.next = 4, j.default.GET("getHallRewardUser", f, this);

                      case 4:
                        g = a.sent, console.log("获取奖励记录成功", g), a.next = 11;
                        break;

                      case 8:
                        a.prev = 8, a.t0 = a.catch(1), console.log(a.t0);

                      case 11:
                        this[b] = g, this[b].push({
                            boastType: d
                        }), this.$apply();

                      case 14:
                      case "end":
                        return a.stop();
                    }
                }, a, this, [ [ 1, 8 ] ]);
            }));
            return a;
        }()
    } ]), e;
}(h.default.mixin);

exports.default = k;