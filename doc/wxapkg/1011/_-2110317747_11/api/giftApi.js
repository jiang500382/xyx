var e = require("../utils/apiCaller.js"), r = require("../utils/common.js"), i = require("../config/apiurl.js"), s = (require("../utils/cacheHepler.js"), 
require("../utils/memoryHelper.js"));

require("../utils/md5.js");

module.exports = {
    getPrize: function() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}, t = (0, 
        s.getMemoryUser)();
        (0, e.caller)(i.gift.prize, {
            data: {
                user_id: t
            },
            success: r
        });
    },
    receive: function(t) {
        var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {}, n = ((0, 
        r.getTimestamp)(), (0, s.getMemoryUser)());
        (0, e.post)(i.gift.receive, {
            data: {
                user_id: n,
                prize_id: t.goods_id,
                name: t.true_name,
                address: t.address,
                phone: t.phone_num
            },
            success: u,
            fail: o
        });
    }
};