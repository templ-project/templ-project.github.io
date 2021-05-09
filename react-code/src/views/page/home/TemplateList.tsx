import {Grid, GridClassKey, GridProps, Paper, StandardProps, Theme, makeStyles} from '@material-ui/core';
import {ReactElement} from 'react';

import {TemplateEntity} from '../../../utils/api';
import {mergeStyles} from '../../../utils/styles';
import TemplateCard from './TemplateCard';

export type TemplateListClassKey = GridClassKey;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TemplateListProps extends StandardProps<GridProps, TemplateListClassKey> {
  list?: TemplateEntity[];
}

function TemplateList({list = [], classes = {}, ...props}: TemplateListProps): ReactElement {
  classes = mergeStyles(useStyles(), classes);
  return (
    <Grid xs={12} classes={classes} {...props}>
      <Grid container justify="center" spacing={2}>
        {list.map((entity) => (
          <Grid key={entity.id} item xs={4}>
            <Paper>
              <TemplateCard entity={entity} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

export default TemplateList;
