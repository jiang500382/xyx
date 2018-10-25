Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = require("./util/index.js"), b = wx.getSystemInfoSync();

console.log(b);

var c = b.system, d = b.platform, e = b.language, f = -1 !== c.toLowerCase().indexOf("android"), g = f ? "Android; CPU Android 6.0" : "iPhone; CPU iPhone OS 10_3_1 like Mac OS X", h = {
    platform: d,
    language: e,
    appVersion: "5.0 (" + g + ") AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
    userAgent: "Mozilla/5.0 (" + g + ") AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/" + e,
    onLine: !0,
    geolocation: {
        getCurrentPosition: a.noop,
        watchPosition: a.noop,
        clearWatch: a.noop
    }
};

wx.onNetworkStatusChange && wx.onNetworkStatusChange(function(a) {
    h.onLine = a.isConnected;
}), exports.default = h, module.exports = exports["default"];