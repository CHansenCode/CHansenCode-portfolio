import { SiAdobe, SiBlender, SiAutodesk, SiSketch } from 'react-icons/si';

import css from './Profile.module.scss';

export const Profile = ({ profile, setProfile, view, setView }) => {
  return (
    <div className={css.profile}>
      <header>
        <h2>CURRICULUM VITAE</h2>
        <h2>CURRICULUM VITAE</h2>
        <h5>för</h5>
        <h3>Christoffer Hansen</h3>
      </header>

      <div>
        <h4>- Innovativ {`&`} nyskapande</h4>
        <h4>- Självdriven {`&`} flitig</h4>
        <h4>- Snäll {`&`} trevlig</h4>
      </div>

      <div>
        <h4>
          Utbildad <b>Arkitekt MAA</b> från Köpenhamns arkitektskola <br />
          <i>{` & `}</i>
          Självlärd <b>Front-end kodare</b>
        </h4>
      </div>

      <div>
        Kortlista kompetenser:
        <div>
          Grafisk design:
          <SiAdobe size="2rem" />
        </div>
        <div>
          <SiBlender size="2rem" />
        </div>
        <div>
          <SiAutodesk size="2rem" />
        </div>
        <div>
          <SiSketch size="2rem" />
        </div>
      </div>
    </div>
  );
};
