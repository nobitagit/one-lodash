import R from 'ramda';
import test from 'tape';

test('R.add()', assert => {
  const add2 = R.add(2);
  const res = add2(2);

  assert.equal(add2(2), 4,
  'Adds a number to another');

  assert.throws(() => R.add(2)(2)(2), 'Function',
  'Arity is 2, so invoking a 3rd time will throw an error');

  assert.equal(R.add(2)(2, 2, 2), 4,
  'Passing 2+ params in the 2nd invocation will result in only the 1st of them being processed');

  assert.equal(R.add(2, 2, 2, 2), 4,
  'To pass multiple params supply them in the 1st invocation');

  assert.end();
});
