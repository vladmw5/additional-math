import { describe, expect, test } from '@jest/globals';
import { Polynomial } from './Polynomial';
import { Complex } from '../Complex/Complex';

describe('Polynomial tests', () => {
  test('Polynomial constructor', () => {
    const polynomial = new Polynomial(1, 1, 1);
    expect(polynomial.length).toBe(3);
    expect(polynomial[0]!.equalsTo(Complex.one())).toBe(true);
  });
});
