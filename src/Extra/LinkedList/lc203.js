const LinkedList = require("../../../_DataStructuresBuiltUpClasses/DataStrucFactoryInterview");
const myLK = new LinkedList();

let LinkListArray = [1,2,6,3,4,5,6];
let head = myLK.ArrayLinkListDeserialize(LinkListArray);



const removeElements = (head, val)  =>{
    if (!head || !val) return head;
    head.next = removeElements(head.next, val);
    return (head.val === val) ? head.next : head;

};

let nodeVal = head.next.next.value


    console.log(removeElements(head, nodeVal))// [1,2,3,4,5]


    try {
        module.exports = removeElements;
      
      } catch (error) {
    
      }