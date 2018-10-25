var e = window.egret, t = function(e, t, i) {
    e.__class__ = t, i ? i.push(t) : i = [ t ], e.__types__ = e.__types__ ? i.concat(e.__types__) : i;
}, i = function(e, t) {
    function i() {
        this.constructor = e;
    }
    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
    i.prototype = t.prototype, e.prototype = new i();
}, r = function() {
    function r() {
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
    return r.prototype.setData = function(e) {
        if (this.json) {
            this.parseSkinMap(e);
            for (var t in e) this.json[t] = e[t];
        } else this.json = e, this.parseSkinMap(this.json);
    }, r.prototype.generateSkinClass = function(e, r, s) {
        function a() {
            o.call(this), window.JSONParseClass.create(r, this);
        }
        if (!e) return null;
        for (var n = s.split("."), o = window, p = 0, u = n; p < u.length; p++) {
            var h = u[p];
            o = o[h];
        }
        return i(a, o), t(a, r, [ s ]), a;
    }, r.prototype.parseSkinMap = function(e) {
        var t = {};
        for (var i in e) {
            var r = e[i];
            if (r) {
                for (var s = i.split("."), a = window, n = 0, o = s; n < o.length; n++) {
                    var p = o[n], u = a;
                    p !== s[s.length - 1] && void 0 == (a = a[p]) && (a = {}, u[p] = a);
                }
                var h = void 0 == this.euiNormalizeNames[r.$sC] ? r.$sC : this.euiNormalizeNames[r.$sC];
                t[i] = a[s[s.length - 1]] = this.generateSkinClass(r, i, h), e[i].$path && (generateJSON.paths[e[i].$path] = t[i]);
            }
        }
        return t;
    }, r.prototype.create = function(e, t) {
        return this.json ? (this.target = t, this.skinName = e, this.skinClass = this.json[e], 
        this.applyBase(), this.applySkinParts(), this.applyState(), this.applyBinding(), 
        void (void 0 == this.skinClass.$sP ? this.target.skinParts = [] : this.target.skinParts = this.skinClass.$sP)) : (console.log("Missing json defined by eui resource, please modify the theme adapter"), 
        void console.log("缺少eui资源定义的json，请修改主题适配器"));
    }, r.prototype.applySkinParts = function() {
        if (void 0 != this.skinClass.$sP) for (var e = 0, t = this.skinClass.$sP; e < t.length; e++) {
            var i = t[e];
            void 0 == this.target[i] && this.createElementContentOrViewport(i);
        }
    }, r.prototype.applyBase = function() {
        void 0 != this.skinClass.$bs && this.addCommonProperty("$bs", this.target);
    }, r.prototype.createElementContentOrViewport = function(t) {
        var i, r = this.getNormalizeEuiName(this.skinClass[t].$t);
        if ("egret.tween.TweenGroup" == r) i = this.creatsEgretTweenGroup(t); else {
            var s = e.getDefinitionByName(r);
            this.$createNewObject(function() {
                i = new s();
            }), this.addCommonProperty(t, i);
        }
        return this.target[t] = i, i;
    }, r.prototype.$createNewObject = function(e) {
        var t = this.skinName, i = this.target;
        e(), this.skinName = t, this.skinClass = this.json[this.skinName], this.target = i;
    }, r.prototype.creatsEgretTweenGroup = function(e) {
        for (var t = this.createTypeObject(e), i = [], r = 0, s = this.skinClass[e].items; r < s.length; r++) {
            var a = s[r];
            i.push(this.createEgretTweenItem(a));
        }
        return t.items = i, t;
    }, r.prototype.createEgretTweenItem = function(e) {
        var t = this, i = this.createTypeObject(e), r = [], s = this;
        for (var a in this.skinClass[e]) !function(a) {
            var n = s.skinClass[e][a];
            if ("$t" == a || "target" == a) ; else if ("paths" == a) for (var o = 0, p = n; o < p.length; o++) {
                var u = p[o];
                r.push(s.createSetOrTo(u));
            } else "target" == a ? s.$createNewObject(function() {
                i[a] = t.createElementContentOrViewport(n), t.target[n] = i[a];
            }) : i[a] = n;
        }(a);
        return i.paths = r, this.target[e] = i, i;
    }, r.prototype.createSetOrTo = function(e) {
        var t = this.createTypeObject(e);
        for (var i in this.skinClass[e]) {
            var r = this.skinClass[e][i];
            "$t" == i || "target" == i || ("props" == i ? (t[i] = this.createObject(r), this.target[r] = t[i]) : t[i] = r);
        }
        return t;
    }, r.prototype.createObject = function(e) {
        var t = {};
        for (var i in this.skinClass[e]) "$t" == i || "target" == i || (t[i] = this.skinClass[e][i]);
        return t;
    }, r.prototype.addCommonProperty = function(t, i) {
        var r, s, a = this;
        for (var n in this.skinClass[t]) !function(n) {
            var o = a.skinClass[t][n];
            "$t" == n || ("layout" == n ? i[n] = a.createLayout(o) : "$eleC" == n ? r = o : "$sId" == n ? s = o : "scale9Grid" == n ? i[n] = a.getScale9Grid(o) : "skinName" == n ? a.$createNewObject(function() {
                i[n] = o;
            }) : "itemRendererSkinName" == n ? a.$createNewObject(function() {
                for (var e = o.split("."), t = window, r = 0, s = e; r < s.length; r++) t = t[s[r]];
                i[n] = t;
            }) : i[n] = "itemRenderer" == n ? e.getDefinitionByName(o) : "dataProvider" == n ? a.createDataProvider(o) : "viewport" == n ? a.createElementContentOrViewport(o) : o);
        }(n);
        var o = [];
        if (r && r.length > 0) for (var p = 0, u = r; p < u.length; p++) {
            var h = u[p], l = this.createElementContentOrViewport(h);
            o.push(l);
        }
        if (i.elementsContent = o, s && s.length > 0) for (var c = 0, g = s; c < g.length; c++) {
            h = g[c];
            this.createElementContentOrViewport(h);
        }
        return i;
    }, r.prototype.createLayout = function(e) {
        var t = this.createTypeObject(e), i = this.skinClass[e];
        for (var r in i) "$t" !== r && (t[r] = i[r]);
        return this.target[e] = t, t;
    }, r.prototype.applyState = function() {
        if (void 0 != this.skinClass.$s) {
            var e = [];
            for (var t in this.skinClass.$s) {
                var i = [], r = this.skinClass.$s[t];
                if (r.$saI) for (var s = 0, a = r.$saI; s < a.length; s++) {
                    var n = a[s];
                    i.push(new eui.AddItems(n.target, n.property, n.position, n.relativeTo));
                }
                if (r.$ssP) for (var o = 0, p = r.$ssP; o < p.length; o++) if ((n = p[o]).name) {
                    var u = n.value;
                    "scale9Grid" == n.name && (u = this.getScale9Grid(n.value)), i.push(new eui.SetProperty(n.target, n.name, u));
                } else i.push(new eui.SetStateProperty(this.target, n.templates, n.chainIndex, this.target[n.target], n.property));
                e.push(new eui.State(t, i));
            }
            this.target.states = e;
        }
    }, r.prototype.applyBinding = function() {
        if (void 0 != this.skinClass.$b) for (var e = 0, t = this.skinClass.$b; e < t.length; e++) {
            var i = t[e];
            void 0 !== i.$bc ? eui.Binding.$bindProperties(this.target, i.$bd, i.$bc, this.target[i.$bt], i.$bp) : eui.Binding.bindProperty(this.target, i.$bd[0].split("."), this.target[i.$bt], i.$bp);
        }
    }, r.prototype.createDataProvider = function(e) {
        if ("" != e) {
            for (var t = this.createTypeObject(e), i = [], r = 0, s = this.skinClass[e].source; r < s.length; r++) {
                var a = s[r];
                i.push(this.createItemRender(a));
            }
            return t.source = i, t;
        }
    }, r.prototype.createItemRender = function(e) {
        var t = this.createTypeObject(e);
        for (var i in this.skinClass[e]) "$t" != i && (t[i] = this.skinClass[e][i]);
        return t;
    }, r.prototype.getNormalizeEuiName = function(e) {
        return this.euiNormalizeNames[e] ? this.euiNormalizeNames[e] : e;
    }, r.prototype.createTypeObject = function(t) {
        var i = this.getNormalizeEuiName(this.skinClass[t].$t);
        return new (e.getDefinitionByName(i))();
    }, r.prototype.getScale9Grid = function(t) {
        var i = t.split(",");
        return new e.Rectangle(parseFloat(i[0]), parseFloat(i[1]), parseFloat(i[2]), parseFloat(i[3]));
    }, r;
}();

window.JSONParseClass = new r(), window.generateJSON = {}, generateJSON.paths = {}, 
generateJSON.styles = void 0, generateJSON.skins = void 0;