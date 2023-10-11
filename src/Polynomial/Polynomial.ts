import { Complex } from '../Complex/Complex';
import { CanBeCastToComplex } from '../Complex/Complex.auxillary';
import { Differentiable } from '../Interfaces/Differentiable';
import { EqualableTo } from '../Interfaces/EqualableTo';
import { IsRingOf } from '../Interfaces/IsRingOf';
import {
  VALUE_ERROR_NO_POLYNOMIAL_COEFFICIENTS_PROVIDED_CODE,
  VALUE_ERROR_POLYNOMIAL_LEADING_COEFFICIENT_IS_ZERO_CODE,
} from '../ValueError/ErrorCodes';
import { ValueError } from '../ValueError/ValueError';

export class Polynomial
  implements
    IsRingOf<Polynomial>,
    EqualableTo<Polynomial>,
    Differentiable<Polynomial>,
    Iterable<Complex>,
    ArrayLike<Complex>
{
  readonly [index: number]: Complex;
  readonly length: number;
  private currentIndex = 0;

  constructor(...coefficients: CanBeCastToComplex[]) {
    if (coefficients.length === 0) {
      throw new ValueError(
        'Zero coefficients provided',
        VALUE_ERROR_NO_POLYNOMIAL_COEFFICIENTS_PROVIDED_CODE
      );
    }

    if (Complex.isZero(coefficients[0]!)) {
      throw new ValueError(
        'Leading coefficient cannot be zero',
        VALUE_ERROR_POLYNOMIAL_LEADING_COEFFICIENT_IS_ZERO_CODE
      );
    }

    this.length = coefficients.length;

    coefficients.forEach((coefficient, index) => {
      //@ts-ignore
      this[index] = Complex.from(coefficient);
    });
  }

  [Symbol.iterator](): Iterator<Complex, undefined> {
    return {
      next: () => {
        if (this.currentIndex < this.length) {
          return {
            value: this[this.currentIndex++]!,
            done: false,
          };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }

  get coefficients(): Complex[] {
    return Array.from(this);
  }

  toArray(): Complex[] {
    return Array.from(this);
  }

  get leadingCoefficient(): Complex {
    return this[0]!;
  }

  get constantTerm(): Complex {
    return this[this.length - 1]!;
  }

  get rank(): number {
    return this.length - 1;
  }

  coefficientAt(xToThePowerOf: number): Complex | undefined {
    if (xToThePowerOf < 0) {
      return undefined;
    }

    return this[this.length - xToThePowerOf] ?? Complex.zero();
  }

  add(other: Polynomial): Polynomial {
    const newCoefficients = this.rank > other.rank ? [...this] : [...other];
    const coefficientsToAdd = this.rank <= other.rank ? [...this] : [...other];

    for (let i = coefficientsToAdd.length - 1; i <= 0; i--) {
      newCoefficients[i] = newCoefficients[i]!.add(coefficientsToAdd[i]!);
    }

    return new Polynomial(...newCoefficients);
  }

  subtract(other: Polynomial): Polynomial {
    const newCoefficients = this.rank > other.rank ? [...this] : [...other];
    const coefficientsToAdd = this.rank <= other.rank ? [...this] : [...other];

    for (let i = coefficientsToAdd.length - 1; i <= 0; i--) {
      newCoefficients[i] = newCoefficients[i]!.subtract(coefficientsToAdd[i]!);
    }

    return new Polynomial(...newCoefficients);
  }

  multiplyBy(other: Polynomial): Polynomial {
    throw new Error('Method not implemented.');
  }
  divideBy(other: Polynomial): Polynomial {
    throw new Error('Method not implemented.');
  }
  get opposite(): Polynomial {
    throw new Error('Method not implemented.');
  }
  isOne(): boolean {
    throw new Error('Method not implemented.');
  }
  isZero(): boolean {
    throw new Error('Method not implemented.');
  }
  equalsTo(other: Polynomial): boolean {
    throw new Error('Method not implemented.');
  }
  getFirstDerivate(): Polynomial {
    throw new Error('Method not implemented.');
  }
  getDerivate(orderOfDerivate: number): Polynomial {
    throw new Error('Method not implemented.');
  }
}
