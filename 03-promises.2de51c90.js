function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("7Y9D8");const i={form:document.querySelector(".form"),firstDelayInput:document.querySelector('input[name="delay"]'),delayStepInput:document.querySelector('input[name="step"]'),amountInput:document.querySelector('input[name="amount"]')};function l(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}i.form.addEventListener("submit",(t=>{t.preventDefault();const n=Number(i.amountInput.value);let o=Number(i.firstDelayInput.value);const r=Number(i.delayStepInput.value);for(let t=1;t<=n;t+=1)l(t,o).then((({position:t,delay:n})=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),o+=r}));
//# sourceMappingURL=03-promises.2de51c90.js.map