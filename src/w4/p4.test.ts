import test from 'ava'
import {mergeSort, getNumberOfInversions} from './p4'

test.cb(t => {
  const arr = [2, 3, 9, 2, 2]
  mergeSort(arr)
  t.deepEqual(arr, [2, 2, 2, 3, 9])
  t.end()
})

test.cb(t => {
  const arr = [2, 12, 9, 3, 2, 1]
  mergeSort(arr)
  t.deepEqual(arr, [1, 2, 2, 3, 9, 12])
  t.end()
})

test.cb(t => {
  t.deepEqual(getNumberOfInversions([2, 3, 9, 2, 2]), 2)
  t.end()
})