// import { toBe } from '@jest/globals';
import * as Benchmark from 'benchmark';
import { OptimalSlidingWindSolution } from "../../../../src/routers/OptimalSlidingWindSolution";

describe('smallest_subarray_with_given_sum', () => {
  let lc209: (s: number, arr: number[]) => number;
  let lc209Alt: (s: number, arr: number[]) => number;

  beforeEach(() => {
    lc209 = OptimalSlidingWindSolution.lc209;
    lc209Alt = OptimalSlidingWindSolution.lc209alt;
  });

  it('should compare the speed of lc209 and lc209Alt', (done) => {
    // Define a benchmark suite
    const suite = new Benchmark.Suite();
  // Dont need to bench mark all the time
    suite
      .add('lc209', () => {
        lc209(7, [2, 1, 5, 2, 3, 1]);
      })
      .add('lc209Alt', () => {
        lc209Alt(7, [2, 1, 5, 2, 3, 1]);
      })
      .add('lc209_LargeArray', () => {
        lc209(10, Array.from({ length: 5 }, () => Math.floor(Math.random())));
      })
      .add('lc209Alt_LargeArray', () => {
        lc209Alt(10, Array.from({ length: 5 }, () => Math.floor(Math.random() * 10)));
      })
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



// describe('smallest_subarray_with_given_sum', () => {
//   let lc209: (s: number, arr: number[]) => number;
//   let lc209Alt: (s: number, arr: number[]) => number;

//   beforeEach(() => {
//     lc209 = OptimalSlidingWindSolution.lc209;
//     lc209Alt = OptimalSlidingWindSolution.lc209alt;
//   });

//   it('should compare the speed of lc209 and lc209Alt', () => {
//     // Benchmarking lc209
//     console.time('lc209');
//     lc209(7, [2, 1, 5, 2, 3, 1]);
//     console.timeEnd('lc209');

//     // Benchmarking lc209Alt
//     console.time('lc209Alt');
//     lc209Alt(7, [2, 1, 5, 2, 3, 1]);
//     console.timeEnd('lc209Alt');
//   });
// });
