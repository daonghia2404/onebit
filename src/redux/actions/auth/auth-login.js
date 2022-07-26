import { createActionCreator } from 'deox';

// CONSTANTS

export const EAuthLoginAction = {
  AUTH_LOGIN: 'AUTH_LOGIN',
  AUTH_LOGIN_REQUEST: 'AUTH_LOGIN_REQUEST',
  AUTH_LOGIN_SUCCESS: 'AUTH_LOGIN_SUCCESS',
  AUTH_LOGIN_FAILED: 'AUTH_LOGIN_FAILED',
};

// FUNCTION

export const authLoginAction = {
  request: createActionCreator(
    EAuthLoginAction.AUTH_LOGIN_REQUEST,
    (resolve) => (materials, successCallback, failedCallback) =>
      resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(EAuthLoginAction.AUTH_LOGIN_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EAuthLoginAction.AUTH_LOGIN_FAILED, (resolve) => (error) => resolve({ error })),
};
