import test from 'ava';
import lcm from './lcm';

test('lcm', (t) => {
  t.plan(2);
  t.is(lcm(6, 8), 24);
  t.is(lcm(28851538, 1183019), 1933053046);
});
