function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", s = (0, 
    u.objKeySort)(e);
    s = (0, d.default)({}, s, {
        timestamp: e.timestamp
    });
    var n = [];
    for (var a in s) n.push((0, u.format)("{0}:{1}", a, s[a]));
    var c = n.join("") + t;
    return console.log("sortPrarms ", c), p.default.md5(c);
}

function s(e, t) {
    return wx.request({
        url: e,
        data: t.data || {},
        method: t.method || "get",
        header: t.header,
        success: function(e) {
            (0, u.isFunction)(t.success) && t.success(e);
        },
        fail: function(e) {
            (0, u.isFunction)(t.fail) && (console.log("fail", e), t.fail(e));
        },
        complete: function(e) {
            console.log("http complete", e), (0, u.isFunction)(t.complete) && t.complete(e);
        }
    });
}

function n(e, t) {
    s(i.default.apiBase + e, t);
}

function a(e, t) {
    s(i.default.ossBase + e, t);
}

function c(e, t) {
    s(i.default.adBase + e, t);
}

var o = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = arguments[t];
        for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
    }
    return e;
}, i = e(require("../config/urienum.js")), r = (e(require("./cacheHepler.js")), 
require("./memoryHelper.js")), u = require("./common.js"), l = (require("../config/globalenum.js"), 
require("../config/appsetting.js")), p = e(require("../utils/md5.js")), d = e(require("../utils/deepAssign.js")), f = {
    httpRequest: s,
    caller: function(e, s) {
        var a = new Date().getTime(), c = o({}, s.data, {
            timestamp: a
        }), i = o({}, c, {
            timestamp: a
        });
        return c.sign = t(i, l.secretkey), s.data = c, n(e, Object.assign({}, s, {
            header: {
                "content-type": s.contenttype || "application/x-www-form-urlencoded",
                Authorization: ""
            },
            success: function(e) {
                (0, u.isFunction)(s.success) && s.success(e.data);
            }
        }));
    },
    post: function(e, t) {
        return f.caller(e, Object.assign({
            method: "POST"
        }, t));
    },
    del: function(e, t) {
        return f.caller(e, Object.assign({
            method: "DELETE"
        }, t));
    },
    put: function(e, t) {
        return f.caller(e, Object.assign({
            method: "PUT"
        }, t));
    },
    html: function(e, t) {
        var s = getApp();
        return request(e, Object.assign({}, t, {
            header: {
                "content-type": "application/text",
                Authorization: s.globalData.authorization
            }
        }));
    },
    adGet: function(e, s) {
        getApp();
        var n = new Date().getTime(), a = (0, r.getMemoryUser)() || "", i = (0, d.default)({}, s.data, {
            timestamp: n,
            user_id: a,
            from_id: l.appId,
            appid: l.appId
        });
        return c(e, Object.assign({}, s, {
            header: {
                "content-type": "application/json"
            },
            method: "POST",
            data: o({}, i, {
                sign: t(o({}, i, {
                    timestamp: n
                }))
            }),
            success: function(e) {
                if ("string" == typeof e.data) {
                    if ((0, u.isFunction)(s.success)) try {
                        s.success(JSON.parse(e.data));
                    } catch (e) {
                        console.log("JSON.parse error ", e);
                    }
                } else (0, u.isFunction)(s.success) && s.success(e.data);
            }
        }));
    },
    json: function(e, t) {
        var s = getApp();
        return request(e, Object.assign({}, t, {
            header: {
                "content-type": "application/json",
                Authorization: s.globalData.authorization
            },
            hasSuccessed: !1,
            success: function(e) {
                if ("string" == typeof e.data) {
                    if ((0, u.isFunction)(t.success)) try {
                        t.success(JSON.parse(e.data));
                    } catch (e) {
                        console.log("JSON.parse error ", e);
                    }
                } else (0, u.isFunction)(t.success) && t.success(e.data);
            }
        }));
    },
    ossjson: function(e, t) {
        getApp();
        return a(e, Object.assign({}, t, {
            header: {
                "content-type": "application/json"
            },
            hasSuccessed: !1,
            success: function(e) {
                if ("string" == typeof e.data) {
                    if ((0, u.isFunction)(t.success)) try {
                        t.success(JSON.parse(e.data));
                    } catch (e) {
                        console.log("JSON.parse error ", e);
                    }
                } else (0, u.isFunction)(t.success) && t.success(e.data);
            }
        }));
    },
    osshtml: function(e, t) {
        return a(e, Object.assign({}, t, {
            header: {
                "content-type": "text/html"
            }
        }));
    }
};

module.exports = f;