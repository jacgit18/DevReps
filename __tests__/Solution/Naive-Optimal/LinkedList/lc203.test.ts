// const RemoveElements  = require('../../_Grokking_Algo & Leetcode/_Extra todo/LinkedList/lc203');
// const LinkedList = require("../../_DataStructuresBuiltUpClasses/DataStrucFactoryInterview");

// // Input: ["lint","code","love","you"]
// // Output: ["lint","code","love","you"]
// // Explanation:
// // One possible encode method is: "lint:;code:;love:;you"


// // Input: ["we", "say", ":", "yes"]
// // Output: ["we", "say", ":", "yes"]
// // Explanation:
// // One possible encode method is: "we:;say:;:::;yes"

//   describe('Test suite for RemoveElements ', () => {
  
//     let removeElements; // good practice tp avoid change in state
//     let myLK;
//     let head;
//     let nodeVal;
//     let LinkListArray = [1,2,6,3,4,5,6];


//     beforeEach(() =>{ 
//       removeElements = RemoveElements;
//       MyLK = new LinkedList();
//        head = MyLK.ArrayLinkListDeserialize(LinkListArray);
//        nodeVal = head.next.next.value


//     });

//     test('Edge Case 1', () => {
//       const edgecase1 = removeElements(head, nodeVal);
     

//       expect(edgecase1).toBe(head);

//     });

  



//   });


// Update to problem solution
import { combinedAttemptExports } from "../../../../src/routers/OptimalAttempt";
import { combinedSolutionExports } from "../../../../src/routers/OptimalSolution";


type TestFunction = (k: number, arr: number[]) => number;

const generateTestCases = (
  maxSubarrayFunction: TestFunction,
  k: number,
  arr: number[],
  testName: string,
  expected: number
) => {
  describe(`max_subarray_size_k ${testName}`, () => {
    let maxSubFn: TestFunction;

    beforeEach(() => {
      maxSubFn = maxSubarrayFunction;
    });

    it(`should return ${expected} for k = ${k} and arr = [${arr}]`, () => {
      const result = maxSubFn(k, arr);
      console.time(`maxSubarray${testName}`);
      expect(result).toBe(expected);
      console.timeEnd(`maxSubarray${testName}`);
    });
  });
};

const runTestCases = () => {
  const testCases = [
    { k: 3, arr: [2, 3, 4, 1, 5], expect: 10 },

    // Add more test cases here
  ];

  testCases.forEach((testCase, index) => {
//     generateTestCases(
//         combinedAttemptExports,
//       testCase.k,
//       testCase.arr,
//       `Test Case ${index + 1}`,
//       testCase.expect
//     );

    generateTestCases(
      combinedSolutionExports.OptimalSlidingWindSolution.lc53,
      testCase.k,
      testCase.arr,
      `Test Case ${index + 1}`,
      testCase.expect
    );
  });


};

runTestCases();

 