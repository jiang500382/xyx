function e(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

var r;

module.exports = {
    ERROR_ENUM: (r = {
        NETWORK_ERROR: "你的网络出问题啦"
    }, e(r, "", "你的网络出问题啦"), e(r, void 0, "你的网络出问题啦"), r)
};