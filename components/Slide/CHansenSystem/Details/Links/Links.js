import React from 'react';

import { Link } from './Link';

import css from './Links.module.scss';

export const Links = ({ ...props }) => {
  return (
    <div className={css.links}>
      {props.apps.map((a, i) => (
        <Link
          active={props.activeId === a.id ? true : false}
          key={`link${a.id}`}
          data={a}
          {...props}
        />
      ))}
    </div>
  );
};
