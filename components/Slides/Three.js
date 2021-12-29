import { useState, useEffect } from 'react';
import { BackToFront, Links, ChansenSystem } from 'components';

import css from './One.module.scss';

export const Three = () => {
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({
    domain: 'Example',
  });

  //Hover: 'server','db','cms','lib','legacy','slides'
  const [hover, setHover] = useState('');
  const [view, setView] = useState('personal');

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div id={css.three} className={loaded ? css.loaded : ''}>
      <Introduction />

      <DomainInput
        formData={formData}
        setFormData={setFormData}
        hover={hover}
      />

      <Diagram domain={formData.domain} hover={hover} setHover={setHover} />

      {/* <ChansenSystem
        domain={formData.domain}
        hover={hover}
        setHover={setHover}
      /> */}

      <ActiveView hover={hover} />

      <Links />
    </div>
  );
};

const DomainInput = ({ formData, setFormData, hover }) => {
  return (
    <div className={`sc ${css.domain_input}`}>
      <input
        placeholder="Enter domain"
        value={formData.domain}
        onChange={e => setFormData({ ...formData, domain: e.target.value })}
      />
    </div>
  );
};

const Introduction = () => {
  return (
    <div className={css.intro}>
      <h3 style={{ marginBottom: '1rem' }}>
        The <span className="sc">'CHansenSystem'</span> environment and/or stack
      </h3>
      <h6>
        Is the development name of the system that i've been building in my
        self-education within the MERN-stack and correlating technologies.
        <br />
        <br />
        cow
      </h6>
    </div>
  );
};

const ActiveView = ({ hover }) => {
  return (
    <div className={`pc3b ${css.active_view}`}>
      <div>
        <h4 className="sc">{hover && hover}</h4>
        <p>some explanation stuff</p>
      </div>
    </div>
  );
};

const Diagram = ({ domain, hover, setHover }) => {
  return (
    <div className={css.diagram}>
      <div className={css.rows}>
        <div className={css.row}>
          <h6 className="sc">backside:</h6>
          <div className={css.grid}>
            <DiagramPost
              subtitle="MongoDB"
              hover={hover}
              setHover={setHover}
              trigger="DATABASE"
            />
            <DiagramPost
              subtitle="Express.js"
              hover={hover}
              setHover={setHover}
              trigger="SERVER"
            />
          </div>
        </div>

        <div className={css.row}>
          <h6 className="sc">Content creation:</h6>
          <div className={css.grid}>
            <DiagramPost
              subtitle="cow"
              hover={hover}
              setHover={setHover}
              trigger="MongoDB"
            />
            <DiagramPost
              subtitle="cow"
              hover={hover}
              setHover={setHover}
              trigger="server"
            />
          </div>
        </div>

        <div className={css.row}>
          <h6 className="sc">Consumer apps:</h6>
          <div className={css.grid}>
            <DiagramPost
              subtitle="Next.js"
              hover={hover}
              setHover={setHover}
              trigger="Homepage"
            />
            <DiagramPost
              prefix="slides."
              title={domain}
              suffix=".com"
              subtitle="Next.js"
              hover={hover}
              setHover={setHover}
              trigger="Slides"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DiagramPost = ({
  prefix,
  title,
  suffix,
  subtitle,
  hover,
  setHover,
  trigger,
}) => {
  return (
    <div
      className={`pc3b ${hover === trigger ? 'sc' : ''}`}
      onMouseEnter={() => setHover(trigger)}
    >
      <div className={css.diagram_title}>
        <h6>{prefix}</h6>
        <p className="sc">{title}</p>
        <h6>{suffix}</h6>
      </div>
      <h5>{subtitle}</h5>
    </div>
  );
};
