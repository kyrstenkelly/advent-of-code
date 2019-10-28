const fs = require('fs');
import { getInput } from './input-helper';

const args = process.argv.slice(2);
const year = args[0];
const day = args[1];
const puzzlePath = `${__dirname}/${year}/${day}.ts`;

fs.access(puzzlePath, fs.constants.R_OK, (err) => {
  if (err) {
    console.error(`Could not find a solution for puzzle ${day} from year ${year}`);
    process.exit();
  }
  getInput(puzzlePath).then((input: string[]) => {
    const puzzle = require(puzzlePath);
    puzzle.default(input);
  });
});
