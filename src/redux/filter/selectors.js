import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/contacts/selectors';

export const selectFilter = state => state.filter;

export const selectNormalizedFilter = createSelector([selectFilter], filter => {
  return filter.toLowerCase();
});

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNormalizedFilter],
  (contacts, normalizedFilter) => {
    return contacts.items.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
