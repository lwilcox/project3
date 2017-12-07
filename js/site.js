/* eslint-disable */
 /*! modernizr 3.5.0 (Custom Build) | MIT *
  * https://modernizr.com/download/?-csscolumns-cssgrid_cssgridlegacy-flexbox-flexwrap-mediaqueries-opacity-sandbox-seamless-srcdoc-setclasses !*/
 !function(e,n,t){function r(e,n){return typeof e===n}function s(){var e,n,t,s,o,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),w.push((s?"":"no-")+a.join("-"))}}function o(e){var n=S.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?S.className.baseVal=n:S.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(){var e=n.body;return e||(e=a(b?"svg":"body"),e.fake=!0),e}function u(e,t,r,s){var o,i,u,f,d="modernizr",c=a("div"),p=l();if(parseInt(r,10))for(;r--;)u=a("div"),u.id=s?s[r]:d+(r+1),c.appendChild(u);return o=a("style"),o.type="text/css",o.id="s"+d,(p.fake?p:c).appendChild(o),p.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",f=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),i=t(c,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=f,S.offsetHeight):c.parentNode.removeChild(c),!!i}function f(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(n,t,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,n,t);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!t&&n.currentStyle&&n.currentStyle[r];return s}function c(n,r){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(f(n[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+f(n[s])+":"+r+")");return o=o.join(" or "),u("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return t}function p(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function m(e,n,s,o){function l(){f&&(delete z.style,delete z.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var u=c(e,s);if(!r(u,"undefined"))return u}for(var f,d,m,y,g,v=["modernizr","tspan","samp"];!z.style&&v.length;)f=!0,z.modElem=a(v.shift()),z.style=z.modElem.style;for(m=e.length,d=0;m>d;d++)if(y=e[d],g=z.style[y],i(y,"-")&&(y=p(y)),z.style[y]!==t){if(o||r(s,"undefined"))return l(),"pfx"==n?y:!0;try{z.style[y]=s}catch(h){}if(z.style[y]!=g)return l(),"pfx"==n?y:!0}return l(),!1}function y(e,n){return function(){return e.apply(n,arguments)}}function g(e,n,t){var s;for(var o in e)if(e[o]in n)return t===!1?e[o]:(s=n[e[o]],r(s,"function")?y(s,t||n):s);return!1}function v(e,n,t,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+T.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?m(a,n,s,o):(a=(e+" "+P.join(i+" ")+i).split(" "),g(a,n,t))}function h(e,n,r){return v(e,t,t,n,r)}var C=[],x={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var w=[],S=n.documentElement,b="svg"===S.nodeName.toLowerCase(),_="Moz O ms Webkit",T=x._config.usePrefixes?_.split(" "):[];x._cssomPrefixes=T;var k={elem:a("modernizr")};Modernizr._q.push(function(){delete k.elem});var z={style:k.elem.style};Modernizr._q.unshift(function(){delete z.style});var P=x._config.usePrefixes?_.toLowerCase().split(" "):[];x._domPrefixes=P,x.testAllProps=v,x.testAllProps=h,function(){Modernizr.addTest("csscolumns",function(){var e=!1,n=h("columnCount");try{e=!!n,e&&(e=new Boolean(e))}catch(t){}return e});for(var e,n,t=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<t.length;r++)e=t[r].toLowerCase(),n=h("column"+t[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(n=n||h(t[r])),Modernizr.addTest("csscolumns."+e,n)}(),Modernizr.addTest("cssgridlegacy",h("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",h("grid-template-rows","none",!0)),Modernizr.addTest("flexbox",h("flexBasis","1px",!0)),Modernizr.addTest("flexwrap",h("flexWrap","wrap",!0));var E=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return u("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();x.mq=E,Modernizr.addTest("mediaqueries",E("only all"));var N=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=N,Modernizr.addTest("opacity",function(){var e=a("a").style;return e.cssText=N.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("sandbox","sandbox"in a("iframe")),Modernizr.addTest("seamless","seamless"in a("iframe")),Modernizr.addTest("srcdoc","srcdoc"in a("iframe")),s(),o(w),delete x.addTest,delete x.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);
/* eslint-enable */

(function($){

$("#slideshow > figure:gt(0)").hide();

setInterval(function() {
  $('#slideshow > figure:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

$('#comment-form').on('submit', function(e){
    var comment = $('#submitted-comment').val();
    var submitted = document.getElementById("submitted");
    var complete = "Thanks for your feedback! You're awesome.";
    var noentry = "Uh oh.. Did you forget to type?";

    e.preventDefault();
    if (comment === '' || comment === null) {
      submitted.textContent = noentry;
      setTimeout(function() {
        $("#submitted").fadeOut().empty();
      }, 5000);
    }
    else {
      submitted.textContent = complete;
      setTimeout(function() {
        $("#submitted").fadeOut(1000).empty();
      }, 5000);
    }
});



})(jQuery);
