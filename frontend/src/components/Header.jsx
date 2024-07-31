import "../stylenick.css";
import { Link } from "react-router-dom";
import weatherLogo from  '../assets/naturalDisasterIcon.png';


const Header = (props) => {
  return (
      <nav className='nav'>
          <Link to="/">
              <div className="weatherLogo">
              <img src={weatherLogo} alt={"S"} />
              </div>
          </Link>
      </nav>
  );
}

export default Header;