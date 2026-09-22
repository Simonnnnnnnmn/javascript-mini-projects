function rollDice() {
    const numDice = document.getElementById("numDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImage");

    const results = [];
    const images = [];
    let result;

    for (let i = 0; i < numDice; i++) {
        result = Math.floor(Math.random() * 6) + 1;
        results.push(result);
        images.push(`<img src="images/${result}.png" alt="${result}">`);
    }
    diceImage.innerHTML = images.join("");
}