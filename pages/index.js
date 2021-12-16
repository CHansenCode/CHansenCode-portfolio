import { useState, useEffect } from 'react';
import { Button } from 'chansencode-lib';

import { One, Two, Three, Four, Five } from 'components/Slides';

import {
  Profile,
  Timeline,
  History,
  Picker,
  Controller,
  Login,
} from 'components';

import css from 'styles/index.module.scss';

import { jobs, education } from 'config';

export default function Home({ page }) {
  const [profile, setProfile] = useState('architect');
  const [view, setView] = useState('graphical');
  const [whom, setWhom] = useState('cadmin');
  const [persBrev, setPersBref] = useState('');

  useEffect(() => {}, [whom]);

  return (
    <>
      {whom ? (
        <div id="page_wrapper" className={css.wrapper}>
          <>
            {page === 0 ? (
              <One />
            ) : page === 1 ? (
              <Two />
            ) : page === 2 ? (
              <Three />
            ) : page === 3 ? (
              <Four />
            ) : (
              <Five />
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

            border: thin solid red;
          }
          .double_grid {
            position: relative;
            height: 100%;
            width: 100%;
            max-height: 800px;
            max-width: 1200px;
            border: thin solid;
            display: grid;
            grid-template: 'profile view' 1fr / 1fr 1fr;
            grid-gap: 1rem;
          }
          .double_grid > * {
            border: thin dashed red;
          }
        `}
      </style>
    </>
  );
}
