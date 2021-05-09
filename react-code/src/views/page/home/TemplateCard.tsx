import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardProps,
  StandardProps,
  Theme,
  Typography,
  makeStyles,
} from '@material-ui/core';
import {ReactElement} from 'react';

import {TemplateEntity} from '../../../utils/api';
import {mergeStyles} from '../../../utils/styles';
import GnuIcon from '../../icons/32/Gnu';
import NodeJsIcon from '../../icons/32/NodeJs';
import PythonIcon from '../../icons/32/Python';
import ReactIcon from '../../icons/32/React';
import CoffeeScriptIcon from '../../icons/48/CoffeeScript';
import GolangIcon from '../../icons/64/Golang';
import TypeScriptIcon from '../../icons/64/TypeScript';
import BabelIcon from '../../icons/Babel';
import NestJsIcon from '../../icons/NestJs';

export type TemplateCardClassKey = 'root' | 'avatar' | 'media';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TemplateCardProps extends StandardProps<CardProps, TemplateCardClassKey> {
  entity: TemplateEntity;
}

function TemplateCard({classes = {}, entity, ...props}: TemplateCardProps): ReactElement {
  classes = mergeStyles(useStyles(), classes);
  return (
    <Card className={classes?.root} {...props}>
      <CardHeader
        avatar={<Avatar className={classes?.avatar}>{entityAvatar(entity.avatar)}</Avatar>}
        title={entity.title}
      />
      <CardMedia
        className={classes?.media}
        image="https://material-ui.com/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {entity.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function entityAvatar(type: string): ReactElement {
  switch (type) {
    case 'coffeescript':
      return <CoffeeScriptIcon />;
    case 'babel':
      return <BabelIcon />;
    case 'go':
      return <GolangIcon />;
    case 'nestjs':
      return <NestJsIcon />;
    case 'nodejs':
      return <NodeJsIcon />;
    case 'python':
      return <PythonIcon />;
    case 'react':
      return <ReactIcon />;
    case 'typescript':
      return <TypeScriptIcon />;
    case 'gnu':
    default:
      return <GnuIcon />;
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  avatar: {},
  media: {},
}));

export default TemplateCard;
