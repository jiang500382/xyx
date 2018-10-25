(function() {
    !function(q) {
        "use strict";
        function z(b, d, f, e) {
            var g = d && d.prototype instanceof B ? d : B, i = Object.create(g.prototype), a = new h(e || []);
            return i._invoke = C(b, f, a), i;
        }
        function A(a, b, c) {
            try {
                return {
                    type: "normal",
                    arg: a.call(b, c)
                };
            } catch (a) {
                return {
                    type: "throw",
                    arg: a
                };
            }
        }
        function B() {}
        function e() {}
        function n() {}
        function i(a) {
            [ "next", "throw", "return" ].forEach(function(b) {
                a[b] = function(a) {
                    return this._invoke(b, a);
                };
            });
        }
        function a(b) {
            function c(e, f, g, i) {
                var a = A(b[e], b, f);
                if ("throw" !== a.type) {
                    var j = a.arg, k = j.value;
                    return k && "object" == typeof k && d.call(k, "__await") ? Promise.resolve(k.__await).then(function(a) {
                        c("next", a, g, i);
                    }, function(a) {
                        c("throw", a, g, i);
                    }) : Promise.resolve(k).then(function(a) {
                        j.value = a, g(j);
                    }, i);
                }
                i(a.arg);
            }
            function a(a, b) {
                function d() {
                    return new Promise(function(d, e) {
                        c(a, b, d, e);
                    });
                }
                return f = f ? f.then(d, d) : d();
            }
            var f;
            this._invoke = a;
        }
        function C(a, d, e) {
            var g = b;
            return function(h, i) {
                if (g === j) throw new Error("Generator is already running");
                if (g === H) {
                    if ("throw" === h) throw i;
                    return p();
                }
                for (e.method = h, e.arg = i; ;) {
                    var l = e.delegate;
                    if (l) {
                        var c = o(l, e);
                        if (c) {
                            if (c === k) continue;
                            return c;
                        }
                    }
                    if ("next" === e.method) e.sent = e._sent = e.arg; else if ("throw" === e.method) {
                        if (g === b) throw g = H, e.arg;
                        e.dispatchException(e.arg);
                    } else "return" === e.method && e.abrupt("return", e.arg);
                    g = j;
                    var m = A(a, d, e);
                    if ("normal" === m.type) {
                        if (g = e.done ? H : E, m.arg === k) continue;
                        return {
                            value: m.arg,
                            done: e.done
                        };
                    }
                    "throw" === m.type && (g = H, e.method = "throw", e.arg = m.arg);
                }
            };
        }
        function o(a, b) {
            var c = a.iterator[b.method];
            if (c === u) {
                if (b.delegate = null, "throw" === b.method) {
                    if (a.iterator.return && (b.method = "return", b.arg = u, o(a, b), "throw" === b.method)) return k;
                    b.method = "throw", b.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return k;
            }
            var d = A(c, a.iterator, b.arg);
            if ("throw" === d.type) return b.method = "throw", b.arg = d.arg, b.delegate = null, 
            k;
            var e = d.arg;
            return e ? e.done ? (b[a.resultName] = e.value, b.next = a.nextLoc, "return" !== b.method && (b.method = "next", 
            b.arg = u), b.delegate = null, k) : e : (b.method = "throw", b.arg = new TypeError("iterator result is not an object"), 
            b.delegate = null, k);
        }
        function c(a) {
            var b = {
                tryLoc: a[0]
            };
            1 in a && (b.catchLoc = a[1]), 2 in a && (b.finallyLoc = a[2], b.afterLoc = a[3]), 
            this.tryEntries.push(b);
        }
        function f(a) {
            var b = a.completion || {};
            b.type = "normal", delete b.arg, a.completion = b;
        }
        function h(a) {
            this.tryEntries = [ {
                tryLoc: "root"
            } ], a.forEach(c, this), this.reset(!0);
        }
        function s(a) {
            if (a) {
                var b = a[m];
                if (b) return b.call(a);
                if ("function" == typeof a.next) return a;
                if (!isNaN(a.length)) {
                    var c = -1, e = function b() {
                        for (;++c < a.length; ) if (d.call(a, c)) return b.value = a[c], b.done = !1, b;
                        return b.value = u, b.done = !0, b;
                    };
                    return e.next = e;
                }
            }
            return {
                next: p
            };
        }
        function p() {
            return {
                value: u,
                done: !0
            };
        }
        var u, r = Object.prototype, d = r.hasOwnProperty, g = "function" == typeof Symbol ? Symbol : {}, m = g.iterator || "@@iterator", t = g.asyncIterator || "@@asyncIterator", w = g.toStringTag || "@@toStringTag", x = "object" == typeof module, D = q.regeneratorRuntime;
        if (D) return void (x && (module.exports = D));
        D = q.regeneratorRuntime = x ? module.exports : {}, D.wrap = z;
        var b = "suspendedStart", E = "suspendedYield", j = "executing", H = "completed", k = {}, G = {};
        G[m] = function() {
            return this;
        };
        var I = Object.getPrototypeOf, J = I && I(I(s([])));
        J && J !== r && d.call(J, m) && (G = J);
        var F = n.prototype = B.prototype = Object.create(G);
        e.prototype = F.constructor = n, n.constructor = e, n[w] = e.displayName = "GeneratorFunction", 
        D.isGeneratorFunction = function(a) {
            var b = "function" == typeof a && a.constructor;
            return !!b && (b === e || "GeneratorFunction" === (b.displayName || b.name));
        }, D.mark = function(a) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(a, n) : (a.__proto__ = n, w in a || (a[w] = "GeneratorFunction")), 
            a.prototype = Object.create(F), a;
        }, D.awrap = function(a) {
            return {
                __await: a
            };
        }, i(a.prototype), a.prototype[t] = function() {
            return this;
        }, D.AsyncIterator = a, D.async = function(b, c, d, e) {
            var f = new a(z(b, c, d, e));
            return D.isGeneratorFunction(c) ? f : f.next().then(function(a) {
                return a.done ? a.value : f.next();
            });
        }, i(F), F[w] = "Generator", F[m] = function() {
            return this;
        }, F.toString = function() {
            return "[object Generator]";
        }, D.keys = function(a) {
            var b = [];
            for (var c in a) b.push(c);
            return b.reverse(), function c() {
                for (;b.length; ) {
                    var d = b.pop();
                    if (d in a) return c.value = d, c.done = !1, c;
                }
                return c.done = !0, c;
            };
        }, D.values = s, h.prototype = {
            constructor: h,
            reset: function(a) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = u, this.done = !1, this.delegate = null, 
                this.method = "next", this.arg = u, this.tryEntries.forEach(f), !a) for (var b in this) "t" === b.charAt(0) && d.call(this, b) && !isNaN(+b.slice(1)) && (this[b] = u);
            },
            stop: function() {
                this.done = !0;
                var a = this.tryEntries[0], b = a.completion;
                if ("throw" === b.type) throw b.arg;
                return this.rval;
            },
            dispatchException: function(b) {
                function f(a, c) {
                    return j.type = "throw", j.arg = b, g.next = a, c && (g.method = "next", g.arg = u), 
                    !!c;
                }
                if (this.done) throw b;
                for (var g = this, e = this.tryEntries.length - 1; 0 <= e; --e) {
                    var h = this.tryEntries[e], j = h.completion;
                    if ("root" === h.tryLoc) return f("end");
                    if (h.tryLoc <= this.prev) {
                        var i = d.call(h, "catchLoc"), k = d.call(h, "finallyLoc");
                        if (i && k) {
                            if (this.prev < h.catchLoc) return f(h.catchLoc, !0);
                            if (this.prev < h.finallyLoc) return f(h.finallyLoc);
                        } else if (!i) {
                            if (!k) throw new Error("try statement without catch or finally");
                            if (this.prev < h.finallyLoc) return f(h.finallyLoc);
                        } else if (this.prev < h.catchLoc) return f(h.catchLoc, !0);
                    }
                }
            },
            abrupt: function(a, b) {
                for (var c, f = this.tryEntries.length - 1; 0 <= f; --f) if (c = this.tryEntries[f], 
                c.tryLoc <= this.prev && d.call(c, "finallyLoc") && this.prev < c.finallyLoc) {
                    var e = c;
                    break;
                }
                e && ("break" === a || "continue" === a) && e.tryLoc <= b && b <= e.finallyLoc && (e = null);
                var g = e ? e.completion : {};
                return g.type = a, g.arg = b, e ? (this.method = "next", this.next = e.finallyLoc, 
                k) : this.complete(g);
            },
            complete: function(a, b) {
                if ("throw" === a.type) throw a.arg;
                return "break" === a.type || "continue" === a.type ? this.next = a.arg : "return" === a.type ? (this.rval = this.arg = a.arg, 
                this.method = "return", this.next = "end") : "normal" === a.type && b && (this.next = b), 
                k;
            },
            finish: function(a) {
                for (var b, c = this.tryEntries.length - 1; 0 <= c; --c) if (b = this.tryEntries[c], 
                b.finallyLoc === a) return this.complete(b.completion, b.afterLoc), f(b), k;
            },
            catch: function(a) {
                for (var b, c = this.tryEntries.length - 1; 0 <= c; --c) if (b = this.tryEntries[c], 
                b.tryLoc === a) {
                    var d = b.completion;
                    if ("throw" === d.type) {
                        var e = d.arg;
                        f(b);
                    }
                    return e;
                }
                throw new Error("illegal catch attempt");
            },
            delegateYield: function(a, b, c) {
                return this.delegate = {
                    iterator: s(a),
                    resultName: b,
                    nextLoc: c
                }, "next" === this.method && (this.arg = u), k;
            }
        };
    }(function() {
        return this;
    }() || Function("return this")());
})();