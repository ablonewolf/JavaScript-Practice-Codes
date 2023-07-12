'use strict';

const resetElements = function () {
  document.querySelectorAll('.country').forEach((element) => element.remove());
  removeAdjacentText();
  countriesContainer.style.opacity = 0;
  // document.querySelector('.countries').parentElement.remove();
};

const removeAdjacentText = function () {
  const elements = countriesContainer.childNodes;
  elements.forEach((element) => {
    if (element.textContent.startsWith('Something went wrong')) {
      // console.log(element);
      element.remove();
    }
  });
};

const renderError = function (errorMessage) {
  countriesContainer.insertAdjacentText('beforeend', errorMessage);
  countriesContainer.style.opacity = 1;
};

function renderCountryData(data, className = '', parent = '') {
  const html = `<article class="country ${className} ${parent}">
          <img class="country__img" src="${data.flags['png']}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.keys(data.currencies)[0]
            }</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
  if (className !== '') {
    // adding the neighbor indication text.
    const neighborBefore = document.createElement('div');
    neighborBefore.textContent = `Neighbour of ${parent}`;
    neighborBefore.classList.add('neighborBefore');
    const neighbor = document.querySelector(`.${parent}`);
    neighbor.prepend(neighborBefore);
  }
}

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getCountryDataByName = function (countryName) {
  const request = new XMLHttpRequest();
  // AJAX call to fetch country data.
  request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    // render the country data
    renderCountryData(data);
    const neighbor = data.borders?.[0];
    // render the country data by code for the neighbor
    getCountryDataByCode(neighbor, countryName);
    // console.log(data);
  });
};

const getCountryDataByCode = function (countryCode, parentCountry) {
  const request = new XMLHttpRequest();
  // AJAX call to fetch country data.
  request.open('GET', `https://restcountries.com/v3.1/alpha/${countryCode}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    // render the country data
    renderCountryData(data, 'neighbor', parentCountry);
    // console.log(data);
  });
};

const getCountryDataUsingFetch = function (countryName) {
  const request = fetch(`https://restcountries.com/v3.1/name/${countryName}`);
  request
    .then((response) => response.json())
    .then((data) => {
      renderCountryData(data?.[0]);
      const neighbor = data[0].borders?.[0];
      return [neighbor, countryName];
    })
    .then((data) => {
      getCountryDataByCodeUsingFetch(data[0], data[1]);
    })
    .catch((error) => {
      renderError(`Something went wrong 🔥🔥🔥 ${error}`);
    });
};

const getCountryDataByCodeUsingFetch = function (countryCode, parentCountry) {
  const request = fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
  request
    .then((response) => response.json())
    .then((data) => renderCountryData(data[0], 'neighbor', parentCountry));
};

btn.addEventListener('click', function () {
  const countryItems = document.getElementsByClassName('country');
  if (countryItems.length > 0) {
    resetElements();
  }
  removeAdjacentText();
  getCountryDataByName('bangladesh');
  getCountryDataUsingFetch('germany');
});

// getCountryDataByName('bangladesh');
// getCountryDataUsingFetch('germany');
