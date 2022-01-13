import { useState, useEffect } from 'react';
import { BackToFront, Links, CHansenSystem } from 'components';

import css from './One.module.scss';

export const Three = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div id={css.three} className={loaded ? css.loaded : ''}>
      <CHansenSystem />
    </div>
  );
};
