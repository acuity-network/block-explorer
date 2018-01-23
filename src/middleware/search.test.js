import * as t from '../actions/types';
import * as routes from '../router';
import middleware from './search';

describe('middleware/search', () => {
  let mockStore, mockNext, mockAction, mockDispatch, mockGetState,
      mockAdapter;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockStore = {
      dispatch: mockDispatch,
      getState: mockGetState,
    };
    mockNext = jest.fn();
    mockAdapter = {};
  });

  it('should forward unrecognized actions', () => {
    mockAction = {
      type: 'test/TEST_ACTION',
    };

    middleware(mockStore)(mockNext)(mockAction);

    expect(mockNext).toBeCalledWith(mockAction);
  });

  describe('query is address', () => {
    beforeEach(() => {
      mockAction = {
        type: t.SEARCH_FOR,
        payload: {
          query: 'test',
        },
      };
      mockAdapter.isAddress = jest.fn(() => true);
      mockAdapter.getTransaction = jest.fn();
    });

    it('should call isAddress with the given query', () => {
      middleware(mockStore, mockAdapter)(mockNext)(mockAction);

      expect(mockAdapter.isAddress).toBeCalled();
      expect(mockAdapter.isAddress).toBeCalledWith('test');
    });

    it('should not request a transaction', () => {
      middleware(mockStore, mockAdapter)(mockNext)(mockAction);

      expect(mockAdapter.getTransaction).not.toBeCalled();
    });

    it('should redirect to account details', () => {
      middleware(mockStore, mockAdapter)(mockNext)(mockAction);

      const dispatchAction = mockDispatch.mock.calls[0][0];
      expect(dispatchAction).toHaveProperty('type', routes.ACCOUNT_DETAIL);
      expect(dispatchAction).toHaveProperty('payload');
      expect(dispatchAction.payload).toHaveProperty('address', '_test');
    });
  });

  describe('query is transaction', () => {
    beforeEach(() => {
      mockAction = {
        type: t.SEARCH_FOR,
        payload: {
          query: 'test',
        },
      };
      mockAdapter.isAddress = jest.fn(() => false);
      mockAdapter.getTransaction = jest.fn(() => ({ test: true }));
    });

    it('should try to fetch the transaction if the query is not an account address', async () => {
      await middleware(mockStore, mockAdapter)(mockNext)(mockAction);

      expect(mockAdapter.getTransaction).toBeCalled();
      expect(mockAdapter.getTransaction).toBeCalledWith('test');
    });

    it('should dispatch a success action', async () => {
      await middleware(mockStore, mockAdapter)(mockNext)(mockAction);

      const successAction = mockDispatch.mock.calls[0][0];
      expect(successAction).toHaveProperty('type', t.FETCH_TRANSACTION_SUCCESS);
      expect(successAction).toHaveProperty('payload');
      expect(successAction.payload).toHaveProperty('test', true);

    });

    it('should redirect to transaction details', async () => {
      await middleware(mockStore, mockAdapter)(mockNext)(mockAction);

      const redirectAction = mockDispatch.mock.calls[1][0];
      expect(redirectAction).toHaveProperty('type', routes.TRANSACTION_DETAIL);
      expect(redirectAction).toHaveProperty('payload');
      expect(redirectAction.payload).toHaveProperty('hash', '_test');
    });
  });
});
