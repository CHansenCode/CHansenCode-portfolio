import { useState } from 'react';

import { Logo, Button } from 'chansencode-lib';

import css from './Login.module.scss';

export const Login = ({ setWhom }) => {
  const [formData, setFormData] = useState(null);
  const [showGeneral, setShowGeneral] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    formData === 'cadmin' ? setWhom('cadmin') : alert('not found');
  }

  return (
    <div className={css.login}>
      <div className={css.logo}>
        <Logo width="200px" />
      </div>

      {!showGeneral ? (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Please paste your keyword"
            value={formData}
            onChange={e => setFormData(e.target.value)}
          />

          {formData ? (
            <Button onClick={handleSubmit}>'Verify'</Button>
          ) : (
            <Button onClick={() => setShowGeneral(true)}>
              'i wasn't provided a keyword
            </Button>
          )}
        </form>
      ) : (
        <div>
          <Button onClick={() => setWhom('general')}>
            take me to the general view{' '}
            <h4 style={{ marginLeft: '1rem' }}> {`->`}</h4>
          </Button>
        </div>
      )}
    </div>
  );
};
