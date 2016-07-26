import test from 'ava'
import {quickSort, quickSortAdvanced} from './p3'

test.cb(t => {
  const arr = [2, 3, 9, 2, 2]
  quickSort(arr)
  t.deepEqual(arr, [2, 2, 2, 3, 9])
  t.end()
})

test.cb(t => {
  const arr = [2, 3, 9, 2, 2]
  quickSortAdvanced(arr)
  t.deepEqual(arr, [2, 2, 2, 3, 9])
  t.end()
})

