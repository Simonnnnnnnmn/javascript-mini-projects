const display = document.getElementById("display");

function appendToDisplay(c) {
    display.value += c;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    display.value = eval(display.value);
}