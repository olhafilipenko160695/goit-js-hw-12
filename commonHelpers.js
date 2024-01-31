import{S,i as u,a as w}from"./assets/vendor-b52d9f5e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const y=document.querySelector("#searchForm"),f=document.querySelector("#gallery"),p=document.querySelector(".loader"),a=document.querySelector(".loadbutton");a.addEventListener("click",q);y.addEventListener("submit",k);const E=document.getElementById("searchInput"),v=new S(".gallery a"),h=40;let l=1,c="";a.style.display="none";async function m(t){const o="41990967-a01a4811db23696ec0b17c82e",n="https://pixabay.com/api/",s={key:o,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:l,per_page:h};try{const{data:e}=await w(n,{params:s});return e}catch{d()}finally{p.style.display="none"}}function g(t){if(t.hits.length===0)a.style.display="none",u.warning({title:"Caution",message:"We're sorry, but you've reached the end of search results."});else if($(t.hits),l!==1){const n=document.querySelector(".carditem").getBoundingClientRect().height;console.log(n),window.scrollBy({top:n,behavior:"smooth"})}t.totalHits/h>=l?a.style.display="block":(a.style.display="none",u.warning({title:"Caution",message:"We're sorry, but you've reached the end of search results."}))}async function k(t){if(t.preventDefault(),a.style.display="none",c=E.value.trim(),l=1,f.innerHTML="",c!==""){p.style.display="block";try{const o=await m(c);g(o)}catch{d()}y.reset()}}async function q(){l+=1;try{const t=await m(c);g(t)}catch{d()}}function $(t){const o=t.map(({webformatURL:n,largeImageURL:s,tags:e,likes:r,views:i,comments:b,downloads:L})=>`<li class="carditem">
    <a href="${s}"><img src="${n}" alt="${e}"/>
        <ul>
          <li>
            <p><b>Likes</b> ${r}</p>
          </li>
          <li>
           <p><b>Views</b> ${i}</p>
          </li>
          <li>
            <p><b>Comments</b> ${b}</p>
          </li>
          <li>
            <p><b>Downloads</b>${L}</p>
          </li>
        </ul>
    </a>
        
      </li>`).join("");f.insertAdjacentHTML("beforeend",o),v.refresh()}function d(t){u.error({title:"Error",message:"An error occurred. Please try again later."})}
//# sourceMappingURL=commonHelpers.js.map
