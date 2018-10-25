var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, o = (require("../utils/weixinHelper.js"), require("../utils/common.js")), i = (require("../config/errorenum.js"), 
require("../api/systemApi.js")), t = require("../utils/message.js"), n = require("../config/urienum.js"), r = require("../utils/cache.js"), s = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./deepAssign.js"));

module.exports = {
    baseComponent: function(u) {
        var a = {
            data: {
                imageBase: n.imageBase,
                videoBase: n.videoBase
            }
        }, d = {
            attached: function() {
                this.notification = this.selectComponent("#notification"), (0, o.isFunction)(u.onInit) && u.onInit.apply(this);
            },
            methods: {
                showLoading: t.showLoading,
                hideLoading: t.hideLoading,
                setCache: r.set,
                getCache: r.get,
                submitFormId: function(o) {
                    "object" == (void 0 === o ? "undefined" : e(o)) ? (0, i.addFormId)(o.detail.formId) : (0, 
                    i.addFormId)(o);
                }
            }
        };
        return (0, s.default)(a, d, u);
    }
};