function e(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function n(e) {
    return new Promise(function(n, r) {
        var t = wx.createImage();
        t.onload = function() {
            var e = new egret.BitmapData(t), r = new egret.Texture();
            r._setBitmapData(e), setTimeout(function() {
                n(r);
            }, 0);
        }, t.onerror = function(n) {
            console.error(n);
            var n = new RES.ResourceManagerError(1001, e);
            r(n);
        }, t.src = e;
    });
}

function r(e, n) {
    return new Promise(function(r, t) {
        if (i.fs.existsSync(n)) r(); else {
            var o = a.dirname(n);
            i.fs.mkdirsSync(o), n = wx.env.USER_DATA_PATH + "/" + n, wx.downloadFile({
                url: e,
                filePath: n,
                success: function(n) {
                    if (n.statusCode >= 400) {
                        var o = "加载失败:" + e;
                        console.error(o), t(o);
                    } else r();
                },
                fail: function(e) {
                    console.error(e), t();
                }
            });
        }
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
}(), i = require("./file-util"), a = i.path, u = (wx.getFileSystemManager(), new (function() {
    function a() {
        e(this, a);
    }
    return o(a, [ {
        key: "onLoadStart",
        value: function(e, o) {
            var a = o.root, u = o.url, c = a + u;
            if (i.path.isRemotePath(a)) {
                if (i.path.isRemotePath(u) || !t(a)) return n(c);
                var s = "temp_image/" + c.replace(a, "");
                return r(c, s).then(function() {
                    return n(wx.env.USER_DATA_PATH + "/" + s);
                });
            }
            return n(a + u);
        }
    }, {
        key: "onRemoveStart",
        value: function(e, n) {
            return e.get(n).dispose(), Promise.resolve();
        }
    } ]), a;
}())());

RES.processor.map("image", u);