import Benchmark from "benchmark";
import { TreeNode } from "../src/util/BinaryTreeMaker";
import { LinkedListNode } from "../src/util/LinkedListMaker";

export type TestCase = {
  params?: any | any[]; // Updated type for params
  paramsTwo?: any | any[]; // Updated type for paramsTwo
  paramsThree?: any | any[]; // Updated type for paramsThree
  expected: number | string | boolean | any[] | any[][] | TreeNode | LinkedListNode | null;
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
      const { params, paramsTwo, paramsThree, expected, performance } = testCase;

      beforeEach(() => {
        fun = lcFunction;
      });

      if (performance) {
        it(`should perform well for input: "${params}, ${paramsTwo}, ${paramsThree}"`, () => {
          const combinedParams = [params, paramsTwo, paramsThree].map(param =>
            Array.isArray(param) ? param : [param]
          );
          BenchmarkHelper.benchmarkFunction(fun, ...combinedParams.flat());
        });
      } else {
        it(`should return ${expected} for input: "${params}, ${paramsTwo}, ${paramsThree}"`, () => {
          const result = fun(
            ...( [params, paramsTwo, paramsThree].map(param =>
              Array.isArray(param) ? param : [param]
            ).flat() )
          );
          
          console.time(`${testName} Test case ${index + 1}`);

          if (result instanceof TreeNode) {
            expect(result?.value).toBe(expected);
          } else if (result instanceof LinkedListNode) {
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

class BenchmarkHelper {
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

export default BenchmarkHelper;
