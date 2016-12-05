import _ from 'lodash/fp';
import test from 'tape';

test('_.difference()', assert => {
  const arr1 = [{}, 1, null, [1,2]];
  const arr2 = [{}, 1, null, [1,2]];

  const diff1 = _.difference(arr1);
  const res1 = diff1(arr2);
  assert.looseEqual(res1[0], {},
  '2 identical objects are considered different, hence they are included');

  assert.equal(res1[1], arr1[3],
  '2 identical Arrays are considered different, hence they are included');

  assert.equal(res1.indexOf(1), -1,
  'Primitive values evaluate as equal, hence are filtered');

  assert.equal(res1.indexOf(null), -1,
  'Null values evaluate as equal, hence are filtered');

  assert.looseEqual(arr1, [{}, 1, null, [1,2]],
  'Original arrays are not modified');
  assert.end();
});