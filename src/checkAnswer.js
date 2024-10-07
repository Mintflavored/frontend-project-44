import { getUserName } from './cli.js';

const checkAnswer = (answer, correctAnswer) => {
  const strAnswer = String(answer);
  const strCorrectAnswer = String(correctAnswer);
  const userName = getUserName(); // Важно вызывать функцию, а не передавать её как объект

  if (strAnswer === strCorrectAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${strAnswer}' is the wrong answer ;(. The correct answer was '${strCorrectAnswer}'.`);
  console.log(`Let's try again, ${userName}!`); // Здесь корректно используется переменная userName
  return false;
};

export default checkAnswer;
