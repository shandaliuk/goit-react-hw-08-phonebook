import { User } from './UserMenu.styled';

export const UserMenu = ({ user }) => {
  return (
    <User>
      <p>{user.name}</p>
      <button>Logout</button>
    </User>
  );
};
