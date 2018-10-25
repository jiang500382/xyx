function b(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

function c(a, b) {
    if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return b && ("object" == typeof b || "function" == typeof b) ? b : a;
}

function a(a, b) {
    if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
    a.prototype = Object.create(b && b.prototype, {
        constructor: {
            value: a,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var d = function() {
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, 
        c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
    };
}(), e = require("./../npm/wepy/lib/wepy.js"), f = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(e), g = function(f) {
    function g() {
        var d, e, f, h;
        b(this, g);
        for (var j = arguments.length, a = Array(j), i = 0; i < j; i++) a[i] = arguments[i];
        return e = f = c(this, (d = g.__proto__ || Object.getPrototypeOf(g)).call.apply(d, [ this ].concat(a))), 
        f.data = {
            isTall: "",
            sceneTitle: "",
            tallNav: "",
            itemType: 1
        }, f.props = {
            title: {
                type: String,
                default: "",
                twoWay: !0
            },
            method: {
                type: String,
                default: "",
                twoWay: !0
            },
            hiddenBack: {
                type: Boolean,
                default: !0,
                twoWay: !0
            },
            custom: {
                type: Boolean,
                default: !1,
                twoWay: !0
            },
            user: {
                type: String,
                default: "",
                twoWay: !0
            },
            fontColor: {
                type: String,
                default: "",
                twoWay: !0
            }
        }, f.methods = {
            navigateBack: function(a) {
                this.custom ? (console.log("item>>>>>>>>", 0), this.triggerEvent("navigateBack")) : (console.log("item>>>>>>>>", 1), 
                a.currentTarget.dataset.item ? wx.navigateBack({
                    delta: 1
                }) : wx.switchTab({
                    url: "index",
                    complete: function(a) {
                        console.log(a);
                    }
                }));
            }
        }, f.computed = {
            title: function() {
                this.title && (this.sceneTitle = this.title);
            }
        }, h = e, c(f, h);
    }
    return a(g, f), d(g, [ {
        key: "onLoad",
        value: function() {
            812 <= wx.getSystemInfoSync().screenHeight && (this.isTall = "tall"), "iPhone X" == wx.getSystemInfoSync().model && (this.tallNav = "tallNav");
            var a = getCurrentPages().length;
            console.log("头", getCurrentPages(), getCurrentPages().slice(-1)[0]), console.log("头", a, this.method);
            var b = getCurrentPages().slice(-1)[0];
            1 >= a && (this.itemType = 0), "pages/index" != b.route && "pages/personalDetail" != b.route && (this.hiddenBack = !1), 
            this.$apply();
        }
    } ]), g;
}(f.default.component);

exports.default = g;