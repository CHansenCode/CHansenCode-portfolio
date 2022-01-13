import React from 'react';

import { LayeredImage, ArchitectureFrame } from 'chansencode-lib';

import css from './Architecture.module.scss';

import { archData } from 'config';

export const Architecture = ({ ...props }) => {
  return (
    <div className={css.main}>
      <ArchitectureFrame width="100%" data={archData[0]} />
    </div>
  );
};
