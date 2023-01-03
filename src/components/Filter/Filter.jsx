import PropTypes from 'prop-types';
import { Title, Input, FilterWrapper } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterWrapper>
      <Title>Find contacts by name</Title>
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </FilterWrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
