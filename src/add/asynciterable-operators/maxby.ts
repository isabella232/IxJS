import { AsyncIterableX } from '../../asynciterable/asynciterablex';
import { maxBy } from '../../asynciterable/maxby';
import { ExtremaOptions } from '../../asynciterable/extremaoptions';

/**
 * @ignore
 */
export function maxByProto<TSource, TKey>(
  this: AsyncIterable<TSource>,
  options?: ExtremaOptions<TSource, TKey>
): Promise<TSource[]> {
  return maxBy(this, options);
}

AsyncIterableX.prototype.maxBy = maxByProto;

declare module '../../asynciterable/asynciterablex' {
  interface AsyncIterableX<T> {
    maxBy: typeof maxByProto;
  }
}
