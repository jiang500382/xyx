function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var b = require("./window"), c = function(a) {
    if (a && a.__esModule) return a;
    var b = {};
    if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
    return b.default = a, b;
}(b), d = require("./document"), e = a(d), f = require("./HTMLElement"), g = a(f), h = GameGlobal;

GameGlobal.__isAdapterInjected || (GameGlobal.__isAdapterInjected = !0, function() {
    c.document = e.default, c.addEventListener = function(a, b) {
        c.document.addEventListener(a, b);
    }, c.removeEventListener = function(a, b) {
        c.document.removeEventListener(a, b);
    }, c.dispatchEvent = function() {
        var a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
        console.log("window.dispatchEvent", a.type, a);
    };
    var a = wx.getSystemInfoSync(), b = a.platform;
    if ("undefined" == typeof __devtoolssubcontext && "devtools" === b) {
        for (var d in c) {
            var f = Object.getOwnPropertyDescriptor(h, d);
            f && !0 !== f.configurable || Object.defineProperty(window, d, {
                value: c[d]
            });
        }
        for (var g in c.document) {
            var i = Object.getOwnPropertyDescriptor(h.document, g);
            i && !0 !== i.configurable || Object.defineProperty(h.document, g, {
                value: c.document[g]
            });
        }
        window.parent = window;
    } else {
        for (var j in c) h[j] = c[j];
        h.window = c, window = h, window.top = window.parent = window;
    }
}());