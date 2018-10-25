var t = function(t, e, i) {
    t.__class__ = e, i ? i.push(e) : i = [ e ], t.__types__ = t.__types__ ? i.concat(t.__types__) : i;
}, e = function(t, e) {
    function i() {
        this.constructor = t;
    }
    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
    i.prototype = e.prototype, t.prototype = new i();
};

!function(e) {
    var i = function() {
        function t() {}
        return t.BINARY = "binary", t.TEXT = "text", t.VARIABLES = "variables", t.TEXTURE = "texture", 
        t.SOUND = "sound", t;
    }();
    e.URLLoaderDataFormat = i, t(i.prototype, "egret.URLLoaderDataFormat");
}((i = window.egret) || (i = {}));

!function(i) {
    var r = function(t) {
        function i(e, i, r) {
            var o = t.call(this) || this;
            return o._name = e, o._frame = 0 | i, r && (o._end = 0 | r), o;
        }
        return e(i, t), Object.defineProperty(i.prototype, "name", {
            get: function() {
                return this._name;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "frame", {
            get: function() {
                return this._frame;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(i.prototype, "end", {
            get: function() {
                return this._end;
            },
            enumerable: !0,
            configurable: !0
        }), i.prototype.clone = function() {
            return new i(this._name, this._frame, this._end);
        }, i;
    }(i.EventDispatcher);
    i.FrameLabel = r, t(r.prototype, "egret.FrameLabel");
}(i || (i = {}));

!function(i) {
    var r = function(t) {
        function r() {
            var e = t.call(this) || this;
            return e.$mcData = null, e.numFrames = 1, e.frames = [], e.labels = null, e.events = [], 
            e.frameRate = 0, e.textureData = null, e.spriteSheet = null, e;
        }
        return e(r, t), r.prototype.$init = function(t, e, i) {
            this.textureData = e, this.spriteSheet = i, this.setMCData(t);
        }, r.prototype.getKeyFrameData = function(t) {
            var e = this.frames[t - 1];
            return e.frame && (e = this.frames[e.frame - 1]), e;
        }, r.prototype.getTextureByFrame = function(t) {
            var e = this.getKeyFrameData(t);
            return e.res ? this.getTextureByResName(e.res) : null;
        }, r.prototype.$getOffsetByFrame = function(t, e) {
            var i = this.getKeyFrameData(t);
            i.res && e.setTo(0 | i.x, 0 | i.y);
        }, r.prototype.getTextureByResName = function(t) {
            if (null == this.spriteSheet) return null;
            var e = this.spriteSheet.getTexture(t);
            if (!e) {
                var i = this.textureData[t];
                e = this.spriteSheet.createTexture(t, i.x, i.y, i.w, i.h);
            }
            return e;
        }, r.prototype.$isDataValid = function() {
            return this.frames.length > 0;
        }, r.prototype.$isTextureValid = function() {
            return null != this.textureData && null != this.spriteSheet;
        }, r.prototype.$fillMCData = function(t) {
            this.frameRate = t.frameRate || 24, this.fillFramesData(t.frames), this.fillFrameLabelsData(t.labels), 
            this.fillFrameEventsData(t.events);
        }, r.prototype.fillFramesData = function(t) {
            for (var e, i = this.frames, r = t ? t.length : 0, o = 0; o < r; o++) {
                var n = t[o];
                if (i.push(n), n.duration) {
                    var s = parseInt(n.duration);
                    if (s > 1) {
                        e = i.length;
                        for (var a = 1; a < s; a++) i.push({
                            frame: e
                        });
                    }
                }
            }
            this.numFrames = i.length;
        }, r.prototype.fillFrameLabelsData = function(t) {
            if (t) {
                var e = t.length;
                if (e > 0) {
                    this.labels = [];
                    for (var r = 0; r < e; r++) {
                        var o = t[r];
                        this.labels.push(new i.FrameLabel(o.name, o.frame, o.end));
                    }
                }
            }
        }, r.prototype.fillFrameEventsData = function(t) {
            if (t) {
                var e = t.length;
                if (e > 0) {
                    this.events = [];
                    for (var i = 0; i < e; i++) {
                        var r = t[i];
                        this.events[r.frame] = r.name;
                    }
                }
            }
        }, Object.defineProperty(r.prototype, "mcData", {
            get: function() {
                return this.$mcData;
            },
            set: function(t) {
                this.setMCData(t);
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.setMCData = function(t) {
            this.$mcData != t && (this.$mcData = t, t && this.$fillMCData(t));
        }, r;
    }(i.HashObject);
    i.MovieClipData = r, t(r.prototype, "egret.MovieClipData");
}(i || (i = {}));

!function(i) {
    var r = function(t) {
        function r(e, i) {
            var r = t.call(this) || this;
            return r.enableCache = !0, r.$mcDataCache = {}, r.$mcDataSet = e, r.setTexture(i), 
            r;
        }
        return e(r, t), r.prototype.clearCache = function() {
            this.$mcDataCache = {};
        }, r.prototype.generateMovieClipData = function(t) {
            if (void 0 === t && (t = ""), "" == t && this.$mcDataSet) for (t in this.$mcDataSet.mc) break;
            if ("" == t) return null;
            var e = this.findFromCache(t, this.$mcDataCache);
            return e || (e = new i.MovieClipData(), this.fillData(t, e, this.$mcDataCache)), 
            e;
        }, r.prototype.findFromCache = function(t, e) {
            return this.enableCache && e[t] ? e[t] : null;
        }, r.prototype.fillData = function(t, e, i) {
            if (this.$mcDataSet) {
                var r = this.$mcDataSet.mc[t];
                r && (e.$init(r, this.$mcDataSet.res, this.$spriteSheet), this.enableCache && (i[t] = e));
            }
        }, Object.defineProperty(r.prototype, "mcDataSet", {
            get: function() {
                return this.$mcDataSet;
            },
            set: function(t) {
                this.$mcDataSet = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "texture", {
            set: function(t) {
                this.setTexture(t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "spriteSheet", {
            get: function() {
                return this.$spriteSheet;
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.setTexture = function(t) {
            this.$spriteSheet = t ? new i.SpriteSheet(t) : null;
        }, r;
    }(i.EventDispatcher);
    i.MovieClipDataFactory = r, t(r.prototype, "egret.MovieClipDataFactory");
}(i || (i = {}));

!function(i) {
    var r = function(t) {
        function r(e, i, r, o) {
            void 0 === i && (i = !1), void 0 === r && (r = !1), void 0 === o && (o = null);
            var n = t.call(this, e, i, r) || this;
            return n.frameLabel = null, n.frameLabel = o, n;
        }
        return e(r, t), r.dispatchMovieClipEvent = function(t, e, o) {
            void 0 === o && (o = null);
            var n = i.Event.create(r, e);
            n.frameLabel = o;
            var s = t.dispatchEvent(n);
            return i.Event.release(n), s;
        }, r.FRAME_LABEL = "frame_label", r;
    }(i.Event);
    i.MovieClipEvent = r, t(r.prototype, "egret.MovieClipEvent");
}(i || (i = {}));

!function(i) {
    var r = function() {
        function t() {
            i.$error(1014);
        }
        return t.get = function(t) {
            return t < -1 && (t = -1), t > 1 && (t = 1), function(e) {
                return 0 == t ? e : t < 0 ? e * (e * -t + 1 + t) : e * ((2 - e) * t + (1 - t));
            };
        }, t.getPowOut = function(t) {
            return function(e) {
                return 1 - Math.pow(1 - e, t);
            };
        }, t.quintOut = t.getPowOut(5), t.quartOut = t.getPowOut(4), t;
    }();
    i.ScrollEase = r, t(r.prototype, "egret.ScrollEase");
    var o = function(t) {
        function r(e, i, r) {
            var o = t.call(this) || this;
            return o._target = null, o._useTicks = !1, o.ignoreGlobalPause = !1, o.loop = !1, 
            o.pluginData = null, o._steps = null, o._actions = null, o.paused = !1, o.duration = 0, 
            o._prevPos = -1, o.position = null, o._prevPosition = 0, o._stepPosition = 0, o.passive = !1, 
            o.initialize(e, i, r), o;
        }
        return e(r, t), r.get = function(t, e, i, o) {
            return void 0 === e && (e = null), void 0 === i && (i = null), void 0 === o && (o = !1), 
            o && r.removeTweens(t), new r(t, e, i);
        }, r.removeTweens = function(t) {
            if (t.tween_count) {
                for (var e = r._tweens, i = e.length - 1; i >= 0; i--) e[i]._target == t && (e[i].paused = !0, 
                e.splice(i, 1));
                t.tween_count = 0;
            }
        }, r.tick = function(t, e) {
            void 0 === e && (e = !1);
            var i = t - r._lastTime;
            r._lastTime = t;
            for (var o = r._tweens.concat(), n = o.length - 1; n >= 0; n--) {
                var s = o[n];
                e && !s.ignoreGlobalPause || s.paused || s.tick(s._useTicks ? 1 : i);
            }
            return !1;
        }, r._register = function(t, e) {
            var o = t._target, n = r._tweens;
            if (e) o && (o.tween_count = o.tween_count > 0 ? o.tween_count + 1 : 1), n.push(t), 
            r._inited || (r._lastTime = i.getTimer(), i.ticker.$startTick(r.tick, null), r._inited = !0); else {
                o && o.tween_count--;
                for (var s = n.length; s--; ) if (n[s] == t) return void n.splice(s, 1);
            }
        }, r.prototype.initialize = function(t, e, i) {
            this._target = t, e && (this._useTicks = e.useTicks, this.ignoreGlobalPause = e.ignoreGlobalPause, 
            this.loop = e.loop, e.onChange && this.addEventListener("change", e.onChange, e.onChangeObj), 
            e.override && r.removeTweens(t)), this.pluginData = i || {}, this._curQueueProps = {}, 
            this._initQueueProps = {}, this._steps = [], this._actions = [], e && e.paused ? this.paused = !0 : r._register(this, !0), 
            e && null != e.position && this.setPosition(e.position);
        }, r.prototype.setPosition = function(t, e) {
            void 0 === e && (e = 1), t < 0 && (t = 0);
            var i = t, r = !1;
            if (i >= this.duration && (this.loop ? i %= this.duration : (i = this.duration, 
            r = !0)), i == this._prevPos) return r;
            var o = this._prevPos;
            if (this.position = this._prevPos = i, this._prevPosition = t, this._target) if (r) this._updateTargetProps(null, 1); else if (this._steps.length > 0) {
                var n = void 0, s = this._steps.length;
                for (n = 0; n < s && !(this._steps[n].t > i); n++) ;
                var a = this._steps[n - 1];
                this._updateTargetProps(a, (this._stepPosition = i - a.t) / a.d);
            }
            return r && this.setPaused(!0), 0 != e && this._actions.length > 0 && (this._useTicks ? this._runActions(i, i) : 1 == e && i < o ? (o != this.duration && this._runActions(o, this.duration), 
            this._runActions(0, i, !0)) : this._runActions(o, i)), this.dispatchEventWith("change"), 
            r;
        }, r.prototype._runActions = function(t, e, i) {
            void 0 === i && (i = !1);
            var r = t, o = e, n = -1, s = this._actions.length, a = 1;
            for (t > e && (r = e, o = t, n = s, s = a = -1); (n += a) != s; ) {
                var c = this._actions[n], h = c.t;
                (h == o || h > r && h < o || i && h == t) && c.f.apply(c.o, c.p);
            }
        }, r.prototype._updateTargetProps = function(t, e) {
            var i, o, n, s, a, c;
            if (t || 1 != e) {
                if (this.passive = !!t.v, this.passive) return;
                t.e && (e = t.e(e, 0, 1, 1)), i = t.p0, o = t.p1;
            } else this.passive = !1, i = o = this._curQueueProps;
            for (var h in this._initQueueProps) {
                null == (s = i[h]) && (i[h] = s = this._initQueueProps[h]), null == (a = o[h]) && (o[h] = a = s), 
                n = s == a || 0 == e || 1 == e || "number" != typeof s ? 1 == e ? a : s : s + (a - s) * e;
                var l = !1;
                if (c = r._plugins[h]) for (var u = 0, p = c.length; u < p; u++) {
                    var _ = c[u].tween(this, h, n, i, o, e, !!t && i == o, !t);
                    _ == r.IGNORE ? l = !0 : n = _;
                }
                l || (this._target[h] = n);
            }
        }, r.prototype.setPaused = function(t) {
            return this.paused = t, r._register(this, !t), this;
        }, r.prototype._cloneProps = function(t) {
            var e = {};
            for (var i in t) e[i] = t[i];
            return e;
        }, r.prototype._addStep = function(t) {
            return t.d > 0 && (this._steps.push(t), t.t = this.duration, this.duration += t.d), 
            this;
        }, r.prototype._appendQueueProps = function(t) {
            var e, i, o, n, s;
            for (var a in t) if (void 0 === this._initQueueProps[a]) {
                if (i = this._target[a], e = r._plugins[a]) for (o = 0, n = e.length; o < n; o++) i = e[o].init(this, a, i);
                this._initQueueProps[a] = this._curQueueProps[a] = void 0 === i ? null : i;
            } else i = this._curQueueProps[a];
            for (var a in t) {
                if (i = this._curQueueProps[a], e = r._plugins[a]) for (s = s || {}, o = 0, n = e.length; o < n; o++) e[o].step && e[o].step(this, a, i, t[a], s);
                this._curQueueProps[a] = t[a];
            }
            return s && this._appendQueueProps(s), this._curQueueProps;
        }, r.prototype._addAction = function(t) {
            return t.t = this.duration, this._actions.push(t), this;
        }, r.prototype.to = function(t, e, i) {
            return void 0 === i && (i = void 0), (isNaN(e) || e < 0) && (e = 0), this._addStep({
                d: e || 0,
                p0: this._cloneProps(this._curQueueProps),
                e: i,
                p1: this._cloneProps(this._appendQueueProps(t))
            });
        }, r.prototype.call = function(t, e, i) {
            return void 0 === e && (e = void 0), void 0 === i && (i = void 0), this._addAction({
                f: t,
                p: i || [],
                o: e || this._target
            });
        }, r.prototype.tick = function(t) {
            this.paused || this.setPosition(this._prevPosition + t);
        }, r._tweens = [], r.IGNORE = {}, r._plugins = {}, r._inited = !1, r._lastTime = 0, 
        r;
    }(i.EventDispatcher);
    i.ScrollTween = o, t(o.prototype, "egret.ScrollTween");
}(i || (i = {}));

!function(i) {
    var r = function(t) {
        function r(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return r.scrollBeginThreshold = 10, r.scrollSpeed = 1, r._content = null, r.delayTouchBeginEvent = null, 
            r.touchBeginTimer = null, r.touchEnabled = !0, r._ScrV_Props_ = new i.ScrollViewProperties(), 
            e && r.setContent(e), r;
        }
        return e(r, t), Object.defineProperty(r.prototype, "bounces", {
            get: function() {
                return this._ScrV_Props_._bounces;
            },
            set: function(t) {
                this._ScrV_Props_._bounces = !!t;
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.setContent = function(e) {
            this._content !== e && (this.removeContent(), e && (this._content = e, t.prototype.addChild.call(this, e), 
            this._addEvents()));
        }, r.prototype.removeContent = function() {
            this._content && (this._removeEvents(), t.prototype.removeChildAt.call(this, 0)), 
            this._content = null;
        }, Object.defineProperty(r.prototype, "verticalScrollPolicy", {
            get: function() {
                return this._ScrV_Props_._verticalScrollPolicy;
            },
            set: function(t) {
                t != this._ScrV_Props_._verticalScrollPolicy && (this._ScrV_Props_._verticalScrollPolicy = t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "horizontalScrollPolicy", {
            get: function() {
                return this._ScrV_Props_._horizontalScrollPolicy;
            },
            set: function(t) {
                t != this._ScrV_Props_._horizontalScrollPolicy && (this._ScrV_Props_._horizontalScrollPolicy = t);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "scrollLeft", {
            get: function() {
                return this._ScrV_Props_._scrollLeft;
            },
            set: function(t) {
                t != this._ScrV_Props_._scrollLeft && (this._ScrV_Props_._scrollLeft = t, this._validatePosition(!1, !0), 
                this._updateContentPosition());
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "scrollTop", {
            get: function() {
                return this._ScrV_Props_._scrollTop;
            },
            set: function(t) {
                t != this._ScrV_Props_._scrollTop && (this._ScrV_Props_._scrollTop = t, this._validatePosition(!0, !1), 
                this._updateContentPosition());
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.setScrollPosition = function(t, e, i) {
            if (void 0 === i && (i = !1), (!i || 0 != t || 0 != e) && (i || this._ScrV_Props_._scrollTop != t || this._ScrV_Props_._scrollLeft != e)) {
                var r = this._ScrV_Props_._scrollTop, o = this._ScrV_Props_._scrollLeft;
                if (i) {
                    var n = this.getMaxScrollLeft(), s = this.getMaxScrollTop();
                    (r <= 0 || r >= s) && (t /= 2), (o <= 0 || o >= n) && (e /= 2);
                    var a = r + t, c = o + e;
                    this._ScrV_Props_._bounces || ((a <= 0 || a >= s) && (a = Math.max(0, Math.min(a, s))), 
                    (c <= 0 || c >= n) && (c = Math.max(0, Math.min(c, n)))), this._ScrV_Props_._scrollTop = a, 
                    this._ScrV_Props_._scrollLeft = c;
                } else this._ScrV_Props_._scrollTop = t, this._ScrV_Props_._scrollLeft = e;
                this._validatePosition(!0, !0), this._updateContentPosition();
            }
        }, r.prototype._validatePosition = function(t, e) {
            if (void 0 === t && (t = !1), void 0 === e && (e = !1), t) {
                var i = this.height, r = this._getContentHeight();
                this._ScrV_Props_._scrollTop = Math.max(this._ScrV_Props_._scrollTop, (0 - i) / 2), 
                this._ScrV_Props_._scrollTop = Math.min(this._ScrV_Props_._scrollTop, r > i ? r - i / 2 : i / 2);
            }
            if (e) {
                var o = this.width, n = this._getContentWidth();
                this._ScrV_Props_._scrollLeft = Math.max(this._ScrV_Props_._scrollLeft, (0 - o) / 2), 
                this._ScrV_Props_._scrollLeft = Math.min(this._ScrV_Props_._scrollLeft, n > o ? n - o / 2 : o / 2);
            }
        }, r.prototype.$setWidth = function(e) {
            this.$explicitWidth != e && (t.prototype.$setWidth.call(this, e), this._updateContentPosition());
        }, r.prototype.$setHeight = function(e) {
            this.$explicitHeight != e && (t.prototype.$setHeight.call(this, e), this._updateContentPosition());
        }, r.prototype._updateContentPosition = function() {
            var t = this.height, e = this.width;
            this.scrollRect = new i.Rectangle(Math.round(this._ScrV_Props_._scrollLeft), Math.round(this._ScrV_Props_._scrollTop), e, t), 
            this.dispatchEvent(new i.Event(i.Event.CHANGE));
        }, r.prototype._checkScrollPolicy = function() {
            var t = this._ScrV_Props_._horizontalScrollPolicy, e = this.__checkScrollPolicy(t, this._getContentWidth(), this.width);
            this._ScrV_Props_._hCanScroll = e;
            var i = this._ScrV_Props_._verticalScrollPolicy, r = this.__checkScrollPolicy(i, this._getContentHeight(), this.height);
            return this._ScrV_Props_._vCanScroll = r, e || r;
        }, r.prototype.__checkScrollPolicy = function(t, e, i) {
            return "on" == t || "off" != t && e > i;
        }, r.prototype._addEvents = function() {
            this.addEventListener(i.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this), this.addEventListener(i.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0), 
            this.addEventListener(i.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0);
        }, r.prototype._removeEvents = function() {
            this.removeEventListener(i.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this), this.removeEventListener(i.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0), 
            this.removeEventListener(i.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0);
        }, r.prototype._onTouchBegin = function(t) {
            t.$isDefaultPrevented || this._checkScrollPolicy() && (this._ScrV_Props_._touchStartPosition.x = t.stageX, 
            this._ScrV_Props_._touchStartPosition.y = t.stageY, (this._ScrV_Props_._isHTweenPlaying || this._ScrV_Props_._isVTweenPlaying) && this._onScrollFinished(), 
            this._tempStage = this.stage, this._tempStage.addEventListener(i.TouchEvent.TOUCH_MOVE, this._onTouchMove, this), 
            this._tempStage.addEventListener(i.TouchEvent.TOUCH_END, this._onTouchEnd, this), 
            this._tempStage.addEventListener(i.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this), 
            this.addEventListener(i.Event.ENTER_FRAME, this._onEnterFrame, this), this._logTouchEvent(t), 
            t.preventDefault());
        }, r.prototype._onTouchBeginCapture = function(t) {
            var e = this._checkScrollPolicy();
            if (e) {
                for (var r = t.target; r != this; ) {
                    if ("_checkScrollPolicy" in r && (e = r._checkScrollPolicy())) return;
                    r = r.parent;
                }
                t.stopPropagation();
                var o = this.cloneTouchEvent(t);
                this.delayTouchBeginEvent = o, this.touchBeginTimer || (this.touchBeginTimer = new i.Timer(100, 1), 
                this.touchBeginTimer.addEventListener(i.TimerEvent.TIMER_COMPLETE, this._onTouchBeginTimer, this)), 
                this.touchBeginTimer.start(), this._onTouchBegin(t);
            }
        }, r.prototype._onTouchEndCapture = function(t) {
            var e = this;
            if (this.delayTouchBeginEvent) {
                this._onTouchBeginTimer(), t.stopPropagation();
                var r = this.cloneTouchEvent(t);
                i.callLater(function() {
                    e.stage && e.dispatchPropagationEvent(r);
                }, this);
            }
        }, r.prototype._onTouchBeginTimer = function() {
            this.touchBeginTimer.stop();
            var t = this.delayTouchBeginEvent;
            this.delayTouchBeginEvent = null, this.stage && this.dispatchPropagationEvent(t);
        }, r.prototype.dispatchPropagationEvent = function(t) {
            for (var e = t.$target, r = this.$getPropagationList(e), o = r.length, n = .5 * r.length, s = -1, a = 0; a < o; a++) if (r[a] === this._content) {
                s = a;
                break;
            }
            r.splice(0, s + 1), n -= s + 1, this.$dispatchPropagationEvent(t, r, n), i.Event.release(t);
        }, r.prototype._onTouchMove = function(t) {
            if (this._ScrV_Props_._lastTouchPosition.x != t.stageX || this._ScrV_Props_._lastTouchPosition.y != t.stageY) {
                if (!this._ScrV_Props_._scrollStarted) {
                    var e = t.stageX - this._ScrV_Props_._touchStartPosition.x, i = t.stageY - this._ScrV_Props_._touchStartPosition.y;
                    if (Math.sqrt(e * e + i * i) < this.scrollBeginThreshold) return void this._logTouchEvent(t);
                }
                this._ScrV_Props_._scrollStarted = !0, this.delayTouchBeginEvent && (this.delayTouchBeginEvent = null, 
                this.touchBeginTimer.stop()), this.touchChildren = !1;
                var r = this._getPointChange(t);
                this.setScrollPosition(r.y, r.x, !0), this._calcVelocitys(t), this._logTouchEvent(t);
            }
        }, r.prototype._onTouchEnd = function(t) {
            this.touchChildren = !0, this._ScrV_Props_._scrollStarted = !1, this._tempStage.removeEventListener(i.TouchEvent.TOUCH_MOVE, this._onTouchMove, this), 
            this._tempStage.removeEventListener(i.TouchEvent.TOUCH_END, this._onTouchEnd, this), 
            this._tempStage.removeEventListener(i.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this), 
            this.removeEventListener(i.Event.ENTER_FRAME, this._onEnterFrame, this), this._moveAfterTouchEnd();
        }, r.prototype._onEnterFrame = function(t) {
            var e = i.getTimer();
            e - this._ScrV_Props_._lastTouchTime > 100 && e - this._ScrV_Props_._lastTouchTime < 300 && this._calcVelocitys(this._ScrV_Props_._lastTouchEvent);
        }, r.prototype._logTouchEvent = function(t) {
            this._ScrV_Props_._lastTouchPosition.x = t.stageX, this._ScrV_Props_._lastTouchPosition.y = t.stageY, 
            this._ScrV_Props_._lastTouchEvent = this.cloneTouchEvent(t), this._ScrV_Props_._lastTouchTime = i.getTimer();
        }, r.prototype._getPointChange = function(t) {
            return {
                x: !1 === this._ScrV_Props_._hCanScroll ? 0 : this._ScrV_Props_._lastTouchPosition.x - t.stageX,
                y: !1 === this._ScrV_Props_._vCanScroll ? 0 : this._ScrV_Props_._lastTouchPosition.y - t.stageY
            };
        }, r.prototype._calcVelocitys = function(t) {
            var e = i.getTimer();
            if (0 != this._ScrV_Props_._lastTouchTime) {
                var r = this._getPointChange(t), o = e - this._ScrV_Props_._lastTouchTime;
                r.x /= o, r.y /= o, this._ScrV_Props_._velocitys.push(r), this._ScrV_Props_._velocitys.length > 5 && this._ScrV_Props_._velocitys.shift(), 
                this._ScrV_Props_._lastTouchPosition.x = t.stageX, this._ScrV_Props_._lastTouchPosition.y = t.stageY;
            } else this._ScrV_Props_._lastTouchTime = e;
        }, r.prototype._getContentWidth = function() {
            return this._content.$explicitWidth || this._content.width;
        }, r.prototype._getContentHeight = function() {
            return this._content.$explicitHeight || this._content.height;
        }, r.prototype.getMaxScrollLeft = function() {
            var t = this._getContentWidth() - this.width;
            return Math.max(0, t);
        }, r.prototype.getMaxScrollTop = function() {
            var t = this._getContentHeight() - this.height;
            return Math.max(0, t);
        }, r.prototype._moveAfterTouchEnd = function() {
            if (0 != this._ScrV_Props_._velocitys.length) {
                for (var t = {
                    x: 0,
                    y: 0
                }, e = 0, i = 0; i < this._ScrV_Props_._velocitys.length; i++) {
                    var o = this._ScrV_Props_._velocitys[i], n = r.weight[i];
                    t.x += o.x * n, t.y += o.y * n, e += n;
                }
                this._ScrV_Props_._velocitys.length = 0, this.scrollSpeed <= 0 && (this.scrollSpeed = 1);
                var s = t.x / e * this.scrollSpeed, a = t.y / e * this.scrollSpeed, c = Math.abs(s), h = Math.abs(a), l = this.getMaxScrollLeft(), u = this.getMaxScrollTop(), p = c > .02 ? this.getAnimationDatas(s, this._ScrV_Props_._scrollLeft, l) : {
                    position: this._ScrV_Props_._scrollLeft,
                    duration: 1
                }, _ = h > .02 ? this.getAnimationDatas(a, this._ScrV_Props_._scrollTop, u) : {
                    position: this._ScrV_Props_._scrollTop,
                    duration: 1
                };
                this.setScrollLeft(p.position, p.duration), this.setScrollTop(_.position, _.duration);
            }
        }, r.prototype.onTweenFinished = function(t) {
            t == this._ScrV_Props_._vScrollTween && (this._ScrV_Props_._isVTweenPlaying = !1), 
            t == this._ScrV_Props_._hScrollTween && (this._ScrV_Props_._isHTweenPlaying = !1), 
            0 == this._ScrV_Props_._isHTweenPlaying && 0 == this._ScrV_Props_._isVTweenPlaying && this._onScrollFinished();
        }, r.prototype._onScrollStarted = function() {}, r.prototype._onScrollFinished = function() {
            i.ScrollTween.removeTweens(this), this._ScrV_Props_._hScrollTween = null, this._ScrV_Props_._vScrollTween = null, 
            this._ScrV_Props_._isHTweenPlaying = !1, this._ScrV_Props_._isVTweenPlaying = !1, 
            this.dispatchEvent(new i.Event(i.Event.COMPLETE));
        }, r.prototype.setScrollTop = function(t, e) {
            void 0 === e && (e = 0);
            var r = Math.min(this.getMaxScrollTop(), Math.max(t, 0));
            if (0 != e) {
                0 == this._ScrV_Props_._bounces && (t = r);
                var o = i.ScrollTween.get(this).to({
                    scrollTop: t
                }, e, i.ScrollEase.quartOut);
                r != t && o.to({
                    scrollTop: r
                }, 300, i.ScrollEase.quintOut), this._ScrV_Props_._isVTweenPlaying = !0, this._ScrV_Props_._vScrollTween = o, 
                o.call(this.onTweenFinished, this, [ o ]), this._ScrV_Props_._isHTweenPlaying || this._onScrollStarted();
            } else this.scrollTop = r;
        }, r.prototype.setScrollLeft = function(t, e) {
            void 0 === e && (e = 0);
            var r = Math.min(this.getMaxScrollLeft(), Math.max(t, 0));
            if (0 != e) {
                0 == this._ScrV_Props_._bounces && (t = r);
                var o = i.ScrollTween.get(this).to({
                    scrollLeft: t
                }, e, i.ScrollEase.quartOut);
                r != t && o.to({
                    scrollLeft: r
                }, 300, i.ScrollEase.quintOut), this._ScrV_Props_._isHTweenPlaying = !0, this._ScrV_Props_._hScrollTween = o, 
                o.call(this.onTweenFinished, this, [ o ]), this._ScrV_Props_._isVTweenPlaying || this._onScrollStarted();
            } else this.scrollLeft = r;
        }, r.prototype.getAnimationDatas = function(t, e, i) {
            var r = Math.abs(t), o = 0, n = e + 500 * t;
            if (n < 0 || n > i) for (n = e; Math.abs(t) != 1 / 0 && Math.abs(t) > .02; ) t *= (n += t) < 0 || n > i ? .998 * .95 : .998, 
            o++; else o = 500 * -Math.log(.02 / r);
            return {
                position: Math.min(i + 50, Math.max(n, -50)),
                duration: o
            };
        }, r.prototype.cloneTouchEvent = function(t) {
            var e = new i.TouchEvent(t.type, t.bubbles, t.cancelable);
            return e.touchPointID = t.touchPointID, e.$stageX = t.stageX, e.$stageY = t.stageY, 
            e.touchDown = t.touchDown, e.$isDefaultPrevented = !1, e.$target = t.target, e;
        }, r.prototype.throwNotSupportedError = function() {
            i.$error(1023);
        }, r.prototype.addChild = function(t) {
            return this.throwNotSupportedError(), null;
        }, r.prototype.addChildAt = function(t, e) {
            return this.throwNotSupportedError(), null;
        }, r.prototype.removeChild = function(t) {
            return this.throwNotSupportedError(), null;
        }, r.prototype.removeChildAt = function(t) {
            return this.throwNotSupportedError(), null;
        }, r.prototype.setChildIndex = function(t, e) {
            this.throwNotSupportedError();
        }, r.prototype.swapChildren = function(t, e) {
            this.throwNotSupportedError();
        }, r.prototype.swapChildrenAt = function(t, e) {
            this.throwNotSupportedError();
        }, r.weight = [ 1, 1.33, 1.66, 2, 2.33 ], r;
    }(i.DisplayObjectContainer);
    i.ScrollView = r, t(r.prototype, "egret.ScrollView");
}(i || (i = {}));

!function(e) {
    var i = function() {
        return function() {
            this._verticalScrollPolicy = "auto", this._horizontalScrollPolicy = "auto", this._scrollLeft = 0, 
            this._scrollTop = 0, this._hCanScroll = !1, this._vCanScroll = !1, this._lastTouchPosition = new e.Point(0, 0), 
            this._touchStartPosition = new e.Point(0, 0), this._scrollStarted = !1, this._lastTouchTime = 0, 
            this._lastTouchEvent = null, this._velocitys = [], this._isHTweenPlaying = !1, this._isVTweenPlaying = !1, 
            this._hScrollTween = null, this._vScrollTween = null, this._bounces = !0;
        };
    }();
    e.ScrollViewProperties = i, t(i.prototype, "egret.ScrollViewProperties");
}(i || (i = {}));

!function(i) {
    function r(t) {
        var e = t.url;
        return -1 == e.indexOf("?") && t.method == i.URLRequestMethod.GET && t.data && t.data instanceof i.URLVariables && (e = e + "?" + t.data.toString()), 
        e;
    }
    var o = function(t) {
        function o(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return r.dataFormat = i.URLLoaderDataFormat.TEXT, r.data = null, r._request = null, 
            r._status = -1, e && r.load(e), r;
        }
        return e(o, t), o.prototype.load = function(t) {
            this._request = t, this.data = null;
            var e = this;
            if (e.dataFormat != i.URLLoaderDataFormat.TEXTURE) if (e.dataFormat != i.URLLoaderDataFormat.SOUND) {
                var o = r(t), n = new i.HttpRequest();
                n.open(o, t.method == i.URLRequestMethod.POST ? i.HttpMethod.POST : i.HttpMethod.GET);
                var s;
                t.method != i.URLRequestMethod.GET && t.data && (t.data instanceof i.URLVariables ? (n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
                s = t.data.toString()) : (n.setRequestHeader("Content-Type", "multipart/form-data"), 
                s = t.data));
                for (var a = t.requestHeaders.length, c = 0; c < a; c++) {
                    var h = t.requestHeaders[c];
                    n.setRequestHeader(h.name, h.value);
                }
                n.addEventListener(i.Event.COMPLETE, function() {
                    e.data = n.response, i.Event.dispatchEvent(e, i.Event.COMPLETE);
                }, this), n.addEventListener(i.IOErrorEvent.IO_ERROR, function() {
                    i.IOErrorEvent.dispatchIOErrorEvent(e);
                }, this), n.responseType = e.dataFormat == i.URLLoaderDataFormat.BINARY ? i.HttpResponseType.ARRAY_BUFFER : i.HttpResponseType.TEXT, 
                n.send(s);
            } else this.loadSound(e); else this.loadTexture(e);
        }, o.prototype.getResponseType = function(t) {
            switch (t) {
              case i.URLLoaderDataFormat.TEXT:
              case i.URLLoaderDataFormat.VARIABLES:
                return i.URLLoaderDataFormat.TEXT;

              case i.URLLoaderDataFormat.BINARY:
                return "arraybuffer";

              default:
                return t;
            }
        }, o.prototype.loadSound = function(t) {
            function e(e) {
                t.dispatchEvent(e);
            }
            function r(e) {
                n(), t.dispatchEvent(e);
            }
            function o(e) {
                n(), t.data = c, window.setTimeout(function() {
                    t.dispatchEventWith(i.Event.COMPLETE);
                }, 0);
            }
            function n() {
                c.removeEventListener(i.Event.COMPLETE, o, s), c.removeEventListener(i.IOErrorEvent.IO_ERROR, r, s), 
                c.removeEventListener(i.ProgressEvent.PROGRESS, e, s);
            }
            var s = this, a = t._request.url, c = new i.Sound();
            c.addEventListener(i.Event.COMPLETE, o, s), c.addEventListener(i.IOErrorEvent.IO_ERROR, r, s), 
            c.addEventListener(i.ProgressEvent.PROGRESS, e, s), c.load(a);
        }, o.prototype.loadTexture = function(t) {
            function e(e) {
                t.dispatchEvent(e);
            }
            function r(e) {
                n(), t.dispatchEvent(e);
            }
            function o(e) {
                n();
                var r = c.data;
                r.source.setAttribute("bitmapSrc", a);
                var o = new i.Texture();
                o._setBitmapData(r), t.data = o, window.setTimeout(function() {
                    t.dispatchEventWith(i.Event.COMPLETE);
                }, s);
            }
            function n() {
                c.removeEventListener(i.Event.COMPLETE, o, s), c.removeEventListener(i.IOErrorEvent.IO_ERROR, r, s), 
                c.removeEventListener(i.ProgressEvent.PROGRESS, e, s);
            }
            var s = this, a = t._request.url, c = new i.ImageLoader();
            c.addEventListener(i.Event.COMPLETE, o, s), c.addEventListener(i.IOErrorEvent.IO_ERROR, r, s), 
            c.addEventListener(i.ProgressEvent.PROGRESS, e, s), c.load(a);
        }, o.prototype.__recycle = function() {
            this._request = null, this.data = null;
        }, o;
    }(i.EventDispatcher);
    i.URLLoader = o, t(o.prototype, "egret.URLLoader");
}(i || (i = {}));

!function(i) {
    var r = function(t) {
        function r(e) {
            var r = t.call(this) || this;
            return r.$texture = null, r.offsetPoint = i.Point.create(0, 0), r.$movieClipData = null, 
            r.frames = null, r.$totalFrames = 0, r.frameLabels = null, r.$frameLabelStart = 0, 
            r.$frameLabelEnd = 0, r.frameEvents = null, r.frameIntervalTime = 0, r.$eventPool = null, 
            r.$isPlaying = !1, r.isStopped = !0, r.playTimes = 0, r.$currentFrameNum = 0, r.$nextFrameNum = 1, 
            r.displayedKeyFrameNum = 0, r.passedTime = 0, r.$frameRate = NaN, r.lastTime = 0, 
            r.$smoothing = i.Bitmap.defaultSmoothing, r.setMovieClipData(e), i.nativeRender || (r.$renderNode = new i.sys.NormalBitmapNode()), 
            r;
        }
        return e(r, t), r.prototype.createNativeDisplayObject = function() {
            this.$nativeDisplayObject = new egret_native.NativeDisplayObject(11);
        }, Object.defineProperty(r.prototype, "smoothing", {
            get: function() {
                return this.$smoothing;
            },
            set: function(t) {
                t != this.$smoothing && (this.$smoothing = t);
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.$init = function() {
            this.$reset();
            var t = this.$movieClipData;
            t && t.$isDataValid() && (this.frames = t.frames, this.$totalFrames = t.numFrames, 
            this.frameLabels = t.labels, this.frameEvents = t.events, this.$frameRate = t.frameRate, 
            this.frameIntervalTime = 1e3 / this.$frameRate, this._initFrame());
        }, r.prototype.$reset = function() {
            this.frames = null, this.playTimes = 0, this.$isPlaying = !1, this.setIsStopped(!0), 
            this.$currentFrameNum = 0, this.$nextFrameNum = 1, this.displayedKeyFrameNum = 0, 
            this.passedTime = 0, this.$eventPool = [];
        }, r.prototype._initFrame = function() {
            this.$movieClipData.$isTextureValid() && (this.advanceFrame(), this.constructFrame());
        }, r.prototype.$updateRenderNode = function() {
            var t = this.$texture;
            if (t) {
                var e = Math.round(this.offsetPoint.x), r = Math.round(this.offsetPoint.y), o = t.$bitmapWidth, n = t.$bitmapHeight, s = t.$getTextureWidth(), a = t.$getTextureHeight(), c = Math.round(t.$getScaleBitmapWidth()), h = Math.round(t.$getScaleBitmapHeight()), l = t.$sourceWidth, u = t.$sourceHeight;
                i.sys.BitmapNode.$updateTextureData(this.$renderNode, t.$bitmapData, t.$bitmapX, t.$bitmapY, o, n, e, r, s, a, c, h, l, u, i.BitmapFillMode.SCALE, this.$smoothing);
            }
        }, r.prototype.$measureContentBounds = function(t) {
            var e = this.$texture;
            if (e) {
                var i = this.offsetPoint.x, r = this.offsetPoint.y, o = e.$getTextureWidth(), n = e.$getTextureHeight();
                t.setTo(i, r, o, n);
            } else t.setEmpty();
        }, r.prototype.$onAddToStage = function(e, i) {
            t.prototype.$onAddToStage.call(this, e, i), this.$isPlaying && this.$totalFrames > 1 && this.setIsStopped(!1);
        }, r.prototype.$onRemoveFromStage = function() {
            t.prototype.$onRemoveFromStage.call(this), this.setIsStopped(!0);
        }, r.prototype.getFrameLabelByName = function(t, e) {
            void 0 === e && (e = !1), e && (t = t.toLowerCase());
            var i = this.frameLabels;
            if (i) for (var r = null, o = 0; o < i.length; o++) if (r = i[o], e ? r.name.toLowerCase() == t : r.name == t) return r;
            return null;
        }, r.prototype.getFrameStartEnd = function(t) {
            var e = this.frameLabels;
            if (e) for (var i = null, r = 0; r < e.length; r++) if (i = e[r], t == i.name) {
                this.$frameLabelStart = i.frame, this.$frameLabelEnd = i.end;
                break;
            }
        }, r.prototype.getFrameLabelByFrame = function(t) {
            var e = this.frameLabels;
            if (e) for (var i = null, r = 0; r < e.length; r++) if ((i = e[r]).frame == t) return i;
            return null;
        }, r.prototype.getFrameLabelForFrame = function(t) {
            var e = null, i = null, r = this.frameLabels;
            if (r) for (var o = 0; o < r.length; o++) {
                if ((i = r[o]).frame > t) return e;
                e = i;
            }
            return e;
        }, r.prototype.play = function(t) {
            void 0 === t && (t = 0), this.lastTime = i.getTimer(), this.passedTime = 0, this.$isPlaying = !0, 
            this.setPlayTimes(t), this.$totalFrames > 1 && this.$stage && this.setIsStopped(!1);
        }, r.prototype.stop = function() {
            this.$isPlaying = !1, this.setIsStopped(!0);
        }, r.prototype.prevFrame = function() {
            this.gotoAndStop(this.$currentFrameNum - 1);
        }, r.prototype.nextFrame = function() {
            this.gotoAndStop(this.$currentFrameNum + 1);
        }, r.prototype.gotoAndPlay = function(t, e) {
            void 0 === e && (e = 0), (0 == arguments.length || arguments.length > 2) && i.$error(1022, "MovieClip.gotoAndPlay()"), 
            "string" == typeof t ? this.getFrameStartEnd(t) : (this.$frameLabelStart = 0, this.$frameLabelEnd = 0), 
            this.play(e), this.gotoFrame(t);
        }, r.prototype.gotoAndStop = function(t) {
            1 != arguments.length && i.$error(1022, "MovieClip.gotoAndStop()"), this.stop(), 
            this.gotoFrame(t);
        }, r.prototype.gotoFrame = function(t) {
            var e;
            "string" == typeof t ? e = this.getFrameLabelByName(t).frame : (e = parseInt(t + "", 10)) != t && i.$error(1022, "Frame Label Not Found"), 
            e < 1 ? e = 1 : e > this.$totalFrames && (e = this.$totalFrames), e != this.$nextFrameNum && (this.$nextFrameNum = e, 
            this.advanceFrame(), this.constructFrame(), this.handlePendingEvent());
        }, r.prototype.advanceTime = function(t) {
            var e = this, r = t - e.lastTime;
            e.lastTime = t;
            var o = e.frameIntervalTime, n = e.passedTime + r;
            e.passedTime = n % o;
            var s = n / o;
            if (s < 1) return !1;
            for (;s >= 1; ) {
                if (s--, e.$nextFrameNum++, e.$nextFrameNum > e.$totalFrames || e.$frameLabelStart > 0 && e.$nextFrameNum > e.$frameLabelEnd) if (-1 == e.playTimes) e.$eventPool.push(i.Event.LOOP_COMPLETE), 
                e.$nextFrameNum = 1; else {
                    if (e.playTimes--, !(e.playTimes > 0)) {
                        e.$nextFrameNum = e.$totalFrames, e.$eventPool.push(i.Event.COMPLETE), e.stop();
                        break;
                    }
                    e.$eventPool.push(i.Event.LOOP_COMPLETE), e.$nextFrameNum = 1;
                }
                e.$currentFrameNum == e.$frameLabelEnd && (e.$nextFrameNum = e.$frameLabelStart), 
                e.advanceFrame();
            }
            return e.constructFrame(), e.handlePendingEvent(), !1;
        }, r.prototype.advanceFrame = function() {
            this.$currentFrameNum = this.$nextFrameNum;
            var t = this.frameEvents[this.$nextFrameNum];
            t && "" != t && i.MovieClipEvent.dispatchMovieClipEvent(this, i.MovieClipEvent.FRAME_LABEL, t);
        }, r.prototype.constructFrame = function() {
            var t = this, e = t.$currentFrameNum;
            if (t.displayedKeyFrameNum != e) {
                var r = t.$movieClipData.getTextureByFrame(e);
                if (t.$texture = r, t.$movieClipData.$getOffsetByFrame(e, t.offsetPoint), t.displayedKeyFrameNum = e, 
                t.$renderDirty = !0, i.nativeRender) t.$nativeDisplayObject.setDataToBitmapNode(t.$nativeDisplayObject.id, r, [ r.$bitmapX, r.$bitmapY, r.$bitmapWidth, r.$bitmapHeight, t.offsetPoint.x, t.offsetPoint.y, r.$getScaleBitmapWidth(), r.$getScaleBitmapHeight(), r.$sourceWidth, r.$sourceHeight ]), 
                t.$nativeDisplayObject.setWidth(r.$getTextureWidth() + t.offsetPoint.x), t.$nativeDisplayObject.setHeight(r.$getTextureHeight() + t.offsetPoint.y); else {
                    var o = t.$parent;
                    o && !o.$cacheDirty && (o.$cacheDirty = !0, o.$cacheDirtyUp());
                    var n = t.$maskedObject;
                    n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
                }
            }
        }, r.prototype.$renderFrame = function() {
            var t = this;
            t.$texture = t.$movieClipData.getTextureByFrame(t.$currentFrameNum), t.$renderDirty = !0;
            var e = t.$parent;
            e && !e.$cacheDirty && (e.$cacheDirty = !0, e.$cacheDirtyUp());
            var i = t.$maskedObject;
            i && !i.$cacheDirty && (i.$cacheDirty = !0, i.$cacheDirtyUp());
        }, r.prototype.handlePendingEvent = function() {
            if (0 != this.$eventPool.length) {
                this.$eventPool.reverse();
                for (var t = this.$eventPool, e = t.length, r = !1, o = !1, n = 0; n < e; n++) {
                    var s = t.pop();
                    s == i.Event.LOOP_COMPLETE ? o = !0 : s == i.Event.COMPLETE ? r = !0 : this.dispatchEventWith(s);
                }
                o && this.dispatchEventWith(i.Event.LOOP_COMPLETE), r && this.dispatchEventWith(i.Event.COMPLETE);
            }
        }, Object.defineProperty(r.prototype, "totalFrames", {
            get: function() {
                return this.$totalFrames;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "currentFrame", {
            get: function() {
                return this.$currentFrameNum;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "currentFrameLabel", {
            get: function() {
                var t = this.getFrameLabelByFrame(this.$currentFrameNum);
                return t && t.name;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "currentLabel", {
            get: function() {
                var t = this.getFrameLabelForFrame(this.$currentFrameNum);
                return t ? t.name : null;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "frameRate", {
            get: function() {
                return this.$frameRate;
            },
            set: function(t) {
                t != this.$frameRate && (this.$frameRate = t, this.frameIntervalTime = 1e3 / this.$frameRate);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "isPlaying", {
            get: function() {
                return this.$isPlaying;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "movieClipData", {
            get: function() {
                return this.$movieClipData;
            },
            set: function(t) {
                this.setMovieClipData(t);
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.setMovieClipData = function(t) {
            this.$movieClipData != t && (this.$movieClipData = t, this.$init());
        }, r.prototype.setPlayTimes = function(t) {
            (t < 0 || t >= 1) && (this.playTimes = t < 0 ? -1 : Math.floor(t));
        }, r.prototype.setIsStopped = function(t) {
            this.isStopped != t && (this.isStopped = t, t ? i.ticker.$stopTick(this.advanceTime, this) : (this.playTimes = 0 == this.playTimes ? 1 : this.playTimes, 
            this.lastTime = i.getTimer(), i.ticker.$startTick(this.advanceTime, this)));
        }, r;
    }(i.DisplayObject);
    i.MovieClip = r, t(r.prototype, "egret.MovieClip");
}(i || (i = {}));

!function(i) {
    var r = function(t) {
        function r(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return r.data = null, r.method = i.URLRequestMethod.GET, r.url = "", r.requestHeaders = [], 
            r.url = e, r;
        }
        return e(r, t), r;
    }(i.HashObject);
    i.URLRequest = r, t(r.prototype, "egret.URLRequest");
}(i || (i = {}));

!function(e) {
    var i = function() {
        return function(t, e) {
            this.name = "", this.value = "", this.name = t, this.value = e;
        };
    }();
    e.URLRequestHeader = i, t(i.prototype, "egret.URLRequestHeader");
}(i || (i = {}));

!function(e) {
    var i = function() {
        function t() {}
        return t.GET = "get", t.POST = "post", t;
    }();
    e.URLRequestMethod = i, t(i.prototype, "egret.URLRequestMethod");
}(i || (i = {}));

!function(i) {
    var r = function(t) {
        function i(e) {
            void 0 === e && (e = null);
            var i = t.call(this) || this;
            return i.variables = null, null !== e && i.decode(e), i;
        }
        return e(i, t), i.prototype.decode = function(t) {
            this.variables || (this.variables = {}), t = t.split("+").join(" ");
            for (var e, i = /[?&]?([^=]+)=([^&]*)/g; e = i.exec(t); ) {
                var r = decodeURIComponent(e[1]), o = decodeURIComponent(e[2]);
                if (r in this.variables != 0) {
                    var n = this.variables[r];
                    n instanceof Array ? n.push(o) : this.variables[r] = [ n, o ];
                } else this.variables[r] = o;
            }
        }, i.prototype.toString = function() {
            if (!this.variables) return "";
            var t = this.variables, e = [];
            for (var i in t) e.push(this.encodeValue(i, t[i]));
            return e.join("&");
        }, i.prototype.encodeValue = function(t, e) {
            return e instanceof Array ? this.encodeArray(t, e) : encodeURIComponent(t) + "=" + encodeURIComponent(e);
        }, i.prototype.encodeArray = function(t, e) {
            return t ? 0 == e.length ? encodeURIComponent(t) + "=" : e.map(function(e) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e);
            }).join("&") : "";
        }, i;
    }(i.HashObject);
    i.URLVariables = r, t(r.prototype, "egret.URLVariables");
}(i || (i = {}));

!function(i) {
    var r = function(t) {
        function r() {
            var e = t.call(this) || this;
            return e._timeScale = 1, e._paused = !1, e._callIndex = -1, e._lastTime = 0, e.callBackList = [], 
            null != r.instance && i.$error(1033), i.ticker.$startTick(e.update, e), e._lastTime = i.getTimer(), 
            e;
        }
        return e(r, t), r.prototype.update = function(t) {
            var e = t - this._lastTime;
            if (this._lastTime = t, this._paused) return !1;
            var i = e * this._timeScale;
            for (this._callList = this.callBackList.concat(), this._callIndex = 0; this._callIndex < this._callList.length; this._callIndex++) {
                var r = this._callList[this._callIndex];
                r.listener.call(r.thisObject, i);
            }
            return this._callIndex = -1, this._callList = null, !1;
        }, r.prototype.register = function(t, e, i) {
            void 0 === i && (i = 0), this.$insertEventBin(this.callBackList, "", t, e, !1, i, !1);
        }, r.prototype.unregister = function(t, e) {
            this.$removeEventBin(this.callBackList, t, e);
        }, r.prototype.setTimeScale = function(t) {
            this._timeScale = t;
        }, r.prototype.getTimeScale = function() {
            return this._timeScale;
        }, r.prototype.pause = function() {
            this._paused = !0;
        }, r.prototype.resume = function() {
            this._paused = !1;
        }, r.getInstance = function() {
            return null == r.instance && (r.instance = new r()), r.instance;
        }, r;
    }(i.EventDispatcher);
    i.Ticker = r, t(r.prototype, "egret.Ticker");
}(i || (i = {}));

!function(i) {
    var r = function(t) {
        function r() {
            return t.call(this) || this;
        }
        return e(r, t), Object.defineProperty(r.prototype, "stage", {
            get: function() {
                return i.sys.$TempStage;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r, "instance", {
            get: function() {
                return null == r._instance && (r._instance = new r()), r._instance;
            },
            enumerable: !0,
            configurable: !0
        }), r.deviceType = null, r.DEVICE_PC = "web", r.DEVICE_MOBILE = "native", r;
    }(i.EventDispatcher);
    i.MainContext = r, t(r.prototype, "egret.MainContext");
}(i || (i = {})), i.testDeviceType1 = function() {
    if (!window.navigator) return !0;
    var t = navigator.userAgent.toLowerCase();
    return -1 != t.indexOf("mobile") || -1 != t.indexOf("android");
}, i.MainContext.deviceType = i.testDeviceType1() ? i.MainContext.DEVICE_MOBILE : i.MainContext.DEVICE_PC, 
delete i.testDeviceType1;

!function(i) {
    var r = function(t) {
        function r(e) {
            void 0 === e && (e = 300);
            var i = t.call(this) || this;
            return i.objectPool = [], i._length = 0, e < 1 && (e = 1), i.autoDisposeTime = e, 
            i.frameCount = 0, i;
        }
        return e(r, t), r.$init = function() {
            i.ticker.$startTick(r.onUpdate, r);
        }, r.onUpdate = function(t) {
            for (var e = r._callBackList, i = e.length - 1; i >= 0; i--) e[i].$checkFrame();
            return !1;
        }, r.prototype.$checkFrame = function() {
            --this.frameCount <= 0 && this.dispose();
        }, Object.defineProperty(r.prototype, "length", {
            get: function() {
                return this._length;
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.push = function(t) {
            var e = this.objectPool;
            -1 == e.indexOf(t) && (e.push(t), t.__recycle && t.__recycle(), this._length++, 
            0 == this.frameCount && (this.frameCount = this.autoDisposeTime, r._callBackList.push(this)));
        }, r.prototype.pop = function() {
            return 0 == this._length ? null : (this._length--, this.objectPool.pop());
        }, r.prototype.dispose = function() {
            this._length > 0 && (this.objectPool = [], this._length = 0), this.frameCount = 0;
            var t = r._callBackList, e = t.indexOf(this);
            -1 != e && t.splice(e, 1);
        }, r._callBackList = [], r;
    }(i.HashObject);
    i.Recycler = r, t(r.prototype, "egret.Recycler"), r.$init();
}(i || (i = {}));

!function(t) {
    function e(t) {
        var e = t - n;
        n = t;
        for (var r in i) {
            var o = i[r];
            o.delay -= e, o.delay <= 0 && (o.delay = o.originDelay, o.listener.apply(o.thisObject, o.params));
        }
        return !1;
    }
    var i = {}, r = 0, o = 0, n = 0;
    t.setInterval = function(s, a, c) {
        for (var h = [], l = 3; l < arguments.length; l++) h[l - 3] = arguments[l];
        var u = {
            listener: s,
            thisObject: a,
            delay: c,
            originDelay: c,
            params: h
        };
        return 1 == ++o && (n = t.getTimer(), t.ticker.$startTick(e, null)), r++, i[r] = u, 
        r;
    }, t.clearInterval = function(r) {
        i[r] && (o--, delete i[r], 0 == o && t.ticker.$stopTick(e, null));
    };
}(i || (i = {}));

var i;

!function(t) {
    function e(e) {
        r[e] && (n--, delete r[e], 0 == n && t.ticker && t.ticker.$stopTick(i, null));
    }
    function i(t) {
        var i = t - s;
        s = t;
        for (var o in r) {
            var n = o, a = r[n];
            a.delay -= i, a.delay <= 0 && (a.listener.apply(a.thisObject, a.params), e(n));
        }
        return !1;
    }
    var r = {}, o = 0, n = 0, s = 0;
    t.setTimeout = function(e, a, c) {
        for (var h = [], l = 3; l < arguments.length; l++) h[l - 3] = arguments[l];
        var u = {
            listener: e,
            thisObject: a,
            delay: c,
            params: h
        };
        return 1 == ++n && t.ticker && (s = t.getTimer(), t.ticker.$startTick(i, null)), 
        o++, r[o] = u, o;
    }, t.clearTimeout = e;
}(i || (i = {}));