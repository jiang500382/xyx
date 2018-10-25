var e = require("../utils/apiCaller.js"), t = require("../utils/common.js"), i = require("../config/apiurl.js"), r = (require("../utils/cacheHepler.js"), 
require("../utils/memoryHelper.js"));

require("../utils/md5.js");

module.exports = {
    withdraw: function(s) {
        var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {}, l = ((0, 
        t.getTimestamp)(), (0, r.getMemoryUser)());
        (0, e.post)(i.wallet.withdraw, {
            data: {
                amount: s.amount,
                user_id: l
            },
            success: u,
            fail: a
        });
    },
    withdrawList: function() {
        var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}, u = ((0, 
        t.getTimestamp)(), (0, r.getMemoryUser)());
        (0, e.post)(i.wallet.withdrawlist, {
            data: {
                user_id: u
            },
            success: s
        });
    }
};