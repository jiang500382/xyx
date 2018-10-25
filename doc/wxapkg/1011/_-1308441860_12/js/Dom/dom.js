function e(e, t) {
    for (var n in e) t[n] = e[n];
}

function t(t, n) {
    function r() {}
    var i = t.prototype;
    if (Object.create) {
        var o = Object.create(n.prototype);
        i.__proto__ = o;
    }
    i instanceof n || (r.prototype = n.prototype, r = new r(), e(i, r), t.prototype = i = r), 
    i.constructor != t && ("function" != typeof t && console.error("unknow Class:" + t), 
    i.constructor = t);
}

function n(e, t) {
    if (t instanceof Error) var r = t; else r = this, Error.call(this, re[e]), this.message = re[e], 
    Error.captureStackTrace && Error.captureStackTrace(this, n);
    return r.code = e, t && (this.message = this.message + ": " + t), r;
}

function r() {}

function i(e, t) {
    this._node = e, this._refresh = t, o(this);
}

function o(t) {
    var n = t._node._inc || t._node.ownerDocument._inc;
    if (t._inc != n) {
        var r = t._refresh(t._node);
        k(t, "length", r.length), e(r, t), t._inc = n;
    }
}

function a() {}

function u(e, t) {
    for (var n = e.length; n--; ) if (e[n] === t) return n;
}

function s(e, t, n, r) {
    if (r ? t[u(t, r)] = n : t[t.length++] = n, e) {
        n.ownerElement = e;
        var i = e.ownerDocument;
        i && (r && N(i, e, r), m(i, e, n));
    }
}

function l(e, t, r) {
    var i = u(t, r);
    if (!(i >= 0)) throw n(oe, new Error(e.tagName + "@" + r));
    for (var o = t.length - 1; o > i; ) t[i] = t[++i];
    if (t.length = o, e) {
        var a = e.ownerDocument;
        a && (N(a, e, r), r.ownerElement = null);
    }
}

function c(e) {
    if (this._features = {}, e) for (var t in e) this._features = e[t];
}

function p() {}

function h(e) {
    return "<" == e && "&lt;" || ">" == e && "&gt;" || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";";
}

function d(e, t) {
    if (t(e)) return !0;
    if (e = e.firstChild) do {
        if (d(e, t)) return !0;
    } while (e = e.nextSibling);
}

function f() {}

function m(e, t, n) {
    e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && (t._nsMap[n.prefix ? n.localName : ""] = n.value);
}

function N(e, t, n) {
    e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && delete t._nsMap[n.prefix ? n.localName : ""];
}

function v(e, t, n) {
    if (e && e._inc) {
        e._inc++;
        var r = t.childNodes;
        if (n) r[r.length++] = n; else {
            for (var i = t.firstChild, o = 0; i; ) r[o++] = i, i = i.nextSibling;
            r.length = o;
        }
    }
}

function g(e, t) {
    var n = t.previousSibling, r = t.nextSibling;
    return n ? n.nextSibling = r : e.firstChild = r, r ? r.previousSibling = n : e.lastChild = n, 
    v(e.ownerDocument, e), t;
}

function w(e, t, n) {
    var r = t.parentNode;
    if (r && r.removeChild(t), t.nodeType === ee) {
        var i = t.firstChild;
        if (null == i) return t;
        var o = t.lastChild;
    } else i = o = t;
    var a = n ? n.previousSibling : e.lastChild;
    i.previousSibling = a, o.nextSibling = n, a ? a.nextSibling = i : e.firstChild = i, 
    null == n ? e.lastChild = o : n.previousSibling = o;
    do {
        i.parentNode = e;
    } while (i !== o && (i = i.nextSibling));
    return v(e.ownerDocument || e, e), t.nodeType == ee && (t.firstChild = t.lastChild = null), 
    t;
}

function E(e, t) {
    var n = t.parentNode;
    n && (r = e.lastChild, n.removeChild(t), r = e.lastChild);
    var r = e.lastChild;
    return t.parentNode = e, t.previousSibling = r, t.nextSibling = null, r ? r.nextSibling = t : e.firstChild = t, 
    e.lastChild = t, v(e.ownerDocument, e, t), t;
}

function y() {
    this._nsMap = {};
}

function b() {}

function T() {}

function S() {}

function _() {}

function D() {}

function C() {}

function I() {}

function x() {}

function A() {}

function R() {}

function O() {}

function U() {}

