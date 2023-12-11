import { generateTestCases, TestCase } from "../../lib/genTest";
import { Attempt_KwayMerge } from "../../src/Attempt/K-way Merge";
import { Solution_KwayMerge } from "../../src/Solution/K-way Merge";
import { ListNode } from "../../src/util/LinkedListMaker";


const runTestCases = () => {

  const testCasePlaceholder: TestCase[]  = [
    { params: [
        [
          new ListNode(1, new ListNode(4, new ListNode(5))),
          new ListNode(1, new ListNode(3, new ListNode(4))),
          new ListNode(2, new ListNode(6)),
        ]
      ],
      expected: null
    },
  ];
  

  const testCasePerformance:  TestCase[]  = [
    { params: [
        [
          new ListNode(1, new ListNode(4, new ListNode(5))),
          new ListNode(1, new ListNode(3, new ListNode(4))),
          new ListNode(2, new ListNode(6)),
        ]
      ],
      expected: new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5, new ListNode(6)))))))),
      performance:true
    },
  ];

  const testCases:  TestCase[]  = [
    { params: [
        [
          new ListNode(1, new ListNode(4, new ListNode(5))),
          new ListNode(1, new ListNode(3, new ListNode(4))),
          new ListNode(2, new ListNode(6)),
        ]
      ],
      expected: new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5, new ListNode(6))))))))
    },
    // Add more test cases as needed
  ];

    
  generateTestCases(Attempt_KwayMerge.lc23.mergeKListsBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
  generateTestCases(Attempt_KwayMerge.lc23.mergeKListsNaiveDec, testCasePlaceholder, ' Naive Declaritive Code Attempt ');
  
  // generateTestCases(Attempt_KwayMerge.lc23.mergeKListsNaiveImp, testCasePerformance, ' Naive Imperative Code Attempt ');
  // generateTestCases(Attempt_KwayMerge.lc23.mergeKListsOptimal, testCasePerformance, ' Optimal Code Attempt ');

  generateTestCases(Solution_KwayMerge.lc23, testCases,' Solution ',);


  

};

runTestCases();
