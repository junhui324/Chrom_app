const clock = document.querySelector('h2#clock');

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // website가 load 되자마자 getClock() 실행하기
setInterval(getClock, 1000); // 매초마다 getClock() 실행하기

//setInterval("내가 실행하고자 하는 함수", 함수 호출 간격(ms단위)) -> 몇초 간격으로 함수 반복 호출
//setInterval(getClock, 5000);
//setTimeout("내가 실행하고자 하는 함수", 함수 호출 간격(ms단위)) -> 몇초 후, 함수 호출할 지
//setTimeout(getClock, 5000);

//기존문자열.padStart(숫자, "추가할 문자열")
//기존문자열의 길이가 첫번째 인자 미만이면, 기존문자열 앞(start)에 추가할 문자열을 추가해주는 함수.
//"1".padStart(2, "0")  -> 결과 : "01"
