function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},l=o.parcelRequire7bc7;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var l={id:e,exports:{}};return n[e]=l,o.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequire7bc7=l);var i=l("7Y9D8");function r(e,o){return new Promise(((n,t)=>{const l=Math.random()>.3;setTimeout((()=>{l?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}const s=document.querySelector(".form");document.querySelector("button").addEventListener("click",(o=>{o.preventDefault();const n=parseInt(s.elements.delay.value),t=parseInt(s.elements.step.value),l=parseInt(s.elements.amount.value);for(let o=1;o<=l;o+=1){r(o,n+(o-1)*t).then((({position:o,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`),console.log(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((({position:o,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`),console.log(`❌ Rejected promise ${o} in ${n}ms`)}))}}));
//# sourceMappingURL=03-promises.68f629a4.js.map
