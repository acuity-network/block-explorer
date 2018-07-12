import * as t from '@/actions/types';
import reducer, * as selectors from './blockchain';

describe('reducers/blockchain', () => {
  it('should ignore unrecognized actions', () => {
    const mockAction = {
      type: 'test/TEST_ACTION',
    };
    const state = reducer('test', mockAction);

    expect(state).toEqual('test');
  });

  it('should save currency to the store', () => {
    const mockAction = {
      type: t.SET_CURRENCY,
      payload: {
        currency: 'ETH',
      },
    };
    const state = reducer(undefined, mockAction);

    expect(state).toHaveProperty('currency');
    expect(state.currency).toBe('ETH');
  });
});

describe('selectors/blockchain', () => {
  describe('getCurrency', () => {
    it('should return the correct currency from state', () => {
      const mockState = {
        blockchain: {
          currency: 'MIX',
        },
      };
      const value = selectors.getCurrency(mockState);

      expect(value).toBe('MIX');
    });
  });
});
