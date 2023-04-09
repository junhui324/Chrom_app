const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//내가 누른 버튼 : event.target
//내가 누른 버튼의 부모 : event.target.parentElement
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove(); //내가 누른 버튼의 부모(여기선 li) 삭제
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //toDo.id는 number, li.id는 string

    //toDos DB에서 todo를 지운 뒤에 saveToDos 한 번 더 불러야함
    saveToDos();
}

function paintTodo(newTodoObj) {
    const li = document.createElement('li');
    li.id = newTodoObj.id;
    const span = document.createElement('span');
    span.innerText = newTodoObj.text;

    const button = document.createElement('button');
    button.innerText = '❌'; //이모지 단축키 : 윈도우키 + .
    button.addEventListener('click', deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = '';

    const newTodoObj = {
        //todos 삭제하기 위해 id값 주기
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);

    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    //localStorage에 toDo들이 있으면
    const parsedToDos = JSON.parse(savedToDos);

    //toDos에 parsedToDos를 넣어서 전에 있던 todos 복원
    //이걸 안해주면 새로고침 하고 localStorage에 새로운 todo들을 넣을 때 마다
    //localStorage에 있는 todos가 새로 입력한 todo들로 덮어씌워진다.
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}
