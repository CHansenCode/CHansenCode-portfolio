import { useState } from 'react';

import { Button } from 'chansencode-lib';

import { FiImage } from 'react-icons/fi';

import css from './Controller.module.scss';

export const Controller = ({ profile, setProfile, view, setView }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={css.controller}></div>
    </>
  );
};
