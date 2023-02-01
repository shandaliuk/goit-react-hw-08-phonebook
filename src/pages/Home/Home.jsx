import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser, selectIsLoggedIn } from 'redux/auth/selectors';
import { Heading, UserLink, Text } from './Home.styled';
import { LogOutButton } from './Home.styled';

export const Home = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleClick = () => dispatch(logOut());

  return (
    <>
      {isLoggedIn ? (
        <>
          <Heading>Hello, {user.name}!</Heading>
          <Text>To your phonebook</Text>
          <UserLink to="/contacts">Contacts</UserLink>
          <Text>Switch to another account</Text>
          <LogOutButton type="button" onClick={handleClick}>
            Logout
          </LogOutButton>
        </>
      ) : (
        <>
          <Heading>Welcome to your phonebook!</Heading>
          <Text>Already registered user?</Text>
          <UserLink to="/login">Login</UserLink>
          <Text>Or register if you're new!</Text>
          <UserLink to="/register">Register</UserLink>
        </>
      )}
    </>
  );
};
