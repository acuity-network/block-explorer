import * as t from '@/actions/types';
import reducer, * as selectors from './statistics';

describe('reducers/statistics', () => {
  it('should ignore unrecognized actions', () => {
    const mockAction = {
      type: 'test/TEST_ACTION',
    };
    const state = reducer('test', mockAction);

    expect(state).toEqual('test');
  });

  it('should save the statistics to state', () => {
    const mockAction = {
      type: t.FETCH_STATISTICS_SUCCESS,
      payload: {
        latestBlockNumber: 10,
        gasPrice: 200,
        peerCount: 3,
      },
    };
    const mockState = {
      latestBlockNumber: 0,
      gasPrice: 0,
      peerCount: 0,
    };
    const state = reducer(undefined, mockAction);

    expect(state).toEqual(mockAction.payload);
  });
});

describe('selectors/statistics', () => {
  describe('getStatisticsForDisplay', () => {
    let mockFromWei, mockGetLatestBlocks, mockMethods, mockState;
    beforeEach(() => {
      mockFromWei = jest.fn(n => n * 10);
      mockGetLatestBlocks = jest.fn(() => []);
      mockMethods = { fromWei: mockFromWei, getLatestBlocks: mockGetLatestBlocks };
      mockState = {
        statistics: {
          latestBlockNumber: 10,
          gasPrice: 200,
          peerCount: 3,
        },
      };
    });
    it('should return the values from its own state', () => {
      const statistics = selectors.getStatisticsForDisplay(mockState, mockMethods);

      expect(statistics).toHaveProperty('latestBlockNumber', 10);
      expect(statistics).toHaveProperty('peerCount', 3);
      expect(statistics).toHaveProperty('gasPriceInWei', "200");
      expect(statistics).toHaveProperty('gasPriceInGwei', 2000);
    });

    it('should update the latest block number, if the newest block is not in state', () => {
      mockGetLatestBlocks.mockImplementation(() => [{ number: 9 }]);

      const statistics = selectors.getStatisticsForDisplay(mockState, mockMethods);

      expect(statistics).toHaveProperty('latestBlockNumber', 9);
    });
  });
});
