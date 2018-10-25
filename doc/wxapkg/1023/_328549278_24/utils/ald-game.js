(function() {
    !function() {
        function j() {
            this.concurrency = 5, this.queue = [], this.tasks = [], this.activeCount = 0;
            var b = this;
            this.push = function(a) {
                this.tasks.push(new Promise(function(c) {
                    var d = function() {
                        b.activeCount++, a().then(function(a) {
                            c(a);
                        }).then(function() {
                            b.next();
                        });
                    };
                    b.activeCount < b.concurrency ? d() : b.queue.push(d);
                }));
            }, this.all = function() {
                return Promise.all(this.tasks);
            }, this.next = function() {
                b.activeCount--, 0 < b.queue.length && b.queue.shift()();
            };
        }
        function e() {
            return new Promise(function(a) {
                wx.getSetting({
                    success: function(b) {
                        b.authSetting["scope.userInfo"] ? wx.getUserInfo({
                            success: function(b) {
                                C = c(b.userInfo.avatarUrl.split("/")), a(b);
                            },
                            fail: function() {
                                a("");
                            }
                        }) : a("");
                    },
                    fail: function() {
                        a("");
                    }
                });
            });
        }
        function n() {
            return new Promise(function(a) {
                wx.getNetworkType({
                    success: function(b) {
                        a(b);
                    },
                    fail: function() {
                        a("");
                    }
                });
            });
        }
        function z() {
            return new Promise(function(a) {
                "1044" == y.scene ? wx.getShareInfo({
                    shareTicket: y.shareTicket,
                    success: function(b) {
                        a(b);
                    },
                    fail: function() {
                        a("");
                    }
                }) : a("");
            });
        }
        function r() {
            return new Promise(function(a) {
                l.getLocation ? wx.getLocation({
                    success: function(b) {
                        a(b);
                    },
                    fail: function() {
                        a("");
                    }
                }) : wx.getSetting({
                    success: function(b) {
                        b.authSetting["scope.userLocation"] ? (wx.getLocation({
                            success: function(b) {
                                a(b);
                            },
                            fail: function() {
                                a("");
                            }
                        }), a("")) : a("");
                    },
                    fail: function() {
                        a("");
                    }
                });
            });
        }
        function a() {
            function a() {
                return s(65536 * (1 + Math.random())).toString(16).substring(1);
            }
            return a() + a() + a() + a() + a() + a() + a() + a();
        }
        function A(a, b) {
            w++, a.as = m, a.at = x, a.rq_c = w, a.ifo = d, a.ak = l.app_key, a.uu = h, a.v = t, 
            a.st = Date.now(), a.ev = b, a.wsr = y, a.ufo = o(a.ufo), a.ec = v, wx.Queue.push(function() {
                return new Promise(function(b) {
                    wx.request({
                        url: "https://" + f + ".aldwx.com/d.html",
                        data: a,
                        header: {
                            se: p || "",
                            op: u || "",
                            img: C || ""
                        },
                        method: "GET",
                        success: function() {
                            b("");
                        },
                        fail: function() {
                            b("");
                        }
                    });
                });
            });
        }
        function o(a) {
            if (void 0 === a || "" === a) return "";
            var b = {};
            for (var c in a) "rawData" != c && "errMsg" != c && (b[c] = a[c]);
            return b;
        }
        function i(a) {
            var b = {};
            for (var c in a) b[c] = a[c];
            return b;
        }
        function c(a) {
            for (var b = "", c = 0; c < a.length; c++) a[c].length > b.length && (b = a[c]);
            return b;
        }
        var s = Math.floor;
        wx.Queue = new j(), wx.Queue.all();
        var t = "1.0.0", f = "glog", l = require("./ald-game-conf");
        "" === l.app_key && console.error("请在配置文件中填写您的app_key"), l.app_key = l.app_key.replace(/\s/g, ""), 
        function() {
            wx.request({
                url: "https://" + f + ".aldwx.com/config/app.json",
                method: "GET",
                success: function(a) {
                    200 === a.statusCode && (a.data.version != t && console.warn("您的SDK不是最新版本，请尽快升级！"), 
                    a.data.warn && console.warn(a.data.warn), a.data.error && console.error(a.data.error));
                }
            });
        }();
        var d = "", h = function() {
            var b = "";
            try {
                b = wx.getStorageSync("aldstat_uuid"), wx.setStorageSync("ald_ifo", !0);
            } catch (a) {
                b = "uuid_getstoragesync";
            }
            if (b) d = !1; else {
                b = a(), d = !0;
                try {
                    wx.setStorageSync("aldstat_uuid", b);
                } catch (a) {
                    wx.setStorageSync("aldstat_uuid", "uuid_getstoragesync");
                }
            }
            return b;
        }(), g = {}, p = "", u = "", v = 0, w = "", y = wx.getLaunchOptionsSync(), B = Date.now(), x = "" + Date.now() + s(1e7 * Math.random()), m = "" + Date.now() + s(1e7 * Math.random()), q = 0, k = "", C = "", b = !0, E = [ "aldSendEvent", "aldOnShareAppMessage", "aldShareAppMessage", "aldSendSession", "aldSendOpenid" ];
        (function() {
            return Promise.all([ e(), n(), r() ]);
        })().then(function(a) {
            "" === a[2] ? (g.lat = "", g.lng = "", g.spd = "") : (g.lat = a[2].latitude || "", 
            g.lng = a[2].longitude || "", g.spd = a[2].speed || ""), g.nt = "" === a[1] ? "" : a[1].networkType || "";
            var b = i(g);
            "" !== a[0] && (b.ufo = a[0], k = a[0]), A(b, "init");
        }), wx.onShow(function(a) {
            w = 0, y = a, q = Date.now(), b || (x = "" + Date.now() + s(1e7 * Math.random()), 
            d = !1, wx.setStorageSync("ald_ifo", !1)), b = !1;
            var c = i(g), f = i(g);
            c.sm = q - B, a.query.ald_share_src && a.shareTicket && "1044" === a.scene ? (f.tp = "ald_share_click", 
            z().then(function(a) {
                f.ct = a, A(f, "event");
            })) : a.query.ald_share_src && (f.tp = "ald_share_click", f.ct = "1", A(f, "event")), 
            A(c, "show");
        }), wx.onHide(function() {
            var a = i(g);
            a.dr = Date.now() - q, "" === k ? wx.getSetting({
                success: function(b) {
                    b.authSetting["scope.userInfo"] ? wx.getUserInfo({
                        success: function(b) {
                            a.ufo = b, k = b, C = c(b.userInfo.avatarUrl.split("/")), A(a, "hide");
                        }
                    }) : A(a, "hide");
                }
            }) : A(a, "hide");
        }), wx.onError(function(a) {
            var b = i(g);
            b.tp = "ald_error_message", b.ct = a, v++, A(b, "event");
        });
        for (var D = {
            aldSendEvent: function(a, b) {
                var c = i(g);
                "" !== a && "string" == typeof a && 255 >= a.length ? (c.tp = a, "string" == typeof b && 255 >= b.length ? (c.ct = b + "", 
                A(c, "event")) : "object" == typeof b ? (255 <= JSON.stringify(b).length && console.error("自定义事件参数不能超过255个字符"), 
                c.ct = JSON.stringify(b), A(c, "event")) : void 0 === b || "" === b ? A(c, "event") : console.error("事件参数必须为String,Object类型,且参数长度不能超过255个字符")) : console.error("事件名称必须为String类型且不能超过255个字符");
            },
            aldOnShareAppMessage: function(b) {
                wx.updateShareMenu({
                    withShareTicket: !0,
                    complete: function() {
                        wx.onShareAppMessage(function() {
                            var c = b(), d = "", f = "";
                            d = void 0 === c.success ? "" : c.success, f = void 0 === c.fail ? "" : c.fail;
                            var e = "";
                            e = void 0 === y.query.ald_share_src ? void 0 === c.query ? "ald_share_src=" + h : c.query + "&ald_share_src=" + h : void 0 === c.query ? (y.query.ald_share_src.indexOf(h), 
                            "ald_share_src=" + y.query.ald_share_src + "," + h) : (y.query.ald_share_src.indexOf(h), 
                            c.query + "&ald_share_src=" + y.query.ald_share_src + "," + h);
                            var a = i(g);
                            return c.query = e, a.ct = c, a.tp = "ald_share_chain", A(a, "event"), c.success = function(b) {
                                a.tp = "ald_share_status", A(a, "event"), "" !== d && d(b);
                            }, c.fail = function(b) {
                                a.tp = "ald_share_fail", A(a, "event"), "" !== f && f(b);
                            }, c;
                        });
                    }
                });
            },
            aldShareAppMessage: function(b) {
                var c = b, d = "", f = "";
                d = void 0 === c.success ? "" : c.success, f = void 0 === c.fail ? "" : c.fail;
                var e = "";
                e = void 0 === y.query.ald_share_src ? void 0 === c.query ? "ald_share_src=" + h : c.query + "&ald_share_src=" + h : void 0 === c.query ? (y.query.ald_share_src.indexOf(h), 
                "ald_share_src=" + y.query.ald_share_src + "," + h) : (y.query.ald_share_src.indexOf(h), 
                c.query + "&ald_share_src=" + y.query.ald_share_src + "," + h), c.query = e;
                var a = i(g);
                a.ct = c, a.tp = "ald_share_chain", A(a, "event"), c.success = function(b) {
                    a.tp = "ald_share_status", A(a, "event"), "" !== d && d(b);
                }, c.fail = function(b) {
                    a.tp = "ald_share_fail", A(a, "event"), "" !== f && f(b);
                }, wx.updateShareMenu({
                    withShareTicket: !0,
                    complete: function() {
                        wx.shareAppMessage(c);
                    }
                });
            },
            aldSendSession: function(a) {
                if ("" === a || !a) return void console.error("请传入从后台获取的session_key");
                var b = i(g);
                b.tp = "session", b.ct = "session", p = a, "" === k ? wx.getSetting({
                    success: function(a) {
                        a.authSetting["scope.userInfo"] ? wx.getUserInfo({
                            success: function(a) {
                                b.ufo = a, A(b, "event");
                            }
                        }) : A(b, "event");
                    }
                }) : (b.ufo = k, "" != k && (b.gid = ""), A(b, "event"));
            },
            aldSendOpenid: function(a) {
                if ("" === a || !a) return void console.error("openID不能为空");
                u = a;
                var b = i(g);
                b.tp = "openid", b.ct = "openid", A(b, "event");
            }
        }, F = 0; F < E.length; F++) !function(a, b) {
            Object.defineProperty(wx, a, {
                value: b,
                writable: !1,
                enumerable: !0,
                configurable: !0
            });
        }(E[F], D[E[F]]);
        try {
            var G = wx.getSystemInfoSync();
            g.br = G.brand || "", g.md = G.model, g.pr = G.pixelRatio, g.sw = G.screenWidth, 
            g.sh = G.screenHeight, g.ww = G.windowWidth, g.wh = G.windowHeight, g.lang = G.language, 
            g.wv = G.version, g.sv = G.system, g.wvv = G.platform, g.fs = G.fontSizeSetting, 
            g.wsdk = G.SDKVersion, g.bh = G.benchmarkLevel || "", g.bt = G.battery || "", g.wf = G.wifiSignal || "", 
            g.lng = "", g.lat = "", g.nt = "", g.spd = "", g.ufo = "";
        } catch (a) {}
    }();
})();