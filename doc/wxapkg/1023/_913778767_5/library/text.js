function e(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function n(e) {
    return new Promise(function(n, r) {
        var t = new XMLHttpRequest();
        t.onload = function() {
            if (t.status >= 400) {
                var o = "加载失败:" + e;
                console.error(o), r(o);
            } else n(t.responseText);
        }, t.onerror = function(n) {
            var t = new RES.ResourceManagerError(1001, e);
            console.error(n), r(t);
        }, t.open("get", e), t.send();
    });
}

function r(e, n) {
    return e.indexOf("miniGame/resource/") >= 0;
}

var t = function() {
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
}(), o = require("./file-util"), i = o.path, a = o.fs, u = wx.getFileSystemManager(), c = new (function() {
    function o() {
        e(this, o);
    }
    return t(o, [ {
        key: "onLoadStart",
        value: function(e, t) {
            var o = t.root, c = t.url;
            return new Promise(function(e, t) {
                var f = c.indexOf("://") >= 0 ? c : o + c;
                if (RES.getVirtualUrl && (f = RES.getVirtualUrl(f)), i.isRemotePath(f)) if (r(o)) {
                    var s = i.getLocalFilePath(f);
                    if (a.existsSync(s)) {
                        var l = a.readSync(s, "utf-8");
                        e(l);
                    } else n(f).then(function(n) {
                        var r = i.dirname(s);
                        a.mkdirsSync(r), a.writeSync(s, n), e(n);
                    }).catch(function(e) {
                        t(e);
                    });
                } else n(f).then(function(n) {
                    e(n);
                }).catch(function(e) {
                    t(e);
                }); else {
                    var v = u.readFileSync(f, "utf-8");
                    e(v);
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

RES.processor.map("text", c);