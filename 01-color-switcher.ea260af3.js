!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body"),a=null;t.addEventListener("click",(function(n){t.setAttribute("disabled",""),e.removeAttribute("disabled",""),a=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(r){t.removeAttribute("disabled",""),e.setAttribute("disabled",""),clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.ea260af3.js.map
