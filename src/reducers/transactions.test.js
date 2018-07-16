import * as t from '@/actions/types';
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

      const address = selectors.getSingleTransaction(mockState, 'test');

      expect(address).toHaveProperty('blockNumber', 10);
    });
  });

  describe('getTransactionForDisplay', () => {
    const mockHash = '0x12345678';
    const mockState = {
      location: {
        payload: {
          hash: mockHash,
        },
      },
    };
    const mockGetTransaction = jest.fn((state, hash) => ({ hash, from: 'alpha', to: 'beta', value: 175 }));
    const mockFromWei = jest.fn(amount => amount * 10);
    const mockMethods = { getSingleTransaction: mockGetTransaction, fromWei: mockFromWei };

    it('should use the hash from location to get the current transaction', () => {
      selectors.getTransactionForDisplay(mockState, mockHash, mockMethods);

      expect(mockGetTransaction).toBeCalled();
      expect(mockGetTransaction).toBeCalledWith(mockState, '0x12345678');
    });

    it('should transform the Wei balance to Ether', () => {
      selectors.getTransactionForDisplay(mockState, mockHash, mockMethods);

      expect(mockFromWei).toBeCalled();
      expect(mockFromWei).toBeCalledWith('175', 'ether');
    });

    it('should return an object with transaction display data', () => {
      const value = selectors.getTransactionForDisplay(mockState, mockHash, mockMethods);

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
      };
      const transactionB = {
        blockNumber: 456,
        value: 4000000,
      };
      const expectedTransactions = [
        {
          key: {
            value: '0xA',
          },
          hash: {
            value: '0xA',
            linkReactRouter: '/transaction/0xA',
          },
          amount: {
            value: '10 ETH',
          },
        },
        {
          key: {
            value: '0xB',
          },
          hash: {
            value: '0xB',
            linkReactRouter: '/transaction/0xB',
          },
          amount: {
            value: '4000 ETH',
          },
        },
      ];
      const mockGetSingleTransaction = jest.fn()
        .mockReturnValueOnce(transactionA)
        .mockReturnValueOnce(transactionB);
      const mockFromWei = jest.fn(amount => amount / 1000);
      const mockMethods = { getSingleTransaction: mockGetSingleTransaction, fromWei: mockFromWei };

      const value = selectors.getTransactionsForDisplay({}, ['0xA', '0xB'], mockMethods);

      expect(mockGetSingleTransaction).toBeCalledWith({}, '0xA');
      expect(mockGetSingleTransaction).toBeCalledWith({}, '0xB');
      expect(value).toEqual(expectedTransactions);
    });
  });
});
