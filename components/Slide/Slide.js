import React from 'react';

import { Contact, CV, LetterOfMotivation } from './';
import { Architecture, CHansenSystem } from './';
import { FadeIn } from 'components';

import css from './Slide.module.scss';

export const Slide = ({ page, ...props }) => {
  //

  console.log(page);

  return (
    <div className={css.slide}>
      <FadeIn className={css.container}>
        <>
          {page === 0 && <CV {...props} />}
          {page === 1 && <Architecture {...props} />}
          {page === 2 && <CHansenSystem {...props} />}
          {page === 3 && <LetterOfMotivation {...props} />}
          {page === 4 && <Contact {...props} />}
        </>
      </FadeIn>
    </div>
  );
};
