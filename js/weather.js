const API_KEY = '48a5fd1260a37826f8e477ce54dfde74';

function onGeoOk(position) {
    let latitude = position.coords.latitude; //위도
    let longitude = position.coords.longitude; //경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector('#weather span:first-child');
            const city = document.querySelector('#weather span:last-child');
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}도 `;
        });
}
function onGeError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeError);

//latitude, longitude, 내 API key와 함께 API 부르기
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
