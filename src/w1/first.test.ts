import test from 'ava';
import max from './first';

test('f1', (t) => {
    t.plan(1);
    t.is(max([1, 2, 3]), 6);
});

test('f2', (t) => {
    t.plan(1);
    t.is(max([7, 5, 14, 2, 8, 8, 10, 1, 2, 3]), 140);
});


test('big numbers', (t) => {
    t.plan(1);
    t.is(max([100000, 90000]), 9000000000);
});
