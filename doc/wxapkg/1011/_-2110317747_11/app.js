var e = require("./api/systemApi.js"), i = require("./utils/memoryHelper.js");

App({
    onLaunch: function(a) {
        var r = 0;
        1005 != a.scene && 1006 != a.scene || (r = 1), this.globalData.from_type = r, (0, 
        e.userLogin)(function(e) {
            (0, i.triggerUserCallback)(e);
        });
    },
    onShow: function(e) {},
    onHide: function() {},
    globalData: {
        user_id: 0,
        questionArr: [],
        challege_id: 0,
        questionNum: 0,
        index_share_title: "",
        index_share_img: "",
        user_index_share_title: "",
        user_index_share_img: "",
        after_challenge_share_title: "",
        after_challenge_share_img: "",
        float_ad: {},
        index_ad: {},
        game_ad: {}
    }
});