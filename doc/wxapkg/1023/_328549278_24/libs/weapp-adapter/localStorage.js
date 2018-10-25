Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = {
    get length() {
        var a = wx.getStorageInfoSync(), b = a.keys;
        return b.length;
    },
    key: function(a) {
        var b = wx.getStorageInfoSync(), c = b.keys;
        return c[a];
    },
    getItem: function(a) {
        return wx.getStorageSync(a);
    },
    setItem: function(a, b) {
        return wx.setStorageSync(a, b);
    },
    removeItem: function(a) {
        wx.removeStorageSync(a);
    },
    clear: function() {
        wx.clearStorageSync();
    }
};

exports.default = a, module.exports = exports["default"];