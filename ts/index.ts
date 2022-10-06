const API_URL = 'https://icanhazdadjoke.com/';

function validate() {
    const HTMLResponse = document.getElementById('joke')!;

    fetch(API_URL, {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => HTMLResponse.innerHTML = data.joke)
        .catch(error => console.log(error));
}

