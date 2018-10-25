__require = function e(t, i, n) {
    function a(s, r) {
        if (!i[s]) {
            if (!t[s]) {
                var c = s.split("/");
                if (c = c[c.length - 1], !t[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!r && l) return l(c, !0);
                    if (o) return o(c, !0);
                    throw new Error("Cannot find module '" + s + "'");
                }
            }
            var d = i[s] = {
                exports: {}
            };
            t[s][0].call(d.exports, function(e) {
                return a(t[s][1][e] || e);
            }, d, d.exports, e, t, i, n);
        }
        return i[s].exports;
    }
    for (var o = "function" == typeof __require && __require, s = 0; s < n.length; s++) a(n[s]);
    return a;
}({
    AudioManager: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "4e37eI+CcpMl485h/MbPRN8", "AudioManager");
        var n = cc.audioEngine, a = e("../tools/utils");
        window.AMGR = {
            name: "AudioManager",
            bMusicEnabled: !0,
            nMusicValue: 1,
            bSoundEnabled: !0,
            nSoundValue: 1,
            curPlayMusic: {
                handler: null,
                isPlay: !1
            },
            curPlaySound: {
                handler: null,
                isPlay: !1
            },
            setMusicEnable: function(e) {
                this.bMusicEnabled = e, this.bMusicEnabled ? this.resumeMusic() : this.pauseMusic();
            },
            setMusicVolume: function(e) {
                this.nMusicValue = e, n.setVolume(this.curPlayMusic.handler, this.nMusicValue);
            },
            playMusic: function(e, t, i) {
                if (this.bMusicEnabled) {
                    var o = cc.url.raw(e);
                    t || (t = !0), i || (i = this.nMusicValue), this.stopMusic(), this.curPlayMusic.handler = n.play(o, t, i), 
                    this.curPlayMusic.isPlay = !0;
                    var s = a.getUserSetting("music_size", .6);
                    this.setMusicVolume(s);
                }
            },
            pauseMusic: function() {
                null != this.curPlayMusic.handler && this.curPlayMusic.isPlay && (n.pause(this.curPlayMusic.handler), 
                this.curPlayMusic.isPlay = !1);
            },
            resumeMusic: function() {
                this.bMusicEnabled && (null == this.curPlayMusic.handler || this.curPlayMusic.isPlay || (n.resume(this.curPlayMusic.handler), 
                this.curPlayMusic.isPlay = !0));
            },
            stopMusic: function() {
                null != this.curPlayMusic.handler && (n.stop(this.curPlayMusic.handler), this.curPlayMusic.handler = null, 
                this.curPlayMusic.isPlay = !1);
            },
            setSoundEnable: function(e) {
                this.bSoundEnabled = e, this.bSoundEnabled || this.pauseSound();
            },
            setSoundVolume: function(e) {
                this.nSoundValue = e, n.setVolume(this.curPlaySound.handler, this.nSoundValue);
            },
            playSound: function(e, t, i) {
                if (this.bSoundEnabled) {
                    var o = cc.url.raw(e);
                    t || (t = !1), i || (i = this.nSoundValue);
                    var s = a.getUserSetting("sound_size", 1);
                    this.setSoundVolume(s), this.curPlaySound.handler = n.playEffect(o, t, i);
                }
            },
            pauseSound: function() {
                null != this.curPlaySound.handler && this.curPlaySound.isPlay && (n.pause(this.curPlaySound.handler), 
                this.curPlaySound.isPlay = !1);
            },
            resumeSound: function() {
                this.bSoundEnabled && (null == this.curPlaySound.handler || this.curPlaySound.isPlay || (n.resume(this.curPlaySound.handler), 
                this.curPlaySound.isPlay = !0));
            },
            stopSound: function() {
                null != this.curPlaySound.handler && (n.pauseAllEffects(), this.curPlaySound.handler = null, 
                this.curPlaySound.isPlay = !1);
            },
            stopAll: function() {
                this.stopMusic(), this.stopSound(), n.stopAll();
            },
            preloadAudio: function(e, t) {
                n.preload(e, t);
            },
            uncacheAudio: function(e) {
                n.uncache(e);
            },
            uncacheAllAudio: function() {
                n.uncacheAll(file);
            }
        }, cc._RF.pop();
    }, {
        "../tools/utils": "utils"
    } ],
    Bankruptcy: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "403bdvIu/RCA7V2NUl65T6l", "Bankruptcy");
        var n = e("../tools/weixin"), a = e("../Config"), o = e("../common/Common");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.specilFn();
            },
            specilFn: function() {
                if (this.txt4 = cc.find("dialogBg/txt4", this.node), this.btnTxt = cc.find("dialogBg/invite/txt", this.node), 
                this.txt4 && this.btnTxt) {
                    var e = !a.isSpecial;
                    this.txt4.active = e;
                    var t = e ? "分享到群领取" : "领取";
                    this.btnTxt.getComponent(cc.Label).string = t;
                }
            },
            start: function() {},
            initData: function(e) {
                var t = this;
                this.cb = e, this.node.getChildByName("dialogBg").getChildByName("invite").on("click", function() {
                    a.isSpecial ? JavaRequest.bankruptcyGrant2(function() {
                        a.bankruptcyNum--, t.node.active = !1, t.node.destroy(), a.bankruptcyNode = !0, 
                        t.cb(1);
                    }) : a.shareSwitch ? (n.onMenuShareAppMessage({
                        imageNum: 4
                    }), JavaRequest.bankruptcyGrant2(function() {
                        a.bankruptcyNum--, t.node.active = !1, a.bankruptcyNode = !0, t.txt4.getComponent(cc.Label).scheduleOnce(function() {
                            t.node.destroy(), t.cb(1);
                        }, 1);
                    })) : n.onMenuShareAppMessage({
                        imageNum: 4,
                        cbSucc: function(e) {
                            console.log("res === ", e), e.shareTickets ? (console.log("shareTickets === ", e.shareTickets), 
                            wx.getShareInfo({
                                shareTicket: e.shareTickets[0],
                                complete: function(e) {
                                    console.log("encodeData === ", e), JavaRequest.getGoldByBankruptcy(e, function(e) {
                                        console.log("data ===> ", e), a.bankruptcyNum--, t.node.active = !1, t.node.destroy(), 
                                        a.bankruptcyNode = !0, t.cb(1);
                                    });
                                }
                            })) : o.toastTip("分享到群才有效哦！");
                        }
                    });
                }, this), this.node.getChildByName("bgmask").on("click", function() {
                    t.cb(0), t.node.destroy(), a.bankruptcyNode = !0;
                }, this);
            }
        }), cc._RF.pop();
    }, {
        "../Config": "Config",
        "../common/Common": "Common",
        "../tools/weixin": "weixin"
    } ],
    CMDDelay: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "df71c1jA8pBN6oomXbOqRsK", "CMDDelay");
        var n = e("Config"), a = (e("Common"), {
            cmdtable: [],
            dispatch: null,
            runtime: 0,
            delaytime: .6,
            initdispatch: function(e) {
                a.dispatch = e;
            },
            setRuntime: function() {
                a.runtime = Date.now();
            },
            addCMD: function(e) {
                if (0 != n.ingame) {
                    if (a.delaytime = {
                        1: .7,
                        2: .6,
                        3: .5
                    }[n.ActionType], a.cmdtable.push(e), 1 == a.cmdtable.length) {
                        var t = a.cmdtable[0].data, i = a.cmdtable[0].cmd;
                        if (1014 == i || 1026 == i || 1015 == i || 2011 == i) a.runCMD(); else if (1012 == i && 11 == t.action_type && t.seatid == n.ROOMDATA.seatid) a.runCMD(); else {
                            var o = Number(1e3 * (Date.now() - a.runtime) / 1e3);
                            if (o > 1e3 * a.delaytime) a.runCMD(); else {
                                var s = 1e3 * a.delaytime - o;
                                1012 == i && 7 == t.action_type && (s = 1e3 * (1 - 2 * n.actionSpeed)), setTimeout(a.runCMD, s);
                            }
                        }
                    }
                }
            },
            runCMD: function() {
                if (a.cmdtable.length > 0) {
                    a.runtime = Date.now();
                    var e = a.cmdtable[0];
                    a.dispatch.dispach(e.cmd, e.data), a.cmdtable.shift();
                }
                if (a.delaytime = {
                    1: .7,
                    2: .6,
                    3: .5
                }[n.ActionType], a.cmdtable.length > 0) {
                    var t = a.cmdtable[0].data, i = a.cmdtable[0].cmd;
                    if (1014 == i || 1026 == i || 1015 == i || 2011 == i) a.runCMD(); else if (1012 == i && 11 == t.action_type && t.seatid == n.ROOMDATA.seatid) a.runCMD(); else {
                        var o = 1e3 * a.delaytime;
                        1012 == i && 7 == t.action_type && (o = 1e3 * (1 - 2 * n.actionSpeed)), setTimeout(a.runCMD, o);
                    }
                }
            },
            clearCMD: function() {
                a.cmdtable.length = 0, n.ingame = !1;
            }
        });
        t.exports = a, cc._RF.pop();
    }, {
        Common: "Common",
        Config: "Config"
    } ],
    CameraShake: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "82db3zDdeNCV5KEx1cMfTbZ", "CameraShake"), cc.Class({
            extends: cc.Component,
            properties: {
                startShake: {
                    default: !1
                },
                seconds: {
                    default: 50
                },
                started: {
                    default: 0
                },
                quake: {
                    default: 10
                },
                sourceSeconds: {
                    default: .5
                }
            },
            onLoad: function() {
                this.node = window.newObj(new cc.Node(), "cc.Node");
            },
            update: function(e) {},
            getShakePosint: function(e) {
                if (this.started && (this.seconds = this.seconds - 1e3 * e, this.seconds < 0 && (this.startShake = !1, 
                this.started = !1)), this.startShake) {
                    var t = Math.random(), i = Math.random();
                    return cc.v2(this.quake * t, this.quake * i);
                }
                return cc.v2(0, 0);
            },
            ShakeFor: function() {
                this.quake = 30, this.sourceSeconds = 200, this.seconds = this.sourceSeconds, this.started = !0, 
                this.startShake = !0;
            }
        }), cc._RF.pop();
    }, {} ],
    ComRuleView: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b78eeOyBWxJh5a8A8iyRdCK", "ComRuleView");
        var a = e("../common/Common");
        cc.Class({
            extends: cc.Component,
            properties: {
                listView: cc.ScrollView
            },
            onLoad: function() {
                this.title = cc.find("dialogBg/titleNode/title", this.node).getComponent(cc.Label), 
                this.label = this.listView.content.getChildByName("item").getComponent(cc.Label), 
                this.color = new cc.Color(83, 83, 83), this.fontSize = 25, this.lineHeight = 30, 
                this.label.node.color = this.color, this.type = null;
            },
            closeBtnOnClick: function() {
                this.node.destroy();
            },
            init: function(e) {
                this.type = e, 1 == e ? this.initAbout() : 2 == e ? this.initUserAgreement() : 3 == e || 4 == e && this.initParentRule();
            },
            initAbout: function() {
                this.title.string = "关于", this.listView.content.removeAllChildren();
                for (var t = [ "本软件是由深圳市牵手互动网络技术有限公司开发，", "游戏中使用到的金币为游戏道具，不具有任何财产性功能，只限用户本人在游戏中使用。本公司对于用户所拥有的金币不提供任何形式的官方回购、直接或变相兑换现金或实物，相互赠予转让等服务及相关功能。本公司严禁用户之间在游戏中及线下进行任何相互叫卖、转让房金币等行为，如一经查出则永久封号，账户清零。非经本公司授权开发并正式发布的其它任何由本软件衍生的软件均属非法，下载、安装、使用此类软件，将可能导致不可预知的风险，由此产生的一切法律责任与纠纷一概与牵手互动公司无关。", "您不得进行任何侵犯“牵手跑得快”著作权、商标权、商业秘密等全部知识产权的行为，或者进行其他的有损于牵手跑得快其他玩家合法权益的行为，这些行为包括但不限于：", "一、进行任何破坏游戏公平性或其他影响游戏正常秩序的行为，如主动或被动刷分、刷币、导币、合作作弊、使用游戏外挂或者其他的作弊软件、利用漏洞来获得不正当的非法利益，或者利用互联网或其他方式将游戏外挂、作弊软件、漏洞公之于众；", "二、进行任何诸如发布公告、销售商品的商业行为，或者进行任何非法的侵害牵手跑得快利益的行为，如倒卖外挂、金币、游戏道具等行为；" + e("../common/Common").getAppName() + "》（下称本游戏）所订立的权利义务规范。如果您对本协议的任何条款及/或牵手互动随时对其的修改表示异议，您可以选择不进入本游戏；进入本游戏或使用牵手互动服务，则意味着您同意遵守本协议全部约定，包括牵手互动对协议随时所做的任何修改，并完全服从牵手互动的统一管理。", "三、发表、转发、传播含有谩骂、诅咒、诋毁、攻击、诽谤牵手跑得快的，或者含有封建迷信、淫秽、色情、下流、恐怖、暴力、凶杀、赌博、反动、煽动民族仇恨、危害国家统一、颠覆国家政权等让人反感、厌恶的内容的非法言论，或者设置含有上述内容的头像、网名、游戏角色名；本公司有权采取技术和法律措施来防止您从事以上的相关行为，如果您违反约定从事以上三条列明的行为，本公司有权根据情节严重程度对您给与如下的惩处措施：", "3.1 暂时封号，即暂时封停您的游戏账号，使之在封停期限内不能登录牵手跑得快游戏", "3.2 删除赃物，即永久性、不可撤销地将您非法获取的金币、游戏道具等游戏物品删除，或者将其返还给原来的通过合法途径取得其使用权的其他用户", "3.3 清零，即永久性、不可撤销地将您非法获取的积分、等级和荣誉取消或清零", "3.4 删除游戏账号和游戏数据，即永久性、不可撤销地将您的游戏账号及游戏账号内的全部数据删除", "3.5 永久性地终止您登录本软件，包括但不限于微信、QQ号码。", "如本公司对以上相关行为单独制定处罚规则的，则应以该单独制定的处罚规则为准。", "牵手跑得快 版权所有Copyright" ], i = [], n = Math.ceil(t.length / 5), o = 0; o < n; o++) {
                    for (var s = 5 * o, r = s + 5, c = "", l = s; l < r && (l < t.length && t[l]); l++) c += t[l], 
                    l != r - 1 && (c += "\n");
                    i.push(c);
                    var d = a.createSysFont(c, this.fontSize, this.color);
                    d.getComponent(cc.Label).lineHeight = this.lineHeight, d.setContentSize(850, this.lineHeight), 
                    d.parent = this.listView.content, d.anchorX = 0;
                }
            },
            initParentRule: function() {
                this.title.string = "协议", this.label.string = "";
                var e = [];
                e[1] = "“网络游戏未成年人家长监护工程”是由中华人民共和国文化部指导，旨在加强家长对未成年人参与网络游戏的监护，引导未成年人健康、绿色参与网络游戏，和谐家庭关系的社会性公益行动。\n", 
                e[2] = "“家长监护机制”是在这一公益行动中，针对目前未成年人缺乏自控及自律能力，容易陷入沉迷; 少数监护人缺少时间照顾孩子，不能及时监督孩子游戏时间的现状，而推出的一种可由家长实施监控，纠正部分未成年子女沉迷游戏的保护机制。\n", 
                e[3] = "随着网络在青少年中的普及，未成年人接触网络游戏已经成为普遍现象。为保护未成年人健康参与游戏，在政府进一步加强行业管理的前提下，家长也应当加强监护引导。为此，我们为未成年人参与网络游戏提供以下意见：\n", 
                e[4] = "一、主动控制游戏时间。游戏只是学习、生活的调剂，要积极参与线下的各类活动，并让父母了解自己在网络游戏中的行为和体验。\n\n", e[5] = "二、不参与可能耗费较多时间的游戏设置。不玩大型角色扮演类游戏，不玩有PK类设置的游戏。在校学生每周玩游戏不超过2小时，每月在游戏中的花费不超过10元。\n\n", 
                e[6] = "三、不要将游戏当作精神寄托。尤其在现实生活中遇到压力和挫折时，应多与家人朋友交流倾诉，不要只依靠游戏来缓解压力。\n\n", e[7] = "四、养成积极健康的游戏心态。克服攀比、炫耀、仇恨和报复等心理，避免形成欺凌弱小、抢劫他人等不良网络行为习惯。\n\n", 
                e[8] = "五、注意保护个人信息。包括个人家庭、朋友身份信息，家庭、学校、单位地址，电话号码等，防范网络陷阱和网络犯罪。\n\n", e[9] = "特此，提供申请的监督方式为:\n", 
                e[10] = "A、屏蔽账号: 根据监护人意愿屏蔽相关游戏应用登陆。\n\n", e[11] = "B、账号动态监控: 登陆、修改密码等操作将发短信至监护人手机。\n\n", 
                e[12] = "1) 账号已经有认证手机的，将监护人手机替换为认证手机；\n\n", e[13] = "2) 账号未认证手机，将监护人手机绑定成认证手机。\n\n";
                var t = "";
                for (i = 1; i < e.length; i++) t += e[i];
                this.label.node.color = this.color, this.label.fontSize = this.fontSize, this.label.lineHeight = this.lineHeight, 
                this.label.string = t;
            },
            initUserAgreement: function() {
                this.title.string = "用户协议", this.listView.content.removeAllChildren();
                for (var t = [ "《健康游戏忠告》", "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。", "适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。", "严谨恶意利用本游戏进行赌博等违法犯罪行为，一经发现，立即封停账号，并向公安机关举报。", "欢迎使用深圳市牵手互动网络技术有限公司（以下可称“牵手互动”）的游戏服务，请您（以下可称“用户”或“玩家”或“您”）仔细阅读以下条款；如果您未满18周岁，请在法定监护人的陪同下阅读本协议。本协议系您与牵手互动之间就《" + e("../common/Common").getAppName() + "》（下称本游戏）所订立的权利义务规范。如果您对本协议的任何条款及/或牵手互动随时对其的修改表示异议，您可以选择不进入本游戏；进入本游戏或使用牵手互动服务，则意味着您同意遵守本协议全部约定，包括牵手互动对协议随时所做的任何修改，并完全服从牵手互动的统一管理。", "一、定义", "1.1本协议：指本协议正文及其修订版本、本游戏的规则及其修订版本。本协议同时还包括文化补依据《网络游戏管理暂行办法》（文化部令第49号）制订的《网络游戏服务格式化协议必备条款》（详见附录", "1.2游戏规则：指牵手互动不是发布并修订的关于游戏的用户协议、游戏规则、游戏公告及通知、指引、说明问题等内容。", "1.3您：又称“玩家”或“用户”，指接受牵手互动服务的自然人。", "1.4游戏数据：指您在使用牵手互动服务过程中产生的并存储于服务器的各种数据，包括游戏日志、安全日志等。", "二、账号", "2.1本游戏暂仅能通过微信验证登录，未来不排除将引入其他第三方账户体系用于登录本游戏。请您妥善保管你的各类账户和密码，确保账户安全。如您将账户、密码转让、出售或出借予他人使用，或授权他人使用账号，应对被授权人在该账号下发生所有行为负全部责任，" + e("../common/Common").getAppName() + "对您前述行为所造成的任何后果，不承担任何法律责任。", "2.2如果牵手互动在今后自建账号体系，则账户的所有权归牵手互动，您在完成注册申请手续后，仅获得牵手互动账户的使用权。您应提供及时、详尽及准确的个人资料，并不断更新注册信息。因注册信息不真实而导致的问题及后果，牵手互动对此不负任何责任。因黑客行为等第三方因素或用户自身原因导致的账号安全问题，牵手互动对影响玩家不承担任何法律责任。", "2.3您应当通过真实身份信息认证注册账号，且您提交的账号名称、头像和简介等注册信息中中不得出现违法和不良信息，经牵手互动审核，如存在上诉情况，牵手互动将不予注册；同时，在注册后，如发现您以虚假信息骗取账号名称注册，或账号头像、简介等注册信息存在违法和不良信息的，牵手互动有权不经通知单方采取期限改正、暂停使用、注销登记、收回等措施。", "2.4您如果需要使用和享受牵手互动服务，您需要按照《网络游戏管理暂行规定》及文化部《网络游戏服务格式化协议必备条款》的要求，登录实名注册系统并进行实名注册。", "2.5您充分理解并同意：牵手互动会按照国家相关要求将您的实名注册信息运用于防沉迷系统之中，即牵手互动可能会根据您的实名注册信息判断您是否年满18周岁，从而决定是否对您的游戏账号予以防沉迷限制。并且，若您未满18周岁，牵手互动会根据有关规则及您家长的要求对您的账户进行限制。", "2.6如果您长期连续未登陆，您在游戏内的游戏数据可能会由于技术原因删除，对此牵手互动不承担任何责任。", "三、牵手互动服务", "3.1牵手互动将向您提供本游戏作为休闲娱乐之用，牵手互动严禁一切形式的赌博和其他违法犯罪活动，请您适度游戏，牵手互动将与您共同打造绿色的休闲平台。", "3.2在您遵守本协议及相关法律法规的前提下，牵手互动给予您一项不可转让及非排他性的许可，已使用牵手互动服务。您使用牵手互动服务仅可以非商业目的的使用，包括：", "1、接受、下载、安装、启动、升级、登录、显示、运行本游戏；", "2、创建游戏角色，设置角色名（本游戏暂不支持）；查阅游戏规则、用户个人资料、游戏对局结果，开设游戏房间、设置游戏参数，使用聊天功能、社交分享功能；", "3、使用本游戏支持并允许的其他某一项或几项功能。", "3.3本游戏暂不支持任何虚拟币、虚拟物品等。", "3.4你在使用牵手互动的收费功能时，保留对牵手互动进行升级、改版、增加、删除、修改、变更其功能或者变更其游戏规则的权利。用户如果不接受 该等变更的，应当立即停止使用牵手互动；用户继续使用本游戏的行为，视为用户改变后的经营模式。", "3.5为保证玩家的正当利益，牵手互动盗号及盗号相关行为（包括但不限于盗取帐号、游戏数据、为玩家个人资料、协助盗号者操作等）予以严厉打击和处罚。一经查证属实或应有权机关要求，牵手互动有权视具体情况立即采取封号处理等处罚措施，情节严重的，牵手互动保留对涉案玩家追究法律责任的权利。", "3.6如果牵手互动发现或收到他人举报或投诉用户违反本协议约定时，经查证属实，牵手互动有权不经通知随时对相关内容进行删除，并视为情节对违规账号处理包括但不限于警告、限制或禁止使用全部或部分功能、封号甚至终止服务的惩罚。", "3.7您充分理并同意，因您违反本协议或相关规则的规定，导致或产生第三方主张的任何索赔、要求或损失，您应当独立承担责任；牵手互动因此遭受损失的，您也一并赔偿。", "3.8牵手互动可能会通过牵手互动官方网站、牵手互动客服官方网站、客服电话、牵手互动微信公众号、游戏管理员或者其他的途径，向用户诸如游戏规则说明、BUG或外挂投诉、游戏账号锁定或解除锁定、游戏账号申诉、游戏账号暂时封停、游戏账号实名注册信息修改和/或查验等客户服务。", "3.9您可根据游戏当中录像回访，向牵手互动举报本游戏中存在作弊等违规行为，如对处理结果不满意，可申诉一次，申诉的结果为最终判定结果。用户如对最终判定结果不满意，牵手互动有权拒绝用户申诉请求。", "四、用户行为规范", "4.1您充分了解并同意，您必须为自己账号下的一切行为负责，包括您所发表的任何内容以及由此产生的任何后果。您对应本游戏包括您的内容自行加以判断，并承担因使用本游戏而引起的所有风险，包括因对本游戏内容的正确性、完整性或实用性的依赖而产生的风险。牵手互动因前述风险而导致的任何损失或损害承担责任。", "4.2除非法律允许或牵手互动书面许可，您不得（营利或非营利性的）从事下列行为：", "1、通过牵手互动开发、授权的第三方软件、插件、外挂、系统，使用本游戏及牵手互动的其他服务；", "2、制作、发布、传播非牵手互动开发、授权的第三方软件、插件、外挂、系统；", "3、建立有关牵手互动的镜像站点，或者进行网页（络）快照，或者利用架设服务器等方式，为他人提供与本游戏服务完全相同或者类似相同的服务；", "4、对本游戏软件进行反向工程、反向汇编、反向编译或者以其他方式尝试获取软件的源代码；", "5、通过各种方式侵入游戏服务器，干扰服务器的正常运行，接触、拷贝、篡改、增加、删除游戏数据；", "6、使用牵手互动的名称、商标或其他知识产权；", "7、其他未经牵手互动明示授权的行为", "4.3您在使用本游戏服务过程中有如下行为的，牵手互动将视情节严重程度，依据本协议及相关游戏规则规定，对您暂时或永久性地做出禁言（关闭聊天功能）、强制离线、封号（暂停游戏账户）、终止服务器等措施，情节严重的将移交有关机关给予行政处罚，甚至向公安机关举报、追究您的刑事责任：", "1、假冒牵手互动工作人员或其他客户服务人员；", "2、传播非法言论或不当信息，包括使用非法或不当词语、字符等用于角色命名；", "3、对牵手互动工作人员或其他玩家进行辱骂、人身攻击等；不断吵闹、重复发言、不断发布广告、恶意刷屏等，以及恶意连续骚扰他人，影响他人游戏等其他行为；", "4、以任何方式破坏本游戏或影响本游戏服务的正常运行；", "5、各种非法外挂行为；", "6、利用系统的BUG、漏洞为自己及他人牟利；", "7、利用本游戏进行赌博；", "8、侵犯牵手互动的知识产权，或者进行其他有损本游戏或第三方合法权益的行为；", "9、通过各种方式侵入游戏服务器，干扰服务器的正常运行，接触、拷贝、篡改、增加、删除游戏数据；", "10、其他在行业内被广泛认可的不当的行为，无论是否已经被本游戏协议或游戏规则明确列明。", "五、免责声明", "5.1牵手互动可能因游戏软件BUG、版本更新缺陷、运营BUG、第三方病毒攻击或其他任何因素导致您无法登陆账号，或导致您的游戏角色、游戏数据等账号数据发生异常。在数据异常的原因未得到查明前，牵手互动有权暂时冻结该账号；若查明数据异常为非正常游戏行为，您游戏账号数据将可能被恢复至异常发生前的原始状态，牵手互动对此免责。", "5.2对于您从未经牵手互动官方授权合作方购买金币的行为，牵手互动不承担任何责任，并且不受理因任何未经授权的第三方交易发生纠纷而带来的申诉。", "5.3由于互联网服务的特殊性，牵手互动有权根据法律法规的规定及相关主管部门的要求、第三方权利人的投诉举报、与合作方的合作情况，以及牵手互动业务发展情况，随时变更、终端或终止本服务的部分或全部内容。本游戏终止运营后，牵手互动将根据游戏后台数据，向您退还剩余金币或其他所购物品的费用。", "六、知识产权", "6.1牵手互动是本游戏的知识产权权利人。相关的著作权、商标权、专利权、商业秘密等知识产权，以及其他信息内容（包括文字、图片、音频、视频、图表、界面设计、版面框架、有关数据或电子文档等）均受中华人民共和国法律和相应国际条约保护，牵手互动享有上述知识产权，但相关权利人依照法律规定应享有的权利除外。", "6.2牵手互动可能涉及第三方知识产权，而该等第三方对您基于本协议在牵手互动中使用该等知识产权有要求的，您应当一并遵守。", "七、用户信息收集、使用及保护", "7.1您同意并授权牵手互动为履行本协议之目的收集您的用户信息，这些信息包括您在实名注册中注册的信息、您账号下的游戏数据以及其他你在使用本游戏服务的过程中向牵手互动提供的或牵手互动基于安全、用户体验优化等考虑而需收集的信息，牵手互动对您的用户信息的收集将遵循相关法律的规定。", "7.2您充分理解并同意：为更好的向您提供牵手互动服务，牵手互动可以将您的用户信息提交给关联公司，且牵手互动有权自行通过第三方对您的用户信息进行整理、统计、分析及利用。", "7.3您充分理解并同意：牵手互动可以根据您的用户信息，通过短信、电话、邮件等各种方式向您提供关牵手互动的活动信息、推广信息等各类信息。", "7.4牵手互动保证不对外公开或向任何第三方提供您的个人信息，但是存在下列情形之一的除外：", "1、公开或提供相关信息之前获得您许可的；", "2、根据法律或政策的规定而公开或提供的；", "3、只有公开或提供您的个人信息，才能向你提供您需要的牵手互动服务的；", "4、根据国家权力机关要求公开或提供的；", "5、根据本协议其他条款约定而公开或提供的。", "八、管辖与法律适用", "8.1本协议签订地为中华人民共和国深圳市。", "8.2本协议的成立、生效、履行、解释及纠纷解决，适用中华人民共和国大陆地区法律。", "8.3若您和牵手互动之间因本协议发生的任何纠纷或争议，首先应友好协商解决；协商不成的，您同意将纠纷或争议提交至牵手互动住所地有管辖权的人民法院管辖。", "九、协议的变更和生效", "9.1牵手互动有权限根据需要不时修订本协议条款。上述内容已经正式公布即生效。您可以在牵手互动的相关页面查阅最新版本的协议条款。", "9.2本协议条款变更后，如果您继续使用本协议服务，即视为您已接受变更后的协议。如果您不接受变更后协议，应当立即停止使用本协议服务。", "9.3除非本协议另有其他明示规定，牵手互动所推出的新产品、新功能、新服务，均受到本协议之规范。", "附录：《网络游戏服务格式化协议必备条款》", "一、账号注册", "1.1 乙方承诺以其真实身份注册成为甲方的用户，并保证所提供的个人身份资料信息真实、完整、有效，依据法律规定和必备条款约定对所提供的信息承担相应的法律责任。", "1.2 乙方以其真实身份注册成为甲方用户后，需要修改所提供的个人身份资料信息的，甲方应当及时、有效地为其提供该项服务。", "二、用户账号使用与保管 ", "2.1 根据必备条款的约定，甲方有权审查乙方注册所提供的身份信息是否真实、有效，并应积极地采取技术与管理等合理措施保障用户账号的安全、有效；乙方有义务妥善保管其账号及密码，并正确、安全地使用其账号及密码。任何一方未尽上述义务导致账号密码遗失、账号被盗等情形而给乙方和他人的民事权利造成损害的，应当承担由此产生的法律责任。", "2.2乙方对登录后所持账号产生的行为依法享有权利和承担责任。", "2.3 乙方发现其账号或密码被他人非法使用或有使用异常的情况的，应及时根据甲方公布的处理方式通知甲方，并有权通知甲方采取措施暂停该账号的登录和使用。", "2.4 甲方根据乙方的通知采取措施暂停乙方账号的登录和使用的，甲方应当要求乙方提供并核实与其注册身份信息相一致的个人有效身份信息。", "2.4.1 甲方核实乙方所提供的个人有效身份信息与所注册的身份信息相一致的，应当及时采取措施暂停乙方账号的登录和使用。", "2.4.2 甲方违反2.4.1款项的约定，未及时采取措施暂停乙方账号的登录和使用，因此而给乙方造成损失的，应当承担其相应的法律责任。", "2.4.3 乙方没有提供其个人有效身份证件或者乙方提供的个人有效身份证件与所注册的身份信息不一致的，甲方有权拒绝乙方上述请求。", "2.5 乙方为了维护其合法权益，向甲方提供与所注册的身份信息相一致的个人有效身份信息时，甲方应当为乙方提供账号注册人证明、原始注册信息等必要的协助和支持，并根据需要向有关行政机关和司法机关提供相关证据信息资料。", "三、服务的中止与终止", "3.1乙方有发布违法信息、严重违背社会公德、以及其他违反法律禁止性规定的行为，甲方应当立即终止对乙方提供服务。", "3.2乙方在接受甲方服务时实施不正当行为的，甲方有权终止对乙方提供服务。该不正当行为的具体情形应当在本协议中有明确约定或属于甲方事先明确告知的应被终止服务的禁止性行为，否则，甲方不得终止对乙方提供服务。", "3.3乙方提供虚假注册身份信息，或实施违反本协议的行为，甲方有权中止对乙方提供全部或部分服务；甲方采取中止措施应当通知乙方并告知中止期间，中止期间应该是合理的，中止期间届满甲方应当及时恢复对乙方的服务。", "3.4 甲方根据本条约定中止或终止对乙方提供部分或全部服务的，甲方应负举证责任。", "四、用户信息保护  ", "4.1 甲方要求乙方提供与其个人身份有关的信息资料时，应当事先以明确而易见的方式向乙方公开其隐私权保护政策和个人信息利用政策，并采取必要措施保护乙方的个人信息资料的安全。", "4.2未经乙方许可甲方不得向任何第三方提供、公开或共享乙方注册资料中的姓名、个人有效身份证件号码、联系方式、家庭住址等个人身份信息，但下列情况除外： ", "4.2.1 乙方或乙方监护人授权甲方披露的；", "4.2.2 有关法律要求甲方披露的；", "4.2.3 司法机关或行政机关基于法定程序要求甲方提供的；", "4.2.4 甲方为了维护自己合法权益而向乙方提起诉讼或者仲裁时。", "4.2.5 应乙方监护人的合法要求而提供乙方个人身份信息时。" ], i = [], n = Math.ceil(t.length / 10), o = 0; o < n; o++) {
                    for (var s = 10 * o, r = s + 10, c = "", l = s; l < r && (l < t.length && t[l]); l++) c += t[l], 
                    l != r - 1 && (c += "\n");
                    i.push(c);
                    var d = a.createSysFont(c, this.fontSize, this.color);
                    d.getComponent(cc.Label).lineHeight = this.lineHeight, d.setContentSize(850, 1), 
                    d.parent = this.listView.content, d.anchorX = 0;
                }
            }
        }), cc._RF.pop();
    }, {
        "../common/Common": "Common"
    } ],
    Common: [ function(e, t, i) {
        "use strict";
        var n;
        cc._RF.push(t, "d4312+wHGxBF4huEJJ3li0B", "Common");
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        function o(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        var s = e("Config"), r = e("base64_new"), c = e("../tools/weixin"), l = (o(n = {
            loadUrl: {},
            loadAtlas: {},
            waitScene: null,
            staticWarnData: null,
            redPackNode: null,
            load: function() {},
            print: function() {
                function e(e) {
                    function t(e) {
                        for (var t = ""; e > 1; ) t += "┄┄┄┄", e -= 1;
                        return e >= 1 && (t = "├┄┄" + t), t;
                    }
                    return "object" == (void 0 === e ? "undefined" : a(e)) ? function e(i, n, o) {
                        var s = o, r = n;
                        for (var c in i) {
                            var l = i[c];
                            "object" == (void 0 === l ? "undefined" : a(l)) ? n = n + "\n" + t(s) + "[" + c + "]=" + e(l, r, s + 1) : "function" == typeof l || (n = n + "\n" + t(s) + "[" + c + "]=" + l + "(" + (void 0 === l ? "undefined" : a(l)) + ")");
                        }
                        return "{" + n + "\n" + t(s) + "}";
                    }(e, "", 1) : e + "(" + (void 0 === e ? "undefined" : a(e)) + ")";
                }
                var t = "";
                for (var i in arguments) {
                    t = t + "   " + e(arguments[i]);
                }
                cc.sys.BROWSER_TYPE_WECHAT_GAME ? console.log(t) : cc.log(t);
            },
            dump: function(e, t) {
                var i = "", n = "";
                this.isNull(e) ? i += "dump " : i += e + "";
                var o = 0;
                function s(e) {
                    for (var t = "", i = 0; i < e; i++) t += "----";
                    return t;
                }
                return void 0 != t && null != t && (n = function e(t) {
                    var i = "";
                    if ("object" == (void 0 === t ? "undefined" : a(t))) {
                        o += 1;
                        var n = "";
                        for (var r in t) if (t.hasOwnProperty(r)) {
                            var c = t[r];
                            n += "\n" + s(o) + "|" + r + ": " + e(c);
                        }
                        i = "{" + n + " } ", o -= 1;
                    } else i = t + "(" + (void 0 === t ? "undefined" : a(t)) + ")";
                    return i;
                }(t)), i += n, cc.sys.BROWSER_TYPE_WECHAT_GAME ? console.log(i) : cc.log(i), i;
            },
            getDate: function(e) {
                var t = new Date();
                return e && (t = new Date(1e3 * e)), t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + " " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
            },
            getDay: function() {
                var e = new Date(), t = e.getFullYear(), i = e.getMonth();
                i = i > 8 ? "" + (i + 1) : "0" + (i + 1);
                var n = e.getDate();
                return n = n > 9 ? "" + n : "0" + n, parseInt(t + i + n);
            },
            setLoadUrl: function(e, t) {
                this.loadUrl[e] = t;
            },
            isNull: function(e) {
                return void 0 === e || null === e;
            },
            spriteSetTexture: function(e, t) {
                var i = cc.url.raw(t);
                e.spriteFrame.setTexture(i);
            }
        }, "setLoadUrl", function(e, t) {
            this.loadAtlas[e] = t;
        }), o(n, "loadPlistRes", function(e, t) {
            var i = this;
            i.loadAtlas[e] ? t && t(i.loadAtlas[e]) : cc.loader.loadRes(e, cc.SpriteAtlas, function(n, a) {
                i.setLoadUrl(e, a), t && t(a);
            });
        }), o(n, "substring", function(e, t, i) {
            if (void 0 == e || null == e || "" == e) return e;
            for (var n = [], a = "", o = /[^\x00-\xff]/g, s = e.replace(o, "**").length, r = 0; r < s && (null != (a = e.charAt(r).toString()).match(o) ? 2 : 0, 
            !(n.length >= t)); r++) n.push(a);
            var c = "";
            return i && n.length > t && (c += "..."), n.join("") + c;
        }), n);
        l.loadHeadIcon = function(e, t, i, n) {
            var a = -1, o = (i = i || e.node.getScale(), n = e.node.getContentSize(), e.node.getContentSize()), s = o.width * i;
            n.height;
            if ("" != t && null != t && (a = t.indexOf("http")), "" != t && null != t && -1 != a) cc.loader.load({
                url: t,
                type: "png"
            }, function(t, a) {
                var s = new cc.SpriteFrame(a);
                e.spriteFrame = s, o = e.node.getContentSize(), e.node.scale = n.height / o.height * i;
            }); else {
                cc.loader.loadRes("com/textures/default", cc.SpriteFrame, function(t, a) {
                    e.spriteFrame = a, e.node.scale = n.height / o.height * i;
                });
            }
        }, l.setSpriteFrame = function(e, t) {
            cc.loader.load(e, function(e, i) {
                t.spriteFrame = new cc.SpriteFrame(i);
            });
        }, l.getGameMinhuxi = function() {
            var e = s.ROOMDATA.minhuxi;
            return 0 == s.ROOMDATA.minhuxi ? 3 == s.ROOMDATA.peoplenum || 2 == s.ROOMDATA.peoplenum ? e = 9 : 4 == s.ROOMDATA.peoplenum && (e = 3) : 1 == s.ROOMDATA.minhuxi && (e = 6), 
            20 == s.ROOMDATA.gametype && (e = s.ROOMDATA.minhuxi), e;
        }, l.Rad = function(e) {
            return e * Math.PI / 180;
        }, l.GetDistance = function(e, t, i, n) {
            var a = l.Rad(e), o = l.Rad(i), s = a - o, r = l.Rad(t) - l.Rad(n), c = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(s / 2), 2) + Math.cos(a) * Math.cos(o) * Math.pow(Math.sin(r / 2), 2)));
            return c *= 6378.137, c = Math.round(1e4 * c) / 1e4;
        }, l.getPhzStr = function(e, t) {
            t = t || "  ";
            var i = "", n = "", a = "";
            a = this.isNull(e.gamenum) || e.gamenum <= 0 || 2 == e.gametype ? "" : " " + e.gamenum + "局", 
            e.gametype = Number(e.gametype), 5 != e.gametype && 20 != e.gametype && (1 == e.mintang ? i = i + t + "全名堂" : 2 == e.mintang ? i = i + t + "红黑点" : 3 == e.mintang && (i = i + t + "红黑点2倍")), 
            10 == e.gametype && (0 == e.minglongguize ? i = i + t + " 发牌后明龙 " : 1 == e.minglongguize && (i = i + t + " 出牌后明龙 ")), 
            0 == e.fangxing ? 8 == e.gametype ? i = i + t + "翻醒" : 5 == e.gametype && (n = n + t + "翻醒") : 1 == e.fangxing && (8 == e.gametype ? i = i + t + "跟醒" : 5 == e.gametype && (n = n + t + "随醒")), 
            18 == e.gametype && (3 == e.fangxing ? i = i + t + "跟醒 单醒" : 4 == e.fangxing ? i = i + t + "跟醒 双醒" : 5 == e.fangxing ? i = i + t + "翻醒 单醒" : 6 == e.fangxing ? i = i + t + "翻醒 双醒" : 0 == e.fangxing ? i = i + t + "翻醒" : 1 == e.fangxing && (i = i + t + "跟醒")), 
            11 == e.gametype && 0 == e.zzhuang ? i = i + t + "连中" : 1 == e.zzhuang && (i = i + t + "中庄X2");
            if (3 == e.gametype && 0 == e.maxhuxi ? i = i + t + "200息封顶" : 1 == e.maxhuxi && 8 != e.gametype ? 3 == e.gametype ? i = i + t + "400息封顶" : e.gametype : 8 == e.gametype && e.maxhuxi, 
            18 == e.gametype && (0 == e.maxhuxi ? i = i + t + "无上限" : 1 == e.maxhuxi ? i = i + t + "300封顶" : 4 == e.maxhuxi && (i = i + t + "600封顶")), 
            8 != e.gametype && 18 != e.gametype || (0 == e.wangnum ? n = n + t + "双王" : 1 == e.wangnum ? n = n + t + "三王" : 2 == e.wangnum ? n = n + t + "四王" : 3 == e.wangnum ? n = n + t + "无王" : 4 == e.wangnum && (n = n + t + "单王"), 
            2 == e.xianhu && 8 == e.gametype ? n = n + t + "按番限胡" : 3 == e.xianhu && 8 == e.gametype && (n = n + t + "按王限胡"), 
            11 == e.minhuxi && 2 == e.peoplenum && 8 == e.gametype ? n = n + t + "15胡起胡" : 12 == e.minhuxi && 2 == e.peoplenum && 8 == e.gametype && (n = n + t + "21胡起胡"), 
            5 == e.wangcost ? n = n + t + "5分一王" : 10 == e.wangcost && (n = n + t + "10分一王")), 
            2 == e.gametype && (0 == e.lianzhuang ? i = i + t + "连庄" : 1 == e.lianzhuang && (i = i + t + "不连庄"), 
            2 == e.mingtang && (n = n + t + "红黑点"), 150 == e.maxhuxi ? n = n + t + "150息封顶" : 200 == e.maxhuxi ? n = n + t + "200息封顶" : 300 == e.maxhuxi && (n = n + t + "300息封顶")), 
            1 == e.datuo && 7 == e.gametype && (i = i + t + "打坨"), 5 == e.gametype && (1 == e.minscore && (n = n + t + "底2分"), 
            1 == e.m1_5_10 && (n = n + t + "一五十"), 1 == e.mingtang ? n = n + t + "全名堂" : 2 == e.mingtang ? n = n + t + "红黑点" : 3 == e.mingtang && (n = n + t + "红黑点2倍")), 
            1 == e.gametype && (0 == e.tunxi ? n = n + t + "5息1囤" : 1 == e.tunxi && (n = n + t + "3息1囤")), 
            10 == e.gametype || 20 == e.gametype) {
                10 == e.gametype ? 0 == e.minhuxi ? 3 == e.peoplenum || 2 == e.peoplenum ? n = n + t + "9息起胡" : 4 == e.peoplenumb && (n = n + t + "3息起胡") : 1 == e.minhuxi && (n = n + t + "6息起胡") : 20 == e.gametype && (n = n + t + e.minhuxi + "息起胡"), 
                e.zimo && 0 == e.zimo && (n = n + t + "自摸翻倍"), 1 == e.mingtang ? n = n + t + "全名堂" : 2 == e.mingtang && (n = n + t + "红黑点"), 
                null != e.bihu && (n = 0 == e.bihu ? n + t + "点炮必胡" : 1 == e.bihu ? n + t + "有胡必胡" : n + t + "可接炮"), 
                10 == e.gametype ? e.maohu && 1 == e.maohu && (n = n + t + "毛胡") : 20 == e.gametype && (e.maohu && 1 == e.maohu ? n = n + t + "毛胡(10胡)" : e.maohu && 2 == e.maohu && (n = n + t + "毛胡(15胡)")), 
                0 == e.tunxi ? n = n + t + "三息一囤" : 1 == e.tunxi && (n = n + t + "一息一囤");
                var o = "";
                1 == e.piaotype ? o = "飘1/2/3分" : 2 == e.piaotype && (o = "飘2/3/5分"), 0 == e.piaotype ? n = n + t + "不飘" : e.piaotype > 0 && (n = n + t + o);
            }
            return i + n + a;
        }, l.getCardStype = function(e) {
            if (this.isNull(e) || "-" == e || "" == e) return null;
            var t = {};
            return t.num = e.substr(0, 1), t.type = e.substr(-1), t;
        }, l.getCardResName = function(e, t) {
            if (!this.isNull(e)) {
                var i = e.type, n = e.num, a = {
                    T: "tong_0",
                    W: "wang_0",
                    S: "suo_0",
                    Z: {
                        H: "majiang_zhong",
                        B: "majiang_bai",
                        F: "majiang_fa"
                    },
                    F: {
                        E: "majiang_dong",
                        S: "majiang_nan",
                        W: "majiang_xi",
                        N: "majiang_bei"
                    }
                }, o = t = 1 == this.isNull(t) ? "" : t;
                return o += "T" == i || "W" == i || "S" == i ? a[i] + n : a[String(i)][String(n)];
            }
        }, l.stringCardToData = function(e) {
            var t = {
                W: 0,
                T: 10,
                S: 20,
                F: {
                    E: 31,
                    S: 32,
                    W: 33,
                    N: 34
                },
                Z: {
                    H: 0,
                    B: 36,
                    F: 37
                }
            }, i = this.getCardStype(e);
            if (null == i) return i = {
                type: null,
                num: null,
                cardValue: e,
                sortNum: 0
            }, 0;
            i.cardValue = e;
            var n = 0;
            return "Z" == i.type || "F" == i.type ? n = Number(t[i.type][i.num]) : "W" != i.type && "T" != i.type && "S" != i.type || (n = Number(t[i.type]) + Number(i.num)), 
            i.sortNum = n, i;
        }, l.isZhongMa = function(e, t, i) {
            var n = !1;
            return e - t + 1 == i ? n = !0 : e - t + 5 == i ? n = !0 : e - t + 9 == i && (n = !0), 
            n;
        }, l.oneBtnTips = function(t, i) {
            e("../tools/Dialog").create({
                content: t,
                btnstring: [ 1, "确定" ],
                callback: function(e) {
                    void 0 !== i && null !== i && i();
                }
            });
        }, l.removeFromParentClean = function(e, t) {
            e && e[t] && (e[t].removeFromParent(), e[t] = null);
        }, l.redPacketTip = function(e, t, i) {
            null != l.redPackNode && l.redPackNode.isValid && (l.redPackNode.active = !1, l.redPackNode.destroy(), 
            l.redPackNode = null);
            var n = new cc.Node(), a = new cc.Node(), o = new cc.Node(), r = new cc.Node(), d = new cc.Node();
            d.active = !1;
            var h = new cc.Node(), u = new cc.Node(), g = new cc.Node();
            n.addChild(a), n.addChild(o), o.addChild(h), o.addChild(u), o.addChild(r), o.addChild(d), 
            d.addChild(g);
            var m = a.addComponent(cc.Sprite);
            a.width = 3e3, a.height = 780, a.addComponent(cc.Button), m.type = cc.Sprite.Type.SLICED, 
            cc.loader.loadRes("com/textures/2px", cc.SpriteFrame, function(e, t) {
                m.spriteFrame = t, a.width = 3e3, a.height = 780;
            }), cc.loader.loadRes("hall/redPacket/bg_hb", cc.SpriteFrame, function(e, t) {
                o.addComponent(cc.Sprite).spriteFrame = t;
            }), cc.director.getScene() && (cc.director.getScene().getChildByName("Canvas").addChild(n, 1e5), 
            l.maskFadeIn(a, o), l.redPackNode = n);
            var f = h.addComponent(cc.Label);
            h.color = new cc.Color(254, 244, 109), h.position = cc.p(0, -40), f.fontSize = 100, 
            f.lineHeight = 100, f.string = "+" + parseFloat(e).toFixed(2);
            var p = u.addComponent(cc.Label);
            p.string = "微信红包，满额提现", p.lineHeight = 25, p.fontSize = 24, u.color = new cc.Color(162, 36, 21), 
            u.position = cc.p(0, -110);
            var v = s.isSpecial ? "hall/redPacket/btnbg_yellow" : "hall/redPacket/btn_fx";
            cc.loader.loadRes(v, cc.SpriteFrame, function(e, t) {
                if (!e) {
                    var i = r.addComponent(cc.Sprite);
                    s.isSpecial && (i.type = cc.Sprite.Type.SLICED, r.width = 307, r.height = 86), i.spriteFrame = t;
                }
            });
            var C = r.addComponent(cc.Button);
            if (C.transition = cc.Button.Transition.SCALE, C.zoomScale = .9, s.isSpecial) {
                var y = new cc.Node(), S = y.addComponent(cc.Label);
                C.node.addChild(y), y.position = cc.p(0, 9), cc.loader.loadRes("font/btnwen_y", cc.BitmapFont, function(e, t) {
                    e || (S.font = t, S.string = "领取");
                });
            }
            r.position = cc.p(0, s.isSpecial ? -200 : -180);
            var b = d.addComponent(cc.Label);
            b.string = "放弃此红包", b.fontSize = 28, d.color = new cc.Color(146, 145, 145), d.position = cc.p(0, -300);
            var k = g.addComponent(cc.Sprite);
            k.type = cc.Sprite.Type.SLICED, g.width = 200, g.position = cc.p(0, -9), cc.loader.loadRes("hall/redPacket/btn_xian", cc.SpriteFrame, function(e, t) {
                k.spriteFrame = t;
            });
            var w = d.addComponent(cc.Button);
            w.transition = cc.Button.Transition.SCALE, w.zoomScale = .9, r.color = cc.Color.WHITE, 
            C.interactable = !0, cc.loader.loadRes("com/dialog", function(e, t) {
                if (!e) {
                    var i = cc.instantiate(t);
                    i.name = "outTipDialog", cc.find("dialogBg/desclabel", i).getComponent(cc.Label).string = "此红包已领取成功！您今日可领取的闯关奖励已达上限，请明天再来。", 
                    cc.find("dialogBg/redlabel", i).active = !1, cc.find("dialogBg/btn_lan", i).active = !1, 
                    cc.find("dialogBg/btn_yellow", i).x = 0, i.parent = n, i.zIndex = 1e3, i.active = !1;
                }
            }), r.on("click", function() {
                r.color = cc.Color.GRAY, C.interactable = !1, e = "type=3", s.isSpecial ? JavaRequest.getGuanRedpack(null, function(e) {
                    if (1 == e.data[0].isLimit) {
                        var i = n.getChildByName("outTipDialog");
                        i.active = !0, cc.find("dialogBg/btn_yellow", i).on("click", function() {
                            i.active = !1, n.active = !1, n.destroy(), t && t(e);
                        });
                    } else n.active = !1, n.destroy(), t && t(e);
                }, function() {
                    r.color = cc.Color.WHITE, C.interactable = !0;
                }) : s.shareSwitch ? (c.onMenuShareAppMessage({
                    imageNum: 7,
                    queryStr: e
                }), C.scheduleOnce(function() {
                    JavaRequest.getGuanRedpack(null, function(e) {
                        if (1 == e.data[0].isLimit) {
                            var i = n.getChildByName("outTipDialog");
                            i.active = !0, cc.find("dialogBg/btn_yellow", i).on("click", function() {
                                i.active = !1, n.active = !1, n.destroy(), t && t(e);
                            });
                        } else n.active = !1, n.destroy(), t && t(e);
                    }, function() {
                        r.color = cc.Color.WHITE, C.interactable = !0;
                    });
                }, 1)) : c.onMenuShareAppMessage({
                    imageNum: 7,
                    queryStr: e,
                    cbSucc: function(e) {
                        e.shareTickets ? JavaRequest.getGuanRedpack(null, function(e) {
                            if (1 == e.data[0].isLimit) {
                                var i = n.getChildByName("outTipDialog");
                                i.active = !0, cc.find("dialogBg/btn_yellow", i).on("click", function() {
                                    i.active = !1, n.active = !1, n.destroy(), t && t(e);
                                });
                            } else n.active = !1, n.destroy(), t && t(e);
                        }, function() {
                            r.color = cc.Color.WHITE, C.interactable = !0;
                        }) : (l.toastTip("分享到群才有效哦！"), r.color = cc.Color.WHITE, C.interactable = !0);
                    },
                    cbFail: function(e) {
                        r.color = cc.Color.WHITE, C.interactable = !0;
                    }
                });
            }), i ? (d.active = !1, i()) : (d.on("click", function() {
                n.active = !1, JavaRequest.clearGuanInfo(), n.destroy();
            }), b.scheduleOnce(function() {
                d.active = !0;
            }, 3));
        }, l.redPacketTip2 = function() {
            null != l.redPackNode && l.redPackNode.isValid && (l.redPackNode.active = !1, l.redPackNode.destroy(), 
            l.redPackNode = null);
            var e = new cc.Node(), t = new cc.Node(), i = new cc.Node(), n = new cc.Node(), a = new cc.Node();
            i.y = 30, e.addChild(t), e.addChild(i), i.addChild(n), i.addChild(a);
            var o = t.addComponent(cc.Sprite);
            t.width = 3e3, t.height = 780, t.addComponent(cc.Button), o.type = cc.Sprite.Type.SLICED, 
            cc.loader.loadRes("com/textures/2px", cc.SpriteFrame, function(e, i) {
                o.spriteFrame = i, t.width = 3e3, t.height = 780;
            }), cc.loader.loadRes("hall/redPacket/bg_hb", cc.SpriteFrame, function(e, t) {
                i.addComponent(cc.Sprite).spriteFrame = t;
            }), cc.director.getScene() && (cc.director.getScene().getChildByName("Canvas").addChild(e, 1e5), 
            l.maskFadeIn(t, i), l.redPackNode = e);
            var r = n.addComponent(cc.Label);
            n.color = new cc.Color(252, 213, 139), n.position = cc.p(0, -50), r.fontSize = 32, 
            r.lineHeight = 40, r.string = "您已成功提现" + s.moneyData + "元";
            var c = a.addComponent(cc.Label);
            c.string = "请至微信零钱查看", c.lineHeight = 30, c.fontSize = 28, a.color = new cc.Color(162, 36, 21), 
            a.position = cc.p(0, -130), t.on("click", function() {
                e.destroy();
            });
        }, l.toastTip = function(e) {
            var t = new cc.Node(), i = new cc.Node();
            t.addChild(i), i.color = new cc.Color(238, 244, 0);
            var n = i.addComponent(cc.Label), a = t.addComponent(cc.Sprite);
            a.type = cc.Sprite.Type.SLICED, cc.loader.loadRes("com/textures/tipmask", cc.SpriteFrame, function(e, t) {
                a.spriteFrame = t;
            }), n.fontSize = 40, n.string = String(e), t.position = cc.p(0, cc.director.getWinSize().height / 2 * .1), 
            t.zIndex = 1e5, cc.director.getScene() && cc.director.getScene().getChildByName("Canvas").addChild(t), 
            t.runAction(cc.sequence(cc.delayTime(1), cc.spawn(cc.moveBy(.8, cc.p(0, 200)), cc.fadeTo(.8, 0)), cc.callFunc(function() {
                t.destroy();
            })));
        }, l.getAAStr = function() {
            var e = "";
            return void 0 !== s.paytype && null !== s.paytype && 1 == s.paytype && (e = "AA制"), 
            e;
        }, l.setAAValue = function(e) {
            s.paytype = void 0 == e || null == e ? 0 : e;
        }, l.tipAAreduce = function(t) {
            1 != Number(t) || this.isNull(s.aapay) || 0 == s.aapay || 0 != s.aashow || (s.isShowFK && e("../tools/Dialog").create({
                content: "该房间为AA制房间，需要消耗" + s.aapay + "个房卡",
                btnstring: [ 1, "确定" ],
                callback: function(e) {}
            }), s.aashow += 1);
        }, l.tipAAadd = function() {
            this.isNull(s.aapay) || 0 == s.aapay ? s.aashow = 0 : (cc.log("还钱__加加加 = " + s.aapay), 
            s.isShowFK && e("../tools/Dialog").create({
                content: "您之前所在房间已解散，" + s.aapay + "个房卡已退还",
                btnstring: [ 1, "确定" ],
                callback: function(e) {}
            }), s.aapay = 0, s.aashow = 0);
        }, l.createSysFont = function(e, t, i) {
            e = e || "", t = t || 22;
            var n = new cc.Node(), a = n.addComponent(cc.Label);
            return a.string = e, a.fontSize = t, a.overflow = 3, a.fontFamily = "Arial", n.color = i || new cc.Color(255, 255, 255), 
            n;
        }, l.createLabel = function(e, t, i, n) {
            e = e || "", t = t || 22;
            var a = new cc.Node();
            a.color = i || new cc.Color(255, 255, 255), n.addChild(a);
            var o = a.addComponent(cc.Label);
            return o.string = e, o.horizontalAlign = cc.Label.HorizontalAlign.CENTER, o.verticalAlign = cc.Label.VerticalAlign.CENTER, 
            o.fontSize = t, o.overflow = 3, a;
        }, l.createSprite = function(e, t, i) {
            if (t = t || 1, "" != e && null != e) {
                var n = new cc.Node();
                return n.scale = t, cc.loader.loadRes(e, cc.SpriteFrame, function(e, t) {
                    var a = n.addComponent(cc.Sprite);
                    a.spriteFrame = t;
                    var o = {
                        sprite: a
                    };
                    n.attr(o), i && i(n);
                }), n;
            }
        }, l.playFaceAni = function(e, t, i) {
            self.getFaceConfig()[e];
        }, l.getFaceConfig = function() {
            var e = "comgame/chat/faceAnimation/";
            return [ e + "cm/cm", e + "jh/jjinghu", e + "bs/bishi", e + "dx/daxiao", e + "lh/lihai", e + "hzyk/hzyk", e + "zt/zt", e + "jx/jx", e + "dk/dk", e + "se/se", e + "tx/tx", e + "yw/yw", e + "jy/jy", e + "fn/fn", e + "fw/fw", e + "hx/huaixiao", e + "sx/sx", e + "kxbd/kxbd" ];
        }, l.getClubDis = function(e, t, i) {
            var n = "";
            if (0 == this.isNull(e) && 0 != e) {
                var a = "";
                n = " 茶馆ID:" + e, 0 == this.isNull(t) && "" != t && (a = ' "' + (a = this.substring(t, 4, !0)) + '"的茶馆'), 
                0 == this.isNull(i) && "" != i && (a = " 茶馆名:" + this.substring(t, 4, !0)), n = a + "" + n;
            }
            return n;
        }, l.getLackPeople = function(e, t) {
            var i = {
                1: "一",
                2: "二",
                3: "三",
                4: "四"
            }, n = "", a = Number(e) - Number(t);
            return a > 0 && (n = i[t] + "缺" + i[a]), n;
        }, l.getAppName = function() {
            return "牵手跑得快";
        }, l.getShareUrl = function(t) {
            var i = e("base64_new"), n = "", a = {};
            a.roomid = t.roomid, a.jushu = t.ju, a.type = t.type, a.sesskey = s.USER.sesskey, 
            a.wanfa = i.encode(t.wanfa), a.roomtitle = i.encode(t.titleStr), a.roomInfo = i.encode(t.clubInfo), 
            a.pure = 2, a.pType = t.gametype, a = e("../tools/utils").getSign(a);
            for (var o = Object.keys(a), r = 0; r < o.length; r++) {
                var c = o[r];
                n = n + c + "=" + a[c] + "&";
            }
            var l = "";
            return l = "" != n ? n.substr(0, n.length - 1) : n, s.API_URL_JAVA_ADDROOM + "/api/shareLink/joinViewUi.html?" + l;
        }, l.listenCanvasRotate = function(e) {
            cc.director.getScene().on("canvasRotation", function(t) {
                e && e(s.canvasRotation), cc.log("画布监听旋转 = " + s.canvasRotation);
            });
        }, l.getFiltration = function(t) {
            if (void 0 != this.staticWarnData && null != this.staticWarnData || (this.staticWarnData = e("../common/StaticWarnData")), 
            t) {
                for (var i = t, n = 0; n < this.staticWarnData.length; n++) {
                    var a = this.staticWarnData[n];
                    if (-1 != i.search(a)) {
                        var o = new RegExp(a, "g");
                        i = i.replace(o, "*");
                    }
                }
                return i;
            }
            return "";
        }, l.loadUrlImage = function(e, t, i, n, a) {
            cc.loader.load({
                url: t,
                type: "jpg"
            }, function(t, o) {
                if (cc.log("网络图片err = " + t + " , texture = ", o), null != t || null == o) cc.loader.loadRes("com/textures/default", cc.SpriteFrame, function(t, n) {
                    e.spriteFrame = n, i && "head" == i ? l.setHeadSize(e) : i && "headInvite" == i ? l.setHeadSize(e, 1) : i && "RecordBig" == i ? l.setHeadSize(e, 2) : i && "RecordSmall" == i && l.setHeadSize(e, 3);
                }), a && a(); else {
                    var s = new cc.SpriteFrame(o);
                    e.spriteFrame = s, i && "head" == i ? l.setHeadSize(e) : i && "headInvite" == i ? l.setHeadSize(e, 1) : i && "RecordBig" == i ? l.setHeadSize(e, 2) : i && "RecordSmall" == i && l.setHeadSize(e, 3), 
                    n && n();
                }
            });
        }, l.setHeadSize = function(e, t) {
            var i = cc.size(121, 121);
            t && 1 == t ? i = cc.size(102, 102) : t && 2 == t ? i = cc.size(68, 68) : t && 3 == t && (i = cc.size(60, 60));
            var n = 1 * e.node.getContentSize().width, a = i.height / n;
            e.node.scale = 1 * a;
        }, l.getMjRoomCfg = function(e) {
            var t = {};
            if (e.club_name && "" != e.club_name) {
                t = r.decode(e.club_name);
                var i = JSON.parse(t);
                i.cname ? e.clubname = r.decode(i.cname) : e.clubname = "", i.dname ? e.clubnamed = r.decode(i.dname) : e.clubnamed = "";
            } else e.clubname = "", e.clubnamed = "";
            return e;
        }, l.random = function(e, t) {
            return Math.floor(Math.random() * (t - e + 1) + e);
        }, l.isJsonString = function(e) {
            try {
                if ("object" == a(JSON.parse(e))) return !0;
            } catch (e) {}
            return !1;
        }, l.isNullNode = function(e) {
            return void 0 == e || null == e || 1 != e.isValid;
        }, l.switchScene = function(t, i) {
            if (0 == s.isNetworkConnect && (this.waitScene = null), console.log(s.curSceneName + ">>>>>" + t), 
            s.curSceneName != t) {
                cc.director.preloadScene(t, function() {}), cc.director.loadScene(t, function(n) {
                    l.sceneLog("loadScene error=====" + n), s.curSceneName = t, i && void 0 != i && "string" != typeof i && e("../net/SendCMD").sendPaodekuaiCreatRoom_new(i), 
                    l.sceneLog(t + "切场景成功"), i && i.cbFn && i.cbFn();
                });
            } else console.log("当前场景 切换到 当前场景时，return");
        }, l.preloadOtherScene = function(e) {
            for (var t = [ "PdkScene" ], i = function(i) {
                var n = t[i];
                e != n && s.curSceneName != n && cc.director.preloadScene(n, function() {
                    cc.log("[[[[preload scene over]]]] =  " + n);
                });
            }, n = 0; n < t.length; n++) i(n);
        }, l.sceneLog = function(e) {
            l.dump("=================== " + e + " ===================" + l.getDate());
        }, l.gotoGameScene = function(e) {
            l.switchScene("PdkScene", e);
        }, l.combination = function(e) {
            var t = [];
            return function e(i, n, a) {
                for (var o = i[n = n || 0], s = (a = a || [], n); s < i.length; s++) i[s] != o && a.push([ o, i[s] ]), 
                s == i.length - 1 && e(i, n + 1, a), n == i.length - 1 && (t = a);
            }(e), l.dump("两两组合 = ", t), t;
        }, l.countDistence = function(e, t, i, n) {
            var a = l.getDistance(e, t, i, n);
            return a <= 1 ? parseFloat(1e3 * a).toFixed(0) + "m" : parseFloat(a).toFixed(3) + "km";
        }, l.getDistance = function(e, t, i, n) {
            var a = 3.141592653589793, o = a / 180 * e, s = a / 180 * i, r = a / 180 * t, c = a / 180 * n;
            return 6377.393 * Math.acos(Math.sin(o) * Math.sin(s) + Math.cos(o) * Math.cos(s) * Math.cos(c - r));
        }, l.getPlayerDisStr = function(e, t) {
            var i = e[0].split(","), n = t[0].split(",");
            return i[0] && "" != i[0] && 0 != Number(i[0]) && n[0] && "" != n[0] && 0 != Number(n[0]) ? l.countDistence(i[0], i[1], n[0], n[1]) : "";
        }, l.getSelectOpera = function(e, t) {
            var i = {
                1: 1,
                2: 2,
                3: 4,
                4: 8,
                5: 16,
                6: 32,
                7: 64,
                8: 128,
                9: 256,
                10: 512,
                11: 1024,
                12: 2048,
                13: 4096,
                14: 8192,
                15: 16384
            };
            return i[t] == (e & i[t]);
        }, l.countValidArryLength = function(e) {
            var t = 0;
            for (var i in e) {
                var n = e[i];
                void 0 != n && null != n && t++;
            }
            return t;
        }, l.getTimeMS = function(e) {
            if (null != e && void 0 != e) {
                var t = "", i = Math.floor(e / 60);
                t = i < 10 ? t + "0" + i + ":" : t + i + ":";
                var n = parseInt(e % 60);
                return n < 10 ? t = t + "0" + n : t += n, t;
            }
            return "";
        }, l.createRoomView = function(e, t) {
            console.log("是否有创房节点", DMGER.createRoomNode), l.isNullNode(DMGER.createRoomNode) ? RESOURCE.getPrefab("hallCreateRoom", function(i) {
                DMGER.createRoomNode = cc.instantiate(i), e && e(DMGER.createRoomNode, !0), cc.game.addPersistRootNode(DMGER.createRoomNode), 
                DMGER.createRoomNode.zIndex = 1, t && t(DMGER.createRoomNode, !0);
            }) : (console.log("创房节点已存在，直接显示"), DMGER.createRoomNode.active = !0, e && e(DMGER.createRoomNode, !1), 
            t && t(DMGER.createRoomNode, !1));
        }, l.createPiaoBtn = function(e, t, i) {
            var n = new cc.Node(), a = n.addComponent(cc.Sprite), o = n.addComponent(cc.Button);
            o.transition = cc.Button.Transition.SCALE, o.duration = .05, o.zoomScale = .9;
            var s = new cc.Node();
            s.y = 5;
            var r = s.addComponent(cc.Sprite);
            if (s.parent = n, 0 == e) a.spriteFrame = t[3], r.spriteFrame = t[1]; else {
                a.spriteFrame = t[2], r.spriteFrame = t[0];
                var c = new cc.Node();
                c.fontSize = 40, c.lineHeight = 50, c.y = 5, c.addComponent(cc.Label).string = String(e), 
                c.parent = n;
            }
            a.type = cc.Sprite.Type.SLICED, a.sizeMode = cc.Sprite.SizeMode.CUSTOM, n.width = 180;
            return n.once("click", function(t) {
                cc.log("飘 = " + e), i && i(Number(e));
            }), n;
        }, l.showPiaoView = function(e, t, i, n, a, o) {
            var s = new cc.Node();
            s.parent = cc.director.getScene().getChildByName("Canvas"), s.zIndex = 1, s.position = cc.p(0, -100);
            for (var r = 0; r < t.length; r++) {
                var c = this.createPiaoBtn(t[r], i, a);
                c.parent = s, c.x = 100 + 200 * (r - t.length / 2);
            }
            n = n || 10;
            var l = new cc.Node();
            l.color = cc.Color.YELLOW, l.parent = s, l.position = cc.p(200 * t.length / 2 + 50, 5);
            var d = l.addComponent(cc.Label);
            d.fontSize = 50, d.lineHeight = 60, d.string = "(" + n + ")";
            return e.schedule(function e() {
                (n -= 1) >= 0 ? d.string = "(" + n + ")" : (cc.log("取消计时器"), this.unschedule(e), 
                o && o());
            }, 1), s;
        }, l.isFullScreen = function() {
            var e = cc.director.getWinSize(), t = !1;
            return e && e.width && e.height && e.width / e.height > 1.78 && (t = !0), t;
        }, l.getFullScreenValue = function() {
            var e = 0;
            return 1 == l.isFullScreen() && (e = cc.director.getWinSize().width / 2 - 640), 
            e;
        }, l.createKFbtn = function() {
            if (!l.kfnode || !l.kfnode.isValid) {
                var t = new cc.Node("kefu");
                cc.game.addPersistRootNode(t), t.zIndex = 100, t.position = cc.p(0, cc.director.getWinSize().height / 2);
                var i = t.addComponent(cc.Sprite);
                cc.loader.loadRes("com/textures/icon_kefu", cc.SpriteFrame, function(e, t) {
                    e || (i.spriteFrame = t);
                }), t.addComponent(cc.Button), t.on("click", function() {
                    0 == t.x ? (t.stopAllActions(), t.runAction(cc.sequence(cc.moveTo(.3, cc.p(45, t.getPositionY())), cc.callFunc(function() {
                        t.x = 45;
                    }), cc.delayTime(2), cc.moveTo(.3, cc.p(0, t.getPositionY())), cc.callFunc(function() {
                        t.x = 0;
                    })))) : 45 == t.x && e("../tools/weixin").customerService();
                }, this), l.kfnode = t;
            }
        }, l.deepClone = function(e) {
            var t = e instanceof Array ? [] : {};
            if ("object" !== (void 0 === e ? "undefined" : a(e))) return e;
            for (var i in e) t[i] = "object" === a(e[i]) ? deepClone(e[i]) : e[i];
            return t;
        }, l.numberThousands = function(e) {
            if (!(e < 1e5)) {
                var t = parseFloat(parseInt(e / 100) / 100);
                return t += "万";
            }
            var i = e.toString(), n = "";
            if (e >= 0) for (;i.length > 3; ) n = "," + i.slice(-3) + n, i = i.slice(0, i.length - 3); else for (;i.length - 1 > 3; ) n = "," + i.slice(-3) + n, 
            i = i.slice(0, i.length - 3);
            if (i) return i + n;
        }, l.maskFadeIn = function(e, t) {
            var i = cc.fadeIn(.4);
            e.opacity = 0, e.runAction(i);
            var n = cc.scaleBy(.2, 1.22, 1.22), a = cc.scaleBy(.1, .9, .9);
            t.runAction(cc.sequence(cc.callFunc(function() {
                t.scaleX = .9, t.scaleY = .9;
            }), n, a));
        }, l.stopEvent = function(e) {
            e instanceof cc.Node && (e.on("touchstart", function(e) {
                e.stopPropagation();
            }), e.on("touchend", function(e) {
                e.stopPropagation();
            }));
        }, l.clickNode = function(e, t, i) {
            if (e instanceof cc.Node) {
                var n = e.getComponent(cc.Button);
                if (n) return n.transition = cc.Button.Transition.SCALE, n.duration = .1, n.zoomScale = .9, 
                void e.on("click", function() {
                    t && t();
                });
                e.on(cc.Node.EventType.TOUCH_START, function(t) {
                    i || (e.scale = .9);
                }), e.on(cc.Node.EventType.TOUCH_CANCEL, function(t) {
                    i || (e.scale = 1);
                }), e.on(cc.Node.EventType.TOUCH_END, function(n) {
                    i || (e.scale = 1), t && t();
                });
            }
        }, l.playAnim = function(e, t, i, n) {
            if (e instanceof cc.Node) {
                var a = e.getComponent(cc.Animation);
                if (a) if (a.play(t), n) {
                    if (i) {
                        var o = a.defaultClip.duration;
                        e.runAction(cc.sequence(cc.delayTime(o), cc.callFunc(function() {
                            i(e);
                        })));
                    }
                } else i && a.on("finished", function() {
                    i(e);
                });
            }
        }, t.exports = l, cc._RF.pop();
    }, {
        "../common/StaticWarnData": "StaticWarnData",
        "../net/SendCMD": "SendCMD",
        "../tools/Dialog": "Dialog",
        "../tools/utils": "utils",
        "../tools/weixin": "weixin",
        Config: "Config",
        base64_new: "base64_new"
    } ],
    Config: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "7c80el1xCBBgqRQKBBbANkB", "Config");
        var n = {
            ServerType: 2,
            isNewServer: !0,
            platform: 2,
            gp: 102,
            channel: 3e3,
            isIphoneX: !1,
            isNetworkConnect: !0,
            isShowFK: !0,
            curGuan: 0,
            curSceneName: "LoginScene",
            loginResult: !1,
            fromMyProgram: !1,
            isGetDailyGift: null,
            signInData: null,
            server: [],
            port: [],
            cardAtlas: null,
            resIndex: "cards3",
            cards3: {
                handSize: cc.size(98, 90),
                littleSize: cc.size(94, 94),
                medSize: cc.size(98, 120)
            },
            cards0: {
                handSize: cc.size(76, 90),
                littleSize: cc.size(94, 94),
                medSize: cc.size(75, 111)
            },
            isGoToRoom: !1,
            roomType: "0",
            isShareInHall: !1,
            isHave1100: !1,
            actionSpeed: .15,
            ActionType: 1,
            updatePaiTotal: 3,
            updatePaiStyle: 1,
            GameStatus: 0,
            ChuChoose: 1,
            gamecount: 0,
            saveRoomId: 0,
            istotalover: !1,
            isOpenAgentEnterGame: !1,
            isOpenZhanjiAndRank: "0",
            automactiOpenRoom: "1",
            openHouse: "1",
            openRoomFlow: "1",
            isPrivate: !0,
            xfkNum: 2,
            justOne: !0,
            readedMsgId: [],
            nowClubId: 0,
            isOpenFreeze: !1,
            isOldAgent: 0,
            isOpenClub: !0,
            IsOpenReplay: !1,
            aapay: 0,
            aashow: 0,
            canvasRotation: 180,
            orientation: null,
            cb: null,
            cbother: [],
            outTipAni: !0,
            location: "",
            pdkAutoTip: !0,
            isDialogOk: !1,
            bankruptcyNum: 0,
            nowPlayRank: 1,
            haveSwitchFunc: !1,
            nowOpenView: null,
            nowFlag: 0,
            shareRoomId: 0,
            videoAd: null,
            daojuTimeCall: null,
            daojuTime: 100,
            daojuTotleNum: 1,
            bankruptcyNode: !0,
            headCardType: 0,
            moneyData: 0,
            getAdNum: 2,
            isFaPaiBug: !0,
            isSpecial: !1,
            showMatchTime: !0,
            shareSwitch: !1,
            weChatVersion: 201,
            playerMids: [ 0, 0, 0 ],
            isFromHallSeeAd: !0,
            USER: {
                mid: 55510,
                sesskey: "55510-1516882143135-102-23dd7256f75e9b1f9865fd9615b24989-0-17",
                vip: 0,
                sex: 1,
                sign: "",
                city: "",
                ip: "66.66.66.66",
                istester: 0,
                name: "My",
                is_show: 1,
                isAdmin: 1,
                icon: "",
                location: "",
                diamonds: 0
            },
            fastMsg: [ "我等的假花儿都谢了！", "真怕猪一样的队友！", "一走一停真有型，一秒一卡好潇洒。", "我炸你个桃花朵朵开！", "姑娘，你真是条汉子。", "风吹鸡蛋壳，牌去人安乐。", "搏一搏，单车变摩托。", "炸得好！" ],
            shareImages: [ "http://qsupload.longzupoker.com/upload/img/20180821/20180821f60f9108-dbf1-4ab8-b306-3cd49b6011d1.png", "http://qsupload.longzupoker.com/upload/img/20180808/20180808649a0383-f741-411b-a1e5-9ae1a5446053.png", "http://qsupload.longzupoker.com/upload/img/20180821/20180821f60f9108-dbf1-4ab8-b306-3cd49b6011d1.png", "http://qsupload.longzupoker.com/upload/img/20181010/20181010fc41f66e-c573-4ac2-b824-98385a24e75e.jpg", "http://qsupload.longzupoker.com/upload/img/20181010/20181010075cd8ae-8f9f-4df0-9d23-ed6b22ba8e7a.jpg", [ "http://qsupload.longzupoker.com/upload/img/20180823/2018082334792dd8-0dd5-43bf-a1e0-11c9a7f2c71c.jpg", "http://qsupload.longzupoker.com/upload/img/20180823/20180823b2f9c878-c5e2-47ce-8268-de11ed714bc0.jpg", "http://qsupload.longzupoker.com/upload/img/20180823/20180823e85b2c80-1b12-4d50-b89b-9269f30f58d8.jpg" ], "http://qsupload.longzupoker.com/upload/img/20181010/201810104a848bef-969c-4fe9-aa11-c6a1c14821ae.jpg", "http://qsupload.longzupoker.com/upload/img/20181010/20181010fc38c216-0f6c-40e3-9479-1b94d55b384f.jpg" ],
            shareTitle: [ "有319856人这样子可以领取红包", "[有人@你]你有10元红包未领取", "有319856人这样子可以领取红包", "对不起，牌好就是可以为所欲为", "西红柿首富一晚上花10亿，一觉醒来竟然…", "房已开好!就差你了!", "这关怎么过，玩到我怀疑人生~迫不得已到这求助", "邀请你一起玩游戏领红包" ],
            aLevel: [ "青铜", "白银", "黄金", "铂金", "钻石", "星耀", "超凡大师" ],
            bLevel: [ "初级", "中级", "高级", "特级", "大师" ],
            myALevel: 1,
            myBLevel: 1,
            myLevelStar: 1,
            minlimits: {},
            historyMsgData: [],
            inviteTimeData: {},
            msgData: {},
            ROOMDATA: {},
            API_URL_JAVA_ADDROOM: "",
            API_URL_JAVA_ACTIVITY: "",
            API_URL_JAVA: "",
            API_UPLOAD: "",
            mjtype: {
                1: "60",
                7: "61"
            },
            openGameTypes: [ 1, 2, 10, 20, 12, 24, 81 ]
        };
        cc.sys.isMobile && !cc.sys.BROWSER_TYPE_WECHAT_GAME || (n.canvasRotation = 0), cc.log("ServerTypeeeee" + n.ServerType), 
        0 == n.ServerType ? (n.API_URL_JAVA = "http://192.168.1.128:8080/happyapp", n.API_UPLOAD = "https://datacenter.qqsgame.com/datacenter/dataCenter/dataCenterLogDispatch.html") : 1 == n.ServerType ? (n.API_URL_JAVA = "https://testgdsc.qqsgame.com/happyapp", 
        n.API_UPLOAD = "https://datacenter.qqsgame.com/datacenter/dataCenter/dataCenterLogDispatch.html") : 2 == n.ServerType && (n.API_URL_JAVA = "https://minigame.qqsgame.com/happyapp", 
        n.API_UPLOAD = "https://datacenter.qqsgame.com/datacenter/dataCenter/dataCenterLogDispatch.html"), 
        t.exports = n, cc._RF.pop();
    }, {} ],
    DailyGiftPopup: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "8f8f5j/wNZH+rGenlraeN4H", "DailyGiftPopup");
        var n = e("../Config");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {},
            getUseNode: function() {
                var e = this.node.getChildByName("viewNode");
                this.btnReward = e.getChildByName("btnReward"), this.btnReward.on("click", this.onClsickGet, this), 
                this.btnReward.active = !n.isGetDailyGift, this.btnClose = e.getChildByName("btnClose"), 
                this.btnClose.on("click", this.onClose, this);
            },
            setData: function(e) {
                this.getUseNode(), e && e.cbFun && (this.cbFun = e.cbFun);
            },
            onClsickGet: function() {
                var t = this;
                !0 === n.fromMyProgram ? (e("../tools/Loading").create(), JavaRequest.dailyLoginBonus(null, function(i) {
                    e("../tools/Loading").close(), t.cbFun && t.cbFun(i), t.onClose();
                })) : e("../tools/Dialog").create({
                    content: "从“我的小程序”中进入游戏才可以领取奖励哦~",
                    btnstring: [ 1, "确定" ]
                });
            },
            onClose: function() {
                this.node.removeFromParent(), this.node.destroy();
            }
        }), cc._RF.pop();
    }, {
        "../Config": "Config",
        "../tools/Dialog": "Dialog",
        "../tools/Loading": "Loading"
    } ],
    DataManager: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "fde4abyY+dGBrxDXxU+Q4hb", "DataManager");
        var n = e("Config"), a = e("Common");
        window.DMGER = {
            name: "DataManager",
            roomCfg: [],
            hasTotleOverNode: !1,
            hasSmallOverNode: !1,
            fkstoreConfig: [],
            zsstoreConfig: [],
            fieldConfig: null,
            getShopConfig: function() {
                var e = this;
                JavaRequest.getStore({
                    sesskey: n.USER.sesskey,
                    gameType: 5
                }, function(t) {
                    var i = t;
                    if (1 == i.svflag) {
                        var n = JSON.parse(i.data.diamondGold).content.diamondGold.item;
                        for (var o in n) if (n.hasOwnProperty(o)) {
                            var s = n[o];
                            e.setShopConfig(o, s["@attributes"]);
                        }
                        var r = JSON.parse(i.data.diamondStore).content.diamondStore.item;
                        for (var c in r) if (r.hasOwnProperty(c)) {
                            var l = r[c];
                            e.setzsShopConfig(c, l["@attributes"]);
                        }
                    } else a.print("----GET ROOM CONFIG ERROR----");
                });
            },
            getRoomConfig: function() {
                var e = this;
                JavaRequest.getRoomConfig(function(t) {
                    var i = t;
                    if (1 == i.svflag) {
                        var n = i.data, o = JSON.parse(n).content.room.item;
                        for (var s in o) if (o.hasOwnProperty(s)) {
                            var r = o[s];
                            e.setRoomConfig(s, r["@attributes"]);
                        }
                    } else a.print("----GET ROOM CONFIG ERROR----");
                });
            },
            setRoomConfig: function(e, t) {
                12 == t.type && (t.name = "15张玩法"), this.roomCfg[e] = t;
            },
            setShopConfig: function(e, t) {
                this.fkstoreConfig[e] = t;
            },
            setzsShopConfig: function(e, t) {
                this.zsstoreConfig[e] = t;
            },
            getFieldConfig: function(e, t) {
                var i = this;
                0 == t ? this.fieldConfig ? e && e(this.fieldConfig) : JavaRequest.redPackInfo({
                    type: 2
                }, function(t) {
                    var n = t.data[0].configs;
                    i.setFieldConfig(n), e && e(n);
                }) : JavaRequest.redPackInfo({
                    type: 2
                }, function(t) {
                    var n = t.data[0].configs;
                    i.fieldConfig ? n != i.fieldConfig && (i.setFieldConfig(n), e && e(n)) : (i.setFieldConfig(n), 
                    e && e(n));
                });
            },
            setFieldConfig: function(e) {
                this.fieldConfig = e;
            },
            setMsgData: function(e, t) {
                this.fastMsg[e] = t;
            },
            setHasTotleOverNode: function(e) {
                this.hasTotleOverNode = e;
            },
            getHasTotleOverNode: function() {
                return this.hasTotleOverNode;
            },
            setHasSmallOverNode: function(e) {
                this.hasSmallOverNode = e;
            },
            getHasSmallOverNode: function() {
                return this.hasSmallOverNode;
            },
            getPDKRoomDescInfo: function(e, t, i) {
                if (a.isNull(e)) return "";
                var n = [];
                if ("gamename" == (t = 1 == a.isNull(t) ? "str" : t)) return "跑得快";
                if (e.PaiNum && n.push(e.PaiNum + "张"), e.innings && n.push(e.innings + "局"), e.peopleNum && n.push(e.peopleNum + "人"), 
                0 == e.is3cFirst ? n.push("每局黑桃3先出") : n.push("赢家先出"), 1 == e.shouju3cFirst && n.push("首局黑桃3必出"), 
                1 == e.isShowRetainCard ? n.push("显示剩余牌数") : n.push("不显示剩余牌数"), a.getSelectOpera(e.SelectWanFa1, 1) && n.push("炸弹不可拆"), 
                a.getSelectOpera(e.SelectWanFa1, 4) && n.push("红桃10扎鸟"), a.getSelectOpera(e.SelectWanFa1, 3) && n.push("允许四带三"), 
                1 == e.piao ? n.push("飘1/2/3") : 2 == e.piao && n.push("飘2/3/5"), 1 == e.coverCard && n.push("首轮盖牌"), 
                "arr" == t) return n;
                var o = "";
                return o = 0 == a.isNull(i) ? n.join(i) : n.join(" "), a.dump("str = ", o), o;
            }
        }, cc._RF.pop();
    }, {
        Common: "Common",
        Config: "Config"
    } ],
    Dialog: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "ad4a93kzItM6Zw/raY71yQK", "Dialog");
        var n = function() {
            return function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var i = [], n = !0, a = !1, o = void 0;
                    try {
                        for (var s, r = e[Symbol.iterator](); !(n = (s = r.next()).done) && (i.push(s.value), 
                        !t || i.length !== t); n = !0) ;
                    } catch (e) {
                        a = !0, o = e;
                    } finally {
                        try {
                            !n && r.return && r.return();
                        } finally {
                            if (a) throw o;
                        }
                    }
                    return i;
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }(), a = e("Common"), o = {}, s = null, r = -1, c = {};
        o.init = function() {
            RESOURCE.getPrefab("comDialog");
        }, o.create = function(e) {
            cc.sys.platform == cc.sys.ANDROID ? s && s.isValid ? (o.close(), o.show(e)) : RESOURCE.getPrefab("comDialog", function(t) {
                o.close(), s = cc.instantiate(t), cc.game.addPersistRootNode(s), s.zIndex = 2, s.getChildByName("dialogBg").getChildByName("btn_close").on("click", o.callback.bind(this, 2)), 
                s.getChildByName("dialogBg").getChildByName("btn_yellow").on("click", o.callback.bind(this, 0)), 
                s.getChildByName("dialogBg").getChildByName("btn_lan").on("click", o.callback.bind(this, 1)), 
                s.getChildByName("bgmask").on("click", o.callback.bind(this, 2)), o.show(e);
            }) : cc.loader.loadRes("com/dialog", function(t, i) {
                o.close(), s = cc.instantiate(i), cc.game.addPersistRootNode(s), s.zIndex = 2, s.getChildByName("dialogBg").getChildByName("btn_close").on("click", o.callback.bind(this, 2)), 
                s.getChildByName("dialogBg").getChildByName("btn_yellow").on("click", o.callback.bind(this, 0)), 
                s.getChildByName("dialogBg").getChildByName("btn_lan").on("click", o.callback.bind(this, 1)), 
                s.getChildByName("bgmask").on("click", o.callback.bind(this, 2)), o.show(e);
            });
        }, o.show = function(e) {
            c = e, a.maskFadeIn(s.getChildByName("bgmask"), s.getChildByName("dialogBg"));
            var t = cc.find("dialogBg/desclabel", s);
            t.active = !1;
            var i = cc.find("dialogBg/redlabel", s);
            i.active = !1, e.content && (t.active = !0, t.getComponent(cc.Label).lineHeight = t.getComponent(cc.Label).fontSize + 5, 
            t.getComponent(cc.Label).string = e.content), e.redcontent && (i.active = !0, i.getComponent(cc.Label).string = e.redcontent), 
            o.setbtn_yellow(e.btnstring), o.setbtn_lan(e.btnstring), s && !s.parent && (cc.game.addPersistRootNode(s), 
            s.zIndex = 2), e.calltime && (r = setInterval(o.callTimeFun, 1e3), o.callTimeFun()), 
            void 0 !== e.closevisible && null !== e.closevisible ? s.getChildByName("dialogBg").getChildByName("btn_close").active = e.closevisible : s.getChildByName("dialogBg").getChildByName("btn_close").active = !0, 
            void 0 !== e.yellowvisible && null !== e.yellowvisible ? s.getChildByName("dialogBg").getChildByName("btn_yellow").active = e.yellowvisible : s.getChildByName("dialogBg").getChildByName("btn_yellow").active = !0;
        }, o.setbtn_yellow = function(e) {
            var t = n(e, 3), i = t[0], a = t[1], o = t[2];
            a && !o ? (s.getChildByName("dialogBg").getChildByName("btn_yellow").x = 0, s.getChildByName("dialogBg").getChildByName("btn_lan").active = !1, 
            s.getChildByName("dialogBg").getChildByName("btn_yellow").active = !0) : (s.getChildByName("dialogBg").getChildByName("btn_lan").active = !0, 
            s.getChildByName("dialogBg").getChildByName("btn_yellow").active = !0, s.getChildByName("dialogBg").getChildByName("btn_yellow").x = 154, 
            s.getChildByName("dialogBg").getChildByName("btn_lan").x = -154), null == i || 1 == i ? (s.getChildByName("dialogBg").getChildByName("btn_yellow").getChildByName("label").active = !1, 
            s.getChildByName("dialogBg").getChildByName("btn_yellow").getChildByName("spriteFrame").active = !0) : (a = a || "确定", 
            s.getChildByName("dialogBg").getChildByName("btn_yellow").getChildByName("label").active = !0, 
            s.getChildByName("dialogBg").getChildByName("btn_yellow").getChildByName("label").getComponent(cc.Label).string = a, 
            s.getChildByName("dialogBg").getChildByName("btn_yellow").getChildByName("spriteFrame").active = !1);
        }, o.setbtn_lan = function(e) {
            var t = n(e, 3), i = t[0], a = (t[1], t[2]);
            null == i || 1 == i ? (s.getChildByName("dialogBg").getChildByName("btn_lan").getChildByName("label").active = !1, 
            s.getChildByName("dialogBg").getChildByName("btn_lan").getChildByName("spriteFrame").active = !0) : (a = a || "取消", 
            s.getChildByName("dialogBg").getChildByName("btn_lan").getChildByName("label").active = !0, 
            s.getChildByName("dialogBg").getChildByName("btn_lan").getChildByName("label").getComponent(cc.Label).string = a, 
            s.getChildByName("dialogBg").getChildByName("btn_lan").getChildByName("spriteFrame").active = !1);
        }, o.callTimeFun = function() {
            s && s.parent || o.close(), c.calltime -= 1;
            new Date(c.calltime);
            var e = Math.floor(c.calltime / 60), t = "";
            e > 0 && (t = e < 10 ? t + "0" + e + "分" : t + e + "分");
            var i = c.calltime % 60;
            t = i < 10 ? t + "0" + i + "秒" : t + i + "秒", s && s.isValid && (cc.find("dialogBg/redlabel", s).getComponent(cc.Label).string = c.redcontent.replace("time", t)), 
            c.calltime < 0 && s && s.isValid && o.callback(s.callback, 2);
        }, o.callback = function(e) {
            c.callback && c.callback(e), o.close();
        }, o.closeInterval = function() {
            -1 != r && (clearInterval(r), r = -1), e("../tools/Loading").close();
        }, o.close = function(t) {
            -1 != r && (clearInterval(r), r = -1), s && s.parent && (console.log("移除Dialog"), 
            s.removeFromParent()), e("../tools/Loading").close(), t && t();
        }, t.exports.init = o.init, t.exports.create = o.create, t.exports.close = o.close, 
        cc._RF.pop();
    }, {
        "../tools/Loading": "Loading",
        Common: "Common"
    } ],
    EmailItem: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "952f0/PD1dOyowah35jeDc3", "EmailItem"), cc.Class({
            extends: cc.Component,
            properties: {
                bg: cc.Sprite,
                bgFrame: [ cc.SpriteFrame ],
                readStatus: cc.Node,
                eName: cc.Label
            },
            onLoad: function() {
                var e = this;
                e.node.on("touchend", function(t) {
                    var i = {};
                    i.itemId = e.itemId, pdkEvent.emitEvent(pdkEvent.eventName.showEmail, i);
                });
            },
            setItemData: function(e) {
                this.itemId = e;
            },
            setReadStatus: function(e) {
                this.readStatus.active = e;
            },
            setBg: function(e) {
                this.bg.spriteFrame = this.bgFrame[e ? 0 : 1], this.bg.node.width = e ? 240 : 210, 
                this.eName.node.color = e ? new cc.Color(167, 103, 53) : new cc.Color(189, 149, 87);
            },
            setEName: function(e) {
                this.eName.string = e || "";
            },
            getItemId: function() {
                return this.itemId;
            }
        }), cc._RF.pop();
    }, {} ],
    EmailNode: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "7dfc384nfFHH5Za2OUaLfEG", "EmailNode");
        var n = e("Common");
        cc.Class({
            extends: cc.Component,
            properties: {
                buttonScroll: cc.ScrollView,
                emailItem: cc.Prefab
            },
            onLoad: function() {
                this.initView(), this.initData(), this.getEmail(), this.registEvent();
            },
            initView: function() {
                e("../tools/Loading").create(), n.stopEvent(this.node), cc.find("mainNode/finshNode", this.node).on("touchend", this.backBtn, this), 
                cc.find("mainNode/backBtn", this.node).on("touchend", this.backBtn, this), this.hasEmail = cc.find("mainNode/hasEmail", this.node), 
                this.hasEmail.active = !1, this.nullEmail = cc.find("mainNode/nullEmail", this.node), 
                this.scrollContent = cc.find("/txtScrollView/view/content", this.hasEmail), this.title = cc.find("/title", this.scrollContent).getComponent(cc.Label), 
                this.content = cc.find("/content", this.scrollContent).getComponent(cc.Label), this.initContentHeight = this.content.node.height, 
                this.emailRoot = cc.find("/emailRoot", this.scrollContent).getComponent(cc.Label), 
                this.fj = cc.find("/fj", this.scrollContent), this.gold = cc.find("/gold", this.fj), 
                this.gold.active = !1, this.initGoldWidth = this.gold.width, this.diamonds = cc.find("/diamonds", this.fj), 
                this.diamonds.active = !1, this.initDiamondsWidth = this.diamonds.width, this.coupon = cc.find("/coupon", this.fj), 
                this.coupon.active = !1, this.initCouponWidth = this.coupon.width, this.isGet = cc.find("/isget", this.fj), 
                this.fj.active = !1, this.lq = cc.find("/lq", this.scrollContent), this.lq.active = !1, 
                this.lqNullNode = cc.find("/lqNullNode", this.scrollContent), this.lqNullNode.active = !1, 
                this.sm = cc.find("/sm", this.scrollContent), this.sm.active = !1;
            },
            initData: function() {
                this.itemPreArr = [], this.emailData = [];
            },
            registEvent: function() {
                var e = this;
                pdkEvent.registEvent(pdkEvent.eventName.showEmail, function(t) {
                    if (t) {
                        var i = e.emailData[t.itemId], n = e.setItemBg(t.itemId);
                        0 == i[3] && JavaRequest.checkMail(i[0], function(t) {
                            if (1 == t.svflag) {
                                i[3] = 1, n.setReadStatus(!1);
                                var a = 0, o = !0, s = !1, r = void 0;
                                try {
                                    for (var c, l = e.emailData[Symbol.iterator](); !(o = (c = l.next()).done); o = !0) {
                                        0 == c.value[3] && a++;
                                    }
                                } catch (e) {
                                    s = !0, r = e;
                                } finally {
                                    try {
                                        !o && l.return && l.return();
                                    } finally {
                                        if (s) throw r;
                                    }
                                }
                                var d = {};
                                d.isHasNoRead = a > 0, pdkEvent.emitEvent(pdkEvent.eventName.hallUpdateEmail, d);
                            }
                        }), e.showMailMsg(t.itemId);
                    }
                }, e.node);
            },
            setItemBg: function(e) {
                var t = null, i = !0, n = !1, a = void 0;
                try {
                    for (var o, s = this.itemPreArr[Symbol.iterator](); !(i = (o = s.next()).done); i = !0) {
                        var r = o.value.getComponent("EmailItem"), c = e == r.getItemId();
                        r.setBg(c), c && (t = r);
                    }
                } catch (e) {
                    n = !0, a = e;
                } finally {
                    try {
                        !i && s.return && s.return();
                    } finally {
                        if (n) throw a;
                    }
                }
                return t;
            },
            getEmail: function() {
                var t = this;
                JavaRequest.getMails(function(i) {
                    if (1 == i.svflag) {
                        if (t.emailData = i.data.arr || [], 0 == t.emailData.length) return t.hasEmail.active = !1, 
                        t.nullEmail.active = !0, void e("../tools/Loading").close();
                        if (t.hasEmail.active = !0, t.nullEmail.active = !1, t.buttonScroll.content.removeAllChildren(), 
                        t.emailData.sort(function(e, t) {
                            return 0 == e[3] && 0 != t[3] ? -1 : 0 == t[3] && 0 != e[3] ? 1 : 1 == e[4] && 1 != t[4] ? -1 : 1 == t[4] && 1 != e[4] ? 1 : e[0] > t[0] ? -1 : 1;
                        }), t.emailData.length > 0) {
                            t.emailData[0][3] = 1, JavaRequest.checkMail(t.emailData[0][0], function(e) {
                                if (1 == e.svflag) {
                                    var i = 0, n = !0, a = !1, o = void 0;
                                    try {
                                        for (var s, r = t.emailData[Symbol.iterator](); !(n = (s = r.next()).done); n = !0) {
                                            0 == s.value[3] && i++;
                                        }
                                    } catch (e) {
                                        a = !0, o = e;
                                    } finally {
                                        try {
                                            !n && r.return && r.return();
                                        } finally {
                                            if (a) throw o;
                                        }
                                    }
                                    var c = {};
                                    c.isHasNoRead = i > 0, pdkEvent.emitEvent(pdkEvent.eventName.hallUpdateEmail, c);
                                }
                            });
                            for (var n = 0; n < t.emailData.length; n++) {
                                var a = cc.instantiate(t.emailItem), o = a.getComponent("EmailItem");
                                o.setReadStatus(0 == t.emailData[n][3]), o.setEName(t.emailData[n][1]), o.setItemData(n), 
                                o.setBg(0 == n), a.parent = t.buttonScroll.content, a.x = 0, t.itemPreArr.push(a);
                            }
                            t.showMailMsg(0);
                        }
                        e("../tools/Loading").close();
                    }
                });
            },
            showMailMsg: function(e) {
                var t = this.emailData[e] || [];
                if (0 != t.length) {
                    this.content.string = "    " + (t[2] || "");
                    if (t[2].length > 60 ? this.content.node.height = t[2].length / 60 * this.initContentHeight + 50 : this.content.node.height = this.initContentHeight, 
                    this.gold.active = !1, this.diamonds.active = !1, this.coupon.active = !1, this.gold.width = this.initGoldWidth, 
                    this.diamonds.width = this.initDiamondsWidth, this.coupon.width = this.initCouponWidth, 
                    t[6]) {
                        this.fj.active = !0;
                        var i = JSON.parse(t[6]);
                        for (var n in i) if ("gold" == n) {
                            this.gold.active = !0;
                            var a = this.gold.getChildByName("gold"), o = 0, s = !0, r = !1, c = void 0;
                            try {
                                for (var l, d = i.gold[Symbol.iterator](); !(s = (l = d.next()).done); s = !0) {
                                    var h = l.value;
                                    o += parseInt(h.number);
                                }
                            } catch (e) {
                                r = !0, c = e;
                            } finally {
                                try {
                                    !s && d.return && d.return();
                                } finally {
                                    if (r) throw c;
                                }
                            }
                            a.getComponent(cc.Label).string = o, this.gold.width += a.width;
                        } else if ("diamonds" == n) {
                            this.diamonds.active = !0;
                            var u = this.diamonds.getChildByName("gold");
                            u.getComponent(cc.Label).string = i.diamonds, this.diamonds.width += u.width;
                        } else if ("coupon" == n) {
                            this.coupon.active = !0;
                            var g = this.coupon.getChildByName("gold");
                            g.getComponent(cc.Label).string = i.coupon, this.coupon.width += g.width;
                        }
                        this.sm.active = !0, this.setIsget(e);
                    } else this.fj.active = !1, this.lq.active = !1, this.lqNullNode.active = !0, this.sm.active = !1;
                }
            },
            setIsget: function(t) {
                var i = this, n = i.emailData[t], a = 0 == n[5];
                i.isGet.active = !a, i.lq.active = a, i.lqNullNode.active = !a, i.lq.off("touchend"), 
                i.lq.on("touchend", function(t) {
                    JavaRequest.getMiniGameMaillFujian(n[0], function(t) {
                        if (t && t.result && i) {
                            var a = "已成功领取", o = t.data[0].getGoldSum || 0, s = t.data[0].getDiamonds || 0;
                            o > 0 && (a += " 金币 " + o), s > 0 && (a += " 钻石 " + s), n[5] = 1, i.isGet.active = !0, 
                            i.lq.active = !1, i.lqNullNode.active = !0, e("../tools/Dialog").create({
                                content: a,
                                btnstring: [ 1, "确定" ]
                            });
                        }
                    });
                });
            },
            backBtn: function() {
                this.node.destroy();
            }
        }), cc._RF.pop();
    }, {
        "../tools/Dialog": "Dialog",
        "../tools/Loading": "Loading",
        Common: "Common"
    } ],
    Exchange: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "eb037On0m9AFY+8zC1olEI0", "Exchange");
        var n = e("../common/Common"), a = e("Config");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.title = cc.find("dialogBg/titleNode/titlelabel", this.node).getComponent(cc.Label), 
                this.viewContent = cc.find("dialogBg/contentNode", this.node), this.viewDetail = cc.find("dialogBg/contentDetailNode", this.node), 
                this.money = cc.find("txtNum", this.viewContent).getComponent(cc.Label), this.totalMoney = cc.find("txtTotal", this.viewContent).getComponent(cc.Label), 
                this.btnExchange = cc.find("btnExchange", this.viewContent), this.btnDetails = cc.find("btnDetails", this.viewContent), 
                this.btnExchange.on("click", this.onClickExchange, this), this.btnDetails.on("click", this.changeView.bind(this, 2)), 
                cc.find("dialogBg/close", this.node).on("click", this.onClickClose, this), cc.find("bgmask", this.node).on("click", this.onClickClose, this), 
                this.viewIndex = 1, this.scrollView = cc.find("scrollView", this.viewDetail), this.scrollContent = cc.find("view/content", this.scrollView), 
                this.item = cc.find("item", this.scrollContent), this.item.active = !1, this.moneyData = 0;
            },
            start: function() {
                this.changeView(1), this.dataInfo && this.updateContentInfo(this.dataInfo);
            },
            setData: function(e) {
                this.dataInfo = e, this.dataInfo && this.updateContentInfo(this.dataInfo);
            },
            changeView: function(t) {
                var i = this;
                1 == t ? (this.viewContent.active = !0, this.viewDetail.active = !1, this.title.string = "兑换") : (e("../tools/weixin").aldSendEvent("大厅", {
                    "按钮": "奖励明细"
                }), this.viewContent.active = !1, this.viewDetail.active = !0, this.title.string = "奖励明细", 
                JavaRequest.redPackInfo({
                    type: 1
                }, function(e) {
                    i.updateListInfo(e.data[0].detailList);
                })), this.viewIndex = t;
            },
            onClickExchange: function(t) {
                e("../tools/weixin").aldSendEvent("大厅", {
                    "按钮": "提现至微信"
                });
                var i = this;
                parseFloat(this.moneyData) < 5 ? n.toastTip("金额不足5.00元") : JavaRequest.getMoney(null, function(e) {
                    i.onClickClose();
                });
            },
            updateContentInfo: function(e) {
                this.moneyData = e.nowPack, a.moneyData = e.nowPack, this.money.string = "￥" + e.nowPack, 
                this.totalMoney.string = "" + e.historyPack;
            },
            updateListInfo: function(e) {
                if (e && 0 != e.length) {
                    this.scrollContent.removeAllChildren();
                    var t = e.length, i = this.item, n = i.height;
                    this.scrollContent.height = t * (i.height + 5);
                    for (var a = 0; a < t; a++) {
                        var o = e[a], s = cc.instantiate(i);
                        s.active = !0, this.setItemInfo(s, o), s.parent = this.scrollContent, s.y = -n / 2 - a * (n + 5);
                    }
                } else this.scrollContent.removeAllChildren();
            },
            setItemInfo: function(e, t) {
                e.from = cc.find("txtfrom", e).getComponent(cc.Label), e.time = cc.find("txttime", e).getComponent(cc.Label), 
                e.money = cc.find("txtmoney", e).getComponent(cc.Label), e.from.string = t.name, 
                e.time.string = t.createTime, e.money.string = t.money + " 元";
            },
            onClickClose: function(e) {
                1 == this.viewIndex ? this.node.destroy() : this.changeView(1);
            }
        }), cc._RF.pop();
    }, {
        "../common/Common": "Common",
        "../tools/weixin": "weixin",
        Config: "Config"
    } ],
    FhbNode: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "800e4dpAo1EW4i/7uGz1D58", "FhbNode");
        var n = e("Common"), a = e("../tools/weixin");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                n.stopEvent(this.node), n.stopEvent(cc.find("contentNode/diolog_bg", this.node)), 
                n.clickNode(cc.find("bg", this.node), function() {
                    this.destroyNode();
                }.bind(this), !0), n.clickNode(cc.find("contentNode/btn_gfhb", this.node), function() {
                    var e = {
                        "复活": "获取复活币"
                    };
                    a.aldSendEvent("闯关场", e), this.destroyNode(), pdkEvent.emitEvent(pdkEvent.eventName.showInvite);
                }.bind(this)), n.clickNode(cc.find("contentNode/btn_jump", this.node), function() {
                    var e = {
                        "复活": "放弃复活"
                    };
                    a.aldSendEvent("闯关场", e), JavaRequest.clearGuanInfo(null, function() {
                        this && (this.destroyNode(), this.gotoGameScene());
                    }.bind(this));
                }.bind(this)), JavaRequest.resurrectionInfo(function(t) {
                    if (this) {
                        var i = cc.find("contentNode/f_count", this.node).getComponent(cc.Label), o = e("PdkDatamanager").getFHCount();
                        i.string = o;
                        var s = cc.find("contentNode/btn_ufhb", this.node);
                        0 == o ? s.opacity = 155 : (s.opacity = 255, n.clickNode(s, function() {
                            var e = {
                                "复活": "复活币复活"
                            };
                            a.aldSendEvent("闯关场", e), JavaRequest.resurrection(function(e) {
                                e && e.result && e.data && (1 == (e = e.data[0]).isRelive ? this.gotoGameScene(function() {
                                    pdkEvent.emitEvent(pdkEvent.eventName.aliveFHB);
                                }) : n.toastTip(pdkShowContent.fhbFail));
                            }.bind(this));
                        }.bind(this)));
                    }
                }.bind(this)), e("Config").justOne = !0;
            },
            gotoGameScene: function(e) {
                var t = {
                    type: "82",
                    data: 4
                };
                t.cbFn = e, n.gotoGameScene(t);
            },
            destroyNode: function() {
                this.node && this.node.isValid && this.node.destroy();
            }
        }), cc._RF.pop();
    }, {
        "../tools/weixin": "weixin",
        Common: "Common",
        Config: "Config",
        PdkDatamanager: "PdkDatamanager"
    } ],
    FieldList: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "e4d1b5GwLpBfZsDD6Ic6qwB", "FieldList");
        var n = e("../Config"), a = e("../common/Common"), o = e("../tools/weixin");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.btnClose = cc.find("btnClose", this.node), this.btnCloseTitle = cc.find("title", this.btnClose).getComponent(cc.Label), 
                this.btnQuickStart = cc.find("btnQuickStart", this.node), this.scrollView = cc.find("scrollView", this.node), 
                this.scrollContent = cc.find("view/content", this.scrollView), this.item = cc.find("item", this.node), 
                this.tipView = cc.find("dialog", this.node), this.successTip = cc.find("successTip", this.node), 
                cc.find("dialogBg/btn_yellow", this.tipView).on("click", this.needGoToshop, this);
                var e = this;
                cc.find("dialogBg/btn_close", this.tipView).on("click", function() {
                    e.tipView.active = !1;
                }, this), cc.find("bgmask", this.tipView).on("click", function() {
                    e.tipView.active = !1;
                }, this), this.btnClose.on("click", this.onClickClose, this), this.btnQuickStart.on("click", this.onClickQuickStart, this), 
                this.btnQuickStart.active = !1, cc.find("NewSprite/okBtn", e.successTip).on("click", function() {
                    e.successTip.active = !1, null != e.sendData && a.gotoGameScene(e.sendData);
                }, e), cc.find("goldShowNode", this.node).active = !1, this.nodeTb = {};
            },
            start: function() {},
            onDestroy: function() {},
            setData: function(e, t) {
                console.log("dataaaaa ===", e), this.gameType = t + "", this.listData = [], this.btnCloseTitle.string = 81 == t ? "金币场" : "欢乐场";
                for (var i = 0; i < e.length; i++) e[i].playType == t && this.listData.push(e[i]);
                this.listData && this.initData(this.listData);
            },
            setCallback: function(e, t) {
                this.cb = e, this.cbParams = t;
            },
            initData: function(e) {
                if (e && 0 != e.length) {
                    var t = e.length;
                    if (this.scrollContent.childrenCount == t) for (var i = 0; i < t; i++) {
                        var a = e[i], o = this.nodeTb[i];
                        o.playType = this.gameType, o && o.isValid && this.setItemInfo(o, a);
                    } else {
                        this.scrollContent.removeAllChildren(), this.listData = null, this.nodeTb = {};
                        for (var s = this.item, r = 0; r < t; r++) {
                            n.minlimits[r] = e[r].minLimit;
                            var c = e[r], l = cc.instantiate(s);
                            l.tag = c.type, 0 != c.status && (l.attr({
                                type: r + 1,
                                playType: c.playType,
                                typeTrue: c.type
                            }), l.on("click", function(e) {
                                this.onClickItem(e.target.playType, e.target.type, e.target.typeTrue);
                            }, this)), l.bg = l.getComponent(cc.Sprite), l.limit = cc.find("txtLimit", l).getComponent(cc.Label), 
                            l.online = cc.find("txtOnline", l).getComponent(cc.Label), l.redpacket = cc.find("txtMoney", l).getComponent(cc.Label), 
                            l.mask = cc.find("mask", l), this.setItemInfo(l, c), l.parent = this.scrollContent, 
                            l.y = 0, l.x = -(l.width + 25) + r * (l.width + 25), this.nodeTb[r] = l;
                        }
                    }
                }
            },
            setItemInfo: function(e, t) {
                cc.loader.loadRes("hall/field/field" + t.type % 4, cc.SpriteFrame, function(t, i) {
                    e.bg.spriteFrame = i;
                }), e.limit.string = t.minLimit + "", e.online.string = t.onlineNum + "", e.redpacket.string = t.redpacket[0] + "局送" + t.redpacket[1] + "元", 
                e.playType = t.playType, e.typeTrue = t.type, 0 == t.status ? e.mask.active = !0 : e.mask.active = !1;
            },
            onClickItem: function(e, t, i) {
                console.log("点击参数playType = " + e + " , flag = " + t + " , flag2 = " + i), o.aldSendEvent("81" == this.gameType ? "金币场" : "欢乐场", {
                    "按钮": "场次" + t
                });
                var s = this;
                if (n.nowPlayRank = t, n.USER.gold < n.minlimits[t - 1]) if (n.bankruptcyNum > 0 && 1 == t) a.isNullNode(s.bankruptcy) ? RESOURCE.getPrefab("comBankruptcy", function(t) {
                    s.bankruptcy && s.bankruptcy.isValid && s.bankruptcy.removeFromParent(), s.bankruptcy = cc.instantiate(t), 
                    s.bankruptcy.getComponent("Bankruptcy").initData(function(t) {
                        1 == t && (cc.find("goldShowNode/goldNode/txt", s.node).getComponent(cc.Label).string = n.USER.gold, 
                        s.successTip.active = !0, s.sendData = {
                            type: e,
                            data: i
                        });
                    }), a.maskFadeIn(s.bankruptcy.getChildByName("bgmask"), s.bankruptcy.getChildByName("dialogBg")), 
                    s.node.addChild(s.bankruptcy);
                }) : s.bankruptcy.active = !0; else {
                    var r = "";
                    2 == t ? r = "中级场" : 3 == t ? r = "高级场" : 1 == t && (r = "初级场");
                    var c = n.minlimits[t - 1] - n.USER.gold;
                    cc.find("dialogBg/desclabel", s.tipView).getComponent(cc.Label).string = "还需" + c + "金币才能进入" + r, 
                    s.tipView.active = !0;
                } else a.gotoGameScene({
                    type: e,
                    data: i
                });
            },
            onClickQuickStart: function(e) {},
            goToShopCallFunc: function(e) {
                this.cb2 = e;
            },
            needGoToshop: function() {
                this.cb && this.cb(-1, this.cbParams), this.tipView.active = !1, this.node.active = !1, 
                n.nowOpenView = null, this.cb2 && this.cb2();
            },
            onClickClose: function(e) {
                this.cb && this.cb(-1, this.cbParams), this.node.active = !1, n.nowOpenView = null;
            }
        }), cc._RF.pop();
    }, {
        "../Config": "Config",
        "../common/Common": "Common",
        "../tools/weixin": "weixin"
    } ],
    FriendDesk: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "36bdaorLf9JsYzJ69S4evCL", "FriendDesk");
        var n = e("../tools/utils"), a = (e("../net/SendCMD"), e("../common/Common"));
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                cc.find("view/creatRoom", this.node).on("click", this.sendData, this), cc.find("bgmask", this.node).on("click", this.close, this), 
                this.wanFaToggles.getChildByName("toggle1").on("click", this.changeLabelColor.bind(this, 1, this.wanFaToggles)), 
                this.wanFaToggles.getChildByName("toggle2").on("click", this.changeLabelColor.bind(this, 2, this.wanFaToggles)), 
                this.playerNumToggles.getChildByName("toggle1").on("click", this.changeLabelColor.bind(this, 1, this.playerNumToggles)), 
                this.playerNumToggles.getChildByName("toggle2").on("click", this.changeLabelColor.bind(this, 2, this.playerNumToggles)), 
                this.juNumToggles.getChildByName("toggle1").on("click", this.changeLabelColor.bind(this, 1, this.juNumToggles)), 
                this.juNumToggles.getChildByName("toggle2").on("click", this.changeLabelColor.bind(this, 2, this.juNumToggles)), 
                this.juNumToggles.getChildByName("toggle3").on("click", this.changeLabelColor.bind(this, 3, this.juNumToggles)), 
                this.playRuleToggles.getChildByName("toggle1").on("click", this.changeLabelColor.bind(this, 1, this.playRuleToggles)), 
                this.playRuleToggles.getChildByName("toggle2").on("click", this.changeLabelColor.bind(this, 2, this.playRuleToggles));
            },
            start: function() {},
            init: function() {
                this.wanFaToggles = cc.find("view/select/wanfa/ToggleContainer", this.node), this.playerNumToggles = cc.find("view/select/playNum/ToggleContainer", this.node), 
                this.juNumToggles = cc.find("view/select/juNum/ToggleContainer", this.node), this.playRuleToggles = cc.find("view/select/playRule/ToggleContainer", this.node), 
                this.togglesList = [ this.wanFaToggles, this.playerNumToggles, this.juNumToggles, this.playRuleToggles ];
                var e = n.getUserSetting("wanfaData"), t = [];
                if (null != e) {
                    t = e.split(",");
                    for (var i = 0; i < t.length; i++) for (var a = parseInt(t[i]), o = 0; o < this.togglesList[i].children.length; o++) o == a ? (this.togglesList[i].children[o].getComponent(cc.Toggle).isChecked = !0, 
                    this.togglesList[i].children[o].children[2].color = new cc.color(210, 118, 86)) : (this.togglesList[i].children[o].getComponent(cc.Toggle).isChecked = !1, 
                    this.togglesList[i].children[o].children[2].color = new cc.Color(141, 93, 51));
                }
            },
            sendData: function() {
                for (var e = new Map(), t = "", i = 0; i < this.wanFaToggles.children.length; i++) this.wanFaToggles.children[i].getComponent(cc.Toggle).isChecked && (0 == i ? (e.PaiNum = 15, 
                t = t + i + ",") : (e.PaiNum = 16, t = t + i + ","));
                for (var o = 0; o < this.playerNumToggles.children.length; o++) this.playerNumToggles.children[o].getComponent(cc.Toggle).isChecked && (0 == o ? (e.peopleNum = 2, 
                t = t + o + ",") : (e.peopleNum = 3, t = t + o + ","));
                for (var s = 0; s < this.juNumToggles.children.length; s++) this.juNumToggles.children[s].getComponent(cc.Toggle).isChecked && (0 == s ? (e.innings = 6, 
                t = t + s + ",") : 1 == s ? (e.innings = 9, t = t + s + ",") : (e.innings = 12, 
                t = t + s + ","));
                for (var r = 0; r < this.playRuleToggles.children.length; r++) this.playRuleToggles.children[r].getComponent(cc.Toggle).isChecked && (0 == r ? (e.is3cFirst = 0, 
                t += r) : (e.is3cFirst = 1, t += r));
                n.setUserSetting("wanfaData", t), console.log(e), a.gotoGameScene({
                    type: "83",
                    data: e
                });
            },
            close: function() {
                this.node.destroy();
            },
            changeLabelColor: function(e, t, i) {
                var n = new cc.color(210, 118, 86), a = new cc.Color(141, 93, 51);
                i.target.children[2].color = n, 1 == e ? (t.getChildByName("toggle2").children[2].color = a, 
                void 0 != t.getChildByName("toggle3") && (t.getChildByName("toggle3").children[2].color = a)) : 2 == e ? (t.getChildByName("toggle1").children[2].color = a, 
                void 0 != t.getChildByName("toggle3") && (t.getChildByName("toggle3").children[2].color = a)) : (t.getChildByName("toggle1").children[2].color = a, 
                t.getChildByName("toggle2").children[2].color = a);
            }
        }), cc._RF.pop();
    }, {
        "../common/Common": "Common",
        "../net/SendCMD": "SendCMD",
        "../tools/utils": "utils"
    } ],
    FriendPlay: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "64feekrfP5NWIAlp65kEUtZ", "FriendPlay");
        var n = e("../Config");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.closeBtn = cc.find("btnClose", this.node), this.joinBtn = cc.find("layout/joinRoom", this.node), 
                this.creatBtn = cc.find("layout/creatRoom", this.node), this.btnMyRecord = cc.find("myRecord", this.node), 
                this.closeBtn.on("click", this.closeWin, this), this.joinBtn.on("click", this.openKeyBoard, this), 
                this.creatBtn.on("click", this.creatView, this), this.btnMyRecord.on("click", this.onClickRecord, this);
            },
            start: function() {},
            closeWin: function() {
                this.cb && this.cb(-1, this.cbParams), this.node.active = !1, n.nowOpenView = null;
            },
            setCallback: function(e, t) {
                this.cb = e, this.cbParams = t;
            },
            openKeyBoard: function() {
                RESOURCE.getPrefab("friJoinRoom", function(e) {
                    var t = cc.instantiate(e);
                    t.getComponent("JiaRuRoom") && (t.getComponent("JiaRuRoom").init(), cc.director.getScene().getChildByName("Canvas").addChild(t), 
                    t.zIndex = 2);
                });
            },
            creatView: function() {
                RESOURCE.getPrefab("friCreateRoom", function(e) {
                    var t = cc.instantiate(e);
                    t.getComponent("FriendDesk").init(), cc.director.getScene().getChildByName("Canvas").addChild(t), 
                    t.zIndex = 2;
                });
            },
            onClickRecord: function() {
                var e = this;
                e.recordNode && e.recordNode.isValid ? (cc.find("view/myData", e.recordNode).active = !0, 
                cc.find("view/details", e.recordNode).active = !1, e.recordNode.getComponent("MyRecord").init(), 
                e.recordNode.active = !0) : RESOURCE.getPrefab("friRecordRoom", function(t) {
                    e.recordNode && e.recordNode.isValid && e.recordNode.removeFromParent(), e.recordNode = cc.instantiate(t), 
                    e.recordNode.getComponent("MyRecord").init(), e.node.addChild(e.recordNode), e.recordNode.zIndex = 1;
                });
            }
        }), cc._RF.pop();
    }, {
        "../Config": "Config"
    } ],
    GEvent: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "7a862Lqi21MmbNocx60jmKK", "GEvent");
        var n = new cc.EventTarget();
        window.pdkEvent = {
            registEvent: function(e, t, i) {
                i ? n.on(e, function(e) {
                    t(e.detail.msg);
                }, i) : (n.off(e), n.on(e, function(e) {
                    t(e.detail.msg);
                }));
            },
            emitEvent: function(e, t) {
                var i = {};
                i.msg = t || "", n.emit(e, i);
            },
            delEvent: function(e, t, i) {
                t && i ? n.off(e, t, i) : n.off(e);
            },
            eventName: {
                showEmail: "showEmail",
                hallUpdateEmail: "hallUpdateEmail",
                refreshHallData: "refreshHallData",
                showInvite: "showInvite",
                aliveFHB: "aliveFHB",
                redPacketSuc: "redPacketSuc",
                pwsShareBack: "pwsShareBack"
            }
        }, cc._RF.pop();
    }, {} ],
    GameSocket: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "63736Gl4CpFOZVmLGO83Z4F", "GameSocket");
        var n = e("MyWebSocket"), a = e("Config"), o = e("Common"), s = Object.create(n), r = e("PdkDatamanager");
        s.eventTarget = new cc.EventTarget(), s.onopen = function(t) {
            cc.log("连接成功onopen"), this.sendHeart(), this.succ = !0, 0 != a.shareRoomId && (cc.log("加入房间======"), 
            e("../tools/Dialog").close(), e("../net/SendCMD").inRoom(Number(a.shareRoomId)));
        }, s.sendHeart = function() {
            this.writeHead(10006), this.writeEnd();
        }, s.testHeart = function(t) {
            var i = this;
            if (console.log("neddHeart ==" + i.neddHeart), console.log("timeout_num == " + i.timeout_num), 
            !i.neddHeart) return i.timeout_num = 0, void (this.callDown && -1 != this.callDown && (clearInterval(this.callDown), 
            this.callDown = -1));
            null == this.callDown && (this.callDown = -1), -1 != this.callDown && (clearInterval(this.callDown), 
            this.callDown = -1), this.callDown = setInterval(function() {
                i.timeout_num || (i.timeout_num = 0), i.timeout_num >= 3 ? (-1 != this.callDown && (clearInterval(this.callDown), 
                this.callDown = -1), i.timeout_num = 0, e("../tools/Dialog").create({
                    content: "网络连接断开，请检查网络设置，重新连接......",
                    btnstring: [ 1, "确定" ],
                    callback: function(t) {
                        e("NetManager").connectToServer();
                    }
                })) : (i.sendHeart(), i.timeout_num = i.timeout_num + 1);
            }, 3e3);
        }, s.onData = function(t) {
            this.readBuff = new DataView(t);
            var i = this.getCMD();
            this.position = 6;
            this.timeout_num = 0, this.eventTarget.dispatchEvent(new cc.Event("connetSucc"));
            var n = e("./ParseSocket"), s = e("../pdk/PdkParseScoket");
            if (-1 == [ 1e3, 1999, 1001, 1010, 10006, 10008, 1057, 1058, 1059, 1998, 1086, 1089, 1087, 5e3, 5002, 5003, 5004, 5005, 5006, 5007 ].indexOf(i)) {
                if (2531 == i || 2535 == i) return void n.checkResult(this, i);
                if (1 == a.GameStatus) return 1 == RESOURCE.isLoadedRes ? void console.log("正在加载资源，稍后接受C++消息") : void 0;
                if (2 == a.GameStatus) return 1 == RESOURCE.isLoadedRes ? void console.log("正在加载资源，稍后接受C++消息") : void s.init(this, i);
                if (0 == a.GameStatus && 1013 == i && "PhzScene" != a.curSceneName) return;
            }
            10006 !== i && o.dump("【RECEIVE】cmd ===== " + i + " ===== time=" + Date.now() + " ===== " + o.getDate()), 
            n && n["fun" + i] && n["fun" + i](this, i);
        }, s.close = function() {
            this.timeout_num = 0, this.neddHeart = !1, r.destroyAnimNode(), -1 != this.callDown && (clearInterval(this.callDown), 
            this.callDown = -1), this.ws && this.ws.close();
        }, s.onerror = function(e) {
            this.close(), o.dump("Send Text fired an error......"), this.eventTarget.dispatchEvent(new cc.Event("failure"));
        }, s.onclose = function(e) {
            this.close(), o.dump("WebSocket instance closed......" + this.succ), 1 == this.succ && this.eventTarget.dispatchEvent(new cc.Event("closed")), 
            this.succ = !1;
        }, s.checkSocketLinkStatus = function() {
            return this.ws.readyState == WebSocket.OPEN || (console.log("WebSocket instance wasn't ready...断了断了断了断了"), 
            !1);
        }, t.exports = s, cc._RF.pop();
    }, {
        "../net/SendCMD": "SendCMD",
        "../pdk/PdkParseScoket": "PdkParseScoket",
        "../tools/Dialog": "Dialog",
        "./ParseSocket": "ParseSocket",
        Common: "Common",
        Config: "Config",
        MyWebSocket: "MyWebSocket",
        NetManager: "NetManager",
        PdkDatamanager: "PdkDatamanager"
    } ],
    GoldNode: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "72858Coo55Lzayno09xmt0S", "GoldNode");
        var n = e("../Config"), a = e("../common/Common");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.goldNode = cc.find("goldNode", this.node), this.zuanNode = cc.find("zuanNode", this.node), 
                this.gold = cc.find("txt", this.goldNode).getComponent(cc.Label), this.zuan = cc.find("txt", this.zuanNode).getComponent(cc.Label), 
                this.goldNode.on("click", this.onClickPay.bind(this, 1)), n.isSpecial ? this.zuanNode.getChildByName("btn").active = !1 : this.zuanNode.on("click", this.onClickPay.bind(this, 2)), 
                this.updateGold(n.USER.gold), this.updateZuan(n.USER.diamonds), this.canClick = !0;
            },
            start: function() {},
            init: function(e) {
                this.cb = e;
            },
            onClickPay: function(e, t) {
                var i = this;
                i.setTime && -1 != i.setTime && (clearTimeout(i.setTime), i.setTime = -1), i.setTime = setTimeout(function() {
                    i.canClick = !0;
                }, 1e3), this.canClick && (this.canClick = !1, this.cb && this.cb(e));
            },
            updateGold: function(e) {
                var t = e;
                this.gold.string = a.numberThousands(t);
            },
            updateZuan: function(e) {
                this.zuan.string = e;
            }
        }), cc._RF.pop();
    }, {
        "../Config": "Config",
        "../common/Common": "Common"
    } ],
    HallScene: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "280c3rsZJJKnZ9RqbALVwtK", "HallScene");
        var n = e("../Config"), a = e("../common/Common"), o = e("../tools/utils"), s = e("../tools/weixin"), r = e("../net/SendCMD"), c = e("PdkDatamanager");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                a.sceneLog("大厅场景onLoad"), this.iData(), this.initData(), n.isSuccesInRoom = !1, 
                n.isHave1100 = !1, n.toHall = !1, this.helpTip = cc.find("inviteNode/helpTip", this.node), 
                this.helpCloseBtn = cc.find("dialogBg/btn_lan", this.helpTip), this.helpToInvite = cc.find("dialogBg/btn_yellow", this.helpTip), 
                this.helpCloseBtn.on("click", this.onClickHelpTip.bind(this, !1)), this.helpToInvite.on("click", this.onClickHelpTip.bind(this, !0)), 
                this.uploadRedPacketInfo(), this.registEvent(), this.speileFn();
            },
            test: function() {
                var e = {};
                e.mid = n.USER.mid, JavaRequest.getMiniGameShareQr({
                    scene: JSON.stringify(e)
                }, function(e) {
                    if (e && e.data[0].data) {
                        var t = "data:image/png;base64," + e.data[0].data, i = new Image();
                        i.src = t, i.onload = function() {
                            var e = new cc.Texture2D();
                            e.initWithElement(i), e.handleLoadedTexture(), e.height = 450, e.width = 450;
                            var t = new cc.SpriteFrame(e), n = cc.find("testBase", this.node);
                            n && (n.getComponent(cc.Sprite).spriteFrame = t);
                        }.bind(this);
                    }
                }.bind(this));
            },
            speileFn: function() {
                var e = !n.isSpecial;
                this.btnAd.active = e, this.node.getChildByName("aroundMenuNode").active = e;
            },
            start: function() {
                var t = this;
                1 == o.getUserSetting("music_enabled", 1) ? (AMGR.setMusicEnable(!0), AMGR.playMusic("resources/audio/music/bgm.mp3")) : (AMGR.setMusicEnable(!1), 
                AMGR.stopMusic()), a.setAAValue(), a.tipAAadd(), DMGER.setHasTotleOverNode(!1), 
                e("../tools/Loading").close(), a.sceneLog("大厅场景start"), e("../net/ParseSocket").addListenerGold(function(e) {
                    a.isNull(t.goldComp) || t.goldComp.updateGold(n.USER.gold);
                }), e("../net/ParseSocket").addListenerDiamonds(function(e) {
                    a.isNull(t.goldComp) || t.goldComp.updateZuan(n.USER.diamonds);
                });
                var i = 0;
                JavaRequest.getBankruptcyInfo(function(e) {
                    for (var t = 0; t < 3; t++) 1 == e.data[0].grants[t] && i++;
                    n.bankruptcyNum = i;
                }), this.getBarrage(), a.preloadOtherScene("HallScene");
            },
            onDestroy: function() {
                e("../net/ParseSocket").removeListenerGold(), e("../net/ParseSocket").removeListenerOnshow(), 
                clearInterval(this.timeCall), this.joinRoomTieme && clearTimeout(this.joinRoomTiemer), 
                a.sceneLog("大厅场景destory");
            },
            initData: function() {
                var t = this;
                r.send2540(), this.userInfoNode = cc.find("userInfoNode", this.node);
                var i = cc.find("headkuang", this.userInfoNode);
                i.on("click", this.onClickHead, this), i.getComponent("HeadPortrait").loadImg(n.USER.icon), 
                t.headkuang = i, this.labelUserName = cc.find("userName", this.userInfoNode).getComponent(cc.Label), 
                this.labelUserName.string = a.substring(n.USER.name, 4, !0), this.goldShowNode = cc.find("goldShowNode", this.node), 
                this.goldComp = this.goldShowNode.getComponent("GoldNode"), this.goldComp.init(function(e) {
                    null != n.nowOpenView && (n.nowOpenView.active = !1, n.nowOpenView = null);
                    t.onClickShop(e);
                }), this.gameList = cc.find("gamelist", this.node);
                var l = cc.find("gamelist/btn_pdk", this.node), d = cc.find("gamelist/btn_join", this.node), h = cc.find("gamelist/btn_cg", this.node), u = cc.find("gamelist/btn_hl", this.node);
                this.btnAd = cc.find("adBtn", this.node), this.adTime = cc.find("adTime", this.node), 
                this.successTip = cc.find("successTip", this.node), n.successTipNode = this.successTip, 
                u.getChildByName("mask").active = !1, u.getChildByName("icon_s").active = !1, this.btnCgTxt = cc.find("txt", h).getComponent(cc.Label), 
                l.on("click", this.onClickPaodekuai, this), d.on("click", this.onClickJoin, this), 
                h.on("click", this.onClickCg, this), u.on("click", this.onClickHl, this), this.btnAd.on("click", this.onClickAd, this);
                var g = h.getComponent(cc.Widget), m = d.getComponent(cc.Widget);
                t.inviteBtn = this.node.getChildByName("aroundMenuNode").getChildByName("btnAct_1"), 
                this.dailyGiftBtn = this.node.getChildByName("dailyGiftBtn"), this.dailyGiftBtn.on("click", this.onClickDailyGift.bind(this)), 
                this.giftRed = this.dailyGiftBtn.getChildByName("redPoint"), this.signInBtn = this.node.getChildByName("signInBtn"), 
                this.signInBtn.on("click", this.onShowSignPopup, this, !0), this.signRed = this.signInBtn.getChildByName("redPoint"), 
                this.adColor1 = new cc.Color(172, 172, 172), this.adColor2 = new cc.Color(255, 255, 255);
                var f = cc.director.getWinSize().width;
                if (console.log("屏幕hall" + f), f = (f - 1280) / 2, console.log("屏幕hall" + f), n.justOne = !0, 
                1 == n.isIphoneX) {
                    g.left = 230, m.right = 227;
                    var p = t.inviteBtn.getComponent(cc.Widget);
                    p.right = p.right + 100;
                    var v = t.btnAd.getComponent(cc.Widget);
                    v.right = v.right + 100;
                    var C = t.signInBtn.getComponent(cc.Widget);
                    C.right = C.right + 100;
                    var y = t.dailyGiftBtn.getComponent(cc.Widget);
                    y.right = y.right + 100;
                } else if (f > 0) {
                    var S = t.inviteBtn.getComponent(cc.Widget);
                    S.right = S.right + f;
                    var b = t.btnAd.getComponent(cc.Widget);
                    b.right = b.right + f;
                    var k = t.signInBtn.getComponent(cc.Widget);
                    k.right = k.right + f;
                    var w = t.dailyGiftBtn.getComponent(cc.Widget);
                    w.right = w.right + f;
                } else g.left = 122, m.right = 119;
                this.bottomNode = cc.find("bottomMenuNode", this.node), this.refreshBtn();
                var I = {
                    4: "onClickExchange",
                    5: "onClickShare",
                    6: "onClickSet",
                    1: "onClickHy",
                    2: "onClickShop",
                    3: "onClickEmail"
                };
                this.canClickShop = !0;
                for (var N = Object.keys(I), T = 0; T < N.length; T++) {
                    var R = N[T];
                    this["btmBtn_" + R] = this.bottomNode.getChildByName("btn_" + R), 2 == R ? this["btmBtn_" + R].on("click", this[I[R]].bind(this, 1)) : this["btmBtn_" + R].on("click", this[I[R]], this);
                }
                this.maileRedPoint = cc.find("btn_3/redPoint", this.bottomNode), this.maileRedPoint.active = !1, 
                this.around = cc.find("aroundMenuNode", this.node);
                n.nowFlag = 0, this.actionBtnArray = [ {
                    offset: cc.p(0, 300),
                    btns: [ this.userInfoNode ]
                }, {
                    offset: cc.p(300, 0),
                    btns: [ this.around, this.btnAd, this.adTime, this.signInBtn, this.dailyGiftBtn ]
                }, {
                    offset: cc.p(-300, 0),
                    btns: []
                }, {
                    offset: cc.p(0, -300),
                    btns: [ this.bottomNode ]
                }, {
                    offset: cc.p(0, 0),
                    btns: [ this.gameList ]
                } ];
                for (var P = 0; P < this.actionBtnArray.length; P++) for (var D = 0; D < this.actionBtnArray[P].btns.length; D++) {
                    var B = this.actionBtnArray[P].btns[D].getComponent(cc.Widget);
                    B && (B.enabled = !0);
                }
                JavaRequest.resurrectionInfo(function() {
                    var e = "hall/invite/" + (c.getIsFHB() ? "btn_lfhb" : "btn_invite");
                    cc.loader.loadRes(e, cc.SpriteFrame, function(e, t) {
                        e || (this.inviteBtn.getComponent(cc.Sprite).spriteFrame = t);
                    }.bind(this));
                }.bind(this));
                var x = cc.find("inviteNode", this.node);
                x.zIndex = 2, this.inviteScript = x.getComponent("InviteFriend"), null != this.inviteScript && void 0 != this.inviteScript && (t.isCloseFunc = !1, 
                this.inviteScript.init(function() {
                    t.isCloseFunc && (t.isCloseFunc = !1, t.shopNode.getComponent("ShopView").onClickZs());
                })), null != this.inviteScript && void 0 != this.inviteScript && (this.inviteScript.setRedPointCallFunc(function() {
                    console.log("回调回来"), t.inviteRedPoint.active = !1;
                }), this.inviteBtn.on("click", this.inviteScript.getInviteListFunc, this.inviteScript)), 
                this.inviteRedPoint = this.inviteBtn.getChildByName("redPoint"), JavaRequest.getInviteList(function(e) {
                    if (0 == e.error) {
                        for (var i = e.data[0].playerList, a = 0, o = 0; o < i.length; o++) 1 == i[o].status && a++;
                        a > 0 ? n && 1 == n.ServerType || (t.inviteRedPoint.active = !0) : t.inviteRedPoint.active = !1;
                    }
                }), this.seeADRedPoint = this.btnAd.getChildByName("redPoint");
                var A = new Date(), _ = A.getFullYear(), F = A.getMonth(), L = A.getDate();
                if (this.remaberDate = _ + "," + F + "," + L, o.setUserSetting("lastTimeToSeeAd", this.remaberDate), 
                "1" == o.getUserSetting("toDayFirstSeeAd" + this.remaberDate, "1") ? n && 1 == n.ServerType || (this.seeADRedPoint.active = !0) : this.seeADRedPoint.active = !1, 
                cc.sys.isMobile && void 0 != wx && null != wx) {
                    var O = wx.getLaunchOptionsSync();
                    if (console.log(n.isShareInHall + "ssssssss"), 0 == n.isShareInHall) {
                        if (n.isShareInHall = !0, a.print("options ====", O), O && O.referrerInfo && O.referrerInfo.appId ? (console.log("监听小游戏启动appId === ", O.referrerInfo.appId), 
                        o.uploadData(O.referrerInfo.appId + ""), s.aldSendEvent("渠道", {
                            "登录APPID": O.referrerInfo.appId + ""
                        })) : (o.uploadData("非接入平台进入游戏"), s.aldSendEvent("渠道", {
                            "登录APPID": "非接入平台进入游戏"
                        })), O && O.query && O.query.aldPicNum) {
                            var E = O.query.aldPicNum;
                            console.log("阿拉丁图" + E), s.aldSendEvent("分享图", {
                                "图片ID": E
                            });
                        }
                        1044 == O.scene && 1 == O.query.type && t.isFromGroup(O), O.query.roomid && Number(O.query.roomid) > 0 && (console.log("加入房间"), 
                        r.inRoom(Number(O.query.roomid))), 1104 !== O.scene && 1103 !== O.scene || (console.log("主界面 从我的小程序进入----------"), 
                        n.fromMyProgram = !0);
                    }
                } else ;
                e("../net/ParseSocket").addListenerOnshow(function(e) {
                    if (wx.setKeepScreenOn({
                        keepScreenOn: !0
                    }), a.print("HallScene监听到回前台", e), e && e.query && e.query.aldPicNum) {
                        var i = e.query.aldPicNum;
                        console.log("阿拉丁图" + i), s.aldSendEvent("分享图", {
                            "图片ID": i
                        });
                    }
                    1044 == e.scene && 1 == e.query.type && (a.print("HallScene监听到回前台11111", e), t.isFromGroup(e)), 
                    e && e.referrerInfo && e.referrerInfo.appId ? (console.log("监听小游戏回到前台appId === ", e.referrerInfo.appId), 
                    o.uploadData(e.referrerInfo.appId + ""), s.aldSendEvent("渠道", {
                        "登录APPID": e.referrerInfo.appId + ""
                    })) : (o.uploadData("非接入平台进入游戏"), s.aldSendEvent("渠道", {
                        "登录APPID": "非接入平台进入游戏"
                    })), e.query.roomid && Number(e.query.roomid) > 0 && (a.print("HallScene监听到回前台222222", e), 
                    n.shareRoomId = e.query.roomid, t.joinRoomTiemer = setTimeout(function() {
                        r.inRoom(Number(e.query.roomid));
                    }, 200)), JavaRequest.getInviteList(function(e) {
                        if (0 == e.error) {
                            for (var i = e.data[0].playerList, a = 0, o = 0; o < i.length; o++) 1 == i[o].status && a++;
                            a > 0 ? n && 1 == n.ServerType || (t.inviteRedPoint.active = !0) : t.inviteRedPoint.active = !1;
                        }
                    });
                }), t.btnCgTxt.string = "闯关瓜分500万红包", JavaRequest.getGuanInfo(null, function(e) {
                    var i = e.data[0];
                    if (i.guan < 7) {
                        if (n.curGuan = i.guan + 1, null == t.btnCgTxt || void 0 == t.btnCgTxt) return;
                        t.btnCgTxt.string = "继续闯第" + (i.guan + 1) + "关", 0 == i.guan && 1 == i.success && 2 == i.reviveTimes && (t.btnCgTxt.string = "闯关瓜分500万红包"), 
                        0 == i.success && 0 == i.reviveTimes && (t.btnCgTxt.string = "闯关瓜分500万红包");
                    } else n.curGuan = 1, t.btnCgTxt.string = "闯关瓜分500万红包";
                    i.money > 0 && a.redPacketTip(i.money), i.money < 0 && (JavaRequest.clearGuanInfo(null, function() {}), 
                    t.btnCgTxt.string = "闯关瓜分500万红包");
                }), n.haveSwitchFunc && (n.haveSwitchFunc = !1, this.onClickShop(1)), JavaRequest.getMails(function(e) {
                    if (1 == e.svflag) {
                        var i = e.data.arr || [];
                        if (i.length > 0) {
                            for (var n = 0; n < i.length; n++) if (0 == i[n][3]) {
                                t.maileRedPoint && (t.maileRedPoint.active = !0);
                                break;
                            }
                        } else t.maileRedPoint && (t.maileRedPoint.active = !1);
                    } else t.maileRedPoint && (t.maileRedPoint.active = !1);
                }), JavaRequest.getNoviceByUserMid(function() {
                    if (h && h.isValid) {
                        var e = h.getChildByName("newPlayer");
                        e && e.isValid && (c.getUserIsNew() ? RESOURCE.getPrefab("hallNewHand", function(t) {
                            var i = cc.instantiate(t);
                            i.parent = e, i.position = cc.p(0, 0);
                        }) : e.removeAllChildren());
                    }
                });
                var M = o.getUserSetting("lastDailyGiftTime_" + n.USER.mid, 0) / 1e3, U = Date.now() / 1e3, G = o.getPassDay(M, U);
                this.dailyGiftBtn.active = G > 0, this.getDailyGiftStaus(), this.checkShowSignIn();
            },
            iData: function() {
                this.pwsRoomType = "85";
            },
            onClickAd: function() {
                n.isFromHallSeeAd = !1, e("../tools/Loading").create(), s.aldSendEvent("大厅", {
                    "按钮": "激励视频广告"
                }), null != this.seeADRedPoint && void 0 != this.seeADRedPoint && (this.seeADRedPoint.active = !1, 
                o.setUserSetting("toDayFirstSeeAd" + this.remaberDate, "0"));
                s.rewardedVideoAd(function() {
                    JavaRequest.surfAdsGetMoney(function(t) {
                        if (t.result) {
                            var i = t.data[0].num, o = t.data[0].type, r = n.successTipNode;
                            a.maskFadeIn(r.getChildByName("2px"), r.getChildByName("NewSprite"));
                            var c = cc.find("NewSprite/showType/zuan", r).getComponent(cc.Sprite), l = r.getComponent("SuccessTip").listPNG;
                            1 == o ? (s.aldSendEvent("广告领奖", {
                                "结果": "领奖成功"
                            }), console.log("金币" + i), r.active = !0, c.spriteFrame = l[5], cc.find("NewSprite/showType/zuan/txt", r).getComponent(cc.Label).string = i + "金币") : 2 == o ? (s.aldSendEvent("广告领奖", {
                                "结果": "领奖成功"
                            }), console.log("钻石" + i), r.active = !0, c.spriteFrame = l[3], cc.find("NewSprite/showType/zuan/txt", r).getComponent(cc.Label).string = i + "钻石") : e("../tools/Dialog").create({
                                content: "今日领奖次数已达上限",
                                btnstring: [ 1, "确定" ]
                            });
                        }
                    });
                });
            },
            setAdTime: function() {
                var e = this, t = 5;
                e.adTime.active = !0, e.adTime.getComponent(cc.Label).string = "01:00", this.timeCall = setInterval(function() {
                    --t > 9 ? e.adTime.getComponent(cc.Label).string = "00:" + t : t > 0 && t < 10 ? e.adTime.getComponent(cc.Label).string = "00:0" + t : clearInterval(e.timeCall);
                }, 1e3);
            },
            getBarrage: function() {
                var e = this;
                this.barrageData = [], this.barrageNum = 0;
                var t = cc.find("gamelist/btn_cg/tip", this.node), i = cc.find("floatNode/lable/name", e.node).getComponent(cc.Label);
                JavaRequest.getGimmick(function(n) {
                    e.barrageData = n.barrage || [], e.peoples = n.peoples, t.getChildByName("num").getComponent(cc.Label).string = n.peoples, 
                    t.active = !0, e.barrageNum = e.barrageData.length, i.schedule(function() {
                        if (e && e.node && 0 != e.node.isValid) if (e.barrageNum--, e.barrageNum > 0) {
                            var t = e.node.getChildByName("floatNode"), n = e.barrageData[e.barrageNum];
                            cc.find("lable/name", t).getComponent(cc.Label).string = n.userName, cc.find("lable/money", t).getComponent(cc.Label).string = n.money + "元", 
                            e.showBarrageAction(t);
                        } else i && i.isValid && i.unscheduleAllCallbacks(); else i && i.isValid && i.unscheduleAllCallbacks();
                    }, 8);
                });
            },
            showBarrageAction: function(e) {
                var t = cc.moveTo(.5, cc.p(0, 250)), i = cc.fadeIn(.25), n = cc.moveTo(.5, cc.p(-895, 250)), a = cc.fadeOut(.25);
                e.runAction(cc.sequence(cc.callFunc(function() {
                    null != e && void 0 != e && (e.opacity = 0, e.position = cc.p(895, 250));
                }), cc.spawn(t, i), cc.delayTime(2), cc.spawn(n, a)));
            },
            helpFriendRelive: function(e) {
                var t = e.query.shareTime, i = e.query.mid;
                i != n.USER.mid && JavaRequest.shareFriend({
                    mid: i,
                    stamp: t
                }, function(e) {});
            },
            isFromGroup: function(e) {
                var t = this;
                console.log("isFromGroupppppp===", e);
                var i = e.query.mid;
                if (i != n.USER.mid) {
                    var o = 0, s = a.substring(e.query.name, 4, !1) || "";
                    JavaRequest.setRelationship(e, function(e) {
                        0 == e.error && JavaRequest.getPlayInfo(i, function(e) {
                            if (0 == e.error && 0 != (o = e.data[0].gold)) {
                                var i = e.data[0].limitTimes - e.data[0].process;
                                t.helpTip.active = !0, cc.find("dialogBg/desclabel", t.helpTip).getComponent(cc.Label).string = "感谢您的帮助，玩家" + s + "成功获得", 
                                cc.find("dialogBg/zuanshi/num", t.helpTip).getComponent(cc.Label).string = parseInt(c.getIsFHB() ? 1 : o);
                                var n = "hall/payNew/" + (c.getIsFHB() ? "icon_fhd" : "icon_zs");
                                cc.loader.loadRes(n, cc.SpriteFrame, function(e, i) {
                                    if (!e) {
                                        var n = cc.find("dialogBg/pic", t.helpTip);
                                        n.setScale(c.getIsFHB() ? .8 : .5), n.getComponent(cc.Sprite).spriteFrame = i;
                                    }
                                });
                                var a = cc.find("dialogBg/over/num", t.helpTip);
                                a.color = 0 == i ? new cc.Color(219, 100, 100) : new cc.Color(9, 200, 78), a.getComponent(cc.Label).string = i;
                            }
                        });
                    });
                }
            },
            refreshBtn: function() {
                for (var e = [ 1, 2, 3, 4, 5, 6 ], t = [ 1, 2, 3, 4, 5, 6 ], i = 0; i < e.length; i++) this.bottomNode.getChildByName("btn_" + e[i]).active = !1;
                for (var n = 0; n < t.length; n++) {
                    this.bottomNode.getChildByName("btn_" + t[n]).active = !0;
                }
            },
            onClickHead: function() {
                s.aldSendEvent("大厅", {
                    "按钮": "头像"
                }), AMGR.playSound("resources/audio/music/click.mp3", !1);
                var e = this;
                e.headkuang.getComponent(cc.Button).interactable = !1, RESOURCE.getPrefab("hallUserInfo", function(t) {
                    var i = cc.instantiate(t);
                    e.canClickHead = !0, i.getComponent("UserInfo").setType(1), e.node.addChild(i), 
                    i.zIndex = 2, e.headkuang.getComponent(cc.Button).interactable = !0, a.maskFadeIn(i.getChildByName("bgmask"), i.getChildByName("userInfoBg"));
                });
            },
            onClickPaodekuai: function() {
                s.aldSendEvent("大厅", {
                    "按钮": "金币场"
                }), AMGR.playSound("resources/audio/music/click.mp3", !1), this.actionBtns(1, this.actionBtnArray);
                var e = this;
                if (e.fieldNode && e.fieldNode.isValid) {
                    e.fieldNode.active = !0, n.nowOpenView = e.fieldNode;
                    var t = e.fieldNode.getComponent("FieldList");
                    DMGER.getFieldConfig(function(e) {
                        t.setData(e, 81);
                    }, 1);
                } else DMGER.getFieldConfig(function(t) {
                    RESOURCE.getPrefab("hallFieldList", function(i) {
                        e.fieldNode && e.fieldNode.isValid && e.fieldNode.removeFromParent(), e.fieldNode = cc.instantiate(i);
                        var a = e.fieldNode.getComponent("FieldList");
                        e.node.addChild(e.fieldNode), e.fieldNode.zIndex = 1, n.nowOpenView = e.fieldNode, 
                        a.setCallback(e.actionBtns, e.actionBtnArray), a.goToShopCallFunc(function() {
                            e.onClickShop(1);
                        }), a.setData(t, 81);
                    });
                }, 0);
            },
            actionBtns: function(e, t) {
                var i = t;
                if (e != (n.nowFlag || 0)) {
                    n.nowFlag = e;
                    for (var a = 0; a < i.length; a++) for (var o = i[a], s = 0; s < o.btns.length; s++) {
                        var r = o.btns[s];
                        if (0 == o.offset.x && 0 == o.offset.y) r.active = 1 != e; else {
                            var c = r.getComponent(cc.Widget);
                            c && (c.enabled = !1), r.runAction(cc.moveBy(.3, cc.p(o.offset.x * e, o.offset.y * e)));
                        }
                    }
                }
            },
            onClickJoin: function(e) {
                s.aldSendEvent("大厅", {
                    "按钮": "排位赛"
                }), AMGR.playSound("resources/audio/music/click.mp3", !1), a.toastTip("敬请期待");
            },
            onClickHl: function(e) {
                s.aldSendEvent("大厅", {
                    "按钮": "欢乐场"
                }), AMGR.playSound("resources/audio/music/click.mp3", !1), this.actionBtns(1, this.actionBtnArray);
                var t = this;
                if (t.fieldNode && t.fieldNode.isValid) {
                    t.fieldNode.active = !0, n.nowOpenView = t.fieldNode;
                    var i = t.fieldNode.getComponent("FieldList");
                    DMGER.getFieldConfig(function(e) {
                        i.setData(e, 84);
                    }, 1);
                } else DMGER.getFieldConfig(function(e) {
                    RESOURCE.getPrefab("hallFieldList", function(i) {
                        t.fieldNode && t.fieldNode.isValid && t.fieldNode.removeFromParent(), t.fieldNode = cc.instantiate(i);
                        var a = t.fieldNode.getComponent("FieldList");
                        t.node.addChild(t.fieldNode), t.fieldNode.zIndex = 1, n.nowOpenView = t.fieldNode, 
                        a.setCallback(t.actionBtns, t.actionBtnArray), a.goToShopCallFunc(function() {
                            t.onClickShop(1);
                        }), a.setData(e, 84);
                    });
                }, 0);
            },
            onClickHy: function(t) {
                s.aldSendEvent("大厅", {
                    "按钮": "好友约局"
                });
                var i = this;
                AMGR.playSound("resources/audio/music/click.mp3", !1), RESOURCE.preloadModuleRes("friend", function(t) {
                    t >= 1e3 && (e("../tools/Loading").close(), i.actionBtns(1, i.actionBtnArray), i.friendNode && i.friendNode.isValid ? (i.friendNode.active = !0, 
                    n.nowOpenView = i.friendNode) : RESOURCE.getPrefab("friView", function(e) {
                        i.friendNode && i.friendNode.isValid && i.friendNode.removeFromParent(), i.friendNode = cc.instantiate(e);
                        var t = i.friendNode.getComponent("FriendPlay");
                        n.nowOpenView = i.friendNode, t.setCallback(i.actionBtns, i.actionBtnArray), i.node.addChild(i.friendNode), 
                        i.friendNode.zIndex = 1;
                    }));
                });
            },
            onClickCg: function(t) {
                e("../tools/Loading").create(), s.aldSendEvent("大厅", {
                    "按钮": "闯关场"
                });
                var i = this;
                AMGR.playSound("resources/audio/music/click.mp3", !1), JavaRequest.getGuanInfo(null, function(t) {
                    e("../tools/Loading").close();
                    var o = t.data[0];
                    if (o.money > 0) a.redPacketTip("+" + o.money, function() {
                        a.gotoGameScene({
                            type: "82",
                            data: 4
                        });
                    }); else if (n && 1 == n.ServerType || 0 == o.guan) 0 == o.success ? JavaRequest.clearGuanInfo(null, function() {
                        a.gotoGameScene({
                            type: "82",
                            data: 4
                        });
                    }) : a.gotoGameScene({
                        type: "82",
                        data: 4
                    }); else if (1 == o.isRelive) {
                        if (c.getIsFHB()) return i.fhbNode && i.fhbNode.isValid && i.fhbNode.destroy(), 
                        void RESOURCE.getPrefab("hallFhb", function(e) {
                            i.fhbNode = cc.instantiate(e), a.maskFadeIn(i.fhbNode.getChildByName("bg"), i.fhbNode.getChildByName("contentNode")), 
                            i.node.addChild(i.fhbNode, 10);
                        });
                        RESOURCE.getPrefab("comShareTip", function(e) {
                            i.shareTip = cc.instantiate(e), a.maskFadeIn(i.shareTip.getChildByName("bgmask"), i.shareTip.getChildByName("dialogBg")), 
                            i.node.addChild(i.shareTip, 10), i.shareTip.getComponent("ShareTip").initData(2, o.reliveType, o, function() {
                                a.gotoGameScene({
                                    type: "82",
                                    data: 4
                                });
                            });
                        });
                    } else 0 == o.success && 0 == o.reviveTimes ? JavaRequest.clearGuanInfo(null, function() {
                        a.gotoGameScene({
                            type: "82",
                            data: 4
                        });
                    }) : a.gotoGameScene({
                        type: "82",
                        data: 4
                    });
                });
            },
            onClickShop: function(e) {
                s.aldSendEvent("大厅", {
                    "按钮": "商城"
                });
                var t = this;
                if (t.setTime && -1 != t.setTime && (clearTimeout(t.setTime), t.setTime = -1), t.setTime = setTimeout(function() {
                    t.canClickShop = !0;
                }, 1e3), this.canClickShop) {
                    if (this.canClickShop = !1, t.actionBtns(1, t.actionBtnArray), this.gameList.active = !1, 
                    void 0 == DMGER.fkstoreConfig || null == DMGER.fkstoreConfig || 0 == DMGER.fkstoreConfig.length) return a.toastTip("商城配置为空"), 
                    void (t.canClickShop = !0);
                    RESOURCE.getPrefab("hallShop", function(i) {
                        var n = cc.instantiate(i), a = n.getComponent("ShopView");
                        a.setCallback(function(e, i, n) {
                            n && "open" == n ? (t.isCloseFunc = !0, t.inviteScript.getInviteListFunc()) : t.actionBtns(e, i);
                        }, t.actionBtnArray), e && 2 == e ? a.onClickZs() : a.goodsView.active = !0, t.node.addChild(n), 
                        n.zIndex = 2, t.shopNode = n;
                    });
                }
            },
            onClickSet: function() {
                s.aldSendEvent("大厅", {
                    "按钮": "关注领奖"
                }), AMGR.playSound("resources/audio/music/click.mp3", !1), e("../tools/weixin").customerService();
            },
            onClickShare: function() {
                s.aldSendEvent("大厅", {
                    "按钮": "分享"
                }), AMGR.playSound("resources/audio/music/click.mp3", !1);
                s.onMenuShareAppMessage({
                    cbSucc: function(e) {
                        s.aldSendEvent("大厅", {
                            "按钮": "分享成功"
                        });
                    },
                    cbFail: function() {
                        s.aldSendEvent("大厅", {
                            "按钮": "分享失败"
                        });
                    }
                });
            },
            uploadRedPacketInfo: function() {
                n && 2 === n.ServerType && JavaRequest.redPackInfo({
                    type: 0
                }, function(e) {
                    var t = e.data[0].historyPack, i = {
                        wxgame: {
                            score: Math.ceil(t),
                            update_time: parseInt(new Date().getTime() / 1e3)
                        }
                    };
                    i = JSON.stringify(i), s.setUserCloudStorage([ {
                        key: "redPack",
                        value: i
                    } ]);
                });
            },
            onClickExchange: function() {
                s.aldSendEvent("大厅", {
                    "按钮": "兑换"
                }), AMGR.playSound("resources/audio/music/click.mp3", !1);
                var e = this;
                RESOURCE.getPrefab("hallExchange", function(t) {
                    e.exchangeNode && e.exchangeNode.isValid && e.exchangeNode.removeFromParent(), e.exchangeNode = cc.instantiate(t), 
                    e.node.addChild(e.exchangeNode), e.exchangeNode.zIndex = 2, a.maskFadeIn(e.exchangeNode.getChildByName("bgmask"), e.exchangeNode.getChildByName("dialogBg")), 
                    JavaRequest.redPackInfo({
                        type: 0
                    }, function(t) {
                        e.exchangeNode.getComponent("Exchange").setData(t.data[0]);
                    });
                });
            },
            registEvent: function() {
                var e = this;
                pdkEvent.registEvent(pdkEvent.eventName.hallUpdateEmail, function(t) {
                    e.maileRedPoint && (e.maileRedPoint.active = t.isHasNoRead);
                }, e.node), pdkEvent.registEvent(pdkEvent.eventName.refreshHallData, function(e) {
                    a.sceneLog("refreshHallDataaaaa"), r.send2540();
                }, e.node), pdkEvent.registEvent(pdkEvent.eventName.redPacketSuc, function(e) {
                    a.redPackNode && a.redPackNode.isValid && (a.redPackNode.destroy(), a.redPackNode = null);
                });
            },
            onClickEmail: function() {
                s.aldSendEvent("大厅", {
                    "按钮": "邮件"
                });
                var e = this;
                AMGR.playSound("resources/audio/music/click.mp3", !1), RESOURCE.getPrefab("hallEmail", function(t) {
                    var i = cc.instantiate(t);
                    i.setPosition(cc.p(0, 0)), e.node.addChild(i), a.maskFadeIn(i.getChildByName("bg"), i.getChildByName("mainNode"));
                });
            },
            onClickActivityInvite: function() {
                a.toastTip("邀请有奖");
            },
            onClickHelpTip: function(e) {
                console.log("进来了" + e), this.helpTip.active = !1, e && this.inviteScript.getInviteListFunc();
            },
            onClickDailyGift: function() {
                AMGR.playSound("resources/audio/music/click.mp3", !1), s.aldSendEvent("大厅", {
                    "按钮": "每日礼包"
                });
                var t = this, i = function(i) {
                    if (0 === i.error) {
                        var o = i.data[0].gold, r = n.successTipNode;
                        a.maskFadeIn(r.getChildByName("2px"), r.getChildByName("NewSprite"));
                        var c = cc.find("NewSprite/showType/zuan", r).getComponent(cc.Sprite);
                        c.node.active = !0;
                        var l = r.getComponent("SuccessTip").listPNG;
                        o > 0 && (s.aldSendEvent("每日礼包", {
                            "结果": "领奖成功"
                        }), r.active = !0, c.spriteFrame = l[5], r.getChildByName("NewSprite").getChildByName("showType").getChildByName("zuan").getChildByName("txt").getComponent(cc.Label).string = o + "金币");
                    } else e("../tools/Dialog").create({
                        content: "今日领奖已领取",
                        btnstring: [ 1, "确定" ]
                    });
                    t.getDailyGiftStaus();
                };
                e("../tools/Loading").create(), RESOURCE.getPrefab("hallDailyGift", function(n) {
                    var o = cc.instantiate(n), s = {};
                    s.cbFun = i, o.getComponent("DailyGiftPopup").setData(s), o.zIndex = 1e3, t.node.addChild(o), 
                    a.maskFadeIn(o.getChildByName("bg"), o.getChildByName("viewNode")), e("../tools/Loading").close();
                });
            },
            getDailyGiftStaus: function() {
                var e = this;
                this.isShowDailyGift() ? JavaRequest.dailyLoginBonusInfo(null, function(t) {
                    0 === t.error && (n.isGetDailyGift = t.data[0].isGet > 0, e.setDailyGiftRed(), n.isGetDailyGift && (o.setUserSetting("lastDailyGiftTime_" + n.USER.mid, Date.now()), 
                    e.dailyGiftBtn.active = !n.isGetDailyGift));
                }) : this.dailyGiftBtn.active = !1;
            },
            setDailyGiftRed: function() {
                console.log("今天领过了吗 ：", n.isGetDailyGift), this.node && this.giftRed && n && 1 !== n.ServerType && (this.giftRed.active = !n.isGetDailyGift);
            },
            isShowDailyGift: function() {
                if (!cc.sys.isMobile) return !0;
                var e = wx.getSystemInfoSync().version.replace(/\./g, "");
                return e = e.length < 3 ? parseInt(e + "0") : parseInt(e), console.log(" curVer ------ : ", e), 
                e >= 671;
            },
            getSignInData: function(t) {
                var i = this;
                e("../tools/Loading").create(), JavaRequest.dailyLoginSignInfo(null, function(a) {
                    e("../tools/Loading").close(), console.error("签到信息 data = ", a), n.signInData = a.data[0], 
                    i.node && i.signRed && n && 1 !== n.ServerType && (i.signRed.active = 1 === n.signInData.isCan), 
                    t && t();
                });
            },
            checkShowSignIn: function() {
                var e = function() {
                    if (0 !== n.signInData.isCan) {
                        var e = o.getUserSetting("lastSignInTime_" + n.USER.mid, 0) / 1e3, t = Date.now() / 1e3, i = o.getPassDay(e, t);
                        console.log("lastSignInTime ----- ", e, " curTime ------- ", t, " day --------- ", i), 
                        i > 0 && this.onShowSignPopup(!1);
                    }
                }.bind(this);
                this.getSignInData(e);
            },
            onShowSignPopup: function(t) {
                var i = this;
                !0 === t && (AMGR.playSound("resources/audio/music/click.mp3", !1), s.aldSendEvent("大厅", {
                    "按钮": "每日签到"
                }));
                var r = function() {
                    o.setUserSetting("lastSignInTime_" + n.USER.mid, Date.now()), e("../tools/Loading").create(), 
                    RESOURCE.getPrefab("hallSignIn", function(t) {
                        var o = cc.instantiate(t), r = {};
                        r.signInData = n.signInData, r.rewardCb = function(e, t, o) {
                            console.error("签到领奖 data = ", e);
                            var r = e.data[0];
                            if (0 === e.error && 0 === r.hadGet) {
                                s.aldSendEvent("每日签到", {
                                    "结果": "领奖成功"
                                });
                                var c = r.type, l = n.successTipNode;
                                a.maskFadeIn(l.getChildByName("2px"), l.getChildByName("NewSprite"));
                                var d = cc.find("NewSprite/showType/zuan", l).getComponent(cc.Sprite);
                                d.node.active = !0, o && (d.node.position = o), l.active = !0, d.spriteFrame = t;
                                var h = l.getChildByName("NewSprite").getChildByName("showType").getChildByName("zuan").getChildByName("txt").getComponent(cc.Label);
                                1 === c ? h.string = e.data[0].gold + "金币" : 2 === c ? h.string = e.data[0].diamond + "钻石" : 3 === c && (h.string = e.data[0].money + "元红包");
                            } else a.toastTip("今日领奖已领取");
                            i.getSignInData();
                        }, o.getComponent("SignInPopup").setData(r), i && i.node && !i.node.getChildByName("signInpopup") && (o.zIndex = 1e3, 
                        i.node.addChild(o), a.maskFadeIn(o.getChildByName("bg"), o.getChildByName("signNode"))), 
                        e("../tools/Loading").close();
                    });
                };
                if (!n.signInData) return e("../tools/Loading").create(), void this.getSignInData(r);
                r();
            }
        }), cc._RF.pop();
    }, {
        "../Config": "Config",
        "../common/Common": "Common",
        "../net/ParseSocket": "ParseSocket",
        "../net/SendCMD": "SendCMD",
        "../tools/Dialog": "Dialog",
        "../tools/Loading": "Loading",
        "../tools/utils": "utils",
        "../tools/weixin": "weixin",
        PdkDatamanager: "PdkDatamanager"
    } ],
    HeadPortrait: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c2418gFUEJIxb0Jpa6ytR0N", "HeadPortrait"), cc.Class({
            extends: cc.Component,
            properties: {
                url: ""
            },
            onLoad: function() {
                "" != this.url && e("Common").loadUrlImage(this.node.getChildByName("headMask").getChildByName("head").getComponent(cc.Sprite), url, "head");
            },
            loadImg: function(t) {
                if (null != t && "" != t) {
                    e("Common").loadUrlImage(this.node.getChildByName("headMask").getChildByName("head").getComponent(cc.Sprite), t, "head");
                } else this.setDefault();
            },
            setDefault: function(e) {
                var t = this, i = "com/textures/default";
                e && (i = e), cc.loader.loadRes(i, cc.SpriteFrame, function(e, i) {
                    t.node.getChildByName("headMask").getChildByName("head").getComponent(cc.Sprite).spriteFrame = i;
                });
            },
            start: function() {}
        }), cc._RF.pop();
    }, {
        Common: "Common"
    } ],
    InviteFriend: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "cadfd/qu7RJnb3fF9e6ZW07", "InviteFriend");
        var n = e("../Config"), a = e("../common/Common"), o = e("../tools/weixin"), s = e("PdkDatamanager");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.regisetEvent();
            },
            regisetEvent: function() {
                pdkEvent.registEvent(pdkEvent.eventName.showInvite, function(e) {
                    this.getInviteListFn();
                }.bind(this), this.node);
            },
            init: function(e) {
                var t = this;
                this.inviteView = cc.find("inviteView", this.node), this.playList = this.inviteView.getChildByName("view").getChildByName("playList"), 
                this.successTip = cc.find("successTip", this.node.parent), this.successTip.getChildByName("NewSprite").getChildByName("okBtn").on("click", function() {
                    if (t.successTip.active = !1, t.inviteDataList) {
                        for (var e = 0; e < t.inviteDataList.length; e++) {
                            t.playList.children[e].getChildByName("selected").active = 2 == t.inviteDataList[e].status;
                        }
                        t.hideRedPoint();
                    }
                }, this), this.dialog = cc.find("dialog", this.node), this.dialog.zIndex = 2, this.dialog.getChildByName("dialogBg").getChildByName("yaoqing").on("click", this.inviteFriend, this), 
                this.dialog.getChildByName("bgmask").on("click", function() {
                    t.dialog.active = !1;
                }, this), this.inviteView.getChildByName("1px").on("click", function() {
                    t.inviteView.active = !1;
                    for (var i = 0; i < t.playList.children.length; i++) {
                        t.playList.children[i].targetOff(t);
                    }
                    e && e();
                }, this), this.inviteView.getChildByName("view").getChildByName("getAll").on("click", this.getAllGold, this), 
                this.updateLqType();
            },
            updateLqType: function() {
                var e = this, t = s.getIsFHB();
                cc.find("inviteView/view/title", e.node).getComponent(cc.Label).string = pdkShowContent.inviteLqTile.replace("{t}", t ? "领复活币" : "领钻石");
                var i = "hall/invite/" + (t ? "bg_yqfh" : "bg_yaoqing");
                cc.loader.loadRes(i, cc.SpriteFrame, function(t, i) {
                    t || (cc.find("inviteView/view", e.node).getComponent(cc.Sprite).spriteFrame = i);
                });
                var n = cc.find("inviteView/view/goods", e.node);
                if (n) for (var a = "hall/payNew/" + (t ? "icon_fh" : "zstb"), o = function(e) {
                    var i = n.children[e];
                    t && (i.getChildByName("lqCount").getComponent(cc.Label).string = "1"), cc.loader.loadRes(a, cc.SpriteFrame, function(e, n) {
                        if (!e) {
                            var a = i.getChildByName("lqType");
                            a.setScale(t ? .55 : .6), a.getComponent(cc.Sprite).spriteFrame = n;
                        }
                    });
                }, r = 0; r < n.children.length; r++) o(r);
            },
            inviteFriend: function() {
                o.aldSendEvent("邀请有奖", {
                    "按钮": "邀请好友"
                });
                var e = this, t = a.getDay(), i = "mid=" + n.USER.mid + "&name=" + n.USER.name + "&shareTime=" + t + "&type=1";
                o.onMenuShareAppMessage({
                    imageNum: 4,
                    queryStr: i,
                    cbSucc: function() {
                        e.dialog.active = !1, o.aldSendEvent("邀请有奖", {
                            "按钮": "邀请好友成功"
                        });
                    },
                    cbFail: function() {
                        o.aldSendEvent("邀请有奖", {
                            "按钮": "邀请好友失败"
                        });
                    }
                }), n.shareSwitch && (e.dialog.active = !1);
            },
            getAllGold: function() {
                o.aldSendEvent("邀请有奖", {
                    "按钮": "一键领取"
                }), AMGR.playSound("resources/audio/music/click.mp3", !1);
                var e = this;
                JavaRequest.getInviteList(function(t) {
                    if (0 == t.error && e.node) {
                        e.inviteDataList = t.data[0].playerList;
                        for (var i = 0, n = 0, o = 0; o < e.inviteDataList.length; o++) 1 == e.inviteDataList[o].status ? i++ : 0 == e.inviteDataList[o].status && n++;
                        i > 0 ? e.getGoldByInviteFunc() : n > 0 && (e.dialog.active = !0, a.maskFadeIn(e.dialog.getChildByName("bgmask"), e.dialog.getChildByName("dialogBg")));
                    }
                });
            },
            getInviteListFunc: function() {
                o.aldSendEvent("大厅", {
                    "按钮": "邀请有奖"
                }), AMGR.playSound("resources/audio/music/click.mp3", !1), this.getInviteListFn();
            },
            getInviteListFn: function() {
                var e = this;
                e.inviteView.active = !0, e.inviteView.parent.zIndex = 1e3, e.successTip.zIndex = 1003;
                var t = e.inviteView.getChildByName("1px"), i = e.inviteView.getChildByName("view");
                a.maskFadeIn(t, i), JavaRequest.getInviteList(function(t) {
                    if (0 == t.error && e.node) {
                        e.inviteDataList = t.data[0].playerList;
                        for (var i = 0, n = function(t) {
                            var n = e.playList.children[t], o = e.inviteDataList[t];
                            n.getChildByName("selected").active = !1, 0 != o.status ? (n.active = !0, o.icon ? a.loadUrlImage(n.getChildByName("border").getComponent(cc.Sprite), o.icon, "headInvite") : cc.loader.loadRes("com/textures/default", cc.SpriteFrame, function(e, t) {
                                e || (n.getComponent(cc.Sprite).spriteFrame = t);
                            }), 5 == t && (n.getComponent(cc.Button).interactable = !0, n.getChildByName("grayScreet").active = !1), 
                            2 == o.status ? (n.getChildByName("selected").active = !0, n.off("click", null), 
                            i++) : n.on("click", e.getGoldByIndex.bind(e, o.index, t))) : t < 5 ? n.on("click", e.inviteFriend, e) : 5 == t && (n.getComponent(cc.Button).interactable = !1, 
                            n.getChildByName("grayScreet").active = !0);
                        }, o = 0; o < e.playList.children.length; o++) n(o);
                        cc.find("view/getAll", e.inviteView).active = 6 != i;
                    }
                });
            },
            getGoldByIndex: function(t, i) {
                var n = this;
                JavaRequest.getGoldByOne(t, function(t) {
                    if (0 == t.error && n.node) {
                        s.setFHCount(t.data[0].currencyAll);
                        var a = s.getIsFHB();
                        if (0 == t.data[0].currency && 0 == t.data[0].gold) return void (a && s.getFHCount() >= 5 && e("../tools/Dialog").create({
                            content: pdkShowContent.fhbIsMaxShow,
                            btnstring: [ 1, "确定" ]
                        }));
                        n.succShow(t.data[0].currency, t.data[0].gold), (a ? t.data[0].currency : t.data[0].gold) > 0 && (n.playList.children[i].off("click", null), 
                        n.inviteDataList[i].status = 2), a && t.data[0].gold > 0 && (n.inviteDataList[5].status = 2), 
                        n.hideRedPoint();
                    }
                });
            },
            getGoldByInviteFunc: function() {
                var t = this;
                JavaRequest.getGoldByInvite(function(i) {
                    if (0 == i.error && t.node) {
                        var n = s.getIsFHB(), a = i.data[0].currencyAll - s.getFHCount();
                        if (s.setFHCount(i.data[0].currencyAll), 0 == i.data[0].currency && 0 == i.data[0].gold) return void (n && s.getFHCount() >= 5 && e("../tools/Dialog").create({
                            content: pdkShowContent.fhbIsMaxShow,
                            btnstring: [ 1, "确定" ]
                        }));
                        if (t.succShow(i.data[0].currency, i.data[0].gold), (n ? i.data[0].currency : i.data[0].gold) > 0) for (var o = 0, r = 0; r < t.inviteDataList.length; r++) if (1 == t.inviteDataList[r].status) {
                            if (n && o >= a) break;
                            t.inviteDataList[r].status = 2, o++;
                        }
                        n && i.data[0].gold > 0 && (t.inviteDataList[5].status = 2), t.hideRedPoint();
                    }
                });
            },
            hideRedPoint: function() {
                for (var e = !1, t = 0; t < this.inviteDataList.length; t++) if (1 == this.inviteDataList[t].status) {
                    e = !0;
                    break;
                }
                !e && this.removeRed && this.removeRed();
            },
            succShow: function(e, t) {
                e = e || 0, t = t || 0, this.successTip.active = !0, a.maskFadeIn(this.successTip.getChildByName("2px"), this.successTip.getChildByName("NewSprite"));
                var i = cc.find("NewSprite/showType/zuan", this.successTip), n = cc.find("NewSprite/showType/fhb", this.successTip);
                if (0 == t && 0 == e) {
                    var o = s.getIsFHB();
                    return n.active = o, i.active = !o, cc.find("txt", i).getComponent(cc.Label).string = "0钻石", 
                    void (cc.find("txt", n).getComponent(cc.Label).string = "0复活币");
                }
                if (e > 0 ? (n.active = !0, cc.find("txt", n).getComponent(cc.Label).string = e + "复活币") : n.active = !1, 
                t > 0) {
                    i.active = !0;
                    var r = i.getComponent(cc.Sprite), c = this.successTip.getComponent("SuccessTip").listPNG;
                    1 == t ? r.spriteFrame = c[0] : t > 1 && t < 3 ? r.spriteFrame = c[1] : t >= 3 && t < 6 ? r.spriteFrame = c[2] : t >= 6 && t < 10 && (r.spriteFrame = c[3]), 
                    cc.find("txt", i).getComponent(cc.Label).string = t + "钻石";
                } else i.active = !1;
            },
            setRedPointCallFunc: function(e) {
                this.removeRed = e, console.log("设置了回调" + this.removeRed);
            }
        }), cc._RF.pop();
    }, {
        "../Config": "Config",
        "../common/Common": "Common",
        "../tools/Dialog": "Dialog",
        "../tools/weixin": "weixin",
        PdkDatamanager: "PdkDatamanager"
    } ],
    JavaRequest: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "03ccdcNgeVH6q08hedTUr3F", "JavaRequest");
        var n = e("../tools/utils"), a = e("../Config"), o = e("../common/Common"), s = e("PdkDatamanager");
        window.JavaRequest = {
            JavaApi: {
                api_getOnlineVersion: "/api/getMiniGameOnlineVersion.do",
                api_miniProgramLogin: "/api/miniProgramLogin.html",
                api_login: "/api/login.do",
                api_load: "/api/load.do",
                api_getStore: "/api/config/getAllStore.do",
                api_exchangeGold: "/api/exchange/doDiamondExchange.do",
                api_surfAdsGetMoney: "/api/get/surfAdsGetMoney.do",
                api_getRoom: "/api/config/getRoom.do",
                api_getGameRecord: "/api/getGameRecord.do",
                api_getHonorDetail: "/api/getHonorDetail.do",
                api_getMails: "/api/notice/getMails.do",
                api_getMiniGameMaillFujian: "/api/notice/getMiniGameMaillFujian.do",
                api_checkMail: "/api/notice/checkMail.do",
                api_getNoviceByUserMid: "/api/novice/getNoviceByUserMid.do",
                api_resurrection: "/api/set/currency/resurrection.do",
                api_resurrectionInfo: "/api/get/currency/resurrectionInfo.do",
                api_getMiniGameShareQr: "/api/getMiniGameShareQr.do",
                api_getShareGold: "/api/getShareGold.do",
                api_getSmallOverRedpacket: "/api/get/redPacket.do",
                api_redPackInfo: "/api/get/redPackInfo.do",
                api_getMoney: "/api/withdraw/cash.do",
                api_setRelationship: "/api/set/bindingRelationship.do",
                api_getInviteList: "/api/get/bindingRelationship.do",
                api_goldByInvite: "/api/get/goldByInvite.do",
                api_goldByOne: "/api/get/goldByInviteByIndex.do",
                api_getInviteInfo: "/api/get/helpInfo.do",
                api_getBankruptcyInfo: "/api/get/bankruptcyGrantInfo.do",
                api_getGoldByBankruptcy: "/api/get/bankruptcyGrant.do",
                api_bankruptcyGrant2: "/api/get/bankruptcyGrant2.do",
                api_adToRevive: "/api/set/surfAds/resurrectionInfo.do",
                api_revive2: "/api/set/group/resurrection2.do",
                api_ShareSwitch: "/api/getMiniGameSwitch.do",
                api_getGuanInfo: "/api/get/guanInfo.do",
                api_getGuanInfo2: "/api/get/guanInfo2.do",
                api_shareGroup: "/api/set/group/resurrection.do",
                api_shareFriend: "/api/set/friend/resurrection.do",
                api_getGuanRedpack: "/api/get/stageModeRedPack.do",
                api_clearGuanInfo: "/api/del/groupFriendHelpInfo.do",
                api_getGimmick: "/api/get/gimmickInfo.do",
                api_refreshSessionKey: "/api/set/refreshMiniProgramUser.do",
                api_getMyLevel: "/api/qualify/get/getPlayerQualifyLevel.do",
                api_upLevel: "/api/qualify/get/upOrDownQualifyLevel.do",
                api_addStar: "/api/qualify/get/additionalStar.do",
                api_protectStar: "/api/qualify/get/protectStar.do",
                api_getPlayLevel: "/api/qualify/get/getOtherPlayerQualifyLevel.do",
                api_getQualifySeasonInfo: "/api/qualify/get/getQualifySeasonInfo.do",
                dailyLoginBonusInfo: "/api/get/dailyLoginBonusInfo.do",
                dailyLoginBonus: "/api/get/dailyLoginBonus.do",
                dailyLoginSignInfo: "/api/get/dailyLoginSignInfo.do",
                dailyLoginSign: "/api/get/dailyLoginSign.do"
            }
        }, JavaRequest.checkServerVersion = function(t, i) {
            n.httpjava(null, a.API_URL_JAVA + this.JavaApi.api_getOnlineVersion, t, function(t) {
                0 == t.error ? i && i(t) : e("../tools/Dialog").create({
                    content: "获取版本号失败error:" + t.error,
                    btnstring: [ 1, "确定" ]
                });
            }, "POST");
        }, JavaRequest.miniProgramLogin = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA + this.JavaApi.api_miniProgramLogin, e, function(e) {
                t && t(e);
            }, "POST");
        }, JavaRequest.login = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA + this.JavaApi.api_login, e, function(e) {
                t && t(e);
            }, "POST");
        }, JavaRequest.getNoviceByUserMid = function(e) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_getNoviceByUserMid, {
                sesskey: a.USER.sesskey,
                mid: a.USER.mid
            }, function(t) {
                t.result && (s.setUserIsNew(1 == (t.data[0].stageMode || 0)), e && e(t));
            }, "POST");
        }, JavaRequest.resurrection = function(e) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_resurrection, {
                sesskey: a.USER.sesskey,
                mid: a.USER.mid
            }, function(t) {
                e && e(t);
            }, "POST");
        }, JavaRequest.resurrectionInfo = function(e) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_resurrectionInfo, {
                sesskey: a.USER.sesskey
            }, function(t) {
                t && t.result && t.data && (s.setIsFHB(1 == t.data[0].resurType), s.setFHCount(t.data[0].num || 0)), 
                e && e(t);
            }, "POST");
        }, JavaRequest.getMiniGameShareQr = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA + this.JavaApi.api_getMiniGameShareQr, {
                scene: e.scene
            }, function(e) {
                t && t(e);
            }, "POST");
        }, JavaRequest.load = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA + this.JavaApi.api_load, e, function(e) {
                t && t(e);
            }, "POST");
        }, JavaRequest.getStore = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA + this.JavaApi.api_getStore, e, function(e) {
                t && t(e);
            }, "POST");
        }, JavaRequest.exchangeGold = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA + this.JavaApi.api_exchangeGold, e, function(e) {
                t && t(e);
            }, "POST");
        }, JavaRequest.getShareGold = function(t, i) {
            n.httpjava(null, a.API_URL_JAVA + this.JavaApi.api_getShareGold, {
                type: t.type
            }, function(t) {
                0 == t.error ? i && i(t) : e("../tools/Dialog").create({
                    content: "今日获奖次数已达上限,请明日继续！",
                    btnstring: [ 1, "确定" ]
                });
            }, "POST");
        }, JavaRequest.getSmallOverRedpacket = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_getSmallOverRedpacket, {
                playType: Number(e.playType),
                channel: e.type
            }, function(e) {
                0 == e.error ? t && t(e) : o.toastTip("失败" + e.error);
            }, "POST");
        }, JavaRequest.redPackInfo = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_redPackInfo, {
                type: e.type
            }, function(e) {
                0 == e.error ? t && t(e) : o.toastTip("失败" + e.error);
            }, "POST");
        }, JavaRequest.getMoney = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_getMoney, {
                openid: n.getUserSetting("openId", "")
            }, function(e) {
                0 == e.error ? (o.redPacketTip2(), t && t(e)) : -3 == e.error ? o.toastTip("金额不足5.00元") : o.toastTip("提现失败" + e.error);
            }, "POST");
        }, JavaRequest.setRelationship = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_setRelationship, {
                inviter: e.query.mid,
                player: a.USER.mid,
                stamp: e.query.shareTime
            }, function(e) {
                0 == e.error && t && t(e);
            }, "POST");
        }, JavaRequest.getInviteList = function(e) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_getInviteList, {}, function(t) {
                0 == t.error && e && e(t);
            }, "POST");
        }, JavaRequest.getGoldByInvite = function(e) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_goldByInvite, {}, function(t) {
                0 == t.error && e && e(t);
            }, "POST");
        }, JavaRequest.getGoldByOne = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_goldByOne, {
                index: e || 0
            }, function(e) {
                0 == e.error && t && t(e);
            }, "POST");
        }, JavaRequest.getPlayInfo = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_getInviteInfo, {
                inviter: e,
                player: a.USER.mid
            }, function(e) {
                0 == e.error && t && t(e);
            }, "POST");
        }, JavaRequest.getBankruptcyInfo = function(e) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_getBankruptcyInfo, {}, function(t) {
                0 == t.error && e && e(t);
            });
        }, JavaRequest.getMails = function(e) {
            n.httpjava(null, a.API_URL_JAVA + this.JavaApi.api_getMails, {
                sesskey: a.USER.sesskey
            }, function(t) {
                e && e(t);
            }, "POST");
        }, JavaRequest.checkMail = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA + this.JavaApi.api_checkMail, {
                sesskey: a.USER.sesskey,
                mailid: e
            }, function(e) {
                t && t(e);
            }, "POST");
        }, JavaRequest.getMiniGameMaillFujian = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA + this.JavaApi.api_getMiniGameMaillFujian, {
                sesskey: a.USER.sesskey,
                mailid: e
            }, function(e) {
                t && t(e);
            }, "POST");
        }, JavaRequest.getGoldByBankruptcy = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_getGoldByBankruptcy, {
                encryptedData: e.encryptedData,
                iv: e.iv
            }, function(e) {
                0 == e.error ? t && t(e) : -3 == e.error && o.toastTip("该群今日已经分享过了，请换一个");
            });
        }, JavaRequest.bankruptcyGrant2 = function(e) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_bankruptcyGrant2, {}, function(t) {
                0 == t.error ? e && e(t) : -3 == t.error && o.toastTip("领取失败");
            });
        }, JavaRequest.getGuanInfo = function(e, t) {
            var i = a.isSpecial ? this.JavaApi.api_getGuanInfo2 : this.JavaApi.api_getGuanInfo;
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + i, {
                playType: 82
            }, function(e) {
                0 == e.error ? t && t(e) : o.toastTip("error：" + e.error);
            });
        }, JavaRequest.shareGroup = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_shareGroup, {
                encryptedData: e.encryptedData,
                iv: e.iv
            }, function(e) {
                0 == e.error ? t && t(e) : -2 == e.error ? (o.toastTip("您已分享过此群，2小时内不可重复分享。"), a.justOne = !0) : (o.toastTip("group error：" + e.error), 
                a.justOne = !0);
            });
        }, JavaRequest.shareFriend = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_shareFriend, {
                fMid: e.mid,
                stamp: e.stamp
            }, function(e) {
                0 == e.error ? t && t(e) : -2 == e.error || -3 == e.error || o.toastTip("error：" + e.error);
            });
        }, JavaRequest.getGuanRedpack = function(e, t, i) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_getGuanRedpack, {
                playType: 82
            }, function(e) {
                0 == e.error ? t && t(e) : (-2 == e.error && (pdkEvent.emitEvent(pdkEvent.eventName.redPacketSuc), 
                o.toastTip(pdkShowContent.hbLqEd)), i && i());
            });
        }, JavaRequest.clearGuanInfo = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_clearGuanInfo, {}, function(e) {
                0 == e.error ? (a.curGuan = 1, t && t(e)) : o.toastTip("error：" + e.error);
            });
        }, JavaRequest.getGimmick = function(e) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_getGimmick, {}, function(t) {
                e && e(t);
            });
        }, JavaRequest.getRoomConfig = function(e) {
            n.httpjava(null, a.API_URL_JAVA + this.JavaApi.api_getRoom, {}, function(t) {
                e && e(t);
            });
        }, JavaRequest.refreshSessionKey = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_refreshSessionKey, {
                code: e
            }, function(e) {
                t && t(e);
            });
        }, JavaRequest.surfAdsGetMoney = function(e) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_surfAdsGetMoney, {}, function(t) {
                e && e(t);
            });
        }, JavaRequest.adToRevive = function(e) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_adToRevive, {}, function(t) {
                e && e(t);
            });
        }, JavaRequest.revive2 = function(e) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_revive2, {}, function(t) {
                e && e(t);
            });
        }, JavaRequest.shareSwitch = function(e) {
            n.httpjava(null, a.API_URL_JAVA + this.JavaApi.api_ShareSwitch, {}, function(t) {
                e && e(t);
            });
        }, JavaRequest.getMyRecord = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA + this.JavaApi.api_getGameRecord, {
                sesskey: a.USER.sesskey,
                page: e.page,
                type: e.type,
                isAgent: e.isAgent
            }, function(e) {
                t && t(e);
            });
        }, JavaRequest.getHonorDetail = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA + this.JavaApi.api_getHonorDetail, {
                sesskey: a.USER.sesskey,
                ids: e.ids
            }, function(e) {
                t && t(e);
            });
        }, JavaRequest.getMyLevel = function(e) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_getMyLevel, {}, function(t) {
                e && e(t);
            });
        }, JavaRequest.getPlayLevel = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_getPlayLevel, {
                mid: e.mid
            }, function(e) {
                t && t(e);
            });
        }, JavaRequest.upLevel = function(e) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_upLevel, {}, function(t) {
                e && e(t);
            });
        }, JavaRequest.addStar = function(e) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_addStar, {}, function(t) {
                e && e(t);
            });
        }, JavaRequest.protectStar = function(e) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_protectStar, {}, function(t) {
                e && e(t);
            });
        }, JavaRequest.getQualifySeasonInfo = function(e) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.api_getQualifySeasonInfo, {}, function(t) {
                e && e(t);
            });
        }, JavaRequest.dailyLoginBonusInfo = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.dailyLoginBonusInfo, {
                sesskey: a.USER.sesskey
            }, function(e) {
                t && t(e);
            });
        }, JavaRequest.dailyLoginBonus = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.dailyLoginBonus, {
                sesskey: a.USER.sesskey
            }, function(e) {
                t && t(e);
            });
        }, JavaRequest.dailyLoginSignInfo = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.dailyLoginSignInfo, {
                sesskey: a.USER.sesskey
            }, function(e) {
                t && t(e);
            });
        }, JavaRequest.dailyLoginSign = function(e, t) {
            n.httpjava(null, a.API_URL_JAVA_ACTIVITY + this.JavaApi.dailyLoginSign, {
                sesskey: a.USER.sesskey,
                isDouble: e.isDouble
            }, function(e) {
                t && t(e);
            });
        }, t.exports = JavaRequest, cc._RF.pop();
    }, {
        "../Config": "Config",
        "../common/Common": "Common",
        "../tools/Dialog": "Dialog",
        "../tools/utils": "utils",
        PdkDatamanager: "PdkDatamanager"
    } ],
    JiaRuRoom: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "0b65dz6qPNN4K96L8lMv409", "JiaRuRoom");
        var n = e("../net/SendCMD");
        e("../common/Common");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                var t = this;
                e("../pdk/PdkParseScoket").app.on("pdkcmd", function(i) {
                    var n = i.getUserData();
                    1001 == n.cmd && (-1102 == n.data ? e("../tools/Dialog").create({
                        content: "此房间不存在",
                        btnstring: [ 1, "确定" ],
                        callback: function(e) {
                            0 != e && 2 != e || t.cleanAll();
                        }
                    }) : -1 == n.data && e("../tools/Dialog").create({
                        content: "房间人数已满！",
                        btnstring: [ 1, "确定" ],
                        callback: function(e) {
                            0 != e && 2 != e || t.cleanAll();
                        }
                    }));
                }), this.mask = cc.find("mask", this.node).on("click", this.close, this);
            },
            init: function() {
                this.canClick = !0, this.numList = [], this.showNum = cc.find("view/keyboard/showNum", this.node), 
                this.tipNode = cc.find("view/keyboard/tip", this.node), this.keyBoard = cc.find("view/keyboard/key", this.node);
                for (var e = 1; e < 10; e++) {
                    var t = e - 1;
                    this.keyBoard.children[t].on("click", this.inputNum.bind(this, e));
                }
                this.keyBoard.children[9].on("click", this.cleanAll, this), this.keyBoard.children[10].on("click", this.inputNum.bind(this, 0)), 
                this.keyBoard.children[11].on("click", this.delete, this);
            },
            inputNum: function(e) {
                if (this.tipNode.active = !1, this.canClick) {
                    this.canClick = !1;
                    var t = this.numList.length;
                    if (t < 5) this.showNum.children[t].getChildByName("num").getComponent(cc.Label).string = e, 
                    this.numList.push(e), this.canClick = !0; else if (5 == t) {
                        this.showNum.children[t].getChildByName("num").getComponent(cc.Label).string = e, 
                        this.numList.push(e);
                        for (var i = "", a = 0; a < this.numList.length; a++) i += this.numList[a];
                        this.canClick = !0, n.inRoom(i);
                    } else this.canClick = !0;
                }
            },
            cleanAll: function() {
                if (this.canClick) {
                    this.canClick = !1;
                    for (var e = 0; e < 6; e++) this.showNum.children[e].getChildByName("num").getComponent(cc.Label).string = "";
                    this.numList.length = 0, this.tipNode.active = !0, this.canClick = !0;
                }
            },
            delete: function() {
                if (this.canClick) {
                    this.canClick = !1;
                    var e = this.numList.length;
                    if (e > 0) {
                        var t = e - 1;
                        this.numList.length = t, this.showNum.children[t].getChildByName("num").getComponent(cc.Label).string = "", 
                        0 == t && (this.tipNode.active = !0), this.canClick = !0;
                    } else this.tipNode.active = !0, this.canClick = !0;
                }
            },
            close: function() {
                this.node.destroy();
            }
        }), cc._RF.pop();
    }, {
        "../common/Common": "Common",
        "../net/SendCMD": "SendCMD",
        "../pdk/PdkParseScoket": "PdkParseScoket",
        "../tools/Dialog": "Dialog"
    } ],
    Lang: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "4da38pr4HdBTLVy2CXzuBl9", "Lang");
        var n = {
            "1000-1": "登录失败, 未知错误"
        };
        n["1000-2"] = n["1000-1"], n["1000-3"] = "网络连接中断，请重新登陆。", n["1000-4"] = "页面已过期，请重新登录", 
        n[10006] = n[10003], n["1006-3"] = "参数无效", n["1006-4"] = "此座位有人", n["1006-5"] = "练习币不足", 
        n["1006-6"] = "您的筹码不足，请购买更多筹码!", n["1006-7"] = "房间已满", n["1006-7"] = "非法操作！", n["1006-10"] = "当前房间有玩家和您是同一IP，换个房间玩牌吧！", 
        n[10003] = "网络连接被断开，请重新登陆！", n[10004] = "session已经过期！请重新登录！", n["1010-1"] = "房间人数已满！", 
        n["1010-3"] = "您在黑名单中！", n["1010-4"] = "您的体验次数不足，请联系客服。关注开心地方棋牌公众号：kxdf668", n["1010-5"] = "服务器即将关闭", 
        n["1010-7"] = "无效操作！", n["1010-9"] = "您已经在房间中了！", n["1010-10"] = "房间实在太多了，没有房间可以创建了！", 
        n["1010-21"] = "创建房间达到上限！", n["1010-22"] = "不可免费创房！", n["1010-23"] = "代理商的体验次数不足，请联系客服。关注开心地方棋牌公众号：kxdf668", 
        n["1010-26"] = "创建失败，没有加入茶馆！", n["1010-27"] = "创建失败，茶馆未授权代开房！", n["1010-28"] = "茶馆已经不存在", 
        n["1010-29"] = "您的体验次数不足，请联系客服。关注开心地方棋牌公众号：kxdf668", n["1010-30"] = "不允许创建茶馆空房间！", 
        n["1010-1100"] = "房间不足！", n["1010-1101"] = "您的体验次数不足，请联系客服。关注开心地方棋牌公众号：kxdf668", 
        n["1010-1102"] = "此房间不存在", n["1010-1103"] = "未指定代理！", n["1010-1104"] = n["1010-23"], 
        n["1010-1105"] = "您已经在房间了！", n["1010-1106"] = "你不在该茶馆，加入房间失败！", n["1010-1107"] = "加入房间失败！", 
        n["1010-1108"] = "茶馆体验次数不足！", n["1010-1109"] = n["1010-28"], n["1010-1110"] = n["1010-30"], 
        n["1018-11"] = "只有房主才可以解散房间", n["1018-12"] = "只剩房主在房间时才可以解散房间", n["1018-24"] = "创建房间3秒后才可以解散", 
        n["1019-1"] = "游戏中不能暂离,请等到这一局结束后!", n["1019-7"] = "游戏中不能暂离,请等到这一局结束后!", n["1019-13"] = "游戏结束前，不能暂离房间哦！", 
        n["1001-1"] = "房间内人数已满!", n["1001-2"] = "房间不存在!", n["1001-3"] = "您在黑名单中！", n["1001-4"] = "您的体验次数不足，请联系客服。关注开心地方棋牌公众号：kxdf668", 
        n["1001-5"] = "服务器即将关闭", n["1001-6"] = "房间里的人已经满了!", n["1001-9"] = "您已经在房间中了！", 
        n["1001-19"] = "为了更好的游戏体验，服务器版本已进行升级，请刷新重进", n["1001-23"] = "代理商体验次数不足，请联系客服。关注开心地方棋牌公众号：kxdf668", 
        n["1001-26"] = "加入失败，没有加入茶馆！", n["1001-27"] = "代理商没有授权！", n["1001-28"] = "茶馆已经不存在", 
        n["1027-14"] = "你将不能进牌", n[12345] = "开房成功！", n["1092-1100"] = "房间不足", n["1092-1101"] = "金币不足", 
        n["1092-1105"] = "您已经在房间中", t.exports = n, cc._RF.pop();
    }, {} ],
    Loading: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "63125ja9/JCh5tdfYJATaQO", "Loading");
        var n = null, a = -1, o = {
            init: function() {
                RESOURCE.getPrefab("comLoading", function(e) {
                    null != n && n.isValid || (n = cc.instantiate(e), cc.game.addPersistRootNode(n), 
                    n.zIndex = 10, o.close());
                });
            },
            create: function(e, t) {
                var i = "数据加载中...";
                e && (i = e), n && n.isValid ? o.show(i, t) : RESOURCE.getPrefab("comLoading", function(e) {
                    null != n && n.isValid || (n = cc.instantiate(e), cc.game.addPersistRootNode(n), 
                    n.zIndex = 10), o.show(i, t);
                });
            },
            setLabelString: function(e) {
                if (n && n.isValid && 1 == n.active) {
                    var t = n.getChildByName("label");
                    "" != e && (t.getComponent(cc.Label).string = e);
                } else cc.log("超过10秒被移除了，再create一个"), o.show(e);
            },
            show: function(e, t) {
                o.close(t), a = setInterval(function() {
                    cc.log("延迟10秒关闭圈圈 isshow = ", t), o.close(t);
                }, 1e4), n.active = !0;
                var i = n.getChildByName("label");
                if ("" != e && (i.getComponent(cc.Label).string = e), void 0 == t || null == t || 1 != t) {
                    var s = n.getChildByName("loading");
                    s.rotation = 0;
                    var r = cc.repeatForever(cc.sequence(cc.rotateBy(.6, 180), cc.rotateBy(.6, 360)));
                    s.runAction(r), n && !n.parent && (cc.game.addPersistRootNode(n), n.zIndex = 10);
                }
            },
            close: function(e) {
                -1 != a && (clearInterval(a), a = -1), void 0 != e && null != e && 1 == e || n && n.parent && (n.stopAllActions(), 
                1 == n.active && (n.active = !1));
            }
        };
        t.exports = o, cc._RF.pop();
    }, {} ],
    LoginManager: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "5eeadD3rkBIHrGEuf2KxkaA", "LoginManager");
        var n = e("Config"), a = e("./tools/utils"), o = e("base64_new"), s = e("Common"), r = e("./tools/weixin"), c = e("./tools/Loading"), l = {};
        0 == n.ServerType ? l.url = "http://192.168.1.121:7457/build" : 1 == n.ServerType ? l.url = "http://testgdsc.qqsgame.com/" : 2 == n.ServerType && (l.url = "https://kxh5.jiaheyx.com/"), 
        l.eventTarget = new cc.EventTarget(), l.onlVersion = "1.0.11", l.currVersion = "1.0.22";
        var d = 100, h = 6;
        l.checkVersion = function(e) {
            if (2 == n.ServerType) {
                for (var t = e.split("."), i = l.currVersion.split("."), a = !1, o = 0; o < i.length; o++) {
                    var s = i[o], r = t[o];
                    if (Number(s) > Number(r)) {
                        a = !0;
                        break;
                    }
                }
                1 == a ? (n.ServerType = 1, n.API_URL_JAVA = "https://testgdsc.qqsgame.com/happyapp") : (n.ServerType = 2, 
                n.API_URL_JAVA = "https://minigame.qqsgame.com/happyapp"), l.wxEnter();
            }
        }, l.getOnlineVersion = function() {
            2 == n.ServerType ? JavaRequest.checkServerVersion({}, function(e) {
                s.print("data ===", e), l.checkVersion(e.data[0].onlineVersion);
            }) : l.wxEnter();
        }, l.wxEnter = function() {
            if (this.ticket = a.getUserSetting("ticket"), this.deviceId = a.getUserSetting("deviceId"), 
            0 == s.isNull(this.ticket)) {
                var e = {
                    type: h,
                    code: this.ticket,
                    deviceid: this.deviceId || a.getDeviceID()
                };
                l.loginJava(e);
            } else l.firstLogin();
        }, l.showButton = function() {
            if (void 0 == this.button || null == this.button) if (wx.createUserInfoButton) {
                wx.getSystemInfo({
                    success: function(e) {
                        "ios" != e.platform || "6.6.6" != e.version || wx.showModal({
                            title: "微信版本过低",
                            content: "您当前微信版本过低，请升级微信版本后重试。",
                            confirmColor: "#3CC51F",
                            confirmText: "确定",
                            showCancel: !1,
                            success: function(e) {
                                e.confirm;
                            }
                        });
                    }
                });
                var e = wx.createUserInfoButton({
                    type: "image",
                    text: "用户授权",
                    image: "http://qsupload.longzupoker.com/upload/img/20180720/20180720b2e0e07d-2b97-4f5f-a588-7eddee2ce5c4.png",
                    style: {
                        left: 0,
                        bottom: 0,
                        width: 1580,
                        height: 960
                    },
                    withCredentials: !0
                });
                this.button = e;
                var t = this;
                this.button.onTap(function(e) {
                    console.log("按钮点击 = ", e), e && e.userInfo && (t.button.hide(), l.weChatGameLogin(e));
                });
            } else wx.showModal({
                title: "微信版本过低",
                content: "您当前微信版本过低，请升级微信版本后重试。",
                confirmColor: "#3CC51F",
                confirmText: "确定",
                showCancel: !1,
                success: function(e) {
                    e.confirm;
                }
            }); else this.button.show();
        }, l.firstLogin = function() {
            var e = this;
            wx.login({
                success: function(t) {
                    t.code ? (s.dump("小程序code =====", t.code), e.ticket = t.code, wx.getSetting({
                        success: function(e) {
                            var t = e.authSetting["scope.userInfo"];
                            console.log("获取授权信息 = ", t), void 0 == t || 0 == t ? (console.log("请求授权"), l.showButton()) : wx.getUserInfo({
                                withCredentials: !0,
                                success: function(e) {
                                    console.log("微信用户信息succ：", e), l.weChatGameLogin(e);
                                }
                            });
                        }
                    })) : s.dump("小程序登录失败！" + t.errMsg);
                }
            });
        }, l.filterEmoji = function(e) {
            return e.replace(new RegExp([ "\ud83c[\udf00-\udfff]", "\ud83d[\udc00-\ude4f]", "\ud83d[\ude80-\udeff]" ].join("|"), "g"), "");
        }, l.weChatGameLogin = function(t) {
            var i = t.userInfo;
            i.nickName = l.filterEmoji(i.nickName);
            var s = o.encode(i.nickName || "");
            o.decode(s);
            c.create(), JavaRequest.miniProgramLogin({
                nickName: s || "",
                avatarUrl: i.avatarUrl || "",
                gender: i.gender || 0,
                city: i.city || "",
                province: i.province || "",
                country: i.country || "",
                language: i.language || "",
                code: this.ticket || "",
                gp: n.gp,
                encryptedData: t.encryptedData,
                iv: t.iv,
                loginType: h
            }, function(t) {
                var i = t.data[0], n = "", o = "";
                if (t.svflag && 1 != t.svflag && e("./tools/Dialog").create({
                    content: JSON.stringify(t),
                    btnstring: [ 1, "确定" ]
                }), i.loginInfo && (i.loginInfo.code && (n = i.loginInfo.code, a.setUserSetting("ticket", n)), 
                i.loginInfo.deviceid && (o = i.loginInfo.deviceid, a.setUserSetting("deviceId", o))), 
                i.wechatUser && a.setUserSetting("openId", i.wechatUser.openid), null != n && "" != n) {
                    var s = {
                        type: h,
                        code: n,
                        deviceid: o
                    };
                    l.loginJava(s);
                }
            });
        }, l.loginJava = function(t, i) {
            var o = this, r = {
                type: t.type || d,
                code: t.code || "",
                deviceid: t.deviceid || a.getDeviceID(),
                gp: n.gp,
                ver: l.webVersion,
                channel: n.channel,
                site: cc.sys.platform,
                whiteMid: "0",
                openbak: 0
            };
            0 == s.isNull(i) && 1 == i && (r = t), JavaRequest.login(r, function(t) {
                1 == t.svflag ? (o.callback(t), JavaRequest.resurrectionInfo()) : -1 == t.svflag ? l.firstLogin() : 1001 == t.svflag ? l.firstLogin() : 3 == t.svflag ? e("./tools/Dialog").create({
                    content: "请检查手机日期和时间是否正确",
                    btnstring: [ 1, "确定" ]
                }) : 1004 == t.svflag ? t.data.msg ? e("./tools/Dialog").create({
                    content: t.data.msg + "",
                    btnstring: [ 1, "确定" ],
                    callback: function(e) {
                        s.switchScene("LoginScene");
                    }
                }) : e("./tools/Dialog").create({
                    content: "服务器更新中",
                    btnstring: [ 1, "确定" ],
                    callback: function(e) {
                        s.switchScene("LoginScene");
                    }
                }) : e("./tools/Dialog").create({
                    content: JSON.stringify(t),
                    btnstring: [ 1, "确定" ]
                });
            });
        }, l.guestLogin = function() {
            var e = {
                type: d,
                sitemid: a.getDeviceID(),
                gp: n.gp,
                ver: l.webVersion,
                channel: n.channel,
                site: cc.sys.platform,
                openbak: 0
            };
            l.loginJava(e, !0);
        }, l.callback = function(e) {
            var t = o.decode(e.data.server);
            n.server = [], n.port = [], t = t.split(",");
            for (var i = 0; i < t.length; i++) {
                var a = t[i].split(":");
                n.server.push(a[0]), n.port.push(a[1]);
            }
            s.dump("服务器 = " + n.server), s.dump("端口 = " + n.port);
            var c = {}, l = e.data.sesskey;
            c.sesskey = l, n.USER.sesskey = l, void 0 != e.data.robotAppUrl && null != e.data.robotAppUrl && (n.API_URL_JAVA_ADDROOM = e.data.robotAppUrl.replace("kxrobot", "kxroboth5")), 
            void 0 != e.data.actiCenterUrl && null != e.data.actiCenterUrl && (n.API_URL_JAVA_ACTIVITY = e.data.actiCenterUrl), 
            r.config(), r.isIphoneX(), this.getUserInfo(c), r.updateWechatGame(), r.onSocketCloseListen();
        }, l.getUserInfo = function(t) {
            JavaRequest.load(t, function(t) {
                1 == t.svflag && (Object.assign(n.USER, t.data.aGame), Object.assign(n.USER, t.data.aUser), 
                n.isShareInHall = !1, n.USER.ip = t.data.ip, n.USER.is_show = t.data.is_show, 1 == n.USER.is_show && (n.USER.inviteId = t.data.inviteId, 
                n.USER.agentUrl = t.data.agentUrl), t.data.newPollcy && (n.isOpenZhanjiAndRank = "1" == t.data.newPollcy.openOrCloseRecord, 
                n.isOpenAgentEnterGame = "1" == t.data.newPollcy.agentRoomSwitch), n.USER.isgrant = t.data.isgrant, 
                n.share = t.data.share, n.istester = Number(t.istester), n.Is_Show = t.data.is_show, 
                n.USER.destroyRoom = t.data.destroyRoom || 0, e("NetManager").connectToServer(), 
                l.getServerData());
            }), JavaRequest.getMyLevel(function(e) {
                0 == e.error && (n.myALevel = e.data[0].aLevel, n.myBLevel = e.data[0].bLevel, n.myLevelStar = e.data[0].star);
            }), JavaRequest.shareSwitch(function(e) {
                0 == e.error && (n.shareSwitch = 0 != e.data[0].shareSwitch, n.isSpecial = 0 != e.data[0].disableShare);
            });
        }, l.getServerData = function() {
            DMGER.getShopConfig(), DMGER.getFieldConfig(null, 0), DMGER.getRoomConfig();
        }, l.listenNetworkChange = function(e) {
            var t = this;
            r.networkChange(function(i) {
                t.updateDataByNetwork(i, e);
            });
        }, l.updateDataByNetwork = function(t, i) {
            var a = this;
            console.log("网络连上没？", t), 1 == t ? "LoginScene" != n.curSceneName ? e("./net/NetManager").connectToServer() : (e("./tools/Dialog").close(), 
            l.eventTarget.dispatchEvent(new cc.Event.EventCustom("downloadres", !1))) : 1 == n.isDialogOk ? e("./tools/Dialog").create({
                content: "您的网络连接断开了，请检查网络设置！",
                btnstring: [ 1, "确定" ],
                callback: function(e) {
                    a.offLineCheckNetwork(i);
                }
            }) : r.showWxModal(function() {
                a.offLineCheckNetwork(i);
            });
        }, l.offLineCheckNetwork = function(t) {
            var i = this;
            1 == n.isNetworkConnect ? "LoginScene" == n.curSceneName ? l.eventTarget.dispatchEvent(new cc.Event.EventCustom("downloadres", !1)) : e("./net/NetManager").connectToServer() : (console.log("没网，检查网络"), 
            r.getNetworkType(function(e) {
                n.isNetworkConnect = e, console.log("没网，检查网络1", {
                    isCon: e,
                    isNetworkConnect: n.isNetworkConnect
                }), i.updateDataByNetwork(e);
            }));
        }, t.exports = l, cc._RF.pop();
    }, {
        "./net/NetManager": "NetManager",
        "./tools/Dialog": "Dialog",
        "./tools/Loading": "Loading",
        "./tools/utils": "utils",
        "./tools/weixin": "weixin",
        Common: "Common",
        Config: "Config",
        NetManager: "NetManager",
        base64_new: "base64_new"
    } ],
    LoginScene: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "7e012DlxOZOeq8Z+keiMZrU", "LoginScene");
        var n = e("LoginManager"), a = e("Config"), o = e("Common"), s = e("../tools/utils");
        cc.Class({
            extends: cc.Component,
            properties: {
                checkbox1: cc.SpriteFrame,
                checkbox2: cc.SpriteFrame
            },
            onLoad: function() {
                e("../tools/Loading").init(), RESOURCE.getPrefab("comDialog", function() {
                    a.isDialogOk = !0;
                });
            },
            start: function() {
                var t = this;
                e("../tools/Loading").close(), this.initData(), RESOURCE.initPreloadModuleRes(), 
                setTimeout(function() {
                    t && t.preloadRes(t);
                }, 100), n.listenNetworkChange(), n.eventTarget.on("downloadres", function(e) {
                    console.log("登录监听，继续加载资源"), t.preloadRes(t);
                }), o.preloadOtherScene("LoginScene");
            },
            initData: function() {
                this.control = cc.find("controlNode", this.node), this.agreeSprite = cc.find("userAgreement/yonghujy2", this.control).getComponent(cc.Sprite), 
                this.isAgree = !0, this.progressNode = cc.find("progress", this.node), this.progress = this.progressNode.getComponent(cc.ProgressBar), 
                this.progress.progress = 0, this.progressLabel = cc.find("tiplabel", this.progressNode).getComponent(cc.Label), 
                this.progressLabel.string = "正在加载资源 0%", this.autoLogin = 1, null != s && (this.autoLogin = s.getUserSetting("autoLogin", 1)), 
                this.control.active = !0, this.progressNode.active = !1;
            },
            enterHallScene: function() {
                cc.log("点击登录按钮=========="), 0 != this.isAgree ? 0 == cc.sys.isMobile ? n.guestLogin() : n.getOnlineVersion() : e("../tools/Dialog").create({
                    content: "请确认并同意用户使用协议与家长监护工程！",
                    btnstring: [ 1, "确定" ],
                    callback: function(e) {}
                });
            },
            checkBoxClick: function() {
                1 == this.isAgree ? (this.agreeSprite.spriteFrame = this.checkbox2, this.isAgree = !1) : (this.agreeSprite.spriteFrame = this.checkbox1, 
                this.isAgree = !0);
            },
            agreeTip: function() {
                cc.log("agreeMentTip");
                var e = this;
                RESOURCE.getPrefab("comRule", function(t) {
                    var i = cc.instantiate(t);
                    e.node.addChild(i), i.getComponent("ComRuleView").init(2);
                });
            },
            parentTip: function() {
                cc.log("agreeMentTip");
                var e = this;
                RESOURCE.getPrefab("comRule", function(t) {
                    var i = cc.instantiate(t);
                    e.node.addChild(i), i.getComponent("ComRuleView").init(4);
                });
            },
            preloadRes: function(e) {
                1 == Number(e.autoLogin) ? (console.log("自动登录"), RESOURCE.preloadModuleRes("com", function(t) {
                    t <= 100 ? (e.progress.progress = t / 100, e.progressLabel.string = "正在加载资源 " + t + "%") : 1e3 == t ? (e.progress.progress = 1, 
                    e.progressLabel.string = "正在加载资源 100%", e.progressNode.active = !1, e.control.active = !0, 
                    e.enterHallScene()) : 1e4 == t && (e.control.active = !0, e.progressNode.active = !1, 
                    e.enterHallScene());
                }, !0, function() {
                    e.control.active = !1, e.progressNode.active = !0;
                })) : console.log("手动登录");
            },
            onDestroy: function() {}
        }), cc._RF.pop();
    }, {
        "../tools/Dialog": "Dialog",
        "../tools/Loading": "Loading",
        "../tools/utils": "utils",
        Common: "Common",
        Config: "Config",
        LoginManager: "LoginManager"
    } ],
    MD5New: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "0e294GIBHRED6iaFsRcab0E", "MD5New");
        var n = {}, a = function(e, t) {
            return e << t | e >>> 32 - t;
        }, o = function(e, t) {
            var i, n, a, o, s;
            return a = 2147483648 & e, o = 2147483648 & t, s = (1073741823 & e) + (1073741823 & t), 
            (i = 1073741824 & e) & (n = 1073741824 & t) ? 2147483648 ^ s ^ a ^ o : i | n ? 1073741824 & s ? 3221225472 ^ s ^ a ^ o : 1073741824 ^ s ^ a ^ o : s ^ a ^ o;
        }, s = function(e, t, i, n, s, r, c) {
            return e = o(e, o(o(function(e, t, i) {
                return e & t | ~e & i;
            }(t, i, n), s), c)), o(a(e, r), t);
        }, r = function(e, t, i, n, s, r, c) {
            return e = o(e, o(o(function(e, t, i) {
                return e & i | t & ~i;
            }(t, i, n), s), c)), o(a(e, r), t);
        }, c = function(e, t, i, n, s, r, c) {
            return e = o(e, o(o(function(e, t, i) {
                return e ^ t ^ i;
            }(t, i, n), s), c)), o(a(e, r), t);
        }, l = function(e, t, i, n, s, r, c) {
            return e = o(e, o(o(function(e, t, i) {
                return t ^ (e | ~i);
            }(t, i, n), s), c)), o(a(e, r), t);
        };
        n.convertToWordArray = function(e) {
            for (var t, i = e.length, n = i + 8, a = 16 * ((n - n % 64) / 64 + 1), o = Array(a - 1), s = 0, r = 0; r < i; ) s = r % 4 * 8, 
            o[t = (r - r % 4) / 4] = o[t] | e.charCodeAt(r) << s, r++;
            return s = r % 4 * 8, o[t = (r - r % 4) / 4] = o[t] | 128 << s, o[a - 2] = i << 3, 
            o[a - 1] = i >>> 29, o;
        }, n.wordToHex = function(e) {
            var t, i = "", n = "";
            for (t = 0; t <= 3; t++) i += (n = "0" + (e >>> 8 * t & 255).toString(16)).substr(n.length - 2, 2);
            return i;
        }, n.uTF8Encode = function(e) {
            e = e.replace(/\x0d\x0a/g, "\n");
            for (var t = "", i = 0; i < e.length; i++) {
                var n = e.charCodeAt(i);
                n < 128 ? t += String.fromCharCode(n) : n > 127 && n < 2048 ? (t += String.fromCharCode(n >> 6 | 192), 
                t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224), 
                t += String.fromCharCode(n >> 6 & 63 | 128), t += String.fromCharCode(63 & n | 128));
            }
            return t;
        }, n.md5 = function(e) {
            var t, i, n, a, d, h, u, g, m, f = Array();
            for (e = this.uTF8Encode(e), f = this.convertToWordArray(e), h = 1732584193, u = 4023233417, 
            g = 2562383102, m = 271733878, t = 0; t < f.length; t += 16) i = h, n = u, a = g, 
            d = m, h = s(h, u, g, m, f[t + 0], 7, 3614090360), m = s(m, h, u, g, f[t + 1], 12, 3905402710), 
            g = s(g, m, h, u, f[t + 2], 17, 606105819), u = s(u, g, m, h, f[t + 3], 22, 3250441966), 
            h = s(h, u, g, m, f[t + 4], 7, 4118548399), m = s(m, h, u, g, f[t + 5], 12, 1200080426), 
            g = s(g, m, h, u, f[t + 6], 17, 2821735955), u = s(u, g, m, h, f[t + 7], 22, 4249261313), 
            h = s(h, u, g, m, f[t + 8], 7, 1770035416), m = s(m, h, u, g, f[t + 9], 12, 2336552879), 
            g = s(g, m, h, u, f[t + 10], 17, 4294925233), u = s(u, g, m, h, f[t + 11], 22, 2304563134), 
            h = s(h, u, g, m, f[t + 12], 7, 1804603682), m = s(m, h, u, g, f[t + 13], 12, 4254626195), 
            g = s(g, m, h, u, f[t + 14], 17, 2792965006), u = s(u, g, m, h, f[t + 15], 22, 1236535329), 
            h = r(h, u, g, m, f[t + 1], 5, 4129170786), m = r(m, h, u, g, f[t + 6], 9, 3225465664), 
            g = r(g, m, h, u, f[t + 11], 14, 643717713), u = r(u, g, m, h, f[t + 0], 20, 3921069994), 
            h = r(h, u, g, m, f[t + 5], 5, 3593408605), m = r(m, h, u, g, f[t + 10], 9, 38016083), 
            g = r(g, m, h, u, f[t + 15], 14, 3634488961), u = r(u, g, m, h, f[t + 4], 20, 3889429448), 
            h = r(h, u, g, m, f[t + 9], 5, 568446438), m = r(m, h, u, g, f[t + 14], 9, 3275163606), 
            g = r(g, m, h, u, f[t + 3], 14, 4107603335), u = r(u, g, m, h, f[t + 8], 20, 1163531501), 
            h = r(h, u, g, m, f[t + 13], 5, 2850285829), m = r(m, h, u, g, f[t + 2], 9, 4243563512), 
            g = r(g, m, h, u, f[t + 7], 14, 1735328473), u = r(u, g, m, h, f[t + 12], 20, 2368359562), 
            h = c(h, u, g, m, f[t + 5], 4, 4294588738), m = c(m, h, u, g, f[t + 8], 11, 2272392833), 
            g = c(g, m, h, u, f[t + 11], 16, 1839030562), u = c(u, g, m, h, f[t + 14], 23, 4259657740), 
            h = c(h, u, g, m, f[t + 1], 4, 2763975236), m = c(m, h, u, g, f[t + 4], 11, 1272893353), 
            g = c(g, m, h, u, f[t + 7], 16, 4139469664), u = c(u, g, m, h, f[t + 10], 23, 3200236656), 
            h = c(h, u, g, m, f[t + 13], 4, 681279174), m = c(m, h, u, g, f[t + 0], 11, 3936430074), 
            g = c(g, m, h, u, f[t + 3], 16, 3572445317), u = c(u, g, m, h, f[t + 6], 23, 76029189), 
            h = c(h, u, g, m, f[t + 9], 4, 3654602809), m = c(m, h, u, g, f[t + 12], 11, 3873151461), 
            g = c(g, m, h, u, f[t + 15], 16, 530742520), u = c(u, g, m, h, f[t + 2], 23, 3299628645), 
            h = l(h, u, g, m, f[t + 0], 6, 4096336452), m = l(m, h, u, g, f[t + 7], 10, 1126891415), 
            g = l(g, m, h, u, f[t + 14], 15, 2878612391), u = l(u, g, m, h, f[t + 5], 21, 4237533241), 
            h = l(h, u, g, m, f[t + 12], 6, 1700485571), m = l(m, h, u, g, f[t + 3], 10, 2399980690), 
            g = l(g, m, h, u, f[t + 10], 15, 4293915773), u = l(u, g, m, h, f[t + 1], 21, 2240044497), 
            h = l(h, u, g, m, f[t + 8], 6, 1873313359), m = l(m, h, u, g, f[t + 15], 10, 4264355552), 
            g = l(g, m, h, u, f[t + 6], 15, 2734768916), u = l(u, g, m, h, f[t + 13], 21, 1309151649), 
            h = l(h, u, g, m, f[t + 4], 6, 4149444226), m = l(m, h, u, g, f[t + 11], 10, 3174756917), 
            g = l(g, m, h, u, f[t + 2], 15, 718787259), u = l(u, g, m, h, f[t + 9], 21, 3951481745), 
            h = o(h, i), u = o(u, n), g = o(g, a), m = o(m, d);
            return (this.wordToHex(h) + this.wordToHex(u) + this.wordToHex(g) + this.wordToHex(m)).toLowerCase();
        }, t.exports = n, cc._RF.pop();
    }, {} ],
    MyCanvas: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "72e3fI7sDxLFZfjUOWsxs86", "MyCanvas");
        var n = e("Config");
        cc.Class({
            extends: cc.Canvas,
            properties: {},
            onLoad: function() {
                cc.view.setResizeCallback(this.setResize.bind(this)), this.setResize();
                var e = this, t = "onorientationchange" in window ? "orientationchange" : "resize";
                function i(t) {
                    var i = n.canvasRotation;
                    0 == window.orientation || 180 == window.orientation ? null != n.orientation && n.orientation == window.orientation || (n.orientation = window.orientation, 
                    n.canvasRotation = 180, e.func(i)) : null != n.orientation && n.orientation == window.orientation || (n.orientation = window.orientation, 
                    n.canvasRotation = 0, e.func(i));
                }
                window.addEventListener(t, i.bind(this), !1), i();
            },
            setResize: function() {
                var e = cc.director.getWinSize(), t = this.designResolution;
                if (e.width / e.height >= t.width / t.height ? (this.fitHeight = !0, this.fitWidth = !1) : (this.fitHeight = !1, 
                this.fitWidth = !0), e != cc.director.getWinSize() && n.cbother && n.cbother.length > 0) for (var i = 0; i < n.cbother.length; i++) {
                    var a = n.cbother[i];
                    a && a();
                }
            },
            func: function(e) {
                null == e || n.canvasRotation;
            },
            setCallBack: function(e) {
                this.node.rotation = n.canvasRotation, n.cb = e, n.cbother = [];
            },
            setCallBackOther: function(e) {
                n.cbother.push(e);
            }
        }), cc._RF.pop();
    }, {
        Config: "Config"
    } ],
    MyRecord: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "54caeMP6UNGxLUE80eQ5Mhi", "MyRecord");
        var n = e("../common/Common");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                cc.find("mask", this.node).on("click", function() {
                    this.node.active = !1;
                }, this), cc.find("view/details/item", this.node).on("click", function() {
                    this.dataList.active = !0, this.details.active = !1;
                }, this);
            },
            start: function() {},
            init: function() {
                var e = this;
                this.canScorll = !0, this.dataList = cc.find("view/myData", this.node), this.details = cc.find("view/details", this.node), 
                this.item = cc.find("view/item", this.node), this.content = cc.find("view/myData/dataScroll/view/content", this.node), 
                this.scroll = cc.find("view/myData/dataScroll", this.node);
                var t = {
                    page: 1,
                    type: 1e3,
                    isAgent: 1
                };
                JavaRequest.getMyRecord(t, function(t) {
                    e.data = t.data.arr, e.isDetails = !1, e.content.removeAllChildren(), e.dataList.active = !0, 
                    e.details.active = !1;
                    for (var i = function(t) {
                        var i = e.data, a = cc.instantiate(e.item), o = a.getChildByName("data");
                        o.getChildByName("num").getComponent(cc.Label).string = i[t][0], o.getChildByName("time").getComponent(cc.Label).string = i[t][2];
                        for (var s = i[t][5], r = 0; r < i[t][3].length; r++) if (s == i[t][3][r][0]) if (o.getChildByName("point").getComponent(cc.Label).string = i[t][3][r][2], 
                        "" != i[t][3][r][4]) n.loadUrlImage(a.getChildByName("icon").getComponent(cc.Sprite), i[t][3][r][4], "RecordBig"); else {
                            cc.loader.loadRes("com/textures/default", cc.SpriteFrame, function(e, t) {
                                a.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = t;
                            });
                        }
                        a.attr({
                            index: t,
                            uid: i[t][4]
                        }), a.on("click", e.openDetail, e), e.content.addChild(a);
                    }, a = 0; a < e.data.length; a++) i(a);
                }), e.scroll.on("bounce-bottom", function() {
                    10 == e.data.length && this.canScorll && (t.page++, e.data2 = [], JavaRequest.getMyRecord(t, function(t) {
                        if (e.data2 = t.data.arr, t.data.arr.length > 0) for (var i = function(t) {
                            var i = e.data2, a = cc.instantiate(e.item), o = a.getChildByName("data");
                            o.getChildByName("num").getComponent(cc.Label).string = i[t][0], o.getChildByName("time").getComponent(cc.Label).string = i[t][2];
                            for (var s = i[t][5], r = 0; r < i[t][3].length; r++) if (s == i[t][3][r][0]) if (o.getChildByName("point").getComponent(cc.Label).string = i[t][3][r][2], 
                            "" != i[t][3][r][4]) n.loadUrlImage(a.getChildByName("icon").getComponent(cc.Sprite), i[t][3][r][4], "RecordBig"); else {
                                cc.loader.loadRes("com/textures/default", cc.SpriteFrame, function(e, t) {
                                    a.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = t;
                                });
                            }
                            var c = t + 10;
                            a.attr({
                                index: c,
                                uid: i[t][4]
                            }), a.on("click", e.openDetail, e), e.content.addChild(a), e.data.push(i[t]);
                        }, a = 0; a < e.data2.length; a++) i(a); else e.canScorll = !1;
                    }));
                }, e);
            },
            openDetail: function(e) {
                var t = this.data, i = e.target;
                this.cleanNormalData();
                var a = i.index, o = t[a][3], s = this.details.getChildByName("content"), r = this.details.getChildByName("item"), c = i.uid, l = 0, d = {
                    first: 0,
                    second: 0,
                    third: 0
                };
                this.isDetails || (this.dataList.active = !1, this.details.active = !0, JavaRequest.getHonorDetail({
                    ids: c
                }, function(e) {
                    l = e.data.arr.length;
                    for (var i = 0; i < e.data.arr.length; i++) "1" == e.data.arr[i][0] ? d.first++ : "2" == e.data.arr[i][0] ? d.second++ : "3" == e.data.arr[i][0] && d.third++;
                    var c = r.getChildByName("data");
                    c.getChildByName("num").getComponent(cc.Label).string = t[a][0], c.getChildByName("time").getComponent(cc.Label).string = t[a][2];
                    for (var h = t[a][5], u = 0; u < t[a][3].length; u++) if (h == t[a][3][u][0]) if (c.getChildByName("point").getComponent(cc.Label).string = t[a][3][u][2], 
                    "" != t[a][3][u][4]) n.loadUrlImage(r.getChildByName("icon").getComponent(cc.Sprite), t[a][3][u][4], "RecordBig"); else {
                        cc.loader.loadRes("com/textures/default", cc.SpriteFrame, function(e, t) {
                            r.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = t;
                        });
                    }
                    2 == o.length ? (s.height = 211, s.children[3].active = !1) : (s.height = 285, s.children[3].active = !0);
                    for (var g = function(e) {
                        var t = e + 1;
                        if (s.children[t].getChildByName("icon").getChildByName("name").getComponent(cc.Label).string = n.substring(o[e][1], 4), 
                        "" != o[e][4]) n.loadUrlImage(s.children[t].getChildByName("icon").getComponent(cc.Sprite), o[e][4], "RecordSmall"); else {
                            cc.loader.loadRes("com/textures/default", cc.SpriteFrame, function(e, i) {
                                s.children[t].getChildByName("icon").getComponent(cc.Sprite).spriteFrame = i;
                            });
                        }
                        s.children[t].getChildByName("totle").getComponent(cc.Label).string = l, s.children[t].getChildByName("win").getComponent(cc.Label).string = 1 == t ? d.first : 2 == t ? d.second : d.third, 
                        s.children[t].getChildByName("point").getComponent(cc.Label).string = o[e][2];
                    }, m = 0; m < o.length; m++) g(m);
                }), r.active = !0, s.active = !0);
            },
            cleanNormalData: function() {
                var e = this.details.getChildByName("content"), t = this.details.getChildByName("item").getChildByName("data");
                t.getChildByName("num").getComponent(cc.Label).string = "", t.getChildByName("time").getComponent(cc.Label).string = "", 
                t.getChildByName("point").getComponent(cc.Label).string = "";
                for (var i = 1; i < 4; i++) e.children[i].getChildByName("totle").getComponent(cc.Label).string = "", 
                e.children[i].getChildByName("win").getComponent(cc.Label).string = "", e.children[i].getChildByName("point").getComponent(cc.Label).string = "", 
                e.children[i].getChildByName("icon").getChildByName("name").getComponent(cc.Label).string = "";
            }
        }), cc._RF.pop();
    }, {
        "../common/Common": "Common"
    } ],
    MyWebSocket: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "2c345Pwx0JLBqcZrYo2RYCT", "MyWebSocket");
        var n = e("Common"), a = e("Config"), o = {
            senddata: [],
            position: 0
        };
        o.writebuff = new DataView(new ArrayBuffer(8192)), o.connet = function(e, t) {
            var i = "";
            i = 0 == a.ServerType ? new WebSocket("ws://" + e + ":" + t) : new WebSocket("wss://" + e + ":" + t), 
            this.ws = i, i.binaryType = "arraybuffer", i.onopen = this.onopen.bind(this), i.onmessage = this.onmessage.bind(this), 
            i.onerror = this.onerror.bind(this), i.onclose = this.onclose.bind(this);
        }, o.onopen = function(e) {}, o.writeString = function(e) {
            for (var t = this.writebuff, i = 0, n = e.length; i < n; i++) {
                var a = e.charCodeAt(i);
                a > 0 && a <= 127 ? (t.setInt8(this.position, a, !0), this.position += 1) : a >= 128 && a <= 2047 ? (t.setInt8(this.position, 192 | a >> 6 & 31, !0), 
                this.position += 1, t.setInt8(this.position, 128 | 63 & a, !0), this.position += 1) : a >= 2048 && a <= 65535 && (t.setInt8(this.position, 224 | a >> 12 & 15, !0), 
                this.position += 1, t.setInt8(this.position, 128 | a >> 6 & 63, !0), this.position += 1, 
                t.setInt8(this.position, 128 | 63 & a, !0), this.position += 1);
            }
        }, o.writeStringUTF8 = function(e) {
            this.senddata.push(e);
            var t = this.position;
            this.writeInt32Inside(0), this.writeString(e), this.writeUint8(0), this.writebuff.setInt32(t, this.position - t - 4, !0);
        }, o.writeHead = function(e) {
            this.position = 0, this.writeString("QS"), this.writeUint16(0), this.writeUint16(e), 
            10006 !== e && n.dump("【SEND】cmd ===== " + e + " ===== time=" + Date.now() + " ===== " + n.getDate()), 
            this.senddata.push(e);
        }, o.writeEnd = function() {
            this.writebuff.setInt16(2, this.position - 6, !0);
            var e = this.writebuff.buffer.slice(0, this.position);
            this.ws.send(e), 10006 !== this.senddata[0] && n.dump("sendData = ", this.senddata), 
            this.senddata.length = 0;
        }, o.writeEnd.bind(void 0), o.writeUint16 = function(e) {
            this.writebuff.setUint16(this.position, e, !0), this.position += 2;
        }, o.writeUint8 = function(e) {
            this.writebuff.setUint8(this.position, e, !0), this.position += 1;
        }, o.writeInt32 = function(e) {
            this.senddata.push(e), this.writebuff.setInt32(this.position, e, !0), this.position += 4;
        }, o.writeInt32Inside = function(e) {
            this.writebuff.setInt32(this.position, e, !0), this.position += 4;
        }, o.onmessage = function(e) {
            for (var t = new DataView(e.data), i = 0, n = 0, a = !0, o = 0, s = 0; a; ) {
                i = o + 2, o += 6, o += t.getUint16(i, !0);
                var r = e.data.slice(n, o);
                n = o, this.onData(r), e.data.byteLength == o && (a = !1), ++s > 10 && cc.log("--------------------------------------wensocketeer");
            }
        }, o.onData = function(e) {}, o.getCMD = function() {
            return this.readBuff.getUint16(4, !0);
        }, o.readInt32 = function() {
            if (this.readBuff.byteLength < this.position + 4) return cc.log("read end-of-file readInt32"), 
            0;
            var e = this.readBuff.getInt32(this.position, !0);
            return this.position += 4, e;
        }, o.readUint32 = function() {
            if (this.readBuff.byteLength < this.position + 4) return cc.log("read end-of-file"), 
            0;
            var e = this.readBuff.getUint32(this.position, !0);
            return this.position += 4, e;
        }, o.readUint16 = function() {
            if (this.readBuff.byteLength < this.position + 2) return cc.log("read end-of-file"), 
            0;
            var e = this.readBuff.getUint16(this.position, !0);
            return this.position += 2, e;
        }, o.readUint8 = function() {
            var e = this.readBuff.getUint8(this.position, !0);
            return this.position += 1, e;
        }, o.readStringUTF8 = function() {
            var e = this.readInt32(), t = this.getCMD();
            if (this.readBuff.byteLength < this.position + e) return cc.log("read end-of-file readStringUTF8" + t), 
            "";
            for (var i = [], n = 0; n < e; n++) {
                var a = this.readUint8();
                n != e - 1 && i.push(a);
            }
            return this.utf8ToUtf16(i);
        }, o.readInt64 = function() {
            var e = this.readUint32(), t = this.readUint32();
            return t >> 31 == 0 ? t * Math.pow(2, 32) + e : -(4294967295 - e + 1 + (4294967295 - t) * Math.pow(2, 32));
        }, o.utf8ToUtf16 = function(e) {
            for (var t = "", i = 0; i < e.length; i++) {
                var n = [];
                n.push(e[i]);
                var a = [];
                0 == (n[0] >> 7 & 255) ? t += String.fromCharCode(n[0]) : 6 == (n[0] >> 5 & 255) ? (i++, 
                n.push(e[i]), a.push(31 & n[0]), a.push(63 & n[1]), t += String.fromCharCode(a[0] << 6 | a[1])) : 14 == (n[0] >> 4 & 255) && (i++, 
                n.push(e[i]), i++, n.push(e[i]), a.push(n[0] << 4 | n[1] >> 2 & 15), a.push((3 & n[1]) << 6 | 63 & n[2]), 
                t += String.fromCharCode(a[0] << 8 | a[1]));
            }
            return t;
        }, o.onerror = function(e) {
            cc.log("Send Text fired an error");
        }, o.onclose = function(e) {
            cc.log("WebSocket instance closed.");
        }, t.exports = o, cc._RF.pop();
    }, {
        Common: "Common",
        Config: "Config"
    } ],
    NetManager: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "d8af6DRKKxKxpflks2qguUF", "NetManager");
        var n = {}, a = !1, o = [], s = 0, r = -1, c = e("Config");
        n.connectToServer = function() {
            if (console.log("重连connectToServer"), c.showMatchTime = !1, console.log("connecting ==" + a), 
            !a) {
                n.close(), a = !0;
                var t = c.server, i = c.port;
                o = [], r = setInterval(function() {
                    n.connetFail();
                }, 3e3);
                var s = 0;
                (function l() {
                    if (s < t.length) {
                        var d = t[s], h = e("./GameSocket"), u = Object.create(h);
                        o.push(u), u.connet(t[s], i[s]);
                        var g = 0;
                        u.eventTarget.once("connetSucc", function(t) {
                            cc.log("  网络连接成功 " + d + ":" + i[s]), u.eventTarget.off("connetSucc"), u.eventTarget.off("failure"), 
                            u.eventTarget.off("closed"), u.eventTarget.on("closed", n.connectToServer), u.testHeart(), 
                            a = !1, e("ParseSocket").init();
                            var o = e("./SendCMD");
                            o.setSocket(u);
                            var l = {
                                mid: c.USER.mid,
                                sesskey: c.USER.sesskey,
                                gp: c.gp,
                                Type: 1500
                            };
                            o.sendLogin(l.mid, l.sesskey, l.gp, l.Type), -1 != r && (clearInterval(r), r = -1);
                        }), u.eventTarget.on("failure", function(e) {
                            g += 1, cc.log(g + "  网络连接断开 " + d + ":" + i[s] + "    server.length = " + t.length), 
                            g >= t.length && n.connetFail(), l();
                        }), s += 1;
                    }
                })();
            }
        }, n.connetFail = function() {
            s += 1, n.close(), s > 1 ? (s = 0, cc.log("断网弹中文框"), e("../tools/Dialog").create({
                content: "网络连接断开，请检查网络设置，重新连接。",
                btnstring: [ 1, "确定" ],
                callback: function(e) {
                    n.connectToServer();
                }
            })) : (cc.log("第一次断开不弹框" + s), n.connectToServer());
        }, n.closeothersocket = function(e) {
            for (var t = 0; t < o.length; t++) {
                var i = o[t];
                t != e && (i.eventTarget.off("connetSucc"), i.eventTarget.off("failure"), i.eventTarget.off("closed"), 
                i.close());
            }
        }, n.close = function() {
            -1 != r && (clearInterval(r), r = -1), e("./GameSocket").neddHeart = !1, a = !1, 
            n.closeothersocket(9);
        }, n.checkLinkStatus = function(e) {
            for (var t = !1, i = 0; i < o.length; i++) {
                1 == o[i].checkSocketLinkStatus() && (t = !0);
            }
            0 == t ? console.log("C++真的断开连接了") : console.log("C++连着在"), e && e();
        }, t.exports.checkLinkStatus = n.checkLinkStatus, t.exports.connectToServer = n.connectToServer, 
        t.exports.close = n.close, cc._RF.pop();
    }, {
        "../tools/Dialog": "Dialog",
        "./GameSocket": "GameSocket",
        "./SendCMD": "SendCMD",
        Config: "Config",
        ParseSocket: "ParseSocket"
    } ],
    NewPlayer: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c8804mZtBtOUJ319UTyIafE", "NewPlayer"), cc.Class({
            extends: cc.Component,
            properties: {
                bg: cc.Sprite,
                dbg: cc.Sprite,
                content: cc.Label
            },
            setTouch: function(e) {
                var t = this;
                t.bg.node.on("touchend", function(i) {
                    t.node.destroy(), e && e();
                });
            },
            setBgSize: function(e, t) {
                this.bg.node.width = e || this.bg.node.width, this.bg.node.height = t || this.bg.node.height;
            },
            setDbgScaleY: function(e) {
                this.dbg.node.scaleY = e;
            },
            setDdgPos: function(e, t) {
                this.dbg.node.x = e || this.dbg.node.x, this.dbg.node.y = t || this.dbg.node.y;
            },
            setConFontSize: function(e) {
                this.content.fontSize = e;
            },
            setConSize: function(e, t) {
                this.content.node.width = e || this.content.node.width, this.content.node.height = t || this.content.node.height;
            },
            setContent: function(e) {
                this.content.string = e;
            }
        }), cc._RF.pop();
    }, {} ],
    PDKTotalOver: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "1a62eIZXoVCcYQeN0oZRbUC", "PDKTotalOver");
        var n = e("PdkDatamanager"), a = e("../common/Common"), o = e("SendCMD"), s = e("../tools/weixin");
        cc.Class({
            extends: cc.Component,
            properties: {
                itemArr: {
                    type: cc.Node,
                    default: []
                },
                backBtn: cc.Node,
                shareBtn: cc.Node,
                roomInfoLable: cc.Node,
                timeInfo: cc.Node
            },
            onLoad: function() {
                n.setPokerTotalOverData(null), this.backBtn.on("click", this.closeWin, this), this.shareBtn.on("click", this.shareFunc, this);
            },
            start: function() {},
            initData: function(e) {
                for (var t in this.masterMid = parseInt(e.masterMid), this.roomInfo = JSON.parse(e.roomInfo), 
                this.PDKTotalOver = {}, this.PDKTotalOver.shareData = {
                    win: [],
                    other: []
                }, this.itemArr) {
                    if (this.itemArr.hasOwnProperty(t)) this.itemArr[t].active = !1;
                }
                for (var i = e.playerCount, n = 0, o = 0; o < i; o++) {
                    var s = e.playerInfo[o];
                    n < s.score && (n = s.score);
                }
                for (var r in e.playerInfo.sort(function(e, t) {
                    return e.score < t.score ? 1 : -1;
                }), e.playerInfo) if (e.playerInfo.hasOwnProperty(r)) {
                    var c = e.playerInfo[r];
                    if (this.itemArr[r].active = !0, void 0 != this.itemArr[r] && null != this.itemArr[r]) {
                        this.itemArr[r].getChildByName("nameTxt").getComponent(cc.Label).string = a.substring(c.name, 5);
                        var l = c.loseCount + c.winCount;
                        this.itemArr[r].getChildByName("gameCount").getComponent(cc.Label).string = "对局数：" + l, 
                        this.itemArr[r].getChildByName("winCount").getComponent(cc.Label).string = "胜局：" + c.winCount, 
                        this.itemArr[r].getChildByName("getNum").getComponent(cc.Label).string = "积分：" + c.score;
                    }
                    this.itemArr[r].getChildByName("headkuang").getComponent("HeadPortrait").loadImg(c.icon);
                    this.PDKTotalOver.shareData.other.push(a.substring(c.name, 4, !0) + ":" + c.score + "分");
                }
            },
            setHead: function(e, t) {
                var i = this;
                null != t ? "" != t ? cc.loader.load({
                    url: t,
                    type: "png"
                }, function(t, n) {
                    var a = new cc.SpriteFrame(n);
                    e.getComponent(cc.Sprite).spriteFrame = a, i.loadImg(e);
                }) : cc.loader.loadRes("com/textures/default", cc.SpriteFrame, function(t, n) {
                    e.getComponent(cc.Sprite).spriteFrame = n, i.loadImg(e);
                }) : cc.loader.loadRes("com/textures/default2", cc.SpriteFrame, function(t, n) {
                    e.getComponent(cc.Sprite).spriteFrame = n, i.loadImg(e);
                });
            },
            loadImg: function(e) {
                var t = cc.size(100, 100), i = .82 * e.getContentSize().width, n = t.height / i;
                e.scale = .82 * n;
            },
            shareFunc: function() {
                var t = this.PDKTotalOver.shareData, i = {
                    title: "又一轮高手排行榜新鲜出炉",
                    isScreen: !0,
                    desc: ""
                };
                t && t.other && t.other.length > 0 && (i.desc = t.other.join("，")), i.link = "", 
                i.imgUrl = e("LoginManager").url + "icon200.8c9ec.png", i.type = "link", a.dump("大结算分享 = ", i), 
                s.onMenuShareAppMessage(i, function() {
                    s.onMenuShareAppMessage({
                        isScreen: !0
                    });
                }, function() {
                    s.onMenuShareAppMessage({
                        isScreen: !0
                    });
                }, !0);
            },
            closeWin: function() {
                o.sendData([ 2535 ]);
                var e = n.getBattle();
                null != e && void 0 != e ? a.switchScene("HallScene") : "PDKScene" == cc.director.getScene().name ? a.switchScene("HallScene") : this.node.removeFromParent();
            }
        }), cc._RF.pop();
    }, {
        "../common/Common": "Common",
        "../tools/weixin": "weixin",
        LoginManager: "LoginManager",
        PdkDatamanager: "PdkDatamanager",
        SendCMD: "SendCMD"
    } ],
    ParseSocket: [ function(e, t, n) {
        "use strict";
        cc._RF.push(t, "032b7CvBV5LR6GS3iAsCNiU", "ParseSocket");
        var a = e("Config"), o = e("../common/Common"), s = e("./Lang"), r = e("SendCMD"), c = e("CMDDelay"), l = e("utils"), d = e("../tools/Dialog"), h = null, u = e("base64_new"), g = e("../tools/weixin"), m = {};
        m.app = new cc.EventTarget(), m.init = function() {
            c.initdispatch(this);
        }, m.dispach = function(e, t) {
            var i = new cc.Event.EventCustom("cmd", !1);
            i.setUserData({
                cmd: e,
                data: t
            }), this.app.dispatchEvent(i);
        }, m.dispachOtherCmd = function(e, t, i) {
            i = i || "othercmd";
            var n = new cc.Event.EventCustom(i, !1);
            n.setUserData({
                cmd: e,
                data: t
            }), this.app.dispatchEvent(n);
        }, m.addListenerOtherCmd = function(e, t) {
            e = e || "othercmd", this.app.on(e, function(e) {
                var i = e.getUserData(), n = i.data;
                n.cmd = i.cmd, t && t(n);
            });
        }, m.dispachGold = function(e) {
            var t = new cc.Event.EventCustom("gold", !1);
            t.setUserData({
                data: e
            }), this.app.dispatchEvent(t);
        }, m.addListenerGold = function(e) {
            this.app.on("gold", function(t) {
                var i = t.getUserData().data;
                e && e(i);
            });
        }, m.dispachOnHide = function(e) {
            var t = new cc.Event.EventCustom("onhide", !1);
            t.setUserData({
                data: e
            }), this.app.dispatchEvent(t);
        }, m.addListenerOnHide = function(e) {
            this.app.on("onhide", function(t) {
                var i = t.getUserData().data;
                e && e(i);
            });
        }, m.dispachOnshow = function(e) {
            var t = new cc.Event.EventCustom("onshow", !1);
            t.setUserData({
                data: e
            }), this.app.dispatchEvent(t);
        }, m.addListenerOnshow = function(e) {
            this.app.on("onshow", function(t) {
                var i = t.getUserData().data;
                e && e(i);
            });
        }, m.removeListenerOnshow = function(e) {
            this.app.off("onshow");
        }, m.dispachDiamonds = function(e) {
            var t = new cc.Event.EventCustom("diamonds", !1);
            t.setUserData({
                data: e
            }), this.app.dispatchEvent(t);
        }, m.addListenerDiamonds = function(e) {
            this.app.on("diamonds", function(t) {
                var i = t.getUserData().data;
                e && e(i);
            });
        }, m.removeListenerGold = function(e) {
            this.app.off("gold");
        }, m.checkResult = function(t, i) {
            var n = t.readInt32();
            1 == n ? a.GameStatus = 1 : 2 == n && (a.GameStatus = 2, e("../pdk/PdkParseScoket").init(t, i));
        }, m.fun1000 = function(t, i) {
            a.loginResult = !0;
            var n = t.readInt32();
            if (o.waitScene = null, RESOURCE.isLoadedRes = !1, a.isGoToRoom = !1, cc.log("fun1000 = " + n), 
            cc.sys.isMobile && JavaRequest.shareSwitch(function(e) {
                0 == e.error && (a.weChatVersion = g.getSystemInfoSync().SDKVersion, a.weChatVersion = a.weChatVersion.replace(/\./g, ""), 
                a.weChatVersion >= 230 && (a.shareSwitch = 0 != e.data[0].shareSwitch), a.isSpecial = 0 != e.data[0].disableShare);
            }), 0 != n) if (e("../tools/Loading").close(), e("../net/NetManager").close(), -5 == n || 5 == n) d.create({
                content: "服务器维护中，请稍后！",
                btnstring: [ 1, "确定" ],
                callback: function(e) {
                    "LoginScene" !== a.curSceneName && o.switchScene("LoginScene");
                }
            }); else if (4 == n) d.create({
                content: "服务器繁忙，请重新登录！",
                btnstring: [ 1, "确定" ],
                callback: function(e) {
                    o.switchScene("LoginScene");
                }
            }); else if (-9 == n) d.create({
                content: "您正在其他平台的游戏房间中，请等牌局结束后再重试！",
                btnstring: [ 1, "确定" ],
                callback: function(e) {
                    o.switchScene("LoginScene");
                }
            }); else {
                var r = "";
                r = o.isNull(s["1000" + n]) ? "未知错误" + n : s["1000" + n], o.dump("错误str = " + r), 
                d.create({
                    content: r,
                    btnstring: [ 1, "确定" ],
                    callback: function(e) {
                        "LoginScene" !== a.curSceneName && o.switchScene("LoginScene");
                    }
                });
            } else e("./GameSocket").neddHeart = !0;
        }, m.fun1999 = function(t, i) {
            var n = {};
            n.type = t.readInt32(), n.room_id = t.readInt32(), n.err = 0, n.server_id = t.readInt32(), 
            a.stopInRoomid = n.room_id, 3 == n.type && (n.passWord = t.readInt32()), a.shareRoomId && 0 != a.shareRoomId && (console.log("加入房间======"), 
            e("../tools/Dialog").close(), r.inRoom(Number(a.shareRoomId))), o.dump("fun1999 = ", n), 
            a.GameStatus = n.type, o.dump("GameStatus——1999 = ", a.GameStatus), o.dump("isGoToRoom ==== ", a.isGoToRoom), 
            1 != a.isGoToRoom ? "PhzScene" == a.curSceneName ? n.room_id > 0 ? (a.saveRoomId = 3 == a.GameStatus ? n.room_id : a.saveRoomId, 
            r.inRoom(n.room_id, n.passWord, a.openRoomFlow)) : (cc.log("1999_gamecount = " + a.gamecount), 
            0 == a.gamecount && "HallScene" !== a.curSceneName ? o.switchScene("HallScene") : "HallScene" !== a.curSceneName ? o.switchScene("HallScene") : (cc.log("1999inRoomSucc"), 
            o.switchScene("PhzScene"))) : n.room_id > 0 ? (a.GameStatus, r.inRoom(n.room_id, n.passWord, a.openRoomFlow)) : ("HallScene" !== a.curSceneName && o.switchScene("HallScene"), 
            pdkEvent.emitEvent(pdkEvent.eventName.refreshHallData, {})) : cc.log("请求进房后收到的1999，忽略掉");
        }, m.fun1086 = function(e, t) {
            a.USER.gold = e.readInt64(), o.dump("跑胡子fun1086 = ", a.USER.gold), this.dispachGold(a.USER.gold);
        }, m.fun1087 = function(e, t) {
            var i = e.readInt32();
            a.USER.diamonds = i, o.dump("跑胡子fun1087 = ", a.USER.diamonds), this.dispachDiamonds(a.USER.diamonds);
        }, m.fun10003 = function(t, i) {
            console("连接断开10003"), e("./GameSocket").neddHeart = !1, e("./tools/Dialog").create({
                content: "您的网络连接断开了，请检查网络设置！",
                btnstring: [ 1, "确定" ],
                callback: function(e) {
                    NetManager.close(), o.switchScene("LoginScene");
                }
            });
        }, m.fun1092 = function(t, i) {
            e("../pdk/PdkParseScoket").init(t, i);
        }, m.fun1089 = function(t, i) {
            var n = t.readInt32();
            0 != n ? 0 == l.getUserSetting("clubPayTips", 0) && a.isShowFK ? (e("../tools/Loading").create(), 
            cc.loader.loadRes("club/tipForPay", function(t, i) {
                e("../tools/Loading").close();
                var o = cc.instantiate(i);
                o.getComponent("TipForPay").init2(n, function() {
                    r.inRoom(a.tempInRoomRoomid, 0, 1);
                }), cc.director.getScene().getChildByName("Canvas").addChild(o);
            })) : r.inRoom(a.tempInRoomRoomid, 0, 1) : r.inRoom(a.tempInRoomRoomid, 0, 1);
        }, m.fun1001 = function(t, i) {
            a.isGoToRoom = !1, cc.log("1001:忽略1999的关掉，后续接收"), DMGER.setHasTotleOverNode(!1), 
            o.setAAValue(), a.isClickLogin = !1, a.inviteTimeData = {};
            var n = t.readInt32();
            cc.log("1001--gametype== ", n);
            var s = t.readInt32();
            if (-4 != s && -1101 != s && -1108 != s && -29 != s || "1" != a.openRoomFlow || 1 != a.tempDeskInRoom) if (-1108 === s || -29 === s || -4 == s || -1101 == s) a.isShowFK ? d.create({
                content: "您的房卡不足，请联系客服。关注开心地方棋牌公众号：kxdf668",
                btnstring: [ 1, "确定" ]
            }) : d.create({
                content: "您的体验次数不足，请联系客服。关注开心地方棋牌公众号：kxdf668",
                btnstring: [ 1, "确定" ]
            }); else {
                if (0 == n && -10 == s) return d.create({
                    content: "此房间不存在",
                    btnstring: [ 1, "确定" ],
                    callback: function(e) {}
                }), void o.dump("1001拦截了 " + s);
                t.position = 6, n = t.readInt32(), a.GameStatus = n, o.dump("fun1001 -=========", a.GameStatus), 
                a.IsOpenReplay = !1, l.setUserSetting("rememberClubId", a.nowClubId), 3 == n ? this.fun1001_paohuzi(t) : 2 == n ? e("../pdk/PdkParseScoket").init(t, i) : 1 == n || m.stopIn();
            } else 0 == l.getUserSetting("noTips", 0) && a.isShowFK ? (e("../tools/Loading").create(), 
            cc.loader.loadRes("club/tipForPay", function(t, i) {
                e("../tools/Loading").close();
                var n = cc.instantiate(i);
                n.getComponent("TipForPay").init(a.xfkNum, function() {
                    a.tempDeskInRoom = 0, r.inRoom(a.tempInRoomRoomid, 0, 0);
                }), cc.director.getScene().getChildByName("Canvas").addChild(n);
            })) : (a.tempDeskInRoom = 0, r.inRoom(a.tempInRoomRoomid, 0, 0));
        }, m.fun1001_paohuzi = function(t, i) {
            if (0 == (g = {
                err: t.readInt32()
            }).err) {
                var n = {};
                n.seatid = t.readInt32(), n.gametype = Number(t.readStringUTF8()), n.peoplenum = t.readInt32(), 
                n.fanshu = t.readInt32(), n.mingtang = t.readInt32(), n.fanxing = t.readInt32(), 
                n.zzhuang = t.readInt32(), n.minscore = t.readInt32(), n.maxhuxi = t.readInt32(), 
                n.zimo = t.readInt32(), n.bihu = t.readInt32(), n.maohu = t.readInt32(), n.minhuxi = t.readInt32(), 
                n.tunxi = t.readInt32(), n.lianzhuang = t.readInt32(), n.datuo = t.readInt32(), 
                n.m1_5_10 = t.readInt32(), n.niao = t.readInt32(), n.wangnum = t.readInt32(), n.xianhu = t.readInt32(), 
                n.piaotype = t.readInt32(), n.wangcost = t.readInt32(), n.paytype = t.readInt32(), 
                a.paytype = n.paytype, n.clubid = t.readInt32(), n.clubtype = t.readStringUTF8();
                var r = t.readStringUTF8();
                if ("" != r) {
                    var c = u.decode(r), l = JSON.parse(c);
                    l.cname ? n.clubname = u.decode(l.cname) : n.clubname = "", l.dname ? n.clubnamed = u.decode(l.dname) : n.clubnamed = "";
                } else n.clubname = "", n.clubnamed = "";
                if (n.aapay = t.readInt64(), a.aapay = n.aapay, n.password = t.readInt32(), n.wanfa_index = t.readInt32(), 
                n.minglongguize = t.readInt32(), a.IsOpenReplay = !1, a.ROOMDATA = n, "PhzScene" !== a.curSceneName) o.switchScene("PhzScene"); else {
                    var h = cc.director.getScene().getChildByName("Canvas").getComponent("PhzScene");
                    cc.log("1001_saveRoomId=", a.saveRoomId), h && cc.log("1001_phzjsgetRoomid=", h.getRoomid()), 
                    0 !== a.saveRoomId && h && h.getRoomid() !== a.saveRoomId ? o.switchScene("PhzScene") : (cc.log("1001inRoomSucc"), 
                    o.switchScene("PhzScene"));
                }
                a.saveRoomId = 0;
            } else if (a.ROOMDATA.roomid = 0, o.dump("fun1001 = ", g.err), -9 == g.err) d.create({
                content: "您当前正在游戏中，不能加入其它房间！",
                btnstring: [ 1, "确定" ],
                callback: function(t) {
                    t && e("NetManager").connectToServer();
                }
            }); else if (-19 == g.err) d.create({
                content: "为了更好的游戏体验，服务器版本已进行升级，请重启应用",
                btnstring: [ 1, "确定" ],
                callback: function(e) {
                    e && o.switchScene("LoginScene");
                }
            }); else if (-31 == g.err) {
                e("../tools/Loading").create(), (g = {}).roomid = t.readInt32(), cc.loader.loadRes("club/passWordTip", function(t, i) {
                    e("../tools/Loading").close();
                    var n = cc.instantiate(i);
                    n.getComponent("PassWordTip").init(g), cc.director.getScene().getChildByName("Canvas").addChild(n);
                });
            } else if (-32 == g.err) {
                var g;
                (g = {}).roomid = t.readInt32(), d.create({
                    content: "验证失败，请输入正确的验证码！",
                    btnstring: [ 1, "确定" ],
                    callback: function(t) {
                        t && cc.loader.loadRes("club/passWordTip", function(t, i) {
                            e("../tools/Loading").close();
                            var n = cc.instantiate(i);
                            n.getComponent("PassWordTip").init(g), cc.director.getScene().getChildByName("Canvas").addChild(n);
                        });
                    }
                });
            } else if (-35 == g.err) d.create({
                content: "此房间为防作弊房间，您与房间内玩家IP相同，无法加入。",
                btnstring: [ 1, "确定" ],
                callback: function(e) {
                    e && ("PhzScene" != a.curSceneName && "MjScene" != a.curSceneName && "PdkScene" != a.curSceneName || o.switchScene("HallScene"));
                }
            }); else if (-1116 == g.err) d.create({
                content: "您已被茶馆馆主禁止在茶馆内玩牌，请联系茶馆馆主",
                btnstring: [ 1, "确定" ]
            }); else if (-1108 == g.err || -29 == g.err) d.create({
                content: "茶馆体验次数不足，请联系客服。关注开心地方棋牌公众号：kxdf668！",
                btnstring: [ 1, "确定" ]
            }); else {
                var m = "";
                m = o.isNull(s["1001" + g.err]) ? "未知错误" + g.err : s["1001" + g.err], d.create({
                    content: m,
                    btnstring: [ 1, "确定" ],
                    callback: function(e) {
                        "HallScene" !== a.curSceneName && o.switchScene("LoginScene");
                    }
                });
            }
            a.ROOMDATA.isObserve = !1, o.dump("fun1001 CONFIG.ROOMDATA = ", a.ROOMDATA);
        }, m.fun1002 = function(e, t) {
            for (var i = [], n = e.readInt32(), s = 0; s < n; s++) i[s] = {}, i[s].seatid = e.readInt32(), 
            this.readPlayer(e, t, i[s]), i[s].score = e.readInt64(), i[s].ip = e.readStringUTF8();
            for (var r = 0; r < n; r++) e.readInt32(), i[r].location = e.readStringUTF8(), Number(i[r].mid) == Number(a.USER.mid) && (a.USER.location = i[r].location);
            o.dump("fun1002 = ", i), this.dispach(t, i);
        }, m.readPlayer = function(e, t, i) {
            return (i = 1 == o.isNull(i) ? {} : i).mid = e.readInt32(), i.sex = e.readInt32(), 
            i.name = e.readStringUTF8(), i.icon = e.readStringUTF8(), i.vip = e.readInt32(), 
            i.gold = e.readInt64(), i.sex = 0 == i.sex ? 2 : i.sex, i.mid == a.USER.mid && (a.USER.gold = i.gold, 
            a.USER.sex = i.sex), i;
        }, m.fun1003 = function(e, t) {
            var i = {};
            i.roomid = e.readInt32(), i.gametype = e.readStringUTF8(), i.gamenum = e.readInt32(), 
            i.dealer = e.readInt32(), i.curr_seatid = e.readInt32(), i.curr_card = e.readStringUTF8(), 
            i.pre_outseatid = e.readInt32(), i.pre_outtype = e.readInt32(), i.seats = [];
            for (var n = e.readInt32(), s = 0; s < n; s++) {
                var r = e.readInt32();
                i.seats[s] = {
                    seatid: r,
                    mid: e.readInt32(),
                    leave: e.readInt32(),
                    leaveTime: e.readInt32(),
                    ready: e.readInt32(),
                    piaotype: e.readInt32(),
                    huxi: e.readInt32()
                };
                for (var c = [], l = e.readInt32(), d = 0; d < l; d++) c[d] = e.readStringUTF8();
                i.seats[s].out_cards = c, l = e.readInt32();
                for (var h = [], u = 0; u < l; u++) {
                    h[u] = {
                        _type: e.readInt32(),
                        cards: []
                    };
                    for (var g = e.readInt32(), m = 0; m < g; m++) h[u].cards[m] = e.readStringUTF8();
                }
                i.seats[s].mustache_cards = h;
            }
            i.room_owner = e.readInt32(), i.gamestate = e.readInt32(), n = e.readInt32(), i.datuo = [], 
            i.needdatuotip = !1;
            for (var f = 0; f < n; f++) {
                r = e.readInt32();
                var p = e.readStringUTF8(), v = (p = JSON.parse(p))[1];
                i.datuo[r] = v, r == a.ROOMDATA.seatid && -1 == v && (i.needdatuotip = !0);
            }
            i.siteid = e.readInt32(), a.ROOMDATA.dealer = i.dealer, i.siteid == a.ROOMDATA.seatid && (a.ROOMDATA.isObserve = !0), 
            o.dump("fun1003", i), this.dispach(t, i);
        }, m.fun1017 = function(e, t) {
            var i = {};
            i.num = e.readInt32(), a.gamecount = i.num, o.dump("fun1017", i), this.dispach(t, i);
        }, m.fun1005 = function(e, t) {
            var i = [], n = this.readPlayer(e, t);
            n.score = e.readInt64(), n.seatid = e.readInt32(), n.ip = e.readStringUTF8(), n.location = e.readStringUTF8(), 
            i.push(n), o.dump("fun1005", i), this.dispach(t, i);
        }, m.fun1006 = function(e, t) {
            var i = {};
            i.err = e.readInt32(), 0 == i.err && (i.seatid = e.readInt32(), i.isready = e.readInt32()), 
            o.dump("fun1006", i), this.dispach(t, i);
        }, m.fun1018 = function(e, t) {
            var i = {};
            if (i.err = e.readInt32(), 0 !== i.err) {
                var n = "" + t;
                return n += i.err, void (o.isNull(s[n]) ? d.create({
                    content: "错误码:" + i.err,
                    btnstring: [ 1, "确定" ],
                    callback: function(e) {}
                }) : d.create({
                    content: s[n],
                    btnstring: [ 1, "确定" ],
                    callback: function(e) {}
                }));
            }
            i.mid = e.readInt32(), i.name = e.readStringUTF8(), i.time = e.readInt32();
            var a = e.readInt32();
            i.playData = {};
            for (var r = 0; r < a; r++) {
                var c = e.readInt32();
                i.playData[c] = {}, i.playData[c].mid = c, i.playData[c].option = e.readInt32();
            }
            o.dump("fun1018", i), this.dispach(t, i);
        }, m.fun1020 = function(e, t) {
            var i = {
                err: e.readInt32()
            };
            0 == i.err && (i.mid = e.readInt32(), i.option = e.readInt32(), o.dump("fun1020", i), 
            this.dispach(t, i));
        }, m.fun1004 = function(e, t) {
            var i = {};
            i.mid = e.readInt32(), i.err = e.readInt32(), i.mid, a.USER.mid, o.dump("fun1004", i), 
            this.dispach(t, i);
        }, m.fun1019 = function(e, t) {
            var i = {};
            if (i.err = e.readInt32(), 0 == i.err) i.seatid = e.readInt32(), this.dispach(t, i); else {
                var n = "";
                n = o.isNull(s[t + "" + i.err]) || "" == s[t + "" + i.err] ? "错误码：" + i.err : s["1000" + i.err], 
                d.create({
                    content: n,
                    btnstring: [ 1, "确定" ],
                    callback: function(e) {}
                });
            }
            o.dump("fun1019", i);
        }, m.fun1008 = function(e, t) {
            var i = {};
            i.dealer = e.readInt32(), i.siteid = e.readInt32(), a.ROOMDATA.dealer = i.dealer, 
            i.siteid == a.ROOMDATA.seatid && (a.ROOMDATA.isObserve = !0), o.dump("fun1008", i), 
            this.dispach(t, i);
        }, m.fun1011 = function(e, t) {
            for (var i = [], n = e.readInt32(), a = 0; a < n; a++) i[a] = e.readStringUTF8();
            o.dump("fun1011", i), this.dispach(t, i);
        }, m.fun1035 = function(e, t) {
            for (var i = [], n = e.readInt32(), a = 0; a < n; a++) i[a] = e.readStringUTF8();
            o.dump("fun1035", i), this.dispach(t, i);
        }, m.fun1013 = function(e, t) {
            var i = {};
            i.seatid = e.readInt32(), i._size = e.readInt32(), i.val = e.readStringUTF8(), i.isshow = e.readInt32(), 
            i.joinhold = e.readInt32(), i.isfanxing = e.readInt32(), o.dump("fun1013", i), c.addCMD({
                cmd: t,
                data: i
            });
        }, m.fun1060 = function(e, t) {
            var i = {};
            if (i.roomId = e.readInt32(), i.roomWhy = e.readInt32(), r.sendCmdMsg(1013), 0 !== i.roomWhy) {
                var n = "";
                1 == i.roomWhy ? n = "倒计时结束。" : 2 == i.roomWhy ? n = "所有玩家已同意,房间ID" + i.roomId + "已经解散！" : 3 == i.roomWhy ? n = "" : 5 == i.roomWhy && (n = "房间提前解散，订单交易失败"), 
                setTimeout(function() {
                    o.toastTip(n);
                }, 1e3);
            }
            o.dump("phzfun1013 = ", i);
        }, m.fun1088 = function(e, t) {
            var i = e.readInt32();
            a.xfkNum = i, "1" == a.openRoomFlow && 0 != a.ROOMDATA.roomid && a.isShowFK;
        }, m.fun1014 = function(e, t) {
            var i = {};
            i.seatid = e.readInt32(), i.precardval = e.readStringUTF8(), i.isoutcard = e.readInt32(), 
            i.canpeng = e.readInt32(), i.canchi = e.readInt32(), i.canhu = e.readInt32(), i.actionid = e.readStringUTF8(), 
            i.hutype = e.readInt32(), i.alarm = e.readInt32(), 1 == i.canhu && (i.canhu = i.canhu + i.hutype), 
            o.dump("fun1014", i), c.addCMD({
                cmd: t,
                data: i
            });
        }, m.fun1012 = function(t, i) {
            var n = {};
            if (n.err = t.readInt32(), 0 == n.err) {
                n.seatid = t.readInt32(), n.mustache = t.readInt32(), n.action_type = t.readInt32();
                var s = t.readInt32();
                n.cards = [];
                for (var r = 0; r < s; r++) n.cards[r] = t.readStringUTF8();
                var l = t.readInt32();
                n.peoplescore = [];
                for (var d = 0; d < l; d++) n.peoplescore[d] = [ t.readInt32(), t.readInt32(), t.readInt32() ];
                n.addscoretype = t.readInt32(), n.seatid == a.ROOMDATA.seatid && 11 == n.action_type ? cc.log("出牌成功") : c.addCMD({
                    cmd: i,
                    data: n
                });
            } else o.dump("fun1012", n), cc.log("出牌错误"), e("NetManager").connectToServer();
        }, m.fun1027 = function(e, t) {
            var i = {};
            i.err = e.readInt32(), o.dump("fun1027", i), this.dispach(t, i);
        }, m.fun2011 = function(e, t) {
            var i = {};
            i.err = e.readInt32(), 0 == i.err && (i.seatid = e.readInt32(), i.bool = e.readInt32()), 
            o.dump("fun2011", i), 0 == i.err && 0 == i.bool && c.addCMD({
                cmd: t,
                data: i
            });
        }, m.fun1026 = function(e, t) {
            var i = {};
            i.over_type = e.readInt32(), i.playerCount = e.readInt32(), i.winsite = 0, i.seats = [];
            for (var n = 1; n <= i.playerCount; n++) {
                var a = {
                    seatid: e.readInt32(),
                    score: e.readInt64(),
                    piaotype: e.readInt32(),
                    piao: e.readInt64()
                };
                i.seats.push(a), 1 == i.over_type && 1 == n && (i.winsite = a.seatid);
            }
            i.dunshu = e.readInt32(), i.fanxingdunshu = e.readInt32(), i.fanxingcard = e.readStringUTF8(), 
            i.wangCount = e.readInt32(), i.kingtable = [];
            for (var s = 1; s <= i.wangCount; s++) i.kingtable.push(e.readStringUTF8());
            i.win_typeCount = e.readInt32(), i.win_type = [], i.win_type_mustache = [];
            for (var r = 1; r <= i.win_typeCount; r++) i.win_type.push(e.readInt32()), i.win_type_mustache.push(e.readInt32());
            i.cardCount = e.readInt32(), i.cards = [];
            for (var l = 1; l <= i.cardCount; l++) i.cards.push(e.readStringUTF8());
            i.playerholdcards = [], i.playerNum = e.readInt32();
            for (var d = 1; d <= i.playerNum; d++) {
                var h = {};
                h.seat = e.readInt32(), h.cardCount = e.readInt32(), h.cards = [];
                for (var u = 0; u < h.cardCount; u++) h.cards.push(e.readStringUTF8());
                i.playerholdcards.push(h);
            }
            i.mustache_cardsCount = e.readInt32(), i.mustache_cards = [];
            for (var g = 1; g <= i.mustache_cardsCount; g++) {
                for (var m = {
                    _type: e.readInt32(),
                    mustache: e.readInt32(),
                    cardCount: e.readInt32(),
                    cards: []
                }, f = 1; f <= m.cardCount; f++) m.cards.push(e.readStringUTF8());
                i.mustache_cards.push(m);
            }
            i.mustache = e.readInt32(), i.huzi_index = e.readInt32(), i.huzi_cardval = e.readStringUTF8(), 
            i.total_scoreCount = e.readInt32(), i.total_score = [];
            for (var p = 1; p <= i.total_scoreCount; p++) {
                var v = {
                    seatid: e.readInt32(),
                    score: e.readInt32()
                };
                i.total_score.push(v);
            }
            i.dealer = e.readInt32(), i.roomid = e.readInt32(), i.xingtype = e.readInt32(), 
            i.titableCount = e.readInt32(), i.titable = [];
            for (var C = 1; C <= i.titableCount; C++) for (var y = {
                count: e.readInt32(),
                arr: []
            }, S = 1; S <= y.count; S++) y.arr.push(e.readStringUTF8());
            i.currtime = e.readInt32(), i.currjushu = e.readInt32(), i.alljushu = e.readInt32(), 
            i.piaoShow = e.readInt32(), o.dump("fun1026", i), c.addCMD({
                cmd: t,
                data: i
            });
        }, m.fun1015 = function(e, t) {
            var i = {};
            i.playerCount = e.readInt32();
            for (var n = 1; n <= i.playerCount; n++) {
                var s = {
                    seatid: e.readInt32(),
                    score: e.readInt32(),
                    total_score: e.readInt32()
                };
                i[n] = s;
            }
            i.room_owner = e.readInt32(), i.roomid = e.readInt32(), i.playerNum = e.readInt32();
            for (var r = 1; r <= i.playerNum; r++) {
                var l = e.readInt32();
                i[l].hucount = e.readInt32(), i[l].zihucount = e.readInt32(), i[l].dianpaocount = e.readInt32(), 
                i[l].ticount = e.readInt32(), i[l].paocount = e.readInt32();
            }
            i.currtime = e.readInt32(), i.player_num = e.readInt32();
            for (var d = 1; d <= i.player_num; d++) {
                var h = e.readInt32(), u = e.readStringUTF8();
                i[h].datuo = u;
            }
            i.num_player = e.readInt32();
            for (var g = 1; g <= i.num_player; g++) {
                var m = e.readInt32(), f = e.readInt32();
                i[m].scoredetail = [];
                for (var p = 1; p <= f; p++) i[m].scoredetail.push(e.readInt32());
            }
            i.curjushu = e.readInt32(), i.totaljushu = e.readInt32(), a.ROOMDATA.ingame = !0, 
            a.istotalover = !0, 0 == o.isNull(i.curjushu) && i.curjushu > 1 && (a.aapay = 0), 
            o.dump("fun1015", i), c.addCMD({
                cmd: t,
                data: i
            });
        }, m.fun10008 = function(e, t) {
            var i = {}, n = e.readStringUTF8(), s = JSON.parse(n);
            if (1 == parseInt(s.type)) a.USER.gold = Number(s.msg), this.dispachGold(a.USER.gold); else if (2 == Number(s.type)) a.USER.isgrant = Number(s.msg), 
            m.dispachOtherCmd(t, i, "refreshCreateRoom"); else if (3 == Number(s.type) || 4 == Number(s.type)) {
                var r = {
                    isHasNoRead: !0
                };
                pdkEvent.emitEvent(pdkEvent.eventName.hallUpdateEmail, r);
            } else 5 == Number(s.type) ? m.dispachOtherCmd(t, i, "updataClubList") : 8 == Number(s.type) ? (a.Is_Show = Number(s.msg), 
            m.dispachOtherCmd(t, i, "updataAgent")) : 10 == Number(s.type) ? m.dispachOtherCmd(t, i, "updataClubManager") : 13 == Number(s.type) ? m.dispachOtherCmd(t, i, "updataClubManager") : 14 == Number(s.type) ? (a.USER.diamonds = Number(s.msg), 
            this.dispachDiamonds(a.USER.diamonds)) : Number(19 == s.type) ? a.isOpenAutoRoom = Number(s.msg) : Number(18 == s.type) ? (a.isOpenZhanjiAndRank = 1 == Number(s.msg), 
            m.dispachOtherCmd(t, i, "updataPaiHang")) : 11 == Number(s.defriend) && m.dispachOtherCmd(t, i, "playerDefriend");
            i.type = parseInt(s.type), o.dump("fun10008", i), this.dispach(t, i);
        }, m.fun1057 = function(e, t) {
            var i = {};
            i.roomid = e.readInt32(), o.dump("fun1057", i), this.dispach(t, i), this.dispachOtherCmd(t, i, "over_1057");
        }, m.fun1058 = function(e) {
            var t = {};
            t.error = e.readInt32(), t.roomid = e.readInt32(), t.error >= 0 ? d.create({
                content: "解散成功！",
                btnstring: [ 1, "确定" ]
            }) : -33 == t.error || -1113 == t.error ? d.create({
                content: "没有权限，解散失败！",
                btnstring: [ 1, "确定" ]
            }) : -34 == t.error || -1114 == t.error ? d.create({
                content: "解散的是非自己的茶馆房间，解散失败！",
                btnstring: [ 1, "确定" ]
            }) : -2 == t.error || -1102 == t.error ? d.create({
                content: "解散失败，房间不存在！",
                btnstring: [ 1, "确定" ]
            }) : d.create({
                content: "解散失败" + t.error,
                btnstring: [ 1, "确定" ]
            });
        }, m.fun1059 = function(e, t) {
            var i = {};
            i.error = e.readInt32(), i.dissMid = e.readInt32(), i.dissName = e.readStringUTF8(), 
            d.create({
                content: "房间已被" + i.dissName + "(" + i.dissMid + ")解散！",
                btnstring: [ 1, "确定" ]
            });
        }, m.fun1028 = function(e) {
            var t = {}, n = e.readInt32();
            for (i = 1; i <= n; ++i) t[i] = {}, t[i].seatid = e.readInt32(), t[i].Location = e.readStringUTF8();
            this.dispach(e.getCMD(), t);
        }, m.fun5000 = function(t, i) {
            e("../tools/Loading").close();
            var n = {};
            n.error = t.readInt32(), n.playerNum = t.readInt32(), n.clubid = t.readInt32(), 
            n.roomInfo = t.readStringUTF8(), n.onlinePlayerNum = t.readInt32(), 0 != n.error ? this.dispach(i, n) : d.create({
                content: "获取失败",
                btnstring: [ 1, "确定" ],
                callback: function(e) {}
            });
        }, m.fun5007 = function(t, i) {
            e("../tools/Loading").close();
            var n = {};
            n.error = t.readInt32(), n.playerNum = t.readInt32(), n.clubid = t.readInt32(), 
            n.roomInfo = t.readStringUTF8(), 0 != n.error ? this.dispachOtherCmd(i, n) : d.create({
                content: "获取失败",
                btnstring: [ 1, "确定" ],
                callback: function(e) {}
            });
        }, m.fun5003 = function(e, t) {
            var i = {};
            i.sendmid = e.readInt32(), i.sendname = e.readStringUTF8(), i.msgid = e.readInt32(), 
            i.inviteTime = e.readInt32(), i.roomInfo = e.readStringUTF8(), i.roomInfo = JSON.parse(i.roomInfo);
            cc.director.getScene();
            var n = a.curSceneName, s = l.getUserSetting("notRecive", 0);
            "PhzScene" !== n && 0 == Number(s) && "MjScene" !== n && "PdkScene" !== n && (h && h.isValid && (h.getComponent("ClubInviteVIew").closeBtnOnClick(), 
            h = null), cc.loader.loadRes("club/clubInviteView", function(e, t) {
                (h = cc.instantiate(t)).getComponent("ClubInviteVIew").init(i), cc.director.getScene().getChildByName("Canvas").addChild(h);
            })), o.dump("fun5003", i), this.dispach(t, i);
        }, m.fun5004 = function(e, t) {
            var i = {};
            i.sendmid = e.readInt32(), i.msgid = e.readInt32(), h && h.isValid && (h.getComponent("ClubInviteVIew").closeBtnOnClick(), 
            h = null), this.dispach(t, i);
        }, m.fun5005 = function(e, t) {
            for (var i = {}, n = e.readInt32(), o = e.readInt32(), s = 1; s <= o; s++) i[s] = {}, 
            i[s].sendmid = e.readInt32(), i[s].sendname = e.readStringUTF8(), i[s].msgid = e.readInt32(), 
            i[s].sendtime = e.readInt32(), i[s].roominfo = e.readStringUTF8(), a.msgData.push(i[s]);
            a.msgData.length >= n && this.dispach(t, a.msgData);
        }, m.fun5006 = function(e, t) {
            e.readInt32();
            a.msgData = [];
        }, m.fun1998 = function(e, t) {
            cc.log("1998为了更好的游戏体验，服务器版本已进行升级，请重启应用"), d.create({
                content: "为了更好的游戏体验，服务器版本已进行升级，请在升级完成后重新进入游戏。",
                closevisible: !1,
                btnstring: [ 1, "确定" ],
                callback: function(e) {
                    o.switchScene("LoginScene");
                }
            });
        }, m.fun1041 = function(e, t) {
            var i = {};
            i.seatid = e.readInt32(), i.seatid < 0 || (i.piao = e.readInt32(), o.dump("fun1041", i), 
            this.dispach(t, i));
        }, m.fun1042 = function(e, t) {
            var i = {}, n = e.readInt32();
            i.roompiaotype = [];
            for (var a = 0; a < n; a++) i.roompiaotype[a] = e.readInt32();
            o.dump("fun1042", i), this.dispach(t, i);
        }, m.fun2010 = function(e, t) {
            var i = {
                type: e.readInt32(),
                mid: e.readInt32(),
                name: e.readStringUTF8(),
                pframe: e.readStringUTF8()
            };
            o.dump("fun2009", i), this.dispach(t, i);
        }, m.fun2002 = function(e, t) {
            var i = {
                _type: e.readInt32(),
                mid: e.readInt32(),
                name: e.readStringUTF8(),
                msg: e.readStringUTF8()
            };
            0 == i._type && (i.seatid = e.readInt32()), i._type, this.dispach(t, i);
        }, m.fun1032 = function(e, t) {
            var i = {
                mid: ws.readInt32(),
                pcate: ws.readInt32() + 1,
                pframe: ws.readInt32()
            };
            this.dispach(t, i);
        }, m.stopIn = function() {
            a.stopInRoomid && a.stopInRoomid > 0 ? d.create({
                content: "您进入了非跑胡子玩法的房间，请解散后重进！房间号为：" + a.stopInRoomid,
                btnstring: [ 1, "确定" ],
                callback: function(e) {
                    o.switchScene("LoginScene");
                }
            }) : d.create({
                content: "您进入了非跑胡子玩法的房间，请解散后重进！",
                btnstring: [ 1, "确定" ],
                callback: function(e) {
                    o.switchScene("LoginScene");
                }
            });
        }, t.exports = m, cc._RF.pop();
    }, {
        "../common/Common": "Common",
        "../net/NetManager": "NetManager",
        "../pdk/PdkParseScoket": "PdkParseScoket",
        "../tools/Dialog": "Dialog",
        "../tools/Loading": "Loading",
        "../tools/weixin": "weixin",
        "./GameSocket": "GameSocket",
        "./Lang": "Lang",
        "./tools/Dialog": void 0,
        CMDDelay: "CMDDelay",
        Config: "Config",
        NetManager: "NetManager",
        SendCMD: "SendCMD",
        base64_new: "base64_new",
        utils: "utils"
    } ],
    PdkDatamanager: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "802d2HATqFGhYnTGeS+qFm5", "PdkDatamanager");
        var n = {};
        n.getMain = function() {
            return this.main;
        }, n.setMain = function(e) {
            this.main = e;
        }, n.createHallScene = function(e) {}, n.createLoginScene = function() {}, n.createRoomLayer = function(e) {}, 
        n.createHelpLayer = function() {}, n.createDaiLiHelpLayer = function() {}, n.createAddRoomLayer = function() {}, 
        n.createBattleScene = function(e) {}, n.createRePlayBattleScene = function(e, t, i) {}, 
        n.crateSmallOver = function(e) {}, n.createTotalOver = function(e) {}, n.createChat = function(e) {}, 
        n.createResults = function(e) {}, n.createAddShareBattle = function(e) {}, n.createShop = function(e) {}, 
        n.setShopNode = function(e) {
            self.shopNode = e;
        }, n.getShopNode = function() {
            return self.shopNode;
        }, n.createEmail = function(e) {}, n.createSignView = function(e) {}, n.createPokerSmallOver = function(e, t) {}, 
        n.createPokerTotalOver = function(e) {}, n.createBroadCast = function(e) {}, n.createActivityNode = function(e) {}, 
        n.createOptionNode = function(e) {}, n.saveBroadCast = function(e) {
            this.broad = e;
        }, n.getBroadCast = function() {
            return this.broad;
        }, n.getTips = function() {
            return this.tips;
        }, n.setTips = function(e, t) {
            null == this.tips && (this.tips = {}), this.tips[e] = t;
        }, n.getTotalOver = function() {
            return this.totalOver;
        }, n.setTotalOver = function(e) {
            this.totalOver = e;
        }, n.getSmallOver = function() {
            return this.smallOver;
        }, n.setSmallOver = function(e) {
            this.smallOver = e;
        }, n.getPokerSmallOver = function() {
            return this.pokerSmall;
        }, n.setPokerSmallOver = function(e) {
            this.pokerSmall = e;
        }, n.setPokerSmallOverData = function(e) {
            this.smalOverData = e;
        }, n.getPokerSmallOverData = function(e) {
            return this.smalOverData;
        }, n.setPokerTotalOverData = function(e) {
            this.totalOverData = e;
        }, n.getPokerTotalOverData = function(e) {
            return this.totalOverData;
        }, n.getOneSmallOver = function() {
            var e = !0;
            return null == this.smallOver && null == this.pokerSmall && (e = !1), e;
        }, n.getOneTotalOver = function() {
            var e = !0;
            return null == this.totalOver && null == this.pokerTotle && (e = !1), e;
        }, n.getPokerTotleOver = function() {
            return this.pokerTotle;
        }, n.setPokerTotleOver = function(e) {
            this.pokerTotle = e;
        }, n.getLoginScene = function() {
            return this.loginScene;
        }, n.setLoginScene = function(e) {
            return this.loginScene = e;
        }, n.getHallScene = function() {
            return this.hallScene;
        }, n.setHallScene = function(e) {
            this.hallScene = e;
        }, n.getBattle = function() {
            return this.battle;
        }, n.setBattle = function(e) {
            this.battle = e;
        }, n.getRePlayBattle = function() {
            return this.rePlayBattle;
        }, n.setRePlayBattle = function(e) {
            this.rePlayBattle = e;
        }, n.getResults = function() {
            return this.results;
        }, n.setResults = function(e) {
            this.results = e;
        }, n.getChat = function() {
            return this.chat;
        }, n.setChat = function(e) {
            this.chat = e;
        }, n.setCreateRoom = function(e) {
            this.createRoom = e;
        }, n.getCreateRoom = function() {
            return this.createRoom;
        }, n.setEmailNode = function(e) {
            this.email = e;
        }, n.getEmailNode = function() {
            return this.email;
        }, n.setSignView = function(e) {
            this.signView = e;
        }, n.getSignView = function() {
            return this.signView;
        }, n.setUserIsNew = function(e) {
            this._isNewPlayer = e;
        }, n.getUserIsNew = function() {
            return this._isNewPlayer || !1;
        }, n.setIsNpCGFG = function(e) {
            this._isFristGame = e;
        }, n.getIsNpCGFG = function() {
            return this._isFristGame || !1;
        }, n.setAnimNodeArr = function(e) {
            null == this._animNodeArr || void 0 == this._animNodeArr ? (this._animNodeArr = [], 
            e && e instanceof cc.Node && this._animNodeArr.push(e)) : e && e instanceof cc.Node && this._animNodeArr.push(e);
        }, n.getAnimNodeArr = function() {
            return this._animNodeArr || [];
        }, n.destroyAnimNode = function() {}, n.setIsFHB = function(e) {
            this._isFHB = e;
        }, n.getIsFHB = function() {
            return this._isFHB || !1;
        }, n.setFHCount = function(e) {
            this._fhCount = e;
        }, n.getFHCount = function() {
            return this._fhCount;
        }, n.setPwsNode = function(e) {
            this._pwsNode = e;
        }, n.getPwsNode = function() {
            return this._pwsNode || null;
        }, n.close = function() {
            this.loadingLayer = null, this.loginScene = null, this.hallScene = null, this.battle = null;
        }, t.exports = n, cc._RF.pop();
    }, {} ],
    PdkParseScoket: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "abf5dogTexPkqFuPb/7Gwb7", "PdkParseScoket");
        var n = e("Config"), a = e("../common/Common"), o = e("SendCMD"), s = e("PdkDatamanager"), r = e("utils"), c = e("../net/Lang"), l = !1, d = [], h = {};
        h.app = new cc.EventTarget(), h.dispach = function(e, t) {
            var i = new cc.Event.EventCustom("pdkcmd", !1);
            i.setUserData({
                cmd: e,
                data: t
            }), this.app.dispatchEvent(i);
        }, h.init = function(t, i) {
            10006 !== i && a.dump("【RECEIVE_PDK】cmd ===== " + i + " ===== time=" + Date.now() + " ===== " + a.getDate());
            var u = {};
            if (t.position = 6, h) {
                if (2520 == i) {
                    var g = t.readInt32();
                    u.cardCount = g, u.cardData = [];
                    for (var m = 0; m < g; m++) u.cardData[m] = t.readStringUTF8();
                } else if (2523 == i) {
                    var f = t.readInt32();
                    if (f <= 0) {
                        return void (s.getBattle() && e("../net/NetManager").connectToServer());
                    }
                    u.sendChairId = f, u.handCount = t.readInt32(), u.cardCount = t.readInt32(), u.cards = [];
                    for (m = 0; m < u.cardCount; m++) u.cards.push(t.readStringUTF8());
                } else if (2531 == i) {
                    s.setPokerSmallOverData(null), d.length = 0, t.readInt32(), u.nextBankerSeat = t.readInt32(), 
                    u.leftRound = t.readInt32(), u.playerCount = t.readInt32(), u.playerInfo = [];
                    for (m = 0; m < u.playerCount; m++) {
                        (y = {}).seat = t.readInt32(), y.mid = t.readInt32(), y.name = t.readStringUTF8(), 
                        y.icon = t.readStringUTF8(), y.bombCount = t.readInt32(), y.roundScore = t.readInt32(), 
                        y.piaoScore = t.readInt32(), y.piao = t.readInt32(), y.totleScore = t.readInt64(), 
                        y.handCout = t.readInt32(), y.cards = [];
                        for (var p = 0; p < y.handCout; p++) y.cards.push(t.readStringUTF8());
                        u.playerInfo.push(y);
                    }
                    if (u.roomInfo = t.readStringUTF8(), u.redSeat = t.readInt32(), u.endStr = t.readStringUTF8(), 
                    s.setPokerSmallOverData(u), console.log("显示小结算xxxxxxx130"), null == (G = s.getBattle()) || void 0 == G) {
                        console.log("没有pdk场景显示小结算");
                        var v = JSON.parse(u.roomInfo);
                        if ("PdkScene" != n.curSceneName && "83" != v.type && "85" != v.type) return void s.setPokerSmallOverData(null);
                        if (n.roomType != v.type) return;
                        return void ("PdkScene" == n.curSceneName && "85" == v.type ? (s.getPokerSmallOver() && (s.getPokerSmallOver().removeFromParent(), 
                        s.setPokerSmallOver(null), s.setPokerSmallOverData(null)), RESOURCE.getPrefab("pdkPwsRes", function(e) {
                            var t = cc.instantiate(e);
                            cc.director.getScene().getChildByName("Canvas").addChild(t, 6);
                        })) : "83" == v.type && RESOURCE.getPrefab("pdkSmallOver", function(e) {
                            if (console.log("roomType ===" + n.roomType), console.log("smallRoomInfo ===" + v.type), 
                            n.roomType == v.type) {
                                console.log("显示小结算xxxxxxx142"), null != s.getPokerSmallOver() && void 0 != s.getPokerSmallOver() && s.getPokerSmallOver().isValid && (s.getPokerSmallOver().removeFromParent(), 
                                s.setPokerSmallOver(null), s.setPokerSmallOverData(null));
                                var t = cc.instantiate(e);
                                cc.director.getScene().getChildByName("Canvas").addChild(t, 6), t.getComponent("PdkSmallOver_new").setData(u);
                            }
                        }));
                    }
                } else if (2532 == i) {
                    u.mySeat = t.readInt32(), u.myhandCount = t.readInt32(), u.cards = [];
                    for (m = 0; m < u.myhandCount; m++) u.cards[m] = t.readStringUTF8();
                    u.playerCount = t.readInt32(), u.playerInfo = {};
                    for (m = 0; m < u.playerCount; m++) {
                        var C = {};
                        C.seat = t.readInt32(), C.handCount = t.readInt32(), C.outCount = t.readInt32(), 
                        C.outCards = [];
                        for (p = 0; p < C.outCount; p++) C.outCards.push(t.readStringUTF8());
                        u.playerInfo[m] = C;
                    }
                    u.lastOutSeat = t.readInt32(), u.curOutSeat = t.readInt32(), u.leftTime = t.readInt32(), 
                    u.endStr = t.readStringUTF8();
                } else {
                    if (2535 == i) {
                        t.readInt32(), u.masterMid = t.readInt32(), u.playerCount = t.readInt32(), u.playerInfo = [];
                        for (m = 0; m < u.playerCount; m++) {
                            var y;
                            (y = {}).seat = t.readInt32(), y.mid = t.readInt32(), y.name = t.readStringUTF8(), 
                            y.icon = t.readStringUTF8(), y.score = t.readInt64(), y.bombCount = t.readInt32(), 
                            y.winCount = t.readInt32(), y.loseCount = t.readInt32(), y.oneGameMaxScore = t.readInt32(), 
                            y.springCount = t.readInt32(), u.playerInfo.push(y);
                        }
                        return u.roomInfo = t.readStringUTF8(), s.setPokerTotalOverData(null), null == s.getPokerSmallOverData() || void 0 == s.getPokerSmallOverData() ? void RESOURCE.getPrefab("pdkTotalOver", function(e) {
                            var t = cc.instantiate(e);
                            if (null != t || void 0 != t) {
                                "PdkScene" != n.curSceneName && "83" != u.roomInfo.type && s.setPokerTotalOverData(null), 
                                null != s.getTotalOver() && void 0 != s.getTotalOver() && s.getTotalOver().isValid && (s.getTotalOver().removeFromParent(), 
                                s.setTotalOver(null), s.setPokerTotalOverData(null));
                                var i = t.getComponent("PDKTotalOver");
                                null != i && i.initData(u), cc.director.getScene().getChildByName("Canvas").addChild(t, 6);
                            }
                        }) : void s.setPokerTotalOverData(u);
                    }
                    if (2023 == i) {
                        if (u.chairId = t.readInt32(), u.count = t.readInt32(), -1 == u.chairId) {
                            u.tPiao = [];
                            for (m = 0; m < u.count; m++) u.tPiao[m] = t.readInt32();
                            u.time = t.readInt32();
                        }
                    } else if (2024 == i) {
                        var S = t.readInt32();
                        u.tPiaoScore = [];
                        for (m = 0; m < S; m++) {
                            var b = t.readInt32();
                            u.tPiaoScore[b] = t.readInt32();
                        }
                    } else if (2025 == i) {
                        S = t.readInt32();
                        u.tScore = [];
                        for (m = 0; m < S; m++) {
                            b = t.readInt32();
                            u.tScore[b] = t.readInt32();
                        }
                        u.isTaifei = t.readInt32();
                    } else if (2027 == i) u.mid = t.readInt32(), u.seatid = t.readInt32(), u.tuoguan = t.readInt32(); else if (1001 == i) l = !1, 
                    this.fun1001(t, i); else if (1002 == i) {
                        if (u.masterMid = t.readInt32(), u.roomStatic = t.readInt32(), u.gotoCount = t.readInt32(), 
                        u.total = t.readInt32(), u.playerCount = t.readInt32(), u.playerCount && u.playerCount > 0) {
                            u.playerUserdata = [];
                            for (var k = 0; k < u.playerCount; ++k) u.playerUserdata[k] = [], u.playerUserdata[k].chairId = t.readInt32(), 
                            u.playerUserdata[k].ip = t.readStringUTF8(), u.playerUserdata[k].mid = t.readInt32(), 
                            u.playerUserdata[k].gp = t.readInt32(), u.playerUserdata[k].sex = t.readInt32(), 
                            u.playerUserdata[k].name = t.readStringUTF8(), u.playerUserdata[k].icon = t.readStringUTF8(), 
                            u.playerUserdata[k].city = t.readStringUTF8(), u.playerUserdata[k].gold = t.readInt64(), 
                            u.playerUserdata[k].commString = JSON.parse(t.readStringUTF8());
                        }
                        u.bankerChairId = t.readInt32(), u.playerMax = t.readInt32(), u.roomCfg = t.readStringUTF8();
                    } else if (1003 == i) {
                        var w = t.readInt32();
                        u.userTypeScore = {};
                        for (var I = 0; I < w; ++I) {
                            var N = t.readInt32();
                            u.userTypeScore[I] = {}, u.userTypeScore[I].chairId = N, u.userTypeScore[I].type = t.readInt32(), 
                            u.userTypeScore[I].leaveTime = t.readInt32(), u.userTypeScore[I].score = t.readInt64();
                        }
                        l = !0;
                    } else if (1004 == i) u.playerUserdata = {}, u.playerUserdata.chairId = t.readInt32(), 
                    u.playerUserdata.ip = t.readStringUTF8(), u.playerUserdata.mid = t.readInt32(), 
                    u.playerUserdata.gp = t.readInt32(), u.playerUserdata.sex = t.readInt32(), a.print("data.playerUserdata.sex === ", u.playerUserdata.sex), 
                    u.playerUserdata.name = t.readStringUTF8(), u.playerUserdata.icon = t.readStringUTF8(), 
                    u.playerUserdata.city = t.readStringUTF8(), u.playerUserdata.gold = t.readInt64(), 
                    u.playerUserdata.commString = JSON.parse(t.readStringUTF8()), u.score = t.readInt64(); else if (1005 == i) u.chairId = t.readInt32(); else if (1006 == i) u.chairId = t.readInt32(); else if (1007 == i) {
                        if (-1e3 == t.readInt32()) return e("../tools/Loading").close(), void a.oneBtnTips("房间局数不够");
                        u.gotoCount = t.readInt32();
                    } else if (1008 == i) {
                        if (-1004 == t.readInt32()) return void a.oneBtnTips("3秒内不能解散");
                        u.chairId = t.readInt32(), u.remainTime = t.readInt32(), u.votePlayCount = t.readInt32(), 
                        u.votePlayData = [];
                        for (var T = 0; T < u.votePlayCount; ++T) u.votePlayData[T] = [], u.votePlayData[T].chairId = t.readInt32(), 
                        u.votePlayData[T].state = t.readInt32();
                    } else if (1009 == i) {
                        if (u.err = t.readInt32(), -1002 == u.err || -1001 == u.err) return;
                        if (u.chairId = t.readInt32(), u.mid = t.readInt32(), u.tag = t.readInt32(), u.mid == n.USER.mid) {
                            if (a.dump("1009", u), n.toHall = !0, 0 == u.tag) {
                                var R = s.getPokerSmallOverData(), P = null;
                                R && R.roomInfo && (P = JSON.parse(R.roomInfo)), R && P && ("82" == P.type || "81" == P.type || "84" == P.type) ? console.log("当前有闯关模式的小结算，且踢我出房间，不要切换到大厅") : a.switchScene("HallScene");
                            } else 1 == u.tag || 6 == u.tag || 7 == u.tag && a.switchScene("HallScene");
                            return;
                        }
                    } else if (1012 == i) u.err = t.readInt32(); else if (1013 == i) {
                        if ((u = {}).roomId = t.readInt32(), u.roomType = t.readStringUTF8(), u.roomWhy = t.readInt32(), 
                        o.sendData([ 1013 ]), 0 == u.roomWhy) ; else {
                            if (1 == u.roomWhy) "倒计时结束。"; else if (2 == u.roomWhy) "所有玩家已同意,房间ID" + u.roomId + "已经解散！"; else if (3 == u.roomWhy) {
                                if ("1" == n.openRoomFlow) return void n.isShowFK;
                                "房间ID" + u.roomId + "已经解散！";
                            } else 5 == u.roomWhy && "房间提前解散，订单交易失败";
                        }
                    } else if (1100 == i) {
                        if (1 == n.isGoToRoom) return void cc.log("请求进房后收到的1100，忽略掉");
                        u = {};
                        e("../tools/Loading").close();
                        var D = s.getBattle();
                        if (null != D && void 0 != D) return void (D.isTotalOver() ? null != D.dissolveNode && void 0 != D.dissolveNode && D.dissolveNode.removeFromParent() : "HallScene" != n.curSceneName && a.switchScene("HallScene"));
                    } else if (1089 == i) {
                        if (0 != (u = t.readInt32())) 0 == (S = r.getUserSetting("clubPayTips", 0)) ? (e("../tools/Loading").create(), 
                        cc.loader.loadRes("club/tipForPay", function(t, i) {
                            e("../tools/Loading").close();
                            var a = cc.instantiate(i);
                            a.getComponent("TipForPay").init2(u, function() {
                                o.inRoom(n.tempInRoomRoomid, 0, 1);
                            }), cc.director.getScene().getChildByName("Canvas").addChild(a);
                        })) : o.inRoom(n.tempInRoomRoomid, 0, 1); else o.inRoom(n.tempInRoomRoomid, 0, 1);
                    } else if (1020 == i) {
                        var B = t.readInt32();
                        u.cardData = {};
                        for (var x = 0; x < B; ++x) u.cardData[x] = t.readStringUTF8();
                        u.overCardCount = t.readInt32();
                    } else if (1021 == i) {
                        u.chairId = t.readInt32();
                        var A = t.readInt32();
                        u.isOparation = !0;
                        for (var _ = 0; _ < A; ++_) {
                            if (104 == t.readInt32()) {
                                u.isOparation = !1;
                                break;
                            }
                        }
                    } else if (1022 == i) {
                        u.chairId = t.readInt32(), u.count = t.readInt32(), u.action = {};
                        for (var F = 0; F < u.count; ++F) {
                            var L = {};
                            L.act_id = t.readInt32(), L.cards = t.readStringUTF8(), u.action[F] = L;
                        }
                        u.operaId = t.readStringUTF8();
                    } else if (1086 == i) t.readInt64(); else if (1087 == i) {
                        var O = t.readInt64();
                        n.USER.diamonds = O;
                    } else if (1088 == i) {
                        var E = t.readInt32();
                        n.xfkNum = E;
                    } else if (2999 == i) u.chairId = t.readInt32(); else if (8001 == i) u.chairId = t.readInt32(), 
                    u.gpsPos = t.readStringUTF8(); else if (2003 == i) {
                        var M = t.readStringUTF8().split("##_|YY");
                        u.sendMid = M[1], u.sendMsg = M[2], u.receiveMid = M[3], u.loopTimes = Number(M[4]), 
                        u.isten = M[5];
                    } else if (2004 == i) u.seatid = t.readInt32(), u.str = t.readStringUTF8(), u.textNum = t.readInt32(), 
                    u.name = t.readStringUTF8(); else if (1594 == i) {
                        u.players = t.readInt32(), u.playerfen = [];
                        for (m = 0; m < u.players.length; m++) {
                            (U = {}).mid = t.readInt32(), U.pos = t.readInt32(), U.score = t.readInt32(), U.shengpaishu = t.readInt32(), 
                            u.playerfen.push(U);
                        }
                    } else if (1596 == i) {
                        u.players = t.readInt32(), u.playerfen = [];
                        for (m = 0; m < u.players; m++) {
                            var U;
                            (U = {}).chairId = t.readInt32(), U.mid = t.readInt32(), U.score = t.readInt64(), 
                            u.playerfen.push(U);
                        }
                    } else if (1092 == i) {
                        var G;
                        if (u.type = t.readInt32(), u.err = t.readInt32(), -1101 == u.err) if (null != (G = s.getBattle()) && void 0 != G) return void G.onRecvMsg(i, u);
                        var V = "";
                        return V = a.isNull(c["1092" + u.err]) ? "1092未知错误" + u.err : c["1092" + u.err], 
                        e("../tools/Dialog").create({
                            content: V,
                            btnstring: [ 1, "确定" ],
                            callback: function(t) {
                                -1105 == u.err ? e("../net/NetManager").connectToServer() : "HallScene" != n.curSceneName && a.switchScene("HallScene");
                            }
                        }), void a.dump("1092", u);
                    }
                }
                a.dump("" + i, u);
                if (0 == l && -1 != [ 1004, 1006, 1005, 1022, 1021 ].indexOf(i)) return void d.push({
                    cmd: i,
                    data: u
                });
                if (h.sendMsgToNode(i, u), 1 == l && d.length > 0) {
                    console.log("延时消息 = ", d);
                    for (var J = 0; J < d.length; J++) {
                        var q = d[J];
                        h.sendMsgToNode(q.cmd, q.data);
                    }
                    d.length = 0;
                }
            }
        }, h.fun1001 = function(t, i) {
            var r = {};
            r.gametype = t.readInt32();
            var c = t.readInt32();
            if (n.shareRoomId = 0, -1 == c) return e("../tools/Loading").close(), void a.oneBtnTips("房间人数已满");
            if (r.err = c, !(c > 0)) {
                if (-1111 == c) {
                    var l = {
                        roomid: t.readInt32()
                    };
                    return void cc.loader.loadRes("club/passWordTip", function(t, i) {
                        e("../tools/Loading").close();
                        var n = cc.instantiate(i);
                        n.getComponent("PassWordTip").init(l), cc.director.getScene().getChildByName("Canvas").addChild(n);
                    });
                }
                return -1112 == c ? void a.oneBtnTips("验证失败，请输入正确的验证码！", function() {
                    var i = {
                        roomid: t.readInt32()
                    };
                    cc.loader.loadRes("club/passWordTip", function(t, n) {
                        e("../tools/Loading").close();
                        var a = cc.instantiate(n);
                        a.getComponent("PassWordTip").init(i), cc.director.getScene().getChildByName("Canvas").addChild(a);
                    });
                }) : void (-1 == c ? a.oneBtnTips("房间人数已满！") : -9 == c ? e("../tools/Dialog").create({
                    content: "您当前正在游戏中，不能加入其它房间！",
                    btnstring: [ 1, "确定" ],
                    callback: function(t) {
                        t && e("NetManager").connectToServer();
                    }
                }) : -1105 == c ? a.oneBtnTips("您已经在房间了！") : -1102 == c ? a.oneBtnTips("此房间不存在") : -1100 == c ? a.oneBtnTips("房间不足！") : -1101 == c ? n.isShowFK ? a.oneBtnTips("房卡不足，请联系客服。关注开心地方棋牌公众号：kxdf668") : a.oneBtnTips("您的体验次数不足，请联系客服。关注开心地方棋牌公众号：kxdf668") : -1103 == c ? a.oneBtnTips("未指定代理！!") : -1104 == c ? a.oneBtnTips("代理商体验次数不足，请联系客服。关注开心地方棋牌公众号：kxdf668") : -1105 == c ? a.oneBtnTips("您已经在房间了！") : -1106 == c ? a.oneBtnTips("你不在该茶馆，加入房间失败！") : -1107 == c ? a.oneBtnTips("加入房间失败！") : -1109 == c ? a.oneBtnTips("茶馆已经不存在！") : -1115 == c ? e("../tools/Dialog").create({
                    content: "此房间为防作弊房间，您与房间内玩家IP相同，无法加入。",
                    btnstring: [ 1, "确定" ],
                    callback: function(e) {
                        e && ("PhzScene" != n.curSceneName && "MjScene" != n.curSceneName && "PdkScene" != n.curSceneName || a.switchScene("HallScene"));
                    }
                }) : -1116 == c ? e("../tools/Dialog").create({
                    content: "您已被茶馆馆主禁止在茶馆内玩牌，请联系茶馆馆主",
                    btnstring: [ 1, "确定" ]
                }) : a.oneBtnTips("错误码:1001-" + c));
            }
            r.roomid = t.readInt32(), r.type = t.readStringUTF8(), n.roomType = r.type;
            var d = s.getBattle();
            if (parseInt(r.roomid), a.dump("PDKfun1001 = ", r), n.toHall = !1, d = s.getBattle()) return d.isHave1002 = !1, 
            console.log("有跑得快场景"), 0 != parseInt(r.roomid) && d.deskCleanUp && d.deskCleanUp(), 
            null != s.getPokerSmallOver() && void 0 != s.getPokerSmallOver() && s.getPokerSmallOver().isValid && (s.getPokerSmallOver().removeFromParent(), 
            s.setPokerSmallOver(null), s.setPokerSmallOverData(null), console.log("之前就有小结算，删掉旧的")), 
            s.setPokerSmallOverData(null), o.send2540(), void o.send2541();
            a.gotoGameScene("PdkScene");
        }, h.sendMsgToNode = function(e, t) {
            var i = s.getHallScene(), n = s.getBattle();
            null != i && void 0 != i && i.onRecvMsg(e, t), null != n && void 0 != n && n.onRecvMsg(e, t);
        }, t.exports = h, cc._RF.pop();
    }, {
        "../common/Common": "Common",
        "../net/Lang": "Lang",
        "../net/NetManager": "NetManager",
        "../tools/Dialog": "Dialog",
        "../tools/Loading": "Loading",
        Config: "Config",
        NetManager: "NetManager",
        PdkDatamanager: "PdkDatamanager",
        SendCMD: "SendCMD",
        utils: "utils"
    } ],
    PdkPwsResult: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "3bddcuf551KqbuKsDW2hUWJ", "PdkPwsResult");
        var n = e("Common"), a = e("weixin"), o = e("SendCMD"), s = e("PdkDatamanager"), r = e("Config");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.initDestroyNode(), this.initView(), this.initViewData(), this.initData(), this.clickNode(), 
                this.setNetData(), this.register();
            },
            initDestroyNode: function() {
                var e = s.getPwsNode();
                e && e instanceof cc.Node && e.isValid && e.destroy(), s.setPwsNode(this.node);
            },
            initView: function() {
                n.stopEvent(this.node), this.back = cc.find("content/succ/back", this.node), this.starNode = cc.find("star", this.node), 
                this.titleNode = cc.find("content/title", this.node), this.succNode = cc.find("content/succ", this.node), 
                this.shineNode = cc.find("content/succ/shine", this.node), this.dw = cc.find("content/succ/dw", this.node), 
                this.dwStar = cc.find("content/succ/dwStar", this.node), this.cfStar = cc.find("content/succ/cfStar", this.node), 
                this.cfStarSp = cc.find("content/succ/cfStar/s_icon", this.node), this.cfStarCount = cc.find("content/succ/cfStar/s_count", this.node), 
                this.faileNode = cc.find("content/faile", this.node), this.faileContent = cc.find("content/faile/content", this.node), 
                this.faileShare = cc.find("content/faile/share", this.node), this.faileShareTxt = cc.find("content/faile/share/txt", this.node), 
                this.failGoOnGame = cc.find("content/faile/goOnGame", this.node), this.share = cc.find("content/succ/share", this.node), 
                this.shareTxt = cc.find("content/succ/share/txt", this.node), this.goOnGame = cc.find("content/succ/goOnGame", this.node), 
                this.goOnGameTxt = cc.find("content/succ/goOnGame/txt", this.node), this.extraStarNode = cc.find("content/extraStar", this.node), 
                this.extraTxt = cc.find("content/extraStar/txt", this.node), this.redPackNode = cc.find("content/redPack", this.node), 
                this.redSure = cc.find("content/redPack/sure", this.node), this.redContent = cc.find("content/redPack/content", this.node);
            },
            initViewData: function() {
                this.setShowFailNode(!1), this.setShowSuccNode(!1), this.setRedPackNode(!1), this.setExtraCount(-1, -1, !0);
            },
            initData: function() {
                this.resData = {}, this.roomInfo = {}, this.battle = s.getBattle() || {}, this.roomPwsType = "85", 
                this.roomJu = "1", this.isWin = !1, this.isCanPro = !0, this.isFreeStar = !1, this.isJustGoon = !1, 
                this.shareCurrType = 1, this.shareStatus = 1, this.currentDwStar = 1, this.nowDwStar = 0, 
                this.currentDw = 1, this.currentLeavel = 1, this.shareClickType = -1, this.shareClickCode = {
                    nn: -1,
                    songxing: 0,
                    xyfx: 1,
                    baoxing: 2
                }, this.shareStatusCode = {
                    jixu: 1,
                    songxing: 2,
                    baoxing: 3,
                    spbaoxing: 4,
                    xyfx: 5
                }, this.socketCode = {
                    resSmallCode: 2531,
                    outRoomCode: 6
                }, this.dwCode = {
                    qingTong: 1,
                    baiYin: 2,
                    huangJin: 3,
                    boJin: 4,
                    zuanShi: 5,
                    xingYao: 6,
                    chaoFanDaShi: 7
                }, this.shareCode = {
                    group: 0,
                    ad: 1
                }, this.leavelCode = {
                    chuJi: 1,
                    zhongJi: 2,
                    gaoJi: 3,
                    teJi: 4,
                    daShi: 5
                }, this.leavelType = {
                    chuJi: "初级",
                    zhongJi: "中级",
                    gaoJi: "高级",
                    teJi: "特级",
                    daShi: "大师"
                }, this.dwType = {
                    qingTong: "青铜",
                    baiYin: "白银",
                    huangJin: "黄金",
                    boJin: "铂金",
                    zuanShi: "钻石",
                    xingYao: "星耀",
                    chaoFanDaShi: "超凡大师"
                }, this.dwPreName = {
                    qingTong: "pdkG_qtong",
                    baiYin: "pdkG_byin",
                    huangJin: "pdkG_hjin",
                    boJin: "pdkG_bjin",
                    zuanShi: "pdkG_zshi",
                    xingYao: "pdkG_xyao",
                    chaoFanDaShi: "pdkG_dshi"
                }, this.showPreName = {
                    glow: "pdkG_glow",
                    title: "pdkG_title"
                }, this.starPreName = {
                    up: "pdkG_up",
                    down: "pdkG_down"
                }, this.animName = {
                    down: "g_Level_Up_Star_Broken",
                    up: "g_Level_Up_Star",
                    qtong: "g_Bronze",
                    byin: "g_Silver",
                    hjin: "g_Gold",
                    bjin: "g_Platinum",
                    zshi: "g_Diamond",
                    xyao: "g_Star_Shining",
                    dshi: "RankDegrade",
                    shine: "g_Glow"
                }, this.shareType = {
                    sGroup: "分享到群送星",
                    sGroupProStar: "分享到群保星",
                    justShare: "炫耀分享",
                    showADProStar: "看视频保星",
                    goOn: "继续"
                }, this.faileStarType = {
                    sGroup: "分享到群",
                    ad: "看视频"
                };
            },
            clickNode: function() {
                n.clickNode(this.back, this.backClick.bind(this)), n.clickNode(this.share, this.shareClick.bind(this)), 
                n.clickNode(this.goOnGame, this.goOnGameClick.bind(this)), n.clickNode(this.faileShare, this.faileShareClick.bind(this)), 
                n.clickNode(this.failGoOnGame, this.failGoOnGameClick.bind(this));
            },
            setNetData: function() {
                e("../tools/Loading").create(), o.outRoomSuccess(this.socketCode.outRoomCode);
                var t = !1, i = 0, n = function(i) {
                    if (i.result && i.data && i.data[0]) {
                        i = i.data[0], t = !0, e("../tools/Loading").close(), this.isWin = i.winStatus % 2 != 0, 
                        this.isCanPro = i.protectTimes > 0, this.isFreeStar = i.addTimes > 0, this.shareCurrType = i.isVideo || 0, 
                        this.currentDwStar = i.needStar || 2, this.nowDwStar = i.star || 0;
                        var n = i.lastStars || 0;
                        this.currentDw = i.aLevel || 1;
                        var a = i.lastAlevel || 1;
                        this.currentLeavel = i.bLevel || 1;
                        var o = i.lastBlevel || 1;
                        this.isJustGoon = !this.isWin && !this.isCanPro;
                        var s = i.money || 0, r = a == this.currentDw && o == this.currentLeavel && 0 == n && n == this.nowDwStar;
                        r && (this.isJustGoon = !0), this.isJustGoon ? (this.setShowFailNode(!1), this.setShowSuccNode(!0), 
                        this.setGoonIsShow(!1), this.setShareType(!0), this.setExtraCount(-1, -1, !0), this.setInitStar(this.currentDwStar, this.nowDwStar, this.isWin, r), 
                        this.setCFCount(this.nowDwStar), this.setDw(this.currentDw, this.currentLeavel, r)) : (this.setShowFailNode(!this.isWin), 
                        this.setShowSuccNode(this.isWin), this.isWin ? (this.setShareType(), this.setIsTitle(), 
                        this.setIsShine(), this.setGoonIsShow(!0), this.setExtraCount(i.addTimes, i.extraStarCount || 1), 
                        this.setInitStar(this.currentDwStar, this.nowDwStar, this.isWin), this.setCFCount(this.nowDwStar), 
                        this.setDw(this.currentDw, this.currentLeavel), this.setRedPack(s, this.currentDw)) : (this.setExtraCount(-1, -1, !0), 
                        this.setShareFailTxt(), this.setFailContent()));
                    }
                };
                JavaRequest.upLevel(n.bind(this)), this.schedule(function() {
                    console.error(666, "是否重新请求", t), t ? this.unscheduleAllCallbacks() : (e("../tools/Loading").create(), 
                    JavaRequest.upLevel(n.bind(this)), i++, console.error(666, "请求次数", i), i >= 4 && this.backClick());
                }.bind(this), 5, 4);
            },
            register: function() {
                pdkEvent.registEvent(pdkEvent.eventName.pwsShareBack, this.shareBack.bind(this), this.node);
            },
            shareBack: function() {
                this.shareClickType != this.shareClickCode.nn && (this.shareClickType == this.shareClickCode.baoxing ? this.httpProStar() : this.shareClickType == this.shareClickCode.songxing ? this.httpSongStar() : this.shareClickType == this.shareClickCode.xyfx && this.nextGame(), 
                this.shareClickType = this.shareClickCode.nn);
            },
            protectStar: function(e) {
                e.data && e.data[0] && (e = e.data[0], this.currentDwStar = e.needStar, this.nowDwStar = e.star, 
                this.currentDw = e.aLevel, this.currentLeavel = e.bLevel, this.setInitStar(this.currentDwStar, this.nowDwStar, !1, !0), 
                this.setCFCount(this.nowDwStar), this.setDw(this.currentDw, this.currentLeavel, !0));
            },
            addStar: function(e) {
                if (e.data && e.data[0]) {
                    e = e.data[0], this.currentDwStar = e.needStar, this.nowDwStar = e.star, this.currentDw = e.aLevel, 
                    this.currentLeavel = e.bLevel, this.isFreeStar = e.addTimes > 0;
                    var t = e.money || 0;
                    this.setIsTitle(), this.setIsShine(), this.setExtraCount(-1, -1, !0), this.setInitStar(this.currentDwStar, this.nowDwStar, this.isWin), 
                    this.setCFCount(this.nowDwStar), this.setDw(this.currentDw, this.currentLeavel), 
                    this.setRedPack(t, this.currentDw);
                }
            },
            setShowSuccNode: function(e) {
                this.succNode.active = e;
            },
            setShowFailNode: function(e) {
                this.faileNode.active = e;
            },
            setRedPackNode: function(e) {
                this.redPackNode.active = e;
            },
            backClick: function() {
                o.sendData([ this.socketCode.resSmallCode ]), r.toHall && 1 == r.toHall && (r.toHall = !1, 
                n.switchScene("HallScene"));
            },
            shareClick: function() {
                o.sendData([ this.socketCode.resSmallCode ]), this.shareStatus == this.shareStatusCode.jixu ? this.nextGame() : this.shareStatus == this.shareStatusCode.songxing ? (this.shareClickType = this.shareClickCode.songxing, 
                this.wxGroupFree()) : this.shareStatus == this.shareStatusCode.xyfx && (this.shareClickType = this.shareClickCode.xyfx, 
                this.wxJustShine());
            },
            goOnGameClick: function() {
                o.sendData([ this.socketCode.resSmallCode ]), this.nextGame();
            },
            faileShareClick: function() {
                (this.shareStatus = this.shareStatusCode.baoxing) ? (this.shareClickType = this.shareClickCode.baoxing, 
                this.wxGroupPro()) : (this.shareStatus = this.shareStatusCode.spbaoxing) && this.wxAdPro();
            },
            wxGroupFree: function() {
                a.onMenuShareAppMessage({});
            },
            wxGroupPro: function() {
                a.onMenuShareAppMessage({});
            },
            wxAdPro: function() {
                a.rewardedVideoAd(function() {
                    this.httpProStar();
                }.bind(this));
            },
            wxJustShine: function() {
                a.onMenuShareAppMessage({});
            },
            httpProStar: function() {
                JavaRequest.protectStar(function(e) {
                    e.result && (this.setShowFailNode(!1), this.setShowSuccNode(!0), this.setGoonIsShow(!0), 
                    this.isFreeStar = !1, this.setShareType(), this.protectStar(e), n.toastTip(pdkShowContent.pwsBxSucc));
                }.bind(this));
            },
            httpSongStar: function() {
                JavaRequest.addStar(function(e) {
                    e.result && (this.setShowFailNode(!1), this.setShowSuccNode(!0), this.setGoonIsShow(!0), 
                    this.addStar(e), this.isFreeStar = !1, this.setShareType());
                }.bind(this));
            },
            failGoOnGameClick: function() {
                this.setShowFailNode(!1), this.setShowSuccNode(!0), this.setGoonIsShow(!1), this.setShareType(!0), 
                this.setInitStar(this.currentDwStar, this.nowDwStar, this.isWin), this.setCFCount(this.nowDwStar), 
                this.setDw(this.currentDw, this.currentLeavel);
            },
            nextGame: function() {
                var e = {};
                e.type = this.roomPwsType, e.data = this.roomJu, o.sendPaodekuaiCreatRoom_new(e), 
                this.battle && this.battle.deskCleanUp && this.battle.deskCleanUp(), this.closeNode();
            },
            setInitStar: function(e, t, i, n) {
                var a = this, o = this.currentDw >= this.dwCode.chaoFanDaShi;
                if (this.dwStar.active = !o, this.cfStar.active = o, !o) {
                    this.dwStar.removeAllChildren(), e = parseInt(e) || 0, t = parseInt(t) || 0, n ? t-- : i && (t -= 2), 
                    t > e && (t = e);
                    for (var s = function(e) {
                        var i = cc.instantiate(a.starNode);
                        i.parent = a.dwStar;
                        var n = "pdkgame/Effects/common/" + (e <= t ? "star_level" : "star_level_s");
                        cc.loader.loadRes(n, cc.SpriteFrame, function(e, t) {
                            e || (i.getComponent(cc.Sprite).spriteFrame = t);
                        });
                    }, r = 0; r < e; r++) s(r);
                }
            },
            setCFCount: function(e) {
                this.currentDw < this.dwCode.chaoFanDaShi || (this.isWin ? e-- : e++, this.cfStarCount.getComponent(cc.Label).string = "x " + e);
            },
            setCFStarAnim: function(e, t) {
                if (!(this.currentDw < this.dwCode.chaoFanDaShi) && !t) {
                    var i = this.isWin ? this.starPreName.up : this.starPreName.down, a = this.isWin ? this.animName.up : this.animName.down;
                    RESOURCE.getPrefab(i, function(t) {
                        var i = cc.instantiate(t);
                        i.parent = this.cfStarSp, n.playAnim(i.getChildByName("Pos"), a), this.cfStarCount.getComponent(cc.Label).string = "x " + e, 
                        i.destroy();
                    }.bind(this));
                }
            },
            setStarAnim: function(e, t) {
                if (!(this.currentDw >= this.dwCode.chaoFanDaShi)) {
                    e && t--;
                    var i = this.dwStar.children[t];
                    if (i) if (i.removeAllChildren(), e) RESOURCE.getPrefab(this.starPreName.up, function(e) {
                        var t = cc.instantiate(e);
                        t.parent = i, n.playAnim(t.getChildByName("Pos"), this.animName.up);
                    }.bind(this)); else {
                        cc.loader.loadRes("pdkgame/Effects/common/star_level_s", cc.SpriteFrame, function(e, t) {
                            e || RESOURCE.getPrefab(this.starPreName.down, function(e) {
                                var a = cc.instantiate(e);
                                a.parent = i, i.getComponent(cc.Sprite).spriteFrame = t, n.playAnim(a.getChildByName("Pos"), this.animName.down, function() {
                                    a.destroy();
                                }.bind(this));
                            }.bind(this));
                        }.bind(this));
                    }
                }
            },
            setDw: function(e, t, i) {
                var a = this.dwType.qingTong, o = this.dwPreName.qingTong, s = this.animName.qtong;
                switch (e) {
                  case this.dwCode.qingTong:
                    a = this.dwType.qingTong, o = this.dwPreName.qingTong, s = this.animName.qtong;
                    break;

                  case this.dwCode.baiYin:
                    a = this.dwType.baiYin, o = this.dwPreName.baiYin, s = this.animName.byin;
                    break;

                  case this.dwCode.huangJin:
                    a = this.dwType.huangJin, o = this.dwPreName.huangJin, s = this.animName.hjin;
                    break;

                  case this.dwCode.boJin:
                    a = this.dwType.boJin, o = this.dwPreName.boJin, s = this.animName.bjin;
                    break;

                  case this.dwCode.zuanShi:
                    a = this.dwType.zuanShi, o = this.dwPreName.zuanShi, s = this.animName.zshi;
                    break;

                  case this.dwCode.xingYao:
                    a = this.dwType.xingYao, o = this.dwPreName.xingYao, s = this.animName.xyao;
                    break;

                  case this.dwCode.chaoFanDaShi:
                    a = this.dwType.chaoFanDaShi, o = this.dwPreName.chaoFanDaShi, s = this.animName.dshi;
                }
                switch (t) {
                  case this.leavelCode.chuJi:
                    a += this.leavelType.chuJi;
                    break;

                  case this.leavelCode.zhongJi:
                    a += this.leavelType.zhongJi;
                    break;

                  case this.leavelCode.gaoJi:
                    a += this.leavelType.gaoJi;
                    break;

                  case this.leavelCode.teJi:
                    a += this.leavelType.teJi;
                    break;

                  case this.leavelCode.daShi:
                    a += this.leavelType.daShi;
                }
                this.dw.removeAllChildren(), RESOURCE.getPrefab(o, function(e) {
                    var t = cc.instantiate(e);
                    t.parent = this.dw, t.setScale(.9);
                    var o = cc.find("Pos/Controller/zi", t);
                    if (o) {
                        var r = o.getComponent(cc.Label);
                        r && (r.string = a);
                    }
                    n.playAnim(t.getChildByName("Pos"), s, function() {
                        i || this.setStarAnim(this.isWin, this.nowDwStar), this.setCFStarAnim(this.nowDwStar, i);
                    }.bind(this));
                }.bind(this));
            },
            setExtraCount: function(e, t, i) {
                if (i) this.extraStarNode.active = !1; else {
                    var n = e > 0;
                    if (this.extraStarNode.active = n, n) {
                        var a = pdkShowContent.pwsExtraStar.replace("{m}", t);
                        a = a.replace("{n}", e), this.extraTxt.getComponent(cc.Label).string = a;
                    }
                }
            },
            setFailContent: function() {
                var e = this.shareCurrType == this.shareCode.group ? this.faileStarType.sGroup : this.faileStarType.ad, t = pdkShowContent.pwsFaileShow.replace("{t}", e), i = this.faileContent.getComponent(cc.Label);
                i.string = t, i.lineHeight = 50;
            },
            setIsShine: function(e) {
                this.shineNode.removeAllChildren(), e || RESOURCE.getPrefab(this.showPreName.glow, function(e) {
                    var t = cc.instantiate(e);
                    t.parent = this.shineNode, t.position = cc.p(0, 0);
                }.bind(this));
            },
            setIsTitle: function(e) {
                this.titleNode.removeAllChildren(), e || RESOURCE.getPrefab(this.showPreName.title, function(e) {
                    var t = cc.instantiate(e);
                    t.parent = this.titleNode, t.position = cc.p(0, 0);
                }.bind(this));
            },
            setGoonIsShow: function(e) {
                this.goOnGame.active = e;
            },
            setShareType: function(e) {
                var t = this.shareTxt.getComponent(cc.Label);
                if (e) return t.string = this.shareType.goOn, void (this.shareStatus = this.shareStatusCode.jixu);
                this.isFreeStar ? (t.string = this.shareType.sGroup, this.shareStatus = this.shareStatusCode.songxing) : (t.string = this.shareType.justShare, 
                this.shareStatus = this.shareStatusCode.xyfx);
            },
            setShareFailTxt: function() {
                var e = this.faileShareTxt.getComponent(cc.Label);
                this.shareCurrType == this.shareCode.group ? (e.string = this.shareType.sGroupProStar, 
                this.shareStatus = this.shareStatusCode.baoxing) : this.shareCurrType == this.shareCode.ad && (e.string = this.shareType.showADProStar, 
                this.shareStatus = this.shareStatusCode.spbaoxing);
            },
            setRedPack: function(e, t) {
                if (e <= 0) this.setRedPackNode(!1); else {
                    this.setRedPackNode(!0);
                    var i = "";
                    switch (t) {
                      case this.dwCode.qingTong:
                        i = this.dwType.qingTong;
                        break;

                      case this.dwCode.baiYin:
                        i = this.dwType.baiYin;
                        break;

                      case this.dwCode.huangJin:
                        i = this.dwType.huangJin;
                        break;

                      case this.dwCode.boJin:
                        i = this.dwType.boJin;
                        break;

                      case this.dwCode.zuanShi:
                        i = this.dwType.zuanShi;
                        break;

                      case this.dwCode.xingYao:
                        i = this.dwType.xingYao;
                        break;

                      case this.dwCode.chaoFanDaShi:
                        i = this.dwType.chaoFanDaShi;
                    }
                    var n = pdkShowContent.pwsRedPack.replace("{m}", i);
                    n = n.replace("{n}", e), this.redContent.getComponent(cc.Label).string = n;
                }
            },
            closeNode: function() {
                s.setPwsNode(null), this.node.destroy();
            }
        }), cc._RF.pop();
    }, {
        "../tools/Loading": "Loading",
        Common: "Common",
        Config: "Config",
        PdkDatamanager: "PdkDatamanager",
        SendCMD: "SendCMD",
        weixin: "weixin"
    } ],
    PdkScene: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "df106oKgFpP3JG68o0jXlRj", "PdkScene");
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        function a(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        var o = e("../net/SendCMD"), s = e("PdkDatamanager"), r = e("../common/Common"), c = e("Config"), l = e("PokerListenFunc"), d = e("../tools/utils"), h = e("./Prop"), u = e("../tools/weixin"), g = e("CameraShake");
        cc.Class({
            extends: cc.Component,
            properties: {
                cardPreFab: cc.Prefab,
                dissolveRoomNode: cc.Prefab,
                cardAtlas: cc.SpriteAtlas,
                sprites: [ cc.SpriteFrame ]
            },
            onLoad: function() {
                s.setPokerSmallOverData(null), s.setPokerTotalOverData(null), s.setPokerSmallOver(null), 
                this.isHave1002 = !1, this.roomType = 0;
                var t = cc.find("gameLayer", this.node);
                t.zIndex = 1, this.topNode = cc.find("topNode", t), this.newPlayer = cc.find("newPlayer", t), 
                this.newPlayer.zIndex = 99, this.cardLayer = cc.find("cardNode", t), this.menuNode = cc.find("menuNode", t), 
                this.tishiBtn = cc.find("center/tishi", this.menuNode), this.outCardBtn = cc.find("center/chupai", this.menuNode), 
                this.yaoBuQiBtn = cc.find("center/yaobuqi", this.menuNode), this.gameTitle = cc.find("title", t), 
                this.logo = cc.find("logo", t), this.roomtype = cc.find("roomtype", t), this.roomidTxt = cc.find("roomidTxt", this.roomtype).getComponent(cc.Label), 
                this.roomtype.active = !1, this.friendJuNode = cc.find("topFriendJu", t), this.friendJuNode.active = !1, 
                this.friendJuTxt = cc.find("topFriendJu/txt", t).getComponent(cc.RichText), this.gameJuNode = cc.find("topJu", t), 
                this.gameJuNode.active = !1, this.gameJu = cc.find("topJu/txt1", t).getComponent(cc.Label), 
                this.bgWidth = cc.find("topJu/bg", t), this.gameTotalJu = cc.find("topJu/txt", t).getComponent(cc.Label), 
                this.g_win_lose = cc.find("g_win_lose", t), this.hbNode = cc.find("hb", this.gameJuNode), 
                this.g_guan = cc.find("Canvas/g_guan"), this.g_guan.setLocalZOrder(7), this.g_guan.active = !1, 
                this.qNode = this.g_guan.getChildByName("qNode"), r.stopEvent(this.qNode), this.bNode = this.g_guan.getChildByName("bNode"), 
                this.qg_share = this.qNode.getChildByName("qg_share"), this.qg_share.active = !1, 
                this.close_qnode = this.qNode.getChildByName("close_qnode"), this.close_qnode.active = !1, 
                this.g_qg = this.qNode.getChildByName("qg"), this.g_bg = this.bNode.getChildByName("bg"), 
                this.flypoke = cc.find("flypoke", t), this.msgItem = cc.find("msgItem", t), this.chatViewNew = cc.find("chatView", this.node), 
                this.chatScroll = this.chatViewNew.getChildByName("chatScroll");
                var i = this;
                this.successTip = cc.find("successTip", this.node), this.successTip.zIndex = 1e4, 
                cc.find("NewSprite/okBtn", this.successTip).on("click", function() {
                    console.log("kkkkkjkljklj"), i.successTip.active = !1, o.outRoomSuccess(6), r.switchScene("PdkScene", {
                        type: i.roomCfg.type,
                        data: i.roomCfg.ju
                    }), o.sendPaodekuaiCreatRoom_new({
                        type: i.roomCfg.type,
                        data: i.roomCfg.ju
                    });
                }, this);
                var n = {
                    81: "金币场",
                    82: "闯关场",
                    83: "好友场",
                    84: "欢乐场"
                };
                this.menuNode.getChildByName("bottom").getChildByName("chat").on("click", function() {
                    if (i.chatViewNew.active) i.chatViewNew.active = !1; else {
                        this.roomCfg && this.roomCfg.type && e("../tools/weixin").aldSendEvent(n[this.roomCfg.type + ""], {
                            "按钮": "聊天"
                        }), i.chatViewNew.active = !0, i.chatViewNew.zIndex = 1e5;
                        var t = cc.scaleBy(.2, 1.22, 1.22), a = cc.scaleBy(.1, .9, .9);
                        i.chatScroll.runAction(cc.sequence(cc.callFunc(function() {
                            i.chatScroll.scaleX = .9, i.chatScroll.scaleY = .9;
                        }), t, a));
                    }
                }, this), this.chatViewNew.getChildByName("1px").on("click", function() {
                    this.chatViewNew.active = !1;
                }, this), this.gameTitle.active = !1, this.tipNoRule = cc.find("txtimg", t), this.tipNoRule.active = !1, 
                this.tipMatch = cc.find("g_matching", t), this.tipMatch.active = !1, c.showMatchTime = !0, 
                this.canClickUserInfo = !0, c.nowFlag = 0, this.seatNode = [];
                for (var a = 0; a < 3; a++) this.seatNode[a] = cc.find("gameLayer/seatNode/player" + (a + 1), this.node);
                this.outCardNode = [];
                for (var l = 0; l < 3; l++) this.outCardNode[l] = cc.find("gameLayer/outCardNode/player" + (l + 1), this.node);
                this.timeNode = [];
                for (var d = 0; d < 3; d++) this.timeNode[d] = cc.find("gameLayer/timeNode/time" + (d + 1), this.node), 
                this.timeNode[d].active = !1;
                this.replayHoldCardNode = [];
                for (var h = 0; h < 3; h++) this.replayHoldCardNode[h] = cc.find("gameLayer/replayHoldCardNode/player" + (h + 1), this.node);
                c.cardAtlas = this.cardAtlas, this.initData(), this.initUI(), s.setBattle(this), 
                this.addMyCardNodeTouchEvent(), this.tishiBtn.on("click", this.btnTishiClick, this), 
                this.outCardBtn.on("click", this.btnChupaiClick, this), this.yaoBuQiBtn.on("click", this.btnYaoBuqiClick, this);
                for (var u = c.fastMsg, g = this.chatViewNew.getChildByName("chatScroll").getChildByName("view").getChildByName("content"), m = 0; m < u.length; m++) {
                    var f = u[m], p = cc.instantiate(this.msgItem);
                    p.position = cc.p(0, 0), p.attr({
                        index: m,
                        msgStr: f
                    }), p.on("click", function(e) {
                        var t = {
                            type: "T"
                        }, n = t.type + "##_|YY" + e.target.msgStr;
                        t.msg = n, o.sendChat_PDK(t), i.chatViewNew.active = !1;
                    }, this), p.getChildByName("lable").getComponent(cc.Label).string = f, g.addChild(p);
                }
                var v = u.length - 1;
                if (g.children[v].getChildByName("line").active = !1, c.isIphoneX) {
                    var C = cc.find("gameLayer/seatNode/player2", this.node).getComponent(cc.Widget);
                    C.right = C.right + 100, this.cardLayer.scaleX = .95;
                }
                c.shareRoomId = 0, this.registEvent(), c.justOne = !0, e("../net/ParseSocket").addListenerOnHide(function(e) {
                    i.roomCfg && i.roomCfg.type && "83" != i.roomCfg.type && (c.isFaPaiBug = !1);
                });
            },
            testData: function() {
                for (var e = 1; e <= 3; e++) this.sendCardsToDesk(e, [ "3h", "3d", "3c", "3s" ]);
            },
            matchTime: function(e) {
                var t = this, i = t.tipMatch.getChildByName("Pos").getChildByName("slot01").getChildByName("01").getComponent(cc.Label), n = t.tipMatch.getChildByName("Pos").getChildByName("slot02").getChildByName("00").getComponent(cc.Label);
                i.string = 2, n.string = 0, null != t.callTime && void 0 != t.callTime && clearInterval(t.callTime), 
                t.callTime = setInterval(function() {
                    var a = --e % 10;
                    if (null != t.tipMatch && void 0 != t.tipMatch && t.tipMatch.active) {
                        if (null == i || void 0 == i || null == n || void 0 == n) return;
                        15 === e && t.userStatus[t.myChairPos].type < 2 && o.sendData([ 1005 ]), e > 19 ? (i.string = 2, 
                        n.string = a) : e > 9 && e <= 19 ? (i.string = 1, n.string = a) : e >= 0 && e < 10 ? (i.string = 0, 
                        n.string = a) : clearInterval(t.callTime);
                    } else clearInterval(t.callTime);
                }, 1e3);
            },
            addMyCardNodeTouchEvent: function() {
                this.eventPos = {}, this.baganCards = [], this.cardData = [], this.selectCards = [], 
                this.cardLayer.on(cc.Node.EventType.TOUCH_START, this.onStartEvent, this), this.cardLayer.on(cc.Node.EventType.TOUCH_MOVE, this.onMoveEvent, this), 
                this.cardLayer.on(cc.Node.EventType.TOUCH_END, this.onEndEvent, this), this.cardLayer.on(cc.Node.EventType.TOUCH_CANCEL, this.onCancelEvent, this);
            },
            onStartEvent: function(e) {
                var t = this.cardLayer.convertTouchToNodeSpaceAR(e.touch);
                this.eventPos.began = t, this.baganCards = this.getMySelectCards();
            },
            onMoveEvent: function(e) {
                e.stopPropagation();
                var t = this.cardLayer.convertTouchToNodeSpaceAR(e.touch);
                if (this.eventPos.move = t, void 0 != this.eventPos.move && void 0 != this.eventPos.began) {
                    var i = cc.pSub(this.eventPos.move, this.eventPos.began), n = {
                        x: this.eventPos.move.x < this.eventPos.began.x ? this.eventPos.move.x : this.eventPos.began.x,
                        y: this.eventPos.move.y < this.eventPos.began.y ? this.eventPos.move.y : this.eventPos.began.y,
                        width: 0 == Math.abs(i.x) ? 1 : Math.abs(i.x),
                        height: 0 == Math.abs(i.y) ? 1 : Math.abs(i.y)
                    };
                    for (var a in this.cardNode) if (this.cardNode.hasOwnProperty(a)) {
                        var o = this.cardNode[a].getComponent("cardPoker"), s = o.getWorldRect();
                        a != Object.keys(this.cardNode).length - 1 && (s.width = 67), cc.rectIntersectsRect(s, n) ? o.getCardSelectEnabled() && o.setMaskVisible(!0) : o.getCardSelectEnabled() && (o.setMaskVisible(!1), 
                        o.setCardColor(new cc.Color(255, 255, 255)));
                    }
                }
            },
            onEndEvent: function(e) {
                e.stopPropagation();
                var t = this.cardLayer.convertTouchToNodeSpaceAR(e.touch);
                if (this.eventPos.end = t, void 0 != this.eventPos.began && void 0 != this.eventPos.end) {
                    var i = cc.pSub(this.eventPos.end, this.eventPos.began), n = {
                        x: this.eventPos.end.x < this.eventPos.began.x ? this.eventPos.end.x : this.eventPos.began.x,
                        y: this.eventPos.end.y < this.eventPos.began.y ? this.eventPos.end.y : this.eventPos.began.y,
                        width: 0 == Math.abs(i.x) ? 1 : Math.abs(i.x),
                        height: 0 == Math.abs(i.y) ? 1 : Math.abs(i.y)
                    }, a = this.baganCards.length, o = !1;
                    1 == this.lastOutCard.outType && (1 != a && 4 != a || (o = !0)), 2 == this.lastOutCard.outType && (2 != a && 4 != a || (o = !0));
                    var s = null, r = [];
                    for (var c in this.cardNode) if (this.cardNode.hasOwnProperty(c)) {
                        var d = this.cardNode[c].getComponent("cardPoker"), h = d.getWorldRect();
                        c != Object.keys(this.cardNode).length - 1 && (h.width = 67), cc.rectIntersectsRect(h, n) && (d.changeSelectStatus(), 
                        d.getCardSelectEnabled() && (r.push(d.val), d.setMaskVisible(!1), d.setCardColor(new cc.Color(255, 255, 255))));
                    }
                    if (this.eventPos = {}, 2 == this.lastOutCard.outType || 1 == this.lastOutCard.outType) for (var u = 0; u < r.length; u++) {
                        for (var g = r[u], m = 0; m < this.baganCards.length; m++) {
                            var f = this.baganCards[m];
                            if (o && f == g) {
                                s = !0;
                                break;
                            }
                            o && f != g && (s = !1);
                        }
                        if (s) break;
                    }
                    if (0 == s && (2 == this.lastOutCard.outType || 1 == this.lastOutCard.outType)) {
                        2 == this.lastOutCard.outType && this.curOutPos == this.getDisPos(this.myChairPos) && this.makeCardsDown(), 
                        1 == this.lastOutCard.outType && 1 == r.length && this.curOutPos == this.getDisPos(this.myChairPos) && (this.makeCardsDown(), 
                        this.callCardsUp(r)), this.baganCards = this.getMySelectCards();
                        for (var p = this.JudgeSelectSingleCardsByArr(r, 4), v = !1, C = 0; C < p.length; C++) {
                            var y = p[C];
                            if (y[0] && l.getSortValue(y[0]) == l.getSortValue(r[0])) {
                                v = !0;
                                break;
                            }
                        }
                        0 == v && 2 == this.lastOutCard.outType && this.curOutPos == this.getDisPos(this.myChairPos) && this.JudgeSelectSingleCardsByArr(r, this.lastOutCard.outType);
                    }
                    var S = this.getMySelectCards(), b = S.length, k = a - b;
                    if (this.lastOutCard && this.lastOutCard.outType && 0 != this.lastOutCard.outType) {
                        if (5 == this.lastOutCard.outType || 6 == this.lastOutCard.outType || 7 == this.lastOutCard.outType) {
                            if (k < 0 && b > 1 && (this.JudgeSelectCardsChain(S, this.lastOutCard.outCards.length, this.lastOutCard.outType), 
                            k < -3 && 5 == this.lastOutCard.outType && a < 5 && this.sortShunziBySelect(S)), 
                            k < 0 && 1 == b && this.curOutPos == this.getDisPos(this.myChairPos)) {
                                var w = this.JudgeSelectSingleCardsByArr(S, 4);
                                console.log(w);
                                var I = !1;
                                for (C = 0; C < w.length; C++) {
                                    var N = w[C];
                                    if (N[0] && l.getSortValue(N[0]) == l.getSortValue(S[0])) {
                                        I = !0;
                                        break;
                                    }
                                }
                                I || this.JudgeSelectChainCardsByArr(S, this.lastOutCard.outCards.length, this.lastOutCard.outType);
                            }
                        } else if (k < 0 && 1 == b && (1 == this.lastOutCard.outType || 2 == this.lastOutCard.outType || 3 == this.lastOutCard.outType || 4 == this.lastOutCard.outType || 8 == this.lastOutCard.outType || 9 == this.lastOutCard.outType) && this.curOutPos == this.getDisPos(this.myChairPos)) {
                            var T = this.JudgeSelectSingleCardsByArr(S, 4);
                            console.log(T);
                            var R = !1;
                            for (C = 0; C < T.length; C++) {
                                var P = T[C];
                                if (P[0] && l.getSortValue(P[0]) == l.getSortValue(S[0])) {
                                    R = !0;
                                    break;
                                }
                            }
                            R || 1 != this.lastOutCard.outType && 8 != this.lastOutCard.outType && 9 != this.lastOutCard.outType && this.curOutPos == this.getDisPos(this.myChairPos) && this.JudgeSelectSingleCardsByArr(S, this.lastOutCard.outType);
                        }
                    } else k < 0 && b > 1 ? (this.JudgeSelectCardsChain(S), k < -3 && a < 5 && this.sortShunziBySelect(S)) : k < 0 && 1 == b && 1 == this.seatLeftCount[this.getMyRightPos()] && this.JudgeSelectSingleCardsByArr(S, 2);
                }
            },
            onCancelEvent: function(e) {
                this.onEndEvent(e);
            },
            start: function() {
                c.GameStatus = 2, this.setSoundEnabled(null);
                var t = Number(d.getUserSetting("PdkAutoTip", 1));
                c.pdkAutoTip = 1 == t, o.send2540(), o.send2541(), e("../tools/Loading").close(), 
                RESOURCE.checkIsNeedConnect();
            },
            sortShunziBySelect: function(e) {
                for (var t = l.changeCardValue(e), i = this.findBoom(e), n = l.getSortValue(e[0]), a = l.getSortValue(e[e.length - 1], !0), o = l.getChainInCardsByType(t, 6, a, n), s = l.arrIsChain_select(e, 7), r = l.getChainInCardsByType(t, 5, a, n), c = !1, d = 0; d < o.length; d++) {
                    var h = o[d];
                    h && h.length > 4 && (c = !0);
                }
                if (r && r.length > 0 && 0 == c && 0 == i && 0 == s.isChain && r[0] && l.getSortValue(r[0][0]) == a && n == l.getSortValue(r[0][r[0].length - 1])) {
                    this.makeCardsDown();
                    for (var u = 0; u < r.length; u++) {
                        var g = r[u];
                        this.callCardsUp(g);
                    }
                }
            },
            JudgeSelectChainCardsByArr: function(e, t, i) {
                if (!this.findBoom(e)) {
                    var n = l.changeCardValue(this.cardData), a = l.getSortValue(e[0]);
                    if (5 == i) {
                        var o = l.getChainInCardsByType(n, 5, a, a + t - 1);
                        if (o && o[0] && t > o[0].length) return;
                        for (var s = 0; s < o.length; s++) {
                            var r = o[s];
                            if (l.getSortValue(r[0]) == l.getSortValue(e[0])) for (var c = 0; c < o.length; c++) {
                                var d = o[c];
                                d = this.insertSelectCardsIntoFitCards(d, e), this.callCardsUp(d);
                            }
                        }
                    } else if (6 == i) {
                        var h = l.getChainInCardsByType(n, 6, a, a + t / 2 - 1);
                        for (s = 0; s < h.length; s++) {
                            var u = h[s];
                            u = this.insertSelectCardsIntoFitCards_liandui(u, e, i), this.callCardsUp(u);
                        }
                    } else if (7 == i) {
                        var g = l.getChainInCardsByType(n, 7, a, a + t / 3 - 1);
                        for (s = 0; s < g.length; s++) {
                            var m = g[s];
                            m = this.insertSelectCardsIntoFitCards_liandui(m, e, i), this.callCardsUp(m);
                        }
                    }
                }
            },
            findBoom: function(e) {
                for (var t = l.changeCardValue(this.cardData), i = l.getSingleTypeInCardsByType(t, 4), n = !1, a = 0; a < i.length; a++) for (var o = i[a], s = 0; s < e.length; s++) {
                    var r = e[0];
                    if (o[0] && l.getSortValue(o[0]) == l.getSortValue(r)) {
                        n = !0;
                        break;
                    }
                }
                return n;
            },
            JudgeSelectCardsChain: function(e, t, i) {
                if (!this.findBoom(e)) {
                    var n = t || 5;
                    e.sort(function(e, t) {
                        return l.getSortValue(e) < l.getSortValue(t) ? 1 : -1;
                    });
                    var a = l.changeCardValue(this.cardData), o = l.arrIsChain_select(e, 6);
                    if (o.isChain) {
                        if (i && 5 == i) return;
                        for (var s in this.cardNode) {
                            var r = this.cardNode[s].getComponent("cardPoker");
                            if (o.willUpPokeNV == r.getPokeIntValue() && o.willUpPokeSV != r.getServerString()) return void r.setSelectStatus(!0);
                        }
                    } else {
                        if (i && 6 == i) return;
                        var c = l.arrIsChain_select(e, 5).isChain, d = l.getSortValue(e[0]), h = l.getSortValue(e[e.length - 1]), u = e.length, g = d - h;
                        if (c || 2 == u && g >= 4) {
                            var m = l.getChainInCardsByType(a, 5, h, h + n - 1);
                            if (2 == u) {
                                n = g + 1;
                                var f = (m = l.getChainInCardsByType(a, 5, h, d))[0];
                                if (null == f || f[0] && l.getSortValue(f[0]) != h || l.getSortValue(f[f.length - 1]) != d) return;
                            }
                            if (u < 5 && 0 != m.length) {
                                if (m && m[0] && n > m[0].length) return;
                                for (var p = 0; p < m.length; p++) {
                                    var v = m[p];
                                    v = this.insertSelectCardsIntoFitCards(v, e), l.getChainInCardsByType(l.changeCardValue(v), 5)[0].length == v.length && this.callCardsUp(v);
                                }
                            }
                        }
                    }
                }
            },
            cardPokeBoom: function() {
                for (var e = [], t = l.getPokeValue(), i = 0; i < this.cardData.length; i++) for (var n = parseInt(t[this.cardData[i].substr(0, 1)]), a = 0, o = 0; o < this.cardData.length; o++) if (n == parseInt(t[this.cardData[o].substr(0, 1)]) && 4 == ++a && -1 == e.indexOf(n)) {
                    e.push(n);
                    break;
                }
                return e;
            },
            JudgeSelectSingleCardsByArr: function(e, t) {
                e.sort(function(e, t) {
                    return l.getSortValue(e) < l.getSortValue(t) ? 1 : -1;
                });
                for (var i = l.changeCardValue(this.cardData), n = this.addCardsByType(i, t), a = 0; a < n.length; a++) {
                    var o = n[a][0];
                    if (l.getSortValue(o) == l.getSortValue(e[0])) for (var s = 0; s < n.length; s++) {
                        var r = n[s];
                        r = this.insertSelectCardsIntoFitCards_liandui(r, e, t), this.callCardsUp(r);
                    }
                }
                return n;
            },
            insertSelectCardsIntoFitCards_liandui: function(e, t, i) {
                for (var n, o = i || 2, s = (a(n = {}, 2, 1), a(n, 3, 2), a(n, 4, 3), a(n, 6, 1), 
                a(n, 7, 2), n), r = t.concat(), c = (t.length, e.length, l.changeCardValue(t)), d = l.changeCardValue(e), h = 0; h < c.length; h++) {
                    var u = c[h];
                    if (u && 1 == u.count && d[h] && e) for (var g = d[h].cards, m = 0, f = g.length - 1; f >= 0; f--) if (g[f] != u.cards[0]) {
                        if ((m += 1) > s[o]) break;
                        r.push(g[f]);
                    }
                }
                if (6 == i || 7 == i) for (f = e.length - 1; f >= 0; f--) l.getSortValue(t[0]) != l.getSortValue(e[f]) && r.push(e[f]);
                return r;
            },
            addCardsByType: function(e, t) {
                var i = [];
                if (2 == t) {
                    var n = l.getSingleTypeInCardsByType(e, 2), a = l.getSingleTypeInCardsByType(e, 3);
                    if (n && n.length > 0) for (var o = 0; o < n.length; o++) i.push(n[o]);
                    if (a && a.length > 0) for (o = 0; o < a.length; o++) i.push(a[o]);
                } else if (3 == t) {
                    var s = l.getSingleTypeInCardsByType(e, 3);
                    if (s && s.length > 0) for (o = 0; o < s.length; o++) i.push(s[o]);
                }
                var r = l.getSingleTypeInCardsByType(e, 4);
                if (r.length > 0) for (o = 0; o < r.length; o++) i.push(r[o]);
                return i;
            },
            makeCardsDown: function() {
                for (var e in this.cardNode) {
                    if (this.cardNode.hasOwnProperty(e)) this.cardNode[e].getComponent("cardPoker").setSelectStatus(!1);
                }
            },
            insertSelectCardsIntoFitCards: function(e, t) {
                for (var i = t.concat(), n = (t.length, e.length, l.changeCardValue(e)), a = 0; a < n.length; a++) {
                    var o = n[a], s = l.changeCardValue(i);
                    null != s[a] && void 0 != s[a] || !o || i.push(o.cards[0]);
                }
                return i;
            },
            callCardsUp: function(e) {
                for (var t = 0; t < e.length; t++) {
                    var i = e[t];
                    for (var n in this.cardNode) if (this.cardNode.hasOwnProperty(n)) {
                        var a = this.cardNode[n].getComponent("cardPoker");
                        i == a.getServerString() && a.setSelectStatus(!0);
                    }
                }
            },
            setMusicEnabled: function(e) {
                var t = e;
                void 0 != e && null != e || (t = Number(d.getUserSetting("music_enabled", 1))), 
                AMGR.setMusicEnable(1 == t), 1 == t ? AMGR.playMusic("resources/audio/music/bgm.mp3") : AMGR.stopMusic();
            },
            setSoundEnabled: function(e) {
                var t = e;
                void 0 != e && null != e || (t = Number(d.getUserSetting("sound_enabled", 1))), 
                AMGR.setSoundEnable(1 == t);
            },
            onRecvMsg: function(t, i) {
                var n = this;
                if (2531 == t) {
                    console.log("显示小结算xxxxxxx904");
                    var a = JSON.parse(i.roomInfo);
                    if (console.log("roomType ====" + c.roomType), a.type != c.roomType) return void (null != s.getPokerSmallOver() && void 0 != s.getPokerSmallOver() && s.getPokerSmallOver().isValid && (s.getPokerSmallOver().removeFromParent(), 
                    s.setPokerSmallOver(null), s.setPokerSmallOverData(null)));
                    var d = this;
                    this.removeOperation();
                    for (var u = 0; u < 3; u++) this.timeNode[u].active = !1;
                    console.log("isHave1002919" + this.isHave1002), 0 == this.isHave1002 ? (d.deskCleanUp(), 
                    r.print("datasmallll==", i), d.smallOver(i)) : this.scheduleOnce(function() {
                        r.print("小结算显示", i), d.deskCleanUp(), d.smallOver(i);
                    }, 1.5), this.isHave1002 = !1;
                }
                if (1002 == t) {
                    if (c.isSuccesInRoom = !0, this.isHave1002 = !0, this.roomData.masterMid = i.masterMid, 
                    this.roomData.roomStatic = i.roomStatic, this.roomData.gotoCount = i.gotoCount, 
                    this.roomData.total = i.total, this.maxPlayer = i.playerMax, this.gotoCount = i.gotoCount, 
                    this.bankChairId = i.bankerChairId, this.setCurRunCount(i.gotoCount), this.roomCfg = JSON.parse(i.roomCfg), 
                    this.roomId = this.roomCfg.room, this.roomType = this.roomCfg.type, r.print("1002this.roomCfg-----\x3e>>>>>", this.roomCfg), 
                    this.initPokeCount = parseInt(this.roomCfg.playe_type) || 16, "83" == this.roomType ? 0 == this.gotoCount && this.menuNode.getComponent("menuNode").btnReadyClick() : null != s.getPokerSmallOverData() && void 0 != s.getPokerSmallOverData() || this.menuNode.getComponent("menuNode").btnReadyClick(), 
                    2 == this.roomData.roomStatic) {
                        var g = s.getSmallOver();
                        g && g.closeWin();
                    }
                    for (var m in 3 == i.playerUserdata.length || "83" == this.roomCfg.type ? (console.error("length ===" + i.playerUserdata.length), 
                    this.tipMatch.active = !1, clearInterval(this.callTime)) : c.showMatchTime && (console.error("显示匹配。。。"), 
                    this.tipMatch.active = !0, n.matchTime(20)), r.setAAValue(this.roomCfg.aa_kaifang), 
                    c.aapay = Number(this.roomCfg.aa_cost || 0), 0 == i.gotoCount && 1 == Number(this.roomCfg.aa_kaifang) && r.tipAAreduce(Number(this.roomCfg.aa_kaifang)), 
                    this.createRoomDis(this.roomCfg), this.showRoomId(), i.playerUserdata) if (i.playerUserdata.hasOwnProperty(m)) {
                        var f = i.playerUserdata[m];
                        f.mid == c.USER.mid && (this.myChairPos = f.chairId), c.playerMids[f.chairId - 1] = f.mid;
                    }
                    for (var p = 1; p <= 3; p++) {
                        for (var v = !1, C = 0; C < i.playerCount; C++) {
                            var y = i.playerUserdata[C];
                            if (p == y.chairId) {
                                v = !0, this.setUserData(y.chairId, y);
                                break;
                            }
                        }
                        0 == v && this.setUserData(p, null);
                    }
                    this.roomData.masterMid == c.USER.mid && (this.master = !0), 2 == this.maxPlayer && (this.userIconNode[3].seat.active = !1), 
                    this.menuNode.getComponent("menuNode").setChatAndSetBtnPos(), "83" == this.roomCfg.type && (this.friendJuNode.active = !0, 
                    this.logo.active = !1, this.roomtype.active = !0, this.roomidTxt.string = "房间号:" + this.roomId, 
                    15 == this.roomCfg.playe_type && cc.loader.loadRes("pdkgame/friendYueJu/FriendYueju", cc.SpriteAtlas, function(e, t) {
                        n.roomtype.getComponent(cc.Sprite).spriteFrame = t.getSpriteFrame("bg_15");
                    })), e("../net/SendCMD").sendPositionMj(c.location), this.initJuRedpack(), this.data1022 = "";
                } else if (1003 == t) {
                    for (var S in i.userTypeScore) if (i.userTypeScore.hasOwnProperty(S)) {
                        var b = i.userTypeScore[S], k = parseInt(b.chairId);
                        this.setUserStatus(k, b);
                    }
                } else if (1004 == t) {
                    var w = parseInt(i.playerUserdata.chairId);
                    this.setUserData(w, i.playerUserdata);
                    var I = {
                        chairId: w,
                        score: i.score
                    };
                    c.playerMids[i.playerUserdata.chairId - 1] = i.playerUserdata.mid, this.setUserStatus(w, I);
                } else if (1005 == t) {
                    this.gameIsFinsh = !1;
                    var N = i.chairId;
                    -1101 == i.chairId ? c.bankruptcyNum > 0 && 1 == c.nowPlayRank ? RESOURCE.getPrefab("comBankruptcy", function(e) {
                        n.bankruptcy = cc.instantiate(e), n.bankruptcy.getComponent("Bankruptcy").initData(function(e) {
                            1 == e ? (n.setUserStatus(1, {
                                score: c.USER.gold
                            }), n.successTip.active = !0) : (o.outRoomSuccess(7), r.switchScene("HallScene"));
                        }), n.bankruptcy.zIndex = 1e5, r.maskFadeIn(n.bankruptcy.getChildByName("bgmask"), n.bankruptcy.getChildByName("dialogBg")), 
                        n.node.addChild(n.bankruptcy);
                    }) : e("../tools/Dialog").create({
                        content: "您的金币低于本场次的最低限制，请前往商城兑换",
                        btnstring: [ 1, "确定" ],
                        callback: function(e) {
                            0 == e && (o.outRoomSuccess(7), r.switchScene("HallScene"));
                        }
                    }) : this.setUserStatus(N, {
                        type: 2
                    });
                } else if (1092 == t) {
                    if (-1101 == i.err) if (c.bankruptcyNum > 0 && 1 == c.nowPlayRank) {
                        if (!c.bankruptcyNode) return;
                        c.bankruptcyNode = !1, RESOURCE.getPrefab("comBankruptcy", function(e) {
                            n.bankruptcy = cc.instantiate(e), n.bankruptcy.getComponent("Bankruptcy").initData(function(e) {
                                1 == e ? (n.setUserStatus(1, {
                                    score: c.USER.gold
                                }), n.successTip.active = !0) : (o.outRoomSuccess(7), r.switchScene("HallScene"));
                            }), n.bankruptcy.zIndex = 1e5, r.maskFadeIn(n.bankruptcy.getChildByName("bgmask"), n.bankruptcy.getChildByName("dialogBg")), 
                            n.node.addChild(n.bankruptcy);
                        });
                    } else e("../tools/Dialog").create({
                        content: "您的金币低于本场次的最低限制，请前往商城兑换",
                        btnstring: [ 1, "确定" ],
                        callback: function(e) {
                            0 != e && 2 != e || (o.outRoomSuccess(7), r.switchScene("HallScene"));
                        }
                    });
                } else if (1006 == t) {
                    this.setUserStatus(i.chairId, {
                        type: 5,
                        leaveTime: -1
                    });
                } else if (1007 == t) this.isHave1002 = !0, this.setCurRunCount(i.gotoCount), this.tipMatch.active = !1, 
                clearInterval(this.callTime); else if (1008 == t) this.showRemoveRoomHint(i); else if (2999 == t) {
                    var T = i.chairId;
                    this.setUserStatus(T, {
                        type: 8,
                        leaveTime: 1
                    });
                } else if (1009 == t) i.mid != c.USER.mid && (this.getDisPos(i.chairId) && this.userIconNode[this.getDisPos(i.chairId)] && this.userIconNode[this.getDisPos(i.chairId)].showSeat(!1), 
                this.setUserData(i.chairId, null), this.userStatus[i.chairId] && (this.userStatus[i.chairId] = null), 
                this.updataUserIconStaus()); else if (1012 == t) i.err < 0 && (console.error("解散失败 err ===", i.err), 
                void 0 == this.dissolveNode || null == this.dissolveNode || this.dissolveNode.removeFromParent()); else if (1013 == t) this.isTotalOver() ? null != this.dissolveNode && void 0 != this.dissolveNode && this.dissolveNode.removeFromParent() : null != s.getPokerSmallOverData() && void 0 != s.getPokerSmallOverData() || r.switchScene("HallScene"); else if (1021 == t) {
                    var R = function() {
                        for (var e = 1; e <= n.maxPlayer; e++) if (n.seatLeftCount[e] != n.initPokeCount) return !1;
                        return !0;
                    };
                    if (this.tipInfo = null, this.curOutPos = this.getDisPos(i.chairId), this.myChairPos == i.chairId && this.seatLeftCount[this.myChairPos] != this.cardData.length) return void e("../net/NetManager").connectToServer();
                    if (-1 == n.posFrist1021 && (n.posFrist1021 = this.curOutPos, this.isAction3s = R() && 1 == this.gotoCount || R() && 0 == parseInt(n.roomCfg.shouju_guize || 0), 
                    this.isAction3s && RESOURCE.getPrefab("pdkCard", function(e) {
                        var t = cc.instantiate(e);
                        t.getComponent("cardPoker").initCard({
                            val: "3s"
                        }, null, !0), t.parent = n.flypoke, t.position = cc.p(0, 138), t.scale = .6;
                        var i = 1 != n.curOutPos ? 90 : 0, a = n.flypoke.getChildByName("fp" + n.curOutPos);
                        t.runAction(cc.sequence(cc.fadeTo(.4, 255), cc.delayTime(.6), cc.rotateTo(.4, i), cc.spawn(cc.moveTo(.4, a), cc.fadeTo(.4, 0)), cc.callFunc(function() {
                            n.userIconNode[n.posFrist1021] && n.userIconNode[n.posFrist1021].flyIFrist(.4);
                        }), cc.delayTime(.4), cc.callFunc(function() {
                            null != t && void 0 != t && (t.destroy(), n.posFrist1021 = -1);
                        })));
                    })), 1 == this.curOutPos && 0 == this.isTuoguan) for (var P in this.cardNode) {
                        if (this.cardNode.hasOwnProperty(P)) this.cardNode[P].getComponent("cardPoker").setCardSelectEnabled(!0);
                    }
                    null != this.sendOutNode[this.curOutPos] && void 0 != this.sendOutNode[this.curOutPos] && this.sendOutNode[this.curOutPos].removeAllChildren(), 
                    n.isWinFirst ? this.timeOutArr.push(setTimeout(function() {
                        1 != n.curOutPos && n.setCurWorkTimer(n.workTime);
                    }, n.isAction3s ? n.delFristShowTime : 0)) : this.timeOutArr.push(setTimeout(function() {
                        1 != n.curOutPos && n.setCurWorkTimer(n.isAction3s ? 12 : n.workTime);
                    }, n.isAction3s ? n.delFristShowTime : 0));
                } else if (1022 == t) {
                    var D = function() {
                        if (n.curOutPos = n.getDisPos(i.chairId), 1 == n.curOutPos ? (n.data1022 = i, 104 == i.action[0].act_id ? n.setCurWorkTimer(3, !0) : n.isAction3s ? n.setCurWorkTimer(12) : n.setCurWorkTimer(14)) : n.data1022 = {}, 
                        1 == n.curOutPos && 1 != n.isTuoguan) {
                            1 == n.lastOutCard.outLocalPos && (n.lastOutCard = {});
                            var e = l.getFitCardsByType(n.lastOutCard, n.cardData), t = n.getMyRightPos();
                            if (1 == n.seatLeftCount[t]) if (n.lastOutCard.outType) {
                                if (1 == l.getPokerType(n.lastOutCard.outCards, !0).typeCode) {
                                    var a = l.getMaxSingleCardValue(e);
                                    for (var o in e) if (e.hasOwnProperty(o)) {
                                        var s = e[o];
                                        a != l.getSortValue(s) && (e[o] = void 0);
                                    }
                                }
                            } else e = l.rightSingleCheckEnableCards(e);
                            var d = !1;
                            for (var h in i.action) {
                                if (i.action.hasOwnProperty(h)) if (104 == i.action[h].act_id) {
                                    d = !0;
                                    break;
                                }
                            }
                            for (var u in 0 == n.isFlixCard && (n.setCardsFlix(!0), n.isFlixCard = !0), n.cardNode) if (n.cardNode.hasOwnProperty(u)) {
                                var g = n.cardNode[u].getComponent("cardPoker"), m = g.getServerString(), f = !1;
                                for (var p in e) {
                                    if (e[p] == m) {
                                        f = !0;
                                        break;
                                    }
                                }
                                0 == f && (0 == d && g.setCardSelectEnabled(!1), g.setSelectStatus(!1));
                            }
                            n.createOperation(i), function() {
                                var e = n.getMySelectCards(), t = l.getPokerType(e);
                                if (-1 == t.typeCode) return !1;
                                var i = l.getPokerType(n.lastOutCard.outCards), a = 1 == n.seatLeftCount[n.getMyRightPos()];
                                if (t.typeCode >= 2 && a) return !0;
                                if (!n.lastOutCard.outCards) return !1;
                                if (4 == t.typeCode && a && 4 != i.typeCode) return !0;
                                if (t.typeCode == i.typeCode && t.typeLength == i.typeLength) {
                                    var o = 0, s = 0, r = [], c = [], d = l.getPokeValue();
                                    if (3 == t.typeCode || t.typeCod > 7) {
                                        var h = 0, u = parseInt(d[e[0].substr(0, 1)]);
                                        for (var g in e) {
                                            var m = parseInt(d[e[g].substr(0, 1)]);
                                            u == m ? ++h >= 2 && (h = 0, r.push(e[g])) : (h = 0, u = m);
                                        }
                                        for (var f in h = 0, u = parseInt(d[n.lastOutCard.outCards[0].substr(0, 1)]), n.lastOutCard.outCards) {
                                            var p = parseInt(d[n.lastOutCard.outCards[f].substr(0, 1)]);
                                            u == p ? ++h >= 2 && (h = 0, c.push(n.lastOutCard.outCards[f])) : (h = 0, u = p);
                                        }
                                    } else r = e, c = n.lastOutCard.outCards;
                                    for (var v in r) {
                                        var C = parseInt(d[r[v].substr(0, 1)]);
                                        C > o && (o = C);
                                    }
                                    for (var y in c) {
                                        var S = parseInt(d[c[y].substr(0, 1)]);
                                        S > s && (s = S);
                                    }
                                    return o > s;
                                }
                                return !1;
                            }() || (c.pdkAutoTip && n.cardData.length != r.countValidArryLength(e) ? n.showOneFitCards() : c.pdkAutoTip && n.lastOutCard && 0 != r.countValidArryLength(n.lastOutCard) && n.showOneFitCards());
                        }
                    };
                    n.isWinFirst ? n.timeOutArr.push(setTimeout(function() {
                        D();
                    }, n.isAction3s ? n.delFristShowTime : 2e3)) : n.timeOutArr.push(setTimeout(function() {
                        D();
                    }, n.isAction3s ? n.delFristShowTime : 0));
                } else if (2023 == t) {
                    if (this.menuNode.getComponent("menuNode").btnExit.active = !1, -1 == i.chairId) {
                        this.getDisPos(i.chairId);
                        for (var B in this.initPiao(i.tPiao, i.time), this.userIconNode) if (this.userIconNode.hasOwnProperty(B)) {
                            var x = this.userIconNode[B];
                            x.setPiao(-1, B), x.setReady(!1);
                        }
                    } else {
                        var A = this.getDisPos(i.chairId);
                        this.userIconNode[A].setPiao(i.count), i.chairId == this.myChairPos && this.hidePiao();
                    }
                } else if (2024 == t) {
                    for (var _ in i.tPiaoScore) if (i.tPiaoScore.hasOwnProperty(_)) {
                        var F = i.tPiaoScore[_], L = this.getDisPos(_);
                        void 0 != this.userIconNode[L] && null != this.userIconNode[L] && this.userIconNode[L].setPiao(F, L);
                    }
                } else if (2025 == t) {
                    if (this.roomCfg && "82" == this.roomCfg.type) return;
                    if (this.roomCfg && this.roomCfg.type == this.pwsRoomType) return;
                    for (var O = 0; O < i.tScore.length; O++) for (var E = this.getDisPos(O + 1), M = Object.keys(this.userStatus), U = 0; U < M.length; U++) {
                        var G = this.getDisPos(this.userStatus[Number(M[U])].chairId);
                        if (E == G) {
                            var V = this.userIconNode[G], J = i.tScore[O + 1];
                            if (V) {
                                if ("83" == this.roomCfg.type) {
                                    var q = this.userStatus[Number(M[U])].score || 0;
                                    this.userStatus[Number(M[U])] && (this.userStatus[Number(M[U])].score = q + J, V.setScore(this.userStatus[Number(M[U])].score));
                                }
                                1 != i.isTaifei && V.setScoreView(J);
                            }
                        }
                    }
                } else if (1596 == t) {
                    if (this.roomCfg && "82" == this.roomCfg.type) return;
                    for (O = 0; O < i.playerfen.length; O++) {
                        var j = i.playerfen[O];
                        E = this.getDisPos(j.chairId), V = this.userIconNode[E];
                        this.userStatus[j.chairId].score = j.score, V.setScore(j.score);
                    }
                } else if (2027 == t) {
                    E = this.getDisPos(i.seatid), V = this.userIconNode[E];
                    var z = this.menuNode.getComponent("menuNode");
                    if (1 == E) if (1 == i.tuoguan) {
                        for (var H = 0; H < 3; H++) this.timeNode[H] && (this.timeNode[H].active = !1);
                        this.removeOperation(), z.btnjCancelTG.active = !0, this.cardChangeToUnclick(!0), 
                        V && V.setTuoguan(!0);
                    } else z.btnjCancelTG.active = !1, V && V.setTuoguan(!1), this.cardChangeToUnclick(!1), 
                    1 == this.curOutPos && this.data1022 && void 0 != this.data1022.count && (this.setCurWorkTimer(this.workTime), 
                    this.onRecvMsg(1022, this.data1022)); else V && (console.error("----localSeat", E), 
                    console.error("----seatid", i.seatid), console.error("----mid", i.mid), console.error("----tuoguan", i.tuoguan), 
                    console.error("========================="), 1 == i.tuoguan ? V.setTuoguan(!0) : V.setTuoguan(!1));
                } else if (2520 == t) {
                    n.removeOperation();
                    for (var W = 1; W < 4; ++W) {
                        var Y = n.userStatus[W];
                        if (Y) {
                            var K = {
                                type: 4
                            };
                            Y.type > 4 && (K = {
                                type: Y.type
                            }), n.setUserStatus(W, K);
                            var Z = n.getDisPos(W);
                            null != n.userIconNode[Z] && (n.userIconNode[Z].setUserLeftCount(i.cardCount, n.isShowRetainCardNum), 
                            n.seatLeftCount[Z] = i.cardCount), 1 == Z && (n.winGoOnPoke = i.cardData);
                        }
                    }
                    c.isFaPaiBug ? c.headCardType = 0 : c.headCardType = 1, n.initHandCard(i.cardData), 
                    n.hidePiao(), n.isFlixCard = !1;
                } else if (2523 == t) {
                    var X = this.getDisPos(i.sendChairId);
                    this.userIconNode[X] && this.userIconNode[X].setUserLeftCount(i.handCount, this.isShowRetainCardNum), 
                    1 == i.handCount && 1 != this.seatLeftCount[i.sendChairId] && this.playeLastSingleEffect(i.sendChairId), 
                    this.seatLeftCount[i.sendChairId] = i.handCount;
                    var Q = {}, $ = this;
                    Q.sendCardsTodesk = function() {
                        0 == i.handCount && parseInt($.userData[i.sendChairId].sex);
                        i.sendChairId == $.myChairPos && 0 != i.handCount && 0 != i.cardCount && 0 == $.isTuoguan || $.sendCardsToDesk(i.sendChairId, i.cards);
                    }, 1 == X && this.cardData.length == i.cards.length ? this.timeOutArr.push(setTimeout(function() {
                        null != Q && void 0 != Q && Q.sendCardsTodesk();
                    }, 500)) : Q.sendCardsTodesk();
                } else if (2532 == t) {
                    this.removeOperation(), o.send2026(0), this.isFlixCard = !1, this.myChairPos = i.mySeat, 
                    this.maxPlayer = i.playerCount;
                    for (O = 0; O < Object.keys(i.playerInfo).length; O++) {
                        var ee = i.playerInfo[O];
                        this.sendCardsToDesk(ee.seat, ee.outCards, !1), this.seatLeftCount[ee.seat] = ee.handCount;
                        var te = this.getDisPos(ee.seat);
                        this.userIconNode[te].setUserLeftCount(ee.handCount, this.isShowRetainCardNum);
                    }
                    for (var ie in this.curOutPos = this.getDisPos(i.curOutSeat), c.headCardType = 1, 
                    this.initHandCard(i.cards), i.playerInfo) if (i.playerInfo.hasOwnProperty(ie)) {
                        var ne = i.playerInfo[ie];
                        if (parseInt(ne.seat) == parseInt(i.lastOutSeat)) {
                            var ae = l.getPokerType(ne.outCards, !0);
                            this.setDeskLastOutData(ne.seat, ne.outCards, ae.typeCode);
                        }
                    }
                    this.setCurWorkTimer(this.workTime), this.sendOutNode[this.curOutPos].removeAllChildren();
                } else if (8001 == t) this.userData[i.chairId] && this.userData[i.chairId].commString && (this.userData[i.chairId].commString[0] = i.gpsPos); else if (1014 == t) ; else if (1594 == t) ; else if (2003 == t) {
                    var oe = null, se = null;
                    for (var re in this.userData) {
                        if (this.userData.hasOwnProperty(re) && null != this.userData[re]) {
                            var ce = Number(this.userData[re].mid), le = this.getDisPos(this.userData[re].chairId);
                            ce == Number(i.sendMid) && (oe = this.iconPos[le - 1]), ce == Number(i.receiveMid) && (se = this.iconPos[le - 1]);
                        }
                    }
                    h.init(this, Number(i.sendMsg), oe, se);
                } else if (2004 == t) {
                    var de = this.getDisPos(i.seatid);
                    if (de > 0 && null != this.userIconNode[de]) {
                        var he = i.str.split("##_|YY"), ue = {}, ge = this.userIconNode[de];
                        if (ue.msg = he[1], "T" == he[0] || "Q" == he[0]) {
                            for (U = 0; U < c.fastMsg.length; U++) if (ue.msg == c.fastMsg[U]) {
                                var me = ge.seatData.sex;
                                1 != me && 2 != me && (me = 2), AMGR.playSound("resources/pdkgame/sound/msg" + me + "/fix_msg_" + (U + 1) + ".mp3");
                            }
                            ge.setChatMsg(ue.msg);
                        }
                    }
                }
            },
            smallOver: function(e) {
                var t = s.getPokerSmallOver(), i = s.getPokerSmallOverData();
                if (r.print("smallOverNodeee ==", t), r.print("smallOverData ====", i), null != t && void 0 != i && t.removeFromParent(), 
                null != s.getPokerSmallOverData()) {
                    var n = !1;
                    this.bankChairId = e.nextBankerSeat;
                    var a = this;
                    a.gameIsFinsh = !0, e.playerInfo = e.playerInfo || [], a.maxPlayer = e.playerInfo.length;
                    for (var o = 0; o < a.maxPlayer; ++o) {
                        var l = e.playerInfo[o], d = s.getBattle();
                        null != d && void 0 != d && a.sendCardsToDesk(l.seat, l.cards, !1, !0);
                        var h = {
                            score: l.totleScore
                        };
                        if (a.setUserStatus(l.seat, h), this.roomCfg && "82" != this.roomCfg.type && this.roomCfg.type != this.pwsRoomType) {
                            var g = a.getDisPos(l.seat);
                            a.userIconNode[g].setScoreView(l.roundScore, !0, 1 == g);
                        }
                        0 == l.handCout && (n = !0);
                    }
                    n || (this.isHandsUpOver = !0);
                    var m = this.menuNode.getComponent("menuNode");
                    m && (m.btnJiesan.active = !1, m.btnjCancelTG.active = !1), e.myMid = c.USER.mid;
                    var f = function() {
                        var t = "81" == a.roomCfg.type || "84" == a.roomCfg.type;
                        for (var i in e.playerInfo || []) {
                            var n = e.playerInfo[i];
                            if (t) {
                                if (Number(n.mid) == Number(c.USER.mid) && n.roundScore >= 0) return !0;
                            } else if (Number(n.mid) == Number(c.USER.mid) && 0 == n.handCout) return !0;
                        }
                        return !1;
                    }();
                    AMGR.playSound("resources/audio/music/" + (f ? "winbg.mp3" : "losebg.mp3"), !1);
                    var p = function() {
                        if (f) {
                            var t = 0;
                            for (var i in e.playerInfo || []) {
                                var n = e.playerInfo[i];
                                Number(n.mid) != Number(c.USER.mid) && n.handCout == a.initPokeCount && t++;
                            }
                            return t == e.playerInfo.length - 1 ? 0 : -1;
                        }
                        for (var o in e.playerInfo || []) {
                            var s = e.playerInfo[o];
                            if (Number(s.mid) == Number(c.USER.mid) && s.handCout == a.initPokeCount) return 1;
                        }
                        return -1;
                    }(), v = p > -1 && !c.isSpecial;
                    if (this.g_guan.active = v, v) {
                        this.isShowCs = !0;
                        if (this.qNode.active = !1, this.bNode.active = !1, 0 == p) {
                            var C = function() {
                                "PdkScene" == c.curSceneName && (a.qg_share.stopAllActions(), a.close_qnode.active = !1, 
                                a.qg_share.active = !1, a.g_guan.active = !1, y = 10, w());
                            };
                            this.qNode.active = !0, this.g_qg.scale = 0;
                            var y = 0, S = cc.repeatForever(cc.sequence(cc.callFunc(function() {
                                if (y++, console.log(y), 10 == y) {
                                    if ("PdkScene" != c.curSceneName) return;
                                    a.qg_share.stopAllActions(), a.g_qg.stopAllActions(), a.close_qnode.active = !1, 
                                    a.qg_share.active = !1, a.g_guan.active = !1, w();
                                }
                            }), cc.delayTime(1)));
                            a.g_qg.runAction(S), this.qg_share.on("touchend", function() {
                                a.qg_share.off("touchend", null), c.shareSwitch ? (u.onMenuShareAppMessage({
                                    imageNum: 3
                                }), C()) : u.onMenuShareAppMessage({
                                    imageNum: 3,
                                    cbSucc: function() {
                                        C();
                                    },
                                    cbFail: function() {
                                        C();
                                    }
                                });
                            }), this.close_qnode.on("touchend", function() {
                                a.close_qnode.off("touchend", null), C();
                            }), this.g_qg.runAction(cc.sequence(cc.scaleTo(.4, 1).easing(cc.easeBackOut()), cc.delayTime(.4), cc.callFunc(function() {
                                a.qg_share.active = !0, a.close_qnode.active = !0;
                                a.qg_share.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, .8), cc.scaleTo(.5, 1))));
                            })));
                        } else if (1 == p) {
                            this.bNode.active = !0, this.g_bg.y = 0;
                            var b = 0, k = cc.repeatForever(cc.sequence(cc.callFunc(function() {
                                b++, console.log(b), 10 == b && (a.g_guan.active = !1, a.bNode.stopAllActions(), 
                                a.g_bg.stopAllActions(), w());
                            }), cc.delayTime(1)));
                            a.g_bg.runAction(k), this.bNode.on("touchend", function() {
                                a.bNode.off("touchend", null), a.g_guan.active = !1, a.bNode.stopAllActions(), a.g_bg.stopAllActions(), 
                                b = 10, w();
                            }), this.g_bg.runAction(cc.sequence(cc.moveTo(.4, cc.p(0, -15)), cc.delayTime(.4)));
                        }
                    } else (function() {
                        var e = f ? "g_win_cg" : "g_lose_cg";
                        cc.loader.loadRes("pdkgame/Effects/" + e, function(t, i) {
                            if (!t && i && e) {
                                var n = cc.instantiate(i);
                                n.parent = a.g_win_lose, n.position = cc.p(0, 0);
                                var o = n.getComponent(cc.Animation);
                                null != o && void 0 != o && (o.playAdditive(e), o.on("finished", function() {
                                    a.g_win_lose.removeAllChildren(), "82" == a.roomCfg.type && a.winGoOnPoke && a.winGoOnPoke.length > 0 ? JavaRequest.getGuanInfo(null, function(e) {
                                        var t = e.data[0];
                                        !s.getUserIsNew() || 6 != t.guan && 7 != t.guan ? c.isSpecial || 1 != t.success || 3 != t.guan && 5 != t.guan && 7 != t.guan ? w() : (a.winGoon && a.winGoon.isValid && (a.winGoon.destroy(), 
                                        a.winGoon = null), RESOURCE.getPrefab("pdkWinGoOn", function(e) {
                                            a.winGoon = cc.instantiate(e), a.winGoon.setScale(0), a.winGoon.parent = a.node, 
                                            r.stopEvent(a.winGoon), a.winGoon.position = cc.p(0, 0), a.winGoon.setLocalZOrder(1000001), 
                                            a.winGoon.runAction(cc.scaleTo(.2, 1));
                                            var i = {};
                                            i.guan = t.guan, i.winGoOnPoke = a.winGoOnPoke, i.icon = c.USER.icon, i.uName = c.USER.name, 
                                            i.goOnFn = function() {
                                                a.winGoon.runAction(cc.sequence(cc.scaleTo(.2, 0), cc.callFunc(function() {
                                                    a.winGoon && a.winGoon.isValid && (a.winGoon.destroy(), a.winGoon = null), w();
                                                })));
                                            }, a.winGoon.getComponent("WinGoOn").setData(i);
                                        })) : w();
                                    }) : w();
                                }));
                            }
                        });
                    })();
                } else console.log("没有小结算界面数据 return2");
                function w() {
                    null != a.userInfo && void 0 != a.userInfo && a.userInfo.removeFromParent();
                    (function t() {
                        "PdkScene" == c.curSceneName || "83" == a.roomCfg.type || a.roomCfg.type == a.pwsRoomType ? "PdkScene" != c.curSceneName || a.roomCfg.type != a.pwsRoomType ? RESOURCE.getPrefab("pdkSmallOver", function(i) {
                            if (console.log("curSceneName = " + c.curSceneName), null != s.getPokerSmallOverData()) {
                                var n = cc.instantiate(i);
                                cc.director.getScene().getChildByName("Canvas").addChild(n, 6), c.IsOpenReplay || m && m.btnJiesan && m.btnJiesan.isValid && (m.btnJiesan.active = !0), 
                                n && n.getComponent("PdkSmallOver_new") ? n.getComponent("PdkSmallOver_new").setData(e, function() {
                                    a && a.deskCleanUp(), a && a.tipMatch && a.tipMatch.isValid && a.roomCfg.type;
                                }) : t();
                            }
                        }) : RESOURCE.getPrefab("pdkPwsRes", function(e) {
                            var t = cc.instantiate(e);
                            cc.director.getScene().getChildByName("Canvas").addChild(t, 6);
                        }) : s.setPokerSmallOverData(null);
                    })();
                }
            },
            initUI: function() {
                this.setCurrentTime();
                var e = this;
                this.OSTimeInterVal = setInterval(function() {
                    e.setCurrentTime();
                }, 6e4);
                for (var t = 1; t <= 3; ++t) {
                    this.userIconNode[t] = this.initSeat(t);
                    this.userIconNode[t].seat.getPositionX();
                    var i = r.getFullScreenValue() / 2;
                    if (1 == t || 3 == t) {
                        var n = this.userIconNode[t].seat.getComponent(cc.Widget).left;
                        this.userIconNode[t].seat.getComponent(cc.Widget).left = n + i;
                    }
                }
            },
            getSeatsData: function() {
                for (var e = [], t = 1; t <= this.maxPlayer; ++t) if (void 0 != this.userIconNode[t] && null != this.userIconNode[t]) {
                    var i = this.userIconNode[t].seatData;
                    if (void 0 != i && null != i) {
                        var n = {
                            commString: i.commString[0],
                            name: i.name || "",
                            mid: i.mid || "",
                            ip: i.ip || ""
                        };
                        if (r.isJsonString(n.commString)) {
                            var a = JSON.parse(n.commString);
                            n.commString = a[0];
                        }
                        e.push(n);
                    }
                }
                return r.dump("有效顺序座位数据：", e), e;
            },
            initData: function() {
                this.myChairPos = 1, this.master = !1, this.roomId = 1e3, this.curOutPos = null, 
                this.userData = {}, this.seatLeftCount = {}, this.roomData = {}, this.roomCfg = {}, 
                this.lastOutCard = {}, this.remainCount = 1, this.userIconNode = {}, this.gotoCount = null, 
                this.bettimeTotal = 20, this.maxPlayer = null, this.userStatus = {}, this.sendOutNode = {}, 
                this.oneGameStart = !1, this.isHandsUpOver = !1, this.isTuoguan = !1, this.parts = {}, 
                this.cardData = [], this.data1022 = {}, this.cardNode = {}, this.interactiveNode = {}, 
                this.workTime = 15, this.operaId = 0, this.selectCards = {}, this.tipInfo = null, 
                this.winSize = cc.director.getWinSize(), this.posType = {
                    2: {
                        1: {
                            1: 1,
                            2: 2
                        },
                        2: {
                            1: 2,
                            2: 1
                        }
                    },
                    3: {
                        1: {
                            1: 1,
                            2: 2,
                            3: 3
                        },
                        2: {
                            1: 3,
                            2: 1,
                            3: 2
                        },
                        3: {
                            1: 2,
                            2: 3,
                            3: 1
                        }
                    },
                    4: {
                        1: {
                            1: 1,
                            2: 2,
                            3: 3,
                            4: 4
                        },
                        2: {
                            1: 2,
                            2: 3,
                            3: 4,
                            4: 1
                        },
                        3: {
                            1: 3,
                            2: 4,
                            3: 1,
                            4: 2
                        },
                        4: {
                            1: 4,
                            2: 1,
                            3: 2,
                            4: 3
                        }
                    }
                };
                var e = cc.director.getWinSize().width;
                for (var t in console.log("屏幕" + e), e = (e - 1280) / 2, console.log("屏幕" + e), 
                this.iconPos = [ e > 0 ? cc.p(-585 - e, -290) : cc.p(-585, -290), cc.p(580 + r.getFullScreenValue(), 180), cc.p(-580 - r.getFullScreenValue() / 2, 180) ], 
                c.isIphoneX && (this.iconPos[0].x = this.iconPos[0].x + 100, this.iconPos[1].x = this.iconPos[1].x - 100), 
                this.outCardNode) if (this.outCardNode.hasOwnProperty(t)) {
                    var i = this.outCardNode[t], n = parseInt(t);
                    this.sendOutNode[n + 1] = i;
                }
                this.isFlixCard = !1, this.isOpenFlixCard = !1, this.BoomNon_Separable = !1, this.gameIsFinsh = !1, 
                this.initPokeCount = 16, this.isAction3s = !1, this.isWinFirst = !1, this.posFrist1021 = -1, 
                this.delFristShowTime = 2800, this.winGoOnPoke = [], this.timeOutArr = [], this.isShowCs = !1, 
                this.pwsRoomType = "85", this.cameraShake = new g(), this.camera = this.node.getChildByName("cameraShake").getComponent(cc.Camera), 
                this.LastTargetPos = this.camera.node.position;
            },
            setRoomInfo: function(e) {
                cc.log("setRoomInfo", e);
            },
            setCurrentTime: function() {
                var e = new Date(), t = e.getMinutes();
                this.topNode.getChildByName("time").getComponent(cc.Label).string = t < 10 ? e.getHours() + ":0" + t : e.getHours() + ":" + t;
            },
            setCurRunCount: function(e) {
                this.gotoCount = e, this.gotoCount <= 0 ? this.friendJuTxt.string = "(<color=#f5e20f>1</color>/" + this.roomData.total + "局)" : this.friendJuTxt.string = "(<color=#f5e20f>" + this.gotoCount + "</color>/" + this.roomData.total + "局)";
            },
            setUserStatus: function(e, t) {
                null != this.userStatus[e] && void 0 != this.userStatus[e] || (this.userStatus[e] = {}), 
                t.chairId && (this.userStatus[e].chairId = t.chairId, this.userIconNode[this.getDisPos(e)].showSeat(!0)), 
                (t.score || t.score >= 0) && (this.userStatus[e].score = t.score), t.leaveTime && (this.userStatus[e].leaveTime = t.leaveTime), 
                t.type && (e == this.myChairPos && t.type > 8 && (t.type = t.type - 8), this.userStatus[e].type = t.type), 
                this.updataUserIconStaus();
            },
            updataUserIconStaus: function(e) {
                for (var t in this.userStatus) if (this.userStatus.hasOwnProperty(t)) {
                    var i = this.userStatus[t];
                    if (void 0 == i || null == i) continue;
                    var n = this.getDisPos(i.chairId), a = this.userIconNode[n];
                    if (a && ((i.score || i.score >= 0) && a.setScore(i.score), i.type && (console.log("玩家状态== " + i.type), 
                    a.setReady(2 == i.type), a.setUnline(i.type >= 8))), 1 == n) {
                        var o = {
                            action: []
                        };
                        1 == i.type && o.action.push({
                            act_id: 90
                        }), 2 == i.type && (o.action = [], this.removeOperation()), r.countValidArryLength(this.userStatus) < this.maxPlayer && o.action.push({
                            act_id: 91
                        }), 0 == this.gotoCount && o.action.push({
                            act_id: 81
                        }), 4 != i.type && o.action.length > 0 && this.createOperation(o);
                    }
                }
            },
            getMySelectCards: function() {
                var e = [];
                for (var t in this.cardNode) if (this.cardNode.hasOwnProperty(t)) {
                    var i = this.cardNode[t].getComponent("cardPoker");
                    i.getCurSelectStatus() && e.push(i.getServerString());
                }
                return e;
            },
            setDeskLastOutData: function(e, t, i) {
                -1 != i && (this.lastOutCard.outServerPos = e, this.lastOutCard.outLocalPos = this.getDisPos(e), 
                this.lastOutCard.outCards = t, this.lastOutCard.outType = i);
            },
            getSelectPokerCard: function() {
                var e, t = this.getMySelectCards(), i = -1, n = l.getPokerType(t);
                i = n.typeCode, e = n.typeLength;
                var a = t.length;
                if (3 == i || 7 == i) {
                    var o = !1;
                    if (7 == i) {
                        for (var s = [], c = e; c >= 2; --c) s.push(5 * c);
                        if (s[1] >= this.cardData.length) o = !0; else for (var d in s) {
                            if (s.hasOwnProperty(d)) s[d] == a && (o = !0);
                        }
                    } else 3 == i && (1 == this.allow3bandOver ? (5 == a || a == this.cardData.length && a < 5) && (o = !0) : 5 == a && (o = !0));
                    if (o || a <= this.cardData.length && (i = -1), i == this.lastOutCard.outType) {
                        var h, u, g = l.getCardBottomValue(i, t), m = l.getCardBottomValue(this.lastOutCard.outType, this.lastOutCard.outCards);
                        h = g.bottom, g.length, u = m.bottom, m.length, h <= u && (i = -1);
                    }
                }
                if (4 != i && -1 != i && this.lastOutCard.outCards) {
                    var f = l.getPokerType(this.lastOutCard.outCards), p = f.typeCode;
                    e != f.typeLength && (i = -1), i != p && (i = -1);
                }
                if (-1 != i && 4 != i && this.lastOutCard.outCards) {
                    var v, C, y = l.getCardBottomValue(i, t), S = l.getCardBottomValue(this.lastOutCard.outType, this.lastOutCard.outCards);
                    v = y.bottom, y.length, C = S.bottom, S.length, v <= C && (i = -1);
                }
                var b = this.getMyRightPos();
                1 == a && -1 != i && (1 == this.seatLeftCount[b] && l.getMaxSingleCardValue(this.cardData) != l.getSortValue(t[0]) && (i = -1));
                if (1 == parseInt(this.roomCfg.shouju3cFirst) && this.gotoCount <= 1) {
                    var k = !0;
                    for (var w in this.seatLeftCount) if (this.seatLeftCount.hasOwnProperty(w)) {
                        var I = this.seatLeftCount[w];
                        if (void 0 != this.roomCfg && void 0 != this.roomCfg.playe_type && I != parseInt(this.roomCfg.playe_type)) {
                            k = !1;
                            break;
                        }
                    }
                    if (k) {
                        var N = !1;
                        for (var T in t) {
                            if (t.hasOwnProperty(T)) if ("3s" == t[T]) {
                                N = !0;
                                break;
                            }
                        }
                        0 == N && (i = -2);
                    }
                }
                return r.getSelectOpera(this.roomCfg.zhaniao, 3) || 9 == i && (i = -1), 1 == this.allowFlybandOver && 7 == i && a == this.cardData.length && a < 5 * e || 7 == i && a % (5 * e) != 0 && 5 * e != a && (i = -1), 
                {
                    selectCard: t,
                    typeCode: i
                };
            },
            onSendCard: function(t) {
                var i = this, n = this.getSelectPokerCard();
                if (-1 == n.typeCode) return this.tipNoRule.active = !0, this.tipNoRule.stopAllActions(), 
                void this.tipNoRule.runAction(cc.sequence(cc.delayTime(1.6), cc.callFunc(function() {
                    i.tipNoRule.active = !1;
                })));
                if (-2 != n.typeCode) {
                    if (this.BoomNon_Separable && 4 != n.typeCode) {
                        var a = function(e, t) {
                            for (var i = !1, n = 0; n < t.length; n++) {
                                var a = t[n];
                                4 == e[l.getSortValue(a)].count && (i = !0);
                            }
                            return i;
                        }, s = n.typeCode, r = n.selectCard;
                        if (9 == s || 10 == s || 8 == s) {
                            var c = l.changeCardValue(this.cardData), d = l.changeCardValue(r);
                            for (var h in d) if (d.hasOwnProperty(h)) {
                                var u = d[h];
                                if (4 != u.count && a(c, u.cards)) return void e("../common/Common").toastTip("炸弹不可拆");
                            }
                        } else {
                            if (a(l.changeCardValue(this.cardData), r)) return void e("../common/Common").toastTip("炸弹不可拆");
                        }
                    }
                    this.removeOperation(), this.sendCardsToDesk(this.myChairPos, n.selectCard);
                    var g = {
                        operaId: t,
                        cards: n.selectCard,
                        num: Object.keys(n.selectCard).length
                    };
                    o.sendCardPDK(g), this.operaId = 0;
                } else e("../common/Common").toastTip("首局黑桃3必出");
            },
            btnChupaiClick: function() {
                null == this.onBtnTishiClick && void 0 == this.onBtnTishiClick || this.onBtnTishiClick();
            },
            btnYaoBuqiClick: function() {
                this.yaoBuQiBtn.getComponent(cc.Button).unscheduleAllCallbacks(), this.timeNode[0].active = !1, 
                this.timeNode[0].position = cc.p(0, -67), console.log("点击发送的" + this.operaId), this.onPass(this.operaId);
            },
            setCurWorkTimer: function(e, t) {
                t = t || !1;
                for (var i = this, n = i.curOutPos - 1, a = 0; a < 3; a++) 0 == a && 1 == this.isTuoguan ? i.timeNode[a].active = !1 : i.timeNode[a].active = a == n;
                var o = e;
                if (null != i.callDown && void 0 != i.callDown && clearInterval(i.callDown), i.timeNode[n] && i.timeNode[n].active) {
                    var s = i.timeNode[n].getChildByName("timelabel");
                    s.active && (s.getComponent(cc.Label).string = o);
                }
                i.callDown = setInterval(function() {
                    if (0 == (o -= .5) - parseInt(o)) if (o >= 0) {
                        if (i.timeNode[n] && i.timeNode[n].active) {
                            var e = i.timeNode[n].getChildByName("timelabel");
                            e.active && (e.getComponent(cc.Label).string = o);
                        }
                    } else null != i.callDown && void 0 != i.callDown && clearInterval(i.callDown);
                    if (0 == o) if ("83" != i.roomCfg.type || 1 == t) {
                        i.timeNode[n].active = !1;
                        var a = i.menuNode.getComponent("menuNode");
                        a && a.btnTishi && a.btnTishi.isValid && "83" != i.roomCfg.type && (a.btnTishi.active = !1), 
                        a && a.btnChupai && a.btnChupai.isValid && "83" != i.roomCfg.type && (a.btnChupai.active = !1);
                    } else i.timeNode[n].runAction(cc.repeatForever(cc.sequence(cc.rotateTo(.1, -20), cc.rotateTo(.1, 20))));
                }, 500);
            },
            playeLastSingleEffect: function(e) {
                var t = this.userData[e], i = "resources/pdkgame/sound/poker/";
                i = (i += 1 == parseInt(t.sex) ? "girl/" : "boy/") + "baodan_" + r.random(1, 2) + ".mp3", 
                AMGR.playSound(i);
            },
            btnTishiClick: function() {
                this.showOneFitCards();
            },
            showOneFitCards: function() {
                if (!this.tipInfo) {
                    this.tipInfo = [];
                    var e = [];
                    e = l.getFitCards(this.lastOutCard, this.BoomNon_Separable), this.is3SMustFirstOut() && (e = this.sortFitCardsWith3SFirstOut(e)), 
                    this.tipInfo.cards = e;
                    var t = !1, i = this.getMyRightPos(), n = [];
                    if (1 == this.seatLeftCount[i]) {
                        var a = this.cardPokeBoom();
                        for (var o in a) {
                            var s = [];
                            for (var r in this.cardNode) {
                                var c = this.cardNode[r].getComponent("cardPoker");
                                a[o] == c.getPokeIntValue() && (s.push(c.getServerString()), c.setCardSelectEnabled(!0), 
                                c.setMaskVisible(!1));
                            }
                            4 == s.length && n.push(s);
                        }
                        if (this.lastOutCard.outCards) {
                            if (1 == l.getPokerType(this.lastOutCard.outCards).typeCode) {
                                var d = 0;
                                for (var h in e) if (e.hasOwnProperty(h)) {
                                    var u = e[h], g = l.getSortValue(u[0]);
                                    g > d && (d = g, this.tipInfo.cards = {
                                        0: u
                                    });
                                }
                            }
                        } else {
                            for (var m = {
                                val: 0,
                                idx: -1
                            }, f = [], p = 0; p < e.length; p++) {
                                var v = e[p], C = l.getSortValue(v[0]);
                                m.val < C && (m.val = C, m.idx = p), 1 == v.length && f.push(p);
                            }
                            f.sort(function(e, t) {
                                return e - t;
                            });
                            for (var y = f.length; y > 0; --y) {
                                var S = f[y - 1], b = e[S];
                                if (void 0 != b && void 0 != b[0]) l.getSortValue(b[0]) != m.val && e.splice(S, 1);
                            }
                            t = 1 == l.getPokerType(e[0]);
                        }
                    }
                    if (this.tipInfo.idx = t ? 0 : -1, n.length > 0) for (var k = Object.keys(this.tipInfo.cards).length, w = k; w < k + n.length; w++) this.tipInfo.cards[w] = n[w - k];
                }
                if (this.tipInfo) for (var I in this.tipInfo.idx = this.tipInfo.idx + 1, this.tipInfo.idx > Object.keys(this.tipInfo.cards).length - 1 && (this.tipInfo.idx = 0), 
                this.cardNode) if (this.cardNode.hasOwnProperty(I) && void 0 != this.tipInfo.cards[this.tipInfo.idx]) {
                    var N = this.cardNode[I].getComponent("cardPoker"), T = N.getServerString();
                    N.setSelectStatus(!1);
                    for (var R = 0; R < this.tipInfo.cards[this.tipInfo.idx].length; R++) {
                        this.tipInfo.cards[this.tipInfo.idx][R] == T && N.setSelectStatus(!0);
                    }
                }
            },
            playPokerTypeSoundAndEffect: function(e, t, i) {
                var n = this, a = "resources/pdkgame/sound/poker/", o = 2;
                this.userData[t] && this.userData[t].sex && (o = Number(this.userData[t].sex)), 
                a += 1 == o ? "girl/" : "boy/", a += l.getSoundPath(e, i), AMGR.playSound(a + ".mp3");
                var s = {
                    "-1": "pdkgame/Effects/g_ybq",
                    3: "pdkgame/Effects/g_3d2",
                    4: "pdkgame/Effects/g_zd",
                    5: "pdkgame/Effects/g_sz",
                    6: "pdkgame/Effects/g_ld",
                    7: "pdkgame/Effects/g_fj",
                    8: "pdkgame/Effects/g_4d2",
                    9: "pdkgame/Effects/g_4d3",
                    10: "pdkgame/Effects/g_4d1"
                }, r = {
                    1: cc.p(0, 0),
                    2: cc.p(335, 150),
                    3: cc.p(-335, 150)
                };
                if (void 0 != s[e] && null != s[e]) {
                    var c = this.getDisPos(t);
                    "7" == e && AMGR.playSound("resources/audio/music/airplane_beiguan.mp3", !1), cc.loader.loadRes(s["" + e], function(t, i) {
                        if (!t && null != i && void 0 != i) {
                            var a = cc.instantiate(i);
                            a.parent = n.node, a.zIndex = 2, a.x = r[c].x, a.y = r[c].y, 4 === e && "84" !== n.roomCfg.type && n.cameraShake && !n.cameraShake.started && setTimeout(function() {
                                u.vibrateLong(), n.cameraShake.ShakeFor();
                            }, 320);
                            var o = a.getComponent(cc.Animation);
                            o && o.on("finished", function() {
                                a.destroy();
                            });
                        }
                    });
                }
            },
            cardChangeToUnclick: function(e) {
                for (var t in this.isTuoguan = e, this.cardNode) if (this.cardNode.hasOwnProperty(t)) {
                    var i = this.cardNode[t].getComponent("cardPoker");
                    i.setCardSelectEnabled(!e), i.setMaskVisible(e);
                }
            },
            sendCardsToDesk: function(e, t, i, n) {
                null != i && void 0 != i || (i = !0);
                var a = this.getDisPos(e);
                if (1 == a) {
                    for (var o in t) if (t.hasOwnProperty(o)) {
                        var s = t[o], r = this.cardData.indexOf(s);
                        r > -1 && this.cardData.splice(r, 1);
                    }
                    c.headCardType = 1, this.initHandCard(this.cardData, !0, !0);
                }
                null != this.sendOutNode[a] && void 0 != this.sendOutNode[a] && this.sendOutNode[a].removeAllChildren();
                var d = l.getPokerType(t, !0);
                for (var h in i && this.playPokerTypeSoundAndEffect(d.typeCode, e, t), this.setDeskLastOutData(e, t, d.typeCode), 
                t = l.sortCards(t)) if (t.hasOwnProperty(h)) {
                    var u = t[h], g = {};
                    g.val = u;
                    var m = cc.instantiate(this.cardPreFab);
                    m.setScale(.6), m.parent = this.sendOutNode[a], m.getComponent("cardPoker").initCard(g);
                    var f = 0, p = 0;
                    1 == a ? f = 38 * (h - t.length / 2) : 2 == a ? t.length <= 10 ? f = 38 * -(t.length - h - 1) - 10 : h < 10 ? f = 38 * -(10 - h - 1) - 10 : (f = 38 * -(t.length - h - 1) - 10, 
                    p = -67) : 3 == a && (t.length <= 10 ? f = 38 * (h - 1) + 15 : h >= 10 ? (f = 38 * (h - 10 - 1) + 15, 
                    p = -67) : f = 38 * (h - 1) + 15), c.IsOpenReplay && (p -= 15, 1 == a && (p -= 20)), 
                    m.y = p, m.x = f;
                }
            },
            createOperation: function(e) {
                var t = this;
                console.log("操作码 ===", e), this.removeOperation();
                var i = [], n = e.operaId;
                this.timeNode[0].position = cc.p(0, -67), console.log("发送给我的operaId" + e.operaId), 
                this.operaId = n;
                var a = !1, o = !1, r = !1;
                for (var l in e.action) if (e.action.hasOwnProperty(l)) {
                    var d = e.action[l];
                    i.push(d), 100 == d.act_id && (a = !0), 90 == d.act_id && (console.log("准备按钮出现296555"), 
                    "83" == this.roomCfg.type && (o = !0)), 81 == d.act_id && (r = !0);
                }
                var h = this.menuNode.getComponent("menuNode");
                o != r ? (o && (h.btnReady.x = 0), r && (h.btnExit.x = 0)) : h.btnReady.x = 149;
                for (var u in this.onBtnTishiClick = function() {
                    this.onSendCard(n);
                }, a && i.push({
                    cards: "",
                    act_id: 99
                }), i) if (i.hasOwnProperty(u)) {
                    var g = i[u];
                    90 == g.act_id && (null != s.getPokerSmallOver() && void 0 != s.getPokerSmallOver() || void 0 != s.getPokerSmallOverData() && null != s.getPokerSmallOverData() || (this.gotoCount > 0 ? (this.deskCleanUp(), 
                    h.btnReady && h.btnReady.isValid && (console.log("准备按钮出现3021"), "83" == this.roomCfg.type && (h.btnReady.active = !0))) : h.btnReady && h.btnReady.isValid && (h.btnReady.active = !1))), 
                    91 == g.act_id && "83" == this.roomCfg.type && (h.btnCallFriend.active = !c.isSpecial), 
                    81 == g.act_id && (h.btnExit && h.btnExit.isValid && (h.btnExit.active = !0), this.tipMatch && this.tipMatch.isValid && "83" != this.roomCfg.type && (this.tipMatch.active = !0), 
                    "83" == this.roomCfg.type && this.roomData.masterMid == c.USER.mid && (h.btnExit.active = !1)), 
                    99 == g.act_id && h.btnTishi && h.btnTishi.isValid && (h.btnTishi.active = !0), 
                    100 == g.act_id && h.btnChupai && h.btnChupai.isValid && (h.btnChupai.active = !0), 
                    104 == g.act_id && function() {
                        var e = t;
                        t.timeNode[0].position = cc.p(-157, -67), h.btnYaobuqi && h.btnYaobuqi.isValid && (h.btnYaobuqi.active = !0, 
                        h.btnYaobuqi.getComponent(cc.Button).unscheduleAllCallbacks(), h.btnYaobuqi.getComponent(cc.Button).scheduleOnce(function() {
                            h.btnYaobuqi && h.btnYaobuqi.isValid && (h.btnYaobuqi.active = !1), e.timeNode[0].active = !1, 
                            console.log("延时自动发送的" + n), e.onPass(n);
                        }, 3));
                    }();
                }
            },
            onPass: function(e) {
                this.removeOperation(), o.sendPDKPass(e);
            },
            removeOperation: function() {
                var e = this.menuNode.getComponent("menuNode");
                e && e.btnReady && e.btnReady.isValid && (e.btnReady.active = !1), e && e.btnCallFriend && e.btnCallFriend.isValid && (e.btnCallFriend.active = !1), 
                e && e.btnExit && e.btnExit.isValid && (e.btnExit.active = !1), e && e.btnTishi && e.btnTishi.isValid && (e.btnTishi.active = !1), 
                e && e.btnChupai && e.btnChupai.isValid && (e.btnChupai.active = !1), e && e.btnYaobuqi && e.btnYaobuqi.isValid && (e.btnYaobuqi.active = !1);
                for (var t = 0; t < 3; t++) this.timeNode[t] && (this.timeNode[t].stopAllActions(), 
                this.timeNode[t].rotation = 0);
            },
            initHandCard: function(e, t, i) {
                for (var n in c.justOne = !0, this.cardData = [], e) if (e.hasOwnProperty(n)) {
                    var a = e[n];
                    void 0 != a && "" != a && this.cardData.push(a);
                }
                if (c.IsOpenReplay) this.cardLayer.removeAllChildren(); else for (var o in this.cardNode) {
                    if (this.cardNode.hasOwnProperty(o)) this.cardNode[o].removeFromParent(), delete this.cardNode[o];
                }
                var s = this.cardData.length, d = null;
                this.cardData = l.sortCards(this.cardData);
                var h = (this.winSize.width - 85 - r.getFullScreenValue() / 2) / this.roomCfg.playe_type;
                if (c.headCardType = 1, 0 == c.headCardType) this.fapaiAnimation(d, s, h); else for (var u in c.isFaPaiBug = !0, 
                this.cardData) if (this.cardData.hasOwnProperty(u)) {
                    (d = cc.instantiate(this.cardPreFab)).parent = this.cardLayer;
                    var g = d.getComponent("cardPoker"), m = {
                        val: this.cardData[u]
                    };
                    g.initCard(m), d.y = 106, d.x = r.getFullScreenValue() / 4 + (u - (s + 1) / 2 + 1) * h, 
                    this.cardNode[u] = d;
                }
                1 != t && 0 == this.isHasPlayerOut() && this.setCardsFlix(!1), (!t || null != i && void 0 != i) && this.isTuoguan && this.cardChangeToUnclick(!0);
            },
            fapaiAnimation: function(e, t, i) {
                var n = this, a = new cc.Node();
                a.position = cc.v2(0, 360);
                var o = a.addComponent(cc.Sprite), s = new cc.Node();
                s.position = cc.v2(0, 360);
                var c = s.addComponent(cc.Sprite);
                cc.loader.loadRes("pdkgame/battle/cardPoker", cc.SpriteAtlas, function(e, t) {
                    t && (o.spriteFrame = t.getSpriteFrame("card_back_b"), c.spriteFrame = t.getSpriteFrame("card_back_b"));
                }), a.scale = .6, s.scale = .6, s.parent = n.cardLayer, a.parent = n.cardLayer;
                var l = 0, d = this.cardData.length, h = setInterval(function() {
                    if (l >= d) s.active = !1, a.active = !1, s.destroy(), a.destroy(), clearInterval(h); else {
                        (e = cc.instantiate(n.cardPreFab)).parent = n.cardLayer;
                        var o = e.getComponent("cardPoker"), c = {
                            val: n.cardData[l]
                        };
                        o.initCard(c), e.y = 106, e.x = r.getFullScreenValue() / 4 + (l - (t + 1) / 2 + 1) * i, 
                        n.cardNode[l] = e, a.runAction(cc.sequence(cc.moveTo(.04, cc.v2(e.x, e.y)), cc.callFunc(function() {
                            a.position = cc.v2(0, 360);
                        }))), l++;
                    }
                }, 40);
            },
            getMyRightPos: function() {
                if (null != this.maxPlayer && void 0 != this.maxPlayer) {
                    var e = this.myChairPos + 1;
                    return e > this.maxPlayer && (e = 1), e;
                }
            },
            sortFitCardsWith3SFirstOut: function(e) {
                for (var t = [], i = 0; i < e.length; i++) for (var n = e[i], a = 0; a < n.length; a++) {
                    var o = n[a];
                    3 == l.getSortValue(o) && t.push(n);
                }
                for (var s = 0; s < t.length; s++) {
                    for (var r = t[s], c = !1, d = 0; d < r.length; d++) {
                        "3s" == r[d] && (c = !0);
                    }
                    if (0 == c) for (var h = 0; h < r.length; h++) {
                        var u = r[h];
                        if (3 == l.getSortValue(u)) {
                            t[s][h] = "3s";
                            break;
                        }
                    }
                }
                return t;
            },
            is3SMustFirstOut: function() {
                if (1 == parseInt(this.roomCfg.shouju3cFirst) && this.gotoCount <= 1) {
                    var e = !0;
                    for (var t in this.seatLeftCount) {
                        var i = this.seatLeftCount[t];
                        if (this.roomCfg && this.roomCfg.playe_type && i != parseInt(this.roomCfg.playe_type)) {
                            e = !1;
                            break;
                        }
                    }
                    return e;
                }
                return !1;
            },
            getMyLeftPos: function() {
                if (null != this.maxPlayer && void 0 != this.maxPlayer) {
                    var e = this.myChairPos - 1;
                    return 0 == e && (e = this.maxPlayer), e;
                }
            },
            isHasPlayerOut: function() {
                var e = !1, t = this.getMyLeftPos();
                for (var i in this.seatLeftCount) if (this.seatLeftCount.hasOwnProperty(i)) {
                    var n = this.seatLeftCount[i];
                    if (this.roomCfg.playe_type && n != parseInt(this.roomCfg.playe_type) && 0 != n) {
                        e = !0;
                        break;
                    }
                }
                return this.seatLeftCount[t] == parseInt(this.roomCfg.playe_type) && !this.seatIsMine(this.curOutPos) && e && this.seatLeftCount[this.myChairPos] == parseInt(this.roomCfg.playe_type) && (e = !1), 
                e;
            },
            showRoomId: function(e) {
                this.ftype = e || "", this.topNode.getChildByName("roomid").getComponent(cc.Label).string = this.ftype + "房间号:" + this.roomId, 
                this.roomCfg && parseInt(this.roomCfg.club_id) > 0 && (this.topNode.getChildByName("roomid").getComponent(cc.Label).string = this.ftype + "茶馆房号:" + this.roomId);
            },
            getDisPos: function(e) {
                if (null != this.maxPlayer && void 0 != this.maxPlayer) return this.posType[this.maxPlayer][this.myChairPos][e];
            },
            setUserData: function(e, t) {
                this.userData[e] = t;
                var i, n = this.getDisPos(e);
                null != t && void 0 != t && void 0 != n ? this.createIcon(n, t) : (null != (i = this.userIconNode[n]) && void 0 != i && null != i.resetSeat && void 0 != i.resetSeat && i.resetSeat(), 
                null != this.sendOutNode[n] && void 0 != this.sendOutNode[n] && this.sendOutNode[n].isValid && this.sendOutNode[n].removeAllChildren());
                null != t && void 0 != t && (parseInt(this.roomData.masterMid) == parseInt(t.mid) && null != (i = this.userIconNode[n]) && void 0 != i && null != i.setOwner && void 0 != i.setOwner && i.setOwner(!0));
            },
            setCardsFlix: function(e) {
                if (0 != this.isOpenFlixCard) for (var t in null != e && void 0 != e || (e = !0), 
                this.cardNode) {
                    if (this.cardNode.hasOwnProperty(t)) this.cardNode[t].getComponent("cardPoker").setCardFlix(e);
                }
            },
            initPiao: function(e, t) {
                this.hidePiao(), r.dump("data", e);
                var i = this, n = r.showPiaoView(this, e, this.sprites, t, function(e) {
                    o.sendPDKPiao(e);
                }, function() {
                    i.hidePiao();
                });
                this.piaoMenuNode = n;
            },
            hidePiao: function() {
                0 == r.isNull(this.piaoMenuNode) && this.piaoMenuNode.isValid && this.piaoMenuNode.destroy();
            },
            createRoomDis: function(e) {
                var t = [];
                this.roomConfig = e, 1 == parseInt(e.piao_fen) && t.push("飘1/2/3"), 2 == parseInt(e.piao_fen) && t.push("飘2/3/5"), 
                0 == parseInt(e.shouju_guize) ? t.push("每局黑桃三先出") : t.push("赢家先出"), 1 == parseInt(e.shouju3cFirst) && t.push("首局黑桃三必出"), 
                1 == parseInt(e.isGaiPai_) && (t.push("首轮盖牌"), this.isOpenFlixCard = !0);
                var i = e.xianshi_paishu;
                this.isShowRetainCardNum = i;
                var n = e.zhaniao;
                r.getSelectOpera(n, 1) && (t.push("炸弹不可拆"), this.BoomNon_Separable = !0), r.getSelectOpera(n, 2) && (t.push("允许四带二"), 
                this.allow4band2 = !0, l.initallow4band2SelectData(this.allow4band2)), r.getSelectOpera(n, 3) && (t.push("允许四带三"), 
                this.allow4band3 = !0, l.initallow4band3SelectData(this.allow4band3)), r.getSelectOpera(n, 4) && t.push("红桃十抓鸟"), 
                this.wanfaroomtb = t;
                var a = t.join(" ");
                this.gameTitle.getComponent(cc.Label).string = a;
                var o = parseInt(e.playe_type);
                this.topNode.getChildByName("type").getComponent(cc.Label).string = 15 == o ? "十五张" : "十六张";
            },
            createIcon: function(e, t) {
                var i = this.userIconNode[e];
                void 0 != i && null != i && void 0 != i.setData && null != i.setData && (i.setData(t), 
                i.setHead(t.icon), i.setScore(0));
            },
            clearIconPiao: function() {
                for (var e in this.userIconNode) {
                    if (this.userIconNode.hasOwnProperty(e)) this.userIconNode[e].setPiao(0);
                }
            },
            seatIsMine: function(e) {
                return parseInt(this.myChairPos) == parseInt(e);
            },
            showRemoveRoomHint: function(e) {
                void 0 == this.dissolveNode || null == this.dissolveNode || this.dissolveNode.removeFromParent(), 
                this.dissolveNode = cc.instantiate(this.dissolveRoomNode), this.dissolveNode.active = !1, 
                this.node.addChild(this.dissolveNode, 10);
                var t = this.dissolveNode.getComponent("dissolveRoom");
                this.dissolveNode.active = !0, t.refuseBtn.active = !0, t.agreeBtn.active = !0;
                t.mywaitInfo.active = !1, t.refuseBtn.on("click", function() {
                    o.sendPDKVote(2);
                }, this), t.agreeBtn.on("click", function() {
                    o.sendPDKVote(1);
                }, this);
                for (var i = 0; i < e.votePlayData.length; ++i) if (2 == e.votePlayData[i].state) {
                    this.dissolveNode.active = !1;
                    var n = "由于玩家【" + r.substring(this.userData[e.votePlayData[i].chairId].name, 5) + "】拒绝，解散房间失败，游戏继续";
                    return void r.oneBtnTips(n);
                }
                var a = this.userData[e.chairId], l = "玩家【" + r.substring(a.name, 5) + "】";
                t.title.getComponent(cc.Label).string = l + "申请解散房间，请等待其他玩家选择";
                for (var d = 0; d < e.votePlayData.length; ++d) {
                    var h = r.substring(this.userData[e.votePlayData[d].chairId].name, 5);
                    if (this.seatIsMine(e.votePlayData[d].chairId) && e.votePlayData[d].mid == c.USER.mid) break;
                    var u = "玩家【" + h + "】", g = "";
                    0 == e.votePlayData[d].state ? g = "等待选择" : 1 == e.votePlayData[d].state ? (g = "同意解散", 
                    this.seatIsMine(e.votePlayData[d].chairId) && (t.refuseBtn.active = !1, t.agreeBtn.active = !1)) : 2 == e.votePlayData[d].state && (g = "拒绝解散"), 
                    t.line[d].getComponent(cc.Label).string = u + g;
                }
                this.seatIsMine(e.chairId) && (t.mywaitInfo.active = !0, t.refuseBtn.active = !1, 
                t.agreeBtn.active = !1);
                var m = e.remainTime;
                (function e(i) {
                    if (i > 0) var n = setTimeout(function() {
                        var a = s.getBattle();
                        null != a && void 0 != a && (i -= 1, t.time.getComponent(cc.Label).string = r.getTimeMS(i), 
                        n && clearTimeout(n), e(i));
                    }, 1e3); else t.time.getComponent(cc.Label).string = r.getTimeMS(0);
                })(m), t.time.getComponent(cc.Label).string = r.getTimeMS(m);
            },
            initSeat: function(t) {
                var i = this, a = this, o = function(n) {
                    if (i.seatNode.hasOwnProperty(n) && t == parseInt(n) + 1) {
                        var o = i.seatNode[n];
                        o.active = !1, (l = {}).showSeat = function(e) {
                            o.active = e;
                        };
                        var s = o.getChildByName("seat").getChildByName("unline");
                        s.active = !1, l.unline = s;
                        var d = o.getChildByName("seat").getChildByName("tuoguan");
                        d.active = !1, l.tuoguan = d;
                        var h = o.getChildByName("seat").getChildByName("score");
                        h.active = !1, l.score = h;
                        var u = o.getChildByName("ready");
                        u.active = !1, l.ready = u;
                        var g = o.getChildByName("moveWinTxt");
                        g.active = !1, l.moveWinTxt = g;
                        var m = o.getChildByName("ifrist");
                        m.active = !1, l.iFrist = m;
                        var f = o.getChildByName("moveLoseTxt");
                        f.active = !1, l.moveLoseTxt = f;
                        var p = o.getChildByName("seat").getChildByName("border");
                        l.border = p;
                        var v = p.getChildByName("nameBg");
                        v.active = !1;
                        var C = p.getChildByName("nameTxt");
                        C.getComponent(cc.Label).string = "", l.nameTxt = C;
                        var y = p.getChildByName("owner");
                        y.active = !1, l.owner = y;
                        var S = p.getChildByName("banker");
                        S.active = !1, l.banker = S;
                        var b = o.getChildByName("seat").getChildByName("headMask").getChildByName("head");
                        l.head = b;
                        var k = o.getChildByName("seat").getChildByName("headMask").getChildByName("bg_zz");
                        k.active = !1, l.headMask = k;
                        var w = o.getChildByName("selectPiao");
                        w.active = !1, l.selectPiao = w, l.flyIFrist = function(e, t) {
                            e = e || .6, t = t || 30, m.active = !0;
                            var i = m.position;
                            m.runAction(cc.sequence(cc.moveTo(e, cc.p(i.x, i.y + t)), cc.callFunc(function() {
                                null != m && void 0 != m && (m.active = !1, m.position = i);
                            })));
                        };
                        l.setScoreView = function(e, i, n) {
                            var a = null;
                            if (i) {
                                var o = e >= 0;
                                (a = o ? g : f).active = !0, a.getComponent(cc.Label).string = o ? "+" + e : e;
                                var s = a.getPosition(), r = cc.p(s.x, s.y + 20);
                                a.runAction(cc.sequence(cc.moveTo(.3, r), cc.delayTime(1.2), cc.callFunc(function() {
                                    a && (a.active = !1, a.position = s);
                                })));
                            } else {
                                (a = e >= 0 ? g : f).active = !0, a.getComponent(cc.Label).string = e > 0 ? "+" + e : e;
                                var c = a.getPosition(), l = cc.moveTo(.3, c.x, c.y + 20), d = function() {
                                    a && (a.scale = 1, 1 == t ? a.setPosition(cc.p(-83, 130)) : 2 == t ? a.setPosition(cc.p(-23, 19)) : a.setPosition(cc.p(40, 13)), 
                                    a.active = !1);
                                };
                                if (e > 0) {
                                    var h = cc.sequence(l, cc.delayTime(.8), cc.callFunc(d));
                                    a.runAction(h);
                                } else a.runAction(cc.sequence(l, cc.delayTime(.8), cc.callFunc(d)));
                            }
                        };
                        var I = function(e) {
                            1 == e ? "83" == a.roomCfg.type && (console.log(""), u.active = !0) : u.active = !1;
                        };
                        l.setReady = I;
                        l.setBanker = function(e) {
                            1 == e || (S.active = !1);
                        };
                        l.setScore = function(e) {
                            h.getComponent(cc.Label).string = "" + r.numberThousands(e), h.active = !0, (a.roomCfg && "82" == a.roomCfg.type || "85" == a.roomCfg.type) && (h.active = !1);
                        };
                        l.setOwner = function(e) {
                            1 == e || (y.active = !1);
                        };
                        l.setUnline = function(e) {
                            1 == e ? console.error("我离线了了了" + t) : console.log("我上线了了了" + t), 1 == d.active ? (s.active = !1, 
                            k.active = !1) : (s.active = e, k.active = e);
                        };
                        l.setTuoguan = function(e) {
                            1 == e ? console.error("我托管了了了" + t) : console.error("我取消托管了了了了" + t), d.active = e, 
                            k.active = e, s.active = !1;
                        };
                        var N = o.getChildByName("seat").getChildByName("piao"), T = N.getChildByName("piaoCount");
                        N.active = !1;
                        l.setPiao = function(e) {
                            w.active = !1, parseInt(e) > 0 ? (N.active = !0, T.getComponent(cc.Label).string = e) : 0 == parseInt(e) ? N.active = !1 : parseInt(e) < 0 && (w.active = !0, 
                            I(!1));
                        };
                        var R = o.getChildByName("cardCount");
                        R.active = !1, l.cardCountNode = R;
                        l.setUserLeftCount = function(e, i) {
                            1 != t && (R.active = i, R.active && (R.getChildByName("count").getComponent(cc.Label).string = e), 
                            1 == e ? l.playBaojing(!0) : l.playBaojing(!1));
                        };
                        l.setHead = function(e) {
                            l.icon = e, null != e ? "" != e ? cc.loader.load({
                                url: e,
                                type: "jpg"
                            }, function(e, t) {
                                if (!e) {
                                    var i = new cc.SpriteFrame(t);
                                    b.getComponent(cc.Sprite).spriteFrame = i, l.loadImg(b);
                                }
                            }) : cc.loader.loadRes("com/textures/default", cc.SpriteFrame, function(e, t) {
                                b.getComponent(cc.Sprite).spriteFrame = t, l.loadImg(b);
                            }) : cc.loader.loadRes("com/textures/default2", cc.SpriteFrame, function(e, t) {
                                b && b.isValid && b.getComponent(cc.Sprite) && (b.getComponent(cc.Sprite).spriteFrame = t, 
                                l.loadImg(b));
                            });
                        };
                        l.loadImg = function(e) {
                            var t = cc.size(121, 121), i = 1 * e.getContentSize().width, n = t.height / i;
                            e.scale = 1 * n;
                        };
                        l.resetSeat = function() {
                            l.setOwner(!1), l.setScore(0), h.active = !1, l.setBanker(!1), l.setUnline(!1), 
                            l.setReady(!1), l.setHead(null), l.setTuoguan(!1), void 0 != l.setData && null != l.setData && l.setData(null), 
                            o.active = !1;
                        };
                        l.playBaojing = function(e) {
                            1 != t && (0 == e ? void 0 != l.baojingAni && null != l.baojingAni && (l.baojingAni.removeFromParent(), 
                            l.baojingAni = null) : void 0 != l.baojingAni && null != l.baojingAni || cc.loader.loadRes("pdkgame/Effects/g_jb", function(e, i) {
                                if (!e && null != i && void 0 != i) {
                                    var n = cc.instantiate(i);
                                    n.parent = l.border, 2 != t ? (n.x = 149, n.y = 30) : (n.x = -29, n.y = 30), l.baojingAni = n;
                                }
                            }));
                        };
                        l.setData = function(e) {
                            o.active = !0, l.seatData = e, l.seatData ? 1 != t && l.seatData.name && (v.active = !0, 
                            C.getComponent(cc.Label).string = r.substring(l.seatData.name, 4, !0)) : (v.active = !1, 
                            C.getComponent(cc.Label).string = "");
                        };
                        var P = function() {
                            if (this.canClickUserInfo) {
                                this.canClickUserInfo = !1;
                                var t = this;
                                void 0 != l.icon && null != l.icon && (null != t.userInfo && void 0 != t.userInfo && t.userInfo.removeFromParent(), 
                                e("../tools/Loading").create(), cc.loader.loadRes("comgame/userInfoScene", function(i, a) {
                                    e("../tools/Loading").close();
                                    var o = cc.instantiate(a), s = {
                                        name: l.seatData.name || "",
                                        ip: l.seatData.ip || "",
                                        mid: l.seatData.mid || 0,
                                        icon: l.seatData.icon || "",
                                        gold: l.seatData.gold,
                                        serverSeatId: l.seatData.chairId,
                                        myChairPos: t.myChairPos,
                                        sex: l.seatData.sex
                                    };
                                    c.USER.mid, o.getComponent("UserInfo").setType(2, s);
                                    var d = cc.find("userInfoBg", o);
                                    d.position = "0" == n ? cc.p(-248, -167) : "1" == n ? cc.p(245, 126) : cc.p(-246, 124), 
                                    o.getComponent("UserInfo").callBackSomeThing(function() {
                                        t.canClickUserInfo = !0;
                                    }), t.userInfo = o, r.maskFadeIn(o.getChildByName("bgmask"), o.getChildByName("userInfoBg")), 
                                    cc.director.getScene().getChildByName("Canvas").addChild(o, 6);
                                }));
                            }
                        };
                        l.clickHead = P;
                        l.setChatEmoji = function(e) {
                            null != o.faceAni && void 0 != o.faceAni && o.faceAni.removeFromParent();
                            var i = r.getFaceConfig(), n = Number(e), a = i[n - 1];
                            cc.loader.loadRes(a, function(e, i) {
                                var a = cc.instantiate(i), s = a.getComponent(cc.Animation).defaultClip.duration;
                                n > 17 && (s *= 2);
                                var r = cc.sequence(cc.delayTime(s), cc.callFunc(function() {
                                    a && a.removeFromParent();
                                }));
                                a.runAction(r), 1 == t ? a.setPosition(50, -75) : 3 == t ? a.setPosition(50, -75) : 2 == t && a.setPosition(240, -75), 
                                o.faceAni = a, o.getChildByName("seat").addChild(a);
                            });
                        };
                        var D = o.getChildByName("msgTip");
                        D.active = !1;
                        return l.setChatMsg = function(e) {
                            var t = D.getChildByName("pdkchat_tip").getChildByName("label");
                            t.getPositionX();
                            t.getComponent(cc.Label).string = e;
                            var i = t.getContentSize().width, n = i;
                            t.stopAllActions(), t.setPositionX(0), n = i < 205 ? n < 50 ? 50 : n : 205, D.active = !0;
                            t.getPositionY(), t.getPosition();
                            var a = cc.sequence(cc.delayTime(2), cc.callFunc(function() {
                                D && t && (D.active = !1, t.stopAllActions());
                            }));
                            t.runAction(a);
                        }, p.addComponent(cc.Button), p.on("click", P, i), l.seat = o, {
                            v: l
                        };
                    }
                };
                for (var s in this.seatNode) {
                    var l, d = o(s);
                    if ("object" === (void 0 === d ? "undefined" : n(d))) return d.v;
                }
            },
            isTotalOver: function() {
                if ("83" != this.roomCfg.type) return !1;
                var e = !1;
                return parseInt(this.gotoCount) == parseInt(this.roomData.total) && (e = !0), this.isHandsUpOver && (e = !0), 
                e;
            },
            clearUserInfo: function() {
                for (var e = 1; e <= 3; e++) this.setUserData(e, null);
            },
            deskCleanUp: function() {
                var e = this.menuNode.getComponent("menuNode");
                for (var t in e && e.btnjCancelTG && e.btnjCancelTG.isValid && (e.btnjCancelTG.active = !1, 
                this.cardChangeToUnclick(!1)), this.removeOperation(), this.sendOutNode) if (this.sendOutNode.hasOwnProperty(t)) {
                    var i = this.sendOutNode[t];
                    void 0 == i && null == i || i.removeAllChildren();
                }
                for (var n in this.clearIconPiao(), this.userIconNode) {
                    var a = this.userIconNode[n];
                    a.cardCountNode.active = !1, a.playBaojing(!1), a.setUserLeftCount(0, !1);
                }
                this.lastOutCard = {};
                for (var o = 0; o < 3; o++) this.timeNode[o].active = !1;
                null != this.callDown && void 0 != this.callDown && clearInterval(this.callDown), 
                this && this.unscheduleAllCallbacks(), this.canClickUserInfo = !0, null != this.userInfo && void 0 != this.userInfo && this.userInfo.removeFromParent(), 
                this.cardLayer && this.cardLayer.isValid && this.cardLayer.removeAllChildren(), 
                this.chatViewNew.active = !1, this.isAction3s = !1, this.isWinFirst = !1, this.posFrist1021 = -1, 
                this.isShowCs = !1;
            },
            initJuRedpack: function() {
                var e = this;
                "81" == this.roomCfg.type || "84" == this.roomCfg.type ? (this.gameJuNode.active = !0, 
                this.bgWidth.width = 250, this.gameJu.node.position = cc.p(34.1, 0), this.gameTotalJu.string = "(   / 6) 局送红包", 
                JavaRequest.getSmallOverRedpacket({
                    playType: this.roomCfg.type,
                    type: this.roomCfg.ju
                }, function(t) {
                    var i = t.data[0].process;
                    2 == e.roomData.roomStatic ? e.gameJu.string = i + 1 : null == e.gameJu && void 0 == e.gameJu || (s.getPokerSmallOverData() ? (e.gameJu.string = i, 
                    0 == i && (e.gameJu.string = t.data[0].countNumLen)) : e.gameJu.string = i + 1);
                })) : "82" == this.roomCfg.type ? (this.gameJuNode.active = !0, this.bgWidth.width = 260, 
                this.gameJu.node.position = cc.p(60, 0), this.gameTotalJu.string = "闯关(   / 7)局分红包", 
                JavaRequest.getGuanInfo(null, function(t) {
                    var i = t.data[0], n = i.guan;
                    e.roomData && 2 == e.roomData.roomStatic ? n = i.guan + 1 : s.getPokerSmallOverData() ? (n = 1 == i.success ? i.guan : i.guan + 1, 
                    0 == i.guan && 1 == i.success && 0 == i.isRelive && 2 == i.reviveTimes && (n = 7)) : n = i.guan + 1, 
                    null != e.gameJu && void 0 != e.gameJu && (e.gameJu.string = n, e.updateNewPlayerState());
                })) : this.roomCfg.type == this.pwsRoomType ? (this.friendJuNode.active = !1, this.topNode.active = !1) : this.friendJuNode.active = !0;
            },
            updateJuRedpack: function(e) {
                e && ("81" == this.roomCfg.type || "84" == this.roomCfg.type ? e && (this.gameJu.string = e, 
                this.gameJu.node.position = cc.p(34.1, 0)) : "83" == this.roomCfg.type && (this.gameJu.string = e, 
                this.gameJu.node.position = cc.p(60, 0)));
            },
            updateNewPlayerState: function() {
                if (null != this.newPlayer && void 0 != this.newPlayer) {
                    var e = this;
                    e.newPlayer.removeAllChildren(), s.setIsNpCGFG(!1), s.setUserIsNew(!1), e.hb_shake && e.hb_shake.isValid && (e.hb_shake.destroy(), 
                    e.hb_shake = null);
                    var t = parseInt(e.gameJu.string);
                    t < 6 || JavaRequest.getNoviceByUserMid(function() {
                        if (e.hbNode) if (s.getUserIsNew()) {
                            var i = cc.find("hb_spr", e.hbNode);
                            i.active = !0, e.hb_shake && e.hb_shake.isValid && (e.hb_shake.destroy(), e.hb_shake = null), 
                            s.setIsNpCGFG(6 == t), s.getIsNpCGFG() ? RESOURCE.getPrefab("pdkNewPlayer", function(t) {
                                var i = cc.instantiate(t);
                                i.parent = e.newPlayer, i.position = cc.p(0, 20);
                                var n = i.getComponent("NewPlayer");
                                n.setConFontSize(25), n.setDbgScaleY(-1), n.setDdgPos(140, 60), n.setBgSize(!1, 80), 
                                n.setConSize(!1, 80), n.setTouch(), n.setContent(pdkShowContent.cgGetHbShow), n.scheduleOnce(function() {
                                    i.isValid && i.destroy();
                                }, 15), s.setAnimNodeArr(i);
                            }) : 7 == t && (i.active = !1, e.isOpen = !0, RESOURCE.getPrefab("pdkG_hb_shake", function(t) {
                                e.hb_shake = cc.instantiate(t), e.hb_shake.parent = e.hbNode, e.hb_shake.position = cc.p(20, 0);
                            }), e.hbNode.on("touchend", function() {
                                null != e.newPlayer && void 0 != e.newPlayer && (e.newPlayer.removeAllChildren(), 
                                e.isOpen = !e.isOpen, e.isOpen || RESOURCE.getPrefab("pdkNewPlayer", function(t) {
                                    var i = cc.instantiate(t);
                                    i.parent = e.newPlayer, i.position = cc.p(0, 0);
                                    var n = i.getComponent("NewPlayer");
                                    n.setDbgScaleY(-1), n.setDdgPos(140, 80), n.setContent(pdkShowContent.getHBShow), 
                                    n.setTouch(function() {
                                        e.isOpen = !0;
                                    }), n.scheduleOnce(function() {
                                        e.isOpen = !0, i.isValid && i.destroy();
                                    }, 15), s.setAnimNodeArr(i);
                                }));
                            }));
                        } else e.hbNode.off("touchend");
                    });
                }
            },
            replayHoldCard: function(e, t) {
                1 == (e = this.getDisPos(e + 1)) ? (c.headCardType = 1, this.initHandCard(t, !0)) : 2 == e ? this.updateOtherCard(1, t) : 3 == e && this.updateOtherCard(2, t);
            },
            replayOutCard: function(e, t) {
                if (e = this.getDisPos(e), t.length > 0) if (1 == e) {
                    if (void 0 != this.cardLayer && null != this.cardLayer) {
                        for (var i = [], n = 0; n < this.cardLayer.childrenCount; n++) {
                            var a = this.cardLayer.children[n].getComponent("cardPoker").getServerString();
                            i.push(a);
                        }
                        for (var o = 0; o < i.length; o++) for (var s = 0; s < t.length; s++) i[o] == t[s] && i.splice(o, 1);
                        c.headCardType = 1, this.initHandCard(i, !0);
                    }
                } else if (2 == e) {
                    if (void 0 != this.replayHoldCardNode[1] && null != this.replayHoldCardNode[1]) {
                        for (var r = [], l = 0; l < this.replayHoldCardNode[1].childrenCount; l++) {
                            var d = this.replayHoldCardNode[1].children[l].getComponent("cardPoker").getServerString();
                            r.push(d);
                        }
                        for (var h = 0; h < t.length; h++) for (var u = 0; u < r.length; u++) if (r[u] == t[h]) {
                            r.splice(u, 1);
                            break;
                        }
                        this.updateOtherCard(1, r);
                    }
                } else if (3 == e && void 0 != this.replayHoldCardNode[2] && null != this.replayHoldCardNode[2]) {
                    for (var g = [], m = 0; m < this.replayHoldCardNode[2].childrenCount; m++) {
                        var f = this.replayHoldCardNode[2].children[m].getComponent("cardPoker").getServerString();
                        g.push(f);
                    }
                    for (var p = 0; p < t.length; p++) for (var v = 0; v < g.length; v++) if (g[v] == t[p]) {
                        g.splice(v, 1);
                        break;
                    }
                    this.updateOtherCard(2, g);
                }
            },
            updateOtherCard: function(e, t) {
                if (void 0 != this.replayHoldCardNode[e] && null != this.replayHoldCardNode[e]) {
                    this.replayHoldCardNode[e].removeAllChildren();
                    var i = t.length, n = 0, a = null;
                    for (var o in t = l.sortCards(t)) if (t.hasOwnProperty(o) && void 0 != t[o] && "" != t[o]) {
                        (a = cc.instantiate(this.cardPreFab)).parent = this.replayHoldCardNode[e], a.scale = .4;
                        var s = a.getComponent("cardPoker"), r = {
                            val: t[o]
                        };
                        s.initCard(r), a.y = 165, 1 == e ? a.x = 70 * (n - (i + 1) / 2 + 1) * .35 - 150 : 2 == e && (a.x = 250 + 70 * (n - (i + 1) / 2 + 1) * .35), 
                        this.cardNode[o] = a, n += 1;
                    }
                }
            },
            getReplayHandsCardNum: function(e) {
                return 1 == e ? this.cardLayer.childrenCount : 2 == e ? this.replayHoldCardNode[1].childrenCount : 3 == e ? this.replayHoldCardNode[2].childrenCount : void 0;
            },
            registEvent: function() {
                pdkEvent.registEvent(pdkEvent.eventName.aliveFHB, function(e) {
                    this.flyTime && clearTimeout(this.flyTime), this.flyTime = setTimeout(function() {
                        RESOURCE.getPrefab("pdkFlyFhb", function(e) {
                            if (this) {
                                var t = cc.instantiate(e);
                                t.parent = this.node, t.position.y = 50, t.zIndex = 99, t.runAction(cc.sequence(cc.moveTo(1, cc.p(t.x, t.y + 50)), cc.callFunc(function() {
                                    t.destroy();
                                })));
                            }
                        }.bind(this));
                    }.bind(this), 2e3), -1 == this.timeOutArr.indexOf(this.flyTime) && this.timeOutArr.push(this.flyTime);
                }.bind(this), this.node);
            },
            onDestroy: function() {
                cc.log("PdkScene场景销毁"), c.GameStatus = 0, r.setAAValue(), e("../tools/Loading").close(), 
                s.setBattle(null), this.OSTimeInterVal && clearInterval(this.OSTimeInterVal), this.callDown && clearInterval(this.callDown);
                var t = !0, i = !1, n = void 0;
                try {
                    for (var a, o = this.timeOutArr[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
                        var l = a.value;
                        l && clearInterval(l);
                    }
                } catch (e) {
                    i = !0, n = e;
                } finally {
                    try {
                        !t && o.return && o.return();
                    } finally {
                        if (i) throw n;
                    }
                }
            },
            lateUpdate: function(e) {
                if (this.cameraShake && this.cameraShake.started && this.cameraShake && this.cameraShake.startShake && this.LastTargetPos) {
                    var t = this.cameraShake.getShakePosint(e);
                    t.addSelf(this.LastTargetPos), this.camera.node.setPosition(t);
                }
            }
        }), cc._RF.pop();
    }, {
        "../common/Common": "Common",
        "../net/NetManager": "NetManager",
        "../net/ParseSocket": "ParseSocket",
        "../net/SendCMD": "SendCMD",
        "../tools/Dialog": "Dialog",
        "../tools/Loading": "Loading",
        "../tools/utils": "utils",
        "../tools/weixin": "weixin",
        "./Prop": "Prop",
        CameraShake: "CameraShake",
        Config: "Config",
        PdkDatamanager: "PdkDatamanager",
        PokerListenFunc: "PokerListenFunc"
    } ],
    PdkSmallOver_new: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "55eccw+0z9CVpxxNsAJs+CO", "PdkSmallOver_new");
        var n = e("Config"), a = e("SendCMD"), o = e("PdkDatamanager"), s = e("../common/Common"), r = e("../tools/weixin"), c = "comgame/smallOver/", l = {
            nextBankerSeat: 3,
            leftRound: 0,
            playerCount: 3,
            playerInfo: [ {
                seat: 1,
                mid: 0,
                name: "游客",
                icon: "",
                bombCount: 0,
                roundScore: 0,
                piaoScore: 0,
                piao: -1,
                totleScore: 532158,
                handCout: 0,
                cards: [ "3h", "3d", "4c", "5c", "7s", "7h", "7c", "8h", "9h", "9c", "Jd" ]
            }, {
                seat: 2,
                mid: 802,
                name: "胡磊",
                icon: "http://192.168.1.128:8080/commons-upload/img/robot.jpg",
                bombCount: 0,
                roundScore: 0,
                piaoScore: 0,
                piao: -1,
                totleScore: 348310,
                handCout: 13,
                cards: [ "3h", "3d", "4c", "5c", "7s", "7h", "7c", "8h", "9h", "9c", "Jd", "9c", "Jd" ]
            }, {
                seat: 3,
                mid: 803,
                name: "游客",
                icon: "YiFeng",
                bombCount: 0,
                roundScore: 0,
                piaoScore: 0,
                piao: -1,
                totleScore: 916600,
                handCout: 9,
                cards: [ "3h", "3d", "4c", "5c", "7s", "7h", "7c", "8h", "9h" ]
            } ],
            roomInfo: '{"room":102064,"roomowner":56877,"banker":3,"playednum":1,"createnum":0,"type":"81","ju":1,"players":3,"macard":"","proxyuid":0,"playe_type":15,"shouju_guize":0,"xianshi_paishu":1,"isGaiPai_":0,"zhaniao":15,"zuihou_shaodai":15,"lasttime_played_seatno":1,"now_played_seatno_":1,"winSeatNo":0,"zhuaMaSeatNo":3,"shouju3cFirst":0,"piao_fen":0,"per_num":3,"club_id":0,"pay_mode":0,"clubowner":0,"aa_kaifang":0,"club_name":"","aa_cost":0,"create_empty_room":0,"password":0,"fang_zuobi":0,"all_agree_diss":0,"wanfa_index":0,"pay_mid":0,"xinzhen":0,"baodi":0}',
            redSeat: 2,
            endStr: ""
        };
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.node.zIndex = 1, this.getJavaDataOk = !1, this.loadNum = 0, o.setPokerSmallOver(this.node), 
                this.redpacketData = null, this.btnParent = cc.find("content_layout", this.node).getComponent(cc.Layout), 
                this.leftBtn = cc.find("content_layout/shareBtn", this.node), this.leftBtnTxt = cc.find("txt", this.leftBtn).getComponent(cc.Label), 
                this.rightBtn = cc.find("content_layout/continue", this.node), this.rightBtnTxt = cc.find("txt", this.rightBtn).getComponent(cc.Label), 
                this.backBtn = cc.find("back", this.node), this.getMoneyTip = cc.find("getMoneydialog", this.node), 
                this.buttonLabel = cc.find("buttonLabel", this.node), this.buttonLabelTxt = this.buttonLabel.getComponent(cc.Label), 
                this.tishiDialog = cc.find("dialog", this.node), this.tiShiLabel = cc.find("dialogBg/desclabel", this.tishiDialog).getComponent(cc.Label), 
                this.tiShiOkBtn = cc.find("dialogBg/btn_yellow", this.tishiDialog);
                var e = this;
                cc.find("dialogBg/btn_yellow", this.getMoneyTip).on("click", function() {
                    e.getMoneyTip.active = !1;
                }, this), this.backBtn.on("click", this.outRoom, this), this.contentGold = cc.find("contentGold", this.node), 
                this.contentCG = cc.find("contentCG", this.node), this.contentGold.active = !1, 
                this.contentCG.active = !1;
            },
            start: function() {},
            setAction: function() {
                if (this.rightBtn.stopAllActions(), !n || 1 != n.ServerType) {
                    var e = cc.repeatForever(cc.sequence(cc.scaleTo(.35, 1), cc.scaleTo(.35, 1.1)));
                    this.rightBtn.runAction(e);
                }
            },
            setData: function(e, t) {
                this.data = null, e ? e = e : (e = l).playerInfo[0].mid = n.USER.mid, this.data = e, 
                this.callBackFunc = t, this.roomInfo = JSON.parse(e.roomInfo), this.redpacketData = null, 
                this.guanData = null;
                var i = this;
                "82" != this.roomInfo.type && "81" != this.roomInfo.type && "84" != this.roomInfo.type || a.outRoomSuccess(6), 
                this.node.active = !1, this.setAction(), this.timerOut = null, "81" == this.roomInfo.type ? (r.aldSendEvent("金币场", {
                    "小结算": "显示"
                }), i.requestJavaDataInitUI(this.roomInfo.type, e), this.timerOut = function() {
                    this.timerGetJavaData = setTimeout(function() {
                        if (0 == i.getJavaDataOk) {
                            if (i.loadNum >= 2) return console.error("3次请求失败，直接退到大厅811111"), s.switchScene("HallScene"), 
                            n.toHall = !1, void (i.timerGetJavaData && clearTimeout(i.timerGetJavaData));
                            i.requestJavaDataInitUI(i.roomInfo.type, e), i.loadNum = i.loadNum + 1, i.timerOut(), 
                            console.error("第" + i.loadNum + "次请求数据失败811111");
                        }
                    }, 5e3);
                }, this.timerOut()) : "84" == this.roomInfo.type ? (r.aldSendEvent("欢乐场", {
                    "小结算": "显示"
                }), i.requestJavaDataInitUI(this.roomInfo.type, e), this.timerOut = function() {
                    this.timerGetJavaData = setTimeout(function() {
                        if (0 == i.getJavaDataOk) {
                            if (i.loadNum >= 2) return console.error("3次请求失败，直接退到大厅 844444"), s.switchScene("HallScene"), 
                            n.toHall = !1, void (i.timerGetJavaData && clearTimeout(i.timerGetJavaData));
                            i.requestJavaDataInitUI(i.roomInfo.type, e), i.loadNum = i.loadNum + 1, i.timerOut(), 
                            console.error("第" + i.loadNum + "次请求数据失败8444444");
                        }
                    }, 5e3);
                }, this.timerOut()) : "82" == this.roomInfo.type ? (r.aldSendEvent("闯关场", {
                    "小结算": "显示"
                }), i.requestJavaDataInitUI(this.roomInfo.type, e), this.timerOut = function() {
                    this.timerGetJavaData = setTimeout(function() {
                        if (0 == i.getJavaDataOk) {
                            if (i.loadNum >= 2) return console.error("3次请求失败，直接退到大厅8222222"), s.switchScene("HallScene"), 
                            n.toHall = !1, void (i.timerGetJavaData && clearTimeout(i.timerGetJavaData));
                            i.requestJavaDataInitUI(i.roomInfo.type, e), i.loadNum = i.loadNum + 1, i.timerOut(), 
                            console.error("第" + i.loadNum + "次请求数据失败82222");
                        }
                    }, 5e3);
                }, this.timerOut()) : "83" == this.roomInfo.type && (r.aldSendEvent("好友场", {
                    "小结算": "显示"
                }), e.gameName = "好友场", this.backBtn.active = !1, i.node.active = !0, i.contentGold.active = !0, 
                i.initUIGold(e), i.clearDeskData());
            },
            requestJavaDataInitUI: function(e, t) {
                var i = this;
                null != e && ("81" == e ? JavaRequest.getSmallOverRedpacket({
                    playType: this.roomInfo.type,
                    type: this.roomInfo.ju
                }, function(e) {
                    i.redpacketData = e.data[0], t.gameName = "金币场", i.node && (i.node.active = !0), 
                    i.contentGold && (i.contentGold.active = !0), i.timerGetJavaData && clearTimeout(i.timerGetJavaData), 
                    i.getJavaDataOk = !0, i.loadNum = 0, console.log("data81111==", t), i.initUIGold(t), 
                    i.clearDeskData();
                }) : "82" == e ? JavaRequest.getGuanInfo(null, function(e) {
                    console.log("jdataaaaa ===", e);
                    var n = e.data[0];
                    i.guanData = n, t.gameName = "闯关场", i.timerGetJavaData && clearTimeout(i.timerGetJavaData), 
                    i.getJavaDataOk = !0, i.node && (i.node.active = !0), i.contentCG && (i.contentCG.active = !0), 
                    i.loadNum = 0, i.initUICG(t), i.clearDeskData();
                }) : "83" == e || "84" == e && JavaRequest.getSmallOverRedpacket({
                    playType: this.roomInfo.type,
                    type: this.roomInfo.ju
                }, function(e) {
                    i.redpacketData = e.data[0], t.gameName = "欢乐场", i.node && (i.node.active = !0), 
                    i.contentGold && (i.contentGold.active = !0), i.timerGetJavaData && clearTimeout(i.timerGetJavaData), 
                    i.getJavaDataOk = !0, i.loadNum = 0, i.initUIGold(t), i.clearDeskData();
                }));
            },
            clearDeskData: function() {
                var e = o.getBattle();
                e && e.deskCleanUp && e.deskCleanUp();
            },
            initUIGold: function(e) {
                this.win_lose_ani = cc.find("win_lose_ani", this.contentGold), this.g_glodK = cc.find("g_glodK", this.contentGold), 
                this.g_glodK.active = !1, this.goldNode = cc.find("gold", this.contentGold), this.goldNode.active = !1, 
                this.winGoldTxt = cc.find("winGoldTxt", this.contentGold).getComponent(cc.Label), 
                this.loseGoldTxt = cc.find("loseGoldTxt", this.contentGold).getComponent(cc.Label), 
                this.hongbao = cc.find("hongbao", this.contentGold), this.shupaiNumTxt = cc.find("shupaiNum", this.contentGold).getComponent(cc.Label), 
                this.zhadanNumTxt = cc.find("zhadanNum", this.contentGold).getComponent(cc.Label), 
                this.leftBtnTxt.string = "继续", this.leftBtnTxt.spacingX = 0, this.rightBtnTxt.string = "分享战绩", 
                this.rightBtnTxt.spacingX = -9, e && this.initDataGold(e);
            },
            initDataGold: function(e) {
                for (var t = this, i = {}, a = 0, o = e.playerInfo, c = !1, l = 0; l < o.length; l++) {
                    var d = o[l];
                    Number(d.mid) != Number(n.USER.mid) ? a += d.handCout : (i = d, "81" == this.roomInfo.type || "84" == this.roomInfo.type ? d.roundScore >= 0 && ("txt_ying", 
                    c = !0) : 0 == d.handCout && ("txt_ying", c = !0));
                }
                this.goldNode = c ? this.g_glodK : this.goldNode, this.goldNode.active = !0, "83" == this.roomInfo.type ? cc.loader.loadRes("pdkgame/friendYueJu/FriendYueju", cc.SpriteAtlas, function(e, i) {
                    c ? t.goldNode.getChildByName("Pos").getChildByName("gold").getComponent(cc.Sprite).spriteFrame = i.getSpriteFrame("icon_jifen") : t.goldNode.getComponent(cc.Sprite).spriteFrame = i.getSpriteFrame("icon_jifen");
                }) : (this.rightBtn.active = c, this.btnParent.paddingLeft = c ? 0 : 125, c ? n.isSpecial ? (this.rightBtn.active = !1, 
                t.btnParent.getComponent(cc.Layout).enabled = !1, t.leftBtn.x = 0) : this.btnParent.paddingLeft = 0 : (t.btnParent.getComponent(cc.Layout).enabled = !1, 
                t.leftBtn.x = 0)), t.win_lose_ani.removeAllChildren(), cc.loader.loadRes(c ? "pdkgame/Effects/g_win" : "pdkgame/Effects/g_lose", function(e, i) {
                    if (i) {
                        var n = cc.instantiate(i);
                        n.parent = t.win_lose_ani, n.position = cc.p(0, 0);
                    }
                }), "83" != this.roomInfo.type && this.showHongbao(), this.winGoldTxt.node.active = !1, 
                this.loseGoldTxt.node.active = !1, i.roundScore > 0 ? (this.winGoldTxt.node.active = !0, 
                this.loseGoldTxt.node.active = !1, this.winGoldTxt.string = "+" + s.numberThousands(i.roundScore)) : (this.winGoldTxt.node.active = !1, 
                this.loseGoldTxt.node.active = !0, this.loseGoldTxt.string = s.numberThousands(i.roundScore)), 
                0 != i.handCout ? this.shupaiNumTxt.string = "输牌" + i.handCout + "张" : this.shupaiNumTxt.string = "赢牌" + a + "张", 
                this.zhadanNumTxt.string = "炸弹 " + i.bombCount, this.leftBtn.on("click", this.nextGameBtnClick, this), 
                this.rightBtn.on("click", function() {
                    if (r.aldSendEvent(e.gameName, {
                        "小结算": "炫耀分享"
                    }), "83" == this.roomInfo.type) {
                        var t = cc.director.getVisibleSize();
                        s.print("wxInfo ==", t), r.onMenuShareAppMessage({
                            cbSucc: function() {
                                r.aldSendEvent(e.gameName, {
                                    "小结算": "炫耀分享成功"
                                });
                            },
                            cbFail: function() {
                                r.aldSendEvent(e.gameName, {
                                    "小结算": "炫耀分享失败"
                                });
                            }
                        });
                    } else r.onMenuShareAppMessage({
                        cbSucc: function() {
                            r.aldSendEvent(e.gameName, {
                                "小结算": "炫耀分享成功"
                            });
                        },
                        cbFail: function() {
                            r.aldSendEvent(e.gameName, {
                                "小结算": "炫耀分享失败"
                            });
                        }
                    });
                }.bind(this));
            },
            initUICG: function(e) {
                console.log("initUICG === 闯关场"), this.index = cc.find("titleIndex", this.contentCG).getComponent(cc.Label), 
                this.titlebg1 = cc.find("title/blueleft", this.contentCG).getComponent(cc.Sprite), 
                this.titlebg2 = cc.find("title/blueright", this.contentCG).getComponent(cc.Sprite), 
                this.titlesp = cc.find("title/resultTxt", this.contentCG).getComponent(cc.Sprite), 
                this.levelNode = cc.find("levelNode", this.contentCG), this.item = cc.find("item", this.contentCG), 
                this.item.active = !1, e && this.initDataCG(e);
            },
            initDataCG: function(t) {
                console.log("initDataCG-----》");
                for (var i = this, a = 0, l = "txt_sb", d = 0; d < t.playerInfo.length; d++) {
                    var h = t.playerInfo[d];
                    Number(h.mid) == Number(n.USER.mid) && 0 == h.handCout && (l = "txt_cg", a = 1);
                }
                var u = "txt_sb" == l ? "bg_blue" : "bg_red";
                cc.loader.loadRes(c + u, cc.SpriteFrame, function(e, t) {
                    i.titlebg1.spriteFrame = t, i.titlebg2.spriteFrame = t;
                }), cc.loader.loadRes(c + l, cc.SpriteFrame, function(e, t) {
                    i.titlesp.spriteFrame = t;
                });
                var g = function(e, t, i) {
                    1 == t ? (cc.loader.loadRes(c + "bg_huang", cc.SpriteFrame, function(t, i) {
                        e.bg.spriteFrame = i;
                    }), e.txt.node.color = new cc.Color(186, 106, 24)) : (cc.loader.loadRes(c + "bg_hui", cc.SpriteFrame, function(t, i) {
                        e.bg.spriteFrame = i;
                    }), e.txt.node.color = new cc.Color(139, 139, 139), 1 == i && (e.ing.active = !0, 
                    e.ing.stopAllActions(), e.ing.runAction(cc.repeatForever(cc.rotateBy(2.5, 360)))));
                };
                this.guan = 0;
                if (i.guanData) {
                    var m = i.guanData;
                    if (i.guan = 1 == m.success ? m.guan : m.guan + 1, 0 == m.guan && 1 == m.success && 0 == m.isRelive && 2 == m.reviveTimes && (i.guan = 7), 
                    n.curGuan = m.guan < 7 ? m.guan + 1 : 1, function() {
                        n.justOne = !0, i.index.string = "第 " + (i.guan || 0) + " 关";
                        for (var e = i.item, t = 1; t <= 7; t++) {
                            var s = cc.instantiate(e);
                            if (s.parent = i.levelNode, s.active = !0, s.x = 120 * (t - 1) - 360, s.y = 0, s.bg = cc.find("bg", s).getComponent(cc.Sprite), 
                            s.txt = cc.find("txtLv", s).getComponent(cc.Label), s.ing = cc.find("ing", s), s.txt.string = "" + t, 
                            s.ing.active = !1, 1 == a) if (t <= i.guan) g(s, 1, 0); else {
                                var r = 0;
                                t == i.guan + 1 && (r = 1), g(s, 0, r);
                            } else if (t < i.guan) g(s, 1, 0); else {
                                var c = 0;
                                t == i.guan && (c = 1), g(s, 0, c);
                            }
                        }
                        var l = o.getBattle();
                        l && l.updateJuRedpack && l.updateJuRedpack(i.guan);
                    }(), 1 == a) if (i.leftBtn.active = !0, i.leftBtnTxt.string = "继续闯关", i.buttonLabelTxt.string = "继续闯关", 
                    i.rightBtnTxt.string = "炫耀分享", i.rightBtnTxt.spacingX = -9, n && 1 == n.ServerType ? (i.rightBtn.active = !1, 
                    i.btnParent.getComponent(cc.Layout).enabled = !1, i.leftBtn.x = 0) : n.isSpecial ? (i.rightBtn.active = !1, 
                    i.btnParent.getComponent(cc.Layout).enabled = !1, i.leftBtn.x = 0) : (i.leftBtn.active = !1, 
                    i.rightBtn.active = !0, i.btnParent.getComponent(cc.Layout).enabled = !1, i.rightBtn.x = 0, 
                    i.buttonLabel.active = !0, i.buttonLabel.on("click", i.nextGameBtnClick, i)), i.rightBtn.on("click", function() {
                        r.aldSendEvent(t.gameName, {
                            "小结算": "炫耀分享"
                        }), n.shareSwitch ? (r.onMenuShareAppMessage({}), i.tiShiLabel.scheduleOnce(function() {
                            i.tishiDialog.active = !0, i.tiShiLabel.string = "分享成功", i.tiShiOkBtn.targetOff(i), 
                            i.tiShiOkBtn.on("click", function() {
                                i.nextGameBtnClick(), i.tishiDialog.active = !1;
                            }, i);
                        }, 1)) : r.onMenuShareAppMessage({
                            cbSucc: function() {
                                r.aldSendEvent(t.gameName, {
                                    "小结算": "炫耀分享成功"
                                }), i.nextGameBtnClick();
                            },
                            cbFail: function() {
                                r.aldSendEvent(t.gameName, {
                                    "小结算": "炫耀分享失败"
                                });
                            }
                        });
                    }.bind(i)), 7 == i.guan) if (i.leftBtnTxt.string = "再次闯关", i.leftBtn.active = !0, 
                    i.buttonLabel.active = !1, i.rightBtn.active = !1, i.btnParent.getComponent(cc.Layout).enabled = !1, 
                    i.leftBtn.x = 0, m.money > 0) {
                        i.leftBtn.on("click", i.nextGameBtnClick, i);
                        var f = o.getUserIsNew() ? function() {} : null;
                        s.redPacketTip(m.money, function(e) {
                            cc.find("dialogBg/desclabel", i.getMoneyTip).getComponent(cc.Label).string = "恭喜您成功领取" + e.data[0].money + "元红包", 
                            i.getMoneyTip.active = !0;
                        }, f);
                    } else i.leftBtn.on("click", i.rePlayClick, i); else i.leftBtn.on("click", i.nextGameBtnClick, i); else i.leftBtnTxt.string = "再次闯关", 
                    i.buttonLabelTxt.string = "再次闯关", i.rightBtnTxt.spacingX = -9, 1 == m.isRelive ? (n && 1 == n.ServerType ? (i.rightBtn.active = !1, 
                    i.btnParent.getComponent(cc.Layout).enabled = !1, i.leftBtn.x = 0) : 1 == i.guan ? (i.rightBtn.active = !1, 
                    i.btnParent.getComponent(cc.Layout).enabled = !1, i.leftBtn.x = 0) : (i.leftBtn.active = !1, 
                    i.rightBtn.active = !0, i.btnParent.getComponent(cc.Layout).enabled = !1, i.rightBtn.x = 0, 
                    i.buttonLabel.active = !0, i.buttonLabel.on("click", i.rePlayClick, i)), i.rightBtnTxt.fontSize = 33, 
                    i.leftBtn.on("click", i.rePlayClick, i), JavaRequest.resurrectionInfo(function() {
                        if (i) {
                            if (o.getIsFHB()) {
                                var t = i.rightBtn.getChildByName("fhb");
                                if (!t) return;
                                return t.active = !0, i.rightBtnTxt.string = "立即复活", i.rightBtn.width += 40, i.rightBtnTxt.node.x -= 45, 
                                t.x -= 13, void i.rightBtn.on("click", function() {
                                    if (o.getFHCount() > 0) {
                                        if (i.isReqResurrection) return;
                                        i.isReqResurrection = !0, JavaRequest.resurrection(function(e) {
                                            i.isReqResurrection = !1, e && e.result && e.data && (1 == (e = e.data[0]).isRelive ? (i.nextGameBtnClick(), 
                                            pdkEvent.emitEvent(pdkEvent.eventName.aliveFHB)) : s.toastTip(pdkShowContent.fhbIsNodeShow));
                                        }.bind(this));
                                    } else e("../tools/Dialog").create({
                                        content: pdkShowContent.fhbNotEnough,
                                        btnstring: [ 1, "确定" ]
                                    });
                                }.bind(this));
                            }
                            0 == m.reliveType ? (n.isSpecial ? i.rightBtnTxt.string = "立即复活" : i.rightBtnTxt.string = "分享到群复活", 
                            i.rightBtn.on("click", i.shareBtnClick.bind(i, 0))) : (i.rightBtnTxt.string = "求助好友复活", 
                            i.rightBtn.on("click", i.shareBtnClick.bind(i, 1)));
                        }
                    })) : (i.rightBtn.active = !1, i.leftBtn.on("click", i.rePlayClick, i));
                }
            },
            showHongbao: function() {
                var e = this.redpacketData.process;
                this.redpacketData && (0 == this.redpacketData.money ? this.hongbao.active = !1 : (e = this.redpacketData.countNumLen, 
                this.hongbao.active = !0, this.goldNode.x -= 140, this.winGoldTxt.node.x -= 140, 
                this.loseGoldTxt.node.x -= 140, cc.find("moneyTxt", this.hongbao).getComponent(cc.Label).string = parseFloat(this.redpacketData.money).toFixed(2)));
                var t = o.getBattle();
                t && t.updateJuRedpack && t.updateJuRedpack(e);
            },
            nextGameBtnClick: function() {
                r.aldSendEvent(this.data.gameName, {
                    "小结算": "继续"
                });
                var e = o.getBattle();
                o.setPokerSmallOverData(null);
                var t = o.getPokerTotalOverData();
                if (null != t && void 0 != t && RESOURCE.getPrefab("pdkTotalOver", function(e) {
                    var i = cc.instantiate(e), n = i.getComponent("PDKTotalOver");
                    null != n && n.initData(t), cc.director.getScene().getChildByName("Canvas").addChild(i, 6);
                }), null != e && void 0 != e) {
                    "82" == this.roomInfo.type && e.updateNewPlayerState(), e.data1022 = {};
                    var i = n.curGuan;
                    "81" != this.roomInfo.type && "84" != this.roomInfo.type || !this.redpacketData || void 0 == this.redpacketData.process || null == this.redpacketData.process || (i = this.redpacketData.process + 1), 
                    e.updateJuRedpack(i), e.deskCleanUp(), a.send2026(0), "82" == this.roomInfo.type || "81" == this.roomInfo.type || "84" == this.roomInfo.type ? a.sendPaodekuaiCreatRoom_new({
                        type: this.roomInfo.type,
                        data: this.roomInfo.ju
                    }) : a.sendData([ 1005 ]);
                }
                a.sendData([ 2531 ]), this.closeWin();
            },
            closeWin: function() {
                this.callBackFunc && this.callBackFunc(), this.timerGetJavaData && clearTimeout(this.timerGetJavaData), 
                o.setPokerSmallOver(null), console.log("closeWin清掉小结算"), this.rightBtn.active = !0, 
                this.btnParent.getComponent(cc.Layout).enabled = !0, this.node.removeFromParent();
            },
            outRoom: function() {
                this && this.data && r.aldSendEvent(this.data.gameName, {
                    "小结算": "返回"
                }), a.sendData([ 2531 ]), "82" != this.roomInfo.type && "81" != this.roomInfo.type && "84" != this.roomInfo.type || n.toHall && 1 == n.toHall && (this.callBackFunc = null, 
                this.closeWin(), s.switchScene("HallScene"), n.toHall = !1);
            },
            rePlayClick: function() {
                var e = this;
                n.justOne && (n.justOne = !1, r.aldSendEvent(e.data.gameName, {
                    "小结算": "再次闯关"
                }), JavaRequest.clearGuanInfo(null, function() {
                    e.nextGameBtnClick();
                }));
            },
            shareBtnClick: function(e) {
                var t = this;
                function i() {
                    n.justOne = !0;
                    var i = t.guanData;
                    RESOURCE.getPrefab("comShareTip", function(a) {
                        t.shareTip = cc.instantiate(a), n.justOne = !0, s.maskFadeIn(t.shareTip.getChildByName("bgmask"), t.shareTip.getChildByName("dialogBg")), 
                        t.node.addChild(t.shareTip), t.shareTip.getComponent("ShareTip").initData(1, e, i, function() {
                            t.nextGameBtnClick();
                        }, function(e) {
                            t.guanData.reliveProgress = e;
                        });
                    });
                }
                r.aldSendEvent(t.data.gameName, {
                    "小结算": "分享到群"
                }), n.justOne && (n.justOne = !1, n.isSpecial ? r.rewardedVideoAd(function() {
                    JavaRequest.adToRevive(function(e) {
                        1 == e.data[0].isRelive && t.nextGameBtnClick();
                    });
                }) : n.shareSwitch ? (n.justOne = !0, r.onMenuShareAppMessage({
                    imageNum: 6
                }), JavaRequest.revive2(function(e) {
                    1 == e.data[0].isRelive && t.tiShiLabel.scheduleOnce(function() {
                        t.tishiDialog.active = !0, t.tiShiLabel.string = "恭喜您已成功复活，\n 点击‘确定’重新挑战本关", t.tiShiOkBtn.targetOff(t), 
                        t.tiShiOkBtn.on("click", function() {
                            t.nextGameBtnClick(), t.tishiDialog.active = !1;
                        }, t);
                    }, 1);
                })) : r.onMenuShareAppMessage({
                    cbSucc: function(e) {
                        r.aldSendEvent(t.data.gameName, {
                            "小结算": "分享到群成功"
                        }), n.justOne = !0, e.shareTickets ? wx.getShareInfo({
                            shareTicket: e.shareTickets[0],
                            complete: function(e) {
                                JavaRequest.shareGroup({
                                    encryptedData: e.encryptedData,
                                    iv: e.iv
                                }, function(e) {
                                    1 == e.data[0].isRelive && t.nextGameBtnClick();
                                });
                            }
                        }) : (s.toastTip("需要分享到微信群才可以复活哦！"), i());
                    },
                    cbFail: function(e) {
                        r.aldSendEvent(t.data.gameName, {
                            "小结算": "分享到群失败"
                        }), i();
                    }
                }));
            }
        }), cc._RF.pop();
    }, {
        "../common/Common": "Common",
        "../tools/Dialog": "Dialog",
        "../tools/weixin": "weixin",
        Config: "Config",
        PdkDatamanager: "PdkDatamanager",
        SendCMD: "SendCMD"
    } ],
    PokerListenFunc: [ function(e, t, i) {
        "use strict";
        function n(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        cc._RF.push(t, "27754ldXAdFPrYhKrOP+Zwv", "PokerListenFunc");
        var a = e("PdkDatamanager"), o = e("../common/Common"), s = {}, r = {
            A: 14,
            2: 15,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            T: 10,
            J: 11,
            Q: 12,
            K: 13
        }, c = {
            s: 4,
            h: 3,
            c: 2,
            d: 1
        };
        s.resetData = function() {
            this.fitCards = [], this.HandCards = [];
        }, s.initallow4band2SelectData = function(e) {
            this.allow4band2 = e;
        }, s.initallow4band3SelectData = function(e) {
            this.allow4band3 = e;
        }, s.getFitCards = function(e, t) {
            return e && e.outType && (1 == e.outType || 2 == e.outType) ? this.sortFitCardsNum() : e && e.outType && 6 == e.outType ? this.sortFitCardsNumByLiandui() : e && e.outType && 5 == e.outType && this.sortFitCardsNumByshunzi(e), 
            t ? this.romoveCutBoomFitCards() : this.fitCards;
        }, s.romoveCutBoomFitCards = function() {
            for (var e = [], t = [], i = [], n = 0; n < this.fitCards.length; n++) {
                var a = this.fitCards[n];
                this.isBoom(a) ? e.push(a) : t.push(a);
            }
            for (var o = [], s = 0; s < t.length; s++) for (var r = t[s], c = !1, l = 0; l < r.length; l++) {
                for (var d = r[l], h = this.getSortValue(d), u = 0; u < e.length; u++) {
                    var g = e[u];
                    if (h == this.getSortValue(g[0])) {
                        c = !0;
                        break;
                    }
                }
                if (c) {
                    o.push(s);
                    break;
                }
            }
            o.sort(function(e, t) {
                return t - e;
            });
            for (var m = 0; m < o.length; m++) {
                var f = o[m];
                t.splice(f, 1);
            }
            for (var p = 0; p < t.length; p++) {
                var v = t[p];
                i.push(v);
            }
            for (var C = 0; C < e.length; C++) {
                var y = e[C];
                i.push(y);
            }
            for (var S = [], b = 0; b < i.length; b++) {
                var k = i[b];
                S[b] = k;
            }
            return S;
        }, s.sortFitCardsNumByshunzi = function(e) {
            if (this.fitCards || e) {
                for (var t = [], i = [], n = [], a = [], o = 0; o < this.fitCards.length; o++) {
                    var s = this.fitCards[o];
                    this.isBoom(s) ? i.push(s) : n.push(s);
                }
                for (var r = e.outCards.length, c = (this.getSortValue(e.outCards[0]), []), l = 0; l < n.length; l++) {
                    for (var d = n[l], h = this.getSortValue(d[0]), u = !1, g = 0; g < i.length; g++) {
                        var m = i[g], f = this.getSortValue(m[0]);
                        h + r > f && h <= f && (u = !0);
                    }
                    0 == u && i.length > 0 && (a.push(d), c.push(l));
                }
                c.sort(function(e, t) {
                    return t - e;
                });
                for (var p = 0; p < c.length; p++) {
                    var v = c[p];
                    n.splice(v, 1);
                }
                for (var C = 0; C < a.length; C++) {
                    var y = a[C];
                    t.push(y);
                }
                for (var S = 0; S < i.length; S++) {
                    var b = i[S];
                    t.push(b);
                }
                for (var k = 0; k < n.length; k++) {
                    var w = n[k];
                    t.push(w);
                }
                for (var I = 0; I < t.length; I++) {
                    var N = t[I];
                    this.fitCards[I] = N;
                }
            }
        }, s.sortFitCardsNumByLiandui = function() {
            if (void 0 != this.fitCards && null != this.fitCards || void 0 != this.HandCards && null != this.HandCards) {
                for (var e = this.changeCardValue(this.HandCards), t = [], i = 0; i < this.fitCards.length; i++) {
                    var n = this.fitCards[i];
                    if (this.isBoom(n)) break;
                    t.push(n);
                }
                if (!(t.length < 2)) {
                    for (var a = 0; a < t.length; a++) {
                        var o = t[a];
                        o.num = [];
                        for (var s = 0, c = 0, l = 0; l < o.length; l++) {
                            var d = o[l];
                            if ((l + 1) % 2 == 0) {
                                var h = d.substr(0, 1);
                                s += e[r[h]].count, 0 == c && (c = r[h]), c > r[h] && (c = r[h]), o.num.total = s, 
                                o.num.minValue = c;
                            }
                        }
                    }
                    t.sort(function(e, t) {
                        if (e.num && t.num && e.num.total && t.num.total) {
                            if (e.num.total < t.num.total) return -1;
                            if (e.num.total == t.num.total && e.num.minValue && t.num.minValue) return e.num.minValue - t.num.minValue;
                        }
                        return 1;
                    });
                    for (var u = 0; u < t.length; u++) {
                        var g = t[u];
                        this.fitCards[u] = g;
                    }
                }
            }
        }, s.sortFitCardsNum = function() {
            if (void 0 != this.fitCards && null != this.fitCards || void 0 != this.HandCards && null != this.HandCards) {
                for (var e = 0; e < this.fitCards.length; e++) {
                    var t = this.fitCards[e], i = t[0].substr(0, 1);
                    t.num = 0;
                    for (var n = 0; n < this.HandCards.length; n++) {
                        i == this.HandCards[n].substr(0, 1) && (t.num = t.num + 1);
                    }
                    t.length != t.num && 4 == t.num && (t.num = 5);
                }
                this.fitCards.sort(function(e, t) {
                    if (e.num && t.num) {
                        var i = e[0].sub(0, 1), n = t[0].sub(0, 1);
                        return e.num == t.num ? r[i] - r[n] : e.num - t.num;
                    }
                });
            }
        }, s.getCardBottomValue = function(e, t) {
            var i = {
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 1,
                6: 2,
                7: 3,
                8: 4,
                9: 4,
                10: 4
            }, n = {};
            for (var a in t) if (t.hasOwnProperty(a)) {
                var o = t[a], s = o.substr(0, 1);
                void 0 != n[r[s]] && null != n[r[s]] || (n[r[s]] = {}, n[r[s]].count = 0, n[r[s]].cards = []), 
                n[r[s]].count = n[r[s]].count + 1, n[r[s]].cards.push(o);
            }
            for (var c = [], l = null, d = 3; d <= 16; ++d) {
                var h = n[d];
                if (null != h && void 0 != h) {
                    if (h.count >= i[e]) if (null == l && c.push({
                        bottomPoint: d
                    }), 7 == e) {
                        var u = c.length - 1;
                        u < 0 && (u = 0);
                        var g = c[u].bottomPoint;
                        null != l ? l - g + 1 < t.length / 5 && (l = d) : l = d;
                    } else l = d;
                } else if (null != l && void 0 != l) {
                    var m = c.length - 1;
                    m < 0 && (m = 0), c[m].topPoint = l, l = null;
                }
            }
            var f = 0, p = 15;
            for (var v in c) if (c.hasOwnProperty(v)) {
                var C = c[v], y = C.topPoint - C.bottomPoint + 1;
                y > f && (f = y, p = C.bottomPoint);
            }
            if (7 == e) {
                var S = f;
                if (5 * f != t.length) {
                    for (var b = f; b >= 2; --b) if (5 * b == t.length) {
                        S = b;
                        break;
                    }
                    p = p + f - S, f = S;
                }
            }
            return {
                bottom: p,
                length: f
            };
        }, s.getSoundPath = function(e, t) {
            return -1 == e ? "pass_" + o.random(1, 2) : 1 == e ? "single_" + this.getCardTypeValue(e, t) : 2 == e ? "double_" + this.getCardTypeValue(e, t) : 3 == e ? "three_2" : 4 == e ? "zhadan" : 5 == e ? "shunzi" : 6 == e ? "liandui" : 7 == e ? "feiji" : 8 == e ? "sidai2" : 9 == e ? "sidai3" : 10 == e ? "sidai1" : "";
        }, s.getCardTypeValue = function(e, t) {
            if (!(e < 1 || e > 3)) return t[0].substr(0, 1);
        }, s.arrIsChain = function(e, t) {
            var i = [], n = {
                5: {
                    count: 1,
                    length: 5
                },
                6: {
                    count: 2,
                    length: 2
                },
                7: {
                    count: 3,
                    length: 2
                }
            }, a = 0;
            for (var o in e) if (e.hasOwnProperty(o)) {
                var s = e[o];
                a += s, s >= n[t].count && i.push(r[o]);
            }
            i.sort(function(e, t) {
                return e - t;
            });
            var c = !0, l = 0;
            if (7 != t) {
                for (var d = 0; d < i.length - 1; ++d) i[d + 1] - i[d] == 1 && 15 != i[d + 1] || (c = !1);
                l = i.length;
            } else {
                for (var h = [], u = [], g = 0; g < i.length; g++) {
                    var m = i[g], f = i[g + 1];
                    u.push(m), void 0 != f && null != f ? f - m != 1 && (h.push(u), u = []) : (h.push(u), 
                    u = []);
                }
                for (var p in h) if (h.hasOwnProperty(p)) {
                    var v = h[p].length;
                    v > l && (l = v);
                }
                if (5 * l != a) {
                    for (var C = l, y = l; y > n[t].length; --y) if (5 * y == a) {
                        C = y;
                        break;
                    }
                    l = C;
                }
            }
            return l < n[t].length && (c = !1), {
                isChain: c,
                chainLength: l
            };
        }, s.rightSingleCheckEnableCards = function(e) {
            var t = [];
            for (var i in e) if (e.hasOwnProperty(i)) {
                var n = e[i], a = n.substr(0, 1);
                t[r[a]] || (t[r[a]] = [], t[r[a]].count = 0, t[r[a]].cards = []), t[r[a]].count = t[r[a]].count + 1, 
                t[r[a]].cards.push(n);
            }
            var o = {
                1: [],
                2: [],
                3: [],
                4: [],
                5: []
            };
            for (var s in t) if (t.hasOwnProperty(s)) {
                var c = t[s];
                o[c.count].push(c);
            }
            for (var l = [], d = 1; d <= 5; d++) {
                var h = o[d];
                if (1 != d) for (var u in h) if (h.hasOwnProperty(u)) {
                    var g = h[u];
                    for (var m in g.cards) if (g.cards.hasOwnProperty(m)) {
                        var f = g.cards[m];
                        l[f] = f;
                    }
                }
            }
            for (var p = 15; p >= 3; --p) {
                var v = t[p];
                if (v) {
                    for (var C = 0; C < v.cards.length; C++) {
                        var y = v.cards[C];
                        l[y] = y;
                    }
                    break;
                }
            }
            for (var S = [], b = [], k = 3; k < 15; ++k) {
                var w = t[k];
                w && b.push(k), w && 14 != k || (S.push(b), b = []);
            }
            for (var I in S) if (S.hasOwnProperty(I)) {
                var N = S[I];
                if (N.length >= 5) for (var T = 0; T < N.length; ++T) for (var R = t[N[T]].cards, P = 0; P < R.length; ++P) {
                    var D = R[P];
                    l[D] = D;
                }
            }
            return o[3].length > 0 || o[4].length > 0 ? e : l;
        }, s.getAllCanSendCardArr = function(e) {
            this.getSingleTypeInArr(e, 1), this.getSingleTypeInArr(e, 2), this.getSingleTypeInArr(e, 3), 
            this.getSingleTypeInArr(e, 4), this.getChainInArr(e, 5), this.getChainInArr(e, 6), 
            this.getChainInArr(e, 7);
        }, s.getSingleTypeInArr = function(e, t) {
            for (var i = {
                1: {
                    count: 1,
                    lenght: 1
                },
                2: {
                    count: 2,
                    lenght: 1
                },
                3: {
                    count: 3,
                    lenght: 1
                },
                4: {
                    count: 4,
                    lenght: 1
                }
            }, n = 3; n <= 15; n++) {
                var a = e[n], o = [];
                if (a && a.count == i[t].count) {
                    for (var s in a.cards) if (a.cards.hasOwnProperty(s)) {
                        var r = a.cards[s];
                        o.push(r);
                    }
                    if (3 == t) for (var c = this.getSingleCardToTypeThree(e, o, 1), l = 0; l < c.length; l++) {
                        var d = c[l];
                        o.push(d);
                    }
                    this.fitCards.push(o);
                }
            }
        }, s.getChainInArr = function(e, t) {
            for (var i = {
                5: {
                    count: 1,
                    lenght: 5
                },
                6: {
                    count: 2,
                    lenght: 2
                },
                7: {
                    count: 3,
                    lenght: 2
                }
            }, n = [], a = 3; a < 15; a++) {
                var o = e[a];
                if (o && o.count >= i[t].count) {
                    for (var s = 0; s < i[t].count; s++) n.push(o.cards[s]);
                    14 == a && n.length / i[t].count >= i[t].lenght && this.fitCards.push(n);
                } else {
                    if (n.length / i[t].count >= i[t].lenght) {
                        if (7 == t) for (var r = this.getSingleCardToTypeThree(e, n, n.length / 3), c = 0; c < r.length; c++) {
                            var l = r[c];
                            n.push(l);
                        }
                        this.fitCards.push(n);
                    }
                    n = [];
                }
            }
        }, s.getFitCardsByType = function(e, t) {
            this.resetData(), this.HandCards = t;
            var i = this, n = [];
            for (var a in t) if (t.hasOwnProperty(a)) {
                var o = t[a], s = o.substr(0, 1);
                n[r[s]] || (n[r[s]] = [], n[r[s]].count = 0, n[r[s]].cards = []), n[r[s]].count = n[r[s]].count + 1, 
                n[r[s]].cards.push(o);
            }
            if (void 0 == e.outType || null == e.outType || -1 == e.outType) return this.getAllCanSendCardArr(n), 
            t;
            var c, l, d = e.outType, h = this.getCardBottomValue(d, e.outCards);
            c = h.bottom, l = h.length;
            var u = {
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 1,
                6: 2,
                7: 3,
                8: 4,
                9: 4,
                10: 4
            }, g = [], m = function(e) {
                g.push(e);
            }, f = function(e, t, n) {
                var a = {
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4
                };
                n || (n = 0);
                for (var o = 3; o <= 15; o++) {
                    var s = e[o];
                    if (s && s.count >= u[t] && (4 != s.count || 4 == t)) {
                        var r = [];
                        if (o > n) {
                            for (var c = 0; c < s.cards.length; c++) {
                                var l = s.cards[c];
                                m(l);
                            }
                            for (var d = 0; d < a[t]; d++) {
                                var h = s.cards[d];
                                r.push(h);
                            }
                        }
                        if (3 == t && r.length > 0) for (var g = i.getSingleCardToTypeThree(e, r, 1), f = 0; f < g.length; f++) {
                            var p = g[f];
                            r.push(p);
                        }
                        r.length > 0 && i.fitCards.push(r);
                    }
                }
            }, p = function(e) {
                for (var t in e) if (e.hasOwnProperty(t)) {
                    var i = e[t];
                    m(i);
                }
            };
            return d < 4 ? (f(n, d, c), f(n, 4), function(e, t, n) {
                var a = {
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4
                };
                n || (n = 0);
                for (var o = 3; o <= 15; o++) {
                    var s = e[o];
                    if (s && s.count >= u[t] && 4 == s.count && 4 != t) {
                        var r = [];
                        if (o > n) {
                            for (var c = 0; c < s.cards.length; c++) {
                                var l = s.cards[c];
                                m(l);
                            }
                            for (var d = 0; d < a[t]; d++) {
                                var h = s.cards[d];
                                r.push(h);
                            }
                        }
                        if (3 == t && r.length > 0) for (var g = i.getSingleCardToTypeThree(e, r, 1), f = 0; f < g.length; f++) {
                            var p = g[f];
                            r.push(p);
                        }
                        r.length > 0 && i.fitCards.push(r);
                    }
                }
            }(n, d, c), 3 == d && g.length > 0 && 0 == this.isBoom(g, e) && p(t)) : 4 == d ? f(n, d, c) : (function(e, t, n, a) {
                for (var o = {
                    5: 1,
                    6: 2,
                    7: 3,
                    8: 4,
                    9: 4,
                    10: 4
                }, s = 3; s <= 15; s++) {
                    var r = e[s];
                    if (s > n && r && r.count >= u[t] && (4 != r.count || 6 == t || 7 == t)) {
                        for (var c = s, l = !0, d = 0; d <= a - 1; ++d) {
                            var h = e[c + d];
                            if (h && 4 == h.count && (6 == t || 7 == t)) {
                                l = !1;
                                break;
                            }
                            if (!h || h.count < u[t] || c + d >= 15) {
                                l = !1;
                                break;
                            }
                        }
                        if (l) {
                            for (var g = [], f = 0; f <= a - 1; ++f) {
                                var p = e[c + f];
                                for (var v in p.cards) if (p.cards.hasOwnProperty(v)) {
                                    var C = p.cards[v];
                                    m(C);
                                }
                                for (var y = 0; y < o[t]; ++y) g.push(p.cards[y]);
                            }
                            if (7 == t && g.length > 0) for (var S = i.getSingleCardToTypeThree(e, g, a), b = 0; b < S.length; b++) {
                                var k = S[b];
                                g.push(k);
                            }
                            g.length > 0 && i.fitCards.push(g);
                        }
                    }
                }
            }(n, d, c, l), f(n, 4), function(e, t, n, a) {
                for (var o = {
                    5: 1,
                    6: 2,
                    7: 3,
                    8: 4,
                    9: 4,
                    10: 4
                }, s = 3; s <= 15; s++) {
                    var r = e[s];
                    if (s > n && r && r.count >= u[t] && (6 == t || 7 == t)) {
                        for (var c = s, l = !0, d = !1, h = 0; h <= a - 1; ++h) {
                            var g = e[c + h];
                            if (g && 4 == g.count && (d = !0), !g || g.count < u[t] || c + h >= 15) {
                                l = !1;
                                break;
                            }
                        }
                        if (0 == d && (l = !1), l) {
                            for (var f = [], p = 0; p <= a - 1; ++p) {
                                var v = e[c + p];
                                for (var C in v.cards) if (v.cards.hasOwnProperty(C)) {
                                    var y = v.cards[C];
                                    m(y);
                                }
                                for (var S = 0; S < o[t]; ++S) f.push(v.cards[S]);
                            }
                            if (7 == t && f.length > 0) for (var b = i.getSingleCardToTypeThree(e, f, a), k = 0; k < b.length; k++) {
                                var w = b[k];
                                f.push(w);
                            }
                            f.length > 0 && i.fitCards.push(f);
                        }
                    }
                }
            }(n, d, c, l), 7 != d && 8 != d && 9 != d || g.length > 0 && p(t)), g;
        }, s.getMaxSingleCardValue = function(e) {
            var t = 0;
            for (var i in e) if (e.hasOwnProperty(i)) {
                var n = e[i], a = this.getSortValue(n);
                a >= t && (t = a);
            }
            return t;
        }, s.getSortValue = function(e) {
            var t = e.substr(0, 1);
            return r[t];
        }, s.getPokerType = function(e, t) {
            var i = {}, n = 0, o = -1, s = 1;
            for (var r in e) if (e.hasOwnProperty(r)) {
                var c = e[r].substr(0, 1);
                void 0 != i[c] && null != i[c] || (i[c] = 0), i[c] = i[c] + 1, n += 1;
            }
            var l = Object.keys(i).length, d = 0, h = 5;
            for (var u in i) if (i.hasOwnProperty(u)) {
                var g = i[u];
                g > d && (d = g), g < h && (h = g);
            }
            if (n <= 4) 1 == l ? o = n : 4 == n && (2 == d ? d == h && this.arrIsChain(i, 6).isChain && (o = 6, 
            s = 2) : 3 == d && (o = 3)); else if (d == h) {
                if (1 == d) this.arrIsChain(i, 5).isChain && (o = 5, s = n); else if (2 == d) {
                    this.arrIsChain(i, 6).isChain && (o = 6, s = n / 2);
                } else if (3 == d) {
                    if (this.arrIsChain(i, 6).isChain) {
                        o = 7;
                        var m = this.arrIsChain(i, 7);
                        s = m.isChain ? m.chainLength : n / 3;
                    }
                }
            } else if (d >= 3) {
                var f = 0;
                for (var p in i) {
                    if (i.hasOwnProperty(p)) i[p] >= 3 && (f += 1);
                }
                if (1 == f) {
                    a.getBattle();
                    5 == n && 3 == d && (o = 3, s = f);
                } else {
                    var v = this.arrIsChain(i, 7);
                    v.isChain && (4 == d && 7 == n ? (o = 9, s = 1) : n % 5 == 0 && 5 * v.chainLength != n ? (o = 7, 
                    s = v.chainLength - 1) : (o = 7, s = v.chainLength));
                }
                if (1 == f) {
                    if (6 == n && 4 == d) {
                        var C = a.getBattle();
                        (1 == t || 4 == d && 6 == n && void 0 != C && null != C && C.cardData.length == n) && (o = 8, 
                        s = 1);
                    } else if (7 == n && 4 == d) this.allow4band3 && (o = 9, s = 1); else if (5 == n && 4 == d) {
                        var y = a.getBattle();
                        (1 == t || 4 == d && 5 == n && void 0 != y && null != y && y.cardData.length == n) && (o = 10, 
                        s = 1);
                    }
                } else 2 == f && 7 == n && 4 == d && this.allow4band3 && (o = 9, s = 1);
            }
            return {
                typeCode: o,
                typeLength: s
            };
        }, s.getColorValue = function(e) {
            var t = e.substr(1, 1);
            return c[t];
        }, s.isBoom = function(e, t) {
            o.print("bommm =====", e);
            var i = this.changeCardValue(e), n = !0;
            for (var a in i) {
                if (i.hasOwnProperty(a)) if (4 != i[a].count) {
                    n = !1;
                    break;
                }
            }
            if (t) {
                var s = 0, r = this.changeCardValue(t.outCards);
                for (var c in r) {
                    if (r.hasOwnProperty(c)) 3 == r[c].count && (parseInt(c) < s || 0 == s) && (s = parseInt(c));
                }
                for (var l in i) if (i.hasOwnProperty(l)) {
                    i[l];
                    if (parseInt(l) > s) {
                        n = !1;
                        break;
                    }
                }
            }
            return n;
        }, s.getSingleCardToTypeThree = function(e, t, i, n) {
            var a = [], o = 2 * i;
            n && (o = 3 * i);
            for (var s = 0, c = [], l = 0; l < t.length; l++) {
                var d = t[l];
                if (void 0 != d && null != d) {
                    var h = r[d.substr(0, 1)];
                    c[h] = h;
                }
            }
            var u = [], g = [], m = [];
            for (var f in e) if (e.hasOwnProperty(f)) {
                var p = e[f];
                c[parseInt(f)] || (s += p.count, 4 == p.count ? m[parseInt(f)] = p : 14 != f && 15 != f ? u[parseInt(f)] = p : g[parseInt(f)] = p);
            }
            s <= o && (o = s);
            for (var v = 1; v <= 3; v++) for (var C = 3; C <= 13; C++) {
                var y = u[C];
                if (y && y.count == v) for (var S in y.cards || {}) {
                    var b = y.cards[S];
                    if (b && void 0 != b && (a.push(b), --o <= 0)) return a;
                }
            }
            for (var k = 1; k <= 3; k++) for (var w = 14; w <= 15; w++) {
                var I = g[w];
                if (I && I.count == k) for (var N in I.cards || {}) if (a.push(I.cards[N]), --o <= 0) return a;
            }
            for (var T = 3; T <= 15; T++) {
                var R = m[T];
                if (R && R.count == T) for (var P in R.cards || {}) if (a.push(R.cards[P]), --o <= 0) return a;
            }
            return a;
        }, s.getChainInCardsByType = function(e, t, i, a) {
            var o, s = [], r = (n(o = {}, 5, {
                count: 1,
                lenght: 5
            }), n(o, 6, {
                count: 2,
                lenght: 2
            }), n(o, 7, {
                count: 3,
                lenght: 2
            }), o), c = 3, l = 14;
            null != i && (c = i), null != a && (l = a) > 14 && (l = 14);
            for (var d = [], h = c; h <= l; h++) {
                var u = e[h];
                if (u && u.count >= r[t].count) {
                    for (var g = 0; g < r[t].count; g++) d.push(u.cards[g]);
                    h == l && d.length / r[t].count >= r[t].lenght && s.push(d);
                } else {
                    if (d.length / r[t].count >= r[t].lenght) {
                        if (7 == t) {
                            var m = this.getSingleCardToTypeThree(e, d, d.length / 3);
                            for (g = 0; g < m.length; g++) {
                                var f = m[g];
                                d.push(f);
                            }
                        }
                        s.push(d);
                    }
                    d = [];
                }
            }
            return s;
        }, s.changeCardValue = function(e) {
            var t = [];
            for (var i in e) if (e.hasOwnProperty(i)) {
                var n = e[i];
                if ("num" != i) {
                    var a = n.substr(0, 1);
                    t[r[a]] || (t[r[a]] = [], t[r[a]].count = 0, t[r[a]].cards = []), t[r[a]].count = t[r[a]].count + 1, 
                    t[r[a]].cards.push(n);
                }
            }
            return t;
        }, s.isHasBoom = function(e) {
            var t = this.changeCardValue(e);
            for (var i in t) {
                if (t.hasOwnProperty(i)) if (4 == t[i].count) {
                    isAllBoom = !1;
                    break;
                }
            }
            return !1;
        }, s.sortCards = function(e, t) {
            var i = e, n = this;
            return i.sort(function(e, i) {
                return 1 == t ? n.getSortValue(e) == n.getSortValue(i) ? n.getColorValue(i) - n.getColorValue(e) : n.getSortValue(e) - n.getSortValue(i) : n.getSortValue(e) == n.getSortValue(i) ? n.getColorValue(i) - n.getColorValue(e) : n.getSortValue(i) - n.getSortValue(e);
            }), i;
        }, s.getSingleTypeInCardsByType = function(e, t) {
            for (var i, a = [], o = (n(i = {}, 1, {
                count: 1,
                lenght: 1
            }), n(i, 2, {
                count: 2,
                lenght: 1
            }), n(i, 3, {
                count: 3,
                lenght: 1
            }), n(i, 4, {
                count: 4,
                lenght: 1
            }), i), s = 3; s <= 15; s++) {
                var r = e[s], c = [];
                if (r && r.count == o[t].count) {
                    for (var l = 0; l < r.cards.length; l++) {
                        var d = r.cards[l];
                        c.push(d);
                    }
                    if (3 == t) for (var h = this.getSingleCardToTypeThree(e, c, 1), u = 0; u < h.length; u++) {
                        var g = h[u];
                        c.push(g);
                    }
                    a.push(c);
                }
            }
            return a;
        }, s.arrIsChain_select = function(e, t) {
            for (var i, a = [], o = 0; o < e.length; o++) {
                var s = e[o].substr(0, 1);
                a[s] || (a[s] = 0), a[s] = a[s] + 1, 1;
            }
            var c = [], l = (n(i = {}, 5, {
                count: 1,
                length: 3
            }), n(i, 6, {
                count: 2,
                length: 2
            }), n(i, 7, {
                count: 3,
                length: 2
            }), i), d = 0;
            for (o = 0; o < a.length; o++) {
                var h = a[o];
                d += h, h >= l[t].count && c.push(r[o]);
            }
            c.sort(function(e, t) {
                return e < t || e < 0 ? 1 : -1;
            });
            var u = !0, g = 0;
            if (7 != t) {
                for (var m = 0; m < c.length - 2; m++) c[m + 1] - c[m] == 1 && 15 != c[m + 1] || (u = !1);
                g = c.length;
            } else {
                var f = [], p = [];
                for (m = 0; m < c.length; m++) {
                    var v = c[m], C = c[m + 1];
                    p.push(v), C ? C - v != 1 && (f.push(p), p = []) : (f.push(p), p = []);
                }
                for (m = 0; m < f.length; m++) {
                    var y = f[m].length;
                    y > g && (g = y);
                }
                if (5 * g != d) {
                    var S = g;
                    for (m = g; m > l[t].length; m--) if (5 * m == d) {
                        S = m;
                        break;
                    }
                    g = S;
                }
            }
            if (g < l[t].length && (u = !1), 5 == t) {
                var b = [], k = !0, w = !1, I = void 0;
                try {
                    for (var N, T = (e || [])[Symbol.iterator](); !(k = (N = T.next()).done); k = !0) {
                        var R = N.value, P = parseInt(r[R.substr(0, 1)] || -1);
                        -1 == b.indexOf(P) && -1 != P && b.push(P);
                    }
                } catch (e) {
                    w = !0, I = e;
                } finally {
                    try {
                        !k && T.return && T.return();
                    } finally {
                        if (w) throw I;
                    }
                }
                b.sort(function(e, t) {
                    return e > t;
                });
                var D = 0, B = b[0], x = !0, A = !1, _ = void 0;
                try {
                    for (var F, L = b[Symbol.iterator](); !(x = (F = L.next()).done); x = !0) {
                        var O = F.value;
                        1 == Math.abs(B - O) && D++, B = O;
                    }
                } catch (e) {
                    A = !0, _ = e;
                } finally {
                    try {
                        !x && L.return && L.return();
                    } finally {
                        if (A) throw _;
                    }
                }
                if (D != b.length - 1) return {
                    isChain: !1,
                    chainLength: 0
                };
                if (D == e.length - 1) return {
                    isChain: !0,
                    chainLength: 0
                };
            }
            if (6 == t) {
                if (e.length < 3 || e % 2 == 0) return {
                    isChain: !1,
                    chainLength: 0
                };
                var E = !0, M = !1, U = void 0;
                try {
                    for (var G, V = (e || [])[Symbol.iterator](); !(E = (G = V.next()).done); E = !0) {
                        if (-1 != G.value.indexOf("2")) return {
                            isChain: !1,
                            chainLength: 0
                        };
                    }
                } catch (e) {
                    M = !0, U = e;
                } finally {
                    try {
                        !E && V.return && V.return();
                    } finally {
                        if (M) throw U;
                    }
                }
                var J = [], q = 0, j = !0, z = !1, H = void 0;
                try {
                    for (var W, Y = (e || [])[Symbol.iterator](); !(j = (W = Y.next()).done); j = !0) {
                        var K = W.value, Z = parseInt(r[K.substr(0, 1)] || -1);
                        if (-1 == J.indexOf(Z) && -1 != Z) q = 0, J.push(Z); else if (++q >= 2) return {
                            isChain: !1,
                            chainLength: 0
                        };
                    }
                } catch (e) {
                    z = !0, H = e;
                } finally {
                    try {
                        !j && Y.return && Y.return();
                    } finally {
                        if (z) throw H;
                    }
                }
                J.sort(function(e, t) {
                    return e > t;
                });
                var X = 0, Q = J[0], $ = !0, ee = !1, te = void 0;
                try {
                    for (var ie, ne = J[Symbol.iterator](); !($ = (ie = ne.next()).done); $ = !0) {
                        var ae = ie.value;
                        1 == Math.abs(Q - ae) && X++, Q = ae;
                    }
                } catch (e) {
                    ee = !0, te = e;
                } finally {
                    try {
                        !$ && ne.return && ne.return();
                    } finally {
                        if (ee) throw te;
                    }
                }
                if (X != J.length - 1) return {
                    isChain: !1,
                    chainLength: 0
                };
                if (X == e.length - 1) return {
                    isChain: !1,
                    chainLength: 0
                };
                var oe = {}, se = !0, re = !1, ce = void 0;
                try {
                    for (var le, de = J[Symbol.iterator](); !(se = (le = de.next()).done); se = !0) {
                        var he = le.value, ue = 0, ge = !0, me = !1, fe = void 0;
                        try {
                            for (var pe, ve = e[Symbol.iterator](); !(ge = (pe = ve.next()).done); ge = !0) {
                                var Ce = pe.value;
                                he == parseInt(r[Ce.substr(0, 1)] || -1) && ue++;
                            }
                        } catch (e) {
                            me = !0, fe = e;
                        } finally {
                            try {
                                !ge && ve.return && ve.return();
                            } finally {
                                if (me) throw fe;
                            }
                        }
                        if (1 == ue) {
                            var ye = !0, Se = !1, be = void 0;
                            try {
                                for (var ke, we = e[Symbol.iterator](); !(ye = (ke = we.next()).done); ye = !0) {
                                    var Ie = ke.value;
                                    if (parseInt(r[Ie.substr(0, 1)]) == he) {
                                        oe[he] = Ie;
                                        break;
                                    }
                                }
                            } catch (e) {
                                Se = !0, be = e;
                            } finally {
                                try {
                                    !ye && we.return && we.return();
                                } finally {
                                    if (Se) throw be;
                                }
                            }
                        }
                    }
                } catch (e) {
                    re = !0, ce = e;
                } finally {
                    try {
                        !se && de.return && de.return();
                    } finally {
                        if (re) throw ce;
                    }
                }
                if (Object.keys(oe).length > 1) return {
                    isChain: !1,
                    chainLength: 0
                };
                var Ne = Object.keys(oe)[0];
                return {
                    isChain: !0,
                    willUpPokeSV: oe[Ne],
                    willUpPokeNV: Ne
                };
            }
            return {
                isChain: u,
                chainLength: g
            };
        }, s.getPokeValue = function() {
            return r;
        }, t.exports = s, cc._RF.pop();
    }, {
        "../common/Common": "Common",
        PdkDatamanager: "PdkDatamanager"
    } ],
    PrefabManager: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "d9d5cpVAipC+7rcF1Zq7JVS", "PrefabManager");
        e("../common/Common");
        var n = e("Config");
        e("../tools/utils");
        window.RESOURCE = {
            name: "PrefabManager",
            createRoom: null,
            isLoadedRes: !1,
            callTime: -1,
            comRes: {
                comLoading: {
                    resUrl: "com/loading1",
                    prefab: null
                },
                comDialog: {
                    resUrl: "com/dialog",
                    prefab: null
                },
                comHead: {
                    resUrl: "com/headkuang",
                    prefab: null
                },
                comRule: {
                    resUrl: "com/comRule",
                    prefab: null
                },
                comBankruptcy: {
                    resUrl: "com/bankruptcy",
                    prefab: null
                },
                comShareTip: {
                    resUrl: "com/shareNode",
                    prefab: null
                },
                comGoldNode: {
                    resUrl: "com/goldShowNode",
                    prefab: null
                }
            },
            hallRes: {
                hallFieldList: {
                    resUrl: "hall/fieldList",
                    prefab: null
                },
                hallUserInfo: {
                    resUrl: "hall/userInfoHall",
                    prefab: null
                },
                hallExchange: {
                    resUrl: "hall/exchange",
                    prefab: null
                },
                hallShop: {
                    resUrl: "hall/shopView",
                    prefab: null
                },
                hallEmail: {
                    resUrl: "hall/email",
                    prefab: null
                },
                hallFhb: {
                    resUrl: "hall/fhb",
                    prefab: null
                },
                hallSignIn: {
                    resUrl: "hall/signInPopup",
                    prefab: null
                },
                hallDailyGift: {
                    resUrl: "hall/dailyGiftPopup",
                    prefab: null
                },
                hallYq: {
                    resUrl: "hall/hallAnim/icon_yqyj",
                    prefab: null
                },
                hallNewHand: {
                    resUrl: "hall/hallAnim/tip_hand",
                    prefab: null
                },
                hallBaiwan: {
                    resUrl: "hall/hallAnim/zhu_cglj_tip",
                    prefab: null
                }
            },
            friendRes: {
                friView: {
                    resUrl: "hall/friend/friendPlay",
                    prefab: null
                },
                friCreateRoom: {
                    resUrl: "hall/friend/friendDesk",
                    prefab: null
                },
                friJoinRoom: {
                    resUrl: "hall/friend/joinRoom",
                    prefab: null
                },
                friRecordRoom: {
                    resUrl: "hall/friend/recordRank",
                    prefab: null
                }
            },
            pdkRes: {
                pdkCard: {
                    resUrl: "pdkgame/cardPoker",
                    prefab: null
                },
                pdkSmallOver: {
                    resUrl: "pdkgame/smallOver_new",
                    prefab: null
                },
                pdkTotalOver: {
                    resUrl: "pdkgame/pdkTotalOver",
                    prefab: null
                },
                pdkNewPlayer: {
                    resUrl: "pdkgame/newPlayer",
                    prefab: null
                },
                pdkWinGoOn: {
                    resUrl: "pdkgame/winGoOn",
                    prefab: null
                },
                pdkFlyFhb: {
                    resUrl: "pdkgame/use_fhb",
                    prefab: null
                },
                pdkPwsRes: {
                    resUrl: "pdkgame/pwsResult",
                    prefab: null
                },
                pdkG_3d2: {
                    resUrl: "pdkgame/Effects/g_3d2",
                    prefab: null
                },
                pdkG_4d1: {
                    resUrl: "pdkgame/Effects/g_4d1",
                    prefab: null
                },
                pdkG_4d2: {
                    resUrl: "pdkgame/Effects/g_4d2",
                    prefab: null
                },
                pdkG_4d3: {
                    resUrl: "pdkgame/Effects/g_4d3",
                    prefab: null
                },
                pdkG_fj: {
                    resUrl: "pdkgame/Effects/g_fj",
                    prefab: null
                },
                pdkG_glodK: {
                    resUrl: "pdkgame/Effects/g_glodK",
                    prefab: null
                },
                pdkG_jb: {
                    resUrl: "pdkgame/Effects/g_jb",
                    prefab: null
                },
                pdkG_ld: {
                    resUrl: "pdkgame/Effects/g_ld",
                    prefab: null
                },
                pdkG_lose_cg: {
                    resUrl: "pdkgame/Effects/g_lose_cg",
                    prefab: null
                },
                pdkG_matching: {
                    resUrl: "pdkgame/Effects/g_matching",
                    prefab: null
                },
                pdkG_sz: {
                    resUrl: "pdkgame/Effects/g_sz",
                    prefab: null
                },
                pdkG_win_cg: {
                    resUrl: "pdkgame/Effects/g_win_cg",
                    prefab: null
                },
                pdkG_ybq: {
                    resUrl: "pdkgame/Effects/g_ybq",
                    prefab: null
                },
                pdkG_zd: {
                    resUrl: "pdkgame/Effects/g_zd",
                    prefab: null
                },
                pdkG_lose: {
                    resUrl: "pdkgame/Effects/g_lose",
                    prefab: null
                },
                pdkG_win: {
                    resUrl: "pdkgame/Effects/g_win",
                    prefab: null
                },
                pdkG_hb_shake: {
                    resUrl: "pdkgame/Effects/g_hb_shake",
                    prefab: null
                },
                pdkG_qtong: {
                    resUrl: "pdkgame/Effects/g_Bronze",
                    prefab: null
                },
                pdkG_byin: {
                    resUrl: "pdkgame/Effects/g_Silver",
                    prefab: null
                },
                pdkG_hjin: {
                    resUrl: "pdkgame/Effects/g_Gold",
                    prefab: null
                },
                pdkG_bjin: {
                    resUrl: "pdkgame/Effects/g_Platinum",
                    prefab: null
                },
                pdkG_zshi: {
                    resUrl: "pdkgame/Effects/g_Diamond",
                    prefab: null
                },
                pdkG_xyao: {
                    resUrl: "pdkgame/Effects/g_Star_Shining",
                    prefab: null
                },
                pdkG_dshi: {
                    resUrl: "pdkgame/Effects/g_Lengend_Master",
                    prefab: null
                },
                pdkG_down: {
                    resUrl: "pdkgame/Effects/g_Level_Up_Star_Broken",
                    prefab: null
                },
                pdkG_up: {
                    resUrl: "pdkgame/Effects/g_Level_Up_Star",
                    prefab: null
                },
                pdkG_glow: {
                    resUrl: "pdkgame/Effects/g_Glow",
                    prefab: null
                },
                pdkG_title: {
                    resUrl: "pdkgame/Effects/g_Level_Up",
                    prefab: null
                },
                pdkProp_jidan: {
                    resUrl: "comgame/props/jidan",
                    prefab: null
                },
                pdkProp_hua: {
                    resUrl: "comgame/props/songhua",
                    prefab: null
                },
                pdkProp_zd: {
                    resUrl: "comgame/props/zhadan",
                    prefab: null
                },
                pdkProp_zhuan: {
                    resUrl: "comgame/props/zt",
                    prefab: null
                }
            },
            getPrefab: function(e, t) {
                var i = e.substr(0, 3), n = {
                    com: "comRes",
                    gam: "comRes",
                    pdk: "pdkRes",
                    hal: "hallRes",
                    fri: "friendRes"
                }, a = RESOURCE.comRes;
                return void 0 != n[i] && null != n[i] && (a = RESOURCE[n[i]]), a.hasOwnProperty(e) ? cc.loader.loadRes(a[e].resUrl, function(i, n) {
                    i ? a[e].prefab = null : (a[e].prefab = n, t && t(n));
                }) : cc.log("预制资源管理里没定义此key：" + e), a[e].prefab;
            },
            initPreloadModuleRes: function() {
                this.moduleLoad = {};
                for (var e = [ "comRes", "hallRes", "pdkRes", "friendRes" ], t = 0; t < e.length; t++) {
                    for (var i = this[e[t]], n = Object.keys(i), a = 0; a < n.length; a++) {
                        if (i.hasOwnProperty(n[a])) i[n[a]].tag = 0;
                    }
                    this.moduleLoad[e[t]] = 0;
                }
            },
            clearResourceTimeout: function() {
                -1 != RESOURCE.callTime && (clearTimeout(RESOURCE.callTime), RESOURCE.callTime = -1);
            },
            setIsLoadedResStatus: function(e) {
                e <= .3 && (RESOURCE.isLoadedRes = !1);
            },
            checkIsNeedConnect: function() {
                console.log("isLoadedRes = " + RESOURCE.isLoadedRes), 1 == RESOURCE.isLoadedRes && RESOURCE.setIsLoadedResStatus(0);
            },
            preloadModuleRes: function(e, t, i, n) {
                this.preloadModuleResNew(e, t, i, n);
            },
            preloadModuleResNew: function(t, i, a, o) {
                console.log("批量加载"), RESOURCE.isLoadedRes = !1;
                var s = this[t + "Res"];
                if (void 0 == s || null == s || this.moduleLoad && this.moduleLoad[t + "Res"] && 1 == this.moduleLoad[t + "Res"]) return RESOURCE.setIsLoadedResStatus(0), 
                cc.log("都加载过直接回了"), void (i && i(1e4));
                o && o(), void 0 != a && null != a && 0 != a || e("../tools/Loading").create(l);
                for (var r = 0, c = Date.now(), l = "资源加载完后会更快哦！", d = Object.keys(s), h = d.length, u = 0, g = function(o, s) {
                    if (0 != n.isNetworkConnect) {
                        var g = (++u / h * 100).toFixed(1);
                        if (u == h) {
                            console.log("index= " + o + ", overCount=" + u + ", totalCount=" + h + ", " + d[o]), 
                            RESOURCE.moduleLoad[t + "Res"] = 1;
                            var f = (Date.now() - c) / 1e3;
                            return RESOURCE.setIsLoadedResStatus(f), console.log("完成加载模块" + t + "总耗时(秒) = " + f), 
                            void 0 != a && null != a && 0 != a || e("../tools/Loading").setLabelString(l + "100%"), 
                            void (i && i(1e3));
                        }
                        u < h && (void 0 != s && null != s || console.log("index= " + o + ", overCount=" + u + ", totalCount=" + h + "," + d[o]), 
                        void 0 != a && null != a && 1 == a ? i && i(g) : e("../tools/Loading").setLabelString(l + g + "%"), 
                        m(++r));
                    } else console.log("没网了，不gotoNext了");
                }, m = function(e) {
                    if (!(e >= h)) if (RESOURCE.isLoadedRes = !0, 0 != n.isNetworkConnect) {
                        r = e;
                        var t = s[d[e]];
                        t ? 0 == t.tag ? cc.loader.loadRes(t.resUrl, function(i, a) {
                            0 == n.isNetworkConnect || i ? console.log("断网了cc.loader.loadRes", i) : (t.tag = 1, 
                            g(e));
                        }) : g(e, 0) : console.log("===ERROR=== " + e);
                    } else console.log(c + " 没网了，不loadOne了");
                }, f = 0; f < 10; f++) m(f);
            }
        }, cc._RF.pop();
    }, {
        "../common/Common": "Common",
        "../tools/Loading": "Loading",
        "../tools/utils": "utils",
        Config: "Config"
    } ],
    Prop: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "93b49iTcUxA5KAyrPD6vKb8", "Prop");
        var n = {};
        n.propsConfig = [ {
            listimg: "userInfo/01.png",
            rotate: 0,
            anicsb: "comgame/props/songhua",
            anicsba: "comgame/prop/songhua_action/songhua",
            anitime: 80,
            anitimea: 24,
            off: cc.p(0, -20),
            endoff: cc.p(40, -20),
            starteffect: "",
            talk: "xianhua",
            effect: "resources/pdkgame/sound/bigface/songhua",
            dt: .07
        }, {
            listimg: "userInfo/02.png",
            rotate: 0,
            anicsb: "comgame/props/ring",
            anicsba: "comgame/prop/ring_action/ring",
            anitime: 95,
            anitimea: 30,
            off: cc.p(-10, 0),
            endoff: cc.p(-10, 0),
            effect: "resources/pdkgame/sound/bigface/diamond",
            dt: .1
        }, {
            listimg: "userInfo/03.png",
            scale: .85,
            rotate: 1,
            anicsb: "comgame/props/zhadan",
            anicsba: "comgame/prop/zhadan_action/zhadan",
            anitime: 69,
            anitimea: 15,
            off: cc.p(0, 0),
            endoff: cc.p(0, 0),
            starteffect: "diu",
            talk: "zhadan",
            effect: "resources/pdkgame/sound/bigface/boom",
            dt: .04
        }, {
            listimg: "userInfo/04.png",
            rotate: 1,
            anicsb: "comgame/props/jidan",
            anitime: 75,
            off: cc.p(0, 0),
            starteffect: "diu",
            talk: "jidan",
            effect: "resources/pdkgame/sound/bigface/jidan"
        }, {
            listimg: "userInfo/05.png",
            scale: .9,
            rotate: 1,
            anicsb: "comgame/props/zt",
            anicsba: "comgame/props/zt",
            anitime: 75,
            anitimea: 75,
            off: cc.p(15, 15),
            endoff: cc.p(-15, 15),
            starteffect: "diu",
            talk: "zhadan",
            effect: "resources/pdkgame/sound/bigface/zt02",
            dt: .04
        } ];
        var a = cc.director.getWinSize();
        a.x = a.width / 2, a.y = a.height / 2, n.game = null, n.atlas = null, n.gametype = 2, 
        n.beziserOffset = [ 100, 200, 200 ], n.init = function(e, t, i, n) {
            var a = this;
            a.game = e, cc.loader.loadRes("comgame/newProps", cc.SpriteAtlas, function(e, o) {
                a.atlas = o, a.throwDaoju(t, i, n);
            });
        }, n.getBezierCenterPot = function(e, t) {
            var i = this.beziserOffset[self.gametype - 1] || 200, n = cc.p(0, 0);
            Math.abs(e.x - t.x) < 100 ? n = e.x < a.x ? cc.p(e.x + i, a.y) : cc.p(e.x - i, a.cy) : n = Math.abs(e.y - t.y) < 100 ? e.y < a.y ? cc.p(a.x, e.y + i) : cc.p(a.x, e.y - i) : (e.x - t.x) * (e.y - t.y) > 0 ? cc.p(a.x - i, a.y + i) : cc.p(a.x + i, a.y + i);
            return n;
        }, n.getPoint2 = function(e, t) {
            var i = {};
            return i.game = this.game, i.frompos = e, i.topos = t, i;
        }, n.changeAniPos = function(e, t) {
            3 != this.gametype && 6 == t && e.x < 0 && (e.y > -40 && (e.x = e.x + 15), e.y = e.y + 50);
        }, n.throwDaoju = function(t, i, n) {
            if (null != n && void 0 != n && null != i && void 0 != i) {
                var a = this.propsConfig[t - 1], o = this.getPoint2(i, n), s = (o.game, o.frompos || cc.p(0, 0)), r = o.topos || cc.p(0, 0);
                a.starteffect && "" != a.starteffect && AMGR.playSound("resources/pdkgame/sound/bigface/" + a.starteffect + ".mp3");
                var c = e("../common/Common").deepClone(r);
                2 != t && 3 != t && (r.x < 0 ? c.x = r.x + 30 : c.x = r.x - 30);
                var l = [ s, cc.p(0, 300), c ], d = new cc.Node(), h = d.addComponent(cc.Sprite);
                if (null != this.atlas && void 0 != this.atlas) {
                    h.spriteFrame = this.atlas.getSpriteFrame("0" + t), cc.director.getScene().getChildByName("Canvas").addChild(d, 5), 
                    d.setPosition(l[0]);
                    var u = 360;
                    c.x < 0 && (u = -360);
                    var g = cc.bezierTo(.7, l), m = cc.rotateBy(.35, u);
                    d.runAction(cc.sequence(cc.spawn(g, m), cc.callFunc(function() {
                        if (null != d) {
                            d.removeFromParent();
                            cc.loader.loadRes(a.anicsb, function(e, t) {
                                a.effect && "" != a.effect && AMGR.playSound(a.effect + ".mp3");
                                var i = cc.instantiate(t);
                                i.setPosition(l[2]);
                                var n = i.getComponent(cc.Animation).defaultClip.duration, o = cc.sequence(cc.delayTime(n), cc.callFunc(function() {
                                    i && i.removeFromParent();
                                }));
                                i.runAction(o), cc.director.getScene().getChildByName("Canvas").addChild(i, 5);
                            });
                        }
                    })));
                }
            }
        }, t.exports = n, cc._RF.pop();
    }, {
        "../common/Common": "Common"
    } ],
    SeasonNode: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "e2507kaV91Al6Lo/2SbxKm5", "SeasonNode");
        var n = e("Common");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {},
            initView: function() {
                this.dwNode = cc.find("gamelist/btn_join/dwNode", this.node), this.starNode = cc.find("gamelist/btn_join/starNode", this.node), 
                this.starItem = cc.find("gamelist/btn_join/star", this.node), this.seaMsg = cc.find("gamelist/btn_join/seasonMsg", this.node), 
                this.sMsg = cc.find("gamelist/btn_join/seasonMsg/msg", this.node), this.seasonNode = cc.find("saiji", this.node), 
                this.sContent = cc.find("saiji/dw/view/content", this.node), this.item = cc.find("item", this.node);
            },
            initViewData: function() {
                this.seasonNode.active = !1;
            },
            initData: function() {
                this.dwPreName = {
                    qingTong: "pdkG_qtong",
                    baiYin: "pdkG_byin",
                    huangJin: "pdkG_hjin",
                    boJin: "pdkG_bjin",
                    zuanShi: "pdkG_zshi",
                    xingYao: "pdkG_xyao",
                    chaoFanDaShi: "pdkG_dshi"
                }, this.dwCode = {
                    qingTong: 1,
                    baiYin: 2,
                    huangJin: 3,
                    boJin: 4,
                    zuanShi: 5,
                    xingYao: 6,
                    chaoFanDaShi: 7
                }, this.leavelCode = {
                    chuJi: 1,
                    zhongJi: 2,
                    gaoJi: 3,
                    teJi: 4,
                    daShi: 5
                }, this.leavelType = {
                    chuJi: "初级",
                    zhongJi: "中级",
                    gaoJi: "高级",
                    teJi: "特级",
                    daShi: "大师"
                }, this.dwType = {
                    qingTong: "青铜",
                    baiYin: "白银",
                    huangJin: "黄金",
                    boJin: "铂金",
                    zuanShi: "钻石",
                    xingYao: "星耀",
                    chaoFanDaShi: "超凡大师"
                };
            },
            clickNode: function() {
                n.clickNode(this.seasonNode, this.seasonNodeClick.bind(this)), n.clickNode(this.seaMsg, this.seaMsgClick.bind(this));
            },
            seasonNodeClick: function() {
                this.seasonNode.active = !1;
            },
            seaMsgClick: function() {
                this.seasonNode.active = !0;
            },
            httpNetData: function() {
                JavaRequest.getQualifySeasonInfo(function(e) {
                    if (e.result && e.data[0]) {
                        var t = (e = e.data[0]).aLevel || 1, i = e.bLevel || 1, n = e.needStar || 1, a = e.star || 1;
                        e.season;
                        this.setDw(t, i), this.setInitStar(n, a), this.setSeaMsg();
                    }
                }.bind(this));
            },
            setDw: function(e, t) {
                var i = this.dwType.qingTong, n = this.dwPreName.qingTong;
                switch (e) {
                  case this.dwCode.qingTong:
                    i = this.dwType.qingTong, n = this.dwPreName.qingTong;
                    break;

                  case this.dwCode.baiYin:
                    i = this.dwType.baiYin, n = this.dwPreName.baiYin;
                    break;

                  case this.dwCode.huangJin:
                    i = this.dwType.huangJin, n = this.dwPreName.huangJin;
                    break;

                  case this.dwCode.boJin:
                    i = this.dwType.boJin, n = this.dwPreName.boJin;
                    break;

                  case this.dwCode.zuanShi:
                    i = this.dwType.zuanShi, n = this.dwPreName.zuanShi;
                    break;

                  case this.dwCode.xingYao:
                    i = this.dwType.xingYao, n = this.dwPreName.xingYao;
                    break;

                  case this.dwCode.chaoFanDaShi:
                    i = this.dwType.chaoFanDaShi, n = this.dwPreName.chaoFanDaShi;
                }
                switch (t) {
                  case this.leavelCode.chuJi:
                    i += this.leavelType.chuJi;
                    break;

                  case this.leavelCode.zhongJi:
                    i += this.leavelType.zhongJi;
                    break;

                  case this.leavelCode.gaoJi:
                    i += this.leavelType.gaoJi;
                    break;

                  case this.leavelCode.teJi:
                    i += this.leavelType.teJi;
                    break;

                  case this.leavelCode.daShi:
                    i += this.leavelType.daShi;
                }
                this.dwNode.removeAllChildren(), RESOURCE.getPrefab(n, function(e) {
                    var t = cc.instantiate(e);
                    t.parent = this.dwNode, t.setScale(.8), cc.find("Pos/Controller/kuohao", t).active = !1, 
                    cc.find("Pos/Controller/kuohao02", t).active = !1;
                    var n = cc.find("Pos/Controller/zi", t);
                    if (n) {
                        var a = n.getComponent(cc.Label);
                        a && (a.string = i);
                    }
                }.bind(this));
            },
            setInitStar: function(e, t) {
                var i = this;
                this.starNode.removeAllChildren(), e = parseInt(e) || 0, t = parseInt(t) || 0, t--;
                for (var n = function(e) {
                    var n = cc.instantiate(i.starItem);
                    n.parent = i.starNode;
                    var a = "pdkgame/Effects/common/" + (e <= t ? "star_level" : "star_level_s");
                    cc.loader.loadRes(a, cc.SpriteFrame, function(e, t) {
                        e || (n.getComponent(cc.Sprite).spriteFrame = t);
                    });
                }, a = 0; a < e; a++) n(a);
            },
            setSeaMsg: function(e, t) {
                var i = pdkShowContent.pwsSeasonMsg.replace("{m}", e);
                i = i.replace("{n}", t), this.sMsg.getComponent(cc.Label).string = i;
            }
        }), cc._RF.pop();
    }, {
        Common: "Common"
    } ],
    SendCMD: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "4a1adrSvPVHhZhVG/fq4u6D", "SendCMD");
        var n = {}, a = e("Config"), o = e("../common/Common");
        n.setSocket = function(e) {
            this.socket = e;
        }, n.sendLogin = function(t, i, n, s) {
            this.socket.writeHead(1e3), this.socket.writeInt32(t), this.socket.writeStringUTF8(i), 
            this.socket.writeInt32(n), this.socket.writeInt32(s), this.socket.writeInt32(1), 
            this.socket.writeEnd();
            var r = this;
            r.timeOut || (a.loginResult = !1, r.timeOut = setTimeout(function() {
                a.loginResult || e("../tools/Dialog").create({
                    content: "服务器连接失败，请重新登录！",
                    btnstring: [ 1, "确定" ],
                    callback: function(e) {
                        "LoginScene" !== a.curSceneName && o.switchScene("LoginScene");
                    }
                }), clearTimeout(r.timeOut), r.timeOut = null;
            }, 5e3));
        }, n.sendData = function(e) {
            this.socket.writeHead(e[0]);
            for (var t = 1; t < e.length; t++) cc.js.isString(e[t]) ? this.socket.writeStringUTF8(e[t]) : this.socket.writeInt32(e[t]);
            this.socket.writeEnd(), 1010 != Number(e[0]) && 1001 != Number(e[0]) || (a.isGoToRoom = !0);
        }, n.send2540 = function() {
            this.socket && (this.socket.writeHead(2540), this.socket.writeEnd());
        }, n.send2541 = function() {
            this.socket.writeHead(2541), this.socket.writeEnd();
        }, n.send2026 = function(e) {
            this.socket.writeHead(2026), this.socket.writeInt32(e), this.socket.writeEnd();
        }, n.inRoom = function(t, i, n) {
            a.isOpenAgentEnterGame && a.USER.is_show ? e("../tools/Dialog").create({
                content: "抱歉，代理商无法进行游戏！",
                btnstring: [ 1, "确定" ]
            }) : (this.socket.writeHead(1001), this.socket.writeInt32(t), this.socket.writeInt32(0), 
            this.socket.writeInt32(0), this.socket.writeInt32(i || 0), this.socket.writeInt32(1), 
            this.socket.writeInt32(1 * n || 0), this.socket.writeEnd(), a.isGoToRoom = !0);
        }, n.costClubGoldNum = function(e, t, i) {
            this.socket.writeHead(1089), this.socket.writeInt32(e), this.socket.writeEnd();
        }, n.onLinePlayNum = function(e, t) {
            this.socket.writeHead(5e3), this.socket.writeInt32(a.USER.mid), this.socket.writeInt32(e), 
            this.socket.writeInt32(t), this.socket.writeEnd();
        }, n.outRoomSuccess = function(e) {
            this.socket.writeHead(1009), this.socket.writeInt32(e || 0), this.socket.writeEnd(), 
            this.getGameOver();
        }, n.getGameOver = function() {
            this.socket.writeHead(1031), this.socket.writeEnd();
        }, n.dismissRoom = function() {
            this.socket.writeHead(1018), this.socket.writeEnd();
        }, n.selectdismissRoom = function(e) {
            this.socket.writeHead(1020), this.socket.writeInt32(e), this.socket.writeEnd();
        }, n.outRoom = function() {
            this.socket.writeHead(1004), this.socket.writeEnd();
        }, n.ready = function() {
            this.socket.writeHead(1006), this.socket.writeEnd();
        }, n.action = function(t) {
            if (11 == t._type && e("CMDDelay").addCMD({
                cmd: 1012,
                data: {
                    action_type: 11,
                    seatid: a.ROOMDATA.seatid,
                    cards: t.cards
                }
            }), this.socket.writeHead(1012), this.socket.writeInt32(t._type), 1 == t._type || 11 == t._type) {
                this.socket.writeInt32(t.cards.length);
                for (var i = 0; i < t.cards.length; i++) this.socket.writeStringUTF8(t.cards[i]);
            } else this.socket.writeInt32(0);
            this.socket.writeStringUTF8(a.ROOMDATA.actionid), this.socket.writeEnd();
        }, n.dissRoom_Agrent = function(e) {
            this.socket.writeHead(1058), this.socket.writeInt32(e.roomid), this.socket.writeEnd();
        }, n.getClubPlayers = function(e) {
            this.socket.writeHead(5e3), this.socket.writeInt32(e.mid), this.socket.writeInt32(e.clubid), 
            this.socket.writeInt32(e.pageNo), this.socket.writeEnd();
        }, n.getClubOnlinePlayers = function(e) {
            this.socket.writeHead(5007), this.socket.writeInt32(e.mid), this.socket.writeInt32(e.clubid), 
            this.socket.writeInt32(e.pageNo), this.socket.writeEnd();
        }, n.sendInvite = function(e) {
            this.socket.writeHead(5002), this.socket.writeInt32(e.mid), this.socket.writeInt32(e.inviteMid), 
            this.socket.writeStringUTF8(e.name), this.socket.writeInt32(e.clubid), this.socket.writeStringUTF8(e.infoStr), 
            this.socket.writeEnd();
        }, n.getMsgData = function(e) {
            this.socket.writeHead(5005), this.socket.writeInt32(a.USER.mid), this.socket.writeInt32(e), 
            this.socket.writeEnd();
        }, n.sendPosition = function(e, t) {
            this.socket.writeHead(1028), this.socket.writeStringUTF8(e), this.socket.writeInt32(t), 
            this.socket.writeEnd();
        }, n.createPhzRoom = function(e) {
            this.socket.writeHead(1010), this.socket.writeStringUTF8(e.type), this.socket.writeInt32(e.innings), 
            this.socket.writeInt32(e.multiple), this.socket.writeInt32(e.mintang), this.socket.writeInt32(e.joinGame), 
            this.socket.writeInt32(e.peoplenumber), this.socket.writeInt32(e.xingtype), this.socket.writeInt32(e.mintang2), 
            this.socket.writeInt32(e.minscore), this.socket.writeInt32(e.maxhuxi), this.socket.writeInt32(e.Zimo), 
            this.socket.writeInt32(e.IsMustHu), this.socket.writeInt32(e.IsMaoHu), this.socket.writeInt32(e.MinHuxi), 
            this.socket.writeInt32(e.Changetunxi), this.socket.writeInt32(e.Lianzhuan), this.socket.writeInt32(e.jiaTuo), 
            this.socket.writeInt32(e.yiwushi), this.socket.writeInt32(0), this.socket.writeInt32(e.wangnum), 
            this.socket.writeInt32(e.xianhu), this.socket.writeInt32(e.IsPiao), this.socket.writeInt32(e.QhCost), 
            this.socket.writeInt32(e.paytype), this.socket.writeInt32(e.antiCheating || 0), 
            this.socket.writeInt32(e.isAgreeAll || 0), e.clubid && 0 != e.clubid && 1 == a.isOpenClub && (this.socket.writeInt32(e.clubid), 
            this.socket.writeStringUTF8(e.selectClubType), this.socket.writeStringUTF8(e.clubName), 
            this.socket.writeInt32(e.isCreateEmptyRoom || 0), this.socket.writeInt32(e.passWord || 0), 
            this.socket.writeInt32(e.wanfa_index || 1), this.socket.writeInt32(1 * e.clubPay || 0)), 
            this.socket.writeInt32(e.minglongguize || 0), this.socket.writeEnd(), a.isGoToRoom = !0;
        }, n.createMjRoom = function(e) {
            this.socket.writeHead(1010), this.socket.writeStringUTF8("" + e.type), this.socket.writeInt32(e.mjju), 
            this.socket.writeInt32(e.mjpeople), this.socket.writeInt32(e.mjzimo || 1), this.socket.writeInt32(e.mjseven), 
            this.socket.writeInt32(e.mjbird), this.socket.writeInt32(e.joinGame), this.socket.writeInt32(e.mjpiao), 
            this.socket.writeInt32(e.clubid), this.socket.writeInt32(e.mjhz), this.socket.writeInt32(e.paytype || 0), 
            this.socket.writeStringUTF8(e.clubName || ""), this.socket.writeInt32(e.isCreateEmptyRoom || 0), 
            this.socket.writeInt32(e.passWord || 0), this.socket.writeInt32(e.antiCheating || 0), 
            this.socket.writeInt32(e.isAgreeAll || 0), this.socket.writeInt32(e.wanfa_index), 
            this.socket.writeInt32(e.clubPay || 1), this.socket.writeInt32(e.zhuang || 0), this.socket.writeEnd(), 
            a.isGoToRoom = !0;
        }, n.sendPaodekuaiCreatRoom_new = function(t) {
            a.isFaPaiBug = !0, a.showMatchTime = !0, this.timer && clearTimeout(this.timer), 
            this.timer = setTimeout(function() {
                0 == a.isSuccesInRoom && "HallScene" != a.curSceneName && (o.switchScene("HallScene"), 
                e("../tools/Dialog").create({
                    content: "服务器连接失败,请重新进入",
                    btnstring: [ 1, "确定" ]
                }));
            }, 5e3), t.type = t.type + "";
            var i = t.type || "81";
            if ("83" != i) {
                var s = t.data || 1;
                this.socket.writeHead(1092), this.socket.writeStringUTF8(i), this.socket.writeInt32(Number(s)), 
                this.socket.writeEnd(), a.isGoToRoom = !0;
            } else n.sendPaodekuaiCreatRoom(t.data);
        }, n.sendPaodekuaiCreatRoom = function(e) {
            e = e || {}, this.socket.writeHead(1010), this.socket.writeStringUTF8("83"), this.socket.writeInt32(e.innings || 9), 
            this.socket.writeInt32(e.PaiNum || 16), this.socket.writeInt32(e.is3cFirst || 0), 
            this.socket.writeInt32(e.shouju3cFirst || 0), this.socket.writeInt32(e.isShowRetainCard || 1), 
            this.socket.writeInt32(e.SelectWanFa1 || 5), this.socket.writeInt32(e.SelectWanFa2 || 15), 
            this.socket.writeInt32(e.peopleNum || 3), this.socket.writeInt32(e.piao || 0), this.socket.writeInt32(e.joinGame || 0), 
            this.socket.writeInt32(e.clubid || 0), this.socket.writeInt32(e.paytype || 0), this.socket.writeInt32(e.coverCard || 0), 
            this.socket.writeStringUTF8(e.clubName || ""), this.socket.writeInt32(e.isCreateEmptyRoom || 0), 
            this.socket.writeInt32(e.passWord || 0), this.socket.writeInt32(e.antiCheating || 0), 
            this.socket.writeInt32(e.disMissRoom || 0), this.socket.writeInt32(e.wanfa_index || 1), 
            this.socket.writeInt32(e.clubPay || 1), this.socket.writeEnd(), a.isGoToRoom = !0;
        }, n.sendProp = function(e, t, i) {
            this.socket.writeHead(2003), this.socket.writeStringUTF8("##_|YY" + a.USER.mid + "##_|YY" + e + "##_|YY" + t + "##_|YY1##_|YY" + i), 
            this.socket.writeEnd();
        }, n.send1026 = function() {
            this.socket.writeHead(1026), this.socket.writeEnd();
        }, n.send1015 = function() {
            this.socket.writeHead(1015), this.socket.writeEnd();
        }, n.sendSelectPiao = function(e) {
            this.socket.writeHead(1041), this.socket.writeInt32(e), this.socket.writeEnd();
        }, n.sendCmdMsg = function(e) {
            this.socket.writeHead(e), this.socket.writeEnd();
        }, n.sendFace = function(e) {
            this.socket.writeHead(2009), this.socket.writeStringUTF8(e.pframe), this.socket.writeInt32(e.pcate), 
            this.socket.writeEnd();
        }, n.sendChat = function(e) {
            this.socket.writeHead(2001), this.socket.writeStringUTF8(e.msg), this.socket.writeInt32(e._type), 
            this.socket.writeEnd();
        }, n.sendChat_Mj = function(e) {
            this.socket.writeHead(2004), this.socket.writeStringUTF8(e.msg), this.socket.writeEnd();
        }, n.sendPositionMj = function(e) {
            this.socket.writeHead(8001), this.socket.writeStringUTF8(e || ""), this.socket.writeEnd();
        }, n.sendChat_PDK = function(e) {
            this.socket.writeHead(2004), this.socket.writeStringUTF8(e.msg), this.socket.writeEnd();
        }, n.sendCardPDK = function(e) {
            for (var t in this.socket.writeHead(2523), this.socket.writeStringUTF8(e.operaId), 
            this.socket.writeInt32(e.num), e.cards) if (e.cards.hasOwnProperty(t)) {
                var i = e.cards[t];
                this.socket.writeStringUTF8(i);
            }
            this.socket.writeEnd();
        }, n.sendPDKVote = function(e) {
            this.socket.writeHead(1012), this.socket.writeInt32(e), this.socket.writeEnd();
        }, n.sendPDKPass = function(e) {
            this.socket.writeHead(2523), this.socket.writeStringUTF8(e), this.socket.writeInt32(0), 
            this.socket.writeEnd();
        }, n.sendPDKPiao = function(e) {
            this.socket.writeHead(2023), this.socket.writeInt32(e), this.socket.writeEnd();
        }, t.exports = n, cc._RF.pop();
    }, {
        "../common/Common": "Common",
        "../tools/Dialog": "Dialog",
        CMDDelay: "CMDDelay",
        Config: "Config"
    } ],
    ShareTip: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "7bc93Ui1z1JaJv538e9ikLR", "ShareTip");
        var n = e("../Config"), a = e("../common/Common"), o = e("../tools/weixin");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.txt1 = cc.find("dialogBg/txt1", this.node).getComponent(cc.Label), this.txt2 = cc.find("dialogBg/txt2", this.node).getComponent(cc.Label), 
                this.txt3 = cc.find("dialogBg/txt3", this.node).getComponent(cc.Label), this.txt4 = cc.find("dialogBg/txt4", this.node).getComponent(cc.Label), 
                this.btn = cc.find("dialogBg/btn", this.node), this.btnMask = cc.find("bgmask", this.node), 
                this.btnMask.on("click", this.onClickClose.bind(this)), this.btnJump = cc.find("dialogBg/btnJump", this.node), 
                this.btnJump.on("click", this.onClickJump.bind(this)), this.btnJump.active = !1, 
                this.tishiDialog = cc.find("dialog", this.node), this.tiShiLabel = cc.find("dialogBg/desclabel", this.tishiDialog).getComponent(cc.Label), 
                this.tiShiOkBtn = cc.find("dialogBg/btn_yellow", this.tishiDialog);
            },
            start: function() {},
            initData: function(e, t, i, a, o) {
                this.type = 0, this.totalnum = i.reliveTotal, this.cb = a, this.updatecb = o, 0 == t ? (this.txt1.string = "分享至不同微信群，即可成功复活", 
                this.txt2.string = "已成功分享：     次", this.txt3.string = i.reliveProgress + "/" + this.totalnum, 
                this.txt3.node.x = 63, this.btn.on("click", this.onClickGroup.bind(this))) : (this.txt1.string = "求助" + this.totalnum + "名好友帮忙，即可成功复活", 
                this.txt2.string = "已有     名好友仗义相助", this.txt3.string = i.reliveProgress + "/" + this.totalnum, 
                this.txt3.node.x = -70, this.btn.on("click", this.onClickFriend.bind(this))), 2 == e && (this.btnJump.active = !0), 
                n.isSpecial && (cc.find("dialogBg/btn/txt", this.node).getComponent(cc.Label).string = "立即复活", 
                cc.find("dialogBg/l1", this.node).getComponent(cc.Label).string = "立即复活", cc.find("dialogBg/txt1", this.node).getComponent(cc.Label).string = "观看广告，即可成功复活", 
                cc.find("dialogBg/txt2", this.node).active = !1, cc.find("dialogBg/txt3", this.node).active = !1);
            },
            onClickGroup: function(e) {
                o.aldSendEvent("闯关场", {
                    "复活": "群复活"
                });
                var t = this;
                n.isSpecial ? (o.aldSendEvent("闯关场", {
                    "复活": "群复活成功"
                }), o.rewardedVideoAd(function() {
                    JavaRequest.adToRevive(function(e) {
                        1 == e.data[0].isRelive && (t.cb && t.cb(), t.onClickClose());
                    });
                })) : n.shareSwitch ? (o.onMenuShareAppMessage({
                    imageNum: 6
                }), JavaRequest.revive2(function(e) {
                    1 == e.data[0].isRelive && t.tiShiLabel.scheduleOnce(function() {
                        t.tishiDialog.active = !0, t.tiShiLabel.string = "恭喜您已成功复活，\n点击‘确定’重新挑战本关", t.tiShiOkBtn.targetOff(t), 
                        t.tiShiOkBtn.on("click", function() {
                            t.cb && t.cb(), t.onClickClose();
                        }, t);
                    }, 1);
                })) : o.onMenuShareAppMessage({
                    imageNum: 6,
                    cbSucc: function(e) {
                        o.aldSendEvent("闯关场", {
                            "复活": "群复活成功"
                        }), e.shareTickets ? wx.getShareInfo({
                            shareTicket: e.shareTickets[0],
                            complete: function(e) {
                                JavaRequest.shareGroup({
                                    encryptedData: e.encryptedData,
                                    iv: e.iv
                                }, function(e) {
                                    var i = e.data[0];
                                    t.updatecb && t.updatecb(i.helpTimes), 1 == i.isRelive && (t.cb && t.cb(), t.onClickClose()), 
                                    t.txt3 && t.txt3.isValid && (t.txt3.string = (t.type, i.helpTimes + "/" + t.totalnum));
                                });
                            }
                        }) : a.toastTip("需要分享到微信群才可以复活哦！");
                    },
                    cbFail: function() {
                        o.aldSendEvent("闯关场", {
                            "复活": "群复活失败"
                        });
                    }
                });
            },
            onClickFriend: function(e) {
                o.aldSendEvent("闯关场", {
                    "复活": "好友复活"
                }), n.isSpecial ? o.rewardedVideoAd(function() {
                    o.aldSendEvent("闯关场", {
                        "复活": "好友复活成功"
                    });
                }) : o.onMenuShareAppMessage({
                    imageNum: 6,
                    queryStr: "mid=" + n.USER.mid + "&shareTime=" + a.getDay() + "&type=2",
                    cbSucc: function() {
                        o.aldSendEvent("闯关场", {
                            "复活": "好友复活成功"
                        });
                    },
                    cbFail: function() {
                        o.aldSendEvent("闯关场", {
                            "复活": "好友复活失败"
                        });
                    }
                });
            },
            onClickJump: function() {
                o.aldSendEvent("闯关场", {
                    "复活": "放弃复活"
                });
                var e = this;
                JavaRequest.clearGuanInfo(null, function() {
                    e.onClickClose(), e.cb && e.cb();
                });
            },
            onClickClose: function() {
                n.justOne = !0, this.node && this.node.isValid && this.node.destroy();
            }
        }), cc._RF.pop();
    }, {
        "../Config": "Config",
        "../common/Common": "Common",
        "../tools/weixin": "weixin"
    } ],
    ShopView: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "1f41bpNGgBPRJ6/nQePD2OU", "ShopView");
        var n = e("Config"), a = e("../common/Common"), o = DMGER.fkstoreConfig, s = DMGER.zsstoreConfig, r = e("../tools/weixin"), c = e("PdkDatamanager");
        cc.Class({
            extends: cc.Component,
            properties: {
                goodsView: cc.Node,
                goodsViewzs: cc.Node,
                selectPng: [ cc.SpriteFrame ],
                zuanshiBtn: cc.Node,
                fangkaBtn: cc.Node
            },
            onLoad: function() {
                var e = this;
                this.canClick = !0, this.fkSelect = 1, this.zsSelect = 0, this.labelColor1 = new cc.Color(176, 77, 38), 
                this.labelColor2 = new cc.Color(171, 113, 21), "android" == cc.sys.os && this.onClickZs(), 
                this.tipView = cc.find("tip", this.node), cc.find("tip/dialogBg/btn_yellow", this.node).on("click", this.toShare, this), 
                this.goodsViewzs.getChildByName("toInvite").on("click", this.toShare, this), cc.find("tip/bgmask", this.node).on("click", function() {
                    e.tipView.active = !1;
                }, this), cc.find("bgInner/goodsView2/help", this.node).on("click", this.helpClick, this);
                var t = this.node.getChildByName("left");
                n.isIphoneX && (t.x = t.x - 100), this.zuanshiBtn.active = !n.isSpecial;
                var i = c.getIsFHB() ? pdkShowContent.shopTitleFHBShow : pdkShowContent.shopTitleZSShow;
                console.log(666, i, c.getIsFHB()), this.goodsViewzs.getChildByName("title").getComponent(cc.Label).string = i, 
                this.iconData = [];
                for (var a = 1; a < 7; a++) {
                    var s = this.goodsView.getChildByName("goods_" + a).getChildByName("costBtn"), r = {
                        goodsNum: a,
                        cost: o[a - 1].money
                    };
                    s.attr(r), s.on("click", this.clickBtn, this);
                }
                var l = Date.parse(new Date()) / 1e3;
                if (o.length >= 1) {
                    var d = o[0];
                    if (Number(d.starttime) <= l && Number(d.endtime) >= l) {
                        !0;
                        var h = "活动时间:", u = new Date();
                        if (u.setTime(1e3 * d.starttime), h = h + (u.getMonth() + 1) + "月" + u.getDate() + "日", 
                        Number(d.endtime) - Number(d.starttime) > 86400) {
                            var g = new Date();
                            g.setTime(1e3 * d.endtime - 1);
                            g.toJSON(), g.getDate();
                            h = h + "-" + (g.getMonth() + 1) + "月" + g.getDate() + "日";
                        }
                    }
                }
                for (var m = 0; m < 6; m++) {
                    var f = this.goodsView.getChildByName("goods_" + (m + 1)).getChildByName("costBtn").getChildByName("costlable"), p = o[m], v = this.goodsView.getChildByName("goods_" + (m + 1));
                    f.getComponent(cc.Label).string = p.diamond;
                    var C = 0;
                    p.gold < 1e4 ? C = p.gold : (C = p.gold / 1e4, C += "万"), v.getChildByName("cardNum").getComponent(cc.Label).string = C + "金币";
                    p.song, p.gold;
                    v.getChildByName("songTxt").getComponent(cc.Label).string = "";
                }
            },
            init: function(e, t) {
                1 == e ? (this.goodsView.active = !0, this.goodsViewzs.active = !1, this.fkSelect = 1, 
                this.zsSelect = 0) : (this.goodsView.active = !1, this.goodsViewzs.active = !0, 
                this.fkSelect = 0, this.zsSelect = 1), null != t && (this.callBack = t);
            },
            onClickZs: function(e) {
                var t = this, i = this.zuanshiBtn;
                t.inviteDataList = [];
                var n = c.getIsFHB() ? [ 0, 0, 0, 0, 0, 5, 5 ] : [ 0, 1, 3, 6, 10, 15, 20 ];
                JavaRequest.getInviteList(function(e) {
                    if (0 == e.error) {
                        t.inviteDataList = e.data[0].playerList;
                        for (var a = 0, o = 0; o < t.inviteDataList.length; o++) 2 == t.inviteDataList[o].status && a++;
                        var s = n[a];
                        2 == t.inviteDataList[5].status && (s = 5), cc.find("tip/num", t.goodsViewzs).getComponent(cc.Label).string = s + (c.getIsFHB() ? "/5" : "/20"), 
                        s == (c.getIsFHB() ? 5 : 20) && (cc.find("tip/num", t.goodsViewzs).color = new cc.Color(255, 0, 71)), 
                        0 == t.zsSelect && (i.width = 210, t.fangkaBtn.width = 184, i.getComponent(cc.Sprite).spriteFrame = t.selectPng[1], 
                        i.getChildByName("tu").color = t.labelColor1, t.fangkaBtn.getComponent(cc.Sprite).spriteFrame = t.selectPng[0], 
                        t.fangkaBtn.getChildByName("tu").color = t.labelColor2, t.goodsView.active = !1, 
                        t.goodsViewzs.active = !0, t.zsSelect = 1, t.fkSelect = 0);
                    }
                });
            },
            onClickFk: function(e) {
                var t = this.fangkaBtn;
                0 == this.fkSelect && (t.width = 210, this.zuanshiBtn.width = 184, t.getComponent(cc.Sprite).spriteFrame = this.selectPng[1], 
                t.getChildByName("tu").color = this.labelColor1, this.zuanshiBtn.getComponent(cc.Sprite).spriteFrame = this.selectPng[0], 
                this.zuanshiBtn.getChildByName("tu").color = this.labelColor2, this.goodsView.active = !0, 
                this.goodsViewzs.active = !1, this.zsSelect = 0, this.fkSelect = 1);
            },
            onClickPayMoney: function(e) {
                var t = e.target.getSiblingIndex(), i = s[t].money;
                this.gotoPay(i);
            },
            onClickPayZs: function(t) {
                var i = this, a = t.target.getSiblingIndex(), s = o[a];
                i.setTime && -1 != i.setTime && (clearTimeout(i.setTime), i.setTime = -1), i.setTime = setTimeout(function() {
                    i.canClick = !0;
                }, 100), i.canClick && (i.canClick = !1, s.diamond <= n.USER.diamonds ? e("../tools/Dialog").create({
                    content: "是否使用" + s.diamond + "钻石兑换" + s.gold + "金币吗？",
                    btnstring: [ 1, "确定" ],
                    callback: function(e) {
                        0 == e && i.exchangeGold(s);
                    }
                }) : i.tipView.active = !0);
            },
            exchangeGold: function(t) {
                var i = this, a = 1 * t.diamond;
                e("../tools/Loading").create(), JavaRequest.exchangeGold({
                    diamond: a
                }, function(t) {
                    1 == t.svflag ? (n.USER.gold = t.data.nowGolds, e("../net/ParseSocket").dispachGold(n.USER.gold), 
                    e("../tools/Dialog").create({
                        content: "兑换成功！",
                        btnstring: [ 1, "确定" ]
                    })) : 1003 == t.svflag && (i.tipView.active = !0);
                });
            },
            payMoney: function(e) {},
            loadIcon: function(e, t) {
                cc.loader.load(e, function(e, i) {
                    var n = new cc.SpriteFrame(i), a = new cc.Node();
                    a.addComponent(cc.Sprite).spriteFrame = n, a.setPosition(-133, 39), t.addChild(a);
                });
            },
            gotoPay: function(e) {
                this.openId = cc.sys.localStorage.getItem("openId"), cc.log("openIDDD:" + this.openId), 
                cc.log("costtt:" + e);
            },
            clickBtn: function(e) {
                cc.log(e.target.goodsNum);
                var t = e.target.cost;
                this.gotoPay(t);
            },
            start: function() {},
            closeBtnOnClick: function() {
                this.cb && this.cb(-1, this.cbParams), this.node.active = !1;
            },
            toShare: function() {
                var e = this, t = a.getDay(), i = "mid=" + n.USER.mid + "&name=" + n.USER.name + "&shareTime=" + t + "&type=1";
                r.onMenuShareAppMessage({
                    imageNum: 4,
                    queryStr: i,
                    cbSucc: function() {
                        e.tipView.active = !1;
                    }
                }), n.shareSwitch && (e.tipView.active = !1);
            },
            setCallback: function(e, t) {
                this.cb = e, this.cbParams = t;
            },
            helpClick: function() {
                this.cb && this.cb(-1, this.cbParams, "open");
            }
        }), cc._RF.pop();
    }, {
        "../common/Common": "Common",
        "../net/ParseSocket": "ParseSocket",
        "../tools/Dialog": "Dialog",
        "../tools/Loading": "Loading",
        "../tools/weixin": "weixin",
        Config: "Config",
        PdkDatamanager: "PdkDatamanager"
    } ],
    ShowContent: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "407bdXGftpDhoYj7RsAxq8w", "ShowContent"), window.pdkShowContent = {
            npWinShow: "无敌是多么寂寞，恭喜你在闯关模式中取得胜利，不如分享炫耀一波?",
            cgGetHbShow: "闯7关领红包，再赢2局就能领取~",
            getHBShow: "已经是最后一关了，本局胜利就能领取现金红包奖励~",
            npCgSuccess: "太棒啦！闯关成功，获得{m}元红包奖励。现在，赶快分享到群领取红包吧~!",
            inviteLqTile: "邀好友进入游戏{t}，满5位领取神秘大礼包~",
            fhbIsNodeShow: "当局复活次数已全部使用",
            fhbNotEnough: "您的复活币不足",
            fhbIsMaxShow: "领取失败,您最多可携带5枚复活币",
            fhbFail: "复活失败",
            shopTitleFHBShow: "邀请5个好友进入游戏可领取钻石",
            shopTitleZSShow: "邀请好友进入游戏可领取钻石",
            pwsExtraStar: "额外赠送{m}星,今日剩余{n}次",
            pwsFaileShow: "很遗憾，您本轮对局失败了！\n{t}可以避免本次掉星",
            pwsRedPack: "恭喜你达到{m}段位\n奖励您:+{n}元",
            pwsSeasonMsg: "S{m}赛季 {n}结束",
            pwsBxSucc: "保星成功",
            hbLqEd: "红包已领取"
        }, cc._RF.pop();
    }, {} ],
    SignInPopup: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "ec26dUnITZOxJrgRq+25WBv", "SignInPopup");
        var n = e("../tools/weixin"), a = e("Config");
        e("../common/Common");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {},
            getUseNode: function() {
                var e = this.node.getChildByName("signNode");
                this.doubleBtn = e.getChildByName("btn_double"), this.doubleBtn.on("click", this.onClickDouble, this), 
                this.normalBtn = e.getChildByName("btn_normal"), this.normalBtn.on("click", this.onClickNormal, this), 
                e.getChildByName("btn_close").on("click", this.onClose, this);
                var t = e.getChildByName("itemList");
                this.itemList = [];
                for (var i = 0; i < 6; i++) {
                    var n = t.getChildByName("item" + (i + 1));
                    this.itemList.push(n);
                }
                this.itemList.push(e.getChildByName("item7"));
            },
            setData: function(e) {
                e && (this.signInData = e.signInData, this.rewardCb = e.rewardCb), this.getUseNode(), 
                this.initUI();
            },
            initUI: function() {
                if (this.signInData && this.signInData.giftList) {
                    this.giftList = this.signInData.giftList;
                    for (var e = 0; e < 7; e++) this.initItemByindex(e);
                    var t = this.signInData.isCan > 0;
                    this.doubleBtn.active = t, t && (this.timeOut = setTimeout(function() {
                        this.normalBtn.active = this.signInData.isCan > 0;
                    }.bind(this), 3e3));
                }
            },
            initItemByindex: function(e) {
                var t = this, i = this.giftList[e], n = this.itemList[e], a = this.getIsTodayReward(e);
                if (i.status > 0 || a) {
                    var o = n.getComponent(cc.Sprite), s = e + 1 != 7 ? "hall/signIn/db_2" : "hall/signIn/db2_2";
                    cc.loader.loadRes(s, cc.SpriteFrame, function(e, t) {
                        o.spriteFrame = t;
                    });
                }
                if (n.getChildByName("mask").active = i.status > 0, n.getChildByName("status_double").active = 2 === i.status, 
                n.getChildByName("status_normal").active = 1 === i.status, e + 1 < 7) {
                    var r = "", c = 0;
                    1 === i.type ? (r = (c = i.gold) < 600 ? "hall/signIn/lw_1" : c >= 600 && c < 1e3 ? "hall/signIn/lw_2" : c >= 1e3 && c < 1200 ? "hall/signIn/lw_4" : "hall/signIn/lw_5", 
                    c += "金币") : 2 === i.type ? (c = i.diamond, r = "hall/signIn/lw_6", c += "钻石") : (c = i.money, 
                    r = "hall/signIn/lw_3", c += "元红包"), cc.loader.loadRes(r, cc.SpriteFrame, function(e, i) {
                        n.getChildByName("img_item").getComponent(cc.Sprite).spriteFrame = i, n.getChildByName("img_item").scale = .7, 
                        a && (t.curSpriteFrame = i);
                    }), n.getChildByName("txt_num").getComponent(cc.Label).string = c;
                } else e + 1 === 7 && a && cc.loader.loadRes("hall/signIn/lw_7", cc.SpriteFrame, function(e, i) {
                    t.curSpriteFrame = i, t.spPos = cc.p(0, -27.7);
                });
            },
            getIsTodayReward: function(e) {
                if (this.signInData.isCan > 0 && this.signInData.hadGetNum + 1 === e + 1) return !0;
                return !1;
            },
            onClickDouble: function() {
                if (!1 !== n.checkCanShowAd() && wx.createRewardedVideoAd) {
                    var t = this;
                    AMGR.pauseMusic(), null == this.videoAd && (this.videoAd = wx.createRewardedVideoAd({
                        adUnitId: "adunit-0c3cac97bba0cee5"
                    }));
                    var i = function i(n) {
                        console.log("广告结束回调", n), e("../tools/Loading").close(), AMGR.resumeMusic(), t.videoAd.offClose(i), 
                        t.videoAd.offError(o), (n && n.isEnded || void 0 === n) && 1 == a.isNetworkConnect && (e("../tools/Loading").create(), 
                        JavaRequest.dailyLoginSign({
                            isDouble: 1
                        }, function(i) {
                            e("../tools/Loading").close(), t.rewardCb(i, t.curSpriteFrame, t.spPos), t.onClose();
                        }));
                    }, o = function n(a) {
                        console.error("onErro 广告拉取失败 ：", a), e("../tools/Dialog").create({
                            content: "获取视频信息失败，请稍后再来",
                            btnstring: [ 1, "确定" ]
                        }), t.videoAd.offError(n), t.videoAd.offClose(i);
                    };
                    this.videoAd.onError(o), this.videoAd.onClose(i), e("../tools/Loading").create();
                    t.videoAd.load().then(function() {
                        t.videoAd.show().catch(function(n) {
                            console.log("show err : ", n), e("../tools/Dialog").create({
                                content: "获取视频信息失败，请稍后再来",
                                btnstring: [ 1, "确定" ]
                            }), t.videoAd.offError(o), t.videoAd.offClose(i);
                        });
                    }, function(n) {
                        console.log("err 广告拉取失败 : ", n), e("../tools/Dialog").create({
                            content: "获取视频信息失败，请稍后再来",
                            btnstring: [ 1, "确定" ]
                        }), e("../tools/Loading").close(), t.videoAd.offError(o), t.videoAd.offClose(i);
                    });
                }
            },
            onClickNormal: function() {
                var t = this;
                this.rewardCb && (e("../tools/Loading").create(), JavaRequest.dailyLoginSign({
                    isDouble: 0
                }, function(i) {
                    e("../tools/Loading").close(), t.rewardCb(i, t.curSpriteFrame, t.spPos), t.onClose();
                }));
            },
            onClose: function() {
                this.node.removeFromParent(), this.node.destroy();
            },
            onDestroy: function() {
                this.timeOut && (clearTimeout(this.timeOut), this.timeOut = null);
            }
        }), cc._RF.pop();
    }, {
        "../common/Common": "Common",
        "../tools/Dialog": "Dialog",
        "../tools/Loading": "Loading",
        "../tools/weixin": "weixin",
        Config: "Config"
    } ],
    StaticWarnData: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "f6091CXBxVKCZxieAYVQ98W", "StaticWarnData");
        t.exports = [ "毛泽东", "周恩来", "刘少奇", "朱德", "彭德怀", "林彪", "刘伯承", "陈毅", "贺龙", "聂荣臻", "徐向前", "罗荣桓", "叶剑英", "李大钊", "陈独秀", "孙中山", "孙文", "孙逸仙", "邓小平", "陈云", "江泽民", "李鹏", "朱镕基", "李瑞环", "尉健行", "李岚清", "胡锦涛", "罗干", "温家宝", "吴邦国", "曾庆红", "贾庆林", "黄菊", "吴官正", "李长春", "吴仪", "回良玉", "曾培炎", "周永康", "曹刚川", "唐家璇", "华建敏", "陈至立", "陈良宇", "张德江", "张立昌", "俞正声", "王乐泉", "刘云山", "王刚", "王兆国", "刘淇", "贺国强", "郭伯雄", "胡耀邦", "李登辉", "连战", "陈水扁", "宋楚瑜", "吕秀莲", "郁慕明", "蒋介石", "蒋中正", "蒋经国", "马英九", "习近平", "李克强", "吴帮国", "无帮国", "无邦国", "无帮过", "瘟家宝", "假庆林", "甲庆林", "假青林", "离长春", "习远平", "袭近平", "李磕墙", "贺过墙", "和锅枪", "粥永康", "轴永康", "肘永康", "周健康", "粥健康", "周小康", "李源潮", "汪洋", "张高丽", "薄熙来", "宋平", "布什", "布莱尔", "小泉", "纯一郎", "萨马兰奇", "安南", "阿拉法特", "普京", "默克尔", "克林顿", "里根", "尼克松", "林肯", "杜鲁门", "赫鲁晓夫", "列宁", "斯大林", "马克思", "恩格斯", "金正日", "金日成", "萨达姆", "胡志明", "西哈努克", "希拉克", "撒切尔", "阿罗约", "曼德拉", "卡斯特罗", "富兰克林", "华盛顿", "艾森豪威尔", "拿破仑", "亚历山大", "路易", "拉姆斯菲尔德", "劳拉", "鲍威尔", "奥巴马", "本拉登", "奥马尔", "柴玲", "达赖喇嘛", "江青", "张春桥", "姚文元", "王洪文", "东条英机", "希特勒", "墨索里尼", "冈村秀树", "冈村宁次", "高丽朴", "赵紫阳", "王丹", "沃尔开西", "李洪志", "李大师", "赖昌星", "马加爵", "班禅", "额尔德尼", "山本五十六", "阿扁", "阿扁万岁", "热那亚", "热比娅", "六四", "六四运动", "美国之音", "密宗", "民国", "民进党", "民运", "民主", "民主潮", "摩门教", "纳粹", "南华早报", "南蛮", "明慧网", "起义", "亲民党", "瘸腿帮", "人民报", "法轮功", "法轮大法", "打倒共产党", "台独万岁", "圣战", "示威", "台独", "台独分子", "台联", "台湾民国", "台湾岛国", "台湾国", "台湾独立", "太子党", "天安门事件", "屠杀", "新党", "新疆独立", "新疆分裂", "新疆国", "疆独", "西藏独立", "西藏分裂", "西藏国", "藏独", "藏青会", "藏妇会", "学潮", "学运", "一党专政", "一中一台", "两个中国", "一贯道", "游行", "造反", "真善忍", "镇压", "政变", "政治", "政治反对派", "政治犯", "中共", "共产党", "反党", "反共", "政府", "民主党", "中国之春", "转法轮", "自焚", "共党", "共匪", "苏家屯", "基地组织", "塔利班", "东亚病夫", "支那", "高治联", "高自联", "专政", "专制", "世界维吾尔大会", "核工业基地", "核武器", "铀", "原子弹", "氢弹", "导弹", "核潜艇", "大参考", "小参考", "国内动态清样", "多维", "河殇", "穆罕默德", "耶和华", "耶稣", "伊斯兰", "真主安拉", "白莲教", "天主教", "基督教", "东正教", "大法", "法轮", "真理教", "走向圆满", "黄大仙", "跳大神", "神汉", "神婆", "大卫教", "阎王", "黑白无常", "牛头马面", "高丽棒子", "蒙古鞑子", "老毛子", "回民吃猪肉", "谋杀", "杀人", "吸毒", "贩毒", "赌博", "拐卖", "走私", "卖淫", "强奸", "轮奸", "抢劫", "先奸后杀", "下注", "抽头", "坐庄", "赌马", "赌球", "筹码", "老虎机", "轮盘赌", "安非他命", "大麻", "可卡因", "海洛因", "冰毒", "摇头丸", "杜冷丁", "鸦片", "罂粟", "迷幻药", "白粉", "嗑药", "AIDS", "aids", "Aids", "DICK", "dick", "Dick", "penis", "sex", "SM", "屙", "爱滋", "淋病", "梅毒", "爱液", "屄", "逼", "臭机八", "臭鸡巴", "吹喇叭", "吹箫", "催情药", "屌", "肛交", "肛门", "龟头", "黄色", "机八", "机巴", "鸡八", "鸡巴", "机掰", "鸡叭", "鸡鸡", "鸡掰", "鸡奸", "妓女", "奸", "茎", "精液", "精子", "尻", "口交", "滥交", "乱交", "屁眼", "嫖娼", "强奸犯", "情色", "肉棒", "乳房", "乳峰", "乳交", "乳头", "乳晕", "三陪", "色情", "射精", "手淫", "威而钢", "威而柔", "伟哥", "性高潮", "性交", "性虐", "性欲", "穴", "颜射", "阳物", "一夜情", "阴部", "阴唇", "阴道", "阴蒂", "阴核", "阴户", "阴茎", "阴门", "淫", "淫秽", "淫乱", "淫水", "淫娃", "淫液", "淫汁", "淫穴", "淫洞", "援交妹", "做爱", "梦遗", "阳痿", "早泄", "奸淫", "Bitch", "bt", "cao", "FUCK", "Fuck", "fuck", "kao", "NMD", "NND", "sb", "shit", "SHIT", "SUCK", "Suck", "tmd", "TMD", "tnnd", "K他命", "白痴", "笨蛋", "变态", "婊子", "操她妈", "操妳妈", "操你", "操你妈", "操他妈", "草你", "肏", "册那", "侧那", "测拿", "插", "蠢猪", "荡妇", "发骚", "废物", "干她妈", "干妳", "干妳娘", "干你", "干你妈", "干你妈B", "干你妈b", "干你妈逼", "干你娘", "干他妈", "狗娘养的", "滚", "贱货", "贱人", "烂人", "老母", "老土", "妈比", "妈的", "马的", "妳老母的", "妳娘的", "你妈逼", "破鞋", "仆街", "去她妈", "去妳的", "去妳妈", "去你的", "去你妈", "去死", "去他妈", "日", "日你", "赛她娘", "赛妳娘", "赛你娘", "赛他娘", "骚货", "傻B", "傻比", "傻子", "上妳", "上你", "神经病", "屎", "屎妳娘", "屎你娘", "他妈的", "王八蛋", "我操", "我日", "乡巴佬", "猪猡", "干", "尿", "掯", "操", "骑你", "湿了", "操他", "操她", "骑他", "骑她", "欠骑", "欠人骑", "来爽我", "来插我", "干他", "干她", "干死", "干爆", "干机", "机叭", "臭鸡", "臭机", "烂鸟", "览叫", "阳具", "肉壶", "奶子", "摸咪咪", "干鸡", "干入", "小穴", "插你", "爽你", "干干", "干X", "他干", "干它", "干牠", "干您", "干汝", "干林", "操林", "干尼", "操尼", "我咧干", "干勒", "干我", "干到", "干啦", "干爽", "欠干", "狗干", "我干", "来干", "轮干", "轮流干", "干一干", "援交", "奸暴", "再奸", "我奸", "奸你", "奸他", "奸她", "奸一奸", "淫湿", "鸡歪", "臭西", "遗精", "烂逼", "大血比", "叼你妈", "靠你妈", "戳你", "逼你老母", "挨球", "我日你", "草拟妈", "卖逼", "狗操卖逼", "日死", "奶娘", "他娘", "她娘", "骚B", "你妈了妹", "逼毛", "插你妈", "叼你", "渣波波", "嫩b", "weelaa", "缔顺", "帝顺", "蒂顺", "系统消息", "午夜", "看下", "草泥马", "法克鱿", "雅蠛蝶", "潜烈蟹", "菊花蚕", "尾申鲸", "吉跋猫", "搞栗棒", "吟稻雁", "达菲鸡", "ML", "3P", "群P", "马勒戈壁", "双飞", "周恩來", "碡", "籀", "朱駿", "朱狨基", "朱容基", "朱溶剂", "朱熔基", "邾", "猪操", "猪聋畸", "猪毛", "猪毛1", "舳", "瘃", "躅", "翥", "專政", "颛", "丬", "隹", "窀", "卓伯源", "倬", "斫", "诼", "髭", "鲻", "子宫", "秭", "訾", "自民党", "自慰", "自已的故事", "自由民主论坛", "总理", "偬", "诹", "陬", "鄹", "鲰", "躜", "缵", "作爱", "作秀", "阼", "祚", "阿扁萬歲", "阿萊娜", "啊無卵", "埃裏克蘇特勤", "埃斯萬", "艾麗絲", "愛滋", "愛滋病", "垵", "暗黑法師", "嶴", "奧克拉", "奧拉德", "奧利弗", "奧魯奇", "奧倫", "奧特蘭", "㈧", "巴倫侍從", "巴倫坦", "白立樸", "白夢", "白皮書", "班禪", "寶石商人", "保釣", "鮑戈", "鮑彤", "鮑伊", "暴風亡靈", "暴亂", "暴熱的戰士", "暴躁的城塔野獸", "暴躁的警衛兵靈魂", "暴躁的馬杜克", "北大三角地論壇", "北韓", "北京當局", "北美自由論壇", "貝尤爾", "韝", "逼樣", "比樣", "蹕", "颮", "鑣", "婊子養的", "賓周", "冰後", "博訊", "不滅帝王", "不爽不要錢", "布萊爾", "布雷爾", "蔡崇國", "蔡啓芳", "黲", "操鶏", "操那嗎B", "操那嗎逼", "操那嗎比", "操你媽", "操你爺爺", "曹長青", "曹剛川", "草", "草你媽", "草擬媽", "册那娘餓比", "插那嗎B", "插那嗎逼", "插那嗎比", "插你媽", "插你爺爺", "覘", "蕆", "囅", "閶", "長官沙塔特", "常勁", "朝鮮", "車侖", "車侖女幹", "沉睡圖騰", "陳炳基", "陳博志", "陳定南", "陳建銘", "陳景俊", "陳菊", "陳軍", "陳良宇", "陳蒙", "陳破空", "陳水扁", "陳唐山", "陳希同", "陳小同", "陳宣良", "陳學聖", "陳一諮", "陳總統", "諶", "齔", "櫬", "讖", "程凱", "程鐵軍", "鴟", "痴鳩", "痴拈", "遲鈍的圖騰", "持不同政見", "赤色騎士", "赤色戰士", "處女膜", "傳染性病", "吹簫", "春夏自由論壇", "戳那嗎B", "戳那嗎逼", "戳那嗎比", "輳", "鹺", "錯B", "錯逼", "錯比", "錯那嗎B", "錯那嗎逼", "錯那嗎比", "達夫警衛兵", "達夫侍從", "達癩", "打飛機", "大參考", "大東亞", "大東亞共榮", "大鶏巴", "大紀元", "大紀元新聞網", "大紀園", "大家論壇", "大奶媽", "大史記", "大史紀", "大衛教", "大中國論壇", "大中華論壇", "大衆真人真事", "紿", "戴維教", "戴相龍", "彈劾", "氹", "蕩婦", "導師", "盜竊犯", "德維爾", "登輝", "鄧笑貧", "糴", "迪裏夏提", "覿", "地下教會", "帝國主義", "電視流氓", "叼你媽", "釣魚島", "丁關根", "東北獨立", "東部地下水路", "東方紅時空", "東方時空", "東南西北論談", "東社", "東升", "東條", "東條英機", "東突暴動", "東突獨立", "東土耳其斯坦", "東西南北論壇", "東亞", "東院看守", "動亂", "鬥士哈夫拉蘇", "鬥士霍克", "獨裁", "獨裁政治", "獨夫", "獨立臺灣會", "俄國", "鮞", "㈡", "發楞", "發掄", "發掄功", "發倫", "發倫功", "發輪", "發論", "發論公", "發論功", "發騷", "發正念", "法~倫", "法~淪", "法~綸", "法~輪", "法~論", "法爾卡", "法掄", "法掄功", "法侖", "法淪", "法綸", "法輪大法", "法輪功", "法十輪十功", "法謫", "法謫功", "反封鎖", "反封鎖技術", "反腐敗論壇", "反人類", "反社會", "方勵之", "防衛指揮官", "放蕩", "飛揚論壇", "廢墟守護者", "費鴻泰", "費良勇", "分隊長施蒂文", "粉飾太平", "糞便", "鱝", "豐饒的果實", "風雨神州", "風雨神州論壇", "封從德", "封殺", "封印的靈魂騎士", "馮東海", "馮素英", "紱", "襆", "嘸", "傅作義", "幹bi", "幹逼", "幹比", "幹的你", "幹幹幹", "幹她", "幹你", "幹你老比", "幹你老母", "幹你娘", "幹全家", "幹死", "幹死你", "幹他", "幹一家", "趕你娘", "岡巒", "剛比", "剛比樣子", "崗哨士兵", "肛門", "高麗棒子", "高文謙", "高薪養廉", "高自聯", "膏藥旗", "戈瑞爾德", "戈揚", "鴿派", "歌功頌德", "格雷(關卡排名管理者)", "格魯", "格魯(城鎮移動)", "鯁", "工自聯", "弓雖", "共産", "共産黨", "共産主義", "共黨", "共軍", "共榮圈", "緱", "狗誠", "狗狼養的", "狗娘養的", "狗養", "狗雜種", "覯", "轂", "古龍祭壇", "骨獅", "鯝", "鴰", "詿", "關卓中", "貫通兩極法", "廣聞", "嬀", "龜兒子", "龜公", "龜孫子", "龜頭", "龜投", "劌", "緄", "滾那嗎", "滾那嗎B", "滾那嗎錯比", "滾那嗎老比", "滾那嗎瘟比", "鯀", "咼", "郭俊銘", "郭羅基", "郭岩華", "國家安全", "國家機密", "國軍", "國賊", "哈爾羅尼", "頇", "韓東方", "韓聯潮", "韓正", "漢奸", "顥", "灝", "河殤", "賀國强", "賀龍", "黑社會", "黑手黨", "紅燈區", "紅色恐怖", "紅炎猛獸", "洪傳", "洪興", "洪哲勝", "黌", "鱟", "胡緊掏", "胡錦滔", "胡錦淘", "胡景濤", "胡喬木", "胡總書記", "湖岸護衛兵", "湖岸警衛兵", "湖岸哨兵隊長", "護法", "鸌", "華建敏", "華通時事論壇", "華夏文摘", "華語世界論壇", "華岳時事論壇", "懷特", "鍰", "皇軍", "黃伯源", "黃慈萍", "黃禍", "黃劍輝", "黃金幼龍", "黃菊", "黃片", "黃翔", "黃義交", "黃仲生", "回民暴動", "噦", "繢", "毀滅步兵", "毀滅騎士", "毀滅射手", "昏迷圖騰", "混亂的圖騰", "鍃", "活動", "擊倒圖騰", "擊傷的圖騰", "鶏8", "鶏八", "鶏巴", "鶏吧", "鶏鶏", "鶏奸", "鶏毛信文匯", "鶏女", "鶏院", "姬勝德", "積克館", "賫", "鱭", "賈廷安", "賈育台", "戔", "監視塔", "監視塔哨兵", "監視塔哨兵隊長", "鰹", "韉", "簡肇棟", "建國黨", "賤B", "賤bi", "賤逼", "賤比", "賤貨", "賤人", "賤種", "江八點", "江羅", "江綿恒", "江戲子", "江則民", "江澤慧", "江賊", "江賊民", "薑春雲", "將則民", "僵賊", "僵賊民", "講法", "蔣介石", "蔣中正", "降低命中的圖騰", "醬猪媳", "撟", "狡猾的達夫", "矯健的馬努爾", "嶠", "教養院", "癤", "揭批書", "訐", "她媽", "届中央政治局委員", "金槍不倒", "金堯如", "金澤辰", "巹", "錦濤", "經文", "經血", "莖候佳陰", "荊棘護衛兵", "靖國神社", "㈨", "舊斗篷哨兵", "齟", "巨槌騎兵", "巨鐵角哈克", "鋸齒通道被遺弃的骷髏", "鋸齒通道骷髏", "屨", "棬", "絕望之地", "譎", "軍妓", "開苞", "開放雜志", "凱奧勒尼什", "凱爾本", "凱爾雷斯", "凱特切爾", "砍翻一條街", "看中國", "闞", "靠你媽", "柯賜海", "柯建銘", "科萊爾", "克萊恩", "克萊特", "克勞森", "客戶服務", "緙", "空氣精靈", "空虛的伊坤", "空虛之地", "恐怖主義", "瞘", "嚳", "鄺錦文", "貺", "昆圖", "拉姆斯菲爾德", "拉皮條", "萊特", "賴士葆", "蘭迪", "爛B", "爛逼", "爛比", "爛袋", "爛貨", "濫B", "濫逼", "濫比", "濫貨", "濫交", "勞動教養所", "勞改", "勞教", "鰳", "雷尼亞", "誄", "李紅痔", "李洪寬", "李繼耐", "李蘭菊", "李老師", "李錄", "李祿", "李慶安", "李慶華", "李淑嫻", "李鐵映", "李旺陽", "李小鵬", "李月月鳥", "李志綏", "李總理", "李總統", "裏菲斯", "鱧", "轢", "躒", "奩", "連方瑀", "連惠心", "連勝德", "連勝文", "連戰", "聯總", "廉政大論壇", "煉功", "兩岸關係", "兩岸三地論壇", "兩個中國", "兩會", "兩會報道", "兩會新聞", "廖錫龍", "林保華", "林長盛", "林佳龍", "林信義", "林正勝", "林重謨", "躪", "淩鋒", "劉賓深", "劉賓雁", "劉剛", "劉國凱", "劉華清", "劉俊國", "劉凱中", "劉千石", "劉青", "劉山青", "劉士賢", "劉文勝", "劉文雄", "劉曉波", "劉曉竹", "劉永川", "㈥", "鷚", "龍虎豹", "龍火之心", "盧卡", "盧西德", "陸委會", "輅", "呂京花", "呂秀蓮", "亂交", "亂倫", "亂輪", "鋝", "掄功", "倫功", "輪大", "輪功", "輪奸", "論壇管理員", "羅福助", "羅幹", "羅禮詩", "羅文嘉", "羅志明", "腡", "濼", "洛克菲爾特", "媽B", "媽比", "媽的", "媽批", "馬大維", "馬克思", "馬良駿", "馬三家", "馬時敏", "馬特斯", "馬英九", "馬永成", "瑪麗亞", "瑪雅", "嗎的", "嗎啡", "勱", "麥克斯", "賣逼", "賣比", "賣國", "賣騷", "賣淫", "瞞報", "毛厠洞", "毛賊", "毛賊東", "美國", "美國參考", "美國佬", "美國之音", "蒙獨", "蒙古達子", "蒙古獨", "蒙古獨立", "禰", "羋", "綿恒", "黽", "民國", "民進黨", "民聯", "民意論壇", "民陣", "民主墻", "緡", "湣", "鰵", "摸你鶏巴", "莫偉强", "木子論壇", "內褲", "內衣", "那嗎B", "那嗎逼", "那嗎錯比", "那嗎老比", "那嗎瘟比", "那娘錯比", "納粹", "奶頭", "南大自由論壇", "南蠻子", "鬧事", "能樣", "尼奧夫", "倪育賢", "鯢", "你媽", "你媽逼", "你媽比", "你媽的", "你媽了妹", "你說我說論壇", "你爺", "娘餓比", "捏你鶏巴", "儂著岡巒", "儂著卵拋", "奴隸魔族士兵", "女幹", "女主人羅姬馬莉", "儺", "諾姆", "潘國平", "蹣", "龐建國", "泡沫經濟", "轡", "噴你", "皮條客", "羆", "諞", "潑婦", "齊墨", "齊諾", "騎你", "磧", "僉", "鈐", "錢達", "錢國梁", "錢其琛", "膁", "槧", "錆", "繰", "喬石", "喬伊", "橋侵襲兵", "譙", "鞽", "篋", "親美", "親民黨", "親日", "欽本立", "禽獸", "唚", "輕舟快訊", "情婦", "情獸", "檾", "慶紅", "丘垂貞", "詘", "去你媽的", "闃", "全國兩會", "全國人大", "犬", "綣", "瘸腿幫", "愨", "讓你操", "熱比婭", "熱站政論網", "人民報", "人民大會堂", "人民內情真相", "人民真實", "人民之聲論壇", "人權", "日本帝國", "日軍", "日內瓦金融", "日你媽", "日你爺爺", "日朱駿", "顬", "乳頭", "乳暈", "瑞士金融大學", "薩達姆", "三K黨", "三個代表", "三級片", "三去車侖工力", "㈢", "毿", "糝", "騷B", "騷棒", "騷包", "騷逼", "騷棍", "騷貨", "騷鶏", "騷卵", "殺你全家", "殺你一家", "殺人犯", "傻鳥", "煞筆", "山口組", "善惡有報", "上訪", "上海幫", "上海孤兒院", "厙", "社會主義", "射了還說要", "灄", "詵", "神經病", "諗", "生孩子沒屁眼", "生命分流的圖騰", "澠", "聖射手", "聖戰", "盛華仁", "濕了還說不要", "濕了還說要", "釃", "鯴", "㈩", "石化圖騰", "石拳戰鬥兵", "時代論壇", "時事論壇", "鰣", "史萊姆", "史萊姆王", "士兵管理員瓦爾臣", "世界經濟導報", "事實獨立", "侍從貝赫爾特", "侍從倫斯韋", "貰", "攄", "數據中國", "雙十節", "氵去車侖工力", "氵去車侖工力?", "稅力", "司馬晋", "司馬璐", "司徒華", "私?服", "私處", "思科羅", "斯諾", "斯皮爾德", "四川獨", "四川獨立", "四人幫", "㈣", "宋書元", "藪", "蘇菲爾", "蘇拉", "蘇南成", "蘇紹智", "蘇特勒守護兵", "蘇特勤", "蘇特勤護衛兵", "蘇特勤魔法師", "蘇曉康", "蘇盈貴", "蘇貞昌", "誶", "碎片製造商人馬克", "碎片製造商人蘇克", "孫大千", "孫中山", "他媽", "他媽的", "他嗎的", "他母親", "塔內", "塔烏", "鰨", "闥", "臺盟", "臺灣帝國", "臺灣獨立", "臺灣獨", "臺灣共産黨", "臺灣狗", "臺灣建國運動組織", "臺灣民國", "臺灣青年獨立聯盟", "臺灣政論區", "臺灣自由聯盟", "鮐", "太監", "泰奴橋警衛兵", "泰奴橋掠奪者", "湯光中", "唐柏橋", "鞀", "謄", "天安門", "天安門錄影帶", "天安門事件", "天安門屠殺", "天安門一代", "天閹", "田紀雲", "齠", "鰷", "銚", "庭院警衛兵", "統獨", "統獨論壇", "統戰", "頭領奧馬", "頭領墳墓管理員", "圖書管理員卡特", "屠殺", "團長戈登", "團員馬爾汀", "摶", "鼉", "籜", "膃", "外交論壇", "外交與方略", "晚年周恩來", "綰", "萬里", "萬潤南", "萬維讀者論壇", "萬曉東", "王寶森", "王超華", "王輔臣", "王剛", "王涵萬", "王滬寧", "王軍濤", "王樂泉", "王潤生", "王世堅", "王世勛", "王秀麗", "王兆國", "網禪", "網特", "猥褻", "鮪", "溫B", "溫逼", "溫比", "溫家寶", "溫元凱", "閿", "無界瀏覽器", "吳百益", "吳敦義", "吳方城", "吳弘達", "吳宏達", "吳仁華", "吳淑珍", "吳學燦", "吳學璨", "吳育升", "吳志芳", "西藏獨", "吸收的圖騰", "吸血獸", "覡", "洗腦", "系統", "系統公告", "餼", "郤", "下賤", "下體", "薟", "躚", "鮮族", "獫", "蜆", "峴", "現金", "現金交易", "獻祭的圖騰", "鯗", "項懷誠", "項小吉", "嘵", "小B樣", "小比樣", "小參考", "小鶏鶏", "小靈通", "小泉純一郎", "謝長廷", "謝深山", "謝選駿", "謝中之", "辛灝年", "新觀察論壇", "新華舉報", "新華內情", "新華通論壇", "新疆獨", "新生網", "新手訓練營", "新聞出版總署", "新聞封鎖", "新義安", "新語絲", "信用危機", "邢錚", "性愛", "性無能", "修煉", "頊", "虛弱圖騰", "虛無的飽食者", "徐國舅", "許財利", "許家屯", "許信良", "諼", "薛偉", "學潮", "學聯", "學運", "學自聯", "澩", "閹狗", "訁", "嚴家其", "嚴家祺", "閻明複", "顔清標", "顔慶章", "顔射", "讞", "央視內部晚會", "陽具", "陽痿", "陽物", "楊懷安", "楊建利", "楊巍", "楊月清", "楊周", "姚羅", "姚月謙", "軺", "搖頭丸", "藥材商人蘇耐得", "藥水", "耶穌", "野鶏", "葉菊蘭", "夜話紫禁城", "一陀糞", "㈠", "伊莎貝爾", "伊斯蘭", "伊斯蘭亞格林尼斯", "遺精", "議長阿茵斯塔", "議員斯格文德", "异見人士", "异型叛軍", "异議人士", "易丹軒", "意志不堅的圖騰", "瘞", "陰部", "陰唇", "陰道", "陰蒂", "陰戶", "陰莖", "陰精", "陰毛", "陰門", "陰囊", "陰水", "淫蕩", "淫穢", "淫貨", "淫賤", "尹慶民", "引導", "隱者之路", "鷹眼派氏族", "硬直圖騰", "憂鬱的艾拉", "尤比亞", "由喜貴", "游蕩的僵尸", "游蕩的士兵", "游蕩爪牙", "游錫坤", "游戲管理員", "友好的魯德", "幼齒", "幼龍", "于幼軍", "余英時", "漁夫菲斯曼", "輿論", "輿論反制", "傴", "宇明網", "齬", "飫", "鵒", "元老蘭提沃德", "圓滿", "緣圈圈", "遠志明", "月經", "韞", "雜種", "鏨", "造愛", "則民", "擇民", "澤夫", "澤民", "賾", "賊民", "譖", "扎卡維是英雄", "驏", "張伯笠", "張博雅", "張鋼", "張健", "張林", "張清芳", "張偉國", "張溫鷹", "張昭富", "張志清", "章孝嚴", "帳號", "賬號", "招鶏", "趙海青", "趙建銘", "趙南", "趙品潞", "趙曉微", "趙紫陽", "貞操", "鎮壓", "爭鳴論壇", "正見網", "正義黨論壇", "㊣", "鄭寶清", "鄭麗文", "鄭義", "鄭餘鎮", "鄭源", "鄭運鵬", "政權", "政治反對派", "縶", "躑", "指點江山論壇", "騭", "觶", "躓", "中毒的圖騰", "中毒圖騰", "中俄邊界", "中國復興論壇", "中國共産黨", "中國孤兒院", "中國和平", "中國論壇", "中國社會進步黨", "中國社會論壇", "中國威脅論", "中國問題論壇", "中國移動通信", "中國真實內容", "中國之春", "中國猪", "中華大地", "中華大衆", "中華講清", "中華民國", "中華人民實話實說", "中華人民正邪", "中華時事", "中華養生益智功", "中華真實報道", "中央電視臺", "鐘山風雨論壇", "周鋒鎖", "周守訓", "朱鳳芝", "朱立倫", "朱溶劑", "㈱", "猪聾畸", "主攻指揮官", "主義", "助手威爾特", "專制", "顓", "轉化", "諑", "資本主義", "鯔", "子宮", "自民黨", "自由民主論壇", "總理", "諏", "鯫", "躦", "纘", "作愛", "做愛", "urban", "煞笔", "urban-rivals", "rivals", "UR", "ur", "她妈", "牛逼", "牛B", "牛比", "傻逼", "装逼", "装B", "日你妈", "不玩了", "删号", "卖号", "妈逼", "草你妈", "T.M.D", "JB", "jb", "出售账号", "出售此号", "U/R", "U-R", "j8", "吗的", "8仙", "狗日", "出售神符", "NPC", "法轮功", "李洪志阿扁", "阿拉", "安全局", "澳洲光明网", "八九", "八九风波", "办理文凭", "办理证件", "包皮", "保钓", "保监会", "保密局", "鸨", "鲍岳桥", "暴动", "暴乱", "暴徒", "北京之春", "贝肉", "本?拉登", "苯比", "笨屄", "笨逼", "屄毛", "逼样", "比毛", "婊", "宾周", "波霸", "博讯", "薄一波", "布雷尔", "财政部", "参事室", "操GM", "操Gm", "操gM", "操gm", "操XX", "操逼", "操比", "操蛋", "交媾", "CAO", "K粉", "J8", "小姐兼职", "西藏314事件", "新疆7.5事件", "乱伦", "毛片", "黄片", "交配", "群交", "茉莉花革命", "操你八辈祖宗", "操你妈屄", "草的你妈", "草妈", "测绘局", "插GM", "插Gm", "插gM", "插gm", "插妳", "插深些", "产权局", "朝鲜", "车臣", "车仑", "陈功", "陈希同", "陈晓宁", "成人电影", "成人片", "吃大便", "吃屎", "迟浩田", "赤匪", "抽插", "抽你丫的", "臭化西", "出售假币", "出售枪支", "出售手枪", "春药", "粗制吗啡", "达赖", "打炮", "大B", "大逼", "大便", "大波波", "大麻树脂", "大麻油", "大师", "戴维教", "大学骚乱", "大血B", "呆卵", "戴海静", "戴红", "戴晶", "党主席", "档案局", "盗窃犯", "道教", "帝国主义", "电监会", "屌7", "屌鸠", "屌毛", "屌妳", "屌七", "屌西", "钓鱼台", "丁关根", "丁子霖", "东北独立", "东升", "东突", "东突暴动和独立", "东突组织", "董建华", "董贱华", "董文华", "懂文华", "独立", "独立台湾会", "二B", "二屄", "二逼", "二乙基酰胺发抡", "发抡功", "发伦", "发伦功", "发轮", "发论", "发论公", "发论功", "法(轮)功", "法轮功", "法功", "法愣", "法仑", "法西斯", "法制办", "反动", "反革命", "发票", "冰粉", "性奴", "反华", "反恐委员会", "反日", "反政府", "分裂祖国", "佛教", "佛展千手法", "佛祖", "斧头镰刀", "阝月", "傅鹏", "傅作义", "干GM", "干Gm", "干gM", "干gm", "干拎娘", "干妳老母", "干妳妈", "干七八", "干死你", "肛", "港澳办", "高俊", "高校暴乱", "高校群体事件", "高校骚乱", "睾", "睾丸", "膏药旗", "弓虽女干", "公安", "公安部", "公安局", "共产主义", "共狗", "狗b", "狗操", "狗卵", "狗娘", "狗屁", "狗日的", "狗屎", "观世音", "官逼民反", "官商勾结", "龟儿子", "龟公", "龟孙子", "鬼村", "国安局", "国防部", "国防科工委", "国管局", "国际法院", "国家民委", "国家主席", "国家主要部委", "国民党", "国民党万岁", "海洋局", "何候华", "黑社会", "黑手党", "红卫兵", "洪兴", "洪志", "后庭", "胡XX", "胡紧涛", "胡紧掏", "胡紧套", "胡锦淘", "胡乔木", "胡主席", "花柳", "华国锋", "换妻", "黄　菊", "黄色电影", "黄色小电影", "回教", "回民暴动", "回族人吃猪肉", "昏药", "火棒", "鸡芭", "基督", "激情电影", "激情小电影", "鸡", "计牌软件", "计生委", "妓", "妓院", "奸夫淫妇", "贱", "贱逼", "江Core", "江八", "江八点", "江独裁", "江核心", "江戏子", "江择民", "江贼民", "江折民", "江猪", "江猪媳", "江主席", "僵贼民", "酱猪媳", "交通部", "姣西", "叫床", "叫鸡", "叫小姐", "教育部", "她妈的金日成", "禁书", "经济社会理事会", "经社理事会", "警匪一家", "敬国神社", "靖国神社", "静坐", "纠察员", "鸠", "鸠屎", "军长发威", "军国主义", "军妓", "靠", "靠腰", "可待因", "可卡叶", "恐怖份子", "恐怖主义", "寇晓伟", "狂操", "狂操你全家", "拉登", "懒教", "烂B", "烂屄", "烂比", "烂屌", "烂货", "劳+教+所", "劳动保障部", "老逼", "黎阳评", "李弘旨", "李红志", "李宏旨", "李宏志", "李鹏", "李山", "李铁映", "李先念", "联大", "联合国", "联合国大会", "联易", "联易互动", "粮食局", "两腿之间", "林业局", "刘　淇", "刘军", "流氓", "六.四", "六。四", "六?四", "六合彩", "六-四", "六四事件", "六四真相", "龙新民", "旅游局", "卵", "轮功", "罗　干", "骡干", "妈卖妈屁", "妈批", "妈祖", "妈B", "麻醉钢枪", "麻醉枪", "麻醉药", "麻醉乙醚", "马卖马屁", "吗啡", "吗啡碱", "吗啡片", "买财富", "买卖枪支", "麦角酸", "卖.国", "卖B", "卖ID", "卖QQ", "卖比", "卖财富", "卖党求荣", "卖国", "卖国求荣", "卖卡", "卖软件", "毛XX", "毛厕洞", "毛一鲜", "毛贼东", "毛主席", "梅花网", "美国", "美国佬", "美利坚", "蒙尘药", "蒙独", "蒙古达子", "蒙古独立", "迷魂药", "迷奸药", "迷歼药", "迷药", "密洞", "民航局", "民政部", "莫索里尼", "穆斯林", "妳妈的", "妳马的", "南联盟", "南蛮子", "嫩B", "伱妈", "你爸", "你大爷", "你二大爷", "你老母", "你老味", "你姥", "你姥姥的", "你妈", "你妈的", "你娘", "你爷爷的", "鸟GM", "鸟Gm", "鸟gM", "鸟gm", "鸟你", "农业部", "虐待", "拍肩神药", "喷你", "彭真", "皮条", "嫖客", "苹果日报", "破坏", "气象局", "钱其琛", "枪决女犯", "枪决现场", "枪支弹药", "强卫", "强效失意药", "强硬发言", "乔石", "侨办", "切七", "窃听器", "窃听器材", "青天白日", "去你妈的", "全国人大", "人大", "人大代表", "人代会", "人弹", "人民", "人民大会堂", "人民广场", "人民日报", "人民银行", "人体炸弹", "日GM", "日Gm", "日gM", "日gm", "日X妈", "日本RING", "日本鬼子", "日你娘", "日他娘", "肉壁", "肉洞", "肉缝", "肉棍", "肉棍子", "肉穴", "乳", "乳波臀浪", "撒尿", "塞白", "塞你爸", "塞你公", "塞你老母", "塞你老师", "塞你母", "塞你娘", "三个呆婊", "三个代婊", "三级片", "三民主义", "三陪女", "三去车仑", "三唑仑", "骚", "骚逼", "色情电影", "色情服务", "色情小电影", "杀人犯", "傻屄", "傻吊", "傻卵", "煞逼", "商务部", "社科院", "身份生成器", "神通加持法", "生鸦片", "圣女峰", "十八摸", "十年动乱石进", "食捻屎", "食屎", "驶你爸", "驶你公", "驶你老母", "驶你老师", "驶你母", "驶你娘", "是鸡", "受虐狂", "售ID", "售号", "售软件", "双峰微颤", "氵去", "水利部", "水去车仑", "税务总局", "司法部", "私服", "私/服", "私\\服", "私-服", "私—服", "死gd", "死GD", "死gm", "死GM", "死全家", "四川独立", "四人帮", "宋祖英", "他爹", "他妈", "他马的", "他母亲", "他祖宗", "台办", "台湾党", "台湾帝国", "台湾共产党", "台湾共和国", "台湾狗", "太监", "天皇陛下", "田纪云", "舔西", "投毒杀人", "透视软件", "推油", "外　挂", "外挂", "外/挂", "外\\挂", "外_挂", "外-挂", "外—挂", "外汇局", "外交部", "外专局", "晚年周恩来", "万税", "王宝森", "王昊", "王岐山", "王太华", "王震", "网管", "卫生部", "温加宝", "温家保", "温馨", "温总理", "文化部", "文物局", "倭国", "倭寇", "我操你", "我妳老爸", "无界浏览器", "吴　仪", "五星红旗", "西藏天葬", "希望之声", "洗脑班", "系统", "系统公告", "系统讯息", "鲜族", "想上你", "小鸡鸡", "小泉纯一郎", "小日本", "小肉粒", "小乳头", "邪教", "兴奋剂", "性爱", "性虐待", "性无能", "徐光春", "血逼", "血腥图片", "鸦片液", "鸦片渣", "烟草局", "严方军", "阳精", "摇头玩", "耶苏", "夜情", "一党专制", "一国两制", "伊拉克", "伊朗", "以茎至洞", "抑制剂", "阴毛", "阴水", "阴小撕大", "淫荡", "淫货", "淫贱", "淫叫", "淫毛", "淫靡", "淫语连连", "淫欲", "英雄纪念碑", "硬挺", "邮政局", "游戏发奖员", "游戏宫理员", "游戏管理员", "舆论钳制", "玉杵", "欲火焚身", "原子能机构", "远程偷拍", "曰GM", "曰Gm", "曰gM", "曰gm", "曰你", "月经", "月经不调", "扎卡维是英雄", "杂种", "扎卡维", "张朝阳", "张潮阳", "张磊", "张小平", "侦探设备", "中国恐怖组织", "中华民国", "中南海", "中宣部", "周总理", "朱容鸡", "朱总理", "猪容基", "主席", "装屄", "追查国际", "子女任职名单", "自杀手册", "自杀指南", "自制手枪", "自治机关", "宗教", "总局", "坐台的", "操逼毛", "taobao", "webgame.com.cn", "垃圾游戏", "烂游戏", "淘宝", "h站", "龙虎", "虎门", "龙虎门", "WEB牌戰", "WEB战牌", "战牌", "ＵＲ", "街头对抗", "混沌决", "額爾德尼", "西藏3.14事件", "新疆獨立", "西藏獨立", "藏青會", "藏婦會", "疆獨", "藏獨", "東突", "新疆國", "西藏國", "熱比娅", "骚乱", "分裂", "拉萨", "新疆凶徒", "xinjiang12", "新疆暴徒", "新疆事件", "乌鲁木齐4.30事件", "乌鲁木齐5.22事件", "新疆出事", "Gyallu", "被遗忘的雪域之歌", "度母化声", "密勒日巴道歌", "修行的女人", "花开时节", "葛莎雀吉", "西藏寺庙", "西藏喇嘛庙", "迷情药", "迷情水", "迷情粉", "臊冰", "开心水", "羟亚胺", "盐酸伪麻黄碱", "麻果", "麻古", "麻姑", "植物冰", "塑料冰", "神仙水", "喵喵药", "海乐神", "黄绿牙签", "黄白牙签", "黄白牙簽", "氯胺酮", "麦角胺", "美沙酮", "迷幻水", "迷幻藥", "ghb", "g水", "king粉", "HIGH水", "钻石冰糖", "happy水", "快樂丸", "长治筋", "蒙汗药", "苍蝇水", "甲基苯丙胺", "致幻剂", "安钠咖", "左旋麻黄素", "神仙糖", "昏迷粉", "迷魂水", "强暴药", "云南情蛊", "尼美西泮", "安纳咖", "安眠酮", "冰古", "催情粉", "催情水", "崔情水", "吹情水", "失身", "失身水", "lsd", "钻石冰毒", "摇头糖", "搖頭糖", "曲马多", "哌替啶", "春藥", "乙醚三唑", "失忆水", "酣乐欣", "土冰", "毒品", "冰du", "溜冰壶", "溜冰妹", "水晶冰", "黄牙签", "黃牙簽", "纯冰黄冰", "黄冰", "黄冰白冰", "麥角酸", "鹽酸羥亞胺", "三唑侖", "强暴", "强暴幼女", "强暴电影", "伦理三级", "偷听器", "裸聊", "躶聊", "luo聊", "深喉口爆", "颜射口爆", "强女干", "h片", "膣", "舔下体", "口活", "爆菊", "人體炸彈", "出售假钞", "习仲勋", "彭丽媛", "习明泽", "上访", "人肉", "占中", "监听王", "手机复制", "透视眼镜", "身份证生成器", "活摘器", "雪山狮子旗", "拉萨骚乱", "退党团队", "中共暴政", "在线博彩", "胡錦濤", "習近平", "刘奇葆", "劉奇葆", "代开发票", "偷窥", "偷窥视频", "全能神", "全能神教", "李肇星务", "国务委员", "国务院", "中央委员", "发改委", "国家发展和改革委员会", "发展和改革委员会", "国家发展与改革委员会", "发展与改革委员会", "尖阁列岛", "实际神", "东方闪电", "呼喊派", "灵灵教", "观音法门", "主神教", "被立王", "三班仆人派", "达米宣教会", "常受教", "中华大陆行政执事站", "全范围教会", "徒弟会", "新约教会", "同一教", "Freetibet", "ISIL", "乌克兰分离", "大纪元新闻网", "燕玲论坛", "正悟网", "正清网", "正见网", "升达毕业证", "生春袋", "a$$hole", "a$shole", "Admin", "as$hole", "ASS", "asshole", "bastard", "bbscity", "beijingspring", "bignews", "bitchBitch", "bjzc", "boxun", "胡启立", "马国瑞", "聂辰席", "刘延东", "梅德韦杰夫", "金正恩", "金正男", "安倍晋三", "邱会作", "刘澜涛", "政治打击", "共军", "政治压迫", "大跃进", "武力统一", "政治迫害", "超英赶美", "言论自由", "中国人民解放军", "国共合作", "国民政府", "和平演变", "中共中央", "八九港独", "港独", "占领中环", "ISIS", "七五事件", "卖黑火药", "三个代表", "民警冲突", "负面删帖", "强行拘留", "王立军", "令计划", "中央电视台", "两国论", "一边一国", "政治避难", "浮夸风", "卖枪支弹药", "偷窃", "K药", "谢非", "张廷发", "谷牧", "韩光", "彭冲", "叶群", "王稼祥", "艾则孜", "李作鹏", "赵洪祝", "尉键行", "代办身份证", "学位证", "驾驶证", "办假证", "代考驾照", "代考四六级", "负面新闻删帖", "专业水军", "雷明顿", "出售虎头双管", "三棱军刺", "砍杀儿童", "秃鹰气枪", "改秃", "西点军品", "铅弹铗", "突击军刀", "蒂巴因", "奥列巴文", "芬乙茶碱", "贝齐米特", "罂粟壳", "翁安事件", "踩踏事故", "暴力拆迁", "发场", "17大", "17权力布局", "18DY电影", "18禁", "18年纪念", "18岁的雪儿", "1969尼木", "1Pondo", "2005年十大欠抽人物", "2005言论", "2005语录排行榜", "2008年阴曹地府春晚节目单", "2011年英语", "21世纪中国基金会", "27军军长", "301医院", "314事件", "371工程", "60天的攻防", "610洗脑班", "AV麻将", "AV麻將", "AV女", "A级", "A片", "b-阻断剂", "C4等炸弹制作方法炸药制作", "C4塑胶TNT", "C4炸药制作", "c4制作方法", "CIBS海外移民投资", "CT透视器", "DalaiLama自傳", "DIY原子弹", "灵灵派", "阿鲁纳恰尔邦", "东伊运", "共青团", "被立教", "红5", "法图麦", "赫蒂彻", "南海仲裁", "乳贴", "萌娘", "小三", "小3", "软妹", "伪娘", "萝太", "伪男", "萌大奶", "傻毕", "蔡英文", "黄网", "金三胖", "萨德", "臺獨", "賭博", "後庭", "騷货", "口角", "撸管子", "浪货", "约炮", "搞基", "高栗棒", "威而刚", "唐纳德·特朗普", "特朗普", "雷克斯·蒂勒森", "蒂勒森", "江浙闽", "江沢民", "江浙民", "择民", "则民", "茳泽民", "zemin", "ze民", "老江", "老j", "江core", "江x", "江派", "江zm", "jzm", "江蛤蟆", "蛤蟆", "江某某", "江贼", "江氏集团", "十九大", "19大", "19大权力分布", "伊斯兰国", "范长龙", "许其亮", "马凯", "王沪宁", "孙春兰", "孙政才", "李建国", "张春贤", "孟建柱", "赵乐际", "胡春华", "栗战书", "郭金龙", "韩正", "九学", "9学", "四风", "4风", "南街村", "双规", "独夫民贼", "城管暴力执法", "官匪", "强制捐款", "毒豺", "一党执政", "专制政权", "宪法法院", "谁是新中国", "讨伐中宣部", "异议人士", "民运人士", "启蒙派", "选国家主席", "民一主", "min主", "大赦国际", "国际特赦", "da选", "投公", "公头", "宪政", "平反", "党章", "维权", "昝爱宗", "宪章", "中国人权", "中国的人权", "中国新民党", "群体事件", "群体性事件", "中纪委", "政治局常委", "主席像", "总书记", "大陆当局", "中国当局", "北京当局", "共产专制", "中华时事", "中央军委", "中央纪委书记", "中央文件", "中央资料", "郭文贵", "盘古会", "海航", "姚明珊", "党中央", "世界以利亚福音宣教会", "灵仙真佛宗", "天父的儿女", "全能教", "七灵派", "南海不属于中国", "梁振英", "女基督派", "石牌教会", "门徒会", "党的十九大", "中共十九大", "劫持", "绯闻", "出轨", "嫩模", "辱骂", "二百五", "坑爹", "阿鲁那恰尔邦", "尖阁群岛", "杨尚昆", "世维会", "军刀", "砍刀网", "94se", "神州彩", "同乐彩", "出台", "套件内脏网", "γ-羟基丁酸", "尼泊尔弯刀专营店", "pcp配件", "猎坛", "张又侠", "丁薛祥", "王晨", "刘鹤", "李希", "李强", "李鸿忠", "杨洁篪", "杨晓渡", "陈希", "陈全国", "陈敏尔", "郭声琨", "黄坤明", "蔡奇", "尤权", "魏凤和", "李作成", "苗华", "张升民", "刘金国", "杨晓超", "肖培", "邹加怡", "张春生", "陈小江", "陈超英", "侯凯", "姜信治", "骆源", "徐令义", "凌激", "崔鹏", "李书磊", "温家饱", "温假饱", "胡惊涛", "刁近平", "二奶", "偷窥图片", "成人影片", "AV电影下载", "夫妻床上激情自拍", "处女", "房事", "押大", "押小", "坐台", "猥亵", "幼女", "猥琐", "肉欲", "肉体", "排泄", "卵子", "处男", "黄盘", "毛盘", "艾滋病", "性病", "叫春", "马拉戈壁", "四海国际娱乐官网", "娱乐场", "觅春网社区", "娱乐平台", "彩票网", "现金游戏", "娱乐赌场官网", "良家楼凤", "166888导航", "色窝窝", "成人在线", "娱乐城", "溜溜看片", "刺刀", "軍品", "夜夜骑", "赢钱网", "色久久", "中出", "户外战刀", "刀具", "砍刀", "迷魂粉", "真话药", "彩票", "竞彩", "财神网", "时时彩", "禽兽", "淫秽网", "夹钢短刀专卖店", "腰刀", "仿真发票", "葡京棋牌", "牛B叉", "中央办公室", "神的教会", "统一教", "真佛宗", "残废人", "独眼龙", "瞎子", "聋子", "保险公司", "保险", "撕逼", "玛拉戈壁", "呆逼", "本屌", "齐B短裙", "丢你老母", "装13", "逼格", "蛋疼", "绿茶婊", "表砸", "屌爆了", "买了个婊", "已撸", "妈蛋", "逗比", "我靠", "碧莲", "碧池", "然并卵", "日了狗", "屁民", "吃翔", "XX狗", "淫家", "你妹", "浮尸国", "滚粗", "人大常委", "村官", "非党人士", "少数民族上层人士", "回回", "蛮子", "蒙族", "维族", "摩梭族", "撒尼族", "穿青族", "川青族", "突厥族", "突厥人", "雨伞运动", "荣休主教", "占中三子", "修改宪法", "宪法修订", "宪法特权", "宪法序言", "全国人民代表大会", "连续任职两届", "连任", "世袭", "监察委员会", "监察主任", "中央委员会", "习大大", "刁大大", "小熊维尼", "习主席", "习皇帝", "刁主席", "刁皇帝", "王鸿津", "全国两会", "吕京花", "罗保铭", "夏宝龙", "刘晓波", "IS国", "杀光", "平哥", "彭婶", "IS", "ISIS国", "英国脱欧国", "台湾不是中国的", "中港", "中澳", "内港", "内澳", "世界以利亚播音宣教会", "民族党", "香港民族党", "自杀游戏", "辅助程序", "sf", "私人服务器", "wg", "未婚同居", "习", "刁", "毛主度", "林郑月娥", "万里", "耿飚", "张其亮", "白少康", "川普", "希拉里", "马克龙", "埃马纽埃尔·马克龙", "默罕默德", "徐才厚", "中国", "香港国", "自治", "什叶派", "真主", "低端人士", "圆满", "新闻管制", "迷信", "释迦牟尼", "如来", "阿弥陀佛", "普贤", "文殊", "地藏", "升天", "圣母", "安拉", "风水", "喊派", "监狱", "k粉", "二货", "你奶奶", "回民都是猪", "黑木耳", "性侵", "250", "啪啪啪", "马白勺", "妈白勺", "女马ㄉ", "女马的", "女马白勺", "操妳", "操人也", "操女也", "干人也", "干女也", "超你", "超妳", "超他", "超人也", "超她", "超女也", "屌你", "屌我", "屌他", "屌人也", "屌她", "屌女也", "凸你", "凸我", "凸妳", "凸他", "凸人也", "凸她", "凸女也", "插他", "插我", "插她", "臭你", "臭妳", "臭他", "臭人也", "臭她", "臭女也", "G八", "Ｇ八", "G巴", "Ｇ巴", "G叭", "Ｇ叭", "机芭", "G芭", "Ｇ芭", "G掰", "Ｇ掰", "机Y", "机Ｙ", "鸡Y", "鸡Ｙ", "机8", "鸡８", "靠爸", "靠母", "哭爸", "哭母", "靠北", "老GY", "老ＧＹ", "干GY", "干ＧＹ", "操GY", "操ＧＹ", "超GY", "超ＧＹ", "臭GY", "臭ＧＹ", "干78", "干７８", "操七八", "操78", "操７８", "超七八", "超78", "超７８", "臭七八", "臭78", "臭７８", "懒叫", "璩美凤", "TNND", "幼齿", "歇逼", "招妓", "菜逼", "奶奶的", "日死你", "娘的", "狗卵子", "大比", "穷逼", "欠日", "欠操", "密穴", "群奸", "大b", "小b", "中国猪", "大花逼", "完蛋操", "下贱", "16dy-图库", "獸交", "爱女人", "拔出来", "操b", "插进", "插穴", "吃精", "大乳", "调教", "轮暴", "迷奸", "色猫", "色欲", "性爱图库", "亚情", "淫亂", "淫女", "幼圖", "中文搜性网", "鷄巴", "學生妹", "１８歲淫亂", "999日本妹", "幹炮", "摸阴蒂", "金鳞岂是池中物", "掰穴皮卡丘", "白虎少妇", "白虎阴穴", "包二奶", "暴淫", "逼痒", "蕩妹", "肥逼", "粉穴", "干穴", "开苞", "狼友", "风艳阁", "激情小说", "兽欲", "全裸", "秘唇", "蜜穴", "玉穴", "应召", "菊花蕾", "大力抽送", "干的爽", "肉蒲团", "男女交欢", "极品波霸", "兽奸", "流淫", "销魂洞", "操烂", "成人网站", "淫色", "一夜欢", "姦淫", "给你爽", "大奶头", "奸幼", "中年美妇", "豪乳", "喷精", "逼奸", "脱内裤", "发浪", "浪叫", "肉茎", "菊花洞", "成人自拍", "自拍美穴", "抠穴", "淫水爱液", "露B", "母子奸情", "人妻熟女", "色界", "丁香社区", "爱图公园", "色色五月天", "鹿城娱乐", "色色", "幼香阁", "隐窝窝", "乱伦熟女网", "插阴", "露阴照", "美幼", "97sese", "嫩鲍鱼", "日本AV女优", "美女走光", "33bbb走光", "激情贴图", "成人论坛", "就去诱惑", "浴室自拍", "BlowJobs", "激情裸体", "丽春苑", "窝窝客", "银民吧", "亚洲色", "碧香亭", "爱色cc", "妹妹骚图", "宾馆女郎", "美腿丝足", "好色cc", "无码长片", "淫水涟涟", "放荡少妇", "成人图片", "黄金圣水", "脚交", "勾魂少妇", "女尻", "我要性交", "SM女王", "乳此丝袜", "日本灌肠", "集体性爱", "国产骚货", "操B指南", "亚洲淫娃", "熟女乱伦", "SM舔穴", "無碼H漫", "大胆少女", "乳此丰满", "屄屄特写", "熟女颜射", "要色色", "耻辱轮奸", "巨乳素人", "妩媚挑逗", "骚姨妈", "裸体少妇", "美少妇", "射奶", "杨思敏", "野外性交", "风骚淫荡", "白虎嫩B", "明星淫图", "淫乱熟女", "高清性愛", "高潮集锦", "淫兽学园", "俏臀摄魄", "有容奶大", "无套内射", "毛鲍", "3P炮图", "性交课", "激凸走光", "性感妖娆", "人妻交换", "监禁陵辱", "生徒胸触", "東洋屄", "翘臀嫩穴", "春光外泻", "淫妇自慰", "本土无码", "淫妻交换", "日屄", "近亲相奸", "艳乳", "白虎小穴", "肛门喷水", "淫荡贵妇", "鬼畜轮奸", "浴室乱伦", "生奸内射", "国产嫖娼", "白液四溅", "带套肛交", "大乱交", "精液榨取", "性感乳娘", "魅惑巨乳", "无码炮图", "群阴会", "人性本色", "极品波神", "淫乱工作", "白浆四溅", "街头扒衣", "口内爆射", "嫩BB", "肛门拳交", "灌满精液", "莲花逼", "自慰抠穴", "人妻榨乳", "拔屄自拍", "洗肠射尿", "人妻色诱", "淫浆", "狂乳激揺", "騷浪", "射爽", "蘚鮑", "制服狩", "無毛穴", "骚浪美女", "肏屄", "舌头穴", "人妻做爱", "插逼", "爆操", "插穴止痒", "骚乳", "食精", "爆乳娘", "插阴茎", "黑毛屄", "肉便器", "肉逼", "淫亂潮吹", "母奸", "熟妇人妻", "発射", "幹砲", "性佣", "爽穴", "插比", "嫩鲍", "骚母", "吃鸡巴", "金毛穴", "体奸", "爆草", "操妻", "a4u", "酥穴", "厕所盗摄", "艳妇淫女", "掰穴打洞", "盗撮", "薄码", "少修正", "巧淫奸戏", "换妻大会", "破处", "穴爽", "g点", "欢欢娱乐时空", "近親相姦", "裤袜", "买春", "妹妹阴毛", "免费成人网站", "免费偷窥网", "免费A片", "摩洛客", "捏弄", "女优", "骚姐姐", "色区", "色书库", "射颜", "兽交", "吸精少女", "下流地带", "性虎", "性饥渴", "淫妹", "淫图", "幼交", "欲火", "嫩屄", "嫩女", "噴精", "情色天崖", "情色文学", "群交亂舞", "日本骚货", "肉唇", "肉沟", "肉棍干骚妇", "肉淫器吞精", "骚妹", "骚女", "骚水", "骚穴", "色狐狸网址", "色狼论坛", "色狼小说", "湿穴", "爽死我了", "舔逼", "舔屁眼", "好嫩", "大波", "做爱电影", "色诱", "秘裂", "采花堂", "含屌", "亚洲性虐", "夫妻自拍", "熟女", "操穴", "裹本", "淫妇", "嫩逼", "欢乐性今宵", "巨乳", "性愛圖片", "学生妹", "炮友之家", "花花公子", "乳沟", "淫虫", "porn", "小姐打飞机", "少女被插", "Ｘ到噴屎尿", "口淫", "按摩棒", "操我", "奸情", "被干", "露逼", "美女高潮", "日逼", "阴缔", "插暴", "人妻", "内射", "肉具", "欲仙欲浪", "玉乳", "被插", "吞精", "暴乳", "成人午夜场", "买春堂", "性之站", "成人社区", "激情聊天", "三八淫", "做爱自拍", "淫妻", "夫妻俱乐部", "激情交友", "诱色uu", "就去色色", "熟妇", "mm美图", "走光偷拍", "77bbb", "虎骑", "咪咪图片", "成人导航", "深爱色色", "厕所偷拍", "成人A片", "夫妻多p", "我就色", "释欲", "你色吗", "裙内偷拍", "男女蒲典", "色97爱", "丝诱", "人妻自拍", "色情工厂", "色色婷婷", "美体艳姿", "颜射自拍", "熟母", "肉丝裤袜", "sm调教", "打野炮", "赤裸天使", "淫欲世家", "就去日", "爱幼阁", "巨屌", "花样性交", "裸陪", "夫妻3p", "大奶骚女", "性愛插穴", "日本熟母", "幼逼", "淫水四溅", "大胆出位", "旅馆自拍", "无套自拍", "快乐AV", "国产无码", "强制浣肠", "援交自拍", "凸肉优", "撅起大白腚", "骚妹妹", "插穴手淫", "双龙入洞", "美女吞精", "处女开包", "调教虐待", "淫肉诱惑", "激情潮喷", "骚穴怒放", "馒头屄", "无码丝袜", "写真", "寂寞自摸", "警奴", "轮操", "淫店", "精液浴", "淫乱诊所", "极品奶妹", "惹火身材", "暴力虐待", "巨乳俏女医", "扉之阴", "淫の方程式", "丁字裤翘臀", "轮奸内射", "空姐性交", "美乳斗艳", "舔鸡巴", "骚B熟女", "淫丝荡袜", "奴隷调教", "阴阜高耸", "翘臀嫩逼", "口交放尿", "媚药少年", "暴奸", "无修正", "国产AV", "淫水横流", "插入内射", "东热空姐", "大波粉B", "互舔淫穴", "丝袜淫妇", "乳此动人", "大波骚妇", "无码做爱", "口爆吞精", "放荡熟女", "巨炮兵团", "叔嫂肉欲", "肉感炮友", "爱妻淫穴", "无码精选", "超毛大鲍", "熟妇骚器", "内射美妇", "毒龙舔脚", "性爱擂台", "圣泉学淫", "性奴会", "密室淫行", "亮屄", "操肿", "无码淫女", "玩逼", "淫虐", "我就去色", "淫痴", "风骚欲女", "亮穴", "操穴喷水", "幼男", "肉箫", "巨骚", "骚妻", "漏逼", "骚屄", "大奶美逼", "高潮白浆", "性战擂台", "淫女炮图", "淫水横溢", "性交吞精", "姦染", "淫告白", "乳射", "操黑", "朝天穴", "公媳乱", "女屄", "慰春情", "集体淫", "淫B", "屄屄", "肛屄", "小嫩鸡", "舔B", "嫩奶", "a4y", "品穴", "淫水翻騰", "一本道", "乳尻", "羞耻母", "艳照", "三P", "露毛", "紧穴", "露点", "g片", "teen", "無碼電影", "插b", "赤裸", "荡女", "浪穴", "露穴", "美穴", "猛插", "嫩穴", "无码", "吸精", "现代情色小说", "性交图", "性息", "艳情小说", "阴部特写", "阴道图片", "淫书", "玉蒲团玉女心经", "援助交易", "中国成人论坛", "中国性爱城", "自拍写真", "做爱图片", "掰穴", "万淫堂", "穴图", "穴淫", "艳舞淫业", "咬着龟头", "要射了", "一夜性网", "阴茎插小穴", "陰穴新玩法", "婬乱军团", "淫逼", "淫姐", "淫浪", "淫流", "淫糜", "淫蜜", "淫魔", "淫母", "淫妞", "淫奴", "钻插", "H动漫", "交换夫妻", "美腿", "舔脚", "蜜洞", "丝袜", "淫情", "亚洲情色网", "强奸处女", "鸡巴暴胀", "美乳", "大众色情成人网", "火辣图片", "淫声浪语", "疯狂抽送", "淫河", "多人性愛", "操屄", "浪女", "色情论坛", "性虎色网", "淫欲日本", "操死", "色迷城", "petgirl", "骚女叫春", "成人百强", "猖妓", "天天干贴图", "密穴贴图", "凌辱", "偷欢", "小逼", "酥痒", "品色堂", "浪妇", "嫖妓指南", "被操", "巨奶", "骚洞", "阴精", "阴阜", "阴屄", "群魔色舞", "扒穴", "六月联盟", "55sss偷拍区", "张筱雨", "xiao77", "极品黑丝", "丝袜写真", "天天情色", "成人小说", "成人文学", "情色艺术天空", "222se图片", "偷拍", "淫色贴图", "厕奴", "美女成人", "酥胸诱惑", "五月天", "人体摄影", "东北xx网", "玛雅网", "成人bt", "周六性吧", "爆乳", "诱惑视频", "裙下风光", "嘻游中国", "操母狗", "御の二代目", "丝袜足交", "肮脏美学", "亚洲有码", "欲仙欲死", "丝袜高跟", "偷拍美穴", "原味丝袜", "裸露自拍", "针孔偷拍", "放荡少妇宾馆", "性感肉丝", "拳交", "迫奸", "品香堂", "北京xx网", "虐奴", "情色导航", "欧美大乳", "欧美无套", "骚妇露逼", "炮友", "淫水丝袜", "母女双飞", "老少乱伦", "幼妓", "素人娘", "前凸后翘", "制服誘惑", "舔屄", "色色成人", "迷奸系列", "性交无码", "惹火自拍", "胯下呻吟", "淫驴屯", "少妇偷情", "护士诱惑", "群奸乱交", "极品白虎", "曲线消魂", "淫腔", "无码淫漫", "假阳具插穴", "蝴蝶逼", "自插小穴", "SM援交", "西洋美女", "爱液横流", "无码无套", "淫战群P", "口爆", "酒店援交", "乳霸", "湿身诱惑", "火辣写真", "动漫色图", "熟女护士", "粉红穴", "经典炮图", "童颜巨乳", "性感诱惑", "援交薄码", "美乳美穴", "奇淫宝鉴", "美骚妇", "跨下呻吟", "无毛美少女", "流蜜汁", "日本素人", "爆乳人妻", "妖媚熟母", "日本有码", "激情打炮", "制服美妇", "无码彩图", "放尿", "入穴一游", "丰唇艳姬", "群奸轮射", "高级逼", "MM屄", "美臀嫰穴", "淫东方", "国产偷拍", "清晰内射", "嫩穴肉缝", "雪腿玉胯", "骚妇掰B", "白嫩骚妇", "梅花屄", "猛操狂射", "潮喷", "无码体验", "吞精骚妹", "紧缚凌辱", "奸淫电车", "堕淫", "颜骑", "互淫", "胸濤乳浪", "夫妻乱交", "黑屄", "奶大屄肥", "拔屄", "穴海", "换妻杂交", "狂插", "黑逼", "粉屄", "口射", "多人轮", "奶挺臀翘", "扒屄", "痴乳", "鬼輪姦", "乳爆", "浴尿", "淫样", "発妻", "姫辱", "插后庭", "操爽", "嫩缝", "操射", "骚妈", "激插", "暴干", "母子交欢", "嫐屄", "足脚交", "露屄", "柔阴术", "相奸", "淫师荡母", "桃园蜜洞", "二穴中出", "奴畜抄", "连続失禁", "大鸡巴", "玩穴", "性交自拍", "骚浪人妻", "东京热", "爷爷", "小弟弟", "小便", "武藤", "慰安妇", "生殖", "女干", "灭族", "鸡吧", "胡瘟", "根正苗红", "疯狗", "腚", "打飞机", "娼", "瘪三", "妈", "爸", "爹", "爷", "奶", "儿子", "sm", "尼玛", "兽兽门", "艾滋", "找小姐", "开房", "黄色网站", "大血逼", "回民", "是猪", "回民是猪", "交合", "兽性", "偷情", "ADMIN", "xtl", "system", "admin", "Administrator", "administrator", "管理", "管里", "管理员", "服务管理", "服务器", "活动管理员", "冬季热", "官方", "维护", "审查", "巡查", "监督", "监管", "game", "master", "GAMEMASTER", "GameMaster", "GM", "Gm", "gm", "Client", "Server", "CS", "Cs", "cs", "cS", "KEFU", "kefu", "Kefu", "KeFu", "助理", "客户服务", "客服", "服务天使", "毛澤東", "劉少奇", "彭德懷", "劉伯承", "陳毅", "聶榮臻", "羅榮桓", "葉劍英", "李大釗", "陳獨秀", "孫文", "孫逸仙", "鄧小平", "陳雲", "江澤民", "李鵬", "朱鎔基", "李瑞環", "李嵐清", "吳邦國", "曾慶紅", "賈慶林", "吳官正", "李長春", "吳儀", "唐家璿", "陳至立", "張德江", "俞正聲", "劉雲山", "劉淇", "賀國強", "李克強", "張高麗", "劉延東", "彭麗媛", "華國鋒", "習大大", "吳幫國", "無幫國", "無邦國", "無幫過", "瘟家寶", "假慶林", "甲慶林", "離長春", "習遠平", "襲近平", "李磕牆", "賀過牆", "和鍋槍", "習主席", "馬凱", "王滬甯", "許其亮", "孫春蘭", "孫政才", "李建國", "張春賢", "范長龍", "趙樂際", "胡春華", "栗戰書", "郭金龍", "布希", "純一郎", "薩馬蘭奇", "默克爾", "克林頓", "雷根", "尼克森", "杜魯門", "赫魯雪夫", "列寧", "史達林", "柴契爾", "阿羅約", "卡斯楚", "佛蘭克林", "華盛頓", "艾森豪", "拿破崙", "亞歷山大", "蘿拉", "鮑威爾", "奧巴馬", "梅德韋傑夫", "安倍晉三", "奧馬爾", "達賴", "達賴喇嘛", "張春橋", "岡村秀樹", "岡村寧次", "高麗朴", "沃爾開西", "李大師", "賴昌星", "馬加爵", "熱那亞", "薄熙來", "王立軍", "令計畫", "赫蒂徹", "法圖麥", "軸永康", "李登輝", "鬱慕明", "蔣經國", "共青團", "六四運動", "民運", "摩門教", "南華早報", "南蠻", "明慧網", "起義", "打倒共產黨", "台獨萬歲", "台獨", "台獨分子", "台聯", "臺灣島國", "臺灣國", "新黨", "一黨專政", "一貫道", "遊行", "政變", "共產黨", "反黨", "民主黨", "轉法輪", "蘇家屯", "基地組織", "東亞病夫", "高治聯", "新聞管制", "核工業基地", "鈾", "原子彈", "氫彈", "導彈", "核潛艇", "國內動態清樣", "雪山獅子旗", "佔領中環", "兩國論", "一邊一國", "多維", "釋迦牟尼", "如來", "阿彌陀佛", "觀世音", "普賢", "聖母", "耶和華", "白蓮教", "東正教", "法輪", "走向圓滿", "黃大仙", "風水", "神漢", "閻王", "黑白無常", "牛頭馬面", "蒙古韃子", "回民吃豬肉", "東方閃電", "七靈派", "實際神", "中華大陸行政執事站", "觀音法門", "石牌教會", "門徒會", "全範圍教會", "三班僕人派", "靈靈教", "謀殺", "殺人", "販毒", "拐賣", "監獄", "強姦", "搶劫", "先奸後殺", "槍支彈藥", "抽頭", "坐莊", "賭馬", "賭球", "籌碼", "老虎機", "輪盤賭", "鴉片", "罌粟", "嗑藥", "賣槍支彈藥", "紅5", "致幻劑", "辱駡", "緋聞", "出軌", "傻畢", "乳貼", "軟妹", "偽娘", "蘿太", "偽男", "黃網", "馬的", "馬白勺", "媽白勺", "女馬ㄉ", "女馬的", "女馬白勺", "幹妳", "幹人也", "幹女也", "機八", "雞八", "機巴", "雞巴", "機叭", "雞叭", "機芭", "雞芭", "機掰", "雞掰", "機Y", "機Ｙ", "雞Y", "雞Ｙ", "機8", "雞８", "幹GY", "幹ＧＹ", "幹七八", "幹78", "幹７８", "懶叫", "懶教", "璩美鳳", "窮逼", "裝逼", "雞奸", "你大爺", "中國豬", "江豬媳", "豬毛", "豬操", "16dy-圖庫", "愛女人", "拔出來", "插進", "調教", "黃色電影", "激情電影", "輪暴", "色貓", "性愛圖庫", "亞情", "中文搜性網", "摸陰蒂", "金鱗豈是池中物", "白虎少婦", "白虎陰穴", "逼癢", "幹穴", "風豔閣", "激情小說", "獸欲", "應召", "幹的爽", "肉蒲團", "男女交歡", "極品波霸", "獸奸", "銷魂洞", "操爛", "成人網站", "一夜歡", "給你爽", "偷窺圖片", "大乳頭", "中年美婦", "脫內褲", "發浪", "肉莖", "摳穴", "顏射", "淫水愛液", "陰核", "母子姦情", "丁香社區", "愛圖公園", "鹿城娛樂", "幼香閣", "隱窩窩", "亂倫熟女網", "插陰", "露陰照", "嫩鮑魚", "日本AV女優", "激情貼圖", "成人論壇", "就去誘惑", "激情裸體", "麗春苑", "窩窩客", "銀民吧", "亞洲色", "愛色cc", "妹妹騷圖", "賓館女郎", "美腿絲足", "無碼長片", "淫水漣漣", "放蕩少婦", "成人圖片", "黃金聖水", "腳交", "勾魂少婦", "乳此絲襪", "日本灌腸", "集體性愛", "國產騷貨", "亞洲淫娃", "熟女亂倫", "大膽少女", "乳此豐滿", "屄屄特寫", "熟女顏射", "恥辱輪奸", "嫵媚挑逗", "騷姨媽", "裸體少婦", "美少婦", "楊思敏", "風騷淫蕩", "明星淫圖", "淫亂熟女", "高潮集錦", "淫獸學園", "俏臀攝魄", "無套內射", "毛鮑", "3P炮圖", "性交課", "性感妖嬈", "人妻交換", "監禁陵辱", "生徒胸觸", "翹臀嫩穴", "春光外瀉", "淫婦自慰", "本土無碼", "淫妻交換", "近親相奸", "豔乳", "肛門噴水", "淫蕩貴婦", "鬼畜輪奸", "浴室亂倫", "生奸內射", "國產嫖娼", "白液四濺", "帶套肛交", "大亂交", "無碼炮圖", "群陰會", "極品波神", "淫亂工作", "白漿四濺", "街頭扒衣", "口內爆射", "肛門拳交", "灌滿精液", "蓮花逼", "自慰摳穴", "洗腸射尿", "人妻色誘", "淫漿", "騷浪美女", "舌頭穴", "人妻做愛", "插穴止癢", "騷乳", "插陰莖", "熟婦人妻", "性傭", "嫩鮑", "騷母", "吃雞巴", "體奸", "廁所盜攝", "豔婦淫女", "盜撮", "薄碼", "巧淫奸戲", "換妻大會", "破處", "g點", "歡歡娛樂時空", "褲襪", "買春", "妹妹陰毛", "免費成人網站", "免費偷窺網", "免費A片", "女優", "騷姐姐", "色區", "色書庫", "射顏", "下流地帶", "性饑渴", "淫圖", "情色文學", "日本騷貨", "肉溝", "肉棍幹騷婦", "肉壺", "騷妹", "騷女", "騷水", "騷穴", "色狐狸網址", "色狼論壇", "色狼小說", "濕穴", "做愛電影", "色誘", "採花堂", "亞洲性虐", "淫婦", "歡樂性今宵", "乳溝", "淫蟲", "小姐打飛機", "姦情", "被幹", "陰締", "內射", "成人午夜場", "買春堂", "成人社區", "做愛自拍", "夫妻俱樂部", "誘色uu", "熟婦", "mm美圖", "虎騎", "咪咪圖片", "成人導航", "深愛色色", "廁所偷拍", "釋欲", "你色嗎", "裙內偷拍", "色97愛", "絲誘", "色情工廠", "美體豔姿", "顏射自拍", "肉絲褲襪", "sm調教", "愛幼閣", "花樣性交", "大奶騷女", "淫水四濺", "大膽出位", "旅館自拍", "無套自拍", "快樂AV", "國產無碼", "強制浣腸", "凸肉優", "騷妹妹", "雙龍入洞", "處女開包", "調教虐待", "淫肉誘惑", "激情潮噴", "騷穴怒放", "饅頭屄", "無碼絲襪", "寫真", "輪操", "淫亂診所", "極品奶妹", "巨乳俏女醫", "扉之陰", "丁字褲翹臀", "輪奸內射", "美乳鬥豔", "舔雞巴", "騷B熟女", "淫絲蕩襪", "奴隷調教", "陰阜高聳", "翹臀嫩逼", "媚藥少年", "無修正", "國產AV", "淫水橫流", "插入內射", "東熱空姐", "絲襪淫婦", "乳此動人", "大波騷婦", "無碼做愛", "放蕩熟女", "巨炮兵團", "愛妻淫穴", "無碼精選", "超毛大鮑", "熟婦騷器", "內射美婦", "毒龍舔腳", "性愛擂臺", "聖泉學淫", "性奴會", "操腫", "無碼淫女", "淫癡", "風騷欲女", "操穴噴水", "肉簫", "巨騷", "騷妻", "騷屄", "高潮白漿", "性戰擂臺", "淫女炮圖", "淫水橫溢", "公媳亂", "集體淫", "小嫩雞", "羞恥母", "豔照", "緊穴", "露點", "愛液", "蕩女", "迷藥", "無碼", "現代情色小說", "性交圖", "豔情小說", "陰部特寫", "陰道圖片", "淫書", "玉蒲團玉女心經", "中國成人論壇", "中國性愛城", "自拍寫真", "做愛圖片", "萬淫堂", "穴圖", "豔舞淫業", "咬著龜頭", "一夜性網", "陰莖插小穴", "婬亂軍團", "鑽插", "H動漫", "交換夫妻", "舔腳", "絲襪", "亞洲情色網", "強姦處女", "雞巴暴脹", "大眾色情成人網", "火辣圖片", "淫聲浪語", "瘋狂抽送", "強暴", "色情論壇", "性虎色網", "騷女叫春", "成人百強", "天天干貼圖", "密穴貼圖", "淩辱", "偷歡", "酥癢", "浪婦", "肉縫", "色窩窩", "騷洞", "陰阜", "陰屄", "六月聯盟", "55sss偷拍區", "張筱雨", "極品黑絲", "絲襪寫真", "成人小說", "成人文學", "情色藝術天空", "222se圖片", "淫色貼圖", "廁奴", "酥胸誘惑", "人體攝影", "東北xx網", "瑪雅網", "週六性吧", "誘惑視頻", "裙下風光", "嘻遊中國", "禦の二代目", "絲襪足交", "骯髒美學", "亞洲有碼", "絲襪高跟", "原味絲襪", "針孔偷拍", "放蕩少婦賓館", "性感肉絲", "北京xx網", "情色導航", "歐美大乳", "歐美無套", "騷婦露逼", "淫水絲襪", "母女雙飛", "老少亂倫", "前凸後翹", "性交無碼", "淫驢屯", "少婦偷情", "護士誘惑", "群奸亂交", "極品白虎", "曲線消魂", "無碼淫漫", "假陽具插穴", "愛液橫流", "無碼無套", "淫戰群P", "濕身誘惑", "火辣寫真", "動漫色圖", "熟女護士", "粉紅穴", "經典炮圖", "童顏巨乳", "性感誘惑", "援交薄碼", "奇淫寶鑒", "美騷婦", "無毛美少女", "日本有碼", "制服美婦", "無碼彩圖", "豐唇豔姬", "群奸輪射", "高級逼", "淫東方", "國產偷拍", "清晰內射", "嫩穴肉縫", "騷婦掰B", "白嫩騷婦", "潮噴", "無碼體驗", "吞精騷妹", "緊縛淩辱", "姦淫電車", "墮淫", "顏騎", "夫妻亂交", "換妻雜交", "多人輪", "奶挺臀翹", "癡乳", "淫樣", "插後庭", "嫩縫", "騷媽", "暴幹", "母子交歡", "足腳交", "柔陰術", "淫師蕩母", "欠幹", "桃園蜜洞", "連続失禁", "大雞巴", "叫雞", "騷浪人妻", "東京熱", "爺爺", "小雞雞", "慰安婦", "猥瑣", "肉體", "滅族", "賤", "雞吧", "根正苗紅", "瘋狗", "癟三", "媽逼", "媽", "爺", "兒子", "尼瑪", "裝B", "偷窺視頻", "獸獸門", "開房", "黃色網站", "管裡", "管理員", "服務管理", "伺服器", "活動管理員", "冬季熱", "維護", "審查", "監督", "監管", "遊戲管理員", "服務天使", "TEsT", "tESt", "test", "TeSt", "tEST", "Test", "測試", "輔助程式", "運營", "運營者", "運營組", "運營商", "運營長", "運營官", "運營人", "蔡文勝", "李興平", "汪東風", "駱海堅", "曹政", "私人伺服器", "外掛", "鞴", "鐾", "瘭", "镳", "黪", "瘥", "觇", "孱", "廛", "蒇", "冁", "羼", "螭", "傺", "瘛", "舂", "艟", "瘳", "雠", "搋", "嘬", "辏", "殂", "汆", "爨", "榱", "毳", "皴", "蹉", "鹾", "纛", "髑屙民", "莪", "苊", "鲕", "鲼", "瀵", "酆", "幞", "黻", "呒", "黼", "阝", "彀", "觏", "毂", "汩", "罟", "嘏", "鲴", "宄", "庋", "刿", "虢", "馘", "撖", "夯", "薅", "曷", "翮", "觳", "冱", "怙", "戽", "祜", "瓠", "鹱", "溷", "耠", "锪", "劐", "蠖", "丌", "乩", "赍", "殛", "蕺", "掎", "彐", "芰", "跽", "鲚", "葭", "恝", "湔", "搛", "鲣", "鞯", "囝", "趼", "醮", "疖", "苣", "屦", "醵", "蠲", "桊", "鄄", "谲", "爝", "麇", "贶", "悝", "喟", "仂", "泐", "鳓", "诔", "酹", "嫠", "黧", "蠡", "醴", "鳢", "轹", "詈", "跞", "奁", "臁", "蚍", "埤", "罴", "鼙", "庀", "仳", "圮綦", "屺", "綮", "汔", "碛", "葜", "佥", "岍", "愆", "搴", "钤", "掮", "凵", "肷", "椠", "戕", "锖", "檠", "苘", "謦", "庆红", "跫", "銎", "邛", "筇", "蛩鼽", "诎", "麴", "黢", "劬", "朐", "璩", "蘧", "衢", "蠼毵", "糁", "xijinping", "likeqiang", "zhangdejiang", "yuzhengsheng", "liuyunshan", "wangqishan", "zhanggaoli", "dishun", "Dishun", "hujintao", "jiangzemin", "pengliyuan", "quannengshenjiao", "liruihuan", "wenjiabao", "lipeng", "lichangchun", "wubangguo", "zhurongji", "zhouyongkang", "maozedong", "zhouenlai", "lihongzhi", "boxilai", "liulijun", "xinjiangduli", "xizangduli", "xinwenguanzhi", "lianggezhongguo", "taiwanduli", "dalailama", "bitch", "lilanqing", "jiaqinglin", "falungong", "falundafahao", "xiejiao", "gongchandang", "zhonghuaminguo", "yidangzhuanzheng", "liushaoqi", "xucaihou", "zhaoziyang", "dengxiaoping", "jiangjieshi", "jiangjingguo", "chenshuibian", "huimin", "yisilan", "zhenzhu", "shijiamouni", "taidu", "liusi", "zengqinghong", "tiananmen", "renmindahuitang", "dang", "guojia", "lingjihua", "DISHUN", "DiShun", "zhude", "pengdehuai", "linbiao", "liubocheng", "chenyi", "helong", "nierongzhen", "xuxiangqian", "luoronghuan", "yejianying", "lidazhao", "chenduxiu", "sunzhongshan", "sunwen", "sunyixian", "chenyun", "weijianxing", "luogan", "huangju", "wuguanzheng", "wuyi", "huiliangyu", "zengpeiyan", "caogangchuan", "tangjiaxuan", "huajianmin", "chenzhili", "wanglequan", "wanggang", "wangzhaoguo", "liuqi", "heguoqiang", "guobaxiong", "huyaobang", "bushi", "bulaier", "xiaoquan", "chunyilang", "samalanqi", "annan", "Alafate", "pujing", "mokeer", "kelindun", "ligen", "nikesong", "linken", "dulumen", "heluxiaofu", "liening", "sidalin", "makesi", "engesi", "jinzhengri", "jinricheng", "sadamu", "huzhiming", "xihanuke", "xilake", "saqieer", "Aluoyue", "mandela", "kasiteluo", "fulankelin", "huashengdun", "aisenhaoweier", "napolun", "yalishanda", "luyi", "lamusifeierde", "laola", "baoweier", "aobama", "meideweijiefu", "jinzhengen", "anbeijinsan", "benladeng", "aomaer", "chailing", "dalai", "jiangqing", "zhangchunqiao", "yaowenyuan", "wanghongwen", "dongtiaoyingji", "xitele", "mosuolini", "gangcunxiushu", "gangcunningci", "gaolipiao", "wangdan", "woerkaixi", "lidashi", "laichangxing", "majiajue", "banchan", "eerdeni", "shanbenwushiliu", "Abian", "Abianwansui", "renaya", "wanglijun", "mohanmode", "yuyongkang", "zhoujiankang", "yujiankang", "zhouxiaokang", "chenliangyu", "lidenghui", "lianzhan", "songchuyu", "luxiulian", "yumuming", "jiangzhongzheng", "mayingjiu", "WANGQISHAN", "16大", "18摸", "6-4tianwang", "89-64cdjp", "Aiort墓地", "ai滋", "Arqus会议场", "Atan的移动石", "Baichi", "Baopi", "Bao皮", "Bc", "biaozi", "Biao子", "Bi样", "BLOWJOB", "B样", "caoB", "caobi", "cao你", "cao你妈", "cao你大爷", "cha你", "chinaliberal", "chinamz", "chinesenewsnet", "Clockgemstone", "cnd", "creaders", "Crestbone", "dafa", "dajiyuan", "damn", "dfdz", "dpp", "EVENT", "falu", "falun", "falundafa", "fa轮", "Feelmistone", "Fku", "FLG", "flg", "freechina", "freedom", "freenet", "gan你", "GCD", "gcd", "Gruepin", "HACKING", "hongzhi", "hrichina", "http", "huanet", "hypermart.net", "incest", "item", "jiangdongriji", "jian你", "jiaochuang", "jiaochun", "jiba", "jinv", "Ji女", "Kao", "KISSMYASS", "Mai骚", "making", "minghui", "minghuinews", "nacb", "naive", "Neckromancer", "nmis", "paper64", "peacehall", "PENIS", "playboy", "pussy", "qiangjian", "Rape", "renminbao", "renmingbao", "rfa", "safeweb", "saobi", "SEX", "simple", "sucker", "svdc", "System", "taip", "TEST", "The9", "The9City", "tibetalk", "triangle", "triangleboy", "Tringel", "UltraSurf", "unixbox", "ustibet", "voa", "voachinese", "wangce", "WEBZEN", "WG", "wstaiji", "xinsheng", "yuming", "zhengjian", "zhengjianwang", "zhenshanren", "zhuanfalunADMIN", "AIORT墓地", "AI滋", "ARQUS会议场", "ASSHOLE", "ATAN的移动石", "BAICHI", "BAOPI", "BAO皮", "BASTARD", "BC", "BIAOZI", "BIAO子", "BIGNEWS", "BITCH", "BI样", "BOXUN", "CAOB", "CAOBI", "CAO你", "CC小雪", "CHA你", "CHINALIBERAL", "CHINAMZ", "CHINESENEWSNET", "CLOCKGEMSTONE", "CND", "CREADERS", "CRESTBONE", "DAFA", "DAJIYUAN", "DAMN", "DFDZ", "DPP", "FALU", "FALUN", "FALUNDAFA", "FA轮", "FEELMISTONE", "FKU", "FREECHINA", "FREEDOM", "FREENET", "GAN你", "GRUEPIN", "HONGZHI", "HRICHINA", "HTTP", "HUANET", "HYPERMART.NET", "INCEST", "ITEM", "JIANGDONGRIJI", "JIAN你", "JIAOCHUANG", "JIAOCHUN", "JIBA", "JINV", "JI女", "KAO", "㎏", "LIHONGZHI", "MAI骚", "MAKING", "MINGHUI", "MINGHUINEWS", "㎎", "㎜", "NACB", "NAIVE", "NECKROMANCER", "NMIS", "PAPER64", "PEACEHALL", "PLAYBOY", "PUSSY", "QIANGJIAN", "RAPE", "RENMINBAO", "RENMINGBAO", "RFA", "SAFEWEB", "SAOBI", "SB", "SF", "SIMPLE", "SUCKER", "SVDC", "SYSTEM", "TAIP", "THE9", "THE9CITY", "TIBETALK", "TRIANGLE", "TRIANGLEBOY", "TRINGEL", "ULTRASURF", "UNIXBOX", "USTIBET", "VOA", "VOACHINESE", "WANGCE", "WSTAIJI", "WWW", "WWW.", "XINSHENG", "YUMING", "ZHENGJIAN", "ZHENGJIANWANG", "ZHENSHANREN", "ZHUANFALUN", "ice", "ICE", "narcotics", "av", "扫黄打非", "bcd.s.59764.com", "kkk.xaoh.cn", "www.xaoh.cn", "zzz.xaoh.cn", "aa.yazhousetu.hi.9705.net.cn", "eee.xaoh.cn", "lll.xaoh.cn", "jj.pangfangwuyuetian.hi.9705.net.cn", "rrr.xaoh.cn", "ooo.xaoh.cn", "www.zy528.com", "aaad.s.59764.com", "www.dy6789.cn", "aaac.s.51524.com", "208.43.198.56", "166578.cn", "www.wang567.com", "www.bin5.cn", "www.sanjidianying.com.cn", "www.anule.cn", "www.976543.com", "www.50spcombaidu1828adyou97sace.co.cc", "chengrenmanhua.1242.net.cn", "qingsewuyuetian.1174.net.cn", "lunlidianyingxiazai.1174.net.cn", "siwameitui.1274.net.cn", "niuniujidi.1174.net.cn", "xiao77.1243.net.cn", "woyinwose.1243.net.cn", "dingxiang.1249.net", "cnaicheng.1174.net.cn", "1234chengren.1249.net.cn", "sewuyuetian.1174.net.cn", "huangsexiaoshuo.1242.net.cn", "lunlidianying.1274.net.cn", "xingqingzhongren.1174.net.cn", "chengrenwangzhi.1242.net.cn", "xiao77luntan.1249.net.cn", "dingxiang.1243.net.cn", "11xp.1243.net.cn", "baijie.1249.net.cn", "sewuyuetian.1274.net.cn", "meiguiqingren.1274.net.cn", "tb.hi.4024.net.cn", "www.91wangyou.com", "www.wow366.cn", "www.yxnpc.com", "www.365jw.com", "58.253.67.74", "www.978808.com", "www.sexwyt.com", "7GG", "www.567yx.com", "131.com", "bbs.7gg.cn", "www.99game.net", "ppt.cc", "www.zsyxhd.cn", "www.foyeye.com", "www.23nice.com.cn", "www.maituan.com", "www.ylteam.cn", "www.yhzt.org", "vip886.com", "www.neicehao.cn", "bbs.butcn.com", "www.gamelifeclub.cn", "consignment5173", "www.70yx.com", "www.legu.com", "ko180", "bbs.pkmmo", "whoyo.com", "www.2q5q.com", "www.zxkaku.cn", "www.gw17173.cn", "www.315ts.net", "qgqm.org", "17173dl.net", "i9game.com", "365gn", "158le.com", "1100y.com", "bulaoge.com", "17youle.com", "reddidi.com.cn", "icpcn.com", "ul86.com", "showka8.com", "szlmgh.cn", "bbs.766.com", "www.766.com", "91bysd.cn", "jiayyou.cn", "gigabyte.cn", "duowan", "wgxiaowu.com", "youxiji888.cn", "yz55.cn", "Carrefour", "51jiafen.cn", "597ft.com", "itnongzhuang.com2y7v.cnhwxvote.cn", "92klgh.cn", "xiaoqinzaixian.cn", "661661.com", "haosilu.com", "dl.com", "xl517.com", "sjlike.com", "tont.cn", "xq-wl.cn", "feitengdl.com", "bz176.com", "dadati.com", "asgardcn.com", "dolbbs.com", "okaygood.cn", "1t1t.com", "jinpaopao.com", "blacksee.com.cn", "1qmsj.com", "202333.com", "luoxialu.cn", "37447.cn", "567567aa.cn", "09city.com", "71ka.com", "fy371.com", "365tttyx.com", "host800.com", "lybbs.info", "ys168.com", "88mysf.com", "5d6d.com", "id666.uqc.cn", "stlmbbs.cn", "pcikchina.com", "lxsm888.com", "wangyoudl.com", "chinavfx.net", "zxsj188.com", "wg7766.cn", "e7sw.cn", "jooplay.com", "gssmtt.com", "likeko.com", "lyx-game.cn", "wy33.com", "zy666.net", "newsmth.net", "l2jsom.cn", "13888wg.com", "qtoy.com", "1000scarf.com", "digitallongking.com", "zaixu.net", "ncyh.cn", "888895.com", "ising99.com", "cikcatv.2om", "parke888.com", "01gh.com", "gogo.net", "uu1001.com", "wy724.com", "prettyirene.net", "yaokong7.com", "zzmysf.com", "52sxhy.cn", "92wydl.com", "g365.net", "pkmmo.com", "52ppsa.cn", "bl62.com", "canyaa.com", "lordren.com", "xya3.cn", "5m5m5m.com", "www.gardcn.com", "www.sf766.com.cn", "ent365.com", "18900.com", "7mmo.com", "cdream.com", "wy3868.com", "nbfib.cn", "17173yxdl.cn", "osisa.cn", "haouse.cn", "54hero.com", "ieboy.cn", "geocities.com", "xiuau.cn", "cvceo.com", "fxjsqc.com", "thec.cn", "c5c8.cn", "a33.com", "qqsg.org", "my3q.com", "51juezhan.com", "kartt.cn", "hexun.com", "15wy.com", "13ml.net", "homexf.cn", "xyxgh.com", "jdyou.com", "langyou.info", "duowan.com", "8188mu.com", "tianlong4f.cn", "yeswm.com", "wgbobo.cn", "haog8.cn", "47513.cn", "92ey.com", "hao1788.co", "mgjzybj.com", "xdns.eu", "shenycs.co", "mpceggs.cn", "kod920.cn", "njgamecollege.org", "51hdw.com", "025game.cn", "bibidu.com", "bwowd.com", "3kwow.com", "zx002.com", "bazhuwg.cn", "991game.com", "zuanshi1000.cn", "10mb.cn", "Huihuangtx.com", "chongxianmu.cn", "any2000.com", "99sa.com", "zhidian8.com", "t9wg.cn", "bobaoping", "qixingnet.com", "88kx.com", "00sm.cn", "moyi520.cn", "d666.com", "fisonet.com", "0571qq.com", "173at.com", "pk200.com", "2feiche.cn", "jjdlw.com", "xyq2sf.com", "69nb.com", "txwsWind", "jiayyou.com", "胡总书记", "胡景涛", "大纪元", "十八大", "中联部", "打黄扫非", "蓝鲸", "钓鱼岛", "茉莉花", "突尼斯", "特么的", "吊爆了" ], 
        cc._RF.pop();
    }, {} ],
    SuccessTip: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "daf73Q0C31HD7hxM18qbjNN", "SuccessTip"), cc.Class({
            extends: cc.Component,
            properties: {
                listPNG: [ cc.SpriteFrame ],
                fhbSpr: cc.SpriteFrame
            },
            start: function() {},
            onDisable: function() {
                cc.find("NewSprite/showType/fhb", this.node).active = !1, this.node.getChildByName("NewSprite").getChildByName("showType").getChildByName("zuan").position = cc.p(0, 0);
            }
        }), cc._RF.pop();
    }, {} ],
    UserInfo: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "f0ea6YWatBOZotpyXywr/ZI", "UserInfo");
        var n = e("Config"), a = (e("../tools/utils"), e("../tools/weixin"), e("../net/SendCMD"));
        cc.Class({
            extends: cc.Component,
            properties: {
                propPlist: {
                    default: null,
                    type: cc.SpriteAtlas
                }
            },
            onLoad: function() {},
            setType: function(e, t) {
                this.type = e, t && (this.model = t), 1 == this.type ? this.init() : this.init1();
            },
            init: function() {
                cc.find("userInfoBg/grop/name", this.node).getComponent(cc.Label).string = e("../common/Common").substring(n.USER.name, 4, !0), 
                cc.find("userInfoBg/mid", this.node).getComponent(cc.Label).string = "ID:" + n.USER.mid;
                cc.find("userInfoBg/headkuang", this.node).getComponent("HeadPortrait").loadImg(n.USER.icon);
                var t = cc.find("userInfoBg/grop/sex", this.node);
                0 == n.USER.sex ? cc.loader.loadRes("com/textures/icon_boy", cc.SpriteFrame, function(e, i) {
                    t.getComponent(cc.Sprite).spriteFrame = i;
                }) : cc.loader.loadRes("com/textures/icon_girl", cc.SpriteFrame, function(e, i) {
                    t.getComponent(cc.Sprite).spriteFrame = i;
                }), this.node.getChildByName("bgmask").on("click", this.close, this);
                var i = cc.find("userInfoBg/rank/rankName", this.node).getComponent(cc.Label), a = cc.find("userInfoBg/rank/rankIcon", this.node), o = cc.find("userInfoBg/gameDate/num", this.node).getComponent(cc.Label), s = cc.find("userInfoBg/gameDate/per", this.node).getComponent(cc.Label);
                cc.find("userInfoBg/money/gold/num", this.node).getComponent(cc.Label).string = e("../common/Common").numberThousands(n.USER.gold), 
                cc.find("userInfoBg/money/diamond/num", this.node).getComponent(cc.Label).string = e("../common/Common").numberThousands(n.USER.diamonds), 
                JavaRequest.getPlayLevel({
                    mid: n.USER.mid
                }, function(e) {
                    if (0 == e.error) {
                        var t = e.data[0].aLevel, r = e.data[0].bLevel;
                        n.myALevel = t, n.myBLevel = r;
                        var c = "";
                        c = 7 == t ? n.aLevel[t - 1] : n.aLevel[t - 1] + n.bLevel[r - 1], i.string = c, 
                        cc.loader.loadRes("hall/duanWei/" + t, cc.SpriteFrame, function(e, t) {
                            a.getComponent(cc.Sprite).spriteFrame = t;
                        }), o.string = e.data[0].win + "胜/" + (e.data[0].all - e.data[0].win) + "负", s.string = parseInt(e.data[0].win / e.data[0].all * 100) + "%";
                    }
                });
            },
            init1: function() {
                var t = this.model;
                cc.find("userInfoBg/grop/name", this.node).getComponent(cc.Label).string = e("../common/Common").substring(t.name, 4, !0);
                var i = cc.find("userInfoBg/grop/sex", this.node), a = t.sex;
                0 == a ? cc.loader.loadRes("com/textures/icon_boy", cc.SpriteFrame, function(e, t) {
                    i.getComponent(cc.Sprite).spriteFrame = t;
                }) : 1 == a ? cc.loader.loadRes("com/textures/icon_girl", cc.SpriteFrame, function(e, t) {
                    i.getComponent(cc.Sprite).spriteFrame = t;
                }) : i.active = !1;
                var o = cc.find("userInfoBg/mid", this.node).getComponent(cc.Label);
                o.string = "ID:" + t.mid;
                var s = cc.find("userInfoBg/rank/rankName", this.node).getComponent(cc.Label), r = cc.find("userInfoBg/rank/rankIcon", this.node);
                if (t.mid != n.USER.mid) {
                    var c = Number(t.mid);
                    c >= 500 && c < 1e3 ? o.string = "ID:900" + t.mid : c >= 500 && c <= 5e3 && (o.string = "ID:90" + t.mid);
                }
                cc.find("userInfoBg/headkuang", this.node).getComponent("HeadPortrait").loadImg(t.icon);
                JavaRequest.getPlayLevel({
                    mid: t.mid
                }, function(e) {
                    if (0 == e.error) {
                        var t = e.data[0].aLevel, i = e.data[0].bLevel, a = "";
                        a = 7 == t ? n.aLevel[t - 1] : n.aLevel[t - 1] + n.bLevel[i - 1], s.string = a, 
                        cc.loader.loadRes("hall/duanWei/" + t, cc.SpriteFrame, function(e, t) {
                            r.getComponent(cc.Sprite).spriteFrame = t;
                        });
                    }
                });
                var l = cc.find("userInfoBg/dialogBg/propsBg/propsList", this.node).getComponent(cc.ScrollView);
                this.propsList = l, this.node.getChildByName("bgmask").on("click", this.close, this), 
                this.showPropsList();
            },
            actionItem: function(e) {
                var t = cc.sequence(cc.scaleTo(.2, 1.1, 1.1), cc.scaleTo(.2, 1, 1));
                e.runAction(t);
            },
            showPropsList: function() {
                var e = this;
                cc.loader.loadRes("comgame/propsItem", function(t, i) {
                    for (var a = 1; a <= 5; a++) {
                        var o = cc.instantiate(i), s = o.getChildByName("itemBg");
                        e.propsList;
                        s.attr({
                            tag: a
                        }), s.getChildByName("propIcon").getComponent(cc.Sprite).spriteFrame = e.propPlist.getSpriteFrame("0" + a), 
                        s.on("click", function(t) {
                            e.clickPropIcon(t.target.tag);
                        }, e), e.propsList.content.addChild(o);
                    }
                    if (e.interId = setInterval(function() {
                        var t = Math.ceil(5 * Math.random()) - 1;
                        e.actionItem(e.propsList.content.children[t].getChildByName("itemBg").getChildByName("propIcon"));
                    }, 1500), 100 != n.daojuTime) {
                        for (var r = 0; r < e.propsList.content.children.length; r++) e.propsList.content.children[r].getChildByName("mask").active = !0, 
                        e.propsList.content.children[r].getChildByName("mask2").active = !0;
                        var c = n.daojuTime, l = n.daojuTotleNum;
                        e.timeCall = setInterval(function() {
                            if (l -= .01, --c >= 0) for (var t = 0; t < e.propsList.content.children.length; t++) e.propsList.content.children[t].getChildByName("mask").getComponent(cc.ProgressBar).progress = l; else {
                                for (var i = 0; i < e.propsList.content.children.length; i++) e.propsList.content.children[i].getChildByName("mask").active = !1, 
                                e.propsList.content.children[i].getChildByName("mask2").active = !1;
                                clearInterval(e.timeCall);
                            }
                        }, 50);
                    }
                });
            },
            clickPropIcon: function(e) {
                console.log("taggggg:" + e + "player:" + this.model), a.sendProp(e, this.model.mid, 0), 
                100 == n.daojuTime && this.cooling(this.seatNum), this.close();
            },
            close: function() {
                this.cb && this.cb(), clearInterval(this.timeCall), clearInterval(this.interId), 
                this.node.destroy();
            },
            callBackSomeThing: function(e) {
                this.cb = e;
            },
            cooling: function() {
                n.daojuTimeCall = setInterval(function() {
                    n.daojuTime--, n.daojuTotleNum = n.daojuTotleNum - .01, n.daojuTime < 0 && (clearInterval(n.daojuTimeCall), 
                    n.daojuTime = 100, n.daojuTotleNum = 1);
                }, 50);
            }
        }), cc._RF.pop();
    }, {
        "../common/Common": "Common",
        "../net/SendCMD": "SendCMD",
        "../tools/utils": "utils",
        "../tools/weixin": "weixin",
        Config: "Config"
    } ],
    WinGoOn: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "dafd6+xAJRI8bRhb88fjBrg", "WinGoOn");
        var n = e("../tools/weixin"), a = e("../tools/utils"), o = e("Config");
        cc.Class({
            extends: cc.Component,
            properties: {
                winContent: cc.Label,
                winCount: cc.Sprite,
                shareNode: cc.Node,
                goOn: cc.Node,
                userMsg: cc.Node,
                poke: cc.Node
            },
            onLoad: function() {
                var t = this, i = 1 == e("Config").ServerType;
                t.goOn && t.goOn.isValid && (t.goOn.active = !1), t.shareNode.getChildByName("txt").getComponent(cc.Label).string = i ? "继续游戏" : "分享到群炫耀", 
                i && (t.shareNode.y -= 30), t.shareNode.on("touchend", function(e) {
                    i ? t.goOnFn && t.goOnFn() : (t.showGoOnDownTime && clearTimeout(t.showGoOnDownTime), 
                    t.shareNode.active = !1, t.goOn.active = !1, t.showShareBtn = setTimeout(function() {
                        o.shareSwitch ? (n.onMenuShareAppMessage({}), t.goOnFn && t.goOnFn()) : n.onMenuShareAppMessage({
                            cbSucc: function(e) {
                                e && e.shareTickets && n.aldSendEvent("闯关场", {
                                    "连胜": "分享到群成功"
                                }), t.goOnFn && t.goOnFn();
                            },
                            cbFail: function(e) {
                                t.shareNode.active = !0, t.goOn.active = !0, n.aldSendEvent("闯关场", {
                                    "连胜": "分享到群失败"
                                });
                            }
                        });
                    }, 500));
                }), t.goOn.on("touchend", function(e) {
                    t.goOnFn && t.goOnFn();
                }), i || (t.goOn.active = !0);
            },
            onDestroy: function() {
                this.showShareBtn && clearTimeout(this.showShareBtn);
            },
            setData: function(t) {
                this.goOnFn = t.goOnFn;
                var i = t.guan || 3, n = 71;
                5 == i ? n = 88 : 7 == i && (n = 92), this.winContent.string = "我超越了" + n + "%的玩家！", 
                cc.loader.loadRes("pdkgame/winGoOn/txt_" + i, cc.SpriteFrame, function(e, t) {
                    e || (this.winCount.spriteFrame = t);
                }.bind(this));
                var o = t.winGoOnPoke && t.winGoOnPoke.length > 0 ? t.winGoOnPoke : [ "3s", "4s", "5s", "6s", "7s", "8s", "9s", "Ts", "Js", "Qs", "Ks", "Js", "Qs", "Ks", "As", "2s" ];
                RESOURCE.getPrefab("pdkCard", function(e) {
                    var t = !0, i = !1, n = void 0;
                    try {
                        for (var a, s = o[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                            var r = a.value, c = cc.instantiate(e), l = {};
                            l.val = r, c.getComponent("cardPoker").initCard(l), c.parent = this.poke, c.position = cc.p(0, 0), 
                            c.setScale(.6);
                        }
                    } catch (e) {
                        i = !0, n = e;
                    } finally {
                        try {
                            !t && s.return && s.return();
                        } finally {
                            if (i) throw n;
                        }
                    }
                }.bind(this));
                var s = cc.find("headMask/head", this.userMsg), r = function(e) {
                    var t = cc.size(121, 121), i = 1 * e.getContentSize().width, n = t.height / i;
                    e.scale = 1 * n;
                };
                t.icon ? cc.loader.load({
                    url: t.icon,
                    type: "jpg"
                }, function(e, t) {
                    if (!e) {
                        var i = new cc.SpriteFrame(t);
                        s.getComponent(cc.Sprite).spriteFrame = i, r(s);
                    }
                }.bind(this)) : cc.loader.loadRes("com/textures/default", cc.SpriteFrame, function(e, t) {
                    s.getComponent(cc.Sprite).spriteFrame = t, r(s);
                }), this.userMsg.getChildByName("uName").getComponent(cc.Label).string = e("Common").substring(t.uName, 5) || "牵手游戏", 
                this.userMsg.getChildByName("wTime").getComponent(cc.Label).string = a.timesTampToTime(Date.parse(new Date()) / 1e3);
            }
        }), cc._RF.pop();
    }, {
        "../tools/utils": "utils",
        "../tools/weixin": "weixin",
        Common: "Common",
        Config: "Config"
    } ],
    base64_new: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "de27fHVE/NFJ6LcnPSpDwaL", "base64_new");
        var n = {}, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        n.encode = function(e) {
            var t, i, n, o, s, r, c, l = "", d = 0;
            for (e = this._utf8_encode(e); d < e.length; ) o = (t = e.charCodeAt(d++)) >> 2, 
            s = (3 & t) << 4 | (i = e.charCodeAt(d++)) >> 4, r = (15 & i) << 2 | (n = e.charCodeAt(d++)) >> 6, 
            c = 63 & n, isNaN(i) ? r = c = 64 : isNaN(n) && (c = 64), l = l + a.charAt(o) + a.charAt(s) + a.charAt(r) + a.charAt(c);
            return l;
        }, n.decode = function(e) {
            var t, i, n, o, s, r, c = "", l = 0;
            for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < e.length; ) t = a.indexOf(e.charAt(l++)) << 2 | (o = a.indexOf(e.charAt(l++))) >> 4, 
            i = (15 & o) << 4 | (s = a.indexOf(e.charAt(l++))) >> 2, n = (3 & s) << 6 | (r = a.indexOf(e.charAt(l++))), 
            c += String.fromCharCode(t), 64 != s && (c += String.fromCharCode(i)), 64 != r && (c += String.fromCharCode(n));
            return c = this._utf8_decode(c);
        }, n._utf8_encode = function(e) {
            e = e.replace(/\r\n/g, "\n");
            for (var t = "", i = 0; i < e.length; i++) {
                var n = e.charCodeAt(i);
                n < 128 ? t += String.fromCharCode(n) : n > 127 && n < 2048 ? (t += String.fromCharCode(n >> 6 | 192), 
                t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224), 
                t += String.fromCharCode(n >> 6 & 63 | 128), t += String.fromCharCode(63 & n | 128));
            }
            return t;
        }, n._utf8_decode = function(e) {
            for (var t = "", i = 0, n = 0, a = 0, o = 0; i < e.length; ) (n = e.charCodeAt(i)) < 128 ? (t += String.fromCharCode(n), 
            i++) : n > 191 && n < 224 ? (a = e.charCodeAt(i + 1), t += String.fromCharCode((31 & n) << 6 | 63 & a), 
            i += 2) : (a = e.charCodeAt(i + 1), o = e.charCodeAt(i + 2), t += String.fromCharCode((15 & n) << 12 | (63 & a) << 6 | 63 & o), 
            i += 3);
            return t;
        }, t.exports = n, cc._RF.pop();
    }, {} ],
    cardPoker: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "a8b5foJStRHgq79c03A8jOa", "cardPoker");
        var n = e("Config"), a = {
            s: {
                big: "blackheart_b",
                small: "blackheart_s",
                preFix: "b_"
            },
            h: {
                big: "redheart_b",
                small: "redheart_s",
                preFix: "r_"
            },
            c: {
                big: "flower_b",
                small: "flower_s",
                preFix: "b_"
            },
            d: {
                big: "redblock_b",
                small: "redblock_s",
                preFix: "r_"
            }
        }, o = {
            A: {
                intValue: 14,
                endFix: "01"
            },
            2: {
                intValue: 15,
                endFix: "02"
            },
            3: {
                intValue: 3,
                endFix: "03"
            },
            4: {
                intValue: 4,
                endFix: "04"
            },
            5: {
                intValue: 5,
                endFix: "05"
            },
            6: {
                intValue: 6,
                endFix: "06"
            },
            7: {
                intValue: 7,
                endFix: "07"
            },
            8: {
                intValue: 8,
                endFix: "08"
            },
            9: {
                intValue: 9,
                endFix: "09"
            },
            T: {
                intValue: 10,
                endFix: "10"
            },
            J: {
                intValue: 11,
                endFix: "11"
            },
            Q: {
                intValue: 12,
                endFix: "12"
            },
            K: {
                intValue: 13,
                endFix: "13"
            }
        };
        cc.Class({
            extends: cc.Component,
            properties: {
                color_b: cc.Node,
                color_s: cc.Node,
                font: cc.Node,
                mask: cc.Node,
                cardBack: cc.Node,
                xsIcon: cc.Node
            },
            onLoad: function() {},
            start: function() {},
            initCard: function(e, t, i) {
                this.xsIcon.active = i;
                var s;
                this.val = e.val, this.sValue = this.val.substr(0, 1), this.nValue = o[this.sValue].intValue, 
                this.type = this.val.substr(-1), s = "num-" + a[this.type].preFix + o[this.sValue].endFix, 
                this.resColor = a[this.type], this.font.getComponent(cc.Sprite).spriteFrame = n.cardAtlas.getSpriteFrame(s), 
                this.color_s.getComponent(cc.Sprite).spriteFrame = n.cardAtlas.getSpriteFrame(this.resColor.small), 
                this.color_b.getComponent(cc.Sprite).spriteFrame = n.cardAtlas.getSpriteFrame(this.resColor.big), 
                this.curSelectStatus = !1, this.selectEnabled = !0, this.selected = !1, this.turnOver = t, 
                0 == this.turnOver ? this.setCardFlix(!1) : this.setCardFlix(!0);
            },
            getWorldRect: function() {
                var e = cc.p(this.node.getPosition()), t = this.node.getContentSize(), i = {
                    x: e.x - .5 * t.width,
                    y: e.y - .5 * t.height,
                    width: t.width,
                    height: t.height
                };
                return this.curSelectStatus && (i.y = i.y + 20), i;
            },
            setCardNodeSelectStatus: function() {
                this.curSelectStatus ? this.node.y = 126 : this.node.y = 106;
            },
            setSelectStatus: function(e) {
                this.curSelectStatus = e, this.setCardNodeSelectStatus();
            },
            getCurSelectStatus: function() {
                return this.curSelectStatus;
            },
            changeSelectStatus: function() {
                0 != this.selectEnabled && (this.curSelectStatus = !this.curSelectStatus, this.setCardNodeSelectStatus());
            },
            setCardColor: function(e) {
                this.node.color = e;
            },
            getCardSelectEnabled: function() {
                return this.selectEnabled;
            },
            setCardSelectEnabled: function(e) {
                this.selectEnabled = e, this.selectEnabled ? (this.node.color = new cc.Color(255, 255, 255), 
                this.setMaskVisible(!1)) : (this.node.color = new cc.Color(220, 220, 220), this.setMaskVisible(!1));
            },
            setMaskVisible: function(e) {
                this.mask.active = !!e, this.selected = e;
            },
            getServerString: function() {
                return this.val;
            },
            getPokeIntValue: function() {
                return this.nValue;
            },
            setCardFlix: function(e) {
                this.color_s.active = e, this.color_b.active = e, this.font.active = e, this.cardBack.active = !e;
            }
        }), cc._RF.pop();
    }, {
        Config: "Config"
    } ],
    dissolveRoom: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "cddd4IeA5hNray0JvukSASD", "dissolveRoom");
        e("SendCMD");
        cc.Class({
            extends: cc.Component,
            properties: {
                refuseBtn: cc.Node,
                agreeBtn: cc.Node,
                title: cc.Node,
                line: {
                    type: cc.Node,
                    default: []
                },
                time: cc.Node,
                mywaitInfo: cc.Node
            },
            onLoad: function() {},
            start: function() {}
        }), cc._RF.pop();
    }, {
        SendCMD: "SendCMD"
    } ],
    menuNode: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c9088dVCiFI3JMCBucwVRW1", "menuNode");
        var n = e("Config"), a = e("Common"), o = e("SendCMD"), s = e("../tools/utils"), r = e("../tools/weixin");
        cc.Class({
            extends: cc.Component,
            properties: {
                game: cc.Node
            },
            onLoad: function() {
                if (this.PDKGameScene = this.game.getComponent("PdkScene"), null != this.PDKGameScene) {
                    var e = this.PDKGameScene.menuNode;
                    this.btnReady = cc.find("center/ready", e), this.btnExit = cc.find("center/exit", e), 
                    this.btnExit.active = !1, this.btnCallFriend = cc.find("center/callfriend", e), 
                    this.btnChat = cc.find("bottom/chat", e), this.btnChat.active = !1, this.btnJiesan = cc.find("right/btnExit", e), 
                    this.ruleBtn = cc.find("right/btnRule", e), this.btnSound = cc.find("bottom/btnSound", e), 
                    this.btnSoundNo = cc.find("no", this.btnSound), this.btnjCancelTG = cc.find("center/cancelTGBtn", e), 
                    this.btnYaobuqi = cc.find("center/yaobuqi", e), this.btnShezhi = cc.find("bottom/btnSetting", e), 
                    this.btnShezhi.active = !1, this.btnjCancelTG.active = !1;
                    var t = Number(s.getUserSetting("music_enabled", 1));
                    this.btnSoundClick(null, t), this.btnTishi = cc.find("center/tishi", e), this.btnChupai = cc.find("center/chupai", e), 
                    this.btnReady.on("click", this.btnReadyClick, this), this.btnExit.on("click", this.btnExitClick, this), 
                    this.btnCallFriend.on("click", this.btnFriendClick, this), this.btnJiesan.on("click", this.btnJiesanClick, this), 
                    this.ruleBtn.on("click", this.btnRuleClick, this), this.btnShezhi.on("click", this.btnRightClick, this), 
                    this.btnSound.on("click", this.btnSoundClick, this), this.btnjCancelTG.on("click", this.btnjCancelTGClick, this), 
                    this.btnjCancelTG.getChildByName("cancelTGBtn1").on("click", this.btnjCancelTGClick, this), 
                    this.right = cc.find("right", e), this.menuRightFlag = 0, cc.find("mask", this.right).on("click", function() {
                        this.menuRightFlag = 1, this.btnRightClick();
                    }.bind(this));
                }
            },
            start: function() {},
            setChatAndSetBtnPos: function() {
                this.btnChat.active = !0, "83" == this.PDKGameScene.roomCfg.type ? (this.btnShezhi.active = !0, 
                this.btnChat.x = 345 + a.getFullScreenValue(), this.btnShezhi.x = 542 + a.getFullScreenValue()) : this.btnChat.x = this.btnShezhi.x + a.getFullScreenValue();
            },
            btnRightClick: function() {
                1 == this.menuRightFlag ? (this.right.active = !1, this.menuRightFlag = 0) : (this.right.active = !0, 
                this.menuRightFlag = 1);
            },
            btnSoundClick: function(e, t) {
                void 0 != t && null != t ? this.setSound(t) : this.btnSoundFlag ? this.setSound(0) : this.setSound(1);
            },
            setSound: function(e) {
                1 == e ? (this.btnSoundFlag = !0, this.btnSoundNo.active = !1) : (this.btnSoundFlag = !1, 
                this.btnSoundNo.active = !0), this.PDKGameScene.setMusicEnabled(e), s.setUserSetting("music_enabled", e), 
                this.PDKGameScene.setSoundEnabled(e), s.setUserSetting("sound_enabled", e);
            },
            btnReadyClick: function() {
                o.sendData([ 1005 ]), null != this.btnReady && void 0 != this.btnReady && (this.btnReady.active = !1);
            },
            btnExitClick: function() {
                n.justOne = !0, o.outRoomSuccess();
                r.aldSendEvent({
                    81: "金币场",
                    82: "闯关场",
                    83: "好友场",
                    84: "欢乐场"
                }[this.PDKGameScene.roomCfg.type + ""], {
                    "按钮": "退出房间"
                });
            },
            btnFriendClick: function() {
                r.onMenuShareAppMessage({
                    imageNum: 5,
                    queryStr: "mid=" + n.USER.mid + "&roomid=" + this.PDKGameScene.roomCfg.room + "&shareTime=" + a.getDay() + "&type=2",
                    cbSucc: function() {}
                });
            },
            btnJiesanClick: function() {
                null != this.PDKGameScene.gotoCount && (0 != this.PDKGameScene.gotoCount || 0 != this.PDKGameScene.master ? e("../tools/Dialog").create({
                    content: "确定解散房间？",
                    btnstring: [ 1, "确定", "取消" ],
                    callback: function(e) {
                        0 === e && o.sendData([ 1008 ]);
                    }
                }) : a.oneBtnTips("不是房主不能解散房间!"));
            },
            btnRuleClick: function() {
                e("../tools/Loading").create(), cc.loader.loadRes("pdkgame/roomRule", function(t, i) {
                    e("../tools/Loading").close();
                    var n = cc.instantiate(i);
                    cc.director.getScene().getChildByName("Canvas").addChild(n, 2);
                });
            },
            btnShezhiClick: function() {},
            btnjCancelTGClick: function() {
                o.send2026(0);
            }
        }), cc._RF.pop();
    }, {
        "../tools/Dialog": "Dialog",
        "../tools/Loading": "Loading",
        "../tools/utils": "utils",
        "../tools/weixin": "weixin",
        Common: "Common",
        Config: "Config",
        SendCMD: "SendCMD"
    } ],
    roomRule: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "920beQC84lHxK0RZ9gHZU0u", "roomRule"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                var e = cc.find("maskBg", this.node), t = cc.find("dialog_bg1", this.node);
                this.scrollView = cc.find("txtSlider", t), this.scrollContent = cc.find("view/content", this.scrollView), 
                e.on("click", this.close, this), this.showTxtInfo();
            },
            showTxtInfo: function() {
                this.scrollContent.getChildByName("item").getComponent(cc.Label).string = "一、玩法介绍\n游戏玩法是玩家想方设法地将自己手中的牌尽快打出去，谁先把手中的牌出完即为胜，其余2个对手为负，并根据剩余手牌计算输分；\n15张玩法：一副牌54张，去掉大小王、3个2（梅花/方块/红桃2）、3个A（黑桃/梅花/方块A）、1个K（黑桃K），剩余45张，每人15张；\n16张玩法：一副牌54张，去掉大小王、3个2（梅花/方块/红桃2）、1个A（黑桃A），剩余48张，每人16张；\n2人玩法：发3个人的牌，黑桃3先出、首局黑桃3必出，如果没有黑桃3就红桃3梅花3方块3黑桃4这样类推 。\n二、打牌规则\n1、首局黑桃3先出，后续赢家先出，或每局游戏总是黑桃3玩家先出；\n2、报单规则：当有玩家报单，在出单张牌时该报单玩家的上家必须打手牌的最大牌，不可以选择打非最大牌；\n3、三张可少带出完：轮到自己打牌，如果你只剩三张或者三带一，允许一次性出完结束；\n4、三张可少带接完：上家出三带二，如果你只剩三张或者三带一，允许一次性出完结束；\n5、飞机可少带出完：轮到自己打牌，如果你只剩多个三张或者三带一，允许一次性出完结束；\n6、飞机可少带接完：上家出三带二，如果你只剩多个三张或者三带一，允许一次性出完结束；";
            },
            close: function() {
                this.node.destroy();
            },
            start: function() {}
        }), cc._RF.pop();
    }, {} ],
    setting: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "593edCBah9HDKvgjpHZJhnu", "setting");
        var n = e("Config"), a = e("../tools/utils"), o = e("Common");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.musicOn = cc.find("contentNode/music/switchOn", this.node), this.musicOff = cc.find("contentNode/music/switchOff", this.node), 
                this.soundOn = cc.find("contentNode/sound/switchOn", this.node), this.soundOff = cc.find("contentNode/sound/switchOff", this.node), 
                this.musicOn.on("click", this.onClickMusic.bind(this, 0)), this.musicOff.on("click", this.onClickMusic.bind(this, 1)), 
                this.soundOn.on("click", this.onClickSound.bind(this, 0)), this.soundOff.on("click", this.onClickSound.bind(this, 1)), 
                1 == a.getUserSetting("music_enabled", 1) ? (this.musicOn.active = !0, this.musicOff.active = !1) : this.onClickMusic(0), 
                1 == a.getUserSetting("sound_enabled", 1) ? (this.soundOn.active = !0, this.soundOff.active = !1) : this.onClickSound(0), 
                cc.find("contentNode/accName", this.node).getComponent(cc.Label).string = "" + n.USER.name, 
                cc.find("contentNode/headkuang", this.node).getComponent("HeadPortrait").loadImg(n.USER.icon), 
                cc.find("contentNode/btnAbout", this.node).on("click", this.onClickAbout.bind(this)), 
                cc.find("contentNode/btnExit", this.node).on("click", this.onClickExit.bind(this)), 
                cc.find("contentNode/btnKf", this.node).on("click", this.onClickKf.bind(this)), 
                cc.find("callKF", this.node).active = !1;
            },
            start: function() {},
            onClickKf: function() {
                cc.find("callKF", this.node).active = !0;
            },
            onClickMusic: function(e) {
                1 == e ? (this.musicOff.active = !1, this.musicOn.active = !0, AMGR.setMusicEnable(!0), 
                AMGR.playMusic("resources/audio/music/bgm.mp3"), a.setUserSetting("music_enabled", 1)) : (this.musicOff.active = !0, 
                this.musicOn.active = !1, AMGR.setMusicEnable(!1), AMGR.stopMusic(), a.setUserSetting("music_enabled", 0));
            },
            onClickSound: function(e) {
                1 == e ? (this.soundOff.active = !1, this.soundOn.active = !0, a.setUserSetting("sound_enabled", 1), 
                AMGR.setSoundEnable(!0)) : (this.soundOff.active = !0, this.soundOn.active = !1, 
                a.setUserSetting("sound_enabled", 0), AMGR.setSoundEnable(!1));
            },
            onClickAbout: function() {
                var e = this;
                RESOURCE.getPrefab("comRule", function(t) {
                    var i = cc.instantiate(t);
                    e.node.addChild(i), i.getComponent("ComRuleView").init(1);
                });
            },
            onClickExit: function() {
                null != a && a.setUserSetting("autoLogin", 0), o.switchScene("LoginScene");
            },
            close: function(e, t) {
                1 == t && this.node.destroy(), 2 == t && (cc.find("callKF", this.node).active = !1);
            }
        }), cc._RF.pop();
    }, {
        "../tools/utils": "utils",
        Common: "Common",
        Config: "Config"
    } ],
    utils: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "ee1bci/RXlJx7gfDjxtToYX", "utils");
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, a = {}, o = e("../tools/MD5New"), s = e("Config"), r = [ "encryptedData", "iv", "nickName" ];
        a.httpjava = function(t, i, n, a, o, r, c, l) {
            s.API_UPLOAD != i && (n.sesskey = s.USER.sesskey || ""), e("Common").dump("【JavaSend】" + i + " = ", n);
            o && o.toUpperCase();
            var d = this.getParameter(n);
            s.API_UPLOAD === i && (d = n);
            var h = new XMLHttpRequest();
            h.open("POST", i), s.API_UPLOAD != i ? h.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8") : h.setRequestHeader("Content-type", "application/json;charset=utf-8"), 
            h.send(d), h.onreadystatechange = function() {
                if (4 == h.readyState && (200 == h.status || 304 == h.status)) if ("" == h.responseText) console.log("java return error ", h); else {
                    var t = JSON.parse(h.responseText);
                    e("Common").dump("【JavaReturn】" + i + " = ", t), a.call(this, t);
                }
            };
        }, a.print = function(e) {
            if ("object" == (void 0 === e ? "undefined" : n(e))) {
                var t = "";
                for (var i in e) if (e.hasOwnProperty(i)) {
                    var a = e[i];
                    this.print(a), t += "\n----|" + i + "----\x3e" + a;
                }
                cc.log(t);
            } else cc.log(e);
        }, a.base64ReplaceAdd = function(e) {
            return e.replace(new RegExp("[+]", "gm"), "%2B");
        }, a.FormatASCII = function(e, t) {
            var i = [];
            for (var n in e) e[n] && "" != e[n] && (void 0 != t && null != t && 1 == t && -1 != r.indexOf(n) && (e[n] = a.base64ReplaceAdd(e[n])), 
            i.push(n + "=" + e[n]));
            return i.sort(), i.join("&");
        }, a.getParameter = function(e) {
            e.signCode = Date.parse(new Date()) / 1e3, this.SIGN_KEY = "D9%J@#$A$%#@JA&&635";
            var t = this.FormatASCII(e) + "&key=" + this.SIGN_KEY, i = o.md5(t);
            i = i.toUpperCase(), e.sign = i;
            var n = this.FormatASCII(e, !0);
            return console.log("--------------llllllll", n), n;
        }, a.getSign = function(e) {
            e.signCode = Date.parse(new Date()) / 1e3, this.SIGN_KEY = "D9%J@#$A$%#@JA&&635";
            var t = this.FormatASCII(e) + "&key=" + this.SIGN_KEY, i = o.md5(t);
            return i = i.toUpperCase(), e.sign = i, e;
        }, a.setUserSetting = function(e, t) {
            null != t && ("string" != (void 0 === t ? "undefined" : n(t)) && (t = t.toString()));
            cc.sys.localStorage.setItem(e, t);
        }, a.getUserSetting = function(e, t, i) {
            var a = cc.sys.localStorage.getItem(e);
            if (void 0 != a && void 0 != a && "" != a || (a = t || null), "number" == (void 0 === t ? "undefined" : n(t)) && (a = Number(a)), 
            void 0 != i && null != i && i.length > 0) {
                var o = a;
                -1 == i.indexOf(o) && (a = i[0], this.setUserSetting(e, a));
            }
            return a;
        }, a.getDeviceID = function() {
            var e = a.getUserSetting("guestAccount" + s.ServerType);
            return null == e && (e = Date.parse(new Date()) / 1e3 + "" + Math.floor(1e8 * Math.random())), 
            a.setUserSetting("guestAccount" + s.ServerType, e), e;
        }, a.getUserAgentUrl = function() {
            var e = new Date().getTime(), t = a.getDeviceID(), i = a.getUserSetting("loginInfo");
            i && (i = JSON.parse(i)) && i.sitemid && (t = i.sitemid);
            var n = t + e + "AGENTKEY:", s = o.md5(n);
            s = s.toUpperCase();
            var r = {};
            return r.sign = s, r.curTime = e, r;
        }, a.timesTampToTime = function(e) {
            var t = new Date(1e3 * e);
            return t.getFullYear() + "-" + ((t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-") + (t.getDate() < 10 ? "0" + t.getDate() : t.getDate() + " ") + (t.getHours() + ":") + (t.getMinutes() + ":") + t.getSeconds();
        }, a.uploadData = function(t) {
            s && 2 != s.ServerType || a.httpjava(null, s.API_UPLOAD, {
                logType: "20",
                appId: 19,
                activityId: 11,
                activityName: "",
                operatorId: Number(s.USER.mid),
                operateTime: e("../common/Common").getDate() || "",
                type: "1",
                info: t || "",
                extend1: "",
                extend2: "",
                extend3: ""
            }, function(e) {
                console.log("uploadData err ====", e);
            }, "POST");
        }, a.getPassDay = function(e, t) {
            if ("number" == typeof e && "number" == typeof t) {
                e -= 3600 * new Date(1e3 * e).getHours();
                var i = Math.abs(Number(e) - Number(t));
                return Math.floor(i / 86400);
            }
            return 0;
        }, t.exports = a, cc._RF.pop();
    }, {
        "../common/Common": "Common",
        "../tools/MD5New": "MD5New",
        Common: "Common",
        Config: "Config"
    } ],
    weixin: [ function(e, t, i) {
        "use strict";
        cc._RF.push(t, "d1f774QeaVNsJKuglCkzPut", "weixin");
        var n = e("Config"), a = e("Common"), o = {
            isWeChatGame: function() {
                return cc.sys.platform == cc.sys.WECHAT_GAME && 2 == n.platform ? (console.log("小程序平台"), 
                !0) : (console.log("微信浏览器平台"), !1);
            },
            isIphoneX: function() {
                o.isWeChatGame() && wx.getSystemInfo({
                    success: function(e) {
                        e.model.indexOf("iPhone X") > -1 && (n.isIphoneX = !0);
                    }
                });
            },
            config: function(e) {
                this.isWeChatGame() && (wx.updateShareMenu({
                    withShareTicket: !0
                }), this.onShow(), this.onHide());
            },
            getLocation: function(e) {
                a.print("微信获取定位"), cc.sys.isMobile && void 0 != wx && null != wx && wx.getLocation({
                    type: "gcj02",
                    success: function(t) {
                        var i = t.latitude, o = t.longitude;
                        n.USER.location = i + "," + o, n.location = i + "," + o, a.print("location ===========" + n.location), 
                        e && e();
                    },
                    fail: function(e) {
                        a.print("wx 3333" + JSON.stringify(e));
                    }
                });
            },
            onMenuShareAppMessage: function(e) {
                if (cc.sys.isMobile && void 0 != wx && null != wx) {
                    var t = {
                        title: "深夜，女同事突然问我睡了么"
                    }, i = e || {}, a = i.data || t, s = (i.isFromMenu, i.queryStr || ""), r = i.cbSucc, c = i.cbFail, l = i.imageNum || 0, d = i.isScreen || !1, h = e.prcentWX || 1, u = e.prcentHY || 1, g = e.destHeight || 400, m = e.destWidth || 500, f = e.width || 900, p = e.height || 720, v = e.posX || 190, C = e.posY || 0;
                    if (a.desc && "" != a.desc && (a.title = a.title + "/n" + a.desc), 0 == l) {
                        var y = Math.random();
                        y *= 4, y = Math.ceil(y), l = [ 0, 2, 4, 7 ][y -= 1];
                    }
                    var S = n.shareTitle[l], b = "";
                    if (5 == l) {
                        var k = Math.ceil(3 * Math.random()) - 1;
                        b = n.shareImages[l][k], l = "5." + k;
                    } else b = n.shareImages[l];
                    7 == l && (S = n.USER.name + S);
                    var w = -1;
                    0 == d ? (b = b, w = l) : (S = e.title, b = canvas.toTempFilePathSync({
                        x: v,
                        y: C,
                        width: f * h,
                        height: p * u,
                        destWidth: m * h,
                        destHeight: g * u
                    })), console.log("阿拉丁图ID" + w), o.aldSendEvent("分享图", {
                        "发送的图片ID": w
                    }), s = s + "&aldPicNum=" + w, wx.checkSession({
                        success: function() {
                            console.log("queryStr =====", s), 2 == n.ServerType ? wx.aldShareAppMessage({
                                title: S,
                                imageUrl: b,
                                query: s,
                                success: function(e) {
                                    console.log("转发success", e), r && r(e);
                                },
                                fail: function(e) {
                                    console.log("转发fail", e), c && c(e);
                                }
                            }) : wx.shareAppMessage({
                                title: S,
                                imageUrl: b,
                                query: s,
                                success: function(e) {
                                    console.log("转发success", e), r && r(e);
                                },
                                fail: function(e) {
                                    console.log("转发fail", e), c && c(e);
                                }
                            });
                        },
                        fail: function() {
                            wx.login({
                                success: function(e) {
                                    JavaRequest.refreshSessionKey(e.code, function(e) {
                                        e.result && (2 == n.ServerType ? wx.aldShareAppMessage({
                                            title: S,
                                            imageUrl: b,
                                            query: s,
                                            success: function(e) {
                                                console.log("转发success", e), r && r(e);
                                            },
                                            fail: function(e) {
                                                console.log("转发fail", e), c && c(e);
                                            }
                                        }) : wx.shareAppMessage({
                                            title: S,
                                            imageUrl: b,
                                            query: s,
                                            success: function(e) {
                                                console.log("转发success", e), r && r(e);
                                            },
                                            fail: function(e) {
                                                console.log("转发fail", e), c && c(e);
                                            }
                                        }));
                                    });
                                }
                            });
                        }
                    });
                }
            },
            midasPay: function(t) {
                var i = {
                    mode: "game",
                    env: 1,
                    offerId: "1450014825",
                    currencyType: "CNY",
                    platform: "android",
                    buyQuantity: t,
                    zoneId: 1
                };
                a.dump("米大师支付params = ", i), wx.requestMidasPayment({
                    mode: i.mode,
                    env: i.env,
                    offerId: i.offerId,
                    currencyType: i.currencyType,
                    platform: i.platform,
                    buyQuantity: i.buyQuantity,
                    zoneId: i.zoneId,
                    success: function(t) {
                        console.log(t), e("../tools/Dialog").create({
                            content: "支付成功",
                            btnstring: [ 1, "确定" ]
                        }), console.log("米大师支付成功");
                    },
                    fail: function(t) {
                        var i = t.errMsg, n = t.errCode;
                        e("../tools/Dialog").create({
                            content: "支付失败" + n + ",errMsg:" + i,
                            btnstring: [ 1, "确定" ]
                        }), console.log(i, n);
                    }
                });
            },
            networkChange: function(e) {
                cc.sys.isMobile && wx.onNetworkStatusChange(function(t) {
                    0 == t.isConnected && RESOURCE.clearResourceTimeout(), console.log("监听当前网络类型 = ", t.networkType), 
                    n.isNetworkConnect = t.isConnected, e && e(t.isConnected);
                });
            },
            getNetworkType: function(e) {
                cc.sys.isMobile && wx.getNetworkType({
                    success: function(t) {
                        var i = t.networkType;
                        console.log("请求当前网络类型 = ", i);
                        var a = !0;
                        "none" != i && "unknown" != i || (a = !1, RESOURCE.clearResourceTimeout()), n.isNetworkConnect = a, 
                        console.log("请求当前网络类型后 = ", {
                            networkType: i,
                            isConnected: a
                        }), e && e(a);
                    }
                });
            },
            showWxModal: function(e) {
                cc.sys.isMobile && wx.showModal({
                    title: "网络出错",
                    content: "您的网络连接断开了，请检查网络设置！",
                    showCancel: !1,
                    confirmText: "确定",
                    complete: function(t) {
                        e && e();
                    }
                });
            },
            customerService: function() {
                cc.sys.isMobile && wx.openCustomerServiceConversation({
                    sessionFrom: "kaixin",
                    showMessageCard: !1,
                    success: function() {
                        console.log("客服success");
                    },
                    fail: function() {
                        console.log("客服fail");
                    },
                    complete: function() {
                        console.log("客服complete");
                    }
                });
            },
            checkCanShowAd: function() {
                if (!cc.sys.isMobile) return !1;
                var t = o.getSystemInfoSync().SDKVersion;
                return t = t.replace(/\./g, ""), console.log("微信版本" + t), !(parseInt(t) < 204) || (e("../tools/Dialog").create({
                    content: "当前微信版本过低，无法观看广告，请您升级到最新微信版本后重启微信。",
                    btnstring: [ 1, "确定" ]
                }), !1);
            },
            rewardedVideoAd: function(t) {
                if (!1 !== o.checkCanShowAd() && (AMGR.pauseMusic(), wx.createRewardedVideoAd)) {
                    null == n.videoAd && (n.videoAd = wx.createRewardedVideoAd({
                        adUnitId: "adunit-778458fc723e8fdc"
                    }));
                    var i = function i(a) {
                        e("../tools/Loading").close(), console.log("广告结束回调"), n.isFromHallSeeAd = !0, AMGR.resumeMusic(), 
                        n.videoAd.offClose(i), (a && a.isEnded || void 0 === a) && 1 == n.isNetworkConnect && (console.log("加金币啦"), 
                        t && (console.log("开始回调"), t()));
                    }, a = function t(i) {
                        console.error("videAd-error"), e("../tools/Dialog").create({
                            content: "获取视频信息失败，请稍后再来",
                            btnstring: [ 1, "确定" ]
                        }), n.videoAd.offError(t);
                    };
                    n.videoAd.onClose(i);
                    n.videoAd.load().then(function() {
                        console.error("开始展示广告"), n.videoAd.show().catch(function(t) {
                            console.error("show-error"), e("../tools/Dialog").create({
                                content: "获取视频信息失败，请稍后再来",
                                btnstring: [ 1, "确定" ]
                            });
                        });
                    }, function(a) {
                        e("../tools/Loading").close(), console.error("load-error"), console.log("广告拉取失败", a), 
                        n.videoAd.offClose(i), e("../tools/Dialog").create({
                            content: "获取视频信息失败，请稍后再来",
                            btnstring: [ 1, "确定" ]
                        }), n.isFromHallSeeAd ? t && t() : n.isFromHallSeeAd = !0;
                    }), n.videoAd.onError(a);
                }
            },
            onShow: function() {
                cc.sys.isMobile && wx.onShow(function(t) {
                    e("../pdk/PdkDatamanager").getPwsNode() && pdkEvent.emitEvent(pdkEvent.eventName.pwsShareBack), 
                    console.log("监听小游戏回到前台", t), AMGR.resumeMusic(), e("../net/ParseSocket").dispachOnshow(t), 
                    1104 !== t.scene && 1103 !== t.scene || (console.error("从我的小程序进入 =============== 1104或1103"), 
                    n.fromMyProgram = !0);
                });
            },
            onHide: function() {
                cc.sys.isMobile && wx.onHide(function(t) {
                    console.log("监听小游戏退到后台"), AMGR.pauseMusic(), AMGR.stopSound(), e("../net/ParseSocket").dispachOnHide(t);
                    var i = e("../net/GameSocket");
                    i && i.neddHeart && (i.neddHeart = !1);
                });
            },
            updateWechatGame: function() {
                if (cc.sys.isMobile) {
                    var e = wx.getUpdateManager();
                    e.onUpdateReady(function() {
                        wx.showModal({
                            title: "更新提示",
                            content: "新版本已经准备好，是否重启应用？",
                            success: function(t) {
                                t.confirm && e.applyUpdate();
                            }
                        });
                    });
                }
            },
            onSocketCloseListen: function() {
                cc.sys.isMobile && wx.onSocketClose(function(e) {
                    console.log("微信 WebSocket 已关闭！");
                });
            },
            checkSession: function(e) {
                cc.sys.isMobile && wx.checkSession({
                    success: function() {
                        e && e(!0);
                    },
                    fail: function() {
                        wx.login({
                            success: function(t) {
                                JavaRequest.refreshSessionKey(t.code, function(t) {
                                    t.result && e && e(!0);
                                });
                            }
                        });
                    }
                });
            },
            setUserCloudStorage: function(e) {
                o.isWeChatGame() && wx.setUserCloudStorage({
                    KVDataList: e,
                    success: function(e) {
                        console.log(" setUserCloudStorage success!");
                    },
                    fail: function(e) {
                        console.error(" setUserCloudStorage fail! data = ", e.data);
                    }
                });
            },
            aldSendEvent: function(e, t) {
                console.log(e, t), cc.sys.isMobile && 2 == n.ServerType && wx.aldSendEvent(e, t);
            },
            getSystemInfoSync: function() {
                return wx.getSystemInfoSync();
            },
            vibrateLong: function() {
                cc.sys.isMobile && wx.vibrateLong({
                    success: function() {
                        console.log("vibrateShort success");
                    },
                    fail: function() {
                        console.log("vibrateShort failed");
                    }
                });
            }
        };
        t.exports = o, cc._RF.pop();
    }, {
        "../net/GameSocket": "GameSocket",
        "../net/ParseSocket": "ParseSocket",
        "../pdk/PdkDatamanager": "PdkDatamanager",
        "../tools/Dialog": "Dialog",
        "../tools/Loading": "Loading",
        Common: "Common",
        Config: "Config"
    } ]
}, {}, [ "Config", "LoginManager", "AudioManager", "Bankruptcy", "Common", "DataManager", "GEvent", "PrefabManager", "ShowContent", "StaticWarnData", "CMDDelay", "GameSocket", "JavaRequest", "Lang", "MyWebSocket", "NetManager", "ParseSocket", "SendCMD", "CameraShake", "FriendDesk", "FriendPlay", "JiaRuRoom", "PDKTotalOver", "PdkDatamanager", "PdkParseScoket", "PdkPwsResult", "PdkScene", "PdkSmallOver_new", "PokerListenFunc", "Prop", "WinGoOn", "cardPoker", "dissolveRoom", "menuNode", "roomRule", "DailyGiftPopup", "FieldList", "HallScene", "InviteFriend", "LoginScene", "MyRecord", "SignInPopup", "SuccessTip", "Dialog", "Loading", "MD5New", "MyCanvas", "base64_new", "utils", "weixin", "ComRuleView", "EmailItem", "EmailNode", "Exchange", "FhbNode", "GoldNode", "HeadPortrait", "NewPlayer", "SeasonNode", "ShareTip", "ShopView", "UserInfo", "setting" ]);