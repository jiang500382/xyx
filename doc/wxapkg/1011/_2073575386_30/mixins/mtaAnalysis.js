function a(a) {
    wx.getNetworkType({
        success: function(b) {
            a(b.networkType);
        }
    });
}

function b() {
    var a = wx.getSystemInfoSync();
    return {
        adt: encodeURIComponent(a.model),
        scl: a.pixelRatio,
        scr: a.windowWidth + "x" + a.windowHeight,
        lg: a.language,
        fl: a.version,
        jv: encodeURIComponent(a.system),
        tz: encodeURIComponent(a.platform)
    };
}

function c() {
    try {
        return wx.getStorageSync(m.prefix + "auid");
    } catch (a) {}
}

function d() {
    try {
        var a = g();
        return wx.setStorageSync(m.prefix + "auid", a), a;
    } catch (a) {}
}

function e() {
    try {
        return wx.getStorageSync(m.prefix + "ssid");
    } catch (a) {}
}

function f() {
    try {
        var a = "s" + g();
        return wx.setStorageSync(m.prefix + "ssid", a), a;
    } catch (a) {}
}

function g(b) {
    for (var c = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ], d = 10; 1 < d; d--) {
        var e = Math.floor(10 * Math.random()), a = c[e];
        c[e] = c[d - 1], c[d - 1] = a;
    }
    for (d = e = 0; 5 > d; d++) e = 10 * e + c[d];
    return (b || "") + (e + "") + +new Date();
}

function h() {
    try {
        var a = getCurrentPages(), b = "/";
        return 0 < a.length && (b = a.pop().__route__), b;
    } catch (a) {
        console.log("get current page path error:" + a);
    }
}

function j() {
    var a = {
        dm: "wechat.apps.xx",
        url: h(),
        pvi: "",
        si: "",
        ty: 0
    };
    return a.pvi = function() {
        var b = c();
        return b || (b = d(), a.ty = 1), b;
    }(), a.si = function() {
        var a = e();
        return a || (a = f()), a;
    }(), a;
}

function k() {
    var c = b();
    return a(function(a) {
        try {
            wx.setStorageSync(m.prefix + "ntdata", a);
        } catch (a) {}
    }), c.ct = wx.getStorageSync(m.prefix + "ntdata") || "4g", c;
}

function l() {
    var a, b = i.Data.userInfo, c = [];
    for (a in b) b.hasOwnProperty(a) && c.push(a + "=" + b[a]);
    return b = c.join(";"), {
        r2: m.app_id,
        r4: "wx",
        ext: "v=" + m.version + (null !== b && "" !== b ? ";ui=" + encodeURIComponent(b) : "")
    };
}

var m = {
    app_id: "",
    event_id: "",
    api_base: "https://pingtas.qq.com/pingd",
    prefix: "_mta_",
    version: "1.3.5",
    stat_share_app: !1,
    stat_pull_down_fresh: !1,
    stat_reach_bottom: !1
}, i = {
    App: {
        init: function(a) {
            "appID" in a && (m.app_id = a.appID), "eventID" in a && (m.event_id = a.eventID), 
            "statShareApp" in a && (m.stat_share_app = a.statShareApp), "statPullDownFresh" in a && (m.stat_pull_down_fresh = a.statPullDownFresh), 
            "statReachBottom" in a && (m.stat_reach_bottom = a.statReachBottom), f(), "lauchOpts" in a && (i.Data.lanchInfo = a.lauchOpts, 
            i.Data.lanchInfo.landing = 1);
        }
    },
    Page: {
        init: function() {
            var a = getCurrentPages()[getCurrentPages().length - 1];
            a.onShow && function() {
                var b = a.onShow;
                a.onShow = function() {
                    i.Page.stat(), b.call(this, arguments);
                };
            }(), m.stat_pull_down_fresh && a.onPullDownRefresh && function() {
                var b = a.onPullDownRefresh;
                a.onPullDownRefresh = function() {
                    i.Event.stat(m.prefix + "pulldownfresh", {
                        url: a.__route__
                    }), b.call(this, arguments);
                };
            }(), m.stat_reach_bottom && a.onReachBottom && function() {
                var b = a.onReachBottom;
                a.onReachBottom = function() {
                    i.Event.stat(m.prefix + "reachbottom", {
                        url: a.__route__
                    }), b.call(this, arguments);
                };
            }(), m.stat_share_app && a.onShareAppMessage && function() {
                var b = a.onShareAppMessage;
                a.onShareAppMessage = function() {
                    return i.Event.stat(m.prefix + "shareapp", {
                        url: a.__route__
                    }), b.call(this, arguments);
                };
            }();
        },
        stat: function() {
            if ("" != m.app_id) {
                var b = [], c = l(), d = [ j(), c, k() ];
                i.Data.lanchInfo && (d.push({
                    ht: i.Data.lanchInfo.scene,
                    rdm: "/",
                    rurl: i.Data.lanchInfo.path
                }), i.Data.lanchInfo.query && i.Data.lanchInfo.query._mta_ref_id && d.push({
                    rarg: i.Data.lanchInfo.query._mta_ref_id
                }), 1 == i.Data.lanchInfo.landing && (c.ext += ";lp=1", i.Data.lanchInfo.landing = 0)), 
                d.push({
                    rand: +new Date()
                }), c = 0;
                for (var e = d.length; c < e; c++) for (var a in d[c]) d[c].hasOwnProperty(a) && b.push(a + "=" + (void 0 === d[c][a] ? "" : d[c][a]));
                wx.request({
                    url: m.api_base + "?" + b.join("&").toLowerCase()
                });
            }
        }
    },
    Event: {
        stat: function(b, d) {
            if ("" != m.event_id) {
                var f = [], e = j(), a = l();
                e.dm = "wxapps.click", e.url = b, a.r2 = m.event_id;
                var g, h = void 0 === d ? {} : d, n = [];
                for (g in h) h.hasOwnProperty(g) && n.push(encodeURIComponent(g) + "=" + encodeURIComponent(h[g]));
                for (h = n.join(";"), a.r5 = h, h = 0, e = [ e, a, k(), {
                    rand: +new Date()
                } ], a = e.length; h < a; h++) for (var i in e[h]) e[h].hasOwnProperty(i) && f.push(i + "=" + (void 0 === e[h][i] ? "" : e[h][i]));
                wx.request({
                    url: m.api_base + "?" + f.join("&").toLowerCase()
                });
            }
        }
    },
    Data: {
        userInfo: null,
        lanchInfo: null
    }
};

module.exports = i;