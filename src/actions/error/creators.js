import * as t from './types';

export function showError(error) {
  return {
    type: t.SHOW_ERROR,
    payload: {
      error,
    },
  };
}

export function dismissError() {
  return {
    type: t.DISMISS_ERROR,
  };
}
