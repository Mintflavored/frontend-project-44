#!/usr/bin/env node
import { askUserName } from '../src/cli.js';
import even from '../games/brain-even.js';
import calc from "../games/brain-calc.js";

askUserName();
even();
calc();