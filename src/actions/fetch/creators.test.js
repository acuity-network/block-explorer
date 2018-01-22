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

  describe('fetchAccountSuccess', () => {
    it('should return an action with the correct type and payload', () => {
      const action = actions.fetchAccountSuccess({ test: true });

      expect(action).toHaveProperty('type', t.FETCH_ACCOUNT_SUCCESS);
      expect(action).toHaveProperty('payload');
      expect(action.payload).toHaveProperty('test', true);
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

  describe('fetchBlocksSuccess', () => {
    it('should return an action with the correct type and payload', () => {
      const action = actions.fetchBlocksSuccess({ test: true }, ['test']);

      expect(action).toHaveProperty('type', t.FETCH_BLOCKS_SUCCESS);
      expect(action).toHaveProperty('payload');
      expect(action.payload).toHaveProperty('blocksLoaded', { test: true });
      expect(action.payload).toHaveProperty('byNumber', ['test']);
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

  describe('fetchTransactionSuccess', () => {
    it('should return an action with the correct type and payload', () => {
      const action = actions.fetchTransactionSuccess({ test: true});

      expect(action).toHaveProperty('type', t.FETCH_TRANSACTION_SUCCESS);
      expect(action).toHaveProperty('payload');
      expect(action.payload).toHaveProperty('test', true);
    });
  });
});
