function a(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

var b = function b() {
    a(this, b), this.type = "devicemotion", this.accelerationIncludingGravity = null;
}, c = _cc.inputManager._registerAccelerometerEvent.bind(_cc.inputManager);

_cc.inputManager._registerAccelerometerEvent = function() {
    c(), wx.onAccelerometerChange && wx.onAccelerometerChange(function(a) {
        var c = new b(), d = {};
        d.x = a.x, d.y = a.y, d.z = a.z;
        var e = 10, f = wx.getSystemInfoSync(), g = f.windowWidth, h = f.windowHeight;
        if (h < g) {
            var i = d.x;
            d.x = d.y, d.y = i, d.x *= e, d.y *= -e;
        } else d.x *= -e, d.y *= -e;
        c.accelerationIncludingGravity = d, document.dispatchEvent(c);
    });
};

var d = _cc.inputManager._unregisterAccelerometerEvent.bind(_cc.inputManager);

_cc.inputManager._unregisterAccelerometerEvent = function() {
    d(), wx.stopAccelerometer && wx.stopAccelerometer({
        fail: function() {
            cc.error("unregister AccelerometerEvent failed !");
        },
        success: function() {},
        complete: function() {}
    });
};