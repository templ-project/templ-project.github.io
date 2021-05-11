import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardProps,
  IconButton,
  StandardProps,
  Theme,
  Typography,
  hexToRgb,
  makeStyles,
} from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import React, {ReactElement} from 'react';

import {TemplateEntity} from '../../../utils/api';
import {mergeStyles} from '../../../utils/styles';
import JavaScriptIcon from '../../icons/256/JavaScript';
import GnuIcon from '../../icons/32/Gnu';
import NodeJsIcon from '../../icons/32/NodeJs';
import PythonIcon from '../../icons/32/Python';
import ReactIcon from '../../icons/32/React';
import CoffeeScriptIcon from '../../icons/48/CoffeeScript';
import GolangIcon from '../../icons/64/Golang';
import TypeScriptIcon from '../../icons/64/TypeScript';
import NestJsIcon from '../../icons/NestJs';
import MediaCoffeeScript from './media/CoffeeScript';
import MediaGnu from './media/Gnu';
import MediaNodeJs from './media/NodeJs';
import MediaTypeScript from './media/TypeScript';

export type TemplateCardClassKey = 'root' | 'avatar' | 'header' | 'link' | 'media';

/**
 * @link https://www.pluralsight.com/guides/how-to-render-a-component-dynamically-based-on-a-json-config
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EntityAvatar: {[key: string]: any} = {
  coffeescript: CoffeeScriptIcon,
  babel: JavaScriptIcon,
  go: GolangIcon,
  nestjs: NestJsIcon,
  nodejs: NodeJsIcon,
  python: PythonIcon,
  react: ReactIcon,
  typescript: TypeScriptIcon,
  gnu: GnuIcon,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EntityMedia: {[key: string]: any} = {
  coffeescript: MediaCoffeeScript,
  babel: JavaScriptIcon,
  go: GolangIcon,
  nestjs: NestJsIcon,
  nodejs: MediaNodeJs,
  python: PythonIcon,
  react: ReactIcon,
  typescript: MediaTypeScript,
  gnu: MediaGnu,
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TemplateCardProps extends StandardProps<CardProps, TemplateCardClassKey> {
  entity: TemplateEntity;
}

function TemplateCard({classes = {}, entity, ...props}: TemplateCardProps): ReactElement {
  classes = mergeStyles(useStyles(), classes);
  return (
    <Card className={classes?.root} {...props}>
      {/* <CardMedia className={classes?.media} image={<MediaNodeJs />} title="Paella dish" /> */}
      <div className={classes?.media}>{React.createElement(EntityMedia[entity.avatar] || EntityMedia.gnu)}</div>
      <CardContent>
        <div className={classes?.header}>
          <Avatar className={classes?.avatar}>
            {React.createElement(EntityAvatar[entity.avatar] || EntityAvatar.gnu)}
            {/* {EntityAvatar[entity.avatar] ? EntityAvatar[entity.avatar] : <GnuIcon />} */}
          </Avatar>
          <Typography gutterBottom variant="h5" component="h3">
            {entity.title}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary" component="p">
          {entity.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="see on Github" className={classes?.link} href={entity.link} target="_blank">
          <LinkIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '350px',
    textAlign: 'left',
  },
  avatar: {},
  header: {
    alignItems: 'center',
    display: 'flex',
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    '& h3': {
      margin: 0,
      paddingLeft: theme.spacing(1),
    },
  },
  link: {
    marginLeft: 'auto',
  },
  media: {
    background: hexToRgb(`${theme.palette.primary.light}0C`),
    height: '150px',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    '& svg': {
      filter: 'blur(2px)',
      height: '200%',
      left: '-50%',
      width: '200%',
      opacity: '.5',
      position: 'absolute',
      top: '-50%',
    },
  },
}));

export default TemplateCard;
