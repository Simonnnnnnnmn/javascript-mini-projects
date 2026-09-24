lucide.createIcons();

const length = document.getElementById("length");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const numbers = document.getElementById("numbers");
const symbol = document.getElementById("symbol");
const password = document.getElementById("password");



function generatePassword() {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const numbers = "0123456789";

    const symbol = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let letters = "";

    if (upper.checked) {
        letters += uppercase;
    }
    if (lower.checked) {
        letters += lowercase;
    }
    if (numbers.checked) {
        letters += numbers;
    }
    if (symbol.checked) {
        letters += symbol;
    }

    if (length.value  < 0) {
        password.value = "Invalid Password Length."
    }  

    if (letters.length == 0) {
        password.value = "You must select an option"
    }

    let result = "";

    for (let i = 0; i < letters.length; i++) {
        let index = Math.floor(Math.random() * letters.length) + 1;
        console.log(index);
        result += letters[index];
    }



    password.value = result;

    

}

function copyPassword() {
    navigator.clipboard.writeText(password.value);
}

