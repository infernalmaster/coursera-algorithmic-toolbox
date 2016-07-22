import test from 'ava';
import gcd from './gcd';

test('gcd', (t) => {
  t.plan(3);
  t.is(gcd(10, 4), 2);
  t.is(gcd(3918848, 1653264), 61232);

  t.is(gcd(357, 234), 3);
});
