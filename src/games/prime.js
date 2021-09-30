import startGame from '../index.js';
import getRandomNum from '../utils.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNum = 1;
const maxNum = 100;

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

const gameData = {
  condition,
  getTask() {
    const num = getRandomNum(minNum, maxNum);
    const question = `${num}`;
    const answer = isPrime(num) ? 'yes' : 'no';

    return { question, answer };
  },
};

export default startGame(gameData);
