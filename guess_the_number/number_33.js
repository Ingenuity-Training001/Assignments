var btn_start = document.getElementById("start");
var btn_reset = document.getElementById("reset");
var btn_check = document.getElementById("check");

var main_div = document.getElementById("main-div");

var guess_box = document.getElementById("guess-box");
var all_guesses = document.getElementById("all-guesses");
var high_or_low = document.getElementById("high-or-low");

var random_num = Math.floor(Math.random() * 100) + 1;
// console.log(random_num)

var count_guess = 1;
window.onkeypress=function(e){
    if(e.keyCode==13){
        checkGuess()
    }
}
function start() {
    main_div.style.visibility = "visible";
}

function checkGuess() {
    var your_guess = Number(guess_box.value);

    if (count_guess <= 10) {
        if (your_guess < random_num) {
            all_guesses.textContent += your_guess + " ";
            high_or_low.textContent = "Your Guess is Low";
            high_or_low.classList.add("wrong");
            count_guess++;
            guess_box.value = '';
            // document.getElementById("container").style.backgroundColor ="rgb(233, 158, 158)";
        }
        else if (your_guess > random_num) {
            all_guesses.textContent += your_guess + " ";
            high_or_low.textContent = "Your Guess is High";
            high_or_low.classList.add("wrong");
            count_guess++;
            guess_box.value = '';
            // document.body.style.backgroundColor ="rgb(233, 158, 158)"
        }
        else {
            all_guesses.textContent += your_guess + " ";
            high_or_low.textContent = "Congratulations! You Guessed it Right.";
            high_or_low.classList.add("success");
            guess_box.value = '';
            gameOver();
             document.body.style.backgroundColor="rgb(143, 245, 143)"
        }
    }
    else {
        all_guesses.textContent += your_guess + " ";
        high_or_low.textContent = "Game Over! Sorry, your chances are over.";
        high_or_low.classList.add("wrong");
        guess_box.value = '';
        gameOver();
    }
}

function gameOver() {
    btn_check.disabled = true;
    guess_box.disabled = true;
}