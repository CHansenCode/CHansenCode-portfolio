import { useState } from 'react';

import Head from 'next/head';
import { useColors } from 'lib';
import { Button } from 'chansencode-lib';

import Nav from './Nav';
import Main from './Main';

import css from './Layout.module.scss';

export function Layout({ children }) {
  const { colors, setColors } = useColors();
  const [lang, setLang] = useState('eng');
  const [page, setPage] = useState(0);

  return (
    <>
      <Head>
        <title>C.Hansen Portfolio</title>
        <meta name="description" content="Portfolio / cv page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav
        colors={colors}
        setColors={setColors}
        lang={lang}
        setLang={setLang}
      />

      <Button
        style={{ color: colors.pc }}
        className={`${css.btn_prev} ${page < 1 ? css.disabled : ''}`}
        onClick={() => setPage(page - 1)}
      >{`<`}</Button>
      <Button
        style={{ color: colors.pc }}
        className={`${css.btn_next} ${page > 3 ? css.disabled : ''}`}
        onClick={() => setPage(page + 1)}
      >{`>`}</Button>

      <Main colors={colors} lang={lang} page={page}>
        {children}
      </Main>
    </>
  );
}
