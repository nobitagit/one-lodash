import _ from 'lodash/fp';
import test from 'tape';

test('_.chunk()', assert => {
  const chunk2 = _.chunk(2);
  const arr = [1,2,3,4,5,6,7,8,9,10];
  const res = chunk2(arr);
  assert.equal(res.length, 5,
  'Given an array of 10 elements it should produce an array of 5 if 2 is passed as condiguration');

  assert.looseEqual(res[0], [1,2],
  'The first item should be an array of the first 2 items in the input array');
  assert.end();
});