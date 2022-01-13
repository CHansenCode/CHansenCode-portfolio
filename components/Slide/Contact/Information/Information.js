import React from 'react';

import { credentials } from 'config';

import css from './Information.module.scss';

export const Information = ({ puzzValid, ...props }) => {
  return (
    <div className={css.wrapper}>
      {puzzValid ? (
        <>
          <div>
            <h4 className="sc">{credentials.email}</h4>

            <h4>{credentials.name}</h4>
            <p>{credentials.adr}</p>
            <p>{credentials.country}</p>

            <h4>{credentials.phone}</h4>
          </div>
        </>
      ) : (
        'Fill in boxes correctly to reveal personal information'
      )}
    </div>
  );
};
