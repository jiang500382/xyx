function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var b = require("./Canvas"), c = a(b), d = require("./HTMLElement"), e = a(d);

GameGlobal.screencanvas = GameGlobal.screencanvas || new c.default();

var f = GameGlobal.screencanvas, g = f.constructor;

exports.default = g, module.exports = exports["default"];