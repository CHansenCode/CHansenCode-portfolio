import { useState, useEffect } from 'react';

import { AiOutlineGithub } from 'react-icons/ai';

import { ImBooks } from 'react-icons/im';

import { BackToFront } from 'components';

import css from './One.module.scss';

export const Three = () => {
  const [loaded, setLoaded] = useState(false);

  const [view, setView] = useState('personal');

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div id={css.three} className={loaded ? css.loaded : ''}>
      <div>
        <h3 className="sc">Stateful user interface experiences</h3>
      </div>
      <div>info</div>

      <div className={css.view}>
        <BackToFront />
      </div>

      <div className={css.back_to_front}>
        <div className={view === 'personal' ? 'sc' : ''}>Personal</div>
        <div>
          <p>back-end</p>
        </div>
        <div>Front-end</div>
        <div>UI/UX</div>
        <div>Graphical creation</div>
      </div>

      <div className={css.links}>
        <h6>
          <span className="sc">LINKS:</span> <i>(opens in new window)</i>
        </h6>
        <LinkTo
          href="https://github.com/CHansenCode"
          text="CHansenCode"
          hover="My page and code @github"
        >
          <AiOutlineGithub />
        </LinkTo>
        <LinkTo
          href="https://lib.chansen.design"
          text="lib.chansen.design"
          hover="The library where i publish and document my own components"
        >
          <ImBooks />
        </LinkTo>
      </div>
    </div>
  );
};

const LinkTo = ({ href, text, children, hover }) => {
  return (
    <a href={href} target="_blank">
      <div className={css.linkTo}>
        {children}
        <h5>{text}</h5>
        <h5 className={css.hover}>
          <span>{hover}</span>
        </h5>
      </div>
    </a>
  );
};
