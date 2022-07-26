import axios from 'axios';
import { navigate } from '@reach/router';

import { LayoutPaths } from '@/pages/routers';
import { EResponseCode } from '@/common/enums';

import Helpers from './helpers';

let isRefreshingAccessToken = false;
let tokenSubscribers = [];

const AuthorizedInstance = (baseURL) => {
  const instance = axios.create({
    baseURL,
  });

  const refreshTokens = async () => {
    const existingRefreshToken = Helpers.getRefreshToken();

    if (!existingRefreshToken) {
      navigate(LayoutPaths.Auth);
    }

    // const response = await AuthControllerInstance.refreshToken({});
    Helpers.storeAccessToken('');
    Helpers.storeRefreshToken('');

    return Helpers.getAccessToken();
  };

  const onRequest = (request) => {
    const authBearer = Helpers.getAccessToken();
    if (authBearer) {
      request.headers.Authorization = `Bearer ${authBearer}`;
    }
    return request;
  };

  const onTokenRefreshed = (error, newAccessToken) => {
    tokenSubscribers.map((cb) => cb(error, newAccessToken));
  };

  const onResponseSuccess = (response) => response;

  const onResponseError = async (axiosError) => {
    const { response } = axiosError;
    const responseStatus = response?.status;
    const originalRequest = axiosError.config;

    if (responseStatus === EResponseCode.UNAUTHORIZED && originalRequest) {
      if (!isRefreshingAccessToken) {
        isRefreshingAccessToken = true;

        refreshTokens()
          .then((newAccessToken) => {
            onTokenRefreshed(null, newAccessToken);
          })
          .catch((err) => {
            onTokenRefreshed(new Error('Failed to refresh access token'));
            const refreshTokenFailed = err?.response?.config?.url === ' '; // Config refresh token URL

            if (refreshTokenFailed) {
              Helpers.clearTokens();
              // Navigate to Auth Layout
              navigate(LayoutPaths.Auth);
            }
          })
          .finally(() => {
            isRefreshingAccessToken = false;
            tokenSubscribers = [];
          });
      }

      const storeOriginalRequest = new Promise((resolve, reject) => {
        tokenSubscribers.push((error, newAccessToken) => {
          if (error) return reject(error);

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return resolve(axios(originalRequest));
        });
      });

      return storeOriginalRequest;
    }

    return Promise.reject(axiosError);
  };

  instance.interceptors.request.use(onRequest);
  instance.interceptors.response.use(onResponseSuccess, onResponseError);

  return instance;
};

export default AuthorizedInstance;
