import runGame from '../src/index.js';
import getRandomNumber from '../src/random.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(1, 10);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  
  return [number, correctAnswer];
};

export default () => runGame(description, generateRound);
