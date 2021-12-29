import { useState, useEffect } from 'react';

import { Profile, Timeline, Details } from 'components';
import { Button } from 'chansencode-lib';

import css from './One.module.scss';

import { jobs, education } from 'config';

export const One = () => {
  const [loaded, setLoaded] = useState(false);
  const [details, setDetails] = useState({});

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div id={css.one} className={loaded ? css.loaded : ''}>
      <Profile />

      <Details data={details} />

      <Timeline />
    </div>
  );
};

// const Details = ({ data }) => {
//   return (
//     <div>
//       <div>
//         <h6>label :</h6>
//         <p>value / string</p>
//       </div>
//     </div>
//   );
// };
