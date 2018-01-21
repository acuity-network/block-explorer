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
      type: t.CONFIRM_SEARCH,
      payload: {
        query: 'test',
      },
    };
    mockAdapter.isAddress = jest.fn(q => q === 'test');

    middleware(mockStore, mockAdapter)(mockNext)(mockAction);

    const dispatchAction = mockDispatch.mock.calls[0][0];
    expect(dispatchAction).toHaveProperty('type', routes.ACCOUNT_DETAIL);
    expect(dispatchAction).toHaveProperty('payload');
    expect(dispatchAction.payload).toHaveProperty('address', 'test');
    expect(mockNext).not.toBeCalled();
  });
});
