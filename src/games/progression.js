import startGame from '../index.js';
import getRandomNum from '../utils.js';

const progressionLength = 10;
const maxStepValue = 9;
const maxStartValue = 50;

const gameData = {
  condition: 'What number is missing in the progression?',
  start: null,
  step: null,
  randomIndex: null,
  getQuestion() {
    this.start = getRandomNum(maxStartValue);
    this.step = getRandomNum(maxStepValue);
    this.randomIndex = getRandomNum(progressionLength);
    let initialValue = this.start;
    return new Array(progressionLength).fill(0)
      .map((item, index) => {
        if (index === 0) {
          return this.start;
        }

        initialValue += this.step;

        if (index === this.randomIndex) {
          return '..';
        }

        return initialValue;
      });
  },
  getCorrectAnswer(question) {
    const index = question.findIndex((item) => item === '..');
    return (question[index - 1] + this.step).toString();
  },
};

export default startGame(gameData);
