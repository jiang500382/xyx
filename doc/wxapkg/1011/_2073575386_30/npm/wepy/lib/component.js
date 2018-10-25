function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

function b(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

function d(a, b) {
    return "function" == typeof a[b] ? (console.warn('You are not allowed to define a function "' + b + '" in data.'), 
    0) : -1 === [ "data", "props", "methods", "events", "mixins" ].indexOf(b) ? "$" === b[0] ? (console.warn('"' + b + ': You can not define a property started with "$"'), 
    0) : 1 : (console.warn('"' + b + '" is reserved word, please fix it.'), 0);
}

function c(b, c) {
    var d, e = b.events ? b.events[c] : b.$events[c] ? b.$events[c] : void 0, f = void 0 === e ? "undefined" : g(e);
    if ("string" === f) {
        var h = b.methods && b.methods[e];
        "function" == typeof h && (d = h);
    } else ("function" === f || Array.isArray(e)) && (d = e);
    return d;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function() {
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, 
        c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
    };
}(), g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
    return typeof a;
} : function(a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
}, f = require("./event.js"), h = a(f), i = require("./util.js"), j = a(i), k = {
    check: function(a, b) {
        return a === String ? "string" == typeof b : a === Number ? "number" == typeof b : a === Boolean ? "boolean" == typeof b : a === Function ? "function" == typeof b : a === Object ? "object" === (void 0 === b ? "undefined" : g(b)) : a === Array ? "[object Array]" === toString.call(b) : b instanceof a;
    },
    build: function(a) {
        var b = {};
        return "string" == typeof a ? b[a] = {} : "[object Array]" === toString.call(a) ? a.forEach(function(a) {
            b[a] = {};
        }) : Object.keys(a).forEach(function(c) {
            b[c] = "function" == typeof a[c] ? {
                type: [ a[c] ]
            } : "[object Array]" === toString.call(a[c]) ? {
                type: a[c]
            } : a[c], b[c].type && "[object Array]" !== toString.call(b[c].type) && (b[c].type = [ b[c].type ]);
        }), b;
    },
    valid: function(a, b, c) {
        var d = this, e = !1;
        if (a[b]) {
            if (a[b].type) return a[b].type.some(function(a) {
                return d.check(a, c);
            });
            e = !0;
        }
        return e;
    },
    getValue: function(a, b, c, d) {
        var e;
        return e = void 0 !== c && this.valid(a, b, c) ? c : "function" == typeof a[b].default ? a[b].default() : a[b].default, 
        a[b].coerce ? a[b].coerce.call(d, e) : e;
    }
}, l = function() {
    function a() {
        b(this, a), this.$com = {}, this.$events = {}, this.$mixins = [], this.$isComponent = !0, 
        this.$prefix = "", this.$mappingProps = {}, this.data = {}, this.methods = {};
    }
    return e(a, [ {
        key: "$init",
        value: function(b, l, m) {
            var i = this;
            this.$wxpage = b, this.$isComponent && (this.$root = l || this.$root, this.$parent = m || this.$parent, 
            this.$wxapp = this.$root.$parent.$wxapp), this.props && (this.props = k.build(this.props));
            var e, n, o, p, f, c = {}, a = this.props, q = !1;
            if (void 0 === this.$initData ? this.$initData = j.default.$copy(this.data, !0) : this.data = j.default.$copy(this.$initData, !0), 
            this.$props) for (n in this.$props) for (p in this.$props[n]) /\.sync$/.test(p) && (this.$mappingProps[this.$props[n][p]] || (this.$mappingProps[this.$props[n][p]] = {}), 
            this.$mappingProps[this.$props[n][p]][n] = p.substring(7, p.length - 5));
            if (a) for (n in a) d(this, n) && (o = void 0, m && m.$props && m.$props[this.$name] && (o = m.$props[this.$name][n], 
            p = m.$props[this.$name]["v-bind:" + n + ".once"] || m.$props[this.$name]["v-bind:" + n + ".sync"], 
            p ? "object" === (void 0 === p ? "undefined" : g(p)) ? function() {
                a[n].repeat = p.for, a[n].item = p.item, a[n].index = p.index, a[n].key = p.key, 
                a[n].value = p.value, q = !0;
                var b = p.for, c = m;
                b.split(".").forEach(function(a) {
                    c = c ? c[a] : {};
                }), c && ("object" === (void 0 === c ? "undefined" : g(c)) || "string" == typeof c) && (f = Object.keys(c)[0]), 
                i.$mappingProps[n] || (i.$mappingProps[n] = {}), i.$mappingProps[n].parent = {
                    mapping: p.for,
                    from: n
                };
            }() : (o = m[p], a[n].twoWay && (this.$mappingProps[n] || (this.$mappingProps[n] = {}), 
            this.$mappingProps[n].parent = p)) : "object" === (void 0 === o ? "undefined" : g(o)) && void 0 !== o.value && (this.data[n] = o.value)), 
            this.data[n] || a[n].repeat || (o = k.getValue(a, n, o, this), this.data[n] = o));
            for (e in "function" == typeof this.data && (this.data = this.data.apply(this.data)), 
            this.data) d(this, e) && (c["" + this.$prefix + e] = this.data[e], this[e] = this.data[e]);
            if (this.$data = j.default.$copy(this.data, !0), q && void 0 !== f && this.$setIndex(f), 
            this.computed) for (e in this.computed) if (d(this, e)) {
                var h = this.computed[e];
                c["" + this.$prefix + e] = h.call(this), this[e] = j.default.$copy(c["" + this.$prefix + e], !0);
            }
            this.setData(c);
            var r = Object.getOwnPropertyNames(this.$com);
            r.length && r.forEach(function(a) {
                i.$com[a].$init(i.getWxPage(), l, i);
            });
        }
    }, {
        key: "$initMixins",
        value: function() {
            var a = this;
            this.mixins ? "function" == typeof this.mixins && (this.mixins = [ this.mixins ]) : this.mixins = [], 
            this.mixins.forEach(function(b) {
                var c = new b();
                c.$init(a), a.$mixins.push(c);
            });
        }
    }, {
        key: "$onLoad",
        value: function() {
            for (var a = this, b = arguments.length, c = Array(b), d = 0; d < b; d++) c[d] = arguments[d];
            [].concat(this.$mixins, this).forEach(function(b) {
                b.onLoad && b.onLoad.apply(a, c);
            });
            var e = Object.getOwnPropertyNames(this.$com);
            e.length && e.forEach(function(b) {
                var c = a.$com[b];
                c.$onLoad.call(c);
            });
        }
    }, {
        key: "$onUnload",
        value: function() {
            for (var a = this, b = arguments.length, c = Array(b), d = 0; d < b; d++) c[d] = arguments[d];
            var e = Object.getOwnPropertyNames(this.$com);
            e.length && e.forEach(function(b) {
                var c = a.$com[b];
                c.$onUnload.call(c);
            }), [].concat(this.$mixins, this).forEach(function(b) {
                b.onUnload && b.onUnload.apply(a, c);
            });
        }
    }, {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onUnload",
        value: function() {}
    }, {
        key: "setData",
        value: function(b, c) {
            if ("string" == typeof b) {
                if (c) {
                    var d = {};
                    d[b] = c, b = d;
                } else {
                    var f = {};
                    f[b] = this.data["" + b], b = f;
                }
                return this.$wxpage.setData(b);
            }
            var g = null, h = new RegExp("^" + this.$prefix.replace(/\$/g, "\\$"), "ig");
            for (g in b) {
                var a = g.replace(h, "");
                this.$data[a] = j.default.$copy(b[g], !0), j.default.isImmutable(b[g]) && (b[g] = b[g].toJS()), 
                void 0 === b[g] && delete b[g];
            }
            return "function" == typeof c ? this.$root.$wxpage.setData(b, c) : this.$root.$wxpage.setData(b);
        }
    }, {
        key: "getWxPage",
        value: function() {
            return this.$wxpage;
        }
    }, {
        key: "getCurrentPages",
        value: function(a) {
            function b() {
                return a.apply(this, arguments);
            }
            return b.toString = function() {
                return a.toString();
            }, b;
        }(function() {
            return getCurrentPages();
        })
    }, {
        key: "$setIndex",
        value: function(b) {
            var c = this;
            this.$index = b;
            var d, e, a, h = this.props, i = this.$parent;
            if (h) {
                for (d in h) e = void 0, i && i.$props && i.$props[this.$name] && (e = i.$props[this.$name][d], 
                (a = i.$props[this.$name]["v-bind:" + d + ".once"] || i.$props[this.$name]["v-bind:" + d + ".sync"]) && "object" === (void 0 === a ? "undefined" : g(a)) && function() {
                    var g = a.for, k = i;
                    if (0 === g.indexOf("[")) {
                        var l = [];
                        g = g.substr(1, g.length - 2).trim(), g.split(",").forEach(function(a) {
                            var b = i;
                            a.trim().split(".").forEach(function(a) {
                                b = b ? b[a] : {};
                            }), l.push(b);
                        }), k = l;
                    } else g.split(".").forEach(function(a) {
                        k = k ? k[a] : {};
                    });
                    b = Array.isArray(k) ? +b : b, e = h[d].value === h[d].item ? k[b] : h[d].value === h[d].index ? b : h[d].value === h[d].key ? b : i[h[d].value], 
                    c.$index = b, c.data[d] = e, c[d] = e, c.$data[d] = j.default.$copy(c[d], !0);
                }());
                for (d in this.$com) this.$com[d].$index = void 0;
            }
        }
    }, {
        key: "$getComponent",
        value: function(a) {
            var b = this;
            if ("string" == typeof a) {
                if (-1 === a.indexOf("/")) return this.$com[a];
                if ("/" === a) return this.$parent;
                a.split("/").forEach(function(c, d) {
                    0 === d ? a = "" === c ? b.$root : "." === c ? b : ".." === c ? b.$parent : b.$getComponent(c) : c && (a = a.$com[c]);
                });
            }
            return "object" === (void 0 === a ? "undefined" : g(a)) ? a : null;
        }
    }, {
        key: "$invoke",
        value: function(b, c) {
            if (!(b = this.$getComponent(b))) throw new Error("Invalid path: " + b);
            for (var d = b.methods ? b.methods[c] : "", e = arguments.length, f = Array(2 < e ? e - 2 : 0), g = 2; g < e; g++) f[g - 2] = arguments[g];
            if ("function" == typeof d) {
                var a = new h.default("", this, "invoke"), j = d.apply(b, f.concat(a));
                return b.$apply(), j;
            }
            if ("function" == typeof (d = b[c])) return d.apply(b, f);
            throw new Error("Invalid method: " + c);
        }
    }, {
        key: "$broadcast",
        value: function(b) {
            for (var d = arguments.length, f = Array(1 < d ? d - 1 : 0), e = 1; e < d; e++) f[e - 1] = arguments[e];
            for (var g, i = this, j = "string" == typeof b ? new h.default(b, this, "broadcast") : j, a = [ i ]; a.length && j.active; ) for (var k in g = a.shift(), 
            g.$com) if ("break" === function(d) {
                d = g.$com[d], a.push(d);
                var e = c(d, b);
                return (e && d.$apply(function() {
                    e.apply(d, f.concat(j));
                }), !j.active) ? "break" : void (k = d);
            }(k)) break;
        }
    }, {
        key: "$emit",
        value: function(b) {
            for (var d = this, e = arguments.length, g = Array(1 < e ? e - 1 : 0), i = 1; i < e; i++) g[i - 1] = arguments[i];
            var j = this, a = this, k = new h.default(b, a, "emit");
            if (g = g.concat(k), this.$parent && this.$parent.$events && this.$parent.$events[this.$name]) {
                var l = this.$parent.$events[this.$name]["v-on:" + b];
                if (l && this.$parent.methods) {
                    var m = this.$parent.methods[l];
                    if ("function" == typeof m) return void this.$parent.$apply(function() {
                        m.apply(d.$parent, g);
                    });
                    throw new Error("Invalid method from emit, component is " + this.$parent.$name + ", method is " + l + ". Make sure you defined it already.\n");
                }
            }
            for (;j && void 0 !== j.$isComponent && k.active; ) !function() {
                var a = j, d = c(a, b);
                d && ("function" == typeof d ? a.$apply(function() {
                    d.apply(a, g);
                }) : Array.isArray(d) && (d.forEach(function(b) {
                    b.apply(a, g);
                }), a.$apply())), j = a.$parent;
            }();
        }
    }, {
        key: "$on",
        value: function(a, b) {
            var c = this;
            if ("string" == typeof a) (this.$events[a] || (this.$events[a] = [])).push(b); else if (Array.isArray(a)) a.forEach(function(a) {
                c.$on(a, b);
            }); else if ("object" === (void 0 === a ? "undefined" : g(a))) for (var d in a) this.$on(d, a[d]);
            return this;
        }
    }, {
        key: "$once",
        value: function(a, b) {
            var c = this, d = function d() {
                c.$off(a, d), b.apply(c, arguments);
            };
            d.fn = b, this.$on(a, d);
        }
    }, {
        key: "$off",
        value: function(a, b) {
            var c = this;
            if (void 0 === a) this.$events = {}; else if (!("string" == typeof a)) Array.isArray(a) && a.forEach(function(a) {
                c.$off(a, b);
            }); else if (b) {
                for (var d = this.$events[a], e = d.length; e--; ) if (b === d[e] || b === d[e].fn) {
                    d.splice(e, 1);
                    break;
                }
            } else this.$events[a] = [];
            return this;
        }
    }, {
        key: "$apply",
        value: function(a) {
            "function" == typeof a ? (a.call(this), this.$apply()) : this.$$phase ? this.$$phase = "$apply" : this.$digest();
        }
    }, {
        key: "$digest",
        value: function() {
            var b, c = this, d = this.$data;
            for (this.$$phase = "$digest", this.$$dc = 0; this.$$phase; ) {
                if (3 <= ++this.$$dc) throw new Error("Can not call $apply in $apply process");
                var e = {};
                if (this.computed) for (b in this.computed) {
                    var f = this.computed[b], h = f.call(this);
                    j.default.$isEqual(this[b], h) || (e[this.$prefix + b] = h, this[b] = j.default.$copy(h, !0));
                }
                for (b in d) if (!j.default.$isEqual(this[b], d[b])) {
                    if (this.watch && this.watch[b] && ("function" == typeof this.watch[b] ? this.watch[b].call(this, this[b], d[b]) : "string" == typeof this.watch[b] && "function" == typeof this.methods[b] && this.methods[b].call(this, this[b], d[b])), 
                    e[this.$prefix + b] = this[b], this.data[b] = this[b], d[b] = j.default.$copy(this[b], !0), 
                    this.$repeat && this.$repeat[b]) {
                        var a = this.$repeat[b];
                        this.$com[a.com].data[a.props] = this[b], this.$com[a.com].$setIndex(0), this.$com[a.com].$apply();
                    }
                    this.$mappingProps[b] && Object.keys(this.$mappingProps[b]).forEach(function(a) {
                        var d = c.$mappingProps[b][a];
                        "object" === (void 0 === d ? "undefined" : g(d)) ? c.$parent.$apply() : "parent" !== a || j.default.$isEqual(c.$parent.$data[d], c[b]) ? "parent" === a || j.default.$isEqual(c.$com[a].$data[d], c[b]) || (c.$com[a][d] = c[b], 
                        c.$com[a].data[d] = c[b], c.$com[a].$apply()) : (c.$parent[d] = c[b], c.$parent.data[d] = c[b], 
                        c.$parent.$apply());
                    });
                }
                if (Object.keys(e).length) this.setData(e, function() {
                    if (c.$$nextTick) {
                        var a = c.$$nextTick;
                        c.$$nextTick = null, a.promise ? a() : a.call(c);
                    }
                }); else if (this.$$nextTick) {
                    var i = this.$$nextTick;
                    this.$$nextTick = null, i.promise ? i() : i.call(this);
                }
                this.$$phase = "$apply" === this.$$phase && "$digest";
            }
        }
    }, {
        key: "$nextTick",
        value: function(a) {
            var b = this;
            return void 0 === a ? new Promise(function(a) {
                b.$$nextTick = function() {
                    a();
                }, b.$$nextTick.promise = !0;
            }) : void (this.$$nextTick = a);
        }
    } ]), a;
}();

exports.default = l;