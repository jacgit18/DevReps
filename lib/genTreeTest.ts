import Benchmark from "benchmark";
import { TreeNode } from "../src/util/BinaryTreeMaker";

export type TreeNodeTestCase = {
  params?: TreeNode | undefined; // Updated type for params
  paramsTwo?: TreeNode | undefined; // Updated type for paramsTwo
  paramsThree?: TreeNode | undefined; // Updated type for paramsThree
  expected: TreeNode | null;
  performance?: boolean; // Flag to indicate a performance test case
};

type TreeNodeTestFunction = (...params: (TreeNode | undefined)[]) => TreeNode | null;

export const generateTreeNodeTestCases = (
  lcFunction: TreeNodeTestFunction,
  testCases: TreeNodeTestCase[],
  testName: string
) => {
  describe(testName, () => {
    let fun: TreeNodeTestFunction;
    testCases.forEach((testCase, index) => {
      const { params, paramsTwo, paramsThree, expected, performance } = testCase;

      beforeEach(() => {
        fun = lcFunction;
      });

      if (performance) {
        it(`should perform well for input: "${JSON.stringify(params)}, ${JSON.stringify(
          paramsTwo
        )}, ${JSON.stringify(paramsThree)}"`, () => {
          // Filter out undefined values before passing to the function
          const filteredParams = [params, paramsTwo, paramsThree].filter((param) => param !== undefined);
          BenchmarkHelper.benchmarkFunction(fun, ...filteredParams);
        });
      } else {
        it(`should return ${JSON.stringify(expected)} for input: "${JSON.stringify(
          params
        )}, ${JSON.stringify(paramsTwo)}, ${JSON.stringify(paramsThree)}"`, () => {
          console.time(`${testName} Test case ${index + 1}`);
          // Filter out undefined values before passing to the function
          const filteredParams = [params, paramsTwo, paramsThree].filter((param) => param !== undefined);
          const result = fun(...filteredParams);
          expect(result).toStrictEqual(expected);
          console.timeEnd(`${testName} Test case ${index + 1}`);
        });
      }
    });
  });
};

class BenchmarkHelper {
  static benchmarkFunction(func: (...args: (TreeNode | undefined)[]) => TreeNode | null, ...input: (TreeNode | undefined)[]) {
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
