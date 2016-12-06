import R from 'ramda';
import test from 'tape';

test('R.addIndex()', assert => {
  /**
   * A function like R.map has a single argument being passed on every iteration.
   * The index and the list are NOT passed like Array.prototype.map does.
   * In fact given this function:
   */
  const ret = R.map((value, i, l) => ({
    value,
    index: i, // will be undefined!
    list: l, // will be undefined!
  }), ['a']);

  /**
   * The index and the list are undefined
   */
  assert.looseEqual(ret[0], {
    value: 'a',
    index: undefined,
    list: undefined
  });

  /**
   * To regain this functionality we can wrap R.map in R.addIndex()
   */
  const map = R.addIndex(R.map);
  const ret2 = map((value, i, l) => ({
    value,
    index: i,
    list: l,
  }), ['a']);
  assert.looseEqual(ret2[0], {
    value: 'a',
    index: 0,
    list: ['a']
  },
  'It will add index and a reference to the iteratee to R.map');

  /**
   * Same happens with all function that do not pass index by default, like R.filter() for ex.
   */
  const list = [{
    name: 'Anthony',
    age: 21,
  },{
    name: 'Ben',
    age: 25,
  }, {
    name: 'Chris',
    age: 29,
  }, {
    name: 'Dave',
    age: 33,
  }];

  const filter = R.addIndex(R.filter);
  const ret3 = filter((value, i, l) => i % 2, list);
  assert.looseEqual(ret3,
  [{ name: 'Ben', age: 25 }, { name: 'Dave', age: 33 }],
  'It will add index to R.filter')

  assert.end();
});
