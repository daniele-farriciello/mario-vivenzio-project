;/*FB_PKG_DELIM*/

__d("React",["cr:1108857","cr:1294158"],(function(a,b,c,d,e,f){a=b("cr:1294158");e.exports=a}),null);
__d("mergeRefs",["recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function a(){for(var a=arguments.length,b=new Array(a),d=0;d<a;d++)b[d]=arguments[d];return function(a){b.forEach(function(b){if(b==null)return;if(typeof b==="function"){b(a);return}if(typeof b==="object"){b.current=a;return}c("recoverableViolation")("mergeRefs cannot handle Refs of type boolean, number or string, received ref "+String(b),"comet_ui")})}}g["default"]=a}),98);
__d("VisualCompletionConstants",[],(function(a,b,c,d,e,f){"use strict";a={ATTRIBUTE_NAME:"data-visualcompletion",HERO_TRACING_HOLD:"HeroTracing",HERO_LATE_PLACEHOLDER_DETECTION:"HeroLatePlaceholderDetection",INTERACTION_TRACING_HOLD:"InteractionTracing",IGNORE:"ignore",IGNORE_DYNAMIC:"ignore-dynamic",IGNORE_LATE_MUTATION:"ignore-late-mutation",LOADING_STATE:"loading-state",MEDIA_VC_IMAGE:"media-vc-image",CSS_IMG:"css-img"};f["default"]=a}),66);
__d("VisualCompletionAttributes",["VisualCompletionConstants"],(function(a,b,c,d,e,f,g){"use strict";var h;a={IGNORE:(a={},a[(h||(h=c("VisualCompletionConstants"))).ATTRIBUTE_NAME]=h.IGNORE,a),IGNORE_DYNAMIC:(b={},b[h.ATTRIBUTE_NAME]=h.IGNORE_DYNAMIC,b),IGNORE_LATE_MUTATION:(d={},d[h.ATTRIBUTE_NAME]=h.IGNORE_LATE_MUTATION,d),LOADING_STATE:(e={},e[h.ATTRIBUTE_NAME]=h.LOADING_STATE,e),MEDIA_VC_IMAGE:(f={},f[h.ATTRIBUTE_NAME]=h.MEDIA_VC_IMAGE,f),CSS_IMG:(c={},c[h.ATTRIBUTE_NAME]=h.CSS_IMG,c)};g["default"]=a}),98);
__d("DateConsts",[],(function(a,b,c,d,e,f){var g=1e3;c=60;d=60;e=24;var h=7,i=12,j=1e3,k=30.43,l=4.333,m=365.242,n=c*d,o=n*e,p=o*h,q=o*m,r=g*c,s=r*d,t=g*o,u=t*h,v=t*m,w={SUNDAY:0,MONDAY:1,TUESDAY:2,WEDNESDAY:3,THURSDAY:4,FRIDAY:5,SATURDAY:6};Object.freeze(w);function a(a,b){return new Date(a,b,0).getDate()}function b(){return Date.now()/g}var x={instantRange:{since:-864e10,until:864e10+1}};f.MS_PER_SEC=g;f.SEC_PER_MIN=c;f.MIN_PER_HOUR=d;f.HOUR_PER_DAY=e;f.DAYS_PER_WEEK=h;f.MONTHS_PER_YEAR=i;f.US_PER_MS=j;f.AVG_DAYS_PER_MONTH=k;f.AVG_WEEKS_PER_MONTH=l;f.AVG_DAYS_PER_YEAR=m;f.SEC_PER_HOUR=n;f.SEC_PER_DAY=o;f.SEC_PER_WEEK=p;f.SEC_PER_YEAR=q;f.MS_PER_MIN=r;f.MS_PER_HOUR=s;f.MS_PER_DAY=t;f.MS_PER_WEEK=u;f.MS_PER_YEAR=v;f.DAYS=w;f.getDaysInMonth=a;f.getCurrentTimeInSeconds=b;f["private"]=x}),66);
__d("HeroInteractionContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=function(){};c={consumeBootload:b,hold:function(){return""},logHeroRender:b,logMetadata:b,logPageletVC:b,logReactCommit:b,logReactPostCommit:b,logReactRender:b,pageletStack:[],registerPlaceholder:b,removePlaceholder:b,suspenseCallback:b,unhold:b};e=a.createContext(c);g.DEFAULT_CONTEXT_VALUE=c;g.Context=e}),98);
__d("HeroInteractionIDContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(null);g["default"]=b}),98);
__d("HeroComponent.react",["HeroInteractionContext","HeroInteractionIDContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||(h=d("react"));e=h;var i=e.useContext,j=e.useLayoutEffect;function a(a){var b=a.description,e=i(d("HeroInteractionContext").Context),f=i(c("HeroInteractionIDContext"));j(function(){f!=null&&e.logHeroRender(f,b,e.pageletStack)},[b,e,f]);return null}a.displayName="HeroComponent";f=b.memo(a);g["default"]=f}),98);
__d("HeroCurrentInteractionForLoggingContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({current:null});g["default"]=b}),98);
__d("HeroHoldTrigger.react",["HeroInteractionContext","HeroInteractionIDContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h;h||(h=d("react"));b=h;var i=b.useContext,j=b.useLayoutEffect;function a(a){var b=a.description,e=a.hold,f=i(d("HeroInteractionContext").Context),g=i(c("HeroInteractionIDContext"));j(function(){if(e&&g!=null){var a=f.hold(g,f.pageletStack,b);return function(){f.unhold(g,a)}}},[b,f,g,e]);return null}a.displayName=a.name+" [from "+f.id+"]";a.displayName="HeroHoldTrigger";g["default"]=a}),98);
__d("react-relay/relay-hooks/ProfilerContext",["react"],(function(a,b,c,d,e,f){"use strict";var g;a=g||b("react");c=a.createContext({wrapPrepareQueryResource:function(a){return a()}});e.exports=c}),null);
__d("RelayProfilerContext",["react-relay/relay-hooks/ProfilerContext"],(function(a,b,c,d,e,f,g){g["default"]=c("react-relay/relay-hooks/ProfilerContext")}),98);
__d("HeroInteractionContextPassthrough.react",["HeroCurrentInteractionForLoggingContext","HeroInteractionContext","HeroInteractionIDContext","RelayProfilerContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={current:null},k={consumeBootload:function(){},retainQuery:function(){},wrapPrepareQueryResource:function(a){return a()}};function a(a){var b=a.children;a=a.clear;a=a===void 0?!0:a;return!a?b:i.jsx(d("HeroInteractionContext").Context.Provider,{value:d("HeroInteractionContext").DEFAULT_CONTEXT_VALUE,children:i.jsx(c("HeroCurrentInteractionForLoggingContext").Provider,{value:j,children:i.jsx(c("HeroInteractionIDContext").Provider,{value:null,children:i.jsx(c("RelayProfilerContext").Provider,{value:k,children:b})})})})}a.displayName=a.name+" [from "+f.id+"]";a.displayName="HeroInteractionContextPassthrough";g["default"]=a}),98);
__d("HeroPendingPlaceholderTracker",[],(function(a,b,c,d,e,f){"use strict";var g=new Map();function a(a){g.has(a)||g.set(a,new Map())}function b(a,b,c,d,e){a=g.get(a);a&&a.set(b,{description:c,startTime:d,pageletStack:e})}function c(a){a=g.get(a);return a?Array.from(a.values()):[]}function d(a){g["delete"](a)}function e(a,b){a=g.get(a);a&&a["delete"](b)}function h(a){return g.has(a)}f.addInteraction=a;f.addPlaceholder=b;f.dump=c;f.removeInteraction=d;f.removePlaceholder=e;f.isInteractionActive=h}),66);
__d("HeroFallbackTracker.react",["HeroInteractionContext","HeroInteractionIDContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useContext,j=b.useLayoutEffect;function a(a){var b=a.uuid,e=i(d("HeroInteractionContext").Context),f=i(c("HeroInteractionIDContext"));j(function(){if(f!=null){e.registerPlaceholder(f,b,e.pageletStack);return function(){e.removePlaceholder(f,b)}}},[e,f,b]);return null}a.displayName="HeroFallbackTracker";g["default"]=a}),98);
__d("HeroPlaceholderUtils",["PromiseAnnotate"],(function(a,b,c,d,e,f,g){"use strict";var h,i=0;function a(){return String(i++)}function b(a){if(a!=null&&a.size>0)return Array.from(a).map(function(a){a=(h||(h=d("PromiseAnnotate"))).getDisplayName(a);if(a!=null)return a;else return"Promise"}).join(",");else return null}g.getSimpleUUID=a;g.createThenableDescription=b}),98);
__d("useStable",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useRef;function a(a){var b=i(null),c=b.current;if(c===null){a=a();b.current={value:a};return a}else return c.value}g["default"]=a}),98);
__d("HeroPlaceholder.react",["HeroFallbackTracker.react","HeroInteractionContext","HeroInteractionIDContext","HeroPlaceholderUtils","react","useStable"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useCallback,k=b.useContext,l=b.useLayoutEffect,m=b.useRef;e=function(a){a=a.children;return a};function n(a){var b=a.cb,c=m(!1);l(function(){c.current||(b(),c.current=!0)});return null}function a(a){var b=a.children,e=a.fallback,f=a.name,g=a.unstable_avoidThisFallback,h=a.unstable_onSuspense,o=k(d("HeroInteractionContext").Context),p=k(c("HeroInteractionIDContext")),q=c("useStable")(d("HeroPlaceholderUtils").getSimpleUUID),r=c("useStable")(d("HeroPlaceholderUtils").getSimpleUUID),s=m(!1);a=b;b=j(function(a){if(p!=null){var b;o.suspenseCallback(p,q,o.pageletStack,a,(b=f)!=null?b:"Unnamed Suspense")}if(h){a=(b=d("HeroPlaceholderUtils").createThenableDescription(a))!=null?b:"";h(a)}},[o,p,f,q,h]);l(function(){if(s.current===!1&&p!=null&&p!=null){o.hold(p,o.pageletStack,"Hydration",r,f);return function(){return o.unhold(p,r)}}},[o,p,f,r]);var t=function(){s.current=!0,p!=null&&o.unhold(p,r)};return i.jsxs(i.Suspense,{fallback:i.jsxs(i.Fragment,{children:[e,i.jsx(n,{cb:t}),i.jsx(c("HeroFallbackTracker.react"),{uuid:q})]}),suspenseCallback:b,unstable_avoidThisFallback:g,children:[i.jsx(n,{cb:t}),a]})}a.displayName=a.name+" [from "+f.id+"]";a.displayName="HeroPlaceholder";g["default"]=a}),98);
__d("hero-tracing-placeholder",["HeroComponent.react","HeroCurrentInteractionForLoggingContext","HeroHoldTrigger.react","HeroInteractionContext","HeroInteractionContextPassthrough.react","HeroInteractionIDContext","HeroPendingPlaceholderTracker","HeroPlaceholder.react","HeroPlaceholderUtils"],(function(a,b,c,d,e,f,g){"use strict";g.HeroComponent=c("HeroComponent.react"),g.HeroHoldTrigger=c("HeroHoldTrigger.react"),g.HeroInteractionContext=d("HeroInteractionContext"),g.HeroInteractionContextPassthrough=c("HeroInteractionContextPassthrough.react"),g.HeroInteractionIDContext=c("HeroInteractionIDContext"),g.HeroCurrentInteractionForLoggingContext=c("HeroCurrentInteractionForLoggingContext"),g.HeroPendingPlaceholderTracker=d("HeroPendingPlaceholderTracker"),g.HeroPlaceholder=c("HeroPlaceholder.react"),g.HeroPlaceholderUtils=d("HeroPlaceholderUtils")}),98);
__d("asyncToGeneratorRuntime",["Promise"],(function(a,b,c,d,e,f){"use strict";var g;function h(a,c,d,e,f,h,i){try{var j=a[h](i),k=j.value}catch(a){d(a);return}j.done?c(k):(g||(g=b("Promise"))).resolve(k).then(e,f)}function a(a){return function(){var c=this,d=arguments;return new(g||(g=b("Promise")))(function(b,e){var f=a.apply(c,d);function g(a){h(f,b,e,g,i,"next",a)}function i(a){h(f,b,e,g,i,"throw",a)}g(void 0)})}}f.asyncToGenerator=a}),66);
__d("regeneratorRuntime",["Promise"],(function(a,b,c,d,e,f){"use strict";var g,h=Object.prototype.hasOwnProperty,i=typeof Symbol==="function"&&(typeof Symbol==="function"?Symbol.iterator:"@@iterator")||"@@iterator",j=e.exports;function k(a,b,c,d){b=Object.create((b||r).prototype);d=new A(d||[]);b._invoke=x(a,c,d);return b}j.wrap=k;function l(a,b,c){try{return{type:"normal",arg:a.call(b,c)}}catch(a){return{type:"throw",arg:a}}}var m="suspendedStart",n="suspendedYield",o="executing",p="completed",q={};function r(){}function s(){}function t(){}var u=t.prototype=r.prototype;s.prototype=u.constructor=t;t.constructor=s;s.displayName="GeneratorFunction";function a(a){["next","throw","return"].forEach(function(b){a[b]=function(a){return this._invoke(b,a)}})}j.isGeneratorFunction=function(a){a=typeof a==="function"&&a.constructor;return a?a===s||(a.displayName||a.name)==="GeneratorFunction":!1};j.mark=function(a){Object.setPrototypeOf?Object.setPrototypeOf(a,t):Object.assign(a,t);a.prototype=Object.create(u);return a};j.awrap=function(a){return new v(a)};function v(a){this.arg=a}function w(a){function c(c,f){var h=a[c](f);c=h.value;return c instanceof v?(g||(g=b("Promise"))).resolve(c.arg).then(d,e):(g||(g=b("Promise"))).resolve(c).then(function(a){h.value=a;return h})}typeof process==="object"&&process.domain&&(c=process.domain.bind(c));var d=c.bind(a,"next"),e=c.bind(a,"throw");c.bind(a,"return");var f;function h(a,d){var e=f?f.then(function(){return c(a,d)}):new(g||(g=b("Promise")))(function(b){b(c(a,d))});f=e["catch"](function(a){});return e}this._invoke=h}a(w.prototype);j.async=function(a,b,c,d){var e=new w(k(a,b,c,d));return j.isGeneratorFunction(b)?e:e.next().then(function(a){return a.done?a.value:e.next()})};function x(a,b,c){var d=m;return function(e,f){if(d===o)throw new Error("Generator is already running");if(d===p){if(e==="throw")throw f;return C()}while(!0){var g=c.delegate;if(g){if(e==="return"||e==="throw"&&g.iterator[e]===void 0){c.delegate=null;var h=g.iterator["return"];if(h){h=l(h,g.iterator,f);if(h.type==="throw"){e="throw";f=h.arg;continue}}if(e==="return")continue}h=l(g.iterator[e],g.iterator,f);if(h.type==="throw"){c.delegate=null;e="throw";f=h.arg;continue}e="next";f=void 0;var i=h.arg;if(i.done)c[g.resultName]=i.value,c.next=g.nextLoc;else{d=n;return i}c.delegate=null}if(e==="next")d===n?c.sent=f:c.sent=void 0;else if(e==="throw"){if(d===m){d=p;throw f}c.dispatchException(f)&&(e="next",f=void 0)}else e==="return"&&c.abrupt("return",f);d=o;h=l(a,b,c);if(h.type==="normal"){d=c.done?p:n;var i={value:h.arg,done:c.done};if(h.arg===q)c.delegate&&e==="next"&&(f=void 0);else return i}else h.type==="throw"&&(d=p,e="throw",f=h.arg)}}}a(u);u[i]=function(){return this};u.toString=function(){return"[object Generator]"};function y(a){var b={tryLoc:a[0]};1 in a&&(b.catchLoc=a[1]);2 in a&&(b.finallyLoc=a[2],b.afterLoc=a[3]);this.tryEntries.push(b)}function z(a){var b=a.completion||{};b.type="normal";delete b.arg;a.completion=b}function A(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(y,this),this.reset(!0)}j.keys=function(a){var b=[];for(var c in a)b.push(c);b.reverse();return function c(){while(b.length){var d=b.pop();if(d in a){c.value=d;c.done=!1;return c}}c.done=!0;return c}};function B(a){if(a){var b=a[i];if(b)return b.call(a);if(typeof a.next==="function")return a;if(!isNaN(a.length)){var c=-1;b=function b(){while(++c<a.length)if(h.call(a,c)){b.value=a[c];b.done=!1;return b}b.value=void 0;b.done=!0;return b};return b.next=b}}return{next:C}}j.values=B;function C(){return{value:void 0,done:!0}}A.prototype={constructor:A,reset:function(a){this.prev=0;this.next=0;this.sent=void 0;this.done=!1;this.delegate=null;this.tryEntries.forEach(z);if(!a)for(a in this)a.charAt(0)==="t"&&h.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=void 0)},stop:function(){this.done=!0;var a=this.tryEntries[0];a=a.completion;if(a.type==="throw")throw a.arg;return this.rval},dispatchException:function(a){if(this.done)throw a;var b=this;function c(c,d){f.type="throw";f.arg=a;b.next=c;return!!d}for(var d=this.tryEntries.length-1;d>=0;--d){var e=this.tryEntries[d],f=e.completion;if(e.tryLoc==="root")return c("end");if(e.tryLoc<=this.prev){var g=h.call(e,"catchLoc"),i=h.call(e,"finallyLoc");if(g&&i){if(this.prev<e.catchLoc)return c(e.catchLoc,!0);else if(this.prev<e.finallyLoc)return c(e.finallyLoc)}else if(g){if(this.prev<e.catchLoc)return c(e.catchLoc,!0)}else if(i){if(this.prev<e.finallyLoc)return c(e.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(a,b){for(var c=this.tryEntries.length-1;c>=0;--c){var d=this.tryEntries[c];if(d.tryLoc<=this.prev&&h.call(d,"finallyLoc")&&this.prev<d.finallyLoc){var e=d;break}}e&&(a==="break"||a==="continue")&&e.tryLoc<=b&&b<=e.finallyLoc&&(e=null);d=e?e.completion:{};d.type=a;d.arg=b;e?this.next=e.finallyLoc:this.complete(d);return q},complete:function(a,b){if(a.type==="throw")throw a.arg;a.type==="break"||a.type==="continue"?this.next=a.arg:a.type==="return"?(this.rval=a.arg,this.next="end"):a.type==="normal"&&b&&(this.next=b)},finish:function(a){for(var b=this.tryEntries.length-1;b>=0;--b){var c=this.tryEntries[b];if(c.finallyLoc===a){this.complete(c.completion,c.afterLoc);z(c);return q}}},"catch":function(a){for(var b=this.tryEntries.length-1;b>=0;--b){var c=this.tryEntries[b];if(c.tryLoc===a){var d=c.completion;if(d.type==="throw"){var e=d.arg;z(c)}return e}}throw new Error("illegal catch attempt")},delegateYield:function(a,b,c){this.delegate={iterator:B(a),resultName:b,nextLoc:c};return q}}}),null);
__d("isNode",[],(function(a,b,c,d,e,f){function a(a){var b;b=a!=null?(b=a.ownerDocument)!=null?b:a:document;b=(b=b.defaultView)!=null?b:window;return!!(a!=null&&(typeof b.Node==="function"?a instanceof b.Node:typeof a==="object"&&typeof a.nodeType==="number"&&typeof a.nodeName==="string"))}f["default"]=a}),66);
__d("isTextNode",["isNode"],(function(a,b,c,d,e,f,g){function a(a){return c("isNode")(a)&&a.nodeType==3}g["default"]=a}),98);
__d("containsNode",["isTextNode"],(function(a,b,c,d,e,f,g){function h(a,b){if(!a||!b)return!1;else if(a===b)return!0;else if(c("isTextNode")(a))return!1;else if(c("isTextNode")(b))return h(a,b.parentNode);else if("contains"in a)return a.contains(b);else if(a.compareDocumentPosition)return!!(a.compareDocumentPosition(b)&16);else return!1}g["default"]=h}),98);
__d("normalizeBoundingClientRect",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){a=a.ownerDocument.documentElement;var c=a?a.clientLeft:0;a=a?a.clientTop:0;var d=Math.round(b.left)-c;c=Math.round(b.right)-c;var e=Math.round(b.top)-a;b=Math.round(b.bottom)-a;return{left:d,right:c,top:e,bottom:b,width:c-d,height:b-e}}f["default"]=a}),66);
__d("getElementRect",["containsNode","normalizeBoundingClientRect"],(function(a,b,c,d,e,f,g){function a(a){var b;b=a==null?void 0:(b=a.ownerDocument)==null?void 0:b.documentElement;return!a||!("getBoundingClientRect"in a)||!c("containsNode")(b,a)?{left:0,right:0,top:0,bottom:0,width:0,height:0}:c("normalizeBoundingClientRect")(a,a.getBoundingClientRect())}g["default"]=a}),98);
__d("throttle",["TimeSlice","TimeSliceInteractionSV","setTimeout","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){function a(a,b,d){return h(a,b,d,c("setTimeout"),!1)}Object.assign(a,{acrossTransitions:function(a,b,d){return h(a,b,d,c("setTimeoutAcrossTransitions"),!1)},withBlocking:function(a,b,d){return h(a,b,d,c("setTimeout"),!0)},acrossTransitionsWithBlocking:function(a,b,d){return h(a,b,d,c("setTimeoutAcrossTransitions"),!0)}});function h(a,b,d,e,f){var g=b==null?100:b,h,i=null,j=0,k=null,l=[],m=c("TimeSlice").guard(function(){j=Date.now();if(i){var b=function(b){a.apply(h,b)}.bind(null,i),c=l.length;while(--c>=0)b=l[c].bind(null,b);l=[];b();i=null;k=e(m,g)}else k=null},"throttle_"+g+"_ms",{propagationType:c("TimeSlice").PropagationType.EXECUTION,registerCallStack:!0});m.__SMmeta=a.__SMmeta;return function(){c("TimeSliceInteractionSV").ref_counting_fix&&l.push(c("TimeSlice").getGuardedContinuation("throttleWithContinuation"));for(var a=arguments.length,b=new Array(a),n=0;n<a;n++)b[n]=arguments[n];i=b;h=this;d!==void 0&&(h=d);(k===null||Date.now()-j>g)&&(f===!0?m():k=e(m,0))}}b=a;g["default"]=b}),98);
/**
 * License: https://www.facebook.com/legal/license/2v2plzJQoTQ/
 */
__d("IntersectionObserverFallback",["FBLogger","TimeSlice","containsNode","getElementRect","performanceNow","setInterval","throttle"],(function(a,b,c,d,e,f){"use strict";var g,h=document.documentElement,i=[];function j(a,b){var c=Math.max(a.top,b.top),d=Math.min(a.bottom,b.bottom),e=Math.max(a.left,b.left);a=Math.min(a.right,b.right);b=a-e;var f=d-c;return b>=0&&f>=0?{top:c,bottom:d,left:e,right:a,width:b,height:f}:void 0}function k(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}var l=function(a){this.time=a.time;this.target=a.target;this.rootBounds=a.rootBounds;this.boundingClientRect=a.boundingClientRect;this.intersectionRect=a.intersectionRect||k();this.isIntersecting=!!a.intersectionRect;a=this.boundingClientRect;a=a.width*a.height;var b=this.intersectionRect.width*this.intersectionRect.height;a?this.intersectionRatio=Number((b/a).toFixed(4)):this.intersectionRatio=this.isIntersecting?1:0};a=function(){function a(a,c){var d=this;this.THROTTLE_TIMEOUT=100;this.POLL_INTERVAL=null;this.$12=b("TimeSlice").guard(b("throttle")(function(){var a=d.$14(),c=a?d.$15():k();d.$6.forEach(function(e){var f=e.element,h=b("getElementRect")(f),i=d.$16(f),j=e.entry,k=a&&i&&!d.$2&&d.$17(f,c);e.entry=new l({intersectionRect:k,target:f,time:(g||(g=b("performanceNow")))(),boundingClientRect:h,rootBounds:c});k=e.entry;!j?d.$7.push(k):a&&i?d.$18(j,k)&&d.$7.push(k):j&&j.isIntersecting&&d.$7.push(k)});d.$7.length&&d.$1(d.takeRecords(),d)},this.THROTTLE_TIMEOUT),"IntersectionObserverFallback: checkForIntersections");this.$2=!1;try{}catch(a){this.$2=!0}c=(c=c)!=null?c:{};this.$1=a;this.$4=!1;this.$6=[];this.$7=[];this.$8=this.$9(c.rootMargin);this.thresholds=this.$10(c.threshold);this.root=(a=c.root)!=null?a:null;this.rootMargin=this.$8.map(function(a){return a.value+a.unit}).join(" ")}var c=a.prototype;c.$10=function(a){a=(a=a)!=null?a:[0];Array.isArray(a)||(a=[a]);return a.sort().filter(function(a,b,c){return a!==c[b-1]})};c.$9=function(a){a=a||"0px";a=a.split(/\s+/).map(function(a){a=/^(-?\d*\.?\d+)(px|%)$/.exec(a);return{value:parseFloat(a[1]),unit:a[2]}});a[1]=a[1]||a[0];a[2]=a[2]||a[0];a[3]=a[3]||a[1];return a};c.$11=function(){this.$4||(this.$4=!0,this.$12(),this.POLL_INTERVAL?this.$5=b("setInterval")(this.$12,this.POLL_INTERVAL):(window.addEventListener("resize",this.$12,!0),document.addEventListener("scroll",this.$12,!0),"MutationObserver"in window&&(this.$3=new MutationObserver(this.$12),this.$3.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))};c.$13=function(){this.$4&&(this.$4=!1,this.$5&&(clearInterval(this.$5),this.$5=void 0),window.removeEventListener("resize",this.$12,!0),document.removeEventListener("scroll",this.$12,!0),this.$3&&(this.$3.disconnect(),this.$3=void 0))};c.$17=function(a,c){var d=window.getComputedStyle(a);if(!d||d.display=="none")return void 0;d=b("getElementRect")(a);d=d;a=a.parentElement;var e=!1;while(!e){var f,g=null;f=((f=a)==null?void 0:f.nodeType)==1?window.getComputedStyle(a):{};if(f.display=="none")return void 0;a==this.root||a==document?(e=!0,g=c):a!=document.body&&a!=document.documentElement&&f.overflow!="visible"&&(g=b("getElementRect")(a));if(g){d=j(g,d);if(!d)break}a=a&&a.parentElement}return d};c.$15=function(){var a;if(this.root)a=b("getElementRect")(this.root);else{var c=document.documentElement,d=document.body,e=(c==null?void 0:c.clientWidth)||(d==null?void 0:d.clientWidth);c=(c==null?void 0:c.clientHeight)||(d==null?void 0:d.clientHeight);a={top:0,left:0,right:e,width:e,bottom:c,height:c}}return this.$19(a)};c.$19=function(a){var b=this.$8.map(function(b,c){return b.unit=="px"?b.value:b.value*(c%2?a.width:a.height)/100});b={top:a.top-b[0],right:a.right+b[1],bottom:a.bottom+b[2],left:a.left-b[3],width:0,height:0};b.width=b.right-b.left;b.height=b.bottom-b.top;return b};c.$18=function(a,b){a=a&&a.isIntersecting?a.intersectionRatio||0:-1;b=b.isIntersecting?b.intersectionRatio||0:-1;if(a===b)return!1;for(var c=0;c<this.thresholds.length;c++){var d=this.thresholds[c];if(d==a||d==b||d<a!==d<b)return!0}return!1};c.$14=function(){return!this.root||b("containsNode")(h,this.root)};c.$16=function(a){var c=this.root||h;return b("containsNode")(c,a)};c.$20=function(){i.indexOf(this)<0&&i.push(this)};c.$21=function(){var a=i.indexOf(this);a!=-1&&i.splice(a,1)};c.observe=function(a){if(!a){b("FBLogger")("io").warn("IntersectionObserverFallback target does not exist");return}if(this.$6.some(function(b){return b.element==a}))return;this.$20();this.$6.push({element:a,entry:null});this.$11();this.$12()};c.unobserve=function(a){this.$6=this.$6.filter(function(b){return b.element!=a}),this.$6.length||(this.$13(),this.$21())};c.disconnect=function(){this.$6=[],this.$13(),this.$21()};c.takeRecords=function(){var a=this.$7.slice();this.$7=[];return a};return a}();e.exports=a}),null);
__d("IntersectionObserver",["IntersectionObserverFallback"],(function(a,b,c,d,e,f,g){"use strict";a="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype;b=a?window.IntersectionObserver:c("IntersectionObserverFallback");g["default"]=b}),98);
__d("intersectionObserverEntryIsIntersecting",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.isIntersecting!=null?a.isIntersecting:a.intersectionRatio>0||a.intersectionRect&&(a.intersectionRect.height>0||a.intersectionRect.width>0)}f["default"]=a}),66);
__d("setTimeoutCometLoggingPri",["JSScheduler","setTimeoutCometInternals"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,b){for(var c=arguments.length,e=new Array(c>2?c-2:0),f=2;f<c;f++)e[f-2]=arguments[f];return d("setTimeoutCometInternals").setTimeoutAtPriority_DO_NOT_USE.apply(d("setTimeoutCometInternals"),[(h||(h=d("JSScheduler"))).priorities.unstable_Low,a,b].concat(e))}g["default"]=a}),98);
__d("warning",["WebDriverConfig","cr:1105154","cr:11202","cr:2682"],(function(a,b,c,d,e,f,g){a=b("cr:2682");c=a;g["default"]=c}),98);
__d("warningComet",["SiteData","cr:1072546","cr:1072547","cr:1072549","cr:983844","err","fb-error"],(function(a,b,c,d,e,f,g){function a(a,b){}b=a;c=b;g["default"]=c}),98);
__d("mapObject",[],(function(a,b,c,d,e,f){"use strict";function g(a,b,c){if(!a)return null;var d={};Object.keys(a).forEach(function(e){d[e]=b.call(c,a[e],e,a)});return d}function a(a,b,c){return g(a,b,c)}function b(a,b,c){return g(a,b,c)}function c(a,b,c){return g(a,b,c)}g.untyped=a;g.shape=b;g.self=c;f["default"]=g}),66);
__d("React.classic",["cr:1292365"],(function(a,b,c,d,e,f){e.exports=b("cr:1292365")}),null);
__d("ReactFeatureFlags",["gkx","qex"],(function(a,b,c,d,e,f,g){"use strict";var h;a=!1;b=!0;d=!1;e=!1;f=!1;var i=!0,j=(h=c("gkx"))("6361"),k=h("1401060"),l=h("1778302"),m=h("2257"),n=h("8003"),o=h("201"),p=!h("7518");c=c("qex")._("644")===!0;var q=h("1596063");h=h("1840809");var r=!1,s=!1;g.disableInputAttributeSyncing=a;g.enableSyncDefaultUpdates=b;g.enableDeferRootSchedulingToMicrotask=d;g.enableAsyncActions=e;g.alwaysThrottleRetries=f;g.enableDO_NOT_USE_disableStrictPassiveEffect=i;g.enableTrustedTypesIntegration=j;g.enableLegacyFBSupport=k;g.enableUseRefAccessWarning=l;g.enableUnifiedSyncLane=m;g.disableIEWorkarounds=n;g.enableCustomElementPropertySupport=o;g.diffInCommitPhase=p;g.enableLazyContextPropagation=c;g.enableSchedulingProfiler=q;g.enableProfilerNestedUpdateScheduledHook=h;g.enableTransitionTracing=r;g.disableSchedulerTimeoutInWorkLoop=s}),98);
__d("React-prod.classic",["ReactFeatureFlags"],(function(a,b,c,d,e,f){"use strict";var g=Symbol["for"]("react.element"),h=Symbol["for"]("react.portal"),i=Symbol["for"]("react.fragment"),j=Symbol["for"]("react.strict_mode"),k=Symbol["for"]("react.profiler"),l=Symbol["for"]("react.provider"),m=Symbol["for"]("react.context"),n=Symbol["for"]("react.forward_ref"),o=Symbol["for"]("react.suspense"),p=Symbol["for"]("react.suspense_list"),q=Symbol["for"]("react.memo"),r=Symbol["for"]("react.lazy"),s=Symbol["for"]("react.scope"),t=Symbol["for"]("react.debug_trace_mode"),u=Symbol["for"]("react.offscreen"),v=Symbol["for"]("react.legacy_hidden"),w=Symbol["for"]("react.cache"),x=Symbol["for"]("react.tracing_marker"),y=typeof Symbol==="function"?Symbol.iterator:"@@iterator";function z(a){if(null===a||"object"!==typeof a)return null;a=y&&a[y]||a["@@iterator"];return"function"===typeof a?a:null}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,C={};function a(a,b,c){this.props=a,this.context=b,this.refs=C,this.updater=c||A}a.prototype.isReactComponent={};a.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};a.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function c(){}c.prototype=a.prototype;function d(a,b,c){this.props=a,this.context=b,this.refs=C,this.updater=c||A}c=d.prototype=new c();c.constructor=d;B(c,a.prototype);c.isPureReactComponent=!0;var D=Array.isArray,E=b("ReactFeatureFlags").enableTransitionTracing,F=Object.prototype.hasOwnProperty,G={current:null},H={key:!0,ref:!0,__self:!0,__source:!0};function I(a,b,c){var d,e={},f=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(f=""+b.key),b)F.call(b,d)&&!Object.prototype.hasOwnProperty.call(H,d)&&(e[d]=b[d]);var i=arguments.length-2;if(1===i)e.children=c;else if(1<i){for(var j=Array(i),k=0;k<i;k++)j[k]=arguments[k+2];e.children=j}if(a&&a.defaultProps)for(d in i=a.defaultProps,i)void 0===e[d]&&(e[d]=i[d]);return{$$typeof:g,type:a,key:f,ref:h,props:e,_owner:G.current}}function J(a,b){return{$$typeof:g,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function K(a){return"object"===typeof a&&null!==a&&a.$$typeof===g}function L(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?L(""+a.key):b.toString(36)}function O(a,b,c,d,e){var f=typeof a;("undefined"===f||"boolean"===f)&&(a=null);var i=!1;if(null===a)i=!0;else switch(f){case"string":case"number":i=!0;break;case"object":switch(a.$$typeof){case g:case h:i=!0}}if(i)return i=a,e=e(i),a=""===d?"."+N(i,0):d,D(e)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(e,b,c,"",function(a){return a})):null!=e&&(K(e)&&(e=J(e,c+(!e.key||i&&i.key===e.key?"":(""+e.key).replace(M,"$&/")+"/")+a)),b.push(e)),1;i=0;d=""===d?".":d+":";if(D(a))for(var j=0;j<a.length;j++){f=a[j];var k=d+N(f,j);i+=O(f,b,c,k,e)}else if(k=z(a),"function"===typeof k)for(a=k.call(a),j=0;!(f=a.next()).done;)f=f.value,k=d+N(f,j++),i+=O(f,b,c,k,e);else if("object"===f)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return i}function P(a,b,c){if(null==a)return a;var d=[],e=0;O(a,d,"","",function(a){return b.call(c,a,e++)});return d}function Q(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){(0===a._status||-1===a._status)&&(a._status=1,a._result=b)},function(b){(0===a._status||-1===a._status)&&(a._status=2,a._result=b)});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result["default"];throw a._result}var R={current:null};function S(){return new WeakMap()}function T(){return{s:0,v:void 0,o:null,p:null}}var U={current:null},V={transition:null};c={ReactCurrentDispatcher:U,ReactCurrentCache:R,ReactCurrentBatchConfig:V,ReactCurrentOwner:G};var W=c.ReactCurrentOwner,X={key:!0,ref:!0,__self:!0,__source:!0};function e(a,b,c){var d={},e=null,f=null;void 0!==c&&(e=""+c);void 0!==b.key&&(e=""+b.key);void 0!==b.ref&&(f=b.ref);for(c in b)F.call(b,c)&&!Object.prototype.hasOwnProperty.call(X,c)&&(d[c]=b[c]);if(a&&a.defaultProps)for(c in b=a.defaultProps,b)void 0===d[c]&&(d[c]=b[c]);return{$$typeof:g,type:a,key:e,ref:f,props:d,_owner:W.current}}f.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!K(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};f.Component=a;f.Fragment=i;f.Profiler=k;f.PureComponent=d;f.StrictMode=j;f.Suspense=o;f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c;f.cache=function(a){return function(){var b=R.current;if(!b)return a.apply(null,arguments);var c=b.getCacheForType(S);b=c.get(a);void 0===b&&(b=T(),c.set(a,b));c=0;for(var d=arguments.length;c<d;c++){var e=arguments[c];if("function"===typeof e||"object"===typeof e&&null!==e){var f=b.o;null===f&&(b.o=f=new WeakMap());b=f.get(e);void 0===b&&(b=T(),f.set(e,b))}else f=b.p,null===f&&(b.p=f=new Map()),b=f.get(e),void 0===b&&(b=T(),f.set(e,b))}if(1===b.s)return b.v;if(2===b.s)throw b.v;try{var g=a.apply(null,arguments);c=b;c.s=1;return c.v=g}catch(a){throw g=b,g.s=2,g.v=a,a}}};f.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=B({},a.props),e=a.key,f=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(f=b.ref,h=G.current);void 0!==b.key&&(e=""+b.key);if(a.type&&a.type.defaultProps)var i=a.type.defaultProps;for(j in b)F.call(b,j)&&!Object.prototype.hasOwnProperty.call(H,j)&&(d[j]=void 0===b[j]&&void 0!==i?i[j]:b[j])}var j=arguments.length-2;if(1===j)d.children=c;else if(1<j){i=Array(j);for(var k=0;k<j;k++)i[k]=arguments[k+2];d.children=i}return{$$typeof:g,type:a.type,key:e,ref:f,props:d,_owner:h}};f.createContext=function(a){a={$$typeof:m,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:l,_context:a};return a.Consumer=a};f.createElement=I;f.createFactory=function(a){var b=I.bind(null,a);b.type=a;return b};f.createRef=function(){return{current:null}};f.experimental_useEffectEvent=function(a){return U.current.useEffectEvent(a)};f.forwardRef=function(a){return{$$typeof:n,render:a}};f.isValidElement=K;f.jsx=e;f.jsxDEV=void 0;f.jsxs=e;f.lazy=function(a){return{$$typeof:r,_payload:{_status:-1,_result:a},_init:Q}};f.memo=function(a,b){return{$$typeof:q,type:a,compare:void 0===b?null:b}};f.startTransition=function(a,b){var c=V.transition;V.transition={};E&&void 0!==b&&void 0!==b.name&&(V.transition.name=b.name,V.transition.startTime=-1);try{a()}finally{V.transition=c}};f.unstable_Activity=u;f.unstable_Cache=w;f.unstable_DebugTracingMode=t;f.unstable_LegacyHidden=v;f.unstable_Scope=s;f.unstable_SuspenseList=p;f.unstable_TracingMarker=x;f.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};f.unstable_getCacheForType=function(a){var b=R.current;return b?b.getCacheForType(a):a()};f.unstable_getCacheSignal=function(){var a=R.current;return a?a.getCacheSignal():(a=new AbortController(),a.abort(Error("This CacheSignal was requested outside React which means that it is immediately aborted.")),a.signal)};f.unstable_useCacheRefresh=function(){return U.current.useCacheRefresh()};f.unstable_useMemoCache=function(a){return U.current.useMemoCache(a)};f.use=function(a){return U.current.use(a)};f.useCallback=function(a,b){return U.current.useCallback(a,b)};f.useContext=function(a){return U.current.useContext(a)};f.useDebugValue=function(){};f.useDeferredValue=function(a,b){return U.current.useDeferredValue(a,b)};f.useEffect=function(a,b){return U.current.useEffect(a,b)};f.useId=function(){return U.current.useId()};f.useImperativeHandle=function(a,b,c){return U.current.useImperativeHandle(a,b,c)};f.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};f.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};f.useMemo=function(a,b){return U.current.useMemo(a,b)};f.useOptimistic=function(a,b){return U.current.useOptimistic(a,b)};f.useReducer=function(a,b,c){return U.current.useReducer(a,b,c)};f.useRef=function(a){return U.current.useRef(a)};f.useState=function(a){return U.current.useState(a)};f.useSyncExternalStore=function(a,b,c){return U.current.useSyncExternalStore(a,b,c)};f.useTransition=function(){return U.current.useTransition()};f.version="18.3.0-www-classic-685ed7fa"}),null);
__d("relay-runtime/util/withProvidedVariables",["areEqual","warning"],(function(a,b,c,d,e,f){"use strict";var g;b=typeof WeakMap==="function";var h=b?new WeakMap():new Map();function a(a,b){if(b!=null){var c={};Object.assign(c,a);Object.keys(b).forEach(function(a){var d=b[a].get,e=d();if(!h.has(d))h.set(d,e),c[a]=e;else{e=h.get(d);c[a]=e}});return c}else return a}a.tests_only_resetDebugCache=void 0;e.exports=a}),null);