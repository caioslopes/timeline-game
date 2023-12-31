import Api from "./Api.js";

export default class Card{
    constructor(){
        this.card = null;
    }

    getCard(){
        return this.card;
    }

    async createCard(){
        
        let temp = null;

        do{
            temp = await this.tryConsult(temp);
        }while(temp.poster_path == null);

        temp.release_date = temp.release_date.slice(0,4);
        this.card = temp;
        
    }

    async tryConsult(temp){
        const api = new Api();
        let n = this.#getRandomArbitrary(1960, 2023);
        let i = this.#getRandomArbitrary(0, 19);
        const data = await api.consult(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&region=br&page=1&primary_release_year=${n}&sort_by=revenue.desc`);
        temp = data.results[i];
        return temp
    }

    #getRandomArbitrary(min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }

}