import readlineSync from 'readline-sync';

let answer = '';

const askQuestion = (num) => {
  console.log(`Question: ${num}`);
  answer = readlineSync.question('Your answer: ').toLowerCase();
};

const getAnswer = () => {
  const currentAnswer = answer;
  answer = '';
  return currentAnswer;
};

export { getAnswer, askQuestion };
