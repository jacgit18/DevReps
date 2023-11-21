import Benchmark from "benchmark";

export type TestCase = {
  params?: any[];
  expected: number | string | boolean | string[] | number[];
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
      const { params, expected, performance } = testCase;

      beforeEach(() => {
        fun = lcFunction;
      });

      if (performance) {
        it(`should perform well for input: "${params}"`, () => {
          BenchmarkHelper.benchmarkFunction(fun, ...(params || []));
        });
      } else {
        it(`should return ${expected} for input: "${params}"`, () => {
          const result = fun(...(params || []));
          console.time(`${testName} Test case ${index + 1}`);
          expect(result).toStrictEqual(expected);
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
