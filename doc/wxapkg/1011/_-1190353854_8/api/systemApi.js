var e = require("../utils/apiCaller.js"), s = require("../utils/common.js"), r = require("../config/apiurl.js"), t = (require("../utils/cacheHepler.js"), 
require("../utils/memoryHelper.js"));

require("../utils/md5.js");

module.exports = {
    userLogin: function() {
        var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
        wx.login({
            success: function(a) {
                (0, e.post)(r.system.login, {
                    data: {
                        code: a.code,
                        from_type: (0, t.getMemory)("from_type")
                    },
                    success: function(e) {
                        (0, t.saveMemoryUser)(e.data.user_id), 1 === e.data.user_status ? (0, t.saveMemoryBlack)(0) : (0, 
                        t.saveMemoryBlack)(1), s();
                    }
                });
            }
        });
    },
    moregames: function(s) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var a = (0, t.getMemoryUser)();
        (0, e.post)(r.system.addlog, {
            data: {
                user_id: a,
                app_id: s.app_id,
                type: 2
            }
        });
    },
    addFormId: function(a) {
        var o = (0, t.getMemoryUser)();
        (0, s.getTimestamp)();
        (0, e.post)(r.system.addlog, {
            data: {
                user_id: o,
                formid: a,
                type: 1
            }
        });
    },
    addBlackUser: function() {
        var s = (0, t.getMemoryUser)();
        (0, e.post)(r.system.addblackuser, {
            data: {
                user_id: s,
                type: "用户截屏"
            }
        });
    }
};