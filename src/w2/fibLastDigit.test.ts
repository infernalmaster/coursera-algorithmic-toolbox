import test from 'ava';
import fibLastDigit from './fibLastDigit';

test('fibLastDigit return good', (t) => {
  t.plan(3);
  t.is(fibLastDigit(3), 2);
  t.is(fibLastDigit(327305), 5);
  t.is(fibLastDigit(200), 5);
});

