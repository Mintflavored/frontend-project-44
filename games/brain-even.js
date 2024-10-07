import { getUserName, askUserName } from '../src/cli.js';
import getRandomNumber from '../src/random.js';
import checkAnswer from '../src/checkAnswer.js';
import { getAnswer, askQuestion } from '../src/question.js';

const isEven = (num) => num % 2 === 0;

const even = () => {
  askUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNumber(1, 15);
    askQuestion(num);

    const answer = getAnswer();

    if (answer !== 'yes' && answer !== 'no') {
      console.log('Invalid answer. Please use "yes" or "no".');
      console.log(`Let's try again, ${getUserName()}!`);
      return false;
    }

    const correctAnswer = isEven(num) ? 'yes' : 'no';
 
    if (!checkAnswer(answer, correctAnswer, getUserName())) {
      return false;
    }
  }
  console.log(`Congratulations, ${getUserName()}!`);
  return true;
};

export default even;
