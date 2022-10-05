"use strict";
const API_URL = 'https://icanhazdadjoke.com/';
function validate() {
    fetch(API_URL, {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => console.log(data.joke))
        .catch(error => console.log(error));
}
