import readlineSync from 'readline-sync';

const question = (question) => {
  const name = readlineSync.question(question);
  console.log(`Hello, ${name}!`);
}

export default question;
