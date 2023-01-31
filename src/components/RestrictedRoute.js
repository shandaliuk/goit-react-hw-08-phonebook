import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const shouldRedirect = !selectIsLoggedIn && !selectIsRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
