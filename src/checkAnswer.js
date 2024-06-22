const checkAnswer = (answer, correctAnswer, userName) => {
    if (answer === correctAnswer) {
        console.log('Correct!');
        return true;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        return false;
    }
};

export { checkAnswer };
