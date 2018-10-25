function e(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}

function r(e, r) {
    return new Promise(function(n, t) {
        var a = wx.createImage();
        a.onload = function() {
            var e = new egret.BitmapData(a), t = new egret.Texture();
            t._setBitmapData(e), r && (t.scale9Grid = r), setTimeout(function() {
                n(t);
            }, 0);
        }, a.onerror = function(r) {
            console.error(r);
            var n = new RES.ResourceManagerError(1001, e);
            t(n);
        }, a.src = e;
    });
}

function n(e, r) {
    return new Promise(function(n, t) {
        var a = i.dirname(r);
        u.mkdirsSync(a);
        var o = i.getWxUserPath(r);
        wx.downloadFile({
            url: e,
            filePath: o,
            success: function(r) {
                if (r.statusCode >= 400) {
                    try {
                        c.accessSync(o), c.unlinkSync(o);
                    } catch (e) {}
                    t("加载失败:" + e);
                } else n(o);
            },
            fail: function(r) {
                var n = new RES.ResourceManagerError(1001, e);
                t(n);
            }
        });
    });
}

function t(e, r) {
    return e.indexOf("miniGame/resource/") >= 0;
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
}(), o = require("./file-util"), i = o.path, u = o.fs, c = wx.getFileSystemManager(), s = new (function() {
    function o() {
        e(this, o);
    }
    return a(o, [ {
        key: "onLoadStart",
        value: function(e, a) {
            var o = void 0, c = a.root, s = a.url;
            if (a.scale9grid) {
                var l = a.scale9grid.split(",");
                o = new egret.Rectangle(parseInt(l[0]), parseInt(l[1]), parseInt(l[2]), parseInt(l[3]));
            }
            var f = c + s;
            if (RES.getVirtualUrl && (f = RES.getVirtualUrl(f)), i.isRemotePath(f)) {
                if (t(c)) {
                    var g = i.getLocalFilePath(f);
                    return u.existsSync(g) ? r(i.getWxUserPath(g), o) : n(f, g).then(function(e) {
                        return u.setFsCache(g, 1), r(e, o);
                    }, function(e) {
                        console.error(e);
                    });
                }
                return r(f, o);
            }
            return r(f, o);
        }
    }, {
        key: "onRemoveStart",
        value: function(e, r) {
            return e.get(r).dispose(), Promise.resolve();
        }
    } ]), o;
}())();

RES.processor.map("image", s);