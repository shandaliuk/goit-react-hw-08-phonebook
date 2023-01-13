import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Heading } from './App.styled';

const LS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localContacts = localStorage.getItem(LS_KEY);
    if (localContacts) {
      setContacts(JSON.parse(localContacts));
    }
  }, []);

  useEffect(
    () => localStorage.setItem(LS_KEY, JSON.stringify(contacts)),
    [contacts]
  );

  const checkExclusiveness = name =>
    contacts.find(contact => contact.name === name);

  const handleFormSubmit = contact => {
    const isExisting = checkExclusiveness(contact.name);
    if (isExisting) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    setContacts(prevState => {
      return [...prevState, contact];
    });
  };

  const onFilterChange = event => setFilter(event.target.value);

  const onDeleteClick = id => {
    setContacts(prevState =>
      prevState.contacts.filter(contact => contact.id !== id)
    );
  };

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
