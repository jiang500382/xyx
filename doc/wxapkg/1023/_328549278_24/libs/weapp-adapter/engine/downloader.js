cc.loader.downloader.loadSubpackage = function(a, b) {
    wx.loadSubpackage({
        name: a,
        success: function() {
            b && b();
        },
        fail: function() {
            b && b(new Error("Failed to load subpackage " + a));
        }
    });
};