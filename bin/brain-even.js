import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

const askQuestion = () => {
    let correctAnswersCount = 0;

    for (let i = 0; i < 3; i += 1) {
        const num = Math.floor(Math.random() * 15) + 1;
        console.log(`Question: ${num}`);
        const answer = readlineSync.question('Your answer: ').toLowerCase();

        if (answer !== 'yes' && answer !== 'no') {
            console.log('Your answer is wrong, use yes or no.');
            return false;
        }

        const isEven = num % 2 === 0;
        const correctAnswer = isEven ? 'yes' : 'no';

        if (answer === correctAnswer) {
            correctAnswersCount += 1;
            console.log('Correct!');
            if (correctAnswersCount === 3) {
                console.log(`Congratulations, ${userName}!`);
            }
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            correctAnswersCount = 0;
            return false;
        }
    }
};

export default askQuestion;
