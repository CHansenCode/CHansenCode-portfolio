import React from 'react';

import css from './HoverBubble.module.scss';

export const HoverBubble = ({ hover, children, ...props }) => {
  //
  const propStyle = {
    top: props.top && props.top,
    right: props.right && props.right,
    bottom: props.bottom && props.bottom,
    left: props.left && props.left,
  };

  return (
    <div className={css.wrapper}>
      <div style={propStyle} className={css.hover}>
        <h5>{hover ? hover : '"hover={empty}"'} </h5>
      </div>

      <div className={css.child_wrapper}>{children}</div>
    </div>
  );
};
