import React from 'react';

import { Icons } from './Icons/Icons';
import { AiFillGithub } from 'react-icons/ai';
import { NextLink } from 'components/NextLink/NextLink';

import css from './Links.module.scss';

export const Link = ({ active, data, ...props }) => {
  //
  let height = props.height ? props.height : 3;

  const propStyle = {
    test: {
      top: active ? `calc(50% - ${height}rem)` : '110%',
    },
    git: {
      top: active ? `calc(50% + 2px)` : '110%',
    },
  };

  return (
    <div className={`${css.link_wrapper} ${active ? css.active : ''}`}>
      <NextLink href={data.url} blank>
        <h6>Test site :</h6>
        <IconCard href={data.git} />
      </NextLink>

      <NextLink href={data.git ? data.git : ''} blank>
        <h6>code :</h6>
        <div style={propStyle.git} className={css.link}>
          <div>
            <AiFillGithub size="1.5rem" />
          </div>
          <div>
            <h6>
              {data.git
                ? `${data.git.substring(0, 8)}..${data.git.substring(30)}`
                : '-'}
            </h6>
          </div>
        </div>
      </NextLink>
    </div>
  );
};

const IconCard = ({ href }) => {
  return (
    <div className={css.icon}>
      <div>icon</div>

      <div>
        <h6>{href}</h6>
      </div>
    </div>
  );
};
