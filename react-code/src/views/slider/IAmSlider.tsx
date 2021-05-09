import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {StandardProps, Theme, Typography, makeStyles} from '@material-ui/core';
import React, {ReactElement, useEffect} from 'react';
import Typed from 'typed.js';

import {mergeStyles} from '../../utils/styles';

export type IAmSliderClassKey = 'root' | 'item' | 'text' | 'textBold';
export interface IAmSliderProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>, IAmSliderClassKey> {
  whatAmI?: string[];
}

function typedEffect(): void {
  const typedElement = document.querySelector('#typed');
  if (typedElement?.getAttribute('data-initialized') !== '1') {
    new Typed('#typed', {
      backDelay: 3000,
      backSpeed: 20,
      loop: true,
      loopCount: Infinity,
      startDelay: 1000,
      stringsElement: '#typed-strings',
      typeSpeed: 20,
    });
    typedElement?.setAttribute('data-initialized', '1');
  }
}

function IAmSlider({
  classes = {},
  whatAmI = ['Beautifier', 'Linter', 'Unittest', 'Analyzer'],
}: IAmSliderProps): ReactElement {
  classes = mergeStyles(useStyles(), classes);

  useEffect(typedEffect);

  return (
    <div className={classes?.root}>
      <div id="typed-strings">
        {whatAmI.map((word) => (
          <div className={classes?.item}>
            <Typography className={classes?.text} variant="body1" component="span">
              I am
            </Typography>
            <Typography className={classes?.textBold} variant="body1" component="span">
              {word}
            </Typography>
          </div>
        ))}
      </div>
      <div id="typed"></div>
    </div>
  );
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .typed-cursor': {
      display: 'none',
    },
  },
  item: {},
  text: {},
  textBold: {
    fontWeight: 'bold',
    paddingLeft: theme.spacing(0.5),
  },
}));

export default IAmSlider;
