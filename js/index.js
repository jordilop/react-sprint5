"use strict";
const API_URL = 'https://icanhazdadjoke.com/';
const TEXT_INIT = 'Anem a riure una mica... &#128516';
document.getElementById('joke').innerHTML = TEXT_INIT;
const reportAcudits = [];
function nextJoke() {
    const HTMLResponse = document.getElementById('joke');
    HTMLResponse.innerHTML == TEXT_INIT ? document.getElementById('scores').style.display = "inline" : false;
    fetch(API_URL, {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => HTMLResponse.innerHTML = data.joke)
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
        console.clear();
        console.log(reportAcudits);
    }
    else {
        alert(`Error! Ja has valorat aquest acudit`);
    }
}
