import React, { useState, useEffect } from 'react';

import { CheckPuzzle, Information, Form } from './';

import css from './Contact.module.scss';

export const Contact = ({ ...props }) => {
  //
  const [puzzValid, setPuzzValid] = useState(false);

  return (
    <div className={css.main}>
      <Information puzzValid={puzzValid} {...props} />

      <CheckPuzzle
        puzzValid={puzzValid}
        setPuzzValid={setPuzzValid}
        {...props}
      />

      <Form puzzValid={puzzValid} {...props} />
    </div>
  );
};
