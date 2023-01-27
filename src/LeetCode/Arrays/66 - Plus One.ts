export function plusOne(digits: number[]): number[] {
  const big = BigInt(digits.map((i) => i.toString()).join("")) + 1n;
  return big
    .toString()
    .split("")
    .map((s) => parseInt(s));
}
