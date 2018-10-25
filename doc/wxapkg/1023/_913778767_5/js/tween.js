var t = function(t, e, n) {
    t.__class__ = e, n ? n.push(e) : n = [ e ], t.__types__ = t.__types__ ? n.concat(t.__types__) : n;
}, e = function(t, e) {
    function n() {
        this.constructor = t;
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n();
};

!function(e) {
    var n = function() {
        function t() {
            e.$error(1014);
        }
        return t.get = function(t) {
            return t < -1 && (t = -1), t > 1 && (t = 1), function(e) {
                return 0 == t ? e : t < 0 ? e * (e * -t + 1 + t) : e * ((2 - e) * t + (1 - t));
            };
        }, t.getPowIn = function(t) {
            return function(e) {
                return Math.pow(e, t);
            };
        }, t.getPowOut = function(t) {
            return function(e) {
                return 1 - Math.pow(1 - e, t);
            };
        }, t.getPowInOut = function(t) {
            return function(e) {
                return (e *= 2) < 1 ? .5 * Math.pow(e, t) : 1 - .5 * Math.abs(Math.pow(2 - e, t));
            };
        }, t.sineIn = function(t) {
            return 1 - Math.cos(t * Math.PI / 2);
        }, t.sineOut = function(t) {
            return Math.sin(t * Math.PI / 2);
        }, t.sineInOut = function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1);
        }, t.getBackIn = function(t) {
            return function(e) {
                return e * e * ((t + 1) * e - t);
            };
        }, t.getBackOut = function(t) {
            return function(e) {
                return --e * e * ((t + 1) * e + t) + 1;
            };
        }, t.getBackInOut = function(t) {
            return t *= 1.525, function(e) {
                return (e *= 2) < 1 ? e * e * ((t + 1) * e - t) * .5 : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2);
            };
        }, t.circIn = function(t) {
            return -(Math.sqrt(1 - t * t) - 1);
        }, t.circOut = function(t) {
            return Math.sqrt(1 - --t * t);
        }, t.circInOut = function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        }, t.bounceIn = function(e) {
            return 1 - t.bounceOut(1 - e);
        }, t.bounceOut = function(t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
        }, t.bounceInOut = function(e) {
            return e < .5 ? .5 * t.bounceIn(2 * e) : .5 * t.bounceOut(2 * e - 1) + .5;
        }, t.getElasticIn = function(t, e) {
            var n = 2 * Math.PI;
            return function(i) {
                if (0 == i || 1 == i) return i;
                var s = e / n * Math.asin(1 / t);
                return -t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - s) * n / e);
            };
        }, t.getElasticOut = function(t, e) {
            var n = 2 * Math.PI;
            return function(i) {
                if (0 == i || 1 == i) return i;
                var s = e / n * Math.asin(1 / t);
                return t * Math.pow(2, -10 * i) * Math.sin((i - s) * n / e) + 1;
            };
        }, t.getElasticInOut = function(t, e) {
            var n = 2 * Math.PI;
            return function(i) {
                var s = e / n * Math.asin(1 / t);
                return (i *= 2) < 1 ? t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - s) * n / e) * -.5 : t * Math.pow(2, -10 * (i -= 1)) * Math.sin((i - s) * n / e) * .5 + 1;
            };
        }, t.quadIn = t.getPowIn(2), t.quadOut = t.getPowOut(2), t.quadInOut = t.getPowInOut(2), 
        t.cubicIn = t.getPowIn(3), t.cubicOut = t.getPowOut(3), t.cubicInOut = t.getPowInOut(3), 
        t.quartIn = t.getPowIn(4), t.quartOut = t.getPowOut(4), t.quartInOut = t.getPowInOut(4), 
        t.quintIn = t.getPowIn(5), t.quintOut = t.getPowOut(5), t.quintInOut = t.getPowInOut(5), 
        t.backIn = t.getBackIn(1.7), t.backOut = t.getBackOut(1.7), t.backInOut = t.getBackInOut(1.7), 
        t.elasticIn = t.getElasticIn(1, .3), t.elasticOut = t.getElasticOut(1, .3), t.elasticInOut = t.getElasticInOut(1, .3 * 1.5), 
        t;
    }();
    e.Ease = n, t(n.prototype, "egret.Ease");
}((n = window.egret) || (n = {}));

