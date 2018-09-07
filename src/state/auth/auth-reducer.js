import { combineReducers } from 'redux';

export function refreshToken(state = '', { type, payload, error }) {
  switch (type) {
    // case aT.
    default:
      return state;
  }
}

export default combineReducers({
  refreshToken,
});
