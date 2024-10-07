const checkAnswer = (answer, correctAnswer, userName) => {
    const strAnswer = String(answer);
    const strCorrectAnswer = String(correctAnswer);

    if (strAnswer === strCorrectAnswer) {
        console.log('Correct!');
        return true;
    } else {
        console.log(`'${strAnswer}' is wrong answer ;(. Correct answer was '${strCorrectAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        return false;
    }
};

export { checkAnswer };
