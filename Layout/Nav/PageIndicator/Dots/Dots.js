import React from 'react';

import { Dot } from './Dot';

import css from './Dots.module.scss';

export const Dots = ({ ...props }) => {
  const pages = ['cv', 'arch', 'webdesign', 'pb', 'contact'];

  return (
    <div className={css.wrapper}>
      <>
        {props.pages.map((d, i) => (
          <Dot key={`dot${i}${d}`} hover={d} index={i} {...props} />
        ))}
      </>
    </div>
  );
};
