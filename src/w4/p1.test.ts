import test from 'ava'
import bSearch, {binarySearch} from './p1'

test.cb(t => {
  t.deepEqual(bSearch([1, 5, 8, 12, 13], [8, 1, 23, 1, 11]), [2, 0, -1, 0, -1])
  t.end()
})

test.cb(t => {
  t.deepEqual(binarySearch([1, 5, 8, 12, 13], 0, 4, 23), -1)
  t.end()
})