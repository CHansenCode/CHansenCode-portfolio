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

      <div>
        <Checkboxes check={check} setCheck={setCheck} />
      </div>

      <Form validPattern={validPattern} />
    </div>
  );
};

const Form = ({ validPattern }) => {
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    contactInfo: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();
    alert(formData.title);
  }

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <h4 className="sc">Kontaktformulär</h4>
      <Input
        label="subject:"
        type="text"
        onChange={e => setFormData({ ...formData, title: e.target.value })}
      />
      <Input
        label="contact info:"
        type="text"
        onChange={e =>
          setFormData({ ...formData, contactInfo: e.target.value })
        }
      />
      <Textarea
        label="meddelande"
        rows="5"
        onChange={e => setFormData({ ...formData, title: e.target.value })}
      />
      <Button className={validPattern ? css.validButton : css.invalidButton}>
        {validPattern ? 'Send' : 'Please enter valid pattern'}
      </Button>
    </form>
  );
};

const Checkboxes = ({ check, setCheck }) => {
  return (
    <div className={css.checkboxes}>
      <h5>check a cross-pattern to reveal personal information</h5>

      <div>
        <div>
          <input
            type="checkbox"
            onChange={() => setCheck({ ...check, one: !check.one })}
          />
          <input
            type="checkbox"
            onChange={() => setCheck({ ...check, two: !check.two })}
          />
          <input
            type="checkbox"
            onChange={() => setCheck({ ...check, three: !check.three })}
          />
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() => setCheck({ ...check, four: !check.four })}
          />
          <input
            type="checkbox"
            onChange={() => setCheck({ ...check, five: !check.five })}
          />
          <input
            type="checkbox"
            onChange={() => setCheck({ ...check, six: !check.six })}
          />
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() => setCheck({ ...check, seven: !check.seven })}
          />
          <input
            type="checkbox"
            onChange={() => setCheck({ ...check, eight: !check.eight })}
          />
          <input
            type="checkbox"
            onChange={() => setCheck({ ...check, nine: !check.nine })}
          />
        </div>
      </div>
    </div>
  );
};
