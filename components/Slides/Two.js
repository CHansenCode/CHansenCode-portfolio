import { useState, useEffect } from 'react';

import { LayeredImage, Logo } from 'chansencode-lib';
import { ArchFrame } from 'components';

import css from './One.module.scss';

export const Two = () => {
  const [loaded, setLoaded] = useState(false);
  const [project, setProject] = useState(0);

  const imgArr = [
    'https://media.chansen.design/architecture/ishallen/a101.jpg',
    'https://media.chansen.design/architecture/ishallen/a101.jpg',
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div id={css.two} className={loaded ? css.loaded : ''}>
      <ArchFrame project="ISHALLEN" title="SITUATIONSPLAN" cover={true}>
        {project === 0 ? <DrawingOne /> : <DrawingOne />}
      </ArchFrame>
    </div>
  );
};

const DrawingOne = () => {
  return (
    <LayeredImage distortMax="2">
      {/* BG */}
      <div className={css.layer}>
        <img
          height="100%"
          width="100%"
          src="https://media.chansen.design/architecture/ishallen/a101.jpg"
          alt=""
        />
      </div>

      {/* TEXT */}
      <>
        <AbsoluteText text="Ishallen" top="55%" left="52%" />
        <AbsoluteText text="Teaterplatsen" top="65%" left="29%" />
        <AbsoluteText text="Gasteatern" top="94%" left="34%" />
      </>

      {/* FOREGROUND */}
      <>
        <AbsoluteImage
          top="-55%"
          left="30%"
          width="200%"
          src="https://purepng.com/public/uploads/large/purepng.com-small-single-cloudcloudskycloudyclearskynature-221519326618duicg.png"
        />
        <AbsoluteImage
          top="70%"
          left="-120%"
          width="200%"
          src="https://purepng.com/public/uploads/large/purepng.com-small-single-cloudcloudskycloudyclearskynature-221519326618duicg.png"
        />
        <AbsoluteImage
          top="-70%"
          left="-120%"
          width="200%"
          src="https://purepng.com/public/uploads/large/purepng.com-small-single-cloudcloudskycloudyclearskynature-221519326618duicg.png"
        />
      </>
    </LayeredImage>
  );
};

const AbsoluteImage = ({ left, top, width, src }) => {
  const propStyle = {
    position: 'absolute',
    zIndex: 100,
    height: '100%',
    width: '100%',
    left: left,
    top: top,
    opacity: 0.4,

    img: {
      objectFit: 'cover',
    },
  };
  return (
    <div style={propStyle}>
      <img style={propStyle.img} src={src} height="100%" width={width} />
    </div>
  );
};
const AbsoluteText = ({ text, left, top, children }) => {
  const propStyle = {
    position: 'absolute',
    left: left,
    top: top,
  };
  return <div style={propStyle}>{text}</div>;
};
