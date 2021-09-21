import startGame from '../index.js';
import getRandomNum from '../utils.js';

const progressionLength = 10;
const maxStepValue = 9;
const maxStartValue = 50;
let start = null;
let step = null;
let randomIndex = null;

const gameData = {
  condition: 'What number is missing in the progression?',
  getQuestion() {
    start = getRandomNum(maxStartValue);
    step = getRandomNum(maxStepValue);
    randomIndex = getRandomNum(progressionLength);
    let initialValue = start;
    return new Array(progressionLength).fill(0)
      .map((item, index) => {
        if (index === 0) {
          return start;
        }

        initialValue += step;

        if (index === randomIndex) {
          return '..';
        }

        return initialValue;
      })
      .join(' ');
  },
  getCorrectAnswer(question) {
    const index = question.split(' ').findIndex((item) => item === '..');
    return (question.split(' ').map((item) => Number(item))[index - 1] + step).toString();
  },
};

export default startGame(gameData);
