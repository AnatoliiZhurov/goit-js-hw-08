function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return c.Date.now()};function g(e,t,n){var i,o,r,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function j(e){return l=e,u=setTimeout(w,t),c?y(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function w(){var e=p();if(h(e))return I(e);u=setTimeout(w,function(e){var n=t-(e-f);return s?m(n,r-(e-l)):n}(e))}function I(e){return u=void 0,g&&i?y(e):(i=o=void 0,a)}function O(){var e=p(),n=h(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(w,t),y(f)}return void 0===u&&(u=setTimeout(w,t)),a}return t=b(t)||0,v(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=o=u=void 0},O.flush=function(){return void 0===u?a:I(p())},O}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),j={form:y,emailInput:y.elements.email,messageInput:y.elements.message};console.log(j);const h=JSON.parse(localStorage.getItem("feedback-form-state"))||{};console.log(h),j.emailInput.value=h.email||"",j.messageInput.value=h.message||"",y.addEventListener("input",e(t)((function(){const e={email:j.emailInput.value,message:j.messageInput.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),y.reset(),localStorage.clear()}));
//# sourceMappingURL=03-feedback.7e103eef.js.map
