export function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  const arr: string[][] = [];
  let periodLen = 2 * numRows - 2;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const periodNum = Math.floor(i / periodLen);
    const periodPos = i % periodLen;
    // let x;
    // if (periodPos <= numRows - 1) {
    //   x = 0;
    // } else {
    //   x = periodPos - (numRows - 1);
    // }
    let y;
    if (periodPos < numRows - 1) {
      y = periodPos;
    } else {
      y = periodLen - periodPos;
    }
    const absX = periodNum * periodLen + periodPos;
    if (arr[absX] === undefined) {
      arr[absX] = [];
    }
    arr[absX][y] = char;
  }
  const buf = [];
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < arr.length; col++) {
      if (col !== undefined) {
        buf.push(arr[col][row]);
      }
    }
  }
  return buf.join("");
}
