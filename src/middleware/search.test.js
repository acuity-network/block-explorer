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

  it('should redirect to account details if the query is an address', () => {
    mockAction = {
      type: t.SEARCH_FOR,
      payload: {
        query: 'test',
      },
    };
    mockAdapter.isAddress = jest.fn(q => q === 'test');

    middleware(mockStore, mockAdapter)(mockNext)(mockAction);

    const dispatchAction = mockDispatch.mock.calls[0][0];
    expect(dispatchAction).toHaveProperty('type', routes.ACCOUNT_DETAIL);
    expect(dispatchAction).toHaveProperty('payload');
    expect(dispatchAction.payload).toHaveProperty('address', '_test');

    expect(mockNext).not.toBeCalled();
  });

  it('should fetch the transaction if the query is not an account address', async () => {
    mockAction = {
      type: t.SEARCH_FOR,
      payload: {
        query: 'test',
      },
    };
    mockAdapter.isAddress = jest.fn(() => false);
    mockAdapter.getTransaction = jest.fn(() => ({ test: true }));

    await middleware(mockStore, mockAdapter)(mockNext)(mockAction);

    const firstAction = mockDispatch.mock.calls[0][0];
    const secondAction = mockDispatch.mock.calls[1][0];

    expect(firstAction).toHaveProperty('type', t.FETCH_TRANSACTION_SUCCESS);
    expect(firstAction).toHaveProperty('payload');
    expect(firstAction.payload).toHaveProperty('test', true);

    expect(secondAction).toHaveProperty('type', routes.TRANSACTION_DETAIL);
    expect(secondAction).toHaveProperty('payload');
    expect(secondAction.payload).toHaveProperty('hash', '_test');

    expect(mockNext).not.toBeCalled();
  });
});
