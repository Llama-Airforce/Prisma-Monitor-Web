import{bx as p}from"./vendor-9133d749.js";var O={},n={};Object.defineProperty(n,"__esModule",{value:!0});var C=n.getLocalStorage=D=n.getLocalStorageOrThrow=R=n.getCrypto=x=n.getCryptoOrThrow=I=n.getLocation=E=n.getLocationOrThrow=M=n.getNavigator=k=n.getNavigatorOrThrow=A=n.getDocument=$=n.getDocumentOrThrow=B=n.getFromWindowOrThrow=N=n.getFromWindow=void 0;function l(e){let t;return typeof window<"u"&&typeof window[e]<"u"&&(t=window[e]),t}var N=n.getFromWindow=l;function w(e){const t=l(e);if(!t)throw new Error(`${e} is not defined in Window`);return t}var B=n.getFromWindowOrThrow=w;function K(){return w("document")}var $=n.getDocumentOrThrow=K;function U(){return l("document")}var A=n.getDocument=U;function X(){return w("navigator")}var k=n.getNavigatorOrThrow=X;function G(){return l("navigator")}var M=n.getNavigator=G;function H(){return w("location")}var E=n.getLocationOrThrow=H;function Q(){return l("location")}var I=n.getLocation=Q;function z(){return w("crypto")}var x=n.getCryptoOrThrow=z;function Y(){return l("crypto")}var R=n.getCrypto=Y;function q(){return w("localStorage")}var D=n.getLocalStorageOrThrow=q;function Z(){return l("localStorage")}C=n.getLocalStorage=Z;Object.defineProperty(O,"__esModule",{value:!0});var P=O.getWindowMetadata=void 0;const W=n;function ee(){let e,t;try{e=W.getDocumentOrThrow(),t=W.getLocationOrThrow()}catch{return null}function o(){const u=e.getElementsByTagName("link"),f=[];for(let d=0;d<u.length;d++){const h=u[d],v=h.getAttribute("rel");if(v&&v.toLowerCase().indexOf("icon")>-1){const s=h.getAttribute("href");if(s)if(s.toLowerCase().indexOf("https:")===-1&&s.toLowerCase().indexOf("http:")===-1&&s.indexOf("//")!==0){let m=t.protocol+"//"+t.host;if(s.indexOf("/")===0)m+=s;else{const b=t.pathname.split("/");b.pop();const J=b.join("/");m+=J+"/"+s}f.push(m)}else if(s.indexOf("//")===0){const m=t.protocol+s;f.push(m)}else f.push(s)}}return f}function r(...u){const f=e.getElementsByTagName("meta");for(let d=0;d<f.length;d++){const h=f[d],v=["itemprop","property","name"].map(s=>h.getAttribute(s)).filter(s=>s?u.includes(s):!1);if(v.length&&v){const s=h.getAttribute("content");if(s)return s}}return""}function i(){let u=r("name","og:site_name","og:title","twitter:title");return u||(u=e.title),u}function a(){return r("description","og:description","twitter:description","keywords")}const c=i(),g=a(),j=t.origin,V=o();return{description:g,url:j,icons:V,name:c}}P=O.getWindowMetadata=ee;var te=globalThis&&globalThis.__spreadArrays||function(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<o;t++)for(var a=arguments[t],c=0,g=a.length;c<g;c++,i++)r[i]=a[c];return r},oe=function(){function e(t,o,r){this.name=t,this.version=o,this.os=r,this.type="browser"}return e}(),ne=function(){function e(t){this.version=t,this.type="node",this.name="node",this.os=p.platform}return e}(),re=function(){function e(t,o,r,i){this.name=t,this.version=o,this.os=r,this.bot=i,this.type="bot-device"}return e}(),ie=function(){function e(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return e}(),se=function(){function e(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return e}(),ae=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,ce=/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,y=3,ue=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",ae]],L=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function ge(e){return e?_(e):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new se:typeof navigator<"u"?_(navigator.userAgent):le()}function fe(e){return e!==""&&ue.reduce(function(t,o){var r=o[0],i=o[1];if(t)return t;var a=i.exec(e);return!!a&&[r,a]},!1)}function _(e){var t=fe(e);if(!t)return null;var o=t[0],r=t[1];if(o==="searchbot")return new ie;var i=r[1]&&r[1].split(/[._]/).slice(0,3);i?i.length<y&&(i=te(i,we(y-i.length))):i=[];var a=i.join("."),c=de(e),g=ce.exec(e);return g&&g[1]?new re(o,a,c,g[1]):new oe(o,a,c)}function de(e){for(var t=0,o=L.length;t<o;t++){var r=L[t],i=r[0],a=r[1],c=a.exec(e);if(c)return i}return null}function le(){var e=typeof p<"u"&&p.version;return e?new ne(p.version.slice(1)):null}function we(e){for(var t=[],o=0;o<e;o++)t.push("0");return t}function F(e){return ge(e)}function S(){const e=F();return e&&e.os?e.os:void 0}function he(){const e=S();return e?e.toLowerCase().includes("android"):!1}function ve(){const e=S();return e?e.toLowerCase().includes("ios")||e.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1:!1}function Ne(){return S()?he()||ve():!1}function me(){const e=F();return e&&e.name?e.name.toLowerCase()==="node":!1}function Be(){return!me()&&!!pe()}const $e=N,Ae=B,ke=$,Me=A,Ee=k,pe=M,Ie=E,xe=I,Re=x,De=R,Pe=D,T=C;function Fe(){return P()}function Oe(e){if(typeof e!="string")throw new Error(`Cannot safe json parse value of type ${typeof e}`);try{return JSON.parse(e)}catch{return e}}function Se(e){return typeof e=="string"?e:JSON.stringify(e)}const Te=Oe,be=Se;function We(e,t){const o=be(t),r=T();r&&r.setItem(e,o)}function je(e){let t=null,o=null;const r=T();return r&&(o=r.getItem(e)),t=o&&Te(o),t}function Ve(e){const t=T();t&&t.removeItem(e)}const ye="WALLETCONNECT_DEEPLINK_CHOICE";function Je(e,t){const o=encodeURIComponent(e);return t.universalLink?`${t.universalLink}/wc?uri=${o}`:t.deepLink?`${t.deepLink}${t.deepLink.endsWith(":")?"//":"/"}wc?uri=${o}`:""}function Ke(e){const t=e.href.split("?")[0];We(ye,Object.assign(Object.assign({},e),{href:t}))}function Le(e,t){return e.filter(o=>o.name.toLowerCase().includes(t.toLowerCase()))[0]}function Ue(e,t){let o=e;return t&&(o=t.map(r=>Le(e,r)).filter(Boolean)),o}export{me as A,Te as B,be as C,Ke as D,je as a,Fe as b,Ne as c,F as d,S as e,Je as f,xe as g,De as h,Be as i,Re as j,Me as k,ke as l,ye as m,$e as n,Ae as o,T as p,Pe as q,Ve as r,We as s,Ie as t,Ue as u,Le as v,pe as w,Ee as x,he as y,ve as z};
