import React from 'react';
import css from './contacts.module.css';

export const Contacts = ({ contacts, handleDelete }) => {
  return (
    <div className={css.contactListItem}>
      <ul className={css.contactList}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.cont}>
            {contact.name}: {contact.number}
            <button
              type="button"
              onClick={() => handleDelete(contact.id)}
              className={css.btnList}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
