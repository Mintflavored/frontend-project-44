import { checkAnswer } from "../src/checkAnswer.js";
import { userName } from "../src/cli.js";
import { askQuestion, answer } from "../src/question.js";
import { getRandomNumber } from "../src/random.js";

const generateProgression = (start, step, length) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
        progression.push(start + i * step);
    }
    return progression;
};

const hideNumber = (progression) => {
    const hiddenIndex = getRandomNumber(0, progression.length - 1);
    const hiddenNumber = progression[hiddenIndex];
    const questionProgression = [...progression];
    questionProgression[hiddenIndex] = '..';
    return { 
        question: questionProgression.join(' '),
        answer: hiddenNumber
    };
};
    
const progression = () => {
    console.log('What number is missing in the progression?');
    for (let i = 0; i < 3; i += 1) {
        const start = getRandomNumber(1, 50);
        const step = getRandomNumber(1, 10);
        const length = getRandomNumber(5, 10);

        const prog = generateProgression(start, step, length);
        const { question, answer: correctAnswer } = hideNumber(prog);

        askQuestion(question);

        if (!checkAnswer(answer, correctAnswer, userName)) {
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
    return true;
};
    
export default progression; 