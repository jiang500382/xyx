function a(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var b = require("./util");

exports.default = function c(d) {
    a(this, c), this.cancelBubble = !1, this.cancelable = !1, this.target = null, this.timestampe = Date.now(), 
    this.preventDefault = b.noop, this.stopPropagation = b.noop, this.type = d;
}, module.exports = exports["default"];