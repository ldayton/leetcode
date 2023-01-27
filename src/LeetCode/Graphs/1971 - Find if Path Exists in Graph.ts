// TODO speed up
export function validPath(
  _n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  if (source === destination) {
    return true;
  }
  const edgeMap: Map<number, Set<number>> = new Map();
  edges.map(([u, v]) => {
    if (!edgeMap.has(u)) edgeMap.set(u, new Set());
    edgeMap.get(u)?.add(v);
    if (!edgeMap.has(v)) edgeMap.set(v, new Set());
    edgeMap.get(v)?.add(u);
  });
  console.log(edgeMap);
  const explored = new Set<string>();
  function find(from: number, to: number): boolean {
    const token = `${from}-${to}`;
    if (explored.has(token)) {
      return false;
    } else {
      explored.add(token);
    }
    const neighbors = edgeMap.get(from);
    if (!neighbors) return false;
    if (neighbors.has(to)) return true;
    const neighborArr = Array.from(neighbors);
    for (let i = 0; i < neighborArr.length; i++) {
      const neighbor = neighborArr[i];
      console.log(`find(${from}, ${to})`);
      if (find(neighbor, to)) return true;
    }
    return false;
  }
  return find(source, destination);
}
