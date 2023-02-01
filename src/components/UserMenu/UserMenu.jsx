import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { User, UserName, UserButton } from './UserMenu.styled';

export const UserMenu = ({ user }) => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(logOut());

  return (
    <User>
      <UserName>{user.name}</UserName>
      <UserButton onClick={handleClick}>Logout</UserButton>
    </User>
  );
};
