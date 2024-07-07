import { userName } from '../src/cli.js';
import { getRandomNumber } from '../src/random.js';
import { checkAnswer } from '../src/checkAnswer.js';
import { askQuestion, answer } from '../src/question.js';

const even = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        const num = getRandomNumber(1, 15);

        askQuestion(num)

        if (answer !== 'yes' && answer !== 'no') {
            console.log('Invalid answer. Please use "yes" or "no".');
            console.log(`Let's try again, ${userName}!`);
            return false;
        }

        const isEven = num % 2 === 0;
        const correctAnswer = isEven ? 'yes' : 'no';

        if (!checkAnswer(answer, correctAnswer, userName)) {
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
    return true;
};

export default even;