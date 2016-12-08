import R from 'Ramda';
import test from 'tape';

/**
 * R.all(
 *   fn => function to be executed on every item
 *   list => list to be passed
 * )
 * Similar to Array.prototype.every.
 * Just like every() it is short circuited so it will stop as soon as it returns false for one item.
 */
test('R.all()', assert => {
  /**
   * Goal: make sure that every item in the list has a price field defined.
   */
  const arr1 = [
    {id: 'abc', price: 22.12},
    {id: 'cde', price: 11.23},
  ];

  const ret1 = R.all(R.has('price'))(arr1);

  assert.true(ret1,
  'If applying the function to each item returns always true');

  const arr2 = [
    {id: 'abc', price: 22.12},
    {id: 'cde', price: 11.23},
    {id: 'fgh',},
  ];

  const ret2 = R.all(R.has('price'), arr2);
  assert.false(ret3,
  'If applying the function to each item returns false at least once');

  // Alternative example: same as above, but curried this time
  const hasPrice = R.has('price');
  const ret3 = R.all(hasPrice)(arr2);
  assert.false(ret3,
  'If applying the function to each item returns false at least once');

  assert.end();
});