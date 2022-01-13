import React from 'react';

import { Card } from './Card';

import css from './Cards.module.scss';

export const Cards = ({ ...props }) => {
  let backside = 0;
  let content = 0;
  let consumer = 0;

  props.apps &&
    props.apps.map((a, i) =>
      a.category === 'backside'
        ? backside++
        : a.category === 'content'
        ? content++
        : consumer++,
    );

  return (
    <div className={css.cards}>
      {props.apps.map((a, i) =>
        a.category === 'backside' ? (
          <Card
            key={`card${a.id}`}
            i={i}
            top={i + 1}
            left={10}
            data={a}
            {...props}
          />
        ) : a.category === 'content' ? (
          <>
            {backside}
            {content}
            {consumer}
            <Card
              key={`card${a.id}`}
              i={i}
              top={i - backside + 1}
              left={40}
              data={a}
              {...props}
            />
          </>
        ) : (
          <Card
            key={`card${a.id}`}
            i={i}
            top={i - backside - content + 1}
            left={70}
            data={a}
            {...props}
          />
        ),
      )}
    </div>
  );
};
