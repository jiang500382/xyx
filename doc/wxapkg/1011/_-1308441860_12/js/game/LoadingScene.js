!function() {
    function e(t) {
        e.__super.call(this), this.cb = t, this.loadIndex = 0, this.init();
    }
    Laya.class(e, "tyt.LoadingScene", PaoYa.Scene), e.prototype.init = function() {
        var e = new LoadingView();
        this.view = e, this.loadRes();
    }, e.prototype.loadRes = function() {
        RES.baseURL;
        for (var e = [ GameSpine.Role, GameSpine.Anniu, GameSpine.BeiJing, GameSpine.Ready, GameSpine.Result, GameSpine.Star ], t = [], n = 0; n < e.length; n++) {
            var o = e[n];
            t.push({
                url: o.path,
                type: Laya.Loader.BUFFER
            });
        }
        PaoYa.Loader.load(t, this, function() {
            this.preload(e, this.cb);
        }, function(e) {
            this.view.setProgress(e);
        });
    }, e.prototype.preload = function(e, t) {
        var n = this, o = e[this.loadIndex];
        this.loadSpine(o.path, function(a) {
            o.templet = a, n.loadIndex == e.length - 1 ? t && t() : (n.loadIndex++, n.preload(e, t));
        });
    }, e.prototype.loadSpine = function(e, t) {
        var n = new Laya.Templet();
        n.on(Laya.Event.COMPLETE, this, function() {
            t && t(n);
        }), n.on(Laya.Event.ERROR, this, function() {
            console.error("E: Load spine, skin:" + e), error && error();
        }), n.loadAni(e);
    }, e.prototype.destroy = function() {
        PaoYa.Scene.prototype.destroy.call(this), this.cb = null;
    };
}();