function M(e, t) {
    var n = [], r = 9 == this.nodeType ? this.documentElement : this, i = r.prefix, o = r.namespaceURI;
    if (o && null == i && null == (i = r.lookupPrefix(o))) var a = [ {
        namespace: o,
        prefix: null
    } ];
    return P(this, n, e, t, a), n.join("");
}

function B(e, t, n) {
    var r = e.prefix || "", i = e.namespaceURI;
    if (!r && !i) return !1;
    if ("xml" === r && "http://www.w3.org/XML/1998/namespace" === i || "http://www.w3.org/2000/xmlns/" == i) return !1;
    for (var o = n.length; o--; ) {
        var a = n[o];
        if (a.prefix == r) return a.namespace != i;
    }
    return !0;
}

function P(e, t, n, r, i) {
    if (r) {
        if (!(e = r(e))) return;
        if ("string" == typeof e) return void t.push(e);
    }
    switch (e.nodeType) {
      case $:
        i || (i = []);
        var o = (i.length, e.attributes), a = o.length, u = e.firstChild, s = e.tagName;
        for (n = Y === e.namespaceURI || n, t.push("<", s), l = 0; a > l; l++) "xmlns" == (c = o.item(l)).prefix ? i.push({
            prefix: c.localName,
            namespace: c.value
        }) : "xmlns" == c.nodeName && i.push({
            prefix: "",
            namespace: c.value
        });
        for (var l = 0; a > l; l++) {
            var c = o.item(l);
            if (B(c, n, i)) {
                var p = c.prefix || "", d = c.namespaceURI, f = p ? " xmlns:" + p : " xmlns";
                t.push(f, '="', d, '"'), i.push({
                    prefix: p,
                    namespace: d
                });
            }
            P(c, t, n, r, i);
        }
        if (B(e, n, i)) {
            var p = e.prefix || "", d = e.namespaceURI, f = p ? " xmlns:" + p : " xmlns";
            t.push(f, '="', d, '"'), i.push({
                prefix: p,
                namespace: d
            });
        }
        if (u || n && !/^(?:meta|link|img|br|hr|input)$/i.test(s)) {
            if (t.push(">"), n && /^script$/i.test(s)) for (;u; ) u.data ? t.push(u.data) : P(u, t, n, r, i), 
            u = u.nextSibling; else for (;u; ) P(u, t, n, r, i), u = u.nextSibling;
            t.push("</", s, ">");
        } else t.push("/>");
        return;

      case J:
      case ee:
        for (u = e.firstChild; u; ) P(u, t, n, r, i), u = u.nextSibling;
        return;

      case X:
        return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, h), '"');

      case G:
        return t.push(e.data.replace(/[<&]/g, h));

      case H:
        return t.push("<![CDATA[", e.data, "]]>");

      case Q:
        return t.push("\x3c!--", e.data, "--\x3e");

      case K:
        var m = e.publicId, N = e.systemId;
        if (t.push("<!DOCTYPE ", e.name), m) t.push(' PUBLIC "', m), N && "." != N && t.push('" "', N), 
        t.push('">'); else if (N && "." != N) t.push(' SYSTEM "', N, '">'); else {
            var v = e.internalSubset;
            v && t.push(" [", v, "]"), t.push(">");
        }
        return;

      case Z:
        return t.push("<?", e.target, " ", e.data, "?>");

      case W:
        return t.push("&", e.nodeName, ";");

      default:
        t.push("??", e.nodeName);
    }
}

function L(e, t, n) {
    var r;
    switch (t.nodeType) {
      case $:
        (r = t.cloneNode(!1)).ownerDocument = e;

      case ee:
        break;

      case X:
        n = !0;
    }
    if (r || (r = t.cloneNode(!1)), r.ownerDocument = e, r.parentNode = null, n) for (var i = t.firstChild; i; ) r.appendChild(L(e, i, n)), 
    i = i.nextSibling;
    return r;
}

function V(e, t, n) {
    var i = new t.constructor();
    for (var o in t) {
        var u = t[o];
        "object" != (void 0 === u ? "undefined" : F(u)) && u != i[o] && (i[o] = u);
    }
    switch (t.childNodes && (i.childNodes = new r()), i.ownerDocument = e, i.nodeType) {
      case $:
        var s = t.attributes, l = i.attributes = new a(), c = s.length;
        l._ownerElement = i;
        for (var p = 0; c > p; p++) i.setAttributeNode(V(e, s.item(p), !0));
        break;

      case X:
        n = !0;
    }
    if (n) for (var h = t.firstChild; h; ) i.appendChild(V(e, h, n)), h = h.nextSibling;
    return i;
}

function k(e, t, n) {
    e[t] = n;
}

