function e(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function n() {
    s || (s = wx.getSystemInfoSync());
    var e = s.SDKVersion, n = s.system.split(" ").shift();
    return e <= "2.2.3" && "iOS" == n;
}

function r(e) {
    return new Promise(function(n, r) {
        var t = new XMLHttpRequest();
        t.responseType = "arraybuffer", t.onload = function() {
            n(t.response);
        }, t.onerror = function(n) {
            var t = new RES.ResourceManagerError(1001, e);
            console.error(n), r(t);
        }, t.open("get", e), t.send();
    });
}

function t(e) {
    return e.indexOf("miniGame/resource/") >= 0;
}

var i = function() {
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
}(), o = require("./file-util"), a = o.path, u = o.fs, c = wx.getFileSystemManager(), s = void 0, f = new (function() {
    function o() {
        e(this, o);
    }
    return i(o, [ {
        key: "onLoadStart",
        value: function(e, i) {
            var o = i.root, s = i.url;
            return new Promise(function(e, i) {
                var f = s.indexOf("://") >= 0 ? s : o + s;
                if (RES.getVirtualUrl && (f = RES.getVirtualUrl(f)), a.isRemotePath(f)) if (t(f)) {
                    var l = a.getLocalFilePath(f);
                    if (u.existsSync(l)) {
                        var v = c.readFileSync(a.getWxUserPath(l));
                        e(v);
                    } else r(f).then(function(r) {
                        var t = a.dirname(l);
                        u.mkdirsSync(t), u.writeSync(l, r), n() && (r = c.readFileSync(a.getWxUserPath(l))), 
                        e(r);
                    }).catch(function(e) {
                        i(e);
                    });
                } else r(f).then(function(n) {
                    e(n);
                }).catch(function(e) {
                    i(e);
                }); else {
                    var y = c.readFileSync(f);
                    e(y);
                }
            });
        }
    }, {
        key: "onRemoveStart",
        value: function(e, n) {
            return Promise.resolve();
        }
    } ]), o;
}())();

RES.processor.map("bin", f);