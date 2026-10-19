const display = document.getElementById("display");

function appendToDisplay(c) {
    display.value += c;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {

        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "ERROR";

    }
    
}
