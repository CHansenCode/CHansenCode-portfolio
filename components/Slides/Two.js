import { useState, useEffect } from 'react';

import { LayeredImage, ArchitectureFrame, Button } from 'chansencode-lib';

import css from './One.module.scss';

import { archData } from 'config';

export const Two = () => {
  const [dataIndex, setDataIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const imgArr = [
    'https://media.chansen.design/architecture/ishallen/a101.jpg',
    'https://media.chansen.design/architecture/ishallen/a101.jpg',
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  const data = {
    drawingTitle: 'cow',
  };

  return (
    <div id={css.two} className={loaded ? css.loaded : ''}>
      <>
        <Button
          className={`bg ${css.prevBtn} ${dataIndex < 1 ? '' : ''}`}
          onClick={() => (dataIndex < 1 ? '' : setDataIndex(dataIndex - 1))}
        >{`<`}</Button>
        <Button
          className={`bg ${css.nextBtn} ${
            dataIndex + 1 === archData.length ? '' : ''
          }`}
          onClick={() =>
            dataIndex + 1 === archData.length
              ? null
              : setDataIndex(dataIndex + 1)
          }
        >{`>`}</Button>
      </>

      <ArchitectureFrame width="100%" data={archData[dataIndex]} />
    </div>
  );
};
