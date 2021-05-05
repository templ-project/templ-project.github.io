import React, {ReactElement} from 'react';
import {Paper, PaperProps, StandardProps} from '@material-ui/core';

export type PageClassKey = 'root'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PageProps
// extends StandardProps<React.HTMLAttributes<HTMLDivElement>, PageClassKey> {}
  extends PaperProps {}

function Page({children, ...props}: PageProps): ReactElement {
  return <Paper elevation={0} {...props}>{children}</Paper>;
}


export default Page;
