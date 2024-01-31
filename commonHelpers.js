import{S as L,i as u,a as w}from"./assets/vendor-b52d9f5e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d=document.querySelector("#searchForm"),y=document.querySelector("#gallery"),m=document.querySelector(".loader"),i=document.querySelector(".loadbutton");i.addEventListener("click",k);d.addEventListener("submit",P);const E=document.getElementById("searchInput"),q=new L(".gallery a"),p=40;let l=1,c="";i.style.display="none";async function f(t){const o="41990967-a01a4811db23696ec0b17c82e",n="https://pixabay.com/api/",a={key:o,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:l,per_page:p};try{const{data:e}=await w(n,{params:a});return e}catch{g()}finally{m.style.display="none"}}function h(t){if(t.hits.length===0)i.style.display="none",u.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!"});else if(v(t.hits),l!==1){const n=document.querySelector(".carditem").getBoundingClientRect().height;console.log(n),window.scrollBy({top:n,behavior:"smooth"})}t.totalHits/p>=l?i.style.display="block":(i.style.display="none",u.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!"}))}async function P(t){if(t.preventDefault(),i.style.display="none",c=E.value.trim(),l=1,y.innerHTML="",c!==""){m.style.display="block";try{const o=await f(c);h(o)}catch{g()}d.reset()}}async function k(){l+=1;const t=await f(c);h(t)}function v(t){const o=t.map(({webformatURL:n,largeImageURL:a,tags:e,likes:r,views:s,comments:b,downloads:S})=>`<li class="carditem">
    <a href="${a}"><img src="${n}" alt="${e}"/>
        <ul>
          <li>
            <p><b>Likes</b> ${r}</p>
          </li>
          <li>
           <p><b>Views</b> ${s}</p>
          </li>
          <li>
            <p><b>Comments</b> ${b}</p>
          </li>
          <li>
            <p><b>Downloads</b>${S}</p>
          </li>
        </ul>
    </a>
        
      </li>`).join("");y.insertAdjacentHTML("beforeend",o),q.refresh()}function g(t){u.error({title:"Error",message:"An error occurred. Please try again later."})}
//# sourceMappingURL=commonHelpers.js.map
