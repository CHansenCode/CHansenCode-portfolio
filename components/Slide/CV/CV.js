import React, { useState } from 'react';

import { Timeline, Profile, Details } from './';
import { useDates } from 'lib';

import css from './CV.module.scss';

import { occupation } from 'config';

export const CV = ({ ...props }) => {
  const initTime = {
    scope: 8,
    currentYear: y,
    currentMonth: m,
  };
  //
  const { y, m } = useDates();
  const [time, setTime] = useState({ ...initTime });
  const [details, setDetails] = useState({ ...occupation[0] });

  props = {
    ...props,
    time: time,
    setTime: setTime,
    details: details,
    setDetails: setDetails,
  };

  return (
    <div className={css.wrapper}>
      <>
        <Profile {...props} />

        <Details {...props} />

        <Timeline {...props} />
      </>
    </div>
  );
};
