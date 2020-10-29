const toDoForm = document.querySelector(".js-todoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = 'todos';


function paintTodo(text){
    console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML="DELETE";
    const span = document.createElement("span");
    span.innerText(text); 
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value=" ";
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
};

init();