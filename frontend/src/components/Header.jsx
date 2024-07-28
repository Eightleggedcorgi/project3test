import { Link } from "react-router-dom";

const Header = (props) => {
  return (
      <nav className='nav'>
          <Link to="/upload">
              <div>Emergency Upload</div>
          </Link>
      </nav>
  );
}

export default Header;