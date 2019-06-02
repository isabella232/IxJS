import { range } from 'ix/iterable';
import { scanRight } from 'ix/iterable/operators';
import { hasNext, noNext } from '../iterablehelpers';

test('Iterable#scanRight no seed', () => {
  const res = range(0, 5).pipe(scanRight((n, x, i) => n + x + i));

  const it = res[Symbol.iterator]();
  hasNext(it, 10);
  hasNext(it, 14);
  hasNext(it, 16);
  hasNext(it, 16);
  noNext(it);
});

test('Iterable#scanRight with seed', () => {
  const res = range(0, 5).pipe(scanRight((n, x, i) => n - x - i, 20));

  const it = res[Symbol.iterator]();
  hasNext(it, 12);
  hasNext(it, 6);
  hasNext(it, 2);
  hasNext(it, 0);
  hasNext(it, 0);
  noNext(it);
});
