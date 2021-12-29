import { useState, useEffect } from 'react';

import css from './ChansenSystem.module.scss';

export const ChansenSystem = ({ domain, hover, setHover }) => {
  return (
    <div className={css.mainContain}>
      <Column title="BACKSIDE">
        <Styled
          title="SERVER"
          subtitle="EXPRESS.JS"
          trigger="server"
          hover={hover}
          setHover={setHover}
        >
          <h6 className="sc">descr: </h6>
          <Category value="REST api configured from the cms" />
          <h6 className="sc">Standard functions: </h6>
          <Category value="standard functions: ~/auth, ~/users, ~/texts, ~/media, ~/contact, ~/settings, ~/meta" />
          <Category value="Custom api points: ~/presentation (slide app), ~/planningApp (planning tool on cms)" />
        </Styled>
        <Styled
          title="DATABASE"
          subtitle="MongoDB"
          trigger="db"
          hover={hover}
          setHover={setHover}
        >
          <Category value="MongoDB instance" />
        </Styled>
      </Column>

      <Column title="Content creation">
        <Styled
          prefix="cms."
          title={domain}
          suffix=".com"
          subtitle="NEXT.JS"
          trigger="cms"
          hover={hover}
          setHover={setHover}
        >
          <Category value="Creation of content: Media, texts & custom input" />
          <Category value="Ticket system for reporting bugs and problems" />
          <Category value="User creation & configure of permissions" />
          <Category value="Site/Meta settings: colors, published, maintenance, policies, legal" />
          <Category value="Intercom chat system with either group members or dev (me)" />
          <Category value="PlanningApp: project plan in order of stages, tasks & subtasks." />
        </Styled>
        <Styled
          prefix="lib."
          title={domain}
          suffix=".com"
          subtitle="NEXT.JS / ROLLUP.JS"
          trigger="lib"
          hover={hover}
          setHover={setHover}
        >
          <Category value="Component library" />
          <Category value="'storybook style' view of components with props " />
        </Styled>
      </Column>

      <Column title="CONSUMER APPS">
        <Styled
          prefix="www."
          title={domain}
          suffix=".com"
          subtitle="NEXT.JS"
          trigger="home"
          hover={hover}
          setHover={setHover}
        >
          <Category value="Homepage, displays custom input created in the cms." />
        </Styled>
        <Styled
          prefix="slides."
          title={domain}
          suffix=".com"
          subtitle="NEXT.JS"
          trigger="slides"
          hover={hover}
          setHover={setHover}
        >
          <Category value="Simplified slide presentation app showing presentations created in the cms" />
        </Styled>
      </Column>
    </div>
  );
};

const Styled = ({
  prefix,
  title,
  suffix,
  subtitle,
  hover,
  setHover,
  trigger,
  children,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    hover === trigger ? setOpen(true) : setOpen(false);
  }, [hover]);
  return (
    <div className={css.styled}>
      <header onMouseEnter={() => setHover(trigger)}>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <h6>{prefix}</h6>
          <p className="sc">{title}</p>
          <h6>{suffix}</h6>
        </div>

        <h5>{subtitle}</h5>
      </header>

      <div className={`${css.parent} ${open ? css.parent_open : ''}`}>
        {children && children.length > 1
          ? children.map((child, i) => <div>{child}</div>)
          : children}
      </div>

      {/* <div className={open ? css.styled_open : ''}>{children}</div> */}
    </div>
  );
};

const Column = ({ title, children }) => {
  return (
    <div className={css.column}>
      <h4>{title}</h4>

      {children}
    </div>
  );
};

const Arrows = ({ rotate, opacity, width, arrowOne }) => {
  const styles = {
    width: width ? width : '50%',
    opacity: opacity ? opacity : 0.7,
    transform: `rotate(${rotate ? rotate : 0}deg)`,
  };
  return (
    <div style={styles} className={css.arrow}>
      <div className={css.arrowBody} />
      <div className={css.topArrow} />
      <div className={css.downArrow} />
    </div>
  );
};

const Category = ({ value }) => {
  return (
    <div className={css.category}>
      <h5>{value}</h5>
    </div>
  );
};
