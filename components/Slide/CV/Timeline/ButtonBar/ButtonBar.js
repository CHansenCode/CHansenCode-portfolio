import { Button } from 'chansencode-lib';
import { IoArrowRedoOutline } from 'react-icons/io5';

import css from './ButtonBar.module.scss';

export const ButtonBar = ({ time, setTime, ...props }) => {
  //
  async function timeScopeAddition(data, setData) {
    setData({
      ...data,
      scope: data.scope + 1,
    });
  }
  async function timeScopeSubstract(data, setData) {
    setData({
      ...data,
      scope: data.scope > 1 ? data.scope - 1 : null,
    });
  }

  const propStyle = {
    opacity: time.scope === 1 && 0.2,
    pointerEvents: time.scope === 1 && 'none',
  };

  return (
    <aside className={css.main}>
      <>
        <Button onClick={() => timeScopeAddition(time, setTime)}>
          <h4>{`+`}</h4>
        </Button>

        <Button
          style={propStyle}
          onClick={() => timeScopeSubstract(time, setTime)}
        >
          <h4>{`-`}</h4>
        </Button>
      </>
    </aside>
  );
};
