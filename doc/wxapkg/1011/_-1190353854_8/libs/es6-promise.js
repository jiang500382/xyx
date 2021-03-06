var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function(e, n) {
    "object" === ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : e.ES6Promise = n();
}(void 0, function() {
    function e(e) {
        var n = void 0 === e ? "undefined" : t(e);
        return null !== e && ("object" === n || "function" === n);
    }
    function n(t) {
        return "function" == typeof t;
    }
    function r() {
        return void 0 !== F ? function() {
            F(i);
        } : o();
    }
    function o() {
        var t = setTimeout;
        return function() {
            return t(i, 1);
        };
    }
    function i() {
        for (var t = 0; t < k; t += 2) (0, W[t])(W[t + 1]), W[t] = void 0, W[t + 1] = void 0;
        k = 0;
    }
    function u(t, e) {
        var n = this, r = new this.constructor(c);
        void 0 === r[B] && T(r);
        var o = n._state;
        if (o) {
            var i = arguments[o - 1];
            q(function() {
                return S(o, r, i, n._result);
            });
        } else w(n, r, t, e);
        return r;
    }
    function s(e) {
        var n = this;
        if (e && "object" === (void 0 === e ? "undefined" : t(e)) && e.constructor === n) return e;
        var r = new n(c);
        return y(r, e), r;
    }
    function c() {}
    function f() {
        return new TypeError("You cannot resolve a promise with itself");
    }
    function a() {
        return new TypeError("A promises callback cannot return that same promise.");
    }
    function l(t) {
        try {
            return t.then;
        } catch (t) {
            return J.error = t, J;
        }
    }
    function h(t, e, n, r) {
        try {
            t.call(e, n, r);
        } catch (t) {
            return t;
        }
    }
    function p(t, e, n) {
        q(function(t) {
            var r = !1, o = h(n, e, function(n) {
                r || (r = !0, e !== n ? y(t, n) : m(t, n));
            }, function(e) {
                r || (r = !0, b(t, e));
            }, "Settle: " + (t._label || " unknown promise"));
            !r && o && (r = !0, b(t, o));
        }, t);
    }
    function d(t, e) {
        e._state === H ? m(t, e._result) : e._state === I ? b(t, e._result) : w(e, void 0, function(e) {
            return y(t, e);
        }, function(e) {
            return b(t, e);
        });
    }
    function v(t, e, r) {
        e.constructor === t.constructor && r === u && e.constructor.resolve === s ? d(t, e) : r === J ? (b(t, J.error), 
        J.error = null) : void 0 === r ? m(t, e) : n(r) ? p(t, e, r) : m(t, e);
    }
    function y(t, n) {
        t === n ? b(t, f()) : e(n) ? v(t, n, l(n)) : m(t, n);
    }
    function _(t) {
        t._onerror && t._onerror(t._result), g(t);
    }
    function m(t, e) {
        t._state === G && (t._result = e, t._state = H, 0 !== t._subscribers.length && q(g, t));
    }
    function b(t, e) {
        t._state === G && (t._state = I, t._result = e, q(_, t));
    }
    function w(t, e, n, r) {
        var o = t._subscribers, i = o.length;
        t._onerror = null, o[i] = e, o[i + H] = n, o[i + I] = r, 0 === i && t._state && q(g, t);
    }
    function g(t) {
        var e = t._subscribers, n = t._state;
        if (0 !== e.length) {
            for (var r = void 0, o = void 0, i = t._result, u = 0; u < e.length; u += 3) r = e[u], 
            o = e[u + n], r ? S(n, r, o, i) : o(i);
            t._subscribers.length = 0;
        }
    }
    function A(t, e) {
        try {
            return t(e);
        } catch (t) {
            return J.error = t, J;
        }
    }
    function S(t, e, r, o) {
        var i = n(r), u = void 0, s = void 0, c = void 0, f = void 0;
        if (i) {
            if ((u = A(r, o)) === J ? (f = !0, s = u.error, u.error = null) : c = !0, e === u) return void b(e, a());
        } else u = o, c = !0;
        e._state !== G || (i && c ? y(e, u) : f ? b(e, s) : t === H ? m(e, u) : t === I && b(e, u));
    }
    function j(t, e) {
        try {
            e(function(e) {
                y(t, e);
            }, function(e) {
                b(t, e);
            });
        } catch (e) {
            b(t, e);
        }
    }
    function E() {
        return Q++;
    }
    function T(t) {
        t[B] = Q++, t._state = void 0, t._result = void 0, t._subscribers = [];
    }
    function x() {
        return new Error("Array Methods must be provided an Array");
    }
    function M() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
    }
    function P() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }
    var C = void 0, O = C = Array.isArray ? Array.isArray : function(t) {
        return "[object Array]" === Object.prototype.toString.call(t);
    }, k = 0, F = void 0, Y = void 0, q = function(t, e) {
        W[k] = t, W[k + 1] = e, 2 === (k += 2) && (Y ? Y(i) : z());
    }, D = "undefined" != typeof window ? window : void 0, K = D || {}, L = K.MutationObserver || K.WebKitMutationObserver, N = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), U = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, W = new Array(1e3), z = void 0;
    z = N ? function() {
        return process.nextTick(i);
    } : L ? function() {
        var t = 0, e = new L(i), n = document.createTextNode("");
        return e.observe(n, {
            characterData: !0
        }), function() {
            n.data = t = ++t % 2;
        };
    }() : U ? function() {
        var t = new MessageChannel();
        return t.port1.onmessage = i, function() {
            return t.port2.postMessage(0);
        };
    }() : void 0 === D && "function" == typeof require ? function() {
        try {
            var t = Function("return this")().require("vertx");
            return F = t.runOnLoop || t.runOnContext, r();
        } catch (t) {
            return o();
        }
    }() : o();
    var B = Math.random().toString(36).substring(2), G = void 0, H = 1, I = 2, J = {
        error: null
    }, Q = 0, R = function() {
        function t(t, e) {
            this._instanceConstructor = t, this.promise = new t(c), this.promise[B] || T(this.promise), 
            O(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 
            0 === this.length ? m(this.promise, this._result) : (this.length = this.length || 0, 
            this._enumerate(e), 0 === this._remaining && m(this.promise, this._result))) : b(this.promise, x());
        }
        return t.prototype._enumerate = function(t) {
            for (var e = 0; this._state === G && e < t.length; e++) this._eachEntry(t[e], e);
        }, t.prototype._eachEntry = function(t, e) {
            var n = this._instanceConstructor, r = n.resolve;
            if (r === s) {
                var o = l(t);
                if (o === u && t._state !== G) this._settledAt(t._state, e, t._result); else if ("function" != typeof o) this._remaining--, 
                this._result[e] = t; else if (n === V) {
                    var i = new n(c);
                    v(i, t, o), this._willSettleAt(i, e);
                } else this._willSettleAt(new n(function(e) {
                    return e(t);
                }), e);
            } else this._willSettleAt(r(t), e);
        }, t.prototype._settledAt = function(t, e, n) {
            var r = this.promise;
            r._state === G && (this._remaining--, t === I ? b(r, n) : this._result[e] = n), 
            0 === this._remaining && m(r, this._result);
        }, t.prototype._willSettleAt = function(t, e) {
            var n = this;
            w(t, void 0, function(t) {
                return n._settledAt(H, e, t);
            }, function(t) {
                return n._settledAt(I, e, t);
            });
        }, t;
    }(), V = function() {
        function t(e) {
            this[B] = E(), this._result = this._state = void 0, this._subscribers = [], c !== e && ("function" != typeof e && M(), 
            this instanceof t ? j(this, e) : P());
        }
        return t.prototype.catch = function(t) {
            return this.then(null, t);
        }, t.prototype.finally = function(t) {
            var e = this, n = e.constructor;
            return e.then(function(e) {
                return n.resolve(t()).then(function() {
                    return e;
                });
            }, function(e) {
                return n.resolve(t()).then(function() {
                    throw e;
                });
            });
        }, t;
    }();
    return V.prototype.then = u, V.all = function(t) {
        return new R(this, t).promise;
    }, V.race = function(t) {
        var e = this;
        return new e(O(t) ? function(n, r) {
            for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(n, r);
        } : function(t, e) {
            return e(new TypeError("You must pass an array to race."));
        });
    }, V.resolve = s, V.reject = function(t) {
        var e = new this(c);
        return b(e, t), e;
    }, V._setScheduler = function(t) {
        Y = t;
    }, V._setAsap = function(t) {
        q = t;
    }, V._asap = q, V.polyfill = function() {
        var t = void 0;
        if ("undefined" != typeof global) t = global; else if ("undefined" != typeof self) t = self; else try {
            t = Function("return this")();
        } catch (t) {
            throw new Error("polyfill failed because global object is unavailable in this environment");
        }
        var e = t.Promise;
        if (e) {
            var n = null;
            try {
                n = Object.prototype.toString.call(e.resolve());
            } catch (t) {}
            if ("[object Promise]" === n && !e.cast) return;
        }
        t.Promise = V;
    }, V.Promise = V, V;
});