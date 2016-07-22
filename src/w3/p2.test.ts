import test from 'ava';
import knapsack from './p2';

test.cb((t) => {
  t.is(knapsack(50, [{value: 60, weight: 20}, {value: 100, weight: 50}, {value: 120, weight: 30}]), 180);
  t.end()
});

test.cb((t) => {
  t.is(knapsack(10, [{value: 500, weight: 30}]), 166.6667);
  t.end()
});