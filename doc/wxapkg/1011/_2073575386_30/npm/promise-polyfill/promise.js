(function() {
    !function(b) {
        function d() {}
        function g(a, b) {
            return function() {
                a.apply(b, arguments);
            };
        }
        function h(a) {
            if (!(this instanceof h)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof a) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], 
            c(a, this);
        }
        function j(a, b) {
            for (;3 === a._state; ) a = a._value;
            return 0 === a._state ? void a._deferreds.push(b) : void (a._handled = !0, h._immediateFn(function() {
                var c = 1 === a._state ? b.onFulfilled : b.onRejected;
                if (null === c) return void (1 === a._state ? i : k)(b.promise, a._value);
                var d;
                try {
                    d = c(a._value);
                } catch (a) {
                    return void k(b.promise, a);
                }
                i(b.promise, d);
            }));
        }
        function i(a, b) {
            try {
                if (b === a) throw new TypeError("A promise cannot be resolved with itself.");
                if (b && ("object" == typeof b || "function" == typeof b)) {
                    var d = b.then;
                    if (b instanceof h) return a._state = 3, a._value = b, void l(a);
                    if ("function" == typeof d) return void c(g(d, b), a);
                }
                a._state = 1, a._value = b, l(a);
            } catch (b) {
                k(a, b);
            }
        }
        function k(a, b) {
            a._state = 2, a._value = b, l(a);
        }
        function l(a) {
            2 === a._state && 0 === a._deferreds.length && h._immediateFn(function() {
                a._handled || h._unhandledRejectionFn(a._value);
            });
            for (var b = 0, c = a._deferreds.length; b < c; b++) j(a, a._deferreds[b]);
            a._deferreds = null;
        }
        function f(a, b, c) {
            this.onFulfilled = "function" == typeof a ? a : null, this.onRejected = "function" == typeof b ? b : null, 
            this.promise = c;
        }
        function c(a, b) {
            var c = !1;
            try {
                a(function(a) {
                    c || (c = !0, i(b, a));
                }, function(a) {
                    c || (c = !0, k(b, a));
                });
            } catch (a) {
                if (c) return;
                c = !0, k(b, a);
            }
        }
        var a = setTimeout;
        h.prototype.catch = function(a) {
            return this.then(null, a);
        }, h.prototype.then = function(a, b) {
            var c = new this.constructor(d);
            return j(this, new f(a, b, c)), c;
        }, h.all = function(a) {
            return new h(function(b, c) {
                function d(a, e) {
                    try {
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var i = e.then;
                            if ("function" == typeof i) return void i.call(e, function(b) {
                                d(a, b);
                            }, c);
                        }
                        g[a] = e, 0 == --h && b(g);
                    } catch (a) {
                        c(a);
                    }
                }
                if (!a || void 0 === a.length) throw new TypeError("Promise.all accepts an array");
                var g = Array.prototype.slice.call(a);
                if (0 === g.length) return b([]);
                for (var h = g.length, f = 0; f < g.length; f++) d(f, g[f]);
            });
        }, h.resolve = function(a) {
            return a && "object" == typeof a && a.constructor === h ? a : new h(function(b) {
                b(a);
            });
        }, h.reject = function(a) {
            return new h(function(b, c) {
                c(a);
            });
        }, h.race = function(a) {
            return new h(function(b, c) {
                for (var d = 0, e = a.length; d < e; d++) a[d].then(b, c);
            });
        }, h._immediateFn = "function" == typeof setImmediate && function(a) {
            setImmediate(a);
        } || function(b) {
            a(b, 0);
        }, h._unhandledRejectionFn = function(a) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a);
        }, h._setImmediateFn = function(a) {
            h._immediateFn = a;
        }, h._setUnhandledRejectionFn = function(a) {
            h._unhandledRejectionFn = a;
        }, "undefined" != typeof module && module.exports ? module.exports = h : b.Promise || (b.Promise = h);
    }(this);
})();