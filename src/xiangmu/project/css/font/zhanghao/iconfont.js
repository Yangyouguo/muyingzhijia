(function(window){var svgSprite='<svg><symbol id="icon-zhanghao" viewBox="0 0 1024 1024"><path d="M828.1 722.4c-17.3-40.9-42-77.5-73.5-109s-68.2-56.2-109.1-73.5c-10.2-4.3-20.6-8.1-31-11.4 54.5-34.7 90.8-95.7 90.8-164.9 0-107.7-87.6-195.4-195.4-195.4-107.7 0-195.4 87.6-195.4 195.4 0 69.9 36.9 131.3 92.2 165.8-9.6 3.1-19 6.6-28.3 10.5-40.9 17.3-77.5 42-109 73.5s-56.2 68.2-73.5 109c-17.9 42.3-27 87.2-27 133.6h46c0-163.8 133.3-297.1 297.1-297.1S809.1 692.2 809.1 856h46c0-46.4-9.1-91.3-27-133.6zM360.6 363.5c0-82.4 67-149.4 149.4-149.4s149.4 67 149.4 149.4-67 149.4-149.4 149.4c-82.4-0.1-149.4-67.1-149.4-149.4z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)