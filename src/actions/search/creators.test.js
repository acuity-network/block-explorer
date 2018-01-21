import * as actions from './creators';
import * as t from './types';

describe('actions/creators/search', () => {
  describe('confirmSearch', () => {
    it('should return an action with the correct type and payload', () => {
      const action = actions.confirmSearch('test');

      expect(action).toHaveProperty('type', t.CONFIRM_SEARCH);
      expect(action).toHaveProperty('payload');
      expect(action.payload).toHaveProperty('query', 'test');
    });
  });
});
