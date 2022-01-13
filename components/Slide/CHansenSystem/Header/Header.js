import React from 'react';

import { Input } from 'chansencode-lib';

import css from './Header.module.scss';

export const Header = ({ setName, ...props }) => {
  async function onInputChange(e, setData) {
    setData(e.target.value);
  }

  return (
    <header className={css.header}>
      <div>
        <h6>Name:</h6>
        <Input
          className="sc"
          placeholder="cow"
          value={props.name}
          onChange={e => onInputChange(e, setName)}
        />
      </div>

      <div>
        <h4>CHansenDesign system</h4>
      </div>
    </header>
  );
};
