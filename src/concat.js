import _ from 'lodash/fp';
import test from 'tape';

test('_.concat()', assert => {
  const input1 = [1];
  const input2 = [2];
  const input3 = 3;
  const input4 = [[4]];

  const res1 = _.concat(input1, input2);
  assert.looseEqual(res1, [1, 2],
  'Concatenates 2 arrays');

  const res2 = _.concat(input1, input3)
  assert.looseEqual(res2, [1, 3],
  'Concatenates 1 array and 1 value in a single array');

  const res3 = _.concat(input1, input4)
  assert.looseEqual(res3, [1, [4]],
  'Does not flatten nested arrays');

  const res4 = _.concat(input1, null)
  assert.looseEqual(res4, [1, null],
  'Does not flatten nested arrays');
  assert.end();
});