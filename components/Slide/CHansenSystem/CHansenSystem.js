import { useState, useEffect } from 'react';

import { Cards } from './Cards/Cards';
import { Header } from './Header/Header';
import { Details } from './Details/Details';
import { ToggleWidth } from './ToggleWidth/ToggleWidth';

import { apps } from './data';

import css from './CHansenSystem.module.scss';

export const CHansenSystem = ({ domain, hover, setHover }) => {
  const [name, setName] = useState('example');
  const [activeId, setActiveId] = useState('');

  const initProps = { name, setName, activeId, setActiveId, apps };

  return (
    <div className={css.main}>
      <Header {...initProps} />

      <ToggleWidth {...initProps}>
        <Cards {...initProps} />
        <Details {...initProps} />
      </ToggleWidth>
    </div>
  );
};
