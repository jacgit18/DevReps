import app from "../../src/app";
// import { toBe } from '@jest/globals';

describe('smallest_subarray_with_given_sum', () => {
  it('should return the length of the smallest subarray with a sum >= target', () => {
    // Test cases
    expect(app.Optimal(7, [2, 1, 5, 2, 3, 1])).toBe(3);

  });
});


