export interface IsRingOf<T> {
  add(other: T): T;
  subtract(other: T): T;
  multiplyBy(other: T): T;
  divideBy(other: T): T;
  get opposite(): T;
  isZero(): boolean;
  isOne(): boolean;
}