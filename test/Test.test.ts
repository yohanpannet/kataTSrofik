import assert from 'assert';

  import Test from '../src/Test';

describe('Test', () => {
  
  it('retrun true when asked to', () => {
    assert.equal(true, Test.returnTrue());
  });
});
