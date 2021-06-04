import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css';

function lightbox(largeImg) {
    const instance = basicLightbox.create(`
    <img src="${largeImg}" width="800" height="600">
    `)
    
    instance.show();  
};
export default lightbox;