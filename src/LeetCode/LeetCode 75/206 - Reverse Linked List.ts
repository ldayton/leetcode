// TODO fix bugs

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  let stack: ListNode[] = [];
  let cur: ListNode = head;
  while (cur != null) {
    stack.push(cur);
    if (cur.next === null) {
      break;
    }
    cur = cur.next;
  }
  stack = stack.reverse();
  const root = new ListNode(stack[0].val);
  cur = root;
  for (let i = 1; i < stack.length; i++) {
    cur.next = new ListNode(stack[i].val);
  }
  return root;
}

export {};
