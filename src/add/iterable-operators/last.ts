import { IterableX } from '../../iterable/iterablex';
import { last } from '../../iterable/last';
import { OptionalFindOptions } from '../../iterable/findoptions';

/**
 * @ignore
 */
export function lastProto<T>(this: IterableX<T>, options?: OptionalFindOptions<T>): T | undefined {
  return last(this, options as any);
}

IterableX.prototype.last = lastProto;

declare module '../../iterable/iterablex' {
  interface IterableX<T> {
    last: typeof lastProto;
  }
}
