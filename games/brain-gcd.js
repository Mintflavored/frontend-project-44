import runGame from '../src/index.js';
import getRandomNumber from '../src/random.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 15);
  const num2 = getRandomNumber(1, 15);
  
  const question = `${num1} ${num2}`;
  const correctAnswer = findGcd(num1, num2).toString();
  
  return [question, correctAnswer];
};

export default () => runGame(description, generateRound);
