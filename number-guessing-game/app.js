const min = 1;
const max = 100;

const correctAnswer = Math.floor((Math.random() * (max - min + 1) + min));


let attempts = 0;
let running = true;
let guess;


while (running) {
    guess = Number(window.prompt("Enter a number"));

    if (isNaN(guess)) {
        window.alert("Enter a valid number");
    }
    else if (guess < min || guess > max) {
        window.alert("Enter a valid number");
    }

    else {
        if (guess < correctAnswer) {
            window.alert("TOO LOW");
        }
        else if (guess > correctAnswer) {
            window.alert("TOO HIGH");
        }
        else {
            window.alert('SUCCESS');
            running = false;
        }
    }
    attempts++;
}