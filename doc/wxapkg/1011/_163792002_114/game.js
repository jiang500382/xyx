require("./weapp-adapter.js"), require("./platform.js"), require("./manifest.js"), 
require("./egret.wxgame.js"), require("./library/image.js"), require("./library/text.js"), 
require("./library/sound.js"), egret.runEgret({
    entryClassName: "Main",
    orientation: "portrait",
    frameRate: 60,
    scaleMode: "fixedWidth",
    contentWidth: 640,
    contentHeight: 1039,
    showFPS: !1,
    fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
    showLog: !1,
    maxTouches: 2,
    renderMode: "webgl",
    audioType: 0,
    calculateCanvasScaleFactor: function(e) {
        var i = e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / i;
    }
});