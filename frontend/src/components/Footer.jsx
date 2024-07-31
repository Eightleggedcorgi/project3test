import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
      <nav className='nav'>
          <Link to="/weather">
              <div>
               Search</div>
          </Link>
      </nav>
  );
}

export default Footer;