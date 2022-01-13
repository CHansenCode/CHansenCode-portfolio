import React from 'react';

import { PagePrev, PageNext } from '../Buttons';
import { Dots } from './Dots';

import css from './PageIndicator.module.scss';

export const PageIndicator = ({ ...props }) => {
  const pages = ['cv', 'arch', 'webdesign', 'pb', 'contact'];

  const propStyle = {
    opacity: props.whom ? '1' : '0',
    pointerEvents: props.whom ? 'all' : 'none',
  };

  return (
    <div style={propStyle} className={css.wrapper}>
      <PagePrev {...props} />

      <Dots pages={pages} {...props} />

      <PageNext {...props} />
    </div>
  );
};
