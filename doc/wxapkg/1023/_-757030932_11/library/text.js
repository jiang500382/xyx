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
}(), o = require("./file-util"), i = o.path, a = wx.getFileSystemManager(), u = new (function() {
    function u() {
        e(this, u);
    }
    return t(u, [ {
        key: "onLoadStart",
        value: function(e, t) {
            var u = t.root, c = t.url;
            return new Promise(function(e, f) {
                if (i.isRemotePath(u)) {
                    var s = c.indexOf("://") >= 0 ? c : u + c;
                    if (r(u)) {
                        var l = "temp_text/" + s.replace(t.root, "");
                        o.fs.existsSync(l) ? o.fs.read(l, "utf-8").then(function(n) {
                            e(n);
                        }) : n(s).then(function(n) {
                            var r = i.dirname(l);
                            o.fs.mkdirsSync(r), o.fs.write(l, n), e(n);
                        }).catch(function(e) {
                            f(e);
                        });
                    } else n(s).then(function(n) {
                        e(n);
                    }).catch(function(e) {
                        f(e);
                    });
                } else {
                    var v = a.readFileSync(u + c, "utf-8");
                    e(v);
                }
            });
        }
    }, {
        key: "onRemoveStart",
        value: function(e, n) {
            return Promise.resolve();
        }
    } ]), u;
}())();

RES.processor.map("text", u);