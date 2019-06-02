import { from } from 'ix/iterable';
import { slice } from 'ix/iterable/operators';
import { hasNext, noNext } from '../iterablehelpers';

test('Iterable#slice slices at zero with one item', () => {
  const xs = from([1, 2, 3, 4]);
  const ys = from(xs).pipe(slice(0, 1));

  const it = ys[Symbol.iterator]();
  hasNext(it, 1);
  noNext(it);
});

test('Iterable#slice slices at one with one item', () => {
  const xs = from([1, 2, 3, 4]);
  const ys = from(xs).pipe(slice(1, 1));

  const it = ys[Symbol.iterator]();
  hasNext(it, 2);
  noNext(it);
});

test('Iterable#slice slices at one with multiple items', () => {
  const xs = from([1, 2, 3, 4]);
  const ys = from(xs).pipe(slice(1, 2));

  const it = ys[Symbol.iterator]();
  hasNext(it, 2);
  hasNext(it, 3);
  noNext(it);
});

test('Iterable#slice slices at one with no end', () => {
  const xs = from([1, 2, 3, 4]);
  const ys = from(xs).pipe(slice(1));

  const it = ys[Symbol.iterator]();
  hasNext(it, 2);
  hasNext(it, 3);
  hasNext(it, 4);
  noNext(it);
});

test('Iterable#slice slices at zero with no end', () => {
  const xs = from([1, 2, 3, 4]);
  const ys = from(xs).pipe(slice(0));

  const it = ys[Symbol.iterator]();
  hasNext(it, 1);
  hasNext(it, 2);
  hasNext(it, 3);
  hasNext(it, 4);
  noNext(it);
});
