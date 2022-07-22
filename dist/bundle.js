(()=>{"use strict";var r={426:(r,n,e)=>{e.d(n,{Z:()=>s});var t=e(81),o=e.n(t),a=e(645),c=e.n(a)()(o());c.push([r.id,"body,\r\n.input-style::placeholder,\r\n.btn-style {\r\n  font-family: cursive, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #f0a3bc;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\nh1,\r\nh2,\r\n.recent {\r\n  color: #9b45b2;\r\n}\r\n\r\n.recent-con,\r\n.main {\r\n  display: flex;\r\n}\r\n\r\n.recent-con {\r\n  align-items: center;\r\n}\r\n\r\n.main {\r\n  justify-content: center;\r\n}\r\n\r\n.leaderb-con {\r\n  margin-right: 48px;\r\n}\r\n\r\n#leaderboard {\r\n  border: none;\r\n}\r\n\r\n.input-style,\r\n.btn-style {\r\n  border-radius: 25px;\r\n}\r\n\r\n.recent {\r\n  margin-right: 24px;\r\n}\r\n\r\n.btn-style {\r\n  cursor: pointer;\r\n  background-color: #eb6b40;\r\n  border: none;\r\n  transition-duration: 0.3s;\r\n}\r\n\r\n.btn-style:hover {\r\n  background-color: #d73b07;\r\n  transform: scale(1.2);\r\n}\r\n\r\n.btn-style:active {\r\n  transform: scale(0.9);\r\n}\r\n\r\n.score-container {\r\n  width: 64px;\r\n}\r\n\r\n.input-style {\r\n  border-color: #9b45b2;\r\n  background-color: pink;\r\n}\r\n\r\n.input-style::placeholder {\r\n  color: #d73b07;\r\n}\r\n\r\n.first-color {\r\n  background-color: #eb6b40;\r\n}\r\n\r\n.second-color {\r\n  background-color: #9b45b2;\r\n}\r\n",""]);const s=c},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var c={};if(t)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var l=0;l<r.length;l++){var d=[].concat(r[l]);t&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},c=[],s=0;s<r.length;s++){var i=r[s],l=t.base?i[0]+t.base:i[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=e(u),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,t);t.byIndex=s,n.splice(s,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var c=0;c<a.length;c++){var s=e(a[c]);n[s].references--}for(var i=t(r,o),l=0;l<a.length;l++){var d=e(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=i}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return r[t](a,a.exports,e),a.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.nc=void 0,(()=>{var r=e(379),n=e.n(r),t=e(795),o=e.n(t),a=e(569),c=e.n(a),s=e(565),i=e.n(s),l=e(216),d=e.n(l),u=e(589),p=e.n(u),f=e(426),h={};h.styleTagTransform=p(),h.setAttributes=i(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=new class{constructor(){this.url="https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tLLmHQIVXj0SbcfXAHdh/scores",this.leaderBoard=document.getElementById("leaderboard"),this.button=document.getElementById("add-scores"),this.refreshButton=document.getElementById("refresh")}displayScores(r){let n="";r.forEach(((r,e)=>{const t=`\n    <div id="${e}" class="score-container">${r.user}: ${r.score}</div>       \n    `;n+=t})),this.leaderBoard.innerHTML=n}addScore=async r=>(await fetch(this.url,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(r)})).json();getScores=async()=>{const r=await fetch(this.url),{result:n}=await r.json().catch((r=>new Error(r)));this.displayScores(n),document.querySelectorAll(".score-container").forEach(((r,n)=>{document.getElementById(r.id).className=n%2!=0?"first-color":"second-color"}))};refresh(){this.refreshButton.addEventListener("click",(async()=>{await this.getScores()}))}AddOnClick(){this.button.onclick=async()=>{const r=document.getElementById("name").value,n=document.getElementById("score").value;if(""===r||""===n)return;const e={user:r,score:n};this.addScore(e),document.getElementById("myform").reset()}}};m.getScores(),m.AddOnClick(),m.refresh()})()})();