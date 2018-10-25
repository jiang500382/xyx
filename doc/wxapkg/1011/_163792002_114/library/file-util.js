function e(n, r) {
    var o = [];
    try {
        o = t.readdirSync(n);
    } catch (e) {
        return void console.log(n + " is not exist");
    }
    var i = !0, c = !1, s = void 0;
    try {
        for (var a, l = o[Symbol.iterator](); !(i = (a = l.next()).done); i = !0) {
            var u = a.value, f = n + "/" + u;
            try {
                t.statSync(f).isDirectory() ? e(f, r) : r(f);
            } catch (e) {
                console.log(f + " is not exist");
            }
        }
    } catch (e) {
        c = !0, s = e;
    } finally {
        try {
            !i && l.return && l.return();
        } finally {
            if (c) throw s;
        }
    }
}

function n(e, r) {
    var o = [];
    try {
        o = t.readdirSync(e);
    } catch (n) {
        return void console.log(e + " is not exist");
    }
    var i = !0, c = !1, s = void 0;
    try {
        for (var a, l = o[Symbol.iterator](); !(i = (a = l.next()).done); i = !0) {
            var u = a.value, f = e + "/" + u;
            try {
                t.statSync(f).isDirectory() && (n(f, r), r(f));
            } catch (e) {
                console.log(f + " is not exist");
            }
        }
    } catch (e) {
        c = !0, s = e;
    } finally {
        try {
            !i && l.return && l.return();
        } finally {
            if (c) throw s;
        }
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = wx.getFileSystemManager(), r = wx.env.USER_DATA_PATH + "/", o = {}, i = exports.fs = {
    isNewCacheVersion: function(e) {
        if (!i.existsSync("version")) return console.log("no version file."), !0;
        var n = i.readSync("version");
        return n === e ? (console.log("no new version data=" + n + ", new version=" + e), 
        !1) : (console.log("has new version data=" + n + ", new version=" + e), !0);
    },
    clearCache: function() {
        console.log("clear cache");
        i.existsSync("temp_image") && (console.log("remove tempImageDir"), i.remove("temp_image"));
        i.existsSync("temp_text/") && (console.log("remove tempTextDir"), i.remove("temp_text/")), 
        o = {};
    },
    refreshCache: function(e) {
        console.log("refresh cache version"), i.writeSync("version", e);
    },
    removeFilenameVersion: function(e) {
        if (null != e && "string" == typeof e) return e.replace(/\?v=.+/, "");
    },
    remove: function(i) {
        window.fs_cache = o = {}, e(i = r + "/" + i, function(e) {
            t.unlinkSync(e);
        }), n(i, function(e) {
            t.rmdirSync(e);
        });
    },
    existsSync: function(e) {
        var n = o[e];
        if (0 == n) return !1;
        if (1 == n) return !0;
        try {
            return t.accessSync(r + e), o[e] = 1, !0;
        } catch (n) {
            return o[e] = 0, !1;
        }
    },
    writeSync: function(e, n) {
        o[e] = 1, n && t.writeFileSync(r + e, n);
    },
    readSync: function(e) {
        return t.readFileSync(r + e, "utf-8");
    },
    mkdirsSync: function(e) {
        var n = Date.now();
        if (!i.existsSync(e)) for (var c = e.split("/"), s = "", a = 0; a < c.length; a++) s += c[a] + "/", 
        i.existsSync(s) || (o[s] = 1, t.mkdirSync(r + s));
        Date.now();
    },
    unzip: function(e, n) {
        return e = r + e, n = r + n, new Promise(function(t, r) {
            i.unzip({
                zipFilePath: e,
                targetPath: n,
                success: function() {
                    t();
                },
                fail: function(e) {
                    r(e);
                }
            });
        });
    }
};

exports.path = {
    dirname: function(e) {
        var n = e.split("/");
        return n.pop(), n.join("/");
    },
    isRemotePath: function(e) {
        return 0 == e.indexOf("http://") || 0 == e.indexOf("https://") || "" === e;
    }
};

window.fs_cache = o;