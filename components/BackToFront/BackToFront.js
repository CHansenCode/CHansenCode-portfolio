import { FaServer } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';

import css from './BackToFront.module.scss';

export const BackToFront = () => {
  return (
    <div className={css.wrapper}>
      <div>
        Primary Competences
        <div>
          <FaServer size="2rem" />
        </div>
        <div>
          <MdWeb size="2.65rem" />
        </div>
      </div>
    </div>
  );
};
