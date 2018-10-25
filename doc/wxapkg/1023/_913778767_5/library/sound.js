function e(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function n(e) {
    var n = this;
    return new Promise(function(r, t) {
        var o = new egret.Sound();
        o.load(e);
        o.addEventListener(egret.Event.COMPLETE, function() {
            r(o);
        }, n), o.addEventListener(egret.IOErrorEvent.IO_ERROR, function() {
            var n = new RES.ResourceManagerError(1001, e);
            t(n);
        }, n);
    });
}

function r(e, n) {
    return new Promise(function(r, t) {
        var o = i.dirname(n);
        u.mkdirsSync(o);
        var a = i.getWxUserPath(n);
        wx.downloadFile({
            url: e,
            filePath: a,
            success: function(n) {
                if (n.statusCode >= 400) {
                    try {
                        c.accessSync(a), c.unlinkSync(a);
                    } catch (e) {}
                    t("加载失败:" + e);
                } else r(a);
            },
            fail: function(n) {
                var r = new RES.ResourceManagerError(1001, e);
                t(r);
            }
        });
    });
}

function t(e, n) {
    return e.indexOf("miniGame/resource/") >= 0;
}

var o = function() {
    function e(e, n) {
        for (var r = 0; r < n.length; r++) {
            var t = n[r];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
            Object.defineProperty(e, t.key, t);
        }
    }
    return function(n, r, t) {
        return r && e(n.prototype, r), t && e(n, t), n;
    };
}(), a = require("./file-util"), i = a.path, u = a.fs, c = wx.getFileSystemManager(), s = new (function() {
    function a() {
        e(this, a);
    }
    return o(a, [ {
        key: "onLoadStart",
        value: function(e, o) {
            var a = o.root, c = o.url, s = a + c;
            if (RES.getVirtualUrl && (s = RES.getVirtualUrl(s)), i.isRemotePath(s)) {
                if (t(a)) {
                    var f = i.getLocalFilePath(s);
                    return u.existsSync(f) ? n(i.getWxUserPath(f)) : r(s, f).then(function(e) {
                        return u.setFsCache(f, 1), n(e);
                    }, function(e) {
                        console.error(e);
                    });
                }
                return n(s);
            }
            return n(s);
        }
    }, {
        key: "onRemoveStart",
        value: function(e, n) {
            return Promise.resolve();
        }
    } ]), a;
}())();

RES.processor.map("sound", s);