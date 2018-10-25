var e = require("../utils/apiCaller.js"), r = (require("../utils/common.js"), require("../config/apiurl.js")), i = (require("../utils/cacheHepler.js"), 
require("../utils/memoryHelper.js"));

require("../utils/md5.js");

module.exports = {
    getHomeData: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}, s = (0, 
        i.getMemoryUser)();
        (0, e.caller)(r.index.index, {
            data: {
                user_id: s
            },
            success: t
        });
    },
    getRule: function() {
        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
        (0, e.caller)(r.index.rule, {
            data: {},
            success: i
        });
    },
    startGame: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}, u = (0, 
        i.getMemoryUser)();
        (0, e.post)(r.index.start, {
            data: {
                user_id: u
            },
            success: t,
            fail: s
        });
    },
    checkRedirectNum: function() {
        var t = (0, i.getMemoryUser)();
        (0, e.post)(r.index.check, {
            data: {
                user_id: t
            }
        });
    }
};