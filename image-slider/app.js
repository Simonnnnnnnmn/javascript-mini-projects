let index = 0;
const imgs = document.querySelectorAll(".images img");
let id = null;


console.log(imgs);
initialize();
function initialize() {
    imgs[0].classList.add("display");
    id = setInterval(next, 2000);
}


function prev() {

}

function show(idx) {
    imgs.forEach(image => {
        image.classList.remove("display");
    })

    imgs[idx].classList.add("display");
}

function next() {
    
    if (index >= imgs.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    show(index);
}

function prev() {
    
    clearInterval(id);
    if (index > 0) {
        index--;
    }
    else {
        index = imgs.length - 1;
    }
    console.log(index);
    show(index);
}

