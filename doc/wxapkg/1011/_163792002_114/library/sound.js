function e(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}

function r(e) {
    var r = this;
    return new Promise(function(n, t) {
        var o = new egret.Sound();
        o.load(e);
        o.addEventListener(egret.Event.COMPLETE, function() {
            n(o);
        }, r), o.addEventListener(egret.IOErrorEvent.IO_ERROR, function() {
            var r = new RES.ResourceManagerError(1001, e);
            t(r);
        }, r);
    });
}

function n(e, r) {
    return new Promise(function(n, t) {
        var o = i.dirname(r);
        u.mkdirsSync(o);
        var s = wx.env.USER_DATA_PATH + "/" + r;
        wx.downloadFile({
            url: e,
            filePath: s,
            success: function(o) {
                if (o.statusCode >= 400) {
                    try {
                        c.accessSync(s), c.unlinkSync(s);
                    } catch (e) {}
                    t("加载失败:" + e);
                } else n(s), a.fs.writeSync(r, null);
            },
            fail: function(r) {
                var n = new RES.ResourceManagerError(1001, e);
                t(n);
            }
        });
    });
}

function t(e) {
    if (-1 == e.indexOf("assets/")) return !1;
    var r = !0, n = !1, t = void 0;
    try {
        for (var o, a = s[Symbol.iterator](); !(r = (o = a.next()).done); r = !0) {
            var i = o.value;
            if (e.indexOf(i) >= 0) return !1;
        }
    } catch (e) {
        n = !0, t = e;
    } finally {
        try {
            !r && a.return && a.return();
        } finally {
            if (n) throw t;
        }
    }
    return !0;
}

var o = function() {
    function e(e, r) {
        for (var n = 0; n < r.length; n++) {
            var t = r[n];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
            Object.defineProperty(e, t.key, t);
        }
    }
    return function(r, n, t) {
        return n && e(r.prototype, n), t && e(r, t), r;
    };
}(), a = require("./file-util"), i = a.path, u = a.fs, c = wx.getFileSystemManager(), s = [ "image/islands" ], f = new (function() {
    function i() {
        e(this, i);
    }
    return o(i, [ {
        key: "onLoadStart",
        value: function(e, o) {
            var i = o.root, c = o.url;
            o.name;
            "" == i && (i = hortor.ResourceManager.resourceRoot);
            var s = i + (c = c.replace(i, "")), f = t(s);
            if (s = RES.getVirtualUrl(s), !f) return r(s);
            var l = "cache_crc32/" + s.replace(i, "");
            return l = a.fs.removeFilenameVersion(l), u.existsSync(l) ? r(wx.env.USER_DATA_PATH + "/" + l) : n(s, l).then(function(e) {
                return r(e);
            }, function(e) {
                console.error(e);
            });
        }
    }, {
        key: "onRemoveStart",
        value: function(e, r) {
            return Promise.resolve();
        }
    } ]), i;
}())();

RES.processor.map("sound", f);