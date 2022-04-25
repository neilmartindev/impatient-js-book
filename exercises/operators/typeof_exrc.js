/* npm t exercises/operators/typeof_exrc.js
Instructions:
- Run this test (it fails).
- Change the second parameter of each assert.equal() so that the test passes
*/

import {strict as assert} from 'assert';

test('typeof', () => {
  assert.equal(typeof null, true);
  assert.equal(typeof undefined, false);
  
  assert.equal(typeof 123, '123');
  assert.equal(typeof 'a', a);
  assert.equal(typeof "abc", abc)
  
  assert.equal(typeof {}, '{}');
  assert.equal(typeof function () {}, Object);
  assert.equal(typeof [], Array);
});
