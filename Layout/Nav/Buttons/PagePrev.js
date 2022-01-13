import React from 'react';

import { Button } from 'chansencode-lib';

import css from './Buttons.module.scss';

export const PagePrev = ({ page, setPage, ...props }) => {
  //
  async function onClickPrevPage() {
    setPage(page - 1);
  }

  let disabled = page < 1;

  return (
    <Button className={disabled ? css.disabled : ''} onClick={onClickPrevPage}>
      <h4>{`<`}</h4>
    </Button>
  );
};
