function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

function b(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var c = function() {
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, 
        c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
    };
}(), d = require("./Toast.js"), f = a(d), e = require("./../npm/wepy/lib/wepy.js"), g = a(e), h = require("./../config.js"), i = a(h), j = function() {
    function a() {
        b(this, a);
    }
    return c(a, null, [ {
        key: "POST",
        value: function(a, b, c) {
            return this.$request(a, b, "POST", c);
        }
    }, {
        key: "GET",
        value: function(a, b, c) {
            return this.$request(a, b, "GET", c);
        }
    }, {
        key: "$request",
        value: function(b, c, d, h) {
            return console.log(h), !c.user_token && this.token && (c.user_token = this.token), 
            c.game_id = c.game_id ? c.game_id : 0, h && 2 == h || (h && 2 != h && 1 != h ? h.isLoading = !0 : f.default.showLoading()), 
            new Promise(function(j, k) {
                g.default.request({
                    url: i.default.url + b,
                    data: {
                        wxparams: JSON.stringify(c)
                    },
                    method: d,
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    success: function(a) {
                        if (200 === a.data.code) {
                            var b = a.data.value;
                            j(b);
                        } else {
                            var c = a.data.message || "请求错误";
                            h && 1 == h || f.default.showError(c), console.log(a, c), k({
                                code: a.data.errorcode,
                                msg: c
                            });
                        }
                    },
                    fail: function() {
                        var a = "连接服务器失败，请稍后重试";
                        f.default.showError(a), k(new Error(a));
                    },
                    complete: function() {
                        h && 2 != h && 1 != h ? (console.log(h), h.isLoading = !1) : f.default.hideLoading();
                    }
                });
            });
        }
    } ]), a;
}();

j.token = wx.getStorageSync("token") || "", exports.default = j;