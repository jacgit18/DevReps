// import { toBe } from '@jest/globals';
import { lc209Alt } from "../../../../src/routers/OptimalSlidingWindSolution";

describe('smallest_subarray_with_given_sum', () => {
  it('should return the length of the smallest subarray with a sum >= target', () => {

    expect(lc209Alt(7, [2, 1, 5, 2, 3, 1])).toStrictEqual(2);

  });
});


