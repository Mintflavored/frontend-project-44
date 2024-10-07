import { userName, askUserName } from '../src/cli.js';
import { getRandomNumber } from '../src/random.js';
import { checkAnswer } from '../src/checkAnswer.js';
import { askQuestion } from '../src/question.js';

const isEven = (num) => num % 2 === 0;

const even = () => {
    askUserName();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
    for (let i = 0; i < 3; i += 1) {
        const num = getRandomNumber(1, 15);
        const userAnswer = askQuestion(num);
        
        if (userAnswer !== 'yes' && userAnswer !== 'no') {
            console.log('Invalid answer. Please use "yes" or "no".');
            console.log(`Let's try again, ${userName}!`);
            return false;
        }

        const correctAnswer = isEven(num) ? 'yes' : 'no';
        if (!checkAnswer(userAnswer, correctAnswer, userName)) {
            return false;
        }
    }

    console.log(`Congratulations, ${userName}!`);
    return true;
};

export default even;