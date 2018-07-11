import * as actions from '@/actions/creators';
import * as thunks from './thunks';

describe('router/thunks', () => {
  describe('fetchSingleTransaction', () => {
    it('should dispatch an action to fetch a transaction according to the location', () => {
      const mockState = {
        location: {
          payload: {
            hash: 'test',
          },
        },
        transactions: {},
      };
      const mockDispatch = jest.fn();
      const mockGetState = jest.fn(() => mockState);
      const expectedAction = actions.fetchTransactions(['test']);

      thunks.fetchSingleTransaction(mockDispatch, mockGetState);

      expect(mockDispatch).toBeCalledWith(expectedAction);
    });

    it('should not dispatch an action if the transaction is already in state', () => {
      const mockState = {
        location: {
          payload: {
            hash: 'test',
          },
        },
        transactions: {
          test: {
            blockNumber: 10,
          },
        },
      };
      const mockDispatch = jest.fn();
      const mockGetState = jest.fn(() => mockState);

      thunks.fetchSingleTransaction(mockDispatch, mockGetState);

      expect(mockDispatch).not.toBeCalled();
    });

    it('should strip the leading _ from the transaction hash in the location', () => {
      const mockState = {
        location: {
          payload: {
            hash: '_test',
          },
        },
        transactions: {},
      };
      const mockDispatch = jest.fn();
      const mockGetState = jest.fn(() => mockState);
      const expectedAction = actions.fetchTransactions(['test']);

      thunks.fetchSingleTransaction(mockDispatch, mockGetState);

      expect(mockDispatch).toBeCalledWith(expectedAction);
    });
  });
});
