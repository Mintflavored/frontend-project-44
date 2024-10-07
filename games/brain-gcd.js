import { checkAnswer } from '../src/checkAnswer.js';
import { userName, askUserName } from '../src/cli.js';
import { askQuestion, answer } from '../src/question.js';
import { getRandomNumber } from '../src/random.js';

const gcdTwoNumbers = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcdTwoNumbers(b, a % b);
};

const gcd = () => {
  askUserName();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber(1, 15);
    const num2 = getRandomNumber(1, 15);
    askQuestion(`${num1} ${num2}`);
    const correctAnswer = gcdTwoNumbers(num1, num2);
    if (!checkAnswer(answer, correctAnswer.toString(), userName)) {
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default gcd;