!function(n) {
    var i = function(t) {
        function i(e, n, i) {
            var s = t.call(this) || this;
            return s._target = null, s._useTicks = !1, s.ignoreGlobalPause = !1, s.loop = !1, 
            s.pluginData = null, s._steps = null, s.paused = !1, s.duration = 0, s._prevPos = -1, 
            s.position = null, s._prevPosition = 0, s._stepPosition = 0, s.passive = !1, s.initialize(e, n, i), 
            s;
        }
        return e(i, t), i.get = function(t, e, n, s) {
            return void 0 === n && (n = null), void 0 === s && (s = !1), s && i.removeTweens(t), 
            new i(t, e, n);
        }, i.removeTweens = function(t) {
            if (t.tween_count) {
                for (var e = i._tweens, n = e.length - 1; n >= 0; n--) e[n]._target == t && (e[n].paused = !0, 
                e.splice(n, 1));
                t.tween_count = 0;
            }
        }, i.pauseTweens = function(t) {
            if (t.tween_count) for (var e = n.Tween._tweens, i = e.length - 1; i >= 0; i--) e[i]._target == t && (e[i].paused = !0);
        }, i.resumeTweens = function(t) {
            if (t.tween_count) for (var e = n.Tween._tweens, i = e.length - 1; i >= 0; i--) e[i]._target == t && (e[i].paused = !1);
        }, i.tick = function(t, e) {
            void 0 === e && (e = !1);
            var n = t - i._lastTime;
            i._lastTime = t;
            for (var s = i._tweens.concat(), o = s.length - 1; o >= 0; o--) {
                var r = s[o];
                e && !r.ignoreGlobalPause || r.paused || r.$tick(r._useTicks ? 1 : n);
            }
            return !1;
        }, i._register = function(t, e) {
            var s = t._target, o = i._tweens;
            if (e) s && (s.tween_count = s.tween_count > 0 ? s.tween_count + 1 : 1), o.push(t), 
            i._inited || (i._lastTime = n.getTimer(), n.ticker.$startTick(i.tick, null), i._inited = !0); else {
                s && s.tween_count--;
                for (var r = o.length; r--; ) if (o[r] == t) return void o.splice(r, 1);
            }
        }, i.removeAllTweens = function() {
            for (var t = i._tweens, e = 0, n = t.length; e < n; e++) {
                var s = t[e];
                s.paused = !0, s._target.tween_count = 0;
            }
            t.length = 0;
        }, i.prototype.initialize = function(t, e, n) {
            this._target = t, e && (this._useTicks = e.useTicks, this.ignoreGlobalPause = e.ignoreGlobalPause, 
            this.loop = e.loop, e.onChange && this.addEventListener("change", e.onChange, e.onChangeObj), 
            e.override && i.removeTweens(t)), this.pluginData = n || {}, this._curQueueProps = {}, 
            this._initQueueProps = {}, this._steps = [], e && e.paused ? this.paused = !0 : i._register(this, !0), 
            e && null != e.position && this.setPosition(e.position, i.NONE);
        }, i.prototype.setPosition = function(t, e) {
            void 0 === e && (e = 1), t < 0 && (t = 0);
            var n = t, i = !1;
            if (n >= this.duration) if (this.loop) {
                var s = n % this.duration;
                n = n > 0 && 0 === s ? this.duration : s;
            } else n = this.duration, i = !0;
            if (n == this._prevPos) return i;
            i && this.setPaused(!0);
            var o = this._prevPos;
            if (this.position = this._prevPos = n, this._prevPosition = t, this._target && this._steps.length > 0) {
                for (var r = this._steps.length, u = -1, p = 0; p < r && !("step" == this._steps[p].type && (u = p, 
                this._steps[p].t <= n && this._steps[p].t + this._steps[p].d >= n)); p++) ;
                for (p = 0; p < r; p++) if ("action" == this._steps[p].type) 0 != e && (this._useTicks ? this._runAction(this._steps[p], n, n) : 1 == e && n < o ? (o != this.duration && this._runAction(this._steps[p], o, this.duration), 
                this._runAction(this._steps[p], 0, n, !0)) : this._runAction(this._steps[p], o, n)); else if ("step" == this._steps[p].type && u == p) {
                    var a = this._steps[u];
                    this._updateTargetProps(a, Math.min((this._stepPosition = n - a.t) / a.d, 1));
                }
            }
            return this.dispatchEventWith("change"), i;
        }, i.prototype._runAction = function(t, e, n, i) {
            void 0 === i && (i = !1);
            var s = e, o = n;
            e > n && (s = n, o = e);
            var r = t.t;
            (r == o || r > s && r < o || i && r == e) && t.f.apply(t.o, t.p);
        }, i.prototype._updateTargetProps = function(t, e) {
            var n, s, o, r, u, p;
            if (t || 1 != e) {
                if (this.passive = !!t.v, this.passive) return;
                t.e && (e = t.e(e, 0, 1, 1)), n = t.p0, s = t.p1;
            } else this.passive = !1, n = s = this._curQueueProps;
            for (var a in this._initQueueProps) {
                null == (r = n[a]) && (n[a] = r = this._initQueueProps[a]), null == (u = s[a]) && (s[a] = u = r), 
                o = r == u || 0 == e || 1 == e || "number" != typeof r ? 1 == e ? u : r : r + (u - r) * e;
                var h = !1;
                if (p = i._plugins[a]) for (var c = 0, f = p.length; c < f; c++) {
                    var _ = p[c].tween(this, a, o, n, s, e, !!t && n == s, !t);
                    _ == i.IGNORE ? h = !0 : o = _;
                }
                h || (this._target[a] = o);
            }
        }, i.prototype.setPaused = function(t) {
            return this.paused == t ? this : (this.paused = t, i._register(this, !t), this);
        }, i.prototype._cloneProps = function(t) {
            var e = {};
            for (var n in t) e[n] = t[n];
            return e;
        }, i.prototype._addStep = function(t) {
            return t.d > 0 && (t.type = "step", this._steps.push(t), t.t = this.duration, this.duration += t.d), 
            this;
        }, i.prototype._appendQueueProps = function(t) {
            var e, n, s, o, r;
            for (var u in t) if (void 0 === this._initQueueProps[u]) {
                if (n = this._target[u], e = i._plugins[u]) for (s = 0, o = e.length; s < o; s++) n = e[s].init(this, u, n);
                this._initQueueProps[u] = this._curQueueProps[u] = void 0 === n ? null : n;
            } else n = this._curQueueProps[u];
            for (var u in t) {
                if (n = this._curQueueProps[u], e = i._plugins[u]) for (r = r || {}, s = 0, o = e.length; s < o; s++) e[s].step && e[s].step(this, u, n, t[u], r);
                this._curQueueProps[u] = t[u];
            }
            return r && this._appendQueueProps(r), this._curQueueProps;
        }, i.prototype._addAction = function(t) {
            return t.t = this.duration, t.type = "action", this._steps.push(t), this;
        }, i.prototype._set = function(t, e) {
            for (var n in t) e[n] = t[n];
        }, i.prototype.wait = function(t, e) {
            if (null == t || t <= 0) return this;
            var n = this._cloneProps(this._curQueueProps);
            return this._addStep({
                d: t,
                p0: n,
                p1: n,
                v: e
            });
        }, i.prototype.to = function(t, e, n) {
            return void 0 === n && (n = void 0), (isNaN(e) || e < 0) && (e = 0), this._addStep({
                d: e || 0,
                p0: this._cloneProps(this._curQueueProps),
                e: n,
                p1: this._cloneProps(this._appendQueueProps(t))
            }), this.set(t);
        }, i.prototype.call = function(t, e, n) {
            return void 0 === e && (e = void 0), void 0 === n && (n = void 0), this._addAction({
                f: t,
                p: n || [],
                o: e || this._target
            });
        }, i.prototype.set = function(t, e) {
            return void 0 === e && (e = null), this._appendQueueProps(t), this._addAction({
                f: this._set,
                o: this,
                p: [ t, e || this._target ]
            });
        }, i.prototype.play = function(t) {
            return t || (t = this), this.call(t.setPaused, t, [ !1 ]);
        }, i.prototype.pause = function(t) {
            return t || (t = this), this.call(t.setPaused, t, [ !0 ]);
        }, i.prototype.$tick = function(t) {
            this.paused || this.setPosition(this._prevPosition + t);
        }, i.NONE = 0, i.LOOP = 1, i.REVERSE = 2, i._tweens = [], i.IGNORE = {}, i._plugins = {}, 
        i._inited = !1, i._lastTime = 0, i;
    }(n.EventDispatcher);
    n.Tween = i, t(i.prototype, "egret.Tween");
}(n || (n = {}));

