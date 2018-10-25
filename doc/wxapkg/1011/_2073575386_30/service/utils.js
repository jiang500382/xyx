function a(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

var b = Math.floor;

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
    return typeof a;
} : function(a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
}, d = function() {
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, 
        c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
    };
}(), e = function() {
    function f() {
        a(this, f);
    }
    return d(f, null, [ {
        key: "compareVersion",
        value: function(b, c) {
            b = b.split("."), c = c.split(".");
            for (var d = Math.max(b.length, c.length); b.length < d; ) b.push("0");
            for (;c.length < d; ) c.push("0");
            for (var e = 0; e < d; e++) {
                var f = parseInt(b[e]), g = parseInt(c[e]);
                if (f > g) return 1;
                if (f < g) return -1;
            }
            return 0;
        }
    }, {
        key: "versionGreaterThan",
        value: function(a) {
            var b = wx.getSystemInfoSync();
            return 0 <= this.compareVersion(b.SDKVersion, a);
        }
    }, {
        key: "navigateToMiniProgram",
        value: function(a, b) {
            if (!this.versionGreaterThan("2.0.7") || b) if (wx.navigateToMiniProgram) {
                if (!a.appId) return void console.error("请传入正确的appId");
                wx.navigateToMiniProgram({
                    appId: a.appId,
                    path: a.path || "",
                    extraData: a.extraData || {},
                    envVersion: "trial",
                    success: function(a) {
                        console.log("打开小程序成功", a);
                    },
                    fail: function(a) {
                        console.log("打开小程序失败", a);
                    }
                });
            } else {
                if (!item.image) return void console.error("请传入image，用于显示二维码");
                wx.previewImage({
                    urls: [ item.image ]
                });
            }
        }
    }, {
        key: "isEmptyObject",
        value: function(a) {
            for (var b in a) return !1;
            return !0;
        }
    }, {
        key: "rand",
        value: function(a, c) {
            return b(Math.random() * (c - a + 1) + a);
        }
    }, {
        key: "dataFormat",
        value: function(b, c, d, e) {
            var f = "";
            if (b = b.toString(), !(b.length < e)) return b;
            for (var g = 0; g < e - b.length; g++) f += d;
            return 1 == c ? f + b : (c = 2) ? b + f : void 0;
        }
    }, {
        key: "fullyIcon",
        value: function(a, b) {
            if (0 === a.indexOf("http")) return a;
            var c = "http://paopao.hi-hai.com/";
            return c = 1 === b ? "https://res.xingqiu123.com/" : 2 === b ? "https://r.callwo.com/" : "http://paopao.hi-hai.com/", 
            c + a;
        }
    }, {
        key: "formatName",
        value: function(a) {
            var b = a, c = /[^\x00-\xff]/g;
            if (10 >= b.replace(c, "mm").length) return b + "";
            for (var d = 5; d < b.length; d++) if (10 <= b.substring(0, d).replace(c, "mm").length) return b.substring(0, d) + "...";
            return b;
        }
    }, {
        key: "arrIdKey",
        value: function(a, b) {
            var d = [];
            return b = b || "id", "object" == (void 0 === a ? "undefined" : c(a)) && a.length && a.map(function(a) {
                d[a[b]] = a;
            }), d;
        }
    } ]), f;
}();

e.formatTime = function(a) {
    var b = a.getFullYear(), c = a.getMonth() + 1, d = a.getDate();
    return a.getHours(), a.getMinutes(), a.getSeconds(), b + "年" + c + "月" + d + "日";
}, e.dateFormat = function(a, c) {
    var d = {
        "M+": a.getMonth() + 1,
        "d+": a.getDate(),
        "h+": a.getHours(),
        "m+": a.getMinutes(),
        "s+": a.getSeconds(),
        "q+": b((a.getMonth() + 3) / 3),
        S: a.getMilliseconds()
    };
    for (var e in /(y+)/.test(c) && (c = c.replace(RegExp.$1, (a.getFullYear() + "").substr(4 - RegExp.$1.length))), 
    d) new RegExp("(" + e + ")").test(c) && (c = c.replace(RegExp.$1, 1 == RegExp.$1.length ? d[e] : ("00" + d[e]).substr(("" + d[e]).length)));
    return c;
}, e.formatNumber = function(a) {
    return a = a.toString(), a[1] ? a : "0" + a;
}, exports.default = e;