import * as actions from './creators';
import * as routes from '../../router';

describe('actions/creators/redirect', () => {
  describe('redirectStart', () => {
    it('should return an action with the correct type and payload', () => {
      const action = actions.redirectStart();

      expect(action).toHaveProperty('type', routes.START);
    });
  });

  describe('redirectAccountDetail', () => {
    it('should return an action with the correct type and payload', () => {
      const action = actions.redirectAccountDetail('test');

      expect(action).toHaveProperty('type', routes.ACCOUNT_DETAIL);
      expect(action).toHaveProperty('payload');
      expect(action.payload).toHaveProperty('address', 'test');
    });
  });
});
