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
