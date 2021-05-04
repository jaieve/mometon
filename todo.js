const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = 'toDos';
let ID_NUMBERS = 1;
let toDos = [];


//마지막수강한 강의 댓글보고 수정하기
function deleteToDO(event){
    const btn = event.target
    const li = btn.parentElement;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    while(toDoList.firstChild){
        toDoList.removeChild(toDoList.firstChild);
    }
    ID_NUMBERS = 1;
    cleanToDos.forEach(function(toDo){
        toDo.id = ID_NUMBERS;
        paintTodo(toDo.text);
    });
    toDos = cleanToDos;
    saveToDos(toDos);

}

function saveToDos() {
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintTodo(text){
    //console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement('span');
    const newId = ID_NUMBERS++;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDO);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value='';
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos != null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(element => {
            paintTodo(element.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}

init();


