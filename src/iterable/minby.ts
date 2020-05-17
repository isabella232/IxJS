import { extremaBy } from './_extremaby';
import { ExtremaOptions } from './extremaoptions';
import { equalityComparer } from '../util/comparer';
import { identity } from '../util/identity';

/**
 * Returns the elements in an terable sequence with the minimum key value.
 *
 * @export
 * @template TSource The type of the elements in the source sequence.
 * @template TKey The type of the key computed for each element in the source sequence.
 * @param {Iterable<TSource>} source An async-iterable sequence to get the minimum elements for.
 * @param {ExtremaOptions<TSource, TKey>} [options] The options which include an optional comparer.
 * @returns {TSource[]} A list of zero or more elements that have a minimum key value.
 */
export function minBy<TSource, TKey>(
  source: Iterable<TSource>,
  options?: ExtremaOptions<TSource, TKey>
): TSource[] {
  const opts = options || ({} as ExtremaOptions<TSource, TKey>);
  if (!opts.comparer) {
    opts.comparer = equalityComparer;
  }
  if (!opts.selector) {
    opts.selector = identity;
  }
  opts.comparer = (key, minValue) => -opts.comparer!(key, minValue);
  return extremaBy(source, opts);
}
