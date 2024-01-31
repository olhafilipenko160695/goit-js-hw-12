import{S,i as u,a as w}from"./assets/vendor-b52d9f5e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const y=document.querySelector("#searchForm"),m=document.querySelector("#gallery"),p=document.querySelector(".loader"),s=document.querySelector(".loadbutton");s.addEventListener("click",k);y.addEventListener("submit",v);const E=document.getElementById("searchInput"),q=new S(".gallery a"),f=40;let l=1,c="";s.style.display="none";async function h(t){const o="41990967-a01a4811db23696ec0b17c82e",n="https://pixabay.com/api/",a={key:o,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:l,per_page:f};try{const{data:e}=await w(n,{params:a});return e}catch{d()}finally{p.style.display="none"}}function g(t){if(t.hits.length===0)s.style.display="none",u.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!"});else if(P(t.hits),l!==1){const n=document.querySelector(".carditem").getBoundingClientRect().height;console.log(n),window.scrollBy({top:n,behavior:"smooth"})}t.totalHits/f>=l?s.style.display="block":(s.style.display="none",u.warning({title:"Caution",message:"We're sorry, but you've reached the end of search results."}))}async function v(t){if(t.preventDefault(),s.style.display="none",c=E.value.trim(),l=1,m.innerHTML="",c!==""){p.style.display="block";try{const o=await h(c);g(o)}catch{d()}y.reset()}}async function k(){l+=1;try{const t=await h(c);g(t)}catch{d()}}function P(t){const o=t.map(({webformatURL:n,largeImageURL:a,tags:e,likes:r,views:i,comments:b,downloads:L})=>`<li class="carditem">
    <a href="${a}"><img src="${n}" alt="${e}"/>
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
        
      </li>`).join("");m.insertAdjacentHTML("beforeend",o),q.refresh()}function d(t){u.error({title:"Error",message:"An error occurred. Please try again later."})}
//# sourceMappingURL=commonHelpers.js.map
