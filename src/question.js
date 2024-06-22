import readlineSync from 'readline-sync';

let answer = ''

const askQuestion = (num) => {
    console.log(`Question: ${num}`);
    answer = readlineSync.question('Your answer: ').toLowerCase();
    return answer;
};

export { answer, askQuestion }
