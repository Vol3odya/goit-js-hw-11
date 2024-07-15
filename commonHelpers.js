import{i,S as n}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(r){if(r.ep)return;r.ep=!0;const l=a(r);fetch(r.href,l)}})();function c(o){return fetch(`https://pixabay.com/api/?key=44929764-df5ad93c9d917838a072df550&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function u(o){return c(o).then(e=>{const a=e.hits.map(t=>({webformatURL:t.webformatURL,largeImageURL:t.largeImageURL,tags:t.tags,likes:t.likes,views:t.views,comments:t.comments,downloads:t.downloads}));return e.hits[0]==null?(i.show({color:"#ef4040",position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),Error):a}).catch(e=>i.show({color:"#ef4040",position:"topRight",title:"Error",message:e}))}function g(o){let e="";o.forEach(t=>{e+=`<li class="gallery-item">
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
        </li>`});const a=document.querySelector(".gallery");a.textContent="",a.insertAdjacentHTML("beforeend",e),new n(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"})}function f(o){const e=document.querySelector(".gallery");e.insertAdjacentHTML("afterbegin",'<div class="loader"></div>'),u(o).then(a=>g(a)).catch(a=>{e.textContent="",console.error(a)})}function p(){const o=document.querySelector(".gallery");o.textContent="",new n(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}).refresh()}const d=document.querySelector("form");d.addEventListener("submit",y);function y(o){if(o.preventDefault(),p(),o.currentTarget[0].value==""){i.show({color:"#ef4040",position:"topRight",title:"Error",message:"Sorry, please enter the correct value!"});return}f(o.currentTarget[0].value)}
//# sourceMappingURL=commonHelpers.js.map
