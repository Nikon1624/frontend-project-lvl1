import startGame from '../index.js';
import getRandomNum from '../utils.js';

const condition = 'What is the result of the expression?';
const minNum = 1;
const maxNum = 100;
const operators = ['+', '-', '*'];

const calculate = (operator, firstNum, secondNum) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      throw new Error(`Unknown operator ${operator}`);
  }
};

const gameData = {
  condition,
  getTask() {
    const firstNum = getRandomNum(minNum, maxNum);
    const secondNum = getRandomNum(minNum, maxNum);
    const operator = operators[getRandomNum(minNum, operators.length - 1)];
    const question = `${firstNum} ${operator} ${secondNum}`;
    const answer = (calculate(operator, firstNum, secondNum)).toString();

    return { question, answer };
  },
};

export default startGame(gameData);
