require("./weapp-adapter.js"), require("./platform.js"), require("./manifest.js"), 
require("./egret.wxgame.js");

var e = {
    entryClassName: "Main",
    orientation: "auto",
    frameRate: 60,
    scaleMode: "fixedWidth",
    contentWidth: 750,
    contentHeight: 1334,
    showFPS: !1,
    fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
    showLog: !1,
    maxTouches: 2,
    audioType: 0,
    calculateCanvasScaleFactor: function(e) {
        var a = e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / a;
    }
}, a = function() {
    egret.runEgret(e);
};

wx.loadSubpackage ? (require("./EgretSubPackageLoading.js"), e.entryClassName = "EgretSubPackageLoading", 
a(), wx.loadSubpackage({
    name: "stage1",
    success: function() {
        var e = wx.createImage();
        e.onload = function(e) {
            console.log("loaded", e);
        }, e.src = "preload/Center_bg.jpg";
    }
}), wx.loadSubpackage({
    name: "resource",
    success: function() {
        EgretSubPackageLoading.instance.onSuccess();
    }
})) : (require("./stage1/game.js"), a());