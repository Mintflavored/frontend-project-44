#!/usr/bin/env node
import { greetUser } from '../src/cli.js'
import even from './brain-even.js'

console.log('Welcome to the Brain Games!')
greetUser()
console.log('Answer "yes" if the number is even, otherwise answer "no".')
even()