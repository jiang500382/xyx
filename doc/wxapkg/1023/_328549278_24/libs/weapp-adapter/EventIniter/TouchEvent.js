function a(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

function b(a) {
    return function(b) {
        var c = new d(a);
        c.touches = b.touches, c.targetTouches = Array.prototype.slice.call(b.touches), 
        c.changedTouches = b.changedTouches, c.timeStamp = b.timeStamp, document.dispatchEvent(c);
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var c = require("../util/index.js"), d = function b(d) {
    a(this, b), this.touches = [], this.targetTouches = [], this.changedTouches = [], 
    this.preventDefault = c.noop, this.stopPropagation = c.noop, this.type = d, this.target = window.canvas, 
    this.currentTarget = window.canvas;
};

exports.default = d, wx.onTouchStart(b("touchstart")), wx.onTouchMove(b("touchmove")), 
wx.onTouchEnd(b("touchend")), wx.onTouchCancel(b("touchcancel")), module.exports = exports["default"];