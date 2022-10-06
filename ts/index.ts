const API_URL: string = 'https://icanhazdadjoke.com/';
const TEXT_INIT: string = 'Anem a riure una mica... &#128516';

interface IJoke {
    joke: string,
    score: number,
    date: string
}

document.getElementById('joke')!.innerHTML = TEXT_INIT;
const reportAcudits: IJoke[] = [];

function nextJoke() {
    const HTMLResponse = document.getElementById('joke')!;
    HTMLResponse.innerHTML == TEXT_INIT ? document.getElementById('scores')!.style.display = "inline": false;

    fetch(API_URL, {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => HTMLResponse.innerHTML = data.joke)
        .catch(error => console.log(error));
}

function saveScore(score: number) {
    const joke: string = document.getElementById('joke')!.innerHTML;
    const indexReport: number = reportAcudits.findIndex(element => element.joke == joke);
    if(indexReport == -1) {
        const date: Date = new Date();
        const acudit: IJoke = {
            joke: joke,
            score: score,
            date: date.toISOString()
        };
        reportAcudits.push(acudit);
        console.clear();
        console.log(reportAcudits);
    } else {
        alert(`Error! Ja has valorat aquest acudit`);
    }
}

