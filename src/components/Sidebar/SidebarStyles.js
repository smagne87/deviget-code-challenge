import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  avatarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 5,
  },
  imageThumbnail: {
    width: 80,
    height: 80,
  },
  card: {
    maxWidth: 345,
    marginBottom: 15,
  },
}));

export default useStyles;
