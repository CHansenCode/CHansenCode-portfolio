import {
  AiOutlineGithub,
  AiOutlineDatabase,
  AiOutlineHome,
} from 'react-icons/ai';
import { ImBooks } from 'react-icons/im';
import { BiSlideshow } from 'react-icons/bi';

import css from './Links.module.scss';

export const Links = ({ hover }) => {
  return (
    <div className={css.links}>
      <div>
        <p className="sc">Links</p>
        <LinkTo
          href="https://github.com/CHansenCode"
          text="CHansenCode"
          hover="My page and code @github"
          toggle={hover}
        >
          <AiOutlineGithub />
        </LinkTo>

        <Link
          href="https://www.chansen.design"
          text="CHansenDesign"
          onHover="My homepage"
          trigger="home"
          hover={hover}
        >
          <AiOutlineGithub />
        </Link>
      </div>

      <div>
        <p className="sc">title</p>
        <LinkTo
          href="https://lib.chansen.design"
          text="lib.chansen.design"
          hover="The library where i publish and document my own components"
          toggle={hover}
        >
          <ImBooks />
        </LinkTo>

        <LinkTo
          href="https://cms.chansen.design"
          text="cms.chansen.design"
          hover="The library where i publish and document my own components"
          toggle={hover}
        >
          <AiOutlineDatabase />
        </LinkTo>

        <LinkTo
          href="https://slides.chansen.design"
          text="slides.chansen.design"
          hover="The library where i publish and document my own components"
          toggle={hover}
        >
          <BiSlideshow />
        </LinkTo>
      </div>
    </div>
  );
};

const Link = ({ href, text, children, onHover, hoverToggle }) => {
  return (
    <a className={css.a} href={href} target="_blank">
      <div className={css.linkTo}>
        {children}
        <h5>{text}</h5>
        <h5 className={`bg ${css.hover}`}>
          <span>{onHover}</span>
        </h5>
      </div>
    </a>
  );
};

const LinkTo = ({ href, text, children, hover }) => {
  return (
    <a className={css.a} href={href} target="_blank">
      <div className={css.linkTo}>
        {children}
        <h5>{text}</h5>
        <h5 className={`bg ${css.hover}`}>
          <span>{hover}</span>
        </h5>
      </div>
    </a>
  );
};
