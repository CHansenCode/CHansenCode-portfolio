import { useState, useEffect } from 'react';

export const SlideIn = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div id={css.one} className={loaded ? css.loaded : ''}>
      {children}
    </div>
  );
};
