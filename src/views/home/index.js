import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import cls from 'classnames';

import { postActions } from '../../actions';
import styles from './HomeStyles';

class Home extends PureComponent {
  componentDidMount() {
    const { getAllPosts } = this.props;
    getAllPosts();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.homeMainContainer}>
        <div className={cls([classes.container, 'home-search-container'])}>
          <h2>Reddit View</h2>
          <p>Click on the post to get some details.</p>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    homeMainContainer: PropTypes.string.isRequired,
    container: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToPropsActions = dispatch => ({
  getAllPosts: () => dispatch(postActions.getAllPosts()),
});

const HomeStyles = withStyles(styles)(Home);

export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(HomeStyles));
