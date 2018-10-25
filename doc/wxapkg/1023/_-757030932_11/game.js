require("./weapp-adapter.js"), require("./platform.js"), require("./manifest.js"), 
require("./egret.wxgame.js"), require("./library/image.js"), require("./library/text.js"), 
egret.runEgret({
    entryClassName: "Main",
    orientation: "landscape",
    frameRate: 60,
    scaleMode: "fixedWidth",
    contentWidth: 1334,
    contentHeight: 750,
    showFPS: !1,
    fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
    showLog: !1,
    maxTouches: 1,
    renderMode: "webgl",
    audioType: 0,
    calculateCanvasScaleFactor: function(e) {
        var i = e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / i;
    }
});