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
