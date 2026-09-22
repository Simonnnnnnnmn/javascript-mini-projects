const submitBtn = document.getElementById("btn");
const ageInput = document.getElementById("age");
const result = document.getElementById("result");
let age;

submitBtn.onclick = function() {
    age = Number(ageInput.value);

    if (age >= 100) {
        result.textContent = "Impossible";
    }
    else if (age >= 60) {
        result.textContent = "You are a old guy";
    }

    else {
        result.textContent = "Welcome";
    }
}
