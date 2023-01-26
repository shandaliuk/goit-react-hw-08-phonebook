import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilter } from 'redux/filterSlice';
import { Title, Input, FilterWrapper } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onFilterChange = event => dispatch(setFilter(event.target.value));
  return (
    <FilterWrapper>
      <Title>Find contacts by name</Title>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </FilterWrapper>
  );
};
