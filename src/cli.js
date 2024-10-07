import readlineSync from 'readline-sync';

let userName = '';

const askUserName = () => {
  console.log('Welcome to the Brain Games!');
  if (!userName) {
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
  }
  return userName;
};

export { askUserName, userName };
