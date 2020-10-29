const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";
const SHONWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text)
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    // console.log(currentValue)
    paintGreeting(currentValue);
    saveName(currentValue)
}

function askFormName() {
    form.classList.add(SHONWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHONWING_CN)
    greeting.classList.add(SHONWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askFormName();
    }else {
        paintGreeting(currentUser)
    }
}

function init() {
    loadName();
}
init();