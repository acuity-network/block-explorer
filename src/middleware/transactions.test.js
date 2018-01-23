import * as t from '../actions/types';
import middleware from './transactions';

describe('middleware/transactions', () => {
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

  it('should fetch the requested transactions', async () => {
    mockAction = {
      type: t.FETCH_TRANSACTION,
      payload: {
        hash: 'test',
      },
    };
    mockAdapter.getTransaction = jest.fn(() => ({ blockNumber: 2 }));

    await middleware(mockStore, mockAdapter)(mockNext)(mockAction);

    expect(mockAdapter.getTransaction).toBeCalled();
    expect(mockAdapter.getTransaction).toBeCalledWith('test');
  });

  it('should dispatch a success action with the fetched data', async () => {
    mockAction = {
      type: t.FETCH_TRANSACTION,
      payload: {
        hash: 'test',
      },
    };
    mockAdapter.getTransaction = jest.fn(() => ({ blockNumber: 2 }));

    await middleware(mockStore, mockAdapter)(mockNext)(mockAction);

    const dispatchedAction = mockDispatch.mock.calls[0][0];
    expect(dispatchedAction).toHaveProperty('type', t.FETCH_TRANSACTION_SUCCESS);
    expect(dispatchedAction).toHaveProperty('payload');
    expect(dispatchedAction.payload).toHaveProperty('blockNumber', 2);
  });
});
