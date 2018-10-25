function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var b = require("./app.js"), c = a(b), d = require("./page.js"), e = a(d), f = require("./component.js"), g = a(f), h = require("./event.js"), i = a(h), j = require("./base.js"), k = a(j), l = require("./util.js"), m = a(l), n = require("./mixin.js"), o = a(n);

exports.default = {
    event: i.default,
    app: c.default,
    component: g.default,
    page: e.default,
    mixin: o.default,
    $createApp: k.default.$createApp,
    $createPage: k.default.$createPage,
    $isEmpty: m.default.$isEmpty,
    $isEqual: m.default.$isEqual,
    $isDeepEqual: m.default.$isDeepEqual,
    $has: m.default.$has,
    $extend: m.default.$extend,
    $isPlainObject: m.default.$isPlainObject,
    $copy: m.default.$copy
};