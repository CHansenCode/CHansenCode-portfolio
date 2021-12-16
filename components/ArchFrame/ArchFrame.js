import { Logo } from 'chansencode-lib';

import { useDates } from 'lib';

import css from './ArchFrame.module.scss';

export const ArchFrame = ({
  title,
  project,
  cover,
  handl,
  ritadAv,
  imgSrc,
  children,
}) => {
  const { y, m, d } = useDates();

  return (
    <div className={css.wrapper}>
      <div className={css.frame}>
        {/* view */}
        <div className={css.view}>
          {children ? (
            children
          ) : (
            <div>
              {imgSrc ? (
                <img height="100%" width="100%" src={imgSrc} alt="" />
              ) : (
                'no imgSrc prop found'
              )}
            </div>
          )}
        </div>

        <footer className={css.footer}>
          <h4>{title}</h4>
        </footer>

        <Aside
          year={y}
          month={m}
          day={d}
          project={project}
          handl={handl}
          ritadAv={ritadAv}
        />
      </div>
    </div>
  );
};

const Aside = ({ year, month, day, project }) => {
  return (
    <aside className={css.aside}>
      <header>
        <h6>hello:</h6>
        <h5>balbal</h5>
      </header>

      <div className={css.logo}>
        <Logo width="60%" />
      </div>
      <div className={css.projectInfo}>
        <h6>projectnamn:</h6>
        {project}
      </div>

      <footer>
        <Box label="owner" value="" gridArea="proAnsv" />
        <Box label="ansv. ark" value="" gridArea="ansvArk" />
        <Box label="handl." value="CH" gridArea="ritadAv" />
        <Box label="ritad av" value="CH" gridArea="hand" />
        <Box label="scale" value="1:500" gridArea="scale" />
        <Box label="date" value={`${year}- ${month}- ${day}`} gridArea="date" />
      </footer>
    </aside>
  );
};

const Box = ({ label, value, gridArea }) => {
  return (
    <div style={{ gridArea: gridArea }} className={css.box}>
      <h6>{label}:</h6>
      <h5>{value ? value : '_'}</h5>
    </div>
  );
};
