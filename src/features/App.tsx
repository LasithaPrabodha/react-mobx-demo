import React, { Suspense } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';

import Auth from './auth/Auth';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import routes from './routes';

const App = () => {
  const isAuthenticated = useSelector((state: RootState) => state.authentication.isAuthenticated)

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          {routes.map(({ component: Component, path }) => (
            <Route path={path} key={path} element={
              <PrivateRoute auth={{ isAuthenticated }}>
                <Component path={`/${path}`} />
              </PrivateRoute>
            }
            />
          ))}

          <Route path="" element={<PublicRoutes auth={{ isAuthenticated }} />}>
            <Route path="" element={<Auth />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider >
  );
}

const PublicRoutes = ({ auth: { isAuthenticated }, children }: any) => {
  return isAuthenticated ? <Navigate to="/todos" /> : <Outlet />
}


const PrivateRoute = ({ auth: { isAuthenticated }, children }: any) => {
  return isAuthenticated
    ? <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    : <Navigate to="/" />;
};
export default App;