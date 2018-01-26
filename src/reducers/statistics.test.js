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
});
