import{A as u}from"./assets/vendor-CTqzIL4Y.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const n={CSS_SELECTOR:{WRAP_CLASS:".wrap",TECH_SKILLS_UPPER_ID:"#tech-skills-upper",TECH_SKILLS_LOWER_ID:"#tech-skills-lower"},CSS_CLASS:{ITEM:"item",UPPER_DOTS:"upper-dots",LOWER_DOTS:"lower-dots",ITEM_UPPER:"item-upper",ITEM_LOWER:"item-lower"},SEPARATOR_SVG_LOC:"./img/icons.svg#icon-dot",PLACE:{UPPER:"upper",LOWER:"lower"},POSITION:{BEFORE_END:"beforeend",AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin"}},a=[{name:"HTML/CSS",link:"https://www.edu.goit.global/uk/learn/24554709/17039071/17039078/training"},{name:"JavaScript",link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{name:"React",link:"https://react.dev/"},{name:"Node.js",link:"https://nodejs.dev/"},{name:"React Native",link:"https://reactnative.dev/"},{name:"Typescript",link:"https://www.typescriptlang.org/"}],d=document.querySelector(n.CSS_SELECTOR.WRAP_CLASS),l=d.querySelector(n.CSS_SELECTOR.TECH_SKILLS_UPPER_ID),m=d.querySelector(n.CSS_SELECTOR.TECH_SKILLS_LOWER_ID),S=(i,r=n.PLACE.UPPER)=>i.map(t=>`<svg class=${r===n.PLACE.UPPER?n.CSS_CLASS.UPPER_DOTS:n.CSS_CLASS.LOWER_DOTS} width="8" height="8">
            <use href=${n.SEPARATOR_SVG_LOC}></use>
          </svg>
          <a target="_blank" href=${t.link}>
            <div class="item ${r===n.PLACE.UPPER?n.CSS_CLASS.ITEM_UPPER:n.CSS_CLASS.ITEM_LOWER}">${t.name}</div>
          </a>`),E=(i,r=!1)=>{let t=document.createElement("div"),o=document.createElement("div");return t.classList.add("items","marquee"),r&&t.classList.add("reverse"),o.classList.add("items","marquee"),r&&o.classList.add("reverse"),o.ariaHidden="true",t.innerHTML=i.join(""),o.innerHTML=i.join(""),l.insertAdjacentElement("beforeend",t),l.insertAdjacentElement("beforeend",o),{element1:t,element2:o}},L=(i,r,t=n.POSITION.BEFORE_END)=>{const{element1:o,element2:e}=r;i.insertAdjacentElement(t,o),i.insertAdjacentElement(t,e)},p=E(S(a)),_=E(S(a,n.PLACE.LOWER),!0);L(l,p);L(m,_);document.addEventListener("DOMContentLoaded",()=>{new u("#questions-list",{duration:250,showMultiple:!1}).open(0)});
//# sourceMappingURL=index.js.map
