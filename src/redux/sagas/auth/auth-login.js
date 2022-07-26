import { call, put } from 'redux-saga/effects';

import { authLoginAction } from '@/redux/actions';
import { authLogin } from '@/services/api';
import Helpers from '@/services/helpers';

// FUNCTION

export function* authLoginSaga(action) {
  const { materials, successCallback, failedCallback } = action.payload;
  try {
    const response = yield call(authLogin, materials);
    const authLoginResponse = response;

    Helpers.storeAccessToken('');
    Helpers.storeRefreshToken('');

    yield put(authLoginAction.success(authLoginResponse));
    successCallback?.(authLoginResponse);
  } catch (err) {
    yield put(authLoginAction.failure(err));
    failedCallback?.(err);
  }
}
