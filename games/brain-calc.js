import checkAnswer from '../src/checkAnswer.js';
import { getUserName, askUserName } from '../src/cli.js';
import { askQuestion, getAnswer } from '../src/question.js';
import getRandomNumber from '../src/random.js';

const calculate = () => {
  askUserName();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);
    const operations = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operations.length);
    const operation = operations[randomIndex];
    askQuestion(`${num1} ${operation} ${num2}`);
    const answer = getAnswer();
    let correctAnswer;
    switch (operation) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
      default:
        break;
    }

    if (!checkAnswer(answer, correctAnswer.toString(), getUserName())) {
      return false;
    }
  }
  console.log(`Congratulations, ${getUserName()}!`);
  return true;
};

export default calculate;
