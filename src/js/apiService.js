const BASE_URL = 'https://pixabay.com/api/';
const keyAPI = '21900580-a9d3faca1e1a077fd5c5f4e0a';
        
export default class APIServices {
    constructor() {
        this.searchImg = '';
        this.perPage = 12;
        this.currentPage = 1;
    }

    getImage() {
        return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchImg}&page=${this.currentPage}&per_page=${this.perPage}&key=${keyAPI}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert("Ошибка HTTP: " + response.status);
                } 
            })
            .then(data => {
                this.incrementCurrentPage();
                return data.hits;
            })  
    }

    incrementCurrentPage() {
        this.currentPage += 1;
    }

    resetCurrentPage() {
        this.currentPage = 1;
    }
};