export const authLoginUpdateState = (state, action) => ({
  ...state,
  authLoginResponse: action.payload.response,
});
