var e = window.egret, t = function(e, t, r) {
    e.__class__ = t, r ? r.push(t) : r = [ t ], e.__types__ = e.__types__ ? r.concat(e.__types__) : r;
}, r = function(e, t) {
    function r() {
        this.constructor = e;
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    r.prototype = t.prototype, e.prototype = new r();
}, i = function() {
    function i() {
        this.skinClass = {}, this.euiNormalizeNames = {
            $eBL: "eui.BitmapLabel",
            $eB: "eui.Button",
            $eCB: "eui.CheckBox",
            $eC: "eui.Component",
            $eDG: "eui.DataGroup",
            $eET: "eui.EditableText",
            $eG: "eui.Group",
            $eHL: "eui.HorizontalLayout",
            $eHSB: "eui.HScrollBar",
            $eHS: "eui.HSlider",
            $eI: "eui.Image",
            $eL: "eui.Label",
            $eLs: "eui.List",
            $eP: "eui.Panel",
            $ePB: "eui.ProgressBar",
            $eRB: "eui.RadioButton",
            $eRBG: "eui.RadioButtonGroup",
            $eRa: "eui.Range",
            $eR: "eui.Rect",
            $eRAl: "eui.RowAlign",
            $eS: "eui.Scroller",
            $eT: "eui.TabBar",
            $eTI: "eui.TextInput",
            $eTL: "eui.TileLayout",
            $eTB: "eui.ToggleButton",
            $eTS: "eui.ToggleSwitch",
            $eVL: "eui.VerticalLayout",
            $eV: "eui.ViewStack",
            $eVSB: "eui.VScrollBar",
            $eVS: "eui.VSlider",
            $eSk: "eui.Skin"
        };
    }
    return i.prototype.setData = function(e) {
        this.json = e;
    }, i.prototype.setZipData0 = function(e, t) {
        this.jszip0 = new JSZip(e), this.jszipDic = {}, this.oneKey = t;
    }, i.prototype.setZipData1 = function(e) {
        this.jszip1 = new JSZip(e);
    }, i.prototype.getData = function(e) {
        if (this.json[e]) return this.json[e];
        var t = e.charAt(0).toLowerCase(), r = null;
        if (this.jszipDic[t] || (r = this.oneKey.indexOf(t) > -1 ? this.jszip0.file(t) : this.jszip1.file(t), 
        this.jszipDic[t] = new JSZip(r.asBinary())), null != (r = this.jszipDic[t].file(e))) {
            var i = r.asText(), o = JSON.parse(i);
            return this.jszipDic[t].remove(e), this.json[e] = o, o;
        }
        return null;
    }, i.prototype.generateSkinClass = function(e, i, o) {
        function n() {
            a.call(this), window.JSONParseClass.create(i, this);
        }
        if (!e) return null;
        for (var s = o.split("."), a = window, l = 0, c = s; l < c.length; l++) {
            var h = c[l];
            a = a[h];
        }
        return r(n, a), t(n, i, [ o ]), n;
    }, i.prototype.parseSkinMap = function(e) {
        var t = {};
        for (var r in e) {
            var i = e[r];
            if (i) {
                for (var o = r.split("."), n = window, s = 0, a = o; s < a.length; s++) {
                    var l = a[s], c = n;
                    l !== o[o.length - 1] && void 0 == (n = n[l]) && (n = {}, c[l] = n);
                }
                var h = void 0 == this.euiNormalizeNames[i.$sC] ? i.$sC : this.euiNormalizeNames[i.$sC];
                t[r] = n[o[o.length - 1]] = this.generateSkinClass(i, r, h), e[r].$path && (generateEUI2.paths[e[r].$path] = t[r]);
            }
        }
        return t;
    }, i.prototype.create = function(e, t) {
        if (!this.json) return console.log("Missing json defined by eui resource, please modify the theme adapter"), 
        void console.log("缺少eui资源定义的json，请修改主题适配器");
        this.target = t, this.skinName = e, this.skinClass = this.getData(e), this.applyBase(), 
        this.applySkinParts(), this.applyState(), this.applyBinding(), void 0 == this.skinClass.$sP ? this.target.skinParts = [] : this.target.skinParts = this.skinClass.$sP;
    }, i.prototype.applySkinParts = function() {
        if (void 0 != this.skinClass.$sP) for (var e = 0, t = this.skinClass.$sP; e < t.length; e++) {
            var r = t[e];
            void 0 == this.target[r] && this.createElementContentOrViewport(r);
        }
    }, i.prototype.applyBase = function() {
        void 0 != this.skinClass.$bs && this.addCommonProperty("$bs", this.target);
    }, i.prototype.createElementContentOrViewport = function(t) {
        var r, i = this.getNormalizeEuiName(this.skinClass[t].$t);
        if ("egret.tween.TweenGroup" == i) r = this.creatsEgretTweenGroup(t); else {
            var o = e.getDefinitionByName(i);
            this.$createNewObject(function() {
                r = new o();
            }), this.addCommonProperty(t, r);
        }
        return this.target[t] = r, r;
    }, i.prototype.$createNewObject = function(e) {
        var t = this.skinName, r = this.target;
        e(), this.skinName = t, this.skinClass = this.getData(this.skinName), this.target = r;
    }, i.prototype.creatsEgretTweenGroup = function(e) {
        for (var t = this.createTypeObject(e), r = [], i = 0, o = this.skinClass[e].items; i < o.length; i++) {
            var n = o[i];
            r.push(this.createEgretTweenItem(n));
        }
        return t.items = r, t;
    }, i.prototype.createEgretTweenItem = function(e) {
        var t = this, r = this.createTypeObject(e), i = [], o = this;
        for (var n in this.skinClass[e]) !function(n) {
            var s = o.skinClass[e][n];
            if ("$t" == n || "target" == n) ; else if ("paths" == n) for (var a = 0, l = s; a < l.length; a++) {
                var c = l[a];
                i.push(o.createSetOrTo(c));
            } else "target" == n ? o.$createNewObject(function() {
                r[n] = t.createElementContentOrViewport(s), t.target[s] = r[n];
            }) : r[n] = s;
        }(n);
        return r.paths = i, this.target[e] = r, r;
    }, i.prototype.createSetOrTo = function(e) {
        var t = this.createTypeObject(e);
        for (var r in this.skinClass[e]) {
            var i = this.skinClass[e][r];
            "$t" == r || "target" == r || ("props" == r ? (t[r] = this.createObject(i), this.target[i] = t[r]) : t[r] = i);
        }
        return t;
    }, i.prototype.createObject = function(e) {
        var t = {};
        for (var r in this.skinClass[e]) "$t" == r || "target" == r || (t[r] = this.skinClass[e][r]);
        return t;
    }, i.prototype.addCommonProperty = function(t, r) {
        var i, o, n = this;
        for (var s in this.skinClass[t]) !function(s) {
            var a = n.skinClass[t][s];
            "$t" == s || ("layout" == s ? r[s] = n.createLayout(a) : "$eleC" == s ? i = a : "$sId" == s ? o = a : "scale9Grid" == s ? r[s] = n.getScale9Grid(a) : "skinName" == s ? n.$createNewObject(function() {
                r[s] = a;
            }) : "itemRendererSkinName" == s ? n.$createNewObject(function() {
                for (var e = a.split("."), t = window, i = 0, o = e; i < o.length; i++) t = t[o[i]];
                r[s] = t;
            }) : r[s] = "itemRenderer" == s ? e.getDefinitionByName(a) : "dataProvider" == s ? n.createDataProvider(a) : "viewport" == s ? n.createElementContentOrViewport(a) : a);
        }(s);
        var a = [];
        if (i && i.length > 0) for (var l = 0, c = i; l < c.length; l++) {
            var h = c[l], u = this.createElementContentOrViewport(h);
            a.push(u);
        }
        if (r.elementsContent = a, o && o.length > 0) for (var $ = 0, p = o; $ < p.length; $++) {
            h = p[$];
            this.createElementContentOrViewport(h);
        }
        return r;
    }, i.prototype.createLayout = function(e) {
        var t = this.createTypeObject(e), r = this.skinClass[e];
        for (var i in r) "$t" !== i && (t[i] = r[i]);
        return this.target[e] = t, t;
    }, i.prototype.applyState = function() {
        if (void 0 != this.skinClass.$s) {
            var e = [];
            for (var t in this.skinClass.$s) {
                var r = [], i = this.skinClass.$s[t];
                if (i.$saI) for (var o = 0, n = i.$saI; o < n.length; o++) {
                    var s = n[o];
                    r.push(new eui.AddItems(s.target, s.property, s.position, s.relativeTo));
                }
                if (i.$ssP) for (var a = 0, l = i.$ssP; a < l.length; a++) if ((s = l[a]).name) {
                    var c = s.value;
                    "scale9Grid" == s.name && (c = this.getScale9Grid(s.value)), r.push(new eui.SetProperty(s.target, s.name, c));
                } else r.push(new eui.SetStateProperty(this.target, s.templates, s.chainIndex, this.target[s.target], s.property));
                e.push(new eui.State(t, r));
            }
            this.target.states = e;
        }
    }, i.prototype.applyBinding = function() {
        if (void 0 != this.skinClass.$b) for (var e = 0, t = this.skinClass.$b; e < t.length; e++) {
            var r = t[e];
            void 0 !== r.$bc ? eui.Binding.$bindProperties(this.target, r.$bd, r.$bc, this.target[r.$bt], r.$bp) : eui.Binding.bindProperty(this.target, r.$bd[0].split("."), this.target[r.$bt], r.$bp);
        }
    }, i.prototype.createDataProvider = function(e) {
        if ("" != e) {
            for (var t = this.createTypeObject(e), r = [], i = 0, o = this.skinClass[e].source; i < o.length; i++) {
                var n = o[i];
                r.push(this.createItemRender(n));
            }
            return t.source = r, t;
        }
    }, i.prototype.createItemRender = function(e) {
        var t = this.createTypeObject(e);
        for (var r in this.skinClass[e]) "$t" != r && (t[r] = this.skinClass[e][r]);
        return t;
    }, i.prototype.getNormalizeEuiName = function(e) {
        return this.euiNormalizeNames[e] ? this.euiNormalizeNames[e] : e;
    }, i.prototype.createTypeObject = function(t) {
        var r = this.getNormalizeEuiName(this.skinClass[t].$t);
        return new (e.getDefinitionByName(r))();
    }, i.prototype.getScale9Grid = function(t) {
        var r = t.split(",");
        return new e.Rectangle(parseFloat(r[0]), parseFloat(r[1]), parseFloat(r[2]), parseFloat(r[3]));
    }, i;
}();

window.JSONParseClass = new i(), window.generateEUI2 = {}, generateEUI2.paths = {}, 
generateEUI2.styles = void 0, generateEUI2.skins = {
    DropDown: "resource/eui_skins/dropdown/DropDownSkin.exml",
    EncounterInfoItem: "resource/skins/zaoYu/ZaoYuInfoItem.exml",
    FBChallengePanel: "resource/skins/fb/ChallengeFbSkin.exml",
    FbItem: "resource/skins/fb/DailyFbItemSkin.exml",
    GuanQiaEfficiencyPanel: "resource/skins/checkReward/CheckInfoSkin.exml",
    GuanQiaRewardPanel: "resource/skins/checkReward/GuanqiajiangliSkin.exml",
    ItemBase: "resource/skins/bag/ItemSkin.exml",
    ItemIcon: "resource/skins/bag/ItemIconSkin.exml",
    JingMaiPanel: "resource/skins/jinmai/JinMaiSkin.exml",
    LadderStarListView: "resource/skins/ladder/LadderSratListSkin.exml",
    LadderStarView: "resource/skins/ladder/LadderSratSkin.exml",
    PriceIcon: "resource/eui_skins/PriceIconSkin.exml",
    RoleItem: "resource/skins/bag/ItemSkin.exml",
    RoleSelectPanel: "resource/skins/roleWin/RoleSelectPanelSkin.exml",
    SkillPanel: "resource/skins/skill/SkillSkin.exml",
    ZhuZaiEquipGrowPanel: "resource/skins/zhuzai/ZhuzaiEquipPromoteSkin.exml",
    ZhuZaiFenjiePanel: "resource/skins/zhuzai/ZhuzaiEquipDecomSkin.exml",
    ZhuzaiEquipAdvancePanel: "resource/skins/zhuzai/ZhuzaiEquipAdvanceSkin.exml",
    "eui.Button": "resource/eui_skins/ButtonSkin.exml",
    "eui.CheckBox": "resource/eui_skins/CheckBoxSkin.exml",
    "eui.HScrollBar": "resource/eui_skins/HScrollBarSkin.exml",
    "eui.HSlider": "resource/eui_skins/HSliderSkin.exml",
    "eui.ItemRenderer": "resource/eui_skins/ItemRendererSkin.exml",
    "eui.Panel": "resource/eui_skins/PanelSkin.exml",
    "eui.ProgressBar": "resource/eui_skins/ProgressBarSkin.exml",
    "eui.RadioButton": "resource/eui_skins/RadioButtonSkin.exml",
    "eui.Scroller": "resource/eui_skins/ScrollerSkin.exml",
    "eui.TextInput": "resource/eui_skins/TextInputSkin.exml",
    "eui.ToggleSwitch": "resource/eui_skins/ToggleSwitchSkin.exml",
    "eui.VScrollBar": "resource/eui_skins/VScrollBarSkin.exml",
    "eui.VSlider": "resource/eui_skins/VSliderSkin.exml",
    QuickFightPanel: "resource/skins/gamefightscene/QuickFightPanel.exml",
    BuffItemSkin: "resource/skins/gamefightscene/BuffItemSkin.exml",
    QuickFightRewardSkin: "resource/skins/gamefightscene/QuickFightRewardSkin.exml",
    QuickFightWarningSkin: "resource/skins/gamefightscene/QuickFightWarningSkin.exml",
    PriceIconSKin: "resource/eui_skins/PriceIconSKin.exml",
    PriceYuanbaoIconSkin: "resource/eui_skins/PriceYuanbaoIconSkin.exml",
    Vip3Item: "resource/skins/vip3/Vip3Item.exml"
};

var o = {
    "skins.HScrollBarSkin": {
        $bs: {
            height: 7,
            minHeight: 8,
            minWidth: 20,
            width: 13,
            $eleC: [ "_Image1", "thumb" ]
        },
        _Image1: {
            left: 3,
            right: 3,
            scale9Grid: "7,1,3,1",
            source: "bag_18",
            verticalCenter: 0,
            $t: "$eI"
        },
        thumb: {
            scale9Grid: "6,3,1,1",
            source: "bag_17",
            x: 0,
            y: 0,
            $t: "$eI"
        },
        $sP: [ "thumb" ]
    },
    "skins.ScrollerSkin": {
        $bs: {
            minHeight: 20,
            minWidth: 20,
            $eleC: [ "horizontalScrollBar", "verticalScrollBar" ]
        },
        horizontalScrollBar: {
            bottom: 0,
            percentWidth: 100,
            $t: "$eHSB"
        },
        verticalScrollBar: {
            percentHeight: 100,
            right: -10,
            $t: "$eVSB"
        },
        $sP: [ "horizontalScrollBar", "verticalScrollBar" ]
    },
    "skins.TextInputSkin": {
        $bs: {
            minHeight: 40,
            minWidth: 300,
            $eleC: [ "_Image1", "textDisplay" ],
            $sId: [ "promptDisplay" ]
        },
        _Image1: {
            percentHeight: 100,
            scale9Grid: "47,18,94,10",
            source: "",
            percentWidth: 100,
            $t: "$eI"
        },
        textDisplay: {
            fontFamily: "黑体",
            height: 24,
            left: "10",
            right: "10",
            size: 20,
            textAlign: "center",
            textColor: 16775896,
            verticalCenter: "0",
            percentWidth: 100,
            $t: "$eET"
        },
        promptDisplay: {
            bold: !0,
            fontFamily: "黑体",
            height: 24,
            left: 10,
            right: 10,
            size: 20,
            textAlign: "left",
            textColor: 4069893,
            touchEnabled: !1,
            verticalAlign: "middle",
            verticalCenter: 0,
            percentWidth: 100,
            $t: "$eL"
        },
        $sP: [ "textDisplay", "promptDisplay" ],
        $s: {
            normal: {},
            disabled: {
                $ssP: [ {
                    target: "textDisplay",
                    name: "textColor",
                    value: 16711680
                } ]
            },
            normalWithPrompt: {
                $saI: [ {
                    target: "promptDisplay",
                    property: "",
                    position: 1,
                    relativeTo: ""
                } ]
            },
            disabledWithPrompt: {
                $saI: [ {
                    target: "promptDisplay",
                    property: "",
                    position: 1,
                    relativeTo: ""
                } ]
            }
        }
    },
    "skins.VScrollBarSkin": {
        $bs: {
            height: 13,
            minHeight: 20,
            minWidth: 8,
            width: 7,
            $eleC: [ "_Image1", "thumb" ]
        },
        _Image1: {
            bottom: 3,
            horizontalCenter: 0,
            scale9Grid: "1,7,1,4",
            source: "bag_16",
            top: 3,
            $t: "$eI"
        },
        thumb: {
            scale9Grid: "3,5,1,3",
            source: "bag_15",
            x: 0,
            y: 0,
            $t: "$eI"
        },
        $sP: [ "thumb" ]
    },
    Btn0Skin: {
        $bs: {
            currentState: "up",
            minHeight: 20,
            minWidth: 20,
            $eleC: [ "iconDisplay" ]
        },
        iconDisplay: {
            horizontalCenter: 0,
            pixelHitTest: !0,
            source: "common_btn3_png",
            verticalCenter: 0,
            $t: "$eI"
        },
        $sP: [ "iconDisplay" ],
        $s: {
            up: {},
            down: {
                $ssP: [ {
                    target: "iconDisplay",
                    name: "x",
                    value: 1
                }, {
                    target: "iconDisplay",
                    name: "y",
                    value: 1
                }, {
                    target: "iconDisplay",
                    name: "scaleX",
                    value: .95
                }, {
                    target: "iconDisplay",
                    name: "scaleY",
                    value: .95
                } ]
            },
            disabled: {
                $ssP: [ {
                    target: "iconDisplay",
                    name: "alpha",
                    value: 0
                } ]
            }
        }
    },
    CreateRolItemSkin: {
        $bs: {
            height: 20,
            width: 330,
            $eleC: [ "labelInfo" ]
        },
        labelInfo: {
            anchorOffsetX: 0,
            anchorOffsetY: 0,
            fontFamily: "黑体",
            size: 16,
            stroke: 1,
            text: "玩家名称六字成为贵族领取了1万元宝",
            textAlign: "center",
            textColor: 16777215,
            x: 6,
            y: 2,
            $t: "$eL"
        },
        $sP: [ "labelInfo" ]
    },
    CreateRolSkin: {
        $bs: {
            height: 930,
            width: 540,
            $eleC: [ "bg", "role", "_Group1" ]
        },
        bg: {
            percentHeight: 100,
            source: "createrole_bg0_jpg",
            percentWidth: 100,
            $t: "$eI"
        },
        role: {
            horizontalCenter: 0,
            source: "createrole_role0_png",
            $t: "$eI"
        },
        _Group1: {
            bottom: 21,
            horizontalCenter: 0,
            touchThrough: !0,
            $t: "$eG",
            $eleC: [ "_Image1", "_Image2", "scroller", "_Label1", "timeTxt", "j0", "j1", "sexContainer0", "sexContainer1", "enterGroup", "nameInput", "diceBtn", "createBtn", "effContainer", "_Image3", "_Image4" ]
        },
        _Image1: {
            horizontalCenter: 0,
            source: "createrole_bg1",
            y: 705,
            $t: "$eI"
        },
        _Image2: {
            horizontalCenter: -182,
            source: "createrole_txt1",
            y: 710,
            $t: "$eI"
        },
        scroller: {
            height: 99,
            visible: !1,
            width: 300,
            x: 0,
            y: 506,
            $t: "$eS",
            viewport: "list"
        },
        list: {
            itemRendererSkinName: "CreateRolItemSkin",
            x: 1,
            y: 354,
            $t: "$eLs",
            layout: "_VerticalLayout1",
            dataProvider: "_ArrayCollection1"
        },
        _VerticalLayout1: {
            gap: 5,
            paddingTop: 2,
            $t: "$eVL"
        },
        _ArrayCollection1: {
            $t: "eui.ArrayCollection",
            source: [ "_Object1", "_Object2", "_Object3", "_Object4", "_Object5" ]
        },
        _Object1: {
            label: "数据1",
            $t: "Object"
        },
        _Object2: {
            label: "数据2",
            $t: "Object"
        },
        _Object3: {
            label: "数据3",
            $t: "Object"
        },
        _Object4: {
            label: "null",
            $t: "Object"
        },
        _Object5: {
            label: "null",
            $t: "Object"
        },
        _Label1: {
            fontFamily: "黑体",
            horizontalCenter: 0,
            size: 16,
            stroke: 1,
            text: "角色名字不超过6个字，不能包含空格和敏感字",
            textAlign: "center",
            textColor: 16775896,
            verticalAlign: "middle",
            visible: !1,
            y: 755,
            $t: "$eL"
        },
        timeTxt: {
            fontFamily: "黑体",
            horizontalCenter: 206,
            size: 16,
            stroke: 1,
            text: "20秒后进入游戏",
            textAlign: "center",
            textColor: 3014400,
            verticalAlign: "middle",
            visible: !1,
            y: 789,
            $t: "$eL"
        },
        j0: {
            alpha: 1,
            source: "createrole_btn1_up",
            x: 168,
            y: 604,
            $t: "$eI"
        },
        j1: {
            alpha: 1,
            source: "createrole_btn2_up",
            x: 300,
            y: 604,
            $t: "$eI"
        },
        sexContainer0: {
            height: 0,
            touchChildren: !1,
            touchEnabled: !1,
            width: 0,
            x: 207,
            y: 650,
            $t: "$eG"
        },
        sexContainer1: {
            height: 0,
            touchChildren: !1,
            touchEnabled: !1,
            width: 0,
            x: 339,
            y: 650,
            $t: "$eG"
        },
        enterGroup: {
            anchorOffsetX: 0,
            anchorOffsetY: 0,
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
            visible: !1,
            $t: "$eG",
            $eleC: [ "loadText" ]
        },
        loadText: {
            fontFamily: "黑体",
            horizontalCenter: 0,
            size: 20,
            text: "正在进入游戏（50%）",
            textColor: 14668213,
            verticalCenter: 0,
            y: 21,
            $t: "$eL"
        },
        nameInput: {
            anchorOffsetY: 0,
            enabled: !0,
            height: 34,
            maxChars: 6,
            scaleX: 1,
            scaleY: 1,
            skinName: "skins.TextInputSkin",
            textColor: 16777215,
            width: 254,
            x: 143,
            y: 710,
            $t: "$eTI"
        },
        diceBtn: {
            icon: "createrole_btn2",
            label: "按钮",
            skinName: "Btn0Skin",
            x: 404,
            y: 701,
            $t: "$eB"
        },
        createBtn: {
            horizontalCenter: 0,
            icon: "createrole_btn3",
            label: "按钮",
            skinName: "Btn0Skin",
            y: 760,
            $t: "$eB"
        },
        effContainer: {
            height: 0,
            horizontalCenter: 2,
            touchChildren: !1,
            touchEnabled: !1,
            width: 0,
            y: 798,
            $t: "$eG"
        },
        _Image3: {
            source: "createrole_role1_png",
            visible: !1,
            $t: "$eI"
        },
        _Image4: {
            horizontalCenter: 0,
            source: "createrole_title0",
            y: 847,
            $t: "$eI"
        },
        $sP: [ "bg", "role", "list", "scroller", "timeTxt", "j0", "j1", "sexContainer0", "sexContainer1", "loadText", "enterGroup", "nameInput", "diceBtn", "createBtn", "effContainer" ],
        $s: {
            0: {
                $ssP: [ {
                    target: "j0",
                    name: "source",
                    value: "createrole_btn1_down"
                }, {
                    target: "j1",
                    name: "alpha",
                    value: .6
                }, {
                    target: "sexContainer0",
                    name: "x",
                    value: 207
                }, {
                    target: "sexContainer0",
                    name: "y",
                    value: 650
                }, {
                    target: "sexContainer1",
                    name: "y",
                    value: 650
                }, {
                    target: "sexContainer1",
                    name: "x",
                    value: 272
                } ]
            },
            1: {
                $ssP: [ {
                    target: "role",
                    name: "source",
                    value: "createrole_role1_png"
                }, {
                    target: "j0",
                    name: "alpha",
                    value: .6
                }, {
                    target: "j1",
                    name: "source",
                    value: "createrole_btn2_down"
                } ]
            },
            2: {},
            3: {},
            4: {},
            5: {}
        }
    },
    ServerChooseBtnPic0Skin: {
        $bs: {
            currentState: "up",
            height: 76,
            width: 70,
            $eleC: [ "iconDisplay" ]
        },
        iconDisplay: {
            horizontalCenter: 0,
            source: "serverchoose_btn2",
            verticalCenter: 0,
            $t: "$eI"
        },
        $sP: [ "iconDisplay" ],
        $s: {
            up: {},
            down: {
                $ssP: [ {
                    target: "iconDisplay",
                    name: "scaleX",
                    value: 1.08
                }, {
                    target: "iconDisplay",
                    name: "scaleY",
                    value: 1.08
                } ]
            }
        }
    },
    ServerChooseEnterWinSkin: {
        $bs: {
            height: 930,
            width: 540,
            $eleC: [ "loadBg", "logo", "txt", "barGroup", "enterBtn", "noticeBtn", "storyBtn", "redTip", "_Label1", "verTxt" ]
        },
        loadBg: {
            source: "wxloading_loadbg_jpg",
            x: 0,
            y: 0,
            $t: "$eI"
        },
        logo: {
            left: 0,
            source: "wxloading_logo_png",
            top: 0,
            $t: "$eI"
        },
        txt: {
            horizontalCenter: 0,
            source: "wxloading_txt_png",
            verticalCenter: 0,
            $t: "$eI"
        },
        barGroup: {
            bottom: 250,
            horizontalCenter: 0,
            $t: "$eG",
            $eleC: [ "_Image1", "_Group1" ]
        },
        _Image1: {
            source: "serverchoose_bg1",
            x: 0,
            y: 0,
            $t: "$eI"
        },
        _Group1: {
            horizontalCenter: 0,
            verticalCenter: 0,
            $t: "$eG",
            $eleC: [ "curServerTxt" ]
        },
        curServerTxt: {
            fontFamily: "黑体",
            size: 25,
            text: "传奇1服  选区",
            textColor: 65280,
            verticalCenter: 0,
            x: 0,
            $t: "$eL"
        },
        enterBtn: {
            bottom: 140,
            height: 69,
            horizontalCenter: 0,
            icon: "serverchoose_btn3",
            skinName: "ServerChooseBtnPic0Skin",
            width: 233,
            $t: "$eB"
        },
        noticeBtn: {
            height: 76,
            icon: "serverchoose_btn2",
            right: 20,
            skinName: "ServerChooseBtnPic0Skin",
            top: 90,
            width: 70,
            $t: "$eB"
        },
        storyBtn: {
            height: 76,
            icon: "serverchoose_bg6_png",
            right: 20,
            skinName: "ServerChooseBtnPic0Skin",
            top: 180,
            width: 70,
            $t: "$eB"
        },
        redTip: {
            right: 20,
            source: "serverchoose_bg5_png",
            top: 180,
            $t: "$eI"
        },
        _Label1: {
            bottom: 0,
            height: 100,
            horizontalCenter: 0,
            lineSpacing: 3,
            size: 16,
            text: "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。\n适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。\n文网备字 [2016]M-RPG 4442号\nISBN 978-7-7979-4348-2  新广出审 [2017]728号\n公司名称  ：中文在线数字出版集团股份有限公司",
            textAlign: "center",
            textColor: 8355711,
            width: 500,
            $t: "$eL"
        },
        verTxt: {
            anchorOffsetX: 0,
            lineSpacing: 3,
            right: 5,
            size: 12,
            text: "1.0.0",
            textAlign: "right",
            textColor: 2500134,
            top: 5,
            width: 100,
            $t: "$eL"
        },
        $sP: [ "loadBg", "logo", "txt", "curServerTxt", "barGroup", "enterBtn", "noticeBtn", "storyBtn", "redTip", "verTxt" ]
    },
    ServerChooseItemSkin: {
        $bs: {
            height: 50,
            width: 200,
            $eleC: [ "_Image1", "curServerState", "curServerTxt" ]
        },
        _Image1: {
            anchorOffsetX: 0,
            source: "serverchoose_btn0_up",
            width: 200,
            x: 0,
            y: 0,
            $t: "$eI"
        },
        curServerState: {
            source: "serverchoose_light2",
            x: 168,
            y: 2,
            $t: "$eI"
        },
        curServerTxt: {
            fontFamily: "黑体",
            size: 20,
            text: "修罗武神1服",
            textAlign: "center",
            textColor: 16775663,
            width: 168,
            x: 0,
            y: 14,
            $t: "$eL"
        },
        $sP: [ "curServerState", "curServerTxt" ]
    },
    ServerChooseListWinSkin: {
        $bs: {
            height: 930,
            width: 540,
            $eleC: [ "shadow", "_Group1" ]
        },
        shadow: {
            percentHeight: 100,
            scale9Grid: "2,2,1,1",
            source: "serverchoose_bg0",
            percentWidth: 100,
            x: 0,
            y: 0,
            $t: "$eI"
        },
        _Group1: {
            horizontalCenter: 0,
            verticalCenter: 0,
            $t: "$eG",
            $eleC: [ "_Image1", "_Scroller1", "_Scroller2", "backBtn" ]
        },
        _Image1: {
            anchorOffsetX: 0,
            anchorOffsetY: 0,
            height: 700,
            scale9Grid: "165,85,101,8",
            source: "serverchoose_bg0_jpg",
            x: 0,
            y: 0,
            $t: "$eI"
        },
        _Scroller1: {
            height: 576,
            scrollPolicyH: "off",
            width: 195,
            x: 193,
            y: 51,
            $t: "$eS",
            viewport: "list"
        },
        list: {
            height: 350,
            itemRendererSkinName: "ServerChooseItemSkin",
            x: 0,
            y: 0,
            $t: "$eLs",
            layout: "_VerticalLayout1",
            dataProvider: "_ArrayCollection1"
        },
        _VerticalLayout1: {
            gap: -2,
            $t: "$eVL"
        },
        _ArrayCollection1: {
            $t: "eui.ArrayCollection",
            source: [ "_Object1" ]
        },
        _Object1: {
            $t: "Object"
        },
        _Scroller2: {
            anchorOffsetX: 0,
            anchorOffsetY: 0,
            height: 618,
            x: 26,
            y: 51,
            $t: "$eS",
            viewport: "tab"
        },
        tab: {
            itemRendererSkinName: "ServerChooseTab0Skin",
            $t: "$eT",
            layout: "_VerticalLayout2",
            dataProvider: "_ArrayCollection2"
        },
        _VerticalLayout2: {
            gap: 2,
            $t: "$eVL"
        },
        _ArrayCollection2: {
            $t: "eui.ArrayCollection",
            source: [ "_Object2" ]
        },
        _Object2: {
            name: "",
            $t: "Object"
        },
        backBtn: {
            height: 76,
            icon: "serverchoose_btn1",
            skinName: "ServerChooseBtnPic0Skin",
            width: 77,
            x: 340,
            y: 624,
            $t: "$eB"
        },
        $sP: [ "shadow", "list", "tab", "backBtn" ]
    },
    ServerChooseNoticeWinSkin: {
        $bs: {
            height: 930,
            width: 540,
            $eleC: [ "shadow", "contentGroup" ]
        },
        shadow: {
            percentHeight: 100,
            scale9Grid: "2,2,1,1",
            source: "serverchoose_bg0",
            percentWidth: 100,
            x: 0,
            y: 0,
            $t: "$eI"
        },
        contentGroup: {
            horizontalCenter: 0,
            verticalCenter: 0,
            $t: "$eG",
            $eleC: [ "bg0", "bg1", "scrol" ]
        },
        bg0: {
            height: 700,
            scale9Grid: "54,37,330,8",
            source: "serverchoose_bg3_png",
            x: 0,
            y: 0,
            $t: "$eI"
        },
        bg1: {
            bottom: 5,
            source: "serverchoose_bg2_png",
            x: 47,
            $t: "$eI"
        },
        scrol: {
            height: 590,
            horizontalCenter: 0,
            scrollPolicyH: "off",
            y: 50,
            $t: "$eS",
            viewport: "_Group1"
        },
        _Group1: {
            $t: "$eG",
            $eleC: [ "curServerTxt" ]
        },
        curServerTxt: {
            fontFamily: "黑体",
            lineSpacing: 10,
            multiline: !0,
            size: 18,
            text: "",
            textColor: 16774342,
            width: 400,
            y: 10,
            $t: "$eL"
        },
        $sP: [ "shadow", "bg0", "bg1", "curServerTxt", "scrol", "contentGroup" ]
    },
    ServerChooseStoryWinSkin: {
        $bs: {
            height: 930,
            width: 540,
            $eleC: [ "shadow", "contentGroup" ]
        },
        shadow: {
            percentHeight: 100,
            scale9Grid: "2,2,1,1",
            source: "serverchoose_bg0",
            percentWidth: 100,
            x: 0,
            y: 0,
            $t: "$eI"
        },
        contentGroup: {
            horizontalCenter: 0,
            verticalCenter: 0,
            $t: "$eG",
            $eleC: [ "bg0", "bg1", "scrol" ]
        },
        bg0: {
            height: 700,
            scale9Grid: "54,37,330,8",
            source: "serverchoose_bg4_png",
            x: 0,
            y: 0,
            $t: "$eI"
        },
        bg1: {
            bottom: 5,
            source: "serverchoose_bg2_png",
            x: 47,
            $t: "$eI"
        },
        scrol: {
            height: 590,
            horizontalCenter: 0,
            scrollPolicyH: "off",
            y: 50,
            $t: "$eS",
            viewport: "_Group1"
        },
        _Group1: {
            $t: "$eG",
            $eleC: [ "curServerTxt" ]
        },
        curServerTxt: {
            fontFamily: "黑体",
            lineSpacing: 10,
            multiline: !0,
            size: 18,
            text: "",
            textColor: 16774342,
            width: 400,
            y: 10,
            $t: "$eL"
        },
        $sP: [ "shadow", "bg0", "bg1", "curServerTxt", "scrol", "contentGroup" ]
    },
    ServerChooseTab0Skin: {
        $bs: {
            height: 50,
            width: 151,
            $eleC: [ "_Image1", "labelDisplay" ]
        },
        _Image1: {
            source: "serverchoose_btn2_up",
            $t: "$eI"
        },
        labelDisplay: {
            fontFamily: "黑体",
            size: 20,
            text: "",
            textAlign: "center",
            textColor: 16777215,
            touchEnabled: !1,
            verticalCenter: 0,
            width: 139,
            x: 2,
            $t: "$eL"
        },
        $sP: [ "labelDisplay" ],
        $s: {
            up: {},
            down: {
                $ssP: [ {
                    target: "_Image1",
                    name: "source",
                    value: "serverchoose_btn2_down"
                }, {
                    target: "labelDisplay",
                    name: "textColor",
                    value: 16767359
                } ]
            },
            disabled: {}
        },
        $b: [ {
            $bd: [ "hostComponent.data.name" ],
            $bt: "labelDisplay",
            $bp: "text"
        } ]
    }
};

window.JSONParseClass.setData(o);

var n = {
    "skins.HScrollBarSkin": {
        $path: "resource/eui_skins/HScrollBarSkin.exml",
        $sC: "$eSk"
    },
    "skins.ScrollerSkin": {
        $path: "resource/eui_skins/ScrollerSkin.exml",
        $sC: "$eSk"
    },
    "skins.TextInputSkin": {
        $path: "resource/eui_skins/TextInputSkin.exml",
        $sC: "$eSk"
    },
    "skins.VScrollBarSkin": {
        $path: "resource/eui_skins/VScrollBarSkin.exml",
        $sC: "$eSk"
    },
    Btn0Skin: {
        $path: "resource/eui_skins/btn/Btn0Skin.exml",
        $sC: "$eSk"
    },
    CreateRolItemSkin: {
        $path: "resource/skins/createrole/CreateRolItemSkin.exml",
        $sC: "$eSk"
    },
    CreateRolSkin: {
        $path: "resource/skins/createrole/CreateRolSkin.exml",
        $sC: "$eSk"
    },
    ServerChooseBtnPic0Skin: {
        $path: "resource/skins/serverchoose/ServerChooseBtnPic0Skin.exml",
        $sC: "$eSk"
    },
    ServerChooseEnterWinSkin: {
        $path: "resource/skins/serverchoose/ServerChooseEnterWinSkin.exml",
        $sC: "$eSk"
    },
    ServerChooseItemSkin: {
        $path: "resource/skins/serverchoose/ServerChooseItemSkin.exml",
        $sC: "$eSk"
    },
    ServerChooseListWinSkin: {
        $path: "resource/skins/serverchoose/ServerChooseListWinSkin.exml",
        $sC: "$eSk"
    },
    ServerChooseNoticeWinSkin: {
        $path: "resource/skins/serverchoose/ServerChooseNoticeWinSkin.exml",
        $sC: "$eSk"
    },
    ServerChooseStoryWinSkin: {
        $path: "resource/skins/serverchoose/ServerChooseStoryWinSkin.exml",
        $sC: "$eSk"
    },
    ServerChooseTab0Skin: {
        $path: "resource/skins/serverchoose/ServerChooseTab0Skin.exml",
        $sC: "$eSk"
    }
};

window.JSONParseClass.parseSkinMap(n);