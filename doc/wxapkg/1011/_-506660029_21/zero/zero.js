var e = window.egret, t = function(e, t, i) {
    e.__class__ = t, i ? i.push(t) : i = [ t ], e.__types__ = e.__types__ ? i.concat(e.__types__) : i;
}, i = function(e, t) {
    function i() {
        this.constructor = e;
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype, e.prototype = new i();
}, n = function(e, t, i, n) {
    return new (i || (i = Promise))(function(r, o) {
        function s(e) {
            try {
                h(n.next(e));
            } catch (e) {
                o(e);
            }
        }
        function a(e) {
            try {
                h(n.throw(e));
            } catch (e) {
                o(e);
            }
        }
        function h(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value);
            }).then(s, a);
        }
        h((n = n.apply(e, t || [])).next());
    });
}, r = function(e, t) {
    function i(e) {
        return function(t) {
            return n([ e, t ]);
        };
    }
    function n(i) {
        if (r) throw new TypeError("Generator is already executing.");
        for (;h; ) try {
            if (r = 1, o && (s = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(s = s.call(o, i[1])).done) return s;
            switch (o = 0, s && (i = [ 0, s.value ]), i[0]) {
              case 0:
              case 1:
                s = i;
                break;

              case 4:
                return h.label++, {
                    value: i[1],
                    done: !1
                };

              case 5:
                h.label++, o = i[1], i = [ 0 ];
                continue;

              case 7:
                i = h.ops.pop(), h.trys.pop();
                continue;

              default:
                if (s = h.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue;
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    h.label = i[1];
                    break;
                }
                if (6 === i[0] && h.label < s[1]) {
                    h.label = s[1], s = i;
                    break;
                }
                if (s && h.label < s[2]) {
                    h.label = s[2], h.ops.push(i);
                    break;
                }
                s[2] && h.ops.pop(), h.trys.pop();
                continue;
            }
            i = t.call(e, h);
        } catch (e) {
            i = [ 6, e ], o = 0;
        } finally {
            r = s = 0;
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        };
    }
    var r, o, s, a, h = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1];
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        throw: i(1),
        return: i(2)
    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this;
    }), a;
}, o = function() {
    function e() {}
    return e.ins = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        if (!i._instance) {
            var n = e.length;
            0 == n ? i._instance = new i() : 1 == n ? i._instance = new i(e[0]) : 2 == n ? i._instance = new i(e[0], e[1]) : 3 == n ? i._instance = new i(e[0], e[1], e[2]) : 4 == n ? i._instance = new i(e[0], e[1], e[2], e[3]) : 5 == n && (i._instance = new i(e[0], e[1], e[2], e[3], e[4]));
        }
        return i._instance;
    }, e;
}();

t(o.prototype, "BaseClass"), window.BaseClass = o;

var s = function(t) {
    function n() {
        var i = t.call(this) || this;
        return i.addEventListener(e.Event.ADDED_TO_STAGE, i.addFromStage, i), i.addEventListener(e.Event.REMOVED_FROM_STAGE, i.removeFromStage, i), 
        i;
    }
    return i(n, t), n.prototype.addFromStage = function() {
        this.open();
    }, n.prototype.removeFromStage = function() {
        this.close();
    }, n.prototype.dataChanged = function() {}, n.prototype.open = function() {}, n.prototype.close = function() {}, 
    n.prototype.setSkinPart = function(e, i) {
        if (t.prototype.setSkinPart.call(this, e, i), i && this.skin[e] && this.skin[e] != i) {
            var n = this.skin[e].parent, r = n.getChildIndex(this.skin[e]);
            pe.removeFromParent(this.skin[e]);
            for (var o = 0; o < S.replaceKeys.length; o++) {
                var s = S.replaceKeys[o];
                i[s] = this.skin[e][s];
            }
            this.skin[e] = i, n.addChildAt(i, r);
        }
    }, n.replaceKeys = [ "x", "y", "alpha", "anchorOffsetX", "anchorOffsetY", "blendMode", "bottom", "cacheAsBitmap", "currentState", "enabled", "filters", "height", "horizontalCenter", "hostComponentKey", "includeInLayout", "left", "mask", "matrix", "maxHeight", "maxWidth", "minHeight", "minWidth", "name", "percentHeight", "percentWidth", "right", "rotation", "scaleX", "scaleY", "scrollRect", "skewX", "skewY", "skinName", "top", "touchChildren", "touchEnabled", "verticalCenter", "visible", "width" ], 
    n;
}(eui.ItemRenderer);

t(s.prototype, "BaseItemRender"), window.BaseItemRender = s;

var e = window.egret, t = function(e, t, i) {
    e.__class__ = t, i ? i.push(t) : i = [ t ], e.__types__ = e.__types__ ? i.concat(e.__types__) : i;
}, i = function(e, t) {
    function i() {
        this.constructor = e;
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype, e.prototype = new i();
}, n = function(e, t, i, n) {
    return new (i || (i = Promise))(function(r, o) {
        function s(e) {
            try {
                h(n.next(e));
            } catch (e) {
                o(e);
            }
        }
        function a(e) {
            try {
                h(n.throw(e));
            } catch (e) {
                o(e);
            }
        }
        function h(e) {
            e.done ? r(e.value) : new i(function(t) {
                t(e.value);
            }).then(s, a);
        }
        h((n = n.apply(e, t || [])).next());
    });
}, r = function(e, t) {
    function i(e) {
        return function(t) {
            return n([ e, t ]);
        };
    }
    function n(i) {
        if (r) throw new TypeError("Generator is already executing.");
        for (;h; ) try {
            if (r = 1, o && (s = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(s = s.call(o, i[1])).done) return s;
            switch (o = 0, s && (i = [ 0, s.value ]), i[0]) {
              case 0:
              case 1:
                s = i;
                break;

              case 4:
                return h.label++, {
                    value: i[1],
                    done: !1
                };

              case 5:
                h.label++, o = i[1], i = [ 0 ];
                continue;

              case 7:
                i = h.ops.pop(), h.trys.pop();
                continue;

              default:
                if (s = h.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    h = 0;
                    continue;
                }
                if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                    h.label = i[1];
                    break;
                }
                if (6 === i[0] && h.label < s[1]) {
                    h.label = s[1], s = i;
                    break;
                }
                if (s && h.label < s[2]) {
                    h.label = s[2], h.ops.push(i);
                    break;
                }
                s[2] && h.ops.pop(), h.trys.pop();
                continue;
            }
            i = t.call(e, h);
        } catch (e) {
            i = [ 6, e ], o = 0;
        } finally {
            r = s = 0;
        }
        if (5 & i[0]) throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        };
    }
    var r, o, s, a, h = {
        label: 0,
        sent: function() {
            if (1 & s[0]) throw s[1];
            return s[1];
        },
        trys: [],
        ops: []
    };
    return a = {
        next: i(0),
        throw: i(1),
        return: i(2)
    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this;
    }), a;
}, a = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.percentWidth = 100, t.percentHeight = 100, t.touchEnabled = !1, t;
    }
    return i(t, e), t;
}(eui.Group);

t(a.prototype, "BaseEuiLayer"), window.BaseEuiLayer = a;

var h = function(e) {
    function t(t, i, n, r) {
        var o = e.call(this) || this;
        return o.format = [], o.from = 0, o.to = 0, o.isFormatNum = !1, o.format = t, o.from = i, 
        o.to = n, o.isFormatNum = r, o;
    }
    return i(t, e), t;
}(o);

t(h.prototype, "DateStyle"), window.DateStyle = h;

var l = function() {
    function e() {}
    return e.getFormatTimeByStyle = function(t, i) {
        if (void 0 === i && (i = e.STYLE_1), 0 > t && (t = 0, console.log("输入参数有误!时间为负数:" + t)), 
        i.from > i.to) return console.log("输入参数有误!to参数必须大于等于from参数,请检查style参数的值"), "";
        t >>= 0;
        for (var n = "", r = i.to; r >= i.from; r--) {
            var o = t / this.mul[r];
            r != i.to && (o %= this.mod[r]), n += (i.isFormatNum && 10 > o ? "0" + (o >> 0).toString() : (o >> 0).toString()) + i.format[r];
        }
        return n;
    }, e.getFormatTimeByStyle1 = function(t, i) {
        return void 0 === i && (i = e.STYLE_1), this.getFormatTimeByStyle(t / this.MS_PER_SECOND);
    }, e.formatMiniDateTime = function(t) {
        return e.MINI_DATE_TIME_BASE + (2147483647 & t) * e.MS_PER_SECOND;
    }, e.formatServerTime = function(t) {
        return (t - e.MINI_DATE_TIME_BASE) / e.MS_PER_SECOND;
    }, e.getFormatBySecond = function(e, t, i) {
        void 0 === t && (t = 1), void 0 === i && (i = 2);
        var n = "", r = 1e3 * e;
        switch (t) {
          case this.TIME_FORMAT_1:
            n = this.format_1(r);
            break;

          case this.TIME_FORMAT_2:
            n = this.format_2(r);
            break;

          case this.TIME_FORMAT_3:
            n = this.format_3(r);
            break;

          case this.TIME_FORMAT_4:
            n = this.format_4(r);
            break;

          case this.TIME_FORMAT_5:
            n = this.format_5(r, i);
            break;

          case this.TIME_FORMAT_6:
            n = this.format_6(r);
            break;

          case this.TIME_FORMAT_7:
            n = this.format_7(r);
            break;

          case this.TIME_FORMAT_8:
            n = this.format_8(r);
            break;

          case this.TIME_FORMAT_9:
            n = this.format_9(r);
            break;

          case this.TIME_FORMAT_10:
            n = this.format_10(r);
            break;

          case this.TIME_FORMAT_11:
            n = this.format_11(r, i);
        }
        return n;
    }, e.format_1 = function(t) {
        var i = 0, n = "##:##:##";
        return i = Math.floor(t / e.MS_PER_HOUR), n = n.replace("##", e.formatTimeNum(i)), 
        i && (t -= i * e.MS_PER_HOUR), i = Math.floor(t / e.MS_PER_MINUTE), n = n.replace("##", e.formatTimeNum(i)), 
        i && (t -= i * e.MS_PER_MINUTE), i = Math.floor(t / 1e3), n = n.replace("##", e.formatTimeNum(i));
    }, e.format_2 = function(e) {
        var t = new Date(e);
        return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + " " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
    }, e.format_3 = function(e) {
        var t = this.format_1(e).split(":");
        return t[1] + ":" + t[2];
    }, e.format_4 = function(e) {
        return e < this.MS_PER_HOUR ? Math.floor(e / this.MS_PER_MINUTE) + "分钟前" : e < this.MS_PER_DAY ? Math.floor(e / this.MS_PER_HOUR) + "小时前" : Math.floor(e / this.MS_PER_DAY) + "天前";
    }, e.format_5 = function(e, t) {
        void 0 === t && (t = 2);
        var i = "", n = [ "天", "时", "分", "秒" ], r = [], o = Math.floor(e / this.MS_PER_DAY);
        r.push(o), e -= o * this.MS_PER_DAY;
        var s = Math.floor(e / this.MS_PER_HOUR);
        r.push(s), e -= s * this.MS_PER_HOUR;
        var a = Math.floor(e / this.MS_PER_MINUTE);
        r.push(a), e -= a * this.MS_PER_MINUTE;
        var h = Math.floor(e / 1e3);
        r.push(h);
        for (var l in r) if (r[l] >= 0 && (i += (0 == parseInt(l) ? r[l] : this.formatTimeNum(r[l])) + n[l], 
        0 >= --t)) break;
        return i;
    }, e.format_6 = function(e) {
        var t = new Date(e), i = t.getHours(), n = t.getMinutes(), r = t.getSeconds();
        return this.formatTimeNum(i) + ":" + this.formatTimeNum(n) + ":" + this.formatTimeNum(r);
    }, e.format_7 = function(e) {
        return e < this.MS_PER_HOUR ? " <1小时" : e < this.MS_PER_DAY ? Math.floor(e / this.MS_PER_HOUR) + "小时" : Math.floor(e / this.MS_PER_DAY) + "天";
    }, e.format_8 = function(e) {
        var t = new Date(e);
        return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + " " + t.getHours() + ":" + t.getMinutes();
    }, e.format_9 = function(e) {
        var t = Math.floor(e / this.MS_PER_HOUR);
        e -= t * this.MS_PER_HOUR;
        var i = Math.floor(e / this.MS_PER_MINUTE);
        e -= i * this.MS_PER_MINUTE;
        var n = Math.floor(e / 1e3);
        return u.addZero(t.toString(), 2) + "时" + u.addZero(i.toString(), 2) + "分" + u.addZero(n.toString(), 2) + "秒";
    }, e.format_10 = function(e) {
        var t = Math.floor(e / this.MS_PER_MINUTE);
        e -= t * this.MS_PER_MINUTE;
        var i = Math.floor(e / 1e3);
        return this.formatTimeNum(t) + "分" + this.formatTimeNum(i) + "秒";
    }, e.formatTimeNum = function(e) {
        return e >= 10 ? e.toString() : "0" + e;
    }, e.toPercent = function(e) {
        return 1 > e ? e.toFixed(2).slice(2, 4) + "%" : 100 * e + "%";
    }, e.format_11 = function(e, t) {
        void 0 === t && (t = 2);
        var i = "", n = [ "天", ":", ":", "" ], r = [], o = Math.floor(e / this.MS_PER_DAY);
        r.push(o), e -= o * this.MS_PER_DAY;
        var s = Math.floor(e / this.MS_PER_HOUR);
        r.push(s), e -= s * this.MS_PER_HOUR;
        var a = Math.floor(e / this.MS_PER_MINUTE);
        r.push(a), e -= a * this.MS_PER_MINUTE;
        var h = Math.floor(e / 1e3);
        r.push(h);
        for (var l in r) if (r[l] >= 0 && (i += (0 == parseInt(l) ? r[l] : this.formatTimeNum(r[l])) + n[l], 
        0 >= --t)) break;
        return i;
    }, e.TIME_FORMAT_1 = 1, e.TIME_FORMAT_2 = 2, e.TIME_FORMAT_3 = 3, e.TIME_FORMAT_4 = 4, 
    e.TIME_FORMAT_5 = 5, e.TIME_FORMAT_6 = 6, e.TIME_FORMAT_7 = 7, e.TIME_FORMAT_8 = 8, 
    e.TIME_FORMAT_9 = 9, e.TIME_FORMAT_10 = 10, e.TIME_FORMAT_11 = 11, e.MS_PER_SECOND = 1e3, 
    e.MS_PER_MINUTE = 6e4, e.MS_PER_HOUR = 36e5, e.MS_PER_DAY = 864e5, e.SECOND_PER_HOUR = 3600, 
    e.SECOND_PER_DAY = 86400, e.SECOND_PER_MONTH = 2592e3, e.SECOND_PER_YEAR = 31104e3, 
    e.DAYS_PER_WEEK = 7, e.YEAR_PER_YEAR = 1, e.MONTH_PER_YEAR = 12, e.DAYS_PER_MONTH = 30, 
    e.HOURS_PER_DAY = 24, e.MUNITE_PER_HOUR = 60, e.SECOND_PER_MUNITE = 60, e.SECOND_PER_SECOND = 1, 
    e.mod = [ e.SECOND_PER_MUNITE, e.MUNITE_PER_HOUR, e.HOURS_PER_DAY, e.DAYS_PER_MONTH, e.MONTH_PER_YEAR, e.YEAR_PER_YEAR ], 
    e.mul = [ e.SECOND_PER_SECOND, e.SECOND_PER_MUNITE, e.SECOND_PER_HOUR, e.SECOND_PER_DAY, e.SECOND_PER_MONTH, e.SECOND_PER_YEAR ], 
    e.MINI_DATE_TIME_BASE = Date.UTC(2010, 0) + new Date().getTimezoneOffset() * e.MS_PER_MINUTE, 
    e.TIME_ZONE_OFFSET = 8 * e.MS_PER_HOUR, e.TO_SECOND = 0, e.TO_MINUTE = 1, e.TO_HOUR = 2, 
    e.TO_DAY = 3, e.TO_MONTH = 4, e.TO_YEAR = 5, e.FORMAT_1 = [ "秒", "分", "时", "天", "月", "年" ], 
    e.FORMAT_2 = [ ":", ":", ":", ":", ":", ":" ], e.STYLE_1 = new h(e.FORMAT_1, e.TO_SECOND, e.TO_HOUR, !1), 
    e.STYLE_2 = new h(e.FORMAT_1, e.TO_SECOND, e.TO_DAY, !1), e.STYLE_3 = new h(e.FORMAT_2, e.TO_SECOND, e.TO_HOUR, !0), 
    e.STYLE_4 = new h(e.FORMAT_1, e.TO_SECOND, e.TO_MINUTE, !0), e;
}();

t(l.prototype, "DateUtils"), window.DateUtils = l;

var u = function() {
    function e() {}
    return e.addZero = function(e, t) {
        for (void 0 === t && (t = 5); e.length < t; ) e = "0" + e;
        return e;
    }, e.dataToNumberOnArray = function(e, t) {
        for (var i = [], n = 0, r = e; n < r.length; n++) {
            var o = r[n];
            i.push(o[t]);
        }
        return i;
    }, e.fitListData = function(e) {
        for (var t = e.concat(), i = t.length - 1; i > -1; i--) (void 0 == t[i] || null == t[i]) && t.splice(i, 1);
        return t;
    }, e.changeToList = function(e) {
        var t = [];
        for (var i in e) t.push(e[i]);
        return t;
    }, e.sortAsc = function(e, t) {
        return e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
    }, e.sortDes = function(e, t) {
        return e.id < t.id ? 1 : e.id > t.id ? -1 : 0;
    }, e;
}();

t(u.prototype, "DataUtil"), window.DataUtil = u;

var c = function() {
    function t() {
        this.httpRequest = new e.HttpRequest();
    }
    return t.getIns = function() {
        return this._ins = this._ins || new t(), this._ins;
    }, t.prototype.report = function(e, t) {
        if (void 0 === t && (t = "load"), "error" != t) {
            var i = se.roleCount;
            if ("load" == t && (isNaN(i) || 0 != i)) return void console.log("不是新账号不需要上报数据");
            var n = navigator.userAgent.toLowerCase();
            n = /iphone|ipad|ipod/.test(n) ? "1" : /android/.test(n) ? "2" : "0", null != window.mobileInfo && (n = "ios" == window.mobileInfo.platform ? "1" : "android" == window.mobileInfo.platform ? "2" : "0");
            var r = "&data=";
            if (r += se.pfid || "1", r += "|" + se.srvid, r += "|" + se.openID, r += "|" + t, 
            r += "|" + e, r += "|" + se.isnew, r += "|" + n, r += "|" + se.login_ip, r += "|" + l.getFormatBySecond(new Date().getTime() / 1e3, 2), 
            r += "|" + se.via, se.pf != se.gh) {
                var o = "xlreceive.playtai.com";
                se.isTaiWan && (o = "xlreport-games.wakool.net");
                var s = oe.hex_md5(t + "027a47eabf1ebcb409b7fe680ff69008");
                s = oe.hex_md5(s), this.reportUrl("https://" + o + "/report?appv=1.0&counter=" + t + "&key=" + s + r);
            }
        }
    }, t.prototype.advice = function(t, i, n) {
        this.httpRequest.addEventListener(e.Event.COMPLETE, function t(r) {
            this.httpRequest.removeEventListener(e.Event.COMPLETE, t, this), "ok" == r.currentTarget.response ? (he.ins().showTips("提交问题成功！"), 
            i.call(n)) : he.ins().showTips("网络出故障，请重新提交问题！");
        }, this);
        for (;!(0 > t.indexOf("@")); ) t = t.replace("@", "");
        var r = "&serverid=" + se.srvid;
        r += "&sign=" + oe.hex_md5("" + (se.srvid || 0) + Actor.actorID + "enter_reportfeedbackqiyaohudongyule!@#"), 
        r += "&actorid=" + Actor.actorID, r += "&actorname=" + Actor.myName, r += "&feedcnt=" + t, 
        r += "&openid=" + se.openID, r += "&userlevel=" + Actor.level, r += "&viplevel=" + UserVip.ins().lv, 
        r += "&appid=" + se.appid;
        this.reportUrl("https://xlreceive.playtai.com/api/load?counter=enter_report" + r);
    }, t.prototype.reportUrl = function(t, i) {
        console.log("上报url：" + t), this.httpRequest.open(t, i || e.HttpMethod.GET), this.httpRequest.send();
    }, t.prototype.reportSDK = function(e) {
        if (se.pf != se.gh) {
            if (window.reportSDK) {
                var t = {}, i = !0;
                window.Actor || (i = !1), t.roleid = i && Actor.actorID ? Actor.actorID : X.ins().saveRoleId, 
                t.rolelevel = i && Actor.level ? Actor.level : 1, t.rolename = i && Actor.myName ? Actor.myName : X.ins().saveName;
                r = "";
                null != (n = i ? SubRoles.ins().getSubRoleByIndex(0) : null) && null != n.guildName && (r = n.guildName), 
                t.society = r, window.reportSDK(e, t);
            }
            if (null != window.android && null != window.android.jsToSetExtRoleData) {
                i = !0;
                window.Actor || (i = !1);
                var n = i ? SubRoles.ins().getSubRoleByIndex(0) : null, r = "无帮派";
                null != n && null != n.guildName && (r = n.guildName);
                var o = {};
                o.roleId = i && Actor.actorID ? Actor.actorID : X.ins().saveRoleId, o.roleName = i && Actor.myName ? Actor.myName : X.ins().saveName, 
                o.roleLevel = i && Actor.level ? Actor.level : 1, o.zoneId = se.srvid, o.zoneName = se.srvid + "区", 
                o.balance = 0, o.vip = 1, o.partyName = r, o.roleCTime = 0, o.roleLevelMTime = 0;
                var s = JSON.stringify(o);
                switch (e) {
                  case "createRole":
                    window.android.jsToSetExtRoleData("createrole", s);
                    break;

                  case "login":
                    window.android.jsToSetExtRoleData("enterServer", s), window.android.jsToSetBaseRoleData(o.roleId, o.roleName, o.roleLevel, o.zoneId, o.zoneName);
                    break;

                  case "levelUp":
                    window.android.jsToSetExtRoleData("levelup", s);
                }
            }
        }
    }, t.prototype.reportWxGame = function(e) {
        if (se.isWxgame) {
            var i = "https://h5sdk.playtai.com/h5distribute/bridge/", n = !0;
            window.Actor || (n = !1);
            var r = n && Actor.actorID ? Actor.actorID : X.ins().saveRoleId, o = n && Actor.level ? Actor.level : 1;
            window.UserZs && (o = UserZs.ins().lv > 0 ? 1e3 * UserZs.ins().lv + o : o);
            var s = n && Actor.myName ? Actor.myName : X.ins().saveName, a = se.channelname, h = se.srvid + "区";
            switch (e) {
              case t.gamecreaterole:
                i = i + "report/gamecreaterole/xlws_xcx?serverid=" + se.srvid + "&channelusername=" + se.openID + "&channelname=" + a + "&roleid=" + r + "&rolename=" + encodeURI(s) + "&servername=" + encodeURI(h) + "&cpschannelid=" + se.via;
                break;

              case t.gameopen:
                break;

              case t.gamelogin:
                i = i + "report/gamelogin/xlws_xcx?serverid=" + se.srvid + "&channelusername=" + se.openID + "&channelname=" + a + "&roleid=" + r + "&rolename=" + encodeURI(s) + "&cpschannelid=" + se.via + "&rolelevel=" + o;
                break;

              case t.gamenotify:
                break;

              case t.gamelevelup:
                i = i + "report/gamelevelup/xlws_xcx?serverid=" + se.srvid + "&channelusername=" + se.openID + "&channelname=" + a + "&roleid=" + r + "&rolename=" + encodeURI(s) + "&cpschannelid=" + se.via + "&rolelevel=" + o;
                break;

              case t.gameactive:
                i = i + "report/gameactive/xlws_xcx?serverid=" + se.srvid + "&channelusername=" + se.openID + "&channelname=" + a + "&roleid=" + r + "&rolename=" + encodeURI(s) + "&cpschannelid=" + se.via + "&rolelevel=" + o;
            }
            this.reportUrl(i);
        }
    }, t.merged = "merged", t.version = "version", t.main = "main", t.egret = "egret", 
    t.run = "run", t.enterGame = "enterGame", t.createRole = "createRole", t.theme = "theme", 
    t.clickstart = "clickstart", t.loaded = "loaded", t.enterCreate = "enterCreate", 
    t.gamecreaterole = "gamecreaterole", t.gameopen = "gameopen", t.gamelogin = "gamelogin", 
    t.gamenotify = "gamenotify", t.gamelevelup = "gamelevelup", t.gameactive = "gameactive", 
    t;
}();

t(c.prototype, "ReportData"), window.ReportData = c;

var p = function(t) {
    function n() {
        var i = t.call(this) || this;
        return i.top = 0, i.extop = 0, i.allTop = 0, i.winTop = 0, i.touchNum = 0, null == n._uiStage && (n._uiStage = new eui.UILayer(), 
        n._uiStage.touchEnabled = !1, n._uiStage.percentHeight = 100, n._uiStage.percentWidth = 100, 
        i.getStage().addChild(n._uiStage)), i.getStage().maxTouches = 1, se.isWanYiWan() ? ("iOS" == e.Capabilities.os && 375 == window.screen.width && 812 == window.screen.height && 540 == i.getStage().stageWidth && 1170 == i.getStage().stageHeight && (i.top = 44), 
        i.extop = 24, i.setWinTop()) : se.isWxgame ? (null != window.mobileInfo && (window.mobileInfo.model.indexOf("iPhone X") > -1 ? i.top = window.mobileInfo.statusBarHeight : i.getStage().stageHeight / i.getStage().stageWidth > 2 && (i.top = window.mobileInfo.statusBarHeight, 
        i.top < 80 && (i.top = 80))), i.extop = 24, i.getStage().addEventListener(e.TouchEvent.TOUCH_BEGIN, i.onTouchBegin, i), 
        i.getStage().addEventListener(e.TouchEvent.TOUCH_END, i.onTouchEnd, i), i.setWinTop()) : "iOS" == e.Capabilities.os && 375 == window.screen.width && 812 == window.screen.height && 540 == i.getStage().stageWidth && 1170 == i.getStage().stageHeight && (i.top = 44), 
        i.allTop = i.extop + i.top, null != window.android && window.android.jsToMakeFullScreen && (i.getStage().addEventListener(e.FocusEvent.FOCUS_IN, i.handleFocusIn, i), 
        i.getStage().addEventListener(e.FocusEvent.FOCUS_OUT, i.handleFocusOut, i)), i;
    }
    return i(n, t), n.prototype.handleFocusIn = function(e) {
        var t = "false";
        e.target.localToGlobal().y > this.getStage().stageHeight / 2 && (t = "true"), window.android.jsToMakeFullScreen(t);
    }, n.prototype.handleFocusOut = function(e) {
        window.android.jsToMakeFullScreen("false");
    }, n.prototype.setWinTop = function() {
        if (se.isWxgame || se.pf == se.zwwanba) {
            var e = n.w / n.h, t = this.getStage().stageWidth / this.getStage().stageHeight;
            e > t && (this.winTop = n.w / t - n.h - this.top >> 0, this.winTop > 60 && (this.winTop = this.winTop / 2 >> 0));
        }
    }, n.prototype.onTouchBegin = function(e) {
        U.ins().remove(this.resetRate, this), n.forceRender = !0, this.getStage().frameRate = 60;
    }, n.prototype.onTouchEnd = function(e) {
        U.ins().doTimer(1e3, 1, this.resetRate, this);
    }, n.prototype.resetRate = function() {
        n.forceRender = !1, this.getStage().frameRate = 30;
    }, n.ins = function() {
        return t.ins.call(this);
    }, n.prototype.getHeight = function() {
        return this.getStage().stageHeight;
    }, n.prototype.getWidth = function() {
        return this.getStage().stageWidth;
    }, n.prototype.setTouchChildren = function(e) {
        this.getStage().touchChildren = e;
    }, n.prototype.setMaxTouches = function(e) {
        this.getStage().maxTouches = e;
    }, n.prototype.setFrameRate = function(e) {
        this.getStage().frameRate = e;
    }, n.prototype.setScaleMode = function(e) {
        this.getStage().scaleMode = e;
    }, n.prototype.getStage = function() {
        return e.MainContext.instance.stage;
    }, n.prototype.getUIStage = function() {
        return n._uiStage;
    }, n.prototype.showFps = function() {
        if (null == this.fpsTxt) {
            for (var t = document.querySelectorAll(".egret-player"), i = t.length, n = 0; i > n; n++) {
                var r = t[n]["egret-player"];
                r.player.displayFPS(!0, !0, "", "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9"), 
                this.webFps = r.player.fps.fpsDisplay;
            }
            this.fpsTxt = new e.TextField(), this.fpsTxt.textColor = 16777215, this.fpsTxt.size = 12, 
            this.fpsTxt.x = 150, this.fpsTxt.y = 700, this.getStage().addChild(this.fpsTxt), 
            U.ins().doTimer(10, 0, this.updateFps, this);
        }
    }, n.prototype.updateFps = function() {
        var t = this.webFps.fps.innerHTML + "-" + this.webFps.divDraw.innerHTML + "-" + this.webFps.divCost.innerHTML;
        this.fpsTxt.textFlow = new e.HtmlTextParser().parse(t);
    }, n.w = 540, n.h = 930, n.forceRender = !1, n;
}(o);

t(p.prototype, "StageUtils"), window.StageUtils = p;

