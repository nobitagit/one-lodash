import R from 'ramda';
import test from 'tape';

test('R.adjust()', assert => {
  /**
   * Goal: create a function "enableByIndex" that accepts an index and a list. When the function
   * is invoked the item at that index will have its prop "active" marked as true.
   */
  const enableByIndex = R.adjust(
    item => R.assoc('active', true, item), // function to apply
    // index,
    // list
  );
  const arr = [{
    filter: 'Country', active: false,
  }, {
    filter: 'Age', active: false,
  }];

  const ret = enableByIndex(1, arr);
  assert.looseEqual(ret,
  [{
    filter: 'Country', active: false
  },{
    filter: 'Age', active: true
  }],
  'Will apply the desired transformation to the specified index');

  assert.notDeepLooseEqual(ret, arr,
  'Will not mutate the original array, but it will return a copy');
  assert.end();
});
