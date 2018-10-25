function e(e, t) {
    function i() {
        this.constructor = e;
    }
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    i.prototype = t.prototype, e.prototype = new i();
}

var t = window.egret;

window.generateEUI = {}, generateEUI.paths = {}, generateEUI.styles = void 0, generateEUI.skins = {}, 
generateEUI.paths["resource/skins/AlertItemSkin.exml"] = window.AlertItemSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "itemBg", "itemTxt" ], this.height = 90, this.width = 671, 
        this.elementsContent = [ this.itemBg_i(), this.itemTxt_i() ];
    }
    e(n, i);
    var a = n.prototype;
    return a.itemBg_i = function() {
        var e = new eui.Image();
        return this.itemBg = e, e.height = 70, e.horizontalCenter = 0, e.scale9Grid = new t.Rectangle(117, 17, 19, 12), 
        e.source = "shoot_atlas.bg6", e.touchEnabled = !1, e.verticalCenter = 0, e.width = 670, 
        e;
    }, a.itemTxt_i = function() {
        var e = new eui.Label();
        return this.itemTxt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, 
        e.fontFamily = "Microsoft YaHei", e.height = 60, e.horizontalCenter = 0, e.size = 30, 
        e.strokeColor = 16777215, e.text = "提示信息内容", e.textAlign = "center", e.textColor = 16777215, 
        e.touchEnabled = !1, e.verticalAlign = "middle", e.verticalCenter = 0, e.width = 669, 
        e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/common/ButtonReturnSkin.exml"] = window.ButtonReturnSkin = function(t) {
    function i() {
        t.call(this), this.skinParts = [], this.height = 59, this.width = 64, this.elementsContent = [ this._Group1_i() ], 
        this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.fanhui"), new eui.SetProperty("_Group1", "scaleX", .9), new eui.SetProperty("_Group1", "scaleY", .9) ]), new eui.State("disabled", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.ui_btn1") ]) ];
    }
    e(i, t);
    var n = i.prototype;
    return n._Group1_i = function() {
        var e = new eui.Group();
        return this._Group1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 59, 
        e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 64, e.elementsContent = [ this._Image1_i() ], 
        e;
    }, n._Image1_i = function() {
        var e = new eui.Image();
        return this._Image1 = e, e.source = "shoot_atlas.fanhui", e.x = 0, e.y = 0, e;
    }, i;
}(eui.Skin), generateEUI.paths["resource/skins/GetReliveSkin.exml"] = window.GetReliveSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "shareBtn", "closeBtn", "propTxt", "gourp" ], this.height = 480, 
        this.width = 794, this.elementsContent = [ this.gourp_i() ];
    }
    e(n, i);
    var a = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn6") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn6", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 25, e.textColor = 1974874, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), r = n.prototype;
    return r.gourp_i = function() {
        var e = new eui.Group();
        return this.gourp = e, e.height = 480, e.width = 794, e.x = 0, e.y = 0, e.elementsContent = [ this._Image1_i(), this.shareBtn_i(), this.closeBtn_i(), this.propTxt_i(), this._Label1_i(), this._Label2_i() ], 
        e;
    }, r._Image1_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 455.85, e.scale9Grid = new t.Rectangle(113, 394, 682, 11), 
        e.source = "rewardbg", e.width = 793, e.x = 0, e.y = 0, e;
    }, r.shareBtn_i = function() {
        var e = new eui.Button();
        return this.shareBtn = e, e.anchorOffsetX = 150, e.anchorOffsetY = 45, e.height = 90, 
        e.horizontalCenter = -5, e.label = "分享后领取复活卡", e.width = 300, e.y = 303, e.skinName = a, 
        e;
    }, r.closeBtn_i = function() {
        var e = new eui.Button();
        return this.closeBtn = e, e.label = "", e.right = 88, e.skinName = "ButtonReturnSkin", 
        e.top = 149, e;
    }, r.propTxt_i = function() {
        var e = new eui.Label();
        return this.propTxt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, 
        e.fontFamily = "Microsoft YaHei", e.height = 44, e.text = "2", e.textAlign = "left", 
        e.textColor = 1974874, e.verticalAlign = "middle", e.width = 142.82, e.x = 450, 
        e.y = 169.6, e;
    }, r._Label1_i = function() {
        var e = new eui.Label();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", 
        e.height = 44, e.horizontalCenter = -6.5, e.size = 30, e.text = "注：每次挑战只能使用一次复活卡", 
        e.textAlign = "center", e.textColor = 1974874, e.width = 486.64, e.y = 377.54, e;
    }, r._Label2_i = function() {
        var e = new eui.Label();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", 
        e.height = 44, e.text = "我的复活卡：", e.textAlign = "right", e.textColor = 1974874, 
        e.verticalAlign = "middle", e.width = 186.82, e.x = 254.52, e.y = 169.6, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/GProgressBarSkin.exml"] = window.GProgressBarSkin = function(t) {
    function i() {
        t.call(this), this.skinParts = [ "thumb", "labelDisplay" ], this.height = 28, this.minHeight = 28, 
        this.minWidth = 260, this.width = 220, this.elementsContent = [ this._Rect1_i(), this.thumb_i(), this.labelDisplay_i() ];
    }
    e(i, t);
    var n = i.prototype;
    return n._Rect1_i = function() {
        var e = new eui.Rect();
        return e.alpha = .5, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fillColor = 15066597, 
        e.height = 28, e.width = 220, e.x = 0, e.y = 0, e;
    }, n.thumb_i = function() {
        var e = new eui.Rect();
        return this.thumb = e, e.alpha = 1, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fillColor = 2435157, 
        e.height = 28, e.width = 220, e.x = 0, e.y = 0, e;
    }, n.labelDisplay_i = function() {
        var e = new eui.Label();
        return this.labelDisplay = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "微软雅黑", 
        e.height = 28, e.size = 24, e.stroke = 1, e.strokeColor = 0, e.text = "450/5699888", 
        e.textAlign = "center", e.textColor = 16777215, e.verticalAlign = "middle", e.width = 220, 
        e.x = 0, e.y = 0, e;
    }, i;
}(eui.Skin), generateEUI.paths["resource/skins/GuideSkin.exml"] = window.GuideSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "lineImg", "cirleImg", "handImg" ], this.height = 386, 
        this.width = 642, this.elementsContent = [ this.lineImg_i(), this.cirleImg_i(), this.handImg_i(), this._Label1_i() ];
    }
    e(n, i);
    var a = n.prototype;
    return a.lineImg_i = function() {
        var e = new eui.Image();
        return this.lineImg = e, e.anchorOffsetX = 250, e.anchorOffsetY = 0, e.scale9Grid = new t.Rectangle(49, 18, 184, 12), 
        e.scaleX = -1, e.source = "shoot_atlas.guide_line", e.x = 92, e.y = 62.03, e;
    }, a.cirleImg_i = function() {
        var e = new eui.Image();
        return this.cirleImg = e, e.anchorOffsetX = 51.5, e.anchorOffsetY = 52, e.source = "shoot_atlas.guide_circle", 
        e.x = 346.36, e.y = 86.68, e;
    }, a.handImg_i = function() {
        var e = new eui.Image();
        return this.handImg = e, e.source = "shoot_atlas.guide_hand", e.x = 92, e.y = 82, 
        e;
    }, a._Label1_i = function() {
        var e = new eui.Label();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", 
        e.height = 200.96, e.lineSpacing = 8, e.size = 40, e.stroke = 2, e.strokeColor = 1974874, 
        e.text = "玩法说明：\n    1.手指滑动射击，左右均可；\n    2.爆头敌人直接死亡；    \n    3.连续爆头3次有额外奖励；", e.textColor = 16777215, 
        e.width = 588.55, e.x = 27, e.y = 167, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/common/BtnGetReliveSkin.exml"] = window.BtnGetReliveSkin = function(t) {
    function i() {
        t.call(this), this.skinParts = [], this.height = 58, this.width = 210, this.elementsContent = [ this._Group1_i() ], 
        this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.ui_btn2"), new eui.SetProperty("_Group1", "scaleX", .9), new eui.SetProperty("_Group1", "scaleY", .9) ]), new eui.State("disabled", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.ui_btn2") ]) ];
    }
    e(i, t);
    var n = i.prototype;
    return n._Group1_i = function() {
        var e = new eui.Group();
        return this._Group1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 58, 
        e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 210, e.elementsContent = [ this._Image1_i(), this._Label1_i() ], 
        e;
    }, n._Image1_i = function() {
        var e = new eui.Image();
        return this._Image1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 0, 
        e.left = 0, e.right = 0, e.source = "shoot_atlas.ui_btn2", e.top = 0, e;
    }, n._Label1_i = function() {
        var e = new eui.Label();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, e.fontFamily = "微软雅黑", 
        e.height = 34, e.italic = !0, e.size = 30, e.text = "领取复活卡", e.textAlign = "center", 
        e.textColor = 0, e.touchEnabled = !1, e.width = 170, e.x = 21, e.y = 12, e;
    }, i;
}(eui.Skin), generateEUI.paths["resource/skins/common/ButtonBSkin.exml"] = window.ButtonBSkin = function(t) {
    function i() {
        t.call(this), this.skinParts = [ "iconImg" ], this.height = 82, this.width = 270, 
        this.elementsContent = [ this._Group1_i() ], this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.ui_btn1"), new eui.SetProperty("_Group1", "scaleX", .9), new eui.SetProperty("_Group1", "scaleY", .9) ]), new eui.State("disabled", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.ui_btn1") ]) ];
    }
    e(i, t);
    var n = i.prototype;
    return n._Group1_i = function() {
        var e = new eui.Group();
        return this._Group1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 82, 
        e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 270, e.elementsContent = [ this._Image1_i(), this.iconImg_i() ], 
        e;
    }, n._Image1_i = function() {
        var e = new eui.Image();
        return this._Image1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 0, 
        e.left = 0, e.right = 1, e.source = "shoot_atlas.ui_btn1", e.top = 0, e;
    }, n.iconImg_i = function() {
        var e = new eui.Image();
        return this.iconImg = e, e.anchorOffsetX = 0, e.horizontalCenter = 0, e.source = "shoot_atlas.guanka", 
        e.touchEnabled = !1, e.verticalCenter = 0, e;
    }, i;
}(eui.Skin), generateEUI.paths["resource/skins/common/ButtonPKSkin.exml"] = window.ButtonPKSkin = function(t) {
    function i() {
        t.call(this), this.skinParts = [ "iconImg" ], this.height = 82, this.width = 270, 
        this.elementsContent = [ this._Group1_i() ], this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.ui_btn1"), new eui.SetProperty("_Group1", "scaleX", .9), new eui.SetProperty("_Group1", "scaleY", .9) ]), new eui.State("disabled", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.ui_btn1") ]) ];
    }
    e(i, t);
    var n = i.prototype;
    return n._Group1_i = function() {
        var e = new eui.Group();
        return this._Group1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 82, 
        e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 270, e.elementsContent = [ this._Image1_i(), this.iconImg_i() ], 
        e;
    }, n._Image1_i = function() {
        var e = new eui.Image();
        return this._Image1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bottom = 0, 
        e.left = 0, e.right = 1, e.source = "shoot_atlas.ui_btn1", e.top = 0, e;
    }, n.iconImg_i = function() {
        var e = new eui.Image();
        return this.iconImg = e, e.anchorOffsetX = 0, e.horizontalCenter = 0, e.source = "shoot_atlas.pk", 
        e.touchEnabled = !1, e.verticalCenter = 0, e;
    }, i;
}(eui.Skin), generateEUI.paths["resource/skins/common/ButtonCSkin.exml"] = window.ButtonCSkin = function(t) {
    function i() {
        t.call(this), this.skinParts = [ "iconImg" ], this.height = 82, this.width = 270, 
        this.elementsContent = [ this._Group1_i() ], this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.ui_btn1"), new eui.SetProperty("_Group1", "scaleX", .9), new eui.SetProperty("_Group1", "scaleY", .9) ]), new eui.State("disabled", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.ui_btn1") ]) ];
    }
    e(i, t);
    var n = i.prototype;
    return n._Group1_i = function() {
        var e = new eui.Group();
        return this._Group1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 82, 
        e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 270, e.elementsContent = [ this._Image1_i(), this.iconImg_i() ], 
        e;
    }, n._Image1_i = function() {
        var e = new eui.Image();
        return this._Image1 = e, e.bottom = 0, e.left = 0, e.right = 0, e.source = "shoot_atlas.ui_btn1", 
        e.top = 0, e;
    }, n.iconImg_i = function() {
        var e = new eui.Image();
        return this.iconImg = e, e.anchorOffsetX = 0, e.horizontalCenter = 0, e.source = "shoot_atlas.ui_store", 
        e.touchEnabled = !1, e.verticalCenter = 1, e;
    }, i;
}(eui.Skin), generateEUI.paths["resource/skins/common/BtnWorldSkin.exml"] = window.BtnWorldSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [], this.height = 120, this.width = 120, this.elementsContent = [ this._Group1_i() ], 
        this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.protector"), new eui.SetProperty("_Label1", "strokeColor", 0), new eui.SetProperty("_Label1", "stroke", 2), new eui.SetProperty("_Group1", "scaleX", .9), new eui.SetProperty("_Group1", "scaleY", .9), new eui.SetProperty("_Group1", "y", 6), new eui.SetProperty("_Group1", "x", 6) ]), new eui.State("disabled", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.protector") ]) ];
    }
    e(n, i);
    var a = n.prototype;
    return a._Group1_i = function() {
        var e = new eui.Group();
        return this._Group1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 120, 
        e.width = 120, e.x = 0, e.y = 0, e.elementsContent = [ this._Image1_i(), this._Image2_i(), this._Label1_i() ], 
        e;
    }, a._Image1_i = function() {
        var e = new eui.Image();
        return this._Image1 = e, e.alpha = 1, e.anchorOffsetX = 0, e.anchorOffsetY = 0, 
        e.height = 120, e.scale9Grid = new t.Rectangle(69, 4, 3, 30), e.source = "shoot_atlas.protector", 
        e.width = 120, e.x = 0, e.y = 0, e;
    }, a._Image2_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 61, e.scale9Grid = new t.Rectangle(19, 11, 9, 38), 
        e.source = "shoot_atlas.a_jiangbei", e.width = 64.5, e.x = 28, e.y = 13, e;
    }, a._Label1_i = function() {
        var e = new eui.Label();
        return this._Label1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "微软雅黑", 
        e.height = 34, e.size = 26, e.stroke = 2, e.strokeColor = 0, e.text = "世界排行", e.textAlign = "center", 
        e.textColor = 3993353, e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 120, 
        e.x = 0, e.y = 80.25, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/common/BtnFriendsSkin.exml"] = window.BtnFriendsSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [], this.height = 120, this.width = 120, this.elementsContent = [ this._Group1_i() ], 
        this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.protector"), new eui.SetProperty("_Label1", "strokeColor", 0), new eui.SetProperty("_Label1", "stroke", 2), new eui.SetProperty("_Group1", "scaleX", .9), new eui.SetProperty("_Group1", "scaleY", .9), new eui.SetProperty("_Group1", "y", 6), new eui.SetProperty("_Group1", "x", 6) ]), new eui.State("disabled", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.protector") ]) ];
    }
    e(n, i);
    var a = n.prototype;
    return a._Group1_i = function() {
        var e = new eui.Group();
        return this._Group1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 120, 
        e.width = 120, e.x = 0, e.y = 0, e.elementsContent = [ this._Image1_i(), this._Image2_i(), this._Label1_i() ], 
        e;
    }, a._Image1_i = function() {
        var e = new eui.Image();
        return this._Image1 = e, e.alpha = 1, e.anchorOffsetX = 0, e.anchorOffsetY = 0, 
        e.height = 120, e.scale9Grid = new t.Rectangle(69, 4, 3, 30), e.source = "shoot_atlas.protector", 
        e.width = 120, e.x = 0, e.y = 0, e;
    }, a._Image2_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 61, e.scale9Grid = new t.Rectangle(19, 11, 9, 38), 
        e.source = "shoot_atlas.rank1", e.width = 64.5, e.x = 28, e.y = 13, e;
    }, a._Label1_i = function() {
        var e = new eui.Label();
        return this._Label1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "微软雅黑", 
        e.height = 34, e.size = 26, e.stroke = 2, e.strokeColor = 0, e.text = "好友排行", e.textAlign = "center", 
        e.textColor = 3993353, e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 120, 
        e.x = 0, e.y = 80.25, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/common/BtnSignSkin.exml"] = window.BtnSignSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "iconDisplay" ], this.height = 120, this.width = 120, 
        this.elementsContent = [ this._Group1_i() ], this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.protector"), new eui.SetProperty("_Label1", "strokeColor", 0), new eui.SetProperty("_Label1", "stroke", 2), new eui.SetProperty("_Group1", "scaleX", .9), new eui.SetProperty("_Group1", "scaleY", .9), new eui.SetProperty("_Group1", "y", 6), new eui.SetProperty("_Group1", "x", 6) ]), new eui.State("disabled", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.protector") ]) ];
    }
    e(n, i);
    var a = n.prototype;
    return a._Group1_i = function() {
        var e = new eui.Group();
        return this._Group1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 120, 
        e.width = 120, e.x = 0, e.y = 0, e.elementsContent = [ this._Image1_i(), this._Image2_i(), this._Label1_i(), this.iconDisplay_i() ], 
        e;
    }, a._Image1_i = function() {
        var e = new eui.Image();
        return this._Image1 = e, e.alpha = 1, e.anchorOffsetX = 0, e.anchorOffsetY = 0, 
        e.height = 120, e.scale9Grid = new t.Rectangle(69, 4, 3, 30), e.source = "shoot_atlas.protector", 
        e.width = 120, e.x = 0, e.y = 0, e;
    }, a._Image2_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 61, e.scale9Grid = new t.Rectangle(19, 11, 9, 38), 
        e.source = "shoot_atlas.smallProp1", e.width = 64.5, e.x = 28, e.y = 13, e;
    }, a._Label1_i = function() {
        var e = new eui.Label();
        return this._Label1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "微软雅黑", 
        e.height = 34, e.size = 26, e.stroke = 2, e.strokeColor = 0, e.text = "每日签到", e.textAlign = "center", 
        e.textColor = 3993353, e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 120, 
        e.x = 0, e.y = 80.25, e;
    }, a.iconDisplay_i = function() {
        var e = new eui.Image();
        return this.iconDisplay = e, e.right = 0, e.source = "shoot_atlas.dian", e.top = 0, 
        e.touchEnabled = !1, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/common/BtnVideoSkin.exml"] = window.BtnVideoSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "iconDisplay" ], this.height = 120, this.width = 120, 
        this.elementsContent = [ this._Group1_i() ], this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.protector"), new eui.SetProperty("_Label1", "strokeColor", 0), new eui.SetProperty("_Label1", "stroke", 2), new eui.SetProperty("_Group1", "scaleX", .9), new eui.SetProperty("_Group1", "scaleY", .9), new eui.SetProperty("_Group1", "y", 6), new eui.SetProperty("_Group1", "x", 6) ]), new eui.State("disabled", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.protector") ]) ];
    }
    e(n, i);
    var a = n.prototype;
    return a._Group1_i = function() {
        var e = new eui.Group();
        return this._Group1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 120, 
        e.width = 120, e.x = 0, e.y = 0, e.elementsContent = [ this._Image1_i(), this._Image2_i(), this._Label1_i(), this.iconDisplay_i() ], 
        e;
    }, a._Image1_i = function() {
        var e = new eui.Image();
        return this._Image1 = e, e.alpha = 1, e.anchorOffsetX = 0, e.anchorOffsetY = 0, 
        e.height = 120, e.scale9Grid = new t.Rectangle(69, 4, 3, 30), e.source = "shoot_atlas.protector", 
        e.width = 120, e.x = 0, e.y = 0, e;
    }, a._Image2_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 61, e.scale9Grid = new t.Rectangle(19, 11, 9, 38), 
        e.source = "shoot_atlas.video1", e.width = 64.5, e.x = 28, e.y = 13, e;
    }, a._Label1_i = function() {
        var e = new eui.Label();
        return this._Label1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "微软雅黑", 
        e.height = 34, e.size = 26, e.stroke = 2, e.strokeColor = 0, e.text = "视频金币", e.textAlign = "center", 
        e.textColor = 3993353, e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 120, 
        e.x = 0, e.y = 80.25, e;
    }, a.iconDisplay_i = function() {
        var e = new eui.Image();
        return this.iconDisplay = e, e.right = 0, e.source = "shoot_atlas.dian", e.top = 0, 
        e.touchEnabled = !1, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/common/BtnInviteSkin.exml"] = window.BtnInviteSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "iconDisplay" ], this.height = 120, this.width = 120, 
        this.elementsContent = [ this._Group1_i() ], this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.protector"), new eui.SetProperty("_Label1", "strokeColor", 0), new eui.SetProperty("_Label1", "stroke", 2), new eui.SetProperty("_Group1", "scaleX", .9), new eui.SetProperty("_Group1", "scaleY", .9), new eui.SetProperty("_Group1", "y", 6), new eui.SetProperty("_Group1", "x", 6) ]), new eui.State("disabled", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.protector") ]) ];
    }
    e(n, i);
    var a = n.prototype;
    return a._Group1_i = function() {
        var e = new eui.Group();
        return this._Group1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 120, 
        e.width = 120, e.x = 0, e.y = 0, e.elementsContent = [ this._Image1_i(), this._Image2_i(), this._Label1_i(), this.iconDisplay_i() ], 
        e;
    }, a._Image1_i = function() {
        var e = new eui.Image();
        return this._Image1 = e, e.alpha = 1, e.anchorOffsetX = 0, e.anchorOffsetY = 0, 
        e.height = 120, e.scale9Grid = new t.Rectangle(69, 4, 3, 30), e.source = "shoot_atlas.protector", 
        e.width = 120, e.x = 0, e.y = 0, e;
    }, a._Image2_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 61, e.scale9Grid = new t.Rectangle(19, 11, 9, 38), 
        e.source = "shoot_atlas.guide_hand", e.width = 64.5, e.x = 28, e.y = 13, e;
    }, a._Label1_i = function() {
        var e = new eui.Label();
        return this._Label1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "微软雅黑", 
        e.height = 34, e.size = 26, e.stroke = 2, e.strokeColor = 0, e.text = "邀请好友", e.textAlign = "center", 
        e.textColor = 3993353, e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 120, 
        e.x = 0, e.y = 80.25, e;
    }, a.iconDisplay_i = function() {
        var e = new eui.Image();
        return this.iconDisplay = e, e.right = 0, e.source = "shoot_atlas.dian", e.top = 0, 
        e.touchEnabled = !1, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/common/BtnHongBaoSkin.exml"] = window.BtnHongBaoSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "iconDisplay" ], this.height = 120, this.width = 120, 
        this.elementsContent = [ this._Group1_i() ], this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.protector"), new eui.SetProperty("_Label1", "strokeColor", 0), new eui.SetProperty("_Label1", "stroke", 2), new eui.SetProperty("_Group1", "scaleX", .9), new eui.SetProperty("_Group1", "scaleY", .9), new eui.SetProperty("_Group1", "y", 6), new eui.SetProperty("_Group1", "x", 6) ]), new eui.State("disabled", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.protector") ]) ];
    }
    e(n, i);
    var a = n.prototype;
    return a._Group1_i = function() {
        var e = new eui.Group();
        return this._Group1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 120, 
        e.width = 120, e.x = 0, e.y = 0, e.elementsContent = [ this._Image1_i(), this._Image2_i(), this._Label1_i(), this.iconDisplay_i() ], 
        e;
    }, a._Image1_i = function() {
        var e = new eui.Image();
        return this._Image1 = e, e.alpha = 1, e.anchorOffsetX = 0, e.anchorOffsetY = 0, 
        e.height = 120, e.scale9Grid = new t.Rectangle(20, 17, 12, 7), e.source = "shoot_atlas.protector", 
        e.width = 120, e.x = 0, e.y = 0, e;
    }, a._Image2_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 61, e.scale9Grid = new t.Rectangle(19, 11, 9, 38), 
        e.source = "shoot_atlas.hongbao", e.width = 64.5, e.x = 28, e.y = 13, e;
    }, a._Label1_i = function() {
        var e = new eui.Label();
        return this._Label1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "微软雅黑", 
        e.height = 34, e.size = 26, e.stroke = 2, e.strokeColor = 0, e.text = "红包", e.textAlign = "center", 
        e.textColor = 3993353, e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 120, 
        e.x = 0, e.y = 80.25, e;
    }, a.iconDisplay_i = function() {
        var e = new eui.Image();
        return this.iconDisplay = e, e.right = 0, e.source = "shoot_atlas.dian", e.top = 0, 
        e.touchEnabled = !1, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/common/BtnShareMainSkin.exml"] = window.BtnShareMainSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [], this.height = 98, this.width = 76, this.elementsContent = [ this._Group1_i() ], 
        this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.a_share"), new eui.SetProperty("_Group1", "scaleX", .9), new eui.SetProperty("_Group1", "scaleY", .9), new eui.SetProperty("_Group1", "y", 4), new eui.SetProperty("_Group1", "x", 12) ]), new eui.State("disabled", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.a_share") ]) ];
    }
    e(n, i);
    var a = n.prototype;
    return a._Group1_i = function() {
        var e = new eui.Group();
        return this._Group1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 97, 
        e.width = 76, e.x = 0, e.y = 0, e.elementsContent = [ this._Image1_i() ], e;
    }, a._Image1_i = function() {
        var e = new eui.Image();
        return this._Image1 = e, e.alpha = 1, e.anchorOffsetX = 0, e.anchorOffsetY = 0, 
        e.height = 76, e.horizontalCenter = 0, e.scale9Grid = new t.Rectangle(69, 4, 3, 30), 
        e.source = "shoot_atlas.sharebtnbg1", e.width = 76, e.y = 0, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/HomeUISkin.exml"] = window.HomeUISkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "testBg", "getReliveBtn", "leftC", "stimulusModeBtn", "pkModeBtn", "shopBtn", "rightC", "goldTxt", "leftTopC", "soundBtn", "worldRankBtn", "friendsRankBtn", "signBtn", "videoAwardBtn", "inviteBtn", "hongbaoBtn", "testBtn", "shareBtn", "moreBtn", "jinduTxt" ], 
        this.height = 750, this.width = 1334, this.elementsContent = [ this.testBg_i(), this.leftC_i(), this.rightC_i(), this.leftTopC_i(), this.soundBtn_i(), this._Group1_i(), this.testBtn_i(), this.shareBtn_i(), this.moreBtn_i(), this.jinduTxt_i() ];
    }
    e(n, i);
    var a = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "sound_close") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "sound_open", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), r = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.ui_btn1") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.ui_btn1", 
            e.percentWidth = 100, e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.horizontalCenter = 0, e.textColor = 0, e.verticalCenter = 0, 
            e;
        }, i;
    }(eui.Skin), o = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.moreBtn1") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.moreBtn1", 
            e.percentWidth = 100, e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), s = n.prototype;
    return s.testBg_i = function() {
        var e = new eui.Image();
        return this.testBg = e, e.height = 750, e.source = "mainBg", e.visible = !1, e.width = 1334, 
        e.x = 0, e.y = 0, e;
    }, s.leftC_i = function() {
        var e = new eui.Group();
        return this.leftC = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 181, 
        e.visible = !1, e.width = 220, e.x = 326.62, e.y = 451.5, e.layout = this._VerticalLayout1_i(), 
        e.elementsContent = [ this.getReliveBtn_i() ], e;
    }, s._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout();
        return e.gap = 16, e;
    }, s.getReliveBtn_i = function() {
        var e = new eui.Button();
        return this.getReliveBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.label = "领取复活卡", 
        e.scaleX = 1, e.scaleY = 1, e.skinName = "BtnGetReliveSkin", e.x = 524, e.y = 27, 
        e;
    }, s.rightC_i = function() {
        var e = new eui.Group();
        return this.rightC = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 416.54, 
        e.right = 131, e.top = 123, e.width = 449.88, e.elementsContent = [ this.stimulusModeBtn_i(), this.pkModeBtn_i(), this.shopBtn_i() ], 
        e;
    }, s.stimulusModeBtn_i = function() {
        var e = new eui.Button();
        return this.stimulusModeBtn = e, e.anchorOffsetX = 135, e.anchorOffsetY = 37, e.label = "", 
        e.scaleX = 1, e.scaleY = 1, e.skinName = "ButtonBSkin", e.x = 250, e.y = 63, e;
    }, s.pkModeBtn_i = function() {
        var e = new eui.Button();
        return this.pkModeBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.label = "", 
        e.scaleX = 1, e.scaleY = 1, e.skinName = "ButtonPKSkin", e.x = 115, e.y = 246, e;
    }, s.shopBtn_i = function() {
        var e = new eui.Button();
        return this.shopBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.label = "", 
        e.scaleX = 1, e.scaleY = 1, e.skinName = "ButtonCSkin", e.x = 115, e.y = 134, e;
    }, s.leftTopC_i = function() {
        var e = new eui.Group();
        return this.leftTopC = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 76, 
        e.width = 316.64, e.x = 876.36, e.y = 20, e.elementsContent = [ this._Image1_i(), this.goldTxt_i(), this._Image2_i() ], 
        e;
    }, s._Image1_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.height = 53, e.scale9Grid = new t.Rectangle(32, 6, 194, 42), 
        e.source = "shoot_atlas.bg6", e.width = 194.62, e.x = 0, e.y = 11.04, e;
    }, s.goldTxt_i = function() {
        var e = new eui.Label();
        return this.goldTxt = e, e.anchorOffsetX = 0, e.fontFamily = "Microsoft YaHei", 
        e.multiline = !1, e.scaleX = 1, e.scaleY = 1, e.stroke = 1, e.text = "99990", e.textAlign = "left", 
        e.touchEnabled = !1, e.width = 100, e.x = 70.56, e.y = 21.06, e;
    }, s._Image2_i = function() {
        var e = new eui.Image();
        return e.height = 42, e.scaleX = 1, e.scaleY = 1, e.source = "shoot_atlas.smallProp1", 
        e.width = 40, e.x = 21, e.y = 15.25, e;
    }, s.soundBtn_i = function() {
        var e = new eui.ToggleSwitch();
        return this.soundBtn = e, e.label = "", e.scaleX = 1, e.scaleY = 1, e.visible = !1, 
        e.x = 4, e.y = 4, e.skinName = a, e;
    }, s._Group1_i = function() {
        var e = new eui.Group();
        return e.scaleX = 1, e.scaleY = 1, e.x = 10, e.y = 10, e.layout = this._HorizontalLayout1_i(), 
        e.elementsContent = [ this.worldRankBtn_i(), this.friendsRankBtn_i(), this.signBtn_i(), this.videoAwardBtn_i(), this.inviteBtn_i(), this.hongbaoBtn_i() ], 
        e;
    }, s._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout();
        return e.gap = 16, e;
    }, s.worldRankBtn_i = function() {
        var e = new eui.Button();
        return this.worldRankBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.label = "", 
        e.scaleX = 1, e.scaleY = 1, e.skinName = "BtnWorldSkin", e.x = 0, e.y = 387.5, e;
    }, s.friendsRankBtn_i = function() {
        var e = new eui.Button();
        return this.friendsRankBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.label = "", 
        e.scaleX = 1, e.scaleY = 1, e.skinName = "BtnFriendsSkin", e.x = 10, e.y = 397.5, 
        e;
    }, s.signBtn_i = function() {
        var e = new eui.Button();
        return this.signBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.label = "", 
        e.scaleX = 1, e.scaleY = 1, e.skinName = "BtnSignSkin", e.x = 0, e.y = 258, e;
    }, s.videoAwardBtn_i = function() {
        var e = new eui.Button();
        return this.videoAwardBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.label = "", 
        e.scaleX = 1, e.scaleY = 1, e.skinName = "BtnVideoSkin", e.x = 0, e.y = 0, e;
    }, s.inviteBtn_i = function() {
        var e = new eui.Button();
        return this.inviteBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.label = "", 
        e.scaleX = 1, e.scaleY = 1, e.skinName = "BtnInviteSkin", e.x = 10, e.y = 10, e;
    }, s.hongbaoBtn_i = function() {
        var e = new eui.Button();
        return this.hongbaoBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.label = "", 
        e.scaleX = 1, e.scaleY = 1, e.skinName = "BtnHongBaoSkin", e.x = 0, e.y = 129, e;
    }, s.testBtn_i = function() {
        var e = new eui.Button();
        return this.testBtn = e, e.label = "清理红包值", e.visible = !1, e.x = 946.92, e.y = 569, 
        e.skinName = r, e;
    }, s.shareBtn_i = function() {
        var e = new eui.Button();
        return this.shareBtn = e, e.label = "", e.skinName = "BtnShareMainSkin", e.visible = !1, 
        e.x = 10, e.y = 149, e;
    }, s.moreBtn_i = function() {
        var e = new eui.Button();
        return this.moreBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 74, 
        e.label = "", e.width = 74, e.x = -1, e.y = 642.04, e.skinName = o, e;
    }, s.jinduTxt_i = function() {
        var e = new eui.Label();
        return this.jinduTxt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "微软雅黑", 
        e.height = 34, e.size = 30, e.stroke = 2, e.strokeColor = 0, e.text = "0/3000", 
        e.textAlign = "center", e.textColor = 16776960, e.touchEnabled = !1, e.verticalAlign = "middle", 
        e.width = 198, e.x = 380, e.y = 131, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/HpBar1.exml"] = window.HpBar1 = function(t) {
    function i() {
        t.call(this), this.skinParts = [ "track", "thumb", "labelDisplay" ], this.height = 10, 
        this.width = 65, this.elementsContent = [ this.track_i(), this.thumb_i(), this.labelDisplay_i() ];
    }
    e(i, t);
    var n = i.prototype;
    return n.track_i = function() {
        var e = new eui.Image();
        return this.track = e, e.source = "shoot_atlas.hpBg", e.x = 0, e.y = 0, e;
    }, n.thumb_i = function() {
        var e = new eui.Image();
        return this.thumb = e, e.source = "shoot_atlas.hpImg1", e.x = 0, e.y = 2, e;
    }, n.labelDisplay_i = function() {
        var e = new eui.Label();
        return this.labelDisplay = e, e.height = 10, e.size = 10, e.text = "100", e.textAlign = "center", 
        e.width = 65, e.x = 0, e.y = 0, e;
    }, i;
}(eui.Skin), generateEUI.paths["resource/skins/HpBar2.exml"] = window.HpBar2 = function(t) {
    function i() {
        t.call(this), this.skinParts = [ "track", "thumb", "labelDisplay" ], this.height = 10, 
        this.width = 65, this.elementsContent = [ this.track_i(), this.thumb_i(), this.labelDisplay_i() ];
    }
    e(i, t);
    var n = i.prototype;
    return n.track_i = function() {
        var e = new eui.Image();
        return this.track = e, e.source = "shoot_atlas.hpBg", e.x = 0, e.y = 0, e;
    }, n.thumb_i = function() {
        var e = new eui.Image();
        return this.thumb = e, e.source = "shoot_atlas.hpImg2", e.x = 0, e.y = 2, e;
    }, n.labelDisplay_i = function() {
        var e = new eui.Label();
        return this.labelDisplay = e, e.height = 10, e.size = 10, e.text = "100", e.textAlign = "center", 
        e.width = 65, e.x = 0, e.y = 0, e;
    }, i;
}(eui.Skin), generateEUI.paths["resource/skins/InviteEndItemSkin.exml"] = window.InviteEndItemSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "head", "faguangImg", "xuhao", "desc1", "desc2", "wenhao", "inviteBtn", "awardBtn", "comp" ], 
        this.height = 120, this.width = 1010, this.elementsContent = [ this._Image1_i(), this._Image2_i(), this.head_i(), this._Rect1_i(), this.faguangImg_i(), this._Image3_i(), this._Rect2_i(), this._Image4_i(), this.xuhao_i(), this.desc1_i(), this.desc2_i(), this.wenhao_i(), this.inviteBtn_i(), this.awardBtn_i(), this.comp_i() ];
    }
    e(n, i);
    var a = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn4") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn4", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), r = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn3") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn3", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), o = n.prototype;
    return o._Image1_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 120, e.scale9Grid = new t.Rectangle(42, 5, 36, 36), 
        e.source = "shoot_atlas.bg3", e.width = 1e3, e.x = 0, e.y = 0, e;
    }, o._Image2_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 87, e.source = "shoot_atlas.headBg", 
        e.width = 87, e.x = 9, e.y = 16, e;
    }, o.head_i = function() {
        var e = new eui.Image();
        return this.head = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 82, e.source = "", 
        e.width = 82, e.x = 12, e.y = 19, e;
    }, o._Rect1_i = function() {
        var e = new eui.Rect();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.ellipseHeight = 50, e.ellipseWidth = 50, 
        e.fillAlpha = .2, e.fillColor = 16777215, e.height = 104, e.width = 269.57, e.x = 526.35, 
        e.y = 8, e;
    }, o.faguangImg_i = function() {
        var e = new eui.Image();
        return this.faguangImg = e, e.anchorOffsetX = 83.73, e.anchorOffsetY = 59.6, e.height = 115, 
        e.source = "shoot_atlas.faguang", e.width = 170, e.x = 655.56, e.y = 60.09, e;
    }, o._Image3_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 264, e.source = "shoot_atlas.bow_stand8", 
        e.touchEnabled = !1, e.width = 264, e.x = 548.16, e.y = -82, e;
    }, o._Rect2_i = function() {
        var e = new eui.Rect();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.ellipseHeight = 50, e.ellipseWidth = 50, 
        e.fillAlpha = .2, e.fillColor = 16777215, e.height = 45, e.strokeAlpha = 1, e.strokeColor = 12040119, 
        e.strokeWeight = 1, e.width = 45, e.x = 116.19, e.y = 14.98, e;
    }, o._Image4_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 121.3, e.rotation = 334.14, 
        e.source = "shoot_atlas.bow_stand8", e.touchEnabled = !1, e.width = 117.9, e.x = 61.14, 
        e.y = 1.86, e;
    }, o.xuhao_i = function() {
        var e = new eui.Label();
        return this.xuhao = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 88, 
        e.size = 30, e.text = "15", e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", 
        e.width = 49, e.x = 368, e.y = 13, e;
    }, o.desc1_i = function() {
        var e = new eui.Label();
        return this.desc1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 36, 
        e.size = 26, e.text = "武器 击杀分+10", e.textAlign = "left", e.textColor = 16777215, 
        e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 469, e.x = 171, e.y = 19, 
        e;
    }, o.desc2_i = function() {
        var e = new eui.Label();
        return this.desc2 = e, e.anchorOffsetX = 0, e.size = 26, e.text = "邀请1人(15/15)", 
        e.textAlign = "left", e.textColor = 3014400, e.touchEnabled = !1, e.width = 262, 
        e.x = 117, e.y = 70.89, e;
    }, o.wenhao_i = function() {
        var e = new eui.Label();
        return this.wenhao = e, e.size = 70, e.text = "+", e.textColor = 11053224, e.touchEnabled = !1, 
        e.x = 32, e.y = 25, e;
    }, o.inviteBtn_i = function() {
        var e = new eui.Button();
        return this.inviteBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 74, 
        e.label = "邀请", e.width = 160, e.x = 825.59, e.y = 22.98, e.skinName = a, e;
    }, o.awardBtn_i = function() {
        var e = new eui.Button();
        return this.awardBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 74, 
        e.label = "领取", e.width = 160, e.x = 825.59, e.y = 22.98, e.skinName = r, e;
    }, o.comp_i = function() {
        var e = new eui.Label();
        return this.comp = e, e.bold = !0, e.rotation = 352.31, e.text = "已领取", e.textColor = 16711680, 
        e.touchEnabled = !1, e.x = 858, e.y = 50.27, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/InviteItemSkin.exml"] = window.InviteItemSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "head", "xuhao", "desc1", "desc2", "wenhao", "inviteBtn", "awardBtn", "comp" ], 
        this.height = 120, this.width = 495, this.elementsContent = [ this._Image1_i(), this._Image2_i(), this.head_i(), this._Image3_i(), this.xuhao_i(), this.desc1_i(), this.desc2_i(), this.wenhao_i(), this.inviteBtn_i(), this.awardBtn_i(), this.comp_i() ];
    }
    e(n, i);
    var a = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn4") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn4", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), r = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn3") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn3", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), o = n.prototype;
    return o._Image1_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 120, e.scale9Grid = new t.Rectangle(36, 5, 46, 36), 
        e.source = "shoot_atlas.bg3", e.width = 495, e.x = 0, e.y = 0, e;
    }, o._Image2_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 87, e.source = "shoot_atlas.headBg", 
        e.width = 87, e.x = 10, e.y = 15, e;
    }, o.head_i = function() {
        var e = new eui.Image();
        return this.head = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 82, e.source = "", 
        e.width = 82, e.x = 13, e.y = 18, e;
    }, o._Image3_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 45.76, e.source = "shoot_atlas.smallProp1", 
        e.width = 44, e.x = 113, e.y = 13, e;
    }, o.xuhao_i = function() {
        var e = new eui.Label();
        return this.xuhao = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 88, 
        e.size = 30, e.text = "15", e.textAlign = "center", e.touchEnabled = !1, e.verticalAlign = "middle", 
        e.width = 45, e.x = 262, e.y = 14, e;
    }, o.desc1_i = function() {
        var e = new eui.Label();
        return this.desc1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 35, 
        e.size = 26, e.text = "100", e.textAlign = "left", e.textColor = 16777215, e.touchEnabled = !1, 
        e.verticalAlign = "middle", e.width = 210, e.x = 169, e.y = 19, e;
    }, o.desc2_i = function() {
        var e = new eui.Label();
        return this.desc2 = e, e.anchorOffsetX = 0, e.size = 26, e.text = "邀请1人(0/1)", e.textAlign = "left", 
        e.textColor = 3014400, e.touchEnabled = !1, e.width = 262, e.x = 114, e.y = 69.89, 
        e;
    }, o.wenhao_i = function() {
        var e = new eui.Label();
        return this.wenhao = e, e.size = 70, e.text = "+", e.textColor = 11053224, e.touchEnabled = !1, 
        e.x = 32.5, e.y = 24, e;
    }, o.inviteBtn_i = function() {
        var e = new eui.Button();
        return this.inviteBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 74, 
        e.label = "邀请", e.width = 155, e.x = 329, e.y = 21, e.skinName = a, e;
    }, o.awardBtn_i = function() {
        var e = new eui.Button();
        return this.awardBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 74, 
        e.label = "领取", e.width = 155, e.x = 329, e.y = 21, e.skinName = r, e;
    }, o.comp_i = function() {
        var e = new eui.Label();
        return this.comp = e, e.bold = !0, e.rotation = 352.31, e.text = "已领取", e.textColor = 16711680, 
        e.touchEnabled = !1, e.x = 355, e.y = 50.16, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/InviteViewSkin.exml"] = window.InviteViewSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "winBg", "goldTxt", "inviteTxt", "inviteNumTxt", "shuomingTxt", "titleName", "closeBtn", "inviteBtn", "cellList1", "cellScroller1", "cellList0", "win" ], 
        this.height = 550, this.width = 1046, this.elementsContent = [ this.win_i() ];
    }
    e(n, i);
    var a = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.close") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.close", 
            e.percentWidth = 100, e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), r = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn6") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn6", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 30, e.text = "", e.textColor = 16711680, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), o = n.prototype;
    return o.win_i = function() {
        var e = new eui.Group();
        return this.win = e, e.anchorOffsetX = 562.95, e.anchorOffsetY = 282, e.height = 550, 
        e.width = 1046, e.x = 562.95, e.y = 282, e.elementsContent = [ this.winBg_i(), this.goldTxt_i(), this._Image1_i(), this.inviteTxt_i(), this.inviteNumTxt_i(), this.shuomingTxt_i(), this._Image2_i(), this.titleName_i(), this.closeBtn_i(), this.inviteBtn_i(), this.cellScroller1_i(), this.cellList0_i() ], 
        e;
    }, o.winBg_i = function() {
        var e = new eui.Image();
        return this.winBg = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 504.7, 
        e.scale9Grid = new t.Rectangle(15, 7, 92, 46), e.source = "shoot_atlas.bg4", e.width = 1028, 
        e.x = 2, e.y = 24, e;
    }, o.goldTxt_i = function() {
        var e = new eui.Label();
        return this.goldTxt = e, e.anchorOffsetX = 0, e.fontFamily = "Microsoft YaHei", 
        e.multiline = !1, e.stroke = 1, e.text = "1000", e.textAlign = "left", e.textColor = 16777215, 
        e.touchEnabled = !1, e.width = 200, e.x = 86.92, e.y = 80.5, e;
    }, o._Image1_i = function() {
        var e = new eui.Image();
        return e.height = 45, e.source = "shoot_atlas.smallProp1", e.width = 43, e.x = 24.92, 
        e.y = 72.5, e;
    }, o.inviteTxt_i = function() {
        var e = new eui.Label();
        return this.inviteTxt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "Microsoft YaHei", 
        e.height = 39, e.text = "金币进度：10000/10000", e.textAlign = "right", e.textColor = 16777215, 
        e.touchEnabled = !1, e.width = 464, e.x = 540, e.y = 79, e;
    }, o.inviteNumTxt_i = function() {
        var e = new eui.Label();
        return this.inviteNumTxt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "Microsoft YaHei", 
        e.height = 43, e.size = 30, e.text = "邀请进度：0/6", e.textAlign = "right", e.textColor = 16777215, 
        e.touchEnabled = !1, e.width = 270, e.x = 370, e.y = 79, e;
    }, o.shuomingTxt_i = function() {
        var e = new eui.Label();
        return this.shuomingTxt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "Microsoft YaHei", 
        e.height = 55, e.size = 30, e.text = "(完成邀请进度可获得武器，被邀请人启动游戏才能得到奖励。)", e.textAlign = "center", 
        e.textColor = 13027014, e.touchEnabled = !1, e.width = 1044, e.x = 2, e.y = 536, 
        e;
    }, o._Image2_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.scale9Grid = new t.Rectangle(81, 2, 10, 45), e.source = "shoot_atlas.title", 
        e.width = 307, e.x = 370, e.y = 0, e;
    }, o.titleName_i = function() {
        var e = new eui.Label();
        return this.titleName = e, e.anchorOffsetY = 0, e.fontFamily = "Microsoft YaHei", 
        e.height = 42, e.size = 30, e.text = "邀请好友", e.textAlign = "center", e.verticalAlign = "middle", 
        e.width = 223, e.x = 412, e.y = 2.56, e;
    }, o.closeBtn_i = function() {
        var e = new eui.Button();
        return this.closeBtn = e, e.label = "", e.x = 978, e.y = 4.5, e.skinName = a, e;
    }, o.inviteBtn_i = function() {
        var e = new eui.Button();
        return this.inviteBtn = e, e.anchorOffsetX = 94.25, e.anchorOffsetY = 31.85, e.height = 63.69, 
        e.horizontalCenter = -456.5, e.label = "继续邀请", e.width = 188.5, e.y = -19.34, e.skinName = r, 
        e;
    }, o.cellScroller1_i = function() {
        var e = new eui.Scroller();
        return this.cellScroller1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 246, 
        e.rotation = 0, e.width = 1010, e.x = 16, e.y = 128, e.viewport = this.cellList1_i(), 
        e;
    }, o.cellList1_i = function() {
        var e = new eui.Group();
        return this.cellList1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 246, 
        e.width = 1010, e.x = 40, e.y = 142, e.layout = this._TileLayout1_i(), e;
    }, o._TileLayout1_i = function() {
        return new eui.TileLayout();
    }, o.cellList0_i = function() {
        var e = new eui.Group();
        return this.cellList0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 122, 
        e.width = 1010, e.x = 16, e.y = 382, e.layout = this._TileLayout2_i(), e;
    }, o._TileLayout2_i = function() {
        return new eui.TileLayout();
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/common/ButtonASkin.exml"] = window.ButtonASkin = function(t) {
    function i() {
        t.call(this), this.skinParts = [ "labelDisplay" ], this.height = 110, this.width = 120, 
        this.elementsContent = [ this._Group1_i() ], this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.buffBg"), new eui.SetProperty("labelDisplay", "textColor", 16772240), new eui.SetProperty("_Group1", "scaleX", .9), new eui.SetProperty("_Group1", "scaleY", .9) ]), new eui.State("disabled", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.buffBg"), new eui.SetProperty("labelDisplay", "textColor", 11053224) ]) ];
    }
    e(i, t);
    var n = i.prototype;
    return n._Group1_i = function() {
        var e = new eui.Group();
        return this._Group1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 110, 
        e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 120, e.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
        e;
    }, n._Image1_i = function() {
        var e = new eui.Image();
        return this._Image1 = e, e.bottom = 0, e.left = 0, e.right = 0, e.source = "shoot_atlas.buffBg", 
        e.top = 0, e;
    }, n.labelDisplay_i = function() {
        var e = new eui.Label();
        return this.labelDisplay = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "微软雅黑", 
        e.height = 28, e.horizontalCenter = 0, e.size = 24, e.stroke = 1, e.text = "1000", 
        e.textAlign = "center", e.textColor = 1375234, e.verticalAlign = "middle", e.width = 120, 
        e.y = 82, e;
    }, i;
}(eui.Skin), generateEUI.paths["resource/skins/MainUISkin.exml"] = window.MainUI = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "expBar", "levelbg1", "levelbg2", "currLevel", "nextLevel", "scoreTxt", "addScoreTxt", "duoshanBtn", "propNameTxt", "downC", "returnBtn", "rightBottomC", "goldTxt", "protectTxt", "soundBtn", "leftTopC", "moreBtn" ], 
        this.height = 750, this.width = 1334, this.elementsContent = [ this._Group1_i(), this.downC_i(), this.rightBottomC_i(), this.leftTopC_i(), this.moreBtn_i() ];
    }
    e(n, i);
    var a = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "sound_close") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "sound_open", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), r = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.moreBtn2") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.moreBtn2", 
            e.percentWidth = 100, e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), o = n.prototype;
    return o._Group1_i = function() {
        var e = new eui.Group();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 297, e.width = 556, 
        e.x = 385, e.y = 0, e.elementsContent = [ this.expBar_i(), this.levelbg1_i(), this.levelbg2_i(), this.currLevel_i(), this.nextLevel_i(), this.scoreTxt_i(), this.addScoreTxt_i() ], 
        e;
    }, o.expBar_i = function() {
        var e = new eui.ProgressBar();
        return this.expBar = e, e.skinName = "GProgressBarSkin", e.x = 164, e.y = 27, e;
    }, o.levelbg1_i = function() {
        var e = new eui.Image();
        return this.levelbg1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 49, 
        e.source = "shoot_atlas.levelbg3", e.width = 49, e.x = 121, e.y = 16, e;
    }, o.levelbg2_i = function() {
        var e = new eui.Image();
        return this.levelbg2 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 49, 
        e.source = "shoot_atlas.levelbg2", e.width = 49, e.x = 379, e.y = 16, e;
    }, o.currLevel_i = function() {
        var e = new eui.Label();
        return this.currLevel = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "Arial", 
        e.height = 48, e.multiline = !1, e.stroke = 1, e.text = "99", e.textAlign = "center", 
        e.textColor = 16777215, e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 64, 
        e.x = 114, e.y = 18, e;
    }, o.nextLevel_i = function() {
        var e = new eui.Label();
        return this.nextLevel = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "Arial", 
        e.height = 48, e.multiline = !1, e.stroke = 1, e.text = "99", e.textAlign = "center", 
        e.textColor = 16777215, e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 64, 
        e.x = 372, e.y = 18, e;
    }, o.scoreTxt_i = function() {
        var e = new eui.Label();
        return this.scoreTxt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "Microsoft YaHei", 
        e.height = 62, e.multiline = !1, e.size = 46, e.stroke = 2, e.text = "1000", e.textAlign = "center", 
        e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 552, e.x = 3, e.y = 66.09, 
        e;
    }, o.addScoreTxt_i = function() {
        var e = new eui.Label();
        return this.addScoreTxt = e, e.anchorOffsetX = 140, e.anchorOffsetY = 31, e.height = 62, 
        e.multiline = !1, e.size = 46, e.stroke = 2, e.text = "+1", e.textAlign = "center", 
        e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 280, e.x = 280, e.y = 246, 
        e;
    }, o.downC_i = function() {
        var e = new eui.Group();
        return this.downC = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 145, 
        e.horizontalCenter = 0, e.width = 120, e.y = 604.21, e.elementsContent = [ this.duoshanBtn_i(), this.propNameTxt_i() ], 
        e;
    }, o.duoshanBtn_i = function() {
        var e = new eui.Button();
        return this.duoshanBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.label = "1000", 
        e.skinName = "ButtonASkin", e.top = 0, e.x = 0, e;
    }, o.propNameTxt_i = function() {
        var e = new eui.Label();
        return this.propNameTxt = e, e.anchorOffsetX = 0, e.horizontalCenter = 0, e.scaleX = 1, 
        e.scaleY = 1, e.size = 25, e.stroke = 2, e.text = "点击躲闪", e.textAlign = "center", 
        e.textColor = 16777215, e.touchEnabled = !1, e.width = 120, e.y = 114.96, e;
    }, o.rightBottomC_i = function() {
        var e = new eui.Group();
        return this.rightBottomC = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 125, 
        e.width = 164.33, e.x = 1169.67, e.y = 625, e.elementsContent = [ this.returnBtn_i() ], 
        e;
    }, o.returnBtn_i = function() {
        var e = new eui.Button();
        return this.returnBtn = e, e.bottom = 20, e.label = "", e.right = 20, e.skinName = "ButtonReturnSkin", 
        e;
    }, o.leftTopC_i = function() {
        var e = new eui.Group();
        return this.leftTopC = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 76, 
        e.width = 325, e.x = 4, e.y = 0, e.elementsContent = [ this._Image1_i(), this.goldTxt_i(), this.protectTxt_i(), this._Image2_i(), this._Image3_i(), this.soundBtn_i() ], 
        e;
    }, o._Image1_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.height = 53, e.scale9Grid = new t.Rectangle(32, 6, 194, 42), 
        e.source = "shoot_atlas.bg6", e.width = 318.62, e.x = 2.89, e.y = 14, e;
    }, o.goldTxt_i = function() {
        var e = new eui.Label();
        return this.goldTxt = e, e.anchorOffsetX = 0, e.fontFamily = "Microsoft YaHei", 
        e.multiline = !1, e.scaleX = 1, e.scaleY = 1, e.stroke = 1, e.text = "99990", e.textAlign = "left", 
        e.touchEnabled = !1, e.width = 100, e.x = 52.56, e.y = 25.06, e;
    }, o.protectTxt_i = function() {
        var e = new eui.Label();
        return this.protectTxt = e, e.anchorOffsetX = 0, e.fontFamily = "Microsoft YaHei", 
        e.multiline = !1, e.scaleX = 1, e.scaleY = 1, e.stroke = 1, e.text = "100", e.textAlign = "left", 
        e.touchEnabled = !1, e.width = 60, e.x = 188.56, e.y = 25.06, e;
    }, o._Image2_i = function() {
        var e = new eui.Image();
        return e.height = 42, e.scaleX = 1, e.scaleY = 1, e.source = "shoot_atlas.smallProp1", 
        e.width = 40, e.x = 9, e.y = 17.25, e;
    }, o._Image3_i = function() {
        var e = new eui.Image();
        return e.height = 40, e.scaleX = 1, e.scaleY = 1, e.source = "shoot_atlas.smallProp2", 
        e.width = 40, e.x = 145.71, e.y = 17.25, e;
    }, o.soundBtn_i = function() {
        var e = new eui.ToggleSwitch();
        return this.soundBtn = e, e.label = "", e.scaleX = 1, e.scaleY = 1, e.x = 246.56, 
        e.y = -1.75, e.skinName = a, e;
    }, o.moreBtn_i = function() {
        var e = new eui.Button();
        return this.moreBtn = e, e.label = "", e.x = -1, e.y = 649.04, e.skinName = r, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/TestRoleSkin.exml"] = window.RoleSkin = function(t) {
    function i() {
        t.call(this), this.skinParts = [ "stone", "bowStand", "stand", "attack", "arm", "bowAttack", "arrow" ], 
        this.height = 420, this.width = 300, this.elementsContent = [ this.stone_i(), this._Group1_i() ];
    }
    e(i, t);
    var n = i.prototype;
    return n.stone_i = function() {
        var e = new eui.Image();
        return this.stone = e, e.scaleX = 1, e.scaleY = 1, e.source = "shoot_atlas.stone", 
        e.x = 47, e.y = 255, e;
    }, n._Group1_i = function() {
        var e = new eui.Group();
        return e.anchorOffsetX = 124, e.anchorOffsetY = 286, e.height = 420, e.scaleX = 1, 
        e.width = 300, e.x = 124, e.y = 286, e.elementsContent = [ this.bowStand_i(), this.stand_i(), this.attack_i(), this.arm_i(), this.bowAttack_i(), this.arrow_i(), this._Image1_i(), this._Image2_i() ], 
        e;
    }, n.bowStand_i = function() {
        var e = new eui.Image();
        return this.bowStand = e, e.anchorOffsetX = 124, e.anchorOffsetY = 286, e.scaleX = 1, 
        e.scaleY = 1, e.source = "shoot_atlas.bow_stand0", e.x = 124, e.y = 286, e;
    }, n.stand_i = function() {
        var e = new eui.Image();
        return this.stand = e, e.anchorOffsetX = 130, e.anchorOffsetY = 286, e.scaleX = 1, 
        e.scaleY = 1, e.source = "shoot_atlas.role_stand1", e.visible = !1, e.x = 130, e.y = 286, 
        e;
    }, n.attack_i = function() {
        var e = new eui.Image();
        return this.attack = e, e.scaleX = 1, e.scaleY = 1, e.source = "shoot_atlas.role_attack1", 
        e.x = 0, e.y = 0, e;
    }, n.arm_i = function() {
        var e = new eui.Image();
        return this.arm = e, e.scaleX = 1, e.scaleY = 1, e.source = "shoot_atlas.role_arm1", 
        e.x = 0, e.y = 0, e;
    }, n.bowAttack_i = function() {
        var e = new eui.Image();
        return this.bowAttack = e, e.scaleX = 1, e.scaleY = 1, e.source = "shoot_atlas.bow_attack1", 
        e.x = 0, e.y = 0, e;
    }, n.arrow_i = function() {
        var e = new eui.Image();
        return this.arrow = e, e.scaleX = 1, e.scaleY = 1, e.source = "shoot_atlas.arrow1", 
        e.x = 0, e.y = 0, e;
    }, n._Image1_i = function() {
        var e = new eui.Image();
        return e.source = "shoot_atlas.die", e.x = 64, e.y = 158, e;
    }, n._Image2_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 32.5, e.source = "shoot_atlas.hpBg", e.x = 130, e.y = 43, 
        e;
    }, i;
}(eui.Skin), generateEUI.paths["resource/skins/buyProp/BuyPropSkin.exml"] = window.BuyPropSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "titleName", "nameTxt", "nameTxt0", "closeBtn", "duoshanBtn", "goldIcon0", "protectBtn", "goldTxt", "win", "goldIcon", "goldIcon1" ], 
        this.height = 408, this.width = 767, this.elementsContent = [ this.win_i(), this.goldIcon_i(), this.goldIcon1_i() ];
    }
    e(n, i);
    var a = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.close") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.close", 
            e.percentWidth = 100, e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), r = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn1") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn3", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 30, 
            e.text = "100", e.textColor = 16777215, e.verticalCenter = 0, e.x = 88, e;
        }, i;
    }(eui.Skin), o = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn1") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn3", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.size = 30, 
            e.text = "100", e.textColor = 16777215, e.verticalCenter = 0, e.x = 88, e;
        }, i;
    }(eui.Skin), s = n.prototype;
    return s.win_i = function() {
        var e = new eui.Group();
        return this.win = e, e.anchorOffsetX = 380, e.anchorOffsetY = 200, e.height = 408, 
        e.width = 767, e.x = 380, e.y = 200, e.elementsContent = [ this._Image1_i(), this._Image2_i(), this._Rect1_i(), this.titleName_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this._Image6_i(), this.nameTxt_i(), this.nameTxt0_i(), this.closeBtn_i(), this.duoshanBtn_i(), this.goldIcon0_i(), this.protectBtn_i(), this.goldTxt_i(), this._Image7_i() ], 
        e;
    }, s._Image1_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 379.61, e.horizontalCenter = 0, 
        e.scale9Grid = new t.Rectangle(62, 58, 30, 8), e.source = "shoot_atlas.bg1", e.width = 755, 
        e.y = 24, e;
    }, s._Image2_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.horizontalCenter = 0, e.scale9Grid = new t.Rectangle(81, 2, 10, 45), 
        e.source = "shoot_atlas.title", e.width = 307, e.y = 0, e;
    }, s._Rect1_i = function() {
        var e = new eui.Rect();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.ellipseHeight = 50, e.ellipseWidth = 50, 
        e.fillAlpha = .5, e.fillColor = 5658976, e.height = 144.61, e.horizontalCenter = 0, 
        e.width = 650.3, e.y = 124.09, e;
    }, s.titleName_i = function() {
        var e = new eui.Label();
        return this.titleName = e, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
        e.size = 30, e.text = "购买道具", e.textAlign = "center", e.width = 223, e.y = 8.56, 
        e;
    }, s._Image3_i = function() {
        var e = new eui.Image();
        return e.source = "shoot_atlas.line3", e.width = 690, e.x = 39, e.y = 122, e;
    }, s._Image4_i = function() {
        var e = new eui.Image();
        return e.source = "shoot_atlas.line3", e.width = 690, e.x = 39, e.y = 265.22, e;
    }, s._Image5_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 90, e.source = "shoot_atlas.protector", 
        e.width = 94.85, e.x = 475.42, e.y = 169.87, e;
    }, s._Image6_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 88, e.source = "shoot_atlas.smallProp4", 
        e.width = 95.21, e.x = 199.85, e.y = 170.74, e;
    }, s.nameTxt_i = function() {
        var e = new eui.Label();
        return this.nameTxt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "Microsoft YaHei", 
        e.height = 40, e.left = 152, e.scaleX = 1, e.scaleY = 1, e.size = 25, e.stroke = 1, 
        e.text = "躲闪", e.textAlign = "center", e.textColor = 16777215, e.touchEnabled = !1, 
        e.verticalAlign = "middle", e.width = 181, e.y = 126.44, e;
    }, s.nameTxt0_i = function() {
        var e = new eui.Label();
        return this.nameTxt0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "Microsoft YaHei", 
        e.height = 40, e.right = 152, e.scaleX = 1, e.scaleY = 1, e.size = 25, e.stroke = 1, 
        e.text = "保护罩", e.textAlign = "center", e.textColor = 16777215, e.touchEnabled = !1, 
        e.verticalAlign = "middle", e.width = 181, e.y = 126.44, e;
    }, s.closeBtn_i = function() {
        var e = new eui.Button();
        return this.closeBtn = e, e.label = "", e.x = 707.18, e.y = 4.56, e.skinName = a, 
        e;
    }, s.duoshanBtn_i = function() {
        var e = new eui.Button();
        return this.duoshanBtn = e, e.anchorOffsetX = 95.25, e.anchorOffsetY = 37.35, e.height = 74.69, 
        e.label = "100", e.left = 150, e.width = 190.5, e.y = 332.13, e.skinName = r, e;
    }, s.goldIcon0_i = function() {
        var e = new eui.Image();
        return this.goldIcon0 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 38, 
        e.source = "shoot_atlas.smallProp1", e.touchEnabled = !1, e.width = 40.71, e.x = 446.48, 
        e.y = 311.85, e;
    }, s.protectBtn_i = function() {
        var e = new eui.Button();
        return this.protectBtn = e, e.anchorOffsetX = 95.25, e.anchorOffsetY = 37.35, e.height = 74.69, 
        e.label = "100", e.right = 150, e.width = 190.5, e.y = 332.13, e.skinName = o, e;
    }, s.goldTxt_i = function() {
        var e = new eui.Label();
        return this.goldTxt = e, e.anchorOffsetX = 0, e.fontFamily = "Microsoft YaHei", 
        e.multiline = !1, e.stroke = 1, e.text = "1000", e.textAlign = "left", e.textColor = 16777215, 
        e.touchEnabled = !1, e.width = 200, e.x = 151.08, e.y = 80.12, e;
    }, s._Image7_i = function() {
        var e = new eui.Image();
        return e.height = 48, e.source = "shoot_atlas.smallProp1", e.width = 48, e.x = 89.08, 
        e.y = 72.12, e;
    }, s.goldIcon_i = function() {
        var e = new eui.Image();
        return this.goldIcon = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 48, 
        e.source = "shoot_atlas.smallProp1", e.touchEnabled = !1, e.width = 48, e.x = 174.48, 
        e.y = 307, e;
    }, s.goldIcon1_i = function() {
        var e = new eui.Image();
        return this.goldIcon1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 48, 
        e.source = "shoot_atlas.smallProp1", e.touchEnabled = !1, e.width = 48, e.x = 448.48, 
        e.y = 307, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/campaign/CampaignReliveSkin.exml"] = window.CampaignReliveSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "reLiveBtn", "leaveBtn", "propTxt", "groupC" ], 
        this.currentState = "relive", this.height = 500, this.width = 908, this.elementsContent = [ this.groupC_i() ], 
        this._Label3_i(), this.states = [ new eui.State("relive", []), new eui.State("share", [ new eui.AddItems("_Label3", "groupC", 1, ""), new eui.SetProperty("_Label1", "text", "求助群友可续命一次，立即续命可继续进度"), new eui.SetProperty("_Label1", "horizontalCenter", .5), new eui.SetProperty("_Label1", "width", 458.64), new eui.SetProperty("_Label1", "height", 40), new eui.SetProperty("reLiveBtn", "label", "立即续命"), new eui.SetProperty("propTxt", "x", 683.64), new eui.SetProperty("propTxt", "y", 155), new eui.SetProperty("propTxt", "visible", !1), new eui.SetProperty("_Label2", "x", 578.64), new eui.SetProperty("_Label2", "y", 155), new eui.SetProperty("_Label2", "visible", !1) ]) ];
    }
    e(n, i);
    var a = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn6") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn6", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 25, e.textColor = 1974874, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), r = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn6") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn6", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 25, e.textColor = 1974874, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), o = n.prototype;
    return o.groupC_i = function() {
        var e = new eui.Group();
        return this.groupC = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 500, 
        e.width = 908, e.x = 0, e.y = 0, e.elementsContent = [ this._Image1_i(), this._Label1_i(), this.reLiveBtn_i(), this.leaveBtn_i(), this.propTxt_i(), this._Label2_i() ], 
        e;
    }, o._Image1_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 398.61, e.left = 0, 
        e.right = 0, e.scale9Grid = new t.Rectangle(66, 60, 22, 8), e.source = "rewardbg", 
        e.y = 0, e;
    }, o._Label1_i = function() {
        var e = new eui.Label();
        return this._Label1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, 
        e.fontFamily = "Microsoft YaHei", e.height = 44, e.horizontalCenter = .5, e.size = 24, 
        e.text = "注：每次挑战只能使用一次复活卡", e.textAlign = "center", e.textColor = 1974874, e.width = 418.64, 
        e.y = 331.58, e;
    }, o.reLiveBtn_i = function() {
        var e = new eui.Button();
        return this.reLiveBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 90, 
        e.horizontalCenter = 0, e.label = "复活卡复活", e.width = 257, e.y = 221.55, e.skinName = a, 
        e;
    }, o.leaveBtn_i = function() {
        var e = new eui.Button();
        return this.leaveBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 65, 
        e.horizontalCenter = -8.5, e.label = "跳过", e.width = 129, e.y = 413, e.skinName = r, 
        e;
    }, o.propTxt_i = function() {
        var e = new eui.Label();
        return this.propTxt = e, e.anchorOffsetX = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", 
        e.text = "2", e.textAlign = "left", e.textColor = 1974874, e.width = 129, e.x = 464, 
        e.y = 159, e;
    }, o._Label2_i = function() {
        var e = new eui.Label();
        return this._Label2 = e, e.anchorOffsetX = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", 
        e.text = "剩余：", e.textAlign = "right", e.textColor = 1974874, e.width = 106, e.x = 359, 
        e.y = 159, e;
    }, o._Label3_i = function() {
        var e = new eui.Label();
        return this._Label3 = e, e.anchorOffsetY = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", 
        e.height = 56, e.horizontalCenter = 2, e.size = 42, e.stroke = 1, e.strokeColor = 16777215, 
        e.text = "求助群友", e.textColor = 1974874, e.y = 146, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/campaign/CampaignRewardSkin.exml"] = window.CampaignRewardSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "scoreTxt", "scoreMaxTxt", "shareBtn", "awardBtn", "xuanyaoBtn", "friendRankBtn", "worldRankBtn", "homeBtn", "restartBtn", "newxuanyaoBtn", "newGroup", "gourp", "friendsRankBtn", "videoAwardBtn", "inviteBtn", "hongbaoBtn", "leftGourp", "moreBtn" ], 
        this.height = 750, this.width = 1334, this.elementsContent = [ this.gourp_i(), this.leftGourp_i(), this.moreBtn_i() ];
    }
    e(n, i);
    var a = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn6") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn6", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 25, e.textColor = 1974874, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), r = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn6") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn6", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 25, e.textColor = 1974874, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), o = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn6") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn6", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 25, e.textColor = 1974874, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), s = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn1") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn4", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 24, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), h = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn1") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn4", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 24, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), l = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn6") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn6", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 25, e.textColor = 1974874, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), u = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn6") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn6", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 22, e.textColor = 1974874, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), c = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.moreBtn2") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.moreBtn2", 
            e.percentWidth = 100, e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), f = n.prototype;
    return f.gourp_i = function() {
        var e = new eui.Group();
        return this.gourp = e, e.anchorOffsetX = 454, e.anchorOffsetY = 314, e.height = 628, 
        e.width = 908, e.x = 648.22, e.y = 362, e.elementsContent = [ this._Image1_i(), this.scoreTxt_i(), this.scoreMaxTxt_i(), this.shareBtn_i(), this.awardBtn_i(), this.xuanyaoBtn_i(), this.friendRankBtn_i(), this.worldRankBtn_i(), this.homeBtn_i(), this.restartBtn_i(), this._Image2_i(), this._Image3_i(), this.newGroup_i() ], 
        e;
    }, f._Image1_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 518, e.scale9Grid = new t.Rectangle(113, 394, 682, 11), 
        e.source = "rewardbg", e.x = 0, e.y = 0, e;
    }, f.scoreTxt_i = function() {
        var e = new eui.Label();
        return this.scoreTxt = e, e.anchorOffsetX = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", 
        e.text = "10000", e.textAlign = "left", e.textColor = 1974874, e.width = 110, e.x = 303.92, 
        e.y = 197, e;
    }, f.scoreMaxTxt_i = function() {
        var e = new eui.Label();
        return this.scoreMaxTxt = e, e.anchorOffsetX = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", 
        e.text = "10000", e.textAlign = "left", e.textColor = 1974874, e.width = 110, e.x = 597.68, 
        e.y = 197, e;
    }, f.shareBtn_i = function() {
        var e = new eui.Button();
        return this.shareBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 80, 
        e.label = "发起挑战", e.width = 200, e.x = 110, e.y = 531, e.skinName = a, e;
    }, f.awardBtn_i = function() {
        var e = new eui.Button();
        return this.awardBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 80, 
        e.label = "查看群排行", e.width = 200, e.x = 352, e.y = 531, e.skinName = r, e;
    }, f.xuanyaoBtn_i = function() {
        var e = new eui.Button();
        return this.xuanyaoBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 80, 
        e.label = "炫耀战绩", e.visible = !1, e.width = 200, e.x = 352, e.y = 531, e.skinName = o, 
        e;
    }, f.friendRankBtn_i = function() {
        var e = new eui.Button();
        return this.friendRankBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 42, 
        e.label = "好友排行", e.visible = !1, e.width = 75, e.x = 20, e.y = 101.36, e.skinName = s, 
        e;
    }, f.worldRankBtn_i = function() {
        var e = new eui.Button();
        return this.worldRankBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 48, 
        e.label = "世界排行", e.visible = !1, e.width = 77, e.x = 108, e.y = 95.36, e.skinName = h, 
        e;
    }, f.homeBtn_i = function() {
        var e = new eui.Button();
        return this.homeBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.label = "", 
        e.skinName = "ButtonReturnSkin", e.x = 747.16, e.y = 159.34, e;
    }, f.restartBtn_i = function() {
        var e = new eui.Button();
        return this.restartBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 80, 
        e.label = "再玩一次", e.width = 200, e.x = 593.16, e.y = 531, e.skinName = l, e;
    }, f._Image2_i = function() {
        var e = new eui.Image();
        return e.source = "shoot_atlas.df", e.x = 217.97, e.y = 196, e;
    }, f._Image3_i = function() {
        var e = new eui.Image();
        return e.source = "shoot_atlas.zgdf", e.x = 439, e.y = 195, e;
    }, f.newGroup_i = function() {
        var e = new eui.Group();
        return this.newGroup = e, e.anchorOffsetX = 140, e.anchorOffsetY = 37, e.x = 179.5, 
        e.y = 141.54, e.elementsContent = [ this._Image4_i(), this.newxuanyaoBtn_i() ], 
        e;
    }, f._Image4_i = function() {
        var e = new eui.Image();
        return e.source = "shoot_atlas.new2", e.x = 0, e.y = 2.3, e;
    }, f.newxuanyaoBtn_i = function() {
        var e = new eui.Button();
        return this.newxuanyaoBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 49.8, 
        e.label = "炫耀战绩", e.width = 124.5, e.x = 154.72, e.y = .3, e.skinName = u, e;
    }, f.leftGourp_i = function() {
        var e = new eui.Group();
        return this.leftGourp = e, e.x = 10, e.y = 10, e.layout = this._HorizontalLayout1_i(), 
        e.elementsContent = [ this.friendsRankBtn_i(), this.videoAwardBtn_i(), this.inviteBtn_i(), this.hongbaoBtn_i() ], 
        e;
    }, f._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout();
        return e.gap = 16, e;
    }, f.friendsRankBtn_i = function() {
        var e = new eui.Button();
        return this.friendsRankBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.label = "", 
        e.scaleX = 1, e.scaleY = 1, e.skinName = "BtnFriendsSkin", e.x = 10, e.y = 397.5, 
        e;
    }, f.videoAwardBtn_i = function() {
        var e = new eui.Button();
        return this.videoAwardBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.label = "", 
        e.scaleX = 1, e.scaleY = 1, e.skinName = "BtnVideoSkin", e.x = 0, e.y = 0, e;
    }, f.inviteBtn_i = function() {
        var e = new eui.Button();
        return this.inviteBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.label = "", 
        e.scaleX = 1, e.scaleY = 1, e.skinName = "BtnInviteSkin", e.x = 10, e.y = 10, e;
    }, f.hongbaoBtn_i = function() {
        var e = new eui.Button();
        return this.hongbaoBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.label = "", 
        e.scaleX = 1, e.scaleY = 1, e.skinName = "BtnHongBaoSkin", e.x = 0, e.y = 129, e;
    }, f.moreBtn_i = function() {
        var e = new eui.Button();
        return this.moreBtn = e, e.label = "", e.x = -1, e.y = 649.04, e.skinName = c, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/campaign/CampaignShareReliveSkin.exml"] = window.CampaignShareReliveSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "shareBtn", "leaveBtn", "gourp" ], this.height = 572, 
        this.width = 816, this.elementsContent = [ this.gourp_i() ];
    }
    e(n, i);
    var a = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn6") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn6", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 30, e.text = "", e.textColor = 16711680, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), r = n.prototype;
    return r.gourp_i = function() {
        var e = new eui.Group();
        return this.gourp = e, e.anchorOffsetX = 408, e.anchorOffsetY = 284, e.height = 568, 
        e.width = 816, e.x = 408, e.y = 284, e.elementsContent = [ this._Image1_i(), this.shareBtn_i(), this.leaveBtn_i(), this._Label1_i(), this._Label2_i() ], 
        e;
    }, r._Image1_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 488, e.left = 0, e.right = 0, 
        e.scale9Grid = new t.Rectangle(113, 394, 682, 11), e.source = "rewardbg", e.y = 0, 
        e;
    }, r.shareBtn_i = function() {
        var e = new eui.Button();
        return this.shareBtn = e, e.anchorOffsetX = 162, e.anchorOffsetY = 56, e.height = 112, 
        e.label = "立即续命", e.width = 324, e.x = 410, e.y = 328, e.skinName = a, e;
    }, r.leaveBtn_i = function() {
        var e = new eui.Label();
        return this.leaveBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, 
        e.fontFamily = "Microsoft YaHei", e.height = 48, e.horizontalCenter = 0, e.text = "跳过", 
        e.textAlign = "center", e.textColor = 14408667, e.verticalAlign = "middle", e.width = 106, 
        e.y = 498.54, e;
    }, r._Label1_i = function() {
        var e = new eui.Label();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", 
        e.height = 42, e.horizontalCenter = -2, e.text = "求助群友可续命一次，立即续命可继续进度", e.textAlign = "center", 
        e.textColor = 1974874, e.verticalAlign = "middle", e.width = 614, e.y = 405.31, 
        e;
    }, r._Label2_i = function() {
        var e = new eui.Label();
        return e.anchorOffsetY = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.height = 56, 
        e.horizontalCenter = 0, e.size = 50, e.stroke = 1, e.strokeColor = 16777215, e.text = "求助群友", 
        e.textColor = 1974874, e.y = 178.5, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/campaign/CampaignVideoSkin.exml"] = window.CampaignVideoSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "shareBtn", "leaveBtn", "gourp" ], this.currentState = "video", 
        this.height = 572, this.width = 816, this.elementsContent = [ this.gourp_i() ], 
        this.states = [ new eui.State("video", []), new eui.State("share", [ new eui.SetProperty("shareBtn", "label", "立即续命"), new eui.SetProperty("_Label1", "text", "求助群友可续命一次，立即续命可继续进度"), new eui.SetProperty("_Label2", "text", "求助群友") ]) ];
    }
    e(n, i);
    var a = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn6") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn6", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 30, e.text = "", e.textColor = 16711680, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), r = n.prototype;
    return r.gourp_i = function() {
        var e = new eui.Group();
        return this.gourp = e, e.anchorOffsetX = 408, e.anchorOffsetY = 284, e.height = 568, 
        e.width = 816, e.x = 408, e.y = 284, e.elementsContent = [ this._Image1_i(), this.shareBtn_i(), this.leaveBtn_i(), this._Label1_i(), this._Label2_i() ], 
        e;
    }, r._Image1_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 488, e.left = 0, e.right = 0, 
        e.scale9Grid = new t.Rectangle(113, 394, 682, 11), e.source = "rewardbg", e.y = 0, 
        e;
    }, r.shareBtn_i = function() {
        var e = new eui.Button();
        return this.shareBtn = e, e.anchorOffsetX = 162, e.anchorOffsetY = 56, e.height = 112, 
        e.label = "立即观看", e.width = 324, e.x = 410, e.y = 328, e.skinName = a, e;
    }, r.leaveBtn_i = function() {
        var e = new eui.Label();
        return this.leaveBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, 
        e.fontFamily = "Microsoft YaHei", e.height = 48, e.horizontalCenter = 0, e.text = "跳过", 
        e.textAlign = "center", e.textColor = 14408667, e.verticalAlign = "middle", e.width = 106, 
        e.y = 498.54, e;
    }, r._Label1_i = function() {
        var e = new eui.Label();
        return this._Label1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, 
        e.fontFamily = "Microsoft YaHei", e.height = 42, e.horizontalCenter = 0, e.text = "观看完视频可立即复活", 
        e.textAlign = "center", e.textColor = 1974874, e.verticalAlign = "middle", e.width = 660.97, 
        e.y = 391.63, e;
    }, r._Label2_i = function() {
        var e = new eui.Label();
        return this._Label2 = e, e.anchorOffsetY = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", 
        e.height = 56, e.horizontalCenter = 0, e.size = 50, e.stroke = 1, e.strokeColor = 16777215, 
        e.text = "复活", e.textColor = 1974874, e.y = 178.5, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/campaign/PassCampaignSkin.exml"] = window.PassCampaignSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "goBtn", "guankaTxt", "goldTxt", "groupC" ], this.height = 500, 
        this.width = 908, this.elementsContent = [ this.groupC_i() ];
    }
    e(n, i);
    var a = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn6") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn6", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 40, e.textColor = 1974874, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), r = n.prototype;
    return r.groupC_i = function() {
        var e = new eui.Group();
        return this.groupC = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 500, 
        e.width = 908, e.x = 0, e.y = 0, e.elementsContent = [ this._Image1_i(), this.goBtn_i(), this._Label1_i(), this.guankaTxt_i(), this._Label2_i(), this.goldTxt_i(), this._Image2_i() ], 
        e;
    }, r._Image1_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 459.82, e.left = 0, 
        e.right = 0, e.scale9Grid = new t.Rectangle(66, 60, 22, 8), e.source = "rewardbg", 
        e.y = 0, e;
    }, r.goBtn_i = function() {
        var e = new eui.Button();
        return this.goBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 90, 
        e.horizontalCenter = .5, e.label = "继续下一关", e.width = 308.51, e.y = 324.82, e.skinName = a, 
        e;
    }, r._Label1_i = function() {
        var e = new eui.Label();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "Microsoft YaHei", 
        e.height = 58, e.horizontalCenter = 1, e.size = 46, e.text = "恭喜过关", e.textAlign = "center", 
        e.textColor = 16714759, e.width = 298, e.y = 251.21, e;
    }, r.guankaTxt_i = function() {
        var e = new eui.Label();
        return this.guankaTxt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "Microsoft YaHei", 
        e.height = 58, e.size = 40, e.text = "100", e.textAlign = "left", e.textColor = 1974874, 
        e.verticalAlign = "middle", e.width = 212, e.x = 625.88, e.y = 165, e;
    }, r._Label2_i = function() {
        var e = new eui.Label();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "Microsoft YaHei", 
        e.height = 58, e.size = 40, e.text = "关卡", e.textAlign = "right", e.textColor = 1974874, 
        e.verticalAlign = "middle", e.width = 180, e.x = 418.09, e.y = 165, e;
    }, r.goldTxt_i = function() {
        var e = new eui.Label();
        return this.goldTxt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "Microsoft YaHei", 
        e.height = 58, e.multiline = !1, e.size = 40, e.text = "+10", e.textAlign = "left", 
        e.textColor = 1974874, e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 177.7, 
        e.x = 297.73, e.y = 165, e;
    }, r._Image2_i = function() {
        var e = new eui.Image();
        return e.source = "shoot_atlas.smallProp1", e.x = 234.05, e.y = 168.21, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/common/ButtonHbCloseSkin.exml"] = window.ButtonHbCloseSkin = function(t) {
    function i() {
        t.call(this), this.skinParts = [], this.height = 72, this.width = 70, this.elementsContent = [ this._Group1_i() ], 
        this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.hongbao6"), new eui.SetProperty("_Group1", "scaleX", .9), new eui.SetProperty("_Group1", "scaleY", .9), new eui.SetProperty("_Group1", "horizontalCenter", -.5), new eui.SetProperty("_Group1", "verticalCenter", -.5) ]), new eui.State("disabled", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.hongbao6") ]) ];
    }
    e(i, t);
    var n = i.prototype;
    return n._Group1_i = function() {
        var e = new eui.Group();
        return this._Group1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 70, 
        e.horizontalCenter = 0, e.verticalCenter = 0, e.width = 72, e.elementsContent = [ this._Image1_i() ], 
        e;
    }, n._Image1_i = function() {
        var e = new eui.Image();
        return this._Image1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 69, 
        e.source = "shoot_atlas.hongbao6", e.width = 71.76, e.x = 0, e.y = 0, e;
    }, i;
}(eui.Skin), generateEUI.paths["resource/skins/hongbao/GuildExpBarSkin.exml"] = window.GuildExpBarSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "thumb", "labelDisplay" ], this.minHeight = 32, 
        this.minWidth = 400, this.width = 400, this.elementsContent = [ this._Image1_i(), this.thumb_i(), this.labelDisplay_i() ];
    }
    e(n, i);
    var a = n.prototype;
    return a._Image1_i = function() {
        var e = new eui.Image();
        return e.height = 32, e.scale9Grid = new t.Rectangle(22, 2, 137, 16), e.source = "shoot_atlas.hongbao5", 
        e.verticalCenter = 0, e.width = 400, e;
    }, a.thumb_i = function() {
        var e = new eui.Image();
        return this.thumb = e, e.height = 32, e.scale9Grid = new t.Rectangle(22, 2, 137, 16), 
        e.source = "shoot_atlas.hongbao4", e.verticalCenter = 0, e.width = 400, e;
    }, a.labelDisplay_i = function() {
        var e = new eui.Label();
        return this.labelDisplay = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "微软雅黑", 
        e.height = 32, e.size = 22, e.stroke = 1, e.strokeColor = 0, e.text = "450/5699888", 
        e.textAlign = "center", e.textColor = 16777215, e.verticalAlign = "middle", e.width = 400, 
        e.x = 0, e.y = 0, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/hongbao/HongbaoMainSkin.exml"] = window.HongbaoMainSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "iconImg", "postBtn", "descTxt", "highScoreTxt", "nameTxt", "hasMoneyTxt", "expBar", "closeBtn", "gourp" ], 
        this.height = 610, this.width = 700, this.elementsContent = [ this.gourp_i() ];
    }
    e(n, i);
    var a = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", []), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return e.percentHeight = 100, e.source = "shoot_atlas.hongbao2", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 30, e.textColor = 1974874, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), r = n.prototype;
    return r.gourp_i = function() {
        var e = new eui.Group();
        return this.gourp = e, e.anchorOffsetX = 258, e.anchorOffsetY = 308, e.height = 610, 
        e.width = 700, e.x = 258, e.y = 308, e.elementsContent = [ this._Image1_i(), this._Image2_i(), this.iconImg_i(), this.postBtn_i(), this.descTxt_i(), this._Label1_i(), this.highScoreTxt_i(), this.nameTxt_i(), this._Label2_i(), this.hasMoneyTxt_i(), this.expBar_i(), this.closeBtn_i() ], 
        e;
    }, r._Image1_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 351, e.anchorOffsetY = 305.34, e.scale9Grid = new t.Rectangle(57, 378, 44, 27), 
        e.source = "hongbao1", e.width = 700, e.x = 351, e.y = 305.34, e;
    }, r._Image2_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.horizontalCenter = 0, e.source = "shoot_atlas.hongbao3", 
        e.y = 254.69, e;
    }, r.iconImg_i = function() {
        var e = new eui.Image();
        return this.iconImg = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 79, 
        e.horizontalCenter = .5, e.source = "shoot_atlas.hongbao3", e.width = 79, e.y = 257.19, 
        e;
    }, r.postBtn_i = function() {
        var e = new eui.Button();
        return this.postBtn = e, e.anchorOffsetX = 96, e.anchorOffsetY = 34, e.horizontalCenter = 0, 
        e.label = "", e.y = 527, e.skinName = a, e;
    }, r.descTxt_i = function() {
        var e = new eui.Label();
        return this.descTxt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "Microsoft YaHei", 
        e.height = 39, e.horizontalCenter = 0, e.size = 24, e.text = "完成进度，可提现5-20元现金红包！", 
        e.textAlign = "center", e.textColor = 14211288, e.touchEnabled = !1, e.verticalAlign = "middle", 
        e.width = 447.82, e.y = 438.33, e;
    }, r._Label1_i = function() {
        var e = new eui.Label();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", 
        e.height = 33, e.size = 26, e.stroke = 1, e.strokeColor = 16711680, e.text = "我的最高分", 
        e.textAlign = "left", e.textColor = 16707197, e.touchEnabled = !1, e.verticalAlign = "middle", 
        e.width = 159.82, e.x = 44.99, e.y = 230, e;
    }, r.highScoreTxt_i = function() {
        var e = new eui.Label();
        return this.highScoreTxt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, 
        e.fontFamily = "Microsoft YaHei", e.height = 34, e.size = 28, e.stroke = 1, e.strokeColor = 16711680, 
        e.text = "18888", e.textAlign = "left", e.textColor = 16777215, e.touchEnabled = !1, 
        e.verticalAlign = "middle", e.width = 194.82, e.x = 44.99, e.y = 270.99, e;
    }, r.nameTxt_i = function() {
        var e = new eui.Label();
        return this.nameTxt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, 
        e.fontFamily = "Microsoft YaHei", e.height = 34, e.horizontalCenter = -1.5, e.size = 26, 
        e.stroke = 1, e.strokeColor = 10753543, e.text = "张三", e.textAlign = "center", e.textColor = 16707197, 
        e.touchEnabled = !1, e.verticalAlign = "middle", e.width = 446.82, e.y = 351.01, 
        e;
    }, r._Label2_i = function() {
        var e = new eui.Label();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", 
        e.height = 34, e.size = 26, e.stroke = 1, e.strokeColor = 16711680, e.text = "我已累计获得", 
        e.textAlign = "right", e.textColor = 16707197, e.touchEnabled = !1, e.verticalAlign = "middle", 
        e.width = 159.82, e.x = 478.01, e.y = 230, e;
    }, r.hasMoneyTxt_i = function() {
        var e = new eui.Label();
        return this.hasMoneyTxt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, 
        e.fontFamily = "Microsoft YaHei", e.height = 36, e.size = 28, e.stroke = 1, e.strokeColor = 16711680, 
        e.text = "3.6~4.2元", e.textAlign = "right", e.textColor = 16777215, e.touchEnabled = !1, 
        e.verticalAlign = "middle", e.width = 196.82, e.x = 441.01, e.y = 270.99, e;
    }, r.expBar_i = function() {
        var e = new eui.ProgressBar();
        return this.expBar = e, e.horizontalCenter = 0, e.skinName = "GuildExpBarSkin", 
        e.slideDuration = 0, e.value = 100, e.y = 396.02, e;
    }, r.closeBtn_i = function() {
        var e = new eui.Button();
        return this.closeBtn = e, e.label = "", e.right = 2, e.skinName = "ButtonHbCloseSkin", 
        e.top = 74, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/hongbao/HongbaoPostSkin.exml"] = window.HongbaoPostSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "postBtn", "closeBtn", "testTxt", "testTxt1", "phoneTxt", "zhTxt", "gourp" ], 
        this.height = 600, this.width = 994, this.elementsContent = [ this.gourp_i() ];
    }
    e(n, i);
    var a = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn6") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn6", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 25, e.textColor = 1974874, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), r = n.prototype;
    return r.gourp_i = function() {
        var e = new eui.Group();
        return this.gourp = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 599, 
        e.width = 988, e.x = 0, e.y = 0, e.elementsContent = [ this._Image1_i(), this.postBtn_i(), this.closeBtn_i(), this.testTxt_i(), this.testTxt1_i(), this._Rect1_i(), this._Rect2_i(), this.phoneTxt_i(), this.zhTxt_i(), this._Label1_i(), this._Label2_i() ], 
        e;
    }, r._Image1_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 592.85, e.scale9Grid = new t.Rectangle(113, 394, 682, 11), 
        e.source = "rewardbg", e.width = 989, e.x = 0, e.y = 0, e;
    }, r.postBtn_i = function() {
        var e = new eui.Button();
        return this.postBtn = e, e.anchorOffsetX = 120, e.anchorOffsetY = 40, e.height = 80, 
        e.horizontalCenter = 13, e.label = "提交", e.width = 240, e.y = 522.85, e.skinName = a, 
        e;
    }, r.closeBtn_i = function() {
        var e = new eui.Button();
        return this.closeBtn = e, e.label = "", e.right = 88, e.skinName = "ButtonReturnSkin", 
        e.top = 149, e;
    }, r.testTxt_i = function() {
        var e = new eui.Label();
        return this.testTxt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, 
        e.fontFamily = "Microsoft YaHei", e.height = 96, e.text = "现金红包将会用支付宝转账的形式发放后，电话短信通知，请填写收款支付宝账号与联系电话号码，并认真核对！", 
        e.textAlign = "left", e.textColor = 1974874, e.verticalAlign = "middle", e.width = 833.82, 
        e.x = 74.18, e.y = 255, e;
    }, r.testTxt1_i = function() {
        var e = new eui.Label();
        return this.testTxt1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.bold = !0, 
        e.fontFamily = "Microsoft YaHei", e.height = 52, e.size = 40, e.text = "恭喜您，获得12.1元现金红包奖励！", 
        e.textAlign = "left", e.textColor = 16711680, e.verticalAlign = "middle", e.width = 752.82, 
        e.x = 86.18, e.y = 178, e;
    }, r._Rect1_i = function() {
        var e = new eui.Rect();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 50, e.width = 434, e.x = 408, 
        e.y = 356, e;
    }, r._Rect2_i = function() {
        var e = new eui.Rect();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 50, e.width = 434, e.x = 408, 
        e.y = 414, e;
    }, r.phoneTxt_i = function() {
        var e = new eui.EditableText();
        return this.phoneTxt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "Microsoft YaHei", 
        e.height = 43.7, e.size = 28, e.text = "123456789", e.textAlign = "left", e.textColor = 16777215, 
        e.verticalAlign = "middle", e.width = 368.97, e.x = 426, e.y = 358.15, e;
    }, r.zhTxt_i = function() {
        var e = new eui.EditableText();
        return this.zhTxt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "Microsoft YaHei", 
        e.height = 45.7, e.maxChars = 50, e.size = 28, e.text = "123456789", e.textAlign = "left", 
        e.textColor = 16777215, e.verticalAlign = "middle", e.width = 415.97, e.x = 426, 
        e.y = 415, e;
    }, r._Label1_i = function() {
        var e = new eui.Label();
        return e.bold = !0, e.text = "电话：", e.textColor = 0, e.x = 270, e.y = 373, e;
    }, r._Label2_i = function() {
        var e = new eui.Label();
        return e.bold = !0, e.text = "收款支付宝账号：", e.textColor = 0, e.x = 120, e.y = 423, 
        e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/rank/RankItemSkin.exml"] = window.RankItemSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "myself", "head", "rank", "nick", "mark" ], this.height = 60, 
        this.width = 620, this.elementsContent = [ this.myself_i(), this.head_i(), this.rank_i(), this.nick_i(), this.mark_i() ];
    }
    e(n, i);
    var a = n.prototype;
    return a.myself_i = function() {
        var e = new eui.Image();
        return this.myself = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 68, 
        e.scale9Grid = new t.Rectangle(33, 5, 54, 36), e.source = "shoot_atlas.bg2", e.width = 620, 
        e.x = 0, e.y = -4, e;
    }, a.head_i = function() {
        var e = new eui.Image();
        return this.head = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 60, e.source = "", 
        e.width = 60, e.x = 130, e.y = 0, e;
    }, a.rank_i = function() {
        var e = new eui.Label();
        return this.rank = e, e.anchorOffsetX = 0, e.text = "1", e.textAlign = "center", 
        e.width = 120, e.x = 4, e.y = 17, e;
    }, a.nick_i = function() {
        var e = new eui.Label();
        return this.nick = e, e.anchorOffsetX = 0, e.text = "名字六个字字", e.textAlign = "left", 
        e.width = 236, e.x = 233, e.y = 17, e;
    }, a.mark_i = function() {
        var e = new eui.Label();
        return this.mark = e, e.text = "1000000", e.textAlign = "right", e.x = 502, e.y = 17, 
        e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/rank/RankViewSkin.exml"] = window.RankViewSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "maskbg", "titleName", "cellList1", "cellScroller1", "closeBtn", "win" ], 
        this.height = 750, this.width = 1334, this.elementsContent = [ this.maskbg_i(), this.win_i() ];
    }
    e(n, i);
    var a = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.close") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.close", 
            e.percentWidth = 100, e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), r = n.prototype;
    return r.maskbg_i = function() {
        var e = new eui.Rect();
        return this.maskbg = e, e.alpha = .8, e.height = 750, e.width = 1334, e.x = 0, e.y = 0, 
        e;
    }, r.win_i = function() {
        var e = new eui.Group();
        return this.win = e, e.anchorOffsetX = 333, e.anchorOffsetY = 300, e.height = 600, 
        e.x = 643, e.y = 308, e.elementsContent = [ this._Image1_i(), this._Image2_i(), this.titleName_i(), this.cellScroller1_i(), this.closeBtn_i() ], 
        e;
    }, r._Image1_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 569, e.scale9Grid = new t.Rectangle(15, 7, 92, 46), 
        e.source = "shoot_atlas.bg4", e.width = 667, e.x = 0, e.y = 24, e;
    }, r._Image2_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.scale9Grid = new t.Rectangle(81, 2, 10, 45), e.source = "shoot_atlas.title", 
        e.width = 223, e.x = 222, e.y = 0, e;
    }, r.titleName_i = function() {
        var e = new eui.Label();
        return this.titleName = e, e.fontFamily = "Microsoft YaHei", e.text = "排行榜", e.textAlign = "center", 
        e.width = 223, e.x = 222, e.y = 8.96, e;
    }, r.cellScroller1_i = function() {
        var e = new eui.Scroller();
        return this.cellScroller1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 446, 
        e.width = 620, e.x = 23, e.y = 70, e.viewport = this.cellList1_i(), e;
    }, r.cellList1_i = function() {
        var e = new eui.Group();
        return this.cellList1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 446, 
        e.x = 333, e.y = 70, e.layout = this._VerticalLayout1_i(), e;
    }, r._VerticalLayout1_i = function() {
        var e = new eui.VerticalLayout();
        return e.gap = 10, e;
    }, r.closeBtn_i = function() {
        var e = new eui.Button();
        return this.closeBtn = e, e.label = "", e.x = 601, e.y = 6, e.skinName = a, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/shop/ShopItemSkin.exml"] = window.ShopItemSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "bg", "img", "nameTxt", "scoreBtn", "huoDongBtn", "goldBtn", "goldIcon", "useBtn" ], 
        this.height = 284, this.width = 196, this.elementsContent = [ this._Group1_i() ];
    }
    e(n, i);
    var a = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn1") ]), new eui.State("disabled", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn2") ]) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn3", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 25, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), r = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn1") ]), new eui.State("disabled", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn2") ]) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn4", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 25, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), o = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn1") ]), new eui.State("disabled", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn2") ]) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn3", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 20, 
            e.size = 25, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), s = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn1") ]), new eui.State("disabled", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn2") ]) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn4", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 25, e.textColor = 16777215, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), h = n.prototype;
    return h._Group1_i = function() {
        var e = new eui.Group();
        return e.height = 284, e.width = 196, e.x = 0, e.y = 0, e.elementsContent = [ this._Image1_i(), this.bg_i(), this._Image2_i(), this.img_i(), this.nameTxt_i(), this._Label1_i(), this.scoreBtn_i(), this.huoDongBtn_i(), this.goldBtn_i(), this.goldIcon_i(), this.useBtn_i() ], 
        e;
    }, h._Image1_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 284, e.scale9Grid = new t.Rectangle(21, 25, 86, 11), 
        e.scaleX = 1, e.scaleY = 1, e.source = "shoot_atlas.bg4", e.width = 196, e.x = 0, 
        e.y = 0, e;
    }, h.bg_i = function() {
        var e = new eui.Image();
        return this.bg = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 204.71, 
        e.scale9Grid = new t.Rectangle(22, 22, 6, 6), e.scaleX = 1, e.scaleY = 1, e.source = "shoot_atlas.bg5", 
        e.width = 186, e.x = 5, e.y = 4, e;
    }, h._Image2_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 42, e.scale9Grid = new t.Rectangle(21, 25, 86, 11), 
        e.scaleX = 1, e.scaleY = 1, e.source = "shoot_atlas.bg4", e.width = 184, e.x = 5, 
        e.y = 7, e;
    }, h.img_i = function() {
        var e = new eui.Image();
        return this.img = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 180, e.scaleX = 1, 
        e.scaleY = 1, e.source = "shoot_atlas.bow_stand5", e.width = 178, e.x = 9, e.y = 9.5, 
        e;
    }, h.nameTxt_i = function() {
        var e = new eui.Label();
        return this.nameTxt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "Microsoft YaHei", 
        e.height = 40, e.scaleX = 1, e.scaleY = 1, e.size = 25, e.stroke = 1, e.text = "点击预览", 
        e.textAlign = "center", e.textColor = 16777215, e.touchEnabled = !1, e.verticalAlign = "middle", 
        e.width = 181, e.x = 8, e.y = 6.5, e;
    }, h._Label1_i = function() {
        var e = new eui.Label();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "Microsoft YaHei", 
        e.height = 40, e.scaleX = 1, e.scaleY = 1, e.size = 20, e.stroke = 1, e.text = "点击预览", 
        e.textAlign = "right", e.textColor = 16777215, e.touchEnabled = !1, e.verticalAlign = "middle", 
        e.width = 127, e.x = 50.4, e.y = 168.01, e;
    }, h.scoreBtn_i = function() {
        var e = new eui.Button();
        return this.scoreBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 50, 
        e.label = "100", e.scaleX = 1, e.scaleY = 1, e.visible = !1, e.width = 134, e.x = 33, 
        e.y = 221, e.skinName = a, e;
    }, h.huoDongBtn_i = function() {
        var e = new eui.Button();
        return this.huoDongBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 50, 
        e.label = "活动获得", e.scaleX = 1, e.scaleY = 1, e.width = 134, e.x = 33, e.y = 221, 
        e.skinName = r, e;
    }, h.goldBtn_i = function() {
        var e = new eui.Button();
        return this.goldBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 50, 
        e.label = "1000", e.scaleX = 1, e.scaleY = 1, e.width = 134, e.x = 33, e.y = 221.03, 
        e.skinName = o, e;
    }, h.goldIcon_i = function() {
        var e = new eui.Image();
        return this.goldIcon = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 28, 
        e.source = "shoot_atlas.smallProp1", e.touchEnabled = !1, e.width = 30, e.x = 52, 
        e.y = 233, e;
    }, h.useBtn_i = function() {
        var e = new eui.Button();
        return this.useBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 50, 
        e.label = "已拥有", e.scaleX = 1, e.scaleY = 1, e.visible = !1, e.width = 134, e.x = 33, 
        e.y = 220, e.skinName = s, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/shop/ShopSkin.exml"] = window.ShopSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "goldTxt", "scoreMaxTxt", "itemList", "itemScr", "closeBtn", "tryUseBtn", "gourp" ], 
        this.height = 624, this.width = 1100, this.elementsContent = [ this.gourp_i() ];
    }
    e(n, i);
    var a = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn1") ]), new eui.State("disabled", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn2") ]) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn4", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 25, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), r = n.prototype;
    return r.gourp_i = function() {
        var e = new eui.Group();
        return this.gourp = e, e.anchorOffsetX = 550, e.anchorOffsetY = 296, e.height = 624, 
        e.width = 1100, e.x = 550, e.y = 296, e.elementsContent = [ this._Image1_i(), this._Rect1_i(), this.goldTxt_i(), this.scoreMaxTxt_i(), this._Image2_i(), this.itemScr_i(), this._Image3_i(), this.closeBtn_i(), this.tryUseBtn_i() ], 
        e;
    }, r._Image1_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 608.21, e.scale9Grid = new t.Rectangle(113, 394, 682, 11), 
        e.source = "rewardbg", e.width = 1033.33, e.x = 32.01, e.y = 2.66, e;
    }, r._Rect1_i = function() {
        var e = new eui.Rect();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.ellipseHeight = 50, e.ellipseWidth = 50, 
        e.fillAlpha = .4, e.fillColor = 1974874, e.height = 300.55, e.width = 862, e.x = 116, 
        e.y = 264, e;
    }, r.goldTxt_i = function() {
        var e = new eui.Label();
        return this.goldTxt = e, e.anchorOffsetX = 0, e.fontFamily = "Microsoft YaHei", 
        e.multiline = !1, e.stroke = 1, e.text = "1000", e.textAlign = "left", e.textColor = 1974874, 
        e.touchEnabled = !1, e.width = 120, e.x = 234.59, e.y = 193.55, e;
    }, r.scoreMaxTxt_i = function() {
        var e = new eui.Label();
        return this.scoreMaxTxt = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.fontFamily = "Microsoft YaHei", 
        e.height = 31.33, e.multiline = !1, e.stroke = 1, e.text = "1000", e.textAlign = "left", 
        e.textColor = 1974874, e.touchEnabled = !1, e.width = 154.67, e.x = 518.2, e.y = 194.55, 
        e;
    }, r._Image2_i = function() {
        var e = new eui.Image();
        return e.height = 45, e.source = "shoot_atlas.smallProp1", e.width = 43, e.x = 179.03, 
        e.y = 187.14, e;
    }, r.itemScr_i = function() {
        var e = new eui.Scroller();
        return this.itemScr = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 284, 
        e.width = 630, e.x = 337.34, e.y = 271.63, e.viewport = this.itemList_i(), e;
    }, r.itemList_i = function() {
        var e = new eui.List();
        return this.itemList = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 284, 
        e.width = 630, e.x = 7.63, e.y = 2.6, e.layout = this._HorizontalLayout1_i(), e;
    }, r._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout();
        return e.gap = 2, e;
    }, r._Image3_i = function() {
        var e = new eui.Image();
        return e.source = "shoot_atlas.zgdf", e.x = 362.17, e.y = 193.49, e;
    }, r.closeBtn_i = function() {
        var e = new eui.Button();
        return this.closeBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.label = "", 
        e.skinName = "ButtonReturnSkin", e.x = 893.45, e.y = 168.82, e;
    }, r.tryUseBtn_i = function() {
        var e = new eui.Button();
        return this.tryUseBtn = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 50, 
        e.label = "看视频试用", e.scaleX = 1, e.scaleY = 1, e.width = 192.07, e.x = 127.72, e.y = 510, 
        e.skinName = a, e;
    }, n;
}(eui.Skin), generateEUI.paths["resource/skins/sign/SignItemSkin.exml"] = window.SignItemSkin = function(t) {
    function i() {
        t.call(this), this.skinParts = [ "dayTxt", "head", "numTxt", "maskBg", "signed" ], 
        this.height = 113, this.width = 80, this.elementsContent = [ this._Image1_i(), this.dayTxt_i(), this.head_i(), this.numTxt_i(), this.maskBg_i(), this.signed_i() ];
    }
    e(i, t);
    var n = i.prototype;
    return n._Image1_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 113, e.source = "shoot_atlas.headBg", 
        e.width = 80, e.x = 0, e.y = 0, e;
    }, n.dayTxt_i = function() {
        var e = new eui.Label();
        return this.dayTxt = e, e.anchorOffsetX = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", 
        e.size = 25, e.stroke = 1, e.text = "第一天", e.textAlign = "center", e.touchEnabled = !1, 
        e.verticalAlign = "middle", e.width = 85, e.x = -2, e.y = 0, e;
    }, n.head_i = function() {
        var e = new eui.Image();
        return this.head = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.source = "shoot_atlas.smallProp1", 
        e.x = 15, e.y = 44, e;
    }, n.numTxt_i = function() {
        var e = new eui.Label();
        return this.numTxt = e, e.anchorOffsetX = 0, e.bold = !0, e.fontFamily = "Microsoft YaHei", 
        e.size = 26, e.stroke = 1, e.text = "1", e.textAlign = "center", e.touchEnabled = !1, 
        e.verticalAlign = "middle", e.width = 70, e.x = 6, e.y = 84, e;
    }, n.maskBg_i = function() {
        var e = new eui.Rect();
        return this.maskBg = e, e.alpha = .4, e.anchorOffsetY = 0, e.height = 86, e.width = 80, 
        e.x = 0, e.y = 27, e;
    }, n.signed_i = function() {
        var e = new eui.Image();
        return this.signed = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 42.81, 
        e.source = "shoot_atlas.gouxuan", e.width = 48, e.x = 16, e.y = 55, e;
    }, i;
}(eui.Skin), generateEUI.paths["resource/skins/sign/SignViewSkin.exml"] = window.SignViewSkin = function(i) {
    function n() {
        i.call(this), this.skinParts = [ "titleName", "cellList1", "closeBtn", "signBtn", "getReliveBtn", "goldTxt", "win" ], 
        this.height = 415, this.width = 767, this.elementsContent = [ this.win_i() ];
    }
    e(n, i);
    var a = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.close") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.close", 
            e.percentWidth = 100, e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.horizontalCenter = 0, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), r = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn6") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn6", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 30, e.text = "", e.textColor = 1974874, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), o = function(t) {
        function i() {
            t.call(this), this.skinParts = [ "labelDisplay" ], this.elementsContent = [ this._Image1_i(), this.labelDisplay_i() ], 
            this.states = [ new eui.State("up", []), new eui.State("down", [ new eui.SetProperty("_Image1", "source", "shoot_atlas.btn6") ]), new eui.State("disabled", []) ];
        }
        e(i, t);
        var n = i.prototype;
        return n._Image1_i = function() {
            var e = new eui.Image();
            return this._Image1 = e, e.percentHeight = 100, e.source = "shoot_atlas.btn6", e.percentWidth = 100, 
            e;
        }, n.labelDisplay_i = function() {
            var e = new eui.Label();
            return this.labelDisplay = e, e.bold = !0, e.fontFamily = "Microsoft YaHei", e.horizontalCenter = 0, 
            e.size = 30, e.text = "", e.textColor = 1974874, e.verticalCenter = 0, e;
        }, i;
    }(eui.Skin), s = n.prototype;
    return s.win_i = function() {
        var e = new eui.Group();
        return this.win = e, e.anchorOffsetX = 380, e.anchorOffsetY = 200, e.height = 415, 
        e.width = 767, e.x = 380, e.y = 200, e.elementsContent = [ this._Image1_i(), this._Image2_i(), this.titleName_i(), this._Image3_i(), this._Image4_i(), this.cellList1_i(), this.closeBtn_i(), this.signBtn_i(), this.getReliveBtn_i(), this.goldTxt_i(), this._Image5_i() ], 
        e;
    }, s._Image1_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 388.7, e.scale9Grid = new t.Rectangle(15, 7, 92, 46), 
        e.source = "shoot_atlas.bg4", e.width = 755, e.x = 2, e.y = 24, e;
    }, s._Image2_i = function() {
        var e = new eui.Image();
        return e.anchorOffsetX = 0, e.scale9Grid = new t.Rectangle(81, 2, 10, 45), e.source = "shoot_atlas.title", 
        e.width = 307, e.x = 224, e.y = 0, e;
    }, s.titleName_i = function() {
        var e = new eui.Label();
        return this.titleName = e, e.fontFamily = "Microsoft YaHei", e.size = 30, e.text = "签到领奖", 
        e.textAlign = "center", e.width = 223, e.x = 272, e.y = 8.56, e;
    }, s._Image3_i = function() {
        var e = new eui.Image();
        return e.source = "shoot_atlas.line3", e.width = 690, e.x = 40, e.y = 291.78, e;
    }, s._Image4_i = function() {
        var e = new eui.Image();
        return e.source = "shoot_atlas.line3", e.width = 690, e.x = 40, e.y = 122, e;
    }, s.cellList1_i = function() {
        var e = new eui.Group();
        return this.cellList1 = e, e.anchorOffsetX = 0, e.anchorOffsetY = 0, e.height = 140, 
        e.width = 660, e.x = 58, e.y = 156, e.layout = this._HorizontalLayout1_i(), e;
    }, s._HorizontalLayout1_i = function() {
        var e = new eui.HorizontalLayout();
        return e.gap = 15, e;
    }, s.closeBtn_i = function() {
        var e = new eui.Button();
        return this.closeBtn = e, e.label = "", e.x = 689, e.y = 0, e.skinName = a, e;
    }, s.signBtn_i = function() {
        var e = new eui.Button();
        return this.signBtn = e, e.anchorOffsetX = 104.25, e.anchorOffsetY = 37.35, e.height = 74.69, 
        e.horizontalCenter = 231, e.label = "签到", e.width = 208.5, e.y = 356.26, e.skinName = r, 
        e;
    }, s.getReliveBtn_i = function() {
        var e = new eui.Button();
        return this.getReliveBtn = e, e.anchorOffsetX = 104.25, e.anchorOffsetY = 37.35, 
        e.height = 74.69, e.horizontalCenter = -233, e.label = "领取复活卡", e.width = 208.5, 
        e.y = 355.26, e.skinName = o, e;
    }, s.goldTxt_i = function() {
        var e = new eui.Label();
        return this.goldTxt = e, e.anchorOffsetX = 0, e.fontFamily = "Microsoft YaHei", 
        e.multiline = !1, e.stroke = 1, e.text = "1000", e.textAlign = "left", e.textColor = 16777215, 
        e.touchEnabled = !1, e.width = 200, e.x = 107, e.y = 71, e;
    }, s._Image5_i = function() {
        var e = new eui.Image();
        return e.height = 45, e.source = "shoot_atlas.smallProp1", e.width = 43, e.x = 45, 
        e.y = 63, e;
    }, n;
}(eui.Skin);