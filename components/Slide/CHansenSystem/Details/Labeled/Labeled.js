import React from 'react';

import css from './Labeled.module.scss';

export const Labeled = ({ children, label, text }) => {
  return (
    <div className={css.wrapper}>
      <h6>{label} :</h6>
      {children ? children : <p>{text}</p>}
    </div>
  );
};
