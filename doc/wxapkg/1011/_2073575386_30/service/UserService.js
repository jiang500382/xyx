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

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var d = function() {
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, 
        c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
    };
}(), e = require("./../config.js"), f = a(e), g = require("./Request.js"), h = a(g), i = require("./../npm/wepy/lib/wepy.js"), j = a(i), k = require("./utils.js"), l = a(k), m = require("./Toast.js"), p = a(m), n = function() {
    function a() {
        c(this, a);
    }
    return d(a, null, [ {
        key: "login",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function a(b, c, d, f) {
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        this.launchInfo = b, this.loginSuccessCallback = c, this.loginFailCallback = d, 
                        this._call = f, this.getUserInfoAuthSetting();

                      case 5:
                      case "end":
                        return a.stop();
                    }
                }, a, this);
            }));
            return a;
        }()
    }, {
        key: "prepareLogin",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function a(b) {
                var c, d, e = this;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        if (console.log(b["scope.userInfo"]), !b["scope.userInfo"]) {
                            a.next = 5;
                            break;
                        }
                        this.getUserInfo(), a.next = 21;
                        break;

                      case 5:
                        if (void 0 != b["scope.userInfo"]) {
                            a.next = 19;
                            break;
                        }
                        if (c = wx.getSystemInfoSync(), console.log("微信授权"), !(0 <= l.default.compareVersion(c.SDKVersion, "1.3.0"))) {
                            a.next = 16;
                            break;
                        }
                        return console.log("获取jScode"), a.next = 12, j.default.login();

                      case 12:
                        d = a.sent, this.loginFailCallback(d), a.next = 17;
                        break;

                      case 16:
                        this.getUserInfo();

                      case 17:
                        a.next = 21;
                        break;

                      case 19:
                        console.log("用户拒绝授权"), p.default.showModal("提示", "您需要打开授权才能登录，是否打开授权设置？", "去设置", function() {
                            e.goToSetting();
                        });

                      case 21:
                      case "end":
                        return a.stop();
                    }
                }, a, this);
            }));
            return a;
        }()
    }, {
        key: "getUserInfoAuthSetting",
        value: function() {
            var a = b(regeneratorRuntime.mark(function a() {
                var b;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        if (!this.isLogin) {
                            a.next = 2;
                            break;
                        }
                        return a.abrupt("return");

                      case 2:
                        return a.next = 4, j.default.getSetting();

                      case 4:
                        b = a.sent, this.prepareLogin(b.authSetting);

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
        key: "goToSetting",
        value: function() {
            var a = b(regeneratorRuntime.mark(function a() {
                var b;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return a.next = 2, j.default.openSetting();

                      case 2:
                        b = a.sent, this.prepareLogin(b.authSetting);

                      case 4:
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
        key: "getUserInfo",
        value: function() {
            var a = b(regeneratorRuntime.mark(function b() {
                var c, d, f, g, h, a, k;
                return regeneratorRuntime.wrap(function(b) {
                    for (;;) switch (b.prev = b.next) {
                      case 0:
                        return c = {
                            withCredentials: !0,
                            lang: "zh_CN",
                            timeout: 6e4
                        }, b.next = 3, j.default.login();

                      case 3:
                        if (d = b.sent, f = wx.getStorageSync("tokenFromOthers") ? wx.getStorageSync("tokenFromOthers") : wx.getStorageSync("token"), 
                        g = wx.getStorageSync("isGetUserInfo"), h = new Date().getTime(), !(a = g && 6048e5 > h - g && f)) {
                            b.next = 13;
                            break;
                        }
                        console.log("不获取用户信息"), this.loginWithUserInfo(d, this.loginSuccessCallback), b.next = 19;
                        break;

                      case 13:
                        return console.log("重新获取用户信息"), b.next = 16, j.default.getUserInfo(c);

                      case 16:
                        k = b.sent, wx.setStorageSync("isGetUserInfo", h), this.loginWithUserInfo(d, this.loginSuccessCallback, k);

                      case 19:
                      case "end":
                        return b.stop();
                    }
                }, b, this);
            }));
            return function() {
                return a.apply(this, arguments);
            };
        }()
    }, {
        key: "loginWithUserInfo",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function b(d, g, k, m, n) {
                var a, o, i, p, c;
                return regeneratorRuntime.wrap(function(b) {
                    for (;;) switch (b.prev = b.next) {
                      case 0:
                        return console.log("code", d), console.log("userInfo", k), a = m || this.launchInfo, 
                        o = n ? "" : n, i = {
                            type: 5,
                            platform: 5,
                            game_app_id: 0,
                            js_code: d.code,
                            release: f.default.release,
                            encrypted_data: k ? k.encryptedData : "",
                            iv: k ? k.iv : "",
                            data: k ? k.rawData : "",
                            source_type: a.st ? a.st : 0,
                            source: a.source ? a.source : 0,
                            share_type: a.share_type || 0,
                            share_id: a.share_id ? a.share_id : 0,
                            device_info: j.default.getSystemInfoSync(),
                            is_config: 1
                        }, p = null, b.prev = 6, console.log("调用"), b.next = 10, h.default.POST("user_login", i, this._call);

                      case 10:
                        p = b.sent, c = new Date().getTime(), wx.setStorageSync("isGetUserInfo", c), g && g(p), 
                        b.next = 20;
                        break;

                      case 16:
                        b.prev = 16, b.t0 = b.catch(6), console.log(b.t0), 2004 != b.t0.code && 2001 != b.t0.code || (h.default.token = "", 
                        wx.removeStorageSync("token"), wx.removeStorageSync("tokenFromOthers"), this.getUserInfo());

                      case 20:
                      case "end":
                        return b.stop();
                    }
                }, b, this, [ [ 6, 16 ] ]);
            }));
            return a;
        }()
    }, {
        key: "fakeLogin",
        value: function() {
            function a() {
                return c.apply(this, arguments);
            }
            var c = b(regeneratorRuntime.mark(function a(b) {
                var c, d, f;
                return regeneratorRuntime.wrap(function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return a.next = 2, j.default.login();

                      case 2:
                        return c = a.sent, d = null, f = {
                            source_type: parseInt(b.source) || 0,
                            js_code: c.code
                        }, a.next = 6, h.default.POST("userView", f, 2);

                      case 6:
                        d = a.sent, console.log("虚拟登录");

                      case 8:
                      case "end":
                        return a.stop();
                    }
                }, a, this);
            }));
            return a;
        }()
    } ]), a;
}();

n.launchInfo = null, n.loginSuccessCallback = null, n.isLogin = !1, exports.default = n;