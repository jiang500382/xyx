function a(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

function b(a, b) {
    if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return b && ("object" == typeof b || "function" == typeof b) ? b : a;
}

function c(a, b) {
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
}(e), g = function(e) {
    function f() {
        return a(this, f), b(this, (f.__proto__ || Object.getPrototypeOf(f)).apply(this, arguments));
    }
    return c(f, e), d(f, [ {
        key: "animateClickBtn",
        value: function() {
            var a = wx.createAnimation({
                timingFunction: "linear"
            }), b = this.height * (750 / this.width) + 500;
            this.animateCM = a, this.animateCP = a, this.animateCN = a, this.animateVM = a, 
            this.animateVP = a, this.animateVN = a, this.animateBtn = a, this.GameScene = a, 
            this.animateVtoC("animateVN", 1, 0, 55, 500), this.animateVtoC("animateVP", 1, 268, 55, 500), 
            this.animateVtoC("animateVM", 1, 536, 55, 500), this.animateNulltoC("animateCN", .001, 0, 250, 0), 
            this.animateNulltoC("animateCP", .001, 0, 250, 0), this.animateNulltoC("animateCM", .001, 0, 250, 0), 
            this.animateBtnTo("animateBtn", 0, 0), this.animatePlayGame("GameScene", b, 0);
        }
    }, {
        key: "changeScene",
        value: function(a) {
            wx.setStorageSync("scene", a);
            var b = wx.createAnimation({
                timingFunction: "linear"
            });
            this.animateCM = b, this.animateCP = b, this.animateCN = b;
            var c = this.sceneRank(a);
            this.animateChangeScene("animateCN", c.left.top, c.left.left), this.animateChangeScene("animateCP", c.middle.top, c.middle.left), 
            this.animateChangeScene("animateCM", c.right.top, c.right.left);
        }
    }, {
        key: "animateVtoC",
        value: function(b, c, d, e, f) {
            this[b].scale(c).top(d * (this.width / 750)).left(e * (this.width / 750)).step({
                duration: 500,
                timingFunction: "linear",
                delay: f
            }), this[b] = this[b].export(), this.$apply();
        }
    }, {
        key: "animateNulltoC",
        value: function(b, c, d, e, f) {
            this[b].scale(c).top(d * (this.width / 750)).left(e * (this.width / 750)).step({
                duration: 500,
                timingFunction: "linear",
                delay: f
            }), this[b] = this[b].export(), this.$apply();
        }
    }, {
        key: "animateBtnTo",
        value: function(a, b, c) {
            this[a].scale(1).top(456 * (this.width / 750)).left(310 * (this.width / 750)).opacity(b).step({
                duration: 500,
                timingFunction: "linear",
                delay: c
            }), this[a] = this[a].export(), this.$apply();
        }
    }, {
        key: "animatePlayGame",
        value: function(a, b, c) {
            this[a].scale(1).top(b * (this.width / 750)).left(0 * (this.width / 750)).opacity(1).step({
                duration: 500,
                timingFunction: "linear",
                delay: c
            }), this[a].scale(1).top((b - 10) * (this.width / 750)).left(0 * (this.width / 750)).opacity(1).step({
                duration: 100,
                timingFunction: "ease"
            }), this[a].scale(1).top(b * (this.width / 750)).left(0 * (this.width / 750)).opacity(1).step({
                duration: 100,
                timingFunction: "ease"
            }), this[a] = this[a].export(), this.$apply();
        }
    }, {
        key: "animateChangeScene",
        value: function(a, b, c) {
            this[a].scale(1).top(b * (this.width / 750)).left(c * (this.width / 750)).step({
                duration: 200,
                timingFunction: "linear",
                delay: 0
            }), this[a] = this[a].export(), this.$apply();
        }
    }, {
        key: "sceneRank",
        value: function(a) {
            if ("left" == a) {
                this.left = "sceneMiddle", this.middle = "sceneRight", this.right = "sceneLeft", 
                this.currentScene = 1;
                var b = this.ordinaryList[0].limit.split("-");
                return this.eligible = this.myBeans >= b[0] && this.myBeans <= b[1], this.ordinaryParams.p = {
                    matchTypeId: this.ordinaryList[0].id
                }, this.myBeans < b[0] ? this.tip = 1 : this.myBeans > b[1] && (this.tip = 2), this.$apply(), 
                {
                    left: {
                        top: 0,
                        left: 245
                    },
                    middle: {
                        top: 33,
                        left: 524
                    },
                    right: {
                        top: 33,
                        left: 21
                    }
                };
            }
            return "middle" == a ? (this.middle = "sceneMiddle", this.right = "sceneRight", 
            this.left = "sceneLeft", this.currentScene = 2, this.eligible = this.myBeans >= this.ordinaryList[1].limit, 
            this.tip = this.myBeans >= this.ordinaryList[1].limit ? 0 : 1, this.ordinaryParams.p = {
                matchTypeId: this.ordinaryList[1].id
            }, this.$apply(), {
                left: {
                    top: 33,
                    left: 21
                },
                middle: {
                    top: 0,
                    left: 245
                },
                right: {
                    top: 33,
                    left: 524
                }
            }) : "right" == a ? (this.right = "sceneMiddle", this.left = "sceneRight", this.middle = "sceneLeft", 
            this.currentScene = 3, this.eligible = this.myBeans >= this.ordinaryList[2].limit, 
            this.tip = this.myBeans >= this.ordinaryList[2].limit ? 0 : 1, this.ordinaryParams.p = {
                matchTypeId: this.ordinaryList[2].id
            }, this.$apply(), {
                left: {
                    top: 33,
                    left: 524
                },
                middle: {
                    top: 33,
                    left: 21
                },
                right: {
                    top: 0,
                    left: 245
                }
            }) : void 0;
        }
    } ]), f;
}(f.default.mixin);

exports.default = g;