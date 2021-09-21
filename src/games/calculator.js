import startGame from '../index.js';
import getRandomNum from '../utils.js';

const maxNum = 100;
const operators = ['+', '-', '*'];

const gameData = {
  condition: 'What is the result of the expression?',
  getQuestion() {
    return `${getRandomNum(maxNum)} ${operators[getRandomNum(operators.length - 1)]} ${getRandomNum(maxNum)}`;
  },
  getCorrectAnswer(question) {
    const [plus, minus, multiply] = operators;
    const [firstNum, operator, secondNum] = question.split(' ')
      .map((item) => (Number.isNaN(parseInt(item, 10)) ? item : parseInt(item, 10)));

    switch (operator) {
      case plus:
        return (firstNum + secondNum).toString();
      case minus:
        return (firstNum - secondNum).toString();
      case multiply:
        return (firstNum * secondNum).toString();
      default:
        return false;
    }
  },
};

export default startGame(gameData);
