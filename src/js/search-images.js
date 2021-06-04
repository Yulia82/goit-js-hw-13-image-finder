import APIServices from './apiService'
import refs from './refs'
import renderGallery from '../templates/gallery-images.hbs'
import lightbox from './lightbox'
import { inform } from './pnotify'
import { errorInfo } from './pnotify'
// import debounce from 'lodash.debounce'


const getImgUserRequest = new APIServices();

refs.btnLoadMore.addEventListener('click', onBtnLoadMore);
refs.galleryImg.addEventListener('click', onImgCard);
refs.formSearch.addEventListener('submit', onSearch);


function onImgCard(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("img")) {
        return;
    };
    const largeImg = evt.target.dataset.srclarge;

    lightbox(largeImg);
};

function onSearch(evt) {
    evt.preventDefault();

    getImgUserRequest.searchImg = evt.currentTarget.elements.query.value;
    
    if (getImgUserRequest.searchImg == '' || (getImgUserRequest.searchImg.trim().length === 0)) {
        inform('Enter the correct query');
        return;
    };
    
    refs.galleryImg.innerHTML = '';
    getImgUserRequest.resetCurrentPage();

    fetchImg();

    refs.btnLoadMore.classList.remove('is-hidden');
};

function fetchImg() {
    refs.btnLoadMore.setAttribute("disabled", "disabled");
    refs.btnLoadMore.textContent = 'Uploading...';

    getImgUserRequest.getImage().then((images) => {
        if (images.length === 0) {
            inform('Nothing found on your request');
            return;
        };

        imagesOutput(images);

        if (images.length < getImgUserRequest.perPage) {
            refs.btnLoadMore.classList.add('is-hidden');;
        } else {  
            refs.btnLoadMore.removeAttribute("disabled");
            refs.btnLoadMore.textContent = 'Load more' 
        };


    }).catch(error => errorInfo(error));
};

// рисование фото на экране
function imagesOutput(images) {
    refs.galleryImg.insertAdjacentHTML('beforeend', renderGallery(images));

};

function onBtnLoadMore() {
    fetchImg();
    scroll();
};

function scroll() {
    setTimeout(() => {
        refs.btnLoadMore.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        });
    }, 200)
};


