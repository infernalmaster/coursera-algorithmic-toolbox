import test from 'ava';
import pointsInLines, {fasetPointsInLines} from './p5';

test.cb('simple', t => {
  t.deepEqual(pointsInLines([{x0: 0, x1: 5}, {x0: 7, x1: 10}], [1, 6, 11]), [1, 0, 0])
  t.end()
})

test.cb('fast', t => {
  t.deepEqual(fasetPointsInLines([{ x0: 0, x1: 5 }, { x0: 7, x1: 10 }], [1, 6, 11]), [1, 0, 0])
  t.deepEqual(fasetPointsInLines([{x0: 0, x1: 5}, {x0: -3, x1: 2}, {x0: 7, x1: 10}], [1, 6]), [2, 0])
  t.end()
})
