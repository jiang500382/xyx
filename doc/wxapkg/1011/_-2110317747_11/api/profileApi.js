var e = require("../utils/apiCaller.js"), r = require("../utils/common.js"), i = require("../config/apiurl.js"), t = (require("../utils/cacheHepler.js"), 
require("../utils/memoryHelper.js"));

require("../utils/md5.js");

module.exports = {
    getProfile: function() {
        var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}, u = ((0, 
        r.getTimestamp)(), (0, t.getMemoryUser)());
        (0, e.caller)(i.profile.index, {
            data: {
                user_id: u
            },
            success: s,
            fail: a
        });
    },
    updateProfile: function(s) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}, u = ((0, 
        r.getTimestamp)(), (0, t.getMemoryUser)());
        (0, e.post)(i.profile.update, {
            data: {
                user_id: u,
                nickname: s.nickName,
                avatar: s.avatarUrl,
                gender: s.gender
            },
            success: a
        });
    }
};