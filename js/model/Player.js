export default class Player{

    name;
    score;
    try;

    constructor(name){
        this.setName(name);
        this.score = 0;
        this.try = 3;
    }

    setName(name){
        if(name != ''){
            this.name = name;
        }else{
            this.name = "Guess";
        }
    }

    getName(){
        return this.name;
    }

    getScore(){
        return this.score;
    }

    decrementTry(){
        if(this.try > 0){
            this.try -= 1;
        }
    }

    getTry(){
        return this.try;
    }

    calculateScore(){
        if(this.try == 3){
            this.score = 100;
        }else{
            this.score = (this.try * 25)
        }
    }
 
}