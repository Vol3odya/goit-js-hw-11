import { zapit } from "./js/render-functions";
import { delite } from "./js/render-functions";
import { gallery } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getPictures } from "./js/pixabay-api";
const form = document.querySelector('form');
form.addEventListener('submit', submit);
function submit(evt) {
    evt.preventDefault();
    delite();
    //console.log(evt.target.elements.text.value);
    if (evt.target.elements.text.value == '') {
        iziToast.show({
            color: '#ef4040',
            position: 'topRight',
            title: 'Error',
            message: 'Sorry, please enter the correct value!'
        })
        return;
    }
    zapit();
    //zapit(evt.currentTarget[0].value);
    masPictures(evt.target.elements.text.value).then((res) => { gallery(res) }).catch((err) => {delite(); console.error(err) });
}
function masPictures(search) {
    return getPictures(search).then(data => {
        const arr = data.hits.map((rez) => {
            const qaz = { webformatURL: rez.webformatURL, largeImageURL: rez.largeImageURL, tags: rez.tags, likes: rez.likes, views: rez.views, comments: rez.comments, downloads: rez.downloads, };
            return qaz;
        });
        if (data.hits[0] == undefined) {
            iziToast.show({
                color: '#ef4040',
                position: 'topRight',
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!'
            })
            return Error;
        }
        return arr;
    }).catch(err => iziToast.show({
                    color: '#ef4040',
                    position: 'topRight',
                    title: 'Error',
                    message: err
                }))
}