/**
 * https://adventofcode.com/2018/day/1
 * https://adventofcode.com/2018/day/1#part2
 */


/**
 * PART 1
 */
const calculateTotalFrequency = (input: string[]) => {
  return input.map(s => parseInt(s, 10))
    .reduce((a: number, b: number) => a + b);
}

/**
 * PART 2
 */
const findDuplicateFrequency = (input: string[]) => {
  const frequenciesSeen = {};
  let frequency = 0;
  let index = 0;
  let foundDupe = false;

  while (!foundDupe) {
    frequenciesSeen[frequency] = true;

    const nextNum: string = input[index];
    frequency += parseInt(nextNum, 10);

    // If we have seen this frequency, stop recursion and return that number.
    if (frequenciesSeen[frequency]) {
      return frequency;
    } else {
      index++;
      if (index > input.length - 1) {
        index = index % input.length;
      }
    }
  }
}

export default (input: string[]) => {
  // PART 1
  const totalFrequency = calculateTotalFrequency(input);
  console.log(totalFrequency);

  // PART 2
  // TODO: Figure out why this crashes. Iterates through the list 7+ times
  // and then max call stack gets exceeded. Frequencies seem to continually increase,
  // never circling back to reach the same one twice.

  const firstDuplicate = findDuplicateFrequency(input);
  console.log(firstDuplicate);
}
