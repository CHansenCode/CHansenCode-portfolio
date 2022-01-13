import React from 'react';

import { Button } from 'chansencode-lib';

import css from './NoKeyword.module.scss';

export const GoGeneral = ({ text, noKey, setNoKey, ...props }) => {
  //
  async function noKeyTrue() {
    setNoKey(true);
  }
  async function goToGeneralView() {
    console.log('cow');
  }

  return (
    <div className={css.wrapper}>
      <Button onClick={noKeyTrue}>{`<`}</Button>

      <Button onClick={goToGeneralView}>{text}</Button>
    </div>
  );
};
