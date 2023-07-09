'use strict'
const countryAPi = 'https://restcountries.com/v3.1/name/';
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const request = new XMLHttpRequest();
request.open('GET',countryAPi+'bangladesh');
request.send();
console.log(request.responseText);

request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
})