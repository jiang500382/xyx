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

function d(a) {
    if ("function" == typeof this["on" + a]) {
        for (var b = arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        this["on" + a].apply(this, c);
    }
}

function e(a) {
    this.readyState = a, d.call(this, "readystatechange");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var f, g, h = function() {
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, 
        c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
    };
}(), i = require("./EventTarget.js"), j = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(i), k = new WeakMap(), l = new WeakMap(), m = new WeakMap(), n = new WeakMap(), o = new WeakMap(), p = (g = f = function(f) {
    function g() {
        a(this, g);
        var c = b(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this));
        return c.onabort = null, c.onerror = null, c.onload = null, c.onloadstart = null, 
        c.onprogress = null, c.ontimeout = null, c.onloadend = null, c.onreadystatechange = null, 
        c.readyState = 0, c.response = null, c.responseText = null, c.responseType = "", 
        c.responseXML = null, c.status = 0, c.statusText = "", c.upload = {}, c.withCredentials = !1, 
        m.set(c, {
            "content-type": "application/x-www-form-urlencoded"
        }), n.set(c, {}), c;
    }
    return c(g, f), h(g, [ {
        key: "abort",
        value: function() {
            var a = o.get(this);
            a && a.abort();
        }
    }, {
        key: "getAllResponseHeaders",
        value: function() {
            var a = n.get(this);
            return Object.keys(a).map(function(b) {
                return b + ": " + a[b];
            }).join("\n");
        }
    }, {
        key: "getResponseHeader",
        value: function(a) {
            return n.get(this)[a];
        }
    }, {
        key: "open",
        value: function(a, b) {
            l.set(this, a), k.set(this, b), e.call(this, g.OPENED);
        }
    }, {
        key: "overrideMimeType",
        value: function() {}
    }, {
        key: "send",
        value: function() {
            var a = this, b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
            if (this.readyState !== g.OPENED) throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED."); else wx.request({
                data: b,
                url: k.get(this),
                method: l.get(this),
                header: m.get(this),
                responseType: this.responseType,
                success: function(b) {
                    var c = b.data, f = b.statusCode, h = b.header;
                    if ("string" != typeof c && !(c instanceof ArrayBuffer)) try {
                        c = JSON.stringify(c);
                    } catch (a) {
                        c = c;
                    }
                    if (a.status = f, n.set(a, h), d.call(a, "loadstart"), e.call(a, g.HEADERS_RECEIVED), 
                    e.call(a, g.LOADING), a.response = c, c instanceof ArrayBuffer) {
                        a.responseText = "";
                        for (var j = new Uint8Array(c), k = j.byteLength, l = 0; l < k; l++) a.responseText += String.fromCharCode(j[l]);
                    } else a.responseText = c;
                    e.call(a, g.DONE), d.call(a, "load"), d.call(a, "loadend");
                },
                fail: function(b) {
                    var c = b.errMsg;
                    -1 === c.indexOf("abort") ? d.call(a, "error", c) : d.call(a, "abort"), d.call(a, "loadend");
                }
            });
        }
    }, {
        key: "setRequestHeader",
        value: function(a, b) {
            var c = m.get(this);
            c[a] = b, m.set(this, c);
        }
    }, {
        key: "addEventListener",
        value: function(a, b) {
            if ("function" == typeof b) {
                var c = this;
                this["on" + a] = function(a) {
                    b.call(c, a);
                };
            }
        }
    } ]), g;
}(j.default), f.UNSEND = 0, f.OPENED = 1, f.HEADERS_RECEIVED = 2, f.LOADING = 3, 
f.DONE = 4, g);

exports.default = p, module.exports = exports["default"];