import { useState, useEffect } from 'react';

import { ArchFrame } from 'components';

import css from './One.module.scss';

export const Four = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div id={css.four} className={loaded ? css.loaded : ''}>
      <div>
        <h2>Personligt brev</h2>
        <h3 className="sc">TITLE</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          dicta incidunt veritatis unde? Consectetur molestias iure deserunt
          soluta necessitatibus veritatis animi neque! Ipsa tempore veniam
          incidunt? Error debitis ut doloribus nemo, commodi, nesciunt labore
          eius illo modi exercitationem veritatis velit voluptatem unde officiis
          et, eum aperiam impedit ipsa dolore hic.
        </p>
      </div>
      <div>
        <h3 className="sc">TITLE</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          dicta incidunt veritatis unde? Consectetur molestias iure deserunt
          soluta necessitatibus veritatis animi neque! Ipsa tempore veniam
          incidunt? Error debitis ut doloribus nemo, commodi, nesciunt labore
          eius illo modi exercitationem veritatis velit voluptatem unde officiis
          et, eum aperiam impedit ipsa dolore hic.
        </p>
      </div>
      <div>
        <h3 className="sc">TITLE</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          dicta incidunt veritatis unde? Consectetur molestias iure deserunt
          soluta necessitatibus veritatis animi neque! Ipsa tempore veniam
          incidunt? Error debitis ut doloribus nemo, commodi, nesciunt labore
          eius illo modi exercitationem veritatis velit voluptatem unde officiis
          et, eum aperiam impedit ipsa dolore hic.
        </p>
      </div>
      <div>
        <h3 className="sc">TITLE</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          dicta incidunt veritatis unde? Consectetur molestias iure deserunt
          soluta necessitatibus veritatis animi neque! Ipsa tempore veniam
          incidunt? Error debitis ut doloribus nemo, commodi, nesciunt labore
          eius illo modi exercitationem veritatis velit voluptatem unde officiis
          et, eum aperiam impedit ipsa dolore hic.
        </p>
      </div>
    </div>
  );
};
