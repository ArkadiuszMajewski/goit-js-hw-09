!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequire7bc7;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=i);var r=i("6JpON"),u=document.querySelector('[name="delay"]'),c=(document.querySelector('[name="step"]'),document.querySelector('[name="amount"]')),l=document.querySelector(".form"),a=0,s=function(e,n){return new Promise((function(e,t){setTimeout((function(){shouldResolve=Math.random()>.3,shouldResolve?e("`✅ Fulfilled promise ${position} in ${new Date().getTime() - clickTime}ms`"):t("`❌ Rejected promise ${position} in ${new Date().getTime() - clickTime}ms`")}),n)}))},f=function(n){return a+=1,e(r).Notify.success("✅ Fulfilled promise ".concat(a," in ").concat((new Date).getTime()-m,"ms"))},d=function(n){return a+=1,e(r).Notify.failure("❌ Rejected promise ".concat(a," in ").concat((new Date).getTime()-m,"ms"))},m=0;l.addEventListener("submit",(function(e){e.preventDefault(),m=(new Date).getTime();for(var n=0;n<[c.value];n++)s(0,u.value).then(f).catch(d);a=0}))}();
//# sourceMappingURL=03-promises.7ac792db.js.map
