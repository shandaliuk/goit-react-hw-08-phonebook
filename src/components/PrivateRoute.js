import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) =>
  selectIsLoggedIn ? <Navigate to={redirectTo} /> : Component;
