import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
      } else {
        // Reject
        reject(Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
      }
    }, delay);
  });
}

const formEl = document.querySelector('.form');
const createPromiseBtn = document.querySelector('button');

createPromiseBtn.addEventListener('click', (evt) => {
  evt.preventDefault(); 
  const delayValue = parseInt(formEl.elements.delay.value);
  const stepValue = parseInt(formEl.elements.step.value);
  const amountValue = parseInt(formEl.elements.amount.value); 

  for (let i = 1; i <= amountValue; i += 1) {
    const position = i;
    const delay = delayValue + (i - 1) * stepValue;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});