var d = function() {
    function e() {}
    return e.gameTextureType = function(t) {
        if (!t) return 0;
        if (t.lastIndexOf(".jpg") > -1) {
            for (var i = 0; i < e.jpgIgnore.length; i++) if (t.lastIndexOf(e.jpgIgnore[i]) > -1) return 0;
            return 1;
        }
        return t.lastIndexOf("res/") > -1 ? t.lastIndexOf("lingqi/") > -1 || t.lastIndexOf("shenqi/") > -1 || t.lastIndexOf("uieffect/") > -1 || t.lastIndexOf("uiitemeffect/") > -1 || t.lastIndexOf("uililianeffect/") > -1 || t.lastIndexOf("uititle/") > -1 || t.lastIndexOf("uixunzhang/") > -1 || t.lastIndexOf("zuji/") > -1 || t.lastIndexOf("lingchong/") > -1 || t.lastIndexOf("lunhuiequip/") > -1 || t.lastIndexOf("newshenqi/") > -1 ? 0 : 2 : 0;
    }, e.getHeadIcon = function(t, i) {
        return e.ROLE_HEAD + i + "_" + t + "_png";
    }, e.getUIEffectPath = function(t, i, n) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), "" + e.RES_DIR_UIEFFECT + e.UIEFFECT + u.addZero(t.toString()) + "/" + e.UIEFFECT + u.addZero(t.toString()) + "_" + i + n;
    }, e.getItemEffectPath = function(t, i) {
        return void 0 === i && (i = 0), "" + e.RES_DIR_ITEM_EFFECT + e.ITEM_EFFECT + "00" + t + "_" + i + "/" + e.ITEM_EFFECT + "00" + t + "_" + i + "_00";
    }, e.getTitlePath = function(t) {
        var i = 10 > t ? "0" + t : t + "";
        return "" + e.RES_DIR_TITLE + e.TITLE + "000" + i + "/" + e.TITLE + "000" + i + "_00";
    }, e.getXunzhangPath = function(t) {
        var i = 10 > t ? "0" + t : t + "";
        return "" + e.RES_DIR_XUNZHANG + e.XUNZHANG + "000" + i + "/" + e.XUNZHANG + "000" + i + "_00";
    }, e.getLilianPath = function(t) {
        var i = 10 > t ? "0" + t : t + "";
        return "" + e.RES_DIR_LILIAN + e.LILIAN + "000" + i + "/" + e.LILIAN + "000" + i + "_00";
    }, e.getShenqiPath = function(t) {
        return "" + e.RES_DIR_SHENQI + e.SHENQI + t + "/" + e.SHENQI + t + "_00";
    }, e.getNewShenqiPath = function(t) {
        return "" + e.RES_DIR_NEWSHENQI + e.NEWSHENQI + t + "/" + e.NEWSHENQI + t + "_00";
    }, e.getItemIconPath = function(t) {
        return e.RES_DIR_ITEM + t + ".png";
    }, e.getSkillEffectPath = function(t, i, n) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), "" + e.RES_DIR_SKILLEFFECT + e.SKILLEFFECT + u.addZero(t.toString()) + "/" + e.SKILLEFFECT + u.addZero(t.toString()) + "_" + i + n;
    }, e.getSkillCfgPath = function(t, i) {
        return void 0 === i && (i = 0), "" + e.RES_DIR_SKILLEFFECT + e.SKILLEFFECT + u.addZero((t + i).toString()) + ".json";
    }, e.getMapEffectPath = function(t, i, n) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), "" + e.RES_DIR_MAPEFFECT + e.MAPEFFECT + u.addZero(t.toString()) + "/" + e.MAPEFFECT + u.addZero(t.toString()) + "_" + i + n;
    }, e.getHumanHorsePath = function(t, i, n, r) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), void 0 === r && (r = !1), 
        r ? "" + e.RES_DIR_HUMANHORSE + e.HUMANHORSE + u.addZero(t.toString()) + "/" + e.HUMANHORSE + u.addZero(t.toString()) + "_" + i + n : "" + e.RES_DIR_HUMANHORSE + e.HUMANHORSE + u.addZero(t.toString()) + "/" + e.HUMANHORSE + u.addZero(t.toString());
    }, e.getHorsePath = function(t, i, n, r) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), void 0 === r && (r = !1), 
        r ? "" + e.RES_DIR_HORSE + e.HORSE + u.addZero(t.toString()) + "/" + e.HORSE + u.addZero(t.toString()) + "_" + i + n : "" + e.RES_DIR_HORSE + e.HORSE + u.addZero(t.toString()) + "/" + e.HORSE + u.addZero(t.toString());
    }, e.getBodyPath = function(t, i, n, r) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), void 0 === r && (r = !1), 
        r ? "" + e.RES_DIR_BODY + e.BODY + u.addZero(t.toString()) + "/" + e.BODY + u.addZero(t.toString()) + "_" + i + n : "" + e.RES_DIR_BODY + e.BODY + u.addZero(t.toString()) + "/" + e.BODY + u.addZero(t.toString());
    }, e.getUIBodyPath = function(t, i, n) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), "" + e.RES_DIR_UIBODY + e.UIBODY + u.addZero(t.toString()) + "/" + e.UIBODY + u.addZero(t.toString()) + "_" + i + n;
    }, e.getWeaponPath = function(t, i, n, r) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), void 0 === r && (r = !1), 
        r ? "" + e.RES_DIR_WEAPON + e.WEAPON + u.addZero(t.toString()) + "/" + e.WEAPON + u.addZero(t.toString()) + "_" + i + n : "" + e.RES_DIR_WEAPON + e.WEAPON + u.addZero(t.toString()) + "/" + e.WEAPON + u.addZero(t.toString());
    }, e.getUIWeaponPath = function(t, i, n) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), "" + e.RES_DIR_UIWEAPON + e.UIWEAPON + u.addZero(t.toString()) + "/" + e.UIWEAPON + u.addZero(t.toString()) + "_" + i + n;
    }, e.getUILingChongPath = function(t, i, n) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), "" + e.RES_DIR_UILINGCHONG + e.UILINGCHONG + u.addZero(t.toString(), 3) + "/" + e.UILINGCHONG + u.addZero(t.toString(), 3) + "_" + i + n;
    }, e.getUILingChongPartPath = function(t, i, n) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), "" + e.RES_DIR_UILINGCHONGPART + e.UILINGCHONGPART + u.addZero(t.toString(), 3) + "/" + e.UILINGCHONGPART + u.addZero(t.toString(), 3) + "_" + i + n;
    }, e.getLingChong = function(t) {
        return "" + e.RES_DIR_LINGCHONG + e.LINGCHONG + u.addZero(t.toString()) + "/" + e.LINGCHONG + u.addZero(t.toString());
    }, e.getUIZhenBaoPath = function(t, i, n) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), "" + e.RES_DIR_UIZHENBAO + e.UIZHENBAO + u.addZero(t.toString()) + "/" + e.UIZHENBAO + u.addZero(t.toString()) + "_" + i + n;
    }, e.getWingPath = function(t, i, n, r) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), void 0 === r && (r = !1), 
        r ? "" + e.RES_DIR_WING + e.WING + u.addZero(t.toString()) + "/" + e.WING + u.addZero(t.toString()) + "_" + i + n : "" + e.RES_DIR_WING + e.WING + u.addZero(t.toString()) + "/" + e.WING + u.addZero(t.toString());
    }, e.getUIWingPath = function(t, i, n) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), "" + e.RES_DIR_UIWING + e.UIWING + u.addZero(t.toString()) + "/" + e.UIWING + u.addZero(t.toString()) + "_" + i + n;
    }, e.getGangQiPath = function(t, i, n, r) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), void 0 === r && (r = !1), 
        r ? "" + e.RES_DIR_GANGQI + e.GANGQI + u.addZero(t.toString()) + "/" + e.GANGQI + u.addZero(t.toString()) + "_" + i + n : "" + e.RES_DIR_GANGQI + e.GANGQI + u.addZero(t.toString()) + "/" + e.GANGQI + u.addZero(t.toString());
    }, e.getLongDunPath = function(t, i, n, r) {
        void 0 === i && (i = "0"), void 0 === n && (n = 0), void 0 === r && (r = !1);
        var o = t > 10 ? 10 : t;
        return r ? "" + e.RES_DIR_LONGDUN + e.LONGDUN + u.addZero(o.toString()) + "/" + e.LONGDUN + u.addZero(o.toString()) + "_" + i + n : "" + e.RES_DIR_LONGDUN + e.LONGDUN + u.addZero(o.toString()) + "/" + e.LONGDUN + u.addZero(o.toString());
    }, e.getUILongDunPath = function(t, i, n) {
        void 0 === i && (i = "0"), void 0 === n && (n = 0);
        var r = t > 10 ? 10 : t;
        return "" + e.RES_DIR_UILONGDUN + e.UILONGDUN + u.addZero(r.toString()) + "/" + e.UILONGDUN + u.addZero(r.toString()) + "_" + i + n;
    }, e.getZuJiPath = function(t, i, n, r) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), void 0 === r && (r = !1), 
        r ? "" + e.RES_DIR_ZUJI + e.ZUJI + u.addZero(t.toString()) + "/" + e.ZUJI + u.addZero(t.toString()) + "_" + i + n : "" + e.RES_DIR_ZUJI + e.ZUJI + u.addZero(t.toString()) + "/" + e.ZUJI + u.addZero(t.toString());
    }, e.getFaBaoPath = function(t, i, n) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), "" + e.RES_DIR_FABAO + e.FABAO + u.addZero(t.toString()) + "/" + e.FABAO + u.addZero(t.toString()) + "_" + i + n;
    }, e.getJianTong = function(t) {
        return "" + e.RES_DIR_JIANTONG + e.JIANTONG + u.addZero(t.toString()) + "/" + e.JIANTONG + u.addZero(t.toString());
    }, e.getNpcPath = function(t) {
        return "" + e.RES_DIR_NPC + e.NPC + u.addZero(t.toString()) + "/" + e.NPC + u.addZero(t.toString());
    }, e.getCollectPath = function(t) {
        return "" + e.RES_DIR_COLLECT + e.COLLECT + u.addZero(t.toString()) + "/" + e.COLLECT + u.addZero(t.toString());
    }, e.getMaChePath = function(t) {
        return "" + e.RES_DIR_MACHE + e.MACHE + "0000" + t + "/" + e.MACHE + "0000" + t + "_00";
    }, e.getAnimaPath = function(t, i) {
        void 0 === i && (i = 0);
        var n = 10 > t ? "0" + t : t + "", r = i + 1;
        return "" + e.RES_DIR_LINGQI + e.LINGQI + "000" + n + "/" + e.LINGQI + "00" + r + "/" + e.LINGQI + "00" + r + "_00";
    }, e.getLunhuiEquipPath = function(t) {
        var i = 10 > t ? "0" + t : t + "";
        return "" + e.RES_DIR_LUNHUIEQUIP + e.LUNHUIEQUIP + "000" + i + "/" + e.LUNHUIEQUIP + "000" + i + "_00";
    }, e.getKuafuNpcNamePath = function(t) {
        return e.RES_DIR_KUAFU_NPC_NAME + t + ".png";
    }, e.getUIShenJianPath = function(t, i, n) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), "" + e.RES_DIR_UISHENJIAN + e.UISHENJIAN + u.addZero(t.toString(), 3) + "/" + e.UISHENJIAN + u.addZero(t.toString(), 3) + "_" + i + n;
    }, e.getUIShenJianPartPath = function(t, i, n) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), "" + e.RES_DIR_UISHENJIANPART + e.UISHENJIANPART + u.addZero(t.toString(), 3) + "/" + e.UISHENJIANPART + u.addZero(t.toString(), 3) + "_" + i + n;
    }, e.getUIFootPath = function(t, i, n) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), "" + e.RES_DIR_UIFOOT + e.UIFOOT + u.addZero(t.toString()) + "/" + e.UIFOOT + u.addZero(t.toString()) + "_" + i + n;
    }, e.getFootPath = function(t, i, n) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), "" + e.RES_DIR_FOOT + e.FOOT + u.addZero(t.toString()) + "/" + e.FOOT + u.addZero(t.toString()) + "_" + i + n;
    }, e.getUILeiShenPath = function(t, i, n) {
        return void 0 === i && (i = "0"), void 0 === n && (n = 0), "" + e.RES_DIR_UILEISHEN + e.UILEISHEN + u.addZero(t.toString()) + "/" + e.UILEISHEN + u.addZero(t.toString()) + "_" + i + n;
    }, e.getLeishenPath = function(t) {
        return "" + e.RES_DIR_LEISHEN + e.LEISHEN + u.addZero(t.toString()) + "/" + e.LEISHEN + u.addZero(t.toString());
    }, e.RES_DIR = "res/", e.BLOOD = "blood", e.EFFECT = "effect", e.UIEFFECT = "uieffect", 
    e.EFF = "eff", e.ITEM = "item", e.MONSTER = "monster", e.SKILL = "skill", e.SKILLEFF = "skilleff", 
    e.WARSPIRIT = "warspirit", e.BODY = "body", e.UIBODY = "uibody", e.WEAPON = "weapon", 
    e.UIWEAPON = "uiweapon", e.WING = "wing", e.UIWING = "uiwing", e.HORSE = "horse", 
    e.HUMANHORSE = "humanhorse", e.FABAO = "fabao", e.UIFABAO = "uifabao", e.JIANTONG = "jiantong", 
    e.UIJIANTONG = "uijiantong", e.MOSHEN = "moshen", e.GANGQI = "gangqi", e.LONGDUN = "longdun", 
    e.UILONGDUN = "uilongdun", e.ZUJI = "zuji", e.UIBLOOD = "uiblood", e.SKILLEFFECT = "skilleffect", 
    e.MAPEFFECT = "mapeffect", e.SHENQI = "shenqi", e.LILIAN = "uililianeffect", e.XUNZHANG = "uixunzhang", 
    e.TITLE = "uititle", e.ITEM_EFFECT = "uiitemeffect", e.ROLE_HEAD = "headIcon", e.NPC = "npc", 
    e.COLLECT = "collect", e.MACHE = "mache", e.LINGQI = "lingqi", e.UILINGCHONG = "uilingchong", 
    e.LINGCHONG = "lingchong", e.UILINGCHONGPART = "uilingchongpart", e.UIZHENBAO = "uizhenbao", 
    e.LUNHUIEQUIP = "lunhuiequip", e.NEWSHENQI = "newshenqi", e.KUAFU_NPC_NAME = "crossnpcname", 
    e.UISHENJIAN = "uishenjian", e.UISHENJIANPART = "uishenjianpart", e.UIFOOT = "uifoot", 
    e.FOOT = "foot", e.UILEISHEN = "uileishen", e.LEISHEN = "leishen", e.RES_DIR_BLOOD = "" + e.RES_DIR + e.BLOOD + "/", 
    e.RES_DIR_EFFECT = "" + e.RES_DIR + e.EFFECT + "/", e.RES_DIR_UIEFFECT = "" + e.RES_DIR + e.UIEFFECT + "/", 
    e.RES_DIR_EFF = "" + e.RES_DIR + e.EFF + "/", e.RES_DIR_ITEM = "" + e.RES_DIR + e.ITEM + "/", 
    e.RES_DIR_MONSTER = "" + e.RES_DIR + e.MONSTER + "/", e.RES_DIR_SKILL = "" + e.RES_DIR + e.SKILL + "/", 
    e.RES_DIR_SKILLEFF = "" + e.RES_DIR + e.SKILLEFF + "/", e.RES_DIR_WARSPIRIT = "" + e.RES_DIR + e.WARSPIRIT + "/", 
    e.RES_DIR_BODY = "" + e.RES_DIR + e.BODY + "/", e.RES_DIR_UIBODY = "" + e.RES_DIR + e.UIBODY + "/", 
    e.RES_DIR_WEAPON = "" + e.RES_DIR + e.WEAPON + "/", e.RES_DIR_UIWEAPON = e.RES_DIR + "ui" + e.WEAPON + "/", 
    e.RES_DIR_UIFOOT = "" + e.RES_DIR + e.UIFOOT + "/", e.RES_DIR_WING = "" + e.RES_DIR + e.WING + "/", 
    e.RES_DIR_UIWING = "" + e.RES_DIR + e.UIWING + "/", e.RES_DIR_HORSE = "" + e.RES_DIR + e.HORSE + "/", 
    e.RES_DIR_HUMANHORSE = "" + e.RES_DIR + e.HUMANHORSE + "/", e.RES_DIR_FABAO = "" + e.RES_DIR + e.FABAO + "/", 
    e.RES_DIR_UIFABAO = "" + e.RES_DIR + e.UIFABAO + "/", e.RES_DIR_JIANTONG = "" + e.RES_DIR + e.JIANTONG + "/", 
    e.RES_DIR_UIJIANTONG = "" + e.RES_DIR + e.UIJIANTONG + "/", e.RES_DIR_MOSHEN = "" + e.RES_DIR + e.MOSHEN + "/", 
    e.RES_DIR_GANGQI = "" + e.RES_DIR + e.GANGQI + "/", e.RES_DIR_LONGDUN = "" + e.RES_DIR + e.LONGDUN + "/", 
    e.RES_DIR_UILONGDUN = "" + e.RES_DIR + e.UILONGDUN + "/", e.RES_DIR_ZUJI = "" + e.RES_DIR + e.ZUJI + "/", 
    e.RES_DIR_UIBLOOD = "" + e.RES_DIR + e.UIBLOOD + "/", e.RES_DIR_SKILLEFFECT = "" + e.RES_DIR + e.SKILLEFFECT + "/", 
    e.RES_DIR_MAPEFFECT = "" + e.RES_DIR + e.MAPEFFECT + "/", e.RES_DIR_SHENQI = "" + e.RES_DIR + e.SHENQI + "/", 
    e.RES_DIR_LILIAN = "" + e.RES_DIR + e.LILIAN + "/", e.RES_DIR_XUNZHANG = "" + e.RES_DIR + e.XUNZHANG + "/", 
    e.RES_DIR_TITLE = "" + e.RES_DIR + e.TITLE + "/", e.RES_DIR_ITEM_EFFECT = "" + e.RES_DIR + e.ITEM_EFFECT + "/", 
    e.RES_DIR_NPC = "" + e.RES_DIR + e.NPC + "/", e.RES_DIR_COLLECT = "" + e.RES_DIR + e.COLLECT + "/", 
    e.RES_DIR_MACHE = "" + e.RES_DIR + e.MACHE + "/", e.RES_DIR_LINGQI = "" + e.RES_DIR + e.LINGQI + "/", 
    e.RES_DIR_UILINGCHONG = "" + e.RES_DIR + e.UILINGCHONG + "/", e.RES_DIR_LINGCHONG = "" + e.RES_DIR + e.LINGCHONG + "/", 
    e.RES_DIR_UILINGCHONGPART = "" + e.RES_DIR + e.UILINGCHONGPART + "/", e.RES_DIR_UIZHENBAO = "" + e.RES_DIR + e.UIZHENBAO + "/", 
    e.RES_DIR_LUNHUIEQUIP = "" + e.RES_DIR + e.LUNHUIEQUIP + "/", e.RES_DIR_NEWSHENQI = "" + e.RES_DIR + e.NEWSHENQI + "/", 
    e.RES_DIR_KUAFU_NPC_NAME = "" + e.RES_DIR + e.KUAFU_NPC_NAME + "/", e.RES_DIR_UISHENJIAN = "" + e.RES_DIR + e.UISHENJIAN + "/", 
    e.RES_DIR_UISHENJIANPART = "" + e.RES_DIR + e.UISHENJIANPART + "/", e.RES_DIR_FOOT = "" + e.RES_DIR + e.FOOT + "/", 
    e.RES_DIR_UILEISHEN = "" + e.RES_DIR + e.UILEISHEN + "/", e.RES_DIR_LEISHEN = "" + e.RES_DIR + e.LEISHEN + "/", 
    e.jpgIgnore = [ "forge_bg0", "treasure_bg2" ], e;
}();

t(d.prototype, "ResPath"), window.ResPath = d;

var g = function(t) {
    function o() {
        var i = t.call(this) || this;
        return i.addEventListener(e.Event.ADDED_TO_STAGE, i.onAddToStage, i), i;
    }
    return i(o, t), o.prototype.onAddToStage = function(t) {
        void 0 === t && (t = null), this.removeEventListener(e.Event.ADDED_TO_STAGE, this.onAddToStage, this), 
        e.gameTextureType = d.gameTextureType, this.stage.registerImplementation("eui.IAssetAdapter", new j()), 
        this.stage.registerImplementation("eui.IThemeAdapter", new Z()), se.init(), e.Capabilities.isMobile ? p.ins().setScaleMode(e.StageScaleMode.FIXED_NARROW) : (p.ins().setScaleMode(e.StageScaleMode.SHOW_ALL), 
        p.ins().getStage().orientation = e.OrientationMode.AUTO), this.setRes();
    }, o.prototype.setRes = function() {
        y.ins().init(), se.setLoadProgress(50, "(加载游戏配置)"), se.isWxgame ? this.wxloadConfig() : (RES.parseConfig(ResTheme.resJson, "resource/"), 
        new eui.Theme(se.thmPath, this.stage), RES.setMaxLoadingThread(4), this.onThemeLoadComplete());
    }, o.prototype.wxloadConfig = function() {
        return n(this, void 0, void 0, function() {
            var t;
            return r(this, function(i) {
                switch (i.label) {
                  case 0:
                    return i.trys.push([ 0, 2, , 3 ]), [ 4, RES.loadConfig("resource/load.res.json", "resource/") ];

                  case 1:
                    return i.sent(), [ 3, 3 ];

                  case 2:
                    return t = i.sent(), console.log("loadfaile:resource/load.res.json"), e.setTimeout(this.wxloadConfig, this, 1e3), 
                    [ 2 ];

                  case 3:
                    return RES.setMaxRetryTimes(Number.MAX_VALUE), se.setLoadProgress(60, "(加载游戏主题)"), 
                    [ 4, this.loadTheme() ];

                  case 4:
                    return i.sent(), RES.setMaxLoadingThread(4), this.onThemeLoadComplete(), [ 2 ];
                }
            });
        });
    }, o.prototype.loadConfig = function() {
        return n(this, void 0, void 0, function() {
            var t;
            return r(this, function(i) {
                switch (i.label) {
                  case 0:
                    return i.trys.push([ 0, 2, , 3 ]), [ 4, RES.loadConfig(se.resPath, "resource/") ];

                  case 1:
                    return i.sent(), [ 3, 3 ];

                  case 2:
                    return t = i.sent(), console.log("loadfaile:" + se.resPath), e.setTimeout(this.loadConfig, this, 1e3), 
                    [ 2 ];

                  case 3:
                    return RES.setMaxRetryTimes(Number.MAX_VALUE), se.setLoadProgress(60, "(加载游戏主题)"), 
                    [ 4, this.loadTheme() ];

                  case 4:
                    return i.sent(), RES.setMaxLoadingThread(4), this.onThemeLoadComplete(), [ 2 ];
                }
            });
        });
    }, o.prototype.loadTheme = function() {
        var e = this;
        return new Promise(function(t, i) {
            new eui.Theme(se.thmPath, e.stage).addEventListener(eui.UIEvent.COMPLETE, function() {
                t();
            }, e);
        });
    }, o.prototype.onThemeLoadComplete = function() {
        this.gameApp = new f();
    }, o.closesocket = function() {
        ie.ins().close();
    }, o;
}(e.DisplayObjectContainer);

t(g.prototype, "Main"), window.Main = g;

var f = function() {
    function e() {
        se.isWxgame ? _.ins().runScene(Se) : (c.getIns().report(c.loaded), se.isFirstLoad ? this.onResourceLoadComplete() : (RES.setMaxRetryTimes(1e3), 
        A.ins().loadGroup(se.loadGroupResName, this.onResourceLoadComplete, this.onResourceLoadProgress, this)));
    }
    return e.prototype.onResourceLoadComplete = function() {
        se.isFirstLoad || e.initData(), _.ins().runScene($), se.setLoadProgress(90, "(登录游戏中)");
    }, e.initData = function() {
        if (!e.canEnter) {
            if (RES.setMaxRetryTimes(3), window.config0_zz ? y.cfgzz = [ window.config0_zz, window.config1_zz, window.config2_zz ] : y.cfgzz = [ new JSZip(RES.getRes(se.changeLangResPath("config0") + "_zz")), new JSZip(RES.getRes(se.changeLangResPath("config1") + "_zz")), new JSZip(RES.getRes(se.changeLangResPath("config2") + "_zz")) ], 
            !se.isWxgame) {
                RES.getRes(se.changeLangResPath("exml") + "_json").exmls.forEach(function(e) {
                    return EXML.$parseURLContentAsJs(e.path, e.gjs, e.className);
                });
                var t = RES.getRes(se.changeLangResPath("game") + "_json");
                if (t) {
                    var i = document.createElement("script");
                    i.setAttribute("crossorigin", ""), i.text = t.content, document.getElementsByTagName("head")[0].appendChild(i);
                }
            }
            GameMap.init(), RoleAI.ins().init(), e.canEnter = !0;
        }
    }, e.prototype.onResourceLoadProgress = function(e, t) {
        se.setLoadProgress(60 + e / t * 30, "(加载必要资源)");
    }, e;
}();

t(f.prototype, "GameApp"), window.GameApp = f;

var m = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._layers = new Array(), t;
    }
    return i(t, e), t.prototype.onEnter = function() {}, t.prototype.onExit = function() {
        D.ins().closeAll(), this.removeAllLayer();
    }, t.prototype.addLayer = function(e) {
        e instanceof G ? (p.ins().getStage().addChild(e), this._layers.push(e)) : e instanceof a && (p.ins().getUIStage().addChild(e), 
        this._layers.push(e));
    }, t.prototype.addLayerAt = function(e, t) {
        e instanceof G ? (p.ins().getStage().addChildAt(e, t), this._layers.push(e)) : e instanceof a && (p.ins().getUIStage().addChildAt(e, t), 
        this._layers.push(e));
    }, t.prototype.removeLayer = function(e) {
        e instanceof G ? (p.ins().getStage().removeChild(e), this._layers.splice(this._layers.indexOf(e), 1)) : e instanceof a && (p.ins().getUIStage().removeChild(e), 
        this._layers.splice(this._layers.indexOf(e), 1));
    }, t.prototype.layerRemoveAllChild = function(e) {
        e instanceof G ? e.removeChildren() : e instanceof a && e.removeChildren();
    }, t.prototype.removeAllLayer = function() {
        for (;this._layers.length; ) {
            var e = this._layers[0];
            this.layerRemoveAllChild(e), this.removeLayer(e);
        }
    }, t;
}(e.HashObject);

t(m.prototype, "BaseScene"), window.BaseScene = m;

var S = function(t) {
    function n() {
        var e = t.call(this) || this;
        return e.event = [], e._curSubViewIndex = -1, e.framekey = -1, e;
    }
    return i(n, t), n.prototype.open = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    }, n.prototype.close = function() {}, n.prototype.childrenCreated = function() {}, 
    n.prototype.observe = function(e, t, i) {
        void 0 === i && (i = void 0), F.addListener(e, t, this, i);
    }, n.prototype.removeObserve = function() {
        F.ins().removeAll(this);
    }, n.prototype.addTouchEvent = function(t, i) {
        this.addEvent(e.TouchEvent.TOUCH_TAP, t, i);
    }, n.prototype.addTouchEndEvent = function(t, i) {
        this.addEvent(e.TouchEvent.TOUCH_END, t, i);
    }, n.prototype.addChangeEvent = function(t, i) {
        this.addEvent(e.TouchEvent.CHANGE, t, i);
    }, n.prototype.addEvent = function(e, t, i) {
        t.addEventListener(e, i, this), this.event.push([ e, i, t ]);
    }, n.prototype.removeTouchEvent = function(t, i) {
        t.removeEventListener(e.TouchEvent.TOUCH_TAP, i, this);
    }, n.prototype.removeEvents = function() {
        for (var e = 0, t = this.event; e < t.length; e++) {
            var i = t[e];
            i[2].removeEventListener(i[0], i[1], this);
        }
        this.event = [];
    }, n.prototype.$onClose = function() {
        (function t(i) {
            for (var r = 0; r < i.numChildren; r++) {
                var o = i.getChildAt(r);
                o instanceof n ? o.$onClose() : o instanceof e.DisplayObjectContainer && t(o);
            }
        })(this), this.removeEvents(), this.removeObserve(), this.clearAllSubViews();
    }, n.prototype.setSkinPart = function(e, i) {
        if (t.prototype.setSkinPart.call(this, e, i), this.skin[e] && this.skin[e] != i) {
            var r = this.skin[e].parent, o = r.getChildIndex(this.skin[e]);
            pe.removeFromParent(this.skin[e]);
            for (var s = 0; s < n.replaceKeys.length; s++) {
                var a = n.replaceKeys[s];
                i[a] = this.skin[e][a];
            }
            this.skin[e] = i, r.addChildAt(i, o);
        }
    }, Object.defineProperty(n.prototype, "curSubViewIndex", {
        get: function() {
            return this._curSubViewIndex;
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.getSubView = function(e) {
        return -1 == e ? null : null == this.subViews ? null : this.subViews[e].view;
    }, n.prototype.getSubViewLen = function() {
        return this.subViews.length;
    }, n.prototype.addSubView = function(e, t, i, n, r) {
        void 0 === n && (n = 0), void 0 === r && (r = 0), null == this.subViewParams && (this.subViewParams = []), 
        this.subViewParams.push([ e, t, i, n, r ]);
    }, n.prototype.removeSubView = function(e) {
        if (null != this.subViewParams && null != this.subViewParams[e] && this.subViewParams.splice(e, 1), 
        null != this.subViews && null != this.subViews[e]) {
            var t = this.subViews[e].view;
            t.$onClose(), t.parent.removeChild(t), this.skin[this.subViews[e].key] = null, this.subViews.splice(e, 1);
        }
        this._curSubViewIndex == e && (this._curSubViewIndex = -1);
    }, n.prototype.hideSubView = function(e) {
        var t;
        e > -1 && null != this.subViews[e] && ((t = this.subViews[e].view).close(), t.removeEvents(), 
        t.removeObserve(), null != t.parent && t.parent.removeChild(t));
    }, n.prototype.openSubView = function(e, t) {
        void 0 === t && (t = !1), this.handleSubView(e, t);
    }, n.prototype.handleSubView = function(e, t) {
        if (void 0 === t && (t = !1), this.framekey = -1, this._curSubViewIndex != e || t) {
            null == this.subViews && (this.subViews = []);
            var i;
            if (this._curSubViewIndex > -1 && null != this.subViews[this._curSubViewIndex] && ((i = this.subViews[this._curSubViewIndex].view).close(), 
            i.removeEvents(), i.removeObserve(), null != i.parent && i.parent.removeChild(i)), 
            null == this.subViews[e]) {
                var n = this.subViewParams[e][0];
                (i = new this.subViewParams[e][1]()).x = this.subViewParams[e][3], i.y = this.subViewParams[e][4], 
                this.skin[n] = i, this.subViews[e] = {
                    key: n,
                    view: i
                };
            } else i = this.subViews[e].view;
            this.subViewParams[e][2].addChild(i), i.open(), this._curSubViewIndex = e;
        }
    }, n.prototype.clearAllSubViews = function() {
        if (null != this.subViews) for (var e = 0; e < this.subViews.length; e++) null != this.subViews[e] && (this.subViews[e].view.close(), 
        this.subViews[e].view.removeEvents(), this.subViews[e].view.removeObserve(), this.subViews[e].view.$onClose(), 
        this.skin[this.subViews[e].key] = null);
        this.subViews = null, this.subViewParams = null, this._curSubViewIndex = -1, this.framekey >= 0 && (Ce.instance.clearTimer(this, this.framekey), 
        this.framekey = -1);
    }, n.replaceKeys = [ "x", "y", "alpha", "anchorOffsetX", "anchorOffsetY", "blendMode", "bottom", "cacheAsBitmap", "currentState", "enabled", "filters", "height", "horizontalCenter", "hostComponentKey", "includeInLayout", "left", "mask", "matrix", "maxHeight", "maxWidth", "minHeight", "minWidth", "name", "percentHeight", "percentWidth", "right", "rotation", "scaleX", "scaleY", "scrollRect", "skewX", "skewY", "skinName", "top", "touchChildren", "touchEnabled", "verticalCenter", "visible", "width" ], 
    n;
}(eui.Component);

t(S.prototype, "BaseView"), window.BaseView = S;

var v = function(t) {
    function n() {
        var e = t.call(this) || this;
        return e.className = "@策划@使用此组件必须填写逻辑类名", e;
    }
    return i(n, t), n.prototype.childrenCreated = function() {
        try {
            var t = new (0, window[this.className])();
            if (null != t) for (var i in t) null != this[i] && -1 == n.copyKeys.indexOf(i) || -1 != n.filterKeys.indexOf(i) || (this[i] = t[i]);
            this.init && this.init();
        } catch (t) {
            console.log("BaseComponent的className为空：" + e.getQualifiedClassName(this) + "，请查看资源里面的BaseComponent组件是否有未绑定的逻辑类");
        }
    }, n.prototype.open = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    }, n.prototype.close = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    }, Object.defineProperty(n.prototype, "data", {
        get: function() {
            return this._data;
        },
        set: function(e) {
            this._data = e, eui.PropertyEvent.dispatchPropertyEvent(this, eui.PropertyEvent.PROPERTY_CHANGE, "data"), 
            this.dataChanged && this.dataChanged();
        },
        enumerable: !0,
        configurable: !0
    }), n.filterKeys = [ "data" ], n.copyKeys = [ "open", "close" ], n;
}(S);

t(v.prototype, "BaseComponent"), window.BaseComponent = v;

var E = function(t) {
    function n() {
        var e = t.call(this) || this;
        return e._resources = null, e.isTopLevel = !1, e.exclusionWins = [], e._closeGroupObjs = [ "shadow", "closeBtn1", "closeBtn", "closeBtn0" ], 
        e.isFocusDelay = !1, e._isInit = !1, e.percentHeight = 100, e.percentWidth = 100, 
        e;
    }
    return i(n, t), n.prototype.addExclusionWin = function(e) {
        -1 == this.exclusionWins.indexOf(e) && this.exclusionWins.push(e);
    }, n.prototype.isInit = function() {
        return this._isInit;
    }, n.prototype.isShow = function() {
        return null != this.stage && this.visible;
    }, n.prototype.addToParent = function(e) {
        e.addChild(this), U.ins().remove(this.destoryView, this);
    }, n.prototype.removeFromParent = function() {
        pe.removeFromParent(this), this.destoryView();
        for (var e = 0, t = this._closeGroupObjs; e < t.length; e++) {
            var i = t[e];
            this[i] && this.removeTouchEvent(this[i], this.onTouchClose);
        }
    }, n.prototype.onTouchClose = function(e) {
        D.ins().close(this), e.target == this.closeBtn1 && this.backFun();
    }, n.prototype.backFun = function() {}, n.prototype.initUI = function() {
        this._isInit = !0;
    }, n.prototype.initData = function() {}, n.prototype.openCloseListen = function() {
        for (var e = 0, t = 0, i = this._closeGroupObjs; t < i.length; t++) {
            var n = i[t];
            this[n] && this.addTouchEvent(this[n], this.onTouchClose), se.isWxgame && (null == this[n] || "common_btn3_png" != this[n].icon && "common_btn1_png" != this[n].icon || e++);
        }
        (e >= 2 || this.isTopLevel) && (this.top = p.ins().winTop);
    }, n.prototype.destroy = function() {}, n.prototype.destoryView = function() {
        Ce.instance.clearTimer(this, this.open), U.ins().removeAll(this), D.ins().destroy(this.hashCode);
        !function t(i) {
            for (var n = 0; n < i.numChildren; n++) {
                var r = i.getChildAt(n);
                e.is(r, "MovieClip") ? r.dispose() : e.is(r, "egret.DisplayObjectContainer") && t(r);
            }
        }(this);
    }, n.prototype.delayOpen = function() {
        for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
        this.clsName || (this.clsName = e.getQualifiedClassName(this)), this.isTopLevel && !n.saveViewDic[this.clsName] ? (n.saveViewDic[this.clsName] = !0, 
        Ce.instance.doFrameOnce(2, this, this.open, t)) : this.isFocusDelay ? Ce.instance.doFrameOnce(1, this, this.open, t) : this.open.apply(this, t);
    }, n.prototype.open = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    }, n.prototype.close = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    }, n.prototype.loadResource = function(e, t) {
        this._resources && this._resources.length > 0 ? (A.ins().loadResource(this._resources, [], e, null, this), 
        this.addEventListener(eui.UIEvent.CREATION_COMPLETE, t, this)) : (e(), t());
    }, n.prototype.setVisible = function(e) {
        this.visible = e;
    }, n.openCheck = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return !0;
    }, n.saveViewDic = {}, n;
}(S);

