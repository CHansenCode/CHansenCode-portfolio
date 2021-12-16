import { useState } from 'react';

import { useDates } from 'lib';

import css from './Timeline.module.scss';

export const Timeline = ({ jobs, education }) => {
  const { y, m, d } = useDates();
  const [years, setYears] = useState([
    2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
  ]);
  return (
    <div className={css.timeline}>
      <div className={css.timeline_jobs}>
        {jobs &&
          jobs.map((job, i) => (
            <JobBar key={`jobBar${job.title}`} data={job} />
          ))}
      </div>

      <div className={css.time_bar}>
        {years.map((year, i) => (
          <Year key={`year_time${year}`} data={year} />
        ))}
      </div>
    </div>
  );
};

const Year = ({ data }) => {
  const months = [
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
  return (
    <div className={css.time_year}>
      <header>
        <h6>{data}</h6>
      </header>

      <div className={css.time_year_months}>
        {months.map((month, i) => (
          <Month key={`time_month${month}${i}`} data={month} />
        ))}
      </div>
    </div>
  );
};
const Month = ({ data }) => {
  return (
    <div className={css.time_month}>
      <h6>{data.substring(0, 1)}</h6>
    </div>
  );
};

const EduBar = ({ data }) => {
  const propStyle = {
    position: 'absolute',
    top: '1rem',
    border: 'thin solid',
    height: '1rem',
    borderRadius: '0.5rem',
    left: `${newLeft}%`,
    width: `${realWidth}%`,
    boxShadow: 'inset 0 0 0.5rem -0.2rem currentColor',
    cursor: 'pointer',
  };
  return (
    <div className="sc" style={propStyle}>
      <h6>{data.title}</h6>
    </div>
  );
};
const JobBar = ({ data }) => {
  const jobStart = data.from.split('-');
  const jobTo = data.to.split('-');

  const fromYear = jobStart[0];
  const fromMonth = jobStart[1];
  const toYear = jobTo[0];
  const toMonth = jobTo[1];

  const yearDiff = (toYear - fromYear) * 12;
  const monthDiff = toMonth - fromMonth;

  const width = yearDiff + monthDiff;

  const realWidth = (width / 120) * 100;

  const realLeft = (2021 - fromYear) * 12 - fromMonth;

  const newLeft = 100 - (realLeft / 120) * 100;

  const propStyle = {
    position: 'absolute',
    top: '1rem',
    border: 'thin solid',
    height: '1rem',
    borderRadius: '0.5rem',
    left: `${newLeft}%`,
    width: `${realWidth}%`,
    boxShadow: 'inset 0 0 0.5rem -0.2rem currentColor',
    cursor: 'pointer',
  };
  return (
    <div style={propStyle}>
      <h6>{data.title}</h6>
    </div>
  );
};
