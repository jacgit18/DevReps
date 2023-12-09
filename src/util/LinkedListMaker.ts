export class ListNode {
  value: number
  next: ListNode | null
  constructor(value?: number, next?: ListNode | null) {
    this.value = value ?? 0
    this.next = next ?? null
  }
}

export function createLinkedListFromArray(arr: any[]): ListNode | null {
  if (arr.length === 0) {
    return null
  }

  const head = new ListNode(arr[0])
  let current = head

  for (let i = 1; i < arr.length; i++) {
    const newNode = new ListNode(arr[i])
    current.next = newNode
    current = newNode
  }

  return head
}

// Example usage:
// const arrayToLinkedList = createLinkedListFromArray([1, 2, 3, 4, 5])
// console.log(arrayToLinkedList)
