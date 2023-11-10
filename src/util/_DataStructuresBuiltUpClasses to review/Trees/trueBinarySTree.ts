class TreeNode {
  constructor(value = null) {
    this.value = value
    this.left = null
    this.right = null
  }
}
// find out how to assign null to node when no null im input array
function ArrayBinaryTreeDeserialize(arr) {
  if (arr.length === 0) {
    return null
  }
  // could get mid and put it as root
  let root = new TreeNode(arr[0])
  let queue = [root]
  for (let i = 1; i < arr.length; i += 2) {
    let current = queue.shift()

    if (arr[i] < root.value && arr[i] !== null) {
      // if Current/paraent
      current.left = new TreeNode(arr[i])
      queue.push(current.left)
    } else {
      current.right = new TreeNode(arr[i])
      queue.push(current.right)
    }

    if (arr[i + 1] !== null && arr[i + 1] !== undefined && arr[i + 1] < root.value) {
      // if( arr[i + 1] > root){

      // }

      current.right = new TreeNode(arr[i + 1])
      queue.push(current.right)
    } else {
      current.left = new TreeNode(arr[i + 1])
      queue.push(current.left)
    }
  }
  return root
}

console.log(ArrayBinaryTreeDeserialize([9, 2, 4, 7, 6]))
// [4, 2, 5, 1, 3, null, 7, null, null, null, null, 6, 8]
// should have null

// adding first value after root and second value to right not base om if greater than of less than
//           binary tree            binary search tree
//              9                         9
//            /   \                      / \
//           2     4                   2    null
//         /  \                       / \
//        7   6                         4
//                                     / \
//                                        7
//                                       / \
//                                      6
