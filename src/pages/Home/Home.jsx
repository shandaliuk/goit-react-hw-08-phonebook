import { Heading, UserLink, Text } from './Home.styled';

export const Home = () => {
  return (
    <>
      <Heading>Welcome to your phonebook!</Heading>
      <Text>Already registered user?</Text>
      <UserLink to="/login">Login</UserLink>
      <Text>Or register if you're new!</Text>
      <UserLink to="/register">Register</UserLink>
    </>
  );
};
