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
}(), e = require("./../../npm/wepy/lib/wepy.js"), f = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(e), g = function(f) {
    function g() {
        var d, e, f, h;
        b(this, g);
        for (var j = arguments.length, i = Array(j), k = 0; k < j; k++) i[k] = arguments[k];
        return e = f = c(this, (d = g.__proto__ || Object.getPrototypeOf(g)).call.apply(d, [ this ].concat(i))), 
        f.data = {
            cfg: [ {
                id: 0,
                name: "奖金榜",
                item: "赚钱攻略"
            }, {
                id: 1,
                name: "胜局榜",
                item: "我的荣耀"
            } ],
            nowCfg: null,
            time: 1,
            selected: 0
        }, f.props = {
            selected: {
                twoWay: !0
            }
        }, f.events = {
            selected1: function(a, b) {
                this.selected = a, this.time = b;
            }
        }, f.methods = {
            _typeTab: function(a) {
                a = parseInt(a), console.log(a);
                var b = "";
                a || (b = "week"), this.$emit("selected", this.selected, b);
            },
            selected: function() {
                var a = this;
                wx.showActionSheet({
                    itemList: [ "奖金榜", "胜局榜" ],
                    success: function(b) {
                        var c = !!b.tapIndex;
                        a.selected = !c, a.nowCfg = a.cfg[b.tapIndex], a.$emit("selected", !c, a.time), 
                        a.$apply();
                    }
                });
            },
            nvgPage: function(a) {
                var b = a ? "/pages/gameglory" : "/pages/moneystrategy";
                wx.navigateTo({
                    url: b
                });
            }
        }, h = e, c(f, h);
    }
    return a(g, f), d(g, [ {
        key: "onLoad",
        value: function() {
            this.nowCfg = this.cfg[0], console.log(this), this.$apply();
        }
    } ]), g;
}(f.default.component);

exports.default = g;