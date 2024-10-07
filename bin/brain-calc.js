#!/usr/bin/env node
import calc from "../games/brain-calc.js";
import { userName } from "../src/cli.js";

calc(userName);