Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function() {
    var b = wx.createCanvas();
    b.type = "canvas";
    b.getContext;
    return b.getBoundingClientRect = function() {
        var a = {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
        return a;
    }, b.style = {
        top: "0px",
        left: "0px",
        width: a.innerWidth + "px",
        height: a.innerHeight + "px"
    }, b.addEventListener = function(a, b) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        document.addEventListener(a, b, c);
    }, b.removeEventListener = function(a, b) {
        document.removeEventListener(a, b);
    }, b.dispatchEvent = function() {
        var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        console.log("canvas.dispatchEvent", a.type, a);
    }, Object.defineProperty(b, "clientWidth", {
        enumerable: !0,
        get: function() {
            return a.innerWidth;
        }
    }), Object.defineProperty(b, "clientHeight", {
        enumerable: !0,
        get: function() {
            return a.innerHeight;
        }
    }), b;
};

var a = require("./WindowProperties");

module.exports = exports["default"];