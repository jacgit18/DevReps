// Root just have total length
// leaf have length and value : Section of Alphabet
    // preOrder

    /**
 *     length 9
 *   /    \
 *  abc    len:6
 * len:3  / \
 *      def  ghi
 *    len:3  len:3
 

    check length subtract index then when index less then len focus on that string at that node and return character at that index
    we go left sub 3 by 7 nod index is 4 return to root go right then left sub 4 by 3 now index is 1 go back up to parent then 
    go right len is greater then index return string[1] = "h"


return index 7 in alphabet


*/


    class TreeNode {
        constructor(value) {
          this.value = value;
          this.left = null;
          this.right = null;
          this.length = 0;// pull length from descendants
        }
      };
// convert binary search tree
      const ArrayBinaryTreeDeserialize = (arr) =>{
        if (arr.length === 0) { return null; }
        // could get mid and put it as root 
        let root = new TreeNode(arr[0]); // BFS levelOrder Push
        let queue = [root];
        for(let i = 1; i < arr.length; i += 2) {
          let current = queue.shift();
    
          // should do recursive
          if (arr[i] !== null) {
            // if val less then root then parent node or one node up
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
          }
    
          if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
                    // if val greater then root then parent node or one node up
            current.right = new TreeNode(arr[i + 1]);
            queue.push(current.right);
          }
    
        }
        return root;
      }


      function maxHeight(node) {
        if (node == null) {
          return 0;
        }
      
        return Math.max(maxHeight(node.left), maxHeight(node.right)) + 1;
      }
    
      function minHeight(node) {
        if (node == null) {
          return 0;
        }
      
        return Math.min(minHeight(node.left), minHeight(node.right)) + 1;
      }
    



    const find = (tree, index) => {

         if(tree.value) {
           return tree.value[index] 
         }
         
         if(index < tree.left.lenth) {
             return find(tree,left, index)
         }
         
         return find(tree.right, index - tree.left.len)
        
       }


       let root = []


console.log(find(ArrayBinaryTreeDeserialize(root), index) )