var n;

!function(n) {
    !function(i) {
        function s(t) {
            if ("function" == typeof t) return t;
            var e = n.Ease[t];
            return "function" == typeof e ? e : null;
        }
        function o(t, e, n, i) {
            var s = t.prototype;
            s.__meta__ = s.__meta__ || {}, s.__meta__[e] = n, i && (s.__defaultProperty__ = e);
        }
        var r = function(t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "", e;
            }
            return e(n, t), n;
        }(n.EventDispatcher);
        i.BasePath = r, t(r.prototype, "egret.tween.BasePath");
        var u = function(t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.props = void 0, e.duration = 500, e.ease = void 0, e;
            }
            return e(n, t), n;
        }(r);
        i.To = u, t(u.prototype, "egret.tween.To");
        var p = function(t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.duration = 500, e.passive = void 0, e;
            }
            return e(n, t), n;
        }(r);
        i.Wait = p, t(p.prototype, "egret.tween.Wait");
        var a = function(t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.props = void 0, e;
            }
            return e(n, t), n;
        }(r);
        i.Set = a, t(a.prototype, "egret.tween.Set");
        var h = function(t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.delta = 0, e;
            }
            return e(n, t), n;
        }(r);
        i.Tick = h, t(h.prototype, "egret.tween.Tick");
        var c = function(t) {
            function i() {
                var e = t.call(this) || this;
                return e.isStop = !1, e;
            }
            return e(i, t), Object.defineProperty(i.prototype, "props", {
                get: function() {
                    return this._props;
                },
                set: function(t) {
                    this._props = t;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(i.prototype, "target", {
                get: function() {
                    return this._target;
                },
                set: function(t) {
                    this._target = t;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(i.prototype, "paths", {
                get: function() {
                    return this._paths;
                },
                set: function(t) {
                    this._paths = t || [];
                },
                enumerable: !0,
                configurable: !0
            }), i.prototype.play = function(t) {
                this.tween ? (this.tween.setPaused(!1), this.isStop && void 0 == t && (t = 0, this.isStop = !1), 
                void 0 !== t && null !== t && this.tween.setPosition(t)) : this.createTween(t);
            }, i.prototype.pause = function() {
                this.tween && this.tween.setPaused(!0);
            }, i.prototype.stop = function() {
                this.pause(), this.isStop = !0;
            }, i.prototype.createTween = function(t) {
                this.tween = n.Tween.get(this._target, this._props), this._paths && this.applyPaths(), 
                void 0 !== t && null !== t && this.tween.setPosition(t);
            }, i.prototype.applyPaths = function() {
                for (var t = 0; t < this._paths.length; t++) {
                    var e = this._paths[t];
                    this.applyPath(e);
                }
            }, i.prototype.applyPath = function(t) {
                var e = this;
                t instanceof u ? this.tween.to(t.props, t.duration, s(t.ease)) : t instanceof p ? this.tween.wait(t.duration, t.passive) : t instanceof a ? this.tween.set(t.props) : t instanceof h && this.tween.$tick(t.delta), 
                this.tween.call(function() {
                    return e.pathComplete(t);
                });
            }, i.prototype.pathComplete = function(t) {
                t.dispatchEventWith("complete"), this.dispatchEventWith("pathComplete", !1, t);
                var e = this._paths.indexOf(t);
                e >= 0 && e === this._paths.length - 1 && this.dispatchEventWith("complete");
            }, i;
        }(n.EventDispatcher);
        i.TweenItem = c, t(c.prototype, "egret.tween.TweenItem"), o(c, "paths", "Array", !0);
        var f = function(t) {
            function n() {
                var e = t.call(this) || this;
                return e.completeCount = 0, e;
            }
            return e(n, t), Object.defineProperty(n.prototype, "items", {
                get: function() {
                    return this._items;
                },
                set: function(t) {
                    this.completeCount = 0, this.registerEvent(!1), this._items = t, this.registerEvent(!0);
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.registerEvent = function(t) {
                var e = this;
                this._items && this._items.forEach(function(n) {
                    t ? n.addEventListener("complete", e.itemComplete, e) : n.removeEventListener("complete", e.itemComplete, e);
                });
            }, n.prototype.play = function(t) {
                if (this._items) for (var e = 0; e < this._items.length; e++) this._items[e].play(t);
            }, n.prototype.pause = function() {
                if (this._items) for (var t = 0; t < this._items.length; t++) this._items[t].pause();
            }, n.prototype.stop = function() {
                if (this._items) for (var t = 0; t < this._items.length; t++) this._items[t].stop();
            }, n.prototype.itemComplete = function(t) {
                var e = t.currentTarget;
                this.completeCount++, this.dispatchEventWith("itemComplete", !1, e), this.completeCount === this.items.length && (this.dispatchEventWith("complete"), 
                this.completeCount = 0);
            }, n;
        }(n.EventDispatcher);
        i.TweenGroup = f, t(f.prototype, "egret.tween.TweenGroup"), o(f, "items", "Array", !0);
    }(n.tween || (n.tween = {}));
}(n || (n = {}));