t(E.prototype, "BaseEuiView", [ "IBaseView" ]), window.BaseEuiView = E;

var y = function(t) {
    function n() {
        var e = t.call(this) || this;
        return e.creatRoleVer = 269, e.cfgInitArr = [ "GaobaoBossCommonConfig", "BossBloodConfig", "GuildConfig", "ItemConfig2000", "ChaptersConfig00", "ItemConfig1000", "LuckyStarBaseConfig", "SkillsOpenConfig", "YuanxiaoBossCommonConfig", "SkillsConfig01100", "Systemlimit", "YuanGuBossCommon", "CircleCommonConfig", "SkillsBase", "LingChongCommonConfig", "AchievementTaskConfig", "SkillsConfig05000", "GuildTaskConfig", "ZhenBaoActivityCfg", "EquipConfig1000", "NobilityBaseConfig", "ChatConstConfig", "GuildBattleLevel", "ShenZhiBossBaseCfg", "ExpConfig", "EnhanceCostConfig", "FriendLimit", "VipGridConfig", "ItemExchangeComposeConfig", "ClientGlobalConfig", "ItemConfig2001", "MonstersConfig620", "WoodLevelConfig", "FQZZCommonConfig", "XianjieConfig", "HefuActivityBaseConfig", "CircleDummyConfig", "WanfaConfig", "WorldBossCommonConfig", "ChongZhi1Config", "YWZCConstCfg", "AreanaConstConfig", "HuSongMeiMeiConstConfig", "SkillsConfig01400", "DailyFubenConfig", "HonorStore", "KuaFuZhanShengBossBossCfg", "MagatamaLevelConfig", "TrainLevelAwardConfig", "LingChongActivityConfig", "LegendComposeConfig", "QilingCostConfig", "NoviceTargetConfig", "NewYbBaseFbconfig", "ZlActivityConfig", "BeginnerGuildJumpConfig", "XianjieBasicConfig", "MonstersConfig100", "EnhanceAttrConfig", "SkillsUpgradeConfig", "SkillsConfig01300", "XLXTCommonConfig", "WaterLevelConfig", "JingMaiLevelConfig00", "Systemopen", "EveryBaseConfig", "AttrPowerConfig", "FireLevelConfig", "ScenesConfig", "KuaFuZhanConstConfig", "LunHuiExpConfig", "LingChongQualityConfig", "BeginnerGuildNpcConfig", "BeginnerGuideConfig", "ItemExchangeResolveConfig", "ZhanLingStage", "NoviceCommonConfig", "BeginnerGuildTaskConfig", "GhostTowerCommonConfig", "FbChallengeConfig00", "GoldLevelConfig", "LingChongSkillConfig", "ShenJianPartLevelCfg", "LegendRecomConfig", "SkillsConfig01200", "MonstersConfig315", "LingChongActivityDefaultValueConfig", "JueDiQiuShengBaseCfg", "WuShuangBossBossCfg", "NobilityConfig", "TitleConf", "SoilLevelConfig", "ItemConfig2002", "GradeInvestConfig", "KuaFuZhanTaskCfg", "ShenJianOpenCfg", "GuanQiaYuGaoconfig", "PublicBossBaseConfig", "SceneGuideTxtConfig", "KuaFuNpcConfig", "ZhulingAttrConfig", "WuLinBaZhuLimit", "LunHuiBaseConfig", "ZhulingCostConfig", "AiweiyouBaseConfig", "KuaFuBossConstCfg" ], 
        e.exmlInitArr1 = [ "FirstChargeBtnSkin", "OpenServerSubSkin0", "RebateSubSkin11", "LingChongSkillItemSkin", "RebateSubItemSkin0", "RebateBtnSkin", "VipGiftTabSkin", "OpenServerItemSkin0", "WelfareHallSkin", "MoneyTreeSkin", "bar13Skin", "PriceIconSkin", "DailySignSkin", "DailyWelfareSkin", "act14logNewSkin", "RetrievingSkin", "CDkeySkin", "skins.TextInputSkin", "gameNoticeSkin", "WelfareHallTabSkin", "DailySignItemSkin", "DailyWelfareItemSkin", "act14logItemSkin", "RetrievingItemSkin", "NewItemIconSkin", "LuckyXingPanSkin", "LuckyXingPanItemSkin", "StarItem7Skin", "StarItem8Skin", "AiweiyouCertification", "WanbaCollectionSkin", "GuiZuSkin", "BtnCom2Skin", "LinkButtonSkin", "GuiZuItemSkin0", "BtnTab12Skin", "GuiZuRewardSkin", "GuiZuItemSkin1", "ShopSkin", "BlackMarketSkin", "ItemShopSkin", "ShopPointSkin", "FeatsShopSkin", "BlackMarketSpecialItem", "FeatsShopItem", "ShopPointItem", "ItemShopItem", "BlackMarketItem", "BestDiscountSkin", "WanbaPetSkin", "WanbaPetItemSkin", "ZwwxxyxGiftSkin", "ZwwxxyxCDKeySkin", "PlayHallSkin", "ShenZhiBossSkin", "ShenZhiBossItemSkin", "BtnTab7Skin", "PlayHallItemSkin", "BarCom0Skin", "GrowSystemSkin", "GrowSystemBtnSkin", "EyeWinSkin", "ChatSceneWinSkin", "ChatItemSkin2", "ChatEmjioItemSkin", "RoleWinSkin", "RoleInfoSkin", "RoleZhuzaiItemSkin", "NewZsPanelSkin", "GainZsSkin", "XiuXingSkin", "LianHunSkin", "LianHunItemSkin", "JinMaiSkin", "SkillSkin", "SkillPanelSkin", "SkillItem", "SkillAdvancedPanelSkin", "SkillAdvancedTabSkin", "SkillAdvancedPropItemSkin", "AdvanceHorseWinSkin", "FuncNoticeBtnSkin", "MainButtonWithoutBGSkin", "MainButtonSkin", "bar11Skin", "TogBtn1Skin", "WanfaYugaoSkin", "BtnCom0Skin", "bar16Skin", "TogBtn0Skin", "ActivityIconSkin", "LingChongGuideSkin", "AdvanceSpecialSkillItemSkin", "skins.CheckBoxSkin", "FireItemSkin", "AdvanceEquipItemSkin", "AdvanceSkillItemSkin", "AdvanceWingWinSkin", "AdvanceZuJiWinSkin", "AdvanceGangQiWinSkin", "AdvanceFaBaoWinSkin", "AdvanceMoShenWinSkin", "DressSkin", "RoleSelectPanelSkin", "RoleToggleBtn", "DressItemSkin", "DressShopSkin", "DressShopItemSkin", "TitleSkin", "TitleItemSkin", "TreasureHuntSkin", "OrangeEquipSkin", "GrewupOrangePanel", "GrewupAttributesPanel", "MixOrangePanel", "MixAttributesPanel", "EquipItem", "Btn7Skin", "NewLegendEquipSkin", "BreakDownSkin", "GainGoodsItemSkin", "EquipBlessSkin", "BlessItemSkin", "RYSZViewkin", "RYSZPanelSkin", "RYSZItemSkin", "RYSZDecomSkin", "StarItem6Skin", "XianLvSkin", "XianLvPanelSkin", "XianLvTXJPanelSkin", "XianLvItemSkin", "bar20Skin", "XianLvFbPanelSkin", "XinItemSkin", "XianLvTXJItemSkin", "RoleAttrSkin", "RoleAttrItemSkin", "BagSkin", "SynthesisSkin", "SynthesisConsumeItemSkin", "AnimaSkin", "AnimaWarSkin", "AnimaItemSkin", "AnimaResolveSkin", "DragonSkin", "DragonAdvanceSkin", "BarCom2Skin", "DragonZhuSkin", "DragonZhuItemSkin", "ClimbTowerSkin", "ClimbTowerBoxSkin", "ClimbTowerChapterSkin1", "ClimbTowerChapterSkin", "DragonItemSkin", "DragonHintItemSkin", "ClimbTowerSkin$Skin6", "LunHuiEquipSkin", "LunHuiEquipPanelSkin", "LunHuiEquipItemSkin", "ClimbTowerItemSkin", "StarItem5Skin", "DailyFbSkin", "ChallengeFbSkin", "FbExpSkin", "NewTeamPanelSkin", "BossItemSkin", "DailyFbItemSkin", "PriceYuanbaoIconSkin", "CheckRewardSkin", "GuanqiajiangliSkin", "ChargeTipsViewSkin", "FullBagSkin", "SmeltMainViewSkin", "SmeltMainSkin", "SmeltMain1Skin", "SmeltEquipRongluSkin", "ResultSkin", "ResultSkin$Skin15", "BusinessIconSkin", "OfflineRewardSkin", "GuizuNoticeSkin", "GuizuBtnSkin", "uiMainBgSkin", "KuaFuWarNoticeSkin", "XianshiTaskNoticeSkin", "ItemSkin", "ItemIconSkin", "ResultSkin$Skin14", "CheckEfficienSkin", "ZaoYuBossSkin", "BeginnerGuideDialogSkin", "ItemTipsSkin", "VipSkin", "NewFirstChargeSkin", "NewFirstChargeItemSkin", "MonthCardSkin", "QmRedBagSkin", "QmRecordItemSkin", "QmTipsSkin", "DailyGiftSkin", "DailyGiftItemSkin", "GiftItemSkin", "ZaoYuBGSkin", "ZaoYuSkin", "LadderWinSkin", "LadderSratListSkin", "LadderSratSkin", "LadderSingSratListSkin", "ZaoYuInfoItemSkin", "LadderRankAwardWin", "LastWeekRankItemSkin", "LadderRankSkin", "LadderRankItemSkin", "MailSkin", "MailItemSkin", "LingChongMainSkin", "LingChongSkin", "LingChongSkillSkin", "LingChongActivitySkin", "LingChongUpLevelSkin", "LingChongUpStarSkin", "MuChangSkin", "MuChangSub0Skin", "MuChangSub1Skin", "MiBaoSkin", "MiBaoSubSkin0", "MiBaoSubSkin1", "MiBaoUseSkin", "MiBaoWanNengSkin", "LingChongItemSkin", "LingChongActivityItemSkin", "MiBaoItemSkin0", "MiBaoItemSkin1", "BtnTab11Skin", "BtnTab10Skin", "MuChangGetPowerSkin", "BossSkin", "PersonalBossPanelSkin", "PublicBossPanelSkin", "Btn3Skin", "WuShuangBossSkin", "KuafuWarBossSkin", "WuShuangBossItemSkin", "FriendsWinSkin", "FriendsRecentItemSkin", "FriendsItemSkin", "FriendsChatItemSkin", "SynthesisItemSkin0", "SynthesisItemSkin1", "AdvanceJianTongWinSkin", "ZhenBaoSystemSkin", "ZhenBaoSystemActivitySkin", "ZhenBaoSystemUpStarSkin", "ShenJianSkin", "ShenJianPartItemSkin", "ShenJianSkillItemSkin", "ZhenBaoSystemItemSkin", "ForgeSkin", "CircleRunBoostSkin", "ForgeItemSkin", "CircleRunZhulingSkin", "CircleRunGemSkin", "CircleRunQilingSkin", "BoostSkin", "ZhulingSkin", "GemSkin", "QilingSkin", "XianJieSkin", "XianJieItemSkin", "GameSceneViewSkin", "Btn0Skin", "TransactNoticeSkin", "BtnCom1Skin", "UIView1Skin", "ChatMainSkin", "Btn5Skin", "SceneTxtGuideSkin", "skins.ScrollerSkin", "skins.VScrollBarSkin", "skins.HScrollBarSkin", "UIView1_1Skin", "TogBtn4Skin", "bar12Skin", "UIView2Skin", "bar0Skin", "BtnTab8Skin", "TipsSkin", "bloodBarSkin", "bloodBar2Skin", "PlayFunSkin", "WanbaShareSkin", "RankSkin", "RankItemPowerSkin", "BtnTab3Skin", "GuildApplySkin", "ApplyItemSkin", "LiLianWinSkin", "LiLianSkin", "bar1Skin", "LabelButtonSkin", "Btn22Skin", "ChengjiuPanelSkin", "XunzhangPanelSkin", "XunzhangItemSkin", "LiLianRewardSkin", "ChengjiuItemSkin", "StarItem3Skin", "BtnTab0Skin", "ChengjiuTagSkin", "LiLianItemSkin", "MostArtiifactsSkin", "ArtifactsSkin", "ShenqiSkin", "ArtifactsItemSkin", "ArtifactBtnSkin", "HuntSkin", "TreasureHuntPanelSkin", "Btn1Skin", "AnimaXunLingSkin", "CycleHuntPanel", "HuntListRendererSkin", "AnimaListRendererSkin", "HuntStoreSkin", "TreasureStore", "AnimaStoreSkin", "RebateHallSkin", "RebateHallTabSkin", "RebateSubSkin0", "VipGiftSkin", "RebateSubSkin10" ], 
        e.exmlInitArr2 = [ "DailySignSkin", "EyeWinSkin", "FirstChargeBtnSkin", "OpenServerSubSkin0", "RebateSubSkin11", "LingChongSkillItemSkin", "WelfareHallSkin", "MoneyTreeSkin", "bar13Skin", "PriceIconSkin", "act14logNewSkin", "CDkeySkin", "gameNoticeSkin", "StarItem7Skin", "ZwwxxyxGiftSkin" ], 
        e;
    }
    return i(n, t), n.ins = function() {
        return t.ins.call(this);
    }, n.prototype.has = function(e) {
        return this.resVersionData.hasOwnProperty(e);
    }, n.prototype.getDir = function(e) {
        return this.resVersionData[e];
    }, n.prototype.getVer = function(e) {
        return this.resVersionData[e] >> 8;
    }, n.prototype.hasVer = function() {
        return !isNaN(se.v);
    }, n.prototype.init = function() {
        e.ImageLoader.crossOrigin = "anonymous";
        var t = RES.getRealURL;
        RES.getRealURL = function(e) {
            var i = n.ins().getVersion(e);
            return null != t && (i = t(i)), i;
        }, this.res_loadByVersion(), this.resVersionData = window.verData;
    }, n.prototype.getVersionUrl = function(e) {
        var t = this.getDir(e);
        null == t && (t = 0);
        var i = "" + se.resAdd + t + "/" + e;
        return se.isWxgame && (e.indexOf("/num/") > -1 || e.indexOf("eui.json") > -1 || e.indexOf("load_Reel.png") > -1 || e.indexOf("/scene/") > -1 || e.indexOf("/wxloading/") > -1 || e.lastIndexOf(".zz") > -1 || e.indexOf("/welcomepanel/") > -1 || e.indexOf("default.res.json") > -1 ? null != window.catchPathDic && null == window.catchPathDic[i] && (window.catchPathDic[i] = t) : e.indexOf(".png") > -1 && (e.indexOf("/body/") > -1 || e.indexOf("/horse/") > -1 || e.indexOf("/humanhorse/") > -1 || e.indexOf("/skilleffect/") > -1 || e.indexOf("/monster/") > -1 || e.indexOf("/uieffect/") > -1) && null != window.catchPathDic && null == window.catchPathDic[i] && (window.catchPathDic[i] = t)), 
        i;
    }, n.prototype.getVersion = function(e) {
        if (-1 != (e = e.replace("resource//", "resource/")).indexOf("://")) return e;
        if (se.isWxgame && !f.isEnterMap) {
            if (e.indexOf("load.res.json") > -1 || e.indexOf("wxloading_barbg") > -1 || e.indexOf("wxloading_bareff") > -1 || e.indexOf("wxloading_barline") > -1 || e.indexOf("wxloading_loadbg") > -1 || e.indexOf("wxloading_txt") > -1) return e;
            if (e.indexOf("/uieffect00014/") > -1 || e.indexOf("/uieffect00053/") > -1 || e.indexOf("/createrole/") > -1 || e.indexOf("/serverchoose/") > -1 || e.indexOf("wxloading_logo") > -1) {
                var t = "" + se.resAdd + this.creatRoleVer + "/" + e;
                return null != window.catchPathDic && null == window.catchPathDic[t] && (window.catchPathDic[t] = this.creatRoleVer), 
                t;
            }
        }
        return e = this.hasVer() ? this.getVersionUrl(e) : se.isWxgame ? "" + se.resAdd + e : "" + se.resAdd + e + "?v=" + se.gameVer;
    }, n.prototype.res_loadByVersion = function() {
        se.isOldEgret() && (RES.web.Html5VersionController.prototype.getVirtualUrl = function(e) {
            if (-1 == e.lastIndexOf("http")) {
                e = e.replace("resource//", "resource/");
                var t = n.ins();
                if (t.hasVer()) if (t.has(e)) {
                    var i = t.getDir(e);
                    e = "" + se.resAdd + i + "/" + e;
                } else e = se.resAdd + "0/" + e; else e = "" + se.resAdd + e + "?v=" + se.gameVer;
            }
            return e;
        });
    }, n.prototype.loadConfig = function(t, i) {
        if (this.complateFunc = t, this.complateFuncTarget = i, this.resVersionData) this.complateFunc.call(this.complateFuncTarget); else {
            if (this.hasVer()) {
                var n = new e.HttpRequest();
                n.responseType = e.HttpResponseType.ARRAY_BUFFER;
                var r = function(t) {
                    switch (t.type) {
                      case e.Event.COMPLETE:
                        var i = t.currentTarget.response, n = {};
                        if (i.byteLength) for (var r = new Uint8Array(i), o = new Zlib.Inflate(r), s = o.decompress(), a = new e.ByteArray(s.buffer), h = s.length; a.position < h; ) n[a.readUTF()] = a.readUnsignedInt();
                        this.resVersionData = n, this.complateFunc.call(this.complateFuncTarget);
                        break;

                      case e.IOErrorEvent.IO_ERROR:
                        console.log("respHandler io error");
                    }
                };
                return n.once(e.Event.COMPLETE, r, this), n.once(e.IOErrorEvent.IO_ERROR, r, this), 
                n.open("" + se.resAdd + se.v + "/" + se.v + ".ver", e.HttpMethod.GET), void n.send();
            }
            this.complateFunc.call(this.complateFuncTarget);
        }
    }, n.resPaths = [], n.cfgzz = [], n.cfgjson = {}, n;
}(o);

t(y.prototype, "ResVersionManager"), window.ResVersionManager = y;

var _ = function(e) {
    function t() {
        return e.call(this) || this;
    }
    return i(t, e), t.ins = function() {
        return e.ins.call(this);
    }, t.prototype.clear = function() {
        var e = this._currScene;
        e && (e.onExit(), this._currScene = void 0);
    }, t.prototype.runScene = function(e) {
        if (null != e) {
            if (e != this._curCls) {
                var t = this._currScene;
                t && (t.onExit(), t = void 0);
                var i = new e();
                i.onEnter(), this._currScene = i, this._curCls = e;
            }
        } else console.log("runScene:scene is null");
    }, t.prototype.getCurrScene = function() {
        return this._currScene;
    }, t;
}(o);

t(_.prototype, "SceneManager"), window.SceneManager = _;

var T = function(t) {
    function n() {
        var e = t.call(this) || this;
        return e.content = null, e.speed = .6, e.isEnter = !1, e.firstEnter = !0, e.init(), 
        e;
    }
    return i(n, t), n.ins = function() {
        return t.ins.call(this);
    }, n.prototype.init = function() {
        this.averageUtils = new R(), this.content = new e.Sprite(), this.content.touchEnabled = !0, 
        this.uiImageContainer = new e.DisplayObjectContainer(), this.content.addChild(this.uiImageContainer), 
        RES.getResByUrl("resource/assets/load_Reel.png", function(t) {
            var i = new e.Bitmap();
            i.texture = t, i.x = .5 * -i.width, i.y = .5 * -i.height, this.uiImageContainer.addChild(i);
        }, this, RES.ResourceItem.TYPE_IMAGE), ie.ins().setOnClose(this.showLoading, this), 
        ie.ins().setOnConnected(this.hideLoading2, this);
    }, n.prototype.showLoading = function() {
        this.firstEnter || U.ins().isStop || (this.isEnter = !1, this.content.graphics.clear(), 
        this.content.graphics.beginFill(0, .2), this.content.graphics.drawRect(0, 0, p.ins().getWidth(), p.ins().getHeight()), 
        this.content.graphics.endFill(), this.uiImageContainer.x = .5 * this.content.width, 
        this.uiImageContainer.y = .5 * this.content.height, p.ins().getStage().addChild(this.content), 
        e.startTick(this.enterFrame, this));
    }, n.prototype.hideLoading2 = function() {
        e.is(_.ins().getCurrScene(), "MainScene") || (this.content && this.content.parent && (p.ins().getStage().removeChild(this.content), 
        this.uiImageContainer.rotation = 0), e.stopTick(this.enterFrame, this));
    }, n.prototype.hideLoading = function() {
        this.isEnter = !0, this.content && this.content.parent && (p.ins().getStage().removeChild(this.content), 
        this.uiImageContainer.rotation = 0), e.stopTick(this.enterFrame, this);
    }, n.prototype.enterFrame = function(e) {
        return this.averageUtils.push(this.speed * e), this.uiImageContainer.rotation += this.averageUtils.getValue(), 
        !1;
    }, n;
}(o);

t(T.prototype, "EasyLoading"), window.EasyLoading = T;

var R = function() {
    function e(e) {
        void 0 === e && (e = 10), this.nums = [], this.numsLen = 0, this.numSum = 0, this.maxNum = e;
    }
    return e.prototype.push = function(e) {
        this.numsLen > this.maxNum && (this.numsLen--, this.numSum -= this.nums.shift()), 
        this.nums.push(e), this.numSum += e, this.numsLen++;
    }, e.prototype.getValue = function() {
        return this.numSum / this.numsLen;
    }, e.prototype.clear = function() {
        this.nums.splice(0), this.numsLen = 0, this.numSum = 0;
    }, e;
}();

t(R.prototype, "AverageUtils"), window.AverageUtils = R;

var w = function() {
    function t() {}
    return t.encode = function(e, i, n) {
        if (void 0 === i && (i = 0), void 0 === n && (n = 0), i >= e.length) return 0;
        var r = n ? i + n : e.length;
        r > e.length && (r = e.length), e.position = i;
        for (var o = i; r > o; ++o) {
            var s = e.readByte();
            s ^= t.sKeyBuff[o % 4], e.position--, e.writeByte(s);
        }
        return r - i;
    }, t.decode = function(e, i, n) {
        return void 0 === i && (i = 0), void 0 === n && (n = 0), t.encode(e, i, n);
    }, t.getCRC16 = function(e, t) {
        return void 0 === t && (t = 0), C.update(e, 0, t);
    }, t.getCRC16ByPos = function(e, t, i) {
        return void 0 === t && (t = 0), void 0 === i && (i = 0), C.update(e, t, i);
    }, t.getCheckKey = function() {
        var i = new e.ByteArray();
        return i.endian = e.Endian.LITTLE_ENDIAN, i.writeUnsignedInt(t.sKey), C.update(i);
    }, t.getSelfSalt = function() {
        return t.sSelfSalt;
    }, t.getTargetSalt = function() {
        return t.sTargetSalt;
    }, t.setTargetSalt = function(e) {
        t.sTargetSalt = e, t.makeKey();
    }, t.makeSalt = function() {
        var e = new Date();
        return Math.random() * e.getTime();
    }, t.makeKey = function() {
        t.sKey = 8254 + (t.sSelfSalt ^ t.sTargetSalt);
        for (var e = 0; 4 > e; ++e) t.sKeyBuff[e] = (t.sKey & 255 << (e << 3)) >> (e << 3);
    }, t.sSelfSalt = t.makeSalt(), t.sKeyBuff = new Array(4), t;
}();

t(w.prototype, "Encrypt"), window.Encrypt = w;

var C = function() {
    function e() {}
    return e.update = function(t, i, n) {
        void 0 === i && (i = 0), void 0 === n && (n = 0);
        var r = 0, o = 0;
        0 == n && (n = t.length), t.position = i;
        for (var s = i; n > s; ++s) o = 255 & e.CRCBitReflect(t.readByte(), 8) ^ r >> 8 & 16777215, 
        o &= 255, r = e.CRCTable[o] ^ r << 8 & 4294967040;
        return 65535 & (0 ^ e.CRCBitReflect(r, 16));
    }, e.makeCRCTable = function() {
        for (var t = 0, i = new Array(256), n = 0; 256 > n; ++n) {
            t = n << 8 & 4294967040;
            for (var r = 0; 8 > r; ++r) t = 32768 & t ? t << 1 & 4294967294 ^ e.POLYNOMIAL : t << 1 & 4294967294;
            i[n] = t;
        }
        return i;
    }, e.CRCBitReflect = function(t, i) {
        var n = 0, r = 0;
        i--;
        for (var o = 0; i >= o; ++o) r = i - o, 1 & t && (n |= 1 << r & e.DropBits[r]), 
        t = t >> 1 & 2147483647;
        return n;
    }, e.POLYNOMIAL = 4129, e.CRCTable = e.makeCRCTable(), e.DropBits = [ 4294967295, 4294967294, 4294967292, 4294967288, 4294967280, 4294967264, 4294967232, 4294967168, 4294967040, 4294966784, 4294966272, 4294965248, 4294963200, 4294959104, 4294950912, 4294934528 ], 
    e;
}();

t(C.prototype, "CRC16"), window.CRC16 = C;

var I = function() {
    function t() {
        this._objs = new Array();
    }
    return t.prototype.pushObj = function(e) {
        this._objs.push(e);
    }, t.prototype.popObj = function() {
        return this._objs.length > 0 ? this._objs.pop() : null;
    }, t.prototype.clear = function() {
        for (;this._objs.length > 0; ) this._objs.pop();
    }, t.pop = function(i) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        t._content[i] || (t._content[i] = []);
        var o = t._content[i];
        if (o.length) return o.pop();
        var s = e.getDefinitionByName(i), a = n.length, h = void 0;
        return 0 == a ? h = new s() : 1 == a ? h = new s(n[0]) : 2 == a ? h = new s(n[0], n[1]) : 3 == a ? h = new s(n[0], n[1], n[2]) : 4 == a ? h = new s(n[0], n[1], n[2], n[3]) : 5 == a && (h = new s(n[0], n[1], n[2], n[3], n[4])), 
        h.ObjectPoolKey = i, h;
    }, t.popWithExtraKey = function(i, n) {
        t._content[i] || (t._content[i] = []);
        var r, o = t._content[i];
        if (o.length) for (var s = 0; s < o.length; s++) if (o[s].extraKey == n) {
            r = o[s], o.splice(s, 1);
            break;
        }
        return r || ((r = new (e.getDefinitionByName(i))(n)).extraKey = n, r.ObjectPoolKey = i), 
        r;
    }, t.push = function(e) {
        if (null == e) return !1;
        var i = e.ObjectPoolKey;
        return !(!t._content[i] || t._content[i].indexOf(e) > -1) && (t._content[i].push(e), 
        !0);
    }, t.clear = function() {
        t._content = {};
    }, t.clearClass = function(e, i) {
        void 0 === i && (i = null);
        for (var n = t._content[e]; n && n.length; ) {
            var r = n.pop();
            i && r[i](), r = null;
        }
        t._content[e] = null, delete t._content[e];
    }, t.dealFunc = function(e, i) {
        var n = t._content[e];
        if (null != n) {
            var r = 0, o = n.length;
            for (r; o > r; r++) n[r][i]();
        }
    }, t._content = {}, t;
}();

t(I.prototype, "ObjectPool"), window.ObjectPool = I;

