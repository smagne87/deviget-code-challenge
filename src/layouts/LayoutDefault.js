import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles/LayoutDefaultStyles';
import Sidebar from '../components/Sidebar';
import Home from '../views/home';
import Post from '../views/post';

const LayoutDefault = () => {
  const classes = useStyles();
  return (
    <main className={classes.container}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={7}>
          <div className={classes.mainContainer}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/post/:id" component={Post} />
            </Switch>
          </div>
        </Grid>
      </Grid>
    </main>
  );
};

export default LayoutDefault;
