import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import css from './NextLink.module.scss';

export const NextLink = ({ ...props }) => {
  const { pathname } = useRouter();

  const isActive = props.exact
    ? pathname === props.href
    : pathname.startsWith(props.href);

  const disabled = !props.href ? ` ${css.disabled}` : '';

  return (
    <div
      className={`${css.wrapper}${
        isActive && !disabled ? ' sc' : ''
      }${disabled}`}
    >
      <Link href={props.href ? props.href : ''}>
        <a className={css.a} target={props.blank && '_blank'}>
          {props.children}
        </a>
      </Link>

      {props.hover && <div>{props.hover}</div>}
    </div>
  );
};
