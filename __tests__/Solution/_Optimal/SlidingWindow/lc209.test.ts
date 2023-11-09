// import { toBe } from '@jest/globals';
import * as Benchmark from 'benchmark';
import { combinedAttemptExports } from "../../../../src/routers/OptimalAttempt";
import { combinedSolutionExports } from "../../../../src/routers/OptimalSolution";


describe('smallest_subarray_with_given_sum', () => {
  let lc209: (s: number, arr: number[]) => number;
  let lc209Alt: (s: number, arr: number[]) => number;

  beforeEach(() => {
    lc209 = combinedSolutionExports.OptimalSlidingWindSolution.lc209;
    lc209Alt = combinedSolutionExports.OptimalSlidingWindSolution.lc209alt;
  });

  it('should compare the speed of lc209 and lc209Alt', (done) => {
    // Define a benchmark suite
    const suite = new Benchmark.Suite();
  // Dont need to bench mark all the time only doing it for files with multiple approaches
    suite
      .add('lc209', () => {
        lc209(7, [2, 1, 5, 2, 3, 1]);
      })
      .add('lc209Alt', () => {
        lc209Alt(7, [2, 1, 5, 2, 3, 1]);
      })
      // .add('lc209_LargeArray', () => {
      //   lc209(10, Array.from({ length: 5 }, () => Math.floor(Math.random())));
      // })
      // .add('lc209Alt_LargeArray', () => {
      //   lc209Alt(10, Array.from({ length: 5 }, () => Math.floor(Math.random() * 10)));
      // })
      .on('cycle', (event: Benchmark.Event) => {
        console.log(String(event.target)); // Print benchmark results
      })
      .on('complete', () => {
        console.log('Benchmark completed.'); // Benchmark suite completed
        done(); // Signal that the test is done
      })
      .run({ async: true }); // Run the benchmark asynchronously

    // You can add assertions here if needed
  }, 30000); // Increase the timeout to 10 seconds (adjust as needed)
});



describe('smallest_subarray_with_given_sum Attempt', () => {
  let lc209Attempt: (s: number, arr: number[]) => number;
  let lc209: (s: number, arr: number[]) => number;
  let lc209Alt: (s: number, arr: number[]) => number;


  beforeEach(() => {
    lc209Attempt = combinedAttemptExports.OptimalSlidingWindAttempt.lc209;
    lc209 = combinedSolutionExports.OptimalSlidingWindSolution.lc209;
    lc209Alt = combinedSolutionExports.OptimalSlidingWindSolution.lc209alt;

    // Update cases
    const testCases = [
      { input: "ABAB", k: 2, expected: 4 },
      { input: "AABABBA", k: 1, expected: 4 },
      { input: "ABCDE", k: 1, expected: 2 },
      { input: "AAAA", k: 2, expected: 4 },
      { input: "AAAB", k: 0, expected: 3 },
      { input: "AABA", k: 0, expected: 2 },
    ];

  });

  it('should output first param passed for empty attempt', () => {


    const result1 = lc209Attempt(7, [2, 1, 5, 2, 3, 1]);
    console.time('lc209 Attempt');
    expect(result1).toBe(7);
    console.timeEnd('lc209 Attempt');

  });

  it('Init Approach should output 2', () => {
    const result12 = lc209(7, [2, 1, 5, 2, 3, 1]);
    console.time('lc209');
    expect(result12).toBe(2);
    console.timeEnd('lc209');

  });

  it('Alt Approach should output 2', () => {
    const result123 = lc209Alt(7, [2, 1, 5, 2, 3, 1]);
    console.time('lc209Alt');
    expect(result123).toBe(2); 
    console.timeEnd('lc209Alt');

  });

});
