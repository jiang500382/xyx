function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var b = require("./window"), c = function(a) {
    if (a && a.__esModule) return a;
    var b = {};
    if (null != a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
    return b.default = a, b;
}(b), d = require("./HTMLElement"), e = a(d), f = require("./HTMLVideoElement"), g = a(f), h = require("./Image"), i = a(h), j = require("./Audio"), k = a(j), l = require("./Canvas"), m = a(l);

require("./EventIniter/index.js");

var n = {}, o = {
    readyState: "complete",
    visibilityState: "visible",
    documentElement: c,
    hidden: !1,
    style: {},
    location: c.location,
    ontouchstart: null,
    ontouchmove: null,
    ontouchend: null,
    head: new e.default("head"),
    body: new e.default("body"),
    createElement: function(a) {
        if ("canvas" === a) return new m.default();
        return "audio" === a ? new k.default() : "img" === a ? new i.default() : "video" === a ? new g.default() : new e.default(a);
    },
    createElementNS: function(a, b) {
        return this.createElement(b);
    },
    getElementById: function(a) {
        return a === c.canvas.id ? c.canvas : null;
    },
    getElementsByTagName: function(a) {
        if ("head" === a) return [ o.head ];
        return "body" === a ? [ o.body ] : "canvas" === a ? [ c.canvas ] : [];
    },
    getElementsByName: function(a) {
        if ("head" === a) return [ o.head ];
        return "body" === a ? [ o.body ] : "canvas" === a ? [ c.canvas ] : [];
    },
    querySelector: function(a) {
        if ("head" === a) return o.head;
        return "body" === a ? o.body : "canvas" === a ? c.canvas : a === "#" + c.canvas.id ? c.canvas : null;
    },
    querySelectorAll: function(a) {
        if ("head" === a) return [ o.head ];
        return "body" === a ? [ o.body ] : "canvas" === a ? [ c.canvas ] : [];
    },
    addEventListener: function(a, b) {
        n[a] || (n[a] = []), n[a].push(b);
    },
    removeEventListener: function(a, b) {
        var c = n[a];
        if (c && 0 < c.length) for (var d = c.length; d--; 0 < d) if (c[d] === b) {
            c.splice(d, 1);
            break;
        }
    },
    dispatchEvent: function(a) {
        var b = n[a.type];
        if (b) for (var c = 0; c < b.length; c++) b[c](a);
    }
};

exports.default = o, module.exports = exports["default"];