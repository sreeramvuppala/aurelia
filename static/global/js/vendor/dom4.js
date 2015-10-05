/*! (C) WebReflection Mit Style License */
(function(e){"use strict";function t(t){return typeof t=="string"?e.document.createTextNode(t):t}function n(n){if(n.length===1)return t(n[0]);for(var r=e.document.createDocumentFragment(),i=v.call(n),s=0;s<n.length;s++)r.appendChild(t(i[s]));return r}for(var r=Object.defineProperty||function(e,t,n){e.__defineGetter__(t,n.get)},i=[].indexOf||function(t){var n=this.length;while(n--)if(this[n]===t)break;return n},s,o,u,a,f=/^\s+|\s+$/g,l=/\s+/,c=" ",h=function(t,n){if(this.contains(t))n||this.remove(t);else if(n===undefined||n)n=!0,this.add(t);return!!n},p=(e.Element||e.Node||e.HTMLElement).prototype,d=["matches",p.matchesSelector||p.webkitMatchesSelector||p.khtmlMatchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector||function(t){var n=this.parentNode;return!!n&&-1<i.call(n.querySelectorAll(t),this)},"closest",function(t){var n=this,r;while((r=n&&n.matches)&&!n.matches(t))n=n.parentNode;return r?n:null},"prepend",function(){var t=this.firstChild,r=n(arguments);t?this.insertBefore(r,t):this.appendChild(r)},"append",function(){this.appendChild(n(arguments))},"before",function(){var t=this.parentNode;t&&t.insertBefore(n(arguments),this)},"after",function(){var t=this.parentNode,r=this.nextSibling,i=n(arguments);t&&(r?t.insertBefore(i,r):t.appendChild(i))},"replace",function(){this.replaceWith.apply(this,arguments)},"replaceWith",function(){var t=this.parentNode;t&&t.replaceChild(n(arguments),this)},"remove",function(){var t=this.parentNode;t&&t.removeChild(this)}],v=d.slice,m=d.length;m;m-=2)o=d[m-2],o in p||(p[o]=d[m-1]);document.createElement("a").matches("a")||(p[o]=function(e){return function(t){return e.call(this.parentNode?this:document.createDocumentFragment().appendChild(this),t)}}(p[o])),"classList"in document.documentElement?(a=document.createElement("div").classList,a.add("a","b","a"),"a b"!=a&&(p=a.constructor.prototype,"add"in p||(p=e.DOMTokenList.prototype),u=function(e){return function(){var t=0;while(t<arguments.length)e.call(this,arguments[t++])}},p.add=u(p.add),p.remove=u(p.remove),p.toggle=h)):(u=function(e){if(!e)throw"SyntaxError";if(l.test(e))throw"InvalidCharacterError";return e},a=function(e){var t=e.className.replace(f,"");t.length&&d.push.apply(this,t.split(l)),this._=e},a.prototype={length:0,add:function(){for(var t=0,n;t<arguments.length;t++)n=arguments[t],this.contains(n)||d.push.call(this,o);this._.className=""+this},contains:function(e){return function(n){return m=e.call(this,o=u(n)),-1<m}}([].indexOf||function(e){m=this.length;while(m--&&this[m]!==e);return m}),item:function(t){return this[t]||null},remove:function(){for(var t=0,n;t<arguments.length;t++)n=arguments[t],this.contains(n)&&d.splice.call(this,m,1);this._.className=""+this},toggle:h,toString:function y(){return d.join.call(this,c)}},r(p,"classList",{get:function(){return new a(this)},set:function(){}})),"head"in document||r(document,"head",{get:function(){return s||(s=document.getElementsByTagName("head")[0])}});try{new e.CustomEvent("?")}catch(g){e.CustomEvent=function(e,t){function n(n,i){var s=document.createEvent(e);if(typeof n!="string")throw new Error("An event name must be provided");return e=="Event"&&(s.initCustomEvent=r),i==null&&(i=t),s.initCustomEvent(n,i.bubbles,i.cancelable,i.detail),s}function r(e,t,n,r){this.initEvent(e,t,n),this.detail=r}return n}(e.CustomEvent?"CustomEvent":"Event",{bubbles:!1,cancelable:!1,detail:null})}})(window);