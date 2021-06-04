export default class APIServices {
    constructor() {
        this.searchImg = '';

        this.BASE_URL = 'https://pixabay.com/api/';
        this.keyAPI = '21900580-a9d3faca1e1a077fd5c5f4e0a';

        this.perPage = 12;
        this.currentPage = 1;
    }

    getImage() {
        return fetch(`${this.BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchImg}&page=${this.currentPage}&per_page=${this.perPage}&key=${this.keyAPI}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert("Ошибка HTTP: " + response.status);
                } 
            })
            .then(data => {
                this.incrementCurrentPage();
                // console.log(data.hits);
                return data.hits;
            })
    }

    incrementCurrentPage() {
        this.currentPage += 1;
    }

    resetCurrentPage() {
        this.currentPage = 1;
    }
}
// // https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