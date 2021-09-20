import readlineSync from 'readline-sync';

let currentRound = 1;
const step = 1;
const roundsCount = 3;
const maxNumber = 100;

const Messages = {
  WELCOME: 'Welcome to the Brain Games!',
  GAME_CONDITION: 'Answer "yes" if the number is even, otherwise answer "no".',
  CORRECT: 'Correct!',
  GREETING: (name) => `Hello, ${name}!`,
  OVER: (answer, correctAnswer, name) => `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!`,
  CONGRATULATION: (name) => `Congratulations, ${name}!`,
};

const Questions = {
  USER_NAME: 'May I have your name?\n',
  QUESTION: (number) => `Question: ${number}\n`,
};

const Answers = {
  YES: 'yes',
  NO: 'no',
};

const getRandomNumber = () => Math.floor(Math.random() * maxNumber);
const isEven = (number) => number % 2 === 0;

const startGame = () => {
  console.log(Messages.WELCOME);
  const name = readlineSync.question(Questions.USER_NAME);
  console.log(Messages.GREETING(name));
  console.log(Messages.GAME_CONDITION);

  while (currentRound <= roundsCount) {
    const randomNumber = getRandomNumber();
    const answer = readlineSync.question(Questions.QUESTION(randomNumber));

    const correctAnswer = isEven(randomNumber) ? Answers.YES : Answers.NO;

    if (correctAnswer === answer) {
      currentRound += step;
      console.log(Messages.CORRECT);
    } else {
      console.log(Messages.OVER(answer, correctAnswer, name));
      return;
    }
  }

  console.log(Messages.CONGRATULATION(name));
};

export default startGame;
