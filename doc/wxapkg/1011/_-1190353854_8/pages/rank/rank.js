var t = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var r = arguments[a];
        for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
    }
    return t;
}, a = require("../../api/rankApi.js"), r = require("../../core/basePage.js");

getApp(), require("../../utils/md5.js");

Page((0, r.basePage)({
    data: {
        imgLogo: "../../image/user_logo.jpg",
        currentTab: 0,
        honor_list: [],
        will_list: []
    },
    onInit: function(t) {
        this.loadHonorData();
    },
    loadHonorData: function() {
        var r = this;
        (0, a.getTop)(function(a) {
            r.setData(t({}, a.data));
        });
    },
    swiperTab: function(t) {
        this.setData({
            currentTab: t.detail.current
        });
    },
    clickTab: function(t) {
        var a = this;
        if (this.data.currentTab === t.target.dataset.current) return !1;
        a.setData({
            currentTab: t.target.dataset.current
        });
    }
}));