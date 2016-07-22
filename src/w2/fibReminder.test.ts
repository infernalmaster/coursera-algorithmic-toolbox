import test from 'ava';
import fibReminder, {calculateSequences} from './fibReminder';

test.only.cb((t) => {
  t.is(fibReminder(5, 2), 1);
  t.is(fibReminder(4, 2), 1);
  t.is(fibReminder(11, 3), 2);
  t.is(fibReminder(10, 3), 1);
  t.is(fibReminder(281621358815590, 30524), 11963);
  t.end()
});


test.cb('calculdateSequences', (t) => {
  t.deepEqual(calculateSequences(2), [0, 1, 1]);
  t.deepEqual(calculateSequences(3), [0, 1, 1, 2, 0, 2, 2, 1]);
  t.deepEqual(calculateSequences(4), [0, 1, 1, 2, 3, 1]);
  t.deepEqual(calculateSequences(5), [0, 1, 1, 2, 3, 0, 3, 3, 1, 4, 0, 4, 4, 3, 2, 0, 2, 2, 4, 1]);

  // t.is(calculateSequences(30524), [0]);

  t.end();
});
