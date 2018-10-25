define("stage1/main.js", function (require, module, exports) {
    "use strict";
    var t = window.egret, e = function (t, e, i) {
        t.__class__ = e, i ? i.push(e) : i = [e], t.__types__ = t.__types__ ? i.concat(t.__types__) : i
    }, i = function (t, e) {
        function i() {
            this.constructor = t
        }

        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        i.prototype = e.prototype, t.prototype = new i
    }, n = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, o) {
            function a(t) {
                try {
                    h(n.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function r(t) {
                try {
                    h(n.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function h(t) {
                t.done ? s(t.value) : new i(function (e) {
                    e(t.value)
                }).then(a, r)
            }

            h((n = n.apply(t, e || [])).next())
        })
    }, s = function (t, e) {
        function i(t) {
            return function (e) {
                return n([t, e])
            }
        }

        function n(i) {
            if (s) throw new TypeError("Generator is already executing.");
            for (; h;) try {
                if (s = 1, o && (a = o[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(a = a.call(o, i[1])).done) return a;
                switch (o = 0, a && (i = [0, a.value]), i[0]) {
                    case 0:
                    case 1:
                        a = i;
                        break;
                    case 4:
                        return h.label++, {value: i[1], done: !1};
                    case 5:
                        h.label++, o = i[1], i = [0];
                        continue;
                    case 7:
                        i = h.ops.pop(), h.trys.pop();
                        continue;
                    default:
                        if (a = h.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                            h = 0;
                            continue
                        }
                        if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                            h.label = i[1];
                            break
                        }
                        if (6 === i[0] && h.label < a[1]) {
                            h.label = a[1], a = i;
                            break
                        }
                        if (a && h.label < a[2]) {
                            h.label = a[2], h.ops.push(i);
                            break
                        }
                        a[2] && h.ops.pop(), h.trys.pop();
                        continue
                }
                i = e.call(t, h)
            } catch (t) {
                i = [6, t], o = 0
            } finally {
                s = a = 0
            }
            if (5 & i[0]) throw i[1];
            return {value: i[0] ? i[1] : void 0, done: !0}
        }

        var s, o, a, r, h = {
            label: 0, sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1]
            }, trys: [], ops: []
        };
        return r = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
            return this
        }), r
    };
    !function (n) {
        var s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._isHide = !0, e
            }

            return i(e, t), e.prototype.show = function (t) {
                this._isHide && (this._isHide = !1)
            }, e.prototype.hide = function () {
                this._isHide || (this._isHide = !0)
            }, e
        }(t.DisplayObjectContainer);
        n.BaseSprite = s, e(s.prototype, "wy.BaseSprite")
    }(wt || (wt = {}));
    var o = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.width = 750, t.height = 1334, t.createChildren(), t
        }

        return i(n, e), n.prototype.createChildren = function () {
            this.bg = new t.Bitmap(RES.getRes("Mymoney_bg_jpg")), this.bg.x = 0, this.bg.y = 0, this.addChild(this.bg), this.head = new t.Bitmap(RES.getRes("Mymoney_head_png")), this.head.x = 304, this.head.y = 148, this.addChild(this.head), this.words = new t.Bitmap(RES.getRes("Mymoney_words_png")), this.words.x = 285, this.words.y = 351, this.addChild(this.words), this.btn1 = new t.Bitmap(RES.getRes("Mymoney_btn1_png")), this.btn1.x = 10, this.btn1.y = 421, this.btn1.name = "btn", this.addChild(this.btn1), this.btn2 = new t.Bitmap(RES.getRes("Mymoney_btn2_png")), this.btn2.x = 373, this.btn2.y = 421, this.btn2.name = "btn", this.addChild(this.btn2), this.btn0 = new t.Bitmap(RES.getRes("Mymoney_btn3_png")), this.btn0.x = 33, this.btn0.y = 55, this.btn0.name = "btn", this.addChild(this.btn0), this.username = new t.TextField, this.username.text = "", this.username.x = 0, this.username.y = 303, this.username.width = 750, this.username.height = 40, this.username.size = 30, this.username.textColor = 16777215, this.username.fontFamily = "微软雅黑", this.username.textAlign = "center", this.addChild(this.username), this.money = new t.TextField, this.money.text = "", this.money.x = 409, this.money.y = 343, this.money.width = 100, this.money.height = 40, this.money.textAlign = "left", this.money.fontFamily = "微软雅黑", this.money.textColor = 16777215, this.money.size = 30, this.addChild(this.money)
        }, n
    }(wt.BaseSprite);
    e(o.prototype, "MymoneyUI");
    var a = function () {
        function t() {
        }

        return t.getBasicUrl = function () {
            return this.basicUrl
        }, t.getAppCode = function () {
            return this.appCode
        }, t.getVersion = function () {
            return this.version
        }, t.getShareTitle = function () {
            return this.shareTitle
        }, t.getShareImg = function () {
            return this.shareImg
        }, t.setStageWidthHeight = function (t) {
            this.stageWidth = t.stageWidth, this.stageHeight = t.stageHeight
        }, t.getWidth = function () {
            return this.stageWidth
        }, t.getHeight = function () {
            return this.stageHeight
        }, t.getKey = function () {
            return this.key
        }, t.setMain = function (t) {
            this.stage = t
        }, t.getMain = function () {
            return this.stage
        }, t.basicUrl = "", t.appCode = 1, t.version = "1.0.0", t.shareTitle = "分享标题", t.shareImg = "imgUrl", t.stageWidth = 0, t.stageHeight = 0, t.key = "", t.stage = null, t
    }();
    e(a.prototype, "GameConfig");
    var r = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.width = 750, t.height = 1334, t.createChildren(), t
        }

        return i(n, e), n.prototype.createChildren = function () {
            var e = mt.Tools.drawRect(0, 0, 750, 1624, 15855861, 1);
            this.addChild(e), this.bg = new t.Bitmap(RES.getRes("Cash_bg_jpg")), this.bg.x = 0, this.bg.y = 0, this.addChild(this.bg), this.btn4 = new t.Bitmap(RES.getRes("Cash_btn4_png")), this.btn4.x = 90, this.btn4.y = 560, this.btn4.name = "btn", this.addChild(this.btn4), this.btn3 = new t.Bitmap(RES.getRes("Cash_btn3_png")), this.btn3.x = 617, this.btn3.y = 436, this.btn3.name = "btn", this.addChild(this.btn3), this.btn2 = new t.Bitmap(RES.getRes("Cash_btn2_png")), this.btn2.x = 580, this.btn2.y = 159, this.btn2.name = "btn", this.addChild(this.btn2), this.btn1 = new t.Bitmap(RES.getRes("Getbag_btn1_png")), this.btn1.x = 33, this.btn1.y = 51, this.btn1.name = "btn", this.addChild(this.btn1), this.tf = new t.TextField, this.tf.type = "input", this.tf.text = "", this.tf.x = 80, this.tf.y = 429, this.tf.width = 400, this.tf.height = 40, this.tf.textColor = 6710886, this.tf.fontFamily = "微软雅黑", this.tf.textAlign = "left", this.tf.verticalAlign = "middle", this.tf.size = 27, this.addChild(this.tf), this.money = new t.TextField, this.money.text = "￥0.15", this.money.x = 0, this.money.y = 294, this.money.width = 750, this.money.height = 60, this.money.fontFamily = "微软雅黑", this.money.textColor = 13910840, this.money.textAlign = "center", this.money.size = 50, this.addChild(this.money)
        }, n
    }(wt.BaseSprite);
    e(r.prototype, "CashUI");
    var h = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.width = 750, t.height = 1333, t.createChildren(), t
        }

        return i(n, e), n.prototype.createChildren = function () {
            this.bg = new t.Bitmap(RES.getRes("Center_bg_jpg")), this.bg.x = 0, this.bg.y = 0, this.addChild(this.bg), this.btn = new t.Bitmap(RES.getRes("Center_btn_png")), this.btn.x = 213, this.btn.y = 559, this.btn.name = "btn", this.addChild(this.btn), this.title = new t.Bitmap(RES.getRes("Center_title_png")), this.title.x = 74, this.title.y = 122, this.title.alpha = 1, this.addChild(this.title)
        }, n
    }(wt.BaseSprite);
    e(h.prototype, "CenterUI");
    var c = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.width = 750, t.height = 1333, t.createChildren(), t
        }

        return i(n, e), n.prototype.createChildren = function () {
            this.bg = new t.Bitmap(RES.getRes("Shop_bg_png")), this.bg.x = 0, this.bg.y = 0, this.addChild(this.bg), this.title = new t.Bitmap(RES.getRes("Comeback_title_png")), this.title.x = 222, this.title.y = 139, this.addChild(this.title), this.light = new t.Bitmap(RES.getRes("Unlock_light_png")), this.light.x = 0, this.light.y = 125, this.addChild(this.light), this.pic = new t.Bitmap(RES.getRes("Comeback_pic_png")), this.pic.x = 129, this.pic.y = 345, this.addChild(this.pic), this.btn1 = new t.Bitmap(RES.getRes("Sign_btn1_png")), this.btn1.x = 625, this.btn1.y = 96, this.btn1.name = "btn", this.addChild(this.btn1), this.btn = new t.Bitmap(RES.getRes("Free_btn_png")), this.btn.x = 227, this.btn.y = 754, this.addChild(this.btn), this.money = new t.TextField, this.money.text = "", this.money.x = 0, this.money.y = 291, this.money.width = 750, this.money.height = 40, this.money.size = 30, this.money.textColor = 16777215, this.money.fontFamily = "微软雅黑", this.money.textAlign = "center", this.addChild(this.money), this.doubleMoney = new t.TextField, this.doubleMoney.text = "", this.doubleMoney.x = 310, this.doubleMoney.y = 790, this.doubleMoney.width = 200, this.doubleMoney.height = 40, this.doubleMoney.size = 30, this.doubleMoney.textColor = 16777215, this.doubleMoney.fontFamily = "微软雅黑", this.doubleMoney.textAlign = "center", this.addChild(this.doubleMoney)
        }, n
    }(wt.BaseSprite);
    e(c.prototype, "ComebackUI");
    var l = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.width = 750, t.height = 1334, t.createChildren(), t
        }

        return i(n, e), n.prototype.createChildren = function () {
            var e = mt.Tools.drawRect(0, 0, 750, 1624, 16777215, 1);
            this.addChild(e), this.bg = new t.Bitmap(RES.getRes("Details_bg_jpg")), this.bg.x = 0, this.bg.y = 0, this.addChild(this.bg), this.base = new t.Bitmap(RES.getRes("Details_base_png")), this.base.x = 0, this.base.y = 138, this.addChild(this.base), this.btn0 = new t.Bitmap(RES.getRes("Mymoney_btn3_png")), this.btn0.x = 33, this.btn0.y = 55, this.btn0.name = "btn", this.addChild(this.btn0)
        }, n
    }(wt.BaseSprite);
    e(l.prototype, "DetailsUI");
    var d = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.width = 750, t.height = 1333, t.createChildren(), t
        }

        return i(n, e), n.prototype.createChildren = function () {
            this.bg = new t.Bitmap(RES.getRes("Shop_bg_png")), this.bg.x = 0, this.bg.y = 0, this.addChild(this.bg), this.title = new t.Bitmap(RES.getRes("Free_title_png")), this.title.x = 222, this.title.y = 139, this.addChild(this.title), this.light = new t.Bitmap(RES.getRes("Unlock_light_png")), this.light.x = 0, this.light.y = 125, this.addChild(this.light), this.btn = new t.Bitmap(RES.getRes("Free_btn_png")), this.btn.x = 227, this.btn.y = 754, this.addChild(this.btn), this.pic = new t.Bitmap(RES.getRes("Free_pic_png")), this.pic.x = 143, this.pic.y = 298, this.addChild(this.pic), this.money = new t.TextField, this.money.text = "+456,17", this.money.x = 0, this.money.y = 291, this.money.width = 750, this.money.height = 40, this.money.size = 30, this.money.textColor = 16777215, this.money.fontFamily = "微软雅黑", this.money.textAlign = "center", this.addChild(this.money), this.doubleMoney = new t.TextField, this.doubleMoney.text = "+1,456", this.doubleMoney.x = 310, this.doubleMoney.y = 790, this.doubleMoney.width = 200, this.doubleMoney.height = 40, this.doubleMoney.size = 30, this.doubleMoney.textColor = 16777215, this.doubleMoney.fontFamily = "微软雅黑", this.doubleMoney.textAlign = "left", this.addChild(this.doubleMoney), this.btn1 = new t.Bitmap(RES.getRes("Sign_btn1_png")), this.btn1.x = 625, this.btn1.y = 96, this.btn1.name = "btn", this.addChild(this.btn1)
        }, n
    }(wt.BaseSprite);
    e(d.prototype, "FreeUI");
    var u = function () {
        function e() {
            this.name = "wxgame", this.header = {}
        }

        return e.prototype.getFriendCloudStorage = function () {
            return n(this, void 0, void 0, function () {
                return s(this, function (t) {
                    return [2, new Promise(function (t, e) {
                        wx.getFriendCloudStorage({
                            keyList: ["socre", "date"], success: function (e) {
                                console.log(e), t(e)
                            }, fail: function (t) {
                                e(t)
                            }
                        })
                    })]
                })
            })
        }, e.prototype.getGroupCloudStorage = function (t) {
            return n(this, void 0, void 0, function () {
                return s(this, function (e) {
                    return [2, new Promise(function (e, i) {
                        wx.getGroupCloudStorage({
                            keyList: ["score", "date"], success: function (t) {
                                var i = new Array;
                                t.data && 0 != t.data.length && (t.data.forEach(function (t, e) {
                                    var n = dt.transObj(t.KVDataList);
                                    dt.isInTimeRange(n.date) && i.push({
                                        score: parseInt(n.score),
                                        date: n.date || "",
                                        openId: t.openid,
                                        user: {nickname: t.nickname, avatar_url: t.avatarUrl}
                                    })
                                }), i.sort(function (t, e) {
                                    var i = t.score;
                                    return e.score - i
                                })), e(i)
                            }, fail: function (t) {
                                i(t)
                            }, complete: function (t) {
                            }, shareTicket: t
                        })
                    })]
                })
            })
        }, e.prototype.setKVData = function (t) {
            return n(this, void 0, void 0, function () {
                return s(this, function (e) {
                    return [2, new Promise(function (e, i) {
                        var n = [];
                        for (var s in t) n.push({key: s, value: t[s]});
                        wx.setUserCloudStorage({
                            KVDataList: n, success: function (t) {
                                e(t)
                            }, fail: function (t) {
                                i(t)
                            }
                        })
                    })]
                })
            })
        }, e.prototype.login = function () {
            return n(this, void 0, void 0, function () {
                return s(this, function (e) {
                    return [2, new Promise(function (e, i) {
                        wx.login({
                            success: function (e) {
                                console.log(e), D.js_code = e.code, wx.getUserInfo({
                                    success: function (e) {
                                        var i = this;
                                        console.log("加密信息"), console.log(e), j.nickname = e.userInfo.nickName, j.headurl = e.userInfo.avatarUrl, D.encryptedData = encodeURIComponent(e.encryptedData), D.iv = encodeURIComponent(e.iv), D.sign_in(this, function (e) {
                                            var n = JSON.parse(e.currentTarget.response);
                                            t.log("获取授权接口1111:"), t.log(n), D.uid = n.data.uid, D.getProgress(i, function (e) {
                                                var n = JSON.parse(e.currentTarget.response);
                                                t.log("个人信息接口1111:"), t.log(n), j.HighCar = Number(n.data.HighCar), j.TotalMoney = Number(n.data.TotalMoney), j.SecMoney = n.data.SecMoney, j.speedUpTime = Number(n.data.speedUpTime), j.isSign = n.data.is_sign + "", j.restCondition = n.data.restCondition, j.shopCondition = n.data.shopCondition, j.carNames = n.data.shopCondition_car_name, j.help_list = n.data.help_list, j.free_gold_list = n.data.free_gold_list, j.sign_redpack_on = n.data.config.sign_redpack_on, j.shareLimits = n.data.share_limit_condition, j.videoLimits[0] = n.data.video_limit_condition.car_list.is_video, j.videoLimits[1] = n.data.video_limit_condition.extra_new_car.is_video, j.videoLimits[2] = n.data.video_limit_condition.free_gold_box.is_video, j.videoLimits[3] = n.data.video_limit_condition.free_speed_plus.is_video, j.videoLimits[4] = n.data.video_limit_condition.offline_gold.is_video, j.videoLimits[5] = n.data.video_limit_condition.share_get_car.is_video, j.notice_msg = n.data.config.notice_msg.video_count_used, j.style = Number(n.data.config.get_free_style), j.diffCar = Number(n.data.config.open_car_level_diff);
                                                var s = n.data.last_time_diff,
                                                    o = n.data.config.off_line_get_profit_time;
                                                j.backMoney = Math.round(Number(n.data.last_time_diff) * j.SecMoney * .5), j.closeDataloading(), D.getTesting(i, function (e) {
                                                    var n = JSON.parse(e.currentTarget.response);
                                                    t.log("黑名单接口:"), t.log(n), 0 == n.data.is_type ? j.isBlack = !0 : j.isBlack = !1, console.log("是否黑名单 === " + j.isBlack), wt.changeView(U), wt.hideView(), wt.changeScene(M), console.log(s), console.log(o), j.backMoney > 0 && 0 == j.isBlack && s >= o && wt.changeView(R), j.onShare(), D.extensionadNew(i, function (e) {
                                                        var i = JSON.parse(e.currentTarget.response);
                                                        t.log("获取分享信息接口:"), t.log(i), j.shareTitle = i.data[4][0].name, j.shareImg = D.url + i.data[4][0].picture
                                                    }, "4"), j.onHide(), j.onShow()
                                                }, j.model)
                                            })
                                        })
                                    }, fail: function (t) {
                                        i(t)
                                    }
                                })
                            }
                        })
                    })]
                })
            })
        }, e.prototype.auth = function (t, e, i) {
            return n(this, void 0, void 0, function () {
                var n = this;
                return s(this, function (s) {
                    return [2, new Promise(function (s, o) {
                        var a = {js_code: t, iv: e, encrypted_data: i}, r = n;
                        wx.request({
                            url: W.loginPath, method: "POST", data: a, success: function (t) {
                                r.header = {Authorization: t.data.token}, wx.hideLoading(), s(t)
                            }, fail: function (t) {
                                o(t)
                            }
                        })
                    })]
                })
            })
        }, e.prototype.getUserInfo = function () {
            return n(this, void 0, void 0, function () {
                return s(this, function (t) {
                    return [2, new Promise(function (t, e) {
                        wx.getUserInfo({
                            success: function (e) {
                                var i = e.userInfo;
                                i.nickName, i.avatarUrl, i.gender, i.province, i.city, i.country;
                                i.encryptedData = e.encryptedData, i.iv = e.iv, t(i)
                            }, fail: function (t) {
                                e(t)
                            }
                        })
                    })]
                })
            })
        }, e.prototype.showAuthModal = function () {
            return n(this, void 0, void 0, function () {
                return s(this, function (t) {
                    return wx.hideLoading(), [2, new Promise(function (t, e) {
                        wx.showModal({
                            title: "提示",
                            content: "请您进行登陆授权",
                            showCancel: !1,
                            cancelText: "",
                            confirmText: "去授权",
                            success: function (i) {
                                wx.openSetting({
                                    success: function (e) {
                                        t(e)
                                    }, fail: function (t) {
                                        e(t)
                                    }
                                })
                            }
                        })
                    })]
                })
            })
        }, e
    }();
    e(u.prototype, "WxPlatform", ["Platform"]), window.platform || (window.platform = new u);
    var p = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.width = 750, t.height = 1334, t.createChildren(), t
        }

        return i(n, e), n.prototype.createChildren = function () {
            var e = mt.Tools.drawRect(0, 0, 750, 1624, 16777215, 1);
            this.addChild(e), this.bg = new t.Bitmap(RES.getRes("Getbag_bg_jpg")), this.bg.x = 0, this.bg.y = 0, this.addChild(this.bg), this.head = new t.Bitmap(RES.getRes("Getbag_head_png")), this.head.x = 325, this.head.y = 229, this.addChild(this.head), this.btn1 = new t.Bitmap(RES.getRes("Getbag_btn1_png")), this.btn1.x = 33, this.btn1.y = 71, this.btn1.name = "btn", this.addChild(this.btn1), this.btn2 = new t.Bitmap(RES.getRes("Getbag_btn2_png")), this.btn2.x = 259, this.btn2.y = 653, this.btn2.name = "btn", this.addChild(this.btn2), this.btn3 = new t.Bitmap(RES.getRes("Getbag_btn3_png")), this.btn3.x = 173, this.btn3.y = 709, this.btn3.name = "btn", this.addChild(this.btn3), this.nick = new t.TextField, this.nick.text = "yoyo", this.nick.x = 0, this.nick.y = 340, this.nick.width = 750, this.nick.height = 40, this.nick.textAlign = "center", this.nick.fontFamily = "微软雅黑", this.nick.textColor = 0, this.nick.size = 30, this.addChild(this.nick), this.money = new t.TextField, this.money.text = "0.15", this.money.x = 0, this.money.y = 498, this.money.width = 750, this.money.height = 110, this.money.textAlign = "center", this.money.fontFamily = "微软雅黑", this.money.textColor = 13910840, this.money.size = 90, this.addChild(this.money)
        }, n
    }(wt.BaseSprite);
    e(p.prototype, "GetbagUI");
    var g = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.width = 750, t.height = 1334, t.createChildren(), t
        }

        return i(n, e), n.prototype.createChildren = function () {
            this.bg = new t.Bitmap(RES.getRes("Shop_bg_png")), this.bg.x = 0, this.bg.y = 0, this.addChild(this.bg), this.rect = new t.Bitmap(RES.getRes("Unlock_guide_jpg")), this.rect.x = 49, this.rect.y = 75, this.addChild(this.rect), this.btn = new t.Bitmap(RES.getRes("Sign_btn1_png")), this.btn.x = 625, this.btn.y = 96, this.btn.name = "btn", this.addChild(this.btn)
        }, n
    }(wt.BaseSprite);
    e(g.prototype, "GuideUI");
    var f = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.width = 750, t.height = 1333, t.createChildren(), t
        }

        return i(n, e), n.prototype.createChildren = function () {
            this.bg = new t.Bitmap(RES.getRes("Shop_bg_png")), this.bg.x = 0, this.bg.y = 0, this.addChild(this.bg), this.help = new t.Bitmap(RES.getRes("Help_rect_jpg")), this.help.x = 49, this.help.y = 98, this.addChild(this.help), this.btn = new t.Bitmap(RES.getRes("Help_btn_png")), this.btn.x = 196, this.btn.y = 881, this.btn.name = "btn", this.addChild(this.btn), this.btn1 = new t.Bitmap(RES.getRes("Sign_btn1_png")), this.btn1.x = 625, this.btn1.y = 118, this.btn1.name = "btn", this.addChild(this.btn1)
        }, n
    }(wt.BaseSprite);
    e(f.prototype, "HelpUI");
    var y = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.width = 750, t.height = 1333, t.createChildren(), t
        }

        return i(n, e), n.prototype.createChildren = function () {
            this.bg = new t.Bitmap(RES.getRes("Shop_bg_png")), this.bg.x = 0, this.bg.y = 0, this.addChild(this.bg), this.rect = new t.Bitmap(RES.getRes("Invite_rect_jpg")), this.rect.x = 49, this.rect.y = 98, this.addChild(this.rect), this.btn = new t.Bitmap(RES.getRes("Invite_btn_png")), this.btn.x = 196, this.btn.y = 968, this.btn.name = "btn", this.addChild(this.btn), this.btn1 = new t.Bitmap(RES.getRes("Sign_btn1_png")), this.btn1.x = 625, this.btn1.y = 118, this.btn1.name = "btn", this.addChild(this.btn1)
        }, n
    }(wt.BaseSprite);
    e(y.prototype, "InviteUI");
    var m = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.width = 750, t.height = 1334, t.createChildren(), t
        }

        return i(n, e), n.prototype.createChildren = function () {
            this.bg = new t.Bitmap(RES.getRes("Shop_bg_png")), this.bg.x = 0, this.bg.y = 0, this.addChild(this.bg), this.btn = new t.Bitmap(RES.getRes("Redbag_btn_png")), this.btn.x = 183, this.btn.y = 805, this.btn.name = "btn", this.addChild(this.btn), this.btn1 = new t.Bitmap(RES.getRes("Redbag_btn1_png")), this.btn1.x = 630, this.btn1.y = 137, this.btn1.name = "btn", this.addChild(this.btn1), this.pic = new t.Bitmap(RES.getRes("Redbag_pic_png")), this.pic.x = 0, this.pic.y = 94, this.addChild(this.pic)
        }, n
    }(wt.BaseSprite);
    e(m.prototype, "RedbagUI");
    var b = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.width = 750, t.height = 1333, t.createChildren(), t
        }

        return i(n, e), n.prototype.createChildren = function () {
            this.bg = new t.Bitmap(RES.getRes("Shop_bg_png")), this.bg.x = 0, this.bg.y = 0, this.addChild(this.bg), this.rect = new t.Bitmap(RES.getRes("Sign_rect_jpg")), this.rect.x = 49, this.rect.y = 75, this.addChild(this.rect), this.btn = new t.Bitmap(RES.getRes("Sign_btn_png")), this.btn.x = 194, this.btn.y = 846, this.btn.name = "btn", this.addChild(this.btn), this.btn1 = new t.Bitmap(RES.getRes("Sign_btn1_png")), this.btn1.x = 625, this.btn1.y = 96, this.btn1.name = "btn", this.addChild(this.btn1)
        }, n
    }(wt.BaseSprite);
    e(b.prototype, "SignUI");
    var T = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.width = 750, t.height = 1333, t.createChildren(), t
        }

        return i(n, e), n.prototype.createChildren = function () {
            this.bg = new t.Bitmap(RES.getRes("Shop_bg_png")), this.bg.x = 0, this.bg.y = 0, this.addChild(this.bg), this.title = new t.Bitmap(RES.getRes("Unlock_title_png")), this.title.x = 222, this.title.y = 139, this.addChild(this.title), this.light = new t.Bitmap(RES.getRes("Unlock_light_png")), this.light.x = 0, this.light.y = 125, this.addChild(this.light), this.avm = new t.Bitmap(RES.getRes("Unlock_avm_png")), this.avm.x = 272, this.avm.y = 729, this.addChild(this.avm), this.btn = new t.Bitmap(RES.getRes("Unlock_btn_png")), this.btn.x = 194, this.btn.y = 993, this.btn.name = "btn", this.addChild(this.btn), this.btn1 = new t.Bitmap(RES.getRes("Sign_btn1_png")), this.btn1.x = 625, this.btn1.y = 96, this.btn1.name = "btn", this.addChild(this.btn1)
        }, n
    }(wt.BaseSprite);
    e(T.prototype, "UnlockUI");
    var v = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.width = 750, t.height = 1333, t.createChildren(), t
        }

        return i(n, e), n.prototype.createChildren = function () {
            var e = mt.Tools.drawRect(0, -200, 750, 2e3, 12636485, 1);
            this.addChild(e), this.bg = new t.Bitmap(RES.getRes("Game_bg_jpg")), this.bg.x = 0, this.bg.y = 0, this.addChild(this.bg), this.road = new t.Bitmap(RES.getRes("Game_road_png")), this.road.x = 49, this.road.y = 104, this.addChild(this.road), this.board = new t.Bitmap(RES.getRes("Game_board_png")), this.board.x = 29, this.board.y = 364, this.addChild(this.board), this.help = new t.Bitmap(RES.getRes("Game_help_png")), this.help.x = 7, this.help.y = 1131, this.addChild(this.help), this.invite = new t.Bitmap(RES.getRes("Game_invite_png")), this.invite.x = 335, this.invite.y = 1217, this.addChild(this.invite), this.sign = new t.Bitmap(RES.getRes("Game_sign_png")), this.sign.x = 437, this.sign.y = 1225, this.addChild(this.sign), this.home = new t.Bitmap(RES.getRes("Game_home_png")), this.home.x = 535, this.home.y = 1217, this.addChild(this.home), this.guide = new t.Bitmap(RES.getRes("Game_guide_png")), this.guide.x = 646, this.guide.y = 1222, this.addChild(this.guide), this.speedup = new t.Bitmap(RES.getRes("Game_speedup_png")), this.speedup.x = 206, this.speedup.y = 845, this.addChild(this.speedup), this.kill = new t.Bitmap(RES.getRes("Game_kill_png")), this.kill.x = 661, this.kill.y = 1089, this.addChild(this.kill), this.shop = new t.Bitmap(RES.getRes("Game_shop_png")), this.shop.x = 346, this.shop.y = 881, this.addChild(this.shop), this.free = new t.Bitmap(RES.getRes("Game_free_png")), this.free.x = 621, this.free.y = 91, this.addChild(this.free), this.second = new t.TextField, this.second.text = "0", this.second.x = 338, this.second.y = 271, this.second.width = 120, this.second.height = 40, this.second.textColor = 5091069, this.second.textAlign = "center", this.second.fontFamily = "微软雅黑", this.second.size = 25, this.second.multiline = !1, this.addChild(this.second), this.total = new t.TextField, this.total.text = "0", this.total.x = 314, this.total.multiline = !1, this.total.y = 346, this.total.width = 170, this.total.height = 40, this.total.textColor = 16777215, this.total.size = 25, this.total.textAlign = "center", this.total.fontFamily = "微软雅黑", this.addChild(this.total), this.runNum = new t.TextField, this.runNum.text = "", this.runNum.x = 49, this.runNum.y = 372, this.runNum.width = 100, this.runNum.height = 40, this.runNum.textAlign = "center", this.runNum.fontFamily = "微软雅黑", this.runNum.textColor = 0, this.runNum.size = 30, this.addChild(this.runNum), this.friendNum = new t.TextField, this.friendNum.text = "0位好友", this.friendNum.x = 14, this.friendNum.y = 1135, this.friendNum.width = 70, this.friendNum.height = 30, this.friendNum.textColor = 5091069, this.friendNum.textAlign = "center", this.friendNum.fontFamily = "微软雅黑", this.friendNum.size = 15, this.addChild(this.friendNum), this.extra = new t.TextField, this.extra.text = "+0%", this.extra.x = 107, this.extra.y = 1135, this.extra.width = 100, this.extra.height = 30,this.extra.textColor = 16777215,this.extra.size = 15,this.extra.fontFamily = "微软雅黑",this.extra.textAlign = "left",this.addChild(this.extra)
        }, n
    }(wt.BaseSprite);
    e(v.prototype, "GameUI");
    var w = function () {
        function t() {
        }

        return t.initList = function () {
            this.list.map(function (t) {
                t.texture = RES.getRes(t.texture_path), t.json = RES.getRes(t.json_path)
            })
        }, t.getRes = function (t) {
            var e = {texture: null, json: null};
            return this.list.map(function (i) {
                i.name == t && (e = i)
            }), e
        }, t.list = [{
            name: "boom",
            texture_path: "boom_png",
            texture: null,
            json_path: "boom_json",
            json: null
        }, {name: "hit", texture_path: "hit_png", texture: null, json_path: "hit_json", json: null}, {
            name: "flame",
            texture_path: "flame_png",
            texture: null,
            json_path: "flame_json",
            json: null
        }], t
    }();
    e(w.prototype, "partRes");
    var _ = function () {
        function t() {
        }

        return t.eventSoundList = [{
            name: "bgm_default",
            path: "resource/assets/mp3/bgm_default.mp3"
        }, {name: "bgm_game", path: "resource/assets/mp3/bgm_game2.mp3"}, {
            name: "hit",
            path: "resource/assets/mp3/hit.mp3",
            cnt: 10
        }], t
    }();
    e(_.prototype, "SoundRes");
    var C = function () {
        function t() {
        }

        return t.getOpenId = function () {
            return this.openId
        }, t.getId = function () {
            return this.id
        }, t.getUserData = function () {
            return JSON.parse(JSON.stringify(this.userInfo))
        }, t.setUserData = function (t) {
            this.avatar_url = t.avatar_url, this.openId = t.open_id, this.nickname = t.nickname, this.gender = t.gender, this.id = t.id, this.userInfo = t
        }, t
    }();
    e(C.prototype, "UserData");
    var x = function () {
        function t() {
        }

        return t.refreshVersionCtrl = function () {
            return n(this, void 0, void 0, function () {
                var t;
                return s(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return t = this, [4, W.getConfiguration()];
                        case 1:
                            return t.configuration = e.sent(), [2]
                    }
                })
            })
        }, t.queryConfig = function (t) {
            return this.configuration[t]
        }, t
    }();
    e(x.prototype, "VersionCtrl");
    var S = function (e) {
        function n() {
            return e.call(this) || this
        }

        return i(n, e), n.prototype.createChildren = function () {
            e.prototype.createChildren.call(this)
        }, n.prototype.show = function (i) {
            e.prototype.show.call(this, i), this.bg.touchEnabled = !0, this.bg.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn4.touchEnabled = !0, this.btn4.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn3.touchEnabled = !0, this.btn3.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn2.touchEnabled = !0, this.btn2.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.init()
        }, n.prototype.init = function () {
            this.btn1.texture = RES.getRes("Cash_btn1_png"), this.money.text = "￥" + j.money, this.tf.text = "请选择你要提现的金额", this.btn4.y += 150;
            for (var e = j.money_list, i = [], n = 0; n < e.length; n++) 0 == e[n].is_used && i.push(e[n].value);
            this.click0 = mt.Tools.drawRect(0, 30, 100, 100, 65535, 0), this.addChild(this.click0), this.click0.touchEnabled = !0, this.click0.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.click = mt.Tools.addbm("Cash_btn5_png", -300, 600), this.click2 = mt.Tools.addbm("Cash_btn6_png", 240, 600), this.click3 = mt.Tools.addbm("Cash_btn6_png", 390, 600), this.addChild(this.click), this.addChild(this.click2), this.addChild(this.click3), this.click2.touchEnabled = !0, this.click3.touchEnabled = !0, this.click2.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.click3.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), i.length >= 2 && (this.text2 = mt.Tools.add_input(240, 600, 120, 63, 40, "center", 0, !1, i[0]), this.text3 = mt.Tools.add_input(390, 600, 120, 63, 40, "center", 0, !1, i[1])), 1 == i.length && (this.text2 = mt.Tools.add_input(240, 600, 120, 63, 40, "center", 0, !1, i[0]), this.text3 = mt.Tools.add_input(390, 600, 120, 63, 40, "center", 0, !1, ""), this.click3.visible = !1, this.text2.x += 75, this.click2.x += 75), 0 == i.length && (this.text2 = mt.Tools.add_input(240, 600, 120, 63, 40, "center", 0, !1, ""), this.text3 = mt.Tools.add_input(390, 600, 120, 63, 40, "center", 0, !1, ""), this.click3.visible = !1, this.click2.visible = !1), this.addChild(this.text2), this.addChild(this.text3);
            var s = mt.Tools.add_input(90, 900, 470, 400, 30, "left", 6710886, !1, j.words);
            s.verticalAlign = "top", s.lineSpacing = 15, this.addChild(s)
        }, n.prototype.onTouchTap = function (e) {
            var i = this;
            switch (e.currentTarget) {
                case this.bg:
                    break;
                case this.click1:
                    this.click.x = this.click1.x, this.tf.text = this.text1.text;
                    break;
                case this.click2:
                    this.click.x = this.click2.x, this.tf.text = this.text2.text;
                    break;
                case this.click3:
                    this.click.x = this.click3.x, this.tf.text = this.text3.text;
                    break;
                case this.click4:
                    this.click.x = this.click4.x, this.tf.text = this.text4.text;
                    break;
                case this.btn4:
                    if ("请输入要提现的金额" == this.tf.text || "" == this.tf.text) {
                        wt.Toast.setContent("请输入您要提现的金额");
                        break
                    }
                    if (0 == wt.RegUtils.checkNum(this.tf.text)) {
                        wt.Toast.setContent("请输入正确的数字");
                        break
                    }
                    if (Number(this.tf.text) > Number(j.money)) {
                        this.tf.text = "", wt.Toast.setContent("输入金额不能大于累计奖金");
                        break
                    }
                    j.openDataloading(), D.putForward(this, function (e) {
                        var n = JSON.parse(e.currentTarget.response);
                        if (t.log("提现接口:"), t.log(n), j.closeDataloading(), i.tf.text = "", 200 == n.code) {
                            var s = mt.Tools.drawRect(0, 0, 750, 1624, 0, .35);
                            i.addChild(s);
                            var o = mt.Tools.addbm("Cash_rect_png", 42.5, 400);
                            i.addChild(o);
                            var a = mt.Tools.addbm("Cash_btn7_png", 212.5, 776);
                            a.name = "btn", i.addChild(a);
                            var r = mt.Tools.addbm("Cash_btn10_png", 608.5, 488);
                            r.name = "btn", i.addChild(r);
                            var h = mt.Tools.add_input(75.5, 604, 600, 60, 30, "center", 0, !1, n.data.sn);
                            i.addChild(h), s.touchEnabled = !0, s.addEventListener(t.TouchEvent.TOUCH_TAP, i.onTouchTap, i), o.touchEnabled = !0, o.addEventListener(t.TouchEvent.TOUCH_TAP, i.onTouchTap, i), a.touchEnabled = !0, a.addEventListener(t.TouchEvent.TOUCH_TAP, function () {
                                t.setTimeout(function () {
                                    wt.hideView()
                                }, this, 2e3), wx.navigateToMiniProgram({
                                    appId: "wx3ec390cc2010fc31",
                                    path: "pages/forward/forward?draw_sn=" + n.data.sn + "&gameid=123&appid=wx969a3871e990c20c",
                                    envVersion: "trial"
                                })
                            }, i), r.touchEnabled = !0, r.addEventListener(t.TouchEvent.TOUCH_TAP, function () {
                                i.removeChild(s), i.removeChild(o), i.removeChild(a), i.removeChild(r), i.removeChild(h)
                            }, i)
                        } else wt.Toast.setContent(n.msg)
                    }, i.tf.text);
                    break;
                case this.btn3:
                    this.click.x = -300, this.tf.text = j.money;
                    break;
                case this.btn2:
                    j.openDataloading(), D.putForwardList(this, function (e) {
                        var i = JSON.parse(e.currentTarget.response);
                        t.log("提现记录列表接口:"), t.log(i), j.detaildata = i.data.list, wt.changeView(P), j.closeDataloading()
                    });
                    break;
                case this.click0:
                    1 == j.isBag ? wt.changeView(k) : wt.changeView(A)
            }
        }, n
    }(r);
    e(S.prototype, "Cash");
    var E = function (e) {
        function n() {
            return e.call(this) || this
        }

        return i(n, e), n.prototype.createChildren = function () {
            e.prototype.createChildren.call(this)
        }, n.prototype.show = function (i) {
            e.prototype.show.call(this, i), this.bg.touchEnabled = !0, this.bg.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn.touchEnabled = !0, this.btn.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), 0 == j.isIPX ? this.bg.y -= 200 : (this.title.y += 145, this.btn.y += 145), this.btn.visible = !1
        }, n.prototype.hide = function () {
            e.prototype.hide.call(this), this.bg.touchEnabled = !1, this.bg.removeEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn.touchEnabled = !1, this.btn.removeEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this)
        }, n.prototype.onTouchTap = function (t) {
            switch (t.currentTarget) {
                case this.bg:
                    break;
                case this.btn:
                    wt.changeScene(M)
            }
        }, n
    }(h);
    e(E.prototype, "Center");
    var R = function (e) {
        function n() {
            return e.call(this) || this
        }

        return i(n, e), n.prototype.createChildren = function () {
            e.prototype.createChildren.call(this)
        }, n.prototype.show = function (i) {
            e.prototype.show.call(this, i), this.bg.touchEnabled = !0, this.bg.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn.touchEnabled = !0, this.btn.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn1.touchEnabled = !0, this.btn1.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), 1 == j.isIPX && (this.y += 145, this.bg.scaleX = 1624 / 1334, this.bg.scaleY = 1624 / 1334, this.bg.y -= 145), 2 != j.style && 0 != j.shareLimits[4] || (this.btn.texture = RES.getRes("Free_btn1_png")), mt.Tools.xuanzhuan(this.light, !0, 360, 5e3), this.money.verticalAlign = "middle", this.doubleMoney.verticalAlign = "middle", this.money.text = "+" + j.backMoney.toLocaleString(), this.doubleMoney.text = "+" + (2 * j.backMoney).toLocaleString()
        }, n.prototype.onTouchTap = function (e) {
            switch (e.currentTarget) {
                case this.bg:
                    break;
                case this.btn:
                    1 == j.style && 1 == j.shareLimits[4] ? (j.isShare = !0, wx.shareAppMessage({
                        title: j.shareTitle,
                        imageUrl: j.shareImg,
                        success: function (t) {
                            console.log(t);
                            var e = "2";
                            "shareAppMessage:ok" == t.errMsg && ("shareTickets" in t ? (e = "1", wx.getShareInfo({
                                shareTicket: t.shareTickets[0],
                                success: function (t) {
                                    D.share(this, function (t) {
                                        var t = JSON.parse(t.currentTarget.response);
                                        console.log("分享接口"), console.log(t), wx.showToast({
                                            title: t.msg,
                                            icon: "",
                                            duration: 2e3
                                        }), 200 == t.code && (j.shareLimits[4] = t.data.is_share, j.TotalMoney += 2 * j.backMoney, wt.notify("getfree", !1), wt.hideView())
                                    }, e, encodeURIComponent(t.encryptedData), encodeURIComponent(t.iv), "3")
                                }
                            })) : D.share(this, function (t) {
                                var t = JSON.parse(t.currentTarget.response);
                                console.log("分享接口"), console.log(t), wx.showToast({
                                    title: t.msg,
                                    icon: "success",
                                    duration: 2e3
                                })
                            }, e, "", "", "3"))
                        },
                        fail: function (t) {
                            console.log(t)
                        }
                    })) : 1 == j.videoLimits[4] ? ft.showVideoAd("adunit-ae56d3bbdc2aee40", function () {
                        D.watch(this, function (t) {
                            var t = JSON.parse(t.currentTarget.response);
                            console.log("看视频接口"), console.log(t), wx.showToast({
                                title: t.msg,
                                icon: "success",
                                duration: 2e3
                            }), 200 == t.code && (j.videoLimits[4] = t.data.is_video, j.TotalMoney += 2 * j.backMoney, wt.notify("getfree", !1), wt.hideView())
                        }, "3")
                    }, function () {
                        console.log("没看完视频")
                    }) : wx.showToast({title: j.notice_msg, icon: "", duration: 2e3});
                    break;
                case this.btn1:
                    j.TotalMoney += j.backMoney, t.Tween.removeTweens(this.light), wt.notify("getfree", !1), wt.hideView()
            }
        }, n
    }(c);
    e(R.prototype, "Comeback");
    var O = function () {
        function e(t, e, i, n) {
            var s = this;
            this.show(t, e, i, n), wt.on(function () {
                s.stop(), s.show(t, e, s.car.x, s.car.y)
            }, "speedUp"), wt.on(function () {
                s.stop(), s.show(t, e, s.car.x, s.car.y)
            }, "slowDown")
        }

        return e.prototype.show = function (e, i, n, s) {
            var o = this;
            this.car = new t.Bitmap, this.car = e;
            var a = 0;
            switch (n > 97 && n < 375 && s >= 846 && (a = 1), n >= 375 && n < 655 && s >= 846 && (a = 2), 655 == n && (a = 3), n >= 375 && n < 655 && s <= 476 && (a = 4), n > 97 && n < 375 && s <= 476 && (a = 5), 97 == n && (a = 6), a) {
                case 1:
                    r = (159 * n + 116 * s - 113559) / 80394;
                    t.Tween.get(this).to({curve1: r}).to({curve1: 1}, (1 - r) * i * j.speedUp).call(function () {
                        t.Tween.get(o).to({curve2: 1}, i * j.speedUp).call(function () {
                            t.Tween.get(o.car).to({rotation: 180}).to({y: 476}, i * j.speedUp * .5).call(function () {
                                t.Tween.get(o).to({curve3: 1}, i * j.speedUp).call(function () {
                                    t.Tween.get(o).to({curve4: 1}, i * j.speedUp).call(function () {
                                        o.move(i)
                                    })
                                })
                            })
                        })
                    });
                    break;
                case 2:
                    r = (142 * n - 115 * s + 79920) / 75640;
                    t.Tween.get(this).to({curve2: r}).to({curve2: 1}, (1 - r) * i * j.speedUp).call(function () {
                        t.Tween.get(o.car).to({rotation: 180}).to({y: 476}, i * j.speedUp * .5).call(function () {
                            t.Tween.get(o).to({curve3: 1}, i * j.speedUp).call(function () {
                                t.Tween.get(o).to({curve4: 1}, i * j.speedUp).call(function () {
                                    o.move(i)
                                })
                            })
                        })
                    });
                    break;
                case 3:
                    t.Tween.get(this.car).to({
                        rotation: 180,
                        x: 655,
                        y: s
                    }).to({y: 476}, (846 - s) / 370 * i * j.speedUp * .5).call(function () {
                        t.Tween.get(o).to({curve3: 1}, i * j.speedUp).call(function () {
                            t.Tween.get(o).to({curve4: 1}, i * j.speedUp).call(function () {
                                o.move(i)
                            })
                        })
                    });
                    break;
                case 4:
                    r = (326285 - 331 * n - 230 * s) / 167430;
                    t.Tween.get(this).to({curve3: r}).to({curve3: 1}, (1 - r) * i * j.speedUp).call(function () {
                        t.Tween.get(o).to({curve4: 1}, i * j.speedUp).call(function () {
                            o.move(i)
                        })
                    });
                    break;
                case 5:
                    var r = (89093 - 331 * n + 232 * s) / 167418;
                    t.Tween.get(this).to({curve4: r}).to({curve4: 1}, (1 - r) * i * j.speedUp).call(function () {
                        o.move(i)
                    });
                    break;
                case 6:
                    t.Tween.get(this.car).to({y: s}).to({y: 846}, (846 - s) / 370 * i * j.speedUp * .5).call(function () {
                        t.Tween.get(o).to({curve1: 1}, i * j.speedUp).call(function () {
                            t.Tween.get(o).to({curve2: 1}, i * j.speedUp).call(function () {
                                t.Tween.get(o.car).to({rotation: 180}).to({y: 476}, i * j.speedUp * .5).call(function () {
                                    t.Tween.get(o).to({curve3: 1}, i * j.speedUp).call(function () {
                                        t.Tween.get(o).to({curve4: 1}, i * j.speedUp).call(function () {
                                            o.move(i)
                                        })
                                    })
                                })
                            })
                        })
                    })
            }
        }, e.prototype.move = function (e) {
            var i = this;
            t.Tween.get(this.car).to({y: 846}, e * j.speedUp * .5).call(function () {
                t.Tween.get(i).to({curve1: 1}, e * j.speedUp).call(function () {
                    t.Tween.get(i).to({curve2: 1}, e * j.speedUp).call(function () {
                        t.Tween.get(i.car).to({rotation: 180}).to({y: 476}, e * j.speedUp * .5).call(function () {
                            t.Tween.get(i).to({curve3: 1}, e * j.speedUp).call(function () {
                                t.Tween.get(i).to({curve4: 1}, e * j.speedUp).call(function () {
                                    i.move(e)
                                })
                            })
                        })
                    })
                })
            })
        }, e.prototype.stop = function () {
            t.Tween.removeTweens(this.car), t.Tween.removeTweens(this)
        }, Object.defineProperty(e.prototype, "curve1", {
            get: function () {
                return 0
            }, set: function (t) {
                this.car.x = (1 - t) * (1 - t) * 97 + 2 * t * (1 - t) * 120 + t * t * 375, this.car.y = (1 - t) * (1 - t) * 846 + 2 * t * (1 - t) * 1161 + t * t * 1158, this.car.rotation = -90 * t
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "curve2", {
            get: function () {
                return 0
            }, set: function (t) {
                this.car.x = (1 - t) * (1 - t) * 375 + 2 * t * (1 - t) * 630 + t * t * 655, this.car.y = (1 - t) * (1 - t) * 1158 + 2 * t * (1 - t) * 1144 + t * t * 846, this.car.rotation = -90 - 90 * t
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "curve3", {
            get: function () {
                return 0
            }, set: function (t) {
                this.car.x = (1 - t) * (1 - t) * 655 + 2 * t * (1 - t) * 630 + t * t * 375, this.car.y = (1 - t) * (1 - t) * 476 + 2 * t * (1 - t) * 148 + t * t * 151, this.car.rotation = 180 - 90 * t
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "curve4", {
            get: function () {
                return 0
            }, set: function (t) {
                this.car.x = (1 - t) * (1 - t) * 375 + 2 * t * (1 - t) * 120 + t * t * 97, this.car.y = (1 - t) * (1 - t) * 151 + 2 * t * (1 - t) * 148 + t * t * 476, this.car.rotation = 90 - 90 * t
            }, enumerable: !0, configurable: !0
        }), e
    }();
    e(O.prototype, "Creatcar");
    var P = function (e) {
        function n() {
            return e.call(this) || this
        }

        return i(n, e), n.prototype.createChildren = function () {
            e.prototype.createChildren.call(this)
        }, n.prototype.show = function (i) {
            e.prototype.show.call(this, i), this.bg.touchEnabled = !0, this.bg.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.init()
        }, n.prototype.init = function () {
            this.scr = new t.ScrollView, this.spr = new t.Sprite, this.scr.x = 0, this.scr.y = 138, this.scr.width = 750, 1 == j.isIPX ? this.scr.height = 1486 : this.scr.height = 1196, this.addChild(this.scr), this.scr.bounces = !1, this.scr.setContent(this.spr), this.click = mt.Tools.drawRect(0, 30, 100, 100, 65535, 0), this.addChild(this.click), this.click.touchEnabled = !0, this.click.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.creatSpr()
        }, n.prototype.creatSpr = function () {
            for (var e = this, i = 0; i < j.detaildata.length; i++) {
                var n = mt.Tools.addbm("Details_base_png", 0, 132 * i);
                this.spr.addChild(n);
                var s = mt.Tools.add_input(27, 132 * i + 5, 400, 40, 25, "left", 2236962, !1, j.detaildata[i].draw_sn);
                this.spr.addChild(s);
                var o = mt.Tools.add_input(27, 132 * i + 186 - 138, 400, 40, 25, "left", 2236962, !1, "提现金额：" + j.detaildata[i].total);
                this.spr.addChild(o);
                var a = mt.Tools.add_input(27, 132 * i + 90, 400, 30, 25, "left", 10921638, !1, j.detaildata[i].create_time);
                this.spr.addChild(a);
                var r = mt.Tools.addbm("Cash_btn9_png", 560, 132 * i + 173 - 138);
                this.spr.addChild(r), j.detaildata[i].status < 3 && function () {
                    r.texture = RES.getRes("Cash_btn8_png"), r.name = "btn", r.touchEnabled = !0;
                    var n = j.detaildata[i].draw_sn;
                    console.log(n), r.addEventListener(t.TouchEvent.TOUCH_TAP, function () {
                        t.setTimeout(function () {
                            wt.hideView()
                        }, this, 2e3), wx.navigateToMiniProgram({
                            appId: "wx3ec390cc2010fc31",
                            path: "pages/forward/forward?draw_sn=" + n + "&gameid=123&appid=wx969a3871e990c20c",
                            envVersion: "trial"
                        })
                    }, e)
                }()
            }
        }, n.prototype.onTouchTap = function (t) {
            switch (t.currentTarget) {
                case this.bg:
                    break;
                case this.click:
                    wt.changeView(S)
            }
        }, n
    }(l);
    e(P.prototype, "Details");
    var I = function (e) {
        function n() {
            return e.call(this) || this
        }

        return i(n, e), n.prototype.createChildren = function () {
            e.prototype.createChildren.call(this)
        }, n.prototype.show = function (i) {
            e.prototype.show.call(this, i), this.bg.touchEnabled = !0, this.bg.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn.touchEnabled = !0, this.btn.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn1.touchEnabled = !0, this.btn1.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), 1 == j.isIPX && (this.y += 145, this.bg.scaleX = 1624 / 1334, this.bg.scaleY = 1624 / 1334, this.bg.y -= 145), 2 != j.style && 0 != j.shareLimits[2] || (this.btn.texture = RES.getRes("Free_btn1_png")), mt.Tools.xuanzhuan(this.light, !0, 360, 5e3), this.money.verticalAlign = "middle", this.doubleMoney.verticalAlign = "middle", this.money.text = "+" + j.freeMoney.toLocaleString(), this.doubleMoney.text = "+" + (2 * j.freeMoney).toLocaleString()
        }, n.prototype.hide = function () {
            t.Tween.removeTweens(this.light)
        }, n.prototype.onTouchTap = function (e) {
            switch (e.currentTarget) {
                case this.bg:
                    break;
                case this.btn:
                    1 == j.style && 1 == j.shareLimits[2] ? (j.isShare = !0, wx.shareAppMessage({
                        title: j.shareTitle,
                        imageUrl: j.shareImg,
                        success: function (t) {
                            console.log(t);
                            var e = "2";
                            "shareAppMessage:ok" == t.errMsg && ("shareTickets" in t ? (e = "1", wx.getShareInfo({
                                shareTicket: t.shareTickets[0],
                                success: function (t) {
                                    D.share(this, function (t) {
                                        var t = JSON.parse(t.currentTarget.response);
                                        console.log("分享接口"), console.log(t), wx.showToast({
                                            title: t.msg,
                                            icon: "success",
                                            duration: 2e3
                                        }), 200 == t.code && (j.shareLimits[2] = t.data.is_share, j.TotalMoney += 2 * j.freeMoney, wt.notify("getfree", !1), wt.hideView())
                                    }, e, encodeURIComponent(t.encryptedData), encodeURIComponent(t.iv), "1")
                                }
                            })) : D.share(this, function (t) {
                                var t = JSON.parse(t.currentTarget.response);
                                console.log("分享接口"), console.log(t), wx.showToast({
                                    title: t.msg,
                                    icon: "success",
                                    duration: 2e3
                                })
                            }, e, "", "", "1"))
                        },
                        fail: function (t) {
                        }
                    })) : 1 == j.videoLimits[2] ? ft.showVideoAd("adunit-ae56d3bbdc2aee40", function () {
                        D.watch(this, function (t) {
                            var t = JSON.parse(t.currentTarget.response);
                            console.log("看视频接口"), console.log(t), wx.showToast({
                                title: t.msg,
                                icon: "success",
                                duration: 2e3
                            }), 200 == t.code && (j.videoLimits[2] = t.data.is_video, j.TotalMoney += 2 * j.freeMoney, wt.notify("getfree", !1), wt.hideView())
                        }, "1")
                    }, function () {
                        console.log("没看完视频")
                    }) : wx.showToast({title: j.notice_msg, icon: "", duration: 2e3});
                    break;
                case this.btn1:
                    j.TotalMoney += j.freeMoney, t.Tween.removeTweens(this.light), wt.notify("getfree", !1), wt.hideView()
            }
        }, n
    }(d);
    e(I.prototype, "Free");
    var M = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.buyBtns = [], t.shareBtns = [], t.moneyTexts = [], t.lockCars = [], t.lockMask = [], t.bases = [], t.restCars = [], t.backIcon = [], t.secondMoney = 0, t.moveCars = [], t.canPlay = !1, t.canPlay2 = !1, t.coinArr = [{
                x: 630,
                y: 474,
                sx: .8,
                sy: 1
            }, {x: 613, y: 492, sx: .8, sy: 1}, {x: 638, y: 489, sx: 1, sy: .5}, {
                x: 659,
                y: 495,
                sx: 1,
                sy: .7
            }, {x: 630, y: 474, sx: .7, sy: .9}, {x: 595, y: 508, sx: 1, sy: .6}, {
                x: 592,
                y: 523,
                sx: .6,
                sy: 1
            }, {x: 630, y: 507, sx: .8, sy: 1}, {x: 621, y: 519, sx: 1, sy: .9}, {
                x: 650,
                y: 517,
                sx: 1,
                sy: 1
            }, {x: 670, y: 512, sx: .7, sy: 1}, {x: 571, y: 533, sx: 1, sy: .6}, {
                x: 603,
                y: 536,
                sx: 1,
                sy: 1
            }, {x: 634, y: 534, sx: 1, sy: 1}, {x: 660, y: 534, sx: .7, sy: 1}, {x: 693, y: 540, sx: 1, sy: 1}, {
                x: 577,
                y: 549,
                sx: 1,
                sy: .9
            }, {x: 618, y: 550, sx: .9, sy: .7}, {x: 662, y: 557, sx: 1, sy: .6}, {
                x: 638,
                y: 557,
                sx: .7,
                sy: 1
            }], t.siteArr = [], t.siteNum = 2, t
        }

        return i(n, e), n.prototype.createChildren = function () {
            e.prototype.createChildren.call(this)
        }, n.prototype.show = function (i) {
            e.prototype.show.call(this, i), this.bg.touchEnabled = !0, this.bg.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.help.touchEnabled = !0, this.help.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.invite.touchEnabled = !0, this.invite.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.sign.touchEnabled = !0, this.sign.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.home.touchEnabled = !0, this.home.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.guide.touchEnabled = !0, this.guide.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.speedup.touchEnabled = !0, this.speedup.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.shop.touchEnabled = !0, this.shop.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.free.touchEnabled = !0, this.free.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.init()
        }, n.prototype.countTime = function () {
            var e = this;
            this.speedup.texture = RES.getRes("Game_speedup1_png"), this.speedup.touchEnabled = !1;
            var i = t.setInterval(function () {
                j.speedUpTime--, j.speedUpTime > 0 ? (j.speedUp = .5, j.speedUpTime >= 120 && (j.speedUpTime - 120 > 9 ? e.bitText.text = "02s" + (j.speedUpTime - 120) : e.bitText.text = "02s0" + (j.speedUpTime - 120)), j.speedUpTime < 120 && j.speedUpTime >= 60 && (j.speedUpTime - 60 > 9 ? e.bitText.text = "01s" + (j.speedUpTime - 60) : e.bitText.text = "01s0" + (j.speedUpTime - 60)), j.speedUpTime < 60 && (j.speedUpTime > 9 ? e.bitText.text = "00s" + j.speedUpTime : e.bitText.text = "00s0" + j.speedUpTime)) : (j.speedUp = 1, e.second.text = e.format1(Number((j.SecMoney / j.speedUp).toFixed(1))), t.clearInterval(i), e.speedup.texture = RES.getRes("Game_speedup_png"), e.speedup.touchEnabled = !0, e.bitText.text = "", wt.notify("slowDown", !1))
            }, this, 1e3)
        }, n.prototype.init = function () {
            var e = this;
            1 == j.isIPX && (this.y += 145), "0" == j.isSign ? this.sign.texture = RES.getRes("Game_sign_png") : this.sign.texture = RES.getRes("Game_sign1_png"), 2 == j.style && (this.help.visible = !1, this.friendNum.visible = !1, this.extra.visible = !1, this.invite.visible = !1), 1 == j.isBlack && (this.help.visible = !1, this.friendNum.visible = !1, this.extra.visible = !1, this.invite.visible = !1, this.sign.visible = !1, this.home.visible = !1, this.free.visible = !1, this.speedup.visible = !1), this.sound_coin = new t.Sound, this.sound_coin.addEventListener(t.Event.COMPLETE, function () {
                e.canPlay = !0
            }, this), this.sound_coin.load("http://ossall.5iape.com/upload/scyj/coin.mp3"), this.sound_he = new t.Sound, this.sound_he.addEventListener(t.Event.COMPLETE, function () {
            }, this), this.sound_he.load("http://ossall.5iape.com/upload/scyj/hecheng.mp3"), this.sound_buy = new t.Sound, this.sound_buy.addEventListener(t.Event.COMPLETE, function () {
            }, this), this.sound_buy.load("http://ossall.5iape.com/upload/scyj/buy.mp3"), e.friendNum.text = j.help_list.length + "位好友", e.extra.text = "+" + 15 * j.help_list.length + "%", this.bitText = wt.Tools.createBitmapText("nums_fnt"), this.bitText.x = 206, this.bitText.y = 878, this.bitText.width = 120, this.bitText.height = 30, this.addChild(this.bitText), this.bitText.textAlign = "center", this.bitText.verticalAlign = "middle", j.SecMoney = 0, j.speedUpTime > 0 && (this.second.text = e.format1(Number((j.SecMoney / j.speedUp).toFixed(1))), this.speedup.texture = RES.getRes("Game_speedup1_png"), j.speedUpTime > 120 && (j.speedUpTime - 120 > 9 ? this.bitText.text = "02s" + (j.speedUpTime - 120) : this.bitText.text = "02s0" + (j.speedUpTime - 120)), j.speedUpTime < 120 && j.speedUpTime >= 60 && (j.speedUpTime - 60 > 9 ? this.bitText.text = "01s" + (j.speedUpTime - 60) : this.bitText.text = "01s0" + (j.speedUpTime - 60)), j.speedUpTime < 60 && (j.speedUpTime > 9 ? this.bitText.text = "00s" + j.speedUpTime : this.bitText.text = "00s0" + j.speedUpTime), this.countTime()), this.second.verticalAlign = "middle", this.total.verticalAlign = "middle", this.friendNum.verticalAlign = "middle", this.extra.verticalAlign = "middle", this.runNum.verticalAlign = "middle", this.runNum.bold = !0, this.invite.name = "btn", this.sign.name = "btn", this.home.name = "btn", this.guide.name = "btn", this.speedup.name = "btn", this.shop.name = "btn", this.free.name = "btn", this.total.text = this.format2(Math.round(j.TotalMoney)), this.siteSpr = new t.Sprite, this.siteSpr.x = 65, this.siteSpr.y = 476, this.siteSpr.width = 66, this.siteSpr.height = 480, this.addChild(this.siteSpr);
            var i = mt.Tools.drawRect(-16, 0, 100, 400, 6737151, 0);
            this.siteSpr.addChild(i), this.carSpr = new t.Sprite, this.carSpr.x = 0, this.carSpr.y = 0, this.baseSpr = new t.Sprite, this.baseSpr.x = 0, this.baseSpr.y = 0, this.addChild(this.baseSpr), this.addChild(this.carSpr), this.addChild(this.board), this.addChild(this.runNum), j.HighCar < 4 && (this.siteNum = 2), j.HighCar >= 4 && j.HighCar <= 7 && (this.siteNum = 2 + 2 * (j.HighCar - 3)), j.HighCar > 7 && (this.siteNum = 10), this.runNum.text = this.moveCars.length + "/" + this.siteNum, this.creatSite(this.siteNum), this.creatRoad(j.restCondition.length);
            for (l = 0; l < j.restCondition.length; l++) this.creatRest(l);
            this.shopSpr = new t.Sprite, this.shopSpr.x = 0, this.shopSpr.y = 0, this.shopSpr.width = 750, this.shopSpr.height = 1624, this.addChild(this.shopSpr), this.tips = mt.Tools.addbm("tips_jpg", 94.5, 400), this.addChild(this.tips), this.tips.alpha = 0, this.shopSpr.visible = !1;
            var n = mt.Tools.addbm("Shop_bg_png", 0, -145);
            this.shopSpr.addChild(n), n.height = 1624, n.touchEnabled = !0, n.addEventListener(t.TouchEvent.TOUCH_TAP, function () {
            }, this), n.width = 750, n.height = 1624;
            var s = mt.Tools.addbm("Shop_rect_jpg", 49, 98);
            this.shopSpr.addChild(s);
            var o = mt.Tools.addbm("Shop_coin_png", 49, 33);
            this.shopSpr.addChild(o), o.scaleX = 1.2, o.scaleY = 1.2, this.shopTotalText = mt.Tools.add_input(112, 35, 400, 40, 30, "left", 16777215, !1, this.format2(Math.round(j.TotalMoney)) + ""), this.shopSpr.addChild(this.shopTotalText);
            var a = mt.Tools.addbm("Shop_btn_png", 625, 114);
            this.shopSpr.addChild(a), a.name = "btn", a.touchEnabled = !0, a.addEventListener(t.TouchEvent.TOUCH_TAP, function () {
                e.shopSpr.visible = !1
            }, this), this.scr = new t.ScrollView, this.spr = new t.Sprite, this.scr.x = 82, this.scr.y = 288, this.scr.width = 587, this.scr.height = 840, this.shopSpr.addChild(this.scr), this.scr.setContent(this.spr), this.scr.horizontalScrollPolicy = "off", this.scr.bounces = !1, j.HighCar < 4 && (this.shop.texture = RES.getRes("Game_shop1_png"), this.level1Text = mt.Tools.add_input(408, 960, 100, 40, 30, "center", 0, !1, j.shopCondition[0] + ""), this.carSpr.addChild(this.level1Text));
            for (var r, h, c = this, l = 0; l < 31; l++) !function (i) {
                r = mt.Tools.addbm("Shop_base_png", 0, 168 * i), c.spr.addChild(r), c.buyBtns[i] = mt.Tools.addbm("Shop_gray_png", 365, 44 + 168 * i), c.spr.addChild(c.buyBtns[i]), i <= j.HighCar - 4 && (c.buyBtns[i].texture = RES.getRes("Shop_blue_png"), c.buyBtns[i].touchEnabled = !0), c.buyBtns[i].name = "btn", c.moneyTexts[i] = mt.Tools.add_input(405, 44 + 168 * i, 160, 64, 30, "center", 16777215, !1, j.shopCondition[i].toLocaleString()), c.moneyTexts[i].text = c.format1(j.shopCondition[i]), c.spr.addChild(c.moneyTexts[i]), h = mt.Tools.addbm("Shop_coin_png", 386, 55 + 168 * i), c.spr.addChild(h), c.shareBtns[i] = mt.Tools.addbm("Shop_btn1_png", 260, 33 + 168 * i), 2 != j.style && 0 != j.shareLimits[0] || (c.shareBtns[i].texture = RES.getRes("Shop_btn2_png")), c.spr.addChild(c.shareBtns[i]), c.shareBtns[i].visible = !1, c.shareBtns[i].name = "btn", c.shareBtns[i].touchEnabled = !0, c.shareBtns[i].addEventListener(t.TouchEvent.TOUCH_TAP, function () {
                    for (var e = this, n = !1, s = 0, o = 0; o < j.restCondition.length; o++) 0 == j.restCondition[o].style && 0 == n && (n = !0, s = o);
                    1 == n ? 1 == j.style && 1 == j.shareLimits[0] ? (j.isShare = !0, wx.shareAppMessage({
                        title: j.shareTitle,
                        imageUrl: j.shareImg,
                        success: function (t) {
                            console.log(t), "shareAppMessage:ok" == t.errMsg && ("shareTickets" in t ? wx.getShareInfo({
                                shareTicket: t.shareTickets[0],
                                success: function (t) {
                                    D.getFree(this, function (t) {
                                        var t = JSON.parse(t.currentTarget.response);
                                        console.log("领取免费车接口"), console.log(t), wx.showToast({
                                            title: t.msg,
                                            icon: "success",
                                            duration: 2e3
                                        }), 200 == t.code && (j.shareLimits[0] = t.data.is_share, c.shareBtns[i].visible = !1, j.restCondition[s].style = j.HighCar - j.diffCar, e.restCars[s].texture = RES.getRes("Cars_rest" + j.restCondition[s].style + "_png"), e.restCars[s].scaleX = e.bases[s].scaleX / .7, e.restCars[s].scaleY = e.bases[s].scaleY / .7, e.carSpr.addChild(e.restCars[s]), wt.Tools.center(e.restCars[s]), e.restCars[s].x = e.bases[s].x, e.restCars[s].y = e.bases[s].y - 10, e.restCars[s].alpha = j.restCondition[s].alp)
                                    }, "2", encodeURIComponent(t.encryptedData), encodeURIComponent(t.iv))
                                }
                            }) : wx.showToast({title: "请分享到群", icon: "success", duration: 2e3}))
                        },
                        fail: function (t) {
                            console.log(t)
                        }
                    })) : 1 == j.videoLimits[0] ? ft.showVideoAd("adunit-ae56d3bbdc2aee40", function () {
                        D.getFree(this, function (t) {
                            var t = JSON.parse(t.currentTarget.response);
                            console.log("领取免费车接口"), console.log(t), wx.showToast({
                                title: t.msg,
                                icon: "success",
                                duration: 2e3
                            }), 200 == t.code && (j.videoLimits[0] = t.data.is_video, c.shareBtns[i].visible = !1, j.restCondition[s].style = j.HighCar - j.diffCar, e.restCars[s].texture = RES.getRes("Cars_rest" + j.restCondition[s].style + "_png"), e.restCars[s].scaleX = e.bases[s].scaleX / .7, e.restCars[s].scaleY = e.bases[s].scaleY / .7, e.carSpr.addChild(e.restCars[s]), wt.Tools.center(e.restCars[s]), e.restCars[s].x = e.bases[s].x, e.restCars[s].y = e.bases[s].y - 10, e.restCars[s].alpha = j.restCondition[s].alp)
                        }, "1", "", "")
                    }, function () {
                        console.log("没看完视频")
                    }) : wx.showToast({
                        title: j.notice_msg,
                        icon: "",
                        duration: 2e3
                    }) : (t.Tween.removeTweens(this.tips), t.Tween.get(this.tips).to({alpha: 1}).wait(1e3).to({alpha: 0}, 1e3))
                }, c), c.lockCars[i] = mt.Tools.addbm("Cars_clock" + (i + 1) + "_png", 30, 30 + 168 * i), c.lockCars[i].scaleX = .4, c.lockCars[i].scaleY = .4, c.spr.addChild(c.lockCars[i]), i > j.HighCar - 4 && (c.lockCars[i].texture = RES.getRes("Cars_clock0_png"), c.moneyTexts[i].text = "未解锁"), c.buyBtns[i].addEventListener(t.TouchEvent.TOUCH_TAP, function () {
                    e.buyCar(i)
                }, c)
            }(l);
            wt.on(function () {
                e.friendNum.text = j.help_list.length + "位好友", e.extra.text = "+" + 15 * j.help_list.length + "%", e.total.text = e.format2(j.TotalMoney), e.shopTotalText.text = e.format2(j.TotalMoney)
            }, "getfree"), wt.on(function () {
                e.friendNum.text = j.help_list.length + "位好友", e.extra.text = "+" + 15 * j.help_list.length + "%", e.total.text = e.format2(Math.round(j.TotalMoney)), e.shopTotalText.text = e.format2(j.TotalMoney)
            }, "getfriend"), wt.on(function () {
                var t = 0;
                t = j.HighCar > j.diffCar ? j.HighCar - j.diffCar : 1, j.restCondition[j.carIndex].style = t, e.restCars[j.carIndex].texture = RES.getRes("Cars_rest" + t + "_png"), e.restCars[j.carIndex].scaleX = e.bases[j.carIndex].scaleX / .7, e.restCars[j.carIndex].scaleY = e.bases[j.carIndex].scaleY / .7, e.carSpr.addChild(e.restCars[j.carIndex]), wt.Tools.center(e.restCars[j.carIndex]), e.restCars[j.carIndex].x = e.bases[j.carIndex].x, e.restCars[j.carIndex].y = e.bases[j.carIndex].y - 10, e.restCars[j.carIndex].alpha = j.restCondition[j.carIndex].alp
            }, "getcar")
        }, n.prototype.buyCar = function (e) {
            var i = this;
            if (j.TotalMoney > j.shopCondition[e]) {
                for (var n = !1, s = 0; s < j.restCondition.length; s++) 0 == j.restCondition[s].style && 0 == n && (j.restCondition[s].style = e + 1, this.restCars[s].texture = RES.getRes("Cars_rest" + j.restCondition[s].style + "_png"), this.restCars[s].scaleX = this.bases[s].scaleX / .7, this.restCars[s].scaleY = this.bases[s].scaleY / .7, this.carSpr.addChild(this.restCars[s]), wt.Tools.center(this.restCars[s]), this.restCars[s].x = this.bases[s].x, this.restCars[s].y = this.bases[s].y - 10, this.restCars[s].alpha = j.restCondition[s].alp, n = !0);
                1 == n ? (j.TotalMoney -= j.shopCondition[e], this.total.text = this.format2(Math.round(j.TotalMoney)), this.shopTotalText.text = this.format2(Math.round(j.TotalMoney)), j.shopCondition[e] = 0 == e ? Math.round(1.07 * j.shopCondition[e]) : Math.round(1.18 * j.shopCondition[e]), this.moneyTexts[e].text = this.format1(j.shopCondition[e]), i.sound_buy.play(0, 1)) : (t.Tween.removeTweens(this.tips), t.Tween.get(this.tips).to({alpha: 1}).wait(1e3).to({alpha: 0}, 1e3))
            } else {
                var o = mt.Tools.drawRect(0, 0, 750, 1624, 6737151, 0);
                this.addChild(o), o.touchEnabled = !0, o.addEventListener(t.TouchEvent.TOUCH_TAP, function () {
                }, this);
                var a = mt.Tools.addbm("Shop_tips_png", 94.5, 400);
                this.addChild(a);
                var r = mt.Tools.addbm("Shop_btn3_png", 266, 550);
                2 != j.style && 0 != j.shareLimits[5] || (r.texture = RES.getRes("Shop_btn4_png")), this.addChild(r), r.touchEnabled = !0, r.name = "btn", r.addEventListener(t.TouchEvent.TOUCH_TAP, function () {
                    for (var n = !1, s = 0, c = 0; c < j.restCondition.length; c++) 0 == j.restCondition[c].style && 0 == n && (n = !0, s = c);
                    1 == n ? 1 == j.style && 1 == j.shareLimits[5] ? (j.isShare = !0, wx.shareAppMessage({
                        title: j.shareTitle,
                        imageUrl: j.shareImg,
                        success: function (t) {
                            console.log(t), "shareAppMessage:ok" == t.errMsg && ("shareTickets" in t ? wx.getShareInfo({
                                shareTicket: t.shareTickets[0],
                                success: function (t) {
                                    D.share(this, function (t) {
                                        var t = JSON.parse(t.currentTarget.response);
                                        console.log("通用分享接口"), console.log(t), wx.showToast({
                                            title: t.msg,
                                            icon: "success",
                                            duration: 2e3
                                        }), 200 == t.code && (j.shareLimits[5] = t.data.is_share, i.removeChild(o), i.removeChild(a), i.removeChild(r), i.removeChild(h), j.restCondition[s].style = e + 1, i.restCars[s].texture = RES.getRes("Cars_rest" + j.restCondition[s].style + "_png"), i.restCars[s].scaleX = i.bases[s].scaleX / .7, i.restCars[s].scaleY = i.bases[s].scaleY / .7, i.carSpr.addChild(i.restCars[s]), wt.Tools.center(i.restCars[s]), i.restCars[s].x = i.bases[s].x, i.restCars[s].y = i.bases[s].y - 10, i.restCars[s].alpha = j.restCondition[s].alp)
                                    }, "1", encodeURIComponent(t.encryptedData), encodeURIComponent(t.iv), "6")
                                }
                            }) : wx.showToast({title: "请分享到群", icon: "success", duration: 2e3}))
                        },
                        fail: function (t) {
                            console.log(t)
                        }
                    })) : 1 == j.videoLimits[5] ? ft.showVideoAd("adunit-ae56d3bbdc2aee40", function () {
                        D.watch(this, function (t) {
                            var t = JSON.parse(t.currentTarget.response);
                            console.log("看视频接口"), console.log(t), wx.showToast({
                                title: t.msg,
                                icon: "success",
                                duration: 2e3
                            }), 200 == t.code && (j.videoLimits[5] = t.data.is_video, i.removeChild(o), i.removeChild(a), i.removeChild(r), i.removeChild(h), j.restCondition[s].style = e + 1, i.restCars[s].texture = RES.getRes("Cars_rest" + j.restCondition[s].style + "_png"), i.restCars[s].scaleX = i.bases[s].scaleX / .7, i.restCars[s].scaleY = i.bases[s].scaleY / .7, i.carSpr.addChild(i.restCars[s]), wt.Tools.center(i.restCars[s]), i.restCars[s].x = i.bases[s].x, i.restCars[s].y = i.bases[s].y - 10, i.restCars[s].alpha = j.restCondition[s].alp)
                        }, "6")
                    }, function () {
                        console.log("没看完视频")
                    }) : wx.showToast({
                        title: j.notice_msg,
                        icon: "",
                        duration: 2e3
                    }) : (i.addChild(i.tips), t.Tween.removeTweens(i.tips), t.Tween.get(i.tips).to({alpha: 1}).wait(1e3).to({alpha: 0}, 1e3))
                }, this);
                var h = mt.Tools.addbm("Shop_btn_png", 588, 410);
                this.addChild(h), h.name = "btn", h.touchEnabled = !0, h.addEventListener(t.TouchEvent.TOUCH_TAP, function () {
                    this.removeChild(o), this.removeChild(a), this.removeChild(r), this.removeChild(h)
                }, this)
            }
        }, n.prototype.format1 = function (t) {
            return t < 1e4 && (t = t.toLocaleString()), t >= 1e4 && t < 1e7 && (t = Math.round(t / 1e3).toLocaleString() + "K"), t >= 1e7 && t < 1e10 && (t = Math.round(t / 1e6).toLocaleString() + "M"), t >= 1e10 && t < 1e13 && (t = Math.round(t / 1e9).toLocaleString() + "G"), t >= 1e13 && t < 1e16 && (t = Math.round(t / 1e12).toLocaleString() + "T"), t >= 1e16 && t < 1e19 && (t = Math.round(t / 1e15).toLocaleString() + "P"), t >= 1e19 && t < 1e22 && (t = Math.round(t / 1e18).toLocaleString() + "E"), t >= 1e22 && t < 1e25 && (t = Math.round(t / 1e21).toLocaleString() + "Z"), t >= 1e25 && t < 1e28 && (t = Math.round(t / 1e24).toLocaleString() + "Y"), t >= 1e28 && t < 1e31 && (t = Math.round(t / 1e27).toLocaleString() + "B"), t >= 1e31 && t < 1e34 && (t = Math.round(t / 1e30).toLocaleString() + "N"), t >= 1e34 && t < 1e37 && (t = Math.round(t / 1e33).toLocaleString() + "D"), t >= 1e37 && t < 1e40 && (t = Math.round(t / 1e36).toLocaleString() + "C"), t >= 1e40 && t < 1e43 && (t = Math.round(t / 1e39).toLocaleString() + "X"), t
        }, n.prototype.format2 = function (t) {
            return t < 1e7 && (t = t.toLocaleString()), t >= 1e7 && t < 1e10 && (t = Math.round(t / 1e3).toLocaleString() + "K"), t >= 1e10 && t < 1e13 && (t = Math.round(t / 1e6).toLocaleString() + "M"), t >= 1e13 && t < 1e16 && (t = Math.round(t / 1e9).toLocaleString() + "G"), t >= 1e16 && t < 1e19 && (t = Math.round(t / 1e12).toLocaleString() + "T"), t >= 1e19 && t < 1e22 && (t = Math.round(t / 1e15).toLocaleString() + "P"), t >= 1e22 && t < 1e25 && (t = Math.round(t / 1e18).toLocaleString() + "E"), t >= 1e25 && t < 1e28 && (t = Math.round(t / 1e21).toLocaleString() + "Z"), t >= 1e28 && t < 1e31 && (t = Math.round(t / 1e24).toLocaleString() + "Y"), t >= 1e31 && t < 1e34 && (t = Math.round(t / 1e27).toLocaleString() + "B"), t >= 1e34 && t < 1e37 && (t = Math.round(t / 1e30).toLocaleString() + "N"), t >= 1e37 && t < 1e40 && (t = Math.round(t / 1e33).toLocaleString() + "D"), t >= 1e40 && t < 1e43 && (t = Math.round(t / 1e36).toLocaleString() + "C"), t >= 1e43 && t < 1e46 && (t = Math.round(t / 1e39).toLocaleString() + "X"), t
        }, n.prototype.creatRoad = function (t) {
            if (t <= 12) {
                for (e = 0; e < 4 && e < t; e++) this.bases[e] = mt.Tools.addbm("Game_base1_png", 189, 418 + 110 * e), this.baseSpr.addChild(this.bases[e]);
                for (e = 4; e < 8 && e < t; e++) this.bases[e] = mt.Tools.addbm("Game_base1_png", 377, 110 * e - 22), this.baseSpr.addChild(this.bases[e]);
                if (t > 8) for (e = 0; e < t - 8; e++) this.bases[e].x = 163, this.bases[e].y = 418 + 110 * e, this.bases[e].scaleX = .7, this.bases[e].scaleY = .7, this.bases[e + 4].x = 292, this.bases[e + 4].y = 418 + 110 * e, this.bases[e + 4].scaleX = .7, this.bases[e + 4].scaleY = .7, this.bases[e + 8] = mt.Tools.addbm("Game_base1_png", 420, 418 + 110 * e), this.baseSpr.addChild(this.bases[e + 8]), this.bases[e + 8].scaleX = .7, this.bases[e + 8].scaleY = .7
            }
            if (t > 12) {
                for (e = 0; e < 5; e++) this.bases[e] = mt.Tools.addbm("Game_base1_png", 183, 418 + 80 * e), this.baseSpr.addChild(this.bases[e]), this.bases[e].scaleX = .7, this.bases[e].scaleY = .7;
                for (e = 5; e < 10 && e < t; e++) this.bases[e] = mt.Tools.addbm("Game_base1_png", 312, 418 + 80 * (e - 5)), this.baseSpr.addChild(this.bases[e]), this.bases[e].scaleX = .7, this.bases[e].scaleY = .7;
                for (e = 10; e < t; e++) this.bases[e] = mt.Tools.addbm("Game_base1_png", 440, 418 + 80 * (e - 10)), this.baseSpr.addChild(this.bases[e]), this.bases[e].scaleX = .7, this.bases[e].scaleY = .7
            }
            for (var e = 0; e < t; e++) this.backIcon[e] = mt.Tools.addbm("Game_icon_png", this.bases[e].x + 122, this.bases[e].y + 45), this.baseSpr.addChild(this.backIcon[e]), this.backIcon[e].scaleX = this.bases[e].scaleX, this.backIcon[e].scaleY = this.bases[e].scaleY, wt.Tools.center(this.bases[e]), 1 == j.restCondition[e].alp && (this.backIcon[e].alpha = 0)
        }, n.prototype.creatRest = function (e) {
            var i = this;
            this.restCars[e] = mt.Tools.addbm("Cars_rest" + j.restCondition[e].style + "_png", this.bases[e].x + 14, this.bases[e].y - 1), this.restCars[e].scaleX = this.bases[e].scaleX / .7, this.restCars[e].scaleY = this.bases[e].scaleY / .7, this.carSpr.addChild(this.restCars[e]), wt.Tools.center(this.restCars[e]), this.restCars[e].x = this.bases[e].x, this.restCars[e].y = this.bases[e].y - 10, this.restCars[e].alpha = j.restCondition[e].alp, this.touchEnabled = !0;
            var n = 0, s = 0;
            this.addEventListener(t.TouchEvent.TOUCH_BEGIN, function (t) {
                n = t.stageX, s = t.stageY, 1 == i.restCars[e].hitTestPoint(t.stageX, t.stageY) && (i.touchEnabled = !1, i.restCars[e].touchEnabled = !0, i.carSpr.addChild(i.restCars[e]))
            }, this), this.addEventListener(t.TouchEvent.TOUCH_MOVE, function (t) {
                1 == i.restCars[e].hitTestPoint(t.stageX, t.stageY) && 1 == i.restCars[e].touchEnabled && 1 == j.restCondition[e].alp && (j.isIPX ? (i.restCars[e].x = t.stageX, i.restCars[e].y = t.stageY - 145) : (i.restCars[e].x = t.stageX, i.restCars[e].y = t.stageY))
            }, this), this.addEventListener(t.TouchEvent.TOUCH_END, function (t) {
                if (1 == i.restCars[e].hitTestPoint(t.stageX, t.stageY) && Math.abs(t.stageX - n) < 1 && Math.abs(t.stageY - s) < 1 && j.restCondition[e].style > 0 && .5 == j.restCondition[e].alp) {
                    j.restCondition[e].alp = 1, i.restCars[e].alpha = 1, i.backIcon[e].alpha = 0;
                    for (var o = [], a = 0; a < i.moveCars.length; a++) i.moveCars[a].order == e ? (i.moveCars[a].keys.stop(), i.moveCars[a].bitmap.x = 0, i.moveCars[a].bitmap.y = 0, i.carSpr.removeChild(i.moveCars[a].bitmap), i.moveCars[a].order = -1) : o.push(i.moveCars[a]);
                    j.SecMoney -= 3.6 * Math.pow(2.11, j.restCondition[e].style - 1), i.board.texture = RES.getRes("Game_board_png"), i.runNum.visible = !0, i.second.text = i.format1(Number((j.SecMoney / j.speedUp).toFixed(1))), i.moveCars = o, i.runNum.text = i.moveCars.length + "/" + i.siteNum, i.siteArr[i.moveCars.length].texture = RES.getRes("Game_site1_png")
                }
                if (1 == i.restCars[e].touchEnabled && j.restCondition[e].style > 0 && 1 == j.restCondition[e].alp && (i.touchEnabled = !0, i.restCars[e].touchEnabled = !1, i.restCars[e].x = i.bases[e].x, i.restCars[e].y = i.bases[e].y - 10, 1 == j.restCondition[e].alp)) if (1 == i.siteSpr.hitTestPoint(t.stageX, t.stageY) && i.moveCars.length < i.siteArr.length) i.creatMove(j.restCondition[e].style, 97, t.stageY, e), j.restCondition[e].alp = .5, i.restCars[e].alpha = .5, i.backIcon[e].alpha = 1; else {
                    for (a = 0; a < i.bases.length; a++) if (1 == i.bases[a].hitTestPoint(t.stageX, t.stageY) && e != a) {
                        if (1 == j.restCondition[a].alp || 0 == j.restCondition[a].alp && j.restCondition[e].style != j.restCondition[a].style) {
                            var r = j.restCondition[e];
                            j.restCondition[e] = j.restCondition[a], j.restCondition[a] = r, i.restCars[e].texture = RES.getRes("Cars_rest" + j.restCondition[e].style + "_png"), i.restCars[e].scaleX = i.bases[e].scaleX / .7, i.restCars[e].scaleY = i.bases[e].scaleY / .7, i.carSpr.addChild(i.restCars[e]), wt.Tools.center(i.restCars[e]), i.restCars[e].x = i.bases[e].x, i.restCars[e].y = i.bases[e].y - 10, i.restCars[e].alpha = j.restCondition[e].alp, i.restCars[a].texture = RES.getRes("Cars_rest" + j.restCondition[a].style + "_png"), i.restCars[a].scaleX = i.bases[a].scaleX / .7, i.restCars[a].scaleY = i.bases[a].scaleY / .7, i.carSpr.addChild(i.restCars[a]), wt.Tools.center(i.restCars[a]), i.restCars[a].x = i.bases[a].x, i.restCars[a].y = i.bases[a].y - 10, i.restCars[a].alpha = j.restCondition[a].alp
                        }
                        1 == j.restCondition[a].alp && j.restCondition[e].style == j.restCondition[a].style && j.restCondition[a].style > 0 && (j.restCondition[e].style = 0, i.restCars[e].texture = RES.getRes("Cars_rest" + j.restCondition[e].style + "_png"), j.restCondition[a].style++, i.restCars[a].texture = RES.getRes("Cars_rest" + j.restCondition[a].style + "_png"), i.sound_he.play(0, 1), i.unlock(a))
                    }
                    1 == i.kill.hitTestPoint(t.stageX, t.stageY) && i.killCar(e)
                }
            }, this)
        }, n.prototype.unlock = function (t) {
            if (j.restCondition[t].style > j.HighCar) {
                if (j.HighCar = j.restCondition[t].style, wt.changeView(F), 4 == j.HighCar && (this.shop.texture = RES.getRes("Game_shop_png"), this.carSpr.removeChild(this.level1Text)), j.HighCar >= 4 && j.HighCar <= 7) {
                    this.siteNum += 2;
                    for (e = this.siteNum - 2; e < this.siteNum; e++) this.siteArr[e] = mt.Tools.addbm("Game_site1_png", 0, 380 - 42 * e), this.siteSpr.addChild(this.siteArr[e])
                }
                if (this.runNum.text = this.moveCars.length + "/" + this.siteNum, j.HighCar >= 4 && (this.lockCars[j.HighCar - 4].texture = RES.getRes("Cars_clock" + (j.HighCar - 3) + "_png"), this.moneyTexts[j.HighCar - 4].text = this.format1(j.shopCondition[j.HighCar - 4])), j.HighCar >= 4 && (this.buyBtns[j.HighCar - 4].texture = RES.getRes("Shop_blue_png"), this.buyBtns[j.HighCar - 4].touchEnabled = !0), j.HighCar >= 4 && j.HighCar <= 9) if (this.baseSpr.removeChildren(), this.bases = [], 9 == j.HighCar) j.restCondition.push({
                    style: 0,
                    alp: 1,
                    x: 0,
                    y: 0
                }), this.creatRoad(j.restCondition.length), this.creatRest(j.restCondition.length - 1); else {
                    j.restCondition.push({style: 0, alp: 1, x: 0, y: 0}, {
                        style: 0,
                        alp: 1,
                        x: 0,
                        y: 0
                    }), this.creatRoad(j.restCondition.length), this.creatRest(j.restCondition.length - 2), this.creatRest(j.restCondition.length - 1);
                    for (var e = 0; e < j.restCondition.length; e++) this.restCars[e].scaleX = this.bases[e].scaleX / .7, this.restCars[e].scaleY = this.bases[e].scaleY / .7, this.carSpr.addChild(this.restCars[e]), wt.Tools.center(this.restCars[e]), this.restCars[e].x = this.bases[e].x, this.restCars[e].y = this.bases[e].y - 10
                }
            }
        }, n.prototype.killCar = function (t) {
            j.TotalMoney += .5 * j.shopCondition[j.restCondition[t].style - 1], this.total.text = this.format2(Math.round(j.TotalMoney)), j.restCondition[t].style = 0, this.restCars[t].texture = RES.getRes("Cars_rest" + j.restCondition[t].style + "_png")
        }, n.prototype.creatMove = function (e, i, n, s) {
            var o = this, a = mt.Tools.addbm("Cars_move" + e + "_png", 69.5, 484);
            this.carSpr.addChild(a), wt.Tools.center(a);
            var r = new O(a, Math.round(2e4 / 18 * Math.pow(2 / 2.11, e - 1)), i, n);
            this.siteArr[this.moveCars.length].texture = RES.getRes("Game_site2_png"), this.moveCars.push({
                bitmap: a,
                order: s,
                keys: r
            }), this.runNum.text = this.moveCars.length + "/" + this.siteNum, j.SecMoney += 3.6 * Math.pow(2.11, e - 1), this.moveCars.length == this.siteNum ? (this.second.text = o.format1(Number((1.1 * j.SecMoney / j.speedUp).toFixed(1))), o.board.texture = RES.getRes("Game_board1_png"), o.runNum.visible = !1) : this.second.text = o.format1(Number((j.SecMoney / j.speedUp).toFixed(1))), a.addEventListener(t.Event.ENTER_FRAME, function () {
                if (j.restCondition[s].x = a.x, j.restCondition[s].y = a.y, 655 == a.x && 476 == a.y) {
                    1 == o.canPlay && o.sound_coin.play(0, 1), this.moveCars.length == this.siteNum ? j.TotalMoney += 20 * Math.pow(2, e - 1) * j.moreMoney * 1.1 : j.TotalMoney += 20 * Math.pow(2, e - 1) * j.moreMoney, o.total.text = o.format2(j.TotalMoney), o.shopTotalText.text = o.format2(j.TotalMoney);
                    var i = mt.Tools.add_input(548, 541, 200, 40, 30, "center", 16711680, !1, "+" + o.format1(20 * Math.pow(2, e - 1) * j.moreMoney));
                    o.carSpr.addChild(i), t.Tween.get(i).to({y: 341, alpha: 0}, 1e3).call(function () {
                        o.carSpr.removeChild(i)
                    });
                    for (var n = 0; n < o.coinArr.length; n++) !function () {
                        var e = mt.Tools.addbm("Shop_coin_png", o.coinArr[n].x, o.coinArr[n].y);
                        o.carSpr.addChild(e), wt.Tools.center(e), e.scaleX = o.coinArr[n].sx, e.scaleY = o.coinArr[n].sy, t.Tween.get(e).to({
                            scaleX: e.scaleX - .5,
                            scaleY: e.scaleY - .5,
                            alpha: 0
                        }, 500).call(function () {
                            o.carSpr.removeChild(e)
                        })
                    }()
                }
            }, this)
        }, n.prototype.creatSite = function (t) {
            for (var e = 0; e < t; e++) this.siteArr[e] = mt.Tools.addbm("Game_site1_png", 0, 380 - 42 * e), this.siteSpr.addChild(this.siteArr[e]);
            for (var i = 0, n = 0; n < j.restCondition.length && i < t; n++) .5 == j.restCondition[n].alp && (i++, this.creatMove(j.restCondition[n].style, j.restCondition[n].x, j.restCondition[n].y, n))
        }, n.prototype.onTouchTap = function (e) {
            switch (e.currentTarget) {
                case this.bg:
                    break;
                case this.help:
                    wt.changeView(U);
                    break;
                case this.invite:
                    wt.changeView(B);
                    break;
                case this.sign:
                    i = this;
                    D.sign(this, function (e) {
                        var n = JSON.parse(e.currentTarget.response);
                        t.log("签到接口:"), t.log(n), j.closeDataloading(), 200 == n.code ? ("1" == j.sign_redpack_on ? (j.build_id = n.data.build_id[0], n.data.red_packge_num > 0 && wt.changeView(N)) : wx.showToast({
                            title: n.msg,
                            icon: "success",
                            duration: 2e3
                        }), i.sign.texture = RES.getRes("Game_sign1_png")) : wx.showToast({
                            title: n.msg,
                            icon: "success",
                            duration: 2e3
                        })
                    });
                    break;
                case this.home:
                    j.isBag = !1, j.openDataloading(), D.redPackgeList(this, function (e) {
                        var i = JSON.parse(e.currentTarget.response);
                        t.log("红包记录接口:"), t.log(i), j.mydata = i.data.list, j.money = i.data.total_money, j.money_list = i.data.forward_select_item, wt.changeView(A), j.closeDataloading()
                    });
                    break;
                case this.guide:
                    wt.changeView(L);
                    break;
                case this.speedup:
                    i = this;
                    1 == j.style && 1 == j.shareLimits[3] ? (j.isShare = !0, wx.shareAppMessage({
                        title: j.shareTitle,
                        imageUrl: j.shareImg,
                        success: function (t) {
                            console.log(t);
                            var e = "2";
                            "shareAppMessage:ok" == t.errMsg && ("shareTickets" in t ? (e = "1", wx.getShareInfo({
                                shareTicket: t.shareTickets[0],
                                success: function (t) {
                                    D.share(this, function (t) {
                                        var t = JSON.parse(t.currentTarget.response);
                                        console.log("分享接口"), console.log(t), wx.showToast({
                                            title: t.msg,
                                            icon: "success",
                                            duration: 2e3
                                        }), 200 == t.code && (j.shareLimits[3] = t.data.is_share, j.speedUp = .5, i.second.text = i.format1(Number((j.SecMoney / j.speedUp).toFixed(1))), j.speedUpTime = 180, i.bitText.text = "03s00", console.log("加速时间" + j.speedUpTime), i.countTime(), wt.notify("speedUp", !1))
                                    }, e, encodeURIComponent(t.encryptedData), encodeURIComponent(t.iv), "2")
                                }
                            })) : D.share(this, function (t) {
                                var t = JSON.parse(t.currentTarget.response);
                                console.log("分享接口"), console.log(t), wx.showToast({
                                    title: t.msg,
                                    icon: "success",
                                    duration: 2e3
                                })
                            }, e, "", "", "2"))
                        },
                        fail: function (t) {
                        }
                    })) : 1 == j.videoLimits[3] ? ft.showVideoAd("adunit-ae56d3bbdc2aee40", function () {
                        D.watch(this, function (t) {
                            var t = JSON.parse(t.currentTarget.response);
                            console.log("看视频接口"), console.log(t), wx.showToast({
                                title: t.msg,
                                icon: "success",
                                duration: 2e3
                            }), 200 == t.code && (j.videoLimits[3] = t.data.is_video, j.speedUp = .5, i.second.text = i.format1(Number((j.SecMoney / j.speedUp).toFixed(1))), j.speedUpTime = 180, i.bitText.text = "03s00", i.countTime(), wt.notify("speedUp", !1))
                        }, "2")
                    }, function () {
                        console.log("没看完视频")
                    }) : wx.showToast({title: j.notice_msg, icon: "", duration: 2e3});
                    break;
                case this.shop:
                    var i = this;
                    if (j.HighCar >= 4) D.checkGetFree(this, function (e) {
                        var n = JSON.parse(e.currentTarget.response);
                        if (t.log("时间检测能否领取免费车接口:"), t.log(n), 1 == n.data.get_available) {
                            for (var s = 0; s < 31; s++) i.shareBtns[s].visible = !1;
                            j.HighCar - j.diffCar > 0 && (i.shareBtns[j.HighCar - j.diffCar - 1].visible = !0)
                        }
                        this.shopSpr.visible = !0
                    }); else if (j.TotalMoney > j.shopCondition[0]) {
                        for (var n = !1, s = 0; s < j.restCondition.length; s++) 0 == j.restCondition[s].style && 0 == n && (this.shopSpr.visible = !1, j.restCondition[s].style = 1, this.restCars[s].texture = RES.getRes("Cars_rest1_png"), this.restCars[s].scaleX = this.bases[s].scaleX / .7, this.restCars[s].scaleY = this.bases[s].scaleY / .7, this.carSpr.addChild(this.restCars[s]), wt.Tools.center(this.restCars[s]), this.restCars[s].x = this.bases[s].x, this.restCars[s].y = this.bases[s].y - 10, this.restCars[s].alpha = j.restCondition[s].alp, n = !0);
                        1 == n ? (i.sound_buy.play(0, 1), j.TotalMoney -= j.shopCondition[0], this.total.text = this.format2(j.TotalMoney), this.shopTotalText.text = this.format2(j.TotalMoney), j.shopCondition[0] = Math.round(1.07 * j.shopCondition[0]), this.level1Text.text = j.shopCondition[0] + "") : wt.Toast.setContent("车位不够啦")
                    }
                    break;
                case this.free:
                    j.openDataloading(), D.freeGold(this, function (e) {
                        var i = JSON.parse(e.currentTarget.response);
                        t.log("免费金币接口:"), t.log(i), j.closeDataloading(), 200 == i.code ? (j.HighCar - j.diffCar > 0 ? j.freeMoney = j.shopCondition[j.HighCar - j.diffCar - 1] : j.freeMoney = j.shopCondition[0], wt.changeView(I)) : wx.showToast({
                            title: i.msg,
                            icon: "success",
                            duration: 2e3
                        })
                    })
            }
        }, n
    }(v);
    e(M.prototype, "Game");
    var k = function (e) {
        function n() {
            return e.call(this) || this
        }

        return i(n, e), n.prototype.createChildren = function () {
            e.prototype.createChildren.call(this)
        }, n.prototype.show = function (i) {
            var n = this;
            e.prototype.show.call(this, i), this.bg.touchEnabled = !0, this.bg.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn2.touchEnabled = !0, this.btn2.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn3.touchEnabled = !0, this.btn3.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.click0 = mt.Tools.drawRect(0, 30, 100, 100, 65535, 0), this.addChild(this.click0), this.click0.touchEnabled = !0, this.click0.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.nick.text = j.nickname, this.money.text = j.bagmoney;
            var s = new t.ImageLoader;
            s.crossOrigin = "anonymous", s.load(j.headurl), s.addEventListener(t.Event.COMPLETE, function (e) {
                var i = e.currentTarget, s = new t.Texture;
                s._setBitmapData(i.data);
                var o = new t.Bitmap(s);
                n.addChild(o), o.x = 325, o.y = 229, o.width = 100, o.height = 100;
                var a = mt.Tools.drawCircle(375, 279, 50, 6737151, 1);
                n.addChild(a), o.mask = a
            }, this)
        }, n.prototype.onTouchTap = function (e) {
            switch (e.currentTarget) {
                case this.bg:
                    break;
                case this.click0:
                    wt.hideView();
                    break;
                case this.btn2:
                    j.openDataloading(), D.redPackgeList(this, function (e) {
                        var i = JSON.parse(e.currentTarget.response);
                        t.log("红包记录接口:"), t.log(i), j.mydata = i.data.list, j.money = i.data.total_money, j.money_list = i.data.forward_select_item, j.isBag = !0, wt.changeView(S), j.closeDataloading()
                    });
                    break;
                case this.btn3:
                    j.openDataloading(), D.redPackgeList(this, function (e) {
                        var i = JSON.parse(e.currentTarget.response);
                        t.log("红包记录接口:"), t.log(i), j.mydata = i.data.list, j.money = i.data.total_money, j.isBag = !0, wt.changeView(A), j.closeDataloading()
                    })
            }
        }, n
    }(p);
    e(k.prototype, "Getbag");
    var L = function (e) {
        function n() {
            return e.call(this) || this
        }

        return i(n, e), n.prototype.createChildren = function () {
            e.prototype.createChildren.call(this)
        }, n.prototype.show = function (i) {
            e.prototype.show.call(this, i), this.bg.touchEnabled = !0, this.bg.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.rect.touchEnabled = !0, this.rect.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn.touchEnabled = !0, this.btn.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), 1 == j.isIPX && (this.y += 145, this.bg.scaleX = 1624 / 1334, this.bg.scaleY = 1624 / 1334, this.bg.y -= 145)
        }, n.prototype.onTouchTap = function (t) {
            switch (t.currentTarget) {
                case this.bg:
                case this.rect:
                    break;
                case this.btn:
                    wt.hideView()
            }
        }, n
    }(g);
    e(L.prototype, "Guide");
    var U = function (e) {
        function n() {
            return e.call(this) || this
        }

        return i(n, e), n.prototype.createChildren = function () {
            e.prototype.createChildren.call(this)
        }, n.prototype.show = function (i) {
            var n = this;
            e.prototype.show.call(this, i), this.bg.touchEnabled = !0, this.bg.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.help.touchEnabled = !0, this.help.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn.touchEnabled = !0, this.btn.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn1.touchEnabled = !0, this.btn1.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), 1 == j.isIPX && (this.y += 145, this.bg.scaleX = 1624 / 1334, this.bg.scaleY = 1624 / 1334, this.bg.y -= 145);
            for (var s = this, o = 0; o < 3 && o < j.help_list.length; o++) {
                j.moreMoney += .15;
                t.setTimeout(function () {
                    j.moreMoney -= .15
                }, this, j.help_list[o].diff_time);
                !function (e) {
                    h = mt.Tools.add_input(304 + 144 * e, 511, 80, 35, 25, "center", 16777215, !1, "+15%"), s.addChild(h), c = mt.Tools.add_input(304 + 144 * e, 560, 80, 35, 25, "center", 16777215, !1, "+2.0h"), s.addChild(c), (a = new t.ImageLoader).crossOrigin = "anonymous", a.load(j.help_list[e].member_info.avatar), a.addEventListener(t.Event.COMPLETE, function (i) {
                        var s = i.currentTarget, o = new t.Texture;
                        o._setBitmapData(s.data);
                        var a = new t.Bitmap(o);
                        n.addChild(a), a.x = 302 + 144 * e, a.y = 437, a.width = 50, a.height = 50;
                        var r = mt.Tools.drawCircle(327 + 144 * e, 464, 25, 6737151, 1);
                        n.addChild(r), a.mask = r
                    }, s)
                }(o)
            }
            for (var a, r = this, o = 3; o < 6 && o < j.help_list.length; o++) {
                j.moreMoney += .15;
                t.setTimeout(function () {
                    j.moreMoney -= .15
                }, this, j.help_list[o].diff_time);
                !function (e) {
                    h = mt.Tools.add_input(304 + 144 * (e - 3), 719, 80, 35, 25, "center", 16777215, !1, "+15%"), r.addChild(h), c = mt.Tools.add_input(304 + 144 * (e - 3), 768, 80, 35, 25, "center", 16777215, !1, "+2.0h"), r.addChild(c), (a = new t.ImageLoader).crossOrigin = "anonymous", a.load(j.help_list[e].member_info.avatar), a.addEventListener(t.Event.COMPLETE, function (i) {
                        var s = i.currentTarget, o = new t.Texture;
                        o._setBitmapData(s.data);
                        var a = new t.Bitmap(o);
                        n.addChild(a), a.x = 302 + 144 * (e - 3), a.y = 645, a.width = 50, a.height = 50;
                        var r = mt.Tools.drawCircle(327 + 144 * (e - 3), 672, 25, 6737151, 1);
                        n.addChild(r), a.mask = r
                    }, r)
                }(o)
            }
            if (7 == j.help_list.length) {
                j.moreMoney += .15;
                t.setTimeout(function () {
                    j.moreMoney -= .15
                }, this, j.help_list[6].diff_time);
                var h = mt.Tools.add_input(161, 718, 80, 35, 25, "center", 16777215, !1, "+15%");
                this.addChild(h);
                var c = mt.Tools.add_input(161, 769, 80, 35, 25, "center", 16777215, !1, "+2.0h");
                this.addChild(c), (a = new t.ImageLoader).crossOrigin = "anonymous", a.load(j.help_list[6].member_info.avatar), a.addEventListener(t.Event.COMPLETE, function (e) {
                    var i = e.currentTarget, s = new t.Texture;
                    s._setBitmapData(i.data);
                    var o = new t.Bitmap(s);
                    n.addChild(o), o.x = 124, o.y = 622, o.width = 68, o.height = 68;
                    var a = mt.Tools.drawCircle(158, 656, 34, 6737151, 1);
                    n.addChild(a), o.mask = a
                }, this)
            }
        }, n.prototype.onTouchTap = function (t) {
            switch (t.currentTarget) {
                case this.bg:
                case this.help:
                    break;
                case this.btn:
                    j.isShare = !0;
                    wx.shareAppMessage({
                        title: j.shareTitle,
                        imageUrl: j.shareImg,
                        query: "ref_uid=" + D.uid + "&share_type=1",
                        success: function (t) {
                            wx.showToast({title: "转发成功", icon: "success", duration: 2e3})
                        },
                        fail: function (t) {
                            wx.showToast({title: "转发失败", icon: "success", duration: 2e3})
                        }
                    });
                    break;
                case this.btn1:
                    wt.hideView()
            }
        }, n
    }(f);
    e(U.prototype, "Help");
    var B = function (e) {
        function n() {
            return e.call(this) || this
        }

        return i(n, e), n.prototype.createChildren = function () {
            e.prototype.createChildren.call(this)
        }, n.prototype.show = function (i) {
            var n = this;
            e.prototype.show.call(this, i), this.bg.touchEnabled = !0, this.bg.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.rect.touchEnabled = !0, this.rect.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn.touchEnabled = !0, this.btn.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn1.touchEnabled = !0, this.btn1.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), 1 == j.isIPX && (this.y += 145, this.bg.scaleX = 1624 / 1334, this.bg.scaleY = 1624 / 1334, this.bg.y -= 145);
            var s = .2 * j.TotalMoney;
            s < 1e7 && (s = s.toLocaleString()), s >= 1e7 && s < 1e10 && (s = Math.round(s / 1e3).toLocaleString() + "K"), s >= 1e10 && s < 1e13 && (s = Math.round(s / 1e6).toLocaleString() + "M"), s >= 1e13 && s < 1e16 && (s = Math.round(s / 1e9).toLocaleString() + "G"), s >= 1e16 && s < 1e19 && (s = Math.round(s / 1e12).toLocaleString() + "T"), s >= 1e19 && (s = Math.round(s / 1e15).toLocaleString() + "KT");
            for (var o = this, a = 0; a < 2 && a < j.free_gold_list.length; a++) !function (e) {
                r = mt.Tools.addbm("Invite_btn1_png", 235 + 152 * e, 577), o.addChild(r), r.touchEnabled = !0, 1 == j.free_gold_list[e].is_used && (r.visible = !1), r.addEventListener(t.TouchEvent.TOUCH_TAP, function () {
                    D.getShareGold(this, function (e) {
                        var i = JSON.parse(e.currentTarget.response);
                        t.log("获取分享金币接口:"), t.log(i)
                    }, j.free_gold_list[e].id), j.free_gold_list[e].is_used = 1, r.visible = !1, j.TotalMoney *= 1.2, wt.notify("getfriend", !1)
                }, o), (h = new t.ImageLoader).crossOrigin = "anonymous", h.load(j.free_gold_list[e].member_info.avatar), h.addEventListener(t.Event.COMPLETE, function (i) {
                    var s = i.currentTarget, o = new t.Texture;
                    o._setBitmapData(s.data);
                    var a = new t.Bitmap(o);
                    n.addChild(a), a.x = 271 + 150 * e, a.y = 465, a.width = 56, a.height = 56;
                    var r = mt.Tools.drawCircle(299 + 150 * e, 493, 28, 6737151, 1);
                    n.addChild(r), a.mask = r
                }, o), c = mt.Tools.add_input(275 + 150 * e, 540, 80, 35, 25, "center", 16777215, !1, s + ""), o.addChild(c)
            }(a);
            for (var r, h, c, l = this, a = 2; a < 6 && a < j.free_gold_list.length; a++) !function (e) {
                r = mt.Tools.addbm("Invite_btn1_png", 233 + 151 * (e - 3), 829), l.addChild(r), r.touchEnabled = !0, 1 == j.free_gold_list[e].is_used && (r.visible = !1), r.addEventListener(t.TouchEvent.TOUCH_TAP, function () {
                    D.getShareGold(this, function (e) {
                        var i = JSON.parse(e.currentTarget.response);
                        t.log("获取分享金币接口:"), t.log(i)
                    }, j.free_gold_list[e].id), j.free_gold_list[e].is_used = 1, r.visible = !1, j.TotalMoney *= 1.2, wt.notify("getfriend", !1)
                }, l), (h = new t.ImageLoader).crossOrigin = "anonymous", h.load(j.free_gold_list[e].member_info.avatar), h.addEventListener(t.Event.COMPLETE, function (i) {
                    var s = i.currentTarget, o = new t.Texture;
                    o._setBitmapData(s.data);
                    var a = new t.Bitmap(o);
                    n.addChild(a), a.x = 271 + 150 * (e - 3), a.y = 712, a.width = 56, a.height = 56;
                    var r = mt.Tools.drawCircle(299 + 150 * (e - 3), 740, 28, 6737151, 1);
                    n.addChild(r), a.mask = r
                }, l), c = mt.Tools.add_input(272 + 150 * (e - 3), 791, 80, 35, 25, "center", 16777215, !1, s + ""), l.addChild(c)
            }(a)
        }, n.prototype.onTouchTap = function (t) {
            switch (t.currentTarget) {
                case this.bg:
                    break;
                case this.btn:
                    j.isShare = !0;
                    wx.shareAppMessage({
                        title: j.shareTitle,
                        imageUrl: j.shareImg,
                        query: "ref_uid=" + D.uid + "&share_type=2",
                        success: function (t) {
                            wx.showToast({title: "转发成功", icon: "success", duration: 2e3})
                        },
                        fail: function (t) {
                            wx.showToast({title: "转发失败", icon: "success", duration: 2e3})
                        }
                    });
                    break;
                case this.btn1:
                    wt.hideView()
            }
        }, n
    }(y);
    e(B.prototype, "Invite");
    var A = function (e) {
        function n() {
            return e.call(this) || this
        }

        return i(n, e), n.prototype.createChildren = function () {
            e.prototype.createChildren.call(this)
        }, n.prototype.show = function (i) {
            e.prototype.show.call(this, i), this.bg.touchEnabled = !0, this.bg.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn1.touchEnabled = !0, this.btn1.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn2.touchEnabled = !0, this.btn2.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.init()
        }, n.prototype.init = function () {
            var e = this, i = this;
            this.scr = new t.ScrollView, this.spr = new t.Sprite, this.scr.x = 0, this.scr.y = 0, this.scr.width = 750, 1 == j.isIPX ? this.scr.height = 1624 : this.scr.height = 1334, this.addChild(this.scr), this.scr.bounces = !1, this.scr.setContent(this.spr), this.click = mt.Tools.drawRect(0, 30, 100, 100, 65535, 0), this.click.touchEnabled = !0, this.click.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.spr.addChild(this.bg), this.spr.addChild(this.words), this.spr.addChild(this.click), this.spr.addChild(this.btn0), this.spr.addChild(this.btn1), this.spr.addChild(this.btn2), this.spr.addChild(this.username), this.spr.addChild(this.money), this.spr.addChild(this.head), this.btn4 = new t.Bitmap(RES.getRes("Mymoney_btn4_png")), this.btn4.x = 628, this.btn4.y = 202, this.btn4.name = "btn", this.spr.addChild(this.btn4), this.btn4.touchEnabled = !0, this.btn4.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
            var n = new t.ImageLoader;
            n.crossOrigin = "anonymous", n.load(j.headurl), n.addEventListener(t.Event.COMPLETE, function (e) {
                var n = e.currentTarget, s = new t.Texture;
                s._setBitmapData(n.data);
                var o = new t.Bitmap(s);
                i.spr.addChild(o), o.x = 315, o.y = 158, o.width = 128, o.height = 128;
                var a = mt.Tools.drawCircle(379, 222, 64, 6737151, 1);
                i.spr.addChild(a), o.mask = a
            }, this), this.username.verticalAlign = "middle", this.username.text = j.nickname, this.money.verticalAlign = "middle", this.money.text = j.money, this.scr1 = new t.ScrollView, this.spr1 = new t.Sprite, this.spr2 = new t.Sprite, this.scr1.x = 86, this.scr1.y = 764, this.scr1.width = 600, this.scr1.height = 276, this.spr.addChild(this.spr2), this.spr2.addChild(this.scr1), this.scr1.bounces = !1, this.scr1.setContent(this.spr1), this.scr1.horizontalScrollPolicy = "off", this.creatSpr1(), D.extensionadNew(this, function (i) {
                var n = JSON.parse(i.currentTarget.response);
                t.log("获取广告信息接口:"), t.log(n), e.creatSpr2(n)
            }, "2")
        }, n.prototype.creatSpr1 = function () {
            for (var t = 0; t < j.mydata.length; t++) {
                var e = mt.Tools.drawRect(0, 77 * t, 600, 77, 6737151, 0);
                this.spr1.addChild(e);
                var i = mt.Tools.add_input(0, 77 * t, 200, 40, 30, "left", 2236962, !1, j.mydata[t].red_total);
                this.spr1.addChild(i);
                var n = mt.Tools.add_input(220, 77 * t, 400, 40, 30, "right", 2236962, !1, j.mydata[t].create_time);
                this.spr1.addChild(n)
            }
        }, n.prototype.creatSpr2 = function (e) {
            for (var i, n, s, o, a, r, h = this, c = this, l = 0; l < e.data[2].length; l++) !function (l) {
                i = mt.Tools.addbm("Mymoney_rect_png", 33, 1200 + 200 * l), c.spr.addChild(i), (n = new t.ImageLoader).crossOrigin = "anonymous", n.load(D.url + e.data[2][l].picture), n.addEventListener(t.Event.COMPLETE, function (e) {
                    var i = e.currentTarget, n = new t.Texture;
                    n._setBitmapData(i.data);
                    var s = new t.Bitmap(n);
                    h.spr.addChild(s), s.x = 52, s.y = 1225 + 200 * l, s.width = 108, s.height = 108;
                    var o = mt.Tools.drawCircle(106, 1279 + 200 * l, 54, 6737151, 1);
                    h.spr.addChild(o), s.mask = o
                }, c), s = mt.Tools.addbm("Mymoney_btn_png", 557, 1248 + 200 * l), c.spr.addChild(s), s.touchEnabled = !0, s.addEventListener(t.TouchEvent.TOUCH_TAP, function () {
                    wx.navigateToMiniProgram({appId: e.data[2][l].href, path: e.data[2][l].page_url})
                }, c), o = mt.Tools.add_input(176, 1238 + 200 * l, 350, 40, 30, "left", 2105376, !1, e.data[2][l].name), c.spr.addChild(o), (a = e.data[2][l].introduce).length > 10 && (a = a.substr(0, 10) + "..."), r = mt.Tools.add_input(176, 1276 + 200 * l, 380, 40, 30, "left", 2236962, !1, a), c.spr.addChild(r)
            }(l)
        }, n.prototype.onTouchTap = function (t) {
            switch (t.currentTarget) {
                case this.bg:
                    break;
                case this.btn1:
                    j.Share();
                    break;
                case this.btn4:
                    wx.openCustomerServiceConversation();
                    break;
                case this.btn2:
                    wt.changeView(S);
                    break;
                case this.click:
                    1 == j.isBag ? wt.changeView(k) : wt.hideView()
            }
        }, n
    }(o);
    e(A.prototype, "Mymoney");
    var H = function (e) {
        function n() {
            return e.call(this) || this
        }

        return i(n, e), n.prototype.createChildren = function () {
            e.prototype.createChildren.call(this)
        }, n.prototype.show = function (i) {
            e.prototype.show.call(this, i), this.bg.touchEnabled = !0, this.bg.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn.touchEnabled = !0, this.btn.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn1.touchEnabled = !0, this.btn1.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), 1 == j.isIPX && (this.y += 145, this.bg.scaleX = 1624 / 1334, this.bg.scaleY = 1624 / 1334, this.bg.y -= 145)
        }, n.prototype.onTouchTap = function (e) {
            switch (e.currentTarget) {
                case this.bg:
                    break;
                case this.btn:
                    j.openDataloading(), D.getReward(this, function (e) {
                        var i = JSON.parse(e.currentTarget.response);
                        t.log("领取红包接口:"), t.log(i), j.closeDataloading(), 200 == i.code ? (j.bagmoney = i.data.price, wt.changeView(k)) : wx.showToast({
                            title: i.msg,
                            icon: "success",
                            duration: 2e3
                        })
                    });
                    break;
                case this.btn1:
                    wt.hideView()
            }
        }, n
    }(m);
    e(H.prototype, "Redbag");
    var N = function (e) {
        function n() {
            return e.call(this) || this
        }

        return i(n, e), n.prototype.createChildren = function () {
            e.prototype.createChildren.call(this)
        }, n.prototype.show = function (i) {
            e.prototype.show.call(this, i), this.bg.touchEnabled = !0, this.bg.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.rect.touchEnabled = !0, this.rect.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn.touchEnabled = !0, this.btn.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn1.touchEnabled = !0, this.btn1.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), 1 == j.isIPX && (this.y += 145, this.bg.scaleX = 1624 / 1334, this.bg.scaleY = 1624 / 1334, this.bg.y -= 145)
        }, n.prototype.onTouchTap = function (e) {
            switch (e.currentTarget) {
                case this.bg:
                    break;
                case this.btn:
                    j.openDataloading(), D.getReward(this, function (e) {
                        var i = JSON.parse(e.currentTarget.response);
                        t.log("领取红包接口:"), t.log(i), j.closeDataloading(), 200 == i.code ? (j.bagmoney = i.data.price, wt.changeView(k)) : wx.showToast({
                            title: i.msg,
                            icon: "success",
                            duration: 2e3
                        })
                    });
                    break;
                case this.btn1:
                    wt.hideView()
            }
        }, n
    }(b);
    e(N.prototype, "Sign");
    var F = function (e) {
        function n() {
            return e.call(this) || this
        }

        return i(n, e), n.prototype.createChildren = function () {
            e.prototype.createChildren.call(this)
        }, n.prototype.show = function (i) {
            e.prototype.show.call(this, i), this.bg.touchEnabled = !0, this.bg.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn.touchEnabled = !0, this.btn.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.btn1.touchEnabled = !0, this.btn1.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this), 1 == j.isIPX && (this.y += 145, this.bg.scaleX = 1624 / 1334, this.bg.scaleY = 1624 / 1334, this.bg.y -= 145), this.btn.y = 729, this.avm.visible = !1, 2 != j.style && 0 != j.shareLimits[1] || (this.btn.visible = !1), mt.Tools.xuanzhuan(this.light, !0, 360, 5e3);
            var n = mt.Tools.addbm("Cars_clock" + j.HighCar + "_png", 165, 428);
            this.addChild(n);
            var s = mt.Tools.add_input(0, 314, 750, 40, 30, "center", 16777215, !1, j.carNames[j.HighCar - 1]);
            this.addChild(s)
        }, n.prototype.onTouchTap = function (e) {
            i = this;
            switch (e.currentTarget) {
                case this.bg:
                    break;
                case this.btn:
                    j.isShare = !0, wx.shareAppMessage({
                        title: j.shareTitle,
                        imageUrl: j.shareImg,
                        success: function (t) {
                            console.log(t);
                            var e = "2";
                            "shareAppMessage:ok" == t.errMsg && ("shareTickets" in t ? (e = "1", wx.getShareInfo({
                                shareTicket: t.shareTickets[0],
                                success: function (t) {
                                    D.share(this, function (t) {
                                        var t = JSON.parse(t.currentTarget.response);
                                        if (console.log("炫耀一下接口"), console.log(t), wx.showToast({
                                            title: t.msg,
                                            icon: "",
                                            duration: 2e3
                                        }), 200 == t.code) {
                                            j.shareLimits[1] = t.data.is_share;
                                            for (var e = !1, i = 0, n = 0; n < j.restCondition.length; n++) 0 == j.restCondition[n].style && 0 == e && (e = !0, i = n);
                                            1 == e && (j.carIndex = i, wt.notify("getcar", !1)), wt.hideView()
                                        }
                                    }, e, encodeURIComponent(t.encryptedData), encodeURIComponent(t.iv), "5")
                                }
                            })) : D.share(this, function (t) {
                                var t = JSON.parse(t.currentTarget.response);
                                console.log("分享接口"), console.log(t), wx.showToast({
                                    title: t.msg,
                                    icon: "",
                                    duration: 2e3
                                })
                            }, e, "", "", "5"))
                        },
                        fail: function (t) {
                            console.log(t)
                        }
                    });
                    break;
                case this.btn1:
                    var i = this;
                    1 == j.isBlack ? wt.hideView() : (j.openDataloading(), D.checkReward(this, function (e) {
                        var n = JSON.parse(e.currentTarget.response);
                        t.log("验证升级红包接口:"), t.log(n), j.closeDataloading(), 200 == n.code ? (j.build_id = n.data.build_id[0], n.data.red_packge_num > 0 && (t.Tween.removeTweens(i.light), wt.changeView(H))) : wt.hideView()
                    }, j.HighCar + ""))
            }
        }, n
    }(T);
    e(F.prototype, "Unlock");
    var D = function () {
        function e() {
        }

        return e.doReqPost = function (e, i, n, s, o) {
            void 0 === o && (o = t.HttpResponseType.TEXT);
            var a = new t.HttpRequest;
            a.responseType = o, a.open(this.urlIP + n, t.HttpMethod.POST), a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.setRequestHeader("app-version", "1.3.7"), a.send(s), a.addEventListener(t.Event.COMPLETE, i, e)
        }, e.doReqGet = function (e, i, n, s, o) {
            void 0 === o && (o = t.HttpResponseType.TEXT);
            var a = new t.HttpRequest;
            a.responseType = o, a.open(this.urlIP + n + s, t.HttpMethod.POST), a.send(), a.addEventListener(t.Event.COMPLETE, i, e)
        }, e.sign_in = function (t, i) {
            var n = "code=" + e.js_code + "&encryptedData=" + e.encryptedData + "&iv=" + e.iv + "&ref_uid=" + e.ref_uid + "&share_type=" + e.share_type;
            this.doReqPost(t, i, "login/login", n)
        }, e.getProgress = function (t, i) {
            var n = "uid=" + e.uid;
            this.doReqPost(t, i, "game/getProgress", n)
        }, e.setProgress = function (t, i) {
            var n = "uid=" + e.uid + "&speedUpTime=" + j.speedUpTime;
            for (var s in j.restCondition) for (var o in j.restCondition[s]) n += "&restCondition[" + s + "][" + o + "]=" + j.restCondition[s][o];
            for (var s in j.shopCondition) n += "&shopCondition[]=" + j.shopCondition[s];
            n += "&TotalMoney=" + j.TotalMoney + "&HighCar=" + j.HighCar + "&freeMoney=" + j.freeMoney + "&backMoney=" + j.backMoney + "&SecMoney=" + j.SecMoney, this.doReqPost(t, i, "game/setProgress", n)
        }, e.sign = function (t, i) {
            var n = "uid=" + e.uid;
            this.doReqPost(t, i, "game/sign", n)
        }, e.getReward = function (t, i) {
            var n = "uid=" + e.uid + "&build_id=" + j.build_id;
            this.doReqPost(t, i, "game/getReward", n)
        }, e.share = function (t, i, n, s, o, a) {
            var r = "type=" + n + "&endata=" + s + "&iv=" + o + "&uid=" + e.uid + "&share_welfare_type=" + a;
            this.doReqPost(t, i, "share/baseCheck", r)
        }, e.watch = function (t, i, n) {
            var s = "uid=" + e.uid + "&video_welfare_type=" + n;
            this.doReqPost(t, i, "video/baseCheck", s)
        }, e.putForward = function (t, i, n) {
            var s = "uid=" + e.uid + "&total=" + n;
            this.doReqPost(t, i, "game/putForward", s)
        }, e.checkReward = function (t, i, n) {
            var s = "uid=" + e.uid + "&level=" + n;
            this.doReqPost(t, i, "game/checkReward", s)
        }, e.redPackgeList = function (t, i) {
            var n = "uid=" + e.uid;
            this.doReqPost(t, i, "user/redPackgeList", n)
        }, e.putForwardList = function (t, i) {
            var n = "uid=" + e.uid;
            this.doReqPost(t, i, "user/putForwardList", n)
        }, e.freeGold = function (t, i) {
            var n = "uid=" + e.uid;
            this.doReqPost(t, i, "Gold/freeGold", n)
        }, e.getShareGold = function (t, i, n) {
            var s = "uid=" + e.uid + "&share_gold_id=" + n;
            this.doReqPost(t, i, "Gold/getShareGold", s)
        }, e.extensionadNew = function (t, i, n) {
            var s = "uid=" + e.uid + "&position_id=" + n;
            this.doReqPost(t, i, "share/extensionadNew", s)
        }, e.getTesting = function (t, i, n) {
            var s = "uid=" + e.uid + "&is_jp=0&is_jx=" + n;
            this.doReqPost(t, i, "setting/getTesting", s)
        }, e.getFree = function (t, i, n, s, o) {
            var a = "uid=" + e.uid + "&type=" + n + "&endata=" + s + "&iv=" + o;
            this.doReqPost(t, i, "Car/getFree", a)
        }, e.checkGetFree = function (t, i) {
            var n = "uid=" + e.uid;
            this.doReqPost(t, i, "Car/checkGetFree", n)
        }, e.js_code = "", e.encryptedData = "", e.iv = "", e.mstr = "", e.uid = "", e.url = "https://scyj.60nf.com", e.urlIP = e.url + "/api/", e
    }();
    e(D.prototype, "Net");
    var V = function () {
        function t() {
        }

        return t.prototype.getAsset = function (t, e, i) {
            function n(n) {
                e.call(i, n, t)
            }

            if (RES.hasRes(t)) {
                var s = RES.getRes(t);
                s ? n(s) : RES.getResAsync(t, n, this)
            } else RES.getResByUrl(t, n, this, RES.ResourceItem.TYPE_IMAGE)
        }, t
    }();
    e(V.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
    var j = function () {
        function e() {
        }

        return e.onShare = function () {
            console.log("白鹭执行监听分享"), wx.showShareMenu({withShareTicket: !0}), wx.onShareAppMessage(function () {
                return e.isShare = !0, {
                    title: e.shareTitle, imageUrl: e.shareImg, success: function (t) {
                        console.log("转发成功"), console.log(t)
                    }, fail: function (t) {
                        console.log("转发失败")
                    }
                }
            })
        }, e.Share = function () {
            console.log("白鹭执行拉起分享"), e.isShare = !0, wx.shareAppMessage({
                title: e.shareTitle,
                imageUrl: e.shareImg,
                success: function (t) {
                },
                fail: function (t) {
                }
            })
        }, e.openDataloading = function () {
            wx.showLoading({title: "", mask: !0})
        }, e.closeDataloading = function () {
            wx.hideLoading()
        }, e.onHide = function () {
            wx.onHide(function () {
                0 == e.isShare ? D.setProgress(this, function (e) {
                    var i = JSON.parse(e.currentTarget.response);
                    t.log("设置进度接口:"), t.log(i)
                }) : console.log("处于分享界面，不算离线时间")
            })
        }, e.offHide = function () {
            wx.offHide(function () {
                console.log("取消监听隐藏")
            })
        }, e.onShow = function () {
            wx.onShow(function (i) {
                console.log("监听回归 === " + e.isShare), 0 == e.isShare ? D.getProgress(this, function (i) {
                    var n = JSON.parse(i.currentTarget.response);
                    t.log("个人信息接口3333333:"), t.log(n), e.HighCar = Number(n.data.HighCar), e.TotalMoney = Number(n.data.TotalMoney), e.SecMoney = Number(n.data.SecMoney), e.speedUpTime = Number(n.data.speedUpTime), e.isSign = n.data.is_sign + "", e.restCondition = n.data.restCondition, e.shopCondition = n.data.shopCondition, e.help_list = n.data.help_list, e.shareLimits = n.data.share_limit_condition;
                    var s = n.data.last_time_diff, o = n.data.config.off_line_get_profit_time;
                    e.backMoney = Math.round(Number(n.data.last_time_diff) * e.SecMoney * .5), console.log(s), console.log(o), e.backMoney > 0 && 0 == e.isBlack && s >= o && wt.changeView(R)
                }) : (console.log("从分享界面回归，不算离线时间"), e.isShare = !1)
            })
        }, e.offShow = function () {
            wx.offShow(function () {
                console.log("取消监听回归")
            })
        }, e.seeVideo = function () {
            var t = wx.createRewardedVideoAd({adUnitId: "adunit-c05a86082d36293f"});
            t.load().then(function () {
                e.closeDataloading(), t.show()
            }).catch(function (t) {
                return console.log(t.errMsg)
            }), t.onClose(function (t) {
                t.isEnded
            })
        }, e.isIPX = !1, e.headurl = "", e.nickname = "魂锁典狱长", e.isBag = !1, e.speedUp = 1, e.speedUpTime = 0, e.restCondition = [{
            style: 1,
            alp: 1,
            x: 0,
            y: 0
        }, {style: 0, alp: 1, x: 0, y: 0}, {style: 0, alp: 1, x: 0, y: 0}, {
            style: 0,
            alp: 1,
            x: 0,
            y: 0
        }], e.shopCondition = [100, 380, 1444, 5487, 20851, 79235, 301093, 1144155, 4347792, 16521610, 62782118, 238572050, 906573790, 3444980405, 13090925539, 49745517051, 189032964795, 718325266223, 2729636011649, 0x96f102473ec, 39415944008219, 0x883982b23802, 569166231478692, 0x7af157df8ffd7, 8218760382552320, 0x6ef4b139c3defc, 0x1a5a1d4a84eb5d0, 0x64233c1b2c4b2c0, 0x17c85e46741ea700, 0x5a5fcca552dae000, 0x1576c09a76e0c8000], e.TotalMoney = 1e3, e.SecMoney = 0, e.HighCar = 0, e.freeMoney = 0, e.backMoney = 0, e.style = 2, e.sign_redpack_on = "0", e.isSign = "0", e.money = "0.00", e.bagmoney = "0.00", e.build_id = "", e.mydata = [], e.money_list = [], e.help_list = [], e.free_gold_list = [], e.carNames = [], e.shareLimits = [1, 1, 1, 1, 1, 0], e.videoLimits = [1, 1, 1, 1, 1, 1], e.moreMoney = 1, e.default_cars = 2, e.model = "", e.scene = 0, e.diffCar = 3, e.isBlack = !1, e.isFreeCar = !1, e.carIndex = 0, e.isShare = !1, e.words = "温馨提示：\n1、挑战赢取的红包可根据提示领取到微信零钱\n2、如遇提现不成功或忘记交易单号，请点击此页面右上角的收支明细查看", e.detaildata = [], e.notice_msg = "", e
    }();
    e(j.prototype, "StaticVar");
    var G = function () {
        function e() {
        }

        return e.prototype.getTheme = function (e, i, n, s) {
            function o(t) {
                i.call(s, t)
            }

            function a(t) {
                t.resItem.url == e && (RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, a, null), n.call(s))
            }

            var r = this;
            "undefined" != typeof generateEUI ? t.callLater(function () {
                i.call(s, generateEUI)
            }, this) : "undefined" != typeof generateEUI2 ? RES.getResByUrl("resource/gameEui.bin", function (e, n) {
                window.JSONParseClass.setData(e), o(e), t.callLater(function () {
                    i.call(s, generateEUI2)
                }, r)
            }, this, RES.ResourceItem.TYPE_BIN) : (RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, a, null), RES.getResByUrl(e, o, this, RES.ResourceItem.TYPE_TEXT))
        }, e
    }();
    e(G.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
    var X = function () {
        function e() {
        }

        return e.createSprite = function (e) {
            var i = new t.Sprite;
            if (e) for (var n in e) i[n] = e[n];
            return i
        }, e.createBitmapByName = function (e, i) {
            var n = new t.Bitmap, s = RES.getRes(e);
            if (n.texture = s, i) for (var o in i) n[o] = i[o];
            return n
        }, e.createText = function (e, i) {
            var n = new t.TextField;
            if (n.text = e, i) for (var s in i) n[s] = i[s];
            return n
        }, e.createAvatar = function (e, i) {
            return void 0 === e && (e = ""), n(this, void 0, void 0, function () {
                var n = this;
                return s(this, function (s) {
                    return [2, new Promise(function (s, o) {
                        e || o("无头像"), RES.getResByUrl(e, function (e) {
                            var n = e, o = new t.Bitmap(n);
                            if (i) for (var a in i) o[a] = i[a];
                            s(o)
                        }, n, RES.ResourceItem.TYPE_IMAGE)
                    })]
                })
            })
        }, e.createLine = function (e, i, n) {
            var s = new t.Shape;
            if (i.beginFill && s.graphics.beginFill(i.beginFill.color, i.beginFill.alpha), i.lineStyle && s.graphics.lineStyle(i.lineStyle.thickness, i.lineStyle.color, i.lineStyle.alpha, i.lineStyle.pixelHinting, i.lineStyle.scaleMode, i.lineStyle.caps, i.lineStyle.joints, i.lineStyle.miterLimit), s.graphics.moveTo(e[0][0], e[0][1]), e.map(function (t, i) {
                i > 0 && s.graphics.lineTo(e[i][0], e[i][1])
            }), s.graphics.endFill(), n) for (var o in n) s[o] = n[o];
            return s
        }, e.createRect = function (e, i, n) {
            var s = new t.Shape;
            if (i.beginFill && s.graphics.beginFill(i.beginFill.color, i.beginFill.alpha), i.lineStyle && s.graphics.lineStyle(i.lineStyle.thickness, i.lineStyle.color, i.lineStyle.alpha, i.lineStyle.pixelHinting, i.lineStyle.scaleMode, i.lineStyle.caps, i.lineStyle.joints, i.lineStyle.miterLimit), s.graphics.drawRect(e[0], e[1], e[2], e[3]), n) for (var o in n) s[o] = n[o];
            return s
        }, e.createCircle = function (e, i, n) {
            var s = new t.Shape;
            if (i.beginFill && s.graphics.beginFill(i.beginFill.color, i.beginFill.alpha), i.lineStyle && s.graphics.lineStyle(i.lineStyle.thickness, i.lineStyle.color, i.lineStyle.alpha, i.lineStyle.pixelHinting, i.lineStyle.scaleMode, i.lineStyle.caps, i.lineStyle.joints, i.lineStyle.miterLimit), s.graphics.drawCircle(e[0], e[1], e[2]), n) for (var o in n) s[o] = n[o];
            return s
        }, e.createArc = function (e, i, n) {
            var s = new t.Shape;
            if (i.beginFill && s.graphics.beginFill(i.beginFill.color, i.beginFill.alpha), i.lineStyle && s.graphics.lineStyle(i.lineStyle.thickness, i.lineStyle.color, i.lineStyle.alpha, i.lineStyle.pixelHinting, i.lineStyle.scaleMode, i.lineStyle.caps, i.lineStyle.joints, i.lineStyle.miterLimit), s.graphics.drawArc(e[0], e[1], e[2], e[3], e[4], e[5]), n) for (var o in n) s[o] = n[o];
            return s
        }, e.createRoundRect = function (e, i, n) {
            var s = new t.Shape;
            if (i.beginFill && s.graphics.beginFill(i.beginFill.color, i.beginFill.alpha), i.lineStyle && s.graphics.lineStyle(i.lineStyle.thickness, i.lineStyle.color, i.lineStyle.alpha, i.lineStyle.pixelHinting, i.lineStyle.scaleMode, i.lineStyle.caps, i.lineStyle.joints, i.lineStyle.miterLimit), s.graphics.drawRoundRect(e[0], e[1], e[2], e[3], e[4], e[5]), n) for (var o in n) s[o] = n[o];
            return s
        }, e.removeChild = function (t) {
            t.parent && t.parent.removeChild(t)
        }, e.clearView = function (t, e) {
            for (isNaN(e) && (e = -1); t.$children.length > e + 1;) t.removeChildAt(e + 1);
            return !0
        }, e
    }();
    e(X.prototype, "eKit");
    var Y = a.getBasicUrl(), J = a.getAppCode(), z = a.getVersion(), W = function () {
        function e() {
        }

        return e.post = function (i, o) {
            return n(this, void 0, void 0, function () {
                var n = this;
                return s(this, function (s) {
                    return [2, new Promise(function (s, a) {
                        e.token || a("token为空，请重新登陆");
                        var r = new t.HttpRequest;
                        r.responseType = t.HttpResponseType.TEXT, r.open(i, t.HttpMethod.POST), r.setRequestHeader("Content-Type", "application/json"), r.setRequestHeader("Authorization", e.token), r.send(o), r.addEventListener(t.Event.COMPLETE, function (t) {
                            var e = t.currentTarget;
                            s(e.response ? JSON.parse(e.response) : {})
                        }, n), r.addEventListener(t.IOErrorEvent.IO_ERROR, function (t) {
                            a(t)
                        }, n)
                    })]
                })
            })
        }, e.get = function (i, o) {
            return n(this, void 0, void 0, function () {
                var n = this;
                return s(this, function (s) {
                    return [2, new Promise(function (s, a) {
                        e.token || o || a("token为空，请重新登陆");
                        var r = new t.HttpRequest;
                        r.responseType = t.HttpResponseType.TEXT, r.open(i, t.HttpMethod.GET), r.setRequestHeader("Authorization", e.token), r.send(), r.addEventListener(t.Event.COMPLETE, function (t) {
                            var e = t.currentTarget;
                            s(JSON.parse(e.response))
                        }, n), r.addEventListener(t.IOErrorEvent.IO_ERROR, function (t) {
                            a(t)
                        }, n)
                    })]
                })
            })
        }, e.getToken = function () {
            return this.token
        }, e.uploadRecords = function (t) {
            return n(this, void 0, void 0, function () {
                var i;
                return s(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return i = !0, t = ht.createSignObject(t), [4, e.post(e.uploadRecordsPath, t).catch(function (t) {
                                i = !1
                            })];
                        case 1:
                            return n.sent(), [2, i]
                    }
                })
            })
        }, e.getBestRecord = function (t) {
            return n(this, void 0, void 0, function () {
                var i;
                return s(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return i = null, [4, e.get(e.bestRecordPath + "?record_type=" + t).then(function (t) {
                                i = t
                            }).catch(function (t) {
                                i = null
                            })];
                        case 1:
                            return n.sent(), [2, i]
                    }
                })
            })
        }, e.getRankings = function () {
            return n(this, void 0, void 0, function () {
                var t;
                return s(this, function (i) {
                    switch (i.label) {
                        case 0:
                            return t = null, wx.showLoading({
                                title: "排行榜加载中...", mask: !0, success: function () {
                                }, fail: function () {
                                }, complete: function () {
                                }
                            }), [4, e.get(e.getRankingsPath + "?record_type=1&page=1&per_page=200").then(function (e) {
                                t = e
                            }).catch(function (e) {
                                t = null
                            })];
                        case 1:
                            return i.sent(), wx.hideLoading(), [2, t]
                    }
                })
            })
        }, e.getShareUrl = function () {
            return n(this, void 0, void 0, function () {
                var t;
                return s(this, function (i) {
                    switch (i.label) {
                        case 0:
                            return t = "", [4, e.get(e.getShareUrlPath).then(function (e) {
                                t = e.url
                            }).catch(function (e) {
                                t = ""
                            })];
                        case 1:
                            return i.sent(), [2, t]
                    }
                })
            })
        }, e.getTunnel = function () {
            return n(this, void 0, void 0, function () {
                var t;
                return s(this, function (i) {
                    switch (i.label) {
                        case 0:
                            return t = null, [4, e.get(e.tunnelPath).then(function (e) {
                                t = e
                            }).catch(function (e) {
                                t = null
                            })];
                        case 1:
                            return i.sent(), [2, t]
                    }
                })
            })
        }, e.postEvent = function (t) {
            return n(this, void 0, void 0, function () {
                return s(this, function (i) {
                    if (!this.doPostEvent) return [2, !0];
                    if (isNaN(t) ? t = this.event_type.indexOf(t) + 1 : this.event_type[t] || (t = 0), 0 == t) throw new Error("事件传值不是预设的值");
                    return e.post(e.postEventPath, {event_type: t}), [2]
                })
            })
        }, e.getConfiguration = function () {
            return n(this, void 0, void 0, function () {
                var t;
                return s(this, function (i) {
                    switch (i.label) {
                        case 0:
                            return t = null, [4, e.get(e.configurationsPath + "?version=" + z + "&app_code=" + J, !0).then(function (e) {
                                t = e[0]
                            }).catch(function (t) {
                                console.warn(t)
                            })];
                        case 1:
                            return i.sent(), [2, t]
                    }
                })
            })
        }, e.setToken = function (t) {
            e.token = t
        }, e.baseUrl = Y, e.loginPath = Y + "/game-plane/api/v1/auth_login", e.uploadRecordsPath = Y + "/game-plane/api/v1/upload_record", e.bestRecordPath = Y + "/game-plane/api/v2/best_record", e.getRankingsPath = Y + "/game-plane/api/v2/week_rank_list", e.getShareUrlPath = Y + "/game-plane/api/share_url", e.postEventPath = Y + "/game-plane/api/events", e.tunnelPath = Y + "/game-plane/api/tunnel", e.configurationsPath = Y + "/game-plane/api/v1/config", e.event_type = ["open", "singleGame", "uploadScore", "replay", "normalShare", "groupResult", "groupRank", "reborn"], e.doPostEvent = !1, e
    }();
    e(W.prototype, "Api");
    var q = function (t, e) {
        return t << e | t >>> 32 - e
    }, K = function (t, e) {
        var i, n, s, o, a;
        return s = 2147483648 & t, o = 2147483648 & e, i = 1073741824 & t, n = 1073741824 & e, a = (1073741823 & t) + (1073741823 & e), i & n ? 2147483648 ^ a ^ s ^ o : i | n ? 1073741824 & a ? 3221225472 ^ a ^ s ^ o : 1073741824 ^ a ^ s ^ o : a ^ s ^ o
    }, $ = function (t, e, i) {
        return t & e | ~t & i
    }, Z = function (t, e, i) {
        return t & i | e & ~i
    }, Q = function (t, e, i) {
        return t ^ e ^ i
    }, tt = function (t, e, i) {
        return e ^ (t | ~i)
    }, et = function (t, e, i, n, s, o, a) {
        return t = K(t, K(K($(e, i, n), s), a)), K(q(t, o), e)
    }, it = function (t, e, i, n, s, o, a) {
        return t = K(t, K(K(Z(e, i, n), s), a)), K(q(t, o), e)
    }, nt = function (t, e, i, n, s, o, a) {
        return t = K(t, K(K(Q(e, i, n), s), a)), K(q(t, o), e)
    }, st = function (t, e, i, n, s, o, a) {
        return t = K(t, K(K(tt(e, i, n), s), a)), K(q(t, o), e)
    }, ot = function (t) {
        for (var e, i = t.length, n = i + 8, s = 16 * ((n - n % 64) / 64 + 1), o = Array(s - 1), a = 0, r = 0; r < i;) a = r % 4 * 8, o[e = (r - r % 4) / 4] = o[e] | t.charCodeAt(r) << a, r++;
        return e = (r - r % 4) / 4, a = r % 4 * 8, o[e] = o[e] | 128 << a, o[s - 2] = i << 3, o[s - 1] = i >>> 29, o
    }, at = function (t) {
        var e, i = "", n = "";
        for (e = 0; e <= 3; e++) i += (n = "0" + (t >>> 8 * e & 255).toString(16)).substr(n.length - 2, 2);
        return i
    }, rt = function (t) {
        t = t.replace(/\x0d\x0a/g, "\n");
        for (var e = "", i = 0; i < t.length; i++) {
            var n = t.charCodeAt(i);
            n < 128 ? e += String.fromCharCode(n) : n > 127 && n < 2048 ? (e += String.fromCharCode(n >> 6 | 192), e += String.fromCharCode(63 & n | 128)) : (e += String.fromCharCode(n >> 12 | 224), e += String.fromCharCode(n >> 6 & 63 | 128), e += String.fromCharCode(63 & n | 128))
        }
        return e
    }, ht = function () {
        function t() {
        }

        return t.createNonceStr = function (t) {
            t || (t = 16);
            for (var e = "", i = 0; i < t; i++) e += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(62 * Math.random())];
            return e
        }, t.createSignObject = function (t) {
            var e = "", i = this.createNonceStr();
            t.nonce_str = i;
            var n = [];
            for (var s in t) n.push(s + "=" + t[s]);
            return e = n.sort(function (t, e) {
                return t > e ? 1 : -1
            }).join("&") + "&key=" + a.getKey(), console.log(e), t.nonce_str = i, t.sign = this.encode(e).toUpperCase(), t
        }, t.encode = function (t) {
            var e, i, n, s, o, a, r, h, c, l = Array();
            for (t = rt(t), l = ot(t), a = 1732584193, r = 4023233417, h = 2562383102, c = 271733878, e = 0; e < l.length; e += 16) i = a, n = r, s = h, o = c, a = et(a, r, h, c, l[e + 0], 7, 3614090360), c = et(c, a, r, h, l[e + 1], 12, 3905402710), h = et(h, c, a, r, l[e + 2], 17, 606105819), r = et(r, h, c, a, l[e + 3], 22, 3250441966), a = et(a, r, h, c, l[e + 4], 7, 4118548399), c = et(c, a, r, h, l[e + 5], 12, 1200080426), h = et(h, c, a, r, l[e + 6], 17, 2821735955), r = et(r, h, c, a, l[e + 7], 22, 4249261313), a = et(a, r, h, c, l[e + 8], 7, 1770035416), c = et(c, a, r, h, l[e + 9], 12, 2336552879), h = et(h, c, a, r, l[e + 10], 17, 4294925233), r = et(r, h, c, a, l[e + 11], 22, 2304563134), a = et(a, r, h, c, l[e + 12], 7, 1804603682), c = et(c, a, r, h, l[e + 13], 12, 4254626195), h = et(h, c, a, r, l[e + 14], 17, 2792965006), r = et(r, h, c, a, l[e + 15], 22, 1236535329), a = it(a, r, h, c, l[e + 1], 5, 4129170786), c = it(c, a, r, h, l[e + 6], 9, 3225465664), h = it(h, c, a, r, l[e + 11], 14, 643717713), r = it(r, h, c, a, l[e + 0], 20, 3921069994), a = it(a, r, h, c, l[e + 5], 5, 3593408605), c = it(c, a, r, h, l[e + 10], 9, 38016083), h = it(h, c, a, r, l[e + 15], 14, 3634488961), r = it(r, h, c, a, l[e + 4], 20, 3889429448), a = it(a, r, h, c, l[e + 9], 5, 568446438), c = it(c, a, r, h, l[e + 14], 9, 3275163606), h = it(h, c, a, r, l[e + 3], 14, 4107603335), r = it(r, h, c, a, l[e + 8], 20, 1163531501), a = it(a, r, h, c, l[e + 13], 5, 2850285829), c = it(c, a, r, h, l[e + 2], 9, 4243563512), h = it(h, c, a, r, l[e + 7], 14, 1735328473), r = it(r, h, c, a, l[e + 12], 20, 2368359562), a = nt(a, r, h, c, l[e + 5], 4, 4294588738), c = nt(c, a, r, h, l[e + 8], 11, 2272392833), h = nt(h, c, a, r, l[e + 11], 16, 1839030562), r = nt(r, h, c, a, l[e + 14], 23, 4259657740), a = nt(a, r, h, c, l[e + 1], 4, 2763975236), c = nt(c, a, r, h, l[e + 4], 11, 1272893353), h = nt(h, c, a, r, l[e + 7], 16, 4139469664), r = nt(r, h, c, a, l[e + 10], 23, 3200236656), a = nt(a, r, h, c, l[e + 13], 4, 681279174), c = nt(c, a, r, h, l[e + 0], 11, 3936430074), h = nt(h, c, a, r, l[e + 3], 16, 3572445317), r = nt(r, h, c, a, l[e + 6], 23, 76029189), a = nt(a, r, h, c, l[e + 9], 4, 3654602809), c = nt(c, a, r, h, l[e + 12], 11, 3873151461), h = nt(h, c, a, r, l[e + 15], 16, 530742520), r = nt(r, h, c, a, l[e + 2], 23, 3299628645), a = st(a, r, h, c, l[e + 0], 6, 4096336452), c = st(c, a, r, h, l[e + 7], 10, 1126891415), h = st(h, c, a, r, l[e + 14], 15, 2878612391), r = st(r, h, c, a, l[e + 5], 21, 4237533241), a = st(a, r, h, c, l[e + 12], 6, 1700485571), c = st(c, a, r, h, l[e + 3], 10, 2399980690), h = st(h, c, a, r, l[e + 10], 15, 4293915773), r = st(r, h, c, a, l[e + 1], 21, 2240044497), a = st(a, r, h, c, l[e + 8], 6, 1873313359), c = st(c, a, r, h, l[e + 15], 10, 4264355552), h = st(h, c, a, r, l[e + 6], 15, 2734768916), r = st(r, h, c, a, l[e + 13], 21, 1309151649), a = st(a, r, h, c, l[e + 4], 6, 4149444226), c = st(c, a, r, h, l[e + 11], 10, 3174756917), h = st(h, c, a, r, l[e + 2], 15, 718787259), r = st(r, h, c, a, l[e + 9], 21, 3951481745), a = K(a, i), r = K(r, n), h = K(h, s), c = K(c, o);
            return (at(a) + at(r) + at(h) + at(c)).toLowerCase()
        }, t
    }();
    e(ht.prototype, "MD5");
    var ct = function () {
        function t() {
        }

        return t.loadEventSound = function () {
            this.eventSoundList = _.eventSoundList.map(function (t) {
                if (t.cnt) {
                    for (var e = {name: t.name, soundArr: []}, i = 0, n = t.cnt; i < n; i++) {
                        var s = {};
                        s.context = wx.createInnerAudioContext(), s.context.src = t.path, e.soundArr.push(s)
                    }
                    return e
                }
                return t.context = wx.createInnerAudioContext(), t.context.src = t.path, t
            })
        }, t.switchBgm = function (t) {
            var e = this;
            this.bgm && this.bgm.pause(), this.eventSoundList.map(function (i) {
                i.name == t && (i.context ? e.bgm = i.context : e.bgm = i.soundArr[0].context)
            }), this.bgm && (this.bgm.loop = !0), this.bgm && !this.mute && this.bgm.play()
        }, t.playBGM = function () {
            this.bgm && !this.mute && this.bgm.play()
        }, t.stopBGM = function () {
            this.bgm && this.bgm.pause()
        }, t.playEvent = function (t) {
            var e = this;
            this.eventSoundList.map(function (i) {
                if (i.name == t) if (i.context) !e.mute && i.context.play(); else {
                    var n = i.soundArr[0];
                    i.soundArr.push(i.soundArr.shift()), !e.mute && n.context.play()
                }
            })
        }, t.bgm = null, t.eventSoundList = null, t.mute = !1, t
    }();
    e(ct.prototype, "Mp3");
    var lt = function () {
        function t() {
        }

        return t.getWeekScore = function () {
            return n(this, void 0, void 0, function () {
                var t, e, i;
                return s(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return t = dt.getWeekTime(), e = {record_type: 1}, i = 0, [4, W.getBestRecord(1).then(function (t) {
                                i = t.week_best
                            })];
                        case 1:
                            return n.sent(), this.weekScore = i, [2, i]
                    }
                })
            })
        }, t.getHistoryScore = function () {
            return n(this, void 0, void 0, function () {
                var t, e;
                return s(this, function (i) {
                    switch (i.label) {
                        case 0:
                            return t = {record_type: 1}, e = 0, [4, W.getBestRecord(1).then(function (t) {
                                e = t.history_best
                            })];
                        case 1:
                            return i.sent(), this.historyScore = e, [2, e]
                    }
                })
            })
        }, t.refreshWorldRanking = function () {
            return n(this, void 0, void 0, function () {
                var t;
                return s(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return t = null, [4, W.getRankings().then(function (e) {
                                t = e
                            })];
                        case 1:
                            return e.sent(), this.worldRankings = t, [2, t]
                    }
                })
            })
        }, t.getRankings = function () {
            return JSON.parse(JSON.stringify(this.worldRankings))
        }, t.getScore = function () {
            return this.score
        }, t.updateScore = function (t) {
            this.score = t || 0
        }, t.updateRecordType = function (t) {
            this.record_type = t || 0
        }, t.uploadScore = function () {
            return n(this, void 0, void 0, function () {
                var e, i = this;
                return s(this, function (o) {
                    switch (o.label) {
                        case 0:
                            return e = {
                                score: this.score || 0,
                                record_type: this.record_type || 1
                            }, [4, W.uploadRecords(e).then(function (e) {
                                return n(i, void 0, void 0, function () {
                                    var i;
                                    return s(this, function (n) {
                                        switch (n.label) {
                                            case 0:
                                                return (i = !e) ? [4, t.updateScore()] : [3, 2];
                                            case 1:
                                                i = n.sent(), n.label = 2;
                                            case 2:
                                                return [2]
                                        }
                                    })
                                })
                            })];
                        case 1:
                            return o.sent(), [4, ft.uploadScore(this.score || 0)];
                        case 2:
                            return o.sent(), [2, !0]
                    }
                })
            })
        }, t.score = 62, t
    }();
    e(lt.prototype, "Records");
    var dt = function () {
        function t() {
        }

        return t.getNowDate = function () {
            return this.dateFtt(new Date, "yyyy-MM-dd hh:mm:ss")
        }, t.getWeekTime = function () {
            var e = new Date, i = e.getFullYear(), n = e.getMonth(), s = e.getDate(), o = e.getDay(),
                a = new Date(i, n, s - (o ? o - 1 : 6)), r = new Date(i, n, s + (o ? 8 - o : 1));
            return t.dateRange = [this.dateFtt(a), this.dateFtt(r)]
        }, t.isInTimeRange = function (t) {
            if (t) {
                var e = new Date(t.replace(/-/g, "/")).getTime();
                return e > this.dateRange[0] && e < this.dateRange[1]
            }
            return !1
        }, t.transObj = function (t) {
            var e = {};
            return t.map(function (t) {
                e[t.key] = t.value
            }), e
        }, t.dateFtt = function (t, e) {
            var i = {
                "M+": t.getMonth() + 1,
                "d+": t.getDate(),
                "h+": t.getHours(),
                "m+": t.getMinutes(),
                "s+": t.getSeconds(),
                "q+": Math.floor((t.getMonth() + 3) / 3),
                S: t.getMilliseconds()
            };
            e || (e = "yyyy-MM-ddThh:mm:ss+00:00"), /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var n in i) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? i[n] : ("00" + i[n]).substr(("" + i[n]).length)));
            return e
        }, t.dateRange = [], t
    }();
    e(dt.prototype, "Utils");
    var ut = function (e) {
        function n() {
            var t = e.call(this) || this;
            return t.createView(), t
        }

        return i(n, e), n.prototype.createView = function () {
            this.bg = new t.Bitmap(RES.getRes("Center_bg_jpg")), this.bg.x = 0, this.bg.y = 0, this.addChild(this.bg), 0 == j.isIPX && (this.bg.y -= 200)
        }, n.prototype.onProgress = function (t, e) {
        }, n
    }(t.Sprite);
    e(ut.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
    var pt = function () {
        return function () {
        }
    }();
    e(pt.prototype, "Ws");
    var gt = new u, ft = function () {
        function e() {
        }

        return e.login = function () {
            return n(this, void 0, void 0, function () {
                var i, o, a, r = this;
                return s(this, function (h) {
                    switch (h.label) {
                        case 0:
                            return i = null, o = null, a = null, [4, gt.login().then(function (t) {
                                i = t.code, D.js_code = i
                            }).catch(function (t) {
                                console.warn(t)
                            })];
                        case 1:
                            return h.sent(), [4, gt.getUserInfo().then(function (t) {
                                return n(r, void 0, void 0, function () {
                                    var e;
                                    return s(this, function (i) {
                                        switch (e = JSON.parse(JSON.stringify(t)), console.log(t), i.label) {
                                            case 0:
                                                t = JSON.parse(JSON.stringify(t));
                                            case 1:
                                                return console.warn("get_user_info_success"), [2]
                                        }
                                    })
                                })
                            }).catch(function (h) {
                                return n(r, void 0, void 0, function () {
                                    var r, h = this;
                                    return s(this, function (c) {
                                        switch (c.label) {
                                            case 0:
                                                return "function" == typeof wx.createUserInfoButton ? [3, 2] : [4, e.reAuth().then(function (t) {
                                                    return n(h, void 0, void 0, function () {
                                                        return s(this, function (e) {
                                                            switch (e.label) {
                                                                case 0:
                                                                    return o = JSON.parse(JSON.stringify(t)), [4, gt.auth(i, o.iv, o.encryptedData).then(function (t) {
                                                                        a = JSON.parse(JSON.stringify(t)), W.setToken(a.data.token), C.setUserData(a.data), console.log("login_success")
                                                                    }).catch(function (t) {
                                                                        console.warn(t)
                                                                    })];
                                                                case 1:
                                                                    return e.sent(), [2]
                                                            }
                                                        })
                                                    })
                                                })];
                                            case 1:
                                                return c.sent(), [3, 3];
                                            case 2:
                                                wt.changeScene(E), wx.hideLoading(), (r = wx.createUserInfoButton(yt.btnSkin)).show(), r.onTap(function (e) {
                                                    return n(h, void 0, void 0, function () {
                                                        return s(this, function (i) {
                                                            var n = this;
                                                            switch (i.label) {
                                                                case 0:
                                                                    if (console.log(e), "getUserInfo:ok" != e.errMsg) return [3, 2];
                                                                    j.nickname = e.userInfo.nickName, j.headurl = e.userInfo.avatarUrl, D.encryptedData = encodeURIComponent(e.encryptedData), D.iv = encodeURIComponent(e.iv), D.sign_in(this, function (e) {
                                                                        var i = JSON.parse(e.currentTarget.response);
                                                                        t.log("获取授权接口2222:"), t.log(i), D.uid = i.data.uid, D.getProgress(n, function (e) {
                                                                            var i = JSON.parse(e.currentTarget.response);
                                                                            console.log("个人信息接口2222:"), console.log(i), j.HighCar = Number(i.data.HighCar), j.TotalMoney = Number(i.data.TotalMoney), j.SecMoney = Number(i.data.SecMoney), j.speedUpTime = Number(i.data.speedUpTime), j.isSign = i.data.is_sign + "", j.restCondition = i.data.restCondition, j.shopCondition = i.data.shopCondition, j.carNames = i.data.shopCondition_car_name, j.help_list = i.data.help_list, j.free_gold_list = i.data.free_gold_list, j.sign_redpack_on = i.data.config.sign_redpack_on, j.shareLimits = i.data.share_limit_condition, j.videoLimits[0] = i.data.video_limit_condition.car_list.is_video, j.videoLimits[1] = i.data.video_limit_condition.extra_new_car.is_video, j.videoLimits[2] = i.data.video_limit_condition.free_gold_box.is_video, j.videoLimits[3] = i.data.video_limit_condition.free_speed_plus.is_video, j.videoLimits[4] = i.data.video_limit_condition.offline_gold.is_video, j.videoLimits[5] = i.data.video_limit_condition.share_get_car.is_video, j.notice_msg = i.data.config.notice_msg.video_count_used, j.style = Number(i.data.config.get_free_style), j.diffCar = Number(i.data.config.open_car_level_diff), j.backMoney = Math.round(Number(i.data.last_time_diff) * j.SecMoney * .5), j.closeDataloading(), D.getTesting(n, function (e) {
                                                                                var i = JSON.parse(e.currentTarget.response);
                                                                                t.log("黑名单接口:"), t.log(i), 0 == i.data.is_type ? j.isBlack = !0 : j.isBlack = !1, console.log("是否黑名单 === " + j.isBlack), wt.changeView(U), wt.hideView(), wt.changeScene(M), D.extensionadNew(n, function (e) {
                                                                                    var i = JSON.parse(e.currentTarget.response);
                                                                                    t.log("获取分享信息接口:"), t.log(i), j.shareTitle = i.data[4][0].name, j.shareImg = D.url + i.data[4][0].picture
                                                                                }, "4"), j.onShare(), j.onHide(), j.onShow()
                                                                            }, j.model)
                                                                        })
                                                                    });
                                                                case 1:
                                                                    return i.sent(), r.hide(), [3, 3];
                                                                case 2:
                                                                    return [2, !1];
                                                                case 3:
                                                                    return [2]
                                                            }
                                                        })
                                                    })
                                                }), c.label = 3;
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            })];
                        case 2:
                            return h.sent(), [2, a]
                    }
                })
            })
        }, e.reAuth = function () {
            return n(this, void 0, void 0, function () {
                var t = this;
                return s(this, function (i) {
                    return wx.hideLoading(), [2, new Promise(function (i, o) {
                        gt.showAuthModal().then(function (o) {
                            return n(t, void 0, void 0, function () {
                                return s(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return o.authSetting["scope.userInfo"] ? [4, gt.getUserInfo().then(function (t) {
                                                i(t)
                                            })] : [3, 2];
                                        case 1:
                                            return t.sent(), [3, 4];
                                        case 2:
                                            return [4, e.reAuth().then(function (t) {
                                                i(t)
                                            })];
                                        case 3:
                                            t.sent(), t.label = 4;
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        })
                    })]
                })
            })
        }, e.setDefaultShare = function () {
            console.log("set_default_share"), wx.showShareMenu({
                withShareTicket: !0, success: function (t) {
                    console.log("setting_success"), console.log(t)
                }, fail: function (t) {
                    console.warn(t)
                }
            }), wx.onShareAppMessage(function () {
                return {title: a.getShareTitle() || "", imageUrl: a.getShareImg() || ""}
            })
        }, e.shareGame = function (t, e, i) {
            return n(this, void 0, void 0, function () {
                return s(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return t || (t = "normalShare"), e || (e = a.getShareTitle()), i || (i = a.getShareImg()), "get" != i ? [3, 2] : [4, W.getShareUrl()];
                        case 1:
                            i = n.sent(), n.label = 2;
                        case 2:
                            return [2, new Promise(function (n, s) {
                                wx.shareAppMessage({
                                    title: e,
                                    imageUrl: i,
                                    query: t.match("group") ? "groupRank=1" : "",
                                    success: function (t) {
                                        n(t)
                                    },
                                    fail: function (t) {
                                        n(null)
                                    }
                                })
                            })]
                    }
                })
            })
        }, e.rebornGame = function (t, i) {
            return n(this, void 0, void 0, function () {
                var n;
                return s(this, function (s) {
                    switch (s.label) {
                        case 0:
                            return n = !1, [4, e.shareGame("reborn", t, i).then(function (t) {
                                n = !!t
                            })];
                        case 1:
                            return s.sent(), [2, n]
                    }
                })
            })
        }, e.linkOpenData = function (e, i, n) {
            var s = {isDisplay: "true", token: W.getToken(), userInfo: C.getUserData()};
            for (var o in e) s[o] = e[o];
            var r = new t.Sprite, h = wx.getOpenDataContext(), c = new t.BitmapData(window.sharedCanvas);
            c.$deleteSource = !1;
            var l = new t.Texture;
            l._setBitmapData(c);
            var d;
            return d = new t.Bitmap(l), d.width = i || a.getWidth(), d.height = n || a.getHeight(), d.name = "openData", r.addChild(d), t.startTick(function (e) {
                return t.WebGLUtils.deleteWebGLTexture(c.webGLTexture), c.webGLTexture = null, !1
            }, this), h.postMessage(s), console.log("link_done"), r
        }, e.uploadScore = function (t) {
            return n(this, void 0, void 0, function () {
                return s(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, gt.setKVData({score: t + "", date: dt.getNowDate()}).then(function (t) {
                            })];
                        case 1:
                            return e.sent(), [2, !0]
                    }
                })
            })
        }, e.setOnShowRule = function () {
            wx.onShow(function () {
                ct.playBGM()
            })
        }, e.showVideoAd = function (t, i, n) {
            var s = this;
            t ? "function" == typeof wx.createRewardedVideoAd ? (this.video_ads[t] = wx.createRewardedVideoAd({adUnitId: t}), this.current_video_ad_id = t, ct.stopBGM(), this.video_ads[t].load().then(function () {
                s.video_ads[t].show()
            }).catch(function (e) {
                wx.showModal({
                    title: "系统提示",
                    content: "暂时无法获取广告",
                    showCancel: !1,
                    cancelText: "",
                    confirmText: "确定",
                    success: function () {
                        s.current_video_ad_id == t && i() && (s.current_video_ad_id = "")
                    }
                })
            }), this.video_ads[t].onClose(function s(o) {
                !o || o.isEnded ? e.current_video_ad_id == t && i() && (e.current_video_ad_id = "") : n && e.current_video_ad_id == t && n() && (e.current_video_ad_id = ""), ct.playBGM(), e.video_ads[t].offClose(s)
            })) : wx.showModal({
                title: "系统提示",
                content: "您的微信版本太低，暂时无法获取广告",
                showCancel: !1,
                cancelText: "",
                confirmText: "确定",
                success: function () {
                    i()
                }
            }) : wx.showModal({
                title: "系统提示",
                content: "请填入ad_id",
                showCancel: !1,
                cancelText: "",
                confirmText: "确定",
                success: function () {
                    n()
                }
            })
        }, e.showBannerAd = function (t) {
            if (!t) return wx.showModal({
                title: "系统提示",
                content: "请填入ad_id",
                showCancel: !1,
                cancelText: "",
                confirmText: "确定",
                success: function () {
                }
            }), null;
            var e = "function" == typeof wx.createBannerAd ? wx.createBannerAd({
                adUnitId: t,
                style: {left: 0, top: 0, width: 350}
            }) : null;
            if (e) {
                e.show();
                var i = wx.getSystemInfoSync(), n = i.screenWidth, s = i.screenHeight;
                e.onResize(function (t) {
                    e.style.top = s - e.style.realHeight
                }), e.style.width = n
            }
            return e
        }, e.iv = "", e.enctypecode = "", e.video_ads = {}, e.current_video_ad_id = "", e
    }();
    e(ft.prototype, "WxKit");
    var yt = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return i(e, t), e.btnSkin = {
            type: "text",
            text: "开 始 游 戏",
            style: {
                left: window.innerWidth / 3,
                bottom: window.innerHeight / 2,
                width: window.innerWidth / 3,
                height: 55,
                lineHeight: 55,
                backgroundColor: "rgba(160,180,240,1)",
                color: "#ffffff",
                textAlign: "center",
                fontSize: 20,
                borderRadius: 6
            }
        }, e
    }(Object);
    e(yt.prototype, "WxLoginButton");
    var mt;
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.drawRect = function (e, i, n, s, o, a) {
                var r = new t.Shape;
                return r.graphics.beginFill(o, a), r.graphics.drawRect(e, i, n, s), r.graphics.endFill(), r
            }, e.drawCircle = function (e, i, n, s, o) {
                var a = new t.Shape;
                return a.graphics.beginFill(s, o), a.graphics.drawCircle(e, i, n), a.graphics.endFill(), a
            }, e.pingyi = function (e, i, n, s, o, a, r, h, c) {
                e.x = i, e.y = n, e.alpha = a, t.Tween.get(e).wait(c).to({x: s, y: o, alpha: r}, h)
            }, e.suofang = function (e, i, n, s, o) {
                wt.Tools.center(e), t.setTimeout(function () {
                    t.Tween.get(e, {loop: i}).to({scaleX: n, scaleY: n}, s).to({scaleX: 1, scaleY: 1}, s)
                }, this, o)
            }, e.shanxian = function (e, i, n, s, o) {
                t.setTimeout(function () {
                    t.Tween.get(e, {loop: i}).to({alpha: n}, s).to({alpha: 1}, s)
                }, this, o)
            }, e.xuanzhuan = function (e, i, n, s) {
                wt.Tools.center(e), t.Tween.get(e, {loop: i}).to({rotation: n}, s)
            }, e.add_progBar = function (e, i, n) {
                var s = new t.Bitmap;
                return s.texture = e.texture, s.x = i - s.width, s.y = n, s
            }, e.add_input = function (e, i, n, s, o, a, r, h, c) {
                var l = new t.TextField;
                return l.x = e, l.y = i, l.width = n, l.height = s, l.size = o, l.fontFamily = "微软雅黑", l.textAlign = a, l.verticalAlign = "middle", l.textColor = r, h && (l.type = "input"), l.text = c, l.multiline = !1, l
            }, e.dazi = function (e, i, n) {
                var e = e, i = i, s = 0;
                t.setInterval(function () {
                    e.text = i.substr(0, s++)
                }, this, n)
            }, e.subname = function (t, e) {
                return null != t.text && t.text != e
            }, e.addbm = function (e, i, n) {
                var s;
                return s = new t.Bitmap(RES.getRes(e)), s.x = i, s.y = n, s
            }, e.setmaodian = function (t, e, i) {
                t.anchorOffsetX = e, t.anchorOffsetY = i, t.x += e, t.y += i
            }, e.tantiao = function (e, n, s, o, a, r, h, c, l, d) {
                for (var u = [], p = 0; p < e.length; p++) u[p] = i.Tools.add_input(s + p * a, 0, a, r, h, "center", c, !1, e.substr(p, 1)), t.Tween.get(u[p]).to({alpha: 0}).wait(p * l).to({
                    alpha: 1,
                    y: o
                }, d, t.Ease.bounceOut), n.addChild(u[p])
            }, e.copy = function (e) {
                var i;
                return i = new t.Bitmap(e.texture), i.x = e.x, i.y = e.y, i
            }, e.skip = function (t) {
                window.location.href = t
            }, e
        }();
        i.Tools = n, e(n.prototype, "st.Tools")
    }(mt || (mt = {}));
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.init = function () {
                this.stage = t.MainContext.instance.stage, this.sceneContainer = new t.DisplayObjectContainer, this.stage.addChild(this.sceneContainer), this.viewContainer = new t.DisplayObjectContainer, this.stage.addChild(this.viewContainer), this.PopUpContainer = new t.DisplayObjectContainer, this.stage.addChild(this.PopUpContainer), this.MsgContainer = new t.DisplayObjectContainer, this.stage.addChild(this.MsgContainer), i.BaseViewManager.init(), i.StageBtnUtils.init(), i.Slider.init(), i.InputUtils.init()
            }, e.stage = null, e.PopUpContainer = null, e.MsgContainer = null, e.viewContainer = null, e.sceneContainer = null, e
        }();
        i.GameInterface = n, e(n.prototype, "wy.GameInterface"), i.init = function () {
            n.init()
        }
    }(wt || (wt = {}));
    var bt = function (e) {
        function o() {
            var i = e.call(this) || this;
            return i.addEventListener(t.Event.ADDED_TO_STAGE, i.onAddToStage, i), i
        }

        return i(o, e), o.prototype.onAddToStage = function (e) {
            t.MainContext.deviceType == t.MainContext.DEVICE_PC && (this.stage.scaleMode = "showAll"), Number((window.innerWidth / window.innerHeight).toFixed(2)) <= .52 ? (this.stage.setContentSize(750, 1624), j.isIPX = !0) : (this.stage.setContentSize(750, 1334), j.isIPX = !1), console.log("是否IPX ==== " + j.isIPX), t.lifecycle.addLifecycleListener(function (t) {
                t.onUpdate = function () {
                }
            }), t.lifecycle.onPause = function () {
                t.ticker.pause()
            }, t.lifecycle.onResume = function () {
                t.ticker.resume()
            }, this.runGame().catch(function (t) {
                console.log(t)
            }), wt.init()
        }, o.prototype.runGame = function () {
            return n(this, void 0, void 0, function () {
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.loadResource()];
                        case 1:
                            return t.sent(), [2]
                    }
                })
            })
        }, o.prototype.loadResource = function () {
            return n(this, void 0, void 0, function () {
                var t, e;
                return s(this, function (i) {
                    switch (i.label) {
                        case 0:
                            return i.trys.push([0, 3, , 4]), [4, RES.loadConfig("resource/default.res.json", "resource/")];
                        case 1:
                            return i.sent(), t = new ut, [4, RES.loadGroup("preload", 0, null)];
                        case 2:
                            return i.sent(), this.createGameScene(), [3, 4];
                        case 3:
                            return e = i.sent(), console.error(e), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
        }, o.prototype.createGameScene = function () {
            this.bg = new t.Bitmap(RES.getRes("Center_bg_jpg")), this.bg.x = 0, this.bg.y = 0, this.bg.width = this.stage.stageWidth, this.bg.height = this.stage.stageHeight, this.addChild(this.bg);
            var e = wx.getLaunchOptionsSync().query;
            console.log(wx.getLaunchOptionsSync()), j.scene = wx.getLaunchOptionsSync().scene, D.ref_uid = e.ref_uid, D.share_type = e.share_type, wx.getSystemInfo({
                success: function (t) {
                    j.model = t.model, console.log(j.model)
                }
            }), ft.login()
        }, o
    }(t.DisplayObjectContainer);
    e(bt.prototype, "Main");
    !function (t) {
        var n = function (t) {
            function e() {
                return t.call(this) || this
            }

            return i(e, t), Object.defineProperty(e.prototype, "data", {
                get: function () {
                    return this._data
                }, set: function (t) {
                    this._data = t, this.dataChanged()
                }, enumerable: !0, configurable: !0
            }), e.prototype.dataChanged = function () {
            }, e.prototype.clear = function () {
            }, e
        }(t.BaseSprite);
        t.ItemRenderer = n, e(n.prototype, "wy.ItemRenderer", ["wy.IItemRenderer"])
    }(wt || (wt = {}));
    !function (n) {
        var s = function (e) {
            function n() {
                var t = e.call(this) || this;
                return t.top = 0, t.bottom = 0, t.left = 0, t.right = 0, t.cols = 1, t.rows = 1, t._layout = "vertical", t
            }

            return i(n, e), Object.defineProperty(n.prototype, "dataProvider", {
                get: function () {
                    return this._dataProvider
                }, set: function (t) {
                    if (this._itemRenderer) for (var e, i = 0; i < this._itemRenderer.length; ++i) (e = this._itemRenderer[i]).hide(), e.parent && e.parent.removeChild(e);
                    this._itemRenderer = [], this._dataProvider = t;
                    var n, s;
                    if (!this.itemRenderer) throw Error("没有设置渲染器");
                    for (i = 0; i < this._dataProvider.length; ++i) n = this._dataProvider[i], (s = new this.itemRenderer).show(), s.itemIndex = i, s.data = n, s.selected = !1, this.addChild(s), this._itemRenderer.push(s);
                    this.updateDisplayList()
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(n.prototype, "layout", {
                set: function (t) {
                    this._layout != t && (this._layout = t, this.updateDisplayList())
                }, enumerable: !0, configurable: !0
            }), n.prototype.updateDisplayList = function () {
                if (this._itemRenderer && !(this._itemRenderer.length <= 0)) {
                    var e = 0;
                    if (this._layout == n.VERTICAL) for (var i = this._itemRenderer[0].width, s = this._itemRenderer[0].height; e < this._itemRenderer.length;) for (o = 0; o < this.cols && e < this._itemRenderer.length; ++o) this._itemRenderer[e].x = o * (i + this.left + this.right) + this.left + this._itemRenderer[e].anchorOffsetX, this._itemRenderer[e].y = Math.floor(e / this.cols) * (s + this.top + this.bottom) + this.top + this._itemRenderer[e].anchorOffsetY, ++e; else if (this._layout == n.HORIZENTOL) for (var i = this._itemRenderer[0].width, s = this._itemRenderer[0].height; e < this._itemRenderer.length;) for (var o = 0; o < this.rows && e < this._itemRenderer.length; ++o) this._itemRenderer[e].x = Math.floor(e / this.rows) * (i + this.left + this.right) + this.left + this._itemRenderer[e].anchorOffsetX, this._itemRenderer[e].y = o * (s + this.top + this.bottom) + this.top + this._itemRenderer[e].anchorOffsetY, ++e;
                    this.bgShape || (this.bgShape = new t.Shape, this.addChildAt(this.bgShape, 0)), this.bgShape.graphics.clear(), this.bgShape.graphics.beginFill(0, .01), this.bgShape.graphics.drawRect(0, 0, this.width, this.height), this.bgShape.graphics.endFill()
                }
            }, n.prototype.updateItem = function (t, e) {
                t < 0 || !e || !this._itemRenderer || this._itemRenderer.length <= 0 || this._itemRenderer.length <= t || (this._itemRenderer[t].data = e, this.updateDisplayList())
            }, n.prototype.addItem = function (t) {
                if (t && this._itemRenderer && !(this._itemRenderer.length <= 0) && this.itemRenderer) {
                    var e = new this.itemRenderer;
                    e.show(), e.data = t, e.itemIndex = this._itemRenderer.length, e.selected = !1, this.addChild(e), this._itemRenderer.push(e), this.updateDisplayList()
                }
            }, n.prototype.getItemByIndex = function (t) {
                return t < this._itemRenderer.length ? this._itemRenderer[t] : null
            }, n.prototype.show = function () {
                this.touchEnabled = !0, this.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
                for (var e = 0; e < this._itemRenderer.length; e++) this._itemRenderer[e].show()
            }, n.prototype.hide = function () {
                this.touchEnabled = !1, this.removeEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
                for (var e = 0; e < this._itemRenderer.length; e++) this._itemRenderer[e].hide()
            }, n.prototype.onTouchTap = function (t) {
                if (this._itemRenderer && !(this._itemRenderer.length <= 0)) {
                    var e = this._itemRenderer[0].width, i = this._itemRenderer[0].height,
                        s = Math.floor(t.localX / (e + this.left + this.right)),
                        o = Math.floor(t.localY / (i + this.top + this.bottom));
                    s++, o++;
                    var a;
                    this._layout == n.VERTICAL ? a = (o = o - 1 >= 0 ? o - 1 : 0) * this.cols + s : this._layout == n.HORIZENTOL && (a = (s = s - 1 >= 0 ? s - 1 : 0) * this.rows + o), a--, this.dispatchEventWith(n.ITEM_CLICKED, null, this._itemRenderer[a])
                }
            }, n.VERTICAL = "vertical", n.HORIZENTOL = "horizental", n.ITEM_CLICKED = "item_clicked", n
        }(n.BaseSprite);
        n.List = s, e(s.prototype, "wy.List")
    }(wt || (wt = {}));
    !function (n) {
        var s = function (e) {
            function s() {
                var t = e.call(this) || this;
                return t.init(), t
            }

            return i(s, e), s.prototype.init = function () {
                this._container = new t.DisplayObjectContainer, this._scroller = new t.ScrollView(this._container), this.addChild(this._scroller), this._list = new n.List, this._container.addChild(this._list)
            }, Object.defineProperty(s.prototype, "scrollTop", {
                set: function (t) {
                    this._scroller.scrollTop = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(s.prototype, "scrollLeft", {
                set: function (t) {
                    this._scroller.scrollLeft = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(s.prototype, "verticalScrollPolicy", {
                set: function (t) {
                    this._scroller.verticalScrollPolicy = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(s.prototype, "horizontalScrollPolicy", {
                set: function (t) {
                    this._scroller.horizontalScrollPolicy = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(s.prototype, "bounces", {
                set: function (t) {
                    this._scroller.bounces = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(s.prototype, "itemRenderer", {
                set: function (t) {
                    this._list.itemRenderer = t
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(s.prototype, "width", {
                get: function () {
                    return this._width
                }, set: function (t) {
                    this._width = t, this._scroller.width = this._width
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(s.prototype, "height", {
                get: function () {
                    return this._height
                }, set: function (t) {
                    this._height = t, this._scroller.height = this._height
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(s.prototype, "dataProvider", {
                get: function () {
                    return this._list.dataProvider
                }, set: function (t) {
                    this._list.dataProvider = t
                }, enumerable: !0, configurable: !0
            }), s.prototype.updateDisplayList = function () {
                this._list.updateDisplayList()
            }, Object.defineProperty(s.prototype, "layout", {
                set: function (t) {
                    this._list.layout = t
                }, enumerable: !0, configurable: !0
            }), s.prototype.updateItem = function (t, e) {
                this._list.updateItem(t, e)
            }, s.prototype.addItem = function (t) {
                this._list.addItem(t)
            }, s.prototype.show = function () {
                this._list.show()
            }, s.prototype.hide = function () {
                this._list.hide()
            }, s
        }(n.BaseSprite);
        n.ScrollerList = s, e(s.prototype, "wy.ScrollerList")
    }(wt || (wt = {}));
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.init = function () {
                this.getViewMustNew = !0, this.panels = [], this.shape = new t.Shape, this.shape.graphics.beginFill(0, .5), this.shape.graphics.drawRect(0, 0, t.MainContext.instance.stage.stageWidth, t.MainContext.instance.stage.stageHeight), this.shape.graphics.endFill(), this.shape.touchEnabled = !0, this.viewshape = new t.Shape, this.viewshape.graphics.beginFill(0, .5), this.viewshape.graphics.drawRect(0, 0, t.MainContext.instance.stage.stageWidth, t.MainContext.instance.stage.stageHeight), this.viewshape.graphics.endFill(), this.viewshape.touchEnabled = !0
            }, e.getView = function (e) {
                var i, n;
                return this.getViewMustNew || ("string" == typeof e ? i = this.panels[e] : (n = t.getQualifiedClassName(e), i = this.panels[n])), null != i && void 0 != i || ("string" == typeof e ? (i = new (t.getDefinitionByName(e)), this.panels[e] = i) : (i = new e, n = t.getQualifiedClassName(e), this.panels[n] = i)), i
            }, e.changeScene = function (t, e, n, s) {
                i.Tween.switchPagePopType = e, this.preScene = this.nowScene;
                var o = this.getView(t);
                o.show(n), i.GameInterface.sceneContainer.addChild(o), this.nowScene = o, this.preScene == this.nowScene && (this.preScene = null), this.preScene && this.preScene.hide(), e ? this.play(this.nowScene, this.preScene, e, s) : this.preScene && i.Tools.removeFromParent(this.preScene)
            }, e.hideScene = function (t, e) {
                this.nowScene && this.nowScene.hide(), t ? (this.preScene = null, this.play(this.preScene, this.nowScene, t, e)) : i.Tools.removeFromParent(this.nowScene)
            }, e.changeView = function (t, e, n, s, o) {
                void 0 === o && (o = !1), i.Tween.switchPagePopType = e, this.preView = this.nowView;
                var a = this.getView(t);
                a.show(n), o && i.GameInterface.viewContainer.addChild(this.viewshape), i.GameInterface.viewContainer.addChild(a), this.nowView = a, this.preView == this.nowView && (this.preView = null), this.preView && this.preView.hide(), e ? this.play(this.nowView, this.preView, e, s) : this.preView && i.Tools.removeFromParent(this.preView)
            }, e.openPopUpView = function (t, e, n, s, o) {
                void 0 === o && (o = !0), i.Tween.switchPagePopType = e, this.prePopUpView = this.nowPopUpView;
                var a = this.getView(t);
                a.show(n), a.x = .5 * i.GameInterface.stage.stageWidth - .5 * a.width + a.anchorOffsetX, a.y = .5 * i.GameInterface.stage.stageHeight - .5 * a.height + a.anchorOffsetY, o && i.GameInterface.PopUpContainer.addChild(this.shape), i.GameInterface.PopUpContainer.addChild(a), this.nowPopUpView = a, this.prePopUpView == this.nowPopUpView && (this.prePopUpView = null), this.prePopUpView && this.prePopUpView.hide(), e ? this.play(this.nowPopUpView, this.prePopUpView, e, s) : this.prePopUpView && i.Tools.removeFromParent(this.prePopUpView)
            }, e.hideView = function (t, e) {
                i.Tools.removeFromParent(this.viewshape), this.nowView && this.nowView.hide(), t ? (this.preView = null, this.play(this.preView, this.nowView, t, e)) : i.Tools.removeFromParent(this.nowView)
            }, e.hidePopUpView = function (t, e) {
                i.Tools.removeFromParent(this.shape), this.nowPopUpView && this.nowPopUpView.hide(), t ? (this.prePopUpView = null, this.play(this.prePopUpView, this.nowPopUpView, t, e)) : i.Tools.removeFromParent(this.nowPopUpView)
            }, e.play = function (e, n, s, o) {
                var a = new (t.getDefinitionByName(s));
                a && a.switching(e, n, i.Tools.removeFromParent, this, o)
            }, e.panels = null, e.preScene = null, e.nowScene = null, e.preView = null, e.nowView = null, e.prePopUpView = null, e.nowPopUpView = null, e.shape = null, e.viewshape = null, e.getViewMustNew = !0, e
        }();
        i.BaseViewManager = n, e(n.prototype, "wy.BaseViewManager"), i.changeScene = function (t, e, i, s) {
            n.changeScene(t, e, i, s)
        }, i.hideScene = function (t, e) {
            n.hideScene(t, e)
        }, i.changeView = function (t, e, i, s, o) {
            void 0 === o && (o = !1), n.changeView(t, e, i, s, o)
        }, i.hideView = function (t, e) {
            n.hideView(t, e)
        }, i.openPopUpView = function (t, e, i, s, o) {
            void 0 === o && (o = !0), n.openPopUpView(t, e, i, s, o)
        }, i.hidePopUpView = function (t, e) {
            n.hidePopUpView(t, e)
        }
    }(wt || (wt = {}));
    !function (t) {
        var i = function () {
            function t() {
                this.regis = new Object, this.freshStrs = []
            }

            return t.getInstance = function () {
                return null != this.instance && void 0 != this.instance || (this.instance = new t), this.instance
            }, t.prototype.subscribeFunc = function (t, e, i) {
                this.regis[e] || (this.regis[e] = []), this.freshStrs.indexOf(e) < 0 && this.freshStrs.push(e), this.regis[e].push({
                    func: t,
                    this: i
                })
            }, t.prototype.unsubscribeFunc = function (t, e, i) {
                for (var n = this.regis[e], s = 0; s < n.length; s++) if (n[s].func == t && n[s].this == i) {
                    n.splice(s, 1);
                    break
                }
            }, t.prototype.notify = function (t) {
                for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                var n, s, o;
                for (s = 0; s < this.freshStrs.length; s++) if (t == this.freshStrs[s]) for (n = this.regis[this.freshStrs[s]], o = 0; o < n.length; o++) if (n[o].func instanceof Function) if (n[o].this) {
                    var a = n[o].this;
                    n[o].func.apply(a, e)
                } else n[o].func(e)
            }, t
        }();
        t.FreshNotifyManager = i, e(i.prototype, "wy.FreshNotifyManager"), t.on = function (t, e, n) {
            i.getInstance().subscribeFunc(t, e, n)
        }, t.off = function (t, e, n) {
            i.getInstance().unsubscribeFunc(t, e, n)
        }, t.notify = function (t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            (s = i.getInstance()).notify.apply(s, [t].concat(e));
            var s
        }
    }(wt || (wt = {}));
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.init = function () {
                i.Data.URL = window.gameUrl, this.openid = this.getItemByName("openid"), this.headimgurl = this.getItemByName("imgURL"), this.nickname = this.getItemByName("name"), this.sex = this.getItemByName("sex"), this.city = this.getItemByName("city"), this.country = this.getItemByName("country"), this.shareid = this.getItemByName("shareid"), this.delItemByName("shareid")
            }, e.share = function (t, e, i) {
                void 0 === i && (i = -1), i < 0 ? (window.sharedata[t] = e, window.timelinedata[t] = e, window.wx.onMenuShareAppMessage(window.sharedata), window.wx.onMenuShareTimeline(window.timelinedata)) : 0 == i ? (window.sharedata[t] = e, window.wx.onMenuShareAppMessage(window.sharedata)) : 1 == i && (window.timelinedata[t] = e, window.wx.onMenuShareTimeline(window.timelinedata))
            }, e.getItemByName = function (e) {
                var i;
                return (i = t.localStorage.getItem(e)) || (i = window.localStorage.getItem(e)) || (i = this.getCookie(e)) || (i = window.getQueryString(e)) && (i = decodeURI(decodeURI(i))), i
            }, e.delItemByName = function (e) {
                t.localStorage.removeItem(e), window.localStorage.removeItem(e), this.delCookie(e)
            }, e.getCookie = function (t) {
                var e, i = new RegExp("(^| )" + t + "=([^;]*)(;|$)");
                return (e = document.cookie.match(i)) ? e[2] : null
            }, e.delCookie = function (t) {
                var e = new Date;
                e.setTime(e.getTime() - 1);
                var i = this.getCookie(t);
                null != i && (document.cookie = t + "=" + i + ";expires=" + e.toUTCString())
            }, e.URL = "", e
        }();
        i.Data = n, e(n.prototype, "wy.Data")
    }(wt || (wt = {}));
    !function (t) {
        var i = function () {
            function t() {
            }

            return t.REMOVE = "remove_items", t.REMOVE_OVER = "remove_over", t
        }();
        t.FreshType = i, e(i.prototype, "wy.FreshType")
    }(wt || (wt = {}));
    !function (t) {
        var i = function () {
            function t(t) {
                t && (this.jsondata = t, this.updateType())
            }

            return t.prototype.setData = function (t) {
                t && t instanceof Object && (this.jsondata = t, this.updateType())
            }, t.prototype.getDataByIndex = function (t) {
                for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                var n = null;
                if (1 == this.datatype) if (!e || e.length <= 0) n = this.jsondata[t]; else {
                    for (var s = this.jsondata, o = 0, a = e.length; o < a && s; ++o) for (var r = 0, h = s.length; r < h; ++r) if (s[r].label == e[o]) {
                        s = s[r].children;
                        break
                    }
                    n = t < 0 ? s : t < s.length ? s[t] : null
                }
                return n
            }, t.prototype.getDataByLabel = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var i = null;
                if (1 == this.datatype) if (!t || t.length <= 0) i = null; else {
                    for (var n = this.jsondata, s = 0, o = t.length; s < o && n; ++s) for (var a = 0, r = n.length; a < r; ++a) if (n[a].label == t[s]) {
                        n = n[a].children;
                        break
                    }
                    i = n
                }
                return i
            }, t.prototype.getLabelArray = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var i = null;
                if (1 == this.datatype) if (!t || t.length <= 0) i = null; else {
                    for (var n = this.jsondata, s = 0, o = t.length; s < o && n; ++s) for (var a = 0, r = n.length; a < r; ++a) if (n[a].label == t[s]) {
                        n = n[a].children;
                        break
                    }
                    if (n && n.length > 0) {
                        i = [];
                        for (var s = 0, r = n.length; s < r; s++) {
                            if (!n[s].hasOwnProperty("label")) throw Error("json 数据没有 label 属性 ");
                            i.push(n[s].label)
                        }
                    }
                }
                return i
            }, t.prototype.getLabelObjArray = function (t) {
                for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                if (!t) return null;
                var n = null;
                if (1 == this.datatype) if (!e || e.length <= 0) n = null; else {
                    for (var s = this.jsondata, o = 0, a = e.length; o < a && s; ++o) for (var r = 0, h = s.length; r < h; ++r) if (s[r].label == e[o]) {
                        s = s[r].children;
                        break
                    }
                    if (s && s.length > 0) {
                        n = [];
                        for (var o = 0, h = s.length; o < h; o++) {
                            if (!s[o].hasOwnProperty("label")) throw Error("json 数据没有 label 属性 ");
                            n.push({key: s[o].label})
                        }
                    }
                }
                return n
            }, t.prototype.updateType = function () {
                this.jsondata ? this.jsondata instanceof Object && this.jsondata instanceof Array ? this.datatype = 1 : this.jsondata instanceof Object ? this.datatype = 0 : this.datatype = -1 : this.datatype = -1, console.log("datatype=" + this.datatype)
            }, t
        }();
        t.Json = i, e(i.prototype, "wy.Json")
    }(wt || (wt = {}));
    !function (t) {
        var i = function () {
            function t() {
            }

            return t.LEFTIN = "wy.PageLeftIn", t.RIGHTIN = "wy.PageRightIn", t.TOPIN = "wy.PageTopIn", t.BOTTOMIN = "wy.PageBottomIn", t.ALPHAIN = "wy.PageAlphaIn", t.EJECTIN = "wy.PageScaleIn", t.LEFTOUT = "wy.PageLeftOut", t.RIGHTOUT = "wy.PageRightOut", t.TOPOUT = "wy.PageTopOut", t.BOTTOMOUT = "wy.PageBottomOut", t.ALPHAOUT = "wy.PageAlphaOut", t.EJECTOUT = "wy.PageScaleOut", t
        }();
        t.PopType = i, e(i.prototype, "wy.PopType")
    }(wt || (wt = {}));
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.init = function (t, e, i, n, s, o) {
                void 0 === s && (s = 50), void 0 === o && (o = 50), this.posX = s, this.posY = o, this.playImg = i, this.stopImg = n || this.playImg, this.createMusicBtn(), this.btnNeedParent = !0, this.loadMusic(t, e)
            }, e.loadMusic = function (e, i) {
                void 0 === i && (i = !0), this.bgmSound = new t.Sound, this.bgmSound.addEventListener(t.Event.COMPLETE, this.onLoadFinish, this), this.bgmSound.addEventListener(t.IOErrorEvent.IO_ERROR, this.onLoadFinish, this), this.bgmSound.load("resource/assets/" + e + ".mp3"), this.needStart = i
            }, e.onLoadFinish = function (t) {
                this.bgmSound = t.target, this.needStart && (window.wx && window.is_weixin() ? window.wx.getNetworkType({
                    success: function (t) {
                        t.networkType;
                        i.BGM.startMusic()
                    }
                }) : this.startMusic())
            }, e.onLoadError = function (e) {
                t.warn("音频加载出错")
            }, e.startMusic = function () {
                this.bgmSound && (this.musicBtn && 0 == this.musicBtn.state && this.onClickMusicBtn(), this.btnNeedParent && this.musicBtn && !this.musicBtn.parent && (i.GameInterface.stage.addChild(this.musicBtn), this.musicBtn.x = this.posX, this.musicBtn.y = this.posY))
            }, e.endMusic = function () {
                this.musicBtn && 1 == this.musicBtn.state && this.onClickMusicBtn()
            }, e.setXY = function (t, e) {
                this.musicBtn && (this.posX = t, this.posY = e, this.musicBtn.x = t, this.musicBtn.y = e)
            }, e.createMusicBtn = function () {
                this.musicBtn = i.Tools.createBitmapByName(this.playImg), i.Tools.center(this.musicBtn), this.musicBtn.state = 0, this.musicBtn.touchEnabled = !0, t.Tween.get(this.musicBtn, {loop: !0}).to({rotation: 360}, 4e3), t.Tween.pauseTweens(this.musicBtn), this.musicBtn.addEventListener(t.TouchEvent.TOUCH_TAP, this.onClickMusicBtn, this)
            }, e.onClickMusicBtn = function (e) {
                void 0 === e && (e = null), 1 == this.musicBtn.state ? (this.musicBtn.state = 0, this.musicBtn.texture = RES.getRes(this.stopImg), this.bgmSound && (this.bgmChannel.stop(), t.Tween.pauseTweens(this.musicBtn), this.musicBtn.rotation = 0)) : (this.musicBtn.state = 1, this.musicBtn.texture = RES.getRes(this.playImg), this.bgmSound && (this.bgmChannel && this.bgmChannel.stop(), this.bgmChannel = this.bgmSound.play(0, 1e4), this.musicBtn.rotation = 0, t.Tween.resumeTweens(this.musicBtn)))
            }, e.needStart = !0, e
        }();
        i.BGM = n, e(n.prototype, "wy.BGM")
    }(wt || (wt = {}));
    !function (n) {
        var s = function (e) {
            function s() {
                var t = e.call(this) || this;
                return t.createOk(), t
            }

            return i(s, e), s.prototype.createOk = function () {
                this.graphics.beginFill(0, .3), this.graphics.drawRect(0, 0, 640, 1036), this.graphics.endFill(), this.touchEnabled = !0, this.dialog = new t.Sprite, this.dialog.graphics.beginFill(16777215, 1), this.dialog.graphics.drawRoundRect(0, 0, 400, 260, 50), this.dialog.graphics.endFill(), this.addChild(this.dialog), this.dialog.anchorOffsetX = this.dialog.width >> 1, this.dialog.anchorOffsetY = this.dialog.height >> 1, this.dialog.x = (640 - this.dialog.width) / 2 + this.dialog.anchorOffsetX, this.dialog.y = (1036 - this.dialog.height) / 2 + this.dialog.anchorOffsetY, this.dialog_btn_none = new t.Shape, this.dialog_btn_none.graphics.beginFill(16777215, 1), this.dialog_btn_none.graphics.drawRoundRect(0, 0, 400, 70, 50), this.dialog_btn_none.graphics.endFill(), this.dialog_btn_none.y = 190, this.dialog.addChild(this.dialog_btn_none), this.dialog_btn_select = new t.Shape, this.dialog_btn_select.graphics.beginFill(11052453, .5), this.dialog_btn_select.graphics.drawRoundRect(0, 0, 400, 70, 50), this.dialog_btn_select.graphics.endFill(), this.dialog_btn_select.y = 190, this.dialog.addChild(this.dialog_btn_select), this.dialog_btn_select.visible = !1, this.line = new t.Shape, this.line.graphics.lineStyle(1, 5460819), this.line.graphics.moveTo(0, 190), this.line.graphics.lineTo(400, 190), this.dialog.addChild(this.line);
                var e = new t.TextField;
                e.x = 0, e.y = 190, e.textAlign = t.HorizontalAlign.CENTER, e.verticalAlign = t.VerticalAlign.MIDDLE, e.fontFamily = "微软雅黑", e.width = 400, e.height = 70, e.textColor = 0, e.multiline = !1, e.size = 30, e.text = "确定", this.dialog.addChild(e), this.content_text = new t.TextField, this.content_text.x = 20, this.content_text.y = 10, this.content_text.textAlign = t.HorizontalAlign.CENTER, this.content_text.verticalAlign = t.VerticalAlign.MIDDLE, this.content_text.fontFamily = "微软雅黑", this.content_text.width = 360, this.content_text.height = 170, this.content_text.textColor = 0, this.content_text.multiline = !0, this.content_text.lineSpacing = 15, this.content_text.size = 25, this.dialog.addChild(this.content_text), this.dialog_btn_none.touchEnabled = !0, this.dialog_btn_none.addEventListener(t.TouchEvent.TOUCH_BEGIN, this.tap_begin, this), this.dialog_btn_none.addEventListener(t.TouchEvent.TOUCH_END, this.tap_end, this), this.dialog_btn_none.addEventListener(t.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.tap_out, this)
            }, s.prototype.show_dialog = function (t, e, i, n) {
                this.dialog_btn_none.touchEnabled = !0, this.content_text.text = t, e.addChild(this), this.callBackFunc = n, this.thisObj = i
            }, s.prototype.tap_begin = function () {
                this.dialog_btn_select.visible = !0
            }, s.prototype.tap_out = function () {
                this.dialog_btn_select.visible = !1
            }, s.prototype.tap_end = function () {
                this.dialog_btn_none.touchEnabled = !1, this.dialog_btn_select.visible = !1, this && this.parent && this.parent.removeChild(this), this.thisObj && this.callBackFunc && this.callBackFunc.call(this.thisObj)
            }, s.show = function (t, e, i, s) {
                void 0 === s && (s = n.GameInterface.stage), this.dialog.show_dialog(t, s, e, i)
            }, s.dialog = new s, s
        }(t.Sprite);
        n.Dialog = s, e(s.prototype, "wy.Dialog")
    }(wt || (wt = {}));
    !function (t) {
        var i = function () {
            function e() {
            }

            return e.init = function (t) {
                this.myImg = document.createElement("img"), this.myImg.src = t
            }, e.set = function (e, i, n, s) {
                var o = n / t.GameInterface.stage.stageWidth * 100, a = s / t.GameInterface.stage.stageHeight * 100,
                    r = e / t.GameInterface.stage.stageWidth * 100, h = i / t.GameInterface.stage.stageHeight * 100;
                this.myImg.style.width = o + "%", this.myImg.style.height = a + "%", this.myImg.style.position = "absolute", this.myImg.style.left = r + "%", this.myImg.style.top = h + "%"
            }, e.hide = function () {
                this.myImg && this.myImg.parentNode && this.myImg.parentNode.removeChild(this.myImg)
            }, e.show = function () {
                document.getElementById("gameID").appendChild(this.myImg)
            }, e
        }();
        t.EWM = i, e(i.prototype, "wy.EWM")
    }(wt || (wt = {}));
    !function (n) {
        var s = function (e) {
            function n(i, s) {
                void 0 === s && (s = !0);
                var o, a = e.call(this) || this;
                return o = i || n.RADIUS, a.bmp = new t.Bitmap, a.addChild(a.bmp), a.bmp.width = a.bmp.height = 2 * o, a.bmp.x = a.bmp.y = -o, s && (a.shpMask = new t.Shape, a.shpMask.graphics.beginFill(16777215, 1), a.shpMask.graphics.drawCircle(0, 0, o), a.shpMask.graphics.endFill(), a.addChild(a.shpMask), a.bmp.mask = a.shpMask), a
            }

            return i(n, e), Object.defineProperty(n.prototype, "source", {
                get: function () {
                    return this._source
                }, set: function (t) {
                    this._source = t, RES.getResByUrl(t, this.compFunc, this, RES.ResourceItem.TYPE_IMAGE)
                }, enumerable: !0, configurable: !0
            }), n.prototype.compFunc = function (t) {
                this.bmp && (this.bmp.texture = t)
            }, Object.defineProperty(n.prototype, "texture", {
                get: function () {
                    return this.bmp ? this.bmp.texture : null
                }, set: function (t) {
                    this.bmp && (this.bmp.texture = t)
                }, enumerable: !0, configurable: !0
            }), n.RADIUS = 50, n
        }(t.DisplayObjectContainer);
        n.HeadImg = s, e(s.prototype, "wy.HeadImg")
    }(wt || (wt = {}));
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.init = function () {
                this.inputs = [], this.inputDatas = [], this.defaultColor = 9884671, this.inputColor = 0
            }, e.register = function (e, i, n, s) {
                e.type == t.TextFieldType.INPUT ? (n || (n = this.defaultColor), s || (s = this.inputColor), this.inputs.indexOf(e) < 0 && (this.inputs.push(e), e.text = i + "", e.textColor = n, this.inputDatas.push({
                    inputColor: s,
                    defaultColor: n,
                    defaultStr: i
                }), e.addEventListener(t.TextEvent.FOCUS_IN, this.onFocusIn, this), e.addEventListener(t.TextEvent.FOCUS_OUT, this.onFocusOut, this))) : console.log("input type is not input")
            }, e.unregister = function (e) {
                var i = this.inputs.indexOf(e);
                i >= 0 && (this.inputs[i].addEventListener(t.TextEvent.FOCUS_IN, this.onFocusIn, this), this.inputs[i].addEventListener(t.TextEvent.FOCUS_OUT, this.onFocusOut, this), this.inputs.splice(i, 1), this.inputDatas.splice(i, 1))
            }, e.onFocusIn = function (t) {
                var e = t.currentTarget;
                if (e) {
                    var i = this.inputs.indexOf(e);
                    this.inputDatas[i] && e.textColor == this.inputDatas[i].defaultColor && (e.text = "", e.textColor = this.inputDatas[i].inputColor)
                }
            }, e.onFocusOut = function (t) {
                var e = t.currentTarget;
                if (e) {
                    var i = this.inputs.indexOf(e);
                    "" == e.text && this.inputDatas[i] && (e.text = this.inputDatas[i].defaultStr + "", e.textColor = this.inputDatas[i].defaultColor)
                }
            }, e
        }();
        i.InputUtils = n, e(n.prototype, "wy.InputUtils")
    }(wt || (wt = {}));
    !function (n) {
        var s = function (e) {
            function s() {
                return e.call(this) || this
            }

            return i(s, e), s.prototype.createOk = function (e) {
                if (this.bg = new t.Shape, this.bg.graphics.beginFill(0, .5), e) {
                    var i = 170, s = 418;
                    this.bg.graphics.drawRect(0, 0, 640, 1036)
                } else {
                    var i = 418, s = 170;
                    this.bg.graphics.drawRect(0, 0, 1036, 640)
                }
                switch (this.bg.graphics.endFill(), this.addChild(this.bg), this.bg.touchEnabled = !0, this.dialog = new t.Sprite, this.dialog.graphics.beginFill(1973790, 0), this.dialog.graphics.drawRoundRect(0, 0, 300, 200, 25), this.dialog.graphics.endFill(), this.addChild(this.dialog), this.dialog.x = i, this.dialog.y = s, this.shape_sprite = new t.Sprite, this.shape_sprite.graphics.beginFill(16711680, 0), this.shape_sprite.graphics.drawRect(0, 0, 140, 140), this.shape_sprite.graphics.endFill(), this.dialog.addChild(this.shape_sprite), this.shape_sprite.anchorOffsetX = this.shape_sprite.width >> 1, this.shape_sprite.anchorOffsetY = this.shape_sprite.height >> 1, this.shape_sprite.x = 83 + this.shape_sprite.anchorOffsetX, this.shape_sprite.y = 35 + this.shape_sprite.anchorOffsetY, n.LoadingData.STYLE) {
                    case 1:
                        this.style1();
                        break;
                    case 2:
                        this.style2()
                }
            }, s.prototype.style1 = function () {
                var e;
                (e = new t.Shape).graphics.lineStyle(3, 16777215, 1), e.graphics.drawCircle(70, 70, 70), e.graphics.endFill(), this.shape_sprite.addChild(e);
                var i;
                (i = new t.Shape).graphics.beginFill(16777215), i.graphics.drawCircle(28, 15, 7), i.graphics.endFill(), this.shape_sprite.addChild(i), t.Tween.get(this.shape_sprite, {loop: !0}).to({rotation: 360}, 2e3, t.Ease.cubicOut)
            }, s.prototype.style2 = function () {
                var e, i, n, s;
                (e = new t.Shape).graphics.beginFill(16777215), e.graphics.drawCircle(120, 72, 10), e.graphics.endFill(), this.shape_sprite.addChild(e), (i = new t.Shape).graphics.beginFill(16777215, .8), i.graphics.drawCircle(99, 18, 8), i.graphics.endFill(), this.shape_sprite.addChild(i), (n = new t.Shape).graphics.beginFill(16777215, .6), n.graphics.drawCircle(35.5, 18.5, 6), n.graphics.endFill(), this.shape_sprite.addChild(n), (s = new t.Shape).graphics.beginFill(16777215, .4), s.graphics.drawCircle(10, 71, 4), s.graphics.endFill(), this.shape_sprite.addChild(s), t.Tween.get(this.shape_sprite, {loop: !0}).to({rotation: 360}, 1e3)
            }, s.prototype.open_loading = function (t, e) {
                this.createOk(t), e.addChild(this)
            }, s.prototype.close_loading = function () {
                this && this.parent && (this.removeChildren(), this.parent.removeChild(this))
            }, s.open = function (t, e) {
                void 0 === t && (t = !0), void 0 === e && (e = n.GameInterface.stage), this.loadingData.open_loading(t, e)
            }, s.close = function () {
                this.loadingData.close_loading()
            }, s.STYLE = 1, s.loadingData = new s, s
        }(t.DisplayObjectContainer);
        n.LoadingData = s, e(s.prototype, "wy.LoadingData")
    }(wt || (wt = {}));
    var Tt = function () {
        function t() {
        }

        return t.limit = function (t, e) {
            t = Math.min(t, e);
            var i = (e = Math.max(t, e)) - t;
            return t + Math.random() * i
        }, t.limitInteger = function (t, e) {
            return Math.round(this.limit(t, e))
        }, t.randomArray = function (t) {
            return t[Math.floor(Math.random() * t.length)]
        }, t
    }();
    e(Tt.prototype, "RandomUtils");
    !function (t) {
        var i = function () {
            function t() {
            }

            return t.checkMobile = function (t) {
                return !!/^0?1[3|4|5|8|7][0-9]\d{8}$/.test(t)
            }, t.checkNum = function (t) {
                return !!/^\d+(?=\.{0,1}\d+$|$)/.test(t)
            }, t
        }();
        t.RegUtils = i, e(i.prototype, "wy.RegUtils")
    }(wt || (wt = {}));
    !function (i) {
        var n = function () {
            function e() {
                this.prep = new t.Point, this.threshold = 50, this.funcObjs = [];
                for (var e = 0; e < 4; ++e) this.funcObjs.push({func: null, thisObj: null})
            }

            return e.init = function () {
                this.sliders = [], this.pages = []
            }, e.register = function (t) {
                if (this.pages && this.sliders) {
                    var i, n = this.pages.indexOf(t);
                    return n < 0 ? (i = new e, this.sliders.push(i), i.bind(t), this.pages.push(t)) : i = this.sliders[n], i
                }
                console.info("请先使用wy.Slider.init();初始化")
            }, e.unregister = function (t) {
                var e = this.pages.indexOf(t);
                e >= 0 && (this.pages.splice(e, 1), this.sliders.length > e && (this.sliders[e].unbind(t), this.sliders.splice(e, 1)))
            }, e.prototype.bind = function (e) {
                e.addEventListener(t.TouchEvent.TOUCH_BEGIN, this.ontouchbegin, this), e.addEventListener(t.TouchEvent.TOUCH_MOVE, this.ontouchmove, this), e.addEventListener(t.TouchEvent.TOUCH_END, this.ontouchend, this), e.addEventListener(t.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.ontouchend, this)
            }, e.prototype.unbind = function (e) {
                e.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this.ontouchbegin, this), e.removeEventListener(t.TouchEvent.TOUCH_MOVE, this.ontouchmove, this), e.removeEventListener(t.TouchEvent.TOUCH_END, this.ontouchend, this), e.removeEventListener(t.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.ontouchend, this);
                for (var i = 0; i < 4; ++i) this.funcObjs[i] && (this.funcObjs[i].func = null, this.funcObjs[i].thisObj = null), this.funcObjs[i] = null;
                this.funcObjs = null, this.prep = null
            }, e.prototype.left = function (t, e) {
                return this.funcObjs[0].func = t, this.funcObjs[0].thisObj = e, this
            }, e.prototype.right = function (t, e) {
                return this.funcObjs[1].func = t, this.funcObjs[1].thisObj = e, this
            }, e.prototype.up = function (t, e) {
                return this.funcObjs[2].func = t, this.funcObjs[2].thisObj = e, this
            }, e.prototype.down = function (t, e) {
                return this.funcObjs[3].func = t, this.funcObjs[3].thisObj = e, this
            }, e.prototype.nextleft = function (t, e, n, s) {
                var o = this;
                return void 0 === e && (e = 0), this.left(function () {
                    o.next(t, e, i.PopType.LEFTIN)
                }, this)
            }, e.prototype.nextright = function (t, e, n, s) {
                var o = this;
                return void 0 === e && (e = 0), this.right(function () {
                    o.next(t, e, i.PopType.RIGHTIN)
                }, this)
            }, e.prototype.nextup = function (t, e, n, s) {
                var o = this;
                return void 0 === e && (e = 0), this.up(function () {
                    o.next(t, e, i.PopType.TOPIN)
                }, this)
            }, e.prototype.nextdown = function (t, e, n, s) {
                var o = this;
                return void 0 === e && (e = 0), this.down(function () {
                    o.next(t, e, i.PopType.BOTTOMIN)
                }, this)
            }, e.prototype.next = function (t, e, n, s, o, a) {
                switch (void 0 === e && (e = 0), e) {
                    case 0:
                        i.changeScene(t, n, o);
                        break;
                    case 1:
                        i.changeView(t, n, o, a);
                        break;
                    case 2:
                        i.openPopUpView(t, n, o, a)
                }
            }, Object.defineProperty(e.prototype, "threshold", {
                set: function (t) {
                    this.thresholdX = t, this.thresholdY = t
                }, enumerable: !0, configurable: !0
            }), e.prototype.ontouchbegin = function (t) {
                this.prep.x = t.stageX, this.prep.y = t.stageY
            }, e.prototype.ontouchmove = function (t) {
            }, e.prototype.ontouchend = function (t) {
                this.judge(t)
            }, e.prototype.judge = function (t) {
                if (this.prep) {
                    var e = t.stageX - this.prep.x, i = t.stageY - this.prep.y, n = !(i > 0);
                    !(e > 0) ? Math.abs(e) > this.thresholdX && this.callFunc(1) : Math.abs(e) > this.thresholdX && this.callFunc(0), n ? Math.abs(i) > this.thresholdY && this.callFunc(3) : Math.abs(i) > this.thresholdY && this.callFunc(2)
                }
            }, e.prototype.callFunc = function (t) {
                this.funcObjs && this.funcObjs.length > t && this.funcObjs[t] && this.funcObjs[t].func && (this.funcObjs[t].thisObj ? this.funcObjs[t].func.call(this.funcObjs[t].thisObj) : this.funcObjs[t].func())
            }, e
        }();
        i.Slider = n, e(n.prototype, "wy.Slider")
    }(wt || (wt = {}));
    !function (i) {
        var n = function () {
            function e() {
            }

            return Object.defineProperty(e, "showTouchEffects", {
                get: function () {
                    return this._showTouchEffects
                }, set: function (e) {
                    this._showTouchEffects = e, e ? i.GameInterface.stage.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this) : i.GameInterface.stage.removeEventListener(t.TouchEvent.TOUCH_TAP, this.onTouchTap, this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e, "showBtnEffects", {
                get: function () {
                    return this._showBtnEffects
                }, set: function (e) {
                    this._showBtnEffects = e, e ? (i.GameInterface.stage.addEventListener(t.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), i.GameInterface.stage.addEventListener(t.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchRelease, this), i.GameInterface.stage.addEventListener(t.TouchEvent.TOUCH_END, this.onTouchEnd, this)) : (i.GameInterface.stage.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), i.GameInterface.stage.removeEventListener(t.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchRelease, this), i.GameInterface.stage.removeEventListener(t.TouchEvent.TOUCH_END, this.onTouchEnd, this))
                }, enumerable: !0, configurable: !0
            }), e.init = function () {
                this.showBtnEffects = !0, this.showTouchEffects = !1
            }, e.onTouchTap = function (t) {
                i.TouchEffects.do(t.stageX, t.stageY)
            }, e.onTouchBegin = function (t) {
                "btn" == t.target.name && (i.Tools.center(t.target), t.target.scaleX = t.target.scaleY = .95)
            }, e.onTouchRelease = function (t) {
                "btn" == t.target.name && (t.target.scaleX = t.target.scaleY = 1), this._showTouchEffects && i.TouchEffects.do(t.stageX, t.stageY)
            }, e.onTouchEnd = function (t) {
                "btn" == t.target.name && (t.target.scaleX = t.target.scaleY = 1)
            }, e.TYPE_BUTTON = "btn", e._showTouchEffects = !1, e._showBtnEffects = !0, e
        }();
        i.StageBtnUtils = n, e(n.prototype, "wy.StageBtnUtils")
    }(wt || (wt = {}));
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.setContent = function (e, n, s, o) {
                void 0 === n && (n = null), void 0 === s && (s = !0), void 0 === o && (o = i.GameInterface), this.isChange = !1;
                var a = this.InstanceTf();
                a.text = e, a.width >= o.stage.stageWidth - 100 && (a.width = o.stage.stageWidth - 100), a.width == this.TF_WIDTH && a.height == this.TF_HEIGHT || (this.isChange = !0), this.TF_WIDTH = a.width + 60, this.TF_HEIGHT = a.height + 40, a.y = 20;
                var r = this.InstanceSpr();
                r.x = (o.stage.stageWidth - r.width) / 2, t.Tween.removeTweens(r);
                var h = o.stage.stageHeight - 150;
                h + this.TF_HEIGHT + 40 >= o.stage.stageHeight && (h -= 50), n && (s = !1, h = n), s && (r.y = o.stage.stageHeight, t.Tween.get(r).to({y: h}, 300)), t.Tween.get(r).to({alpha: 1}, 300).wait(2e3).to({alpha: 0}, 300).call(function () {
                    r.parent && r.parent.removeChild(r)
                }), r.y = h, o.stage.addChild(r)
            }, e.InstanceTf = function () {
                return null == this.toastText && (this.toastText = new t.TextField, this.toastText.size = this.FONT_SIZE, this.toastText.x = 30, this.toastText.textAlign = "center", this.toastText.fontFamily = "微软雅黑", this.toastText.verticalAlign = t.VerticalAlign.MIDDLE, this.toastText.textColor = this.TXT_COLOR, this.toastText.lineSpacing = 15), this.toastText
            }, e.InstanceSpr = function () {
                return (null == this._instanceSpr || this.isChange) && (this._instanceSpr && this._instanceSpr.parent && this._instanceSpr.parent.removeChild(this._instanceSpr), this._instanceSpr = new t.Sprite, this._instanceSpr.graphics.beginFill(this.BG_COLOR, 1), this._instanceSpr.graphics.drawRoundRect(0, 0, this.TF_WIDTH, this.TF_HEIGHT, 20), this._instanceSpr.graphics.endFill(), this._instanceSpr.addChild(this.toastText)), this._instanceSpr.alpha = 0, this._instanceSpr
            }, e.BG_COLOR = 3421236, e.TXT_COLOR = 16777215, e.FONT_SIZE = 30, e.isChange = !1, e
        }();
        i.Toast = n, e(n.prototype, "wy.Toast")
    }(wt || (wt = {}));
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.stop = function (e) {
                t.Tween.removeTweens(e)
            }, e.removeFromParent = function (t) {
                t && t.parent && t.parent.removeChild(t)
            }, e.createMovieClip = function (e, i) {
                void 0 === i && (i = "png");
                var n = RES.getRes(e + "_json"), s = RES.getRes(e + "_" + i),
                    o = new t.MovieClipDataFactory(n, s).generateMovieClipData(e);
                return new t.MovieClip(o)
            }, e.createBitmapByName = function (e) {
                var i = new t.Bitmap, n = RES.getRes(e);
                return i.texture = n, i
            }, e.createBitmapText = function (e) {
                var i = RES.getRes(e), n = new t.BitmapText;
                return n.font = i, n
            }, e.cnEnWordCount = function (t) {
                return t.replace(/[^\x00-\xff]/g, "**").length
            }, e.center = function (t) {
                t.x -= t.anchorOffsetX, t.y -= t.anchorOffsetY, t.anchorOffsetX = t.width >> 1, t.anchorOffsetY = t.height >> 1, t.x += t.anchorOffsetX, t.y += t.anchorOffsetY
            }, e.scaleImg = function (t, e, i) {
                var n = t.texture, s = n.textureWidth / n.textureHeight;
                n.textureWidth > n.textureHeight ? (n.textureWidth > e ? (t.width = e, t.height = t.width / s) : (t.width = n.textureWidth, t.height = n.textureHeight), t.height > i && (t.height = i, t.width = s * t.height)) : (n.textureHeight > i ? (t.height = i, t.width = s * t.height) : (t.width = n.textureWidth, t.height = n.textureHeight), t.width > e && (t.width = e, t.height = t.width / s))
            }, e.upload_base64 = function (e, i, n) {
                var s = "image=" + encodeURIComponent(e), o = new t.URLLoader, a = new t.URLRequest;
                a.url = "http://wag.i-h5.cn/common/upload.php?a=upload_base64";
                var r = new t.URLVariables(s);
                a.method = t.URLRequestMethod.POST, a.data = r, o.addEventListener(t.Event.COMPLETE, i, n), o.load(a)
            }, e
        }();
        i.Tools = n, e(n.prototype, "wy.Tools")
    }(wt || (wt = {}));
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.do = function (e, i, n) {
                for (var s = 0; s < this._num; s++) {
                    var o, a = 2 * Math.PI * Math.random(), r = Math.sin(a) * this._starDis,
                        h = Math.cos(a) * this._starDis, c = e + r, l = i + h, d = e + 4 * r, u = i + 4 * h,
                        p = (this._size, this._size, Math.random(), new t.Shape), g = 5;
                    if (o = n || Tt.limit(0, 16777215), Math.random() > .5) {
                        p.graphics.lineStyle(1, o), p.graphics.moveTo(g, 0), p.graphics.beginFill(o), p.x = c, p.y = l;
                        for (var f = 1; f < 11; f++) {
                            var y = g;
                            f % 2 && (y /= 2);
                            a = 2 * Math.PI / 10 * f;
                            p.graphics.lineTo(Math.cos(a) * y, Math.sin(a) * y)
                        }
                    } else g *= 1.2, p.graphics.lineStyle(1, o), p.graphics.moveTo(0, -g), p.graphics.beginFill(o), p.x = c, p.y = l, p.graphics.drawArc(-g * Math.SQRT1_2, 0, g, -Math.PI / 2, Math.PI / 2), p.graphics.drawArc(-g * (Math.SQRT1_2 + 1), 0, Math.SQRT2 * g, Math.PI / 4, -Math.PI / 4, !0);
                    p.graphics.endFill(), t.MainContext.instance.stage.addChild(p), t.Tween.get(p).to({
                        alpha: 1,
                        x: d,
                        y: u,
                        scaleX: .1,
                        scaleY: .1,
                        rotation: 360
                    }, 500).call(this.removeStar, this, [p])
                }
            }, e.removeStar = function (e) {
                t.MainContext.instance.stage.removeChild(e)
            }, e._size = 2, e._num = 10, e._starDis = 10, e
        }();
        i.TouchEffects = n, e(n.prototype, "wy.TouchEffects")
    }(wt || (wt = {}));
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.init = function () {
                this.switchPagePopType = ""
            }, e.do = function (e) {
                var n, s, o, a;
                for (n = 0, s = e.numChildren; n < s; ++n) if (o = e.getChildAt(n), "notween" != o.name) switch (console.log("switch " + this.switchPagePopType), a = o.touchEnabled, o.touchEnabled = !1, this.switchPagePopType) {
                    case i.PopType.LEFTIN:
                        o.x -= 100, t.Tween.get(o).wait((.5 * Math.random() + .5) * i.PageSwitch.durationIn).to({x: o.x + 100}, i.PageSwitch.durationIn + 500, t.Ease.backOut).call(function (t, e) {
                            t.touchEnabled = e
                        }, this, [o, a]);
                        break;
                    case i.PopType.RIGHTIN:
                        o.x += 100, t.Tween.get(o).wait((.5 * Math.random() + .5) * i.PageSwitch.durationIn).to({x: o.x - 100}, i.PageSwitch.durationIn + 500, t.Ease.backOut).call(function (t, e) {
                            t.touchEnabled = e
                        }, this, [o, a]);
                        break;
                    case i.PopType.TOPIN:
                        o.y -= 100, t.Tween.get(o).wait((.5 * Math.random() + .5) * i.PageSwitch.durationIn).to({y: o.y + 100}, i.PageSwitch.durationIn + 500, t.Ease.backOut).call(function (t, e) {
                            t.touchEnabled = e
                        }, this, [o, a]);
                        break;
                    case i.PopType.BOTTOMIN:
                        o.y += 100, t.Tween.get(o).wait((.5 * Math.random() + .5) * i.PageSwitch.durationIn).to({y: o.y - 100}, i.PageSwitch.durationIn + 500, t.Ease.backOut).call(function (t, e) {
                            t.touchEnabled = e
                        }, this, [o, a]);
                        break;
                    default:
                        o.touchEnabled = a
                }
            }, e
        }();
        i.Tween = n, e(n.prototype, "wy.Tween")
    }(wt || (wt = {}));
    !function (t) {
        var i = function () {
            function t() {
            }

            return t.selectHandler = function (t, e, i) {
                RES.getResByUrl(e, t.compFunc, t, RES.ResourceItem.TYPE_IMAGE)
            }, t.compFunc = function (t) {
                this.thisObj ? this.func && this.func.call(this.thisObj, t) : this.func && this.func(t)
            }, t
        }();
        t.UploadImg = i, e(i.prototype, "wy.UploadImg")
    }(wt || (wt = {}));
    var vt = function () {
        function e() {
            this.SHAKE_THRESHOLD = 3e3, this.SHAKE_THRESHOLD2 = 2e3, this.last_update = 0, this.motion = null, this.shakeCount = 0, this.succCallBack = null, this.failCallBack = null
        }

        return e.getInstance = function () {
            return this.Ins || (this.Ins = new e), this.Ins
        }, e.prototype.init = function (e, i, n, s) {
            void 0 === e && (e = 3e3), void 0 === i && (i = 100), void 0 === n && (n = 12e3), void 0 === s && (s = 1e3), this.last_x = 0, this.last_y = 0, this.last_z = 0, this.isYaoing = !1, this.motion = new t.Motion, this.interval = i, this.SHAKE_THRESHOLD = e, this.SHAKE_THRESHOLD2 = s, this.diff_ratio = n
        }, e.prototype.start = function (e, i, n) {
            this.succCallBack = e, this.failCallBack = i, this.thisObj = n, this.motion.addEventListener(t.Event.CHANGE, this.deviceMotionHandler, this), this.motion.start()
        }, e.prototype.end = function () {
            this.motion.removeEventListener(t.Event.CHANGE, this.deviceMotionHandler, this), this.isYaoing = !0
        }, e.prototype.deviceMotionHandler = function (e) {
            var i = e.accelerationIncludingGravity, n = (new Date).getTime();
            if (n - this.last_update > this.interval) {
                var s = n - this.last_update;
                this.last_update = n;
                var o = i.x, a = i.y, r = i.z,
                    h = Math.abs(o + a + r - this.last_x - this.last_y - this.last_z) / s * this.diff_ratio;
                h > this.SHAKE_THRESHOLD ? (console.log("yaoing"), 0 == this.isYaoing && (e.currentTarget.removeEventListener(t.Event.CHANGE, this.deviceMotionHandler, this), this.isYaoing = !0, this.last_x = o, this.last_y = a, this.last_z = r, this.onYaoyiyaoSucc())) : h > this.SHAKE_THRESHOLD2 && (this.last_x = o, this.last_y = a, this.last_z = r, this.failCallBack && (this.thisObj ? this.failCallBack.call(this.thisObj) : this.failCallBack()))
            }
        }, e.prototype.onYaoyiyaoSucc = function () {
            this.succCallBack && (this.thisObj ? this.succCallBack.call(this.thisObj) : this.succCallBack())
        }, e
    }();
    e(vt.prototype, "Yaoyiyao");
    !function (t) {
        var i = function () {
            function t() {
            }

            return t.durationIn = 300, t.easeIn = null, t.durationOut = 300, t.easeOut = null, t
        }();
        t.PageSwitch = i, e(i.prototype, "wy.PageSwitch")
    }(wt || (wt = {}));
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.prototype.switching = function (t, e, i, n, s) {
                if (t) {
                    o = 1;
                    t.alpha = 0, this.doAnim(t, o)
                }
                if (e) {
                    var o = 1;
                    this.doAnim(e, o, i, n)
                }
            }, e.prototype.doAnim = function (e, n, s, o) {
                i.Tools.stop(e);
                var a = t.Tween.get(e);
                i.PageSwitch.easeIn ? a.to({alpha: n}, i.PageSwitch.durationIn, i.PageSwitch.easeIn).call(function () {
                    i.Tools.stop(e), s && (o ? s.call(o, e) : s())
                }) : a.to({alpha: n}, i.PageSwitch.durationIn).call(function () {
                    i.Tools.stop(e), s && (o ? s.call(o, e) : s())
                })
            }, e
        }();
        i.PageAlphaIn = n, e(n.prototype, "wy.PageAlphaIn", ["wy.IPageSwitch"])
    }(wt || (wt = {}));
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.prototype.switching = function (e, i, n, s, o) {
                if (e) {
                    a = e.y + e.anchorOffsetY;
                    e.y = t.MainContext.instance.stage.stageHeight + e.anchorOffsetY, this.doAnim(e, a)
                }
                if (i) {
                    var a = -i.height + i.anchorOffsetY;
                    this.doAnim(i, a, n, s)
                }
            }, e.prototype.doAnim = function (e, n, s, o) {
                i.Tools.stop(e);
                var a = t.Tween.get(e);
                i.PageSwitch.easeIn ? a.to({y: n}, i.PageSwitch.durationIn, i.PageSwitch.easeIn).call(function () {
                    i.Tools.stop(e), s && (o ? s.call(o, e) : s())
                }) : a.to({y: n}, i.PageSwitch.durationIn).call(function () {
                    i.Tools.stop(e), s && (o ? s.call(o, e) : s())
                })
            }, e
        }();
        i.PageBottomIn = n, e(n.prototype, "wy.PageBottomIn", ["wy.IPageSwitch"])
    }(wt || (wt = {}));
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.prototype.switching = function (e, i, n, s, o) {
                if (e) {
                    a = e.x + e.anchorOffsetX;
                    e.x = -e.width + e.anchorOffsetX, this.doAnim(e, a)
                }
                if (i) {
                    var a = t.MainContext.instance.stage.stageWidth + e.anchorOffsetX;
                    this.doAnim(i, a, n, s)
                }
            }, e.prototype.doAnim = function (e, n, s, o) {
                i.Tools.stop(e);
                var a = t.Tween.get(e);
                i.PageSwitch.easeIn ? a.to({x: n}, i.PageSwitch.durationIn, i.PageSwitch.easeIn).call(function () {
                    i.Tools.stop(e), s && (o ? s.call(o, e) : s())
                }) : a.to({x: n}, i.PageSwitch.durationIn).call(function () {
                    i.Tools.stop(e), s && (o ? s.call(o, e) : s())
                })
            }, e
        }();
        i.PageLeftIn = n, e(n.prototype, "wy.PageLeftIn", ["wy.IPageSwitch"])
    }(wt || (wt = {}));
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.prototype.switching = function (e, i, n, s, o) {
                if (e) {
                    a = e.x + e.anchorOffsetX;
                    e.x = t.MainContext.instance.stage.stageWidth + e.anchorOffsetX, this.doAnim(e, a)
                }
                if (i) {
                    var a = -i.width + i.anchorOffsetX;
                    this.doAnim(i, a, n, s)
                }
            }, e.prototype.doAnim = function (e, n, s, o) {
                i.Tools.stop(e);
                var a = t.Tween.get(e);
                i.PageSwitch.easeIn ? a.to({x: n}, i.PageSwitch.durationIn, i.PageSwitch.easeIn).call(function () {
                    i.Tools.stop(e), s && (o ? s.call(o, e) : s())
                }) : a.to({x: n}, i.PageSwitch.durationIn).call(function () {
                    i.Tools.stop(e), s && (o ? s.call(o, e) : s())
                })
            }, e
        }();
        i.PageRightIn = n, e(n.prototype, "wy.PageRightIn", ["wy.IPageSwitch"])
    }(wt || (wt = {}));
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.prototype.switching = function (t, e, n, s, o) {
                t && (i.Tools.center(t), t.scaleX = t.scaleY = .5, this.doAnim(t)), e && this.doAnim(e, n, s)
            }, e.prototype.doAnim = function (e, n, s) {
                i.Tools.stop(e);
                var o = t.Tween.get(e);
                i.PageSwitch.easeIn ? o.to({
                    scaleX: 1,
                    scaleY: 1
                }, i.PageSwitch.durationIn, i.PageSwitch.easeIn).call(function () {
                    i.Tools.stop(e), n && (s ? n.call(s, e) : n())
                }) : o.to({scaleX: 1, scaleY: 1}, i.PageSwitch.durationIn).call(function () {
                    i.Tools.stop(e), n && (s ? n.call(s, e) : n())
                })
            }, e
        }();
        i.PageScaleIn = n, e(n.prototype, "wy.PageScaleIn", ["wy.IPageSwitch"])
    }(wt || (wt = {}));
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.prototype.switching = function (t, e, n, s, o) {
                if (t) {
                    a = t.y + t.anchorOffsetY;
                    t.y = -t.height + t.anchorOffsetY, this.doAnim(t, a)
                }
                if (e) {
                    var a = i.GameInterface.stage.stageHeight + e.anchorOffsetY;
                    this.doAnim(e, a, n, s)
                }
            }, e.prototype.doAnim = function (e, n, s, o) {
                i.Tools.stop(e);
                var a = t.Tween.get(e);
                i.PageSwitch.easeIn ? a.to({y: n}, i.PageSwitch.durationIn, i.PageSwitch.easeIn).call(function () {
                    i.Tools.stop(e), s && (o ? s.call(o, e) : s())
                }) : a.to({y: n}, i.PageSwitch.durationIn).call(function () {
                    i.Tools.stop(e), s && (o ? s.call(o, e) : s())
                })
            }, e
        }();
        i.PageTopIn = n, e(n.prototype, "wy.PageTopIn", ["wy.IPageSwitch"])
    }(wt || (wt = {}));
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.prototype.switching = function (t, e, i, n, s) {
                if (e) {
                    this.doAnim(e, 0, i, n)
                }
            }, e.prototype.doAnim = function (e, n, s, o) {
                i.Tools.stop(e);
                var a = t.Tween.get(e);
                i.PageSwitch.easeIn ? a.to({alpha: n}, i.PageSwitch.durationIn, i.PageSwitch.easeIn).call(function () {
                    i.Tools.stop(e), s && (o ? s.call(o, e) : s())
                }) : a.to({alpha: n}, i.PageSwitch.durationIn).call(function () {
                    i.Tools.stop(e), s && (o ? s.call(o, e) : s())
                })
            }, e
        }();
        i.PageAlphaOut = n, e(n.prototype, "wy.PageAlphaOut", ["wy.IPageSwitch"])
    }(wt || (wt = {}));
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.prototype.switching = function (e, i, n, s, o) {
                if (i) {
                    var a = t.MainContext.instance.stage.stageHeight + i.anchorOffsetY;
                    this.doAnim(i, a, n, s)
                }
            }, e.prototype.doAnim = function (e, n, s, o) {
                i.Tools.stop(e);
                var a = t.Tween.get(e);
                i.PageSwitch.easeOut ? a.to({y: n}, i.PageSwitch.durationOut, i.PageSwitch.easeOut).call(function () {
                    i.Tools.stop(e), s && (o ? s.call(o, e) : s())
                }) : a.to({y: n}, i.PageSwitch.durationOut).call(function () {
                    i.Tools.stop(e), s && (o ? s.call(o, e) : s())
                })
            }, e
        }();
        i.PageBottomOut = n, e(n.prototype, "wy.PageBottomOut", ["wy.IPageSwitch"])
    }(wt || (wt = {}));
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.prototype.switching = function (t, e, i, n, s) {
                if (e) {
                    var o = -e.width + e.anchorOffsetY;
                    this.doAnim(e, o, i, n)
                }
            }, e.prototype.doAnim = function (e, n, s, o) {
                i.Tools.stop(e);
                var a = t.Tween.get(e);
                i.PageSwitch.easeOut ? a.to({x: n}, i.PageSwitch.durationOut, i.PageSwitch.easeOut).call(function () {
                    i.Tools.stop(e), s && (o ? s.call(o, e) : s())
                }) : a.to({x: n}, i.PageSwitch.durationOut).call(function () {
                    i.Tools.stop(e), s && (o ? s.call(o, e) : s())
                })
            }, e
        }();
        i.PageLeftOut = n, e(n.prototype, "wy.PageLeftOut", ["wy.IPageSwitch"])
    }(wt || (wt = {}));
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.prototype.switching = function (e, i, n, s, o) {
                if (i) {
                    var a = t.MainContext.instance.stage.stageWidth + i.anchorOffsetX;
                    this.doAnim(i, a, n, s)
                }
            }, e.prototype.doAnim = function (e, n, s, o) {
                i.Tools.stop(e);
                var a = t.Tween.get(e);
                i.PageSwitch.easeOut ? a.to({x: n}, i.PageSwitch.durationOut, i.PageSwitch.easeOut).call(function () {
                    i.Tools.stop(e), s && (o ? s.call(o, e) : s())
                }) : a.to({x: n}, i.PageSwitch.durationOut).call(function () {
                    i.Tools.stop(e), s && (o ? s.call(o, e) : s())
                })
            }, e
        }();
        i.PageRightOut = n, e(n.prototype, "wy.PageRightOut", ["wy.IPageSwitch"])
    }(wt || (wt = {}));
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.prototype.switching = function (t, e, i, n, s) {
                e && this.doAnim(e, i, n)
            }, e.prototype.doAnim = function (e, n, s) {
                i.Tools.stop(e);
                var o = t.Tween.get(e);
                i.PageSwitch.easeOut ? o.to({
                    scaleX: 0,
                    scaleY: 0
                }, i.PageSwitch.durationOut, i.PageSwitch.easeOut).call(function () {
                    i.Tools.stop(e), n && (s ? n.call(s, e) : n())
                }) : o.to({scaleX: 0, scaleY: 0}, i.PageSwitch.durationOut).call(function () {
                    i.Tools.stop(e), n && (s ? n.call(s, e) : n())
                })
            }, e
        }();
        i.PageScaleOut = n, e(n.prototype, "wy.PageScaleOut", ["wy.IPageSwitch"])
    }(wt || (wt = {}));
    var wt;
    !function (i) {
        var n = function () {
            function e() {
            }

            return e.prototype.switching = function (t, e, i, n, s) {
                if (t) {
                    o = -t.height + t.anchorOffsetY;
                    this.doAnim(t, o)
                }
                if (e) {
                    var o = -e.height + e.anchorOffsetY;
                    this.doAnim(e, o, i, n)
                }
            }, e.prototype.doAnim = function (e, n, s, o) {
                i.Tools.stop(e);
                var a = t.Tween.get(e);
                i.PageSwitch.easeOut ? a.to({y: n}, i.PageSwitch.durationOut, i.PageSwitch.easeOut).call(function () {
                    i.Tools.stop(e), s && (o ? s.call(o, e) : s())
                }) : a.to({y: n}, i.PageSwitch.durationOut).call(function () {
                    i.Tools.stop(e), s && (o ? s.call(o, e) : s())
                })
            }, e
        }();
        i.PageTopOut = n, e(n.prototype, "wy.PageTopOut", ["wy.IPageSwitch"])
    }(wt || (wt = {})), window.Main = bt;
});

 	