import React from 'react';

import css from './Main.module.scss';

export const Main = ({ children, ...props }) => {
  return (
    <main id="main_container" className={css.main_container}>
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          ...props,
        });
      })}
    </main>
  );
};
