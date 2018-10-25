function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

var t = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), n = function() {
    function n() {
        e(this, n), this.name = "wxgame", this.openDataContext = new r();
    }
    return t(n, [ {
        key: "login",
        value: function() {
            return new Promise(function(e, t) {
                wx.login({
                    success: function(t) {
                        e(t);
                    }
                });
            });
        }
    }, {
        key: "getUserInfo",
        value: function() {
            return new Promise(function(e, t) {
                wx.getUserInfo({
                    withCredentials: !0,
                    success: function(t) {
                        var n = t.userInfo;
                        n.nickName, n.avatarUrl, n.gender, n.province, n.city, n.country;
                        e(n);
                    }
                });
            });
        }
    }, {
        key: "getSystemInfo",
        value: function() {
            return new Promise(function(e, t) {
                wx.getSystemInfo({
                    withCredentials: !0,
                    success: function(t) {
                        e(t);
                    },
                    fail: function(e) {},
                    complete: function(e) {}
                });
            });
        }
    } ]), n;
}(), r = function() {
    function n() {
        e(this, n);
    }
    return t(n, [ {
        key: "createDisplayObject",
        value: function(e, t, n) {
            var r = new egret.BitmapData(sharedCanvas);
            r.$deleteSource = !1;
            var i = new egret.Texture();
            i._setBitmapData(r);
            var a = new egret.Bitmap(i);
            return a.width = t, a.height = n, egret.wxgame.WebGLRenderContext.getInstance().context.wxBindCanvasTexture || egret.startTick(function(e) {
                return egret.WebGLUtils.deleteWebGLTexture(r.webGLTexture), r.webGLTexture = null, 
                !1;
            }, this), a;
        }
    }, {
        key: "postMessage",
        value: function(e) {
            wx.getOpenDataContext().postMessage(e);
        }
    } ]), n;
}();

window.platform = new n();