var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = {
    objKeySort: function(e) {
        for (var t = Object.keys(e).sort(), n = {}, r = 0; r < t.length; r++) n[t[r]] = e[t[r]];
        return n;
    },
    startWith: function(e, t) {
        return e.substr(0, t.length) === t;
    },
    isObject: function(t) {
        var n = void 0 === t ? "undefined" : e(t);
        return null !== t && ("object" === n || "function" === n);
    },
    object2Query: function(e) {
        var t = [];
        for (var n in e) t.push(n + "=" + e[n]);
        return t.join("&");
    },
    isArray: function(t) {
        return "object" == (void 0 === t ? "undefined" : e(t)) && t instanceof Array;
    },
    isFunction: function(e) {
        return "function" == typeof e;
    },
    parseMoney: function(e) {
        return e && !isNaN(e) || (e = 0), parseFloat(e).toFixed(2);
    },
    isEmpty: function(t) {
        if ("object" == (void 0 === t ? "undefined" : e(t))) {
            var n;
            for (n in t) return !1;
            return !0;
        }
        return null === t || void 0 === t || "null" === t || "undefined" === t || "" === t;
    },
    getCurrentPageRoute: function() {
        var e = getCurrentPages();
        return e[e.length - 1].route;
    },
    getCurrentPageFullUrl: function() {
        var e = getCurrentPages(), t = e[e.length - 1], n = t.route, r = t.options, o = n + "?";
        for (var u in r) "shareid" !== u.toLowerCase() && (o += u + "=" + r[u] + "&");
        return o = o.substring(0, o.length - 1);
    },
    format: function() {
        var e = arguments[0];
        if (void 0 === e || null == e || "" == e || "undefined" == e) return e;
        for (var t = 1; t < arguments.length; t++) {
            var n = new RegExp("\\{" + (t - 1) + "\\}", "gm");
            e = e.replace(n, arguments[t]);
        }
        return e;
    },
    checkValue: function(e, t) {
        return void 0 === e || null == e || "" == e || "undefined" == e ? t : e;
    },
    isNullOrEmpty: function(e, t) {
        return void 0 === e || null == e || "" == e || "undefined" == e;
    },
    parseDate: function(e) {
        var t = e.replace(/-/g, "/").replace("/./g", "/"), n = new Date();
        try {
            n = new Date(t);
        } catch (e) {
            t += " 00:00:00", n = new Date(t);
        }
        return n;
    },
    addDate: function(e, t) {
        var n;
        return e instanceof Date ? n = e : new Date(e), n = n.valueOf(), n += 24 * t * 60 * 60 * 1e3, 
        n = new Date(n);
    },
    dateFormat: function(t, n) {
        var r = t;
        if ("string" == typeof t && (r = common.parseDate(t)), "object" != (void 0 === r ? "undefined" : e(r))) return "";
        var o = {
            "M+": r.getMonth() + 1,
            "d+": r.getDate(),
            "h+": r.getHours(),
            "m+": r.getMinutes(),
            "s+": r.getSeconds(),
            "q+": Math.floor((r.getMonth() + 3) / 3),
            S: r.getMilliseconds()
        };
        /(y+)/.test(n) && (n = n.replace(RegExp.$1, (r.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var u in o) new RegExp("(" + u + ")").test(n) && (n = n.replace(RegExp.$1, 1 == RegExp.$1.length ? o[u] : ("00" + o[u]).substr(("" + o[u]).length)));
        return n;
    },
    formatSeconds: function(e) {
        var t = parseInt(e), n = 0, r = 0;
        t > 60 && (n = parseInt(t / 60), t = parseInt(t % 60), n > 60 && (r = parseInt(n / 60), 
        n = parseInt(n % 60)));
        var o = parseInt(t) + "秒";
        return n > 0 && (o = parseInt(n) + "分" + o), r > 0 && (o = parseInt(r) + "小时" + o), 
        o;
    },
    getTimestamp: function() {
        return new Date().getTime();
    },
    formatTime: function(e, t) {
        var n = function(e) {
            return (e = e.toString())[1] ? e : "0" + e;
        }, r = [ "Y", "M", "D", "h", "m", "s" ], o = [], u = new Date(1e3 * e);
        o.push(u.getFullYear()), o.push(n(u.getMonth() + 1)), o.push(n(u.getDate())), o.push(n(u.getHours())), 
        o.push(n(u.getMinutes())), o.push(n(u.getSeconds()));
        for (var a in o) t = t.replace(r[a], o[a]);
        return t;
    }
};