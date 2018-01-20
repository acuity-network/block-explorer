import * as actions from './creators';
import * as t from './types';

describe('actions/creators', () => {
  describe('fetchBlocks', () => {
    it('should return an action with the correct type and payload', () => {
      const action = actions.fetchBlocks(10, 5);

      expect(action).toHaveProperty('type', t.FETCH_BLOCKS);
      expect(action).toHaveProperty('payload');
      expect(action.payload).toHaveProperty('endingBlockNumber', 10);
      expect(action.payload).toHaveProperty('amountBlocks', 5);
    });
  });
});
