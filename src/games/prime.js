import startGame from '../index.js';
import getRandomNum from '../utils.js';

const maxNum = 100;

const gameData = {
  condition: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getQuestion() {
    return getRandomNum(maxNum);
  },
  getCorrectAnswer(question) {
    const isPrime = (num) => {
      for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
          return false;
        }
      }

      return num > 1;
    };

    return isPrime(question) ? 'yes' : 'no';
  },
};

export default startGame(gameData);
