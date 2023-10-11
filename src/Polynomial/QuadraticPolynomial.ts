import { Complex } from '../Complex/Complex';
import { EqualableTo } from '../Interfaces/EqualableTo';
import { VALUE_ERROR_POLYNOMIAL_LEADING_COEFFICIENT_IS_ZERO_CODE } from '../ValueError/ErrorCodes';
import { ValueError } from '../ValueError/ValueError';

export class QuadraticPolynomial implements EqualableTo<QuadraticPolynomial> {
  private readonly _a = new Complex(1);
  private readonly _b = new Complex(0);
  private readonly _c = new Complex(0);

  constructor(
    a: Complex | number = new Complex(1),
    b: Complex | number = new Complex(0),
    c: Complex | number = new Complex(0)
  ) {
    if (Complex.isZero(a)) {
      throw new ValueError(
        'Quadratic coefficient cannot be zero',
        VALUE_ERROR_POLYNOMIAL_LEADING_COEFFICIENT_IS_ZERO_CODE
      );
    }

    this._a = typeof a === 'number' ? new Complex(a) : a;
    this._b = typeof b === 'number' ? new Complex(b) : b;
    this._c = typeof c === 'number' ? new Complex(c) : c;
  }

  get a() {
    return this._a;
  }

  get b() {
    return this._b;
  }

  get c() {
    return this._c;
  }

  equalsTo(other: QuadraticPolynomial): boolean {
    return (
      this.a.equalsTo(other.a) &&
      this.b.equalsTo(other.b) &&
      this.c.equalsTo(other.c)
    );
  }

  valueAt(point: Complex | number): Complex {
    const { a, b, c } = this;

    return a.multiplyBy(Complex.squared(point)).add(b.multiplyBy(point)).add(c);
  }

  argumentIf(valueIs: Complex | number): [Complex, Complex] {
    const { a, b, c } = this;
    const D = b.squared.subtract(
      a.multiplyBy(c.subtract(valueIs)).multiplyBy(4)
    );

    return [
      b.opposite.add(D.sqrt[0]).divideBy(a.multiplyBy(2)),
      b.opposite.add(D.sqrt[1]).divideBy(a.multiplyBy(2)),
    ];
  }

  get zeros(): [Complex, Complex] {
    return this.argumentIf(0);
  }
}