var b = function(t) {
    function n() {
        var i = t.call(this) || this;
        return i.rate = 1, i.stopFrame = 0, i._updateFrameTime = 0, i._hasPlayCompTimer = !1, 
        i._hasUpdateFrameTimer = !1, i.isClear = !1, i._mcFactory = new e.MovieClipDataFactory(), 
        i;
    }
    return i(n, t), n.prototype.playFile = function(t, i, r, o, s, a) {
        var h = this;
        return void 0 === i && (i = 1), void 0 === r && (r = null), void 0 === o && (o = !0), 
        void 0 === s && (s = !0), void 0 === a && (a = 0), this.isClear = !1, this.time = e.getTimer(), 
        this._compFun = r, this.playCount = i, this.remove = o, this._updateFrameTime = a, 
        this._hasPlayCompTimer && (this._hasPlayCompTimer = !1, U.ins().remove(this.playComp, this)), 
        this._hasUpdateFrameTimer && (this._hasUpdateFrameTimer = !1, U.ins().remove(this.updateFrame, this)), 
        this.name == t ? void (s && this.createBody()) : (null != this.name && null != n.mcDic[this.name] && --n.mcDic[this.name] <= 0 && (n.timeCatchDic[this.name] = e.getTimer()), 
        null != t && (null != n.mcDic[t] ? n.mcDic[t]++ : n.mcDic[t] = 1), this.name = t, 
        this.jsonData = null, this.texture = null, void (null != t && (RES.getResByUrl(this.name + ".json", function(e) {
            h.name == t && e && (h.jsonData = e, h.createBody());
        }, this, RES.ResourceItem.TYPE_JSON), RES.getResByUrl(this.name + ".png", function(e) {
            h.name == t && e && (h.texture = e, h.createBody());
        }, this, RES.ResourceItem.TYPE_IMAGE))));
    }, n.prototype.createBody = function() {
        if (!this.isClear && this.jsonData && this.texture) {
            this.skilltype && (this.visible = !0), this._mcFactory.mcDataSet = this.jsonData, 
            this._mcFactory.texture = this.texture;
            var t = this.name.split("/").pop(), i = this._mcFactory.generateMovieClipData(t);
            if (i.spriteSheet = this._mcFactory.$spriteSheet, this.movieClipData = i, this.name in n.originalRate || (n.originalRate[this.name] = this.movieClipData.frameRate), 
            this.frameRate = n.originalRate[this.name] * this.rate >> 0, this._updateFrameTime > 0 && (this._hasUpdateFrameTimer = !0, 
            U.ins().doTimer(20, this._updateFrameTime, this.updateFrame, this)), this.stopFrame > 0 ? this.gotoAndStop(this.stopFrame) : this.gotoAndPlay(1, this.playCount), 
            this.playCount > 0) {
                var r = e.getTimer() - this.time;
                (r = this.playTime * this.playCount - r) > 0 ? (this._hasPlayCompTimer = !0, U.ins().doTimer(r, 1, this.playComp, this)) : this.playComp();
            }
            this.dispatchEventWith(e.Event.CHANGE);
        }
    }, n.prototype.playComp = function() {
        this._hasPlayCompTimer = !1, this._compFun && this._compFun(), this._playcompFun && this._playcompFun.apply(this._playcomThis, this._playcomArgs), 
        U.ins().remove(this.updateFrame, this), this.remove && (pe.removeFromParent(this), 
        U.ins().removeAll(this), e.Tween.removeTweens(this), SkillEffPlayer.skilPoolPush(this));
    }, n.prototype.setPlayComp = function(e, t, i) {
        this._playcompFun = e, this._playcomThis = i, this._playcomArgs = t;
    }, n.prototype.setFrameFun = function(e, t, i, n) {
        void 0 === n && (n = 0), this._updateFrameFun = e, this._updateFrameThis = i, this._updateFrameArgs = t, 
        n > 0 && (this._updateFrameTime = n, this.jsonData && this.texture && (this._hasUpdateFrameTimer = !0, 
        U.ins().doTimer(20, this._updateFrameTime, this.updateFrame, this)));
    }, Object.defineProperty(n.prototype, "playTime", {
        get: function() {
            return this.movieClipData ? 1 / this.frameRate * this.totalFrames * 1e3 : 0;
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.updateFrame = function() {
        this._updateFrameFun && this._updateFrameFun.apply(this._updateFrameThis, this._updateFrameArgs);
    }, n.prototype.dispose = function() {
        null != this.name && (null != n.mcDic[this.name] && --n.mcDic[this.name] <= 0 && (n.timeCatchDic[this.name] = e.getTimer()), 
        this.name = null);
    }, n.prototype.reset = function() {
        this.isClear = !0, this.blendMode = e.BlendMode.NORMAL, this.x = 0, this.y = 0, 
        this.rotation = 0, this.scaleX = 1, this.scaleY = 1, this.alpha = 1, this.anchorOffsetX = 0, 
        this.anchorOffsetY = 0, this.visible = !1, this.stop(), this.playCount = 0, this._compFun = null, 
        this._playcompFun = null, this._playcomArgs = null, this._playcomThis = null, this._updateFrameFun = null, 
        this._updateFrameArgs = null, this._updateFrameThis = null, this.remove = !1, this.time = 0, 
        this.rate = 1, this.stopFrame = 0, this._updateFrameTime = 0, this._hasPlayCompTimer = !1, 
        this._hasUpdateFrameTimer = !1, this.name = "", this.jsonData = null, this.texture = null, 
        this.movieClipData = null;
    }, n.originalRate = {}, n.mcDic = {}, n.timeCatchDic = {}, n;
}(e.MovieClip);

t(b.prototype, "MovieClip"), window.MovieClip = b;

var O;

!function(e) {
    e[e.Type1 = 1] = "Type1", e[e.Type2 = 2] = "Type2", e[e.Type3 = 3] = "Type3", e[e.Type4 = 4] = "Type4", 
    e[e.Type5 = 5] = "Type5", e[e.Type6 = 6] = "Type6", e[e.Type7 = 7] = "Type7", e[e.Type8 = 8] = "Type8", 
    e[e.Type9 = 9] = "Type9", e[e.Type10 = 10] = "Type10", e[e.Type11 = 11] = "Type11", 
    e[e.Type12 = 12] = "Type12", e[e.Type13 = 13] = "Type13", e[e.Type14 = 14] = "Type14", 
    e[e.Type15 = 15] = "Type15", e[e.Type16 = 16] = "Type16", e[e.Type17 = 17] = "Type17", 
    e[e.Type18 = 18] = "Type18", e[e.Type19 = 19] = "Type19", e[e.Type20 = 20] = "Type20", 
    e[e.Type21 = 21] = "Type21", e[e.Type22 = 22] = "Type22", e[e.Type23 = 23] = "Type23", 
    e[e.Type24 = 24] = "Type24", e[e.Type25 = 25] = "Type25", e[e.Type26 = 26] = "Type26", 
    e[e.Type27 = 27] = "Type27", e[e.Type28 = 28] = "Type28", e[e.Type29 = 29] = "Type29", 
    e[e.Type30 = 30] = "Type30", e[e.Type31 = 31] = "Type31", e[e.Type32 = 32] = "Type32", 
    e[e.Type33 = 33] = "Type33", e[e.Type34 = 34] = "Type34", e[e.Type35 = 35] = "Type35", 
    e[e.Type36 = 36] = "Type36", e[e.Type37 = 37] = "Type37", e[e.Type38 = 38] = "Type38", 
    e[e.Type39 = 39] = "Type39", e[e.Type40 = 40] = "Type40", e[e.Type41 = 41] = "Type41", 
    e[e.Type42 = 42] = "Type42", e[e.Type43 = 43] = "Type43", e[e.Type44 = 44] = "Type44", 
    e[e.Type45 = 45] = "Type45", e[e.Type46 = 46] = "Type46", e[e.Type47 = 47] = "Type47", 
    e[e.Type48 = 48] = "Type48", e[e.Type49 = 49] = "Type49", e[e.Type50 = 50] = "Type50", 
    e[e.Type51 = 51] = "Type51", e[e.Type52 = 52] = "Type52", e[e.Type53 = 53] = "Type53", 
    e[e.Type54 = 54] = "Type54";
}(O || (O = {})), window.UiEffectType = O;

var k = function() {
    function e() {
        this.delay = 0, this.forever = !1, this.repeatCount = 0, this.exeTime = 0;
    }
    return e.prototype.clear = function() {
        this.delay = 0, this.repeatCount = 0, this.exeTime = 0, this.method = null, this.methodObj = null, 
        this.onFinish = null, this.finishObj = null, this.forever = !1;
    }, e;
}();

t(k.prototype, "TimerHandler"), window.TimerHandler = k;

var L = function() {
    function e() {}
    return e.sortAsc = function(e, t) {
        return t > e ? -1 : e > t ? 1 : 0;
    }, e.sortDesc = function(e, t) {
        return e > t ? -1 : t > e ? 1 : 0;
    }, e.binSearch = function(t, i, n) {
        if (void 0 === n && (n = null), !t || 0 == t.length) return 0;
        n || (n = e.sortAsc);
        for (var r = 0, o = t.length - 1; o >= r; ) {
            var s = o + r >> 1;
            n(t[s], i) <= 0 ? r = s + 1 : o = s - 1;
        }
        return r;
    }, e.test = function() {
        for (var t = [], i = 0; 10 > i; i++) {
            var n = Math.floor(1e5 * Math.random()), r = e.binSearch(t, n);
            t.splice(r, 0, n);
        }
        10 != t.length && console.log("test fail!count is " + t.length + ", except:10");
        for (var o = 0, s = t; o < s.length; o++) {
            var a = s[o];
            console.log(a);
        }
        for (i = 0; i < t.length - 1; i++) if (t[i] > t[i + 1]) {
            console.log("test fail!index:" + i);
            break;
        }
    }, e;
}();

t(L.prototype, "Algorithm"), window.Algorithm = L;

var P = function() {
    function t() {}
    return t.conditionTextFlow = function(e, t, i, n) {
        void 0 === n && (n = "|/|");
        var r = "|C:" + ColorUtil.C_GREEN + "&";
        i > t && (r = "|C:" + ColorUtil.C_RED + "&");
        var o = n.split("|");
        return this.generateTextFlow(e + r + o[0] + t + o[1] + i + o[2] + "|");
    }, t.generateTextFlow = function(t) {
        for (var i = t.split("|"), n = "", r = 0, o = i.length; o > r; r++) n += this.getSingleTextFlow1(i[r]);
        return new e.HtmlTextParser().parser(n);
    }, t.generateTextFlow1 = function(e) {
        for (var t = e.split("|"), i = [], n = 0, r = t.length; r > n; n++) i.push(this.getSingleTextFlow(t[n]));
        return i;
    }, t.getSingleTextFlow1 = function(e) {
        for (var t, i, n = "<font", r = e.split("&"), o = 0, s = r.length; s > o; o++) (t = r[o].split(":"))[0] == this.PROP_TEXT ? i = t[1] : t[0] == this.STYLE_SIZE ? n += ' size="' + parseInt(t[1]) + '"' : t[0] == this.STYLE_COLOR ? n += ' color="' + parseInt(t[1]) + '"' : i = t[0];
        return n += ">" + i + "</font>";
    }, t.getSingleTextFlow = function(e) {
        for (var t, i = e.split("&"), n = {
            style: {}
        }, r = 0, o = i.length; o > r; r++) (t = i[r].split(":"))[0] == this.PROP_TEXT ? (t.shift(), 
        n.text = t.join(":")) : t[0] == this.STYLE_SIZE ? n.style.size = parseInt(t[1]) : t[0] == this.STYLE_COLOR ? n.style.textColor = parseInt(t[1]) : n.text = t[0];
        return n;
    }, t.creatTextFlow = function(e, t) {
        var i = {
            style: {}
        };
        return i.text = t, i.style.size = e.style.size, i.style.textColor = e.style.textColor, 
        i;
    }, t.getCStr = function(e) {
        return LangManager.commonStr2[e] ? LangManager.commonStr2[e] : "";
    }, t.STYLE_COLOR = "C", t.STYLE_SIZE = "S", t.PROP_TEXT = "T", t;
}();

t(P.prototype, "TextFlowMaker"), window.TextFlowMaker = P;

var N = function() {
    function e() {}
    return Object.defineProperty(e, "instance", {
        get: function() {
            return null == e._instance && (e._instance = new e()), e._instance;
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.addEventListener = function(e, t, i) {
        null == this._listenersDic && (this._listenersDic = {}, this._thisDic = {});
        var n = this._listenersDic[e], r = this._thisDic[e];
        return null == n ? (this._listenersDic[e] = [ t ], this._thisDic[e] = [ i ], !0) : -1 == this.findLisIndex(n, r, t, i) && (n.push(t), 
        r.push(i), !0);
    }, e.prototype.findLisIndex = function(e, t, i, n) {
        if (null != e && null != t) for (var r = 0; r < e.length; r++) if (e[r] == i && t[r] == n) return r;
        return -1;
    }, e.prototype.dispatchEvent = function(e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        if (null != this._listenersDic) {
            var n = this._listenersDic[e];
            if (null != n) {
                var r = n.length;
                if (0 != r) for (var o, s, a = this._thisDic[e], h = 0; r > h; h++) o = n[h], s = a[h], 
                null != o && o.apply(s, t);
            }
        }
    }, e.prototype.removeEventListener = function(e, t, i) {
        if (null != this._listenersDic) {
            var n = this._listenersDic[e], r = this._thisDic[e];
            if (null != n) {
                n = n.concat(), r = r.concat();
                var o = this.findLisIndex(n, r, t, i);
                o > -1 && (n.splice(o, 1), r.splice(o, 1), this._listenersDic[e] = n, this._thisDic[e] = r);
            }
        }
    }, e.prototype.removeAllEventListeners = function(e) {
        null != e && null != this._listenersDic && (delete this._listenersDic[e], delete this._thisDic[e]);
    }, e.prototype.reset = function() {
        this._listenersDic = {}, this._thisDic = {};
    }, e.prototype.hasEventListener = function(e) {
        var t = this._listenersDic ? this._listenersDic[e] : null;
        return !!t && 0 != t.length;
    }, e;
}();

t(N.prototype, "GEventDispatcher"), window.GEventDispatcher = N;

var x = function() {
    function e() {}
    return e.CLOSE_WIN = "CLOSE_WIN", e.OPEN_WIN = "OPEN_WIN", e.SERVERECHOOSE_LOGIN_URL_SUCCESS = "SERVERECHOOSE_LOGIN_URL_SUCCESS", 
    e.SERVERECHOOSE_LASTSERV_CHANGE = "SERVERECHOOSE_LASTSERVE_CHANGE", e.SERVERECHOOSE_ALLSERV_CHANGE = "SERVERECHOOSE_ALLSERV_CHANGE", 
    e.SERVERECHOOSE_NOTICE_CONTENT = "SERVERECHOOSE_NOTICE_CONTENT", e.SERVERECHOOSE_SELECT_UPDATE = "SERVERECHOOSE_SELECT_UPDATE", 
    e.SERVERECHOOSE_STORY_CONTENT = "SERVERECHOOSE_STORY_CONTENT", e;
}();

t(x.prototype, "GEvent"), window.GEvent = x;

var A = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._groupIndex = 0, t._configs = new Array(), t._groups = {}, t._urlResorce = {}, 
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, t.onResourceLoadComplete, t), 
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, t.onResourceLoadProgress, t), 
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, t.onResourceLoadError, t), 
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, t.onResourceItemLoadError, t), 
        t;
    }
    return i(t, e), t.prototype.onResourceItemLoadError = function(e) {
        console.log("请检查代码或exml或配置，资源不存在：" + e.resItem.url);
    }, t.ins = function() {
        return e.ins.call(this);
    }, t.prototype.addConfig = function(e, t) {
        this._configs.push([ e, t ]);
    }, t.prototype.loadConfig = function(e, t) {
        this._onConfigComplete = e, this._onConfigCompleteTarget = t, this.loadNextConfig();
    }, t.prototype.loadNextConfig = function() {
        if (0 == this._configs.length) return this._onConfigComplete.call(this._onConfigCompleteTarget), 
        this._onConfigComplete = null, void (this._onConfigCompleteTarget = null);
        var e = this._configs.shift();
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigCompleteHandle, this), 
        RES.loadConfig(e[0], e[1]);
    }, t.prototype.onConfigCompleteHandle = function(e) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigCompleteHandle, this), 
        this.loadNextConfig();
    }, t.prototype.loadGroup = function(e, t, i, n) {
        this._groups[e] = [ t, i, n ], RES.loadGroup(e);
    }, t.prototype.loadGroups = function(e, t, i, n, r) {
        RES.createGroup(e, t, !0), this.loadGroup(e, i, n, r);
    }, t.prototype.pilfererLoadGroup = function(e, t) {
        void 0 === t && (t = null);
        var i = "pilferer_" + e;
        t || (t = [ e ]), RES.createGroup(i, t, !0), RES.loadGroup(i, -1);
    }, t.prototype.onResourceLoadComplete = function(e) {
        var t = e.groupName;
        if (this._groups[t]) {
            var i = this._groups[t][0], n = this._groups[t][2];
            null != i && i.call(n), this._groups[t] = null, delete this._groups[t];
        }
    }, t.prototype.onResourceLoadProgress = function(e) {
        var t = e.groupName;
        if (this._groups[t]) {
            var i = this._groups[t][1], n = this._groups[t][2];
            null != i && i.call(n, e.itemsLoaded, e.itemsTotal);
        }
    }, t.prototype.onResourceLoadError = function(e) {
        console.log(e.groupName + "资源组有资源加载失败"), this.onResourceLoadComplete(e);
    }, t.prototype.loadResource = function(e, t, i, n, r) {
        void 0 === e && (e = []), void 0 === t && (t = []), void 0 === i && (i = null), 
        void 0 === n && (n = null), void 0 === r && (r = null);
        var o = e.concat(t), s = "loadGroup" + this._groupIndex++;
        RES.createGroup(s, o, !0), this._groups[s] = [ i, n, r ], RES.loadGroup(s);
    }, t.prototype.loadUrlResource = function(e, t, i, n) {
        var r = this;
        null == this._urlResorce[e] ? (this._urlResorce[e] = {
            data: null,
            compFun: i,
            thisObj: n
        }, RES.getResByUrl(e, function(t) {
            r._urlResorce[e].data = t, null != i && i.apply(r._urlResorce[e].thisObj);
        }, this, t)) : null != i && i.apply(n);
    }, t.prototype.getUrlResource = function(e) {
        return null == this._urlResorce[e] ? (console.log("资源未加载"), null) : this._urlResorce[e].data;
    }, t;
}(o);

t(A.prototype, "ResourceUtils"), window.ResourceUtils = A;

var D = function(t) {
    function n() {
        var e = t.call(this) || this;
        return e.iosFilters = [ "NewFirstChargeWin", "RebateHallWin", "QmTipsWin", "LuckGiftNoticeWin", "LuckGiftNoticeWin" ], 
        e.filters = [ "TipsView", "UIView1_1", "GameSceneView", "ChatMainUI", "PlayFunView" ], 
        e.crossFilters = [ "XianJieWin", "RoleWin", "ForgeWin", "ZhenBaoSystemWin", "AdvanceJianTongWin", "BagWin", "LingChongMainWin", "WorldLevelWin", "VipWin", "ChargeFirstWin", "NewFirstChargeWin", "MailWin", "WelfareHallWin", "SmeltEquipTotalWin" ], 
        e._regesterInfo = {}, e._views = {}, e._hCode2Key = {}, e._opens = [], e;
    }
    return i(n, t), n.ins = function() {
        return t.ins.call(this);
    }, n.prototype.clear = function() {
        this.closeAll(), this._views = {};
    }, n.prototype.reg = function(t, i) {
        if (null != t) {
            var n = e.getQualifiedClassName(t);
            this._regesterInfo[n] || (this._regesterInfo[n] = [ t, i ]);
        }
    }, n.prototype.destroy = function(e) {
        var t = this._hCode2Key[e];
        delete this._views[t], delete this._hCode2Key[e];
    }, n.prototype.getKey = function(t) {
        var i = "";
        if (e.getQualifiedClassName(E), "string" == typeof t) i = t; else if ("function" == typeof t) i = e.getQualifiedClassName(t); else if (t instanceof E) for (var n = Object.keys(this._views), r = 0, o = n.length; o > r; r++) {
            var s = n[r];
            if (this._views[s] == t) {
                i = s;
                break;
            }
        } else console.log("打开界面只支持类名和类名的字符串形式,关闭界面只支持类名和类名的字符串以及类的实例形式,错误编号:" + t);
        return i;
    }, n.prototype.viewOpenCheck = function(e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        var n = !0, r = this._regesterInfo[e];
        if (null != r) {
            var o = r[0].openCheck;
            null != o && (n = o.apply(void 0, t));
        }
        return n;
    }, n.prototype.open = function(e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        var n = this.getKey(e);
        {
            if (!ae.ins().isInCross() || -1 == (r = this.crossFilters.indexOf(n))) {
                if (se.isCloseWxgameIos()) {
                    var r = this.iosFilters.indexOf(n);
                    if (-1 != r) return;
                }
                if (!this.viewOpenCheck.apply(this, [ n ].concat(t))) return null;
                var o = this.openEasy(n, t);
                return o && (this.checkOpenView(o), N.instance.dispatchEvent(x.OPEN_WIN, n)), o;
            }
            he.ins().showTips("请回到本服操作");
        }
    }, n.prototype.openEasy = function(e, t) {
        void 0 === t && (t = null);
        var i = this.getKey(e), n = this._views[i], r = this._regesterInfo[i];
        if (n || (n = new r[0](), this._views[i] = n, this._hCode2Key[n.hashCode] = i), 
        null == n) return console.log("UI_" + i + "不存在"), null;
        for (var o = 0, s = n.exclusionWins; o < s.length; o++) {
            var a = s[o];
            this.closeEasy(a);
        }
        return n.isShow() || n.isInit() ? (n.delayOpen.apply(n, t), n.addToParent(r[1])) : n.loadResource(function() {
            n.addToParent(r[1]), n.setVisible(!1);
        }.bind(this), function() {
            n.initUI(), n.openCloseListen(), n.initData(), n.delayOpen.apply(n, t), n.setVisible(!0), 
            ie.lastSendTime = U.ins().getFrameId();
        }.bind(this)), -1 == this._opens.indexOf(i) && this._opens.push(i), this.showTopWin(), 
        n;
    }, n.prototype.checkOpenView = function(e) {
        e.isTopLevel && e.parent != V.UI_Popup && (this.closeEasy(UIView1_1), this.hide(GameSceneView), 
        GameSceneView.isOpen = !1, this.openEasy(UIMainBg), this.hide(ChatMainUI), this.closeEasy(PlayFunView), 
        this.closeEasy(ChatDanmuWin), this.closeEasy(ChatSceneWin)), null != (e = this.getView("CityWin")) && e.visible && this.openEasy(UIView1_1);
    }, n.prototype.close = function(e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        var n = this.getKey(e);
        this.closeEasy(n, t) && (this.checkCloseView(), N.instance.dispatchEvent(x.CLOSE_WIN, n));
    }, n.prototype.closeEasy = function(e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        if (!this.isShow(e)) return null;
        var n = this.getKey(e), r = this.getView(n);
        if (r) {
            var o = this._opens.indexOf(n);
            o >= 0 && this._opens.splice(o, 1), r.close.apply(r, t), r.$onClose.apply(r), r.removeFromParent(), 
            this.showTopWin();
        }
        return r;
    }, n.prototype.hide = function(e) {
        if (!this.isShow(e)) return null;
        var t = this.getKey(e), i = this.getView(t);
        return i && i.removeFromParent(), i;
    }, n.prototype.showTopWin = function() {
        for (var e = !0, t = this._opens.length - 1; t >= 0; t--) {
            var i = this._opens[t], n = this.getView(i);
            n.isTopLevel && (e ? (e = !1, n.visible = !0) : n.visible = !1);
        }
    }, n.prototype.checkCloseView = function() {
        if (f.isEnterMap) {
            for (var e = !1, t = 0, i = this._opens; t < i.length; t++) {
                var n = i[t], r = this.getView(n);
                if (r && r.isTopLevel) {
                    e = !0;
                    break;
                }
            }
            if (e) {
                var o = this.getView("CityWin");
                null != o && o.visible && this.openEasy(UIView1_1);
            } else GameMap.fubenID == ArenaConst.ARENA_MAP_FBID || Escort.ins().isEscortMap || this.openEasy(UIView1_1), 
            this.openEasy(GameSceneView), this.closeEasy(UIMainBg), this.isShow(ChatSceneWin) || this.openEasy(ChatMainUI), 
            UserBoss.ins().checkShow();
        }
    }, n.prototype.getView = function(e) {
        var t = this.getKey(e);
        return this._views[t];
    }, n.prototype.closeAll = function() {
        for (;this._opens.length; ) this.closeEasy(this._opens[0], []);
        this.checkCloseView();
    }, n.prototype.closeTopLevel = function(e) {
        void 0 === e && (e = null);
        for (var t = this._opens.length - 1; t >= 0; t--) {
            var i = this._opens[t];
            if (!(null != e && e.indexOf(i) > -1)) {
                var n = this.getView(i);
                isNaN(parseInt(i)) || parseInt(i), Assert(n, "closeTopLevel view null. keys:" + i) || n.isTopLevel && this.closeEasy(i, []);
            }
        }
        this.checkCloseView();
    }, n.prototype.closePartPanel = function(e) {
        void 0 === e && (e = !0);
        for (var t = [], i = 0; i < this._opens.length; i++) (n = this._opens[i]) != this.getKey(UIView1_1) && n != this.getKey(UIView2) && n != this.getKey(UIView1) && n != this.getKey(ChatMainUI) && n != this.getKey(WorldBossSceneWin) && n != this.getKey(ChatSceneWin) && n != this.getKey(WulinbazhuNoticeWin) && t.push(this._opens[i]);
        for (i = t.length - 1; i >= 0; i--) {
            var n = t[i], r = this.getView(n);
            (r.parent == V.UI_Popup || r.parent == V.UI_Main) && this.closeEasy(n, []);
        }
        e && this.checkCloseView();
    }, n.prototype.closePopPanel = function() {
        for (var e = [], t = 0; t < this._opens.length; t++) (i = this._opens[t]) != this.getKey(UIView1_1) && i != this.getKey(UIView2) && i != this.getKey(UIView1) && i != this.getKey(ChatMainUI) && i != this.getKey(WorldBossSceneWin) && i != this.getKey(WulinbazhuNoticeWin) && e.push(this._opens[t]);
        for (t = e.length - 1; t >= 0; t--) {
            var i = e[t];
            this.getView(i).parent == V.UI_Popup && this.closeEasy(i, []);
        }
    }, n.prototype.openNum = function() {
        return this._opens.length;
    }, n.prototype.isShow = function(e) {
        return this._opens.indexOf(this.getKey(e)) >= 0;
    }, n.prototype.isAddChild = function(e) {
        var t = this.getKey(e), i = this.getView(t);
        return !(!i || !i.parent);
    }, n.prototype.hasTopView = function() {
        for (var e = 0, t = this._opens; e < t.length; e++) {
            var i = t[e], n = this.getView(i);
            if (n && n.isTopLevel) return !0;
        }
        return !1;
    }, n.prototype.changeWinVisible = function(e, t) {
        var i = this.getView(e);
        i && (i.visible = t);
    }, n;
}(o);

t(D.prototype, "ViewManager"), window.ViewManager = D;

var U = function(t) {
    function n() {
        var i = t.call(this) || this;
        return i.currHandler = null, i.isLastDeactiveAction = !1, i.checkNum = 0, i.isErr = !1, 
        i._handlers = [], i.nexthandles = null, i._currTime = e.getTimer(), i._currFrame = 0, 
        p.ins().getStage().addEventListener(e.Event.ENTER_FRAME, i.onEnterFrame, i), i;
    }
    return i(n, t), n.prototype.isActive = function() {
        return e.getTimer() - this._currTime > 1e3 ? (this.isLastDeactiveAction = !0, this.checkNum = 0, 
        !1) : !this.isLastDeactiveAction;
    }, n.ins = function() {
        return t.ins.call(this);
    }, n.prototype.getFrameId = function() {
        return this._currFrame;
    }, n.binFunc = function(e, t) {
        return e.exeTime > t.exeTime ? -1 : e.exeTime < t.exeTime ? 1 : 0;
    }, n.DeleteHandle = function(e) {
        e.clear(), I.push(e);
    }, Object.defineProperty(n.prototype, "currTime", {
        get: function() {
            return this._currTime;
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.onEnterFrame = function() {
        if (!this.isStop) {
            this._currFrame++, this._currTime = e.getTimer(), this._currTime < 0 && (this.isErr || (alert("时间有调整，请刷新游戏，重新进入"), 
            window.location.reload(!0)), this.isErr = !0);
            var t = this.nexthandles;
            if (this.nexthandles = null, t && t.length > 0) {
                for (var i = 0, r = t; i < r.length; i++) {
                    var o = r[i];
                    o.method.call(o.methodObj), n.DeleteHandle(o);
                }
                t = null;
            }
            if (this._handlers.length <= 0) return !1;
            for (var s = this._handlers[this._handlers.length - 1]; s.exeTime <= this._currTime; ) {
                this.currHandler = s = this._handlers.pop(), s.method.call(s.methodObj), s.exeTime = e.getTimer() + s.delay;
                var a = s.forever;
                if (a || (s.repeatCount > 1 ? (s.repeatCount--, a = !0) : s.onFinish && s.onFinish.apply(s.finishObj)), 
                a) {
                    var h = L.binSearch(this._handlers, s, n.binFunc);
                    this._handlers.splice(h, 0, s);
                } else n.DeleteHandle(s);
                if (this._handlers.length <= 0) break;
                s = this._handlers[this._handlers.length - 1];
            }
            return this.currHandler = null, !1;
        }
    }, n.prototype.create = function(e, t, i, r, o, s, a) {
        if (!(0 > t || 0 > i || null == r)) {
            var h = I.pop("TimerHandler");
            h.forever = 0 == i, h.repeatCount = i, h.delay = t, h.method = r, h.methodObj = o, 
            h.onFinish = s, h.finishObj = a, h.exeTime = e + this._currTime;
            var l = L.binSearch(this._handlers, h, n.binFunc);
            this._handlers.splice(l, 0, h);
        }
    }, n.prototype.doTimer = function(e, t, i, n, r, o) {
        void 0 === r && (r = null), void 0 === o && (o = null), this.create(e, e, t, i, n, r, o);
    }, n.prototype.doTimerDelay = function(e, t, i, n, r, o, s) {
        void 0 === o && (o = null), void 0 === s && (s = null), this.create(e, t, i, n, r, o, s);
    }, n.prototype.doNext = function(e, t) {
        var i = I.pop("TimerHandler");
        i.method = e, i.methodObj = t, this.nexthandles || (this.nexthandles = []), this.nexthandles.push(i);
    }, n.prototype.remove = function(e, t) {
        var i = this.currHandler;
        i && i.method == e && i.methodObj == t && (i.forever = !1, i.repeatCount = 0);
        for (var n = this._handlers.length - 1; n >= 0; n--) {
            var r = this._handlers[n];
            r.method == e && r.methodObj == t && this._handlers.splice(n, 1);
        }
    }, n.prototype.removeAll = function(e) {
        var t = this.currHandler;
        t && t.methodObj == e && (t.forever = !1, t.repeatCount = 0);
        for (var i = this._handlers.length - 1; i >= 0; i--) this._handlers[i].methodObj == e && this._handlers.splice(i, 1);
    }, n.prototype.isExists = function(e, t) {
        for (var i = 0, n = this._handlers; i < n.length; i++) {
            var r = n[i];
            if (r.method == e && r.methodObj == t) return !0;
        }
        return !1;
    }, n;
}(o);

t(U.prototype, "TimerManager"), window.TimerManager = U;

var M = function() {
    function e() {}
    return e.prototype.dispose = function() {
        this.type = null, this.param = null;
    }, e;
}();

t(M.prototype, "MessageVo"), window.MessageVo = M;

var F = function(t) {
    function n(i) {
        var n = t.call(this) || this;
        return n.flag = 0, n.type = i, n.dict = {}, n.eVec = [], 0 == n.type && e.startTick(n.run, n), 
        n;
    }
    return i(n, t), n.ins = function() {
        return t.ins.call(this, 0);
    }, n.prototype.clear = function() {
        this.dict = {}, this.eVec.splice(0);
    }, n.prototype.addListener = function(e, t, i) {
        var n = this.dict[e];
        n ? 0 != this.flag && (this.dict[e] = n = n.concat()) : this.dict[e] = n = [];
        for (var r = 0, o = n; r < o.length; r++) {
            var s = o[r];
            if (s[0] == t && s[1] == i) return;
        }
        n.push([ t, i ]);
    }, n.prototype.removeListener = function(e, t, i) {
        var n = this.dict[e];
        if (n) {
            0 != this.flag && (this.dict[e] = n = n.concat());
            for (var r = n.length, o = 0; r > o; o++) if (n[o][0] == t && n[o][1] == i) {
                n.splice(o, 1);
                break;
            }
            0 == n.length && (this.dict[e] = null, delete this.dict[e]);
        }
    }, n.prototype.removeAll = function(e) {
        for (var t = 0, i = Object.keys(this.dict); t < i.length; t++) {
            var n = i[t], r = this.dict[n];
            0 != this.flag && (this.dict[n] = r = r.concat());
            for (var o = 0; o < r.length; o++) r[o][1] == e && (r.splice(o, 1), o--);
            0 == r.length && (this.dict[n] = null, delete this.dict[n]);
        }
    }, n.prototype.dispatch = function(e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        var n = I.pop("MessageVo");
        n.type = e, n.param = t, 0 == this.type ? this.eVec.push(n) : 1 == this.type ? this.dealMsg(n) : console.log("MessageCenter未实现的类型");
    }, n.prototype.run = function(t) {
        for (var i = e.getTimer(); this.eVec.length > 0 && (this.dealMsg(this.eVec.shift()), 
        !(e.getTimer() - i > 5)); ) ;
        return !1;
    }, n.prototype.dealMsg = function(e) {
        var t = this.dict[e.type];
        if (t && 0 != t.length) {
            this.flag++;
            for (var i = 0, n = t; i < n.length; i++) {
                var r = n[i];
                r[0].apply(r[1], e.param);
            }
            this.flag--, e.dispose(), I.push(e);
        }
    }, n.setFunction = function(t, i, r, o, s) {
        if (0 == r.indexOf(o) && "function" == typeof i[r]) {
            var a = s + e.getQualifiedClassName(i) + n.splite + r, h = i[r], l = function() {
                for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                var r, o = e.length;
                return 0 == o ? r = t ? h.call(this) : h() : 1 == o ? r = t ? h.call(this, e[0]) : h(e[0]) : 2 == o ? r = t ? h.call(this, e[0], e[1]) : h(e[0], e[1]) : 3 == o ? r = t ? h.call(this, e[0], e[1], e[2]) : h(e[0], e[1], e[2]) : 4 == o && (r = t ? h.call(this, e[0], e[1], e[2], e[3]) : h(e[0], e[1], e[2], e[3])), 
                ("boolean" != typeof r || r) && n.ins().dispatch(a, r), r;
            };
            return l.funcallname = a, i[r] = l, !0;
        }
        return !1;
    }, n.compile = function(t, i) {
        void 0 === i && (i = "post");
        for (var r = t.prototype, o = 0, s = Object.keys(r); o < s.length; o++) {
            var a = s[o];
            n.setFunction(!0, r, a, i, e.getQualifiedClassName(t));
        }
    }, n.addListener = function(t, i, r, o) {
        return void 0 === o && (o = void 0), t.funcallname ? (n.ins().addListener(t.funcallname, i, r), 
        o && t.call(o), !0) : (console.log("MessageCenter.addListener error:" + e.getQualifiedClassName(r)), 
        !1);
    }, n.splite = ".", n;
}(o);

t(F.prototype, "MessageCenter"), window.MessageCenter = F;

var H = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.percentWidth = 100, t.percentHeight = 100, t;
    }
    return i(t, e), t;
}(a);

t(H.prototype, "UICreatRoleContainer"), window.UICreatRoleContainer = H;

var B = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.percentWidth = NaN, t.percentHeight = NaN, t.horizontalCenter = 0, t;
    }
    return i(t, e), t;
}(a);

t(B.prototype, "UIMainContainer"), window.UIMainContainer = B;

var G = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.touchEnabled = !1, t;
    }
    return i(t, e), t;
}(e.DisplayObjectContainer);

t(G.prototype, "BaseSpriteLayer"), window.BaseSpriteLayer = G;

var V = function() {
    function e() {}
    return e.UI_CreatRole = new H(), e.Game_Bg = new G(), e.Game_Main = new G(), e.UI_Bg = new a(), 
    e.UI_Main_Bg = new a(), e.UI_Blood = new a(), e.UI_Main = new B(), e.Effect_Main = new a(), 
    e.UI_PopupLow = new a(), e.UI_Popup = new a(), e.UI_Message = new a(), e.UI_Tips = new a(), 
    e.UI_Top = new a(), e;
}();

t(V.prototype, "LayerManager"), window.LayerManager = V;

var W = function(t) {
    function n() {
        var i = t.call(this) || this;
        return F.compile(e.getDefinitionByName(e.getQualifiedClassName(i))), i;
    }
    return i(n, t), n.prototype.regNetMsg = function(e, t) {
        ie.ins().registerSTCFunc(this.sysId, e, t, this);
    }, n.prototype.getGameByteArray = function() {
        return ie.ins().getBytes();
    }, n.prototype.getBytes = function(e) {
        var t = this.getGameByteArray();
        return t.writeCmd(this.sysId, e), t;
    }, n.prototype.sendBaseProto = function(e) {
        var t = this.getGameByteArray();
        t.writeCmd(this.sysId, e), this.sendToServer(t);
    }, n.prototype.sendToServer = function(e) {
        ie.ins().sendToServer(e);
    }, n.prototype.observe = function(e, t) {
        F.addListener(e, t, this);
    }, n.prototype.removeObserve = function() {
        F.ins().removeAll(this);
    }, n.prototype.associated = function(e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
    }, n;
}(o);

t(W.prototype, "BaseSystem"), F.compile(W), window.BaseSystem = W;

