import type { NumberCache } from "../common.js";

export function minCostClimbingStairs(cost: number[]): number {
  const cache: NumberCache = {
    0: 0,
    1: 0,
  };
  for (let i = 2; i <= cost.length; i++) {
    cache[i] = Math.min(cache[i - 1] + cost[i - 1], cache[i - 2] + cost[i - 2]);
  }
  return cache[cost.length];
}
