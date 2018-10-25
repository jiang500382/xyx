function t(t) {
    var r = this, e = f.call(arguments, 1);
    return new Promise(function(o, c) {
        function i(n) {
            var r;
            try {
                r = t.next(n);
            } catch (t) {
                return c(t);
            }
            f(r);
        }
        function a(n) {
            var r;
            try {
                r = t.throw(n);
            } catch (t) {
                return c(t);
            }
            f(r);
        }
        function f(t) {
            if (t.done) return o(t.value);
            var e = n.call(r, t.value);
            return e && u(e) ? e.then(i, a) : a(new TypeError('You may only yield a function, promise, generator, array, or object, but the following object was passed: "' + String(t.value) + '"'));
        }
        if ("function" == typeof t && (t = t.apply(r, e)), !t || "function" != typeof t.next) return o(t);
        i();
    });
}

function n(n) {
    return n ? u(n) ? n : i(n) || c(n) ? t.call(this, n) : "function" == typeof n ? r.call(this, n) : Array.isArray(n) ? e.call(this, n) : a(n) ? o.call(this, n) : n : n;
}

function r(t) {
    var n = this;
    return new Promise(function(r, e) {
        t.call(n, function(t, n) {
            if (t) return e(t);
            arguments.length > 2 && (n = f.call(arguments, 1)), r(n);
        });
    });
}

function e(t) {
    return Promise.all(t.map(n, this));
}

function o(t) {
    for (var r = new t.constructor(), e = Object.keys(t), o = [], c = 0; c < e.length; c++) {
        var i = e[c], a = n.call(this, t[i]);
        a && u(a) ? function(t, n) {
            r[n] = void 0, o.push(t.then(function(t) {
                r[n] = t;
            }));
        }(a, i) : r[i] = t[i];
    }
    return Promise.all(o).then(function() {
        return r;
    });
}

function u(t) {
    return "function" == typeof t.then;
}

function c(t) {
    return "function" == typeof t.next && "function" == typeof t.throw;
}

function i(t) {
    var n = t.constructor;
    return !!n && ("GeneratorFunction" === n.name || "GeneratorFunction" === n.displayName || c(n.prototype));
}

function a(t) {
    return Object == t.constructor;
}

var f = Array.prototype.slice;

module.exports = t.default = t.co = t, t.wrap = function(n) {
    function r() {
        return t.call(this, n.apply(this, arguments));
    }
    return r.__generatorFunction__ = n, r;
};