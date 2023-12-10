// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

// Example 2:

// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

// Example 3:

// Input: numCourses = 1, prerequisites = []
// Output: [0]

// Constraints:

// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= numCourses * (numCourses - 1)
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// ai != bi
// All the pairs [ai, bi] are distinct.

export const findOrder = (numCourses: number, prerequisites: number[][]): number[] => {
  const inDegree: number[] = new Array(numCourses).fill(0)
  const graph: { [key: number]: number[] } = {}

  // Build the graph and calculate in-degrees
  for (const [course, prereq] of prerequisites) {
    if (!graph.hasOwnProperty(prereq)) {
      graph[prereq] = []
    }
    graph[prereq].push(course)
    inDegree[course]++
  }

  // Initialize a queue with courses having in-degree zero
  const queue: number[] = []
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i)
    }
  }

  const result: number[] = []

  // Perform topological sort
  while (queue.length > 0) {
    const currentCourse = queue.shift()!
    result.push(currentCourse)

    if (graph[currentCourse]) {
      for (const nextCourse of graph[currentCourse]) {
        inDegree[nextCourse]--
        if (inDegree[nextCourse] === 0) {
          queue.push(nextCourse)
        }
      }
    }
  }

  // Check if all courses can be finished (no cycles in the graph)
  if (result.length === numCourses) {
    return result
  } else {
    return []
  }
}

// Example usage:
//   const numCourses1 = 2;
//   const prerequisites1 = [[1, 0]];
//   console.log(findOrder(numCourses1, prerequisites1)); // Output: [0, 1]

//   const numCourses2 = 4;
//   const prerequisites2 = [[1, 0], [2, 0], [3, 1], [3, 2]];
//   console.log(findOrder(numCourses2, prerequisites2)); // Output: [0, 1, 2, 3]

//   const numCourses3 = 1;
//   const prerequisites3 = [];
//   console.log(findOrder(numCourses3, prerequisites3)); // Output: [0]
