import test from 'ava';
import fibonacci from './fibonacci';

test('fibonacci return good', (t) => {
  t.plan(5);
  t.is(fibonacci(0), 0);
  t.is(fibonacci(1), 1);
  t.is(fibonacci(2), 1);
  t.is(fibonacci(9), 34);
  t.is(fibonacci(10), 55);
});


test('fibonacci big number', (t) => {
  t.plan(1);
  t.is(fibonacci(100), 354224848179262000000);
});
