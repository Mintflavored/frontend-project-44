#!/usr/bin/env node
import even from '../games/brain-even.js';
import { userName } from "../src/cli.js";

even(userName);