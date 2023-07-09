'use strict'
const getCountryData = function (countryName) {
    const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);
    })
}

getCountryData('bangladesh');
getCountryData('india');