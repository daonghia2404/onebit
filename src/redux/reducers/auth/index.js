import { createReducer } from 'deox';

import { authLoginAction } from '@/redux/actions';
import { authLoginUpdateState } from './auth-login';

const initialState = {
  authLoginResponse: undefined,
};

const AuthReducer = createReducer(initialState, (handleAction) => [
  handleAction(authLoginAction.success, authLoginUpdateState),
]);

export default AuthReducer;
