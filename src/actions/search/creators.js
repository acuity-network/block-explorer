import * as t from './types';

export function confirmSearch(query) {
  return {
    type: t.CONFIRM_SEARCH,
    payload: {
      query,
    },
  };
}
