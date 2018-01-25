import * as t from '@/actions/types';
import * as routes from '@/router';
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
      type: t.FETCH_TRANSACTIONS_SUCCESS,
      payload: {
        test: {
          hash: 'test',
          blockNumber: 10,
        },
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

      const account = selectors.getSingleTransaction(mockState, 'test');

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
    const mockFromWei = jest.fn(amount => amount * 10);
    const mockMethods = { getSingleTransaction: mockGetTransaction, fromWei: mockFromWei };

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

  describe('getTransactionInState', () => {
    it('should get the specified transaction from state', () => {
      const mockGetTransaction = jest.fn(() => ({}));
      const mockMethods = { getSingleTransaction: mockGetTransaction };

      selectors.getTransactionInState({}, 'testTransaction', mockMethods);

      expect(mockGetTransaction).toBeCalled();
      expect(mockGetTransaction).toBeCalledWith({}, 'testTransaction');
    });

    it('should return true if the transaction exists', () => {
      const mockGetTransaction = jest.fn(() => ({ 'testKey': 'testValue' }));
      const mockMethods = { getSingleTransaction: mockGetTransaction };

      const value = selectors.getTransactionInState({}, 'testTransaction', mockMethods);

      expect(value).toBe(true);
    });

    it('should return false if the transaction does not exist', () => {
      const mockGetTransaction = jest.fn(() => ({}));
      const mockMethods = { getSingleTransaction: mockGetTransaction };

      const value = selectors.getTransactionInState({}, 'testTransaction', mockMethods);

      expect(value).toBe(false);
    });
  });

  describe('getTransactionsForDisplay', () => {
    it('should return the formatted transactions', () => {
      const transactionA = {
        blockNumber: 123,
        value: 10000,
        from: '0x1111',
        to: '0x1212',
      };
      const transactionB = {
        blockNumber: 456,
        value: 4000000,
        from: '0x2222',
        to: '0x3434',
      };
      const expectedTransactions = [
        {
          key: {
            value: '0xA',
          },
          hash: {
            value: '0xA',
          },
          block: {
            value: 123,
            linkType: routes.BLOCK_DETAIL,
            linkPayload: { blockNumber: 123 },
          },
          amount: {
            value: '10000',
          },
          sender: {
            value: '0x1111',
            linkType: routes.ACCOUNT_DETAIL,
            linkPayload: { address: '_0x1111' },
          },
          receiver: {
            value: '0x1212',
            linkType: routes.ACCOUNT_DETAIL,
            linkPayload: { address: '_0x1212' },
          },
        },
        {
          key: {
            value: '0xB',
          },
          hash: {
            value: '0xB',
          },
          block: {
            value: 456,
            linkType: routes.BLOCK_DETAIL,
            linkPayload: { blockNumber: 456 },
          },
          amount: {
            value: '4000000',
          },
          sender: {
            value: '0x2222',
            linkType: routes.ACCOUNT_DETAIL,
            linkPayload: { address: '_0x2222' },
          },
          receiver: {
            value: '0x3434',
            linkType: routes.ACCOUNT_DETAIL,
            linkPayload: { address: '_0x3434' },
          },
        },
      ];
      const mockGetSingleTransaction = jest.fn()
        .mockReturnValueOnce(transactionA)
        .mockReturnValueOnce(transactionB);
      const mockMethods = { getSingleTransaction: mockGetSingleTransaction };

      const value = selectors.getTransactionsForDisplay({}, ['0xA', '0xB'], mockMethods);

      expect(mockGetSingleTransaction).toBeCalledWith({}, '0xA');
      expect(mockGetSingleTransaction).toBeCalledWith({}, '0xB');
      expect(value).toEqual(expectedTransactions);
    });
  });
});
