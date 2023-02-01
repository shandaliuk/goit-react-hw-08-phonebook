import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { User } from './UserMenu.styled';

export const UserMenu = ({ user }) => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(logOut());

  return (
    <User>
      <p>{user.name}</p>
      <button onClick={handleClick}>Logout</button>
    </User>
  );
};
