import test from 'ava';
import points from './p4';


test.cb((t) => {
  t.deepEqual(points([{a: 1, b: 3}, {a: 2, b: 5}, {a: 3, b: 6}]), [3])
  t.end()
})


test.cb((t) => {
  t.deepEqual(points([{a: 4, b: 7}, {a: 1, b: 3}, {a: 2, b: 5}, {a: 5, b: 6}]), [3, 6])
  t.end()
})