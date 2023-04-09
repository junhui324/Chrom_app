const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

//모든 이벤트리스너 함수의 첫번째 argument는 항상 지금 막 실행된 event에 대한 정보가 된다.
function onLoginSubmit(event) {
    event.preventDefault(); //기본 동작이 실행되는 거 막기

    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username); //local storage에 유저 이름 저장하기

    loginForm.classList.add(HIDDEN_CLASSNAME); //hidden이라는 클래스 추가

    paintGreetings(username);
}

//greeting에 텍스트 Hello ${username}을 추가 후, hidden class 명을 지워주는 함수
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    //로컬 스토리지에 저장된 유저이름이 없다면
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME); //로그인 폼의 hidden 클래스 지워주기
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}
