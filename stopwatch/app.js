let startTime = null;
let id = null;
let elapsedTime = 0;



function start() {
    if (id != null) {
        return;
    }

    const now = Date.now();
    startTime = now - elapsedTime;
    id = setInterval(update, 10);
}

function stop() {
    if (id == null) return;
    elapsedTime = Date.now() - startTime;
    clearInterval(id);
    id = null;
}

function reset() {
    startTime = null;
    elapsedTime = 0;
    clearInterval(id);
    id = null;
    document.getElementById("time").textContent = "00:00:00:00"
}

function update() {
    const current = Date.now();
    const elapsed = current - startTime;
    
    const hour = Math.floor(elapsed / (60 * 60 * 1000)).toString().padStart(2, 0);
    const minutes = Math.floor((elapsed / (1000 * 60)) % (60)).toString().padStart(2, 0);
    const seconds = Math.floor((elapsed / 1000) % (60)).toString().padStart(2, 0);
    const miliseconds = Math.floor(elapsed /10) % (100).toString().padStart(2, 0);

    const time = `${hour}:${minutes}:${seconds}:${miliseconds}`;

    document.getElementById("time").textContent = time;


}