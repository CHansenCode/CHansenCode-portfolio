import { useState } from 'react';

import { GlobalStyles, Meta, Main, Nav } from './';

import { useColors, useData } from 'lib';

export function Layout({ children, ...props }) {
  const { data, setData } = useData({ lang: props.lang });
  const { colors, setColors } = useColors();
  const [page, setPage] = useState(0);

  const onProps = {
    data,
    setData,
    colors,
    setColors,
    page,
    setPage,
    pages,
    lang: props.lang,
    setLang: props.setLang,
    whom: props.whom,
    setWhom: props.setWhom,
  };

  return (
    data && (
      <>
        <Meta {...onProps} />

        <Nav {...onProps} />

        <Main {...onProps}>{children}</Main>

        <GlobalStyles {...onProps} />
      </>
    )
  );
}

const pages = ['cv', 'resa', 'kompetenser', 'personligt brev', 'kontakt'];
