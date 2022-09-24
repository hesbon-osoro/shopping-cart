import { Typography } from '@material-ui/core';
import { Error } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './notFound.css';

const NotFound = () => {
  return (
    <div className="PageNotFound">
      <Error />
      <Typography>404!</Typography>
      <p>This page does not exist</p>
      <p>But an amazing product does!</p>
      <Link to="/store">Store</Link>
    </div>
  );
};

export default NotFound;
