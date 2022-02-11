var answerbox = document.getElementById('answer');
var snoopdogg = document.getElementById('SnoopDogg');
var player = document.getElementById('player');
var randNum = Number(randNum);
var guessNum = Number(guessNum);
var trys = 0;



randNum = Math.round(Math.random() * 99 ) + 1;
console.log(randNum);


function sendData(form) {
    trys++;

    guessNum = form.inputbox.value;

    if (guessNum != randNum) {
        if (guessNum > randNum) {
            answerbox.innerHTML = guessNum + ' is too high, try lower numbers!';
            form.inputbox.value = ""; 

        } else if(guessNum < randNum) {
            answerbox.innerHTML = guessNum + ' is too low, try higher numbers!';
            form.inputbox.value = ""; 

        }
    } else if (guessNum == randNum) {
        answerbox.style.color = '#00ff00';
        answerbox.innerHTML = "You got It " + guessNum + " was the right choice, it took you " + trys + " try(s)";
        snoopdogg.innerHTML = ("<img border=0 src=\"https://media.giphy.com/media/TeBpzQZRaBIC4/giphy.gif\" />");
        player.innerHTML = ("<iframe width=560 height=315 src=\"https://www.youtube.com/embed/vg7ZrQKExIo?rel=0&autoplay=1\" frameborder=0></iframe>");
       

    }
}
