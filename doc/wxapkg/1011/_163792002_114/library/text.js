function e(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}

function r(e) {
    return new Promise(function(r, n) {
        var t = new XMLHttpRequest();
        t.onload = function() {
            if (t.status >= 400) {
                var o = "加载失败:" + e;
                return console.error(o), void n(o);
            }
            r(t.responseText);
        }, t.onerror = function(r) {
            var t = new RES.ResourceManagerError(1001, e);
            console.error(r), n(t);
        }, t.open("get", e), t.send();
    });
}

function n(e) {
    var r = !0, n = !1, t = void 0;
    try {
        for (var o, i = a[Symbol.iterator](); !(r = (o = i.next()).done); r = !0) {
            var c = o.value;
            if (e.indexOf(c) >= 0) return !1;
        }
    } catch (e) {
        n = !0, t = e;
    } finally {
        try {
            !r && i.return && i.return();
        } finally {
            if (n) throw t;
        }
    }
    return !0;
}

var t = function() {
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
}(), o = require("./file-util"), i = o.path, a = (wx.getFileSystemManager(), [ "image/islands" ]), c = new (function() {
    function a() {
        e(this, a);
    }
    return t(a, [ {
        key: "onLoadStart",
        value: function(e, t) {
            var a = t.root, c = t.url;
            return "" == a && (a = hortor.ResourceManager.resourceRoot), c = c.replace(a, ""), 
            new Promise(function(e, t) {
                var u = c.indexOf("://") >= 0 ? c : a + c, f = n(u);
                if (u = RES.getVirtualUrl(a + c), f) {
                    var s = "cache_crc32/" + u.replace(a, "");
                    if (s = o.fs.removeFilenameVersion(s), o.fs.existsSync(s)) {
                        var l = o.fs.readSync(s);
                        return l.length > 0 ? void e(l) : void r(u).then(function(r) {
                            e(r);
                        }).catch(function(e) {
                            t(e);
                        });
                    }
                    r(u).then(function(r) {
                        var n = i.dirname(s);
                        o.fs.mkdirsSync(n), o.fs.writeSync(s, r), e(r);
                    }).catch(function(e) {
                        t(e);
                    });
                } else r(u).then(function(r) {
                    e(r);
                }).catch(function(e) {
                    t(e);
                });
            });
        }
    }, {
        key: "onRemoveStart",
        value: function(e, r) {
            return Promise.resolve();
        }
    } ]), a;
}())();

RES.processor.map("text", c);