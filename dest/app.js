/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);

/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed").remove()}var n=e(this),r=n.attr("data-target"),i;r||(r=n.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=e(r),t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=e.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.on(e.support.transition.end,s):s()};var r=e.fn.alert;e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");i||r.data("alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=r,this},e(document).on("click.alert.data-api",t,n.prototype.close)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";e+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[e]||this.options[e]),setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),s=typeof n=="object"&&n;i||r.data("button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.prototype={cycle:function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(t){var n=this.getActiveIndex(),r=this;if(t>this.$items.length-1||t<0)return;return this.sliding?this.$element.one("slid",function(){r.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",e(this.$items[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(t,n){var r=this.$element.find(".item.active"),i=n||r[t](),s=this.interval,o=t=="next"?"left":"right",u=t=="next"?"first":"last",a=this,f;this.sliding=!0,s&&this.pause(),i=i.length?i:this.$element.find(".item")[u](),f=e.Event("slide",{relatedTarget:i[0],direction:o});if(i.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var t=e(a.$indicators.children()[a.getActiveIndex()]);t&&t.addClass("active")}));if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(f);if(f.isDefaultPrevented())return;i.addClass(t),i[0].offsetWidth,r.addClass(o),i.addClass(o),this.$element.one(e.support.transition.end,function(){i.removeClass([t,o].join(" ")).addClass("active"),r.removeClass(["active",o].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger("slid")},0)})}else{this.$element.trigger(f);if(f.isDefaultPrevented())return;r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}};var n=e.fn.carousel;e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("carousel"),s=e.extend({},e.fn.carousel.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("carousel",i=new t(this,s)),typeof n=="number"?i.to(n):o?i[o]():s.interval&&i.pause().cycle()})},e.fn.carousel.defaults={interval:5e3,pause:"hover"},e.fn.carousel.Constructor=t,e.fn.carousel.noConflict=function(){return e.fn.carousel=n,this},e(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=e.extend({},i.data(),n.data()),o;i.carousel(s),(o=n.attr("data-slide-to"))&&i.data("carousel").pause().to(o).cycle(),t.preventDefault()})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning||this.$element.hasClass("in"))return;t=this.dimension(),n=e.camelCase(["scroll",t].join("-")),r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide"),i||r.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning||!this.$element.hasClass("in"))return;t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0)},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[e!==null?"addClass":"removeClass"]("collapse"),this},transition:function(t,n,r){var i=this,s=function(){n.type=="show"&&i.reset(),i.transitioning=0,i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=e.extend({},e.fn.collapse.defaults,r.data(),typeof n=="object"&&n);i||r.data("collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(i).collapse(s)})}(window.jQuery),!function(e){"use strict";function r(){e(t).each(function(){i(e(this)).removeClass("open")})}function i(t){var n=t.attr("data-target"),r;n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),r=n&&e(n);if(!r||!r.length)r=t.parent();return r}var t="[data-toggle=dropdown]",n=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(t){var n=e(this),s,o;if(n.is(".disabled, :disabled"))return;return s=i(n),o=s.hasClass("open"),r(),o||s.toggleClass("open"),n.focus(),!1},keydown:function(n){var r,s,o,u,a,f;if(!/(38|40|27)/.test(n.keyCode))return;r=e(this),n.preventDefault(),n.stopPropagation();if(r.is(".disabled, :disabled"))return;u=i(r),a=u.hasClass("open");if(!a||a&&n.keyCode==27)return n.which==27&&u.find(t).focus(),r.click();s=e("[role=menu] li:not(.divider):visible a",u);if(!s.length)return;f=s.index(s.filter(":focus")),n.keyCode==38&&f>0&&f--,n.keyCode==40&&f<s.length-1&&f++,~f||(f=0),s.eq(f).focus()}};var s=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var r=e(this),i=r.data("dropdown");i||r.data("dropdown",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.dropdown.Constructor=n,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=s,this},e(document).on("click.dropdown.data-api",r).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown-menu",function(e){e.stopPropagation()}).on("click.dropdown.data-api",t,n.prototype.toggle).on("keydown.dropdown.data-api",t+", [role=menu]",n.prototype.keydown)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault();var n=this;t=e.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]!==e.target&&!t.$element.has(e.target).length&&t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){t.which==27&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&r;this.$backdrop=e('<div class="modal-backdrop '+r+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!t)return;i?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t):t()):t&&t()}};var n=e.fn.modal;e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),s=e.extend({},e.fn.modal.defaults,r.data(),typeof n=="object"&&n);i||r.data("modal",i=new t(this,s)),typeof n=="string"?i[n]():s.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,s,o,u,a;this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.enabled=!0,o=this.options.trigger.split(" ");for(a=o.length;a--;)u=o[a],u=="click"?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):u!="manual"&&(i=u=="hover"?"mouseenter":"focus",s=u=="hover"?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n=e.fn[this.type].defaults,r={},i;this._options&&e.each(this._options,function(e,t){n[e]!=t&&(r[e]=t)},this),i=e(t.currentTarget)[this.type](r).data(this.type);if(!i.options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){i.hoverState=="in"&&i.show()},i.options.delay.show)},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out",this.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},show:function(){var t,n,r,i,s,o,u=e.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(u);if(u.isDefaultPrevented())return;t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s=typeof this.options.placement=="function"?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),n=this.getPosition(),r=t[0].offsetWidth,i=t[0].offsetHeight;switch(s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width}}this.applyPlacement(o,s),this.$element.trigger("shown")}},applyPlacement:function(e,t){var n=this.tip(),r=n[0].offsetWidth,i=n[0].offsetHeight,s,o,u,a;n.offset(e).addClass(t).addClass("in"),s=n[0].offsetWidth,o=n[0].offsetHeight,t=="top"&&o!=i&&(e.top=e.top+i-o,a=!0),t=="bottom"||t=="top"?(u=0,e.left<0&&(u=e.left*-2,e.left=0,n.offset(e),s=n[0].offsetWidth,o=n[0].offsetHeight),this.replaceArrow(u-r+s,s,"left")):this.replaceArrow(o-i,o,"top"),a&&n.offset(e)},replaceArrow:function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function i(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var t=this,n=this.tip(),r=e.Event("hide");this.$element.trigger(r);if(r.isDefaultPrevented())return;return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?i():n.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var n=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),s=typeof n=="object"&&n;i||r.data("tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;return e=(typeof n.content=="function"?n.content.call(t[0]):n.content)||t.attr("data-content"),e},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=e.fn.popover;e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("popover"),s=typeof n=="object"&&n;i||r.data("popover",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.fn.popover.noConflict=function(){return e.fn.popover=n,this}}(window.jQuery),!function(e){"use strict";function t(t,n){var r=e.proxy(this.process,this),i=e(t).is("body")?e(window):e(t),s;this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=i.on("scroll.scroll-spy.data-api",r),this.selector=(this.options.target||(s=e(t).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t=this,n;this.offsets=e([]),this.targets=e([]),n=this.$body.find(this.selector).map(function(){var n=e(this),r=n.data("target")||n.attr("href"),i=/^#\w/.test(r)&&e(r);return i&&i.length&&[[i.position().top+(!e.isWindow(t.$scrollElement.get(0))&&t.$scrollElement.scrollTop()),r]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},process:function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])},activate:function(t){var n,r;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),s=typeof n=="object"&&n;i||r.data("scrollspy",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery),!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;i=n.find(".active:last a")[0],o=e.Event("show",{relatedTarget:i}),t.trigger(o);if(o.isDefaultPrevented())return;s=e(r),this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o(),i.removeClass("in")}};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");i||r.data("tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=n,this},e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=e(this.options.menu),this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:t.top+t.height,left:t.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(t){var n;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(n=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,n?this.process(n):this)},process:function(t){var n=this;return t=e.grep(t,function(e){return n.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var t=[],n=[],r=[],i;while(i=e.shift())i.toLowerCase().indexOf(this.query.toLowerCase())?~i.indexOf(this.query)?n.push(i):r.push(i):t.push(i);return t.concat(n,r)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;return t=e(t).map(function(t,r){return t=e(n.options.item).attr("data-value",r),t.find("a").html(n.highlighter(r)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(t){var n=this.$menu.find(".active").removeClass("active"),r=n.next();r.length||(r=e(this.$menu.find("li")[0])),r.addClass("active")},prev:function(e){var t=this.$menu.find(".active").removeClass("active"),n=t.prev();n.length||(n=this.$menu.find("li").last()),n.addClass("active")},listen:function(){this.$element.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this)).on("mouseleave","li",e.proxy(this.mouseleave,this))},eventSupported:function(e){var t=e in this.$element;return t||(this.$element.setAttribute(e,"return;"),t=typeof this.$element[e]=="function"),t},move:function(e){if(!this.shown)return;switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()},keydown:function(t){this.suppressKeyPressRepeat=~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){if(this.suppressKeyPressRepeat)return;this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},focus:function(e){this.focused=!0},blur:function(e){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(e){e.stopPropagation(),e.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(t){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")},mouseleave:function(e){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=e.fn.typeahead;e.fn.typeahead=function(n){return this.each(function(){var r=e(this),i=r.data("typeahead"),s=typeof n=="object"&&n;i||r.data("typeahead",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e.fn.typeahead.noConflict=function(){return e.fn.typeahead=n,this},e(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var n=e(this);if(n.data("typeahead"))return;n.typeahead(n.data())})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)},this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var t=e(document).height(),n=this.$window.scrollTop(),r=this.$element.offset(),i=this.options.offset,s=i.bottom,o=i.top,u="affix affix-top affix-bottom",a;typeof i!="object"&&(s=o=i),typeof o=="function"&&(o=i.top()),typeof s=="function"&&(s=i.bottom()),a=this.unpin!=null&&n+this.unpin<=r.top?!1:s!=null&&r.top+this.$element.height()>=t-s?"bottom":o!=null&&n<=o?"top":!1;if(this.affixed===a)return;this.affixed=a,this.unpin=a=="bottom"?r.top-n:null,this.$element.removeClass(u).addClass("affix"+(a?"-"+a:""))};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("affix"),s=typeof n=="object"&&n;i||r.data("affix",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(window.jQuery);
/*!
 * jQuery blockUI plugin
 * Version 2.53 (01-NOV-2012)
 * @requires jQuery v1.3 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2012 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

;(function() {
"use strict";

	function setup($) {
		if (/^1\.(0|1|2)/.test($.fn.jquery)) {
			/*global alert:true */
			alert('blockUI requires jQuery v1.3 or later!  You are using v' + $.fn.jquery);
			return;
		}

		$.fn._fadeIn = $.fn.fadeIn;

		var noOp = $.noop || function() {};

		// this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
		// retarded userAgent strings on Vista)
		var msie = /MSIE/.test(navigator.userAgent);
		var ie6  = /MSIE 6.0/.test(navigator.userAgent);
		var mode = document.documentMode || 0;
		// var setExpr = msie && (($.browser.version < 8 && !mode) || mode < 8);
		var setExpr = $.isFunction( document.createElement('div').style.setExpression );

		// global $ methods for blocking/unblocking the entire page
		$.blockUI   = function(opts) { install(window, opts); };
		$.unblockUI = function(opts) { remove(window, opts); };

		// convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)
		$.growlUI = function(title, message, timeout, onClose) {
			var $m = $('<div class="growlUI"></div>');
			if (title) $m.append('<h1>'+title+'</h1>');
			if (message) $m.append('<h2>'+message+'</h2>');
			if (timeout === undefined) timeout = 3000;
			$.blockUI({
				message: $m, fadeIn: 700, fadeOut: 1000, centerY: false,
				timeout: timeout, showOverlay: false,
				onUnblock: onClose,
				css: $.blockUI.defaults.growlCSS
			});
		};

		// plugin method for blocking element content
		$.fn.block = function(opts) {
			var fullOpts = $.extend({}, $.blockUI.defaults, opts || {});
			this.each(function() {
				var $el = $(this);
				if (fullOpts.ignoreIfBlocked && $el.data('blockUI.isBlocked'))
					return;
				$el.unblock({ fadeOut: 0 });
			});

			return this.each(function() {
				if ($.css(this,'position') == 'static')
					this.style.position = 'relative';
				this.style.zoom = 1; // force 'hasLayout' in ie
				install(this, opts);
			});
		};

		// plugin method for unblocking element content
		$.fn.unblock = function(opts) {
			return this.each(function() {
				remove(this, opts);
			});
		};

		$.blockUI.version = 2.53; // 2nd generation blocking at no extra cost!

		// override these in your code to change the default behavior and style
		$.blockUI.defaults = {
			// message displayed when blocking (use null for no message)
			message:  '<h1>Please wait...</h1>',

			title: null,		// title string; only used when theme == true
			draggable: true,	// only used when theme == true (requires jquery-ui.js to be loaded)

			theme: false, // set to true to use with jQuery UI themes

			// styles for the message when blocking; if you wish to disable
			// these and use an external stylesheet then do this in your code:
			// $.blockUI.defaults.css = {};
			css: {
				padding:	0,
				margin:		0,
				width:		'30%',
				top:		'40%',
				left:		'35%',
				textAlign:	'center',
				color:		'#000',
				border:		'3px solid #aaa',
				backgroundColor:'#fff',
				cursor:		'wait'
			},

			// minimal style set used when themes are used
			themedCSS: {
				width:	'30%',
				top:	'40%',
				left:	'35%'
			},

			// styles for the overlay
			overlayCSS:  {
				backgroundColor:	'#000',
				opacity:				0.6,
				cursor:				'wait'
			},

			// style to replace wait cursor before unblocking to correct issue
			// of lingering wait cursor
			cursorReset: 'default',

			// styles applied when using $.growlUI
			growlCSS: {
				width:		'350px',
				top:		'10px',
				left:		'',
				right:		'10px',
				border:		'none',
				padding:	'5px',
				opacity:	0.6,
				cursor:		'default',
				color:		'#fff',
				backgroundColor: '#000',
				'-webkit-border-radius':'10px',
				'-moz-border-radius':	'10px',
				'border-radius':		'10px'
			},

			// IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
			// (hat tip to Jorge H. N. de Vasconcelos)
			/*jshint scripturl:true */
			iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

			// force usage of iframe in non-IE browsers (handy for blocking applets)
			forceIframe: false,

			// z-index for the blocking overlay
			baseZ: 1000,

			// set these to true to have the message automatically centered
			centerX: true, // <-- only effects element blocking (page block controlled via css above)
			centerY: true,

			// allow body element to be stetched in ie6; this makes blocking look better
			// on "short" pages.  disable if you wish to prevent changes to the body height
			allowBodyStretch: true,

			// enable if you want key and mouse events to be disabled for content that is blocked
			bindEvents: true,

			// be default blockUI will supress tab navigation from leaving blocking content
			// (if bindEvents is true)
			constrainTabKey: true,

			// fadeIn time in millis; set to 0 to disable fadeIn on block
			fadeIn:  200,

			// fadeOut time in millis; set to 0 to disable fadeOut on unblock
			fadeOut:  400,

			// time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
			timeout: 0,

			// disable if you don't want to show the overlay
			showOverlay: true,

			// if true, focus will be placed in the first available input field when
			// page blocking
			focusInput: true,

			// suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
			// no longer needed in 2012
			// applyPlatformOpacityRules: true,

			// callback method invoked when fadeIn has completed and blocking message is visible
			onBlock: null,

			// callback method invoked when unblocking has completed; the callback is
			// passed the element that has been unblocked (which is the window object for page
			// blocks) and the options that were passed to the unblock call:
			//	onUnblock(element, options)
			onUnblock: null,

			// callback method invoked when the overlay area is clicked.
			// setting this will turn the cursor to a pointer, otherwise cursor defined in overlayCss will be used.
			onOverlayClick: null,

			// don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
			quirksmodeOffsetHack: 4,

			// class name of the message block
			blockMsgClass: 'blockMsg',

			// if it is already blocked, then ignore it (don't unblock and reblock)
			ignoreIfBlocked: false
		};

		// private data and functions follow...

		var pageBlock = null;
		var pageBlockEls = [];

		function install(el, opts) {
			var css, themedCSS;
			var full = (el == window);
			var msg = (opts && opts.message !== undefined ? opts.message : undefined);
			opts = $.extend({}, $.blockUI.defaults, opts || {});

			if (opts.ignoreIfBlocked && $(el).data('blockUI.isBlocked'))
				return;

			opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
			css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
			if (opts.onOverlayClick)
				opts.overlayCSS.cursor = 'pointer';

			themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
			msg = msg === undefined ? opts.message : msg;

			// remove the current block (if there is one)
			if (full && pageBlock)
				remove(window, {fadeOut:0});

			// if an existing element is being used as the blocking content then we capture
			// its current place in the DOM (and current display style) so we can restore
			// it when we unblock
			if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
				var node = msg.jquery ? msg[0] : msg;
				var data = {};
				$(el).data('blockUI.history', data);
				data.el = node;
				data.parent = node.parentNode;
				data.display = node.style.display;
				data.position = node.style.position;
				if (data.parent)
					data.parent.removeChild(node);
			}

			$(el).data('blockUI.onUnblock', opts.onUnblock);
			var z = opts.baseZ;

			// blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
			// layer1 is the iframe layer which is used to supress bleed through of underlying content
			// layer2 is the overlay layer which has opacity and a wait cursor (by default)
			// layer3 is the message content that is displayed while blocking
			var lyr1, lyr2, lyr3, s;
			if (msie || opts.forceIframe)
				lyr1 = $('<iframe class="blockUI" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+opts.iframeSrc+'"></iframe>');
			else
				lyr1 = $('<div class="blockUI" style="display:none"></div>');

			if (opts.theme)
				lyr2 = $('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+ (z++) +';display:none"></div>');
			else
				lyr2 = $('<div class="blockUI blockOverlay" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');

			if (opts.theme && full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:fixed">';
				if ( opts.title ) {
					s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
				}
				s += '<div class="ui-widget-content ui-dialog-content"></div>';
				s += '</div>';
			}
			else if (opts.theme) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:absolute">';
				if ( opts.title ) {
					s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
				}  
				s += '<div class="ui-widget-content ui-dialog-content"></div>';
				s += '</div>';
			}
			else if (full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage" style="z-index:'+(z+10)+';display:none;position:fixed"></div>';
			}
			else {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement" style="z-index:'+(z+10)+';display:none;position:absolute"></div>';
			}
			lyr3 = $(s);

			// if we have a message, style it
			if (msg) {
				if (opts.theme) {
					lyr3.css(themedCSS);
					lyr3.addClass('ui-widget-content');
				}
				else
					lyr3.css(css);
			}

			// style the overlay
			if (!opts.theme /*&& (!opts.applyPlatformOpacityRules)*/)
				lyr2.css(opts.overlayCSS);
			lyr2.css('position', full ? 'fixed' : 'absolute');

			// make iframe layer transparent in IE
			if (msie || opts.forceIframe)
				lyr1.css('opacity',0.0);

			//$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);
			var layers = [lyr1,lyr2,lyr3], $par = full ? $('body') : $(el);
			$.each(layers, function() {
				this.appendTo($par);
			});

			if (opts.theme && opts.draggable && $.fn.draggable) {
				lyr3.draggable({
					handle: '.ui-dialog-titlebar',
					cancel: 'li'
				});
			}

			// ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)
			var expr = setExpr && (!$.support.boxModel || $('object,embed', full ? null : el).length > 0);
			if (ie6 || expr) {
				// give body 100% height
				if (full && opts.allowBodyStretch && $.support.boxModel)
					$('html,body').css('height','100%');

				// fix ie6 issue when blocked element has a border width
				if ((ie6 || !$.support.boxModel) && !full) {
					var t = sz(el,'borderTopWidth'), l = sz(el,'borderLeftWidth');
					var fixT = t ? '(0 - '+t+')' : 0;
					var fixL = l ? '(0 - '+l+')' : 0;
				}

				// simulate fixed position
				$.each(layers, function(i,o) {
					var s = o[0].style;
					s.position = 'absolute';
					if (i < 2) {
						if (full)
							s.setExpression('height','Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:'+opts.quirksmodeOffsetHack+') + "px"');
						else
							s.setExpression('height','this.parentNode.offsetHeight + "px"');
						if (full)
							s.setExpression('width','jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"');
						else
							s.setExpression('width','this.parentNode.offsetWidth + "px"');
						if (fixL) s.setExpression('left', fixL);
						if (fixT) s.setExpression('top', fixT);
					}
					else if (opts.centerY) {
						if (full) s.setExpression('top','(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
						s.marginTop = 0;
					}
					else if (!opts.centerY && full) {
						var top = (opts.css && opts.css.top) ? parseInt(opts.css.top, 10) : 0;
						var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + '+top+') + "px"';
						s.setExpression('top',expression);
					}
				});
			}

			// show the message
			if (msg) {
				if (opts.theme)
					lyr3.find('.ui-widget-content').append(msg);
				else
					lyr3.append(msg);
				if (msg.jquery || msg.nodeType)
					$(msg).show();
			}

			if ((msie || opts.forceIframe) && opts.showOverlay)
				lyr1.show(); // opacity is zero
			if (opts.fadeIn) {
				var cb = opts.onBlock ? opts.onBlock : noOp;
				var cb1 = (opts.showOverlay && !msg) ? cb : noOp;
				var cb2 = msg ? cb : noOp;
				if (opts.showOverlay)
					lyr2._fadeIn(opts.fadeIn, cb1);
				if (msg)
					lyr3._fadeIn(opts.fadeIn, cb2);
			}
			else {
				if (opts.showOverlay)
					lyr2.show();
				if (msg)
					lyr3.show();
				if (opts.onBlock)
					opts.onBlock();
			}

			// bind key and mouse events
			bind(1, el, opts);

			if (full) {
				pageBlock = lyr3[0];
				pageBlockEls = $(':input:enabled:visible',pageBlock);
				if (opts.focusInput)
					setTimeout(focus, 20);
			}
			else
				center(lyr3[0], opts.centerX, opts.centerY);

			if (opts.timeout) {
				// auto-unblock
				var to = setTimeout(function() {
					if (full)
						$.unblockUI(opts);
					else
						$(el).unblock(opts);
				}, opts.timeout);
				$(el).data('blockUI.timeout', to);
			}
		}

		// remove the block
		function remove(el, opts) {
			var full = (el == window);
			var $el = $(el);
			var data = $el.data('blockUI.history');
			var to = $el.data('blockUI.timeout');
			if (to) {
				clearTimeout(to);
				$el.removeData('blockUI.timeout');
			}
			opts = $.extend({}, $.blockUI.defaults, opts || {});
			bind(0, el, opts); // unbind events

			if (opts.onUnblock === null) {
				opts.onUnblock = $el.data('blockUI.onUnblock');
				$el.removeData('blockUI.onUnblock');
			}

			var els;
			if (full) // crazy selector to handle odd field errors in ie6/7
				els = $('body').children().filter('.blockUI').add('body > .blockUI');
			else
				els = $el.find('>.blockUI');

			// fix cursor issue
			if ( opts.cursorReset ) {
				if ( els.length > 1 )
					els[1].style.cursor = opts.cursorReset;
				if ( els.length > 2 )
					els[2].style.cursor = opts.cursorReset;
			}

			if (full)
				pageBlock = pageBlockEls = null;

			if (opts.fadeOut) {
				els.fadeOut(opts.fadeOut);
				setTimeout(function() { reset(els,data,opts,el); }, opts.fadeOut);
			}
			else
				reset(els, data, opts, el);
		}

		// move blocking element back into the DOM where it started
		function reset(els,data,opts,el) {
			els.each(function(i,o) {
				// remove via DOM calls so we don't lose event handlers
				if (this.parentNode)
					this.parentNode.removeChild(this);
			});

			if (data && data.el) {
				data.el.style.display = data.display;
				data.el.style.position = data.position;
				if (data.parent)
					data.parent.appendChild(data.el);
				$(el).removeData('blockUI.history');
			}

			if (typeof opts.onUnblock == 'function')
				opts.onUnblock(el,opts);

			// fix issue in Safari 6 where block artifacts remain until reflow
			var body = $(document.body), w = body.width(), cssW = body[0].style.width;
			body.width(w-1).width(w);
			body[0].style.width = cssW;
		}

		// bind/unbind the handler
		function bind(b, el, opts) {
			var full = el == window, $el = $(el);

			// don't bother unbinding if there is nothing to unbind
			if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked')))
				return;

			$el.data('blockUI.isBlocked', b);

			// don't bind events when overlay is not in use or if bindEvents is false
			if (!opts.bindEvents || (b && !opts.showOverlay))
				return;

			// bind anchors and inputs for mouse and key events
			var events = 'mousedown mouseup keydown keypress touchstart touchend touchmove';
			if (b)
				$(document).bind(events, opts, handler);
			else
				$(document).unbind(events, handler);

		// former impl...
		//		var $e = $('a,:input');
		//		b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
		}

		// event handler to suppress keyboard/mouse events when blocking
		function handler(e) {
			// allow tab navigation (conditionally)
			if (e.keyCode && e.keyCode == 9) {
				if (pageBlock && e.data.constrainTabKey) {
					var els = pageBlockEls;
					var fwd = !e.shiftKey && e.target === els[els.length-1];
					var back = e.shiftKey && e.target === els[0];
					if (fwd || back) {
						setTimeout(function(){focus(back);},10);
						return false;
					}
				}
			}
			var opts = e.data;
			var target = $(e.target);
			if (target.hasClass('blockOverlay') && opts.onOverlayClick)
				opts.onOverlayClick();

			// allow events within the message content
			if (target.parents('div.' + opts.blockMsgClass).length > 0)
				return true;

			// allow events for content that is not being blocked
			return target.parents().children().filter('div.blockUI').length === 0;
		}

		function focus(back) {
			if (!pageBlockEls)
				return;
			var e = pageBlockEls[back===true ? pageBlockEls.length-1 : 0];
			if (e)
				e.focus();
		}

		function center(el, x, y) {
			var p = el.parentNode, s = el.style;
			var l = ((p.offsetWidth - el.offsetWidth)/2) - sz(p,'borderLeftWidth');
			var t = ((p.offsetHeight - el.offsetHeight)/2) - sz(p,'borderTopWidth');
			if (x) s.left = l > 0 ? (l+'px') : '0';
			if (y) s.top  = t > 0 ? (t+'px') : '0';
		}

		function sz(el, p) {
			return parseInt($.css(el,p),10)||0;
		}

	}


	/*global define:true */
	if (typeof define === 'function' && define.amd && define.amd.jQuery) {
		define(['jquery'], setup);
	} else {
		setup(jQuery);
	}

})();
(function(a){a.uniform={options:{selectClass:"selector",radioClass:"radio",checkboxClass:"checker",fileClass:"uploader",filenameClass:"filename",fileBtnClass:"action",fileDefaultText:"No file selected",fileBtnText:"Choose File",checkedClass:"checked",focusClass:"focus",disabledClass:"disabled",buttonClass:"button",activeClass:"active",hoverClass:"hover",useID:true,idPrefix:"uniform",resetSelector:false,autoHide:true},elements:[]};if(a.browser.msie&&a.browser.version<7){a.support.selectOpacity=false}else{a.support.selectOpacity=true}a.fn.uniform=function(k){k=a.extend(a.uniform.options,k);var d=this;if(k.resetSelector!=false){a(k.resetSelector).mouseup(function(){function l(){a.uniform.update(d)}setTimeout(l,10)})}function j(l){$el=a(l);$el.addClass($el.attr("type"));b(l)}function g(l){a(l).addClass("uniform");b(l)}function i(o){var m=a(o);var p=a("<div>"),l=a("<span>");p.addClass(k.buttonClass);if(k.useID&&m.attr("id")!=""){p.attr("id",k.idPrefix+"-"+m.attr("id"))}var n;if(m.is("a")||m.is("button")){n=m.text()}else{if(m.is(":submit")||m.is(":reset")||m.is("input[type=button]")){n=m.attr("value")}}n=n==""?m.is(":reset")?"Reset":"Submit":n;l.html(n);m.css("opacity",0);m.wrap(p);m.wrap(l);p=m.closest("div");l=m.closest("span");if(m.is(":disabled")){p.addClass(k.disabledClass)}p.bind({"mouseenter.uniform":function(){p.addClass(k.hoverClass)},"mouseleave.uniform":function(){p.removeClass(k.hoverClass);p.removeClass(k.activeClass)},"mousedown.uniform touchbegin.uniform":function(){p.addClass(k.activeClass)},"mouseup.uniform touchend.uniform":function(){p.removeClass(k.activeClass)},"click.uniform touchend.uniform":function(r){if(a(r.target).is("span")||a(r.target).is("div")){if(o[0].dispatchEvent){var q=document.createEvent("MouseEvents");q.initEvent("click",true,true);o[0].dispatchEvent(q)}else{o[0].click()}}}});o.bind({"focus.uniform":function(){p.addClass(k.focusClass)},"blur.uniform":function(){p.removeClass(k.focusClass)}});a.uniform.noSelect(p);b(o)}function e(o){var m=a(o);var p=a("<div />"),l=a("<span />");if(!m.css("display")=="none"&&k.autoHide){p.hide()}p.addClass(k.selectClass);if(k.useID&&o.attr("id")!=""){p.attr("id",k.idPrefix+"-"+o.attr("id"))}var n=o.find(":selected:first");if(n.length==0){n=o.find("option:first")}l.html(n.html());o.css("opacity",0);o.wrap(p);o.before(l);p=o.parent("div");l=o.siblings("span");o.bind({"change.uniform":function(){l.text(o.find(":selected").html());p.removeClass(k.activeClass)},"focus.uniform":function(){p.addClass(k.focusClass)},"blur.uniform":function(){p.removeClass(k.focusClass);p.removeClass(k.activeClass)},"mousedown.uniform touchbegin.uniform":function(){p.addClass(k.activeClass)},"mouseup.uniform touchend.uniform":function(){p.removeClass(k.activeClass)},"click.uniform touchend.uniform":function(){p.removeClass(k.activeClass)},"mouseenter.uniform":function(){p.addClass(k.hoverClass)},"mouseleave.uniform":function(){p.removeClass(k.hoverClass);p.removeClass(k.activeClass)},"keyup.uniform":function(){l.text(o.find(":selected").html())}});if(a(o).attr("disabled")){p.addClass(k.disabledClass)}a.uniform.noSelect(l);b(o)}function f(n){var m=a(n);var o=a("<div />"),l=a("<span />");if(!m.css("display")=="none"&&k.autoHide){o.hide()}o.addClass(k.checkboxClass);if(k.useID&&n.attr("id")!=""){o.attr("id",k.idPrefix+"-"+n.attr("id"))}a(n).wrap(o);a(n).wrap(l);l=n.parent();o=l.parent();a(n).css("opacity",0).bind({"focus.uniform":function(){o.addClass(k.focusClass)},"blur.uniform":function(){o.removeClass(k.focusClass)},"click.uniform touchend.uniform":function(){if(!a(n).attr("checked")){l.removeClass(k.checkedClass)}else{l.addClass(k.checkedClass)}},"mousedown.uniform touchbegin.uniform":function(){o.addClass(k.activeClass)},"mouseup.uniform touchend.uniform":function(){o.removeClass(k.activeClass)},"mouseenter.uniform":function(){o.addClass(k.hoverClass)},"mouseleave.uniform":function(){o.removeClass(k.hoverClass);o.removeClass(k.activeClass)}});if(a(n).attr("checked")){l.addClass(k.checkedClass)}if(a(n).attr("disabled")){o.addClass(k.disabledClass)}b(n)}function c(n){var m=a(n);var o=a("<div />"),l=a("<span />");if(!m.css("display")=="none"&&k.autoHide){o.hide()}o.addClass(k.radioClass);if(k.useID&&n.attr("id")!=""){o.attr("id",k.idPrefix+"-"+n.attr("id"))}a(n).wrap(o);a(n).wrap(l);l=n.parent();o=l.parent();a(n).css("opacity",0).bind({"focus.uniform":function(){o.addClass(k.focusClass)},"blur.uniform":function(){o.removeClass(k.focusClass)},"click.uniform touchend.uniform":function(){if(!a(n).attr("checked")){l.removeClass(k.checkedClass)}else{var p=k.radioClass.split(" ")[0];a("."+p+" span."+k.checkedClass+":has([name='"+a(n).attr("name")+"'])").removeClass(k.checkedClass);l.addClass(k.checkedClass)}},"mousedown.uniform touchend.uniform":function(){if(!a(n).is(":disabled")){o.addClass(k.activeClass)}},"mouseup.uniform touchbegin.uniform":function(){o.removeClass(k.activeClass)},"mouseenter.uniform touchend.uniform":function(){o.addClass(k.hoverClass)},"mouseleave.uniform":function(){o.removeClass(k.hoverClass);o.removeClass(k.activeClass)}});if(a(n).attr("checked")){l.addClass(k.checkedClass)}if(a(n).attr("disabled")){o.addClass(k.disabledClass)}b(n)}function h(q){var o=a(q);var r=a("<div />"),p=a("<span>"+k.fileDefaultText+"</span>"),m=a("<span>"+k.fileBtnText+"</span>");if(!o.css("display")=="none"&&k.autoHide){r.hide()}r.addClass(k.fileClass);p.addClass(k.filenameClass);m.addClass(k.fileBtnClass);if(k.useID&&o.attr("id")!=""){r.attr("id",k.idPrefix+"-"+o.attr("id"))}o.wrap(r);o.after(m);o.after(p);r=o.closest("div");p=o.siblings("."+k.filenameClass);m=o.siblings("."+k.fileBtnClass);if(!o.attr("size")){var l=r.width();o.attr("size",l/10)}var n=function(){var s=o.val();if(s===""){s=k.fileDefaultText}else{s=s.split(/[\/\\]+/);s=s[(s.length-1)]}p.text(s)};n();o.css("opacity",0).bind({"focus.uniform":function(){r.addClass(k.focusClass)},"blur.uniform":function(){r.removeClass(k.focusClass)},"mousedown.uniform":function(){if(!a(q).is(":disabled")){r.addClass(k.activeClass)}},"mouseup.uniform":function(){r.removeClass(k.activeClass)},"mouseenter.uniform":function(){r.addClass(k.hoverClass)},"mouseleave.uniform":function(){r.removeClass(k.hoverClass);r.removeClass(k.activeClass)}});if(a.browser.msie){o.bind("click.uniform.ie7",function(){setTimeout(n,0)})}else{o.bind("change.uniform",n)}if(o.attr("disabled")){r.addClass(k.disabledClass)}a.uniform.noSelect(p);a.uniform.noSelect(m);b(q)}a.uniform.restore=function(l){if(l==undefined){l=a(a.uniform.elements)}a(l).each(function(){if(a(this).is(":checkbox")){a(this).unwrap().unwrap()}else{if(a(this).is("select")){a(this).siblings("span").remove();a(this).unwrap()}else{if(a(this).is(":radio")){a(this).unwrap().unwrap()}else{if(a(this).is(":file")){a(this).siblings("span").remove();a(this).unwrap()}else{if(a(this).is("button, :submit, :reset, a, input[type='button']")){a(this).unwrap().unwrap()}}}}}a(this).unbind(".uniform");a(this).css("opacity","1");var m=a.inArray(a(l),a.uniform.elements);a.uniform.elements.splice(m,1)})};function b(l){l=a(l).get();if(l.length>1){a.each(l,function(m,n){a.uniform.elements.push(n)})}else{a.uniform.elements.push(l)}}a.uniform.noSelect=function(l){function m(){return false}a(l).each(function(){this.onselectstart=this.ondragstart=m;a(this).mousedown(m).css({MozUserSelect:"none"})})};a.uniform.update=function(l){if(l==undefined){l=a(a.uniform.elements)}l=a(l);l.each(function(){var n=a(this);if(n.is("select")){var m=n.siblings("span");var p=n.parent("div");p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);m.html(n.find(":selected").html());if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}else{if(n.is(":checkbox")){var m=n.closest("span");var p=n.closest("div");p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);m.removeClass(k.checkedClass);if(n.is(":checked")){m.addClass(k.checkedClass)}if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}else{if(n.is(":radio")){var m=n.closest("span");var p=n.closest("div");p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);m.removeClass(k.checkedClass);if(n.is(":checked")){m.addClass(k.checkedClass)}if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}else{if(n.is(":file")){var p=n.parent("div");var o=n.siblings(k.filenameClass);btnTag=n.siblings(k.fileBtnClass);p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);o.text(n.val());if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}else{if(n.is(":submit")||n.is(":reset")||n.is("button")||n.is("a")||l.is("input[type=button]")){var p=n.closest("div");p.removeClass(k.hoverClass+" "+k.focusClass+" "+k.activeClass);if(n.is(":disabled")){p.addClass(k.disabledClass)}else{p.removeClass(k.disabledClass)}}}}}}})};return this.each(function(){if(a.support.selectOpacity){var l=a(this);if(l.is("select")){if(l.attr("multiple")!=true){if(l.attr("size")==undefined||l.attr("size")<=1){e(l)}}}else{if(l.is(":checkbox")){f(l)}else{if(l.is(":radio")){c(l)}else{if(l.is(":file")){h(l)}else{if(l.is(":text, :password, input[type='email']")){j(l)}else{if(l.is("textarea")){g(l)}else{if(l.is("a")||l.is(":submit")||l.is(":reset")||l.is("button")||l.is("input[type=button]")){i(l)}}}}}}}}})}})(jQuery);
/**
 * @summary     DataTables
 * @description Paginate, search and sort HTML tables
 * @version     1.9.4
 * @file        jquery.dataTables.js
 * @author      Allan Jardine (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 *
 * @copyright Copyright 2008-2012 Allan Jardine, all rights reserved.
 *
 * This source file is free software, under either the GPL v2 license or a
 * BSD style license, available at:
 *   http://datatables.net/license_gpl2
 *   http://datatables.net/license_bsd
 * 
 * This source file is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY 
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 * 
 * For details please refer to: http://www.datatables.net
 */

/*jslint evil: true, undef: true, browser: true */
/*globals $, jQuery,define,_fnExternApiFunc,_fnInitialise,_fnInitComplete,_fnLanguageCompat,_fnAddColumn,_fnColumnOptions,_fnAddData,_fnCreateTr,_fnGatherData,_fnBuildHead,_fnDrawHead,_fnDraw,_fnReDraw,_fnAjaxUpdate,_fnAjaxParameters,_fnAjaxUpdateDraw,_fnServerParams,_fnAddOptionsHtml,_fnFeatureHtmlTable,_fnScrollDraw,_fnAdjustColumnSizing,_fnFeatureHtmlFilter,_fnFilterComplete,_fnFilterCustom,_fnFilterColumn,_fnFilter,_fnBuildSearchArray,_fnBuildSearchRow,_fnFilterCreateSearch,_fnDataToSearch,_fnSort,_fnSortAttachListener,_fnSortingClasses,_fnFeatureHtmlPaginate,_fnPageChange,_fnFeatureHtmlInfo,_fnUpdateInfo,_fnFeatureHtmlLength,_fnFeatureHtmlProcessing,_fnProcessingDisplay,_fnVisibleToColumnIndex,_fnColumnIndexToVisible,_fnNodeToDataIndex,_fnVisbleColumns,_fnCalculateEnd,_fnConvertToWidth,_fnCalculateColumnWidths,_fnScrollingWidthAdjust,_fnGetWidestNode,_fnGetMaxLenString,_fnStringToCss,_fnDetectType,_fnSettingsFromNode,_fnGetDataMaster,_fnGetTrNodes,_fnGetTdNodes,_fnEscapeRegex,_fnDeleteIndex,_fnReOrderIndex,_fnColumnOrdering,_fnLog,_fnClearTable,_fnSaveState,_fnLoadState,_fnCreateCookie,_fnReadCookie,_fnDetectHeader,_fnGetUniqueThs,_fnScrollBarWidth,_fnApplyToChildren,_fnMap,_fnGetRowData,_fnGetCellData,_fnSetCellData,_fnGetObjectDataFn,_fnSetObjectDataFn,_fnApplyColumnDefs,_fnBindAction,_fnCallbackReg,_fnCallbackFire,_fnJsonString,_fnRender,_fnNodeToColumnIndex,_fnInfoMacros,_fnBrowserDetect,_fnGetColumns*/

(/** @lends <global> */function( window, document, undefined ) {

(function( factory ) {
	"use strict";

	// Define as an AMD module if possible
	if ( typeof define === 'function' && define.amd )
	{
		define( ['jquery'], factory );
	}
	/* Define using browser globals otherwise
	 * Prevent multiple instantiations if the script is loaded twice
	 */
	else if ( jQuery && !jQuery.fn.dataTable )
	{
		factory( jQuery );
	}
}
(/** @lends <global> */function( $ ) {
	"use strict";
	/** 
	 * DataTables is a plug-in for the jQuery Javascript library. It is a 
	 * highly flexible tool, based upon the foundations of progressive 
	 * enhancement, which will add advanced interaction controls to any 
	 * HTML table. For a full list of features please refer to
	 * <a href="http://datatables.net">DataTables.net</a>.
	 *
	 * Note that the <i>DataTable</i> object is not a global variable but is
	 * aliased to <i>jQuery.fn.DataTable</i> and <i>jQuery.fn.dataTable</i> through which 
	 * it may be  accessed.
	 *
	 *  @class
	 *  @param {object} [oInit={}] Configuration object for DataTables. Options
	 *    are defined by {@link DataTable.defaults}
	 *  @requires jQuery 1.3+
	 * 
	 *  @example
	 *    // Basic initialisation
	 *    $(document).ready( function {
	 *      $('#example').dataTable();
	 *    } );
	 *  
	 *  @example
	 *    // Initialisation with configuration options - in this case, disable
	 *    // pagination and sorting.
	 *    $(document).ready( function {
	 *      $('#example').dataTable( {
	 *        "bPaginate": false,
	 *        "bSort": false 
	 *      } );
	 *    } );
	 */
	var DataTable = function( oInit )
	{
		
		
		/**
		 * Add a column to the list used for the table with default values
		 *  @param {object} oSettings dataTables settings object
		 *  @param {node} nTh The th element for this column
		 *  @memberof DataTable#oApi
		 */
		function _fnAddColumn( oSettings, nTh )
		{
			var oDefaults = DataTable.defaults.columns;
			var iCol = oSettings.aoColumns.length;
			var oCol = $.extend( {}, DataTable.models.oColumn, oDefaults, {
				"sSortingClass": oSettings.oClasses.sSortable,
				"sSortingClassJUI": oSettings.oClasses.sSortJUI,
				"nTh": nTh ? nTh : document.createElement('th'),
				"sTitle":    oDefaults.sTitle    ? oDefaults.sTitle    : nTh ? nTh.innerHTML : '',
				"aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
				"mData": oDefaults.mData ? oDefaults.oDefaults : iCol
			} );
			oSettings.aoColumns.push( oCol );
			
			/* Add a column specific filter */
			if ( oSettings.aoPreSearchCols[ iCol ] === undefined || oSettings.aoPreSearchCols[ iCol ] === null )
			{
				oSettings.aoPreSearchCols[ iCol ] = $.extend( {}, DataTable.models.oSearch );
			}
			else
			{
				var oPre = oSettings.aoPreSearchCols[ iCol ];
				
				/* Don't require that the user must specify bRegex, bSmart or bCaseInsensitive */
				if ( oPre.bRegex === undefined )
				{
					oPre.bRegex = true;
				}
				
				if ( oPre.bSmart === undefined )
				{
					oPre.bSmart = true;
				}
				
				if ( oPre.bCaseInsensitive === undefined )
				{
					oPre.bCaseInsensitive = true;
				}
			}
			
			/* Use the column options function to initialise classes etc */
			_fnColumnOptions( oSettings, iCol, null );
		}
		
		
		/**
		 * Apply options for a column
		 *  @param {object} oSettings dataTables settings object
		 *  @param {int} iCol column index to consider
		 *  @param {object} oOptions object with sType, bVisible and bSearchable etc
		 *  @memberof DataTable#oApi
		 */
		function _fnColumnOptions( oSettings, iCol, oOptions )
		{
			var oCol = oSettings.aoColumns[ iCol ];
			
			/* User specified column options */
			if ( oOptions !== undefined && oOptions !== null )
			{
				/* Backwards compatibility for mDataProp */
				if ( oOptions.mDataProp && !oOptions.mData )
				{
					oOptions.mData = oOptions.mDataProp;
				}
		
				if ( oOptions.sType !== undefined )
				{
					oCol.sType = oOptions.sType;
					oCol._bAutoType = false;
				}
				
				$.extend( oCol, oOptions );
				_fnMap( oCol, oOptions, "sWidth", "sWidthOrig" );
		
				/* iDataSort to be applied (backwards compatibility), but aDataSort will take
				 * priority if defined
				 */
				if ( oOptions.iDataSort !== undefined )
				{
					oCol.aDataSort = [ oOptions.iDataSort ];
				}
				_fnMap( oCol, oOptions, "aDataSort" );
			}
		
			/* Cache the data get and set functions for speed */
			var mRender = oCol.mRender ? _fnGetObjectDataFn( oCol.mRender ) : null;
			var mData = _fnGetObjectDataFn( oCol.mData );
		
			oCol.fnGetData = function (oData, sSpecific) {
				var innerData = mData( oData, sSpecific );
		
				if ( oCol.mRender && (sSpecific && sSpecific !== '') )
				{
					return mRender( innerData, sSpecific, oData );
				}
				return innerData;
			};
			oCol.fnSetData = _fnSetObjectDataFn( oCol.mData );
			
			/* Feature sorting overrides column specific when off */
			if ( !oSettings.oFeatures.bSort )
			{
				oCol.bSortable = false;
			}
			
			/* Check that the class assignment is correct for sorting */
			if ( !oCol.bSortable ||
				 ($.inArray('asc', oCol.asSorting) == -1 && $.inArray('desc', oCol.asSorting) == -1) )
			{
				oCol.sSortingClass = oSettings.oClasses.sSortableNone;
				oCol.sSortingClassJUI = "";
			}
			else if ( $.inArray('asc', oCol.asSorting) == -1 && $.inArray('desc', oCol.asSorting) == -1 )
			{
				oCol.sSortingClass = oSettings.oClasses.sSortable;
				oCol.sSortingClassJUI = oSettings.oClasses.sSortJUI;
			}
			else if ( $.inArray('asc', oCol.asSorting) != -1 && $.inArray('desc', oCol.asSorting) == -1 )
			{
				oCol.sSortingClass = oSettings.oClasses.sSortableAsc;
				oCol.sSortingClassJUI = oSettings.oClasses.sSortJUIAscAllowed;
			}
			else if ( $.inArray('asc', oCol.asSorting) == -1 && $.inArray('desc', oCol.asSorting) != -1 )
			{
				oCol.sSortingClass = oSettings.oClasses.sSortableDesc;
				oCol.sSortingClassJUI = oSettings.oClasses.sSortJUIDescAllowed;
			}
		}
		
		
		/**
		 * Adjust the table column widths for new data. Note: you would probably want to 
		 * do a redraw after calling this function!
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnAdjustColumnSizing ( oSettings )
		{
			/* Not interested in doing column width calculation if auto-width is disabled */
			if ( oSettings.oFeatures.bAutoWidth === false )
			{
				return false;
			}
			
			_fnCalculateColumnWidths( oSettings );
			for ( var i=0 , iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
			{
				oSettings.aoColumns[i].nTh.style.width = oSettings.aoColumns[i].sWidth;
			}
		}
		
		
		/**
		 * Covert the index of a visible column to the index in the data array (take account
		 * of hidden columns)
		 *  @param {object} oSettings dataTables settings object
		 *  @param {int} iMatch Visible column index to lookup
		 *  @returns {int} i the data index
		 *  @memberof DataTable#oApi
		 */
		function _fnVisibleToColumnIndex( oSettings, iMatch )
		{
			var aiVis = _fnGetColumns( oSettings, 'bVisible' );
		
			return typeof aiVis[iMatch] === 'number' ?
				aiVis[iMatch] :
				null;
		}
		
		
		/**
		 * Covert the index of an index in the data array and convert it to the visible
		 *   column index (take account of hidden columns)
		 *  @param {int} iMatch Column index to lookup
		 *  @param {object} oSettings dataTables settings object
		 *  @returns {int} i the data index
		 *  @memberof DataTable#oApi
		 */
		function _fnColumnIndexToVisible( oSettings, iMatch )
		{
			var aiVis = _fnGetColumns( oSettings, 'bVisible' );
			var iPos = $.inArray( iMatch, aiVis );
		
			return iPos !== -1 ? iPos : null;
		}
		
		
		/**
		 * Get the number of visible columns
		 *  @param {object} oSettings dataTables settings object
		 *  @returns {int} i the number of visible columns
		 *  @memberof DataTable#oApi
		 */
		function _fnVisbleColumns( oSettings )
		{
			return _fnGetColumns( oSettings, 'bVisible' ).length;
		}
		
		
		/**
		 * Get an array of column indexes that match a given property
		 *  @param {object} oSettings dataTables settings object
		 *  @param {string} sParam Parameter in aoColumns to look for - typically 
		 *    bVisible or bSearchable
		 *  @returns {array} Array of indexes with matched properties
		 *  @memberof DataTable#oApi
		 */
		function _fnGetColumns( oSettings, sParam )
		{
			var a = [];
		
			$.map( oSettings.aoColumns, function(val, i) {
				if ( val[sParam] ) {
					a.push( i );
				}
			} );
		
			return a;
		}
		
		
		/**
		 * Get the sort type based on an input string
		 *  @param {string} sData data we wish to know the type of
		 *  @returns {string} type (defaults to 'string' if no type can be detected)
		 *  @memberof DataTable#oApi
		 */
		function _fnDetectType( sData )
		{
			var aTypes = DataTable.ext.aTypes;
			var iLen = aTypes.length;
			
			for ( var i=0 ; i<iLen ; i++ )
			{
				var sType = aTypes[i]( sData );
				if ( sType !== null )
				{
					return sType;
				}
			}
			
			return 'string';
		}
		
		
		/**
		 * Figure out how to reorder a display list
		 *  @param {object} oSettings dataTables settings object
		 *  @returns array {int} aiReturn index list for reordering
		 *  @memberof DataTable#oApi
		 */
		function _fnReOrderIndex ( oSettings, sColumns )
		{
			var aColumns = sColumns.split(',');
			var aiReturn = [];
			
			for ( var i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
			{
				for ( var j=0 ; j<iLen ; j++ )
				{
					if ( oSettings.aoColumns[i].sName == aColumns[j] )
					{
						aiReturn.push( j );
						break;
					}
				}
			}
			
			return aiReturn;
		}
		
		
		/**
		 * Get the column ordering that DataTables expects
		 *  @param {object} oSettings dataTables settings object
		 *  @returns {string} comma separated list of names
		 *  @memberof DataTable#oApi
		 */
		function _fnColumnOrdering ( oSettings )
		{
			var sNames = '';
			for ( var i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
			{
				sNames += oSettings.aoColumns[i].sName+',';
			}
			if ( sNames.length == iLen )
			{
				return "";
			}
			return sNames.slice(0, -1);
		}
		
		
		/**
		 * Take the column definitions and static columns arrays and calculate how
		 * they relate to column indexes. The callback function will then apply the
		 * definition found for a column to a suitable configuration object.
		 *  @param {object} oSettings dataTables settings object
		 *  @param {array} aoColDefs The aoColumnDefs array that is to be applied
		 *  @param {array} aoCols The aoColumns array that defines columns individually
		 *  @param {function} fn Callback function - takes two parameters, the calculated
		 *    column index and the definition for that column.
		 *  @memberof DataTable#oApi
		 */
		function _fnApplyColumnDefs( oSettings, aoColDefs, aoCols, fn )
		{
			var i, iLen, j, jLen, k, kLen;
		
			// Column definitions with aTargets
			if ( aoColDefs )
			{
				/* Loop over the definitions array - loop in reverse so first instance has priority */
				for ( i=aoColDefs.length-1 ; i>=0 ; i-- )
				{
					/* Each definition can target multiple columns, as it is an array */
					var aTargets = aoColDefs[i].aTargets;
					if ( !$.isArray( aTargets ) )
					{
						_fnLog( oSettings, 1, 'aTargets must be an array of targets, not a '+(typeof aTargets) );
					}
		
					for ( j=0, jLen=aTargets.length ; j<jLen ; j++ )
					{
						if ( typeof aTargets[j] === 'number' && aTargets[j] >= 0 )
						{
							/* Add columns that we don't yet know about */
							while( oSettings.aoColumns.length <= aTargets[j] )
							{
								_fnAddColumn( oSettings );
							}
		
							/* Integer, basic index */
							fn( aTargets[j], aoColDefs[i] );
						}
						else if ( typeof aTargets[j] === 'number' && aTargets[j] < 0 )
						{
							/* Negative integer, right to left column counting */
							fn( oSettings.aoColumns.length+aTargets[j], aoColDefs[i] );
						}
						else if ( typeof aTargets[j] === 'string' )
						{
							/* Class name matching on TH element */
							for ( k=0, kLen=oSettings.aoColumns.length ; k<kLen ; k++ )
							{
								if ( aTargets[j] == "_all" ||
								     $(oSettings.aoColumns[k].nTh).hasClass( aTargets[j] ) )
								{
									fn( k, aoColDefs[i] );
								}
							}
						}
					}
				}
			}
		
			// Statically defined columns array
			if ( aoCols )
			{
				for ( i=0, iLen=aoCols.length ; i<iLen ; i++ )
				{
					fn( i, aoCols[i] );
				}
			}
		}
		
		/**
		 * Add a data array to the table, creating DOM node etc. This is the parallel to 
		 * _fnGatherData, but for adding rows from a Javascript source, rather than a
		 * DOM source.
		 *  @param {object} oSettings dataTables settings object
		 *  @param {array} aData data array to be added
		 *  @returns {int} >=0 if successful (index of new aoData entry), -1 if failed
		 *  @memberof DataTable#oApi
		 */
		function _fnAddData ( oSettings, aDataSupplied )
		{
			var oCol;
			
			/* Take an independent copy of the data source so we can bash it about as we wish */
			var aDataIn = ($.isArray(aDataSupplied)) ?
				aDataSupplied.slice() :
				$.extend( true, {}, aDataSupplied );
			
			/* Create the object for storing information about this new row */
			var iRow = oSettings.aoData.length;
			var oData = $.extend( true, {}, DataTable.models.oRow );
			oData._aData = aDataIn;
			oSettings.aoData.push( oData );
		
			/* Create the cells */
			var nTd, sThisType;
			for ( var i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
			{
				oCol = oSettings.aoColumns[i];
		
				/* Use rendered data for filtering / sorting */
				if ( typeof oCol.fnRender === 'function' && oCol.bUseRendered && oCol.mData !== null )
				{
					_fnSetCellData( oSettings, iRow, i, _fnRender(oSettings, iRow, i) );
				}
				else
				{
					_fnSetCellData( oSettings, iRow, i, _fnGetCellData( oSettings, iRow, i ) );
				}
				
				/* See if we should auto-detect the column type */
				if ( oCol._bAutoType && oCol.sType != 'string' )
				{
					/* Attempt to auto detect the type - same as _fnGatherData() */
					var sVarType = _fnGetCellData( oSettings, iRow, i, 'type' );
					if ( sVarType !== null && sVarType !== '' )
					{
						sThisType = _fnDetectType( sVarType );
						if ( oCol.sType === null )
						{
							oCol.sType = sThisType;
						}
						else if ( oCol.sType != sThisType && oCol.sType != "html" )
						{
							/* String is always the 'fallback' option */
							oCol.sType = 'string';
						}
					}
				}
			}
			
			/* Add to the display array */
			oSettings.aiDisplayMaster.push( iRow );
		
			/* Create the DOM information */
			if ( !oSettings.oFeatures.bDeferRender )
			{
				_fnCreateTr( oSettings, iRow );
			}
		
			return iRow;
		}
		
		
		/**
		 * Read in the data from the target table from the DOM
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnGatherData( oSettings )
		{
			var iLoop, i, iLen, j, jLen, jInner,
			 	nTds, nTrs, nTd, nTr, aLocalData, iThisIndex,
				iRow, iRows, iColumn, iColumns, sNodeName,
				oCol, oData;
			
			/*
			 * Process by row first
			 * Add the data object for the whole table - storing the tr node. Note - no point in getting
			 * DOM based data if we are going to go and replace it with Ajax source data.
			 */
			if ( oSettings.bDeferLoading || oSettings.sAjaxSource === null )
			{
				nTr = oSettings.nTBody.firstChild;
				while ( nTr )
				{
					if ( nTr.nodeName.toUpperCase() == "TR" )
					{
						iThisIndex = oSettings.aoData.length;
						nTr._DT_RowIndex = iThisIndex;
						oSettings.aoData.push( $.extend( true, {}, DataTable.models.oRow, {
							"nTr": nTr
						} ) );
		
						oSettings.aiDisplayMaster.push( iThisIndex );
						nTd = nTr.firstChild;
						jInner = 0;
						while ( nTd )
						{
							sNodeName = nTd.nodeName.toUpperCase();
							if ( sNodeName == "TD" || sNodeName == "TH" )
							{
								_fnSetCellData( oSettings, iThisIndex, jInner, $.trim(nTd.innerHTML) );
								jInner++;
							}
							nTd = nTd.nextSibling;
						}
					}
					nTr = nTr.nextSibling;
				}
			}
			
			/* Gather in the TD elements of the Table - note that this is basically the same as
			 * fnGetTdNodes, but that function takes account of hidden columns, which we haven't yet
			 * setup!
			 */
			nTrs = _fnGetTrNodes( oSettings );
			nTds = [];
			for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
			{
				nTd = nTrs[i].firstChild;
				while ( nTd )
				{
					sNodeName = nTd.nodeName.toUpperCase();
					if ( sNodeName == "TD" || sNodeName == "TH" )
					{
						nTds.push( nTd );
					}
					nTd = nTd.nextSibling;
				}
			}
			
			/* Now process by column */
			for ( iColumn=0, iColumns=oSettings.aoColumns.length ; iColumn<iColumns ; iColumn++ )
			{
				oCol = oSettings.aoColumns[iColumn];
		
				/* Get the title of the column - unless there is a user set one */
				if ( oCol.sTitle === null )
				{
					oCol.sTitle = oCol.nTh.innerHTML;
				}
				
				var
					bAutoType = oCol._bAutoType,
					bRender = typeof oCol.fnRender === 'function',
					bClass = oCol.sClass !== null,
					bVisible = oCol.bVisible,
					nCell, sThisType, sRendered, sValType;
				
				/* A single loop to rule them all (and be more efficient) */
				if ( bAutoType || bRender || bClass || !bVisible )
				{
					for ( iRow=0, iRows=oSettings.aoData.length ; iRow<iRows ; iRow++ )
					{
						oData = oSettings.aoData[iRow];
						nCell = nTds[ (iRow*iColumns) + iColumn ];
						
						/* Type detection */
						if ( bAutoType && oCol.sType != 'string' )
						{
							sValType = _fnGetCellData( oSettings, iRow, iColumn, 'type' );
							if ( sValType !== '' )
							{
								sThisType = _fnDetectType( sValType );
								if ( oCol.sType === null )
								{
									oCol.sType = sThisType;
								}
								else if ( oCol.sType != sThisType && 
								          oCol.sType != "html" )
								{
									/* String is always the 'fallback' option */
									oCol.sType = 'string';
								}
							}
						}
		
						if ( oCol.mRender )
						{
							// mRender has been defined, so we need to get the value and set it
							nCell.innerHTML = _fnGetCellData( oSettings, iRow, iColumn, 'display' );
						}
						else if ( oCol.mData !== iColumn )
						{
							// If mData is not the same as the column number, then we need to
							// get the dev set value. If it is the column, no point in wasting
							// time setting the value that is already there!
							nCell.innerHTML = _fnGetCellData( oSettings, iRow, iColumn, 'display' );
						}
						
						/* Rendering */
						if ( bRender )
						{
							sRendered = _fnRender( oSettings, iRow, iColumn );
							nCell.innerHTML = sRendered;
							if ( oCol.bUseRendered )
							{
								/* Use the rendered data for filtering / sorting */
								_fnSetCellData( oSettings, iRow, iColumn, sRendered );
							}
						}
						
						/* Classes */
						if ( bClass )
						{
							nCell.className += ' '+oCol.sClass;
						}
						
						/* Column visibility */
						if ( !bVisible )
						{
							oData._anHidden[iColumn] = nCell;
							nCell.parentNode.removeChild( nCell );
						}
						else
						{
							oData._anHidden[iColumn] = null;
						}
		
						if ( oCol.fnCreatedCell )
						{
							oCol.fnCreatedCell.call( oSettings.oInstance,
								nCell, _fnGetCellData( oSettings, iRow, iColumn, 'display' ), oData._aData, iRow, iColumn
							);
						}
					}
				}
			}
		
			/* Row created callbacks */
			if ( oSettings.aoRowCreatedCallback.length !== 0 )
			{
				for ( i=0, iLen=oSettings.aoData.length ; i<iLen ; i++ )
				{
					oData = oSettings.aoData[i];
					_fnCallbackFire( oSettings, 'aoRowCreatedCallback', null, [oData.nTr, oData._aData, i] );
				}
			}
		}
		
		
		/**
		 * Take a TR element and convert it to an index in aoData
		 *  @param {object} oSettings dataTables settings object
		 *  @param {node} n the TR element to find
		 *  @returns {int} index if the node is found, null if not
		 *  @memberof DataTable#oApi
		 */
		function _fnNodeToDataIndex( oSettings, n )
		{
			return (n._DT_RowIndex!==undefined) ? n._DT_RowIndex : null;
		}
		
		
		/**
		 * Take a TD element and convert it into a column data index (not the visible index)
		 *  @param {object} oSettings dataTables settings object
		 *  @param {int} iRow The row number the TD/TH can be found in
		 *  @param {node} n The TD/TH element to find
		 *  @returns {int} index if the node is found, -1 if not
		 *  @memberof DataTable#oApi
		 */
		function _fnNodeToColumnIndex( oSettings, iRow, n )
		{
			var anCells = _fnGetTdNodes( oSettings, iRow );
		
			for ( var i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
			{
				if ( anCells[i] === n )
				{
					return i;
				}
			}
			return -1;
		}
		
		
		/**
		 * Get an array of data for a given row from the internal data cache
		 *  @param {object} oSettings dataTables settings object
		 *  @param {int} iRow aoData row id
		 *  @param {string} sSpecific data get type ('type' 'filter' 'sort')
		 *  @param {array} aiColumns Array of column indexes to get data from
		 *  @returns {array} Data array
		 *  @memberof DataTable#oApi
		 */
		function _fnGetRowData( oSettings, iRow, sSpecific, aiColumns )
		{
			var out = [];
			for ( var i=0, iLen=aiColumns.length ; i<iLen ; i++ )
			{
				out.push( _fnGetCellData( oSettings, iRow, aiColumns[i], sSpecific ) );
			}
			return out;
		}
		
		
		/**
		 * Get the data for a given cell from the internal cache, taking into account data mapping
		 *  @param {object} oSettings dataTables settings object
		 *  @param {int} iRow aoData row id
		 *  @param {int} iCol Column index
		 *  @param {string} sSpecific data get type ('display', 'type' 'filter' 'sort')
		 *  @returns {*} Cell data
		 *  @memberof DataTable#oApi
		 */
		function _fnGetCellData( oSettings, iRow, iCol, sSpecific )
		{
			var sData;
			var oCol = oSettings.aoColumns[iCol];
			var oData = oSettings.aoData[iRow]._aData;
		
			if ( (sData=oCol.fnGetData( oData, sSpecific )) === undefined )
			{
				if ( oSettings.iDrawError != oSettings.iDraw && oCol.sDefaultContent === null )
				{
					_fnLog( oSettings, 0, "Requested unknown parameter "+
						(typeof oCol.mData=='function' ? '{mData function}' : "'"+oCol.mData+"'")+
						" from the data source for row "+iRow );
					oSettings.iDrawError = oSettings.iDraw;
				}
				return oCol.sDefaultContent;
			}
		
			/* When the data source is null, we can use default column data */
			if ( sData === null && oCol.sDefaultContent !== null )
			{
				sData = oCol.sDefaultContent;
			}
			else if ( typeof sData === 'function' )
			{
				/* If the data source is a function, then we run it and use the return */
				return sData();
			}
		
			if ( sSpecific == 'display' && sData === null )
			{
				return '';
			}
			return sData;
		}
		
		
		/**
		 * Set the value for a specific cell, into the internal data cache
		 *  @param {object} oSettings dataTables settings object
		 *  @param {int} iRow aoData row id
		 *  @param {int} iCol Column index
		 *  @param {*} val Value to set
		 *  @memberof DataTable#oApi
		 */
		function _fnSetCellData( oSettings, iRow, iCol, val )
		{
			var oCol = oSettings.aoColumns[iCol];
			var oData = oSettings.aoData[iRow]._aData;
		
			oCol.fnSetData( oData, val );
		}
		
		
		// Private variable that is used to match array syntax in the data property object
		var __reArray = /\[.*?\]$/;
		
		/**
		 * Return a function that can be used to get data from a source object, taking
		 * into account the ability to use nested objects as a source
		 *  @param {string|int|function} mSource The data source for the object
		 *  @returns {function} Data get function
		 *  @memberof DataTable#oApi
		 */
		function _fnGetObjectDataFn( mSource )
		{
			if ( mSource === null )
			{
				/* Give an empty string for rendering / sorting etc */
				return function (data, type) {
					return null;
				};
			}
			else if ( typeof mSource === 'function' )
			{
				return function (data, type, extra) {
					return mSource( data, type, extra );
				};
			}
			else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 || mSource.indexOf('[') !== -1) )
			{
				/* If there is a . in the source string then the data source is in a 
				 * nested object so we loop over the data for each level to get the next
				 * level down. On each loop we test for undefined, and if found immediately
				 * return. This allows entire objects to be missing and sDefaultContent to
				 * be used if defined, rather than throwing an error
				 */
				var fetchData = function (data, type, src) {
					var a = src.split('.');
					var arrayNotation, out, innerSrc;
		
					if ( src !== "" )
					{
						for ( var i=0, iLen=a.length ; i<iLen ; i++ )
						{
							// Check if we are dealing with an array notation request
							arrayNotation = a[i].match(__reArray);
		
							if ( arrayNotation ) {
								a[i] = a[i].replace(__reArray, '');
		
								// Condition allows simply [] to be passed in
								if ( a[i] !== "" ) {
									data = data[ a[i] ];
								}
								out = [];
								
								// Get the remainder of the nested object to get
								a.splice( 0, i+1 );
								innerSrc = a.join('.');
		
								// Traverse each entry in the array getting the properties requested
								for ( var j=0, jLen=data.length ; j<jLen ; j++ ) {
									out.push( fetchData( data[j], type, innerSrc ) );
								}
		
								// If a string is given in between the array notation indicators, that
								// is used to join the strings together, otherwise an array is returned
								var join = arrayNotation[0].substring(1, arrayNotation[0].length-1);
								data = (join==="") ? out : out.join(join);
		
								// The inner call to fetchData has already traversed through the remainder
								// of the source requested, so we exit from the loop
								break;
							}
		
							if ( data === null || data[ a[i] ] === undefined )
							{
								return undefined;
							}
							data = data[ a[i] ];
						}
					}
		
					return data;
				};
		
				return function (data, type) {
					return fetchData( data, type, mSource );
				};
			}
			else
			{
				/* Array or flat object mapping */
				return function (data, type) {
					return data[mSource];	
				};
			}
		}
		
		
		/**
		 * Return a function that can be used to set data from a source object, taking
		 * into account the ability to use nested objects as a source
		 *  @param {string|int|function} mSource The data source for the object
		 *  @returns {function} Data set function
		 *  @memberof DataTable#oApi
		 */
		function _fnSetObjectDataFn( mSource )
		{
			if ( mSource === null )
			{
				/* Nothing to do when the data source is null */
				return function (data, val) {};
			}
			else if ( typeof mSource === 'function' )
			{
				return function (data, val) {
					mSource( data, 'set', val );
				};
			}
			else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 || mSource.indexOf('[') !== -1) )
			{
				/* Like the get, we need to get data from a nested object */
				var setData = function (data, val, src) {
					var a = src.split('.'), b;
					var arrayNotation, o, innerSrc;
		
					for ( var i=0, iLen=a.length-1 ; i<iLen ; i++ )
					{
						// Check if we are dealing with an array notation request
						arrayNotation = a[i].match(__reArray);
		
						if ( arrayNotation )
						{
							a[i] = a[i].replace(__reArray, '');
							data[ a[i] ] = [];
							
							// Get the remainder of the nested object to set so we can recurse
							b = a.slice();
							b.splice( 0, i+1 );
							innerSrc = b.join('.');
		
							// Traverse each entry in the array setting the properties requested
							for ( var j=0, jLen=val.length ; j<jLen ; j++ )
							{
								o = {};
								setData( o, val[j], innerSrc );
								data[ a[i] ].push( o );
							}
		
							// The inner call to setData has already traversed through the remainder
							// of the source and has set the data, thus we can exit here
							return;
						}
		
						// If the nested object doesn't currently exist - since we are
						// trying to set the value - create it
						if ( data[ a[i] ] === null || data[ a[i] ] === undefined )
						{
							data[ a[i] ] = {};
						}
						data = data[ a[i] ];
					}
		
					// If array notation is used, we just want to strip it and use the property name
					// and assign the value. If it isn't used, then we get the result we want anyway
					data[ a[a.length-1].replace(__reArray, '') ] = val;
				};
		
				return function (data, val) {
					return setData( data, val, mSource );
				};
			}
			else
			{
				/* Array or flat object mapping */
				return function (data, val) {
					data[mSource] = val;	
				};
			}
		}
		
		
		/**
		 * Return an array with the full table data
		 *  @param {object} oSettings dataTables settings object
		 *  @returns array {array} aData Master data array
		 *  @memberof DataTable#oApi
		 */
		function _fnGetDataMaster ( oSettings )
		{
			var aData = [];
			var iLen = oSettings.aoData.length;
			for ( var i=0 ; i<iLen; i++ )
			{
				aData.push( oSettings.aoData[i]._aData );
			}
			return aData;
		}
		
		
		/**
		 * Nuke the table
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnClearTable( oSettings )
		{
			oSettings.aoData.splice( 0, oSettings.aoData.length );
			oSettings.aiDisplayMaster.splice( 0, oSettings.aiDisplayMaster.length );
			oSettings.aiDisplay.splice( 0, oSettings.aiDisplay.length );
			_fnCalculateEnd( oSettings );
		}
		
		
		 /**
		 * Take an array of integers (index array) and remove a target integer (value - not 
		 * the key!)
		 *  @param {array} a Index array to target
		 *  @param {int} iTarget value to find
		 *  @memberof DataTable#oApi
		 */
		function _fnDeleteIndex( a, iTarget )
		{
			var iTargetIndex = -1;
			
			for ( var i=0, iLen=a.length ; i<iLen ; i++ )
			{
				if ( a[i] == iTarget )
				{
					iTargetIndex = i;
				}
				else if ( a[i] > iTarget )
				{
					a[i]--;
				}
			}
			
			if ( iTargetIndex != -1 )
			{
				a.splice( iTargetIndex, 1 );
			}
		}
		
		
		 /**
		 * Call the developer defined fnRender function for a given cell (row/column) with
		 * the required parameters and return the result.
		 *  @param {object} oSettings dataTables settings object
		 *  @param {int} iRow aoData index for the row
		 *  @param {int} iCol aoColumns index for the column
		 *  @returns {*} Return of the developer's fnRender function
		 *  @memberof DataTable#oApi
		 */
		function _fnRender( oSettings, iRow, iCol )
		{
			var oCol = oSettings.aoColumns[iCol];
		
			return oCol.fnRender( {
				"iDataRow":    iRow,
				"iDataColumn": iCol,
				"oSettings":   oSettings,
				"aData":       oSettings.aoData[iRow]._aData,
				"mDataProp":   oCol.mData
			}, _fnGetCellData(oSettings, iRow, iCol, 'display') );
		}
		/**
		 * Create a new TR element (and it's TD children) for a row
		 *  @param {object} oSettings dataTables settings object
		 *  @param {int} iRow Row to consider
		 *  @memberof DataTable#oApi
		 */
		function _fnCreateTr ( oSettings, iRow )
		{
			var oData = oSettings.aoData[iRow];
			var nTd;
		
			if ( oData.nTr === null )
			{
				oData.nTr = document.createElement('tr');
		
				/* Use a private property on the node to allow reserve mapping from the node
				 * to the aoData array for fast look up
				 */
				oData.nTr._DT_RowIndex = iRow;
		
				/* Special parameters can be given by the data source to be used on the row */
				if ( oData._aData.DT_RowId )
				{
					oData.nTr.id = oData._aData.DT_RowId;
				}
		
				if ( oData._aData.DT_RowClass )
				{
					oData.nTr.className = oData._aData.DT_RowClass;
				}
		
				/* Process each column */
				for ( var i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
				{
					var oCol = oSettings.aoColumns[i];
					nTd = document.createElement( oCol.sCellType );
		
					/* Render if needed - if bUseRendered is true then we already have the rendered
					 * value in the data source - so can just use that
					 */
					nTd.innerHTML = (typeof oCol.fnRender === 'function' && (!oCol.bUseRendered || oCol.mData === null)) ?
						_fnRender( oSettings, iRow, i ) :
						_fnGetCellData( oSettings, iRow, i, 'display' );
				
					/* Add user defined class */
					if ( oCol.sClass !== null )
					{
						nTd.className = oCol.sClass;
					}
					
					if ( oCol.bVisible )
					{
						oData.nTr.appendChild( nTd );
						oData._anHidden[i] = null;
					}
					else
					{
						oData._anHidden[i] = nTd;
					}
		
					if ( oCol.fnCreatedCell )
					{
						oCol.fnCreatedCell.call( oSettings.oInstance,
							nTd, _fnGetCellData( oSettings, iRow, i, 'display' ), oData._aData, iRow, i
						);
					}
				}
		
				_fnCallbackFire( oSettings, 'aoRowCreatedCallback', null, [oData.nTr, oData._aData, iRow] );
			}
		}
		
		
		/**
		 * Create the HTML header for the table
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnBuildHead( oSettings )
		{
			var i, nTh, iLen, j, jLen;
			var iThs = $('th, td', oSettings.nTHead).length;
			var iCorrector = 0;
			var jqChildren;
			
			/* If there is a header in place - then use it - otherwise it's going to get nuked... */
			if ( iThs !== 0 )
			{
				/* We've got a thead from the DOM, so remove hidden columns and apply width to vis cols */
				for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
				{
					nTh = oSettings.aoColumns[i].nTh;
					nTh.setAttribute('role', 'columnheader');
					if ( oSettings.aoColumns[i].bSortable )
					{
						nTh.setAttribute('tabindex', oSettings.iTabIndex);
						nTh.setAttribute('aria-controls', oSettings.sTableId);
					}
		
					if ( oSettings.aoColumns[i].sClass !== null )
					{
						$(nTh).addClass( oSettings.aoColumns[i].sClass );
					}
					
					/* Set the title of the column if it is user defined (not what was auto detected) */
					if ( oSettings.aoColumns[i].sTitle != nTh.innerHTML )
					{
						nTh.innerHTML = oSettings.aoColumns[i].sTitle;
					}
				}
			}
			else
			{
				/* We don't have a header in the DOM - so we are going to have to create one */
				var nTr = document.createElement( "tr" );
				
				for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
				{
					nTh = oSettings.aoColumns[i].nTh;
					nTh.innerHTML = oSettings.aoColumns[i].sTitle;
					nTh.setAttribute('tabindex', '0');
					
					if ( oSettings.aoColumns[i].sClass !== null )
					{
						$(nTh).addClass( oSettings.aoColumns[i].sClass );
					}
					
					nTr.appendChild( nTh );
				}
				$(oSettings.nTHead).html( '' )[0].appendChild( nTr );
				_fnDetectHeader( oSettings.aoHeader, oSettings.nTHead );
			}
			
			/* ARIA role for the rows */	
			$(oSettings.nTHead).children('tr').attr('role', 'row');
			
			/* Add the extra markup needed by jQuery UI's themes */
			if ( oSettings.bJUI )
			{
				for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
				{
					nTh = oSettings.aoColumns[i].nTh;
					
					var nDiv = document.createElement('div');
					nDiv.className = oSettings.oClasses.sSortJUIWrapper;
					$(nTh).contents().appendTo(nDiv);
					
					var nSpan = document.createElement('span');
					nSpan.className = oSettings.oClasses.sSortIcon;
					nDiv.appendChild( nSpan );
					nTh.appendChild( nDiv );
				}
			}
			
			if ( oSettings.oFeatures.bSort )
			{
				for ( i=0 ; i<oSettings.aoColumns.length ; i++ )
				{
					if ( oSettings.aoColumns[i].bSortable !== false )
					{
						_fnSortAttachListener( oSettings, oSettings.aoColumns[i].nTh, i );
					}
					else
					{
						$(oSettings.aoColumns[i].nTh).addClass( oSettings.oClasses.sSortableNone );
					}
				}
			}
			
			/* Deal with the footer - add classes if required */
			if ( oSettings.oClasses.sFooterTH !== "" )
			{
				$(oSettings.nTFoot).children('tr').children('th').addClass( oSettings.oClasses.sFooterTH );
			}
			
			/* Cache the footer elements */
			if ( oSettings.nTFoot !== null )
			{
				var anCells = _fnGetUniqueThs( oSettings, null, oSettings.aoFooter );
				for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
				{
					if ( anCells[i] )
					{
						oSettings.aoColumns[i].nTf = anCells[i];
						if ( oSettings.aoColumns[i].sClass )
						{
							$(anCells[i]).addClass( oSettings.aoColumns[i].sClass );
						}
					}
				}
			}
		}
		
		
		/**
		 * Draw the header (or footer) element based on the column visibility states. The
		 * methodology here is to use the layout array from _fnDetectHeader, modified for
		 * the instantaneous column visibility, to construct the new layout. The grid is
		 * traversed over cell at a time in a rows x columns grid fashion, although each 
		 * cell insert can cover multiple elements in the grid - which is tracks using the
		 * aApplied array. Cell inserts in the grid will only occur where there isn't
		 * already a cell in that position.
		 *  @param {object} oSettings dataTables settings object
		 *  @param array {objects} aoSource Layout array from _fnDetectHeader
		 *  @param {boolean} [bIncludeHidden=false] If true then include the hidden columns in the calc, 
		 *  @memberof DataTable#oApi
		 */
		function _fnDrawHead( oSettings, aoSource, bIncludeHidden )
		{
			var i, iLen, j, jLen, k, kLen, n, nLocalTr;
			var aoLocal = [];
			var aApplied = [];
			var iColumns = oSettings.aoColumns.length;
			var iRowspan, iColspan;
		
			if (  bIncludeHidden === undefined )
			{
				bIncludeHidden = false;
			}
		
			/* Make a copy of the master layout array, but without the visible columns in it */
			for ( i=0, iLen=aoSource.length ; i<iLen ; i++ )
			{
				aoLocal[i] = aoSource[i].slice();
				aoLocal[i].nTr = aoSource[i].nTr;
		
				/* Remove any columns which are currently hidden */
				for ( j=iColumns-1 ; j>=0 ; j-- )
				{
					if ( !oSettings.aoColumns[j].bVisible && !bIncludeHidden )
					{
						aoLocal[i].splice( j, 1 );
					}
				}
		
				/* Prep the applied array - it needs an element for each row */
				aApplied.push( [] );
			}
		
			for ( i=0, iLen=aoLocal.length ; i<iLen ; i++ )
			{
				nLocalTr = aoLocal[i].nTr;
				
				/* All cells are going to be replaced, so empty out the row */
				if ( nLocalTr )
				{
					while( (n = nLocalTr.firstChild) )
					{
						nLocalTr.removeChild( n );
					}
				}
		
				for ( j=0, jLen=aoLocal[i].length ; j<jLen ; j++ )
				{
					iRowspan = 1;
					iColspan = 1;
		
					/* Check to see if there is already a cell (row/colspan) covering our target
					 * insert point. If there is, then there is nothing to do.
					 */
					if ( aApplied[i][j] === undefined )
					{
						nLocalTr.appendChild( aoLocal[i][j].cell );
						aApplied[i][j] = 1;
		
						/* Expand the cell to cover as many rows as needed */
						while ( aoLocal[i+iRowspan] !== undefined &&
						        aoLocal[i][j].cell == aoLocal[i+iRowspan][j].cell )
						{
							aApplied[i+iRowspan][j] = 1;
							iRowspan++;
						}
		
						/* Expand the cell to cover as many columns as needed */
						while ( aoLocal[i][j+iColspan] !== undefined &&
						        aoLocal[i][j].cell == aoLocal[i][j+iColspan].cell )
						{
							/* Must update the applied array over the rows for the columns */
							for ( k=0 ; k<iRowspan ; k++ )
							{
								aApplied[i+k][j+iColspan] = 1;
							}
							iColspan++;
						}
		
						/* Do the actual expansion in the DOM */
						aoLocal[i][j].cell.rowSpan = iRowspan;
						aoLocal[i][j].cell.colSpan = iColspan;
					}
				}
			}
		}
		
		
		/**
		 * Insert the required TR nodes into the table for display
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnDraw( oSettings )
		{
			/* Provide a pre-callback function which can be used to cancel the draw is false is returned */
			var aPreDraw = _fnCallbackFire( oSettings, 'aoPreDrawCallback', 'preDraw', [oSettings] );
			if ( $.inArray( false, aPreDraw ) !== -1 )
			{
				_fnProcessingDisplay( oSettings, false );
				return;
			}
			
			var i, iLen, n;
			var anRows = [];
			var iRowCount = 0;
			var iStripes = oSettings.asStripeClasses.length;
			var iOpenRows = oSettings.aoOpenRows.length;
			
			oSettings.bDrawing = true;
			
			/* Check and see if we have an initial draw position from state saving */
			if ( oSettings.iInitDisplayStart !== undefined && oSettings.iInitDisplayStart != -1 )
			{
				if ( oSettings.oFeatures.bServerSide )
				{
					oSettings._iDisplayStart = oSettings.iInitDisplayStart;
				}
				else
				{
					oSettings._iDisplayStart = (oSettings.iInitDisplayStart >= oSettings.fnRecordsDisplay()) ?
						0 : oSettings.iInitDisplayStart;
				}
				oSettings.iInitDisplayStart = -1;
				_fnCalculateEnd( oSettings );
			}
			
			/* Server-side processing draw intercept */
			if ( oSettings.bDeferLoading )
			{
				oSettings.bDeferLoading = false;
				oSettings.iDraw++;
			}
			else if ( !oSettings.oFeatures.bServerSide )
			{
				oSettings.iDraw++;
			}
			else if ( !oSettings.bDestroying && !_fnAjaxUpdate( oSettings ) )
			{
				return;
			}
			
			if ( oSettings.aiDisplay.length !== 0 )
			{
				var iStart = oSettings._iDisplayStart;
				var iEnd = oSettings._iDisplayEnd;
				
				if ( oSettings.oFeatures.bServerSide )
				{
					iStart = 0;
					iEnd = oSettings.aoData.length;
				}
				
				for ( var j=iStart ; j<iEnd ; j++ )
				{
					var aoData = oSettings.aoData[ oSettings.aiDisplay[j] ];
					if ( aoData.nTr === null )
					{
						_fnCreateTr( oSettings, oSettings.aiDisplay[j] );
					}
		
					var nRow = aoData.nTr;
					
					/* Remove the old striping classes and then add the new one */
					if ( iStripes !== 0 )
					{
						var sStripe = oSettings.asStripeClasses[ iRowCount % iStripes ];
						if ( aoData._sRowStripe != sStripe )
						{
							$(nRow).removeClass( aoData._sRowStripe ).addClass( sStripe );
							aoData._sRowStripe = sStripe;
						}
					}
					
					/* Row callback functions - might want to manipulate the row */
					_fnCallbackFire( oSettings, 'aoRowCallback', null, 
						[nRow, oSettings.aoData[ oSettings.aiDisplay[j] ]._aData, iRowCount, j] );
					
					anRows.push( nRow );
					iRowCount++;
					
					/* If there is an open row - and it is attached to this parent - attach it on redraw */
					if ( iOpenRows !== 0 )
					{
						for ( var k=0 ; k<iOpenRows ; k++ )
						{
							if ( nRow == oSettings.aoOpenRows[k].nParent )
							{
								anRows.push( oSettings.aoOpenRows[k].nTr );
								break;
							}
						}
					}
				}
			}
			else
			{
				/* Table is empty - create a row with an empty message in it */
				anRows[ 0 ] = document.createElement( 'tr' );
				
				if ( oSettings.asStripeClasses[0] )
				{
					anRows[ 0 ].className = oSettings.asStripeClasses[0];
				}
		
				var oLang = oSettings.oLanguage;
				var sZero = oLang.sZeroRecords;
				if ( oSettings.iDraw == 1 && oSettings.sAjaxSource !== null && !oSettings.oFeatures.bServerSide )
				{
					sZero = oLang.sLoadingRecords;
				}
				else if ( oLang.sEmptyTable && oSettings.fnRecordsTotal() === 0 )
				{
					sZero = oLang.sEmptyTable;
				}
		
				var nTd = document.createElement( 'td' );
				nTd.setAttribute( 'valign', "top" );
				nTd.colSpan = _fnVisbleColumns( oSettings );
				nTd.className = oSettings.oClasses.sRowEmpty;
				nTd.innerHTML = _fnInfoMacros( oSettings, sZero );
				
				anRows[ iRowCount ].appendChild( nTd );
			}
			
			/* Header and footer callbacks */
			_fnCallbackFire( oSettings, 'aoHeaderCallback', 'header', [ $(oSettings.nTHead).children('tr')[0], 
				_fnGetDataMaster( oSettings ), oSettings._iDisplayStart, oSettings.fnDisplayEnd(), oSettings.aiDisplay ] );
			
			_fnCallbackFire( oSettings, 'aoFooterCallback', 'footer', [ $(oSettings.nTFoot).children('tr')[0], 
				_fnGetDataMaster( oSettings ), oSettings._iDisplayStart, oSettings.fnDisplayEnd(), oSettings.aiDisplay ] );
			
			/* 
			 * Need to remove any old row from the display - note we can't just empty the tbody using
			 * $().html('') since this will unbind the jQuery event handlers (even although the node 
			 * still exists!) - equally we can't use innerHTML, since IE throws an exception.
			 */
			var
				nAddFrag = document.createDocumentFragment(),
				nRemoveFrag = document.createDocumentFragment(),
				nBodyPar, nTrs;
			
			if ( oSettings.nTBody )
			{
				nBodyPar = oSettings.nTBody.parentNode;
				nRemoveFrag.appendChild( oSettings.nTBody );
				
				/* When doing infinite scrolling, only remove child rows when sorting, filtering or start
				 * up. When not infinite scroll, always do it.
				 */
				if ( !oSettings.oScroll.bInfinite || !oSettings._bInitComplete ||
				 	oSettings.bSorted || oSettings.bFiltered )
				{
					while( (n = oSettings.nTBody.firstChild) )
					{
						oSettings.nTBody.removeChild( n );
					}
				}
				
				/* Put the draw table into the dom */
				for ( i=0, iLen=anRows.length ; i<iLen ; i++ )
				{
					nAddFrag.appendChild( anRows[i] );
				}
				
				oSettings.nTBody.appendChild( nAddFrag );
				if ( nBodyPar !== null )
				{
					nBodyPar.appendChild( oSettings.nTBody );
				}
			}
			
			/* Call all required callback functions for the end of a draw */
			_fnCallbackFire( oSettings, 'aoDrawCallback', 'draw', [oSettings] );
			
			/* Draw is complete, sorting and filtering must be as well */
			oSettings.bSorted = false;
			oSettings.bFiltered = false;
			oSettings.bDrawing = false;
			
			if ( oSettings.oFeatures.bServerSide )
			{
				_fnProcessingDisplay( oSettings, false );
				if ( !oSettings._bInitComplete )
				{
					_fnInitComplete( oSettings );
				}
			}
		}
		
		
		/**
		 * Redraw the table - taking account of the various features which are enabled
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnReDraw( oSettings )
		{
			if ( oSettings.oFeatures.bSort )
			{
				/* Sorting will refilter and draw for us */
				_fnSort( oSettings, oSettings.oPreviousSearch );
			}
			else if ( oSettings.oFeatures.bFilter )
			{
				/* Filtering will redraw for us */
				_fnFilterComplete( oSettings, oSettings.oPreviousSearch );
			}
			else
			{
				_fnCalculateEnd( oSettings );
				_fnDraw( oSettings );
			}
		}
		
		
		/**
		 * Add the options to the page HTML for the table
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnAddOptionsHtml ( oSettings )
		{
			/*
			 * Create a temporary, empty, div which we can later on replace with what we have generated
			 * we do it this way to rendering the 'options' html offline - speed :-)
			 */
			var nHolding = $('<div></div>')[0];
			oSettings.nTable.parentNode.insertBefore( nHolding, oSettings.nTable );
			
			/* 
			 * All DataTables are wrapped in a div
			 */
			oSettings.nTableWrapper = $('<div id="'+oSettings.sTableId+'_wrapper" class="'+oSettings.oClasses.sWrapper+'" role="grid"></div>')[0];
			oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;
		
			/* Track where we want to insert the option */
			var nInsertNode = oSettings.nTableWrapper;
			
			/* Loop over the user set positioning and place the elements as needed */
			var aDom = oSettings.sDom.split('');
			var nTmp, iPushFeature, cOption, nNewNode, cNext, sAttr, j;
			for ( var i=0 ; i<aDom.length ; i++ )
			{
				iPushFeature = 0;
				cOption = aDom[i];
				
				if ( cOption == '<' )
				{
					/* New container div */
					nNewNode = $('<div></div>')[0];
					
					/* Check to see if we should append an id and/or a class name to the container */
					cNext = aDom[i+1];
					if ( cNext == "'" || cNext == '"' )
					{
						sAttr = "";
						j = 2;
						while ( aDom[i+j] != cNext )
						{
							sAttr += aDom[i+j];
							j++;
						}
						
						/* Replace jQuery UI constants */
						if ( sAttr == "H" )
						{
							sAttr = oSettings.oClasses.sJUIHeader;
						}
						else if ( sAttr == "F" )
						{
							sAttr = oSettings.oClasses.sJUIFooter;
						}
						
						/* The attribute can be in the format of "#id.class", "#id" or "class" This logic
						 * breaks the string into parts and applies them as needed
						 */
						if ( sAttr.indexOf('.') != -1 )
						{
							var aSplit = sAttr.split('.');
							nNewNode.id = aSplit[0].substr(1, aSplit[0].length-1);
							nNewNode.className = aSplit[1];
						}
						else if ( sAttr.charAt(0) == "#" )
						{
							nNewNode.id = sAttr.substr(1, sAttr.length-1);
						}
						else
						{
							nNewNode.className = sAttr;
						}
						
						i += j; /* Move along the position array */
					}
					
					nInsertNode.appendChild( nNewNode );
					nInsertNode = nNewNode;
				}
				else if ( cOption == '>' )
				{
					/* End container div */
					nInsertNode = nInsertNode.parentNode;
				}
				else if ( cOption == 'l' && oSettings.oFeatures.bPaginate && oSettings.oFeatures.bLengthChange )
				{
					/* Length */
					nTmp = _fnFeatureHtmlLength( oSettings );
					iPushFeature = 1;
				}
				else if ( cOption == 'f' && oSettings.oFeatures.bFilter )
				{
					/* Filter */
					nTmp = _fnFeatureHtmlFilter( oSettings );
					iPushFeature = 1;
				}
				else if ( cOption == 'r' && oSettings.oFeatures.bProcessing )
				{
					/* pRocessing */
					nTmp = _fnFeatureHtmlProcessing( oSettings );
					iPushFeature = 1;
				}
				else if ( cOption == 't' )
				{
					/* Table */
					nTmp = _fnFeatureHtmlTable( oSettings );
					iPushFeature = 1;
				}
				else if ( cOption ==  'i' && oSettings.oFeatures.bInfo )
				{
					/* Info */
					nTmp = _fnFeatureHtmlInfo( oSettings );
					iPushFeature = 1;
				}
				else if ( cOption == 'p' && oSettings.oFeatures.bPaginate )
				{
					/* Pagination */
					nTmp = _fnFeatureHtmlPaginate( oSettings );
					iPushFeature = 1;
				}
				else if ( DataTable.ext.aoFeatures.length !== 0 )
				{
					/* Plug-in features */
					var aoFeatures = DataTable.ext.aoFeatures;
					for ( var k=0, kLen=aoFeatures.length ; k<kLen ; k++ )
					{
						if ( cOption == aoFeatures[k].cFeature )
						{
							nTmp = aoFeatures[k].fnInit( oSettings );
							if ( nTmp )
							{
								iPushFeature = 1;
							}
							break;
						}
					}
				}
				
				/* Add to the 2D features array */
				if ( iPushFeature == 1 && nTmp !== null )
				{
					if ( typeof oSettings.aanFeatures[cOption] !== 'object' )
					{
						oSettings.aanFeatures[cOption] = [];
					}
					oSettings.aanFeatures[cOption].push( nTmp );
					nInsertNode.appendChild( nTmp );
				}
			}
			
			/* Built our DOM structure - replace the holding div with what we want */
			nHolding.parentNode.replaceChild( oSettings.nTableWrapper, nHolding );
		}
		
		
		/**
		 * Use the DOM source to create up an array of header cells. The idea here is to
		 * create a layout grid (array) of rows x columns, which contains a reference
		 * to the cell that that point in the grid (regardless of col/rowspan), such that
		 * any column / row could be removed and the new grid constructed
		 *  @param array {object} aLayout Array to store the calculated layout in
		 *  @param {node} nThead The header/footer element for the table
		 *  @memberof DataTable#oApi
		 */
		function _fnDetectHeader ( aLayout, nThead )
		{
			var nTrs = $(nThead).children('tr');
			var nTr, nCell;
			var i, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;
			var bUnique;
			var fnShiftCol = function ( a, i, j ) {
				var k = a[i];
		                while ( k[j] ) {
					j++;
				}
				return j;
			};
		
			aLayout.splice( 0, aLayout.length );
			
			/* We know how many rows there are in the layout - so prep it */
			for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
			{
				aLayout.push( [] );
			}
			
			/* Calculate a layout array */
			for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
			{
				nTr = nTrs[i];
				iColumn = 0;
				
				/* For every cell in the row... */
				nCell = nTr.firstChild;
				while ( nCell ) {
					if ( nCell.nodeName.toUpperCase() == "TD" ||
					     nCell.nodeName.toUpperCase() == "TH" )
					{
						/* Get the col and rowspan attributes from the DOM and sanitise them */
						iColspan = nCell.getAttribute('colspan') * 1;
						iRowspan = nCell.getAttribute('rowspan') * 1;
						iColspan = (!iColspan || iColspan===0 || iColspan===1) ? 1 : iColspan;
						iRowspan = (!iRowspan || iRowspan===0 || iRowspan===1) ? 1 : iRowspan;
		
						/* There might be colspan cells already in this row, so shift our target 
						 * accordingly
						 */
						iColShifted = fnShiftCol( aLayout, i, iColumn );
						
						/* Cache calculation for unique columns */
						bUnique = iColspan === 1 ? true : false;
						
						/* If there is col / rowspan, copy the information into the layout grid */
						for ( l=0 ; l<iColspan ; l++ )
						{
							for ( k=0 ; k<iRowspan ; k++ )
							{
								aLayout[i+k][iColShifted+l] = {
									"cell": nCell,
									"unique": bUnique
								};
								aLayout[i+k].nTr = nTr;
							}
						}
					}
					nCell = nCell.nextSibling;
				}
			}
		}
		
		
		/**
		 * Get an array of unique th elements, one for each column
		 *  @param {object} oSettings dataTables settings object
		 *  @param {node} nHeader automatically detect the layout from this node - optional
		 *  @param {array} aLayout thead/tfoot layout from _fnDetectHeader - optional
		 *  @returns array {node} aReturn list of unique th's
		 *  @memberof DataTable#oApi
		 */
		function _fnGetUniqueThs ( oSettings, nHeader, aLayout )
		{
			var aReturn = [];
			if ( !aLayout )
			{
				aLayout = oSettings.aoHeader;
				if ( nHeader )
				{
					aLayout = [];
					_fnDetectHeader( aLayout, nHeader );
				}
			}
		
			for ( var i=0, iLen=aLayout.length ; i<iLen ; i++ )
			{
				for ( var j=0, jLen=aLayout[i].length ; j<jLen ; j++ )
				{
					if ( aLayout[i][j].unique && 
						 (!aReturn[j] || !oSettings.bSortCellsTop) )
					{
						aReturn[j] = aLayout[i][j].cell;
					}
				}
			}
			
			return aReturn;
		}
		
		
		
		/**
		 * Update the table using an Ajax call
		 *  @param {object} oSettings dataTables settings object
		 *  @returns {boolean} Block the table drawing or not
		 *  @memberof DataTable#oApi
		 */
		function _fnAjaxUpdate( oSettings )
		{
			if ( oSettings.bAjaxDataGet )
			{
				oSettings.iDraw++;
				_fnProcessingDisplay( oSettings, true );
				var iColumns = oSettings.aoColumns.length;
				var aoData = _fnAjaxParameters( oSettings );
				_fnServerParams( oSettings, aoData );
				
				oSettings.fnServerData.call( oSettings.oInstance, oSettings.sAjaxSource, aoData,
					function(json) {
						_fnAjaxUpdateDraw( oSettings, json );
					}, oSettings );
				return false;
			}
			else
			{
				return true;
			}
		}
		
		
		/**
		 * Build up the parameters in an object needed for a server-side processing request
		 *  @param {object} oSettings dataTables settings object
		 *  @returns {bool} block the table drawing or not
		 *  @memberof DataTable#oApi
		 */
		function _fnAjaxParameters( oSettings )
		{
			var iColumns = oSettings.aoColumns.length;
			var aoData = [], mDataProp, aaSort, aDataSort;
			var i, j;
			
			aoData.push( { "name": "sEcho",          "value": oSettings.iDraw } );
			aoData.push( { "name": "iColumns",       "value": iColumns } );
			aoData.push( { "name": "sColumns",       "value": _fnColumnOrdering(oSettings) } );
			aoData.push( { "name": "iDisplayStart",  "value": oSettings._iDisplayStart } );
			aoData.push( { "name": "iDisplayLength", "value": oSettings.oFeatures.bPaginate !== false ?
				oSettings._iDisplayLength : -1 } );
				
			for ( i=0 ; i<iColumns ; i++ )
			{
			  mDataProp = oSettings.aoColumns[i].mData;
				aoData.push( { "name": "mDataProp_"+i, "value": typeof(mDataProp)==="function" ? 'function' : mDataProp } );
			}
			
			/* Filtering */
			if ( oSettings.oFeatures.bFilter !== false )
			{
				aoData.push( { "name": "sSearch", "value": oSettings.oPreviousSearch.sSearch } );
				aoData.push( { "name": "bRegex",  "value": oSettings.oPreviousSearch.bRegex } );
				for ( i=0 ; i<iColumns ; i++ )
				{
					aoData.push( { "name": "sSearch_"+i,     "value": oSettings.aoPreSearchCols[i].sSearch } );
					aoData.push( { "name": "bRegex_"+i,      "value": oSettings.aoPreSearchCols[i].bRegex } );
					aoData.push( { "name": "bSearchable_"+i, "value": oSettings.aoColumns[i].bSearchable } );
				}
			}
			
			/* Sorting */
			if ( oSettings.oFeatures.bSort !== false )
			{
				var iCounter = 0;
		
				aaSort = ( oSettings.aaSortingFixed !== null ) ?
					oSettings.aaSortingFixed.concat( oSettings.aaSorting ) :
					oSettings.aaSorting.slice();
				
				for ( i=0 ; i<aaSort.length ; i++ )
				{
					aDataSort = oSettings.aoColumns[ aaSort[i][0] ].aDataSort;
					
					for ( j=0 ; j<aDataSort.length ; j++ )
					{
						aoData.push( { "name": "iSortCol_"+iCounter,  "value": aDataSort[j] } );
						aoData.push( { "name": "sSortDir_"+iCounter,  "value": aaSort[i][1] } );
						iCounter++;
					}
				}
				aoData.push( { "name": "iSortingCols",   "value": iCounter } );
				
				for ( i=0 ; i<iColumns ; i++ )
				{
					aoData.push( { "name": "bSortable_"+i,  "value": oSettings.aoColumns[i].bSortable } );
				}
			}
			
			return aoData;
		}
		
		
		/**
		 * Add Ajax parameters from plug-ins
		 *  @param {object} oSettings dataTables settings object
		 *  @param array {objects} aoData name/value pairs to send to the server
		 *  @memberof DataTable#oApi
		 */
		function _fnServerParams( oSettings, aoData )
		{
			_fnCallbackFire( oSettings, 'aoServerParams', 'serverParams', [aoData] );
		}
		
		
		/**
		 * Data the data from the server (nuking the old) and redraw the table
		 *  @param {object} oSettings dataTables settings object
		 *  @param {object} json json data return from the server.
		 *  @param {string} json.sEcho Tracking flag for DataTables to match requests
		 *  @param {int} json.iTotalRecords Number of records in the data set, not accounting for filtering
		 *  @param {int} json.iTotalDisplayRecords Number of records in the data set, accounting for filtering
		 *  @param {array} json.aaData The data to display on this page
		 *  @param {string} [json.sColumns] Column ordering (sName, comma separated)
		 *  @memberof DataTable#oApi
		 */
		function _fnAjaxUpdateDraw ( oSettings, json )
		{
			if ( json.sEcho !== undefined )
			{
				/* Protect against old returns over-writing a new one. Possible when you get
				 * very fast interaction, and later queries are completed much faster
				 */
				if ( json.sEcho*1 < oSettings.iDraw )
				{
					return;
				}
				else
				{
					oSettings.iDraw = json.sEcho * 1;
				}
			}
			
			if ( !oSettings.oScroll.bInfinite ||
				   (oSettings.oScroll.bInfinite && (oSettings.bSorted || oSettings.bFiltered)) )
			{
				_fnClearTable( oSettings );
			}
			oSettings._iRecordsTotal = parseInt(json.iTotalRecords, 10);
			oSettings._iRecordsDisplay = parseInt(json.iTotalDisplayRecords, 10);
			
			/* Determine if reordering is required */
			var sOrdering = _fnColumnOrdering(oSettings);
			var bReOrder = (json.sColumns !== undefined && sOrdering !== "" && json.sColumns != sOrdering );
			var aiIndex;
			if ( bReOrder )
			{
				aiIndex = _fnReOrderIndex( oSettings, json.sColumns );
			}
			
			var aData = _fnGetObjectDataFn( oSettings.sAjaxDataProp )( json );
			for ( var i=0, iLen=aData.length ; i<iLen ; i++ )
			{
				if ( bReOrder )
				{
					/* If we need to re-order, then create a new array with the correct order and add it */
					var aDataSorted = [];
					for ( var j=0, jLen=oSettings.aoColumns.length ; j<jLen ; j++ )
					{
						aDataSorted.push( aData[i][ aiIndex[j] ] );
					}
					_fnAddData( oSettings, aDataSorted );
				}
				else
				{
					/* No re-order required, sever got it "right" - just straight add */
					_fnAddData( oSettings, aData[i] );
				}
			}
			oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
			
			oSettings.bAjaxDataGet = false;
			_fnDraw( oSettings );
			oSettings.bAjaxDataGet = true;
			_fnProcessingDisplay( oSettings, false );
		}
		
		
		
		/**
		 * Generate the node required for filtering text
		 *  @returns {node} Filter control element
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnFeatureHtmlFilter ( oSettings )
		{
			var oPreviousSearch = oSettings.oPreviousSearch;
			
			var sSearchStr = oSettings.oLanguage.sSearch;
			sSearchStr = (sSearchStr.indexOf('_INPUT_') !== -1) ?
			  sSearchStr.replace('_INPUT_', '<input type="text" />') :
			  sSearchStr==="" ? '<input type="text" />' : sSearchStr+' <input type="text" />';
			
			var nFilter = document.createElement( 'div' );
			nFilter.className = oSettings.oClasses.sFilter;
			nFilter.innerHTML = '<label>'+sSearchStr+'</label>';
			if ( !oSettings.aanFeatures.f )
			{
				nFilter.id = oSettings.sTableId+'_filter';
			}
			
			var jqFilter = $('input[type="text"]', nFilter);
		
			// Store a reference to the input element, so other input elements could be
			// added to the filter wrapper if needed (submit button for example)
			nFilter._DT_Input = jqFilter[0];
		
			jqFilter.val( oPreviousSearch.sSearch.replace('"','&quot;') );
			jqFilter.bind( 'keyup.DT', function(e) {
				/* Update all other filter input elements for the new display */
				var n = oSettings.aanFeatures.f;
				var val = this.value==="" ? "" : this.value; // mental IE8 fix :-(
		
				for ( var i=0, iLen=n.length ; i<iLen ; i++ )
				{
					if ( n[i] != $(this).parents('div.dataTables_filter')[0] )
					{
						$(n[i]._DT_Input).val( val );
					}
				}
				
				/* Now do the filter */
				if ( val != oPreviousSearch.sSearch )
				{
					_fnFilterComplete( oSettings, { 
						"sSearch": val, 
						"bRegex": oPreviousSearch.bRegex,
						"bSmart": oPreviousSearch.bSmart ,
						"bCaseInsensitive": oPreviousSearch.bCaseInsensitive 
					} );
				}
			} );
		
			jqFilter
				.attr('aria-controls', oSettings.sTableId)
				.bind( 'keypress.DT', function(e) {
					/* Prevent form submission */
					if ( e.keyCode == 13 )
					{
						return false;
					}
				}
			);
			
			return nFilter;
		}
		
		
		/**
		 * Filter the table using both the global filter and column based filtering
		 *  @param {object} oSettings dataTables settings object
		 *  @param {object} oSearch search information
		 *  @param {int} [iForce] force a research of the master array (1) or not (undefined or 0)
		 *  @memberof DataTable#oApi
		 */
		function _fnFilterComplete ( oSettings, oInput, iForce )
		{
			var oPrevSearch = oSettings.oPreviousSearch;
			var aoPrevSearch = oSettings.aoPreSearchCols;
			var fnSaveFilter = function ( oFilter ) {
				/* Save the filtering values */
				oPrevSearch.sSearch = oFilter.sSearch;
				oPrevSearch.bRegex = oFilter.bRegex;
				oPrevSearch.bSmart = oFilter.bSmart;
				oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
			};
		
			/* In server-side processing all filtering is done by the server, so no point hanging around here */
			if ( !oSettings.oFeatures.bServerSide )
			{
				/* Global filter */
				_fnFilter( oSettings, oInput.sSearch, iForce, oInput.bRegex, oInput.bSmart, oInput.bCaseInsensitive );
				fnSaveFilter( oInput );
		
				/* Now do the individual column filter */
				for ( var i=0 ; i<oSettings.aoPreSearchCols.length ; i++ )
				{
					_fnFilterColumn( oSettings, aoPrevSearch[i].sSearch, i, aoPrevSearch[i].bRegex, 
						aoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive );
				}
				
				/* Custom filtering */
				_fnFilterCustom( oSettings );
			}
			else
			{
				fnSaveFilter( oInput );
			}
			
			/* Tell the draw function we have been filtering */
			oSettings.bFiltered = true;
			$(oSettings.oInstance).trigger('filter', oSettings);
			
			/* Redraw the table */
			oSettings._iDisplayStart = 0;
			_fnCalculateEnd( oSettings );
			_fnDraw( oSettings );
			
			/* Rebuild search array 'offline' */
			_fnBuildSearchArray( oSettings, 0 );
		}
		
		
		/**
		 * Apply custom filtering functions
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnFilterCustom( oSettings )
		{
			var afnFilters = DataTable.ext.afnFiltering;
			var aiFilterColumns = _fnGetColumns( oSettings, 'bSearchable' );
		
			for ( var i=0, iLen=afnFilters.length ; i<iLen ; i++ )
			{
				var iCorrector = 0;
				for ( var j=0, jLen=oSettings.aiDisplay.length ; j<jLen ; j++ )
				{
					var iDisIndex = oSettings.aiDisplay[j-iCorrector];
					var bTest = afnFilters[i](
						oSettings,
						_fnGetRowData( oSettings, iDisIndex, 'filter', aiFilterColumns ),
						iDisIndex
					);
					
					/* Check if we should use this row based on the filtering function */
					if ( !bTest )
					{
						oSettings.aiDisplay.splice( j-iCorrector, 1 );
						iCorrector++;
					}
				}
			}
		}
		
		
		/**
		 * Filter the table on a per-column basis
		 *  @param {object} oSettings dataTables settings object
		 *  @param {string} sInput string to filter on
		 *  @param {int} iColumn column to filter
		 *  @param {bool} bRegex treat search string as a regular expression or not
		 *  @param {bool} bSmart use smart filtering or not
		 *  @param {bool} bCaseInsensitive Do case insenstive matching or not
		 *  @memberof DataTable#oApi
		 */
		function _fnFilterColumn ( oSettings, sInput, iColumn, bRegex, bSmart, bCaseInsensitive )
		{
			if ( sInput === "" )
			{
				return;
			}
			
			var iIndexCorrector = 0;
			var rpSearch = _fnFilterCreateSearch( sInput, bRegex, bSmart, bCaseInsensitive );
			
			for ( var i=oSettings.aiDisplay.length-1 ; i>=0 ; i-- )
			{
				var sData = _fnDataToSearch( _fnGetCellData( oSettings, oSettings.aiDisplay[i], iColumn, 'filter' ),
					oSettings.aoColumns[iColumn].sType );
				if ( ! rpSearch.test( sData ) )
				{
					oSettings.aiDisplay.splice( i, 1 );
					iIndexCorrector++;
				}
			}
		}
		
		
		/**
		 * Filter the data table based on user input and draw the table
		 *  @param {object} oSettings dataTables settings object
		 *  @param {string} sInput string to filter on
		 *  @param {int} iForce optional - force a research of the master array (1) or not (undefined or 0)
		 *  @param {bool} bRegex treat as a regular expression or not
		 *  @param {bool} bSmart perform smart filtering or not
		 *  @param {bool} bCaseInsensitive Do case insenstive matching or not
		 *  @memberof DataTable#oApi
		 */
		function _fnFilter( oSettings, sInput, iForce, bRegex, bSmart, bCaseInsensitive )
		{
			var i;
			var rpSearch = _fnFilterCreateSearch( sInput, bRegex, bSmart, bCaseInsensitive );
			var oPrevSearch = oSettings.oPreviousSearch;
			
			/* Check if we are forcing or not - optional parameter */
			if ( !iForce )
			{
				iForce = 0;
			}
			
			/* Need to take account of custom filtering functions - always filter */
			if ( DataTable.ext.afnFiltering.length !== 0 )
			{
				iForce = 1;
			}
			
			/*
			 * If the input is blank - we want the full data set
			 */
			if ( sInput.length <= 0 )
			{
				oSettings.aiDisplay.splice( 0, oSettings.aiDisplay.length);
				oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
			}
			else
			{
				/*
				 * We are starting a new search or the new search string is smaller 
				 * then the old one (i.e. delete). Search from the master array
			 	 */
				if ( oSettings.aiDisplay.length == oSettings.aiDisplayMaster.length ||
					   oPrevSearch.sSearch.length > sInput.length || iForce == 1 ||
					   sInput.indexOf(oPrevSearch.sSearch) !== 0 )
				{
					/* Nuke the old display array - we are going to rebuild it */
					oSettings.aiDisplay.splice( 0, oSettings.aiDisplay.length);
					
					/* Force a rebuild of the search array */
					_fnBuildSearchArray( oSettings, 1 );
					
					/* Search through all records to populate the search array
					 * The the oSettings.aiDisplayMaster and asDataSearch arrays have 1 to 1 
					 * mapping
					 */
					for ( i=0 ; i<oSettings.aiDisplayMaster.length ; i++ )
					{
						if ( rpSearch.test(oSettings.asDataSearch[i]) )
						{
							oSettings.aiDisplay.push( oSettings.aiDisplayMaster[i] );
						}
					}
			  }
			  else
				{
			  	/* Using old search array - refine it - do it this way for speed
			  	 * Don't have to search the whole master array again
					 */
			  	var iIndexCorrector = 0;
			  	
			  	/* Search the current results */
			  	for ( i=0 ; i<oSettings.asDataSearch.length ; i++ )
					{
			  		if ( ! rpSearch.test(oSettings.asDataSearch[i]) )
						{
			  			oSettings.aiDisplay.splice( i-iIndexCorrector, 1 );
			  			iIndexCorrector++;
			  		}
			  	}
			  }
			}
		}
		
		
		/**
		 * Create an array which can be quickly search through
		 *  @param {object} oSettings dataTables settings object
		 *  @param {int} iMaster use the master data array - optional
		 *  @memberof DataTable#oApi
		 */
		function _fnBuildSearchArray ( oSettings, iMaster )
		{
			if ( !oSettings.oFeatures.bServerSide )
			{
				/* Clear out the old data */
				oSettings.asDataSearch = [];
		
				var aiFilterColumns = _fnGetColumns( oSettings, 'bSearchable' );
				var aiIndex = (iMaster===1) ?
				 	oSettings.aiDisplayMaster :
				 	oSettings.aiDisplay;
				
				for ( var i=0, iLen=aiIndex.length ; i<iLen ; i++ )
				{
					oSettings.asDataSearch[i] = _fnBuildSearchRow(
						oSettings,
						_fnGetRowData( oSettings, aiIndex[i], 'filter', aiFilterColumns )
					);
				}
			}
		}
		
		
		/**
		 * Create a searchable string from a single data row
		 *  @param {object} oSettings dataTables settings object
		 *  @param {array} aData Row data array to use for the data to search
		 *  @memberof DataTable#oApi
		 */
		function _fnBuildSearchRow( oSettings, aData )
		{
			var sSearch = aData.join('  ');
			
			/* If it looks like there is an HTML entity in the string, attempt to decode it */
			if ( sSearch.indexOf('&') !== -1 )
			{
				sSearch = $('<div>').html(sSearch).text();
			}
			
			// Strip newline characters
			return sSearch.replace( /[\n\r]/g, " " );
		}
		
		/**
		 * Build a regular expression object suitable for searching a table
		 *  @param {string} sSearch string to search for
		 *  @param {bool} bRegex treat as a regular expression or not
		 *  @param {bool} bSmart perform smart filtering or not
		 *  @param {bool} bCaseInsensitive Do case insensitive matching or not
		 *  @returns {RegExp} constructed object
		 *  @memberof DataTable#oApi
		 */
		function _fnFilterCreateSearch( sSearch, bRegex, bSmart, bCaseInsensitive )
		{
			var asSearch, sRegExpString;
			
			if ( bSmart )
			{
				/* Generate the regular expression to use. Something along the lines of:
				 * ^(?=.*?\bone\b)(?=.*?\btwo\b)(?=.*?\bthree\b).*$
				 */
				asSearch = bRegex ? sSearch.split( ' ' ) : _fnEscapeRegex( sSearch ).split( ' ' );
				sRegExpString = '^(?=.*?'+asSearch.join( ')(?=.*?' )+').*$';
				return new RegExp( sRegExpString, bCaseInsensitive ? "i" : "" );
			}
			else
			{
				sSearch = bRegex ? sSearch : _fnEscapeRegex( sSearch );
				return new RegExp( sSearch, bCaseInsensitive ? "i" : "" );
			}
		}
		
		
		/**
		 * Convert raw data into something that the user can search on
		 *  @param {string} sData data to be modified
		 *  @param {string} sType data type
		 *  @returns {string} search string
		 *  @memberof DataTable#oApi
		 */
		function _fnDataToSearch ( sData, sType )
		{
			if ( typeof DataTable.ext.ofnSearch[sType] === "function" )
			{
				return DataTable.ext.ofnSearch[sType]( sData );
			}
			else if ( sData === null )
			{
				return '';
			}
			else if ( sType == "html" )
			{
				return sData.replace(/[\r\n]/g," ").replace( /<.*?>/g, "" );
			}
			else if ( typeof sData === "string" )
			{
				return sData.replace(/[\r\n]/g," ");
			}
			return sData;
		}
		
		
		/**
		 * scape a string such that it can be used in a regular expression
		 *  @param {string} sVal string to escape
		 *  @returns {string} escaped string
		 *  @memberof DataTable#oApi
		 */
		function _fnEscapeRegex ( sVal )
		{
			var acEscape = [ '/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^', '-' ];
			var reReplace = new RegExp( '(\\' + acEscape.join('|\\') + ')', 'g' );
			return sVal.replace(reReplace, '\\$1');
		}
		
		
		/**
		 * Generate the node required for the info display
		 *  @param {object} oSettings dataTables settings object
		 *  @returns {node} Information element
		 *  @memberof DataTable#oApi
		 */
		function _fnFeatureHtmlInfo ( oSettings )
		{
			var nInfo = document.createElement( 'div' );
			nInfo.className = oSettings.oClasses.sInfo;
			
			/* Actions that are to be taken once only for this feature */
			if ( !oSettings.aanFeatures.i )
			{
				/* Add draw callback */
				oSettings.aoDrawCallback.push( {
					"fn": _fnUpdateInfo,
					"sName": "information"
				} );
				
				/* Add id */
				nInfo.id = oSettings.sTableId+'_info';
			}
			oSettings.nTable.setAttribute( 'aria-describedby', oSettings.sTableId+'_info' );
			
			return nInfo;
		}
		
		
		/**
		 * Update the information elements in the display
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnUpdateInfo ( oSettings )
		{
			/* Show information about the table */
			if ( !oSettings.oFeatures.bInfo || oSettings.aanFeatures.i.length === 0 )
			{
				return;
			}
			
			var
				oLang = oSettings.oLanguage,
				iStart = oSettings._iDisplayStart+1,
				iEnd = oSettings.fnDisplayEnd(),
				iMax = oSettings.fnRecordsTotal(),
				iTotal = oSettings.fnRecordsDisplay(),
				sOut;
			
			if ( iTotal === 0 )
			{
				/* Empty record set */
				sOut = oLang.sInfoEmpty;
			}
			else {
				/* Normal record set */
				sOut = oLang.sInfo;
			}
		
			if ( iTotal != iMax )
			{
				/* Record set after filtering */
				sOut += ' ' + oLang.sInfoFiltered;
			}
		
			// Convert the macros
			sOut += oLang.sInfoPostFix;
			sOut = _fnInfoMacros( oSettings, sOut );
			
			if ( oLang.fnInfoCallback !== null )
			{
				sOut = oLang.fnInfoCallback.call( oSettings.oInstance, 
					oSettings, iStart, iEnd, iMax, iTotal, sOut );
			}
			
			var n = oSettings.aanFeatures.i;
			for ( var i=0, iLen=n.length ; i<iLen ; i++ )
			{
				$(n[i]).html( sOut );
			}
		}
		
		
		function _fnInfoMacros ( oSettings, str )
		{
			var
				iStart = oSettings._iDisplayStart+1,
				sStart = oSettings.fnFormatNumber( iStart ),
				iEnd = oSettings.fnDisplayEnd(),
				sEnd = oSettings.fnFormatNumber( iEnd ),
				iTotal = oSettings.fnRecordsDisplay(),
				sTotal = oSettings.fnFormatNumber( iTotal ),
				iMax = oSettings.fnRecordsTotal(),
				sMax = oSettings.fnFormatNumber( iMax );
		
			// When infinite scrolling, we are always starting at 1. _iDisplayStart is used only
			// internally
			if ( oSettings.oScroll.bInfinite )
			{
				sStart = oSettings.fnFormatNumber( 1 );
			}
		
			return str.
				replace(/_START_/g, sStart).
				replace(/_END_/g,   sEnd).
				replace(/_TOTAL_/g, sTotal).
				replace(/_MAX_/g,   sMax);
		}
		
		
		
		/**
		 * Draw the table for the first time, adding all required features
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnInitialise ( oSettings )
		{
			var i, iLen, iAjaxStart=oSettings.iInitDisplayStart;
			
			/* Ensure that the table data is fully initialised */
			if ( oSettings.bInitialised === false )
			{
				setTimeout( function(){ _fnInitialise( oSettings ); }, 200 );
				return;
			}
			
			/* Show the display HTML options */
			_fnAddOptionsHtml( oSettings );
			
			/* Build and draw the header / footer for the table */
			_fnBuildHead( oSettings );
			_fnDrawHead( oSettings, oSettings.aoHeader );
			if ( oSettings.nTFoot )
			{
				_fnDrawHead( oSettings, oSettings.aoFooter );
			}
		
			/* Okay to show that something is going on now */
			_fnProcessingDisplay( oSettings, true );
			
			/* Calculate sizes for columns */
			if ( oSettings.oFeatures.bAutoWidth )
			{
				_fnCalculateColumnWidths( oSettings );
			}
			
			for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
			{
				if ( oSettings.aoColumns[i].sWidth !== null )
				{
					oSettings.aoColumns[i].nTh.style.width = _fnStringToCss( oSettings.aoColumns[i].sWidth );
				}
			}
			
			/* If there is default sorting required - let's do it. The sort function will do the
			 * drawing for us. Otherwise we draw the table regardless of the Ajax source - this allows
			 * the table to look initialised for Ajax sourcing data (show 'loading' message possibly)
			 */
			if ( oSettings.oFeatures.bSort )
			{
				_fnSort( oSettings );
			}
			else if ( oSettings.oFeatures.bFilter )
			{
				_fnFilterComplete( oSettings, oSettings.oPreviousSearch );
			}
			else
			{
				oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
				_fnCalculateEnd( oSettings );
				_fnDraw( oSettings );
			}
			
			/* if there is an ajax source load the data */
			if ( oSettings.sAjaxSource !== null && !oSettings.oFeatures.bServerSide )
			{
				var aoData = [];
				_fnServerParams( oSettings, aoData );
				oSettings.fnServerData.call( oSettings.oInstance, oSettings.sAjaxSource, aoData, function(json) {
					var aData = (oSettings.sAjaxDataProp !== "") ?
					 	_fnGetObjectDataFn( oSettings.sAjaxDataProp )(json) : json;
		
					/* Got the data - add it to the table */
					for ( i=0 ; i<aData.length ; i++ )
					{
						_fnAddData( oSettings, aData[i] );
					}
					
					/* Reset the init display for cookie saving. We've already done a filter, and
					 * therefore cleared it before. So we need to make it appear 'fresh'
					 */
					oSettings.iInitDisplayStart = iAjaxStart;
					
					if ( oSettings.oFeatures.bSort )
					{
						_fnSort( oSettings );
					}
					else
					{
						oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
						_fnCalculateEnd( oSettings );
						_fnDraw( oSettings );
					}
					
					_fnProcessingDisplay( oSettings, false );
					_fnInitComplete( oSettings, json );
				}, oSettings );
				return;
			}
			
			/* Server-side processing initialisation complete is done at the end of _fnDraw */
			if ( !oSettings.oFeatures.bServerSide )
			{
				_fnProcessingDisplay( oSettings, false );
				_fnInitComplete( oSettings );
			}
		}
		
		
		/**
		 * Draw the table for the first time, adding all required features
		 *  @param {object} oSettings dataTables settings object
		 *  @param {object} [json] JSON from the server that completed the table, if using Ajax source
		 *    with client-side processing (optional)
		 *  @memberof DataTable#oApi
		 */
		function _fnInitComplete ( oSettings, json )
		{
			oSettings._bInitComplete = true;
			_fnCallbackFire( oSettings, 'aoInitComplete', 'init', [oSettings, json] );
		}
		
		
		/**
		 * Language compatibility - when certain options are given, and others aren't, we
		 * need to duplicate the values over, in order to provide backwards compatibility
		 * with older language files.
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnLanguageCompat( oLanguage )
		{
			var oDefaults = DataTable.defaults.oLanguage;
		
			/* Backwards compatibility - if there is no sEmptyTable given, then use the same as
			 * sZeroRecords - assuming that is given.
			 */
			if ( !oLanguage.sEmptyTable && oLanguage.sZeroRecords &&
				oDefaults.sEmptyTable === "No data available in table" )
			{
				_fnMap( oLanguage, oLanguage, 'sZeroRecords', 'sEmptyTable' );
			}
		
			/* Likewise with loading records */
			if ( !oLanguage.sLoadingRecords && oLanguage.sZeroRecords &&
				oDefaults.sLoadingRecords === "Loading..." )
			{
				_fnMap( oLanguage, oLanguage, 'sZeroRecords', 'sLoadingRecords' );
			}
		}
		
		
		
		/**
		 * Generate the node required for user display length changing
		 *  @param {object} oSettings dataTables settings object
		 *  @returns {node} Display length feature node
		 *  @memberof DataTable#oApi
		 */
		function _fnFeatureHtmlLength ( oSettings )
		{
			if ( oSettings.oScroll.bInfinite )
			{
				return null;
			}
			
			/* This can be overruled by not using the _MENU_ var/macro in the language variable */
			var sName = 'name="'+oSettings.sTableId+'_length"';
			var sStdMenu = '<select size="1" '+sName+'>';
			var i, iLen;
			var aLengthMenu = oSettings.aLengthMenu;
			
			if ( aLengthMenu.length == 2 && typeof aLengthMenu[0] === 'object' && 
					typeof aLengthMenu[1] === 'object' )
			{
				for ( i=0, iLen=aLengthMenu[0].length ; i<iLen ; i++ )
				{
					sStdMenu += '<option value="'+aLengthMenu[0][i]+'">'+aLengthMenu[1][i]+'</option>';
				}
			}
			else
			{
				for ( i=0, iLen=aLengthMenu.length ; i<iLen ; i++ )
				{
					sStdMenu += '<option value="'+aLengthMenu[i]+'">'+aLengthMenu[i]+'</option>';
				}
			}
			sStdMenu += '</select>';
			
			var nLength = document.createElement( 'div' );
			if ( !oSettings.aanFeatures.l )
			{
				nLength.id = oSettings.sTableId+'_length';
			}
			nLength.className = oSettings.oClasses.sLength;
			nLength.innerHTML = '<label>'+oSettings.oLanguage.sLengthMenu.replace( '_MENU_', sStdMenu )+'</label>';
			
			/*
			 * Set the length to the current display length - thanks to Andrea Pavlovic for this fix,
			 * and Stefan Skopnik for fixing the fix!
			 */
			$('select option[value="'+oSettings._iDisplayLength+'"]', nLength).attr("selected", true);
			
			$('select', nLength).bind( 'change.DT', function(e) {
				var iVal = $(this).val();
				
				/* Update all other length options for the new display */
				var n = oSettings.aanFeatures.l;
				for ( i=0, iLen=n.length ; i<iLen ; i++ )
				{
					if ( n[i] != this.parentNode )
					{
						$('select', n[i]).val( iVal );
					}
				}
				
				/* Redraw the table */
				oSettings._iDisplayLength = parseInt(iVal, 10);
				_fnCalculateEnd( oSettings );
				
				/* If we have space to show extra rows (backing up from the end point - then do so */
				if ( oSettings.fnDisplayEnd() == oSettings.fnRecordsDisplay() )
				{
					oSettings._iDisplayStart = oSettings.fnDisplayEnd() - oSettings._iDisplayLength;
					if ( oSettings._iDisplayStart < 0 )
					{
						oSettings._iDisplayStart = 0;
					}
				}
				
				if ( oSettings._iDisplayLength == -1 )
				{
					oSettings._iDisplayStart = 0;
				}
				
				_fnDraw( oSettings );
			} );
		
		
			$('select', nLength).attr('aria-controls', oSettings.sTableId);
			
			return nLength;
		}
		
		
		/**
		 * Recalculate the end point based on the start point
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnCalculateEnd( oSettings )
		{
			if ( oSettings.oFeatures.bPaginate === false )
			{
				oSettings._iDisplayEnd = oSettings.aiDisplay.length;
			}
			else
			{
				/* Set the end point of the display - based on how many elements there are
				 * still to display
				 */
				if ( oSettings._iDisplayStart + oSettings._iDisplayLength > oSettings.aiDisplay.length ||
					   oSettings._iDisplayLength == -1 )
				{
					oSettings._iDisplayEnd = oSettings.aiDisplay.length;
				}
				else
				{
					oSettings._iDisplayEnd = oSettings._iDisplayStart + oSettings._iDisplayLength;
				}
			}
		}
		
		
		
		/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
		 * Note that most of the paging logic is done in 
		 * DataTable.ext.oPagination
		 */
		
		/**
		 * Generate the node required for default pagination
		 *  @param {object} oSettings dataTables settings object
		 *  @returns {node} Pagination feature node
		 *  @memberof DataTable#oApi
		 */
		function _fnFeatureHtmlPaginate ( oSettings )
		{
			if ( oSettings.oScroll.bInfinite )
			{
				return null;
			}
			
			var nPaginate = document.createElement( 'div' );
			nPaginate.className = oSettings.oClasses.sPaging+oSettings.sPaginationType;
			
			DataTable.ext.oPagination[ oSettings.sPaginationType ].fnInit( oSettings, nPaginate, 
				function( oSettings ) {
					_fnCalculateEnd( oSettings );
					_fnDraw( oSettings );
				}
			);
			
			/* Add a draw callback for the pagination on first instance, to update the paging display */
			if ( !oSettings.aanFeatures.p )
			{
				oSettings.aoDrawCallback.push( {
					"fn": function( oSettings ) {
						DataTable.ext.oPagination[ oSettings.sPaginationType ].fnUpdate( oSettings, function( oSettings ) {
							_fnCalculateEnd( oSettings );
							_fnDraw( oSettings );
						} );
					},
					"sName": "pagination"
				} );
			}
			return nPaginate;
		}
		
		
		/**
		 * Alter the display settings to change the page
		 *  @param {object} oSettings dataTables settings object
		 *  @param {string|int} mAction Paging action to take: "first", "previous", "next" or "last"
		 *    or page number to jump to (integer)
		 *  @returns {bool} true page has changed, false - no change (no effect) eg 'first' on page 1
		 *  @memberof DataTable#oApi
		 */
		function _fnPageChange ( oSettings, mAction )
		{
			var iOldStart = oSettings._iDisplayStart;
			
			if ( typeof mAction === "number" )
			{
				oSettings._iDisplayStart = mAction * oSettings._iDisplayLength;
				if ( oSettings._iDisplayStart > oSettings.fnRecordsDisplay() )
				{
					oSettings._iDisplayStart = 0;
				}
			}
			else if ( mAction == "first" )
			{
				oSettings._iDisplayStart = 0;
			}
			else if ( mAction == "previous" )
			{
				oSettings._iDisplayStart = oSettings._iDisplayLength>=0 ?
					oSettings._iDisplayStart - oSettings._iDisplayLength :
					0;
				
				/* Correct for under-run */
				if ( oSettings._iDisplayStart < 0 )
				{
				  oSettings._iDisplayStart = 0;
				}
			}
			else if ( mAction == "next" )
			{
				if ( oSettings._iDisplayLength >= 0 )
				{
					/* Make sure we are not over running the display array */
					if ( oSettings._iDisplayStart + oSettings._iDisplayLength < oSettings.fnRecordsDisplay() )
					{
						oSettings._iDisplayStart += oSettings._iDisplayLength;
					}
				}
				else
				{
					oSettings._iDisplayStart = 0;
				}
			}
			else if ( mAction == "last" )
			{
				if ( oSettings._iDisplayLength >= 0 )
				{
					var iPages = parseInt( (oSettings.fnRecordsDisplay()-1) / oSettings._iDisplayLength, 10 ) + 1;
					oSettings._iDisplayStart = (iPages-1) * oSettings._iDisplayLength;
				}
				else
				{
					oSettings._iDisplayStart = 0;
				}
			}
			else
			{
				_fnLog( oSettings, 0, "Unknown paging action: "+mAction );
			}
			$(oSettings.oInstance).trigger('page', oSettings);
			
			return iOldStart != oSettings._iDisplayStart;
		}
		
		
		
		/**
		 * Generate the node required for the processing node
		 *  @param {object} oSettings dataTables settings object
		 *  @returns {node} Processing element
		 *  @memberof DataTable#oApi
		 */
		function _fnFeatureHtmlProcessing ( oSettings )
		{
			var nProcessing = document.createElement( 'div' );
			
			if ( !oSettings.aanFeatures.r )
			{
				nProcessing.id = oSettings.sTableId+'_processing';
			}
			nProcessing.innerHTML = oSettings.oLanguage.sProcessing;
			nProcessing.className = oSettings.oClasses.sProcessing;
			oSettings.nTable.parentNode.insertBefore( nProcessing, oSettings.nTable );
			
			return nProcessing;
		}
		
		
		/**
		 * Display or hide the processing indicator
		 *  @param {object} oSettings dataTables settings object
		 *  @param {bool} bShow Show the processing indicator (true) or not (false)
		 *  @memberof DataTable#oApi
		 */
		function _fnProcessingDisplay ( oSettings, bShow )
		{
			if ( oSettings.oFeatures.bProcessing )
			{
				var an = oSettings.aanFeatures.r;
				for ( var i=0, iLen=an.length ; i<iLen ; i++ )
				{
					an[i].style.visibility = bShow ? "visible" : "hidden";
				}
			}
		
			$(oSettings.oInstance).trigger('processing', [oSettings, bShow]);
		}
		
		/**
		 * Add any control elements for the table - specifically scrolling
		 *  @param {object} oSettings dataTables settings object
		 *  @returns {node} Node to add to the DOM
		 *  @memberof DataTable#oApi
		 */
		function _fnFeatureHtmlTable ( oSettings )
		{
			/* Check if scrolling is enabled or not - if not then leave the DOM unaltered */
			if ( oSettings.oScroll.sX === "" && oSettings.oScroll.sY === "" )
			{
				return oSettings.nTable;
			}
			
			/*
			 * The HTML structure that we want to generate in this function is:
			 *  div - nScroller
			 *    div - nScrollHead
			 *      div - nScrollHeadInner
			 *        table - nScrollHeadTable
			 *          thead - nThead
			 *    div - nScrollBody
			 *      table - oSettings.nTable
			 *        thead - nTheadSize
			 *        tbody - nTbody
			 *    div - nScrollFoot
			 *      div - nScrollFootInner
			 *        table - nScrollFootTable
			 *          tfoot - nTfoot
			 */
			var
			 	nScroller = document.createElement('div'),
			 	nScrollHead = document.createElement('div'),
			 	nScrollHeadInner = document.createElement('div'),
			 	nScrollBody = document.createElement('div'),
			 	nScrollFoot = document.createElement('div'),
			 	nScrollFootInner = document.createElement('div'),
			 	nScrollHeadTable = oSettings.nTable.cloneNode(false),
			 	nScrollFootTable = oSettings.nTable.cloneNode(false),
				nThead = oSettings.nTable.getElementsByTagName('thead')[0],
			 	nTfoot = oSettings.nTable.getElementsByTagName('tfoot').length === 0 ? null : 
					oSettings.nTable.getElementsByTagName('tfoot')[0],
				oClasses = oSettings.oClasses;
			
			nScrollHead.appendChild( nScrollHeadInner );
			nScrollFoot.appendChild( nScrollFootInner );
			nScrollBody.appendChild( oSettings.nTable );
			nScroller.appendChild( nScrollHead );
			nScroller.appendChild( nScrollBody );
			nScrollHeadInner.appendChild( nScrollHeadTable );
			nScrollHeadTable.appendChild( nThead );
			if ( nTfoot !== null )
			{
				nScroller.appendChild( nScrollFoot );
				nScrollFootInner.appendChild( nScrollFootTable );
				nScrollFootTable.appendChild( nTfoot );
			}
			
			nScroller.className = oClasses.sScrollWrapper;
			nScrollHead.className = oClasses.sScrollHead;
			nScrollHeadInner.className = oClasses.sScrollHeadInner;
			nScrollBody.className = oClasses.sScrollBody;
			nScrollFoot.className = oClasses.sScrollFoot;
			nScrollFootInner.className = oClasses.sScrollFootInner;
			
			if ( oSettings.oScroll.bAutoCss )
			{
				nScrollHead.style.overflow = "hidden";
				nScrollHead.style.position = "relative";
				nScrollFoot.style.overflow = "hidden";
				nScrollBody.style.overflow = "auto";
			}
			
			nScrollHead.style.border = "0";
			nScrollHead.style.width = "100%";
			nScrollFoot.style.border = "0";
			nScrollHeadInner.style.width = oSettings.oScroll.sXInner !== "" ?
				oSettings.oScroll.sXInner : "100%"; /* will be overwritten */
			
			/* Modify attributes to respect the clones */
			nScrollHeadTable.removeAttribute('id');
			nScrollHeadTable.style.marginLeft = "0";
			oSettings.nTable.style.marginLeft = "0";
			if ( nTfoot !== null )
			{
				nScrollFootTable.removeAttribute('id');
				nScrollFootTable.style.marginLeft = "0";
			}
			
			/* Move caption elements from the body to the header, footer or leave where it is
			 * depending on the configuration. Note that the DTD says there can be only one caption */
			var nCaption = $(oSettings.nTable).children('caption');
			if ( nCaption.length > 0 )
			{
				nCaption = nCaption[0];
				if ( nCaption._captionSide === "top" )
				{
					nScrollHeadTable.appendChild( nCaption );
				}
				else if ( nCaption._captionSide === "bottom" && nTfoot )
				{
					nScrollFootTable.appendChild( nCaption );
				}
			}
			
			/*
			 * Sizing
			 */
			/* When x-scrolling add the width and a scroller to move the header with the body */
			if ( oSettings.oScroll.sX !== "" )
			{
				nScrollHead.style.width = _fnStringToCss( oSettings.oScroll.sX );
				nScrollBody.style.width = _fnStringToCss( oSettings.oScroll.sX );
				
				if ( nTfoot !== null )
				{
					nScrollFoot.style.width = _fnStringToCss( oSettings.oScroll.sX );	
				}
				
				/* When the body is scrolled, then we also want to scroll the headers */
				$(nScrollBody).scroll( function (e) {
					nScrollHead.scrollLeft = this.scrollLeft;
					
					if ( nTfoot !== null )
					{
						nScrollFoot.scrollLeft = this.scrollLeft;
					}
				} );
			}
			
			/* When yscrolling, add the height */
			if ( oSettings.oScroll.sY !== "" )
			{
				nScrollBody.style.height = _fnStringToCss( oSettings.oScroll.sY );
			}
			
			/* Redraw - align columns across the tables */
			oSettings.aoDrawCallback.push( {
				"fn": _fnScrollDraw,
				"sName": "scrolling"
			} );
			
			/* Infinite scrolling event handlers */
			if ( oSettings.oScroll.bInfinite )
			{
				$(nScrollBody).scroll( function() {
					/* Use a blocker to stop scrolling from loading more data while other data is still loading */
					if ( !oSettings.bDrawing && $(this).scrollTop() !== 0 )
					{
						/* Check if we should load the next data set */
						if ( $(this).scrollTop() + $(this).height() > 
							$(oSettings.nTable).height() - oSettings.oScroll.iLoadGap )
						{
							/* Only do the redraw if we have to - we might be at the end of the data */
							if ( oSettings.fnDisplayEnd() < oSettings.fnRecordsDisplay() )
							{
								_fnPageChange( oSettings, 'next' );
								_fnCalculateEnd( oSettings );
								_fnDraw( oSettings );
							}
						}
					}
				} );
			}
			
			oSettings.nScrollHead = nScrollHead;
			oSettings.nScrollFoot = nScrollFoot;
			
			return nScroller;
		}
		
		
		/**
		 * Update the various tables for resizing. It's a bit of a pig this function, but
		 * basically the idea to:
		 *   1. Re-create the table inside the scrolling div
		 *   2. Take live measurements from the DOM
		 *   3. Apply the measurements
		 *   4. Clean up
		 *  @param {object} o dataTables settings object
		 *  @returns {node} Node to add to the DOM
		 *  @memberof DataTable#oApi
		 */
		function _fnScrollDraw ( o )
		{
			var
				nScrollHeadInner = o.nScrollHead.getElementsByTagName('div')[0],
				nScrollHeadTable = nScrollHeadInner.getElementsByTagName('table')[0],
				nScrollBody = o.nTable.parentNode,
				i, iLen, j, jLen, anHeadToSize, anHeadSizers, anFootSizers, anFootToSize, oStyle, iVis,
				nTheadSize, nTfootSize,
				iWidth, aApplied=[], aAppliedFooter=[], iSanityWidth,
				nScrollFootInner = (o.nTFoot !== null) ? o.nScrollFoot.getElementsByTagName('div')[0] : null,
				nScrollFootTable = (o.nTFoot !== null) ? nScrollFootInner.getElementsByTagName('table')[0] : null,
				ie67 = o.oBrowser.bScrollOversize,
				zeroOut = function(nSizer) {
					oStyle = nSizer.style;
					oStyle.paddingTop = "0";
					oStyle.paddingBottom = "0";
					oStyle.borderTopWidth = "0";
					oStyle.borderBottomWidth = "0";
					oStyle.height = 0;
				};
			
			/*
			 * 1. Re-create the table inside the scrolling div
			 */
			
			/* Remove the old minimised thead and tfoot elements in the inner table */
			$(o.nTable).children('thead, tfoot').remove();
		
			/* Clone the current header and footer elements and then place it into the inner table */
			nTheadSize = $(o.nTHead).clone()[0];
			o.nTable.insertBefore( nTheadSize, o.nTable.childNodes[0] );
			anHeadToSize = o.nTHead.getElementsByTagName('tr');
			anHeadSizers = nTheadSize.getElementsByTagName('tr');
			
			if ( o.nTFoot !== null )
			{
				nTfootSize = $(o.nTFoot).clone()[0];
				o.nTable.insertBefore( nTfootSize, o.nTable.childNodes[1] );
				anFootToSize = o.nTFoot.getElementsByTagName('tr');
				anFootSizers = nTfootSize.getElementsByTagName('tr');
			}
			
			/*
			 * 2. Take live measurements from the DOM - do not alter the DOM itself!
			 */
			
			/* Remove old sizing and apply the calculated column widths
			 * Get the unique column headers in the newly created (cloned) header. We want to apply the
			 * calculated sizes to this header
			 */
			if ( o.oScroll.sX === "" )
			{
				nScrollBody.style.width = '100%';
				nScrollHeadInner.parentNode.style.width = '100%';
			}
			
			var nThs = _fnGetUniqueThs( o, nTheadSize );
			for ( i=0, iLen=nThs.length ; i<iLen ; i++ )
			{
				iVis = _fnVisibleToColumnIndex( o, i );
				nThs[i].style.width = o.aoColumns[iVis].sWidth;
			}
			
			if ( o.nTFoot !== null )
			{
				_fnApplyToChildren( function(n) {
					n.style.width = "";
				}, anFootSizers );
			}
		
			// If scroll collapse is enabled, when we put the headers back into the body for sizing, we
			// will end up forcing the scrollbar to appear, making our measurements wrong for when we
			// then hide it (end of this function), so add the header height to the body scroller.
			if ( o.oScroll.bCollapse && o.oScroll.sY !== "" )
			{
				nScrollBody.style.height = (nScrollBody.offsetHeight + o.nTHead.offsetHeight)+"px";
			}
			
			/* Size the table as a whole */
			iSanityWidth = $(o.nTable).outerWidth();
			if ( o.oScroll.sX === "" )
			{
				/* No x scrolling */
				o.nTable.style.width = "100%";
				
				/* I know this is rubbish - but IE7 will make the width of the table when 100% include
				 * the scrollbar - which is shouldn't. When there is a scrollbar we need to take this
				 * into account.
				 */
				if ( ie67 && ($('tbody', nScrollBody).height() > nScrollBody.offsetHeight || 
					$(nScrollBody).css('overflow-y') == "scroll")  )
				{
					o.nTable.style.width = _fnStringToCss( $(o.nTable).outerWidth() - o.oScroll.iBarWidth);
				}
			}
			else
			{
				if ( o.oScroll.sXInner !== "" )
				{
					/* x scroll inner has been given - use it */
					o.nTable.style.width = _fnStringToCss(o.oScroll.sXInner);
				}
				else if ( iSanityWidth == $(nScrollBody).width() &&
				   $(nScrollBody).height() < $(o.nTable).height() )
				{
					/* There is y-scrolling - try to take account of the y scroll bar */
					o.nTable.style.width = _fnStringToCss( iSanityWidth-o.oScroll.iBarWidth );
					if ( $(o.nTable).outerWidth() > iSanityWidth-o.oScroll.iBarWidth )
					{
						/* Not possible to take account of it */
						o.nTable.style.width = _fnStringToCss( iSanityWidth );
					}
				}
				else
				{
					/* All else fails */
					o.nTable.style.width = _fnStringToCss( iSanityWidth );
				}
			}
			
			/* Recalculate the sanity width - now that we've applied the required width, before it was
			 * a temporary variable. This is required because the column width calculation is done
			 * before this table DOM is created.
			 */
			iSanityWidth = $(o.nTable).outerWidth();
			
			/* We want the hidden header to have zero height, so remove padding and borders. Then
			 * set the width based on the real headers
			 */
			
			// Apply all styles in one pass. Invalidates layout only once because we don't read any 
			// DOM properties.
			_fnApplyToChildren( zeroOut, anHeadSizers );
			 
			// Read all widths in next pass. Forces layout only once because we do not change 
			// any DOM properties.
			_fnApplyToChildren( function(nSizer) {
				aApplied.push( _fnStringToCss( $(nSizer).width() ) );
			}, anHeadSizers );
			 
			// Apply all widths in final pass. Invalidates layout only once because we do not
			// read any DOM properties.
			_fnApplyToChildren( function(nToSize, i) {
				nToSize.style.width = aApplied[i];
			}, anHeadToSize );
		
			$(anHeadSizers).height(0);
			
			/* Same again with the footer if we have one */
			if ( o.nTFoot !== null )
			{
				_fnApplyToChildren( zeroOut, anFootSizers );
				 
				_fnApplyToChildren( function(nSizer) {
					aAppliedFooter.push( _fnStringToCss( $(nSizer).width() ) );
				}, anFootSizers );
				 
				_fnApplyToChildren( function(nToSize, i) {
					nToSize.style.width = aAppliedFooter[i];
				}, anFootToSize );
		
				$(anFootSizers).height(0);
			}
			
			/*
			 * 3. Apply the measurements
			 */
			
			/* "Hide" the header and footer that we used for the sizing. We want to also fix their width
			 * to what they currently are
			 */
			_fnApplyToChildren( function(nSizer, i) {
				nSizer.innerHTML = "";
				nSizer.style.width = aApplied[i];
			}, anHeadSizers );
			
			if ( o.nTFoot !== null )
			{
				_fnApplyToChildren( function(nSizer, i) {
					nSizer.innerHTML = "";
					nSizer.style.width = aAppliedFooter[i];
				}, anFootSizers );
			}
			
			/* Sanity check that the table is of a sensible width. If not then we are going to get
			 * misalignment - try to prevent this by not allowing the table to shrink below its min width
			 */
			if ( $(o.nTable).outerWidth() < iSanityWidth )
			{
				/* The min width depends upon if we have a vertical scrollbar visible or not */
				var iCorrection = ((nScrollBody.scrollHeight > nScrollBody.offsetHeight || 
					$(nScrollBody).css('overflow-y') == "scroll")) ?
						iSanityWidth+o.oScroll.iBarWidth : iSanityWidth;
				
				/* IE6/7 are a law unto themselves... */
				if ( ie67 && (nScrollBody.scrollHeight > 
					nScrollBody.offsetHeight || $(nScrollBody).css('overflow-y') == "scroll")  )
				{
					o.nTable.style.width = _fnStringToCss( iCorrection-o.oScroll.iBarWidth );
				}
				
				/* Apply the calculated minimum width to the table wrappers */
				nScrollBody.style.width = _fnStringToCss( iCorrection );
				o.nScrollHead.style.width = _fnStringToCss( iCorrection );
				
				if ( o.nTFoot !== null )
				{
					o.nScrollFoot.style.width = _fnStringToCss( iCorrection );
				}
				
				/* And give the user a warning that we've stopped the table getting too small */
				if ( o.oScroll.sX === "" )
				{
					_fnLog( o, 1, "The table cannot fit into the current element which will cause column"+
						" misalignment. The table has been drawn at its minimum possible width." );
				}
				else if ( o.oScroll.sXInner !== "" )
				{
					_fnLog( o, 1, "The table cannot fit into the current element which will cause column"+
						" misalignment. Increase the sScrollXInner value or remove it to allow automatic"+
						" calculation" );
				}
			}
			else
			{
				nScrollBody.style.width = _fnStringToCss( '100%' );
				o.nScrollHead.style.width = _fnStringToCss( '100%' );
				
				if ( o.nTFoot !== null )
				{
					o.nScrollFoot.style.width = _fnStringToCss( '100%' );
				}
			}
			
			
			/*
			 * 4. Clean up
			 */
			if ( o.oScroll.sY === "" )
			{
				/* IE7< puts a vertical scrollbar in place (when it shouldn't be) due to subtracting
				 * the scrollbar height from the visible display, rather than adding it on. We need to
				 * set the height in order to sort this. Don't want to do it in any other browsers.
				 */
				if ( ie67 )
				{
					nScrollBody.style.height = _fnStringToCss( o.nTable.offsetHeight+o.oScroll.iBarWidth );
				}
			}
			
			if ( o.oScroll.sY !== "" && o.oScroll.bCollapse )
			{
				nScrollBody.style.height = _fnStringToCss( o.oScroll.sY );
				
				var iExtra = (o.oScroll.sX !== "" && o.nTable.offsetWidth > nScrollBody.offsetWidth) ?
				 	o.oScroll.iBarWidth : 0;
				if ( o.nTable.offsetHeight < nScrollBody.offsetHeight )
				{
					nScrollBody.style.height = _fnStringToCss( o.nTable.offsetHeight+iExtra );
				}
			}
			
			/* Finally set the width's of the header and footer tables */
			var iOuterWidth = $(o.nTable).outerWidth();
			nScrollHeadTable.style.width = _fnStringToCss( iOuterWidth );
			nScrollHeadInner.style.width = _fnStringToCss( iOuterWidth );
		
			// Figure out if there are scrollbar present - if so then we need a the header and footer to
			// provide a bit more space to allow "overflow" scrolling (i.e. past the scrollbar)
			var bScrolling = $(o.nTable).height() > nScrollBody.clientHeight || $(nScrollBody).css('overflow-y') == "scroll";
			nScrollHeadInner.style.paddingRight = bScrolling ? o.oScroll.iBarWidth+"px" : "0px";
			
			if ( o.nTFoot !== null )
			{
				nScrollFootTable.style.width = _fnStringToCss( iOuterWidth );
				nScrollFootInner.style.width = _fnStringToCss( iOuterWidth );
				nScrollFootInner.style.paddingRight = bScrolling ? o.oScroll.iBarWidth+"px" : "0px";
			}
		
			/* Adjust the position of the header in case we loose the y-scrollbar */
			$(nScrollBody).scroll();
			
			/* If sorting or filtering has occurred, jump the scrolling back to the top */
			if ( o.bSorted || o.bFiltered )
			{
				nScrollBody.scrollTop = 0;
			}
		}
		
		
		/**
		 * Apply a given function to the display child nodes of an element array (typically
		 * TD children of TR rows
		 *  @param {function} fn Method to apply to the objects
		 *  @param array {nodes} an1 List of elements to look through for display children
		 *  @param array {nodes} an2 Another list (identical structure to the first) - optional
		 *  @memberof DataTable#oApi
		 */
		function _fnApplyToChildren( fn, an1, an2 )
		{
			var index=0, i=0, iLen=an1.length;
			var nNode1, nNode2;
		
			while ( i < iLen )
			{
				nNode1 = an1[i].firstChild;
				nNode2 = an2 ? an2[i].firstChild : null;
				while ( nNode1 )
				{
					if ( nNode1.nodeType === 1 )
					{
						if ( an2 )
						{
							fn( nNode1, nNode2, index );
						}
						else
						{
							fn( nNode1, index );
						}
						index++;
					}
					nNode1 = nNode1.nextSibling;
					nNode2 = an2 ? nNode2.nextSibling : null;
				}
				i++;
			}
		}
		
		/**
		 * Convert a CSS unit width to pixels (e.g. 2em)
		 *  @param {string} sWidth width to be converted
		 *  @param {node} nParent parent to get the with for (required for relative widths) - optional
		 *  @returns {int} iWidth width in pixels
		 *  @memberof DataTable#oApi
		 */
		function _fnConvertToWidth ( sWidth, nParent )
		{
			if ( !sWidth || sWidth === null || sWidth === '' )
			{
				return 0;
			}
			
			if ( !nParent )
			{
				nParent = document.body;
			}
			
			var iWidth;
			var nTmp = document.createElement( "div" );
			nTmp.style.width = _fnStringToCss( sWidth );
			
			nParent.appendChild( nTmp );
			iWidth = nTmp.offsetWidth;
			nParent.removeChild( nTmp );
			
			return ( iWidth );
		}
		
		
		/**
		 * Calculate the width of columns for the table
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnCalculateColumnWidths ( oSettings )
		{
			var iTableWidth = oSettings.nTable.offsetWidth;
			var iUserInputs = 0;
			var iTmpWidth;
			var iVisibleColumns = 0;
			var iColums = oSettings.aoColumns.length;
			var i, iIndex, iCorrector, iWidth;
			var oHeaders = $('th', oSettings.nTHead);
			var widthAttr = oSettings.nTable.getAttribute('width');
			var nWrapper = oSettings.nTable.parentNode;
			
			/* Convert any user input sizes into pixel sizes */
			for ( i=0 ; i<iColums ; i++ )
			{
				if ( oSettings.aoColumns[i].bVisible )
				{
					iVisibleColumns++;
					
					if ( oSettings.aoColumns[i].sWidth !== null )
					{
						iTmpWidth = _fnConvertToWidth( oSettings.aoColumns[i].sWidthOrig, 
							nWrapper );
						if ( iTmpWidth !== null )
						{
							oSettings.aoColumns[i].sWidth = _fnStringToCss( iTmpWidth );
						}
							
						iUserInputs++;
					}
				}
			}
			
			/* If the number of columns in the DOM equals the number that we have to process in 
			 * DataTables, then we can use the offsets that are created by the web-browser. No custom 
			 * sizes can be set in order for this to happen, nor scrolling used
			 */
			if ( iColums == oHeaders.length && iUserInputs === 0 && iVisibleColumns == iColums &&
				oSettings.oScroll.sX === "" && oSettings.oScroll.sY === "" )
			{
				for ( i=0 ; i<oSettings.aoColumns.length ; i++ )
				{
					iTmpWidth = $(oHeaders[i]).width();
					if ( iTmpWidth !== null )
					{
						oSettings.aoColumns[i].sWidth = _fnStringToCss( iTmpWidth );
					}
				}
			}
			else
			{
				/* Otherwise we are going to have to do some calculations to get the width of each column.
				 * Construct a 1 row table with the widest node in the data, and any user defined widths,
				 * then insert it into the DOM and allow the browser to do all the hard work of
				 * calculating table widths.
				 */
				var
					nCalcTmp = oSettings.nTable.cloneNode( false ),
					nTheadClone = oSettings.nTHead.cloneNode(true),
					nBody = document.createElement( 'tbody' ),
					nTr = document.createElement( 'tr' ),
					nDivSizing;
				
				nCalcTmp.removeAttribute( "id" );
				nCalcTmp.appendChild( nTheadClone );
				if ( oSettings.nTFoot !== null )
				{
					nCalcTmp.appendChild( oSettings.nTFoot.cloneNode(true) );
					_fnApplyToChildren( function(n) {
						n.style.width = "";
					}, nCalcTmp.getElementsByTagName('tr') );
				}
				
				nCalcTmp.appendChild( nBody );
				nBody.appendChild( nTr );
				
				/* Remove any sizing that was previously applied by the styles */
				var jqColSizing = $('thead th', nCalcTmp);
				if ( jqColSizing.length === 0 )
				{
					jqColSizing = $('tbody tr:eq(0)>td', nCalcTmp);
				}
		
				/* Apply custom sizing to the cloned header */
				var nThs = _fnGetUniqueThs( oSettings, nTheadClone );
				iCorrector = 0;
				for ( i=0 ; i<iColums ; i++ )
				{
					var oColumn = oSettings.aoColumns[i];
					if ( oColumn.bVisible && oColumn.sWidthOrig !== null && oColumn.sWidthOrig !== "" )
					{
						nThs[i-iCorrector].style.width = _fnStringToCss( oColumn.sWidthOrig );
					}
					else if ( oColumn.bVisible )
					{
						nThs[i-iCorrector].style.width = "";
					}
					else
					{
						iCorrector++;
					}
				}
		
				/* Find the biggest td for each column and put it into the table */
				for ( i=0 ; i<iColums ; i++ )
				{
					if ( oSettings.aoColumns[i].bVisible )
					{
						var nTd = _fnGetWidestNode( oSettings, i );
						if ( nTd !== null )
						{
							nTd = nTd.cloneNode(true);
							if ( oSettings.aoColumns[i].sContentPadding !== "" )
							{
								nTd.innerHTML += oSettings.aoColumns[i].sContentPadding;
							}
							nTr.appendChild( nTd );
						}
					}
				}
				
				/* Build the table and 'display' it */
				nWrapper.appendChild( nCalcTmp );
				
				/* When scrolling (X or Y) we want to set the width of the table as appropriate. However,
				 * when not scrolling leave the table width as it is. This results in slightly different,
				 * but I think correct behaviour
				 */
				if ( oSettings.oScroll.sX !== "" && oSettings.oScroll.sXInner !== "" )
				{
					nCalcTmp.style.width = _fnStringToCss(oSettings.oScroll.sXInner);
				}
				else if ( oSettings.oScroll.sX !== "" )
				{
					nCalcTmp.style.width = "";
					if ( $(nCalcTmp).width() < nWrapper.offsetWidth )
					{
						nCalcTmp.style.width = _fnStringToCss( nWrapper.offsetWidth );
					}
				}
				else if ( oSettings.oScroll.sY !== "" )
				{
					nCalcTmp.style.width = _fnStringToCss( nWrapper.offsetWidth );
				}
				else if ( widthAttr )
				{
					nCalcTmp.style.width = _fnStringToCss( widthAttr );
				}
				nCalcTmp.style.visibility = "hidden";
				
				/* Scrolling considerations */
				_fnScrollingWidthAdjust( oSettings, nCalcTmp );
				
				/* Read the width's calculated by the browser and store them for use by the caller. We
				 * first of all try to use the elements in the body, but it is possible that there are
				 * no elements there, under which circumstances we use the header elements
				 */
				var oNodes = $("tbody tr:eq(0)", nCalcTmp).children();
				if ( oNodes.length === 0 )
				{
					oNodes = _fnGetUniqueThs( oSettings, $('thead', nCalcTmp)[0] );
				}
		
				/* Browsers need a bit of a hand when a width is assigned to any columns when 
				 * x-scrolling as they tend to collapse the table to the min-width, even if
				 * we sent the column widths. So we need to keep track of what the table width
				 * should be by summing the user given values, and the automatic values
				 */
				if ( oSettings.oScroll.sX !== "" )
				{
					var iTotal = 0;
					iCorrector = 0;
					for ( i=0 ; i<oSettings.aoColumns.length ; i++ )
					{
						if ( oSettings.aoColumns[i].bVisible )
						{
							if ( oSettings.aoColumns[i].sWidthOrig === null )
							{
								iTotal += $(oNodes[iCorrector]).outerWidth();
							}
							else
							{
								iTotal += parseInt(oSettings.aoColumns[i].sWidth.replace('px',''), 10) +
									($(oNodes[iCorrector]).outerWidth() - $(oNodes[iCorrector]).width());
							}
							iCorrector++;
						}
					}
					
					nCalcTmp.style.width = _fnStringToCss( iTotal );
					oSettings.nTable.style.width = _fnStringToCss( iTotal );
				}
		
				iCorrector = 0;
				for ( i=0 ; i<oSettings.aoColumns.length ; i++ )
				{
					if ( oSettings.aoColumns[i].bVisible )
					{
						iWidth = $(oNodes[iCorrector]).width();
						if ( iWidth !== null && iWidth > 0 )
						{
							oSettings.aoColumns[i].sWidth = _fnStringToCss( iWidth );
						}
						iCorrector++;
					}
				}
		
				var cssWidth = $(nCalcTmp).css('width');
				oSettings.nTable.style.width = (cssWidth.indexOf('%') !== -1) ?
				    cssWidth : _fnStringToCss( $(nCalcTmp).outerWidth() );
				nCalcTmp.parentNode.removeChild( nCalcTmp );
			}
		
			if ( widthAttr )
			{
				oSettings.nTable.style.width = _fnStringToCss( widthAttr );
			}
		}
		
		
		/**
		 * Adjust a table's width to take account of scrolling
		 *  @param {object} oSettings dataTables settings object
		 *  @param {node} n table node
		 *  @memberof DataTable#oApi
		 */
		function _fnScrollingWidthAdjust ( oSettings, n )
		{
			if ( oSettings.oScroll.sX === "" && oSettings.oScroll.sY !== "" )
			{
				/* When y-scrolling only, we want to remove the width of the scroll bar so the table
				 * + scroll bar will fit into the area avaialble.
				 */
				var iOrigWidth = $(n).width();
				n.style.width = _fnStringToCss( $(n).outerWidth()-oSettings.oScroll.iBarWidth );
			}
			else if ( oSettings.oScroll.sX !== "" )
			{
				/* When x-scrolling both ways, fix the table at it's current size, without adjusting */
				n.style.width = _fnStringToCss( $(n).outerWidth() );
			}
		}
		
		
		/**
		 * Get the widest node
		 *  @param {object} oSettings dataTables settings object
		 *  @param {int} iCol column of interest
		 *  @returns {node} widest table node
		 *  @memberof DataTable#oApi
		 */
		function _fnGetWidestNode( oSettings, iCol )
		{
			var iMaxIndex = _fnGetMaxLenString( oSettings, iCol );
			if ( iMaxIndex < 0 )
			{
				return null;
			}
		
			if ( oSettings.aoData[iMaxIndex].nTr === null )
			{
				var n = document.createElement('td');
				n.innerHTML = _fnGetCellData( oSettings, iMaxIndex, iCol, '' );
				return n;
			}
			return _fnGetTdNodes(oSettings, iMaxIndex)[iCol];
		}
		
		
		/**
		 * Get the maximum strlen for each data column
		 *  @param {object} oSettings dataTables settings object
		 *  @param {int} iCol column of interest
		 *  @returns {string} max string length for each column
		 *  @memberof DataTable#oApi
		 */
		function _fnGetMaxLenString( oSettings, iCol )
		{
			var iMax = -1;
			var iMaxIndex = -1;
			
			for ( var i=0 ; i<oSettings.aoData.length ; i++ )
			{
				var s = _fnGetCellData( oSettings, i, iCol, 'display' )+"";
				s = s.replace( /<.*?>/g, "" );
				if ( s.length > iMax )
				{
					iMax = s.length;
					iMaxIndex = i;
				}
			}
			
			return iMaxIndex;
		}
		
		
		/**
		 * Append a CSS unit (only if required) to a string
		 *  @param {array} aArray1 first array
		 *  @param {array} aArray2 second array
		 *  @returns {int} 0 if match, 1 if length is different, 2 if no match
		 *  @memberof DataTable#oApi
		 */
		function _fnStringToCss( s )
		{
			if ( s === null )
			{
				return "0px";
			}
			
			if ( typeof s == 'number' )
			{
				if ( s < 0 )
				{
					return "0px";
				}
				return s+"px";
			}
			
			/* Check if the last character is not 0-9 */
			var c = s.charCodeAt( s.length-1 );
			if (c < 0x30 || c > 0x39)
			{
				return s;
			}
			return s+"px";
		}
		
		
		/**
		 * Get the width of a scroll bar in this browser being used
		 *  @returns {int} width in pixels
		 *  @memberof DataTable#oApi
		 */
		function _fnScrollBarWidth ()
		{  
			var inner = document.createElement('p');
			var style = inner.style;
			style.width = "100%";
			style.height = "200px";
			style.padding = "0px";
			
			var outer = document.createElement('div');
			style = outer.style;
			style.position = "absolute";
			style.top = "0px";
			style.left = "0px";
			style.visibility = "hidden";
			style.width = "200px";
			style.height = "150px";
			style.padding = "0px";
			style.overflow = "hidden";
			outer.appendChild(inner);
			
			document.body.appendChild(outer);
			var w1 = inner.offsetWidth;
			outer.style.overflow = 'scroll';
			var w2 = inner.offsetWidth;
			if ( w1 == w2 )
			{
				w2 = outer.clientWidth;
			}
			
			document.body.removeChild(outer);
			return (w1 - w2);  
		}
		
		/**
		 * Change the order of the table
		 *  @param {object} oSettings dataTables settings object
		 *  @param {bool} bApplyClasses optional - should we apply classes or not
		 *  @memberof DataTable#oApi
		 */
		function _fnSort ( oSettings, bApplyClasses )
		{
			var
				i, iLen, j, jLen, k, kLen,
				sDataType, nTh,
				aaSort = [],
			 	aiOrig = [],
				oSort = DataTable.ext.oSort,
				aoData = oSettings.aoData,
				aoColumns = oSettings.aoColumns,
				oAria = oSettings.oLanguage.oAria;
			
			/* No sorting required if server-side or no sorting array */
			if ( !oSettings.oFeatures.bServerSide && 
				(oSettings.aaSorting.length !== 0 || oSettings.aaSortingFixed !== null) )
			{
				aaSort = ( oSettings.aaSortingFixed !== null ) ?
					oSettings.aaSortingFixed.concat( oSettings.aaSorting ) :
					oSettings.aaSorting.slice();
				
				/* If there is a sorting data type, and a function belonging to it, then we need to
				 * get the data from the developer's function and apply it for this column
				 */
				for ( i=0 ; i<aaSort.length ; i++ )
				{
					var iColumn = aaSort[i][0];
					var iVisColumn = _fnColumnIndexToVisible( oSettings, iColumn );
					sDataType = oSettings.aoColumns[ iColumn ].sSortDataType;
					if ( DataTable.ext.afnSortData[sDataType] )
					{
						var aData = DataTable.ext.afnSortData[sDataType].call( 
							oSettings.oInstance, oSettings, iColumn, iVisColumn
						);
						if ( aData.length === aoData.length )
						{
							for ( j=0, jLen=aoData.length ; j<jLen ; j++ )
							{
								_fnSetCellData( oSettings, j, iColumn, aData[j] );
							}
						}
						else
						{
							_fnLog( oSettings, 0, "Returned data sort array (col "+iColumn+") is the wrong length" );
						}
					}
				}
				
				/* Create a value - key array of the current row positions such that we can use their
				 * current position during the sort, if values match, in order to perform stable sorting
				 */
				for ( i=0, iLen=oSettings.aiDisplayMaster.length ; i<iLen ; i++ )
				{
					aiOrig[ oSettings.aiDisplayMaster[i] ] = i;
				}
		
				/* Build an internal data array which is specific to the sort, so we can get and prep
				 * the data to be sorted only once, rather than needing to do it every time the sorting
				 * function runs. This make the sorting function a very simple comparison
				 */
				var iSortLen = aaSort.length;
				var fnSortFormat, aDataSort;
				for ( i=0, iLen=aoData.length ; i<iLen ; i++ )
				{
					for ( j=0 ; j<iSortLen ; j++ )
					{
						aDataSort = aoColumns[ aaSort[j][0] ].aDataSort;
		
						for ( k=0, kLen=aDataSort.length ; k<kLen ; k++ )
						{
							sDataType = aoColumns[ aDataSort[k] ].sType;
							fnSortFormat = oSort[ (sDataType ? sDataType : 'string')+"-pre" ];
							
							aoData[i]._aSortData[ aDataSort[k] ] = fnSortFormat ?
								fnSortFormat( _fnGetCellData( oSettings, i, aDataSort[k], 'sort' ) ) :
								_fnGetCellData( oSettings, i, aDataSort[k], 'sort' );
						}
					}
				}
				
				/* Do the sort - here we want multi-column sorting based on a given data source (column)
				 * and sorting function (from oSort) in a certain direction. It's reasonably complex to
				 * follow on it's own, but this is what we want (example two column sorting):
				 *  fnLocalSorting = function(a,b){
				 *  	var iTest;
				 *  	iTest = oSort['string-asc']('data11', 'data12');
				 *  	if (iTest !== 0)
				 *  		return iTest;
				 *    iTest = oSort['numeric-desc']('data21', 'data22');
				 *    if (iTest !== 0)
				 *  		return iTest;
				 *  	return oSort['numeric-asc']( aiOrig[a], aiOrig[b] );
				 *  }
				 * Basically we have a test for each sorting column, if the data in that column is equal,
				 * test the next column. If all columns match, then we use a numeric sort on the row 
				 * positions in the original data array to provide a stable sort.
				 */
				oSettings.aiDisplayMaster.sort( function ( a, b ) {
					var k, l, lLen, iTest, aDataSort, sDataType;
					for ( k=0 ; k<iSortLen ; k++ )
					{
						aDataSort = aoColumns[ aaSort[k][0] ].aDataSort;
		
						for ( l=0, lLen=aDataSort.length ; l<lLen ; l++ )
						{
							sDataType = aoColumns[ aDataSort[l] ].sType;
							
							iTest = oSort[ (sDataType ? sDataType : 'string')+"-"+aaSort[k][1] ](
								aoData[a]._aSortData[ aDataSort[l] ],
								aoData[b]._aSortData[ aDataSort[l] ]
							);
						
							if ( iTest !== 0 )
							{
								return iTest;
							}
						}
					}
					
					return oSort['numeric-asc']( aiOrig[a], aiOrig[b] );
				} );
			}
			
			/* Alter the sorting classes to take account of the changes */
			if ( (bApplyClasses === undefined || bApplyClasses) && !oSettings.oFeatures.bDeferRender )
			{
				_fnSortingClasses( oSettings );
			}
		
			for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
			{
				var sTitle = aoColumns[i].sTitle.replace( /<.*?>/g, "" );
				nTh = aoColumns[i].nTh;
				nTh.removeAttribute('aria-sort');
				nTh.removeAttribute('aria-label');
				
				/* In ARIA only the first sorting column can be marked as sorting - no multi-sort option */
				if ( aoColumns[i].bSortable )
				{
					if ( aaSort.length > 0 && aaSort[0][0] == i )
					{
						nTh.setAttribute('aria-sort', aaSort[0][1]=="asc" ? "ascending" : "descending" );
						
						var nextSort = (aoColumns[i].asSorting[ aaSort[0][2]+1 ]) ? 
							aoColumns[i].asSorting[ aaSort[0][2]+1 ] : aoColumns[i].asSorting[0];
						nTh.setAttribute('aria-label', sTitle+
							(nextSort=="asc" ? oAria.sSortAscending : oAria.sSortDescending) );
					}
					else
					{
						nTh.setAttribute('aria-label', sTitle+
							(aoColumns[i].asSorting[0]=="asc" ? oAria.sSortAscending : oAria.sSortDescending) );
					}
				}
				else
				{
					nTh.setAttribute('aria-label', sTitle);
				}
			}
			
			/* Tell the draw function that we have sorted the data */
			oSettings.bSorted = true;
			$(oSettings.oInstance).trigger('sort', oSettings);
			
			/* Copy the master data into the draw array and re-draw */
			if ( oSettings.oFeatures.bFilter )
			{
				/* _fnFilter() will redraw the table for us */
				_fnFilterComplete( oSettings, oSettings.oPreviousSearch, 1 );
			}
			else
			{
				oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
				oSettings._iDisplayStart = 0; /* reset display back to page 0 */
				_fnCalculateEnd( oSettings );
				_fnDraw( oSettings );
			}
		}
		
		
		/**
		 * Attach a sort handler (click) to a node
		 *  @param {object} oSettings dataTables settings object
		 *  @param {node} nNode node to attach the handler to
		 *  @param {int} iDataIndex column sorting index
		 *  @param {function} [fnCallback] callback function
		 *  @memberof DataTable#oApi
		 */
		function _fnSortAttachListener ( oSettings, nNode, iDataIndex, fnCallback )
		{
			_fnBindAction( nNode, {}, function (e) {
				/* If the column is not sortable - don't to anything */
				if ( oSettings.aoColumns[iDataIndex].bSortable === false )
				{
					return;
				}
				
				/*
				 * This is a little bit odd I admit... I declare a temporary function inside the scope of
				 * _fnBuildHead and the click handler in order that the code presented here can be used 
				 * twice - once for when bProcessing is enabled, and another time for when it is 
				 * disabled, as we need to perform slightly different actions.
				 *   Basically the issue here is that the Javascript engine in modern browsers don't 
				 * appear to allow the rendering engine to update the display while it is still executing
				 * it's thread (well - it does but only after long intervals). This means that the 
				 * 'processing' display doesn't appear for a table sort. To break the js thread up a bit
				 * I force an execution break by using setTimeout - but this breaks the expected 
				 * thread continuation for the end-developer's point of view (their code would execute
				 * too early), so we only do it when we absolutely have to.
				 */
				var fnInnerSorting = function () {
					var iColumn, iNextSort;
					
					/* If the shift key is pressed then we are multiple column sorting */
					if ( e.shiftKey )
					{
						/* Are we already doing some kind of sort on this column? */
						var bFound = false;
						for ( var i=0 ; i<oSettings.aaSorting.length ; i++ )
						{
							if ( oSettings.aaSorting[i][0] == iDataIndex )
							{
								bFound = true;
								iColumn = oSettings.aaSorting[i][0];
								iNextSort = oSettings.aaSorting[i][2]+1;
								
								if ( !oSettings.aoColumns[iColumn].asSorting[iNextSort] )
								{
									/* Reached the end of the sorting options, remove from multi-col sort */
									oSettings.aaSorting.splice( i, 1 );
								}
								else
								{
									/* Move onto next sorting direction */
									oSettings.aaSorting[i][1] = oSettings.aoColumns[iColumn].asSorting[iNextSort];
									oSettings.aaSorting[i][2] = iNextSort;
								}
								break;
							}
						}
						
						/* No sort yet - add it in */
						if ( bFound === false )
						{
							oSettings.aaSorting.push( [ iDataIndex, 
								oSettings.aoColumns[iDataIndex].asSorting[0], 0 ] );
						}
					}
					else
					{
						/* If no shift key then single column sort */
						if ( oSettings.aaSorting.length == 1 && oSettings.aaSorting[0][0] == iDataIndex )
						{
							iColumn = oSettings.aaSorting[0][0];
							iNextSort = oSettings.aaSorting[0][2]+1;
							if ( !oSettings.aoColumns[iColumn].asSorting[iNextSort] )
							{
								iNextSort = 0;
							}
							oSettings.aaSorting[0][1] = oSettings.aoColumns[iColumn].asSorting[iNextSort];
							oSettings.aaSorting[0][2] = iNextSort;
						}
						else
						{
							oSettings.aaSorting.splice( 0, oSettings.aaSorting.length );
							oSettings.aaSorting.push( [ iDataIndex, 
								oSettings.aoColumns[iDataIndex].asSorting[0], 0 ] );
						}
					}
					
					/* Run the sort */
					_fnSort( oSettings );
				}; /* /fnInnerSorting */
				
				if ( !oSettings.oFeatures.bProcessing )
				{
					fnInnerSorting();
				}
				else
				{
					_fnProcessingDisplay( oSettings, true );
					setTimeout( function() {
						fnInnerSorting();
						if ( !oSettings.oFeatures.bServerSide )
						{
							_fnProcessingDisplay( oSettings, false );
						}
					}, 0 );
				}
				
				/* Call the user specified callback function - used for async user interaction */
				if ( typeof fnCallback == 'function' )
				{
					fnCallback( oSettings );
				}
			} );
		}
		
		
		/**
		 * Set the sorting classes on the header, Note: it is safe to call this function 
		 * when bSort and bSortClasses are false
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnSortingClasses( oSettings )
		{
			var i, iLen, j, jLen, iFound;
			var aaSort, sClass;
			var iColumns = oSettings.aoColumns.length;
			var oClasses = oSettings.oClasses;
			
			for ( i=0 ; i<iColumns ; i++ )
			{
				if ( oSettings.aoColumns[i].bSortable )
				{
					$(oSettings.aoColumns[i].nTh).removeClass( oClasses.sSortAsc +" "+ oClasses.sSortDesc +
						" "+ oSettings.aoColumns[i].sSortingClass );
				}
			}
			
			if ( oSettings.aaSortingFixed !== null )
			{
				aaSort = oSettings.aaSortingFixed.concat( oSettings.aaSorting );
			}
			else
			{
				aaSort = oSettings.aaSorting.slice();
			}
			
			/* Apply the required classes to the header */
			for ( i=0 ; i<oSettings.aoColumns.length ; i++ )
			{
				if ( oSettings.aoColumns[i].bSortable )
				{
					sClass = oSettings.aoColumns[i].sSortingClass;
					iFound = -1;
					for ( j=0 ; j<aaSort.length ; j++ )
					{
						if ( aaSort[j][0] == i )
						{
							sClass = ( aaSort[j][1] == "asc" ) ?
								oClasses.sSortAsc : oClasses.sSortDesc;
							iFound = j;
							break;
						}
					}
					$(oSettings.aoColumns[i].nTh).addClass( sClass );
					
					if ( oSettings.bJUI )
					{
						/* jQuery UI uses extra markup */
						var jqSpan = $("span."+oClasses.sSortIcon,  oSettings.aoColumns[i].nTh);
						jqSpan.removeClass(oClasses.sSortJUIAsc +" "+ oClasses.sSortJUIDesc +" "+ 
							oClasses.sSortJUI +" "+ oClasses.sSortJUIAscAllowed +" "+ oClasses.sSortJUIDescAllowed );
						
						var sSpanClass;
						if ( iFound == -1 )
						{
						 	sSpanClass = oSettings.aoColumns[i].sSortingClassJUI;
						}
						else if ( aaSort[iFound][1] == "asc" )
						{
							sSpanClass = oClasses.sSortJUIAsc;
						}
						else
						{
							sSpanClass = oClasses.sSortJUIDesc;
						}
						
						jqSpan.addClass( sSpanClass );
					}
				}
				else
				{
					/* No sorting on this column, so add the base class. This will have been assigned by
					 * _fnAddColumn
					 */
					$(oSettings.aoColumns[i].nTh).addClass( oSettings.aoColumns[i].sSortingClass );
				}
			}
			
			/* 
			 * Apply the required classes to the table body
			 * Note that this is given as a feature switch since it can significantly slow down a sort
			 * on large data sets (adding and removing of classes is always slow at the best of times..)
			 * Further to this, note that this code is admittedly fairly ugly. It could be made a lot 
			 * simpler using jQuery selectors and add/removeClass, but that is significantly slower
			 * (on the order of 5 times slower) - hence the direct DOM manipulation here.
			 * Note that for deferred drawing we do use jQuery - the reason being that taking the first
			 * row found to see if the whole column needs processed can miss classes since the first
			 * column might be new.
			 */
			sClass = oClasses.sSortColumn;
			
			if ( oSettings.oFeatures.bSort && oSettings.oFeatures.bSortClasses )
			{
				var nTds = _fnGetTdNodes( oSettings );
				
				/* Determine what the sorting class for each column should be */
				var iClass, iTargetCol;
				var asClasses = [];
				for (i = 0; i < iColumns; i++)
				{
					asClasses.push("");
				}
				for (i = 0, iClass = 1; i < aaSort.length; i++)
				{
					iTargetCol = parseInt( aaSort[i][0], 10 );
					asClasses[iTargetCol] = sClass + iClass;
					
					if ( iClass < 3 )
					{
						iClass++;
					}
				}
				
				/* Make changes to the classes for each cell as needed */
				var reClass = new RegExp(sClass + "[123]");
				var sTmpClass, sCurrentClass, sNewClass;
				for ( i=0, iLen=nTds.length; i<iLen; i++ )
				{
					/* Determine which column we're looking at */
					iTargetCol = i % iColumns;
					
					/* What is the full list of classes now */
					sCurrentClass = nTds[i].className;
					/* What sorting class should be applied? */
					sNewClass = asClasses[iTargetCol];
					/* What would the new full list be if we did a replacement? */
					sTmpClass = sCurrentClass.replace(reClass, sNewClass);
					
					if ( sTmpClass != sCurrentClass )
					{
						/* We changed something */
						nTds[i].className = $.trim( sTmpClass );
					}
					else if ( sNewClass.length > 0 && sCurrentClass.indexOf(sNewClass) == -1 )
					{
						/* We need to add a class */
						nTds[i].className = sCurrentClass + " " + sNewClass;
					}
				}
			}
		}
		
		
		
		/**
		 * Save the state of a table in a cookie such that the page can be reloaded
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnSaveState ( oSettings )
		{
			if ( !oSettings.oFeatures.bStateSave || oSettings.bDestroying )
			{
				return;
			}
		
			/* Store the interesting variables */
			var i, iLen, bInfinite=oSettings.oScroll.bInfinite;
			var oState = {
				"iCreate":      new Date().getTime(),
				"iStart":       (bInfinite ? 0 : oSettings._iDisplayStart),
				"iEnd":         (bInfinite ? oSettings._iDisplayLength : oSettings._iDisplayEnd),
				"iLength":      oSettings._iDisplayLength,
				"aaSorting":    $.extend( true, [], oSettings.aaSorting ),
				"oSearch":      $.extend( true, {}, oSettings.oPreviousSearch ),
				"aoSearchCols": $.extend( true, [], oSettings.aoPreSearchCols ),
				"abVisCols":    []
			};
		
			for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
			{
				oState.abVisCols.push( oSettings.aoColumns[i].bVisible );
			}
		
			_fnCallbackFire( oSettings, "aoStateSaveParams", 'stateSaveParams', [oSettings, oState] );
			
			oSettings.fnStateSave.call( oSettings.oInstance, oSettings, oState );
		}
		
		
		/**
		 * Attempt to load a saved table state from a cookie
		 *  @param {object} oSettings dataTables settings object
		 *  @param {object} oInit DataTables init object so we can override settings
		 *  @memberof DataTable#oApi
		 */
		function _fnLoadState ( oSettings, oInit )
		{
			if ( !oSettings.oFeatures.bStateSave )
			{
				return;
			}
		
			var oData = oSettings.fnStateLoad.call( oSettings.oInstance, oSettings );
			if ( !oData )
			{
				return;
			}
			
			/* Allow custom and plug-in manipulation functions to alter the saved data set and
			 * cancelling of loading by returning false
			 */
			var abStateLoad = _fnCallbackFire( oSettings, 'aoStateLoadParams', 'stateLoadParams', [oSettings, oData] );
			if ( $.inArray( false, abStateLoad ) !== -1 )
			{
				return;
			}
			
			/* Store the saved state so it might be accessed at any time */
			oSettings.oLoadedState = $.extend( true, {}, oData );
			
			/* Restore key features */
			oSettings._iDisplayStart    = oData.iStart;
			oSettings.iInitDisplayStart = oData.iStart;
			oSettings._iDisplayEnd      = oData.iEnd;
			oSettings._iDisplayLength   = oData.iLength;
			oSettings.aaSorting         = oData.aaSorting.slice();
			oSettings.saved_aaSorting   = oData.aaSorting.slice();
			
			/* Search filtering  */
			$.extend( oSettings.oPreviousSearch, oData.oSearch );
			$.extend( true, oSettings.aoPreSearchCols, oData.aoSearchCols );
			
			/* Column visibility state
			 * Pass back visibility settings to the init handler, but to do not here override
			 * the init object that the user might have passed in
			 */
			oInit.saved_aoColumns = [];
			for ( var i=0 ; i<oData.abVisCols.length ; i++ )
			{
				oInit.saved_aoColumns[i] = {};
				oInit.saved_aoColumns[i].bVisible = oData.abVisCols[i];
			}
		
			_fnCallbackFire( oSettings, 'aoStateLoaded', 'stateLoaded', [oSettings, oData] );
		}
		
		
		/**
		 * Create a new cookie with a value to store the state of a table
		 *  @param {string} sName name of the cookie to create
		 *  @param {string} sValue the value the cookie should take
		 *  @param {int} iSecs duration of the cookie
		 *  @param {string} sBaseName sName is made up of the base + file name - this is the base
		 *  @param {function} fnCallback User definable function to modify the cookie
		 *  @memberof DataTable#oApi
		 */
		function _fnCreateCookie ( sName, sValue, iSecs, sBaseName, fnCallback )
		{
			var date = new Date();
			date.setTime( date.getTime()+(iSecs*1000) );
			
			/* 
			 * Shocking but true - it would appear IE has major issues with having the path not having
			 * a trailing slash on it. We need the cookie to be available based on the path, so we
			 * have to append the file name to the cookie name. Appalling. Thanks to vex for adding the
			 * patch to use at least some of the path
			 */
			var aParts = window.location.pathname.split('/');
			var sNameFile = sName + '_' + aParts.pop().replace(/[\/:]/g,"").toLowerCase();
			var sFullCookie, oData;
			
			if ( fnCallback !== null )
			{
				oData = (typeof $.parseJSON === 'function') ? 
					$.parseJSON( sValue ) : eval( '('+sValue+')' );
				sFullCookie = fnCallback( sNameFile, oData, date.toGMTString(),
					aParts.join('/')+"/" );
			}
			else
			{
				sFullCookie = sNameFile + "=" + encodeURIComponent(sValue) +
					"; expires=" + date.toGMTString() +"; path=" + aParts.join('/')+"/";
			}
			
			/* Are we going to go over the cookie limit of 4KiB? If so, try to delete a cookies
			 * belonging to DataTables.
			 */
			var
				aCookies =document.cookie.split(';'),
				iNewCookieLen = sFullCookie.split(';')[0].length,
				aOldCookies = [];
			
			if ( iNewCookieLen+document.cookie.length+10 > 4096 ) /* Magic 10 for padding */
			{
				for ( var i=0, iLen=aCookies.length ; i<iLen ; i++ )
				{
					if ( aCookies[i].indexOf( sBaseName ) != -1 )
					{
						/* It's a DataTables cookie, so eval it and check the time stamp */
						var aSplitCookie = aCookies[i].split('=');
						try {
							oData = eval( '('+decodeURIComponent(aSplitCookie[1])+')' );
		
							if ( oData && oData.iCreate )
							{
								aOldCookies.push( {
									"name": aSplitCookie[0],
									"time": oData.iCreate
								} );
							}
						}
						catch( e ) {}
					}
				}
		
				// Make sure we delete the oldest ones first
				aOldCookies.sort( function (a, b) {
					return b.time - a.time;
				} );
		
				// Eliminate as many old DataTables cookies as we need to
				while ( iNewCookieLen + document.cookie.length + 10 > 4096 ) {
					if ( aOldCookies.length === 0 ) {
						// Deleted all DT cookies and still not enough space. Can't state save
						return;
					}
					
					var old = aOldCookies.pop();
					document.cookie = old.name+"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path="+
						aParts.join('/') + "/";
				}
			}
			
			document.cookie = sFullCookie;
		}
		
		
		/**
		 * Read an old cookie to get a cookie with an old table state
		 *  @param {string} sName name of the cookie to read
		 *  @returns {string} contents of the cookie - or null if no cookie with that name found
		 *  @memberof DataTable#oApi
		 */
		function _fnReadCookie ( sName )
		{
			var
				aParts = window.location.pathname.split('/'),
				sNameEQ = sName + '_' + aParts[aParts.length-1].replace(/[\/:]/g,"").toLowerCase() + '=',
			 	sCookieContents = document.cookie.split(';');
			
			for( var i=0 ; i<sCookieContents.length ; i++ )
			{
				var c = sCookieContents[i];
				
				while (c.charAt(0)==' ')
				{
					c = c.substring(1,c.length);
				}
				
				if (c.indexOf(sNameEQ) === 0)
				{
					return decodeURIComponent( c.substring(sNameEQ.length,c.length) );
				}
			}
			return null;
		}
		
		
		/**
		 * Return the settings object for a particular table
		 *  @param {node} nTable table we are using as a dataTable
		 *  @returns {object} Settings object - or null if not found
		 *  @memberof DataTable#oApi
		 */
		function _fnSettingsFromNode ( nTable )
		{
			for ( var i=0 ; i<DataTable.settings.length ; i++ )
			{
				if ( DataTable.settings[i].nTable === nTable )
				{
					return DataTable.settings[i];
				}
			}
			
			return null;
		}
		
		
		/**
		 * Return an array with the TR nodes for the table
		 *  @param {object} oSettings dataTables settings object
		 *  @returns {array} TR array
		 *  @memberof DataTable#oApi
		 */
		function _fnGetTrNodes ( oSettings )
		{
			var aNodes = [];
			var aoData = oSettings.aoData;
			for ( var i=0, iLen=aoData.length ; i<iLen ; i++ )
			{
				if ( aoData[i].nTr !== null )
				{
					aNodes.push( aoData[i].nTr );
				}
			}
			return aNodes;
		}
		
		
		/**
		 * Return an flat array with all TD nodes for the table, or row
		 *  @param {object} oSettings dataTables settings object
		 *  @param {int} [iIndividualRow] aoData index to get the nodes for - optional 
		 *    if not given then the return array will contain all nodes for the table
		 *  @returns {array} TD array
		 *  @memberof DataTable#oApi
		 */
		function _fnGetTdNodes ( oSettings, iIndividualRow )
		{
			var anReturn = [];
			var iCorrector;
			var anTds, nTd;
			var iRow, iRows=oSettings.aoData.length,
				iColumn, iColumns, oData, sNodeName, iStart=0, iEnd=iRows;
			
			/* Allow the collection to be limited to just one row */
			if ( iIndividualRow !== undefined )
			{
				iStart = iIndividualRow;
				iEnd = iIndividualRow+1;
			}
		
			for ( iRow=iStart ; iRow<iEnd ; iRow++ )
			{
				oData = oSettings.aoData[iRow];
				if ( oData.nTr !== null )
				{
					/* get the TD child nodes - taking into account text etc nodes */
					anTds = [];
					nTd = oData.nTr.firstChild;
					while ( nTd )
					{
						sNodeName = nTd.nodeName.toLowerCase();
						if ( sNodeName == 'td' || sNodeName == 'th' )
						{
							anTds.push( nTd );
						}
						nTd = nTd.nextSibling;
					}
		
					iCorrector = 0;
					for ( iColumn=0, iColumns=oSettings.aoColumns.length ; iColumn<iColumns ; iColumn++ )
					{
						if ( oSettings.aoColumns[iColumn].bVisible )
						{
							anReturn.push( anTds[iColumn-iCorrector] );
						}
						else
						{
							anReturn.push( oData._anHidden[iColumn] );
							iCorrector++;
						}
					}
				}
			}
		
			return anReturn;
		}
		
		
		/**
		 * Log an error message
		 *  @param {object} oSettings dataTables settings object
		 *  @param {int} iLevel log error messages, or display them to the user
		 *  @param {string} sMesg error message
		 *  @memberof DataTable#oApi
		 */
		function _fnLog( oSettings, iLevel, sMesg )
		{
			var sAlert = (oSettings===null) ?
				"DataTables warning: "+sMesg :
				"DataTables warning (table id = '"+oSettings.sTableId+"'): "+sMesg;
			
			if ( iLevel === 0 )
			{
				if ( DataTable.ext.sErrMode == 'alert' )
				{
					alert( sAlert );
				}
				else
				{
					throw new Error(sAlert);
				}
				return;
			}
			else if ( window.console && console.log )
			{
				console.log( sAlert );
			}
		}
		
		
		/**
		 * See if a property is defined on one object, if so assign it to the other object
		 *  @param {object} oRet target object
		 *  @param {object} oSrc source object
		 *  @param {string} sName property
		 *  @param {string} [sMappedName] name to map too - optional, sName used if not given
		 *  @memberof DataTable#oApi
		 */
		function _fnMap( oRet, oSrc, sName, sMappedName )
		{
			if ( sMappedName === undefined )
			{
				sMappedName = sName;
			}
			if ( oSrc[sName] !== undefined )
			{
				oRet[sMappedName] = oSrc[sName];
			}
		}
		
		
		/**
		 * Extend objects - very similar to jQuery.extend, but deep copy objects, and shallow
		 * copy arrays. The reason we need to do this, is that we don't want to deep copy array
		 * init values (such as aaSorting) since the dev wouldn't be able to override them, but
		 * we do want to deep copy arrays.
		 *  @param {object} oOut Object to extend
		 *  @param {object} oExtender Object from which the properties will be applied to oOut
		 *  @returns {object} oOut Reference, just for convenience - oOut === the return.
		 *  @memberof DataTable#oApi
		 *  @todo This doesn't take account of arrays inside the deep copied objects.
		 */
		function _fnExtend( oOut, oExtender )
		{
			var val;
			
			for ( var prop in oExtender )
			{
				if ( oExtender.hasOwnProperty(prop) )
				{
					val = oExtender[prop];
		
					if ( typeof oInit[prop] === 'object' && val !== null && $.isArray(val) === false )
					{
						$.extend( true, oOut[prop], val );
					}
					else
					{
						oOut[prop] = val;
					}
				}
			}
		
			return oOut;
		}
		
		
		/**
		 * Bind an event handers to allow a click or return key to activate the callback.
		 * This is good for accessibility since a return on the keyboard will have the
		 * same effect as a click, if the element has focus.
		 *  @param {element} n Element to bind the action to
		 *  @param {object} oData Data object to pass to the triggered function
		 *  @param {function} fn Callback function for when the event is triggered
		 *  @memberof DataTable#oApi
		 */
		function _fnBindAction( n, oData, fn )
		{
			$(n)
				.bind( 'click.DT', oData, function (e) {
						n.blur(); // Remove focus outline for mouse users
						fn(e);
					} )
				.bind( 'keypress.DT', oData, function (e){
					if ( e.which === 13 ) {
						fn(e);
					} } )
				.bind( 'selectstart.DT', function () {
					/* Take the brutal approach to cancelling text selection */
					return false;
					} );
		}
		
		
		/**
		 * Register a callback function. Easily allows a callback function to be added to
		 * an array store of callback functions that can then all be called together.
		 *  @param {object} oSettings dataTables settings object
		 *  @param {string} sStore Name of the array storage for the callbacks in oSettings
		 *  @param {function} fn Function to be called back
		 *  @param {string} sName Identifying name for the callback (i.e. a label)
		 *  @memberof DataTable#oApi
		 */
		function _fnCallbackReg( oSettings, sStore, fn, sName )
		{
			if ( fn )
			{
				oSettings[sStore].push( {
					"fn": fn,
					"sName": sName
				} );
			}
		}
		
		
		/**
		 * Fire callback functions and trigger events. Note that the loop over the callback
		 * array store is done backwards! Further note that you do not want to fire off triggers
		 * in time sensitive applications (for example cell creation) as its slow.
		 *  @param {object} oSettings dataTables settings object
		 *  @param {string} sStore Name of the array storage for the callbacks in oSettings
		 *  @param {string} sTrigger Name of the jQuery custom event to trigger. If null no trigger
		 *    is fired
		 *  @param {array} aArgs Array of arguments to pass to the callback function / trigger
		 *  @memberof DataTable#oApi
		 */
		function _fnCallbackFire( oSettings, sStore, sTrigger, aArgs )
		{
			var aoStore = oSettings[sStore];
			var aRet =[];
		
			for ( var i=aoStore.length-1 ; i>=0 ; i-- )
			{
				aRet.push( aoStore[i].fn.apply( oSettings.oInstance, aArgs ) );
			}
		
			if ( sTrigger !== null )
			{
				$(oSettings.oInstance).trigger(sTrigger, aArgs);
			}
		
			return aRet;
		}
		
		
		/**
		 * JSON stringify. If JSON.stringify it provided by the browser, json2.js or any other
		 * library, then we use that as it is fast, safe and accurate. If the function isn't 
		 * available then we need to built it ourselves - the inspiration for this function comes
		 * from Craig Buckler ( http://www.sitepoint.com/javascript-json-serialization/ ). It is
		 * not perfect and absolutely should not be used as a replacement to json2.js - but it does
		 * do what we need, without requiring a dependency for DataTables.
		 *  @param {object} o JSON object to be converted
		 *  @returns {string} JSON string
		 *  @memberof DataTable#oApi
		 */
		var _fnJsonString = (window.JSON) ? JSON.stringify : function( o )
		{
			/* Not an object or array */
			var sType = typeof o;
			if (sType !== "object" || o === null)
			{
				// simple data type
				if (sType === "string")
				{
					o = '"'+o+'"';
				}
				return o+"";
			}
		
			/* If object or array, need to recurse over it */
			var
				sProp, mValue,
				json = [],
				bArr = $.isArray(o);
			
			for (sProp in o)
			{
				mValue = o[sProp];
				sType = typeof mValue;
		
				if (sType === "string")
				{
					mValue = '"'+mValue+'"';
				}
				else if (sType === "object" && mValue !== null)
				{
					mValue = _fnJsonString(mValue);
				}
		
				json.push((bArr ? "" : '"'+sProp+'":') + mValue);
			}
		
			return (bArr ? "[" : "{") + json + (bArr ? "]" : "}");
		};
		
		
		/**
		 * From some browsers (specifically IE6/7) we need special handling to work around browser
		 * bugs - this function is used to detect when these workarounds are needed.
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnBrowserDetect( oSettings )
		{
			/* IE6/7 will oversize a width 100% element inside a scrolling element, to include the
			 * width of the scrollbar, while other browsers ensure the inner element is contained
			 * without forcing scrolling
			 */
			var n = $(
				'<div style="position:absolute; top:0; left:0; height:1px; width:1px; overflow:hidden">'+
					'<div style="position:absolute; top:1px; left:1px; width:100px; overflow:scroll;">'+
						'<div id="DT_BrowserTest" style="width:100%; height:10px;"></div>'+
					'</div>'+
				'</div>')[0];
		
			document.body.appendChild( n );
			oSettings.oBrowser.bScrollOversize = $('#DT_BrowserTest', n)[0].offsetWidth === 100 ? true : false;
			document.body.removeChild( n );
		}
		

		/**
		 * Perform a jQuery selector action on the table's TR elements (from the tbody) and
		 * return the resulting jQuery object.
		 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
		 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
		 *  @param {string} [oOpts.filter=none] Select TR elements that meet the current filter
		 *    criterion ("applied") or all TR elements (i.e. no filter).
		 *  @param {string} [oOpts.order=current] Order of the TR elements in the processed array.
		 *    Can be either 'current', whereby the current sorting of the table is used, or
		 *    'original' whereby the original order the data was read into the table is used.
		 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
		 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be 
		 *    'current' and filter is 'applied', regardless of what they might be given as.
		 *  @returns {object} jQuery object, filtered by the given selector.
		 *  @dtopt API
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Highlight every second row
		 *      oTable.$('tr:odd').css('backgroundColor', 'blue');
		 *    } );
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to rows with 'Webkit' in them, add a background colour and then
		 *      // remove the filter, thus highlighting the 'Webkit' rows only.
		 *      oTable.fnFilter('Webkit');
		 *      oTable.$('tr', {"filter": "applied"}).css('backgroundColor', 'blue');
		 *      oTable.fnFilter('');
		 *    } );
		 */
		this.$ = function ( sSelector, oOpts )
		{
			var i, iLen, a = [], tr;
			var oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );
			var aoData = oSettings.aoData;
			var aiDisplay = oSettings.aiDisplay;
			var aiDisplayMaster = oSettings.aiDisplayMaster;
		
			if ( !oOpts )
			{
				oOpts = {};
			}
		
			oOpts = $.extend( {}, {
				"filter": "none", // applied
				"order": "current", // "original"
				"page": "all" // current
			}, oOpts );
		
			// Current page implies that order=current and fitler=applied, since it is fairly
			// senseless otherwise
			if ( oOpts.page == 'current' )
			{
				for ( i=oSettings._iDisplayStart, iLen=oSettings.fnDisplayEnd() ; i<iLen ; i++ )
				{
					tr = aoData[ aiDisplay[i] ].nTr;
					if ( tr )
					{
						a.push( tr );
					}
				}
			}
			else if ( oOpts.order == "current" && oOpts.filter == "none" )
			{
				for ( i=0, iLen=aiDisplayMaster.length ; i<iLen ; i++ )
				{
					tr = aoData[ aiDisplayMaster[i] ].nTr;
					if ( tr )
					{
						a.push( tr );
					}
				}
			}
			else if ( oOpts.order == "current" && oOpts.filter == "applied" )
			{
				for ( i=0, iLen=aiDisplay.length ; i<iLen ; i++ )
				{
					tr = aoData[ aiDisplay[i] ].nTr;
					if ( tr )
					{
						a.push( tr );
					}
				}
			}
			else if ( oOpts.order == "original" && oOpts.filter == "none" )
			{
				for ( i=0, iLen=aoData.length ; i<iLen ; i++ )
				{
					tr = aoData[ i ].nTr ;
					if ( tr )
					{
						a.push( tr );
					}
				}
			}
			else if ( oOpts.order == "original" && oOpts.filter == "applied" )
			{
				for ( i=0, iLen=aoData.length ; i<iLen ; i++ )
				{
					tr = aoData[ i ].nTr;
					if ( $.inArray( i, aiDisplay ) !== -1 && tr )
					{
						a.push( tr );
					}
				}
			}
			else
			{
				_fnLog( oSettings, 1, "Unknown selection options" );
			}
		
			/* We need to filter on the TR elements and also 'find' in their descendants
			 * to make the selector act like it would in a full table - so we need
			 * to build both results and then combine them together
			 */
			var jqA = $(a);
			var jqTRs = jqA.filter( sSelector );
			var jqDescendants = jqA.find( sSelector );
		
			return $( [].concat($.makeArray(jqTRs), $.makeArray(jqDescendants)) );
		};
		
		
		/**
		 * Almost identical to $ in operation, but in this case returns the data for the matched
		 * rows - as such, the jQuery selector used should match TR row nodes or TD/TH cell nodes
		 * rather than any descendants, so the data can be obtained for the row/cell. If matching
		 * rows are found, the data returned is the original data array/object that was used to  
		 * create the row (or a generated array if from a DOM source).
		 *
		 * This method is often useful in-combination with $ where both functions are given the
		 * same parameters and the array indexes will match identically.
		 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
		 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
		 *  @param {string} [oOpts.filter=none] Select elements that meet the current filter
		 *    criterion ("applied") or all elements (i.e. no filter).
		 *  @param {string} [oOpts.order=current] Order of the data in the processed array.
		 *    Can be either 'current', whereby the current sorting of the table is used, or
		 *    'original' whereby the original order the data was read into the table is used.
		 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
		 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be 
		 *    'current' and filter is 'applied', regardless of what they might be given as.
		 *  @returns {array} Data for the matched elements. If any elements, as a result of the
		 *    selector, were not TR, TD or TH elements in the DataTable, they will have a null 
		 *    entry in the array.
		 *  @dtopt API
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the data from the first row in the table
		 *      var data = oTable._('tr:first');
		 *
		 *      // Do something useful with the data
		 *      alert( "First cell is: "+data[0] );
		 *    } );
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to 'Webkit' and get all data for 
		 *      oTable.fnFilter('Webkit');
		 *      var data = oTable._('tr', {"filter": "applied"});
		 *      
		 *      // Do something with the data
		 *      alert( data.length+" rows matched the filter" );
		 *    } );
		 */
		this._ = function ( sSelector, oOpts )
		{
			var aOut = [];
			var i, iLen, iIndex;
			var aTrs = this.$( sSelector, oOpts );
		
			for ( i=0, iLen=aTrs.length ; i<iLen ; i++ )
			{
				aOut.push( this.fnGetData(aTrs[i]) );
			}
		
			return aOut;
		};
		
		
		/**
		 * Add a single new row or multiple rows of data to the table. Please note
		 * that this is suitable for client-side processing only - if you are using 
		 * server-side processing (i.e. "bServerSide": true), then to add data, you
		 * must add it to the data source, i.e. the server-side, through an Ajax call.
		 *  @param {array|object} mData The data to be added to the table. This can be:
		 *    <ul>
		 *      <li>1D array of data - add a single row with the data provided</li>
		 *      <li>2D array of arrays - add multiple rows in a single call</li>
		 *      <li>object - data object when using <i>mData</i></li>
		 *      <li>array of objects - multiple data objects when using <i>mData</i></li>
		 *    </ul>
		 *  @param {bool} [bRedraw=true] redraw the table or not
		 *  @returns {array} An array of integers, representing the list of indexes in 
		 *    <i>aoData</i> ({@link DataTable.models.oSettings}) that have been added to 
		 *    the table.
		 *  @dtopt API
		 *
		 *  @example
		 *    // Global var for counter
		 *    var giCount = 2;
		 *    
		 *    $(document).ready(function() {
		 *      $('#example').dataTable();
		 *    } );
		 *    
		 *    function fnClickAddRow() {
		 *      $('#example').dataTable().fnAddData( [
		 *        giCount+".1",
		 *        giCount+".2",
		 *        giCount+".3",
		 *        giCount+".4" ]
		 *      );
		 *        
		 *      giCount++;
		 *    }
		 */
		this.fnAddData = function( mData, bRedraw )
		{
			if ( mData.length === 0 )
			{
				return [];
			}
			
			var aiReturn = [];
			var iTest;
			
			/* Find settings from table node */
			var oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );
			
			/* Check if we want to add multiple rows or not */
			if ( typeof mData[0] === "object" && mData[0] !== null )
			{
				for ( var i=0 ; i<mData.length ; i++ )
				{
					iTest = _fnAddData( oSettings, mData[i] );
					if ( iTest == -1 )
					{
						return aiReturn;
					}
					aiReturn.push( iTest );
				}
			}
			else
			{
				iTest = _fnAddData( oSettings, mData );
				if ( iTest == -1 )
				{
					return aiReturn;
				}
				aiReturn.push( iTest );
			}
			
			oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
			
			if ( bRedraw === undefined || bRedraw )
			{
				_fnReDraw( oSettings );
			}
			return aiReturn;
		};
		
		
		/**
		 * This function will make DataTables recalculate the column sizes, based on the data 
		 * contained in the table and the sizes applied to the columns (in the DOM, CSS or 
		 * through the sWidth parameter). This can be useful when the width of the table's 
		 * parent element changes (for example a window resize).
		 *  @param {boolean} [bRedraw=true] Redraw the table or not, you will typically want to
		 *  @dtopt API
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable( {
		 *        "sScrollY": "200px",
		 *        "bPaginate": false
		 *      } );
		 *      
		 *      $(window).bind('resize', function () {
		 *        oTable.fnAdjustColumnSizing();
		 *      } );
		 *    } );
		 */
		this.fnAdjustColumnSizing = function ( bRedraw )
		{
			var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
			_fnAdjustColumnSizing( oSettings );
			
			if ( bRedraw === undefined || bRedraw )
			{
				this.fnDraw( false );
			}
			else if ( oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "" )
			{
				/* If not redrawing, but scrolling, we want to apply the new column sizes anyway */
				this.oApi._fnScrollDraw(oSettings);
			}
		};
		
		
		/**
		 * Quickly and simply clear a table
		 *  @param {bool} [bRedraw=true] redraw the table or not
		 *  @dtopt API
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      
		 *      // Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)
		 *      oTable.fnClearTable();
		 *    } );
		 */
		this.fnClearTable = function( bRedraw )
		{
			/* Find settings from table node */
			var oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );
			_fnClearTable( oSettings );
			
			if ( bRedraw === undefined || bRedraw )
			{
				_fnDraw( oSettings );
			}
		};
		
		
		/**
		 * The exact opposite of 'opening' a row, this function will close any rows which 
		 * are currently 'open'.
		 *  @param {node} nTr the table row to 'close'
		 *  @returns {int} 0 on success, or 1 if failed (can't find the row)
		 *  @dtopt API
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *      
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *      
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnClose = function( nTr )
		{
			/* Find settings from table node */
			var oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );
			
			for ( var i=0 ; i<oSettings.aoOpenRows.length ; i++ )
			{
				if ( oSettings.aoOpenRows[i].nParent == nTr )
				{
					var nTrParent = oSettings.aoOpenRows[i].nTr.parentNode;
					if ( nTrParent )
					{
						/* Remove it if it is currently on display */
						nTrParent.removeChild( oSettings.aoOpenRows[i].nTr );
					}
					oSettings.aoOpenRows.splice( i, 1 );
					return 0;
				}
			}
			return 1;
		};
		
		
		/**
		 * Remove a row for the table
		 *  @param {mixed} mTarget The index of the row from aoData to be deleted, or
		 *    the TR element you want to delete
		 *  @param {function|null} [fnCallBack] Callback function
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @returns {array} The row that was deleted
		 *  @dtopt API
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      
		 *      // Immediately remove the first row
		 *      oTable.fnDeleteRow( 0 );
		 *    } );
		 */
		this.fnDeleteRow = function( mTarget, fnCallBack, bRedraw )
		{
			/* Find settings from table node */
			var oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );
			var i, iLen, iAODataIndex;
			
			iAODataIndex = (typeof mTarget === 'object') ? 
				_fnNodeToDataIndex(oSettings, mTarget) : mTarget;
			
			/* Return the data array from this row */
			var oData = oSettings.aoData.splice( iAODataIndex, 1 );
		
			/* Update the _DT_RowIndex parameter */
			for ( i=0, iLen=oSettings.aoData.length ; i<iLen ; i++ )
			{
				if ( oSettings.aoData[i].nTr !== null )
				{
					oSettings.aoData[i].nTr._DT_RowIndex = i;
				}
			}
			
			/* Remove the target row from the search array */
			var iDisplayIndex = $.inArray( iAODataIndex, oSettings.aiDisplay );
			oSettings.asDataSearch.splice( iDisplayIndex, 1 );
			
			/* Delete from the display arrays */
			_fnDeleteIndex( oSettings.aiDisplayMaster, iAODataIndex );
			_fnDeleteIndex( oSettings.aiDisplay, iAODataIndex );
			
			/* If there is a user callback function - call it */
			if ( typeof fnCallBack === "function" )
			{
				fnCallBack.call( this, oSettings, oData );
			}
			
			/* Check for an 'overflow' they case for displaying the table */
			if ( oSettings._iDisplayStart >= oSettings.fnRecordsDisplay() )
			{
				oSettings._iDisplayStart -= oSettings._iDisplayLength;
				if ( oSettings._iDisplayStart < 0 )
				{
					oSettings._iDisplayStart = 0;
				}
			}
			
			if ( bRedraw === undefined || bRedraw )
			{
				_fnCalculateEnd( oSettings );
				_fnDraw( oSettings );
			}
			
			return oData;
		};
		
		
		/**
		 * Restore the table to it's original state in the DOM by removing all of DataTables 
		 * enhancements, alterations to the DOM structure of the table and event listeners.
		 *  @param {boolean} [bRemove=false] Completely remove the table from the DOM
		 *  @dtopt API
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      // This example is fairly pointless in reality, but shows how fnDestroy can be used
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnDestroy();
		 *    } );
		 */
		this.fnDestroy = function ( bRemove )
		{
			var oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );
			var nOrig = oSettings.nTableWrapper.parentNode;
			var nBody = oSettings.nTBody;
			var i, iLen;
		
			bRemove = (bRemove===undefined) ? false : bRemove;
			
			/* Flag to note that the table is currently being destroyed - no action should be taken */
			oSettings.bDestroying = true;
			
			/* Fire off the destroy callbacks for plug-ins etc */
			_fnCallbackFire( oSettings, "aoDestroyCallback", "destroy", [oSettings] );
		
			/* If the table is not being removed, restore the hidden columns */
			if ( !bRemove )
			{
				for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
				{
					if ( oSettings.aoColumns[i].bVisible === false )
					{
						this.fnSetColumnVis( i, true );
					}
				}
			}
			
			/* Blitz all DT events */
			$(oSettings.nTableWrapper).find('*').andSelf().unbind('.DT');
			
			/* If there is an 'empty' indicator row, remove it */
			$('tbody>tr>td.'+oSettings.oClasses.sRowEmpty, oSettings.nTable).parent().remove();
			
			/* When scrolling we had to break the table up - restore it */
			if ( oSettings.nTable != oSettings.nTHead.parentNode )
			{
				$(oSettings.nTable).children('thead').remove();
				oSettings.nTable.appendChild( oSettings.nTHead );
			}
			
			if ( oSettings.nTFoot && oSettings.nTable != oSettings.nTFoot.parentNode )
			{
				$(oSettings.nTable).children('tfoot').remove();
				oSettings.nTable.appendChild( oSettings.nTFoot );
			}
			
			/* Remove the DataTables generated nodes, events and classes */
			oSettings.nTable.parentNode.removeChild( oSettings.nTable );
			$(oSettings.nTableWrapper).remove();
			
			oSettings.aaSorting = [];
			oSettings.aaSortingFixed = [];
			_fnSortingClasses( oSettings );
			
			$(_fnGetTrNodes( oSettings )).removeClass( oSettings.asStripeClasses.join(' ') );
			
			$('th, td', oSettings.nTHead).removeClass( [
				oSettings.oClasses.sSortable,
				oSettings.oClasses.sSortableAsc,
				oSettings.oClasses.sSortableDesc,
				oSettings.oClasses.sSortableNone ].join(' ')
			);
			if ( oSettings.bJUI )
			{
				$('th span.'+oSettings.oClasses.sSortIcon
					+ ', td span.'+oSettings.oClasses.sSortIcon, oSettings.nTHead).remove();
		
				$('th, td', oSettings.nTHead).each( function () {
					var jqWrapper = $('div.'+oSettings.oClasses.sSortJUIWrapper, this);
					var kids = jqWrapper.contents();
					$(this).append( kids );
					jqWrapper.remove();
				} );
			}
			
			/* Add the TR elements back into the table in their original order */
			if ( !bRemove && oSettings.nTableReinsertBefore )
			{
				nOrig.insertBefore( oSettings.nTable, oSettings.nTableReinsertBefore );
			}
			else if ( !bRemove )
			{
				nOrig.appendChild( oSettings.nTable );
			}
		
			for ( i=0, iLen=oSettings.aoData.length ; i<iLen ; i++ )
			{
				if ( oSettings.aoData[i].nTr !== null )
				{
					nBody.appendChild( oSettings.aoData[i].nTr );
				}
			}
			
			/* Restore the width of the original table */
			if ( oSettings.oFeatures.bAutoWidth === true )
			{
			  oSettings.nTable.style.width = _fnStringToCss(oSettings.sDestroyWidth);
			}
			
			/* If the were originally stripe classes - then we add them back here. Note
			 * this is not fool proof (for example if not all rows had stripe classes - but
			 * it's a good effort without getting carried away
			 */
			iLen = oSettings.asDestroyStripes.length;
			if (iLen)
			{
				var anRows = $(nBody).children('tr');
				for ( i=0 ; i<iLen ; i++ )
				{
					anRows.filter(':nth-child(' + iLen + 'n + ' + i + ')').addClass( oSettings.asDestroyStripes[i] );
				}
			}
			
			/* Remove the settings object from the settings array */
			for ( i=0, iLen=DataTable.settings.length ; i<iLen ; i++ )
			{
				if ( DataTable.settings[i] == oSettings )
				{
					DataTable.settings.splice( i, 1 );
				}
			}
			
			/* End it all */
			oSettings = null;
			oInit = null;
		};
		
		
		/**
		 * Redraw the table
		 *  @param {bool} [bComplete=true] Re-filter and resort (if enabled) the table before the draw.
		 *  @dtopt API
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      
		 *      // Re-draw the table - you wouldn't want to do it here, but it's an example :-)
		 *      oTable.fnDraw();
		 *    } );
		 */
		this.fnDraw = function( bComplete )
		{
			var oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );
			if ( bComplete === false )
			{
				_fnCalculateEnd( oSettings );
				_fnDraw( oSettings );
			}
			else
			{
				_fnReDraw( oSettings );
			}
		};
		
		
		/**
		 * Filter the input based on data
		 *  @param {string} sInput String to filter the table on
		 *  @param {int|null} [iColumn] Column to limit filtering to
		 *  @param {bool} [bRegex=false] Treat as regular expression or not
		 *  @param {bool} [bSmart=true] Perform smart filtering or not
		 *  @param {bool} [bShowGlobal=true] Show the input global filter in it's input box(es)
		 *  @param {bool} [bCaseInsensitive=true] Do case-insensitive matching (true) or not (false)
		 *  @dtopt API
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      
		 *      // Sometime later - filter...
		 *      oTable.fnFilter( 'test string' );
		 *    } );
		 */
		this.fnFilter = function( sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive )
		{
			var oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );
			
			if ( !oSettings.oFeatures.bFilter )
			{
				return;
			}
			
			if ( bRegex === undefined || bRegex === null )
			{
				bRegex = false;
			}
			
			if ( bSmart === undefined || bSmart === null )
			{
				bSmart = true;
			}
			
			if ( bShowGlobal === undefined || bShowGlobal === null )
			{
				bShowGlobal = true;
			}
			
			if ( bCaseInsensitive === undefined || bCaseInsensitive === null )
			{
				bCaseInsensitive = true;
			}
			
			if ( iColumn === undefined || iColumn === null )
			{
				/* Global filter */
				_fnFilterComplete( oSettings, {
					"sSearch":sInput+"",
					"bRegex": bRegex,
					"bSmart": bSmart,
					"bCaseInsensitive": bCaseInsensitive
				}, 1 );
				
				if ( bShowGlobal && oSettings.aanFeatures.f )
				{
					var n = oSettings.aanFeatures.f;
					for ( var i=0, iLen=n.length ; i<iLen ; i++ )
					{
						// IE9 throws an 'unknown error' if document.activeElement is used
						// inside an iframe or frame...
						try {
							if ( n[i]._DT_Input != document.activeElement )
							{
								$(n[i]._DT_Input).val( sInput );
							}
						}
						catch ( e ) {
							$(n[i]._DT_Input).val( sInput );
						}
					}
				}
			}
			else
			{
				/* Single column filter */
				$.extend( oSettings.aoPreSearchCols[ iColumn ], {
					"sSearch": sInput+"",
					"bRegex": bRegex,
					"bSmart": bSmart,
					"bCaseInsensitive": bCaseInsensitive
				} );
				_fnFilterComplete( oSettings, oSettings.oPreviousSearch, 1 );
			}
		};
		
		
		/**
		 * Get the data for the whole table, an individual row or an individual cell based on the 
		 * provided parameters.
		 *  @param {int|node} [mRow] A TR row node, TD/TH cell node or an integer. If given as
		 *    a TR node then the data source for the whole row will be returned. If given as a
		 *    TD/TH cell node then iCol will be automatically calculated and the data for the
		 *    cell returned. If given as an integer, then this is treated as the aoData internal
		 *    data index for the row (see fnGetPosition) and the data for that row used.
		 *  @param {int} [iCol] Optional column index that you want the data of.
		 *  @returns {array|object|string} If mRow is undefined, then the data for all rows is
		 *    returned. If mRow is defined, just data for that row, and is iCol is
		 *    defined, only data for the designated cell is returned.
		 *  @dtopt API
		 *
		 *  @example
		 *    // Row data
		 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('tr').click( function () {
		 *        var data = oTable.fnGetData( this );
		 *        // ... do something with the array / object of data for the row
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Individual cell data
		 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('td').click( function () {
		 *        var sData = oTable.fnGetData( this );
		 *        alert( 'The cell clicked on had the value of '+sData );
		 *      } );
		 *    } );
		 */
		this.fnGetData = function( mRow, iCol )
		{
			var oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );
			
			if ( mRow !== undefined )
			{
				var iRow = mRow;
				if ( typeof mRow === 'object' )
				{
					var sNode = mRow.nodeName.toLowerCase();
					if (sNode === "tr" )
					{
						iRow = _fnNodeToDataIndex(oSettings, mRow);
					}
					else if ( sNode === "td" )
					{
						iRow = _fnNodeToDataIndex(oSettings, mRow.parentNode);
						iCol = _fnNodeToColumnIndex( oSettings, iRow, mRow );
					}
				}
		
				if ( iCol !== undefined )
				{
					return _fnGetCellData( oSettings, iRow, iCol, '' );
				}
				return (oSettings.aoData[iRow]!==undefined) ?
					oSettings.aoData[iRow]._aData : null;
			}
			return _fnGetDataMaster( oSettings );
		};
		
		
		/**
		 * Get an array of the TR nodes that are used in the table's body. Note that you will 
		 * typically want to use the '$' API method in preference to this as it is more 
		 * flexible.
		 *  @param {int} [iRow] Optional row index for the TR element you want
		 *  @returns {array|node} If iRow is undefined, returns an array of all TR elements
		 *    in the table's body, or iRow is defined, just the TR element requested.
		 *  @dtopt API
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      
		 *      // Get the nodes from the table
		 *      var nNodes = oTable.fnGetNodes( );
		 *    } );
		 */
		this.fnGetNodes = function( iRow )
		{
			var oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );
			
			if ( iRow !== undefined ) {
				return (oSettings.aoData[iRow]!==undefined) ?
					oSettings.aoData[iRow].nTr : null;
			}
			return _fnGetTrNodes( oSettings );
		};
		
		
		/**
		 * Get the array indexes of a particular cell from it's DOM element
		 * and column index including hidden columns
		 *  @param {node} nNode this can either be a TR, TD or TH in the table's body
		 *  @returns {int} If nNode is given as a TR, then a single index is returned, or
		 *    if given as a cell, an array of [row index, column index (visible), 
		 *    column index (all)] is given.
		 *  @dtopt API
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      $('#example tbody td').click( function () {
		 *        // Get the position of the current data from the node
		 *        var aPos = oTable.fnGetPosition( this );
		 *        
		 *        // Get the data array for this row
		 *        var aData = oTable.fnGetData( aPos[0] );
		 *        
		 *        // Update the data array and return the value
		 *        aData[ aPos[1] ] = 'clicked';
		 *        this.innerHTML = 'clicked';
		 *      } );
		 *      
		 *      // Init DataTables
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnGetPosition = function( nNode )
		{
			var oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );
			var sNodeName = nNode.nodeName.toUpperCase();
			
			if ( sNodeName == "TR" )
			{
				return _fnNodeToDataIndex(oSettings, nNode);
			}
			else if ( sNodeName == "TD" || sNodeName == "TH" )
			{
				var iDataIndex = _fnNodeToDataIndex( oSettings, nNode.parentNode );
				var iColumnIndex = _fnNodeToColumnIndex( oSettings, iDataIndex, nNode );
				return [ iDataIndex, _fnColumnIndexToVisible(oSettings, iColumnIndex ), iColumnIndex ];
			}
			return null;
		};
		
		
		/**
		 * Check to see if a row is 'open' or not.
		 *  @param {node} nTr the table row to check
		 *  @returns {boolean} true if the row is currently open, false otherwise
		 *  @dtopt API
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *      
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *      
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnIsOpen = function( nTr )
		{
			var oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );
			var aoOpenRows = oSettings.aoOpenRows;
			
			for ( var i=0 ; i<oSettings.aoOpenRows.length ; i++ )
			{
				if ( oSettings.aoOpenRows[i].nParent == nTr )
				{
					return true;
				}
			}
			return false;
		};
		
		
		/**
		 * This function will place a new row directly after a row which is currently 
		 * on display on the page, with the HTML contents that is passed into the 
		 * function. This can be used, for example, to ask for confirmation that a 
		 * particular record should be deleted.
		 *  @param {node} nTr The table row to 'open'
		 *  @param {string|node|jQuery} mHtml The HTML to put into the row
		 *  @param {string} sClass Class to give the new TD cell
		 *  @returns {node} The row opened. Note that if the table row passed in as the
		 *    first parameter, is not found in the table, this method will silently
		 *    return.
		 *  @dtopt API
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *      
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *      
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnOpen = function( nTr, mHtml, sClass )
		{
			/* Find settings from table node */
			var oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );
		
			/* Check that the row given is in the table */
			var nTableRows = _fnGetTrNodes( oSettings );
			if ( $.inArray(nTr, nTableRows) === -1 )
			{
				return;
			}
			
			/* the old open one if there is one */
			this.fnClose( nTr );
			
			var nNewRow = document.createElement("tr");
			var nNewCell = document.createElement("td");
			nNewRow.appendChild( nNewCell );
			nNewCell.className = sClass;
			nNewCell.colSpan = _fnVisbleColumns( oSettings );
		
			if (typeof mHtml === "string")
			{
				nNewCell.innerHTML = mHtml;
			}
			else
			{
				$(nNewCell).html( mHtml );
			}
		
			/* If the nTr isn't on the page at the moment - then we don't insert at the moment */
			var nTrs = $('tr', oSettings.nTBody);
			if ( $.inArray(nTr, nTrs) != -1  )
			{
				$(nNewRow).insertAfter(nTr);
			}
			
			oSettings.aoOpenRows.push( {
				"nTr": nNewRow,
				"nParent": nTr
			} );
			
			return nNewRow;
		};
		
		
		/**
		 * Change the pagination - provides the internal logic for pagination in a simple API 
		 * function. With this function you can have a DataTables table go to the next, 
		 * previous, first or last pages.
		 *  @param {string|int} mAction Paging action to take: "first", "previous", "next" or "last"
		 *    or page number to jump to (integer), note that page 0 is the first page.
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @dtopt API
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnPageChange( 'next' );
		 *    } );
		 */
		this.fnPageChange = function ( mAction, bRedraw )
		{
			var oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );
			_fnPageChange( oSettings, mAction );
			_fnCalculateEnd( oSettings );
			
			if ( bRedraw === undefined || bRedraw )
			{
				_fnDraw( oSettings );
			}
		};
		
		
		/**
		 * Show a particular column
		 *  @param {int} iCol The column whose display should be changed
		 *  @param {bool} bShow Show (true) or hide (false) the column
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @dtopt API
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      
		 *      // Hide the second column after initialisation
		 *      oTable.fnSetColumnVis( 1, false );
		 *    } );
		 */
		this.fnSetColumnVis = function ( iCol, bShow, bRedraw )
		{
			var oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );
			var i, iLen;
			var aoColumns = oSettings.aoColumns;
			var aoData = oSettings.aoData;
			var nTd, bAppend, iBefore;
			
			/* No point in doing anything if we are requesting what is already true */
			if ( aoColumns[iCol].bVisible == bShow )
			{
				return;
			}
			
			/* Show the column */
			if ( bShow )
			{
				var iInsert = 0;
				for ( i=0 ; i<iCol ; i++ )
				{
					if ( aoColumns[i].bVisible )
					{
						iInsert++;
					}
				}
				
				/* Need to decide if we should use appendChild or insertBefore */
				bAppend = (iInsert >= _fnVisbleColumns( oSettings ));
		
				/* Which coloumn should we be inserting before? */
				if ( !bAppend )
				{
					for ( i=iCol ; i<aoColumns.length ; i++ )
					{
						if ( aoColumns[i].bVisible )
						{
							iBefore = i;
							break;
						}
					}
				}
		
				for ( i=0, iLen=aoData.length ; i<iLen ; i++ )
				{
					if ( aoData[i].nTr !== null )
					{
						if ( bAppend )
						{
							aoData[i].nTr.appendChild( 
								aoData[i]._anHidden[iCol]
							);
						}
						else
						{
							aoData[i].nTr.insertBefore(
								aoData[i]._anHidden[iCol], 
								_fnGetTdNodes( oSettings, i )[iBefore] );
						}
					}
				}
			}
			else
			{
				/* Remove a column from display */
				for ( i=0, iLen=aoData.length ; i<iLen ; i++ )
				{
					if ( aoData[i].nTr !== null )
					{
						nTd = _fnGetTdNodes( oSettings, i )[iCol];
						aoData[i]._anHidden[iCol] = nTd;
						nTd.parentNode.removeChild( nTd );
					}
				}
			}
		
			/* Clear to set the visible flag */
			aoColumns[iCol].bVisible = bShow;
		
			/* Redraw the header and footer based on the new column visibility */
			_fnDrawHead( oSettings, oSettings.aoHeader );
			if ( oSettings.nTFoot )
			{
				_fnDrawHead( oSettings, oSettings.aoFooter );
			}
			
			/* If there are any 'open' rows, then we need to alter the colspan for this col change */
			for ( i=0, iLen=oSettings.aoOpenRows.length ; i<iLen ; i++ )
			{
				oSettings.aoOpenRows[i].nTr.colSpan = _fnVisbleColumns( oSettings );
			}
			
			/* Do a redraw incase anything depending on the table columns needs it 
			 * (built-in: scrolling) 
			 */
			if ( bRedraw === undefined || bRedraw )
			{
				_fnAdjustColumnSizing( oSettings );
				_fnDraw( oSettings );
			}
			
			_fnSaveState( oSettings );
		};
		
		
		/**
		 * Get the settings for a particular table for external manipulation
		 *  @returns {object} DataTables settings object. See 
		 *    {@link DataTable.models.oSettings}
		 *  @dtopt API
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      var oSettings = oTable.fnSettings();
		 *      
		 *      // Show an example parameter from the settings
		 *      alert( oSettings._iDisplayStart );
		 *    } );
		 */
		this.fnSettings = function()
		{
			return _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );
		};
		
		
		/**
		 * Sort the table by a particular column
		 *  @param {int} iCol the data index to sort on. Note that this will not match the 
		 *    'display index' if you have hidden data entries
		 *  @dtopt API
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      
		 *      // Sort immediately with columns 0 and 1
		 *      oTable.fnSort( [ [0,'asc'], [1,'asc'] ] );
		 *    } );
		 */
		this.fnSort = function( aaSort )
		{
			var oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );
			oSettings.aaSorting = aaSort;
			_fnSort( oSettings );
		};
		
		
		/**
		 * Attach a sort listener to an element for a given column
		 *  @param {node} nNode the element to attach the sort listener to
		 *  @param {int} iColumn the column that a click on this node will sort on
		 *  @param {function} [fnCallback] callback function when sort is run
		 *  @dtopt API
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      
		 *      // Sort on column 1, when 'sorter' is clicked on
		 *      oTable.fnSortListener( document.getElementById('sorter'), 1 );
		 *    } );
		 */
		this.fnSortListener = function( nNode, iColumn, fnCallback )
		{
			_fnSortAttachListener( _fnSettingsFromNode( this[DataTable.ext.iApiIndex] ), nNode, iColumn,
			 	fnCallback );
		};
		
		
		/**
		 * Update a table cell or row - this method will accept either a single value to
		 * update the cell with, an array of values with one element for each column or
		 * an object in the same format as the original data source. The function is
		 * self-referencing in order to make the multi column updates easier.
		 *  @param {object|array|string} mData Data to update the cell/row with
		 *  @param {node|int} mRow TR element you want to update or the aoData index
		 *  @param {int} [iColumn] The column to update (not used of mData is an array or object)
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @param {bool} [bAction=true] Perform pre-draw actions or not
		 *  @returns {int} 0 on success, 1 on error
		 *  @dtopt API
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnUpdate( 'Example update', 0, 0 ); // Single cell
		 *      oTable.fnUpdate( ['a', 'b', 'c', 'd', 'e'], 1, 0 ); // Row
		 *    } );
		 */
		this.fnUpdate = function( mData, mRow, iColumn, bRedraw, bAction )
		{
			var oSettings = _fnSettingsFromNode( this[DataTable.ext.iApiIndex] );
			var i, iLen, sDisplay;
			var iRow = (typeof mRow === 'object') ? 
				_fnNodeToDataIndex(oSettings, mRow) : mRow;
			
			if ( $.isArray(mData) && iColumn === undefined )
			{
				/* Array update - update the whole row */
				oSettings.aoData[iRow]._aData = mData.slice();
				
				/* Flag to the function that we are recursing */
				for ( i=0 ; i<oSettings.aoColumns.length ; i++ )
				{
					this.fnUpdate( _fnGetCellData( oSettings, iRow, i ), iRow, i, false, false );
				}
			}
			else if ( $.isPlainObject(mData) && iColumn === undefined )
			{
				/* Object update - update the whole row - assume the developer gets the object right */
				oSettings.aoData[iRow]._aData = $.extend( true, {}, mData );
		
				for ( i=0 ; i<oSettings.aoColumns.length ; i++ )
				{
					this.fnUpdate( _fnGetCellData( oSettings, iRow, i ), iRow, i, false, false );
				}
			}
			else
			{
				/* Individual cell update */
				_fnSetCellData( oSettings, iRow, iColumn, mData );
				sDisplay = _fnGetCellData( oSettings, iRow, iColumn, 'display' );
				
				var oCol = oSettings.aoColumns[iColumn];
				if ( oCol.fnRender !== null )
				{
					sDisplay = _fnRender( oSettings, iRow, iColumn );
					if ( oCol.bUseRendered )
					{
						_fnSetCellData( oSettings, iRow, iColumn, sDisplay );
					}
				}
				
				if ( oSettings.aoData[iRow].nTr !== null )
				{
					/* Do the actual HTML update */
					_fnGetTdNodes( oSettings, iRow )[iColumn].innerHTML = sDisplay;
				}
			}
			
			/* Modify the search index for this row (strictly this is likely not needed, since fnReDraw
			 * will rebuild the search array - however, the redraw might be disabled by the user)
			 */
			var iDisplayIndex = $.inArray( iRow, oSettings.aiDisplay );
			oSettings.asDataSearch[iDisplayIndex] = _fnBuildSearchRow(
				oSettings, 
				_fnGetRowData( oSettings, iRow, 'filter', _fnGetColumns( oSettings, 'bSearchable' ) )
			);
			
			/* Perform pre-draw actions */
			if ( bAction === undefined || bAction )
			{
				_fnAdjustColumnSizing( oSettings );
			}
			
			/* Redraw the table */
			if ( bRedraw === undefined || bRedraw )
			{
				_fnReDraw( oSettings );
			}
			return 0;
		};
		
		
		/**
		 * Provide a common method for plug-ins to check the version of DataTables being used, in order
		 * to ensure compatibility.
		 *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note that the
		 *    formats "X" and "X.Y" are also acceptable.
		 *  @returns {boolean} true if this version of DataTables is greater or equal to the required
		 *    version, or false if this version of DataTales is not suitable
		 *  @method
		 *  @dtopt API
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      alert( oTable.fnVersionCheck( '1.9.0' ) );
		 *    } );
		 */
		this.fnVersionCheck = DataTable.ext.fnVersionCheck;
		
		
		/*
		 * This is really a good bit rubbish this method of exposing the internal methods
		 * publicly... - To be fixed in 2.0 using methods on the prototype
		 */
		
		
		/**
		 * Create a wrapper function for exporting an internal functions to an external API.
		 *  @param {string} sFunc API function name
		 *  @returns {function} wrapped function
		 *  @memberof DataTable#oApi
		 */
		function _fnExternApiFunc (sFunc)
		{
			return function() {
				var aArgs = [_fnSettingsFromNode(this[DataTable.ext.iApiIndex])].concat( 
					Array.prototype.slice.call(arguments) );
				return DataTable.ext.oApi[sFunc].apply( this, aArgs );
			};
		}
		
		
		/**
		 * Reference to internal functions for use by plug-in developers. Note that these
		 * methods are references to internal functions and are considered to be private.
		 * If you use these methods, be aware that they are liable to change between versions
		 * (check the upgrade notes).
		 *  @namespace
		 */
		this.oApi = {
			"_fnExternApiFunc": _fnExternApiFunc,
			"_fnInitialise": _fnInitialise,
			"_fnInitComplete": _fnInitComplete,
			"_fnLanguageCompat": _fnLanguageCompat,
			"_fnAddColumn": _fnAddColumn,
			"_fnColumnOptions": _fnColumnOptions,
			"_fnAddData": _fnAddData,
			"_fnCreateTr": _fnCreateTr,
			"_fnGatherData": _fnGatherData,
			"_fnBuildHead": _fnBuildHead,
			"_fnDrawHead": _fnDrawHead,
			"_fnDraw": _fnDraw,
			"_fnReDraw": _fnReDraw,
			"_fnAjaxUpdate": _fnAjaxUpdate,
			"_fnAjaxParameters": _fnAjaxParameters,
			"_fnAjaxUpdateDraw": _fnAjaxUpdateDraw,
			"_fnServerParams": _fnServerParams,
			"_fnAddOptionsHtml": _fnAddOptionsHtml,
			"_fnFeatureHtmlTable": _fnFeatureHtmlTable,
			"_fnScrollDraw": _fnScrollDraw,
			"_fnAdjustColumnSizing": _fnAdjustColumnSizing,
			"_fnFeatureHtmlFilter": _fnFeatureHtmlFilter,
			"_fnFilterComplete": _fnFilterComplete,
			"_fnFilterCustom": _fnFilterCustom,
			"_fnFilterColumn": _fnFilterColumn,
			"_fnFilter": _fnFilter,
			"_fnBuildSearchArray": _fnBuildSearchArray,
			"_fnBuildSearchRow": _fnBuildSearchRow,
			"_fnFilterCreateSearch": _fnFilterCreateSearch,
			"_fnDataToSearch": _fnDataToSearch,
			"_fnSort": _fnSort,
			"_fnSortAttachListener": _fnSortAttachListener,
			"_fnSortingClasses": _fnSortingClasses,
			"_fnFeatureHtmlPaginate": _fnFeatureHtmlPaginate,
			"_fnPageChange": _fnPageChange,
			"_fnFeatureHtmlInfo": _fnFeatureHtmlInfo,
			"_fnUpdateInfo": _fnUpdateInfo,
			"_fnFeatureHtmlLength": _fnFeatureHtmlLength,
			"_fnFeatureHtmlProcessing": _fnFeatureHtmlProcessing,
			"_fnProcessingDisplay": _fnProcessingDisplay,
			"_fnVisibleToColumnIndex": _fnVisibleToColumnIndex,
			"_fnColumnIndexToVisible": _fnColumnIndexToVisible,
			"_fnNodeToDataIndex": _fnNodeToDataIndex,
			"_fnVisbleColumns": _fnVisbleColumns,
			"_fnCalculateEnd": _fnCalculateEnd,
			"_fnConvertToWidth": _fnConvertToWidth,
			"_fnCalculateColumnWidths": _fnCalculateColumnWidths,
			"_fnScrollingWidthAdjust": _fnScrollingWidthAdjust,
			"_fnGetWidestNode": _fnGetWidestNode,
			"_fnGetMaxLenString": _fnGetMaxLenString,
			"_fnStringToCss": _fnStringToCss,
			"_fnDetectType": _fnDetectType,
			"_fnSettingsFromNode": _fnSettingsFromNode,
			"_fnGetDataMaster": _fnGetDataMaster,
			"_fnGetTrNodes": _fnGetTrNodes,
			"_fnGetTdNodes": _fnGetTdNodes,
			"_fnEscapeRegex": _fnEscapeRegex,
			"_fnDeleteIndex": _fnDeleteIndex,
			"_fnReOrderIndex": _fnReOrderIndex,
			"_fnColumnOrdering": _fnColumnOrdering,
			"_fnLog": _fnLog,
			"_fnClearTable": _fnClearTable,
			"_fnSaveState": _fnSaveState,
			"_fnLoadState": _fnLoadState,
			"_fnCreateCookie": _fnCreateCookie,
			"_fnReadCookie": _fnReadCookie,
			"_fnDetectHeader": _fnDetectHeader,
			"_fnGetUniqueThs": _fnGetUniqueThs,
			"_fnScrollBarWidth": _fnScrollBarWidth,
			"_fnApplyToChildren": _fnApplyToChildren,
			"_fnMap": _fnMap,
			"_fnGetRowData": _fnGetRowData,
			"_fnGetCellData": _fnGetCellData,
			"_fnSetCellData": _fnSetCellData,
			"_fnGetObjectDataFn": _fnGetObjectDataFn,
			"_fnSetObjectDataFn": _fnSetObjectDataFn,
			"_fnApplyColumnDefs": _fnApplyColumnDefs,
			"_fnBindAction": _fnBindAction,
			"_fnExtend": _fnExtend,
			"_fnCallbackReg": _fnCallbackReg,
			"_fnCallbackFire": _fnCallbackFire,
			"_fnJsonString": _fnJsonString,
			"_fnRender": _fnRender,
			"_fnNodeToColumnIndex": _fnNodeToColumnIndex,
			"_fnInfoMacros": _fnInfoMacros,
			"_fnBrowserDetect": _fnBrowserDetect,
			"_fnGetColumns": _fnGetColumns
		};
		
		$.extend( DataTable.ext.oApi, this.oApi );
		
		for ( var sFunc in DataTable.ext.oApi )
		{
			if ( sFunc )
			{
				this[sFunc] = _fnExternApiFunc(sFunc);
			}
		}
		
		
		var _that = this;
		this.each(function() {
			var i=0, iLen, j, jLen, k, kLen;
			var sId = this.getAttribute( 'id' );
			var bInitHandedOff = false;
			var bUsePassedData = false;
			
			
			/* Sanity check */
			if ( this.nodeName.toLowerCase() != 'table' )
			{
				_fnLog( null, 0, "Attempted to initialise DataTables on a node which is not a "+
					"table: "+this.nodeName );
				return;
			}
			
			/* Check to see if we are re-initialising a table */
			for ( i=0, iLen=DataTable.settings.length ; i<iLen ; i++ )
			{
				/* Base check on table node */
				if ( DataTable.settings[i].nTable == this )
				{
					if ( oInit === undefined || oInit.bRetrieve )
					{
						return DataTable.settings[i].oInstance;
					}
					else if ( oInit.bDestroy )
					{
						DataTable.settings[i].oInstance.fnDestroy();
						break;
					}
					else
					{
						_fnLog( DataTable.settings[i], 0, "Cannot reinitialise DataTable.\n\n"+
							"To retrieve the DataTables object for this table, pass no arguments or see "+
							"the docs for bRetrieve and bDestroy" );
						return;
					}
				}
				
				/* If the element we are initialising has the same ID as a table which was previously
				 * initialised, but the table nodes don't match (from before) then we destroy the old
				 * instance by simply deleting it. This is under the assumption that the table has been
				 * destroyed by other methods. Anyone using non-id selectors will need to do this manually
				 */
				if ( DataTable.settings[i].sTableId == this.id )
				{
					DataTable.settings.splice( i, 1 );
					break;
				}
			}
			
			/* Ensure the table has an ID - required for accessibility */
			if ( sId === null || sId === "" )
			{
				sId = "DataTables_Table_"+(DataTable.ext._oExternConfig.iNextUnique++);
				this.id = sId;
			}
			
			/* Create the settings object for this table and set some of the default parameters */
			var oSettings = $.extend( true, {}, DataTable.models.oSettings, {
				"nTable":        this,
				"oApi":          _that.oApi,
				"oInit":         oInit,
				"sDestroyWidth": $(this).width(),
				"sInstance":     sId,
				"sTableId":      sId
			} );
			DataTable.settings.push( oSettings );
			
			// Need to add the instance after the instance after the settings object has been added
			// to the settings array, so we can self reference the table instance if more than one
			oSettings.oInstance = (_that.length===1) ? _that : $(this).dataTable();
			
			/* Setting up the initialisation object */
			if ( !oInit )
			{
				oInit = {};
			}
			
			// Backwards compatibility, before we apply all the defaults
			if ( oInit.oLanguage )
			{
				_fnLanguageCompat( oInit.oLanguage );
			}
			
			oInit = _fnExtend( $.extend(true, {}, DataTable.defaults), oInit );
			
			// Map the initialisation options onto the settings object
			_fnMap( oSettings.oFeatures, oInit, "bPaginate" );
			_fnMap( oSettings.oFeatures, oInit, "bLengthChange" );
			_fnMap( oSettings.oFeatures, oInit, "bFilter" );
			_fnMap( oSettings.oFeatures, oInit, "bSort" );
			_fnMap( oSettings.oFeatures, oInit, "bInfo" );
			_fnMap( oSettings.oFeatures, oInit, "bProcessing" );
			_fnMap( oSettings.oFeatures, oInit, "bAutoWidth" );
			_fnMap( oSettings.oFeatures, oInit, "bSortClasses" );
			_fnMap( oSettings.oFeatures, oInit, "bServerSide" );
			_fnMap( oSettings.oFeatures, oInit, "bDeferRender" );
			_fnMap( oSettings.oScroll, oInit, "sScrollX", "sX" );
			_fnMap( oSettings.oScroll, oInit, "sScrollXInner", "sXInner" );
			_fnMap( oSettings.oScroll, oInit, "sScrollY", "sY" );
			_fnMap( oSettings.oScroll, oInit, "bScrollCollapse", "bCollapse" );
			_fnMap( oSettings.oScroll, oInit, "bScrollInfinite", "bInfinite" );
			_fnMap( oSettings.oScroll, oInit, "iScrollLoadGap", "iLoadGap" );
			_fnMap( oSettings.oScroll, oInit, "bScrollAutoCss", "bAutoCss" );
			_fnMap( oSettings, oInit, "asStripeClasses" );
			_fnMap( oSettings, oInit, "asStripClasses", "asStripeClasses" ); // legacy
			_fnMap( oSettings, oInit, "fnServerData" );
			_fnMap( oSettings, oInit, "fnFormatNumber" );
			_fnMap( oSettings, oInit, "sServerMethod" );
			_fnMap( oSettings, oInit, "aaSorting" );
			_fnMap( oSettings, oInit, "aaSortingFixed" );
			_fnMap( oSettings, oInit, "aLengthMenu" );
			_fnMap( oSettings, oInit, "sPaginationType" );
			_fnMap( oSettings, oInit, "sAjaxSource" );
			_fnMap( oSettings, oInit, "sAjaxDataProp" );
			_fnMap( oSettings, oInit, "iCookieDuration" );
			_fnMap( oSettings, oInit, "sCookiePrefix" );
			_fnMap( oSettings, oInit, "sDom" );
			_fnMap( oSettings, oInit, "bSortCellsTop" );
			_fnMap( oSettings, oInit, "iTabIndex" );
			_fnMap( oSettings, oInit, "oSearch", "oPreviousSearch" );
			_fnMap( oSettings, oInit, "aoSearchCols", "aoPreSearchCols" );
			_fnMap( oSettings, oInit, "iDisplayLength", "_iDisplayLength" );
			_fnMap( oSettings, oInit, "bJQueryUI", "bJUI" );
			_fnMap( oSettings, oInit, "fnCookieCallback" );
			_fnMap( oSettings, oInit, "fnStateLoad" );
			_fnMap( oSettings, oInit, "fnStateSave" );
			_fnMap( oSettings.oLanguage, oInit, "fnInfoCallback" );
			
			/* Callback functions which are array driven */
			_fnCallbackReg( oSettings, 'aoDrawCallback',       oInit.fnDrawCallback,      'user' );
			_fnCallbackReg( oSettings, 'aoServerParams',       oInit.fnServerParams,      'user' );
			_fnCallbackReg( oSettings, 'aoStateSaveParams',    oInit.fnStateSaveParams,   'user' );
			_fnCallbackReg( oSettings, 'aoStateLoadParams',    oInit.fnStateLoadParams,   'user' );
			_fnCallbackReg( oSettings, 'aoStateLoaded',        oInit.fnStateLoaded,       'user' );
			_fnCallbackReg( oSettings, 'aoRowCallback',        oInit.fnRowCallback,       'user' );
			_fnCallbackReg( oSettings, 'aoRowCreatedCallback', oInit.fnCreatedRow,        'user' );
			_fnCallbackReg( oSettings, 'aoHeaderCallback',     oInit.fnHeaderCallback,    'user' );
			_fnCallbackReg( oSettings, 'aoFooterCallback',     oInit.fnFooterCallback,    'user' );
			_fnCallbackReg( oSettings, 'aoInitComplete',       oInit.fnInitComplete,      'user' );
			_fnCallbackReg( oSettings, 'aoPreDrawCallback',    oInit.fnPreDrawCallback,   'user' );
			
			if ( oSettings.oFeatures.bServerSide && oSettings.oFeatures.bSort &&
				   oSettings.oFeatures.bSortClasses )
			{
				/* Enable sort classes for server-side processing. Safe to do it here, since server-side
				 * processing must be enabled by the developer
				 */
				_fnCallbackReg( oSettings, 'aoDrawCallback', _fnSortingClasses, 'server_side_sort_classes' );
			}
			else if ( oSettings.oFeatures.bDeferRender )
			{
				_fnCallbackReg( oSettings, 'aoDrawCallback', _fnSortingClasses, 'defer_sort_classes' );
			}
			
			if ( oInit.bJQueryUI )
			{
				/* Use the JUI classes object for display. You could clone the oStdClasses object if 
				 * you want to have multiple tables with multiple independent classes 
				 */
				$.extend( oSettings.oClasses, DataTable.ext.oJUIClasses );
				
				if ( oInit.sDom === DataTable.defaults.sDom && DataTable.defaults.sDom === "lfrtip" )
				{
					/* Set the DOM to use a layout suitable for jQuery UI's theming */
					oSettings.sDom = '<"H"lfr>t<"F"ip>';
				}
			}
			else
			{
				$.extend( oSettings.oClasses, DataTable.ext.oStdClasses );
			}
			$(this).addClass( oSettings.oClasses.sTable );
			
			/* Calculate the scroll bar width and cache it for use later on */
			if ( oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "" )
			{
				oSettings.oScroll.iBarWidth = _fnScrollBarWidth();
			}
			
			if ( oSettings.iInitDisplayStart === undefined )
			{
				/* Display start point, taking into account the save saving */
				oSettings.iInitDisplayStart = oInit.iDisplayStart;
				oSettings._iDisplayStart = oInit.iDisplayStart;
			}
			
			/* Must be done after everything which can be overridden by a cookie! */
			if ( oInit.bStateSave )
			{
				oSettings.oFeatures.bStateSave = true;
				_fnLoadState( oSettings, oInit );
				_fnCallbackReg( oSettings, 'aoDrawCallback', _fnSaveState, 'state_save' );
			}
			
			if ( oInit.iDeferLoading !== null )
			{
				oSettings.bDeferLoading = true;
				var tmp = $.isArray( oInit.iDeferLoading );
				oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;
				oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
			}
			
			if ( oInit.aaData !== null )
			{
				bUsePassedData = true;
			}
			
			/* Language definitions */
			if ( oInit.oLanguage.sUrl !== "" )
			{
				/* Get the language definitions from a file - because this Ajax call makes the language
				 * get async to the remainder of this function we use bInitHandedOff to indicate that 
				 * _fnInitialise will be fired by the returned Ajax handler, rather than the constructor
				 */
				oSettings.oLanguage.sUrl = oInit.oLanguage.sUrl;
				$.getJSON( oSettings.oLanguage.sUrl, null, function( json ) {
					_fnLanguageCompat( json );
					$.extend( true, oSettings.oLanguage, oInit.oLanguage, json );
					_fnInitialise( oSettings );
				} );
				bInitHandedOff = true;
			}
			else
			{
				$.extend( true, oSettings.oLanguage, oInit.oLanguage );
			}
			
			
			/*
			 * Stripes
			 */
			if ( oInit.asStripeClasses === null )
			{
				oSettings.asStripeClasses =[
					oSettings.oClasses.sStripeOdd,
					oSettings.oClasses.sStripeEven
				];
			}
			
			/* Remove row stripe classes if they are already on the table row */
			iLen=oSettings.asStripeClasses.length;
			oSettings.asDestroyStripes = [];
			if (iLen)
			{
				var bStripeRemove = false;
				var anRows = $(this).children('tbody').children('tr:lt(' + iLen + ')');
				for ( i=0 ; i<iLen ; i++ )
				{
					if ( anRows.hasClass( oSettings.asStripeClasses[i] ) )
					{
						bStripeRemove = true;
						
						/* Store the classes which we are about to remove so they can be re-added on destroy */
						oSettings.asDestroyStripes.push( oSettings.asStripeClasses[i] );
					}
				}
				
				if ( bStripeRemove )
				{
					anRows.removeClass( oSettings.asStripeClasses.join(' ') );
				}
			}
			
			/*
			 * Columns
			 * See if we should load columns automatically or use defined ones
			 */
			var anThs = [];
			var aoColumnsInit;
			var nThead = this.getElementsByTagName('thead');
			if ( nThead.length !== 0 )
			{
				_fnDetectHeader( oSettings.aoHeader, nThead[0] );
				anThs = _fnGetUniqueThs( oSettings );
			}
			
			/* If not given a column array, generate one with nulls */
			if ( oInit.aoColumns === null )
			{
				aoColumnsInit = [];
				for ( i=0, iLen=anThs.length ; i<iLen ; i++ )
				{
					aoColumnsInit.push( null );
				}
			}
			else
			{
				aoColumnsInit = oInit.aoColumns;
			}
			
			/* Add the columns */
			for ( i=0, iLen=aoColumnsInit.length ; i<iLen ; i++ )
			{
				/* Short cut - use the loop to check if we have column visibility state to restore */
				if ( oInit.saved_aoColumns !== undefined && oInit.saved_aoColumns.length == iLen )
				{
					if ( aoColumnsInit[i] === null )
					{
						aoColumnsInit[i] = {};
					}
					aoColumnsInit[i].bVisible = oInit.saved_aoColumns[i].bVisible;
				}
				
				_fnAddColumn( oSettings, anThs ? anThs[i] : null );
			}
			
			/* Apply the column definitions */
			_fnApplyColumnDefs( oSettings, oInit.aoColumnDefs, aoColumnsInit, function (iCol, oDef) {
				_fnColumnOptions( oSettings, iCol, oDef );
			} );
			
			
			/*
			 * Sorting
			 * Check the aaSorting array
			 */
			for ( i=0, iLen=oSettings.aaSorting.length ; i<iLen ; i++ )
			{
				if ( oSettings.aaSorting[i][0] >= oSettings.aoColumns.length )
				{
					oSettings.aaSorting[i][0] = 0;
				}
				var oColumn = oSettings.aoColumns[ oSettings.aaSorting[i][0] ];
				
				/* Add a default sorting index */
				if ( oSettings.aaSorting[i][2] === undefined )
				{
					oSettings.aaSorting[i][2] = 0;
				}
				
				/* If aaSorting is not defined, then we use the first indicator in asSorting */
				if ( oInit.aaSorting === undefined && oSettings.saved_aaSorting === undefined )
				{
					oSettings.aaSorting[i][1] = oColumn.asSorting[0];
				}
				
				/* Set the current sorting index based on aoColumns.asSorting */
				for ( j=0, jLen=oColumn.asSorting.length ; j<jLen ; j++ )
				{
					if ( oSettings.aaSorting[i][1] == oColumn.asSorting[j] )
					{
						oSettings.aaSorting[i][2] = j;
						break;
					}
				}
			}
				
			/* Do a first pass on the sorting classes (allows any size changes to be taken into
			 * account, and also will apply sorting disabled classes if disabled
			 */
			_fnSortingClasses( oSettings );
			
			
			/*
			 * Final init
			 * Cache the header, body and footer as required, creating them if needed
			 */
			
			/* Browser support detection */
			_fnBrowserDetect( oSettings );
			
			// Work around for Webkit bug 83867 - store the caption-side before removing from doc
			var captions = $(this).children('caption').each( function () {
				this._captionSide = $(this).css('caption-side');
			} );
			
			var thead = $(this).children('thead');
			if ( thead.length === 0 )
			{
				thead = [ document.createElement( 'thead' ) ];
				this.appendChild( thead[0] );
			}
			oSettings.nTHead = thead[0];
			
			var tbody = $(this).children('tbody');
			if ( tbody.length === 0 )
			{
				tbody = [ document.createElement( 'tbody' ) ];
				this.appendChild( tbody[0] );
			}
			oSettings.nTBody = tbody[0];
			oSettings.nTBody.setAttribute( "role", "alert" );
			oSettings.nTBody.setAttribute( "aria-live", "polite" );
			oSettings.nTBody.setAttribute( "aria-relevant", "all" );
			
			var tfoot = $(this).children('tfoot');
			if ( tfoot.length === 0 && captions.length > 0 && (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "") )
			{
				// If we are a scrolling table, and no footer has been given, then we need to create
				// a tfoot element for the caption element to be appended to
				tfoot = [ document.createElement( 'tfoot' ) ];
				this.appendChild( tfoot[0] );
			}
			
			if ( tfoot.length > 0 )
			{
				oSettings.nTFoot = tfoot[0];
				_fnDetectHeader( oSettings.aoFooter, oSettings.nTFoot );
			}
			
			/* Check if there is data passing into the constructor */
			if ( bUsePassedData )
			{
				for ( i=0 ; i<oInit.aaData.length ; i++ )
				{
					_fnAddData( oSettings, oInit.aaData[ i ] );
				}
			}
			else
			{
				/* Grab the data from the page */
				_fnGatherData( oSettings );
			}
			
			/* Copy the data index array */
			oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
			
			/* Initialisation complete - table can be drawn */
			oSettings.bInitialised = true;
			
			/* Check if we need to initialise the table (it might not have been handed off to the
			 * language processor)
			 */
			if ( bInitHandedOff === false )
			{
				_fnInitialise( oSettings );
			}
		} );
		_that = null;
		return this;
	};

	
	
	/**
	 * Provide a common method for plug-ins to check the version of DataTables being used, in order
	 * to ensure compatibility.
	 *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note that the
	 *    formats "X" and "X.Y" are also acceptable.
	 *  @returns {boolean} true if this version of DataTables is greater or equal to the required
	 *    version, or false if this version of DataTales is not suitable
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    alert( $.fn.dataTable.fnVersionCheck( '1.9.0' ) );
	 */
	DataTable.fnVersionCheck = function( sVersion )
	{
		/* This is cheap, but effective */
		var fnZPad = function (Zpad, count)
		{
			while(Zpad.length < count) {
				Zpad += '0';
			}
			return Zpad;
		};
		var aThis = DataTable.ext.sVersion.split('.');
		var aThat = sVersion.split('.');
		var sThis = '', sThat = '';
		
		for ( var i=0, iLen=aThat.length ; i<iLen ; i++ )
		{
			sThis += fnZPad( aThis[i], 3 );
			sThat += fnZPad( aThat[i], 3 );
		}
		
		return parseInt(sThis, 10) >= parseInt(sThat, 10);
	};
	
	
	/**
	 * Check if a TABLE node is a DataTable table already or not.
	 *  @param {node} nTable The TABLE node to check if it is a DataTable or not (note that other
	 *    node types can be passed in, but will always return false).
	 *  @returns {boolean} true the table given is a DataTable, or false otherwise
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    var ex = document.getElementById('example');
	 *    if ( ! $.fn.DataTable.fnIsDataTable( ex ) ) {
	 *      $(ex).dataTable();
	 *    }
	 */
	DataTable.fnIsDataTable = function ( nTable )
	{
		var o = DataTable.settings;
	
		for ( var i=0 ; i<o.length ; i++ )
		{
			if ( o[i].nTable === nTable || o[i].nScrollHead === nTable || o[i].nScrollFoot === nTable )
			{
				return true;
			}
		}
	
		return false;
	};
	
	
	/**
	 * Get all DataTable tables that have been initialised - optionally you can select to
	 * get only currently visible tables.
	 *  @param {boolean} [bVisible=false] Flag to indicate if you want all (default) or 
	 *    visible tables only.
	 *  @returns {array} Array of TABLE nodes (not DataTable instances) which are DataTables
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    var table = $.fn.dataTable.fnTables(true);
	 *    if ( table.length > 0 ) {
	 *      $(table).dataTable().fnAdjustColumnSizing();
	 *    }
	 */
	DataTable.fnTables = function ( bVisible )
	{
		var out = [];
	
		jQuery.each( DataTable.settings, function (i, o) {
			if ( !bVisible || (bVisible === true && $(o.nTable).is(':visible')) )
			{
				out.push( o.nTable );
			}
		} );
	
		return out;
	};
	

	/**
	 * Version string for plug-ins to check compatibility. Allowed format is
	 * a.b.c.d.e where: a:int, b:int, c:int, d:string(dev|beta), e:int. d and
	 * e are optional
	 *  @member
	 *  @type string
	 *  @default Version number
	 */
	DataTable.version = "1.9.4";

	/**
	 * Private data store, containing all of the settings objects that are created for the
	 * tables on a given page.
	 * 
	 * Note that the <i>DataTable.settings</i> object is aliased to <i>jQuery.fn.dataTableExt</i> 
	 * through which it may be accessed and manipulated, or <i>jQuery.fn.dataTable.settings</i>.
	 *  @member
	 *  @type array
	 *  @default []
	 *  @private
	 */
	DataTable.settings = [];

	/**
	 * Object models container, for the various models that DataTables has available
	 * to it. These models define the objects that are used to hold the active state 
	 * and configuration of the table.
	 *  @namespace
	 */
	DataTable.models = {};
	
	
	/**
	 * DataTables extension options and plug-ins. This namespace acts as a collection "area"
	 * for plug-ins that can be used to extend the default DataTables behaviour - indeed many
	 * of the build in methods use this method to provide their own capabilities (sorting methods
	 * for example).
	 * 
	 * Note that this namespace is aliased to jQuery.fn.dataTableExt so it can be readily accessed
	 * and modified by plug-ins.
	 *  @namespace
	 */
	DataTable.models.ext = {
		/**
		 * Plug-in filtering functions - this method of filtering is complimentary to the default
		 * type based filtering, and a lot more comprehensive as it allows you complete control
		 * over the filtering logic. Each element in this array is a function (parameters
		 * described below) that is called for every row in the table, and your logic decides if
		 * it should be included in the filtered data set or not.
		 *   <ul>
		 *     <li>
		 *       Function input parameters:
		 *       <ul>
		 *         <li>{object} DataTables settings object: see {@link DataTable.models.oSettings}.</li>
		 *         <li>{array|object} Data for the row to be processed (same as the original format
		 *           that was passed in as the data source, or an array from a DOM data source</li>
		 *         <li>{int} Row index in aoData ({@link DataTable.models.oSettings.aoData}), which can
		 *           be useful to retrieve the TR element if you need DOM interaction.</li>
		 *       </ul>
		 *     </li>
		 *     <li>
		 *       Function return:
		 *       <ul>
		 *         <li>{boolean} Include the row in the filtered result set (true) or not (false)</li>
		 *       </ul>
		 *     </il>
		 *   </ul>
		 *  @type array
		 *  @default []
		 *
		 *  @example
		 *    // The following example shows custom filtering being applied to the fourth column (i.e.
		 *    // the aData[3] index) based on two input values from the end-user, matching the data in 
		 *    // a certain range.
		 *    $.fn.dataTableExt.afnFiltering.push(
		 *      function( oSettings, aData, iDataIndex ) {
		 *        var iMin = document.getElementById('min').value * 1;
		 *        var iMax = document.getElementById('max').value * 1;
		 *        var iVersion = aData[3] == "-" ? 0 : aData[3]*1;
		 *        if ( iMin == "" && iMax == "" ) {
		 *          return true;
		 *        }
		 *        else if ( iMin == "" && iVersion < iMax ) {
		 *          return true;
		 *        }
		 *        else if ( iMin < iVersion && "" == iMax ) {
		 *          return true;
		 *        }
		 *        else if ( iMin < iVersion && iVersion < iMax ) {
		 *          return true;
		 *        }
		 *        return false;
		 *      }
		 *    );
		 */
		"afnFiltering": [],
	
	
		/**
		 * Plug-in sorting functions - this method of sorting is complimentary to the default type
		 * based sorting that DataTables does automatically, allowing much greater control over the
		 * the data that is being used to sort a column. This is useful if you want to do sorting
		 * based on live data (for example the contents of an 'input' element) rather than just the
		 * static string that DataTables knows of. The way these plug-ins work is that you create
		 * an array of the values you wish to be sorted for the column in question and then return
		 * that array. Which pre-sorting function is run here depends on the sSortDataType parameter
		 * that is used for the column (if any). This is the corollary of <i>ofnSearch</i> for sort 
		 * data.
		 *   <ul>
	     *     <li>
	     *       Function input parameters:
	     *       <ul>
		 *         <li>{object} DataTables settings object: see {@link DataTable.models.oSettings}.</li>
	     *         <li>{int} Target column index</li>
	     *       </ul>
	     *     </li>
		 *     <li>
		 *       Function return:
		 *       <ul>
		 *         <li>{array} Data for the column to be sorted upon</li>
		 *       </ul>
		 *     </il>
		 *   </ul>
		 *  
		 * Note that as of v1.9, it is typically preferable to use <i>mData</i> to prepare data for
		 * the different uses that DataTables can put the data to. Specifically <i>mData</i> when
		 * used as a function will give you a 'type' (sorting, filtering etc) that you can use to 
		 * prepare the data as required for the different types. As such, this method is deprecated.
		 *  @type array
		 *  @default []
		 *  @deprecated
		 *
		 *  @example
		 *    // Updating the cached sorting information with user entered values in HTML input elements
		 *    jQuery.fn.dataTableExt.afnSortData['dom-text'] = function ( oSettings, iColumn )
		 *    {
		 *      var aData = [];
		 *      $( 'td:eq('+iColumn+') input', oSettings.oApi._fnGetTrNodes(oSettings) ).each( function () {
		 *        aData.push( this.value );
		 *      } );
		 *      return aData;
		 *    }
		 */
		"afnSortData": [],
	
	
		/**
		 * Feature plug-ins - This is an array of objects which describe the feature plug-ins that are
		 * available to DataTables. These feature plug-ins are accessible through the sDom initialisation
		 * option. As such, each feature plug-in must describe a function that is used to initialise
		 * itself (fnInit), a character so the feature can be enabled by sDom (cFeature) and the name
		 * of the feature (sFeature). Thus the objects attached to this method must provide:
		 *   <ul>
		 *     <li>{function} fnInit Initialisation of the plug-in
		 *       <ul>
	     *         <li>
	     *           Function input parameters:
	     *           <ul>
		 *             <li>{object} DataTables settings object: see {@link DataTable.models.oSettings}.</li>
	     *           </ul>
	     *         </li>
		 *         <li>
		 *           Function return:
		 *           <ul>
		 *             <li>{node|null} The element which contains your feature. Note that the return
		 *                may also be void if your plug-in does not require to inject any DOM elements 
		 *                into DataTables control (sDom) - for example this might be useful when 
		 *                developing a plug-in which allows table control via keyboard entry.</li>
		 *           </ul>
		 *         </il>
		 *       </ul>
		 *     </li>
		 *     <li>{character} cFeature Character that will be matched in sDom - case sensitive</li>
		 *     <li>{string} sFeature Feature name</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 * 
		 *  @example
		 *    // How TableTools initialises itself.
		 *    $.fn.dataTableExt.aoFeatures.push( {
		 *      "fnInit": function( oSettings ) {
		 *        return new TableTools( { "oDTSettings": oSettings } );
		 *      },
		 *      "cFeature": "T",
		 *      "sFeature": "TableTools"
		 *    } );
		 */
		"aoFeatures": [],
	
	
		/**
		 * Type detection plug-in functions - DataTables utilises types to define how sorting and
		 * filtering behave, and types can be either  be defined by the developer (sType for the
		 * column) or they can be automatically detected by the methods in this array. The functions
		 * defined in the array are quite simple, taking a single parameter (the data to analyse) 
		 * and returning the type if it is a known type, or null otherwise.
		 *   <ul>
	     *     <li>
	     *       Function input parameters:
	     *       <ul>
		 *         <li>{*} Data from the column cell to be analysed</li>
	     *       </ul>
	     *     </li>
		 *     <li>
		 *       Function return:
		 *       <ul>
		 *         <li>{string|null} Data type detected, or null if unknown (and thus pass it
		 *           on to the other type detection functions.</li>
		 *       </ul>
		 *     </il>
		 *   </ul>
		 *  @type array
		 *  @default []
		 *  
		 *  @example
		 *    // Currency type detection plug-in:
		 *    jQuery.fn.dataTableExt.aTypes.push(
		 *      function ( sData ) {
		 *        var sValidChars = "0123456789.-";
		 *        var Char;
		 *        
		 *        // Check the numeric part
		 *        for ( i=1 ; i<sData.length ; i++ ) {
		 *          Char = sData.charAt(i); 
		 *          if (sValidChars.indexOf(Char) == -1) {
		 *            return null;
		 *          }
		 *        }
		 *        
		 *        // Check prefixed by currency
		 *        if ( sData.charAt(0) == '$' || sData.charAt(0) == '&pound;' ) {
		 *          return 'currency';
		 *        }
		 *        return null;
		 *      }
		 *    );
		 */
		"aTypes": [],
	
	
		/**
		 * Provide a common method for plug-ins to check the version of DataTables being used, 
		 * in order to ensure compatibility.
		 *  @type function
		 *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note 
		 *    that the formats "X" and "X.Y" are also acceptable.
		 *  @returns {boolean} true if this version of DataTables is greater or equal to the 
		 *    required version, or false if this version of DataTales is not suitable
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      alert( oTable.fnVersionCheck( '1.9.0' ) );
		 *    } );
		 */
		"fnVersionCheck": DataTable.fnVersionCheck,
	
	
		/**
		 * Index for what 'this' index API functions should use
		 *  @type int
		 *  @default 0
		 */
		"iApiIndex": 0,
	
	
		/**
		 * Pre-processing of filtering data plug-ins - When you assign the sType for a column
		 * (or have it automatically detected for you by DataTables or a type detection plug-in), 
		 * you will typically be using this for custom sorting, but it can also be used to provide 
		 * custom filtering by allowing you to pre-processing the data and returning the data in
		 * the format that should be filtered upon. This is done by adding functions this object 
		 * with a parameter name which matches the sType for that target column. This is the
		 * corollary of <i>afnSortData</i> for filtering data.
		 *   <ul>
	     *     <li>
	     *       Function input parameters:
	     *       <ul>
		 *         <li>{*} Data from the column cell to be prepared for filtering</li>
	     *       </ul>
	     *     </li>
		 *     <li>
		 *       Function return:
		 *       <ul>
		 *         <li>{string|null} Formatted string that will be used for the filtering.</li>
		 *       </ul>
		 *     </il>
		 *   </ul>
		 * 
		 * Note that as of v1.9, it is typically preferable to use <i>mData</i> to prepare data for
		 * the different uses that DataTables can put the data to. Specifically <i>mData</i> when
		 * used as a function will give you a 'type' (sorting, filtering etc) that you can use to 
		 * prepare the data as required for the different types. As such, this method is deprecated.
		 *  @type object
		 *  @default {}
		 *  @deprecated
		 *
		 *  @example
		 *    $.fn.dataTableExt.ofnSearch['title-numeric'] = function ( sData ) {
		 *      return sData.replace(/\n/g," ").replace( /<.*?>/g, "" );
		 *    }
		 */
		"ofnSearch": {},
	
	
		/**
		 * Container for all private functions in DataTables so they can be exposed externally
		 *  @type object
		 *  @default {}
		 */
		"oApi": {},
	
	
		/**
		 * Storage for the various classes that DataTables uses
		 *  @type object
		 *  @default {}
		 */
		"oStdClasses": {},
		
	
		/**
		 * Storage for the various classes that DataTables uses - jQuery UI suitable
		 *  @type object
		 *  @default {}
		 */
		"oJUIClasses": {},
	
	
		/**
		 * Pagination plug-in methods - The style and controls of the pagination can significantly 
		 * impact on how the end user interacts with the data in your table, and DataTables allows 
		 * the addition of pagination controls by extending this object, which can then be enabled
		 * through the <i>sPaginationType</i> initialisation parameter. Each pagination type that
		 * is added is an object (the property name of which is what <i>sPaginationType</i> refers
		 * to) that has two properties, both methods that are used by DataTables to update the
		 * control's state.
		 *   <ul>
		 *     <li>
		 *       fnInit -  Initialisation of the paging controls. Called only during initialisation 
		 *         of the table. It is expected that this function will add the required DOM elements 
		 *         to the page for the paging controls to work. The element pointer 
		 *         'oSettings.aanFeatures.p' array is provided by DataTables to contain the paging 
		 *         controls (note that this is a 2D array to allow for multiple instances of each 
		 *         DataTables DOM element). It is suggested that you add the controls to this element 
		 *         as children
		 *       <ul>
	     *         <li>
	     *           Function input parameters:
	     *           <ul>
		 *             <li>{object} DataTables settings object: see {@link DataTable.models.oSettings}.</li>
		 *             <li>{node} Container into which the pagination controls must be inserted</li>
		 *             <li>{function} Draw callback function - whenever the controls cause a page
		 *               change, this method must be called to redraw the table.</li>
	     *           </ul>
	     *         </li>
		 *         <li>
		 *           Function return:
		 *           <ul>
		 *             <li>No return required</li>
		 *           </ul>
		 *         </il>
		 *       </ul>
		 *     </il>
		 *     <li>
		 *       fnInit -  This function is called whenever the paging status of the table changes and is
		 *         typically used to update classes and/or text of the paging controls to reflex the new 
		 *         status.
		 *       <ul>
	     *         <li>
	     *           Function input parameters:
	     *           <ul>
		 *             <li>{object} DataTables settings object: see {@link DataTable.models.oSettings}.</li>
		 *             <li>{function} Draw callback function - in case you need to redraw the table again
		 *               or attach new event listeners</li>
	     *           </ul>
	     *         </li>
		 *         <li>
		 *           Function return:
		 *           <ul>
		 *             <li>No return required</li>
		 *           </ul>
		 *         </il>
		 *       </ul>
		 *     </il>
		 *   </ul>
		 *  @type object
		 *  @default {}
		 *
		 *  @example
		 *    $.fn.dataTableExt.oPagination.four_button = {
		 *      "fnInit": function ( oSettings, nPaging, fnCallbackDraw ) {
		 *        nFirst = document.createElement( 'span' );
		 *        nPrevious = document.createElement( 'span' );
		 *        nNext = document.createElement( 'span' );
		 *        nLast = document.createElement( 'span' );
		 *        
		 *        nFirst.appendChild( document.createTextNode( oSettings.oLanguage.oPaginate.sFirst ) );
		 *        nPrevious.appendChild( document.createTextNode( oSettings.oLanguage.oPaginate.sPrevious ) );
		 *        nNext.appendChild( document.createTextNode( oSettings.oLanguage.oPaginate.sNext ) );
		 *        nLast.appendChild( document.createTextNode( oSettings.oLanguage.oPaginate.sLast ) );
		 *        
		 *        nFirst.className = "paginate_button first";
		 *        nPrevious.className = "paginate_button previous";
		 *        nNext.className="paginate_button next";
		 *        nLast.className = "paginate_button last";
		 *        
		 *        nPaging.appendChild( nFirst );
		 *        nPaging.appendChild( nPrevious );
		 *        nPaging.appendChild( nNext );
		 *        nPaging.appendChild( nLast );
		 *        
		 *        $(nFirst).click( function () {
		 *          oSettings.oApi._fnPageChange( oSettings, "first" );
		 *          fnCallbackDraw( oSettings );
		 *        } );
		 *        
		 *        $(nPrevious).click( function() {
		 *          oSettings.oApi._fnPageChange( oSettings, "previous" );
		 *          fnCallbackDraw( oSettings );
		 *        } );
		 *        
		 *        $(nNext).click( function() {
		 *          oSettings.oApi._fnPageChange( oSettings, "next" );
		 *          fnCallbackDraw( oSettings );
		 *        } );
		 *        
		 *        $(nLast).click( function() {
		 *          oSettings.oApi._fnPageChange( oSettings, "last" );
		 *          fnCallbackDraw( oSettings );
		 *        } );
		 *        
		 *        $(nFirst).bind( 'selectstart', function () { return false; } );
		 *        $(nPrevious).bind( 'selectstart', function () { return false; } );
		 *        $(nNext).bind( 'selectstart', function () { return false; } );
		 *        $(nLast).bind( 'selectstart', function () { return false; } );
		 *      },
		 *      
		 *      "fnUpdate": function ( oSettings, fnCallbackDraw ) {
		 *        if ( !oSettings.aanFeatures.p ) {
		 *          return;
		 *        }
		 *        
		 *        // Loop over each instance of the pager
		 *        var an = oSettings.aanFeatures.p;
		 *        for ( var i=0, iLen=an.length ; i<iLen ; i++ ) {
		 *          var buttons = an[i].getElementsByTagName('span');
		 *          if ( oSettings._iDisplayStart === 0 ) {
		 *            buttons[0].className = "paginate_disabled_previous";
		 *            buttons[1].className = "paginate_disabled_previous";
		 *          }
		 *          else {
		 *            buttons[0].className = "paginate_enabled_previous";
		 *            buttons[1].className = "paginate_enabled_previous";
		 *          }
		 *          
		 *          if ( oSettings.fnDisplayEnd() == oSettings.fnRecordsDisplay() ) {
		 *            buttons[2].className = "paginate_disabled_next";
		 *            buttons[3].className = "paginate_disabled_next";
		 *          }
		 *          else {
		 *            buttons[2].className = "paginate_enabled_next";
		 *            buttons[3].className = "paginate_enabled_next";
		 *          }
		 *        }
		 *      }
		 *    };
		 */
		"oPagination": {},
	
	
		/**
		 * Sorting plug-in methods - Sorting in DataTables is based on the detected type of the
		 * data column (you can add your own type detection functions, or override automatic 
		 * detection using sType). With this specific type given to the column, DataTables will 
		 * apply the required sort from the functions in the object. Each sort type must provide
		 * two mandatory methods, one each for ascending and descending sorting, and can optionally
		 * provide a pre-formatting method that will help speed up sorting by allowing DataTables
		 * to pre-format the sort data only once (rather than every time the actual sort functions
		 * are run). The two sorting functions are typical Javascript sort methods:
		 *   <ul>
	     *     <li>
	     *       Function input parameters:
	     *       <ul>
		 *         <li>{*} Data to compare to the second parameter</li>
		 *         <li>{*} Data to compare to the first parameter</li>
	     *       </ul>
	     *     </li>
		 *     <li>
		 *       Function return:
		 *       <ul>
		 *         <li>{int} Sorting match: <0 if first parameter should be sorted lower than
		 *           the second parameter, ===0 if the two parameters are equal and >0 if
		 *           the first parameter should be sorted height than the second parameter.</li>
		 *       </ul>
		 *     </il>
		 *   </ul>
		 *  @type object
		 *  @default {}
		 *
		 *  @example
		 *    // Case-sensitive string sorting, with no pre-formatting method
		 *    $.extend( $.fn.dataTableExt.oSort, {
		 *      "string-case-asc": function(x,y) {
		 *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		 *      },
		 *      "string-case-desc": function(x,y) {
		 *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
		 *      }
		 *    } );
		 *
		 *  @example
		 *    // Case-insensitive string sorting, with pre-formatting
		 *    $.extend( $.fn.dataTableExt.oSort, {
		 *      "string-pre": function(x) {
		 *        return x.toLowerCase();
		 *      },
		 *      "string-asc": function(x,y) {
		 *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		 *      },
		 *      "string-desc": function(x,y) {
		 *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
		 *      }
		 *    } );
		 */
		"oSort": {},
	
	
		/**
		 * Version string for plug-ins to check compatibility. Allowed format is
		 * a.b.c.d.e where: a:int, b:int, c:int, d:string(dev|beta), e:int. d and
		 * e are optional
		 *  @type string
		 *  @default Version number
		 */
		"sVersion": DataTable.version,
	
	
		/**
		 * How should DataTables report an error. Can take the value 'alert' or 'throw'
		 *  @type string
		 *  @default alert
		 */
		"sErrMode": "alert",
	
	
		/**
		 * Store information for DataTables to access globally about other instances
		 *  @namespace
		 *  @private
		 */
		"_oExternConfig": {
			/* int:iNextUnique - next unique number for an instance */
			"iNextUnique": 0
		}
	};
	
	
	
	
	/**
	 * Template object for the way in which DataTables holds information about
	 * search information for the global filter and individual column filters.
	 *  @namespace
	 */
	DataTable.models.oSearch = {
		/**
		 * Flag to indicate if the filtering should be case insensitive or not
		 *  @type boolean
		 *  @default true
		 */
		"bCaseInsensitive": true,
	
		/**
		 * Applied search term
		 *  @type string
		 *  @default <i>Empty string</i>
		 */
		"sSearch": "",
	
		/**
		 * Flag to indicate if the search term should be interpreted as a
		 * regular expression (true) or not (false) and therefore and special
		 * regex characters escaped.
		 *  @type boolean
		 *  @default false
		 */
		"bRegex": false,
	
		/**
		 * Flag to indicate if DataTables is to use its smart filtering or not.
		 *  @type boolean
		 *  @default true
		 */
		"bSmart": true
	};
	
	
	
	
	/**
	 * Template object for the way in which DataTables holds information about
	 * each individual row. This is the object format used for the settings 
	 * aoData array.
	 *  @namespace
	 */
	DataTable.models.oRow = {
		/**
		 * TR element for the row
		 *  @type node
		 *  @default null
		 */
		"nTr": null,
	
		/**
		 * Data object from the original data source for the row. This is either
		 * an array if using the traditional form of DataTables, or an object if
		 * using mData options. The exact type will depend on the passed in
		 * data from the data source, or will be an array if using DOM a data 
		 * source.
		 *  @type array|object
		 *  @default []
		 */
		"_aData": [],
	
		/**
		 * Sorting data cache - this array is ostensibly the same length as the
		 * number of columns (although each index is generated only as it is 
		 * needed), and holds the data that is used for sorting each column in the
		 * row. We do this cache generation at the start of the sort in order that
		 * the formatting of the sort data need be done only once for each cell
		 * per sort. This array should not be read from or written to by anything
		 * other than the master sorting methods.
		 *  @type array
		 *  @default []
		 *  @private
		 */
		"_aSortData": [],
	
		/**
		 * Array of TD elements that are cached for hidden rows, so they can be
		 * reinserted into the table if a column is made visible again (or to act
		 * as a store if a column is made hidden). Only hidden columns have a 
		 * reference in the array. For non-hidden columns the value is either
		 * undefined or null.
		 *  @type array nodes
		 *  @default []
		 *  @private
		 */
		"_anHidden": [],
	
		/**
		 * Cache of the class name that DataTables has applied to the row, so we
		 * can quickly look at this variable rather than needing to do a DOM check
		 * on className for the nTr property.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *  @private
		 */
		"_sRowStripe": ""
	};
	
	
	
	/**
	 * Template object for the column information object in DataTables. This object
	 * is held in the settings aoColumns array and contains all the information that
	 * DataTables needs about each individual column.
	 * 
	 * Note that this object is related to {@link DataTable.defaults.columns} 
	 * but this one is the internal data store for DataTables's cache of columns.
	 * It should NOT be manipulated outside of DataTables. Any configuration should
	 * be done through the initialisation options.
	 *  @namespace
	 */
	DataTable.models.oColumn = {
		/**
		 * A list of the columns that sorting should occur on when this column
		 * is sorted. That this property is an array allows multi-column sorting
		 * to be defined for a column (for example first name / last name columns
		 * would benefit from this). The values are integers pointing to the
		 * columns to be sorted on (typically it will be a single integer pointing
		 * at itself, but that doesn't need to be the case).
		 *  @type array
		 */
		"aDataSort": null,
	
		/**
		 * Define the sorting directions that are applied to the column, in sequence
		 * as the column is repeatedly sorted upon - i.e. the first value is used
		 * as the sorting direction when the column if first sorted (clicked on).
		 * Sort it again (click again) and it will move on to the next index.
		 * Repeat until loop.
		 *  @type array
		 */
		"asSorting": null,
		
		/**
		 * Flag to indicate if the column is searchable, and thus should be included
		 * in the filtering or not.
		 *  @type boolean
		 */
		"bSearchable": null,
		
		/**
		 * Flag to indicate if the column is sortable or not.
		 *  @type boolean
		 */
		"bSortable": null,
		
		/**
		 * <code>Deprecated</code> When using fnRender, you have two options for what 
		 * to do with the data, and this property serves as the switch. Firstly, you 
		 * can have the sorting and filtering use the rendered value (true - default), 
		 * or you can have the sorting and filtering us the original value (false).
		 *
		 * Please note that this option has now been deprecated and will be removed
		 * in the next version of DataTables. Please use mRender / mData rather than
		 * fnRender.
		 *  @type boolean
		 *  @deprecated
		 */
		"bUseRendered": null,
		
		/**
		 * Flag to indicate if the column is currently visible in the table or not
		 *  @type boolean
		 */
		"bVisible": null,
		
		/**
		 * Flag to indicate to the type detection method if the automatic type
		 * detection should be used, or if a column type (sType) has been specified
		 *  @type boolean
		 *  @default true
		 *  @private
		 */
		"_bAutoType": true,
		
		/**
		 * Developer definable function that is called whenever a cell is created (Ajax source,
		 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
		 * allowing you to modify the DOM element (add background colour for example) when the
		 * element is available.
		 *  @type function
		 *  @param {element} nTd The TD node that has been created
		 *  @param {*} sData The Data for the cell
		 *  @param {array|object} oData The data for the whole row
		 *  @param {int} iRow The row index for the aoData data store
		 *  @default null
		 */
		"fnCreatedCell": null,
		
		/**
		 * Function to get data from a cell in a column. You should <b>never</b>
		 * access data directly through _aData internally in DataTables - always use
		 * the method attached to this property. It allows mData to function as
		 * required. This function is automatically assigned by the column 
		 * initialisation method
		 *  @type function
		 *  @param {array|object} oData The data array/object for the array 
		 *    (i.e. aoData[]._aData)
		 *  @param {string} sSpecific The specific data type you want to get - 
		 *    'display', 'type' 'filter' 'sort'
		 *  @returns {*} The data for the cell from the given row's data
		 *  @default null
		 */
		"fnGetData": null,
		
		/**
		 * <code>Deprecated</code> Custom display function that will be called for the 
		 * display of each cell in this column.
		 *
		 * Please note that this option has now been deprecated and will be removed
		 * in the next version of DataTables. Please use mRender / mData rather than
		 * fnRender.
		 *  @type function
		 *  @param {object} o Object with the following parameters:
		 *  @param {int}    o.iDataRow The row in aoData
		 *  @param {int}    o.iDataColumn The column in question
		 *  @param {array}  o.aData The data for the row in question
		 *  @param {object} o.oSettings The settings object for this DataTables instance
		 *  @returns {string} The string you which to use in the display
		 *  @default null
		 *  @deprecated
		 */
		"fnRender": null,
		
		/**
		 * Function to set data for a cell in the column. You should <b>never</b> 
		 * set the data directly to _aData internally in DataTables - always use
		 * this method. It allows mData to function as required. This function
		 * is automatically assigned by the column initialisation method
		 *  @type function
		 *  @param {array|object} oData The data array/object for the array 
		 *    (i.e. aoData[]._aData)
		 *  @param {*} sValue Value to set
		 *  @default null
		 */
		"fnSetData": null,
		
		/**
		 * Property to read the value for the cells in the column from the data 
		 * source array / object. If null, then the default content is used, if a
		 * function is given then the return from the function is used.
		 *  @type function|int|string|null
		 *  @default null
		 */
		"mData": null,
		
		/**
		 * Partner property to mData which is used (only when defined) to get
		 * the data - i.e. it is basically the same as mData, but without the
		 * 'set' option, and also the data fed to it is the result from mData.
		 * This is the rendering method to match the data method of mData.
		 *  @type function|int|string|null
		 *  @default null
		 */
		"mRender": null,
		
		/**
		 * Unique header TH/TD element for this column - this is what the sorting
		 * listener is attached to (if sorting is enabled.)
		 *  @type node
		 *  @default null
		 */
		"nTh": null,
		
		/**
		 * Unique footer TH/TD element for this column (if there is one). Not used 
		 * in DataTables as such, but can be used for plug-ins to reference the 
		 * footer for each column.
		 *  @type node
		 *  @default null
		 */
		"nTf": null,
		
		/**
		 * The class to apply to all TD elements in the table's TBODY for the column
		 *  @type string
		 *  @default null
		 */
		"sClass": null,
		
		/**
		 * When DataTables calculates the column widths to assign to each column,
		 * it finds the longest string in each column and then constructs a
		 * temporary table and reads the widths from that. The problem with this
		 * is that "mmm" is much wider then "iiii", but the latter is a longer 
		 * string - thus the calculation can go wrong (doing it properly and putting
		 * it into an DOM object and measuring that is horribly(!) slow). Thus as
		 * a "work around" we provide this option. It will append its value to the
		 * text that is found to be the longest string for the column - i.e. padding.
		 *  @type string
		 */
		"sContentPadding": null,
		
		/**
		 * Allows a default value to be given for a column's data, and will be used
		 * whenever a null data source is encountered (this can be because mData
		 * is set to null, or because the data source itself is null).
		 *  @type string
		 *  @default null
		 */
		"sDefaultContent": null,
		
		/**
		 * Name for the column, allowing reference to the column by name as well as
		 * by index (needs a lookup to work by name).
		 *  @type string
		 */
		"sName": null,
		
		/**
		 * Custom sorting data type - defines which of the available plug-ins in
		 * afnSortData the custom sorting will use - if any is defined.
		 *  @type string
		 *  @default std
		 */
		"sSortDataType": 'std',
		
		/**
		 * Class to be applied to the header element when sorting on this column
		 *  @type string
		 *  @default null
		 */
		"sSortingClass": null,
		
		/**
		 * Class to be applied to the header element when sorting on this column -
		 * when jQuery UI theming is used.
		 *  @type string
		 *  @default null
		 */
		"sSortingClassJUI": null,
		
		/**
		 * Title of the column - what is seen in the TH element (nTh).
		 *  @type string
		 */
		"sTitle": null,
		
		/**
		 * Column sorting and filtering type
		 *  @type string
		 *  @default null
		 */
		"sType": null,
		
		/**
		 * Width of the column
		 *  @type string
		 *  @default null
		 */
		"sWidth": null,
		
		/**
		 * Width of the column when it was first "encountered"
		 *  @type string
		 *  @default null
		 */
		"sWidthOrig": null
	};
	
	
	
	/**
	 * Initialisation options that can be given to DataTables at initialisation 
	 * time.
	 *  @namespace
	 */
	DataTable.defaults = {
		/**
		 * An array of data to use for the table, passed in at initialisation which 
		 * will be used in preference to any data which is already in the DOM. This is
		 * particularly useful for constructing tables purely in Javascript, for
		 * example with a custom Ajax call.
		 *  @type array
		 *  @default null
		 *  @dtopt Option
		 * 
		 *  @example
		 *    // Using a 2D array data source
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "aaData": [
		 *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],
		 *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],
		 *        ],
		 *        "aoColumns": [
		 *          { "sTitle": "Engine" },
		 *          { "sTitle": "Browser" },
		 *          { "sTitle": "Platform" },
		 *          { "sTitle": "Version" },
		 *          { "sTitle": "Grade" }
		 *        ]
		 *      } );
		 *    } );
		 *    
		 *  @example
		 *    // Using an array of objects as a data source (mData)
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "aaData": [
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 4.0",
		 *            "platform": "Win 95+",
		 *            "version":  4,
		 *            "grade":    "X"
		 *          },
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 5.0",
		 *            "platform": "Win 95+",
		 *            "version":  5,
		 *            "grade":    "C"
		 *          }
		 *        ],
		 *        "aoColumns": [
		 *          { "sTitle": "Engine",   "mData": "engine" },
		 *          { "sTitle": "Browser",  "mData": "browser" },
		 *          { "sTitle": "Platform", "mData": "platform" },
		 *          { "sTitle": "Version",  "mData": "version" },
		 *          { "sTitle": "Grade",    "mData": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"aaData": null,
	
	
		/**
		 * If sorting is enabled, then DataTables will perform a first pass sort on 
		 * initialisation. You can define which column(s) the sort is performed upon, 
		 * and the sorting direction, with this variable. The aaSorting array should 
		 * contain an array for each column to be sorted initially containing the 
		 * column's index and a direction string ('asc' or 'desc').
		 *  @type array
		 *  @default [[0,'asc']]
		 *  @dtopt Option
		 * 
		 *  @example
		 *    // Sort by 3rd column first, and then 4th column
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aaSorting": [[2,'asc'], [3,'desc']]
		 *      } );
		 *    } );
		 *    
		 *    // No initial sorting
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aaSorting": []
		 *      } );
		 *    } );
		 */
		"aaSorting": [[0,'asc']],
	
	
		/**
		 * This parameter is basically identical to the aaSorting parameter, but 
		 * cannot be overridden by user interaction with the table. What this means 
		 * is that you could have a column (visible or hidden) which the sorting will 
		 * always be forced on first - any sorting after that (from the user) will 
		 * then be performed as required. This can be useful for grouping rows 
		 * together.
		 *  @type array
		 *  @default null
		 *  @dtopt Option
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aaSortingFixed": [[0,'asc']]
		 *      } );
		 *    } )
		 */
		"aaSortingFixed": null,
	
	
		/**
		 * This parameter allows you to readily specify the entries in the length drop
		 * down menu that DataTables shows when pagination is enabled. It can be 
		 * either a 1D array of options which will be used for both the displayed 
		 * option and the value, or a 2D array which will use the array in the first 
		 * position as the value, and the array in the second position as the 
		 * displayed options (useful for language strings such as 'All').
		 *  @type array
		 *  @default [ 10, 25, 50, 100 ]
		 *  @dtopt Option
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aLengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
		 *      } );
		 *    } );
		 *  
		 *  @example
		 *    // Setting the default display length as well as length menu
		 *    // This is likely to be wanted if you remove the '10' option which
		 *    // is the iDisplayLength default.
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "iDisplayLength": 25,
		 *        "aLengthMenu": [[25, 50, 100, -1], [25, 50, 100, "All"]]
		 *      } );
		 *    } );
		 */
		"aLengthMenu": [ 10, 25, 50, 100 ],
	
	
		/**
		 * The aoColumns option in the initialisation parameter allows you to define
		 * details about the way individual columns behave. For a full list of
		 * column options that can be set, please see 
		 * {@link DataTable.defaults.columns}. Note that if you use aoColumns to
		 * define your columns, you must have an entry in the array for every single
		 * column that you have in your table (these can be null if you don't which
		 * to specify any options).
		 *  @member
		 */
		"aoColumns": null,
	
		/**
		 * Very similar to aoColumns, aoColumnDefs allows you to target a specific 
		 * column, multiple columns, or all columns, using the aTargets property of 
		 * each object in the array. This allows great flexibility when creating 
		 * tables, as the aoColumnDefs arrays can be of any length, targeting the 
		 * columns you specifically want. aoColumnDefs may use any of the column 
		 * options available: {@link DataTable.defaults.columns}, but it _must_
		 * have aTargets defined in each object in the array. Values in the aTargets
		 * array may be:
		 *   <ul>
		 *     <li>a string - class name will be matched on the TH for the column</li>
		 *     <li>0 or a positive integer - column index counting from the left</li>
		 *     <li>a negative integer - column index counting from the right</li>
		 *     <li>the string "_all" - all columns (i.e. assign a default)</li>
		 *   </ul>
		 *  @member
		 */
		"aoColumnDefs": null,
	
	
		/**
		 * Basically the same as oSearch, this parameter defines the individual column
		 * filtering state at initialisation time. The array must be of the same size 
		 * as the number of columns, and each element be an object with the parameters
		 * "sSearch" and "bEscapeRegex" (the latter is optional). 'null' is also
		 * accepted and the default will be used.
		 *  @type array
		 *  @default []
		 *  @dtopt Option
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoSearchCols": [
		 *          null,
		 *          { "sSearch": "My filter" },
		 *          null,
		 *          { "sSearch": "^[0-9]", "bEscapeRegex": false }
		 *        ]
		 *      } );
		 *    } )
		 */
		"aoSearchCols": [],
	
	
		/**
		 * An array of CSS classes that should be applied to displayed rows. This 
		 * array may be of any length, and DataTables will apply each class 
		 * sequentially, looping when required.
		 *  @type array
		 *  @default null <i>Will take the values determined by the oClasses.sStripe*
		 *    options</i>
		 *  @dtopt Option
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "asStripeClasses": [ 'strip1', 'strip2', 'strip3' ]
		 *      } );
		 *    } )
		 */
		"asStripeClasses": null,
	
	
		/**
		 * Enable or disable automatic column width calculation. This can be disabled
		 * as an optimisation (it takes some time to calculate the widths) if the
		 * tables widths are passed in using aoColumns.
		 *  @type boolean
		 *  @default true
		 *  @dtopt Features
		 * 
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "bAutoWidth": false
		 *      } );
		 *    } );
		 */
		"bAutoWidth": true,
	
	
		/**
		 * Deferred rendering can provide DataTables with a huge speed boost when you
		 * are using an Ajax or JS data source for the table. This option, when set to
		 * true, will cause DataTables to defer the creation of the table elements for
		 * each row until they are needed for a draw - saving a significant amount of
		 * time.
		 *  @type boolean
		 *  @default false
		 *  @dtopt Features
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      var oTable = $('#example').dataTable( {
		 *        "sAjaxSource": "sources/arrays.txt",
		 *        "bDeferRender": true
		 *      } );
		 *    } );
		 */
		"bDeferRender": false,
	
	
		/**
		 * Replace a DataTable which matches the given selector and replace it with 
		 * one which has the properties of the new initialisation object passed. If no
		 * table matches the selector, then the new DataTable will be constructed as
		 * per normal.
		 *  @type boolean
		 *  @default false
		 *  @dtopt Options
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "sScrollY": "200px",
		 *        "bPaginate": false
		 *      } );
		 *      
		 *      // Some time later....
		 *      $('#example').dataTable( {
		 *        "bFilter": false,
		 *        "bDestroy": true
		 *      } );
		 *    } );
		 */
		"bDestroy": false,
	
	
		/**
		 * Enable or disable filtering of data. Filtering in DataTables is "smart" in
		 * that it allows the end user to input multiple words (space separated) and
		 * will match a row containing those words, even if not in the order that was
		 * specified (this allow matching across multiple columns). Note that if you
		 * wish to use filtering in DataTables this must remain 'true' - to remove the
		 * default filtering input box and retain filtering abilities, please use
		 * {@link DataTable.defaults.sDom}.
		 *  @type boolean
		 *  @default true
		 *  @dtopt Features
		 * 
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "bFilter": false
		 *      } );
		 *    } );
		 */
		"bFilter": true,
	
	
		/**
		 * Enable or disable the table information display. This shows information 
		 * about the data that is currently visible on the page, including information
		 * about filtered data if that action is being performed.
		 *  @type boolean
		 *  @default true
		 *  @dtopt Features
		 * 
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "bInfo": false
		 *      } );
		 *    } );
		 */
		"bInfo": true,
	
	
		/**
		 * Enable jQuery UI ThemeRoller support (required as ThemeRoller requires some
		 * slightly different and additional mark-up from what DataTables has
		 * traditionally used).
		 *  @type boolean
		 *  @default false
		 *  @dtopt Features
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "bJQueryUI": true
		 *      } );
		 *    } );
		 */
		"bJQueryUI": false,
	
	
		/**
		 * Allows the end user to select the size of a formatted page from a select
		 * menu (sizes are 10, 25, 50 and 100). Requires pagination (bPaginate).
		 *  @type boolean
		 *  @default true
		 *  @dtopt Features
		 * 
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "bLengthChange": false
		 *      } );
		 *    } );
		 */
		"bLengthChange": true,
	
	
		/**
		 * Enable or disable pagination.
		 *  @type boolean
		 *  @default true
		 *  @dtopt Features
		 * 
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "bPaginate": false
		 *      } );
		 *    } );
		 */
		"bPaginate": true,
	
	
		/**
		 * Enable or disable the display of a 'processing' indicator when the table is
		 * being processed (e.g. a sort). This is particularly useful for tables with
		 * large amounts of data where it can take a noticeable amount of time to sort
		 * the entries.
		 *  @type boolean
		 *  @default false
		 *  @dtopt Features
		 * 
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "bProcessing": true
		 *      } );
		 *    } );
		 */
		"bProcessing": false,
	
	
		/**
		 * Retrieve the DataTables object for the given selector. Note that if the
		 * table has already been initialised, this parameter will cause DataTables
		 * to simply return the object that has already been set up - it will not take
		 * account of any changes you might have made to the initialisation object
		 * passed to DataTables (setting this parameter to true is an acknowledgement
		 * that you understand this). bDestroy can be used to reinitialise a table if
		 * you need.
		 *  @type boolean
		 *  @default false
		 *  @dtopt Options
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      initTable();
		 *      tableActions();
		 *    } );
		 *    
		 *    function initTable ()
		 *    {
		 *      return $('#example').dataTable( {
		 *        "sScrollY": "200px",
		 *        "bPaginate": false,
		 *        "bRetrieve": true
		 *      } );
		 *    }
		 *    
		 *    function tableActions ()
		 *    {
		 *      var oTable = initTable();
		 *      // perform API operations with oTable 
		 *    }
		 */
		"bRetrieve": false,
	
	
		/**
		 * Indicate if DataTables should be allowed to set the padding / margin
		 * etc for the scrolling header elements or not. Typically you will want
		 * this.
		 *  @type boolean
		 *  @default true
		 *  @dtopt Options
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "bScrollAutoCss": false,
		 *        "sScrollY": "200px"
		 *      } );
		 *    } );
		 */
		"bScrollAutoCss": true,
	
	
		/**
		 * When vertical (y) scrolling is enabled, DataTables will force the height of
		 * the table's viewport to the given height at all times (useful for layout).
		 * However, this can look odd when filtering data down to a small data set,
		 * and the footer is left "floating" further down. This parameter (when
		 * enabled) will cause DataTables to collapse the table's viewport down when
		 * the result set will fit within the given Y height.
		 *  @type boolean
		 *  @default false
		 *  @dtopt Options
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "sScrollY": "200",
		 *        "bScrollCollapse": true
		 *      } );
		 *    } );
		 */
		"bScrollCollapse": false,
	
	
		/**
		 * Enable infinite scrolling for DataTables (to be used in combination with
		 * sScrollY). Infinite scrolling means that DataTables will continually load
		 * data as a user scrolls through a table, which is very useful for large
		 * dataset. This cannot be used with pagination, which is automatically
		 * disabled. Note - the Scroller extra for DataTables is recommended in
		 * in preference to this option.
		 *  @type boolean
		 *  @default false
		 *  @dtopt Features
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "bScrollInfinite": true,
		 *        "bScrollCollapse": true,
		 *        "sScrollY": "200px"
		 *      } );
		 *    } );
		 */
		"bScrollInfinite": false,
	
	
		/**
		 * Configure DataTables to use server-side processing. Note that the
		 * sAjaxSource parameter must also be given in order to give DataTables a
		 * source to obtain the required data for each draw.
		 *  @type boolean
		 *  @default false
		 *  @dtopt Features
		 *  @dtopt Server-side
		 * 
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "bServerSide": true,
		 *        "sAjaxSource": "xhr.php"
		 *      } );
		 *    } );
		 */
		"bServerSide": false,
	
	
		/**
		 * Enable or disable sorting of columns. Sorting of individual columns can be
		 * disabled by the "bSortable" option for each column.
		 *  @type boolean
		 *  @default true
		 *  @dtopt Features
		 * 
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "bSort": false
		 *      } );
		 *    } );
		 */
		"bSort": true,
	
	
		/**
		 * Allows control over whether DataTables should use the top (true) unique
		 * cell that is found for a single column, or the bottom (false - default).
		 * This is useful when using complex headers.
		 *  @type boolean
		 *  @default false
		 *  @dtopt Options
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "bSortCellsTop": true
		 *      } );
		 *    } );
		 */
		"bSortCellsTop": false,
	
	
		/**
		 * Enable or disable the addition of the classes 'sorting_1', 'sorting_2' and
		 * 'sorting_3' to the columns which are currently being sorted on. This is
		 * presented as a feature switch as it can increase processing time (while
		 * classes are removed and added) so for large data sets you might want to
		 * turn this off.
		 *  @type boolean
		 *  @default true
		 *  @dtopt Features
		 * 
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "bSortClasses": false
		 *      } );
		 *    } );
		 */
		"bSortClasses": true,
	
	
		/**
		 * Enable or disable state saving. When enabled a cookie will be used to save
		 * table display information such as pagination information, display length,
		 * filtering and sorting. As such when the end user reloads the page the
		 * display display will match what thy had previously set up.
		 *  @type boolean
		 *  @default false
		 *  @dtopt Features
		 * 
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "bStateSave": true
		 *      } );
		 *    } );
		 */
		"bStateSave": false,
	
	
		/**
		 * Customise the cookie and / or the parameters being stored when using
		 * DataTables with state saving enabled. This function is called whenever
		 * the cookie is modified, and it expects a fully formed cookie string to be
		 * returned. Note that the data object passed in is a Javascript object which
		 * must be converted to a string (JSON.stringify for example).
		 *  @type function
		 *  @param {string} sName Name of the cookie defined by DataTables
		 *  @param {object} oData Data to be stored in the cookie
		 *  @param {string} sExpires Cookie expires string
		 *  @param {string} sPath Path of the cookie to set
		 *  @returns {string} Cookie formatted string (which should be encoded by
		 *    using encodeURIComponent())
		 *  @dtopt Callbacks
		 * 
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "fnCookieCallback": function (sName, oData, sExpires, sPath) {
		 *          // Customise oData or sName or whatever else here
		 *          return sName + "="+JSON.stringify(oData)+"; expires=" + sExpires +"; path=" + sPath;
		 *        }
		 *      } );
		 *    } );
		 */
		"fnCookieCallback": null,
	
	
		/**
		 * This function is called when a TR element is created (and all TD child
		 * elements have been inserted), or registered if using a DOM source, allowing
		 * manipulation of the TR element (adding classes etc).
		 *  @type function
		 *  @param {node} nRow "TR" element for the current row
		 *  @param {array} aData Raw data array for this row
		 *  @param {int} iDataIndex The index of this row in aoData
		 *  @dtopt Callbacks
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "fnCreatedRow": function( nRow, aData, iDataIndex ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( aData[4] == "A" )
		 *          {
		 *            $('td:eq(4)', nRow).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnCreatedRow": null,
	
	
		/**
		 * This function is called on every 'draw' event, and allows you to
		 * dynamically modify any aspect you want about the created DOM.
		 *  @type function
		 *  @param {object} oSettings DataTables settings object
		 *  @dtopt Callbacks
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "fnDrawCallback": function( oSettings ) {
		 *          alert( 'DataTables has redrawn the table' );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnDrawCallback": null,
	
	
		/**
		 * Identical to fnHeaderCallback() but for the table footer this function
		 * allows you to modify the table footer on every 'draw' even.
		 *  @type function
		 *  @param {node} nFoot "TR" element for the footer
		 *  @param {array} aData Full table data (as derived from the original HTML)
		 *  @param {int} iStart Index for the current display starting point in the 
		 *    display array
		 *  @param {int} iEnd Index for the current display ending point in the 
		 *    display array
		 *  @param {array int} aiDisplay Index array to translate the visual position
		 *    to the full data array
		 *  @dtopt Callbacks
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "fnFooterCallback": function( nFoot, aData, iStart, iEnd, aiDisplay ) {
		 *          nFoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+iStart;
		 *        }
		 *      } );
		 *    } )
		 */
		"fnFooterCallback": null,
	
	
		/**
		 * When rendering large numbers in the information element for the table
		 * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
		 * to have a comma separator for the 'thousands' units (e.g. 1 million is
		 * rendered as "1,000,000") to help readability for the end user. This
		 * function will override the default method DataTables uses.
		 *  @type function
		 *  @member
		 *  @param {int} iIn number to be formatted
		 *  @returns {string} formatted string for DataTables to show the number
		 *  @dtopt Callbacks
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "fnFormatNumber": function ( iIn ) {
		 *          if ( iIn &lt; 1000 ) {
		 *            return iIn;
		 *          } else {
		 *            var 
		 *              s=(iIn+""), 
		 *              a=s.split(""), out="", 
		 *              iLen=s.length;
		 *            
		 *            for ( var i=0 ; i&lt;iLen ; i++ ) {
		 *              if ( i%3 === 0 &amp;&amp; i !== 0 ) {
		 *                out = "'"+out;
		 *              }
		 *              out = a[iLen-i-1]+out;
		 *            }
		 *          }
		 *          return out;
		 *        };
		 *      } );
		 *    } );
		 */
		"fnFormatNumber": function ( iIn ) {
			if ( iIn < 1000 )
			{
				// A small optimisation for what is likely to be the majority of use cases
				return iIn;
			}
	
			var s=(iIn+""), a=s.split(""), out="", iLen=s.length;
			
			for ( var i=0 ; i<iLen ; i++ )
			{
				if ( i%3 === 0 && i !== 0 )
				{
					out = this.oLanguage.sInfoThousands+out;
				}
				out = a[iLen-i-1]+out;
			}
			return out;
		},
	
	
		/**
		 * This function is called on every 'draw' event, and allows you to
		 * dynamically modify the header row. This can be used to calculate and
		 * display useful information about the table.
		 *  @type function
		 *  @param {node} nHead "TR" element for the header
		 *  @param {array} aData Full table data (as derived from the original HTML)
		 *  @param {int} iStart Index for the current display starting point in the
		 *    display array
		 *  @param {int} iEnd Index for the current display ending point in the
		 *    display array
		 *  @param {array int} aiDisplay Index array to translate the visual position
		 *    to the full data array
		 *  @dtopt Callbacks
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "fnHeaderCallback": function( nHead, aData, iStart, iEnd, aiDisplay ) {
		 *          nHead.getElementsByTagName('th')[0].innerHTML = "Displaying "+(iEnd-iStart)+" records";
		 *        }
		 *      } );
		 *    } )
		 */
		"fnHeaderCallback": null,
	
	
		/**
		 * The information element can be used to convey information about the current
		 * state of the table. Although the internationalisation options presented by
		 * DataTables are quite capable of dealing with most customisations, there may
		 * be times where you wish to customise the string further. This callback
		 * allows you to do exactly that.
		 *  @type function
		 *  @param {object} oSettings DataTables settings object
		 *  @param {int} iStart Starting position in data for the draw
		 *  @param {int} iEnd End position in data for the draw
		 *  @param {int} iMax Total number of rows in the table (regardless of
		 *    filtering)
		 *  @param {int} iTotal Total number of rows in the data set, after filtering
		 *  @param {string} sPre The string that DataTables has formatted using it's
		 *    own rules
		 *  @returns {string} The string to be displayed in the information element.
		 *  @dtopt Callbacks
		 * 
		 *  @example
		 *    $('#example').dataTable( {
		 *      "fnInfoCallback": function( oSettings, iStart, iEnd, iMax, iTotal, sPre ) {
		 *        return iStart +" to "+ iEnd;
		 *      }
		 *    } );
		 */
		"fnInfoCallback": null,
	
	
		/**
		 * Called when the table has been initialised. Normally DataTables will
		 * initialise sequentially and there will be no need for this function,
		 * however, this does not hold true when using external language information
		 * since that is obtained using an async XHR call.
		 *  @type function
		 *  @param {object} oSettings DataTables settings object
		 *  @param {object} json The JSON object request from the server - only
		 *    present if client-side Ajax sourced data is used
		 *  @dtopt Callbacks
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "fnInitComplete": function(oSettings, json) {
		 *          alert( 'DataTables has finished its initialisation.' );
		 *        }
		 *      } );
		 *    } )
		 */
		"fnInitComplete": null,
	
	
		/**
		 * Called at the very start of each table draw and can be used to cancel the
		 * draw by returning false, any other return (including undefined) results in
		 * the full draw occurring).
		 *  @type function
		 *  @param {object} oSettings DataTables settings object
		 *  @returns {boolean} False will cancel the draw, anything else (including no
		 *    return) will allow it to complete.
		 *  @dtopt Callbacks
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "fnPreDrawCallback": function( oSettings ) {
		 *          if ( $('#test').val() == 1 ) {
		 *            return false;
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnPreDrawCallback": null,
	
	
		/**
		 * This function allows you to 'post process' each row after it have been
		 * generated for each table draw, but before it is rendered on screen. This
		 * function might be used for setting the row class name etc.
		 *  @type function
		 *  @param {node} nRow "TR" element for the current row
		 *  @param {array} aData Raw data array for this row
		 *  @param {int} iDisplayIndex The display index for the current table draw
		 *  @param {int} iDisplayIndexFull The index of the data in the full list of
		 *    rows (after filtering)
		 *  @dtopt Callbacks
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( aData[4] == "A" )
		 *          {
		 *            $('td:eq(4)', nRow).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnRowCallback": null,
	
	
		/**
		 * This parameter allows you to override the default function which obtains
		 * the data from the server ($.getJSON) so something more suitable for your
		 * application. For example you could use POST data, or pull information from
		 * a Gears or AIR database.
		 *  @type function
		 *  @member
		 *  @param {string} sSource HTTP source to obtain the data from (sAjaxSource)
		 *  @param {array} aoData A key/value pair object containing the data to send
		 *    to the server
		 *  @param {function} fnCallback to be called on completion of the data get
		 *    process that will draw the data on the page.
		 *  @param {object} oSettings DataTables settings object
		 *  @dtopt Callbacks
		 *  @dtopt Server-side
		 * 
		 *  @example
		 *    // POST data to server
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "bProcessing": true,
		 *        "bServerSide": true,
		 *        "sAjaxSource": "xhr.php",
		 *        "fnServerData": function ( sSource, aoData, fnCallback, oSettings ) {
		 *          oSettings.jqXHR = $.ajax( {
		 *            "dataType": 'json', 
		 *            "type": "POST", 
		 *            "url": sSource, 
		 *            "data": aoData, 
		 *            "success": fnCallback
		 *          } );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnServerData": function ( sUrl, aoData, fnCallback, oSettings ) {
			oSettings.jqXHR = $.ajax( {
				"url":  sUrl,
				"data": aoData,
				"success": function (json) {
					if ( json.sError ) {
						oSettings.oApi._fnLog( oSettings, 0, json.sError );
					}
					
					$(oSettings.oInstance).trigger('xhr', [oSettings, json]);
					fnCallback( json );
				},
				"dataType": "json",
				"cache": false,
				"type": oSettings.sServerMethod,
				"error": function (xhr, error, thrown) {
					if ( error == "parsererror" ) {
						oSettings.oApi._fnLog( oSettings, 0, "DataTables warning: JSON data from "+
							"server could not be parsed. This is caused by a JSON formatting error." );
					}
				}
			} );
		},
	
	
		/**
		 * It is often useful to send extra data to the server when making an Ajax
		 * request - for example custom filtering information, and this callback
		 * function makes it trivial to send extra information to the server. The
		 * passed in parameter is the data set that has been constructed by
		 * DataTables, and you can add to this or modify it as you require.
		 *  @type function
		 *  @param {array} aoData Data array (array of objects which are name/value
		 *    pairs) that has been constructed by DataTables and will be sent to the
		 *    server. In the case of Ajax sourced data with server-side processing
		 *    this will be an empty array, for server-side processing there will be a
		 *    significant number of parameters!
		 *  @returns {undefined} Ensure that you modify the aoData array passed in,
		 *    as this is passed by reference.
		 *  @dtopt Callbacks
		 *  @dtopt Server-side
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "bProcessing": true,
		 *        "bServerSide": true,
		 *        "sAjaxSource": "scripts/server_processing.php",
		 *        "fnServerParams": function ( aoData ) {
		 *          aoData.push( { "name": "more_data", "value": "my_value" } );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnServerParams": null,
	
	
		/**
		 * Load the table state. With this function you can define from where, and how, the
		 * state of a table is loaded. By default DataTables will load from its state saving
		 * cookie, but you might wish to use local storage (HTML5) or a server-side database.
		 *  @type function
		 *  @member
		 *  @param {object} oSettings DataTables settings object
		 *  @return {object} The DataTables state object to be loaded
		 *  @dtopt Callbacks
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "bStateSave": true,
		 *        "fnStateLoad": function (oSettings) {
		 *          var o;
		 *          
		 *          // Send an Ajax request to the server to get the data. Note that
		 *          // this is a synchronous request.
		 *          $.ajax( {
		 *            "url": "/state_load",
		 *            "async": false,
		 *            "dataType": "json",
		 *            "success": function (json) {
		 *              o = json;
		 *            }
		 *          } );
		 *          
		 *          return o;
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoad": function ( oSettings ) {
			var sData = this.oApi._fnReadCookie( oSettings.sCookiePrefix+oSettings.sInstance );
			var oData;
	
			try {
				oData = (typeof $.parseJSON === 'function') ? 
					$.parseJSON(sData) : eval( '('+sData+')' );
			} catch (e) {
				oData = null;
			}
	
			return oData;
		},
	
	
		/**
		 * Callback which allows modification of the saved state prior to loading that state.
		 * This callback is called when the table is loading state from the stored data, but
		 * prior to the settings object being modified by the saved state. Note that for 
		 * plug-in authors, you should use the 'stateLoadParams' event to load parameters for 
		 * a plug-in.
		 *  @type function
		 *  @param {object} oSettings DataTables settings object
		 *  @param {object} oData The state object that is to be loaded
		 *  @dtopt Callbacks
		 * 
		 *  @example
		 *    // Remove a saved filter, so filtering is never loaded
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "bStateSave": true,
		 *        "fnStateLoadParams": function (oSettings, oData) {
		 *          oData.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
		 * 
		 *  @example
		 *    // Disallow state loading by returning false
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "bStateSave": true,
		 *        "fnStateLoadParams": function (oSettings, oData) {
		 *          return false;
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoadParams": null,
	
	
		/**
		 * Callback that is called when the state has been loaded from the state saving method
		 * and the DataTables settings object has been modified as a result of the loaded state.
		 *  @type function
		 *  @param {object} oSettings DataTables settings object
		 *  @param {object} oData The state object that was loaded
		 *  @dtopt Callbacks
		 * 
		 *  @example
		 *    // Show an alert with the filtering value that was saved
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "bStateSave": true,
		 *        "fnStateLoaded": function (oSettings, oData) {
		 *          alert( 'Saved filter was: '+oData.oSearch.sSearch );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoaded": null,
	
	
		/**
		 * Save the table state. This function allows you to define where and how the state
		 * information for the table is stored - by default it will use a cookie, but you
		 * might want to use local storage (HTML5) or a server-side database.
		 *  @type function
		 *  @member
		 *  @param {object} oSettings DataTables settings object
		 *  @param {object} oData The state object to be saved
		 *  @dtopt Callbacks
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "bStateSave": true,
		 *        "fnStateSave": function (oSettings, oData) {
		 *          // Send an Ajax request to the server with the state object
		 *          $.ajax( {
		 *            "url": "/state_save",
		 *            "data": oData,
		 *            "dataType": "json",
		 *            "method": "POST"
		 *            "success": function () {}
		 *          } );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateSave": function ( oSettings, oData ) {
			this.oApi._fnCreateCookie( 
				oSettings.sCookiePrefix+oSettings.sInstance, 
				this.oApi._fnJsonString(oData), 
				oSettings.iCookieDuration, 
				oSettings.sCookiePrefix, 
				oSettings.fnCookieCallback
			);
		},
	
	
		/**
		 * Callback which allows modification of the state to be saved. Called when the table 
		 * has changed state a new state save is required. This method allows modification of
		 * the state saving object prior to actually doing the save, including addition or 
		 * other state properties or modification. Note that for plug-in authors, you should 
		 * use the 'stateSaveParams' event to save parameters for a plug-in.
		 *  @type function
		 *  @param {object} oSettings DataTables settings object
		 *  @param {object} oData The state object to be saved
		 *  @dtopt Callbacks
		 * 
		 *  @example
		 *    // Remove a saved filter, so filtering is never saved
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "bStateSave": true,
		 *        "fnStateSaveParams": function (oSettings, oData) {
		 *          oData.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateSaveParams": null,
	
	
		/**
		 * Duration of the cookie which is used for storing session information. This
		 * value is given in seconds.
		 *  @type int
		 *  @default 7200 <i>(2 hours)</i>
		 *  @dtopt Options
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "iCookieDuration": 60*60*24; // 1 day
		 *      } );
		 *    } )
		 */
		"iCookieDuration": 7200,
	
	
		/**
		 * When enabled DataTables will not make a request to the server for the first
		 * page draw - rather it will use the data already on the page (no sorting etc
		 * will be applied to it), thus saving on an XHR at load time. iDeferLoading
		 * is used to indicate that deferred loading is required, but it is also used
		 * to tell DataTables how many records there are in the full table (allowing
		 * the information element and pagination to be displayed correctly). In the case
		 * where a filtering is applied to the table on initial load, this can be
		 * indicated by giving the parameter as an array, where the first element is
		 * the number of records available after filtering and the second element is the
		 * number of records without filtering (allowing the table information element
		 * to be shown correctly).
		 *  @type int | array
		 *  @default null
		 *  @dtopt Options
		 * 
		 *  @example
		 *    // 57 records available in the table, no filtering applied
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "bServerSide": true,
		 *        "sAjaxSource": "scripts/server_processing.php",
		 *        "iDeferLoading": 57
		 *      } );
		 *    } );
		 * 
		 *  @example
		 *    // 57 records after filtering, 100 without filtering (an initial filter applied)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "bServerSide": true,
		 *        "sAjaxSource": "scripts/server_processing.php",
		 *        "iDeferLoading": [ 57, 100 ],
		 *        "oSearch": {
		 *          "sSearch": "my_filter"
		 *        }
		 *      } );
		 *    } );
		 */
		"iDeferLoading": null,
	
	
		/**
		 * Number of rows to display on a single page when using pagination. If
		 * feature enabled (bLengthChange) then the end user will be able to override
		 * this to a custom setting using a pop-up menu.
		 *  @type int
		 *  @default 10
		 *  @dtopt Options
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "iDisplayLength": 50
		 *      } );
		 *    } )
		 */
		"iDisplayLength": 10,
	
	
		/**
		 * Define the starting point for data display when using DataTables with
		 * pagination. Note that this parameter is the number of records, rather than
		 * the page number, so if you have 10 records per page and want to start on
		 * the third page, it should be "20".
		 *  @type int
		 *  @default 0
		 *  @dtopt Options
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "iDisplayStart": 20
		 *      } );
		 *    } )
		 */
		"iDisplayStart": 0,
	
	
		/**
		 * The scroll gap is the amount of scrolling that is left to go before
		 * DataTables will load the next 'page' of data automatically. You typically
		 * want a gap which is big enough that the scrolling will be smooth for the
		 * user, while not so large that it will load more data than need.
		 *  @type int
		 *  @default 100
		 *  @dtopt Options
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "bScrollInfinite": true,
		 *        "bScrollCollapse": true,
		 *        "sScrollY": "200px",
		 *        "iScrollLoadGap": 50
		 *      } );
		 *    } );
		 */
		"iScrollLoadGap": 100,
	
	
		/**
		 * By default DataTables allows keyboard navigation of the table (sorting, paging,
		 * and filtering) by adding a tabindex attribute to the required elements. This
		 * allows you to tab through the controls and press the enter key to activate them.
		 * The tabindex is default 0, meaning that the tab follows the flow of the document.
		 * You can overrule this using this parameter if you wish. Use a value of -1 to
		 * disable built-in keyboard navigation.
		 *  @type int
		 *  @default 0
		 *  @dtopt Options
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "iTabIndex": 1
		 *      } );
		 *    } );
		 */
		"iTabIndex": 0,
	
	
		/**
		 * All strings that DataTables uses in the user interface that it creates
		 * are defined in this object, allowing you to modified them individually or
		 * completely replace them all as required.
		 *  @namespace
		 */
		"oLanguage": {
			/**
			 * Strings that are used for WAI-ARIA labels and controls only (these are not
			 * actually visible on the page, but will be read by screenreaders, and thus
			 * must be internationalised as well).
			 *  @namespace
			 */
			"oAria": {
				/**
				 * ARIA label that is added to the table headers when the column may be
				 * sorted ascending by activing the column (click or return when focused).
				 * Note that the column header is prefixed to this string.
				 *  @type string
				 *  @default : activate to sort column ascending
				 *  @dtopt Language
				 * 
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "oLanguage": {
				 *          "oAria": {
				 *            "sSortAscending": " - click/return to sort ascending"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sSortAscending": ": activate to sort column ascending",
	
				/**
				 * ARIA label that is added to the table headers when the column may be
				 * sorted descending by activing the column (click or return when focused).
				 * Note that the column header is prefixed to this string.
				 *  @type string
				 *  @default : activate to sort column ascending
				 *  @dtopt Language
				 * 
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "oLanguage": {
				 *          "oAria": {
				 *            "sSortDescending": " - click/return to sort descending"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sSortDescending": ": activate to sort column descending"
			},
	
			/**
			 * Pagination string used by DataTables for the two built-in pagination
			 * control types ("two_button" and "full_numbers")
			 *  @namespace
			 */
			"oPaginate": {
				/**
				 * Text to use when using the 'full_numbers' type of pagination for the
				 * button to take the user to the first page.
				 *  @type string
				 *  @default First
				 *  @dtopt Language
				 * 
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "oLanguage": {
				 *          "oPaginate": {
				 *            "sFirst": "First page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sFirst": "First",
			
			
				/**
				 * Text to use when using the 'full_numbers' type of pagination for the
				 * button to take the user to the last page.
				 *  @type string
				 *  @default Last
				 *  @dtopt Language
				 * 
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "oLanguage": {
				 *          "oPaginate": {
				 *            "sLast": "Last page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sLast": "Last",
			
			
				/**
				 * Text to use for the 'next' pagination button (to take the user to the 
				 * next page).
				 *  @type string
				 *  @default Next
				 *  @dtopt Language
				 * 
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "oLanguage": {
				 *          "oPaginate": {
				 *            "sNext": "Next page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sNext": "Next",
			
			
				/**
				 * Text to use for the 'previous' pagination button (to take the user to  
				 * the previous page).
				 *  @type string
				 *  @default Previous
				 *  @dtopt Language
				 * 
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "oLanguage": {
				 *          "oPaginate": {
				 *            "sPrevious": "Previous page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sPrevious": "Previous"
			},
		
			/**
			 * This string is shown in preference to sZeroRecords when the table is
			 * empty of data (regardless of filtering). Note that this is an optional
			 * parameter - if it is not given, the value of sZeroRecords will be used
			 * instead (either the default or given value).
			 *  @type string
			 *  @default No data available in table
			 *  @dtopt Language
			 * 
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "oLanguage": {
			 *          "sEmptyTable": "No data available in table"
			 *        }
			 *      } );
			 *    } );
			 */
			"sEmptyTable": "No data available in table",
		
		
			/**
			 * This string gives information to the end user about the information that 
			 * is current on display on the page. The _START_, _END_ and _TOTAL_ 
			 * variables are all dynamically replaced as the table display updates, and 
			 * can be freely moved or removed as the language requirements change.
			 *  @type string
			 *  @default Showing _START_ to _END_ of _TOTAL_ entries
			 *  @dtopt Language
			 * 
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "oLanguage": {
			 *          "sInfo": "Got a total of _TOTAL_ entries to show (_START_ to _END_)"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
		
		
			/**
			 * Display information string for when the table is empty. Typically the 
			 * format of this string should match sInfo.
			 *  @type string
			 *  @default Showing 0 to 0 of 0 entries
			 *  @dtopt Language
			 * 
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "oLanguage": {
			 *          "sInfoEmpty": "No entries to show"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoEmpty": "Showing 0 to 0 of 0 entries",
		
		
			/**
			 * When a user filters the information in a table, this string is appended 
			 * to the information (sInfo) to give an idea of how strong the filtering 
			 * is. The variable _MAX_ is dynamically updated.
			 *  @type string
			 *  @default (filtered from _MAX_ total entries)
			 *  @dtopt Language
			 * 
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "oLanguage": {
			 *          "sInfoFiltered": " - filtering from _MAX_ records"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoFiltered": "(filtered from _MAX_ total entries)",
		
		
			/**
			 * If can be useful to append extra information to the info string at times,
			 * and this variable does exactly that. This information will be appended to
			 * the sInfo (sInfoEmpty and sInfoFiltered in whatever combination they are
			 * being used) at all times.
			 *  @type string
			 *  @default <i>Empty string</i>
			 *  @dtopt Language
			 * 
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "oLanguage": {
			 *          "sInfoPostFix": "All records shown are derived from real information."
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoPostFix": "",
		
		
			/**
			 * DataTables has a build in number formatter (fnFormatNumber) which is used
			 * to format large numbers that are used in the table information. By
			 * default a comma is used, but this can be trivially changed to any
			 * character you wish with this parameter.
			 *  @type string
			 *  @default ,
			 *  @dtopt Language
			 * 
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "oLanguage": {
			 *          "sInfoThousands": "'"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoThousands": ",",
		
		
			/**
			 * Detail the action that will be taken when the drop down menu for the
			 * pagination length option is changed. The '_MENU_' variable is replaced
			 * with a default select list of 10, 25, 50 and 100, and can be replaced
			 * with a custom select box if required.
			 *  @type string
			 *  @default Show _MENU_ entries
			 *  @dtopt Language
			 * 
			 *  @example
			 *    // Language change only
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "oLanguage": {
			 *          "sLengthMenu": "Display _MENU_ records"
			 *        }
			 *      } );
			 *    } );
			 *    
			 *  @example
			 *    // Language and options change
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "oLanguage": {
			 *          "sLengthMenu": 'Display <select>'+
			 *            '<option value="10">10</option>'+
			 *            '<option value="20">20</option>'+
			 *            '<option value="30">30</option>'+
			 *            '<option value="40">40</option>'+
			 *            '<option value="50">50</option>'+
			 *            '<option value="-1">All</option>'+
			 *            '</select> records'
			 *        }
			 *      } );
			 *    } );
			 */
			"sLengthMenu": "Show _MENU_ entries",
		
		
			/**
			 * When using Ajax sourced data and during the first draw when DataTables is
			 * gathering the data, this message is shown in an empty row in the table to
			 * indicate to the end user the the data is being loaded. Note that this
			 * parameter is not used when loading data by server-side processing, just
			 * Ajax sourced data with client-side processing.
			 *  @type string
			 *  @default Loading...
			 *  @dtopt Language
			 * 
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "oLanguage": {
			 *          "sLoadingRecords": "Please wait - loading..."
			 *        }
			 *      } );
			 *    } );
			 */
			"sLoadingRecords": "Loading...",
		
		
			/**
			 * Text which is displayed when the table is processing a user action
			 * (usually a sort command or similar).
			 *  @type string
			 *  @default Processing...
			 *  @dtopt Language
			 * 
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "oLanguage": {
			 *          "sProcessing": "DataTables is currently busy"
			 *        }
			 *      } );
			 *    } );
			 */
			"sProcessing": "Processing...",
		
		
			/**
			 * Details the actions that will be taken when the user types into the
			 * filtering input text box. The variable "_INPUT_", if used in the string,
			 * is replaced with the HTML text box for the filtering input allowing
			 * control over where it appears in the string. If "_INPUT_" is not given
			 * then the input box is appended to the string automatically.
			 *  @type string
			 *  @default Search:
			 *  @dtopt Language
			 * 
			 *  @example
			 *    // Input text box will be appended at the end automatically
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "oLanguage": {
			 *          "sSearch": "Filter records:"
			 *        }
			 *      } );
			 *    } );
			 *    
			 *  @example
			 *    // Specify where the filter should appear
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "oLanguage": {
			 *          "sSearch": "Apply filter _INPUT_ to table"
			 *        }
			 *      } );
			 *    } );
			 */
			"sSearch": "Search:",
		
		
			/**
			 * All of the language information can be stored in a file on the
			 * server-side, which DataTables will look up if this parameter is passed.
			 * It must store the URL of the language file, which is in a JSON format,
			 * and the object has the same properties as the oLanguage object in the
			 * initialiser object (i.e. the above parameters). Please refer to one of
			 * the example language files to see how this works in action.
			 *  @type string
			 *  @default <i>Empty string - i.e. disabled</i>
			 *  @dtopt Language
			 * 
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "oLanguage": {
			 *          "sUrl": "http://www.sprymedia.co.uk/dataTables/lang.txt"
			 *        }
			 *      } );
			 *    } );
			 */
			"sUrl": "",
		
		
			/**
			 * Text shown inside the table records when the is no information to be
			 * displayed after filtering. sEmptyTable is shown when there is simply no
			 * information in the table at all (regardless of filtering).
			 *  @type string
			 *  @default No matching records found
			 *  @dtopt Language
			 * 
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "oLanguage": {
			 *          "sZeroRecords": "No records to display"
			 *        }
			 *      } );
			 *    } );
			 */
			"sZeroRecords": "No matching records found"
		},
	
	
		/**
		 * This parameter allows you to have define the global filtering state at
		 * initialisation time. As an object the "sSearch" parameter must be
		 * defined, but all other parameters are optional. When "bRegex" is true,
		 * the search string will be treated as a regular expression, when false
		 * (default) it will be treated as a straight string. When "bSmart"
		 * DataTables will use it's smart filtering methods (to word match at
		 * any point in the data), when false this will not be done.
		 *  @namespace
		 *  @extends DataTable.models.oSearch
		 *  @dtopt Options
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "oSearch": {"sSearch": "Initial search"}
		 *      } );
		 *    } )
		 */
		"oSearch": $.extend( {}, DataTable.models.oSearch ),
	
	
		/**
		 * By default DataTables will look for the property 'aaData' when obtaining
		 * data from an Ajax source or for server-side processing - this parameter
		 * allows that property to be changed. You can use Javascript dotted object
		 * notation to get a data source for multiple levels of nesting.
		 *  @type string
		 *  @default aaData
		 *  @dtopt Options
		 *  @dtopt Server-side
		 * 
		 *  @example
		 *    // Get data from { "data": [...] }
		 *    $(document).ready( function() {
		 *      var oTable = $('#example').dataTable( {
		 *        "sAjaxSource": "sources/data.txt",
		 *        "sAjaxDataProp": "data"
		 *      } );
		 *    } );
		 *    
		 *  @example
		 *    // Get data from { "data": { "inner": [...] } }
		 *    $(document).ready( function() {
		 *      var oTable = $('#example').dataTable( {
		 *        "sAjaxSource": "sources/data.txt",
		 *        "sAjaxDataProp": "data.inner"
		 *      } );
		 *    } );
		 */
		"sAjaxDataProp": "aaData",
	
	
		/**
		 * You can instruct DataTables to load data from an external source using this
		 * parameter (use aData if you want to pass data in you already have). Simply
		 * provide a url a JSON object can be obtained from. This object must include
		 * the parameter 'aaData' which is the data source for the table.
		 *  @type string
		 *  @default null
		 *  @dtopt Options
		 *  @dtopt Server-side
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "sAjaxSource": "http://www.sprymedia.co.uk/dataTables/json.php"
		 *      } );
		 *    } )
		 */
		"sAjaxSource": null,
	
	
		/**
		 * This parameter can be used to override the default prefix that DataTables
		 * assigns to a cookie when state saving is enabled.
		 *  @type string
		 *  @default SpryMedia_DataTables_
		 *  @dtopt Options
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "sCookiePrefix": "my_datatable_",
		 *      } );
		 *    } );
		 */
		"sCookiePrefix": "SpryMedia_DataTables_",
	
	
		/**
		 * This initialisation variable allows you to specify exactly where in the
		 * DOM you want DataTables to inject the various controls it adds to the page
		 * (for example you might want the pagination controls at the top of the
		 * table). DIV elements (with or without a custom class) can also be added to
		 * aid styling. The follow syntax is used:
		 *   <ul>
		 *     <li>The following options are allowed:	
		 *       <ul>
		 *         <li>'l' - Length changing</li
		 *         <li>'f' - Filtering input</li>
		 *         <li>'t' - The table!</li>
		 *         <li>'i' - Information</li>
		 *         <li>'p' - Pagination</li>
		 *         <li>'r' - pRocessing</li>
		 *       </ul>
		 *     </li>
		 *     <li>The following constants are allowed:
		 *       <ul>
		 *         <li>'H' - jQueryUI theme "header" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')</li>
		 *         <li>'F' - jQueryUI theme "footer" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')</li>
		 *       </ul>
		 *     </li>
		 *     <li>The following syntax is expected:
		 *       <ul>
		 *         <li>'&lt;' and '&gt;' - div elements</li>
		 *         <li>'&lt;"class" and '&gt;' - div with a class</li>
		 *         <li>'&lt;"#id" and '&gt;' - div with an ID</li>
		 *       </ul>
		 *     </li>
		 *     <li>Examples:
		 *       <ul>
		 *         <li>'&lt;"wrapper"flipt&gt;'</li>
		 *         <li>'&lt;lf&lt;t&gt;ip&gt;'</li>
		 *       </ul>
		 *     </li>
		 *   </ul>
		 *  @type string
		 *  @default lfrtip <i>(when bJQueryUI is false)</i> <b>or</b> 
		 *    <"H"lfr>t<"F"ip> <i>(when bJQueryUI is true)</i>
		 *  @dtopt Options
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "sDom": '&lt;"top"i&gt;rt&lt;"bottom"flp&gt;&lt;"clear"&gt;'
		 *      } );
		 *    } );
		 */
		"sDom": "lfrtip",
	
	
		/**
		 * DataTables features two different built-in pagination interaction methods
		 * ('two_button' or 'full_numbers') which present different page controls to
		 * the end user. Further methods can be added using the API (see below).
		 *  @type string
		 *  @default two_button
		 *  @dtopt Options
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "sPaginationType": "full_numbers"
		 *      } );
		 *    } )
		 */
		"sPaginationType": "two_button",
	
	
		/**
		 * Enable horizontal scrolling. When a table is too wide to fit into a certain
		 * layout, or you have a large number of columns in the table, you can enable
		 * x-scrolling to show the table in a viewport, which can be scrolled. This
		 * property can be any CSS unit, or a number (in which case it will be treated
		 * as a pixel measurement).
		 *  @type string
		 *  @default <i>blank string - i.e. disabled</i>
		 *  @dtopt Features
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "sScrollX": "100%",
		 *        "bScrollCollapse": true
		 *      } );
		 *    } );
		 */
		"sScrollX": "",
	
	
		/**
		 * This property can be used to force a DataTable to use more width than it
		 * might otherwise do when x-scrolling is enabled. For example if you have a
		 * table which requires to be well spaced, this parameter is useful for
		 * "over-sizing" the table, and thus forcing scrolling. This property can by
		 * any CSS unit, or a number (in which case it will be treated as a pixel
		 * measurement).
		 *  @type string
		 *  @default <i>blank string - i.e. disabled</i>
		 *  @dtopt Options
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "sScrollX": "100%",
		 *        "sScrollXInner": "110%"
		 *      } );
		 *    } );
		 */
		"sScrollXInner": "",
	
	
		/**
		 * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
		 * to the given height, and enable scrolling for any data which overflows the
		 * current viewport. This can be used as an alternative to paging to display
		 * a lot of data in a small area (although paging and scrolling can both be
		 * enabled at the same time). This property can be any CSS unit, or a number
		 * (in which case it will be treated as a pixel measurement).
		 *  @type string
		 *  @default <i>blank string - i.e. disabled</i>
		 *  @dtopt Features
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "sScrollY": "200px",
		 *        "bPaginate": false
		 *      } );
		 *    } );
		 */
		"sScrollY": "",
	
	
		/**
		 * Set the HTTP method that is used to make the Ajax call for server-side
		 * processing or Ajax sourced data.
		 *  @type string
		 *  @default GET
		 *  @dtopt Options
		 *  @dtopt Server-side
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "bServerSide": true,
		 *        "sAjaxSource": "scripts/post.php",
		 *        "sServerMethod": "POST"
		 *      } );
		 *    } );
		 */
		"sServerMethod": "GET"
	};
	
	
	
	/**
	 * Column options that can be given to DataTables at initialisation time.
	 *  @namespace
	 */
	DataTable.defaults.columns = {
		/**
		 * Allows a column's sorting to take multiple columns into account when 
		 * doing a sort. For example first name / last name columns make sense to 
		 * do a multi-column sort over the two columns.
		 *  @type array
		 *  @default null <i>Takes the value of the column index automatically</i>
		 *  @dtopt Columns
		 * 
		 *  @example
		 *    // Using aoColumnDefs
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumnDefs": [
		 *          { "aDataSort": [ 0, 1 ], "aTargets": [ 0 ] },
		 *          { "aDataSort": [ 1, 0 ], "aTargets": [ 1 ] },
		 *          { "aDataSort": [ 2, 3, 4 ], "aTargets": [ 2 ] }
		 *        ]
		 *      } );
		 *    } );
		 *    
		 *  @example
		 *    // Using aoColumns
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumns": [
		 *          { "aDataSort": [ 0, 1 ] },
		 *          { "aDataSort": [ 1, 0 ] },
		 *          { "aDataSort": [ 2, 3, 4 ] },
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"aDataSort": null,
	
	
		/**
		 * You can control the default sorting direction, and even alter the behaviour
		 * of the sort handler (i.e. only allow ascending sorting etc) using this
		 * parameter.
		 *  @type array
		 *  @default [ 'asc', 'desc' ]
		 *  @dtopt Columns
		 * 
		 *  @example
		 *    // Using aoColumnDefs
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumnDefs": [
		 *          { "asSorting": [ "asc" ], "aTargets": [ 1 ] },
		 *          { "asSorting": [ "desc", "asc", "asc" ], "aTargets": [ 2 ] },
		 *          { "asSorting": [ "desc" ], "aTargets": [ 3 ] }
		 *        ]
		 *      } );
		 *    } );
		 *    
		 *  @example
		 *    // Using aoColumns
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumns": [
		 *          null,
		 *          { "asSorting": [ "asc" ] },
		 *          { "asSorting": [ "desc", "asc", "asc" ] },
		 *          { "asSorting": [ "desc" ] },
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"asSorting": [ 'asc', 'desc' ],
	
	
		/**
		 * Enable or disable filtering on the data in this column.
		 *  @type boolean
		 *  @default true
		 *  @dtopt Columns
		 * 
		 *  @example
		 *    // Using aoColumnDefs
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumnDefs": [ 
		 *          { "bSearchable": false, "aTargets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *    
		 *  @example
		 *    // Using aoColumns
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumns": [ 
		 *          { "bSearchable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bSearchable": true,
	
	
		/**
		 * Enable or disable sorting on this column.
		 *  @type boolean
		 *  @default true
		 *  @dtopt Columns
		 * 
		 *  @example
		 *    // Using aoColumnDefs
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumnDefs": [ 
		 *          { "bSortable": false, "aTargets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *    
		 *  @example
		 *    // Using aoColumns
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumns": [ 
		 *          { "bSortable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bSortable": true,
	
	
		/**
		 * <code>Deprecated</code> When using fnRender() for a column, you may wish 
		 * to use the original data (before rendering) for sorting and filtering 
		 * (the default is to used the rendered data that the user can see). This 
		 * may be useful for dates etc.
		 * 
		 * Please note that this option has now been deprecated and will be removed
		 * in the next version of DataTables. Please use mRender / mData rather than
		 * fnRender.
		 *  @type boolean
		 *  @default true
		 *  @dtopt Columns
		 *  @deprecated
		 */
		"bUseRendered": true,
	
	
		/**
		 * Enable or disable the display of this column.
		 *  @type boolean
		 *  @default true
		 *  @dtopt Columns
		 * 
		 *  @example
		 *    // Using aoColumnDefs
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumnDefs": [ 
		 *          { "bVisible": false, "aTargets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *    
		 *  @example
		 *    // Using aoColumns
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumns": [ 
		 *          { "bVisible": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bVisible": true,
		
		
		/**
		 * Developer definable function that is called whenever a cell is created (Ajax source,
		 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
		 * allowing you to modify the DOM element (add background colour for example) when the
		 * element is available.
		 *  @type function
		 *  @param {element} nTd The TD node that has been created
		 *  @param {*} sData The Data for the cell
		 *  @param {array|object} oData The data for the whole row
		 *  @param {int} iRow The row index for the aoData data store
		 *  @param {int} iCol The column index for aoColumns
		 *  @dtopt Columns
		 * 
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumnDefs": [ {
		 *          "aTargets": [3],
		 *          "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
		 *            if ( sData == "1.7" ) {
		 *              $(nTd).css('color', 'blue')
		 *            }
		 *          }
		 *        } ]
		 *      });
		 *    } );
		 */
		"fnCreatedCell": null,
	
	
		/**
		 * <code>Deprecated</code> Custom display function that will be called for the 
		 * display of each cell in this column.
		 *
		 * Please note that this option has now been deprecated and will be removed
		 * in the next version of DataTables. Please use mRender / mData rather than
		 * fnRender.
		 *  @type function
		 *  @param {object} o Object with the following parameters:
		 *  @param {int}    o.iDataRow The row in aoData
		 *  @param {int}    o.iDataColumn The column in question
		 *  @param {array}  o.aData The data for the row in question
		 *  @param {object} o.oSettings The settings object for this DataTables instance
		 *  @param {object} o.mDataProp The data property used for this column
		 *  @param {*}      val The current cell value
		 *  @returns {string} The string you which to use in the display
		 *  @dtopt Columns
		 *  @deprecated
		 */
		"fnRender": null,
	
	
		/**
		 * The column index (starting from 0!) that you wish a sort to be performed
		 * upon when this column is selected for sorting. This can be used for sorting
		 * on hidden columns for example.
		 *  @type int
		 *  @default -1 <i>Use automatically calculated column index</i>
		 *  @dtopt Columns
		 * 
		 *  @example
		 *    // Using aoColumnDefs
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumnDefs": [ 
		 *          { "iDataSort": 1, "aTargets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *    
		 *  @example
		 *    // Using aoColumns
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumns": [ 
		 *          { "iDataSort": 1 },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"iDataSort": -1,
	
	
		/**
		 * This parameter has been replaced by mData in DataTables to ensure naming
		 * consistency. mDataProp can still be used, as there is backwards compatibility
		 * in DataTables for this option, but it is strongly recommended that you use
		 * mData in preference to mDataProp.
		 *  @name DataTable.defaults.columns.mDataProp
		 */
	
	
		/**
		 * This property can be used to read data from any JSON data source property,
		 * including deeply nested objects / properties. mData can be given in a
		 * number of different ways which effect its behaviour:
		 *   <ul>
		 *     <li>integer - treated as an array index for the data source. This is the
		 *       default that DataTables uses (incrementally increased for each column).</li>
		 *     <li>string - read an object property from the data source. Note that you can
		 *       use Javascript dotted notation to read deep properties / arrays from the
		 *       data source.</li>
		 *     <li>null - the sDefaultContent option will be used for the cell (null
		 *       by default, so you will need to specify the default content you want -
		 *       typically an empty string). This can be useful on generated columns such 
		 *       as edit / delete action columns.</li>
		 *     <li>function - the function given will be executed whenever DataTables 
		 *       needs to set or get the data for a cell in the column. The function 
		 *       takes three parameters:
		 *       <ul>
		 *         <li>{array|object} The data source for the row</li>
		 *         <li>{string} The type call data requested - this will be 'set' when
		 *           setting data or 'filter', 'display', 'type', 'sort' or undefined when 
		 *           gathering data. Note that when <i>undefined</i> is given for the type
		 *           DataTables expects to get the raw data for the object back</li>
		 *         <li>{*} Data to set when the second parameter is 'set'.</li>
		 *       </ul>
		 *       The return value from the function is not required when 'set' is the type
		 *       of call, but otherwise the return is what will be used for the data
		 *       requested.</li>
		 *    </ul>
		 *
		 * Note that prior to DataTables 1.9.2 mData was called mDataProp. The name change
		 * reflects the flexibility of this property and is consistent with the naming of
		 * mRender. If 'mDataProp' is given, then it will still be used by DataTables, as
		 * it automatically maps the old name to the new if required.
		 *  @type string|int|function|null
		 *  @default null <i>Use automatically calculated column index</i>
		 *  @dtopt Columns
		 * 
		 *  @example
		 *    // Read table data from objects
		 *    $(document).ready( function() {
		 *      var oTable = $('#example').dataTable( {
		 *        "sAjaxSource": "sources/deep.txt",
		 *        "aoColumns": [
		 *          { "mData": "engine" },
		 *          { "mData": "browser" },
		 *          { "mData": "platform.inner" },
		 *          { "mData": "platform.details.0" },
		 *          { "mData": "platform.details.1" }
		 *        ]
		 *      } );
		 *    } );
		 * 
		 *  @example
		 *    // Using mData as a function to provide different information for
		 *    // sorting, filtering and display. In this case, currency (price)
		 *    $(document).ready( function() {
		 *      var oTable = $('#example').dataTable( {
		 *        "aoColumnDefs": [ {
		 *          "aTargets": [ 0 ],
		 *          "mData": function ( source, type, val ) {
		 *            if (type === 'set') {
		 *              source.price = val;
		 *              // Store the computed dislay and filter values for efficiency
		 *              source.price_display = val=="" ? "" : "$"+numberFormat(val);
		 *              source.price_filter  = val=="" ? "" : "$"+numberFormat(val)+" "+val;
		 *              return;
		 *            }
		 *            else if (type === 'display') {
		 *              return source.price_display;
		 *            }
		 *            else if (type === 'filter') {
		 *              return source.price_filter;
		 *            }
		 *            // 'sort', 'type' and undefined all just use the integer
		 *            return source.price;
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 */
		"mData": null,
	
	
		/**
		 * This property is the rendering partner to mData and it is suggested that
		 * when you want to manipulate data for display (including filtering, sorting etc)
		 * but not altering the underlying data for the table, use this property. mData
		 * can actually do everything this property can and more, but this parameter is
		 * easier to use since there is no 'set' option. Like mData is can be given
		 * in a number of different ways to effect its behaviour, with the addition of 
		 * supporting array syntax for easy outputting of arrays (including arrays of
		 * objects):
		 *   <ul>
		 *     <li>integer - treated as an array index for the data source. This is the
		 *       default that DataTables uses (incrementally increased for each column).</li>
		 *     <li>string - read an object property from the data source. Note that you can
		 *       use Javascript dotted notation to read deep properties / arrays from the
		 *       data source and also array brackets to indicate that the data reader should
		 *       loop over the data source array. When characters are given between the array
		 *       brackets, these characters are used to join the data source array together.
		 *       For example: "accounts[, ].name" would result in a comma separated list with
		 *       the 'name' value from the 'accounts' array of objects.</li>
		 *     <li>function - the function given will be executed whenever DataTables 
		 *       needs to set or get the data for a cell in the column. The function 
		 *       takes three parameters:
		 *       <ul>
		 *         <li>{array|object} The data source for the row (based on mData)</li>
		 *         <li>{string} The type call data requested - this will be 'filter', 'display', 
		 *           'type' or 'sort'.</li>
		 *         <li>{array|object} The full data source for the row (not based on mData)</li>
		 *       </ul>
		 *       The return value from the function is what will be used for the data
		 *       requested.</li>
		 *    </ul>
		 *  @type string|int|function|null
		 *  @default null <i>Use mData</i>
		 *  @dtopt Columns
		 * 
		 *  @example
		 *    // Create a comma separated list from an array of objects
		 *    $(document).ready( function() {
		 *      var oTable = $('#example').dataTable( {
		 *        "sAjaxSource": "sources/deep.txt",
		 *        "aoColumns": [
		 *          { "mData": "engine" },
		 *          { "mData": "browser" },
		 *          {
		 *            "mData": "platform",
		 *            "mRender": "[, ].name"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 * 
		 *  @example
		 *    // Use as a function to create a link from the data source
		 *    $(document).ready( function() {
		 *      var oTable = $('#example').dataTable( {
		 *        "aoColumnDefs": [
		 *        {
		 *          "aTargets": [ 0 ],
		 *          "mData": "download_link",
		 *          "mRender": function ( data, type, full ) {
		 *            return '<a href="'+data+'">Download</a>';
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 */
		"mRender": null,
	
	
		/**
		 * Change the cell type created for the column - either TD cells or TH cells. This
		 * can be useful as TH cells have semantic meaning in the table body, allowing them
		 * to act as a header for a row (you may wish to add scope='row' to the TH elements).
		 *  @type string
		 *  @default td
		 *  @dtopt Columns
		 * 
		 *  @example
		 *    // Make the first column use TH cells
		 *    $(document).ready( function() {
		 *      var oTable = $('#example').dataTable( {
		 *        "aoColumnDefs": [ {
		 *          "aTargets": [ 0 ],
		 *          "sCellType": "th"
		 *        } ]
		 *      } );
		 *    } );
		 */
		"sCellType": "td",
	
	
		/**
		 * Class to give to each cell in this column.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *  @dtopt Columns
		 * 
		 *  @example
		 *    // Using aoColumnDefs
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumnDefs": [ 
		 *          { "sClass": "my_class", "aTargets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *    
		 *  @example
		 *    // Using aoColumns
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumns": [ 
		 *          { "sClass": "my_class" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sClass": "",
		
		/**
		 * When DataTables calculates the column widths to assign to each column,
		 * it finds the longest string in each column and then constructs a
		 * temporary table and reads the widths from that. The problem with this
		 * is that "mmm" is much wider then "iiii", but the latter is a longer 
		 * string - thus the calculation can go wrong (doing it properly and putting
		 * it into an DOM object and measuring that is horribly(!) slow). Thus as
		 * a "work around" we provide this option. It will append its value to the
		 * text that is found to be the longest string for the column - i.e. padding.
		 * Generally you shouldn't need this, and it is not documented on the 
		 * general DataTables.net documentation
		 *  @type string
		 *  @default <i>Empty string<i>
		 *  @dtopt Columns
		 *    
		 *  @example
		 *    // Using aoColumns
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumns": [ 
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "sContentPadding": "mmm"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sContentPadding": "",
	
	
		/**
		 * Allows a default value to be given for a column's data, and will be used
		 * whenever a null data source is encountered (this can be because mData
		 * is set to null, or because the data source itself is null).
		 *  @type string
		 *  @default null
		 *  @dtopt Columns
		 * 
		 *  @example
		 *    // Using aoColumnDefs
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumnDefs": [ 
		 *          {
		 *            "mData": null,
		 *            "sDefaultContent": "Edit",
		 *            "aTargets": [ -1 ]
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 *    
		 *  @example
		 *    // Using aoColumns
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumns": [ 
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "mData": null,
		 *            "sDefaultContent": "Edit"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sDefaultContent": null,
	
	
		/**
		 * This parameter is only used in DataTables' server-side processing. It can
		 * be exceptionally useful to know what columns are being displayed on the
		 * client side, and to map these to database fields. When defined, the names
		 * also allow DataTables to reorder information from the server if it comes
		 * back in an unexpected order (i.e. if you switch your columns around on the
		 * client-side, your server-side code does not also need updating).
		 *  @type string
		 *  @default <i>Empty string</i>
		 *  @dtopt Columns
		 * 
		 *  @example
		 *    // Using aoColumnDefs
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumnDefs": [ 
		 *          { "sName": "engine", "aTargets": [ 0 ] },
		 *          { "sName": "browser", "aTargets": [ 1 ] },
		 *          { "sName": "platform", "aTargets": [ 2 ] },
		 *          { "sName": "version", "aTargets": [ 3 ] },
		 *          { "sName": "grade", "aTargets": [ 4 ] }
		 *        ]
		 *      } );
		 *    } );
		 *    
		 *  @example
		 *    // Using aoColumns
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumns": [ 
		 *          { "sName": "engine" },
		 *          { "sName": "browser" },
		 *          { "sName": "platform" },
		 *          { "sName": "version" },
		 *          { "sName": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sName": "",
	
	
		/**
		 * Defines a data source type for the sorting which can be used to read
		 * real-time information from the table (updating the internally cached
		 * version) prior to sorting. This allows sorting to occur on user editable
		 * elements such as form inputs.
		 *  @type string
		 *  @default std
		 *  @dtopt Columns
		 * 
		 *  @example
		 *    // Using aoColumnDefs
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumnDefs": [
		 *          { "sSortDataType": "dom-text", "aTargets": [ 2, 3 ] },
		 *          { "sType": "numeric", "aTargets": [ 3 ] },
		 *          { "sSortDataType": "dom-select", "aTargets": [ 4 ] },
		 *          { "sSortDataType": "dom-checkbox", "aTargets": [ 5 ] }
		 *        ]
		 *      } );
		 *    } );
		 *    
		 *  @example
		 *    // Using aoColumns
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumns": [
		 *          null,
		 *          null,
		 *          { "sSortDataType": "dom-text" },
		 *          { "sSortDataType": "dom-text", "sType": "numeric" },
		 *          { "sSortDataType": "dom-select" },
		 *          { "sSortDataType": "dom-checkbox" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sSortDataType": "std",
	
	
		/**
		 * The title of this column.
		 *  @type string
		 *  @default null <i>Derived from the 'TH' value for this column in the 
		 *    original HTML table.</i>
		 *  @dtopt Columns
		 * 
		 *  @example
		 *    // Using aoColumnDefs
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumnDefs": [ 
		 *          { "sTitle": "My column title", "aTargets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *    
		 *  @example
		 *    // Using aoColumns
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumns": [ 
		 *          { "sTitle": "My column title" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sTitle": null,
	
	
		/**
		 * The type allows you to specify how the data for this column will be sorted.
		 * Four types (string, numeric, date and html (which will strip HTML tags
		 * before sorting)) are currently available. Note that only date formats
		 * understood by Javascript's Date() object will be accepted as type date. For
		 * example: "Mar 26, 2008 5:03 PM". May take the values: 'string', 'numeric',
		 * 'date' or 'html' (by default). Further types can be adding through
		 * plug-ins.
		 *  @type string
		 *  @default null <i>Auto-detected from raw data</i>
		 *  @dtopt Columns
		 * 
		 *  @example
		 *    // Using aoColumnDefs
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumnDefs": [ 
		 *          { "sType": "html", "aTargets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *    
		 *  @example
		 *    // Using aoColumns
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumns": [ 
		 *          { "sType": "html" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sType": null,
	
	
		/**
		 * Defining the width of the column, this parameter may take any CSS value
		 * (3em, 20px etc). DataTables apples 'smart' widths to columns which have not
		 * been given a specific width through this interface ensuring that the table
		 * remains readable.
		 *  @type string
		 *  @default null <i>Automatic</i>
		 *  @dtopt Columns
		 * 
		 *  @example
		 *    // Using aoColumnDefs
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumnDefs": [ 
		 *          { "sWidth": "20%", "aTargets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *    
		 *  @example
		 *    // Using aoColumns
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "aoColumns": [ 
		 *          { "sWidth": "20%" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sWidth": null
	};
	
	
	
	/**
	 * DataTables settings object - this holds all the information needed for a
	 * given table, including configuration, data and current application of the
	 * table options. DataTables does not have a single instance for each DataTable
	 * with the settings attached to that instance, but rather instances of the
	 * DataTable "class" are created on-the-fly as needed (typically by a 
	 * $().dataTable() call) and the settings object is then applied to that
	 * instance.
	 * 
	 * Note that this object is related to {@link DataTable.defaults} but this 
	 * one is the internal data store for DataTables's cache of columns. It should
	 * NOT be manipulated outside of DataTables. Any configuration should be done
	 * through the initialisation options.
	 *  @namespace
	 *  @todo Really should attach the settings object to individual instances so we
	 *    don't need to create new instances on each $().dataTable() call (if the
	 *    table already exists). It would also save passing oSettings around and
	 *    into every single function. However, this is a very significant 
	 *    architecture change for DataTables and will almost certainly break
	 *    backwards compatibility with older installations. This is something that
	 *    will be done in 2.0.
	 */
	DataTable.models.oSettings = {
		/**
		 * Primary features of DataTables and their enablement state.
		 *  @namespace
		 */
		"oFeatures": {
			
			/**
			 * Flag to say if DataTables should automatically try to calculate the
			 * optimum table and columns widths (true) or not (false).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bAutoWidth": null,
	
			/**
			 * Delay the creation of TR and TD elements until they are actually
			 * needed by a driven page draw. This can give a significant speed
			 * increase for Ajax source and Javascript source data, but makes no
			 * difference at all fro DOM and server-side processing tables.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bDeferRender": null,
			
			/**
			 * Enable filtering on the table or not. Note that if this is disabled
			 * then there is no filtering at all on the table, including fnFilter.
			 * To just remove the filtering input use sDom and remove the 'f' option.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bFilter": null,
			
			/**
			 * Table information element (the 'Showing x of y records' div) enable
			 * flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bInfo": null,
			
			/**
			 * Present a user control allowing the end user to change the page size
			 * when pagination is enabled.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bLengthChange": null,
	
			/**
			 * Pagination enabled or not. Note that if this is disabled then length
			 * changing must also be disabled.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bPaginate": null,
			
			/**
			 * Processing indicator enable flag whenever DataTables is enacting a
			 * user request - typically an Ajax request for server-side processing.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bProcessing": null,
			
			/**
			 * Server-side processing enabled flag - when enabled DataTables will
			 * get all data from the server for every draw - there is no filtering,
			 * sorting or paging done on the client-side.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bServerSide": null,
			
			/**
			 * Sorting enablement flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSort": null,
			
			/**
			 * Apply a class to the columns which are being sorted to provide a
			 * visual highlight or not. This can slow things down when enabled since
			 * there is a lot of DOM interaction.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSortClasses": null,
			
			/**
			 * State saving enablement flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bStateSave": null
		},
		
	
		/**
		 * Scrolling settings for a table.
		 *  @namespace
		 */
		"oScroll": {
			/**
			 * Indicate if DataTables should be allowed to set the padding / margin
			 * etc for the scrolling header elements or not. Typically you will want
			 * this.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bAutoCss": null,
			
			/**
			 * When the table is shorter in height than sScrollY, collapse the
			 * table container down to the height of the table (when true).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bCollapse": null,
			
			/**
			 * Infinite scrolling enablement flag. Now deprecated in favour of
			 * using the Scroller plug-in.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bInfinite": null,
			
			/**
			 * Width of the scrollbar for the web-browser's platform. Calculated
			 * during table initialisation.
			 *  @type int
			 *  @default 0
			 */
			"iBarWidth": 0,
			
			/**
			 * Space (in pixels) between the bottom of the scrolling container and 
			 * the bottom of the scrolling viewport before the next page is loaded
			 * when using infinite scrolling.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type int
			 */
			"iLoadGap": null,
			
			/**
			 * Viewport width for horizontal scrolling. Horizontal scrolling is 
			 * disabled if an empty string.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */
			"sX": null,
			
			/**
			 * Width to expand the table to when using x-scrolling. Typically you
			 * should not need to use this.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 *  @deprecated
			 */
			"sXInner": null,
			
			/**
			 * Viewport height for vertical scrolling. Vertical scrolling is disabled
			 * if an empty string.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */
			"sY": null
		},
		
		/**
		 * Language information for the table.
		 *  @namespace
		 *  @extends DataTable.defaults.oLanguage
		 */
		"oLanguage": {
			/**
			 * Information callback function. See 
			 * {@link DataTable.defaults.fnInfoCallback}
			 *  @type function
			 *  @default null
			 */
			"fnInfoCallback": null
		},
		
		/**
		 * Browser support parameters
		 *  @namespace
		 */
		"oBrowser": {
			/**
			 * Indicate if the browser incorrectly calculates width:100% inside a
			 * scrolling element (IE6/7)
			 *  @type boolean
			 *  @default false
			 */
			"bScrollOversize": false
		},
		
		/**
		 * Array referencing the nodes which are used for the features. The 
		 * parameters of this object match what is allowed by sDom - i.e.
		 *   <ul>
		 *     <li>'l' - Length changing</li>
		 *     <li>'f' - Filtering input</li>
		 *     <li>'t' - The table!</li>
		 *     <li>'i' - Information</li>
		 *     <li>'p' - Pagination</li>
		 *     <li>'r' - pRocessing</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aanFeatures": [],
		
		/**
		 * Store data information - see {@link DataTable.models.oRow} for detailed
		 * information.
		 *  @type array
		 *  @default []
		 */
		"aoData": [],
		
		/**
		 * Array of indexes which are in the current display (after filtering etc)
		 *  @type array
		 *  @default []
		 */
		"aiDisplay": [],
		
		/**
		 * Array of indexes for display - no filtering
		 *  @type array
		 *  @default []
		 */
		"aiDisplayMaster": [],
		
		/**
		 * Store information about each column that is in use
		 *  @type array
		 *  @default []
		 */
		"aoColumns": [],
		
		/**
		 * Store information about the table's header
		 *  @type array
		 *  @default []
		 */
		"aoHeader": [],
		
		/**
		 * Store information about the table's footer
		 *  @type array
		 *  @default []
		 */
		"aoFooter": [],
		
		/**
		 * Search data array for regular expression searching
		 *  @type array
		 *  @default []
		 */
		"asDataSearch": [],
		
		/**
		 * Store the applied global search information in case we want to force a 
		 * research or compare the old search to a new one.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @namespace
		 *  @extends DataTable.models.oSearch
		 */
		"oPreviousSearch": {},
		
		/**
		 * Store the applied search for each column - see 
		 * {@link DataTable.models.oSearch} for the format that is used for the
		 * filtering information for each column.
		 *  @type array
		 *  @default []
		 */
		"aoPreSearchCols": [],
		
		/**
		 * Sorting that is applied to the table. Note that the inner arrays are
		 * used in the following manner:
		 * <ul>
		 *   <li>Index 0 - column number</li>
		 *   <li>Index 1 - current sorting direction</li>
		 *   <li>Index 2 - index of asSorting for this column</li>
		 * </ul>
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @todo These inner arrays should really be objects
		 */
		"aaSorting": null,
		
		/**
		 * Sorting that is always applied to the table (i.e. prefixed in front of
		 * aaSorting).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array|null
		 *  @default null
		 */
		"aaSortingFixed": null,
		
		/**
		 * Classes to use for the striping of a table.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"asStripeClasses": null,
		
		/**
		 * If restoring a table - we should restore its striping classes as well
		 *  @type array
		 *  @default []
		 */
		"asDestroyStripes": [],
		
		/**
		 * If restoring a table - we should restore its width 
		 *  @type int
		 *  @default 0
		 */
		"sDestroyWidth": 0,
		
		/**
		 * Callback functions array for every time a row is inserted (i.e. on a draw).
		 *  @type array
		 *  @default []
		 */
		"aoRowCallback": [],
		
		/**
		 * Callback functions for the header on each draw.
		 *  @type array
		 *  @default []
		 */
		"aoHeaderCallback": [],
		
		/**
		 * Callback function for the footer on each draw.
		 *  @type array
		 *  @default []
		 */
		"aoFooterCallback": [],
		
		/**
		 * Array of callback functions for draw callback functions
		 *  @type array
		 *  @default []
		 */
		"aoDrawCallback": [],
		
		/**
		 * Array of callback functions for row created function
		 *  @type array
		 *  @default []
		 */
		"aoRowCreatedCallback": [],
		
		/**
		 * Callback functions for just before the table is redrawn. A return of 
		 * false will be used to cancel the draw.
		 *  @type array
		 *  @default []
		 */
		"aoPreDrawCallback": [],
		
		/**
		 * Callback functions for when the table has been initialised.
		 *  @type array
		 *  @default []
		 */
		"aoInitComplete": [],
	
		
		/**
		 * Callbacks for modifying the settings to be stored for state saving, prior to
		 * saving state.
		 *  @type array
		 *  @default []
		 */
		"aoStateSaveParams": [],
		
		/**
		 * Callbacks for modifying the settings that have been stored for state saving
		 * prior to using the stored values to restore the state.
		 *  @type array
		 *  @default []
		 */
		"aoStateLoadParams": [],
		
		/**
		 * Callbacks for operating on the settings object once the saved state has been
		 * loaded
		 *  @type array
		 *  @default []
		 */
		"aoStateLoaded": [],
		
		/**
		 * Cache the table ID for quick access
		 *  @type string
		 *  @default <i>Empty string</i>
		 */
		"sTableId": "",
		
		/**
		 * The TABLE node for the main table
		 *  @type node
		 *  @default null
		 */
		"nTable": null,
		
		/**
		 * Permanent ref to the thead element
		 *  @type node
		 *  @default null
		 */
		"nTHead": null,
		
		/**
		 * Permanent ref to the tfoot element - if it exists
		 *  @type node
		 *  @default null
		 */
		"nTFoot": null,
		
		/**
		 * Permanent ref to the tbody element
		 *  @type node
		 *  @default null
		 */
		"nTBody": null,
		
		/**
		 * Cache the wrapper node (contains all DataTables controlled elements)
		 *  @type node
		 *  @default null
		 */
		"nTableWrapper": null,
		
		/**
		 * Indicate if when using server-side processing the loading of data 
		 * should be deferred until the second draw.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 *  @default false
		 */
		"bDeferLoading": false,
		
		/**
		 * Indicate if all required information has been read in
		 *  @type boolean
		 *  @default false
		 */
		"bInitialised": false,
		
		/**
		 * Information about open rows. Each object in the array has the parameters
		 * 'nTr' and 'nParent'
		 *  @type array
		 *  @default []
		 */
		"aoOpenRows": [],
		
		/**
		 * Dictate the positioning of DataTables' control elements - see
		 * {@link DataTable.model.oInit.sDom}.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default null
		 */
		"sDom": null,
		
		/**
		 * Which type of pagination should be used.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string 
		 *  @default two_button
		 */
		"sPaginationType": "two_button",
		
		/**
		 * The cookie duration (for bStateSave) in seconds.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type int
		 *  @default 0
		 */
		"iCookieDuration": 0,
		
		/**
		 * The cookie name prefix.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default <i>Empty string</i>
		 */
		"sCookiePrefix": "",
		
		/**
		 * Callback function for cookie creation.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type function
		 *  @default null
		 */
		"fnCookieCallback": null,
		
		/**
		 * Array of callback functions for state saving. Each array element is an 
		 * object with the following parameters:
		 *   <ul>
		 *     <li>function:fn - function to call. Takes two parameters, oSettings
		 *       and the JSON string to save that has been thus far created. Returns
		 *       a JSON string to be inserted into a json object 
		 *       (i.e. '"param": [ 0, 1, 2]')</li>
		 *     <li>string:sName - name of callback</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aoStateSave": [],
		
		/**
		 * Array of callback functions for state loading. Each array element is an 
		 * object with the following parameters:
		 *   <ul>
		 *     <li>function:fn - function to call. Takes two parameters, oSettings 
		 *       and the object stored. May return false to cancel state loading</li>
		 *     <li>string:sName - name of callback</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aoStateLoad": [],
		
		/**
		 * State that was loaded from the cookie. Useful for back reference
		 *  @type object
		 *  @default null
		 */
		"oLoadedState": null,
		
		/**
		 * Source url for AJAX data for the table.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default null
		 */
		"sAjaxSource": null,
		
		/**
		 * Property from a given object from which to read the table data from. This
		 * can be an empty string (when not server-side processing), in which case 
		 * it is  assumed an an array is given directly.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */
		"sAjaxDataProp": null,
		
		/**
		 * Note if draw should be blocked while getting data
		 *  @type boolean
		 *  @default true
		 */
		"bAjaxDataGet": true,
		
		/**
		 * The last jQuery XHR object that was used for server-side data gathering. 
		 * This can be used for working with the XHR information in one of the 
		 * callbacks
		 *  @type object
		 *  @default null
		 */
		"jqXHR": null,
		
		/**
		 * Function to get the server-side data.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type function
		 */
		"fnServerData": null,
		
		/**
		 * Functions which are called prior to sending an Ajax request so extra 
		 * parameters can easily be sent to the server
		 *  @type array
		 *  @default []
		 */
		"aoServerParams": [],
		
		/**
		 * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if 
		 * required).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */
		"sServerMethod": null,
		
		/**
		 * Format numbers for display.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type function
		 */
		"fnFormatNumber": null,
		
		/**
		 * List of options that can be used for the user selectable length menu.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"aLengthMenu": null,
		
		/**
		 * Counter for the draws that the table does. Also used as a tracker for
		 * server-side processing
		 *  @type int
		 *  @default 0
		 */
		"iDraw": 0,
		
		/**
		 * Indicate if a redraw is being done - useful for Ajax
		 *  @type boolean
		 *  @default false
		 */
		"bDrawing": false,
		
		/**
		 * Draw index (iDraw) of the last error when parsing the returned data
		 *  @type int
		 *  @default -1
		 */
		"iDrawError": -1,
		
		/**
		 * Paging display length
		 *  @type int
		 *  @default 10
		 */
		"_iDisplayLength": 10,
	
		/**
		 * Paging start point - aiDisplay index
		 *  @type int
		 *  @default 0
		 */
		"_iDisplayStart": 0,
	
		/**
		 * Paging end point - aiDisplay index. Use fnDisplayEnd rather than
		 * this property to get the end point
		 *  @type int
		 *  @default 10
		 *  @private
		 */
		"_iDisplayEnd": 10,
		
		/**
		 * Server-side processing - number of records in the result set
		 * (i.e. before filtering), Use fnRecordsTotal rather than
		 * this property to get the value of the number of records, regardless of
		 * the server-side processing setting.
		 *  @type int
		 *  @default 0
		 *  @private
		 */
		"_iRecordsTotal": 0,
	
		/**
		 * Server-side processing - number of records in the current display set
		 * (i.e. after filtering). Use fnRecordsDisplay rather than
		 * this property to get the value of the number of records, regardless of
		 * the server-side processing setting.
		 *  @type boolean
		 *  @default 0
		 *  @private
		 */
		"_iRecordsDisplay": 0,
		
		/**
		 * Flag to indicate if jQuery UI marking and classes should be used.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bJUI": null,
		
		/**
		 * The classes to use for the table
		 *  @type object
		 *  @default {}
		 */
		"oClasses": {},
		
		/**
		 * Flag attached to the settings object so you can check in the draw 
		 * callback if filtering has been done in the draw. Deprecated in favour of
		 * events.
		 *  @type boolean
		 *  @default false
		 *  @deprecated
		 */
		"bFiltered": false,
		
		/**
		 * Flag attached to the settings object so you can check in the draw 
		 * callback if sorting has been done in the draw. Deprecated in favour of
		 * events.
		 *  @type boolean
		 *  @default false
		 *  @deprecated
		 */
		"bSorted": false,
		
		/**
		 * Indicate that if multiple rows are in the header and there is more than 
		 * one unique cell per column, if the top one (true) or bottom one (false) 
		 * should be used for sorting / title by DataTables.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bSortCellsTop": null,
		
		/**
		 * Initialisation object that is used for the table
		 *  @type object
		 *  @default null
		 */
		"oInit": null,
		
		/**
		 * Destroy callback functions - for plug-ins to attach themselves to the
		 * destroy so they can clean up markup and events.
		 *  @type array
		 *  @default []
		 */
		"aoDestroyCallback": [],
	
		
		/**
		 * Get the number of records in the current record set, before filtering
		 *  @type function
		 */
		"fnRecordsTotal": function ()
		{
			if ( this.oFeatures.bServerSide ) {
				return parseInt(this._iRecordsTotal, 10);
			} else {
				return this.aiDisplayMaster.length;
			}
		},
		
		/**
		 * Get the number of records in the current record set, after filtering
		 *  @type function
		 */
		"fnRecordsDisplay": function ()
		{
			if ( this.oFeatures.bServerSide ) {
				return parseInt(this._iRecordsDisplay, 10);
			} else {
				return this.aiDisplay.length;
			}
		},
		
		/**
		 * Set the display end point - aiDisplay index
		 *  @type function
		 *  @todo Should do away with _iDisplayEnd and calculate it on-the-fly here
		 */
		"fnDisplayEnd": function ()
		{
			if ( this.oFeatures.bServerSide ) {
				if ( this.oFeatures.bPaginate === false || this._iDisplayLength == -1 ) {
					return this._iDisplayStart+this.aiDisplay.length;
				} else {
					return Math.min( this._iDisplayStart+this._iDisplayLength, 
						this._iRecordsDisplay );
				}
			} else {
				return this._iDisplayEnd;
			}
		},
		
		/**
		 * The DataTables object for this table
		 *  @type object
		 *  @default null
		 */
		"oInstance": null,
		
		/**
		 * Unique identifier for each instance of the DataTables object. If there
		 * is an ID on the table node, then it takes that value, otherwise an
		 * incrementing internal counter is used.
		 *  @type string
		 *  @default null
		 */
		"sInstance": null,
	
		/**
		 * tabindex attribute value that is added to DataTables control elements, allowing
		 * keyboard navigation of the table and its controls.
		 */
		"iTabIndex": 0,
	
		/**
		 * DIV container for the footer scrolling table if scrolling
		 */
		"nScrollHead": null,
	
		/**
		 * DIV container for the footer scrolling table if scrolling
		 */
		"nScrollFoot": null
	};

	/**
	 * Extension object for DataTables that is used to provide all extension options.
	 * 
	 * Note that the <i>DataTable.ext</i> object is available through
	 * <i>jQuery.fn.dataTable.ext</i> where it may be accessed and manipulated. It is
	 * also aliased to <i>jQuery.fn.dataTableExt</i> for historic reasons.
	 *  @namespace
	 *  @extends DataTable.models.ext
	 */
	DataTable.ext = $.extend( true, {}, DataTable.models.ext );
	
	$.extend( DataTable.ext.oStdClasses, {
		"sTable": "dataTable",
	
		/* Two buttons buttons */
		"sPagePrevEnabled": "paginate_enabled_previous",
		"sPagePrevDisabled": "paginate_disabled_previous",
		"sPageNextEnabled": "paginate_enabled_next",
		"sPageNextDisabled": "paginate_disabled_next",
		"sPageJUINext": "",
		"sPageJUIPrev": "",
		
		/* Full numbers paging buttons */
		"sPageButton": "paginate_button",
		"sPageButtonActive": "paginate_active",
		"sPageButtonStaticDisabled": "paginate_button paginate_button_disabled",
		"sPageFirst": "first",
		"sPagePrevious": "previous",
		"sPageNext": "next",
		"sPageLast": "last",
		
		/* Striping classes */
		"sStripeOdd": "odd",
		"sStripeEven": "even",
		
		/* Empty row */
		"sRowEmpty": "dataTables_empty",
		
		/* Features */
		"sWrapper": "dataTables_wrapper",
		"sFilter": "dataTables_filter",
		"sInfo": "dataTables_info",
		"sPaging": "dataTables_paginate paging_", /* Note that the type is postfixed */
		"sLength": "dataTables_length",
		"sProcessing": "dataTables_processing",
		
		/* Sorting */
		"sSortAsc": "sorting_asc",
		"sSortDesc": "sorting_desc",
		"sSortable": "sorting", /* Sortable in both directions */
		"sSortableAsc": "sorting_asc_disabled",
		"sSortableDesc": "sorting_desc_disabled",
		"sSortableNone": "sorting_disabled",
		"sSortColumn": "sorting_", /* Note that an int is postfixed for the sorting order */
		"sSortJUIAsc": "",
		"sSortJUIDesc": "",
		"sSortJUI": "",
		"sSortJUIAscAllowed": "",
		"sSortJUIDescAllowed": "",
		"sSortJUIWrapper": "",
		"sSortIcon": "",
		
		/* Scrolling */
		"sScrollWrapper": "dataTables_scroll",
		"sScrollHead": "dataTables_scrollHead",
		"sScrollHeadInner": "dataTables_scrollHeadInner",
		"sScrollBody": "dataTables_scrollBody",
		"sScrollFoot": "dataTables_scrollFoot",
		"sScrollFootInner": "dataTables_scrollFootInner",
		
		/* Misc */
		"sFooterTH": "",
		"sJUIHeader": "",
		"sJUIFooter": ""
	} );
	
	
	$.extend( DataTable.ext.oJUIClasses, DataTable.ext.oStdClasses, {
		/* Two buttons buttons */
		"sPagePrevEnabled": "fg-button ui-button ui-state-default ui-corner-left",
		"sPagePrevDisabled": "fg-button ui-button ui-state-default ui-corner-left ui-state-disabled",
		"sPageNextEnabled": "fg-button ui-button ui-state-default ui-corner-right",
		"sPageNextDisabled": "fg-button ui-button ui-state-default ui-corner-right ui-state-disabled",
		"sPageJUINext": "ui-icon ui-icon-circle-arrow-e",
		"sPageJUIPrev": "ui-icon ui-icon-circle-arrow-w",
		
		/* Full numbers paging buttons */
		"sPageButton": "fg-button ui-button ui-state-default",
		"sPageButtonActive": "fg-button ui-button ui-state-default ui-state-disabled",
		"sPageButtonStaticDisabled": "fg-button ui-button ui-state-default ui-state-disabled",
		"sPageFirst": "first ui-corner-tl ui-corner-bl",
		"sPageLast": "last ui-corner-tr ui-corner-br",
		
		/* Features */
		"sPaging": "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi "+
			"ui-buttonset-multi paging_", /* Note that the type is postfixed */
		
		/* Sorting */
		"sSortAsc": "ui-state-default",
		"sSortDesc": "ui-state-default",
		"sSortable": "ui-state-default",
		"sSortableAsc": "ui-state-default",
		"sSortableDesc": "ui-state-default",
		"sSortableNone": "ui-state-default",
		"sSortJUIAsc": "css_right ui-icon ui-icon-triangle-1-n",
		"sSortJUIDesc": "css_right ui-icon ui-icon-triangle-1-s",
		"sSortJUI": "css_right ui-icon ui-icon-carat-2-n-s",
		"sSortJUIAscAllowed": "css_right ui-icon ui-icon-carat-1-n",
		"sSortJUIDescAllowed": "css_right ui-icon ui-icon-carat-1-s",
		"sSortJUIWrapper": "DataTables_sort_wrapper",
		"sSortIcon": "DataTables_sort_icon",
		
		/* Scrolling */
		"sScrollHead": "dataTables_scrollHead ui-state-default",
		"sScrollFoot": "dataTables_scrollFoot ui-state-default",
		
		/* Misc */
		"sFooterTH": "ui-state-default",
		"sJUIHeader": "fg-toolbar ui-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix",
		"sJUIFooter": "fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"
	} );
	
	/*
	 * Variable: oPagination
	 * Purpose:  
	 * Scope:    jQuery.fn.dataTableExt
	 */
	$.extend( DataTable.ext.oPagination, {
		/*
		 * Variable: two_button
		 * Purpose:  Standard two button (forward/back) pagination
		 * Scope:    jQuery.fn.dataTableExt.oPagination
		 */
		"two_button": {
			/*
			 * Function: oPagination.two_button.fnInit
			 * Purpose:  Initialise dom elements required for pagination with forward/back buttons only
			 * Returns:  -
			 * Inputs:   object:oSettings - dataTables settings object
			 *           node:nPaging - the DIV which contains this pagination control
			 *           function:fnCallbackDraw - draw function which must be called on update
			 */
			"fnInit": function ( oSettings, nPaging, fnCallbackDraw )
			{
				var oLang = oSettings.oLanguage.oPaginate;
				var oClasses = oSettings.oClasses;
				var fnClickHandler = function ( e ) {
					if ( oSettings.oApi._fnPageChange( oSettings, e.data.action ) )
					{
						fnCallbackDraw( oSettings );
					}
				};
	
				var sAppend = (!oSettings.bJUI) ?
					'<a class="'+oSettings.oClasses.sPagePrevDisabled+'" tabindex="'+oSettings.iTabIndex+'" role="button">'+oLang.sPrevious+'</a>'+
					'<a class="'+oSettings.oClasses.sPageNextDisabled+'" tabindex="'+oSettings.iTabIndex+'" role="button">'+oLang.sNext+'</a>'
					:
					'<a class="'+oSettings.oClasses.sPagePrevDisabled+'" tabindex="'+oSettings.iTabIndex+'" role="button"><span class="'+oSettings.oClasses.sPageJUIPrev+'"></span></a>'+
					'<a class="'+oSettings.oClasses.sPageNextDisabled+'" tabindex="'+oSettings.iTabIndex+'" role="button"><span class="'+oSettings.oClasses.sPageJUINext+'"></span></a>';
				$(nPaging).append( sAppend );
				
				var els = $('a', nPaging);
				var nPrevious = els[0],
					nNext = els[1];
				
				oSettings.oApi._fnBindAction( nPrevious, {action: "previous"}, fnClickHandler );
				oSettings.oApi._fnBindAction( nNext,     {action: "next"},     fnClickHandler );
				
				/* ID the first elements only */
				if ( !oSettings.aanFeatures.p )
				{
					nPaging.id = oSettings.sTableId+'_paginate';
					nPrevious.id = oSettings.sTableId+'_previous';
					nNext.id = oSettings.sTableId+'_next';
	
					nPrevious.setAttribute('aria-controls', oSettings.sTableId);
					nNext.setAttribute('aria-controls', oSettings.sTableId);
				}
			},
			
			/*
			 * Function: oPagination.two_button.fnUpdate
			 * Purpose:  Update the two button pagination at the end of the draw
			 * Returns:  -
			 * Inputs:   object:oSettings - dataTables settings object
			 *           function:fnCallbackDraw - draw function to call on page change
			 */
			"fnUpdate": function ( oSettings, fnCallbackDraw )
			{
				if ( !oSettings.aanFeatures.p )
				{
					return;
				}
				
				var oClasses = oSettings.oClasses;
				var an = oSettings.aanFeatures.p;
				var nNode;
	
				/* Loop over each instance of the pager */
				for ( var i=0, iLen=an.length ; i<iLen ; i++ )
				{
					nNode = an[i].firstChild;
					if ( nNode )
					{
						/* Previous page */
						nNode.className = ( oSettings._iDisplayStart === 0 ) ?
						    oClasses.sPagePrevDisabled : oClasses.sPagePrevEnabled;
						    
						/* Next page */
						nNode = nNode.nextSibling;
						nNode.className = ( oSettings.fnDisplayEnd() == oSettings.fnRecordsDisplay() ) ?
						    oClasses.sPageNextDisabled : oClasses.sPageNextEnabled;
					}
				}
			}
		},
		
		
		/*
		 * Variable: iFullNumbersShowPages
		 * Purpose:  Change the number of pages which can be seen
		 * Scope:    jQuery.fn.dataTableExt.oPagination
		 */
		"iFullNumbersShowPages": 5,
		
		/*
		 * Variable: full_numbers
		 * Purpose:  Full numbers pagination
		 * Scope:    jQuery.fn.dataTableExt.oPagination
		 */
		"full_numbers": {
			/*
			 * Function: oPagination.full_numbers.fnInit
			 * Purpose:  Initialise dom elements required for pagination with a list of the pages
			 * Returns:  -
			 * Inputs:   object:oSettings - dataTables settings object
			 *           node:nPaging - the DIV which contains this pagination control
			 *           function:fnCallbackDraw - draw function which must be called on update
			 */
			"fnInit": function ( oSettings, nPaging, fnCallbackDraw )
			{
				var oLang = oSettings.oLanguage.oPaginate;
				var oClasses = oSettings.oClasses;
				var fnClickHandler = function ( e ) {
					if ( oSettings.oApi._fnPageChange( oSettings, e.data.action ) )
					{
						fnCallbackDraw( oSettings );
					}
				};
	
				$(nPaging).append(
					'<a  tabindex="'+oSettings.iTabIndex+'" class="'+oClasses.sPageButton+" "+oClasses.sPageFirst+'">'+oLang.sFirst+'</a>'+
					'<a  tabindex="'+oSettings.iTabIndex+'" class="'+oClasses.sPageButton+" "+oClasses.sPagePrevious+'">'+oLang.sPrevious+'</a>'+
					'<span></span>'+
					'<a tabindex="'+oSettings.iTabIndex+'" class="'+oClasses.sPageButton+" "+oClasses.sPageNext+'">'+oLang.sNext+'</a>'+
					'<a tabindex="'+oSettings.iTabIndex+'" class="'+oClasses.sPageButton+" "+oClasses.sPageLast+'">'+oLang.sLast+'</a>'
				);
				var els = $('a', nPaging);
				var nFirst = els[0],
					nPrev = els[1],
					nNext = els[2],
					nLast = els[3];
				
				oSettings.oApi._fnBindAction( nFirst, {action: "first"},    fnClickHandler );
				oSettings.oApi._fnBindAction( nPrev,  {action: "previous"}, fnClickHandler );
				oSettings.oApi._fnBindAction( nNext,  {action: "next"},     fnClickHandler );
				oSettings.oApi._fnBindAction( nLast,  {action: "last"},     fnClickHandler );
				
				/* ID the first elements only */
				if ( !oSettings.aanFeatures.p )
				{
					nPaging.id = oSettings.sTableId+'_paginate';
					nFirst.id =oSettings.sTableId+'_first';
					nPrev.id =oSettings.sTableId+'_previous';
					nNext.id =oSettings.sTableId+'_next';
					nLast.id =oSettings.sTableId+'_last';
				}
			},
			
			/*
			 * Function: oPagination.full_numbers.fnUpdate
			 * Purpose:  Update the list of page buttons shows
			 * Returns:  -
			 * Inputs:   object:oSettings - dataTables settings object
			 *           function:fnCallbackDraw - draw function to call on page change
			 */
			"fnUpdate": function ( oSettings, fnCallbackDraw )
			{
				if ( !oSettings.aanFeatures.p )
				{
					return;
				}
				
				var iPageCount = DataTable.ext.oPagination.iFullNumbersShowPages;
				var iPageCountHalf = Math.floor(iPageCount / 2);
				var iPages = Math.ceil((oSettings.fnRecordsDisplay()) / oSettings._iDisplayLength);
				var iCurrentPage = Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength) + 1;
				var sList = "";
				var iStartButton, iEndButton, i, iLen;
				var oClasses = oSettings.oClasses;
				var anButtons, anStatic, nPaginateList, nNode;
				var an = oSettings.aanFeatures.p;
				var fnBind = function (j) {
					oSettings.oApi._fnBindAction( this, {"page": j+iStartButton-1}, function(e) {
						/* Use the information in the element to jump to the required page */
						oSettings.oApi._fnPageChange( oSettings, e.data.page );
						fnCallbackDraw( oSettings );
						e.preventDefault();
					} );
				};
				
				/* Pages calculation */
				if ( oSettings._iDisplayLength === -1 )
				{
					iStartButton = 1;
					iEndButton = 1;
					iCurrentPage = 1;
				}
				else if (iPages < iPageCount)
				{
					iStartButton = 1;
					iEndButton = iPages;
				}
				else if (iCurrentPage <= iPageCountHalf)
				{
					iStartButton = 1;
					iEndButton = iPageCount;
				}
				else if (iCurrentPage >= (iPages - iPageCountHalf))
				{
					iStartButton = iPages - iPageCount + 1;
					iEndButton = iPages;
				}
				else
				{
					iStartButton = iCurrentPage - Math.ceil(iPageCount / 2) + 1;
					iEndButton = iStartButton + iPageCount - 1;
				}
	
				
				/* Build the dynamic list */
				for ( i=iStartButton ; i<=iEndButton ; i++ )
				{
					sList += (iCurrentPage !== i) ?
						'<a tabindex="'+oSettings.iTabIndex+'" class="'+oClasses.sPageButton+'">'+oSettings.fnFormatNumber(i)+'</a>' :
						'<a tabindex="'+oSettings.iTabIndex+'" class="'+oClasses.sPageButtonActive+'">'+oSettings.fnFormatNumber(i)+'</a>';
				}
				
				/* Loop over each instance of the pager */
				for ( i=0, iLen=an.length ; i<iLen ; i++ )
				{
					nNode = an[i];
					if ( !nNode.hasChildNodes() )
					{
						continue;
					}
					
					/* Build up the dynamic list first - html and listeners */
					$('span:eq(0)', nNode)
						.html( sList )
						.children('a').each( fnBind );
					
					/* Update the permanent button's classes */
					anButtons = nNode.getElementsByTagName('a');
					anStatic = [
						anButtons[0], anButtons[1], 
						anButtons[anButtons.length-2], anButtons[anButtons.length-1]
					];
	
					$(anStatic).removeClass( oClasses.sPageButton+" "+oClasses.sPageButtonActive+" "+oClasses.sPageButtonStaticDisabled );
					$([anStatic[0], anStatic[1]]).addClass( 
						(iCurrentPage==1) ?
							oClasses.sPageButtonStaticDisabled :
							oClasses.sPageButton
					);
					$([anStatic[2], anStatic[3]]).addClass(
						(iPages===0 || iCurrentPage===iPages || oSettings._iDisplayLength===-1) ?
							oClasses.sPageButtonStaticDisabled :
							oClasses.sPageButton
					);
				}
			}
		}
	} );
	
	$.extend( DataTable.ext.oSort, {
		/*
		 * text sorting
		 */
		"string-pre": function ( a )
		{
			if ( typeof a != 'string' ) {
				a = (a !== null && a.toString) ? a.toString() : '';
			}
			return a.toLowerCase();
		},
	
		"string-asc": function ( x, y )
		{
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		},
		
		"string-desc": function ( x, y )
		{
			return ((x < y) ? 1 : ((x > y) ? -1 : 0));
		},
		
		
		/*
		 * html sorting (ignore html tags)
		 */
		"html-pre": function ( a )
		{
			return a.replace( /<.*?>/g, "" ).toLowerCase();
		},
		
		"html-asc": function ( x, y )
		{
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		},
		
		"html-desc": function ( x, y )
		{
			return ((x < y) ? 1 : ((x > y) ? -1 : 0));
		},
		
		
		/*
		 * date sorting
		 */
		"date-pre": function ( a )
		{
			var x = Date.parse( a );
			
			if ( isNaN(x) || x==="" )
			{
				x = Date.parse( "01/01/1970 00:00:00" );
			}
			return x;
		},
	
		"date-asc": function ( x, y )
		{
			return x - y;
		},
		
		"date-desc": function ( x, y )
		{
			return y - x;
		},
		
		
		/*
		 * numerical sorting
		 */
		"numeric-pre": function ( a )
		{
			return (a=="-" || a==="") ? 0 : a*1;
		},
	
		"numeric-asc": function ( x, y )
		{
			return x - y;
		},
		
		"numeric-desc": function ( x, y )
		{
			return y - x;
		}
	} );
	
	
	$.extend( DataTable.ext.aTypes, [
		/*
		 * Function: -
		 * Purpose:  Check to see if a string is numeric
		 * Returns:  string:'numeric' or null
		 * Inputs:   mixed:sText - string to check
		 */
		function ( sData )
		{
			/* Allow zero length strings as a number */
			if ( typeof sData === 'number' )
			{
				return 'numeric';
			}
			else if ( typeof sData !== 'string' )
			{
				return null;
			}
			
			var sValidFirstChars = "0123456789-";
			var sValidChars = "0123456789.";
			var Char;
			var bDecimal = false;
			
			/* Check for a valid first char (no period and allow negatives) */
			Char = sData.charAt(0); 
			if (sValidFirstChars.indexOf(Char) == -1) 
			{
				return null;
			}
			
			/* Check all the other characters are valid */
			for ( var i=1 ; i<sData.length ; i++ ) 
			{
				Char = sData.charAt(i); 
				if (sValidChars.indexOf(Char) == -1) 
				{
					return null;
				}
				
				/* Only allowed one decimal place... */
				if ( Char == "." )
				{
					if ( bDecimal )
					{
						return null;
					}
					bDecimal = true;
				}
			}
			
			return 'numeric';
		},
		
		/*
		 * Function: -
		 * Purpose:  Check to see if a string is actually a formatted date
		 * Returns:  string:'date' or null
		 * Inputs:   string:sText - string to check
		 */
		function ( sData )
		{
			var iParse = Date.parse(sData);
			if ( (iParse !== null && !isNaN(iParse)) || (typeof sData === 'string' && sData.length === 0) )
			{
				return 'date';
			}
			return null;
		},
		
		/*
		 * Function: -
		 * Purpose:  Check to see if a string should be treated as an HTML string
		 * Returns:  string:'html' or null
		 * Inputs:   string:sText - string to check
		 */
		function ( sData )
		{
			if ( typeof sData === 'string' && sData.indexOf('<') != -1 && sData.indexOf('>') != -1 )
			{
				return 'html';
			}
			return null;
		}
	] );
	

	// jQuery aliases
	$.fn.DataTable = DataTable;
	$.fn.dataTable = DataTable;
	$.fn.dataTableSettings = DataTable.settings;
	$.fn.dataTableExt = DataTable.ext;


	// Information about events fired by DataTables - for documentation.
	/**
	 * Draw event, fired whenever the table is redrawn on the page, at the same point as
	 * fnDrawCallback. This may be useful for binding events or performing calculations when
	 * the table is altered at all.
	 *  @name DataTable#draw
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Filter event, fired when the filtering applied to the table (using the build in global
	 * global filter, or column filters) is altered.
	 *  @name DataTable#filter
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Page change event, fired when the paging of the table is altered.
	 *  @name DataTable#page
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Sort event, fired when the sorting applied to the table is altered.
	 *  @name DataTable#sort
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * DataTables initialisation complete event, fired when the table is fully drawn,
	 * including Ajax data loaded, if Ajax data is required.
	 *  @name DataTable#init
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The JSON object request from the server - only
	 *    present if client-side Ajax sourced data is used</li></ol>
	 */

	/**
	 * State save event, fired when the table has changed state a new state save is required.
	 * This method allows modification of the state saving object prior to actually doing the
	 * save, including addition or other state properties (for plug-ins) or modification
	 * of a DataTables core property.
	 *  @name DataTable#stateSaveParams
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The state information to be saved
	 */

	/**
	 * State load event, fired when the table is loading state from the stored data, but
	 * prior to the settings object being modified by the saved state - allowing modification
	 * of the saved state is required or loading of state for a plug-in.
	 *  @name DataTable#stateLoadParams
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The saved state information
	 */

	/**
	 * State loaded event, fired when state has been loaded from stored data and the settings
	 * object has been modified by the loaded data.
	 *  @name DataTable#stateLoaded
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The saved state information
	 */

	/**
	 * Processing event, fired when DataTables is doing some kind of processing (be it,
	 * sort, filter or anything else). Can be used to indicate to the end user that
	 * there is something happening, or that something has finished.
	 *  @name DataTable#processing
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {boolean} bShow Flag for if DataTables is doing processing or not
	 */

	/**
	 * Ajax (XHR) event, fired whenever an Ajax request is completed from a request to 
	 * made to the server for new data (note that this trigger is called in fnServerData,
	 * if you override fnServerData and which to use this event, you need to trigger it in
	 * you success function).
	 *  @name DataTable#xhr
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {object} json JSON returned from the server
	 */

	/**
	 * Destroy event, fired when the DataTable is destroyed by calling fnDestroy or passing
	 * the bDestroy:true parameter in the initialisation object. This can be used to remove
	 * bound events, added DOM nodes, etc.
	 *  @name DataTable#destroy
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */
}));

}(window, document));

/* Set the defaults for DataTables initialisation */
$.extend( true, $.fn.dataTable.defaults, {
	"sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
	"sPaginationType": "bootstrap",
	"oLanguage": {
		"sLengthMenu": "_MENU_ رکورد در هر صفحه"
	}
} );


/* Default class modification */
$.extend( $.fn.dataTableExt.oStdClasses, {
	"sWrapper": "dataTables_wrapper form-inline"
} );


/* API method to get paging information */
$.fn.dataTableExt.oApi.fnPagingInfo = function ( oSettings )
{
	return {
		"iStart":         oSettings._iDisplayStart,
		"iEnd":           oSettings.fnDisplayEnd(),
		"iLength":        oSettings._iDisplayLength,
		"iTotal":         oSettings.fnRecordsTotal(),
		"iFilteredTotal": oSettings.fnRecordsDisplay(),
		"iPage":          Math.ceil( oSettings._iDisplayStart / oSettings._iDisplayLength ),
		"iTotalPages":    Math.ceil( oSettings.fnRecordsDisplay() / oSettings._iDisplayLength )
	};
};


/* Bootstrap style pagination control */
$.extend( $.fn.dataTableExt.oPagination, {
	"bootstrap": {
		"fnInit": function( oSettings, nPaging, fnDraw ) {
			var oLang = oSettings.oLanguage.oPaginate;
			var fnClickHandler = function ( e ) {
				e.preventDefault();
				if ( oSettings.oApi._fnPageChange(oSettings, e.data.action) ) {
					fnDraw( oSettings );
				}
			};

			$(nPaging).addClass('pagination').append(
				'<ul>'+
					'<li class="prev disabled"><a href="#">&larr; '+oLang.sPrevious+'</a></li>'+
					'<li class="next disabled"><a href="#">'+oLang.sNext+' &rarr; </a></li>'+
				'</ul>'
			);
			var els = $('a', nPaging);
			$(els[0]).bind( 'click.DT', { action: "previous" }, fnClickHandler );
			$(els[1]).bind( 'click.DT', { action: "next" }, fnClickHandler );
		},

		"fnUpdate": function ( oSettings, fnDraw ) {
			var iListLength = 5;
			var oPaging = oSettings.oInstance.fnPagingInfo();
			var an = oSettings.aanFeatures.p;
			var i, j, sClass, iStart, iEnd, iHalf=Math.floor(iListLength/2);

			if ( oPaging.iTotalPages < iListLength) {
				iStart = 1;
				iEnd = oPaging.iTotalPages;
			}
			else if ( oPaging.iPage <= iHalf ) {
				iStart = 1;
				iEnd = iListLength;
			} else if ( oPaging.iPage >= (oPaging.iTotalPages-iHalf) ) {
				iStart = oPaging.iTotalPages - iListLength + 1;
				iEnd = oPaging.iTotalPages;
			} else {
				iStart = oPaging.iPage - iHalf + 1;
				iEnd = iStart + iListLength - 1;
			}

			for ( i=0, iLen=an.length ; i<iLen ; i++ ) {
				// Remove the middle elements
				$('li:gt(0)', an[i]).filter(':not(:last)').remove();

				// Add the new list items and their event handlers
				for ( j=iStart ; j<=iEnd ; j++ ) {
					sClass = (j==oPaging.iPage+1) ? 'class="active"' : '';
					$('<li '+sClass+'><a href="#">'+j+'</a></li>')
						.insertBefore( $('li:last', an[i])[0] )
						.bind('click', function (e) {
							e.preventDefault();
							oSettings._iDisplayStart = (parseInt($('a', this).text(),10)-1) * oPaging.iLength;
							fnDraw( oSettings );
						} );
				}

				// Add / remove disabled classes from the static elements
				if ( oPaging.iPage === 0 ) {
					$('li:first', an[i]).addClass('disabled');
				} else {
					$('li:first', an[i]).removeClass('disabled');
				}

				if ( oPaging.iPage === oPaging.iTotalPages-1 || oPaging.iTotalPages === 0 ) {
					$('li:last', an[i]).addClass('disabled');
				} else {
					$('li:last', an[i]).removeClass('disabled');
				}
			}
		}
	}
} );


/*
 * TableTools Bootstrap compatibility
 * Required TableTools 2.1+
 */
if ( $.fn.DataTable.TableTools ) {
	// Set the classes that TableTools uses to something suitable for Bootstrap
	$.extend( true, $.fn.DataTable.TableTools.classes, {
		"container": "DTTT btn-group",
		"buttons": {
			"normal": "btn",
			"disabled": "disabled"
		},
		"collection": {
			"container": "DTTT_dropdown dropdown-menu",
			"buttons": {
				"normal": "",
				"disabled": "disabled"
			}
		},
		"print": {
			"info": "DTTT_print_info modal"
		},
		"select": {
			"row": "active"
		}
	} );

	// Have the collection use a bootstrap compatible dropdown
	$.extend( true, $.fn.DataTable.TableTools.DEFAULTS.oTags, {
		"collection": {
			"container": "ul",
			"button": "li",
			"liner": "a"
		}
	} );
}
var App = function () {

    var isMainPage = false;
    var isMapPage = false;
    var isIE8 = false;


    var handleJQVMAP = function () {

        if (!sample_data) {
            return;
        }

        var showMap = function (name) {
            jQuery('.vmaps').hide();
            jQuery('#vmap_' + name).show();
        }

        var setMap = function (name) {
            var data = {
                map: 'world_en',
                backgroundColor: null,
                borderColor: '#333333',
                borderOpacity: 0.5,
                borderWidth: 1,
                color: '#c6c6c6',
                enableZoom: true,
                hoverColor: '#3daced',
                hoverOpacity: null,
                values: sample_data,
                normalizeFunction: 'linear',
                scaleColors: ['#e8e8e8', '#b0b0b0'],
                selectedColor: '#3daced',
                selectedRegion: null,
                showTooltip: true,
                onLabelShow: function (event, label, code) {

                },
                onRegionOver: function (event, code) {
                    if (code == 'ca') {
                        event.preventDefault();
                    }
                },
                onRegionClick: function (element, code, region) {
                    var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
                    alert(message);
                }
            };

            data.map = name + '_en';
            var map = jQuery('#vmap_' + name);
            map.width(map.parent().parent().width());
            map.show();
            map.vectorMap(data);
            map.hide();
        }

        setMap("world");
        setMap("usa");
        setMap("europe");
        setMap("russia");
        setMap("germany");

        showMap("world");

        jQuery('#regional_stat_world').click(function () {
            showMap("world");
        });

        jQuery('#regional_stat_usa').click(function () {
            showMap("usa");
        });

        jQuery('#regional_stat_europe').click(function () {
            showMap("europe");
        });
        jQuery('#regional_stat_russia').click(function () {
            showMap("russia");
        });
        jQuery('#regional_stat_germany').click(function () {
            showMap("germany");
        });

        $('#region_statistics_loading').hide();
        $('#region_statistics_content').show();
    }

    var handleAllJQVMAP = function () {

        if (!sample_data) {
            return;
        }

        var setMap = function (name) {
            var data = {
                map: 'world_en',
                backgroundColor: null,
                borderColor: '#333333',
                borderOpacity: 0.5,
                borderWidth: 1,
                color: '#c6c6c6',
                enableZoom: true,
                hoverColor: '#3daced',
                hoverOpacity: null,
                values: sample_data,
                normalizeFunction: 'linear',
                scaleColors: ['#e8e8e8', '#b0b0b0'],
                selectedColor: '#3daced',
                selectedRegion: null,
                showTooltip: true,
                onRegionOver: function (event, code) {
                    //sample to interact with map
                    if (code == 'ca') {
                        event.preventDefault();
                    }
                },
                onRegionClick: function (element, code, region) {
                    //sample to interact with map
                    var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
                    alert(message);
                }
            };
            data.map = name + '_en';
            var map = jQuery('#vmap_' + name);
            map.width(map.parent().width());
            map.vectorMap(data);
        }

        setMap("world");
        setMap("usa");
        setMap("europe");
        setMap("russia");
        setMap("germany");
    }



    var handleDashboardCalendar = function () {

        if (!jQuery().fullCalendar) {
            return;
        }

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        var h = {};

        if ($(window).width() <= 320) {
            h = {
                left: 'title, prev,next',
                center: '',
                right: 'today,month,agendaWeek,agendaDay'
            };
        } else {
            h = {
                left: 'title',
                center: '',
                right: 'prev,next,today,month,agendaWeek,agendaDay'
            };
        }

        $('#calendar').html("");
        $('#calendar').fullCalendar({
            header: h,
            editable: true,
            events: [{
                title: 'All Day Event',
                start: new Date(y, m, 1),
                className: 'label label-default',
            }, {
                title: 'Long Event',
                start: new Date(y, m, d - 5),
                end: new Date(y, m, d - 2),
                className: 'label label-success',
            }, {
                title: 'Repeating Event',
                start: new Date(y, m, d - 3, 16, 0),
                allDay: false,
                className: 'label label-default',
            }, {
                title: 'Repeating Event',
                start: new Date(y, m, d + 4, 16, 0),
                allDay: false,
                className: 'label label-important',
            }, {
                title: 'Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false,
                className: 'label label-info',
            }, {
                title: 'Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false,
                className: 'label label-warning',
            }, {
                title: 'Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false,
                className: 'label label-success',
            }, {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/',
                className: 'label label-warning',
            }]
        });

    }

    var handleCalendar = function () {

        if (!jQuery().fullCalendar) {
            return;
        }

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        var h = {};

        if ($(window).width() <= 320) {
            h = {
                left: 'title, prev,next',
                center: '',
                right: 'today,month,agendaWeek,agendaDay'
            };
        } else {
            h = {
                left: 'title',
                center: '',
                right: 'prev,next,today,month,agendaWeek,agendaDay'
            };
        }

        var initDrag = function (el) {
            // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            // it doesn't need to have a start or end
            var eventObject = {
                title: $.trim(el.text()) // use the element's text as the event title
            };
            // store the Event Object in the DOM element so we can get to it later
            el.data('eventObject', eventObject);
            // make the event draggable using jQuery UI
            el.draggable({
                zIndex: 999,
                revert: true, // will cause the event to go back to its
                revertDuration: 0 //  original position after the drag
            });
        }

        var addEvent = function (title, priority) {
            title = title.length == 0 ? "Untitled Event" : title;
            priority = priority.length == 0 ? "default" : priority;

            var html = $('<div data-class="label label-' + priority + '" class="external-event label label-' + priority + '">' + title + '</div>');
            jQuery('#event_box').append(html);
            initDrag(html);
        }

        $('#external-events div.external-event').each(function () {
            initDrag($(this))
        });

        $('#event_add').click(function () {
            var title = $('#event_title').val();
            var priority = $('#event_priority').val();
            addEvent(title, priority);
        });

        //modify chosen options
        var handleDropdown = function () {
            $('#event_priority_chzn .chzn-search').hide(); //hide search box
            $('#event_priority_chzn_o_1').html('<span class="label label-default">' + $('#event_priority_chzn_o_1').text() + '</span>');
            $('#event_priority_chzn_o_2').html('<span class="label label-success">' + $('#event_priority_chzn_o_2').text() + '</span>');
            $('#event_priority_chzn_o_3').html('<span class="label label-info">' + $('#event_priority_chzn_o_3').text() + '</span>');
            $('#event_priority_chzn_o_4').html('<span class="label label-warning">' + $('#event_priority_chzn_o_4').text() + '</span>');
            $('#event_priority_chzn_o_5').html('<span class="label label-important">' + $('#event_priority_chzn_o_5').text() + '</span>');
        }

        $('#event_priority_chzn').click(handleDropdown);

        //predefined events
        addEvent("My Event 1", "default");
        addEvent("My Event 2", "success");
        addEvent("My Event 3", "info");
        addEvent("My Event 4", "warning");
        addEvent("My Event 5", "important");
        addEvent("My Event 6", "success");
        addEvent("My Event 7", "info");
        addEvent("My Event 8", "warning");
        addEvent("My Event 9", "success");
        addEvent("My Event 10", "default");

        $('#calendar').fullCalendar({
            header: h,
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar !!!
            drop: function (date, allDay) { // this function is called when something is dropped

                // retrieve the dropped element's stored Event Object
                var originalEventObject = $(this).data('eventObject');
                // we need to copy it, so that multiple events don't have a reference to the same object
                var copiedEventObject = $.extend({}, originalEventObject);

                // assign it the date that was reported
                copiedEventObject.start = date;
                copiedEventObject.allDay = allDay;
                copiedEventObject.className = $(this).attr("data-class");

                // render the event on the calendar
                // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

                // is the "remove after drop" checkbox checked?
                if ($('#drop-remove').is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();
                }
            },
            events: [{
                title: 'All Day Event',
                start: new Date(y, m, 1),
                className: 'label label-default',
            }, {
                title: 'Long Event',
                start: new Date(y, m, d - 5),
                end: new Date(y, m, d - 2),
                className: 'label label-success',
            }, {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d - 3, 16, 0),
                allDay: false,
                className: 'label label-default',
            }, {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d + 4, 16, 0),
                allDay: false,
                className: 'label label-important',
            }, {
                title: 'Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false,
                className: 'label label-info',
            }, {
                title: 'Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false,
                className: 'label label-warning',
            }, {
                title: 'Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false,
                className: 'label label-success',
            }, {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/',
                className: 'label label-warning',
            }]
        });

    }

    var handleChat = function () {
        var cont = $('#chats');
        var list = $('.chats', cont);
        var form = $('.chat-form', cont);
        var input = $('input', form);
        var btn = $('.btn', form);

        var handleClick = function () {
            var text = input.val();
            if (text.length == 0) {
                return;
            }

            var time = new Date();
            var time_str = time.toString('MMM dd, yyyy HH:MM');
            var tpl = '';
            tpl += '<li class="out">';
            tpl += '<img class="avatar" alt="" src="img/avatar1.jpg"/>';
            tpl += '<div class="message">';
            tpl += '<span class="arrow"></span>';
            tpl += '<a href="#" class="name">Sumon Ahmed</a>&nbsp;';
            tpl += '<span class="datetime">at ' + time_str + '</span>';
            tpl += '<span class="body">';
            tpl += text;
            tpl += '</span>';
            tpl += '</div>';
            tpl += '</li>';

            var msg = list.append(tpl);
            input.val("");
            $('.scroller', cont).slimScroll({
                scrollTo: list.height()
            });
        }

        btn.click(handleClick);
        input.keypress(function (e) {
            if (e.which == 13) {
                handleClick();
                return false; //<---- Add this line
            }
        });
    }

    var handleClockfaceTimePickers = function () {

        if (!jQuery().clockface) {
            return;
        }

        $('#clockface_1').clockface();

        $('#clockface_2').clockface({
            format: 'HH:mm',
            trigger: 'manual'
        });

        $('#clockface_2_toggle-btn').click(function (e) {
            e.stopPropagation();
            $('#clockface_2').clockface('toggle');
        });

        $('#clockface_3').clockface({
            format: 'H:mm'
        }).clockface('show', '14:30');
    }

    var handlePortletSortable = function () {
        if (!jQuery().sortable) {
            return;
        }
        $(".sortable").sortable({
            connectWith: '.sortable',
            iframeFix: false,
            items: 'div.widget',
            opacity: 0.8,
            helper: 'original',
            revert: true,
            forceHelperSize: true,
            placeholder: 'sortable-box-placeholder round-all',
            forcePlaceholderSize: true,
            tolerance: 'pointer'
        });

    }

    var handleMainMenu = function () {
        jQuery('#sidebar .has-sub > a').click(function () {
            var last = jQuery('.has-sub.open', $('#sidebar'));
            last.removeClass("open");
            jQuery('.arrow', last).removeClass("open");
            jQuery('.sub', last).slideUp(200);
            var sub = jQuery(this).next();
            if (sub.is(":visible")) {
                jQuery('.arrow', jQuery(this)).removeClass("open");
                jQuery(this).parent().removeClass("open");
                sub.slideUp(200);
            } else {
                jQuery('.arrow', jQuery(this)).addClass("open");
                jQuery(this).parent().addClass("open");
                sub.slideDown(200);
            }
        });
    }

    var handleWidgetTools = function () {
        jQuery('.widget .tools .icon-remove').click(function () {
            jQuery(this).parents(".widget").parent().remove();
        });

        jQuery('.widget .tools .icon-refresh').click(function () {
            var el = jQuery(this).parents(".widget");
            App.blockUI(el);
            window.setTimeout(function () {
                App.unblockUI(el);
            }, 1000);
        });

        jQuery('.widget .tools .icon-chevron-down, .widget .tools .icon-chevron-up').click(function () {
            var el = jQuery(this).parents(".widget").children(".widget-body");
            if (jQuery(this).hasClass("icon-chevron-down")) {
                jQuery(this).removeClass("icon-chevron-down").addClass("icon-chevron-up");
                el.slideUp(200);
            } else {
                jQuery(this).removeClass("icon-chevron-up").addClass("icon-chevron-down");
                el.slideDown(200);
            }
        });
    }

    var handleDashboardCharts = function () {

        // used by plot functions
        var data = [];
        var totalPoints = 200;

        // random data generator for plot charts
        function getRandomData() {
            if (data.length > 0) data = data.slice(1);
            // do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50;
                var y = prev + Math.random() * 10 - 5;
                if (y < 0) y = 0;
                if (y > 100) y = 100;
                data.push(y);
            }
            // zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i) res.push([i, data[i]])
            return res;
        }

        if (!jQuery.plot) {
            return;
        }

        function randValue() {
            return (Math.floor(Math.random() * (1 + 40 - 20))) + 20;
        }

        var pageviews = [
            [1, randValue()],
            [2, randValue()],
            [3, 2 + randValue()],
            [4, 3 + randValue()],
            [5, 5 + randValue()],
            [6, 10 + randValue()],
            [7, 15 + randValue()],
            [8, 20 + randValue()],
            [9, 25 + randValue()],
            [10, 30 + randValue()],
            [11, 35 + randValue()],
            [12, 25 + randValue()],
            [13, 15 + randValue()],
            [14, 20 + randValue()],
            [15, 45 + randValue()],
            [16, 50 + randValue()],
            [17, 65 + randValue()],
            [18, 70 + randValue()],
            [19, 85 + randValue()],
            [20, 80 + randValue()],
            [21, 75 + randValue()],
            [22, 80 + randValue()],
            [23, 75 + randValue()],
            [24, 70 + randValue()],
            [25, 65 + randValue()],
            [26, 75 + randValue()],
            [27, 80 + randValue()],
            [28, 85 + randValue()],
            [29, 90 + randValue()],
            [30, 95 + randValue()]
        ];
        var visitors = [
            [1, randValue() - 5],
            [2, randValue() - 5],
            [3, randValue() - 5],
            [4, 6 + randValue()],
            [5, 5 + randValue()],
            [6, 20 + randValue()],
            [7, 25 + randValue()],
            [8, 36 + randValue()],
            [9, 26 + randValue()],
            [10, 38 + randValue()],
            [11, 39 + randValue()],
            [12, 50 + randValue()],
            [13, 51 + randValue()],
            [14, 12 + randValue()],
            [15, 13 + randValue()],
            [16, 14 + randValue()],
            [17, 15 + randValue()],
            [18, 15 + randValue()],
            [19, 16 + randValue()],
            [20, 17 + randValue()],
            [21, 18 + randValue()],
            [22, 19 + randValue()],
            [23, 20 + randValue()],
            [24, 21 + randValue()],
            [25, 14 + randValue()],
            [26, 24 + randValue()],
            [27, 25 + randValue()],
            [28, 26 + randValue()],
            [29, 27 + randValue()],
            [30, 31 + randValue()]
        ];

        $('#site_statistics_loading').hide();
        $('#site_statistics_content').show();

        var plot = $.plot($("#site_statistics"), [{
            data: pageviews,
            label: "Unique Visits"
        }, {
            data: visitors,
            label: "Page Views"
        }], {
            series: {
                lines: {
                    show: true,
                    lineWidth: 2,
                    fill: true,
                    fillColor: {
                        colors: [{
                            opacity: 0.05
                        }, {
                            opacity: 0.01
                        }]
                    }
                },
                points: {
                    show: true
                },
                shadowSize: 2
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#eee",
                borderWidth: 0
            },
            colors: ["#A5D16C", "#FCB322", "#32C2CD"],
            xaxis: {
                ticks: 11,
                tickDecimals: 0
            },
            yaxis: {
                ticks: 11,
                tickDecimals: 0
            }
        });


        function showTooltip(x, y, contents) {
            $('<div id="tooltip">' + contents + '</div>').css({
                position: 'absolute',
                display: 'none',
                top: y + 5,
                left: x + 15,
                border: '1px solid #333',
                padding: '4px',
                color: '#fff',
                'border-radius': '3px',
                'background-color': '#333',
                opacity: 0.80
            }).appendTo("body").fadeIn(200);
        }

        var previousPoint = null;
        $("#site_statistics").bind("plothover", function (event, pos, item) {
            $("#x").text(pos.x.toFixed(2));
            $("#y").text(pos.y.toFixed(2));

            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;

                    $("#tooltip").remove();
                    var x = item.datapoint[0].toFixed(2),
                        y = item.datapoint[1].toFixed(2);

                    showTooltip(item.pageX, item.pageY, item.series.label + " of " + x + " = " + y);
                }
            } else {
                $("#tooltip").remove();
                previousPoint = null;
            }
        });

        //server load
        var options = {
            series: {
                shadowSize: 1
            },
            lines: {
                show: true,
                lineWidth: 0.5,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 0.1
                    }, {
                        opacity: 1
                    }]
                }
            },
            yaxis: {
                min: 0,
                max: 100,
                tickFormatter: function (v) {
                    return v + "%";
                }
            },
            xaxis: {
                show: false
            },
            colors: ["#A5D16C"],
            grid: {
                tickColor: "#eaeaea",
                borderWidth: 0
            }
        };

        $('#load_statistics_loading').hide();
        $('#load_statistics_content').show();

        var updateInterval = 30;
        var plot = $.plot($("#load_statistics"), [getRandomData()], options);

        function update() {
            plot.setData([getRandomData()]);
            plot.draw();
            setTimeout(update, updateInterval);
        }
        update();
    }

    var handleCharts = function () {

        // used by plot functions
        var data = [];
        var totalPoints = 250;

        // random data generator for plot charts
        function getRandomData() {
            if (data.length > 0) data = data.slice(1);
            // do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50;
                var y = prev + Math.random() * 10 - 5;
                if (y < 0) y = 0;
                if (y > 100) y = 100;
                data.push(y);
            }
            // zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i) res.push([i, data[i]])
            return res;
        }


        if (!jQuery.plot) {
            return;
        }

        if ($("#chart_1").size() == 0) {
            return;
        }

        //Basic Chart
        function chart1() {
            var d1 = [];
            for (var i = 0; i < Math.PI * 2; i += 0.25)
            d1.push([i, Math.sin(i)]);

            var d2 = [];
            for (var i = 0; i < Math.PI * 2; i += 0.25)
            d2.push([i, Math.cos(i)]);

            var d3 = [];
            for (var i = 0; i < Math.PI * 2; i += 0.1)
            d3.push([i, Math.tan(i)]);

            $.plot($("#chart_1"), [{
                label: "sin(x)",
                data: d1
            }, {
                label: "cos(x)",
                data: d2
            }, {
                label: "tan(x)",
                data: d3
            }], {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    ticks: [0, [Math.PI / 2, "\u03c0/2"],
                        [Math.PI, "\u03c0"],
                        [Math.PI * 3 / 2, "3\u03c0/2"],
                        [Math.PI * 2, "2\u03c0"]
                    ]
                },
                yaxis: {
                    ticks: 10,
                    min: -2,
                    max: 2
                },
                grid: {
                    backgroundColor: {
                        colors: ["#fff", "#eee"]
                    }
                }
            });

        }

        //Interactive Chart
        function chart2() {
            function randValue() {
                return (Math.floor(Math.random() * (1 + 40 - 20))) + 20;
            }
            var pageviews = [
                [1, randValue()],
                [2, randValue()],
                [3, 2 + randValue()],
                [4, 3 + randValue()],
                [5, 5 + randValue()],
                [6, 10 + randValue()],
                [7, 15 + randValue()],
                [8, 20 + randValue()],
                [9, 25 + randValue()],
                [10, 30 + randValue()],
                [11, 35 + randValue()],
                [12, 25 + randValue()],
                [13, 15 + randValue()],
                [14, 20 + randValue()],
                [15, 45 + randValue()],
                [16, 50 + randValue()],
                [17, 65 + randValue()],
                [18, 70 + randValue()],
                [19, 85 + randValue()],
                [20, 80 + randValue()],
                [21, 75 + randValue()],
                [22, 80 + randValue()],
                [23, 75 + randValue()],
                [24, 70 + randValue()],
                [25, 65 + randValue()],
                [26, 75 + randValue()],
                [27, 80 + randValue()],
                [28, 85 + randValue()],
                [29, 90 + randValue()],
                [30, 95 + randValue()]
            ];
            var visitors = [
                [1, randValue() - 5],
                [2, randValue() - 5],
                [3, randValue() - 5],
                [4, 6 + randValue()],
                [5, 5 + randValue()],
                [6, 20 + randValue()],
                [7, 25 + randValue()],
                [8, 36 + randValue()],
                [9, 26 + randValue()],
                [10, 38 + randValue()],
                [11, 39 + randValue()],
                [12, 50 + randValue()],
                [13, 51 + randValue()],
                [14, 12 + randValue()],
                [15, 13 + randValue()],
                [16, 14 + randValue()],
                [17, 15 + randValue()],
                [18, 15 + randValue()],
                [19, 16 + randValue()],
                [20, 17 + randValue()],
                [21, 18 + randValue()],
                [22, 19 + randValue()],
                [23, 20 + randValue()],
                [24, 21 + randValue()],
                [25, 14 + randValue()],
                [26, 24 + randValue()],
                [27, 25 + randValue()],
                [28, 26 + randValue()],
                [29, 27 + randValue()],
                [30, 31 + randValue()]
            ];

            var plot = $.plot($("#chart_2"), [{
                data: pageviews,
                label: "Unique Visits"
            }, {
                data: visitors,
                label: "Page Views"
            }], {
                series: {
                    lines: {
                        show: true,
                        lineWidth: 2,
                        fill: true,
                        fillColor: {
                            colors: [{
                                opacity: 0.05
                            }, {
                                opacity: 0.01
                            }]
                        }
                    },
                    points: {
                        show: true
                    },
                    shadowSize: 2
                },
                grid: {
                    hoverable: true,
                    clickable: true,
                    tickColor: "#eee",
                    borderWidth: 0
                },
                colors: ["#FCB322", "#A5D16C", "#52e136"],
                xaxis: {
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    ticks: 11,
                    tickDecimals: 0
                }
            });


            function showTooltip(x, y, contents) {
                $('<div id="tooltip">' + contents + '</div>').css({
                    position: 'absolute',
                    display: 'none',
                    top: y + 5,
                    left: x + 15,
                    border: '1px solid #333',
                    padding: '4px',
                    color: '#fff',
                    'border-radius': '3px',
                    'background-color': '#333',
                    opacity: 0.80
                }).appendTo("body").fadeIn(200);
            }

            var previousPoint = null;
            $("#chart_2").bind("plothover", function (event, pos, item) {
                $("#x").text(pos.x.toFixed(2));
                $("#y").text(pos.y.toFixed(2));

                if (item) {
                    if (previousPoint != item.dataIndex) {
                        previousPoint = item.dataIndex;

                        $("#tooltip").remove();
                        var x = item.datapoint[0].toFixed(2),
                            y = item.datapoint[1].toFixed(2);

                        showTooltip(item.pageX, item.pageY, item.series.label + " of " + x + " = " + y);
                    }
                } else {
                    $("#tooltip").remove();
                    previousPoint = null;
                }
            });
        }

        //Tracking Curves
        function chart3() {
            //tracking curves:

            var sin = [],
                cos = [];
            for (var i = 0; i < 14; i += 0.1) {
                sin.push([i, Math.sin(i)]);
                cos.push([i, Math.cos(i)]);
            }

            plot = $.plot($("#chart_3"), [{
                data: sin,
                label: "sin(x) = -0.00"
            }, {
                data: cos,
                label: "cos(x) = -0.00"
            }], {
                series: {
                    lines: {
                        show: true
                    }
                },
                crosshair: {
                    mode: "x"
                },
                grid: {
                    hoverable: true,
                    autoHighlight: false
                },
                colors: ["#FCB322", "#A5D16C", "#52e136"],
                yaxis: {
                    min: -1.2,
                    max: 1.2
                }
            });

            var legends = $("#chart_3 .legendLabel");
            legends.each(function () {
                // fix the widths so they don't jump around
                $(this).css('width', $(this).width());
            });

            var updateLegendTimeout = null;
            var latestPosition = null;

            function updateLegend() {
                updateLegendTimeout = null;

                var pos = latestPosition;

                var axes = plot.getAxes();
                if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max || pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) return;

                var i, j, dataset = plot.getData();
                for (i = 0; i < dataset.length; ++i) {
                    var series = dataset[i];

                    // find the nearest points, x-wise
                    for (j = 0; j < series.data.length; ++j)
                    if (series.data[j][0] > pos.x) break;

                    // now interpolate
                    var y, p1 = series.data[j - 1],
                        p2 = series.data[j];
                    if (p1 == null) y = p2[1];
                    else if (p2 == null) y = p1[1];
                    else y = p1[1] + (p2[1] - p1[1]) * (pos.x - p1[0]) / (p2[0] - p1[0]);

                    legends.eq(i).text(series.label.replace(/=.*/, "= " + y.toFixed(2)));
                }
            }

            $("#chart_3").bind("plothover", function (event, pos, item) {
                latestPosition = pos;
                if (!updateLegendTimeout) updateLegendTimeout = setTimeout(updateLegend, 50);
            });
        }

        //Dynamic Chart
        function chart4() {
            //server load
            var options = {
                series: {
                    shadowSize: 1
                },
                lines: {
                    show: true,
                    lineWidth: 0.5,
                    fill: true,
                    fillColor: {
                        colors: [{
                            opacity: 0.1
                        }, {
                            opacity: 1
                        }]
                    }
                },
                yaxis: {
                    min: 0,
                    max: 100,
                    tickFormatter: function (v) {
                        return v + "%";
                    }
                },
                xaxis: {
                    show: false
                },
                colors: ["#6ef146"],
                grid: {
                    tickColor: "#a8a3a3",
                    borderWidth: 0
                }
            };

            var updateInterval = 30;
            var plot = $.plot($("#chart_4"), [getRandomData()], options);

            function update() {
                plot.setData([getRandomData()]);
                plot.draw();
                setTimeout(update, updateInterval);
            }
            update();
        }

        //bars with controls
        function chart5() {
            var d1 = [];
            for (var i = 0; i <= 10; i += 1)
            d1.push([i, parseInt(Math.random() * 30)]);

            var d2 = [];
            for (var i = 0; i <= 10; i += 1)
            d2.push([i, parseInt(Math.random() * 30)]);

            var d3 = [];
            for (var i = 0; i <= 10; i += 1)
            d3.push([i, parseInt(Math.random() * 30)]);

            var stack = 0,
                bars = true,
                lines = false,
                steps = false;

            function plotWithOptions() {
                $.plot($("#chart_5"), [d1, d2, d3], {
                    series: {
                        stack: stack,
                        lines: {
                            show: lines,
                            fill: true,
                            steps: steps
                        },
                        bars: {
                            show: bars,
                            barWidth: 0.6
                        }
                    }
                });
            }

            $(".stackControls input").click(function (e) {
                e.preventDefault();
                stack = $(this).val() == "With stacking" ? true : null;
                plotWithOptions();
            });
            $(".graphControls input").click(function (e) {
                e.preventDefault();
                bars = $(this).val().indexOf("Bars") != -1;
                lines = $(this).val().indexOf("Lines") != -1;
                steps = $(this).val().indexOf("steps") != -1;
                plotWithOptions();
            });

            plotWithOptions();
        }

        //graph
        function graphs() {

            var graphData = [];
            var series = Math.floor(Math.random() * 10) + 1;
            for (var i = 0; i < series; i++) {
                graphData[i] = {
                    label: "Series" + (i + 1),
                    data: Math.floor((Math.random() - 1) * 100) + 1
                }
            }

            $.plot($("#graph_1"), graphData, {
                series: {
                    pie: {
                        show: true,
                        radius: 1,
                        label: {
                            show: true,
                            radius: 1,
                            formatter: function (label, series) {
                                return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
                            },
                            background: {
                                opacity: 0.8
                            }
                        }
                    }
                },
                legend: {
                    show: false
                }
            });


            $.plot($("#graph_2"), graphData, {
                series: {
                    pie: {
                        show: true,
                        radius: 1,
                        label: {
                            show: true,
                            radius: 3 / 4,
                            formatter: function (label, series) {
                                return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
                            },
                            background: {
                                opacity: 0.5
                            }
                        }
                    }
                },
                legend: {
                    show: false
                }
            });

            $.plot($("#graph_3"), graphData, {
                series: {
                    pie: {
                        show: true
                    }
                },
                grid: {
                    hoverable: true,
                    clickable: true
                }
            });
            $("#graph_3").bind("plothover", pieHover);
            $("#graph_3").bind("plotclick", pieClick);

            function pieHover(event, pos, obj) {
                if (!obj) return;
                percent = parseFloat(obj.series.percent).toFixed(2);
                $("#hover").html('<span style="font-weight: bold; color: ' + obj.series.color + '">' + obj.series.label + ' (' + percent + '%)</span>');
            }

            function pieClick(event, pos, obj) {
                if (!obj) return;
                percent = parseFloat(obj.series.percent).toFixed(2);
                alert('' + obj.series.label + ': ' + percent + '%');
            }

            $.plot($("#graph_4"), graphData, {
                series: {
                    pie: {
                        innerRadius: 0.5,
                        show: true
                    }
                }
            });
        }

        chart1();
        chart2();
        chart3();
        chart4();
        chart5();
        graphs();
    }

    var handleFancyBox = function () {
        if (!jQuery().fancybox) {
            return;
        }

        if (jQuery(".fancybox-button").size() > 0) {
            jQuery(".fancybox-button").fancybox({
                groupAttr: 'data-rel',
                prevEffect: 'none',
                nextEffect: 'none',
                closeBtn: true,
                helpers: {
                    title: {
                        type: 'inside'
                    }
                }
            });
        }
    }

    var handleLoginForm = function () {
        jQuery('#forget-password').click(function () {
            jQuery('#loginform').hide();
            jQuery('#forgotform').show(200);
        });

        jQuery('#forget-btn').click(function () {

            jQuery('#loginform').slideDown(200);
            jQuery('#forgotform').slideUp(200);
        });
    }

    var handleFixInputPlaceholderForIE = function () {
        //fix html5 placeholder attribute for ie7 & ie8
        if (jQuery.browser.msie && jQuery.browser.version.substr(0, 1) <= 9) { // ie7&ie8
            jQuery('input[placeholder], textarea[placeholder]').each(function () {

                var input = jQuery(this);

                jQuery(input).val(input.attr('placeholder'));

                jQuery(input).focus(function () {
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });

                jQuery(input).blur(function () {
                    if (input.val() == '' || input.val() == input.attr('placeholder')) {
                        input.val(input.attr('placeholder'));
                    }
                });
            });
        }
    }

    var handleStyler = function () {
        var scrollHeight = '25px';

        jQuery('#theme-change').click(function () {
            if ($(this).attr("opened") && !$(this).attr("opening") && !$(this).attr("closing")) {
                $(this).removeAttr("opened");
                $(this).attr("closing", "1");

                $("#theme-change").css("overflow", "hidden").animate({
                    width: '20px',
                    height: '22px',
                    'padding-top': '3px'
                }, {
                    complete: function () {
                        $(this).removeAttr("closing");
                        $("#theme-change .settings").hide();
                    }
                });
            } else if (!$(this).attr("closing") && !$(this).attr("opening")) {
                $(this).attr("opening", "1");
                $("#theme-change").css("overflow", "visible").animate({
                    width: '190px',
                    height: scrollHeight,
                    'padding-top': '3px'
                }, {
                    complete: function () {
                        $(this).removeAttr("opening");
                        $(this).attr("opened", 1);
                    }
                });
                $("#theme-change .settings").show();
            }
        });

        jQuery('#theme-change .colors span').click(function () {
            var color = $(this).attr("data-style");
            setColor(color);
        });

        jQuery('#theme-change .layout input').change(function () {
            setLayout();
        });

        var setColor = function (color) {
            $('#style_color').attr("href", "css/style_" + color + ".css");
        }

    }

    var handlePulsate = function () {
        if (!jQuery().pulsate) {
            return;
        }

        if (isIE8 == true) {
            return; // pulsate plugin does not support IE8 and below
        }

        if (jQuery().pulsate) {
            jQuery('#pulsate-regular').pulsate({
                color: "#bf1c56"
            });

            jQuery('#pulsate-once').click(function () {
                $(this).pulsate({
                    color: "#399bc3",
                    repeat: false
                });
            });

            jQuery('#pulsate-hover').pulsate({
                color: "#5ebf5e",
                repeat: false,
                onHover: true
            });

            jQuery('#pulsate-crazy').click(function () {
                $(this).pulsate({
                    color: "#fdbe41",
                    reach: 50,
                    repeat: 10,
                    speed: 100,
                    glow: true
                });
            });
        }
    }

    var handlePeity = function () {
        if (!jQuery().peity) {
            return;
        }

        if (jQuery.browser.msie && jQuery.browser.version.substr(0, 2) <= 8) { // ie7&ie8
            return;
        }

        $(".stat.bad .line-chart").peity("line", {
            height: 20,
            width: 50,
            colour: "#d12610",
            strokeColour: "#666"
        }).show();

        $(".stat.bad .bar-chart").peity("bar", {
            height: 20,
            width: 50,
            colour: "#d12610",
            strokeColour: "#666"
        }).show();

        $(".stat.ok .line-chart").peity("line", {
            height: 20,
            width: 50,
            colour: "#37b7f3",
            strokeColour: "#757575"
        }).show();

        $(".stat.ok .bar-chart").peity("bar", {
            height: 20,
            width: 50,
            colour: "#37b7f3"
        }).show();

        $(".stat.good .line-chart").peity("line", {
            height: 20,
            width: 50,
            colour: "#52e136"
        }).show();

        $(".stat.good .bar-chart").peity("bar", {
            height: 20,
            width: 50,
            colour: "#52e136"
        }).show();
        //

        $(".stat.bad.huge .line-chart").peity("line", {
            height: 20,
            width: 40,
            colour: "#d12610",
            strokeColour: "#666"
        }).show();

        $(".stat.bad.huge .bar-chart").peity("bar", {
            height: 20,
            width: 40,
            colour: "#d12610",
            strokeColour: "#666"
        }).show();

        $(".stat.ok.huge .line-chart").peity("line", {
            height: 20,
            width: 40,
            colour: "#37b7f3",
            strokeColour: "#757575"
        }).show();

        $(".stat.ok.huge .bar-chart").peity("bar", {
            height: 20,
            width: 40,
            colour: "#37b7f3"
        }).show();

        $(".stat.good.huge .line-chart").peity("line", {
            height: 20,
            width: 40,
            colour: "#52e136"
        }).show();

        $(".stat.good.huge .bar-chart").peity("bar", {
            height: 20,
            width: 40,
            colour: "#52e136"
        }).show();
    }

    var handleDeviceWidth = function () {
        function fixWidth(e) {
            var winHeight = $(window).height();
            var winWidth = $(window).width();
            //alert(winWidth);
            //for tablet and small desktops
            if (winWidth < 1125 && winWidth > 767) {
                $(".responsive").each(function () {
                    var forTablet = $(this).attr('data-tablet');
                    var forDesktop = $(this).attr('data-desktop');
                    if (forTablet) {
                        $(this).removeClass(forDesktop);
                        $(this).addClass(forTablet);
                    }

                });
            } else {
                $(".responsive").each(function () {
                    var forTablet = $(this).attr('data-tablet');
                    var forDesktop = $(this).attr('data-desktop');
                    if (forTablet) {
                        $(this).removeClass(forTablet);
                        $(this).addClass(forDesktop);
                    }
                });
            }
        }

        fixWidth();

        running = false;
        jQuery(window).resize(function () {
            if (running == false) {
                running = true;
                setTimeout(function () {
                    // fix layout width
                    fixWidth();
                    // fix calendar width by just reinitializing
                    handleDashboardCalendar();
                    if (isMainPage) {
                        handleDashboardCalendar(); // handles full calendar for main page
                    } else {
                        handleCalendar(); // handles full calendars
                    }
                    // fix vector maps width
                    if (isMainPage) {
                        jQuery('.vmaps').each(function () {
                            var map = jQuery(this);
                            map.width(map.parent().parent().width());
                        });
                    }
                    if (isMapPage) {
                        jQuery('.vmaps').each(function () {
                            var map = jQuery(this);
                            map.width(map.parent().width());
                        });
                    }
                    // fix event form chosen dropdowns
                    $('#event_priority_chzn').width($('#event_title').width() + 15);
                    $('#event_priority_chzn .chzn-drop').width($('#event_title').width() + 13);

                    $(".chzn-select").val('').trigger("liszt:updated");
                    //finish
                    running = false;
                }, 200); // wait for 200ms on resize event           
            }
        });
    }

    var handleGritterNotifications = function () {
        if (!jQuery.gritter) {
            return;
        }
        $('#gritter-sticky').click(function () {
            var unique_id = $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'This is a sticky notice!',
                // (string | mandatory) the text inside the notification
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
                // (string | optional) the image to display on the left
                image: 'img/avatar-mini.png',
                // (bool | optional) if you want it to fade out on its own or just sit there
                sticky: true,
                // (int | optional) the time you want it to be alive for before fading out
                time: '',
                // (string | optional) the class name you want to apply to that specific message
                class_name: 'my-sticky-class'
            });
            return false;
        });

        $('#gritter-regular').click(function () {

            $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'This is a regular notice!',
                // (string | mandatory) the text inside the notification
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
                // (string | optional) the image to display on the left
                image: 'img/avatar-mini.png',
                // (bool | optional) if you want it to fade out on its own or just sit there
                sticky: false,
                // (int | optional) the time you want it to be alive for before fading out
                time: ''
            });

            return false;

        });

        $('#gritter-max').click(function () {

            $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'This is a notice with a max of 3 on screen at one time!',
                // (string | mandatory) the text inside the notification
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
                // (string | optional) the image to display on the left
                image: 'img/avatar-mini.png',
                // (bool | optional) if you want it to fade out on its own or just sit there
                sticky: false,
                // (function) before the gritter notice is opened
                before_open: function () {
                    if ($('.gritter-item-wrapper').length == 3) {
                        // Returning false prevents a new gritter from opening
                        return false;
                    }
                }
            });
            return false;
        });

        $('#gritter-without-image').click(function () {
            $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'This is a notice without an image!',
                // (string | mandatory) the text inside the notification
                text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.'
            });

            return false;
        });

        $('#gritter-light').click(function () {

            $.gritter.add({
                // (string | mandatory) the heading of the notification
                title: 'This is a light notification',
                // (string | mandatory) the text inside the notification
                text: 'Just add a "gritter-light" class_name to your $.gritter.add or globally to $.gritter.options.class_name',
                class_name: 'gritter-light'
            });

            return false;
        });

        $("#gritter-remove-all").click(function () {

            $.gritter.removeAll();
            return false;

        });
    }

    var handleTooltip = function () {
        jQuery('.tooltips').tooltip();
    }

    var handlePopover = function () {
        jQuery('.popovers').popover();
    }

    var handleChoosenSelect = function () {
        if (!jQuery().chosen) {
            return;
        }
        $(".chosen").chosen();
        $(".chosen-with-diselect").chosen({
            allow_single_deselect: true
        });
    }

    var handleUniform = function () {
        if (!jQuery().uniform) {
            return;
        }
        if (test = $("input[type=checkbox]:not(.toggle), input[type=radio]:not(.toggle)")) {
            test.uniform();
        }
    }

    var handleWysihtml5 = function () {
        if (!jQuery().wysihtml5) {
            return;
        }

        if ($('.wysihtml5').size() > 0) {
            $('.wysihtml5').wysihtml5();
        }
    }

    var handleToggleButtons = function () {
        if (!jQuery().toggleButtons) {
            return;
        }
        $('.basic-toggle-button').toggleButtons();
        $('.text-toggle-button').toggleButtons({
            width: 200,
            label: {
                enabled: "Lorem Ipsum",
                disabled: "Dolor Sit"
            }
        });
        $('.danger-toggle-button').toggleButtons({
            style: {
                // Accepted values ["primary", "danger", "info", "success", "warning"] or nothing
                enabled: "danger",
                disabled: "info"
            }
        });
        $('.info-toggle-button').toggleButtons({
            style: {
                enabled: "info",
                disabled: ""
            }
        });
        $('.success-toggle-button').toggleButtons({
            style: {
                enabled: "success",
                disabled: "danger"
            }
        });
        $('.warning-toggle-button').toggleButtons({
            style: {
                enabled: "warning",
                disabled: "success"
            }
        });

        $('.height-toggle-button').toggleButtons({
            height: 100,
            font: {
                'line-height': '100px',
                'font-size': '20px',
                'font-style': 'italic'
            }
        });

        $('.not-animated-toggle-button').toggleButtons({
            animated: false
        });

        $('.transition-value-toggle-button').toggleButtons({
            transitionspeed: 1 // default value: 0.05
        });

    }

    var handleTables = function () {
        if (!jQuery().dataTable) {
            return;
        }

        // begin first table
        $('#sample_1').dataTable({
            "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
            "sPaginationType": "bootstrap",
            "oLanguage": {
                "sLengthMenu": "_MENU_ records per page",
                "oPaginate": {
                    "sPrevious": "Prev",
                    "sNext": "Next"
                }
            },
            "aoColumnDefs": [{
                'bSortable': false,
                'aTargets': [0]
            }]
        });

        jQuery('#sample_1 .group-checkable').change(function () {
            var set = jQuery(this).attr("data-set");
            var checked = jQuery(this).is(":checked");
            jQuery(set).each(function () {
                if (checked) {
                    $(this).attr("checked", true);
                } else {
                    $(this).attr("checked", false);
                }
            });
            jQuery.uniform.update(set);
        });

        jQuery('#sample_1_wrapper .dataTables_filter input').addClass("input-medium"); // modify table search input
        jQuery('#sample_1_wrapper .dataTables_length select').addClass("input-mini"); // modify table per page dropdown

        // begin second table
        $('#sample_2').dataTable({
            "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
            "sPaginationType": "bootstrap",
            "oLanguage": {
                "sLengthMenu": "_MENU_ per page",
                "oPaginate": {
                    "sPrevious": "Prev",
                    "sNext": "Next"
                }
            },
            "aoColumnDefs": [{
                'bSortable': false,
                'aTargets': [0]
            }]
        });

        jQuery('#sample_2 .group-checkable').change(function () {
            var set = jQuery(this).attr("data-set");
            var checked = jQuery(this).is(":checked");
            jQuery(set).each(function () {
                if (checked) {
                    $(this).attr("checked", true);
                } else {
                    $(this).attr("checked", false);
                }
            });
            jQuery.uniform.update(set);
        });

        jQuery('#sample_2_wrapper .dataTables_filter input').addClass("input-small"); // modify table search input
        jQuery('#sample_2_wrapper .dataTables_length select').addClass("input-mini"); // modify table per page dropdown

        // begin: third table
        $('#sample_3').dataTable({
            "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
            "sPaginationType": "bootstrap",
            "oLanguage": {
                "sLengthMenu": "_MENU_ per page",
                "oPaginate": {
                    "sPrevious": "Prev",
                    "sNext": "Next"
                }
            },
            "aoColumnDefs": [{
                'bSortable': false,
                'aTargets': [0]
            }]
        });

        jQuery('#sample_3 .group-checkable').change(function () {
            var set = jQuery(this).attr("data-set");
            var checked = jQuery(this).is(":checked");
            jQuery(set).each(function () {
                if (checked) {
                    $(this).attr("checked", true);
                } else {
                    $(this).attr("checked", false);
                }
            });
            jQuery.uniform.update(set);
        });

        jQuery('#sample_3_wrapper .dataTables_filter input').addClass("input-small"); // modify table search input
        jQuery('#sample_3_wrapper .dataTables_length select').addClass("input-mini"); // modify table per page dropdown
    }

    var handleDateTimePickers = function () {

        if (!jQuery().daterangepicker) {
            return;
        }

        $('.date-range').daterangepicker();

        $('#dashboard-report-range').daterangepicker({
            ranges: {
                'Today': ['today', 'today'],
                'Yesterday': ['yesterday', 'yesterday'],
                'Last 7 Days': [Date.today().add({
                    days: -6
                }), 'today'],
                'Last 30 Days': [Date.today().add({
                    days: -29
                }), 'today'],
                'This Month': [Date.today().moveToFirstDayOfMonth(), Date.today().moveToLastDayOfMonth()],
                'Last Month': [Date.today().moveToFirstDayOfMonth().add({
                    months: -1
                }), Date.today().moveToFirstDayOfMonth().add({
                    days: -1
                })]
            },
            opens: 'left',
            format: 'MM/dd/yyyy',
            separator: ' to ',
            startDate: Date.today().add({
                days: -29
            }),
            endDate: Date.today(),
            minDate: '01/01/2012',
            maxDate: '12/31/2014',
            locale: {
                applyLabel: 'Submit',
                fromLabel: 'From',
                toLabel: 'To',
                customRangeLabel: 'Custom Range',
                daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                firstDay: 1
            },
            showWeekNumbers: true,
            buttonClasses: ['btn-danger']
        },

        function (start, end) {
            App.blockUI(jQuery("#page"));
            setTimeout(function () {
                App.unblockUI(jQuery("#page"));
                $.gritter.add({
                    title: 'Dashboard',
                    text: 'Dashboard date range updated.'
                });
                App.scrollTo();
            }, 1000);
            $('#dashboard-report-range span').html(start.toString('MMMM d, yyyy') + ' - ' + end.toString('MMMM d, yyyy'));

        });

        $('#dashboard-report-range span').html(Date.today().add({
            days: -29
        }).toString('MMMM d, yyyy') + ' - ' + Date.today().toString('MMMM d, yyyy'));

        $('#form-date-range').daterangepicker({
            ranges: {
                'Today': ['today', 'today'],
                'Yesterday': ['yesterday', 'yesterday'],
                'Last 7 Days': [Date.today().add({
                    days: -6
                }), 'today'],
                'Last 30 Days': [Date.today().add({
                    days: -29
                }), 'today'],
                'This Month': [Date.today().moveToFirstDayOfMonth(), Date.today().moveToLastDayOfMonth()],
                'Last Month': [Date.today().moveToFirstDayOfMonth().add({
                    months: -1
                }), Date.today().moveToFirstDayOfMonth().add({
                    days: -1
                })]
            },
            opens: 'right',
            format: 'MM/dd/yyyy',
            separator: ' to ',
            startDate: Date.today().add({
                days: -29
            }),
            endDate: Date.today(),
            minDate: '01/01/2012',
            maxDate: '12/31/2014',
            locale: {
                applyLabel: 'Submit',
                fromLabel: 'From',
                toLabel: 'To',
                customRangeLabel: 'Custom Range',
                daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                firstDay: 1
            },
            showWeekNumbers: true,
            buttonClasses: ['btn-danger']
        },

        function (start, end) {
            $('#form-date-range span').html(start.toString('MMMM d, yyyy') + ' - ' + end.toString('MMMM d, yyyy'));
        });

        $('#form-date-range span').html(Date.today().add({
            days: -29
        }).toString('MMMM d, yyyy') + ' - ' + Date.today().toString('MMMM d, yyyy'));


        if (!jQuery().datepicker || !jQuery().timepicker) {
            return;
        }
        $('.date-picker').datepicker();

        $('.timepicker-default').timepicker();

        $('.timepicker-24').timepicker({
            minuteStep: 1,
            showSeconds: true,
            showMeridian: false
        });

    }

    var handleColorPicker = function () {
        if (!jQuery().colorpicker) {
            return;
        }
        $('.colorpicker-default').colorpicker({
            format: 'hex'
        });
        $('.colorpicker-rgba').colorpicker();
    }

    var handleAccordions = function () {
        $(".accordion").collapse().height('auto');
    }

    var handleScrollers = function () {
        if (!jQuery().slimScroll) {
            return;
        }

        $('.scroller').each(function () {
            $(this).slimScroll({
                //start: $('.blah:eq(1)'),
                height: $(this).attr("data-height"),
                alwaysVisible: ($(this).attr("data-always-visible") == "1" ? true : false),
                railVisible: ($(this).attr("data-rail-visible") == "1" ? true : false),
                disableFadeOut: true
            });
        });
    }

    var handleFormWizards = function () {
        if (!jQuery().bootstrapWizard) {
            return;
        }

        $('#form_wizard_1').bootstrapWizard({
            'nextSelector': '.button-next',
            'previousSelector': '.button-previous',
            onTabClick: function (tab, navigation, index) {
                alert('on tab click disabled');
                return false;
            },
            onNext: function (tab, navigation, index) {
                var total = navigation.find('li').length;
                var current = index + 1;
                // set wizard title
                $('.step-title', $('#form_wizard_1')).text('Step ' + (index + 1) + ' of ' + total);
                // set done steps
                jQuery('li', $('#form_wizard_1')).removeClass("done");
                var li_list = navigation.find('li');
                for (var i = 0; i < index; i++) {
                    jQuery(li_list[i]).addClass("done");
                }

                if (current == 1) {
                    $('#form_wizard_1').find('.button-previous').hide();
                } else {
                    $('#form_wizard_1').find('.button-previous').show();
                }

                if (current >= total) {
                    $('#form_wizard_1').find('.button-next').hide();
                    $('#form_wizard_1').find('.button-submit').show();
                } else {
                    $('#form_wizard_1').find('.button-next').show();
                    $('#form_wizard_1').find('.button-submit').hide();
                }
                App.scrollTo($('.page-title'));
            },
            onPrevious: function (tab, navigation, index) {
                var total = navigation.find('li').length;
                var current = index + 1;
                // set wizard title
                $('.step-title', $('#form_wizard_1')).text('Step ' + (index + 1) + ' of ' + total);
                // set done steps
                jQuery('li', $('#form_wizard_1')).removeClass("done");
                var li_list = navigation.find('li');
                for (var i = 0; i < index; i++) {
                    jQuery(li_list[i]).addClass("done");
                }

                if (current == 1) {
                    $('#form_wizard_1').find('.button-previous').hide();
                } else {
                    $('#form_wizard_1').find('.button-previous').show();
                }

                if (current >= total) {
                    $('#form_wizard_1').find('.button-next').hide();
                    $('#form_wizard_1').find('.button-submit').show();
                } else {
                    $('#form_wizard_1').find('.button-next').show();
                    $('#form_wizard_1').find('.button-submit').hide();
                }

                App.scrollTo($('.page-title'));
            },
            onTabShow: function (tab, navigation, index) {
                var total = navigation.find('li').length;
                var current = index + 1;
                var $percent = (current / total) * 100;
                $('#form_wizard_1').find('.bar').css({
                    width: $percent + '%'
                });
            }
        });

        $('#form_wizard_1').find('.button-previous').hide();
        $('#form_wizard_1 .button-submit').click(function () {
            alert('Finished!');
        }).hide();
    }

    var handleTagsInput = function () {
        if (!jQuery().tagsInput) {
            return;
        }
        $('#tags_1').tagsInput({
            width: 'auto'
        });
        $('#tags_2').tagsInput({
            width: 240
        });
    }

    var handleGoTop = function () {
        /* set variables locally for increased performance */
        jQuery('#footer .go-top').click(function () {
            App.scrollTo();
        });

    }

    // this is optional to use if you want animated show/hide. But plot charts can make the animation slow.
    var handleSidebarTogglerAnimated = function () {

        $('.sidebar-toggler').click(function () {
            if ($('#sidebar > ul').is(":visible") === true) {
                $('#main-content').animate({
                    'margin-left': '25px'
                });

                $('#sidebar').animate({
                    'margin-left': '-190px'
                }, {
                    complete: function () {
                        $('#sidebar > ul').hide();
                        $("#container").addClass("sidebar-closed");
                    }
                });
            } else {
                $('#main-content').animate({
                    'margin-left': '215px'
                });
                $('#sidebar > ul').show();
                $('#sidebar').animate({
                    'margin-left': '0'
                }, {
                    complete: function () {
                        $("#container").removeClass("sidebar-closed");
                    }
                });
            }
        })
    }

    // by default used simple show/hide without animation due to the issue with handleSidebarTogglerAnimated.
    var handleSidebarToggler = function () {

        $('.sidebar-toggler').click(function () {
            if ($('#sidebar > ul').is(":visible") === true) {
                $('#main-content').css({
                    'margin-left': '25px'
                });
                $('#sidebar').css({
                    'margin-left': '-190px'
                });
                $('#sidebar > ul').hide();
                $("#container").addClass("sidebar-closed");
            } else {
               $('#main-content').css({
                    'margin-left': '215px'
                });
                $('#sidebar > ul').show();
                $('#sidebar').css({
                    'margin-left': '0'
                });
                $("#container").removeClass("sidebar-closed");
            }
        })
    }

    return {

        //main function to initiate template pages
        init: function () {

            if (jQuery.browser.msie && jQuery.browser.version.substr(0, 1) == 8) {
                isIE8 = true; // checkes for IE8 browser version
                $('.visible-ie8').show();
            }

            handleDeviceWidth(); // handles proper responsive features of the page
            handleChoosenSelect(); // handles bootstrap chosen dropdowns

            if (isMainPage) {
                handleDashboardCharts(); // handles plot charts for main page
                handleJQVMAP(); // handles vector maps for home page
                handleDashboardCalendar(); // handles full calendar for main page
                handleChat() // handles dashboard chat
            } else {
                handleCalendar(); // handles full calendars
                handlePortletSortable(); // handles portlet draggable sorting
            }

            if (isMapPage) {
                handleAllJQVMAP(); // handles vector maps for interactive map page
            }

            handleScrollers(); // handles slim scrolling contents
            handleUniform(); // handles uniform elements
            handleClockfaceTimePickers(); //handles form clockface timepickers
            handleTagsInput() // handles tag input elements
            handleTables(); // handles data tables
            handleCharts(); // handles plot charts
            handleWidgetTools(); // handles portlet action bar functionality(refresh, configure, toggle, remove)
            handlePulsate(); // handles pulsate functionality on page elements
            handlePeity(); // handles pierty bar and line charts
            handleGritterNotifications(); // handles gritter notifications
            handleTooltip(); // handles bootstrap tooltips
            handlePopover(); // handles bootstrap popovers
            handleToggleButtons(); // handles form toogle buttons
            handleWysihtml5(); //handles WYSIWYG Editor 
            handleDateTimePickers(); //handles form timepickers
            handleColorPicker(); // handles form color pickers
            handleFancyBox(); // handles fancy box image previews
            handleStyler(); // handles style customer tool
            handleMainMenu(); // handles main menu
            handleFixInputPlaceholderForIE(); // fixes/enables html5 placeholder attribute for IE9, IE8
            handleGoTop(); //handles scroll to top functionality in the footer
            handleAccordions();
            handleFormWizards();
            handleSidebarToggler();

            if (isMainPage) { // this is for demo purpose. you may remove handleIntro function for your project
                handleIntro();
            }
        },

        // login page setup
        initLogin: function () {
            handleLoginForm();
            handleFixInputPlaceholderForIE();
        },

        // wrapper function for page element pulsate
        pulsate: function (el, options) {
            var opt = jQuery.extend(options, {
                color: '#d12610', // set the color of the pulse
                reach: 15, // how far the pulse goes in px
                speed: 300, // how long one pulse takes in ms
                pause: 0, // how long the pause between pulses is in ms
                glow: false, // if the glow should be shown too
                repeat: 1, // will repeat forever if true, if given a number will repeat for that many times
                onHover: false // if true only pulsate if user hovers over the element
            });

            jQuery(el).pulsate(opt);
        },

        // wrapper function to scroll to an element
        scrollTo: function (el) {
            pos = el ? el.offset().top : 0;
            jQuery('html,body').animate({
                scrollTop: pos
            }, 'slow');
        },

        // wrapper function to  block element(indicate loading)
        blockUI: function (el, loaderOnTop) {
            lastBlockedUI = el;
            jQuery(el).block({
                message: '<img src="img/loading.gif" align="absmiddle">',
                css: {
                    border: 'none',
                    padding: '2px',
                    backgroundColor: 'none'
                },
                overlayCSS: {
                    backgroundColor: '#000',
                    opacity: 0.05,
                    cursor: 'wait'
                }
            });
        },

        // wrapper function to  un-block element(finish loading)
        unblockUI: function (el) {
            jQuery(el).unblock({
                onUnblock: function () {
                    jQuery(el).removeAttr("style");
                }
            });
        },

        // set main page
        setMainPage: function (flag) {
            isMainPage = flag;
        },

        // set map page
        setMapPage: function (flag) {
            isMapPage = flag;
        }

    };

    //input mask

    $('.inputmask').inputmask();

}();

//tooltips

$('.element').tooltip();


// Slider input js
try{
    jQuery("#Slider1").slider({ from: 5, to: 50, step: 2.5, round: 1, dimension: '&nbsp;$', skin: "round_plastic" });
    jQuery("#Slider2").slider({ from: 5000, to: 150000, heterogeneity: ['50/50000'], step: 1000, dimension: '&nbsp;$', skin: "round_plastic" });
    jQuery("#Slider3").slider({ from: 1, to: 30, heterogeneity: ['50/5', '75/15'], scale: [1, '|', 3, '|', '5', '|', 15, '|', 30], limits: false, step: 1, dimension: '', skin: "round_plastic" });
    jQuery("#Slider4").slider({ from: 480, to: 1020, step: 15, dimension: '', scale: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'], limits: false, skin: "round_plastic", calculate: function( value ){
        var hours = Math.floor( value / 60 );
        var mins = ( value - hours*60 );
        return (hours < 10 ? "0"+hours : hours) + ":" + ( mins == 0 ? "00" : mins );
    }});
} catch (e){
    errorMessage(e);
}


//knob

$(".knob").knob();






