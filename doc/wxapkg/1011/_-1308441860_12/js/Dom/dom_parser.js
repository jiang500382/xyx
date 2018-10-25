function t(t) {
    this.options = t || {
        locator: {}
    };
}

function e(t, e, r) {
    function i(e) {
        var n = t[e];
        !n && a && (n = 2 == t.length ? function(n) {
            t(e, n);
        } : t), c[e] = n && function(t) {
            n("[xmldom " + e + "]\t" + t + o(r));
        } || function() {};
    }
    if (!t) {
        if (e instanceof n) return e;
        t = e;
    }
    var c = {}, a = t instanceof Function;
    return r = r || {}, i("warning"), i("error"), i("fatalError"), c;
}

function n() {
    this.cdata = !1;
}

function r(t, e) {
    e.lineNumber = t.lineNumber, e.columnNumber = t.columnNumber;
}

function o(t) {
    return t ? "\n@" + (t.systemId || "") + "#[line:" + t.lineNumber + ",col:" + t.columnNumber + "]" : void 0;
}

function i(t, e, n) {
    return "string" == typeof t ? t.substr(e, n) : t.length >= e + n || e ? new java.lang.String(t, e, n) + "" : t;
}

function c(t, e) {
    t.currentElement ? t.currentElement.appendChild(e) : t.doc.appendChild(e);
}

t.prototype.parseFromString = function(t, r) {
    var o = this.options, i = new a(), c = o.domBuilder || new n(), l = o.errorHandler, s = o.locator, u = o.xmlns || {}, m = {
        lt: "<",
        gt: ">",
        amp: "&",
        quot: '"',
        apos: "'"
    };
    return s && c.setDocumentLocator(s), i.errorHandler = e(l, c, s), i.domBuilder = o.domBuilder || c, 
    /\/x?html?$/.test(r) && (m.nbsp = " ", m.copy = "©", u[""] = "http://www.w3.org/1999/xhtml"), 
    u.xml = u.xml || "http://www.w3.org/XML/1998/namespace", t ? i.parse(t, u, m) : i.errorHandler.error("invalid doc source"), 
    c.doc;
}, n.prototype = {
    startDocument: function() {
        this.doc = new l().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
    },
    startElement: function(t, e, n, o) {
        var i = this.doc, a = i.createElementNS(t, n || e), l = o.length;
        c(this, a), this.currentElement = a, this.locator && r(this.locator, a);
        for (var s = 0; l > s; s++) {
            var t = o.getURI(s), u = o.getValue(s), n = o.getQName(s), m = i.createAttributeNS(t, n);
            this.locator && r(o.getLocator(s), m), m.value = m.nodeValue = u, a.setAttributeNode(m);
        }
    },
    endElement: function() {
        var t = this.currentElement;
        t.tagName, this.currentElement = t.parentNode;
    },
    startPrefixMapping: function() {},
    endPrefixMapping: function() {},
    processingInstruction: function(t, e) {
        var n = this.doc.createProcessingInstruction(t, e);
        this.locator && r(this.locator, n), c(this, n);
    },
    ignorableWhitespace: function() {},
    characters: function(t) {
        if (t = i.apply(this, arguments)) {
            if (this.cdata) e = this.doc.createCDATASection(t); else var e = this.doc.createTextNode(t);
            this.currentElement ? this.currentElement.appendChild(e) : /^\s*$/.test(t) && this.doc.appendChild(e), 
            this.locator && r(this.locator, e);
        }
    },
    skippedEntity: function() {},
    endDocument: function() {
        this.doc.normalize();
    },
    setDocumentLocator: function(t) {
        (this.locator = t) && (t.lineNumber = 0);
    },
    comment: function(t) {
        t = i.apply(this, arguments);
        var e = this.doc.createComment(t);
        this.locator && r(this.locator, e), c(this, e);
    },
    startCDATA: function() {
        this.cdata = !0;
    },
    endCDATA: function() {
        this.cdata = !1;
    },
    startDTD: function(t, e, n) {
        var o = this.doc.implementation;
        if (o && o.createDocumentType) {
            var i = o.createDocumentType(t, e, n);
            this.locator && r(this.locator, i), c(this, i);
        }
    },
    warning: function(t) {
        console.warn("[xmldom warning]\t" + t, o(this.locator));
    },
    error: function(t) {
        console.error("[xmldom error]\t" + t, o(this.locator));
    },
    fatalError: function(t) {
        throw console.error("[xmldom fatalError]\t" + t, o(this.locator)), t;
    }
}, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(t) {
    n.prototype[t] = function() {
        return null;
    };
});

var a = require("./sax").XMLReader, l = exports.DOMImplementation = require("./dom").DOMImplementation;

exports.XMLSerializer = require("./dom").XMLSerializer, exports.DOMParser = t;