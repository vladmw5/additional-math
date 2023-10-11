import { describe, expect, test } from '@jest/globals';
import { Complex } from './Complex';
import { ComplexLike } from './Complex.auxillary';

describe('Testing Complex Numbers', () => {
  test('Create complex zero and test getters', () => {
    const complex = new Complex();
    expect(complex.real).toBe(0);
    expect(complex.imaginary).toBe(0);
  });

  test('Complex full constructor and getters', () => {
    const complex = new Complex(3, 4);
    expect(complex.real).toBe(3);
    expect(complex.imaginary).toBe(4);
  });

  test('Complex real number constructor and getters', () => {
    const real = new Complex(3);
    expect(real.real).toBe(3);
    expect(real.imaginary).toBe(0);
  });

  test('Complex equals to real numbers', () => {
    const real = new Complex(3);
    expect(real.equalsTo(3)).toBe(true);
  });

  test('Complex equals to another complex', () => {
    const complex = new Complex(3, 4);
    const otherComplex = new Complex(1, -2);
    expect(complex.equalsTo(otherComplex)).toBe(false);
    expect(new Complex(1, 1).equalsTo(new Complex(1, 1))).toBe(true);
  });

  test('Complex equals to complex like objects', () => {
    const complex = new Complex(3, 4);
    const complexLike: ComplexLike = {
      real: 3,
      imaginary: 4,
    };
    expect(complex.equalsTo(complexLike)).toBe(true);
  });

  test('Complex copy using Complex.copyOf', () => {
    const complex = new Complex(2, 5);
    expect(Complex.copyOf(complex).equalsTo(complex)).toBe(true);
  });

  test('Complex copy using this.copy', () => {
    const complex = new Complex(2, 5);
    expect(complex.copy.equalsTo(complex)).toBe(true);
  });

  test('Casting a complex to a complex with Complex.from', () => {
    const complex = new Complex(2, 5);
    expect(Complex.from(complex).equalsTo(complex)).toBe(true);
  });

  test('Casting a real to a complex with Complex.from', () => {
    const real = 3;
    const complex = new Complex(real);
    expect(Complex.from(real).equalsTo(complex)).toBe(true);
  });

  test('Casting a complex like object to a complex with Complex.from', () => {
    const complexLike: ComplexLike = {
      real: 2,
      imaginary: 5,
    };
    const complex = new Complex(2, 5);
    expect(Complex.from(complexLike).equalsTo(complex)).toBe(true);
  });

  test('Creating a complex zero with Complex.zero()', () => {
    expect(Complex.zero().equalsTo(new Complex(0))).toBe(true);
  });

  test('Is complex a complex zero with Complex.isZero()', () => {
    expect(Complex.isZero(new Complex(0, 0))).toBe(true);
    expect(Complex.isZero(new Complex(4, 0))).toBe(false);
    expect(Complex.isZero(new Complex(0, 4))).toBe(false);
    expect(Complex.isZero(new Complex(4, 4))).toBe(false);
  });

  test('Is complex a complex zero with this.isZero()', () => {
    expect(new Complex(0, 0).isZero()).toBe(true);
    expect(new Complex(4, 0).isZero()).toBe(false);
    expect(new Complex(0, 4).isZero()).toBe(false);
    expect(new Complex(4, 4).isZero()).toBe(false);
  });

  test('Creating a complex one with Complex.one()', () => {
    expect(Complex.one().equalsTo(new Complex(1))).toBe(true);
  });

  test('Is complex a complex one with Complex.isOne()', () => {
    expect(Complex.isOne(new Complex(1, 0))).toBe(true);
    expect(Complex.isOne(new Complex(4, 0))).toBe(false);
    expect(Complex.isOne(new Complex(0, 4))).toBe(false);
    expect(Complex.isOne(new Complex(4, 4))).toBe(false);
  });

  test('Is complex a complex one with this.isOne()', () => {
    expect(new Complex(1, 0).isOne()).toBe(true);
    expect(new Complex(4, 0).isOne()).toBe(false);
    expect(new Complex(0, 4).isOne()).toBe(false);
    expect(new Complex(4, 4).isOne()).toBe(false);
  });

  test('Creating a complex i with Complex.i()', () => {
    expect(Complex.i().equalsTo(new Complex(0, 1))).toBe(true);
  });

  test('Is complex a complex i with Complex.isI()', () => {
    expect(Complex.isI(new Complex(0, 1))).toBe(true);
    expect(Complex.isI(new Complex(4, 0))).toBe(false);
    expect(Complex.isI(new Complex(0, 4))).toBe(false);
    expect(Complex.isI(new Complex(4, 4))).toBe(false);
  });

  test('Is complex a complex i with this.isI()', () => {
    expect(new Complex(0, 1).isI()).toBe(true);
    expect(new Complex(4, 0).isI()).toBe(false);
    expect(new Complex(0, 4).isI()).toBe(false);
    expect(new Complex(4, 4).isI()).toBe(false);
  });

  test('Is complex a complex zero with equalsTo()', () => {
    expect(new Complex(0, 0).equalsTo(new Complex(0, 0))).toBe(true);
  });

  test('Sum of a complex and a real number', () => {
    const complex = new Complex(0, 4);
    expect(complex.add(5).equalsTo(new Complex(5, 4))).toBe(true);
    expect(complex.add(0).equalsTo(complex)).toBe(true);
  });

  test('Sum of two complex numbers', () => {
    const complex = new Complex(3, 4);
    const otherComplex = new Complex(1, -2);
    const sum = complex.add(otherComplex);
    expect(sum.equalsTo(new Complex(4, 2)));
    expect(complex.add(new Complex(0)).equalsTo(complex)).toBe(true);
  });

  test('Complex sum commutativity', () => {
    const complex = new Complex(3, 4);
    const otherComplex = new Complex(1, -2);
    const leftSum = complex.add(otherComplex);
    const rightSum = otherComplex.add(complex);
    expect(leftSum.equalsTo(rightSum)).toBe(true);
  });

  test('Complex sum associativity', () => {
    const complex = new Complex(3, 4);
    const andAnotherComplex = new Complex(-5, 6);
    const otherComplex = new Complex(1, -2);
    const firstSum = complex.add(otherComplex).add(andAnotherComplex);
    const secondSum = otherComplex.add(andAnotherComplex).add(complex);
    expect(firstSum.equalsTo(secondSum)).toBe(true);
  });

  test('Opposite of a complex using Complex.oppositeOf', () => {
    const regularComplex = new Complex(3, 4);
    const oppositeComplex = Complex.oppositeOf(regularComplex);
    expect(regularComplex.add(oppositeComplex).isZero()).toBe(true);
  });

  test('Opposite of a complex using this.opposite', () => {
    const regularComplex = new Complex(3, 4);
    const oppositeComplex = regularComplex.opposite;
    expect(regularComplex.add(oppositeComplex).isZero()).toBe(true);
  });

  test('Subtraction of a complex and a real number', () => {
    const complex = new Complex(5, 4);
    expect(complex.subtract(5).equalsTo(new Complex(0, 4))).toBe(true);
    expect(complex.subtract(0).equalsTo(complex)).toBe(true);
    expect(new Complex(0).subtract(complex).equalsTo(complex.opposite));
  });

  test('Subtraction of two complex numbers', () => {
    const complex = new Complex(2, 7);
    const otherComplex = new Complex(4, 8);
    const difference = complex.subtract(otherComplex);
    const oppositeDifference = otherComplex.subtract(complex);

    expect(difference.equalsTo(new Complex(-2, -1))).toBe(true);
    expect(oppositeDifference.equalsTo(difference.opposite)).toBe(true);
  });

  test('Multiplication of a complex number by scalar', () => {
    const complex = new Complex(-1, 2);

    expect(complex.multiplyBy(2).equalsTo(complex.add(complex))).toBe(true);
    expect(complex.multiplyBy(-1).equalsTo(complex.opposite)).toBe(true);
    expect(complex.multiplyBy(0).isZero()).toBe(true);
    expect(complex.multiplyBy(1).equalsTo(complex)).toBe(true);
  });

  test('Product of two complex numbers', () => {
    const complex = new Complex(4, 3);
    const otherComplex = new Complex(-7, 6);
    const zero = new Complex(0);
    expect(complex.multiplyBy(otherComplex).equalsTo(new Complex(-46, 3)));
    expect(complex.multiplyBy(zero).equalsTo(zero)).toBe(true);
  });

  test('Complex product commutativity', () => {
    const complex = new Complex(4, 3);
    const otherComplex = new Complex(-7, 6);
    const leftProduct = complex.multiplyBy(otherComplex);
    const rightProduct = otherComplex.multiplyBy(complex);
    expect(leftProduct.equalsTo(rightProduct)).toBe(true);
  });

  test('Complex product associativity', () => {
    const complex = new Complex(4, 3);
    const otherComplex = new Complex(-7, 6);
    const andAnotherComplex = new Complex(2, -1);
    const firstProduct = complex
      .multiplyBy(otherComplex)
      .multiplyBy(andAnotherComplex);
    const secondProduct = otherComplex
      .multiplyBy(andAnotherComplex)
      .multiplyBy(complex);
    expect(firstProduct.equalsTo(secondProduct)).toBe(true);
  });

  test('Complex product distributivity', () => {
    const coefficient = new Complex(4, 2);
    const first = new Complex(5, 12);
    const second = new Complex(4, -8);

    expect(
      coefficient
        .multiplyBy(first.add(second))
        .equalsTo(
          coefficient.multiplyBy(first).add(coefficient.multiplyBy(second))
        )
    ).toBe(true);
  });

  test('Inverse of a complex using Complex.inverseOf', () => {
    const complex = new Complex(4, 2);
    const inverseComplex = Complex.inverseOf(complex);
    expect(complex.multiplyBy(inverseComplex).equalsTo(1)).toBe(true);
  });

  test('Inverse of a complex using this.inverse', () => {
    const complex = new Complex(4, 2);
    expect(complex.multiplyBy(complex.inverse).equalsTo(1)).toBe(true);
  });

  test('Is complex a complex infinity', () => {
    expect(new Complex(Infinity).isInfinite()).toBe(true);
    expect(new Complex(0, Infinity).isInfinite()).toBe(true);
    expect(new Complex(2, 4).isInfinite()).toBe(false);
  });

  test('Complex conjugate using Complex.conjugateOf', () => {
    const complex = new Complex(5, 8);
    const conjugate = Complex.conjugateOf(complex);

    expect(
      complex.add(conjugate).equalsTo(new Complex(complex.real * 2, 0))
    ).toBe(true);
    expect(
      complex
        .multiplyBy(conjugate)
        .equalsTo(new Complex(complex.real ** 2 + complex.imaginary ** 2, 0))
    ).toBe(true);
  });

  test('Complex conjugate using this.conjugate', () => {
    const complex = new Complex(5, 8);

    expect(
      complex.add(complex.conjugate).equalsTo(new Complex(complex.real * 2, 0))
    ).toBe(true);
    expect(
      complex
        .multiplyBy(complex.conjugate)
        .equalsTo(new Complex(complex.real ** 2 + complex.imaginary ** 2, 0))
    ).toBe(true);
  });

  test('Division of a complex by a non zero real', () => {
    const complex = new Complex(6, 3);
    expect(complex.divideBy(2).equalsTo(new Complex(3, 1.5))).toBe(true);
  });

  test('Division of a complex by a zero real', () => {
    const complex = new Complex(6, 3);
    expect(complex.divideBy(0).isInfinite()).toBe(true);
  });

  test('Division of a complex by a non-zero complex', () => {
    const complex = new Complex(6, 3);
    const divisor = new Complex(1, 1);
    const division = complex.divideBy(divisor);
    expect(division.equalsTo(new Complex(4.5, -1.5))).toBe(true);
  });

  test('Division of a complex by a zero complex', () => {
    const complex = new Complex(6, 3);
    expect(complex.divideBy(new Complex(0)).isInfinite()).toBe(true);
  });

  test('Squared Magnitude of a complex using Complex.magnitudeOf', () => {
    expect(Complex.squaredMagnitudeOf(new Complex(3, 4))).toBe(25);
  });

  test('Squared Magnitude of a complex using Complex.magnitudeOf', () => {
    expect(new Complex(3, 4).squaredMagnitude).toBe(25);
  });

  test('Magnitude of a complex using Complex.magnitudeOf', () => {
    expect(Complex.magnitudeOf(new Complex(3, 4))).toBe(5);
  });

  test('Magnitude of a complex using Complex.magnitudeOf', () => {
    expect(new Complex(3, 4).magnitude).toBe(5);
  });

  test('Argument of a complex using Complex.argumentOf', () => {
    const e = 1e-8;
    const left = Math.PI / 2 - e;
    const right = Math.PI / 2 + e;
    const argument = Complex.argumentOf(new Complex(1, 1));
    expect(left >= argument && argument <= right).toBe(true);
    expect(Complex.argumentOf(new Complex(0))).toBeNaN();
  });

  test('Argument of a complex using this.argument', () => {
    const e = 1e-8;
    const left = Math.PI / 2 - e;
    const right = Math.PI / 2 + e;
    const argument = new Complex(1, 1).argument;
    expect(left >= argument && argument <= right).toBe(true);
    expect(new Complex(0).argument).toBeNaN();
  });

  test('Squared complex number using Complex.squared', () => {
    expect(Complex.squared(new Complex(0, 1)).equalsTo(-1)).toBe(true);
  });

  test('Squared complex number using this.squared', () => {
    expect(new Complex(0, 1).squared.equalsTo(-1)).toBe(true);
  });

  test('Complex square root using Complex.sqrt', () => {
    const [first, second] = Complex.sqrt(new Complex(3, 4));
    expect(first.equalsTo(new Complex(2, 1))).toBe(true);
    expect(second.equalsTo(new Complex(-2, -1))).toBe(true);
    expect(first.equalsTo(second.opposite)).toBe(true);
  });

  test('Complex square root using this.sqrt', () => {
    const [first, second] = new Complex(3, 4).sqrt;
    expect(first.equalsTo(new Complex(2, 1))).toBe(true);
    expect(second.equalsTo(new Complex(-2, -1))).toBe(true);
    expect(first.equalsTo(second.opposite)).toBe(true);
  });
});
