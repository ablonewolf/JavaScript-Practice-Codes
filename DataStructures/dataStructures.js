'use strict';

const openingHours = {
  sun: {
    open: '10:00 AM',
    close: '11:00 PM'
  },
  mon: {
    open: '11:00 AM',
    close: '10:00 PM'
  },
  restOfDays: {
    open: '09:00 AM',
    close: '12:00 AM'
  }
};

const restaurant = {
  name: 'Star Kabab',
  location: 'Jhigatola',
  categories: ['Bangladeshi', 'Indian', 'Moghlai', 'Chinese'],
  starterMenu: ['Naan', 'Shahi Porata', 'Mixed Vegetables'],
  mainCourse: ['Chicken Biriyani', 'Kacchi Biriyani', 'Tandoori', 'Kabab'],
  order: function (starter, main) {
    return [this.starterMenu[starter], this.mainCourse[main]];
  },
  hours: openingHours
};

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (let day of days) {
  // console.log(day);
  let open = restaurant.hours[day]?.open ?? 'closed';
  let message =
    open == 'closed'
      ? `We are closed on ${day}.`
      : `On ${day}, we are open at ${open}.`;
  console.log(message);
}

// Destructuring Arrays.
const list = [1, 2, 3, 4];
let [a, b, c, d] = list;
// console.log(a, b, c, d);

let [firstItem, hour, secondItem] = restaurant.categories;
/* console.log(firstItem, secondItem); */

// swaping variables
[firstItem, secondItem] = [secondItem, firstItem];
/* console.log(firstItem, secondItem);

console.log(restaurant.order(0, 3)); */

// nested array destructuring
let nestedArray = [1, 2, [3, 4]];
let [p, , [, q]] = nestedArray;
// console.log(p, q);

// default values

let arr = [9, 10];
let [x = 1, y = 1, z = 1] = arr;
// console.log(x, y, z);

// Destructuring Objects

let { name, categories } = restaurant;
// console.log(name, openingHours, categories);

let {
  name: restaurantName = '',
  openingHours: hours = {},
  categories: types = []
} = restaurant;

// console.log(restaurantName, openingHours, types);

// mutating variables

a, (b = 11), 22;

let obj = { a: 23, b: 7, c: 55 };

({ a, b } = obj);

// console.log(a, b);

// practicing nullish coalescing operator.
let rest1 = {
  name: 'Tasty Treat',
  numGuests: 20
};

let rest2 = {
  name: "Khana's",
  owner: 'Nourin'
};

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner ??= 'ANONYMOUS';
console.log(rest1, rest2);

const engineers = new Set(['Arka', 'Mosfik', 'Zareen', 'Tahiyat']);
// console.log(engineers);
engineers.add('Rabbi');
engineers.add('Akif');
// console.log(engineers);
engineers.delete('Akif');
// console.log(engineers);

const engineersArray = [...engineers];
// console.log(engineersArray);

const engineer = new Map();
engineer.set('Name', 'Arka Bhuiyan');
engineer.set('Age', 25);
engineer.set('Designation', 'Software Engineer');
engineer.set('Institute', 'University of Dhaka');
console.log(engineer.set('Organization', 'BJIT'));
engineer.set('Language', ['English', 'Bengali']);
engineer.set('Programming Languages', [
  'Java',
  'Python',
  'C',
  'JavaScript',
  ''
]);
// console.log(engineer);
// console.log(engineer.has('Language'));
engineer.delete('Age');
// console.log(engineer);
// console.log(engineer.size);

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  ['Option 1', 'C'],
  ['Option 2', 'Java'],
  ['Option 3', 'JavaScript'],
  ['Option 4', 'Python'],
  ['Correct', 'Option 4'],
  ['true', 'Correct'],
  ['false', 'try again']
]);

console.log(question);

// console.log(restaurant);

// console.log(Object.entries(openingHours));

// convert an object to map
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

console.log(question.get('question'));

let i = 0;
for (let [key, value] of question) {
  if (key.startsWith('Option')) {
    i++;
    console.log(`Answer ${i} : ${value}.`);
  }
}

var prompt = require('prompt');
prompt.start();
// const answer = Number(prompt('Your Answer?'));
// const answer = WScript.StdIn.ReadLine();
console.log('Your Answer?');
prompt.get(['answer'], function (err, res) {
  console.log(res.answer);
  let choice = `Option ${res.answer}`;
  if (question.has(choice)) {
    if (question.get('Correct') === choice) {
      console.log('You are right. Congrats');
    } else {
      console.log('Oops. Bad luck. Try next time');
    }
  } else {
    console.log('Invalid choice');
  }
});
