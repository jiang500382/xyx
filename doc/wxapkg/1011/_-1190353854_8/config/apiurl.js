require("./appsetting.js");

module.exports = {
    system: {
        login: "api/v1_0_5/user/login",
        addlog: "api/v1_0_5/log/create",
        moregames: "api/v1_0_5/log/create",
        addblackuser: "api/v1_0_5/complain/create"
    },
    index: {
        index: "api/v1_0_5/index/index",
        rule: "api/v1_0_5/index/readme",
        start: "api/v1_0_5/challenge/start",
        check: "api/v1_0_5/index/check"
    },
    game: {
        feedback: "api/v1_0_5/challenge/end"
    },
    ad: {
        index: "api/index/index",
        more: "api/index/applink",
        statistics: "api/collect/index"
    },
    wallet: {
        withdraw: "api/v1_0_5/user/withdraw",
        withdrawlist: "api/v1_0_5/user/withdrawlist"
    },
    share: {
        share: "api/v1_0_5/share/share"
    },
    gift: {
        prize: "api/v1_0_5/prize/index",
        receive: "api/v1_0_5/prize/receive"
    },
    rank: {
        top: "api/v1_0_5/index/top"
    },
    profile: {
        index: "api/v1_0_5/user/index",
        update: "api/v1_0_5/user/update"
    }
};