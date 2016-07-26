import test from 'ava'
import majorityElement from './p2'

test.cb(t => {
  t.deepEqual(majorityElement([2, 3, 9, 2, 2]), 1)
  t.end()
})

test.cb(t => {
  t.deepEqual(majorityElement([1, 2, 3, 4]), 0)
  t.end()
})

test.cb(t => {
  t.deepEqual(majorityElement([1, 2, 3, 1]), 0)
  t.end()
})
