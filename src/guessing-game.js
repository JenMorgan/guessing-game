class GuessingGame {
    constructor() {
        this.min=min;
        this.max=max;
        this.mid=Math.floor((this.min+this.max)/2);
    }

    setRange(min, max) {
        min=this.min;
        max=this.max;
        this.answer=Math.floor(Math.random()*(max-min+1)+min);
    }

    guess() {
        var guessed = this.mid;
        if (guessed===this.answer){
            return this.answer;
        }
        else if (this.answer<guessed){
            this.lower();
        }
        else if (this.answer>guessed) {
            this.greater();
        }
    }

    lower() {
        var min=this.mid;
        var max=this.max;
        this.answer=Math.floor(Math.random()*(max-min+1)+min);
        this.guess();
    }

    greater() {
        var max=this.mid;
        var min=this.min;
        this.answer=Math.floor(Math.random()*(max-min+1)+min);
        this.guess();
    }
}

module.exports = GuessingGame;
