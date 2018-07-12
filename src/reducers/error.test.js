import * as t from '@/actions/types';
import reducer, * as selectors from './error';

describe('reducers/error', () => {
  it('should ignore unrecognized actions', () => {
    const mockAction = {
      type: 'test/TEST_ACTION',
    };
    const state = reducer('test', mockAction);

    expect(state).toEqual('test');
  });

  it('should save error to the store', () => {
    const mockAction = {
      type: t.SHOW_ERROR,
      payload: {
        error: 'this is failing',
      },
    };
    const state = reducer(undefined, mockAction);

    expect(state).toBe('this is failing');
  });

  it('should remove the error when it is dismissed', () => {
    const mockAction = {
      type: t.DISMISS_ERROR,
    };
    const mockState = { error: 'this is still failing' };
    const state = reducer(mockState, mockAction);

    expect(state).toBe('');
  });
});

describe('selectors/error', () => {
  describe('getError', () => {
    it('should return the error from state', () => {
      const mockState = { error: 'what a mess' };
      const value = selectors.getError(mockState);

      expect(value).toBe('what a mess');
    });
  });
});
