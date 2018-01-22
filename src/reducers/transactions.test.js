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
    it('should return the correct transaction from state', () => {
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

  describe('getCurrentTransactionForDisplay', () => {
    const mockState = {
      location: {
        payload: {
          hash: '_0x12345678',
        },
      },
    };
    const mockGetTransaction = jest.fn((state, hash) => ({ hash, from: 'alpha', to: 'beta', value: 175 }));
    const mockFromWei = jest.fn((amount) => (amount * 10));
    const mockMethods = { getTransaction: mockGetTransaction, fromWei: mockFromWei };

    it('should use the hash from location to get the current transaction', () => {
      selectors.getCurrentTransactionForDisplay(mockState, mockMethods);

      expect(mockGetTransaction).toBeCalled();
      expect(mockGetTransaction).toBeCalledWith(mockState, '0x12345678');
    });

    it('should transform the Wei balance to Ether', () => {
      selectors.getCurrentTransactionForDisplay(mockState, mockMethods);

      expect(mockFromWei).toBeCalled();
      expect(mockFromWei).toBeCalledWith(175, 'ether');
    });

    it('should return an object with transaction display data', () => {
      const value = selectors.getCurrentTransactionForDisplay(mockState, mockMethods);

      expect(value).toHaveProperty('hash', '0x12345678');
      expect(value).toHaveProperty('to', 'beta');
      expect(value).toHaveProperty('from', 'alpha');
      expect(value).toHaveProperty('valueInEther', 1750);
    });
  });
});
