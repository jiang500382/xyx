function n(i, r) {
    var e = t.readdirSync(i), o = !0, a = !1, c = void 0;
    try {
        for (var w, l = e[Symbol.iterator](); !(o = (w = l.next()).done); o = !0) {
            var d = i + "/" + w.value;
            t.statSync(d).isDirectory() ? n(d, r) : r(d);
        }
    } catch (n) {
        a = !0, c = n;
    } finally {
        try {
            !o && l.return && l.return();
        } finally {
            if (a) throw c;
        }
    }
}

function i(n, r) {
    var e = t.readdirSync(n), o = !0, a = !1, c = void 0;
    try {
        for (var w, l = e[Symbol.iterator](); !(o = (w = l.next()).done); o = !0) {
            var d = n + "/" + w.value;
            t.statSync(d).isDirectory() && (i(d, r), r(d));
        }
    } catch (n) {
        a = !0, c = n;
    } finally {
        try {
            !o && l.return && l.return();
        } finally {
            if (a) throw c;
        }
    }
}

var t = wx.getFileSystemManager(), r = wx.env.USER_DATA_PATH + "/client/";

window.WX_ROOT = r, window.catchPathDic = {}, window.catchDataDic = {}, window.catchArr = [], 
window.fileSaveing = !1;

window.fileSave = function(n) {
    var i = n.replace(LocationProperty.resAdd, ""), o = c(i);
    a(o), window.isFileSaveing = !0;
    var w = window.catchDataDic[n], l = "binary";
    n.indexOf(".json") > -1 && (l = "utf8", w = JSON.stringify(w)), e(n), t.writeFile({
        filePath: "" + r + i,
        data: w,
        encoding: l,
        success: function() {
            delete window.catchDataDic[n], window.isFileSaveing = !1;
        }
    });
};

var e = function(n) {
    var i = window.catchPathDic[n], e = n.replace(LocationProperty.resAdd, "").split("/");
    e.shift();
    var o = e.join("/"), a = wx.getStorageSync(o);
    if ("" != a && i != a) try {
        var c = "" + r + a + "/" + o;
        console.log("删除文件:" + c), t.unlinkSync(c);
    } catch (n) {
        console.log(n);
    }
    try {
        wx.setStorageSync(o, i);
    } catch (n) {
        console.log(n);
    }
};

window.deleteFile = e;

var o = function(n) {
    try {
        return t.accessSync(r + n), !0;
    } catch (n) {
        return !1;
    }
};

window.existsSync = o;

var a = function(n) {
    if (o("") || t.mkdirSync(window.WX_ROOT), !o(n)) for (var i = n.split("/"), r = "", e = 0; e < i.length; e++) {
        var a = i[e];
        "" != a && (r += a + "/"), o(r) || t.mkdirSync(window.WX_ROOT + r);
    }
};

window.mkdirsSync = a;

var c = function(n) {
    var i = n.split("/");
    return i.pop(), i.join("/");
};

window.dirname = c;

window.removeAllFile = function(e) {
    var o = Date.now();
    n(e = r + e, function(n) {
        t.unlinkSync(n);
    }), i(e, function(n) {
        t.rmdirSync(n);
    }), console.log("解析：" + (Date.now() - o));
};