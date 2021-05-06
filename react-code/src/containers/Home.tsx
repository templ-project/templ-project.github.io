import {StandardProps, Theme, Typography, makeStyles, withStyles} from '@material-ui/core';
import React, {ReactElement} from 'react';

import {mergeStyles} from '../utils/styles';
import DetailedTempl from '../views/icons/DetailedTempl';
import WithNavbar from '../views/page/WithNavbar';
import IAmSlider from '../views/slider/IAmSlider';

// export type HomeProps = WithNavbarProps;

function Home(): ReactElement {
  return (
    <WithNavbar>
      <HomeBanner />
    </WithNavbar>
  );
}

export default Home;

/*****************************************************************************
 * SubComponents
 */

export type HomeBannerClassKey = 'root' | 'logo' | 'content';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HomeBannerProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>, HomeBannerClassKey> {}

export function HomeBanner({classes = {}}: HomeBannerProps): ReactElement {
  classes = mergeStyles(useHomeBannerStyles(), classes);
  return (
    <div className={classes?.root}>
      <div className={classes?.logo}>
        <DetailedTempl />
      </div>
      <div className={classes?.content}>
        <Typography variant="h2" component="h2">
          Templ Project
        </Typography>
        <StyledIAmSlider />
        <Typography variant="body1" component="p">
          A collection of templates to start your projects easier.
        </Typography>
      </div>
    </div>
  );
}

const useHomeBannerStyles = makeStyles((theme: Theme) => ({
  root: {
    border: '1px red solid',
    display: 'flex',
    height: '300px',
    marginTop: '20px',
  },
  logo: {
    display: 'flex',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      width: '80%',
      height: '80%',
    },
  },
  content: {
    width: '80%',
  },
}));

const StyledIAmSlider = withStyles({
  root: {
    // width: '80%',
  },
})(IAmSlider);
