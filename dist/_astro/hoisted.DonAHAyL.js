var It=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ht(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var At={exports:{}};(function(t,e){(function(n,o){t.exports=o()})(It,function(){return function(n){function o(i){if(r[i])return r[i].exports;var l=r[i]={exports:{},id:i,loaded:!1};return n[i].call(l.exports,l,l.exports,o),l.loaded=!0,l.exports}var r={};return o.m=n,o.c=r,o.p="dist/",o(0)}([function(n,o,r){function i(p){return p&&p.__esModule?p:{default:p}}var l=Object.assign||function(p){for(var x=1;x<arguments.length;x++){var R=arguments[x];for(var z in R)Object.prototype.hasOwnProperty.call(R,z)&&(p[z]=R[z])}return p},u=r(1),v=(i(u),r(6)),c=i(v),f=r(7),a=i(f),b=r(8),m=i(b),h=r(9),A=i(h),k=r(10),B=i(k),G=r(11),J=i(G),Q=r(14),U=i(Q),L=[],V=!1,w={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},D=function(){var p=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(p&&(V=!0),V)return L=(0,J.default)(L,w),(0,B.default)(L,w.once),L},q=function(){L=(0,U.default)(),D()},d=function(){L.forEach(function(p,x){p.node.removeAttribute("data-aos"),p.node.removeAttribute("data-aos-easing"),p.node.removeAttribute("data-aos-duration"),p.node.removeAttribute("data-aos-delay")})},s=function(p){return p===!0||p==="mobile"&&A.default.mobile()||p==="phone"&&A.default.phone()||p==="tablet"&&A.default.tablet()||typeof p=="function"&&p()===!0},y=function(p){w=l(w,p),L=(0,U.default)();var x=document.all&&!window.atob;return s(w.disable)||x?d():(w.disableMutationObserver||m.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),w.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",w.easing),document.querySelector("body").setAttribute("data-aos-duration",w.duration),document.querySelector("body").setAttribute("data-aos-delay",w.delay),w.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?D(!0):w.startEvent==="load"?window.addEventListener(w.startEvent,function(){D(!0)}):document.addEventListener(w.startEvent,function(){D(!0)}),window.addEventListener("resize",(0,a.default)(D,w.debounceDelay,!0)),window.addEventListener("orientationchange",(0,a.default)(D,w.debounceDelay,!0)),window.addEventListener("scroll",(0,c.default)(function(){(0,B.default)(L,w.once)},w.throttleDelay)),w.disableMutationObserver||m.default.ready("[data-aos]",q),L)};n.exports={init:y,refresh:D,refreshHard:q}},function(n,o){},,,,,function(n,o){(function(r){function i(s,y,p){function x(g){var O=M,F=N;return M=N=void 0,C=g,S=s.apply(F,O)}function R(g){return C=g,E=setTimeout(W,y),$?x(g):S}function z(g){var O=g-j,F=g-C,bt=y-O;return H?q(bt,I-F):bt}function Y(g){var O=g-j,F=g-C;return j===void 0||O>=y||O<0||H&&F>=I}function W(){var g=d();return Y(g)?nt(g):void(E=setTimeout(W,z(g)))}function nt(g){return E=void 0,T&&M?x(g):(M=N=void 0,S)}function st(){E!==void 0&&clearTimeout(E),C=0,M=j=N=E=void 0}function Z(){return E===void 0?S:nt(d())}function _(){var g=d(),O=Y(g);if(M=arguments,N=this,j=g,O){if(E===void 0)return R(j);if(H)return E=setTimeout(W,y),x(j)}return E===void 0&&(E=setTimeout(W,y)),S}var M,N,I,S,E,j,C=0,$=!1,H=!1,T=!0;if(typeof s!="function")throw new TypeError(b);return y=f(y)||0,u(p)&&($=!!p.leading,H="maxWait"in p,I=H?D(f(p.maxWait)||0,y):I,T="trailing"in p?!!p.trailing:T),_.cancel=st,_.flush=Z,_}function l(s,y,p){var x=!0,R=!0;if(typeof s!="function")throw new TypeError(b);return u(p)&&(x="leading"in p?!!p.leading:x,R="trailing"in p?!!p.trailing:R),i(s,y,{leading:x,maxWait:y,trailing:R})}function u(s){var y=typeof s>"u"?"undefined":a(s);return!!s&&(y=="object"||y=="function")}function v(s){return!!s&&(typeof s>"u"?"undefined":a(s))=="object"}function c(s){return(typeof s>"u"?"undefined":a(s))=="symbol"||v(s)&&w.call(s)==h}function f(s){if(typeof s=="number")return s;if(c(s))return m;if(u(s)){var y=typeof s.valueOf=="function"?s.valueOf():s;s=u(y)?y+"":y}if(typeof s!="string")return s===0?s:+s;s=s.replace(A,"");var p=B.test(s);return p||G.test(s)?J(s.slice(2),p?2:8):k.test(s)?m:+s}var a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},b="Expected a function",m=NaN,h="[object Symbol]",A=/^\s+|\s+$/g,k=/^[-+]0x[0-9a-f]+$/i,B=/^0b[01]+$/i,G=/^0o[0-7]+$/i,J=parseInt,Q=(typeof r>"u"?"undefined":a(r))=="object"&&r&&r.Object===Object&&r,U=(typeof self>"u"?"undefined":a(self))=="object"&&self&&self.Object===Object&&self,L=Q||U||Function("return this")(),V=Object.prototype,w=V.toString,D=Math.max,q=Math.min,d=function(){return L.Date.now()};n.exports=l}).call(o,function(){return this}())},function(n,o){(function(r){function i(d,s,y){function p(T){var g=_,O=M;return _=M=void 0,j=T,I=d.apply(O,g)}function x(T){return j=T,S=setTimeout(Y,s),C?p(T):I}function R(T){var g=T-E,O=T-j,F=s-g;return $?D(F,N-O):F}function z(T){var g=T-E,O=T-j;return E===void 0||g>=s||g<0||$&&O>=N}function Y(){var T=q();return z(T)?W(T):void(S=setTimeout(Y,R(T)))}function W(T){return S=void 0,H&&_?p(T):(_=M=void 0,I)}function nt(){S!==void 0&&clearTimeout(S),j=0,_=E=M=S=void 0}function st(){return S===void 0?I:W(q())}function Z(){var T=q(),g=z(T);if(_=arguments,M=this,E=T,g){if(S===void 0)return x(E);if($)return S=setTimeout(Y,s),p(E)}return S===void 0&&(S=setTimeout(Y,s)),I}var _,M,N,I,S,E,j=0,C=!1,$=!1,H=!0;if(typeof d!="function")throw new TypeError(a);return s=c(s)||0,l(y)&&(C=!!y.leading,$="maxWait"in y,N=$?w(c(y.maxWait)||0,s):N,H="trailing"in y?!!y.trailing:H),Z.cancel=nt,Z.flush=st,Z}function l(d){var s=typeof d>"u"?"undefined":f(d);return!!d&&(s=="object"||s=="function")}function u(d){return!!d&&(typeof d>"u"?"undefined":f(d))=="object"}function v(d){return(typeof d>"u"?"undefined":f(d))=="symbol"||u(d)&&V.call(d)==m}function c(d){if(typeof d=="number")return d;if(v(d))return b;if(l(d)){var s=typeof d.valueOf=="function"?d.valueOf():d;d=l(s)?s+"":s}if(typeof d!="string")return d===0?d:+d;d=d.replace(h,"");var y=k.test(d);return y||B.test(d)?G(d.slice(2),y?2:8):A.test(d)?b:+d}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},a="Expected a function",b=NaN,m="[object Symbol]",h=/^\s+|\s+$/g,A=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,B=/^0o[0-7]+$/i,G=parseInt,J=(typeof r>"u"?"undefined":f(r))=="object"&&r&&r.Object===Object&&r,Q=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,U=J||Q||Function("return this")(),L=Object.prototype,V=L.toString,w=Math.max,D=Math.min,q=function(){return U.Date.now()};n.exports=i}).call(o,function(){return this}())},function(n,o){function r(f){var a=void 0,b=void 0;for(a=0;a<f.length;a+=1)if(b=f[a],b.dataset&&b.dataset.aos||b.children&&r(b.children))return!0;return!1}function i(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function l(){return!!i()}function u(f,a){var b=window.document,m=i(),h=new m(v);c=a,h.observe(b.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function v(f){f&&f.forEach(function(a){var b=Array.prototype.slice.call(a.addedNodes),m=Array.prototype.slice.call(a.removedNodes),h=b.concat(m);if(r(h))return c()})}Object.defineProperty(o,"__esModule",{value:!0});var c=function(){};o.default={isSupported:l,ready:u}},function(n,o){function r(b,m){if(!(b instanceof m))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(o,"__esModule",{value:!0});var l=function(){function b(m,h){for(var A=0;A<h.length;A++){var k=h[A];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(m,k.key,k)}}return function(m,h,A){return h&&b(m.prototype,h),A&&b(m,A),m}}(),u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,v=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,f=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=function(){function b(){r(this,b)}return l(b,[{key:"phone",value:function(){var m=i();return!(!u.test(m)&&!v.test(m.substr(0,4)))}},{key:"mobile",value:function(){var m=i();return!(!c.test(m)&&!f.test(m.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),b}();o.default=new a},function(n,o){Object.defineProperty(o,"__esModule",{value:!0});var r=function(l,u,v){var c=l.node.getAttribute("data-aos-once");u>l.position?l.node.classList.add("aos-animate"):typeof c<"u"&&(c==="false"||!v&&c!=="true")&&l.node.classList.remove("aos-animate")},i=function(l,u){var v=window.pageYOffset,c=window.innerHeight;l.forEach(function(f,a){r(f,c+v,u)})};o.default=i},function(n,o,r){function i(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(o,"__esModule",{value:!0});var l=r(12),u=i(l),v=function(c,f){return c.forEach(function(a,b){a.node.classList.add("aos-init"),a.position=(0,u.default)(a.node,f.offset)}),c};o.default=v},function(n,o,r){function i(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(o,"__esModule",{value:!0});var l=r(13),u=i(l),v=function(c,f){var a=0,b=0,m=window.innerHeight,h={offset:c.getAttribute("data-aos-offset"),anchor:c.getAttribute("data-aos-anchor"),anchorPlacement:c.getAttribute("data-aos-anchor-placement")};switch(h.offset&&!isNaN(h.offset)&&(b=parseInt(h.offset)),h.anchor&&document.querySelectorAll(h.anchor)&&(c=document.querySelectorAll(h.anchor)[0]),a=(0,u.default)(c).top,h.anchorPlacement){case"top-bottom":break;case"center-bottom":a+=c.offsetHeight/2;break;case"bottom-bottom":a+=c.offsetHeight;break;case"top-center":a+=m/2;break;case"bottom-center":a+=m/2+c.offsetHeight;break;case"center-center":a+=m/2+c.offsetHeight/2;break;case"top-top":a+=m;break;case"bottom-top":a+=c.offsetHeight+m;break;case"center-top":a+=c.offsetHeight/2+m}return h.anchorPlacement||h.offset||isNaN(f)||(b=f),a+b};o.default=v},function(n,o){Object.defineProperty(o,"__esModule",{value:!0});var r=function(i){for(var l=0,u=0;i&&!isNaN(i.offsetLeft)&&!isNaN(i.offsetTop);)l+=i.offsetLeft-(i.tagName!="BODY"?i.scrollLeft:0),u+=i.offsetTop-(i.tagName!="BODY"?i.scrollTop:0),i=i.offsetParent;return{top:u,left:l}};o.default=r},function(n,o){Object.defineProperty(o,"__esModule",{value:!0});var r=function(i){return i=i||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(i,function(l){return{node:l}})};o.default=r}])})})(At);var qt=At.exports;const St=Ht(qt);function zt(){St.init()}document.addEventListener("DOMContentLoaded",zt);document.addEventListener("astro:page-load",()=>{St.refresh();const t=document.getElementById("loading-screen");t?(document.body.classList.add("body-hidden-scroll"),setTimeout(()=>{t.classList.add("hidden"),document.body.classList.remove("body-hidden-scroll")})):console.warn('Element with id "loading-screen" not found')});const K="data-astro-transition-persist";function Ct(t){for(const e of document.scripts)for(const n of t.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!e.src&&e.textContent===n.textContent||e.src&&e.type===n.type&&e.src===n.src)){n.dataset.astroExec="";break}}function $t(t){const e=document.documentElement,n=[...e.attributes].filter(({name:o})=>(e.removeAttribute(o),o.startsWith("data-astro-")));[...t.documentElement.attributes,...n].forEach(({name:o,value:r})=>e.setAttribute(o,r))}function Ft(t){for(const e of Array.from(document.head.children)){const n=Xt(e,t);n?n.remove():e.remove()}document.head.append(...t.head.children)}function Yt(t,e){e.replaceWith(t);for(const n of e.querySelectorAll(`[${K}]`)){const o=n.getAttribute(K),r=t.querySelector(`[${K}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&Bt(n)&&!Ut(n,r)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const Wt=()=>{const t=document.activeElement;if(t?.closest(`[${K}]`)){if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement){const e=t.selectionStart,n=t.selectionEnd;return()=>ct({activeElement:t,start:e,end:n})}return()=>ct({activeElement:t})}else return()=>ct({activeElement:null})},ct=({activeElement:t,start:e,end:n})=>{t&&(t.focus(),(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(typeof e=="number"&&(t.selectionStart=e),typeof n=="number"&&(t.selectionEnd=n)))},Xt=(t,e)=>{const n=t.getAttribute(K),o=n&&e.head.querySelector(`[${K}="${n}"]`);if(o)return o;if(t.matches("link[rel=stylesheet]")){const r=t.getAttribute("href");return e.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},Bt=t=>{const e=t.dataset.astroTransitionPersistProps;return e==null||e==="false"},Ut=(t,e)=>t.getAttribute("props")===e.getAttribute("props"),Vt=t=>{Ct(t),$t(t),Ft(t);const e=Wt();Yt(t.body,document.body),e()},Kt="astro:before-preparation",Gt="astro:after-preparation",Jt="astro:before-swap",Qt="astro:after-swap",Zt=t=>document.dispatchEvent(new Event(t));class xt extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(e,n,o,r,i,l,u,v,c,f){super(e,n),this.from=o,this.to=r,this.direction=i,this.navigationType=l,this.sourceElement=u,this.info=v,this.newDocument=c,this.signal=f,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class te extends xt{formData;loader;constructor(e,n,o,r,i,l,u,v,c,f){super(Kt,{cancelable:!0},e,n,o,r,i,l,u,v),this.formData=c,this.loader=f.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class ee extends xt{direction;viewTransition;swap;constructor(e,n){super(Jt,void 0,e.from,e.to,e.direction,e.navigationType,e.sourceElement,e.info,e.newDocument,e.signal),this.direction=e.direction,this.viewTransition=n,this.swap=()=>Vt(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function ne(t,e,n,o,r,i,l,u,v){const c=new te(t,e,n,o,r,i,window.document,l,u,v);return document.dispatchEvent(c)&&(await c.loader(),c.defaultPrevented||(Zt(Gt),c.navigationType!=="traverse"&&dt({scrollX,scrollY}))),c}function oe(t,e){const n=new ee(t,e);return document.dispatchEvent(n),n.swap(),n}const re=history.pushState.bind(history),ot=history.replaceState.bind(history),dt=t=>{history.state&&(history.scrollRestoration="manual",ot({...history.state,...t},""))},ft=!!document.startViewTransition,mt=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),Ot=(t,e)=>t.pathname===e.pathname&&t.search===e.search;let P,X,it;const Lt=t=>document.dispatchEvent(new Event(t)),jt=()=>Lt("astro:page-load"),ie=()=>{let t=document.createElement("div");t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.className="astro-route-announcer",document.body.append(t),setTimeout(()=>{let e=document.title||document.querySelector("h1")?.textContent||location.pathname;t.textContent=e},60)},ht="data-astro-transition-persist",vt="data-astro-transition",lt="data-astro-transition-fallback";let yt,tt=0;history.state?(tt=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):mt()&&(ot({index:tt,scrollX,scrollY},""),history.scrollRestoration="manual");async function ae(t,e){try{const n=await fetch(t,e),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function Mt(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function se(){let t=Promise.resolve();for(const e of Array.from(document.scripts)){if(e.dataset.astroExec==="")continue;const n=e.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=e.innerHTML;for(const r of e.attributes){if(r.name==="src"){const i=new Promise(l=>{o.onload=o.onerror=l});t=t.then(()=>i)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",e.replaceWith(o)}return t}const Pt=(t,e,n,o,r)=>{const i=Ot(e,t),l=document.title;document.title=o;let u=!1;if(t.href!==location.href&&!r)if(n.history==="replace"){const v=history.state;ot({...n.state,index:v.index,scrollX:v.scrollX,scrollY:v.scrollY},"",t.href)}else re({...n.state,index:++tt,scrollX:0,scrollY:0},"",t.href);if(document.title=l,it=t,i||(scrollTo({left:0,top:0,behavior:"instant"}),u=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(t.hash){history.scrollRestoration="auto";const v=history.state;location.href=t.href,history.state||(ot(v,""),i&&window.dispatchEvent(new PopStateEvent("popstate")))}else u||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function ce(t){const e=[];for(const n of t.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${ht}="${n.getAttribute(ht)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),e.push(new Promise(r=>{["load","error"].forEach(i=>o.addEventListener(i,r)),document.head.append(o)}))}return e}async function gt(t,e,n,o,r){async function i(v){function c(m){const h=m.effect;return!h||!(h instanceof KeyframeEffect)||!h.target?!1:window.getComputedStyle(h.target,h.pseudoElement).animationIterationCount==="infinite"}const f=document.getAnimations();document.documentElement.setAttribute(lt,v);const b=document.getAnimations().filter(m=>!f.includes(m)&&!c(m));return Promise.allSettled(b.map(m=>m.finished))}if(r==="animate"&&!n.transitionSkipped&&!t.signal.aborted)try{await i("old")}catch{}const l=document.title,u=oe(t,n.viewTransition);Pt(u.to,u.from,e,l,o),Lt(Qt),r==="animate"&&(!n.transitionSkipped&&!u.signal.aborted?i("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function le(){return P?.controller.abort(),P={controller:new AbortController}}async function Dt(t,e,n,o,r){const i=le();if(!mt()||location.origin!==n.origin){i===P&&(P=void 0),location.href=n.href;return}const l=r?"traverse":o.history==="replace"?"replace":"push";if(l!=="traverse"&&dt({scrollX,scrollY}),Ot(e,n)&&(t!=="back"&&n.hash||t==="back"&&e.hash)){Pt(n,e,o,document.title,r),i===P&&(P=void 0);return}const u=await ne(e,n,t,l,o.sourceElement,o.info,i.controller.signal,o.formData,v);if(u.defaultPrevented||u.signal.aborted){i===P&&(P=void 0),u.signal.aborted||(location.href=n.href);return}async function v(a){const b=a.to.href,m={signal:a.signal};if(a.formData){m.method="POST";const k=a.sourceElement instanceof HTMLFormElement?a.sourceElement:a.sourceElement instanceof HTMLElement&&"form"in a.sourceElement?a.sourceElement.form:a.sourceElement?.closest("form");m.body=k?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(a.formData):a.formData}const h=await ae(b,m);if(h===null){a.preventDefault();return}if(h.redirected){const k=new URL(h.redirected);if(k.origin!==a.to.origin){a.preventDefault();return}a.to=k}if(yt??=new DOMParser,a.newDocument=yt.parseFromString(h.html,h.mediaType),a.newDocument.querySelectorAll("noscript").forEach(k=>k.remove()),!a.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!a.formData){a.preventDefault();return}const A=ce(a.newDocument);A.length&&!a.signal.aborted&&await Promise.all(A)}async function c(){if(X&&X.viewTransition){try{X.viewTransition.skipTransition()}catch{}try{await X.viewTransition.updateCallbackDone}catch{}}return X={transitionSkipped:!1}}const f=await c();if(u.signal.aborted){i===P&&(P=void 0);return}if(document.documentElement.setAttribute(vt,u.direction),ft)f.viewTransition=document.startViewTransition(async()=>await gt(u,o,f,r));else{const a=(async()=>{await Promise.resolve(),await gt(u,o,f,r,Mt())})();f.viewTransition={updateCallbackDone:a,ready:a,finished:new Promise(b=>f.viewTransitionFinished=b),skipTransition:()=>{f.transitionSkipped=!0,document.documentElement.removeAttribute(lt)}}}f.viewTransition.updateCallbackDone.finally(async()=>{await se(),jt(),ie()}),f.viewTransition.finished.finally(()=>{f.viewTransition=void 0,f===X&&(X=void 0),i===P&&(P=void 0),document.documentElement.removeAttribute(vt),document.documentElement.removeAttribute(lt)});try{await f.viewTransition.updateCallbackDone}catch(a){const b=a;console.log("[astro]",b.name,b.message,b.stack)}}async function wt(t,e){await Dt("forward",it,new URL(t,location.href),e??{})}function ue(t){if(!mt()&&t.state){location.reload();return}if(t.state===null)return;const e=history.state,n=e.index,o=n>tt?"forward":"back";tt=n,Dt(o,it,new URL(location.href),{},e)}const Tt=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&dt({scrollX,scrollY})};{if(ft||Mt()!=="none")if(it=new URL(location.href),addEventListener("popstate",ue),addEventListener("load",jt),"onscrollend"in window)addEventListener("scrollend",Tt);else{let t,e,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(t),t=void 0;return}if(e===scrollY&&n===scrollX){clearInterval(t),t=void 0,Tt();return}else e=scrollY,n=scrollX};addEventListener("scroll",()=>{t===void 0&&(o=history.state.index,e=scrollY,n=scrollX,t=window.setInterval(r,50))},{passive:!0})}for(const t of document.scripts)t.dataset.astroExec=""}const Rt=new Set,rt=new WeakSet;let ut,_t,kt=!1;function de(t){kt||(kt=!0,ut??=t?.prefetchAll,_t??=t?.defaultStrategy??"hover",fe(),me(),pe(),he())}function fe(){for(const t of["touchstart","mousedown"])document.body.addEventListener(t,e=>{et(e.target,"tap")&&at(e.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function me(){let t;document.body.addEventListener("focusin",o=>{et(o.target,"hover")&&e(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),pt(()=>{for(const o of document.getElementsByTagName("a"))rt.has(o)||et(o,"hover")&&(rt.add(o),o.addEventListener("mouseenter",e,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function e(o){const r=o.target.href;t&&clearTimeout(t),t=setTimeout(()=>{at(r)},80)}function n(){t&&(clearTimeout(t),t=0)}}function pe(){let t;pt(()=>{for(const e of document.getElementsByTagName("a"))rt.has(e)||et(e,"viewport")&&(rt.add(e),t??=be(),t.observe(e))})}function be(){const t=new WeakMap;return new IntersectionObserver((e,n)=>{for(const o of e){const r=o.target,i=t.get(r);o.isIntersecting?(i&&clearTimeout(i),t.set(r,setTimeout(()=>{n.unobserve(r),t.delete(r),at(r.href)},300))):i&&(clearTimeout(i),t.delete(r))}})}function he(){pt(()=>{for(const t of document.getElementsByTagName("a"))et(t,"load")&&at(t.href)})}function at(t,e){t=t.replace(/#.*/,"");const n=e?.ignoreSlowConnection??!1;if(ve(t,n))if(Rt.add(t),document.createElement("link").relList?.supports?.("prefetch")&&e?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",t),document.head.append(o)}else fetch(t,{priority:"low"})}function ve(t,e){if(!navigator.onLine||!e&&Nt())return!1;try{const n=new URL(t,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!Rt.has(t)}catch{}return!1}function et(t,e){if(t?.tagName!=="A")return!1;const n=t.dataset.astroPrefetch;return n==="false"?!1:e==="tap"&&(n!=null||ut)&&Nt()?!0:n==null&&ut||n===""?e===_t:n===e}function Nt(){if("connection"in navigator){const t=navigator.connection;return t.saveData||/2g/.test(t.effectiveType)}return!1}function pt(t){t();let e=!1;document.addEventListener("astro:page-load",()=>{if(!e){e=!0;return}t()})}function ye(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function Et(t){return t.dataset.astroReload!==void 0}(ft||ye()!=="none")&&(document.addEventListener("click",t=>{let e=t.target;if(t.composed&&(e=t.composedPath()[0]),e instanceof Element&&(e=e.closest("a, area")),!(e instanceof HTMLAnchorElement)&&!(e instanceof SVGAElement)&&!(e instanceof HTMLAreaElement))return;const n=e instanceof HTMLElement?e.target:e.target.baseVal,o=e instanceof HTMLElement?e.href:e.href.baseVal,r=new URL(o,location.href).origin;Et(e)||e.hasAttribute("download")||!e.href||n&&n!=="_self"||r!==location.origin||t.button!==0||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented||(t.preventDefault(),wt(o,{history:e.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:e}))}),document.addEventListener("submit",t=>{let e=t.target;if(e.tagName!=="FORM"||t.defaultPrevented||Et(e))return;const n=e,o=t.submitter,r=new FormData(n,o),i=typeof n.action=="string"?n.action:n.getAttribute("action"),l=typeof n.method=="string"?n.method:n.getAttribute("method");let u=o?.getAttribute("formaction")??i??location.pathname;const v=o?.getAttribute("formmethod")??l??"get";if(v==="dialog"||location.origin!==new URL(u,location.href).origin)return;const c={sourceElement:o??n};if(v==="get"){const f=new URLSearchParams(r),a=new URL(u);a.search=f.toString(),u=a.toString()}else c.formData=r;t.preventDefault(),wt(u,c)}),de({prefetchAll:!0}));
