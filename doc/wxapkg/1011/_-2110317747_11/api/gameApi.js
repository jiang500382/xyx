var e = require("../utils/apiCaller.js"), i = require("../utils/common.js"), r = require("../config/apiurl.js"), s = (require("../utils/cacheHepler.js"), 
require("../utils/memoryHelper.js"));

require("../utils/md5.js");

module.exports = {
    addFeedback: function(l) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {}, c = ((0, 
        i.getTimestamp)(), (0, s.getMemoryUser)()), a = 1 == l.type_ ? l.level + 1 : l.level;
        (0, e.post)(r.game.feedback, {
            data: {
                user_id: c,
                challenge_id: l.challege_id,
                score: a,
                successed: l.type_
            },
            success: t,
            fail: u
        });
    }
};