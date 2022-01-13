import { PageIndicator, Settings } from './';

import css from './Nav.module.scss';

export function Nav({ ...props }) {
  return (
    <footer className={css.footer}>
      <nav>
        <Settings {...props} />

        <PageIndicator {...props} />

        <div />
      </nav>
    </footer>
  );
}
