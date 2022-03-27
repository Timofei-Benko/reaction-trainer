import { getRandomBetween, setUpPlayground } from './helpers';
import './style.css';
import { countDown, countDownToZero } from './helpers/countDown';

const ANIMATION_OPTIONS: KeyframeAnimationOptions = {
  duration: 300,
  fill: 'forwards',
  easing: 'ease-in-out',
};

const ROWS = 40;
const COLS = 40;

const sectionWrap = document.querySelector('.section-wrap')!;
const startBtn = document.querySelector('.btn-start')!;
const pickTimeBtns = document.querySelectorAll<HTMLButtonElement>('.btn-pick-time')!;
const countdown = document.querySelector('.countdown')!;

startBtn.addEventListener('click', () => {
  sectionWrap.animate([
    {transform: 'translateY(-100vh)'}
  ], ANIMATION_OPTIONS);
});

pickTimeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    setUpPlayground({rows: ROWS, cols: COLS});
    sectionWrap.animate([
      {transform: 'translateY(-200vh)'}
    ], ANIMATION_OPTIONS);

    let startTime = (+btn.dataset.time! * 1000);
    const countDownToZero = setInterval(() => {
      countdown.innerHTML = ((startTime - 1000) / 1000).toFixed(1);
      startTime -= 100;
      if (startTime === 900) {
        clearInterval(countDownToZero);
        countdown.innerHTML = '0';
      }
    }, 100);

    const bubbleAnchors = document.querySelectorAll('.grid-item')!;

    const spawnBubbles = setInterval(() => {
      bubbleAnchors[getRandomBetween(0, ROWS * COLS - 1)].innerHTML = `
        <div class="bubble"></div>
      `;

      if (startTime === 1000) {
        clearInterval(spawnBubbles);
      }
    }, 500);

  });
});


