function e(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}

function r(e, r) {
    return new Promise(function(n, t) {
        var o = wx.createImage();
        o.onload = function() {
            var e = new egret.BitmapData(o);
            hortor.ResourceManager.addMemoryResByHash(e.hashCode, r);
            var t = void 0;
            if (void 0 == s[r]) (t = new egret.Texture())._setBitmapData(e); else {
                var a = (t = s[r]).bitmapData;
                a.source = e.source, a.width = e.width, a.height = e.height, t._setBitmapData(a);
            }
            setTimeout(function() {
                n(t);
            }, 0);
        }, o.onerror = function(r) {
            console.error(r);
            var r = new RES.ResourceManagerError(1001, e);
            t(r);
        }, o.src = e;
    });
}

function n(e, r) {
    return new Promise(function(n, t) {
        if (i.fs.existsSync(r)) n(); else {
            var o = u.dirname(r);
            i.fs.mkdirsSync(o);
            var a = wx.env.USER_DATA_PATH + "/" + r;
            console.log("开始下载:", e, r), wx.downloadFile({
                url: e,
                filePath: a,
                success: function(o) {
                    if (o.statusCode >= 400) {
                        console.error("加载失败:" + e);
                        var a = new RES.ResourceManagerError(1001, e);
                        t(a);
                    } else i.fs.writeSync(r, null), n();
                },
                fail: function(r) {
                    console.error("下载错误:" + r);
                    var n = new RES.ResourceManagerError(1001, e);
                    t(n);
                }
            });
        }
    });
}

function t(e, r) {
    return new Promise(function(n, t) {
        i.fs.existsSync(r) && n();
        var o = u.dirname(r);
        i.fs.mkdirsSync(o);
        var a = wx.env.USER_DATA_PATH + "/" + r;
        console.log("开始下载:", e, r);
        var s = wx.downloadFile({
            url: e,
            filePath: a,
            success: function(o) {
                if (o.statusCode >= 400) {
                    var a = new RES.ResourceManagerError(1001, e);
                    return t(a), void console.error("加载失败:" + e);
                }
                i.fs.writeSync(r, null), n(), clearTimeout(c);
            },
            fail: function(r) {
                console.error("下载错误:" + r);
                var n = new RES.ResourceManagerError(1001, e);
                t(n);
            },
            complete: function() {
                egret.clearTimeout(c);
            }
        }), c = egret.setTimeout(function() {
            console.error("下载超时"), s.abort();
        }, null, 2e3);
    });
}

function o(e) {
    if (-1 == e.indexOf("assets/")) return !1;
    var r = !0, n = !1, t = void 0;
    try {
        for (var o, a = c[Symbol.iterator](); !(r = (o = a.next()).done); r = !0) {
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

var a = function() {
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
}(), i = require("./file-util"), u = i.path;

wx.getFileSystemManager();

i.fs.remove("tmp");

var s = {}, c = [ "image/islands" ], l = new (function() {
    function u() {
        e(this, u);
    }
    return a(u, [ {
        key: "onLoadStart",
        value: function(e, a) {
            var u = a.root, s = a.url, c = a.name;
            "" == u && (u = hortor.ResourceManager.resourceRoot);
            var l = o(s), f = RES.getVirtualUrl(s), v = -1 == f.indexOf(hortor.ResourceManager.resourceRoot);
            if (!l) {
                if (v) {
                    var m = f.split("/");
                    return w = m[m.length - 2] + m[m.length - 1], w = "tmp/" + w, t(f, w).then(function() {
                        return r(wx.env.USER_DATA_PATH + "/" + w, c);
                    });
                }
                return r(f, c);
            }
            var w = "cache_crc32/" + f.replace(u, "");
            return w = i.fs.removeFilenameVersion(w), n(f, w).then(function() {
                return r(wx.env.USER_DATA_PATH + "/" + w, c);
            });
        }
    }, {
        key: "onRemoveStart",
        value: function(e, r) {
            var n = e.get(r), t = n.bitmapData, o = r.name;
            return void 0 == s[o] && (s[o] = n), "webgl" == egret.Capabilities.renderMode && t.webGLTexture && (egret.WebGLUtils.deleteWebGLTexture(t.webGLTexture), 
            t.webGLTexture = null), t.source = null, Promise.resolve();
        }
    } ]), u;
}())();

RES.processor.map("image", l);