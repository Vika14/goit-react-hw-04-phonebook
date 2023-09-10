import React from 'react';
import { nanoid } from 'nanoid';
import css from './filter.module.css';

export const Filter = ({ filter, handleChange }) => {
  const filId = nanoid();
  return (
    <div className={css.forma}>
      <label htmlFor={filId} className={css.nameNumber}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
          id={filId}
          className={css.pole}
        />
      </label>
    </div>
  );
};
