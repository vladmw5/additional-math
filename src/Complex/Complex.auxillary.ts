import { Complex } from './Complex';

export type ComplexLike = {
  real: number;
  imaginary: number;
};

export type CanBeCastToComplex = Complex | number | ComplexLike;
