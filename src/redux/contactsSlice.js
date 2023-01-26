import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { people: [] },
  reducers: {
    addContact(state, action) {
      state.people.push(action.payload);
    },
    deleteContact(state, action) {
      return state.people.filter(contact => contact.id !== action.payload);
    },
  },
});

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

// Selectors

export const getContacts = state => state.contacts.people;
