import { useState, useEffect } from 'react';

import { Logo, Button, Input } from 'chansencode-lib';
import { GoGeneral } from './NoKeyword';

import css from './Login.module.scss';

export const Login = ({ ...props }) => {
  const [formData, setFormData] = useState('');
  const [noKey, setNoKey] = useState(false);

  async function handleChange(e) {
    setFormData(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    formData === 'cadmin' ? props.setWhom('cadmin') : alert('not found');
  }
  async function setNoKeyTrue() {
    setNoKey(true);
  }
  async function setNoKeyFalse() {
    setNoKey(false);
  }
  async function setWhomGeneric() {
    props.setWhom('generic');
  }

  const data = props.data.login;
  const genData = props.data.general;

  return (
    <div className={css.login}>
      <div className={css.logo}>
        <Logo width="200px" />
      </div>

      {!noKey ? (
        <form onSubmit={handleSubmit}>
          <Input
            placeholder={data.pasteKeyword}
            value={formData}
            onChange={handleChange}
          />

          {formData ? (
            <Button onClick={handleSubmit}>{genData.verify}</Button>
          ) : (
            <Button onClick={setNoKeyTrue}>{data.no}</Button>
          )}
        </form>
      ) : (
        <div className={css.go_to_generic_view}>
          <Button onClick={setNoKeyFalse}>{data.back}</Button>

          <Button onClick={setWhomGeneric}>{data.goGeneric}</Button>
        </div>
      )}
    </div>
  );
};
