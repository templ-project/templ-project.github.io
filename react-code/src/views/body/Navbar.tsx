import {AppBar, IconButton, StandardProps, Theme, Toolbar, Typography, makeStyles} from '@material-ui/core';
import React, {ReactElement} from 'react';

import {mergeStyles} from '../../utils/styles';
import TemplIcon from '../icons/24/Templ';

export type NavbarClassKey = 'root' | 'logo';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NavbarProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>, NavbarClassKey> {}

function Navbar({classes, ...props}: NavbarProps): ReactElement {
  classes = mergeStyles(useStyles(), classes || {});
  return (
    <div className={classes?.root}>
      <AppBar position="static">
        <Toolbar>
          <Logo className={classes?.logo} />
          {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {},
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  // title: {
  //   flexGrow: 1,
  // },
}));

/*****************************************************************************
 * SubComponents
 */

export type LogoClassKey = 'root' | 'icon' | 'title';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LogoProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>, LogoClassKey> {}

function Logo({classes, ref, ...props}: LogoProps): ReactElement {
  classes = mergeStyles(useLogoStyles(), classes || {});
  return (
    <div className={classes?.root} {...props}>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <TemplIcon className={classes?.icon} />
      </IconButton>
      <Typography className={classes?.title} variant="h6">
        Templ Project
      </Typography>
    </div>
  );
}

const useLogoStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: 'center',
    display: 'flex',
  },
  icon: {
    '& path': {
      fill: 'white',
    },
  },
  title: {
    paddingLeft: theme.spacing(1),
  },
}));
