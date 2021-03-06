/* eslint-disable */
 /*! modernizr 3.5.0 (Custom Build) | MIT *
 /*! modernizr 3.5.0 (Custom Build) | MIT *
* https://modernizr.com/download/?-csscolumns-cssgrid_cssgridlegacy-flexbox-flexwrap-mediaqueries-opacity-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],n=w[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),C.push((o?"":"no-")+a.join("-"))}}function s(e){var n=x.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?x.className.baseVal=n:x.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(b?"svg":"body"),e.fake=!0),e}function l(e,t,r,o){var s,l,u,f,c="modernizr",d=i("div"),p=a();if(parseInt(r,10))for(;r--;)u=i("div"),u.id=o?o[r]:c+(r+1),d.appendChild(u);return s=i("style"),s.type="text/css",s.id="s"+c,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",f=x.style.overflow,x.style.overflow="hidden",x.appendChild(p)),l=t(d,e),p.fake?(p.parentNode.removeChild(p),x.style.overflow=f,x.offsetHeight):d.parentNode.removeChild(d),!!l}function u(e,n){return!!~(""+e).indexOf(n)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function c(e,n){return function(){return e.apply(n,arguments)}}function d(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?c(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function y(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+p(n[o])+":"+r+")");return s=s.join(" or "),l("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return t}function g(e,n,o,s){function a(){c&&(delete N.style,delete N.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var l=y(e,o);if(!r(l,"undefined"))return l}for(var c,d,p,m,g,v=["modernizr","tspan","samp"];!N.style&&v.length;)c=!0,N.modElem=i(v.shift()),N.style=N.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],g=N.style[m],u(m,"-")&&(m=f(m)),N.style[m]!==t){if(s||r(o,"undefined"))return a(),"pfx"==n?m:!0;try{N.style[m]=o}catch(h){}if(N.style[m]!=g)return a(),"pfx"==n?m:!0}return a(),!1}function v(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?g(a,n,o,s):(a=(e+" "+P.join(i+" ")+i).split(" "),d(a,n,t))}function h(e,n,r){return v(e,t,t,n,r)}var C=[],w=[],S={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var x=n.documentElement,b="svg"===x.nodeName.toLowerCase(),_=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return l("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();S.mq=_,Modernizr.addTest("mediaqueries",_("only all"));var T=S._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];S._prefixes=T,Modernizr.addTest("opacity",function(){var e=i("a").style;return e.cssText=T.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var k="Moz O ms Webkit",z=S._config.usePrefixes?k.split(" "):[];S._cssomPrefixes=z;var P=S._config.usePrefixes?k.toLowerCase().split(" "):[];S._domPrefixes=P;var E={elem:i("modernizr")};Modernizr._q.push(function(){delete E.elem});var N={style:E.elem.style};Modernizr._q.unshift(function(){delete N.style}),S.testAllProps=v,S.testAllProps=h,function(){Modernizr.addTest("csscolumns",function(){var e=!1,n=h("columnCount");try{e=!!n,e&&(e=new Boolean(e))}catch(t){}return e});for(var e,n,t=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<t.length;r++)e=t[r].toLowerCase(),n=h("column"+t[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(n=n||h(t[r])),Modernizr.addTest("csscolumns."+e,n)}(),Modernizr.addTest("cssgridlegacy",h("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",h("grid-template-rows","none",!0)),Modernizr.addTest("flexbox",h("flexBasis","1px",!0)),Modernizr.addTest("flexwrap",h("flexWrap","wrap",!0)),o(),s(C),delete S.addTest,delete S.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);
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
  }, 3000);

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
