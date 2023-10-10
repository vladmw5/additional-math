import { EqualableTo } from './EqualableTo';

export interface ComparableTo<T> extends EqualableTo<T> {
  isGreaterThan(other: T): boolean;
  isLessThan(other: T): boolean;
  isGreaterThanOrEqualsTo(other: T): boolean;
  isLessThanOrEqualsTo(other: T): boolean;
  compareTo(other: T): number;
}
