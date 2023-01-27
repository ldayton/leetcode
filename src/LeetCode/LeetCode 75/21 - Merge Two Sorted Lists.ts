// TODO fix bugs

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let root: ListNode | null = null;
  let head1: ListNode | null = list1;
  let head2: ListNode | null = list2;

  // set up root
  if (head1 === null && head2 === null) {
    return null;
  } else if (head1 === null) {
    // only head1 is null
    root = head2;
    head2 = head2!.next;
  } else if (head2 === null) {
    // only head2 is null
    root = head1;
    head1 = head1.next;
  } else {
    if (head1.val < head2.val) {
      root = head1;
      head2 = head1.next;
    } else {
      root = head2;
      head1 = head2.next;
    }
  }
  let cur = root as ListNode;

  // iterate through the two lists
  while (head1 !== null || head2 !== null) {
    let curNxt: ListNode;
    if (head1 === null) {
      curNxt = head2 as ListNode;
    } else if (head2 === null) {
      curNxt = head1;
    } else {
      curNxt = head1.val < head2.val ? head1 : head2;
    }
    if (curNxt === head1) {
      head1 = head1.next;
    } else {
      head2 = head2!.next;
    }
    cur.next = curNxt;
  }
  return root;
}

export {};
