import React from 'react';

import { AiOutlineSetting } from 'react-icons/ai';

import { Button } from 'chansencode-lib';

export const ToggleOpen = ({ onClick, onMouseEnter, ...props }) => {
  return (
    <Button onClick={onClick} onMouseEnter={onMouseEnter}>
      <AiOutlineSetting size="1.25rem" />
    </Button>
  );
};
