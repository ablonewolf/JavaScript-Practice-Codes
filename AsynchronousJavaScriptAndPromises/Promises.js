const lotteryPromise = new Promise((resolve, reject) => {
  console.log(`Lottery is happening. 🤞🏻`);
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve(`You won the lottery. 🥰🥰`);
    } else {
      reject(new Error(`You lost your money 😭😭`));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promisifying setTimeout function
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds);
  });
};

wait(2)
  .then(() => {
    console.log(`I waited for 2 seconds.`);
    return wait(3);
  })
  .then(() => {
    console.log(`I waited for 3 seconds.`);
  });
