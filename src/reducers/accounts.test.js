import * as t from '../actions/types';
import reducer, * as selectors from './accounts';

describe('reducers/accounts', () => {
  it('should ignore unrecognized actions', () => {
    const mockAction = {
      type: 'test/TEST_ACTION',
    };
    const state = reducer('test', mockAction);

    expect(state).toEqual('test');
  });

  it('should save accounts to the store', () => {
    const mockAction = {
      type: t.FETCH_ACCOUNT,
      payload: {
        address: 'test',
        balance: 10,
        transactionCount: 2,
      },
    };
    const state = reducer(undefined, mockAction);

    expect(state).toHaveProperty('test');
    expect(state.test).toHaveProperty('address', 'test');
    expect(state.test).toHaveProperty('balance', 10);
    expect(state.test).toHaveProperty('transactionCount', 2);
  });

  it('should update accounts if the data changed', () => {
    const mockAction = {
      type: t.FETCH_ACCOUNT,
      payload: {
        address: 'test',
        balance: 15,
        transactionCount: 3,
      },
    };
    const mockState = {
      test: {
        address: 'test',
        balance: 10,
        transactionCount: 2,
      },
    };
    const state = reducer(mockState, mockAction);

    expect(state.test).toHaveProperty('address', 'test');
    expect(state.test).toHaveProperty('balance', 15);
    expect(state.test).toHaveProperty('transactionCount', 3);
  });
});

describe('selectors/accounts', () => {
  describe('getAccount', () => {
    it('should return the correct account from state', () => {
      const mockState = {
        accounts: {
          test: {
            balance: 10,
          },
        },
      };

      const account = selectors.getAccount(mockState, 'test');

      expect(account).toHaveProperty('balance', 10);
    });
  });
});
