// selects all planets
// changes each planet's animation duration
// has a single value (multiplier) that changes
// each planet's animation duration will multiply the single value by a factor
// the multiplier changes according to the slow and fast buttons

let multiplier = 1;

const slowButton = document.querySelector('#slow');
const resetButton = document.querySelector('#reset');
const fastButton = document.querySelector('#fast');

slowButton.addEventListener('mousedown', () => {
  // if (multiplier <= 1.5) {
  //   multiplier += 0.25
  // } else if (multiplier <= 0.1) {
  //   multiplier += 0.0025
  // }  
  // else {
  //   multiplier += 2.55;
  // }
  if (multiplier <= 5 && multiplier > 1) {
    multiplier += 1;
  }
  else if (multiplier <= 1 && multiplier >= 0.5) {
    multiplier += 0.25;
  } else if (multiplier < 0.5 && multiplier >= 0.1) {
    multiplier += 0.025
  } else if (multiplier <= 0.1) {
    multiplier += 0.0025
  } 
  else {
    multiplier += 2.55;
  }
  console.log(multiplier)
  TranslationSpeedChanger();
})

resetButton.addEventListener('mousedown', () => {
  multiplier = 1;
  TranslationSpeedChanger();
})

fastButton.addEventListener('mousedown', () => {  
  if (multiplier <= 5 && multiplier > 1) {
    multiplier -= 1;
  }
  else if (multiplier <= 1 && multiplier >= 0.5) {
    multiplier -= 0.25;
  } else if (multiplier < 0.5 && multiplier >= 0.1) {
    multiplier -= 0.025
  } else if (multiplier <= 0.1) {
    multiplier -= 0.0025
  } 
  else {
    multiplier -= 2.55;
  }
  console.log(multiplier)
  TranslationSpeedChanger();
})

const mercure = document.querySelector('#mercure'); // 2s
const venus = document.querySelector('#venus'); // 4s
const terre = document.querySelector('#terre'); // 6s
const mars = document.querySelector('#mars'); // 10s
const jupiter = document.querySelector('#jupiter'); // 50s
const saturne = document.querySelector('#saturne'); //100s
const uranus = document.querySelector('#uranus'); // 220s
const neptune = document.querySelector('#neptune'); // 440s

const TranslationSpeedChanger = () => {
  mercure.style.animationDuration = (2 * multiplier).toString() + "s";
  venus.style.animationDuration = (4 * multiplier).toString() + "s";
  terre.style.animationDuration = (6 * multiplier).toString() + "s";
  mars.style.animationDuration = (10 * multiplier).toString() + "s";
  jupiter.style.animationDuration = (50 * multiplier).toString() + "s";
  saturne.style.animationDuration = (100 * multiplier).toString() + "s";
  uranus.style.animationDuration = (220 * multiplier).toString() + "s";
  neptune.style.animationDuration = (440 * multiplier).toString() + "s";
}


