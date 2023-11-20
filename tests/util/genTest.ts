

export type TestCase = {
    params?: any[];
    expected: number | boolean | string;
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
        const { params, expected } = testCase;
  
      beforeEach(() => {
        fun = lcFunction;
      });
  
      it(`should return ${expected} for input: "${params}"`, () => {
        const result = fun(...(params || []));
        console.time(`${testName} Test case ${index + 1}`)
        expect(result).toBe(expected);
        console.timeEnd(`${testName} Test case ${index + 1}`)
      });
  
  });
  
  });
  
  };
  