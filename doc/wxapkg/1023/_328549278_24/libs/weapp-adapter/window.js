function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.cancelAnimationFrame = exports.requestAnimationFrame = exports.clearInterval = exports.clearTimeout = exports.setInterval = exports.setTimeout = exports.canvas = exports.location = exports.localStorage = exports.DeviceMotionEvent = exports.MouseEvent = exports.TouchEvent = exports.WebGLRenderingContext = exports.HTMLVideoElement = exports.HTMLAudioElement = exports.HTMLMediaElement = exports.HTMLCanvasElement = exports.HTMLImageElement = exports.HTMLElement = exports.FileReader = exports.Audio = exports.ImageBitmap = exports.Image = exports.WebSocket = exports.XMLHttpRequest = exports.navigator = void 0;

var b = require("./EventIniter/index.js");

Object.defineProperty(exports, "TouchEvent", {
    enumerable: !0,
    get: function() {
        return b.TouchEvent;
    }
}), Object.defineProperty(exports, "MouseEvent", {
    enumerable: !0,
    get: function() {
        return b.MouseEvent;
    }
}), Object.defineProperty(exports, "DeviceMotionEvent", {
    enumerable: !0,
    get: function() {
        return b.DeviceMotionEvent;
    }
});

var c = require("./WindowProperties");

Object.keys(c).forEach(function(a) {
    "default" === a || "__esModule" === a || Object.defineProperty(exports, a, {
        enumerable: !0,
        get: function() {
            return c[a];
        }
    });
});

var d = require("./Canvas"), e = a(d), f = require("./navigator"), g = a(f), h = require("./XMLHttpRequest"), i = a(h), j = require("./WebSocket"), k = a(j), l = require("./Image"), m = a(l), n = require("./ImageBitmap"), o = a(n), p = require("./Audio"), q = a(p), r = require("./FileReader"), s = a(r), t = require("./HTMLElement"), u = a(t), v = require("./HTMLImageElement"), w = a(v), x = require("./HTMLCanvasElement"), y = a(x), z = require("./HTMLMediaElement"), A = a(z), B = require("./HTMLAudioElement"), C = a(B), D = require("./HTMLVideoElement"), E = a(D), F = require("./WebGLRenderingContext"), G = a(F), H = require("./localStorage"), I = a(H), J = require("./location"), K = a(J);

exports.navigator = g.default, exports.XMLHttpRequest = i.default, exports.WebSocket = k.default, 
exports.Image = m.default, exports.ImageBitmap = o.default, exports.Audio = q.default, 
exports.FileReader = s.default, exports.HTMLElement = u.default, exports.HTMLImageElement = w.default, 
exports.HTMLCanvasElement = y.default, exports.HTMLMediaElement = A.default, exports.HTMLAudioElement = C.default, 
exports.HTMLVideoElement = E.default, exports.WebGLRenderingContext = G.default, 
exports.localStorage = I.default, exports.location = K.default, GameGlobal.screencanvas = GameGlobal.screencanvas || new e.default();

var L = GameGlobal.screencanvas;

exports.canvas = L, exports.setTimeout = setTimeout, exports.setInterval = setInterval, 
exports.clearTimeout = clearTimeout, exports.clearInterval = clearInterval, exports.requestAnimationFrame = requestAnimationFrame, 
exports.cancelAnimationFrame = cancelAnimationFrame;