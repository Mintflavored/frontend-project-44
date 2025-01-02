import runGame from '../src/index.js';
import getRandomNumber from '../src/random.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const operation = operations[getRandomNumber(0, operations.length - 1)];

  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = calculate(num1, num2, operation).toString();

  return [question, correctAnswer];
};

export default () => runGame(description, generateRound);
