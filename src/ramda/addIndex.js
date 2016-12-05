import R from 'ramda';
import test from 'tape';

test('R.addIndex()', assert => {
  const mapIndexed = R.addIndex(R.map);

  assert.end();
});
