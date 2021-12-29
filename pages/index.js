import { useState, useEffect } from 'react';

import { One, Two, Three, Four, Five } from 'components/Slides';
import { Login } from 'components';

import css from 'styles/index.module.scss';

export default function Home({ ...props }) {
  const [whom, setWhom] = useState('');

  useEffect(() => {}, [whom]);

  return (
    <>
      {whom ? (
        <div id="page_wrapper" className={css.wrapper}>
          <>
            {props.page === 0 ? (
              <One {...props} />
            ) : props.page === 1 ? (
              <Two {...props} />
            ) : props.page === 2 ? (
              <Three {...props} />
            ) : props.page === 3 ? (
              <Four {...props} />
            ) : (
              <Five {...props} />
            )}
          </>
        </div>
      ) : (
        <Login setWhom={setWhom} />
      )}

      <style jsx>
        {`
          #page_wrapper {
            position: relative;
            height: 100vh;
            width: 100vw;
          }
        `}
      </style>
    </>
  );
}
