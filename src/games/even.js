import startGame from '../index.js';
import getRandomNum from '../utils.js';

const maxNum = 100;

const gameData = {
  condition: 'Answer "yes" if the number is even, otherwise answer "no".',
  getQuestion() {
    return getRandomNum(maxNum);
  },
  getCorrectAnswer(question) {
    return question % 2 === 0 ? 'yes' : 'no';
  },
};

export default startGame(gameData);
