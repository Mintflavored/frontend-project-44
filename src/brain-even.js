import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

const askQuestion = () => {
    for (let i = 0; i < 3; i += 1) {
        const num = Math.floor(Math.random() * 15) + 1;
        console.log(`Question: ${num}`);
        const answer = readlineSync.question('Your answer (yes/no): ').toLowerCase();

        if (answer !== 'yes' && answer !== 'no') {
            console.log('Invalid answer. Please use "yes" or "no".');
            console.log(`Let's try again, ${userName}!`);
            return false;
        }

        const isEven = num % 2 === 0;
        const correctAnswer = isEven ? 'yes' : 'no';

        if (answer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return false;
        }
    }

    console.log(`Congratulations, ${userName}!`);
    return true;
};

export default askQuestion;