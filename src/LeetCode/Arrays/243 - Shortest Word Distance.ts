export function shortestDistance(
  wordsDict: string[],
  word1: string,
  word2: string
): number {
  let shortest = Number.MAX_SAFE_INTEGER;
  let lastWord1 = -1;
  let lastWord2 = -1;
  for (let i = 0; i < wordsDict.length; i++) {
    const word = wordsDict[i];
    if (word === word1) {
      lastWord1 = i;
    }
    if (word === word2) {
      lastWord2 = i;
    }
    if (lastWord1 >= 0 && lastWord2 >= 0) {
      const distance = Math.abs(lastWord1 - lastWord2);
      if (distance < shortest) {
        shortest = distance;
      }
    }
  }
  return shortest;
}
