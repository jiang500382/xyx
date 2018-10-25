var e = require("../utils/apiCaller.js"), r = require("../utils/common.js"), t = require("../config/apiurl.js"), s = (require("../utils/cacheHepler.js"), 
require("../utils/memoryHelper.js")), i = require("../utils/md5.js");

module.exports = {
    addShare: function(a) {
        var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}, p = (0, 
        r.getTimestamp)(), m = (0, s.getMemoryUser)(), c = "encryptedData:" + a.encryptedData + "iv:" + a.iv + "share_type:" + a.share_type + "timestamp:" + p + "user_id:" + m;
        (0, e.post)(t.share.share, {
            data: {
                user_id: m,
                encryptedData: a.encryptedData,
                iv: a.iv,
                share_type: a.share_type,
                sign: i.md5(c),
                timestamp: p
            },
            success: u
        });
    }
};