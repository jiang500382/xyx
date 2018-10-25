(function() {
    var a = require("./global.js");
    a.Promise || (a.Promise = require("./../promise-polyfill/promise.js")), a.regeneratorRuntime || (a.regeneratorRuntime = require("./../regenerator-runtime/runtime.js"));
})();