function j(e) {
    switch (e.nodeType) {
      case $:
      case ee:
        var t = [];
        for (e = e.firstChild; e; ) 7 !== e.nodeType && 8 !== e.nodeType && t.push(j(e)), 
        e = e.nextSibling;
        return t.join("");

      default:
        return e.nodeValue;
    }
}

var F = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, Y = "http://www.w3.org/1999/xhtml", z = {}, $ = z.ELEMENT_NODE = 1, X = z.ATTRIBUTE_NODE = 2, G = z.TEXT_NODE = 3, H = z.CDATA_SECTION_NODE = 4, W = z.ENTITY_REFERENCE_NODE = 5, q = z.ENTITY_NODE = 6, Z = z.PROCESSING_INSTRUCTION_NODE = 7, Q = z.COMMENT_NODE = 8, J = z.DOCUMENT_NODE = 9, K = z.DOCUMENT_TYPE_NODE = 10, ee = z.DOCUMENT_FRAGMENT_NODE = 11, te = z.NOTATION_NODE = 12, ne = {}, re = {}, ie = (ne.INDEX_SIZE_ERR = (re[1] = "Index size error", 
1), ne.DOMSTRING_SIZE_ERR = (re[2] = "DOMString size error", 2), ne.HIERARCHY_REQUEST_ERR = (re[3] = "Hierarchy request error", 
3)), oe = (ne.WRONG_DOCUMENT_ERR = (re[4] = "Wrong document", 4), ne.INVALID_CHARACTER_ERR = (re[5] = "Invalid character", 
5), ne.NO_DATA_ALLOWED_ERR = (re[6] = "No data allowed", 6), ne.NO_MODIFICATION_ALLOWED_ERR = (re[7] = "No modification allowed", 
7), ne.NOT_FOUND_ERR = (re[8] = "Not found", 8)), ae = (ne.NOT_SUPPORTED_ERR = (re[9] = "Not supported", 
9), ne.INUSE_ATTRIBUTE_ERR = (re[10] = "Attribute in use", 10));

ne.INVALID_STATE_ERR = (re[11] = "Invalid state", 11), ne.SYNTAX_ERR = (re[12] = "Syntax error", 
12), ne.INVALID_MODIFICATION_ERR = (re[13] = "Invalid modification", 13), ne.NAMESPACE_ERR = (re[14] = "Invalid namespace", 
14), ne.INVALID_ACCESS_ERR = (re[15] = "Invalid access", 15);

