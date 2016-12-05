import _ from 'lodash/fp';
import test from 'tape';

test('_.compact()', assert => {
  const arr = [1, 0, null, 12, undefined, false, 123];
  const res = _.compact(arr);

  assert.looseEqual(res, [1, 12, 123],
  'Removes the falsy values from a list');
  assert.end();
});