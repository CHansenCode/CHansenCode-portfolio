import { useState } from 'react';

import { Layout } from 'Layout';

import 'styles/style.scss';

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState('swe');
  const [whom, setWhom] = useState('');

  const initProps = {
    lang,
    setLang,
    whom,
    setWhom,
  };
  return (
    <Layout {...initProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