var j = function() {
    function e() {}
    return e.prototype.getAsset = function(e, t, i) {
        function n(n) {
            t.call(i, n, e);
        }
        if (RES.hasRes(e)) {
            var r = RES.getRes(e);
            r ? n(r) : RES.getResAsync(e, n, this);
        } else RES.getResByUrl(e, n, this, RES.ResourceItem.TYPE_IMAGE);
    }, e;
}();

t(j.prototype, "AssetAdapter", [ "eui.IAssetAdapter" ]), window.AssetAdapter = j;

var Z = function() {
    function t() {}
    return t.prototype.getTheme = function(t, i, n, r) {
        return void (se.isWxgame ? e.callLater(function() {
            i.call(r, generateEUI2);
        }, this) : i.call(r, ResTheme.themeJson));
    }, t;
}();

t(Z.prototype, "ThemeAdapter", [ "eui.IThemeAdapter" ]), window.ThemeAdapter = Z;

var z = function(e) {
    function t() {
        return e.call(this) || this;
    }
    return i(t, e), t.prototype.onEnter = function() {
        e.prototype.onEnter.call(this), this.addLayer(V.UI_CreatRole), this.addLayer(V.UI_Tips), 
        D.ins().open(q), c.getIns().report(c.enterCreate), se.isWxgame && de.instance.hide(), 
        window.showGame && window.showGame();
    }, t.prototype.onExit = function() {
        e.prototype.onExit.call(this);
    }, t;
}(m);

t(z.prototype, "CreateRoleScene"), window.CreateRoleScene = z;

var q = function(t) {
    function n() {
        var e = t.call(this) || this;
        return e.bodyPos = [ -19, -4, -21, 64, 52, 90, 73, 8, 42, 109, -4, 60, -67, 63 ], 
        e.wordPos = [ 0, 220, 350, 226, 350, 226, 350, 226, 350, 226, 0, 220 ], e._selectJob = 0, 
        e.flower = new eui.Group(), e.countTime = 20, e.isFocus = !1, e.delayCount = 0, 
        e.progressValue = 0, e.curValue = 0, e;
    }
    return i(n, t), n.prototype.initUI = function() {
        t.prototype.initUI.call(this), this.skinName = "CreateRolSkin", this.jobImage = [ this.j0, this.j1 ], 
        this.list.itemRenderer = Y, this.role.top = p.ins().top;
        for (var i = [], n = [ "烟寒", "修罗宵者", "凉生虐言", "话别战佛", "轻声若仙", "青路墨巷", "霸气魅如", "梦幻澈鬼", "醉后柠水", "天涯弑浅", "轻声浅墨", "死神爷", "追风阳夏", "落弑", "鎏暒暮斗" ], r = [ "洛婵", "回忆柳霞", "熏淡", "你的净如", "娴鸿", "凉生靜", "秋吟", "微光瑶希", "回忆初欢", "死神瑶清", "微光珊柳", "木净", "烽烟歌涵" ], o = [], s = 0; s < n.length; s++) o.push({
            nm: n[s],
            col: 7047679
        });
        for (s = 0; s < r.length; s++) o.push({
            nm: r[s],
            col: 16755437
        });
        o = re.randomArr(o);
        for (s = 0; 6 > s; s++) i = i.concat(o);
        this.list.dataProvider = new eui.ArrayCollection(i), this.scroller.touchChildren = !1, 
        this.scroller.touchEnabled = !1, this.scroller.visible = !1, this.mc = new b(), 
        this.mc.blendMode = e.BlendMode.ADD, this.mc.playFile(d.getUIEffectPath(O.Type14), -1), 
        this.effContainer.addChild(this.mc), this.sexBtnEff = new b(), this.sexBtnEff.blendMode = e.BlendMode.ADD, 
        this.sexBtnEff.playFile(d.getUIEffectPath(O.Type53), -1), ee.ins().creatLeaf(this), 
        ee.ins().playLeaf(), U.ins().doTimer(20, 0, this.checkLoad, this), this.nameInput.restrict = "^ ", 
        this.addEvent(e.FocusEvent.FOCUS_IN, this.nameInput, this.onFocus), this.addEvent(e.FocusEvent.FOCUS_OUT, this.nameInput, this.onFocus), 
        se.pf == se.zwwanba && c.getIns().reportSDK("createRole");
    }, n.prototype.onFocus = function(t) {
        this.isFocus = t.type == e.FocusEvent.FOCUS_IN;
    }, n.prototype.onCountTime = function() {
        return this.isFocus ? (this.countTime = 20, this.timeTxt.visible = !1, void (this.delayCount = e.getTimer())) : void (e.getTimer() - this.delayCount < 3e3 || (this.timeTxt.visible = !0, 
        this.timeTxt.text = this.countTime + "秒后自动进入", --this.countTime <= 0 && this.clickEnter()));
    }, n.prototype.checkLoad = function() {
        var e = this;
        RES.getRes("createrole_role0_png") && RES.getRes("createrole_json") && RES.getRes("createrole_bg0_jpg") && this.mc.jsonData && this.mc.texture && (U.ins().doTimer(1e3, 0, this.onCountTime, this), 
        U.ins().remove(this.checkLoad, this), RES.setMaxLoadingThread(4), RES.setMaxRetryTimes(1e3), 
        se.isWxgame || A.ins().loadGroup(se.loadGroupResName, function() {
            f.initData(), X.ins().isEnter && e.sendEnter();
        }, function(t, i) {
            e.progressValue = t / (i - 1) * 100, e.progressValue = Math.min(e.progressValue >> 0, 100);
        }, this));
    }, n.prototype.open = function() {
        for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
        this.selectJob = 2 * Math.random() >> 0;
        for (var n = 0; n < this.jobImage.length; n++) this.addTouchEvent(this.jobImage[n], this.onClick);
        this.addTouchEvent(this.createBtn, this.onClick), this.addTouchEvent(this.diceBtn, this.onClick);
        var r = decodeURI(se.nickName);
        null != window.nickname && (r = window.nickname), "null" == r || "" == r ? X.ins().sendRandomName(this._selectJob % 2) : this.setName(r), 
        this.addChild(this.flower), this.flower.x = 480, this.flower.y = 800, this.flowerTween(), 
        this.listH = this.list.height - 200, this.scroller.viewport.scrollV = 0, e.Tween.get(this.scroller.viewport).to({
            scrollV: this.listH
        }, 40 * this.listH).call(this.loopT, this), this.observe(X.ins().postEnterGame, this.onLoadProgress);
    }, n.prototype.loopT = function() {
        this.scroller.viewport.scrollV = 200, e.Tween.get(this.scroller.viewport).to({
            scrollV: this.listH
        }, 40 * this.listH).call(this.loopT, this);
    }, n.prototype.close = function() {
        for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
        ee.ins().clear();
        for (var n = 0; n < this.jobImage.length; n++) this.removeTouchEvent(this.jobImage[n], this.onClick);
        U.ins().remove(this.onCountTime, this), this.removeTouchEvent(this.createBtn, this.onClick), 
        this.removeTouchEvent(this.diceBtn, this.onClick), this.closeTween(), e.Tween.removeTweens(this.scroller.viewport), 
        this.removeEvents(), this.removeObserve();
    }, n.prototype.flowerTween = function() {
        for (var e = this, t = re.limit(10, 15) >> 0, i = 0; t > i; i++) setTimeout(function() {
            e.randomFlower();
        }, 4e3 * Math.random() + 500);
        setTimeout(function() {
            e.flowerTween();
        }, 4500);
    }, n.prototype.randomFlower = function() {
        var t = new eui.Image();
        t.blendMode = e.BlendMode.ADD, t.x = -300 * Math.random(), t.rotation = 180 * Math.random(), 
        t.touchEnabled = !1, this.flower.addChild(t);
        var i = re.limit(.3, 1);
        t.scaleX = t.scaleY = i, t.x = this.width, t.y = re.limit(-600, 150) + 50;
        var n = e.Tween.get(t);
        re.limit(0, 30), n.to({
            x: -520,
            y: -450 * Math.random() - 400,
            alpha: re.limit(.5, 1)
        }, 7e3).call(function() {
            t.parent.removeChild(t), e.Tween.removeTweens(t);
        });
    }, n.prototype.closeTween = function() {
        for (var t = this.flower.numChildren, i = 0; t > i; i++) e.Tween.removeTweens(this.flower.getChildAt(i));
    }, n.prototype.sendCreateRole = function() {
        X.ins().sendCreateRole(this.nameInput.text, this._selectJob % 2, 1, 0, 0, "");
    }, n.prototype.clickEnter = function() {
        this.timeTxt.visible = !1, U.ins().remove(this.onCountTime, this), c.getIns().report(c.clickstart), 
        this.sendCreateRole();
    }, n.prototype.sendEnter = function() {
        X.ins().sendEnterGame(X.ins().saveRoleId), U.ins().removeAll(this);
    }, n.prototype.onLoadProgress = function() {
        var e = this;
        se.isWxgame && (de.instance.addTop(), de.instance.backProgress(10), ge.instance.load()), 
        f.canEnter ? this.sendEnter() : se.isWxgame ? ge.instance.comFun = function() {
            e.sendEnter();
        } : (this.enterGroup && (this.enterGroup.visible = !0), U.ins().doTimer(100, 0, function() {
            e.loadText && (e.loadText.text = "正在进入游戏（" + e.curValue + "%）"), e.progressValue > e.curValue && (e.curValue += 1);
        }, this));
    }, n.prototype.onClick = function(t) {
        switch (this.delayCount = e.getTimer(), t.currentTarget) {
          case this.createBtn:
            this.clickEnter();
            break;

          case this.diceBtn:
            X.ins().sendRandomName(this._selectJob % 2);
            break;

          default:
            var i = this.jobImage.indexOf(t.currentTarget);
            i >= 0 && (this.selectJob = i);
        }
    }, Object.defineProperty(n.prototype, "selectJob", {
        set: function(e) {
            this._selectJob = e, this.currentState = "" + e, this["sexContainer" + this.currentState].addChild(this.sexBtnEff);
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.setName = function(e) {
        this.nameInput.text = e;
    }, n;
}(E);

t(q.prototype, "CreateRoleView"), D.ins().reg(q, V.UI_CreatRole), window.CreateRoleView = q;

var Y = function(e) {
    function t() {
        return e.call(this) || this;
    }
    return i(t, e), t.prototype.dataChanged = function() {
        var e = re.randomItem(X.ins().tips), t = "|C:" + this.data.col + "&T:" + this.data.nm + "|" + e;
        this.labelInfo.textFlow = P.generateTextFlow1(t);
    }, t;
}(eui.ItemRenderer);

t(Y.prototype, "CreateRoleViewItem"), window.CreateRoleViewItem = Y;

var K = function(t) {
    function n() {
        var e = t.call(this) || this;
        return e.saveX = 0, e.saveY = 0, e.endX = 0, e.endY = 0, e;
    }
    return i(n, t), n.prototype.startPlay = function() {
        var t = e.getTimer() - ee.inter;
        t >= 500 ? this.reset() : U.ins().doTimer(t, 1, this.startPlay, this);
    }, n.prototype.play = function() {
        e.Tween.get(this).to({
            alpha: .9
        }, 500).wait(this.time - this.scaleTime - 100).to({
            scaleX: 0,
            scaleY: 0,
            alpha: 0
        }, this.scaleTime), e.Tween.get(this).to({
            x: this.endX,
            y: this.endY
        }, this.time).call(this.startPlay, this), this.doRota1();
    }, n.prototype.reset = function() {
        ee.inter = e.getTimer(), this.stop(), this.anchorOffsetX = 25, this.anchorOffsetY = 25, 
        this.scaleX = this.scaleY = .7 + .2 * Math.random(), this.alpha = 0, this.x = this.saveX, 
        this.y = this.saveY, this.time = 3e3, this.scaleTime = 1e3, this.roTime = 2e3 + 500 * Math.random(), 
        this.fAngle1 = 100, this.saveRota = -30 - 50 * Math.random(), this.rotation = this.saveRota;
        var t = this.img;
        this.img = ee.leftImg, this.source = this.img, ee.leftImg = t, this.play();
    }, n.prototype.doRota1 = function() {
        e.Tween.get(this).to({
            rotation: this.saveRota + this.fAngle1
        }, this.roTime, e.Ease.sineInOut).call(this.doRota2, this);
    }, n.prototype.doRota2 = function() {
        e.Tween.get(this).to({
            rotation: this.saveRota - this.fAngle1
        }, this.roTime, e.Ease.sineInOut).call(this.doRota1, this);
    }, n.prototype.stop = function() {
        U.ins().removeAll(this), e.Tween.removeTweens(this);
    }, n.prototype.clear = function() {
        this.stop(), null != this.parent && this.parent.removeChild(this);
    }, n;
}(eui.Image);

t(K.prototype, "LeafView"), window.LeafView = K;

var J = function() {
    return function(e) {
        this.id = e.readInt(), this.serverId = Q.LoWord(this.id), this.name = e.readString(), 
        this.roleClass = e.readInt(), this.zsLevel = e.readInt(), this.level = e.readInt(), 
        this.power = e.readDouble(), this.vipLevel = e.readInt(), this.sex = e.readInt();
    };
}();

t(J.prototype, "SelectRoleData"), window.SelectRoleData = J;

var Q = function() {
    function e() {}
    return e.getBitValue = function(e, t) {
        return 0 != (e & 1 << t);
    }, e.setBitValue = function(e, t, i) {
        return i ? e |= 1 << t : e &= ~(1 << t), e;
    }, e.MakeLong = function(e, t) {
        return 65535 & e | t << 16 & 4294901760;
    }, e.MakeWord = function(e, t) {
        return 255 & e | t << 8 & 65280;
    }, e.LoWord = function(e) {
        return 65535 & e;
    }, e.HiWord = function(e) {
        return e >> 16 & 65535;
    }, e.LoByte = function(e) {
        return 255 & e;
    }, e.HiByte = function(e) {
        return e >> 8 & 255;
    }, e;
}();

t(Q.prototype, "BitUtil"), window.BitUtil = Q;

var X = function(t) {
    function n() {
        var e = t.call(this) || this;
        return e.tips = [ "成为贵族领取了1万元宝", "领取了帝兵·火麟刀", "武境成功提升为凡仙" ], e.errorCode = [ "", "sql错误", "用户没登陆", "游戏服务没准备好", "角色上一次保存数据是否出现异常", "客户端选择角色的常规错误", "角色名称重复", "角色不存在", "错误的性别", "随机生成的名字已经分配完", "客户端上传的角色阵营参数错误", "客户端上传的角色职业参数错误", "名称无效，名称中包含非法字符或长度不合法", "如果玩家是宗主，不能删除该角色，需要玩家退帮", "已经登陆到其他服务器", "已经超过最大可建角色数量" ], 
        e.checkVer = 0, e.isReport = !0, e.saveName = "", e.saveRoleId = 0, e.sysId = ne.Login, 
        e.regNetMsg(1, e.doCheckAccount), e.regNetMsg(4, e.doRoleList), e.regNetMsg(5, e.doEnterGame), 
        e.regNetMsg(2, e.doCreateRole), e.regNetMsg(6, e.doRandom), e.regNetMsg(10, e.nologin), 
        e.regNetMsg(9, e.onServerCrossInfo), e;
    }
    return i(n, t), n.ins = function() {
        return t.ins.call(this);
    }, n.prototype.onServerCrossInfo = function(e) {
        this.checkVer = 0, ae.ins().srvid = e.readInt(), ae.ins().serverIP = e.readString(), 
        ae.ins().serverPort = e.readInt(), ae.ins().password = e.readString(), ie.ins().updateStatus(ie.STATUS_DISCONNECT), 
        ie.ins().close(), ie.ins().newSocket(), ae.ins().isInCross() ? ie.ins().login(se.openID, se.password, se.srvid, se.serverIP, se.serverPort) : ie.ins().login(se.openID, se.password, ae.ins().srvid, ae.ins().serverIP, ae.ins().serverPort);
    }, n.prototype.nologin = function(e) {
        U.ins().isStop = !0, alert("此账号已被封禁！"), window.location.reload(!0);
    }, n.prototype.connectServer = function() {
        ie.ins().login(se.openID, se.password, se.srvid, se.serverIP, se.serverPort);
    }, n.prototype.doCheckAccount = function(t) {
        var i = t.readByte();
        if (t.bytesAvailable > 0) {
            var r = t.readUnsignedInt();
            if (0 != this.checkVer && this.checkVer != r) return void (se.isWxgame && window.wx ? window.wx.showModal({
                title: "提示",
                content: "版本有更新优化，请退出重新进入",
                showCancel: !1,
                success: function() {
                    window.wx.exitMiniProgram({
                        success: function() {
                            console.log("退出成功！");
                        }
                    });
                }
            }) : (alert("请刷新游戏，重新进入"), window.location.reload(!0)));
            this.checkVer = r;
        }
        if (0 == i) {
            console.log("doCheckAccount耗时：" + (e.getTimer() - se.saveTime)), c.getIns().report(c.main), 
            se.saveTime = e.getTimer();
            var o = this.getBytes(4);
            this.sendToServer(o);
        } else 3 == i ? window.isShowLogout ? (U.ins().isStop = !0, UserWarn.ins().setAlertLabel("该账号已在其他地方登陆", {
            func: function() {
                window.SDKLogout();
            },
            thisObj: this
        })) : (U.ins().isStop = !0, T.ins().hideLoading(), UserWarn.ins().setAlertLabel("该账号已在其他地方登陆", {
            func: function() {
                Chat.ins().chatListData.removeAll(), U.ins().isStop = !1;
            },
            thisObj: this
        })) : alert("Connect failed:" + n.LONGIN_ERROR_CODE[i]);
    }, n.prototype.doRoleList = function(t) {
        var i = this;
        switch (t.readInt(), t.readByte()) {
          case 0:
            console.log("doRoleList耗时：" + (e.getTimer() - se.saveTime)), c.getIns().report(c.egret), 
            se.saveTime = e.getTimer(), _.ins().runScene(z);
            break;

          case 1:
            se.isWxgame && ge.instance.load();
            for (var n = t.readInt(), r = [], o = void 0, s = void 0, a = 0; n > a; a++) {
                var h = new J(t);
                r.push(h), (null == o || o.power < h.power) && (o = h), h.serverId.toString() == se.serverID && (s = h);
            }
            null != s ? r = [ s ] : null != o && (r = [ o ]), 1 == (n = 1) && (f.canEnter ? this.sendEnterGame(r[0].id) : se.isWxgame ? ge.instance.comFun = function() {
                i.sendEnterGame(r[0].id);
            } : (RES.setMaxRetryTimes(1e3), A.ins().loadGroup(se.loadGroupResName, function() {
                f.initData(), i.sendEnterGame(r[0].id);
            }, this.onResourceLoadProgress, this)));
        }
    }, n.prototype.onResourceLoadProgress = function(e, t) {
        se.setLoadProgress(90 + e / t * 10, "(加载必要资源)");
    }, n.prototype.sendEnterGame = function(e) {
        var t = this.getBytes(5);
        t.writeInt(e), t.writeString(se.pfid), this.sendToServer(t);
    }, n.prototype.doEnterGame = function(e) {
        var t = e.readByte();
        switch (t) {
          case 0:
            break;

          case 1:
            console.log("进入游戏成功"), this.isReport = !0, BeginnerGuide.ins().destroy(), NewHandManager.ins().clear(), 
            Chat.ins().isInitChatMainUI = !0, Chat.ins().fistOpenGuild = !0, EntityManager.ins().removeAll(), 
            Chat.ins().initData(), Encounter.ins().clearEncounterModel(), SubRoles.ins().clearSubRole(), 
            PublicChat.ins().closeSocket(), PlayHall.ins().clear(), Novicetarget.ins().isFirst = !0, 
            PlayFun.ins().isRequest = !0, _.ins().runScene(MainScene), Recharge.ins().sendNewChargeInfo(), 
            Recharge.ins().sendHeFuChargeInfo();
            break;

          default:
            alert("doEnterGame错误码:" + t);
        }
    }, n.prototype.checkName = function(e) {
        for (var t = new RegExp(/[\u4E00-\u9FA5]/), i = new RegExp(/[0-9]/), n = new RegExp(/[a-zA-Z]/), r = 0; r < e.length; r++) {
            var o = e.charAt(r);
            if (!("↘灬，★⌒、♂ヽのっ～°メ~ˋァㄨつ∞△ブ々ㄩ— ▌-いщǒ┘※╃＊リ╮シ←〓┪づ".indexOf(o) > -1 || o.match(t) || o.match(i) || o.match(n))) return he.ins().showTips("您创建的角色名中包含非法特殊字符"), 
            !1;
        }
        return !0;
    }, n.prototype.sendCreateRole = function(e, t, i, n, r, o) {
        if (this.checkName(e)) {
            this.saveName = e;
            var s = this.getBytes(2);
            s.writeString(e), s.writeByte(t), s.writeByte(i), s.writeByte(n), s.writeByte(r), 
            s.writeString(se.pfid), this.sendToServer(s);
        }
    }, n.prototype.doCreateRole = function(e) {
        if (!(this.saveRoleId > 0)) {
            this.saveRoleId = e.readInt();
            var t = e.readByte();
            0 == t ? (se.isWxgame ? c.getIns().report(c.theme) : c.getIns().report(c.createRole), 
            se.pf != se.zwwanba && (c.getIns().reportSDK("createRole"), c.getIns().reportWxGame(c.gamecreaterole)), 
            n.ins().isEnter = !0, this.postEnterGame()) : this.showErrorTips(t);
        }
    }, n.prototype.postEnterGame = function() {}, n.prototype.sendRandomName = function(e) {
        var t = this.getBytes(6);
        t.writeByte(e), this.sendToServer(t);
    }, n.prototype.doRandom = function(e) {
        if (0 == e.readByte()) {
            var t = (e.readByte(), e.readUTF());
            this.setName(t);
        }
    }, n.prototype.setName = function(e) {
        this.createRoleView.setName(e);
    }, Object.defineProperty(n.prototype, "createRoleView", {
        get: function() {
            return D.ins().getView(q);
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.showErrorTips = function(e) {
        0 != e && he.ins().showTips(this.errorCode[Math.abs(e)]);
    }, n.LONGIN_ERROR_CODE = [ "", "密码错误", "没有这个账号", "账号已登录，请刷新页面，最长需等待3分钟后重新登录", "服务器忙", "服务器维护中", "Session服务器出错，可能数据库没连接好", "不存在这个服务器", "账号已纳入防沉迷系统，是否需要进行身份证信息填写？" ], 
    n;
}(W);

t(X.prototype, "RoleMgr"), window.RoleMgr = X;

var $ = function(e) {
    function t() {
        return e.call(this) || this;
    }
    return i(t, e), t.prototype.onEnter = function() {
        X.ins(), e.prototype.onEnter.call(this), se.isWxgame ? (de.instance.addTop(), de.instance.backProgress(80), 
        ge.instance.isNeedLoginUrl ? ge.instance.loginServ(se.srvid) : X.ins().connectServer()) : X.ins().connectServer();
    }, t.prototype.onExit = function() {}, t;
}(m);

t($.prototype, "StartGameScene"), window.StartGameScene = $;

var ee = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.leafList = [], t.posArr = [ [ 195, 50, 522, 342 ], [ 59, 56, 502, 361 ], [ 134, 165, 505, 593 ], [ 24, 175, 498, 662 ], [ 20, 304, 515, 637 ] ], 
        t;
    }
    return i(t, e), t.ins = function() {
        return e.ins.call(this);
    }, t.prototype.creatLeaf = function(e) {
        for (var t = 0; 5 > t; t++) {
            var i = new K();
            i.img = "createrole_leaf" + t, e.addChild(i), this.leafList.push(i), i.saveX = this.posArr[t][0], 
            i.saveY = this.posArr[t][1], i.endX = this.posArr[t][2], i.endY = this.posArr[t][3], 
            i.alpha = 0;
        }
    }, t.prototype.playLeaf = function() {
        for (var e = 0; e < this.leafList.length; e++) this.leafList[e].startPlay();
    }, t.prototype.clear = function() {
        for (var e = 0; e < this.leafList.length; e++) this.leafList[e].clear();
    }, t.leftImg = "createrole_leaf0", t.inter = 0, t;
}(W);

t(ee.prototype, "TeafManager"), window.TeafManager = ee;

var te = function(t) {
    function n() {
        var i = t.call(this) || this;
        return i.endian = e.Endian.LITTLE_ENDIAN, i;
    }
    return i(n, t), n.prototype.readString = function() {
        var e = this.readUTF();
        return this.position++, e;
    }, n.prototype.readNumber = function() {
        return +new uint64(this).toString();
    }, n.prototype.writeNumber = function(e) {
        var t = uint64.stringToUint64(e.toString());
        this.writeInt64(t);
    }, n.prototype.writeInt64 = function(e) {
        this.writeUnsignedInt(e._lowUint), this.writeUnsignedInt(e._highUint);
    }, n.prototype.writeString = function(e) {
        this.writeUTF(e), this.writeByte(0);
    }, n.prototype.writeCmd = function(e, t) {
        this.writeByte(e), this.writeByte(t);
    }, n;
}(e.ByteArray);

t(te.prototype, "GameByteArray"), window.GameByteArray = te;

var ie = function() {
    function t() {
        this._socketStatus = 0, this._lastReceiveTime = 0, this.pid = 0, this.PACK_HANDLER = [], 
        this._serverId = 0, this._user = "", this._pwd = "", this.checkTime = 0, this.isTxt = !1, 
        this.errorTime = 0, this.isReconnecting = !1, this.isFocusSend = !1, this.newSocket();
    }
    return t.ins = function() {
        return t._ins || (t._ins = new t()), t._ins;
    }, t.prototype.newSocket = function() {
        this.recvPack = new te(), this._packets = [], this._sendpackets = [], Ce.instance.doFrameLoop(1, this, this.handlePackets), 
        this.socket_ = new e.WebSocket(), this.oldFlush = this.socket_.flush, this.socket_.type = e.WebSocket.TYPE_BINARY, 
        this.socket_.addEventListener(e.Event.CONNECT, this.onSocketConnected, this), this.socket_.addEventListener(e.Event.CLOSE, this.onSocketClose, this), 
        this.socket_.addEventListener(e.ProgressEvent.SOCKET_DATA, this.onSocketRead, this), 
        this.socket_.addEventListener(e.IOErrorEvent.IO_ERROR, this.connectError, this);
    }, t.prototype.setTxt = function(e) {
        e || this.socket_.flush;
    }, t.prototype.sendToServer = function(e) {
        this.send(e), this.recycleByte(e);
    }, t.prototype.connectError = function() {
        for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
        this.checkTime = 0, this.isReconnecting = !1, ++this.errorTime > 3 && (alert(this._host + ":" + this._port + "\n网络已断开，点击确定重新连接"), 
        this.errorTime = 0), this.updateStatus(t.STATUS_DISCONNECT), console.log(this._host + ":" + this._port + "\nconnectError网络已断开"), 
        window.connectError && window.connectError(), this.reset(), U.ins().remove(this.reLogin, this), 
        U.ins().doTimer(1e3, 1, this.reLogin, this);
    }, t.prototype.connect = function(i, n) {
        se.saveTime = e.getTimer(), this.updateStatus(t.STATUS_CONNECTING), this._host = i, 
        this._port = n, i.indexOf(".com") > -1 || i.indexOf(".net") > -1 ? this.socket_.connectByUrl("wss://" + i + ":" + n) : this.socket_.connect(i, n);
    }, t.prototype.close = function() {
        this.updateStatus(t.STATUS_DISCONNECT), console.log("close socket！ip:" + this._host + " port:" + this._port), 
        this.socket_.removeEventListener(e.Event.CONNECT, this.onSocketConnected, this), 
        this.socket_.removeEventListener(e.Event.CLOSE, this.onSocketClose, this), this.socket_.removeEventListener(e.ProgressEvent.SOCKET_DATA, this.onSocketRead, this), 
        this.socket_.removeEventListener(e.IOErrorEvent.IO_ERROR, this.connectError, this), 
        this.socket_.close(), this._packets = [], this._sendpackets = [], Ce.instance.clearTimer(this, this.handlePackets);
    }, t.prototype.send = function(e) {
        return this._socketStatus == t.STATUS_COMMUNICATION && (this.sendPack(e), !0);
    }, t.prototype.isConnectOk = function() {
        return this._socketStatus == t.STATUS_COMMUNICATION;
    }, t.prototype.onSocketConnected = function(e) {
        this.checkTime = 0, this.isReconnecting = !1, this.errorTime = 0, console.log("Socket connected！ip:" + this._host + " port:" + this._port), 
        U.ins().remove(this.reLogin, this), this.updateStatus(t.STATUS_CHECKING);
        var i = new te();
        i.writeUnsignedInt(w.getSelfSalt()), this.socket_.writeBytes(i), this.socket_.flush(), 
        this._onConnected && this._onConnected();
    }, t.prototype.onSocketRead = function(i) {
        if (this.isReconnecting = !1, this._socketStatus < t.STATUS_COMMUNICATION) this.sendKeyToServer(); else {
            var n = this.recvPack;
            this._lastReceiveTime = e.getTimer(), this.socket_.readBytes(n, n.length);
            var r = 0;
            for (n.position = 0; n.bytesAvailable > t.HEAD_SIZE; ) if (r = n.position, n.readUnsignedShort() == t.DEFAULT_TAG) {
                var o = n.readUnsignedShort();
                if (n.position += 4, o > n.bytesAvailable) break;
                if (2 * (o + t.HEAD_SIZE) > n.bytesAvailable) {
                    var s = I.pop(t.CLASSNAME);
                    if (s.clear(), n.bytesAvailable > o) {
                        var a = n.position;
                        n.position += o, n.readBytes(s, 0, n.bytesAvailable), n.position = a;
                    }
                    this._packets.push(n), (n = this.recvPack = s).position = 0;
                } else {
                    var h = I.pop(t.CLASSNAME);
                    h.clear(), n.readBytes(h, 0, o), this._packets.push(h);
                }
                r = n.position;
            }
            r && (n.position = r, n.readBytes(n), n.length -= r);
        }
    }, t.prototype.handlePackets = function(t) {
        for (var i = e.getTimer(); this._packets.length > 0; ) {
            var n = this._packets.shift();
            if (this.processRecvPacket(n), this.recycleByte(n), e.getTimer() - i > 10) break;
        }
        for (this._sendpackets.length, i = e.getTimer(); this._sendpackets.length > 0 && (this.socket_.writeBytes(this._sendpackets.shift()), 
        !(e.getTimer() - i > 10)); ) ;
    }, t.prototype.sendKeyToServer = function() {
        var e = new te();
        this.socket_.readBytes(e), e.position = 0;
        var i = e.readUnsignedInt();
        w.setTargetSalt(i), e.position = 0, e.writeShort(w.getCheckKey()), this.socket_.writeBytes(e, 0, 2), 
        this.updateStatus(t.STATUS_COMMUNICATION);
    }, t.prototype.reconnect = function() {
        this.isReconnecting || (console.log("超时开始重连"), this._onClosed && this._onClosed(), 
        this.updateStatus(t.STATUS_DISCONNECT), this.reset(), this.reLogin());
    }, t.prototype.reset = function() {
        this._host = se.serverIP, this._port = se.serverPort, this._user = se.openID, this._pwd = se.password, 
        this._serverId = se.srvid;
    }, t.prototype.onSocketClose = function(e) {
        this.checkTime = 0, this.isReconnecting = !1, console.log("与服务器的连接断开了！ip:" + this._host + " port:" + this._port), 
        this.updateStatus(t.STATUS_DISCONNECT), this._onClosed && this._onClosed(), this.reset(), 
        U.ins().remove(this.reLogin, this), U.ins().doTimer(3e3, 1, this.reLogin, this);
    }, t.prototype.reLogin = function() {
        U.ins().remove(this.reLogin, this), this.isReconnecting || (this.isReconnecting = !0, 
        this.close(), this.newSocket(), this.login(this._user, this._pwd, this._serverId, this._host, this._port));
    }, t.prototype.updateStatus = function(e) {
        if (this._socketStatus != e) {
            var t = this._socketStatus;
            this._socketStatus = e, this.onFinishCheck(e, t);
        }
    }, t.prototype.onFinishCheck = function(i, n) {
        i == t.STATUS_COMMUNICATION && (console.log("onFinishCheck耗时：" + (e.getTimer() - se.saveTime)), 
        se.saveTime = e.getTimer(), console.log("与服务器建立通信成功！ip:" + this._host + " port:" + this._port), 
        this.sendCheckAccount(this._user, this._pwd));
    }, Object.defineProperty(t.prototype, "host", {
        get: function() {
            return this._host;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "port", {
        get: function() {
            return this._port;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.sendCheckAccount = function(e, t) {
        var i = this.getBytes();
        ae.ins().isInCross() && window.Actor ? (c.getIns().report(c.run), i.writeCmd(255, 9), 
        i.writeInt(Actor.actorID), i.writeString(ae.ins().password), i.writeString(se.pfid), 
        this.sendToServer(i)) : (c.getIns().report(c.version), i.writeCmd(255, 1), i.writeInt(this._serverId), 
        i.writeString(e), i.writeString(t), this.sendToServer(i));
    }, t.prototype.login = function(e, t, i, n, r) {
        this._user = e, this._pwd = t, this._serverId = i, n.split(":")[1] && n.split(":")[1].length && (r = parseInt(n.split(":")[1])), 
        this.socket_.connected ? this.sendCheckAccount(e, t) : (console.log("connect to " + n + " ,port: " + r), 
        this.connect(n, r));
    }, t.prototype.processRecvPacket = function(e) {
        var t = e.readUnsignedByte(), i = e.readUnsignedByte();
        this.dispatch(t, i, e);
    }, t.prototype.dispatch = function(e, t, i) {
        if (this.PACK_HANDLER[e] && this.PACK_HANDLER[e][t]) {
            var n = this.PACK_HANDLER[e][t];
            n[0].call(n[1], i);
        } else console.log("未处理服务器协议：" + e + "-" + t);
    }, t.prototype.recycleByte = function(e) {
        I.push(e);
    }, t.prototype.getBytes = function() {
        var e = new te();
        return e.clear(), e.writeShort(t.DEFAULT_TAG), e.writeShort(0), e.writeShort(0), 
        e.writeShort(t.DEFAULT_CRC_KEY), e.writeUnsignedInt(this.pid++), e;
    }, t.prototype.registerSTCFunc = function(e, t, i, n) {
        if (this.PACK_HANDLER[e]) {
            if (this.PACK_HANDLER[e][t]) return void console.log("重复注册协议接口" + e + "-" + t);
        } else this.PACK_HANDLER[e] = [];
        this.PACK_HANDLER[e][t] = [ i, n ];
    }, t.prototype.setOnClose = function(e, t) {
        this._onClosed = e.bind(t);
    }, t.prototype.setOnConnected = function(e, t) {
        this._onConnected = e.bind(t);
    }, t.prototype.sendPack = function(i) {
        if (null == i || 0 == i.length) throw new e.error("创建客户端数据包时数据不能为空！");
        var n = t.HEAD_SIZE;
        i.position = 2, i.writeShort(i.length - n);
        var r = w.getCRC16ByPos(i, n);
        i.position = 4, i.writeShort(r);
        var o = w.getCRC16(i, n);
        i.position = 6, i.writeShort(o), w.encode(i, 4, 4), f.isEnterMap && !this.isFocusSend ? this._sendpackets.push(i) : (this.socket_.writeBytes(i), 
        this.isFocusSend = !1);
    }, t.DEFAULT_TAG = 52462, t.DEFAULT_CRC_KEY = 30301, t.HEAD_SIZE = 8, t.STATUS_CONNECTING = 1, 
    t.STATUS_CHECKING = 2, t.STATUS_COMMUNICATION = 3, t.STATUS_DISCONNECT = 4, t.CLASSNAME = e.getQualifiedClassName(te), 
    t.lastSendTime = 0, t.debugStop = !1, t;
}();

t(ie.prototype, "GameSocket"), window.GameSocket = ie;

var ne;

!function(e) {
    e[e.Default = 0] = "Default", e[e.Guanqia = 1] = "Guanqia", e[e.Skill = 2] = "Skill", 
    e[e.Bag = 3] = "Bag", e[e.Equip = 4] = "Equip", e[e.Encounter = 5] = "Encounter", 
    e[e.Wing = 6] = "Wing", e[e.strongthen = 7] = "strongthen", e[e.Mail = 8] = "Mail", 
    e[e.Task = 9] = "Task", e[e.Boss = 10] = "Boss", e[e.Gem = 11] = "Gem", e[e.JingMai = 12] = "JingMai", 
    e[e.Zs = 13] = "Zs", e[e.Zhuling = 14] = "Zhuling", e[e.Tupo = 15] = "Tupo", e[e.Shop = 16] = "Shop", 
    e[e.Ring = 17] = "Ring", e[e.Ranking = 18] = "Ranking", e[e.Vip = 19] = "Vip", e[e.Notice = 20] = "Notice", 
    e[e.LoongSoul = 21] = "LoongSoul", e[e.TreasureHunt = 22] = "TreasureHunt", e[e.Train = 23] = "Train", 
    e[e.FbChallenge = 24] = "FbChallenge", e[e.Activity = 25] = "Activity", e[e.Artifact = 26] = "Artifact", 
    e[e.Recharge = 27] = "Recharge", e[e.ExpGold = 28] = "ExpGold", e[e.CDKey = 29] = "CDKey", 
    e[e.Chat = 30] = "Chat", e[e.ZhuZaiEquip = 31] = "ZhuZaiEquip", e[e.ZsBoss = 32] = "ZsBoss", 
    e[e.pfActivity = 33] = "pfActivity", e[e.Ladder = 34] = "Ladder", e[e.Miji = 35] = "Miji", 
    e[e.moneyTree = 36] = "moneyTree", e[e.Guild = 37] = "Guild", e[e.Title = 38] = "Title", 
    e[e.GuildFB = 39] = "GuildFB", e[e.GuildWar = 40] = "GuildWar", e[e.GuildRobber = 41] = "GuildRobber", 
    e[e.GuildStore = 42] = "GuildStore", e[e.WarSpirit = 43] = "WarSpirit", e[e.Dress = 44] = "Dress", 
    e[e.Friends = 47] = "Friends", e[e.Rune = 50] = "Rune", e[e.Pet = 51] = "Pet", e[e.Eye = 52] = "Eye", 
    e[e.Horse = 53] = "Horse", e[e.ZuJi = 54] = "ZuJi", e[e.GangQi = 55] = "GangQi", 
    e[e.MoShen = 56] = "MoShen", e[e.FaBao = 57] = "FaBao", e[e.JianTong = 58] = "JianTong", 
    e[e.Poke = 59] = "Poke", e[e.Invest = 60] = "Invest", e[e.Arena = 61] = "Arena", 
    e[e.DailyTask = 62] = "DailyTask", e[e.WelfareHall = 63] = "WelfareHall", e[e.Wulinbazhu = 64] = "Wulinbazhu", 
    e[e.ConsumerDraw = 65] = "ConsumerDraw", e[e.ConsumeRank = 66] = "ConsumeRank", 
    e[e.Box = 67] = "Box", e[e.GoodLuck = 68] = "GoodLuck", e[e.Egg = 69] = "Egg", e[e.Novicetarget = 70] = "Novicetarget", 
    e[e.WorldBoss = 71] = "WorldBoss", e[e.NewHandTask = 72] = "NewHandTask", e[e.Escort = 73] = "Escort", 
    e[e.PlayHall = 74] = "PlayHall", e[e.Treasure = 75] = "Treasure", e[e.Consume = 76] = "Consume", 
    e[e.BetaActivity = 77] = "BetaActivity", e[e.Anima = 78] = "Anima", e[e.XianJie = 79] = "XianJie", 
    e[e.KuaFuWar = 80] = "KuaFuWar", e[e.QmRedBag = 81] = "QmRedBag", e[e.Dragon = 82] = "Dragon", 
    e[e.WuShuangBoss = 83] = "WuShuangBoss", e[e.GaoBaoBoss = 84] = "GaoBaoBoss", e[e.MergeActivity = 85] = "MergeActivity", 
    e[e.ClimbTower = 86] = "ClimbTower", e[e.NewYearActivity = 87] = "NewYearActivity", 
    e[e.LianHun = 88] = "LianHun", e[e.YuanXiaoBoss = 89] = "YuanXiaoBoss", e[e.QiLing = 90] = "QiLing", 
    e[e.LingChong = 91] = "LingChong", e[e.Retrieving = 92] = "Retrieving", e[e.DressSell = 93] = "DressSell", 
    e[e.GuiZu = 94] = "GuiZu", e[e.YuanGuBoss = 95] = "YuanGuBoss", e[e.LunHui = 96] = "LunHui", 
    e[e.ZhenBaoSystem = 97] = "ZhenBaoSystem", e[e.HunLuiEquip = 98] = "HunLuiEquip", 
    e[e.ChiJi = 99] = "ChiJi", e[e.ZLActivity = 100] = "ZLActivity", e[e.ServerCross = 101] = "ServerCross", 
    e[e.XianLv = 102] = "XianLv", e[e.Transact = 103] = "Transact", e[e.MiBao = 104] = "MiBao", 
    e[e.WorldLevel = 105] = "WorldLevel", e[e.Arouse = 106] = "Arouse", e[e.CrossBoss = 107] = "CrossBoss", 
    e[e.YiBaoFb = 108] = "YiBaoFb", e[e.CrossCity = 109] = "CrossCity", e[e.LuckyXingPan = 110] = "LuckyXingPan", 
    e[e.QdActivity = 111] = "QdActivity", e[e.QiriQdActivity = 112] = "QiriQdActivity", 
    e[e.ShenJian = 113] = "ShenJian", e[e.ShenZhiBoss = 114] = "ShenZhiBoss", e[e.CrossWar = 115] = "CrossWar", 
    e[e.CrossZhanGong = 116] = "CrossZhanGong", e[e.Regress = 117] = "Regress", e[e.GodRank = 118] = "GodRank", 
    e[e.Tianlei = 119] = "Tianlei", e[e.TLXM = 120] = "TLXM", e[e.HallFame = 121] = "HallFame", 
    e[e.Login = 255] = "Login";
}(ne || (ne = {})), window.PackageID = ne;

var re = function() {
    function t() {}
    return t.getAngle = function(e) {
        return 180 * e / Math.PI;
    }, t.getRadian = function(e) {
        return e / 180 * Math.PI;
    }, t.getRadian2 = function(e, t, i, n) {
        var r = i - e, o = n - t;
        return Math.atan2(o, r);
    }, t.getDistance = function(e, t, i, n) {
        var r = i - e, o = n - t, s = r * r + o * o;
        return Math.sqrt(s);
    }, t.getDistanceByObject = function(e, t) {
        return this.getDistance(e.x, e.y, t.x, t.y);
    }, t.getDistanceX2ByObject = function(e, t) {
        var i = e.x - t.x, n = e.y - t.y;
        return i * i + n * n;
    }, t.getDirMove = function(e, t, i, n) {
        void 0 === i && (i = 0), void 0 === n && (n = 0);
        var r = this.getRadian(e), o = {
            x: 0,
            y: 0
        };
        return o.x = Math.cos(r) * t + i >> 0, o.y = Math.sin(r) * t + n >> 0, o;
    }, t.getPByDistance = function(t, i, n) {
        var r = Math.atan2(i.y - t.y, i.x - t.x), o = new e.Point();
        return o.x = i.x + n * Math.cos(r), o.y = i.y + n * Math.sin(r), o;
    }, t.limit = function(e, t) {
        e = Math.min(e, t);
        var i = (t = Math.max(e, t)) - e;
        return e + Math.random() * i;
    }, t.limitInteger = function(e, t) {
        return Math.round(this.limit(e, t));
    }, t.randomItem = function(e) {
        return e[Math.floor(Math.random() * e.length)];
    }, t.toInteger = function(e) {
        return e >> 0;
    }, t.getRectangle = function(e, t, i, n, r, o) {
        void 0 === o && (o = Number.MAX_VALUE);
        var s = [];
        s.push(t);
        for (var a = i * GameMap.CELL_SIZE, h = t.x - e.x, l = t.y - e.y, u = Math.atan2(l, h), c = n * GameMap.CELL_SIZE / 2, p = 0, d = r; p < d.length; p++) {
            var g = d[p], f = g.x - e.x, m = g.y - e.y, S = Math.abs(Math.atan2(m, f) - u), v = f * f + m * m, E = Math.cos(S), y = Math.sin(S);
            if ((S <= Math.PI / 2 || S >= 3 * Math.PI / 2) && a * a >= E * E * v && c * c >= y * y * v && t != g && s.push(g), 
            s.length >= o) break;
        }
        return s;
    }, t.getClosest = function(e, t, i) {
        void 0 === i && (i = 1);
        for (var n = [], r = "_tDis", o = t.length, s = 0; o > s; s++) {
            var a = this.getDistanceByObject(e, t[s]);
            t[s][r] = a, n.push(t[s]);
        }
        return n.sort(function(e, t) {
            return L.sortAsc(e[r], t[r]);
        }), n.length > i && (n.length = i), n;
    }, t.fomatFloat = function(e, t) {
        return Math.floor(e * Math.pow(10, t)) / Math.pow(10, t);
    }, t.randomArr = function(e) {
        for (var t, i, n, r = e.slice(), o = r.length; o; ) i = o - 1, n = Math.floor(Math.random() * o), 
        o--, i != n && (t = r[i], r[i] = r[n], r[n] = t);
        return r;
    }, t;
}();

t(re.prototype, "MathUtils"), window.MathUtils = re;

var oe = function() {
    function e() {}
    return e.hex_md5 = function(e) {
        return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(e)));
    }, e.b64_md5 = function(e) {
        return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(e)));
    }, e.any_md5 = function(e, t) {
        return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(e)), t);
    }, e.hex_hmac_md5 = function(e, t) {
        return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)));
    }, e.b64_hmac_md5 = function(e, t) {
        return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)));
    }, e.any_hmac_md5 = function(e, t, i) {
        return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)), i);
    }, e.md5_vm_test = function() {
        return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase();
    }, e.rstr_md5 = function(e) {
        return this.binl2rstr(this.binl_md5(this.rstr2binl(e), 8 * e.length));
    }, e.rstr_hmac_md5 = function(e, t) {
        var i = this.rstr2binl(e);
        i.length > 16 && (i = this.binl_md5(i, 8 * e.length));
        for (var n = Array(16), r = Array(16), o = 0; 16 > o; o++) n[o] = 909522486 ^ i[o], 
        r[o] = 1549556828 ^ i[o];
        var s = this.binl_md5(n.concat(this.rstr2binl(t)), 512 + 8 * t.length);
        return this.binl2rstr(this.binl_md5(r.concat(s), 640));
    }, e.rstr2hex = function(e) {
        try {
            this.hexcase;
        } catch (e) {
            this.hexcase = 0;
        }
        for (var t, i = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", n = "", r = 0; r < e.length; r++) t = e.charCodeAt(r), 
        n += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
        return n;
    }, e.rstr2b64 = function(e) {
        try {
            this.b64pad;
        } catch (e) {
            this.b64pad = "";
        }
        for (var t = "", i = e.length, n = 0; i > n; n += 3) for (var r = e.charCodeAt(n) << 16 | (i > n + 1 ? e.charCodeAt(n + 1) << 8 : 0) | (i > n + 2 ? e.charCodeAt(n + 2) : 0), o = 0; 4 > o; o++) t += 8 * n + 6 * o > 8 * e.length ? this.b64pad : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r >>> 6 * (3 - o) & 63);
        return t;
    }, e.rstr2any = function(e, t) {
        var i, n, r, o, s, a = t.length, h = Array(Math.ceil(e.length / 2));
        for (i = 0; i < h.length; i++) h[i] = e.charCodeAt(2 * i) << 8 | e.charCodeAt(2 * i + 1);
        var l = Math.ceil(8 * e.length / (Math.log(t.length) / Math.log(2))), u = Array(l);
        for (n = 0; l > n; n++) {
            for (s = Array(), o = 0, i = 0; i < h.length; i++) o = (o << 16) + h[i], o -= (r = Math.floor(o / a)) * a, 
            (s.length > 0 || r > 0) && (s[s.length] = r);
            u[n] = o, h = s;
        }
        var c = "";
        for (i = u.length - 1; i >= 0; i--) c += t.charAt(u[i]);
        return c;
    }, e.str2rstr_utf8 = function(e) {
        for (var t, i, n = "", r = -1; ++r < e.length; ) t = e.charCodeAt(r), i = r + 1 < e.length ? e.charCodeAt(r + 1) : 0, 
        t >= 55296 && 56319 >= t && i >= 56320 && 57343 >= i && (t = 65536 + ((1023 & t) << 10) + (1023 & i), 
        r++), 127 >= t ? n += String.fromCharCode(t) : 2047 >= t ? n += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : 65535 >= t ? n += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : 2097151 >= t && (n += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
        return n;
    }, e.str2rstr_utf16le = function(e) {
        for (var t = "", i = 0; i < e.length; i++) t += String.fromCharCode(255 & e.charCodeAt(i), e.charCodeAt(i) >>> 8 & 255);
        return t;
    }, e.str2rstr_utf16be = function(e) {
        for (var t = "", i = 0; i < e.length; i++) t += String.fromCharCode(e.charCodeAt(i) >>> 8 & 255, 255 & e.charCodeAt(i));
        return t;
    }, e.rstr2binl = function(e) {
        for (var t = Array(e.length >> 2), i = 0; i < t.length; i++) t[i] = 0;
        for (i = 0; i < 8 * e.length; i += 8) t[i >> 5] |= (255 & e.charCodeAt(i / 8)) << i % 32;
        return t;
    }, e.binl2rstr = function(e) {
        for (var t = "", i = 0; i < 32 * e.length; i += 8) t += String.fromCharCode(e[i >> 5] >>> i % 32 & 255);
        return t;
    }, e.binl_md5 = function(e, t) {
        e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
        for (var i = 1732584193, n = -271733879, r = -1732584194, o = 271733878, s = 0; s < e.length; s += 16) {
            var a = i, h = n, l = r, u = o;
            i = this.md5_ff(i, n, r, o, e[s + 0], 7, -680876936), o = this.md5_ff(o, i, n, r, e[s + 1], 12, -389564586), 
            r = this.md5_ff(r, o, i, n, e[s + 2], 17, 606105819), n = this.md5_ff(n, r, o, i, e[s + 3], 22, -1044525330), 
            i = this.md5_ff(i, n, r, o, e[s + 4], 7, -176418897), o = this.md5_ff(o, i, n, r, e[s + 5], 12, 1200080426), 
            r = this.md5_ff(r, o, i, n, e[s + 6], 17, -1473231341), n = this.md5_ff(n, r, o, i, e[s + 7], 22, -45705983), 
            i = this.md5_ff(i, n, r, o, e[s + 8], 7, 1770035416), o = this.md5_ff(o, i, n, r, e[s + 9], 12, -1958414417), 
            r = this.md5_ff(r, o, i, n, e[s + 10], 17, -42063), n = this.md5_ff(n, r, o, i, e[s + 11], 22, -1990404162), 
            i = this.md5_ff(i, n, r, o, e[s + 12], 7, 1804603682), o = this.md5_ff(o, i, n, r, e[s + 13], 12, -40341101), 
            r = this.md5_ff(r, o, i, n, e[s + 14], 17, -1502002290), n = this.md5_ff(n, r, o, i, e[s + 15], 22, 1236535329), 
            i = this.md5_gg(i, n, r, o, e[s + 1], 5, -165796510), o = this.md5_gg(o, i, n, r, e[s + 6], 9, -1069501632), 
            r = this.md5_gg(r, o, i, n, e[s + 11], 14, 643717713), n = this.md5_gg(n, r, o, i, e[s + 0], 20, -373897302), 
            i = this.md5_gg(i, n, r, o, e[s + 5], 5, -701558691), o = this.md5_gg(o, i, n, r, e[s + 10], 9, 38016083), 
            r = this.md5_gg(r, o, i, n, e[s + 15], 14, -660478335), n = this.md5_gg(n, r, o, i, e[s + 4], 20, -405537848), 
            i = this.md5_gg(i, n, r, o, e[s + 9], 5, 568446438), o = this.md5_gg(o, i, n, r, e[s + 14], 9, -1019803690), 
            r = this.md5_gg(r, o, i, n, e[s + 3], 14, -187363961), n = this.md5_gg(n, r, o, i, e[s + 8], 20, 1163531501), 
            i = this.md5_gg(i, n, r, o, e[s + 13], 5, -1444681467), o = this.md5_gg(o, i, n, r, e[s + 2], 9, -51403784), 
            r = this.md5_gg(r, o, i, n, e[s + 7], 14, 1735328473), n = this.md5_gg(n, r, o, i, e[s + 12], 20, -1926607734), 
            i = this.md5_hh(i, n, r, o, e[s + 5], 4, -378558), o = this.md5_hh(o, i, n, r, e[s + 8], 11, -2022574463), 
            r = this.md5_hh(r, o, i, n, e[s + 11], 16, 1839030562), n = this.md5_hh(n, r, o, i, e[s + 14], 23, -35309556), 
            i = this.md5_hh(i, n, r, o, e[s + 1], 4, -1530992060), o = this.md5_hh(o, i, n, r, e[s + 4], 11, 1272893353), 
            r = this.md5_hh(r, o, i, n, e[s + 7], 16, -155497632), n = this.md5_hh(n, r, o, i, e[s + 10], 23, -1094730640), 
            i = this.md5_hh(i, n, r, o, e[s + 13], 4, 681279174), o = this.md5_hh(o, i, n, r, e[s + 0], 11, -358537222), 
            r = this.md5_hh(r, o, i, n, e[s + 3], 16, -722521979), n = this.md5_hh(n, r, o, i, e[s + 6], 23, 76029189), 
            i = this.md5_hh(i, n, r, o, e[s + 9], 4, -640364487), o = this.md5_hh(o, i, n, r, e[s + 12], 11, -421815835), 
            r = this.md5_hh(r, o, i, n, e[s + 15], 16, 530742520), n = this.md5_hh(n, r, o, i, e[s + 2], 23, -995338651), 
            i = this.md5_ii(i, n, r, o, e[s + 0], 6, -198630844), o = this.md5_ii(o, i, n, r, e[s + 7], 10, 1126891415), 
            r = this.md5_ii(r, o, i, n, e[s + 14], 15, -1416354905), n = this.md5_ii(n, r, o, i, e[s + 5], 21, -57434055), 
            i = this.md5_ii(i, n, r, o, e[s + 12], 6, 1700485571), o = this.md5_ii(o, i, n, r, e[s + 3], 10, -1894986606), 
            r = this.md5_ii(r, o, i, n, e[s + 10], 15, -1051523), n = this.md5_ii(n, r, o, i, e[s + 1], 21, -2054922799), 
            i = this.md5_ii(i, n, r, o, e[s + 8], 6, 1873313359), o = this.md5_ii(o, i, n, r, e[s + 15], 10, -30611744), 
            r = this.md5_ii(r, o, i, n, e[s + 6], 15, -1560198380), n = this.md5_ii(n, r, o, i, e[s + 13], 21, 1309151649), 
            i = this.md5_ii(i, n, r, o, e[s + 4], 6, -145523070), o = this.md5_ii(o, i, n, r, e[s + 11], 10, -1120210379), 
            r = this.md5_ii(r, o, i, n, e[s + 2], 15, 718787259), n = this.md5_ii(n, r, o, i, e[s + 9], 21, -343485551), 
            i = this.safe_add(i, a), n = this.safe_add(n, h), r = this.safe_add(r, l), o = this.safe_add(o, u);
        }
        return [ i, n, r, o ];
    }, e.md5_cmn = function(e, t, i, n, r, o) {
        return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(t, e), this.safe_add(n, o)), r), i);
    }, e.md5_ff = function(e, t, i, n, r, o, s) {
        return this.md5_cmn(t & i | ~t & n, e, t, r, o, s);
    }, e.md5_gg = function(e, t, i, n, r, o, s) {
        return this.md5_cmn(t & n | i & ~n, e, t, r, o, s);
    }, e.md5_hh = function(e, t, i, n, r, o, s) {
        return this.md5_cmn(t ^ i ^ n, e, t, r, o, s);
    }, e.md5_ii = function(e, t, i, n, r, o, s) {
        return this.md5_cmn(i ^ (t | ~n), e, t, r, o, s);
    }, e.safe_add = function(e, t) {
        var i = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i;
    }, e.bit_rol = function(e, t) {
        return e << t | e >>> 32 - t;
    }, e.hexcase = 0, e.b64pad = "", e;
}();

