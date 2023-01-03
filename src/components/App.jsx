import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Heading } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  checkExclusiveness = name => {
    for (const contact of this.state.contacts) {
      if (name === contact.name) {
        alert(`${name} is already in contacts.`);
        return false;
      }
    }
    return true;
  };

  handleFormSubmit = contact => {
    if (this.checkExclusiveness(contact.name)) {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
    }
  };

  onFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  onDeleteClick = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <Heading>Phonebook</Heading>
        <ContactForm onFormSubmit={this.handleFormSubmit} />
        <Heading>Contacts</Heading>
        <Filter value={filter} onChange={this.onFilterChange} />
        <ContactList contacts={filteredContacts} onClick={this.onDeleteClick} />
      </>
    );
  }
}
