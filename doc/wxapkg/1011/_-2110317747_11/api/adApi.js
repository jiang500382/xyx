var e = require("../utils/apiCaller.js"), t = (require("../utils/common.js"), require("../config/apiurl.js")), i = (require("../utils/cacheHepler.js"), 
require("../config/appsetting.js")), a = require("../config/globalenum.js"), r = require("../utils/memoryHelper.js");

require("../utils/md5.js");

module.exports = {
    getIndex: function() {
        var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}, n = (0, 
        r.getAdvertisement)();
        (0, e.adGet)(t.ad.index, {
            data: {
                appid: i.appId
            },
            success: function(e) {
                n = {
                    box: e.data.box_list,
                    moreGames: e.data.app_link_list,
                    gameAd: e.data.advertisement_list.filter(function(e) {
                        return e.position_type == a.AD_TYPE.GAME_PAGE;
                    }),
                    floatAd: e.data.advertisement_list.filter(function(e) {
                        return e.position_type == a.AD_TYPE.INDEX_FLOAT;
                    }),
                    bannerAd: e.data.advertisement_list.filter(function(e) {
                        return e.position_type == a.AD_TYPE.INDEX_BANNER;
                    })
                }, (0, r.setAdvertisement)(n), s(n);
            }
        });
    },
    addStatistics: function(a) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
        (0, e.adGet)(t.ad.statistics, {
            data: {
                to_id: a,
                appid: i.appId,
                from_id: i.appId
            },
            success: r
        });
    },
    getMore: function() {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
        (0, e.adGet)(t.ad.more, {
            data: {
                appid: i.appId
            },
            success: a
        });
    }
};