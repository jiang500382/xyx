require("./weapp-adapter.js"), require("./manifest.js"), require("./egret.wxgame.js"), 
egret.wxgame.isSubContext = !0, egret.runEgret({
    entryClassName: "Main",
    orientation: "auto",
    frameRate: 60,
    scaleMode: "fixedWidth",
    contentWidth: 1334,
    contentHeight: 750,
    showFPS: !1,
    fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
    showLog: !0,
    maxTouches: 2,
    renderMode: "canvas",
    audioType: 0,
    calculateCanvasScaleFactor: function(e) {
        var t = e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / t;
    }
});