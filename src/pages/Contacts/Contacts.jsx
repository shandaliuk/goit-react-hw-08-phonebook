import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Heading } from 'pages/Home/Home.styled';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { UserMenu } from 'components/UserMenu/UserMenu';

const Contacts = () => {
  const isLogged = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <>
      <Heading>Phonebook</Heading>
      <ContactForm />
      <Heading>Contacts</Heading>
      <Filter />
      <ContactList />
      {isLogged && <UserMenu user={user} />}
    </>
  );
};

export default Contacts;
