export interface IsFieldOf<T> {
  add(other: T): T;
  subtract(other: T): T;
  multiplyBy(other: T): T;
  divideBy(other: T): T;
  get opposite(): T;
  get inverse(): T;
  isZero(): boolean;
}