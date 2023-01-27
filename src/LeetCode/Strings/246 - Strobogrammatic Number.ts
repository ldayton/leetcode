export function isStrobogrammatic(num: string): boolean {
  const assoc = {
    "0": "0",
    "1": "1",
    "8": "8",
    "6": "9",
    "9": "6",
  };
  const map = new Map(Object.entries(assoc));
  for (let i = 0; i < num.length; i++) {
    const cur = num[i];
    const value = map.get(cur);
    if (value === undefined) {
      return false;
    }
    if (num[num.length - 1 - i] !== value) {
      return false;
    }
  }
  return true;
}
