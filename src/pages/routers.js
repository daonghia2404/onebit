import React, { lazy, Suspense } from 'react';
import { Redirect } from '@reach/router';

import Helpers from '@/services/helpers';
import Loading from '@/components/Loading';

const retryLoadComponent = (fn, retriesLeft = 5, interval = 1000) =>
  new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            reject(error);
            return;
          }

          retryLoadComponent(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });

const Home = lazy(() => retryLoadComponent(() => import('@/pages/Home')));
const Incubator = lazy(() => retryLoadComponent(() => import('@/pages/Incubator')));
const Advertising = lazy(() => retryLoadComponent(() => import('@/pages/Advertising')));
const Launchpad = lazy(() => retryLoadComponent(() => import('@/pages/Launchpad')));
const WhiteList = lazy(() => retryLoadComponent(() => import('@/pages/WhiteList')));
const WhiteListDetail = lazy(() => retryLoadComponent(() => import('@/pages/WhiteListDetail')));
const Reference = lazy(() => retryLoadComponent(() => import('@/pages/Reference')));
const User = lazy(() => retryLoadComponent(() => import('@/pages/User')));
const Verify = lazy(() => retryLoadComponent(() => import('@/pages/Verify')));
const Stake = lazy(() => retryLoadComponent(() => import('@/pages/Stake')));

const Login = lazy(() => retryLoadComponent(() => import('@/pages/Login')));
const Dashboard = lazy(() => retryLoadComponent(() => import('@/pages/Dashboard')));

export const LayoutPaths = {
  Guest: '/',
  Auth: '/auth',
  Admin: '/admin',
};

export const ModulePaths = {};

export const Paths = {
  Home: '/home',
  Incubator: '/incubator',
  Advertising: '/advertising',
  Launchpad: '/launchpad',
  WhiteList: '/launchpad/whitelist',
  WhiteListDetail: '/launchpad/whitelist/detail',
  User: '/user',
  Reference: '/user/reference',
  Verify: '/user/verify',
  Stake: '/stake',

  Login: '/',

  Dashboard: '/',

  Rest: '*',
};

export const Pages = {
  Home,
  Incubator,
  Advertising,
  Launchpad,
  WhiteList,
  WhiteListDetail,
  Reference,
  User,
  Verify,
  Stake,

  Login,
  Dashboard,
};

export const AuthRoute = ({ component: Component, ...rest }) => {
  const loggedIn = Helpers.getAccessToken();

  return loggedIn ? (
    <Redirect noThrow from={Paths.Rest} to={LayoutPaths.Admin} />
  ) : (
    <Suspense
      fallback={
        <div style={{ paddingTop: 100 }}>
          <Loading />
        </div>
      }
    >
      <Component {...rest} />
    </Suspense>
  );
};

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const loggedIn = Helpers.getAccessToken();

  return loggedIn ? (
    <Suspense
      fallback={
        <div style={{ paddingTop: 100 }}>
          <Loading />
        </div>
      }
    >
      <Component {...rest} />
    </Suspense>
  ) : (
    <Redirect noThrow from={Paths.Rest} to={LayoutPaths.Auth} />
  );
};

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Suspense
    fallback={
      <div style={{ paddingTop: 100 }}>
        <Loading />
      </div>
    }
  >
    <Component {...rest} />
  </Suspense>
);
