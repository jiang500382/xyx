function a(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var b = function() {
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, 
        c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
    };
}(), c = require("./native.js"), d = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(c), f = {
    map: {},
    mq: [],
    running: [],
    MAX_REQUEST: 5,
    push: function(a) {
        for (a.t = +new Date(); -1 < this.mq.indexOf(a.t) || -1 < this.running.indexOf(a.t); ) a.t += 10 * Math.random() >> 0;
        this.mq.push(a.t), this.map[a.t] = a;
    },
    next: function() {
        var b = this;
        if (0 !== this.mq.length && this.running.length < this.MAX_REQUEST - 1) {
            var a = this.mq.shift(), c = this.map[a], d = c.complete;
            return c.complete = function() {
                for (var e = arguments.length, f = Array(e), g = 0; g < e; g++) f[g] = arguments[g];
                b.running.splice(b.running.indexOf(c.t), 1), delete b.map[c.t], d && d.apply(c, f), 
                b.next();
            }, this.running.push(c.t), wx.request(c);
        }
    },
    request: function(a) {
        return a = a || {}, a = "string" == typeof a ? {
            url: a
        } : a, this.push(a), this.next();
    }
}, e = function() {
    function c() {
        a(this, c), this.$addons = {}, this.$interceptors = {}, this.$pages = {};
    }
    return b(c, [ {
        key: "$init",
        value: function(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            this.$initAPI(a, b.noPromiseAPI), this.$wxapp = getApp();
        }
    }, {
        key: "use",
        value: function(a) {
            for (var b = arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            "string" == typeof a && this[a] ? (this.$addons[a] = 1, this[a](c)) : this.$addons[a.name] = new a(c);
        }
    }, {
        key: "intercept",
        value: function(a, b) {
            this.$interceptors[a] = b;
        }
    }, {
        key: "promisify",
        value: function() {}
    }, {
        key: "requestfix",
        value: function() {}
    }, {
        key: "$initAPI",
        value: function(a, b) {
            var c = this, g = {
                stopRecord: !0,
                getRecorderManager: !0,
                pauseVoice: !0,
                stopVoice: !0,
                pauseBackgroundAudio: !0,
                stopBackgroundAudio: !0,
                getBackgroundAudioManager: !0,
                createAudioContext: !0,
                createInnerAudioContext: !0,
                createVideoContext: !0,
                createCameraContext: !0,
                createMapContext: !0,
                canIUse: !0,
                startAccelerometer: !0,
                stopAccelerometer: !0,
                startCompass: !0,
                stopCompass: !0,
                onBLECharacteristicValueChange: !0,
                onBLEConnectionStateChange: !0,
                hideToast: !0,
                hideLoading: !0,
                showNavigationBarLoading: !0,
                hideNavigationBarLoading: !0,
                navigateBack: !0,
                createAnimation: !0,
                pageScrollTo: !0,
                createSelectorQuery: !0,
                createCanvasContext: !0,
                createContext: !0,
                drawCanvas: !0,
                hideKeyboard: !0,
                stopPullDownRefresh: !0,
                reportAnalytics: !0,
                arrayBufferToBase64: !0,
                base64ToArrayBuffer: !0
            };
            if (b) if (Array.isArray(b)) b.forEach(function(a) {
                return g[a] = !0;
            }); else for (var e in b) g[e] = b[e];
            Object.keys(wx).forEach(function(b) {
                g[b] || "on" === b.substr(0, 2) || /\w+Sync$/.test(b) ? (Object.defineProperty(d.default, b, {
                    get: function() {
                        return function() {
                            for (var a = arguments.length, c = Array(a), d = 0; d < a; d++) c[d] = arguments[d];
                            return wx[b].apply(wx, c);
                        };
                    }
                }), a[b] = d.default[b]) : (Object.defineProperty(d.default, b, {
                    get: function() {
                        return function(d) {
                            if (d = d || {}, c.$interceptors[b] && c.$interceptors[b].config) {
                                var g = c.$interceptors[b].config.call(c, d);
                                if (!1 === g) return c.$addons.promisify ? Promise.reject("aborted by interceptor") : void (d.fail && d.fail("aborted by interceptor"));
                                d = g;
                            }
                            if ("request" === b && (d = "string" == typeof d ? {
                                url: d
                            } : d), "string" == typeof d) return wx[b](d);
                            if (c.$addons.promisify) {
                                var h, i = new Promise(function(g, j) {
                                    var a = {};
                                    [ "fail", "success", "complete" ].forEach(function(f) {
                                        a[f] = d[f], d[f] = function(a) {
                                            c.$interceptors[b] && c.$interceptors[b][f] && (a = c.$interceptors[b][f].call(c, a)), 
                                            "success" === f ? g(a) : "fail" == f && j(a);
                                        };
                                    }), c.$addons.requestfix && "request" === b ? f.request(d) : h = wx[b](d);
                                });
                                return "uploadFile" !== b && "downloadFile" !== b || (i.progress = function(a) {
                                    return h.onProgressUpdate(a), i;
                                }, i.abort = function(a) {
                                    return a && a(), h.abort(), i;
                                }), i;
                            }
                            var a = {};
                            return ([ "fail", "success", "complete" ].forEach(function(f) {
                                a[f] = d[f], d[f] = function(d) {
                                    c.$interceptors[b] && c.$interceptors[b][f] && (d = c.$interceptors[b][f].call(c, d)), 
                                    a[f] && a[f].call(c, d);
                                };
                            }), !c.$addons.requestfix || "request" !== b) ? wx[b](d) : void f.request(d);
                        };
                    }
                }), a[b] = d.default[b]);
            });
        }
    } ]), c;
}();

exports.default = e;