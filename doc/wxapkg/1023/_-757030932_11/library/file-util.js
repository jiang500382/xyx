function n(t, e) {
    var i = r.readdirSync(t), o = !0, c = !1, a = void 0;
    try {
        for (var u, f = i[Symbol.iterator](); !(o = (u = f.next()).done); o = !0) {
            var s = t + "/" + u.value;
            r.statSync(s).isDirectory() ? n(s, e) : e(s);
        }
    } catch (n) {
        c = !0, a = n;
    } finally {
        try {
            !o && f.return && f.return();
        } finally {
            if (c) throw a;
        }
    }
}

function t(n, e) {
    var i = r.readdirSync(n), o = !0, c = !1, a = void 0;
    try {
        for (var u, f = i[Symbol.iterator](); !(o = (u = f.next()).done); o = !0) {
            var s = n + "/" + u.value;
            r.statSync(s).isDirectory() && (t(s, e), e(s));
        }
    } catch (n) {
        c = !0, a = n;
    } finally {
        try {
            !o && f.return && f.return();
        } finally {
            if (c) throw a;
        }
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = wx.getFileSystemManager(), e = wx.env.USER_DATA_PATH + "/", i = {}, o = exports.fs = {
    remove: function(o) {
        window.fs_cache = i = {}, n(o = e + "/" + o, function(n) {
            r.unlinkSync(n);
        }), t(o, function(n) {
            r.rmdirSync(n);
        });
    },
    existsSync: function(n) {
        var t = i[n];
        if (0 == t) return !1;
        if (1 == t) return !0;
        try {
            return r.accessSync(e + n), i[n] = 1, !0;
        } catch (t) {
            return i[n] = 0, !1;
        }
    },
    writeSync: function(n, t) {
        i[n] = 1, r.writeFileSync(e + n, t);
    },
    readSync: function(n) {
        return r.readFileSync(e + n, "utf-8");
    },
    mkdirsSync: function(n) {
        console.log("mkdir: " + n);
        var t = Date.now();
        if (!o.existsSync(n)) for (var c = n.split("/"), a = "", u = 0; u < c.length; u++) a += c[u] + "/", 
        o.existsSync(a) || (console.log(i[a]), i[a] = 1, r.mkdirSync(e + a));
        var f = Date.now() - t;
        console.log("mkdir: " + n + " " + f + " ms");
    },
    unzip: function(n, t) {
        return n = e + n, t = e + t, new Promise(function(r, e) {
            o.unzip({
                zipFilePath: n,
                targetPath: t,
                success: function() {
                    r();
                },
                fail: function(n) {
                    e(n);
                }
            });
        });
    }
};

exports.path = {
    dirname: function(n) {
        var t = n.split("/");
        return t.pop(), t.join("/");
    },
    isRemotePath: function(n) {
        return 0 == n.indexOf("http://") || 0 == n.indexOf("https://");
    }
};

window.fs_cache = i;