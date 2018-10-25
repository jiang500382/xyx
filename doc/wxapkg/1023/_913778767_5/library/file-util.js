function n(r, t) {
    var i = e.readdirSync(r), a = !0, o = !1, c = void 0;
    try {
        for (var l, f = i[Symbol.iterator](); !(a = (l = f.next()).done); a = !0) {
            var u = r + "/" + l.value;
            e.statSync(u).isDirectory() ? n(u, t) : t(u);
        }
    } catch (n) {
        o = !0, c = n;
    } finally {
        try {
            !a && f.return && f.return();
        } finally {
            if (o) throw c;
        }
    }
}

function r(n, t) {
    var i = e.readdirSync(n), a = !0, o = !1, c = void 0;
    try {
        for (var l, f = i[Symbol.iterator](); !(a = (l = f.next()).done); a = !0) {
            var u = n + "/" + l.value;
            e.statSync(u).isDirectory() && (r(u, t), t(u));
        }
    } catch (n) {
        o = !0, c = n;
    } finally {
        try {
            !a && f.return && f.return();
        } finally {
            if (o) throw c;
        }
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = wx.getFileSystemManager(), t = wx.env.USER_DATA_PATH + "/", i = {}, a = exports.fs = {
    remove: function(c) {
        if (a.existsSync(c)) {
            var l = t + c;
            n(l, function(n) {
                e.unlinkSync(n);
                var r = n.replace(t, "");
                r = o.normailze(r), i[r] && (i[r] = 0);
            }), r(l, function(n) {
                e.rmdirSync(n);
                var r = n.replace(t, "");
                r = o.normailze(r), i[r] && (i[r] = 0);
            });
        }
    },
    existsSync: function(n) {
        var r = i[n];
        if (0 == r) return !1;
        if (1 == r) return !0;
        try {
            return e.accessSync(t + n), (n = o.normailze(n)) && (i[n] = 1), !0;
        } catch (r) {
            return n = o.normailze(n), i[n] = 0, !1;
        }
    },
    writeSync: function(n, r) {
        n = o.normailze(n), i[n] = 1, e.writeFileSync(t + n, r);
    },
    readSync: function(n, r) {
        return r = r || "utf-8", e.readFileSync(t + n, r);
    },
    mkdirsSync: function(n) {
        var r = Date.now();
        if (!a.existsSync(n)) {
            for (var c = n.split("/"), l = "", f = 0; f < c.length; f++) if (l += c[f] + "/", 
            !a.existsSync(l)) {
                var u = o.normailze(l);
                i[u] = 1, e.mkdirSync(t + l);
            }
            Date.now();
        }
    },
    unzip: function(n, r) {
        return n = t + n, r = t + r, new Promise(function(e, t) {
            a.unzip({
                zipFilePath: n,
                targetPath: r,
                success: function() {
                    e();
                },
                fail: function(n) {
                    t(n);
                }
            });
        });
    },
    setFsCache: function(n, r) {
        i[n] = r;
    }
}, o = exports.path = {
    dirname: function(n) {
        var r = n.split("/");
        return r.pop(), r.join("/");
    },
    isRemotePath: function(n) {
        return 0 == n.indexOf("http://") || 0 == n.indexOf("https://");
    },
    normailze: function(n) {
        var r = n.split("/"), e = n.split("/"), t = !0, i = !1, a = void 0;
        try {
            for (var o, c = r[Symbol.iterator](); !(t = (o = c.next()).done); t = !0) {
                var l = o.value;
                if ("" == l || null == l) {
                    var f = e.indexOf(l);
                    e.splice(f, 1);
                }
            }
        } catch (n) {
            i = !0, a = n;
        } finally {
            try {
                !t && c.return && c.return();
            } finally {
                if (i) throw a;
            }
        }
        if (e.length > 0) return e.join("/");
    },
    getLocalFilePath: function(n) {
        for (var r in o.localFileMap) if (n.indexOf(r) >= 0) return n = n.replace(r, o.localFileMap[r]), 
        o.normailze(n);
        return (n.indexOf(":") >= 0 || n.indexOf("#") >= 0 || n.indexOf("?") >= 0) && (n = n.replace(/[^a-z0-9.]/gi, "/")), 
        o.normailze(n);
    },
    getWxUserPath: function(n) {
        return t + n;
    },
    localFileMap: {}
};