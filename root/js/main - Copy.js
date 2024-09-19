/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 */
!function(e,t,i,o){var n=e(t);e.fn.lazyload=function(r){function f(){var t=0;l.each(function(){var i=e(this);if(!h.skip_invisible||i.is(":visible"))if(e.abovethetop(this,h)||e.leftofbegin(this,h));else if(e.belowthefold(this,h)||e.rightoffold(this,h)){if(++t>h.failure_limit)return!1}else i.trigger("appear"),t=0})}var a,l=this,h={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:t,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return r&&(o!==r.failurelimit&&(r.failure_limit=r.failurelimit,delete r.failurelimit),o!==r.effectspeed&&(r.effect_speed=r.effectspeed,delete r.effectspeed),e.extend(h,r)),a=h.container===o||h.container===t?n:e(h.container),0===h.event.indexOf("scroll")&&a.bind(h.event,function(){return f()}),this.each(function(){var t=this,i=e(t);t.loaded=!1,(i.attr("src")===o||i.attr("src")===!1)&&i.is("img")&&i.attr("src",h.placeholder),i.one("appear",function(){if(!this.loaded){if(h.appear){var o=l.length;h.appear.call(t,o,h)}e("<img />").bind("load",function(){var o=i.attr("data-"+h.data_attribute);i.hide(),i.is("img")?i.attr("src",o):i.css("background-image","url('"+o+"')"),i[h.effect](h.effect_speed),t.loaded=!0;var n=e.grep(l,function(e){return!e.loaded});if(l=e(n),h.load){var r=l.length;h.load.call(t,r,h)}}).attr("src",i.attr("data-"+h.data_attribute))}}),0!==h.event.indexOf("scroll")&&i.bind(h.event,function(){t.loaded||i.trigger("appear")})}),n.bind("resize",function(){f()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&n.bind("pageshow",function(t){t.originalEvent&&t.originalEvent.persisted&&l.each(function(){e(this).trigger("appear")})}),e(i).ready(function(){f()}),this},e.belowthefold=function(i,r){var f;return f=r.container===o||r.container===t?(t.innerHeight?t.innerHeight:n.height())+n.scrollTop():e(r.container).offset().top+e(r.container).height(),f<=e(i).offset().top-r.threshold},e.rightoffold=function(i,r){var f;return f=r.container===o||r.container===t?n.width()+n.scrollLeft():e(r.container).offset().left+e(r.container).width(),f<=e(i).offset().left-r.threshold},e.abovethetop=function(i,r){var f;return f=r.container===o||r.container===t?n.scrollTop():e(r.container).offset().top,f>=e(i).offset().top+r.threshold+e(i).height()},e.leftofbegin=function(i,r){var f;return f=r.container===o||r.container===t?n.scrollLeft():e(r.container).offset().left,f>=e(i).offset().left+r.threshold+e(i).width()},e.inviewport=function(t,i){return!(e.rightoffold(t,i)||e.leftofbegin(t,i)||e.belowthefold(t,i)||e.abovethetop(t,i))},e.extend(e.expr[":"],{"below-the-fold":function(t){return e.belowthefold(t,{threshold:0})},"above-the-top":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-screen":function(t){return e.rightoffold(t,{threshold:0})},"left-of-screen":function(t){return!e.rightoffold(t,{threshold:0})},"in-viewport":function(t){return e.inviewport(t,{threshold:0})},"above-the-fold":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-fold":function(t){return e.rightoffold(t,{threshold:0})},"left-of-fold":function(t){return!e.rightoffold(t,{threshold:0})}})}(jQuery,window,document);
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*AutoSuggest Code*/ 
var asnRePrompt=!1;"undefined"==typeof bsn&&(_b=bsn={}),"undefined"==typeof _b.Autosuggest&&(_b.Autosuggest={}),_b.AutoSuggest=function(t,e){if(!document.getElementById)return 0;if(this.fld=_b.DOM.gE(t),!this.fld)return 0;this.sInp="",this.nInpC=0,this.aSug=[],this.iHigh=0,this.oP=e?e:{};var i,s={minchars:1,meth:"get",varname:"input",className:"autosuggest",timeout:2500,delay:500,offsety:-5,shownoresults:!0,noresults:"No results!",maxheight:250,cache:!0,maxentries:25,acctReFocusOpt:"",functionCall:"",moreUrlFunction:"",minWidth:0,pgmName:""};for(i in s)typeof this.oP[i]!=typeof s[i]&&(this.oP[i]=s[i]);var n=this;this.fld.onkeypress=function(t){return n.onKeyPress(t)},this.fld.onkeyup=function(t){return n.onKeyUp(t)},this.fld.setAttribute("autocomplete","false")},_b.AutoSuggest.prototype.onKeyPress=function(t){var e=window.event?window.event.keyCode:t.keyCode,i=13,s=27,n=1;switch(e){case i:this.setHighlightedValue("onKeyPress"),n=0;break;case s:this.clearSuggestions()}return n},_b.AutoSuggest.prototype.onKeyUp=function(t){var e=window.event?window.event.keyCode:t.keyCode,i=38,s=40,n=1;switch(e){case i:this.changeHighlight(e),n=0;break;case s:this.changeHighlight(e),n=0;break;default:this.getSuggestions(this.fld.value)}return n},_b.AutoSuggest.prototype.getSuggestions=function(t){if(t==this.sInp)return 0;if(_b.DOM.remE(this.idAs),this.sInp=t,t.length<this.oP.minchars)return this.aSug=[],this.nInpC=t.length,0;var e=this.nInpC;this.nInpC=t.length?t.length:0;var i=this.aSug.length;if(this.nInpC>e&&i&&i<this.oP.maxentries&&this.oP.cache){for(var s=[],n=0;i>n;n++)this.aSug[n].value.substr(0,t.length).toLowerCase()==t.toLowerCase()&&s.push(this.aSug[n]);return this.aSug=s,this.createList(this.aSug),!1}var o=this,h=this.sInp;return clearTimeout(this.ajID),this.ajID=setTimeout(function(){o.doAjaxRequest(h)},this.oP.delay),!1},_b.AutoSuggest.prototype.doAjaxRequest=function(t){if(t!=this.fld.value)return!1;var e=this;if("function"==typeof this.oP.script)var i=this.oP.script(encodeURIComponent(this.sInp));else var i=this.oP.script+this.oP.varname+"="+encodeURIComponent(this.sInp);if(!i)return!1;var s=this.oP.meth,t=this.sInp,n=function(i){e.setSuggestions(i,t)},o=function(t){},h=new _b.Ajax;h.makeRequest(i,s,n,o)},_b.AutoSuggest.prototype.setSuggestions=function(a,b){if(b!=this.fld.value)return!1;if(this.aSug=[],this.oP.json)for(var c=eval("("+a.responseText+")"),i=0;i<c.results.length;i++)this.aSug.push({id:c.results[i].id,value:c.results[i].value,info1:c.results[i].info1,info2:c.results[i].info2,hasMore:c.results[i].hasMore});else for(var d=a.responseXML,e=d.getElementsByTagName("results")[0].childNodes,i=0;i<e.length;i++)e[i].hasChildNodes()&&this.aSug.push({id:e[i].getAttribute("id"),value:e[i].childNodes[0].nodeValue,info1:e[i].getAttribute("info1"),info2:e[i].getAttribute("info2"),hasMore:e[i].getAttribute("hasMore")});this.idAs="as_"+this.fld.id,this.createList(this.aSug)},_b.AutoSuggest.prototype.createList=function(t){var e=this;if(_b.DOM.remE(this.idAs),this.killTimeout(),0==t.length&&!this.oP.shownoresults)return!1;var i=_b.DOM.cE("div",{id:this.idAs,className:this.oP.className}),s=_b.DOM.cE("div",{className:"as_corner"}),n=_b.DOM.cE("div",{className:"as_bar"}),o=_b.DOM.cE("div",{className:"as_header"});o.appendChild(s),o.appendChild(n),i.appendChild(o);for(var h=_b.DOM.cE("ul",{id:"as_ul"}),a=0;a<t.length;a++){var r,u,l=t[a].info1;if(null!=l)var c=l.toLowerCase().indexOf(this.sInp.toLowerCase()),u=l.substring(0,c)+"<em>"+l.substring(c,c+this.sInp.length)+"</em>"+l.substring(c+this.sInp.length),u=l,r=_b.DOM.cE("span",{},u,!0);else var r=_b.DOM.cE("span",{},"",!0);if(""!=t[a].info2){if(null!=l){var f=_b.DOM.cE("br",{});r.appendChild(f)}var g=t[a].info2.split("-br-");for(segx in g){if(segx>0){var d=_b.DOM.cE("br",{});r.appendChild(d)}var p=g[segx].split("-nbsp-");nbsp="";for(segx2 in p)nbsp+="&nbsp;&nbsp;";var b=_b.DOM.cE("small",{},nbsp+p[p.length-1],!0);r.appendChild(b)}}var m=_b.DOM.cE("a",{href:"#"}),v=_b.DOM.cE("span",{className:"tl"}," "),_=_b.DOM.cE("span",{className:"tr"}," ");m.appendChild(v),m.appendChild(_),m.appendChild(r),m.name=a+1,m.onclick=function(){return e.setHighlightedValue("onclick"),asnRePrompt&&setTimeout(function(){e.getSuggestions(e.fld.value)},500),asnRePrompt=!1,!1},m.onmouseover=function(){e.setHighlight(this.name)};var y=_b.DOM.cE("li",{},m);h.appendChild(y)}if(0==t.length&&this.oP.shownoresults){var y=_b.DOM.cE("li",{className:"as_warning"},this.oP.noresults);h.appendChild(y)}i.appendChild(h);var O=_b.DOM.cE("div",{className:"as_corner"}),M=_b.DOM.cE("div",{className:"as_bar"}),P=_b.DOM.cE("div",{className:"as_footer"});P.appendChild(O),P.appendChild(M),i.appendChild(P);var C=_b.DOM.getPos(this.fld);i.style.left=C.x+"px",i.style.top=C.y+this.fld.offsetHeight+this.oP.offsety+"px",this.fld.offsetWidth>this.oP.minWidth?i.style.width=this.fld.offsetWidth+"px":i.style.width=this.oP.minWidth+"px",i.onmouseover=function(){e.killTimeout()},i.onmouseout=function(){e.resetTimeout()},document.getElementsByTagName("body")[0].appendChild(i),this.iHigh=0;var e=this;this.toID=setTimeout(function(){e.clearSuggestions()},this.oP.timeout)},_b.AutoSuggest.prototype.changeHighlight=function(t){var e=_b.DOM.gE("as_ul");if(!e)return!1;var i;40==t?i=this.iHigh+1:38==t&&(i=this.iHigh-1),i>e.childNodes.length&&(i=e.childNodes.length),1>i&&(i=1),this.setHighlight(i)},_b.AutoSuggest.prototype.setHighlight=function(t){var e=_b.DOM.gE("as_ul");return e?(this.iHigh>0&&this.clearHighlight(),this.iHigh=Number(t),e.childNodes[this.iHigh-1].className="as_highlight",void this.killTimeout()):!1},_b.AutoSuggest.prototype.clearHighlight=function(){var t=_b.DOM.gE("as_ul");return t?void(this.iHigh>0&&(t.childNodes[this.iHigh-1].className="",this.iHigh=0)):!1},_b.AutoSuggest.prototype.setHighlightedValue=function(t){this.iHigh&&(this.sInp=this.fld.value=this.aSug[this.iHigh-1].value,this.fld.focus(),this.fld.selectionStart&&this.fld.setSelectionRange(this.sInp.length,this.sInp.length),this.clearSuggestions(),"function"==typeof this.oP.callback&&this.oP.callback(this.aSug[this.iHigh-1]),this.handleOptCode(t))},_b.AutoSuggest.prototype.handleOptCode=function(eventType){"*FMTAC"==this.oP.acctReFocusOpt?"1"==this.aSug[this.iHigh-1].hasMore&&(this.fld.value=this.fld.value+".","onclick"==eventType&&(asnRePrompt=!0)):"*GEOFMT"==this.oP.acctReFocusOpt?(GEO=this.aSug[this.iHigh-1].hasMore.split("|"),call=this.oP.functionCall+"('"+GEO[0]+"','"+GEO[1]+"','"+GEO[2]+"','"+GEO[3]+"','"+GEO[4]+"')",eval(call)):"*ITMSLT"==this.oP.acctReFocusOpt?(call=this.oP.functionCall+"(this.fld,'"+this.oP.pgmName+"','"+this.oP.acctReFocusOpt.substring(1)+"')",eval(call)):"*"==this.oP.acctReFocusOpt.substring(0,1)&&(myActn=this.oP.acctReFocusOpt.substring(1),submit_form("f",myActn))},_b.AutoSuggest.prototype.killTimeout=function(){clearTimeout(this.toID)},_b.AutoSuggest.prototype.resetTimeout=function(){clearTimeout(this.toID);var t=this;this.toID=setTimeout(function(){t.clearSuggestions()},1e3)},_b.AutoSuggest.prototype.clearSuggestions=function(){this.killTimeout();var t=_b.DOM.gE(this.idAs),e=this;if(t){new _b.Fader(t,1,0,250,function(){_b.DOM.remE(e.idAs)})}},"undefined"==typeof _b.Ajax&&(_b.Ajax={}),_b.Ajax=function(){this.req={},this.isIE=!1},_b.Ajax.prototype.makeRequest=function(t,e,i,s){"POST"!=e&&(e="GET"),this.onComplete=i,this.onError=s;var n=this;window.XMLHttpRequest?(this.req=new XMLHttpRequest,this.req.onreadystatechange=function(){n.processReqChange()},this.req.open("GET",t,!0),this.req.send(null)):window.ActiveXObject&&(this.req=new ActiveXObject("Microsoft.XMLHTTP"),this.req&&(this.req.onreadystatechange=function(){n.processReqChange()},this.req.open(e,t,!0),this.req.send()))},_b.Ajax.prototype.processReqChange=function(){4==this.req.readyState&&(200==this.req.status?this.onComplete(this.req):this.onError(this.req.status))},"undefined"==typeof _b.DOM&&(_b.DOM={}),_b.DOM.cE=function(t,e,i,s){var n=document.createElement(t);if(!n)return 0;for(var o in e)n[o]=e[o];var h=typeof i;return"string"!=h||s?"string"==h&&s?n.innerHTML=i:"object"==h&&n.appendChild(i):n.appendChild(document.createTextNode(i)),n},_b.DOM.gE=function(t){var e=typeof t;if("undefined"==e)return 0;if("string"==e){var i=document.getElementById(t);return i&&"undefined"!=typeof i.appendChild?i:0}return"undefined"!=typeof t.appendChild?t:0},_b.DOM.remE=function(t){var e=this.gE(t);return e&&e.parentNode.removeChild(e)?!0:0},_b.DOM.getPos=function(t){var t=this.gE(t),e=t,i=0;if(e.offsetParent)for(;e.offsetParent;)i+=e.offsetLeft,e=e.offsetParent;else e.x&&(i+=e.x);var e=t,s=0;if(e.offsetParent)for(;e.offsetParent;)s+=e.offsetTop,e=e.offsetParent;else e.y&&(s+=e.y);return{x:i,y:s}},"undefined"==typeof _b.Fader&&(_b.Fader={}),_b.Fader=function(t,e,i,s,n){if(!t)return 0;this.e=t,this.from=e,this.to=i,this.cb=n,this.nDur=s,this.nInt=50,this.nTime=0;var o=this;this.nID=setInterval(function(){o._fade()},this.nInt)},_b.Fader.prototype._fade=function(){this.nTime+=this.nInt;var t=Math.round(100*this._tween(this.nTime,this.from,this.to,this.nDur)),e=t/100;if(this.e.filters)try{this.e.filters.item("DXImageTransform.Microsoft.Alpha").opacity=t}catch(i){this.e.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+t+")"}else this.e.style.opacity=e;this.nTime==this.nDur&&(clearInterval(this.nID),void 0!=this.cb&&this.cb())},_b.Fader.prototype._tween=function(t,e,i,s){return e+(i-e)*(t/s)},_b.Fader.prototype._tween=function(t,e,i,s){return e+(i-e)*(t/s)};

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.3
 */
(function(){if("undefined"!=typeof window&&window.addEventListener){var e=Object.create(null),m,t,d=function(){clearTimeout(t);t=setTimeout(m,100)},q=function(){},u=function(){var f;window.addEventListener("resize",d,!1);window.addEventListener("orientationchange",d,!1);window.MutationObserver?(f=new MutationObserver(d),f.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),q=function(){try{f.disconnect(),window.removeEventListener("resize",d,!1),window.removeEventListener("orientationchange",d,
!1)}catch(n){}}):(document.documentElement.addEventListener("DOMSubtreeModified",d,!1),q=function(){document.documentElement.removeEventListener("DOMSubtreeModified",d,!1);window.removeEventListener("resize",d,!1);window.removeEventListener("orientationchange",d,!1)})},v=function(f){function e(a){var c;void 0!==a.protocol?c=a:(c=document.createElement("a"),c.href=a);return c.protocol.replace(/:/g,"")+c.host}var d,p;window.XMLHttpRequest&&(d=new XMLHttpRequest,p=e(location),f=e(f),d=void 0===d.withCredentials&&
""!==f&&f!==p?XDomainRequest||void 0:XMLHttpRequest);return d};m=function(){function d(){--r;0===r&&(q(),u())}function n(a){return function(){!0!==e[a.base]&&(a.isXlink?a.useEl.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+a.hash):a.useEl.setAttribute("href","#"+a.hash))}}function m(a){return function(){var c=document.body,b=document.createElement("x");a.onload=null;b.innerHTML=a.responseText;if(b=b.getElementsByTagName("svg")[0])b.setAttribute("aria-hidden","true"),b.style.position=
"absolute",b.style.width=0,b.style.height=0,b.style.overflow="hidden",c.insertBefore(b,c.firstChild);d()}}function p(a){return function(){a.onerror=null;a.ontimeout=null;d()}}var a,c,l,g,r=0,b,k=!1,h;q();h=document.getElementsByTagName("use");for(g=0;g<h.length;g+=1){try{c=h[g].getBoundingClientRect()}catch(w){c=!1}(a=h[g].getAttribute("href"))?k=!1:(a=h[g].getAttributeNS("http://www.w3.org/1999/xlink","href"),k=!0);l=a&&a.split?a.split("#"):["",""];a=l[0];l=l[1];b=c&&0===c.left&&0===c.right&&0===
c.top&&0===c.bottom;c&&0===c.width&&0===c.height&&!b?a.length&&(b=e[a],!0!==b&&setTimeout(n({useEl:h[g],base:a,hash:l,isXlink:k}),0),void 0===b&&(k=v(a),void 0!==k&&(b=new k,e[a]=b,b.onload=m(b),b.onerror=p(b),b.ontimeout=p(b),b.open("GET",a),b.send(),r+=1))):b?a.length&&e[a]&&setTimeout(n({useEl:h[g],base:a,hash:l,isXlink:k}),0):void 0===e[a]?e[a]=!0:e[a].onload&&(e[a].abort(),delete e[a].onload,e[a]=!0)}h="";r+=1;d()};window.addEventListener("load",function n(){window.removeEventListener("load",
n,!1);t=setTimeout(m,0)},!1)}})();
//Main javascript
jQuery(document).ready(function(e){
e(".account__collapse").on("show.bs.collapse",function(){e(this).parent().addClass("active")}),
e(".account__collapse").on("hide.bs.collapse",function(){e(this).parent().removeClass("active")}),
e(".mobileFilterToggle").on("click",function(t){t.preventDefault(),e(".mobile-category-filter, .mobile-category-filter__overlay").addClass("active")}),
e(".mobile-category-filter #closeMobileFilter").on("click",function(t){t.preventDefault(),e(".mobile-category-filter, .mobile-category-filter__overlay").removeClass("active")}),
e(".mobile-category-filter #applyMobileFilter").on("click",function(t){t.preventDefault(),console.log("apply mobile filter"),
e(".mobile-category-filter, .mobile-category-filter__overlay").removeClass("active")});
var t=function(){
  var t=e(".mobile-category-filter > .filter__footer"),
  i=e(".mobile-category-filter > .filter__header > .filter__header--info"),
  o=e(".mobile-category-filter > .filter__header > .filter__header--info > .filter__counter"),
  l=e(".mobile-category-filter li label.selected");
  o.text("("+l.length+")"),l.length?(i.addClass("active"),t.addClass("active")):(i.removeClass("active"),t.removeClass("active"))
};
e(".mobile-category-filter > .subnav  .subnav__l2 > li").not(".mobile-filter__l2").on("click",function(i){i.preventDefault(),e(this).toggleClass("selected"),t()}),
e(".mobile-category-filter > .subnav .mobile-filter__label").on("click",function(i){i.preventDefault(),e(this).toggleClass("selected"),t()}),
e(".mobile-category-filter #clearMobileFilter").on("click",function(t){t.preventDefault();var i=e(".mobile-category-filter > .filter__footer"),o=e(".mobile-category-filter > .filter__header > .filter__header--info"),l=e(".mobile-category-filter .selected");l.length&&(l.each(function(){e(this).removeClass("selected")}),o.removeClass("active"),i.removeClass("active"))})
}),
jQuery(document).ready(function(e){
e("[data-step-edit]").on("click",function(t){t.preventDefault();var i=e(this).data("step-edit"),o=e(i),l=e(".checkout__step.active");if(o.toggleClass("active"),l.removeClass("active"),window.innerWidth<=480){var a=o.offset().top;e(window).scrollTop(a-90-15)}}),
e("#stepOneForm").submit(function(t){t.preventDefault(),e("#stepOne").addClass("active")}),
e(".checkout .shipping__radio").change(function(){var t=e(this).val(),i=e("#shipping__price--"+t);e(".shipping__price.selected").removeClass("selected"),i.addClass("selected")})
}),
jQuery(document).ready(function(e){
    function t(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}e("#equip__calculate").on("keyup",function(i){i.preventDefault();var o=(e(this).val(),37*e(this).val()),l=parseInt(o);(o||0===l)&&e("#equip__savings").text(t(o))})}),
jQuery(document).ready(function(e){e("#equip__calculate").on("keyup",function(t){t.preventDefault();var i=(e(this).val(),37*e(this).val());(i||0===i)&&e("#equip__savings").text(i)})}),
jQuery(document).ready(function(e){}),jQuery(document).ready(function(e){ var myVar;
e("#navigation li.menuf").on("mouseenter",function(){clearTimeout(myVar);e("#navigation-dropdown").addClass("active"),e("#navigation-dropdown .sub-nav-category.active").removeClass("active");var t=e(this).data("href");e("#navigation-dropdown .sub-nav-category#"+t).addClass("active")}),
e("#navigation li.menuf").on("mouseleave",function(){myVar = setTimeout(function(){ e("#navigation-dropdown,#navigation-dropdown .sub-nav-category").removeClass("active") }, 100);}),
e("#navigation-dropdown").on("mouseenter",function(){e(this).addClass("active");var t=e(".sub-nav-category.active").attr("id");e("#F"+t.substring(3)).addClass("active");clearTimeout(myVar);}),
e("#navigation-dropdown").on("mouseleave",function(){e(this).removeClass("active"),e("#navigation li.active,#navigation-dropdown .sub-nav-category").removeClass("active")}),
e("#signInModalForm").submit(function(t){t.preventDefault(),e("#utility-bar__logged-out").addClass("hidden"),e("#utility-bar__logged-in").removeClass("hidden")})}),
function(e){e.fn.slideMenu=function(){"use strict";return this.each(function(){e(".subnav__l2--header").on("click",function(t){t.preventDefault(),e(this).next(".subnav__l3").addClass("isOpen")}),e(".subnav__l3--header").on("click",function(t){t.preventDefault(),e(this).parent().removeClass("isOpen")})})}}(jQuery),
jQuery(document).ready(function(e){function t(){e("body").toggleClass("no-scroll"),e(".mobile-nav").toggleClass("active")}e("#mobile-menu, #mobile-overlay, #mobileSignIn").on("click",function(e){e.preventDefault(),t()}),e("#mobile-sidebar").slideMenu()}),
jQuery(document).ready(function(e){
e(".product__options--list > a").on("click",function(t){
t.preventDefault();
var i=e(this).parent("ul"),
o=e(i).data("text"),
l=e(this).attr("title"),
a=e(this).data("class");}),
e("#product__also-purchased--carousel").slick({arrows:!1,dots:!0,mobileFirst:!0,responsive:[{breakpoint:991,settings:4},{breakpoint:767,settings:{slidesToShow:2}}]}),e("#product__mobile-slider, #product__quote--carousel").slick({arrows:!1,dots:!0,mobileFirst:!0,responsive:[{breakpoint:991,settings:4},{breakpoint:767,settings:{slidesToShow:1}}]}),e("[data-zoom]").click(function(t){t.preventDefault();var i=e(this).data("zoom"),o=e("#"+i),l=o.attr("src"),a="";e("#zoomModal .img-zoom").attr("src",l),e(this).data("zoom-title")?(a=e(this).data("zoom-title"),e("#zoomModal .modal-title").text(a)):o.attr("alt")?(a=o.attr("alt"),e("#zoomModal .modal-title").text(a)):e("#zoomModal .modal-title").hide(),e("#zoomModal").modal("show")})}),$(window).resize(function(){}),
jQuery(document).ready(function(e){e("#recommended-products-carousel").slick({arrows:!1,dots:!0,mobileFirst:!0,responsive:[{breakpoint:991,settings:{slidesToShow:4}},{breakpoint:767,settings:{slidesToShow:2}}]})}),
jQuery(document).ready(function(e){
  e("#headerSearchAutofill").autofill(),e("#mobileSearchAutofill").autofill(),
  e("#mobileSearchIcon,#mobileSearchButton").on("click",function(t){t.preventDefault(),e("#mobileSearchAutofill").addClass("active"),e("#mobileSearchAutofill #mobile-header-search").focus()}),
  e("#mobileSearchAutofill #closeMobileSearch").on("click",function(t){t.preventDefault(),e("#mobileSearchAutofill").removeClass("active")})}),
jQuery(document).ready(function(e){e("#sizeChartTabs a").click(function(t){t.preventDefault(),e(this).tab("show")})}),
function(e){e.fn.reslick=function(t,i){return this.each(function(){var o=screen.width,l="",a={arrows:!1,dots:!0,mobileFirst:!0,responsive:[{breakpoint:991,settings:"unslick"},{breakpoint:767,settings:{slidesToShow:i}}]};o<=768?l="xs":o<=992?l="sm":o<=1200?l="md":o<=1400&&(l="lg"),l===t?e(this).not(".slick-initialized").slick(a):e(this).hasClass(".slick-initialized")&&e(this).unslick()})},e.fn.autofill=function(){var t=this.find(".autofill__input"),i=(this.find(".autofill__popup"),this.find(".autofill__search-for"));this.find(".search__autofill--mask");t.on("keyup",function(){var o=e(t).val();e(i).text(o)})}}(jQuery),jQuery(document).ready(function(e){e("[data-visibility]").on("click",function(t){t.preventDefault();var i=e(this).data("visibility");e(i).toggle()})}); 
//Wait Loader Section ==============================================||||||||||==
var iosOverlay=function(a){"use strict";var b,c=function(){},d={onbeforeshow:c,onshow:c,onbeforehide:c,onhide:c,text:"",icon:null,spinner:null,duration:null,id:null,parentEl:null},e=function(a,b){var c={};for(var d in a)c[d]=a[d];for(var e in b)c[e]=b[e];return c},f=function(){var a=document.body||document.documentElement,b=a.style,c="transition";if("string"==typeof b[c])return!0;var d=["Moz","Webkit","Khtml","O","ms"];c=c.charAt(0).toUpperCase()+c.substr(1);for(var e=0;e<d.length;e++)if("string"==typeof b[d[e]+c])return!0;return!1}(),g=e(d,a),h=function(a){"ios-overlay-show"===a.animationName&&g.onshow(),"ios-overlay-hide"===a.animationName&&(k(),g.onhide())},j=(function(){b=document.createElement("div"),b.className="ui-ios-overlay",b.innerHTML+='<span class="title">'+g.text+"</span",a.icon?b.innerHTML+='<img src="'+a.icon+'">':a.spinner&&b.appendChild(a.spinner.el),f&&(b.addEventListener("webkitAnimationEnd",h,!1),b.addEventListener("msAnimationEnd",h,!1),b.addEventListener("oAnimationEnd",h,!1),b.addEventListener("animationend",h,!1)),a.parentEl?document.getElementById(a.parentEl).appendChild(b):document.body.appendChild(b),g.onbeforeshow(),f?b.className+=" ios-overlay-show":"function"==typeof $&&$(b).fadeIn({duration:200},function(){g.onshow()}),g.duration&&window.setTimeout(function(){j()},g.duration)}(),function(){g.onbeforehide(),f?b.className=b.className.replace("show","hide"):"function"==typeof $&&$(b).fadeOut({duration:200},function(){k(),g.onhide()})}),k=function(){a.parentEl?document.getElementById(a.parentEl).removeChild(b):document.body.removeChild(b)};return{hide:j,destroy:k,update:function(a){a.text&&(b.getElementsByTagName("span")[0].innerHTML=a.text),a.icon&&(g.spinner&&g.spinner.el.parentNode.removeChild(g.spinner.el),b.innerHTML+='<img src="'+a.icon+'">')}}};!function(a,b,c){function d(a,c){var e,d=b.createElement(a||"div");for(e in c)d[e]=c[e];return d}function e(a){for(var b=1,c=arguments.length;b<c;b++)a.appendChild(arguments[b]);return a}function f(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=m.substring(0,m.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return l[e]||(n.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",n.cssRules.length),l[e]=1),e}function g(a,b){var e,f,d=a.style;if(d[b]!==c)return b;for(b=b.charAt(0).toUpperCase()+b.slice(1),f=0;f<k.length;f++)if(e=k[f]+b,d[e]!==c)return e}function h(a,b){for(var c in b)a.style[g(a,c)||c]=b[c];return a}function i(a){for(var b=1;b<arguments.length;b++){var d=arguments[b];for(var e in d)a[e]===c&&(a[e]=d[e])}return a}function j(a){for(var b={x:a.offsetLeft,y:a.offsetTop};a=a.offsetParent;)b.x+=a.offsetLeft,b.y+=a.offsetTop;return b}var m,k=["webkit","Moz","ms","O"],l={},n=function(){var a=d("style",{type:"text/css"});return e(b.getElementsByTagName("head")[0],a),a.sheet||a.styleSheet}(),o={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"},p=function a(b){if(!this.spin)return new a(b);this.opts=i(b||{},a.defaults,o)};p.defaults={},i(p.prototype,{spin:function(a){this.stop();var g,i,b=this,c=b.opts,e=b.el=h(d(0,{className:c.className}),{position:c.position,width:0,zIndex:c.zIndex}),f=c.radius+c.length+c.width;if(a&&(a.insertBefore(e,a.firstChild||null),i=j(a),g=j(e),h(e,{left:("auto"==c.left?i.x-g.x+(a.offsetWidth>>1):parseInt(c.left,10)+f)+"px",top:("auto"==c.top?i.y-g.y+(a.offsetHeight>>1):parseInt(c.top,10)+f)+"px"})),e.setAttribute("aria-role","progressbar"),b.lines(e,b.opts),!m){var k=0,l=c.fps,n=l/c.speed,o=(1-c.opacity)/(n*c.trail/100),p=n/c.lines;!function a(){k++;for(var d=c.lines;d;d--){var f=Math.max(1-(k+d*p)%n*o,c.opacity);b.opacity(e,c.lines-d,f,c)}b.timeout=b.el&&setTimeout(a,~~(1e3/l))}()}return b},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=c),this},lines:function(a,b){function c(a,c){return h(d(),{position:"absolute",width:b.length+b.width+"px",height:b.width+"px",background:a,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/b.lines*g+b.rotate)+"deg) translate("+b.radius+"px,0)",borderRadius:(b.corners*b.width>>1)+"px"})}for(var i,g=0;g<b.lines;g++)i=h(d(),{position:"absolute",top:1+~(b.width/2)+"px",transform:b.hwaccel?"translate3d(0,0,0)":"",opacity:b.opacity,animation:m&&f(b.opacity,b.trail,g,b.lines)+" "+1/b.speed+"s linear infinite"}),b.shadow&&e(i,h(c("#000","0 0 4px #000"),{top:"2px"})),e(a,e(i,c(b.color,"0 0 1px rgba(0,0,0,.1)")));return a},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}}),function(){function a(a,b){return d("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',b)}var b=h(d("group"),{behavior:"url(#default#VML)"});!g(b,"transform")&&b.adj?(n.addRule(".spin-vml","behavior:url(#default#VML)"),p.prototype.lines=function(b,c){function d(){return h(a("group",{coordsize:i+" "+i,coordorigin:-g+" "+-g}),{width:i,height:i})}function f(b,f,i){e(k,e(h(d(),{rotation:360/c.lines*b+"deg",left:~~f}),e(h(a("roundrect",{arcsize:c.corners}),{width:g,height:c.width,left:c.radius,top:-c.width>>1,filter:i}),a("fill",{color:c.color,opacity:c.opacity}),a("stroke",{opacity:0}))))}var l,g=c.length+c.width,i=2*g,j=2*-(c.width+c.length)+"px",k=h(d(),{position:"absolute",top:j,left:j});if(c.shadow)for(l=1;l<=c.lines;l++)f(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=c.lines;l++)f(l);return e(b,k)},p.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,(e=e&&e.firstChild)&&(e.opacity=c))}):m=g(b,"animation")}(),"function"==typeof define&&define.amd?define(function(){return p}):a.Spinner=p}(window,document);
var lookAheadReq;
var lookAheadWordLen = 0;
var prevValue="";
var timeouts = [];
var jsDeleteMsg = "";
var jsDeleteMsgB = "";
var jsDeleteMsgC = "";
var jsDeleteMsgD = "";
var loginmode ="";
var GCardCtr;
var addedGC = [];
var HashDelimeter = "*";
var recentHash = "";
var PageNo = "page_no";
var SortBy = "sort_by";     
var perPage = "per_page";
var clicked = "filters";
var filters=[];
var compStyle = [];
var posCtr = 0;
var imgCtr = 0;
var boxes =[];
var opv1 = "";
var opv2 = "";
var opv3 = "";
var value,desc;
var processing ="";
var styl = $("#style").val();
var origDesc1="";
var origDesc2="";
var origDesc3="";
var filterHeight = $(".product-grid__filter-options").height();
var filteExp = [];
hideWait();
freeItem();
var iOS = parseFloat(
	('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0,''])[1])
	.replace('undefined', '3_2').replace('_', '.').replace('_', '')
) || false;
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-*
//Window Resizing

//On Load Search page

$( document ).ready(function(){
    showErrors();
    $('.tipClass').tooltip({container: 'body',edgeOffset: 10,html:true,template:"<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\" onclick=\"void(0)\"></div></div>"});    
    $('.waitlink').click(function(){
        var linkaddr =$(this).attr("href1");
        
        showWait();setTimeout(function(){ 
             window.location.href = linkaddr; if(iOS)hideWait();}, 100);});
    $("#mobileSearchIcon , #mobileSearchButton").click(function(){$("html, body").animate({ scrollTop:0 }, 500);});
    $("#mobile-header-search").focus;
    //Scroll functions header fixing
    
    searchMain();
    styleMain();
    AccountMain()
    VariousMain();
    
        $(window).scroll(function(){ affixSearch(); });
    
});
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function VariousMain(){
    if($("#SISTEP").length) dfltGC();
     if ($('#showups').val() == 'Y') $("#upsMessage").modal();  
     $("#SISAMEBOX").change(function(){
        if($(this).is( ":checked" )){
      $(".shipSectn").slideUp();
        }
        else{
        $(".shipSectn").slideDown();
        }
    });
    window.onpageshow = function(event) { if (event.persisted) { hideWait(); }};
    init();
    
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function AccountMain(){
    if(!$(".diffForms").length) return false;
    $(".diffForms").submit(function(){
        var thisform = $( this ); 
           showWait(); 
           $(".actionAlerts").remove();
        $.ajax({
            url: '/CGBCXACC?'+$( this ).serialize(),
	   type: "post",
       dataType: 'html',
        success: function(html){
                    hideWait();
                    var info = jQuery.parseJSON( html );
                    var success="";
                    $.each(info, function(key, value) {
                        //Errors
                        if(key=="E"){
                          thisform.prepend("<div style=\"display:none\" class=\"alert alert-danger actionAlerts\"><strong>"+value+"</strong></div>");
                          success = "N";
                        }
                        //Success
                        if(key=="S"){
                          thisform.prepend("<div style=\"display:none\" class=\"alert alert-success actionAlerts\"><strong>"+value+"</strong></div>"); 
                          if (success=="") success="Y";
                        }
						//PanoB
						if(key == "PANOB"){
							$("#mobileBillingInformationValue").html($("#SISAD1B").val() +', ' 
																   + $("#SISCTYB").val() + ' '  
																   + $("#SISSTAB").val() + ' '  
																   + $("#SISZIPB").val()); 
							$("#desktopBillingInformationValue").html($("#SISAD1B").val() +', ' 
																   + $("#SISCTYB").val() + ' '  
																   + $("#SISSTAB").val() + ' '  
																   + $("#SISZIPB").val());
						}
                        //Pano
                        if(key=="PANO"){
                            $("#SIPANOS").val(value);
                            $("#SIACTNPANOS").val("EDITPANOS");
                            $("#saveNewShipping").html("Save Changes");
							showWait();
                            setTimeout(function(){ $("#closeShippingbtn").trigger("click"); hideWait();}, 1000);
							//Full
							var row = '<p class="account__value--desktop clickableAddress" id="shippingF'+value+'" title="Edit" '+
									  'onclick="editShipping(\''+ $("#SINAMES").val() +'\',\''
															    + $("#SISAD1S").val() + '\',\''
															    + $("#SISAD2S").val() + '\',\''
																+ $("#SISCTYS").val() + '\',\''
																+ $("#SISSTAS").val() + '\',\''
																+ $("#SISZIPS").val() + '\',\''
																+ $("#SICNTYS").val() + '\',\''
																+ value+'\')">'
																+ $("#SISAD1S").val() +', ' 
																+ $("#SISCTYS").val() + ' '  
																+ $("#SISSTAS").val() + ' '  
																+ $("#SISZIPS").val() +
																'<span class="icon edit"></span></p>';
																
							var oldRow = $("#shippingF"+value);
							if(oldRow.length){
								$(row).insertAfter(oldRow); 
								oldRow.remove();
							}
							else
								$(row).appendTo("#fullShp");
							//Mobile
							var row = '<p class="account__value--mobile clickableAddress" id="shippingM'+value+'" title="Edit" '+
									  'onclick="editShipping(\''+ $("#SINAMES").val() +'\',\''
															    + $("#SISAD1S").val() + '\',\''
																+ $("#SISAD2S").val() + '\',\''
																+ $("#SISCTYS").val() + '\',\''
																+ $("#SISSTAS").val() + '\',\''
																+ $("#SISZIPS").val() + '\',\''
																+ $("#SICNTYS").val() + '\',\''
																+ value+'\')">'
																+ $("#SISAD1S").val() +', ' 
																+ $("#SISCTYS").val() + ' '  
																+ $("#SISSTAS").val() + ' '  
																+ $("#SISZIPS").val() +
																'<span class="icon edit"></span></p>';
					
                            var oldRow = $("#shippingM"+value);
							if(oldRow.length){
								
								$(row).insertAfter(oldRow);
								oldRow.remove();
							}
							else
								$(row).appendTo("#mobileShp");
                        }
						//Pnno
                        if(key=="PNNO"){
                            $("#SIPNNO").val(value);
                            $("#SIACTNPNNO").val("EDITPNNO");
                            $("#saveNewPhone").html("Save Changes");
							showWait();
                            setTimeout(function(){ $("#closePhonebtn").trigger("click"); hideWait();}, 1000);
							//Full
							var row = '<p class="account__value--desktop clickablePhone" id="phoneF'+value+'" title="Edit" '+
									     'onclick="editPhone(\''+ $("#SITYPE").val() +'\',\''
															    + $("#SITEL").val() + '\',\''
															    + $("#SIEXT").val() + '\',\''															
																+ value+'\')">'
																+ $("#SITEL").val() + ' - ' 
																+ $("#SITYPE  option:selected").text() +
																'<span class="icon edit"></span></p>';
																
							var oldRow = $("#phoneF"+value);
							if(oldRow.length){
								$(row).insertAfter(oldRow); 
								oldRow.remove();
							}
							else
								$(row).appendTo("#fullPhn");
							//Mobile
							var row = '<p class="account__value--mobile clickableAddress" id="shippingM'+value+'" title="Edit" '+
									  'onclick="editPhone(\''+ $("#SITYPE").val() +'\',\''
															    + $("#SITEL").val() + '\',\''
															    + $("#SIEXT").val() + '\',\''															
																+ value+'\')">'
																+ $("#SITEL").val() +' - ' 
																+ $("#SITYPE").val() + 
																'<span class="icon edit"></span></p>';
					
                            var oldRow = $("#phoneM"+value);
							if(oldRow.length){
								
								$(row).insertAfter(oldRow);
								oldRow.remove();
							}
							else
								$(row).appendTo("#mobilePhn");
                        }
                        $(".actionAlerts").slideDown("slow");
                        if(success=="Y"){
                            switch(thisform.attr("id")){
                                //Saved Profession    
                                case("accountProfessionForm"):
                                    $("#mobileProfessionValue").html($("#SIPTNO :selected").text());
                                    $("#desktopProfessionValue").html($("#SIPTNO :selected").text());
                                    break;
                                //Saved Email    
                                case("accountEmailAddressForm"):
                                    $("#mobileEmailAddressValue").html($("#SIEMALB").val());
                                    $("#desktopEmailAddressValue").html($("#SIEMALB").val());
                                    $("#SIEMAL").val($("#SIEMALB").val());
                                    $("#SIEMALB").val("");
                                    $("#SIEMALC").val("");
                                    break;
								//Saved Password    
                                case("accountPasswordForm"):
                                    $("#SIPSWD").val("");
                                    $("#SIPSWDB").val("");
									$("#SIPSWDC").val("");
                                    break;
                                //Saved Username    
                                case("accountUsernameForm"):
                                    $("#mobileUsernameValue").html($("#SIUSERB").val());
                                    $("#desktopUsernameValue").html($("#SIUSERB").val());
                                    $("#SIUSER").val($("#SIUSERB").val());
                                    $("#SIUSERB").val("");
                                    $("#SIUSERC").val("");
                                    break;
                                    
                            }
                        }
                        
                    });
                    
            }
        });
       
});
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function styleMain(){
     if(!$("#styleForm").length) return false;        
            imgCtr = $(".product__gallery--thumbnail").length;
            var finalprice = '$' + parseFloat($("#lspr").val()).toFixed(2);             
            if (finalprice !== '$0.00')
                $(".qtyPrice").html(finalprice);
            else
                $(".qtyPrice").html("");  
            choices('CGBCSTYL');
            imageListners();
            if($("#opv1UL li.selected").length==1) colorImage($("#opv1UL li.selected").attr("id").substring(4)); 
    
    //Customize Button
            $('.customize-button').click(function () {
                    showWait();
                    var edp = $("#SIEDP").val();
		    var qty = $("#SIQTY").val();
        $.ajax({
            url: '/CGBCXSTYL?SIACTN=LOADALL&SIEDP='+edp+'&SIQTY='+qty,
	   type: "get",
       dataType: 'html',
        success: function(html){ 
                  $('#customBody').html(html);
                  hideWait();
                  $('#customizeModal').modal();
            }
        });
    });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function searchMain(){
    if (!$('.category').length) { return false;} 
  setInterval(checkHash, 100);
  

  //Cache html Controls
  var filterResult    = $("#filter__results");
  var filterResultM   = $("#mobile-filter__results");

  var perpage24       = $("#perpage24");
  var perpage48       = $("#perpage48");
  var perpage96       = $("#perpage96");
  var perpageAl       = $("#perpageAll");
  var previousB       = $("#pagination__link--prev");
  var nextB           = $("#pagination__link--next");
  var pagenumber      = $("#pagination__dropdown");
  var leftMenu        = $(".leftMenu");
  var leftMenu1       = $(".leftMenu1");
  var leftMenuM       = $(".leftMenuM");
  var leftMenuMC      = $(".leftMenuMC label");
  var sortf           = $("#product-grid__filter--sortf");
  var sortm           = $(".product-grid__filter--sort");
  var viewGrid        = $("#viewGrid");
  var viewList        = $("#viewList");
  
  markCompare();
  //Listeners On load
perpage24.click(function(){ //Clicked 24 Per Page+++++++++++++++++++++++++++++++
                $("#pagination__dropdown").val(1);
                $("#SIIPPG").val(24);
                getSearch("FILTER");
});

perpage48.click(function(){ //Clicked 48 Per Page+++++++++++++++++++++++++++++++
                $("#pagination__dropdown").val(1);
                $("#SIIPPG").val(48);
                getSearch("FILTER");
});

perpage96.click(function(){ //Clicked 96 Per Page+++++++++++++++++++++++++++++++
                $("#pagination__dropdown").val(1);
                $("#SIIPPG").val(96);
                getSearch("FILTER");
});

perpageAl.click(function(){ //Clicked View All++++++++++++++++++++++++++++++++++
                $("#pagination__dropdown").val(1);
                $("#SIIPPG").val(500);
                getSearch("FILTER");
});

nextB.click(function(){ //Clicked Next Button+++++++++++++++++++++++++++++++++++
               var next = parseInt($("#pagination__dropdown").val()) + 1;
               $("#pagination__dropdown").val(next);
               SetHashValue(PageNo,next);               
});

previousB.click(function(){  //Clicked Previous Button++++++++++++++++++++++++++
               var prev = parseInt($("#pagination__dropdown").val()) - 1; if(prev<=0) prev=1;
               $("#pagination__dropdown").val(prev);
               SetHashValue(PageNo,prev);               
});

viewList.click(function(){
    $("#viewList span").addClass("selected");
    $("#viewGrid span").removeClass("selected");
    showWait();
    $(".product-grid__col").removeClass("col-xs-6 col-sm-6");
    $(".clearfix1").removeClass("hidden");
    $(".clearfix2").addClass("hidden");
    hideWait();
});

viewGrid.click(function(){
    $("#viewList span").removeClass("selected");
    $("#viewGrid span").addClass("selected");
    showWait();
    $(".product-grid__col").addClass("col-xs-6 col-sm-6");
    $(".clearfix1").addClass("hidden");
    $(".clearfix2").removeClass("hidden");
    hideWait();
});

sortf.change(function(){ //Sorting Change Full+++++++++++++++++++++++++++++++
                SetHashValue('page_no', '1');             
                getSearch("FILTER");
});

sortm.change(function(){ //Sorting Change Mobile+++++++++++++++++++++++++++++
                sortm.val($(this).val());
                sortf.val($(this).val());
                SetHashValue('page_no', '1');             
                getSearch("FILTER");
});

pagenumber.change(function(){ //Changed Page++++++++++++++++++++++++++++++++++++

               var next = parseInt($(this).val());
               $("#pagination__dropdown").val(next);
               SetHashValue(PageNo,next);
               
             

  });
  
$("#clearMobileFilter").click(function(){
     $(".leftMenuM").each(function(){
            $(this).removeClass("selected");
            var mid = $(this).attr("id").substring(1);
            $("#"+mid+' input').prop('checked', false);
     });
     $(".leftMenuMC").each(function(){
            $(this).removeClass("selected");
            var mid = $(this).attr("id").substring(1);
            $("#"+mid+' input').prop('checked', false);
     });
        SetHashValue('page_no', '1');             
        getSearch("FILTER");
});  
$(".resetfilters").click(function(){
	$(this).parentsUntil('.panel-body').parent().find('input').prop("checked",false);
	SetHashValue('page_no', '1');             
    getSearch("FILTER");
});
$("#filter__toggle").click(function(){
    showWait("B");
    adjustClearFix();
    hideWait();  
        
});

$( "body main.category" ).click(function( event ) {
  if( event.target.className == undefined) return false;
  if( String(event.target.className).indexOf("compare")>=0) return false;
  if( String(event.target.parentElement.className).indexOf("compare")>=0) return false;
   $(".compare-tooltip").hide();
});

//Filters Listners
leftMenuM.click(function(){ //Clicked any Mobile filter+++++++++++++++++++++++++
                
                $('#SICURRM').val("M" + $( this ).parent('.subnav__l2').attr("id"));
				var mid = $(this).attr("id").substring(1);
                if($(this).hasClass("selected"))
                    $("#"+mid+' input:first').prop('checked', true);
                else
                    $("#"+mid+' input:first').prop('checked', false);
                SetHashValue('page_no', '1');             
                getSearch("FILTER");                
});

leftMenuMC.click(function(){ //Clicked any Mobile filter+++++++++++++++++++++++++
               $('#SICURRM').val("MCategoryL2");
                
                var mid = $(this).parent("li").attr("id").substring(1);
                if($(this).hasClass("selected")){
                    $(this).next('ul').find('li').slideDown();
                    $("#"+mid+' input:first').prop('checked', true);
                }                    
                else{
                    $("#"+mid+' input:first').prop('checked', false);
                    $(this).next('ul').find('li').each(function(){
                        $(this).slideUp();
                        var mid = $(this).attr("id").substring(1);
                        $("#"+mid+' input:first').prop('checked', false);
                        $(this).find("label").first().removeClass("selected");
                    });
                }
                SetHashValue('page_no', '1');             
                getSearch("FILTER");
});

leftMenu.change(function(event){ //Clicked any Full filter+++++++++++++++++++++++++++
				event.stopPropagation();	
                if($(this).hasClass("disabled")) {$(this).find('input:first')["0"].checked=false;return false;}
                $('#SICURR').val($(this).parentsUntil('.panel-collapse').parent().attr('id'));
                SetHashValue('page_no', '1');             
                if($(this).find('input:first')["0"].checked){         
                      $( this ).children('div').children().children().each(function(){
                              $(this).slideDown();
                          }); }
                else{
                      $( this ).children('div').find('li').slideUp();
                      $( this ).children('div').children().children().find('input').each(function(){ 
                      $(this)["0"].checked = false;
                      });
                     }
                     getSearch("FILTER");
});
leftMenu1.change(function(event){ //Clicked any Full filter+++++++++++++++++++++++++++
				event.stopPropagation();	
                if($(this).hasClass("disabled")) {$(this).find('input:first')["0"].checked=false;return false;}
                $('#SICURR').val($(this).parentsUntil('.panel-collapse').parent().attr('id'));
                SetHashValue('page_no', '1');             
                if($(this).find('input:first')["0"].checked){         
                      $( this ).children('div').children().children().each(function(){
                              $(this).slideDown();
                          }); }
                else{
                      $( this ).children('div').find('li').slideUp();
                      $( this ).children('div').children().children().find('input').each(function(){ 
                      $(this)["0"].checked = false;
                      });
                     }
                     getSearch("FILTER");
});

//Filter Collapse expand
$(".panel-link").click(function(){
        $("#openFilter").val('');
        $("#firstClick").val("N");
        var collapsed = $(this).hasClass("collapsed");
        $(".panel .panel-collapse").slideUp();
        $(".panel-link").addClass("collapsed");
        if (!collapsed) $(this).removeClass("collapsed");
        $(this).toggleClass("collapsed");
        if(!$(this).hasClass("collapsed")) { $("#"+$(this).attr("expand")).slideDown(); $("#openFilter").val($(this).attr("targetid"))}
});
//Filter Collapse expand mobile 
$(".subnav__l1").click(function(){
        $("#openFilter").val('');
        $("#firstClick").val("N");
        var collapsed = $(this).hasClass("collapsed");
        $(".subnav__l2").slideUp();
        $(".subnav__l1").addClass("collapsed");
        if (!collapsed) $(this).removeClass("collapsed");
        $(this).toggleClass("collapsed");
        if(!$(this).hasClass("collapsed")){ $("#"+$(this).attr("expand")).slideDown(); $("#openFilter").val($(this).attr("targetid"))}
});


$("#clearAllFilters").click(function(){
    $('.panel-body').find('input').prop("checked",false);
        syncMtoFull();
	SetHashValue('page_no', '1');             
    getSearch("FILTER");
});

//Reload filters on back button.
if($("#firstClick").val()!=="Y"){ 
        $("#onUnload").val("Y");
       // if ($(".chkselection:checked").length > 0 || $(".fstlvl:checked").length > 0) { getSearch("FILTER"); }
        
        var pagelength    = parseInt($("#SIIPPG").val());
        $("#perpageAll").removeClass("active");
        $("#perpage24").removeClass("active");
        $("#perpage48").removeClass("active");
        $("#perpage96").removeClass("active");
        var page_no = GetHashValue(PageNo);
    
    switch (pagelength){
        case 24:
            if(parseInt(page_no)>1)
                $("#perpage24").addClass("active");
            else
                $("#perpage24").trigger("click");
            break;
        case 48:
            if(parseInt(page_no)>1)
                $("#perpage48").addClass("active");
            else
                $("#perpage48").trigger("click");
            break;
        case 96:
            if(parseInt(page_no)>1)
                $("#perpage96").addClass("active");
            else
                $("#perpage96").trigger("click");
            break;
        default:
            if(parseInt(page_no)>1)
                $("#perpageAll").addClass("active");
            else
                $("#perpageAll").trigger("click");
            break;
        
    }
       if(parseInt(page_no)>1){if ($(".chkselection:checked").length > 0 || $(".fstlvl:checked").length > 0) { getSearch("FILTER"); }}
       if($("#filters").val()=="N") adjustClearFix();
        if($("#openFilter").val()!==""){
                $("#full"+$("#openFilter").val()).removeClass("collapsed");
                $("#collapse"+$("#openFilter").val()).slideDown();
                $("#mobil"+$("#openFilter").val()).removeClass("collapsed");
                $("#"+$("#openFilter").val()+"L2").slideDown();
        }
        syncMtoFull();
}
affixSearch();
$("img.lazy").lazyload({ threshold : 600 });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function toggleHemming(){
    if($("#SIHEMD").is( ":checked" )){
        $("#opv3ULH").removeClass("hidden");
        $("#opv3ULH").fadeIn();  
        
        }else{
        $("#opv3ULH").fadeOut();
        $("#opv3ULH").addClass("hidden");        
        var topselect = 'N'
        $("#opv3UL li").each(function(){
        if($(this).hasClass('selected')){ topselect = 'Y';return false;}
            });
        if(topselect == 'Y') return false;
         origDesc3 = "Select "+ $("#origDesc3").html();
        $("#product__options--size2").html(origDesc3);
        $("#opv3ULH li").each(function(){
        if($(this).hasClass('selected')){
           $(this).removeClass('selected');
           $("#SIOPV3").val("");
        }
            });
            
        }
        if(! $("#opv3ULH li").first().hasClass("disabled"))
            $("#opv3ULH li").first().addClass("selected").trigger("click");
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function hideWait(){
    $('.ui-ios-overlay').hide();  //fade them both out
    $("#waitBckgd").hide();
    $("#waitBckgd").remove();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function showWait(mode){   
    var opts = {
		lines: 13, // The number of lines to draw
		length: 11, // The length of each line
		width: 5, // The line thickness
		radius: 17, // The radius of the inner circle
		corners: 1, // Corner roundness (0..1)
		rotate: 0, // The rotation offset
		color: '#FFF', // #rgb or #rrggbb
		speed: 1, // Rounds per second
		trail: 60, // Afterglow percentage
		shadow: false, // Whether to render a shadow
		hwaccel: false, // Whether to use hardware acceleration
		className: 'spinner', // The CSS class to assign to the spinner
		zIndex: 2e9, // The z-index (defaults to 2000000000)
		top: 'auto', // Top position relative to parent in px
		left: 'auto' // Left position relative to parent in px
	};
	var target = document.createElement("div");
        target.setAttribute("id", "waitDiv");
	document.body.appendChild(target);
        if (mode =="B"){
            var target = document.createElement("div");
            target.setAttribute("id", "waitBckgd");
            document.body.appendChild(target);
        }
	var spinner = new Spinner(opts).spin(target);
	var overlay = iosOverlay({
		text: "Loading",
		spinner: spinner
	});
}  
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function showBckg(){
            var target = document.createElement("div");
            target.setAttribute("id", "waitBckgd");
            document.body.appendChild(target);
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function getLookAheadL(mode){
        var words = $("#header-search").val();
	if (mode == "M") words = $("#mobile-header-search").val(); 
        submitSearch(words);
    }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function getLookAhead(e,mode){
    var words = $("#header-search").val();
	if (mode == "M") words = $("#mobile-header-search").val(); 
        if($.trim(words).length<2){hideLookAhead();clearTimeoutAll();return;} 
    if(e.keyCode == 13){
        submitSearch(words);
        hideLookAhead();
        clearTimeoutAll();
        return;
    }
    if($.trim(words).length == lookAheadWordLen){
    hideLookAhead();
    clearTimeoutAll();
    return;
    }
    clearTimeoutAll();
 timeouts.push( setTimeout(function() {
  var word = $("#header-search").val();
  if (mode == "M") word = $("#mobile-header-search").val(); 
  if($.trim(word).length == lookAheadWordLen){
    return;
  }
  if($.trim(word).length != (word).length){
    return;
  }
  
  if(e.keyCode == 13 || e.keyCode == 9){
      
    return;
  }
  
  if(lookAheadReq){
    clearTimeoutAll(); 
    return;
  }
  
  hideLookAhead();
  if($.trim(word).length < 3){
  clearTimeoutAll();
   return;
  }
  
  if(prevValue!=$.trim(word)){
  lookAheadReq = true;
  clearTimeoutAll();
  $(".autofill__search-for").html(word);
  
  $.ajax({
    url: "/CGBCXSUGG?SIWORD="+word+"&SIMODE="+mode,
    success: function(result){
        var words = $("#header-search").val();
	if (mode == "M") words = $("#mobile-header-search").val(); 
        if($.trim(words).length < 3){return false;}
      if(result != "*EMPTY"){
        $("#suggestDropDown"+mode).html(result);
        if(result!="")
         $(".suggestDropDown"+mode).fadeIn();
        else
         $(".suggestDropDown"+mode).fadeOut();

      }     lookAheadReq = false;
      $("#suggestDropDown"+mode+" li ul li").mouseenter(lookAheadMouseEnter);
      $("#suggestDropDown"+mode+" li ul li").mousemove(lookAheadMouseEnter);
      $("#suggestDropDown"+mode+" li ul li").mouseleave(lookAheadMouseLeave);
  }}); }
  prevValue=$.trim(word);
  },200));
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function resetLookAhead(){  
  hideLookAhead();
  $("#header-search").val("");
  $("#mobile-header-search").val("");
  $("#suggestDropDownF").html("");
  $("#suggestDropDownM").html("");
  $(".suggestDropDownF").hide();
  $(".suggestDropDownM").hide();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function hideLookAhead(){  
  prevValue ="";
  if($(".pts_ac_suggestion:hover").length) {
    return;
  }
  if($(".pts_ac_product:hover").length) {
    return;
  }  
  $(".suggestDropDown").hide();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function clearTimeoutAll(){
for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
}
//quick reset of the timer array you just cleared
timeouts = [];} 
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function PlayVideo(vcode){
  var width = $("#galleryMain").width()-20;
  var height = $("#galleryMain").height()-150;
  $(".product__gallery--thumbnail").removeClass("active");
  $("#videoDiv").removeClass("hidden");
  $("#videoDiv").html('<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
}                     
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function lookAheadMouseEnter(e) {
  var lookAheadActive = document.getElementsByClassName("pts_ac_active");
  cur = lookAheadActive[0];
  $(cur).removeClass("pts_ac_active");
  $(e.target).parentsUntil("ul",".pts_ac_level").addClass("pts_ac_active");    
}                      
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function lookAheadMouseLeave(e) {
  var lookAheadActive = document.getElementsByClassName("pts_ac_active");
  cur = lookAheadActive[0];
  $(cur).removeClass("pts_ac_active");    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function submitSearch(word){  
    showWait("B");
 clearCrossScript();
 word = word.replace("&", "|"); 
  word = word.replace("%", "");
if(word=="") {hideWait();return false;}
if(word.length < 3){ hideWait();return false;}
hideLookAhead();
resetLookAhead();
clearTimeoutAll();
$("#mobile-header-search").val("");
$("#header-search").val("");
$(".autofill__input").blur();
setTimeout(function(){
        window.location.href = "/search/"+word;
        },100);
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function clearCrossScript(){
var inputs = $(':input');
    inputs.each(function() {
    if ($(this).val()!=''){ 
//Clean Input    
    var content = $(this).val();
    if(content !== undefined && content!=null){
    content = content.replace(/<script(.*)/gi, "");
    content = content.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    content = content.replace(/[\"\'][\s]*javascript:(.*)[\"\']/gi, "\"\"");
    content = content.replace(/eval\((.*)\)/gi, "");
    }
    //$(this).val(content);
    }
    });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function viewList(mode){
    if(mode!=="Y") return false;
    $("#viewList span").addClass("selected");
    $("#viewGrid span").removeClass("selected");
    showWait();
    $(".product-grid__col").removeClass("col-xs-6 col-sm-6");
    $(".clearfix1").removeClass("hidden");
    $(".clearfix2").addClass("hidden");
    hideWait();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function adjustClearFix(){
    var leftfilter =  $("#leftFilter");
    var products   =  $(".product-grid__col");
    var productgrid=  $("#product-gridp");
    var clearfix3  =  $(".clearfix3")
    var clearfix4  =  $(".clearfix4")
 
  if(leftfilter.hasClass("hiddenf")){
        $("#filters").val("Y");
        productgrid.addClass("col-md-9");
        productgrid.removeClass("col-sm-12");
        
        products.addClass("col-lg-4");         
        products.removeClass("col-lg-3");
        
        clearfix4.addClass("hidden");
        clearfix3.removeClass("hidden");
        
        leftfilter.removeClass("hiddenf");
        leftfilter.fadeIn();
    }
  else{ $("#filters").val("N");
        productgrid.addClass("col-sm-12");
        productgrid.removeClass("col-md-9");
        
        clearfix4.removeClass("hidden");
        clearfix3.addClass("hidden");
  
        leftfilter.addClass("hiddenf");
        leftfilter.hide();        
        
        products.addClass("col-lg-3");
        products.removeClass("col-lg-4");        
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function adjustClearFix2(){
    var leftfilter =  $("#leftFilter");
    var products   =  $(".product-grid__col");
    var productgrid=  $("#product-gridp");
    var clearfix3  =  $(".clearfix3")
    var clearfix4  =  $(".clearfix4")
 
  if(!leftfilter.hasClass("hiddenf")){
        
        productgrid.addClass("col-sm-12");
        productgrid.removeClass("col-md-9");
        
        products.addClass("col-lg-4");         
        products.removeClass("col-lg-3");
        
        clearfix4.addClass("hidden");
        clearfix3.removeClass("hidden");
    }
  else{ productgrid.addClass("col-md-9");
        productgrid.removeClass("col-sm-12");
        
        clearfix4.removeClass("hidden");
        clearfix3.addClass("hidden");
  
        products.addClass("col-lg-3");
        products.removeClass("col-lg-4");
        
        
  }
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function SetHashValue(HashParameter, HashValue) {     
    var hash = window.location.hash.substr(1);
    if (hash == "") {
        window.location.hash = HashParameter + "=" + HashValue + HashDelimeter;
    }
    else if (hash.search(HashParameter) == -1) {
        window.location.hash = hash + HashParameter + "=" + HashValue + HashDelimeter;
    }
    else {
        var PostSplit = hash.split(HashDelimeter);
        var NewHash = "";

  //new loop ie8 issue
  var i=0, len = PostSplit.length;
  for ( i; i<len; i++ ) {   
            if (PostSplit[i] != "") {
                if (PostSplit[i].search(HashParameter) != -1) {
                    PostSplit[i] = HashParameter + "=" + HashValue;
                }
                NewHash = NewHash + PostSplit[i] + HashDelimeter;
            }
        }
        window.location.hash = NewHash;
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function GetHashValue(HashParameter) {
    var hash = window.location.hash.substr(1);
    if (hash == "") {
        return null;
    }
    var PostSplit = hash.split(HashDelimeter);
    //new loop ie8 issue
    var i=0, len = PostSplit.length;
    for ( i; i<len; i++ ) {   

        if (PostSplit[i].search(HashParameter) != -1) {
            return PostSplit[i].substr(HashParameter.length + 1); 
        }
    }
    return null;
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function checkHash() {
    var hash = document.location.hash;
    hash = hash.substr(1);
    if (hash == recentHash || (hash=="page_no=1*" && recentHash=="")) {
        return;
    }
    recentHash = hash;
    loadPage();
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function BuildUrl(pageLength, sortBy) {
    var keywords, wtno, url, indxt, indxb;
    keywords  = $("#SISRCH").val();
    wtno      = $("#SIWTNO").val();
    indxt     = $("#SIINDXT").val();
    indxb     = $("#SIINDXB").val();

    url = "/CGBCSRCH?SIAJAXMODE=Y&SIAJAXACTN=FILTER&SIWTNO=" + wtno + "&SIINDXT=" + indxt + "&SIINDXB=" + indxb + "&SIIPPG=" + pageLength + "&SISORT=" + sortBy;
  
    return url;
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-** 
function getFilters(){
    $("#firstClick").val("N");
var filterList = "";
      $(".leftMenu").each(function(){
                var inp = $(this).find('input:first')["0"];  
                var nochildchkd = true;
                    $(this).find('.leftMenu1').each(function(){
                     var inp1 = $(this).find('input:first')["0"];
                     if(!$("#"+inp1.id).parentsUntil('li').parent().find('div input:checked').length)
                            if(inp1.checked){
                                nochildchkd = false;
                                if(filterList=="") 
                                    filterList += inp1.id;
                                else
                                    filterList += "," + inp1.id; }
                    });
                
                if(inp.checked && nochildchkd){
                    if(filterList=="") 
                       filterList += inp.id;
                    else
                       filterList += "," + inp.id; }
      });
    return filterList;
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function loadPage() {
    var page_no = GetHashValue(PageNo);
    var per_page = GetHashValue('per_page');
    if(parseInt(page_no)<1)page_no=1;
    if(parseInt(per_page)!=24 || parseInt(per_page)!=48 || parseInt(per_page)!=96 || parseInt(per_page)!=500 ){ per_page = $("#SIIPPG").val(); if(per_page<=0) per_page =24;}
    $("#pagination__dropdown").val(page_no);
    $("#SIIPPG").val(per_page);
    getSearch("PAGE");
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function viewListG(){
    $("#viewGridG span").removeClass("selected");
    $("#viewListG span").addClass("selected");
    $("#viewList").trigger("click");
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function viewGridG(){
    $("#viewListG span").removeClass("selected");
    $("#viewGridG span").addClass("selected");
    $("#viewGrid").trigger("click");
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function getSearch(action) {  //Old RefreshResults()
    
    
    var keywords, wtno, url, brand, atid, avno, indxt, indxb, ippg, sort, cler,nlpr, avds, nwit, rfno;
    showWait("B");
    keywords = $("#SISRCH").val();
    wtno     = $("#SIWTNO").val();
    atid     = $("#SIATID").val();
    avno     = $("#SIAVNO").val();
    indxt    = $("#SIINDXT").val();
    indxb    = $("#SIINDXB").val();
    ippg     = $("#SIIPPG").val();
    sort     = $("#product-grid__filter--sortf").val();
    cler     = $("#SICLER").val();
    nlpr     = $("#SINLPR").val();
    avds     = $("#SIAVDS").val();
    nwit     = $("#SINWIT").val();
    list     = "";
    
    if($("#viewList span").hasClass("selected"))
        list = "Y";
    else
        list = "N";
    
    
    if (action == "FILTER"){
      rfno = 1;
    }
    else 
    if (action == "SORT"){
      rfno = sort;
    }
    else if (action == "PAGE"){
      rfno = parseInt($("#pagination__dropdown").val());
    }
    
    $.ajax({
        url: "/CGBCSRCH",
	     data: { SISRCH: keywords, 
		           SIWTNO: wtno,  
		           SIATID: atid, 
		           SIAVNO: avno, 
		           SIINDXT: indxt, 
		           SIINDXB: indxb,  
		           SIIPPG: ippg, 
		           SISORT: sort,
		           SICLER: cler,
		           SINLPR: nlpr,
		           SIAVDS: avds,
		           SINWIT: nwit, 
		           SIAJAXMODE: "Y",
		           SIRFNO: rfno,
		           SIFILT: getFilters(),
		           SIAJAXACTN: action },
	    cache: false,
	     type: "post",
	 dataType: "html",
        
        success:
            function (data) { 
               
               
               var products= data.substring(1,data.indexOf("["));
               if(data.indexOf("[")>0)
                  var leftData= data.substring(data.indexOf("["));
               else
                  var lefData =""; 
               
               adjustleft(leftData);
               $("#product-grid").html(products);
               
               adjustClearFix2();
               buildButtons();
               markCompare();
               viewList(list)
               hideWait();
               if($("#onUnload").val()=="Y"){
                   
                   $("html, body").animate({ scrollTop:$("#topPosition").val()}, 1000,'',function(){$("img.lazy").lazyload({ threshold : 600 });});
                   $("#onUnload").val("");
                  return true; 
               }
			   if ($(window).width() < 991) 
					$("html, body").animate({ scrollTop:$(".mobile-filter__dropdown").first().offset().top - 7}, 1000,'',function(){$("img.lazy").lazyload({ threshold : 600 });});
				else
					$("html, body").animate({ scrollTop:$("#scrollIndicatorf").position().top +$("#scrollIndicatorf").height()- 15 }, 1000,'',function(){$("img.lazy").lazyload({ threshold : 600 });});
           }  
    });
    }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-** 
function buildButtons(){
    var currentPage   = parseInt($("#current_page").val());
    var pagelength    = parseInt($("#SIIPPG").val());
    var totalPages    = parseInt($("#total_pages").val());
    var totalResults  = parseInt($("#total_results").val());
    var maxviewall    = parseInt($("#maxviewall").val());
    var i;
    $(".mobile-filter__results").html(format(totalResults)+" Results");
    $(".filter__results").html(format(totalResults)+" Results");
    $("#total_pages").val(totalPages);
    $("#pagination__dropdown option").remove();
    
    for (i = 1; i <= totalPages; i++) { 
            $( "<option value=\""+i+"\">"+i+"</option>" ).appendTo( "#pagination__dropdown" );
        }
    if(totalPages<=1) 
        $("#product-grid__pagination").css("visibility","hidden");
    else
        $("#product-grid__pagination").css("visibility","visible");
    
    $("#pagination__dropdown").val(currentPage);
    
    if(currentPage>1) 
        $("#pagination__link--prev").removeClass("hidden");
    else
        $("#pagination__link--prev").addClass("hidden");
    
    if(currentPage<totalPages)
        $("#pagination__link--next").removeClass("hidden");
    else
        $("#pagination__link--next").addClass("hidden");
    $("#ttlpages").html("of "+totalPages);
    if(totalResults > maxviewall || totalResults <=24){$("#perpageAll").addClass("hidden");} else {$("#perpageAll").removeClass("hidden");} 
    if(totalResults < 24 || totalResults <=0 ){$("#perpage24").addClass("hidden");} else {$("#perpage24").removeClass("hidden");} 
    if(totalResults < 48 || totalResults <=0 ){$("#perpage48").addClass("hidden");} else {$("#perpage48").removeClass("hidden");} 
    if(totalResults < 96 || totalResults <=0 ){$("#perpage96").addClass("hidden");} else {$("#perpage96").removeClass("hidden");}
    
    $("#perpageAll").removeClass("active");
    $("#perpage24").removeClass("active");
    $("#perpage48").removeClass("active");
    $("#perpage96").removeClass("active");
    switch (parseInt(pagelength)){
        case 24:
            $("#perpage24").addClass("active");
            break;
        case 48:
            $("#perpage48").addClass("active");
            break;
        case 96:
            $("#perpage96").addClass("active");
            break;
        default:
            $("#perpageAll").addClass("active");
            break;
        
    }
            
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function syncMtoFull(){
$(".leftMenuM").each(function(){ 
		var mid = $(this).attr("id").substring(1);
                if($("#"+mid+' input:first').is(':checked'))
                    $(this).addClass("selected");
                else
                    $(this).removeClass("selected");
                             
});

$(".leftMenuMC label").each(function(){                 
                var mid = $(this).parent("li").attr("id").substring(1);
                if($("#"+mid+' input:first').is(':checked')){
                    $(this).next('ul').find('li').slideDown();
                    $(this).addClass("selected");
                }                    
                else{
                    $(this).next('ul').find('li').slideUp();
                    $(this).removeClass("selected");
                }
});
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function adjustleft(data){ 
if(typeof(data) != "undefined"){
    var sectn = $('#SICURR').val();
    var sectnM = $('#SICURRM').val();
    var obj = jQuery.parseJSON( data );

    //Zero Out
    $( ".leftMenu span.count" ).each(function( ) {
        var cnt = $(this).parentsUntil('.panel').parent().find('input:checked').length;
        if( $( this ).parentsUntil('.panel-collapse').parent().attr('id')!=sectn || $("#onUnload").val()=="Y" || cnt==0)
            { $(this).html("(0)");
              //$( this ).parentsUntil('.panel-collapse').parent().parent('.panel').hide();
              $( this ).parentsUntil('.leftMenu').parent().addClass("disabled");
            }
    });
    //Zero Out Mobile
    $( ".leftMenuM span.count" ).each(function( ) {
        if($(this).parentsUntil('.mobileGroup').last().parent().attr("id")!=sectnM)
            { $(this).html("(0)");
              //$( this ).parentsUntil('.mobileGroup').parent().hide();    
            }
    });
    $( ".leftMenuMC span.count" ).each(function( ) {
        if($(this).parentsUntil('.mobileGroup').last().parent().attr("id")!=sectnM)
            { $(this).html("(0)");
             // $( this ).parentsUntil('.mobileGroup').parent().hide();   
            }
    });
    
    
    //Update Counts
    for (var i = 0, len = obj.length; i < len; ++i) {
        var leftid = obj[i].id;
        var leftcnt= obj[i].count;
        var cnt = $( '#'+leftid ).parentsUntil('.panel').parent().find('input:checked').length;
        if($( '#'+leftid ).parentsUntil('.panel-collapse').parent().attr('id')!=sectn || $("#onUnload").val()=="Y" || cnt==0)
            {
                $('#'+leftid+' span.count:first').html('('+leftcnt+')'); 
            }
                //if($('#M'+leftid).parentsUntil().attr("id")!=sectnM){
                if($('#M'+leftid).parentsUntil('.mobileGroup').parent().attr("id")!=sectnM){
                    $('#M'+leftid+' span.count:first').html('('+leftcnt+')'); 
                }
            
        } 
	//Enable valid
	$( ".leftMenu , .leftMenu1" ).each(function( ) {
		if( $(this).find('span.count').first().html()!=="(0)") 
			$(this).removeClass("disabled");
		else
			$(this).addClass("disabled");
	});
	var nfilters = 0;
        $(".panel-link").each(function(){
			var chekn = $(this).parentsUntil('.panel').parent().find('input:checked').length;
                        nfilters = nfilters + chekn;
			$(this).find(".checkn").first().remove();
			if (chekn > 0){
				$(this).html($(this).html()+'<span class="checkn"> - ('+ chekn +') SELECTED</span>');
				$(this).parentsUntil('div.panel-heading').parent().parent().find('.panel-body .resetdiv').css("visibility","visible");
			}else{
				$(this).parentsUntil('div.panel-heading').parent().parent().find('.panel-body .resetdiv').css("visibility","hidden");
			}	
	});
        if(nfilters>0){
            $("#clearAllFilters").fadeIn();
            $("#clearAllFilters").html("Clear All Filters ("+nfilters+")");
        }
        else{
            $("#clearAllFilters").fadeOut();
            $("#clearAllFilters").html("");
        }
	
        return false;
    //Hide Zeros
    $( ".leftMenu span.count" ).each(function( ) {
        var parentli = $( this ).parentsUntil('li').parent();
        if( $( this ).parentsUntil('.panel-collapse').parent().attr('id')!=sectn)
            {
                if( $( this ).html()=="(0)")
                { 
                    parentli.hide();
                }
                    else
                {   
                        //Special Case for Categories leftMenu1
                        if(parentli.hasClass("leftMenu1")){
                            if(parentli.parentsUntil('div').parent().prev('label').find('input').is(":checked"))
                                parentli.show();
                        }
                        else
                        parentli.show();
                        
                    $( this ).parentsUntil('.panel-collapse').parent().parent('.panel').show();  
                }
            }
    });
    //Mobile
    $( ".leftMenuM span.count" ).each(function( ) {
        var parentli = $( this ).parentsUntil('li').parent();
        if( $( this ).parentsUntil('.mobileGroup').parent().attr('id')!=sectnM)
            {
                if( $( this ).html()=="(0)")
                { 
                   // parentli.hide();
                }
                    else
                {   
                       
                       // parentli.show();
                        
                    $( this ).parentsUntil('.mobileGroup').last().parent().show();  
                }
            }
    });
    //Mobile Categories
    $( ".leftMenuMC span.count" ).each(function( ) {
        var parentli = $( this ).parentsUntil('li').parent();
        if( $( this ).parentsUntil('.mobileGroup').last().parent().attr('id')!=sectnM)
            {
                if( $( this ).html()=="(0)")
                { 
                    //parentli.hide();
                }
                    else
                {   
                        //Special Case for Categories leftMenu1
                        if(parentli.hasClass("leftMenu1M")){
                            if(parentli.parentsUntil('.leftMenu1M').parent().next('label').find('input').is(":checked")){
                               // parentli.show();
                           }
                        }
                        else{
                        //parentli.show();
                    //$( this ).parentsUntil('.mobileGroup').parent().show(); 
                        }
                }
            }
    });
 }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function resetCompare(){
    compStyle = [];
    $(".compare-item").remove();
     $(".compare-tooltip").hide();
     markCompare();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function clearComp(styl){
            var index = compStyle.indexOf(styl);
            compStyle.splice(index,1);
            $("#COMP"+styl).remove(); 
            $("#COMPC"+styl).prop('checked', false);
            if(compStyle.length>0)
                $(".compare-tooltip").show();
            else{
                $(".compare-tooltip").hide();
                $('#compareModal').modal('hide');
            }
        
            if(compStyle.length>1){
              $("#compareBtn").removeClass("disabled");
              $("#compareBtn").prop('disabled',false);
            }
            else{
              $("#compareBtn").addClass("disabled");
              $("#compareBtn").prop('disabled',true);                
            }
            $("#row"+styl).remove();
                
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function markCompare(){
    $(".compCheck").prop("checked",false);
    for (i = 0; i < compStyle.length; i++) { 
        $("#COMPC"+compStyle[i]).prop('checked', true);
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function checkCompare(obj){
    var inp = obj.find('input').first();
    var styl = inp.attr("stylname");
    var href = inp.attr("stylhref");
    var desc = inp.attr("styldesc");
    var img  = inp.attr("stylimg");
    var host = inp.attr("imghost");
    var itemHtml;
    if(!inp.is(':checked')){
            inp.prop('checked', true);
            compStyle.push(styl);
         itemHtml = '<li class="compare-item" id="COMP' + styl + '">' +
                      '<img class="compare-item__thumbnail" src="' + img + '" height="50">' +
                      '<a href="' + href + '" class="compare-item__name">' + desc + '</a>' +
                      '<a href="javascript:void(0)" onclick="clearComp(\'' + styl + '\')" class="compare-item__remove" stylname="' + styl + '"><svg class="icon close--circle"><use xlink:href="' + host + '/images/sprite.svg#close--circle"></use></svg></a>' +
                    '</li>';
        $( itemHtml ).appendTo("#compareBody");
        $(".compare-tooltip").css("top",obj.offset().top-30);
        $(".compare-tooltip").css("left",obj.offset().left+30);
        $(".compare-tooltip").show();
        
        
        
        
    }else{
        inp.prop('checked', false);
        var index = compStyle.indexOf(styl);
            compStyle.splice(index,1);
        $("#COMP"+styl).remove(); 
        $(".compare-tooltip").css("top",obj.offset().top-30);
        $(".compare-tooltip").css("left",obj.offset().left+30);
        if(compStyle.length>0)
            $(".compare-tooltip").show();
        else
            $(".compare-tooltip").hide();
    }
    if(compStyle.length>1){
              $("#compareBtn").removeClass("disabled");
              $("#compareBtn").prop('disabled',false);
            }
            else{
              $("#compareBtn").addClass("disabled");
              $("#compareBtn").prop('disabled',true);                
            }
    //alert(JSON.stringify(compStyle));
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function format(num){
    var n = num.toString(), p = n.indexOf('.');
    return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, function($0, i){
        return p<0 || i<p ? ($0+',') : $0;
    });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function comparestyles(){
showWait();
var styles="";
styles =compStyle.join("$");
var clrnc = $('#SICLER').val();
$.ajax({
        url: '/CGBCCOMPR?PMCLER='+clrnc+'&PMDATA='+styles,
       type: "get",
   dataType: 'html',
    success: function(html){
                  $('#compareModal .modal-content').html(html);
                  hideWait();
                  $("#compareModal").modal()
            }
			
        });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function imageListners(){
    //Images Listeners
            $(".product__gallery--thumbnail").click(function(){ 
                $(".product__gallery--thumbnail").removeClass("active"); 
                $(this).addClass("active");
                $("#product__gallery--active").attr("src",$(this).attr("src"));
            });
            if(imgCtr > 5){$("#product__thumbnails--next").show();} else{$("#product__thumbnails--next").hide();}
    //Next Image Button        
            $("#product__thumbnails--next").click(function(){
               var hght = $("#product__thumbnails--scroll").find('img').first().height();
               var hght = parseInt(hght)+12;
                posCtr = posCtr + 1;
                if(posCtr > (imgCtr-5)){posCtr = (imgCtr -5); return false;}
               var posTop = - posCtr*hght;
               setPrevNext();
            });
    //Previous Image Button
            $("#product__thumbnails--prev").click(function(){
               var hght = $("#product__thumbnails--scroll").find('img').first().height();
               var hght = parseInt(hght)+12;
                posCtr = posCtr - 1;
                if(posCtr < 0){posCtr = 0; return false;}
               var posTop = - posCtr*hght;
               setPrevNext();
            });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function affixSearch(){
    //if($("#onUnload").val()!=="Y"){return false;}
    var top2 = self.pageYOffset;
    if($("#onUnload").val()!=="Y") $("#topPosition").val(top2);  
    if (!$('.category').length) { return false;} 
    var top1 = $('#scrollIndicator').offset().top +170 ;
    
    
//Full
    if(top1 < top2 + 105){
        if($(window ).height() > filterHeight + 400)$('#affixed2').addClass("affix");    
        $('#affixed1').addClass("affix");
    }
    else{if(top1 > top2){
        $('#affixed2').removeClass("affix");    
        $('#affixed1').removeClass("affix");
        }
    }
//Mobile

    var top1 = $(".mobile-filter__dropdown").first().offset().top - 15;
	var top2 = self.pageYOffset;
	
//Full
    if(top1 < top2){
	 $('#mobileFilterAffix').css("top",0);
        $('#mobileFilterAffix').removeClass("hidden");    
    }
    else{
        $('#mobileFilterAffix').addClass("hidden");    
        
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function choices(program){
     origDesc1 = "Select "+ $("#origDesc1").html();
     origDesc2 = "Select "+ $("#origDesc2").html();
     origDesc3 = "Select "+ $("#origDesc3").html();
    $(".choices li").unbind('click');
    if($("#opv3UL li").length<2) $("#prehemmedMesg").hide();
    
    $(".choices li").click(function(){  
               
            if(processing =="P") return false;
             boxes =[];
            if($(this).hasClass('disabled')) return false;
             $("#SIOPV1P").val($("#SIOPV1").val());
             $("#SIOPV2P").val($("#SIOPV2").val());
             $("#SIOPV3P").val($("#SIOPV3").val());
             $("#SIOPV1").val("");
             $("#SIOPV2").val("");
             $("#SIOPV3").val("");
            if($(this).hasClass('selected')) 
                $(this).removeClass("selected");
            else
                $(this).addClass("selected");
                showWait("B");  
                $("#product__options--color-selected").html(origDesc1);
                $("#product__options--size").html(origDesc2);
                $("#product__options--size2").html(origDesc3);
            processing ="P";    
            var clicked = $(this);
            var section = $(this).parent().parent().attr("id");
            if(section=="opv1UL" && $(this).hasClass('disabld1')){  
                       $("#opv2UL li.selected").removeClass("selected");$("#SIOPV2").val("");
                       $("#opv3UL li.selected").removeClass("selected");$("#SIOPV3").val("");
                       $("#opv3ULH li.selected").removeClass("selected");
                   }
            $("#stockMsg").html("");       
            $("#opv1UL li").each(function(){
           //Opv1 Can be color or size...
                  if($(this).parent().attr('data-class')!= undefined)   
                       value = $(this).parent().attr('data-class');
                    else
                       value = $(this).parent().attr('data-size');
                   desc = $(this).parent().attr('title');
                   if($(this).attr("id") !=clicked.attr("id") && section == "opv1UL") $(this).removeClass("selected");
                   
                   if($(this).hasClass('selected')){ 
                       opv1 = value;
                       desc = $(this).parent().attr('title');
                       $("#product__options--color-selected").html(desc);
                       colorImage(opv1);
                       $("#SIOPV1").val(opv1);
                   }  
                   
                   var val = '{"opv1"  : "' + value + '"}';
                   var obj = eval('(' + val + ')');
                   boxes.push(obj); 
                    });  
                   
            $("#opv2UL li").each(function(){
                   value = $(this).parent().attr('data-size');
                   
                   if($(this).attr("id") !=clicked.attr("id") && section == "opv2UL") $(this).removeClass("selected");
                   if($(this).hasClass('selected')){ 
                       opv2 = value;desc = $(this).parent().attr('title');
                       $("#product__options--size").html(desc);$("#SIOPV2").val(opv2);
                       $("#SIOPV2").val(opv2);
                   }
                   var val = '{"opv2"  : "' + value + '"}';
                   var obj = eval('(' + val + ')');
                   boxes.push(obj);                   
                    });
                   
            $("#opv3UL li").each(function(){
                   value = $(this).parent().attr('data-size');
                   if($(this).attr("id") !=clicked.attr("id") && (section=="opv3ULH" || section == "opv3UL")) $(this).removeClass("selected");
                   if($(this).hasClass('selected')){ 
                       opv3 = value;desc = $(this).parent().attr('title');
                       $("#product__options--size2").html(desc);
                       $("#SIOPV3").val(opv3);}
                   var val = '{"opv3"  : "' + value + '"}';
                   var obj = eval('(' + val + ')');
                   boxes.push(obj); });           
            $("#opv3ULH li").each(function(){
                   value = $(this).parent().attr('data-size');
                   if($(this).attr("id") !=clicked.attr("id") && (section=="opv3ULH" || section == "opv3UL")) $(this).removeClass("selected");
                   if($(this).hasClass('selected')){ 
                       opv3 = value;desc = $(this).parent().attr('title');
                       $("#product__options--size2").html(desc);
                       $("#SIOPV3").val(opv3);}
                   var val = '{"opv3"  : "' + value + '"}';
                   var obj = eval('(' + val + ')');
                   boxes.push(obj); });           
         
         opv1 =  $("#SIOPV1").val();
         opv2 =  $("#SIOPV2").val();
         opv3 =  $("#SIOPV3").val();
         opv1p =  $("#SIOPV1P").val();
         opv2p =  $("#SIOPV2P").val();
         opv3p =  $("#SIOPV3P").val();
         var clearances ="";
         if(program=='CGBCSTYLQ') {styl  = $("#style").val(); if($("#SICLERQ").is(":checked")) clearances="Y";}
         else if($("#SICLER").is(":checked")) clearances="Y";

            $.ajax({    url:"/cgi/"+program,
                    async: true,
                     type: "POST",
                 dataType: "html",
                    data : JSON.stringify(boxes)+"&SIAJAXACTN=SELOPTION&SIAJAXMODE=Y&SIOPV1="+opv1+"&SIOPV2="+opv2+"&SIOPV3="+opv3+"&SIOPV1P="+opv1p+"&SIOPV2P="+opv2p+"&SIOPV3P="+opv3p+"&SISTYL="+styl+"&SICLER="+clearances  ,
                  success: function (json) { 
                                            json = jQuery.parseJSON(json)
                                            $.each(json, function(key, value) {
                                                    switch (true){
                                                        case (key == "SIEDP" || key == "SIOPV1" || key == "SIOPV2" || key == "SIOPV3"  ):
                                                            $("#"+key).val(value); 
                                                        break;
                                                        case (key == "vasable" ):
                                                            $("#"+key).val($.parseHTML(value)); 
                                                            if(value=="Y") $("#vasbutton").removeClass("hidden"); else $("#vasbutton").addClass("hidden");
                                                        case (key == "requiredvas" ):
                                                            $("#"+key).val(value); 
                                                            if(value=="Y") $("#vasbutton").removeClass("hidden");
                                                                   
                                                        break;
                                                    case (key =='hemmingMesg'):
                                                            $("#"+key).html($.parseHTML(value));  
                                                    break;
                                                        case (key != "stockMsg" && key!="priceMsg" && key!="sku" && key!="mfgn" && key!="RIDMSG"):
                                                            if(value=="disabled" || value=="disabld1") 
                                                                $("#"+key).addClass(value); 
                                                            else{ 
                                                                if(value=="selected"){
                                                                   colorImage(key.substring(4)); 
                                                                   $("#"+key).addClass("selected");
                                                                   $("#"+key).removeClass("disabled"); 
                                                                   $("#"+key).removeClass("disabld1"); 
                                                                   var xdesc = $("#"+key).parent().attr('title');
                                                                   var xid = $("#"+key).parent().parent().attr('id');
                                                                   if(xid=="opv1UL") $("#product__options--color-selected").html(xdesc);
                                                                   if(xid=="opv2UL") $("#product__options--size").html(xdesc);
                                                                   if(xid=="opv3UL") $("#product__options--size2").html(xdesc);
                                                                   if(xid=="opv3ULH") $("#product__options--size2").html(xdesc);
                                                                   
                                                            
                                                            }  
                                                                else{
                                                                    $("#"+key).removeClass("disabled"); 
                                                                    $("#"+key).removeClass("disabld1"); 
                                                                }
                                                            }
                                                        break;
                                                        default:
                                                            $("#"+key).html($.parseHTML(value));  
                                                        break;
                                                    }
                                                });                         
                                              
                                              $('.tipClass').tooltip({container: 'body',edgeOffset: 10,html:true,template:"<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\" onclick=\"void(0)\"></div></div>"}); 
                                              hideWait();
                                              processing ="";
                                              if($("#opv1UL li").not(".disabled").length == 1){$("#opv1UL li").not(".disabled").addClass("selected");$("#product__options--color-selected").html($("#opv1UL li").not(".disabled").parent().attr('title'));}
                                              if($("#opv2UL li").not(".disabled").length == 1){$("#opv2UL li").not(".disabled").addClass("selected");$("#product__options--size").html($("#opv2UL li").not(".disabled").parent().attr('title'));}
                                              if($("#opv3UL li").not(".disabled").length == 1 && $("#opv3ULH li").not(".disabled").length < 1){$("#opv3UL li").not(".disabled").addClass("selected");$("#product__options--size2").html($("#opv3UL li").not(".disabled").parent().attr('title'));}
                                              var finalprice = '$' + parseFloat($("#lspr").val()).toFixed(2);             
                                              if (finalprice !== '$0.00')
                                                $(".qtyPrice").html(finalprice);
                                              else
                                                $(".qtyPrice").html("");  
                        }            
                    })
       
            }); 
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function selColr(colorid){
        $("#videoDiv").html("");
        $("#videoDiv").addClass("hidden");
        if($("#"+colorid).hasClass('disabled')) return false;
        if($("#"+colorid).hasClass('selected')) return false;
        $("#"+colorid).trigger("click");
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function colorImage(opv1){
    if($(".colr"+opv1).length<1) return false;
    $(".colr"+opv1).trigger("click");
    var colrPos = parseInt($(".colr"+opv1).first().attr("position"));
    if(colrPos > 0)  $('#product__mobile-slider').slick('slickGoTo',colrPos-1);
    
    if((colrPos-5)>posCtr) posCtr = colrPos -5;
    if((colrPos)>(posCtr+5))  posCtr = colrPos -5;
    if(colrPos<= posCtr)  posCtr = colrPos -5;
    if(posCtr<0) posCtr = 0;
    setPrevNext(); 
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function setPrevNext(){ 
    var hght = $("#product__thumbnails--scroll").find('img').first().height(); 
        hght = parseInt(hght)+12;
    var posTop = - posCtr*hght;
               $("#hiddenOverflow").animate({"top":posTop+"px"});
            
    if(imgCtr<=5){ $("#product__thumbnails--next").fadeOut(); $("#product__thumbnails--prev").fadeOut();return true;} 
    if(posCtr == 0){ $("#product__thumbnails--prev").fadeOut(); $("#product__thumbnails--next").show();return true;} 
    if(posCtr == (imgCtr -5)){ $("#product__thumbnails--prev").show(); $("#product__thumbnails--next").fadeOut();return true;} 
    if(posCtr > 0){ $("#product__thumbnails--prev").show();$("#product__thumbnails--next").show(); } 
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function onlyClear(){
    showWait();
    $("#SIACTN").val("CLEARONLY");
    setTimeout(function(){$("#styleForm").submit();},100);
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addToCart(){
    var errors="N";
    $(".iv2s").each(function(){
        if($.trim($(this).val())==""){
            alert($(this).attr("prompt")+' is required!');
            errors ="Y";
            return false;
        }
    });
    if(errors=="Y") return false;
    showWait();
    $("#SIACTN").val("ADDTOCART");
            $("#customizeModal").modal("hide");
            $.ajax({
            url: '/CGBCSTYL',
	   type: "post",
       dataType: 'html',
           data: $("#styleForm").serialize(),
        success: function(html){ 
            if(html=="S"){ 
                        miniCart();
                    }
            else{hideWait();
                alert("Error happened...please add to cart again!");               
                }
            }
        });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function showErrors(){
    if(!$('#SIERR').length) return false;
var array = $('#SIERR').val();
if(array != ""){
var data = JSON.parse(decodeURIComponent(array));

for (var i = 0, len = data.length; i < len; ++i) {     
     var id = data[i].id;
     var id1 = id.replace("f.", ""); 
     if(i==0)$('#'+id1).focus();
     $('#'+id1).css("outline","1px solid #f990a2");
     var mesg= data[i].errmsg;
$('#'+id1).after('<span class="fldError"><small>'+mesg+'</small></span>');


    } 
  }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function loadGcInfo(edp) {
var ajaxurl = '/CGBCXSRGC';
var cdno =  $('#SICDNO').val();    

  $.ajax({       url: '/CGBCXSRGC',
			          type: 'get',
            dataType: 'html',
                data: {SIEDP: edp, SICDNO:cdno},
           
          success: function (html) {        
                $("#gcInfoBody").html(html);
                $("#gcInfo").modal();       
            }
        })		
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function togldt(){
if($('#SIDLMT').val()=='FUTURE') $('#deliveryDate').show();
else $('#deliveryDate').hide(); 
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addGiftCard(){ 
        showWait();
        var edp  =  $('#SIEDP').val();
        var cdno =  $('#SICDNO').val();        
        var sore = $("#SISORE").val();    
	      var srky = $("#SISRKY").val();    
	      var info = $("#SIINFO").val(); 
        
        var rcfn = $('#SIRCFN').val(); 
        var rcln = $('#SIRCLN').val();
        var rcem = $('#SIRCEM').val();
        var frnm = $('#SIFRNM').val();
        var pmsg = $('#SIPMSG').val(); 
        var dlmt = $('#SIDLMT').val();
        var dldt = $('#SIDLDT').val();
           
 
     $.ajax({
                 url: '/CGBCXSRGC',
			          type: 'get',
            dataType: 'html',
                data: {
                   SIEDP: edp,
                   SIRCFN: rcfn,
                   SIRCLN: rcln,
                   SIRCEM: rcem,
                   SIFRNM: frnm,
                   SIPMSG: pmsg,
                   SIDLMT: dlmt,
                   SIDLDT: dldt,                   
                   SICDNO: cdno,
                   SISORE: sore,
                   SISRKY: srky,
                   SIINFO: info,                   
                   SIACTN: 'SAVE'
                     },            
         success:function (html) {hideWait();
           if(html.indexOf('<CloseDomeWindow>') == -1){
                $("#gcInfoBody").html(html);
                $("#gcInfo").modal();  
                countChar();       
                showErrors();
                }
                else
                {   showWait();
                    window.location.href = "/cart";
                    
                    }
                
            }
        })
			
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addToCartItem(){
    var errors = "N";
    $(".styleOption").each(function(){
        if($(this).attr("mesg")!=="" && $(this).val()==""){
            alert("Please Select " + $(this).attr("mesg"));
            errors ="Y";
            return false;
        }
    });
    if(errors == "N"){
        var styl = $( "input[name*='SISTYL']" ).val(); 
if(styl=='GIFT'){
var edp = $("#SIEDP").val();
loadGcInfo(edp);      
return true;
}
    }
    
    if(errors == "N"){
        if (document.f.SIOPV3)
    {
    var option = document.f.SIOPV3.value;
     if($.trim(option) =='*OB') {
    var msg=confirm("Please customize your hemming in the customization screen.");
    if (msg)
        $('.customize-button').click(); return false;  
    }
    }
    if($('#requiredvas').val()=='Y' && $("#SIEDP").val()!=""){
    var msg=confirm("Please customize your item in the customization screen.");
    if (msg)
        $('.customize-button').click(); return false;
  } 
    } 
    if(errors=="N"){
        showWait();
        $("#SIACTN").val("ADDTOCART");
        $.ajax({
            url: '/CGBCSTYL',
	   type: "post",
       dataType: 'html',
           data: $("#styleForm").serialize(),
        success: function(html){ 
            if(html=="S"){ 
                        miniCart();
                    }
            else{hideWait();
                alert("Error happened...please add to cart again!");               
                }
            }
        });
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addToCartQV(){
    var errors = "N";
    $(".styleOption").each(function(){
        if($(this).attr("mesg")!=="" && $(this).val()==""){
            alert("Please Select " + $(this).attr("mesg"));
            errors ="Y";
            return false;
        }
    });
    if(errors=="N"){
        showWait("B");
        $("#SIAJAXACTN").val("ADDTOCART");
        $("#SIAJAXMODE").val("Y");
        $.ajax({
            url: '/CGBCSTYLQ',
	   type: "post",
       dataType: 'html',
           data: $("#QuickViewForm").serialize(),
        success: function(html){ 
            if(html=="S"){ 
                    //window.location.href = "/cart";
                        $("#quickViewModal").modal("hide");
                        miniCart();
                    }
            else{hideWait();
                alert("Error happened...please add to cart again!");               
                }
            }
        });
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function syncQty(R){
               if (parseInt($("#GSIQTY"+R).val())>9999) $("#GSIQTY"+R).val("9999");
                   $("#SIQTY"+R).val($("#GSIQTY"+R).val());
              }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function syncSrce(){
    $("#SISRCE").val($("#SISRCEI").val());
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function syncQtyG(R){
                  if (parseInt($("#SIQTY"+R).val())>9999) $("#SIQTY"+R).val("9999");
                   $("#GSIQTY"+R).val($("#SIQTY"+R).val());
              }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function submit_form(form,actn) {
//------------------------------------------------------------------------------
//Select Text/Text Areas/Password Types Inputs
    clearCrossScript();
//------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
        if(actn=='DELETE' && $.trim(jsDeleteMsg) != ""){
            if(!confirm(jsDeleteMsg)){
                submitted = false;
                return;
            }
        }
        else if(actn=='DELETEB' && $.trim(jsDeleteMsgB) != ""){
            if(!confirm(jsDeleteMsgB)){
                submitted = false;
                return;
            }
        }
        else if(actn=='DELETEC' && $.trim(jsDeleteMsgC) != ""){
            if(!confirm(jsDeleteMsgC)){
                submitted = false;
                return;
            }
        }
        else if(actn=='DELETED' && $.trim(jsDeleteMsgD) != ""){
            if(!confirm(jsDeleteMsgD)){
                submitted = false;
                return;
            }
        }
        showWait();
        setTimeout(function(){
        eval('document.' + form + '.SIACTN.value=actn');
        eval('document.' + form + '.submit()');
        },100);
        
        
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function submit_Rfno(form,rfno,actn) {
//------------------------------------------------------------------------------
//Select Text/Text Areas/Password Types Inputs
    clearCrossScript();
//------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
 
        if(actn=='DELETE' && $.trim(jsDeleteMsg) != ""){
            if(!confirm(jsDeleteMsg)){
                submitted = false;
                return;
            }
        }
        else if(actn=='DELETEB' && $.trim(jsDeleteMsgB) != ""){
            if(!confirm(jsDeleteMsgB)){
                submitted = false;
                return;
            }
        }
        else if(actn=='DELETEC' && $.trim(jsDeleteMsgC) != ""){
            if(!confirm(jsDeleteMsgC)){
                submitted = false;
                return;
            }
        }
        else if(actn=='DELETED' && $.trim(jsDeleteMsgD) != ""){
            if(!confirm(jsDeleteMsgD)){
                submitted = false;
                return;
            }
        }
       
        showWait();
        eval('document.' + form + '.SIACTN.value=actn');
        eval('document.' + form + '.SIRFNO.value=rfno');
        setTimeout(function(){eval('document.' + form + '.submit()');},100);
        
        
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function headerLogin(){
    var username = $("#signInModalForm #usernameHead");
    var password = $("#signInModalForm #passwordHead");
    if(username.val()==="") return false;
    if(password.val()==="") return false;
    $("#signInModal .alert").hide();
    
    showWait();
    $.ajax({
            url: '/CGBCXLGIN?SIUSER='+username.val()+'&SIPSWD='+password.val(),
	   type: "post",
       dataType: 'html',
        success: function(html){
            hideWait();
             switch (html){
                 case("S"):
                     $("#signInModal #successMsg").slideDown();
                     setTimeout(function(){showWait();location.reload();},1000);
                    break; 
                 case("E"):
                    $("#signInModal #errorMsg").slideDown();
                    break; 
                 case("M"):
                    $("#signInModal #multMsg").slideDown();
                     setTimeout(function(){showWait();window.location.href = "/sign-in";},3000);
                    break; 
             }
                  
            }
        });
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function removeSdno(sdno,parentid){
    //Mode
    //RSD = Remove SDNO
     $.ajax({
            url: '/CGBCXSHPL?SIMODE=RSD&SISDNO='+sdno,
	   type: "post",
       dataType: 'html'});
    
    var parentSd = $("#sdno"+sdno).parentsUntil(".shopping-list__item").parent().slideUp(600, function() { $(this).remove();});
    var count = parseInt($("#countRows"+parentid).html())-1;
    if(count == 1)
        $("#countRows"+parentid).html("1 item");
    else
        $("#countRows"+parentid).html(count+" items");
    
   
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addToList(mode,slno,style){
    $("#successAddToList").hide();
    $("#quickViewModal").modal("hide");
    //Modes
    //A = add List from item page
    //I = open popup from item page
    //S = add Style to list from item page
    
    if(mode==="I") $("#styleList").val(style)
    if($("#loggedIn").hasClass("hidden")) { $("#signInModal").modal();loginmode="L";return false;}
    if(mode=="A" && $("#list-name").val()=="") return false;
    if(mode=="I")$("#list-name").val("");
    showWait();
    $.ajax({
            url: '/CGBCXSHPL?SIMODE='+mode+'&SISLNO='+slno+'&SINAME='+$("#list-name").val()+'&SISTYL='+$("#styleList").val(),
	   type: "post",
       dataType: 'html',
        success: function(html){
            hideWait();
                 $("#addToListModal #listBody").html(html);
                 $("#addToListModal").modal();
                 if(mode == "S"){
                     $("#successAddToList").html("<strong>Success!</strong> Item added to your shopping list.");
                     $("#successAddToList").slideDown();
                 }
                 if(mode == "A"){
                     $("#successAddToList").html("<strong>Success!</strong> New shopping list created.");
                     $("#successAddToList").slideDown();
                 }
                  
            }
        });
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function EditList(slno,mode,name){
    $("#editListModal #successMsg").hide();
    if(mode=="D"){if(!confirm("Delete this shopping list?")) return false;}
    if(mode == "I"){
        $("#slnoEdit").val(slno);
        $("#editListModal").modal();
        $("#list-name").val(name);
        return false;
    }
    if(mode == "E" || mode=="D"){
        if($("#list-name").val()=="") return false;
        showWait();
        $.ajax({
            url: '/CGBCXSHPL?SISLNO='+$("#slnoEdit").val()+'&SINAME='+$("#list-name").val()+'&SIMODE='+mode,
	   type: "post",
       dataType: 'html',
        success: function(html){
                    hideWait();
                    if(mode=="E"){
                        $("#editListModal #successMsg").html("<strong>Success!</strong> Shopping list saved, Reloading...");
                        $("#editListModal #successMsg").slideDown();                        
                    }
                    if(mode=="D"){
                        $("#editListModal #successMsg").html("<strong>Success!</strong> Shopping list deleted, Reloading...");
                        $("#editListModal #successMsg").slideDown();  
                    }
                  setTimeout(function(){showWait();location.reload();},1000);
            }
        });
        
    }
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function newShopList(){
    $("#newListModal #successMsg").hide();
    
        if($("#list-name-new").val()=="") return false;
        showWait();
        $.ajax({
            url: '/CGBCXSHPL?&SINAME='+$("#list-name-new").val()+'&SIMODE=N',
	   type: "post",
       dataType: 'html',
        success: function(html){
                    hideWait();
                        $("#newListModal #successMsg").html("<strong>Success!</strong> Shopping list created, Reloading...");
                        $("#newListModal #successMsg").slideDown();                        
                  setTimeout(function(){showWait();location.reload();},1000);
            }
        });
        
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addNewPhone(){
	$("#SITEL").val("");
    $("#SITYPE").val("M");
    $("#SIACTNPNNO").val("NEWPNNO");
    $("#saveNewPhone").html("Save New");
	$("#deletePnno").hide();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addNewShipping(){
    $("#SINAMES").val("");
    $("#SISAD1S").val("");
    $("#SISAD2S").val("");
    $("#SISZIPS").val("");
    $("#SISCTYS").val("");
    $("#SISSTAS").val("");
    $("#SICNTYS").val("");
    $("#SIPANOS").val("");
    $("#SIACTNPANOS").val("NEWPANOS");
    $("#saveNewShipping").html("Save New");
	$("#deletePanos").hide();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function editPhone(type,tel,ext,pnno){
	if($("#accountPhoneNumber").attr("aria-expanded")!="true") $("#addNewPhonebtn").trigger("click");
	$(".actionAlerts").remove();
	$("#SITYPE").val(type);
    $("#SITEL").val(tel);
	$("#SIPNNO").val(pnno);
    $("#SIEXT").val(ext);
	$("#SIACTNPNNO").val("EDITPNNO");
    $("#saveNewPhone").html("Update");
	$("#deletePnno").show();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function editShipping(name,adr1,adr2,city,sta,zip,cnty,pano){
    if($("#accountShippingInformation").attr("aria-expanded")!="true") $("#addNewShippingbtn").trigger("click");
    $(".actionAlerts").remove();
    //$(".bs.collapse").show();
    $("#SINAMES").val(name);
    $("#SISAD1S").val(adr1);
    $("#SISAD2S").val(adr2);
    $("#SISZIPS").val(zip);
    $("#SISCTYS").val(city);
    $("#SISSTAS").val(sta);
    $("#SICNTYS").val(cnty);
    $("#SIPANOS").val(pano);
    $("#SIACTNPANOS").val("EDITPANOS");
    $("#saveNewShipping").html("Update");
	$("#deletePanos").show();
   
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function deletePanos(){
	if(confirm("Delete this address?")){
		var pano = $("#SIPANOS").val();
		$.ajax({
            url: '/CGBCXACC?SIACTN=DELETEPGA&SIPANO='+pano,
	   type: "post",
		dataType: 'html'
		 });
		 $("#accountShippingInformationForm").prepend("<div style=\"display:none\" class=\"alert alert-danger actionAlerts\"><strong>Address deleted</strong></div>");
		showWait();
		$("#shippingF"+pano).remove();
		$("#shippingM"+pano).remove();
		setTimeout(function(){ $("#closeShippingbtn").trigger("click"); hideWait();}, 1000);
	}	
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function deletePnno(){
	if(confirm("Delete this phone number?")){
		var pnno = $("#SIPNNO").val();
		$.ajax({
            url: '/CGBCXACC?SIACTN=DELETEPGN&SIPNNO='+pnno,
	   type: "post",
		dataType: 'html'
		 });
		 $("#accountPhoneNumber").prepend("<div style=\"display:none\" class=\"alert alert-danger actionAlerts\"><strong>Phone number deleted</strong></div>");
		showWait();
		$("#phoneF"+pnno).remove();
		$("#phoneM"+pnno).remove();
		setTimeout(function(){ $("#closePhonebtn").trigger("click"); hideWait();}, 1000);
	}	
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function applySrce(){
  $("#SISRCE").val($("#SISRCEF").val());
  submit_form('f', 'SAVE');
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function validateGc(actn){
var cno = $('#SIGCNO').val();cno = $.trim(cno);
var pin = $('#SIPIN').val();pin = $.trim(pin);
var amt = $('#SIGAMT').val();amt = $.trim(amt);
$('.fldErrorgc').remove();
$('.fldError').remove();
//$('#SIGCNO').css("background","white");
//$('#SICCNO').css("background","white");
//$('#SICCEX').css("background","white");
//$('#SICCV').css("background","white"); 
//$('.SICCRF').css("background","white");
//$('#SIPIN').css("background","white");
if(cno==""){$('#SIGCNO').after('<span class="fldErrorgc">! Required</span>');$('#SIGCNO').focus();}
if(pin==""){$('#SIPIN').after('<span class="fldErrorgc">! Required</span>');if(!cno=="")$('#SIPIN').focus();return;}
//if(amt=="" && actn=="ADDGC"){$('#gcerrors').html('Amount is required');return false;} 
$('#gcerrors').html('');
$('#available').html('');
 $.post(  '/CGBCCART',
              { SIAJAXACTN: actn, 
                SIAJAXMODE: 'Y',
                    SIGCNO: cno,
                     SIPIN: pin,
                    SIGAMT: amt               
            },
             function (html) { 
              var data = JSON.parse(decodeURIComponent(html));
             if(data["gcerror"]!=""){$('#gcerrors').html(data["gcerror"]);return;}
             else{
              if(actn=="CHKGC"){$('#available').html('Available ($'+data["avlamnt"]+')');return;}
              
             //add payment
             if(actn=="ADDGC"){
                     var total = parseFloat($('#SICHCC').val());
                     var avlbl = parseFloat(data["avlamnt"]);
                     var amont = parseFloat(amt)|| 0;
                     if(amont > avlbl){$('#gcerrors').html('Only ($'+data["avlamnt"]+') available');return false;}
                     if(amont > total || total<=0){$('#gcerrors').html('Amount cannot exceed ($'+total.toFixed(2)+')');return false;} 
                     if(amont==0 && avlbl>=total)amont=total;
                     if(amont==0 && avlbl<total) amont=avlbl;
                     amont = amont.toFixed(2);
                     
                     $('#giftTable').slideDown();
                     var result = $.grep(addedGC, function(e){ return e.gcno == cno; });
                     if(result.length==0){
                      
                       addedGC.push({'gcno': cno,'pin':pin,'amount':amont,'available':data["avlamnt"]});paintTable();
                       $('#SIGCNO').val("");$('#SIPIN').val("");$('#SIGAMT').val("");  }
                     else
                      $('#gcerrors').html('Gift card "'+cno+'" has already been added'); 
            
             
             }
             
             }
            }
        );
    }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function removeGC(idno){
$('#gcerrors').html('');
addedGC = $.grep(addedGC, function(e){return e.gcno != idno; });
paintTable(); 
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function paintTable(){
$('#SIGIFT').val(encodeURIComponent(JSON.stringify(addedGC)));
$('.gcrow').remove();
var total = parseFloat($('#cartTotal').val());
var ctr=0; 
$.each(addedGC, function( key, value ) {
ctr+=1;
$('#giftTable tr:last').after('<tr class="gcrow" id="row'+value.gcno+'">'+
                                                         '<th align="center"><a href="javascript:void(0)" onclick="removeGC(\''+value.gcno+'\')"><img src="/images/icon-delete.png"></a></th>'+
                                                         '<td align="left">'+value.gcno+'<input type="hidden" id="SIGCNO__'+ctr+'" name="SIGCNO__'+ctr+'" value="'+value.gcno+'">'+
                                                         '<input type="hidden" id="SIPIN__'+ctr+'" name="SIPIN__'+ctr+'" value="'+value.pin+'"></td>'+
                                                         '<td align="right">$'+value.available+'</td>'+
                                                         '<td align="right">$'+value.amount+'<input type="hidden" id="SIAMNT__'+ctr+'" name="SIAMNT__'+ctr+'" value="'+value.amount+'"></td></tr>');
                                                          total -= value.amount; 
  
});
$('#SICHOA').val(total.toFixed(2));
$('#SICHCC').val(total.toFixed(2));
$('#SICHPP').val(total.toFixed(2));
if(total==0){
$('#SICCNO').prop('disabled', true);$('#SICCNO').val('');
$('#SICCTP1').prop('disabled', true);$('#SICCTP1').val('');
$('#SICCEX').prop('disabled', true);$('#SICCEX').val('');
$('#SICCV').prop('disabled', true);$('#SICCV').val(''); 
$('.SICCRF').prop('disabled', true);$('.SICCRF').val(''); 
$('#SIUPOF').prop('disabled', true);
}
else
{
if($('#SICCNO').prop('disabled')){ 
$('#SICCNO').prop('disabled', false);
$('#SICCTP1').prop('disabled', false);
$('#SICCEX').prop('disabled', false);
$('#SICCV').prop('disabled', false);
$('.SICCRF').prop('disabled', false);
$('#SIUPOF').prop('disabled', false);
 }
}
if(addedGC.length==0){$('#giftTable').hide();} else{$('#giftTable').show();} 
$('#SIGIFTN').val(addedGC.length);

}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function dfltGC(){
if(!($('#SIGIFT').length)) return false;    
if($('#SIGIFT').val()!="")
 addedGC = JSON.parse(decodeURIComponent($('#SIGIFT').val()));
 paintTable();
 if($("#SISTEP").val()=="2"){
        if($( window ).width()>991){
            $("html, body").animate({ scrollTop: $('#stepTwo').offset().top-30 }, 600);}
        else{
            $("html, body").animate({ scrollTop: $('#stepTwo').offset().top-140 }, 600);}
    }
 if($("#SISTEP").val()=="3"){
    if($( window ).width()>991){ 
        $("html, body").animate({ scrollTop: $('#stepThree').offset().top-30 }, 600);}
    else{
        $("html, body").animate({ scrollTop: $('#stepThree').offset().top-140 }, 600);}
 }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function saveGC() {
  var giftn = parseFloat($("#SIGIFTN").val());
  if (isNaN(giftn)) {
    giftn = 0;
  }
  if(giftn == 0) return false;
  var giftCards = "&SIGIFTN="+giftn;
  for (i=1; i <= giftn; i++) {
    giftCards += '&SIGCNO__'+i+'='+$("#SIGCNO__"+i).val()+
                 '&SIPIN__' +i+'='+$("#SIPIN__" +i).val()+
                 '&SIAMNT__'+i+'='+$("#SIAMNT__"+i).val();
  }  
 // ajaxOnChangeFunc('f','','SAVEGC','CGBCCART','SICHNO,SIGIFTN'+giftCards,'handleAjaxReply');

  $.ajax({    url:"/cgi/CGBCCART",
                    async: true,
                     type: "POST",
                 dataType: "html",
                    data : "SIAJAXACTN=SAVEGC&SIAJAXMODE=Y"+giftCards});
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function radioPayment(){
    var sectn =  $('input[name=SISLPI]:checked').val();
    $("#SICCRFO").val('');
    $("#SICCRF").val('');
	$("#SIONFL").prop('checked', false);
    if(sectn=="P"){
        $('.ccSection').slideUp();
        $('.oaSection').slideUp();
        $("#SICCV").removeAttr('required');
        $("#SICCNO").removeAttr('required');
        $("#SICCRFO").prop('disabled',true);
        $("#SICCRF").prop('disabled',true);
    }
    
    if(sectn=="C"){
        $('.ccSection').slideDown();
        $('.oaSection').slideUp();
        $("#SICCV").prop('required',true);
        $("#SICCNO").prop('required',true);
        $("#SICCRFO").prop('disabled',true);
        $("#SICCRF").prop('disabled',false);
    }
    if(sectn=="O"){
        $('.oaSection').slideDown();
        $('.ccSection').slideUp();
        $("#SICCV").removeAttr('required');
        $("#SICCNO").removeAttr('required');
        $("#SICCRFO").prop('disabled',false);
        $("#SICCRF").prop('disabled',true);
    }
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addrB(index){
$('#SIBAD1').val($('#SIBAD1H'+index).val());
$('#SIBAD2').val($('#SIBAD2H'+index).val());
$('#SIBCTY').val($('#SIBCTYH'+index).val());
$('#SIBZIP').val($('#SIBZIPH'+index).val());
$('#SIBSTA').val($('#SIBSTAH'+index).val());

if ($("#SISAMEBOX:checked").val())
{
$('#SISAD1').val($('#SIBAD1H'+index).val());
$('#SISAD2').val($('#SIBAD2H'+index).val());
$('#SISCTY').val($('#SIBCTYH'+index).val());
$('#SISZIP').val($('#SIBZIPH'+index).val());
$('#SISSTA').val($('#SIBSTAH'+index).val());
}
$("#upsMessage").modal('hide');    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addrS(index){
$('#SISAD1').val($('#SISAD1H'+index).val());
$('#SISAD2').val($('#SISAD2H'+index).val());
$('#SISCTY').val($('#SISCTYH'+index).val());
$('#SISZIP').val($('#SISZIPH'+index).val());
$('#SISSTA').val($('#SISSTAH'+index).val());
$("#upsMessage").modal('hide');
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function useCC(obj,pgm,actn,checked){
 if(checked) {
  $(".ccFields").fadeOut();
 }
 else
 {
  document.f.SICCNO.value="";
  document.f.SICCV.value="";
  $(".ccFields").fadeIn();
 }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function showPaypalPopup() {
  $(".btn-place-order").hide();
  $(".please-wait").show();
  $("#rstrBckg").fadeIn("slow");
	$("#paypalPopup").fadeIn("slow");
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function hidePaypalPopupMsg() {
  $("#rstrBckg").hide();
	$("#paypalPopup").hide();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function hidePaypalPopup() {
  $("#rstrBckg").fadeOut("slow");
	$("#paypalPopup").fadeOut("slow");
  showPlaceOrder();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function loadUpload(){
    var cnnotmp = $("#SICNNOTMP").val();
    $.ajax({    url:"/cgi/CGBCCART",
                    async: false,
                     type: "POST",
                 dataType: "html",
                    data : "SIAJAXACTN=UPLOADAJX&SIAJAXMODE=Y&SICNNOTMP="+cnnotmp  ,
                  success: function (html) { $("#popup").html(html); }                                         
                                            
                                    
                  });
    
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function uploadFILE(ext,pgm){
   var fileName;
   var pos;
   var message;
   if (!document.FILEForm.SIFILEUPL.value){
        alert('Please select a file before submitting.');
        count=0;
        return false;
   }else{
        fileName=document.FILEForm.SIFILEUPL.value;
        pos=fileName.lastIndexOf("\\");
        if (pos < 0){
         pos = fileName.lastIndexOf("/");
        }
        if (pos > 0){
         fileName = fileName.substring(pos+1);
        }
        pos=fileName.lastIndexOf(".");
        //message may be extra code
        message="";
        if (!(pos >= 0)){
             alert('Your file must have an extension.');
             count=0;
             return false;
        }
        //
        var extension = fileName.slice(pos+1);
        extension = extension.toLowerCase();
        //
        validExt   = ext;
        validExt = validExt.toLowerCase();
        //
        extFoundAt = validExt.indexOf(extension);
        if (extension.length > 2 && validExt.length > 2 && extFoundAt < 0){
              alert('Your file extension must be one of the following: ' + validExt);
              count=0;
              return false;
        }
                                                                          
        document.FILEForm.action=pgm;
        return true;
   }
   return true;
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function setSIRSTRCHK() {
  $("#generalModal").modal("hide");
  if($('#SIRSTRCHK').is(':checked')){
   document.f.SIRSTRCHK.value='Y';
  } else {
   document.f.SIRSTRCHK.value='';
  }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function openFraud(){
    $('#fraudInfo').modal('show');
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function closeUpload(){
    var cnnotmp = $("#SICNNOTMP").val();
    var chno = $("#SICHNO").val();
    var rqpo = $("#SIRQPO").val();
    var rqkf = $("#SIRQKF").val();
    var rqpa = $("#SIRQPA").val();
    var rstrchk = $("#SIRSTRCHK").val();
    $.ajax({    url:"/cgi/CGBCCART",
                    async: false,
                     type: "POST",
                 dataType: "html",
                    data : "SIAJAXACTN=RSTRAJX&SIAJAXMODE=Y&SICHNO="+chno+"&SICNNOTMP="+cnnotmp+"&SIRQPO="+rqpo+"&SIRQKF="+rqkf+"&SIRQPA="+rqpa+"&SIRSTRCHK="+rstrchk   ,
                  success: function (html) {
                                            var json = html.substr(0, html.indexOf('}')+1);
                                            $("#popup").html(html.substr(html.indexOf('}')+1));
                                            json = jQuery.parseJSON(json)
                                            $.each(json, function(key, value) {
                                                    $("#"+key).val(value); 
                                                });
                                            
                                           
                                           }
                                    });
            return showRstr();        
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function chkRstr() {
    var cnnotmp = $("#SICNNOTMP").val();
    var chno = $("#SICHNO").val();
    var rqpo = $("#SIRQPO").val();
    var rqkf = $("#SIRQKF").val();
    var rqpa = $("#SIRQPA").val();
    var rstrchk = "";
    if($("#SIRSTRCHK").is(':checked')) rstrchk = "Y";
    $.ajax({    url:"/cgi/CGBCCART",
                    async: false,
                     type: "POST",
                 dataType: "html",
                    data : "SIAJAXACTN=CHKRSTR&SIAJAXMODE=Y&SICHNO="+chno+"&SICNNOTMP="+cnnotmp+"&SIRQPO="+rqpo+"&SIRQKF="+rqkf+"&SIRQPA="+rqpa+"&SIRSTRCHK="+rstrchk   ,
                  success: function (html) {
                                            var json = html.substr(0, html.indexOf('}')+1);
                                            $("#popup").html(html.substr(html.indexOf('}')+1));
                                            json = jQuery.parseJSON(json)
                                            $.each(json, function(key, value) {
                                                    $("#"+key).val(value); 
                                                });
                                            
                                           
                                           }
                                    });
            return showRstr();                          
 // ajaxOnChangeFunc('f','','CHKRSTR','CGBCCART','SICHNO,SICNNOTMP,SIRQPO,SIRQKF,SIRQPA,SIRSTRCHK','handleAjaxReply');
  //return showRstr();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function showRstr(){
  if ($('#SIRQPO').val()!='' || $('#SIRQPA').val()!='' || $('#SIRQKF').val()!='') 
     {
    /*$('#SIRQPO').val('N');*/
		$("#generalModal").modal("show");hideWait();
    return true;
		} else {
    return false;
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function getTax(){
    $("#getTaxbtn").hide();
    $("#errorZip").hide();
    $("#successZip").hide();
    
    showWait();
    $.ajax({
            url: '/CGBCSRPUC',
	   type: "post",
       dataType: 'html',
           data:{ SIAJAXMODE: "Y", SIXZIP: $("#SIXZIP").val()}, 
        success: function(html){
             var info = jQuery.parseJSON( html );
                    
                    $.each(info, function(key, value) {
                        if(key=="E"){$("#errorZip").html(value);$("#errorZip").slideDown();}
                        if(key=="S"){$("#successZip").html("Success");$("#successZip").slideDown();$("#totalincTax").html(value);}
                    })
            hideWait();
            $("#getTaxbtn").show();
        }
    });
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function hideRstr(){
		$("#rstrBckg").fadeOut("slow");
		$("#rstr").fadeOut("slow");
    document.f.SIRQPO.value='';
    document.f.SIRQKF.value='';
    document.f.SIRQPA.value='';
    document.f.SICNNOTMP.value='';
    showPlaceOrder();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function showPlaceOrder() {
  $('.btn-place-order').attr("disabled",false);
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function placeOrder() {
		
        $('.btn-place-order').attr("disabled",true);
        submit_form('f','CHECKOUTC');
       
    }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function Quickview(style){
    showWait();
    $.ajax({
                 url: '/cgi/CGBCSTYLQ',
               cache: false,
		type: 'get',
            dataType: 'html',
                data: {PMSTYL : style,PMCLER: $("#SICLER").val() },
             success: function (html) {
                 if(html.charAt(0)=="R"){window.location = html.substring(1);return false;}
                 $("#QuickViewBody").html(html);
                 $("#quickViewModal").modal();
                 choices('CGBCSTYLQ');
                 hideWait();
                 imgCtr = $(".product__gallery--thumbnail").length;
                 imageListners();
             }
           })   
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function miniCart(){
    showWait();
    $.ajax({
                 url: '/cgi/CGBCCARTQ',
               cache: false,
		type: 'get',
            dataType: 'html',
             success: function (html) {
                 var maxh = $(window ).height() - $("#miniCartBody").position().top - 250;
                 $("#miniCartBody").html(html);
                 $("#miniCart").modal();
                 $(".miniCartBody").css("max-height", maxh+"px");
                 hideWait();
                 $(".cart--total").html("(" + $("#cartItems").val() + ")");
                 $(".carTotalM").html( $("#cartItems").val() );
                 $('.tipClass').tooltip({container: 'body',edgeOffset: 10,html:true,template:"<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\" onclick=\"void(0)\"></div></div>"});  
             }
           })   
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function closeMiniCart(){
    $("#miniCart").modal("hide");
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function onlyClearQ(style){
    var clearance = "";
    if($("#SICLERQ").is(":checked")) clearance="Y";
    showWait();
    $.ajax({
                 url: '/cgi/CGBCSTYLQ',
               cache: false,
		type: 'get',
            dataType: 'html',
                data: {PMSTYL : style,PMCLER: clearance },
             success: function (html) {
                 if(html.charAt(0)=="R"){window.location = html.substring(1);return false;}
                 $("#QuickViewBody").html(html);
                 $("#quickViewModal").modal();
                 choices('CGBCSTYLQ');
                 hideWait();   
             }
           })   
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function freeChange(){  var data =$("#freeSelec").val();
        var arr = data.split('$$');
       $("#freeitem").attr("styleid",arr[0]);
       $("#freemrno").val(arr[1]);
       freeItem();
     }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function freeItem(){
    
     if($("#freeitem").val()!=='true' ) return false;
        showWait();
        var edpNo  = $("#freeitem").attr("styleid");
        var fqty  = $("#freeitem").attr("freeqty");
        var styles = $("#freeitems").val();
        var mrnos = $("#freemrnos").val();
        var mrno  = $("#freemrno").val();
        var fqtys = $("#freeqtys").val();
        var message = $("#message").val();
            $.ajax({
            url: '/CGBCSTYLX',
            cache: false,
            dataType: 'html',
            data: {
                PMSTYL: edpNo,
                PMFQTY : fqty,
                PMSTYLES:styles,
                PMFQTYS :fqtys,
                PMMRNOS:mrnos,
                PMMRNO:mrno,
                PMMESG :message,
                PMPATH: 'CART'
            },
            success: function (html) {
                $("#freeItemBody").html(html);
                $("#freeItem").modal();
                hideWait();
              }
        });
    
    
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addToCartFree(){
    $("#SIAJAXMODE").val("");
    $("#SIAJAXACTN").val("");
    setTimeout(function(){$('#freeItemForm').submit();},100);    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function optChange(pgm,actn){
    $("#SIAJAXMODE").val("Y");
    $("#SIEDP").val("");
    $("#SIAJAXACTN").val(actn);
	    $.ajax({    url:"/cgi/"+pgm,
                    async: false,
                     type: "POST",
                 dataType: "html",
                    data : $("#freeItemForm").serialize(),  
                  success: function (html) {
                                            handleAjaxReply(html);
                                            $('.tipClass').tooltip({container: 'body',edgeOffset: 10,html:true,template:"<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\" onclick=\"void(0)\"></div></div>"}); 
                                            if ($("#SIEDP").val() !=='')
                                               $(".btns").slideDown();   
                                            else
                                                $(".btns").slideUp();
                                           
                                           }
                                    });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function handleAjaxReply(responseText){
    var ajaxStartValuesDelim = "**STARTVALUES**";
    var ajaxFieldDelim = "$_$";
    var ajaxValueDelim = "!=!";
    var ajaxOptionDelim = ";";      
    var allFields   = new Array;
    var fieldsStart = responseText.indexOf(ajaxStartValuesDelim);
    var oneField    = new Array;
    var newOptionArr= new Array;
    var bigAlert    = new Array;
    
    if (fieldsStart >= 0)
        var allFields = responseText.substr(fieldsStart+ajaxStartValuesDelim.length).split(ajaxFieldDelim);
    
    for (x in allFields){    
        if ($.trim(allFields[x]) == ""){break;}
        oneField = $.trim(allFields[x]).split(ajaxValueDelim);
              if (oneField[0] == "*JSALERT*"){
                  if ($.trim(oneField[1]) != ""){
                      bigAlert.length = bigAlert.length + 1;
                      bigAlert[bigAlert.length-1] = $.trim(oneField[1]); 
                  }
                  continue;
              }
              
              if (oneField[0] == "*JS*"){
                  //alert(oneField[1]);
                  if ($.trim(oneField[1]) != ""){
                      try{eval($.trim(oneField[1]));} catch(e){alert('Could not execute javascript:\n'+$.trim(oneField[1]))}                       
                  }
                  continue;
              }
              replaceSelectQualifier = 'new Option(';
              replaceSelectIdx = oneField[1].toUpperCase().indexOf(replaceSelectQualifier.toUpperCase());
              if (replaceSelectIdx != 0){
                  replaceSelectQualifier = '*EMPTY';
                  replaceSelectIdx = oneField[1].toUpperCase().indexOf(replaceSelectQualifier.toUpperCase());
              }
                   
              alertMsg = "oneField[0]="+oneField[0]
                       + "\ndocument.getElementById(oneField[0])="+document.getElementById(oneField[0])
                       + "\nreplaceSelectQualifier="+replaceSelectQualifier
                       + "\nreplaceSelectIdx="+replaceSelectIdx
              try{
                  alertMsg += "\nobj.type=" + document.getElementById(oneField[0]).type;
              }
              catch(e){alert("failed to retrieve object type\n"+alertMsg)}


              obj = document.getElementById(oneField[0]);
              if ((obj.type == 'text'     || obj.type == 'hidden' ||
                   obj.type == 'password' || obj.type == 'file')
                   && !obj.disabled){
                  obj.value=oneField[1];
              }
              else if ((obj.type == 'textarea')
                   && !obj.disabled){
                  obj.value=oneField[1];
                  //alert("oneField[0].substr(7)="+oneField[0].substr(7))
                  limitLen(0,oneField[0].substr(7)) // in compliance with LimitLen expectations
              }
              else if (obj.type == 'select-one' && !obj.disabled && replaceSelectIdx != 0){
                  alertMsg += "\nCurrent obj.style.display=" + obj.style.display
                           +  "\nSetting to=" + oneField[1];
                  //alert(alertMsg); 
                  for(optX=0; optX < obj.options.length; optX++){                          
                      if(obj.options[optX].value == oneField[1]){
                          obj.selectedIndex = optX;
                          break;
                      }
                  }                      
              }
              else if (obj.type == 'select-one' && !obj.disabled && replaceSelectIdx == 0){
                  alertMsg += "\nCurrent obj.style.display=" + obj.style.display
                           +  "\nReplacing options with=" + oneField[1];
                  obj.options.selectedIndex=-1;
                  obj.options.length=0;
                  if ($.trim(oneField[1]) != "*EMPTY"){
                      newOptionArr = oneField[1].split(ajaxOptionDelim);
                      for(optX=0; optX < newOptionArr.length; optX++){                          
                          if ($.trim(newOptionArr[optX]) == "") break;
                          evalStr = "obj.options["+optX+"]="+newOptionArr[optX].replace(/(\r\n)/g,"").replace('"','\"')+";";
                          eval(evalStr);
                      }  
                  }
              }
              else if (obj.type == 'checkbox' && !obj.disabled){
                  eval("obj.checked="+oneField[1]);
              }
              else if (obj.type == 'button' && !obj.disabled){
                  obj.style.display=oneField[1];
              }
              else {
                  try{obj.innerHTML=oneField[1];} catch(e){alert("Could not set value of " + oneField[0] + " with value " + oneField[1] + "\nType is " + obj.type)}
              }
    }
    
    if (bigAlert.length > 0){
        for (var i = 0; i < bigAlert.length; ++i){
            alert(bigAlert[i]);
        }
    }                                
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addToCartKit(){
    var errors = false;
    $(".compEdp").each(function(){
         if($(this).val()==""){
             errors = true;
             alert($(this).attr("reqmsg"));
             return false;
             
         }
    });
    if( errors ) return false;
        showWait();
        $("#SIACTN").val("ADDTOCART");
        $("#SIAJAXMODE").val("N");
        $.ajax({
            url: '/CGBCSTYLK',
	   type: "post",
       dataType: 'html',
           data: $("#styleForm").serialize(),
        success: function(html){ 
            if(html=="S"){ 
                        miniCart();
                    }
            else{hideWait();
                alert("Error happened...please add to cart again!");               
                }
            }
        });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function optChangeKit(){
    prepArray('');
    $("#SIAJAXMODE").val("Y");
    $("#SIEDP").val("");
	    $.ajax({    url:"/cgi/CGBCSTYLK",
                    async: true,
                     type: "POST",
                 dataType: "html",
                    data : $("#styleForm").serialize(),  
                  success: function (html) {
                                            handleAjaxReply(html);
                                            $('.tipClass').tooltip({container: 'body',edgeOffset: 10,html:true,template:"<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\" onclick=\"void(0)\"></div></div>"}); 
                                        }
                                    });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function getStock(){
prepArray('');
if($('#qty').val()!='' && $('#SIAREDP').val()!='')
{
//Valid Number inputed
 var qty = $('#qty').val();
 var aredp = $('#SIAREDP').val();
 var arname = $('#SIARNAME').val();
 var edp = $('#SIEDP').val();
 var styl = $('#SISTYL').val();
 qty = parseInt(qty);
 if (qty >= 1)
    $('#qty').val(qty);
 else
    {$('#qty').val('1'); qty=1;}
//Ajax Request to  get stockMessage.
   $.ajax({
                 url: '/cgi/CGBCSTYLK',
			          type: 'post',
            dataType: 'html',
                data: {
                      SIAJAXMODE: 'Y' ,
                      SIAJAXACTN: 'QTY',
                      SIAREDP: aredp,
                      SIARNAME: arname,
                      SIEDP: edp,
                      SISTYL: styl,
                      SIQTY: qty
                      }
           })
        .success(function (html) {
        //swap Inner Html
        $("#stockMsg").html(html);
        rndTip();
        $("#SIAREDP").val('');
        $("#SIARNAME").val('');
         })
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function prepArray(actn){

if(actn!='')
{
 actn=actn.substring(6);
if( $('#'+actn).length )
{
    $('#'+actn).val('');
}
}
var listedp='';
var listname='';
$(".compEdp").each(function() {
      if($(this).val()!='')
       if (listedp=='')
       {
        listedp =$(this).val();
        listname =$(this).attr('name');
        }
       else
        {
        listedp  =$.trim(listedp)+'$'+$(this).val();
        listname =$.trim(listname)+'$'+$(this).attr('name')
        }
		})
if(listedp!='')
   {
   $('#SIAREDP').val(listedp);
   $('#SIARNAME').val(listname);
   }
   }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function THIShandleEnterKeyQty(inField, e) {
  var charCode;
  if(e && e.which){
    charCode = e.which;
  }else if(window.event){
    e = window.event;
    charCode = e.keyCode;
  }
  if(charCode == 13) {
    showWait();
    submit_form('f','SAVE');
  }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function THIShandleEnterKeySrce(inField, e) {
  var charCode;
  if(e && e.which){
    charCode = e.which;
  }else if(window.event){
    e = window.event;
    charCode = e.keyCode;
  }
  if(charCode == 13) {
    showWait();
    submit_form('f','APPLYSRCE');
  }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function EnterActn(action, e) {
  var charCode;
  if(e && e.which){
    charCode = e.which;
  }else if(window.event){
    e = window.event;
    charCode = e.keyCode;
  }
  if(charCode == 13) {
    showWait();
    submit_form('f',action);
  }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function applySrce(){
    syncSrce();
   submit_form('f', 'APPLYSRCE');
   
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function removeUpload(iono) {
  //ajaxOnChangeFunc('f',this,'DELTUPL','CGBCCART','SICHNO,SICNNOTMP,SIRQPO,SIRQKF,SIRQPA,SIRFNO','handleAjaxReply');
  $("#DELETEB").parent().remove();
  $("#SIFILEUPL").val("");
  $("#SIRSTRCHK").prop('disabled', false);
  $("#SIRSTRCHK").attr('checked', false);
  $.ajax({    url:"/cgi/CGBCCART",
                    async: true,
                     type: "POST",
                 dataType: "html",
                    data : "SIAJAXACTN=DELTUPL&SIAJAXMODE=Y&SIRFNO="+iono});
}
