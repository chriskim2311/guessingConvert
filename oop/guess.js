$(document).ready(startApp);

function startApp(){
    GuessingGame;

}



class GuessingGame{
    constructor() {
        this.secretNumber;
    }
    guess_start() {
        this.secretNumber = this.pickRandomNumber(1,10);
        this.attachHandlers();
    }
    pickRandomNumber(min,max) {
        return Math.floor( Math.random() * (max-min)) + min;
    }
    attachHandlers(){
        $("#submitGuess").click( this.handleGuess.bind(this) );
        $("#userGuess").focus( this.clearGuess.bind(this) );
    }
    handleGuess() {
        this.userGuess = parseInt($("#userGuess").val());
        if (this.userGuess < 1 || this.userGuess > 10) {
            this.displayResult('invalid range.  Must be between 1 and 10');
            return;
        }

        if (this.userGuess === this.secretNumber) {
            this.displayResult('you got it!');
        } else if (this.userGuess < this.secretNumber) {
            this.displayResult('too low!');
        } else if (this.userGuess > this.secretNumber) {
            this.displayResult('too high!');
        }
    }
    clearGuess() {
            $("#userGuess").val('');
    }
    displayResult( message ){
        $("#display").text( message );
    }

}
