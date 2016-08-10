import test from 'ava';
import {maxGold} from './p2';

test.cb((t) => {
  t.is(maxGold(10, [1, 4, 8]), 9);
  t.end()
});
