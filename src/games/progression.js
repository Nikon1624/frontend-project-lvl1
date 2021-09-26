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
      }).join(' ');
  },
  getCorrectAnswer(question) {
    const questionArr = question.split(' ');
    const index = questionArr.findIndex((item) => item === '..');
    const questionNums = questionArr.map((item) => {
      if (item === '..') {
        return item;
      }

      return Number(item);
    });
    return (questionNums[index - 1] + step).toString();
  },
};

export default startGame(gameData);
