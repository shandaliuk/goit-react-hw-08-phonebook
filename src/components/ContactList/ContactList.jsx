import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts !== [] &&
        contacts.map(contact => {
          const { id, name, number } = contact;
          return (
            <li key={id}>
              {name}: {number}
              <button type="button" onClick={() => onClick(id)}>
                Delete
              </button>
            </li>
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
