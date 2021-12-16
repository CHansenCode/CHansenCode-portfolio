import { useState } from 'react';

import { Button } from 'chansencode-lib';
import { AiOutlineSetting } from 'react-icons/ai';
import { GiYinYang } from 'react-icons/gi';

import css from './Nav.module.scss';

export default function Nav({ colors, setColors, lang, setLang }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside id="aside_nav" className={css.aside}>
        <nav onMouseLeave={() => setOpen(false)}>
          <div
            className={`${css.buttons_container} ${
              open ? css.buttons_container_open : ''
            }`}
          >
            <div
              className={`${css.toggle_show} ${open ? css.toggle_hidden : ''}`}
            >
              <Button
                padding="0"
                onClick={() =>
                  setColors({ ...colors, darkmode: !colors.darkmode })
                }
              >
                <GiYinYang size="1.25rem" />
              </Button>
              <Button
                padding="0"
                onClick={() =>
                  lang === 'swe'
                    ? setLang('eng')
                    : lang === 'eng'
                    ? setLang('dan')
                    : lang === 'dan'
                    ? setLang('swe')
                    : null
                }
              >
                {lang}
              </Button>
            </div>

            <Button
              padding="0"
              onClick={() => setOpen(!open)}
              onMouseEnter={() => setOpen(true)}
            >
              <AiOutlineSetting size="1.25rem" />
            </Button>
          </div>
        </nav>
      </aside>

      <style jsx>{`
        #aside_nav {
          color: ${colors.pc};
        }
      `}</style>
    </>
  );
}
