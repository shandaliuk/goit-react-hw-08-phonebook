import { useSelector, useDispatch } from 'react-redux';
import { getContacts, addContact, deleteContact } from 'redux/contactsSlice';
import { setFilter, getFilter } from 'redux/filterSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Heading } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const checkExclusiveness = name =>
    contacts.find(contact => contact.name === name);

  const handleFormSubmit = contact => {
    const isExisting = checkExclusiveness(contact.name);

    if (isExisting) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(contact));
  };

  const onDeleteClick = id => dispatch(deleteContact(id));

  const onFilterChange = event => dispatch(setFilter(event.target.value));

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <Heading>Phonebook</Heading>
      <ContactForm onFormSubmit={handleFormSubmit} />
      <Heading>Contacts</Heading>
      <Filter value={filter} onChange={onFilterChange} />
      <ContactList contacts={filteredContacts} onClick={onDeleteClick} />
    </>
  );
};
