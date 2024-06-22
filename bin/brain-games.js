#!/usr/bin/env node
import { askUserName } from '../src/cli.js';
import askQuestion from '../games/brain-even.js';

askUserName();
askQuestion();
