import startGame from '../index.js';
import getRandomNum from '../utils.js';

const condition = 'What number is missing in the progression?';
const progressionLength = 10;
const minStepValue = 2;
const minStartValue = 1;
const maxStepValue = 9;
const maxStartValue = 50;

const createProgression = (start, step, itemCount, emptyItemIndex) => {
  let currentValue = start;
  return new Array(itemCount).fill(0)
    .map((item, index) => {
      if (index === 0) {
        return start;
      }

      currentValue += step;

      if (index === emptyItemIndex) {
        return '..';
      }

      return currentValue;
    });
};

const gameData = {
  condition,
  getTask() {
    const start = getRandomNum(minStartValue, maxStartValue);
    const step = getRandomNum(minStepValue, maxStepValue);
    const emptyItemIndex = getRandomNum(1, progressionLength - 1);
    const progressionArr = createProgression(start, step, progressionLength, emptyItemIndex);
    const question = progressionArr.join(' ');
    const answer = (progressionArr[emptyItemIndex - 1] + step).toString();

    return { question, answer };
  },
};

export default startGame(gameData);
