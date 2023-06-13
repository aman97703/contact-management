import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Contact {
  id: number;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  status: string;
}

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const { id, firstname, lastname, phoneNumber, email, status } = action.payload;
      const contact = state.contacts.find((c) => c.id === id);
      if (contact) {
        contact.firstname = firstname;
        contact.lastname = lastname;
        contact.phoneNumber = phoneNumber;
        contact.email = email;
        contact.status = status;
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter((c) => c.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContact, editContact, deleteContact } = contactSlice.actions;

export const selectContactById = (state: RootState, id: number) => {
  return state.contacts.contacts.find((contact) => contact.id === id);
};

export default contactSlice.reducer;
