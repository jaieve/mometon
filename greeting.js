const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

//클래스 이름 정의
const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(name) {
    localStorage.setItem(USER_LS,name);
}

function handleSubmit(event) {
    //form을 제출하는 이벤트가 발생했을 때 새로고침 방지
    event.preventDefault();
    const currentValue = input.value;
    saveName(currentValue);
    paintGreeting(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //There is not user
        askForName();
    } else {
        //there is user.
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();



//2분 30초부터 다시 보기