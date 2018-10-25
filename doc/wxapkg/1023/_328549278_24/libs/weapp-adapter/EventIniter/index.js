function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.MouseEvent = exports.TouchEvent = void 0;

var b = require("./TouchEvent"), c = a(b), d = require("./MouseEvent"), e = a(d);

exports.TouchEvent = c.default, exports.MouseEvent = e.default;