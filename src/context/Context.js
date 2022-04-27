import React, { createContext } from 'react';

export const contactsContext = createContext();



const Context = () => {
    return (
        <contactsContext.Provider 
        // value={{addContact, getContacts, contacts: state.contacts, contactToEdit: state.contactToEdit, deleteContact, changeStatus, editContact, saveContact}}
        >
        {children}
    </contactsContext.Provider>
    );
};

export default Context;