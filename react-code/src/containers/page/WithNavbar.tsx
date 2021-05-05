import {ReactElement} from 'react';

import Page, {PageProps} from '../../views/Page';
import Navbar from '../../views/page/Navbar';

// import MenuIcon from '@material-ui/icons/Menu';

export type WithNavbarClassKey = 'root';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WithNavbarProps
  // extends StandardProps<React.HTMLAttributes<HTMLDivElement>, WithNavbarClassKey> {}
  extends PageProps {}

function WithNavbar({children, ...props}: WithNavbarProps): ReactElement {
  return (
    <Page {...props}>
      <Navbar />
      {children}
    </Page>
  );
}

{
  /* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */
}

export default WithNavbar;
