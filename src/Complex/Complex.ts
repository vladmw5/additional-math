import { EqualableTo } from '../Interfaces/EqualableTo';
import { IsFieldOf } from '../Interfaces/IsFieldOf';

export class Complex
  implements EqualableTo<Complex | number>, IsFieldOf<Complex>
{
  constructor(
    private readonly _real: number = 0,
    private readonly _imaginary: number = 0
  ) {}

  public get real() {
    return this._real;
  }

  public get imaginary() {
    return this._imaginary;
  }

  add(other: Complex | number): Complex {
    const isComplex = other instanceof Complex;

    return new Complex(
      this.real + (isComplex ? other.real : other),
      this.imaginary + (isComplex ? other.imaginary : 0)
    );
  }

  subtract(other: Complex | number): Complex {
    const isComplex = other instanceof Complex;

    return new Complex(
      this.real - (isComplex ? other.real : other),
      this.imaginary - (isComplex ? other.imaginary : 0)
    );
  }

  multiplyBy(other: Complex | number): Complex {
    if (typeof other === 'number') {
      return new Complex(this.real * other, this.imaginary * other);
    }

    return new Complex(
      this.real * other.real - this.imaginary * other.imaginary,
      this.imaginary * other.real + this.real * other.imaginary
    );
  }

  divideBy(other: Complex | number): Complex {
    if (new Complex().equalsTo(other)) {
      return new Complex(Infinity);
    }
    return this.multiplyBy(
      typeof other === 'number' ? 1 / other : other.inverse
    );
  }

  static oppositeOf(complex: Complex) {
    return new Complex(-complex.real, -complex.imaginary);
  }

  get opposite(): Complex {
    return Complex.oppositeOf(this);
  }

  static inverseOf(complex: Complex) {
    const magnitude = complex.squaredMagnitude;
    return new Complex(
      complex.real / magnitude,
      -complex.imaginary / magnitude
    );
  }

  get inverse(): Complex {
    return Complex.inverseOf(this);
  }

  isZero(): boolean {
    return this.real === 0 && this.imaginary === 0;
  }

  isInfinite(): boolean {
    return this.real === Infinity || this.imaginary === Infinity;
  }

  equalsTo(other: number | Complex): boolean {
    if (typeof other === 'number') {
      return this.equalsTo(new Complex(other));
    }

    return this.real === other.real && this.imaginary === other.imaginary;
  }

  static conjugateOf(complex: Complex): Complex {
    return new Complex(complex.real, -complex.imaginary);
  }

  get conjugate(): Complex {
    return Complex.conjugateOf(this);
  }

  static squaredMagnitudeOf(complex: Complex): number {
    return complex.real ** 2 + complex.imaginary ** 2;
  }

  get squaredMagnitude(): number {
    return Complex.squaredMagnitudeOf(this);
  }

  static magnitudeOf(complex: Complex): number {
    return Math.sqrt(complex.squaredMagnitude);
  }

  get magnitude(): number {
    return Complex.magnitudeOf(this);
  }

  static argumentOf(complex: Complex): number {
    if (complex.real === 0) {
      return complex.imaginary > 0
        ? Math.PI / 2
        : complex.imaginary < 0
        ? (3 * Math.PI) / 2
        : NaN;
    }

    return Math.atan2(complex.imaginary, complex.real);
  }

  get argument(): number {
    return Complex.argumentOf(this);
  }
}
