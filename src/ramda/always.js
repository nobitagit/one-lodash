import R from 'ramda';
import test from 'tape';

/**
 * R.always(
 *   * => the value to be returned at every invocation
 * )
 * Similar in behavior to Js 'const'.
 * Always returns the same value.
 */
test('R.always()', assert => {
  /**
   * Goal: 
   */
  let toBeDone = R.always('Tomorrow');
  
  let tasks = [
    'Wash dishes',
    'Clean house',
    'Sort out the bills',
  ];

  let res = R.map(R.assoc('day'), tasks)(tasks);
  console.log(res);
  assert.end();
});