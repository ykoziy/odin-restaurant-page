(()=>{"use strict";const n=(n,t,e,l,a)=>{const i=document.createElement(n);if(t&&(i.id=t),e&&i.classList.add(...e.split(" ")),l&&l.forEach((n=>{i.setAttribute(n[0],n[1])})),a){const n=document.createTextNode(a);i.appendChild(n)}return i},t=n=>{n.appendChild(e())},e=()=>{const t=n("div","hero"),e=n("h1",null,null,null,"Napoli Pizzeria");t.appendChild(e);const l=n("p",null,null,null,"Authentic italian pizza napoletana. Made with fresh organic ingridients, baked to perfection in wood fired brick oven.");t.appendChild(l);const a=n("button",null,"menu-btn",null,"menu");return a.classList.add("menu-btn"),t.appendChild(a),t},l=()=>{document.getElementById("content-main").textContent=""},a=[{url:"https://twitter.com/",icon:"fa-twitter"},{url:"https://www.instagram.com/",icon:"fa-instagram"},{url:"https://www.facebook.com/",icon:"fa-facebook"}],i=(t,e)=>{const l=n("a",null,null,[["href",t],["target","_blank"]]),a=n("i",null,`fab fa-2x ${e}`);return l.appendChild(a),l},o=n=>{Array.from(n.currentTarget.parentNode.children).forEach((n=>{n.classList.remove("active")})),n.target.classList.add("active"),(n=>{const e=document.getElementById("content-main");"home"==n?(l(),t(e)):"menu"==n?(l(),console.log("Load menu page.")):"contact"==n&&(l(),console.log("Load contact page."))})(n.target.textContent)};(()=>{const e=document.getElementById("content");(t=>{const e=n("nav"),l=n("ul");["home","menu","contact"].forEach((t=>{const e=n("li",null,null,null,t);e.addEventListener("click",o),l.appendChild(e)})),e.appendChild((t=>{const e=n("div","logo"),l=n("h1",null,null,null,t);return e.appendChild(l),e})("Napoli Pizzeria")),e.appendChild(l),t.appendChild(e)})(e),(e=>{const l=n("main"),a=n("div","content-main");t(a),l.appendChild(a),e.appendChild(l)})(e),(t=>{const e=document.createElement("footer");e.appendChild((t=>{const e=n("div","credit"),l=n("p",null,null,null,t);return e.appendChild(l),e})("Created by Yuriy Koziy. © 2021")),e.appendChild((()=>{const t=n("div","social"),e=n("ul");return a.forEach((t=>{let l=n("li");l.appendChild(i(t.url,t.icon)),e.appendChild(l)})),t.appendChild(e),t})()),t.appendChild(e)})(e)})()})();