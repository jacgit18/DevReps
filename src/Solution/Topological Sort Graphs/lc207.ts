// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

 

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.

// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

// Constraints:

// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.


export const canFinish = (numCourses: number, prerequisites: number[][]): boolean =>{
        const inDegree: number[] = new Array(numCourses).fill(0);
        const graph: { [key: number]: number[] } = {};
      
        // Build the graph and calculate in-degrees
        for (const [course, prereq] of prerequisites) {
          if (!graph.hasOwnProperty(prereq)) {
            graph[prereq] = [];
          }
          graph[prereq].push(course);
          inDegree[course]++;
        }
      
        // Initialize a queue with courses having in-degree zero
        const queue: number[] = [];
        for (let i = 0; i < numCourses; i++) {
          if (inDegree[i] === 0) {
            queue.push(i);
          }
        }
      
        // Perform topological sort
        while (queue.length > 0) {
          const currentCourse = queue.shift()!;
          if (graph[currentCourse]) {
            for (const nextCourse of graph[currentCourse]) {
              inDegree[nextCourse]--;
              if (inDegree[nextCourse] === 0) {
                queue.push(nextCourse);
              }
            }
          }
        }
      
        // Check if all courses can be finished (no cycles in the graph)
        for (const degree of inDegree) {
          if (degree > 0) {
            return false;
          }
        }
      
        return true;
      };
      
      // Example usage:
    //   const numCourses1 = 2;
    //   const prerequisites1 = [[1, 0]];
    //   console.log(canFinish(numCourses1, prerequisites1)); // Output: true
      
    //   const numCourses2 = 2;
    //   const prerequisites2 = [[1, 0], [0, 1]];
    //   console.log(canFinish(numCourses2, prerequisites2)); // Output: false
      