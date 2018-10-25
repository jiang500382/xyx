function a(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var b, c, d = function() {
    function a(a, b) {
        for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, 
        c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
    return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
    };
}(), e = new WeakMap(), f = (c = b = function() {
    function b(c) {
        var d = this, f = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
        if (a(this, b), this.binaryType = "", this.bufferedAmount = 0, this.extensions = "", 
        this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, 
        this.protocol = "", this.readyState = 3, "string" != typeof c || !/(^ws:\/\/)|(^wss:\/\/)/.test(c)) throw new TypeError("Failed to construct 'WebSocket': The URL '" + c + "' is invalid");
        this.url = c, this.readyState = b.CONNECTING;
        var g = wx.connectSocket({
            url: c,
            protocols: Array.isArray(f) ? f : [ f ]
        });
        return e.set(this, g), g.onClose(function(a) {
            d.readyState = b.CLOSED, "function" == typeof d.onclose && d.onclose(a);
        }), g.onMessage(function(a) {
            "function" == typeof d.onmessage && d.onmessage(a);
        }), g.onOpen(function() {
            d.readyState = b.OPEN, "function" == typeof d.onopen && d.onopen();
        }), g.onError(function(a) {
            "function" == typeof d.onerror && d.onerror(new Error(a.errMsg));
        }), this;
    }
    return d(b, [ {
        key: "close",
        value: function(a, c) {
            this.readyState = b.CLOSING;
            var d = e.get(this);
            d.close({
                code: a,
                reason: c
            });
        }
    }, {
        key: "send",
        value: function(a) {
            if ("string" != typeof a && !(a instanceof ArrayBuffer)) throw new TypeError("Failed to send message: The data " + a + " is invalid");
            var b = e.get(this);
            b.send({
                data: a
            });
        }
    } ]), b;
}(), b.CONNECTING = 0, b.OPEN = 1, b.CLOSING = 2, b.CLOSED = 3, c);

exports.default = f, module.exports = exports["default"];