import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const data = localStorage.getItem('contactList');
    if (!data) return initialContacts;

    return JSON.parse(data);
  });
  const [filter, setFilter] = useState('');

  const handleSubmit = ({ name, number }) => {
    if (contacts.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const id = nanoid();

    setContacts(prev => [...prev, { id, name, number }]);
  };

  const handleDelete = contactId => {
    setContacts(preContacts =>
      preContacts.filter(({ id }) => id !== contactId)
    );
  };

  const filterContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filterContactsList;
  };

  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <Contacts contacts={filterContacts()} handleDelete={handleDelete} />
    </div>
  );
};
