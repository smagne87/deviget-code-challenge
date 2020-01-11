import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import formatDistance from 'date-fns/formatDistance';

import { postActions } from '../../actions';
import Loader from '../Loader';
import useStyles from './SidebarStyles';

const Sidebar = ({
  posts,
  after,
  getAllPosts,
  readPost,
  dismissAllPosts,
  dismissPost,
  loading,
  fail,
  history,
  dismissPosts,
  readPosts,
}) => {
  const classes = useStyles();

  const handleDismissPost = (postName) => {
    dismissPost(postName);
  };
  const handleItemSelect = (postName) => {
    readPost(postName);
    history.push(`/post/${postName}`);
  };

  const handleLoadMore = () => {
    getAllPosts(after);
  };

  if (loading) {
    return <Loader />;
  }
  if (fail) {
    return null;
  }
  return (
    <div>
      {posts.map((post) => {
        const isDismissPost = dismissPosts.find(p => p === post.data.name);
        if (isDismissPost) {
          return null;
        }
        const isReadPost = readPosts.find(p => p === post.data.name);
        return (
          <Card className={classes.card} key={shortid.generate()}>
            <CardActionArea onClick={() => handleItemSelect(post.data.name)}>
              <div className={classes.avatarContainer}>
                {post.data.thumbnail
                  && (
                    <CardMedia
                      className={classes.imageThumbnail}
                      image={post.data.thumbnail}
                      title={post.data.title}
                    />
                  )}
                <p>{formatDistance(new Date(post.data.created * 1000), new Date())}</p>
              </div>
              <CardContent>
                {post.data.title} - <small>{post.data.author}</small>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" variant="outlined" onClick={() => handleDismissPost(post.data.name)}>
                Dismiss Post
              </Button>
              <span>{post.data.num_comments} comments</span>
              {!isReadPost && (<FiberManualRecordIcon />)}
            </CardActions>
          </Card>
        );
      })}
      <Button onClick={handleLoadMore} color="primary" variant="contained">Load More</Button>
      <Button onClick={dismissAllPosts} color="secondary" variant="outlined">Dismiss All</Button>
    </div>
  );
};

Sidebar.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  readPosts: PropTypes.arrayOf(PropTypes.string).isRequired,
  dismissPosts: PropTypes.arrayOf(PropTypes.string).isRequired,
  count: PropTypes.number.isRequired,
  after: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  fail: PropTypes.bool.isRequired,
  getAllPosts: PropTypes.func.isRequired,
  dismissAllPosts: PropTypes.func.isRequired,
  dismissPost: PropTypes.func.isRequired,
  readPost: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({
  posts: {
    loading,
    fail,
    posts,
    count,
    after,
    dismissPosts,
    readPosts,
  },
}) => ({
  posts,
  count,
  after,
  loading,
  fail,
  dismissPosts,
  readPosts,
});

const mapDispatchToPropsActions = dispatch => ({
  getAllPosts: after => dispatch(postActions.getAllPosts(after)),
  dismissAllPosts: () => dispatch(postActions.dismissAllPosts()),
  dismissPost: postName => dispatch(postActions.dismissPost(postName)),
  readPost: postName => dispatch(postActions.readPost(postName)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(Sidebar));
