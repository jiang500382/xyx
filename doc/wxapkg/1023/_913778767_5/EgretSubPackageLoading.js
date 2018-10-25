function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function n(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

var r = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), o = function(o) {
    function a() {
        e(this, a);
        var n = t(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this));
        return n.addEventListener(egret.Event.ADDED_TO_STAGE, n.onAddToStage, n), a.instance = n, 
        n;
    }
    return n(a, egret.DisplayObjectContainer), r(a, [ {
        key: "onAddToStage",
        value: function() {
            var e = this;
            e.bg = new egret.Bitmap(), e.bg.x = 0, e.bg.y = 0, e.bg.width = e.stage.stageWidth, 
            e.bg.height = e.stage.stageHeight;
            var t = new egret.ImageLoader();
            t.addEventListener(egret.Event.COMPLETE, function(t) {
                var n = t.currentTarget, r = new egret.Texture();
                r.bitmapData = n.data, e.bg.texture = r;
            }, this), t.load("preload/Center_bg.jpg"), e.addChild(e.bg), wx.showLoading({
                title: "加载中...",
                mask: !0
            });
        }
    }, {
        key: "onSuccess",
        value: function() {
            var e = this, t = this.stage;
            a.instance = null;
          var n = new Main();
         //   var n = new main();
            
            t.addChild(n);
             egret.setTimeout(function() {
                t.removeChild(e);
            }, this, 5e3);
        }
    } ]), a;
}();

window.EgretSubPackageLoading = o;