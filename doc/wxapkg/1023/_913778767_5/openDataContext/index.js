function e() {
    l(u.panel, G, J, T, b);
    var e = u.title;
    l(e, G + (T - e.width) / 2, J + e.height + 40);
    var o = x * p;
    a(k = f.slice(o, o + x)), n();
}

function o() {
    D = 4 * (T = 4 * w / 5) / 5, G = (w - T) / 2, J = (C - (b = 4 * C / 5)) / 2, q = (b - (A = T / x)) / (x + 1), 
    X = Math.floor(w / 25), I = G + (T - D) / 2, F = J + q, j = A - 10, B = D / 20, 
    Y = (A + X) / 2, z = D / 3, K = g.measureText("99").width, S = G + (W = T / 3) - (M = D / 3), 
    E = G + 2 * W, O = H = J + b - 50 - (R = A / 2);
    var e = wx.getSystemInfoSync();
    h = e.windowWidth, m = e.windowHeight;
}

function n() {
    l(u.button, E, O, M, R), l(u.button, S, H, M, R);
}

function a(e) {
    for (var o = 0; o < e.length; o++) i(e[o], o);
}

function i(e, o) {
    var n = I;
    l(u.box, I, F + o * q, D, A), n += 10, g.font = X + "px Arial", g.fillText(e.key + "", n, F + o * q + Y, z), 
    n += K + B, l(u.icon, n, F + o * q + (A - j) / 2, j, j), n += j + B, g.fillText(e.name + "", n, F + o * q + Y, z), 
    n += z + B, g.fillText(e.scroes + "", n, F + o * q + Y, z);
}

function t(e) {
    var o = e.clientX * sharedCanvas.width / h, n = e.clientY * sharedCanvas.height / m;
    o > S && o < S + M && n > H && n < H + R && p > 0 && s(0), o > E && o < E + M && n > O && n < O + R && (p + 1) * x < f.length && s(1);
}

function s(e) {
    var o = void 0;
    0 == e ? (o = H, H += 10, p--, y = !0, console.log("上一页" + p), setTimeout(function() {
        H = o, y = !0;
    }, 100)) : 1 == e && (o = O, O += 10, p++, y = !0, console.log("下一页" + p), setTimeout(function() {
        O = o, y = !0;
    }, 100));
}

function r() {
    var e = 0, o = 0;
    for (var n in v) {
        o++;
        var a = wx.createImage();
        a.onload = function() {
            ++e == o && (L = !0);
        }, a.src = v[n], u[n] = a;
    }
}

function c() {
    return sharedCanvas.width && sharedCanvas.height ? (w = sharedCanvas.width, C = sharedCanvas.height, 
    o(), !0) : (console.log("创建开放数据域失败，请检查是否加载开放数据域资源"), !1);
}

function d() {
    y && (g.setTransform(1, 0, 0, 1, 0, 0), g.clearRect(0, 0, sharedCanvas.width, sharedCanvas.height), 
    e(), y = !1), N = requestAnimationFrame(d);
}

function l(e, o, n, a, i) {
    0 != e.width && 0 != e.height && g && (a && i ? g.drawImage(e, o, n, a, i) : g.drawImage(e, o, n));
}

var v = {
    icon: "openDataContext/assets/icon.png",
    box: "openDataContext/assets/box.png",
    panel: "openDataContext/assets/panel.png",
    button: "openDataContext/assets/button.png",
    title: "openDataContext/assets/rankingtitle.png"
}, u = {};

console.log();

var h = void 0, m = void 0, g = sharedCanvas.getContext("2d");

g.globalCompositeOperation = "source-over";

var f = [ {
    key: 1,
    name: "1111111111",
    url: u.icon,
    scroes: 1e4
}, {
    key: 2,
    name: "2222222222",
    url: u.icon,
    scroes: 9e3
}, {
    key: 3,
    name: "3333333",
    url: u.icon,
    scroes: 8e3
}, {
    key: 4,
    name: "4444444",
    url: u.icon,
    scroes: 7e3
}, {
    key: 5,
    name: "55555555",
    url: u.icon,
    scroes: 6e3
}, {
    key: 6,
    name: "6666666",
    url: u.icon,
    scroes: 5e3
}, {
    key: 7,
    name: "7777777",
    url: u.icon,
    scroes: 4e3
}, {
    key: 8,
    name: "8888888",
    url: u.icon,
    scroes: 3e3
}, {
    key: 9,
    name: "9999999",
    url: u.icon,
    scroes: 2e3
}, {
    key: 10,
    name: "1010101010",
    url: u.icon,
    scroes: 2e3
}, {
    key: 11,
    name: "111111111111",
    url: u.icon,
    scroes: 2e3
}, {
    key: 12,
    name: "121212121212",
    url: u.icon,
    scroes: 2e3
}, {
    key: 13,
    name: "13131313",
    url: u.icon,
    scroes: 2e3
}, {
    key: 14,
    name: "1414141414",
    url: u.icon,
    scroes: 2e3
}, {
    key: 15,
    name: "1515151515",
    url: u.icon,
    scroes: 2e3
}, {
    key: 16,
    name: "1616161616",
    url: u.icon,
    scroes: 2e3
} ], y = !0, k = [], x = 5, p = 0, w = void 0, C = void 0, T = void 0, b = void 0, D = void 0, A = void 0, I = void 0, F = void 0, q = void 0, M = void 0, R = void 0, S = void 0, E = void 0, H = void 0, O = void 0, W = void 0, X = void 0, Y = void 0, j = void 0, z = void 0, B = void 0, G = void 0, J = void 0, K = void 0;

wx.onTouchEnd(function(e) {
    for (var o = e.changedTouches.length, n = 0; n < o; n++) t(e.changedTouches[n]);
});

var L = void 0, N = void 0, P = void 0;

console.log("增加监听函数"), wx.onMessage(function(e) {
    console.log(e), "open" == e.command ? (P || (P = c()), N = requestAnimationFrame(d)) : "close" == e.command && N ? (cancelAnimationFrame(N), 
    N = null) : "loadRes" != e.command || L || r();
});