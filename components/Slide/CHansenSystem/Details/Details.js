import { useState, useEffect } from 'react';

import { Button } from 'chansencode-lib';
import { Links } from './Links/Links';

import { Labeled } from './Labeled/Labeled';
import { Tags } from './Tags/Tags';

import css from './Details.module.scss';

export const Details = ({ style, ...props }) => {
  const [activeData, setActiveData] = useState({});

  let appData = props.apps.find((a, i) => a.id === props.activeId);

  useEffect(() => {
    props.activeId ? setActiveData(appData) : setActiveData({});
  }, [props.activeId]);

  return (
    <div className={`${css.details} bg pc1b`}>
      <header>
        <div className={css.info}>
          <h4 className="sc">{activeData.role}</h4>
          <Labeled label="name" text={activeData.name} />
          <Labeled label="version" text="1.0.0" />
          <Labeled label="description" text={activeData.descr} />
        </div>

        <div className={css.img_wrapper}>
          <img src="https://media.chansen.design/placeholder.jpg" />
        </div>
      </header>

      <div>
        <Labeled label="description" text={activeData.descr} />

        <Tags data={activeData.tags} />
      </div>

      <footer>
        <Links {...props} />
      </footer>

      <Close {...props} />
    </div>
  );
};

const Close = ({ setActiveId }) => {
  async function onClickClose(setData) {
    setData('');
  }

  return (
    <Button
      className={`${css.btn_close} bg pc3b`}
      onClick={() => onClickClose(setActiveId)}
    >
      <h4>X</h4>
    </Button>
  );
};
