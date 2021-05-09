import {StandardProps, Theme, makeStyles, withStyles} from '@material-ui/core';
import {ReactElement} from 'react';

import {mergeStyles} from '../../utils/styles';

export type HeaderClassKey = 'root' | 'background' | 'content';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>, HeaderClassKey> {}

function Header({classes = {}, children}: HeaderProps): ReactElement {
  classes = mergeStyles(useStyles(), classes);
  const backgroundClasses = {root: classes.background};
  return (
    <section className={classes?.root}>
      <HeaderBackground classes={backgroundClasses} />
      <div className={classes?.content}>{children}</div>
      <HeaderBottomSeparator />
    </section>
  );
}

export default Header;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    boxSizing: 'border-box',
    display: 'block',
    minHeight: '500px',
    overflow: 'hidden',
    position: 'relative',
  },
  content: {
    left: 0,
    margin: '50px 0', // TODO: use theme
    position: 'absolute',
    right: 0,
  },
}));

/*****************************************************************************
 * SubComponents
 */

export type HeaderBackgroundClassKey = 'root';

const bubbleStyles = [
  {
    height: '150px',
    left: '-4%',
    width: '150px',
  },
  {
    height: '50px',
    right: '4%',
    width: '50px',
  },
  {
    background: 'hsla(0,0%,100%,.3)',
    height: '50px',
    right: '5.6%',
    top: '50%',
    width: '50px',
  },
  {
    background: 'hsla(0,0%,100%,.15)',
    height: '75px',
    right: '7%',
    top: '57%',
    width: '75px',
  },
  {
    background: 'hsla(0,0%,100%,.05)',
    height: '100px',
    left: '1%',
    top: '38%',
    width: '100px',
  },
  {
    background: 'hsla(0,0%,100%,.15)',
    height: '200px',
    left: '10%',
    top: '44%',
    width: '200px',
  },
  {
    background: 'hsla(0,0%,100%,.04)',
    bottom: '50%',
    height: '200px',
    right: '36%',
    width: '200px',
  },
  {
    background: 'hsla(0,0%,100%,.2)',
    bottom: '10%',
    height: '100px',
    right: '2%',
    width: '100px',
  },
  {
    background: 'hsla(0,0%,100%,.1)',
    bottom: '1%',
    height: '50px',
    right: '2%',
    width: '50px',
  },
  {
    background: 'hsla(0,0%,100%,.05)',
    bottom: '10%',
    height: '100px',
    left: '1%',
    width: '100px',
  },
];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderBackgroundProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, HeaderBackgroundClassKey> {}

function HeaderBackground({classes = {}}: HeaderBackgroundProps): ReactElement {
  classes = mergeStyles(useBackgroundStyles(), classes);
  return (
    <div className={classes?.root}>
      {/* <HeaderBackgroundBubble /> */}
      {bubbleStyles.map((styles) => {
        return <HeaderBackgroundBubble style={styles} />;
      })}
    </div>
  );
}

const useBackgroundStyles = makeStyles((theme: Theme) => ({
  root: {
    background: 'linear-gradient(150deg, #7795f8 15%,#6772e5 70%,#555abf 94%);',
    height: '100%',
    position: 'absolute',
    top: 0,
    width: '100%',
    // zIndex: -1,
  },
}));

////////////////////////

export type HeaderBackgroundBubbleClassKey = 'root';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderBackgroundBubbleProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, HeaderBackgroundBubbleClassKey> {}

function HeaderBackgroundBubble({classes = {}, style = {}}: HeaderBackgroundBubbleProps): ReactElement {
  classes = mergeStyles(useBubbleStyles(), classes);
  return <span className={classes?.root} style={style}></span>;
}

const useBubbleStyles = makeStyles((theme: Theme) => ({
  root: {
    background: 'hsla(0,0%,100%,.1)',
    borderRadius: '50%',
    // bottom: 'auto',
    display: 'block',
    height: '150px',
    // left: '-4%',
    position: 'absolute',
    width: '150px',
  },
}));

////////////////////////

export type HeaderBottomSeparatorClassKey = 'root' | 'fill';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderBottomSeparatorProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, HeaderBottomSeparatorClassKey> {}

function HeaderBottomSeparator({classes = {}}: HeaderBottomSeparatorProps): ReactElement {
  classes = mergeStyles(useBottomSeparatorStyles(), classes);
  return (
    <div className={classes?.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon className={classes?.fill} points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  );
}

const useBottomSeparatorStyles = makeStyles((theme: Theme) => ({
  root: {
    bottom: 0,
    height: '80px',
    left: 0,
    position: 'absolute',
    right: 0,
    '& svg': {
      bottom: 0,
      left: 0,
      pointerEvents: 'none',
      position: 'absolute',
      right: 0,
    },
  },
  fill: {
    fill: 'white',
  },
}));
