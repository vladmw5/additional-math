import { IsRingOf } from './IsRingOf';

export interface IsFieldOf<T> extends IsRingOf<T> {
  get inverse(): T;
}
