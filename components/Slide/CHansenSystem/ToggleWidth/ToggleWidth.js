import React from 'react';

import css from './ToggleWidth.module.scss';

export const ToggleWidth = ({ children, ...props }) => {
  const propStyle = {
    containerOne: {
      width: props.activeId ? '30%' : '100%',
    },
    containerTwo: {
      width: props.activeId ? '70%' : '0.1%',
      opacity: props.activeId ? '1' : '0',
    },
  };
  return (
    <div className={css.container}>
      <div style={propStyle.containerOne}>
        {children && children.length > 0 && children[0]}
      </div>

      <div style={propStyle.containerTwo}>
        {children && children.length > 1 && children[1]}
      </div>
    </div>
  );
};
