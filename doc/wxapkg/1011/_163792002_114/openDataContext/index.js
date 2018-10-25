function t(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function e(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

var n = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
    }
    return t;
}, a = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e;
    };
}(), s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function(t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var a = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(a.exports, a, a.exports, e), a.l = !0, a.exports;
    }
    var i = {};
    e.m = t, e.c = i, e.d = function(t, i, n) {
        e.o(t, i) || Object.defineProperty(t, i, {
            enumerable: !0,
            get: n
        });
    }, e.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, e.t = function(t, i) {
        if (1 & i && (t = e(t)), 8 & i) return t;
        if (4 & i && "object" == (void 0 === t ? "undefined" : s(t)) && t && t.__esModule) return t;
        var n = Object.create(null);
        if (e.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & i && "string" != typeof t) for (var a in t) e.d(n, a, function(e) {
            return t[e];
        }.bind(null, a));
        return n;
    }, e.n = function(t) {
        var i = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return e.d(i, "a", i), i;
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "", e(e.s = 0);
}([ function(s, o, h) {
    function r(t) {
        this._events = this._events || {}, this.__mixinEvent__ = !0;
    }
    function l(t) {
        var e = this;
        this.__mixinTouchEvent__ || (this.__mixinTouchEvent__ = !0, this.__mixinEvent__ || this.mixin(r), 
        this.touchLayer = 10, t && t.$touchMixin && void 0 != t.$touchMixin.layer && (this.touchLayer = t.$touchEventMixin.layer), 
        this.on("enter", function() {
            e.engine.touchManager.addLayer(e.touchLayer, e);
        }), this.on("exit", function() {
            e.engine.touchManager.removeLayer(e);
        }));
    }
    h.r(o);
    var c = function() {
        function t(e) {
            if (i(this, t), this._init = e, this._children = [], this._parent = null, this.x = 0, 
            this.y = 0, this.width = 0, this.height = 0, this._active = !0, this.engine = null, 
            this.__mixin__) for (var n = 0; n < this.__mixin__.length; n++) this.__mixin__[n].call(this, e);
            if (e) for (var a in e) "$" != a[0] && (this[a] = e[a]);
        }
        return a(t, [ {
            key: "addChild",
            value: function(t) {
                this._children.push(t), t._parent = this, this._attached && t._call, this._active && this.engine && t._callOnEnter(this.engine), 
                this.onAddChild && this.onAddChild(t);
            }
        }, {
            key: "removeChild",
            value: function(t) {
                var e = this._children.indexOf(t);
                -1 != e && (this._children.splice(e, 1), this._active && this.engine && t._callOnExit(null), 
                this.onRemoveChild && this.onRemoveChild(t));
            }
        }, {
            key: "removeAllChildren",
            value: function() {
                for (;this._children.length; ) {
                    var t = this._children.shift();
                    this._active && this.engine && t._callOnExit(null), this.onRemoveChild && this.onRemoveChild(t);
                }
            }
        }, {
            key: "removeFromParent",
            value: function() {
                null !== this._parent && this._parent.removeChild(this);
            }
        }, {
            key: "_callOnEnter",
            value: function(t) {
                if (this.engine = t, this._active) {
                    for (var e = 0; e < this._children.length; e++) this._children[e]._callOnEnter(t);
                    this.onEnter && this.onEnter(), this.__mixinEvent__ && this.emit("enter");
                }
            }
        }, {
            key: "_callOnExit",
            value: function(t) {
                if (this._active) {
                    this.onExit && this.onExit(), this.__mixinEvent__ && this.emit("exit");
                    for (var e = 0; e < this._children.length; e++) this._children[e]._callOnExit(t);
                    this.engine = t;
                }
            }
        }, {
            key: "_callUpdate",
            value: function(t) {
                for (var e = 0; e < this._children.length; e++) this._children[e]._callUpdate(t);
                this.update && this.update(t);
            }
        }, {
            key: "_render",
            value: function(t, e, i, n, a, s, o) {
                this.render && this.render(t, e, i, n, a, this.x * this.engine._scale.x + s, this.y * this.engine._scale.y + o);
                for (var h = 0; h < this._children.length; h++) this._children[h]._render(t, e, i, n, a, this.x * this.engine._scale.x + s, this.y * this.engine._scale.y + o);
            }
        }, {
            key: "mixin",
            value: function(t) {
                this.__proto__ = {
                    __proto__: this.__proto__
                }, Object.assign(this.__proto__, t.prototype), t.call(this, this._init);
            }
        }, {
            key: "localToGlobal",
            value: function(t, e) {
                return null == this._parent ? {
                    x: 0,
                    y: 0
                } : this._parent.localToGlobal(this.x + t, this.y + e);
            }
        }, {
            key: "globalToLocal",
            value: function(t, e) {
                if (null == this._parent) return {
                    x: 0,
                    y: 0
                };
                var i = this._parent.globalToLocal(t, e);
                return {
                    x: i.x - this.x,
                    y: i.y - this.y
                };
            }
        }, {
            key: "isInside",
            value: function(t, e) {
                return t > 0 && t < this.width && e > 0 && e < this.height;
            }
        }, {
            key: "active",
            get: function() {
                return this._active;
            },
            set: function(t) {
                this._active != t && (this._active = t, this.engine && (t ? this._callOnEnter(this.engine) : t || this._callOnExit(this.engine)));
            }
        } ]), t;
    }(), u = function(n) {
        function s(e) {
            var n;
            return i(this, s), n = t(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, e)), 
            n._wxCanvas = wx.getSharedCanvas(), n.ctx = n._wxCanvas.getContext("2d"), n.width = n._wxCanvas.width, 
            n.height = n._wxCanvas.height, wx.getSystemInfoSync(function(t) {
                console.log("###userInfo", t), this.width = this._wxCanvas.width = t.windowWidth * t.pixelRatio, 
                this.height = this._wxCanvas.height = t.windowHeight * t.pixelRatio, console.log(this.width, this._wxCanvas.width, this.height, this._wxCanvas.height);
            }), n;
        }
        return e(s, c), a(s, [ {
            key: "_renderCanvas",
            value: function() {
                this.ctx.setTransform(this.engine._scale.x, 0, 0, this.engine._scale.y, 0, 0), this.ctx.clearRect(0, 0, this.width, this.height);
                for (var t = 0; t < this._children.length; t++) this._children[t]._render(this.ctx, 1, 0, 0, 1, 0, 0);
            }
        }, {
            key: "localToGlobal",
            value: function(t, e) {
                return {
                    x: t,
                    y: e
                };
            }
        }, {
            key: "globalToLocal",
            value: function(t, e) {
                return {
                    x: t,
                    y: e
                };
            }
        } ]), s;
    }();
    r.prototype.on = function(t, e) {
        (this._events[t] || (this._events[t] = [])).push({
            func: e,
            once: !1
        });
    }, r.prototype.once = function(t, e) {
        (this._events[t] || (this._events[t] = [])).push({
            func: e,
            once: !0
        });
    }, r.prototype.off = function(t, e) {
        var i = this._events[t];
        if (i && 0 !== i.length) if (void 0 !== e) {
            for (var n = 0; n < i.length; n++) if (i[n].func == e) return void i.splice(n, 1);
        } else void 0 != t ? this._events[t] = [] : this._events = {};
    }, r.prototype.emit = function(t) {
        for (var e = this._events[t], i = arguments.length, n = Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
        if (e && 0 !== e.length) for (var s = 0; s < e.length; s++) {
            var o;
            (o = e[s].func).call.apply(o, [ this ].concat(n)), e[s].once && (e.splice(s, 1), 
            s--);
        }
    };
    var d = function(n) {
        function s(e) {
            var n;
            return i(this, s), n = t(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, e)), 
            n.text = void 0 === n.text ? "Label" : n.text, n.font = n.font || "30px Arial", 
            n.textBaseline = n.textBaseline || "top", n.fillStyle = n.fillStyle || "#000000", 
            n.textAlign = n.textAlign || "start", n.lineWidth = n.lineWidth || 0, n;
        }
        return e(s, c), a(s, [ {
            key: "render",
            value: function(t, e, i, n, a, s, o) {
                t.setTransform(e, i, n, a, s, o), t.font = this.font, t.fillStyle = this.fillStyle, 
                t.textAlign = this.textAlign, t.textBaseline = this.textBaseline, this.strokeStyle && (t.strokeStyle = this.strokeStyle, 
                t.lineWidth = this.lineWidth, t.strokeText(this.text, 0, 0)), t.fillText(this.text, 0, 0);
            }
        } ]), s;
    }(), f = function(n) {
        function s(e) {
            var n;
            return i(this, s), n = t(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, e)), 
            n.image = n.image || null, n.patch9 = n.patch9 || null, n.image && (n.image.width = n.width), 
            n.image && (n.image.height = n.height), n;
        }
        return e(s, c), a(s, [ {
            key: "render",
            value: function(t, e, i, n, a, s, o) {
                if (this.image) if (t.setTransform(e, i, n, a, s, o), this.patch9) {
                    var h = this.patch9.x, r = this.patch9.y, l = this.patch9.w, c = this.patch9.h, u = this.image.width, d = this.image.height, f = this.width, g = this.height;
                    t.drawImage(this.image, 0, 0, h, r, 0, 0, h, r), t.drawImage(this.image, h, 0, l, r, h, 0, f - h - (u - h - l), r), 
                    t.drawImage(this.image, h + l, 0, u - h - l, r, f - (u - h - l), 0, u - h - l, r), 
                    t.drawImage(this.image, 0, r, h, c, 0, r, h, g - r - (d - r - c)), t.drawImage(this.image, h, r, l, c, h, r, f - h - (u - h - l), g - r - (d - r - c)), 
                    t.drawImage(this.image, h + l, r, u - h - l, c, f - (u - h - l), r, u - h - l, g - r - (d - r - c)), 
                    t.drawImage(this.image, 0, r + c, h, d - c - r, 0, g - (d - r - c), h, d - r - c), 
                    t.drawImage(this.image, h, r + c, l, d - c - r, h, g - (d - r - c), f - h - (u - h - l), d - r - c), 
                    t.drawImage(this.image, h + l, r + c, u - h - l, d - c - r, f - (u - h - l), g - (d - r - c), u - h - l, d - r - c);
                } else t.drawImage(this.image, 0, 0, this.width, this.height);
            }
        }, {
            key: "fitImgSize",
            value: function() {
                this.width = this.image.width, this.height = this.image.height;
            }
        }, {
            key: "wait",
            value: function(t, e) {
                var i = this;
                t.then(function(t) {
                    i.image = t, e && i.fitImgSize();
                });
            }
        } ]), s;
    }(), g = function() {
        function t(e, n, a) {
            i(this, t), this.id = e, this.begin = {
                x: n,
                y: a
            }, this.beginAt = Date.now(), this.current = {
                x: n,
                y: a
            }, this.currentAt = this.beginAt, this.delta = {
                x: 0,
                y: 0
            }, this.interval = 0, this.inviter = [], this.handle = !1, this.swallow = !1;
        }
        return a(t, [ {
            key: "_moveTo",
            value: function(t, e) {
                if (t != this.current.x || e != this.current.y) {
                    var i = this.current, n = this.currentAt;
                    this.current = {
                        x: t,
                        y: e
                    }, this.currentAt = Date.now(), this.delta = {
                        x: this.current.x - i.x,
                        y: this.current.y - i.y
                    }, this.interval = this.currentAt - n;
                }
            }
        }, {
            key: "distance",
            get: function() {
                var t = this.current.x - this.begin.x, e = this.current.y - this.begin.y;
                return Math.sqrt(t * t + e * e);
            }
        } ]), t;
    }(), v = function() {
        function t(e) {
            i(this, t), console.log("add touchEvent"), this.touchEventAdded = !1, this.engine = e, 
            this.touch = null, this.handlers = {
                begin: this._onTouchBegin.bind(this),
                move: this._onTouchMove.bind(this),
                end: this._onTouchEnd.bind(this),
                cancel: this._onTouchCancel.bind(this)
            }, this.layers = [], this.layerNodes = {}, this.layerNodeMap = new Map(), e.on("start", this._addListener.bind(this)), 
            e.on("stop", this._removeListener.bind(this));
        }
        return a(t, null, [ {
            key: "addon",
            value: function(e) {
                e.touchManager = new t(e);
            }
        } ]), a(t, [ {
            key: "addLayer",
            value: function(t, e) {
                console.log("addLayer ---\x3e"), -1 == this.layers.indexOf(t) && (this.layers.push(t), 
                this.layers.sort(), this.layerNodes[t.toString()] = []), this.layerNodes[t.toString()].push(e), 
                this.layerNodeMap.set(e, t);
            }
        }, {
            key: "removeLayer",
            value: function(t) {
                console.log("removeLayer ---\x3e");
                var e = this.layerNodeMap.get(t);
                if (void 0 !== e) {
                    this.layerNodeMap.delete(t);
                    var i = this.layerNodes[e.toString()];
                    if (i) {
                        var n = i.indexOf(t);
                        n >= 0 && i.splice(n, 1);
                    }
                }
            }
        }, {
            key: "_addListener",
            value: function() {
                this.touchEventAdded || (console.log("开始监听---"), this.touchEventAdded = !0, wx.onTouchStart(this.handlers.begin), 
                wx.onTouchMove(this.handlers.move), wx.onTouchEnd(this.handlers.end), wx.onTouchCancel(this.handlers.cancel));
            }
        }, {
            key: "_removeListener",
            value: function() {}
        }, {
            key: "_onTouchBegin",
            value: function(t) {
                if (null == this.touch && !(t.changedTouches.length <= 0)) {
                    var e = t.changedTouches[0];
                    this.touch = new g(e.identifier, e.pageX * this.engine._scale.x, e.pageY * this.engine._scale.y);
                    for (var i = 0; i < this.layers.length; i++) for (var n = this.layerNodes[this.layers[i]], a = 0; a < n.length; a++) if (this.touch.handle = !1, 
                    this.touch.swallow = !1, !0 === n[a].onTouchBegin(this.touch) || this.touch.handle) {
                        if (this.touch.swallow) {
                            for (var s = 0; s < this.touch.inviter.length; s++) if (this.touch.inviter[s].onTouchCancel) try {
                                this.touch.inviter[s].onTouchCancel(this.touch);
                            } catch (t) {
                                console.error(t);
                            }
                            return void (this.touch.inviter = [ n[a] ]);
                        }
                        this.touch.inviter.push(n[a]);
                    }
                }
            }
        }, {
            key: "_onTouchMove",
            value: function(t) {
                if (null != this.touch && !(t.changedTouches.length <= 0)) {
                    for (var e = null, i = 0; i < t.changedTouches.length; i++) t.changedTouches[i].identifier == this.touch.id && (e = t.changedTouches[i]);
                    if (null != e) {
                        this.touch.swallow = !1, this.touch._moveTo(e.pageX * this.engine._scale.x, e.pageY * this.engine._scale.y);
                        for (var n = 0; n < this.touch.inviter.length; n++) if (this.touch.inviter[n].onTouchMove) {
                            try {
                                this.touch.inviter[n].onTouchMove(this.touch);
                            } catch (t) {
                                console.error(t);
                            }
                            if (this.touch.swallow) {
                                for (i = 0; i < this.touch.inviter.length; i++) if (i != n && this.touch.inviter[i].onTouchCancel) try {
                                    this.touch.inviter[n].onTouchCancel(this.touch);
                                } catch (t) {
                                    console.error(t);
                                }
                                return void (this.touch.inviter = [ this.touch.inviter[n] ]);
                            }
                        }
                    }
                }
            }
        }, {
            key: "_onTouchEnd",
            value: function(t) {
                if (null != this.touch && !(t.changedTouches.length <= 0)) {
                    for (var e = null, i = 0; i < t.changedTouches.length; i++) t.changedTouches[i].identifier == this.touch.id && (e = t.changedTouches[i]);
                    if (null != e) {
                        this.touch._moveTo(e.pageX * this.engine._scale.x, e.pageY * this.engine._scale.y);
                        for (var n = 0; n < this.touch.inviter.length; n++) if (this.touch.inviter[n].onTouchEnd) try {
                            this.touch.inviter[n].onTouchEnd(this.touch);
                        } catch (t) {
                            console.error(t);
                        }
                        if (this.touch.distance < 20 && this.touch.currentAt - this.touch.beginAt < 350) for (n = 0; n < this.touch.inviter.length; n++) if (this.touch.inviter[n].onTouchTap) try {
                            this.touch.inviter[n].onTouchTap(this.touch);
                        } catch (t) {
                            console.error(t);
                        }
                        this.touch = null;
                    }
                }
            }
        }, {
            key: "_onTouchCancel",
            value: function(t) {
                if (null != this.touch && !(t.changedTouches.length <= 0)) {
                    for (var e = null, i = 0; i < t.changedTouches.length; i++) t.changedTouches[i].identifier == this.touch.id && (e = t.changedTouches[i]);
                    if (null != e) {
                        for (var n = 0; n < this.touch.inviter.length; n++) this.touch.inviter[n].onTouchCancel && this.touch.inviter[n].onTouchCancel(this.touch);
                        this.touch = null;
                    }
                }
            }
        } ]), t;
    }();
    l.prototype.onTouchBegin = function(t) {
        var e = this.globalToLocal(t.current.x, t.current.y);
        if (this.isInside(e.x, e.y)) return this.emit("touchBegin", t, e), !0;
    }, l.prototype.onTouchMove = function(t) {
        this.emit("touchMove", t);
    }, l.prototype.onTouchEnd = function(t) {
        this.emit("touchEnd", t);
    }, l.prototype.onTouchCancel = function(t) {
        this.emit("touchCancel", t);
    }, l.prototype.onTouchTap = function(t) {
        this.emit("touchTap", t);
    };
    var y = function(n) {
        function s(e) {
            var n;
            return i(this, s), n = t(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, e)), 
            n.maxY = 0, n.scrollY = 0, n.speed = 0, n.bounce = !1, n.bounceTime = 300, n._last5move = [], 
            n._last5time = [], n.brake = .2, n;
        }
        return e(s, c), a(s, [ {
            key: "onEnter",
            value: function() {
                this.calculate();
            }
        }, {
            key: "onAddChild",
            value: function() {
                this.calculate();
            }
        }, {
            key: "onRemoveChild",
            value: function() {
                this.calculate();
            }
        }, {
            key: "calculate",
            value: function() {
                this.maxY = 0;
                for (var t = 0; t < this._children.length; t++) this.maxY = Math.max(this.maxY, this._children[t].y + this._children[t].height);
                this.maxY = this.maxY - this.height;
            }
        }, {
            key: "update",
            value: function(t) {
                if (0 != this._children.length && !(this.maxY <= this.height)) {
                    0 != this.speed || this.bounce || (this.scrollY > 0 && (this.bounce = !0, this.speed = -this.scrollY / this.bounceTime), 
                    this.scrollY < this.height - this.maxY && (this.bounce = !0, this.speed = (this.height - this.maxY - this.scrollY) / this.bounceTime));
                    var e = this.speed * t;
                    if (0 != e) {
                        this.scrollY += e;
                        for (var i = 0; i < this._children.length; i++) this._children[i].y += e;
                        if (this.onScroll && this.onScroll(e), this.scrollY <= 0 && this.scrollY >= -(this.maxY - this.height) && this.bounce && (this.bounce = !1, 
                        this.speed = 0), !this.bounce) {
                            var n = .001;
                            if (this.scrollY > 0 || this.scrollY < this.height - this.maxY) {
                                var a = Math.abs(this.speed), s = .001 * (a > 1 ? Math.pow(a, 2) : a) * 5;
                                n = s > .001 ? s : .001;
                            }
                            this.speed > 0 ? (this.speed -= t * n, this.speed < 0 && (this.speed = 0)) : (this.speed += t * n, 
                            this.speed > 0 && (this.speed = 0)), this.speed < .03 && this.speed > -.03 && (this.speed = 0);
                        }
                    }
                }
            }
        }, {
            key: "onTouchBegin",
            value: function(t) {
                if (console.log("this.scrollY = " + this.scrollY), !(this.maxY <= this.height)) {
                    var e = this.globalToLocal(t.current.x, t.current.y);
                    if (this.isInside(e.x, e.y)) return this.speed = 0, this._last5move = [], !0;
                }
            }
        }, {
            key: "onTouchMove",
            value: function(t) {
                var e = t.delta.y;
                (this.scrollY > 0 || this.scrollY < this.height - this.maxY) && (e *= .6), this.scrollY += e;
                for (var i = 0; i < this._children.length; i++) this._children[i].y += e;
                t.distance > 20 && (t.swallow = !0), this.onScroll && this.onScroll(e), this._gatherTouchMove(e, t.interval);
            }
        }, {
            key: "onTouchEnd",
            value: function(t) {
                if (this.scrollY > 0) return this.bounce = !0, void (this.speed = -this.scrollY / this.bounceTime);
                if (this.scrollY < this.height - this.maxY) return this.bounce = !0, void (this.speed = (this.height - this.maxY - this.scrollY) / this.bounceTime);
                this._gatherTouchMove(t.delta.y, t.interval);
                for (var e = 0, i = 0, n = 0; n < this._last5move.length; n++) i += this._last5move[n], 
                e += this._last5time[n];
                this.speed = e <= 0 || e > 500 ? 0 : i * (1 - this.brake) / e;
            }
        }, {
            key: "onTouchCancel",
            value: function(t) {}
        }, {
            key: "_gatherTouchMove",
            value: function(t, e) {
                this._last5move.push(t), this._last5time.push(e), this._last5move.length > 5 && (this._last5move.shift(), 
                this._last5time.shift());
            }
        }, {
            key: "onEnter",
            value: function() {
                console.log("### this.engine.touchManager.addLayer(10, this)"), this.engine.touchManager.addLayer(10, this);
            }
        }, {
            key: "onExit",
            value: function() {
                this.engine.touchManager.removeLayer(this);
            }
        }, {
            key: "_render",
            value: function(t, e, i, n, a, s, o) {
                var h = this.engine._getTempCanvas(this.width, this.height);
                h.context.globalCompositeOperation = "source-over", h.context.setTransform(1, 0, 0, 1, 0, 0), 
                h.context.clearRect(0, 0, this.width, this.height);
                for (var r = 0; r < this._children.length; r++) this._children[r]._render(h.context, 1, 0, 0, 1, 0, 0);
                t.setTransform(e, i, n, a, this.x + s, this.y + o), t.drawImage(h.canvas, 0, 0, this.width, this.height), 
                this.engine._backTempCanvas(h);
            }
        } ]), s;
    }(), _ = function(n) {
        function s(e) {
            var n;
            return i(this, s), n = t(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, e)), 
            n.createNode = null, n.nodeHeight = 0, n.data = [], n.added = !1, n;
        }
        return e(s, y), a(s, [ {
            key: "onEnter",
            value: function() {
                if (!this.added) {
                    if (this.added = !0, y.prototype.onEnter.call(this), null == this.createNode) throw Error("ScrollList.createNode is null");
                    if (0 == this.nodeHeight) throw Error("ScrollList.nodeHeight is 0");
                }
            }
        }, {
            key: "onScroll",
            value: function(t) {
                for (var e = this.height, i = 0, n = 0, a = 0, s = 0; s < this._children.length; s++) e > this._children[s].y && (e = this._children[s].y, 
                i = this._children[s]), n < this._children[s].y + this.nodeHeight && (n = this._children[s].y + this.nodeHeight, 
                a = this._children[s]);
                e > 0 && i._scrollListIndex > 0 && (a._scrollListIndex = i._scrollListIndex - 1, 
                a.setData(this.data[i._scrollListIndex - 1]), a.y = e - this.nodeHeight), n < this.height && this.data.length > a._scrollListIndex + 1 && (i._scrollListIndex = a._scrollListIndex + 1, 
                i.setData(this.data[a._scrollListIndex + 1]), i.y = n);
            }
        }, {
            key: "setData",
            value: function(t) {
                this.data = t, this.rebuild();
            }
        }, {
            key: "rebuild",
            value: function() {
                this.removeAllChildren();
                for (var t = 0, e = Math.ceil(this.height / this.nodeHeight) + 1, i = 0; !(i >= e || i >= this.data.length); ) {
                    var n = this.createNode();
                    n.y = t, t += this.nodeHeight, n._scrollListIndex = i, n.setData && n.setData(this.data[i]), 
                    this.addChild(n), i++;
                }
                this.scrollY = 0, this.maxY = this.nodeHeight * this.data.length;
            }
        } ]), s;
    }(), p = null, m = function() {
        function t() {
            i(this, t), this._cache = {}, this._loading = {};
        }
        return a(t, null, [ {
            key: "instance",
            get: function() {
                return p || (p = new t()), p;
            }
        } ]), a(t, [ {
            key: "loadImgAuto",
            value: function(t) {
                if (this._cache[t]) return this._cache[t];
                var e = wx.createImage();
                return e.src = this.getResUrlByConfig(t), this._cache[t] = e, e;
            }
        }, {
            key: "loadImgAsync",
            value: function(t) {
                var e = this;
                if (this._cache[t]) return new Promise(function(i) {
                    return i(e._cache[t]);
                });
                if (this._loading[t]) return this._loading[t];
                var i = wx.createImage();
                i.src = this.getResUrlByConfig(t);
                var n = new Promise(function(n) {
                    i.onload = function() {
                        delete e._loading[t], e._cache[t] = i, n(i);
                    };
                });
                return this._loading[t] = n, n;
            }
        }, {
            key: "getResUrlByConfig",
            value: function(e) {
                if (console.log("getResUrlByConfig:" + t.instance.versionConfig), t.instance.versionConfig) {
                    var i = (wx.env && wx.env.USER_DATA_PATH || "wxfile://usr") + "/cache_crc32/assets/", n = e.replace(i, "");
                    if (console.log("versionKey:" + n), t.instance.versionConfig && t.instance.versionConfig[n]) {
                        var a = t.instance.versionConfig[n];
                        console.log("openData found file:" + a), e = i + a + e.slice(e.lastIndexOf("."));
                    }
                }
                return e;
            }
        } ]), t;
    }();
    new (function() {
        function t() {
            i(this, t), this._tweens = new Map();
        }
        return a(t, [ {
            key: "removeAll",
            value: function() {
                this._tweens = new Map();
            }
        }, {
            key: "add",
            value: function(t) {
                this._tweens.set(t.id, t);
            }
        }, {
            key: "remove",
            value: function(t) {
                this._tweens.delete(t.id);
            }
        }, {
            key: "update",
            value: function(t) {
                var e = !0, i = !1, n = void 0;
                try {
                    for (var a, s = this._tweens.values()[Symbol.iterator](); !(e = (a = s.next()).done); e = !0) {
                        var o = a.value;
                        o.update && !1 === o.update(t) && (o.isPlaying = !1, this._tweens.delete(o.id));
                    }
                } catch (t) {
                    i = !0, n = t;
                } finally {
                    try {
                        !e && s.return && s.return();
                    } finally {
                        if (i) throw n;
                    }
                }
            }
        } ]), t;
    }())();
    var w = {
        Linear: function(t, e) {
            var i = t.length - 1, n = i * e, a = Math.floor(n), s = w.Utils.Linear;
            return e < 0 ? s(t[0], t[1], n) : e > 1 ? s(t[i], t[i - 1], i - n) : s(t[a], t[a + 1 > i ? i : a + 1], n - a);
        },
        Bezier: function(t, e) {
            for (var i = 0, n = t.length - 1, a = Math.pow, s = w.Utils.Bernstein, o = 0; o <= n; o++) i += a(1 - e, n - o) * a(e, o) * t[o] * s(n, o);
            return i;
        },
        CatmullRom: function(t, e) {
            var i = t.length - 1, n = i * e, a = Math.floor(n), s = w.Utils.CatmullRom;
            return t[0] === t[i] ? (e < 0 && (a = Math.floor(n = i * (1 + e))), s(t[(a - 1 + i) % i], t[a], t[(a + 1) % i], t[(a + 2) % i], n - a)) : e < 0 ? t[0] - (s(t[0], t[0], t[1], t[1], -n) - t[0]) : e > 1 ? t[i] - (s(t[i], t[i], t[i - 1], t[i - 1], n - i) - t[i]) : s(t[a ? a - 1 : 0], t[a], t[i < a + 1 ? i : a + 1], t[i < a + 2 ? i : a + 2], n - a);
        },
        Utils: {
            Linear: function(t, e, i) {
                return (e - t) * i + t;
            },
            Bernstein: function(t, e) {
                var i = w.Utils.Factorial;
                return i(t) / i(e) / i(t - e);
            },
            Factorial: function() {
                var t = [ 1 ];
                return function(e) {
                    var i = 1;
                    if (t[e]) return t[e];
                    for (var n = e; n > 1; n--) i *= n;
                    return t[e] = i, i;
                };
            }(),
            CatmullRom: function(t, e, i, n, a) {
                var s = .5 * (i - t), o = .5 * (n - e), h = a * a;
                return (2 * e - 2 * i + s + o) * (a * h) + (-3 * e + 3 * i - 2 * s - o) * h + s * a + e;
            }
        }
    }, x = function(n) {
        function s(e) {
            var n;
            return i(this, s), n = t(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, e)), 
            n.height = 131, n.head = new f({
                width: 82,
                height: 82,
                x: 120,
                y: 16
            }), n.addChild(n.head), n.bg = new f({
                width: 556,
                height: 131,
                x: 0,
                y: 0
            }), n.addChild(n.bg), n.indexLabel = new d({
                text: "",
                fillStyle: "#ffffff",
                textAlign: "center",
                font: "bold 30px Arial",
                strokeStyle: "#5694d2",
                lineWidth: 6,
                x: 43,
                y: 50
            }), n.addChild(n.indexLabel), n.nameLabel = new d({
                text: "",
                fillStyle: "#318fb9",
                font: "bold 24px Arial",
                x: 228,
                y: 50
            }), n.addChild(n.nameLabel), n.starLabel = new d({
                text: "",
                fillStyle: "#24b1e9",
                textAlign: "center",
                font: "bold 25px Arial",
                x: 172,
                y: 80
            }), n.addChild(n.starLabel), n.btn = new f({
                width: 136,
                height: 104,
                x: 394,
                y: 3
            }), n.addChild(n.btn), n;
        }
        return e(s, c), a(s, [ {
            key: "setData",
            value: function(t) {
                console.log("data === >", t), this.data = t, this.indexLabel.text = "" + (this._scrollListIndex + 1);
                var e = wx.env && wx.env.USER_DATA_PATH || "wxfile://usr";
                this.head.wait(m.instance.loadImgAsync(t.avatarUrl), !1), this.bg.wait(m.instance.loadImgAsync(e + "/cache_crc32/assets/image/wanban/wxhy_img_nan.png"), !0), 
                this.uid == t.uid ? this.btn.wait(m.instance.loadImgAsync(e + "/cache_crc32/assets/image/wanban/wxhy_img_nzj.png"), !1) : this.btn.image = null;
                var i = t.nickname;
                this.nameLabel.text = i.length > 8 ? i.substr(0, 7) + "..." : i, this.starLabel.text = t.crowns;
            }
        } ]), s;
    }(), b = function(n) {
        function s(e) {
            i(this, s);
            var n = t(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, e)), a = new _();
            return a.width = n.width, a.height = 676, a.x = 45, a.y = 176, a.createNode = function() {
                return new x({
                    uid: n.uid
                });
            }, a.nodeHeight = 131, a.data = n.data, n.addChild(a), n.list = a, n.rankLabel = new d({
                text: "",
                fillStyle: "#ffffff",
                font: "bold 26px Arial",
                x: 90,
                y: 910
            }), n.addChild(n.rankLabel), n.inviteLabel1 = new d({
                text: "",
                fillStyle: "#722e11",
                font: "bold 20px Arial",
                textAlign: "center",
                x: 240,
                y: 500
            }), n.addChild(n.inviteLabel1), n.inviteLabel2 = new d({
                text: "",
                fillStyle: "#722e11",
                font: "bold 20px Arial",
                textAlign: "center",
                x: 240,
                y: 540
            }), n.addChild(n.inviteLabel2), n.inviteBtn = new f({
                width: 137,
                height: 68,
                patch9: {
                    x: 59,
                    y: 28,
                    w: 20,
                    h: 17
                },
                x: 439,
                y: 501
            }), n.addChild(n.inviteBtn), n.inviteBtnLabel = new d({
                text: "",
                strokeStyle: "#1b7e04",
                lineWidth: 4,
                fillStyle: "#ffffff",
                textAlign: "center",
                font: "bold 24px Arial",
                x: 509,
                y: 520
            }), n.addChild(n.inviteBtnLabel), n;
        }
        return e(s, c), a(s, [ {
            key: "dealUserData",
            value: function(t) {
                for (var e = this, i = [], n = 0; n < t.length; n++) {
                    var a = t[n], s = {
                        nickname: "",
                        avatarUrl: "",
                        openid: "",
                        crowns: "0",
                        uid: "-1"
                    };
                    if (s.nickname = a.nickname, s.avatarUrl = a.avatarUrl, s.openid = a.openid, !(a.beRecalledCount >= 5)) {
                        for (var o = 0; o < a.KVDataList.length; o++) s[a.KVDataList[o].key] = a.KVDataList[o].value;
                        i.push(s);
                    }
                }
                if (i.sort(function(t, e) {
                    return e.crowns - t.crowns;
                }), i.find(function(t) {
                    return t.uid == e.uid;
                })) {
                    var h = i.findIndex(function(t) {
                        return t.uid == e.uid;
                    });
                    this.rankLabel.text = "我的排名：" + (h + 1);
                }
                if (1 == i.length && "friend" == this.viewType) {
                    this.inviteLabel1.text = "呼风唤雨的你怎能孤军奋战?", this.inviteLabel2.text = "和朋友一起组建自己的海盗团吧!", 
                    this.inviteBtnLabel.text = "邀请好友";
                    var r = wx.env && wx.env.USER_DATA_PATH || "wxfile://usr";
                    this.inviteBtn.wait(m.instance.loadImgAsync(r + "/cache_crc32/assets/image/wanban/wxhy_img_btn.png"), !1);
                } else this.inviteLabel1.text = "", this.inviteLabel2.text = "", this.inviteBtn.image = null, 
                this.inviteBtnLabel.text = "";
                return i;
            }
        }, {
            key: "onEnter",
            value: function() {}
        }, {
            key: "onExit",
            value: function() {}
        }, {
            key: "getFriendStorage",
            value: function(t) {
                return new Promise(function(e, i) {
                    if (!wx.getFriendCloudStorage) return e([ t ]);
                    wx.getFriendCloudStorage({
                        keyList: [ "uid", "crowns" ],
                        success: function(i) {
                            console.log("开放数据域getFreindStorage的返回->>", i);
                            var n = i.data || [ t ];
                            e(n);
                        },
                        fail: function(t) {
                            console.log("开放数据域调取数据域失败-----\x3e>>>>"), i();
                        }
                    });
                });
            }
        }, {
            key: "getGroupStorage",
            value: function(t, e) {
                return new Promise(function(i, n) {
                    if (!wx.getGroupCloudStorage) return i([ t ]);
                    wx.getGroupCloudStorage({
                        shareTicket: e,
                        keyList: [ "uid", "crowns" ],
                        success: function(e) {
                            console.log("开放数据域getGroupCloudStorage的返回->>", e);
                            var n = e.data || [ t ];
                            i(n);
                        },
                        fail: function(t) {
                            console.log("开放数据域调取数据域失败-----\x3e>>>>"), n();
                        }
                    });
                });
            }
        } ]), s;
    }(), k = function(n) {
        function s(e) {
            var n;
            return i(this, s), n = t(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, e)), 
            console.log(">>>>>>RecallRankNode"), n.height = 120, n.bg = new f({
                width: 554,
                height: 110,
                x: 0,
                y: 0
            }), n.addChild(n.bg), n.icon = new f({
                x: 10,
                y: 25
            }), n.addChild(n.icon), n.head = new f({
                width: 82,
                height: 82,
                x: 85,
                y: 14
            }), n.addChild(n.head), n.headMask = new f({
                width: 94,
                height: 94,
                x: 79,
                y: 8
            }), n.addChild(n.headMask), n.nameLabel = new d({
                text: "",
                fillStyle: "#593F2E",
                font: "bold 24px Arial",
                x: 190,
                y: 20
            }), n.addChild(n.nameLabel), n.starBg = new f({
                width: 124,
                height: 34,
                x: 190,
                y: 60
            }), n.addChild(n.starBg), n.star = new f({
                width: 43,
                height: 43,
                x: 180,
                y: 54
            }), n.addChild(n.star), n.starLabel = new d({
                text: "",
                fillStyle: "#ffffff",
                textAlign: "center",
                font: "bold 25px Arial",
                x: 262,
                y: 63
            }), n.addChild(n.starLabel), n.btnLabel = new d({
                text: "邀上线",
                strokeStyle: "#1b7e04",
                lineWidth: 4,
                fillStyle: "#ffffff",
                textAlign: "center",
                font: "bold 24px Arial",
                x: 464,
                y: 43
            }), n.addChild(n.btnLabel), n;
        }
        return e(s, c), a(s, [ {
            key: "setData",
            value: function(t) {
                this.data = t;
                var e = wx.env && wx.env.USER_DATA_PATH || "wxfile://usr", i = this.uid == t.uid ? "wanban_2" : "wanban_1", n = this.uid == t.uid ? "wanban_2_1" : "wanban_1_1";
                this.bg.wait(m.instance.loadImgAsync(e + "/temp_image/image/main/" + i + ".png"), !0), 
                this.starBg.wait(m.instance.loadImgAsync(e + "/temp_image/image/main/" + n + ".png"), !1), 
                this.star.wait(m.instance.loadImgAsync(e + "/temp_image/image/main/wanban_star.png"), !1), 
                this.head.wait(m.instance.loadImgAsync(t.avatarUrl), !1), this.headMask.wait(m.instance.loadImgAsync(e + "/temp_image/image/main/head_bg7.png"), !1), 
                console.log("data.offlineDays ===> ", t.offlineDays), t.offlineDays > 2 ? (this.btnLabel.text = t.offlineDays > 30 ? "失踪很久" : "失踪：" + t.offlineDays + "天", 
                this.btnLabel.strokeStyle = "#e79515", this.btnLabel.fillStyle = "#ffffff", this.icon.x = 10, 
                this.icon.y = 25, this.icon.wait(m.instance.loadImgAsync(e + "/temp_image/image/main/wanban_recall.png"), !0)) : (this.btnLabel.text = "活跃", 
                this.btnLabel.strokeStyle = "#78cc41", this.btnLabel.fillStyle = "#ffffff", this.icon.x = 15, 
                this.icon.y = 28, this.icon.wait(m.instance.loadImgAsync(e + "/temp_image/image/main/wanban_recall2.png"), !0)), 
                t.uid == this.uid && (this.btnLabel.fillStyle = "#3ea2c7", this.btnLabel.strokeStyle = null);
                var a = t.nickname;
                this.nameLabel.text = a.length > 8 ? a.substr(0, 7) + "..." : a, this.starLabel.text = t.crowns;
            }
        } ]), s;
    }(), T = function(n) {
        function s(e) {
            var n;
            return i(this, s), n = t(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, e)), 
            console.log(">>>>oldFriendNode.constructor"), n.height = 120, n.head = new f({
                width: 88,
                height: 88,
                x: 15,
                y: 10
            }), n.addChild(n.head), n.bg = new f({
                width: 554,
                height: 110,
                x: 0,
                y: 0,
                patch9: {
                    x: 49,
                    y: 17,
                    w: 33,
                    h: 15
                }
            }), n.addChild(n.bg), n.headMask = new f({
                width: 94,
                height: 94,
                x: 79,
                y: 8
            }), n.addChild(n.headMask), n.nameLabel = new d({
                text: "",
                fillStyle: "#318FB9",
                font: "bold 24px Arial",
                x: 130,
                y: 38
            }), n.addChild(n.nameLabel), n.starBg = new f({
                width: 124,
                height: 34,
                x: 190,
                y: 60
            }), n.addChild(n.starBg), n.star = new f({
                width: 43,
                height: 43,
                x: 180,
                y: 54
            }), n.addChild(n.star), n.starLabel = new d({
                text: "",
                fillStyle: "#24b1e9",
                textAlign: "center",
                font: "bold 25px Arial",
                x: 70,
                y: 72
            }), n.addChild(n.starLabel), n.icon = new f({
                x: 346,
                y: 23
            }), n.addChild(n.icon), n.recallBtn = new f({
                width: 124,
                height: 68,
                patch9: {
                    x: 59,
                    y: 28,
                    w: 20,
                    h: 17
                },
                x: 410,
                y: 21
            }), n.addChild(n.recallBtn), n.btnLabel = new d({
                text: "邀上线",
                strokeStyle: "#1b7e04",
                lineWidth: 4,
                fillStyle: "#ffffff",
                textAlign: "center",
                font: "bold 24px Arial",
                x: 474,
                y: 38
            }), n.addChild(n.btnLabel), n;
        }
        return e(s, c), a(s, [ {
            key: "setData",
            value: function(t) {
                console.log(">>>>oldFriendNode.setData, data = ", t), this.data = t;
                var e = wx.env && wx.env.USER_DATA_PATH || "wxfile://usr", i = (this.uid, t.uid, 
                "wanban_1");
                if (this.uid, t.uid, console.log("this.bg ===", this.bg.patch9), this.bg.wait(m.instance.loadImgAsync(e + "/cache_crc32/assets/image/wanban/" + i + ".png"), !0), 
                this.head.wait(m.instance.loadImgAsync(t.avatarUrl), !1), console.log("data.offlineDays ===", t.offlineDays), 
                t.offlineDays > 2 ? (this.icon.y = 25, this.icon.wait(m.instance.loadImgAsync(e + "/cache_crc32/assets/image/wanban/wanban_recall.png"), !0)) : (this.icon.y = 28, 
                this.icon.wait(m.instance.loadImgAsync(e + "/cache_crc32/assets/image/wanban/wanban_recall2.png"), !0)), 
                "oldFriendGroup" == this.viewType) {
                    this.recallBtn.image = null, console.log("data.offlineDays ===> ", t.offlineDays), 
                    t.offlineDays > 2 ? (this.btnLabel.text = t.offlineDays > 30 ? "失踪很久" : "失踪：" + t.offlineDays + "天", 
                    this.btnLabel.strokeStyle = "#e79515", this.btnLabel.fillStyle = "#ffffff", this.icon.wait(m.instance.loadImgAsync(e + "/cache_crc32/assets/image/wanban/wanban_recall.png"), !0)) : (this.btnLabel.text = "活跃", 
                    this.btnLabel.strokeStyle = "#78cc41", this.btnLabel.fillStyle = "#ffffff", this.icon.wait(m.instance.loadImgAsync(e + "/cache_crc32/assets/image/wanban/wanban_recall2.png"), !0)), 
                    t.uid == this.uid && (this.btnLabel.fillStyle = "#3ea2c7", this.btnLabel.strokeStyle = null);
                    var n = t.nickname;
                    this.nameLabel.text = n.length > 8 ? n.substr(0, 7) + "..." : n, this.starLabel.text = t.crowns;
                } else "oldFriend" == this.viewType && (this.uid == t.uid ? (this.btnLabel.text = "你自己", 
                this.btnLabel.fillStyle = "#3ea2c7", this.btnLabel.strokeStyle = null, this.recallBtn.image = null) : (this.btnLabel.text = "召回", 
                this.btnLabel.fillStyle = "#ffffff", this.btnLabel.strokeStyle = "#cd491b", this.recallBtn.wait(m.instance.loadImgAsync(e + "/cache_crc32/assets/image/wanban/wanban_btn.png"), !1)), 
                n = t.nickname, this.nameLabel.text = n.length > 8 ? n.substr(0, 7) + "..." : n, 
                this.starLabel.text = t.crowns);
            }
        } ]), s;
    }(), C = function(n) {
        function s(e) {
            i(this, s);
            var n = t(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, e)), a = new _();
            return a.width = n.width, a.height = 770, a.x = 43, a.y = 150, a.createNode = function() {
                return new T({
                    uid: n.uid,
                    viewType: n.viewType
                });
            }, a.nodeHeight = 120, console.log("OldFriendRankLayer, constructor:::this.data ====33333=====333=3=3=3=3=3=3=3== ", n.data), 
            a.data = n.data, n.addChild(a), n.list = a, n;
        }
        return e(s, c), a(s, [ {
            key: "dealUserData",
            value: function(t) {
                for (var e = [], i = 0; i < t.length; i++) {
                    var n = t[i], a = {
                        nickname: "",
                        avatarUrl: "",
                        openid: "",
                        crowns: "0",
                        uid: "-1",
                        timestamp: "",
                        offlineDays: "",
                        offlinetimes: "",
                        score: ""
                    };
                    a.nickname = n.nickname, a.avatarUrl = n.avatarUrl, a.openid = n.openid;
                    for (var s = 0; s < n.KVDataList.length; s++) a[n.KVDataList[s].key] = n.KVDataList[s].value;
                    var o = a.timestamp ? a.timestamp : a.score && JSON.parse(a.score).wxgame && Math.floor(JSON.parse(a.score).wxgame.update_time / 1e3) || Math.floor(new Date().getTime() / 1e3), h = parseInt(this.timestamp || Math.floor(new Date().getTime() / 1e3)) - parseInt(o), r = Math.floor(h / 3600 / 24);
                    a.offlineDays = r, a.offlinetimes = h, e.push(a);
                }
                return e.sort(function(t, e) {
                    return e.offlinetimes - t.offlinetimes;
                }), e;
            }
        }, {
            key: "onEnter",
            value: function() {}
        }, {
            key: "onExit",
            value: function() {}
        }, {
            key: "getFriendStorage",
            value: function(t) {
                return new Promise(function(e, i) {
                    if (!wx.getFriendCloudStorage) return e([ t ]);
                    wx.getFriendCloudStorage({
                        keyList: [ "uid", "crowns", "timestamp", "score" ],
                        success: function(i) {
                            console.log("开放数据域getFreindStorage的返回->>", i);
                            var n = i.data || [ t ];
                            e(n);
                        },
                        fail: function(t) {
                            console.log("开放数据域调取数据域失败-----\x3e>>>>"), i();
                        }
                    });
                });
            }
        }, {
            key: "getGroupStorage",
            value: function(t, e) {
                return new Promise(function(i, n) {
                    if (!wx.getGroupCloudStorage) return i([ t ]);
                    wx.getGroupCloudStorage({
                        shareTicket: e,
                        keyList: [ "uid", "crowns", "timestamp", "score" ],
                        success: function(e) {
                            console.log("开放数据域getGroupCloudStorage的返回->>", e);
                            var n = e.data || [ t ];
                            i(n);
                        },
                        fail: function(t) {
                            console.log("开放数据域调取数据域失败-----\x3e>>>>"), n();
                        }
                    });
                });
            }
        } ]), s;
    }(), L = new (function(s) {
        function o() {
            var e;
            return i(this, o), e = t(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this)), 
            e.canvas = new u(), e.canvas._active = !0, e.canvas.engine = e, e.updateTimer = null, 
            e._lastUpdate = 0, e._scale = {
                x: 1,
                y: 1
            }, e._tempCanvas = {}, e;
        }
        return e(o, r), a(o, [ {
            key: "update",
            value: function() {
                this.updateTimer = requestAnimationFrame(this.update.bind(this));
                var t = this._lastUpdate;
                this._lastUpdate = Date.now(), this.canvas._callUpdate(this._lastUpdate - t), this.emit("update", this._lastUpdate - t), 
                this.canvas._renderCanvas();
            }
        }, {
            key: "start",
            value: function() {
                console.log("start ---\x3e"), null === this.updateTimer && (this.emit("start"), 
                this._lastUpdate = Date.now(), this.updateTimer = requestAnimationFrame(this.update.bind(this)));
            }
        }, {
            key: "stop",
            value: function() {
                null !== this.updateTimer && (cancelAnimationFrame(this.updateTimer), this.updateTimer = null, 
                this.emit("stop"));
            }
        }, {
            key: "scale",
            value: function(t, e) {
                this._scale.x = t, this._scale.y = e;
            }
        }, {
            key: "_getTempCanvas",
            value: function(t, e) {
                var i = t + "x" + e, n = this._tempCanvas[i] || (this._tempCanvas[i] = []);
                if (0 == n.length) {
                    var a = wx.createCanvas();
                    return console.log("create temp canvas:" + i), a.width = t, a.height = e, {
                        id: i,
                        canvas: a,
                        context: a.getContext("2d")
                    };
                }
                return n.pop();
            }
        }, {
            key: "_backTempCanvas",
            value: function(t) {
                (this._tempCanvas[t.id] || (this._tempCanvas[id] = [])).push(t);
            }
        } ], [ {
            key: "mixin",
            value: function(t, e) {
                if ("function" != typeof t) throw Error("mixin target must be class");
                if ("function" != typeof e) throw Error("mixin must be class");
                t.__mixin__ ? t.__mixin__.push(e) : t.__mixin__ = [ e ], t.prototype = n({}, t.prototype, e.prototype), 
                t.prototype = {
                    __proto__: t.prototype
                }, Object.assign(t.prototype, e.prototype);
            }
        } ]), o;
    }())();
    v.addon(L), wx.onMessage(function(n) {
        if (console.log("开放域监听到message==>", n), "rejust" == n.viewType && (L.canvas.width = n.width, 
        L.canvas.height = n.height), n.versionConfig && (m.instance.versionConfig = n.versionConfig, 
        console.warn("openData versionConfig:" + m.instance.versionConfig)), n.isDisplay) {
            if ("friend" == n.viewType) {
                var s = new b({
                    width: L.canvas.width,
                    height: L.canvas.height,
                    engine: L,
                    uid: n.uid,
                    viewType: n.viewType
                });
                L.canvas.addChild(s), s.getFriendStorage(n).then(function(t) {
                    t = s.dealUserData(t), s.data = t, s.list.setData(t);
                });
            } else if ("group" == n.viewType) s = new b({
                width: L.canvas.width,
                height: L.canvas.height,
                engine: L,
                uid: n.uid,
                viewType: n.viewType
            }), L.canvas.addChild(s), s.getGroupStorage(n, n.shareTicket).then(function(t) {
                t = s.dealUserData(t), s.data = t, s.list.setData(t);
            }); else if ("recallGroup" == n.viewType) {
                var o = new (function(n) {
                    function s(e) {
                        var n;
                        i(this, s), n = t(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, e)), 
                        console.log(">>>>>>RecallRankLayer");
                        var a = new _();
                        return a.width = n.width, a.height = 641, a.x = 45, a.y = 210, a.createNode = function() {
                            return new k({
                                uid: n.uid
                            });
                        }, a.nodeHeight = 120, a.data = n.data, n.addChild(a), n.list = a, n;
                    }
                    return e(s, c), a(s, [ {
                        key: "dealUserData",
                        value: function(t) {
                            for (var e = [], i = 0; i < t.length; i++) {
                                var n = t[i], a = {
                                    nickname: "",
                                    avatarUrl: "",
                                    openid: "",
                                    crowns: "0",
                                    uid: "-1",
                                    timestamp: "",
                                    offlineDays: "",
                                    offlinetimes: "",
                                    score: ""
                                };
                                a.nickname = n.nickname, a.avatarUrl = n.avatarUrl, a.openid = n.openid;
                                for (var s = 0; s < n.KVDataList.length; s++) a[n.KVDataList[s].key] = n.KVDataList[s].value;
                                var o = a.timestamp ? a.timestamp : a.score && JSON.parse(a.score).wxgame && Math.floor(JSON.parse(a.score).wxgame.update_time / 1e3) || Math.floor(new Date().getTime() / 1e3), h = parseInt(this.timestamp || Math.floor(new Date().getTime() / 1e3)) - parseInt(o), r = Math.floor(h / 3600 / 24);
                                a.offlineDays = r, a.offlinetimes = h, e.push(a);
                            }
                            return e.sort(function(t, e) {
                                return e.offlinetimes - t.offlinetimes;
                            }), e;
                        }
                    }, {
                        key: "onEnter",
                        value: function() {}
                    }, {
                        key: "onExit",
                        value: function() {}
                    }, {
                        key: "getRecallStorage",
                        value: function(t, e) {
                            return new Promise(function(i, n) {
                                if (!wx.getGroupCloudStorage) return i([ t ]);
                                wx.getGroupCloudStorage({
                                    shareTicket: e,
                                    keyList: [ "uid", "crowns", "timestamp", "score" ],
                                    success: function(e) {
                                        console.log("开放数据域getGroupCloudStorage的返回->>", e);
                                        var n = e.data || [ t ];
                                        i(n);
                                    },
                                    fail: function(t) {
                                        console.log("开放数据域调取数据域失败-----\x3e>>>>"), n();
                                    }
                                });
                            });
                        }
                    } ]), s;
                }())({
                    width: L.canvas.width,
                    height: L.canvas.height,
                    engine: L,
                    uid: n.uid,
                    timestamp: n.timestamp,
                    viewType: n.viewType
                });
                L.canvas.addChild(o), o.getRecallStorage(n, n.shareTicket).then(function(t) {
                    t = o.dealUserData(t), o.data = t, o.list.setData(t);
                });
            } else if ("oldFriend" == n.viewType) {
                var h = new C({
                    width: L.canvas.width,
                    height: L.canvas.height,
                    engine: L,
                    uid: n.uid,
                    viewType: n.viewType
                });
                L.canvas.addChild(h), h.getFriendStorage(n).then(function(t) {
                    t = h.dealUserData(t), h.data = t, h.list.setData(t);
                });
            } else if ("oldFriendGroup" == n.viewType) {
                var r = new C({
                    width: L.canvas.width,
                    height: L.canvas.height,
                    engine: L,
                    uid: n.uid,
                    viewType: n.viewType
                });
                L.canvas.addChild(r), r.getGroupStorage(n, n.shareTicket).then(function(t) {
                    t = r.dealUserData(t), r.data = t, r.list.setData(t);
                });
            }
        } else "start" == n.viewType ? L.start() : "stop" == n.viewType && (L.canvas.removeAllChildren(), 
        L.stop());
    });
} ]);