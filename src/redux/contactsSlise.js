import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: shortid.generate(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      return state.filter(contect => contect.id !== action.payload);
    },
  },
});
export const { addContact, deleteContact } = contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;
