(function(window){var svgSprite='<svg><symbol id="icon-apple" viewBox="0 0 1024 1024"><path d="M720.054857 228.534857c118.564571 0 194.413714 114.724571 194.413714 114.724572s-115.675429 62.793143-115.675428 199.131428c0 161.792 145.334857 208.859429 145.334857 208.859429s-114.724571 272.164571-243.529143 272.164571c-72.411429 0-77.238857-41.654857-173.494857-41.654857-83.602286 0-111.762286 41.691429-175.433143 41.691429C230.144 1023.414857 73.142857 758.125714 73.142857 542.354286c0-224.109714 158.939429-313.856 258.56-313.856 87.515429 0 123.977143 51.492571 194.413714 51.492571 59.318857 0 105.984-51.492571 193.938286-51.492571zM699.611429 0c17.481143 109.860571-82.139429 245.686857-201.216 241.298286C480.914286 101.522286 609.243429 7.387429 699.648 0z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)