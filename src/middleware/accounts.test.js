import * as t from '../actions/types';
import middleware from './accounts';

describe('middleware/accounts', () => {
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

  it('should fetch balance and transactionCount', async () => {
    mockAction = {
      type: t.FETCH_ACCOUNT,
      payload: {
        address: 'test',
      },
    };
    mockAdapter.getBalance = jest.fn(() => 100);
    mockAdapter.getTransactionCount = jest.fn(() => 2);

    await middleware(mockStore, mockAdapter)(mockNext)(mockAction);

    const nextAction = mockNext.mock.calls[0][0];
    expect(nextAction).toHaveProperty('type', t.FETCH_ACCOUNT);
    expect(nextAction).toHaveProperty('payload');
    expect(nextAction.payload).toHaveProperty('address', 'test');
    expect(nextAction.payload).toHaveProperty('balance', 100);
    expect(nextAction.payload).toHaveProperty('transactionCount', 2);
  });
});
