import { useState, useEffect } from 'react';
import { Button, Input, Textarea } from 'chansencode-lib';

import css from './One.module.scss';

import { credentials } from 'config';

export const Five = () => {
  const [loaded, setLoaded] = useState(false);
  const [validPattern, setValidPattern] = useState(false);
  const [check, setCheck] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
  });

  useEffect(() => {
    check.one && check.three && check.five && check.seven && check.nine
      ? setValidPattern(true)
      : setValidPattern(false);
  }, [check]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div id={css.five} className={loaded ? css.loaded : ''}>
      <div className={css.greeting}>
        {validPattern ? (
          <>
            <h4 className="sc">{credentials.email}</h4>
            <h4>{credentials.phone}</h4>

            <h4>{credentials.name}</h4>
            <p>{credentials.adr}</p>
            <p>{credentials.country}</p>
          </>
        ) : (
          <>
            <h4 className="sc">
              Tack för tiden du tog till att titta igenom min Cv
            </h4>
            <p>
              Om du fann det av intresse, var god att fylla in ett kryss i
              checkboxarna och sedan antingen kontakta mig på upplysningarna som
              visas eller i kontaktformuläret
            </p>
          </>
        )}
      </div>
    </div>
  );
};
