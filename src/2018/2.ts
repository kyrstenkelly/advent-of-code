/**
 * https://adventofcode.com/2018/day/2
 */

/**
 * PART 1
 */
const calculateChecksum = (input: string[]) => {
  let containsTwoCount = 0;
  let containsThreeCount = 0;

  input.forEach((id: string) => {
    const letterCounts = {};
    const letterArray = id.split('');
    letterArray.forEach((letter: string) => {
      const count = letterCounts[letter] || 0;
      letterCounts[letter] = count + 1;
    });

    const counts = Object.values(letterCounts);
    if (counts.includes(2)) {
      containsTwoCount++;
    }
    if (counts.includes(3)) {
      containsThreeCount++;
    }
  });

  return containsTwoCount * containsThreeCount;
}

/**
 * PART 2
 */
const findCommonIDCharacters = (input: string[]) => {
  let commonChars: string;

  input.forEach((id: string, index: number) => {
    if (index === input.length - 2) {
      return;
    }
    const idsToCompare = [...input].slice(index + 1);
    idsToCompare.forEach((otherId: string) => {
      let numDifferences = 0;
      let matchingChars = '';
      otherId.split('').forEach((char: string, index: number) => {
        if (char !== id.charAt(index)) {
          numDifferences++;
        } else {
          matchingChars += char;
        }
      });

      if (numDifferences === 1) {
        commonChars = matchingChars;
        return;
      }
    });
  });
  return commonChars;
}

export default (input: string[]) => {
  // PART 1
  const checksum = calculateChecksum(input);
  console.log(checksum);

  // PART 2
  const result = findCommonIDCharacters(input);
  console.log(result);
}
