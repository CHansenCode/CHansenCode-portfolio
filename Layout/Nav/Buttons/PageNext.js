import React from 'react';

import { Button } from 'chansencode-lib';

import css from './Buttons.module.scss';

export const PageNext = ({ pages, page, setPage, ...props }) => {
  //
  async function onClickNextPage() {
    setPage(page + 1);
  }

  let disabled = page === pages.length - 1;

  return (
    <Button className={disabled ? css.disabled : ''} onClick={onClickNextPage}>
      <h4>{`>`}</h4>
    </Button>
  );
};
