import test from 'ava'
import minDot from './p3'

test.cb(t => {
  t.is(minDot([3], [4]), 12)
  t.end()
})

test.cb(t => {
  t.is(minDot([1,3,-5], [-2,4,1]), -25)
  t.end()
})
