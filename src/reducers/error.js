import * as t from '@/actions/types';

const initialState = '';

export default (state = initialState, { type, payload }) => {
  if (type === t.SHOW_ERROR) {
    return payload.error;

  } else if (type === t.DISMISS_ERROR) {
    return initialState;
  }

  return state;
}

export function getError(state) {
  return state.error;
}
