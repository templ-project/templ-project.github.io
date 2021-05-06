import {Paper, PaperProps} from '@material-ui/core';
import {ReactElement} from 'react';

export type EmptyClassKey = 'root';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EmptyProps
  // extends StandardProps<React.HTMLAttributes<HTMLDivElement>, EmptyClassKey> {}
  extends PaperProps {}

function Empty({children, ...props}: EmptyProps): ReactElement {
  return (
    <Paper elevation={0} {...props}>
      {children}
    </Paper>
  );
}

export default Empty;
