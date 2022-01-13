import React from 'react';

import css from './Tags.module.scss';

export const Tags = ({ data }) => {
  return (
    <div className={css.tags_wrapper}>
      <h6>tags :</h6>

      <div className={css.tags}>
        {data &&
          data.map((a, i) => (
            <div key={`tag${i}${a}`} className={css.tag}>
              {a}
            </div>
          ))}
      </div>
    </div>
  );
};
