!function(e){
    var t={};function n(i){
        if(t[i])return t[i].exports;
        var s=t[i]={i:i,l:!1,exports:{}};
        return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports
    }
    n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},
        n.r=function(e){
        "undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),
            Object.defineProperty(e,"__esModule",{value:!0})
        },
        n.t=function(e,t){
        if(1&t&&(e=n(e)),8&t)return e;
        if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;
        var i=Object.create(null);
        if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)
            for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i
        },
        n.n=function(e){
        var t=e&&e.__esModule?function(){return e.default}:function(){return e};
        return n.d(t,"a",t),t},
        n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},
        n.p="js/",n(n.s=5)}(
[
    function(e,t,n){var i;
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
    !function(t,n){"use strict";"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:this,(function(n,s){"use strict";var a=[],o=Object.getPrototypeOf,r=a.slice,l=a.flat?function(e){return a.flat.call(e)}:function(e){return a.concat.apply([],e)},c=a.push,d=a.indexOf,u={},h=u.toString,p=u.hasOwnProperty,f=p.toString,m=f.call(Object),g={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},b=n.document,w={type:!0,src:!0,nonce:!0,noModule:!0};function x(e,t,n){var i,s,a=(n=n||b).createElement("script");if(a.text=e,t)for(i in w)(s=t[i]||t.getAttribute&&t.getAttribute(i))&&a.setAttribute(i,s);n.head.appendChild(a).parentNode.removeChild(a)}function E(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?u[h.call(e)]||"object":typeof e}var C=function(e,t){return new C.fn.init(e,t)};function S(e){var t=!!e&&"length"in e&&e.length,n=E(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}C.fn=C.prototype={jquery:"3.6.0",constructor:C,length:0,toArray:function(){return r.call(this)},get:function(e){return null==e?r.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=C.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return C.each(this,e)},map:function(e){return this.pushStack(C.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(C.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(C.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:a.sort,splice:a.splice},C.extend=C.fn.extend=function(){var e,t,n,i,s,a,o=arguments[0]||{},r=1,l=arguments.length,c=!1;for("boolean"==typeof o&&(c=o,o=arguments[r]||{},r++),"object"==typeof o||v(o)||(o={}),r===l&&(o=this,r--);r<l;r++)if(null!=(e=arguments[r]))for(t in e)i=e[t],"__proto__"!==t&&o!==i&&(c&&i&&(C.isPlainObject(i)||(s=Array.isArray(i)))?(n=o[t],a=s&&!Array.isArray(n)?[]:s||C.isPlainObject(n)?n:{},s=!1,o[t]=C.extend(c,a,i)):void 0!==i&&(o[t]=i));return o},C.extend({expando:"jQuery"+("3.6.0"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==h.call(e))&&(!(t=o(e))||"function"==typeof(n=p.call(t,"constructor")&&t.constructor)&&f.call(n)===m)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){x(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,i=0;if(S(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(S(Object(e))?C.merge(n,"string"==typeof e?[e]:e):c.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:d.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,s=e.length;i<n;i++)e[s++]=t[i];return e.length=s,e},grep:function(e,t,n){for(var i=[],s=0,a=e.length,o=!n;s<a;s++)!t(e[s],s)!==o&&i.push(e[s]);return i},map:function(e,t,n){var i,s,a=0,o=[];if(S(e))for(i=e.length;a<i;a++)null!=(s=t(e[a],a,n))&&o.push(s);else for(a in e)null!=(s=t(e[a],a,n))&&o.push(s);return l(o)},guid:1,support:g}),"function"==typeof Symbol&&(C.fn[Symbol.iterator]=a[Symbol.iterator]),C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){u["[object "+t+"]"]=t.toLowerCase()}));var T=

/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
        function (e) {
            var t, n, i, s, a, o, r, l, c, d, u, h, p, f, m, g, v, y, b, w = "sizzle" + 1 * new Date, x = e.document,
                E = 0, C = 0, S = le(), T = le(), $ = le(), M = le(), k = function (e, t) {
                    return e === t && (u = !0), 0
                }, P = {}.hasOwnProperty, L = [], A = L.pop, O = L.push, _ = L.push, z = L.slice, I = function (e, t) {
                    for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                    return -1
                },
                D = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                N = "[\\x20\\t\\r\\n\\f]",
                H = "(?:\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                R = "\\[" + N + "*(" + H + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + N + "*\\]",
                q = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
                j = new RegExp(N + "+", "g"), B = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
                F = new RegExp("^" + N + "*," + N + "*"), W = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
                X = new RegExp(N + "|>"), G = new RegExp(q), Y = new RegExp("^" + H + "$"), V = {
                    ID: new RegExp("^#(" + H + ")"),
                    CLASS: new RegExp("^\\.(" + H + ")"),
                    TAG: new RegExp("^(" + H + "|[*])"),
                    ATTR: new RegExp("^" + R),
                    PSEUDO: new RegExp("^" + q),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + D + ")$", "i"),
                    needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
                }, U = /HTML$/i, Z = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/,
                Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
                te = new RegExp("\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\([^\\r\\n\\f])", "g"), ne = function (e, t) {
                    var n = "0x" + e.slice(1) - 65536;
                    return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                }, ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, se = function (e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                }, ae = function () {
                    h()
                }, oe = we((function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }), {dir: "parentNode", next: "legend"});
            try {
                _.apply(L = z.call(x.childNodes), x.childNodes), L[x.childNodes.length].nodeType
            } catch (e) {
                _ = {
                    apply: L.length ? function (e, t) {
                        O.apply(e, z.call(t))
                    } : function (e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                        e.length = n - 1
                    }
                }
            }

            function re(e, t, i, s) {
                var a, r, c, d, u, f, v, y = t && t.ownerDocument, x = t ? t.nodeType : 9;
                if (i = i || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return i;
                if (!s && (h(t), t = t || p, m)) {
                    if (11 !== x && (u = Q.exec(e))) if (a = u[1]) {
                        if (9 === x) {
                            if (!(c = t.getElementById(a))) return i;
                            if (c.id === a) return i.push(c), i
                        } else if (y && (c = y.getElementById(a)) && b(t, c) && c.id === a) return i.push(c), i
                    } else {
                        if (u[2]) return _.apply(i, t.getElementsByTagName(e)), i;
                        if ((a = u[3]) && n.getElementsByClassName && t.getElementsByClassName) return _.apply(i, t.getElementsByClassName(a)), i
                    }
                    if (n.qsa && !M[e + " "] && (!g || !g.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                        if (v = e, y = t, 1 === x && (X.test(e) || W.test(e))) {
                            for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((d = t.getAttribute("id")) ? d = d.replace(ie, se) : t.setAttribute("id", d = w)), r = (f = o(e)).length; r--;) f[r] = (d ? "#" + d : ":scope") + " " + be(f[r]);
                            v = f.join(",")
                        }
                        try {
                            return _.apply(i, y.querySelectorAll(v)), i
                        } catch (t) {
                            M(e, !0)
                        } finally {
                            d === w && t.removeAttribute("id")
                        }
                    }
                }
                return l(e.replace(B, "$1"), t, i, s)
            }

            function le() {
                var e = [];
                return function t(n, s) {
                    return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = s
                }
            }

            function ce(e) {
                return e[w] = !0, e
            }

            function de(e) {
                var t = p.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function ue(e, t) {
                for (var n = e.split("|"), s = n.length; s--;) i.attrHandle[n[s]] = t
            }

            function he(e, t) {
                var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                return e ? 1 : -1
            }

            function pe(e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function fe(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function me(e) {
                return function (t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function ge(e) {
                return ce((function (t) {
                    return t = +t, ce((function (n, i) {
                        for (var s, a = e([], n.length, t), o = a.length; o--;) n[s = a[o]] && (n[s] = !(i[s] = n[s]))
                    }))
                }))
            }

            function ve(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }

            for (t in n = re.support = {}, a = re.isXML = function (e) {
                var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
                return !U.test(t || n && n.nodeName || "HTML")
            }, h = re.setDocument = function (e) {
                var t, s, o = e ? e.ownerDocument || e : x;
                return o != p && 9 === o.nodeType && o.documentElement ? (f = (p = o).documentElement, m = !a(p), x != p && (s = p.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", ae, !1) : s.attachEvent && s.attachEvent("onunload", ae)), n.scope = de((function (e) {
                    return f.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                })), n.attributes = de((function (e) {
                    return e.className = "i", !e.getAttribute("className")
                })), n.getElementsByTagName = de((function (e) {
                    return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                })), n.getElementsByClassName = J.test(p.getElementsByClassName), n.getById = de((function (e) {
                    return f.appendChild(e).id = w, !p.getElementsByName || !p.getElementsByName(w).length
                })), n.getById ? (i.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n, i, s, a = t.getElementById(e);
                        if (a) {
                            if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                            for (s = t.getElementsByName(e), i = 0; a = s[i++];) if ((n = a.getAttributeNode("id")) && n.value === e) return [a]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, i = [], s = 0, a = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = a[s++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return a
                }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                    if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                }, v = [], g = [], (n.qsa = J.test(p.querySelectorAll)) && (de((function (e) {
                    var t;
                    f.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + N + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + N + "*(?:value|" + D + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), (t = p.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + N + "*name" + N + "*=" + N + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                })), de((function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + N + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                }))), (n.matchesSelector = J.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && de((function (e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", q)
                })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(f.compareDocumentPosition), b = t || J.test(f.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t) for (; t = t.parentNode;) if (t === e) return !0;
                    return !1
                }, k = t ? function (e, t) {
                    if (e === t) return u = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == p || e.ownerDocument == x && b(x, e) ? -1 : t == p || t.ownerDocument == x && b(x, t) ? 1 : d ? I(d, e) - I(d, t) : 0 : 4 & i ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return u = !0, 0;
                    var n, i = 0, s = e.parentNode, a = t.parentNode, o = [e], r = [t];
                    if (!s || !a) return e == p ? -1 : t == p ? 1 : s ? -1 : a ? 1 : d ? I(d, e) - I(d, t) : 0;
                    if (s === a) return he(e, t);
                    for (n = e; n = n.parentNode;) o.unshift(n);
                    for (n = t; n = n.parentNode;) r.unshift(n);
                    for (; o[i] === r[i];) i++;
                    return i ? he(o[i], r[i]) : o[i] == x ? -1 : r[i] == x ? 1 : 0
                }, p) : p
            }, re.matches = function (e, t) {
                return re(e, null, null, t)
            }, re.matchesSelector = function (e, t) {
                if (h(e), n.matchesSelector && m && !M[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {
                    M(t, !0)
                }
                return re(t, p, null, [e]).length > 0
            }, re.contains = function (e, t) {
                return (e.ownerDocument || e) != p && h(e), b(e, t)
            }, re.attr = function (e, t) {
                (e.ownerDocument || e) != p && h(e);
                var s = i.attrHandle[t.toLowerCase()],
                    a = s && P.call(i.attrHandle, t.toLowerCase()) ? s(e, t, !m) : void 0;
                return void 0 !== a ? a : n.attributes || !m ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
            }, re.escape = function (e) {
                return (e + "").replace(ie, se)
            }, re.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, re.uniqueSort = function (e) {
                var t, i = [], s = 0, a = 0;
                if (u = !n.detectDuplicates, d = !n.sortStable && e.slice(0), e.sort(k), u) {
                    for (; t = e[a++];) t === e[a] && (s = i.push(a));
                    for (; s--;) e.splice(i[s], 1)
                }
                return d = null, e
            }, s = re.getText = function (e) {
                var t, n = "", i = 0, a = e.nodeType;
                if (a) {
                    if (1 === a || 9 === a || 11 === a) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                    } else if (3 === a || 4 === a) return e.nodeValue
                } else for (; t = e[i++];) n += s(t);
                return n
            }, (i = re.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    }, CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                    }, PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    }, CLASS: function (e) {
                        var t = S[e + " "];
                        return t || (t = new RegExp("(^|" + N + ")" + e + "(" + N + "|$)")) && S(e, (function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    }, ATTR: function (e, t, n) {
                        return function (i) {
                            var s = re.attr(i, e);
                            return null == s ? "!=" === t : !t || (s += "", "=" === t ? s === n : "!=" === t ? s !== n : "^=" === t ? n && 0 === s.indexOf(n) : "*=" === t ? n && s.indexOf(n) > -1 : "$=" === t ? n && s.slice(-n.length) === n : "~=" === t ? (" " + s.replace(j, " ") + " ").indexOf(n) > -1 : "|=" === t && (s === n || s.slice(0, n.length + 1) === n + "-"))
                        }
                    }, CHILD: function (e, t, n, i, s) {
                        var a = "nth" !== e.slice(0, 3), o = "last" !== e.slice(-4), r = "of-type" === t;
                        return 1 === i && 0 === s ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, l) {
                            var c, d, u, h, p, f, m = a !== o ? "nextSibling" : "previousSibling", g = t.parentNode,
                                v = r && t.nodeName.toLowerCase(), y = !l && !r, b = !1;
                            if (g) {
                                if (a) {
                                    for (; m;) {
                                        for (h = t; h = h[m];) if (r ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        f = m = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [o ? g.firstChild : g.lastChild], o && y) {
                                    for (b = (p = (c = (d = (u = (h = g)[w] || (h[w] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] || [])[0] === E && c[1]) && c[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (b = p = 0) || f.pop();) if (1 === h.nodeType && ++b && h === t) {
                                        d[e] = [E, p, b];
                                        break
                                    }
                                } else if (y && (b = p = (c = (d = (u = (h = t)[w] || (h[w] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] || [])[0] === E && c[1]), !1 === b) for (; (h = ++p && h && h[m] || (b = p = 0) || f.pop()) && ((r ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((d = (u = h[w] || (h[w] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] = [E, b]), h !== t));) ;
                                return (b -= s) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    }, PSEUDO: function (e, t) {
                        var n,
                            s = i.pseudos[e] || i.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                        return s[w] ? s(t) : s.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function (e, n) {
                            for (var i, a = s(e, t), o = a.length; o--;) e[i = I(e, a[o])] = !(n[i] = a[o])
                        })) : function (e) {
                            return s(e, 0, n)
                        }) : s
                    }
                },
                pseudos: {
                    not: ce((function (e) {
                        var t = [], n = [], i = r(e.replace(B, "$1"));
                        return i[w] ? ce((function (e, t, n, s) {
                            for (var a, o = i(e, null, s, []), r = e.length; r--;) (a = o[r]) && (e[r] = !(t[r] = a))
                        })) : function (e, s, a) {
                            return t[0] = e, i(t, null, a, n), t[0] = null, !n.pop()
                        }
                    })), has: ce((function (e) {
                        return function (t) {
                            return re(e, t).length > 0
                        }
                    })), contains: ce((function (e) {
                        return e = e.replace(te, ne), function (t) {
                            return (t.textContent || s(t)).indexOf(e) > -1
                        }
                    })), lang: ce((function (e) {
                        return Y.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
                            var n;
                            do {
                                if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    })), target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    }, root: function (e) {
                        return e === f
                    }, focus: function (e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    }, enabled: me(!1), disabled: me(!0), checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    }, selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    }, empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                        return !0
                    }, parent: function (e) {
                        return !i.pseudos.empty(e)
                    }, header: function (e) {
                        return K.test(e.nodeName)
                    }, input: function (e) {
                        return Z.test(e.nodeName)
                    }, button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    }, text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    }, first: ge((function () {
                        return [0]
                    })), last: ge((function (e, t) {
                        return [t - 1]
                    })), eq: ge((function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    })), even: ge((function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    })), odd: ge((function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    })), lt: ge((function (e, t, n) {
                        for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
                        return e
                    })), gt: ge((function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    }))
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = pe(t);
            for (t in {submit: !0, reset: !0}) i.pseudos[t] = fe(t);

            function ye() {
            }

            function be(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function we(e, t, n) {
                var i = t.dir, s = t.next, a = s || i, o = n && "parentNode" === a, r = C++;
                return t.first ? function (t, n, s) {
                    for (; t = t[i];) if (1 === t.nodeType || o) return e(t, n, s);
                    return !1
                } : function (t, n, l) {
                    var c, d, u, h = [E, r];
                    if (l) {
                        for (; t = t[i];) if ((1 === t.nodeType || o) && e(t, n, l)) return !0
                    } else for (; t = t[i];) if (1 === t.nodeType || o) if (d = (u = t[w] || (t[w] = {}))[t.uniqueID] || (u[t.uniqueID] = {}), s && s === t.nodeName.toLowerCase()) t = t[i] || t; else {
                        if ((c = d[a]) && c[0] === E && c[1] === r) return h[2] = c[2];
                        if (d[a] = h, h[2] = e(t, n, l)) return !0
                    }
                    return !1
                }
            }

            function xe(e) {
                return e.length > 1 ? function (t, n, i) {
                    for (var s = e.length; s--;) if (!e[s](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function Ee(e, t, n, i, s) {
                for (var a, o = [], r = 0, l = e.length, c = null != t; r < l; r++) (a = e[r]) && (n && !n(a, i, s) || (o.push(a), c && t.push(r)));
                return o
            }

            function Ce(e, t, n, i, s, a) {
                return i && !i[w] && (i = Ce(i)), s && !s[w] && (s = Ce(s, a)), ce((function (a, o, r, l) {
                    var c, d, u, h = [], p = [], f = o.length, m = a || function (e, t, n) {
                            for (var i = 0, s = t.length; i < s; i++) re(e, t[i], n);
                            return n
                        }(t || "*", r.nodeType ? [r] : r, []), g = !e || !a && t ? m : Ee(m, h, e, r, l),
                        v = n ? s || (a ? e : f || i) ? [] : o : g;
                    if (n && n(g, v, r, l), i) for (c = Ee(v, p), i(c, [], r, l), d = c.length; d--;) (u = c[d]) && (v[p[d]] = !(g[p[d]] = u));
                    if (a) {
                        if (s || e) {
                            if (s) {
                                for (c = [], d = v.length; d--;) (u = v[d]) && c.push(g[d] = u);
                                s(null, v = [], c, l)
                            }
                            for (d = v.length; d--;) (u = v[d]) && (c = s ? I(a, u) : h[d]) > -1 && (a[c] = !(o[c] = u))
                        }
                    } else v = Ee(v === o ? v.splice(f, v.length) : v), s ? s(null, o, v, l) : _.apply(o, v)
                }))
            }

            function Se(e) {
                for (var t, n, s, a = e.length, o = i.relative[e[0].type], r = o || i.relative[" "], l = o ? 1 : 0, d = we((function (e) {
                    return e === t
                }), r, !0), u = we((function (e) {
                    return I(t, e) > -1
                }), r, !0), h = [function (e, n, i) {
                    var s = !o && (i || n !== c) || ((t = n).nodeType ? d(e, n, i) : u(e, n, i));
                    return t = null, s
                }]; l < a; l++) if (n = i.relative[e[l].type]) h = [we(xe(h), n)]; else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (s = ++l; s < a && !i.relative[e[s].type]; s++) ;
                        return Ce(l > 1 && xe(h), l > 1 && be(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(B, "$1"), n, l < s && Se(e.slice(l, s)), s < a && Se(e = e.slice(s)), s < a && be(e))
                    }
                    h.push(n)
                }
                return xe(h)
            }

            return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, o = re.tokenize = function (e, t) {
                var n, s, a, o, r, l, c, d = T[e + " "];
                if (d) return t ? 0 : d.slice(0);
                for (r = e, l = [], c = i.preFilter; r;) {
                    for (o in n && !(s = F.exec(r)) || (s && (r = r.slice(s[0].length) || r), l.push(a = [])), n = !1, (s = W.exec(r)) && (n = s.shift(), a.push({
                        value: n,
                        type: s[0].replace(B, " ")
                    }), r = r.slice(n.length)), i.filter) !(s = V[o].exec(r)) || c[o] && !(s = c[o](s)) || (n = s.shift(), a.push({
                        value: n,
                        type: o,
                        matches: s
                    }), r = r.slice(n.length));
                    if (!n) break
                }
                return t ? r.length : r ? re.error(e) : T(e, l).slice(0)
            }, r = re.compile = function (e, t) {
                var n, s = [], a = [], r = $[e + " "];
                if (!r) {
                    for (t || (t = o(e)), n = t.length; n--;) (r = Se(t[n]))[w] ? s.push(r) : a.push(r);
                    (r = $(e, function (e, t) {
                        var n = t.length > 0, s = e.length > 0, a = function (a, o, r, l, d) {
                            var u, f, g, v = 0, y = "0", b = a && [], w = [], x = c, C = a || s && i.find.TAG("*", d),
                                S = E += null == x ? 1 : Math.random() || .1, T = C.length;
                            for (d && (c = o == p || o || d); y !== T && null != (u = C[y]); y++) {
                                if (s && u) {
                                    for (f = 0, o || u.ownerDocument == p || (h(u), r = !m); g = e[f++];) if (g(u, o || p, r)) {
                                        l.push(u);
                                        break
                                    }
                                    d && (E = S)
                                }
                                n && ((u = !g && u) && v--, a && b.push(u))
                            }
                            if (v += y, n && y !== v) {
                                for (f = 0; g = t[f++];) g(b, w, o, r);
                                if (a) {
                                    if (v > 0) for (; y--;) b[y] || w[y] || (w[y] = A.call(l));
                                    w = Ee(w)
                                }
                                _.apply(l, w), d && !a && w.length > 0 && v + t.length > 1 && re.uniqueSort(l)
                            }
                            return d && (E = S, c = x), b
                        };
                        return n ? ce(a) : a
                    }(a, s))).selector = e
                }
                return r
            }, l = re.select = function (e, t, n, s) {
                var a, l, c, d, u, h = "function" == typeof e && e, p = !s && o(e = h.selector || e);
                if (n = n || [], 1 === p.length) {
                    if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
                        if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                        h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                    }
                    for (a = V.needsContext.test(e) ? 0 : l.length; a-- && (c = l[a], !i.relative[d = c.type]);) if ((u = i.find[d]) && (s = u(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(a, 1), !(e = s.length && be(l))) return _.apply(n, s), n;
                        break
                    }
                }
                return (h || r(e, p))(s, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n
            }, n.sortStable = w.split("").sort(k).join("") === w, n.detectDuplicates = !!u, h(), n.sortDetached = de((function (e) {
                return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
            })), de((function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            })) || ue("type|href|height|width", (function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            })), n.attributes && de((function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            })) || ue("value", (function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            })), de((function (e) {
                return null == e.getAttribute("disabled")
            })) || ue(D, (function (e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            })), re
        }(n);
        C.find = T, C.expr = T.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = T.uniqueSort, C.text = T.getText, C.isXMLDoc = T.isXML, C.contains = T.contains, C.escapeSelector = T.escape;
        var $ = function (e, t, n) {
            for (var i = [], s = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (s && C(e).is(n)) break;
                i.push(e)
            }
            return i
        }, M = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }, k = C.expr.match.needsContext;

        function P(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }

        var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function A(e, t, n) {
            return v(t) ? C.grep(e, (function (e, i) {
                return !!t.call(e, i, e) !== n
            })) : t.nodeType ? C.grep(e, (function (e) {
                return e === t !== n
            })) : "string" != typeof t ? C.grep(e, (function (e) {
                return d.call(t, e) > -1 !== n
            })) : C.filter(t, e, n)
        }

        C.filter = function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, (function (e) {
                return 1 === e.nodeType
            })))
        }, C.fn.extend({
            find: function (e) {
                var t, n, i = this.length, s = this;
                if ("string" != typeof e) return this.pushStack(C(e).filter((function () {
                    for (t = 0; t < i; t++) if (C.contains(s[t], this)) return !0
                })));
                for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, s[t], n);
                return i > 1 ? C.uniqueSort(n) : n
            }, filter: function (e) {
                return this.pushStack(A(this, e || [], !1))
            }, not: function (e) {
                return this.pushStack(A(this, e || [], !0))
            }, is: function (e) {
                return !!A(this, "string" == typeof e && k.test(e) ? C(e) : e || [], !1).length
            }
        });
        var O, _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (C.fn.init = function (e, t, n) {
            var i, s;
            if (!e) return this;
            if (n = n || O, "string" == typeof e) {
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : _.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), L.test(i[1]) && C.isPlainObject(t)) for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return (s = b.getElementById(i[2])) && (this[0] = s, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
        }).prototype = C.fn, O = C(b);
        var z = /^(?:parents|prev(?:Until|All))/, I = {children: !0, contents: !0, next: !0, prev: !0};

        function D(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType;) ;
            return e
        }

        C.fn.extend({
            has: function (e) {
                var t = C(e, this), n = t.length;
                return this.filter((function () {
                    for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0
                }))
            }, closest: function (e, t) {
                var n, i = 0, s = this.length, a = [], o = "string" != typeof e && C(e);
                if (!k.test(e)) for (; i < s; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                    a.push(n);
                    break
                }
                return this.pushStack(a.length > 1 ? C.uniqueSort(a) : a)
            }, index: function (e) {
                return e ? "string" == typeof e ? d.call(C(e), this[0]) : d.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (e, t) {
                return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
            }, addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), C.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return $(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return $(e, "parentNode", n)
            }, next: function (e) {
                return D(e, "nextSibling")
            }, prev: function (e) {
                return D(e, "previousSibling")
            }, nextAll: function (e) {
                return $(e, "nextSibling")
            }, prevAll: function (e) {
                return $(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return $(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return $(e, "previousSibling", n)
            }, siblings: function (e) {
                return M((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return M(e.firstChild)
            }, contents: function (e) {
                return null != e.contentDocument && o(e.contentDocument) ? e.contentDocument : (P(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
            }
        }, (function (e, t) {
            C.fn[e] = function (n, i) {
                var s = C.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (s = C.filter(i, s)), this.length > 1 && (I[e] || C.uniqueSort(s), z.test(e) && s.reverse()), this.pushStack(s)
            }
        }));
        var N = /[^\x20\t\r\n\f]+/g;

        function H(e) {
            return e
        }

        function R(e) {
            throw e
        }

        function q(e, t, n, i) {
            var s;
            try {
                e && v(s = e.promise) ? s.call(e).done(t).fail(n) : e && v(s = e.then) ? s.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }

        C.Callbacks = function (e) {
            e = "string" == typeof e ? function (e) {
                var t = {};
                return C.each(e.match(N) || [], (function (e, n) {
                    t[n] = !0
                })), t
            }(e) : C.extend({}, e);
            var t, n, i, s, a = [], o = [], r = -1, l = function () {
                for (s = s || e.once, i = t = !0; o.length; r = -1) for (n = o.shift(); ++r < a.length;) !1 === a[r].apply(n[0], n[1]) && e.stopOnFalse && (r = a.length, n = !1);
                e.memory || (n = !1), t = !1, s && (a = n ? [] : "")
            }, c = {
                add: function () {
                    return a && (n && !t && (r = a.length - 1, o.push(n)), function t(n) {
                        C.each(n, (function (n, i) {
                            v(i) ? e.unique && c.has(i) || a.push(i) : i && i.length && "string" !== E(i) && t(i)
                        }))
                    }(arguments), n && !t && l()), this
                }, remove: function () {
                    return C.each(arguments, (function (e, t) {
                        for (var n; (n = C.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= r && r--
                    })), this
                }, has: function (e) {
                    return e ? C.inArray(e, a) > -1 : a.length > 0
                }, empty: function () {
                    return a && (a = []), this
                }, disable: function () {
                    return s = o = [], a = n = "", this
                }, disabled: function () {
                    return !a
                }, lock: function () {
                    return s = o = [], n || t || (a = n = ""), this
                }, locked: function () {
                    return !!s
                }, fireWith: function (e, n) {
                    return s || (n = [e, (n = n || []).slice ? n.slice() : n], o.push(n), t || l()), this
                }, fire: function () {
                    return c.fireWith(this, arguments), this
                }, fired: function () {
                    return !!i
                }
            };
            return c
        }, C.extend({
            Deferred: function (e) {
                var t = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]],
                    i = "pending", s = {
                        state: function () {
                            return i
                        }, always: function () {
                            return a.done(arguments).fail(arguments), this
                        }, catch: function (e) {
                            return s.then(null, e)
                        }, pipe: function () {
                            var e = arguments;
                            return C.Deferred((function (n) {
                                C.each(t, (function (t, i) {
                                    var s = v(e[i[4]]) && e[i[4]];
                                    a[i[1]]((function () {
                                        var e = s && s.apply(this, arguments);
                                        e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, s ? [e] : arguments)
                                    }))
                                })), e = null
                            })).promise()
                        }, then: function (e, i, s) {
                            var a = 0;

                            function o(e, t, i, s) {
                                return function () {
                                    var r = this, l = arguments, c = function () {
                                        var n, c;
                                        if (!(e < a)) {
                                            if ((n = i.apply(r, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                            c = n && ("object" == typeof n || "function" == typeof n) && n.then, v(c) ? s ? c.call(n, o(a, t, H, s), o(a, t, R, s)) : (a++, c.call(n, o(a, t, H, s), o(a, t, R, s), o(a, t, H, t.notifyWith))) : (i !== H && (r = void 0, l = [n]), (s || t.resolveWith)(r, l))
                                        }
                                    }, d = s ? c : function () {
                                        try {
                                            c()
                                        } catch (n) {
                                            C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, d.stackTrace), e + 1 >= a && (i !== R && (r = void 0, l = [n]), t.rejectWith(r, l))
                                        }
                                    };
                                    e ? d() : (C.Deferred.getStackHook && (d.stackTrace = C.Deferred.getStackHook()), n.setTimeout(d))
                                }
                            }

                            return C.Deferred((function (n) {
                                t[0][3].add(o(0, n, v(s) ? s : H, n.notifyWith)), t[1][3].add(o(0, n, v(e) ? e : H)), t[2][3].add(o(0, n, v(i) ? i : R))
                            })).promise()
                        }, promise: function (e) {
                            return null != e ? C.extend(e, s) : s
                        }
                    }, a = {};
                return C.each(t, (function (e, n) {
                    var o = n[2], r = n[5];
                    s[n[1]] = o.add, r && o.add((function () {
                        i = r
                    }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), o.add(n[3].fire), a[n[0]] = function () {
                        return a[n[0] + "With"](this === a ? void 0 : this, arguments), this
                    }, a[n[0] + "With"] = o.fireWith
                })), s.promise(a), e && e.call(a, a), a
            }, when: function (e) {
                var t = arguments.length, n = t, i = Array(n), s = r.call(arguments), a = C.Deferred(),
                    o = function (e) {
                        return function (n) {
                            i[e] = this, s[e] = arguments.length > 1 ? r.call(arguments) : n, --t || a.resolveWith(i, s)
                        }
                    };
                if (t <= 1 && (q(e, a.done(o(n)).resolve, a.reject, !t), "pending" === a.state() || v(s[n] && s[n].then))) return a.then();
                for (; n--;) q(s[n], o(n), a.reject);
                return a.promise()
            }
        });
        var j = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        C.Deferred.exceptionHook = function (e, t) {
            n.console && n.console.warn && e && j.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, C.readyException = function (e) {
            n.setTimeout((function () {
                throw e
            }))
        };
        var B = C.Deferred();

        function F() {
            b.removeEventListener("DOMContentLoaded", F), n.removeEventListener("load", F), C.ready()
        }

        C.fn.ready = function (e) {
            return B.then(e).catch((function (e) {
                C.readyException(e)
            })), this
        }, C.extend({
            isReady: !1, readyWait: 1, ready: function (e) {
                (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || B.resolveWith(b, [C]))
            }
        }), C.ready.then = B.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(C.ready) : (b.addEventListener("DOMContentLoaded", F), n.addEventListener("load", F));
        var W = function (e, t, n, i, s, a, o) {
            var r = 0, l = e.length, c = null == n;
            if ("object" === E(n)) for (r in s = !0, n) W(e, t, r, n[r], !0, a, o); else if (void 0 !== i && (s = !0, v(i) || (o = !0), c && (o ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                return c.call(C(e), n)
            })), t)) for (; r < l; r++) t(e[r], n, o ? i : i.call(e[r], r, t(e[r], n)));
            return s ? e : c ? t.call(e) : l ? t(e[0], n) : a
        }, X = /^-ms-/, G = /-([a-z])/g;

        function Y(e, t) {
            return t.toUpperCase()
        }

        function V(e) {
            return e.replace(X, "ms-").replace(G, Y)
        }

        var U = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function Z() {
            this.expando = C.expando + Z.uid++
        }

        Z.uid = 1, Z.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || (t = {}, U(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            }, set: function (e, t, n) {
                var i, s = this.cache(e);
                if ("string" == typeof t) s[V(t)] = n; else for (i in t) s[V(i)] = t[i];
                return s
            }, get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
            }, access: function (e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            }, remove: function (e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in i ? [t] : t.match(N) || []).length;
                        for (; n--;) delete i[t[n]]
                    }
                    (void 0 === t || C.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            }, hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t)
            }
        };
        var K = new Z, J = new Z, Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g;

        function te(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = function (e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Q.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {
                }
                J.set(e, t, n)
            } else n = void 0;
            return n
        }

        C.extend({
            hasData: function (e) {
                return J.hasData(e) || K.hasData(e)
            }, data: function (e, t, n) {
                return J.access(e, t, n)
            }, removeData: function (e, t) {
                J.remove(e, t)
            }, _data: function (e, t, n) {
                return K.access(e, t, n)
            }, _removeData: function (e, t) {
                K.remove(e, t)
            }
        }), C.fn.extend({
            data: function (e, t) {
                var n, i, s, a = this[0], o = a && a.attributes;
                if (void 0 === e) {
                    if (this.length && (s = J.get(a), 1 === a.nodeType && !K.get(a, "hasDataAttrs"))) {
                        for (n = o.length; n--;) o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = V(i.slice(5)), te(a, i, s[i]));
                        K.set(a, "hasDataAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof e ? this.each((function () {
                    J.set(this, e)
                })) : W(this, (function (t) {
                    var n;
                    if (a && void 0 === t) return void 0 !== (n = J.get(a, e)) || void 0 !== (n = te(a, e)) ? n : void 0;
                    this.each((function () {
                        J.set(this, e, t)
                    }))
                }), null, t, arguments.length > 1, null, !0)
            }, removeData: function (e) {
                return this.each((function () {
                    J.remove(this, e)
                }))
            }
        }), C.extend({
            queue: function (e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, C.makeArray(n)) : i.push(n)), i || []
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = C.queue(e, t), i = n.length, s = n.shift(), a = C._queueHooks(e, t);
                "inprogress" === s && (s = n.shift(), i--), s && ("fx" === t && n.unshift("inprogress"), delete a.stop, s.call(e, (function () {
                    C.dequeue(e, t)
                }), a)), !i && a && a.empty.fire()
            }, _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return K.get(e, n) || K.access(e, n, {
                    empty: C.Callbacks("once memory").add((function () {
                        K.remove(e, [t + "queue", n])
                    }))
                })
            }
        }), C.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                    var n = C.queue(this, e, t);
                    C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
                }))
            }, dequeue: function (e) {
                return this.each((function () {
                    C.dequeue(this, e)
                }))
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var n, i = 1, s = C.Deferred(), a = this, o = this.length, r = function () {
                    --i || s.resolveWith(a, [a])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) (n = K.get(a[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(r));
                return r(), s.promise(t)
            }
        });
        var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ie = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"), se = ["Top", "Right", "Bottom", "Left"],
            ae = b.documentElement, oe = function (e) {
                return C.contains(e.ownerDocument, e)
            }, re = {composed: !0};
        ae.getRootNode && (oe = function (e) {
            return C.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
        });
        var le = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === C.css(e, "display")
        };

        function ce(e, t, n, i) {
            var s, a, o = 20, r = i ? function () {
                    return i.cur()
                } : function () {
                    return C.css(e, t, "")
                }, l = r(), c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                d = e.nodeType && (C.cssNumber[t] || "px" !== c && +l) && ie.exec(C.css(e, t));
            if (d && d[3] !== c) {
                for (l /= 2, c = c || d[3], d = +l || 1; o--;) C.style(e, t, d + c), (1 - a) * (1 - (a = r() / l || .5)) <= 0 && (o = 0), d /= a;
                d *= 2, C.style(e, t, d + c), n = n || []
            }
            return n && (d = +d || +l || 0, s = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = s)), s
        }

        var de = {};

        function ue(e) {
            var t, n = e.ownerDocument, i = e.nodeName, s = de[i];
            return s || (t = n.body.appendChild(n.createElement(i)), s = C.css(t, "display"), t.parentNode.removeChild(t), "none" === s && (s = "block"), de[i] = s, s)
        }

        function he(e, t) {
            for (var n, i, s = [], a = 0, o = e.length; a < o; a++) (i = e[a]).style && (n = i.style.display, t ? ("none" === n && (s[a] = K.get(i, "display") || null, s[a] || (i.style.display = "")), "" === i.style.display && le(i) && (s[a] = ue(i))) : "none" !== n && (s[a] = "none", K.set(i, "display", n)));
            for (a = 0; a < o; a++) null != s[a] && (e[a].style.display = s[a]);
            return e
        }

        C.fn.extend({
            show: function () {
                return he(this, !0)
            }, hide: function () {
                return he(this)
            }, toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
                    le(this) ? C(this).show() : C(this).hide()
                }))
            }
        });
        var pe, fe, me = /^(?:checkbox|radio)$/i, ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ve = /^$|^module$|\/(?:java|ecma)script/i;
        pe = b.createDocumentFragment().appendChild(b.createElement("div")), (fe = b.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), pe.appendChild(fe), g.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked, pe.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue, pe.innerHTML = "<option></option>",
            g.option = !!pe.lastChild;
        var ye = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function be(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && P(e, t) ? C.merge([e], n) : n
        }

        function we(e, t) {
            for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
        }

        ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td,
        g.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
        var xe = /<|&#?\w+;/;

        function Ee(e, t, n, i, s) {
            for (var a, o, r, l, c, d, u = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++) if ((a = e[p]) || 0 === a) if ("object" === E(a)) C.merge(h, a.nodeType ? [a] : a); else if (xe.test(a)) {
                for (o = o || u.appendChild(t.createElement("div")), r = (ge.exec(a) || ["", ""])[1].toLowerCase(), l = ye[r] || ye._default, o.innerHTML = l[1] + C.htmlPrefilter(a) + l[2], d = l[0]; d--;) o = o.lastChild;
                C.merge(h, o.childNodes), (o = u.firstChild).textContent = ""
            } else h.push(t.createTextNode(a));
            for (u.textContent = "", p = 0; a = h[p++];) if (i && C.inArray(a, i) > -1) s && s.push(a); else if (c = oe(a), o = be(u.appendChild(a), "script"), c && we(o), n) for (d = 0; a = o[d++];) ve.test(a.type || "") && n.push(a);
            return u
        }

        var Ce = /^([^.]*)(?:\.(.+)|)/;

        function Se() {
            return !0
        }

        function Te() {
            return !1
        }

        function $e(e, t) {
            return e === function () {
                try {
                    return b.activeElement
                } catch (e) {
                }
            }() == ("focus" === t)
        }

        function Me(e, t, n, i, s, a) {
            var o, r;
            if ("object" == typeof t) {
                for (r in "string" != typeof n && (i = i || n, n = void 0), t) Me(e, r, n, i, t[r], a);
                return e
            }
            if (null == i && null == s ? (s = n, i = n = void 0) : null == s && ("string" == typeof n ? (s = i, i = void 0) : (s = i, i = n, n = void 0)), !1 === s) s = Te; else if (!s) return e;
            return 1 === a && (o = s, (s = function (e) {
                return C().off(e), o.apply(this, arguments)
            }).guid = o.guid || (o.guid = C.guid++)), e.each((function () {
                C.event.add(this, t, s, i, n)
            }))
        }

        function ke(e, t, n) {
            n ? (K.set(e, t, !1), C.event.add(e, t, {
                namespace: !1, handler: function (e) {
                    var i, s, a = K.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (a.length) (C.event.special[t] || {}).delegateType && e.stopPropagation(); else if (a = r.call(arguments), K.set(this, t, a), i = n(this, t), this[t](), a !== (s = K.get(this, t)) || i ? K.set(this, t, !1) : s = {}, a !== s) return e.stopImmediatePropagation(), e.preventDefault(), s && s.value
                    } else a.length && (K.set(this, t, {value: C.event.trigger(C.extend(a[0], C.Event.prototype), a.slice(1), this)}), e.stopImmediatePropagation())
                }
            })) : void 0 === K.get(e, t) && C.event.add(e, t, Se)
        }

        C.event = {
            global: {}, add: function (e, t, n, i, s) {
                var a, o, r, l, c, d, u, h, p, f, m, g = K.get(e);
                if (U(e)) for (n.handler && (n = (a = n).handler, s = a.selector), s && C.find.matchesSelector(ae, s), n.guid || (n.guid = C.guid++), (l = g.events) || (l = g.events = Object.create(null)), (o = g.handle) || (o = g.handle = function (t) {
                    return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                }), c = (t = (t || "").match(N) || [""]).length; c--;) p = m = (r = Ce.exec(t[c]) || [])[1], f = (r[2] || "").split(".").sort(), p && (u = C.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, u = C.event.special[p] || {}, d = C.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: s,
                    needsContext: s && C.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, a), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, f, o) || e.addEventListener && e.addEventListener(p, o)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), s ? h.splice(h.delegateCount++, 0, d) : h.push(d), C.event.global[p] = !0)
            }, remove: function (e, t, n, i, s) {
                var a, o, r, l, c, d, u, h, p, f, m, g = K.hasData(e) && K.get(e);
                if (g && (l = g.events)) {
                    for (c = (t = (t || "").match(N) || [""]).length; c--;) if (p = m = (r = Ce.exec(t[c]) || [])[1], f = (r[2] || "").split(".").sort(), p) {
                        for (u = C.event.special[p] || {}, h = l[p = (i ? u.delegateType : u.bindType) || p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = h.length; a--;) d = h[a], !s && m !== d.origType || n && n.guid !== d.guid || r && !r.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (h.splice(a, 1), d.selector && h.delegateCount--, u.remove && u.remove.call(e, d));
                        o && !h.length && (u.teardown && !1 !== u.teardown.call(e, f, g.handle) || C.removeEvent(e, p, g.handle), delete l[p])
                    } else for (p in l) C.event.remove(e, p + t[c], n, i, !0);
                    C.isEmptyObject(l) && K.remove(e, "handle events")
                }
            }, dispatch: function (e) {
                var t, n, i, s, a, o, r = new Array(arguments.length), l = C.event.fix(e),
                    c = (K.get(this, "events") || Object.create(null))[l.type] || [], d = C.event.special[l.type] || {};
                for (r[0] = l, t = 1; t < arguments.length; t++) r[t] = arguments[t];
                if (l.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, l)) {
                    for (o = C.event.handlers.call(this, l, c), t = 0; (s = o[t++]) && !l.isPropagationStopped();) for (l.currentTarget = s.elem, n = 0; (a = s.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== a.namespace && !l.rnamespace.test(a.namespace) || (l.handleObj = a, l.data = a.data, void 0 !== (i = ((C.event.special[a.origType] || {}).handle || a.handler).apply(s.elem, r)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                    return d.postDispatch && d.postDispatch.call(this, l), l.result
                }
            }, handlers: function (e, t) {
                var n, i, s, a, o, r = [], l = t.delegateCount, c = e.target;
                if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                    for (a = [], o = {}, n = 0; n < l; n++) void 0 === o[s = (i = t[n]).selector + " "] && (o[s] = i.needsContext ? C(s, this).index(c) > -1 : C.find(s, this, null, [c]).length), o[s] && a.push(i);
                    a.length && r.push({elem: c, handlers: a})
                }
                return c = this, l < t.length && r.push({elem: c, handlers: t.slice(l)}), r
            }, addProp: function (e, t) {
                Object.defineProperty(C.Event.prototype, e, {
                    enumerable: !0, configurable: !0, get: v(t) ? function () {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[e]
                    }, set: function (t) {
                        Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                    }
                })
            }, fix: function (e) {
                return e[C.expando] ? e : new C.Event(e)
            }, special: {
                load: {noBubble: !0}, click: {
                    setup: function (e) {
                        var t = this || e;
                        return me.test(t.type) && t.click && P(t, "input") && ke(t, "click", Se), !1
                    }, trigger: function (e) {
                        var t = this || e;
                        return me.test(t.type) && t.click && P(t, "input") && ke(t, "click"), !0
                    }, _default: function (e) {
                        var t = e.target;
                        return me.test(t.type) && t.click && P(t, "input") && K.get(t, "click") || P(t, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, C.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, C.Event = function (e, t) {
            if (!(this instanceof C.Event)) return new C.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
        }, C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: Te,
            isPropagationStopped: Te,
            isImmediatePropagationStopped: Te,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, C.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0
        }, C.event.addProp), C.each({focus: "focusin", blur: "focusout"}, (function (e, t) {
            C.event.special[e] = {
                setup: function () {
                    return ke(this, e, $e), !1
                }, trigger: function () {
                    return ke(this, e), !0
                }, _default: function () {
                    return !0
                }, delegateType: t
            }
        })), C.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function (e, t) {
            C.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, i = this, s = e.relatedTarget, a = e.handleObj;
                    return s && (s === i || C.contains(i, s)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
                }
            }
        })), C.fn.extend({
            on: function (e, t, n, i) {
                return Me(this, e, t, n, i)
            }, one: function (e, t, n, i) {
                return Me(this, e, t, n, i, 1)
            }, off: function (e, t, n) {
                var i, s;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (s in e) this.off(s, t, e[s]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each((function () {
                    C.event.remove(this, e, n, t)
                }))
            }
        });
        var Pe = /<script|<style|<link/i, Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Oe(e, t) {
            return P(e, "table") && P(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
        }

        function _e(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function ze(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Ie(e, t) {
            var n, i, s, a, o, r;
            if (1 === t.nodeType) {
                if (K.hasData(e) && (r = K.get(e).events)) for (s in K.remove(t, "handle events"), r) for (n = 0, i = r[s].length; n < i; n++) C.event.add(t, s, r[s][n]);
                J.hasData(e) && (a = J.access(e), o = C.extend({}, a), J.set(t, o))
            }
        }

        function De(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function Ne(e, t, n, i) {
            t = l(t);
            var s, a, o, r, c, d, u = 0, h = e.length, p = h - 1, f = t[0], m = v(f);
            if (m || h > 1 && "string" == typeof f && !g.checkClone && Le.test(f)) return e.each((function (s) {
                var a = e.eq(s);
                m && (t[0] = f.call(this, s, a.html())), Ne(a, t, n, i)
            }));
            if (h && (a = (s = Ee(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === s.childNodes.length && (s = a), a || i)) {
                for (r = (o = C.map(be(s, "script"), _e)).length; u < h; u++) c = s, u !== p && (c = C.clone(c, !0, !0), r && C.merge(o, be(c, "script"))), n.call(e[u], c, u);
                if (r) for (d = o[o.length - 1].ownerDocument, C.map(o, ze), u = 0; u < r; u++) c = o[u], ve.test(c.type || "") && !K.access(c, "globalEval") && C.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? C._evalUrl && !c.noModule && C._evalUrl(c.src, {nonce: c.nonce || c.getAttribute("nonce")}, d) : x(c.textContent.replace(Ae, ""), c, d))
            }
            return e
        }

        function He(e, t, n) {
            for (var i, s = t ? C.filter(t, e) : e, a = 0; null != (i = s[a]); a++) n || 1 !== i.nodeType || C.cleanData(be(i)), i.parentNode && (n && oe(i) && we(be(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        C.extend({
            htmlPrefilter: function (e) {
                return e
            }, clone: function (e, t, n) {
                var i, s, a, o, r = e.cloneNode(!0), l = oe(e);
                if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (o = be(r), i = 0, s = (a = be(e)).length; i < s; i++) De(a[i], o[i]);
                if (t) if (n) for (a = a || be(e), o = o || be(r), i = 0, s = a.length; i < s; i++) Ie(a[i], o[i]); else Ie(e, r);
                return (o = be(r, "script")).length > 0 && we(o, !l && be(e, "script")), r
            }, cleanData: function (e) {
                for (var t, n, i, s = C.event.special, a = 0; void 0 !== (n = e[a]); a++) if (U(n)) {
                    if (t = n[K.expando]) {
                        if (t.events) for (i in t.events) s[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                        n[K.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
            }
        }), C.fn.extend({
            detach: function (e) {
                return He(this, e, !0)
            }, remove: function (e) {
                return He(this, e)
            }, text: function (e) {
                return W(this, (function (e) {
                    return void 0 === e ? C.text(this) : this.empty().each((function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    }))
                }), null, e, arguments.length)
            }, append: function () {
                return Ne(this, arguments, (function (e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
                }))
            }, prepend: function () {
                return Ne(this, arguments, (function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Oe(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                }))
            }, before: function () {
                return Ne(this, arguments, (function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                }))
            }, after: function () {
                return Ne(this, arguments, (function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                }))
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(be(e, !1)), e.textContent = "");
                return this
            }, clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map((function () {
                    return C.clone(this, e, t)
                }))
            }, html: function (e) {
                return W(this, (function (e) {
                    var t = this[0] || {}, n = 0, i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Pe.test(e) && !ye[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = C.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(be(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {
                        }
                    }
                    t && this.empty().append(e)
                }), null, e, arguments.length)
            }, replaceWith: function () {
                var e = [];
                return Ne(this, arguments, (function (t) {
                    var n = this.parentNode;
                    C.inArray(this, e) < 0 && (C.cleanData(be(this)), n && n.replaceChild(t, this))
                }), e)
            }
        }), C.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function (e, t) {
            C.fn[e] = function (e) {
                for (var n, i = [], s = C(e), a = s.length - 1, o = 0; o <= a; o++) n = o === a ? this : this.clone(!0), C(s[o])[t](n), c.apply(i, n.get());
                return this.pushStack(i)
            }
        }));
        var Re = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"), qe = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n), t.getComputedStyle(e)
        }, je = function (e, t, n) {
            var i, s, a = {};
            for (s in t) a[s] = e.style[s], e.style[s] = t[s];
            for (s in i = n.call(e), t) e.style[s] = a[s];
            return i
        }, Be = new RegExp(se.join("|"), "i");

        function Fe(e, t, n) {
            var i, s, a, o, r = e.style;
            return (n = n || qe(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || oe(e) || (o = C.style(e, t)), !g.pixelBoxStyles() && Re.test(o) && Be.test(t) && (i = r.width, s = r.minWidth, a = r.maxWidth, r.minWidth = r.maxWidth = r.width = o, o = n.width, r.width = i, r.minWidth = s, r.maxWidth = a)), void 0 !== o ? o + "" : o
        }

        function We(e, t) {
            return {
                get: function () {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }

        !function () {
            function e() {
                if (d) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ae.appendChild(c).appendChild(d);
                    var e = n.getComputedStyle(d);
                    i = "1%" !== e.top, l = 12 === t(e.marginLeft), d.style.right = "60%", o = 36 === t(e.right), s = 36 === t(e.width), d.style.position = "absolute", a = 12 === t(d.offsetWidth / 3), ae.removeChild(c), d = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }

            var i, s, a, o, r, l, c = b.createElement("div"), d = b.createElement("div");
            d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === d.style.backgroundClip, C.extend(g, {
                boxSizingReliable: function () {
                    return e(), s
                }, pixelBoxStyles: function () {
                    return e(), o
                }, pixelPosition: function () {
                    return e(), i
                }, reliableMarginLeft: function () {
                    return e(), l
                }, scrollboxSize: function () {
                    return e(), a
                }, reliableTrDimensions: function () {
                    var e, t, i, s;
                    return null == r && (e = b.createElement("table"), t = b.createElement("tr"), i = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", i.style.height = "9px", i.style.display = "block", ae.appendChild(e).appendChild(t).appendChild(i), s = n.getComputedStyle(t), r = parseInt(s.height, 10) + parseInt(s.borderTopWidth, 10) + parseInt(s.borderBottomWidth, 10) === t.offsetHeight, ae.removeChild(e)), r
                }
            }))
        }();
        var Xe = ["Webkit", "Moz", "ms"], Ge = b.createElement("div").style, Ye = {};

        function Ve(e) {
            var t = C.cssProps[e] || Ye[e];
            return t || (e in Ge ? e : Ye[e] = function (e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;) if ((e = Xe[n] + t) in Ge) return e
            }(e) || e)
        }

        var Ue = /^(none|table(?!-c[ea]).+)/, Ze = /^--/,
            Ke = {position: "absolute", visibility: "hidden", display: "block"},
            Je = {letterSpacing: "0", fontWeight: "400"};

        function Qe(e, t, n) {
            var i = ie.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function et(e, t, n, i, s, a) {
            var o = "width" === t ? 1 : 0, r = 0, l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; o < 4; o += 2) "margin" === n && (l += C.css(e, n + se[o], !0, s)), i ? ("content" === n && (l -= C.css(e, "padding" + se[o], !0, s)), "margin" !== n && (l -= C.css(e, "border" + se[o] + "Width", !0, s))) : (l += C.css(e, "padding" + se[o], !0, s), "padding" !== n ? l += C.css(e, "border" + se[o] + "Width", !0, s) : r += C.css(e, "border" + se[o] + "Width", !0, s));
            return !i && a >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - r - .5)) || 0), l
        }

        function tt(e, t, n) {
            var i = qe(e), s = (!g.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, i), a = s,
                o = Fe(e, t, i), r = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Re.test(o)) {
                if (!n) return o;
                o = "auto"
            }
            return (!g.boxSizingReliable() && s || !g.reliableTrDimensions() && P(e, "tr") || "auto" === o || !parseFloat(o) && "inline" === C.css(e, "display", !1, i)) && e.getClientRects().length && (s = "border-box" === C.css(e, "boxSizing", !1, i), (a = r in e) && (o = e[r])), (o = parseFloat(o) || 0) + et(e, t, n || (s ? "border" : "content"), a, i, o) + "px"
        }

        function nt(e, t, n, i, s) {
            return new nt.prototype.init(e, t, n, i, s)
        }

        C.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = Fe(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var s, a, o, r = V(t), l = Ze.test(t), c = e.style;
                    if (l || (t = Ve(r)), o = C.cssHooks[t] || C.cssHooks[r], void 0 === n) return o && "get" in o && void 0 !== (s = o.get(e, !1, i)) ? s : c[t];
                    "string" === (a = typeof n) && (s = ie.exec(n)) && s[1] && (n = ce(e, t, s), a = "number"), null != n && n == n && ("number" !== a || l || (n += s && s[3] || (C.cssNumber[r] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function (e, t, n, i) {
                var s, a, o, r = V(t);
                return Ze.test(t) || (t = Ve(r)), (o = C.cssHooks[t] || C.cssHooks[r]) && "get" in o && (s = o.get(e, !0, n)), void 0 === s && (s = Fe(e, t, i)), "normal" === s && t in Je && (s = Je[t]), "" === n || n ? (a = parseFloat(s), !0 === n || isFinite(a) ? a || 0 : s) : s
            }
        }), C.each(["height", "width"], (function (e, t) {
            C.cssHooks[t] = {
                get: function (e, n, i) {
                    if (n) return !Ue.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, i) : je(e, Ke, (function () {
                        return tt(e, t, i)
                    }))
                }, set: function (e, n, i) {
                    var s, a = qe(e), o = !g.scrollboxSize() && "absolute" === a.position,
                        r = (o || i) && "border-box" === C.css(e, "boxSizing", !1, a), l = i ? et(e, t, i, r, a) : 0;
                    return r && o && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - et(e, t, "border", !1, a) - .5)), l && (s = ie.exec(n)) && "px" !== (s[3] || "px") && (e.style[t] = n, n = C.css(e, t)), Qe(0, n, l)
                }
            }
        })), C.cssHooks.marginLeft = We(g.reliableMarginLeft, (function (e, t) {
            if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - je(e, {marginLeft: 0}, (function () {
                return e.getBoundingClientRect().left
            }))) + "px"
        })), C.each({margin: "", padding: "", border: "Width"}, (function (e, t) {
            C.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, s = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) s[e + se[i] + t] = a[i] || a[i - 2] || a[0];
                    return s
                }
            }, "margin" !== e && (C.cssHooks[e + t].set = Qe)
        })), C.fn.extend({
            css: function (e, t) {
                return W(this, (function (e, t, n) {
                    var i, s, a = {}, o = 0;
                    if (Array.isArray(t)) {
                        for (i = qe(e), s = t.length; o < s; o++) a[t[o]] = C.css(e, t[o], !1, i);
                        return a
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                }), e, t, arguments.length > 1)
            }
        }), C.Tween = nt, nt.prototype = {
            constructor: nt, init: function (e, t, n, i, s, a) {
                this.elem = e, this.prop = n, this.easing = s || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (C.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = nt.propHooks[this.prop];
                return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = nt.propHooks[this.prop];
                return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
            }
        }, nt.prototype.init.prototype = nt.prototype, nt.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                }, set: function (e) {
                    C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, nt.propHooks.scrollTop = nt.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, C.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }, _default: "swing"
        }, C.fx = nt.prototype.init, C.fx.step = {};
        var it, st, at = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;

        function rt() {
            st && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(rt) : n.setTimeout(rt, C.fx.interval), C.fx.tick())
        }

        function lt() {
            return n.setTimeout((function () {
                it = void 0
            })), it = Date.now()
        }

        function ct(e, t) {
            var n, i = 0, s = {height: e};
            for (t = t ? 1 : 0; i < 4; i += 2 - t) s["margin" + (n = se[i])] = s["padding" + n] = e;
            return t && (s.opacity = s.width = e), s
        }

        function dt(e, t, n) {
            for (var i, s = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), a = 0, o = s.length; a < o; a++) if (i = s[a].call(n, t, e)) return i
        }

        function ut(e, t, n) {
            var i, s, a = 0, o = ut.prefilters.length, r = C.Deferred().always((function () {
                delete l.elem
            })), l = function () {
                if (s) return !1;
                for (var t = it || lt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), a = 0, o = c.tweens.length; a < o; a++) c.tweens[a].run(i);
                return r.notifyWith(e, [c, i, n]), i < 1 && o ? n : (o || r.notifyWith(e, [c, 1, 0]), r.resolveWith(e, [c]), !1)
            }, c = r.promise({
                elem: e,
                props: C.extend({}, t),
                opts: C.extend(!0, {specialEasing: {}, easing: C.easing._default}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: it || lt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = C.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0, i = t ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (r.notifyWith(e, [c, 1, 0]), r.resolveWith(e, [c, t])) : r.rejectWith(e, [c, t]), this
                }
            }), d = c.props;
            for (!function (e, t) {
                var n, i, s, a, o;
                for (n in e) if (s = t[i = V(n)], a = e[n], Array.isArray(a) && (s = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), (o = C.cssHooks[i]) && "expand" in o) for (n in a = o.expand(a), delete e[i], a) n in e || (e[n] = a[n], t[n] = s); else t[i] = s
            }(d, c.opts.specialEasing); a < o; a++) if (i = ut.prefilters[a].call(c, e, d, c.opts)) return v(i.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
            return C.map(d, dt, c), v(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c
        }

        C.Animation = C.extend(ut, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return ce(n.elem, e, ie.exec(t), n), n
                }]
            }, tweener: function (e, t) {
                v(e) ? (t = e, e = ["*"]) : e = e.match(N);
                for (var n, i = 0, s = e.length; i < s; i++) n = e[i], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
            }, prefilters: [function (e, t, n) {
                var i, s, a, o, r, l, c, d, u = "width" in t || "height" in t, h = this, p = {}, f = e.style,
                    m = e.nodeType && le(e), g = K.get(e, "fxshow");
                for (i in n.queue || (null == (o = C._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, r = o.empty.fire, o.empty.fire = function () {
                    o.unqueued || r()
                }), o.unqueued++, h.always((function () {
                    h.always((function () {
                        o.unqueued--, C.queue(e, "fx").length || o.empty.fire()
                    }))
                }))), t) if (s = t[i], at.test(s)) {
                    if (delete t[i], a = a || "toggle" === s, s === (m ? "hide" : "show")) {
                        if ("show" !== s || !g || void 0 === g[i]) continue;
                        m = !0
                    }
                    p[i] = g && g[i] || C.style(e, i)
                }
                if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(p)) for (i in u && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = K.get(e, "display")), "none" === (d = C.css(e, "display")) && (c ? d = c : (he([e], !0), c = e.style.display || c, d = C.css(e, "display"), he([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === C.css(e, "float") && (l || (h.done((function () {
                    f.display = c
                })), null == c && (d = f.display, c = "none" === d ? "" : d)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always((function () {
                    f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                }))), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = K.access(e, "fxshow", {display: c}), a && (g.hidden = !m), m && he([e], !0), h.done((function () {
                    for (i in m || he([e]), K.remove(e, "fxshow"), p) C.style(e, i, p[i])
                }))), l = dt(m ? g[i] : 0, i, h), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
            }], prefilter: function (e, t) {
                t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
            }
        }), C.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? C.extend({}, e) : {
                complete: n || !n && t || v(e) && e,
                duration: e,
                easing: n && t || t && !v(t) && t
            };
            return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                v(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
            }, i
        }, C.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(le).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
            }, animate: function (e, t, n, i) {
                var s = C.isEmptyObject(e), a = C.speed(t, n, i), o = function () {
                    var t = ut(this, C.extend({}, e), a);
                    (s || K.get(this, "finish")) && t.stop(!0)
                };
                return o.finish = o, s || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
            }, stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function () {
                    var t = !0, s = null != e && e + "queueHooks", a = C.timers, o = K.get(this);
                    if (s) o[s] && o[s].stop && i(o[s]); else for (s in o) o[s] && o[s].stop && ot.test(s) && i(o[s]);
                    for (s = a.length; s--;) a[s].elem !== this || null != e && a[s].queue !== e || (a[s].anim.stop(n), t = !1, a.splice(s, 1));
                    !t && n || C.dequeue(this, e)
                }))
            }, finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each((function () {
                    var t, n = K.get(this), i = n[e + "queue"], s = n[e + "queueHooks"], a = C.timers,
                        o = i ? i.length : 0;
                    for (n.finish = !0, C.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                    for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                }))
            }
        }), C.each(["toggle", "show", "hide"], (function (e, t) {
            var n = C.fn[t];
            C.fn[t] = function (e, i, s) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, i, s)
            }
        })), C.each({
            slideDown: ct("show"),
            slideUp: ct("hide"),
            slideToggle: ct("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, (function (e, t) {
            C.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        })), C.timers = [], C.fx.tick = function () {
            var e, t = 0, n = C.timers;
            for (it = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || C.fx.stop(), it = void 0
        }, C.fx.timer = function (e) {
            C.timers.push(e), C.fx.start()
        }, C.fx.interval = 13, C.fx.start = function () {
            st || (st = !0, rt())
        }, C.fx.stop = function () {
            st = null
        }, C.fx.speeds = {slow: 600, fast: 200, _default: 400}, C.fn.delay = function (e, t) {
            return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function (t, i) {
                var s = n.setTimeout(t, e);
                i.stop = function () {
                    n.clearTimeout(s)
                }
            }))
        }, function () {
            var e = b.createElement("input"), t = b.createElement("select").appendChild(b.createElement("option"));
            e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", g.radioValue = "t" === e.value
        }();
        var ht, pt = C.expr.attrHandle;
        C.fn.extend({
            attr: function (e, t) {
                return W(this, C.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each((function () {
                    C.removeAttr(this, e)
                }))
            }
        }), C.extend({
            attr: function (e, t, n) {
                var i, s, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === a && C.isXMLDoc(e) || (s = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : s && "set" in s && void 0 !== (i = s.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : s && "get" in s && null !== (i = s.get(e, t)) ? i : null == (i = C.find.attr(e, t)) ? void 0 : i)
            }, attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!g.radioValue && "radio" === t && P(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }, removeAttr: function (e, t) {
                var n, i = 0, s = t && t.match(N);
                if (s && 1 === e.nodeType) for (; n = s[i++];) e.removeAttribute(n)
            }
        }), ht = {
            set: function (e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, C.each(C.expr.match.bool.source.match(/\w+/g), (function (e, t) {
            var n = pt[t] || C.find.attr;
            pt[t] = function (e, t, i) {
                var s, a, o = t.toLowerCase();
                return i || (a = pt[o], pt[o] = s, s = null != n(e, t, i) ? o : null, pt[o] = a), s
            }
        }));
        var ft = /^(?:input|select|textarea|button)$/i, mt = /^(?:a|area)$/i;

        function gt(e) {
            return (e.match(N) || []).join(" ")
        }

        function vt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function yt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(N) || []
        }

        C.fn.extend({
            prop: function (e, t) {
                return W(this, C.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                return this.each((function () {
                    delete this[C.propFix[e] || e]
                }))
            }
        }), C.extend({
            prop: function (e, t, n) {
                var i, s, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return 1 === a && C.isXMLDoc(e) || (t = C.propFix[t] || t, s = C.propHooks[t]), void 0 !== n ? s && "set" in s && void 0 !== (i = s.set(e, n, t)) ? i : e[t] = n : s && "get" in s && null !== (i = s.get(e, t)) ? i : e[t]
            }, propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = C.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ft.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), g.optSelected || (C.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }, set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
            C.propFix[this.toLowerCase()] = this
        })), C.fn.extend({
            addClass: function (e) {
                var t, n, i, s, a, o, r, l = 0;
                if (v(e)) return this.each((function (t) {
                    C(this).addClass(e.call(this, t, vt(this)))
                }));
                if ((t = yt(e)).length) for (; n = this[l++];) if (s = vt(n), i = 1 === n.nodeType && " " + gt(s) + " ") {
                    for (o = 0; a = t[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                    s !== (r = gt(i)) && n.setAttribute("class", r)
                }
                return this
            }, removeClass: function (e) {
                var t, n, i, s, a, o, r, l = 0;
                if (v(e)) return this.each((function (t) {
                    C(this).removeClass(e.call(this, t, vt(this)))
                }));
                if (!arguments.length) return this.attr("class", "");
                if ((t = yt(e)).length) for (; n = this[l++];) if (s = vt(n), i = 1 === n.nodeType && " " + gt(s) + " ") {
                    for (o = 0; a = t[o++];) for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
                    s !== (r = gt(i)) && n.setAttribute("class", r)
                }
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e, i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each((function (n) {
                    C(this).toggleClass(e.call(this, n, vt(this), t), t)
                })) : this.each((function () {
                    var t, s, a, o;
                    if (i) for (s = 0, a = C(this), o = yt(e); t = o[s++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t); else void 0 !== e && "boolean" !== n || ((t = vt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
                }))
            }, hasClass: function (e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + gt(vt(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var bt = /\r/g;
        C.fn.extend({
            val: function (e) {
                var t, n, i, s = this[0];
                return arguments.length ? (i = v(e), this.each((function (n) {
                    var s;
                    1 === this.nodeType && (null == (s = i ? e.call(this, n, C(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = C.map(s, (function (e) {
                        return null == e ? "" : e + ""
                    }))), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
                }))) : s ? (t = C.valHooks[s.type] || C.valHooks[s.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(s, "value")) ? n : "string" == typeof (n = s.value) ? n.replace(bt, "") : null == n ? "" : n : void 0
            }
        }), C.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = C.find.attr(e, "value");
                        return null != t ? t : gt(C.text(e))
                    }
                }, select: {
                    get: function (e) {
                        var t, n, i, s = e.options, a = e.selectedIndex, o = "select-one" === e.type, r = o ? null : [],
                            l = o ? a + 1 : s.length;
                        for (i = a < 0 ? l : o ? a : 0; i < l; i++) if (((n = s[i]).selected || i === a) && !n.disabled && (!n.parentNode.disabled || !P(n.parentNode, "optgroup"))) {
                            if (t = C(n).val(), o) return t;
                            r.push(t)
                        }
                        return r
                    }, set: function (e, t) {
                        for (var n, i, s = e.options, a = C.makeArray(t), o = s.length; o--;) ((i = s[o]).selected = C.inArray(C.valHooks.option.get(i), a) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), a
                    }
                }
            }
        }), C.each(["radio", "checkbox"], (function () {
            C.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1
                }
            }, g.checkOn || (C.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        })), g.focusin = "onfocusin" in n;
        var wt = /^(?:focusinfocus|focusoutblur)$/, xt = function (e) {
            e.stopPropagation()
        };
        C.extend(C.event, {
            trigger: function (e, t, i, s) {
                var a, o, r, l, c, d, u, h, f = [i || b], m = p.call(e, "type") ? e.type : e,
                    g = p.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = h = r = i = i || b, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + C.event.triggered) && (m.indexOf(".") > -1 && (g = m.split("."), m = g.shift(), g.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[C.expando] ? e : new C.Event(m, "object" == typeof e && e)).isTrigger = s ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : C.makeArray(t, [e]), u = C.event.special[m] || {}, s || !u.trigger || !1 !== u.trigger.apply(i, t))) {
                    if (!s && !u.noBubble && !y(i)) {
                        for (l = u.delegateType || m, wt.test(l + m) || (o = o.parentNode); o; o = o.parentNode) f.push(o), r = o;
                        r === (i.ownerDocument || b) && f.push(r.defaultView || r.parentWindow || n)
                    }
                    for (a = 0; (o = f[a++]) && !e.isPropagationStopped();) h = o, e.type = a > 1 ? l : u.bindType || m, (d = (K.get(o, "events") || Object.create(null))[e.type] && K.get(o, "handle")) && d.apply(o, t), (d = c && o[c]) && d.apply && U(o) && (e.result = d.apply(o, t), !1 === e.result && e.preventDefault());
                    return e.type = m, s || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(f.pop(), t) || !U(i) || c && v(i[m]) && !y(i) && ((r = i[c]) && (i[c] = null), C.event.triggered = m, e.isPropagationStopped() && h.addEventListener(m, xt), i[m](), e.isPropagationStopped() && h.removeEventListener(m, xt), C.event.triggered = void 0, r && (i[c] = r)), e.result
                }
            }, simulate: function (e, t, n) {
                var i = C.extend(new C.Event, n, {type: e, isSimulated: !0});
                C.event.trigger(i, null, t)
            }
        }), C.fn.extend({
            trigger: function (e, t) {
                return this.each((function () {
                    C.event.trigger(e, t, this)
                }))
            }, triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0)
            }
        }), g.focusin || C.each({focus: "focusin", blur: "focusout"}, (function (e, t) {
            var n = function (e) {
                C.event.simulate(t, e.target, C.event.fix(e))
            };
            C.event.special[t] = {
                setup: function () {
                    var i = this.ownerDocument || this.document || this, s = K.access(i, t);
                    s || i.addEventListener(e, n, !0), K.access(i, t, (s || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this.document || this, s = K.access(i, t) - 1;
                    s ? K.access(i, t, s) : (i.removeEventListener(e, n, !0), K.remove(i, t))
                }
            }
        }));
        var Et = n.location, Ct = {guid: Date.now()}, St = /\?/;
        C.parseXML = function (e) {
            var t, i;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
            }
            return i = t && t.getElementsByTagName("parsererror")[0], t && !i || C.error("Invalid XML: " + (i ? C.map(i.childNodes, (function (e) {
                return e.textContent
            })).join("\n") : e)), t
        };
        var Tt = /\[\]$/, $t = /\r?\n/g, Mt = /^(?:submit|button|image|reset|file)$/i,
            kt = /^(?:input|select|textarea|keygen)/i;

        function Pt(e, t, n, i) {
            var s;
            if (Array.isArray(t)) C.each(t, (function (t, s) {
                n || Tt.test(e) ? i(e, s) : Pt(e + "[" + ("object" == typeof s && null != s ? t : "") + "]", s, n, i)
            })); else if (n || "object" !== E(t)) i(e, t); else for (s in t) Pt(e + "[" + s + "]", t[s], n, i)
        }

        C.param = function (e, t) {
            var n, i = [], s = function (e, t) {
                var n = v(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, (function () {
                s(this.name, this.value)
            })); else for (n in e) Pt(n, e[n], t, s);
            return i.join("&")
        }, C.fn.extend({
            serialize: function () {
                return C.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map((function () {
                    var e = C.prop(this, "elements");
                    return e ? C.makeArray(e) : this
                })).filter((function () {
                    var e = this.type;
                    return this.name && !C(this).is(":disabled") && kt.test(this.nodeName) && !Mt.test(e) && (this.checked || !me.test(e))
                })).map((function (e, t) {
                    var n = C(this).val();
                    return null == n ? null : Array.isArray(n) ? C.map(n, (function (e) {
                        return {name: t.name, value: e.replace($t, "\r\n")}
                    })) : {name: t.name, value: n.replace($t, "\r\n")}
                })).get()
            }
        });
        var Lt = /%20/g, At = /#.*$/, Ot = /([?&])_=[^&]*/, _t = /^(.*?):[ \t]*([^\r\n]*)$/gm, zt = /^(?:GET|HEAD)$/,
            It = /^\/\//, Dt = {}, Nt = {}, Ht = "*/".concat("*"), Rt = b.createElement("a");

        function qt(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, s = 0, a = t.toLowerCase().match(N) || [];
                if (v(n)) for (; i = a[s++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function jt(e, t, n, i) {
            var s = {}, a = e === Nt;

            function o(r) {
                var l;
                return s[r] = !0, C.each(e[r] || [], (function (e, r) {
                    var c = r(t, n, i);
                    return "string" != typeof c || a || s[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
                })), l
            }

            return o(t.dataTypes[0]) || !s["*"] && o("*")
        }

        function Bt(e, t) {
            var n, i, s = C.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((s[n] ? e : i || (i = {}))[n] = t[n]);
            return i && C.extend(!0, e, i), e
        }

        Rt.href = Et.href, C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Et.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ht,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": C.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (e, t) {
                return t ? Bt(Bt(e, C.ajaxSettings), t) : Bt(C.ajaxSettings, e)
            },
            ajaxPrefilter: qt(Dt),
            ajaxTransport: qt(Nt),
            ajax: function (e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, s, a, o, r, l, c, d, u, h, p = C.ajaxSetup({}, t), f = p.context || p,
                    m = p.context && (f.nodeType || f.jquery) ? C(f) : C.event, g = C.Deferred(),
                    v = C.Callbacks("once memory"), y = p.statusCode || {}, w = {}, x = {}, E = "canceled", S = {
                        readyState: 0, getResponseHeader: function (e) {
                            var t;
                            if (c) {
                                if (!o) for (o = {}; t = _t.exec(a);) o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = o[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        }, getAllResponseHeaders: function () {
                            return c ? a : null
                        }, setRequestHeader: function (e, t) {
                            return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
                        }, overrideMimeType: function (e) {
                            return null == c && (p.mimeType = e), this
                        }, statusCode: function (e) {
                            var t;
                            if (e) if (c) S.always(e[S.status]); else for (t in e) y[t] = [y[t], e[t]];
                            return this
                        }, abort: function (e) {
                            var t = e || E;
                            return i && i.abort(t), T(0, t), this
                        }
                    };
                if (g.promise(S), p.url = ((e || p.url || Et.href) + "").replace(It, Et.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(N) || [""], null == p.crossDomain) {
                    l = b.createElement("a");
                    try {
                        l.href = p.url, l.href = l.href, p.crossDomain = Rt.protocol + "//" + Rt.host != l.protocol + "//" + l.host
                    } catch (e) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)), jt(Dt, p, t, S), c) return S;
                for (u in (d = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !zt.test(p.type), s = p.url.replace(At, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Lt, "+")) : (h = p.url.slice(s.length), p.data && (p.processData || "string" == typeof p.data) && (s += (St.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (s = s.replace(Ot, "$1"), h = (St.test(s) ? "&" : "?") + "_=" + Ct.guid++ + h), p.url = s + h), p.ifModified && (C.lastModified[s] && S.setRequestHeader("If-Modified-Since", C.lastModified[s]), C.etag[s] && S.setRequestHeader("If-None-Match", C.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && S.setRequestHeader("Content-Type", p.contentType), S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : p.accepts["*"]), p.headers) S.setRequestHeader(u, p.headers[u]);
                if (p.beforeSend && (!1 === p.beforeSend.call(f, S, p) || c)) return S.abort();
                if (E = "abort", v.add(p.complete), S.done(p.success), S.fail(p.error), i = jt(Nt, p, t, S)) {
                    if (S.readyState = 1, d && m.trigger("ajaxSend", [S, p]), c) return S;
                    p.async && p.timeout > 0 && (r = n.setTimeout((function () {
                        S.abort("timeout")
                    }), p.timeout));
                    try {
                        c = !1, i.send(w, T)
                    } catch (e) {
                        if (c) throw e;
                        T(-1, e)
                    }
                } else T(-1, "No Transport");

                function T(e, t, o, l) {
                    var u, h, b, w, x, E = t;
                    c || (c = !0, r && n.clearTimeout(r), i = void 0, a = l || "", S.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, o && (w = function (e, t, n) {
                        for (var i, s, a, o, r = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (i) for (s in r) if (r[s] && r[s].test(i)) {
                            l.unshift(s);
                            break
                        }
                        if (l[0] in n) a = l[0]; else {
                            for (s in n) {
                                if (!l[0] || e.converters[s + " " + l[0]]) {
                                    a = s;
                                    break
                                }
                                o || (o = s)
                            }
                            a = a || o
                        }
                        if (a) return a !== l[0] && l.unshift(a), n[a]
                    }(p, S, o)), !u && C.inArray("script", p.dataTypes) > -1 && C.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function () {
                    }), w = function (e, t, n, i) {
                        var s, a, o, r, l, c = {}, d = e.dataTypes.slice();
                        if (d[1]) for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
                        for (a = d.shift(); a;) if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = d.shift()) if ("*" === a) a = l; else if ("*" !== l && l !== a) {
                            if (!(o = c[l + " " + a] || c["* " + a])) for (s in c) if ((r = s.split(" "))[1] === a && (o = c[l + " " + r[0]] || c["* " + r[0]])) {
                                !0 === o ? o = c[s] : !0 !== c[s] && (a = r[0], d.unshift(r[1]));
                                break
                            }
                            if (!0 !== o) if (o && e.throws) t = o(t); else try {
                                t = o(t)
                            } catch (e) {
                                return {state: "parsererror", error: o ? e : "No conversion from " + l + " to " + a}
                            }
                        }
                        return {state: "success", data: t}
                    }(p, w, S, u), u ? (p.ifModified && ((x = S.getResponseHeader("Last-Modified")) && (C.lastModified[s] = x), (x = S.getResponseHeader("etag")) && (C.etag[s] = x)), 204 === e || "HEAD" === p.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = w.state, h = w.data, u = !(b = w.error))) : (b = E, !e && E || (E = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || E) + "", u ? g.resolveWith(f, [h, E, S]) : g.rejectWith(f, [S, E, b]), S.statusCode(y), y = void 0, d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [S, p, u ? h : b]), v.fireWith(f, [S, E]), d && (m.trigger("ajaxComplete", [S, p]), --C.active || C.event.trigger("ajaxStop")))
                }

                return S
            },
            getJSON: function (e, t, n) {
                return C.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return C.get(e, void 0, t, "script")
            }
        }), C.each(["get", "post"], (function (e, t) {
            C[t] = function (e, n, i, s) {
                return v(n) && (s = s || i, i = n, n = void 0), C.ajax(C.extend({
                    url: e,
                    type: t,
                    dataType: s,
                    data: n,
                    success: i
                }, C.isPlainObject(e) && e))
            }
        })), C.ajaxPrefilter((function (e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        })), C._evalUrl = function (e, t, n) {
            return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () {
                    }
                },
                dataFilter: function (e) {
                    C.globalEval(e, t, n)
                }
            })
        }, C.fn.extend({
            wrapAll: function (e) {
                var t;
                return this[0] && (v(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                })).append(this)), this
            }, wrapInner: function (e) {
                return v(e) ? this.each((function (t) {
                    C(this).wrapInner(e.call(this, t))
                })) : this.each((function () {
                    var t = C(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                }))
            }, wrap: function (e) {
                var t = v(e);
                return this.each((function (n) {
                    C(this).wrapAll(t ? e.call(this, n) : e)
                }))
            }, unwrap: function (e) {
                return this.parent(e).not("body").each((function () {
                    C(this).replaceWith(this.childNodes)
                })), this
            }
        }), C.expr.pseudos.hidden = function (e) {
            return !C.expr.pseudos.visible(e)
        }, C.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, C.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (e) {
            }
        };
        var Ft = {0: 200, 1223: 204}, Wt = C.ajaxSettings.xhr();
        g.cors = !!Wt && "withCredentials" in Wt, g.ajax = Wt = !!Wt, C.ajaxTransport((function (e) {
            var t, i;
            if (g.cors || Wt && !e.crossDomain) return {
                send: function (s, a) {
                    var o, r = e.xhr();
                    if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) r[o] = e.xhrFields[o];
                    for (o in e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) r.setRequestHeader(o, s[o]);
                    t = function (e) {
                        return function () {
                            t && (t = i = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? a(0, "error") : a(r.status, r.statusText) : a(Ft[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {binary: r.response} : {text: r.responseText}, r.getAllResponseHeaders()))
                        }
                    }, r.onload = t(), i = r.onerror = r.ontimeout = t("error"), void 0 !== r.onabort ? r.onabort = i : r.onreadystatechange = function () {
                        4 === r.readyState && n.setTimeout((function () {
                            t && i()
                        }))
                    }, t = t("abort");
                    try {
                        r.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                }, abort: function () {
                    t && t()
                }
            }
        })), C.ajaxPrefilter((function (e) {
            e.crossDomain && (e.contents.script = !1)
        })), C.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (e) {
                    return C.globalEval(e), e
                }
            }
        }), C.ajaxPrefilter("script", (function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        })), C.ajaxTransport("script", (function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs) return {
                send: function (i, s) {
                    t = C("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && s("error" === e.type ? 404 : 200, e.type)
                    }), b.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }));
        var Xt, Gt = [], Yt = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = Gt.pop() || C.expando + "_" + Ct.guid++;
                return this[e] = !0, e
            }
        }), C.ajaxPrefilter("json jsonp", (function (e, t, i) {
            var s, a, o,
                r = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
            if (r || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(Yt, "$1" + s) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
                return o || C.error(s + " was not called"), o[0]
            }, e.dataTypes[0] = "json", a = n[s], n[s] = function () {
                o = arguments
            }, i.always((function () {
                void 0 === a ? C(n).removeProp(s) : n[s] = a, e[s] && (e.jsonpCallback = t.jsonpCallback, Gt.push(s)), o && v(a) && a(o[0]), o = a = void 0
            })), "script"
        })), g.createHTMLDocument = ((Xt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xt.childNodes.length), C.parseHTML = function (e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((i = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(i)) : t = b), a = !n && [], (s = L.exec(e)) ? [t.createElement(s[1])] : (s = Ee([e], t, a), a && a.length && C(a).remove(), C.merge([], s.childNodes)));
            var i, s, a
        }, C.fn.load = function (e, t, n) {
            var i, s, a, o = this, r = e.indexOf(" ");
            return r > -1 && (i = gt(e.slice(r)), e = e.slice(0, r)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (s = "POST"), o.length > 0 && C.ajax({
                url: e,
                type: s || "GET",
                dataType: "html",
                data: t
            }).done((function (e) {
                a = arguments, o.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
            })).always(n && function (e, t) {
                o.each((function () {
                    n.apply(this, a || [e.responseText, t, e])
                }))
            }), this
        }, C.expr.pseudos.animated = function (e) {
            return C.grep(C.timers, (function (t) {
                return e === t.elem
            })).length
        }, C.offset = {
            setOffset: function (e, t, n) {
                var i, s, a, o, r, l, c = C.css(e, "position"), d = C(e), u = {};
                "static" === c && (e.style.position = "relative"), r = d.offset(), a = C.css(e, "top"), l = C.css(e, "left"), ("absolute" === c || "fixed" === c) && (a + l).indexOf("auto") > -1 ? (o = (i = d.position()).top, s = i.left) : (o = parseFloat(a) || 0, s = parseFloat(l) || 0), v(t) && (t = t.call(e, n, C.extend({}, r))), null != t.top && (u.top = t.top - r.top + o), null != t.left && (u.left = t.left - r.left + s), "using" in t ? t.using.call(e, u) : d.css(u)
            }
        }, C.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each((function (t) {
                    C.offset.setOffset(this, e, t)
                }));
                var t, n, i = this[0];
                return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {top: 0, left: 0} : void 0
            }, position: function () {
                if (this[0]) {
                    var e, t, n, i = this[0], s = {top: 0, left: 0};
                    if ("fixed" === C.css(i, "position")) t = i.getBoundingClientRect(); else {
                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && ((s = C(e).offset()).top += C.css(e, "borderTopWidth", !0), s.left += C.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - s.top - C.css(i, "marginTop", !0),
                        left: t.left - s.left - C.css(i, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map((function () {
                    for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                    return e || ae
                }))
            }
        }), C.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, (function (e, t) {
            var n = "pageYOffset" === t;
            C.fn[e] = function (i) {
                return W(this, (function (e, i, s) {
                    var a;
                    if (y(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === s) return a ? a[t] : e[i];
                    a ? a.scrollTo(n ? a.pageXOffset : s, n ? s : a.pageYOffset) : e[i] = s
                }), e, i, arguments.length)
            }
        })), C.each(["top", "left"], (function (e, t) {
            C.cssHooks[t] = We(g.pixelPosition, (function (e, n) {
                if (n) return n = Fe(e, t), Re.test(n) ? C(e).position()[t] + "px" : n
            }))
        })), C.each({Height: "height", Width: "width"}, (function (e, t) {
            C.each({padding: "inner" + e, content: t, "": "outer" + e}, (function (n, i) {
                C.fn[i] = function (s, a) {
                    var o = arguments.length && (n || "boolean" != typeof s),
                        r = n || (!0 === s || !0 === a ? "margin" : "border");
                    return W(this, (function (t, n, s) {
                        var a;
                        return y(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === s ? C.css(t, n, r) : C.style(t, n, s, r)
                    }), t, o ? s : void 0, o)
                }
            }))
        })), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
            C.fn[t] = function (e) {
                return this.on(t, e)
            }
        })), C.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            }, undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }, hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
            C.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }));
        var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        C.proxy = function (e, t) {
            var n, i, s;
            if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return i = r.call(arguments, 2), (s = function () {
                return e.apply(t || this, i.concat(r.call(arguments)))
            }).guid = e.guid = e.guid || C.guid++, s
        }, C.holdReady = function (e) {
            e ? C.readyWait++ : C.ready(!0)
        }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = P, C.isFunction = v, C.isWindow = y, C.camelCase = V, C.type = E, C.now = Date.now, C.isNumeric = function (e) {
            var t = C.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, C.trim = function (e) {
            return null == e ? "" : (e + "").replace(Vt, "")
        }, void 0 === (i = function () {
            return C
        }.apply(t, [])) || (e.exports = i);
        var Ut = n.jQuery, Zt = n.$;
        return C.noConflict = function (e) {
            return n.$ === C && (n.$ = Zt), e && n.jQuery === C && (n.jQuery = Ut), C
        }, void 0 === s && (n.jQuery = n.$ = C), C
    }))
},
    function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
        return "ontouchstart" in window || navigator.maxTouchPoints
    }
},
    function (e, t, n) {
    e.exports = function () {
        "use strict";

        function e() {
            return (e = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }).apply(this, arguments)
        }
console.log('qweqwe');
        var t = "undefined" != typeof window,
            n = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
            i = t && "IntersectionObserver" in window, s = t && "classList" in document.createElement("p"),
            a = t && window.devicePixelRatio > 1, o = {
                elements_selector: ".lazy",
                container: n || t ? document : null,
                threshold: 300,
                thresholds: null,
                data_src: "src",
                data_srcset: "srcset",
                data_sizes: "sizes",
                data_bg: "bg",
                data_bg_hidpi: "bg-hidpi",
                data_bg_multi: "bg-multi",
                data_bg_multi_hidpi: "bg-multi-hidpi",
                data_bg_set: "bg-set",
                data_poster: "poster",
                class_applied: "applied",
                class_loading: "loading",
                class_loaded: "loaded",
                class_error: "error",
                class_entered: "entered",
                class_exited: "exited",
                unobserve_completed: !0,
                unobserve_entered: !1,
                cancel_on_exit: !0,
                callback_enter: null,
                callback_exit: null,
                callback_applied: null,
                callback_loading: null,
                callback_loaded: null,
                callback_error: null,
                callback_finish: null,
                callback_cancel: null,
                use_native: !1,
                restore_on_error: !1
            }, r = function (t) {
                return e({}, o, t)
            }, l = function (e, t) {
                var n, i = "LazyLoad::Initialized", s = new e(t);
                try {
                    n = new CustomEvent(i, {detail: {instance: s}})
                } catch (e) {
                    (n = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {instance: s})
                }
                window.dispatchEvent(n)
            }, c = "src", d = "srcset", u = "sizes", h = "poster", p = "llOriginalAttrs", f = "data", m = "loading",
            g = "loaded", v = "applied", y = "error", b = "native", w = function (e, t) {
                return e.getAttribute("data-" + t)
            }, x = function (e) {
                return w(e, "ll-status")
            }, E = function (e, t) {
                return function (e, t, n) {
                    var i = "data-ll-status";
                    null !== n ? e.setAttribute(i, n) : e.removeAttribute(i)
                }(e, 0, t)
            }, C = function (e) {
                return E(e, null)
            }, S = function (e) {
                return null === x(e)
            }, T = function (e) {
                return x(e) === b
            }, $ = [m, g, v, y], M = function (e, t, n, i) {
                e && (void 0 === i ? void 0 === n ? e(t) : e(t, n) : e(t, n, i))
            }, k = function (e, t) {
                s ? e.classList.add(t) : e.className += (e.className ? " " : "") + t
            }, P = function (e, t) {
                s ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
            }, L = function (e) {
                return e.llTempImage
            }, A = function (e, t) {
                if (t) {
                    var n = t._observer;
                    n && n.unobserve(e)
                }
            }, O = function (e, t) {
                e && (e.loadingCount += t)
            }, _ = function (e, t) {
                e && (e.toLoadCount = t)
            }, z = function (e) {
                for (var t, n = [], i = 0; t = e.children[i]; i += 1) "SOURCE" === t.tagName && n.push(t);
                return n
            }, I = function (e, t) {
                var n = e.parentNode;
                n && "PICTURE" === n.tagName && z(n).forEach(t)
            }, D = function (e, t) {
                z(e).forEach(t)
            }, N = [c], H = [c, h], R = [c, d, u], q = [f], j = function (e) {
                return !!e[p]
            }, B = function (e) {
                return e[p]
            }, F = function (e) {
                return delete e[p]
            }, W = function (e, t) {
                if (!j(e)) {
                    var n = {};
                    t.forEach((function (t) {
                        n[t] = e.getAttribute(t)
                    })), e[p] = n
                }
            }, X = function (e, t) {
                if (j(e)) {
                    var n = B(e);
                    t.forEach((function (t) {
                        !function (e, t, n) {
                            n ? e.setAttribute(t, n) : e.removeAttribute(t)
                        }(e, t, n[t])
                    }))
                }
            }, G = function (e, t, n) {
                k(e, t.class_applied), E(e, v), n && (t.unobserve_completed && A(e, t), M(t.callback_applied, e, n))
            }, Y = function (e, t, n) {
                k(e, t.class_loading), E(e, m), n && (O(n, 1), M(t.callback_loading, e, n))
            }, V = function (e, t, n) {
                n && e.setAttribute(t, n)
            }, U = function (e, t) {
                V(e, u, w(e, t.data_sizes)), V(e, d, w(e, t.data_srcset)), V(e, c, w(e, t.data_src))
            }, Z = {
                IMG: function (e, t) {
                    I(e, (function (e) {
                        W(e, R), U(e, t)
                    })), W(e, R), U(e, t)
                }, IFRAME: function (e, t) {
                    W(e, N), V(e, c, w(e, t.data_src))
                }, VIDEO: function (e, t) {
                    D(e, (function (e) {
                        W(e, N), V(e, c, w(e, t.data_src))
                    })), W(e, H), V(e, h, w(e, t.data_poster)), V(e, c, w(e, t.data_src)), e.load()
                }, OBJECT: function (e, t) {
                    W(e, q), V(e, f, w(e, t.data_src))
                }
            }, K = ["IMG", "IFRAME", "VIDEO", "OBJECT"], J = function (e, t) {
                !t || function (e) {
                    return e.loadingCount > 0
                }(t) || function (e) {
                    return e.toLoadCount > 0
                }(t) || M(e.callback_finish, t)
            }, Q = function (e, t, n) {
                e.addEventListener(t, n), e.llEvLisnrs[t] = n
            }, ee = function (e, t, n) {
                e.removeEventListener(t, n)
            }, te = function (e) {
                return !!e.llEvLisnrs
            }, ne = function (e) {
                if (te(e)) {
                    var t = e.llEvLisnrs;
                    for (var n in t) {
                        var i = t[n];
                        ee(e, n, i)
                    }
                    delete e.llEvLisnrs
                }
            }, ie = function (e, t, n) {
                !function (e) {
                    delete e.llTempImage
                }(e), O(n, -1), function (e) {
                    e && (e.toLoadCount -= 1)
                }(n), P(e, t.class_loading), t.unobserve_completed && A(e, n)
            }, se = function (e, t, n) {
                var i = L(e) || e;
                te(i) || function (e, t, n) {
                    te(e) || (e.llEvLisnrs = {});
                    var i = "VIDEO" === e.tagName ? "loadeddata" : "load";
                    Q(e, i, t), Q(e, "error", n)
                }(i, (function (s) {
                    !function (e, t, n, i) {
                        var s = T(t);
                        ie(t, n, i), k(t, n.class_loaded), E(t, g), M(n.callback_loaded, t, i), s || J(n, i)
                    }(0, e, t, n), ne(i)
                }), (function (s) {
                    !function (e, t, n, i) {
                        var s = T(t);
                        ie(t, n, i), k(t, n.class_error), E(t, y), M(n.callback_error, t, i), n.restore_on_error && X(t, R), s || J(n, i)
                    }(0, e, t, n), ne(i)
                }))
            }, ae = function (e, t, n) {
                !function (e) {
                    return K.indexOf(e.tagName) > -1
                }(e) ? function (e, t, n) {
                    !function (e) {
                        e.llTempImage = document.createElement("IMG")
                    }(e), se(e, t, n), function (e) {
                        j(e) || (e[p] = {backgroundImage: e.style.backgroundImage})
                    }(e), function (e, t, n) {
                        var i = w(e, t.data_bg), s = w(e, t.data_bg_hidpi), o = a && s ? s : i;
                        o && (e.style.backgroundImage = 'url("'.concat(o, '")'), L(e).setAttribute(c, o), Y(e, t, n))
                    }(e, t, n), function (e, t, n) {
                        var i = w(e, t.data_bg_multi), s = w(e, t.data_bg_multi_hidpi), o = a && s ? s : i;
                        o && (e.style.backgroundImage = o, G(e, t, n))
                    }(e, t, n), function (e, t, n) {
                        var i = w(e, t.data_bg_set);
                        if (i) {
                            var s = i.split("|"), a = s.map((function (e) {
                                return "image-set(".concat(e, ")")
                            }));
                            e.style.backgroundImage = a.join(), "" === e.style.backgroundImage && (a = s.map((function (e) {
                                return "-webkit-image-set(".concat(e, ")")
                            })), e.style.backgroundImage = a.join()), G(e, t, n)
                        }
                    }(e, t, n)
                }(e, t, n) : function (e, t, n) {
                    se(e, t, n), function (e, t, n) {
                        var i = Z[e.tagName];
                        i && (i(e, t), Y(e, t, n))
                    }(e, t, n)
                }(e, t, n)
            }, oe = function (e) {
                e.removeAttribute(c), e.removeAttribute(d), e.removeAttribute(u)
            }, re = function (e) {
                I(e, (function (e) {
                    X(e, R)
                })), X(e, R)
            }, le = {
                IMG: re, IFRAME: function (e) {
                    X(e, N)
                }, VIDEO: function (e) {
                    D(e, (function (e) {
                        X(e, N)
                    })), X(e, H), e.load()
                }, OBJECT: function (e) {
                    X(e, q)
                }
            }, ce = ["IMG", "IFRAME", "VIDEO"], de = function (e) {
                return e.use_native && "loading" in HTMLImageElement.prototype
            }, ue = function (e) {
                return Array.prototype.slice.call(e)
            }, he = function (e) {
                return e.container.querySelectorAll(e.elements_selector)
            }, pe = function (e) {
                return function (e) {
                    return x(e) === y
                }(e)
            }, fe = function (e, t) {
                return function (e) {
                    return ue(e).filter(S)
                }(e || he(t))
            }, me = function (e, n) {
                var s = r(e);
                this._settings = s, this.loadingCount = 0, function (e, t) {
                    i && !de(e) && (t._observer = new IntersectionObserver((function (n) {
                        !function (e, t, n) {
                            e.forEach((function (e) {
                                return function (e) {
                                    return e.isIntersecting || e.intersectionRatio > 0
                                }(e) ? function (e, t, n, i) {
                                    var s = function (e) {
                                        return $.indexOf(x(e)) >= 0
                                    }(e);
                                    E(e, "entered"), k(e, n.class_entered), P(e, n.class_exited), function (e, t, n) {
                                        t.unobserve_entered && A(e, n)
                                    }(e, n, i), M(n.callback_enter, e, t, i), s || ae(e, n, i)
                                }(e.target, e, t, n) : function (e, t, n, i) {
                                    S(e) || (k(e, n.class_exited), function (e, t, n, i) {
                                        n.cancel_on_exit && function (e) {
                                            return x(e) === m
                                        }(e) && "IMG" === e.tagName && (ne(e), function (e) {
                                            I(e, (function (e) {
                                                oe(e)
                                            })), oe(e)
                                        }(e), re(e), P(e, n.class_loading), O(i, -1), C(e), M(n.callback_cancel, e, t, i))
                                    }(e, t, n, i), M(n.callback_exit, e, t, i))
                                }(e.target, e, t, n)
                            }))
                        }(n, e, t)
                    }), function (e) {
                        return {
                            root: e.container === document ? null : e.container,
                            rootMargin: e.thresholds || e.threshold + "px"
                        }
                    }(e)))
                }(s, this), function (e, n) {
                    t && (n._onlineHandler = function () {
                        !function (e, t) {
                            var n;
                            (n = he(e), ue(n).filter(pe)).forEach((function (t) {
                                P(t, e.class_error), C(t)
                            })), t.update()
                        }(e, n)
                    }, window.addEventListener("online", n._onlineHandler))
                }(s, this), this.update(n)
            };
        return me.prototype = {
            update: function (e) {
                var t, s, a = this._settings, o = fe(e, a);
                _(this, o.length), !n && i ? de(a) ? function (e, t, n) {
                    e.forEach((function (e) {
                        -1 !== ce.indexOf(e.tagName) && function (e, t, n) {
                            e.setAttribute("loading", "lazy"), se(e, t, n), function (e, t) {
                                var n = Z[e.tagName];
                                n && n(e, t)
                            }(e, t), E(e, b)
                        }(e, t, n)
                    })), _(n, 0)
                }(o, a, this) : (s = o, function (e) {
                    e.disconnect()
                }(t = this._observer), function (e, t) {
                    t.forEach((function (t) {
                        e.observe(t)
                    }))
                }(t, s)) : this.loadAll(o)
            }, destroy: function () {
                this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), he(this._settings).forEach((function (e) {
                    F(e)
                })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount
            }, loadAll: function (e) {
                var t = this, n = this._settings;
                fe(e, n).forEach((function (e) {
                    A(e, t), ae(e, n, t)
                }))
            }, restoreAll: function () {
                var e = this._settings;
                he(e).forEach((function (t) {
                    !function (e, t) {
                        (function (e) {
                            var t = le[e.tagName];
                            t ? t(e) : function (e) {
                                if (j(e)) {
                                    var t = B(e);
                                    e.style.backgroundImage = t.backgroundImage
                                }
                            }(e)
                        })(e), function (e, t) {
                            S(e) || T(e) || (P(e, t.class_entered), P(e, t.class_exited), P(e, t.class_applied), P(e, t.class_loading), P(e, t.class_loaded), P(e, t.class_error))
                        }(e, t), C(e), F(e)
                    }(t, e)
                }))
            }
        }, me.load = function (e, t) {
            var n = r(t);
            ae(e, n)
        }, me.resetStatus = function (e) {
            C(e)
        }, t && function (e, t) {
            if (t) if (t.length) for (var n, i = 0; n = t[i]; i += 1) l(e, n); else l(e, t)
        }(me, window.lazyLoadOptions), me
    }()
},
    function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.isMobile = t.isLocalhost = t.withBreakpoint = t.mediaBreakpoints = t.Breakpoints = t.getDevicePixelRatio = t.isTouch = t.$header = t.$body = t.$document = void 0;
    var i, s = n(1), a = (i = s) && i.__esModule ? i : {default: i};
    t.$document = $(document), t.$body = $("body"), t.$header = $(".header"), t.isTouch = (0, a.default)(), t.getDevicePixelRatio = window.devicePixelRatio;
    var o = t.Breakpoints = {XL: 1640, LG: 1279, MD: 1023, SM: 767, XS: 575, XXS: 449};
    t.mediaBreakpoints = {
        XL: window.matchMedia("(max-width: " + o.XL + "px)"),
        LG: window.matchMedia("(max-width: " + o.LG + "px)"),
        MD: window.matchMedia("(max-width: " + o.MD + "px)"),
        SM: window.matchMedia("(max-width: " + o.SM + "px)"),
        XS: window.matchMedia("(max-width: " + o.XS + "px)"),
        XXS: window.matchMedia("(max-width: " + o.XXS + "px)")
    }, t.withBreakpoint = function (e, t) {
        var n = window.matchMedia("(max-width: " + t + "px)");
        e(n), n.addListener(e)
    }, t.isLocalhost = "localhost" === window.location.hostname, t.isMobile = function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)
    }
},
    function (e, t, n) {
    "use strict";

    function i(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function s(e = {}, t = {}) {
        Object.keys(t).forEach(n => {
            void 0 === e[n] ? e[n] = t[n] : i(t[n]) && i(e[n]) && Object.keys(t[n]).length > 0 && s(e[n], t[n])
        })
    }

    n.r(t), n.d(t, "Swiper", (function () {
        return G
    })), n.d(t, "default", (function () {
        return G
    })), n.d(t, "Virtual", (function () {
        return Y
    })), n.d(t, "Keyboard", (function () {
        return V
    })), n.d(t, "Mousewheel", (function () {
        return U
    })), n.d(t, "Navigation", (function () {
        return K
    })), n.d(t, "Pagination", (function () {
        return Q
    })), n.d(t, "Scrollbar", (function () {
        return ee
    })), n.d(t, "Parallax", (function () {
        return te
    })), n.d(t, "Zoom", (function () {
        return ne
    })), n.d(t, "Lazy", (function () {
        return ie
    })), n.d(t, "Controller", (function () {
        return se
    })), n.d(t, "A11y", (function () {
        return ae
    })), n.d(t, "History", (function () {
        return oe
    })), n.d(t, "HashNavigation", (function () {
        return re
    })), n.d(t, "Autoplay", (function () {
        return le
    })), n.d(t, "Thumbs", (function () {
        return ce
    })), n.d(t, "FreeMode", (function () {
        return de
    })), n.d(t, "Grid", (function () {
        return ue
    })), n.d(t, "Manipulation", (function () {
        return ve
    })), n.d(t, "EffectFade", (function () {
        return xe
    })), n.d(t, "EffectCube", (function () {
        return Ee
    })), n.d(t, "EffectFlip", (function () {
        return Se
    })), n.d(t, "EffectCoverflow", (function () {
        return Te
    })), n.d(t, "EffectCreative", (function () {
        return $e
    })), n.d(t, "EffectCards", (function () {
        return Me
    }));
    const a = {
        body: {},
        addEventListener() {
        },
        removeEventListener() {
        },
        activeElement: {
            blur() {
            }, nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {
            }
        }),
        createElement: () => ({
            children: [], childNodes: [], style: {}, setAttribute() {
            }, getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
    };

    function o() {
        const e = "undefined" != typeof document ? document : {};
        return s(e, a), e
    }

    const r = {
        document: a,
        navigator: {userAgent: ""},
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
        history: {
            replaceState() {
            }, pushState() {
            }, go() {
            }, back() {
            }
        },
        CustomEvent: function () {
            return this
        },
        addEventListener() {
        },
        removeEventListener() {
        },
        getComputedStyle: () => ({getPropertyValue: () => ""}),
        Image() {
        },
        Date() {
        },
        screen: {},
        setTimeout() {
        },
        clearTimeout() {
        },
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function l() {
        const e = "undefined" != typeof window ? window : {};
        return s(e, r), e
    }

    class c extends Array {
        constructor(e) {
            "number" == typeof e ? super(e) : (super(...e || []), function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                    get: () => t, set(e) {
                        t.__proto__ = e
                    }
                })
            }(this))
        }
    }

    function d(e = []) {
        const t = [];
        return e.forEach(e => {
            Array.isArray(e) ? t.push(...d(e)) : t.push(e)
        }), t
    }

    function u(e, t) {
        return Array.prototype.filter.call(e, t)
    }

    function h(e, t) {
        const n = l(), i = o();
        let s = [];
        if (!t && e instanceof c) return e;
        if (!e) return new c(s);
        if ("string" == typeof e) {
            const n = e.trim();
            if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                let e = "div";
                0 === n.indexOf("<li") && (e = "ul"), 0 === n.indexOf("<tr") && (e = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (e = "tr"), 0 === n.indexOf("<tbody") && (e = "table"), 0 === n.indexOf("<option") && (e = "select");
                const t = i.createElement(e);
                t.innerHTML = n;
                for (let e = 0; e < t.childNodes.length; e += 1) s.push(t.childNodes[e])
            } else s = function (e, t) {
                if ("string" != typeof e) return [e];
                const n = [], i = t.querySelectorAll(e);
                for (let e = 0; e < i.length; e += 1) n.push(i[e]);
                return n
            }(e.trim(), t || i)
        } else if (e.nodeType || e === n || e === i) s.push(e); else if (Array.isArray(e)) {
            if (e instanceof c) return e;
            s = e
        }
        return new c(function (e) {
            const t = [];
            for (let n = 0; n < e.length; n += 1) -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
        }(s))
    }

    h.fn = c.prototype;
    const p = "resize scroll".split(" ");

    function f(e) {
        return function (...t) {
            if (void 0 === t[0]) {
                for (let t = 0; t < this.length; t += 1) p.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : h(this[t]).trigger(e));
                return this
            }
            return this.on(e, ...t)
        }
    }

    f("click"), f("blur"), f("focus"), f("focusin"), f("focusout"), f("keyup"), f("keydown"), f("keypress"), f("submit"), f("change"), f("mousedown"), f("mousemove"), f("mouseup"), f("mouseenter"), f("mouseleave"), f("mouseout"), f("mouseover"), f("touchstart"), f("touchend"), f("touchmove"), f("resize"), f("scroll");
    const m = {
        addClass: function (...e) {
            const t = d(e.map(e => e.split(" ")));
            return this.forEach(e => {
                e.classList.add(...t)
            }), this
        }, removeClass: function (...e) {
            const t = d(e.map(e => e.split(" ")));
            return this.forEach(e => {
                e.classList.remove(...t)
            }), this
        }, hasClass: function (...e) {
            const t = d(e.map(e => e.split(" ")));
            return u(this, e => t.filter(t => e.classList.contains(t)).length > 0).length > 0
        }, toggleClass: function (...e) {
            const t = d(e.map(e => e.split(" ")));
            this.forEach(e => {
                t.forEach(t => {
                    e.classList.toggle(t)
                })
            })
        }, attr: function (e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (let n = 0; n < this.length; n += 1) if (2 === arguments.length) this[n].setAttribute(e, t); else for (const t in e) this[n][t] = e[t], this[n].setAttribute(t, e[t]);
            return this
        }, removeAttr: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        }, transform: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        }, transition: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
            return this
        }, on: function (...e) {
            let [t, n, i, s] = e;

            function a(e) {
                const t = e.target;
                if (!t) return;
                const s = e.target.dom7EventData || [];
                if (s.indexOf(e) < 0 && s.unshift(e), h(t).is(n)) i.apply(t, s); else {
                    const e = h(t).parents();
                    for (let t = 0; t < e.length; t += 1) h(e[t]).is(n) && i.apply(e[t], s)
                }
            }

            function o(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t)
            }

            "function" == typeof e[1] && ([t, i, s] = e, n = void 0), s || (s = !1);
            const r = t.split(" ");
            let l;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (n) for (l = 0; l < r.length; l += 1) {
                    const e = r[l];
                    t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                        listener: i,
                        proxyListener: a
                    }), t.addEventListener(e, a, s)
                } else for (l = 0; l < r.length; l += 1) {
                    const e = r[l];
                    t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                        listener: i,
                        proxyListener: o
                    }), t.addEventListener(e, o, s)
                }
            }
            return this
        }, off: function (...e) {
            let [t, n, i, s] = e;
            "function" == typeof e[1] && ([t, i, s] = e, n = void 0), s || (s = !1);
            const a = t.split(" ");
            for (let e = 0; e < a.length; e += 1) {
                const t = a[e];
                for (let e = 0; e < this.length; e += 1) {
                    const a = this[e];
                    let o;
                    if (!n && a.dom7Listeners ? o = a.dom7Listeners[t] : n && a.dom7LiveListeners && (o = a.dom7LiveListeners[t]), o && o.length) for (let e = o.length - 1; e >= 0; e -= 1) {
                        const n = o[e];
                        i && n.listener === i || i && n.listener && n.listener.dom7proxy && n.listener.dom7proxy === i ? (a.removeEventListener(t, n.proxyListener, s), o.splice(e, 1)) : i || (a.removeEventListener(t, n.proxyListener, s), o.splice(e, 1))
                    }
                }
            }
            return this
        }, trigger: function (...e) {
            const t = l(), n = e[0].split(" "), i = e[1];
            for (let s = 0; s < n.length; s += 1) {
                const a = n[s];
                for (let n = 0; n < this.length; n += 1) {
                    const s = this[n];
                    if (t.CustomEvent) {
                        const n = new t.CustomEvent(a, {detail: i, bubbles: !0, cancelable: !0});
                        s.dom7EventData = e.filter((e, t) => t > 0), s.dispatchEvent(n), s.dom7EventData = [], delete s.dom7EventData
                    }
                }
            }
            return this
        }, transitionEnd: function (e) {
            const t = this;
            return e && t.on("transitionend", (function n(i) {
                i.target === this && (e.call(this, i), t.off("transitionend", n))
            })), this
        }, outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, styles: function () {
            const e = l();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        }, offset: function () {
            if (this.length > 0) {
                const e = l(), t = o(), n = this[0], i = n.getBoundingClientRect(), s = t.body,
                    a = n.clientTop || s.clientTop || 0, r = n.clientLeft || s.clientLeft || 0,
                    c = n === e ? e.scrollY : n.scrollTop, d = n === e ? e.scrollX : n.scrollLeft;
                return {top: i.top + c - a, left: i.left + d - r}
            }
            return null
        }, css: function (e, t) {
            const n = l();
            let i;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1) for (const t in e) this[i].style[t] = e[t];
                    return this
                }
                if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                return this
            }
            return this
        }, each: function (e) {
            return e ? (this.forEach((t, n) => {
                e.apply(t, [t, n])
            }), this) : this
        }, html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        }, text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        }, is: function (e) {
            const t = l(), n = o(), i = this[0];
            let s, a;
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (s = h(e), a = 0; a < s.length; a += 1) if (s[a] === i) return !0;
                return !1
            }
            if (e === n) return i === n;
            if (e === t) return i === t;
            if (e.nodeType || e instanceof c) {
                for (s = e.nodeType ? [e] : e, a = 0; a < s.length; a += 1) if (s[a] === i) return !0;
                return !1
            }
            return !1
        }, index: function () {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }, eq: function (e) {
            if (void 0 === e) return this;
            const t = this.length;
            if (e > t - 1) return h([]);
            if (e < 0) {
                const n = t + e;
                return h(n < 0 ? [] : [this[n]])
            }
            return h([this[e]])
        }, append: function (...e) {
            let t;
            const n = o();
            for (let i = 0; i < e.length; i += 1) {
                t = e[i];
                for (let e = 0; e < this.length; e += 1) if ("string" == typeof t) {
                    const i = n.createElement("div");
                    for (i.innerHTML = t; i.firstChild;) this[e].appendChild(i.firstChild)
                } else if (t instanceof c) for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]); else this[e].appendChild(t)
            }
            return this
        }, prepend: function (e) {
            const t = o();
            let n, i;
            for (n = 0; n < this.length; n += 1) if ("string" == typeof e) {
                const s = t.createElement("div");
                for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1) this[n].insertBefore(s.childNodes[i], this[n].childNodes[0])
            } else if (e instanceof c) for (i = 0; i < e.length; i += 1) this[n].insertBefore(e[i], this[n].childNodes[0]); else this[n].insertBefore(e, this[n].childNodes[0]);
            return this
        }, next: function (e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && h(this[0].nextElementSibling).is(e) ? h([this[0].nextElementSibling]) : h([]) : this[0].nextElementSibling ? h([this[0].nextElementSibling]) : h([]) : h([])
        }, nextAll: function (e) {
            const t = [];
            let n = this[0];
            if (!n) return h([]);
            for (; n.nextElementSibling;) {
                const i = n.nextElementSibling;
                e ? h(i).is(e) && t.push(i) : t.push(i), n = i
            }
            return h(t)
        }, prev: function (e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && h(t.previousElementSibling).is(e) ? h([t.previousElementSibling]) : h([]) : t.previousElementSibling ? h([t.previousElementSibling]) : h([])
            }
            return h([])
        }, prevAll: function (e) {
            const t = [];
            let n = this[0];
            if (!n) return h([]);
            for (; n.previousElementSibling;) {
                const i = n.previousElementSibling;
                e ? h(i).is(e) && t.push(i) : t.push(i), n = i
            }
            return h(t)
        }, parent: function (e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) null !== this[n].parentNode && (e ? h(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
            return h(t)
        }, parents: function (e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) {
                let i = this[n].parentNode;
                for (; i;) e ? h(i).is(e) && t.push(i) : t.push(i), i = i.parentNode
            }
            return h(t)
        }, closest: function (e) {
            let t = this;
            return void 0 === e ? h([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        }, find: function (e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) {
                const i = this[n].querySelectorAll(e);
                for (let e = 0; e < i.length; e += 1) t.push(i[e])
            }
            return h(t)
        }, children: function (e) {
            const t = [];
            for (let n = 0; n < this.length; n += 1) {
                const i = this[n].children;
                for (let n = 0; n < i.length; n += 1) e && !h(i[n]).is(e) || t.push(i[n])
            }
            return h(t)
        }, filter: function (e) {
            return h(u(this, e))
        }, remove: function () {
            for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };
    Object.keys(m).forEach(e => {
        Object.defineProperty(h.fn, e, {value: m[e], writable: !0})
    });
    var g = h;

    function v(e, t = 0) {
        return setTimeout(e, t)
    }

    function y() {
        return Date.now()
    }

    function b(e, t = "x") {
        const n = l();
        let i, s, a;
        const o = function (e) {
            const t = l();
            let n;
            return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n
        }(e);
        return n.WebKitCSSMatrix ? (s = o.transform || o.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(e => e.replace(",", ".")).join(", ")), a = new n.WebKitCSSMatrix("none" === s ? "" : s)) : (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = a.toString().split(",")), "x" === t && (s = n.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = n.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
    }

    function w(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function x(...e) {
        const t = Object(e[0]), n = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < e.length; s += 1) {
            const a = e[s];
            if (null != a && (i = a, !("undefined" != typeof window && void 0 !== window.HTMLElement ? i instanceof HTMLElement : i && (1 === i.nodeType || 11 === i.nodeType)))) {
                const e = Object.keys(Object(a)).filter(e => n.indexOf(e) < 0);
                for (let n = 0, i = e.length; n < i; n += 1) {
                    const i = e[n], s = Object.getOwnPropertyDescriptor(a, i);
                    void 0 !== s && s.enumerable && (w(t[i]) && w(a[i]) ? a[i].__swiper__ ? t[i] = a[i] : x(t[i], a[i]) : !w(t[i]) && w(a[i]) ? (t[i] = {}, a[i].__swiper__ ? t[i] = a[i] : x(t[i], a[i])) : t[i] = a[i])
                }
            }
        }
        var i;
        return t
    }

    function E(e, t, n) {
        e.style.setProperty(t, n)
    }

    function C({swiper: e, targetPosition: t, side: n}) {
        const i = l(), s = -e.translate;
        let a, o = null;
        const r = e.params.speed;
        e.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(e.cssModeFrameID);
        const c = t > s ? "next" : "prev", d = (e, t) => "next" === c && e >= t || "prev" === c && e <= t, u = () => {
            a = (new Date).getTime(), null === o && (o = a);
            const l = Math.max(Math.min((a - o) / r, 1), 0), c = .5 - Math.cos(l * Math.PI) / 2;
            let h = s + c * (t - s);
            if (d(h, t) && (h = t), e.wrapperEl.scrollTo({[n]: h}), d(h, t)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({[n]: h})
            }), void i.cancelAnimationFrame(e.cssModeFrameID);
            e.cssModeFrameID = i.requestAnimationFrame(u)
        };
        u()
    }

    let S, T, $;

    function M() {
        return S || (S = function () {
            const e = l(), t = o();
            return {
                smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                passiveListener: function () {
                    let t = !1;
                    try {
                        const n = Object.defineProperty({}, "passive", {
                            get() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, n)
                    } catch (e) {
                    }
                    return t
                }(),
                gestures: "ongesturestart" in e
            }
        }()), S
    }

    function k(e = {}) {
        return T || (T = function ({userAgent: e} = {}) {
            const t = M(), n = l(), i = n.navigator.platform, s = e || n.navigator.userAgent,
                a = {ios: !1, android: !1}, o = n.screen.width, r = n.screen.height,
                c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = s.match(/(iPad).*OS\s([\d_]+)/);
            const u = s.match(/(iPod)(.*OS\s([\d_]+))?/), h = !d && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                p = "Win32" === i;
            let f = "MacIntel" === i;
            return !d && f && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${r}`) >= 0 && (d = s.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), f = !1), c && !p && (a.os = "android", a.android = !0), (d || h || u) && (a.os = "ios", a.ios = !0), a
        }(e)), T
    }

    function P() {
        return $ || ($ = function () {
            const e = l();
            return {
                isSafari: function () {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()), $
    }

    function L({swiper: e, runCallbacks: t, direction: n, step: i}) {
        const {activeIndex: s, previousIndex: a} = e;
        let o = n;
        if (o || (o = s > a ? "next" : s < a ? "prev" : "reset"), e.emit("transition" + i), t && s !== a) {
            if ("reset" === o) return void e.emit("slideResetTransition" + i);
            e.emit("slideChangeTransition" + i), "next" === o ? e.emit("slideNextTransition" + i) : e.emit("slidePrevTransition" + i)
        }
    }

    function A(e) {
        const t = this, n = o(), i = l(), s = t.touchEventsData, {params: a, touches: r, enabled: c} = t;
        if (!c) return;
        if (t.animating && a.preventInteractionOnTransition) return;
        !t.animating && a.cssMode && a.loop && t.loopFix();
        let d = e;
        d.originalEvent && (d = d.originalEvent);
        let u = g(d.target);
        if ("wrapper" === a.touchEventsTarget && !u.closest(t.wrapperEl).length) return;
        if (s.isTouchEvent = "touchstart" === d.type, !s.isTouchEvent && "which" in d && 3 === d.which) return;
        if (!s.isTouchEvent && "button" in d && d.button > 0) return;
        if (s.isTouched && s.isMoved) return;
        const h = !!a.noSwipingClass && "" !== a.noSwipingClass, p = e.composedPath ? e.composedPath() : e.path;
        h && d.target && d.target.shadowRoot && p && (u = g(p[0]));
        const f = a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass,
            m = !(!d.target || !d.target.shadowRoot);
        if (a.noSwiping && (m ? function (e, t = this) {
            return function t(n) {
                if (!n || n === o() || n === l()) return null;
                n.assignedSlot && (n = n.assignedSlot);
                const i = n.closest(e);
                return i || n.getRootNode ? i || t(n.getRootNode().host) : null
            }(t)
        }(f, u[0]) : u.closest(f)[0])) return void (t.allowClick = !0);
        if (a.swipeHandler && !u.closest(a.swipeHandler)[0]) return;
        r.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX, r.currentY = "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY;
        const v = r.currentX, b = r.currentY, w = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
            x = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
        if (w && (v <= x || v >= i.innerWidth - x)) {
            if ("prevent" !== w) return;
            e.preventDefault()
        }
        if (Object.assign(s, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), r.startX = v, r.startY = b, s.touchStartTime = y(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== d.type) {
            let e = !0;
            u.is(s.focusableElements) && (e = !1, "SELECT" === u[0].nodeName && (s.isTouched = !1)), n.activeElement && g(n.activeElement).is(s.focusableElements) && n.activeElement !== u[0] && n.activeElement.blur();
            const i = e && t.allowTouchMove && a.touchStartPreventDefault;
            !a.touchStartForcePreventDefault && !i || u[0].isContentEditable || d.preventDefault()
        }
        t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !a.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", d)
    }

    function O(e) {
        const t = o(), n = this, i = n.touchEventsData, {params: s, touches: a, rtlTranslate: r, enabled: l} = n;
        if (!l) return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", c));
        if (i.isTouchEvent && "touchmove" !== c.type) return;
        const d = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
            u = "touchmove" === c.type ? d.pageX : c.pageX, h = "touchmove" === c.type ? d.pageY : c.pageY;
        if (c.preventedByNestedSwiper) return a.startX = u, void (a.startY = h);
        if (!n.allowTouchMove) return g(c.target).is(i.focusableElements) || (n.allowClick = !1), void (i.isTouched && (Object.assign(a, {
            startX: u,
            startY: h,
            currentX: u,
            currentY: h
        }), i.touchStartTime = y()));
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (n.isVertical()) {
            if (h < a.startY && n.translate <= n.maxTranslate() || h > a.startY && n.translate >= n.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
        } else if (u < a.startX && n.translate <= n.maxTranslate() || u > a.startX && n.translate >= n.minTranslate()) return;
        if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && g(c.target).is(i.focusableElements)) return i.isMoved = !0, void (n.allowClick = !1);
        if (i.allowTouchCallbacks && n.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
        a.currentX = u, a.currentY = h;
        const p = a.currentX - a.startX, f = a.currentY - a.startY;
        if (n.params.threshold && Math.sqrt(p ** 2 + f ** 2) < n.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let e;
            n.isHorizontal() && a.currentY === a.startY || n.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : p * p + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(p)) / Math.PI, i.isScrolling = n.isHorizontal() ? e > s.touchAngle : 90 - e > s.touchAngle)
        }
        if (i.isScrolling && n.emit("touchMoveOpposite", c), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
        if (!i.startMoving) return;
        n.allowClick = !1, !s.cssMode && c.cancelable && c.preventDefault(), s.touchMoveStopPropagation && !s.nested && c.stopPropagation(), i.isMoved || (s.loop && !s.cssMode && n.loopFix(), i.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", c)), n.emit("sliderMove", c), i.isMoved = !0;
        let m = n.isHorizontal() ? p : f;
        a.diff = m, m *= s.touchRatio, r && (m = -m), n.swipeDirection = m > 0 ? "prev" : "next", i.currentTranslate = m + i.startTranslate;
        let v = !0, b = s.resistanceRatio;
        if (s.touchReleaseOnEdges && (b = 0), m > 0 && i.currentTranslate > n.minTranslate() ? (v = !1, s.resistance && (i.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + i.startTranslate + m) ** b)) : m < 0 && i.currentTranslate < n.maxTranslate() && (v = !1, s.resistance && (i.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - i.startTranslate - m) ** b)), v && (c.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.allowSlidePrev || n.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
            if (!(Math.abs(m) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void (a.diff = n.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
        }
        s.followFinger && !s.cssMode && ((s.freeMode && s.freeMode.enabled && n.freeMode || s.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), n.params.freeMode && s.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(i.currentTranslate), n.setTranslate(i.currentTranslate))
    }

    function _(e) {
        const t = this, n = t.touchEventsData, {params: i, touches: s, rtlTranslate: a, slidesGrid: o, enabled: r} = t;
        if (!r) return;
        let l = e;
        if (l.originalEvent && (l = l.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", l), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void (n.startMoving = !1);
        i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const c = y(), d = c - n.touchStartTime;
        if (t.allowClick) {
            const e = l.path || l.composedPath && l.composedPath();
            t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), d < 300 && c - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
        }
        if (n.lastClickTime = y(), v(() => {
            t.destroyed || (t.allowClick = !0)
        }), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === s.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void (n.startMoving = !1);
        let u;
        if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, u = i.followFinger ? a ? t.translate : -t.translate : -n.currentTranslate, i.cssMode) return;
        if (t.params.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({currentPos: u});
        let h = 0, p = t.slidesSizesGrid[0];
        for (let e = 0; e < o.length; e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
            const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            void 0 !== o[e + t] ? u >= o[e] && u < o[e + t] && (h = e, p = o[e + t] - o[e]) : u >= o[e] && (h = e, p = o[o.length - 1] - o[o.length - 2])
        }
        let f = null, m = null;
        i.rewind && (t.isBeginning ? m = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (f = 0));
        const g = (u - o[h]) / p, b = h < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (d > i.longSwipesMs) {
            if (!i.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (g >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? f : h + b) : t.slideTo(h)), "prev" === t.swipeDirection && (g > 1 - i.longSwipesRatio ? t.slideTo(h + b) : null !== m && g < 0 && Math.abs(g) > i.longSwipesRatio ? t.slideTo(m) : t.slideTo(h))
        } else {
            if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl) ? l.target === t.navigation.nextEl ? t.slideTo(h + b) : t.slideTo(h) : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : h + b), "prev" === t.swipeDirection && t.slideTo(null !== m ? m : h))
        }
    }

    function z() {
        const e = this, {params: t, el: n} = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {allowSlideNext: i, allowSlidePrev: s, snapGrid: a} = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
    }

    function I(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function D() {
        const e = this, {wrapperEl: t, rtlTranslate: n, enabled: i} = e;
        if (!i) return;
        let s;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const a = e.maxTranslate() - e.minTranslate();
        s = 0 === a ? 0 : (e.translate - e.minTranslate()) / a, s !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }

    let N = !1;

    function H() {
    }

    const R = (e, t) => {
        const n = o(), {params: i, touchEvents: s, el: a, wrapperEl: r, device: l, support: c} = e, d = !!i.nested,
            u = "on" === t ? "addEventListener" : "removeEventListener", h = t;
        if (c.touch) {
            const t = !("touchstart" !== s.start || !c.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            a[u](s.start, e.onTouchStart, t), a[u](s.move, e.onTouchMove, c.passiveListener ? {
                passive: !1,
                capture: d
            } : d), a[u](s.end, e.onTouchEnd, t), s.cancel && a[u](s.cancel, e.onTouchEnd, t)
        } else a[u](s.start, e.onTouchStart, !1), n[u](s.move, e.onTouchMove, d), n[u](s.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) && a[u]("click", e.onClick, !0), i.cssMode && r[u]("scroll", e.onScroll), i.updateOnWindowResize ? e[h](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", z, !0) : e[h]("observerUpdate", z, !0)
    };
    const q = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var j = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function B(e, t) {
        return function (n = {}) {
            const i = Object.keys(n)[0], s = n[i];
            "object" == typeof s && null !== s ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === e[i] && (e[i] = {auto: !0}), i in e && "enabled" in s ? (!0 === e[i] && (e[i] = {enabled: !0}), "object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {enabled: !1}), x(t, n)) : x(t, n)) : x(t, n)
        }
    }

    const F = {
        eventsEmitter: {
            on(e, t, n) {
                const i = this;
                if (!i.eventsListeners || i.destroyed) return i;
                if ("function" != typeof t) return i;
                const s = n ? "unshift" : "push";
                return e.split(" ").forEach(e => {
                    i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
                }), i
            }, once(e, t, n) {
                const i = this;
                if (!i.eventsListeners || i.destroyed) return i;
                if ("function" != typeof t) return i;

                function s(...n) {
                    i.off(e, s), s.__emitterProxy && delete s.__emitterProxy, t.apply(i, n)
                }

                return s.__emitterProxy = t, i.on(e, s, n)
            }, onAny(e, t) {
                const n = this;
                if (!n.eventsListeners || n.destroyed) return n;
                if ("function" != typeof e) return n;
                const i = t ? "unshift" : "push";
                return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
            }, offAny(e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed) return t;
                if (!t.eventsAnyListeners) return t;
                const n = t.eventsAnyListeners.indexOf(e);
                return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
            }, off(e, t) {
                const n = this;
                return !n.eventsListeners || n.destroyed ? n : n.eventsListeners ? (e.split(" ").forEach(e => {
                    void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach((i, s) => {
                        (i === t || i.__emitterProxy && i.__emitterProxy === t) && n.eventsListeners[e].splice(s, 1)
                    })
                }), n) : n
            }, emit(...e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed) return t;
                if (!t.eventsListeners) return t;
                let n, i, s;
                "string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0], i = e.slice(1, e.length), s = t) : (n = e[0].events, i = e[0].data, s = e[0].context || t), i.unshift(s);
                return (Array.isArray(n) ? n : n.split(" ")).forEach(e => {
                    t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(t => {
                        t.apply(s, [e, ...i])
                    }), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach(e => {
                        e.apply(s, i)
                    })
                }), t
            }
        }, update: {
            updateSize: function () {
                const e = this;
                let t, n;
                const i = e.$el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i[0].clientWidth, n = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i[0].clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), n = n - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
                    width: t,
                    height: n,
                    size: e.isHorizontal() ? t : n
                }))
            }, updateSlides: function () {
                const e = this;

                function t(t) {
                    return e.isHorizontal() ? t : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[t]
                }

                function n(e, n) {
                    return parseFloat(e.getPropertyValue(t(n)) || 0)
                }

                const i = e.params, {$wrapperEl: s, size: a, rtlTranslate: o, wrongRTL: r} = e,
                    l = e.virtual && i.virtual.enabled, c = l ? e.virtual.slides.length : e.slides.length,
                    d = s.children("." + e.params.slideClass), u = l ? e.virtual.slides.length : d.length;
                let h = [];
                const p = [], f = [];
                let m = i.slidesOffsetBefore;
                "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
                let g = i.slidesOffsetAfter;
                "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
                const v = e.snapGrid.length, y = e.slidesGrid.length;
                let b = i.spaceBetween, w = -m, x = 0, C = 0;
                if (void 0 === a) return;
                "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * a), e.virtualSize = -b, o ? d.css({
                    marginLeft: "",
                    marginBottom: "",
                    marginTop: ""
                }) : d.css({
                    marginRight: "",
                    marginBottom: "",
                    marginTop: ""
                }), i.centeredSlides && i.cssMode && (E(e.wrapperEl, "--swiper-centered-offset-before", ""), E(e.wrapperEl, "--swiper-centered-offset-after", ""));
                const S = i.grid && i.grid.rows > 1 && e.grid;
                let T;
                S && e.grid.initSlides(u);
                const $ = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter(e => void 0 !== i.breakpoints[e].slidesPerView).length > 0;
                for (let s = 0; s < u; s += 1) {
                    T = 0;
                    const o = d.eq(s);
                    if (S && e.grid.updateSlide(s, o, u, t), "none" !== o.css("display")) {
                        if ("auto" === i.slidesPerView) {
                            $ && (d[s].style[t("width")] = "");
                            const a = getComputedStyle(o[0]), r = o[0].style.transform, l = o[0].style.webkitTransform;
                            if (r && (o[0].style.transform = "none"), l && (o[0].style.webkitTransform = "none"), i.roundLengths) T = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0); else {
                                const e = n(a, "width"), t = n(a, "padding-left"), i = n(a, "padding-right"),
                                    s = n(a, "margin-left"), r = n(a, "margin-right"),
                                    l = a.getPropertyValue("box-sizing");
                                if (l && "border-box" === l) T = e + s + r; else {
                                    const {clientWidth: n, offsetWidth: a} = o[0];
                                    T = e + t + i + s + r + (a - n)
                                }
                            }
                            r && (o[0].style.transform = r), l && (o[0].style.webkitTransform = l), i.roundLengths && (T = Math.floor(T))
                        } else T = (a - (i.slidesPerView - 1) * b) / i.slidesPerView, i.roundLengths && (T = Math.floor(T)), d[s] && (d[s].style[t("width")] = T + "px");
                        d[s] && (d[s].swiperSlideSize = T), f.push(T), i.centeredSlides ? (w = w + T / 2 + x / 2 + b, 0 === x && 0 !== s && (w = w - a / 2 - b), 0 === s && (w = w - a / 2 - b), Math.abs(w) < .001 && (w = 0), i.roundLengths && (w = Math.floor(w)), C % i.slidesPerGroup == 0 && h.push(w), p.push(w)) : (i.roundLengths && (w = Math.floor(w)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && h.push(w), p.push(w), w = w + T + b), e.virtualSize += T + b, x = T, C += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, a) + g, o && r && ("slide" === i.effect || "coverflow" === i.effect) && s.css({width: e.virtualSize + i.spaceBetween + "px"}), i.setWrapperSize && s.css({[t("width")]: e.virtualSize + i.spaceBetween + "px"}), S && e.grid.updateWrapperSize(T, h, t), !i.centeredSlides) {
                    const t = [];
                    for (let n = 0; n < h.length; n += 1) {
                        let s = h[n];
                        i.roundLengths && (s = Math.floor(s)), h[n] <= e.virtualSize - a && t.push(s)
                    }
                    h = t, Math.floor(e.virtualSize - a) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - a)
                }
                if (0 === h.length && (h = [0]), 0 !== i.spaceBetween) {
                    const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
                    d.filter((e, t) => !i.cssMode || t !== d.length - 1).css({[n]: b + "px"})
                }
                if (i.centeredSlides && i.centeredSlidesBounds) {
                    let e = 0;
                    f.forEach(t => {
                        e += t + (i.spaceBetween ? i.spaceBetween : 0)
                    }), e -= i.spaceBetween;
                    const t = e - a;
                    h = h.map(e => e < 0 ? -m : e > t ? t + g : e)
                }
                if (i.centerInsufficientSlides) {
                    let e = 0;
                    if (f.forEach(t => {
                        e += t + (i.spaceBetween ? i.spaceBetween : 0)
                    }), e -= i.spaceBetween, e < a) {
                        const t = (a - e) / 2;
                        h.forEach((e, n) => {
                            h[n] = e - t
                        }), p.forEach((e, n) => {
                            p[n] = e + t
                        })
                    }
                }
                if (Object.assign(e, {
                    slides: d,
                    snapGrid: h,
                    slidesGrid: p,
                    slidesSizesGrid: f
                }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                    E(e.wrapperEl, "--swiper-centered-offset-before", -h[0] + "px"), E(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - f[f.length - 1] / 2 + "px");
                    const t = -e.snapGrid[0], n = -e.slidesGrid[0];
                    e.snapGrid = e.snapGrid.map(e => e + t), e.slidesGrid = e.slidesGrid.map(e => e + n)
                }
                if (u !== c && e.emit("slidesLengthChange"), h.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), p.length !== y && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !(l || i.cssMode || "slide" !== i.effect && "fade" !== i.effect)) {
                    const t = i.containerModifierClass + "backface-hidden", n = e.$el.hasClass(t);
                    u <= i.maxBackfaceHiddenSlides ? n || e.$el.addClass(t) : n && e.$el.removeClass(t)
                }
            }, updateAutoHeight: function (e) {
                const t = this, n = [], i = t.virtual && t.params.virtual.enabled;
                let s, a = 0;
                "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                const o = e => i ? t.slides.filter(t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : t.slides.eq(e)[0];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) (t.visibleSlides || g([])).each(e => {
                    n.push(e)
                }); else for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                    const e = t.activeIndex + s;
                    if (e > t.slides.length && !i) break;
                    n.push(o(e))
                } else n.push(o(t.activeIndex));
                for (s = 0; s < n.length; s += 1) if (void 0 !== n[s]) {
                    const e = n[s].offsetHeight;
                    a = e > a ? e : a
                }
                (a || 0 === a) && t.$wrapperEl.css("height", a + "px")
            }, updateSlidesOffset: function () {
                const e = this, t = e.slides;
                for (let n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
            }, updateSlidesProgress: function (e = this && this.translate || 0) {
                const t = this, n = t.params, {slides: i, rtlTranslate: s, snapGrid: a} = t;
                if (0 === i.length) return;
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                let o = -e;
                s && (o = e), i.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                for (let e = 0; e < i.length; e += 1) {
                    const r = i[e];
                    let l = r.swiperSlideOffset;
                    n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
                    const c = (o + (n.centeredSlides ? t.minTranslate() : 0) - l) / (r.swiperSlideSize + n.spaceBetween),
                        d = (o - a[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) / (r.swiperSlideSize + n.spaceBetween),
                        u = -(o - l), h = u + t.slidesSizesGrid[e];
                    (u >= 0 && u < t.size - 1 || h > 1 && h <= t.size || u <= 0 && h >= t.size) && (t.visibleSlides.push(r), t.visibleSlidesIndexes.push(e), i.eq(e).addClass(n.slideVisibleClass)), r.progress = s ? -c : c, r.originalProgress = s ? -d : d
                }
                t.visibleSlides = g(t.visibleSlides)
            }, updateProgress: function (e) {
                const t = this;
                if (void 0 === e) {
                    const n = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * n || 0
                }
                const n = t.params, i = t.maxTranslate() - t.minTranslate();
                let {progress: s, isBeginning: a, isEnd: o} = t;
                const r = a, l = o;
                0 === i ? (s = 0, a = !0, o = !0) : (s = (e - t.minTranslate()) / i, a = s <= 0, o = s >= 1), Object.assign(t, {
                    progress: s,
                    isBeginning: a,
                    isEnd: o
                }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), a && !r && t.emit("reachBeginning toEdge"), o && !l && t.emit("reachEnd toEdge"), (r && !a || l && !o) && t.emit("fromEdge"), t.emit("progress", s)
            }, updateSlidesClasses: function () {
                const e = this, {slides: t, params: n, $wrapperEl: i, activeIndex: s, realIndex: a} = e,
                    o = e.virtual && n.virtual.enabled;
                let r;
                t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`), r = o ? e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${s}"]`) : t.eq(s), r.addClass(n.slideActiveClass), n.loop && (r.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${a}"]`).addClass(n.slideDuplicateActiveClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${a}"]`).addClass(n.slideDuplicateActiveClass));
                let l = r.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
                n.loop && 0 === l.length && (l = t.eq(0), l.addClass(n.slideNextClass));
                let c = r.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
                n.loop && 0 === c.length && (c = t.eq(-1), c.addClass(n.slidePrevClass)), n.loop && (l.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass), c.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)), e.emitSlidesClasses()
            }, updateActiveIndex: function (e) {
                const t = this, n = t.rtlTranslate ? t.translate : -t.translate, {
                    slidesGrid: i,
                    snapGrid: s,
                    params: a,
                    activeIndex: o,
                    realIndex: r,
                    snapIndex: l
                } = t;
                let c, d = e;
                if (void 0 === d) {
                    for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2 ? d = e : n >= i[e] && n < i[e + 1] && (d = e + 1) : n >= i[e] && (d = e);
                    a.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                }
                if (s.indexOf(n) >= 0) c = s.indexOf(n); else {
                    const e = Math.min(a.slidesPerGroupSkip, d);
                    c = e + Math.floor((d - e) / a.slidesPerGroup)
                }
                if (c >= s.length && (c = s.length - 1), d === o) return void (c !== l && (t.snapIndex = c, t.emit("snapIndexChange")));
                const u = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                Object.assign(t, {
                    snapIndex: c,
                    realIndex: u,
                    previousIndex: o,
                    activeIndex: d
                }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), r !== u && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
            }, updateClickedSlide: function (e) {
                const t = this, n = t.params, i = g(e).closest("." + n.slideClass)[0];
                let s, a = !1;
                if (i) for (let e = 0; e < t.slides.length; e += 1) if (t.slides[e] === i) {
                    a = !0, s = e;
                    break
                }
                if (!i || !a) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
                t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(g(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = s, n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
        }, translate: {
            getTranslate: function (e = (this.isHorizontal() ? "x" : "y")) {
                const {params: t, rtlTranslate: n, translate: i, $wrapperEl: s} = this;
                if (t.virtualTranslate) return n ? -i : i;
                if (t.cssMode) return i;
                let a = b(s[0], e);
                return n && (a = -a), a || 0
            }, setTranslate: function (e, t) {
                const n = this, {rtlTranslate: i, params: s, $wrapperEl: a, wrapperEl: o, progress: r} = n;
                let l, c = 0, d = 0;
                n.isHorizontal() ? c = i ? -e : e : d = e, s.roundLengths && (c = Math.floor(c), d = Math.floor(d)), s.cssMode ? o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -c : -d : s.virtualTranslate || a.transform(`translate3d(${c}px, ${d}px, 0px)`), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? c : d;
                const u = n.maxTranslate() - n.minTranslate();
                l = 0 === u ? 0 : (e - n.minTranslate()) / u, l !== r && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
            }, minTranslate: function () {
                return -this.snapGrid[0]
            }, maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1]
            }, translateTo: function (e = 0, t = this.params.speed, n = !0, i = !0, s) {
                const a = this, {params: o, wrapperEl: r} = a;
                if (a.animating && o.preventInteractionOnTransition) return !1;
                const l = a.minTranslate(), c = a.maxTranslate();
                let d;
                if (d = i && e > l ? l : i && e < c ? c : e, a.updateProgress(d), o.cssMode) {
                    const e = a.isHorizontal();
                    if (0 === t) r[e ? "scrollLeft" : "scrollTop"] = -d; else {
                        if (!a.support.smoothScroll) return C({
                            swiper: a,
                            targetPosition: -d,
                            side: e ? "left" : "top"
                        }), !0;
                        r.scrollTo({[e ? "left" : "top"]: -d, behavior: "smooth"})
                    }
                    return !0
                }
                return 0 === t ? (a.setTransition(0), a.setTranslate(d), n && (a.emit("beforeTransitionStart", t, s), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(d), n && (a.emit("beforeTransitionStart", t, s), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function (e) {
                    a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, n && a.emit("transitionEnd"))
                }), a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))), !0
            }
        }, transition: {
            setTransition: function (e, t) {
                const n = this;
                n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t)
            }, transitionStart: function (e = !0, t) {
                const n = this, {params: i} = n;
                i.cssMode || (i.autoHeight && n.updateAutoHeight(), L({
                    swiper: n,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }))
            }, transitionEnd: function (e = !0, t) {
                const {params: n} = this;
                this.animating = !1, n.cssMode || (this.setTransition(0), L({
                    swiper: this,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }))
            }
        }, slide: {
            slideTo: function (e = 0, t = this.params.speed, n = !0, i, s) {
                if ("number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                if ("string" == typeof e) {
                    const t = parseInt(e, 10);
                    if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                    e = t
                }
                const a = this;
                let o = e;
                o < 0 && (o = 0);
                const {
                    params: r,
                    snapGrid: l,
                    slidesGrid: c,
                    previousIndex: d,
                    activeIndex: u,
                    rtlTranslate: h,
                    wrapperEl: p,
                    enabled: f
                } = a;
                if (a.animating && r.preventInteractionOnTransition || !f && !i && !s) return !1;
                const m = Math.min(a.params.slidesPerGroupSkip, o);
                let g = m + Math.floor((o - m) / a.params.slidesPerGroup);
                g >= l.length && (g = l.length - 1);
                const v = -l[g];
                if (r.normalizeSlideIndex) for (let e = 0; e < c.length; e += 1) {
                    const t = -Math.floor(100 * v), n = Math.floor(100 * c[e]), i = Math.floor(100 * c[e + 1]);
                    void 0 !== c[e + 1] ? t >= n && t < i - (i - n) / 2 ? o = e : t >= n && t < i && (o = e + 1) : t >= n && (o = e)
                }
                if (a.initialized && o !== u) {
                    if (!a.allowSlideNext && v < a.translate && v < a.minTranslate()) return !1;
                    if (!a.allowSlidePrev && v > a.translate && v > a.maxTranslate() && (u || 0) !== o) return !1
                }
                let y;
                if (o !== (d || 0) && n && a.emit("beforeSlideChangeStart"), a.updateProgress(v), y = o > u ? "next" : o < u ? "prev" : "reset", h && -v === a.translate || !h && v === a.translate) return a.updateActiveIndex(o), r.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== r.effect && a.setTranslate(v), "reset" !== y && (a.transitionStart(n, y), a.transitionEnd(n, y)), !1;
                if (r.cssMode) {
                    const e = a.isHorizontal(), n = h ? v : -v;
                    if (0 === t) {
                        const t = a.virtual && a.params.virtual.enabled;
                        t && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), p[e ? "scrollLeft" : "scrollTop"] = n, t && requestAnimationFrame(() => {
                            a.wrapperEl.style.scrollSnapType = "", a._swiperImmediateVirtual = !1
                        })
                    } else {
                        if (!a.support.smoothScroll) return C({
                            swiper: a,
                            targetPosition: n,
                            side: e ? "left" : "top"
                        }), !0;
                        p.scrollTo({[e ? "left" : "top"]: n, behavior: "smooth"})
                    }
                    return !0
                }
                return a.setTransition(t), a.setTranslate(v), a.updateActiveIndex(o), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(n, y), 0 === t ? a.transitionEnd(n, y) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
                    a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(n, y))
                }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd)), !0
            }, slideToLoop: function (e = 0, t = this.params.speed, n = !0, i) {
                if ("string" == typeof e) {
                    const t = parseInt(e, 10);
                    if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                    e = t
                }
                const s = this;
                let a = e;
                return s.params.loop && (a += s.loopedSlides), s.slideTo(a, t, n, i)
            }, slideNext: function (e = this.params.speed, t = !0, n) {
                const i = this, {animating: s, enabled: a, params: o} = i;
                if (!a) return i;
                let r = o.slidesPerGroup;
                "auto" === o.slidesPerView && 1 === o.slidesPerGroup && o.slidesPerGroupAuto && (r = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : r;
                if (o.loop) {
                    if (s && o.loopPreventsSlide) return !1;
                    i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                }
                return o.rewind && i.isEnd ? i.slideTo(0, e, t, n) : i.slideTo(i.activeIndex + l, e, t, n)
            }, slidePrev: function (e = this.params.speed, t = !0, n) {
                const i = this, {params: s, animating: a, snapGrid: o, slidesGrid: r, rtlTranslate: l, enabled: c} = i;
                if (!c) return i;
                if (s.loop) {
                    if (a && s.loopPreventsSlide) return !1;
                    i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                }

                function d(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }

                const u = d(l ? i.translate : -i.translate), h = o.map(e => d(e));
                let p = o[h.indexOf(u) - 1];
                if (void 0 === p && s.cssMode) {
                    let e;
                    o.forEach((t, n) => {
                        u >= t && (e = n)
                    }), void 0 !== e && (p = o[e > 0 ? e - 1 : e])
                }
                let f = 0;
                if (void 0 !== p && (f = r.indexOf(p), f < 0 && (f = i.activeIndex - 1), "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (f = f - i.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), s.rewind && i.isBeginning) {
                    const s = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
                    return i.slideTo(s, e, t, n)
                }
                return i.slideTo(f, e, t, n)
            }, slideReset: function (e = this.params.speed, t = !0, n) {
                return this.slideTo(this.activeIndex, e, t, n)
            }, slideToClosest: function (e = this.params.speed, t = !0, n, i = .5) {
                const s = this;
                let a = s.activeIndex;
                const o = Math.min(s.params.slidesPerGroupSkip, a),
                    r = o + Math.floor((a - o) / s.params.slidesPerGroup),
                    l = s.rtlTranslate ? s.translate : -s.translate;
                if (l >= s.snapGrid[r]) {
                    const e = s.snapGrid[r];
                    l - e > (s.snapGrid[r + 1] - e) * i && (a += s.params.slidesPerGroup)
                } else {
                    const e = s.snapGrid[r - 1];
                    l - e <= (s.snapGrid[r] - e) * i && (a -= s.params.slidesPerGroup)
                }
                return a = Math.max(a, 0), a = Math.min(a, s.slidesGrid.length - 1), s.slideTo(a, e, t, n)
            }, slideToClickedSlide: function () {
                const e = this, {params: t, $wrapperEl: n} = e,
                    i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let s, a = e.clickedIndex;
                if (t.loop) {
                    if (e.animating) return;
                    s = parseInt(g(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - i / 2 || a > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), a = n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), v(() => {
                        e.slideTo(a)
                    })) : e.slideTo(a) : a > e.slides.length - i ? (e.loopFix(), a = n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), v(() => {
                        e.slideTo(a)
                    })) : e.slideTo(a)
                } else e.slideTo(a)
            }
        }, loop: {
            loopCreate: function () {
                const e = this, t = o(), {params: n, $wrapperEl: i} = e,
                    s = i.children().length > 0 ? g(i.children()[0].parentNode) : i;
                s.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
                let a = s.children("." + n.slideClass);
                if (n.loopFillGroupWithBlank) {
                    const e = n.slidesPerGroup - a.length % n.slidesPerGroup;
                    if (e !== n.slidesPerGroup) {
                        for (let i = 0; i < e; i += 1) {
                            const e = g(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);
                            s.append(e)
                        }
                        a = s.children("." + n.slideClass)
                    }
                }
                "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), e.loopedSlides += n.loopAdditionalSlides, e.loopedSlides > a.length && e.params.loopedSlidesLimit && (e.loopedSlides = a.length);
                const r = [], l = [];
                a.each((e, t) => {
                    g(e).attr("data-swiper-slide-index", t)
                });
                for (let t = 0; t < e.loopedSlides; t += 1) {
                    const e = t - Math.floor(t / a.length) * a.length;
                    l.push(a.eq(e)[0]), r.unshift(a.eq(a.length - e - 1)[0])
                }
                for (let e = 0; e < l.length; e += 1) s.append(g(l[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
                for (let e = r.length - 1; e >= 0; e -= 1) s.prepend(g(r[e].cloneNode(!0)).addClass(n.slideDuplicateClass))
            }, loopFix: function () {
                const e = this;
                e.emit("beforeLoopFix");
                const {
                    activeIndex: t,
                    slides: n,
                    loopedSlides: i,
                    allowSlidePrev: s,
                    allowSlideNext: a,
                    snapGrid: o,
                    rtlTranslate: r
                } = e;
                let l;
                e.allowSlidePrev = !0, e.allowSlideNext = !0;
                const c = -o[t] - e.getTranslate();
                if (t < i) {
                    l = n.length - 3 * i + t, l += i;
                    e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((r ? -e.translate : e.translate) - c)
                } else if (t >= n.length - i) {
                    l = -n.length + t + i, l += i;
                    e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((r ? -e.translate : e.translate) - c)
                }
                e.allowSlidePrev = s, e.allowSlideNext = a, e.emit("loopFix")
            }, loopDestroy: function () {
                const {$wrapperEl: e, params: t, slides: n} = this;
                e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), n.removeAttr("data-swiper-slide-index")
            }
        }, grabCursor: {
            setGrabCursor: function (e) {
                if (this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode) return;
                const t = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
                t.style.cursor = "move", t.style.cursor = e ? "grabbing" : "grab"
            }, unsetGrabCursor: function () {
                this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this["container" === this.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
            }
        }, events: {
            attachEvents: function () {
                const e = this, t = o(), {params: n, support: i} = e;
                e.onTouchStart = A.bind(e), e.onTouchMove = O.bind(e), e.onTouchEnd = _.bind(e), n.cssMode && (e.onScroll = D.bind(e)), e.onClick = I.bind(e), i.touch && !N && (t.addEventListener("touchstart", H), N = !0), R(e, "on")
            }, detachEvents: function () {
                R(this, "off")
            }
        }, breakpoints: {
            setBreakpoint: function () {
                const e = this, {activeIndex: t, initialized: n, loopedSlides: i = 0, params: s, $el: a} = e,
                    o = s.breakpoints;
                if (!o || o && 0 === Object.keys(o).length) return;
                const r = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
                if (!r || e.currentBreakpoint === r) return;
                const l = (r in o ? o[r] : void 0) || e.originalParams, c = q(e, s), d = q(e, l), u = s.enabled;
                c && !d ? (a.removeClass(`${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && d && (a.addClass(s.containerModifierClass + "grid"), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === s.grid.fill) && a.addClass(s.containerModifierClass + "grid-column"), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
                    const n = s[t] && s[t].enabled, i = l[t] && l[t].enabled;
                    n && !i && e[t].disable(), !n && i && e[t].enable()
                });
                const h = l.direction && l.direction !== s.direction,
                    p = s.loop && (l.slidesPerView !== s.slidesPerView || h);
                h && n && e.changeDirection(), x(e.params, l);
                const f = e.params.enabled;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }), u && !f ? e.disable() : !u && f && e.enable(), e.currentBreakpoint = r, e.emit("_beforeBreakpoint", l), p && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
            }, getBreakpoint: function (e, t = "window", n) {
                if (!e || "container" === t && !n) return;
                let i = !1;
                const s = l(), a = "window" === t ? s.innerHeight : n.clientHeight, o = Object.keys(e).map(e => {
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {value: a * t, point: e}
                    }
                    return {value: e, point: e}
                });
                o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                for (let e = 0; e < o.length; e += 1) {
                    const {point: a, value: r} = o[e];
                    "window" === t ? s.matchMedia(`(min-width: ${r}px)`).matches && (i = a) : r <= n.clientWidth && (i = a)
                }
                return i || "max"
            }
        }, checkOverflow: {
            checkOverflow: function () {
                const e = this, {isLocked: t, params: n} = e, {slidesOffsetBefore: i} = n;
                if (i) {
                    const t = e.slides.length - 1, n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                    e.isLocked = e.size > n
                } else e.isLocked = 1 === e.snapGrid.length;
                !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
        }, classes: {
            addClasses: function () {
                const {classNames: e, params: t, rtl: n, $el: i, device: s, support: a} = this, o = function (e, t) {
                    const n = [];
                    return e.forEach(e => {
                        "object" == typeof e ? Object.keys(e).forEach(i => {
                            e[i] && n.push(t + i)
                        }) : "string" == typeof e && n.push(t + e)
                    }), n
                }(["initialized", t.direction, {"pointer-events": !a.touch}, {"free-mode": this.params.freeMode && t.freeMode.enabled}, {autoheight: t.autoHeight}, {rtl: n}, {grid: t.grid && t.grid.rows > 1}, {"grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill}, {android: s.android}, {ios: s.ios}, {"css-mode": t.cssMode}, {centered: t.cssMode && t.centeredSlides}, {"watch-progress": t.watchSlidesProgress}], t.containerModifierClass);
                e.push(...o), i.addClass([...e].join(" ")), this.emitContainerClasses()
            }, removeClasses: function () {
                const {$el: e, classNames: t} = this;
                e.removeClass(t.join(" ")), this.emitContainerClasses()
            }
        }, images: {
            loadImage: function (e, t, n, i, s, a) {
                const o = l();
                let r;

                function c() {
                    a && a()
                }

                g(e).parent("picture")[0] || e.complete && s ? c() : t ? (r = new o.Image, r.onload = c, r.onerror = c, i && (r.sizes = i), n && (r.srcset = n), t && (r.src = t)) : c()
            }, preloadImages: function () {
                const e = this;

                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                }

                e.imagesToLoad = e.$el.find("img");
                for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                    const i = e.imagesToLoad[n];
                    e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                }
            }
        }
    }, W = {};

    class X {
        constructor(...e) {
            let t, n;
            if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? n = e[0] : [t, n] = e, n || (n = {}), n = x({}, n), t && !n.el && (n.el = t), n.el && g(n.el).length > 1) {
                const e = [];
                return g(n.el).each(t => {
                    const i = x({}, n, {el: t});
                    e.push(new X(i))
                }), e
            }
            const i = this;
            i.__swiper__ = !0, i.support = M(), i.device = k({userAgent: n.userAgent}), i.browser = P(), i.eventsListeners = {}, i.eventsAnyListeners = [], i.modules = [...i.__modules__], n.modules && Array.isArray(n.modules) && i.modules.push(...n.modules);
            const s = {};
            i.modules.forEach(e => {
                e({
                    swiper: i,
                    extendParams: B(n, s),
                    on: i.on.bind(i),
                    once: i.once.bind(i),
                    off: i.off.bind(i),
                    emit: i.emit.bind(i)
                })
            });
            const a = x({}, j, s);
            return i.params = x({}, a, W, n), i.originalParams = x({}, i.params), i.passedParams = x({}, n), i.params && i.params.on && Object.keys(i.params.on).forEach(e => {
                i.on(e, i.params.on[e])
            }), i.params && i.params.onAny && i.onAny(i.params.onAny), i.$ = g, Object.assign(i, {
                enabled: i.params.enabled,
                el: t,
                classNames: [],
                slides: g(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === i.params.direction,
                isVertical: () => "vertical" === i.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: i.params.allowSlideNext,
                allowSlidePrev: i.params.allowSlidePrev,
                touchEvents: function () {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                        t = ["pointerdown", "pointermove", "pointerup"];
                    return i.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    }, i.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, i.support.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: i.params.focusableElements,
                    lastClickTime: y(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: i.params.allowTouchMove,
                touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                imagesToLoad: [],
                imagesLoaded: 0
            }), i.emit("_swiper"), i.params.init && i.init(), i
        }

        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }

        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }

        setProgress(e, t) {
            e = Math.min(Math.max(e, 0), 1);
            const n = this.minTranslate(), i = (this.maxTranslate() - n) * e + n;
            this.translateTo(i, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
        }

        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
            e.emit("_containerClasses", t.join(" "))
        }

        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
        }

        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each(n => {
                const i = e.getSlideClasses(n);
                t.push({slideEl: n, classNames: i}), e.emit("_slideClass", n, i)
            }), e.emit("_slideClasses", t)
        }

        slidesPerViewDynamic(e = "current", t = !1) {
            const {params: n, slides: i, slidesGrid: s, slidesSizesGrid: a, size: o, activeIndex: r} = this;
            let l = 1;
            if (n.centeredSlides) {
                let e, t = i[r].swiperSlideSize;
                for (let n = r + 1; n < i.length; n += 1) i[n] && !e && (t += i[n].swiperSlideSize, l += 1, t > o && (e = !0));
                for (let n = r - 1; n >= 0; n -= 1) i[n] && !e && (t += i[n].swiperSlideSize, l += 1, t > o && (e = !0))
            } else if ("current" === e) for (let e = r + 1; e < i.length; e += 1) {
                (t ? s[e] + a[e] - s[r] < o : s[e] - s[r] < o) && (l += 1)
            } else for (let e = r - 1; e >= 0; e -= 1) {
                s[r] - s[e] < o && (l += 1)
            }
            return l
        }

        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {snapGrid: t, params: n} = e;

            function i() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            let s;
            n.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (s = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), s || i()), n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }

        changeDirection(e, t = !0) {
            const n = this, i = n.params.direction;
            return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (n.$el.removeClass(`${n.params.containerModifierClass}${i}`).addClass(`${n.params.containerModifierClass}${e}`), n.emitContainerClasses(), n.params.direction = e, n.slides.each(t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            }), n.emit("changeDirection"), t && n.update()), n
        }

        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(t.params.containerModifierClass + "rtl"), t.el.dir = "rtl") : (t.$el.removeClass(t.params.containerModifierClass + "rtl"), t.el.dir = "ltr"), t.update())
        }

        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            const n = g(e || t.params.el);
            if (!(e = n[0])) return !1;
            e.swiper = t;
            const i = () => "." + (t.params.wrapperClass || "").trim().split(" ").join(".");
            let s = (() => {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = g(e.shadowRoot.querySelector(i()));
                    return t.children = e => n.children(e), t
                }
                return n.children ? n.children(i()) : g(n).children(i())
            })();
            if (0 === s.length && t.params.createElements) {
                const e = o().createElement("div");
                s = g(e), e.className = t.params.wrapperClass, n.append(e), n.children("." + t.params.slideClass).each(e => {
                    s.append(e)
                })
            }
            return Object.assign(t, {
                $el: n,
                el: e,
                $wrapperEl: s,
                wrapperEl: s[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
                wrongRTL: "-webkit-box" === s.css("display")
            }), !0
        }

        init(e) {
            const t = this;
            if (t.initialized) return t;
            return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }

        destroy(e = !0, t = !0) {
            const n = this, {params: i, $el: s, $wrapperEl: a, slides: o} = n;
            return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), s.removeAttr("style"), a.removeAttr("style"), o && o.length && o.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach(e => {
                n.off(e)
            }), !1 !== e && (n.$el[0].swiper = null, function (e) {
                const t = e;
                Object.keys(t).forEach(e => {
                    try {
                        t[e] = null
                    } catch (e) {
                    }
                    try {
                        delete t[e]
                    } catch (e) {
                    }
                })
            }(n)), n.destroyed = !0), null
        }

        static extendDefaults(e) {
            x(W, e)
        }

        static get extendedDefaults() {
            return W
        }

        static get defaults() {
            return j
        }

        static installModule(e) {
            X.prototype.__modules__ || (X.prototype.__modules__ = []);
            const t = X.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }

        static use(e) {
            return Array.isArray(e) ? (e.forEach(e => X.installModule(e)), X) : (X.installModule(e), X)
        }
    }

    Object.keys(F).forEach(e => {
        Object.keys(F[e]).forEach(t => {
            X.prototype[t] = F[e][t]
        })
    }), X.use([function ({swiper: e, on: t, emit: n}) {
        const i = l();
        let s = null, a = null;
        const o = () => {
            e && !e.destroyed && e.initialized && (n("beforeResize"), n("resize"))
        }, r = () => {
            e && !e.destroyed && e.initialized && n("orientationchange")
        };
        t("init", () => {
            e.params.resizeObserver && void 0 !== i.ResizeObserver ? e && !e.destroyed && e.initialized && (s = new ResizeObserver(t => {
                a = i.requestAnimationFrame(() => {
                    const {width: n, height: i} = e;
                    let s = n, a = i;
                    t.forEach(({contentBoxSize: t, contentRect: n, target: i}) => {
                        i && i !== e.el || (s = n ? n.width : (t[0] || t).inlineSize, a = n ? n.height : (t[0] || t).blockSize)
                    }), s === n && a === i || o()
                })
            }), s.observe(e.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", r))
        }), t("destroy", () => {
            a && i.cancelAnimationFrame(a), s && s.unobserve && e.el && (s.unobserve(e.el), s = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", r)
        })
    }, function ({swiper: e, extendParams: t, on: n, emit: i}) {
        const s = [], a = l(), o = (e, t = {}) => {
            const n = new (a.MutationObserver || a.WebkitMutationObserver)(e => {
                if (1 === e.length) return void i("observerUpdate", e[0]);
                const t = function () {
                    i("observerUpdate", e[0])
                };
                a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0)
            });
            n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }), s.push(n)
        };
        t({observer: !1, observeParents: !1, observeSlideChildren: !1}), n("init", () => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let e = 0; e < t.length; e += 1) o(t[e])
                }
                o(e.$el[0], {childList: e.params.observeSlideChildren}), o(e.$wrapperEl[0], {attributes: !1})
            }
        }), n("destroy", () => {
            s.forEach(e => {
                e.disconnect()
            }), s.splice(0, s.length)
        })
    }]);
    var G = X;

    function Y({swiper: e, extendParams: t, on: n, emit: i}) {
        let s;

        function a(t, n) {
            const i = e.params.virtual;
            if (i.cache && e.virtual.cache[n]) return e.virtual.cache[n];
            const s = i.renderSlide ? g(i.renderSlide.call(e, t, n)) : g(`<div class="${e.params.slideClass}" data-swiper-slide-index="${n}">${t}</div>`);
            return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", n), i.cache && (e.virtual.cache[n] = s), s
        }

        function o(t) {
            const {slidesPerView: n, slidesPerGroup: s, centeredSlides: o} = e.params, {
                addSlidesBefore: r,
                addSlidesAfter: l
            } = e.params.virtual, {from: c, to: d, slides: u, slidesGrid: h, offset: p} = e.virtual;
            e.params.cssMode || e.updateActiveIndex();
            const f = e.activeIndex || 0;
            let m, g, v;
            m = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top", o ? (g = Math.floor(n / 2) + s + l, v = Math.floor(n / 2) + s + r) : (g = n + (s - 1) + l, v = s + r);
            const y = Math.max((f || 0) - v, 0), b = Math.min((f || 0) + g, u.length - 1),
                w = (e.slidesGrid[y] || 0) - (e.slidesGrid[0] || 0);

            function x() {
                e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), i("virtualUpdate")
            }

            if (Object.assign(e.virtual, {
                from: y,
                to: b,
                offset: w,
                slidesGrid: e.slidesGrid
            }), c === y && d === b && !t) return e.slidesGrid !== h && w !== p && e.slides.css(m, w + "px"), e.updateProgress(), void i("virtualUpdate");
            if (e.params.virtual.renderExternal) return e.params.virtual.renderExternal.call(e, {
                offset: w,
                from: y,
                to: b,
                slides: function () {
                    const e = [];
                    for (let t = y; t <= b; t += 1) e.push(u[t]);
                    return e
                }()
            }), void (e.params.virtual.renderExternalUpdate ? x() : i("virtualUpdate"));
            const E = [], C = [];
            if (t) e.$wrapperEl.find("." + e.params.slideClass).remove(); else for (let t = c; t <= d; t += 1) (t < y || t > b) && e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`).remove();
            for (let e = 0; e < u.length; e += 1) e >= y && e <= b && (void 0 === d || t ? C.push(e) : (e > d && C.push(e), e < c && E.push(e)));
            C.forEach(t => {
                e.$wrapperEl.append(a(u[t], t))
            }), E.sort((e, t) => t - e).forEach(t => {
                e.$wrapperEl.prepend(a(u[t], t))
            }), e.$wrapperEl.children(".swiper-slide").css(m, w + "px"), x()
        }

        t({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        }), e.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        }, n("beforeInit", () => {
            e.params.virtual.enabled && (e.virtual.slides = e.params.virtual.slides, e.classNames.push(e.params.containerModifierClass + "virtual"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0, e.params.initialSlide || o())
        }), n("setTranslate", () => {
            e.params.virtual.enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(s), s = setTimeout(() => {
                o()
            }, 100)) : o())
        }), n("init update resize", () => {
            e.params.virtual.enabled && e.params.cssMode && E(e.wrapperEl, "--swiper-virtual-size", e.virtualSize + "px")
        }), Object.assign(e.virtual, {
            appendSlide: function (t) {
                if ("object" == typeof t && "length" in t) for (let n = 0; n < t.length; n += 1) t[n] && e.virtual.slides.push(t[n]); else e.virtual.slides.push(t);
                o(!0)
            }, prependSlide: function (t) {
                const n = e.activeIndex;
                let i = n + 1, s = 1;
                if (Array.isArray(t)) {
                    for (let n = 0; n < t.length; n += 1) t[n] && e.virtual.slides.unshift(t[n]);
                    i = n + t.length, s = t.length
                } else e.virtual.slides.unshift(t);
                if (e.params.virtual.cache) {
                    const t = e.virtual.cache, n = {};
                    Object.keys(t).forEach(e => {
                        const i = t[e], a = i.attr("data-swiper-slide-index");
                        a && i.attr("data-swiper-slide-index", parseInt(a, 10) + s), n[parseInt(e, 10) + s] = i
                    }), e.virtual.cache = n
                }
                o(!0), e.slideTo(i, 0)
            }, removeSlide: function (t) {
                if (null == t) return;
                let n = e.activeIndex;
                if (Array.isArray(t)) for (let i = t.length - 1; i >= 0; i -= 1) e.virtual.slides.splice(t[i], 1), e.params.virtual.cache && delete e.virtual.cache[t[i]], t[i] < n && (n -= 1), n = Math.max(n, 0); else e.virtual.slides.splice(t, 1), e.params.virtual.cache && delete e.virtual.cache[t], t < n && (n -= 1), n = Math.max(n, 0);
                o(!0), e.slideTo(n, 0)
            }, removeAllSlides: function () {
                e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), o(!0), e.slideTo(0, 0)
            }, update: o
        })
    }

    function V({swiper: e, extendParams: t, on: n, emit: i}) {
        const s = o(), a = l();

        function r(t) {
            if (!e.enabled) return;
            const {rtlTranslate: n} = e;
            let o = t;
            o.originalEvent && (o = o.originalEvent);
            const r = o.keyCode || o.charCode, l = e.params.keyboard.pageUpDown, c = l && 33 === r, d = l && 34 === r,
                u = 37 === r, h = 39 === r, p = 38 === r, f = 40 === r;
            if (!e.allowSlideNext && (e.isHorizontal() && h || e.isVertical() && f || d)) return !1;
            if (!e.allowSlidePrev && (e.isHorizontal() && u || e.isVertical() && p || c)) return !1;
            if (!(o.shiftKey || o.altKey || o.ctrlKey || o.metaKey || s.activeElement && s.activeElement.nodeName && ("input" === s.activeElement.nodeName.toLowerCase() || "textarea" === s.activeElement.nodeName.toLowerCase()))) {
                if (e.params.keyboard.onlyInViewport && (c || d || u || h || p || f)) {
                    let t = !1;
                    if (e.$el.parents("." + e.params.slideClass).length > 0 && 0 === e.$el.parents("." + e.params.slideActiveClass).length) return;
                    const i = e.$el, s = i[0].clientWidth, o = i[0].clientHeight, r = a.innerWidth, l = a.innerHeight,
                        c = e.$el.offset();
                    n && (c.left -= e.$el[0].scrollLeft);
                    const d = [[c.left, c.top], [c.left + s, c.top], [c.left, c.top + o], [c.left + s, c.top + o]];
                    for (let e = 0; e < d.length; e += 1) {
                        const n = d[e];
                        if (n[0] >= 0 && n[0] <= r && n[1] >= 0 && n[1] <= l) {
                            if (0 === n[0] && 0 === n[1]) continue;
                            t = !0
                        }
                    }
                    if (!t) return
                }
                e.isHorizontal() ? ((c || d || u || h) && (o.preventDefault ? o.preventDefault() : o.returnValue = !1), ((d || h) && !n || (c || u) && n) && e.slideNext(), ((c || u) && !n || (d || h) && n) && e.slidePrev()) : ((c || d || p || f) && (o.preventDefault ? o.preventDefault() : o.returnValue = !1), (d || f) && e.slideNext(), (c || p) && e.slidePrev()), i("keyPress", r)
            }
        }

        function c() {
            e.keyboard.enabled || (g(s).on("keydown", r), e.keyboard.enabled = !0)
        }

        function d() {
            e.keyboard.enabled && (g(s).off("keydown", r), e.keyboard.enabled = !1)
        }

        e.keyboard = {enabled: !1}, t({keyboard: {enabled: !1, onlyInViewport: !0, pageUpDown: !0}}), n("init", () => {
            e.params.keyboard.enabled && c()
        }), n("destroy", () => {
            e.keyboard.enabled && d()
        }), Object.assign(e.keyboard, {enable: c, disable: d})
    }

    function U({swiper: e, extendParams: t, on: n, emit: i}) {
        const s = l();
        let a;
        t({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        }), e.mousewheel = {enabled: !1};
        let o, r = y();
        const c = [];

        function d() {
            e.enabled && (e.mouseEntered = !0)
        }

        function u() {
            e.enabled && (e.mouseEntered = !1)
        }

        function h(t) {
            return !(e.params.mousewheel.thresholdDelta && t.delta < e.params.mousewheel.thresholdDelta) && (!(e.params.mousewheel.thresholdTime && y() - r < e.params.mousewheel.thresholdTime) && (t.delta >= 6 && y() - r < 60 || (t.direction < 0 ? e.isEnd && !e.params.loop || e.animating || (e.slideNext(), i("scroll", t.raw)) : e.isBeginning && !e.params.loop || e.animating || (e.slidePrev(), i("scroll", t.raw)), r = (new s.Date).getTime(), !1)))
        }

        function p(t) {
            let n = t, s = !0;
            if (!e.enabled) return;
            const r = e.params.mousewheel;
            e.params.cssMode && n.preventDefault();
            let l = e.$el;
            if ("container" !== e.params.mousewheel.eventsTarget && (l = g(e.params.mousewheel.eventsTarget)), !e.mouseEntered && !l[0].contains(n.target) && !r.releaseOnEdges) return !0;
            n.originalEvent && (n = n.originalEvent);
            let d = 0;
            const u = e.rtlTranslate ? -1 : 1, p = function (e) {
                let t = 0, n = 0, i = 0, s = 0;
                return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), i = 10 * t, s = 10 * n, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = s, s = 0), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !n && (n = s < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: n,
                    pixelX: i,
                    pixelY: s
                }
            }(n);
            if (r.forceToAxis) if (e.isHorizontal()) {
                if (!(Math.abs(p.pixelX) > Math.abs(p.pixelY))) return !0;
                d = -p.pixelX * u
            } else {
                if (!(Math.abs(p.pixelY) > Math.abs(p.pixelX))) return !0;
                d = -p.pixelY
            } else d = Math.abs(p.pixelX) > Math.abs(p.pixelY) ? -p.pixelX * u : -p.pixelY;
            if (0 === d) return !0;
            r.invert && (d = -d);
            let f = e.getTranslate() + d * r.sensitivity;
            if (f >= e.minTranslate() && (f = e.minTranslate()), f <= e.maxTranslate() && (f = e.maxTranslate()), s = !!e.params.loop || !(f === e.minTranslate() || f === e.maxTranslate()), s && e.params.nested && n.stopPropagation(), e.params.freeMode && e.params.freeMode.enabled) {
                const t = {time: y(), delta: Math.abs(d), direction: Math.sign(d)},
                    s = o && t.time < o.time + 500 && t.delta <= o.delta && t.direction === o.direction;
                if (!s) {
                    o = void 0, e.params.loop && e.loopFix();
                    let l = e.getTranslate() + d * r.sensitivity;
                    const u = e.isBeginning, h = e.isEnd;
                    if (l >= e.minTranslate() && (l = e.minTranslate()), l <= e.maxTranslate() && (l = e.maxTranslate()), e.setTransition(0), e.setTranslate(l), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!u && e.isBeginning || !h && e.isEnd) && e.updateSlidesClasses(), e.params.freeMode.sticky) {
                        clearTimeout(a), a = void 0, c.length >= 15 && c.shift();
                        const n = c.length ? c[c.length - 1] : void 0, i = c[0];
                        if (c.push(t), n && (t.delta > n.delta || t.direction !== n.direction)) c.splice(0); else if (c.length >= 15 && t.time - i.time < 500 && i.delta - t.delta >= 1 && t.delta <= 6) {
                            const n = d > 0 ? .8 : .2;
                            o = t, c.splice(0), a = v(() => {
                                e.slideToClosest(e.params.speed, !0, void 0, n)
                            }, 0)
                        }
                        a || (a = v(() => {
                            o = t, c.splice(0), e.slideToClosest(e.params.speed, !0, void 0, .5)
                        }, 500))
                    }
                    if (s || i("scroll", n), e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(), l === e.minTranslate() || l === e.maxTranslate()) return !0
                }
            } else {
                const n = {time: y(), delta: Math.abs(d), direction: Math.sign(d), raw: t};
                c.length >= 2 && c.shift();
                const i = c.length ? c[c.length - 1] : void 0;
                if (c.push(n), i ? (n.direction !== i.direction || n.delta > i.delta || n.time > i.time + 150) && h(n) : h(n), function (t) {
                    const n = e.params.mousewheel;
                    if (t.direction < 0) {
                        if (e.isEnd && !e.params.loop && n.releaseOnEdges) return !0
                    } else if (e.isBeginning && !e.params.loop && n.releaseOnEdges) return !0;
                    return !1
                }(n)) return !0
            }
            return n.preventDefault ? n.preventDefault() : n.returnValue = !1, !1
        }

        function f(t) {
            let n = e.$el;
            "container" !== e.params.mousewheel.eventsTarget && (n = g(e.params.mousewheel.eventsTarget)), n[t]("mouseenter", d), n[t]("mouseleave", u), n[t]("wheel", p)
        }

        function m() {
            return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", p), !0) : !e.mousewheel.enabled && (f("on"), e.mousewheel.enabled = !0, !0)
        }

        function b() {
            return e.params.cssMode ? (e.wrapperEl.addEventListener(event, p), !0) : !!e.mousewheel.enabled && (f("off"), e.mousewheel.enabled = !1, !0)
        }

        n("init", () => {
            !e.params.mousewheel.enabled && e.params.cssMode && b(), e.params.mousewheel.enabled && m()
        }), n("destroy", () => {
            e.params.cssMode && m(), e.mousewheel.enabled && b()
        }), Object.assign(e.mousewheel, {enable: m, disable: b})
    }

    function Z(e, t, n, i) {
        const s = o();
        return e.params.createElements && Object.keys(i).forEach(a => {
            if (!n[a] && !0 === n.auto) {
                let o = e.$el.children("." + i[a])[0];
                o || (o = s.createElement("div"), o.className = i[a], e.$el.append(o)), n[a] = o, t[a] = o
            }
        }), n
    }

    function K({swiper: e, extendParams: t, on: n, emit: i}) {
        function s(t) {
            let n;
            return t && (n = g(t), e.params.uniqueNavElements && "string" == typeof t && n.length > 1 && 1 === e.$el.find(t).length && (n = e.$el.find(t))), n
        }

        function a(t, n) {
            const i = e.params.navigation;
            t && t.length > 0 && (t[n ? "addClass" : "removeClass"](i.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = n), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](i.lockClass))
        }

        function o() {
            if (e.params.loop) return;
            const {$nextEl: t, $prevEl: n} = e.navigation;
            a(n, e.isBeginning && !e.params.rewind), a(t, e.isEnd && !e.params.rewind)
        }

        function r(t) {
            t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), i("navigationPrev"))
        }

        function l(t) {
            t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), i("navigationNext"))
        }

        function c() {
            const t = e.params.navigation;
            if (e.params.navigation = Z(e, e.originalParams.navigation, e.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }), !t.nextEl && !t.prevEl) return;
            const n = s(t.nextEl), i = s(t.prevEl);
            n && n.length > 0 && n.on("click", l), i && i.length > 0 && i.on("click", r), Object.assign(e.navigation, {
                $nextEl: n,
                nextEl: n && n[0],
                $prevEl: i,
                prevEl: i && i[0]
            }), e.enabled || (n && n.addClass(t.lockClass), i && i.addClass(t.lockClass))
        }

        function d() {
            const {$nextEl: t, $prevEl: n} = e.navigation;
            t && t.length && (t.off("click", l), t.removeClass(e.params.navigation.disabledClass)), n && n.length && (n.off("click", r), n.removeClass(e.params.navigation.disabledClass))
        }

        t({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }), e.navigation = {nextEl: null, $nextEl: null, prevEl: null, $prevEl: null}, n("init", () => {
            !1 === e.params.navigation.enabled ? u() : (c(), o())
        }), n("toEdge fromEdge lock unlock", () => {
            o()
        }), n("destroy", () => {
            d()
        }), n("enable disable", () => {
            const {$nextEl: t, $prevEl: n} = e.navigation;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), n && n[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
        }), n("click", (t, n) => {
            const {$nextEl: s, $prevEl: a} = e.navigation, o = n.target;
            if (e.params.navigation.hideOnClick && !g(o).is(a) && !g(o).is(s)) {
                if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === o || e.pagination.el.contains(o))) return;
                let t;
                s ? t = s.hasClass(e.params.navigation.hiddenClass) : a && (t = a.hasClass(e.params.navigation.hiddenClass)), i(!0 === t ? "navigationShow" : "navigationHide"), s && s.toggleClass(e.params.navigation.hiddenClass), a && a.toggleClass(e.params.navigation.hiddenClass)
            }
        });
        const u = () => {
            e.$el.addClass(e.params.navigation.navigationDisabledClass), d()
        };
        Object.assign(e.navigation, {
            enable: () => {
                e.$el.removeClass(e.params.navigation.navigationDisabledClass), c(), o()
            }, disable: u, update: o, init: c, destroy: d
        })
    }

    function J(e = "") {
        return "." + e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")
    }

    function Q({swiper: e, extendParams: t, on: n, emit: i}) {
        const s = "swiper-pagination";
        let a;
        t({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: s + "-bullet",
                bulletActiveClass: s + "-bullet-active",
                modifierClass: s + "-",
                currentClass: s + "-current",
                totalClass: s + "-total",
                hiddenClass: s + "-hidden",
                progressbarFillClass: s + "-progressbar-fill",
                progressbarOppositeClass: s + "-progressbar-opposite",
                clickableClass: s + "-clickable",
                lockClass: s + "-lock",
                horizontalClass: s + "-horizontal",
                verticalClass: s + "-vertical",
                paginationDisabledClass: s + "-disabled"
            }
        }), e.pagination = {el: null, $el: null, bullets: []};
        let o = 0;

        function r() {
            return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
        }

        function l(t, n) {
            const {bulletActiveClass: i} = e.params.pagination;
            t[n]().addClass(`${i}-${n}`)[n]().addClass(`${i}-${n}-${n}`)
        }

        function c() {
            const t = e.rtl, n = e.params.pagination;
            if (r()) return;
            const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                c = e.pagination.$el;
            let d;
            const u = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? (d = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), d > s - 1 - 2 * e.loopedSlides && (d -= s - 2 * e.loopedSlides), d > u - 1 && (d -= u), d < 0 && "bullets" !== e.params.paginationType && (d = u + d)) : d = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === n.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                const i = e.pagination.bullets;
                let s, r, u;
                if (n.dynamicBullets && (a = i.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), c.css(e.isHorizontal() ? "width" : "height", a * (n.dynamicMainBullets + 4) + "px"), n.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (o += d - (e.previousIndex - e.loopedSlides || 0), o > n.dynamicMainBullets - 1 ? o = n.dynamicMainBullets - 1 : o < 0 && (o = 0)), s = Math.max(d - o, 0), r = s + (Math.min(i.length, n.dynamicMainBullets) - 1), u = (r + s) / 2), i.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${n.bulletActiveClass}${e}`).join(" ")), c.length > 1) i.each(e => {
                    const t = g(e), i = t.index();
                    i === d && t.addClass(n.bulletActiveClass), n.dynamicBullets && (i >= s && i <= r && t.addClass(n.bulletActiveClass + "-main"), i === s && l(t, "prev"), i === r && l(t, "next"))
                }); else {
                    const t = i.eq(d), a = t.index();
                    if (t.addClass(n.bulletActiveClass), n.dynamicBullets) {
                        const t = i.eq(s), o = i.eq(r);
                        for (let e = s; e <= r; e += 1) i.eq(e).addClass(n.bulletActiveClass + "-main");
                        if (e.params.loop) if (a >= i.length) {
                            for (let e = n.dynamicMainBullets; e >= 0; e -= 1) i.eq(i.length - e).addClass(n.bulletActiveClass + "-main");
                            i.eq(i.length - n.dynamicMainBullets - 1).addClass(n.bulletActiveClass + "-prev")
                        } else l(t, "prev"), l(o, "next"); else l(t, "prev"), l(o, "next")
                    }
                }
                if (n.dynamicBullets) {
                    const s = Math.min(i.length, n.dynamicMainBullets + 4), o = (a * s - a) / 2 - u * a,
                        r = t ? "right" : "left";
                    i.css(e.isHorizontal() ? r : "top", o + "px")
                }
            }
            if ("fraction" === n.type && (c.find(J(n.currentClass)).text(n.formatFractionCurrent(d + 1)), c.find(J(n.totalClass)).text(n.formatFractionTotal(u))), "progressbar" === n.type) {
                let t;
                t = n.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                const i = (d + 1) / u;
                let s = 1, a = 1;
                "horizontal" === t ? s = i : a = i, c.find(J(n.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${a})`).transition(e.params.speed)
            }
            "custom" === n.type && n.renderCustom ? (c.html(n.renderCustom(e, d + 1, u)), i("paginationRender", c[0])) : i("paginationUpdate", c[0]), e.params.watchOverflow && e.enabled && c[e.isLocked ? "addClass" : "removeClass"](n.lockClass)
        }

        function d() {
            const t = e.params.pagination;
            if (r()) return;
            const n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                s = e.pagination.$el;
            let a = "";
            if ("bullets" === t.type) {
                let i = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && i > n && (i = n);
                for (let n = 0; n < i; n += 1) t.renderBullet ? a += t.renderBullet.call(e, n, t.bulletClass) : a += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                s.html(a), e.pagination.bullets = s.find(J(t.bulletClass))
            }
            "fraction" === t.type && (a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, s.html(a)), "progressbar" === t.type && (a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, s.html(a)), "custom" !== t.type && i("paginationRender", e.pagination.$el[0])
        }

        function u() {
            e.params.pagination = Z(e, e.originalParams.pagination, e.params.pagination, {el: "swiper-pagination"});
            const t = e.params.pagination;
            if (!t.el) return;
            let n = g(t.el);
            0 !== n.length && (e.params.uniqueNavElements && "string" == typeof t.el && n.length > 1 && (n = e.$el.find(t.el), n.length > 1 && (n = n.filter(t => g(t).parents(".swiper")[0] === e.el))), "bullets" === t.type && t.clickable && n.addClass(t.clickableClass), n.addClass(t.modifierClass + t.type), n.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), "bullets" === t.type && t.dynamicBullets && (n.addClass(`${t.modifierClass}${t.type}-dynamic`), o = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && n.addClass(t.progressbarOppositeClass), t.clickable && n.on("click", J(t.bulletClass), (function (t) {
                t.preventDefault();
                let n = g(this).index() * e.params.slidesPerGroup;
                e.params.loop && (n += e.loopedSlides), e.slideTo(n)
            })), Object.assign(e.pagination, {$el: n, el: n[0]}), e.enabled || n.addClass(t.lockClass))
        }

        function h() {
            const t = e.params.pagination;
            if (r()) return;
            const n = e.pagination.$el;
            n.removeClass(t.hiddenClass), n.removeClass(t.modifierClass + t.type), n.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && n.off("click", J(t.bulletClass))
        }

        n("init", () => {
            !1 === e.params.pagination.enabled ? p() : (u(), d(), c())
        }), n("activeIndexChange", () => {
            (e.params.loop || void 0 === e.snapIndex) && c()
        }), n("snapIndexChange", () => {
            e.params.loop || c()
        }), n("slidesLengthChange", () => {
            e.params.loop && (d(), c())
        }), n("snapGridLengthChange", () => {
            e.params.loop || (d(), c())
        }), n("destroy", () => {
            h()
        }), n("enable disable", () => {
            const {$el: t} = e.pagination;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
        }), n("lock unlock", () => {
            c()
        }), n("click", (t, n) => {
            const s = n.target, {$el: a} = e.pagination;
            if (e.params.pagination.el && e.params.pagination.hideOnClick && a && a.length > 0 && !g(s).hasClass(e.params.pagination.bulletClass)) {
                if (e.navigation && (e.navigation.nextEl && s === e.navigation.nextEl || e.navigation.prevEl && s === e.navigation.prevEl)) return;
                const t = a.hasClass(e.params.pagination.hiddenClass);
                i(!0 === t ? "paginationShow" : "paginationHide"), a.toggleClass(e.params.pagination.hiddenClass)
            }
        });
        const p = () => {
            e.$el.addClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass), h()
        };
        Object.assign(e.pagination, {
            enable: () => {
                e.$el.removeClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass), u(), d(), c()
            }, disable: p, render: d, update: c, init: u, destroy: h
        })
    }

    function ee({swiper: e, extendParams: t, on: n, emit: i}) {
        const s = o();
        let a, r, l, c, d = !1, u = null, h = null;

        function p() {
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const {scrollbar: t, rtlTranslate: n, progress: i} = e, {$dragEl: s, $el: a} = t, o = e.params.scrollbar;
            let c = r, d = (l - r) * i;
            n ? (d = -d, d > 0 ? (c = r - d, d = 0) : -d + r > l && (c = l + d)) : d < 0 ? (c = r + d, d = 0) : d + r > l && (c = l - d), e.isHorizontal() ? (s.transform(`translate3d(${d}px, 0, 0)`), s[0].style.width = c + "px") : (s.transform(`translate3d(0px, ${d}px, 0)`), s[0].style.height = c + "px"), o.hide && (clearTimeout(u), a[0].style.opacity = 1, u = setTimeout(() => {
                a[0].style.opacity = 0, a.transition(400)
            }, 1e3))
        }

        function f() {
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const {scrollbar: t} = e, {$dragEl: n, $el: i} = t;
            n[0].style.width = "", n[0].style.height = "", l = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, c = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), r = "auto" === e.params.scrollbar.dragSize ? l * c : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? n[0].style.width = r + "px" : n[0].style.height = r + "px", i[0].style.display = c >= 1 ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
        }

        function m(t) {
            return e.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY
        }

        function y(t) {
            const {scrollbar: n, rtlTranslate: i} = e, {$el: s} = n;
            let o;
            o = (m(t) - s.offset()[e.isHorizontal() ? "left" : "top"] - (null !== a ? a : r / 2)) / (l - r), o = Math.max(Math.min(o, 1), 0), i && (o = 1 - o);
            const c = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * o;
            e.updateProgress(c), e.setTranslate(c), e.updateActiveIndex(), e.updateSlidesClasses()
        }

        function b(t) {
            const n = e.params.scrollbar, {scrollbar: s, $wrapperEl: o} = e, {$el: r, $dragEl: l} = s;
            d = !0, a = t.target === l[0] || t.target === l ? m(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, t.preventDefault(), t.stopPropagation(), o.transition(100), l.transition(100), y(t), clearTimeout(h), r.transition(0), n.hide && r.css("opacity", 1), e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"), i("scrollbarDragStart", t)
        }

        function w(t) {
            const {scrollbar: n, $wrapperEl: s} = e, {$el: a, $dragEl: o} = n;
            d && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, y(t), s.transition(0), a.transition(0), o.transition(0), i("scrollbarDragMove", t))
        }

        function x(t) {
            const n = e.params.scrollbar, {scrollbar: s, $wrapperEl: a} = e, {$el: o} = s;
            d && (d = !1, e.params.cssMode && (e.$wrapperEl.css("scroll-snap-type", ""), a.transition("")), n.hide && (clearTimeout(h), h = v(() => {
                o.css("opacity", 0), o.transition(400)
            }, 1e3)), i("scrollbarDragEnd", t), n.snapOnRelease && e.slideToClosest())
        }

        function E(t) {
            const {scrollbar: n, touchEventsTouch: i, touchEventsDesktop: a, params: o, support: r} = e, l = n.$el;
            if (!l) return;
            const c = l[0], d = !(!r.passiveListener || !o.passiveListeners) && {passive: !1, capture: !1},
                u = !(!r.passiveListener || !o.passiveListeners) && {passive: !0, capture: !1};
            if (!c) return;
            const h = "on" === t ? "addEventListener" : "removeEventListener";
            r.touch ? (c[h](i.start, b, d), c[h](i.move, w, d), c[h](i.end, x, u)) : (c[h](a.start, b, d), s[h](a.move, w, d), s[h](a.end, x, u))
        }

        function C() {
            const {scrollbar: t, $el: n} = e;
            e.params.scrollbar = Z(e, e.originalParams.scrollbar, e.params.scrollbar, {el: "swiper-scrollbar"});
            const i = e.params.scrollbar;
            if (!i.el) return;
            let s = g(i.el);
            e.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === n.find(i.el).length && (s = n.find(i.el)), s.addClass(e.isHorizontal() ? i.horizontalClass : i.verticalClass);
            let a = s.find("." + e.params.scrollbar.dragClass);
            0 === a.length && (a = g(`<div class="${e.params.scrollbar.dragClass}"></div>`), s.append(a)), Object.assign(t, {
                $el: s,
                el: s[0],
                $dragEl: a,
                dragEl: a[0]
            }), i.draggable && e.params.scrollbar.el && e.scrollbar.el && E("on"), s && s[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
        }

        function S() {
            const t = e.params.scrollbar, n = e.scrollbar.$el;
            n && n.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), e.params.scrollbar.el && e.scrollbar.el && E("off")
        }

        t({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: "swiper-scrollbar-horizontal",
                verticalClass: "swiper-scrollbar-vertical"
            }
        }), e.scrollbar = {el: null, dragEl: null, $el: null, $dragEl: null}, n("init", () => {
            !1 === e.params.scrollbar.enabled ? T() : (C(), f(), p())
        }), n("update resize observerUpdate lock unlock", () => {
            f()
        }), n("setTranslate", () => {
            p()
        }), n("setTransition", (t, n) => {
            !function (t) {
                e.params.scrollbar.el && e.scrollbar.el && e.scrollbar.$dragEl.transition(t)
            }(n)
        }), n("enable disable", () => {
            const {$el: t} = e.scrollbar;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
        }), n("destroy", () => {
            S()
        });
        const T = () => {
            e.$el.addClass(e.params.scrollbar.scrollbarDisabledClass), e.scrollbar.$el && e.scrollbar.$el.addClass(e.params.scrollbar.scrollbarDisabledClass), S()
        };
        Object.assign(e.scrollbar, {
            enable: () => {
                e.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass), e.scrollbar.$el && e.scrollbar.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass), C(), f(), p()
            }, disable: T, updateSize: f, setTranslate: p, init: C, destroy: S
        })
    }

    function te({swiper: e, extendParams: t, on: n}) {
        t({parallax: {enabled: !1}});
        const i = (t, n) => {
            const {rtl: i} = e, s = g(t), a = i ? -1 : 1, o = s.attr("data-swiper-parallax") || "0";
            let r = s.attr("data-swiper-parallax-x"), l = s.attr("data-swiper-parallax-y");
            const c = s.attr("data-swiper-parallax-scale"), d = s.attr("data-swiper-parallax-opacity");
            if (r || l ? (r = r || "0", l = l || "0") : e.isHorizontal() ? (r = o, l = "0") : (l = o, r = "0"), r = r.indexOf("%") >= 0 ? parseInt(r, 10) * n * a + "%" : r * n * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * n + "%" : l * n + "px", null != d) {
                const e = d - (d - 1) * (1 - Math.abs(n));
                s[0].style.opacity = e
            }
            if (null == c) s.transform(`translate3d(${r}, ${l}, 0px)`); else {
                const e = c - (c - 1) * (1 - Math.abs(n));
                s.transform(`translate3d(${r}, ${l}, 0px) scale(${e})`)
            }
        }, s = () => {
            const {$el: t, slides: n, progress: s, snapGrid: a} = e;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
                i(e, s)
            }), n.each((t, n) => {
                let o = t.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (o += Math.ceil(n / 2) - s * (a.length - 1)), o = Math.min(Math.max(o, -1), 1), g(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
                    i(e, o)
                })
            })
        };
        n("beforeInit", () => {
            e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
        }), n("init", () => {
            e.params.parallax.enabled && s()
        }), n("setTranslate", () => {
            e.params.parallax.enabled && s()
        }), n("setTransition", (t, n) => {
            e.params.parallax.enabled && ((t = e.params.speed) => {
                const {$el: n} = e;
                n.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
                    const n = g(e);
                    let i = parseInt(n.attr("data-swiper-parallax-duration"), 10) || t;
                    0 === t && (i = 0), n.transition(i)
                })
            })(n)
        })
    }

    function ne({swiper: e, extendParams: t, on: n, emit: i}) {
        const s = l();
        t({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }), e.zoom = {enabled: !1};
        let a, o, r, c = 1, d = !1;
        const u = {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
        }, h = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
        }, p = {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0};
        let f = 1;

        function m(e) {
            if (e.targetTouches.length < 2) return 1;
            const t = e.targetTouches[0].pageX, n = e.targetTouches[0].pageY, i = e.targetTouches[1].pageX,
                s = e.targetTouches[1].pageY;
            return Math.sqrt((i - t) ** 2 + (s - n) ** 2)
        }

        function v(t) {
            const n = e.support, i = e.params.zoom;
            if (o = !1, r = !1, !n.gestures) {
                if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                o = !0, u.scaleStart = m(t)
            }
            u.$slideEl && u.$slideEl.length || (u.$slideEl = g(t.target).closest("." + e.params.slideClass), 0 === u.$slideEl.length && (u.$slideEl = e.slides.eq(e.activeIndex)), u.$imageEl = u.$slideEl.find("." + i.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), u.$imageWrapEl = u.$imageEl.parent("." + i.containerClass), u.maxRatio = u.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== u.$imageWrapEl.length) ? (u.$imageEl && u.$imageEl.transition(0), d = !0) : u.$imageEl = void 0
        }

        function y(t) {
            const n = e.support, i = e.params.zoom, s = e.zoom;
            if (!n.gestures) {
                if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;
                r = !0, u.scaleMove = m(t)
            }
            u.$imageEl && 0 !== u.$imageEl.length ? (n.gestures ? s.scale = t.scale * c : s.scale = u.scaleMove / u.scaleStart * c, s.scale > u.maxRatio && (s.scale = u.maxRatio - 1 + (s.scale - u.maxRatio + 1) ** .5), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - (i.minRatio - s.scale + 1) ** .5), u.$imageEl.transform(`translate3d(0,0,0) scale(${s.scale})`)) : "gesturechange" === t.type && v(t)
        }

        function w(t) {
            const n = e.device, i = e.support, s = e.params.zoom, a = e.zoom;
            if (!i.gestures) {
                if (!o || !r) return;
                if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !n.android) return;
                o = !1, r = !1
            }
            u.$imageEl && 0 !== u.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, u.maxRatio), s.minRatio), u.$imageEl.transition(e.params.speed).transform(`translate3d(0,0,0) scale(${a.scale})`), c = a.scale, d = !1, 1 === a.scale && (u.$slideEl = void 0))
        }

        function x(t) {
            const n = e.zoom;
            if (!u.$imageEl || 0 === u.$imageEl.length) return;
            if (e.allowClick = !1, !h.isTouched || !u.$slideEl) return;
            h.isMoved || (h.width = u.$imageEl[0].offsetWidth, h.height = u.$imageEl[0].offsetHeight, h.startX = b(u.$imageWrapEl[0], "x") || 0, h.startY = b(u.$imageWrapEl[0], "y") || 0, u.slideWidth = u.$slideEl[0].offsetWidth, u.slideHeight = u.$slideEl[0].offsetHeight, u.$imageWrapEl.transition(0));
            const i = h.width * n.scale, s = h.height * n.scale;
            if (!(i < u.slideWidth && s < u.slideHeight)) {
                if (h.minX = Math.min(u.slideWidth / 2 - i / 2, 0), h.maxX = -h.minX, h.minY = Math.min(u.slideHeight / 2 - s / 2, 0), h.maxY = -h.minY, h.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, h.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !h.isMoved && !d) {
                    if (e.isHorizontal() && (Math.floor(h.minX) === Math.floor(h.startX) && h.touchesCurrent.x < h.touchesStart.x || Math.floor(h.maxX) === Math.floor(h.startX) && h.touchesCurrent.x > h.touchesStart.x)) return void (h.isTouched = !1);
                    if (!e.isHorizontal() && (Math.floor(h.minY) === Math.floor(h.startY) && h.touchesCurrent.y < h.touchesStart.y || Math.floor(h.maxY) === Math.floor(h.startY) && h.touchesCurrent.y > h.touchesStart.y)) return void (h.isTouched = !1)
                }
                t.cancelable && t.preventDefault(), t.stopPropagation(), h.isMoved = !0, h.currentX = h.touchesCurrent.x - h.touchesStart.x + h.startX, h.currentY = h.touchesCurrent.y - h.touchesStart.y + h.startY, h.currentX < h.minX && (h.currentX = h.minX + 1 - (h.minX - h.currentX + 1) ** .8), h.currentX > h.maxX && (h.currentX = h.maxX - 1 + (h.currentX - h.maxX + 1) ** .8), h.currentY < h.minY && (h.currentY = h.minY + 1 - (h.minY - h.currentY + 1) ** .8), h.currentY > h.maxY && (h.currentY = h.maxY - 1 + (h.currentY - h.maxY + 1) ** .8), p.prevPositionX || (p.prevPositionX = h.touchesCurrent.x), p.prevPositionY || (p.prevPositionY = h.touchesCurrent.y), p.prevTime || (p.prevTime = Date.now()), p.x = (h.touchesCurrent.x - p.prevPositionX) / (Date.now() - p.prevTime) / 2, p.y = (h.touchesCurrent.y - p.prevPositionY) / (Date.now() - p.prevTime) / 2, Math.abs(h.touchesCurrent.x - p.prevPositionX) < 2 && (p.x = 0), Math.abs(h.touchesCurrent.y - p.prevPositionY) < 2 && (p.y = 0), p.prevPositionX = h.touchesCurrent.x, p.prevPositionY = h.touchesCurrent.y, p.prevTime = Date.now(), u.$imageWrapEl.transform(`translate3d(${h.currentX}px, ${h.currentY}px,0)`)
            }
        }

        function E() {
            const t = e.zoom;
            u.$slideEl && e.previousIndex !== e.activeIndex && (u.$imageEl && u.$imageEl.transform("translate3d(0,0,0) scale(1)"), u.$imageWrapEl && u.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, c = 1, u.$slideEl = void 0, u.$imageEl = void 0, u.$imageWrapEl = void 0)
        }

        function C(t) {
            const n = e.zoom, i = e.params.zoom;
            if (u.$slideEl || (t && t.target && (u.$slideEl = g(t.target).closest("." + e.params.slideClass)), u.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? u.$slideEl = e.$wrapperEl.children("." + e.params.slideActiveClass) : u.$slideEl = e.slides.eq(e.activeIndex)), u.$imageEl = u.$slideEl.find("." + i.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), u.$imageWrapEl = u.$imageEl.parent("." + i.containerClass)), !u.$imageEl || 0 === u.$imageEl.length || !u.$imageWrapEl || 0 === u.$imageWrapEl.length) return;
            let a, o, r, l, d, p, f, m, v, y, b, w, x, E, C, S, T, $;
            e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), u.$slideEl.addClass("" + i.zoomedSlideClass), void 0 === h.touchesStart.x && t ? (a = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, o = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (a = h.touchesStart.x, o = h.touchesStart.y), n.scale = u.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, c = u.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, t ? (T = u.$slideEl[0].offsetWidth, $ = u.$slideEl[0].offsetHeight, r = u.$slideEl.offset().left + s.scrollX, l = u.$slideEl.offset().top + s.scrollY, d = r + T / 2 - a, p = l + $ / 2 - o, v = u.$imageEl[0].offsetWidth, y = u.$imageEl[0].offsetHeight, b = v * n.scale, w = y * n.scale, x = Math.min(T / 2 - b / 2, 0), E = Math.min($ / 2 - w / 2, 0), C = -x, S = -E, f = d * n.scale, m = p * n.scale, f < x && (f = x), f > C && (f = C), m < E && (m = E), m > S && (m = S)) : (f = 0, m = 0), u.$imageWrapEl.transition(300).transform(`translate3d(${f}px, ${m}px,0)`), u.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${n.scale})`)
        }

        function S() {
            const t = e.zoom, n = e.params.zoom;
            u.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? u.$slideEl = e.$wrapperEl.children("." + e.params.slideActiveClass) : u.$slideEl = e.slides.eq(e.activeIndex), u.$imageEl = u.$slideEl.find("." + n.containerClass).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), u.$imageWrapEl = u.$imageEl.parent("." + n.containerClass)), u.$imageEl && 0 !== u.$imageEl.length && u.$imageWrapEl && 0 !== u.$imageWrapEl.length && (e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), t.scale = 1, c = 1, u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), u.$slideEl.removeClass("" + n.zoomedSlideClass), u.$slideEl = void 0)
        }

        function T(t) {
            const n = e.zoom;
            n.scale && 1 !== n.scale ? S() : C(t)
        }

        function $() {
            const t = e.support;
            return {
                passiveListener: !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, activeListenerWithCapture: !t.passiveListener || {passive: !1, capture: !0}
            }
        }

        function M() {
            return "." + e.params.slideClass
        }

        function k(t) {
            const {passiveListener: n} = $(), i = M();
            e.$wrapperEl[t]("gesturestart", i, v, n), e.$wrapperEl[t]("gesturechange", i, y, n), e.$wrapperEl[t]("gestureend", i, w, n)
        }

        function P() {
            a || (a = !0, k("on"))
        }

        function L() {
            a && (a = !1, k("off"))
        }

        function A() {
            const t = e.zoom;
            if (t.enabled) return;
            t.enabled = !0;
            const n = e.support, {passiveListener: i, activeListenerWithCapture: s} = $(), a = M();
            n.gestures ? (e.$wrapperEl.on(e.touchEvents.start, P, i), e.$wrapperEl.on(e.touchEvents.end, L, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, a, v, i), e.$wrapperEl.on(e.touchEvents.move, a, y, s), e.$wrapperEl.on(e.touchEvents.end, a, w, i), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, a, w, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, x, s)
        }

        function O() {
            const t = e.zoom;
            if (!t.enabled) return;
            const n = e.support;
            t.enabled = !1;
            const {passiveListener: i, activeListenerWithCapture: s} = $(), a = M();
            n.gestures ? (e.$wrapperEl.off(e.touchEvents.start, P, i), e.$wrapperEl.off(e.touchEvents.end, L, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, a, v, i), e.$wrapperEl.off(e.touchEvents.move, a, y, s), e.$wrapperEl.off(e.touchEvents.end, a, w, i), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, a, w, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, x, s)
        }

        Object.defineProperty(e.zoom, "scale", {
            get: () => f, set(e) {
                if (f !== e) {
                    const t = u.$imageEl ? u.$imageEl[0] : void 0, n = u.$slideEl ? u.$slideEl[0] : void 0;
                    i("zoomChange", e, t, n)
                }
                f = e
            }
        }), n("init", () => {
            e.params.zoom.enabled && A()
        }), n("destroy", () => {
            O()
        }), n("touchStart", (t, n) => {
            e.zoom.enabled && function (t) {
                const n = e.device;
                u.$imageEl && 0 !== u.$imageEl.length && (h.isTouched || (n.android && t.cancelable && t.preventDefault(), h.isTouched = !0, h.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, h.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
            }(n)
        }), n("touchEnd", (t, n) => {
            e.zoom.enabled && function () {
                const t = e.zoom;
                if (!u.$imageEl || 0 === u.$imageEl.length) return;
                if (!h.isTouched || !h.isMoved) return h.isTouched = !1, void (h.isMoved = !1);
                h.isTouched = !1, h.isMoved = !1;
                let n = 300, i = 300;
                const s = p.x * n, a = h.currentX + s, o = p.y * i, r = h.currentY + o;
                0 !== p.x && (n = Math.abs((a - h.currentX) / p.x)), 0 !== p.y && (i = Math.abs((r - h.currentY) / p.y));
                const l = Math.max(n, i);
                h.currentX = a, h.currentY = r;
                const c = h.width * t.scale, d = h.height * t.scale;
                h.minX = Math.min(u.slideWidth / 2 - c / 2, 0), h.maxX = -h.minX, h.minY = Math.min(u.slideHeight / 2 - d / 2, 0), h.maxY = -h.minY, h.currentX = Math.max(Math.min(h.currentX, h.maxX), h.minX), h.currentY = Math.max(Math.min(h.currentY, h.maxY), h.minY), u.$imageWrapEl.transition(l).transform(`translate3d(${h.currentX}px, ${h.currentY}px,0)`)
            }()
        }), n("doubleTap", (t, n) => {
            !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && T(n)
        }), n("transitionEnd", () => {
            e.zoom.enabled && e.params.zoom.enabled && E()
        }), n("slideChange", () => {
            e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && E()
        }), Object.assign(e.zoom, {enable: A, disable: O, in: C, out: S, toggle: T})
    }

    function ie({swiper: e, extendParams: t, on: n, emit: i}) {
        t({
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        }), e.lazy = {};
        let s = !1, a = !1;

        function o(t, n = !0) {
            const s = e.params.lazy;
            if (void 0 === t) return;
            if (0 === e.slides.length) return;
            const a = e.virtual && e.params.virtual.enabled ? e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`) : e.slides.eq(t),
                r = a.find(`.${s.elementClass}:not(.${s.loadedClass}):not(.${s.loadingClass})`);
            !a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || r.push(a[0]), 0 !== r.length && r.each(t => {
                const r = g(t);
                r.addClass(s.loadingClass);
                const l = r.attr("data-background"), c = r.attr("data-src"), d = r.attr("data-srcset"),
                    u = r.attr("data-sizes"), h = r.parent("picture");
                e.loadImage(r[0], c || l, d, u, !1, () => {
                    if (null != e && e && (!e || e.params) && !e.destroyed) {
                        if (l ? (r.css("background-image", `url("${l}")`), r.removeAttr("data-background")) : (d && (r.attr("srcset", d), r.removeAttr("data-srcset")), u && (r.attr("sizes", u), r.removeAttr("data-sizes")), h.length && h.children("source").each(e => {
                            const t = g(e);
                            t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                        }), c && (r.attr("src", c), r.removeAttr("data-src"))), r.addClass(s.loadedClass).removeClass(s.loadingClass), a.find("." + s.preloaderClass).remove(), e.params.loop && n) {
                            const t = a.attr("data-swiper-slide-index");
                            if (a.hasClass(e.params.slideDuplicateClass)) {
                                o(e.$wrapperEl.children(`[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`).index(), !1)
                            } else {
                                o(e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`).index(), !1)
                            }
                        }
                        i("lazyImageReady", a[0], r[0]), e.params.autoHeight && e.updateAutoHeight()
                    }
                }), i("lazyImageLoad", a[0], r[0])
            })
        }

        function r() {
            const {$wrapperEl: t, params: n, slides: i, activeIndex: s} = e, r = e.virtual && n.virtual.enabled,
                l = n.lazy;
            let c = n.slidesPerView;

            function d(e) {
                if (r) {
                    if (t.children(`.${n.slideClass}[data-swiper-slide-index="${e}"]`).length) return !0
                } else if (i[e]) return !0;
                return !1
            }

            function u(e) {
                return r ? g(e).attr("data-swiper-slide-index") : g(e).index()
            }

            if ("auto" === c && (c = 0), a || (a = !0), e.params.watchSlidesProgress) t.children("." + n.slideVisibleClass).each(e => {
                o(r ? g(e).attr("data-swiper-slide-index") : g(e).index())
            }); else if (c > 1) for (let e = s; e < s + c; e += 1) d(e) && o(e); else o(s);
            if (l.loadPrevNext) if (c > 1 || l.loadPrevNextAmount && l.loadPrevNextAmount > 1) {
                const e = l.loadPrevNextAmount, t = Math.ceil(c), n = Math.min(s + t + Math.max(e, t), i.length),
                    a = Math.max(s - Math.max(t, e), 0);
                for (let e = s + t; e < n; e += 1) d(e) && o(e);
                for (let e = a; e < s; e += 1) d(e) && o(e)
            } else {
                const e = t.children("." + n.slideNextClass);
                e.length > 0 && o(u(e));
                const i = t.children("." + n.slidePrevClass);
                i.length > 0 && o(u(i))
            }
        }

        function c() {
            const t = l();
            if (!e || e.destroyed) return;
            const n = e.params.lazy.scrollingElement ? g(e.params.lazy.scrollingElement) : g(t), i = n[0] === t,
                a = i ? t.innerWidth : n[0].offsetWidth, o = i ? t.innerHeight : n[0].offsetHeight,
                d = e.$el.offset(), {rtlTranslate: u} = e;
            let h = !1;
            u && (d.left -= e.$el[0].scrollLeft);
            const p = [[d.left, d.top], [d.left + e.width, d.top], [d.left, d.top + e.height], [d.left + e.width, d.top + e.height]];
            for (let e = 0; e < p.length; e += 1) {
                const t = p[e];
                if (t[0] >= 0 && t[0] <= a && t[1] >= 0 && t[1] <= o) {
                    if (0 === t[0] && 0 === t[1]) continue;
                    h = !0
                }
            }
            const f = !("touchstart" !== e.touchEvents.start || !e.support.passiveListener || !e.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            h ? (r(), n.off("scroll", c, f)) : s || (s = !0, n.on("scroll", c, f))
        }

        n("beforeInit", () => {
            e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
        }), n("init", () => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? c() : r())
        }), n("scroll", () => {
            e.params.freeMode && e.params.freeMode.enabled && !e.params.freeMode.sticky && r()
        }), n("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? c() : r())
        }), n("transitionStart", () => {
            e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !a) && (e.params.lazy.checkInView ? c() : r())
        }), n("transitionEnd", () => {
            e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && (e.params.lazy.checkInView ? c() : r())
        }), n("slideChange", () => {
            const {lazy: t, cssMode: n, watchSlidesProgress: i, touchReleaseOnEdges: s, resistanceRatio: a} = e.params;
            t.enabled && (n || i && (s || 0 === a)) && r()
        }), n("destroy", () => {
            e.$el && e.$el.find("." + e.params.lazy.loadingClass).removeClass(e.params.lazy.loadingClass)
        }), Object.assign(e.lazy, {load: r, loadInSlide: o})
    }

    function se({swiper: e, extendParams: t, on: n}) {
        function i(e, t) {
            const n = function () {
                let e, t, n;
                return (i, s) => {
                    for (t = -1, e = i.length; e - t > 1;) n = e + t >> 1, i[n] <= s ? t = n : e = n;
                    return e
                }
            }();
            let i, s;
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                return e ? (s = n(this.x, e), i = s - 1, (e - this.x[i]) * (this.y[s] - this.y[i]) / (this.x[s] - this.x[i]) + this.y[i]) : 0
            }, this
        }

        function s() {
            e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
        }

        t({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }), e.controller = {control: void 0}, n("beforeInit", () => {
            e.controller.control = e.params.controller.control
        }), n("update", () => {
            s()
        }), n("resize", () => {
            s()
        }), n("observerUpdate", () => {
            s()
        }), n("setTranslate", (t, n, i) => {
            e.controller.control && e.controller.setTranslate(n, i)
        }), n("setTransition", (t, n, i) => {
            e.controller.control && e.controller.setTransition(n, i)
        }), Object.assign(e.controller, {
            setTranslate: function (t, n) {
                const s = e.controller.control;
                let a, o;
                const r = e.constructor;

                function l(t) {
                    const n = e.rtlTranslate ? -e.translate : e.translate;
                    "slide" === e.params.controller.by && (!function (t) {
                        e.controller.spline || (e.controller.spline = e.params.loop ? new i(e.slidesGrid, t.slidesGrid) : new i(e.snapGrid, t.snapGrid))
                    }(t), o = -e.controller.spline.interpolate(-n)), o && "container" !== e.params.controller.by || (a = (t.maxTranslate() - t.minTranslate()) / (e.maxTranslate() - e.minTranslate()), o = (n - e.minTranslate()) * a + t.minTranslate()), e.params.controller.inverse && (o = t.maxTranslate() - o), t.updateProgress(o), t.setTranslate(o, e), t.updateActiveIndex(), t.updateSlidesClasses()
                }

                if (Array.isArray(s)) for (let e = 0; e < s.length; e += 1) s[e] !== n && s[e] instanceof r && l(s[e]); else s instanceof r && n !== s && l(s)
            }, setTransition: function (t, n) {
                const i = e.constructor, s = e.controller.control;
                let a;

                function o(n) {
                    n.setTransition(t, e), 0 !== t && (n.transitionStart(), n.params.autoHeight && v(() => {
                        n.updateAutoHeight()
                    }), n.$wrapperEl.transitionEnd(() => {
                        s && (n.params.loop && "slide" === e.params.controller.by && n.loopFix(), n.transitionEnd())
                    }))
                }

                if (Array.isArray(s)) for (a = 0; a < s.length; a += 1) s[a] !== n && s[a] instanceof i && o(s[a]); else s instanceof i && n !== s && o(s)
            }
        })
    }

    function ae({swiper: e, extendParams: t, on: n}) {
        t({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null
            }
        }), e.a11y = {clicked: !1};
        let i = null;

        function s(e) {
            const t = i;
            0 !== t.length && (t.html(""), t.html(e))
        }

        function a(e) {
            e.attr("tabIndex", "0")
        }

        function o(e) {
            e.attr("tabIndex", "-1")
        }

        function r(e, t) {
            e.attr("role", t)
        }

        function l(e, t) {
            e.attr("aria-roledescription", t)
        }

        function c(e, t) {
            e.attr("aria-label", t)
        }

        function d(e) {
            e.attr("aria-disabled", !0)
        }

        function u(e) {
            e.attr("aria-disabled", !1)
        }

        function h(t) {
            if (13 !== t.keyCode && 32 !== t.keyCode) return;
            const n = e.params.a11y, i = g(t.target);
            e.navigation && e.navigation.$nextEl && i.is(e.navigation.$nextEl) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? s(n.lastSlideMessage) : s(n.nextSlideMessage)), e.navigation && e.navigation.$prevEl && i.is(e.navigation.$prevEl) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? s(n.firstSlideMessage) : s(n.prevSlideMessage)), e.pagination && i.is(J(e.params.pagination.bulletClass)) && i[0].click()
        }

        function p() {
            return e.pagination && e.pagination.bullets && e.pagination.bullets.length
        }

        function f() {
            return p() && e.params.pagination.clickable
        }

        const m = (e, t, n) => {
            a(e), "BUTTON" !== e[0].tagName && (r(e, "button"), e.on("keydown", h)), c(e, n), function (e, t) {
                e.attr("aria-controls", t)
            }(e, t)
        }, v = () => {
            e.a11y.clicked = !0
        }, y = () => {
            e.a11y.clicked = !1
        }, b = t => {
            if (e.a11y.clicked) return;
            const n = t.target.closest("." + e.params.slideClass);
            if (!n || !e.slides.includes(n)) return;
            const i = e.slides.indexOf(n) === e.activeIndex,
                s = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(n);
            i || s || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0, e.slideTo(e.slides.indexOf(n), 0))
        }, w = () => {
            const t = e.params.a11y;
            t.itemRoleDescriptionMessage && l(g(e.slides), t.itemRoleDescriptionMessage), t.slideRole && r(g(e.slides), t.slideRole);
            const n = e.params.loop ? e.slides.filter(t => !t.classList.contains(e.params.slideDuplicateClass)).length : e.slides.length;
            t.slideLabelMessage && e.slides.each((i, s) => {
                const a = g(i), o = e.params.loop ? parseInt(a.attr("data-swiper-slide-index"), 10) : s;
                c(a, t.slideLabelMessage.replace(/\{\{index\}\}/, o + 1).replace(/\{\{slidesLength\}\}/, n))
            })
        }, x = () => {
            const t = e.params.a11y;
            e.$el.append(i);
            const n = e.$el;
            t.containerRoleDescriptionMessage && l(n, t.containerRoleDescriptionMessage), t.containerMessage && c(n, t.containerMessage);
            const s = e.$wrapperEl, a = t.id || s.attr("id") || "swiper-wrapper-" + function (e = 16) {
                return "x".repeat(e).replace(/x/g, () => Math.round(16 * Math.random()).toString(16))
            }(16), o = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
            var r;
            let d, u;
            r = a, s.attr("id", r), function (e, t) {
                e.attr("aria-live", t)
            }(s, o), w(), e.navigation && e.navigation.$nextEl && (d = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (u = e.navigation.$prevEl), d && d.length && m(d, a, t.nextSlideMessage), u && u.length && m(u, a, t.prevSlideMessage), f() && e.pagination.$el.on("keydown", J(e.params.pagination.bulletClass), h), e.$el.on("focus", b, !0), e.$el.on("pointerdown", v, !0), e.$el.on("pointerup", y, !0)
        };
        n("beforeInit", () => {
            i = g(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        }), n("afterInit", () => {
            e.params.a11y.enabled && x()
        }), n("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
            e.params.a11y.enabled && w()
        }), n("fromEdge toEdge afterInit lock unlock", () => {
            e.params.a11y.enabled && function () {
                if (e.params.loop || e.params.rewind || !e.navigation) return;
                const {$nextEl: t, $prevEl: n} = e.navigation;
                n && n.length > 0 && (e.isBeginning ? (d(n), o(n)) : (u(n), a(n))), t && t.length > 0 && (e.isEnd ? (d(t), o(t)) : (u(t), a(t)))
            }()
        }), n("paginationUpdate", () => {
            e.params.a11y.enabled && function () {
                const t = e.params.a11y;
                p() && e.pagination.bullets.each(n => {
                    const i = g(n);
                    e.params.pagination.clickable && (a(i), e.params.pagination.renderBullet || (r(i, "button"), c(i, t.paginationBulletMessage.replace(/\{\{index\}\}/, i.index() + 1)))), i.is("." + e.params.pagination.bulletActiveClass) ? i.attr("aria-current", "true") : i.removeAttr("aria-current")
                })
            }()
        }), n("destroy", () => {
            e.params.a11y.enabled && function () {
                let t, n;
                i && i.length > 0 && i.remove(), e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl), t && t.off("keydown", h), n && n.off("keydown", h), f() && e.pagination.$el.off("keydown", J(e.params.pagination.bulletClass), h), e.$el.off("focus", b, !0), e.$el.off("pointerdown", v, !0), e.$el.off("pointerup", y, !0)
            }()
        })
    }

    function oe({swiper: e, extendParams: t, on: n}) {
        t({history: {enabled: !1, root: "", replaceState: !1, key: "slides", keepQuery: !1}});
        let i = !1, s = {};
        const a = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            o = e => {
                const t = l();
                let n;
                n = e ? new URL(e) : t.location;
                const i = n.pathname.slice(1).split("/").filter(e => "" !== e), s = i.length;
                return {key: i[s - 2], value: i[s - 1]}
            }, r = (t, n) => {
                const s = l();
                if (!i || !e.params.history.enabled) return;
                let o;
                o = e.params.url ? new URL(e.params.url) : s.location;
                const r = e.slides.eq(n);
                let c = a(r.attr("data-history"));
                if (e.params.history.root.length > 0) {
                    let n = e.params.history.root;
                    "/" === n[n.length - 1] && (n = n.slice(0, n.length - 1)), c = `${n}/${t}/${c}`
                } else o.pathname.includes(t) || (c = `${t}/${c}`);
                e.params.history.keepQuery && (c += o.search);
                const d = s.history.state;
                d && d.value === c || (e.params.history.replaceState ? s.history.replaceState({value: c}, null, c) : s.history.pushState({value: c}, null, c))
            }, c = (t, n, i) => {
                if (n) for (let s = 0, o = e.slides.length; s < o; s += 1) {
                    const o = e.slides.eq(s);
                    if (a(o.attr("data-history")) === n && !o.hasClass(e.params.slideDuplicateClass)) {
                        const n = o.index();
                        e.slideTo(n, t, i)
                    }
                } else e.slideTo(0, t, i)
            }, d = () => {
                s = o(e.params.url), c(e.params.speed, s.value, !1)
            };
        n("init", () => {
            e.params.history.enabled && (() => {
                const t = l();
                if (e.params.history) {
                    if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
                    i = !0, s = o(e.params.url), (s.key || s.value) && (c(0, s.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", d))
                }
            })()
        }), n("destroy", () => {
            e.params.history.enabled && (() => {
                const t = l();
                e.params.history.replaceState || t.removeEventListener("popstate", d)
            })()
        }), n("transitionEnd _freeModeNoMomentumRelease", () => {
            i && r(e.params.history.key, e.activeIndex)
        }), n("slideChange", () => {
            i && e.params.cssMode && r(e.params.history.key, e.activeIndex)
        })
    }

    function re({swiper: e, extendParams: t, emit: n, on: i}) {
        let s = !1;
        const a = o(), r = l();
        t({hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}});
        const c = () => {
            n("hashChange");
            const t = a.location.hash.replace("#", "");
            if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                const n = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                if (void 0 === n) return;
                e.slideTo(n)
            }
        }, d = () => {
            if (s && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && r.history && r.history.replaceState) r.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""), n("hashSet"); else {
                const t = e.slides.eq(e.activeIndex), i = t.attr("data-hash") || t.attr("data-history");
                a.location.hash = i || "", n("hashSet")
            }
        };
        i("init", () => {
            e.params.hashNavigation.enabled && (() => {
                if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
                s = !0;
                const t = a.location.hash.replace("#", "");
                if (t) {
                    const n = 0;
                    for (let i = 0, s = e.slides.length; i < s; i += 1) {
                        const s = e.slides.eq(i);
                        if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
                            const t = s.index();
                            e.slideTo(t, n, e.params.runCallbacksOnInit, !0)
                        }
                    }
                }
                e.params.hashNavigation.watchState && g(r).on("hashchange", c)
            })()
        }), i("destroy", () => {
            e.params.hashNavigation.enabled && e.params.hashNavigation.watchState && g(r).off("hashchange", c)
        }), i("transitionEnd _freeModeNoMomentumRelease", () => {
            s && d()
        }), i("slideChange", () => {
            s && e.params.cssMode && d()
        })
    }

    function le({swiper: e, extendParams: t, on: n, emit: i}) {
        let s;

        function a() {
            if (!e.size) return e.autoplay.running = !1, void (e.autoplay.paused = !1);
            const t = e.slides.eq(e.activeIndex);
            let n = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(s), s = v(() => {
                let t;
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? l() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), i("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), i("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? l() : (t = e.slideTo(0, e.params.speed, !0, !0), i("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), i("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && a()
            }, n)
        }

        function r() {
            return void 0 === s && (!e.autoplay.running && (e.autoplay.running = !0, i("autoplayStart"), a(), !0))
        }

        function l() {
            return !!e.autoplay.running && (void 0 !== s && (s && (clearTimeout(s), s = void 0), e.autoplay.running = !1, i("autoplayStop"), !0))
        }

        function c(t) {
            e.autoplay.running && (e.autoplay.paused || (s && clearTimeout(s), e.autoplay.paused = !0, 0 !== t && e.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(t => {
                e.$wrapperEl[0].addEventListener(t, u)
            }) : (e.autoplay.paused = !1, a())))
        }

        function d() {
            const t = o();
            "hidden" === t.visibilityState && e.autoplay.running && c(), "visible" === t.visibilityState && e.autoplay.paused && (a(), e.autoplay.paused = !1)
        }

        function u(t) {
            e && !e.destroyed && e.$wrapperEl && t.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(t => {
                e.$wrapperEl[0].removeEventListener(t, u)
            }), e.autoplay.paused = !1, e.autoplay.running ? a() : l())
        }

        function h() {
            e.params.autoplay.disableOnInteraction ? l() : (i("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach(t => {
                e.$wrapperEl[0].removeEventListener(t, u)
            })
        }

        function p() {
            e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, i("autoplayResume"), a())
        }

        e.autoplay = {running: !1, paused: !1}, t({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        }), n("init", () => {
            if (e.params.autoplay.enabled) {
                r();
                o().addEventListener("visibilitychange", d), e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", h), e.$el.on("mouseleave", p))
            }
        }), n("beforeTransitionStart", (t, n, i) => {
            e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(n) : l())
        }), n("sliderFirstMove", () => {
            e.autoplay.running && (e.params.autoplay.disableOnInteraction ? l() : c())
        }), n("touchEnd", () => {
            e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && a()
        }), n("destroy", () => {
            e.$el.off("mouseenter", h), e.$el.off("mouseleave", p), e.autoplay.running && l();
            o().removeEventListener("visibilitychange", d)
        }), Object.assign(e.autoplay, {pause: c, run: a, start: r, stop: l})
    }

    function ce({swiper: e, extendParams: t, on: n}) {
        t({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let i = !1, s = !1;

        function a() {
            const t = e.thumbs.swiper;
            if (!t || t.destroyed) return;
            const n = t.clickedIndex, i = t.clickedSlide;
            if (i && g(i).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
            if (null == n) return;
            let s;
            if (s = t.params.loop ? parseInt(g(t.clickedSlide).attr("data-swiper-slide-index"), 10) : n, e.params.loop) {
                let t = e.activeIndex;
                e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, t = e.activeIndex);
                const n = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${s}"]`).eq(0).index(),
                    i = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${s}"]`).eq(0).index();
                s = void 0 === n ? i : void 0 === i ? n : i - t < t - n ? i : n
            }
            e.slideTo(s)
        }

        function o() {
            const {thumbs: t} = e.params;
            if (i) return !1;
            i = !0;
            const n = e.constructor;
            if (t.swiper instanceof n) e.thumbs.swiper = t.swiper, Object.assign(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), Object.assign(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }); else if (w(t.swiper)) {
                const i = Object.assign({}, t.swiper);
                Object.assign(i, {watchSlidesProgress: !0, slideToClickedSlide: !1}), e.thumbs.swiper = new n(i), s = !0
            }
            return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", a), !0
        }

        function r(t) {
            const n = e.thumbs.swiper;
            if (!n || n.destroyed) return;
            const i = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView;
            let s = 1;
            const a = e.params.thumbs.slideThumbActiveClass;
            if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (s = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (s = 1), s = Math.floor(s), n.slides.removeClass(a), n.params.loop || n.params.virtual && n.params.virtual.enabled) for (let t = 0; t < s; t += 1) n.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex + t}"]`).addClass(a); else for (let t = 0; t < s; t += 1) n.slides.eq(e.realIndex + t).addClass(a);
            const o = e.params.thumbs.autoScrollOffset, r = o && !n.params.loop;
            if (e.realIndex !== n.realIndex || r) {
                let s, a, l = n.activeIndex;
                if (n.params.loop) {
                    n.slides.eq(l).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, l = n.activeIndex);
                    const t = n.slides.eq(l).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),
                        i = n.slides.eq(l).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();
                    s = void 0 === t ? i : void 0 === i ? t : i - l == l - t ? n.params.slidesPerGroup > 1 ? i : l : i - l < l - t ? i : t, a = e.activeIndex > e.previousIndex ? "next" : "prev"
                } else s = e.realIndex, a = s > e.previousIndex ? "next" : "prev";
                r && (s += "next" === a ? o : -1 * o), n.visibleSlidesIndexes && n.visibleSlidesIndexes.indexOf(s) < 0 && (n.params.centeredSlides ? s = s > l ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : s > l && n.params.slidesPerGroup, n.slideTo(s, t ? 0 : void 0))
            }
        }

        e.thumbs = {swiper: null}, n("beforeInit", () => {
            const {thumbs: t} = e.params;
            t && t.swiper && (o(), r(!0))
        }), n("slideChange update resize observerUpdate", () => {
            r()
        }), n("setTransition", (t, n) => {
            const i = e.thumbs.swiper;
            i && !i.destroyed && i.setTransition(n)
        }), n("beforeDestroy", () => {
            const t = e.thumbs.swiper;
            t && !t.destroyed && s && t.destroy()
        }), Object.assign(e.thumbs, {init: o, update: r})
    }

    function de({swiper: e, extendParams: t, emit: n, once: i}) {
        t({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }), Object.assign(e, {
            freeMode: {
                onTouchStart: function () {
                    const t = e.getTranslate();
                    e.setTranslate(t), e.setTransition(0), e.touchEventsData.velocities.length = 0, e.freeMode.onTouchEnd({currentPos: e.rtl ? e.translate : -e.translate})
                }, onTouchMove: function () {
                    const {touchEventsData: t, touches: n} = e;
                    0 === t.velocities.length && t.velocities.push({
                        position: n[e.isHorizontal() ? "startX" : "startY"],
                        time: t.touchStartTime
                    }), t.velocities.push({position: n[e.isHorizontal() ? "currentX" : "currentY"], time: y()})
                }, onTouchEnd: function ({currentPos: t}) {
                    const {params: s, $wrapperEl: a, rtlTranslate: o, snapGrid: r, touchEventsData: l} = e,
                        c = y() - l.touchStartTime;
                    if (t < -e.minTranslate()) e.slideTo(e.activeIndex); else if (t > -e.maxTranslate()) e.slides.length < r.length ? e.slideTo(r.length - 1) : e.slideTo(e.slides.length - 1); else {
                        if (s.freeMode.momentum) {
                            if (l.velocities.length > 1) {
                                const t = l.velocities.pop(), n = l.velocities.pop(), i = t.position - n.position,
                                    a = t.time - n.time;
                                e.velocity = i / a, e.velocity /= 2, Math.abs(e.velocity) < s.freeMode.minimumVelocity && (e.velocity = 0), (a > 150 || y() - t.time > 300) && (e.velocity = 0)
                            } else e.velocity = 0;
                            e.velocity *= s.freeMode.momentumVelocityRatio, l.velocities.length = 0;
                            let t = 1e3 * s.freeMode.momentumRatio;
                            const c = e.velocity * t;
                            let d = e.translate + c;
                            o && (d = -d);
                            let u, h = !1;
                            const p = 20 * Math.abs(e.velocity) * s.freeMode.momentumBounceRatio;
                            let f;
                            if (d < e.maxTranslate()) s.freeMode.momentumBounce ? (d + e.maxTranslate() < -p && (d = e.maxTranslate() - p), u = e.maxTranslate(), h = !0, l.allowMomentumBounce = !0) : d = e.maxTranslate(), s.loop && s.centeredSlides && (f = !0); else if (d > e.minTranslate()) s.freeMode.momentumBounce ? (d - e.minTranslate() > p && (d = e.minTranslate() + p), u = e.minTranslate(), h = !0, l.allowMomentumBounce = !0) : d = e.minTranslate(), s.loop && s.centeredSlides && (f = !0); else if (s.freeMode.sticky) {
                                let t;
                                for (let e = 0; e < r.length; e += 1) if (r[e] > -d) {
                                    t = e;
                                    break
                                }
                                d = Math.abs(r[t] - d) < Math.abs(r[t - 1] - d) || "next" === e.swipeDirection ? r[t] : r[t - 1], d = -d
                            }
                            if (f && i("transitionEnd", () => {
                                e.loopFix()
                            }), 0 !== e.velocity) {
                                if (t = o ? Math.abs((-d - e.translate) / e.velocity) : Math.abs((d - e.translate) / e.velocity), s.freeMode.sticky) {
                                    const n = Math.abs((o ? -d : d) - e.translate),
                                        i = e.slidesSizesGrid[e.activeIndex];
                                    t = n < i ? s.speed : n < 2 * i ? 1.5 * s.speed : 2.5 * s.speed
                                }
                            } else if (s.freeMode.sticky) return void e.slideToClosest();
                            s.freeMode.momentumBounce && h ? (e.updateProgress(u), e.setTransition(t), e.setTranslate(d), e.transitionStart(!0, e.swipeDirection), e.animating = !0, a.transitionEnd(() => {
                                e && !e.destroyed && l.allowMomentumBounce && (n("momentumBounce"), e.setTransition(s.speed), setTimeout(() => {
                                    e.setTranslate(u), a.transitionEnd(() => {
                                        e && !e.destroyed && e.transitionEnd()
                                    })
                                }, 0))
                            })) : e.velocity ? (n("_freeModeNoMomentumRelease"), e.updateProgress(d), e.setTransition(t), e.setTranslate(d), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, a.transitionEnd(() => {
                                e && !e.destroyed && e.transitionEnd()
                            }))) : e.updateProgress(d), e.updateActiveIndex(), e.updateSlidesClasses()
                        } else {
                            if (s.freeMode.sticky) return void e.slideToClosest();
                            s.freeMode && n("_freeModeNoMomentumRelease")
                        }
                        (!s.freeMode.momentum || c >= s.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
                    }
                }
            }
        })
    }

    function ue({swiper: e, extendParams: t}) {
        let n, i, s;
        t({grid: {rows: 1, fill: "column"}});
        e.grid = {
            initSlides: t => {
                const {slidesPerView: a} = e.params, {rows: o, fill: r} = e.params.grid;
                i = n / o, s = Math.floor(t / o), n = Math.floor(t / o) === t / o ? t : Math.ceil(t / o) * o, "auto" !== a && "row" === r && (n = Math.max(n, a * o))
            }, updateSlide: (t, a, o, r) => {
                const {slidesPerGroup: l, spaceBetween: c} = e.params, {rows: d, fill: u} = e.params.grid;
                let h, p, f;
                if ("row" === u && l > 1) {
                    const e = Math.floor(t / (l * d)), i = t - d * l * e,
                        s = 0 === e ? l : Math.min(Math.ceil((o - e * d * l) / d), l);
                    f = Math.floor(i / s), p = i - f * s + e * l, h = p + f * n / d, a.css({
                        "-webkit-order": h,
                        order: h
                    })
                } else "column" === u ? (p = Math.floor(t / d), f = t - p * d, (p > s || p === s && f === d - 1) && (f += 1, f >= d && (f = 0, p += 1))) : (f = Math.floor(t / i), p = t - f * i);
                a.css(r("margin-top"), 0 !== f ? c && c + "px" : "")
            }, updateWrapperSize: (t, i, s) => {
                const {spaceBetween: a, centeredSlides: o, roundLengths: r} = e.params, {rows: l} = e.params.grid;
                if (e.virtualSize = (t + a) * n, e.virtualSize = Math.ceil(e.virtualSize / l) - a, e.$wrapperEl.css({[s("width")]: e.virtualSize + a + "px"}), o) {
                    i.splice(0, i.length);
                    const t = [];
                    for (let n = 0; n < i.length; n += 1) {
                        let s = i[n];
                        r && (s = Math.floor(s)), i[n] < e.virtualSize + i[0] && t.push(s)
                    }
                    i.push(...t)
                }
            }
        }
    }

    function he(e) {
        const t = this, {$wrapperEl: n, params: i} = t;
        if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && n.append(e[t]); else n.append(e);
        i.loop && t.loopCreate(), i.observer || t.update()
    }

    function pe(e) {
        const t = this, {params: n, $wrapperEl: i, activeIndex: s} = t;
        n.loop && t.loopDestroy();
        let a = s + 1;
        if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && i.prepend(e[t]);
            a = s + e.length
        } else i.prepend(e);
        n.loop && t.loopCreate(), n.observer || t.update(), t.slideTo(a, 0, !1)
    }

    function fe(e, t) {
        const n = this, {$wrapperEl: i, params: s, activeIndex: a} = n;
        let o = a;
        s.loop && (o -= n.loopedSlides, n.loopDestroy(), n.slides = i.children("." + s.slideClass));
        const r = n.slides.length;
        if (e <= 0) return void n.prependSlide(t);
        if (e >= r) return void n.appendSlide(t);
        let l = o > e ? o + 1 : o;
        const c = [];
        for (let t = r - 1; t >= e; t -= 1) {
            const e = n.slides.eq(t);
            e.remove(), c.unshift(e)
        }
        if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && i.append(t[e]);
            l = o > e ? o + t.length : o
        } else i.append(t);
        for (let e = 0; e < c.length; e += 1) i.append(c[e]);
        s.loop && n.loopCreate(), s.observer || n.update(), s.loop ? n.slideTo(l + n.loopedSlides, 0, !1) : n.slideTo(l, 0, !1)
    }

    function me(e) {
        const t = this, {params: n, $wrapperEl: i, activeIndex: s} = t;
        let a = s;
        n.loop && (a -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + n.slideClass));
        let o, r = a;
        if ("object" == typeof e && "length" in e) {
            for (let n = 0; n < e.length; n += 1) o = e[n], t.slides[o] && t.slides.eq(o).remove(), o < r && (r -= 1);
            r = Math.max(r, 0)
        } else o = e, t.slides[o] && t.slides.eq(o).remove(), o < r && (r -= 1), r = Math.max(r, 0);
        n.loop && t.loopCreate(), n.observer || t.update(), n.loop ? t.slideTo(r + t.loopedSlides, 0, !1) : t.slideTo(r, 0, !1)
    }

    function ge() {
        const e = this, t = [];
        for (let n = 0; n < e.slides.length; n += 1) t.push(n);
        e.removeSlide(t)
    }

    function ve({swiper: e}) {
        Object.assign(e, {
            appendSlide: he.bind(e),
            prependSlide: pe.bind(e),
            addSlide: fe.bind(e),
            removeSlide: me.bind(e),
            removeAllSlides: ge.bind(e)
        })
    }

    function ye(e) {
        const {
            effect: t,
            swiper: n,
            on: i,
            setTranslate: s,
            setTransition: a,
            overwriteParams: o,
            perspective: r,
            recreateShadows: l,
            getEffectParams: c
        } = e;
        let d;
        i("beforeInit", () => {
            if (n.params.effect !== t) return;
            n.classNames.push(`${n.params.containerModifierClass}${t}`), r && r() && n.classNames.push(n.params.containerModifierClass + "3d");
            const e = o ? o() : {};
            Object.assign(n.params, e), Object.assign(n.originalParams, e)
        }), i("setTranslate", () => {
            n.params.effect === t && s()
        }), i("setTransition", (e, i) => {
            n.params.effect === t && a(i)
        }), i("transitionEnd", () => {
            if (n.params.effect === t && l) {
                if (!c || !c().slideShadows) return;
                n.slides.each(e => {
                    n.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                }), l()
            }
        }), i("virtualUpdate", () => {
            n.params.effect === t && (n.slides.length || (d = !0), requestAnimationFrame(() => {
                d && n.slides && n.slides.length && (s(), d = !1)
            }))
        })
    }

    function be(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t
    }

    function we({swiper: e, duration: t, transformEl: n, allSlides: i}) {
        const {slides: s, activeIndex: a, $wrapperEl: o} = e;
        if (e.params.virtualTranslate && 0 !== t) {
            let t, r = !1;
            t = i ? n ? s.find(n) : s : n ? s.eq(a).find(n) : s.eq(a), t.transitionEnd(() => {
                if (r) return;
                if (!e || e.destroyed) return;
                r = !0, e.animating = !1;
                const t = ["webkitTransitionEnd", "transitionend"];
                for (let e = 0; e < t.length; e += 1) o.trigger(t[e])
            })
        }
    }

    function xe({swiper: e, extendParams: t, on: n}) {
        t({fadeEffect: {crossFade: !1, transformEl: null}});
        ye({
            effect: "fade",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {slides: t} = e, n = e.params.fadeEffect;
                for (let i = 0; i < t.length; i += 1) {
                    const t = e.slides.eq(i);
                    let s = -t[0].swiperSlideOffset;
                    e.params.virtualTranslate || (s -= e.translate);
                    let a = 0;
                    e.isHorizontal() || (a = s, s = 0);
                    const o = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                    be(n, t).css({opacity: o}).transform(`translate3d(${s}px, ${a}px, 0px)`)
                }
            },
            setTransition: t => {
                const {transformEl: n} = e.params.fadeEffect;
                (n ? e.slides.find(n) : e.slides).transition(t), we({
                    swiper: e,
                    duration: t,
                    transformEl: n,
                    allSlides: !0
                })
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }

    function Ee({swiper: e, extendParams: t, on: n}) {
        t({cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}});
        const i = (e, t, n) => {
            let i = n ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                s = n ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === i.length && (i = g(`<div class="swiper-slide-shadow-${n ? "left" : "top"}"></div>`), e.append(i)), 0 === s.length && (s = g(`<div class="swiper-slide-shadow-${n ? "right" : "bottom"}"></div>`), e.append(s)), i.length && (i[0].style.opacity = Math.max(-t, 0)), s.length && (s[0].style.opacity = Math.max(t, 0))
        };
        ye({
            effect: "cube",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {$el: t, $wrapperEl: n, slides: s, width: a, height: o, rtlTranslate: r, size: l, browser: c} = e,
                    d = e.params.cubeEffect, u = e.isHorizontal(), h = e.virtual && e.params.virtual.enabled;
                let p, f = 0;
                d.shadow && (u ? (p = n.find(".swiper-cube-shadow"), 0 === p.length && (p = g('<div class="swiper-cube-shadow"></div>'), n.append(p)), p.css({height: a + "px"})) : (p = t.find(".swiper-cube-shadow"), 0 === p.length && (p = g('<div class="swiper-cube-shadow"></div>'), t.append(p))));
                for (let e = 0; e < s.length; e += 1) {
                    const t = s.eq(e);
                    let n = e;
                    h && (n = parseInt(t.attr("data-swiper-slide-index"), 10));
                    let a = 90 * n, o = Math.floor(a / 360);
                    r && (a = -a, o = Math.floor(-a / 360));
                    const c = Math.max(Math.min(t[0].progress, 1), -1);
                    let p = 0, m = 0, g = 0;
                    n % 4 == 0 ? (p = 4 * -o * l, g = 0) : (n - 1) % 4 == 0 ? (p = 0, g = 4 * -o * l) : (n - 2) % 4 == 0 ? (p = l + 4 * o * l, g = l) : (n - 3) % 4 == 0 && (p = -l, g = 3 * l + 4 * l * o), r && (p = -p), u || (m = p, p = 0);
                    const v = `rotateX(${u ? 0 : -a}deg) rotateY(${u ? a : 0}deg) translate3d(${p}px, ${m}px, ${g}px)`;
                    c <= 1 && c > -1 && (f = 90 * n + 90 * c, r && (f = 90 * -n - 90 * c)), t.transform(v), d.slideShadows && i(t, c, u)
                }
                if (n.css({
                    "-webkit-transform-origin": `50% 50% -${l / 2}px`,
                    "transform-origin": `50% 50% -${l / 2}px`
                }), d.shadow) if (u) p.transform(`translate3d(0px, ${a / 2 + d.shadowOffset}px, ${-a / 2}px) rotateX(90deg) rotateZ(0deg) scale(${d.shadowScale})`); else {
                    const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                        t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                        n = d.shadowScale, i = d.shadowScale / t, s = d.shadowOffset;
                    p.transform(`scale3d(${n}, 1, ${i}) translate3d(0px, ${o / 2 + s}px, ${-o / 2 / i}px) rotateX(-90deg)`)
                }
                const m = c.isSafari || c.isWebView ? -l / 2 : 0;
                n.transform(`translate3d(0px,0,${m}px) rotateX(${e.isHorizontal() ? 0 : f}deg) rotateY(${e.isHorizontal() ? -f : 0}deg)`), n[0].style.setProperty("--swiper-cube-translate-z", m + "px")
            },
            setTransition: t => {
                const {$el: n, slides: i} = e;
                i.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), e.params.cubeEffect.shadow && !e.isHorizontal() && n.find(".swiper-cube-shadow").transition(t)
            },
            recreateShadows: () => {
                const t = e.isHorizontal();
                e.slides.each(e => {
                    const n = Math.max(Math.min(e.progress, 1), -1);
                    i(g(e), n, t)
                })
            },
            getEffectParams: () => e.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }

    function Ce(e, t, n) {
        const i = "swiper-slide-shadow" + (n ? "-" + n : ""), s = e.transformEl ? t.find(e.transformEl) : t;
        let a = s.children("." + i);
        return a.length || (a = g(`<div class="swiper-slide-shadow${n ? "-" + n : ""}"></div>`), s.append(a)), a
    }

    function Se({swiper: e, extendParams: t, on: n}) {
        t({flipEffect: {slideShadows: !0, limitRotation: !0, transformEl: null}});
        const i = (t, n, i) => {
            let s = e.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                a = e.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
            0 === s.length && (s = Ce(i, t, e.isHorizontal() ? "left" : "top")), 0 === a.length && (a = Ce(i, t, e.isHorizontal() ? "right" : "bottom")), s.length && (s[0].style.opacity = Math.max(-n, 0)), a.length && (a[0].style.opacity = Math.max(n, 0))
        };
        ye({
            effect: "flip",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {slides: t, rtlTranslate: n} = e, s = e.params.flipEffect;
                for (let a = 0; a < t.length; a += 1) {
                    const o = t.eq(a);
                    let r = o[0].progress;
                    e.params.flipEffect.limitRotation && (r = Math.max(Math.min(o[0].progress, 1), -1));
                    const l = o[0].swiperSlideOffset;
                    let c = -180 * r, d = 0, u = e.params.cssMode ? -l - e.translate : -l, h = 0;
                    e.isHorizontal() ? n && (c = -c) : (h = u, u = 0, d = -c, c = 0), o[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, s.slideShadows && i(o, r, s);
                    const p = `translate3d(${u}px, ${h}px, 0px) rotateX(${d}deg) rotateY(${c}deg)`;
                    be(s, o).transform(p)
                }
            },
            setTransition: t => {
                const {transformEl: n} = e.params.flipEffect;
                (n ? e.slides.find(n) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), we({
                    swiper: e,
                    duration: t,
                    transformEl: n
                })
            },
            recreateShadows: () => {
                const t = e.params.flipEffect;
                e.slides.each(n => {
                    const s = g(n);
                    let a = s[0].progress;
                    e.params.flipEffect.limitRotation && (a = Math.max(Math.min(n.progress, 1), -1)), i(s, a, t)
                })
            },
            getEffectParams: () => e.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }

    function Te({swiper: e, extendParams: t, on: n}) {
        t({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
                transformEl: null
            }
        });
        ye({
            effect: "coverflow", swiper: e, on: n, setTranslate: () => {
                const {width: t, height: n, slides: i, slidesSizesGrid: s} = e, a = e.params.coverflowEffect,
                    o = e.isHorizontal(), r = e.translate, l = o ? t / 2 - r : n / 2 - r, c = o ? a.rotate : -a.rotate,
                    d = a.depth;
                for (let e = 0, t = i.length; e < t; e += 1) {
                    const t = i.eq(e), n = s[e], r = (l - t[0].swiperSlideOffset - n / 2) / n,
                        u = "function" == typeof a.modifier ? a.modifier(r) : r * a.modifier;
                    let h = o ? c * u : 0, p = o ? 0 : c * u, f = -d * Math.abs(u), m = a.stretch;
                    "string" == typeof m && -1 !== m.indexOf("%") && (m = parseFloat(a.stretch) / 100 * n);
                    let g = o ? 0 : m * u, v = o ? m * u : 0, y = 1 - (1 - a.scale) * Math.abs(u);
                    Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(f) < .001 && (f = 0), Math.abs(h) < .001 && (h = 0), Math.abs(p) < .001 && (p = 0), Math.abs(y) < .001 && (y = 0);
                    const b = `translate3d(${v}px,${g}px,${f}px)  rotateX(${p}deg) rotateY(${h}deg) scale(${y})`;
                    if (be(a, t).transform(b), t[0].style.zIndex = 1 - Math.abs(Math.round(u)), a.slideShadows) {
                        let e = o ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            n = o ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = Ce(a, t, o ? "left" : "top")), 0 === n.length && (n = Ce(a, t, o ? "right" : "bottom")), e.length && (e[0].style.opacity = u > 0 ? u : 0), n.length && (n[0].style.opacity = -u > 0 ? -u : 0)
                    }
                }
            }, setTransition: t => {
                const {transformEl: n} = e.params.coverflowEffect;
                (n ? e.slides.find(n) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
            }, perspective: () => !0, overwriteParams: () => ({watchSlidesProgress: !0})
        })
    }

    function $e({swiper: e, extendParams: t, on: n}) {
        t({
            creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1},
                next: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1}
            }
        });
        const i = e => "string" == typeof e ? e : e + "px";
        ye({
            effect: "creative",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {slides: t, $wrapperEl: n, slidesSizesGrid: s} = e,
                    a = e.params.creativeEffect, {progressMultiplier: o} = a, r = e.params.centeredSlides;
                if (r) {
                    const t = s[0] / 2 - e.params.slidesOffsetBefore || 0;
                    n.transform(`translateX(calc(50% - ${t}px))`)
                }
                for (let n = 0; n < t.length; n += 1) {
                    const s = t.eq(n), l = s[0].progress,
                        c = Math.min(Math.max(s[0].progress, -a.limitProgress), a.limitProgress);
                    let d = c;
                    r || (d = Math.min(Math.max(s[0].originalProgress, -a.limitProgress), a.limitProgress));
                    const u = s[0].swiperSlideOffset, h = [e.params.cssMode ? -u - e.translate : -u, 0, 0],
                        p = [0, 0, 0];
                    let f = !1;
                    e.isHorizontal() || (h[1] = h[0], h[0] = 0);
                    let m = {translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1};
                    c < 0 ? (m = a.next, f = !0) : c > 0 && (m = a.prev, f = !0), h.forEach((e, t) => {
                        h[t] = `calc(${e}px + (${i(m.translate[t])} * ${Math.abs(c * o)}))`
                    }), p.forEach((e, t) => {
                        p[t] = m.rotate[t] * Math.abs(c * o)
                    }), s[0].style.zIndex = -Math.abs(Math.round(l)) + t.length;
                    const g = h.join(", "), v = `rotateX(${p[0]}deg) rotateY(${p[1]}deg) rotateZ(${p[2]}deg)`,
                        y = d < 0 ? `scale(${1 + (1 - m.scale) * d * o})` : `scale(${1 - (1 - m.scale) * d * o})`,
                        b = d < 0 ? 1 + (1 - m.opacity) * d * o : 1 - (1 - m.opacity) * d * o,
                        w = `translate3d(${g}) ${v} ${y}`;
                    if (f && m.shadow || !f) {
                        let e = s.children(".swiper-slide-shadow");
                        if (0 === e.length && m.shadow && (e = Ce(a, s)), e.length) {
                            const t = a.shadowPerProgress ? c * (1 / a.limitProgress) : c;
                            e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                        }
                    }
                    const x = be(a, s);
                    x.transform(w).css({opacity: b}), m.origin && x.css("transform-origin", m.origin)
                }
            },
            setTransition: t => {
                const {transformEl: n} = e.params.creativeEffect;
                (n ? e.slides.find(n) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t), we({
                    swiper: e,
                    duration: t,
                    transformEl: n,
                    allSlides: !0
                })
            },
            perspective: () => e.params.creativeEffect.perspective,
            overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !e.params.cssMode})
        })
    }

    function Me({swiper: e, extendParams: t, on: n}) {
        t({cardsEffect: {slideShadows: !0, transformEl: null, rotate: !0, perSlideRotate: 2, perSlideOffset: 8}});
        ye({
            effect: "cards",
            swiper: e,
            on: n,
            setTranslate: () => {
                const {slides: t, activeIndex: n} = e, i = e.params.cardsEffect, {
                    startTranslate: s,
                    isTouched: a
                } = e.touchEventsData, o = e.translate;
                for (let r = 0; r < t.length; r += 1) {
                    const l = t.eq(r), c = l[0].progress, d = Math.min(Math.max(c, -4), 4);
                    let u = l[0].swiperSlideOffset;
                    e.params.centeredSlides && !e.params.cssMode && e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`), e.params.centeredSlides && e.params.cssMode && (u -= t[0].swiperSlideOffset);
                    let h = e.params.cssMode ? -u - e.translate : -u, p = 0;
                    const f = -100 * Math.abs(d);
                    let m = 1, g = -i.perSlideRotate * d, v = i.perSlideOffset - .75 * Math.abs(d);
                    const y = e.virtual && e.params.virtual.enabled ? e.virtual.from + r : r,
                        b = (y === n || y === n - 1) && d > 0 && d < 1 && (a || e.params.cssMode) && o < s,
                        w = (y === n || y === n + 1) && d < 0 && d > -1 && (a || e.params.cssMode) && o > s;
                    if (b || w) {
                        const e = (1 - Math.abs((Math.abs(d) - .5) / .5)) ** .5;
                        g += -28 * d * e, m += -.5 * e, v += 96 * e, p = -25 * e * Math.abs(d) + "%"
                    }
                    if (d < 0 ? h = `calc(${h}px + (${v * Math.abs(d)}%))` : d > 0 ? h = `calc(${h}px + (-${v * Math.abs(d)}%))` : h += "px", !e.isHorizontal()) {
                        const e = p;
                        p = h, h = e
                    }
                    const x = d < 0 ? "" + (1 + (1 - m) * d) : "" + (1 - (1 - m) * d),
                        E = `\n        translate3d(${h}, ${p}, ${f}px)\n        rotateZ(${i.rotate ? g : 0}deg)\n        scale(${x})\n      `;
                    if (i.slideShadows) {
                        let e = l.find(".swiper-slide-shadow");
                        0 === e.length && (e = Ce(i, l)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(d) - .5) / .5, 0), 1))
                    }
                    l[0].style.zIndex = -Math.abs(Math.round(c)) + t.length;
                    be(i, l).transform(E)
                }
            },
            setTransition: t => {
                const {transformEl: n} = e.params.cardsEffect;
                (n ? e.slides.find(n) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t), we({
                    swiper: e,
                    duration: t,
                    transformEl: n
                })
            },
            perspective: () => !0,
            overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !e.params.cssMode})
        })
    }
},
    function (e, t, n) {
    "use strict";
    n(6);
    var i = h(n(1)), s = n(7), a = h(n(2)), o = n(8), r = (n(9), n(10)), l = n(12), c = n(13);
    n(14);
    var d = n(15), u = n(3);

    function h(e) {
        return e && e.__esModule ? e : {default: e}
    }

    console.log("Is touch device: ", (0, i.default)()), window.myLazyLoad = new a.default({elements_selector: ".lazy"}), window.initTabs = d.initTabs, document.addEventListener("DOMContentLoaded", (function () {
        (0, s.initSwiper)(), (0, o.initIoSwiper)(), (0, l.initAccordions)(), (0, c.initSelect)(), (0, d.initTabs)();
        var e = function (e) {
            window.innerWidth > 743 && (document.querySelector("[data-modal=" + e + "]").style.maxHeight = null)
        };
        document.querySelectorAll(".link-modal-another").forEach((function (t) {
            t.addEventListener("click", (function () {
                var n;
                window.innerWidth > 743 && (n = t.dataset.modalOpen, window.innerWidth > 743 && (document.querySelector("[data-modal=" + n + "]").style.maxHeight = document.querySelector("[data-modal=" + n + "]").scrollHeight + "px")), r.modal.open(t.dataset.modalOpen, !1), setTimeout((function () {
                    document.addEventListener("touchstart", (function (n) {
                        n.target.closest(".modal-another") || n.target.closest("[data-modal-inner]") || (e(t.dataset.modal), r.modal.close(t.dataset.modal, !1))
                    }))
                }), 1)
            }))
        })), document.querySelectorAll(".modal-another").forEach((function (t) {
            t.addEventListener("mouseleave", (function (n) {
                e(t.dataset.modal), r.modal.close(t.dataset.modal, !0)
            }))
        })), u.$document.on("modal-open", (function () {
            (0, l.initAccordions)(), (0, c.initSelect)(), (0, d.initTabs)()
        }))
    }))
},
    function (e, t, n) {
    "use strict";
    var i, s = n(0), a = (i = s) && i.__esModule ? i : {default: i};
    window.$ = window.jQuery = a.default
},
    function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.initSwiper = void 0;
    var i, s = n(4), a = (i = s) && i.__esModule ? i : {default: i};
    t.initSwiper = function () {
        document.querySelectorAll(".hero").forEach((function (e) {
            var t = e.querySelector(".swiper"), n = e.querySelector(".swiper-pagination");
            new a.default(t, {modules: [s.Pagination], speed: 600, pagination: {el: n, clickable: !0, type: "bullets"}})
        })),
        document.querySelectorAll(".section-media__list").forEach((function (e) {
            var t = e.querySelector(".swiper");
            new a.default(t, {speed: 600, slidesPerView: "auto"})
        })),
        document.querySelectorAll(".card.js-have-slider").forEach((function (e) {
            var t = e.querySelector(".swiper-slider"),
                n = t.querySelector(".swiper-button-prev"),
                i = t.querySelector(".swiper-button-next"),
                o = e.querySelector(".swiper-thumbs"),
                r = new a.default(o, {slidesPerView: "auto", watchSlidesProgress: !0});
            new a.default(t, {
                modules: [s.Navigation, s.Thumbs],
                loop: true,
                navigation: {prevEl: n, nextEl: i},
                thumbs: {swiper: r, thumbsContainerClass: "swiper-thumbs"}
            })
        })),
        document.querySelectorAll(".review").forEach((function (e) {
            var t = e.querySelector(".swiper"), n = e.querySelector(".swiper-pagination");
            new a.default(t, {modules: [s.Pagination], pagination: {el: n}, slidesPerView: "auto"})
        }))
    }
},
    function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.initIoSwiper = void 0;
    var i = n(4), s = o(i), a = o(n(2));

    function o(e) {
        return e && e.__esModule ? e : {default: e}
    }

    t.initIoSwiper = function () {
        if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
            document.body.classList.add("is-intersection");
            var e = new IntersectionObserver((function (t) {
                t.forEach((function (t) {
                    if (t.isIntersecting) {
                        if (!t.target.classList.contains("init")) {
                            t.target.classList.add("init");
                            var n = t.target.querySelector(".swiper"), o = t.target.querySelector(".swiper-pagination"),
                                r = t.target.querySelector(".swiper-button-prev"),
                                l = t.target.querySelector(".swiper-button-next");
                            new s.default(n, {
                                modules: [i.Pagination, i.Navigation],
                                slidesPerView: "auto",
                                loop: !1,
                                speed: 400,
                                navigation: {prevEl: r, nextEl: l},
                                pagination: {el: o, type: "bullets"},
                                on: {
                                    afterInit: function (e) {
                                        new a.default({container: e.el, cancel_on_exit: !1})
                                    }
                                }
                            })
                        }
                        e.unobserve(t.target)
                    }
                }))
            }), {rootMargin: "0px", threshold: [0, .25, .5, .75, 1]});
            document.querySelectorAll(".section-slider").forEach((function (t) {
                e.observe(t)
            }))
        }
    }
},
    function (e, t, n) {
            "use strict";n.r(t), n.d(t, "Carousel", (function () {return w})), n.d(t, "Fancybox", (function () {return R})), n.d(t, "Panzoom", (function () {return f}));const i = e => "object" == typeof e && null !== e && e.constructor === Object && "[object Object]" === Object.prototype.toString.call(e), s = (...e) => {let t = !1;"boolean" == typeof e[0] && (t = e.shift());let n = e[0];if (!n || "object" != typeof n) throw new Error("extendee must be an object");const a = e.slice(1), o = a.length;for (let e = 0; e < o; e++) {const o = a[e];for (let e in o) if (o.hasOwnProperty(e)) {const a = o[e];if (t && (Array.isArray(a) || i(a))) {const t = Array.isArray(a) ? [] : {};n[e] = s(!0, n.hasOwnProperty(e) ? n[e] : t, a)} else n[e] = a}}return n}, a = (e, t = 1e4) => (e = parseFloat(e) || 0, Math.round((e + Number.EPSILON) * t) / t), o = function (e) {return !!(e && "object" == typeof e && e instanceof Element && e !== document.body) && !e.__Panzoom && (function (e) {const t = getComputedStyle(e)["overflow-y"], n = getComputedStyle(e)["overflow-x"], i = ("scroll" === t || "auto" === t) && Math.abs(e.scrollHeight - e.clientHeight) > 1, s = ("scroll" === n || "auto" === n) && Math.abs(e.scrollWidth - e.clientWidth) > 1;return i || s}(e) ? e : o(e.parentNode))}, r = "undefined" != typeof window && window.ResizeObserver || class {constructor(e) {this.observables = [], this.boundCheck = this.check.bind(this), this.boundCheck(), this.callback = e}observe(e) {if (this.observables.some(t => t.el === e)) return;const t = {el: e, size: {height: e.clientHeight, width: e.clientWidth}};this.observables.push(t)}unobserve(e) {this.observables = this.observables.filter(t => t.el !== e)}disconnect() {this.observables = []}check() {const e = this.observables.filter(e => {const t = e.el.clientHeight, n = e.el.clientWidth;if (e.size.height !== t || e.size.width !== n) return e.size.height = t, e.size.width = n, !0}).map(e => e.el);e.length > 0 && this.callback(e), window.requestAnimationFrame(this.boundCheck)}};class l {constructor(e) {this.id = self.Touch && e instanceof Touch ? e.identifier : -1, this.pageX = e.pageX, this.pageY = e.pageY, this.clientX = e.clientX, this.clientY = e.clientY}}const c = (e, t) => t ? Math.sqrt((t.clientX - e.clientX) ** 2 + (t.clientY - e.clientY) ** 2) : 0, d = (e, t) => t ? {clientX: (e.clientX + t.clientX) / 2, clientY: (e.clientY + t.clientY) / 2} : e;class u {constructor(e, {start: t = (() => !0), move: n = (() => {}), end: i = (() => {})} = {}) {this._element = e, this.startPointers = [], this.currentPointers = [], this._pointerStart = e => {if (e.buttons > 0 && 0 !== e.button) return;const t = new l(e);this.currentPointers.some(e => e.id === t.id) || this._triggerPointerStart(t, e) && (window.addEventListener("mousemove", this._move), window.addEventListener("mouseup", this._pointerEnd))}, this._touchStart = e => {for (const t of Array.from(e.changedTouches || [])) this._triggerPointerStart(new l(t), e)}, this._move = e => {const t = this.currentPointers.slice(), n = (e => "changedTouches" in e)(e) ? Array.from(e.changedTouches).map(e => new l(e)) : [new l(e)];for (const e of n) {const t = this.currentPointers.findIndex(t => t.id === e.id);t < 0 || (this.currentPointers[t] = e)}this._moveCallback(t, this.currentPointers.slice(), e)}, this._triggerPointerEnd = (e, t) => {const n = this.currentPointers.findIndex(t => t.id === e.id);return !(n < 0 || (this.currentPointers.splice(n, 1), this.startPointers.splice(n, 1), this._endCallback(e, t), 0))}, this._pointerEnd = e => {e.buttons > 0 && 0 !== e.button || this._triggerPointerEnd(new l(e), e) && (window.removeEventListener("mousemove", this._move, {passive: !1}), window.removeEventListener("mouseup", this._pointerEnd, {passive: !1}))}, this._touchEnd = e => {for (const t of Array.from(e.changedTouches || [])) this._triggerPointerEnd(new l(t), e)}, this._startCallback = t, this._moveCallback = n, this._endCallback = i, this._element.addEventListener("mousedown", this._pointerStart, {passive: !1}), this._element.addEventListener("touchstart", this._touchStart, {passive: !1}), this._element.addEventListener("touchmove", this._move, {passive: !1}), this._element.addEventListener("touchend", this._touchEnd), this._element.addEventListener("touchcancel", this._touchEnd)}stop() {this._element.removeEventListener("mousedown", this._pointerStart, {passive: !1}), this._element.removeEventListener("touchstart", this._touchStart, {passive: !1}), this._element.removeEventListener("touchmove", this._move, {passive: !1}), this._element.removeEventListener("touchend", this._touchEnd), this._element.removeEventListener("touchcancel", this._touchEnd), window.removeEventListener("mousemove", this._move), window.removeEventListener("mouseup", this._pointerEnd)}_triggerPointerStart(e, t) {return !!this._startCallback(e, t) && (this.currentPointers.push(e), this.startPointers.push(e), !0)}}class h {constructor(e = {}) {this.options = s(!0, {}, e), this.plugins = [], this.events = {};for (const e of ["on", "once"]) for (const t of Object.entries(this.options[e] || {})) this[e](...t)}option(e, t, ...n) {let i = (s = e = String(e), a = this.options, s.split(".").reduce((function (e, t) {return e && e[t]}), a));var s, a;return "function" == typeof i && (i = i.call(this, this, ...n)), void 0 === i ? t : i}localize(e, t = []) {return (e = String(e).replace(/\{\{(\w+).?(\w+)?\}\}/g, (e, n, i) => {let s = "";i ? s = this.option(`${n[0] + n.toLowerCase().substring(1)}.l10n.${i}`) : n && (s = this.option("l10n." + n)), s || (s = e);for (let e = 0; e < t.length; e++) s = s.split(t[e][0]).join(t[e][1]);return s})).replace(/\{\{(.*)\}\}/, (e, t) => t)}on(e, t) {if (i(e)) {for (const t of Object.entries(e)) this.on(...t);return this}return String(e).split(" ").forEach(e => {const n = this.events[e] = this.events[e] || [];-1 == n.indexOf(t) && n.push(t)}), this}once(e, t) {if (i(e)) {for (const t of Object.entries(e)) this.once(...t);return this}return String(e).split(" ").forEach(e => {const n = (...i) => {this.off(e, n), t.call(this, this, ...i)};n._ = t, this.on(e, n)}), this}off(e, t) {if (!i(e)) return e.split(" ").forEach(e => {const n = this.events[e];if (!n || !n.length) return this;let i = -1;for (let e = 0, s = n.length; e < s; e++) {const s = n[e];if (s && (s === t || s._ === t)) {i = e;break}}-1 != i && n.splice(i, 1)}), this;for (const t of Object.entries(e)) this.off(...t)}trigger(e, ...t) {for (const n of [...this.events[e] || []].slice()) if (n && !1 === n.call(this, this, ...t)) return !1;for (const n of [...this.events["*"] || []].slice()) if (n && !1 === n.call(this, e, this, ...t)) return !1;return !0}attachPlugins(e) {const t = {};for (const [n, i] of Object.entries(e || {})) !1 === this.options[n] || this.plugins[n] || (this.options[n] = s({}, i.defaults || {}, this.options[n]), t[n] = new i(this));for (const [e, n] of Object.entries(t)) n.attach(this);return this.plugins = Object.assign({}, this.plugins, t), this}detachPlugins() {for (const e in this.plugins) {let t;(t = this.plugins[e]) && "function" == typeof t.detach && t.detach(this)}return this.plugins = {}, this}}const p = {touch: !0, zoom: !0, pinchToZoom: !0, panOnlyZoomed: !1, lockAxis: !1, friction: .64, decelFriction: .88, zoomFriction: .74, bounceForce: .2, baseScale: 1, minScale: 1, maxScale: 2, step: .5, textSelection: !1, click: "toggleZoom", wheel: "zoom", wheelFactor: 42, wheelLimit: 5, draggableClass: "is-draggable", draggingClass: "is-dragging", ratio: 1};class f extends h {constructor(e, t = {}) {super(s(!0, {}, p, t)), this.state = "init", this.$container = e;for (const e of ["onLoad", "onWheel", "onClick"]) this[e] = this[e].bind(this);this.initLayout(), this.resetValues(), this.attachPlugins(f.Plugins), this.trigger("init"), this.updateMetrics(), this.attachEvents(), this.trigger("ready"), !1 === this.option("centerOnStart") ? this.state = "ready" : this.panTo({friction: 0}), e.__Panzoom = this}initLayout() {const e = this.$container;if (!(e instanceof HTMLElement)) throw new Error("Panzoom: Container not found");const t = this.option("content") || e.querySelector(".panzoom__content");if (!t) throw new Error("Panzoom: Content not found");this.$content = t;let n = this.option("viewport") || e.querySelector(".panzoom__viewport");n || !1 === this.option("wrapInner") || (n = document.createElement("div"), n.classList.add("panzoom__viewport"), n.append(...e.childNodes), e.appendChild(n)), this.$viewport = n || t.parentNode}resetValues() {this.updateRate = this.option("updateRate", /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24), this.container = {width: 0, height: 0}, this.viewport = {width: 0, height: 0}, this.content = {origWidth: 0, origHeight: 0, width: 0, height: 0, x: this.option("x", 0), y: this.option("y", 0), scale: this.option("baseScale")}, this.transform = {x: 0, y: 0, scale: 1}, this.resetDragPosition()}onLoad(e) {this.updateMetrics(), this.panTo({scale: this.option("baseScale"), friction: 0}), this.trigger("load", e)}onClick(e) {if (e.defaultPrevented) return;if (document.activeElement && document.activeElement.closest("[contenteditable]")) return;if (this.option("textSelection") && window.getSelection().toString().length && (!e.target || !e.target.hasAttribute("data-fancybox-close"))) return void e.stopPropagation();const t = this.$content.getClientRects()[0];if ("ready" !== this.state && (this.dragPosition.midPoint || Math.abs(t.top - this.dragStart.rect.top) > 1 || Math.abs(t.left - this.dragStart.rect.left) > 1)) return e.preventDefault(), void e.stopPropagation();!1 !== this.trigger("click", e) && this.option("zoom") && "toggleZoom" === this.option("click") && (e.preventDefault(), e.stopPropagation(), this.zoomWithClick(e))}onWheel(e) {!1 !== this.trigger("wheel", e) && this.option("zoom") && this.option("wheel") && this.zoomWithWheel(e)}zoomWithWheel(e) {void 0 === this.changedDelta && (this.changedDelta = 0);const t = Math.max(-1, Math.min(1, -e.deltaY || -e.deltaX || e.wheelDelta || -e.detail)), n = this.content.scale;let i = n * (100 + t * this.option("wheelFactor")) / 100;if (t < 0 && Math.abs(n - this.option("minScale")) < .01 || t > 0 && Math.abs(n - this.option("maxScale")) < .01 ? (this.changedDelta += Math.abs(t), i = n) : (this.changedDelta = 0, i = Math.max(Math.min(i, this.option("maxScale")), this.option("minScale"))), this.changedDelta > this.option("wheelLimit")) return;if (e.preventDefault(), i === n) return;const s = this.$content.getBoundingClientRect(), a = e.clientX - s.left, o = e.clientY - s.top;this.zoomTo(i, {x: a, y: o})}zoomWithClick(e) {const t = this.$content.getClientRects()[0], n = e.clientX - t.left, i = e.clientY - t.top;this.toggleZoom({x: n, y: i})}attachEvents() {this.$content.addEventListener("load", this.onLoad), this.$container.addEventListener("wheel", this.onWheel, {passive: !1}), this.$container.addEventListener("click", this.onClick, {passive: !1}), this.initObserver();const e = new u(this.$container, {start: (t, n) => {if (!this.option("touch")) return !1;if (this.velocity.scale < 0) return !1;const i = n.composedPath()[0];if (!e.currentPointers.length) {if (-1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(i.nodeName)) return !1;if (this.option("textSelection") && ((e, t, n) => {const i = e.childNodes, s = document.createRange();for (let e = 0; e < i.length; e++) {const a = i[e];if (a.nodeType !== Node.TEXT_NODE) continue;s.selectNodeContents(a);const o = s.getBoundingClientRect();if (t >= o.left && n >= o.top && t <= o.right && n <= o.bottom) return a}return !1})(i, t.clientX, t.clientY)) return !1}return !o(i) && !1 !== this.trigger("touchStart", n) && ("mousedown" === n.type && n.preventDefault(), this.state = "pointerdown", this.resetDragPosition(), this.dragPosition.midPoint = null, this.dragPosition.time = Date.now(), !0)}, move: (t, n, i) => {if ("pointerdown" !== this.state) return;if (!1 === this.trigger("touchMove", i)) return void i.preventDefault();if (n.length < 2 && !0 === this.option("panOnlyZoomed") && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale")) return;if (n.length > 1 && (!this.option("zoom") || !1 === this.option("pinchToZoom"))) return;const s = d(t[0], t[1]), a = d(n[0], n[1]), o = a.clientX - s.clientX, r = a.clientY - s.clientY, l = c(t[0], t[1]), u = c(n[0], n[1]), h = l && u ? u / l : 1;this.dragOffset.x += o, this.dragOffset.y += r, this.dragOffset.scale *= h, this.dragOffset.time = Date.now() - this.dragPosition.time;const p = 1 === this.dragStart.scale && this.option("lockAxis");if (p && !this.lockAxis) {if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) return void i.preventDefault();const e = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);this.lockAxis = e > 45 && e < 135 ? "y" : "x"}if ("xy" === p || "y" !== this.lockAxis) {if (i.preventDefault(), i.stopPropagation(), i.stopImmediatePropagation(), this.lockAxis && (this.dragOffset["x" === this.lockAxis ? "y" : "x"] = 0), this.$container.classList.add(this.option("draggingClass")), this.transform.scale === this.option("baseScale") && "y" === this.lockAxis || (this.dragPosition.x = this.dragStart.x + this.dragOffset.x), this.transform.scale === this.option("baseScale") && "x" === this.lockAxis || (this.dragPosition.y = this.dragStart.y + this.dragOffset.y), this.dragPosition.scale = this.dragStart.scale * this.dragOffset.scale, n.length > 1) {const t = d(e.startPointers[0], e.startPointers[1]), n = t.clientX - this.dragStart.rect.x, i = t.clientY - this.dragStart.rect.y, {deltaX: s, deltaY: o} = this.getZoomDelta(this.content.scale * this.dragOffset.scale, n, i);this.dragPosition.x -= s, this.dragPosition.y -= o, this.dragPosition.midPoint = a} else this.setDragResistance();this.transform = {x: this.dragPosition.x, y: this.dragPosition.y, scale: this.dragPosition.scale}, this.startAnimation()}}, end: (t, n) => {if ("pointerdown" !== this.state) return;if (this._dragOffset = {...this.dragOffset}, e.currentPointers.length) return void this.resetDragPosition();if (this.state = "decel", this.friction = this.option("decelFriction"), this.recalculateTransform(), this.$container.classList.remove(this.option("draggingClass")), !1 === this.trigger("touchEnd", n)) return;if ("decel" !== this.state) return;const i = this.option("minScale");if (this.transform.scale < i) return void this.zoomTo(i, {friction: .64});const s = this.option("maxScale");if (this.transform.scale - s > .01) {const e = this.dragPosition.midPoint || t, n = this.$content.getClientRects()[0];this.zoomTo(s, {friction: .64, x: e.clientX - n.left, y: e.clientY - n.top})}}});this.pointerTracker = e}initObserver() {this.resizeObserver || (this.resizeObserver = new r(() => {this.updateTimer || (this.updateTimer = setTimeout(() => {const e = this.$container.getBoundingClientRect();e.width && e.height ? ((Math.abs(e.width - this.container.width) > 1 || Math.abs(e.height - this.container.height) > 1) && (this.isAnimating() && this.endAnimation(!0), this.updateMetrics(), this.panTo({x: this.content.x, y: this.content.y, scale: this.option("baseScale"), friction: 0})), this.updateTimer = null) : this.updateTimer = null}, this.updateRate))}), this.resizeObserver.observe(this.$container))}resetDragPosition() {this.lockAxis = null, this.friction = this.option("friction"), this.velocity = {x: 0, y: 0, scale: 0};const {x: e, y: t, scale: n} = this.content;this.dragStart = {rect: this.$content.getBoundingClientRect(), x: e, y: t, scale: n}, this.dragPosition = {...this.dragPosition, x: e, y: t, scale: n}, this.dragOffset = {x: 0, y: 0, scale: 1, time: 0}}updateMetrics(e) {!0 !== e && this.trigger("beforeUpdate");const t = this.$container, n = this.$content, i = this.$viewport, s = n instanceof HTMLImageElement, o = this.option("zoom"), r = this.option("resizeParent", o);let l = this.option("width"), c = this.option("height"), d = l || (u = n, Math.max(parseFloat(u.naturalWidth || 0), parseFloat(u.width && u.width.baseVal && u.width.baseVal.value || 0), parseFloat(u.offsetWidth || 0), parseFloat(u.scrollWidth || 0)));var u;let h = c || (e => Math.max(parseFloat(e.naturalHeight || 0), parseFloat(e.height && e.height.baseVal && e.height.baseVal.value || 0), parseFloat(e.offsetHeight || 0), parseFloat(e.scrollHeight || 0)))(n);Object.assign(n.style, {width: l ? l + "px" : "", height: c ? c + "px" : "", maxWidth: "", maxHeight: ""}), r && Object.assign(i.style, {width: "", height: ""});const p = this.option("ratio");d = a(d * p), h = a(h * p), l = d, c = h;const f = n.getBoundingClientRect(), m = i.getBoundingClientRect(), g = i == t ? m : t.getBoundingClientRect();let v = Math.max(i.offsetWidth, a(m.width)), y = Math.max(i.offsetHeight, a(m.height)), b = window.getComputedStyle(i);if (v -= parseFloat(b.paddingLeft) + parseFloat(b.paddingRight), y -= parseFloat(b.paddingTop) + parseFloat(b.paddingBottom), this.viewport.width = v, this.viewport.height = y, o) {if (Math.abs(d - f.width) > .1 || Math.abs(h - f.height) > .1) {const e = ((e, t, n, i) => {const s = Math.min(n / e || 0, i / t);return {width: e * s || 0, height: t * s || 0}})(d, h, Math.min(d, f.width), Math.min(h, f.height));l = a(e.width), c = a(e.height)}Object.assign(n.style, {width: l + "px", height: c + "px", transform: ""})}if (r && (Object.assign(i.style, {width: l + "px", height: c + "px"}), this.viewport = {...this.viewport, width: l, height: c}), s && o && "function" != typeof this.options.maxScale) {const e = this.option("maxScale");this.options.maxScale = function () {return this.content.origWidth > 0 && this.content.fitWidth > 0 ? this.content.origWidth / this.content.fitWidth : e}}this.content = {...this.content, origWidth: d, origHeight: h, fitWidth: l, fitHeight: c, width: l, height: c, scale: 1, isZoomable: o}, this.container = {width: g.width, height: g.height}, !0 !== e && this.trigger("afterUpdate")}zoomIn(e) {this.zoomTo(this.content.scale + (e || this.option("step")))}zoomOut(e) {this.zoomTo(this.content.scale - (e || this.option("step")))}toggleZoom(e = {}) {const t = this.option("maxScale"), n = this.option("baseScale"), i = this.content.scale > n + .5 * (t - n) ? n : t;this.zoomTo(i, e)}zoomTo(e = this.option("baseScale"), {x: t = null, y: n = null} = {}) {e = Math.max(Math.min(e, this.option("maxScale")), this.option("minScale"));const i = a(this.content.scale / (this.content.width / this.content.fitWidth), 1e7);null === t && (t = this.content.width * i * .5), null === n && (n = this.content.height * i * .5);const {deltaX: s, deltaY: o} = this.getZoomDelta(e, t, n);t = this.content.x - s, n = this.content.y - o, this.panTo({x: t, y: n, scale: e, friction: this.option("zoomFriction")})}getZoomDelta(e, t = 0, n = 0) {const i = this.content.fitWidth * this.content.scale, s = this.content.fitHeight * this.content.scale, a = t > 0 && i ? t / i : 0, o = n > 0 && s ? n / s : 0;return {deltaX: (this.content.fitWidth * e - i) * a, deltaY: (this.content.fitHeight * e - s) * o}}panTo({x: e = this.content.x, y: t = this.content.y, scale: n, friction: i = this.option("friction"), ignoreBounds: s = !1} = {}) {if (n = n || this.content.scale || 1, !s) {const {boundX: i, boundY: s} = this.getBounds(n);i && (e = Math.max(Math.min(e, i.to), i.from)), s && (t = Math.max(Math.min(t, s.to), s.from))}this.friction = i, this.transform = {...this.transform, x: e, y: t, scale: n}, i ? (this.state = "panning", this.velocity = {x: (1 / this.friction - 1) * (e - this.content.x), y: (1 / this.friction - 1) * (t - this.content.y), scale: (1 / this.friction - 1) * (n - this.content.scale)}, this.startAnimation()) : this.endAnimation()}startAnimation() {this.rAF ? cancelAnimationFrame(this.rAF) : this.trigger("startAnimation"), this.rAF = requestAnimationFrame(() => this.animate())}animate() {if (this.setEdgeForce(), this.setDragForce(), this.velocity.x *= this.friction, this.velocity.y *= this.friction, this.velocity.scale *= this.friction, this.content.x += this.velocity.x, this.content.y += this.velocity.y, this.content.scale += this.velocity.scale, this.isAnimating()) this.setTransform(); else if ("pointerdown" !== this.state) return void this.endAnimation();this.rAF = requestAnimationFrame(() => this.animate())}getBounds(e) {let t = this.boundX, n = this.boundY;if (void 0 !== t && void 0 !== n) return {boundX: t, boundY: n};t = {from: 0, to: 0}, n = {from: 0, to: 0}, e = e || this.transform.scale;const i = this.content.fitWidth * e, s = this.content.fitHeight * e, o = this.viewport.width, r = this.viewport.height;if (i < o) {const e = a(.5 * (o - i));t.from = e, t.to = e} else t.from = a(o - i);if (s < r) {const e = .5 * (r - s);n.from = e, n.to = e} else n.from = a(r - s);return {boundX: t, boundY: n}}setEdgeForce() {if ("decel" !== this.state) return;const e = this.option("bounceForce"), {boundX: t, boundY: n} = this.getBounds(Math.max(this.transform.scale, this.content.scale));let i, s, a, o;if (t && (i = this.content.x < t.from, s = this.content.x > t.to), n && (a = this.content.y < n.from, o = this.content.y > n.to), i || s) {let n = ((i ? t.from : t.to) - this.content.x) * e;const s = this.content.x + (this.velocity.x + n) / this.friction;s >= t.from && s <= t.to && (n += this.velocity.x), this.velocity.x = n, this.recalculateTransform()}if (a || o) {let t = ((a ? n.from : n.to) - this.content.y) * e;const i = this.content.y + (t + this.velocity.y) / this.friction;i >= n.from && i <= n.to && (t += this.velocity.y), this.velocity.y = t, this.recalculateTransform()}}setDragResistance() {if ("pointerdown" !== this.state) return;const {boundX: e, boundY: t} = this.getBounds(this.dragPosition.scale);let n, i, s, a;if (e && (n = this.dragPosition.x < e.from, i = this.dragPosition.x > e.to), t && (s = this.dragPosition.y < t.from, a = this.dragPosition.y > t.to), (n || i) && (!n || !i)) {const t = n ? e.from : e.to, i = t - this.dragPosition.x;this.dragPosition.x = t - .3 * i}if ((s || a) && (!s || !a)) {const e = s ? t.from : t.to, n = e - this.dragPosition.y;this.dragPosition.y = e - .3 * n}}setDragForce() {"pointerdown" === this.state && (this.velocity.x = this.dragPosition.x - this.content.x, this.velocity.y = this.dragPosition.y - this.content.y, this.velocity.scale = this.dragPosition.scale - this.content.scale)}recalculateTransform() {this.transform.x = this.content.x + this.velocity.x / (1 / this.friction - 1), this.transform.y = this.content.y + this.velocity.y / (1 / this.friction - 1), this.transform.scale = this.content.scale + this.velocity.scale / (1 / this.friction - 1)}isAnimating() {return !(!this.friction || !(Math.abs(this.velocity.x) > .05 || Math.abs(this.velocity.y) > .05 || Math.abs(this.velocity.scale) > .05))}setTransform(e) {let t, n, i;if (e ? (t = a(this.transform.x), n = a(this.transform.y), i = this.transform.scale, this.content = {...this.content, x: t, y: n, scale: i}) : (t = a(this.content.x), n = a(this.content.y), i = this.content.scale / (this.content.width / this.content.fitWidth), this.content = {...this.content, x: t, y: n}), this.trigger("beforeTransform"), t = a(this.content.x), n = a(this.content.y), e && this.option("zoom")) {let e, s;e = a(this.content.fitWidth * i), s = a(this.content.fitHeight * i), this.content.width = e, this.content.height = s, this.transform = {...this.transform, width: e, height: s, scale: i}, Object.assign(this.$content.style, {width: e + "px", height: s + "px", maxWidth: "none", maxHeight: "none", transform: `translate3d(${t}px, ${n}px, 0) scale(1)`})} else this.$content.style.transform = `translate3d(${t}px, ${n}px, 0) scale(${i})`;this.trigger("afterTransform")}endAnimation(e) {cancelAnimationFrame(this.rAF), this.rAF = null, this.velocity = {x: 0, y: 0, scale: 0}, this.setTransform(!0), this.state = "ready", this.handleCursor(), !0 !== e && this.trigger("endAnimation")}handleCursor() {const e = this.option("draggableClass");e && this.option("touch") && (1 == this.option("panOnlyZoomed") && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale") ? this.$container.classList.remove(e) : this.$container.classList.add(e))}detachEvents() {this.$content.removeEventListener("load", this.onLoad), this.$container.removeEventListener("wheel", this.onWheel, {passive: !1}), this.$container.removeEventListener("click", this.onClick, {passive: !1}), this.pointerTracker && (this.pointerTracker.stop(), this.pointerTracker = null), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null)}destroy() {"destroy" !== this.state && (this.state = "destroy", clearTimeout(this.updateTimer), this.updateTimer = null, cancelAnimationFrame(this.rAF), this.rAF = null, this.detachEvents(), this.detachPlugins(), this.resetDragPosition())}}f.version = "4.0.31", f.Plugins = {};const m = (e, t) => {let n = 0;return function (...i) {const s = (new Date).getTime();if (!(s - n < t)) return n = s, e(...i)}};class g {constructor(e) {this.$container = null, this.$prev = null, this.$next = null, this.carousel = e, this.onRefresh = this.onRefresh.bind(this)}option(e) {return this.carousel.option("Navigation." + e)}createButton(e) {const t = document.createElement("button");t.setAttribute("title", this.carousel.localize(`{{${e.toUpperCase()}}}`));const n = this.option("classNames.button") + " " + this.option("classNames." + e);return t.classList.add(...n.split(" ")), t.setAttribute("tabindex", "0"), t.innerHTML = this.carousel.localize(this.option(e + "Tpl")), t.addEventListener("click", t => {t.preventDefault(), t.stopPropagation(), this.carousel["slide" + ("next" === e ? "Next" : "Prev")]()}), t}build() {this.$container || (this.$container = document.createElement("div"), this.$container.classList.add(...this.option("classNames.main").split(" ")), this.carousel.$container.appendChild(this.$container)), this.$next || (this.$next = this.createButton("next"), this.$container.appendChild(this.$next)), this.$prev || (this.$prev = this.createButton("prev"), this.$container.appendChild(this.$prev))}onRefresh() {const e = this.carousel.pages.length;e <= 1 || e > 1 && this.carousel.elemDimWidth < this.carousel.wrapDimWidth && !Number.isInteger(this.carousel.option("slidesPerPage")) ? this.cleanup() : (this.build(), this.$prev.removeAttribute("disabled"), this.$next.removeAttribute("disabled"), this.carousel.option("infiniteX", this.carousel.option("infinite")) || (this.carousel.page <= 0 && this.$prev.setAttribute("disabled", ""), this.carousel.page >= e - 1 && this.$next.setAttribute("disabled", "")))}cleanup() {this.$prev && this.$prev.remove(), this.$prev = null, this.$next && this.$next.remove(), this.$next = null, this.$container && this.$container.remove(), this.$container = null}attach() {this.carousel.on("refresh change", this.onRefresh)}detach() {this.carousel.off("refresh change", this.onRefresh), this.cleanup()}}g.defaults = {prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>', nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>', classNames: {main: "carousel__nav", button: "carousel__button", next: "is-next", prev: "is-prev"}};class v {constructor(e) {this.carousel = e, this.selectedIndex = null, this.friction = 0, this.onNavReady = this.onNavReady.bind(this), this.onNavClick = this.onNavClick.bind(this), this.onNavCreateSlide = this.onNavCreateSlide.bind(this), this.onTargetChange = this.onTargetChange.bind(this)}addAsTargetFor(e) {this.target = this.carousel, this.nav = e, this.attachEvents()}addAsNavFor(e) {this.target = e, this.nav = this.carousel, this.attachEvents()}attachEvents() {this.nav.options.initialSlide = this.target.options.initialPage, this.nav.on("ready", this.onNavReady), this.nav.on("createSlide", this.onNavCreateSlide), this.nav.on("Panzoom.click", this.onNavClick), this.target.on("change", this.onTargetChange), this.target.on("Panzoom.afterUpdate", this.onTargetChange)}onNavReady() {this.onTargetChange(!0)}onNavClick(e, t, n) {const i = n.target.closest(".carousel__slide");if (!i) return;n.stopPropagation();const s = parseInt(i.dataset.index, 10), a = this.target.findPageForSlide(s);this.target.page !== a && this.target.slideTo(a, {friction: this.friction}), this.markSelectedSlide(s)}onNavCreateSlide(e, t) {t.index === this.selectedIndex && this.markSelectedSlide(t.index)}onTargetChange() {const e = this.target.pages[this.target.page].indexes[0], t = this.nav.findPageForSlide(e);this.nav.slideTo(t), this.markSelectedSlide(e)}markSelectedSlide(e) {this.selectedIndex = e, [...this.nav.slides].filter(e => e.$el && e.$el.classList.remove("is-nav-selected"));const t = this.nav.slides[e];t && t.$el && t.$el.classList.add("is-nav-selected")}attach(e) {const t = e.options.Sync;(t.target || t.nav) && (t.target ? this.addAsNavFor(t.target) : t.nav && this.addAsTargetFor(t.nav), this.friction = t.friction)}detach() {this.nav && (this.nav.off("ready", this.onNavReady), this.nav.off("Panzoom.click", this.onNavClick), this.nav.off("createSlide", this.onNavCreateSlide)), this.target && (this.target.off("Panzoom.afterUpdate", this.onTargetChange), this.target.off("change", this.onTargetChange))}}v.defaults = {friction: .92};const y = {Navigation: g, Dots: class {constructor(e) {this.carousel = e, this.$list = null, this.events = {change: this.onChange.bind(this), refresh: this.onRefresh.bind(this)}}buildList() {if (this.carousel.pages.length < this.carousel.option("Dots.minSlideCount")) return;const e = document.createElement("ol");return e.classList.add("carousel__dots"), e.addEventListener("click", e => {if (!("page" in e.target.dataset)) return;e.preventDefault(), e.stopPropagation();const t = parseInt(e.target.dataset.page, 10), n = this.carousel;t !== n.page && (n.pages.length < 3 && n.option("infinite") ? n[0 == t ? "slidePrev" : "slideNext"]() : n.slideTo(t))}), this.$list = e, this.carousel.$container.appendChild(e), this.carousel.$container.classList.add("has-dots"), e}removeList() {this.$list && (this.$list.parentNode.removeChild(this.$list), this.$list = null), this.carousel.$container.classList.remove("has-dots")}rebuildDots() {let e = this.$list;const t = !!e, n = this.carousel.pages.length;if (n < 2) return void (t && this.removeList());t || (e = this.buildList());const i = this.$list.children.length;if (i > n) for (let e = n; e < i; e++) this.$list.removeChild(this.$list.lastChild); else {for (let e = i; e < n; e++) {const t = document.createElement("li");t.classList.add("carousel__dot"), t.dataset.page = e, t.setAttribute("role", "button"), t.setAttribute("tabindex", "0"), t.setAttribute("title", this.carousel.localize("{{GOTO}}", [["%d", e + 1]])), t.addEventListener("keydown", e => {const n = e.code;let i;"Enter" === n || "NumpadEnter" === n ? i = t : "ArrowRight" === n ? i = t.nextSibling : "ArrowLeft" === n && (i = t.previousSibling), i && i.click()}), this.$list.appendChild(t)}this.setActiveDot()}}setActiveDot() {if (!this.$list) return;this.$list.childNodes.forEach(e => {e.classList.remove("is-selected")});const e = this.$list.childNodes[this.carousel.page];e && e.classList.add("is-selected")}onChange() {this.setActiveDot()}onRefresh() {this.rebuildDots()}attach() {this.carousel.on(this.events)}detach() {this.removeList(), this.carousel.off(this.events), this.carousel = null}}, Sync: v}, b = {slides: [], preload: 0, slidesPerPage: "auto", initialPage: null, initialSlide: null, friction: .92, center: !0, infinite: !0, fill: !0, dragFree: !1, prefix: "", classNames: {viewport: "carousel__viewport", track: "carousel__track", slide: "carousel__slide", slideSelected: "is-selected"}, l10n: {NEXT: "Next slide", PREV: "Previous slide", GOTO: "Go to slide #%d"}};class w extends h {constructor(e, t = {}) {if (super(t = s(!0, {}, b, t)), this.state = "init", this.$container = e, !(this.$container instanceof HTMLElement)) throw new Error("No root element provided");this.slideNext = m(this.slideNext.bind(this), 250), this.slidePrev = m(this.slidePrev.bind(this), 250), this.init(), e.__Carousel = this}init() {this.pages = [], this.page = this.pageIndex = null, this.prevPage = this.prevPageIndex = null, this.attachPlugins(w.Plugins), this.trigger("init"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.$track && this.pages.length && (this.$track.style.transform = `translate3d(${-1 * this.pages[this.page].left}px, 0px, 0) scale(1)`), this.manageSlideVisiblity(), this.initPanzoom(), this.state = "ready", this.trigger("ready")}initLayout() {const e = this.option("prefix"), t = this.option("classNames");this.$viewport = this.option("viewport") || this.$container.querySelector(`.${e}${t.viewport}`), this.$viewport || (this.$viewport = document.createElement("div"), this.$viewport.classList.add(...(e + t.viewport).split(" ")), this.$viewport.append(...this.$container.childNodes), this.$container.appendChild(this.$viewport)), this.$track = this.option("track") || this.$container.querySelector(`.${e}${t.track}`), this.$track || (this.$track = document.createElement("div"), this.$track.classList.add(...(e + t.track).split(" ")), this.$track.append(...this.$viewport.childNodes), this.$viewport.appendChild(this.$track))}initSlides() {this.slides = [], this.$viewport.querySelectorAll(`.${this.option("prefix")}${this.option("classNames.slide")}`).forEach(e => {const t = {$el: e, isDom: !0};this.slides.push(t), this.trigger("createSlide", t, this.slides.length)}), Array.isArray(this.options.slides) && (this.slides = s(!0, [...this.slides], this.options.slides))}updateMetrics() {let e, t = 0, n = [];this.slides.forEach((i, s) => {const a = i.$el, o = i.isDom || !e ? this.getSlideMetrics(a) : e;i.index = s, i.width = o, i.left = t, e = o, t += o, n.push(s)});let i = Math.max(this.$track.offsetWidth, a(this.$track.getBoundingClientRect().width)), s = getComputedStyle(this.$track);i -= parseFloat(s.paddingLeft) + parseFloat(s.paddingRight), this.contentWidth = t, this.viewportWidth = i;const o = [], r = this.option("slidesPerPage");if (Number.isInteger(r) && t > i) for (let e = 0; e < this.slides.length; e += r) o.push({indexes: n.slice(e, e + r), slides: this.slides.slice(e, e + r)}); else {let e = 0, t = 0;for (let n = 0; n < this.slides.length; n += 1) {let s = this.slides[n];(!o.length || t + s.width > i) && (o.push({indexes: [], slides: []}), e = o.length - 1, t = 0), t += s.width, o[e].indexes.push(n), o[e].slides.push(s)}}const l = this.option("center"), c = this.option("fill");o.forEach((e, n) => {e.index = n, e.width = e.slides.reduce((e, t) => e + t.width, 0), e.left = e.slides[0].left, l && (e.left += .5 * (i - e.width) * -1), c && !this.option("infiniteX", this.option("infinite")) && t > i && (e.left = Math.max(e.left, 0), e.left = Math.min(e.left, t - i))});const d = [];let u;o.forEach(e => {const t = {...e};u && t.left === u.left ? (u.width += t.width, u.slides = [...u.slides, ...t.slides], u.indexes = [...u.indexes, ...t.indexes]) : (t.index = d.length, u = t, d.push(t))}), this.pages = d;let h = this.page;if (null === h) {const e = this.option("initialSlide");h = null !== e ? this.findPageForSlide(e) : parseInt(this.option("initialPage", 0), 10) || 0, d[h] || (h = d.length && h > d.length ? d[d.length - 1].index : 0), this.page = h, this.pageIndex = h}this.updatePanzoom(), this.trigger("refresh")}getSlideMetrics(e) {if (!e) {const t = this.slides[0];(e = document.createElement("div")).dataset.isTestEl = 1, e.style.visibility = "hidden", e.classList.add(...(this.option("prefix") + this.option("classNames.slide")).split(" ")), t.customClass && e.classList.add(...t.customClass.split(" ")), this.$track.prepend(e)}let t = Math.max(e.offsetWidth, a(e.getBoundingClientRect().width));const n = e.currentStyle || window.getComputedStyle(e);return t = t + (parseFloat(n.marginLeft) || 0) + (parseFloat(n.marginRight) || 0), e.dataset.isTestEl && e.remove(), t}findPageForSlide(e) {e = parseInt(e, 10) || 0;const t = this.pages.find(t => t.indexes.indexOf(e) > -1);return t ? t.index : null}slideNext() {this.slideTo(this.pageIndex + 1)}slidePrev() {this.slideTo(this.pageIndex - 1)}slideTo(e, t = {}) {const {x: n = -1 * this.setPage(e, !0), y: i = 0, friction: s = this.option("friction")} = t;this.Panzoom.content.x === n && !this.Panzoom.velocity.x && s || (this.Panzoom.panTo({x: n, y: i, friction: s, ignoreBounds: !0}), "ready" === this.state && "ready" === this.Panzoom.state && this.trigger("settle"))}initPanzoom() {this.Panzoom && this.Panzoom.destroy();const e = s(!0, {}, {content: this.$track, wrapInner: !1, resizeParent: !1, zoom: !1, click: !1, lockAxis: "x", x: this.pages.length ? -1 * this.pages[this.page].left : 0, centerOnStart: !1, textSelection: () => this.option("textSelection", !1), panOnlyZoomed: function () {return this.content.width <= this.viewport.width}}, this.option("Panzoom"));this.Panzoom = new f(this.$container, e), this.Panzoom.on({"*": (e, ...t) => this.trigger("Panzoom." + e, ...t), afterUpdate: () => {this.updatePage()}, beforeTransform: this.onBeforeTransform.bind(this), touchEnd: this.onTouchEnd.bind(this), endAnimation: () => {this.trigger("settle")}}), this.updateMetrics(), this.manageSlideVisiblity()}updatePanzoom() {this.Panzoom && (this.Panzoom.content = {...this.Panzoom.content, fitWidth: this.contentWidth, origWidth: this.contentWidth, width: this.contentWidth}, this.pages.length > 1 && this.option("infiniteX", this.option("infinite")) ? this.Panzoom.boundX = null : this.pages.length && (this.Panzoom.boundX = {from: -1 * this.pages[this.pages.length - 1].left, to: -1 * this.pages[0].left}), this.option("infiniteY", this.option("infinite")) ? this.Panzoom.boundY = null : this.Panzoom.boundY = {from: 0, to: 0}, this.Panzoom.handleCursor())}manageSlideVisiblity() {const e = this.contentWidth, t = this.viewportWidth;let n = this.Panzoom ? -1 * this.Panzoom.content.x : this.pages.length ? this.pages[this.page].left : 0;const i = this.option("preload"), s = this.option("infiniteX", this.option("infinite")), a = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-left")), o = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-right"));this.slides.forEach(r => {let l, c, d = 0;l = n - a, c = n + t + o, l -= i * (t + a + o), c += i * (t + a + o);const u = r.left + r.width > l && r.left < c;l = n + e - a, c = n + e + t + o, l -= i * (t + a + o);const h = s && r.left + r.width > l && r.left < c;l = n - e - a, c = n - e + t + o, l -= i * (t + a + o);const p = s && r.left + r.width > l && r.left < c;h || u || p ? (this.createSlideEl(r), u && (d = 0), h && (d = -1), p && (d = 1), r.left + r.width > n && r.left <= n + t + o && (d = 0)) : this.removeSlideEl(r), r.hasDiff = d});let r = 0, l = 0;this.slides.forEach((t, n) => {let i = 0;t.$el ? (n !== r || t.hasDiff ? i = l + t.hasDiff * e : l = 0, t.$el.style.left = Math.abs(i) > .1 ? l + t.hasDiff * e + "px" : "", r++) : l += t.width}), this.markSelectedSlides()}createSlideEl(e) {if (!e) return;if (e.$el) {let t = e.$el.dataset.index;if (!t || parseInt(t, 10) !== e.index) {let t;e.$el.dataset.index = e.index, e.$el.querySelectorAll("[data-lazy-srcset]").forEach(e => {e.srcset = e.dataset.lazySrcset}), e.$el.querySelectorAll("[data-lazy-src]").forEach(e => {let t = e.dataset.lazySrc;e instanceof HTMLImageElement ? e.src = t : e.style.backgroundImage = `url('${t}')`}), (t = e.$el.dataset.lazySrc) && (e.$el.style.backgroundImage = `url('${t}')`), e.state = "ready"}return}const t = document.createElement("div");t.dataset.index = e.index, t.classList.add(...(this.option("prefix") + this.option("classNames.slide")).split(" ")), e.customClass && t.classList.add(...e.customClass.split(" ")), e.html && (t.innerHTML = e.html);const n = [];this.slides.forEach((e, t) => {e.$el && n.push(t)});const i = e.index;let s = null;if (n.length) {let e = n.reduce((e, t) => Math.abs(t - i) < Math.abs(e - i) ? t : e);s = this.slides[e]}return this.$track.insertBefore(t, s && s.$el ? s.index < e.index ? s.$el.nextSibling : s.$el : null), e.$el = t, this.trigger("createSlide", e, i), e}removeSlideEl(e) {e.$el && !e.isDom && (this.trigger("removeSlide", e), e.$el.remove(), e.$el = null)}markSelectedSlides() {const e = this.option("classNames.slideSelected"), t = "aria-hidden";this.slides.forEach((n, i) => {const s = n.$el;if (!s) return;const a = this.pages[this.page];a && a.indexes && a.indexes.indexOf(i) > -1 ? (e && !s.classList.contains(e) && (s.classList.add(e), this.trigger("selectSlide", n)), s.removeAttribute(t)) : (e && s.classList.contains(e) && (s.classList.remove(e), this.trigger("unselectSlide", n)), s.setAttribute(t, !0))})}updatePage() {this.updateMetrics(), this.slideTo(this.page, {friction: 0})}onBeforeTransform() {this.option("infiniteX", this.option("infinite")) && this.manageInfiniteTrack(), this.manageSlideVisiblity()}manageInfiniteTrack() {const e = this.contentWidth, t = this.viewportWidth;if (!this.option("infiniteX", this.option("infinite")) || this.pages.length < 2 || e < t) return;const n = this.Panzoom;let i = !1;return n.content.x < -1 * (e - t) && (n.content.x += e, this.pageIndex = this.pageIndex - this.pages.length, i = !0), n.content.x > t && (n.content.x -= e, this.pageIndex = this.pageIndex + this.pages.length, i = !0), i && "pointerdown" === n.state && n.resetDragPosition(), i}onTouchEnd(e, t) {const n = this.option("dragFree");if (!n && this.pages.length > 1 && e.dragOffset.time < 350 && Math.abs(e.dragOffset.y) < 1 && Math.abs(e.dragOffset.x) > 5) this[e.dragOffset.x < 0 ? "slideNext" : "slidePrev"](); else if (n) {const [, t] = this.getPageFromPosition(-1 * e.transform.x);this.setPage(t)} else this.slideToClosest()}slideToClosest(e = {}) {let [, t] = this.getPageFromPosition(-1 * this.Panzoom.content.x);this.slideTo(t, e)}getPageFromPosition(e) {const t = this.pages.length;this.option("center") && (e += .5 * this.viewportWidth);const n = Math.floor(e / this.contentWidth);e -= n * this.contentWidth;let i = this.slides.find(t => t.left <= e && t.left + t.width > e);if (i) {let e = this.findPageForSlide(i.index);return [e, e + n * t]}return [0, 0]}setPage(e, t) {let n = 0, i = parseInt(e, 10) || 0;const s = this.page, a = this.pageIndex, o = this.pages.length, r = this.contentWidth, l = this.viewportWidth;if (e = (i % o + o) % o, this.option("infiniteX", this.option("infinite")) && r > l) {const s = Math.floor(i / o) || 0, a = r;if (n = this.pages[e].left + s * a, !0 === t && o > 2) {let e = -1 * this.Panzoom.content.x;const t = n - a, s = n + a, r = Math.abs(e - n), l = Math.abs(e - t), c = Math.abs(e - s);c < r && c <= l ? (n = s, i += o) : l < r && l < c && (n = t, i -= o)}} else e = i = Math.max(0, Math.min(i, o - 1)), n = this.pages.length ? this.pages[e].left : 0;return this.page = e, this.pageIndex = i, null !== s && e !== s && (this.prevPage = s, this.prevPageIndex = a, this.trigger("change", e, s)), n}destroy() {this.state = "destroy", this.slides.forEach(e => {this.removeSlideEl(e)}), this.slides = [], this.Panzoom.destroy(), this.detachPlugins()}}w.version = "4.0.31", w.Plugins = y;const x = !("undefined" == typeof window || !window.document || !window.document.createElement);let E = null;const C = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'], S = e => {if (e && x) {null === E && document.createElement("div").focus({get preventScroll() {return E = !0, !1}});try {if (e.setActive) e.setActive(); else if (E) e.focus({preventScroll: !0}); else {const t = window.pageXOffset || document.body.scrollTop, n = window.pageYOffset || document.body.scrollLeft;e.focus(), document.body.scrollTo({top: t, left: n, behavior: "auto"})}} catch (e) {}}};class T {constructor(e) {this.fancybox = e, this.$container = null, this.state = "init";for (const e of ["onPrepare", "onClosing", "onKeydown"]) this[e] = this[e].bind(this);this.events = {prepare: this.onPrepare, closing: this.onClosing, keydown: this.onKeydown}}onPrepare() {this.getSlides().length < this.fancybox.option("Thumbs.minSlideCount") ? this.state = "disabled" : !0 === this.fancybox.option("Thumbs.autoStart") && this.fancybox.Carousel.Panzoom.content.height >= this.fancybox.option("Thumbs.minScreenHeight") && this.build()}onClosing() {this.Carousel && this.Carousel.Panzoom.detachEvents()}onKeydown(e, t) {t === e.option("Thumbs.key") && this.toggle()}build() {if (this.$container) return;const e = document.createElement("div");e.classList.add("fancybox__thumbs"), this.fancybox.$carousel.parentNode.insertBefore(e, this.fancybox.$carousel.nextSibling), this.Carousel = new w(e, s(!0, {Dots: !1, Navigation: !1, Sync: {friction: 0}, infinite: !1, center: !0, fill: !0, dragFree: !0, slidesPerPage: 1, preload: 1}, this.fancybox.option("Thumbs.Carousel"), {Sync: {target: this.fancybox.Carousel}, slides: this.getSlides()})), this.Carousel.Panzoom.on("wheel", (e, t) => {t.preventDefault(), this.fancybox[t.deltaY < 0 ? "prev" : "next"]()}), this.$container = e, this.state = "visible"}getSlides() {const e = [];for (const t of this.fancybox.items) {const n = t.thumb;n && e.push({html: this.fancybox.option("Thumbs.tpl").replace(/\{\{src\}\}/gi, n), customClass: "has-thumb has-" + (t.type || "image")})}return e}toggle() {"visible" === this.state ? this.hide() : "hidden" === this.state ? this.show() : this.build()}show() {"hidden" === this.state && (this.$container.style.display = "", this.Carousel.Panzoom.attachEvents(), this.state = "visible")}hide() {"visible" === this.state && (this.Carousel.Panzoom.detachEvents(), this.$container.style.display = "none", this.state = "hidden")}cleanup() {this.Carousel && (this.Carousel.destroy(), this.Carousel = null), this.$container && (this.$container.remove(), this.$container = null), this.state = "init"}attach() {this.fancybox.on(this.events)}detach() {this.fancybox.off(this.events), this.cleanup()}}T.defaults = {minSlideCount: 2, minScreenHeight: 500, autoStart: !0, key: "t", Carousel: {}, tpl: '<div class="fancybox__thumb" style="background-image:url(\'{{src}}\')"></div>'};const $ = (e, t) => {const n = new URL(e), i = new URLSearchParams(n.search);let s = new URLSearchParams;for (const [e, n] of [...i, ...Object.entries(t)]) "t" === e ? s.set("start", parseInt(n)) : s.set(e, n);s = s.toString();let a = e.match(/#t=((.*)?\d+s)/);return a && (s += "#t=" + a[1]), s}, M = {video: {autoplay: !0, ratio: 16 / 9}, youtube: {autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1}, vimeo: {hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1}, html5video: {tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>', format: ""}};class k {constructor(e) {this.fancybox = e;for (const e of ["onInit", "onReady", "onCreateSlide", "onRemoveSlide", "onSelectSlide", "onUnselectSlide", "onRefresh", "onMessage"]) this[e] = this[e].bind(this);this.events = {init: this.onInit, ready: this.onReady, "Carousel.createSlide": this.onCreateSlide, "Carousel.removeSlide": this.onRemoveSlide, "Carousel.selectSlide": this.onSelectSlide, "Carousel.unselectSlide": this.onUnselectSlide, "Carousel.refresh": this.onRefresh}}onInit() {for (const e of this.fancybox.items) this.processType(e)}processType(e) {if (e.html) return e.src = e.html, e.type = "html", void delete e.html;const t = e.src || "";let n = e.type || this.fancybox.options.type, i = null;if (!t || "string" == typeof t) {if (i = t.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {const s = $(t, this.fancybox.option("Html.youtube")), a = encodeURIComponent(i[1]);e.videoId = a, e.src = `https://www.youtube-nocookie.com/embed/${a}?${s}`, e.thumb = e.thumb || `https://i.ytimg.com/vi/${a}/mqdefault.jpg`, e.vendor = "youtube", n = "video"} else if (i = t.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)) {const s = $(t, this.fancybox.option("Html.vimeo")), a = encodeURIComponent(i[1]);e.videoId = a, e.src = `https://player.vimeo.com/video/${a}?${s}`, e.vendor = "vimeo", n = "video"} else (i = t.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (e.src = `//maps.google.${i[1]}/?ll=${(i[2] ? i[2] + "&z=" + Math.floor(i[3]) + (i[4] ? i[4].replace(/^\//, "&") : "") : i[4] + "").replace(/\?/, "&")}&output=${i[4] && i[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, n = "map") : (i = t.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (e.src = `//maps.google.${i[1]}/maps?q=${i[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, n = "map");n || ("#" === t.charAt(0) ? n = "inline" : (i = t.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (n = "html5video", e.format = e.format || "video/" + ("ogv" === i[1] ? "ogg" : i[1])) : t.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? n = "image" : t.match(/\.(pdf)((\?|#).*)?$/i) && (n = "pdf")), e.type = n || this.fancybox.option("defaultType", "image"), "html5video" !== n && "video" !== n || (e.video = s({}, this.fancybox.option("Html.video"), e.video), e._width && e._height ? e.ratio = parseFloat(e._width) / parseFloat(e._height) : e.ratio = e.ratio || e.video.ratio || M.video.ratio)}}onReady() {this.fancybox.Carousel.slides.forEach(e => {e.$el && (this.setContent(e), e.index === this.fancybox.getSlide().index && this.playVideo(e))})}onCreateSlide(e, t, n) {"ready" === this.fancybox.state && this.setContent(n)}loadInlineContent(e) {let t;if (e.src instanceof HTMLElement) t = e.src; else if ("string" == typeof e.src) {const n = e.src.split("#", 2), i = 2 === n.length && "" === n[0] ? n[1] : n[0];t = document.getElementById(i)}if (t) {if ("clone" === e.type || t.$placeHolder) {t = t.cloneNode(!0);let n = t.getAttribute("id");n = n ? n + "--clone" : `clone-${this.fancybox.id}-${e.index}`, t.setAttribute("id", n)} else {const e = document.createElement("div");e.classList.add("fancybox-placeholder"), t.parentNode.insertBefore(e, t), t.$placeHolder = e}this.fancybox.setContent(e, t)} else this.fancybox.setError(e, "{{ELEMENT_NOT_FOUND}}")}loadAjaxContent(e) {const t = this.fancybox, n = new XMLHttpRequest;t.showLoading(e), n.onreadystatechange = function () {n.readyState === XMLHttpRequest.DONE && "ready" === t.state && (t.hideLoading(e), 200 === n.status ? t.setContent(e, n.responseText) : t.setError(e, 404 === n.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"))};const i = e.ajax || null;n.open(i ? "POST" : "GET", e.src), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.send(i), e.xhr = n}loadIframeContent(e) {const t = this.fancybox, n = document.createElement("iframe");if (n.className = "fancybox__iframe", n.setAttribute("id", `fancybox__iframe_${t.id}_${e.index}`), n.setAttribute("allow", "autoplay; fullscreen"), n.setAttribute("scrolling", "auto"), e.$iframe = n, "iframe" !== e.type || !1 === e.preload) return n.setAttribute("src", e.src), this.fancybox.setContent(e, n), void this.resizeIframe(e);t.showLoading(e);const i = document.createElement("div");i.style.visibility = "hidden", this.fancybox.setContent(e, i), i.appendChild(n), n.onerror = () => {t.setError(e, "{{IFRAME_ERROR}}")}, n.onload = () => {t.hideLoading(e);let i = !1;n.isReady || (n.isReady = !0, i = !0), n.src.length && (n.parentNode.style.visibility = "", this.resizeIframe(e), i && t.revealContent(e))}, n.setAttribute("src", e.src)}setAspectRatio(e) {const t = e.$content, n = e.ratio;if (!t) return;let i = e._width, s = e._height;if (n || i && s) {Object.assign(t.style, {width: i && s ? "100%" : "", height: i && s ? "100%" : "", maxWidth: "", maxHeight: ""});let e = t.offsetWidth, a = t.offsetHeight;if (i = i || e, s = s || a, i > e || s > a) {let t = Math.min(e / i, a / s);i *= t, s *= t}Math.abs(i / s - n) > .01 && (n < i / s ? i = s * n : s = i / n), Object.assign(t.style, {width: i + "px", height: s + "px"})}}resizeIframe(e) {const t = e.$iframe;if (!t) return;let n = e._width || 0, i = e._height || 0;n && i && (e.autoSize = !1);const s = t.parentNode, a = s && s.style;if (!1 !== e.preload && !1 !== e.autoSize && a) try {const e = window.getComputedStyle(s), o = parseFloat(e.paddingLeft) + parseFloat(e.paddingRight), r = parseFloat(e.paddingTop) + parseFloat(e.paddingBottom), l = t.contentWindow.document, c = l.getElementsByTagName("html")[0], d = l.body;a.width = "", d.style.overflow = "hidden", n = n || c.scrollWidth + o, a.width = n + "px", d.style.overflow = "", a.flex = "0 0 auto", a.height = d.scrollHeight + "px", i = c.scrollHeight + r} catch (e) {}if (n || i) {const e = {flex: "0 1 auto"};n && (e.width = n + "px"), i && (e.height = i + "px"), Object.assign(a, e)}}onRefresh(e, t) {t.slides.forEach(e => {e.$el && (e.$iframe && this.resizeIframe(e), e.ratio && this.setAspectRatio(e))})}setContent(e) {if (e && !e.isDom) {switch (e.type) {case"html":this.fancybox.setContent(e, e.src);break;case"html5video":this.fancybox.setContent(e, this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi, e.src).replace("{{format}}", e.format || e.html5video && e.html5video.format || "").replace("{{poster}}", e.poster || e.thumb || ""));break;case"inline":case"clone":this.loadInlineContent(e);break;case"ajax":this.loadAjaxContent(e);break;case"pdf":case"video":case"map":e.preload = !1;case"iframe":this.loadIframeContent(e)}e.ratio && this.setAspectRatio(e)}}onSelectSlide(e, t, n) {"ready" === e.state && this.playVideo(n)}playVideo(e) {if ("html5video" === e.type && e.video.autoplay) try {const t = e.$el.querySelector("video");if (t) {const e = t.play();void 0 !== e && e.then(() => {}).catch(e => {t.muted = !0, t.play()})}} catch (e) {}if ("video" !== e.type || !e.$iframe || !e.$iframe.contentWindow) return;const t = () => {if ("done" === e.state && e.$iframe && e.$iframe.contentWindow) {let t;if (e.$iframe.isReady) return e.video && e.video.autoplay && (t = "youtube" == e.vendor ? {event: "command", func: "playVideo"} : {method: "play", value: "true"}), void (t && e.$iframe.contentWindow.postMessage(JSON.stringify(t), "*"));"youtube" === e.vendor && (t = {event: "listening", id: e.$iframe.getAttribute("id")}, e.$iframe.contentWindow.postMessage(JSON.stringify(t), "*"))}e.poller = setTimeout(t, 250)};t()}onUnselectSlide(e, t, n) {if ("html5video" === n.type) {try {n.$el.querySelector("video").pause()} catch (e) {}return}let i = !1;"vimeo" == n.vendor ? i = {method: "pause", value: "true"} : "youtube" === n.vendor && (i = {event: "command", func: "pauseVideo"}), i && n.$iframe && n.$iframe.contentWindow && n.$iframe.contentWindow.postMessage(JSON.stringify(i), "*"), clearTimeout(n.poller)}onRemoveSlide(e, t, n) {n.xhr && (n.xhr.abort(), n.xhr = null), n.$iframe && (n.$iframe.onload = n.$iframe.onerror = null, n.$iframe.src = "//about:blank", n.$iframe = null);const i = n.$content;"inline" === n.type && i && (i.classList.remove("fancybox__content"), "none" !== i.style.display && (i.style.display = "none")), n.$closeButton && (n.$closeButton.remove(), n.$closeButton = null);const s = i && i.$placeHolder;s && (s.parentNode.insertBefore(i, s), s.remove(), i.$placeHolder = null)}onMessage(e) {try {let t = JSON.parse(e.data);if ("https://player.vimeo.com" === e.origin) {if ("ready" === t.event) for (let t of document.getElementsByClassName("fancybox__iframe")) t.contentWindow === e.source && (t.isReady = 1)} else "https://www.youtube-nocookie.com" === e.origin && "onReady" === t.event && (document.getElementById(t.id).isReady = 1)} catch (e) {}}attach() {this.fancybox.on(this.events), window.addEventListener("message", this.onMessage, !1)}detach() {this.fancybox.off(this.events), window.removeEventListener("message", this.onMessage, !1)}}k.defaults = M;class P {constructor(e) {this.fancybox = e;for (const e of ["onReady", "onClosing", "onDone", "onPageChange", "onCreateSlide", "onRemoveSlide", "onImageStatusChange"]) this[e] = this[e].bind(this);this.events = {ready: this.onReady, closing: this.onClosing, done: this.onDone, "Carousel.change": this.onPageChange, "Carousel.createSlide": this.onCreateSlide, "Carousel.removeSlide": this.onRemoveSlide}}onReady() {this.fancybox.Carousel.slides.forEach(e => {e.$el && this.setContent(e)})}onDone(e, t) {this.handleCursor(t)}onClosing(e) {clearTimeout(this.clickTimer), this.clickTimer = null, e.Carousel.slides.forEach(e => {e.$image && (e.state = "destroy"), e.Panzoom && e.Panzoom.detachEvents()}), "closing" === this.fancybox.state && this.canZoom(e.getSlide()) && this.zoomOut()}onCreateSlide(e, t, n) {"ready" === this.fancybox.state && this.setContent(n)}onRemoveSlide(e, t, n) {n.$image && (n.$el.classList.remove(e.option("Image.canZoomInClass")), n.$image.remove(), n.$image = null), n.Panzoom && (n.Panzoom.destroy(), n.Panzoom = null), n.$el && n.$el.dataset && delete n.$el.dataset.imageFit}setContent(e) {if (e.isDom || e.html || e.type && "image" !== e.type) return;if (e.$image) return;e.type = "image", e.state = "loading";const t = document.createElement("div");t.style.visibility = "hidden";const n = document.createElement("img");n.addEventListener("load", t => {t.stopImmediatePropagation(), this.onImageStatusChange(e)}), n.addEventListener("error", () => {this.onImageStatusChange(e)}), n.src = e.src, n.alt = "", n.draggable = !1, n.classList.add("fancybox__image"), e.srcset && n.setAttribute("srcset", e.srcset), e.sizes && n.setAttribute("sizes", e.sizes), e.$image = n;const i = this.fancybox.option("Image.wrap");if (i) {const s = document.createElement("div");s.classList.add("string" == typeof i ? i : "fancybox__image-wrap"), s.appendChild(n), t.appendChild(s), e.$wrap = s} else t.appendChild(n);e.$el.dataset.imageFit = this.fancybox.option("Image.fit"), this.fancybox.setContent(e, t), n.complete || n.error ? this.onImageStatusChange(e) : this.fancybox.showLoading(e)}onImageStatusChange(e) {const t = e.$image;t && "loading" === e.state && (t.complete && t.naturalWidth && t.naturalHeight ? (this.fancybox.hideLoading(e), "contain" === this.fancybox.option("Image.fit") && this.initSlidePanzoom(e), e.$el.addEventListener("wheel", t => this.onWheel(e, t), {passive: !1}), e.$content.addEventListener("click", t => this.onClick(e, t), {passive: !1}), this.revealContent(e)) : this.fancybox.setError(e, "{{IMAGE_ERROR}}"))}initSlidePanzoom(e) {e.Panzoom || (e.Panzoom = new f(e.$el, s(!0, this.fancybox.option("Image.Panzoom", {}), {viewport: e.$wrap, content: e.$image, width: e._width, height: e._height, wrapInner: !1, textSelection: !0, touch: this.fancybox.option("Image.touch"), panOnlyZoomed: !0, click: !1, wheel: !1})), e.Panzoom.on("startAnimation", () => {this.fancybox.trigger("Image.startAnimation", e)}), e.Panzoom.on("endAnimation", () => {"zoomIn" === e.state && this.fancybox.done(e), this.handleCursor(e), this.fancybox.trigger("Image.endAnimation", e)}), e.Panzoom.on("afterUpdate", () => {this.handleCursor(e), this.fancybox.trigger("Image.afterUpdate", e)}))}revealContent(e) {null === this.fancybox.Carousel.prevPage && e.index === this.fancybox.options.startIndex && this.canZoom(e) ? this.zoomIn() : this.fancybox.revealContent(e)}getZoomInfo(e) {const t = e.$thumb.getBoundingClientRect(), n = t.width, i = t.height, s = e.$content.getBoundingClientRect(), a = s.width, o = s.height, r = s.top - t.top, l = s.left - t.left;let c = this.fancybox.option("Image.zoomOpacity");return "auto" === c && (c = Math.abs(n / i - a / o) > .1), {top: r, left: l, scale: a && n ? n / a : 1, opacity: c}}canZoom(e) {const t = this.fancybox, n = t.$container;if (window.visualViewport && 1 !== window.visualViewport.scale) return !1;if (e.Panzoom && !e.Panzoom.content.width) return !1;if (!t.option("Image.zoom") || "contain" !== t.option("Image.fit")) return !1;const i = e.$thumb;if (!i || "loading" === e.state) return !1;n.classList.add("fancybox__no-click");const s = i.getBoundingClientRect();let a;if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {const e = document.elementFromPoint(s.left + 1, s.top + 1) === i, t = document.elementFromPoint(s.right - 1, s.bottom - 1) === i;a = e && t} else a = document.elementFromPoint(s.left + .5 * s.width, s.top + .5 * s.height) === i;return n.classList.remove("fancybox__no-click"), a}zoomIn() {const e = this.fancybox, t = e.getSlide(), n = t.Panzoom, {top: i, left: s, scale: a, opacity: o} = this.getZoomInfo(t);e.trigger("reveal", t), n.panTo({x: -1 * s, y: -1 * i, scale: a, friction: 0, ignoreBounds: !0}), t.$content.style.visibility = "", t.state = "zoomIn", !0 === o && n.on("afterTransform", e => {"zoomIn" !== t.state && "zoomOut" !== t.state || (e.$content.style.opacity = Math.min(1, 1 - (1 - e.content.scale) / (1 - a)))}), n.panTo({x: 0, y: 0, scale: 1, friction: this.fancybox.option("Image.zoomFriction")})}zoomOut() {const e = this.fancybox, t = e.getSlide(), n = t.Panzoom;if (!n) return;t.state = "zoomOut", e.state = "customClosing", t.$caption && (t.$caption.style.visibility = "hidden");let i = this.fancybox.option("Image.zoomFriction");const s = e => {const {top: s, left: a, scale: o, opacity: r} = this.getZoomInfo(t);e || r || (i *= .82), n.panTo({x: -1 * a, y: -1 * s, scale: o, friction: i, ignoreBounds: !0}), i *= .98};window.addEventListener("scroll", s), n.once("endAnimation", () => {window.removeEventListener("scroll", s), e.destroy()}), s()}handleCursor(e) {if ("image" !== e.type || !e.$el) return;const t = e.Panzoom, n = this.fancybox.option("Image.click", !1, e), i = this.fancybox.option("Image.touch"), s = e.$el.classList, a = this.fancybox.option("Image.canZoomInClass"), o = this.fancybox.option("Image.canZoomOutClass");s.remove(o), s.remove(a), t && "toggleZoom" === n ? t && 1 === t.content.scale && t.option("maxScale") - t.content.scale > .01 ? s.add(a) : t.content.scale > 1 && !i && s.add(o) : "close" === n && s.add(o)}onWheel(e, t) {if ("ready" === this.fancybox.state && !1 !== this.fancybox.trigger("Image.wheel", t)) switch (this.fancybox.option("Image.wheel")) {case"zoom":"done" === e.state && e.Panzoom && e.Panzoom.zoomWithWheel(t);break;case"close":this.fancybox.close();break;case"slide":this.fancybox[t.deltaY < 0 ? "prev" : "next"]()}}onClick(e, t) {if ("ready" !== this.fancybox.state) return;const n = e.Panzoom;if (n && (n.dragPosition.midPoint || 0 !== n.dragOffset.x || 0 !== n.dragOffset.y || 1 !== n.dragOffset.scale)) return;if (this.fancybox.Carousel.Panzoom.lockAxis) return !1;const i = n => {switch (n) {case"toggleZoom":t.stopPropagation(), e.Panzoom && e.Panzoom.zoomWithClick(t);break;case"close":this.fancybox.close();break;case"next":t.stopPropagation(), this.fancybox.next()}}, s = this.fancybox.option("Image.click"), a = this.fancybox.option("Image.doubleClick");a ? this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null, i(a)) : this.clickTimer = setTimeout(() => {this.clickTimer = null, i(s)}, 300) : i(s)}onPageChange(e, t) {const n = e.getSlide();t.slides.forEach(e => {e.Panzoom && "done" === e.state && e.index !== n.index && e.Panzoom.panTo({x: 0, y: 0, scale: 1, friction: .8})})}attach() {this.fancybox.on(this.events)}detach() {this.fancybox.off(this.events)}}P.defaults = {canZoomInClass: "can-zoom_in", canZoomOutClass: "can-zoom_out", zoom: !0, zoomOpacity: "auto", zoomFriction: .82, ignoreCoveredThumbnail: !1, touch: !0, click: "toggleZoom", doubleClick: null, wheel: "zoom", fit: "contain", wrap: !1, Panzoom: {ratio: 1}};class L {constructor(e) {this.fancybox = e;for (const e of ["onChange", "onClosing"]) this[e] = this[e].bind(this);this.events = {initCarousel: this.onChange, "Carousel.change": this.onChange, closing: this.onClosing}, this.hasCreatedHistory = !1, this.origHash = "", this.timer = null}onChange(e) {const t = e.Carousel;this.timer && clearTimeout(this.timer);const n = null === t.prevPage, i = e.getSlide(), s = new URL(document.URL).hash;let a = !1;if (i.slug) a = "#" + i.slug; else {const n = i.$trigger && i.$trigger.dataset, s = e.option("slug") || n && n.fancybox;s && s.length && "true" !== s && (a = "#" + s + (t.slides.length > 1 ? "-" + (i.index + 1) : ""))}n && (this.origHash = s !== a ? s : ""), a && s !== a && (this.timer = setTimeout(() => {try {window.history[n ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + a), n && (this.hasCreatedHistory = !0)} catch (e) {}}, 300))}onClosing() {if (this.timer && clearTimeout(this.timer), !0 !== this.hasSilentClose) try {return void window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash || ""))} catch (e) {}}attach(e) {e.on(this.events)}detach(e) {e.off(this.events)}static startFromUrl() {const e = L.Fancybox;if (!e || e.getInstance() || !1 === e.defaults.Hash) return;const {hash: t, slug: n, index: i} = L.getParsedURL();if (!n) return;let s = document.querySelector(`[data-slug="${t}"]`);if (s && s.dispatchEvent(new CustomEvent("click", {bubbles: !0, cancelable: !0})), e.getInstance()) return;const a = document.querySelectorAll(`[data-fancybox="${n}"]`);a.length && (null === i && 1 === a.length ? s = a[0] : i && (s = a[i - 1]), s && s.dispatchEvent(new CustomEvent("click", {bubbles: !0, cancelable: !0})))}static onHashChange() {const {slug: e, index: t} = L.getParsedURL(), n = L.Fancybox, i = n && n.getInstance();if (i && i.plugins.Hash) {if (e) {const n = i.Carousel;if (e === i.option("slug")) return n.slideTo(t - 1);for (let t of n.slides) if (t.slug && t.slug === e) return n.slideTo(t.index);const s = i.getSlide(), a = s.$trigger && s.$trigger.dataset;if (a && a.fancybox === e) return n.slideTo(t - 1)}i.plugins.Hash.hasSilentClose = !0, i.close()}L.startFromUrl()}static create(e) {function t() {window.addEventListener("hashchange", L.onHashChange, !1), L.startFromUrl()}L.Fancybox = e, x && window.requestAnimationFrame(() => {/complete|interactive|loaded/.test(document.readyState) ? t() : document.addEventListener("DOMContentLoaded", t)})}static destroy() {window.removeEventListener("hashchange", L.onHashChange, !1)}static getParsedURL() {const e = window.location.hash.substr(1), t = e.split("-"), n = t.length > 1 && /^\+?\d+$/.test(t[t.length - 1]) && parseInt(t.pop(-1), 10) || null;return {hash: e, slug: t.join("-"), index: n}}}const A = {pageXOffset: 0, pageYOffset: 0, element: () => document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement, activate(e) {A.pageXOffset = window.pageXOffset, A.pageYOffset = window.pageYOffset, e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()}, deactivate() {document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()}};class O {constructor(e) {this.fancybox = e, this.active = !1, this.handleVisibilityChange = this.handleVisibilityChange.bind(this)}isActive() {return this.active}setTimer() {if (!this.active || this.timer) return;const e = this.fancybox.option("slideshow.delay", 3e3);this.timer = setTimeout(() => {this.timer = null, this.fancybox.option("infinite") || this.fancybox.getSlide().index !== this.fancybox.Carousel.slides.length - 1 ? this.fancybox.next() : this.fancybox.jumpTo(0, {friction: 0})}, e);let t = this.$progress;t || (t = document.createElement("div"), t.classList.add("fancybox__progress"), this.fancybox.$carousel.parentNode.insertBefore(t, this.fancybox.$carousel), this.$progress = t, t.offsetHeight), t.style.transitionDuration = e + "ms", t.style.transform = "scaleX(1)"}clearTimer() {clearTimeout(this.timer), this.timer = null, this.$progress && (this.$progress.style.transitionDuration = "", this.$progress.style.transform = "", this.$progress.offsetHeight)}activate() {this.active || (this.active = !0, this.fancybox.$container.classList.add("has-slideshow"), "done" === this.fancybox.getSlide().state && this.setTimer(), document.addEventListener("visibilitychange", this.handleVisibilityChange, !1))}handleVisibilityChange() {this.deactivate()}deactivate() {this.active = !1, this.clearTimer(), this.fancybox.$container.classList.remove("has-slideshow"), document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1)}toggle() {this.active ? this.deactivate() : this.fancybox.Carousel.slides.length > 1 && this.activate()}}const _ = {display: ["counter", "zoom", "slideshow", "fullscreen", "thumbs", "close"], autoEnable: !0, items: {counter: {position: "left", type: "div", class: "fancybox__counter", html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>', attr: {tabindex: -1}}, prev: {type: "button", class: "fancybox__button--prev", label: "PREV", html: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>', attr: {"data-fancybox-prev": ""}}, next: {type: "button", class: "fancybox__button--next", label: "NEXT", html: '<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>', attr: {"data-fancybox-next": ""}}, fullscreen: {type: "button", class: "fancybox__button--fullscreen", label: "TOGGLE_FULLSCREEN", html: '<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>', click: function (e) {e.preventDefault(), A.element() ? A.deactivate() : A.activate(this.fancybox.$container)}}, slideshow: {type: "button", class: "fancybox__button--slideshow", label: "TOGGLE_SLIDESHOW", html: '<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>', click: function (e) {e.preventDefault(), this.Slideshow.toggle()}}, zoom: {type: "button", class: "fancybox__button--zoom", label: "TOGGLE_ZOOM", html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>', click: function (e) {e.preventDefault();const t = this.fancybox.getSlide().Panzoom;t && t.toggleZoom()}}, download: {type: "link", label: "DOWNLOAD", class: "fancybox__button--download", html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>', click: function (e) {e.stopPropagation()}}, thumbs: {type: "button", label: "TOGGLE_THUMBS", class: "fancybox__button--thumbs", html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>', click: function (e) {e.stopPropagation();const t = this.fancybox.plugins.Thumbs;t && t.toggle()}}, close: {type: "button", label: "CLOSE", class: "fancybox__button--close", html: '<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>', attr: {"data-fancybox-close": "", tabindex: 0}}}};class z {constructor(e) {this.fancybox = e, this.$container = null, this.state = "init";for (const e of ["onInit", "onPrepare", "onDone", "onKeydown", "onClosing", "onChange", "onSettle", "onRefresh"]) this[e] = this[e].bind(this);this.events = {init: this.onInit, prepare: this.onPrepare, done: this.onDone, keydown: this.onKeydown, closing: this.onClosing, "Carousel.change": this.onChange, "Carousel.settle": this.onSettle, "Carousel.Panzoom.touchStart": () => this.onRefresh(), "Image.startAnimation": (e, t) => this.onRefresh(t), "Image.afterUpdate": (e, t) => this.onRefresh(t)}}onInit() {if (this.fancybox.option("Toolbar.autoEnable")) {let e = !1;for (const t of this.fancybox.items) if ("image" === t.type) {e = !0;break}if (!e) return void (this.state = "disabled")}for (const e of this.fancybox.option("Toolbar.display")) if ("close" === (i(e) ? e.id : e)) {this.fancybox.options.closeButton = !1;break}}onPrepare() {const e = this.fancybox;if ("init" === this.state && (this.build(), this.update(), this.Slideshow = new O(e), !e.Carousel.prevPage && (e.option("slideshow.autoStart") && this.Slideshow.activate(), e.option("fullscreen.autoStart") && !A.element()))) try {A.activate(e.$container)} catch (e) {}}onFsChange() {window.scrollTo(A.pageXOffset, A.pageYOffset)}onSettle() {const e = this.fancybox, t = this.Slideshow;t && t.isActive() && (e.getSlide().index !== e.Carousel.slides.length - 1 || e.option("infinite") ? "done" === e.getSlide().state && t.setTimer() : t.deactivate())}onChange() {this.update(), this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer()}onDone(e, t) {const n = this.Slideshow;t.index === e.getSlide().index && (this.update(), n && n.isActive() && (e.option("infinite") || t.index !== e.Carousel.slides.length - 1 ? n.setTimer() : n.deactivate()))}onRefresh(e) {e && e.index !== this.fancybox.getSlide().index || (this.update(), !this.Slideshow || !this.Slideshow.isActive() || e && "done" !== e.state || this.Slideshow.deactivate())}onKeydown(e, t, n) {" " === t && this.Slideshow && (this.Slideshow.toggle(), n.preventDefault())}onClosing() {this.Slideshow && this.Slideshow.deactivate(), document.removeEventListener("fullscreenchange", this.onFsChange)}createElement(e) {let t;"div" === e.type ? t = document.createElement("div") : (t = document.createElement("link" === e.type ? "a" : "button"), t.classList.add("carousel__button")), t.innerHTML = e.html, t.setAttribute("tabindex", e.tabindex || 0), e.class && t.classList.add(...e.class.split(" "));for (const n in e.attr) t.setAttribute(n, e.attr[n]);e.label && t.setAttribute("title", this.fancybox.localize(`{{${e.label}}}`)), e.click && t.addEventListener("click", e.click.bind(this)), "prev" === e.id && t.setAttribute("data-fancybox-prev", ""), "next" === e.id && t.setAttribute("data-fancybox-next", "");const n = t.querySelector("svg");return n && (n.setAttribute("role", "img"), n.setAttribute("tabindex", "-1"), n.setAttribute("xmlns", "http://www.w3.org/2000/svg")), t}build() {this.cleanup();const e = this.fancybox.option("Toolbar.items"), t = [{position: "left", items: []}, {position: "center", items: []}, {position: "right", items: []}], n = this.fancybox.plugins.Thumbs;for (const a of this.fancybox.option("Toolbar.display")) {let o, r;if (i(a) ? (o = a.id, r = s({}, e[o], a)) : (o = a, r = e[o]), ["counter", "next", "prev", "slideshow"].includes(o) && this.fancybox.items.length < 2) continue;if ("fullscreen" === o) {if (!document.fullscreenEnabled || window.fullScreen) continue;document.addEventListener("fullscreenchange", this.onFsChange)}if ("thumbs" === o && (!n || "disabled" === n.state)) continue;if (!r) continue;let l = r.position || "right", c = t.find(e => e.position === l);c && c.items.push(r)}const a = document.createElement("div");a.classList.add("fancybox__toolbar");for (const e of t) if (e.items.length) {const t = document.createElement("div");t.classList.add("fancybox__toolbar__items"), t.classList.add("fancybox__toolbar__items--" + e.position);for (const n of e.items) t.appendChild(this.createElement(n));a.appendChild(t)}this.fancybox.$carousel.parentNode.insertBefore(a, this.fancybox.$carousel), this.$container = a}update() {const e = this.fancybox.getSlide(), t = e.index, n = this.fancybox.items.length, i = e.downloadSrc || ("image" !== e.type || e.error ? null : e.src);for (const e of this.fancybox.$container.querySelectorAll("a.fancybox__button--download")) i ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"), e.setAttribute("href", i), e.setAttribute("download", i), e.setAttribute("target", "_blank")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", -1), e.removeAttribute("href"), e.removeAttribute("download"));const s = e.Panzoom, a = s && s.option("maxScale") > s.option("baseScale");for (const e of this.fancybox.$container.querySelectorAll(".fancybox__button--zoom")) a ? e.removeAttribute("disabled") : e.setAttribute("disabled", "");for (const t of this.fancybox.$container.querySelectorAll("[data-fancybox-index]")) t.innerHTML = e.index + 1;for (const e of this.fancybox.$container.querySelectorAll("[data-fancybox-count]")) e.innerHTML = n;if (!this.fancybox.option("infinite")) {for (const e of this.fancybox.$container.querySelectorAll("[data-fancybox-prev]")) 0 === t ? e.setAttribute("disabled", "") : e.removeAttribute("disabled");for (const e of this.fancybox.$container.querySelectorAll("[data-fancybox-next]")) t === n - 1 ? e.setAttribute("disabled", "") : e.removeAttribute("disabled")}}cleanup() {this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer(), this.$container && this.$container.remove(), this.$container = null}attach() {this.fancybox.on(this.events)}detach() {this.fancybox.off(this.events), this.cleanup()}}z.defaults = _;const I = {ScrollLock: class {constructor(e) {this.fancybox = e, this.viewport = null, this.pendingUpdate = null;for (const e of ["onReady", "onResize", "onTouchstart", "onTouchmove"]) this[e] = this[e].bind(this)}onReady() {const e = window.visualViewport;e && (this.viewport = e, this.startY = 0, e.addEventListener("resize", this.onResize), this.updateViewport()), window.addEventListener("touchstart", this.onTouchstart, {passive: !1}), window.addEventListener("touchmove", this.onTouchmove, {passive: !1}), window.addEventListener("wheel", this.onWheel, {passive: !1})}onResize() {this.updateViewport()}updateViewport() {const e = this.fancybox, t = this.viewport, n = t.scale || 1, i = e.$container;if (!i) return;let s = "", a = "", o = "";n - 1 > .1 && (s = t.width * n + "px", a = t.height * n + "px", o = `translate3d(${t.offsetLeft}px, ${t.offsetTop}px, 0) scale(${1 / n})`), i.style.width = s, i.style.height = a, i.style.transform = o}onTouchstart(e) {this.startY = e.touches ? e.touches[0].screenY : e.screenY}onTouchmove(e) {const t = this.startY, n = window.innerWidth / window.document.documentElement.clientWidth;if (!e.cancelable) return;if (e.touches.length > 1 || 1 !== n) return;const i = o(e.composedPath()[0]);if (!i) return void e.preventDefault();const s = window.getComputedStyle(i), a = parseInt(s.getPropertyValue("height"), 10), r = e.touches ? e.touches[0].screenY : e.screenY, l = t <= r && 0 === i.scrollTop, c = t >= r && i.scrollHeight - i.scrollTop === a;(l || c) && e.preventDefault()}onWheel(e) {o(e.composedPath()[0]) || e.preventDefault()}cleanup() {this.pendingUpdate && (cancelAnimationFrame(this.pendingUpdate), this.pendingUpdate = null);const e = this.viewport;e && (e.removeEventListener("resize", this.onResize), this.viewport = null), window.removeEventListener("touchstart", this.onTouchstart, !1), window.removeEventListener("touchmove", this.onTouchmove, !1), window.removeEventListener("wheel", this.onWheel, {passive: !1})}attach() {this.fancybox.on("initLayout", this.onReady)}detach() {this.fancybox.off("initLayout", this.onReady), this.cleanup()}}, Thumbs: T, Html: k, Toolbar: z, Image: P, Hash: L}, D = {startIndex: 0, preload: 1, infinite: !0, showClass: "fancybox-zoomInUp", hideClass: "fancybox-fadeOut", animated: !0, hideScrollbar: !0, parentEl: null, mainClass: null, autoFocus: !0, trapFocus: !0, placeFocusBack: !0, click: "close", closeButton: "inside", dragToClose: !0, keyboard: {Escape: "close", Delete: "close", Backspace: "close", PageUp: "next", PageDown: "prev", ArrowUp: "next", ArrowDown: "prev", ArrowRight: "next", ArrowLeft: "prev"}, template: {closeButton: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>', spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>', main: null}, l10n: {CLOSE: "Close", NEXT: "Next", PREV: "Previous", MODAL: "You can close this modal content with the ESC key", ERROR: "Something Went Wrong, Please Try Again Later", IMAGE_ERROR: "Image Not Found", ELEMENT_NOT_FOUND: "HTML Element Not Found", AJAX_NOT_FOUND: "Error Loading AJAX : Not Found", AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden", IFRAME_ERROR: "Error Loading Page", TOGGLE_ZOOM: "Toggle zoom level", TOGGLE_THUMBS: "Toggle thumbnails", TOGGLE_SLIDESHOW: "Toggle slideshow", TOGGLE_FULLSCREEN: "Toggle full-screen mode", DOWNLOAD: "Download"}}, N = new Map;let H = 0;class R extends h {constructor(e, t = {}) {e = e.map(e => (e.width && (e._width = e.width), e.height && (e._height = e.height), e)), super(s(!0, {}, D, t)), this.bindHandlers(), this.state = "init", this.setItems(e), this.attachPlugins(R.Plugins), this.trigger("init"), !0 === this.option("hideScrollbar") && this.hideScrollbar(), this.initLayout(), this.initCarousel(), this.attachEvents(), N.set(this.id, this), this.trigger("prepare"), this.state = "ready", this.trigger("ready"), this.$container.setAttribute("aria-hidden", "false"), this.option("trapFocus") && this.focus()}option(e, ...t) {const n = this.getSlide();let i = n ? n[e] : void 0;return void 0 !== i ? ("function" == typeof i && (i = i.call(this, this, ...t)), i) : super.option(e, ...t)}bindHandlers() {for (const e of ["onMousedown", "onKeydown", "onClick", "onFocus", "onCreateSlide", "onSettle", "onTouchMove", "onTouchEnd", "onTransform"]) this[e] = this[e].bind(this)}attachEvents() {document.addEventListener("mousedown", this.onMousedown), document.addEventListener("keydown", this.onKeydown, !0), this.option("trapFocus") && document.addEventListener("focus", this.onFocus, !0), this.$container.addEventListener("click", this.onClick)}detachEvents() {document.removeEventListener("mousedown", this.onMousedown), document.removeEventListener("keydown", this.onKeydown, !0), document.removeEventListener("focus", this.onFocus, !0), this.$container.removeEventListener("click", this.onClick)}initLayout() {this.$root = this.option("parentEl") || document.body;let e = this.option("template.main");e && (this.$root.insertAdjacentHTML("beforeend", this.localize(e)), this.$container = this.$root.querySelector(".fancybox__container")), this.$container || (this.$container = document.createElement("div"), this.$root.appendChild(this.$container)), this.$container.onscroll = () => (this.$container.scrollLeft = 0, !1), Object.entries({class: "fancybox__container", role: "dialog", tabIndex: "-1", "aria-modal": "true", "aria-hidden": "true", "aria-label": this.localize("{{MODAL}}")}).forEach(e => this.$container.setAttribute(...e)), this.option("animated") && this.$container.classList.add("is-animated"), this.$backdrop = this.$container.querySelector(".fancybox__backdrop"), this.$backdrop || (this.$backdrop = document.createElement("div"), this.$backdrop.classList.add("fancybox__backdrop"), this.$container.appendChild(this.$backdrop)), this.$carousel = this.$container.querySelector(".fancybox__carousel"), this.$carousel || (this.$carousel = document.createElement("div"), this.$carousel.classList.add("fancybox__carousel"), this.$container.appendChild(this.$carousel)), this.$container.Fancybox = this, this.id = this.$container.getAttribute("id"), this.id || (this.id = this.options.id || ++H, this.$container.setAttribute("id", "fancybox-" + this.id));const t = this.option("mainClass");return t && this.$container.classList.add(...t.split(" ")), document.documentElement.classList.add("with-fancybox"), this.trigger("initLayout"), this}setItems(e) {const t = [];for (const n of e) {const e = n.$trigger;if (e) {const t = e.dataset || {};n.src = t.src || e.getAttribute("href") || n.src, n.type = t.type || n.type, !n.src && e instanceof HTMLImageElement && (n.src = e.currentSrc || n.$trigger.src)}let i = n.$thumb;if (!i) {let e = n.$trigger && n.$trigger.origTarget;e && (i = e instanceof HTMLImageElement ? e : e.querySelector("img:not([aria-hidden])")), !i && n.$trigger && (i = n.$trigger instanceof HTMLImageElement ? n.$trigger : n.$trigger.querySelector("img:not([aria-hidden])"))}n.$thumb = i || null;let s = n.thumb;!s && i && (s = i.currentSrc || i.src, !s && i.dataset && (s = i.dataset.lazySrc || i.dataset.src)), s || "image" !== n.type || (s = n.src), n.thumb = s || null, n.caption = n.caption || "", t.push(n)}this.items = t}initCarousel() {return this.Carousel = new w(this.$carousel, s(!0, {}, {prefix: "", classNames: {viewport: "fancybox__viewport", track: "fancybox__track", slide: "fancybox__slide"}, textSelection: !0, preload: this.option("preload"), friction: .88, slides: this.items, initialPage: this.options.startIndex, slidesPerPage: 1, infiniteX: this.option("infinite"), infiniteY: !0, l10n: this.option("l10n"), Dots: !1, Navigation: {classNames: {main: "fancybox__nav", button: "carousel__button", next: "is-next", prev: "is-prev"}}, Panzoom: {textSelection: !0, panOnlyZoomed: () => this.Carousel && this.Carousel.pages && this.Carousel.pages.length < 2 && !this.option("dragToClose"), lockAxis: () => {if (this.Carousel) {let e = "x";return this.option("dragToClose") && (e += "y"), e}}}, on: {"*": (e, ...t) => this.trigger("Carousel." + e, ...t), init: e => this.Carousel = e, createSlide: this.onCreateSlide, settle: this.onSettle}}, this.option("Carousel"))), this.option("dragToClose") && this.Carousel.Panzoom.on({touchMove: this.onTouchMove, afterTransform: this.onTransform, touchEnd: this.onTouchEnd}), this.trigger("initCarousel"), this}onCreateSlide(e, t) {let n = t.caption || "";if ("function" == typeof this.options.caption && (n = this.options.caption.call(this, this, this.Carousel, t)), "string" == typeof n && n.length) {const e = document.createElement("div"), i = `fancybox__caption_${this.id}_${t.index}`;e.className = "fancybox__caption", e.innerHTML = n, e.setAttribute("id", i), t.$caption = t.$el.appendChild(e), t.$el.classList.add("has-caption"), t.$el.setAttribute("aria-labelledby", i)}}onSettle() {this.option("autoFocus") && this.focus()}onFocus(e) {this.isTopmost() && this.focus(e)}onClick(e) {if (e.defaultPrevented) return;let t = e.composedPath()[0];if (t.matches("[data-fancybox-close]")) return e.preventDefault(), void R.close(!1, e);if (t.matches("[data-fancybox-next]")) return e.preventDefault(), void R.next();if (t.matches("[data-fancybox-prev]")) return e.preventDefault(), void R.prev();const n = document.activeElement;if (n) {if (n.closest("[contenteditable]")) return;t.matches(C) || n.blur()}if (!t.closest(".fancybox__content") && !getSelection().toString().length && !1 !== this.trigger("click", e)) switch (this.option("click")) {case"close":this.close();break;case"next":this.next()}}onTouchMove() {const e = this.getSlide().Panzoom;return !e || 1 === e.content.scale}onTouchEnd(e) {const t = e.dragOffset.y;Math.abs(t) >= 150 || Math.abs(t) >= 35 && e.dragOffset.time < 350 ? (this.option("hideClass") && (this.getSlide().hideClass = "fancybox-throwOut" + (e.content.y < 0 ? "Up" : "Down")), this.close()) : "y" === e.lockAxis && e.panTo({y: 0})}onTransform(e) {if (this.$backdrop) {const t = Math.abs(e.content.y), n = t < 1 ? "" : Math.max(.33, Math.min(1, 1 - t / e.content.fitHeight * 1.5));this.$container.style.setProperty("--fancybox-ts", n ? "0s" : ""), this.$container.style.setProperty("--fancybox-opacity", n)}}onMousedown() {"ready" === this.state && document.body.classList.add("is-using-mouse")}onKeydown(e) {if (!this.isTopmost()) return;document.body.classList.remove("is-using-mouse");const t = e.key, n = this.option("keyboard");if (!n || e.ctrlKey || e.altKey || e.shiftKey) return;const i = e.composedPath()[0], s = document.activeElement && document.activeElement.classList, a = s && s.contains("carousel__button");if ("Escape" !== t && !a && (e.target.isContentEditable || -1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(i.nodeName))) return;if (!1 === this.trigger("keydown", t, e)) return;const o = n[t];"function" == typeof this[o] && this[o]()}getSlide() {const e = this.Carousel;if (!e) return null;const t = null === e.page ? e.option("initialPage") : e.page, n = e.pages || [];return n.length && n[t] ? n[t].slides[0] : null}focus(e) {if (R.ignoreFocusChange) return;if (["init", "closing", "customClosing", "destroy"].indexOf(this.state) > -1) return;const t = this.$container, n = this.getSlide(), i = "done" === n.state ? n.$el : null;if (i && i.contains(document.activeElement)) return;e && e.preventDefault(), R.ignoreFocusChange = !0;const s = Array.from(t.querySelectorAll(C));let a, o = [];for (let e of s) {const t = e.offsetParent, n = i && i.contains(e), s = !this.Carousel.$viewport.contains(e);t && (n || s) ? (o.push(e), void 0 !== e.dataset.origTabindex && (e.tabIndex = e.dataset.origTabindex, e.removeAttribute("data-orig-tabindex")), (e.hasAttribute("autoFocus") || !a && n && !e.classList.contains("carousel__button")) && (a = e)) : (e.dataset.origTabindex = void 0 === e.dataset.origTabindex ? e.getAttribute("tabindex") : e.dataset.origTabindex, e.tabIndex = -1)}e ? o.indexOf(e.target) > -1 ? this.lastFocus = e.target : this.lastFocus === t ? S(o[o.length - 1]) : S(t) : this.option("autoFocus") && a ? S(a) : o.indexOf(document.activeElement) < 0 && S(t), this.lastFocus = document.activeElement, R.ignoreFocusChange = !1}hideScrollbar() {if (!x) return;const e = window.innerWidth - document.documentElement.getBoundingClientRect().width, t = "fancybox-style-noscroll";let n = document.getElementById(t);n || e > 0 && (n = document.createElement("style"), n.id = t, n.type = "text/css", n.innerHTML = `.compensate-for-scrollbar {padding-right: ${e}px;}`, document.getElementsByTagName("head")[0].appendChild(n), document.body.classList.add("compensate-for-scrollbar"))}revealScrollbar() {document.body.classList.remove("compensate-for-scrollbar");const e = document.getElementById("fancybox-style-noscroll");e && e.remove()}clearContent(e) {this.Carousel.trigger("removeSlide", e), e.$content && (e.$content.remove(), e.$content = null), e.$closeButton && (e.$closeButton.remove(), e.$closeButton = null), e._className && e.$el.classList.remove(e._className)}setContent(e, t, n = {}) {let i;const s = e.$el;if (t instanceof HTMLElement) ["img", "iframe", "video", "audio"].indexOf(t.nodeName.toLowerCase()) > -1 ? (i = document.createElement("div"), i.appendChild(t)) : i = t; else {const e = document.createRange().createContextualFragment(t);i = document.createElement("div"), i.appendChild(e)}if (e.filter && !e.error && (i = i.querySelector(e.filter)), i instanceof Element) return e._className = "has-" + (n.suffix || e.type || "unknown"), s.classList.add(e._className), i.classList.add("fancybox__content"), "none" !== i.style.display && "none" !== getComputedStyle(i).getPropertyValue("display") || (i.style.display = e.display || this.option("defaultDisplay") || "flex"), e.id && i.setAttribute("id", e.id), e.$content = i, s.prepend(i), this.manageCloseButton(e), "loading" !== e.state && this.revealContent(e), i;this.setError(e, "{{ELEMENT_NOT_FOUND}}")}manageCloseButton(e) {const t = void 0 === e.closeButton ? this.option("closeButton") : e.closeButton;if (!t || "top" === t && this.$closeButton) return;const n = document.createElement("button");n.classList.add("carousel__button", "is-close"), n.setAttribute("title", this.options.l10n.CLOSE), n.innerHTML = this.option("template.closeButton"), n.addEventListener("click", e => this.close(e)), "inside" === t ? (e.$closeButton && e.$closeButton.remove(), e.$closeButton = e.$content.appendChild(n)) : this.$closeButton = this.$container.insertBefore(n, this.$container.firstChild)}revealContent(e) {this.trigger("reveal", e), e.$content.style.visibility = "";let t = !1;e.error || "loading" === e.state || null !== this.Carousel.prevPage || e.index !== this.options.startIndex || (t = void 0 === e.showClass ? this.option("showClass") : e.showClass), t ? (e.state = "animating", this.animateCSS(e.$content, t, () => {this.done(e)})) : this.done(e)}animateCSS(e, t, n) {if (e && e.dispatchEvent(new CustomEvent("animationend", {bubbles: !0, cancelable: !0})), !e || !t) return void ("function" == typeof n && n());const i = function (s) {s.currentTarget === this && (e.removeEventListener("animationend", i), n && n(), e.classList.remove(t))};e.addEventListener("animationend", i), e.classList.add(t)}done(e) {e.state = "done", this.trigger("done", e);const t = this.getSlide();t && e.index === t.index && this.option("autoFocus") && this.focus()}setError(e, t) {e.error = t, this.hideLoading(e), this.clearContent(e);const n = document.createElement("div");n.classList.add("fancybox-error"), n.innerHTML = this.localize(t || "<p>{{ERROR}}</p>"), this.setContent(e, n, {suffix: "error"})}showLoading(e) {e.state = "loading", e.$el.classList.add("is-loading");let t = e.$el.querySelector(".fancybox__spinner");t || (t = document.createElement("div"), t.classList.add("fancybox__spinner"), t.innerHTML = this.option("template.spinner"), t.addEventListener("click", () => {this.Carousel.Panzoom.velocity || this.close()}), e.$el.prepend(t))}hideLoading(e) {const t = e.$el && e.$el.querySelector(".fancybox__spinner");t && (t.remove(), e.$el.classList.remove("is-loading")), "loading" === e.state && (this.trigger("load", e), e.state = "ready")}next() {const e = this.Carousel;e && e.pages.length > 1 && e.slideNext()}prev() {const e = this.Carousel;e && e.pages.length > 1 && e.slidePrev()}jumpTo(...e) {this.Carousel && this.Carousel.slideTo(...e)}isClosing() {return ["closing", "customClosing", "destroy"].includes(this.state)}isTopmost() {return R.getInstance().id == this.id}close(e) {if (e && e.preventDefault(), this.isClosing()) return;if (!1 === this.trigger("shouldClose", e)) return;if (this.state = "closing", this.Carousel.Panzoom.destroy(), this.detachEvents(), this.trigger("closing", e), "destroy" === this.state) return;this.$container.setAttribute("aria-hidden", "true"), this.$container.classList.add("is-closing");const t = this.getSlide();if (this.Carousel.slides.forEach(e => {e.$content && e.index !== t.index && this.Carousel.trigger("removeSlide", e)}), "closing" === this.state) {const e = void 0 === t.hideClass ? this.option("hideClass") : t.hideClass;this.animateCSS(t.$content, e, () => {this.destroy()}, !0)}}destroy() {if ("destroy" === this.state) return;this.state = "destroy", this.trigger("destroy");const e = this.option("placeFocusBack") ? this.option("triggerTarget", this.getSlide().$trigger) : null;this.Carousel.destroy(), this.detachPlugins(), this.Carousel = null, this.options = {}, this.events = {}, this.$container.remove(), this.$container = this.$backdrop = this.$carousel = null, e && S(e), N.delete(this.id);const t = R.getInstance();t ? t.focus() : (document.documentElement.classList.remove("with-fancybox"), document.body.classList.remove("is-using-mouse"), this.revealScrollbar())}static show(e, t = {}) {return new R(e, t)}static fromEvent(e, t = {}) {if (e.defaultPrevented) return;if (e.button && 0 !== e.button) return;if (e.ctrlKey || e.metaKey || e.shiftKey) return;const n = e.composedPath()[0];let i, s, a, o = n;if ((o.matches("[data-fancybox-trigger]") || (o = o.closest("[data-fancybox-trigger]"))) && (t.triggerTarget = o, i = o && o.dataset && o.dataset.fancyboxTrigger), i) {const e = document.querySelectorAll(`[data-fancybox="${i}"]`), t = parseInt(o.dataset.fancyboxIndex, 10) || 0;o = e.length ? e[t] : o}Array.from(R.openers.keys()).reverse().some(t => {a = o || n;let i = !1;try {a instanceof Element && ("string" == typeof t || t instanceof String) && (i = a.matches(t) || (a = a.closest(t)))} catch (e) {}return !!i && (e.preventDefault(), s = t, !0)});let r = !1;if (s) {t.event = e, t.target = a, a.origTarget = n, r = R.fromOpener(s, t);const i = R.getInstance();i && "ready" === i.state && e.detail && document.body.classList.add("is-using-mouse")}return r}static fromOpener(e, t = {}) {let n = [], i = t.startIndex || 0, a = t.target || null;const o = void 0 !== (t = s({}, t, R.openers.get(e))).groupAll && t.groupAll, r = void 0 === t.groupAttr ? "data-fancybox" : t.groupAttr, l = r && a ? a.getAttribute("" + r) : "";if (!a || l || o) {const i = t.root || (a ? a.getRootNode() : document.body);n = [].slice.call(i.querySelectorAll(e))}if (a && !o && (n = l ? n.filter(e => e.getAttribute("" + r) === l) : [a]), !n.length) return !1;const c = R.getInstance();return !(c && n.indexOf(c.options.$trigger) > -1) && (i = a ? n.indexOf(a) : i, n = n.map((function (e) {const t = ["false", "0", "no", "null", "undefined"], n = ["true", "1", "yes"], i = Object.assign({}, e.dataset), s = {};for (let [e, a] of Object.entries(i)) if ("fancybox" !== e) if ("width" === e || "height" === e) s["_" + e] = a; else if ("string" == typeof a || a instanceof String) if (t.indexOf(a) > -1) s[e] = !1; else if (n.indexOf(s[e]) > -1) s[e] = !0; else try {s[e] = JSON.parse(a)} catch (t) {s[e] = a} else s[e] = a;return e instanceof Element && (s.$trigger = e), s})), new R(n, s({}, t, {startIndex: i, $trigger: a})))}static bind(e, t = {}) {function n() {document.body.addEventListener("click", R.fromEvent, !1)}x && (R.openers.size || (/complete|interactive|loaded/.test(document.readyState) ? n() : document.addEventListener("DOMContentLoaded", n)), R.openers.set(e, t))}static unbind(e) {R.openers.delete(e), R.openers.size || R.destroy()}static destroy() {let e;for (; e = R.getInstance();) e.destroy();R.openers = new Map, document.body.removeEventListener("click", R.fromEvent, !1)}static getInstance(e) {return e ? N.get(e) : Array.from(N.values()).reverse().find(e => !e.isClosing() && e) || null}static close(e = !0, t) {if (e) for (const e of N.values()) e.close(t); else {const e = R.getInstance();e && e.close(t)}}static next() {const e = R.getInstance();e && e.next()}static prev() {const e = R.getInstance();e && e.prev()}}R.version = "4.0.31", R.defaults = D, R.openers = new Map, R.Plugins = I, R.bind("[data-fancybox]");for (const [e, t] of Object.entries(R.Plugins || {})) "function" == typeof t.create && t.create(R)
    },
    function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}),
        t.modal = t.modalsInit = void 0;
    var i, s = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), a = n(0), o = (i = a) && i.__esModule ? i : {default: i}, r = n(11), l = n(3);
    var c = new (function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e),
                this.modalSelector = "[data-modal]",
                this.body = (0, o.default)("body"),
                this.doc = (0, o.default)(document),
                this.closeTimeout = 300,
                this.activeClass = "is-active",
                this.loadingClass = "modal-loading"
        }

        return s(e, [{
            key: "isOtherOpen", value: function () {
                return (0, o.default)(this.modalSelector).filter("." + this.activeClass).length
            }
        }, {
            key: "open", value: function (e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = arguments[2],
                    i = (0, o.default)("[data-modal=" + e + "]");
                t && (0, r.lockScroll)(), n && "function" == typeof n && n(), i.addClass(this.activeClass).focus(), this.body.addClass("modal-open"), this.doc.trigger("modal-open", [e]), document.dispatchEvent(new CustomEvent("modal-open", {detail: e}))
            }
        }, {
            key: "openWithAjax", value: function (e, t) {
                var n = this;
                if ((0, o.default)("[data-modal=" + e + "]").length) this.open(e); else {
                    var i = "localhost" === location.hostname || "192.168.1.33" === location.hostname ? "/ajax/" + e + ".html" : "./ajax/" + e + ".html",
                        s = "localhost" === location.hostname || "192.168.1.33" === location.hostname ? "html" : "json",
                        a = "localhost" === location.hostname || "192.168.1.33" === location.hostname ? "GET" : "POST";
                    o.default.ajax({
                        type: a,
                        url: i,
                        data: {action: "LoadBlocks/getModal", modalID: e, params: t},
                        dataType: s,
                        beforeSend: function () {
                            n.showLoader()
                        },
                        success: function (t) {
                            var n = t.MODAL_HTML ? t.MODAL_HTML : t;
                            document.body.insertAdjacentHTML("beforeend", n), c.open(e)
                        },
                        error: function () {
                            n.showError()
                        },
                        complete: function () {
                            n.hideLoader()
                        }
                    })
                }
            }
        }, {
            key: "close", value: function (e) {
                var t = this, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = arguments[2],
                    s = (0, o.default)("[data-modal=" + e + "]"), a = s.data("modal-onclose");
                e ? "fast-order" == e ? s.remove() : s.removeClass(this.activeClass) : (0, o.default)("[data-modal]").removeClass(this.activeClass), i && "function" == typeof i && i(), this.isOtherOpen() || setTimeout((function () {
                    n && (0, r.unlockScroll)(), t.body.removeClass("modal-open"), "remove" === a && s.remove()
                }), this.closeTimeout), this.doc.trigger("modal-close", [e])
            }
        }, {
            key: "toggle", value: function (e) {
                (0, o.default)("[data-modal=" + e + "]").hasClass(this.activeClass) ? this.close(e) : this.open(e)
            }
        }, {
            key: "showLoader", value: function () {
                var e = (0, o.default)(".modal-loader");
                e.length || (e = (0, o.default)('<div class="modal-loader" />'), this.body.append(e)), this.body.addClass(this.loadingClass)
            }
        }, {
            key: "hideLoader", value: function () {
                this.body.removeClass(this.loadingClass)
            }
        }, {
            key: "showError", value: function () {
                var e = (0, o.default)('[data-modal="modal-error"]');
                e.length || (e = (0, o.default)('<div class="modal" data-modal="modal-error"><div class="modal__error">Произошла ошибка</div></div>'), this.body.append(e)), this.open("modal-error")
            }
        }, {
            key: "onModalLoaded", value: function (e) {
            }
        }]), e
    }());
    window.modal = c, (t.modalsInit = function () {
        var e = (0, o.default)(document);

        function t() {
            (0, o.default)(".detail-menu").each((function (e, t) {
                var n = (0, o.default)(t).data("modal");
                c.close(n, !1)
            }))
        }

        e.on("click", "[data-modal-open]", (function (e) {
            e.preventDefault();
            var t = (0, o.default)(this).data("modal-open");
            // console.log('o:', o);
            // console.log('c:', c);
            c.open(t)
        })), e.on("click", "[data-modal-ajax-open]", (function (e) {
            e.preventDefault();
            var t = (0, o.default)(this), n = t.data("modal-ajax-open"), i = t.data();
            c.openWithAjax(n, i)
        })), e.on("click", "[data-modal-close]", (function (e) {
            e.preventDefault();
            var t = (0, o.default)(this).data("modal-close");
            c.close(t)
        })), e.on("click", "[data-modal]", (function (e) {
            if (!(0, o.default)(e.target).closest("[data-modal-inner]").length) {
                e.preventDefault();
                var t = (0, o.default)(e.currentTarget).data("modal");
                c.close(t)
            }
        })), e.on("click", "[data-modal-toggle]", (function (e) {
            e.preventDefault();
            var t = (0, o.default)(this), n = t.data("modal-toggle");
            (0, o.default)("[data-modal-toggle='" + n + "'").toggleClass("is-active"), t.hasClass("is-active") ? c.open(n) : c.close(n)
        })), e.on("mouseenter", "[data-modal-menu-open]", (function (e) {
            e.preventDefault();
            var n = (0, o.default)(this).data("modal-menu-open");
            t(), n && c.open(n, !1)
        })), l.$header.on("mouseleave", (function () {
            t()
        }))
    })(), t.modal = c
},
    function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = document.createElement("div");
    i.style.overflowY = "scroll", i.style.width = "50px", i.style.height = "50px", i.style.visibility = "hidden";
    var s = void 0;
    document.addEventListener("DOMContentLoaded", (function () {
        document.body.appendChild(i), s = i.offsetWidth - i.clientWidth, document.body.removeChild(i)
    }));
    var a = document.getElementsByTagName("body")[0], o = document.getElementsByTagName("header")[0], r = null, l = !1;
    t.lockScroll = function () {
        l || (window.document.documentElement.clientHeight < a.scrollHeight && (a.style.paddingRight = s + "px", o.style.paddingRight = s + "px"), r = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop, a.classList.add("scroll-locked"), a.style.overflow = "hidden", l = !0)
    }, t.unlockScroll = function () {
        l && (a.classList.remove("scroll-locked"), a.style.top = null, window.scrollTo(0, r), a.style.paddingRight = "", o.style.paddingRight = "", l = !1, a.style.overflow = null)
    }
},
    function (e, t, n) {
    /* Кастом accordion */
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }();
    var s = function () {
        function e(t, n) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            this.options = Object.assign({}, {
                isOtherClose: !1,
                speed: 600
            }), this.accordion = t, this.accordionHead = t.querySelector("[data-accordion-head]"), this.accordionBody = t.querySelector("[data-accordion-body]"), this.accordionHead && this.accordionBody && (this.beforeInit(), this.initialization())
        }

        return i(e, [{
            key: "beforeInit", value: function () {
                var e = this;
                this.accordion.classList.contains("is-open") && (this.accordionBody.style.transition = "none", this.accordionBody.style.maxHeight = "100%", document.addEventListener("accordionInit", (function () {
                    e.accordionBody.style.transition = null, e.accordionBody.style.maxHeight = e.accordionBody.scrollHeight + "px"
                })))
            }
        }, {
            key: "initialization", value: function () {
                var e = new Event("accordionInit");
                this.accordion.classList.add("accordion-init"), this.accordionHead.addEventListener("click", this.toggle.bind(this)), document.dispatchEvent(e)
            }
        }, {
            key: "toggle", value: function () {
                this.accordion.classList.contains("is-open") ? this.close() : this.open()
            }
        }, {
            key: "open", value: function () {
                var e = new Event("accordionOpen");
                this.accordionBody.style.maxHeight = this.accordionBody.scrollHeight + "px", this.accordion.classList.add("is-open"), document.dispatchEvent(e)
            }
        }, {
            key: "close", value: function () {
                this.accordionBody.style = null, this.accordion.classList.remove("is-open")
            }
        }]), e
    }();
    t.initAccordions = function () {
        document.querySelectorAll(".accordion").forEach((function (e) {
            new s(e)
        }))
    }
},
    function (e, t, n) {
    /* Какой-то инпут */

    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {function e(e, t) {for (var n = 0; n < t.length; n++) {var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)}}return function (t, n, i) {return n && e(t.prototype, n), i && e(t, i), t}}();var s = function () {function e(t, n) {!function (e, t) {if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")}(this, e);var i = {head: "[data-select-head]", body: "[data-select-body]", title: "[data-select-title]", items: "[data-select-item]", value: "[data-select-value]", input: void 0, changeHead: !0, closeOnSelect: !0, afterSelect: null, defaultSelect: !0, defaultInput: !1};this.options = Object.assign(i, n), this.dom = {}, this.dom.el = t, this.options.defaultInput && this.createInput(), this.options.defaultSelect && this.createSelect(), this.dom.head = this.dom.el.querySelector(this.options.head), this.dom.body = this.dom.el.querySelector(this.options.body), this.dom.title = this.dom.el.querySelector(this.options.title), this.dom.items = this.dom.el.querySelectorAll(this.options.items), this.dom.input = this.dom.el.querySelector(this.options.input), this.dom.value = this.dom.el.querySelector(this.options.value), this.dom.name = this.dom.el.dataset.selectName, this.defaultValue = this.dom.value.innerText, this.activeClass = "is-active", this.isTouch = window.innerWidth <= 1100, this.isOpen = !1, this.preventClick = this.dom.el.dataset.selectPrevent, this.setEvents(), this.dom.el.setAttribute("data-select-init", "true")}return i(e, [{key: "setEvents", value: function () {var e = this;this.dom.head.addEventListener("click", this.toggle.bind(this)), this.dom.items.forEach((function (t) {t.addEventListener("click", (function (n) {e.preventClick && n.preventDefault();var i = n.target.closest("[data-select-item]");e.changeActive(i);var s = t.dataset.selectItemValue, a = i.classList.contains("active") ? i.innerHTML : e.defaultValue;e.dom.select && e.changeSelect(i.dataset.selectItemValue), e.options.changeHead && e.changeHead(a), e.dom.input && e.changeInput(a), e.options.closeOnSelect && e.close(), e.dom.input && e.changeInput(s)}))}))}}, {key: "open", value: function () {this.isOpen = !0, this.dom.el.classList.add(this.activeClass)}}, {key: "close", value: function () {this.isOpen = !1, this.dom.el.classList.remove(this.activeClass)}}, {key: "toggle", value: function () {this.dom.el.classList.contains(this.activeClass) ? this.close() : this.open()}}, {key: "closeOnEdge", value: function (e) {e.target.closest(this.dom.el.className) || this.close()}}, {key: "changeHead", value: function (e) {this.dom.value.innerHTML = e}}, {key: "changeInput", value: function (e) {this.dom.input.value = e}}, {key: "changeActive", value: function (e) {this.dom.items.forEach((function (e) {return e.classList.remove("active")})), e.classList.contains("active") || e.classList.add("active")}}, {key: "createSelect", value: function () {var e = this, t = document.createElement("select");t.setAttribute("name", this.dom.name), this.dom.items.forEach((function (e) {var n = new Option;n.text = e.innerHTML, n.value = e.dataset.selectItemValue, t.add(n)})), this.dom.el.append(t), this.dom.select = t, this.dom.select.addEventListener("change", (function (t) {console.log(e.dom.el.querySelector("[data-select-item-value=" + t.target.value + "]")), e.changeActive(e.dom.el.querySelector("[data-select-item-value=" + t.target.value + "]")), e.changeHead(e.dom.el.querySelector("[data-select-item-value=" + t.target.value + "]").innerText)}))}}, {key: "createInput", value: function () {var e = document.createElement("input");e.setAttribute("type", "hidden"), e.setAttribute("value", "0"), this.dom.el.append(e)}}, {key: "changeSelect", value: function (e) {this.dom.select.value = e}}]), e}();t.default = s;t.initSelectSize = function () {document.querySelectorAll("[data-select-size]").forEach((function (e) {new s(e, {})}))}, t.initSelect = function () {document.querySelectorAll("[data-select]").forEach((function (e) {new s(e, {defaultSelect: !1, defaultInput: !0, input: 'input[type="hidden"]'})}))}
},
    function (e, t, n) {
    /* Кастом */

    "use strict";

    function i(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    var s = [], a = document.querySelector(".files-preview-wrapper"),
        o = document.querySelector(".files-preview-wrapper__container"), r = document.getElementById("modal-input");

    function l(e, t) {
        for (var n = 0; n < t.length; n++) e.push(t[n]);
        return e
    }

    function c(e, t) {
        if (!e.type || e.type.startsWith("image/")) {
            var n = new FileReader;
            n.onload = function () {
                var i = document.createElement("img");
                i.src = n.result, i.id = "" + e.lastModified, t.appendChild(i)
            }, n.readAsDataURL(e)
        } else console.log("File is not an image.", e.type, e)
    }

    function d(e) {
        a.querySelector(".file-input").classList.add("file-input--hide"), o.querySelector(".file-input-mini").classList.add("file-input-mini--visible"), o.querySelectorAll(".files-preview-wrapper__img").forEach((function (e) {
            return e.remove()
        }));
        for (var t = 0; t < e.length; t++) {
            var n = document.createElement("div");
            n.classList.add("files-preview-wrapper__img"), c(e[t], n), o.appendChild(n), u(n)
        }
        e.length > 0 ? (a.querySelector(".file-input").classList.add("file-input--hide"), o.querySelector(".file-input-mini").classList.add("file-input-mini--visible")) : (a.querySelector(".file-input").classList.remove("file-input--hide"), o.querySelector(".file-input-mini").classList.remove("file-input-mini--visible"))
    }

    function u(e) {
        console.log(e), e.addEventListener("click", (function (t) {
            var n = e.querySelector("img").id, a = s.filter((function (e) {
                return e.lastModified !== Number(n)
            }));
            d(s = [].concat(i(a)))
        }))
    }

    if($('#file-drag').length){
        document.getElementById("file-drag").addEventListener("drop", (function (e) {
            s = [].concat(i(l(s, e.target.files)))
        }), !1), r.addEventListener("change", (function (e) {
            d(s = [].concat(i(l(s, e.target.files))))
        }))
    }
},
    function (e, t, n) {

    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }();

    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    !function () {
        function e(t, n) {
            s(this, e);
            this.options = Object.assign({
                tabActive: function () {
                }, tabClose: function () {
                }
            }, n),
                this.tabs = t,
                this.tabsList = document.querySelector(".tabs-list"),
                this.tabsItems = document.querySelectorAll(".tabs-item"),
                this.tabsWrap = document.querySelector(".tabs-wrap"),
                this.tabsContent = document.querySelectorAll(".tabs-content"),
                this.event()
        }

        i(e, [{
            key: "event", value: function () {
                var e = this;
                this.tabs && this.tabsList.addEventListener("click", (function (t) {
                    if (t.target.closest(".tabs-item-link")) {
                        var n = t.target.closest(".tabs-item-link").dataset.tabsOpen;
                        e.tabsItems.forEach((function (e) {
                            e.classList.remove("tabs-item-active")
                        })), t.target.closest(".tabs-item").classList.add("tabs-item-active"), e.tabsContent.forEach((function (e) {
                            e.classList.remove("tabs-content-active")
                        })), e.tabsWrap.querySelector("[data-tabs=" + n + "]").classList.add("tabs-content-active")
                    }
                }))
            }
        }])
    }();
    $(document).on("modal-open", o),
    $(document).ready(o);
    var a = function () {
        function e(t, n) {
            s(this, e);
            this.options = Object.assign({
                head: "[data-tabs-head]",
                body: "[data-tabs-body]",
                item: "[data-tabs-item]",
                content: "[data-tabs-content]"
            }, t),
                this.dom = {},
                this.dom.el = t,
                this.dom.head = this.dom.el.querySelector(this.options.head),
                this.dom.body = this.dom.el.querySelector(this.options.body),
                this.dom.item = this.dom.el.querySelectorAll(this.options.item),
                this.dom.content = this.dom.el.querySelectorAll(this.options.content),
                this.activeClass = "is-active",
                this.isTouch = window.innerWidth <= 1100,
                this.isOpen = !1, this.setEvents(),
                this.dom.el.setAttribute("data-tabs-init", !0)
        }

        return i(e, [{
            key: "setEvents", value: function () {
                var e = this;
                this.dom.item.forEach((function (t) {
                    t.addEventListener("click", e.toggleTab.bind(e))
                }))
            }
        }, {
            key: "toggleTab", value: function (e) {
                this.close(), this.open(e)
            }
        }, {
            key: "open", value: function (e) {
                e.target.closest(this.options.item) && (e.target.closest(this.options.item).classList.add(this.activeClass),
                // console.log(this.dom.el.querySelector("[data-tabs-content=" + e.target.closest(this.options.item).dataset.tabsItem + "]")),
                this.dom.el.querySelector("[data-tabs-content=" + e.target.closest(this.options.item).dataset.tabsItem + "]").classList.add(this.activeClass))
            }
        }, {
            key: "close", value: function () {
                var e = this;
                this.dom.content.forEach((function (t) {
                    t.classList.remove(e.activeClass)
                })), this.dom.item.forEach((function (t) {
                    t.classList.remove(e.activeClass)
                }))
            }
        }]), e
    }();
    t.default = a;
    var o = t.initTabs = function () {
        // console.log('initTabs')

        document.querySelectorAll("[data-tabs]").forEach((function (e) {
            new a(e, {})
        }))
    }
}
]);