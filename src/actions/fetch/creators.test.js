import * as actions from './creators';
import * as t from './types';

describe('actions/creators/fetch', () => {
  describe('fetchAccount', () => {
    it('should return an action with the correct type and payload', () => {
      const action = actions.fetchAccount('test');

      expect(action).toHaveProperty('type', t.FETCH_ACCOUNT);
      expect(action).toHaveProperty('payload');
      expect(action.payload).toHaveProperty('address', 'test');
    });
  });

  describe('fetchBlocks', () => {
    it('should return an action with the correct type and payload', () => {
      const action = actions.fetchBlocks(10, 5);

      expect(action).toHaveProperty('type', t.FETCH_BLOCKS);
      expect(action).toHaveProperty('payload');
      expect(action.payload).toHaveProperty('endingBlockNumber', 10);
      expect(action.payload).toHaveProperty('amountBlocks', 5);
    });
  });

  describe('fetchTransaction', () => {
    it('should return an action with the correct type and payload', () => {
      const action = actions.fetchTransaction('test');

      expect(action).toHaveProperty('type', t.FETCH_TRANSACTION);
      expect(action).toHaveProperty('payload');
      expect(action.payload).toHaveProperty('hash', 'test');
    });
  });
});
