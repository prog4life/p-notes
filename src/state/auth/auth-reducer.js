import { combineReducers } from 'redux';

export function refreshToken(state = '1515', { type, payload, error }) {
  switch (type) {
    // case aT.
    default:
      return state;
  }
}

export default combineReducers({
  refreshToken,
});
