import test from 'ava'
import sum from './p5'

test.cb(t => {
  t.deepEqual(sum(6), [1,2,3])
  t.end()
})


test.cb(t => {
  t.deepEqual(sum(8), [1,2,5])
  t.end()
})

test.cb(t => {
  t.deepEqual(sum(2), [2])
  t.end()
})

test.cb(t => {
  t.deepEqual(sum(9), [1, 2, 6])
  t.end()
})

test.cb(t => {
  t.deepEqual(sum(10), [1, 2, 3, 4])
  t.end()
})

test.cb(t => {
  t.deepEqual(sum(11), [1, 2, 3, 5])
  t.end()
})

test.cb(t => {
  t.deepEqual(sum(12), [1, 2, 3, 6])
  t.end()
})

test.cb(t => {
  t.deepEqual(sum(22), [1, 2, 3, 4, 5, 7])
  t.end()
})