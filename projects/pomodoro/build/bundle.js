var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function u(){return p(" ")}function f(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function l(t){return function(e){return e.preventDefault(),t.call(this,e)}}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let m;function v(t){m=t}const w=[],b=[],y=[],_=[],x=Promise.resolve();let $=!1;function k(t){y.push(t)}let E=!1;const R=new Set;function C(){if(!E){E=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];v(e),L(e.$$)}for(w.length=0;b.length;)b.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];R.has(e)||(R.add(e),e())}y.length=0}while(w.length);for(;_.length;)_.pop()();$=!1,E=!1,R.clear()}}function L(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const U=new Set;let T;function N(t,e){t&&t.i&&(U.delete(t),t.i(e))}function O(t,e,n,i){if(t&&t.o){if(U.has(t))return;U.add(t),T.c.push(()=>{U.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function A(t){t&&t.c()}function P(t,n,r){const{fragment:s,on_mount:a,on_destroy:c,after_update:h}=t.$$;s&&s.m(n,r),k(()=>{const n=a.map(e).filter(o);c?c.push(...n):i(n),t.$$.on_mount=[]}),h.forEach(k)}function j(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function S(t,e){-1===t.$$.dirty[0]&&(w.push(t),$||($=!0,x.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,o,r,s,a,h,p=[-1]){const u=m;v(e);const f=o.props||{},l=e.$$={fragment:null,ctx:null,props:h,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:p,skip_bound:!1};let d=!1;if(l.ctx=r?r(e,f,(t,n,...i)=>{const o=i.length?i[0]:n;return l.ctx&&a(l.ctx[t],l.ctx[t]=o)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](o),d&&S(e,t)),n}):[],l.update(),d=!0,i(l.before_update),l.fragment=!!s&&s(l.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);l.fragment&&l.fragment.l(t),t.forEach(c)}else l.fragment&&l.fragment.c();o.intro&&N(e.$$.fragment),P(e,o.target,o.anchor),C()}v(u)}class H{$destroy(){j(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var q=function(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}((function(t,e){t.exports=function(){var t=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},e=d,n=a,i=function(t){return c(a(t))},o=c,r=l,s=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(t){for(var e,n=[],i=0,o=0,r="";null!=(e=s.exec(t));){var a=e[0],c=e[1],h=e.index;if(r+=t.slice(o,h),o=h+a.length,c)r+=c[1];else{r&&(n.push(r),r="");var u=e[2],f=e[3],l=e[4],d=e[5],g=e[6],m=e[7],v="+"===g||"*"===g,w="?"===g||"*"===g,b=u||"/",y=l||d||(m?".*":"[^"+b+"]+?");n.push({name:f||i++,prefix:u||"",delimiter:b,optional:w,repeat:v,pattern:p(y)})}}return o<t.length&&(r+=t.substr(o)),r&&n.push(r),n}function c(e){for(var n=new Array(e.length),i=0;i<e.length;i++)"object"==typeof e[i]&&(n[i]=new RegExp("^"+e[i].pattern+"$"));return function(i){for(var o="",r=i||{},s=0;s<e.length;s++){var a=e[s];if("string"!=typeof a){var c,h=r[a.name];if(null==h){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(t(h)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+h+'"');if(0===h.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var p=0;p<h.length;p++){if(c=encodeURIComponent(h[p]),!n[s].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+c+'"');o+=(0===p?a.prefix:a.delimiter)+c}}else{if(c=encodeURIComponent(h),!n[s].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+c+'"');o+=a.prefix+c}}else o+=a}return o}}function h(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function p(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function u(t,e){return t.keys=e,t}function f(t){return t.sensitive?"":"i"}function l(t,e){for(var n=(e=e||{}).strict,i=!1!==e.end,o="",r=t[t.length-1],s="string"==typeof r&&/\/$/.test(r),a=0;a<t.length;a++){var c=t[a];if("string"==typeof c)o+=h(c);else{var p=h(c.prefix),u=c.pattern;c.repeat&&(u+="(?:"+p+u+")*"),o+=u=c.optional?p?"(?:"+p+"("+u+"))?":"("+u+")?":p+"("+u+")"}}return n||(o=(s?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=i?"$":n&&s?"":"(?=\\/|$)",new RegExp("^"+o,f(e))}function d(e,n,i){return t(n=n||[])?i||(i={}):(i=n,n=[]),e instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return u(t,e)}(e,n):t(e)?function(t,e,n){for(var i=[],o=0;o<t.length;o++)i.push(d(t[o],e,n).source);return u(new RegExp("(?:"+i.join("|")+")",f(n)),e)}(e,n,i):function(t,e,n){for(var i=a(t),o=l(i,n),r=0;r<i.length;r++)"string"!=typeof i[r]&&e.push(i[r]);return u(o,e)}(e,n,i)}e.parse=n,e.compile=i,e.tokensToFunction=o,e.tokensToRegExp=r;var g,m="undefined"!=typeof document,v="undefined"!=typeof window,w="undefined"!=typeof history,b="undefined"!=typeof process,y=m&&document.ontouchstart?"touchstart":"click",_=v&&!(!window.history.location&&!window.location);function x(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function $(t,e){if("function"==typeof t)return $.call(this,"*",t);if("function"==typeof e)for(var n=new R(t,null,this),i=1;i<arguments.length;++i)this.callbacks.push(n.middleware(arguments[i]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function k(t){if(!t.handled){var e=this._window;(this._hashbang?_&&this._getBase()+e.location.hash.replace("#!",""):_&&e.location.pathname+e.location.search)!==t.canonicalPath&&(this.stop(),t.handled=!1,_&&(e.location.href=t.canonicalPath))}}function E(t,e,n){var i=this.page=n||$,o=i._window,r=i._hashbang,s=i._getBase();"/"===t[0]&&0!==t.indexOf(s)&&(t=s+(r?"#!":"")+t);var a=t.indexOf("?");this.canonicalPath=t;var c=new RegExp("^"+s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"));if(this.path=t.replace(c,"")||"/",r&&(this.path=this.path.replace("#!","")||"/"),this.title=m&&o.document.title,this.state=e||{},this.state.path=t,this.querystring=~a?i._decodeURLEncodedURIComponent(t.slice(a+1)):"",this.pathname=i._decodeURLEncodedURIComponent(~a?t.slice(0,a):t),this.params={},this.hash="",!r){if(!~this.path.indexOf("#"))return;var h=this.path.split("#");this.path=this.pathname=h[0],this.hash=i._decodeURLEncodedURIComponent(h[1])||"",this.querystring=this.querystring.split("#")[0]}}function R(t,n,i){var o=this.page=i||C,r=n||{};r.strict=r.strict||o._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=e(this.path,this.keys=[],r)}x.prototype.configure=function(t){var e=t||{};this._window=e.window||v&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&v,this._click=!1!==e.click&&m,this._hashbang=!!e.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):v&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(y,this.clickHandler,!1):m&&n.document.removeEventListener(y,this.clickHandler,!1),this._hashbang&&v&&!w?n.addEventListener("hashchange",this._onpopstate,!1):v&&n.removeEventListener("hashchange",this._onpopstate,!1)},x.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},x.prototype._getBase=function(){var t=this._base;if(t)return t;var e=v&&this._window&&this._window.location;return v&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},x.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},x.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var n;if(this._running=!0,_){var i=this._window.location;n=this._hashbang&&~i.hash.indexOf("#!")?i.hash.substr(2)+i.search:this._hashbang?i.search+i.hash:i.pathname+i.search+i.hash}this.replace(n,null,!0,e.dispatch)}},x.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(y,this.clickHandler,!1),v&&t.removeEventListener("popstate",this._onpopstate,!1),v&&t.removeEventListener("hashchange",this._onpopstate,!1)}},x.prototype.show=function(t,e,n,i){var o=new E(t,e,this),r=this.prevContext;return this.prevContext=o,this.current=o.path,!1!==n&&this.dispatch(o,r),!1!==o.handled&&!1!==i&&o.pushState(),o},x.prototype.back=function(t,e){var n=this;if(this.len>0){var i=this._window;w&&i.history.back(),this.len--}else t?setTimeout((function(){n.show(t,e)})):setTimeout((function(){n.show(n._getBase(),e)}))},x.prototype.redirect=function(t,e){var n=this;"string"==typeof t&&"string"==typeof e&&$.call(this,t,(function(t){setTimeout((function(){n.replace(e)}),0)})),"string"==typeof t&&void 0===e&&setTimeout((function(){n.replace(t)}),0)},x.prototype.replace=function(t,e,n,i){var o=new E(t,e,this),r=this.prevContext;return this.prevContext=o,this.current=o.path,o.init=n,o.save(),!1!==i&&this.dispatch(o,r),o},x.prototype.dispatch=function(t,e){var n=0,i=0,o=this;function r(){var e=o.callbacks[n++];if(t.path===o.current)return e?void e(t,r):k.call(o,t);t.handled=!1}e?function t(){var n=o.exits[i++];if(!n)return r();n(e,t)}():r()},x.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var n=new R(t,null,this),i=1;i<arguments.length;++i)this.exits.push(n.middleware(arguments[i]))},x.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,n=t.path||(t.composedPath?t.composedPath():null);if(n)for(var i=0;i<n.length;i++)if(n[i].nodeName&&"A"===n[i].nodeName.toUpperCase()&&n[i].href){e=n[i];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var o="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var r=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==r)&&!(r&&r.indexOf("mailto:")>-1)&&!(o?e.target.baseVal:e.target)&&(o||this.sameOrigin(e.href))){var s=o?e.href.baseVal:e.pathname+e.search+(e.hash||"");s="/"!==s[0]?"/"+s:s,b&&s.match(/^\/[a-zA-Z]:\//)&&(s=s.replace(/^\/[a-zA-Z]:\//,"/"));var a=s,c=this._getBase();0===s.indexOf(c)&&(s=s.substr(c.length)),this._hashbang&&(s=s.replace("#!","")),(!c||a!==s||_&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(a))}}}}},x.prototype._onpopstate=(g=!1,v?(m&&"complete"===document.readyState?g=!0:window.addEventListener("load",(function(){setTimeout((function(){g=!0}),0)})),function(t){if(g)if(t.state){var e=t.state.path;this.replace(e,t.state)}else if(_){var n=this._window.location;this.show(n.pathname+n.search+n.hash,void 0,void 0,!1)}}):function(){}),x.prototype._which=function(t){return null==(t=t||v&&this._window.event).which?t.button:t.which},x.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&_)return new URL(t,e.location.toString());if(m){var n=e.document.createElement("a");return n.href=t,n}},x.prototype.sameOrigin=function(t){if(!t||!_)return!1;var e=this._toURL(t),n=this._window.location;return n.protocol===e.protocol&&n.hostname===e.hostname&&(n.port===e.port||""===n.port&&(80==e.port||443==e.port))},x.prototype._samePath=function(t){if(!_)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},x.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},E.prototype.pushState=function(){var t=this.page,e=t._window,n=t._hashbang;t.len++,w&&e.history.pushState(this.state,this.title,n&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},E.prototype.save=function(){var t=this.page;w&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},R.prototype.middleware=function(t){var e=this;return function(n,i){if(e.match(n.path,n.params))return n.routePath=e.path,t(n,i);i()}},R.prototype.match=function(t,e){var n=this.keys,i=t.indexOf("?"),o=~i?t.slice(0,i):t,r=this.regexp.exec(decodeURIComponent(o));if(!r)return!1;delete e[0];for(var s=1,a=r.length;s<a;++s){var c=n[s-1],h=this.page._decodeURLEncodedURIComponent(r[s]);void 0===h&&hasOwnProperty.call(e,c.name)||(e[c.name]=h)}return!0};var C=function t(){var e=new x;function n(){return $.apply(e,arguments)}return n.callbacks=e.callbacks,n.exits=e.exits,n.base=e.base.bind(e),n.strict=e.strict.bind(e),n.start=e.start.bind(e),n.stop=e.stop.bind(e),n.show=e.show.bind(e),n.back=e.back.bind(e),n.redirect=e.redirect.bind(e),n.replace=e.replace.bind(e),n.dispatch=e.dispatch.bind(e),n.exit=e.exit.bind(e),n.configure=e.configure.bind(e),n.sameOrigin=e.sameOrigin.bind(e),n.clickHandler=e.clickHandler.bind(e),n.create=t,Object.defineProperty(n,"len",{get:function(){return e.len},set:function(t){e.len=t}}),Object.defineProperty(n,"current",{get:function(){return e.current},set:function(t){e.current=t}}),n.Context=E,n.Route=R,n}(),L=C,U=C;return L.default=U,L}()}));function B(e){let n,o,r,m,v,w,b,y,_,x,$,k,E,R,C,L,U,T,N,O,A,P,j,S,I,H=D(e[1])+"",q=D(e[2])+"";return{c(){n=h("section"),o=h("article"),r=h("div"),m=p(e[0]),v=p("/4"),w=u(),b=h("div"),b.textContent=`${e[4].length}/${e[3].length}`,y=u(),_=h("article"),x=h("div"),$=p(H),k=p(":"),E=p(q),R=u(),C=h("div"),L=h("div"),U=h("a"),U.textContent="play/pause",T=u(),N=h("a"),N.textContent="reset",O=u(),A=h("article"),P=u(),j=h("div"),j.innerHTML='<a href="" class="svelte-u5i4bg">+</a>',d(o,"class","stats svelte-u5i4bg"),d(x,"class","timer-time svelte-u5i4bg"),d(U,"class","pause svelte-u5i4bg"),d(U,"href","/"),d(N,"class","reset svelte-u5i4bg"),d(N,"href","/"),d(L,"class","timer-controls svelte-u5i4bg"),d(C,"class","timer-controls-row svelte-u5i4bg"),d(_,"class","timer svelte-u5i4bg"),d(A,"class","todo-list"),d(j,"class","btn-add-task svelte-u5i4bg"),d(n,"id","timer-view"),d(n,"class","svelte-u5i4bg")},m(t,i){a(t,n,i),s(n,o),s(o,r),s(r,m),s(r,v),s(o,w),s(o,b),s(n,y),s(n,_),s(_,x),s(x,$),s(x,k),s(x,E),s(_,R),s(_,C),s(C,L),s(L,U),s(L,T),s(L,N),s(n,O),s(n,A),s(n,P),s(n,j),S||(I=[f(U,"click",l(e[5])),f(N,"click",l(e[6]))],S=!0)},p(t,[e]){1&e&&g(m,t[0]),2&e&&H!==(H=D(t[1])+"")&&g($,H),4&e&&q!==(q=D(t[2])+"")&&g(E,q)},i:t,o:t,d(t){t&&c(n),S=!1,i(I)}}}function D(t){return t<10?"0"+t:""+t}function K(){"denied"!==Notification.permission&&new Notification("The rest ended, go back to work!!!")}function V(t,e,n){!async function(){if("Notification"in window){if("granted"!==Notification.permission&&"denied"===Notification.permission)try{if("granted"===await Notification.requestPermission()){new Notification("Notifications activated!")}}catch(t){console.log(t)}}else alert("This device does not support desktop notification")}();let i=0,o=0,r=0,s=!1,a=!0;function c(){n(2,r=0),n(1,o=0)}return setInterval(()=>{a||(n(2,r+=1),60===r&&(n(2,r=0),n(1,o+=1)),s?5==o&&i<4?(s=!1,c(),K()):15==o&&4===i&&(s=!1,c(),K(),n(0,i=0)):25!=o||s||(c(),function(){if("denied"===Notification.permission)return;new Notification(`Pomodoro ${i} of 4 is done`)}(),n(0,i+=1),s=!0))},1e3),[i,o,r,[],[],function(){a=!a},function(){c()}]}class z extends H{constructor(t){super(),I(this,t,V,B,r,{})}}function G(t){let e,n,o;var r=t[0];return r&&(e=new r({})),{c(){e&&A(e.$$.fragment),n=p("")},m(t,i){e&&P(e,t,i),a(t,n,i),o=!0},p(t,[o]){if(r!==(r=t[0])){if(e){T={r:0,c:[],p:T};const t=e;O(t.$$.fragment,1,0,()=>{j(t,1)}),T.r||i(T.c),T=T.p}r?(e=new r({}),A(e.$$.fragment),N(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}},i(t){o||(e&&N(e.$$.fragment,t),o=!0)},o(t){e&&O(e.$$.fragment,t),o=!1},d(t){t&&c(n),e&&j(e,t)}}}function M(t,e,n){let i;return q("/projects/pomodoro",()=>n(0,i=z)),q.start(),[i]}return new class extends H{constructor(t){super(),I(this,t,M,G,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
