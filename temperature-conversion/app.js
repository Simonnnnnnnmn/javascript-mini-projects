console.log("app.js loaded");

const input = document.getElementById("temp");
const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const result = document.getElementById("result");
let temp;



function convert() {
    temp = Number(input.value);
    if (celcius.checked) {
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + "°F";
    }
    else if (fahrenheit.checked) {
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp + "°C";
    }
    else {
        result.textContent = "You must select an option";
    }
}