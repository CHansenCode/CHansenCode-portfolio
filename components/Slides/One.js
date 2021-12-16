import { useState, useEffect } from 'react';

import { Profile, Timeline } from 'components';
import { Button } from 'chansencode-lib';

import css from './One.module.scss';

export const One = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div id={css.one} className={loaded ? css.loaded : ''}>
      <div>
        <Profile />
      </div>

      <div>
        <Button>architecture</Button>
        <Button>Webdev</Button>
      </div>

      <Timeline />
    </div>
  );
};
