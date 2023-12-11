import Benchmark from "benchmark";
import { TreeNode } from "../src/util/BinaryTreeMaker";
import { Node } from "../src/util/DoubleLinkedListMaker";
import { GraphVertex } from "../src/util/GraphMaker";
import { ListNode } from "../src/util/LinkedListMaker";


export type TestCase = {
  params?: any | any[]; // Updated type for params
  paramsTwo?: any | any[]; // Updated type for paramsTwo
  paramsThree?: any | any[]; // Updated type for paramsThree
  paramsFour?: any | any[]; // Updated type for paramsThree
  expected: number | string | boolean | any[] | any[][] | TreeNode | ListNode | GraphVertex | Node | null;
  performance?: boolean; // Flag to indicate a performance test case
};

type TestFunction = (...params: any[]) => any;

export const generateTestCases = (
  lcFunction: TestFunction,
  testCases: TestCase[],
  testName: string
) => {
  describe(testName, () => {
    let fun: TestFunction;
    testCases.forEach((testCase, index) => {
      const { params, paramsTwo, paramsThree, paramsFour, expected, performance } = testCase;

      beforeEach(() => {
        fun = lcFunction;
      });

      if (performance) {
        it(`should perform well for input: "${params}, ${paramsTwo}, ${paramsThree}, ${paramsFour}"`, () => {
          const combinedParams = [params, paramsTwo, paramsThree, paramsFour].map(param =>
            Array.isArray(param) ? param : [param]
          );
          BenchmarkHelper.benchmarkFunction(fun, ...combinedParams.flat());
        });
      } else {
        it(`should return ${expected} for input: "${params}, ${paramsTwo}, ${paramsThree},  ${paramsFour}"`, () => {
          const result = fun(
            ...( [params, paramsTwo, paramsThree, paramsFour].map(param =>
              Array.isArray(param) ? param : [param]
            ).flat() )
          );
          
          console.time(`${testName} Test case ${index + 1}`);

          if (result instanceof TreeNode) {
            expect(result?.value).toBe(expected);
          } else if (result instanceof ListNode) {
            expect(result).toStrictEqual(expected);
          } else if (result instanceof Node) {
            expect(result).toStrictEqual(expected);
          } else if (result instanceof GraphVertex) {
            expect(result).toStrictEqual(expected);
          } else {
            expect(result).toStrictEqual(expected);
          }

          console.timeEnd(`${testName} Test case ${index + 1}`);
        });
      }
    });
  });
};

export class BenchmarkHelper {
  static benchmarkFunction(func: (...args: any[]) => any, ...input: any[]) {
    const suite = new Benchmark.Suite();
    suite.add("Function", () => {
      func(...input);
    });
    suite.on("cycle", (event: Benchmark.Event) => {
      console.log(String(event.target));
    });
    suite.run();
  }
}

