import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function getPictures(search){
    return fetch(`https://pixabay.com/api/?key=44929764-df5ad93c9d917838a072df550&q=${search}&image_type=photo&orientation=horizontal&safesearch=true`).then((res)=> {
        //console.log(res);
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
    });
};
//const arr=[];
//export function masPictures(search) {
    //return getPictures(search).then(data => {
        //const arr = data.hits.map((rez) => {
            //const qaz = { webformatURL: rez.webformatURL, largeImageURL: rez.largeImageURL, tags: rez.tags, likes: rez.likes, views: rez.views, comments: rez.comments, downloads: rez.downloads, };
            //return qaz;
        //});
        //if (data.hits[0] == undefined) {
            //iziToast.show({
                //color: '#ef4040',
                //position: 'topRight',
                //title: 'Error',
                //message: 'Sorry, there are no images matching your search query. Please try again!'
            //})
            //return Error;
        //}
        //return arr;
    //}).catch(err => iziToast.show({
                    //color: '#ef4040',
                    //position: 'topRight',
                    //title: 'Error',
                    //message: err
                //}))
//}