t(oe.prototype, "md5"), window.md5 = oe;

var se = function() {
    function t() {}
    return t.init = function() {
        this.urlParam = {};
        var e = window.paraUrl;
        t.parseUrl(e), t.isWxgame && (we.instance, window.wx && (window.alert = function(e) {
            window.wx.showModal({
                title: "提示",
                content: e,
                showCancel: !1
            });
        }));
    }, t.setShareInfo = function() {
        window.wx.onShareAppMessage && window.wx.onShareAppMessage(function() {
            return {
                title: t.shareContent,
                imageUrl: "" + t.resAdd + t.sharePic,
                query: "fromUserId=" + t.openID
            };
        });
    }, t.parseUrl = function(e, t) {
        if (void 0 === t && (t = null), e) {
            var i = e.indexOf("?");
            if (-1 != i) for (var n = e.slice(i + 1).split("&"), r = void 0, o = 0; o < n.length; o++) r = n[o].split("="), 
            (!t || t.indexOf(r[0]) > -1) && (this.urlParam[r[0]] = r[1]);
        }
    }, Object.defineProperty(t, "isWxgame", {
        get: function() {
            return !!window.platform && "wxgame" == window.platform.name;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "loadGroupResName", {
        get: function() {
            var e = "gp_EnterGame";
            return t.isTaiWan ? e + "_tw" : t.isWxgame ? e + "_wx" : e;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "isTaiWan", {
        get: function() {
            return t.pf == t.zwtf;
        },
        enumerable: !0,
        configurable: !0
    }), t.changeLangResPath = function(e) {
        return t.isTaiWan ? e + "_tw" : e;
    }, Object.defineProperty(t, "serverHost", {
        get: function() {
            return this.urlParam.serverHost || "";
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "resAdd", {
        get: function() {
            return this.urlParam.hosts || "";
        },
        set: function(e) {
            this.urlParam.hosts = e;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "openID", {
        get: function() {
            return this.urlParam.user;
        },
        set: function(e) {
            this.urlParam.user = e;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "user_token", {
        get: function() {
            return this.urlParam.user_token;
        },
        set: function(e) {
            this.urlParam.user_token = e;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "srvid", {
        get: function() {
            return this.urlParam.srvid || 1;
        },
        set: function(e) {
            this.urlParam.srvid = e;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "serverIP", {
        get: function() {
            return this.urlParam.srvaddr;
        },
        set: function(e) {
            this.urlParam.srvaddr = e;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "serverPort", {
        get: function() {
            return this.urlParam.srvport || 9001;
        },
        set: function(e) {
            this.urlParam.srvport = e;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "chatIP", {
        get: function() {
            return this.pf == t.zw17kdf || this.pf == t.PF_17K || this.pf == t.lzgame || this.pf == t.zwawy || this.pf == t.zw9130 || "17kk" == this.pf || this.pf == t.zwjh || this.pf == t.zwwanba || this.pf == t.zwywdf || this.pf == t.zwqtlddf || this.pf == t.zwfywz ? "xlgame2.playtai.com" : this.pf == t.zwtf ? "xlgame1-games.wakool.net" : this.pf == t.zwwxxyx ? "xlwxgame1.playtai.com" : this.pf == t.gh ? "119.29.101.27" : "119.29.83.118";
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "chatPort", {
        get: function() {
            return this.pf == t.PF_17K ? 9435 : this.pf == t.lzgame ? 9434 : this.pf == t.zwawy ? 9433 : this.pf == t.zw9130 ? 9432 : "17kk" == this.pf ? 9431 : this.pf == t.zwjh ? 9430 : this.pf == t.zw17kdf ? 9429 : this.pf == t.zwwanba ? 9428 : this.pf == t.zwywdf ? 9427 : this.pf == t.zwqtlddf ? 9425 : this.pf == t.zwtf ? 9435 : this.pf == t.zwwxxyx ? 9424 : this.pf == t.zwfywz ? 9424 : this.pf == t.gh ? 9435 : this.urlParam.chatPort || 8900;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "password", {
        get: function() {
            return this.urlParam.spverify || "e10adc3949ba59abbe56e057f20f883e";
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "openKey", {
        get: function() {
            return this.urlParam.openkey;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "pf", {
        get: function() {
            return this.urlParam.pf;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "zoneId", {
        get: function() {
            return this.urlParam.zoneid;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "via", {
        get: function() {
            return this.urlParam.via;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "pfid", {
        get: function() {
            return this.urlParam.pfid || "0";
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "serverID", {
        get: function() {
            return this.urlParam.serverid;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "appid", {
        get: function() {
            return this.urlParam.appid || "";
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "app_openid", {
        get: function() {
            return this.urlParam.app_openid || "";
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "isSubscribe", {
        get: function() {
            return this.urlParam.isSubscribe;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "nickName", {
        get: function() {
            var e = this.urlParam.nickName || "";
            try {
                return e.length ? decodeURIComponent(e) : e;
            } catch (t) {
                return e;
            }
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "debug", {
        get: function() {
            return "1" == this.urlParam.debug;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "debugNum", {
        get: function() {
            return this.urlParam.debugNum;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "callUrl", {
        get: function() {
            var e = this.urlParam.callUrl || "";
            return e.length ? decodeURIComponent(e) : e;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "gifi", {
        get: function() {
            return this.urlParam.giftid;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "roleCount", {
        get: function() {
            return parseInt(this.urlParam.roleCount);
        },
        set: function(e) {
            this.urlParam.roleCount = e;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "isnew", {
        get: function() {
            return parseInt(this.urlParam.isnew);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "login_ip", {
        get: function() {
            return this.urlParam.login_ip;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "is_attention", {
        get: function() {
            return this.urlParam.is_attention;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "isShowShare", {
        get: function() {
            return window.isShowShare;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "v", {
        get: function() {
            return parseInt(this.urlParam.v);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "isYelloVip", {
        get: function() {
            return parseInt(this.urlParam.isYelloVip);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "isYelloYearVip", {
        get: function() {
            return parseInt(this.urlParam.isYelloYearVip);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "yelloVipLevel", {
        get: function() {
            return parseInt(this.urlParam.yelloVipLevel);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "isYelloHighVip", {
        get: function() {
            return parseInt(this.urlParam.isYelloHighVip);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "isWaiWang", {
        get: function() {
            return !isNaN(t.roleCount);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "isFirstLoad", {
        get: function() {
            return t.isWaiWang && !t.roleCount;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "channelid", {
        get: function() {
            return parseInt(this.urlParam.channelid);
        },
        set: function(e) {
            this.urlParam.channelid = e;
        },
        enumerable: !0,
        configurable: !0
    }), t.isCanLogin = function() {
        return null != this.openID && null != this.password && null != this.srvid && null != this.serverIP && null != this.serverPort;
    }, Object.defineProperty(t, "gameVer", {
        get: function() {
            return this.urlParam.gameVer || t.randomVer;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "thmPath", {
        get: function() {
            return this.urlParam.thmPath ? this.urlParam.thmPath + "?v=" + t.gameVer : "default.thm.json";
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "resPath", {
        get: function() {
            return this.urlParam.resPath ? this.urlParam.resPath + "?v=" + t.gameVer : "default.res.json";
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "gameEuiPath", {
        get: function() {
            return "resource/gameEui.json";
        },
        enumerable: !0,
        configurable: !0
    }), t.setLoadProgress = function(e, t) {
        e >>= 0, console.log(t + ":" + e), window.showLoadProgress && window.showLoadProgress(e, t);
    }, t.isOpenWeiXin = function() {
        return t.pf == t.zwawy;
    }, t.isOldEgret = function() {
        return "5.0.8" == e.Capabilities.engineVersion;
    }, t.isWxgameIos = function() {
        return null != window.mobileInfo && "ios" == window.mobileInfo.platform;
    }, t.isCloseWxgameIos = function() {
        return !(t.isIgnore() || !t.isWxgameIos());
    }, t.isFromWxgameList = function() {
        return 1104 == parseInt(window.sceneId);
    }, t.isIgnore = function() {
        return 1 == parseInt(this.urlParam.ignore);
    }, t.isWhite = function() {
        return 1 == parseInt(this.urlParam.white);
    }, Object.defineProperty(t, "channelname", {
        get: function() {
            return this.urlParam.channelname;
        },
        enumerable: !0,
        configurable: !0
    }), t.isWanYiWan = function() {
        return "H5.LIMIXIU" == window.via;
    }, t.shareRoleId = function() {
        return null != window.shareRoleId ? parseInt(window.shareRoleId) : 0;
    }, t.zw17kdf = "zw17kdf", t.PF_17K = "17k", t.lzgame = "lzgame", t.zwawy = "zwawy", 
    t.zw9130 = "zw9130", t.zwjh = "zwjh", t.zwwanba = "zwwanba", t.zwywdf = "zwywdf", 
    t.zwtf = "zwtf", t.zwqtlddf = "zwqtlddf", t.zwwxxyx = "zwwxxyx", t.zwfywz = "zwfywz", 
    t.gh = "gh", t.saveTime = 0, t.creatNum = 0, t.shareContent = "这游戏有毒！打开竟然是...", 
    t.sharePic = "icon/wxxyx_share3.jpg", t.storyContent = "", t.randomVer = Math.random(), 
    t;
}();

t(se.prototype, "LocationProperty"), window.LocationProperty = se;

var ae = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.isLock = !1, t.srvid = 0, t.serverIP = "", t.serverPort = 0, t.password = "", 
        t.crossLoginType = 2, t.crossId = 0, t.sysId = ne.ServerCross, t.regNetMsg(3, t.postGetCrossFlag), 
        t;
    }
    return i(t, e), t.ins = function() {
        return e.ins.call(this);
    }, t.prototype.sendEnterCross = function() {
        this.isLock = !0;
        var e = this.getBytes(1);
        this.sendToServer(e);
    }, t.prototype.sendEnterNormal = function() {
        this.isLock = !0;
        var e = this.getBytes(2);
        this.sendToServer(e);
    }, t.prototype.sendGetCrossFlag = function() {
        var e = this.getBytes(3);
        this.sendToServer(e);
    }, t.prototype.postGetCrossFlag = function(e) {
        this.crossId = e.readInt();
    }, t.prototype.isInCross = function() {
        return se.serverIP != ie.ins().host || se.serverPort != ie.ins().port;
    }, t;
}(W);

t(ae.prototype, "ServerCross"), window.ServerCross = ae;

var he = function(e) {
    function t() {
        return e.call(this) || this;
    }
    return i(t, e), t.ins = function() {
        return e.ins.call(this);
    }, t.prototype.showTips = function(e) {
        void 0 === e && (e = "");
        var t = D.ins().open(le);
        ce.ins().addDelayOptFunction(t, t.showTips, e);
    }, t.prototype.showGoodEquipTips = function(e) {
        D.ins().open(le).showGoodEquipTip(e);
    }, t.prototype.showBoostPower = function(e, t) {
        D.ins().open(BoostPowerView).showBoostPower(e, t);
    }, t.prototype.showFuncNotice = function(e) {}, t.prototype.showSkillOpen = function() {}, 
    t;
}(W);

t(he.prototype, "UserTips"), window.UserTips = he;

var le = function(t) {
    function n() {
        var e = t.call(this) || this;
        return e.labCount = 0, e.list = [], e.goodEquipList = [], e;
    }
    return i(n, t), n.prototype.initUI = function() {
        t.prototype.initUI.call(this), this.touchChildren = !1, this.touchEnabled = !1;
    }, n.prototype.showTips = function(t) {
        n.moveTime = e.getTimer();
        var i = I.pop("TipsItem");
        i.y = 580, i.horizontalCenter = 0, i.labelText = t, this.addChild(i), this.list.unshift(i), 
        i.addEventListener(e.Event.REMOVED_FROM_STAGE, this.removeTip, this);
        for (var r = this, o = this.list.length - 1; o >= 0; o--) !function(t) {
            var i = r.list[t];
            e.Tween.removeTweens(i), e.Tween.get(i, {
                onChange: function() {
                    i.y < -30 && i.parent && i.parent.removeChild(i);
                }
            }).to({
                y: 580 - 20 * t
            }, 500);
        }(o);
    }, n.prototype.removeTip = function(t) {
        var i = this.list.indexOf(t.currentTarget);
        this.list.splice(i, 1), e.Tween.removeTweens(t.currentTarget), t.currentTarget.removeEventListener(e.Event.REMOVED_FROM_STAGE, this.removeTip, this), 
        I.push(t.currentTarget);
    }, Object.defineProperty(n.prototype, "equipTip1", {
        get: function() {
            return this._equipTip1 || (this._equipTip1 = new TipsGoodEquip()), this._equipTip1;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(n.prototype, "equipTip2", {
        get: function() {
            return this._equipTip2 || (this._equipTip2 = new TipsGoodEquip()), this._equipTip2;
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.showGoodEquipTip = function(e) {
        this.goodEquipList.push(e), U.ins().isExists(this.goodEquipTimer, this) || U.ins().doTimer(16, 0, this.goodEquipTimer, this);
    }, n.prototype.goodEquipTimer = function() {
        var t = this;
        if (0 != this.goodEquipList.length && !this.isWait) {
            var i = void 0;
            if (this.equipTip1.isUsing || (i = this.equipTip1), this.equipTip2.isUsing || (i = this.equipTip2), 
            void 0 != i) {
                i.x = 50, i.y = 700, i.alpha = 1, this.addChild(i), i.isUsing = !0, this.isWait = !0, 
                i.data = this.goodEquipList.pop(), e.Tween.get(i).to({
                    y: 550
                }, 500).call(function() {
                    t.isWait = !1;
                }).wait(1e3).to({
                    alpha: 0
                }, 1e3).call(function() {
                    i.isUsing = !1, t.removeChild(i);
                });
                var n;
                (n = i == this.equipTip1 ? this.equipTip2 : this.equipTip1).isUsing && (e.Tween.removeTweens(n), 
                e.Tween.get(n).to({
                    y: 400,
                    alpha: 0
                }, 1e3).wait(300).call(function() {
                    n.isUsing = !1, t.removeChild(n);
                }));
            }
        }
    }, n.moveTime = 0, n;
}(E);

t(le.prototype, "TipsView"), D.ins().reg(le, V.UI_Tips), window.TipsView = le;

var ue = function(t) {
    function n() {
        var e = t.call(this) || this;
        return e.skinName = "TipsSkin", e;
    }
    return i(n, t), Object.defineProperty(n.prototype, "labelText", {
        get: function() {
            return this._labelText;
        },
        set: function(t) {
            var i = this;
            this.lab && (this._labelText = t, this.lab.textFlow = P.generateTextFlow(this._labelText), 
            this.bg.alpha = 1, this.lab.alpha = 1, this.bg.y = 0, this.lab.verticalCenter = -1, 
            e.Tween.get(this.bg).to({
                y: -30
            }, 500).wait(500).to({
                alpha: 0
            }, 200).call(function() {
                pe.removeFromParent(i);
            }, this), e.Tween.get(this.lab).to({
                verticalCenter: -30
            }, 500).wait(500).to({
                alpha: 0
            }, 200));
        },
        enumerable: !0,
        configurable: !0
    }), n;
}(S);

t(ue.prototype, "TipsItem"), window.TipsItem = ue;

var ce = function(t) {
    function n() {
        var i = t.call(this) || this;
        return i.TIME_THRESHOLD = 2, i._delayOpts = [], e.startTick(i.runCachedFun, i), 
        i;
    }
    return i(n, t), n.ins = function() {
        return t.ins.call(this);
    }, n.prototype.addDelayOptFunction = function(e, t, i, n, r) {
        this._delayOpts.push({
            fun: t,
            funPara: i,
            thisObj: e,
            callBack: n,
            para: r
        });
    }, n.prototype.clear = function() {
        this._delayOpts.length = 0;
    }, n.prototype.runCachedFun = function(t) {
        if (0 == this._delayOpts.length) return !1;
        for (var i, n = e.getTimer(); this._delayOpts.length && ((i = this._delayOpts.shift()).funPara ? i.fun.call(i.thisObj, i.funPara) : i.fun.call(i.thisObj), 
        i.callBack && (void 0 != i.para ? i.callBack.call(i.thisObj, i.para) : i.callBack()), 
        !(e.getTimer() - n > this.TIME_THRESHOLD)); ) ;
        return !1;
    }, n;
}(o);

t(ce.prototype, "DelayOptManager"), window.DelayOptManager = ce;

var pe = function() {
    function t() {}
    return t.createBitmap = function(t) {
        var i = new e.Bitmap(), n = RES.getRes(t);
        return i.texture = n, i;
    }, t.createEuiImage = function(e) {
        var t = new eui.Image(), i = RES.getRes(e);
        return t.source = i, t;
    }, t.createMovieClip = function(e, t, i, n, r) {
        void 0 === i && (i = -1);
        var o = new b();
        return o.playFile(t, i), o.x = n, o.y = r, o;
    }, t.removeFromParent = function(e) {
        e && null != e.parent && e.parent.removeChild(e);
    }, t.drawCir = function(t, i, n, r) {
        return null == t && (t = new e.Shape()), t.graphics.clear(), t.graphics.beginFill(65535, 1), 
        t.graphics.moveTo(0, 0), t.graphics.lineTo(i, 0), t.graphics.drawArc(0, 0, i, 0, n * Math.PI / 180, r), 
        t.graphics.lineTo(0, 0), t.graphics.endFill(), t;
    }, t.drawLine = function(t, i, n, r, o, s, a) {
        return null == t && (t = new e.Shape()), t.graphics.clear(), t.graphics.lineStyle(s, a), 
        t.graphics.moveTo(i, n), t.graphics.lineTo(r, o), t.graphics.endFill(), t;
    }, t.shakeIt = function(i, n, r, o, s) {
        if (void 0 === o && (o = 1), void 0 === s && (s = function() {
            return !0;
        }), i && !(1 > o) && s() && !t.shakingList[i.hashCode]) {
            t.shakingList[i.hashCode] = !0;
            var a = [ {
                anchorOffsetX: 0,
                anchorOffsetY: -n
            }, {
                anchorOffsetX: -n,
                anchorOffsetY: 0
            }, {
                anchorOffsetX: n,
                anchorOffsetY: 0
            }, {
                anchorOffsetX: 0,
                anchorOffsetY: n
            }, {
                anchorOffsetX: 0,
                anchorOffsetY: 0
            } ];
            e.Tween.removeTweens(i);
            var h = r / 5;
            e.Tween.get(i).to(a[0], h).to(a[1], h).to(a[2], h).to(a[3], h).to(a[4], h).call(function() {
                delete t.shakingList[i.hashCode], t.shakeIt(i, n, r, --o);
            }, this);
        }
    }, t.flashingObj = function(t, i, n) {
        void 0 === n && (n = 300);
        !function r() {
            if (i) {
                t.visible = !0;
                var o = 1 == t.alpha ? 0 : 1;
                e.Tween.removeTweens(t), e.Tween.get(t).to({
                    alpha: o
                }, n).call(r);
            } else e.Tween.removeTweens(t), t.alpha = 1, t.visible = !1;
        }();
    }, t.shakingList = {}, t;
}();

t(pe.prototype, "DisplayUtils"), window.DisplayUtils = pe;

var de = function(t) {
    function n() {
        var e = t.call(this) || this;
        return e.loadBgPath = "wxloading_loadbg_jpg", e.loadTxtPath = "wxloading_txt_png", 
        e.barBgPath = "wxloading_barbg_png", e.barEffPath = "wxloading_bareff_png", e.barLinePath = "wxloading_barline_png", 
        e.logoPath = "wxloading_logo_png", e.proMaxWidth = 0, e.barLineMaxWidth = 0, e.type = 0, 
        e.initTypeOne = !1, e.progressSpd = 0, e.countFrameNum = 0, e.startLoadedNum = 0, 
        e.curRealProgress = 0, e.curProgress = 0, e.maxProgress = 100, e.isStop = !1, e.saveTime = 0, 
        e.costTime = 0, e.isForce = !1, e.gameTips = [ "经验副本可得大量经验，挂机闯关免费送元宝", "竞技场排名越高奖励越豪华", "提升修炼境界可免费获得大量元宝材料哦~", "世界BOSS参与可得稀有道具，更有豪华击杀大礼", "每日遭遇战前10玩家可获得稀有称号和道具奖励", "挑战副本可获得大量经验、橙装碎片、宝石碎片", "组队副本可获得，翅膀、坐骑、剑童等传说级装备", "游戏每日微信分享免费送元宝奖励", "武神争霸可得专属称号和披风，还有元宝奖励、帝兵石" ], 
        e.index = 0, e.saveProgress = 0, e;
    }
    return i(n, t), n.prototype.showIosTip = function() {
        this.iosTipTxt || (this.iosTipTxt = new e.TextField(), this.iosTipTxt.size = 25, 
        this.iosTipTxt.lineSpacing = 15, this.iosTipTxt.textColor = 16776960, this.iosTipTxt.stroke = 1, 
        this.iosTipTxt.strokeColor = 0), this.iosTipTxt.text = "由于苹果系统屏蔽部分内容，\n为了更好的游戏体验，\n建议使用安卓机进行体验完整版内容。", 
        this.iosTipTxt.x = (this.curStaget.stageWidth - this.iosTipTxt.width) / 2, this.iosTipTxt.y = this.curStaget.stageHeight - 200, 
        this.addChild(this.iosTipTxt), this.addBottom();
    }, n.prototype.hide = function() {
        null != this.parent && this.parent.removeChild(this), U.ins().remove(this.updateTxt, this);
    }, n.prototype.remove = function() {
        null != this.parent && this.parent.removeChild(this), this.removeEventListener(e.Event.ENTER_FRAME, this.onFrame, this), 
        this.curStaget.removeEventListener(e.Event.RESIZE, this.onResize, this), U.ins().remove(this.updateTxt, this);
    }, n.prototype.addTop = function() {
        this.saveTime = e.getTimer(), this.isStop = !1, this.curStaget.addChild(this), this.loadBg.visible = !0, 
        this.tipTxt.visible = !0, this.barContainer.visible = !0, this.startProgress(), 
        U.ins().isExists(this.updateTxt, this) || U.ins().doTimer(3e3, 0, this.updateTxt, this);
    }, n.prototype.addBottom = function() {
        this.curStaget.addChildAt(this, 0), this.loadBg.visible = !0, this.barContainer.visible = !1, 
        this.tipTxt.visible = !1;
    }, n.prototype.init = function(t) {
        this.curStaget = t, this.loadBg = new e.Bitmap(), this.logo = new e.Bitmap(), this.loadTxt = new e.Bitmap(), 
        this.barBg = new e.Bitmap(), this.barLine = new e.Bitmap(), this.barEff = new e.Bitmap(), 
        this.barContainer = new e.DisplayObjectContainer(), this.tipTxt = new e.TextField(), 
        this.tipTxt.width = 500, this.tipTxt.height = 100, this.tipTxt.size = 16, this.tipTxt.textColor = 8355711, 
        this.tipTxt.lineSpacing = 3, this.tipTxt.bold = !1, this.tipTxt.multiline = !0, 
        this.tipTxt.textAlign = "center", this.tipTxt.text = "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。\n适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。\n文网备字 [2016]M-RPG 4442号\nISBN 978-7-7979-4348-2  新广出审 [2017]728号\n公司名称  ：中文在线数字出版集团股份有限公司", 
        this.verTxt = new e.TextField(), this.verTxt.width = 100, this.verTxt.height = 20, 
        this.verTxt.size = 12, this.verTxt.textColor = 2500134, this.verTxt.textAlign = "right", 
        window.srcVersion && (this.verTxt.text = window.srcVersion.split("-")[0]), this.proTextField = new e.TextField(), 
        this.proTextField.size = 16, this.proTextField.textColor = 13087914, this.proTextField.stroke = 1, 
        this.proTextField.strokeColor = 0, this.setProTxt(0), this.gameTipTxt = new e.TextField(), 
        this.gameTipTxt.size = 18, this.gameTipTxt.textColor = 13087914, this.gameTipTxt.stroke = 1, 
        this.gameTipTxt.strokeColor = 0, this.loadRes(), this.initShow(), this.gameTips = re.randomArr(this.gameTips), 
        this.updateTxt();
    }, n.prototype.updateTxt = function() {
        this.gameTipTxt.text = this.gameTips[this.index], this.gameTipTxt.x = (this.curStaget.stageWidth - this.gameTipTxt.width) / 2, 
        ++this.index >= this.gameTips.length && (this.index = 0);
    }, n.prototype.loadRes = function() {
        var t = this;
        RES.getResAsync(this.loadBgPath, function(e, i) {
            t.loadBg.texture = e;
        }, this), RES.getResAsync(this.logoPath, function(e, i) {
            t.logo.texture = e;
        }, this), RES.getResAsync(this.loadTxtPath, function(e, i) {
            t.loadTxt.texture = e;
        }, this), RES.getResAsync(this.barBgPath, function(i, n) {
            t.barBg.scale9Grid = new e.Rectangle(42, 2, 20, 12), t.barBg.texture = i;
        }, this), RES.getResAsync(this.barLinePath, function(i, n) {
            t.barLine.scale9Grid = new e.Rectangle(2, 1, 16, 8), t.barLine.texture = i;
        }, this), RES.getResAsync(this.barEffPath, function(e, i) {
            t.barEff.texture = e;
        }, this);
    }, n.prototype.initShow = function() {
        this.curStaget.addEventListener(e.Event.RESIZE, this.onResize, this), this.onResize();
    }, n.prototype.startProgress = function() {
        this.setProgress(this.curProgress), this.addEventListener(e.Event.ENTER_FRAME, this.onFrame, this);
    }, n.prototype.onResize = function() {
        this.proMaxWidth = this.curStaget.stageWidth - 100, this.addChild(this.loadBg), 
        this.addChild(this.loadTxt), this.addChild(this.logo), this.addChild(this.barContainer), 
        this.addChild(this.tipTxt), this.addChild(this.verTxt), this.barContainer.addChild(this.barBg), 
        this.barContainer.addChild(this.barLine), this.barContainer.addChild(this.barEff), 
        this.barContainer.addChild(this.proTextField), this.barContainer.addChild(this.gameTipTxt);
        var e = n.loadBgWidth, t = n.loadBgHeight, i = e / t;
        this.curStaget.stageWidth / this.curStaget.stageHeight > i ? (t = this.curStaget.stageWidth * t / e >> 0, 
        e = this.curStaget.stageWidth) : (e = this.curStaget.stageHeight * e / t >> 0, t = this.curStaget.stageHeight), 
        this.loadBg.height = t, this.loadBg.width = e, this.loadBg.x = (this.curStaget.stageWidth - e) / 2, 
        this.loadBg.y = this.curStaget.stageHeight - t, this.loadTxt.x = (this.curStaget.stageWidth - n.loadTxtWidth) / 2, 
        this.loadTxt.y = (this.curStaget.stageHeight - n.loadTxtHeight) / 2, this.tipTxt.x = (this.curStaget.stageWidth - this.tipTxt.width) / 2, 
        this.tipTxt.y = this.curStaget.stageHeight - this.tipTxt.height, this.verTxt.x = this.curStaget.stageWidth - this.verTxt.width - 5, 
        this.verTxt.y = 5;
        this.barBg.width = this.proMaxWidth, this.barBg.x = (this.curStaget.stageWidth - this.proMaxWidth) / 2, 
        this.barBg.y = this.curStaget.stageHeight - 136;
        this.barLine.x = this.barBg.x + 34, this.barLine.y = this.barBg.y + 2, this.barLineMaxWidth = this.proMaxWidth - 68, 
        this.barEff.y = this.barBg.y - 19, this.proTextField.x = (this.curStaget.stageWidth - this.proTextField.width) / 2, 
        this.proTextField.y = this.barBg.y + 1, this.gameTipTxt.x = (this.curStaget.stageWidth - this.gameTipTxt.width) / 2, 
        this.gameTipTxt.y = this.barBg.y - 30, this.iosTipTxt && (this.iosTipTxt.x = (this.curStaget.stageWidth - this.iosTipTxt.width) / 2, 
        this.iosTipTxt.y = this.curStaget.stageHeight - 300, this.addChild(this.iosTipTxt));
    }, n.prototype.onFrame = function(t) {
        var i = e.getTimer() - this.costTime;
        if (this.isForce = i > 200, this.costTime = e.getTimer(), this.countFrameNum++, 
        0 == this.type) {
            var n = 0 - this.startLoadedNum, r = 1 - this.startLoadedNum;
            this.curRealProgress = n / r * this.maxProgress >> 0;
            var o = ((n + 1) / r * this.maxProgress >> 0) - this.curProgress;
            this.isForce ? this.progressSpd = 0 : this.progressSpd = o > 10 ? 10 : 60, this.countFrameNum >= this.progressSpd && (this.countFrameNum = 0, 
            this.setProgress(this.curProgress + 1));
        } else this.type;
    }, n.prototype.backProgress = function(e) {
        this.curProgress > e && (this.curProgress = e), this.setRealProgress(e), this.setProgress(this.curProgress);
    }, n.prototype.setRealProgress = function(e) {
        this.saveProgress = e, this.saveProgress <= 60 && this.curProgress < this.saveProgress && (this.curProgress = this.saveProgress);
    }, n.prototype.setProgress = function(e) {
        e > this.maxProgress && (e = this.maxProgress), e > this.curProgress && (this.curProgress = e), 
        this.setProTxt(this.curProgress), this.barLine.width = this.barLineMaxWidth * this.curProgress / this.maxProgress >> 0, 
        this.barEff.x = this.barLine.x + this.barLine.width - 10;
    }, n.prototype.setProTxt = function(e) {
        this.proTextField.text = me.getLang(me.loadingStr0, e);
    }, Object.defineProperty(n, "instance", {
        get: function() {
            return n._instance || (n._instance = new n()), n._instance;
        },
        enumerable: !0,
        configurable: !0
    }), n.loadBgWidth = 540, n.loadBgHeight = 930, n.loadTxtWidth = 540, n.loadTxtHeight = 324, 
    n;
}(e.DisplayObjectContainer);

t(de.prototype, "WxLoadBar"), window.WxLoadBar = de;

var ge = function() {
    function t() {
        this.serverHost = "", this.verUrl = "", this.servListUrl = "", this.noticeUrl = "", 
        this.lastServUrl = "", this.checkLoginUrl = "", this.loginServUrl = "", this.closeIosUrl = "", 
        this.querybalanceUrl = "", this.paymentUrl = "", this.refreshUserTokenUrl = "", 
        this.resHost = "", this.noticeContent = "", this.timeOutServId = 0, this.isInitLoad = !1, 
        this.isNeedLoginUrl = !1, this.debugServ = null, this.debugServArr = null, this.balance = 0, 
        this.needbalance = 0, this.isLoading = !1, this.isCloseIos = !1, this.shareIndex = 1, 
        this.isOtherResCom = !1, this.serverHost = se.serverHost, this.resHost = se.resAdd, 
        this.verUrl = this.serverHost + "/" + se.pf + "/api/getFlashVersion", this.servListUrl = this.serverHost + "/" + se.pf + "/api/getServList", 
        this.checkLoginUrl = this.serverHost + "/" + se.pf + "/api/checkLogin", this.querybalanceUrl = this.serverHost + "/" + se.pf + "/payment/querybalance", 
        this.paymentUrl = this.serverHost + "/" + se.pf + "/payment", this.refreshUserTokenUrl = this.serverHost + "/" + se.pf + "/api?m=xyx&fn=getUserToken", 
        this.closeIosUrl = this.serverHost + "/" + se.pf + "/api/isBanIOS", this.debugServ = new ve(), 
        this.debugServ.name = "测试服", this.debugServ.server_id = "9999", this.debugServ.server_status = "0", 
        this.debugServ.route_ip = "xlwxgame1.playtai.com", this.debugServ.route_port = "9421", 
        this.debugServArr = [ this.debugServ ], se.isWxgame && this.getVerNum();
    }
    return Object.defineProperty(t.prototype, "defaultServData", {
        get: function() {
            return this._defaultServData;
        },
        set: function(e) {
            this._defaultServData = e, t.instance.setServerInfo(e);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "instance", {
        get: function() {
            return t._instance || (t._instance = new t()), t._instance;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.getQuerybalance = function() {
        var t = this.querybalanceUrl + "?user_token=" + se.user_token;
        this.httpRequestQuerybalance = new e.HttpRequest(), this.httpRequestQuerybalance.addEventListener(e.Event.COMPLETE, this.onCompleteHttpQuerybalance, this), 
        this.httpRequestQuerybalance.addEventListener(e.IOErrorEvent.IO_ERROR, this.onErrorQuerybalance, this), 
        this.httpRequestQuerybalance.open(t, e.HttpMethod.GET), this.httpRequestQuerybalance.send();
    }, t.prototype.onErrorQuerybalance = function(e) {
        console.log(e);
    }, t.prototype.onCompleteHttpQuerybalance = function(e) {
        var i = this;
        try {
            var n = e.currentTarget, r = JSON.parse(n.response);
            console.log("onCompleteHttpQuerybalance"), console.log(r);
            var o = r.errcode;
            0 == o ? (this.balance = r.balance, this.needbalance <= this.balance ? (console.log("余额充足"), 
            this.getPayment(this.needbalance, "yuanbao")) : (console.log("余额不足，调起支付"), window.requestMidasPayment(function() {
                i.getPayment(i.needbalance, "yuanbao");
            }))) : 90009 == o && this.isNeedRefresh ? (this.isNeedRefresh = !1, t.instance.getRefreshUserToken(t.instance.getQuerybalance)) : alert("onCompleteHttpQuerybalance--\x3e" + o + "--" + r.errmsg);
        } catch (e) {
            alert("onCompleteHttpQuerybalance--\x3e" + e);
        }
    }, t.prototype.getPayment = function(t, i) {
        var n = se.openID + "_" + new Date().getTime(), r = this.paymentUrl + "?user_token=" + se.user_token + "&amt=" + t + "&bill_no=" + n + "&actorid=" + Actor.actorID + "&serverid=" + se.srvid + "&channelid=" + se.appid;
        this.httpRequestPayment = new e.HttpRequest(), this.httpRequestPayment.addEventListener(e.Event.COMPLETE, this.onCompleteHttpPayment, this), 
        this.httpRequestPayment.addEventListener(e.IOErrorEvent.IO_ERROR, this.onErrorPayment, this), 
        this.httpRequestPayment.open(r, e.HttpMethod.GET), this.httpRequestPayment.send();
    }, t.prototype.onErrorPayment = function(e) {
        console.log(e);
    }, t.prototype.onCompleteHttpPayment = function(e) {
        try {
            var t = e.currentTarget;
            console.log(t.response);
        } catch (e) {
            alert("onCompleteHttpPayment--\x3e" + e);
        }
    }, t.prototype.getRefreshUserToken = function(t) {
        return n(this, void 0, void 0, function() {
            var i, n, o;
            return r(this, function(r) {
                switch (r.label) {
                  case 0:
                    return this.getRefreshUserTokenFun = t, [ 4, this.getWxJsCode() ];

                  case 1:
                    return i = r.sent(), n = i.code, o = this.refreshUserTokenUrl + "&code=" + n, this.httpRequestRefreshUserToken = new e.HttpRequest(), 
                    this.httpRequestRefreshUserToken.addEventListener(e.Event.COMPLETE, this.onCompleteHttpRefreshUserToken, this), 
                    this.httpRequestRefreshUserToken.addEventListener(e.IOErrorEvent.IO_ERROR, this.onErrorRefreshUserToken, this), 
                    this.httpRequestRefreshUserToken.open(o, e.HttpMethod.GET), this.httpRequestRefreshUserToken.send(), 
                    [ 2 ];
                }
            });
        });
    }, t.prototype.onErrorRefreshUserToken = function(e) {
        console.log(e);
    }, t.prototype.onCompleteHttpRefreshUserToken = function(e) {
        try {
            var t = e.currentTarget, i = JSON.parse(t.response);
            console.log("onCompleteHttpRefreshUserToken"), console.log(i);
            var n = i.errcode;
            0 == n ? (se.user_token = i.user_token, null != this.getRefreshUserTokenFun && (this.getRefreshUserTokenFun(), 
            this.getRefreshUserTokenFun = null)) : alert("onCompleteHttpRefreshUserToken--\x3e" + n);
        } catch (e) {
            alert("onCompleteHttpRefreshUserToken--\x3e" + e);
        }
    }, t.prototype.load = function(e) {
        void 0 === e && (e = null), this.isLoading || (this.isLoading = !0, this.comFun = e, 
        this.getVerData());
    }, t.prototype.getUserCount = function() {
        return n(this, void 0, void 0, function() {
            var t, i, n, o, s, a;
            return r(this, function(r) {
                switch (r.label) {
                  case 0:
                    return se.saveTime = e.getTimer(), t = se.channelid, t = t || 0, console.log("channelid--\x3e" + t), 
                    n = n || 0, se.isWxgameIos() ? [ 4, this.closeIos() ] : [ 3, 2 ];

                  case 1:
                    if (r.sent(), this.isCloseIos) return de.instance.showIosTip(), [ 2 ];
                    r.label = 2;

                  case 2:
                    return o = 0, [ 4, this.getWxJsCode() ];

                  case 3:
                    return s = r.sent(), console.log("getWxJsCode耗时：" + (e.getTimer() - se.saveTime)), 
                    i = s.code, o = 1, se.openID && (i = se.openID, o = 0), a = this.checkLoginUrl + "?userid=" + i + "&channelid=" + t + "&iscode=" + o + "&debug=" + se.debugNum, 
                    window.addParamStr && (a += window.addParamStr), se.saveTime = e.getTimer(), this.httpRequestUserCount = new e.HttpRequest(), 
                    this.httpRequestUserCount.addEventListener(e.Event.COMPLETE, this.onCompleteHttpUserCount, this), 
                    this.httpRequestUserCount.addEventListener(e.IOErrorEvent.IO_ERROR, this.onErrorUserCount, this), 
                    this.httpRequestUserCount.open(a, e.HttpMethod.GET), this.httpRequestUserCount.send(), 
                    [ 2 ];
                }
            });
        });
    }, t.prototype.getLocalUseInfo = function(e) {
        if (console.log("----\x3egetLocalUse"), null != window.wx && null != window.wx.getStorageSync) {
            var t = window.wx.getStorageSync(e);
            return console.log(t), t;
        }
        return "";
    }, t.prototype.setLocalUseInfo = function(e, t) {
        console.log("----\x3esetLocalUseInfo"), null != window.wx && null != window.wx.setStorage && window.wx.setStorage({
            key: e,
            data: t
        });
    }, t.prototype.closeIos = function() {
        var t = this;
        return new Promise(function(i, n) {
            t.httpRequestIosUrl = new e.HttpRequest(), t.httpRequestIosUrl.addEventListener(e.Event.COMPLETE, function(e) {
                try {
                    var n = e.currentTarget, r = JSON.parse(n.response);
                    console.log(r), 0 == r.errCode && 1 == r.data && (t.isCloseIos = !0);
                } catch (e) {
                    alert("onCompleteIosUrl--\x3e" + e);
                }
                i();
            }, t), t.httpRequestIosUrl.addEventListener(e.IOErrorEvent.IO_ERROR, function() {
                i();
            }, t);
            var r = t.closeIosUrl;
            if (window.addParamStr) {
                var o = window.addParamStr;
                r += o = "?" + o.slice(1);
            }
            console.log(r), t.httpRequestIosUrl.open(r, e.HttpMethod.GET), t.httpRequestIosUrl.send();
        });
    }, t.prototype.getWxJsCode = function() {
        return new Promise(function(e, t) {
            console.log("----\x3egetWxJsCode"), null != window.wx ? window.wx.login({
                success: function(t) {
                    console.log(t), e(t);
                },
                fail: function(e) {
                    console.log(e);
                }
            }) : e({});
        });
    }, t.prototype.onErrorUserCount = function(t) {
        console.log(t), e.setTimeout(this.getUserCount, this, 1e3);
    }, t.prototype.onCompleteHttpUserCount = function(i) {
        console.log("onCompleteHttpUserCount耗时：" + (e.getTimer() - se.saveTime));
        try {
            var n = i.currentTarget, r = JSON.parse(n.response);
            if (console.log("onCompleteHttpUserCount"), console.log(r), 0 == r.errCode) {
                var o = r.data;
                null != o.paraUrl ? (se.isNewCount = !0, se.parseUrl(o.paraUrl), se.parseUrl(window.paraUrl), 
                c.getIns().report(c.merged), _.ins().runScene($)) : (this.loginServUrl = o.loginUrl, 
                this.noticeContent = o.notice, null != this.noticeContent && (this.noticeContent = this.noticeContent.replace(/\<br \/\>/g, "\n")), 
                se.user_token = o.user_token, se.parseUrl(this.loginServUrl), se.parseUrl(window.paraUrl), 
                se.openID = se.urlParam.account, se.debug ? (se.srvid = parseInt(this.debugServ.server_id), 
                t.instance.defaultServData = this.debugServ) : t.instance.defaultServData = o.default_server, 
                D.ins().open(Ee), this.isInitLoad || (de.instance.hide(), this.isInitLoad = !0)), 
                console.log("setLocalUseInfo--\x3e" + se.openID + "---" + se.channelid), this.timeOutServId > 0 && this.loginServ(this.timeOutServId);
            } else alert(n.response);
            this.setLocalUseInfo("old", "1");
        } catch (e) {
            alert("onCompleteHttpUserCount--\x3e" + e);
        }
    }, t.prototype.loginServ = function(t) {
        this.timeOutServId = t;
        var i = "" + this.loginServUrl + t;
        this.httpRequestLoginServ = new e.HttpRequest(), this.httpRequestLoginServ.addEventListener(e.Event.COMPLETE, this.onCompleteHttpLoginServ, this), 
        this.httpRequestLoginServ.addEventListener(e.IOErrorEvent.IO_ERROR, this.onErrorLoginServ, this), 
        this.httpRequestLoginServ.open(i, e.HttpMethod.GET), this.httpRequestLoginServ.send();
    }, t.prototype.onErrorLoginServ = function(t) {
        console.log(t), e.setTimeout(this.loginServ, this, 3e3);
    }, t.prototype.onCompleteHttpLoginServ = function(t) {
        try {
            var i = t.currentTarget, n = JSON.parse(i.response);
            console.log("onCompleteHttpLoginServ--\x3e"), console.log(n), 0 == n.errCode ? (this.timeOutServId = 0, 
            se.parseUrl(n.data.paraUrl), se.parseUrl(window.paraUrl), X.ins().connectServer()) : 1002 == n.errCode && e.setTimeout(this.getUserCount, this, 1e3);
        } catch (e) {
            alert("LoginServ--\x3e" + t.currentTarget.response + ">>err:" + e);
        }
    }, t.prototype.getLastServ = function() {
        this.lastServUrl = this.serverHost + "/" + se.pf + "/api/getLastServ?account=" + se.openID, 
        this.httpRequestLastServ = new e.HttpRequest(), this.httpRequestLastServ.addEventListener(e.Event.COMPLETE, this.onCompleteHttpLastServ, this), 
        this.httpRequestLastServ.addEventListener(e.IOErrorEvent.IO_ERROR, this.onErrorLastServ, this), 
        this.httpRequestLastServ.open(this.lastServUrl, e.HttpMethod.GET), this.httpRequestLastServ.send();
    }, t.prototype.onErrorLastServ = function(t) {
        console.log(t), e.setTimeout(this.getLastServ, this, 3e3);
    }, t.prototype.onCompleteHttpLastServ = function(e) {
        try {
            var t = e.currentTarget, i = JSON.parse(t.response);
            if (console.log("onCompleteHttpLastServ"), console.log(i), 0 == i.errCode) {
                var n = i.data;
                se.debug ? (this.defaultServData = this.debugServ, this.lastServerData = this.debugServArr) : (this.defaultServData = n.default_server, 
                this.lastServerData = n.last_server), N.instance.dispatchEvent(x.SERVERECHOOSE_LASTSERV_CHANGE);
            }
        } catch (e) {
            alert("onCompleteHttpLastServ--\x3e" + e);
        }
    }, t.prototype.getNoticeContent = function() {
        console.log("----\x3egetNoticeContent"), this.noticeUrl = this.serverHost + "/" + se.pf + "/api/getNotice?channelid=" + se.channelid, 
        this.httpRequestNoticeContent = new e.HttpRequest(), this.httpRequestNoticeContent.addEventListener(e.Event.COMPLETE, this.onCompleteHttpNotice, this), 
        this.httpRequestNoticeContent.addEventListener(e.IOErrorEvent.IO_ERROR, this.onErrorNotice, this), 
        this.httpRequestNoticeContent.open(this.noticeUrl, e.HttpMethod.GET), this.httpRequestNoticeContent.send();
    }, t.prototype.onErrorNotice = function(t) {
        console.log(t), e.setTimeout(this.getNoticeContent, this, 3e3);
    }, t.prototype.onCompleteHttpNotice = function(e) {
        try {
            var t = e.currentTarget, i = JSON.parse(t.response);
            0 == i.errCode && (this.noticeContent = i.data, this.noticeContent = this.noticeContent.replace(/\<br \/\>/g, "\n"), 
            N.instance.dispatchEvent(x.SERVERECHOOSE_NOTICE_CONTENT));
        } catch (e) {
            alert("onCompleteHttpNotice--\x3e" + e);
        }
    }, t.prototype.getServList = function() {
        console.log("----\x3egetServList"), this.httpRequestServList = new e.HttpRequest(), 
        this.httpRequestServList.addEventListener(e.Event.COMPLETE, this.onCompleteHttpServList, this), 
        this.httpRequestServList.addEventListener(e.IOErrorEvent.IO_ERROR, this.onErrorServList, this), 
        this.httpRequestServList.open(this.servListUrl, e.HttpMethod.GET), this.httpRequestServList.send();
    }, t.prototype.onErrorServList = function(t) {
        console.log(t), e.setTimeout(this.getServList, this, 3e3);
    }, t.prototype.onCompleteHttpServList = function(e) {
        try {
            var t = e.currentTarget, i = JSON.parse(t.response);
            0 == i.errCode && (se.debug ? this.servListData = this.debugServArr : this.servListData = i.data, 
            N.instance.dispatchEvent(x.SERVERECHOOSE_ALLSERV_CHANGE));
        } catch (e) {
            alert("onCompleteHttpServList--\x3e" + e);
        }
    }, t.prototype.getVerNum = function() {
        console.log("getVerNum");
        var t = this.verUrl + "?serverid=1";
        this.httpRequestVerNum = new e.HttpRequest(), this.httpRequestVerNum.addEventListener(e.Event.COMPLETE, this.onCompleteHttpVerNum, this), 
        this.httpRequestVerNum.addEventListener(e.IOErrorEvent.IO_ERROR, this.onErrorVerNum, this), 
        this.httpRequestVerNum.open(t, e.HttpMethod.GET), this.httpRequestVerNum.send();
    }, t.prototype.onErrorVerNum = function(t) {
        console.log(t), e.setTimeout(this.getVerNum, this, 3e3);
    }, t.prototype.onCompleteHttpVerNum = function(e) {
        try {
            var t = e.currentTarget, i = JSON.parse(t.response), n = parseInt(i.data);
            this.shareIndex = n, console.log("----\x3egetVerNum:" + n), se.sharePic = "wxshare/" + this.shareIndex + "/share.jpg", 
            this.getShareContent(), this.getShareStory();
        } catch (e) {
            alert("onCompleteHttpVerNum--\x3e" + e);
        }
    }, t.prototype.getShareStory = function() {
        console.log("getShareStory");
        var t = se.resAdd + "wxshare/" + this.shareIndex + "/story.txt";
        console.log(t), this.httpRequestStory = new e.HttpRequest(), this.httpRequestStory.responseType = e.HttpResponseType.TEXT, 
        this.httpRequestStory.addEventListener(e.Event.COMPLETE, this.onCompleteHttpStory, this), 
        this.httpRequestStory.addEventListener(e.IOErrorEvent.IO_ERROR, this.onErrorStory, this), 
        this.httpRequestStory.open(t, e.HttpMethod.GET), this.httpRequestStory.send();
    }, t.prototype.onErrorStory = function(t) {
        console.log(t), e.setTimeout(this.getShareStory, this, 3e3);
    }, t.prototype.onCompleteHttpStory = function(e) {
        try {
            var t = e.currentTarget;
            se.storyContent = decodeURI(t.response), N.instance.dispatchEvent(x.SERVERECHOOSE_STORY_CONTENT);
        } catch (e) {
            alert("onCompleteHttpStory--\x3e" + e);
        }
    }, t.prototype.getShareContent = function() {
        console.log("getShareContent");
        var t = se.resAdd + "wxshare/" + this.shareIndex + "/share.txt";
        console.log(t), this.httpRequestShare = new e.HttpRequest(), this.httpRequestShare.responseType = e.HttpResponseType.TEXT, 
        this.httpRequestShare.addEventListener(e.Event.COMPLETE, this.onCompleteHttpShare, this), 
        this.httpRequestShare.addEventListener(e.IOErrorEvent.IO_ERROR, this.onErrorShare, this), 
        this.httpRequestShare.open(t, e.HttpMethod.GET), this.httpRequestShare.send();
    }, t.prototype.onErrorShare = function(t) {
        console.log(t), e.setTimeout(this.getShareContent, this, 3e3);
    }, t.prototype.onCompleteHttpShare = function(e) {
        try {
            var t = e.currentTarget;
            se.shareContent = decodeURI(t.response), console.log("----\x3eonCompleteHttpShare:" + se.shareContent), 
            se.setShareInfo();
        } catch (e) {
            alert("onCompleteHttpShare--\x3e" + e);
        }
    }, t.prototype.getVerData = function() {
        console.log("----\x3egetVerData"), console.log("verNum:" + se.v), de.instance.setRealProgress(10), 
        this.httpRequestVerData = new e.HttpRequest(), this.httpRequestVerData.addEventListener(e.Event.COMPLETE, this.onCompleteHttpVerData, this), 
        this.httpRequestVerData.addEventListener(e.IOErrorEvent.IO_ERROR, this.onErrorVerData, this), 
        this.httpRequestVerData.open(this.getVersionPath(se.v + ".json"), e.HttpMethod.GET), 
        this.httpRequestVerData.send();
    }, t.prototype.onErrorVerData = function(t) {
        console.log(t), e.setTimeout(this.getVerData, this, 3e3);
    }, t.prototype.onCompleteHttpVerData = function(e) {
        var t = e.currentTarget;
        this.verData = JSON.parse(t.response), window.verData = this.verData, null != window.delClientFile && window.delClientFile(this.verData), 
        y.ins().resVersionData = this.verData, de.instance.setRealProgress(20), this.loadConfig();
    }, t.prototype.getSubPackOne = function() {
        var t = this;
        if (!this.isLoadSubPackOne) if (this.isLoadSubPackOne = !0, console.log("----\x3egetSubPackOne"), 
        window.wx && window.wx.loadSubpackage) {
            console.log("----\x3egetSubPackOne---start");
            var i = e.getTimer();
            window.wx.loadSubpackage({
                name: "one",
                success: function() {
                    console.log("----\x3egetSubPackOne---success--" + (e.getTimer() - i)), t.initData();
                },
                fail: function() {
                    t.isLoadSubPackOne = !1, e.setTimeout(t.getSubPackOne, t, 1e3), console.log("----\x3egetSubPackOne---fail");
                },
                complete: function() {
                    console.log("----\x3egetSubPackOne---complete");
                }
            }).onProgressUpdate(function(e) {
                var t = 60 + ((e.totalBytesWritten || e.totalBytesWriten) / e.totalBytesExpectedToWrite * 10 >> 0);
                de.instance.setRealProgress(t);
            });
        } else this.initData();
    }, t.prototype.initData = function() {
        return n(this, void 0, void 0, function() {
            var e, t;
            return r(this, function(i) {
                switch (i.label) {
                  case 0:
                    f.initData(), e = 10, t = 1, i.label = 1;

                  case 1:
                    return e >= t ? [ 4, this.initCfg(t, e) ] : [ 3, 4 ];

                  case 2:
                    i.sent(), i.label = 3;

                  case 3:
                    return t++, [ 3, 1 ];

                  case 4:
                    return de.instance.parent || (de.instance.isStop = !0), null != this.comFun && this.comFun(), 
                    de.instance.setRealProgress(80), [ 2 ];
                }
            });
        });
    }, t.prototype.loadConfig = function() {
        return n(this, void 0, void 0, function() {
            var t;
            return r(this, function(i) {
                switch (i.label) {
                  case 0:
                    console.log("----\x3eloadConfig"), i.label = 1;

                  case 1:
                    return i.trys.push([ 1, 6, , 7 ]), [ 3, 3 ];

                  case 2:
                    return i.sent(), [ 3, 5 ];

                  case 3:
                    return [ 4, RES.loadConfig(y.ins().getVersionUrl("default.res.json"), "resource/") ];

                  case 4:
                    i.sent(), i.label = 5;

                  case 5:
                    return [ 3, 7 ];

                  case 6:
                    return t = i.sent(), console.log("loadfaile:" + se.resPath), e.setTimeout(this.loadConfig, this, 1e3), 
                    [ 2 ];

                  case 7:
                    return de.instance.setRealProgress(25), this.getOtherRes(), [ 2 ];
                }
            });
        });
    }, t.prototype.getOtherRes = function() {
        return n(this, void 0, void 0, function() {
            var e, t, i;
            return r(this, function(n) {
                switch (n.label) {
                  case 0:
                    return console.log("----\x3egetOtherRes--start"), f.isLoading = !0, e = [ se.loadGroupResName, 0, new fe() ], 
                    [ 4, RES.loadGroup.apply(this, e) ];

                  case 1:
                    return n.sent(), [ 4, this.loadTheme() ];

                  case 2:
                    n.sent(), console.log("----\x3egetOtherRes--over"), this.isOtherResCom = !0, t = 5, 
                    i = 1, n.label = 3;

                  case 3:
                    return t >= i ? [ 4, this.initExml(i, t, y.ins().exmlInitArr2) ] : [ 3, 6 ];

                  case 4:
                    n.sent(), n.label = 5;

                  case 5:
                    return i++, [ 3, 3 ];

                  case 6:
                    i = 1, n.label = 7;

                  case 7:
                    return t >= i ? [ 4, this.initExml(i, t, y.ins().exmlInitArr1) ] : [ 3, 10 ];

                  case 8:
                    n.sent(), n.label = 9;

                  case 9:
                    return i++, [ 3, 7 ];

                  case 10:
                    return de.instance.setRealProgress(60), this.getSubPackOne(), [ 2 ];
                }
            });
        });
    }, t.prototype.initCfg = function(t, i) {
        var n = this;
        return new Promise(function(r, o) {
            for (var s = e.getTimer(), a = y.ins().cfgInitArr, h = a.length, l = Math.ceil(h / i * t), u = Math.floor(h / i * (t - 1)); l > u; u++) GlobalConfig.ins().getJson(a[u]);
            console.log("耗时cfg：" + (e.getTimer() - s)), e.setTimeout(function() {
                r();
            }, n, 10);
        });
    }, t.prototype.initExml = function(t, i, n) {
        var r = this;
        return new Promise(function(o, s) {
            if ("undefined" != typeof generateEUI2) {
                for (var a = e.getTimer(), h = n.length, l = Math.ceil(h / i * t), u = Math.floor(h / i * (t - 1)); l > u; u++) e.getTimer(), 
                window.JSONParseClass.getData(n[u]);
                console.log("耗时exml：" + (e.getTimer() - a));
            }
            e.setTimeout(function() {
                o();
            }, r, 10);
        });
    }, t.prototype.loadTheme = function() {
        var e = this;
        return new Promise(function(t, i) {
            new eui.Theme(se.thmPath, p.ins().getStage()).addEventListener(eui.UIEvent.COMPLETE, function() {
                t();
            }, e);
        });
    }, t.prototype.getVersionPath = function(e) {
        return this.resHost + se.v + "/" + e;
    }, t.prototype.setServerInfo = function(e) {
        null != e && (se.srvid = parseInt(e.server_id), console.log("srvid：" + se.srvid), 
        se.serverIP = e.route_ip, console.log("srvaddr：" + se.serverIP), se.serverPort = parseInt(e.route_port), 
        console.log("srvport：" + se.serverPort));
    }, t.prototype.getServerNameList = function() {
        var e = [];
        if (e.push({
            name: me.serverchooseStr1
        }), null != this.servListData && this.servListData.length > 0) for (var t = Math.ceil(this.servListData.length / 100), i = t; i > 0; i--) e.push({
            name: me.getLang(me.serverchooseStr2, 100 * (i - 1) + 1, 100 * i)
        });
        return e;
    }, t.prototype.getSubAllServerList = function(e) {
        var t = [];
        if (null != this.servListData) {
            var i = Math.ceil(this.servListData.length / 100), n = 100 * (i - e), r = 100 * (i - e + 1);
            (t = this.servListData.slice(n, r)).reverse();
        }
        return t;
    }, t.account = "account", t.channelid = "channelid", t;
}();

t(ge.prototype, "WxgameVerData"), window.WxgameVerData = ge;

var fe = function() {
    function e() {
        this.judge = {};
    }
    return e.prototype.onProgress = function(e, t) {
        "undefined" != typeof generateEUI2 && (!this.judge.eui0_zz && RES.getRes("eui0_zz") ? (this.judge.eui0_zz = !0, 
        window.JSONParseClass.setZipData0(RES.getRes("eui0_zz"), [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l" ]), 
        window.eui0_zz = !0) : !this.judge.eui1_zz && RES.getRes("eui1_zz") ? (this.judge.eui1_zz = !0, 
        window.JSONParseClass.setZipData1(RES.getRes("eui1_zz")), window.eui1_zz = !0) : !this.judge.eui_json && RES.getRes("eui_json") && (this.judge.eui_json = !0, 
        window.JSONParseClass.parseSkinMap(RES.getRes("eui_json")))), !this.judge.map_zz && RES.getRes("map_zz") ? (this.judge.map_zz = !0, 
        window.map_zz = new JSZip(RES.getRes("map_zz"))) : !this.judge.config0_zz && RES.getRes("config0_zz") ? (this.judge.config0_zz = !0, 
        window.config0_zz = new JSZip(RES.getRes("config0_zz"))) : !this.judge.config1_zz && RES.getRes("config1_zz") ? (this.judge.config1_zz = !0, 
        window.config1_zz = new JSZip(RES.getRes("config1_zz"))) : !this.judge.config2_zz && RES.getRes("config2_zz") && (this.judge.config2_zz = !0, 
        window.config2_zz = new JSZip(RES.getRes("config2_zz"))), console.log("---\x3eotherRes:" + e + "/" + t);
        var i = 25 + (e / t * 30 >> 0);
        de.instance.setRealProgress(i);
    }, e.prototype.onCancel = function() {
        console.log("load fail");
    }, e;
}();

t(fe.prototype, "PreloadTaskReporter"), window.PreloadTaskReporter = fe;

var me = function() {
    function e() {
        this._data = {};
    }
    return e.getLang = function(e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        if (t.length > 0) for (var n = 0, r = t.length; r > n; n++) e = e.replace("{" + n + "}", t[n]);
        return e;
    }, e.loadingStr0 = "正在进入游戏    {0}%", e.serverchooseStr0 = "{0}  <u>选服</u>", e.serverchooseStr1 = "最近登录", 
    e.serverchooseStr2 = "{0} - {1}区", e;
}();

t(me.prototype, "CreatLangManager"), window.CreatLangManager = me;

var Se = function(e) {
    function t() {
        return e.call(this) || this;
    }
    return i(t, e), t.prototype.onEnter = function() {
        e.prototype.onEnter.call(this), this.addLayer(V.UI_CreatRole), de.instance.init(p.ins().getStage()), 
        "1" == ge.instance.getLocalUseInfo("old") ? de.instance.addBottom() : de.instance.addTop(), 
        ge.instance.getUserCount();
    }, t.prototype.onExit = function() {
        e.prototype.onExit.call(this);
    }, t;
}(m);

t(Se.prototype, "ServListScene"), window.ServListScene = Se;

var ve = function() {
    return function() {};
}();

t(ve.prototype, "ServerListVo"), window.ServerListVo = ve;

var Ee = function(t) {
    function n() {
        var e = t.call(this) || this;
        return e.percentWidth = 100, e.percentHeight = 100, e.skinName = "ServerChooseEnterWinSkin", 
        e;
    }
    return i(n, t), n.prototype.open = function() {
        window.srcVersion && (this.verTxt.text = window.srcVersion.split("-")[0]), this.addTouchEvent(this.barGroup, this.onOpenSelect), 
        this.addTouchEvent(this.enterBtn, this.onEnter), this.addTouchEvent(this.noticeBtn, this.onOpenNotice), 
        this.addTouchEvent(this.storyBtn, this.onOpenStory), p.ins().getStage().addEventListener(e.Event.RESIZE, this.onResize, this), 
        N.instance.addEventListener(x.SERVERECHOOSE_LASTSERV_CHANGE, this.updateVo, this), 
        N.instance.addEventListener(x.CLOSE_WIN, this.onCloseWin, this), N.instance.addEventListener(x.SERVERECHOOSE_SELECT_UPDATE, this.updateVo, this), 
        this.onResize(), this.updateVo(), this.show(!0);
    }, n.prototype.close = function() {
        this.removeEvents(), p.ins().getStage().removeEventListener(e.Event.RESIZE, this.onResize, this), 
        N.instance.removeEventListener(x.SERVERECHOOSE_LASTSERV_CHANGE, this.updateVo, this), 
        N.instance.removeEventListener(x.CLOSE_WIN, this.onCloseWin, this), N.instance.removeEventListener(x.SERVERECHOOSE_SELECT_UPDATE, this.updateVo, this);
    }, n.prototype.onOpenNotice = function(e) {
        this.show(!1), D.ins().open(Te);
    }, n.prototype.onOpenStory = function(e) {
        ge.instance.setLocalUseInfo("xlws_story", ge.instance.shareIndex.toString()), this.show(!1), 
        D.ins().open(Re), this.redTip.visible = !1;
    }, n.prototype.onCloseWin = function() {
        this.show(!0);
    }, n.prototype.show = function(e) {
        this.barGroup.visible = e, this.curServerTxt.visible = e, this.enterBtn.visible = e, 
        this.noticeBtn.visible = e, this.storyBtn.visible = e, this.redTip.visible = !(ge.instance.getLocalUseInfo("xlws_story") == ge.instance.shareIndex.toString());
    }, n.prototype.onResize = function() {
        var e = de.loadBgWidth, t = de.loadBgHeight, i = e / t, n = p.ins().getStage();
        n.stageWidth / n.stageHeight > i ? (t = n.stageWidth * t / e >> 0, e = n.stageWidth) : (e = n.stageHeight * e / t >> 0, 
        t = n.stageHeight), this.loadBg.height = t, this.loadBg.width = e, this.loadBg.x = (n.stageWidth - e) / 2, 
        this.loadBg.y = n.stageHeight - t;
    }, n.prototype.updateVo = function() {
        var t = ge.instance.defaultServData;
        null != t && (this.curServerTxt.textFlow = new e.HtmlTextParser().parser(me.getLang(me.serverchooseStr0, t.name)));
    }, n.prototype.onEnter = function(e) {
        var t = ge.instance.defaultServData;
        null != t && ("3" == t.server_status ? alert("服务器正在优化更新") : (D.ins().close(n), ge.instance.isNeedLoginUrl = !0, 
        _.ins().runScene($), de.instance.addTop(), de.instance.setRealProgress(10)));
    }, n.prototype.onOpenSelect = function(e) {
        null != ge.instance.defaultServData && (ge.instance.getLastServ(), ge.instance.getServList(), 
        this.show(!1), D.ins().open(_e));
    }, n;
}(E);

t(Ee.prototype, "ServerChooseEnterWin"), D.ins().reg(Ee, V.UI_CreatRole), window.ServerChooseEnterWin = Ee;

var ye = function(e) {
    function t() {
        return e.call(this) || this;
    }
    return i(t, e), t.prototype.dataChanged = function() {
        if (null != this.data.name) {
            var e = this.data;
            this.curServerTxt.text = e.name, this.curServerState.source = "serverchoose_light" + e.server_status;
        }
    }, t;
}(eui.ItemRenderer);

t(ye.prototype, "ServerChooseItem"), window.ServerChooseItem = ye;

var _e = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.skinName = "ServerChooseListWinSkin", t;
    }
    return i(t, e), t.prototype.init = function() {}, t.prototype.open = function() {
        this.addTouchEvent(this.tab, this.onTab), this.addTouchEvent(this.backBtn, this.onBack), 
        this.addEvent(eui.ItemTapEvent.ITEM_TAP, this.list, this.onClickSkillMenu), N.instance.addEventListener(x.SERVERECHOOSE_LASTSERV_CHANGE, this.updateInfo, this), 
        N.instance.addEventListener(x.SERVERECHOOSE_ALLSERV_CHANGE, this.updateInfo, this), 
        this.list.itemRenderer = ye, this.updateInfo();
    }, t.prototype.close = function() {
        N.instance.removeEventListener(x.SERVERECHOOSE_LASTSERV_CHANGE, this.updateInfo, this), 
        N.instance.removeEventListener(x.SERVERECHOOSE_ALLSERV_CHANGE, this.updateInfo, this), 
        this.removeEvents();
    }, t.prototype.onBack = function(e) {
        D.ins().close(t);
    }, t.prototype.onClickSkillMenu = function(e) {
        ge.instance.defaultServData = e.item, N.instance.dispatchEvent(x.SERVERECHOOSE_SELECT_UPDATE), 
        D.ins().close(t);
    }, t.prototype.onTab = function(e) {
        this.updateSelect(this.tab.selectedIndex);
    }, t.prototype.updateInfo = function() {
        this.tab.dataProvider = new eui.ArrayCollection(ge.instance.getServerNameList());
        var e = ge.instance.lastServerData;
        null != e && (this.tab.selectedIndex = e.length > 0 ? 0 : 1, this.updateSelect(this.tab.selectedIndex));
    }, t.prototype.updateSelect = function(e) {
        var t = 0 == e ? ge.instance.lastServerData : ge.instance.getSubAllServerList(e);
        t = t || [], this.list.dataProvider = new eui.ArrayCollection(t);
    }, t;
}(E);

t(_e.prototype, "ServerChooseListWin"), D.ins().reg(_e, V.UI_CreatRole), window.ServerChooseListWin = _e;

var Te = function(t) {
    function n() {
        var e = t.call(this) || this;
        return e.skinName = "ServerChooseNoticeWinSkin", e;
    }
    return i(n, t), n.prototype.open = function() {
        this.addTouchEvent(this, this.onTabClose), N.instance.addEventListener(x.SERVERECHOOSE_NOTICE_CONTENT, this.updateNotice, this), 
        this.updateNotice();
    }, n.prototype.close = function() {
        this.removeEvents(), N.instance.removeEventListener(x.SERVERECHOOSE_NOTICE_CONTENT, this.updateNotice, this);
    }, n.prototype.updateNotice = function() {
        this.curServerTxt.textFlow = new e.HtmlTextParser().parser(ge.instance.noticeContent);
    }, n.prototype.onTabClose = function(e) {
        this.scrol.verticalScrollBar && this.scrol.verticalScrollBar.visible || D.ins().close(n);
    }, n;
}(E);

t(Te.prototype, "ServerChooseNoticeWin"), D.ins().reg(Te, V.UI_CreatRole), window.ServerChooseNoticeWin = Te;

var Re = function(t) {
    function n() {
        var e = t.call(this) || this;
        return e.skinName = "ServerChooseStoryWinSkin", e;
    }
    return i(n, t), n.prototype.open = function() {
        this.addTouchEvent(this, this.onTabClose), N.instance.addEventListener(x.SERVERECHOOSE_STORY_CONTENT, this.updateNotice, this), 
        this.updateNotice();
    }, n.prototype.close = function() {
        this.removeEvents(), N.instance.removeEventListener(x.SERVERECHOOSE_STORY_CONTENT, this.updateNotice, this);
    }, n.prototype.updateNotice = function() {
        var t = this;
        e.setTimeout(function() {
            t.curServerTxt.textFlow = new e.HtmlTextParser().parser(se.storyContent);
        }, this, 100);
    }, n.prototype.onTabClose = function(e) {
        this.scrol.verticalScrollBar && this.scrol.verticalScrollBar.visible || D.ins().close(n);
    }, n;
}(E);

t(Re.prototype, "ServerChooseStoryWin"), D.ins().reg(Re, V.UI_CreatRole), window.Main = g, 
window.ServerChooseStoryWin = Re;

var we = function() {
    function t() {
        se.isWxgame && U.ins().doTimer(3e3, 1, this.startCatch, this);
    }
    return t.prototype.startCatch = function() {
        p.ins().getStage().addEventListener(e.Event.ENTER_FRAME, this.onEnterFrame, this);
    }, t.prototype.onEnterFrame = function() {
        if (!window.isFileSaveing && window.catchArr) {
            var t = window.catchArr, i = t.length;
            if (0 != i && 5 > e.getTimer() - U.ins().currTime) {
                var n = t[i - 1];
                if (window.catchDataDic[n]) {
                    if (n.indexOf(".zz") > -1) {
                        var r = n.split("/"), o = r[r.length - 1];
                        if (o = o.replace(".", "_"), !window[o]) return;
                    }
                    t.pop(), null != window.fileSave && window.fileSave(n);
                }
            }
        }
    }, Object.defineProperty(t, "instance", {
        get: function() {
            return t._instance || (t._instance = new t()), t._instance;
        },
        enumerable: !0,
        configurable: !0
    }), t;
}();

t(we.prototype, "WxFileSaveManager"), window.WxFileSaveManager = we;

var Ce = function() {
    function t() {
        this._pool = new Array(), this._handlers = new be(), this._currTimer = e.getTimer(), 
        this._currFrame = 0, this._count = 0, this._index = 0, this._handlersArr = [], this.inter = 0, 
        this._cheatTimes = 0, this._cheatNums = 0, this._cheatTipInter = 0, e.MainContext.instance.stage.addEventListener(e.Event.ENTER_FRAME, this.onEnterFrame, this);
    }
    return Object.defineProperty(t.prototype, "currFrame", {
        get: function() {
            return this._currFrame;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t, "instance", {
        get: function() {
            return null == t._instance && (t._instance = new t()), t._instance;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.countdown = function() {
        N.instance.dispatchEvent("TIME_ONE_SECOND");
    }, t.prototype.onEnterFrame = function(i) {
        this._currFrame += 1, this.inter = this._currTimer, this._currTimer = e.getTimer(), 
        this.inter = this._currTimer - this.inter;
        for (var n = null, r = 0, o = null, s = null, a = 0, h = this._handlers.map; a < h.length; a++) {
            var l = h[a], u = l[0], c = l[2];
            if (e.getTimer() - this._currTimer > 50) break;
            (r = (n = this._handlers.getItem(u, c)).userFrame ? this._currFrame : this._currTimer) >= n.exeTime && (o = n.method, 
            s = n.args, n.repeat ? (n.exeTime = r + n.delay, o.apply(n.thisObject, s)) : (this.clearTimer(n.thisObject, u), 
            o.apply(n.thisObject, s)));
        }
        for (var p = this._handlersArr.length - 1; p > -1; p--) n = this._handlersArr[p], 
        e.getTimer() - this._currTimer > 50 && n.priority != t.priority2 && n.priority != t.priority3 && n.priority != t.priority6 || (r = n.userFrame ? this._currFrame : this._currTimer) >= n.exeTime && (o = n.method, 
        s = n.args, n.exeTime = r + n.delay, o.apply(n.thisObject, s));
    }, t.prototype.resetCheat = function() {
        t.isCheat = !1;
    }, t.prototype.create = function(t, i, n, r, o, s, a, h) {
        void 0 === s && (s = null), void 0 === a && (a = !0), void 0 === h && (h = 0);
        var l;
        if (a ? (this.clearTimer(r, o), l = o) : l = this._index++, 1 > n) return o.apply(r, s), 
        -1;
        var u = this._pool.length > 0 ? this._pool.pop() : new Ie();
        return u.userFrame = t, u.repeat = i, u.delay = n, u.thisObject = r, u.method = o, 
        u.args = s, u.exeTime = n + (t ? this._currFrame : e.getTimer()), h > 0 ? (u.priority = h, 
        -1 == this._handlersArr.indexOf(u) && (this._handlersArr.push(u), this._handlersArr.sort(this.complareArr))) : this._handlers.setItem(l, u, r), 
        this._count++, l;
    }, t.prototype.complareArr = function(e, t) {
        return e.priority - t.priority;
    }, t.prototype.doFrameOnce = function(e, t, i, n, r) {
        return void 0 === n && (n = null), void 0 === r && (r = !0), this.create(!0, !1, e, t, i, n, r);
    }, t.prototype.doFrameLoop = function(e, t, i, n, r, o) {
        return void 0 === n && (n = null), void 0 === r && (r = !0), void 0 === o && (o = 0), 
        this.create(!0, !0, e, t, i, n, r, o);
    }, Object.defineProperty(t.prototype, "count", {
        get: function() {
            return this._count;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.clearTimer = function(e, t, i) {
        void 0 === i && (i = !1);
        var n = this._handlers.getItem(t, e);
        null != n && (i && n.method.apply(e, n.args), this._handlers.delItem(t, e), n.clear(), 
        this._pool[this._pool.length] = n, this._count--);
    }, t.prototype.hasTimer = function(e, t) {
        return !!this._handlers.getItem(t, e);
    }, Object.defineProperty(t.prototype, "currTimer", {
        get: function() {
            return this._currTimer;
        },
        enumerable: !0,
        configurable: !0
    }), t.isCheat = !1, t.isServerCheat = !1, t.priority0 = 999999, t.priority1 = 999, 
    t.priority2 = 1e3, t.priority3 = 997, t.priority4 = 2, t.priority5 = 99, t.priority6 = 999998, 
    t.priority7 = 9998, t.priority8 = 1, t.priority9 = 1e6, t;
}();

t(Ce.prototype, "FrameManager"), window.FrameManager = Ce;

var Ie = function() {
    function e() {
        this.delay = 0, this.repeat = !1, this.userFrame = !1, this.exeTime = 0, this.method = null, 
        this.priority = 0, this.thisObject = null;
    }
    return e.prototype.clear = function() {
        this.method = null, this.args = null;
    }, e;
}();

t(Ie.prototype, "FrameHandler"), window.FrameHandler = Ie;

var be = function() {
    function e() {
        this.map = null, this.map = new Array();
    }
    return e.prototype.getItem = function(e, t) {
        for (var i = 0; i < this.map.length; i++) if (this.map[i][0] == e && this.map[i][2] == t) return this.map[i][1];
    }, e.prototype.setItem = function(e, t, i) {
        for (var n = 0; n < this.map.length; n++) if (this.map[n][0] == e && this.map[n][2] == i) return void (this.map[n][1] = t);
        return this.map.push([ e, t, i ]), t;
    }, e.prototype.delItem = function(e, t) {
        for (var i = 0; i < this.map.length; i++) if (this.map[i][0] == e && this.map[i][2] == t) {
            this.map.splice(i, 1);
            break;
        }
    }, e.prototype.hasOwnProperty = function(e, t) {
        if (void 0 == this.map || void 0 == this.map.length) return !1;
        for (var i = 0; i < this.map.length; i++) if (this.map[i][0] == e && this.map[i][2] == t) return !0;
        return !1;
    }, e;
}();

t(be.prototype, "MutilArray"), window.MutilArray = be;