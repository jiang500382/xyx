function e(e, o, n) {
    return o in e ? Object.defineProperty(e, o, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[o] = n, e;
}

function o(e, n) {
    if (e) for (var a in e) if ("object" == t(e[a])) "__public" != a && o(e[a], n); else if ("function" == typeof e[a]) ; else if ("appId" == a || "appid" == a || "channel" == a || "fromUserId" == a) {
        var i = e[a] + "";
        null != i && (i = i.replace("#", "%23")), n.push("&" + a + "=" + i);
    } else "scene" == a ? window.sceneId = e[a] : "shareRoleId" == a && (window.shareRoleId = e[a]);
}

function n(e) {
    if (p.indexOf(e) > -1) return e;
    for (var o = -1, n = 0; n < p.length; n++) {
        if (p[n] > e) return p[o];
        o++;
    }
    return -1;
}

var a, t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

require("./weapp-adapter.js"), require("./platform.js"), require("libs/modules/egret/egret.min.js"), 
require("libs/modules/eui/eui.min.js"), require("libs/modules/assetsmanager/assetsmanager.min.js"), 
require("libs/modules/game/game.min.js"), require("libs/modules/socket/socket.min.js"), 
require("libs/modules/tween/tween.min.js"), require("libs/jszip/jszip.min.js"), 
require("libs/zlib/zlib.min.js"), require("./egret.wxgame.js"), require("./zero/game.js"), 
require("./two/game.js"), require("./filesave.js"), wx.showShareMenu({});

var i = wx.getSystemInfoSync(), r = "信息：";

window.mobileInfo = i;

for (var s in i) r += i[s] + "-";

console.log(i), window.srcVersion = "1.0.93|21-9.4.1207", console.log(window.srcVersion), 
window.infoStr = r, window.paraUrl = "index.html?pf=zwwxxyx&hosts=https://xlwxcdn.playtai.com/client/&serverHost=https://xllogin.playtai.com&channelid=34001&v=353";

var l = {
    entryClassName: "Main",
    orientation: "portrait",
    frameRate: 30,
    scaleMode: "fixedNarrow",
    contentWidth: 540,
    contentHeight: 930,
    showFPS: !1,
    fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.1",
    showLog: !1,
    maxTouches: 2,
    renderMode: "webgl",
    audioType: 0,
    calculateCanvasScaleFactor: function(e) {
        var o = e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / o;
    }
};

wx.onError(function(e) {
    console.log("onError"), console.log(e);
});

var c = function() {
    egret.runEgret(l);
}, u = wx.getLaunchOptionsSync();

console.log(u);

var d = [];

o(u, d);

var f = d.join("");

if (console.log(f), window.addParamStr = f, wx.loadSubpackage ? c() : (require("./one/game.js"), 
c()), "function" == typeof wx.getUpdateManager) {
    var w = wx.getUpdateManager();
    w.onCheckForUpdate(function(e) {
        console.log("新版本：" + e.hasUpdate);
    }), w.onUpdateReady(function() {
        w.applyUpdate();
    }), w.onUpdateFailed(function() {});
}

window.showRecharge = function(e, o, a) {
    var t = n(a);
    if (-1 != t) if (console.log("rmb额度:" + t), LocationProperty.isWhite() || LocationProperty.isIgnore() && LocationProperty.isWxgameIos()) if (null == wx.navigateToMiniProgram) window.wx.showModal({
        title: "提示",
        content: "请升级微信至最新版本后，再进行支付",
        showCancel: !1
    }); else {
        var i = "https://apizrzs.h5.91xy.com/wx_youyou/getcommonpayinfo.php";
        LocationProperty.isWxgameIos() && (i = "https://apizrzs.h5.91xy.com/wx_chuangyou/getcommonpayinfo.php"), 
        wx.request({
            url: i,
            data: {
                zoneid: LocationProperty.isWxgameIos() ? 0 : 1,
                server_num: LocationProperty.srvid,
                gameid: 4,
                actorid: o,
                money: t
            },
            success: function(e) {
                console.log(e.data), wx.navigateToMiniProgram({
                    appId: e.data.appid,
                    path: e.data.path,
                    extraData: e.data.extraData,
                    envVersion: e.data.envVersion,
                    success: function(e) {},
                    fail: function(e) {},
                    complete: function(e) {}
                });
            }
        });
    } else WxgameVerData.instance.needbalance = 10 * t, WxgameVerData.instance.isNeedRefresh = !0, 
    wx.checkSession({
        success: function(e) {
            console.log("checkSession--\x3esuccess"), console.log(e), WxgameVerData.instance.getQuerybalance();
        },
        fail: function(e) {
            console.log("checkSession--\x3efail"), console.log(e), WxgameVerData.instance.getRefreshUserToken(WxgameVerData.instance.getQuerybalance);
        }
    }); else window.wx.showModal({
        title: "提示",
        content: "未找到对应的充值套餐",
        showCancel: !1
    });
};

var m = (a = {
    "-1": "系统失败",
    "-2": "支付取消",
    "-15001": "缺少参数",
    "-15002": "参数不合法",
    "-15003": "订单重复",
    "-15004": "后台错误",
    "-15006": "appId 权限被封禁"
}, e(a, "-15006", "货币类型不支持"), e(a, "-15007", "订单已支付"), e(a, "1", "用户取消支付"), e(a, "2", "处于支付中时,请稍后再发起新支付请求"), 
e(a, "3", "手机未安装 Google Play"), e(a, "4", "用户操作系统支付状态异常"), e(a, "5", "操作系统错误"), 
e(a, "6", "其他错误"), e(a, "1000", "参数错误"), e(a, "1003", "米大师Portal错误"), a);

window.lastpaytime = 0, window.requestMidasPayment = function(e) {
    Date.now() - window.lastpaytime < 5e3 || (window.lastpaytime = Date.now(), wx.requestMidasPayment({
        mode: "game",
        env: 0,
        offerId: 1450015992,
        currencyType: "CNY",
        platform: "android",
        buyQuantity: WxgameVerData.instance.needbalance,
        zoneId: 1,
        success: function() {
            console.log("支付成功"), e && e();
        },
        fail: function(e) {
            console.log(e), 1 != e.errCode && -2 != e.errCode && window.wx.showModal({
                title: "提示",
                content: "requestMidasPayment错误码：" + e.errCode + "--\x3e" + m[e.errCode + ""],
                showCancel: !1
            });
        }
    }));
};

var p = [ 1, 3, 6, 8, 12, 18, 25, 30, 40, 45, 50, 60, 68, 73, 78, 88, 98, 108, 118, 128, 148, 168, 188, 198, 328, 648 ];