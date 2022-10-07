"use strict";
const TEXT_INIT = 'Anem a riure una mica...';
const API = [
    'https://icanhazdadjoke.com/',
    'https://api.chucknorris.io/jokes/random'
];
document.getElementById('joke').innerHTML = TEXT_INIT;
const reportAcudits = [];
function nextJoke() {
    const random = (Math.random() < 0.5) ? 0 : 1;
    const HTMLResponse = document.getElementById('joke');
    const indexReport = reportAcudits.findIndex(element => element.joke == HTMLResponse.innerHTML);
    HTMLResponse.innerHTML == TEXT_INIT || indexReport != -1 ? document.getElementById('scores').style.display = "inline" : false;
    fetch(API[random], {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
        HTMLResponse.innerHTML = (random == 0 ? data.joke : data.value);
        randomBlob();
    })
        .catch(error => console.log(error));
}
function saveScore(score) {
    const joke = document.getElementById('joke').innerHTML;
    const indexReport = reportAcudits.findIndex(element => element.joke == joke);
    if (indexReport == -1) {
        const date = new Date();
        const acudit = {
            joke: joke,
            score: score,
            date: date.toISOString()
        };
        reportAcudits.push(acudit);
        document.getElementById('scores').style.display = "none";
        console.clear();
        console.log(reportAcudits);
    }
    else {
        alert(`Duplicat! Ja has valorat aquest acudit`);
    }
}
navigator.geolocation.getCurrentPosition(success, error);
function success(pos) {
    const { latitude, longitude } = pos.coords;
    getWeather(latitude, longitude);
}
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    //Barcelona coords
    const latitude = 41.38879;
    const longitude = 2.15899;
    getWeather(latitude, longitude);
}
function getWeather(lat, lon) {
    const API_URL_WEATHER = 'https://api.openweathermap.org/data/2.5/weather?';
    const API_KEY = '4a66f1d268b1a5a3a1a510f70941ce8c';
    const units = 'metric';
    const lang = 'ca';
    const GET_WEATHER = `${API_URL_WEATHER}lat=${lat}&lon=${lon}&units=${units}&lang=${lang}&appid=${API_KEY}`;
    const HTMLResponse = document.getElementById('weather');
    fetch(GET_WEATHER)
        .then(response => response.json())
        .then(data => {
        HTMLResponse.innerHTML = `
            <div class="row">
                <div class="col-12 d-flex align-items-center justify-content-center">
                    <img width="50px" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                    <div class="fs-5 fw-bold border-start border-dark ps-2">${data.main.temp.toFixed(1)} °C</div>
                </div>
            </div>
            `;
    })
        .catch(error => console.log(error));
}
window.onload = randomBlob;
let randomPrev = 0;
function randomBlob() {
    const blob = document.getElementById('blob');
    const random = Math.floor(Math.random() * 4) + 1;
    if (random != randomPrev) {
        blob.style.background = `url(./svg/blob-${random}.svg) center no-repeat`;
        randomPrev = random;
    }
    else {
        randomBlob();
    }
}
