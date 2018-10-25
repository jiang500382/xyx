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
}(), e = require("./HTMLAudioElement"), f = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(e), g = 0, h = 2, i = 4, j = new WeakMap(), k = new WeakMap(), l = new WeakMap(), m = new WeakMap(), n = function(e) {
    function f(c) {
        a(this, f);
        var d = b(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this));
        d.HAVE_NOTHING = g, d.HAVE_METADATA = 1, d.HAVE_CURRENT_DATA = h, d.HAVE_FUTURE_DATA = 3, 
        d.HAVE_ENOUGH_DATA = i, d.readyState = g, k.set(d, "");
        var e = wx.createInnerAudioContext();
        return j.set(d, e), e.onCanplay(function() {
            d.dispatchEvent({
                type: "load"
            }), d.dispatchEvent({
                type: "loadend"
            }), d.dispatchEvent({
                type: "canplay"
            }), d.dispatchEvent({
                type: "canplaythrough"
            }), d.dispatchEvent({
                type: "loadedmetadata"
            }), d.readyState = h;
        }), e.onPlay(function() {
            d._paused = j.get(d).paused, d.dispatchEvent({
                type: "play"
            });
        }), e.onPause(function() {
            d._paused = j.get(d).paused, d.dispatchEvent({
                type: "pause"
            });
        }), e.onEnded(function() {
            d._paused = j.get(d).paused, !1 === j.get(d).loop && d.dispatchEvent({
                type: "ended"
            }), d.readyState = i;
        }), e.onError(function() {
            d._paused = j.get(d).paused, d.dispatchEvent({
                type: "error"
            });
        }), c && (j.get(d).src = c), d._paused = e.paused, d._volume = e.volume, d._muted = !1, 
        d;
    }
    return c(f, e), d(f, [ {
        key: "load",
        value: function() {
            console.warn("HTMLAudioElement.load() is not implemented.");
        }
    }, {
        key: "play",
        value: function() {
            j.get(this).play();
        }
    }, {
        key: "pause",
        value: function() {
            j.get(this).pause();
        }
    }, {
        key: "destroy",
        value: function() {
            j.get(this).destroy();
        }
    }, {
        key: "canPlayType",
        value: function() {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
            return "string" == typeof a ? -1 < a.indexOf("audio/mpeg") || a.indexOf("audio/mp4") ? "probably" : "" : "";
        }
    }, {
        key: "cloneNode",
        value: function() {
            var a = new f();
            return a.loop = j.get(this).loop, a.autoplay = j.get(this).autoplay, a.src = this.src, 
            a;
        }
    }, {
        key: "currentTime",
        get: function() {
            return j.get(this).currentTime;
        },
        set: function(a) {
            j.get(this).seek(a);
        }
    }, {
        key: "duration",
        get: function() {
            return j.get(this).duration;
        }
    }, {
        key: "src",
        get: function() {
            return k.get(this);
        },
        set: function(a) {
            k.set(this, a), j.get(this).src = a;
        }
    }, {
        key: "loop",
        get: function() {
            return j.get(this).loop;
        },
        set: function(a) {
            j.get(this).loop = a;
        }
    }, {
        key: "autoplay",
        get: function() {
            return j.get(this).autoplay;
        },
        set: function(a) {
            j.get(this).autoplay = a;
        }
    }, {
        key: "paused",
        get: function() {
            return this._paused;
        }
    }, {
        key: "volume",
        get: function() {
            return this._volume;
        },
        set: function(a) {
            this._volume = a, this._muted || (j.get(this).volume = a);
        }
    }, {
        key: "muted",
        get: function() {
            return this._muted;
        },
        set: function(a) {
            this._muted = a, j.get(this).volume = a ? 0 : this._volume;
        }
    } ]), f;
}(f.default);

exports.default = n, module.exports = exports["default"];