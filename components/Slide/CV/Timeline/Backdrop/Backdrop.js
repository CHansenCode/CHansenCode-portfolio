import React, { useState, useEffect } from 'react';

import css from './Backdrop.module.scss';

export const Backdrop = ({ time, ...props }) => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    function createYearsArray(activeYearScope) {
      let now = new Date();
      let currentYear = now.getFullYear();

      const yArr = [...Array(activeYearScope)].map((_, i) => currentYear - i);
      yArr.sort((a, b) => a - b);

      setYears(yArr);
    }
    createYearsArray(time.scope);
  }, [time.scope]);

  const propStyle = {
    width: `${100 / time.scope}%`,
  };

  return (
    <div className={css.main}>
      {years &&
        years.map((year, i) => (
          <div key={`bg${year}${i}`} style={propStyle} className={css.year}>
            <h6>{year}</h6>
            {monthsArr.map((m, i) => (
              <div key={`bg${year}${m}${i}`} className={css.month} />
            ))}
          </div>
        ))}
    </div>
  );
};

const monthsArr = [
  'jan',
  'feb',
  'marsh',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];
