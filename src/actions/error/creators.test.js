import * as actions from './creators';
import * as t from './types';

describe('actions/creators/error', () => {
  describe('showError', () => {
    it('should return an action with the correct type and payload', () => {
      const action = actions.showError('this is wrong');

      expect(action).toHaveProperty('type', t.SHOW_ERROR);
      expect(action).toHaveProperty('payload');
      expect(action.payload).toHaveProperty('error', 'this is wrong');
    });
  });

  describe('dismissError', () => {
    it('should return an action with the correct type and payload', () => {
      const action = actions.dismissError();

      expect(action).toHaveProperty('type', t.DISMISS_ERROR);
    });
  });
});
