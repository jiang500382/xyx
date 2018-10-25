(function() {
    function a() {}
    function b(b, h, m, n, o) {
        function p(a) {
            var b = String.fromCharCode;
            if (65535 < a) {
                a -= 65536;
                var c = 55296 + (a >> 10), d = 56320 + (1023 & a);
                return b(c, d);
            }
            return b(a);
        }
        function q(b) {
            var a = b.slice(1, -1);
            return a in m ? m[a] : "#" === a.charAt(0) ? p(parseInt(a.substr(1).replace("x", "0x"))) : (o.error("entity not found:" + b), 
            b);
        }
        function r(a) {
            if (a > z) {
                var c = b.substring(z, a).replace(/&#?\w+;/g, q);
                w && s(z), n.characters(c, 0, a - z), z = a;
            }
        }
        function s(a, c) {
            for (;a >= u && (c = v.exec(b)); ) t = c.index, u = t + c[0].length, w.lineNumber++;
            w.columnNumber = a - t + 1;
        }
        for (var t = 0, u = 0, v = /.*(?:\r\n?|\n)|.*$/g, w = n.locator, x = [ {
            currentNSMap: h
        } ], y = {}, z = 0; ;) {
            try {
                var A = b.indexOf("<", z);
                if (0 > A) {
                    if (!b.substr(z).match(/^\s*$/)) {
                        var B = n.doc, C = B.createTextNode(b.substr(z));
                        B.appendChild(C), n.currentElement = C;
                    }
                    return;
                }
                switch (A > z && r(A), b.charAt(A + 1)) {
                  case "/":
                    var D = b.indexOf(">", A + 3), E = b.substring(A + 2, D), F = x.pop();
                    0 > D ? (E = b.substring(A + 2).replace(/[\s<].*/, ""), o.error("end tag name: " + E + " is not complete:" + F.tagName), 
                    D = A + 1 + E.length) : E.match(/\s</) && (E = E.replace(/[\s<].*/, ""), o.error("end tag name: " + E + " maybe not complete"), 
                    D = A + 1 + E.length);
                    var G = F.localNSMap, H = F.tagName == E, I = H || F.tagName && F.tagName.toLowerCase() == E.toLowerCase();
                    if (I) {
                        if (n.endElement(F.uri, F.localName, E), G) for (var J in G) n.endPrefixMapping(J);
                        H || o.fatalError("end tag name: " + E + " is not match the current start tagName:" + F.tagName);
                    } else x.push(F);
                    D++;
                    break;

                  case "?":
                    w && s(A), D = k(b, A, n);
                    break;

                  case "!":
                    w && s(A), D = j(b, A, n, o);
                    break;

                  default:
                    w && s(A);
                    var K = new l(), L = x[x.length - 1].currentNSMap, D = d(b, A, K, L, q, o), M = K.length;
                    if (!K.closed && g(b, D, K.tagName, y) && (K.closed = !0, !m.nbsp && o.warning("unclosed xml attribute")), 
                    w && M) {
                        for (var N, a = c(w, {}), O = 0; O < M; O++) N = K[O], s(N.offset), N.locator = c(w, {});
                        n.locator = a, e(K, n, L) && x.push(K), n.locator = w;
                    } else e(K, n, L) && x.push(K);
                    "http://www.w3.org/1999/xhtml" !== K.uri || K.closed ? D++ : D = f(b, D, K.tagName, q, n);
                }
            } catch (a) {
                o.error("element parse error: " + a), D = -1;
            }
            D > z ? z = D : r(Math.max(A, z) + 1);
        }
    }
    function c(a, b) {
        return b.lineNumber = a.lineNumber, b.columnNumber = a.columnNumber, b;
    }
    function d(a, b, d, e, f, g) {
        for (var h, i, j = ++b, k = q; ;) {
            var l = a.charAt(j);
            switch (l) {
              case "=":
                if (k == r) h = a.slice(b, j), k = u; else if (k == t) k = u; else throw new Error("attribute equal must after attrName");
                break;

              case "'":
              case '"':
                if (k == u || k == r) {
                    if (k == r && (g.warning('attribute value must after "="'), h = a.slice(b, j)), 
                    b = j + 1, j = a.indexOf(l, b), 0 < j) i = a.slice(b, j).replace(/&#?\w+;/g, f), 
                    d.add(h, i, b - 1), k = w; else throw new Error("attribute value no end '" + l + "' match");
                } else if (k == v) i = a.slice(b, j).replace(/&#?\w+;/g, f), d.add(h, i, b), g.warning('attribute "' + h + '" missed start quot(' + l + ")!!"), 
                b = j + 1, k = w; else throw new Error('attribute value must after "="');
                break;

              case "/":
                switch (k) {
                  case q:
                    d.setTagName(a.slice(b, j));

                  case w:
                  case x:
                  case y:
                    k = y, d.closed = !0;

                  case v:
                  case r:
                  case t:
                    break;

                  default:
                    throw new Error("attribute invalid close char('/')");
                }
                break;

              case "":
                return g.error("unexpected end of input"), k == q && d.setTagName(a.slice(b, j)), 
                j;

              case ">":
                switch (k) {
                  case q:
                    d.setTagName(a.slice(b, j));

                  case w:
                  case x:
                  case y:
                    break;

                  case v:
                  case r:
                    i = a.slice(b, j), "/" === i.slice(-1) && (d.closed = !0, i = i.slice(0, -1));

                  case t:
                    k == t && (i = h), k == v ? (g.warning('attribute "' + i + '" missed quot(")!!'), 
                    d.add(h, i.replace(/&#?\w+;/g, f), b)) : (("http://www.w3.org/1999/xhtml" !== e[""] || !i.match(/^(?:disabled|checked|selected)$/i)) && g.warning('attribute "' + i + '" missed value!! "' + i + '" instead!!'), 
                    d.add(i, i, b));
                    break;

                  case u:
                    throw new Error("attribute value missed!!");
                }
                return j;

              case "":
                l = " ";

              default:
                if (" " >= l) switch (k) {
                  case q:
                    d.setTagName(a.slice(b, j)), k = x;
                    break;

                  case r:
                    h = a.slice(b, j), k = t;
                    break;

                  case v:
                    var i = a.slice(b, j).replace(/&#?\w+;/g, f);
                    g.warning('attribute "' + i + '" missed quot(")!!'), d.add(h, i, b);

                  case w:
                    k = x;
                } else switch (k) {
                  case t:
                    d.tagName;
                    "http://www.w3.org/1999/xhtml" === e[""] && h.match(/^(?:disabled|checked|selected)$/i) || g.warning('attribute "' + h + '" missed value!! "' + h + '" instead2!!'), 
                    d.add(h, h, b), b = j, k = r;
                    break;

                  case w:
                    g.warning('attribute space is required"' + h + '"!!');

                  case x:
                    k = r, b = j;
                    break;

                  case u:
                    k = v, b = j;
                    break;

                  case y:
                    throw new Error("elements closed character '/' and '>' must be connected to");
                }
            }
            j++;
        }
    }
    function e(b, c, d) {
        for (var e = b.tagName, f = null, g = b.length; g--; ) {
            var i = b[g], a = i.qName, j = i.value, k = a.indexOf(":");
            if (0 < k) var l = i.prefix = a.slice(0, k), m = a.slice(k + 1), n = "xmlns" === l && m; else m = a, 
            l = null, n = "xmlns" === a && "";
            i.localName = m, !1 !== n && (null == f && (f = {}, h(d, d = {})), d[n] = f[n] = j, 
            i.uri = "http://www.w3.org/2000/xmlns/", c.startPrefixMapping(n, j));
        }
        for (var g = b.length; g--; ) {
            i = b[g];
            var l = i.prefix;
            l && ("xml" === l && (i.uri = "http://www.w3.org/XML/1998/namespace"), "xmlns" !== l && (i.uri = d[l || ""]));
        }
        var k = e.indexOf(":");
        0 < k ? (l = b.prefix = e.slice(0, k), m = b.localName = e.slice(k + 1)) : (l = null, 
        m = b.localName = e);
        var o = b.uri = d[l || ""];
        if (c.startElement(o, m, e, b), !b.closed) return b.currentNSMap = d, b.localNSMap = f, 
        !0;
        if (c.endElement(o, m, e), f) for (l in f) c.endPrefixMapping(l);
    }
    function f(a, b, c, d, e) {
        if (/^(?:script|textarea)$/i.test(c)) {
            var f = a.indexOf("</" + c + ">", b), g = a.substring(b + 1, f);
            if (/[&<]/.test(g)) return /^script$/i.test(c) ? (e.characters(g, 0, g.length), 
            f) : (g = g.replace(/&#?\w+;/g, d), e.characters(g, 0, g.length), f);
        }
        return b + 1;
    }
    function g(a, b, c, d) {
        var e = d[c];
        return null == e && (e = a.lastIndexOf("</" + c + ">"), e < b && (e = a.lastIndexOf("</" + c)), 
        d[c] = e), e < b;
    }
    function h(a, b) {
        for (var c in a) b[c] = a[c];
    }
    function j(a, b, c, d) {
        var e = a.charAt(b + 2);
        switch (e) {
          case "-":
            if ("-" === a.charAt(b + 3)) {
                var f = a.indexOf("--\x3e", b + 4);
                return f > b ? (c.comment(a, b + 4, f - b - 4), f + 3) : (d.error("Unclosed comment"), 
                -1);
            }
            return -1;

          default:
            if ("CDATA[" == a.substr(b + 3, 6)) {
                var f = a.indexOf("]]>", b + 9);
                return c.startCDATA(), c.characters(a, b + 9, f - b - 9), c.endCDATA(), f + 3;
            }
            var g = i(a, b), h = g.length;
            if (1 < h && /!doctype/i.test(g[0][0])) {
                var j = g[1][0], k = 3 < h && /^public$/i.test(g[2][0]) && g[3][0], l = 4 < h && g[4][0], m = g[h - 1];
                return c.startDTD(j, k && k.replace(/^(['"])(.*?)\1$/, "$2"), l && l.replace(/^(['"])(.*?)\1$/, "$2")), 
                c.endDTD(), m.index + m[0].length;
            }
        }
        return -1;
    }
    function k(a, b, c) {
        var d = a.indexOf("?>", b);
        if (d) {
            var e = a.substring(b, d).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
            if (e) {
                e[0].length;
                return c.processingInstruction(e[1], e[2]), d + 2;
            }
            return -1;
        }
        return -1;
    }
    function l() {}
    function i(a, b) {
        var c, d = [], e = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
        for (e.lastIndex = b, e.exec(a); c = e.exec(a); ) if (d.push(c), c[1]) return d;
    }
    var m = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, n = new RegExp("[\\-\\.0-9" + m.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), o = new RegExp("^" + m.source + n.source + "*(?::" + m.source + n.source + "*)?$"), q = 0, r = 1, t = 2, u = 3, v = 4, w = 5, x = 6, y = 7;
    a.prototype = {
        parse: function(a, c, d) {
            var e = this.domBuilder;
            e.startDocument(), h(c, c = {}), b(a, c, d, e, this.errorHandler), e.endDocument();
        }
    }, l.prototype = {
        setTagName: function(a) {
            if (!o.test(a)) throw new Error("invalid tagName:" + a);
            this.tagName = a;
        },
        add: function(a, b, c) {
            if (!o.test(a)) throw new Error("invalid attribute:" + a);
            this[this.length++] = {
                qName: a,
                value: b,
                offset: c
            };
        },
        length: 0,
        getLocalName: function(a) {
            return this[a].localName;
        },
        getLocator: function(a) {
            return this[a].locator;
        },
        getQName: function(a) {
            return this[a].qName;
        },
        getURI: function(a) {
            return this[a].uri;
        },
        getValue: function(a) {
            return this[a].value;
        }
    }, exports.XMLReader = a;
})();