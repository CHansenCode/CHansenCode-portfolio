import React from 'react';

import css from './Card.module.scss';

export const Card = ({ i, top, data, left, setActiveId, ...props }) => {
  //
  async function onClickSetActiveId(id, setId) {
    setId(id);
  }

  const propStyle = {
    width: props.activeId ? '60%' : '20%',
    top: !props.activeId ? `${top * 10}rem` : `${10 + i * 2.5}rem`,
    left: props.activeId ? `10%` : `${left}%`,
  };

  return (
    <div
      className={`${css.card} bg pc1b`}
      style={propStyle}
      onClick={() => onClickSetActiveId(data.id, setActiveId)}
    >
      <h4 className={`${css.role} ${props.activeId === data.id ? 'sc' : ''}`}>
        {data.role ? data.role : 'server'}
      </h4>

      <div className={css.constr}>
        <h6 className={css.prefix}>{data.prefix}.</h6>
        <h5 className={`${css.name} sc`}>{props.name}</h5>
        <h6 className={css.suffix}>{`.com`}</h6>
      </div>
    </div>
  );
};
