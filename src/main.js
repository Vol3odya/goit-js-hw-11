import { zapit } from "./js/render-functions";
import { delite } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector('form');
form.addEventListener('submit', submit);
function submit(evt) {
    evt.preventDefault();
    delite();
    if (evt.currentTarget[0].value == '') {
        iziToast.show({
            color: '#ef4040',
            position: 'topRight',
            title: 'Error',
            message: 'Sorry, please enter the correct value!'
        })
        return;
    }
    zapit(evt.currentTarget[0].value);
}