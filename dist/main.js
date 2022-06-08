(()=>{"use strict";var e={426:(e,r,n)=>{n.d(r,{Z:()=>a});var t=n(81),i=n.n(t),o=n(645),s=n.n(o)()(i());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Merienda:wght@700&family=Merriweather:ital,wght@1,700&display=swap);"]),s.push([e.id,"html {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  -webkit-box-sizing: inherit;\r\n  -moz-box-sizing: inherit;\r\n  box-sizing: inherit;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 1rem;\r\n  color: #dddbf1;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  margin-top: 100px;\r\n  justify-content: center;\r\n  background-color: #755c1b;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.todolist {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: repeat(4, auto);\r\n  background-color: #7a4419;\r\n  height: max-content;\r\n  width: 80%;\r\n  border-radius: 20px 20px;\r\n  border: 2px solid #383f51;\r\n  z-index: 1;\r\n}\r\n\r\n.list-header,\r\n.add-new-task {\r\n  display: grid;\r\n  grid-template-columns: 1fr auto;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid #383f51;\r\n  padding: 0 20px;\r\n  height: 50px;\r\n}\r\n\r\n#add-new-task,\r\n#add-new-task::placeholder {\r\n  color: #ada7ac;\r\n  font-family: 'Merienda', cursive;\r\n  letter-spacing: 0.1rem;\r\n  width: 100%;\r\n}\r\n\r\n.list-header>h1 {\r\n  letter-spacing: 0.1rem;\r\n  font-family: 'Merriweather', serif;\r\n  font-size: 20px;\r\n}\r\n\r\ninput,\r\nbutton {\r\n  border: 0;\r\n  background: none;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\n.task {\r\n  cursor: move;\r\n  height: 50px;\r\n  display: grid;\r\n  align-items: center;\r\n  grid-template-columns: auto 1fr auto;\r\n  column-gap: 10px;\r\n  padding: 0 20px;\r\n  border-bottom: 2px dotted #383f51;\r\n}\r\n\r\n.fa-solid {\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=checkbox] {\r\n  transform: scale(1.2);\r\n  margin-right: 10px;\r\n}\r\n\r\n.new-task {\r\n  letter-spacing: 0.07rem;\r\n  font-family: 'Merienda', cursive;\r\n  border-radius: 9px;\r\n  padding-left: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.active {\r\n  background: #b4b88c;\r\n  color: #000;\r\n}\r\n\r\n.line {\r\n  text-decoration: line-through;\r\n  font-size: 0.9rem;\r\n  color: #ada7ac;\r\n}\r\n\r\n#clear-btn {\r\n  font-family: 'Merienda', cursive;\r\n  cursor: pointer;\r\n  height: 70px;\r\n  background-color: #0b2545;\r\n  border-radius: 0 0 19px 19px;\r\n}\r\n\r\n/* error message */\r\n.error {\r\n  color: #0b2545;\r\n  visibility: hidden;\r\n  font-size: 19px;\r\n  padding: 12px;\r\n  position: absolute;\r\n  width: max-content;\r\n  background-color: #c1c7d0;\r\n  text-align: center;\r\n  top: 12%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.error::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  margin-left: -5px;\r\n  border-width: 5px;\r\n  border-style: solid;\r\n  border-color: #c1c7d0 transparent transparent transparent;\r\n}\r\n\r\nfooter {\r\n  position: fixed;\r\n  bottom: 0;\r\n  padding: 30px;\r\n}\r\n\r\n.tribute {\r\n  letter-spacing: 0.1rem;\r\n  font-weight: bold;\r\n  font-family: 'Merienda', cursive;\r\n}\r\n\r\n@media screen and (min-width: 600px) {\r\n  * {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .list-header>h1 {\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .todolist {\r\n    width: 75%;\r\n  }\r\n\r\n  input[type=checkbox] {\r\n    transform: scale(1.5);\r\n  }\r\n}",""]);const a=s},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(t)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);t&&s[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),r.push(d))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var o={},s=[],a=0;a<e.length;a++){var c=e[a],l=t.base?c[0]+t.base:c[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)r[u].references++,r[u].updater(m);else{var h=i(m,t);t.byIndex=a,r.splice(a,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function i(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,i){var o=t(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var a=n(o[s]);r[a].references--}for(var c=t(e,i),l=0;l<o.length;l++){var d=n(o[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}o=c}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,i&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function n(t){var i=r[t];if(void 0!==i)return i.exports;var o=r[t]={id:t,exports:{}};return e[t](o,o.exports,n),o.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e=n(379),r=n.n(e),t=n(795),i=n.n(t),o=n(569),s=n.n(o),a=n(565),c=n.n(a),l=n(216),d=n.n(l),p=n(589),u=n.n(p),m=n(426),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),r()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=e=>{e.previousElementSibling.checked?(e.classList.add("line"),e.classList.remove("active"),e.readOnly=!0):(e.classList.remove("active"),e.readOnly=!0)},g=document.querySelector(".refresh"),v=document.getElementById("clear-btn"),b=new class{constructor(){this.store=JSON.parse(localStorage.getItem("ToDoList"))||[]}newTask(){const e=document.querySelector(".task-container");e.innerHTML="",this.store.forEach((r=>{r.completed?e.innerHTML+=`\n      <div class="task">\n          <input type="checkbox" class="check" checked>\n          <input id="${r.index}" class="new-task line" type="text" value="${r.description}">\n          <span id="${r.index}">\n            <i class="delete fa-solid fa-trash-can"></i>\n          </span>\n      </div>\n      `:e.innerHTML+=`\n      <div class="task">\n          <input type="checkbox" class="check">\n          <input id="${r.index}" class="new-task" type="text" value="${r.description}">\n          <span id="${r.index}">\n            <i class="delete fa-solid fa-trash-can"></i>\n          </span>\n      </div>\n      `})),this.pageEvents(),localStorage.setItem("ToDoList",JSON.stringify(this.store))}resetIndex(){let e=1;this.store.forEach((r=>{r.index=e,e+=1})),localStorage.setItem("ToDoList",JSON.stringify(this.store))}addNewTask(e){const r={index:this.store.length+1,description:e,completed:!1};this.store.push(r),this.newTask(),localStorage.setItem("ToDoList",JSON.stringify(this.store))}deleteTask(e){this.store=this.store.filter((r=>r.index!==e)),this.resetIndex(),this.newTask(),localStorage.setItem("ToDoList",JSON.stringify(this.store))}editTask(e,r){this.store[e].description=r,localStorage.setItem("ToDoList",JSON.stringify(this.store))}markItemAsComplete(e){this.store[e].completed?this.store[e].completed=!1:this.store[e].completed=!0,localStorage.setItem("ToDoList",JSON.stringify(this.store))}clearCompletedTasks(){this.store=this.store.filter((e=>!1===e.completed)),this.resetIndex(),this.newTask()}clearAllTasks(){this.store=[],localStorage.setItem("ToDoList",JSON.stringify(this.store)),this.newTask()}localStorageToWebpage(){null!==localStorage&&(this.store=JSON.parse(localStorage.getItem("ToDoList"))||[],this.newTask())}pageEvents(){document.querySelectorAll(".check").forEach((e=>{e.addEventListener("change",(()=>{e.checked?(e.nextElementSibling.classList.add("line"),this.markItemAsComplete(Number(e.nextElementSibling.id)-1,this.store)):(e.nextElementSibling.classList.remove("line"),this.markItemAsComplete(Number(e.nextElementSibling.id)-1,this.store))}))})),document.querySelectorAll(".new-task").forEach((e=>{e.addEventListener("input",(()=>{this.editTask(Number(e.id)-1,e.value)})),e.addEventListener("click",(()=>{(e=>{e.classList.contains("line")?(e.readOnly=!1,e.classList.remove("line"),e.classList.add("active")):(e.classList.add("active"),e.readOnly=!1)})(e)})),e.addEventListener("blur",(()=>{f(e)})),e.addEventListener("keydown",(r=>{"Enter"===r.code&&f(e)}))})),document.querySelectorAll(".delete").forEach((e=>{e.addEventListener("click",(()=>{this.deleteTask(Number(e.parentElement.id))}))}))}};b.localStorageToWebpage(),v.addEventListener("click",(()=>{b.clearCompletedTasks()})),g.addEventListener("click",(()=>{b.clearAllTasks()})),function(){const e=document.getElementById("add-new-task"),r=document.getElementById("error-msg");document.querySelector(".enter").addEventListener("click",(()=>{""===e.value?(r.style.visibility="visible",setTimeout((()=>{r.style.visibility="hidden"}),2e3)):(b.addNewTask(e.value),e.value="")})),e.addEventListener("keydown",(n=>{"Enter"===n.code&&(""===e.value?(r.style.visibility="visible",setTimeout((()=>{r.style.visibility="hidden"}),2e3)):(b.addNewTask(e.value),e.value=""))})),localStorage.setItem("ToDoList",JSON.stringify(b.store))}()})()})();