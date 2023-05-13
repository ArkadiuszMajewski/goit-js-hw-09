import Notiflix from 'notiflix';
const delay = document.querySelector(`[name="delay"]`);
const step = document.querySelector(`[name="step"]`);
const amount = document.querySelector(`[name="amount"]`);
const form = document.querySelector('.form');

let position = 0;
const createPromise = (position, delay) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(
          '`✅ Fulfilled promise ${position} in ${new Date().getTime() - clickTime}ms`'
        );
      } else {
        reject(
          '`❌ Rejected promise ${position} in ${new Date().getTime() - clickTime}ms`'
        );
      }
    }, delay);
  });

const resolveHandler = result => (
  (position += 1),
  Notiflix.Notify.success(
    `✅ Fulfilled promise ${position} in ${new Date().getTime() - clickTime}ms`
  )
);
const rejectHandler = result => (
  (position += 1),
  Notiflix.Notify.failure(
    `❌ Rejected promise ${position} in ${new Date().getTime() - clickTime}ms`
  )
);

let clickTime = 0;
form.addEventListener('submit', event => {
  event.preventDefault();
  clickTime = new Date().getTime();

  for (let i = 0; i < [amount.value]; i++) {
    createPromise(2, delay.value).then(resolveHandler).catch(rejectHandler);
  }
  position = 0;
});
