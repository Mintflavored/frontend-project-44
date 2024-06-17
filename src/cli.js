import readlineSync from 'readline-sync';

const greetUser = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
    return userName;
};

const name = () => {
    const user = greetUser();
    return user;
};

export {greetUser, name};