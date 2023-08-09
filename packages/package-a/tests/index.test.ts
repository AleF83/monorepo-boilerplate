import { calcSum } from '../src';

describe('Package A', () => {
  test('calcSum', () => {
    const c = calcSum(1, 1);
    expect(c).toBe(2);
  });
});
