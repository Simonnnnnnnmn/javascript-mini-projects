const pBtn = document.getElementById("p");
const rBtn = document.getElementById("r");
const nBtn = document.getElementById("n");
const tBtn = document.getElementById("t");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");


calculateBtn.onclick = function() {
    const p = Number(pBtn.value);
    const r = Number(rBtn.value);
    const n = Number(nBtn.value);
    const t = Number(tBtn.value);

    const compoundedMoney = p * Math.pow(1 + p / n, n *t);
    result.textContent = compoundedMoney;
};


