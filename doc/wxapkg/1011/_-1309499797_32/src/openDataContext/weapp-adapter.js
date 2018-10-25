var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

!function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports;
    }
    var n = {};
    t.m = e, t.c = n, t.p = "", t(0);
}([ function(e, t, n) {
    var o = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t;
    }(n(1)), r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(n(4)), i = GameGlobal;
    GameGlobal.__isAdapterInjected || (GameGlobal.__isAdapterInjected = !0, function() {
        o.addEventListener = function(e, t) {
            o.document.addEventListener(e, t);
        }, o.removeEventListener = function(e, t) {
            o.document.removeEventListener(e, t);
        }, o.canvas && (o.canvas.addEventListener = o.addEventListener, o.canvas.removeEventListener = o.removeEventListener), 
        i.sharedCanvas && (sharedCanvas.__proto__.__proto__ = new r.default("canvas"), sharedCanvas.addEventListener = o.addEventListener, 
        sharedCanvas.removeEventListener = o.removeEventListener);
        var e = wx.getSystemInfoSync().platform;
        if ("undefined" == typeof __devtoolssubcontext && "devtools" === e) {
            for (var t in o) {
                var n = Object.getOwnPropertyDescriptor(i, t);
                n && !0 !== n.configurable || Object.defineProperty(window, t, {
                    value: o[t]
                });
            }
            for (var a in o.document) {
                var u = Object.getOwnPropertyDescriptor(i.document, a);
                u && !0 !== u.configurable || Object.defineProperty(i.document, a, {
                    value: o.document[a]
                });
            }
            window.parent = window;
        } else {
            for (var c in o) i[c] = o[c];
            i.window = o, window = i, window.top = window.parent = window;
        }
    }());
}, function(e, t, n) {
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.cancelAnimationFrame = t.requestAnimationFrame = t.clearInterval = t.clearTimeout = t.setInterval = t.setTimeout = t.canvas = t.location = t.localStorage = t.HTMLElement = t.FileReader = t.Audio = t.Image = t.WebSocket = t.XMLHttpRequest = t.navigator = t.document = void 0;
    var r = n(2);
    Object.keys(r).forEach(function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                return r[e];
            }
        });
    });
    var i = n(3);
    Object.keys(i).forEach(function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                return i[e];
            }
        });
    });
    var a = o(n(9)), u = n(17), c = o(n(10)), l = o(n(18)), s = o(n(19)), f = o(n(20)), d = o(n(11)), p = o(n(12)), h = o(n(21)), y = o(n(4)), v = o(n(22)), b = o(n(23));
    t.document = c.default, t.navigator = l.default, t.XMLHttpRequest = s.default, t.WebSocket = f.default, 
    t.Image = d.default, t.Audio = p.default, t.FileReader = h.default, t.HTMLElement = y.default, 
    t.localStorage = v.default, t.location = b.default;
    var g = (0, u.isSubContext)() ? void 0 : new a.default();
    t.canvas = g, t.setTimeout = setTimeout, t.setInterval = setInterval, t.clearTimeout = clearTimeout, 
    t.clearInterval = clearInterval, t.requestAnimationFrame = requestAnimationFrame, 
    t.cancelAnimationFrame = cancelAnimationFrame;
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = wx.getSystemInfoSync(), o = n.screenWidth, r = n.screenHeight, i = n.devicePixelRatio, a = t.innerWidth = o, u = t.innerHeight = r;
    t.devicePixelRatio = i, t.screen = {
        availWidth: a,
        availHeight: u
    }, t.performance = {
        now: function() {
            return Date.now() / 1e3;
        }
    }, t.ontouchstart = null, t.ontouchmove = null, t.ontouchend = null;
}, function(t, n, o) {
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(t, n) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || "object" != (void 0 === n ? "undefined" : e(n)) && "function" != typeof n ? t : n;
    }
    function a(t, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === n ? "undefined" : e(n)));
        t.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.HTMLCanvasElement = n.HTMLImageElement = void 0;
    var u = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(o(4));
    n.HTMLImageElement = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "img"));
        }
        return a(t, u.default), t;
    }(), n.HTMLCanvasElement = function(e) {
        function t() {
            return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "canvas"));
        }
        return a(t, u.default), t;
    }();
}, function(t, n, o) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), i = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(o(5)), a = o(8), u = o(2), c = function(t) {
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            !function(e, t) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
            }(this);
            var o = function(t, n) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || "object" != (void 0 === n ? "undefined" : e(n)) && "function" != typeof n ? t : n;
            }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            return o.className = "", o.childern = [], o.style = {
                width: u.innerWidth + "px",
                height: u.innerHeight + "px"
            }, o.insertBefore = a.noop, o.innerHTML = "", o.tagName = t.toUpperCase(), o;
        }
        return function(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === n ? "undefined" : e(n)));
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
        }(n, i.default), r(n, [ {
            key: "setAttribute",
            value: function(e, t) {
                this[e] = t;
            }
        }, {
            key: "getAttribute",
            value: function(e) {
                return this[e];
            }
        }, {
            key: "getBoundingClientRect",
            value: function() {
                return {
                    top: 0,
                    left: 0,
                    width: u.innerWidth,
                    height: u.innerHeight
                };
            }
        }, {
            key: "focus",
            value: function() {}
        }, {
            key: "clientWidth",
            get: function() {
                var e = parseInt(this.style.fontSize, 10) * this.innerHTML.length;
                return Number.isNaN(e) ? 0 : e;
            }
        }, {
            key: "clientHeight",
            get: function() {
                var e = parseInt(this.style.fontSize, 10);
                return Number.isNaN(e) ? 0 : e;
            }
        } ]), n;
    }();
    n.default = c;
}, function(t, n, o) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(o(6)), i = function(t) {
        function n() {
            !function(e, t) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
            }(this);
            var t = function(t, n) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || "object" != (void 0 === n ? "undefined" : e(n)) && "function" != typeof n ? t : n;
            }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            return t.className = "", t.children = [], t;
        }
        return function(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === n ? "undefined" : e(n)));
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
        }(n, r.default), n;
    }();
    n.default = i;
}, function(t, n, o) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), i = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(o(7)), a = function(t) {
        function n() {
            !function(e, t) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
            }(this);
            var t = function(t, n) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || "object" != (void 0 === n ? "undefined" : e(n)) && "function" != typeof n ? t : n;
            }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            return t.childNodes = [], t;
        }
        return function(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === n ? "undefined" : e(n)));
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
        }(n, i.default), r(n, [ {
            key: "appendChild",
            value: function(e) {
                if (!(e instanceof n)) throw new TypeError("Failed to executed 'appendChild' on 'Node': parameter 1 is not of type 'Node'.");
                this.childNodes.push(e);
            }
        }, {
            key: "cloneNode",
            value: function() {
                var e = Object.create(this);
                return Object.assign(e, this), e;
            }
        }, {
            key: "removeChild",
            value: function(e) {
                var t = this.childNodes.findIndex(function(t) {
                    return t === e;
                });
                return t > -1 ? this.childNodes.splice(t, 1) : null;
            }
        } ]), n;
    }();
    n.default = a;
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), o = new WeakMap(), r = function() {
        function e() {
            !function(t, n) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this), o.set(this, {});
        }
        return n(e, [ {
            key: "addEventListener",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = o.get(this);
                r || (r = {}, o.set(this, r)), r[e] || (r[e] = []), r[e].push(t), n.capture && console.warn("EventTarget.addEventListener: options.capture is not implemented."), 
                n.once && console.warn("EventTarget.addEventListener: options.once is not implemented."), 
                n.passive && console.warn("EventTarget.addEventListener: options.passive is not implemented.");
            }
        }, {
            key: "removeEventListener",
            value: function(e, t) {
                var n = o.get(this)[e];
                if (n && n.length > 0) for (var r = n.length; r--; r > 0) if (n[r] === t) {
                    n.splice(r, 1);
                    break;
                }
            }
        }, {
            key: "dispatchEvent",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = o.get(this)[e.type];
                if (t) for (var n = 0; n < t.length; n++) t[n](e);
            }
        } ]), e;
    }();
    t.default = r;
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.noop = function() {}, t.isSubContext = function() {
        return "undefined" != typeof GameGlobal && !0 === GameGlobal.__isSubContext;
    };
}, function(e, t, n) {
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        var e = wx.createCanvas();
        return e.type = "canvas", e.__proto__.__proto__ = new r.default("canvas"), e.getContext, 
        e.getBoundingClientRect = function() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }, e;
    }, n(3);
    var r = o(n(4));
    o(n(10));
}, function(e, t, n) {
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t;
    }(n(1)), i = o(n(4)), a = o(n(11)), u = o(n(12)), c = o(n(9));
    n(15);
    var l = {}, s = {
        readyState: "complete",
        visibilityState: "visible",
        documentElement: r,
        hidden: !1,
        style: {},
        location: r.location,
        ontouchstart: null,
        ontouchmove: null,
        ontouchend: null,
        head: new i.default("head"),
        body: new i.default("body"),
        createElement: function(e) {
            return "canvas" === e ? new c.default() : "audio" === e ? new u.default() : "img" === e ? new a.default() : new i.default(e);
        },
        getElementById: function(e) {
            return e === r.canvas.id ? r.canvas : null;
        },
        getElementsByTagName: function(e) {
            return "head" === e ? [ s.head ] : "body" === e ? [ s.body ] : "canvas" === e ? [ r.canvas ] : [];
        },
        querySelector: function(e) {
            return "head" === e ? s.head : "body" === e ? s.body : "canvas" === e ? r.canvas : e === "#" + r.canvas.id ? r.canvas : null;
        },
        querySelectorAll: function(e) {
            return "head" === e ? [ s.head ] : "body" === e ? [ s.body ] : "canvas" === e ? [ r.canvas ] : [];
        },
        addEventListener: function(e, t) {
            l[e] || (l[e] = []), l[e].push(t);
        },
        removeEventListener: function(e, t) {
            var n = l[e];
            if (n && n.length > 0) for (var o = n.length; o--; o > 0) if (n[o] === t) {
                n.splice(o, 1);
                break;
            }
        },
        dispatchEvent: function(e) {
            var t = l[e.type];
            if (t) for (var n = 0; n < t.length; n++) t[n](e);
        }
    };
    t.default = s;
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        return wx.createImage();
    };
}, function(t, n, o) {
    function r(t, n) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || "object" != (void 0 === n ? "undefined" : e(n)) && "function" != typeof n ? t : n;
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), a = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(o(13)), u = o(8), c = 0, l = 1, s = 2, f = 3, d = 4, p = new WeakMap(), h = new WeakMap(), y = (new WeakMap(), 
    new WeakMap(), function(t) {
        function n(e) {
            !function(e, t) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
            }(this);
            var t = r(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            if (t.HAVE_NOTHING = c, t.HAVE_METADATA = l, t.HAVE_CURRENT_DATA = s, t.HAVE_FUTURE_DATA = f, 
            t.HAVE_ENOUGH_DATA = d, t.readyState = c, (0, u.isSubContext)()) return console.warn("HTMLAudioElement is not supported in SubContext."), 
            r(t);
            h.set(t, "");
            var o = wx.createInnerAudioContext();
            return p.set(t, o), o.onCanplay(function() {
                t.dispatchEvent({
                    type: "load"
                }), t.dispatchEvent({
                    type: "loadend"
                }), t.dispatchEvent({
                    type: "canplay"
                }), t.dispatchEvent({
                    type: "canplaythrough"
                }), t.dispatchEvent({
                    type: "loadedmetadata"
                }), t.readyState = s;
            }), o.onPlay(function() {
                t.dispatchEvent({
                    type: "play"
                });
            }), o.onPause(function() {
                t.dispatchEvent({
                    type: "pause"
                });
            }), o.onEnded(function() {
                t.dispatchEvent({
                    type: "ended"
                }), t.readyState = d;
            }), o.onError(function() {
                t.dispatchEvent({
                    type: "error"
                });
            }), e && (p.get(t).src = e), t;
        }
        return function(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === n ? "undefined" : e(n)));
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
        }(n, a.default), i(n, [ {
            key: "load",
            value: function() {
                console.warn("HTMLAudioElement.load() is not implemented.");
            }
        }, {
            key: "play",
            value: function() {
                (0, u.isSubContext)() || p.get(this).play();
            }
        }, {
            key: "pause",
            value: function() {
                (0, u.isSubContext)() || p.get(this).pause();
            }
        }, {
            key: "canPlayType",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return "string" != typeof e ? "" : e.indexOf("audio/mpeg") > -1 || e.indexOf("audio/mp4") ? "probably" : "";
            }
        }, {
            key: "cloneNode",
            value: function() {
                var e = new n();
                return (0, u.isSubContext)() || (e.loop = p.get(this).loop, e.autoplay = p.get(this).loop, 
                e.src = this.src), e;
            }
        }, {
            key: "currentTime",
            get: function() {
                return (0, u.isSubContext)() ? 0 : p.get(this).currentTime;
            },
            set: function(e) {
                (0, u.isSubContext)() || p.get(this).seek(e);
            }
        }, {
            key: "src",
            get: function() {
                return h.get(this);
            },
            set: function(e) {
                h.set(this, e), (0, u.isSubContext)() || (p.get(this).src = e);
            }
        }, {
            key: "loop",
            get: function() {
                return !(0, u.isSubContext)() && p.get(this).loop;
            },
            set: function(e) {
                (0, u.isSubContext)() || (p.get(this).loop = e);
            }
        }, {
            key: "autoplay",
            get: function() {
                return !(0, u.isSubContext)() && p.get(this).autoplay;
            },
            set: function(e) {
                (0, u.isSubContext)() || (p.get(this).autoplay = e);
            }
        }, {
            key: "paused",
            get: function() {
                return !(0, u.isSubContext)() && p.get(this).paused;
            }
        } ]), n;
    }());
    n.default = y;
}, function(t, n, o) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(o(14)), i = function(t) {
        function n() {
            return function(e, t) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
            }(this), function(t, n) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || "object" != (void 0 === n ? "undefined" : e(n)) && "function" != typeof n ? t : n;
            }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, "audio"));
        }
        return function(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === n ? "undefined" : e(n)));
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
        }(n, r.default), n;
    }();
    n.default = i;
}, function(t, n, o) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), i = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(o(4)), a = function(t) {
        function n(t) {
            return function(e, t) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
            }(this), function(t, n) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || "object" != (void 0 === n ? "undefined" : e(n)) && "function" != typeof n ? t : n;
            }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t));
        }
        return function(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === n ? "undefined" : e(n)));
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
        }(n, i.default), r(n, [ {
            key: "addTextTrack",
            value: function() {}
        }, {
            key: "captureStream",
            value: function() {}
        }, {
            key: "fastSeek",
            value: function() {}
        }, {
            key: "load",
            value: function() {}
        }, {
            key: "pause",
            value: function() {}
        }, {
            key: "play",
            value: function() {}
        } ]), n;
    }();
    n.default = a;
}, function(e, t, n) {
    n(16);
}, function(e, t, n) {
    function o(e) {
        return function(t) {
            var n = new u(e);
            n.touches = t.touches, n.targetTouches = Array.prototype.slice.call(t.touches), 
            n.changedTouches = t.changedTouches, n.timeStamp = t.timeStamp, i.default.dispatchEvent(n);
        };
    }
    var r = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t;
    }(n(1)), i = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(n(10)), a = n(8), u = function e(t) {
        !function(t, n) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this), this.target = r.canvas, this.currentTarget = r.canvas, this.touches = [], 
        this.targetTouches = [], this.changedTouches = [], this.preventDefault = a.noop, 
        this.stopPropagation = a.noop, this.type = t;
    };
    wx.onTouchStart(o("touchstart")), wx.onTouchMove(o("touchmove")), wx.onTouchEnd(o("touchend")), 
    wx.onTouchCancel(o("touchcancel"));
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.noop = function() {}, t.isSubContext = function() {
        return "undefined" != typeof GameGlobal && !0 === GameGlobal.__isSubContext;
    };
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(8), r = {
        platform: wx.getSystemInfoSync().platform,
        language: "zh-cn",
        appVersion: "5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
        userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN",
        onLine: !0,
        geolocation: {
            getCurrentPosition: o.noop,
            watchPosition: o.noop,
            clearWatch: o.noop
        }
    };
    t.default = r;
}, function(e, t) {
    function n(e) {
        if ("function" == typeof this["on" + e]) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
            this["on" + e].apply(this, n);
        }
    }
    function o(e) {
        this.readyState = e, n.call(this, "readystatechange");
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), i = new WeakMap(), a = new WeakMap(), u = new WeakMap(), c = new WeakMap(), l = new WeakMap(), s = function() {
        function e() {
            !function(t, n) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this), this.onabort = null, this.onerror = null, this.onload = null, this.onloadstart = null, 
            this.onprogress = null, this.ontimeout = null, this.onloadend = null, this.onreadystatechange = null, 
            this.readyState = 0, this.response = null, this.responseText = null, this.responseType = "", 
            this.responseXML = null, this.status = 0, this.statusText = "", this.upload = {}, 
            this.withCredentials = !1, u.set(this, {
                "content-type": "application/x-www-form-urlencoded"
            }), c.set(this, {});
        }
        return r(e, [ {
            key: "abort",
            value: function() {
                var e = l.get(this);
                e && e.abort();
            }
        }, {
            key: "getAllResponseHeaders",
            value: function() {
                var e = c.get(this);
                return Object.keys(e).map(function(t) {
                    return t + ": " + e[t];
                }).join("\n");
            }
        }, {
            key: "getResponseHeader",
            value: function(e) {
                return c.get(this)[e];
            }
        }, {
            key: "open",
            value: function(t, n) {
                a.set(this, t), i.set(this, n), o.call(this, e.OPENED);
            }
        }, {
            key: "overrideMimeType",
            value: function() {}
        }, {
            key: "send",
            value: function() {
                var t = this, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                if (this.readyState !== e.OPENED) throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
                wx.request({
                    data: r,
                    url: i.get(this),
                    method: a.get(this),
                    header: u.get(this),
                    responseType: this.responseType,
                    success: function(r) {
                        var i = r.data, a = r.statusCode, u = r.header;
                        if ("string" != typeof i && !(i instanceof ArrayBuffer)) try {
                            i = JSON.stringify(i);
                        } catch (e) {
                            i = i;
                        }
                        if (t.status = a, c.set(t, u), n.call(t, "loadstart"), o.call(t, e.HEADERS_RECEIVED), 
                        o.call(t, e.LOADING), t.response = i, i instanceof ArrayBuffer) {
                            t.responseText = "";
                            for (var l = new Uint8Array(i), s = l.byteLength, f = 0; f < s; f++) t.responseText += String.fromCharCode(l[f]);
                        } else t.responseText = i;
                        o.call(t, e.DONE), n.call(t, "load"), n.call(t, "loadend");
                    },
                    fail: function(e) {
                        var o = e.errMsg;
                        -1 !== o.indexOf("abort") ? n.call(t, "abort") : n.call(t, "error", o), n.call(t, "loadend");
                    }
                });
            }
        }, {
            key: "setRequestHeader",
            value: function(e, t) {
                var n = u.get(this);
                n[e] = t, u.set(this, n);
            }
        } ]), e;
    }();
    s.UNSEND = 0, s.OPENED = 1, s.HEADERS_RECEIVED = 2, s.LOADING = 3, s.DONE = 4, t.default = s;
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), r = n(8), i = new WeakMap(), a = function() {
        function e(t) {
            var n = this, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            if (function(t, n) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this), this.binaryType = "", this.bufferedAmount = 0, this.extensions = "", this.onclose = null, 
            this.onerror = null, this.onmessage = null, this.onopen = null, this.protocol = "", 
            this.readyState = 3, (0, r.isSubContext)()) throw new Error("WebSocket is not supported in SubContext.");
            if ("string" != typeof t || !/(^ws:\/\/)|(^wss:\/\/)/.test(t)) throw new TypeError("Failed to construct 'WebSocket': The URL '" + t + "' is invalid");
            this.url = t, this.readyState = e.CONNECTING;
            var a = wx.connectSocket({
                url: t,
                protocols: Array.isArray(o) ? o : [ o ]
            });
            return i.set(this, a), a.onClose(function(t) {
                n.readyState = e.CLOSED, "function" == typeof n.onclose && n.onclose(t);
            }), a.onMessage(function(e) {
                "function" == typeof n.onmessage && n.onmessage(e);
            }), a.onOpen(function() {
                n.readyState = e.OPEN, "function" == typeof n.onopen && n.onopen();
            }), a.onError(function(e) {
                "function" == typeof n.onerror && n.onerror(new Error(e.errMsg));
            }), this;
        }
        return o(e, [ {
            key: "close",
            value: function(t, n) {
                this.readyState = e.CLOSING, i.get(this).close({
                    code: t,
                    reason: n
                });
            }
        }, {
            key: "send",
            value: function(e) {
                if ("string" != typeof e && !(e instanceof ArrayBuffer)) throw new TypeError("Failed to send message: The data " + e + " is invalid");
                i.get(this).send({
                    data: e
                });
            }
        } ]), e;
    }();
    a.CONNECTING = 0, a.OPEN = 1, a.CLOSING = 2, a.CLOSED = 3, t.default = a;
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
        };
    }(), r = n(8), i = function() {
        function e() {
            !function(t, n) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this);
        }
        return o(e, [ {
            key: "construct",
            value: function() {
                if ((0, r.isSubContext)()) throw new Error("FileReader is not supported in SubContext.");
            }
        } ]), e;
    }();
    t.default = i;
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = {
        get length() {
            return wx.getStorageInfoSync().keys.length;
        },
        key: function(e) {
            return wx.getStorageInfoSync().keys[e];
        },
        getItem: function(e) {
            return wx.getStorageSync(e);
        },
        setItem: function(e, t) {
            return wx.setStorageSync(e, t);
        },
        removeItem: function(e) {
            wx.removeStorageSync(e);
        },
        clear: function() {
            wx.clearStorageSync();
        }
    }, r = {}, i = {
        get length() {
            return Object.keys(r).length;
        },
        key: function(e) {
            return Object.keys(r)[e];
        },
        getItem: function(e) {
            return r[e];
        },
        setItem: function(e, t) {
            r[e] = t;
        },
        removeItem: function(e) {
            delete r[e];
        },
        clear: function() {
            r = {};
        }
    }, a = (0, n(8).isSubContext)() ? i : o;
    t.default = a;
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        href: "game.js",
        reload: function() {}
    };
} ]);