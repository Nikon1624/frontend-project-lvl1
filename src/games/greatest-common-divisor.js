import startGame from '../index.js';
import getRandomNum from '../utils.js';

const maxNum = 100;

const gameData = {
  condition: 'Find the greatest common divisor of given numbers.',
  getQuestion() {
    return `${getRandomNum(maxNum)} ${getRandomNum(maxNum)}`;
  },
  getCorrectAnswer(question) {
    const [firstNum, secondNum] = question.split(' ')
      .map((item) => parseInt(item, 10));

    const gcd = (a, b) => {
      if (!b) {
        return a;
      }

      return gcd(b, a % b);
    };

    return (gcd(firstNum, secondNum)).toString();
  },
};

export default startGame(gameData);
