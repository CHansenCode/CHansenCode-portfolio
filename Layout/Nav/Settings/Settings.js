import React, { useState } from 'react';

import { ToggleOpen, ToggleLightDark, ToggleLanguage } from '../Buttons';
import { FadeIn } from 'components';

import css from './Settings.module.scss';

export const Settings = ({ ...props }) => {
  //
  const [open, setOpen] = useState(false);

  async function setOpenFalse() {
    setOpen(false);
  }
  async function setOpenTrue() {
    setOpen(true);
  }
  async function onClickToggleOpen() {
    setOpen(!open);
  }

  return (
    <div className={css.wrapper} onMouseLeave={setOpenFalse}>
      <ToggleOpen onClick={onClickToggleOpen} onMouseEnter={setOpenTrue} />

      {open && (
        <FadeIn>
          <ToggleLightDark {...props} />
          <ToggleLanguage {...props} />
        </FadeIn>
      )}
    </div>
  );
};
