import startGame from '../index.js';
import getRandomNum from '../utils.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNum = 1;
const maxNum = 100;

const isEven = (num) => num % 2 === 0;

const gameData = {
  condition,
  getTask() {
    const num = getRandomNum(minNum, maxNum);
    const question = `${num}`;
    const answer = isEven(num) ? 'yes' : 'no';

    return { question, answer };
  },
};

export default startGame(gameData);
