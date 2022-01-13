import React from 'react';

import { Post } from './Post';

import css from './Post.module.scss';

export const Posts = ({ occupation, setDetails, ...props }) => {
  //

  async function onHoverSetDetails(data, setData) {
    setData(data);
  }

  return (
    <>
      <div className={`${css.posts} ${css.job}`}>
        <h6>jobs</h6>
        {occupation &&
          occupation.map((c, i) =>
            c.category === 'job' ? (
              <Post
                key={`${c.id}`}
                data={c}
                onMouseEnter={() => onHoverSetDetails(c, setDetails)}
                {...props}
              />
            ) : null,
          )}
      </div>

      <div className={`${css.posts} ${css.education}`}>
        <h6>education</h6>
        {occupation &&
          occupation.map((c, i) =>
            c.category === 'education' ? (
              <Post
                key={`${c.id}`}
                data={c}
                onMouseEnter={() => onHoverSetDetails(c, setDetails)}
                {...props}
              />
            ) : null,
          )}
      </div>

      <div className={`${css.posts} ${css.extra}`}>
        <h6>extra</h6>
        {occupation &&
          occupation.map((c, i) =>
            c.category === 'extra' ? (
              <Post
                key={`${c.id}`}
                data={c}
                onMouseEnter={() => onHoverSetDetails(c, setDetails)}
                {...props}
              />
            ) : null,
          )}
      </div>
    </>
  );
};
