var e = require("../utils/apiCaller.js"), r = (require("../utils/common.js"), require("../config/apiurl.js")), i = (require("../utils/cacheHepler.js"), 
require("../utils/memoryHelper.js"));

require("../utils/md5.js");

module.exports = {
    getTop: function() {
        var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
        (0, i.getMemoryUser)();
        (0, e.caller)(r.rank.top, {
            data: {},
            success: s
        });
    }
};