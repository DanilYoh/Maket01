!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2);console.log("Works!");var i=document.querySelector(".sidebar"),r=document.querySelector(".icon"),o=document.querySelector(".search-box"),c=document.querySelector(".logo");r.onclick=function(){o.classList.toggle("active-search"),c.classList.toggle("active-search"),m.classList.toggle("active-search")};var s=document.querySelector(".content__wraper"),a=document.querySelector(".dynamic-title");function l(){i.classList.add("active"),p.classList.remove("open"),u.classList.remove("unblock"),a.innerHTML="Оратная связь",s.innerHTML='\n\t\t\t\t<div class="sidebar__input-area">\n\t\t\t\t<input type="text" placeholder="Имя" class="input">\n\t\t\t\t</div>\n\t\t\t\t<div class="sidebar__input-area">\n\t\t\t\t<input type="text" placeholder="Телефон" class="input">\n\t\t\t\t</div>\n\t\t\t\t<div class="sidebar__input-area">\n\t\t\t\t<input type="text" placeholder="Электронная почта" class="input">\n\t\t\t\t</div>\n\t\t\t\t<div class="sidebar__input-area">\n\t\t\t\t<textarea type="text" class="input" placeholder="Сообщение"></textarea>\n\t\t\t\t</div>\n\t\t'}function d(){i.classList.add("active"),p.classList.remove("open"),u.classList.remove("unblock"),a.innerHTML="Заказать звонок",s.innerHTML='\n\t\t\t<div class="sidebar__input-area">\n\t\t\t<input type="text" placeholder="Телефон" class="input">\n\t\t\t</div>\n\t'}document.querySelectorAll(".btnApplication").forEach((function(e){e.addEventListener("click",l)})),document.querySelectorAll(".btncall").forEach((function(e){e.addEventListener("click",d)})),document.querySelector(".close").addEventListener("click",(function(){i.classList.remove("active")}));var u=document.querySelector(".aside__overlay"),p=document.querySelector(".aside");document.querySelector(".hamburger").addEventListener("click",(function(){p.classList.add("open"),u.classList.add("unblock")}));var m=document.querySelector(".closeAside");m.addEventListener("click",(function(){p.classList.remove("open"),u.classList.remove("unblock")}));var f=document.getElementById("text"),v=document.querySelector(".promo__info"),b=document.querySelector(".show__text");f.addEventListener("click",(function(){v.classList.toggle("visible"),f.classList.toggle("up"),f.classList.contains("up")?b.innerHTML="Скрыть":b.innerHTML="Читать дальше"}));var y=document.querySelector(".brandsAdd"),w=document.querySelector(".brands__block"),L=document.getElementById("one");y.addEventListener("click",(function(){w.classList.toggle("visible"),y.classList.toggle("up"),y.classList.contains("up")?L.innerHTML="Скрыть":L.innerHTML="Показать все"}));var g=document.querySelector(".technicsAdd"),S=document.querySelector(".technics__block"),_=document.getElementById("two");g.addEventListener("click",(function(){S.classList.toggle("visible"),g.classList.toggle("up"),g.classList.contains("up")?_.innerHTML="Скрыть":_.innerHTML="Показать все"}));var h,q=document.querySelector(".swiper-container");function k(){window.innerWidth<=763&&"false"==q.dataset.mobile&&(h=new Swiper(q,{slidesPerView:1,spaceBetween:10,pagination:{el:".pag-1",clickable:!0}}),q.dataset.mobile="true"),window.innerWidth>763&&(q.dataset.mobile="false",q.classList.contains("swiper-container-initialized")&&h.destroy())}k();var x,E=document.querySelector(".swiper-container-two");function M(){window.innerWidth<=763&&"false"==E.dataset.mobile&&(x=new Swiper(E,{slidesPerView:1,spaceBetween:10,pagination:{el:".pag-2",clickable:!0}}),E.dataset.mobile="true"),window.innerWidth>763&&(E.dataset.mobile="false",E.classList.contains("swiper-container-initialized")&&x.destroy())}M();var T,H=document.querySelector(".swiper-container-thre");function P(){window.innerWidth<=763&&"false"==H.dataset.mobile&&(T=new Swiper(H,{slidesPerView:1,spaceBetween:40,pagination:{el:".pag-3",clickable:!0}}),H.dataset.mobile="true"),window.innerWidth>763&&(H.dataset.mobile="false",H.classList.contains("swiper-container-initialized")&&T.destroy())}P();var W,j=document.querySelector(".swiper-container-four");function O(){window.innerWidth<=768&&"false"==j.dataset.mobile&&(W=new Swiper(j,{watchSlidesProgress:!0,slidesPerView:3}),j.dataset.mobile="true"),window.innerWidth>768&&(j.dataset.mobile="false",j.classList.contains("swiper-container-initialized")&&W.destroy())}O(),window.addEventListener("resize",(function(){k(),M(),P(),O()}))},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map