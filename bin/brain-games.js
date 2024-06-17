#!/usr/bin/env node
import askUserName, { userName } from '../src/cli.js';
import even from './brain-even.js';

console.log('Welcome to the Brain Games!');
askUserName();
console.log('Hello, ' + userName + '!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
even();
