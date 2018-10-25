Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = wx.getSystemInfoSync(), b = a.screenWidth, c = a.screenHeight, d = a.devicePixelRatio, e = exports.innerWidth = b, f = exports.innerHeight = c;

exports.devicePixelRatio = d;

var g = exports.screen = {
    width: b,
    height: c,
    availWidth: e,
    availHeight: f,
    availLeft: 0,
    availTop: 0
}, h = wx.getPerformance ? wx.getPerformance() : {};

h.now = Date.now;

var i = exports.ontouchstart = null, j = exports.ontouchmove = null, k = exports.ontouchend = null;