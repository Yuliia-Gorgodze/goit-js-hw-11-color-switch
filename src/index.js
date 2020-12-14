const refs = {
  buttunStart: document.querySelector('[data-action="start"]'),
  buttunStop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

refs.buttunStart.addEventListener('click', changeBgColor);
refs.buttunStop.addEventListener('click', stopChangeBgColor);

let buttunStartActive = true;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBgColor() {
  if (buttunStartActive) {
    timeOutId = setInterval(() => {
      const randomColor = randomIntegerFromInterval(0, colors.length);
      refs.body.style.backgroundColor = colors[randomColor];
      buttunStartActive = false;
      refs.buttunStart.setAttribute('disabled', '');
      console.dir(refs.buttunStart.attributes);
    }, 1000);
  }
}

function stopChangeBgColor() {
  clearTimeout(timeOutId);
  refs.buttunStart.removeAttribute('disabled');
  buttunStartActive = true;
}
