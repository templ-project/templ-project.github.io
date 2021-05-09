import {Button, StandardProps, Theme, Typography, makeStyles, withStyles} from '@material-ui/core';
import {Container} from '@material-ui/core';
import React, {ReactElement, useEffect, useState} from 'react';

import {TemplateEntity, fetchData} from '../utils/api';
import {mergeStyles} from '../utils/styles';
import Header from '../views/body/Header';
import GithubIcon from '../views/icons/24/Github';
import DetailedTempl from '../views/icons/64/DetailedTempl';
import TemplateList from '../views/page/home/TemplateList';
import WithNavbar, {WithNavbarProps} from '../views/page/WithNavbar';
import IAmSlider from '../views/slider/IAmSlider';

export interface HomeProps extends WithNavbarProps {
  templatesUrl: string;
}

function Home({templatesUrl, ...props}: HomeProps): ReactElement {
  const [templateList, setTemplateList] = useState<TemplateEntity[]>([]);

  useEffect(() => {
    if (templateList.length === 0) {
      fetchData<TemplateEntity>(templatesUrl).then(setTemplateList);
    }
  }, [templateList.length, templatesUrl]);

  return (
    <WithNavbar header={<Header children={<HomeBanner />} />} {...props}>
      <TemplateList list={templateList} />
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
    <Container maxWidth="lg" className={classes?.root}>
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
        <Button
          color="secondary"
          href="https://github.com/templ-project"
          size="large"
          startIcon={<GithubIcon />}
          target="_blank"
          variant="contained"
        >
          View on Github
        </Button>
      </div>
    </Container>
  );
}

const useHomeBannerStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: 'center',
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
    color: 'white',
    width: '80%',
    '& h2': {
      fontWeight: 'bold',
    },
    '& p': {
      fontSize: '1.25rem',
      fontWeight: 100,
    },
  },
}));

const StyledIAmSlider = withStyles({
  text: {
    fontSize: '2rem',
    fontWeight: 100,
  },
  textBold: {
    fontSize: '2rem',
    fontWeight: 500,
  },
})(IAmSlider);
