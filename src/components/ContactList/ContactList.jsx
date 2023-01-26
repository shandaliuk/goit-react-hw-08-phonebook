import { useSelector, useDispatch } from 'react-redux';
import { getContacts, deleteContact } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { Item, Number, Button } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const onDeleteClick = id => dispatch(deleteContact(id));
  return (
    <ul>
      {filteredContacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <Item key={id}>
            {name}: <Number>{number}</Number>
            <Button type="button" onClick={() => onDeleteClick(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </ul>
  );
};
