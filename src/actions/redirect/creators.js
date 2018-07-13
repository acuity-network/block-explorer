import { redirect } from 'redux-first-router';

import * as routes from '@/router';

export function redirectStart() {
  return redirect({ type: routes.START });
}

export function redirectAccountDetail(address) {
  return redirect({
    type: routes.ACCOUNT_DETAIL,
    payload: {
      address,
    },
  });
}

export function redirectBlockDetail(blockNumber) {
  return redirect({
    type: routes.BLOCK_DETAIL,
    payload: {
      blockNumber,
    },
  });
}

export function redirectTransactionDetail(hash) {
  return redirect({
    type: routes.TRANSACTION_DETAIL,
    payload: {
      hash,
    },
  });
}
