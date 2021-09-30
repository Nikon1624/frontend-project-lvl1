import readlineSync from 'readline-sync';

const roundsCount = 3;

const messages = {
  welcome: 'Welcome to the Brain Games!',
  nameQuestion: 'May I have your name?\n',
  correctAnswer: 'Correct!',
  getWrongAnswerMessage: (userAnswer, correctAnswer, userName) => (
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`
  ),
  showUserAnswer: (userAnswer) => `Your answer: ${userAnswer}`,
  greetUser: (userName) => `Hello, ${userName}`,
  showQuestion: (question) => `Question: ${question}\n`,
  congratulateTheUser: (userName) => `Congratulations, ${userName}!`,
};

const startGame = (gameData) => () => {
  console.log(messages.welcome);
  const name = readlineSync.question(messages.nameQuestion);
  console.log(messages.greetUser(name));
  console.log(gameData.condition);

  for (let i = 1; i <= roundsCount; i += 1) {
    const { question, answer } = gameData.getTask();
    const userAnswer = readlineSync.question(messages.showQuestion(question));

    console.log(messages.showUserAnswer(answer));

    if (answer !== userAnswer) {
      console.log(messages.getWrongAnswerMessage(userAnswer, answer, name));
      return;
    }

    console.log(messages.correctAnswer);
  }

  console.log(messages.congratulateTheUser(name));
};

export default startGame;
