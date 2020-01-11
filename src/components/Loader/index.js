import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './LoadingStyles';

const Loader = () => {
  const classes = useStyles();

  return (<div className={classes.loaderContainer}><CircularProgress /></div>);
};

export default Loader;
