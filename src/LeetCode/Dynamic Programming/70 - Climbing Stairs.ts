interface MyCache {
  [key: number]: number;
}

export function climbStairs(n: number): number {
  let cache: MyCache = {
    0: 1,
    1: 1,
  };
  if (n <= 1) {
    return cache[n];
  }
  for (let i = 2; i <= n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }
  return cache[n];
}
