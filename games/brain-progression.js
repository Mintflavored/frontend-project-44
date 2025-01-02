import runGame from '../src/index.js';
import getRandomNumber from '../src/random.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const progression = generateProgression(start, step, length);

  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[hiddenIndex].toString();

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => runGame(description, generateRound);
