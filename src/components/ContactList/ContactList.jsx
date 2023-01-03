import PropTypes from 'prop-types';
import { Item, Number, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts !== [] &&
        contacts.map(contact => {
          const { id, name, number } = contact;
          return (
            <Item key={id}>
              {name}: <Number>{number}</Number>
              <Button type="button" onClick={() => onClick(id)}>
                Delete
              </Button>
            </Item>
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
