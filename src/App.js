import React, { useEffect } from 'react';
import { Redirect, Router } from '@reach/router';
import { useDispatch } from 'react-redux';

import { AuthRoute, LayoutPaths, Pages, Paths, ProtectedRoute, PublicRoute } from '@/pages/routers';
import Guest from '@/layouts/Guest';
import Admin from '@/layouts/Admin';
import Auth from '@/layouts/Auth';
import { uiActions } from '@/redux/actions';

import './App.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateSize = () => {
      dispatch(uiActions.setDevice(window.innerWidth));
    };
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [dispatch]);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <Router primary={false}>
        <Guest path={LayoutPaths.Guest}>
          <PublicRoute path={Paths.Home} component={Pages.Home} />
          <PublicRoute path={Paths.Incubator} component={Pages.Incubator} />
          <PublicRoute path={Paths.Advertising} component={Pages.Advertising} />
          <PublicRoute path={Paths.Launchpad} component={Pages.Launchpad} />
          <PublicRoute path={Paths.WhiteList} component={Pages.WhiteList} />
          <PublicRoute path={Paths.WhiteListDetail} component={Pages.WhiteListDetail} />
          <PublicRoute path={Paths.Reference} component={Pages.Reference} />
          <PublicRoute path={Paths.User} component={Pages.User} />
          <PublicRoute path={Paths.Verify} component={Pages.Verify} />
          <PublicRoute path={Paths.Stake} component={Pages.Stake} />
          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.Home}`} />
        </Guest>

        <Auth path={LayoutPaths.Auth}>
          <AuthRoute path={Paths.Login} component={Pages.Login} />
          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Auth}${Paths.Login}`} />
        </Auth>

        <Admin path={LayoutPaths.Admin}>
          <ProtectedRoute path={Paths.Dashboard} component={Pages.Dashboard} />
          <Redirect noThrow from={Paths.Rest} to={`${Paths.Admin}${Paths.Dashboard}`} />
        </Admin>
      </Router>
    </div>
  );
};

export default App;
