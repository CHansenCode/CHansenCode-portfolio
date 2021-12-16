import React from 'react';

import css from './Main.module.scss';

export default function Main({ children, colors, page }) {
  return (
    <>
      <main id="main_container" className={css.main_container}>
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            colors: colors,
            page: page,
          });
        })}
      </main>

      <style jsx global>
        {`
          html {
            transition: 0.3s ease;
          }
          #main_container {
            transition: 0.3s ease;
            color: ${colors.pc};
            background: ${colors.bg};
          }
          .pc {
            color: ${colors && colors.pc};
          }
          .sc {
            color: ${colors && colors.sc};
          }
          .bg {
            background: ${colors && colors.bg};
          }
        `}
      </style>
    </>
  );
}
