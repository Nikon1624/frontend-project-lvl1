import readlineSync from 'readline-sync';

const roundsCount = 3;

const messages = {
  welcome: 'Welcome to the Brain Games!',
  nameQuestion: 'May I have your name?\n',
  correctAnswer: 'Correct!',
  wrongAnswer: (userAnswer, correctAnswer, userName) => (
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`
  ),
  userAnswer: (userAnswer) => `Your answer: ${userAnswer}`,
  greeting: (userName) => `Hello, ${userName}`,
  question: (question) => `Question: ${question}\n`,
  congratulations: (userName) => `Congratulations, ${userName}`,
};

const startGame = (gameData) => () => {
  let currentRound = 1;
  console.log(messages.welcome);
  const name = readlineSync.question(messages.nameQuestion);
  console.log(messages.greeting(name));
  console.log(gameData.condition);

  while (currentRound <= roundsCount) {
    const question = gameData.getQuestion();
    const correctAnswer = gameData.getCorrectAnswer(question);
    const answer = readlineSync.question(messages.question(question));

    console.log(messages.userAnswer(answer));

    if (answer === correctAnswer) {
      currentRound += 1;
      console.log(messages.correctAnswer);
    } else {
      console.log(messages.wrongAnswer(answer, correctAnswer, name));
      return;
    }
  }

  console.log(messages.congratulations(name));
};

export default startGame;
