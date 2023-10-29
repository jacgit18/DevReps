// 1. LinkedLists
class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Generate a linked list from an array
  function generateList(arr) {
    if (arr.length === 0) { return null; }
    
    let head = new ListNode(arr[0]);
  
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    
    return head;
  }
  
  function swap(list, a, b) {
  
    function find(node, target) {
  
      if(!list || a===b) { return list; }
      
      let prev = null;
      let current = node;
      
      while(current!==null) {
        if(current.value === target) {
          return [prev,current];
        }
        prev = current;
        current = current.next;
      }
      return [null,null]
    }
  
    let [prev1, current1] = find(list,a);
    let [prev2, current2] = find(list,b);
  
    if (!current1 || !current2) { return list; }
    [current1.next, current2.next] = [current2.next, current1.next];
    if(prev1) { prev1.next = current2; }
    if(prev2) { prev2.next = current1; }
  
    if(prev1 === null) { return current2; }
    if(prev2 === null) { return current1; }
    
    return list;
  }
  
  let array = [1,5,7,10,12,15];
  let list = generateList(array);
  let a = 5;
  let b = 12;
  
  let resultList = swap(list, a, b);
  console.log("given list:", array);
  
  let resultArray = [];
  while(resultList!==null) {
    resultArray.push(resultList.value);
    resultList = resultList.next;
  }
  
  console.log("swapped list:", resultArray);



  /*

a = 5 

b = 12

0 >  5
     ^
     |
1 > 5 > 7 > 10 > 12 > 15 > null
0 >  5

    <--------_
1 > 7 > 10 > 12 > 15 > null
 |            ^
------------->

0 >  5 > null


1 > 12 > 7 > 10 > 15 > null

1 > 12 > 7 > 10 > 5 > 15 > null





1 > 5 > 
P      7 > 10 > 

12 > 15 > null

                
1 > 12 > 7 > 10 > 5 > 15 > null
|________________|
pre   ---> curr.next
    |_____________|
      --->curr.next.next

while current !== null

current = current.next


check if current node value equal a or b 

if it does reasingn


prev = current

prev
5
current.next


how do we know what value we will hit first 

*/