import { Button } from 'chansencode-lib';

import css from './Picker.module.scss';

export const Picker = ({ profile, setProfile, view, setView }) => {
  return (
    <div className={css.picker}>
      Controller
      <div className={css.profile}>
        <Button
          className={profile === 'architect' ? `sc ${css.active}` : ''}
          onClick={() => setProfile('architect')}
        >
          Arkitektur
        </Button>
        <Button
          className={profile === 'webdev' ? `sc ${css.active}` : ''}
          onClick={() => setProfile('webdev')}
        >
          Webdev
        </Button>
        <Button
          className={profile === 'designer' ? `sc ${css.active}` : ''}
          onClick={() => setProfile('designer')}
        >
          Design
        </Button>
      </div>
      <div className={css.view}>
        <Button
          className={view === 'graphical' ? `sc ${css.active}` : ''}
          onClick={() => setView('graphical')}
        >
          Grafisk
        </Button>
        <Button
          className={view === 'text' ? `sc ${css.active}` : ''}
          onClick={() => setView('text')}
        >
          Text
        </Button>
        <Button
          className={view === 'list' ? `sc ${css.active}` : ''}
          onClick={() => setView('list')}
        >
          Lista
        </Button>
      </div>
    </div>
  );
};

const Choice = ({ title, setChoice }) => {
  return <Button onClick={() => setChoice(title)}></Button>;
};
