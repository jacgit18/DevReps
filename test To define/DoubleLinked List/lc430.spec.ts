import { generateTestCases, TestCase } from "../../lib/genTest";
import { AttemptDoublyLinkedList } from "../../src/Attempt/DoubleLinked List";
import { SolutionDoublyLinkedList } from "../../src/Solution/DoubleLinked List";
import { Node } from "../../src/util/DoubleLinkedListMaker";


const runTestCases = () => {

  const testCasePlaceholder: TestCase[]  = [
    {
      params: [
        new Node(1, null, new Node(2, null, new Node(3, null, new Node(4, null, new Node(5, null, new Node(6)))))),
      ],
      expected: null,
      performance: true
    },
    ];
  

  const testCasePerformance:  TestCase[]  = [
    {
      params: [
        new Node(1, null, new Node(2, null, new Node(3, null, new Node(4, null, new Node(5, null, new Node(6)))))),
      ],
      expected: new Node(1, null, new Node(2, null, new Node(3, null, new Node(7, null, new Node(8, null, new Node(11, null, new Node(12))))))),
      performance: true
    },
  ];

  const testCases:  TestCase[]  = [
    // Test Case 1
    {
      params: [
        new Node(1, null, new Node(2, null, new Node(3, null, new Node(4, null, new Node(5, null, new Node(6)))))),
      ],
      expected: new Node(1, null, new Node(2, null, new Node(3, null, new Node(7, null, new Node(8, null, new Node(11, null, new Node(12))))))),
    },
    // Test Case 2
    {
      params: [
        new Node(1, null, new Node(2, null, new Node(3))),
      ],
      expected: new Node(1, null, new Node(3, null, new Node(2))),
    },
    // Test Case 3
    {
      params: [
        null,
      ],
      expected: null,
    },
    // Add more test cases as needed
  ];
  
  generateTestCases(AttemptDoublyLinkedList.lc430.flattenBruteForce, testCasePlaceholder, ' BruteForce Code Attempt ');
  generateTestCases(AttemptDoublyLinkedList.lc430.flattenNaiveDec, testCasePlaceholder, ' Naive Declaritive Code Attempt ');
  
  generateTestCases(AttemptDoublyLinkedList.lc430.flattenNaiveImp, testCasePerformance, ' Naive Imperative Code Attempt ');
  generateTestCases(AttemptDoublyLinkedList.lc430.flattenOptimal, testCasePerformance, ' Optimal Code Attempt ');

  generateTestCases(SolutionDoublyLinkedList.lc430, testCases,' Solution ',);

  
    
    };
    
    runTestCases();
    