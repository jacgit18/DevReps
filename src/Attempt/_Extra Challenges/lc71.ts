// Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.

// In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods such as '...' are treated as file/directory names.

// The canonical path should have the following format:

// The path starts with a single slash '/'.
// Any two directories are separated by a single slash '/'.
// The path does not end with a trailing '/'.
// The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')
// Return the simplified canonical path.

 

// Example 1:

// Input: path = "/home/"
// Output: "/home"
// Explanation: Note that there is no trailing slash after the last directory name.

// Example 2:

// Input: path = "/../"
// Output: "/"
// Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.

// Example 3:

// Input: path = "/home//foo/"
// Output: "/home/foo"
// Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.
 

// Constraints:

// 1 <= path.length <= 3000
// path consists of English letters, digits, period '.', slash '/' or '_'.
// path is a valid absolute Unix path.




// const climbStairsBruteForce = (n: number): number => {
//   return 0
// }

// const climbStairsNaiveImp = (n: number): number => {
//   return 0
// }

// const climbStairsNaiveDec = (n: number): number => {
//   return 0
// }

// const climbStairsOptimal = (n: number): number => {
//   return 0
// }


const simplifyPathDS = (path: string): string => {
  const parts: string[] = path.split('/');
  const stack: string[] = [];

  for (const part of parts) {
    if (part === '' || part === '.') {
      continue; // Skip empty parts and current directory markers
    } else if (part === '..') {
      stack.pop(); // Move one level up if encountering '..'
    } else {
      stack.push(part); // Push valid directory names to stack
    }
  }

  return '/' + stack.join('/');
};




export const simplifyPath = {
  // climbStairsBruteForce,
  // climbStairsNaiveImp,
  // climbStairsNaiveDec,
  // climbStairsOptimal,
  simplifyPathDS


}

const example1: string = simplifyPath.simplifyPathDS("/home/");
console.log("Example 1 - Input: /home/ | Output:", example1);

const example2: string = simplifyPath.simplifyPathDS("/../");
console.log("Example 2 - Input: /../ | Output:", example2);

const example3: string = simplifyPath.simplifyPathDS("/home//foo/");
console.log("Example 3 - Input: /home//foo/ | Output:", example3);
