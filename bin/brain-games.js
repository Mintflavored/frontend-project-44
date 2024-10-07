#!/usr/bin/env node
import { askUserName } from '../src/cli.js';
import even from '../games/brain-even.js';
import calc from "../games/brain-calc.js";
import gcd from '../games/brain-gcd.js';
import progression from '../games/brain-progression.js';
import prime from "../games/brain-prime.js";

askUserName();
even();
calc();
gcd();
progression();
prime();