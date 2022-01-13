import React from 'react';

import css from './LetterOfMotivation.module.scss';

export const LetterOfMotivation = () => {
  //

  return (
    <div className={css.main}>
      <h3 className="sc">letter</h3>

      <div className={css.texts}>
        <div>
          <h4>Subby</h4>
          <p>I wanna go wroooom!</p>
        </div>
        <div>
          <h4>Subby</h4>
          <p>I wanna go wroooom!</p>
        </div>
        <div>
          <h4>Subby</h4>
          <p>I wanna go wroooom!</p>
        </div>
        <div>
          <h4>Subby</h4>
          <p>I wanna go wroooom!</p>
        </div>
      </div>
    </div>
  );
};

const Paragraph = ({}) => {
  return (
    <div>
      <h4></h4>
      <p></p>
    </div>
  )
}