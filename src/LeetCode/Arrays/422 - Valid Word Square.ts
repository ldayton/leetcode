export function validWordSquare(words: string[]): boolean {
  const maxDimension = Math.max(words.length, words[0].length);
  for (let k = 1; k < maxDimension; k++) {
    const kthColumn: string = words[k];
    let kthRowArr: string[] = [];
    for (let i = 0; i < words.length; i++) {
      kthRowArr.push(words[i][k]);
    }
    const kthRow = kthRowArr.join("");
    if (kthColumn !== kthRow) {
      return false;
    }
  }
  return true;
}

console.log(validWordSquare(["ball", "area", "read", "lady"]));
