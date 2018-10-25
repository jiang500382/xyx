var t = {
    getApplication: function() {
        return getApp();
    },
    getAppConfig: function() {
        return getApp().globalData.__appconfig;
    },
    setAppConfig: function(t) {
        getApp().globalData.__appconfig = t;
    },
    getMemory: function(t) {
        return getApp().globalData[t];
    },
    setMemory: function(t, a) {
        getApp().globalData[t] = a;
    },
    saveMemoryUser: function(t) {
        getApp().globalData.__userinfo = t;
    },
    getMemoryUser: function(t) {
        return getApp().globalData.__userinfo;
    },
    saveMemoryBlack: function(t) {
        getApp().globalData.__blackuser = t;
    },
    getMemoryBlack: function(t) {
        return getApp().globalData.__blackuser;
    },
    getMemoryShareOption: function() {
        return getApp().globalData.__page_share_option;
    },
    saveMemoryShareOption: function(t) {
        getApp().globalData.__page_share_option = t;
    },
    existsLoadUserCallback: function() {
        return "function" == typeof getApp().globalData.__usercallback;
    },
    registerQuestionCallback: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}, a = getApp(), e = getCurrentPages(), n = e[e.length - 1];
        a.globalData.__questionId ? t(a.globalData.__questionId, a.globalData.__challegeId) : n.__questioncallback = t;
    },
    triggerQuestionCallback: function(t) {
        var a = getApp();
        getCurrentPages().forEach(function(t) {
            "function" == typeof t.__questioncallback && t.__questioncallback(a.globalData.__questionId, a.globalData.__challegeId);
        });
    },
    registerLoadUserCallback: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}, a = getApp(), e = getCurrentPages(), n = e[e.length - 1];
        a.globalData.__userinfo ? t() : n.__usercallback = t;
    },
    triggerUserCallback: function(t) {
        getCurrentPages().forEach(function(a) {
            "function" == typeof a.__usercallback && a.__usercallback(t);
        });
    },
    setQuestion: function(t, a) {
        var e = getApp();
        e.globalData.__questionId = t, e.globalData.__questionNum = t.length, e.globalData.__challegeId = a;
    },
    getQuestionArr: function() {
        return getApp().globalData.__questionId;
    },
    getQuestionNum: function() {
        return getApp().globalData.__questionNum;
    },
    getChallegeId: function() {
        return getApp().globalData.__challegeId;
    },
    setAdvertisement: function(t) {
        getApp().globalData.__advertisement = t;
    },
    getAdvertisement: function() {
        return getApp().globalData.__advertisement || {};
    },
    setWidthdrawTip: function(t) {
        getApp().globalData.__WIDTHDRAW_TIP = t;
    },
    getWidthdrawTip: function() {
        return getApp().globalData.__WIDTHDRAW_TIP || {};
    },
    getShareTitleIndex: function() {
        var t = getApp();
        return isNaN(t.globalData.SHARE_TITILE_IDX) ? 0 : t.globalData.SHARE_TITILE_IDX;
    },
    setShareTitleIndex: function(t) {
        getApp().globalData.SHARE_TITILE_IDX = t;
    },
    getShareImageIndex: function() {
        var t = getApp();
        return isNaN(t.globalData.SHARE_IMG_IDX) ? 0 : t.globalData.SHARE_IMG_IDX;
    },
    setShareImageIndex: function(t) {
        getApp().globalData.SHARE_IMG_IDX = t;
    }
};

module.exports = t;