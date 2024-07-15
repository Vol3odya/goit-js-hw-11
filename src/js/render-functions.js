import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { masPictures } from "./pixabay-api";

function gallery(arr) {
    let code = '';
    arr.forEach(elm => {
        code += `<li class="gallery-item">
            <a class="gallery-link" href="${elm.largeImageURL}">
                <img class="gallery-image" src="${elm.webformatURL}" alt="${elm.tags}"/>
            </a>
            <ul class="gallery-ul">
                <li class="gallery-li">
                    <h3 class="gallery-title">Likes</h3>
                    <p class="gallery-par">${elm.likes}</p>
                </li>
                <li class="gallery-li">
                    <h3 class="gallery-title">Views</h3>
                    <p class="gallery-par">${elm.views}</p>
                </li>
                <li class="gallery-li">
                    <h3 class="gallery-title">Comments</h3>
                    <p class="gallery-par">${elm.comments}</p>
                </li>
                <li class="gallery-li">
                    <h3 class="gallery-title">Downloads</h3>
                    <p class="gallery-par">${elm.downloads}</p>
                </li>
            </ul>
        </li>`;
    });
    const ul = document.querySelector('.gallery');
    ul.textContent = '';
    ul.insertAdjacentHTML("beforeend", code);
    const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionPosition:'bottom', captionsData: "alt" });
}
export function zapit(evt) {
    const ul = document.querySelector('.gallery');
    ul.insertAdjacentHTML("afterbegin", '<div class="loader"></div>');
    //ul.textContent = '<div class="loader"></div>';
    masPictures(evt).then((res) => gallery(res)).catch((err) => {ul.textContent = ''; console.error(err) });
}
export function delite() {
    const ul = document.querySelector('.gallery');
    ul.textContent = '';
    new SimpleLightbox('.gallery a', { captionDelay: 250, captionPosition: 'bottom', captionsData: "alt" }).refresh();
}