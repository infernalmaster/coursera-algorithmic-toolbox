import test from 'ava';
import calculator, {calculatorMemoryOptimized} from './p1';

test.cb((t) => {
  t.deepEqual(calculator(5), [1, 2, 4, 5]);
  t.end()
});

test.cb((t) => {
  t.deepEqual(calculator(96234), [1, 3, 9, 10, 11, 22, 66, 198, 594, 1782, 5346, 16038, 16039, 32078, 96234]);
  t.end()
});

test.cb((t) => {
  t.deepEqual(calculatorMemoryOptimized(5), [1, 2, 4, 5]);
  t.end();
});

test.cb((t) => {
  t.deepEqual(calculatorMemoryOptimized(96234), [1, 3, 9, 10, 11, 22, 66, 198, 594, 1782, 5346, 16038, 16039, 32078, 96234]);
  t.end()
});