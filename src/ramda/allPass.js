import R from 'Ramda';
import test from 'tape';

/**
 * R.allPass(
 *   list => list of predicates (fn or values) to evaluate
 *   list => list to be passed
 * )
 * Similar to Array.prototype.every.
 */
test('R.allPass()', assert => {
  /**
   * Goal: make sure that every item in the list has a price field defined.
   */
  const products = [
    {id: 'abc', price: 22.12},
    {id: 'cde', price: 11.23},
  ];
  const havePrice = R.all(R.has('price'));
  assert.true(havePrice(products),
  'Returns true if all elements satisfy the condition');

  /**
   * Goal: given a list of ordered products:
   * - Leave only those that are not expired
   * - Check if these are in stock
   * - Determine if all these products can be shipped (must be in stock)
   */
  const expiredProducts = [
    {id: 'abc', price: 22.12},
    {id: 'cde', price: 11.22},
  ];

  const orderedProducts = [
    {id: 'abc', price: 22.12, inStock: true, weight: 30},
    {id: 'fgh', price: 32.52, inStock: true, weight: 23},
    {id: 'ijk', price: 12.98, inStock: true, weight: 40},
    {id: 'ijk', price: 12.98, inStock: false, weight: 32},
  ];

  const canBeBought = R.difference(orderedProducts, expiredProducts);
  const inStock = R.propEq('inStock', true);
  const canBeShipped = R.all(inStock)(canBeBought);
  // same as: R.all(R.propEq('inStock', true))(R.difference(orderedProducts, expiredProducts))
  assert.false(canBeShipped,
  'False if one element at least does not satisfy the predicate');
  assert.end();
});