import readlineSync from 'readline-sync';

let userName = '';

const askUserName = () => {
    if (!userName) {
        userName = readlineSync.question('May I have your name? ');
    }
    return userName;
};

export { askUserName, userName }