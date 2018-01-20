import { initializeWeb3 } from '../adapters/web3';

export default {
  onBeforeChange(dispatch, getState, action) {
    initializeWeb3();
  }
}
