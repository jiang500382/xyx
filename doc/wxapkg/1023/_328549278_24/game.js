(function() {
    require("utils/ald-game.js"), require("libs/weapp-adapter/index");
    var a = require("libs/xmldom/dom-parser");
    window.DOMParser = a.DOMParser, require("libs/wx-downloader.js"), wxDownloader.REMOTE_SERVER_ROOT = "https://cosbeard-1253325687.file.myqcloud.com/cocosH5/serverOnline/gold20181022", 
    wxDownloader.SUBCONTEXT_ROOT = "", require("src/settings.10846"), require("main.6e9b4");
    var b = require("libs/fundebug.0.4.0.min.js");
    b.init({
        apikey: "d71cab531d530ccad870c75e5cdad0f093190ed174377d21088dbc942c69c5c1"
    });
})();