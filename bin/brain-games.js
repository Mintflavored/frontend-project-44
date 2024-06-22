#!/usr/bin/env node
import { askUserName } from '../src/cli.js';
import even from '../games/brain-even.js';

askUserName();
even();
