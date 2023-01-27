export function canPermutePalindrome(s: string): boolean {
  const counts = new Map<string, number>();
  for (const c of s) {
    const cCount = counts.get(c);
    counts.set(c, cCount === undefined ? 1 : cCount + 1);
  }
  let numOdd = 0;
  for (const count of counts.values()) {
    if (count % 2 !== 0) {
      numOdd++;
    }
  }
  if (s.length % 2 === 0) {
    return numOdd === 0;
  } else {
    return numOdd === 1;
  }
}
