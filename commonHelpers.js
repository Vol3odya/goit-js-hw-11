import{S as c,i}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();function u(o){let e="";o.forEach(t=>{e+=`<li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
                <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}"/>
            </a>
            <ul class="gallery-ul">
                <li class="gallery-li">
                    <h3 class="gallery-title">Likes</h3>
                    <p class="gallery-par">${t.likes}</p>
                </li>
                <li class="gallery-li">
                    <h3 class="gallery-title">Views</h3>
                    <p class="gallery-par">${t.views}</p>
                </li>
                <li class="gallery-li">
                    <h3 class="gallery-title">Comments</h3>
                    <p class="gallery-par">${t.comments}</p>
                </li>
                <li class="gallery-li">
                    <h3 class="gallery-title">Downloads</h3>
                    <p class="gallery-par">${t.downloads}</p>
                </li>
            </ul>
        </li>`});const s=document.querySelector(".gallery");s.textContent="",s.insertAdjacentHTML("beforeend",e),new c(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"})}function g(){document.querySelector(".gallery").insertAdjacentHTML("afterbegin",'<div class="loader"></div>')}function n(){const o=document.querySelector(".gallery");o.textContent="",new c(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}).refresh()}function f(o){return fetch(`https://pixabay.com/api/?key=44929764-df5ad93c9d917838a072df550&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const p=document.querySelector("form");p.addEventListener("submit",d);function d(o){if(o.preventDefault(),n(),o.target.elements.text.value==""){i.show({color:"#ef4040",position:"topRight",title:"Error",message:"Sorry, please enter the correct value!"});return}g(),m(o.target.elements.text.value).then(e=>{u(e)}).catch(e=>{n(),console.error(e)})}function m(o){return f(o).then(e=>{const s=e.hits.map(t=>({webformatURL:t.webformatURL,largeImageURL:t.largeImageURL,tags:t.tags,likes:t.likes,views:t.views,comments:t.comments,downloads:t.downloads}));return e.hits[0]==null?(i.show({color:"#ef4040",position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),Error):s}).catch(e=>i.show({color:"#ef4040",position:"topRight",title:"Error",message:e}))}
//# sourceMappingURL=commonHelpers.js.map
