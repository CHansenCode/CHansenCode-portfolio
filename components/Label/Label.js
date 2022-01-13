import React from 'react';

import css from './Label.module.scss';

export const Label = ({ label, children }) => {
  return children ? (
    <div>
      <h6 className={css.label}>{label ? label : 'prop: label empty'}</h6>

      <div>{children}</div>
    </div>
  ) : (
    <h6 className={css.label}>{label ? label : 'prop: label empty'}</h6>
  );
};
