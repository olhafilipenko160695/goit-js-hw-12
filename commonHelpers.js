import{S as g,a as E,i as y}from"./assets/vendor-b52d9f5e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p=document.querySelector("#searchForm"),m=document.querySelector("#gallery"),f=document.querySelector(".loader"),l=document.querySelector(".loadbutton");l.addEventListener("click",$);p.addEventListener("submit",S);const b=document.getElementById("searchInput"),A=new g(".gallery a");let u=1,c="";l.style.display="none";async function h(o){const d=`https://pixabay.com/api/?key=41990967-a01a4811db23696ec0b17c82e&q=${o}&image_type=photo&orientation=horizontal&safesearch=${!0}&page=${u}&per_page=${40}`;try{const{data:s}=await E(d);s.hits.length===0?(l.style.display="none",y.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!"})):L(s.hits),s.totalHits/40>=u?l.style.display="block":(l.style.display="none",y.error({title:"Error",message:"We're sorry, but you've reached the end of search results."}))}catch{P()}finally{f.style.display="none"}}function S(o){o.preventDefault(),l.style.display="none",c=b.value.trim(),u=1,m.innerHTML="",c!==""&&(f.style.display="block",h(c),p.reset())}function $(){u+=1,h(c);const r=document.querySelector(".carditem").getBoundingClientRect().height;console.log(r),window.scrollBy({top:r,behavior:"smooth"})}function L(o){const r=o.map(({webformatURL:a,largeImageURL:i,tags:e,likes:t,views:n,comments:d,downloads:s})=>`<li class="carditem">
    <a href="${i}"><img src="${a}" alt="${e}"/>
        <ul>
          <li>
            <p><b>Likes</b> ${t}</p>
          </li>
          <li>
           <p><b>Views</b> ${n}</p>
          </li>
          <li>
            <p><b>Comments</b> ${d}</p>
          </li>
          <li>
            <p><b>Downloads</b>${s}</p>
          </li>
        </ul>
    </a>
        
      </li>`).join("");m.insertAdjacentHTML("beforeend",r),A.refresh()}function P(o){y.error({title:"Error",message:"An error occurred. Please try again later."})}
//# sourceMappingURL=commonHelpers.js.map
