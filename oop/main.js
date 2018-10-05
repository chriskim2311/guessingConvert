$(document).ready(startApp);

function startApp() {
    var startGame = new GuessingGame
    startGame.guess_start();
}


function repeatingWord(str) {
    var lowercase = str.toLowerCase();
    lowercase = lowercase.split(" ");
    var array = [];
    var outputObj = {};

    for (vari = 0; i < lowercase.length; i++) {
        outputObj.word = lowercase[i];

        for (j = 0; j < outputObj.word.length; j++) {
            if (outputObj.map[outputObj.word[j]]) {

            }

    else
        {
            outputObj.map = 1
        }
        array.push(outputObj);
    }
for (outputI =0; outputI < output.length; outputI++) {
    for(key in array[outputI].map) {
        if( [key] > highest) {
            highestInd = outputI;
        }
    }
}
        return array[highestInd].word;
}