n.prototype = Error.prototype, e(ne, n), r.prototype = {
    length: 0,
    item: function(e) {
        return this[e] || null;
    },
    toString: function(e, t) {
        for (var n = [], r = 0; r < this.length; r++) P(this[r], n, e, t);
        return n.join("");
    }
}, i.prototype.item = function(e) {
    return o(this), this[e];
}, t(i, r), a.prototype = {
    length: 0,
    item: r.prototype.item,
    getNamedItem: function(e) {
        for (var t = this.length; t--; ) {
            var n = this[t];
            if (n.nodeName == e) return n;
        }
    },
    setNamedItem: function(e) {
        var t = e.ownerElement;
        if (t && t != this._ownerElement) throw new n(ae);
        var r = this.getNamedItem(e.nodeName);
        return s(this._ownerElement, this, e, r), r;
    },
    setNamedItemNS: function(e) {
        var t, r = e.ownerElement;
        if (r && r != this._ownerElement) throw new n(ae);
        return t = this.getNamedItemNS(e.namespaceURI, e.localName), s(this._ownerElement, this, e, t), 
        t;
    },
    removeNamedItem: function(e) {
        var t = this.getNamedItem(e);
        return l(this._ownerElement, this, t), t;
    },
    removeNamedItemNS: function(e, t) {
        var n = this.getNamedItemNS(e, t);
        return l(this._ownerElement, this, n), n;
    },
    getNamedItemNS: function(e, t) {
        for (var n = this.length; n--; ) {
            var r = this[n];
            if (r.localName == t && r.namespaceURI == e) return r;
        }
        return null;
    }
}, c.prototype = {
    hasFeature: function(e, t) {
        var n = this._features[e.toLowerCase()];
        return !(!n || t && !(t in n));
    },
    createDocument: function(e, t, n) {
        var i = new f();
        if (i.implementation = this, i.childNodes = new r(), i.doctype = n, n && i.appendChild(n), 
        t) {
            var o = i.createElementNS(e, t);
            i.appendChild(o);
        }
        return i;
    },
    createDocumentType: function(e, t, n) {
        var r = new C();
        return r.name = e, r.nodeName = e, r.publicId = t, r.systemId = n, r;
    }
}, p.prototype = {
    firstChild: null,
    lastChild: null,
    previousSibling: null,
    nextSibling: null,
    attributes: null,
    parentNode: null,
    childNodes: null,
    ownerDocument: null,
    nodeValue: null,
    namespaceURI: null,
    prefix: null,
    localName: null,
    insertBefore: function(e, t) {
        return w(this, e, t);
    },
    replaceChild: function(e, t) {
        this.insertBefore(e, t), t && this.removeChild(t);
    },
    removeChild: function(e) {
        return g(this, e);
    },
    appendChild: function(e) {
        return this.insertBefore(e, null);
    },
    hasChildNodes: function() {
        return null != this.firstChild;
    },
    cloneNode: function(e) {
        return V(this.ownerDocument || this, this, e);
    },
    normalize: function() {
        for (var e = this.firstChild; e; ) {
            var t = e.nextSibling;
            t && t.nodeType == G && e.nodeType == G ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), 
            e = t);
        }
    },
    isSupported: function(e, t) {
        return this.ownerDocument.implementation.hasFeature(e, t);
    },
    hasAttributes: function() {
        return this.attributes.length > 0;
    },
    lookupPrefix: function(e) {
        for (var t = this; t; ) {
            var n = t._nsMap;
            if (n) for (var r in n) if (n[r] == e) return r;
            t = t.nodeType == X ? t.ownerDocument : t.parentNode;
        }
        return null;
    },
    lookupNamespaceURI: function(e) {
        for (var t = this; t; ) {
            var n = t._nsMap;
            if (n && e in n) return n[e];
            t = t.nodeType == X ? t.ownerDocument : t.parentNode;
        }
        return null;
    },
    isDefaultNamespace: function(e) {
        return null == this.lookupPrefix(e);
    }
}, e(z, p), e(z, p.prototype), f.prototype = {
    nodeName: "#document",
    nodeType: J,
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function(e, t) {
        if (e.nodeType == ee) {
            for (var n = e.firstChild; n; ) {
                var r = n.nextSibling;
                this.insertBefore(n, t), n = r;
            }
            return e;
        }
        return null == this.documentElement && e.nodeType == $ && (this.documentElement = e), 
        w(this, e, t), e.ownerDocument = this, e;
    },
    removeChild: function(e) {
        return this.documentElement == e && (this.documentElement = null), g(this, e);
    },
    importNode: function(e, t) {
        return L(this, e, t);
    },
    getElementById: function(e) {
        var t = null;
        return d(this.documentElement, function(n) {
            return n.nodeType == $ && n.getAttribute("id") == e ? (t = n, !0) : void 0;
        }), t;
    },
    createElement: function(e) {
        var t = new y();
        return t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.childNodes = new r(), 
        (t.attributes = new a())._ownerElement = t, t;
    },
    createDocumentFragment: function() {
        var e = new R();
        return e.ownerDocument = this, e.childNodes = new r(), e;
    },
    createTextNode: function(e) {
        var t = new S();
        return t.ownerDocument = this, t.appendData(e), t;
    },
    createComment: function(e) {
        var t = new _();
        return t.ownerDocument = this, t.appendData(e), t;
    },
    createCDATASection: function(e) {
        var t = new D();
        return t.ownerDocument = this, t.appendData(e), t;
    },
    createProcessingInstruction: function(e, t) {
        var n = new O();
        return n.ownerDocument = this, n.tagName = n.target = e, n.nodeValue = n.data = t, 
        n;
    },
    createAttribute: function(e) {
        var t = new b();
        return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, 
        t;
    },
    createEntityReference: function(e) {
        var t = new A();
        return t.ownerDocument = this, t.nodeName = e, t;
    },
    createElementNS: function(e, t) {
        var n = new y(), i = t.split(":"), o = n.attributes = new a();
        return n.childNodes = new r(), n.ownerDocument = this, n.nodeName = t, n.tagName = t, 
        n.namespaceURI = e, 2 == i.length ? (n.prefix = i[0], n.localName = i[1]) : n.localName = t, 
        o._ownerElement = n, n;
    },
    createAttributeNS: function(e, t) {
        var n = new b(), r = t.split(":");
        return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = !0, 
        2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, n;
    }
}, t(f, p), y.prototype = {
    nodeType: $,
    hasAttribute: function(e) {
        return null != this.getAttributeNode(e);
    },
    getAttribute: function(e) {
        var t = this.getAttributeNode(e);
        return t && t.value || "";
    },
    getAttributeNode: function(e) {
        return this.attributes.getNamedItem(e);
    },
    setAttribute: function(e, t) {
        var n = this.ownerDocument.createAttribute(e);
        n.value = n.nodeValue = "" + t, this.setAttributeNode(n);
    },
    removeAttribute: function(e) {
        var t = this.getAttributeNode(e);
        t && this.removeAttributeNode(t);
    },
    appendChild: function(e) {
        return e.nodeType === ee ? this.insertBefore(e, null) : E(this, e);
    },
    setAttributeNode: function(e) {
        return this.attributes.setNamedItem(e);
    },
    setAttributeNodeNS: function(e) {
        return this.attributes.setNamedItemNS(e);
    },
    removeAttributeNode: function(e) {
        return this.attributes.removeNamedItem(e.nodeName);
    },
    removeAttributeNS: function(e, t) {
        var n = this.getAttributeNodeNS(e, t);
        n && this.removeAttributeNode(n);
    },
    hasAttributeNS: function(e, t) {
        return null != this.getAttributeNodeNS(e, t);
    },
    getAttributeNS: function(e, t) {
        var n = this.getAttributeNodeNS(e, t);
        return n && n.value || "";
    },
    setAttributeNS: function(e, t, n) {
        var r = this.ownerDocument.createAttributeNS(e, t);
        r.value = r.nodeValue = "" + n, this.setAttributeNode(r);
    },
    getAttributeNodeNS: function(e, t) {
        return this.attributes.getNamedItemNS(e, t);
    },
    getElementsByTagName: function(e) {
        return new i(this, function(t) {
            var n = [];
            return d(t, function(r) {
                r === t || r.nodeType != $ || "*" !== e && r.tagName != e || n.push(r);
            }), n;
        });
    },
    getElementsByTagNameNS: function(e, t) {
        return new i(this, function(n) {
            var r = [];
            return d(n, function(i) {
                i === n || i.nodeType !== $ || "*" !== e && i.namespaceURI !== e || "*" !== t && i.localName != t || r.push(i);
            }), r;
        });
    }
}, f.prototype.getElementsByTagName = y.prototype.getElementsByTagName, f.prototype.getElementsByTagNameNS = y.prototype.getElementsByTagNameNS, 
t(y, p), b.prototype.nodeType = X, t(b, p), T.prototype = {
    data: "",
    substringData: function(e, t) {
        return this.data.substring(e, e + t);
    },
    appendData: function(e) {
        e = this.data + e, this.nodeValue = this.data = e, this.length = e.length;
    },
    insertData: function(e, t) {
        this.replaceData(e, 0, t);
    },
    appendChild: function() {
        throw new Error(re[ie]);
    },
    deleteData: function(e, t) {
        this.replaceData(e, t, "");
    },
    replaceData: function(e, t, n) {
        n = this.data.substring(0, e) + n + this.data.substring(e + t), this.nodeValue = this.data = n, 
        this.length = n.length;
    }
}, t(T, p), S.prototype = {
    nodeName: "#text",
    nodeType: G,
    splitText: function(e) {
        var t = this.data, n = t.substring(e);
        t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;
        var r = this.ownerDocument.createTextNode(n);
        return this.parentNode && this.parentNode.insertBefore(r, this.nextSibling), r;
    }
}, t(S, T), _.prototype = {
    nodeName: "#comment",
    nodeType: Q
}, t(_, T), D.prototype = {
    nodeName: "#cdata-section",
    nodeType: H
}, t(D, T), C.prototype.nodeType = K, t(C, p), I.prototype.nodeType = te, t(I, p), 
x.prototype.nodeType = q, t(x, p), A.prototype.nodeType = W, t(A, p), R.prototype.nodeName = "#document-fragment", 
R.prototype.nodeType = ee, t(R, p), O.prototype.nodeType = Z, t(O, p), U.prototype.serializeToString = function(e, t, n) {
    return M.call(e, t, n);
}, p.prototype.toString = M;

try {
    Object.defineProperty && (Object.defineProperty(i.prototype, "length", {
        get: function() {
            return o(this), this.$$length;
        }
    }), Object.defineProperty(p.prototype, "textContent", {
        get: function() {
            return j(this);
        },
        set: function(e) {
            switch (this.nodeType) {
              case $:
              case ee:
                for (;this.firstChild; ) this.removeChild(this.firstChild);
                (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
                break;

              default:
                this.data = e, this.value = e, this.nodeValue = e;
            }
        }
    }), k = function(e, t, n) {
        e["$$" + t] = n;
    });
} catch (e) {}

exports.DOMImplementation = c, exports.XMLSerializer = U;