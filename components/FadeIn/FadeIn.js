import React, { useState, useEffect } from 'react';

import css from './FadeIn.module.scss';

export const FadeIn = ({ children }) => {
  //
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const propStyle = {
    opacity: loaded && 1,
  };

  return (
    <div style={propStyle} className={css.init}>
      {children}
    </div>
  );
};
