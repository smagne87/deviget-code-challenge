import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import cls from 'classnames';
import { get } from 'lodash';

import styles from './PostStyles';
import Loader from '../../components/Loader';

class Post extends PureComponent {
  componentDidMount() {
    const { match, history, dismissPosts } = this.props;
    const id = get(match, 'params.id');
    const isDismissPost = dismissPosts.find(p => p === id);
    if (typeof id === 'undefined' || id === null || id === '' || isDismissPost) {
      history.push('/home');
    }
  }

  render() {
    const {
      classes,
      loading,
      match,
      posts,
    } = this.props;
    if (loading) {
      return <Loader />;
    }
    const id = get(match, 'params.id');
    const post = posts.find(p => p.data.name === id);
    return (
      <div className={cls([classes.postMainContainer, 'posts-main-container'])}>
        {post.data.thumbnail && (<img className={classes.image} src={post.data.thumbnail} alt="" />)}
        <div>
          <h2>{post.data.title}</h2>
          <p>{post.data.author}</p>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  loading: PropTypes.bool.isRequired,
  fail: PropTypes.bool.isRequired,
  dismissPosts: PropTypes.arrayOf(PropTypes.string).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  classes: PropTypes.shape({
    postMainContainer: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

Post.defaultProps = {
  match: {
    params: {
      id: '',
    },
  },
};

const mapStateToProps = ({
  posts: {
    loading,
    fail,
    posts,
    dismissPosts,
  },
}) => ({
  posts,
  loading,
  fail,
  dismissPosts,
});

const mapDispatchToPropsActions = () => ({});

const PostStyles = withStyles(styles)(Post);

export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(PostStyles));
