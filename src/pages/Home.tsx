import MetaData from './MetaData';
import { CgMouse } from 'react-icons/all';
import './home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <MetaData title="Shopping Store" />
      <div className="banner">
        <p>Welcome to Shopping Store</p>
        <h1>SHOP AMAZING PRODUCTS IN THE STORE</h1>
        <Link to="/store">
          <span className="button">
            Shop <CgMouse />
          </span>
        </Link>
      </div>
    </>
  );
};

export default Home;
