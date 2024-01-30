import{S as L,a as S,i as u}from"./assets/vendor-b52d9f5e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d=document.querySelector("#searchForm"),y=document.querySelector("#gallery"),m=document.querySelector(".loader"),a=document.querySelector(".loadbutton");a.addEventListener("click",v);d.addEventListener("submit",q);const E=document.getElementById("searchInput"),w=new L(".gallery a"),p=40;let l=1,c="";a.style.display="none";async function f(t){const o="41990967-a01a4811db23696ec0b17c82e",n="https://pixabay.com/api/",s={key:o,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:l,per_page:p};try{const{data:e}=await S(n,{params:s});return e}catch{P()}finally{m.style.display="none"}}function h(t){if(t.hits.length===0)a.style.display="none",u.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!"});else if(k(t.hits),l!==1){const n=document.querySelector(".carditem").getBoundingClientRect().height;console.log(n),window.scrollBy({top:n,behavior:"smooth"})}t.totalHits/p>=l?a.style.display="block":(a.style.display="none",u.error({title:"Error",message:"We're sorry, but you've reached the end of search results."}))}async function q(t){if(t.preventDefault(),a.style.display="none",c=E.value.trim(),l=1,y.innerHTML="",c==="")return;m.style.display="block";const o=await f(c);h(o),d.reset()}async function v(){l+=1;const t=await f(c);h(t)}function k(t){const o=t.map(({webformatURL:n,largeImageURL:s,tags:e,likes:r,views:i,comments:g,downloads:b})=>`<li class="carditem">
    <a href="${s}"><img src="${n}" alt="${e}"/>
        <ul>
          <li>
            <p><b>Likes</b> ${r}</p>
          </li>
          <li>
           <p><b>Views</b> ${i}</p>
          </li>
          <li>
            <p><b>Comments</b> ${g}</p>
          </li>
          <li>
            <p><b>Downloads</b>${b}</p>
          </li>
        </ul>
    </a>
        
      </li>`).join("");y.insertAdjacentHTML("beforeend",o),w.refresh()}function P(t){u.error({title:"Error",message:"An error occurred. Please try again later."})}
//# sourceMappingURL=commonHelpers.js.map
