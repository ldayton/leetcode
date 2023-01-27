export function canAttendMeetings(intervals: number[][]): boolean {
  intervals = [...intervals].sort((inter1, inter2) => inter1[0] - inter2[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }
  return true;
}
