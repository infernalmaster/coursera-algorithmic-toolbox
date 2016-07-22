import test from 'ava';
import moneyChange from './p1';

test.cb((t) => {
  t.is(moneyChange(2), 2);
  t.end()
});

test.cb((t) => {
  t.is(moneyChange(28), 6);
  t.end()
});


test.cb((t) => {
  t.is(moneyChange(12324), 1236);
  t.end()
});
