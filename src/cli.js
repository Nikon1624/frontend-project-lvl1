import readlineSync from 'readline-sync';

const question = (str) => {
  const name = readlineSync.question(str);
  console.log(`Hello, ${name}!`);
};

export default question;
