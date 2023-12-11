import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptMergeInterval } from "../../src/Attempt/Merge Intervals";
import { SolutionMergeInterval } from "../../src/Solution/Merge Intervals";


const runTestCases = () => {

  const testCasePlaceholder: TestCase[]  = [
    { params: [
        [
          [1, 3],
          [2, 6],
          [8, 10],
          [15, 18],
        ]
      ],
      expected: [
        [0]
      ],
    },
  ];
  

  const testCasePerformance:  TestCase[]  = [
    { params: [
        [
          [1, 3],
          [2, 6],
          [8, 10],
          [15, 18],
        ]
      ],
      expected: [
        [1, 6],
        [8, 10],
        [15, 18],
      ],
      performance:true
    },
  ];

  const testCases:  TestCase[]  = [
    { params: [
        [
          [1, 3],
          [2, 6],
          [8, 10],
          [15, 18],
        ]
      ],
      expected: [
        [1, 6],
        [8, 10],
        [15, 18],
      ],
    },
    { params: [
        [
          [1, 4],
          [4, 5],
        ]
      ],
      expected: [
        [1, 5],
      ],
    },
    // Add more test cases as needed
  ];
    
      
  generateTestCases(AttemptMergeInterval.lc56.mergeBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
  generateTestCases(AttemptMergeInterval.lc56.mergeNaiveDec, testCasePlaceholder, ' Naive Declaritive Code Attempt ');
  
  // generateTestCases(AttemptMergeInterval.lc56.mergeNaiveImp, testCasePerformance, ' Naive Imperative Code Attempt ');
  // generateTestCases(AttemptMergeInterval.lc56.mergeOptimal, testCasePerformance, ' Optimal Code Attempt ');

  generateTestCases(SolutionMergeInterval.lc56, testCases,' Solution ',);

    
    };
    
    runTestCases();
    