import React from 'react';

import { HoverBubble } from 'components';

import css from './Dots.module.scss';

export const Dot = ({ index, page, setPage, hover, ...props }) => {
  //
  async function onClickSetPage() {
    setPage(index);
  }

  const propStyle = {
    background: index === page ? 'CurrentColor' : 'transparent',
  };

  return (
    <>
      <HoverBubble bottom="150%" left="15%" hover={hover}>
        <div style={propStyle} className={css.dot} onClick={onClickSetPage} />
      </HoverBubble>
    </>
  );
};
