import startGame from '../index.js';
import getRandomNum from '../utils.js';

const condition = 'Find the greatest common divisor of given numbers.';
const minNum = 1;
const maxNum = 100;

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

const gameData = {
  condition,
  getTask() {
    const firstNum = getRandomNum(minNum, maxNum);
    const secondNum = getRandomNum(minNum, maxNum);
    const question = `${firstNum} ${secondNum}`;
    const answer = (gcd(firstNum, secondNum)).toString();

    return { question, answer };
  },
};

export default startGame(gameData);
