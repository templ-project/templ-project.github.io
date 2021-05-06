import {Container} from '@material-ui/core';
import {Paper} from '@material-ui/core';
import {ReactElement} from 'react';

import Navbar from '../body/Navbar';
import Empty, {EmptyProps} from './Empty';

export type WithNavbarClassKey = 'root';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WithNavbarProps
  // extends StandardProps<React.HTMLAttributes<HTMLDivElement>, WithNavbarClassKey> {}
  extends EmptyProps {}

function WithNavbar({children, ...props}: WithNavbarProps): ReactElement {
  return (
    <Empty {...props}>
      <Navbar />
      <Container maxWidth="lg">
        <Paper elevation={0}>{children}</Paper>
      </Container>
    </Empty>
  );
}

export default WithNavbar;
