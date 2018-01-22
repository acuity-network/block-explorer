import * as t from '../actions/types';
import reducer, * as selectors from './transactions';

describe('reducers/transactions', () => {
  it('should ignore unrecognized actions', () => {
    const mockAction = {
      type: 'test/TEST_ACTION',
    };
    const state = reducer('test', mockAction);

    expect(state).toEqual('test');
  });

  it('should save transactions to the store', () => {
    const mockAction = {
      type: t.FETCH_TRANSACTION_SUCCESS,
      payload: {
        hash: 'test',
        blockNumber: 10,
      },
    };
    const state = reducer(undefined, mockAction);

    expect(state).toHaveProperty('test');
    expect(state.test).toHaveProperty('hash', 'test');
    expect(state.test).toHaveProperty('blockNumber', 10);
  });
});

describe('selectors/transactions', () => {
  describe('getTransaction', () => {
    it('should return the correct account from state', () => {
      const mockState = {
        transactions: {
          test: {
            blockNumber: 10,
          },
        },
      };

      const account = selectors.getTransaction(mockState, 'test');

      expect(account).toHaveProperty('blockNumber', 10);
    });
  });
});
