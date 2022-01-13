import React from 'react';

import { Button } from 'chansencode-lib';
import { GiYinYang } from 'react-icons/gi';

export const ToggleLightDark = ({ colors, setColors, ...props }) => {
  //
  async function toggleLightMode() {
    setColors({ ...colors, darkmode: !colors.darkmode });
  }

  return (
    <Button onClick={toggleLightMode}>
      <GiYinYang size="1.25rem" />
    </Button>
  );
};
