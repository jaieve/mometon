const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImageLoad(image){
    console.log("Finished Loadied!");
    image.classList.add("bgImage");
    body.prepend(image);
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `/nomadCoder/vanila/images/${imgNumber}.jpg`;
    image.addEventListener("load",handleImageLoad(image));

}
function genRandom(){
    const number = Math.ceil(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
    function name(params) {
        
    }
}

init();