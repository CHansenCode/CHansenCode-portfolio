import { Backdrop } from './Backdrop/Backdrop';
import { Posts } from './Post/Posts';
import { ButtonBar } from './ButtonBar/ButtonBar';

import css from './Timeline.module.scss';

export const Timeline = ({ ...props }) => {
  return (
    <div className={css.timeline}>
      <ButtonBar {...props} />

      <div>
        <Posts {...props} />
        <Backdrop {...props} />
      </div>
    </div>
  );
};
