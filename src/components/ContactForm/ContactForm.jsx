import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { getContacts, addContact } from 'redux/contactsSlice';
import { Form, SubmitButton, Input, Label, Title } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const checkExclusiveness = contactName =>
    contacts.find(contact => contact.name === contactName);

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { value, name } = event.target;
    if (name === 'name') {
      setName(value);
      return;
    }
    setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isExisting = checkExclusiveness(name);
    if (isExisting) {
      alert(`${name} is already in contacts.`);
      reset();
      return;
    }
    dispatch(
      addContact({
        name,
        number,
        id: nanoid(5),
      })
    );
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Title>Name</Title>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        <Title>Number</Title>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};
