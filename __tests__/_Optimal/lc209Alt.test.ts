import {lc209Alt} from "../../src/_Optimal/lc209Alt";
// import { toBe } from '@jest/globals';

describe('smallest_subarray_with_given_sum', () => {
  it('should return the length of the smallest subarray with a sum >= target', () => {

    expect(lc209Alt(7, [2, 1, 5, 2, 3, 1])).toStrictEqual(2);

  });
});


