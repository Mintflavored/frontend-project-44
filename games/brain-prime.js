import checkAnswer from '../src/checkAnswer.js';
import { getUserName, askUserName } from '../src/cli.js';
import { askQuestion, getAnswer } from '../src/question.js';
import { getRandomNumber } from '../src/random.js';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const prime = () => {
  askUserName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(1, 10);
    askQuestion(number);
    const answer = getAnswer();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    if (!checkAnswer(answer, correctAnswer, getUserName())) {
      return false;
    }
  }
  console.log(`Congratulations, ${getUserName()}!`);
  return true;
};

export default prime;
