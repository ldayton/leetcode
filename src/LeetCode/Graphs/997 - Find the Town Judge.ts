export function findJudge(n: number, trust: number[][]): number {
  let candidateJudge: number | undefined;
  const citizens = [...Array(n).keys()].map((i) => i + 1);
  function meetsCriteria(person: number): boolean {
    const trusters = new Set<number>();
    try {
      trust.forEach(([truster, trusted]) => {
        if (truster === person) throw Error("trusts somebody");
        if (trusted === person && truster !== person) {
          trusters.add(truster);
        }
      });
    } catch (e) {
      return false;
    }
    return trusters.size === n - 1;
  }
  for (let person of citizens) {
    if (meetsCriteria(person)) {
      if (candidateJudge) {
        return -1;
      }
      candidateJudge = person;
    }
  }
  return candidateJudge ?? -1;
}
