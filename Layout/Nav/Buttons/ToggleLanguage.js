import React, { useEffect } from 'react';

import { Button } from 'chansencode-lib';
import { Label } from 'components';

import { data } from 'config';

export const ToggleLanguage = ({ lang, setLang, setdata, ...props }) => {
  //
  async function toggleLanguage() {
    lang === 'swe'
      ? setLang('eng')
      : lang === 'eng'
      ? setLang('dan')
      : lang === 'dan'
      ? setLang('swe')
      : null;
  }

  return (
    <Button onClick={toggleLanguage}>
      <Label label={lang} />
    </Button>
  );
};
