import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {StandardProps, Theme, Typography, makeStyles} from '@material-ui/core';
import React, {ReactElement} from 'react';
import Slider, {Settings} from 'react-slick';

import {mergeStyles} from '../../utils/styles';

export type IAmSliderClassKey = 'root' | 'item' | 'text' | 'textBold';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAmSliderProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>, IAmSliderClassKey> {
  settings?: Settings;
  whatAmI?: string[];
}

function IAmSlider({
  settings = {
    autoplay: true,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  },
  classes = {},
  whatAmI = ['Beautifier', 'Linter', 'Unittest', 'Analyzer'],
}: IAmSliderProps): ReactElement {
  classes = mergeStyles(useStyles(), classes);
  return (
    <Slider className={classes?.root} {...settings}>
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
    </Slider>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // height: '300px',
    // position: 'relative',
    // overflow: 'hidden',
  },
  item: {
    // background: 'blue',
    // border: '1px blue solid',
    // height: '200px',
  },
  text: {
    // color: 'red',
    // fontSize: '20px',
  },
  textBold: {
    fontWeight: 'bold',
    paddingLeft: theme.spacing(0.5),
  },
}));

export default IAmSlider;
