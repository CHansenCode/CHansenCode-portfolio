import React from 'react';

import css from './Image.module.scss';

export const Image = ({ contain, modal, data, ...props }) => {
  const propStyle = {
    wrapper: {
      cursor: modal ? 'pointer' : 'default',
    },
    img: {
      objectFit: contain ? 'contain' : 'cover',
    },
  };

  const empty = data && !data.src && !props.src && true;

  return (
    <div
      style={propStyle.wrapper}
      className={css.wrapper}
      onClick={onClickFillModal}
    >
      {empty && <WarningEmpty />}

      <img
        style={propStyle.img}
        src={
          data && data.src
            ? data.src
            : props.src
            ? props.src
            : 'https://media.chansen.design/placeholder.jpg'
        }
        alt={data ? data.alt : 'no alt text provided'}
      />
    </div>
  );
};

const WarningEmpty = () => {
  return (
    <div className={css.warning_empty}>
      <h4>' src: " " ' !</h4>
    </div>
  );
};
