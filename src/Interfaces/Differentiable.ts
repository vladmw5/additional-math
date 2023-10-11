export interface Differentiable<T> {
  getFirstDerivate(): T;
  getDerivate(orderOfDerivate: number): T;
}
