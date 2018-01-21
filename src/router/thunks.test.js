import * as actions from '../actions/creators';
import * as thunks from './thunks';

describe('router/thunks', () => {
  describe('fetchAccount', () => {
    it('should dispatch an action to fetch an account according to the location', () => {
      const mockState = {
        location: {
          payload: {
            address: 'test',
          },
        },
        accounts: {},
      };
      const mockDispatch = jest.fn();
      const mockGetState = jest.fn(() => mockState);
      const expectedAction = actions.fetchAccount('test');

      thunks.fetchAccount(mockDispatch, mockGetState);

      expect(mockDispatch).toBeCalledWith(expectedAction);
    });

    it('should not dispatch an action if the account is already in state', () => {
      const mockState = {
        location: {
          payload: {
            address: 'test',
          },
        },
        accounts: {
          test: {
            balance: 10,
          },
        },
      };
      const mockDispatch = jest.fn();
      const mockGetState = jest.fn(() => mockState);

      thunks.fetchAccount(mockDispatch, mockGetState);

      expect(mockDispatch).not.toBeCalled();
    });
  });

  describe('fetchBlocks', () => {
    it('should dispatch an action to fetch the latest blocks', () => {
      const mockDispatch = jest.fn();
      const expectedAction = actions.fetchBlocks();

      thunks.fetchBlocks(mockDispatch);

      expect(mockDispatch).toBeCalledWith(expectedAction);
    });
  });

  describe('fetchSingleBlock', () => {
    it('should dispatch an action to fetch a block according to the location', () => {
      const mockState = {
        location: {
          payload: {
            blockNumber: 5,
          },
        },
        blocks: {
          byNumber: {},
        },
      };
      const mockDispatch = jest.fn();
      const mockGetState = jest.fn(() => mockState);
      const expectedAction = actions.fetchBlocks(5, 1);

      thunks.fetchSingleBlock(mockDispatch, mockGetState);

      expect(mockDispatch).toBeCalledWith(expectedAction);
    });

    it('should not dispatch an action if the block is already in state', () => {
      const mockState = {
        location: {
          payload: {
            blockNumber: 5,
          },
        },
        blocks: {
          byNumber: { 5: { number: 5 }},
        },
      };
      const mockDispatch = jest.fn();
      const mockGetState = jest.fn(() => mockState);

      thunks.fetchSingleBlock(mockDispatch, mockGetState);

      expect(mockDispatch).not.toBeCalled();
    });
  });
});
