function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

function b(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
}

function c(a, b) {
    if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return b && ("object" == typeof b || "function" == typeof b) ? b : a;
}

function d(a, b) {
    if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
    a.prototype = Object.create(b && b.prototype, {
        constructor: {
            value: a,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("./../../npm/wepy/lib/wepy.js"), f = a(e), g = require("./../../service/Request.js"), h = a(g), i = function(a) {
    function f() {
        var a, d, e, g;
        b(this, f);
        for (var j = arguments.length, k = Array(j), i = 0; i < j; i++) k[i] = arguments[i];
        return d = e = c(this, (a = f.__proto__ || Object.getPrototypeOf(f)).call.apply(a, [ this ].concat(k))), 
        e.props = {
            content: {
                default: "",
                twoWay: !0
            }
        }, e.methods = {
            pass: function() {
                var a = this.content.tappass;
                this.$emit(a);
            },
            book: function() {
                var a = this.content.tapbook;
                this.$emit(a);
            },
            submitOrderMsg: function(a) {
                console.log(a);
                var b = this, c = {
                    user_token: b.$parent.$parent.globalData.token,
                    form_id: a.detail.formId || "",
                    scene_id: b.content.gameId || ""
                };
                h.default.POST("form_id_save", c, 2), 0 == b.content.gameId && this.$emit("hideRemind");
            }
        }, g = d, c(e, g);
    }
    return d(f, a), f;
}(f.default.component);

exports.default = i;